const s3assets = require('@aws-cdk/aws-s3-assets');
const iam = require('@aws-cdk/aws-iam');
const cdk = require('@aws-cdk/core');
const elasticbeanstalk = require('@aws-cdk/aws-elasticbeanstalk');

// const sqs = require('@aws-cdk/aws-sqs');

class CdkSavvyStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    

    /**
     *    The code that defines your stack goes here
     * 
     * 
     * This code uses the S3 Assets module and 
     * takes the zip file of the web app located in 
     * the root of the CDK app, and uploads it to S3. 
     * Whenever you update the zip file and you deploy 
     * this stack, the file will get updated in S3.
     */


const webAppZipArchive = new s3assets.Asset(this, 'WebAppZip', {
  path: `${__dirname}/../app.zip`
});


// Create a ElasticBeanStalk app.
const appName = 'SavvyApp';
const app = new elasticbeanstalk.CfnApplication(this, 'Application', {
    applicationName: appName,
});


// Create role and instance profile
const myRole = new iam.Role(this, `${appName}-aws-elasticbeanstalk-ec2-role`, {
  assumedBy: new iam.ServicePrincipal('ec2.amazonaws.com'),
});

const managedPolicy = iam.ManagedPolicy.fromAwsManagedPolicyName('AWSElasticBeanstalkWebTier')
myRole.addManagedPolicy(managedPolicy);

const myProfileName = `${appName}-InstanceProfile`

const instanceProfile = new iam.CfnInstanceProfile(this, myProfileName, {
  instanceProfileName: myProfileName,
  roles: [
      myRole.roleName
  ]
});


// Example of some options which can be configured
const optionSettingProperties = [
  {
      namespace: 'aws:autoscaling:launchconfiguration',
      optionName: 'IamInstanceProfile',
      value: myProfileName,
  },
  {
      namespace: 'aws:autoscaling:asg',
      optionName: 'MinSize',
      value: '1',
  },
  {
      namespace: 'aws:autoscaling:asg',
      optionName: 'MaxSize',
      value: '1',
  },
  {
      namespace: 'aws:ec2:instances',
      optionName: 'InstanceTypes',
      value: 't2.micro',
  },
];


const appVersionProps = new elasticbeanstalk.CfnApplicationVersion(this, 'AppVersion', {
  applicationName: appName,
  sourceBundle: {
      s3Bucket: webAppZipArchive.s3BucketName,
      s3Key: webAppZipArchive.s3ObjectKey,
  },
});


// check app exists before creating app version
appVersionProps.addDependsOn(app);

// Create an Elastic Beanstalk environment to run the application
const elbEnv = new elasticbeanstalk.CfnEnvironment(this, 'Environment', {
  environmentName: 'SavvyApp',
  applicationName: app.applicationName || appName,
  solutionStackName: '64bit Amazon Linux 2 v5.6.4 running Node.js 14',
  optionSettings: optionSettingProperties,
  versionLabel: appVersionProps.ref,
});


  }
}

module.exports = { CdkSavvyStack }
