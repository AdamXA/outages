import start from '../src/start';
import getSiteOutages from '../src/get-site-outages';
import postSiteOutages from '../src/post-site-outages';
import getApiKey from '../src/get-api-key';

jest.mock('../src/get-site-outages');
jest.mock('../src/post-site-outages');
jest.mock('../src/get-api-key');

jest.spyOn(console, 'log').mockImplementation(() => {});

const mockApiKey = 'mock-api-key';
const mockOutages = 'mock outages';
const mockResponse = { status: 200 };
getApiKey.mockReturnValue(mockApiKey);
getSiteOutages.mockReturnValue(Promise.resolve(mockOutages));
postSiteOutages.mockReturnValue(Promise.resolve(mockResponse));

afterEach(jest.clearAllMocks);

test('calls get site outages properly', async () => {
  await start();
  expect(getSiteOutages)
    .toHaveBeenCalledWith('https://api.krakenflex.systems/interview-tests-mock-api/v1', 'norwich-pear-tree', '2022-01-01T00:00:00.000Z', mockApiKey);
  expect(getSiteOutages).toHaveBeenCalledTimes(1);
});

test('calls post site outages properly', async () => {
  await start();
  expect(postSiteOutages)
    .toHaveBeenCalledWith('https://api.krakenflex.systems/interview-tests-mock-api/v1', 'norwich-pear-tree', 'mock-api-key', 'mock outages');
  expect(postSiteOutages).toHaveBeenCalledTimes(1);
});

test('logs server response code to console', async () => {
  await start();
  expect(console.log).toHaveBeenCalledWith('Program ran successfully. Server response code: 200');
});
