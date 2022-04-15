const errorCheck = (response) => {
  if (response.ok) {
    return response;
  }
  throw new Error(response.statusText);
};

export default async (baseUrl, apiKey) => fetch(
  `${baseUrl}/outages`,
  { method: 'GET', headers: { 'x-api-key': apiKey } },
).then((response) => errorCheck(response))
  .then((response) => response.json())
  .catch((e) => {
    console.error(e);
    return Promise.resolve([]);
  });
