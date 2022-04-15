import getRequest from '../src/get-request';

let mockResponse;
global.fetch = jest.fn(() => Promise.resolve(mockResponse));
const mockResource = 'http://mock.url';
const mockApiKey = 'mock-api-key';

beforeEach(() => {
  mockResponse = { json: () => ({ mock: 'data' }), ok: true, statusText: 'mock error' };
});

test('calls fetch correctly', () => {
  getRequest(mockResource, mockApiKey);
  expect(global.fetch)
    .toHaveBeenCalledWith(
      mockResource,
      { headers: { 'x-api-key': 'mock-api-key' }, method: 'GET' },
    );
});

test('returns the correct value when response is ok', async () => {
  expect(await getRequest(mockResource, mockApiKey)).toEqual({ mock: 'data' });
});

test('throws an error when response is not ok', async () => {
  mockResponse.ok = false;
  await expect(getRequest.bind(mockResource, mockApiKey))
    .rejects.toThrow('mock error');
});
