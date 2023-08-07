let currentBlock = 0;
const firstCard = document.querySelector('.plant-in-line:first-child');
const parent = document.querySelector('.container-for-plant-in-line');
const allStyle =window.getComputedStyle(parent);
const gap = allStyle.gap;
let gapN = parseInt(gap);
let margN = parseInt(firstCard.clientWidth);
console.log(gapN);
let marginValue = margN+gapN;
console.log(marginValue);
// const marginValue=10;
function leafSlide(direction) {
    currentBlock += direction;
    if(currentBlock>7 || currentBlock<-1 )
    {
        currentBlock=0;
    }
    firstCard.style.marginLeft = -marginValue * currentBlock + 'px';
}

