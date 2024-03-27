console.log('test');

let header = document.getElementById('header');

let opacity = 1;

function MyFadeFunction() {
   if (opacity>0) {
      opacity -= .01;
      setTimeout(function(){MyFadeFunction()},100);
   }  else {
    opacity += .01;
    setTimeout(function(){MyFadeFunction()},100);
   }
   header.style.opacity = opacity;
}

function clickOpacity() {

}