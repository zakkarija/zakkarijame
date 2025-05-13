declare module 'vanta/dist/vanta.halo.min' {
  import type { Object3D } from 'three';
  import type * as ThreeJS from 'three';
  
  interface VantaHaloOptions {
    el: HTMLElement | null;
    THREE: typeof ThreeJS;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    baseColor?: number;
    backgroundColor?: number;
    amplitudeFactor?: number;
    size?: number;
  }

  interface VantaEffect extends Object3D {
    destroy: () => void;
    options: VantaHaloOptions;
    resize: () => void;
  }

  function HALO(options: VantaHaloOptions): VantaEffect;
  export default HALO;
} 