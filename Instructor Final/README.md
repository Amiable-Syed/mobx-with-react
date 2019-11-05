# MobX Without Ejecting (i.e. project created using create-react-app)

Packages we'll be installing:

* react-app-rewired
* react-app-rewire-mobx
* babel-plugin-styled-components

In `config-overrides.js`:

```js
const { injectBabelPlugin } = require("react-app-rewired");
const rewireMobX = require("react-app-rewire-mobx");

module.exports = function override(config, env) {
  config = injectBabelPlugin("babel-plugin-styled-components", config);
  config = rewireMobX(config, env);

  return config;
};
```

In `package.json` modify the scripts to be:

```js
"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "test": "react-app-rewired test --env=jsdom",
  "eject": "react-app-rewired eject"
}
```
