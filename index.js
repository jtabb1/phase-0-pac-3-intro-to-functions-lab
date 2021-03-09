let string1 = "xx";
let string2 = "XX";
let string3 = "I love you, Grandma.";

function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase())
    //return;
}

function logWhisper(string) {
    console.log(string.toLowerCase())
    // return;
}

function sayHiToGrandma(string) {
    let returnString;

    switch (string) {
        case `I love you, Grandma.`:
            returnString = `I love you, too.`;
            break;
        case string.toLowerCase():
            returnString = `I can't hear you!`;
            break;
        case string.toUpperCase():
            returnString = `YES INDEED!`;
            break;
        default:
            returnString = `Oh, okay.`;
    }

    return returnString;
}