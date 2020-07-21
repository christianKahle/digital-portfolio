var dice = ["d20","d12","d10","d8","d6","d4"];
function createRounds(){
    var input = document.getElementById("nRounds");
    var rounds = document.getElementById("rounds");
    var nRounds = parseInt(input.value);
    while (rounds.childElementCount > nRounds) {
        rounds.removeChild(rounds.lastChild);
    }
    for (i = 1+rounds.childElementCount; i <= nRounds; i++) {
        var newDiv = document.createElement("div");
        newDiv.classList.add("row"); newDiv.classList.add("center");
        var newContent = document.createTextNode("Round "+i+": ");
        newDiv.appendChild(newContent);
        var dicenum; var die;
        for (d = 0;d<6;d++) {
            dicenum = document.createElement("input");
            dicenum.classList.add("right-align");
            dicenum.classList.add("grey");
            dicenum.classList.add("darken-4");
            dicenum.max=99;
            dicenum.min=0;
            dicenum.value=0;
            dicenum.id=i+""+dice[d];
            dicenum.type="number";
            newDiv.appendChild(dicenum);
            if (d == 6) {
                die = document.createTextNode(dice[d]);
            }
            else {
                die = document.createTextNode(dice[d]+" + ");
            }
            
            newDiv.appendChild(die);
        }
        dicenum = document.createElement("input");
        dicenum.classList.add("right-align");
        dicenum.classList.add("grey");
        dicenum.classList.add("darken-4");
        dicenum.max=99;
        dicenum.min=-99;
        dicenum.value=0;
        dicenum.id="n"+i;
        dicenum.type="number";
        newDiv.appendChild(dicenum);
        rounds.insertBefore(newDiv,null);
    }
}
function totalRounds(){
    var rounds = document.getElementById("rounds");
    var nRounds = rounds.childElementCount;
    var d20; var d12; var d10; var d8; var d6; var d4;
    var total = 0;
    for (i = 1;i<=nRounds; i++) {
        d20 = parseInt(document.getElementById(i+"d20").value);
        d12 = parseInt(document.getElementById(i+"d12").value);
        d10 = parseInt(document.getElementById(i+"d10").value);
        d8 = parseInt(document.getElementById(i+"d8").value);
        d6 = parseInt(document.getElementById(i+"d6").value);
        d4 = parseInt(document.getElementById(i+"d4").value);
        n = parseInt(document.getElementById("n"+i).value);
        total = total+d20*10.5+d12*6.5+d10*5.5+d8*4.5+d6*3.5+d4*2.5+n;
    }
    var tbtn = document.getElementById("total");
    tbtn.textContent =  "Avg Total: "+total+" | Avg/Round: "+total/nRounds;
}