import svgPaths from "./svg-ptymfxkkgh";
import { imgGroup } from "./svg-wscrb";

function Group1() {
  return (
    <div className="absolute inset-[4.69%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-0.75px] mask-size-[16px_16px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14.5006">
        <g id="Group">
          <path d={svgPaths.p2836c100} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <ClipPathGroup />
    </div>
  );
}

function PrimeTwitter() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[16px] top-1/2" data-name="prime:twitter">
      <Group />
    </div>
  );
}

export default function X() {
  return (
    <div className="relative size-full" data-name="X">
      <PrimeTwitter />
    </div>
  );
}