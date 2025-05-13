"use client";

import React, { useEffect, useRef } from 'react';
import HALO from 'vanta/dist/vanta.halo.min';
import * as THREE from 'three';

const Background = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<ReturnType<typeof HALO> | null>(null);

  useEffect(() => {
    if (vantaRef.current) {
      vantaEffect.current ??= HALO({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        baseColor: 0x2e026d,
        backgroundColor: 0x15162c,
        amplitudeFactor: 1.5,
        size: 1.50
      });
    }

    return () => {
      if (vantaEffect.current?.destroy) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <div ref={vantaRef} className="fixed inset-0 -z-10"></div>
      
      <div className="fixed inset-0 -z-10 bg-black/25 backdrop-blur-[25px] pointer-events-none"></div>
    </>
  );
};

export default Background; 