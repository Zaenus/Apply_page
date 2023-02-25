let button = document.querySelector(".button"),
    progress = document.querySelector(".progress"),
    progressValue = document.querySelector(".progress-percent");


let progressStartValue = 0,
    progressEndValue = 100,
    speed = 100;

/* let progression = setInterval(() => {
        progressStartValue++; 
        
        progressValue.textContent = `${progressStartValue}%`
    
        if(progressStartValue == progressEndValue){
            clearInterval(progression);
        }
    }, speed) */



button.addEventListener("click", () => {
    button.classList.add("active"),
    progress.classList.add("active");

    let progression = setInterval(() => {
        progressStartValue++; 
        console.log(progressStartValue);
        
        progressValue.textContent = `${progressStartValue}%`
    
        if(progressStartValue == progressEndValue){
            clearInterval(progression);
        }
    }, speed)



    setTimeout(()=>{
        button.classList.remove("active");//Remove active classs after 12s
        progress.classList.remove("active"); 
        document.querySelector("i").classList.replace("bx-cloud-download", "bx-check-circle");
        document.querySelector(".button-text").innerHTML = "Completed";


    },12000)  // 1s = 1000ms
})