import Image from "./Image91";

function Frame1() {
  return (
    <div className="content-stretch flex gap-[44px] items-center relative shrink-0">
      <div className="h-[497px] relative shrink-0 w-[500.504px]" data-name="image (9) 1">
        <Image />
      </div>
      <p className="font-serif leading-[496.5px] not-italic relative shrink-0 text-[488.661px] text-white" style={{ fontFamily: "'Times New Roman', serif" }}>DOMS GLOBAL</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[100px] items-center justify-center relative shrink-0">
      <p className="font-['Tillana',cursive] leading-[496.5px] not-italic relative shrink-0 text-[488.661px] text-[rgba(255,255,255,0.7)]" style={{ fontFamily: "'Tillana', cursive" }}>{`Handcrafted by `}</p>
      <Frame1 />
    </div>
  );
}

export default function DomsLogo() {
  return (
    <div className="content-stretch flex items-center justify-center relative w-max" data-name="DOMS LOGO3">
      <Frame />
    </div>
  );
}
