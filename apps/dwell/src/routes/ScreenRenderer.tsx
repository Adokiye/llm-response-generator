import { ScreenMeta } from './screens';
import {
  AccountSetupSuccessScreen,
  AgentOnboardingStep1,
  B2BUserTypeSelectionScreen,
  EmailRegistrationScreen,
  EmailVerificationScreen,
  ForgotPasswordScreen,
  IntroSliderScreen,
  InvestmentPartnerStep1,
  InvestmentPartnerStep2,
  InvestmentPartnerStep3,
  LoginScreen,
  OTPAfterLoginScreen,
  UserTypeSelectionScreen,
} from '../screens/OnboardingScreens';
import { PhoneOTPScreen, PhoneVerificationScreen } from '../screens/VerificationScreens';
import { BasicProfileScreen } from '../screens/ProfileScreens';
import { BookingOfferFlow, ExplorePage, MainDashboard, PropertyDetails } from '../screens/DashboardScreens';
import { NotificationSettings, PaymentsWallet } from '../screens/SettingsScreens';
import { WalletDashboard, AddMoneyScreen } from '../screens/WalletScreens';
import { SchedulingScreen } from '../screens/SchedulingScreen';
import { PromotionManagement } from '../screens/PromotionManagement';
import { useMemo } from 'react';
import { ErrorState } from '../ui/States';

export const ScreenRenderer = ({ screen }: { screen: ScreenMeta }) => {
  const component = useMemo(() => {
    switch (screen.id) {
      case '1.0':
        return <IntroSliderScreen />;
      case '1.1':
        return <EmailRegistrationScreen />;
      case '1.2':
        return <EmailVerificationScreen />;
      case '1.3':
        return <AccountSetupSuccessScreen />;
      case '1.4':
        return <LoginScreen />;
      case '1.5':
        return <ForgotPasswordScreen />;
      case '1.6':
        return <OTPAfterLoginScreen />;
      case '1.7':
        return <UserTypeSelectionScreen />;
      case '1.8':
        return <B2BUserTypeSelectionScreen />;
      case '1.9.1':
        return <AgentOnboardingStep1 />;
      case '1.9.17':
        return <InvestmentPartnerStep1 />;
      case '1.9.18':
        return <InvestmentPartnerStep2 />;
      case '1.9.19':
        return <InvestmentPartnerStep3 />;
      case '2.1':
        return <PhoneVerificationScreen />;
      case '2.2':
        return <PhoneOTPScreen />;
      case '3.1':
        return <BasicProfileScreen />;
      case '5.1':
        return <MainDashboard />;
      case '5.2':
        return <PropertyDetails />;
      case '5.3':
        return <BookingOfferFlow />;
      case '5.4':
        return <ExplorePage />;
      case '7.3':
        return <NotificationSettings />;
      case '7.4':
        return <PaymentsWallet />;
      case '8.1':
        return <WalletDashboard />;
      case '8.2':
        return <AddMoneyScreen />;
      case '9.3':
        return <SchedulingScreen />;
      case '12.3':
        return <PromotionManagement />;
      default:
        return null;
    }
  }, [screen.id]);

  if (!component) {
    return <ErrorState title="Screen not mapped" description={screen.name} />;
  }
  return component;
};
