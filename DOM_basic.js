document.getElementById("but_title").onclick = () =>{
     let title=document.getElementById("title");

    if( title.innerText=== "Hello World !!"){
         title.innerText="Hello Bala !!";
    }
    else {
        title.innerText="Hello World !!";
    }
                        
}

document.getElementById("change_text").onclick= ()=>{
    let color =document.getElementsByTagName("p")[0].style.color;
    if(color ==="black"){
        document.getElementsByTagName("p")[0].style.color="red";
    }
    else{
        document.getElementsByTagName("p")[0].style.color="black";
    }

}

document.getElementById("hide_show").onclick =() =>{
    let para=document.getElementById("msg");
    
    if(para.style.display==="none"){
        para.style.display =  "block";
    }
    else {
        para.style.display = "none";
    }
}
