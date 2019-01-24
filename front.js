var cards = [
    { name: 'ZECA', img: 'images/zeca.jpg',liver:5, code:0,yoga:1},
    { name: 'MATEUS', img:'images/mateus.jpg', liver:3, code:3, yoga:0},
    { name: 'RODRIGO', img: 'images/rodrigo.jpg', liver:0, code:4, yoga:2},
    { name: 'GUILHERME', img: 'images/guilherme.jpg', liver:2, code:3, yoga:1},
    { name: 'GABE', img: 'images/gabe.jpg', liver:2, code:4, yoga:0},
    { name: 'THIS DUDE', img: 'images/steeve.jpg',liver:1, code:5,yoga:0},
    { name: 'DHALSIM', img:'images/dhalsim.jpg', liver:1, code:0, yoga:5},
    { name: 'LEIBNIZ', img: 'images/leibniz.jpg', liver:2, code:3, yoga:3},
    { name: 'HEGEL', img: 'images/hegel.jpg', liver:3, code:2, yoga:0},
    { name: 'HEIDEGGER', img: 'images/heidegger.jpg', liver:3, code:0, yoga:1},
]

const pt = document.getElementById('points');
const rd = document.getElementById('rounds');
const ale = document.getElementById('alert');
const c2Img = document.getElementById('c2Img');
const c2Liver = document.getElementById('c2Liver');
const c2Code = document.getElementById('c2Code');
const c2Yoga = document.getElementById('c2Yoga');
const c2bg = document.getElementById('card2');
const c2Name = document.getElementById('c2Name');
const c1Img = document.getElementById('c1Img');
const c1Liver = document.getElementById('c1Liver');
const c1Code = document.getElementById('c1Code');
const c1Yoga = document.getElementById('c1Yoga');
const c1bg = document.getElementById('card1');
const c1Name = document.getElementById('c1Name');

c2Back = function (){
    c2Img.style.visibility = 'hidden';
    c2Liver.style.visibility = 'hidden';
    c2Code.style.visibility = 'hidden';
    c2Yoga.style.visibility = 'hidden';
    c2bg.style.backgroundImage = "url('images/card-bk.jpg')";
    c2Name.style.visibility = 'hidden';
}

c1Back = function (){
    c1Img.style.visibility = 'hidden';
    c1Liver.style.visibility = 'hidden';
    c1Code.style.visibility = 'hidden';
    c1Yoga.style.visibility = 'hidden';
    c1bg.style.backgroundImage = "url('images/card-bk.jpg')";
    c1Name.style.visibility = 'hidden';
}

c2Front = function (index){
    c2Img.style.visibility = 'visible';
    c2Liver.style.visibility = 'visible';
    c2Code.style.visibility = 'visible';
    c2Yoga.style.visibility = 'visible';
    c2bg.style.backgroundImage = "url('images/card-ft.jpg')";
    c2Name.style.visibility = 'visible';
    c2Img.innerHTML = "<img src=" + cards[index].img + ">";
    c2Name.innerText = cards[index].name;    
    c2Liver.innerText = "Liver Power: " + cards[index].liver;
    c2Code.innerText = "Coding Skills: " + cards[index].code;
    c2Yoga.innerText = "Yoga Fire: " + cards[index].yoga;
}

c1Front = function (index){
    c1Img.style.visibility = 'visible';
    c1Liver.style.visibility = 'visible';
    c1Code.style.visibility = 'visible';
    c1Yoga.style.visibility = 'visible';
    c1bg.style.backgroundImage = "url('images/card-ft.jpg')";
    c1Name.style.visibility = 'visible';
    c1Img.innerHTML = "<img src=" + cards[index].img + ">";
    c1Name.innerText = cards[index].name;    
    c1Liver.innerText = "Liver Power: " + cards[index].liver;
    c1Code.innerText = "Coding Skills: " + cards[index].code;
    c1Yoga.innerText = "Yoga Fire: " + cards[index].yoga;
    c1Liver.onmouseenter = function(){
        c1Liver.style.backgroundColor = '#F0D800';
    };
    c1Liver.onmouseout = function(){
        c1Liver.style.backgroundColor = 'transparent';
    };
    c1Code.onmouseenter = function(){
        c1Code.style.backgroundColor = '#F0D800';
    };
    c1Code.onmouseout = function(){
        c1Code.style.backgroundColor = 'transparent';
    };
    c1Yoga.onmouseenter = function(){
        c1Yoga.style.backgroundColor = '#F0D800';
    };
    c1Yoga.onmouseout = function(){
        c1Yoga.style.backgroundColor = 'transparent';
    };
}

