//import Cookies from "js-cookie";
//import { createRoot } from 'react-dom/client';

function setCookie(cname, cvalue) {
  document.cookie = cname + "=" + cvalue + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}

//Button MasterList
function doPopUP() {
    alert("HI");
}

//Time Start
function timeStart() {
    document.cookie = "startTime=0; path=/";
}

//Time End
function timeEnd() {
    //let RETURN = document.cookie
    //console.log(RETURN)
    
}

//Allow Cookies?
function enableCookies() {
  timeStart()
  timeEnd()
}

function cookieTest() {
  let RETURN = console.log(document.cookie);
  //create
  alert(RETURN)
  document.cookie = "aCookie=Cookie1";
  //check
  console.log(document.cookie);
  //destroy
}

//Cookies.set("name", "value", {expires:7})
//const name = Cookies.get("name");

