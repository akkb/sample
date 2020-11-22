'use strict';
document.addEventListener('DOMContentLoaded', function(){

  const open=document.getElementById('open');
  const overlay=document.querySelector('.overlay');

  open.addEventListener('click',function() {
    overlay.classList.toggle('show');
    open.classList.toggle('hide');
  })

 const close= document.getElementById('close');

  close.addEventListener('click',function() {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  
});
