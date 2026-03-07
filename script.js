document.getElementById("registrationform").addEvenListener("submit",function(e){
    e.preventDefault();
    let name = document.getElementById("name").ValueMax;
    let email = document.getElementById("email").ValueMax;
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmpassword").value;
    let message = document.getElementById("message");
    if(nmae === " " || email ===" " || password === " "){
        message.innerHTML = "All fields are required!";
        return;

    } 
    if(password.length < 6){
        message.innerHTML = "Password must be at least 6 characters.";
        return;
    }
    if(password !== confirmPassword){
        message.innerHTML = "Password do not match!";
        return;
    }
    message.style.color = "green";
    message.innerHTML = "Regisgered succesfully";
});