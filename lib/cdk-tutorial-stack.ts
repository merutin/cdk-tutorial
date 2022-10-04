import * as cdk from "aws-cdk-lib";
import { User } from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkTutorialStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const user = new User(this, "createFromCDK", {
      password: cdk.SecretValue.unsafePlainText("!23456789o"),
    });
    user.addManagedPolicy({
      managedPolicyArn: "arn:aws:iam::aws:policy/AmazonSSMFullAccess",
    });
    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'CdkTutorialQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
