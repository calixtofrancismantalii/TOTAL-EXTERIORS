var para, paradd, readmore;
    para = document.getElementById("para");
    paradd = document.getElementById("paraadd");
    readmore = document.getElementById("readmore");

function showhide(){
    
    if(paradd.style.display === "none"){
        paradd.style.display = "";
        readmore.innerHTML = "READ LESS";
    }
    else{
        paradd.style.display = "none";
        readmore.innerHTML = "READ MORE";
    }
     
}