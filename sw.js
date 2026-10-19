/* Service worker de Veracruz Servicios: HTML siempre fresco, fotos en caché */
const V='vs-v1',FOTOS='vs-fotos-v1';
self.addEventListener('install',e=>{self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V&&k!==FOTOS).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const r=e.request,u=new URL(r.url);
  if(r.method!=='GET'||u.origin!==location.origin)return;
  if(r.mode==='navigate'){                       /* página: red primero, caché si no hay internet */
    e.respondWith(fetch(r).then(x=>{const c=x.clone();caches.open(V).then(h=>h.put('/',c));return x;}).catch(()=>caches.match('/')));
    return;
  }
  if(u.pathname.startsWith('/fotos/')||u.pathname.startsWith('/icons/')){   /* fotos: caché primero */
    e.respondWith(caches.open(FOTOS).then(h=>h.match(r).then(hit=>hit||fetch(r).then(x=>{if(x.ok)h.put(r,x.clone());return x;}))));
  }
});
