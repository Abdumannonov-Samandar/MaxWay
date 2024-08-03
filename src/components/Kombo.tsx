import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { useContext } from 'react';

import KOMBO from '../assets/images/kombo-1.png';
import KOMBOO from '../assets/images/kombo-2.png';
import { QuantityContext } from '@/context/quantity.provider'

const Kombo = () => {
    
    const { quantity, isVisible, handleAddClick, handleIncrement, handleDecrement } = useContext(QuantityContext);

    const komboData = [
        {
            id: 15,
            img: KOMBO,
            title: 'Kombo-1',
            description: 'Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле',
            price: 25000,
        },
        {
            id: 16,
            img: KOMBOO,
            title: 'Kombo-2',
            description: 'Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле',
            price: 23000,
        },
        {
            id: 17,
            img: KOMBO,
            title: 'Kombo-3',
            description: 'Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле',
            price: 30000,
        },
    ];

    return (
        <section className="pb-[53px] md:pb-[105px]">
            <div className="flex flex-col gap-[21px] md:gap-[30px]">
                <h2 className="font-bold text-[#222124] text-[36px] leading-[43.57px] md:text-[52px] md:leading-[62.93px]">Kombo</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-[30px] md:gap-x-[30px]">
                    {komboData.map(kombo => (
                        <li key={kombo.id}>
                            <Card className="rounded-[12px] pt-4 pr-[30px] pl-[21px] pb-[22px] flex flex-row-reverse border-[#9797972E]">
                                <CardHeader className="pl-[21px] pt-1 pb-2">
                                    <CardTitle className="md:text-[24px] md:leading-[29px] text-[#222124] md:mb-[11px] mb-[7px]">
                                        {kombo.title}
                                    </CardTitle>
                                    <CardDescription className="font-medium text-[12px] leading-[15px] md:leading-[17px] md:text-[14px] text-[#222124] opacity-40 md:mb-[44px] mb-[15px] md:pr-4">
                                        {kombo.description}
                                    </CardDescription>
                                    <div className="flex items-center justify-between">
                                        <span className="font-bold md:text-[24px] md:leading-[29px] text-[#222124] text-[18px] leading-[22px]">
                                            {kombo.price.toLocaleString()} UZS
                                        </span>
                                        <div className="flex items-center space-x-2">
                                            {!isVisible[kombo.id] ? (
                                                <Button
                                                    onClick={() => handleAddClick(kombo.id, kombo.price)}
                                                    className="rounded-full md:text-[24px] p-[13px] pb-[15px] md:w-[50px] flex items-center justify-center md:h-[50px] w-[35.37px] h-[35.37px] text-[17px]"
                                                >
                                                    +
                                                </Button>
                                            ) : (
                                                <>
                                                    <Button
                                                        onClick={() => handleDecrement(kombo.id)}
                                                        className="rounded-full md:text-[24px] p-[13px] pb-[15px] md:w-[50px] flex items-center justify-center md:h-[50px] w-[35.37px] h-[35.37px] text-[17px]"
                                                    >
                                                        -
                                                    </Button>
                                                    <span className="font-bold md:text-[24px] md:leading-[29px] text-[#222124] text-[18px] leading-[22px]">
                                                        {quantity[kombo.id] || 0}
                                                    </span>
                                                    <Button
                                                        onClick={() => handleIncrement(kombo.id, kombo.price)}
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
                                    <img
                                        className="md:w-[180px] md:h-[180px] w-[127px] h-[127px]"
                                        src={kombo.img}
                                        height={127}
                                        width={127}
                                        alt={kombo.description}
                                    />
                                </CardContent>
                            </Card>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Kombo;
