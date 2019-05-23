class Carousel {
    constructor(carouselElement) {
        this.carouselElement = carouselElement;
        this.leftClick = document.querySelector(".left-button");
        this.rightClick = document.querySelector(".right-button");
        this.images = document.querySelectorAll("div.carousel > img");
        this.currentIndex = this.initialize(this.images);
        this.indexMax =this.images.length;
        this.leftClick.addEventListener("click", () => this.scroll("left"));
        this.rightClick.addEventListener("click", () => this.scroll("right"));
    }

    initialize() {
        //Randomizes the initial loaded image. It will range from zero(inclusive) to the length (exlusive)
        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        let index = getRndInteger(0, this.images.length);
        this.images[index].style.display = "flex";
        return index;
    }

    // Method for scrolling images
    scroll(direction) {
        // Keeps the index from going higher than the max length or lower than 0
        if (direction === "left") {
            this.currentIndex--;
        } else this.currentIndex++;
        if (this.currentIndex < 0) {
            this.currentIndex = this.indexMax;
            return;
        } else if (this.currentIndex > this.indexMax-1) {
            this.currentIndex = 0;
            return;
        } else {
            this.images.forEach((currentValue, index) => {
                if (index === this.currentIndex) {
                    currentValue.style.display = "flex";
                } else {
                    currentValue.style.display = "none";
                }
            });
        }
    }
}
//Getting all the carousel elements
let carousel = document.querySelectorAll(".carousel").forEach(items => new Carousel(items));