import { Badge } from './Badge';
import { Button } from './Button';

type Promo = {
  id: string;
  title: string;
  description: string;
  image: string;
  cta?: string;
};

export const PromoCard = ({ promo }: { promo: Promo }) => (
  <div className="rounded-card border border-neutral-200 overflow-hidden bg-white shadow-card w-full">
    <img src={promo.image} alt={promo.title} className="h-36 w-full object-cover" />
    <div className="p-4 space-y-2">
      <Badge variant="promoted">Promotion</Badge>
      <h3 className="font-bold text-lg">{promo.title}</h3>
      <p className="text-sm text-neutral-600">{promo.description}</p>
      {promo.cta && (
        <Button variant="primary" size="sm" className="w-full">
          {promo.cta}
        </Button>
      )}
    </div>
  </div>
);
