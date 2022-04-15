const errorCheck = (response) => {
  if (response.ok) {
    return response;
  }
  throw new Error(response.statusText);
};

export default async (resource, apiKey) => fetch(
  resource,
  { method: 'GET', headers: { 'x-api-key': apiKey } },
).then((response) => errorCheck(response))
  .then((response) => response.json());
