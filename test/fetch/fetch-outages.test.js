import fetchOutages from '../../src/fetch/fetch-outages';

let mockResponse;
global.fetch = jest.fn(() => Promise.resolve(mockResponse));
const mockBaseUrl = 'http://mock.url';
const mockApiKey = 'mock-api-key';

beforeEach(() => {
  mockResponse = { json: () => ({ mock: 'data' }), ok: true, statusText: 'mock error' };
});

test('calls fetch correctly', () => {
  fetchOutages(mockBaseUrl, mockApiKey);
  expect(global.fetch)
    .toHaveBeenCalledWith(
      'http://mock.url/outages',
      { headers: { 'x-api-key': 'mock-api-key' }, method: 'GET' },
    );
});

test('returns the correct value when response is ok', async () => {
  expect(await fetchOutages(mockBaseUrl, mockApiKey)).toEqual({ mock: 'data' });
});

test('throws an error when response is not ok', async () => {
  mockResponse.ok = false;
  await expect(fetchOutages.bind(mockBaseUrl, mockApiKey))
    .rejects.toThrow('mock error');
});
