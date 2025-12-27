import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ScreenShell } from '../ui/Screen';
import { Input, TextArea } from '../ui/Input';
import { Button } from '../ui/Button';
import { useDemoState } from '../lib/state';

const profileSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  dob: z.string(),
  gender: z.string(),
  state: z.string(),
  address: z.string(),
});

export const BasicProfileScreen = () => {
  const state = useDemoState();
  const form = useForm<z.infer<typeof profileSchema>>({ resolver: zodResolver(profileSchema) });
  return (
    <ScreenShell title="3.1 Basic Profile Information">
      <form className="space-y-4">
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=60"
            alt="avatar"
            className="h-14 w-14 rounded-full object-cover"
          />
          <Button variant="secondary" size="sm">
            Upload Photo
          </Button>
        </div>
        <Input label="First Name" placeholder="Amaka" {...form.register('firstName')} />
        <Input label="Last Name" placeholder="Johnson" {...form.register('lastName')} />
        <Input label="Date of Birth" type="date" {...form.register('dob')} />
        <Input label="Gender" placeholder="Female" {...form.register('gender')} />
        <Input label="State" placeholder="Lagos" {...form.register('state')} />
        <TextArea label="Address" placeholder="House 4, Ikoyi" {...(form.register('address') as any)} />
        <Button variant="primary" className="w-full" loading={state === 'loading'}>
          Continue
        </Button>
      </form>
    </ScreenShell>
  );
};
