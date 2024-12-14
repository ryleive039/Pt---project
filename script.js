if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js').then( () => {
            console.log('Service Worker Registered')
        })
    })
}
    
const button = document.getElementById('fetch-dog');
const dogImage = document.getElementById('dog-image');
const dogInfo = document.getElementById('dog-info');

function fetchRandomDogPicture() {
    fetch("https://random.dog/woof.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const { url } = data;

            
            dogImage.src = url;
            dogImage.style.display = "block";
            dogInfo.textContent = "A dog is the only thing on earth that loves you more than he loves himself 🐶💖 - Josh Billings";
        })
        .catch(error => {
            console.error('Error fetching dog picture:', error);
            dogInfo.textContent = 'Sorry, something went wrong. Please try again!';
        });
}


button.addEventListener('click', fetchRandomDogPicture);

