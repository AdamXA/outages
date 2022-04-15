import isNewOutage from '../src/is-new-outage';

test('returns true when outage begins after the Date provided', () => {
  const mockOutage = { begin: '2023-12-31T23:59:59.999Z' };
  expect(isNewOutage(mockOutage, '2022-01-01T00:00:00.000Z')).toBe(true);
});

test('returns true when outage begins on the same Date provided', () => {
  const mockOutage = { begin: '2022-01-01T00:00:00.000Z' };
  expect(isNewOutage(mockOutage, '2022-01-01T00:00:00.000Z')).toBe(true);
});

test('returns false when outage begins before the Date provided', () => {
  const mockOutage = { begin: '2021-12-31T23:59:59.999Z' };
  expect(isNewOutage(mockOutage, '2022-01-01T00:00:00.000Z')).toBe(false);
});
