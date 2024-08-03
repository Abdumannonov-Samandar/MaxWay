import BG from '../assets/images/hero_bg.png'

const Hero = () => {
return (
    <section className="pt-[17px] md:pt-[47px] bg-gradient-to-b from-white to-white via-[#800A7A] from-10% via-50% to-30% md:bg-gradient-to-r md:from-white md:from-60% md:to-[#800A7A] md:to-40%">
        <div className="container">
            <div className="relative flex flex-col items-center md:items-start text-center md:text-start max-w-[1110px] mx-auto">
                <img className='absolute md:-right-[100px] w-[428px] h-[349px] md:w-[811px] md:h-[664px]' src={BG} alt="big burger img"/>
                <div className="flex flex-col max-w-[551px] pt-[285px] md:pt-[53px]">
                    <h1 className="font-black text-[36px] md:text-[80px] leading-[43px] md:leading-[85px] text-white md:text-[#222124] mb-[14px] px-10 md:px-0">Siz izlagan mazzali ta’mlar</h1>
                    <p className="font-normal text-[16px] leading-[20px] md:text-[18px] md:leading-[32px] md:text-[#222124] mb-[66px] md:pr-[100px] text-white px-[50px] md:px-0">
                        When an unknown printer took a galley of type
                        scrambled it to make a type specimen 
                    </p>
                    <ul className="md:flex gap-[41px]">
                        <li className="bg-[url('./assets/images/pitsa-bg.png')] bg-no-repeat mb-3 md:mb-0 rounded-[12px] bg-cover py-5 pl-[31px] pr-[105px] flex flex-col gap-[56px]">
                            <a href="#" className="before:content-['🔥'] before:w-5 before:h-5 before:mr-[11px] py-[10px] flex items-center px-[22px] rounded-[19px] bg-[#FFFFFF34] font-medium text-[16px] leading-[19px] text-white">
                                Yangi
                            </a>
                            <p className="font-bold text-[34px] leading-[32px] pl-[9px] text-[#E76A06] flex flex-col items-start">
                                <span>PIT</span>
                                <span className="pl-3">-SA</span>
                            </p>
                        </li>
                        <li className="bg-[url('./assets/images/kombo-bg.png')] bg-no-repeat rounded-[12px] bg-cover py-5 pl-5 pr-[61px] flex flex-col gap-[56px]">
                            <a href="#" className="before:content-['🚀'] before:w-5 before:h-5 before:mr-[11px] py-[10px] flex items-center px-[22px] rounded-[19px] bg-[#FFFFFF34] font-medium text-[16px] leading-[19px] text-white">
                                Ko’p sotilgan
                            </a>
                            <p className="font-bold text-start text-[34px] leading-[32px] pl-[9px] text-[#FC96F7] flex flex-col">
                                <span className="pl-5">KOM</span>
                                <span>-BO</span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
)
}

export default Hero