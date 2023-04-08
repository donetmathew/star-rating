import "./main.scss";

const stars=5;
const starContainer= document.querySelector(".star__container");
starContainer.appendChild(
    createElements(stars, i => createElement("div", {class: "star star-empty", 'data-index': i}))
    );
const starEl =document.querySelectorAll("div.star");
starContainer.addEventListener("mouseover",onMouseOver);
starContainer.addEventListener("mouseout",onMouseLeave);

function fillStars(index){
    for(let i =0; i<index; i++){
        starEl[i].classList.remove("star-empty");
        starEl[i].classList.add("star-filled");
    }
}

function removeFilling(index){
    for(let i =0; i<index; i++){
        starEl[i].classList.add("star-empty");
        starEl[i].classList.remove("star-filled");
    }
}

function createElement(type,properties){
    const element = document.createElement(type);
    for(let key in properties){
        if(properties[key]){
            element.setAttribute(key, properties[key]);
        }
    }
    return element;
}

function createElements(count,fn){
    console.log(fn);
    const fragment=document.createDocumentFragment();
    for(let i=1;i<count+1;i++){
        fragment.appendChild(fn(i))
    }
    return fragment;
}

function onMouseOver(e){
    if(e?.target){
        fillStars(e.target.dataset.index);
    }
   
}
function onMouseLeave(e){
  if(e?.target){
    removeFilling(e.target.dataset.index)
  }
}

