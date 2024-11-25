import type { ElementType } from 'react';

export const TechIcon = ({ component }: { component: ElementType }) => {
  const Component = component;
  return <Component className="size-10" />;
};
