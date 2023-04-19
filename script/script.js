function initMap() {
    const mapOptions = {
        center: { lat: 40.7128, lng: -74.0060 }, // New York City coordinates
        zoom: 12,
        zoomControl: true
    };

    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    const marker = new google.maps.Marker({
        position: { lat: 40.7128, lng: -74.0060 },
        map: map,
        title: 'New York City'
    });

    const infoWindowContent = '<h2>New York City</h2><p>The most populous city in the United States.</p>';

    const infoWindow = new google.maps.InfoWindow({
        content: infoWindowContent
    });

    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    });
}

function initSlider() {
    let slideIndex = 1;
    showSlides(slideIndex);

    function showSlides(n) {
        const slides = document.getElementsByClassName("slide");

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }

    document.getElementById("prev").onclick = function () {
        showSlides(slideIndex -= 1);
    };
    document.getElementById("next").onclick = function () {
        showSlides(slideIndex += 1);
    };
}

document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById('map')) {
        initMap();
    }
    if (document.getElementsByClassName("slide").length > 0) {
        initSlider();
    }
});
