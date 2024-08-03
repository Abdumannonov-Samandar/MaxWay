import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { QuantityContext } from '@/context/quantity.provider';
import { useContext } from 'react';


const Salads = () => {
  const { quantity, isVisible, handleAddClick, handleIncrement, handleDecrement } = useContext(QuantityContext);

  const saladsData = [
    {
      id: 18,
      name: 'Guruch',
      description: 'Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле',
      img: 'https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F1c55ac0a-6436-4b1d-ada7-8377b6871e53&w=1920&q=75',
      price: 7000,
    },
    {
      id: 19,
      name: 'Salat',
      description: 'Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле',
      img: 'https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fefff60bd-15c2-4e6c-9f1b-2a0eea692af7&w=1920&q=75',
      price: 7000,
    },
    {
      id: 20,
      name: 'Donar',
      description: 'Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле',
      img: 'https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F1b1149fb-7e05-45bb-a92b-595b83c16d5a&w=1920&q=75',
      price: 30000,
    },
    {
      id: 21,
      name: 'Sandvic',
      description: 'Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле',
      img: 'https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F6e75db0d-01c9-47e3-b178-0a2e61cd46fb&w=1920&q=75',
      price: 30000,
    },
    
  ]


  return (
    <section className="pb-[105px]">
      <div className="flex flex-col gap-[21px] md:gap-[30px]">
        <h2 className="font-bold text-[#222124] text-[36px] leading-[43.57px] md:text-[52px] md:leading-[62.93px]">
          Shirinliklar
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-[30px] md:gap-x-[30px]">
          {saladsData.map((salad, index) => (
            <li key={index}>
              <Card className="rounded-[12px] pt-4 pr-[30px] pl-[21px] pb-[22px] flex flex-row-reverse border-[#9797972E]">
                <CardHeader className="pl-[21px] pt-1 pb-2">
                  <CardTitle className="md:text-[24px] md:leading-[29px] text-[#222124] md:mb-[11px] mb-[7px] text-[18px] leading-[22px] font-medium">
                    {salad.name}
                  </CardTitle>
                  <CardDescription className="font-medium text-[12px] leading-[15px] md:leading-[17px] md:text-[14px] text-[#222124] opacity-40 md:mb-[44px] mb-[15px] md:pr-4">
                    {salad.description}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="font-bold md:text-[24px] md:leading-[29px] text-[#222124] text-[18px] leading-[22px]">
                      {salad.price.toLocaleString()} UZS
                    </span>
                    <div className="flex items-center space-x-2">
                      {!isVisible[salad.id] ? (
                          <Button
                              onClick={() => handleAddClick(salad.id, salad.price)}
                              className="rounded-full md:text-[24px] p-[13px] pb-[15px] md:w-[50px] flex items-center justify-center md:h-[50px] w-[35.37px] h-[35.37px] text-[17px]"
                          >
                              +
                          </Button>
                      ) : (
                          <>
                              <Button
                                  onClick={() => handleDecrement(salad.id)}
                                  className="rounded-full md:text-[24px] p-[13px] pb-[15px] md:w-[50px] flex items-center justify-center md:h-[50px] w-[35.37px] h-[35.37px] text-[17px]"
                              >
                                  -
                              </Button>
                              <span className="font-bold md:text-[24px] md:leading-[29px] text-[#222124] text-[18px] leading-[22px]">
                                  {quantity[salad.id] || 0}
                              </span>
                              <Button
                                  onClick={() => handleIncrement(salad.id, salad.price)}
                                  className="rounded-full md:text-[24px] p-[13px] pb-[15px] md:w-[50px] flex items-center justify-center md:h-[50px] w-[35.37px] h-[35.37px] text-[17px]"
                              >
                                  +
                              </Button>
                          </>
                      )}
                      </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0 w-full ">
                  <img
                    className="md:w-[209px] md:h-[192px] w-[147.85px] h-[135.82px]"
                    src={salad.img}
                    height={192}
                    width={209}
                    alt={salad.description}
                  />
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Salads
