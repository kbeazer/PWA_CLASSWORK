/**
 * Created with JetBrains WebStorm.
 * User: KBmac
 * Date: 10/1/13
 * Time: 10:18 AM
 * To change this template use File | Settings | File Templates.
 */

var totalSeconds= 127;
var minutes= Math.floor(totalSeconds/60);
var seconds= totalSeconds%60;
var string= (minutes<10 ? '0'+minutes : '')+minutes+':'+(seconds<10 ? '0'+seconds : '')+seconds;
console.log(string)
