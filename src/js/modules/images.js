const images = () => {
    const imgPopup = document.createElement("div"),
          workSection = document.querySelector(".works"),
          bigImage = document.createElement("img");
    
    imgPopup.classList.add("popup-img");
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = "center";
    imgPopup.style.alignItems = "center";
    imgPopup.style.display = "none";

    imgPopup.appendChild(bigImage);

    workSection.addEventListener("click", (e) => {
        e.preventDefault();

        let target = e.target;

        if (target && target.classList.contains("preview")) {
            imgPopup.style.display = "flex";
            document.body.style.overflow = "hidden";
            const path = target.parentNode.getAttribute("href");
            bigImage.setAttribute("src", path);
            bigImage.style.maxWidth = '90%';
            bigImage.style.maxHeight = '90%';
        }
        if (target && target.matches("div.popup-img")) {
            imgPopup.style.display = "none";
            document.body.style.overflow = ""
        }
    });

};

export default images;