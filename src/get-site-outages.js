import request from './request.js';
import isNewOutage from './is-new-outage.js';
import isInSiteInfo from './is-in-site-info.js';
import attachDisplayName from './attach-display-name.js';

export default async (BASE_URL, SITE_ID, FILTER_DATE, apiKey) => {
  const headers = { 'x-api-key': apiKey };
  const siteInfo = await request(`${BASE_URL}/site-info/${SITE_ID}`, headers, 'GET');
  return (await request(`${BASE_URL}/outages`, headers, 'GET'))
    .filter((outage) => isNewOutage(outage, FILTER_DATE))
    .filter((outage) => isInSiteInfo(outage, siteInfo))
    .map((outage) => attachDisplayName(outage, siteInfo));
};
