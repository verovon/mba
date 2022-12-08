//   PHOTO GALLERY in Tools page


function upDate(previewPic){
   var src = previewPic.getAttribute( "src" );
   var alt = previewPic.getAttribute( "alt" );
   document.getElementById('image').style.backgroundImage = "url('" + src + "')";
   document.getElementById('image').innerHTML = alt;
}

  function unDo(X){
   X = document.getElementById('image');
   X.style.backgroundImage = "url('')";
   document.getElementById('image').innerHTML = "Hover over an image below to display here";
  
}


//   COMMENTS in Feedback page


var comments = ["I did like it", "Amazing", "Come back next year"];

function loadComments() {
  document.getElementById("comments").innerHTML = comments;
}

function myFunction(){
  var comment = prompt("What is your opinion about the Conference?");
  comments[comments.length] = comment;
  document.getElementById("comments").innerHTML = comments;
  }


//   ACCORDION on Documentation page

function closeMe(){
      // Find the element
      x=document.getElementById("demo");
       //Option 1: Change the style attribute directly
      x.style.display="none";
  
      //Option 2: Change the class
       // x.className="closed";
  }

function openMe(){
      // Find the element
      x=document.getElementById("demo");
      //Option 1: Change the style attribute directly
       x.style.display="block";
      
      //Option 2: Change the class
       // x.className="open";
  }
