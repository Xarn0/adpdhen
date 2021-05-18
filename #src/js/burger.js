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
