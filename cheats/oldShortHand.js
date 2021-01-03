const eCIR = function(n){ // element change id Remove
    try{
        document.getElementById(n).remove();
    }catch(e){
        GM.notification(n, 'eCIR');
    }
}
const eCC = function(){ // element change class 

}
const eCCR = function(n){ // element change class Remove
    try{
        document.getElementsByClassName(n)[0].remove();
    }catch(e){
         GM.notification(n, 'eCCR');
    };
}
const eCCS = function(n, s){ // element change class Style
    try{
        document.getElementsByClassName(n)[0].setAttribute(
            'style',
            s
        );          
    }catch(e){
         GM.notification(n, 'eCCS');
    };
}
const eCCa = function(){ // element change class 

}
const eCNS = function(n, s){ // element change class Style
    try{
        document.getElementsByTagName(n)[0].setAttribute(
            'style',
            s
        );          
    }catch(e){
    };
}
