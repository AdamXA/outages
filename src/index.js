import getRequest from './get-request.js';
import getApiKey from './get-api-key.js';

const start = async () => {
  const BASE_URL = 'https://api.krakenflex.systems/interview-tests-mock-api/v1';
  const SITE_ID = 'norwich-pear-tree';
  const apiKey = getApiKey();

  console.log(await getRequest(`${BASE_URL}/outages`, apiKey));
  console.log(await getRequest(`${BASE_URL}/site-info/${SITE_ID}`, apiKey));
};

start();
