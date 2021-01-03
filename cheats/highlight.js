
const highLigthBase = function(){
    this.highlight = function(style, list, element, before, after){
         list = listMidifier(list);
         highligth(list, element, before, after);
    }
    const listMidifier = function(list){
        let out = [];
        for(const i of list){
            out.push(' '+i+',');
            out.push(' '+i+' ');
        }
    }
    const highligth = function(list, element, before, after){
        const html = element.innerHTML;
        element.innerHTML =  html.replace(
            (new RegExp(list.join("|"), "gi")), 
            function(x){
                return before+x+after; 
            }
        );
    }
}

