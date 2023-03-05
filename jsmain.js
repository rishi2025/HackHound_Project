let users=[{username:"Hello",password:"World"},{username:"exampleUser",password:"examplePassword"}]
function validateLogin() {
    // Get username and password input fields
    const usern = document.getElementById("username").value;
    const passw = document.getElementById("password").value;

    
    // Check if username and password are valid
    for (let i=0;i<users.length;i++)
    {
        if (usern === users[i].username && passw === users[i].password) {
        // Redirect to home page or show success message
            window.location.href = "indexmain.html";
        }
    }
    // Show error message
    const errorMessage = document.getElementById("error-message");
    errorMessage.innerHTML = "Invalid username or password. Please try again.";
}

function proceedSignup() {
    // Get username and password input fields
    const usern = document.getElementById("username").value;
    const passw = document.getElementById("password").value;

    // Show error message
    const errorMessage = document.getElementById("error-message");
    let r=1;
    for (let i=0;i<users.length;i++)
    {
        if (usern === users[i].username) {
        // Redirect to home page or show success message
        errorMessage.innerHTML = "Aready Existing Account";
        r=0;
        break;
        }
    }

    if (r) users.push({username:usern,password:passw});

}
