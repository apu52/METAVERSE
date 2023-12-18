const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let ready = false; //when page first loaded, it is false
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];
let isInitialLoad = true;

// Unsplash API
const initalCount = 5;
const apiKey = "-KsOXvdzrmis5K5FFHbUNb1HOJks2OpVmYARueRdjAw";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${initalCount}`;

// New Block
function updateAPIURLWithNewCount(picCount) {
    apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${picCount}`;
}

// Check if all images were loaded
function imageLoaded() {
    imagesLoaded++;
    //   console.log(imagesLoaded);

    if (imagesLoaded === totalImages) {
        ready = true;
        loader.hidden = true;
        count = 30;
        // console.log("ready =", ready);
    }
}

// Create Helper Class for Set Attributes on DOM Elements
function setAttribute(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Create Elements For Links & Photos, Add to DOM
function displayPhotos() {
    imagesLoaded = 0;
    totalImages = photosArray.length;
    console.log("total images", totalImages);

    // Run function for each object in photosArray
    photosArray.forEach((photo) => {
        // Creating element of what we have with photosArray
        // Create <a> to link to Unsplash
        const item = document.createElement("a");

        setAttribute(item, {
            href: photo.links.html,
            target: "_blank",
        });

        // Create <img> for photo
        const img = document.createElement("img");

        setAttribute(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });

        // Event Listener, check when each is finished loading
        img.addEventListener("load", imageLoaded);

        // Put <img> inside <a>, then put both inside imageContainer Element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
        console.log(photosArray);
    } catch {
        //Error Message
    }
}

// Check to see if scrolling near bottom of page, Load More Photos
window.addEventListener("scroll", () => {
    //   console.log("scrolled"); // it will count number of times scrolling, we need to narrow it down
    if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
        ready
    ) {
        ready = false;
        getPhotos();
        0;
    }
});

// On Load
getPhotos();