const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient({
  apiVersion: '2012-10-08',
  // If region is not specified, the region will be configured to the region of the requestor
  // Which may be a different region to where the DynamoDB is reside
  region: 'us-east-1',
});

exports.handler = async (event, context, callback) => {

  // Get request and request headers
  const request = event.Records[0].cf.request;
  const headers = request.headers;

  // Configure authentication
  let result = await dynamoDb.get({
    TableName: 'REPLACE_ME_DYNAMODB_TABLE',
    Key: {
      path: 'report' + request.uri
    }
  }).promise();
  let { username: authUser, password: authPass } = result['Item'] || {};

  // Construct the Basic Auth string
  const authString = 'Basic ' + new Buffer(authUser + ':' + authPass).toString('base64');

  // Require Basic authentication
  if (typeof headers.authorization == 'undefined' || headers.authorization[0].value != authString) {
    const body = 'Unauthorized';
    const response = {
      status: '401',
      statusDescription: 'Unauthorized',
      body: body,
      headers: {
        'www-authenticate': [{ key: 'WWW-Authenticate', value: 'Basic' }]
      },
    };
    callback(null, response);
  }

  // Continue request processing if authentication passed
  callback(null, request);
};
