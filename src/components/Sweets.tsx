import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { QuantityContext } from '@/context/quantity.provider';
import { useContext } from 'react';

const Sweets = () => {
    const { quantity, isVisible, handleAddClick, handleIncrement, handleDecrement } = useContext(QuantityContext);
    
    const sweetsData = [
        {
            id: 22,
            name: "Tiramisu",
            description: "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле",
            price: 22000,
            image: 'https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fdd3eb9ef-b9e6-48ac-824a-66cfd0f39913&w=1920&q=75'
        },
        {
            id: 23,
            name: "Brauna",
            description: "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле",
            price: 22000,
            image: 'https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Febf7f8ee-0181-4294-9be8-f9241e3cff08&w=1920&q=75'
        },
        {
            id: 24,
            name: "San-sebastian",
            description: "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле",
            price: 22000,
            image: 'https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F1ae33c55-cbd8-4d0a-b9a6-6a7624beca32&w=1920&q=75'
        },
        {
            id: 25,
            name: "Karamel donat",
            description: "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле",
            price: 16000,
            image: 'https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fb8b5b8f1-f169-4b8e-8c0d-4e078617bb7d&w=1920&q=75'
        },
        {
            id: 26,
            name: "Qulupnayli donat",
            description: "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле",
            price: 16000,
            image: 'https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F49e2f3af-66e9-46de-8646-5433e5dfb9af&w=1920&q=75'
        },
        {
            id: 27,
            name: "Yo'ng'oqli donat",
            description: "Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле",
            price: 16000,
            image: 'https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fe10a89fe-5795-4d83-85ca-9eea113dc547&w=1920&q=75'
        }
    ];

    return (
        <section className='pb-[105px]'>
            <div className="flex flex-col gap-[21px] md:gap-[30px]">
                <h2 className="font-bold text-[#222124] text-[36px] leading-[43.57px] md:text-[52px] md:leading-[62.93px]">
                    Shirinliklar
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-[30px] md:gap-x-[30px]">
                    {sweetsData.map(sweet => (
                        <li key={sweet.id}>
                            <Card className="rounded-[12px] pt-4 pr-[30px] pl-[21px] pb-[22px] flex flex-row-reverse border-[#9797972E]">
                                <CardHeader className="pl-[21px] pt-1 pb-2">
                                    <CardTitle className="md:text-[24px] md:leading-[29px] text-[#222124] md:mb-[11px] mb-[7px] text-[18px] leading-[22px] font-medium">
                                        {sweet.name}
                                    </CardTitle>
                                    <CardDescription className="font-medium text-[12px] leading-[15px] md:leading-[17px] md:text-[14px] text-[#222124] opacity-40 md:mb-[44px] mb-[15px] md:pr-4">
                                        {sweet.description}
                                    </CardDescription>
                                    <div className="flex items-center justify-between">
                                        <span className="font-bold md:text-[24px] md:leading-[29px] text-[#222124] text-[18px] leading-[22px]">
                                            {sweet.price.toLocaleString()} UZS
                                        </span>
                                        <div className="flex items-center space-x-2">
                                            {!isVisible[sweet.id] ? (
                                                <Button
                                                    onClick={() => handleAddClick(sweet.id, sweet.price)}
                                                    className="rounded-full md:text-[24px] p-[13px] pb-[15px] md:w-[50px] flex items-center justify-center md:h-[50px] w-[35.37px] h-[35.37px] text-[17px]"
                                                >
                                                    +
                                                </Button>
                                            ) : (
                                                <>
                                                    <Button
                                                        onClick={() => handleDecrement(sweet.id)}
                                                        className="rounded-full md:text-[24px] p-[13px] pb-[15px] md:w-[50px] flex items-center justify-center md:h-[50px] w-[35.37px] h-[35.37px] text-[17px]"
                                                    >
                                                        -
                                                    </Button>
                                                    <span className="font-bold md:text-[24px] md:leading-[29px] text-[#222124] text-[18px] leading-[22px]">
                                                        {quantity[sweet.id] || 0}
                                                    </span>
                                                    <Button
                                                        onClick={() => handleIncrement(sweet.id, sweet.price)}
                                                        className="rounded-full md:text-[24px] p-[13px] pb-[15px] md:w-[50px] flex items-center justify-center md:h-[50px] w-[35.37px] h-[35.37px] text-[17px]"
                                                    >
                                                        +
                                                    </Button>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-0 w-full">
                                    <img
                                        className="md:w-[209px] md:h-[192px] w-[147.85px] h-[135.82px]"
                                        src={sweet.image}
                                        height={192}
                                        width={209}
                                        alt={sweet.description}
                                    />
                                </CardContent>
                            </Card>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Sweets;
