import isInSiteInfo from '../src/is-in-site-info';

const mockSiteInfo = { devices: [{ id: 23 }, { id: 1 }, { id: 78 }] };

test('returns true when outage.id matches a device id', () => {
  const mockOutage = { id: 1 };
  expect(isInSiteInfo(mockOutage, mockSiteInfo)).toBe(true);
});

test('returns false when outage.id does not match a device id', () => {
  const mockOutage = { id: 7 };
  expect(isInSiteInfo(mockOutage, mockSiteInfo)).toBe(false);
});

test('returns false when outage.id is undefined', () => {
  const mockOutage = {};
  expect(isInSiteInfo(mockOutage, mockSiteInfo)).toBe(false);
});
