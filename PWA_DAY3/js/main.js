/**
 * Created with JetBrains WebStorm.
 * User: KBmac
 * Date: 10/5/13
 * Time: 9:22 AM
 * To change this template use File | Settings | File Templates.
 */

var dice= Math.floor(Math.random()*11+2);

switch(dice){
    case 2:
        console.log('you rolled a two');
        break;
    case 3:
        console.log('you rolled a three');
        break;
    default:
        console.log('you rolled something else');
}
