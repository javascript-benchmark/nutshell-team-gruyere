//This module allows for fetch and post calls to the user database
//built by Kelli Evans

const APIManager={
    getSingleUser: (userKey , userValue)=>{

        return fetch(`http://localhost:8088/users?${userKey}=${userValue}`)
        .then(nutshell => nutshell.json())
    },

    getAllUsers: ()=>{
        return fetch("http://localhost:8088/users")
                .then(nutshell => nutshell.json())
    },

    addUser:(userObject)=>{

        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObject)
        })
    }

    }

    export default APIManager;