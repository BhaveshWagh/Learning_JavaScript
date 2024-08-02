let counter = 0;
const getData = () => {
  console.log("retreiving data ", counter++);
};
const handleDebouncing = (callback, delay) => {
  let timerId;
  return function () {
    let context = this; // imp to write args no matter your passing or not. if they exist
    args = arguments;
    clearTimeout(timerId); // clearing the interval : it set to zero again
    timerId = setTimeout(() => {
      callback.apply(this, args); // function call using .apply
    }, delay);
  };
};

const bounce = handleDebouncing(getData, 1000);