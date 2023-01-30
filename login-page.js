
//Webengage

/*var webengage;!function(w,e,b,n,g){function o(e,t){e[t[t.length-1]]=function(){r.__queue.push([t.join("."),
arguments])}}var i,s,r=w[b],z=" ",l="init options track screen onReady".split(z),a="feedback survey notification".split(z),c="options render clear abort".split(z),p="Open Close Submit Complete View Click".split(z),u="identify login logout setAttribute".split(z);if(!r||!r.__v){for(w[b]=r={__queue:[],__v:"6.0",user:{}},i=0;i < l.length;i++)o(r,[l[i]]);for(i=0;i < a.length;i++){for(r[a[i]]={},s=0;s < c.length;s++)o(r[a[i]],[a[i],c[s]]);for(s=0;s < p.length;s++)o(r[a[i]],[a[i],"on"+p[s]])}for(i=0;i < u.length;i++)o(r.user,["user",u[i]]);setTimeout(function(){var f=e.createElement("script"),d=e.getElementById("_webengage_script_tag");f.type="text/javascript",f.async=!0,f.src=("https:"==e.location.protocol?"https://ssl.widgets.webengage.com":"http://cdn.widgets.webengage.com")+"/js/webengage-min-v-6.0.js",d.parentNode.insertBefore(f,d)})}}(window,document,"webengage");webengage.init("311c522c");
*/
  
//login function
    const loginForm = document.getElementById("login-form");
    const loginErrorMsg = document.getElementById("login-error-msg");
    function signIn(){
      const username = loginForm.username.value;
      const password = loginForm.password.value;
      if ((username === "ankita" && password === "123") || (username=== "anku" && password === "123") || (username==="gupta" && password === "123") || (username==="a" && password === "123") || (username === "mishti" && password === "aaa") || (username === "Pratap" && password === "aaa")) {
        alert("You have successfully logged in.");
        window.location.href="signin.html"
      }
        else {
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

function testButton(){
  document.getElementById("test").innerHTML = "Test Button is clicked";
}


function about(){
  aptrinsic('set', 'globalContext', {"GCtest" : true});
}

//logout function
function logout(){
    document.getElementById("logout").addEventListener("click", a);
    function a(){
        alert("You have successfully logged out.");
        window.location.href="index.html"
    }
}

function newpage(){
  window.location.href="signin.html"
  aptrinsic('track', 'signinPage', {"name":"signin"});
}
