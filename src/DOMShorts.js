// console.log("The files are linked!!");

let _query=(ele)=>{
    return document.querySelector(ele)
}
let findById =(ele)=>{
    return _query(`#${ele}`)
}
let findByClass =(ele)=>{
    return _query(`.${ele}`)
}
let newelement = (ele) =>{
    return document.createElement(ele)
};

let newDiv =()=>{
    return document.createElement('div')
};

let addToElement= (parent,child) =>{
    return parent.appendChild(child);
}
