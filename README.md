# Client

The library management client is written in React

## Technologies Used In The Application

1. React
2. HTML
3. CSS
4. axios

## Install Dependencies

1. Install node.js and npm. The node version used for this project is v12.8.1
2. Install node modules dependency given in package.json.
```
cd client
npm install
```


## Setting Up
Assuming the server is running on localhost at PORT 7777, the base url is configured.\
If you have stated the server elsewhere update **BASE_URL** in urls.js


## Starting Client
1. make sure the server has been started
2. start node server in client directory by running command
```
cd client
npm start
```
This will start react app and on localhost:3000\
Open localhost:3000 in browser to navigate further

## Testing
The test is written using **react-testing-library** and **jest**.\
To run test, run command
```
cd client
npm test
```
Prominently two types of testing is done here
1. Snapshot Testing
2. DOM Testing


## Project Structure
- **pages**\
Pages are stateful components and are responsible for triggering API calls and updating states.

- **api-manager**\
responsible for making API calls and returning response in a given format so that it can be consumed easily. 
api-service prepares request and request-handler makes the request and returns response

- **styles**\
has stylesheet files

- **test**\
Each component and pages folder has it's own test which in turn has it's own snapshot


## Assumptions
- Login System is not implement for the project, hence a TEST_USER_ID is used to make the API calls
- Needs internet connectivity to load book images from url
