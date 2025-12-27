import { useState } from 'react';
import { ScreenShell } from '../ui/Screen';
import { Button } from '../ui/Button';
import { Chip } from '../ui/Chip';
import { Input } from '../ui/Input';
import { wallet } from '../mock/wallet';

export const NotificationSettings = () => {
  const categories = ['Product updates', 'Promotions', 'Booking alerts', 'Agent messages'];
  const [channels] = useState(['Push', 'Email', 'SMS']);
  return (
    <ScreenShell title="7.3 Notification Settings">
      <div className="space-y-4">
        <div className="rounded-card border border-neutral-200 p-4 space-y-3">
          <p className="font-semibold">Channels</p>
          <div className="flex flex-wrap gap-2">
            {channels.map((ch) => (
              <Chip key={ch} active>{ch}</Chip>
            ))}
          </div>
        </div>
        <div className="rounded-card border border-neutral-200 p-4 space-y-3">
          <p className="font-semibold">Categories</p>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Chip key={cat} active>{cat}</Chip>
            ))}
          </div>
        </div>
        <Input label="Frequency" placeholder="Daily" />
        <Input label="Quiet Hours" placeholder="10pm - 7am" />
        <Button variant="primary" className="w-full">
          Save Preferences
        </Button>
      </div>
    </ScreenShell>
  );
};

export const PaymentsWallet = () => {
  return (
    <ScreenShell title="7.4 Payments & Wallet">
      <div className="space-y-4">
        <div className="rounded-card border border-neutral-200 p-4">
          <p className="text-sm text-neutral-500">Wallet balance</p>
          <h2 className="text-2xl font-bold">{wallet.balance}</h2>
          <div className="flex gap-2 mt-3">
            <Button variant="primary" className="flex-1">
              Add
            </Button>
            <Button variant="secondary" className="flex-1">
              Withdraw
            </Button>
          </div>
        </div>
        <div className="rounded-card border border-neutral-200 p-4 space-y-2">
          <p className="font-semibold">Saved payment methods</p>
          {wallet.methods.map((m) => (
            <div key={m.id} className="flex justify-between text-sm text-neutral-700 border-b last:border-b-0 border-neutral-100 py-2">
              <span>
                {m.type} ••••{m.last4}
              </span>
              <span>{m.bank}</span>
            </div>
          ))}
        </div>
        <div className="rounded-card border border-neutral-200 p-4 space-y-2">
          <p className="font-semibold">Preferences & limits</p>
          <p className="text-sm text-neutral-600">Daily limit: {wallet.limits}</p>
          <Button variant="secondary" size="sm">
            Edit limits
          </Button>
        </div>
      </div>
    </ScreenShell>
  );
};
