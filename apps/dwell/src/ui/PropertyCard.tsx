import { Badge } from './Badge';
import { Button } from './Button';

export type Property = {
  id: string;
  title: string;
  location: string;
  price: string;
  type: string;
  rating?: number;
  verified?: boolean;
  image: string;
  bedrooms?: number;
  bathrooms?: number;
  size?: string;
  promotion?: 'sponsored' | 'platinum';
};

export const PropertyCard = ({ property }: { property: Property }) => {
  return (
    <div className="rounded-card border border-neutral-200 overflow-hidden bg-white shadow-card">
      <div className="relative">
        <img src={property.image} alt={property.title} className="h-40 w-full object-cover" />
        <button className="absolute right-3 top-3 rounded-full bg-white/80 px-3 py-1 text-sm">♡</button>
        {property.promotion && (
          <div className="absolute left-3 top-3">
            <Badge variant={property.promotion === 'platinum' ? 'platinum' : 'promoted'}>
              {property.promotion === 'platinum' ? 'Platinum' : 'Sponsored'}
            </Badge>
          </div>
        )}
      </div>
      <div className="p-4 space-y-2">
        <div className="flex items-center gap-2">
          <h3 className="font-bold text-lg flex-1">{property.title}</h3>
          {property.verified && <Badge variant="verified">Verified</Badge>}
        </div>
        <p className="text-sm text-neutral-600">{property.location}</p>
        <div className="flex items-center gap-3 text-sm text-neutral-700">
          <span className="font-semibold text-pink-600">{property.price}</span>
          <span>{property.type}</span>
          {property.rating && <span>★ {property.rating.toFixed(1)}</span>}
        </div>
        <div className="flex items-center gap-2 text-xs text-neutral-500">
          {property.bedrooms !== undefined && <span>{property.bedrooms} beds</span>}
          {property.bathrooms !== undefined && <span>{property.bathrooms} baths</span>}
          {property.size && <span>{property.size}</span>}
        </div>
        <Button variant="secondary" size="sm" className="w-full">
          View details
        </Button>
      </div>
    </div>
  );
};
