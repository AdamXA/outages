import getPath from '../../src/utils/get-path';

test('returns the correct path', () => {
  const mockMetaUrl = 'file:///Users/test/outages/test/utils/get-path.test.js';
  const mockFile = 'file.txt';
  expect(getPath(mockMetaUrl, mockFile)).toBe('/Users/test/outages/file.txt');
});
