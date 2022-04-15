import getRequest from './get-request.js';
import getApiKey from './get-api-key.js';
import isNewOutage from './is-new-outage.js';

const start = async () => {
  const BASE_URL = 'https://api.krakenflex.systems/interview-tests-mock-api/v1';
  const SITE_ID = 'norwich-pear-tree';
  const FILTER_DATE = '2022-01-01T00:00:00.000Z';
  const apiKey = getApiKey();

  const siteInfo = await getRequest(`${BASE_URL}/site-info/${SITE_ID}`, apiKey);
  const outages = (await getRequest(`${BASE_URL}/outages`, apiKey))
    .filter((outage) => isNewOutage(outage, FILTER_DATE));

  console.log(outages);
};

start();
