const number = document.getElementById("number")
const remark = document.getElementById("remark")
let wordCount  = sessionStorage.getItem('words')


function load() {
   number.innerHTML = wordCount;
   let randomNumber = Math.ceil(Math.random()*7);
   remark.innerText = remarkArray[randomNumber] 
}



const remarkArray = ["Remember, even the Flash had to start somewhere! Keep those fingers flying, and soon you'll be typing faster than your thoughts can keep up!",
"Type like the wind! If you keep practicing, you'll be breaking the sound barrier with your keystrokes in no time!",
"Don't worry if you're not a typing ninja yet; every master was once a beginner who didn't give up!",
"Keep at it, and soon your fingers will be dancing across the keyboard like they're at a rave!",
"Type like you're trying to win an invisible race against your future self—because you are!",
"You’re not just typing words; you're training to become a keyboard wizard, casting spells with your fingertips!",
"Speeding tickets for typing too fast? Not yet, but keep practicing and you might just set a new record!"
] 
load();