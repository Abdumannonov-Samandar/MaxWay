import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  import Logo from "../assets/icons/logo.svg";
  import YOU from "../assets/icons/youtube.svg";
  import FAC from "../assets/icons/facebook.svg";
  import INS from "../assets/icons/instagram.svg";
  import TIK from "../assets/icons/tiktok.svg";
  import TEL from "../assets/icons/telegram.svg";
  
  const footerLinks = {
    main: [
      { label: "Kompaniya haqida", href: "#" },
      { label: "Filiallar", href: "#" },
      { label: "Bolalar uchun", href: "#" },
    ],
    additional: [
      { label: "Menyu", href: "#" },
      { label: "Bonusli karta", href: "#" },
      { label: "Bu qanday ishlaydi?", href: "#" },
    ],
  };
  
  const socialMediaLinks = [
    { src: YOU, href: "https://youtube.com", alt: "youtube logo", width: 10 },
    { src: FAC, href: "https://facebook.com", alt: "facebook logo", width: 10 },
    { src: INS, href: "https://instagram.com", alt: "instagram logo", width: 10 },
    { src: TEL, href: "https://telegram.com", alt: "telegram logo", width: 10 },
    { src: TIK, href: "https://tiktok.com", alt: "tiktok logo", width: 31 },
  ];
  
  const navLinkClasses =
    "text-[14px] leading-[34px] font-medium text-[#222124] group relative w-max";
  const navUnderlineClasses =
    "absolute -bottom-1 transition-all h-0.5 bg-[#800A7A]";
  
  const SiteFooter = () => {
    return (
      <footer className="pt-[29px] md:pt-[125px] md:pb-6 pb-[19px]">
        <div className="container">
          <div className="flex flex-col md:text-start gap-6 md:gap-10 max-w-[1120px] mx-auto">
            <div className="md:flex justify-between">
              <ul className="md:flex items-center md:items-start mb-[51px] md:mb-0">
                <li className="md:mr-[138px] mb-[27px]">
                  <a href="#">
                    <img
                      className="w-[52px] h-[55px] mx-auto"
                      src={Logo}
                      alt="company logo"
                    />
                  </a>
                </li>
                {Object.entries(footerLinks).map(([key, links]) => (
                  <li key={key} className="md:mr-[42px] mb-[24px] md:ml-[42px]">
                    <h3 className="font-semibold hidden md:block text-[20px] leading-[18px] text-[#003846] mb-6">
                      {key === "main" ? "Asosiy" : "Qo’shimcha"}
                    </h3>
                    <ul className="hidden md:block">
                      {links.map(({ label, href }) => (
                        <li key={label}>
                          <a className={navLinkClasses} href={href}>
                            <span>{label}</span>
                            <span
                              className={`${navUnderlineClasses} left-1/2 w-0 group-hover:w-3/6`}
                            ></span>
                            <span
                              className={`${navUnderlineClasses} right-1/2 w-0 group-hover:w-3/6`}
                            ></span>
                          </a>
                        </li>
                      ))}
                    </ul>
                    <Accordion className="md:hidden" type="single" collapsible>
                      <AccordionItem value={`item-${key}`}>
                        <AccordionTrigger>
                          {key === "main" ? "Asosiy" : "Qo’shimcha"}
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col items-center">
                          {links.map(({ label, href }) => (
                            <a key={label} className={navLinkClasses} href={href}>
                              <span>{label}</span>
                              <span
                                className={`${navUnderlineClasses} left-1/2 w-0 group-hover:w-3/6`}
                              ></span>
                              <span
                                className={`${navUnderlineClasses} right-1/2 w-0 group-hover:w-3/6`}
                              ></span>
                            </a>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col">
                <h3 className="font-semibold text-[20px] hidden md:block leading-[18px] text-[#003846] mb-[33px]">
                  Biz bilan bog’lanish
                </h3>
                <a
                  className="font-normal text-[25px] mb-5 md:mb-[13px] text-center md:text-start leading-[33px] text-[#222124]"
                  href="tel:+998712005400"
                >
                  (+998 71) 200-54-00
                </a>
                <address className="font-normal text-[14px] leading-[24px] text-center md:text-start text-[#222124] not-italic">
                  100011, Toshkent sh. Shayxontohur tumani,
                  <br />
                  Zarqaynar ko’chasi, 3B-uy
                </address>
              </div>
            </div>
            <div className="flex flex-col gap-[27px]">
              <hr className="bg-[#979797] w-full hidden md:block" />
              <div className="md:flex justify-between">
                <p className="font-normal hidden md:block text-[14px] leading-[24px] text-[#222124]">
                  © Max Way, 2024
                </p>
                <ul className="flex items-center justify-center md:justify-normal gap-6 mb-[42px] md:mb-0">
                  {socialMediaLinks.map(({ href, src, alt, width }) => (
                    <li key={alt}>
                      <a href={href} target="_blank" rel="noopener noreferrer">
                        <img
                          className={`${
                            width === 31
                              ? "w-[31px] h-[31px] md:w-[19px] md:h-[19px]"
                              : "w-10 h-10 md:w-6 md:h-6"
                          }`}
                          src={src}
                          alt={alt}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="font-normal text-center md:hidden text-[14px] leading-[24px] text-[#222124]">
                  © Max Way, 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default SiteFooter;
  