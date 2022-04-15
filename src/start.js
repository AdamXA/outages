import getApiKey from './get-api-key.js';
import getSiteOutages from './get-site-outages.js';
import postSiteOutages from './post-site-outages.js';

const BASE_URL = 'https://api.krakenflex.systems/interview-tests-mock-api/v1';
const SITE_ID = 'norwich-pear-tree';
const FILTER_DATE = '2022-01-01T00:00:00.000Z';
const apiKey = () => getApiKey();

export default async () => {
  const outages = await getSiteOutages(BASE_URL, SITE_ID, FILTER_DATE, apiKey());
  const response = await postSiteOutages(BASE_URL, SITE_ID, apiKey(), outages);
  console.log(`Program ran successfully. Server response code: ${response.status}`);
};
