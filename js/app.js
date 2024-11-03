// Initialize baguetteBox.js function for Lightbox 
baguetteBox.run('.gallery');

/**
 * Live search in gallery with search field.
 */

// Collects all Data-Captions from images in the gallery and finds the search element
const images = document.querySelectorAll('a[data-caption]');
let searchInput = document.getElementById('search');

// Add event listener to search and transforms input to lowercase
searchInput.addEventListener('input', function() {
    const searchText = searchInput.value.toLowerCase();
    
    // Looks trough all images for data-caption and transforms to lowercase
    images.forEach(image => {
        const caption = image.getAttribute('data-caption').toLowerCase();

        if (caption.includes(searchText)) {
            // If searchtext are included in data-caption display block
            image.style.display = 'block';
        } else {
            // If searchtext is not included in data-caption display none
            image.style.display = 'none';
        }
    })
  });
