export function createRefWithDefualtValue<T>(initialValue: T): { current: T };
export function createRefWithDefualtValue<T>(): { current: T | null };
export function createRefWithDefualtValue<T>(initialValue?: T): {
  current: T | null;
} {
  return { current: initialValue ?? null };
}
