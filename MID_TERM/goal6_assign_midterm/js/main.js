/*
	* Mid Terms for PWA-1
*/

var students= [];
var student1={name: ' Kareem Beazer',
              address: {street:' 1300 Douglas Circle', city:' Orlando', state:' FL', zipCode: 32812},
              GPA: [2.5, 3.5, 4.0]
              };
var student2={name: ' Jenny Bermudez',
              address: {street:' 1425 Sunny Isles', city:' Winter Park', state:' FL', zipCode: 32792},
              GPA: [2.0, 3.2, 2.8]
};
var student3={name: ' Gladys Perez',
              address: {street:' 235 Summer Lane', city:' Pine Hills', state:' FL', zipCode: 32822},
              GPA: [2.5, 3.5, 4.0]
};
students.push(student1, student2);
function conLogger(dataArray){
    var sortArray= [];
    for(i=0;i<dataArray.length;i++){
        dataArray[i]=sortArray;
        for(keys in sortArray[i]){
            console.log(keys);
        }
    }

//    console.log('Name:'+''+dataArray.name);
//    console.log('Address:'+''+dataArray.address.street+''+dataArray.address.city+''+dataArray.address.state+' '+dataArray.address.zipCode);
//    console.log('GPA:'+' '+dataArray.GPA[0]+', '+dataArray.GPA[1]+', '+dataArray.GPA[2]);
}
conLogger(student1);
conLogger(student2);
console.log(conLogger(students));
(function(){
    function addData(obj){
        students.push(obj);
    }
    addData(student3);
    conLogger(student3);
    var infoId= document.getElementById("info_box");
    var nameId= document.getElementById("name");
    var addressId= document.getElementById("address");
    var gpaId= document.getElementById("gpa");
    var dateId= document.getElementById("date");
    var gpaavgId= document.getElementById("gpaavg");
    infoId.onclick= function dataDisplay(){
        nameId.innerHTML= 'Name: '+students[0].name;
        addressId.innerHTML= 'Address: '+students[0].address.street;
        gpaId.innerHTML= 'GPA: '+students[0].GPA;
        gpaavgId.innerHTML= 'Average GPA: '+averageGPA(students[0].GPA);
        dateId.innerHTML= 'Date: '+month+'/'+nDate+'/'+year
    };
    function averageGPA(arr){
        result= 0;
        for(i=0;i<arr.length;i++){
            result+= arr[i];
        }return (result/arr.length).toFixed(2);
    }
    var date= new Date();
    var month= date.getMonth();
    var nDate= date.getDate();
    var day= date.getDay();
    var year= date.getFullYear();

})();
