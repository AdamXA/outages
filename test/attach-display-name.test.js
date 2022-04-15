import attachDisplayName from '../src/attach-display-name';

const mockSiteInfo = { devices: [{ id: 23, name: 'Battery 23' }, { id: 1, name: 'Battery 1' }, { id: 78, name: 'Battery 78' }] };

test('attaches device name to outage object', () => {
  const mockOutage = { id: 78, details: 'test' };
  expect(attachDisplayName(mockOutage, mockSiteInfo)).toEqual({ id: 78, name: 'Battery 78', details: 'test' });
});
