import { useState } from "react";
import container2 from "./container-2.svg";
import container3 from "./container-3.svg";
import container4 from "./container-4.svg";
import container from "./container.svg";
import icon2 from "./icon-2.svg";
import icon3 from "./icon-3.svg";
import icon9 from "./icon-9.svg";
import icon10 from "./icon-10.svg";
import icon11 from "./icon-11.svg";
import icon12 from "./icon-12.svg";
import icon from "./icon.svg";
import image from "./image.svg";
import vector5 from "./vector-5.svg";

interface Product {
  id: number;
  title: string;
  brand: string;
  category: string;
  price: string;
  image: string;
  stockStatus: "IN STOCK" | "PRE-ORDER" | "LOW STOCK";
  stockBadgeColor: string;
  stockBorderColor: string;
  stockShadowColor: string;
  rating: number;
  cartIcon: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Titanium X-Pipe…",
    brand: "TwPo Racing",
    category: "Series 500",
    price: "$1,299.00",
    image: "/titanium-exhaust-tip.png",
    stockStatus: "IN STOCK",
    stockBadgeColor: "#1ed838",
    stockBorderColor: "#1ed838cc",
    stockShadowColor: "#1ed83833",
    rating: 4,
    cartIcon: icon9,
  },
  {
    id: 2,
    title: "Coilover…",
    brand: "CFG Performance",
    category: "Track Ready",
    price: "$2,450.00",
    image: "/suspension-kit.png",
    stockStatus: "IN STOCK",
    stockBadgeColor: "#1ed838",
    stockBorderColor: "#1ed838cc",
    stockShadowColor: "#1ed83833",
    rating: 5,
    cartIcon: icon10,
  },
  {
    id: 3,
    title: "Carbon Fiber…",
    brand: "TwPo Racing",
    category: "Interior",
    price: "$899.00",
    image: "/steering-wheel.png",
    stockStatus: "PRE-ORDER",
    stockBadgeColor: "#df201a",
    stockBorderColor: "#df201acc",
    stockShadowColor: "#df201a33",
    rating: 0,
    cartIcon: icon11,
  },
  {
    id: 4,
    title: "Monoblock Forge…",
    brand: "CFG Performance",
    category: "19 Inch",
    price: "$3,200.00",
    image: "/alloy-wheel.png",
    stockStatus: "IN STOCK",
    stockBadgeColor: "#1ed838",
    stockBorderColor: "#1ed838cc",
    stockShadowColor: "#1ed83833",
    rating: 4,
    cartIcon: icon12,
  },
  {
    id: 5,
    title: "Digital Racing…",
    brand: "TwPo Racing",
    category: "Electronics",
    price: "$1,850.00",
    image: "/digital-dash.png",
    stockStatus: "IN STOCK",
    stockBadgeColor: "#1ed838",
    stockBorderColor: "#1ed838cc",
    stockShadowColor: "#1ed83833",
    rating: 0,
    cartIcon: icon,
  },
  {
    id: 6,
    title: "Stage 2…",
    brand: "CFG Performance",
    category: "Induction",
    price: "$2,100.00",
    image: "/turbocharger.png",
    stockStatus: "LOW STOCK",
    stockBadgeColor: "#9ca3af",
    stockBorderColor: "#6b7280",
    stockShadowColor: "#9ca3af33",
    rating: 4,
    cartIcon: image,
  },
];

