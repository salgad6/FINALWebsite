function CookiePetCREATE() {
  //let PETNAME = getCookie("username")
  //make the user give it a name
  const now = new Date();
  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);

  const utcString = tomorrow.toUTCString();
  cookieContainer.style.display = 'block';
  const randomIndex = Math.floor(Math.random() * imageLink.length);
  displayImg.src = imageLink[randomIndex];
  document.cookie = "VISITED:TRUE"; path=/; expires=${utcString};
}

// Function to check if a specific cookie exists
function checkCookie(name) {
  const cookies = document.cookie.split(';');
  return cookies.some(cookie => cookie.trim().startsWith(name + '='));
}

// If the cookie 'visited' exists, show the hidden div
if (checkCookie('VISITED')) {
  document.getElementById('welcome-message').style.display = 'block';
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
