// alert('hello');
function testWebP(callback) {

   var webP = new Image();
   webP.onload = webP.onerror = function () {
   callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }
   
   testWebP(function (support) {
   
   if (support == true) {
   document.querySelector('body').classList.add('webp');
   }else{
   document.querySelector('body').classList.add('no-webp');
   }
   });;
let span =  document.querySelectorAll('.burger__span')[1]; 
let burger = document.querySelector('.burger__view');
burger.addEventListener('click',()=>{
   
   let burger__body = document.querySelector('.burger__body');
   let nav = document.querySelector('.header__list');
  
   let privu = document.querySelector('.burger__body');
   if(span.style.display == 'none'){
      span.style.display = "block";
   privu.style.display = 'none'
   
   }else{
         span.style.display = 'none';
         privu.style.display = "block";
          burger__body.innerHTML = nav.innerHTML;
   }
   // burger__body.innerHTML = nav.innerHTML;
   document.querySelector('.burger__span.__top').classList.toggle('_active');
   document.querySelector('.burger__span.__bottom').classList.toggle('_active');
  
  
})


