
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import Sprite from '../assets/images/sprite.png'
import Coca from '../assets/images/coca.png'
import Fanta from '../assets/images/fanta.png'
import { useContext } from 'react'
import { QuantityContext } from '@/context/quantity.provider'


const Drinks = () => {
    const { quantity, isVisible, handleAddClick, handleIncrement, handleDecrement } = useContext(QuantityContext);
    
    const drinksData= [
        {
            id: 12,
            img: Sprite,
            title: "Sprite 1L",
            description: "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле",
            price: 6000,
        },
        {
            id: 13,
            img: Coca,
            title: "Coca cola 1L",
            description: "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле",
            price: 9000,
        },
        {
            id: 14,
            img: Fanta,
            title: "Fanta 1L",
            description: "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле",
            price: 8000,
        },
    ]

  return (
    <section className="md:pb-[173px] pb-[53px]">
        <div className="flex flex-col gap-[21px] md:gap-[30px]">
            <h2 className="font-bold text-[#222124] text-[36px] leading-[43.57px] md:text-[52px] md:leading-[62.93px]">Ichimliklar</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-[30px] md:gap-x-[30px]">
                {drinksData.map(drink => (
                    <li key={drink.id}>
                    <Card className="rounded-[12px] pt-4 pr-[30px] pl-[21px] pb-[22px] flex flex-row-reverse border-[#9797972E]">
                        <CardHeader className="pl-[21px] pt-1 pb-2">
                            <CardTitle className="md:text-[24px] md:leading-[29px] text-[#222124] md:mb-[11px] mb-[7px]">
                                {drink.title}
                            </CardTitle>
                            <CardDescription className="font-medium text-[12px] leading-[15px] md:leading-[17px] md:text-[14px] text-[#222124] opacity-40 md:mb-[44px] mb-[15px] md:pr-4">
                                {drink.description}
                            </CardDescription>
                            <div className="flex items-center justify-between">
                                <span className="font-bold md:text-[24px] md:leading-[29px] text-[#222124] text-[18px] leading-[22px]">{drink.price.toLocaleString()} UZS</span>
                                <div className="flex items-center space-x-2">
                                            {!isVisible[drink.id] ? (
                                                <Button
                                                    onClick={() => handleAddClick(drink.id, drink.price)}
                                                    className="rounded-full md:text-[24px] p-[13px] pb-[15px] md:w-[50px] flex items-center justify-center md:h-[50px] w-[35.37px] h-[35.37px] text-[17px]"
                                                >
                                                    +
                                                </Button>
                                            ) : (
                                                <>
                                                    <Button
                                                        onClick={() => handleDecrement(drink.id)}
                                                        className="rounded-full md:text-[24px] p-[13px] pb-[15px] md:w-[50px] flex items-center justify-center md:h-[50px] w-[35.37px] h-[35.37px] text-[17px]"
                                                    >
                                                        -
                                                    </Button>
                                                    <span className="font-bold md:text-[24px] md:leading-[29px] text-[#222124] text-[18px] leading-[22px]">
                                                        {quantity[drink.id] || 0}
                                                    </span>
                                                    <Button
                                                        onClick={() => handleIncrement(drink.id, drink.price)}
                                                        className="rounded-full md:text-[24px] p-[13px] pb-[15px] md:w-[50px] flex items-center justify-center md:h-[50px] w-[35.37px] h-[35.37px] text-[17px]"
                                                    >
                                                        +
                                                    </Button>
                                                </>
                                            )}
                                        </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-0 w-full relative">
                            <img className="md:w-[180px] md:h-[180px] w-[127px] h-[127px]" src={drink.img} height={127} width={127} alt={drink.description} />
                        </CardContent>
                    </Card>
                </li>
                ))}
            </ul>
        </div>
    </section>
  )
}

export default Drinks