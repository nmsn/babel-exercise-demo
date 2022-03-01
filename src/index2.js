module.exports = (babel) => {
  return {
    visitor: {
      Identifier(path, state) {
        const node = path.node;

        if (node.name === "a") {
          node.name = "b";
        }
      },
    },
  };
};
