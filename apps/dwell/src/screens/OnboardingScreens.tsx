import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../ui/Button';
import { Input, TextArea } from '../ui/Input';
import { ScreenShell } from '../ui/Screen';
import { OTPInput } from '../ui/OTPInput';
import { Chip } from '../ui/Chip';
import { useDemoState } from '../lib/state';
import { EmptyState, ErrorState } from '../ui/States';

const regSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  confirm: z.string(),
});

export const IntroSliderScreen = () => {
  const slides = [
    {
      title: 'Find homes you love',
      subtitle: 'Discover verified properties, experiences, and services curated for Lagos living.',
      image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Invest with confidence',
      subtitle: 'Track opportunities across co-investments, developments, and curated deals.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Concierge support',
      subtitle: 'Schedule viewings, chat with agents, and manage payments in one wallet.',
      image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60',
    },
  ];
  const [index, setIndex] = useState(0);
  return (
    <ScreenShell title="1.0 Introductory Slider">
      <div className="space-y-6">
        <div className="rounded-card border border-neutral-200 overflow-hidden shadow-card">
          <img src={slides[index].image} alt={slides[index].title} className="h-56 w-full object-cover" />
          <div className="p-4 space-y-2">
            <h2 className="text-2xl font-bold">{slides[index].title}</h2>
            <p className="text-neutral-600">{slides[index].subtitle}</p>
            <div className="flex items-center gap-2 mt-2">
              {slides.map((_, i) => (
                <span key={i} className={`h-2 w-2 rounded-full ${i === index ? 'bg-pink-500' : 'bg-neutral-200'}`} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <Button variant="ghost" onClick={() => setIndex((index + slides.length - 1) % slides.length)}>
            Skip
          </Button>
          {index < slides.length - 1 ? (
            <Button variant="primary" onClick={() => setIndex((i) => Math.min(slides.length - 1, i + 1))}>
              Next
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button variant="secondary">Login</Button>
              <Button variant="primary">Create Account</Button>
            </div>
          )}
        </div>
      </div>
    </ScreenShell>
  );
};

export const EmailRegistrationScreen = () => {
  const state = useDemoState();
  const form = useForm<z.infer<typeof regSchema>>({ resolver: zodResolver(regSchema), mode: 'onChange' });
  const password = form.watch('password');
  const valid = form.formState.isValid;
  const errors = state === 'error' ? { email: 'Email already exists', password: 'Password too weak', confirm: 'Passwords do not match' } : {};
  return (
    <ScreenShell title="1.1 Email Registration">
      {state === 'error' && <ErrorState title="Validation errors" description="Fix the highlighted fields" />}
      <form className="space-y-4" onSubmit={form.handleSubmit(() => {})}>
        <Input label="Email" placeholder="you@example.com" error={(errors as any).email || form.formState.errors.email?.message} {...form.register('email')} />
        <Input
          label="Password"
          type="password"
          placeholder="••••••••"
          helper={`Strength: ${password?.length > 8 ? 'Strong' : 'Weak'}`}
          error={(errors as any).password || form.formState.errors.password?.message}
          {...form.register('password')}
        />
        <Input
          label="Confirm Password"
          type="password"
          placeholder="Confirm password"
          error={(errors as any).confirm || form.formState.errors.confirm?.message}
          {...form.register('confirm')}
        />
        <p className="text-sm text-neutral-600">By continuing you agree to our Terms & Privacy.</p>
        <Button type="submit" variant="primary" className="w-full" disabled={!valid} loading={state === 'loading'}>
          Create Account
        </Button>
      </form>
    </ScreenShell>
  );
};

export const EmailVerificationScreen = () => {
  const state = useDemoState();
  const [code, setCode] = useState('');
  const ready = code.length === 6;
  return (
    <ScreenShell title="1.2 Email Verification">
      <div className="space-y-4">
        <p className="text-neutral-600">Enter the 6-digit code we sent to amaka@dwell.ng</p>
        <OTPInput value={code} onChange={setCode} />
        <div className="flex items-center justify-between text-sm text-neutral-600">
          <span>Resend in 0:45</span>
          <Button variant="ghost" size="sm">
            Change email
          </Button>
        </div>
        <Button variant="primary" className="w-full" disabled={!ready} loading={state === 'loading'}>
          Verify Email
        </Button>
      </div>
    </ScreenShell>
  );
};

export const AccountSetupSuccessScreen = () => (
  <ScreenShell title="1.3 Account Setup Success">
    <div className="text-center py-10 space-y-4">
      <div className="text-5xl">✅</div>
      <h2 className="text-2xl font-bold">Account created</h2>
      <p className="text-neutral-600">You’re all set to start exploring Dwell.</p>
      <Button variant="primary" className="w-full">
        Continue
      </Button>
    </div>
  </ScreenShell>
);

export const LoginScreen = () => {
  const state = useDemoState();
  const form = useForm({ defaultValues: { email: '', password: '' } });
  return (
    <ScreenShell title="1.4 Login">
      <form className="space-y-4">
        <Input label="Email" placeholder="you@example.com" {...form.register('email')} />
        <Input label="Password" type="password" placeholder="••••••••" {...form.register('password')} />
        <div className="flex justify-between text-sm text-neutral-600">
          <Button variant="ghost" size="sm">
            Forgot password?
          </Button>
          <span>
            New here? <span className="text-pink-500">Create account</span>
          </span>
        </div>
        <Button variant="primary" className="w-full" loading={state === 'loading'}>
          Login
        </Button>
      </form>
    </ScreenShell>
  );
};

export const ForgotPasswordScreen = () => {
  const state = useDemoState();
  const form = useForm({ defaultValues: { email: '' } });
  return (
    <ScreenShell title="1.5 Forgot Password">
      <form className="space-y-4">
        <Input label="Email" placeholder="you@example.com" {...form.register('email')} />
        <Button variant="primary" className="w-full" loading={state === 'loading'}>
          Send reset link
        </Button>
      </form>
    </ScreenShell>
  );
};

export const OTPAfterLoginScreen = () => {
  const state = useDemoState();
  const [code, setCode] = useState('');
  return (
    <ScreenShell title="1.6 OTP Verification After Login">
      <div className="space-y-4">
        <p className="text-neutral-600">Enter OTP sent to +234 806 123 4567</p>
        <OTPInput value={code} onChange={setCode} />
        <div className="flex justify-between text-sm text-neutral-600">
          <span>Resend in 0:38</span>
          <Button variant="ghost" size="sm">
            Need help?
          </Button>
        </div>
        <Button variant="primary" className="w-full" disabled={code.length < 6} loading={state === 'loading'}>
          Verify & Continue
        </Button>
      </div>
    </ScreenShell>
  );
};

export const UserTypeSelectionScreen = () => {
  const state = useDemoState();
  const options = ['Finding a Property', 'Property Investment', 'List My Property/Service'];
  const [selected, setSelected] = useState('Finding a Property');
  return (
    <ScreenShell title="1.7 User Type Selection">
      {state === 'empty' && <EmptyState title="No options" description="User types unavailable" />}
      <div className="grid gap-3">
        {options.map((opt) => (
          <Chip key={opt} active={selected === opt} onClick={() => setSelected(opt)} className="justify-start">
            {opt}
          </Chip>
        ))}
      </div>
      <div className="mt-6">
        <Button variant="primary" className="w-full" disabled={!selected}>
          Continue
        </Button>
      </div>
    </ScreenShell>
  );
};

export const B2BUserTypeSelectionScreen = () => {
  const options = ['Agent', 'Owner/Landlord', 'Developer', 'Service Provider', 'Lifestyle/Experience Partner', 'Investment Partner'];
  const [selected, setSelected] = useState('Agent');
  return (
    <ScreenShell title="1.8 B2B User Type Selection">
      <div className="grid gap-3">
        {options.map((opt) => (
          <Chip key={opt} active={selected === opt} onClick={() => setSelected(opt)} className="justify-start">
            {opt}
          </Chip>
        ))}
      </div>
      <div className="mt-6">
        <Button variant="primary" className="w-full" disabled={!selected}>
          Continue
        </Button>
      </div>
    </ScreenShell>
  );
};

const agentSchema = z.object({
  name: z.string().min(2),
  agency: z.string().min(2),
  license: z.string().min(3),
  authority: z.string().min(2),
  years: z.string().min(1),
  specialization: z.string().min(2),
  regions: z.string().min(2),
});

export const AgentOnboardingStep1 = () => {
  const state = useDemoState();
  const form = useForm<z.infer<typeof agentSchema>>({ resolver: zodResolver(agentSchema) });
  const errorMode = state === 'error';
  return (
    <ScreenShell title="1.9.1 Agent Onboarding - Step 1">
      <form className="space-y-4">
        <Input label="Full Name" error={errorMode ? 'Required' : undefined} {...form.register('name')} />
        <Input label="Agency" error={errorMode ? 'Required' : undefined} {...form.register('agency')} />
        <Input label="License Number" error={errorMode ? 'Enter license number' : undefined} {...form.register('license')} />
        <Input label="Authority" {...form.register('authority')} />
        <Input label="Years of Experience" type="number" {...form.register('years')} />
        <Input label="Specialization" helper="e.g. Luxury, Short-lets" {...form.register('specialization')} />
        <Input label="Regions" helper="Ikoyi, VI, Lekki" {...form.register('regions')} />
        <div className="flex gap-2">
          <Button variant="secondary" className="w-1/3">
            Save draft
          </Button>
          <Button variant="primary" className="flex-1" loading={state === 'loading'}>
            Continue to Step 2
          </Button>
        </div>
      </form>
    </ScreenShell>
  );
};

const investmentStep1Schema = z.object({
  entity: z.string().min(2),
  registration: z.string().min(2),
  contact: z.string().min(2),
});

export const InvestmentPartnerStep1 = () => {
  const state = useDemoState();
  const form = useForm<z.infer<typeof investmentStep1Schema>>({ resolver: zodResolver(investmentStep1Schema) });
  return (
    <ScreenShell title="1.9.17 Investment Partner Step 1">
      <form className="space-y-4">
        <Input label="Entity Name" placeholder="Dwell Capital" {...form.register('entity')} />
        <Input label="Registration Number" placeholder="RC 123456" {...form.register('registration')} />
        <Input label="Contact Person" placeholder="Lead partner" {...form.register('contact')} />
        <Button variant="primary" className="w-full" loading={state === 'loading'}>
          Continue
        </Button>
        <Button variant="secondary" className="w-full">
          Save draft
        </Button>
      </form>
    </ScreenShell>
  );
};

export const InvestmentPartnerStep2 = () => {
  const state = useDemoState();
  const focusOptions = ['Residential', 'Commercial', 'Hospitality', 'Logistics', 'Mixed-use'];
  const geoOptions = ['Lagos Mainland', 'Lagos Island', 'Abuja', 'Port Harcourt', 'Kigali'];
  const [focus, setFocus] = useState<string[]>(['Residential']);
  const [geos, setGeos] = useState<string[]>(['Lagos Island']);
  const toggle = (val: string, list: string[], setter: (v: string[]) => void) =>
    setter(list.includes(val) ? list.filter((x) => x !== val) : [...list, val]);

  return (
    <ScreenShell title="1.9.18 Investment Partner Step 2">
      {state === 'error' && <ErrorState title="Please complete preferences" description="Select at least one focus and geography." />}
      <div className="space-y-4">
        <div>
          <p className="font-semibold mb-2">Focus Areas</p>
          <div className="flex flex-wrap gap-2">
            {focusOptions.map((f) => (
              <Chip key={f} active={focus.includes(f)} onClick={() => toggle(f, focus, setFocus)}>
                {f}
              </Chip>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold mb-2">Deal Size</p>
          <div className="flex items-center gap-3">
            <input type="range" min={1} max={10} className="w-full" />
            <span className="text-sm text-neutral-700">₦1bn+</span>
          </div>
        </div>
        <div>
          <p className="font-semibold mb-2">Geographies</p>
          <div className="flex flex-wrap gap-2">
            {geoOptions.map((g) => (
              <Chip key={g} active={geos.includes(g)} onClick={() => toggle(g, geos, setGeos)}>
                {g}
              </Chip>
            ))}
          </div>
        </div>
        <Input label="Timeline" placeholder="6-18 months" />
        <TextArea label="Experience" placeholder="Describe track record" />
        <div>
          <p className="font-semibold mb-2">Risk Appetite</p>
          <input type="range" min={1} max={10} className="w-full" />
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" className="flex-1">
            Back
          </Button>
          <Button variant="primary" className="flex-1" loading={state === 'loading'}>
            Continue
          </Button>
        </div>
        <Button variant="secondary" className="w-full">
          Save draft
        </Button>
      </div>
    </ScreenShell>
  );
};

export const InvestmentPartnerStep3 = () => {
  const state = useDemoState();
  return (
    <ScreenShell title="1.9.19 Investment Partner Step 3">
      <div className="space-y-4">
        <Input label="Verification Document" placeholder="Upload CAC or utility" />
        <Input label="Bank Name" placeholder="GTBank" />
        <Input label="Account Number" placeholder="0123456789" />
        <Input label="Source of Funds" placeholder="Equity / Debt / JV" />
        <TextArea label="Compliance Notes" placeholder="Add any compliance context" />
        <div className="flex gap-2">
          <Button variant="secondary" className="flex-1">
            Back
          </Button>
          <Button variant="primary" className="flex-1" loading={state === 'loading'}>
            Complete Profile
          </Button>
        </div>
        <Button variant="secondary" className="w-full">
          Save draft
        </Button>
      </div>
    </ScreenShell>
  );
};
