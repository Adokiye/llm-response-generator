import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

export type DemoState = 'success' | 'loading' | 'empty' | 'error';

export const useDemoState = (): DemoState => {
  const [params] = useSearchParams();
  const state = params.get('state') as DemoState | null;
  return state ?? 'success';
};

export const useStatefulData = <T>(data: T) => {
  const [params] = useSearchParams();
  const state = params.get('state') as DemoState | null;
  return useMemo(() => {
    if (state === 'loading') return { status: 'loading' as const, data: null };
    if (state === 'error') return { status: 'error' as const, data: null };
    if (state === 'empty') return { status: 'success' as const, data: ([] as unknown as T) };
    return { status: 'success' as const, data };
  }, [state, data]);
};
