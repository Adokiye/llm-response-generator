import { ScreenShell } from '../ui/Screen';
import { Button } from '../ui/Button';
import { PromoCard } from '../ui/PromoCard';
import { promotions } from '../mock/promotions';
import { Input } from '../ui/Input';
import { Chip } from '../ui/Chip';

export const PromotionManagement = () => {
  return (
    <ScreenShell title="12.3 Promotion Management System">
      <div className="space-y-4">
        <div className="rounded-card border border-neutral-200 p-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-neutral-500">Active promos</p>
            <h2 className="text-2xl font-bold">6 running</h2>
            <p className="text-sm text-neutral-600">CTR up 12% vs last week</p>
          </div>
          <Button variant="primary">Create Promo</Button>
        </div>
        <div className="rounded-card border border-neutral-200 p-4">
          <p className="font-semibold mb-2">Categories</p>
          <div className="flex gap-2 flex-wrap">
            {['All', 'Properties', 'Experiences', 'Services', 'Investments'].map((cat, idx) => (
              <Chip key={cat} active={idx === 0}>
                {cat}
              </Chip>
            ))}
          </div>
        </div>
        <Input label="Pricing" placeholder="₦250,000 budget" />
        <Input label="A/B Test" placeholder="Variant A vs B" />
        <div className="grid md:grid-cols-2 gap-3">
          {promotions.map((promo) => (
            <PromoCard key={promo.id} promo={promo} />
          ))}
        </div>
      </div>
    </ScreenShell>
  );
};
