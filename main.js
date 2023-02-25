// Scroll function

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

//Register-Page function
document.getElementById('logbtn').onclick = function () {
    location.replace("http://127.0.0.1:5555/Apply_page/register.html")
  };