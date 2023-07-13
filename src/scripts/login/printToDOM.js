// Module to print and remove the login, registration and log out forms to the DOM
// Built by Kelli Evans

import formBuilder from "./formBuilder.js"

const formPrinter = {

    printLoginForm: () => {
        document.querySelector("#login-section").innerHTML += formBuilder.makeLoginForm()
    },

    removeLoginForm: () => {
        document.querySelector("#login-section").innerHTML = ""
    },

    printRegisterForm: () => {
        document.querySelector("#login-section").innerHTML += formBuilder.makeRegisterForm()
    },

    removeRegisterForm: () => {
        document.querySelector("#login-section").innerHTML = ""
    },

    printLogoutForm:()=>{
        document.querySelector("#logout-section").innerHTML += formBuilder.makeLogoutForm()
    },

    removeLogoutForm:()=>{
        document.querySelector("#logout-section").innerHTML = ""
    }
}

export default formPrinter