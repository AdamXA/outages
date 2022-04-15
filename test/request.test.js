import getRequest from '../src/request';

let mockResponse;
global.fetch = jest.fn(() => Promise.resolve(mockResponse));
const mockResource = 'http://mock.url';
const mockHeaders = { 'x-api-key': 'mock api key' };
const mockMethod = 'MOCK';

beforeEach(() => {
  mockResponse = { json: () => ({ mock: 'data' }), ok: true, statusText: 'mock error' };
});

test('calls fetch correctly', () => {
  getRequest(mockResource, mockHeaders, mockMethod);
  expect(global.fetch)
    .toHaveBeenCalledWith(
      mockResource,
      { headers: mockHeaders, method: mockMethod },
    );
});

test('returns the correct json value when response is ok', async () => {
  expect(await getRequest()).toEqual({ mock: 'data' });
});

test('returns the response when toJson is false and response is ok', async () => {
  expect(await getRequest(mockResource, mockHeaders, mockMethod, {}, false)).toEqual(mockResponse);
});

test('throws an error when response is not ok', async () => {
  mockResponse.ok = false;
  await expect(getRequest).rejects.toThrow('mock error');
});
