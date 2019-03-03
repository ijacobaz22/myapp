// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.

function GeneratePassword() {
  var asciidict = {
    "~": 621,    
    "}":521,
    "|":421, 
    "{":321,
    "z":221,
    "y":121,
    "x":021,    
    "w":911,    
    "v":811,    
    "u":711,    
    "t":611,    
    "s":511,    
    "r":411,    
    "q":311,    
    "p":211,    
    "o":111,    
    "n":011,    
    "m":901,    
    "l":801,    
    "k":701,    
    "j":601,    
    "i":501,    
    "h":401,   
    "g":301,   
    "f":201,    
    "e":101,   
    "d":1,    
    "c":99,    
    "b":89,    
    "a":79,    
    "`":69,    
    "_":59,    
    "^":49,    
    "]":39,    
    "\ ":29,    
    "[":19,    
    "Z":09,    
    "Y":98,    
    "X":88,    
    "W":78,    
    "V":68,    
    "U":58,    
    "T":48,    
    "S":38,    
    "R":28,    
    "Q":18,    
    "P":08,    
    "O":97,    
    "N":87,    
    "M" :77,    
    "L" :67,    
    "K" :57,    
    "J" :47,    
    "I" :37,    
    "H" :27,    
    "G" :17,    
    "F" :07,    
    "E" :96,    
    "D" :86,    
    "C" :76,    
    "B" :66,    
    "A" :56,    
    "@" :46,    
    "?" :36,    
    ">" :26,    
    "=" :16,    
    "<" :06,    
    ";" :95,    
    ":" :85,    
    "9" :75,    
    "8" :65,    
    "7" :55,    
    "6" :45,    
    "5" :35,    
    "4" :25,    
    "3" :15,    
    "2" :05,    
    "1" :94,    
    "0" :84,    
    "/" :74,    
    "." :64,    
    "-" :54,    
    ":" :44,    
    "+" :34,    
    "*" :24,    
    ")" :14,
    "(" :04,
    "'" :93,
    "&" :83,
    "%" :73, 
    "$" :63, 
    "#" :53,   
    "!" :33,    
    " " :23,
  };  
  var password = prompt("Enter a password");
  var arraya = ([]);
  var securityarray = ([]);
  localStorage.setItem("vOneLocalStorage", securityarray);
  var length = password.length-1;
  var i;
  for (i = 0; i <= length; i++) {
    var stringgetter = password.substring(i,i+1);
    var meow = Math.floor((Math.random() * 10) + 1);
    securityarray.push(meow)
    var bottle = asciidict[stringgetter]
    arraya.push(bottle);
  }
  console.log(arraya);
  console.log(securityarray)
}
GeneratePassword();