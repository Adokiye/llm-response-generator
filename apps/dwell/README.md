# Dwell Demo (Light Theme)

Production-style React + TypeScript + Vite demo that covers all PRD screens with mocked data and state toggles for success/loading/empty/error. Built with TailwindCSS, react-hook-form + zod, react-router, and a reusable UI kit.

## Getting started

```bash
pnpm install
pnpm --filter dwell-demo dev
```

Build preview:

```bash
pnpm --filter dwell-demo build
pnpm --filter dwell-demo preview
```

## Routes
- `/demo` – Demo index listing all screens and quick links to each state variant.
- `/screen/{id}` – Individual screens (see checklist below). Add `?state=loading|empty|error|success` to toggle view state. Form screens show validation cues when `state=error`.

## UI Kit
Reusable components live in `src/ui` and include buttons, inputs (text/password/OTP/search/textarea), chips, badges, cards (property, promo, info), skeletons, empty/error states, carousel, modal/sheet, bottom navigation, and section headers.

## State toggles
All screens respond to the `state` query param:
- `success` (default): render normal content.
- `loading`: replaces lists/cards with skeletons or shows loading indicators on buttons.
- `empty`: renders empty-state components on list-heavy screens.
- `error`: shows error states or validation helper text on forms.

## Mock data
Available in `src/mock` for properties, promotions, investments, wallet, and user profile. Nigerian context (₦, Lagos/Abuja) is reflected throughout.

## Screen checklist

| Screen ID | Name | Route | States | TO_COMPARE_WITH_FIGMA |
| --- | --- | --- | --- | --- |
| 1.0 | Introductory Slider Screens | `/screen/1-0-intro` | success/loading/empty/error | ☐ |
| 1.1 | Email Registration | `/screen/1-1-register` | success/loading/empty/error | ☐ |
| 1.2 | Email Verification | `/screen/1-2-verify` | success/loading/empty/error | ☐ |
| 1.3 | Account Setup Success | `/screen/1-3-success` | success/loading/empty/error | ☐ |
| 1.4 | Login | `/screen/1-4-login` | success/loading/empty/error | ☐ |
| 1.5 | Forgot Password | `/screen/1-5-forgot` | success/loading/empty/error | ☐ |
| 1.6 | OTP Verification After Login | `/screen/1-6-otp-login` | success/loading/empty/error | ☐ |
| 1.7 | User Type Selection | `/screen/1-7-user-type` | success/loading/empty/error | ☐ |
| 1.8 | B2B User Type Selection | `/screen/1-8-b2b-type` | success/loading/empty/error | ☐ |
| 1.9.1 | Real Estate Agent Onboarding (Step 1 of 3) | `/screen/1-9-1-agent-onboarding` | success/loading/empty/error | ☐ |
| 1.9.17 | Investment Partner Onboarding (Step 1 of 3) | `/screen/1-9-17-investment-step1` | success/loading/empty/error | ☐ |
| 1.9.18 | Investment Partner Onboarding (Step 2 of 3) | `/screen/1-9-18-investment-step2` | success/loading/empty/error | ☐ |
| 1.9.19 | Investment Partner Onboarding (Step 3 of 3) | `/screen/1-9-19-investment-step3` | success/loading/empty/error | ☐ |
| 2.1 | Phone Number Verification | `/screen/2-1-phone-verify` | success/loading/empty/error | ☐ |
| 2.2 | OTP Verification (Phone) | `/screen/2-2-phone-otp` | success/loading/empty/error | ☐ |
| 3.1 | Basic Profile Information | `/screen/3-1-profile` | success/loading/empty/error | ☐ |
| 5.1 | Main Dashboard (Property Seeker View) | `/screen/5-1-home` | success/loading/empty/error | ☐ |
| 5.2 | Property Details View | `/screen/5-2-property-details` | success/loading/empty/error | ☐ |
| 5.3 | Booking / Offer Flow | `/screen/5-3-booking-offer` | success/loading/empty/error | ☐ |
| 5.4 | Explore Page | `/screen/5-4-explore` | success/loading/empty/error | ☐ |
| 7.3 | Notification Settings | `/screen/7-3-notifications` | success/loading/empty/error | ☐ |
| 7.4 | Payments & Wallet | `/screen/7-4-payments-wallet` | success/loading/empty/error | ☐ |
| 8.1 | Wallet Dashboard | `/screen/8-1-wallet-dashboard` | success/loading/empty/error | ☐ |
| 8.2 | Add Money | `/screen/8-2-add-money` | success/loading/empty/error | ☐ |
| 9.3 | Scheduling Interface | `/screen/9-3-scheduling` | success/loading/empty/error | ☐ |
| 12.3 | Promotion Management System | `/screen/12-3-promotions-management` | success/loading/empty/error | ☐ |

