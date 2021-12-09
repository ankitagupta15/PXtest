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

      if ((username === "ankita" && password === "123") || (username=== "anku" && password === "123") || (username==="gupta" && password === "123") || (username==="a" && password === "123")) {

        alert("You have successfully logged in.");
        window.location.href="signin.html"

        if(username=="ankita"){
          //passing user and account objects:
        aptrinsic("identify",
        {
          //User Fields
         "id": "1", // Required for logged in app users
         "firstName": username
        },
        {
            //Account Fields
            "id":"PXAnkita", //Required
    });
        }

        if(username=="anku"){
          //passing user and account objects:
        aptrinsic("identify",
        {
          //User Fields
         "id": "2", // Required for logged in app users
         "firstName": username
        },
        {
            //Account Fields
            "id":"PXAnkita", //Required
    });
        }
        if(username=="gupta"){
          //passing user and account objects:
        aptrinsic("identify",
        {
          //User Fields
         "id": "3", // Required for logged in app users
         "firstName": username
        },
        {
            //Account Fields
            "id":"PXAnkita", //Required
    });
        }

        if(username=="a"){
          //passing user and account objects:
        aptrinsic("identify",
        {
          //User Fields
         "id": "4", // Required for logged in app users
         "firstName": username
        },
        {
            //Account Fields
            "id":"PXAnkita", //Required
    });
        }
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