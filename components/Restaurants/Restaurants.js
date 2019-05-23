class TabLink {
    constructor(tabElement) {
        this.tabElement = tabElement;
        this.tabData = this.tabElement.dataset.tab;
        if (this.tabData == "all") {
            this.cards = document.querySelectorAll(".restaurant");
        } else {
            this.cards = document.querySelectorAll(`.restaurant[data-tab='${this.tabData}']`);
        }
        this.cards = Array.from(this.cards).map(card => new TabCard(card));
        this.tabElement.addEventListener("click", () => this.selectTab());
    }

    selectTab() {
        const tabs = document.querySelectorAll(".tab");
        tabs.forEach(item => {
            item.classList.remove("active-tab");
        })
        const cards = document.querySelectorAll(".restaurant");
        cards.forEach(item => {
            item.style.display = "none";
        })
        this.tabElement.classList.add("active-tab");
        this.cards.forEach(card => card.selectCard());
    }
}

class TabCard {
    constructor(cardElement) {
        this.cardElement = cardElement;
    }
    selectCard() {
        this.cardElement.style.display = "flex";
    }
}

let tabs = document.querySelectorAll(".tab").forEach(tab => new TabLink(tab));

// $(".textbuttons").flip({
//     axis: 'x',
//     trigger: 'hover'
//   });

<<<<<<< HEAD
//   var flipimg = document.querySelectorAll(".textbuttons")
// flipimg.addEventListener("click",() =>{
//     flipimg.toggletextbuttons("flip");
// })
=======
// var flipimg = document.querySelectorAll(".textbuttons")
// flipimg.addEventListener("click",() =>{
//     flipimg.toggletextbuttons("flip");
// });
>>>>>>> 977c57f6addafad60595d52188b2252b5125b030
