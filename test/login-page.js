//astrinsic px code
(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
    (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
  var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
  var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
})(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-9DYNKKOX8BGS-2");

//login function
function login(){
    const loginForm = document.getElementById("login-form");
    const loginButton = document.getElementById("login-form-submit");
    const loginErrorMsg = document.getElementById("login-error-msg");

    loginButton.addEventListener("click", (e) => {
      e.preventDefault();
      const username = loginForm.username.value;
      const password = loginForm.password.value;

      if (username === "ankita" || username=== "anku" || username==="gupta" && password === "123") {
        //passing user and account objects:
        aptrinsic("identify",
        {
          //User Fields
         "id": username, // Required for logged in app users
        },
        {
            //Account Fields
            "id":"PXAnkita", //Required
    });
    alert("You have successfully logged in.");
    window.location.href="signin.html"
    } else {
        loginErrorMsg.style.opacity = 1;
      }
      
    })
}

//logout function
function logout(){
    document.getElementById("logout").addEventListener("click", a);
    function a(){
        alert("You have successfully logged out.");
        window.location.href="index.html"
        window.aptrinsic('reset');
    }
}

//delete cookies
/*function deleteAllCookies() {
    window.aptrinsic('reset');
    counter = 0;
}*/
//add in logout btn onclick="deleteAllCookies()"