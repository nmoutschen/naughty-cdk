#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { NaughtyCdkStack } from '../lib/naughty-cdk-stack';

const app = new cdk.App();
new NaughtyCdkStack(app, 'NaughtyCdkStack');
