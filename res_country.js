//3)USE THE SAME COUNTRIES AND PRINT ALL COUNTRIES,REGION,SUBREGION,POPULATION:
var arr=[{name: "Vijay", age:22},{name: "Madhaiyan", age:32}]; 
// console.log("Sample:"+ arr[0]).name + " " + array[0].age);
var xhr = new XMLHttpRequest();//Create Object
xhr.open ('GET', 'https://restcountries.com/v3.1/all');//Access API from the server 
xhr.responseType = 'json';//Set the response type 
xhr.send();//Make sure response is sent back
xhr.onload = function () { //Execute a function once all the leading and return funcitonality is completed
var responseObj = xhr. response;
 for (var i=0;i<responseObj.length;i++){
    console.log(responseObj[i].name["common"]);
    console.log(responseObj[i].region);
    console.log(responseObj[i].subregion);
    console.log(responseObj[i].population);

}
}