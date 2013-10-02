// Kareem K. Beazer
// 10/1/13
// The Dual Assignment

var leftFighter= 'SOULJAH BLESS';
var rightFighter= 'SPLIT SOUL';
var leftHealth= 100;
var rightHealth= 100;
var leftDamage= 45;
var rightDamage= 45;
var round= 0;

function kingFighter(){
    console.log('BEGIN!!!');
    alert(leftFighter+': '+leftHealth+'    VS.    '+rightFighter+': '+rightHealth);
    for(i=0;i<10;i++){
        player1Hit= leftDamage/2;
        player2Hit= rightDamage/2;
        player1Damage= Math.floor(Math.random()*player1Hit);
        player2Damage= Math.floor(Math.random()*player2Hit);
        leftHealth-=player1Damage;
        rightHealth-=player2Damage;
        console.log(leftFighter+': '+leftHealth+'   '+rightFighter+': '+rightHealth);
        var result= winnerSelector();
        console.log(result);

        if(result=== 'no winner'){
            round++;
            alert(leftFighter+': '+leftHealth+'   ROUND '+round+' OVER   '+rightFighter+': '+rightHealth);
        }else{
            alert(result);
            break;
        }
}

function winnerSelector(){
    var result= 'no winner';
    if(leftHealth<1 && rightHealth<1){
        result= 'Draw!!'
   }else if(leftHealth<1){
            result= rightFighter+' '+'wins!!!';
   }else if(rightHealth<1){
                result= leftFighter+' '+'wins!!!'
            }
   return result;
    }
}
kingFighter();
