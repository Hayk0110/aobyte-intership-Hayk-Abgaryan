function triangle(row)
{
    const div = document.createElement("div");
    div.className = "triangle"
    for (let i = 0; i < row; i++) {
        const pre = document.createElement("pre");
        let str = "";
        for (let j =0; j < row - i; j++){
            str += ' ';
        } ;
        for (let k = 0; k <= i; k++){
            str += '* ';
        };
        pre.innerText = str;
        div.appendChild(pre);  
    } 
    return div;
}

function rotate(row){
    const div = document.createElement("div");
    div.className = "rotate"
    for (let i = row-1; i >= 0; i--) {
        const pre = document.createElement("pre");
        let str = "";
        for (let j =0; j < row - i; j++){
            str += ' ';
        }; 
        for (let k = 0; k <= i; k++){
            str += '* ';
        };
        pre.innerText = str;
        div.appendChild(pre);
    } 
    return div;
}

export {triangle,rotate};