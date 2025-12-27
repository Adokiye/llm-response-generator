import { Button } from './Button';

export const EmptyState = ({ title, description }: { title: string; description: string }) => (
  <div className="text-center py-10 border border-dashed border-neutral-200 rounded-card">
    <p className="text-lg font-semibold mb-2">{title}</p>
    <p className="text-neutral-500 mb-4">{description}</p>
    <Button variant="secondary">Refresh</Button>
  </div>
);

export const ErrorState = ({ title, description }: { title: string; description: string }) => (
  <div className="text-center py-10 border border-pink-200 bg-pink-50 rounded-card">
    <p className="text-lg font-semibold mb-2 text-pink-600">{title}</p>
    <p className="text-neutral-600 mb-4">{description}</p>
    <Button variant="primary">Try again</Button>
  </div>
);
