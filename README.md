# Password protected S3 link

Password protect link to S3 resources using CloudFront distribution.

## Quick Start

### Create CloudFormation stack

1. Update `parameters.json` as required
2. Package referenced local artifacts to S3

   `aws cloudformation package --template-file template.yaml --s3-bucket {bucket-name} --output-template-file packaged-template.yaml`

3. Create CloudFormation stack

   `aws cloudformation create-stack --stack-name {stack-name} --template-body file://packaged-template.yaml --parameters file://parameters.json --capabilities CAPABILITY_NAMED_IAM`

### Update CloudFormation stack

1. Update `parameters.json` as required
2. Package referenced local artifacts to S3

   `aws cloudformation package --template-file template.yaml --s3-bucket {bucket-name} --output-template-file packaged-template.yaml`

3. Update CloudFormation stack

   `aws cloudformation update-stack --stack-name {stack-name} --template-body file://packaged-template.yaml --parameters file://parameters.json --capabilities CAPABILITY_NAMED_IAM`
