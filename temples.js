// Array of temple objects
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    }
];
// Function to generate temple cards
function generateTempleCards(templesArray) {
    const grid = document.querySelector('.grid'); // Select the grid container in the HTML
    grid.innerHTML = ''; // Clear any existing content in the grid

    templesArray.forEach(temple => {
        // Create the HTML for each temple card
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const figcaption = document.createElement('figcaption');

        img.src = temple.imageUrl;
        img.alt = `${temple.templeName} Temple`;
        img.loading = "lazy"; // Enable lazy loading for images

        figcaption.innerHTML = `
            <strong>${temple.templeName}</strong><br>
            Location: ${temple.location}<br>
            Dedicated: ${temple.dedicated}<br>
            Area: ${temple.area} sq ft
        `;

        figure.appendChild(img);
        figure.appendChild(figcaption);
        grid.appendChild(figure);
    });
}

// Call the function to generate the cards when the page loads
generateTempleCards(temples);
