module.exports = (plop) => {
  plop.setGenerator("module", {
    description: "Create a module.",
    prompts: [
      {
        type: "input",
        name: "moduleName",
        message: "Module Name",
        default: "my-module",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/{{ kebabCase moduleName }}.ts",
        templateFile: "internals/plop-templates/module/module.ts.hbs",
      },
      {
        type: "add",
        path: "src/{{ kebabCase moduleName }}.test.ts",
        templateFile: "internals/plop-templates/module/module.test.ts.hbs",
      },
    ],
  });
};
