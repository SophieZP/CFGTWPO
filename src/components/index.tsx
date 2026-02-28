import FiltersSection from "./FiltersSection";
import NavigationBarSection from "./NavigationBarSection";
import ProductCatalogSection from "./ProductCatalogSection";

export default function Catalog() {
  return (
    <div className="flex flex-col min-h-[1157px] items-start relative bg-[#121417]">
      <NavigationBarSection />
      <div className="flex max-w-[1600px] items-start relative w-full flex-[0_0_auto] z-0">
        <FiltersSection />
        <ProductCatalogSection />
      </div>
    </div>
  );
}