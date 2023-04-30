/*---------------------------general-functions-----------------------------------*/
function getText(textToGet) {
    let text = document.getElementById(textToGet).value;
    return text;
}

function setStylesSmall(background,encrypt){
        let textInput = document.getElementById("text-input");
        let list = document.getElementById("list");
        let warning = document.getElementById("warning");
        let buttonEncrypt = document.getElementById("button-encrypt");
        let buttonDecrypt = document.getElementById("button-decrypt");
        /*----------------inputArea------------*/
        textInput.style.height = "624px";
        /*------------------warning-----------*/
        list.style.top = "840px";
        warning.style.top = "840px";
        /*----------------buttons-------------*/
        buttonEncrypt.style.top = "874px";
        buttonDecrypt.style.top = "965px";
        /*------div de fondo------*/
        background.style.height = "595px";
        background.style.top = "1096px";
        /*-------------output--------------*/
        encrypt.style.display = "block";
}

function setStyleNormal(encrypt,text) {
    let hide = document.getElementById("first-p");
    let hide1 = document.getElementById("second-p");
    let hide2 = document.getElementById("girl");
    hide.style.display = "none";
    hide1.style.display = "none";
    hide2.style.display = "none";
    copyButton.style.display = "block";
    encrypt.innerHTML = text;
}

/*---------------------------Text-Area------------------------------*/
function encryptText() {
    let text = getText("text-input");
    let answer = '';
    for(let i=0; i<text.length; i++) {
        let char = text.substring(i,i+1);
        if(char == "e") {
            answer = answer+"enter";
        }
        else if(char == "i"){
            answer = answer+"imes";
        }
        else if(char == "a"){
            answer = answer+"ai"
        }
        else if(char == "o"){
           answer = answer+"ober";
        }
        else if(char == "u"){
            answer = answer+"ufat";
        }
        else {
           answer = answer+char;
        }
    }
    return answer;
}

function writeEncrypt() {
    let encrypt = document.getElementById("text-output");
    let mediaQuery = window.matchMedia("(max-width:768px)");
    let mediaQuery2 = window.matchMedia("(max-width:376px)");
    let background = document.getElementById("textarea-background");
    let text = encryptText();
    if(Boolean(text) == false) {
        return alert("No hay mensaje que encriptar, por favor escriba uno");
    }
    if(mediaQuery2.matches) {
        setStylesSmall(background,encrypt);
    }
    else if(mediaQuery.matches) {
        background.style.height = "343px";
        encrypt.style.display = "block";
   }
    setStyleNormal(encrypt,text);
}

/*----------------------------copy---------------------------------------------- */
const copyButton = document.getElementById("button-copy");

copyButton.addEventListener('click',()=> {
    let text = getText("text-output");
    navigator.clipboard.writeText(text);
});


/*----------------------------------------------decrypt------------------------------------*/
function decryptText() {
    let text = getText("text-input");
    let answer = '';
    let index = 0;
    while(index < text.length) {
        let char = text.substring(index,index+1);
        if(char == "e" ) {
            let newIndex = text.indexOf("enter",index);
           if(newIndex == index) {
            answer = answer+"e";
            index = index+5;
           }else{
            index++;
            answer = answer+"e";
           }
        }
        else if(char == "i"){
            let newIndex = text.indexOf("imes",index);
           if(newIndex== index) {
            answer = answer+"i";
            index = index+4;
           }else{
            index++;
            answer = answer+"i";
           }
        }
        else if(char == "a"){
            let newIndex = text.indexOf("ai",index);
           if(newIndex== index) {
            answer = answer+"a";
            index = index+2;
           }else{
            index++;
            answer = answer+"a";
           }
        }
        else if(char == "o"){
            let newIndex = text.indexOf("ober",index);
           if(newIndex== index) {
            answer = answer+"o";
            index = index+4;
           }else{
            index++;
            answer = answer+"o";
           }
        }
        else if(char == "u"){
            let newIndex = text.indexOf("ufat",index);
           if(newIndex== index) {
            answer = answer+"u";
            index = index+4;
           }else{
            index++
            answer = answer+"u";
           }
        }
        else {
           answer = answer+char;
           index++;
        }
    }
    return answer;
}

const decryptButton = document.getElementById("button-decrypt");

decryptButton.addEventListener('click',() => {
    let encrypt = document.getElementById("text-output");
    let background = document.getElementById("textarea-background");
    let mediaQuery1 = window.matchMedia("(max-width:768px)");
    let mediaQuery2 = window.matchMedia("(max-width:376px)");
    let text = decryptText();
    if(Boolean(text) == false) {
        return alert("No hay mensaje que desencriptar, por favor escriba uno");
    }
    if(mediaQuery2.matches) {
        setStylesSmall(background,encrypt)
    }else if(mediaQuery1.matches && !mediaQuery2.matches) {
        background.style.height = "343px";
        encrypt.style.display = "block";
    }
    setStyleNormal(encrypt,text);
});