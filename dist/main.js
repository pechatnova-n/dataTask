(()=>{"use strict";(()=>{const e=document.querySelector(".text1"),t=document.querySelector(".text2"),n=document.querySelector(".text3"),o=document.querySelector(".text4");setInterval((()=>{let r=new Date,l=r.toLocaleString("ru-RU",{weekday:"long"}),c=r.toLocaleString("en-EN").slice(-11),u=c.slice(-2),a=c.slice(0,-3).split(":"),i=r.getTime(),s=(new Date("01 january 2023").getTime()-i)/1e3,x=Math.floor(s/60/60/24);for(let e=0;e<a.length;e++)a[e]=Number(a[e]),a[e]=(m=a[e])<10?"0"+m:m;var m;c=a.join(":"),l=l[0].toUpperCase()+l.slice(1),e.textContent="eee",t.textContent=`Сегодня: ${l}`,n.textContent=`Текущее время: ${c} ${u}`,o.textContent=`До нового года осталось ${x} дней`}),1e3)})()})();