#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { CdkTutorialStack } from "../lib/cdk-tutorial-stack";

const app = new cdk.App();
new CdkTutorialStack(app, "CdkTutorialStack", {
  env: { account: process.env.ACCOUNT_ID, region: "ap-northeast-1" },
});

