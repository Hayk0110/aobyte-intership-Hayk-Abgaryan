export class DomElement{
    constructor(type,attrs,children){
        this.type = type;
        this.attrs = attrs;
        this.children = children
    }

    draw(){
        const el = document.createElement(this.type);
        if(this.attrs){
            for( let attr in this.attrs){
                el.setAttribute(attr,this.attrs[attr]);
            }
        }
        if(this.children instanceof DomElement){
            el.appendChild(this.children.draw());
        }else if(Array.isArray(this.children)){
            this.children.map(child=>{
                el.appendChild(child.draw());
            })
        }
        else{
            el.innerText = this.children 
       }
       return el;
    }
}

export class DivElement extends DomElement{
    constructor(type,attrs,children){
        super(type,attrs,children);
    }
}

export class SpanElement extends DomElement{
    constructor(type,attrs,children){
        super(type,attrs,children);
    }
}

export class UlElement extends DomElement{
    constructor(type,attrs,children){
        super(type,attrs,children);
    }
}

export class LiElement extends DomElement{
    constructor(type,attrs,children){
        super(type,attrs,children);
    }
}

export class FormElement extends DomElement{
    constructor(type,attrs,children){
        super(type,attrs,children);
    }
}

export class LabelElement extends DomElement{
    constructor(type,attrs,children){
        super(type,attrs,children);
    }
}

export class BrElement extends DomElement{
    constructor(type,attrs,children){
        super(type,attrs,children);
    }
}

export class InputElement extends DomElement{
    constructor(type,attrs,children){
        super(type,attrs,children);
    }
}