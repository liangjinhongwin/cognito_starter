# AWS Final Lab

## Authentication
- Uses Cognito Identity Service for user registration and authentication.
- When a user is authenticated, they can view an "Products" page, this can be any form of product that can be stored in a database.
- If the user is not authenticated, this page and its relevant links should not be accessible.
  - Before logging in:
    ![](https://github.com/liangjinhongwin/cognito_starter/blob/master/public/home.PNG)

  - After logging in, it will redirect to "Products" page:
    ![](https://github.com/liangjinhongwin/cognito_starter/blob/master/public/products.PNG)

  - Click on "Product ID" to see product details
 

## Data Storage and Retrieval
- All Items pulled from a Lambda Function from an AWS datastore of your choosing.
- Images are stored in an AWS S3 bucket and only the URL saved to the database.  
  ![](https://github.com/liangjinhongwin/cognito_starter/blob/master/public/dynamodb.PNG)

## API Gateway
   - Requests are sending from React to API Gateway of AWS services.  
     ![](https://github.com/liangjinhongwin/cognito_starter/blob/master/public/api.PNG)

## Lambda Function
   - Requests are executed in the Lambda functions that defined in AWS services, then send back responses through API Gateway back to React to show results.
     - Sample code in React:  
       ```
        fetch(API_INVOKE_URL + '/products')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    products: JSON.parse(data.body),
                });
            });
       ```
       
     - Sample code in Lambda:  
       ```
        const AWS = require("aws-sdk");
        const docClient = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });

        exports.handler = async event => {
            const params = {
                TableName: "Products"
            };
            
            try {
                const data = await docClient.scan(params).promise();
                const response = {
                    statusCode: 200,
                    body: JSON.stringify(data.Items)
                };
                return response;
            }
            catch (e) {
                return {
                    statusCode: 500
                };
            }
        };

       ```

## Page Flow
- Registration with email confirmation
- Login and Logout
- Products List
- Product Details