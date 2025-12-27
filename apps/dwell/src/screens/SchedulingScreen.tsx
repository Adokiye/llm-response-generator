import { ScreenShell } from '../ui/Screen';
import { Button } from '../ui/Button';
import { Chip } from '../ui/Chip';
import { Input } from '../ui/Input';

export const SchedulingScreen = () => {
  const dates = ['Mon 12', 'Tue 13', 'Wed 14', 'Thu 15', 'Fri 16'];
  const slots = ['10:00', '12:30', '14:00', '16:30', '18:00'];
  return (
    <ScreenShell title="9.3 Scheduling Interface">
      <div className="space-y-4">
        <div className="rounded-card border border-neutral-200 p-4">
          <p className="font-semibold mb-2">Select date</p>
          <div className="flex gap-2 overflow-x-auto">
            {dates.map((d, idx) => (
              <Chip key={d} active={idx === 1}>
                {d}
              </Chip>
            ))}
          </div>
        </div>
        <div className="rounded-card border border-neutral-200 p-4">
          <p className="font-semibold mb-2">Available slots</p>
          <div className="flex flex-wrap gap-2">
            {slots.map((s, idx) => (
              <Chip key={s} active={idx === 2}>
                {s}
              </Chip>
            ))}
          </div>
        </div>
        <Input label="Duration" placeholder="45 mins" />
        <Input label="Location" placeholder="Physical - Ikoyi" />
        <Input label="Notes" placeholder="Share any access or parking info" />
        <Button variant="primary" className="w-full">
          Schedule Viewing
        </Button>
      </div>
    </ScreenShell>
  );
};
