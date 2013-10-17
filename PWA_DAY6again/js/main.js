/**
 * Created with JetBrains WebStorm.
 * User: KBmac
 * Date: 10/15/13
 * Time: 11:01 AM
 * To change this template use File | Settings | File Templates.
 */


(function(){
    var interval= setInterval(update, 1000/30);
    function Car(n,m,c){
        this.name= n;
        this.model= m;
        this.color= c;
    }
    Car.prototype.move= function(){
        console.log(this.name+"'s car is moving");
    };
    Car.prototype.stop= function(){
        console.log(this.name+"'s car is stopping");
    };
    function update(){
        console.log('I am running.........');
    }
    var cars= [];
    var myCar= new Car('Scott','Toyota','Silver');
    var yourCar= new Car('Kareem','VW', 'Black');
    var jCar= new Car('Julian','Ford', 'Green');

    for(i=0;i<50;i++){
        var car= new Car('car'+i, 'something', 'something');
        cars.push(car);
    }
    function update(){
        cars.forEach(function(e){
            e.update();
        })
    }
    cars.push(myCar,yourCar,jCar);
    cars.forEach(function(e){
        console.log(e.color)
    })

})();