(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[664],{9959:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4090:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(2648).Z,r=o(7273).Z,l=n(o(5784)),u=o(3777),a=o(2962),f=o(5463),c=o(4825),i=o(2568),s=o(2127),d=o(9959),p=o(3795);let v=new Set;function h(e,t,o,n){if(u.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let r=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,l=t+"%"+o+"%"+r;if(v.has(l))return;v.add(l)}Promise.resolve(e.prefetch(t,o,n)).catch(e=>{})}}function y(e){return"string"==typeof e?e:a.formatUrl(e)}let b=l.default.forwardRef(function(e,t){let o,n;let{href:a,as:v,children:b,prefetch:_,passHref:g,replace:C,shallow:M,scroll:m,locale:j,onClick:k,onMouseEnter:E,onTouchStart:O,legacyBehavior:P=!1}=e,x=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=b,P&&("string"==typeof o||"number"==typeof o)&&(o=l.default.createElement("a",null,o));let R=!1!==_,L=l.default.useContext(c.RouterContext),w=l.default.useContext(i.AppRouterContext),I=null!=L?L:w,S=!L,{href:T,as:D}=l.default.useMemo(()=>{if(!L){let e=y(a);return{href:e,as:v?y(v):e}}let[e,t]=u.resolveHref(L,a,!0);return{href:e,as:v?u.resolveHref(L,v):t||e}},[L,a,v]),K=l.default.useRef(T),N=l.default.useRef(D);P&&(n=l.default.Children.only(o));let U=P?n&&"object"==typeof n&&n.ref:t,[H,Z,A]=s.useIntersection({rootMargin:"200px"}),B=l.default.useCallback(e=>{(N.current!==D||K.current!==T)&&(A(),N.current=D,K.current=T),H(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[D,U,T,A,H]);l.default.useEffect(()=>{I&&Z&&R&&h(I,T,D,{locale:j})},[D,T,Z,j,R,null==L?void 0:L.locale,I]);let q={ref:B,onClick(e){P||"function"!=typeof k||k(e),P&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,o,n,r,a,f,c,i,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u.isLocalURL(o)))return;e.preventDefault();let v=()=>{"beforePopState"in t?t[r?"replace":"push"](o,n,{shallow:a,locale:c,scroll:f}):t[r?"replace":"push"](n||o,{forceOptimisticNavigation:!s})};i?l.default.startTransition(v):v()}(e,I,T,D,C,M,m,j,S,R)},onMouseEnter(e){P||"function"!=typeof E||E(e),P&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),I&&(R||!S)&&h(I,T,D,{locale:j,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){P||"function"!=typeof O||O(e),P&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),I&&(R||!S)&&h(I,T,D,{locale:j,priority:!0,bypassPrefetchedCheck:!0})}};if(!P||g||"a"===n.type&&!("href"in n.props)){let e=void 0!==j?j:null==L?void 0:L.locale,t=(null==L?void 0:L.isLocaleDomain)&&d.getDomainLocale(D,e,null==L?void 0:L.locales,null==L?void 0:L.domainLocales);q.href=t||p.addBasePath(f.addLocale(D,e,null==L?void 0:L.defaultLocale))}return P?l.default.cloneElement(n,q):l.default.createElement("a",Object.assign({},x,q),o)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2127:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:o,disabled:f}=e,c=f||!l,[i,s]=n.useState(!1),d=n.useRef(null),p=n.useCallback(e=>{d.current=e},[]);n.useEffect(()=>{if(l){if(c||i)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,o){let{id:n,observer:r,elements:l}=function(e){let t;let o={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===o.root&&e.margin===o.margin);if(n&&(t=u.get(n)))return t;let r=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)})},e);return t={id:o,observer:l,elements:r},a.push(o),u.set(o,t),t}(o);return l.set(e,t),r.observe(e),function(){if(l.delete(e),r.unobserve(e),0===l.size){r.disconnect(),u.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:o});return n}}else if(!i){let e=r.requestIdleCallback(()=>s(!0));return()=>r.cancelIdleCallback(e)}},[c,o,t,i,d.current]);let v=n.useCallback(()=>{s(!1)},[]);return[p,i,v]};var n=o(5784),r=o(672);let l="function"==typeof IntersectionObserver,u=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4825:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RouterContext=void 0;var n=(0,o(2648).Z)(o(5784));let r=n.default.createContext(null);t.RouterContext=r},1664:function(e,t,o){e.exports=o(4090)}}]);