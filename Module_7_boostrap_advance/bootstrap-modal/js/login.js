function log()
{
    var em=document.getElementById("email").value;
    var pwd=document.getElementById("password").value;
    if(em=='vaibhav777@gmail.com' && pwd=='vibhu123')
    {
        alert('Thanks you are Logged in Succefully')
        window.location='dashboard.html';
    }

    else 

    {
        alert('Your email and password are inocrrect try again')
        window.location='index.html';

    }
}

function logout()
{
    alert('You are Logout successfully')
    window.location='index.html';
}
