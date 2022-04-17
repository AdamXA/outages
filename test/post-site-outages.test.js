import postSiteOutages from '../src/post-site-outages';
import request from '../src/request';

jest.mock('../src/request');

const mockBaseUrl = 'mockbaseurl';
const mockSiteId = 'mocksiteid';
const mockApiKey = 'mock-api-key';
const mockOutages = 'mockoutages';

test('makes the correct call to request when posting outages', async () => {
  const expectedHeaders = { 'Content-Type': 'application/json', 'x-api-key': mockApiKey };
  await postSiteOutages(mockBaseUrl, mockSiteId, mockApiKey, mockOutages);
  expect(request)
    .toHaveBeenCalledWith(`${mockBaseUrl}/site-outages/${mockSiteId}`, expectedHeaders, 'POST', JSON.stringify(mockOutages), false);
});

test('return value is correct', async () => {
  const mockRequestResponse = 'mock request response';
  request.mockReturnValue(mockRequestResponse);
  expect(await postSiteOutages(mockBaseUrl, mockSiteId, mockApiKey, mockOutages))
    .toBe(mockRequestResponse);
});
