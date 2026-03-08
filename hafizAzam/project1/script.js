var iconMoon = document.getElementById("moon-icon");

iconMoon.addEventListener("click", function () {
    var body = document.querySelector("body").classList.toggle("active");

    // if(body.cassName == "active") {
    //     iconMoon.className ="fa-solid fa-sun";
    // } else {
    //     iconMoon.className ="fa-solid fa-moon"
    // }

    if (document.querySelector("body").className == "active") {
        icon.className = "fa-solid fa-sun";
    } else {
        icon.className = "fa-solid fa-moon";
    }
}
)