function alertoff(){
    ale.style.backgroundColor = 'transparent';
    ale.style.color = 'transparent';
    ale.innerText = '';
};
function alertW(){
    ale.innerText = 'ROUND WON';
    ale.style.backgroundColor = 'green'
    ale.style.color = 'white';
};
function alertL(){
    ale.innerText = 'ROUND LOST';
    ale.style.backgroundColor = 'red'
    ale.style.color = 'white';
};
function alertLL(){
    ale.innerText = 'YOU LOOSE!';
    ale.style.backgroundColor = 'black'
    ale.style.color = 'white';
};
function alertWW(){
    ale.innerText = 'YOU WIN!';
    ale.style.backgroundColor = 'white'
    ale.style.color = 'black';
};

alertoff();
c1Back();
c2Back();


document.getElementsByTagName('button')[0].onclick = function() {
    let game= new Game();
    game.shuffleCards(cards);
    c1Front(game.count);
    game.points = 0;
    game.rounds = 0;
    game.count = 0;
    pt.innerText = 'WINNING ROUNDS: ' + game.points;
    rd.innerText = 'ROUNDS: ' + game.rounds;

    c1Liver.onclick = function (){
        c2Front(game.count+1);
        c2Liver.style.backgroundColor = 'black';
        game.round(cards[game.count].liver,cards[game.count+1].liver); 
        pt.innerText='WINNING ROUNDS: ' + game.points;
        rd.innerText='ROUNDS: ' + game.rounds;       
        if (cards[game.count].liver > cards[game.count+1].liver) {
            alertW();
        } else { 
            alertL();
        }
        game.count += 2;
        setTimeout(function(){
            alertoff();
            if (game.isFinished()){
                c1Back();
                c2Back();
                setInterval (function () {
                    if (game.points > 2) {
                        alertWW();
                    } else{
                        alertLL();
                    }
                    setTimeout(function(){
                        alertoff();
                    },500);
                },1000);
            } else {
                c2Liver.style.backgroundColor = 'transparent';
                c1Front(game.count);
                c2Back();
            };
        },2500);
    };

    c1Code.onclick = function (){
        c2Front(game.count+1);
        c2Code.style.backgroundColor = 'black';
        game.round(cards[game.count].code,cards[game.count+1].code); 
        pt.innerText='WINNING ROUNDS: ' + game.points;
        rd.innerText='ROUNDS: ' + game.rounds;       
        if (cards[game.count].code > cards[game.count+1].code) {
            alertW();
        } else { 
            alertL();
        }
        game.count += 2;
        setTimeout(function(){
            alertoff();
            if (game.isFinished()){
                c1Back();
                c2Back();
                setInterval (function () {
                    if (game.points > 2) {
                        alertWW();
                    } else{
                        alertLL();
                    }
                    setTimeout(function(){
                        alertoff();
                    },500);
                },1000);
            } else {
                c2Code.style.backgroundColor = 'transparent';
                c1Front(game.count);
                c2Back();
            };
          },2500); 
    }

    c1Yoga.onclick = function (){
        c2Front(game.count+1);
        c2Yoga.style.backgroundColor = 'black';
        game.round(cards[game.count].yoga,cards[game.count+1].yoga); 
        pt.innerText='WINNING ROUNDS: ' + game.points;
        rd.innerText='ROUNDS: ' + game.rounds;       
        if (cards[game.count].yoga > cards[game.count+1].yoga) {
            alertW();
        } else { 
            alertL();
        }
        game.count += 2;
        setTimeout(function(){
            alertoff();
            if (game.isFinished()){
                c1Back();
                c2Back();
                setInterval (function () {
                    if (game.points > 2) {
                        alertWW();
                    } else{
                        alertLL();
                    }
                    setTimeout(function(){
                        alertoff();
                    },500);
                },1000);
            } else {
                c2Yoga.style.backgroundColor = 'transparent';
                c1Front(game.count);
                c2Back();
            };
          },2501); 
    }
}