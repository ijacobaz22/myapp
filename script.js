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

trump = ""
newpassword = ""
initalpassword = ""
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
    "d":100,    
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
  var asciidictreverse = {

  32: " ",
  33: "!",
  34: "+",
  35: "#",
  36: "$",
  37: "%",
  38: "&", 
  39: "'",
  40: "(",
  41: ")",
  42: "*",
  43: "+",
  44: ":",
  45: "-",
  46: ".",
  47: "/",
  48: "0",
  49: "1",
  50: "2",
  51: "3",
  52: "4",
  53: "5",
  54: "6",
  55: "7",
  56: "8",
  57: "9",
  58: ":",
  59: ";",
  60: "<",
  61: "=",
  62: ">",
  63: "?",
  64: "@",
  65: "A",
  66: "B",
  67: "C",
  68: "D",
  69: "E",
  70: "F",
  71: "G",
  72: "H", 
  73: "I",
  74: "J",
  75: "K",
  76: "L",
  77: "M",
  78: "N",
  79: "O",
  80: "P",
  81: "Q",
  82: "R",
  83:"S",
  84:"T",
  85:"U",
  86:"V",
  87:"W", 
  88:"X",
  89:"Y",
  90:"Z", 
  91:"[",
  92:"\ ",
  93:"]",
  94:"^",
  95:"_",
  96:"`",
  97:"a",
  98:"b", 
  99:"c", 
  100:"d",
  101:"e",
  102:"f",
  103:"g",
  104:"h", 
  105:"i",
  106:"j",
  107:"k",
  108:"l",
  109:"m", 
  110:"n", 
  111:"o", 
  112:"p", 
  113:"q", 
  114:"r", 
  115:"s", 
  116:"t", 
  117:"u",
  118:"v",
  119:"w", 
  120:"x", 
  121:"y", 
  122:"z", 
  123:"{", 
  124:"|", 
  125:"}",
  126 :"~",
  };
var misterlister = ([32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126])   

// initialize ends


function GeneratePassword(password) {
//  var password = prompt("Enter a password");
  console.log(password)
  var arraya = ([]);
  var securityarray = ([]);
  localStorage.setItem("vOneLocalStorage", securityarray);
  var length = password.length-1;
  var i;
  for (i = 0; i <= length; i++) {
    var stringgetter = password.substring(i,i+1);
    var meow = Math.floor((Math.random() * 100) + 1);
    securityarray.push(meow);
    var bottle = asciidict[stringgetter];
    arraya.push(bottle*meow);
  }
  console.log(arraya);
  console.log(securityarray);
  var z;
  var yzhao = "";
  for (z = 0; z <= arraya.length-1; z++) {
      yzhao = yzhao + arraya[z];
  }
  console.log(yzhao);
  var powert;
  for (powert = 0; powert <= yzhao.length-2; powert+=2) {
    var spagoel = yzhao.substring(powert,powert+2);
    spagoel = Number(spagoel)
    console.log(spagoel)
    if (misterlister.includes(spagoel)) {
      trump = asciidictreverse[spagoel];
      newpassword = yzhao.replace(spagoel,trump);
      yzhao = newpassword
      console.log(newpassword);
      console.log("iterated")
    }
  }
  console.log(newpassword);
  return newpassword
}
var hasChanged = false
var passwordElement = document.querySelector('input[type=password]');

if (passwordElement) {
    passwordElement.addEventListener('blur', function() {
        if (!hasChanged) {
            passwordElement.value = GeneratePassword(passwordElement.value);
            hasChanged = true
        }
    })
    
}





/* only if needed - very glitchy and not stable
function DecryptPassword(hardcorer) {
  var doge;
  for (doge = 0; doge < hardcorer.length; doge += 1); {
    var sarul = hardcorer.substring(doge,doge+2)
    sarul = String(sarul)
    console.log(sarul)
    var asciidict_keys = Object.keys(asciidict)
    if (asciidict_keys.includes(sarul)) {
      var obama = asciidict[sarul]
      initalpassword = initalpassword + obama
      doge += 1
    }
    else {
      initalpassword += sarul
    }
    console.log(initalpassword)
    console.log("iterated")
  }
}
console.log("DECRYPTION BEGINS HERE GOGOGOGOGOOGO")
DecryptPassword(newpassword)
*/