let getHole = index => document.getElementById(`hole${index}`);
let dead = document.getElementById("dead");
let lost = document.getElementById("lost");

for(let i = 1; i <= 9; i++) {
    getHole(i).onclick = () => {
        if(getHole(i).className.includes("hole_has-mole")) {
           dead.textContent = Number(dead.textContent) + 1; 
        }
        else lost.textContent = Number(lost.textContent) + 1; 
        setTimeout(() => {
            if(dead.textContent == 10) {
                alert("Вы победили!");
                location.reload();
            } 
            else if (lost.textContent == 5) {
                alert("Вы приграли!");
                location.reload();
            };
            clearTimeout();
        }, 500);
    }
}
