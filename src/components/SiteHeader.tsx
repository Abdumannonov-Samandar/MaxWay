import { useContext } from 'react';
import { Button } from '@/components/ui/button';
import { CalcContext } from '@/context/calc.provider';
import Logo from '../assets/icons/logo.svg';
import Call from '../assets/icons/call.svg';
import Shop from '../assets/icons/shop-add.svg';
import MENU from '../assets/icons/menu.svg';

const SiteHeader = () => {
  const { prices, calculateTotalAmount } = useContext(CalcContext);
  
  const navLinkClasses =
    "text-sm font-normal text-[#222124] group relative w-max";
  const navUnderlineClasses =
    "absolute -bottom-1 transition-all h-0.5 bg-[#800A7A]";

  return (
    <header className="py-[21px] md:py-[23px] bg-white md:bg-gradient-to-r from-white from-60% to-[#800A7A] to-40%">
      <div className="container">
        <div className="flex justify-between items-center max-w-[1091px] mx-auto">
          <a href="#">
            <img className="w-[52px] h-[55px]" src={Logo} alt="logo" />
          </a>

          <nav className="hidden md:flex items-center gap-20">
            <ul className="flex items-center gap-10">
              {['Menyu', 'Bolalar uchun', 'Filiallar'].map((label) => (
                <li key={label}>
                  <a className={navLinkClasses} href="#">
                    <span>{label}</span>
                    <span className={`${navUnderlineClasses} left-1/2 w-0 group-hover:w-3/6`}></span>
                    <span className={`${navUnderlineClasses} right-1/2 w-0 group-hover:w-3/6`}></span>
                  </a>
                </li>
              ))}
            </ul>
            <ul className="flex items-center gap-10">
              <li className="flex items-center gap-4">
                <img className="w-6 h-6" src={Call} alt="telephone icon" />
                <a href="tel:+998712005400" className="flex flex-col">
                  <span className="font-normal text-[12px] leading-[15px] text-white">
                    (+99871)
                  </span>
                  <span className="font-bold text-[24px] leading-[29px] text-white">
                    200-54-00
                  </span>
                </a>
              </li>
              <li>
                <hr className="w-[1px] h-[43px] bg-white" />
              </li>
              <li className="flex items-center gap-[6px] relative">
                <img className="w-[32px] h-[34px]" src={Shop} alt="shopping cart icon" />
                {prices.length > 0 && (
                  <span className="w-[18px] top-[6px] ring-[2px] ring-[#800A7A] right-[92px] absolute font-medium h-[18px] rounded-full text-[10px] leading-[11px] bg-[#F1B301] text-white pt-[2px] pr-[1px] pb-[1px] flex items-center justify-center">
                    {prices.length}
                  </span>
                )}
                <div className="flex flex-col">
                  <span className="font-bold text-[24px] leading-[29px] text-white">
                    Korzina
                  </span>
                  <span className="font-normal text-[12px] leading-[15px] text-white">
                    {calculateTotalAmount().toLocaleString()} UZS
                  </span>
                </div>
              </li>
            </ul>
          </nav>
          <Button className="block md:hidden bg-transparent hover:bg-zinc-50">
            <img className="w-[24px] h-[24px]" src={MENU} alt="menu icon" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
