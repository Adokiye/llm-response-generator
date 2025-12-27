import { useMemo, useState } from 'react';
import { ScreenShell } from '../ui/Screen';
import { SearchInput } from '../ui/SearchInput';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Badge } from '../ui/Badge';
import { SectionHeader } from '../ui/SectionHeader';
import { PropertyCard } from '../ui/PropertyCard';
import { Carousel } from '../ui/Carousel';
import { PromoCard } from '../ui/PromoCard';
import { BottomNav } from '../ui/BottomNav';
import { properties } from '../mock/properties';
import { promotions } from '../mock/promotions';
import { EmptyState, ErrorState } from '../ui/States';
import { useStatefulData } from '../lib/state';
import { Skeleton } from '../ui/Skeleton';

export const MainDashboard = () => {
  const { status, data } = useStatefulData(properties.slice(0, 6));
  return (
    <ScreenShell title="5.1 Main Dashboard">
      <div className="space-y-6 pb-16">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-neutral-500">Current location</p>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold">Ikoyi, Lagos</h2>
              <Button variant="ghost" size="sm">
                Change
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost">🔔</Button>
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=60"
              className="h-10 w-10 rounded-full"
            />
          </div>
        </div>
        <SearchInput placeholder="Search for properties, experiences, or services" />
        <Carousel>
          {promotions.slice(0, 3).map((promo) => (
            <PromoCard key={promo.id} promo={promo} />
          ))}
        </Carousel>
        <SectionHeader
          title="Discover"
          action={<Button variant="ghost" size="sm" className="text-pink-500">See All</Button>}
        />
        <div className="flex gap-2 overflow-x-auto">
          {['For Rent', 'For Sale', 'Short Lets', 'New Developments', 'Investment Opportunities'].map((cat) => (
            <Badge key={cat} variant="neutral">
              {cat}
            </Badge>
          ))}
        </div>
        <SectionHeader title="Promoted" />
        <Carousel>
          {promotions.map((promo) => (
            <PromoCard key={promo.id} promo={promo} />
          ))}
        </Carousel>
        <SectionHeader title="Properties" />
        {status === 'loading' && (
          <div className="grid md:grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-64" />
            ))}
          </div>
        )}
        {status === 'error' && <ErrorState title="Could not load" description="Please retry." />}
        {status === 'success' && data && (data as any[]).length === 0 && (
          <EmptyState title="No listings" description="No properties found for your filters." />
        )}
        {status === 'success' && Array.isArray(data) && (
          <div className="grid md:grid-cols-2 gap-4">
            {data.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
      <BottomNav />
    </ScreenShell>
  );
};

export const PropertyDetails = () => {
  const property = useMemo(() => properties[0], []);
  return (
    <ScreenShell title="5.2 Property Details">
      <div className="space-y-4 pb-20">
        <div className="rounded-card overflow-hidden border border-neutral-200 shadow-card">
          <img src={property.image} alt={property.title} className="h-56 w-full object-cover" />
          <div className="absolute right-4 top-4 flex gap-2">
            <Button variant="ghost" size="sm">
              Share
            </Button>
            <Button variant="ghost" size="sm">
              Save
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold">{property.title}</h2>
          <Badge variant="verified">Verified</Badge>
        </div>
        <p className="text-neutral-600">{property.location}</p>
        <div className="flex items-center gap-3 text-lg font-semibold text-pink-600">{property.price}</div>
        <div className="grid grid-cols-2 gap-2 text-sm text-neutral-700">
          <span>Type: {property.type}</span>
          <span>Size: {property.size}</span>
          <span>{property.bedrooms} beds</span>
          <span>{property.bathrooms} baths</span>
        </div>
        <div>
          <h3 className="font-bold mb-2">Amenities</h3>
          <div className="flex flex-wrap gap-2 text-sm text-neutral-700">
            {['Pool', 'Generator', 'Security', 'WiFi', 'Parking'].map((a) => (
              <Badge key={a} variant="neutral">
                {a}
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-2">Description</h3>
          <p className="text-neutral-600">
            Luxury duplex overlooking the lagoon with private jetty, concierge, and premium fittings. Read more...
          </p>
        </div>
        <div className="rounded-card border border-neutral-200 p-4">
          <h3 className="font-bold mb-2">Owner / Agent</h3>
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=60"
              className="h-12 w-12 rounded-full"
            />
            <div>
              <p className="font-semibold">Tosin Adewale</p>
              <p className="text-sm text-neutral-600">4 years on Dwell • 95% response</p>
            </div>
            <Badge variant="verified">Verified</Badge>
          </div>
          <Button variant="secondary" className="mt-3 w-full">
            View Profile
          </Button>
        </div>
        <SectionHeader title="Similar Properties" />
        <Carousel>
          {properties.slice(1, 5).map((prop) => (
            <PropertyCard key={prop.id} property={prop} />
          ))}
        </Carousel>
      </div>
      <div className="fixed bottom-20 left-0 right-0 bg-white border-t border-neutral-200 p-4 flex gap-2">
        <Button variant="secondary" className="flex-1">
          Schedule Viewing
        </Button>
        <Button variant="primary" className="flex-1">
          Book Now
        </Button>
      </div>
      <BottomNav />
    </ScreenShell>
  );
};

export const BookingOfferFlow = () => {
  const [type, setType] = useState<'rental' | 'shortlet' | 'sale'>('rental');
  return (
    <ScreenShell title="5.3 Booking / Offer Flow">
      <div className="space-y-4">
        <div className="rounded-card border border-neutral-200 p-4">
          <p className="text-sm text-neutral-500">Property</p>
          <h3 className="font-semibold">Ikoyi Waterfront Duplex</h3>
          <p className="text-pink-600 font-semibold">₦2,500,000 / month</p>
        </div>
        <div className="flex gap-2">
          <Button variant={type === 'rental' ? 'primary' : 'secondary'} className="flex-1" onClick={() => setType('rental')}>
            Rental
          </Button>
          <Button variant={type === 'shortlet' ? 'primary' : 'secondary'} className="flex-1" onClick={() => setType('shortlet')}>
            Short-let
          </Button>
          <Button variant={type === 'sale' ? 'primary' : 'secondary'} className="flex-1" onClick={() => setType('sale')}>
            Sale
          </Button>
        </div>
        {type === 'rental' && (
          <div className="grid gap-3">
            <Input label="Move-in Date" type="date" />
            <Input label="Lease Term" placeholder="12 months" />
            <Input label="Occupants" type="number" />
          </div>
        )}
        {type === 'shortlet' && (
          <div className="grid gap-3">
            <Input label="Check-in" type="date" />
            <Input label="Check-out" type="date" />
            <Input label="Guests" type="number" />
          </div>
        )}
        {type === 'sale' && (
          <div className="grid gap-3">
            <Input label="Offer Amount" placeholder="₦900,000,000" />
            <Input label="Financing Method" placeholder="Cash / Mortgage" />
            <Input label="Contingencies" placeholder="Inspection, Financing" />
          </div>
        )}
        <div className="rounded-card border border-neutral-200 p-4 space-y-2">
          <h3 className="font-bold">Fee breakdown</h3>
          <div className="flex justify-between text-sm"><span>Base</span><span>₦500,000</span></div>
          <div className="flex justify-between text-sm"><span>Service fee</span><span>₦25,000</span></div>
          <div className="flex justify-between text-sm font-semibold"><span>Total</span><span>₦525,000</span></div>
        </div>
        <Input label="Payment Method" placeholder="Wallet / Card" />
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" /> I agree to cancellation policy
        </label>
        <Button variant="primary" className="w-full">
          {type === 'sale' ? 'Make Offer' : 'Book Now'}
        </Button>
      </div>
    </ScreenShell>
  );
};

export const ExplorePage = () => {
  const { status, data } = useStatefulData(properties);
  const [filter, setFilter] = useState('All');
  const categories = ['Properties', 'Experiences', 'Investments', 'Services', 'Promotions', 'All'];
  return (
    <ScreenShell title="5.4 Explore Page">
      <div className="space-y-4 pb-16">
        <SearchInput placeholder="Search everything" />
        <div className="flex gap-2 overflow-x-auto">
          {categories.map((cat) => (
            <Badge key={cat} variant={filter === cat ? 'verified' : 'neutral'}>
              <button onClick={() => setFilter(cat)}>{cat}</button>
            </Badge>
          ))}
        </div>
        <div className="rounded-card border border-neutral-200 p-4">
          <p className="text-sm font-semibold mb-2">What’s your vibe?</p>
          <div className="flex flex-wrap gap-2">
            {['Food', 'Fitness', 'Entertainment', 'Outdoors', 'Family', 'Nightlife'].map((v) => (
              <Badge key={v} variant="neutral">
                {v}
              </Badge>
            ))}
          </div>
        </div>
        {status === 'loading' && <Skeleton className="h-40" />}
        {status === 'error' && <ErrorState title="Could not load" description="Please refresh" />}
        {status === 'success' && Array.isArray(data) && data.length === 0 && (
          <EmptyState title="No results" description="Try adjusting filters." />
        )}
        {status === 'success' && Array.isArray(data) && (
          <div className="grid md:grid-cols-2 gap-4">
            {data.map((item, idx) => (
              <PropertyCard key={item.id + idx} property={item} />
            ))}
          </div>
        )}
      </div>
      <BottomNav />
    </ScreenShell>
  );
};
