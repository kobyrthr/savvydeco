const s3assets = require('@aws-cdk/aws-s3-assets');
const cdk = require('@aws-cdk/core');
const eleasticbeanstalk = require('@aws-cdk/easticbeanstalk');
const iam = require('@aws-cdk/iam');
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

    // example resource
    // const queue = new sqs.Queue(this, 'CdkSavvyQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}

module.exports = { CdkSavvyStack }
