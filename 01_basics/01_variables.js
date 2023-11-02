const accountId = 249090;
let accountMail = "altaf@google.com";
var accountPassword = "12345";
accountCity = "Delhi";

let account ;
// accountId = 3443; // not allowed

/* Prefer not to use var 
because of issue in block scope and functional scope*/ 

accountMail = "Blue@google.com";
accountPassword = "2344325";
accountCity = "Mumbai";

console.log(accountId);

console.table([accountMail, accountPassword, accountCity, account]);