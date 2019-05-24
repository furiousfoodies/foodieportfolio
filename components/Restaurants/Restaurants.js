// // Removing restaurants that you don't want
// class RestButton {
//     constructor(buttonElement){
//         this.buttonElement = buttonElement;
//         this.delRestaurant = document.querySelectorAll(".removebtn");
//         this.stampRestaurant = document.querySelectorAll(".stampbtn");
//         this.restaurants = document.querySelectorAll(".restaurant");
//         this.restaurants = Array.from(this.restaurants).map(card => new TabCard(card));
//         this.buttonElement.addEventListener("click", () => this.delCard());
//     }
    
//     //Delete the card
//     delCard(){
//         const cards = document.querySelector(".removebtn");
//         cards.style.display = "none";
//         }

//     //Stamp the card    
// }

// class TabCard {
//     constructor(cardElement) {
//         this.cardElement = cardElement;
//     } 
// }

// let buttons = document.querySelectorAll(".buttons").forEach(button => new RestButton(button));