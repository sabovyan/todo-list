const request = async (url, method = 'GET', body = null) => {
  const requestConfig = {
    method,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  };

  if (body) {
    requestConfig.body = JSON.stringify(body);
  }

  const r = await fetch(url, requestConfig);
  const json = await r.json();

  return json;
};

export const doGet = (url) => request(url, 'GET');

export const doPost = (url, body) => request(url, 'POST', body);

export const doPut = (url, body) => request(url, 'PUT', body);

export const doDelete = (url) => request(url, 'DELETE');
