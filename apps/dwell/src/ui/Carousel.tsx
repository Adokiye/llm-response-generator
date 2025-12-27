import { ReactNode } from 'react';

export const Carousel = ({ children }: { children: ReactNode }) => (
  <div className="overflow-x-auto -mx-4 px-4">
    <div className="flex gap-3 snap-x snap-mandatory">
      {Array.isArray(children)
        ? children.map((child, idx) => (
            <div key={idx} className="snap-start first:pl-0 last:pr-0 min-w-[240px]">
              {child}
            </div>
          ))
        : children}
    </div>
  </div>
);
