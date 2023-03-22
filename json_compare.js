//1)TWO JSON Compare
var user = { name: "person", age: 5 }; 
var user1 ={age: 5, name: "person"}; 
// var firstName = "Manikandan";
// var lastName="Anbalagan";
function isEqual(user, userl) { 
//console.log(user);
//console.log(user1);
var userKeys = Object.keys(user);
var user1Keys = Object.keys(userl);
//console.log(userKeys);
//console.log(user1Keys.length);
//console.log(user['name']);
if (userKeys.length != user1Keys.length){
    return false;
}
for (var userKey of userKeys) {
     if (user[userKey] != user1 [userKey]) {
return false;
}
}
return true;
}
console.log(isEqual(user,user1));
