
var listeimg = document.images;
for(var i = 0; i < listeimg.length; i++) {
   listeimg[i].addEventListener("mouseover", function(event) {change(this.id)});
}

function change(id) {
  document.getElementById(id).src=`assets/img/${id}_2.jpg`; 
 
}