
const highLigthBase = function(){ // not a miss spell  
    this.highlight = function(list, element, before, after){
        list = listMidifier(list);
        highligth(list, element, before, after);
    };
    const listMidifier = function(list){ // have to rethink need more rule
        let out = [];
        for(const i of list){
            out.push(' '+i+',');
            out.push(' '+i+' ');
        }
    };
    const highligth = function(list, element, before, after){
        const html = element.innerHTML;
        element.innerHTML =  html.replace( // the replace is fast but noit effective so 
            (new RegExp(list.join('|'), 'gi')), 
            function(x){
                return before+x+after; 
            }
        );
    };
};


const highLigth = new highLigthBase();
