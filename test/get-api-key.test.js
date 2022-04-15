import fs from 'fs';
import getPath from '../src/utils/get-path';
import getApiKey from '../src/get-api-key';

jest.mock('fs');
jest.mock('../src/utils/get-path');

test('attempts to load api key using the correct path', () => {
  const mockPath = 'mockpath';
  getPath.mockReturnValue(mockPath);
  getApiKey();
  expect(getPath).toHaveBeenCalledWith('api-key.txt');
  expect(fs.readFileSync).toHaveBeenCalledWith(mockPath, 'utf8');
});

test('returns the api key', () => {
  const mockApiKey = 'mock api key';
  fs.readFileSync.mockReturnValue(mockApiKey);
  expect(getApiKey()).toBe(mockApiKey);
});

test('throws caught error and logs it to the console when error caught loading api key', () => {
  const mockErrorMessage = 'mock error';
  jest.spyOn(console, 'error');
  fs.readFileSync.mockImplementation(() => { throw Error(mockErrorMessage); });
  expect(getApiKey).toThrow();
  expect(console.error).toHaveBeenCalledWith(`Error loading API Key file \n Error: ${mockErrorMessage}`);
});
