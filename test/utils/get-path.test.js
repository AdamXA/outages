import metaUrl from '../../src/utils/meta-url';
import getPath from '../../src/utils/get-path';

jest.mock('../../src/utils/meta-url');

test('returns the correct path', () => {
  metaUrl.mockReturnValue('file:///Users/test/outages/test/utils/get-path.test.js');
  const mockFile = 'file.txt';
  expect(getPath(mockFile)).toBe('/Users/test/outages/file.txt');
});
