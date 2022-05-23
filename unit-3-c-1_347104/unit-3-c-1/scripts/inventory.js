function append(){
    let data=JSON.parse(localStorage.getItem("products")) || [];
    let all_products=document.getElementById(all_products);
    all_products.innerHTML=null;
    data.forEach(function(el,index){
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=el.image;
        
        let.setAttribute("id","img")
        let type=document.createElement("p")
        type.innerText=el.type;

        let desc=document.createElement("p")
        desc.innerText=el.desc;

        let price=document.createElement("p")
        price.innerText=el.price;

        let button =document.createElement("click",function(){
            removeitem(index);
        });

   div.append(img,type,desc,price,button)
   box.append(div);


        
    })
}