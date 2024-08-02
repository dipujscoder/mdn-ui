const objectToString = (object) => {
  let result = [];

  Object.values(object).forEach((e) => {
    result.push(e);
  });

  return result;
};

export default objectToString;
