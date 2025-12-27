import { Link } from 'react-router-dom';
import { screens } from './screens';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export const DemoIndex = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="border-b border-neutral-200 px-6 py-4 flex items-center justify-between">
        <div>
          <p className="text-sm text-neutral-500">Dwell Demo Navigation</p>
          <h1 className="text-2xl font-bold">Demo Index</h1>
        </div>
        <Badge variant="verified">Light Theme</Badge>
      </header>
      <div className="p-6 space-y-6">
        <p className="text-neutral-600">
          Each screen link supports <span className="font-semibold">?state=success | loading | empty | error</span>. Buttons below open
          variants directly.
        </p>
        <div className="grid gap-4">
          {screens.map((screen) => (
            <div key={screen.path} className="border border-neutral-200 rounded-card p-4 shadow-sm bg-white">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wide text-neutral-500">Screen {screen.id}</p>
                  <h2 className="text-lg font-semibold">{screen.name}</h2>
                  <Link to={screen.path} className="text-pink-500 text-sm underline">
                    {screen.path}
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['success', 'loading', 'empty', 'error'].map((state) => (
                    <Button key={state} asChild variant={state === 'success' ? 'primary' : 'secondary'} size="sm">
                      <Link to={`${screen.path}?state=${state}`}>{state}</Link>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
