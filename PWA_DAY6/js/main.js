/**
 * Created with JetBrains WebStorm.
 * User: KBmac
 * Date: 10/15/13
 * Time: 10:26 AM
 * To change this template use File | Settings | File Templates.
 */

(function(){
    var dom={
        output: document.querySelector("#output"),
        input: document.querySelector("#input"),
        button: document.querySelector("button")
    };
    dom.button.addEventListener("click", onClick);
    var data= '';
    var name= 'kareem';
    function onClick(e){
        data= dom.input.value;
        if(data!== name){
            dom.output.innerHTML= 'Please enter your name to continue'
        }else{
            dom.output.innerHTML= 'You have spelled your name correctly!!!';

        }
        dom.button.removeEventListener("click", onClick, false);
    }
})();
