// //This module handles the login and registration of the app
// // Built by Kelli Evans

import formPrinter from "./printToDom.js";
import buildUserObject from "./objectBuilder.js";
import APIManager from "./APIManager.js";
import dashboardActivator from "./dashboardActivator.js";
import dashboardDeactivator from "./dashboardDeactivator.js";

const loginManager = {
  loggingIN: () => {
    document.querySelector("#login-button").addEventListener("click", () => {
      // Get the username and password values from the form
      const emailValue = document.querySelector("#login-email-input").value;
      const passwordValue = document.querySelector("#login-password-input")
        .value;

      // Use the email to go to the database and get that user's information
      APIManager.getSingleUser("email" , emailValue).then((user) => {
        if (user.length === 1) {
          // User is going to be an array no matter what, so we'll have to delve into the array to get the user's data

          // Compare the user's password from the database to the information they entered
          if (user[0].password === passwordValue) {
            // If the passwords match, store the id in local storage
            localStorage.setItem("userId", user[0].id);

            // When the user is logged in, print the dashboard with events, articles and tasks
            formPrinter.removeLoginForm();
            dashboardActivator();
          } else {
            // Error handling would go here
            window.alert("Incorrect password!");
          }
        } else {
          window.alert("That email does not exist!");
        }
      });
    });
  },

  register: () => {
    // formPrinter.printRegisterForm()
    document.querySelector("#register-button").addEventListener("click", () => {
      //if user clicks the submit button, registration will be posted to database
      // if (event.target.id === "register-button") {

      //first check if username is already in the database.
      const username = document.querySelector("#register-username-input").value;
      const email = document.querySelector("#register-email-input").value;
      const password = document.querySelector("#register-password-input").value;

        //check to see is the email address already exists in the database
      APIManager.getSingleUser("email", email)
        .then((user) => {

          if (user.length === 0) {


            APIManager.getSingleUser("username", username)
            .then((user) => {
              //check to see if the username already exists in the database
              if (user.length === 0) {

                const userObject = buildUserObject(username, password, email);

                APIManager.addUser(userObject).then(() => {
                  APIManager.getSingleUser("email", email).then(user => {
                    localStorage.setItem("activeUser", user[0]);
                    console.log("this is userObject", userObject);
                    formPrinter.removeRegisterForm();
                    dashboardActivator();

                  });
                });
              } else {

                window.alert("That username already exists!");
              }
            });
          } else {

            window.alert("That email already exists!");
          }
        });
    });
  },
};

export default loginManager;