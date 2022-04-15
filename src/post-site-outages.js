import request from './request.js';

export default async (BASE_URL, SITE_ID, apiKey, outages) => {
  const headers = { 'x-api-key': apiKey, 'Content-Type': 'application/json' };
  return request(`${BASE_URL}/site-outages/${SITE_ID}`, headers, 'POST', JSON.stringify(outages), false);
};
