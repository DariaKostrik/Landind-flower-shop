const marginValue=250;
let currentBlock=0;
const firstCard=document.getElementById().querySelector('.category-card:first-child') 

// const container = document.querySelector('.container-with-goods');

function leafSlide(direction){
currentBlock+=direction;
    firstCard.style.marginLeft =-marginValue*currentBlock +'px';
// if(currentBlock>4){
//     currentBlock=0;
//     }
}


