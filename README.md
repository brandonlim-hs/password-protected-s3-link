# Password protected S3 link

Password protect link to S3 resources using CloudFront distribution.

## Quick Start

### Create CloudFormation stack

1. Update `parameters.json` as required
2. Create CloudFormation stack

   `aws cloudformation create-stack --stack-name {stack-name} --template-body file://template.yaml --parameters file://parameters.json`

### Update CloudFormation stack

1. Update `parameters.json` as required
2. Update CloudFormation stack

   `aws cloudformation update-stack --stack-name {stack-name} --template-body file://template.yaml --parameters file://parameters.json`
