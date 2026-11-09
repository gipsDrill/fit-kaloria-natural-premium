(() => {
 const hero=document.querySelector('.natural-hero--ogrod'),portrait=hero?.querySelector('.hero-portrait'),dessert=hero?.querySelector('.hero-dessert');
 if(!hero||!portrait||!dessert)return;
 const place=()=>{
  const mobile=matchMedia('(max-width:700px)').matches,parent=mobile?portrait:hero;
  if(dessert.parentElement!==parent)parent.append(dessert);
  const w=parent.clientWidth,h=parent.clientHeight;
  const photoHeight=mobile?h:Math.max(h,w/1.5),photoWidth=photoHeight*1.5;
  const xOffset=mobile?w+20-photoWidth:(w-photoWidth)/2,yOffset=mobile?0:(h-photoHeight)*.45;
  dessert.style.width=(photoWidth*.07)+'px';
  dessert.style.left=(xOffset+photoWidth*.82)+'px';
  dessert.style.top=(yOffset+photoHeight*.63)+'px';
  dessert.hidden=false;
 };
 new ResizeObserver(place).observe(hero);new ResizeObserver(place).observe(portrait);
 place();
})();