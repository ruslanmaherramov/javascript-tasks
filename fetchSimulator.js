// Using fetchSimulator simulate fetching data from three different URLs in parallel.
// Each "fetch" will be represented by a Promise that resolves after a delay taken from the delays array.
// Use Promise.all to wait for all these Promises to resolve and then process the results.

const delays = [800, 1200, 1000];

const fetchSimulator = (url, delay) => {
  return new Promise(resolve => setTimeout(() => resolve(`Data from ${url}`), delay));
};

const data1 = fetchSimulator('url_1', delays[0]);
const data2 = fetchSimulator('url_2', delays[1]);
const data3 = fetchSimulator('url_3', delays[2]);

Promise.all([data1, data2, data3])
  .then((responses) => {
    console.log('All data fetched:', responses)
  });
