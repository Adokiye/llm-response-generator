import { ReactNode } from 'react';

export const SectionHeader = ({ title, action }: { title: string; action?: ReactNode }) => (
  <div className="flex items-center justify-between mb-3">
    <h3 className="text-lg font-bold">{title}</h3>
    {action}
  </div>
);
