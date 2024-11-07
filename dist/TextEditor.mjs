var pe=r=>{throw TypeError(r)};var Kt=(r,i,t)=>i.has(r)||pe("Cannot "+t);var e=(r,i,t)=>(Kt(r,i,"read from private field"),t?t.call(r):i.get(r)),u=(r,i,t)=>i.has(r)?pe("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(r):i.set(r,t),a=(r,i,t,n)=>(Kt(r,i,"write to private field"),n?n.call(r,t):i.set(r,t),t),y=(r,i,t)=>(Kt(r,i,"access private method"),t);function de(r,i){}function ge(r,i){}var jt=null,Qt=null;function gr(){return jt||(jt=mr(1,1)),Qt||(Qt=jt.getContext("2d")),Qt}function mr(r,i){return"OffscreenCanvas"in globalThis?new OffscreenCanvas(r,i):document.createElement("canvas")}function Jt(r){return r.toString(16).padStart(2,"0")}function yr(r){let i=gr();i.fillStyle=r,i.fillRect(0,0,1,1);let t=i.getImageData(0,0,1,1),[n,s,o,h]=t.data;return[`#${Jt(n)}${Jt(s)}${Jt(o)}`,h/255]}function me(r){let[i,t]=yr(r);return`[["^ ","~:fill-color","${i}","~:fill-opacity",${t}]]`}function ye(r,i){for(let t=0;t<i.length;t++){let n=i.item(t);r.setProperty(n,i.getPropertyValue(n))}return r}function xe(r){let i=document.createElement("div"),t=r;for(;t;){for(let n=0;n<t.style.length;n++){let s=t.style.item(n);if(i.style.getPropertyValue(s)){if(t.style.getPropertyPriority(s)==="important"){let I=t.style.getPropertyValue(s);i.style.setProperty(s,I)}}else i.style.setProperty(s,t.style.getPropertyValue(s))}t=t.parentElement}return i.style}function Ee(r){let i=r.getPropertyValue("color");i&&(r.removeProperty("color"),r.setProperty("--fills",me(i)));let t=r.getPropertyValue("font-family"),n=r.getPropertyPriority("--font-id");return t&&!n&&r.removeProperty("font-family"),r}function Ne(r,i,t,n){if(i.startsWith("--")&&typeof t!="string"&&typeof t!="number"){if(i==="--fills"&&t===null)debugger;r.style.setProperty(i,JSON.stringify(t))}else r.style.setProperty(i,t+(n??""));return r}function Pe(r,i,t){if(i.startsWith("--"))return r.getPropertyValue(i);let n=r.getPropertyValue(i);return n.endsWith(t)?n.slice(0,-t.length):n}function xr(r,i,t){for(let[n,s]of i){if(!(n in t))continue;let o=t[n];o&&Ne(r,n,o,s)}return r}function Er(r,i,t){for(let[n,s]of i){let o=Pe(t,n,s);o&&Ne(r,n,o,s)}return r}function j(r,i,t){return t instanceof CSSStyleDeclaration?Er(r,i,t):xr(r,i,t)}function Te(r,i,t){let n={};for(let[s,o]of r)s in t?n[s]=t[s]:n[s]=Pe(i,s,o);return n}function qt(r){return r.display==="block"}function ot(){return Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(36)}function at(r,i){let t=document.createElement(r);return i?.attributes&&Object.entries(i.attributes).forEach(([n,s])=>t.setAttribute(n,s)),i?.data&&Object.entries(i.data).forEach(([n,s])=>t.dataset[n]=s),i?.styles&&i?.allowedStyles&&j(t,i.allowedStyles,i.styles),i?.children&&(Array.isArray(i.children)?t.append(...i.children):t.appendChild(i.children)),t}function ht(r,i){return r.nodeType===Node.ELEMENT_NODE&&r.nodeName===i.toUpperCase()}function Dt(r,i){return i===0}function Rt(r,i){return r.nodeType===Node.TEXT_NODE?r.nodeValue.length===i:!0}var Ce="BR";function lt(){return document.createElement(Ce)}function N(r){return r.nodeType===Node.ELEMENT_NODE&&r.nodeName===Ce}var Ie="SPAN",Zt="inline",Nr=`[data-itype="${Zt}"]`,te=[["--typography-ref-id"],["--typography-ref-file"],["--font-id"],["--font-variant-id"],["--fills"],["font-variant"],["font-family"],["font-size","px"],["font-weight"],["font-style"],["line-height"],["letter-spacing","px"],["text-decoration"],["text-transform"]];function A(r){return!(!r||!ht(r,Ie)||r.dataset.itype!==Zt)}function Se(r){return r?["A","ABBR","ACRONYM","B","BDO","BIG","BR","BUTTON","CITE","CODE","DFN","EM","I","IMG","INPUT","KBD","LABEL","MAP","OBJECT","OUTPUT","Q","SAMP","SCRIPT","SELECT","SMALL","SPAN","STRONG","SUB","SUP","TEXTAREA","TIME","TT","VAR"].includes(r.nodeName):!1}function F(r,i,t){if(!(r instanceof HTMLBRElement)&&!(r instanceof Text))throw new TypeError("Invalid inline child");if(r instanceof Text&&r.nodeValue.length===0)throw console.trace("nodeValue",r.nodeValue),new TypeError("Invalid inline child, cannot be an empty text");return at(Ie,{attributes:{id:ot(),...t},data:{itype:Zt},styles:i,allowedStyles:te,children:r})}function ve(r,i,t,n){return F(i,Te(te,r.style,t),n)}function tt(r){return F(lt(),r)}function gt(r,i){return j(r,te,i)}function P(r){if(!r)return null;if(A(r))return r;if(r.nodeType===Node.TEXT_NODE){let i=r?.parentElement;return!i||!A(i)?null:i}return r.closest(Nr)}function we(r,i){let t=P(r);return t?Dt(t,i):!1}function Lt(r,i){let t=P(r);return t?Rt(t.firstChild,i):!1}function mt(r,i){let t=r.firstChild,n=r.style,s=t.splitText(i);return F(s,n)}function Oe(r){let i=[],t=r,n=0;for(;t;)n>0&&i.push(t),t=t.nextElementSibling,n++;return i}function Ae(r){if(!A(r))throw new Error("Invalid inline");return N(r.firstChild)?0:r.firstChild.nodeValue.length}var Fe="DIV",ee="root",$r=`[data-itype="${ee}"]`,De=[["--vertical-align"]];function Re(r){return!(!r||!ht(r,Fe)||r.dataset.itype!==ee)}function re(r,i,t){if(!Array.isArray(r)||!r.every(M))throw new TypeError("Invalid root children");return at(Fe,{attributes:{id:ot(),...t},data:{itype:ee},styles:i,allowedStyles:De,children:r})}function Le(r){return re([et(r)],r)}function Be(r,i){return j(r,De,i)}function ie(r){if(!r)throw new TypeError("Invalid text node");return r.nodeType===Node.TEXT_NODE||N(r)}function Ve(r){if(!r)throw new TypeError("Invalid text node");return N(r)?0:r.nodeValue.length}function yt(r){if(ie(r))return r;if(A(r))return r.firstChild;if(M(r))return r.firstChild.firstChild;if(Re(r))return r.firstChild.firstChild.firstChild;throw new Error("Cannot find a text node")}var be="DIV",ne="paragraph",Pr=`[data-itype="${ne}"]`,Me=[["--typography-ref-id"],["--typography-ref-file"],["--font-id"],["--font-variant-id"],["--fills"],["font-variant"],["font-family"],["font-size","px"],["font-weight"],["font-style"],["line-height"],["letter-spacing","px"],["text-decoration"],["text-transform"],["text-align"],["direction"]];function Ue(r){return!Se(r)}function ke(r){if(!M(r))throw new TypeError("Invalid paragraph");let i=r.firstChild;if(!A(i))throw new TypeError("Invalid inline");return N(i.firstChild)}function M(r){return!(!r||!ht(r,be)||r.dataset.itype!==ne)}function X(r,i,t){if(r&&(!Array.isArray(r)||!r.every(A)))throw new TypeError("Invalid paragraph children");return at(be,{attributes:{id:ot(),...t},data:{itype:ne},styles:i,allowedStyles:Me,children:r})}function et(r){return X([tt(r)],r)}function xt(r,i){return j(r,Me,i)}function D(r){if(!r)return null;if(M(r))return r;if(r.nodeType===Node.TEXT_NODE||N(r)){let i=r?.parentElement?.parentElement;return!i||!M(i)?null:i}return r.closest(Pr)}function We(r,i){let t=D(r);if(!t)throw new Error("Can't find the paragraph");let n=P(r);if(!n)throw new Error("Can't find the inline");return t.firstElementChild===n&&Dt(n.firstChild,i)}function _e(r,i){let t=D(r);if(!t)throw new Error("Cannot find the paragraph");let n=P(r);if(!n)throw new Error("Cannot find the inline");return t.lastElementChild===n&&Rt(n.firstChild,i)}function Bt(r,i,t){let n=r.style;if(Lt(i,t))return X(Oe(i),n);let s=mt(i,t);return X([s],n)}function Vt(r,i){return r.append(...i.children),i.remove(),r}function Tr(r,i,t){let n=r.createNodeIterator(i,NodeFilter.SHOW_TEXT),s=r.createDocumentFragment(),o=null,h=n.nextNode();for(;h;){let I=Ee(ye(t,xe(h.parentElement)));qt(h.parentElement.style)||qt(I)||Ue(h.parentElement)?(o&&s.appendChild(o),o=X(void 0,I)):o===null&&(o=X()),o.appendChild(F(new Text(h.nodeValue),I)),h=n.nextNode()}return s.appendChild(o),s}function Ge(r,i){let n=new DOMParser().parseFromString(r,"text/html");return Tr(n,n.documentElement,i)}function Xe(r,i){let t=r.replace(/\r/g,"").split(`
`),n=document.createDocumentFragment();for(let s of t)s===""?n.appendChild(et(i)):n.appendChild(X([F(new Text(s),i)],i));return n}function $e(r,i,t){r.preventDefault();let n=null;if(r.clipboardData.types.includes("text/html")){let s=r.clipboardData.getData("text/html");n=Ge(s,t.currentStyle)}else if(r.clipboardData.types.includes("text/plain")){let s=r.clipboardData.getData("text/plain");n=Xe(s,t.currentStyle)}n&&(t.isCollapsed?t.insertPaste(n):t.replaceWithPaste(n))}var bt={copy:de,cut:ge,paste:$e};function Ye(r,i,t){if(r.preventDefault(),t.isCollapsed){if(t.isTextFocus)return t.insertText(r.data);if(t.isLineBreakFocus)return t.replaceLineBreak(r.data)}else{if(t.isMultiParagraph)return t.replaceParagraphs(r.data);if(t.isMultiInline)return t.replaceInlines(r.data);if(t.isTextSame)return t.replaceText(r.data)}}function ze(r,i,t){return r.preventDefault(),t.isCollapsed?t.insertParagraph():t.replaceWithParagraph()}function He(r,i,t){if(r.preventDefault(),t.isCollapsed)throw new Error("This should be impossible");return t.removeSelected()}function Ke(r,i,t){if(r.preventDefault(),!i.isEmpty){if(!t.isCollapsed)return t.removeSelected({direction:"backward"});if(t.isTextFocus&&t.focusOffset>0)return t.removeBackwardText();if(t.isTextFocus&&t.focusAtStart)return t.mergeBackwardParagraph();if(t.isInlineFocus||t.isLineBreakFocus)return t.removeBackwardParagraph()}}function je(r,i,t){if(r.preventDefault(),!i.isEmpty){if(!t.isCollapsed)return t.removeSelected({direction:"forward"});if(t.isTextFocus&&t.focusOffset>=0)return t.removeForwardText();if(t.isTextFocus&&t.focusAtEnd)return t.mergeForwardParagraph();if((t.isInlineFocus||t.isLineBreakFocus)&&i.numParagraphs>1)return t.removeForwardParagraph()}}var Mt={insertText:Ye,insertParagraph:ze,deleteByCut:He,deleteContentBackward:Ke,deleteContentForward:je};var rt,Et,Nt,Pt,se=class extends EventTarget{constructor(t=500){super();u(this,rt,null);u(this,Et,1e3);u(this,Nt,!1);u(this,Pt,()=>{this.dispatchEvent(new Event("change"))});if(typeof t=="number"&&(!Number.isInteger(t)||t<=0))throw new TypeError("Invalid time");a(this,Et,t??500)}get hasPendingChanges(){return e(this,Nt)}notifyDebounced(){a(this,Nt,!0),clearTimeout(e(this,rt)),a(this,rt,setTimeout(e(this,Pt),e(this,Et)))}notifyImmediately(){clearTimeout(e(this,rt)),e(this,Pt).call(this)}dispose(){this.hasPendingChanges&&this.notifyImmediately(),clearTimeout(e(this,rt))}};rt=new WeakMap,Et=new WeakMap,Nt=new WeakMap,Pt=new WeakMap;var Qe=se;function it(r){if(!Number.isInteger(r)||r<0)throw new TypeError("Invalid offset")}function nt(r){if(typeof r!="string")throw new TypeError("Invalid string")}function oe(r,i,t){return nt(r),it(i),nt(t),r.slice(0,i)+t+r.slice(i)}function Je(r,i,t,n){return nt(r),it(i),it(t),nt(n),r.slice(0,i)+n+r.slice(t)}function qe(r,i){return nt(r),it(i),i===0?r:r.slice(0,i-1)+r.slice(i)}function Ze(r,i){return nt(r),it(i),r.slice(0,i)+r.slice(i+1)}function tr(r,i,t){return nt(r),it(i),it(t),r.slice(0,i)+r.slice(t)}var Q={FORWARD:1,BACKWARD:0},st,w,T=class T{constructor(i){u(this,st,null);u(this,w,null);if(!(i instanceof HTMLElement))throw new TypeError("Invalid root node");a(this,st,i),a(this,w,T.findDown(i,i))}static isTextNode(i){return i.nodeType===Node.TEXT_NODE||i.nodeType===Node.ELEMENT_NODE&&i.nodeName==="BR"}static isContainerNode(i){return i.nodeType===Node.ELEMENT_NODE&&i.nodeName!=="BR"}static findDown(i,t,n=new Set,s=Q.FORWARD){if(i===t)return T.findDown(s===Q.FORWARD?i.firstChild:i.lastChild,t,n,s);let o=Date.now(),h=i;for(;h;){if(Date.now()-o>=1e3)throw new Error("Iteration timeout");if(n.has(h)){h=s===Q.FORWARD?h.nextSibling:h.previousSibling;continue}if(T.isTextNode(h))return h;if(T.isContainerNode(h))return T.findDown(s===Q.FORWARD?h.firstChild:h.lastChild,t,n,s);h=s===Q.FORWARD?h.nextSibling:h.previousSibling}return null}static findUp(i,t,n=new Set,s=Q.FORWARD){if(n.add(i),T.isTextNode(i))return T.findUp(i.parentNode,t,n,s);if(T.isContainerNode(i)){let o=T.findDown(i,t,n,s);if(o)return o;if(i!==t)return T.findUp(i.parentNode,t,n,s)}return null}get currentNode(){return e(this,w)}set currentNode(i){let t=(i.compareDocumentPosition(e(this,st))&Node.DOCUMENT_POSITION_CONTAINS)===Node.DOCUMENT_POSITION_CONTAINS;if(!(i instanceof Node)||!T.isTextNode(i)||!t)throw new TypeError("Invalid new current node");a(this,w,i)}nextNode(){if(!e(this,w))return null;let i=T.findUp(e(this,w),e(this,st),new Set,Q.FORWARD);return i?(a(this,w,i),e(this,w)):null}previousNode(){if(!e(this,w))return null;let i=T.findUp(e(this,w),e(this,st),new Set,Q.BACKWARD);return i?(a(this,w,i),e(this,w)):null}};st=new WeakMap,w=new WeakMap;var ae=T,er=ae;var $,Y,z,he=class{constructor(i,t,n){u(this,$,new Set);u(this,Y,new Set);u(this,z,new Set);i&&Array.isArray(i)&&a(this,$,new Set(i)),t&&Array.isArray(t)&&a(this,z,new Set(t)),n&&Array.isArray(n)&&a(this,Y,new Set(n))}get added(){return e(this,$)}get removed(){return e(this,Y)}get updated(){return e(this,z)}clear(){e(this,$).clear(),e(this,Y).clear(),e(this,z).clear()}dispose(){e(this,$).clear(),a(this,$,null),e(this,Y).clear(),a(this,Y,null),e(this,z).clear(),a(this,z,null)}add(i){return e(this,$).add(i),this}remove(i){return e(this,Y).add(i),this}update(i){return e(this,z).add(i),this}};$=new WeakMap,Y=new WeakMap,z=new WeakMap;var rr=he;var ut={FORWARD:1,NONE:0,BACKWARD:-1};var ir=Date.now();function Cr(){ir=Date.now()}function Ir(){if(Date.now-ir>=1e3)throw new Error("Safe guard timeout")}var Tt={start:Cr,update:Ir};var U,c,R,g,L,J,H,ct,l,f,B,Ct,ft,d,pt,x,ue,Ut,nr,It,kt,sr,or,ar,le=class extends EventTarget{constructor(t,n,s){super();u(this,x);u(this,U,null);u(this,c,null);u(this,R,new Set);u(this,g,null);u(this,L,null);u(this,J,0);u(this,H,null);u(this,ct,0);u(this,l,null);u(this,f,null);u(this,B,null);u(this,Ct,null);u(this,ft,null);u(this,d,new rr);u(this,pt,null);u(this,It,t=>{if(!this.hasFocus)return;let n=!1,s=!1;if(e(this,L)!==e(this,c).focusNode&&(a(this,L,e(this,c).focusNode),n=!0),a(this,J,e(this,c).focusOffset),e(this,H)!==e(this,c).anchorNode&&(a(this,H,e(this,c).anchorNode),s=!0),a(this,ct,e(this,c).anchorOffset),e(this,c).rangeCount>1)for(let o=0;o<e(this,c).rangeCount;o++){let h=e(this,c).getRangeAt(o);e(this,R).has(h)?(e(this,R).delete(h),e(this,c).removeRange(h)):(e(this,R).add(h),a(this,g,h))}else if(e(this,c).rangeCount>0){let o=e(this,c).getRangeAt(0);a(this,g,o),e(this,R).clear(),e(this,R).add(o)}else a(this,g,null),e(this,R).clear();n&&y(this,x,kt).call(this),e(this,ft)&&e(this,ft).update(this)});a(this,ft,s?.debug),a(this,pt,s?.styleDefaults),a(this,c,n),a(this,U,t),a(this,f,new er(e(this,U).element)),y(this,x,sr).call(this)}get currentStyle(){return e(this,B)}saveSelection(){return a(this,l,{isCollapsed:e(this,c).isCollapsed,focusNode:e(this,c).focusNode,focusOffset:e(this,c).focusOffset,anchorNode:e(this,c).anchorNode,anchorOffset:e(this,c).anchorOffset,range:y(this,x,or).call(this)}),!0}restoreSelection(){return e(this,l)?(e(this,l).anchorNode&&e(this,l).focusNode&&(e(this,l).anchorNode===e(this,l).focusNode?e(this,c).setPosition(e(this,l).focusNode,e(this,l).focusOffset):e(this,c).setBaseAndExtent(e(this,l).anchorNode,e(this,l).anchorOffset,e(this,l).focusNode,e(this,l).focusOffset)),a(this,l,null),!0):!1}startMutation(){return e(this,d).clear(),!!e(this,L)}endMutation(){return e(this,d)}selectAll(){return e(this,c).selectAllChildren(e(this,U).root),this}cursorToEnd(){let t=document.createRange();return t.selectNodeContents(e(this,U).element),t.collapse(!1),e(this,c).removeAllRanges(),e(this,c).addRange(t),this}collapse(t,n){let s=t.nodeType===Node.TEXT_NODE&&n>=t.nodeValue.length?t.nodeValue.length:n;return this.setSelection(t,s,t,s)}setSelection(t,n,s=t,o=n){if(!t.isConnected)throw new Error("Invalid anchorNode");if(!s.isConnected)throw new Error("Invalid focusNode");e(this,l)?(e(this,l).isCollapsed=s===t&&n===o,e(this,l).focusNode=s,e(this,l).focusOffset=o,e(this,l).anchorNode=t,e(this,l).anchorOffset=n,e(this,l).range.collapsed=e(this,l).isCollapsed,s.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING?(e(this,l).range.startContainer=s,e(this,l).range.startOffset=o,e(this,l).range.endContainer=t,e(this,l).range.endOffset=n):(e(this,l).range.startContainer=t,e(this,l).range.startOffset=n,e(this,l).range.endContainer=s,e(this,l).range.endOffset=o)):(a(this,H,t),a(this,ct,n),t===s?(a(this,L,e(this,H)),a(this,J,e(this,ct)),e(this,c).setPosition(t,n)):(a(this,L,s),a(this,J,o),e(this,c).setBaseAndExtent(t,n,s,o)))}dispose(){document.removeEventListener("selectionchange",e(this,It)),a(this,U,null),e(this,R).clear(),a(this,R,null),a(this,g,null),a(this,c,null),a(this,L,null),a(this,H,null),e(this,d).dispose(),a(this,d,null)}get selection(){return e(this,c)}get range(){return e(this,g)}get direction(){return this.isCollapsed?ut.NONE:this.focusNode!==this.anchorNode?this.startContainer===this.focusNode?ut.BACKWARD:ut.FORWARD:this.focusOffset<this.anchorOffset?ut.BACKWARD:ut.FORWARD}get hasFocus(){return document.activeElement===e(this,U).element}get isCollapsed(){return e(this,l)?e(this,l).isCollapsed:e(this,c).isCollapsed}get anchorNode(){return e(this,l)?e(this,l).anchorNode:e(this,H)}get anchorOffset(){return e(this,l)?e(this,l).anchorOffset:e(this,c).anchorOffset}get anchorAtStart(){return this.anchorOffset===0}get anchorAtEnd(){return this.anchorOffset===this.anchorNode.nodeValue.length}get focusNode(){return e(this,l)?e(this,l).focusNode:(e(this,L)||console.trace("focusNode",e(this,L)),e(this,L))}get focusOffset(){return e(this,l)?e(this,l).focusOffset:e(this,J)}get focusAtStart(){return this.focusOffset===0}get focusAtEnd(){return this.focusOffset===this.focusNode.nodeValue.length}get focusParagraph(){return D(this.focusNode)}get focusInline(){return P(this.focusNode)}get anchorParagraph(){return D(this.anchorNode)}get anchorInline(){return P(this.anchorNode)}get startContainer(){return e(this,l)?e(this,l)?.range?.startContainer:e(this,g)?.startContainer}get startOffset(){return e(this,l)?e(this,l)?.range?.startOffset:e(this,g)?.startOffset}get startParagraph(){let t=this.startContainer;return t?D(t):null}get startInline(){let t=this.startContainer;return t?P(t):null}get endContainer(){return e(this,l)?e(this,l)?.range?.endContainer:e(this,g)?.endContainer}get endOffset(){return e(this,l)?e(this,l)?.range?.endOffset:e(this,g)?.endOffset}get endParagraph(){let t=this.endContainer;return t?D(t):null}get endInline(){let t=this.endContainer;return t?P(t):null}get isTextSame(){return this.isTextFocus===this.isTextAnchor&&this.focusNode===this.anchorNode}get isTextFocus(){return this.focusNode.nodeType===Node.TEXT_NODE}get isTextAnchor(){return this.anchorNode.nodeType===Node.TEXT_NODE}get isInlineFocus(){return A(this.focusNode)}get isInlineAnchor(){return A(this.anchorNode)}get isParagraphFocus(){return M(this.focusNode)}get isParagraphAnchor(){return M(this.anchorNode)}get isLineBreakFocus(){return N(this.focusNode)||A(this.focusNode)&&N(this.focusNode.firstChild)}get isMulti(){return this.focusNode!==this.anchorNode}get isMultiParagraph(){return this.isMulti&&this.focusParagraph!==this.anchorParagraph}get isMultiInline(){return this.isMulti&&this.focusInline!==this.anchorInline}get isInlineStart(){return this.isCollapsed?we(this.focusNode,this.focusOffset):!1}get isInlineEnd(){return this.isCollapsed?Lt(this.focusNode,this.focusOffset):!1}get isParagraphStart(){return this.isCollapsed?We(this.focusNode,this.focusOffset):!1}get isParagraphEnd(){return this.isCollapsed?_e(this.focusNode,this.focusOffset):!1}insertPaste(t){let n=t.children.length;if(this.isParagraphStart)this.focusParagraph.before(t);else if(this.isParagraphEnd)this.focusParagraph.after(t);else{let s=Bt(this.focusParagraph,this.focusInline,this.focusOffset);this.focusParagraph.after(t,s)}}replaceWithPaste(t){let n=t.children.length;this.removeSelected(),this.insertPaste(t)}replaceLineBreak(t){let n=new Text(t);this.focusInline.replaceChildren(n),this.collapse(n,t.length)}removeForwardText(){e(this,f).currentNode=this.focusNode;let t=Ze(this.focusNode.nodeValue,this.focusOffset);this.focusNode.nodeValue!==t&&(this.focusNode.nodeValue=t);let n=this.focusParagraph;if(!n)throw new Error("Cannot find paragraph");let s=this.focusInline;if(!s)throw new Error("Cannot find inline");let o=e(this,f).nextNode();if(this.focusNode.nodeValue===""&&this.focusNode.remove(),n.childNodes.length===1&&s.childNodes.length===0){let h=lt();return s.appendChild(h),this.collapse(h,0)}else if(n.childNodes.length>1&&s.childNodes.length===0)return s.remove(),this.collapse(o,0);return this.collapse(this.focusNode,this.focusOffset)}removeBackwardText(){e(this,f).currentNode=this.focusNode;let t=qe(this.focusNode.nodeValue,this.focusOffset);if(this.focusNode.nodeValue!==t&&(this.focusNode.nodeValue=t),this.focusOffset-1>0)return this.collapse(this.focusNode,this.focusOffset-1);let n=this.focusParagraph;if(!n)throw new Error("Cannot find paragraph");let s=this.focusInline;if(!s)throw new Error("Cannot find inline");let o=e(this,f).previousNode();if(this.focusNode.nodeValue===""&&this.focusNode.remove(),n.children.length===1&&s.childNodes.length===0){let h=lt();return s.appendChild(h),this.collapse(h,0)}else if(n.children.length>1&&s.childNodes.length===0)return s.remove(),this.collapse(o,Ve(o));return this.collapse(this.focusNode,this.focusOffset-1)}insertText(t){return this.focusNode.nodeValue=oe(this.focusNode.nodeValue,this.focusOffset,t),e(this,d).update(this.focusInline),this.collapse(this.focusNode,this.focusOffset+t.length)}insertIntoFocus(t){if(this.isTextFocus)this.focusNode.nodeValue=oe(this.focusNode.nodeValue,this.focusOffset,t);else if(this.isLineBreakFocus){let n=new Text(t);this.focusNode.replaceWith(n),this.collapse(n,t.length)}else throw new Error("Unknown node type")}replaceText(t){let n=Math.min(this.anchorOffset,this.focusOffset),s=Math.max(this.anchorOffset,this.focusOffset);if(this.isTextFocus)this.focusNode.nodeValue=Je(this.focusNode.nodeValue,n,s,t);else if(this.isLineBreakFocus)this.focusNode.replaceWith(new Text(t));else throw new Error("Unknown node type");return e(this,d).update(this.focusInline),this.collapse(this.focusNode,n+t.length)}replaceInlines(t){let n=this.focusParagraph;if(this.startInline===n.firstChild&&this.startOffset===0&&this.endInline===n.lastChild&&this.endOffset===n.lastChild.textContent.length){let s=new Text(t);return n.replaceChildren(F(s,this.anchorInline.style)),this.collapse(s,s.nodeValue.length)}return this.removeSelected(),this.insertIntoFocus(t),this.collapse(this.focusNode,this.focusOffset+t.length)}replaceParagraphs(t){let n=this.focusParagraph;this.removeSelected(),this.insertIntoFocus(t);for(let s of n.children)s.textContent===""&&s.remove()}insertParagraphAfter(){let t=this.focusParagraph,n=et(e(this,B));return t.after(n),e(this,d).update(t),e(this,d).add(n),this.collapse(n.firstChild.firstChild,0)}insertParagraphBefore(){let t=this.focusParagraph,n=et(e(this,B));return t.before(n),e(this,d).update(t),e(this,d).add(n),this.collapse(t.firstChild.firstChild,0)}splitParagraph(){let t=this.focusParagraph,n=Bt(this.focusParagraph,this.focusInline,e(this,J));return this.focusParagraph.after(n),e(this,d).update(t),e(this,d).add(n),this.collapse(n.firstChild.firstChild,0)}insertParagraph(){return this.isParagraphEnd?this.insertParagraphAfter():this.isParagraphStart?this.insertParagraphBefore():this.splitParagraph()}replaceWithParagraph(){let t=this.focusParagraph,n=this.focusInline;this.removeSelected();let s=Bt(t,n,this.focusOffset);t.after(s),e(this,d).update(t),e(this,d).add(s)}removeBackwardParagraph(){let t=this.focusParagraph.previousElementSibling;if(!t)return;let n=this.focusParagraph;n.remove();let s=t.children.length>1?t.lastElementChild:t.firstChild,o=N(s.firstChild)?0:s.firstChild.nodeValue.length;return e(this,d).remove(n),this.collapse(s.firstChild,o)}mergeBackwardParagraph(){let t=this.focusParagraph,n=this.focusParagraph.previousElementSibling;if(!n)return;let s=n.lastChild,o=Ae(s);return ke(n)?(n.replaceChildren(...t.children),s=n.firstChild,t.remove()):Vt(n,t),e(this,d).remove(t),e(this,d).update(n),this.collapse(s.firstChild,o)}mergeForwardParagraph(){let t=this.focusParagraph,n=this.focusParagraph.nextElementSibling;n&&(Vt(this.focusParagraph,n),e(this,d).update(t),e(this,d).remove(n))}removeForwardParagraph(){let t=this.focusParagraph.nextSibling;if(!t)return;let n=this.focusParagraph;n.remove();let s=t.firstChild,o=this.focusOffset;return e(this,d).remove(n),this.collapse(s.firstChild,o)}cleanUp(t,n){for(let s of n)s.textContent===""&&(s.remove(),e(this,d).remove(s));for(let s of t)s.children.length===0&&(s.remove(),e(this,d).remove(s))}removeSelected(t){if(this.isCollapsed)return;let n=new Set,s=new Set,o=yt(e(this,g).startContainer),h=yt(e(this,g).endContainer),I=e(this,g).startOffset,V=e(this,g).endOffset,_=null,S=null;if(o===h){e(this,f).currentNode=o,_=e(this,f).previousNode(),e(this,f).currentNode=o,S=e(this,f).nextNode();let E=P(o),b=D(o);n.add(E),s.add(b);let G=tr(o.nodeValue,I,V);if(G===""){let Z=lt();return E.replaceChildren(Z),this.collapse(Z,0)}return o.nodeValue=G,this.collapse(o,I)}e(this,f).currentNode=o;let v=P(o),q=D(o),K=P(h),fe=D(h);Tt.start();do{Tt.update();let E=e(this,f).currentNode,b=P(e(this,f).currentNode),G=D(e(this,f).currentNode),Z=!1;if(e(this,f).currentNode===o?I===0?Z=!0:E.nodeValue=E.nodeValue.slice(0,I):e(this,f).currentNode===h?N(h)||ie(h)&&V===h.nodeValue.length?Z=!0:E.nodeValue=E.nodeValue.slice(V):Z=!0,e(this,f).nextNode(),Z){if(E.remove(),E===o)continue;if(E===h)break;b.childNodes.length===0&&b.remove(),G!==q&&G.children.length===0&&G.remove()}if(E===h)break}while(e(this,f).currentNode);if(q!==fe){let E=Vt(q,fe);if(E.children.length===0){let b=tt(e(this,B));return E.appendChild(b),this.collapse(b.firstChild,0)}}if(v.childNodes.length===0&&K.childNodes.length>0)return v.remove(),this.collapse(h,0);if(v.childNodes.length>0&&K.childNodes.length===0)return K.remove(),this.collapse(o,I);if(v.childNodes.length===0&&K.childNodes.length===0){let E=v.previousElementSibling,b=K.nextElementSibling;if(v.remove(),K.remove(),E)return this.collapse(E.firstChild,E.firstChild.nodeValue.length);if(b)return this.collapse(b.firstChild,0);let G=tt(e(this,B));return q.appendChild(G),this.collapse(G.firstChild,0)}return this.collapse(o,I)}applyStyles(t){return y(this,x,ar).call(this,this.startContainer,this.startOffset,this.endContainer,this.endOffset,t)}};U=new WeakMap,c=new WeakMap,R=new WeakMap,g=new WeakMap,L=new WeakMap,J=new WeakMap,H=new WeakMap,ct=new WeakMap,l=new WeakMap,f=new WeakMap,B=new WeakMap,Ct=new WeakMap,ft=new WeakMap,d=new WeakMap,pt=new WeakMap,x=new WeakSet,ue=function(){if(e(this,pt))for(let[t,n]of Object.entries(e(this,pt)))e(this,B).setProperty(t,n+(t==="font-size"?"px":""))},Ut=function(t){for(let n=0;n<t.style.length;n++){let s=t.style.item(n),o=t.style.getPropertyValue(s);e(this,B).setProperty(s,o)}},nr=function(t){y(this,x,ue).call(this);let n=t.parentElement.parentElement;y(this,x,Ut).call(this,n);let s=t.parentElement;return y(this,x,Ut).call(this,s),y(this,x,Ut).call(this,t),this},It=new WeakMap,kt=function(){let t=this.focusInline;t&&(y(this,x,nr).call(this,t),this.dispatchEvent(new CustomEvent("stylechange",{detail:e(this,B)})))},sr=function(){if(a(this,Ct,document.createElement("div")),a(this,B,e(this,Ct).style),y(this,x,ue).call(this),e(this,c).rangeCount>0){let t=e(this,c).getRangeAt(0);a(this,g,t),e(this,R).add(t)}if(e(this,c).rangeCount>1)for(let t=1;t<e(this,c).rangeCount;t++)e(this,c).removeRange(t);document.addEventListener("selectionchange",e(this,It))},or=function(){return e(this,g)?{collapsed:e(this,g).collapsed,commonAncestorContainer:e(this,g).commonAncestorContainer,startContainer:e(this,g).startContainer,startOffset:e(this,g).startOffset,endContainer:e(this,g).endContainer,endOffset:e(this,g).endOffset}:{collapsed:!0,commonAncestorContainer:null,startContainer:null,startOffset:0,endContainer:null,endOffset:0}},ar=function(t,n,s,o,h){let I=e(this,U).root;if(Be(I,h),t===s&&t.nodeType===Node.TEXT_NODE){if(n===0&&o===s.nodeValue.length){let V=this.startParagraph,_=this.startInline;xt(V,h),gt(_,h)}else if(n!==o){let V=this.startParagraph;xt(V,h);let _=this.startInline,S=t.splitText(n),v=S.splitText(o-n),q=ve(_,S,h);if(_.after(q),v.length>0){let K=F(v,_.style);q.after(K)}this.setSelection(S,0,S,S.nodeValue.length)}else{let V=this.startParagraph;xt(V,h)}return y(this,x,kt).call(this)}else if(t!==s){Tt.start();let V=yt(s);e(this,f).currentNode=yt(t);do{Tt.update();let _=D(e(this,f).currentNode);xt(_,h);let S=P(e(this,f).currentNode);if(e(this,f).currentNode===t&&n>0){let v=mt(S,n);gt(v,h),S.after(v)}else if(e(this,f).currentNode===t&&n===0||e(this,f).currentNode!==t&&e(this,f).currentNode!==s||e(this,f).currentNode===s&&o===s.nodeValue.length)gt(S,h);else if(e(this,f).currentNode===s&&o<s.nodeValue.length){let v=mt(S,o);gt(S,h),S.after(v)}if(e(this,f).currentNode===V)return;e(this,f).nextNode()}while(e(this,f).currentNode)}return y(this,x,kt).call(this)};var hr=le;function lr(r,i){let t=document.createDocumentFragment();for(let n of i){let s=document.createElement("div");s.className="selection-imposter-rect",s.style.left=`${n.x-r.x}px`,s.style.top=`${n.y-r.y}px`,s.style.width=`${n.width}px`,s.style.height=`${n.height}px`,t.appendChild(s)}return t}function ur(r,i,t){Object.entries(i).forEach(([n,s])=>r.addEventListener(n,s,t))}function cr(r,i){Object.entries(i).forEach(([t,n])=>r.removeEventListener(t,n))}var Sr={FULL:"full",PARTIAL:"partial"},St=Sr;var p,dt,O,k,m,W,wt,C,fr,pr,Ot,At,dr,ce,_t,Gt,Xt,$t,Yt,zt,Ht,Wt,vt=class extends EventTarget{constructor(t,n){super();u(this,C);u(this,p,null);u(this,dt,null);u(this,O,null);u(this,k,null);u(this,m,null);u(this,W,null);u(this,wt,null);u(this,Ot,t=>this.dispatchEvent(new t.constructor(t.type,t)));u(this,At,t=>{e(this,W).children.length>0&&y(this,C,ce).call(this),this.dispatchEvent(new t.constructor(t.type,t))});u(this,_t,t=>{e(this,k).notifyImmediately(),e(this,m).saveSelection(),y(this,C,ce).call(this),this.dispatchEvent(new FocusEvent(t.type,t))});u(this,Gt,t=>{e(this,m).restoreSelection(),e(this,W)&&e(this,W).replaceChildren(),this.dispatchEvent(new FocusEvent(t.type,t))});u(this,Xt,t=>bt.paste(t,this,e(this,m)));u(this,$t,t=>bt.cut(t,this,e(this,m)));u(this,Yt,t=>bt.copy(t,this,e(this,m)));u(this,zt,t=>{if(!(t.inputType==="historyUndo"||t.inputType==="historyRedo")){if(!(t.inputType in Mt)){t.inputType!=="insertCompositionText"&&t.preventDefault();return}if(t.inputType in Mt){let n=Mt[t.inputType];if(!e(this,m).startMutation())return;n(t,this,e(this,m));let s=e(this,m).endMutation();y(this,C,Wt).call(this,St.FULL,s)}}});u(this,Ht,t=>{t.inputType==="historyUndo"||t.inputType==="historyRedo"||t.inputType==="insertCompositionText"&&y(this,C,Wt).call(this,St.FULL,null)});if(!(t instanceof HTMLElement))throw new TypeError("Invalid text editor element");a(this,p,t),a(this,W,n?.selectionImposterElement),a(this,dt,{blur:e(this,_t),focus:e(this,Gt),paste:e(this,Xt),cut:e(this,$t),copy:e(this,Yt),beforeinput:e(this,zt),input:e(this,Ht)}),a(this,wt,n?.styleDefaults),y(this,C,dr).call(this,n)}get root(){return e(this,O)}set root(t){let n=e(this,O);a(this,O,t),n.replaceWith(t)}get element(){return e(this,p)}get isEmpty(){return e(this,O).children.length===1&&e(this,O).firstElementChild.children.length===1&&N(e(this,O).firstElementChild.firstElementChild.firstChild)}get numParagraphs(){return e(this,O).children.length}get currentStyle(){return e(this,m).currentStyle}focus(){return e(this,p).focus()}blur(){return e(this,p).blur()}createRoot(...t){return re(...t)}createParagraph(...t){return X(...t)}createInlineFromString(t,n){return t===""?tt(n):F(new Text(t),n)}createInline(...t){return F(...t)}applyStylesToSelection(t){e(this,m).startMutation(),e(this,m).applyStyles(t);let n=e(this,m).endMutation();return y(this,C,Wt).call(this,St.FULL,n),e(this,k).notifyImmediately(),this}selectAll(){return e(this,m).selectAll(),this}cursorToEnd(){return e(this,m).cursorToEnd(),this}dispose(){e(this,k).removeEventListener("change",e(this,Ot)),e(this,k).dispose(),a(this,k,null),e(this,m).removeEventListener("stylechange",e(this,At)),e(this,m).dispose(),a(this,m,null),cr(e(this,p),e(this,dt)),a(this,p,null),a(this,O,null)}};p=new WeakMap,dt=new WeakMap,O=new WeakMap,k=new WeakMap,m=new WeakMap,W=new WeakMap,wt=new WeakMap,C=new WeakSet,fr=function(){e(this,p).isContentEditable||(e(this,p).contentEditable="true",e(this,p).isContentEditable||e(this,p).setAttribute("contenteditable","true")),e(this,p).spellcheck&&(e(this,p).spellcheck=!1),e(this,p).autocapitalize&&(e(this,p).autocapitalize=!1),e(this,p).autofocus||(e(this,p).autofocus=!0),(!e(this,p).role||e(this,p).role!=="textbox")&&(e(this,p).role="textbox"),e(this,p).ariaAutoComplete&&(e(this,p).ariaAutoComplete=!1),e(this,p).ariaMultiLine||(e(this,p).ariaMultiLine=!0),e(this,p).dataset.itype="editor"},pr=function(){a(this,O,Le(e(this,wt))),e(this,p).appendChild(e(this,O))},Ot=new WeakMap,At=new WeakMap,dr=function(t){y(this,C,fr).call(this),y(this,C,pr).call(this),a(this,k,new Qe(this)),e(this,k).addEventListener("change",e(this,Ot)),a(this,m,new hr(this,document.getSelection(),t)),e(this,m).addEventListener("stylechange",e(this,At)),ur(e(this,p),e(this,dt),{capture:!0})},ce=function(){if(e(this,W)&&!e(this,m).isCollapsed){let t=e(this,m).range?.getClientRects();if(t){let n=e(this,W).getBoundingClientRect();e(this,W).replaceChildren(lr(n,t))}}},_t=new WeakMap,Gt=new WeakMap,Xt=new WeakMap,$t=new WeakMap,Yt=new WeakMap,zt=new WeakMap,Ht=new WeakMap,Wt=function(t=St.FULL,n){this.dispatchEvent(new CustomEvent("needslayout",{detail:{type:t,mutations:n}}))};function Ft(r){return r instanceof vt}function pn(r){return Ft(r)?r.root:null}function dn(r,i){return Ft(r)&&(r.root=i),r}function gn(r,i){return new vt(r,{...i})}function mn(r){if(Ft(r))return r.currentStyle}function yn(r,i){if(Ft(r))return r.applyStylesToSelection(i)}function xn(r){Ft(r)&&r.dispose()}var En=vt;export{vt as TextEditor,yn as applyStylesToSelection,gn as create,En as default,xn as dispose,mn as getCurrentStyle,pn as getRoot,Ft as isEditor,dn as setRoot};
//# sourceMappingURL=TextEditor.mjs.map