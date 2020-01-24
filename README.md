# AWS Final Lab

## Authentication
- Uses Cognito Identity Service for user registration and authentication.
- When a user is authenticated, they can view an "Products" page, this can be any form of product that can be stored in a database.
- If the user is not authenticated, this page and its relevant links should not be accessible.

## Data Storage and Retrieval
- All Items pulled from a Lambda Function from an AWS datastore of your choosing.
- Images are stored in an AWS S3 bucket and only the URL saved to the database.
![]https://github.com/liangjinhongwin/cognito_starter/blob/master/public/dynamodb.png

## Page Flow
- Registration with email confirmation
- Login and Logout
- Item List
- Item Detail