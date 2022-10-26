const storageMeter = document.querySelector(".storage-meter")
const storageLeft = document.querySelector(".storage-left")
const storageNumber = document.getElementById("left")
const point = document.querySelector(".point")

const storage = storageLeft.dataset.number;
window.getComputedStyle(storageMeter).height;

window.onload = function() {
    storageMeter.style.width = storageMeter.dataset.width;
    point.style.left = point.dataset.position;
    let gbCount = setInterval(() => {
        storageNumber.textContent++;
        if(storageNumber.textContent == storage){
            clearInterval(gbCount)
        }
    },10)
}