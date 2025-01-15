"use client"; 
import { ReactLenis } from "@studio-freight/react-lenis";


export default function LenisWrapper({ children }) {

    
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.12,
        syncTouch: true,
      }}
    >
        <div>
      {children}
      </div>
     
    </ReactLenis>
  );
}
