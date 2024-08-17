const galleryItem = document.getElementsByClassName("gallery-item"); 
//create element for lightBox
const lightBoxContainer = document.createElement("div");
//for basic area
const lightBoxContent = document.createElement("div");
//for images
const lightBoxImg = document.createElement("img");
//for previous button
const lightBoxPrev = document.createElement("div");
//for next button
const lightBoxNext = document.createElement("div");

//classList

lightBoxContainer.classList.add('lightbox');
lightBoxContent.classList.add('lightbox-content');
lightBoxPrev.classList.add("fa", "fa-angle-left", "lightbox-prev");
lightBoxNext.classList.add("fa", "fa-angle-right", "lightbox-next");

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);
document.body.appendChild(lightBoxContainer);

let index = 1;

//function
function showLightBox(n){
    console.log("Showing image number:", n);
    if(n > galleryItem.length){
        index = 1;
    } else if(n < 1){
        index = galleryItem.length;
    }

    let imageLocation = galleryItem[index-1].children[0].getAttribute("src");
    lightBoxImg.setAttribute("src", imageLocation);
}

function currentImage(){
    console.log("Image clicked", this);
    lightBoxContainer.style.display="block";

    let imageIndex = parseInt(this.getAttribute("data-index"));

    if (!isNaN(imageIndex)) {
        showLightBox(index = imageIndex);
    } else {
        console.error("Invalid image index: ", imageIndex);
    }
}

for (let i = 0; i<galleryItem.length; i++){
    galleryItem[i].addEventListener("click", currentImage);
}

function sliderImage(n){
    showLightBox(index += n);
}

function prevImage(){
    sliderImage(-1);
}
function nextImage(){
    sliderImage(1);
}

lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);

//close lightbox

function closeLightBox(){
    if(this === event.target){
        lightBoxContainer.style.display = "none";
    }
}

lightBoxContainer.addEventListener("click", closeLightBox);