import * as cdk from '@aws-cdk/core';
const open = require('open');

export class NaughtyCdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }
}
