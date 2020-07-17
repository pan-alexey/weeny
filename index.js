const result = require("@babel/core").transform(`
[1, 2, 3].map((n) => n + 1);
function WarningButton() {
  return <CustomButton color="red" />;
}
`,
{
  "plugins": [
    ["@babel/plugin-transform-react-jsx", { "pragma": "_r" }]
  ],
  "comments": false
}

);

console.log(result.code);