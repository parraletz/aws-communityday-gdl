import { awscdk } from "projen";
const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: "2.147.3",
  constructsVersion: "10.3.0",
  defaultReleaseBranch: "main",
  eslint: false,
  name: "aws-communityday-gdl",
  prettier: false,
  projenrcTs: true,
  vscode: true,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();