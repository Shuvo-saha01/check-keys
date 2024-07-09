const url = "https://random-word-api.vercel.app/api?words=40";
let words = [];
let sentence = document.getElementById("sentence");
let time = document.getElementById("time")
let wpm = document.getElementById("wpm")
let wpmText = document.getElementById("wpmText")
let restart = document.getElementById("restart")
let loading = document.getElementById("loading")
let loadRemove = document.getElementById("loadRemove")
let dummy = document.getElementsByClassName("dummy")


let key = "";
text = "";
index = 0;
let state = true;
let completeWords = 0;
let highlight = "";

async function wordsFetch(){
    try {
        let response = await fetch(url);
        let data = await response.json();
        words = data;
        return words;
    } catch (error) {
        console.log(error);
    }
}

async function main(){
    await wordsFetch();
    text = words.join(" ");
    sentence.textContent = text;
    check = 0;
    index = 0;
    click();
    hide();
    time.classList.remove("hidden");
}
main();

function click(){

    document.addEventListener("keydown",
        (event) => {
            clock();
            key = event.key;
            if(key === "Backspace"){
                index --;
            }
            if(key === text[index]){
               colorChange(true);
               if (key === " "){
                    completeWords ++;
               } 
               index ++; 
            }else{
                colorChange(false);

            }
        }
    )
}

function colorChange(condition){
    highlight = text.substring(0,index) + `<span class = " ${condition} " >` + text[index] + "</span>" + text.substring(index+1);
    sentence.innerHTML = highlight;
}

function clock() {
    if (state) {
        let duration = 29;
    let timeInterval = setInterval(() => {
        time.innerHTML = duration;
        duration --;
        if(duration === -1){
            clearInterval(timeInterval);
            countWords();
            sessionStorage.setItem('words' , completeWords )
            window.location.href = "result.html";
        }
    }, 1000);
    state = false;
    }
}

function countWords() {
    completeWords = completeWords * 2;
    wpm.innerHTML = completeWords;
    wpmText.classList.remove("hidden")
    wpm.classList.remove("hidden")
}

restart.addEventListener("click",() => {
    location.reload();
})


function hide() {
    let opacity = 1;
    let interval = setInterval(() => {
        opacity = opacity - 0.1
        loading.style.opacity = opacity;
        if(opacity <= 0){
            console.log("running");
            loadRemove.innerHTML = ""
            clearInterval(interval)
        }
    }, 20);

}

