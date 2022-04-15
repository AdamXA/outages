const errorCheck = (response) => {
  if (response.ok) {
    return response;
  }
  throw new Error(response.statusText);
};

export default async (resource, headers, method, body, toJson = true) => fetch(
  resource,
  { headers, method, body },
)
  .then((response) => errorCheck(response))
  .then((response) => (toJson ? response.json() : response));
