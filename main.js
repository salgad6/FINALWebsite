//Allow Cookies?
function enableCookies() {
  cookieAdd()
}

function cookieAdd(name){
  document.cookie = "name"
}

function removeCookies() {

}

function cookieTest() {
    document.cookie = "aCookie=Cookie1";
  //console.log(document.cookie);
  //document.cookie = "aCookie=Cookie1"; "expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
  //console.log(document.cookie);

    console.log("Step 1: All cookies:", document.cookie);

    // Step 2: Try to get the cookie
    console.log("Step 2: Value of aCookie:", getCookie("aCookie"));

    // Step 3: Set expired cookie
    document.cookie = "aCookie=Cookie1; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

    console.log("Step 3: All cookies after expired set:", document.cookie);

    // Step 4: Check again
    console.log("Step 4: Value of aCookie after expired set:", getCookie("aCookie"));
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
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

function CookiePetCREATE() {
  //let PETNAME = getCookie("username")
  //make the user give it a name
  cookieContainer.style.display = 'block';
  const randomIndex = Math.floor(Math.random() * imageLink.length);
  displayImg.src = imageLink[randomIndex];


}




const imageLink = ['chocolate.png', 'oatmeal.png', 'peanutbutter.png'];
const displayImg = document.getElementById('display');
const cookieContainer = document.querySelector('CookiePET');

