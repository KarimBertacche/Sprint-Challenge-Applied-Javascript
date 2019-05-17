class Carousel {
    constructor(carousel, currentIdx){
        this.carousel = carousel;
        const leftBtn = this.carousel.querySelector('.left-button');
        const rightBtn = this.carousel.querySelector('.right-button');
        let carouselImg = this.carousel.querySelectorAll('img');
        let counter = 0;
        const images = Array.from(carouselImg).map((image, index) => { 
            const imgIndex = image.dataset.id = index;
            return imgIndex;
        });

        leftBtn.addEventListener('click', function(event){
            if(counter <= 0) {
                counter = carouselImg.length - 1;
                removeActive();
                imageCounter();
                console.log(this.currentImg);
            } else {
                let prevCount = counter;
                --counter;
                removeActive();
                imageCounter(prevCount);
            }
        })
        
        rightBtn.addEventListener('click', function(event){
            if(counter >= carouselImg.length - 1) {
                counter = 0;
                removeActive();
                imageCounter();
            } else {
                let prevCount = counter;
                ++counter;
                removeActive();
                imageCounter(prevCount);
            }
        })

        const imageCounter = (prevCount) => {
            images.forEach(imageIdx => {   
                if(imageIdx === counter) {
                    this.currentImg = document.querySelector(`img[data-id="${imageIdx}"]`);

                    if(prevCount = imageIdx - 1){
                        this.currentImg.style.animationName = 'slideRight';
                        this.currentImg.style.animationTimingFunction = 'easeOut';
                        this.currentImg.style.animationDuration = '1.5s';
                    } else if(prevCount = imageIdx + 1){
                        this.currentImg.style.animationName = 'slideLeft';
                        this.currentImg.style.animationTimingFunction = 'easeOut';
                        this.currentImg.style.animationDuration = '1.5s'; 
                    }

                    this.currentImg.style.display = 'block';       
                    this.currentImg.classList.add('active'); 

                    return this.currentImg;
                }   
            });
        }

        const removeActive = () => {
            images.forEach(imageIdx => {
                if(imageIdx !== counter) {
                    this.currentImg.style.display = 'none'; 
                    this.currentImg.classList.remove('active');  
                }
            })
        }

        imageCounter();

        const slideLeft = () => {

        }
    }  
}

let carousel = document.querySelector('.carousel');
let currentIdx = 0;
let newCarousel = new Carousel(carousel, currentIdx);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
