
document.addEventListener('DOMContentLoaded',()=>{
 const cover=document.getElementById('cover-screen');
 const atmosphere=document.querySelector('.anime-atmosphere');
 for(let i=0;i<16;i++){
  const dot=document.createElement('span');dot.className='firefly';
  dot.style.cssText='--x:'+(48+(i*17)%50)+'%;--y:'+(15+(i*19)%54)+'%;--duration:'+(6+i%7)+'s;--delay:-'+(i*.73)+'s';
  atmosphere.appendChild(dot);
 }
 for(let i=0;i<5;i++){
  const leaf=document.createElement('span');leaf.className='floating-leaf';
  leaf.style.cssText='--x:'+(60+i*9)+'%;--duration:'+(17+i*2)+'s;--delay:-'+(i*4)+'s';
  atmosphere.appendChild(leaf);
 }
 const toggle=document.getElementById('btn-toggle-animation');
 let paused=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 const update=()=>{
  cover.classList.toggle('motion-paused',paused);
  toggle.textContent=paused?'✦ Animasi Jeda':'✦ Animasi Aktif';
  toggle.setAttribute('aria-pressed',String(!paused));
 };
 toggle.addEventListener('click',()=>{paused=!paused;update()});update();
 const caption=document.querySelector('.art-caption');
 let timer;
 document.querySelectorAll('.character-sprite').forEach(button=>{
  button.addEventListener('click',()=>{
   if(!paused){button.classList.remove('is-greeting');void button.offsetWidth;button.classList.add('is-greeting')}
   caption.textContent=button.dataset.character==='raka'?'Raka: Ayo jelajahi rahasia rantai makanan!':'Arka: Bersama kita jaga keseimbangan hutan!';
   clearTimeout(timer);timer=setTimeout(()=>{caption.textContent='✦ Klik Raka atau Arka untuk menyapa!'},3200);
  });
  button.addEventListener('animationend',e=>{if(e.animationName==='guardianGreet')button.classList.remove('is-greeting')});
 });
 for(const [id,asset,alt] of [['hud-p1-name','raka-rimba.webp','Raka'],['hud-p2-name','sir-arka.webp','Arka']]){
  const name=document.getElementById(id),img=document.createElement('img');
  img.className='hud-anime-avatar';img.src='aset/gambar/'+asset;img.alt=alt;name.before(img);
 }
});

