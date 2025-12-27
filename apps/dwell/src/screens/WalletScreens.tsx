import { ScreenShell } from '../ui/Screen';
import { wallet } from '../mock/wallet';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Chip } from '../ui/Chip';

export const WalletDashboard = () => {
  return (
    <ScreenShell title="8.1 Wallet Dashboard">
      <div className="space-y-4">
        <div className="rounded-card border border-neutral-200 p-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-neutral-500">Balance</p>
            <h2 className="text-3xl font-bold">{wallet.balance}</h2>
            <p className="text-sm text-neutral-600">Upcoming holds {wallet.upcoming}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="primary">Add money</Button>
            <Button variant="secondary">Withdraw</Button>
          </div>
        </div>
        <div className="rounded-card border border-neutral-200 p-4">
          <div className="flex justify-between items-center mb-3">
            <p className="font-semibold">Transactions</p>
            <Button variant="ghost" size="sm">
              Download statement
            </Button>
          </div>
          <div className="flex gap-2 mb-3 flex-wrap">
            {['All', 'Payouts', 'Deposits', 'Refunds'].map((f) => (
              <Chip key={f} active={f === 'All'}>
                {f}
              </Chip>
            ))}
          </div>
          <div className="space-y-2">
            {wallet.transactions.map((tx) => (
              <div key={tx.id} className="flex justify-between text-sm border-b last:border-b-0 border-neutral-100 py-2">
                <div>
                  <p className="font-semibold">{tx.title}</p>
                  <p className="text-neutral-500">{tx.time}</p>
                </div>
                <p className="font-semibold">{tx.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScreenShell>
  );
};

export const AddMoneyScreen = () => {
  return (
    <ScreenShell title="8.2 Add Money">
      <div className="space-y-4">
        <Input label="Amount" placeholder="₦100,000" />
        <div className="flex gap-2 flex-wrap">
          {[50000, 100000, 250000, 500000].map((amt) => (
            <Chip key={amt}>₦{amt.toLocaleString()}</Chip>
          ))}
        </div>
        <Input label="Payment Method" placeholder="GTBank Card" />
        <Button variant="primary" className="w-full">
          Add Money
        </Button>
      </div>
    </ScreenShell>
  );
};
