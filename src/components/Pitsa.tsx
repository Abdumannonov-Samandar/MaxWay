import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

import Gava from '../assets/images/gavaya_pitsa.png'
import Hot from '../assets/images/hot_pitsa.png'
import Mex from '../assets/images/mex_pitsa.png'
import Mexica from '../assets/images/mexica_pitsa.png'
import { QuantityContext } from '@/context/quantity.provider'
import { useContext } from 'react'

const Pitsa = () => {
    const { quantity, isVisible, handleAddClick, handleIncrement, handleDecrement } = useContext(QuantityContext);

    const hotids = [1, 2]
    const emojids = [1,2,3,5,6]
    const pitsaData = [
        {
            id: 1,
            img: Gava,
            title: "Gavaya",
            description: "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле",
            price: 45000,
            emoji: '🧀'
        },
        {
            id: 2,
            img: Mexica,
            title: "Mexica",
            description: "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле",
            price: 53000,
            emoji: '🌶️'
        },
        {
            id: 3,
            img: Hot,
            title: "Hot achcho",
            description: "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле",
            price: 64000,
            emoji: '🍀'
        },
        {
            id: 4,
            img: Mex,
            title: "Mexica",
            description: "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле",
            price: 64000,
            emoji: '🌶️'
        },
        {
            id: 5,
            img: Hot,
            title: "Apocalipo",
            description: "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле",
            price: 45000,
            emoji: '🍀'
        },
        {
            id: 6,
            img: Mex,
            title: "Sosiskacho",
            description: "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле",
            price: 64000,
            emoji: '🍀'
        },
        {
            id: 7,
            img: Mexica,
            title: "Mexica",
            description: "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле",
            price: 45000,
            emoji: '🧀'
        },
    ]

    return (
        <section className="pb-[53px] md:pb-[105px]">
            <div className="flex flex-col gap-[21px] md:gap-[30px]">
                <h2 className="font-bold text-[#222124] text-[36px] leading-[43.57px] md:text-[52px] md:leading-[62.93px]">Pitsa</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-[30px] md:gap-x-[30px]">
                    {pitsaData.slice(0, 3).map((pitsa) => (
                        <li key={pitsa.id} className="md:hidden">
                        <Card className="rounded-[12px] pt-4 pr-[30px] pl-[21px] pb-[22px] flex flex-row-reverse border-[#9797972E]">
                            <CardHeader className="pl-[21px] pt-1 pb-2">
                                <CardTitle className="md:text-[24px] md:leading-[29px] text-[#222124] md:mb-[11px] mb-[7px]">
                                    {pitsa.title} {emojids.includes(pitsa.id) && (
                                    <span className="ml-4">{pitsa.emoji}</span>
                                    )}
                                </CardTitle>
                                <CardDescription className="font-medium text-[12px] leading-[15px] md:leading-[17px] md:text-[14px] text-[#222124] opacity-40 md:mb-[44px] mb-[15px] md:pr-4">
                                    {pitsa.description}
                                </CardDescription>
                                <div className="flex items-center justify-between">
                                    <span className="font-bold md:text-[24px] md:leading-[29px] text-[#222124] text-[18px] leading-[22px]">{pitsa.price.toLocaleString()} UZS</span>
                                    <div className="flex items-center space-x-2">
                                        {!isVisible[pitsa.id] ? (
                                            <Button
                                                onClick={() => handleAddClick(pitsa.id, pitsa.price)}
                                                className="rounded-full md:text-[24px] p-[13px] pb-[15px] md:w-[50px] flex items-center justify-center md:h-[50px] w-[35.37px] h-[35.37px] text-[17px]"
                                            >
                                                +
                                            </Button>
                                        ) : (
                                            <>
                                                <Button
                                                    onClick={() => handleDecrement(pitsa.id)}
                                                    className="rounded-full md:text-[24px] p-[13px] pb-[15px] md:w-[50px] flex items-center justify-center md:h-[50px] w-[35.37px] h-[35.37px] text-[17px]"
                                                >
                                                    -
                                                </Button>
                                                <span className="font-bold md:text-[24px] md:leading-[29px] text-[#222124] text-[18px] leading-[22px]">
                                                    {quantity[pitsa.id] || 0}
                                                </span>
                                                <Button
                                                    onClick={() => handleIncrement(pitsa.id, pitsa.price)}
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
                                <img className="md:w-[180px] md:h-[180px] w-[127px] h-[127px]" src={pitsa.img} height={127} width={127} alt={pitsa.description} />
                                {pitsa.id === 1 && (
                                    <span className="absolute top-0 md:h-[50px] md:w-[50px] w-[35.37px] h-[35.37px] drop-shadow-[0px_7px_40px_0px_rgba(238,39,68,0.36)] bg-[rgba(238,39,69,0.36)] rounded-full flex items-center justify-center md:text-[24px] text-[17px]">🔥</span>
                                )}
                            </CardContent>
                        </Card>
                    </li>
                    ))}
                    {pitsaData.map((pitsa) => (
                        <li key={pitsa.id} className='md:block hidden'>
                            <Card className="rounded-[12px] pt-4 pr-[30px] pl-[21px] pb-[22px] flex flex-row-reverse border-[#9797972E]">
                                <CardHeader className="pl-[21px] pt-1 pb-2">
                                    <CardTitle className="md:text-[24px] md:leading-[29px] text-[#222124] md:mb-[11px] mb-[7px]">
                                        {pitsa.title} {emojids.includes(pitsa.id) && (
                                        <span className="ml-4">{pitsa.emoji}</span>
                                        )}
                                    </CardTitle>
                                    <CardDescription className="font-medium text-[12px] leading-[15px] md:leading-[17px] md:text-[14px] text-[#222124] opacity-40 md:mb-[44px] mb-[15px] md:pr-4">
                                        {pitsa.description}
                                    </CardDescription>
                                    <div className="flex items-center justify-between">
                                        <span className="font-bold md:text-[24px] md:leading-[29px] text-[#222124] text-[18px] leading-[22px]">{pitsa.price.toLocaleString()} UZS</span>
                                        <div className="flex items-center space-x-2">
                                        {!isVisible[pitsa.id] ? (
                                            <Button
                                                onClick={() => handleAddClick(pitsa.id, pitsa.price)}
                                                className="rounded-full md:text-[24px] p-[13px] pb-[15px] md:w-[50px] flex items-center justify-center md:h-[50px] w-[35.37px] h-[35.37px] text-[17px]"
                                            >
                                                +
                                            </Button>
                                        ) : (
                                            <>
                                                <Button
                                                    onClick={() => handleDecrement(pitsa.id)}
                                                    className="rounded-full md:text-[24px] p-[13px] pb-[15px] md:w-[50px] flex items-center justify-center md:h-[50px] w-[35.37px] h-[35.37px] text-[17px]"
                                                >
                                                    -
                                                </Button>
                                                <span className="font-bold md:text-[24px] md:leading-[29px] text-[#222124] text-[18px] leading-[22px]">
                                                    {quantity[pitsa.id] || 0}
                                                </span>
                                                <Button
                                                    onClick={() => handleIncrement(pitsa.id, pitsa.price)}
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
                                    <img className="md:w-[180px] md:h-[180px] w-[127px] h-[127px]" src={pitsa.img} height={127} width={127} alt={pitsa.description} />
                                    {hotids.includes(pitsa.id) && (
                                        <span className="absolute top-0 md:h-[50px] md:w-[50px] w-[35.37px] h-[35.37px] drop-shadow-[0px_7px_40px_0px_rgba(238,39,68,0.36)] bg-[rgba(238,39,69,0.36)] rounded-full flex items-center justify-center md:text-[24px] text-[17px]">🔥</span>
                                    )}
                                </CardContent>
                            </Card>
                        </li>
                    ))}
                </ul>
                <Collapsible>
                    <CollapsibleContent className="md:hidden grid grid-cols-1 gap-y-6 md:gap-y-[30px] md:gap-x-[30px]">
                        {pitsaData.slice(3, 7).map((pitsa) => (
                            <Card key={pitsa.id} className="rounded-[12px] pt-4 pr-[30px] pl-[21px] pb-[22px] flex flex-row-reverse border-[#9797972E]">
                                <CardHeader className="pl-[21px] pt-1">
                                    <CardTitle className="font-medium md:text-[24px] md:leading-[29px] text-[#222124] md:mb-[11px] mb-[7px]">
                                        {pitsa.title} <span className="ml-4">{pitsa.emoji}</span>
                                    </CardTitle>
                                    <CardDescription className="font-medium text-[12px] leading-[15px] md:leading-[17px] md:text-[14px] text-[#222124] opacity-40 md:mb-[44px] mb-[15px] md:pr-4">
                                        {pitsa.description}
                                    </CardDescription>
                                    <div className="flex items-center justify-between">
                                        <span className="font-bold md:text-[24px] md:leading-[29px] text-[#222124] text-[18px] leading-[22px]">{pitsa.price.toLocaleString()} UZS</span>
                                        <div className="flex items-center space-x-2">
                                            {!isVisible[pitsa.id] ? (
                                                <Button
                                                    onClick={() => handleAddClick(pitsa.id, pitsa.price)}
                                                    className="rounded-full md:text-[24px] p-[13px] pb-[15px] md:w-[50px] flex items-center justify-center md:h-[50px] w-[35.37px] h-[35.37px] text-[17px]"
                                                >
                                                    +
                                                </Button>
                                            ) : (
                                                <>
                                                    <Button
                                                        onClick={() => handleDecrement(pitsa.id)}
                                                        className="rounded-full md:text-[24px] p-[13px] pb-[15px] md:w-[50px] flex items-center justify-center md:h-[50px] w-[35.37px] h-[35.37px] text-[17px]"
                                                    >
                                                        -
                                                    </Button>
                                                    <span className="font-bold md:text-[24px] md:leading-[29px] text-[#222124] text-[18px] leading-[22px]">
                                                        {quantity[pitsa.id] || 0}
                                                    </span>
                                                    <Button
                                                        onClick={() => handleIncrement(pitsa.id, pitsa.price)}
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
                                    <img className="md:w-[180px] md:h-[180px] w-[127px] h-[127px]" src={pitsa.img} height={127} width={127} alt={pitsa.description} />
                                </CardContent>
                            </Card>
                        ))}
                    </CollapsibleContent>
                    <CollapsibleTrigger className="mt-6 md:hidden block py-[14px] w-full text-[16px] bg-[#F1F1F1] text-[#222124] leading-[19.36px] font-normal rounded-[27px]">Ko‘proq ko‘rish</CollapsibleTrigger>
                </Collapsible>
            </div>
        </section>
    )
}

export default Pitsa
