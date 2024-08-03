import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Burger from "./Burger"
import Pitsa from "./Pitsa"
import Kombo from "./Kombo"
import Drinks from "./Drinks"
import Salad from "./Salads"
import Sweets from "./Sweets"

const Menu = () => {
  return (
    <section className="pt-[54px] md:pt-20">
        <div className="container">
            <div className="flex flex-col gap-10 max-w-[1110px] mx-auto">
                <hr className="h-[1px] w-full text-[#979797] opacity-20"/>
                <Tabs defaultValue="Barchasi" className="w-full flex flex-col gap-10 md:gap-[105px] items-start">
                    <TabsList className="flex flex-wrap h-full">
                        <TabsTrigger value="Barchasi">Barchasi</TabsTrigger>
                        <TabsTrigger value="Pitsa">Pitsa</TabsTrigger>
                        <TabsTrigger value="Burger">Burger</TabsTrigger>
                        <TabsTrigger value="Kombo">Kombo</TabsTrigger>
                        <TabsTrigger value="Salat">Salat</TabsTrigger>
                        <TabsTrigger value="Shirinliklar">Shirinliklar</TabsTrigger>
                        <TabsTrigger value="ichimliklar">Ichimliklar</TabsTrigger>
                        <TabsTrigger value="filtr" className="before:content-[url('./assets/icons/filter.svg')] before:w-5 before:h-5 before:mr-4 before:block px-[40px] bg-[#F5F5F5]">Filtr</TabsTrigger>
                    </TabsList>
                    <TabsContent value="Barchasi">
                        <Pitsa/>
                        <Burger/>
                        <Kombo/>
                        <Drinks/>
                    </TabsContent>
                    <TabsContent value="Pitsa">
                        <Pitsa/>
                    </TabsContent>
                    <TabsContent value="Burger">
                        <Burger />
                    </TabsContent>
                    <TabsContent value="Kombo">
                        <Kombo/>
                    </TabsContent>
                    <TabsContent value="Salat">
                        <Salad/>
                    </TabsContent>
                    <TabsContent value="Shirinliklar">
                        <Sweets/>
                    </TabsContent>
                    <TabsContent value="ichimliklar">
                        <Drinks/>
                    </TabsContent>
                    <TabsContent value="filtr">
                        <Pitsa/>
                        <Burger/>
                        <Kombo/>
                        <Drinks/>
                    </TabsContent>
                </Tabs>

            </div>
        </div>
    </section>
  )
}

export default Menu