//astrinsic px code
(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
    (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
  var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
  var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
})(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-9DYNKKOX8BGS-2");

//fullstory code

window['_fs_debug'] = false;
window['_fs_host'] = 'fullstory.com';
window['_fs_script'] = 'edge.fullstory.com/s/fs.js';
window['_fs_org'] = '17ARGB';
window['_fs_namespace'] = 'FS';
(function(m,n,e,t,l,o,g,y){
    if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
    g=m[e]=function(a,b,s){g.q?g.q.push([a,b,s]):g._api(a,b,s);};g.q=[];
    o=n.createElement(t);o.async=1;o.crossOrigin='anonymous';o.src='https://'+_fs_script;
    y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
    g.identify=function(i,v,s){g(l,{uid:i},s);if(v)g(l,v,s)};g.setUserVars=function(v,s){g(l,v,s)};g.event=function(i,v,s){g('event',{n:i,p:v},s)};
    g.anonymize=function(){g.identify(!!0)};
    g.shutdown=function(){g("rec",!1)};g.restart=function(){g("rec",!0)};
    g.log = function(a,b){g("log",[a,b])};
    g.consent=function(a){g("consent",!arguments.length||a)};
    g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
    g.clearUserCookie=function(){};
    g.setVars=function(n, p){g('setVars',[n,p]);};
    g._w={};y='XMLHttpRequest';g._w[y]=m[y];y='fetch';g._w[y]=m[y];
    if(m[y])m[y]=function(){return g._w[y].apply(this,arguments)};
    g._v="1.3.0";
})(window,document,window['_fs_namespace'],'script','user');

//login function
    const loginForm = document.getElementById("login-form");
    const loginButton = document.getElementById("login-form-submit");
    const loginErrorMsg = document.getElementById("login-error-msg");
  

    loginButton.addEventListener("click", (e) => {
      e.preventDefault();
      const username = loginForm.username.value;
      const password = loginForm.password.value;

      if ((username === "ankita" && password === "123") || (username=== "anku" && password === "123") || (username==="gupta" && password === "123") || (username==="a" && password === "123") || (username === "mishti" && password === "aaa")) {

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

        if(username=="mishti"){
          //passing user and account objects:
        aptrinsic("identify",
        {
          //User Fields
         "id": "5", // Required for logged in app users
         "firstName": username
        },
        {
            //Account Fields
            "id":"PXAnkita", //Required
    });
        }

        // This is an example script - don't forget to change it!
      FS.identify('PX', {
      displayName: username,
      //email: '<EMAIL_HERE>',
      // TODO: Add your own custom user variables here, details at
      // https://help.fullstory.com/hc/en-us/articles/360020623294-FS-setUserVars-Recording-custom-user-data
      reviewsWritten_int: 14
    });
        // Setting Global Context
        // Track UI version and runtime

      aptrinsic('set', 'globalContext', {"version":12345, "name":"Salesforce", "type":"Iframe"});
      aptrinsic('set', 'globalContext', {"version":555, "name":"NXT"});

      //Track an object:
      aptrinsic('set', 'globalContext', {"projectId":12345,"Project Type" :"Work Order",
      "Project Date":"2018-03-08T18:11:00Z" });
    } else {
        loginErrorMsg.style.opacity = 1;
      }
      
    })
//feedback function

function feedback(){
  document.getElementById("feedback").innerHTML = "Feedback Button Clicked";
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