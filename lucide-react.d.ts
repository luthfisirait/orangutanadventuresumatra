declare module "lucide-react" {
  import * as React from "react";

  type IconProps = React.SVGProps<SVGSVGElement> & {
    size?: number | string;
    strokeWidth?: number | string;
  };

  export const ArrowRight: React.FC<IconProps>;
  export const CalendarDays: React.FC<IconProps>;
  export const Check: React.FC<IconProps>;
  export const ChevronRight: React.FC<IconProps>;
  export const Clock3: React.FC<IconProps>;
  export const Compass: React.FC<IconProps>;
  export const HeartHandshake: React.FC<IconProps>;
  export const Instagram: React.FC<IconProps>;
  export const Leaf: React.FC<IconProps>;
  export const Mail: React.FC<IconProps>;
  export const MapPin: React.FC<IconProps>;
  export const MessageCircle: React.FC<IconProps>;
  export const Mountain: React.FC<IconProps>;
  export const ShieldCheck: React.FC<IconProps>;
  export const Sparkles: React.FC<IconProps>;
  export const Star: React.FC<IconProps>;
  export const TentTree: React.FC<IconProps>;
  export const Waves: React.FC<IconProps>;
}
