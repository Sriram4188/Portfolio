document.addEventListener("DOMContentLoaded", function () {
    // Add hover effect to reveal hidden details
    let infoBoxes = document.querySelectorAll(".myinfo1, .myinfo2, .myinfo3, .myinfo4, .myinfo5");

    infoBoxes.forEach(box => {
        box.addEventListener("mouseenter", function () {
            let hoverContent = this.querySelector(".hover");
            if (hoverContent) {
                hoverContent.style.display = "block";
                hoverContent.style.opacity = "1";
                hoverContent.style.transition = "opacity 0.5s ease-in-out";
            }
        });

        box.addEventListener("mouseleave", function () {
            let hoverContent = this.querySelector(".hover");
            if (hoverContent) {
                hoverContent.style.opacity = "0";
                setTimeout(() => {
                    hoverContent.style.display = "none";
                }, 500);
            }
        });
    });

    // Expand profile image on click
    let profileImg = document.getElementById("i");
    profileImg.addEventListener("click", function () {
        if (this.style.transform === "scale(1.5)") {
            this.style.transform = "scale(1)";
        } else {
            this.style.transform = "scale(1.5)";
        }
        this.style.transition = "transform 0.5s ease-in-out";
    });

    // Change background color dynamically
    let parentDiv = document.querySelector(".parent");
    parentDiv.addEventListener("click", function () {
        let colors = ["black", "#3498db", "#2ecc71", "#e74c3c"];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        this.style.backgroundColor = randomColor;
    });
});
