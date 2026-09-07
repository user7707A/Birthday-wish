const ids=["s1","s2","s3","s4","s5","s6","s7"];
function next(n){ids.forEach(id=>document.getElementById(id).classList.remove("active"));document.getElementById("s"+n).classList.add("active");}
function terminalEffect(){
 const t=document.getElementById("terminal");
 if(t.dataset.done)return;
 t.dataset.done="1";
 const lines=[
  "> Initializing PROJECT SOWMIYA...",
  "> Encrypting memories...",
  "> Loading 2 years of data...",
  "> Searching for something special...",
  "> Subject identified: SOWMIYA",
  "> Creator identified: ABINESH",
  "> Mission status: READY ❤️"
 ];
 let i=0;
 function add(){if(i<lines.length){t.innerHTML+=lines[i]+"<br>";i++;setTimeout(add,420)}else t.innerHTML+="<span>_</span>";}
 add();
}
document.querySelector("#s2 button").addEventListener("click",()=>next(3));
const observer=new MutationObserver(()=>{if(document.getElementById("s2").classList.contains("active"))terminalEffect()});
observer.observe(document.body,{subtree:true,attributes:true,attributeFilter:["class"]});
function celebrate(){
 document.getElementById("finalMessage").style.display="block";
 for(let i=0;i<55;i++)setTimeout(()=>{
   const h=document.createElement("div");
   h.className="heart";h.textContent=Math.random()>.5?"♥":"♡";
   h.style.left=Math.random()*100+"vw";
   h.style.fontSize=(14+Math.random()*26)+"px";
   document.body.appendChild(h);
   setTimeout(()=>h.remove(),5200);
 },i*70);
}
