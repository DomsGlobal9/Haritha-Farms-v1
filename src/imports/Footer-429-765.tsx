import clsx from "clsx";
import svgPaths from "./svg-cbksx2x016";
import { footerBgImage as imgFooter, logo as imgImg } from '../assets';

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#0d1701] text-[14px] top-[0.5px]">{children}</p>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[284px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type SpanTextProps = {
  text: string;
};

function SpanText({ text }: SpanTextProps) {
  return (
    <Wrapper additionalClassNames="h-[16px] opacity-50 w-[284px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#0d1701] text-[12px] top-[0.5px] tracking-[1.2px] uppercase">{text}</p>
    </Wrapper>
  );
}
type LiTextProps = {
  text: string;
};

function LiText({ text }: LiTextProps) {
  return <Wrapper2>{text}</Wrapper2>;
}
type HTextProps = {
  text: string;
};

function HText({ text }: HTextProps) {
  return (
    <div className="h-[28px] relative shrink-0 w-full">
      <p className="absolute font-['Playfair_Display:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#0d1701] text-[18px] top-0">{text}</p>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="relative size-full" data-name="footer">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFooter} />
      <div className="absolute content-stretch flex flex-col gap-[64px] h-[384px] items-start left-[80px] px-[24px] top-[80px] w-[1280px]" data-name="div">
        <div className="content-stretch flex h-[120px] items-start justify-between relative shrink-0 w-full" data-name="Container">
          <Wrapper additionalClassNames="h-[120px] w-[162.836px]">
            <div className="absolute left-0 opacity-90 size-[96px] top-0" data-name="img">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg} />
            </div>
            <div className="absolute h-[16px] left-0 top-[104px] w-[162.836px]" data-name="span">
              <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#c38c6a] text-[12px] top-[0.5px] tracking-[3.6px] uppercase">Ethical Farming</p>
            </div>
          </Wrapper>
          <div className="h-[48px] relative shrink-0 w-[181.055px]" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
              <div className="flex-[1_0_0] h-[47px] min-h-px min-w-px relative" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                  <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="span">
                    <p className="flex-[1_0_0] font-['Playfair_Display:Italic',sans-serif] font-normal italic leading-[32px] min-h-px min-w-px relative text-[24px] text-[rgba(13,23,1,0.9)] text-right whitespace-pre-wrap">Certified</p>
                  </div>
                  <div className="h-[15px] relative shrink-0 w-full" data-name="span">
                    <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[118px] not-italic text-[10px] text-[rgba(13,23,1,0.6)] text-right top-[0.5px] tracking-[1px] uppercase">{`Organic & Ethical`}</p>
                  </div>
                </div>
              </div>
              <div className="relative rounded-[16777200px] shrink-0 size-[48px]" data-name="Container">
                <div aria-hidden="true" className="absolute border border-[rgba(13,23,1,0.2)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-px pr-[1.008px] py-px relative size-full">
                  <Wrapper additionalClassNames="h-[16px] w-[32.961px]">
                    <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[#0d1701] text-[12px] top-[0.5px]">100%</p>
                  </Wrapper>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[200px] relative shrink-0 w-full" data-name="Container">
          <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
            <div className="absolute h-[24px] left-0 top-0 w-[284px]" data-name="h4">
              <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#0d1701] text-[16px] top-[-1px]">Haritha Farms Pvt Ltd</p>
            </div>
            <div className="absolute h-[19.5px] left-0 opacity-70 top-[32px] w-[200px]" data-name="p">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#0d1701] text-[12px] top-[0.5px]">CIN: U74999KA2024PTC123456</p>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[4px] h-[82px] items-start left-0 opacity-70 top-[67.5px] w-[240px]" data-name="Container">
              <div className="h-[19.5px] relative shrink-0 w-full" data-name="p">
                <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-0 not-italic text-[#0d1701] text-[12px] top-[0.5px]">Registered Office:</p>
              </div>
              <div className="h-[58.5px] relative shrink-0 w-full" data-name="p">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#0d1701] text-[12px] top-[0.5px] w-[229px] whitespace-pre-wrap">SY 199/C, 207/E2/1, Julakal, Waddepalle Mandal, Jogulamba Gadwal District, Telangana — 509 126.</p>
              </div>
            </div>
          </div>
          <div className="col-2 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
            <HText text="Explore" />
            <div className="content-stretch flex flex-col gap-[12px] h-[148px] items-start relative shrink-0 w-full" data-name="ul">
              <LiText text="Our Farms" />
              <LiText text="Feed Supply" />
              <LiText text="Why Choose Haritha?" />
              <Wrapper2>{`Lab Reports & Transparency`}</Wrapper2>
              <LiText text="Our Story" />
            </div>
          </div>
          <div className="col-3 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
            <HText text="Legal" />
            <div className="content-stretch flex flex-col gap-[12px] h-[148px] items-start relative shrink-0 w-full" data-name="ul">
              <Wrapper2>{`Terms & Conditions`}</Wrapper2>
              <LiText text="Privacy Policy" />
              <LiText text="Shipping Policy" />
              <LiText text="Refund Policy" />
              <LiText text="Site Map" />
            </div>
          </div>
          <div className="col-4 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
            <HText text="Contact Us" />
            <div className="content-stretch flex flex-col gap-[16px] h-[132px] items-start relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex flex-col gap-[4px] h-[40px] items-start relative shrink-0 w-full" data-name="Container">
                <SpanText text="Phone" />
                <Wrapper1>
                  <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#0d1701] text-[14px] top-[0.5px]">+91 9632791544</p>
                </Wrapper1>
              </div>
              <div className="content-stretch flex flex-col gap-[4px] h-[40px] items-start relative shrink-0 w-full" data-name="Container">
                <SpanText text="Email" />
                <Wrapper1>
                  <p className="absolute decoration-solid font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#0d1701] text-[14px] top-[0.5px] underline">operations@harithafarms.in</p>
                </Wrapper1>
              </div>
              <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
                <div className="absolute content-stretch flex flex-col items-start left-0 size-[20px] top-0" data-name="a">
                  <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Facebook">
                    <div className="absolute bottom-[8.33%] left-[29.17%] right-1/4 top-[8.33%]" data-name="Vector">
                      <div className="absolute inset-[-5%_-9.09%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8333 18.3333">
                          <path d={svgPaths.p1f29de80} id="Vector" stroke="var(--stroke-0, #0D1701)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col items-start left-[36px] size-[20px] top-0" data-name="a">
                  <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Instagram">
                    <div className="absolute inset-[8.33%]" data-name="Vector">
                      <div className="absolute inset-[-5%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
                          <path d={svgPaths.p1aaf0300} id="Vector" stroke="var(--stroke-0, #0D1701)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute inset-[33.15%_33.15%_33.51%_33.51%]" data-name="Vector">
                      <div className="absolute inset-[-12.5%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33334 8.33334">
                          <path d={svgPaths.p1a50b2f0} id="Vector" stroke="var(--stroke-0, #0D1701)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute inset-[27.08%_27.04%_72.92%_72.92%]" data-name="Vector">
                      <div className="absolute inset-[-0.83px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.675 1.66667">
                          <path d="M0.833333 0.833333H0.841667" id="Vector" stroke="var(--stroke-0, #0D1701)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col items-start left-[108px] size-[20px] top-0" data-name="a">
                  <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Youtube">
                    <div className="absolute inset-[20.56%_8.23%]" data-name="Vector">
                      <div className="absolute inset-[-7.08%_-4.99%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3732 13.4441">
                          <path d={svgPaths.p39f21d00} id="Vector" stroke="var(--stroke-0, #0D1701)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute inset-[37.5%_37.5%_37.5%_41.67%]" data-name="Vector">
                      <div className="absolute inset-[-16.67%_-20%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.83333 6.66667">
                          <path d={svgPaths.p2d416900} id="Vector" stroke="var(--stroke-0, #0D1701)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col items-start left-[74px] overflow-clip pt-[0.75px] size-[16px] top-[2px]" data-name="Link">
                  <div className="content-stretch flex flex-col h-[14.5px] items-start relative shrink-0 w-full" data-name="Container">
                    <div className="h-[14.5px] overflow-clip relative shrink-0 w-full" data-name="svg">
                      <div className="absolute contents inset-0" data-name="Group">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14.5006">
                          <path d={svgPaths.p2836c100} fill="var(--fill-0, #0D1701)" id="Vector" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex h-[56px] items-start justify-center left-[80px] top-[512px] w-[1280px]" data-name="div">
        <div className="bg-white h-[56px] relative rounded-[16777200px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] shrink-0 w-[448px]" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[24px] relative size-full">
            <div className="bg-[rgba(255,255,255,0)] h-[40px] relative shrink-0 w-[376px]" data-name="Input">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] size-full">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(74,85,104,0.6)]">Enter your email</p>
              </div>
            </div>
            <div className="bg-[#8b5a2b] relative rounded-[16777200px] shrink-0 size-[40px]" data-name="Button">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                <div className="relative shrink-0 size-[16px]" data-name="ArrowRight">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <g id="ArrowRight">
                      <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex h-[20px] items-center justify-between left-0 px-[24px] top-[793px] w-[1420px]" data-name="Container">
        <Wrapper additionalClassNames="h-[19.5px] w-[332.797px]">
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.4)] top-[0.5px] tracking-[1.2px] uppercase">© 2026 Haritha Farms. Powered by Nature.</p>
        </Wrapper>
        <Wrapper additionalClassNames="h-[16.5px] opacity-40 w-[281.664px]">
          <div className="absolute bg-[#c9a84c] h-px left-0 top-[7.75px] w-[24px]" data-name="span" />
          <div className="absolute h-[15px] left-[32px] top-[0.75px] w-[115.828px]" data-name="span">
            <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[15px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.7)] top-[0.5px] tracking-[1.8px] uppercase">Handcrafted by</p>
          </div>
          <div className="absolute h-[16.5px] left-[155.83px] top-0 w-[110.836px]" data-name="span">
            <p className="absolute font-['Playfair_Display:Italic',sans-serif] font-normal italic leading-[16.5px] left-0 text-[#c9a84c] text-[11px] top-[-0.5px] tracking-[3.08px] uppercase">DOMS Global</p>
          </div>
          <div className="absolute left-[272.66px] size-[9px] top-[3.75px]" data-name="ExternalLink">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
              <g clipPath="url(#clip0_429_637)" id="ExternalLink">
                <path d="M5.625 1.125H7.875V3.375" id="Vector" stroke="var(--stroke-0, #C9A84C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.75" />
                <path d="M3.75 5.25L7.875 1.125" id="Vector_2" stroke="var(--stroke-0, #C9A84C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.75" />
                <path d={svgPaths.p2d143d00} id="Vector_3" stroke="var(--stroke-0, #C9A84C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.75" />
              </g>
              <defs>
                <clipPath id="clip0_429_637">
                  <rect fill="white" height="9" width="9" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}