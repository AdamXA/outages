import fs from 'fs';
import getPath from './utils/get-path.js';

const getApiKeyPath = () => getPath('api-key.txt');

export default () => {
  try {
    return fs.readFileSync(getApiKeyPath(), 'utf8');
  } catch (err) {
    console.error(`Error loading API Key file \n ${err}`);
    throw err;
  }
};
