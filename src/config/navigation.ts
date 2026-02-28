/**
 * CFG TWPO - Navigation Utilities
 * ===============================
 * Prefetching, smooth transitions, and navigation helpers
 */

import type { PrefetchConfig, TransitionOptions, NavigationEvent } from './types';

/**
 * Default prefetch configuration
 */
export const defaultPrefetchConfig: PrefetchConfig = {
  enabled: true,
  timeout: 200, // ms before prefetch starts
  cacheSize: 10, // number of prefetched pages to cache
};

/**
 * Default transition options
 */
export const defaultTransitionOptions: TransitionOptions = {
  duration: 300,
  easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
};

/**
 * Links to prefetch on hover (high priority)
 */
const PREFETCH_SELECTORS = [
  'a[data-prefetch]',
  'a[href^="/catalog"]',
  'a[href^="/product"]',
];

/**
 * Initialize prefetching system
 */
export function initPrefetching(config: Partial<PrefetchConfig> = {}): void {
  if (typeof window === 'undefined') return;
  
  const cfg = { ...defaultPrefetchConfig, ...config };
  
  if (!cfg.enabled) return;
  
  // Use Intersection Observer for visibility-based prefetching
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const link = entry.target as HTMLAnchorElement;
          prefetchLink(link.href);
          observer.unobserve(link);
        }
      });
    },
    { rootMargin: '100px' }
  );
  
  // Observe all relevant links
  document.querySelectorAll(PREFETCH_SELECTORS.join(', ')).forEach((el) => {
    observer.observe(el);
  });
  
  // Store observer for cleanup
  (window as any).__prefetchObserver = observer;
}

/**
 * Prefetch a specific link
 */
export function prefetchLink(href: string): void {
  if (typeof window === 'undefined') return;
  
  // Skip if already prefetched or external
  if (!href || href.startsWith('http') || href.startsWith('#')) return;
  
  // Use link rel="prefetch" if supported
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  
  link.onerror = () => {
    // Fallback to fetch for HTML
    fetch(href, { mode: 'no-cors' }).catch(() => {});
  };
  
  document.head.appendChild(link);
}

/**
 * Add click handlers for prefetching on hover
 */
export function initHoverPrefetch(): void {
  if (typeof window === 'undefined') return;
  
  document.addEventListener('mouseover', (e) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a') as HTMLAnchorElement;
    
    if (link && link.href && !link.href.startsWith('http')) {
      // Small delay to avoid prefetching on accidental hovers
      setTimeout(() => {
        prefetchLink(link.href);
      }, 100);
    }
  }, { passive: true });
}

/**
 * Smooth scroll to element
 */
export function smoothScrollTo(elementId: string, options?: ScrollIntoViewOptions): void {
  if (typeof window === 'undefined') return;
  
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      ...options,
    });
  }
}

/**
 * Navigate with transition effect
 */
export function navigateWithTransition(
  url: string,
  options: Partial<TransitionOptions> = {}
): void {
  if (typeof window === 'undefined') return;
  
  const opts = { ...defaultTransitionOptions, ...options };
  
  // Create fade-out overlay
  const overlay = document.createElement('div');
  overlay.id = 'page-transition-overlay';
  overlay.style.cssText = `
    position: fixed;
    inset: 0;
    background: #0d0d0d;
    z-index: 9999;
    opacity: 0;
    pointer-events: none;
    transition: opacity ${opts.duration}ms ${opts.easing};
  `;
  
  document.body.appendChild(overlay);
  
  // Trigger fade out
  requestAnimationFrame(() => {
    overlay.style.opacity = '1';
    overlay.style.pointerEvents = 'auto';
    
    // Navigate after transition
    setTimeout(() => {
      window.location.href = url;
    }, opts.duration);
  });
}

/**
 * Initialize View Transitions (if supported)
 */
export function initViewTransitions(): void {
  if (typeof window === 'undefined') return;
  
  // Check for View Transitions API support
  if ('startViewTransition' in document) {
    // Override default navigation
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a') as HTMLAnchorElement;
      
      // Only handle internal links
      if (!link || !link.href || link.href.startsWith('http')) return;
      
      // Skip if it's a download or has target="_blank"
      if (link.download || link.target === '_blank') return;
      
      e.preventDefault();
      
      (document as any).startViewTransition(() => {
        window.location.href = link.href;
      });
    });
  }
}

/**
 * Track navigation events
 */
const navigationListeners: ((event: NavigationEvent) => void)[] = [];

export function trackNavigation(callback: (event: NavigationEvent) => void): () => void {
  navigationListeners.push(callback);
  
  return () => {
    const index = navigationListeners.indexOf(callback);
    if (index > -1) {
      navigationListeners.splice(index, 1);
    }
  };
}

function emitNavigationEvent(type: NavigationEvent['type'], from: string, to: string): void {
  const event: NavigationEvent = {
    from,
    to,
    type,
    timestamp: Date.now(),
  };
  
  navigationListeners.forEach((callback) => callback(event));
}

/**
 * Override pushState and replaceState to track navigation
 */
export function initNavigationTracking(): void {
  if (typeof window === 'undefined') return;
  
  const originalPushState = window.history.pushState;
  const originalReplaceState = window.history.replaceState;
  
  window.history.pushState = function (...args) {
    const result = originalPushState.apply(this, args);
    const url = args[2] as string;
    emitNavigationEvent('push', window.location.pathname, url);
    return result;
  };
  
  window.history.replaceState = function (...args) {
    const result = originalReplaceState.apply(this, args);
    const url = args[2] as string;
    emitNavigationEvent('replace', window.location.pathname, url);
    return result;
  };
  
  // Handle browser back/forward
  window.addEventListener('popstate', () => {
    emitNavigationEvent('push', '', window.location.pathname);
  });
}

/**
 * Initialize all navigation enhancements
 */
export function initNavigation(config: Partial<PrefetchConfig> = {}): void {
  if (typeof window === 'undefined') return;
  
  initPrefetching(config);
  initHoverPrefetch();
  initViewTransitions();
  initNavigationTracking();
  
  // Dispatch ready event
  window.dispatchEvent(new CustomEvent('navigation-ready'));
}

/**
 * Navigate programmatically
 */
export function navigate(
  url: string,
  options: {
    prefetch?: boolean;
    transition?: boolean;
    replace?: boolean;
  } = {}
): void {
  const { prefetch = true, transition = false, replace = false } = options;
  
  if (prefetch) {
    prefetchLink(url);
  }
  
  if (transition) {
    navigateWithTransition(url);
  } else if (replace) {
    window.history.replaceState({}, '', url);
  } else {
    window.history.pushState({}, '', url);
  }
}

/**
 * Check if current route matches pattern
 */
export function isActiveRoute(pattern: string | RegExp, currentPath?: string): boolean {
  const path = currentPath || (typeof window !== 'undefined' ? window.location.pathname : '');
  
  if (typeof pattern === 'string') {
    if (pattern.endsWith('/*')) {
      const base = pattern.slice(0, -2);
      return path.startsWith(base);
    }
    return path === pattern;
  }
  
  return pattern.test(path);
}

/**
 * Get URL with query params
 */
export function buildUrl(path: string, params: Record<string, string | number | boolean> = {}): string {
  const url = new URL(path, typeof window !== 'undefined' ? window.location.origin : 'http://localhost');
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      url.searchParams.set(key, String(value));
    }
  });
  
  return url.pathname + url.search;
}
