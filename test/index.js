const babel = require("@babel/core");
const plugin = require("../src");

let example = `
    if (a === b) {
    }
`;

const { code } = babel.transform(example, { plugins: [plugin] });

console.log(code);
