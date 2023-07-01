import * as DOM from "./DomElements.js";

export default function el(type, attrs, children) {
    switch (type) {
        case "div":
            return new DOM.DivElement(type, attrs, children);
            break;
        case "span":
            return new DOM.SpanElement(type, attrs, children);
            break;
        case "ul":
            return new DOM.UlElement(type, attrs, children);
            break;
        case "li":
            return new DOM.LiElement(type, attrs, children);
            break;
        case "form":
            return new DOM.FormElement(type, attrs, children);
            break;
        case "label":
            return new DOM.LabelElement(type, attrs, children);
            break;
        case "br":
            return new DOM.BrElement(type, attrs, children);
            break;
        case "input":
            return new DOM.InputElement(type, attrs, children);
            break;
        default:
            return new DOM.DomElement(type,attrs,children);
            break;
    }
}