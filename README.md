# Ecommerce app - myindiaa Readme

## Overview
This Ecommerce app is built using the MERN stack with MongoDB as the database. It provides users with functionalities to buy items. Below are the key features and functionalities of the app:

## Live Link - [https://6625a26151c5b61c70a04a40--golden-moonbeam-274b68.netlify.app/](https://660ed9e7987141235b1db971--thunderous-begonia-288545.netlify.app/)
## Features

### The mock server is only included in dev mode not in the live project hosting.

### Assignment points
#### Component Creation:
- Developed reusable components such as Header, Footer, Product Card, and Navigation Menu using React.js.
- Components follow best practices for performance and maintainability
#### State Management:
- Implemented state management using Redux for handling global state.
- Demonstrated how you manage local component state versus global state.
#### Responsive Design:
- Ensured the interface is fully responsive across different devices and screen sizes.
#### PWA Implementation:
- Implemented service workers to enable offline capabilities.
#### Additional Features:
- Implemented a product listing page that fetches data from a mock API.
- Included basic functionality such as adding items to a shopping cart and viewing the cart.

### Homepage
- Displays all the Menu, search bar, shop button, featured products, 2 carousels to display products, and also functionality for user to login/ register in the website, cart,userDial appears if user is logged in.
- The UserDial only appears if the user has logged in. Several other functionalities open when user logs in.
- The functionality of the cart only appears when the user has logged-in.

### Search Functionality
- Homepage includes a search bar to search products based on their name.

### Admin Privilages - User Authorisation
- Admin is given special privilages to monitor all the users, products and transactions.
- For the testing purposes I have given all the new users a default admin status.
- From admin panel admin can create new products, see reviews of products, delete and monitor users and products etc.

### Profile Page
- each user has a indivisual profile page from where user can update his/her credentials.

### Payment Integration - Stripe
- User can ad items to the cart and proceed to checkout and will be redirected to stripe payment page where user can make a payment and confirm order.

### State Management
- Utilizes Redux to maintain the state of the application, providing efficient data management and updates.

### Authentication
- Implements Login and Sign up functionality using authentication for user security.

### Mobile Responsiveness
- The website is mobile-responsive, ensuring a seamless user experience across different devices.

## Folder Structure
- The codebase follows a well-organized folder structure to maintain clarity and ease of development.
  
## Database 
- Storing / retrieving information Mongo database


## Getting Started
To get started with the Todo app, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install` for root folder as well as frontend folder. Please keep in mind the node_modules of the backend folder are in the root directory itself. So kindly run the the npm i command for backend in the root directory itself.
4. PLease note the npm i command for the backend folder must be run in the root folder only, and npm i for frontend must be run in frontend folder.
5. Also I have shared my mongodb credentials in the env file, so that you dont need to set up anything else other than installing dependencies in root and frontend folders.
6. Set up the MongoDB database.
7. Configure authentication settings.
8. Run the development server using `npm start`.
9. Access the app in your browser at the specified port.

## Technologies Used
- **Frontend**: ReactJS, Redux, HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## Credits
This Todo app was created by Animesh as a project for assignment purposes. Contributions and feedback are welcome.

## License
This project is licensed under the [License Name] License. See the LICENSE file for details.

## Contact
For any inquiries or support, please contact d.animesh.pr@gmail.com.
