//Allow Cookies?
function enableCookies() {
  cookieAdd()
}

function cookieAdd(name){
  document.cookie = "name"
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
  let COOKIE = getCookie("cookie");
  if (COOKIE != "") {
    //alert("Welcome again " + COOKIE);
    cookieContainer.style.display = 'block';
    displayImg.src = COOKIE;
    //new line test
  }
  else {
    if (on_index != true) {
      displayImg.src = "grave.png";
  }
  }
}

function CookiePetCREATE() {
  //let PETNAME = getCookie("username")
  //make the user give it a name
  cookieContainer.style.display = 'block';
  const randomIndex = Math.floor(Math.random() * imageLink.length);
  const SAVED = imageLink[randomIndex];
  
  displayImg.src = SAVED;
  
  
  const cookieType = encodeURIComponent(SAVED);

  
  const now = new Date();
  // Create a date object for midnight tonight
  const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);

  // Calculate the difference in seconds
  const secondsUntilTomorrow = Math.floor((midnight - now) / 1000);

  // Set the cookie with the calculated max-age
  document.cookie = `cookie=${cookieType}; path=/; max-age=${secondsUntilTomorrow}`;
  console.log(document.cookie)
}




const imageLink = ['chocolate.png', 'oatmeal.png', 'peanutbutter.png'];
const displayImg = document.getElementById('display');
const cookieContainer = document.querySelector('CookiePET');

//////////////////

document.addEventListener('DOMContentLoaded', () => {
  const cookiePet = document.querySelector('#CookiePET');
  const customCursor = document.querySelector('.custom-cursor');

  // Verify elements are found in your browser console
  if (!cookiePet || !customCursor) {
    console.error("Cursor tracking error: Missing #CookiePET or .custom-cursor elements in HTML.");
    return;
  }

  cookiePet.addEventListener('mousemove', (e) => {
    customCursor.style.display = 'block';
    customCursor.style.left = e.clientX + 'px';
    customCursor.style.top = e.clientY + 'px';
  });

  cookiePet.addEventListener('mouseleave', () => {
    customCursor.style.display = 'none';
  });
});
