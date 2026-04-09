/// <reference types="vite/client" />

declare namespace JSX {
  interface IntrinsicAttributes {
    key?: any;
  }
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare module "react" {
  export type MouseEvent<T = HTMLElement> = {
    currentTarget: T;
    clientX: number;
    clientY: number;
  };
  export function useEffect(
    effect: () => void | (() => void),
    deps?: readonly any[]
  ): void;
  export function useRef<T>(initialValue: T): { current: T };
  export function useState<T>(
    initialState: T | (() => T)
  ): [T, (value: T | ((prevState: T) => T)) => void];
  export function useCallback<T extends (...args: any[]) => any>(
    callback: T,
    deps: readonly any[]
  ): T;
  export function useMemo<T>(factory: () => T, deps: readonly any[]): T;
}

declare module "react-icons/md" {
  export const MdArrowBack: any;
  export const MdArrowForward: any;
  export const MdArrowOutward: any;
  export const MdCopyright: any;
}

declare module "react-icons/fa6" {
  export const FaGithub: any;
  export const FaLinkedinIn: any;
}

declare module "react-icons/tb" {
  export const TbNotes: any;
}

declare module "react-fast-marquee" {
  const Marquee: any;
  export default Marquee;
}

declare module "gsap/ScrollTrigger" {
  export const ScrollTrigger: {
    isTouch: boolean;
  };
}

declare module "three" {
  const THREE: any;
  export = THREE;
}

declare module "@react-three/fiber" {
  export const Canvas: any;
  export function useFrame(callback: (...args: any[]) => void): void;
}

declare module "@react-three/drei" {
  export const Environment: any;
}

declare module "@react-three/postprocessing" {
  export const EffectComposer: any;
  export const N8AO: any;
}

declare module "@react-three/rapier" {
  export const BallCollider: any;
  export const Physics: any;
  export const RigidBody: any;
  export const CylinderCollider: any;
  export type RapierRigidBody = any;
}
