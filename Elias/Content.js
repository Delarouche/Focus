window.onload = function () {
  var length =0;
  var todos= [];
  var seednumber= this.localStorage.getItem("ID");;
  if (!seednumber  ){
    generateNewID();
  }
  alert
  function generateNewID(){
      seednumber = makeid(7);
      localStorage.setItem("ID", seednumber);
      var background = "https://picsum.photos/seed/"+seednumber+ "/"+window.screen.availWidth+"/"+window.screen.availHeight+"?dark";
      document.body.style.background = "url("+background+")";
      getImageBrightness(this.background, function(brightness){
       alert("getting Brightness")
        if (brigthness < 150){
         
          var all = document.getElementsByTagName("*");

for (var i=0, max=all.length; i < max; i++) {
 all[i].style.color = "white";
 alert(brightness + ":white");
}
        }else if (this.brigthness > 150){
          
          var all = document.getElementsByTagName("*");

for (var i=0, max=all.length; i < max; i++) {
 all[i].style.color = "black";
 alert(brightness + ": black");
}
        }
      });
  }
  function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
    
 }
  var background = "https://picsum.photos/seed/"+seednumber+ "/"+window.screen.availWidth+"/"+window.screen.availHeight+"?grayscale";
 
  document.body.style.background = "url("+background+")";


  
  function getImageBrightness(imageSrc,callback) {
    var img = document.createElement("img");
    img.src = imageSrc;
    img.crossOrigin ="Anonymus";
    img.style.display = "none";
    document.body.appendChild(img);

    var colorSum = 0;

    img.onload = function() {
        // create canvas
        var canvas = document.createElement("canvas");
        canvas.width = this.width;
        canvas.height = this.height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(this,0,0);

        var imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
        var data = imageData.data;
        var r,g,b,avg;

          for(var x = 0, len = data.length; x < len; x+=4) {
            r = data[x];
            g = data[x+1];
            b = data[x+2];

            avg = Math.floor((r+g+b)/3);
            colorSum += avg;
        }

        var brightness = Math.floor(colorSum / (this.width*this.height));
        callback(brightness);
    }
}
 
  var Test =new Vue({
    el: "#app",
    data: {
      timeOne: 	this.timeOne,	
      timeTwo: 	this.timeTwo,
      todoList: "", 
      todoString: "",
    },

    methods: {
      time() {
        this.timeOne = moment().format("LT")
        this.timeTwo = moment().format("dddd Do")
        setInterval(this.time, 60000)
      },

      addItem: function(text){
        var node = document.createElement("LI");
        var name = "ToDo"+length.toString();
        var textnode = document.createTextNode(text);
        todos.push(text);
        length++;

        node.onclick = function () {
        node.addEventListener('transitionend', function( ) {
        node.parentElement.removeChild(this);
        });

        var i = todos.indexOf(text)
        localStorage.setItem(name, " ");
        todos.splice(i,1);
        length--;
        node.style.opacity = '0';
        
        Test.updateLocalStorage(todos);
        Test.checkDisable();
        }

        node.appendChild(textnode);
        document.getElementById("todos").appendChild(node);
        this.updateLocalStorage(todos);
        this.checkDisable();
      },


      addToList: function(e) {
        if (e.keyCode === 13) {
        if (document.getElementById("inputToDo").value !=""){
        this.addItem(document.getElementById("inputToDo").value)
        this.$data.todoList=""; 
         }
        }
      }, 
     
      checkDisable: function(){
        if (length >= 3){
          var nodes = document.getElementById("input").getElementsByTagName('*');
          for(var i = 0; i < nodes.length; i++){
          nodes[i].disabled = true;
          }
        }else{
          var nodes = document.getElementById("input").getElementsByTagName('*');
          for(var i = 0; i < nodes.length; i++){

          nodes[i].disabled = false;
          }
        }
      },    

      updateLocalStorage: function(text){
      var i;
      for (i=0; i<3;i++){
        if (todos[i]){
          localStorage.setItem("ToDo"+i.toString(),todos[i])
        }
      }
    },



  checkCookie: function() {
    var i;
    for (i=0;i<=2;i++){
    var item = localStorage.getItem("ToDo"+i.toString());
    if (item ) {
    this.addItem(item)
    }
  }    
}
},
mounted: function() {
this.time();
this.checkCookie();
},
})
var Menue = new Vue({
  el: "#menue",
  data: {
    showIt:false,
  },
  methods: {
     showMenue: function(){
      this.showIt = !this.showIt;
      if(this.showIt){
        document.getElementById("changeID").addEventListener("click", generateNewID);
      }
     }
     ,


     mounted: function() {
      
     
}
  }
})
document.getElementById("settings").addEventListener("click", Menue.showMenue);


 
}
