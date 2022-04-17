import getSiteOutages from '../src/get-site-outages';
import request from '../src/request';
import mockData from './mocks/mock-data';

jest.mock('../src/request');

const mockBaseUrl = 'mockbaseurl';
const mockSiteId = 'mocksiteid';
const mockFilterDate = '2022-01-01T00:00:00.000Z';
const mockApiKey = 'mock-api-key';
const { mockSiteInfo, mockOutages } = mockData;

beforeEach(() => {
  request.mockReturnValueOnce(mockSiteInfo);
  request.mockReturnValueOnce(mockOutages);
});

afterEach(jest.clearAllMocks);

test('makes the correct call to request when getting siteInfo', async () => {
  const expectedHeaders = { 'x-api-key': mockApiKey };
  await getSiteOutages(mockBaseUrl, mockSiteId, mockFilterDate, mockApiKey);
  expect(request).toHaveBeenCalledWith(`${mockBaseUrl}/site-info/${mockSiteId}`, expectedHeaders, 'GET');
});

test('makes the correct call to request when getting outages', async () => {
  const expectedHeaders = { 'x-api-key': mockApiKey };
  await getSiteOutages(mockBaseUrl, mockSiteId, mockFilterDate, mockApiKey);
  expect(request).toHaveBeenCalledWith(`${mockBaseUrl}/outages`, expectedHeaders, 'GET');
});

test('returns the correct value', async () => {
  expect(await getSiteOutages(mockBaseUrl, mockSiteId, mockFilterDate, mockApiKey))
    .toEqual([
      {
        id: '002b28fc-283c-47ec-9af2-ea287336dc1b',
        name: 'Battery 1',
        begin: '2022-05-23T12:21:27.377Z',
        end: '2022-11-13T02:16:38.905Z',
      },
      {
        id: '002b28fc-283c-47ec-9af2-ea287336dc1b',
        name: 'Battery 1',
        begin: '2022-12-04T09:59:33.628Z',
        end: '2022-12-12T22:35:13.815Z',
      },
      {
        id: '086b0d53-b311-4441-aaf3-935646f03d4d',
        name: 'Battery 2',
        begin: '2022-07-12T16:31:47.254Z',
        end: '2022-10-13T04:05:10.044Z',
      },
    ]);
});
