import { Link, useLocation } from 'react-router-dom';

const tabs = [
  { label: 'Home', path: '/screen/5-1-home', icon: '🏠' },
  { label: 'Explore', path: '/screen/5-4-explore', icon: '🔍' },
  { label: 'Investments', path: '/screen/5-3-booking-offer', icon: '💼' },
  { label: 'Inbox', path: '/screen/5-1-home?tab=inbox', icon: '💬' },
  { label: 'Profile', path: '/screen/3-1-profile', icon: '👤' },
  { label: 'Promotions', path: '/screen/12-3-promotions-management', icon: '🎯' },
];

export const BottomNav = () => {
  const { pathname } = useLocation();
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 px-2 py-2 flex justify-between">
      {tabs.map((tab) => {
        const active = pathname === tab.path;
        return (
          <Link
            key={tab.path}
            to={tab.path}
            className={`flex-1 text-center text-xs font-semibold ${active ? 'text-pink-500' : 'text-neutral-500'}`}
          >
            <div className={`mx-auto mb-1 h-8 w-8 rounded-full flex items-center justify-center ${active ? 'bg-pink-50' : 'bg-neutral-100'}`}>
              {tab.icon}
            </div>
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
};
