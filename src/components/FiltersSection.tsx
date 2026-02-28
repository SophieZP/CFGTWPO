import { useState } from "react";
import icon8 from "./icon-8.svg";
import vector2 from "./vector-2.svg";
import vector3 from "./vector-3.svg";
import vector4 from "./vector-4.svg";
import vector from "./vector.svg";

interface Category {
  id: string;
  label: string;
  checked: boolean;
}

interface Brand {
  id: string;
  label: string;
  selected: boolean;
}

export default function FiltersSection() {  const [categories, setCategories] = useState<Category[]>([
    { id: "engine", label: "Engine Components", checked: false },
    { id: "exhaust", label: "Exhaust Systems", checked: true },
    { id: "suspension", label: "Suspension", checked: false },
    { id: "braking", label: "Braking", checked: false },
    { id: "interior", label: "Interior", checked: false },
  ]);

  const [brands, setBrands] = useState<Brand[]>([
    { id: "cfg", label: "CFG Performance", selected: false },
    { id: "twpo", label: "TwPo Racing", selected: true },
  ]);

  const [priceRange] = useState({ min: "$50", max: "$5000+" });
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

  const handleCategoryChange = (id: string) => {
    setCategories(
      categories.map((cat) =>
        cat.id === id ? { ...cat, checked: !cat.checked } : cat,
      ),
    );
  };

  const handleBrandChange = (id: string) => {
    setBrands(
      brands.map((brand) =>
        brand.id === id ? { ...brand, selected: !brand.selected } : brand,
      ),
    );
  };

  const handleReset = () => {
    setCategories(categories.map((cat) => ({ ...cat, checked: false })));
    setBrands(brands.map((brand) => ({ ...brand, selected: false })));
    setSelectedYear("");
    setSelectedModel("");
  };

  return (
    <aside
      className="flex flex-col w-72 h-[1084px] items-start p-6 relative z-[1] bg-black border-r [border-right-style:solid] border-[#666c744c]"
      role="complementary"
      aria-label="Product filters"
    >
      <div className="pt-0 pb-8 px-0 flex-[0_0_auto] flex flex-col items-start relative self-stretch w-full">
        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              <img
                className="relative w-[18px] h-3"
                alt=""
                src={icon8}
                aria-hidden="true"
              />
            </div>

            <h2 className="w-[53.81px] h-7 mt-[-1.00px] [font-family:'Space_Grotesk-Bold',Helvetica] font-bold text-white text-lg tracking-[0] leading-7 relative flex items-center whitespace-nowrap">
              Filters
            </h2>
          </div>

          <button
            className="all-[unset] box-border inline-flex flex-col relative flex-[0_0_auto] items-center justify-center cursor-pointer"
            onClick={handleReset}
            aria-label="Reset all filters"
          >
            <span className="justify-center w-[38.22px] h-4 mt-[-1.00px] [font-family:'Space_Grotesk-Bold',Helvetica] font-bold text-[#666c74] text-xs text-center tracking-[0.60px] leading-4 relative flex items-center whitespace-nowrap">
              RESET
            </span>
          </button>
        </div>
      </div>

      <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
        <fieldset className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto] border-0 p-0 m-0">
          <legend className="flex flex-col items-start self-stretch w-full relative flex-[0_0_auto]">
            <span className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Space_Grotesk-Bold',Helvetica] font-bold text-[#e8eaed] text-sm tracking-[0.70px] leading-5">
              CATEGORY
            </span>
          </legend>

          <div className="flex flex-col items-end gap-2 relative self-stretch w-full flex-[0_0_auto]">
            {categories.map((category) => (
              <label
                key={category.id}
                className={`flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto] cursor-pointer ${
                  category.checked ? "w-60 gap-[11px] ml-[-1.00px]" : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={category.checked}
                  onChange={() => handleCategoryChange(category.id)}
                  className="sr-only"
                  aria-label={category.label}
                />
                {category.checked ? (
                  <div className="flex flex-col w-[18px] h-[18px] items-start relative bg-[#df201a] rounded border border-solid border-transparent">
                    <div className="flex flex-col w-4 h-4 items-center justify-center relative">
                      <div className="relative w-4 h-4">
                        <img
                          className="absolute w-[78.05%] h-[71.87%] top-[28.13%] left-[21.95%]"
                          alt=""
                          src={vector}
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-4 h-4 rounded border border-solid border-[#666c74]" />
                )}

                <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                  <span
                    className={`${
                      category.id === "engine"
                        ? "w-[135.78px]"
                        : category.id === "exhaust"
                          ? "w-[116.72px]"
                          : category.id === "suspension"
                            ? "w-[78.47px]"
                            : category.id === "braking"
                              ? "w-[50.89px]"
                              : "w-[48.92px]"
                    } h-5 mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-gray-300 text-sm tracking-[0] leading-5 relative flex items-center whitespace-nowrap`}
                  >
                    {category.label}
                  </span>
                </div>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <h3 className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Space_Grotesk-Bold',Helvetica] font-bold text-[#e8eaed] text-sm tracking-[0.70px] leading-5">
              PRICE RANGE
            </h3>
          </div>

          <div className="flex flex-col items-start gap-3 px-2 py-0 relative self-stretch w-full flex-[0_0_auto]">
            <div
              className="relative self-stretch w-full h-1 bg-[#666c74] rounded-lg"
              role="slider"
              aria-label="Price range slider"
              aria-valuemin={50}
              aria-valuemax={5000}
            >
              <div className="flex w-full items-center justify-center relative -top-1.5">
                <div className="relative flex-1 grow h-4" />
              </div>
            </div>

            <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start relative self-stretch flex-[0_0_auto]">
                <span className="w-[22.25px] h-4 mt-[-1.00px] [font-family:'Space_Grotesk-Medium',Helvetica] font-medium text-[#e39b1d] text-xs tracking-[0] leading-4 relative flex items-center whitespace-nowrap">
                  {priceRange.min}
                </span>
              </div>

              <div className="inline-flex flex-col items-start relative self-stretch flex-[0_0_auto]">
                <span className="w-[45.17px] h-4 mt-[-1.00px] [font-family:'Space_Grotesk-Medium',Helvetica] font-medium text-[#e39b1d] text-xs tracking-[0] leading-4 relative flex items-center whitespace-nowrap">
                  {priceRange.max}
                </span>
              </div>
            </div>
          </div>
        </div>

        <fieldset className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto] border-0 p-0 m-0">
          <legend className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <span className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Space_Grotesk-Bold',Helvetica] font-bold text-[#e8eaed] text-sm tracking-[0.70px] leading-5">
              BRAND
            </span>
          </legend>

          <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
            {brands.map((brand) => (
              <label
                key={brand.id}
                className={`${
                  brand.selected
                    ? "pl-3 pr-[11px] py-3 border-[#df201a66] shadow-[0px_0px_10px_#df201a1a]"
                    : "p-3 border-transparent"
                } flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] bg-[#1a1d21] rounded border border-solid cursor-pointer`}
              >
                <input
                  type="radio"
                  name="brand"
                  checked={brand.selected}
                  onChange={() => handleBrandChange(brand.id)}
                  className="sr-only"
                  aria-label={brand.label}
                />
                <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                  <span
                    className={`${
                      brand.id === "cfg" ? "w-[116.14px]" : "w-[84.95px]"
                    } h-5 mt-[-1.00px] [font-family:'Space_Grotesk-Medium',Helvetica] font-medium text-white text-sm tracking-[0] leading-5 relative flex items-center whitespace-nowrap`}
                  >
                    {brand.label}
                  </span>
                </div>

                {brand.selected ? (
                  <div className="flex flex-col w-[18px] h-[18px] items-start relative bg-[#df201a] rounded-full border border-solid border-transparent">
                    <div className="flex flex-col w-4 h-4 items-center justify-center relative">
                      <div className="relative w-4 h-4">
                        <img
                          className="absolute w-[78.05%] h-[71.87%] top-[28.13%] left-[21.95%]"
                          alt=""
                          src={vector2}
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-4 h-4 rounded-full border border-solid border-[#666c74]" />
                )}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto] border-0 p-0 m-0">
          <legend className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <span className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Space_Grotesk-Bold',Helvetica] font-bold text-[#e8eaed] text-sm tracking-[0.70px] leading-5">
              COMPATIBILITY
            </span>
          </legend>

          <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch w-full h-[42px]">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full h-full bg-[#1a1d21] rounded-lg border border-solid border-[#666c7480] pl-[13px] pr-[30px] py-0 [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-5 appearance-none cursor-pointer"
                aria-label="Select vehicle year"
              >
                <option value="">Select Year</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
              </select>
              <div className="w-[239px] h-[42px] pl-[209px] pr-[9px] py-[10.5px] flex flex-col items-start justify-center absolute top-0 left-0 pointer-events-none">
                <div className="relative w-[21px] h-[21px]">
                  <img
                    className="absolute w-[73.75%] h-[63.75%] top-[36.25%] left-[26.25%]"
                    alt=""
                    src={vector3}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>

            <div className="relative self-stretch w-full h-[42px]">
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full h-full bg-[#1a1d21] rounded-lg border border-solid border-[#666c7480] pl-[13px] pr-[30px] py-0 [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-5 appearance-none cursor-pointer"
                aria-label="Select vehicle model"
              >
                <option value="">Select Model</option>
                <option value="model1">Model 1</option>
                <option value="model2">Model 2</option>
                <option value="model3">Model 3</option>
              </select>
              <div className="w-[239px] h-[42px] pl-[209px] pr-[9px] py-[10.5px] flex flex-col items-start justify-center absolute top-0 left-0 pointer-events-none">
                <div className="relative w-[21px] h-[21px]">
                  <img
                    className="absolute w-[73.75%] h-[63.75%] top-[36.25%] left-[26.25%]"
                    alt=""
                    src={vector4}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    </aside>
  );
};
