/**
 * Created with JetBrains WebStorm.
 * User: KBmac
 * Date: 10/12/13
 * Time: 9:43 AM
 * To change this template use File | Settings | File Templates.
 */
var date= new Date();
var month= date.getMonth();
var nDate= date.getDate();
var day= date.getDay();
var year= date.getFullYear();

console.log(month+'/'+nDate+'/'+year);

var days= ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
var months= ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

console.log(days[day]+', '+months[month]+' '+nDate+', '+year);


document.querySelector('.buttonred').innerHTML= 'Done!!!';