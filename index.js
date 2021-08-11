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