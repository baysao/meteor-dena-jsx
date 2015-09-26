Package.describe({
  summary: "JSX compiler",
  version: "0.1.0-1",
  name: "baysao:dena-jsx",
  git: "https://github.com/baysao/meteor-dena-jsx.git"
});

Npm.depends({
  "jsx": "0.9.89"
});

Package.registerBuildPlugin({
  name: "compile-jsxx",
  use: [],
  sources: [
    'plugin/compile-dena-jsx.js'
  ],
  npmDependencies: {
    "jsx": "0.9.89"
  }
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.1.0.2');
  api.use('isobuild:compiler-plugin@1.0.0');
  api.export('JSX');
});

