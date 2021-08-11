//First name starts with Cap and has minimum 3 characters
var nameStr = "Niraj";
var nameRegex = /^[A-Z][a-zA-Z]{2}(\w+)?$/;

if(nameRegex.test(nameStr)){
    console.log('Valid');
}
else{
    console.log('Invalid');
}

//Last name starts with Cap and has minimum 3 characters
var lastNameStr = "Niraj Bhavnani";
var lastNameRegex = /^(\w+)[ ][A-Z][a-zA-Z]{2}(\w+)?$/;

if(lastNameRegex.test(lastNameStr)){
    console.log('Valid');
}
else{
    console.log('Invalid');
}

//As a User need to enter a valid email
// - E.g. abc.xyz@bl.co.in 
// - Email has 3 mandatory parts (abc, bl & co) and 2 optional (xyz & in) with precise @ and . positions
var email = "niraj.bhavnani@ves.ac.in";
var emailRegex = /^[A-Za-z_0-9]+[.]?[A-Za-z_0-9]+[@][A-Za-z0-9]+[.](\w){2,3}[.]?(\w?){2,3}$/;

if(emailRegex.test(email)){
    console.log('Valid');
}
else{
    console.log('Invalid');
}