export default function ProductCatalogSection() {  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 8;

  return (
    <section className="flex flex-col items-start p-10 relative flex-1 self-stretch grow z-0">
      <div className="bg-[linear-gradient(35deg,rgba(26,29,33,1)_25%,rgba(26,29,33,0)_25%),linear-gradient(325deg,rgba(26,29,33,1)_25%,rgba(26,29,33,0)_25%),linear-gradient(35deg,rgba(26,29,33,0)_75%,rgba(26,29,33,1)_75%),linear-gradient(325deg,rgba(26,29,33,0)_75%,rgba(26,29,33,1)_75%)] opacity-10 absolute w-full h-full top-0 left-0" />

      <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
        <header className="flex items-center justify-between pt-0 pb-4 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#666c7433]">
          <nav
            className="inline-flex items-center gap-2 relative flex-[0_0_auto]"
            aria-label="Breadcrumb"
          >
            <ol className="inline-flex items-center gap-2">
              <li className="flex-col relative flex-[0_0_auto] inline-flex items-start">
                <a
                  href="/catalog"
                  className="w-[52.13px] h-5 mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-[#666c74] text-sm tracking-[0] leading-5 relative flex items-center whitespace-nowrap hover:text-white transition-colors"
                >
                  Catalog
                </a>
              </li>

              <li
                className="inline-flex flex-col items-start relative flex-[0_0_auto]"
                aria-hidden="true"
              >
                <span className="w-[5.19px] h-5 mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-[#666c74] text-sm tracking-[0] leading-5 relative flex items-center whitespace-nowrap">
                  /
                </span>
              </li>

              <li className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <span
                  className="w-[152.72px] h-5 mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-5 relative flex items-center whitespace-nowrap"
                  aria-current="page"
                >
                  Performance Exhausts
                </span>
              </li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
            <label
              htmlFor="sort-select"
              className="inline-flex flex-col items-start relative flex-[0_0_auto]"
            >
              <span className="w-[53.69px] h-5 mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-[#666c74] text-sm tracking-[0] leading-5 relative flex items-center whitespace-nowrap">
                Sort by:
              </span>
            </label>

            <div className="relative w-[122px] h-5">
              <select
                id="sort-select"
                className="w-full h-full bg-transparent border-none text-white [font-family:'Space_Grotesk-Bold',Helvetica] font-bold text-sm cursor-pointer appearance-none pr-8 focus:outline-none"
              >
                <option value="relevance">Relevance</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
              <div className="absolute right-0 top-0 w-[21px] h-[21px] pointer-events-none flex items-center justify-center">
                <img
                  className="w-[73.75%] h-[63.75%]"
                  alt="Dropdown arrow"
                  src={vector5}
                />
              </div>
            </div>
          </div>
        </header>

        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          <p className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-transparent text-sm tracking-[0] leading-[14px]">
            <span className="text-[#666c74] leading-5">Showing </span>
            <span className="[font-family:'Space_Grotesk-Bold',Helvetica] font-bold text-white">
              12
            </span>
            <span className="text-[#666c74] leading-5"> results for </span>
            <span className="text-white">&quot;TwPo Racing&quot;</span>
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6 relative self-stretch w-full">
          {products.map((product, index) => (
            <article
              key={product.id}
              className="flex flex-col items-start bg-black rounded-xl overflow-hidden border border-solid border-[#666c74] hover:border-[#df201a] transition-colors group"
            >
              <div className="flex flex-col items-start justify-center relative self-stretch w-full flex-[0_0_auto] z-[1] bg-[#1a1d21] overflow-hidden aspect-[1]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="relative self-stretch w-full h-52 object-cover"
                />

                <div className="bg-[linear-gradient(0deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0)_100%)] opacity-60 absolute w-full h-full top-0 left-0" />

                <div
                  className="inline-flex flex-col items-start px-2 py-0.5 absolute top-3 left-3 bg-[#00000099] rounded border border-solid backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)]"
                  style={{
                    borderColor: product.stockBorderColor,
                    boxShadow: `0px 0px 10px ${product.stockShadowColor}`,
                  }}
                >
                  <span
                    className="h-[15px] [font-family:'Space_Grotesk-Bold',Helvetica] font-bold text-[10px] tracking-[0.50px] leading-[15px] relative flex items-center whitespace-nowrap"
                    style={{ color: product.stockBadgeColor }}
                  >
                    {product.stockStatus}
                  </span>
                </div>

                <button
                  className="inline-flex p-3 absolute right-4 -bottom-8 bg-[#df201a] rounded-full opacity-0 group-hover:opacity-100 group-hover:bottom-4 transition-all duration-300 items-center justify-center hover:bg-[#c01a15] focus:outline-none focus:ring-2 focus:ring-[#df201a] focus:ring-offset-2 focus:ring-offset-black"
                  aria-label={`Add ${product.title} to cart`}
                >
                  <div className="absolute w-full h-full top-0 left-0 bg-[#ffffff01] rounded-full shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a]" />
                  <img
                    className="relative w-[20.7px] h-[21px]"
                    alt="Add to cart"
                    src={product.cartIcon}
                  />
                </button>
              </div>

              <div className="flex flex-col items-start justify-between p-5 relative self-stretch w-full flex-[0_0_auto] z-0">
                <div className="flex flex-col items-start pt-0 pb-1 px-0 self-stretch w-full relative flex-[0_0_auto]">
                  <h3 className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Space_Grotesk-Bold',Helvetica] font-bold text-white text-lg tracking-[0] leading-7">
                    {product.title}
                  </h3>
                </div>

                <div className="pt-0 pb-3 px-0 flex-[0_0_auto] flex flex-col items-start relative self-stretch w-full">
                  <p className="relative self-stretch mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-[#666c74] text-sm tracking-[0] leading-5">
                    {product.brand} • {product.category}
                  </p>
                </div>

                <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                  <span className="[font-family:'Space_Grotesk-Bold',Helvetica] font-bold text-[#e39b1d] text-xl tracking-[0] leading-7">
                    {product.price}
                  </span>
                  {product.rating > 0 && (
                    <div
                      className="flex items-center gap-1"
                      aria-label={`Rating: ${product.rating} out of 5 stars`}
                    >
                      <img
                        className="relative flex-[0_0_auto]"
                        alt={`${product.rating} stars`}
                        src={
                          product.id === 1
                            ? container3
                            : product.id === 2
                              ? container4
                              : product.id === 4
                                ? container
                                : container2
                        }
                      />
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <nav
          className="pt-12 pb-8 px-0 flex-[0_0_auto] flex flex-col items-start relative self-stretch w-full"
          aria-label="Pagination"
        >
          <div className="flex items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
            <ul className="gap-2 self-stretch inline-flex items-center relative flex-[0_0_auto]">
              <li>
                <button
                  className="flex w-10 h-10 relative rounded-lg border border-solid border-[#666c744c] items-center justify-center hover:border-[#df201a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#df201a]"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  aria-label="Previous page"
                >
                  <img
                    className="relative w-[7.4px] h-3"
                    alt="Previous"
                    src={icon2}
                  />
                </button>
              </li>

              <li>
                <button
                  className={`flex w-10 h-10 pt-[7.5px] pb-[8.5px] px-0 relative rounded-lg items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#df201a] ${
                    currentPage === 1
                      ? "bg-[#df201a]"
                      : "border border-solid border-[#666c744c] hover:border-[#df201a]"
                  }`}
                  onClick={() => setCurrentPage(1)}
                  aria-label="Page 1"
                  aria-current={currentPage === 1 ? "page" : undefined}
                >
                  <span
                    className={`justify-center w-[7.23px] h-6 mt-[-1.00px] [font-family:'Space_Grotesk-Bold',Helvetica] font-bold text-base text-center tracking-[0] leading-6 relative flex items-center whitespace-nowrap ${
                      currentPage === 1 ? "text-white" : "text-[#666c74]"
                    }`}
                  >
                    1
                  </span>
                </button>
              </li>

              <li>
                <button
                  className={`flex w-10 h-10 pt-[6.5px] pb-[7.5px] px-0 relative rounded-lg items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#df201a] ${
                    currentPage === 2
                      ? "bg-[#df201a]"
                      : "border border-solid border-[#666c744c] hover:border-[#df201a]"
                  }`}
                  onClick={() => setCurrentPage(2)}
                  aria-label="Page 2"
                  aria-current={currentPage === 2 ? "page" : undefined}
                >
                  <span
                    className={`justify-center w-[9.66px] h-6 [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-base text-center tracking-[0] leading-6 relative flex items-center whitespace-nowrap ${
                      currentPage === 2
                        ? "text-white [font-family:'Space_Grotesk-Bold',Helvetica] font-bold"
                        : "text-[#666c74]"
                    }`}
                  >
                    2
                  </span>
                </button>
              </li>

              <li>
                <button
                  className={`flex w-10 h-10 pt-[6.5px] pb-[7.5px] px-0 relative rounded-lg items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#df201a] ${
                    currentPage === 3
                      ? "bg-[#df201a]"
                      : "border border-solid border-[#666c744c] hover:border-[#df201a]"
                  }`}
                  onClick={() => setCurrentPage(3)}
                  aria-label="Page 3"
                  aria-current={currentPage === 3 ? "page" : undefined}
                >
                  <span
                    className={`justify-center w-[9.67px] h-6 [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-base text-center tracking-[0] leading-6 relative flex items-center whitespace-nowrap ${
                      currentPage === 3
                        ? "text-white [font-family:'Space_Grotesk-Bold',Helvetica] font-bold"
                        : "text-[#666c74]"
                    }`}
                  >
                    3
                  </span>
                </button>
              </li>

              <li className="inline-flex flex-col items-start px-2 py-0 relative flex-[0_0_auto]">
                <span
                  className="w-[12.16px] h-6 mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-[#666c74] text-base tracking-[0] leading-6 relative flex items-center whitespace-nowrap"
                  aria-hidden="true"
                >
                  ...
                </span>
              </li>

              <li>
                <button
                  className={`flex w-10 h-10 pt-[6.5px] pb-[7.5px] px-0 relative rounded-lg items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#df201a] ${
                    currentPage === 8
                      ? "bg-[#df201a]"
                      : "border border-solid border-[#666c744c] hover:border-[#df201a]"
                  }`}
                  onClick={() => setCurrentPage(8)}
                  aria-label="Page 8"
                  aria-current={currentPage === 8 ? "page" : undefined}
                >
                  <span
                    className={`justify-center w-[9.97px] h-6 [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-base text-center tracking-[0] leading-6 relative flex items-center whitespace-nowrap ${
                      currentPage === 8
                        ? "text-white [font-family:'Space_Grotesk-Bold',Helvetica] font-bold"
                        : "text-[#666c74]"
                    }`}
                  >
                    8
                  </span>
                </button>
              </li>

              <li>
                <button
                  className="flex w-10 h-10 relative rounded-lg border border-solid border-[#666c744c] items-center justify-center hover:border-[#df201a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#df201a]"
                  onClick={() =>
                    setCurrentPage(Math.min(totalPages, currentPage + 1))
                  }
                  disabled={currentPage === totalPages}
                  aria-label="Next page"
                >
                  <img
                    className="relative w-[7.4px] h-3"
                    alt="Next"
                    src={icon3}
                  />
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};
