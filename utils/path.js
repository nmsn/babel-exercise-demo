module.exports = (babel) => {
  return {
    visitor: {
      Identifier(path, state) {
        console.log(path);
      },
    },
  };
};
