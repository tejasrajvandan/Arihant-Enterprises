const menuBtn=document.getElementById('menuBtn'),nav=document.getElementById('nav');
menuBtn.addEventListener('click',()=>{nav.classList.toggle('open');menuBtn.innerHTML=nav.classList.contains('open')?'<i class="fa-solid fa-xmark"></i>':'<i class="fa-solid fa-bars"></i>'});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>'}));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('enquiryForm').addEventListener('submit',e=>{e.preventDefault();document.getElementById('formMsg').style.display='block';});
