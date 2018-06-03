window.onload = function(){
   
var pic=document.getElementsByClassName("pic");
var back = document.getElementsByTagName("li");
var target = document.getElementsByClassName("target");
var ok = document.getElementsByTagName("button");

    
   
    
   for(var i=0;i<pic.length;i++){
    pic[i].ondragstart = function(e) {  
    e.dataTransfer.setData("text/plain", e.target.id);
       
 }
 };
    
   for(var i=0;i<target.length;i++){ 
    target[i].ondragover = function (e) {
    e.preventDefault();
   
    if(this.innerHTML == ""){
        e.dataTransfer.dropEffect = "copy"; 
          
    }
    
    }
    
 };
    
    
   for(var i=0;i<target.length;i++){
       
    target[i].ondrop = function(e) {
    e.preventDefault();
        
    if(this.innerHTML == ""){   //为空时才加图
    var id = e.dataTransfer.getData("text");
    this.appendChild(document.getElementById(id));  
        
    }
        
 }
 };
    
    for(var i=0;i<back.length;i++){
    
    back[i].ondragover = function (e) {
    e.preventDefault();    
    if(this.innerHTML == ""){  
       e.dataTransfer.dropEffect = "copy";
         
    }
      
    }
 };
    
   for(var i=0;i<back.length;i++){
    
    back[i].ondrop = function(e) {
    e.preventDefault(); 

    if (this.innerHTML == ""){   
      var id = e.dataTransfer.getData("text");
      this.appendChild(document.getElementById(id));
         
    }      
 }
 };

   var blank=0, error=0;
    
    
    
   ok.onclick = function(){
       console.log(blank);
       for(var i=0;i<target.length;i++){
        if(this.innerHTML == ""){
            blank++;
        }
        else{
           if(this.firstChild.getAttribute("id") != i){
             error++;
           } 
        }
       }
     
     if(blank != 0){
         alert("还没有完成哦。");
     }
     else if(error != 0){
         alert("还没有排对哦。");
     }
     else{
         alert("成功修复！");
     }
       
    
   };
   
}