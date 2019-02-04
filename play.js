const fetchData = () => {
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      res('Done!');
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log('Timer is Done');
  fetchData().then(text => {
    console.log(text);
    return fetchData();
  }).then(text => {
    console.log(text);
  });
}, 2000);