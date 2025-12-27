import { ReactNode } from 'react';

export const SimpleInfoCard = ({ title, content, icon }: { title: string; content: ReactNode; icon?: ReactNode }) => (
  <div className="border border-neutral-200 rounded-card p-4 bg-white shadow-sm flex items-start gap-3">
    {icon && <div className="text-pink-500 text-xl">{icon}</div>}
    <div>
      <p className="text-sm text-neutral-500">{title}</p>
      <div className="text-base font-semibold">{content}</div>
    </div>
  </div>
);
