/* ---------- mapa de prerrequisitos ---------- */
const req = {
  /* 2° */
  BIOL188:["BIOL038"],
  KINE103:["KINE101"],
  KINE104:["KINE102"],
  MORF319:["MORF318"],

  /* 3° */
  BIOL288:["BIOL188"],
  ING129:["ING119"],
  KINE203:["KINE104"],
  KINE204:["CEGHC11"],

  /* 4° */
  ING239:["ING129"],
  KINE206:["KINE204"],
  KINE207:["KINE104"],
  KINE208:["BIOL188"],
  KINE209:["KINE104"],

  /* 5° */
  ING249:["ING239"],
  KINE311:["BIOL288"],
  KINE314:["BIOL288","KINE203"],
  KINE313:["KINE314"],
  KINE312:["KINE313"],          /* para FCRE002 y KINE317 */

  /* 6° */
  FCRE002:["KINE312"],
  KINE315:["KINE313"],
  KINE316:["KINE313"],
  KINE318:["KINE313"],
  KINE317:["KINE312"],

  /* 7° */
  KINE414:["KINE318"],
  KINE415:["KINE315"],
  KINE416:["KINE316"],
  KINE418:["KINE315"],
  KINE420:["KINE313"],

  /* 8° */
  FCRE003:["FCRE002"],
  KINE426:["KINE414","KINE415","KINE416"],
  KINE427:["KINE311"],
  KINE428:["KINE420"],
  KINE429:["KINE420"],
  KINE430:["KINE429"],

  /* 9°-10° */
  KINE511:["KINE430"],
  KINE512:["KINE430"],
  KINE521:["KINE512"],
  KINE522:["KINE521"]
};

/* ---------- lógica ---------- */
const botones = [...document.querySelectorAll('button[data-cod]')];

function cod(btn){return btn.dataset.cod;}
function aprobados(){return botones.filter(b=>b.classList.contains('aprobado')).map(cod);}

function actualizar(){
  const ok = aprobados();
  botones.forEach(b=>{
    if(b.classList.contains('aprobado')) return;
    const r = req[cod(b)]||[];
    const listo = r.every(c=>ok.includes(c));
    b.classList.toggle('bloqueado',!listo);
  });
}

botones.forEach(b=>{
  b.addEventListener('click',()=>{
    if(b.classList.contains('bloqueado')) return;
    b.classList.toggle('aprobado');
    actualizar();
  });
});

/* al cargar: bloquear los que sí tienen requisitos */
window.addEventListener('DOMContentLoaded', actualizar);
