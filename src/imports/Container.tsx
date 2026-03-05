import { handsSoilImage as imgImageHandsHoldingSoil, philosophyImage as imgDsc21071 } from '../assets';

function ImageHandsHoldingSoil() {
  return (
    <div className="absolute h-[657.766px] left-0 overflow-clip top-0 w-[493.328px]" data-name="Image (Hands holding soil)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageHandsHoldingSoil} />
      <div className="absolute h-[658px] left-0 top-[-0.34px] w-[493px]" data-name="_DSC2107 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDsc21071} />
      </div>
      <div className="absolute h-[658px] left-0 top-[-0.34px] w-[493px]" data-name="_DSC2107 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-61.74%] max-w-none top-[-0.08%] w-[200.18%]" src={imgDsc21071} />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return <div className="absolute bg-[rgba(10,22,16,0.1)] h-[657.766px] left-0 top-0 w-[493.328px]" data-name="Container" />;
}

export default function Container() {
  return (
    <div className="bg-[#e6e2d6] relative size-full" data-name="Container">
      <ImageHandsHoldingSoil />
      <Container1 />
    </div>
  );
}