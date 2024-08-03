import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

import Logo from '../assets/icons/logo.svg'
import YOU from '../assets/icons/youtube.svg'
import FAC from '../assets/icons/facebook.svg'
import INS from '../assets/icons/instagram.svg'
import TIK from '../assets/icons/tiktok.svg'
import TEL from '../assets/icons/telegram.svg'

const SiteFooter = () => {
  return (
    <footer className="pt-[29px] md:pt-[125px] md:pb-6 pb-[19px]">
        <div className="container">
            <div className="flex flex-col  md:text-start gap-6 md:gap-10 max-w-[1120px] mx-auto">
                <div className="md:flex justify-between">
                    <ul className='md:flex items-center md:items-start mb-[51px] md:mb-0'>
                        <li className='md:mr-[138px] mb-[27px]'>
                            <a href="#">
                                <img className='w-[52px] h-[55px] mx-auto' src={Logo} alt="logo"/>
                            </a>
                        </li>
                        <li className='md:mr-[42px] mb-[24px]'>
                            <h3 className='font-semibold hidden md:block text-[20px] leading-[18px] text-[#003846] mb-6'>Asosiy</h3>
                            <ul className="hidden md:block">
                                <li>
                                    <a className="text-[14px] leading-[34px] font-medium text-[#222124] group relative w-max" href='#'>
                                        <span>Kompaniya haqida</span>
                                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-[#800A7A] group-hover:w-3/6"></span>
                                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-[#800A7A] group-hover:w-3/6"></span>
                                    </a>
                                </li>
                                <li>
                                    <a className="text-[14px] leading-[34px] font-medium text-[#222124] group relative w-max" href='#'>
                                        <span>Filiallar</span>
                                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-[#800A7A] group-hover:w-3/6"></span>
                                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-[#800A7A] group-hover:w-3/6"></span>
                                    </a>
                                </li>
                                <li>
                                    <a className="text-[14px] leading-[34px] font-medium text-[#222124] group relative w-max" href='#'>
                                        <span>Bolalar uchun</span>
                                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-[#800A7A] group-hover:w-3/6"></span>
                                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-[#800A7A] group-hover:w-3/6"></span>
                                    </a>
                                </li>
                            </ul>
                            <Accordion className="md:hidden" type="single" collapsible>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Asosiy</AccordionTrigger>
                                    <AccordionContent className="flex flex-col items-center">
                                    <a className="text-[14px] leading-[34px] font-medium text-[#222124] group relative w-max" href='#'>
                                        <span>Kompaniya haqida</span>
                                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-[#800A7A] group-hover:w-3/6"></span>
                                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-[#800A7A] group-hover:w-3/6"></span>
                                    </a>
                                    <a className="text-[14px] leading-[34px] font-medium text-[#222124] group relative w-max" href='#'>
                                        <span>Filiallar</span>
                                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-[#800A7A] group-hover:w-3/6"></span>
                                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-[#800A7A] group-hover:w-3/6"></span>
                                    </a>
                                    <a className="text-[14px] leading-[34px] font-medium text-[#222124] group relative w-max" href='#'>
                                        <span>Bolalar uchun</span>
                                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-[#800A7A] group-hover:w-3/6"></span>
                                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-[#800A7A] group-hover:w-3/6"></span>
                                    </a>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </li>
                        <li className='md:ml-[42px]'>
                            <h3 className='font-semibold hidden md:block text-[20px] leading-[18px] text-[#003846] mb-6'>Qo’shimcha</h3>
                            <ul className="hidden md:block">
                                <li>
                                    <a className="text-[14px] leading-[34px] font-medium text-[#222124] group relative w-max" href='#'>
                                        <span>Menyu</span>
                                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-[#800A7A] group-hover:w-3/6"></span>
                                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-[#800A7A] group-hover:w-3/6"></span>
                                    </a>
                                </li>
                                <li>
                                    <a className="text-[14px] leading-[34px] font-medium text-[#222124] group relative w-max" href='#'>
                                        <span>Bonusli karta</span>
                                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-[#800A7A] group-hover:w-3/6"></span>
                                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-[#800A7A] group-hover:w-3/6"></span>
                                    </a>
                                </li>
                                <li>
                                    <a className="text-[14px] leading-[34px] font-medium text-[#222124] group relative w-max" href='#'>
                                        <span>Bu qanday ishlaydi?</span>
                                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-[#800A7A] group-hover:w-3/6"></span>
                                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-[#800A7A] group-hover:w-3/6"></span>
                                    </a>
                                </li>
                            </ul>
                            <Accordion className="md:hidden" type="single" collapsible>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Qo’shimcha</AccordionTrigger>
                                    <AccordionContent className="flex flex-col items-center">
                                    <a className="text-[14px] leading-[34px] font-medium text-[#222124] group relative w-max" href='#'>
                                        <span>Menyu</span>
                                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-[#800A7A] group-hover:w-3/6"></span>
                                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-[#800A7A] group-hover:w-3/6"></span>
                                    </a>
                                    <a className="text-[14px] leading-[34px] font-medium text-[#222124] group relative w-max" href='#'>
                                        <span>Bonusli karta</span>
                                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-[#800A7A] group-hover:w-3/6"></span>
                                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-[#800A7A] group-hover:w-3/6"></span>
                                    </a>
                                    <a className="text-[14px] leading-[34px] font-medium text-[#222124] group relative w-max" href='#'>
                                        <span>Bu qanday ishlaydi?</span>
                                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-[#800A7A] group-hover:w-3/6"></span>
                                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-[#800A7A] group-hover:w-3/6"></span>
                                    </a>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                        </li>
                    </ul>
                    <div className='flex flex-col'>
                        <h3 className='font-semibold text-[20px] hidden md:block leading-[18px] text-[#003846] mb-[33px]'>Biz bilan bog’lanish</h3>
                        <a className='font-normal text-[25px] mb-5 md:mb-[13px] text-center md:text-start leading-[33px] text-[#222124]' href='tel:+998712005400'>(+998 71) 200-54-00</a>
                        <address className='font-normal text-[14px] leading-[24px] text-center md:text-start text-[#222124] not-italic'>
                                100011, Toshkent sh. Shayxontohur tumani,<br/>
                                Zarqaynar ko’chasi, 3B-uy
                        </address>
                    </div>
                </div>
                <div className='flex flex-col gap-[27px]'>
                    <hr className='bg-[#979797] w-full hidden md:block'/>
                    <div className='md:flex justify-between'>
                        <p className='font-normal hidden md:block text-[14px] leading-[24px] text-[#222124]'>© Max Way, 2024</p>
                        <ul className='flex items-center justify-center md:justify-normal gap-6 mb-[42px] md:mb-0'>
                            <li>
                                <a href='https://youtube.com' target='blank'>
                                    <img className='w-10 h-10 md:w-6 md:h-6 ' src={YOU} alt='youtube logo'/>
                                </a>
                            </li>
                            <li>
                                <a href='https://facebook.com' target='blank'>
                                    <img className='w-10 h-10 md:w-6 md:h-6 ' src={FAC} alt='facebook logo'/>
                                </a>
                            </li>
                            <li>
                                <a href='https://instagram.com' target='blank'>
                                    <img className='w-10 h-10 md:w-6 md:h-6 ' src={INS} alt='instagram logo'/>
                                </a>
                            </li>
                            <li>
                                <a href='https://telegram.com' target='blank'>
                                    <img className='w-10 h-10 md:w-6 md:h-6 ' src={TEL} alt='telegram logo'/>
                                </a>
                            </li>
                            <li>
                                <a href='https://tiktok.com' target='blank'>
                                    <img className='w-[31px] h-[31px] md:w-[19px] md:h-[19px]' src={TIK} alt='tiktok logo'/>
                                </a>
                            </li>
                        </ul>
                        <p className='font-normal text-center md:hidden text-[14px] leading-[24px] text-[#222124]'>© Max Way, 2024</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default SiteFooter