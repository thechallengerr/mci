let courses =
    [
        {
            name: 'PHP',
            cost: 200,
            duration: 3000,
        },
        {
            name: 'Javascript',
            cost: 1000,
            duration: 30000,
        },
        {
            name: 'React JS',
            cost: 888,
            duration: 29383,
        },
        {
            name: 'Python',
            cost: 432,
            duration: 10000,
        }
    ];

var playerImage = document.querySelector('.player');
// playerImage.addEventListener('ho')
// console.log()



// console.log(onImageHover)

document.querySelectorAll('.fixture').forEach(function(fixture){
    fixture.classList.add('zoom')
})


var mtElm = document.querySelector('.list-squad').children

for (let i = 0; i < mtElm.length; i++) {
    mtElm[i].classList.add('mt-44') 
}
var modal = document.querySelector('.modal');
    console.log(modal)
var showModal = function (){
    modal.style.display='block'
}

var closeModal = function(){
    if(modal.style.display='block') {
        modal.style.display='none'
    }
}
