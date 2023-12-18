function validation(values){
    let error = {}

    const username_pattern = /^[a-zA-Z0-9_]+$/;
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if(values.email === "")
        error.email = 'Email should not be empty'
    else if(!email_pattern.test(values.email))
        error.email = 'Incorrect Email type';
    else
        error.email = "";

    if(values.username === "")
        error.username = 'Username should not be empty'
    else if(!username_pattern.test(values.username))
        error.username = 'can be only alphanumeric and underscore';
    else
        error.username = "";

    if(values.password === "")
        error.password = 'password should not be empty'
    else if(!password_pattern.test(values.password))
        error.password = 'password must be between 6 to 16 character long, must have a number, special character, and an uppercase letter';
    else
        error.password = "";
    
    if(values.confirm_password === values.password)
        error.confirm_password = ""
    else
        error.confirm_password = 'passwords did not match';

    return error;
}

export default validation