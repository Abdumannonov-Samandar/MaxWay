import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Burger from "./Burger";
import Pitsa from "./Pitsa";
import Kombo from "./Kombo";
import Drinks from "./Drinks";
import Salad from "./Salads";
import Sweets from "./Sweets";
import FilterIcon from "../assets/icons/filter.svg";
import AllItems from "./all";

const tabItems = [
  { label: "Barchasi", component: <AllItems /> },
  { label: "Pitsa", component: <Pitsa /> },
  { label: "Burger", component: <Burger /> },
  { label: "Kombo", component: <Kombo /> },
  { label: "Salat", component: <Salad /> },
  { label: "Shirinliklar", component: <Sweets /> },
  { label: "Ichimliklar", component: <Drinks /> },
];

const Menu = () => {
  return (
    <section className="pt-[54px] md:pt-20">
      <div className="container">
        <div className="flex flex-col gap-10 max-w-[1110px] mx-auto">
          <hr className="h-[1px] w-full text-[#979797] opacity-20" />
          <Tabs defaultValue="Barchasi" className="w-full flex flex-col gap-10 md:gap-[105px] items-start">
            <TabsList className="flex flex-wrap h-full">
              {tabItems.map((item) => (
                <TabsTrigger key={item.label} value={item.label}>
                  {item.label}
                </TabsTrigger>
              ))}
              <TabsTrigger
                value="Filtr"
                className="px-[40px] bg-[#F5F5F5] flex items-center"
              >
                <img src={FilterIcon} alt="filter icon" className="w-5 h-5 mr-4" />
                Filtr
              </TabsTrigger>
            </TabsList>
            {tabItems.map((item) => (
              <TabsContent key={item.label} value={item.label}>
                {item.component}
              </TabsContent>
            ))}
            <TabsContent value="Filtr">
              <AllItems />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};


export default Menu;
