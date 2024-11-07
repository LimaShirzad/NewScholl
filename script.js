let open_btn=document.querySelector(".open-btn");
let close_btn=document.querySelector("#close_btn");
// #close_btn
let nav=document.querySelector("header .navbar");
open_btn.addEventListener("click",function()
{

       
        nav.style.right="0";
    
        // transform: rotate(30deg);
      
});

close_btn.addEventListener("click",function()
{
    nav.style.right="-100%";


});



let load_btn=document.getElementById("load");
let less_btn=document.getElementById("less");
let box=document.querySelectorAll("#student_box");
// let c=4;
load_btn.addEventListener("click",function()
{
        for (let i = 0; i < box.length; i++) {
            box[i].style.display='block';
            load_btn.style.display="none";
            less_btn.style.display="inline";
        }
     
            
  
});
less_btn.addEventListener("click",function()
{

    for (let i = 0; i < 4; i++) {
        box[i].style.display='none';
        load_btn.style.display="inline";
        less_btn.style.display="none";
    }
 

});


let section=document.querySelectorAll("section");

window.onscroll = () =>{
    section.forEach(sec => {
        
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;

        if(top >= offset && top < offset + height){

            sec.classList.add("show-animate");

        }else{

            sec.classList.remove("show-animate");
        }


    })


}




let loader=document.querySelector(".loader");


function show()
{
    setTimeout(()=>{
        loader.style.display="none";
        loader.style.opacity="0";

    },4000);

}

show();












