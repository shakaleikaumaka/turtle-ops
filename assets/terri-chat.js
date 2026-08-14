/* 🐢 TERRI LIVE CHAT — theshellpit.com site widget (v4 port, 2026-08-10)
 * Hub: https://chat.theshellpit.com (CF Worker shellpit-chat v1.1 + Durable Object)
 * Protocol: Spector's desk rig (github.com/ShakaLei/pit-chat-protocol), gifted to Terri 2026-08-10.
 * v4: animated turtle FAB (bobbing, peeking head, paddling flipper, bubbles, live dot)
 *     + hub v1.1 PORTABLE HISTORY: camp codes own one canonical session; redeeming on
 *     any device adopts the full chat history (adopt()).
 * Self-contained: own scoped CSS vars, injects itself before </body>. One line to include:
 *   <script src="/assets/terri-chat.js?v=20260810-3" defer></script>
 * (bump the ?v= on any edit — Cloudflare caches aggressively, even 404s)
 */
(function(){
if(document.getElementById('sp-fab'))return; // idempotent
const HUB='https://chat.theshellpit.com';
const css=`
#sp-fab,#sp-chat{--t-amber:#db9840;--t-amber2:#e5a14b;--t-coral:#eb5833;--t-ink:#0a0e1c;--t-ink2:#0b1628;--t-panel:#111b28;--t-line:#1f2a38;--t-paper:#f7f0eb;--t-mut:#8a7d75;--t-mut2:#7c6e67;--t-good:#5dbb63;font-family:'Segoe UI',system-ui,sans-serif}
#sp-fabwrap{position:fixed;right:22px;bottom:88px;z-index:960}
#sp-fab-x{position:absolute;top:-11px;left:-11px;width:24px;height:24px;border-radius:999px;background:linear-gradient(135deg,#123326,#0a2a1c);border:1px solid rgba(255,255,255,.5);color:#d9f7e9;font-size:.72rem;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0;box-shadow:0 3px 10px rgba(0,0,0,.5);z-index:2}
#sp-fab-x:hover{transform:scale(1.12)}
#sp-mini{display:none;position:fixed;right:22px;bottom:88px;z-index:960;width:44px;height:44px;border-radius:999px;background:linear-gradient(135deg,#7fd8a4,#4cb382);border:1px solid rgba(255,255,255,.35);color:#0e2a1d;font-size:1.15rem;cursor:pointer;align-items:center;justify-content:center;padding:0;box-shadow:0 4px 14px rgba(76,179,130,.45)}
#sp-fab{position:relative;display:flex;align-items:center;gap:9px;background:linear-gradient(135deg,#7fd8a4,#4cb382);color:#0e2a1d;border:none;border-radius:50px;padding:10px 20px 10px 12px;font-weight:700;font-size:.95rem;cursor:pointer;box-shadow:0 6px 24px rgba(76,179,130,.45);animation:spbob 3.2s ease-in-out infinite;transition:transform .18s,box-shadow .18s}
#sp-fab:hover{transform:translateY(-3px);box-shadow:0 12px 32px rgba(76,179,130,.6)}
@keyframes spbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
#sp-fab .tfhead{animation:sppeek 4s ease-in-out infinite;transform-origin:30px 18px}
@keyframes sppeek{0%,55%,100%{transform:translate(0,0)}70%,90%{transform:translate(3px,-2px) rotate(-4deg)}}
#sp-fab .tfflip{animation:spflip 1.6s ease-in-out infinite;transform-origin:15px 26px}
@keyframes spflip{0%,100%{transform:rotate(0)}50%{transform:rotate(-9deg)}}
#sp-fab .tfbub{animation:spbub 2.6s ease-in-out infinite;opacity:0}
#sp-fab .tfbub:nth-of-type(2){animation-delay:1.3s}
@keyframes spbub{0%{transform:translateY(0);opacity:0}25%{opacity:.9}100%{transform:translateY(-7px);opacity:0}}
#sp-fab .livedot{position:absolute;top:2px;right:6px;width:10px;height:10px;background:#22c55e;border:2px solid #eafff3;border-radius:50%;animation:sppulse 2s infinite}
@keyframes sppulse{0%{box-shadow:0 0 0 0 rgba(34,197,94,.5)}70%{box-shadow:0 0 0 7px rgba(34,197,94,0)}100%{box-shadow:0 0 0 0 rgba(34,197,94,0)}}
#sp-chat{position:fixed;right:22px;bottom:88px;z-index:961;width:min(390px,calc(100vw - 32px));height:min(540px,calc(100vh - 130px));background:var(--t-ink2);border:1px solid var(--t-line);border-radius:16px;display:none;flex-direction:column;overflow:hidden;box-shadow:0 18px 60px rgba(0,0,0,.5)}
#sp-chat.open{display:flex}
#sp-head{background:var(--t-panel);padding:13px 16px;border-bottom:1px solid var(--t-line);display:flex;align-items:center;gap:10px}
#sp-head .t{font-family:Georgia,serif;font-size:1.02rem;color:var(--t-paper)}#sp-head .t b{color:var(--t-amber2)}
#sp-head .dot{width:9px;height:9px;border-radius:50%;background:var(--t-good);box-shadow:0 0 8px var(--t-good);flex:none}
#sp-head .sub{font-size:.68rem;color:var(--t-mut);margin-top:1px}
#sp-x{margin-left:auto;background:none;border:none;color:var(--t-mut);font-size:1.2rem;cursor:pointer}
#sp-log{flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:9px}
.sp-m{max-width:86%;padding:9px 13px;border-radius:13px;font-size:.9rem;line-height:1.45;white-space:pre-wrap;word-wrap:break-word;color:var(--t-paper)}
.sp-m.v{align-self:flex-end;background:var(--t-amber);color:var(--t-ink);border-bottom-right-radius:4px}
.sp-m.s{align-self:flex-start;background:var(--t-panel);border:1px solid var(--t-line);border-bottom-left-radius:4px}
.sp-m.s .who{font-size:.68rem;color:var(--t-amber2);margin-bottom:3px;font-weight:600}
.sp-note{align-self:center;font-size:.68rem;color:var(--t-mut2);text-align:center;max-width:92%}
#sp-typing{display:none;align-self:flex-start;padding:8px 14px;color:var(--t-mut);font-size:.85rem}
#sp-typing.on{display:block}
#sp-typing span{animation:spb 1.2s infinite;display:inline-block}
#sp-typing span:nth-child(2){animation-delay:.2s}#sp-typing span:nth-child(3){animation-delay:.4s}
@keyframes spb{0%,60%,100%{opacity:.25}30%{opacity:1}}
#sp-form{display:flex;gap:8px;padding:12px;border-top:1px solid var(--t-line);background:var(--t-panel)}
#sp-in{flex:1;background:var(--t-ink);border:1px solid var(--t-line);border-radius:9px;color:var(--t-paper);padding:10px 12px;font-size:.9rem;font-family:inherit;resize:none;height:42px}
#sp-in:focus{outline:none;border-color:var(--t-amber)}
#sp-send{background:var(--t-amber);color:var(--t-ink);border:none;border-radius:9px;padding:0 16px;font-weight:700;cursor:pointer}
.sp-m a{color:var(--t-amber2);text-decoration:underline;word-break:break-all}
.sp-m.v a{color:var(--t-ink)}
.sp-m a.sp-pdf,.sp-note a.sp-pdf{display:inline-block;margin:7px 2px 2px 0;background:var(--t-amber);color:var(--t-ink);padding:9px 15px;border-radius:9px;font-weight:700;text-decoration:none;word-break:normal;box-shadow:0 3px 10px rgba(219,152,64,.35)}
.sp-m a.sp-pdf:active{transform:translateY(1px)}
.sp-m.v a.sp-pdf{background:var(--t-ink);color:var(--t-amber2);box-shadow:none}
.sp-note a{color:var(--t-amber2)}
@media(max-width:520px){
  #sp-chat{right:0;left:0;bottom:0;width:100vw;height:100dvh;max-height:100dvh;border-radius:0;border:none;border-top:1px solid var(--t-line)}
  #sp-log{-webkit-overflow-scrolling:touch}
  #sp-in{font-size:16px}
  #sp-form{padding-bottom:calc(12px + env(safe-area-inset-bottom))}
  #sp-fabwrap,#sp-mini{right:14px;bottom:calc(88px + env(safe-area-inset-bottom))}
  #sp-mini{width:38px;height:38px;font-size:1rem}
}`;
const html=`
<div id="sp-fabwrap"><button id="sp-fab-x" aria-label="Hide the button" title="hide — a tiny 🐢 stays">✕</button><button id="sp-fab" aria-label="Chat with Terri">
  <svg width="36" height="30" viewBox="0 0 40 34" aria-hidden="true">
    <circle class="tfbub" cx="34" cy="3" r="1.6" fill="#bdf0d8"/>
    <circle class="tfbub" cx="30" cy="5" r="1.2" fill="#d9f7e9"/>
    <ellipse class="tfflip" cx="12" cy="28" rx="5.5" ry="2.6" fill="#1d5c40"/>
    <ellipse cx="26" cy="28" rx="5.5" ry="2.6" fill="#1d5c40"/>
    <ellipse cx="20" cy="18" rx="13" ry="9.5" fill="#0e3d2a" stroke="#0a2a1c" stroke-width="1.2"/>
    <ellipse cx="20" cy="18" rx="9" ry="6.5" fill="#7fd8a4"/>
    <path d="M13.5 15.5 L20 12.5 L26.5 15.5 M13.5 20.5 L20 23.5 L26.5 20.5" stroke="#0e3d2a" stroke-width="1.4" fill="none" stroke-linecap="round"/>
    <g class="tfhead"><circle cx="30.5" cy="13.5" r="5" fill="#7fd8a4"/><circle cx="32.4" cy="12.2" r="1.3" fill="#0e2a1d"/><circle cx="32.8" cy="11.8" r=".45" fill="#eafff3"/></g>
  </svg>
  Talk to Terri
  <span class="livedot" title="Terri is live"></span>
</button></div><button id="sp-mini" aria-label="Show the Terri chat" title="Talk to Terri 🐢">🐢</button>
<div id="sp-chat" role="dialog" aria-label="Terri live chat">
  <div id="sp-head"><div class="dot"></div><div><div class="t"><b>Terri</b> — live from the Shell Pit</div><div class="sub">the Terrible Turtle Camp AI · answers in a few minutes (turtle speed)</div></div><button id="sp-x" aria-label="Close chat">✕</button></div>
  <div id="sp-log"></div>
  <div id="sp-typing"><span>●</span><span>●</span><span>●</span></div>
  <form id="sp-form"><textarea id="sp-in" placeholder="Ask about the camp, the build, the films, Burning Man…" rows="1"></textarea><button id="sp-send" type="submit">Send</button></form>
</div>`;
function boot(){
const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
document.body.insertAdjacentHTML('beforeend',html);
const $=id=>document.getElementById(id);
let sess=localStorage.getItem('sp_sess');if(!sess){sess=(crypto.randomUUID?crypto.randomUUID():Date.now()+'-'+Math.random().toString(36).slice(2)).slice(0,36);localStorage.setItem('sp_sess',sess);}
let after=Number(localStorage.getItem('sp_after')||0),polling=false,open=false;
const seen=new Set();
function esc(s){const d=document.createElement('div');d.textContent=s;return d.innerHTML}
function shortUrl(u){try{const x=new URL(u);const p=decodeURIComponent(x.pathname.split('/').filter(Boolean).pop()||'');let t=p?x.hostname+'/…/'+p:x.hostname;return t.length>44?t.slice(0,42)+'…':t;}catch(e){return u.length>44?u.slice(0,42)+'…':u}}
function anchor(url,txt){url=url.replace(/"/g,'%22');const pdf=/\.pdf(\?|#|$)/i.test(url);if(pdf)return '<a class="sp-pdf" href="'+url+'" target="_blank" rel="noopener noreferrer">📄 '+(txt||'Open the PDF')+'</a>';return '<a href="'+url+'" target="_blank" rel="noopener noreferrer">'+(txt||shortUrl(url))+'</a>';}
function rich(s){let h=esc(s);
h=h.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,(m,txt,url)=>anchor(url,txt));
h=h.replace(/(^|[^"'>])(https?:\/\/[^\s<]+)/g,(m,pre,url)=>{let trail='';const mm=url.match(/[.,!?;:)\]]+$/);if(mm){trail=mm[0];url=url.slice(0,url.length-trail.length);}return pre+anchor(url)+trail;});
h=h.replace(/\*\*([^*\n]+)\*\*/g,'<b>$1</b>');
return h;}
function add(role,text){const log=$('sp-log');const m=document.createElement('div');m.className='sp-m '+(role==='visitor'?'v':'s');m.innerHTML=(role==='terri'?'<div class="who">Terri 🐢</div>':'')+rich(text);log.appendChild(m);log.scrollTop=log.scrollHeight;}
function note(t){const log=$('sp-log');const n=document.createElement('div');n.className='sp-note';n.innerHTML=rich(t);log.appendChild(n);log.scrollTop=log.scrollHeight;}
function greet(){if($('sp-log').children.length)return;note('Live line to the Shell Pit — Terri answers herself, turtle-speed. Conversations may be reviewed to keep the pit tidy.');add('terri',"🐢 Aloha! I'm Terri — the Terrible Turtle Camp AI, live from the Shell Pit. Ask me about our Burning Man build, the Machine Guidance films, the kitchen trailer, the shower totes, water math, the 10 Principles — or how to fork me for YOUR camp (I'm open source, that's the gift). Got a camp code? Enter it and your history follows you anywhere. I move slow but I always bite back. What's on your mind? 🌺\n\n🇮🇱 דברו איתי בעברית — אני מדברת שפה צבים שוטפת! · 🌐 any language works — playa is for everyone");}
async function adopt(s){sess=s;localStorage.setItem('sp_sess',s);after=0;seen.clear();$('sp-log').innerHTML='';try{const r=await fetch(HUB+'/poll?session='+encodeURIComponent(s)+'&after=0');const d=await r.json();(d.messages||[]).forEach(m=>{seen.add(m.seq);if(m.seq>after)after=m.seq;if(m.role==='terri'||m.role==='spector')add('terri',m.text);else if(m.role==='system')note(m.text);else if(m.role==='visitor')add('visitor',m.text);});localStorage.setItem('sp_after',String(after));if(d.member)setMember(d.member);}catch(e){}}
async function poll(){if(polling)return;polling=true;while(open){try{const r=await fetch(HUB+'/poll?session='+sess+'&after='+after+'&wait=25');const d=await r.json();(d.messages||[]).forEach(m=>{if(seen.has(m.seq))return;seen.add(m.seq);if(m.seq>after){after=m.seq;localStorage.setItem('sp_after',String(after));}if(m.role==='terri')add('terri',m.text);else if(m.role==='system')note(m.text);});if(d.member)setMember(d.member);$('sp-typing').className=d.typing?'on':'';const log=$('sp-log');if(d.typing)log.scrollTop=log.scrollHeight;}catch(e){await new Promise(r=>setTimeout(r,4000));}}polling=false;}
$('sp-fab').onclick=()=>{open=true;$('sp-chat').classList.add('open');$('sp-fabwrap').style.display='none';greet();poll();$('sp-in').focus();};
$('sp-x').onclick=()=>{open=false;$('sp-chat').classList.remove('open');if(localStorage.getItem('sp_fab_mini')!=='1'){$('sp-fabwrap').style.display='';}else{$('sp-mini').style.display='flex';}};
function setMember(n){const s=document.querySelector('#sp-head .sub');if(s&&!s.dataset.m){s.dataset.m='1';s.innerHTML='🏕️ camp desk — '+n+' · history travels with your code';s.style.color='var(--t-good)';localStorage.setItem('sp_name',n);}}
$('sp-form').onsubmit=async e=>{e.preventDefault();const t=$('sp-in').value.trim();if(!t)return;$('sp-in').value='';
if(/^[A-Z]{3,12}-[A-Z]{2,8}-\d{3,5}$/i.test(t)){add('visitor','🔑 '+t.toUpperCase());try{const r=await fetch(HUB+'/redeem',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({session:sess,code:t})});const d=await r.json();if(d.ok){setMember(d.member);localStorage.setItem('sp_code',t.toUpperCase());if(d.history_session&&d.history_session!==sess){adopt(d.history_session);}note(d.resumed?'🐢 shell recognized you — your whole chat history follows your code, on any device.':'🏕️ camp code accepted — this desk is yours now. Enter the same code on any computer and your history travels with you.');}else{note(d.error||'code not recognized');}}catch(err){note('connection hiccup — try the code again');}return;}
add('visitor',t);try{const r=await fetch(HUB+'/send',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({session:sess,text:t,name:localStorage.getItem('sp_name')||'guest'})});const d=await r.json();if(d.seq){seen.add(d.seq);if(d.seq>after){after=d.seq;localStorage.setItem('sp_after',String(after));}}}catch(err){note('connection hiccup — message may not have sent');}};
$('sp-in').addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();$('sp-form').requestSubmit();}});
// 🐢✕ the bow-out: Terri's pill becomes a tiny turtle note (Shaka corner law 2026-08-14)
(function(){var fx=$('sp-fab-x'),fw=$('sp-fabwrap'),mn=$('sp-mini');if(!fx||!fw||!mn)return;
fx.onclick=function(e){e.stopPropagation();fw.style.display='none';mn.style.display='flex';try{localStorage.setItem('sp_fab_mini','1');}catch(err){}};
mn.onclick=function(e){e.stopPropagation();mn.style.display='none';fw.style.display='';try{localStorage.removeItem('sp_fab_mini');}catch(err){}};
try{if(localStorage.getItem('sp_fab_mini')==='1'){fw.style.display='none';mn.style.display='flex';}}catch(err){}})();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();
