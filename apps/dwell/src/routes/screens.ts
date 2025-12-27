export type ScreenMeta = {
  id: string;
  name: string;
  path: string;
};

export const screens: ScreenMeta[] = [
  { id: '1.0', name: 'Introductory Slider Screens', path: '/screen/1-0-intro' },
  { id: '1.1', name: 'Email Registration', path: '/screen/1-1-register' },
  { id: '1.2', name: 'Email Verification', path: '/screen/1-2-verify' },
  { id: '1.3', name: 'Account Setup Success', path: '/screen/1-3-success' },
  { id: '1.4', name: 'Login', path: '/screen/1-4-login' },
  { id: '1.5', name: 'Forgot Password', path: '/screen/1-5-forgot' },
  { id: '1.6', name: 'OTP Verification After Login', path: '/screen/1-6-otp-login' },
  { id: '1.7', name: 'User Type Selection', path: '/screen/1-7-user-type' },
  { id: '1.8', name: 'B2B User Type Selection', path: '/screen/1-8-b2b-type' },
  { id: '1.9.1', name: 'Real Estate Agent Onboarding (Step 1 of 3)', path: '/screen/1-9-1-agent-onboarding' },
  { id: '1.9.17', name: 'Investment Partner Onboarding (Step 1 of 3)', path: '/screen/1-9-17-investment-step1' },
  { id: '1.9.18', name: 'Investment Partner Onboarding (Step 2 of 3)', path: '/screen/1-9-18-investment-step2' },
  { id: '1.9.19', name: 'Investment Partner Onboarding (Step 3 of 3)', path: '/screen/1-9-19-investment-step3' },
  { id: '2.1', name: 'Phone Number Verification', path: '/screen/2-1-phone-verify' },
  { id: '2.2', name: 'OTP Verification (Phone)', path: '/screen/2-2-phone-otp' },
  { id: '3.1', name: 'Basic Profile Information', path: '/screen/3-1-profile' },
  { id: '5.1', name: 'Main Dashboard (Property Seeker View)', path: '/screen/5-1-home' },
  { id: '5.2', name: 'Property Details View', path: '/screen/5-2-property-details' },
  { id: '5.3', name: 'Booking / Offer Flow', path: '/screen/5-3-booking-offer' },
  { id: '5.4', name: 'Explore Page', path: '/screen/5-4-explore' },
  { id: '7.3', name: 'Notification Settings', path: '/screen/7-3-notifications' },
  { id: '7.4', name: 'Payments & Wallet', path: '/screen/7-4-payments-wallet' },
  { id: '8.1', name: 'Wallet Dashboard', path: '/screen/8-1-wallet-dashboard' },
  { id: '8.2', name: 'Add Money', path: '/screen/8-2-add-money' },
  { id: '9.3', name: 'Scheduling Interface', path: '/screen/9-3-scheduling' },
  { id: '12.3', name: 'Promotion Management System', path: '/screen/12-3-promotions-management' },
];

export const findScreenIndex = (path: string) => screens.findIndex((s) => s.path === path);
