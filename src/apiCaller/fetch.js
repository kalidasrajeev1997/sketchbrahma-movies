const apiCaller = (url = "") =>
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((parsedResponse) => {
      return Promise.resolve(parsedResponse);
    })
    .catch((error) => {
      return Promise.reject(error);
    });

export default apiCaller;
