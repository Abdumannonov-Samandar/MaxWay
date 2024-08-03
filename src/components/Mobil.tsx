import { Button } from '@/components/ui/button'
import Phone from '../assets/images/big__phone.png'

const Mobil = () => {
  return (
    <section className="pt-[260px] md:pt-[75px] pb-[94px] bg-[#800A7A] relative bg-[url('./assets/images/path.png')] md:bg-[url('./assets/images/mobil_bg.png')] bg-[length:356px_99px] bg-[position:40px_85px] md:bg-[length:611px_197px] md:bg-right bg-no-repeat">
        <div className="container">
            <div className='flex flex-col gap-[63px] max-w-[1110px] mx-auto'>
                <h2 className="font-bold text-[36px] leading-[43px] text-center md:text-start md:text-[52px] md:leading-[62.93px] text-[#FFFFFF]">Mobil ilovamiz <br/>
                    orqali buyurtma<br/>
                    berish yanada osonroq
                </h2>
                <div className='md:flex items-center  md:gap-[30px]'>
                    <Button className="rounded-[46px] w-full mb-3 md:mb-0 md:w-[250px] bg-[#800A7A] hover:bg-fuchsia-700 before:content-[url('./assets/icons/play.svg')] before:w-[40px] before:h-[44px] before:mr-[23px] h-20 border border-[#FFFFFF4B] py-[18px] px-[32px] flex gap-[7px] items-center justify-center text-2xl font-medium" aria-label="Download on Google Play" type='button'>
                        <strong>Google</strong> play
                    </Button>
                    <Button className="rounded-[46px] w-full md:w-[250px] bg-[#800A7A] hover:bg-fuchsia-700 before:content-[url('./assets/icons/apple.svg')] before:w-[38px] before:h-[46px] before:mr-[23px] h-20 border border-[#FFFFFF4B] py-[18px] px-[32px] flex items-center justify-center text-2xl font-medium" aria-label="Download on App Store" type='button'>
                        App Store
                    </Button>
                </div>
                <img className='w-[508px] h-[334px] md:w-[760px] md:h-[600px] absolute md:right-[90px] md:-top-[120px] -top-[70px] right-8' src={Phone} alt='bigPhone img'/>
            </div> 
        </div>
    </section>
  )
}

export default Mobil