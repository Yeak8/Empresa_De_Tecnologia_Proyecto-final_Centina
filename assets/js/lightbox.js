// Open the Lightbox
function openLightbox() {
    document.getElementById("lightboxModal").style.display = "block";
    document.body.classList.add('modal-open'); // Desactiva el scroll en el body
}

// Close the Lightbox
function closeLightbox() {
    document.getElementById("lightboxModal").style.display = "none";
    document.body.classList.remove('modal-open'); // Reactiva el scroll
}

// Control de slides del Lightbox
let lightboxSlideIndex = 1;
showLightboxSlides(lightboxSlideIndex);

// Next/Previous Controls
function plusLightboxSlides(n) {
    showLightboxSlides(lightboxSlideIndex += n);
}

// Thumbnail Image Controls
function currentLightboxSlide(n) {
    showLightboxSlides(lightboxSlideIndex = n);
}

function showLightboxSlides(n) {
    let slides = document.getElementsByClassName("lightbox-slide");
    let dots = document.getElementsByClassName("lightbox-demo");
    let captionText = document.getElementById("lightboxCaption");

    if (n > slides.length) { lightboxSlideIndex = 1 }
    if (n < 1) { lightboxSlideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" lightbox-active", "");
    }

    slides[lightboxSlideIndex - 1].style.display = "block";
    dots[lightboxSlideIndex - 1].className += " lightbox-active";

    captionText.innerHTML = dots[lightboxSlideIndex - 1].alt;
}
