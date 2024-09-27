import { awscdk } from 'projen'
const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: '2.147.3',
  constructsVersion: '10.3.0',
  defaultReleaseBranch: 'main',
  eslint: false,
  name: 'aws-communityday-gdl',
  prettier: false,
  projenrcTs: true,
  vscode: true,
  deps: ['@aws-quickstart/eks-blueprints'],
})
project.synth()
