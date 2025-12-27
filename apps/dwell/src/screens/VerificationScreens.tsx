import { useState } from 'react';
import { ScreenShell } from '../ui/Screen';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { OTPInput } from '../ui/OTPInput';
import { useDemoState } from '../lib/state';

export const PhoneVerificationScreen = () => {
  const state = useDemoState();
  const [phone, setPhone] = useState('+234');
  const valid = phone.length >= 11;
  return (
    <ScreenShell title="2.1 Phone Number Verification">
      <div className="space-y-4">
        <Input label="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+234 801 234 5678" />
        <Button variant="primary" className="w-full" disabled={!valid} loading={state === 'loading'}>
          Verify Number
        </Button>
      </div>
    </ScreenShell>
  );
};

export const PhoneOTPScreen = () => {
  const state = useDemoState();
  const [otp, setOtp] = useState('');
  return (
    <ScreenShell title="2.2 OTP Verification (Phone)">
      <div className="space-y-4">
        <p className="text-neutral-600">Enter OTP sent via SMS</p>
        <OTPInput value={otp} onChange={setOtp} />
        <div className="flex justify-between text-sm text-neutral-600">
          <span>Resend in 0:52</span>
          <Button variant="ghost" size="sm">
            Try voice call
          </Button>
        </div>
        <Button variant="primary" className="w-full" disabled={otp.length < 6} loading={state === 'loading'}>
          Verify & Continue
        </Button>
      </div>
    </ScreenShell>
  );
};
