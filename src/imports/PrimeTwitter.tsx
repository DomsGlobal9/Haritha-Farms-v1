import { imgGroup } from "./svg-wscrb";

const svgPaths = {
  p2836c100: "M12.6 0H15.0537L9.69372 6.14171L16 14.5006H11.0629L7.19314 9.432L2.77029 14.5006H0.314286L6.04686 7.92914L0 0.00114284H5.06286L8.55543 4.63314L12.6 0ZM11.7371 13.0286H13.0971L4.32 1.39543H2.86171L11.7371 13.0286Z",
};

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
