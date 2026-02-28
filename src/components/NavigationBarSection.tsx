import { useState } from "react";
import icon4 from "./icon-4.svg";
import icon5 from "./icon-5.svg";
import icon6 from "./icon-6.svg";
import icon7 from "./icon-7.svg";

const navigationLinks = [
  { label: "Home", href: "#home", isActive: false },
  { label: "Catalog", href: "#catalog", isActive: true },
  { label: "New Arrivals", href: "#new-arrivals", isActive: false },
  { label: "Support", href: "#support", isActive: false },
];

export default function NavigationBarSection() {  const [searchQuery, setSearchQuery] = useState("");
  const cartItemCount = 3;

  return (
    <header className="flex flex-col items-start px-6 py-4 relative self-stretch w-full flex-[0_0_auto] z-[1] bg-black [border-top-style:none] [border-right-style:none] border-b [border-bottom-style:solid] [border-left-style:none] border-[#666c744c]">
      <div className="flex max-w-[1600px] items-center justify-between relative w-full flex-[0_0_auto]">
        <div className="relative w-[570.98px] h-[38px]">
          <div className="gap-3 absolute top-[calc(50.00%_-_16px)] left-0 inline-flex items-start">
            <a
              href="#home"
              className="flex flex-col w-8 h-10 items-start relative"
              aria-label="CFG TWPO Home"
            >
              <img
                className="relative w-[30px] h-6"
                alt="CFG TWPO Logo"
                src={icon4}
              />
            </a>

            <a
              href="#home"
              className="inline-flex flex-col items-start relative flex-[0_0_auto]"
            >
              <h1 className="w-[110.98px] h-8 mt-[-1.00px] [font-family:'Space_Grotesk-Bold',Helvetica] font-bold text-white text-2xl tracking-[-0.60px] leading-8 relative flex items-center whitespace-nowrap">
                CFG TWPO
              </h1>
            </a>
          </div>

          <div className="flex w-96 items-start justify-center absolute top-[calc(50.00%_-_19px)] left-[187px]">
            <form
              className="flex flex-col items-start pl-10 pr-3 py-[9px] relative flex-1 self-stretch grow bg-[#1a1d21] rounded-lg overflow-hidden border border-solid border-[#666c7480]"
              role="search"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="search-input" className="sr-only">
                Search parts, brands, or SKU
              </label>
              <input
                id="search-input"
                className="relative self-stretch w-full border-[none] [background:none] mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-[#666c74] text-sm tracking-[0] leading-[normal] p-0"
                placeholder="Search parts, brands, or SKU..."
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search parts, brands, or SKU"
              />
            </form>

            <div className="inline-flex h-full items-center pl-3 pr-0 py-0 absolute top-0 left-0 pointer-events-none">
              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <img
                  className="relative w-[18px] h-[18px]"
                  alt=""
                  src={icon5}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
          <nav
            className="gap-8 inline-flex items-center relative flex-[0_0_auto]"
            aria-label="Main navigation"
          >
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`flex-col relative flex-[0_0_auto] inline-flex items-start ${
                  link.isActive ? "text-[#df201a]" : "text-white"
                }`}
                aria-current={link.isActive ? "page" : undefined}
              >
                <span className="h-5 mt-[-1.00px] [font-family:'Space_Grotesk-Medium',Helvetica] font-medium text-sm tracking-[0] leading-5 relative flex items-center whitespace-nowrap">
                  {link.label}
                </span>
              </a>
            ))}
          </nav>

          <div className="inline-flex items-center gap-[11.99px] relative flex-[0_0_auto]">
            <button
              className="all-[unset] box-border inline-flex flex-col p-2 relative flex-[0_0_auto] items-center justify-center cursor-pointer"
              aria-label={`Shopping cart with ${cartItemCount} items`}
              type="button"
            >
              <div className="inline-flex items-start justify-center relative flex-[0_0_auto]">
                <img
                  className="relative w-[19.98px] h-5"
                  alt=""
                  src={icon6}
                  aria-hidden="true"
                />
              </div>

              {cartItemCount > 0 && (
                <div className="flex w-4 h-4 items-center justify-center absolute top-1 right-0 bg-[#df201a] rounded-full">
                  <span className="justify-center w-[6.09px] h-[15px] mt-[-0.50px] [font-family:'Space_Grotesk-Bold',Helvetica] font-bold text-white text-[10px] text-center tracking-[0] leading-[15px] relative flex items-center whitespace-nowrap">
                    {cartItemCount}
                  </span>
                </div>
              )}
            </button>

            <button
              className="inline-flex flex-col p-2 relative flex-[0_0_auto] items-center justify-center cursor-pointer all-[unset] box-border"
              aria-label="User account"
              type="button"
            >
              <div className="inline-flex items-start justify-center relative flex-[0_0_auto]">
                <img
                  className="relative w-5 h-5"
                  alt=""
                  src={icon7}
                  aria-hidden="true"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
