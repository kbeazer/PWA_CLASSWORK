// Kareem K. Beazer
// 10/1/13
// The Dual Assignment

function kingFighter(){
    var leftFighter= 'Souljah Bless';
    var rightFighter= 'Split Soul';
    var leftHealth= 100;
    var rightHealth= 100;
    var leftDamage= 25;
    var rightDamage= 25;
    var round= 0;
    console.log('BEGIN!!!');
    function roundAdvance(){
        alert(leftFighter+':'+leftHealth+'    VS'    +rightFighter+':'+rightHealth);
        for(i=0;i<10;i++){
            player1Hit= leftDamage/2;
            player2Hit= rightDamage/2;
            player1Damage= Math.floor(Math.random()*player1Hit);
            player2Damage= Math.floor(Math.random()*player2Hit);
            leftHealth-=player1Damage;
            rightHealth-=player2Damage;
            console.log(leftFighter+':'+leftHealth+''+rightFighter+':'+rightHealth);

            var result= winnerSelector();
        }
    }
}
function winnerSelector(){
    re
}