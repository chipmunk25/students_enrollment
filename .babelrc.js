module.exports = {
    presets: [["@babel/preset-env", { targets: { node: "current" } }], ["@babel/preset-react", { "runtime": "automatic" }]],
    plugins: ["@babel/plugin-transform-spread", "@babel/plugin-transform-react-jsx"]
};