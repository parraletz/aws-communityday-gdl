import * as blueprints from '@aws-quickstart/eks-blueprints'
import { App, Stack, StackProps } from 'aws-cdk-lib'
import { Construct } from 'constructs'

export class AWSCommunityDayGDLStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props)
  }
}

const env = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
}

const version = 'auto'

blueprints.HelmAddOn.validateHelmVersions = true

const addOns: Array<blueprints.ClusterAddOn> = [
  new blueprints.addons.MetricsServerAddOn(),
  new blueprints.addons.KarpenterAddOn(),
  new blueprints.addons.VpcCniAddOn(),
  new blueprints.addons.CoreDnsAddOn(),
  new blueprints.addons.KubeProxyAddOn(),
]

const app = new App()

blueprints.EksBlueprint.builder()
  .account(env.account)
  .region(env.region)
  .version(version)
  .addOns(...addOns)
  .useDefaultSecretEncryption(true)
  .build(app, 'aws-communityday-gdl')

app.synth()
