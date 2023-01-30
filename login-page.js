
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
      if ((username === "ankita" && password === "123") || (username=== "sid" && password === "123") || (username==="lakshya" && password === "123") || (username==="neha" && password === "123") || (username === "mishti" && password === "123") || (username === "Pratap" && password === "123")) {
        webengage.user.login(username);
        if(username == "ankita"){
          webengage.user.setAttribute('we_email', 'gankita009@gmail.com');
          webengage.user.setAttribute('we_first_name', 'Ankita');
          webengage.user.setAttribute('we_last_name', 'Gupta');
          webengage.user.setAttribute('we_phone', '9619903182');
      }

      if(username == "sid"){
        webengage.user.setAttribute('we_email', 'pndsiddharth@gmail.com');
        webengage.user.setAttribute('we_first_name', 'Siddharth');
        webengage.user.setAttribute('we_last_name', 'Pandey');
        webengage.user.setAttribute('we_phone', '9833346778');
    }

    if(username == "lakshya"){
      webengage.user.setAttribute('we_email', 'glakshya01@gmail.com');
      webengage.user.setAttribute('we_first_name', 'Lakshya');
      webengage.user.setAttribute('we_last_name', 'Gupta');
      webengage.user.setAttribute('we_phone', '7715973811');
  }

  if(username == "neha"){
    webengage.user.setAttribute('we_email', 'gneha0509@gmail.com');
    webengage.user.setAttribute('we_first_name', 'Neha');
    webengage.user.setAttribute('we_last_name', 'Gupta');
    webengage.user.setAttribute('we_phone', '9819638848');
}

if(username == "mishti"){
  webengage.user.setAttribute('we_email', 'mishti@gmail.com');
  webengage.user.setAttribute('we_first_name', 'Mishti');
  webengage.user.setAttribute('we_last_name', 'Gupta');
  webengage.user.setAttribute('we_phone', '9076002408');
}

if(username == "pratap"){
  webengage.user.setAttribute('we_email', 'pratapchauhan97@gmail.com');
  webengage.user.setAttribute('we_first_name', 'Pratap');
  webengage.user.setAttribute('we_last_name', 'Chauhan');
  webengage.user.setAttribute('we_phone', '8693822070');
}
       
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
        webengage.user.logout();
    }
}

function newpage(){
  window.location.href="signin.html"
}
