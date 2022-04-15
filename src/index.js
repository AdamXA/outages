import fetchOutages from './fetch/fetch-outages.js';
import getApiKey from './get-api-key.js';

const start = async () => {
  const BASE_URL = 'https://api.krakenflex.systems/interview-tests-mock-api/v1';
  const apiKey = getApiKey();

  console.log(await fetchOutages(BASE_URL, apiKey));
};

start();
