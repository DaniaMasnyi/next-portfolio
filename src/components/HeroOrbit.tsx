import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export const HeroOrbit = ({
  children,
  size,
  rotation,
  shouldOrbit = false,
  shouldSpin = false,
  spinDuration,
  orbitDuration,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  shouldOrbit?: boolean;
  shouldSpin?: boolean;
  spinDuration?: string;
  orbitDuration?: string;
}>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
      <div
        className={twMerge(shouldOrbit && 'animate-spin')}
        style={{
          animationDuration: orbitDuration || '20s', // Дефолтна тривалість орбіти
          height: `${size}px`,
          width: `${size}px`,
        }}
      >
        <div
          className="flex items-start justify-start"
          style={{
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <div
            className={twMerge(shouldSpin && 'animate-spin')}
            style={{ animationDuration: spinDuration || '10s' }} // Дефолтна тривалість обертання
          >
            <div
              className="inline-flex"
              style={{ transform: `rotate(${-rotation}deg)` }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
