import { domsLogo } from '../assets';
import { ImageWithFallback } from "../app/components/figma/ImageWithFallback";

export default function Image() {
  return (
    <div className="relative size-full" data-name="image (9) 1">
      <ImageWithFallback 
        src={domsLogo}
        alt="DOMS Global Logo"
        className="block size-full object-cover"
      />
    </div>
  );
}