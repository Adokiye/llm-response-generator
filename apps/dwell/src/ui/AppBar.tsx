import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';

export const AppBar = ({ title, actions }: { title: string; actions?: ReactNode }) => {
  const navigate = useNavigate();
  return (
    <header className="flex items-center justify-between px-4 py-3 border-b border-neutral-200 bg-white sticky top-0 z-10">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>
          ← Back
        </Button>
        <h1 className="text-lg font-bold">{title}</h1>
      </div>
      <div className="flex items-center gap-2">{actions}</div>
    </header>
  );
};
