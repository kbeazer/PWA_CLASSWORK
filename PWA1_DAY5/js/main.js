console.log('started');

var car= {color: 'silver',
          model:'ford',
          make: 'escort',
          move: function(){
              console.log('I am moving!');
          }};

for(var keys in car){
    console.log(keys,car[keys]);
}

var myDog= {color: 'black',
            breed: 'pit bull',
            name: 'Teddy',
            bark: function(){
                console.log('Wuff Wuff!!');
            }};

var herDog= {color: 'white',
             breed: 'pug',
             name: 'Molly',
             bark: function(){
                 console.log('I can bark too!!');
             }};

var myDogs= [];
myDogs.push(myDog, herDog);
console.log(myDogs);