const storageMeter = document.querySelector(".storage-meter")
const storageLeft = document.querySelector(".storage-left")
const storageUsed = document.querySelector(".storage-used")
const storageNumber = document.getElementById("left")
const point = document.querySelector(".point")

const storage = storageLeft.dataset.number;
const used = storageUsed.dataset.number;
window.getComputedStyle(storageMeter).height;

window.onload = function() {
    storageMeter.style.width = storageMeter.dataset.width;
    point.style.left = point.dataset.position;

    let gbUsed = setInterval(() => {
        storageUsed.textContent++;
        if(storageUsed.textContent == used) {
            clearInterval(gbUsed)
        }
    })

    let gbCount = setInterval(() => {
        storageNumber.textContent++;
        if(storageNumber.textContent == storage){
            clearInterval(gbCount)
        }
    },10)
}




