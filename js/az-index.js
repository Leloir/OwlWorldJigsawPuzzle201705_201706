window.onload = function() {

	var rgname0 = document.getElementById("rg-username0");
	var rgname = document.getElementById("rg-username");
	var rgpw0 = document.getElementById("rg-password0");
	var rgpw = document.getElementById("rg-password");
	var rgcpw0 = document.getElementById("confirm0");
	var rgcpw = document.getElementById("confirm");
	var rg0 = document.getElementById("register0");
	var rg = document.getElementById("register");
	
  var lgname0 = document.getElementById("lg-username0");
  var lgname = document.getElementById("lg-username");
	var lgpw0 = document.getElementById("lg-password0");
	var lgpw = document.getElementById("lg-password");
	var lg0 = document.getElementById("login0");
  var lg = document.getElementById("login");

    
	var request = indexedDB.open("owlworld-db", 1);
    
//register  
	request.onupgradeneeded = function() {
		var rq = this.result;
		var store = rq.createObjectStore("owlworld-users", {keyPath: "username"});
		store.createIndex("username", "username", {unique: true});
		store.createIndex("password", "password", {unique: false});
	};
     
	request.onsuccess = function() {
		var rq = this.result;
        
 
        rg0.onclick = function() {
             var flag = 0;
            
             if(rgname0.value == "" || rgpw0.value == "" || rgcpw0.value == ""){
               alert("用户名，密码和确认密码缺一不可哦。");
             }
             else if(rgpw0.value != rgcpw0.value) {
               alert("输入的密码和确认密码要一致哦。");
             }  
             else {
              
            
              var transaction = rq.transaction(["owlworld-users"], "readwrite");
              var store = transaction.objectStore("owlworld-users");
              var index = store.index("username");
              var existUser;
             
              var cursor = index.openCursor();
               
                 
              cursor.onsuccess = function(e) { 

                var result = e.target.result;

                if(result) {
                   var existUser = result.value.username;

                   if(rgname0.value == existUser ){
                      flag ++;  
                   }
                   else{        
                    result.continue();  
                 };

                };
                 
               }; 
                 
                if(flag == 0){
                  var transaction = rq.transaction(["owlworld-users"], "readwrite");
                 var store = transaction.objectStore("owlworld-users");
                 store.add({username:rgname0.value, password: rgpw0.value, });
                 alert("注册成功啦! 登录看看吧。");    
               } 
               else{
                  alert("此用户名已经存在啦。换一个嘛。");  
               }; 
                 
              }; 
    
         };
      
        
    
        rg.onclick = function() {
            var flag = 0;
            
            if(rgname.value == "" || rgpw.value == "" || rgcpw.value == ""){
               alert("All of the three parts are requested.");
            }
            else if(rgpw.value != rgcpw.value) {
               alert("Password and ConfirmPW should be the same.");
           } 
            else {
              var transaction = rq.transaction(["owlworld-users"], "readwrite");
              var store = transaction.objectStore("owlworld-users");
              var index = store.index("username");
              var existUser;
             
              var cursor = index.openCursor();
               
                 
              cursor.onsuccess = function(e) { 

                var result = e.target.result;

                if(result) {
                   var existUser = result.value.username;

                   if(rgname0.value == existUser ){
                      flag = 1;  
                   }
                   else{        
                    result.continue();  
                 }

                };
                 console.log(flag); 
               }; 
                 
              }; 
                
             if(flag == 0){
                 var transaction = rq.transaction(["owlworld-users"], "readwrite");
                 var store = transaction.objectStore("owlworld-users");
                 store.add({username:rgname.value, password: rgpw.value, });
                 alert("Succeed! Now let's login the OwlWorld.");      
            }

            else {
                 alert("The username already exits. Try another.");

              };
               
    };           
         
         
  
        
    
//login
    
        
        lg0.onclick = function() {
          if(lgname0.value == "" || lgpw0.value == ""){
              alert("用户名和密码缺一不可哦。");
           }else{
              var transaction = rq.transaction(["owlworld-users"], "readwrite");
              var store = transaction.objectStore("owlworld-users");
              var index = store.index("username");
              var existUser;
              var existPw;
              var flagnp = 0;
              var flagn = 0;
              var flagnon = 0;
              var cursor = index.openCursor();
                
              cursor.onsuccess = function() { 
                  var result = this.result;
                  if (result) {
                      existUser = result.value.username;
                      existPw = result.value.password;
                      
                      if(lgname0.value == existUser && lgpw0.value == existPw){
                          // flagnp=1;
                          // flagnon++;
                          window.location ="a-school.html";
                          result.break();

                      }else if(lgname0.value == existUser && lgpw0.value != existPw){
                          flagn++;
                          flagnon++;
                      }else{

                      };
                     result.continue(); 
                    };
              };
                  
            //   if(flagnp == 1){
            //       //alert("loading……");
            //        window.location ="a-school.html";

            //   };
              
		          // if(flagn != 0){
            //       alert("用户名或密码错误。再试试看吧。");
            //   };
              
            //   if(flagnon == 0){
            //       alert("找不到用户。先注册一下嘛。");
            //   };
                  
                  
                   
               
              
           };
        
       };
        
        
       lg.onclick = function() {
          if(lgname.value == "" || lgpw.value == ""){
              alert("Both of the two parts are requested.");
           }
                    
          else{
              var transaction = rq.transaction(["owlworld-users"], "readwrite");
              var store = transaction.objectStore("owlworld-users");
              var index = store.index("username");
              var existUser;
              var existPw;
              var flagnp = 0;
              var flagn = 0;
              var flagnon = 0;
              var cursor = index.openCursor();
                
              cursor.onsuccess = function() { 
                  var result = this.result;
				  if (result) {
                      var existUser = result.value.username;
                      var existPw = result.value.password;
                      
                      if(lgname.value == existUser && lgpw.value == existPw){
                          flagnp=1;
                          flagnon++;
                          console.log(flagnp);
                      }
                      
                      else if(lgname.value == existUser && lgpw.value != existPw){
                          flagn++;
                          flagnon++;
                      };
                      result.continue(); 
                  };
                  
                 };    
                
                  if(flagnp == 1){
                      //alert("loading……");
                      window.location ="a-world.html";
                  };
                  
				  if(flagn != 0){
                      alert("Error in username or password!Check and try agian.");
                  };
                  
                  if(flagnon == 0){
                      alert("Can not find the username. Please register first.");
                  };
                  
                 
                   
               
           };
        
       };
         
        
      
        
        
        
  
   };  
 
    
    
};
    

    
