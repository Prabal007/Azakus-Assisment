 User Management App
A React-based application for managing users, allowing you to add, edit, and delete user details efficiently. The app also includes client-side validation for a seamless user experience.

Features
Add new users with details:
First Name
Last Name
Email
Department
Edit existing user information.
Delete users from the list.
Client-side form validation to ensure proper inputs.
Clean and responsive user interface.
Prerequisites
Before setting up the project, ensure you have the following installed:

Node.js (v14 or higher)
npm (Node Package Manager) or yarn
Setup Instructions
1. Clone the Repository
Clone the project from your GitHub repository to your local machine:

bash
Copy code
git clone  https://github.com/Prabal007/Azakus-Assisment.git
2. Navigate to the Project Directory
bash
Copy code
cd user-management-app
3. Install Dependencies
Install all required packages using npm or yarn:

bash
Copy code
npm install
Or if you’re using yarn:

bash
Copy code
yarn install
Running the Application
1. Start the Development Server
Run the following command to start the development server:

bash
Copy code
npm start
Or with yarn:

bash
Copy code
yarn start
This will open the application in your default browser at http://localhost:3000.

2. Build for Production
To create an optimized production build, use:

bash
Copy code
npm run build
Or with yarn:

bash
Copy code
yarn build
This will create a build directory with the production-ready app.

Usage Instructions
Adding a User
Click the "Add User" button.
Fill out all fields in the form:
First Name
Last Name
Email
Department
Click Save to add the user.
Editing a User
Click the "Edit" button on a user card.
Modify the user details in the form.
Click Save to update the user's information.
Deleting a User
Click the "Delete" button on a user card.
Confirm the deletion if prompted.


user-management-app/
├── src/
│   ├── components/
│   │   ├── UserForm           # Form for adding/editing user details
│   │   ├── UserList           # Displays the list of users
│   │   ├── UserCard           # Individual user card component
│   ├── App.js                 # Main application component
│   ├── index.js               # Entry point for React
├── public/
│   ├── index.html             # Main HTML file
├── package.json               # Project metadata and dependencies
├── README.md                  # Project documentation


Validation Rules
The app enforces client-side validation for all form fields:

First Name: Required, minimum 2 characters.
Last Name: Required, minimum 2 characters.
Email: Required, must follow a valid email format.
Department: Required, minimum 3 characters.


