'use client';
export const hexColorMap = {
    blue: '#3B82F6',
    pink: '#ec4899',
    green: '#22C55E',
    white: '#FFFFFF',
  };

  export type Social = {
    platform: string;
    color: keyof typeof hexColorMap;
    link: string;
    delay: number;
  };
  export interface GlassButtonProps {
  color: string;
  icon: string;

}
import 'remixicon/fonts/remixicon.css'

const GlassButton: React.FC<GlassButtonProps> = ({ color, icon }) => {

  return (
    <button
  
      className={`relative group
          overflow-hidden backdrop-blur-lg rounded-md p-3 w-12 h-12 
          justify-center  text-center  inline-flex items-center
           transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg`}
      style={{
        background: `linear-gradient(135deg, ${color}80, ${color}40)`,
        boxShadow: `0 4px 30px ${color}20`,
        border: `1px solid ${color}40`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="flex items-center justify-center text-center z-10   text-white">
<i className={icon}></i>

      </div>
    </button>
  );
};
export default GlassButton;