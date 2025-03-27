document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".cta-button");
    
    button.addEventListener("mouseover", function() {
        button.style.backgroundColor = "#fff";
        button.style.color = "#000";
    });

    button.addEventListener("mouseout", function() {
        button.style.backgroundColor = "#f4d03f";
        button.style.color = "#000";
    });

    button.addEventListener("click", function() {
        alert("Get ready to build an amazing resume!");
    });
});