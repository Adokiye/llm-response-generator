import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { findScreenIndex, screens } from '../routes/screens';
import { Button } from './Button';

export const ScreenShell = ({ title, children, actions }: { title: string; children: ReactNode; actions?: ReactNode }) => {
  const { pathname } = useLocation();
  const idx = findScreenIndex(pathname);
  const prev = idx > 0 ? screens[idx - 1] : null;
  const next = idx < screens.length - 1 ? screens[idx + 1] : null;
  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      <header className="px-4 py-3 border-b border-neutral-200 flex items-center justify-between">
        <div>
          <p className="text-xs text-neutral-500 uppercase">{pathname}</p>
          <h1 className="text-xl font-bold">{title}</h1>
        </div>
        <div className="flex items-center gap-2">{actions}</div>
      </header>
      <main className="flex-1 p-4 pb-24">{children}</main>
      <footer className="border-t border-neutral-200 px-4 py-3 bg-white flex gap-2">
        <Button asChild variant="secondary" className="flex-1" disabled={!prev}>
          <Link to={prev ? prev.path : '#'}>Prev</Link>
        </Button>
        <Button asChild variant="primary" className="flex-1" disabled={!next}>
          <Link to={next ? next.path : '#'}>Next</Link>
        </Button>
      </footer>
    </div>
  );
};
