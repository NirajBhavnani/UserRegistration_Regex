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

// As a User need to follow pre-defined Mobile Format
// - E.g. 91 9919819801 - Country code follow by space and 10 digit number
var phone = "91 9876543210";
var phoneRegex = /^[\d][\d][ ][\d]{10}$/;

if(phoneRegex.test(phone)){
    console.log('Valid');
}
else{
    console.log('Invalid');
}

//As a User need to follow pre-defined Password rules. Rule1– minimum 8 Characters
var password1 = "JohnSnow12";
var password1Regex = /.{8,}/;

if(password1Regex.test(password1)){
    console.log('Valid: >=8');
}
else{
    console.log('Invalid: !=8');
}