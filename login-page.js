//astrinsic px code
(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
    (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
  var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
  var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
})(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-9DYNKKOX8BGS-2");

 /* (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-9DYNKKOX8BGS-2", {
   // <!-- setting content security polic -->
    "htmlSanitization": true,
    "htmlSanitizationAllowedDomains": ["https://ankitagupta15.github.io"],
   // <!-- setting checksum endpoint -->
    "engagementChecksumFileUrl": "Engagement_checksum_PXAnkita_Production.json"
    }
  );*/

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
    const loginErrorMsg = document.getElementById("login-error-msg");

    function signIn(){
      const username = loginForm.username.value;
      const password = loginForm.password.value;
      const acctID = {
          acct1: "PXAnkita",
          acct2: "demoAccount",
      }
      const acctName= {
        acct1: "PXaccount",
        acct2: "Account 2"
      }
      const userId = {
        ID1: "1",
        ID2: "2",
        ID3: "3",
        ID4: "4",
        ID5: "5",
        ID10: "10"
    }

      if ((username === "ankita" && password === "123") || (username=== "anku" && password === "123") || (username==="gupta" && password === "123") || (username==="a" && password === "123") || (username === "mishti" && password === "aaa") || (username === "Pratap" && password === "aaa")) {

        alert("You have successfully logged in.");
        window.location.href="signin.html"

        if(username=="ankita"){
          //passing user and account objects:
        aptrinsic("identify",
        {
          //User Fields
         "id": userId.ID1, // Required for logged in app users
         "firstName": username,
         "paidUser": true
        },
        {
            //Account Fields
            "id":acctID.acct1, //Required
            "name": acctName.acct1
    });
        }

        if(username=="anku"){
          //passing user and account objects:
        aptrinsic("identify",
        {
          //User Fields
         "id": userId.ID2, // Required for logged in app users
         "firstName": username,
        },
        {
            //Account Fields
            "id":acctID.acct1, //Required
            "name": acctName.acct1
    });
        }
        if(username=="gupta"){
          //passing user and account objects:
        aptrinsic("identify",
        {
          //User Fields
         "id": userId.ID3, // Required for logged in app users
         "firstName": username,
        },
        {
            //Account Fields
            "id":acctID.acct1, //Required
            "name": acctName.acct1
    });
        }

        if(username=="a"){
          //passing user and account objects:
        aptrinsic("identify",
        {
         //User Fields
         "id": userId.ID4, // Required for logged in app users
         "firstName": username,
        },
        {
            //Account Fields
            "id":acctID.acct1, //Required
            "name": acctName.acct1
    });
        }

        if(username=="mishti"){
          //passing user and account objects:
        aptrinsic("identify",
        {
          //User Fields
         "id": userId.ID5, // Required for logged in app users
         "firstName": username,
        },
        {
            //Account Fields
            "id":acctID.acct1, //Required
            "name": acctName.acct1
    });
        }

        if(username=="Pratap"){
          //passing user and account objects:
        aptrinsic("identify",
        {
          //User Fields
         "id": userId.ID10, // Required for logged in app users
         "firstName": username,
        },
        {
            //Account Fields
            "id":acctID.acct2, //Required
            "name": acctName.acct2
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
    } else {
        loginErrorMsg.style.opacity = 1;
      }
    }

//feedback function
function feedback(){
  document.getElementById("feedback").innerHTML = "Feedback Button is Clicked";
}

function zero(){
  document.getElementById("number").innerHTML = "0";
}

function one(){
  document.getElementById("number").innerHTML = "1";
}

//logout function
function logout(){
    document.getElementById("logout").addEventListener("click", a);
    function a(){
        alert("You have successfully logged out.");
        window.location.href="index.html"
        deleteAllCookies();
    }
}

function newpage(){
  window.location.href="signin.html"
}

//delete cookies
function deleteAllCookies() {
  document.cookie = 'apt.uid=; Domain=.ankitagupta15.github.io; Path=/;';
  document.cookie = 'apt.sid=; Domain=.ankitagupta15.github.io; Path=/;';
}
//add in logout btn onclick="deleteAllCookies()"