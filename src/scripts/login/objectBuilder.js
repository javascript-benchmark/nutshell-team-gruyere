// Module to build an object using inputs from the registration field
//Built by Kelli Evans

const buildUserObject = (username, password, email) => {

    const userObject = {
        "username": username,
        "password": password,
        "email": email
    }
    return userObject;
}

export default buildUserObject;