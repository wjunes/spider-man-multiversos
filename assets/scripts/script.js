function handleMouseEnter() {
    this.classList.add('s-card--hovered');
    document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave() {
    this.classList.remove('s-card--hovered');
    document.body.id = '';
}

function addEventListenersToCards() {
    const cardElements = document.getElementsByClassName('s-card');
    
    for (let index = 0; index < cardElements.length; index++) {
        const card = cardElements[index];
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    }
  

}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);

function selectCarouselItem(selectedButtonElement) {
   const selectedItem = selectedButtonElement.id;
   const carousel = document.querySelector('.s-cards-carousel');
   const transform = carousel.style.transform;
   const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i); //despues de match es una expresion regular.
    const rotateYDeg = -120 * (Number(selectedItem) - 1);
    const newTranform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);

    carousel.style.transform = newTranform;

    const activeButtonElement = document.querySelector('.s-controller__buttonS--active');
    activeButtonElement.classList.remove('.s-controller__buttonS--active');
    selectedButtonElement.classList.add('.s-controller__buttonS--active');
}

