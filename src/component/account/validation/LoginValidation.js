function validation(values){
    let error = {}

    if(values.username_or_email === "")
        error.username_or_email = 'Username or Email should not be empty'
    else
        error.username_or_email = "";

    if(values.password === "")
        error.password = 'password should not be empty'
    else
        error.password = "";

    return error;
}

export default validation;