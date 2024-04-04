let cards = document.querySelector("#cards")
let data = [
  {img:"./image/1.png",name:"chair",p:"2000rs",add:false},
  {img:"./image/2.png",name:"chair",p:"2000rs",add:false},
  {img:"./image/3.png",name:"chair",p:"2000rs",add:false},
  {img:"./image/4.png",name:"chair",p:"2000rs",add:false},
  {img:"./image/6.png",name:"chair",p:"2000rs",add:false},
]

let add = ""
data.forEach((item,index)=>{
add += `<div class="box">
<div class="img">
 <img src=${item.img} alt="" srcset="">
</div>
<h1>${item.name}</h1>
<h2>${item.p}</h2>
<button>add to card</button>
</div>
`

})
cards.innerHTML = add;




let addToCardButtons = document.querySelectorAll('.box button');
let card = document.querySelector(".card h2");

addToCardButtons.forEach((btn,index)=>{
    btn.addEventListener("click",()=>{
        data[index].add = !data[index].add;
        btn.textContent = data[index].add ? "addid" : "add to card";
       
        let filteredData = data.filter(item => item.add);
        card.textContent = filteredData.length;
    });
});