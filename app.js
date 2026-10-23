(()=>{var _n=(n,t,e)=>()=>{if(e)throw e[0];try{return n&&(t=n(n=0)),t}catch(i){throw e=[i],i}};var bd=(n,t)=>()=>{try{return t||n((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};function Jn(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]).toLowerCase()}function Ne(n,t,e){return Math.max(t,Math.min(e,n))}function ah(n,t){return(n%t+t)%t}function a0(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function l0(n,t,e){return n!==t?(e-n)/(t-n):0}function Rr(n,t,e){return(1-e)*n+e*t}function c0(n,t,e,i){return Rr(n,t,1-Math.exp(-e*i))}function h0(n,t=1){return t-Math.abs(ah(n,t*2)-t)}function f0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function u0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function d0(n,t){return n+Math.floor(Math.random()*(t-n+1))}function p0(n,t){return n+Math.random()*(t-n)}function m0(n){return n*(.5-Math.random())}function g0(n){n!==void 0&&(Xh=n);let t=Xh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _0(n){return n*Ar}function y0(n){return n*Ur}function x0(n){return(n&n-1)===0&&n!==0}function v0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function b0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function M0(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),f=r((t-i)/2),p=o((t-i)/2),m=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*f,l*p,a*c);break;case"YZY":n.set(l*p,a*h,l*f,a*c);break;case"ZXZ":n.set(l*f,l*p,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*m,a*c);break;case"YXY":n.set(l*m,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Vn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ge(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}function au(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Jo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function S0(){let n=Jo("canvas");return n.style.display="block",n}function Xo(n){n in Yh||(Yh[n]=!0,console.warn(n))}function w0(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function E0(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function T0(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}function Ks(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ja(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function Qa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?gc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function el(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ns.fromArray(n,r);let a=s.x*Math.abs(ns.x)+s.y*Math.abs(ns.y)+s.z*Math.abs(ns.z),l=t.dot(ns),c=e.dot(ns),h=i.dot(ns);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function pl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}function B0(n,t,e,i,s,r,o,a){let l;if(t.side===Fe?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===vn,a),l===null)return null;Ao.copy(a),Ao.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Ao);return c<e.near||c>e.far?null:{distance:c,point:Ao.clone(),object:n}}function Ro(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,So),n.getVertexPosition(l,wo),n.getVertexPosition(c,Eo);let h=B0(n,t,e,i,So,wo,Eo,af);if(h){let f=new G;Hi.getBarycoord(af,So,wo,Eo,f),s&&(h.uv=Hi.getInterpolatedAttribute(s,a,l,c,f,new dt)),r&&(h.uv1=Hi.getInterpolatedAttribute(r,a,l,c,f,new dt)),o&&(h.normal=Hi.getInterpolatedAttribute(o,a,l,c,f,new G),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let p={a,b:l,c,normal:new G,materialIndex:0};Hi.getNormal(So,wo,Eo,p.normal),h.face=p,h.barycoord=f}return h}function rr(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function on(n){let t={};for(let e=0;e<n.length;e++){let i=rr(n[e]);for(let s in i)t[s]=i[s]}return t}function z0(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function cu(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}function hu(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Y0(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,f=c.byteLength,p=n.createBuffer();n.bindBuffer(l,p),n.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){let h=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,h);else{f.sort((m,g)=>m.start-g.start);let p=0;for(let m=1;m<f.length;m++){let g=f[p],_=f[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++p,f[p]=_)}f.length=p+1;for(let m=0,g=f.length;m<g;m++){let _=f[m];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}function Ag(n,t,e,i,s,r,o){let a=new Wt(0),l=r===!0?0:1,c,h,f=null,p=0,m=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function _(y){let v=!1,x=g(y);x===null?u(a,l):x&&x.isColor&&(u(x,1),v=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function d(y,v){let x=g(v);x&&(x.isCubeTexture||x.mapping===wa)?(h===void 0&&(h=new Gt(new Me(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:rr(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),rs.copy(v.backgroundRotation),rs.x*=-1,rs.y*=-1,rs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Tg.makeRotationFromEuler(rs)),h.material.toneMapped=ue.getTransfer(x.colorSpace)!==we,(f!==x||p!==x.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,f=x,p=x.version,m=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Gt(new xi(2,2),new Qn({name:"BackgroundMaterial",uniforms:rr(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ue.getTransfer(x.colorSpace)!==we,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||p!==x.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=x,p=x.version,m=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function u(y,v){y.getRGB(Po,cu(n)),i.buffers.color.setClear(Po.r,Po.g,Po.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,u(a,l)},render:_,addToRenderList:d}}function Rg(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=p(null),r=s,o=!1;function a(b,M,V,J,L){let O=!1,T=f(J,V,M);r!==T&&(r=T,c(r.object)),O=m(b,J,V,L),O&&g(b,J,V,L),L!==null&&t.update(L,n.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,x(b,M,V,J),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function h(b){return n.deleteVertexArray(b)}function f(b,M,V){let J=V.wireframe===!0,L=i[b.id];L===void 0&&(L={},i[b.id]=L);let O=L[M.id];O===void 0&&(O={},L[M.id]=O);let T=O[J];return T===void 0&&(T=p(l()),O[J]=T),T}function p(b){let M=[],V=[],J=[];for(let L=0;L<e;L++)M[L]=0,V[L]=0,J[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:V,attributeDivisors:J,object:b,attributes:{},index:null}}function m(b,M,V,J){let L=r.attributes,O=M.attributes,T=0,H=V.getAttributes();for(let z in H)if(H[z].location>=0){let D=L[z],U=O[z];if(U===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(U=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(U=b.instanceColor)),D===void 0||D.attribute!==U||U&&D.data!==U.data)return!0;T++}return r.attributesNum!==T||r.index!==J}function g(b,M,V,J){let L={},O=M.attributes,T=0,H=V.getAttributes();for(let z in H)if(H[z].location>=0){let D=O[z];D===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(D=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(D=b.instanceColor));let U={};U.attribute=D,D&&D.data&&(U.data=D.data),L[z]=U,T++}r.attributes=L,r.attributesNum=T,r.index=J}function _(){let b=r.newAttributes;for(let M=0,V=b.length;M<V;M++)b[M]=0}function d(b){u(b,0)}function u(b,M){let V=r.newAttributes,J=r.enabledAttributes,L=r.attributeDivisors;V[b]=1,J[b]===0&&(n.enableVertexAttribArray(b),J[b]=1),L[b]!==M&&(n.vertexAttribDivisor(b,M),L[b]=M)}function y(){let b=r.newAttributes,M=r.enabledAttributes;for(let V=0,J=M.length;V<J;V++)M[V]!==b[V]&&(n.disableVertexAttribArray(V),M[V]=0)}function v(b,M,V,J,L,O,T){T===!0?n.vertexAttribIPointer(b,M,V,L,O):n.vertexAttribPointer(b,M,V,J,L,O)}function x(b,M,V,J){_();let L=J.attributes,O=V.getAttributes(),T=M.defaultAttributeValues;for(let H in O){let z=O[H];if(z.location>=0){let et=L[H];if(et===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(et=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(et=b.instanceColor)),et!==void 0){let D=et.normalized,U=et.itemSize,Y=t.get(et);if(Y===void 0)continue;let B=Y.buffer,I=Y.type,k=Y.bytesPerElement,q=I===n.INT||I===n.UNSIGNED_INT||et.gpuType===th;if(et.isInterleavedBufferAttribute){let W=et.data,Q=W.stride,it=et.offset;if(W.isInstancedInterleavedBuffer){for(let rt=0;rt<z.locationSize;rt++)u(z.location+rt,W.meshPerAttribute);b.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let rt=0;rt<z.locationSize;rt++)d(z.location+rt);n.bindBuffer(n.ARRAY_BUFFER,B);for(let rt=0;rt<z.locationSize;rt++)v(z.location+rt,U/z.locationSize,I,D,Q*k,(it+U/z.locationSize*rt)*k,q)}else{if(et.isInstancedBufferAttribute){for(let W=0;W<z.locationSize;W++)u(z.location+W,et.meshPerAttribute);b.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let W=0;W<z.locationSize;W++)d(z.location+W);n.bindBuffer(n.ARRAY_BUFFER,B);for(let W=0;W<z.locationSize;W++)v(z.location+W,U/z.locationSize,I,D,U*k,U/z.locationSize*W*k,q)}}else if(T!==void 0){let D=T[H];if(D!==void 0)switch(D.length){case 2:n.vertexAttrib2fv(z.location,D);break;case 3:n.vertexAttrib3fv(z.location,D);break;case 4:n.vertexAttrib4fv(z.location,D);break;default:n.vertexAttrib1fv(z.location,D)}}}}y()}function R(){N();for(let b in i){let M=i[b];for(let V in M){let J=M[V];for(let L in J)h(J[L].object),delete J[L];delete M[V]}delete i[b]}}function w(b){if(i[b.id]===void 0)return;let M=i[b.id];for(let V in M){let J=M[V];for(let L in J)h(J[L].object),delete J[L];delete M[V]}delete i[b.id]}function E(b){for(let M in i){let V=i[M];if(V[b.id]===void 0)continue;let J=V[b.id];for(let L in J)h(J[L].object),delete J[L];delete V[b.id]}}function N(){Z(),o=!0,r!==s&&(r=s,c(r.object))}function Z(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:Z,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:d,disableUnusedAttributes:y}}function Cg(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,f){f!==0&&(n.drawArraysInstanced(i,c,h,f),e.update(h,i,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let m=0;for(let g=0;g<f;g++)m+=h[g];e.update(m,i,1)}function l(c,h,f,p){if(f===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],h[g],p[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,h,0,p,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_];for(let _=0;_<p.length;_++)e.update(g,i,p[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Pg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Wn&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let N=E===$r&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==mi&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==di&&!N)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(p===!0){let E=t.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}let m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),d=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:d,maxAttributes:u,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:R,maxSamples:w}}function Ig(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Hn,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){let m=f.length!==0||p||i!==0||s;return s=p,i=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){e=h(f,p,0)},this.setState=function(f,p,m){let g=f.clippingPlanes,_=f.clipIntersection,d=f.clipShadows,u=n.get(f);if(!s||g===null||g.length===0||r&&!d)r?h(null):c();else{let y=r?0:i,v=y*4,x=u.clippingState||null;l.value=x,x=h(g,p,v,m);for(let R=0;R!==v;++R)x[R]=e[R];u.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,p,m,g){let _=f!==null?f.length:0,d=null;if(_!==0){if(d=l.value,g!==!0||d===null){let u=m+_*4,y=p.matrixWorldInverse;a.getNormalMatrix(y),(d===null||d.length<u)&&(d=new Float32Array(u));for(let v=0,x=m;v!==_;++v,x+=4)o.copy(f[v]).applyMatrix4(y,a),o.normal.toArray(d,x),d[x+3]=o.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,d}}function Lg(n){let t=new WeakMap;function e(o,a){return a===Bl?o.mapping=Qs:a===zl&&(o.mapping=tr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Bl||a===zl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new vc(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}function Dg(n){let t=[],e=[],i=[],s=n,r=n-qs+1+hf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-qs?l=hf[o-n+qs-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,f=1+c,p=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,g=6,_=3,d=2,u=1,y=new Float32Array(_*g*m),v=new Float32Array(d*g*m),x=new Float32Array(u*g*m);for(let w=0;w<m;w++){let E=w%3*2/3-1,N=w>2?0:-1,Z=[E,N,0,E+2/3,N,0,E+2/3,N+1,0,E,N,0,E+2/3,N+1,0,E,N+1,0];y.set(Z,_*g*w),v.set(p,d*g*w);let b=[w,w,w,w,w,w];x.set(b,u*g*w)}let R=new Ee;R.setAttribute("position",new Qe(y,_)),R.setAttribute("uv",new Qe(v,d)),R.setAttribute("faceIndex",new Qe(x,u)),t.push(R),s>qs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function df(n,t,e){let i=new _i(n,t,e);return i.texture.mapping=wa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Io(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Ug(n,t,e){let i=new Float32Array(cs),s=new G(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function pf(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function mf(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function lh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ng(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Bl||l===zl,h=l===Qs||l===tr;if(c||h){let f=t.get(a),p=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new Yi(n)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{let m=a.image;return c&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new Yi(n)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Og(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Xo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function kg(n,t,e,i){let s={},r=new WeakMap;function o(f){let p=f.target;p.index!==null&&t.remove(p.index);for(let g in p.attributes)t.remove(p.attributes[g]);for(let g in p.morphAttributes){let _=p.morphAttributes[g];for(let d=0,u=_.length;d<u;d++)t.remove(_[d])}p.removeEventListener("dispose",o),delete s[p.id];let m=r.get(p);m&&(t.remove(m),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(f,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function l(f){let p=f.attributes;for(let g in p)t.update(p[g],n.ARRAY_BUFFER);let m=f.morphAttributes;for(let g in m){let _=m[g];for(let d=0,u=_.length;d<u;d++)t.update(_[d],n.ARRAY_BUFFER)}}function c(f){let p=[],m=f.index,g=f.attributes.position,_=0;if(m!==null){let y=m.array;_=m.version;for(let v=0,x=y.length;v<x;v+=3){let R=y[v+0],w=y[v+1],E=y[v+2];p.push(R,w,w,E,E,R)}}else if(g!==void 0){let y=g.array;_=g.version;for(let v=0,x=y.length/3-1;v<x;v+=3){let R=v+0,w=v+1,E=v+2;p.push(R,w,w,E,E,R)}}else return;let d=new(au(p)?ea:ta)(p,1);d.version=_;let u=r.get(f);u&&t.remove(u),r.set(f,d)}function h(f){let p=r.get(f);if(p){let m=f.index;m!==null&&p.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function Fg(n,t,e){let i;function s(p){i=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,m){n.drawElements(i,m,r,p*o),e.update(m,i,1)}function c(p,m,g){g!==0&&(n.drawElementsInstanced(i,m,r,p*o,g),e.update(m,i,g))}function h(p,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,p,0,g);let d=0;for(let u=0;u<g;u++)d+=m[u];e.update(d,i,1)}function f(p,m,g,_){if(g===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<p.length;u++)c(p[u]/o,m[u],_[u]);else{d.multiDrawElementsInstancedWEBGL(i,m,0,r,p,0,_,0,g);let u=0;for(let y=0;y<g;y++)u+=m[y];for(let y=0;y<_.length;y++)e.update(u,i,_[y])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Bg(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function zg(n,t,e){let i=new WeakMap,s=new _e;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,p=i.get(a);if(p===void 0||p.count!==f){let Z=function(){E.dispose(),i.delete(a),a.removeEventListener("dispose",Z)};p!==void 0&&p.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;m===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let x=a.attributes.position.count*v,R=1;x>t.maxTextureSize&&(R=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let w=new Float32Array(x*R*4*f),E=new Qo(w,x,R,f);E.type=di,E.needsUpdate=!0;let N=v*4;for(let b=0;b<f;b++){let M=d[b],V=u[b],J=y[b],L=x*R*4*b;for(let O=0;O<M.count;O++){let T=O*N;m===!0&&(s.fromBufferAttribute(M,O),w[L+T+0]=s.x,w[L+T+1]=s.y,w[L+T+2]=s.z,w[L+T+3]=0),g===!0&&(s.fromBufferAttribute(V,O),w[L+T+4]=s.x,w[L+T+5]=s.y,w[L+T+6]=s.z,w[L+T+7]=0),_===!0&&(s.fromBufferAttribute(J,O),w[L+T+8]=s.x,w[L+T+9]=s.y,w[L+T+10]=s.z,w[L+T+11]=J.itemSize===4?s.w:1)}}p={count:f,texture:E,size:new dt(x,R)},i.set(a,p),a.addEventListener("dispose",Z)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];let g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:r}}function Hg(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return f}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}function hr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=_f[s];if(r===void 0&&(r=new Float32Array(s),_f[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Be(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ze(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ta(n,t){let e=yf[t];e===void 0&&(e=new Int32Array(t),yf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Gg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Vg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2fv(this.addr,t),ze(e,t)}}function Wg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;n.uniform3fv(this.addr,t),ze(e,t)}}function Xg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4fv(this.addr,t),ze(e,t)}}function Yg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,i))return;bf.set(i),n.uniformMatrix2fv(this.addr,!1,bf),ze(e,i)}}function qg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,i))return;vf.set(i),n.uniformMatrix3fv(this.addr,!1,vf),ze(e,i)}}function Zg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,i))return;xf.set(i),n.uniformMatrix4fv(this.addr,!1,xf),ze(e,i)}}function $g(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Kg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2iv(this.addr,t),ze(e,t)}}function Jg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;n.uniform3iv(this.addr,t),ze(e,t)}}function jg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4iv(this.addr,t),ze(e,t)}}function Qg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function t_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2uiv(this.addr,t),ze(e,t)}}function e_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;n.uniform3uiv(this.addr,t),ze(e,t)}}function n_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4uiv(this.addr,t),ze(e,t)}}function i_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(gf.compareFunction=ru,r=gf):r=fu,e.setTexture2D(t||r,s)}function s_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||du,s)}function r_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||pu,s)}function o_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||uu,s)}function a_(n){switch(n){case 5126:return Gg;case 35664:return Vg;case 35665:return Wg;case 35666:return Xg;case 35674:return Yg;case 35675:return qg;case 35676:return Zg;case 5124:case 35670:return $g;case 35667:case 35671:return Kg;case 35668:case 35672:return Jg;case 35669:case 35673:return jg;case 5125:return Qg;case 36294:return t_;case 36295:return e_;case 36296:return n_;case 35678:case 36198:case 36298:case 36306:case 35682:return i_;case 35679:case 36299:case 36307:return s_;case 35680:case 36300:case 36308:case 36293:return r_;case 36289:case 36303:case 36311:case 36292:return o_}}function l_(n,t){n.uniform1fv(this.addr,t)}function c_(n,t){let e=hr(t,this.size,2);n.uniform2fv(this.addr,e)}function h_(n,t){let e=hr(t,this.size,3);n.uniform3fv(this.addr,e)}function f_(n,t){let e=hr(t,this.size,4);n.uniform4fv(this.addr,e)}function u_(n,t){let e=hr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function d_(n,t){let e=hr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function p_(n,t){let e=hr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function m_(n,t){n.uniform1iv(this.addr,t)}function g_(n,t){n.uniform2iv(this.addr,t)}function __(n,t){n.uniform3iv(this.addr,t)}function y_(n,t){n.uniform4iv(this.addr,t)}function x_(n,t){n.uniform1uiv(this.addr,t)}function v_(n,t){n.uniform2uiv(this.addr,t)}function b_(n,t){n.uniform3uiv(this.addr,t)}function M_(n,t){n.uniform4uiv(this.addr,t)}function S_(n,t,e){let i=this.cache,s=t.length,r=Ta(e,s);Be(i,r)||(n.uniform1iv(this.addr,r),ze(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||fu,r[o])}function w_(n,t,e){let i=this.cache,s=t.length,r=Ta(e,s);Be(i,r)||(n.uniform1iv(this.addr,r),ze(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||du,r[o])}function E_(n,t,e){let i=this.cache,s=t.length,r=Ta(e,s);Be(i,r)||(n.uniform1iv(this.addr,r),ze(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||pu,r[o])}function T_(n,t,e){let i=this.cache,s=t.length,r=Ta(e,s);Be(i,r)||(n.uniform1iv(this.addr,r),ze(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||uu,r[o])}function A_(n){switch(n){case 5126:return l_;case 35664:return c_;case 35665:return h_;case 35666:return f_;case 35674:return u_;case 35675:return d_;case 35676:return p_;case 5124:case 35670:return m_;case 35667:case 35671:return g_;case 35668:case 35672:return __;case 35669:case 35673:return y_;case 5125:return x_;case 36294:return v_;case 36295:return b_;case 36296:return M_;case 35678:case 36198:case 36298:case 36306:case 35682:return S_;case 35679:case 36299:case 36307:return w_;case 35680:case 36300:case 36308:case 36293:return E_;case 36289:case 36303:case 36311:case 36292:return T_}}function Mf(n,t){n.seq.push(t),n.map[t.id]=t}function R_(n,t,e){let i=n.name,s=i.length;for(Sl.lastIndex=0;;){let r=Sl.exec(i),o=Sl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Mf(e,c===void 0?new bc(a,n,t):new Mc(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new Sc(a),Mf(e,f)),e=f}}}function Sf(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}function I_(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function L_(n){let t=ue.getPrimaries(ue.workingColorSpace),e=ue.getPrimaries(n),i;switch(t===e?i="":t===$o&&e===Zo?i="LinearDisplayP3ToLinearSRGB":t===Zo&&e===$o&&(i="LinearSRGBToLinearDisplayP3"),n){case Zi:case Ea:return[i,"LinearTransferOETF"];case Ze:case oh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function wf(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+I_(n.getShaderSource(t),o)}else return s}function D_(n,t){let e=L_(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function U_(n,t){let e;switch(t){case Wd:e="Linear";break;case Xd:e="Reinhard";break;case Yd:e="Cineon";break;case qd:e="ACESFilmic";break;case $d:e="AgX";break;case Zr:e="Neutral";break;case Zd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function N_(){ue.getLuminanceCoefficients(Lo);let n=Lo.x.toFixed(4),t=Lo.y.toFixed(4),e=Lo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function O_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tr).join(`
`)}function k_(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function F_(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Tr(n){return n!==""}function Ef(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function wc(n){return n.replace(B_,H_)}function H_(n,t){let e=te[t];if(e===void 0){let i=z_.get(t);if(i!==void 0)e=te[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return wc(e)}function Af(n){return n.replace(G_,V_)}function V_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rf(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function W_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Xf?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===qr?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ui&&(t="SHADOWMAP_TYPE_VSM"),t}function X_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Qs:case tr:t="ENVMAP_TYPE_CUBE";break;case wa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Y_(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===tr&&(t="ENVMAP_MODE_REFRACTION"),t}function q_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Yf:t="ENVMAP_BLENDING_MULTIPLY";break;case Gd:t="ENVMAP_BLENDING_MIX";break;case Vd:t="ENVMAP_BLENDING_ADD";break}return t}function Z_(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function $_(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=W_(e),c=X_(e),h=Y_(e),f=q_(e),p=Z_(e),m=O_(e),g=k_(r),_=s.createProgram(),d,u,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Tr).join(`
`),d.length>0&&(d+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Tr).join(`
`),u.length>0&&(u+=`
`)):(d=[Rf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tr).join(`
`),u=[Rf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wi?"#define TONE_MAPPING":"",e.toneMapping!==Wi?te.tonemapping_pars_fragment:"",e.toneMapping!==Wi?U_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,D_("linearToOutputTexel",e.outputColorSpace),N_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Tr).join(`
`)),o=wc(o),o=Ef(o,e),o=Tf(o,e),a=wc(a),a=Ef(a,e),a=Tf(a,e),o=Af(o),a=Af(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,u=["#define varying in",e.glslVersion===Wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let v=y+d+o,x=y+u+a,R=Sf(s,s.VERTEX_SHADER,v),w=Sf(s,s.FRAGMENT_SHADER,x);s.attachShader(_,R),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(M){if(n.debug.checkShaderErrors){let V=s.getProgramInfoLog(_).trim(),J=s.getShaderInfoLog(R).trim(),L=s.getShaderInfoLog(w).trim(),O=!0,T=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,R,w);else{let H=wf(s,R,"vertex"),z=wf(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+V+`
`+H+`
`+z)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(J===""||L==="")&&(T=!1);T&&(M.diagnostics={runnable:O,programLog:V,vertexShader:{log:J,prefix:d},fragmentShader:{log:L,prefix:u}})}s.deleteShader(R),s.deleteShader(w),N=new Js(s,_),Z=F_(s,_)}let N;this.getUniforms=function(){return N===void 0&&E(this),N};let Z;this.getAttributes=function(){return Z===void 0&&E(this),Z};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,C_)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=P_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=w,this}function J_(n,t,e,i,s,r,o){let a=new Or,l=new Ec,c=new Set,h=[],f=s.logarithmicDepthBuffer,p=s.reverseDepthBuffer,m=s.vertexTextures,g=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(b){return c.add(b),b===0?"uv":`uv${b}`}function u(b,M,V,J,L){let O=J.fog,T=L.geometry,H=b.isMeshStandardMaterial?J.environment:null,z=(b.isMeshStandardMaterial?e:t).get(b.envMap||H),et=z&&z.mapping===wa?z.image.height:null,D=_[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));let U=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,Y=U!==void 0?U.length:0,B=0;T.morphAttributes.position!==void 0&&(B=1),T.morphAttributes.normal!==void 0&&(B=2),T.morphAttributes.color!==void 0&&(B=3);let I,k,q,W;if(D){let dn=Kn[D];I=dn.vertexShader,k=dn.fragmentShader}else I=b.vertexShader,k=b.fragmentShader,l.update(b),q=l.getVertexShaderID(b),W=l.getFragmentShaderID(b);let Q=n.getRenderTarget(),it=L.isInstancedMesh===!0,rt=L.isBatchedMesh===!0,st=!!b.map,$=!!b.matcap,A=!!z,lt=!!b.aoMap,ft=!!b.lightMap,ht=!!b.bumpMap,yt=!!b.normalMap,xt=!!b.displacementMap,mt=!!b.emissiveMap,P=!!b.metalnessMap,S=!!b.roughnessMap,nt=b.anisotropy>0,ut=b.clearcoat>0,gt=b.dispersion>0,pt=b.iridescence>0,Ot=b.sheen>0,wt=b.transmission>0,It=nt&&!!b.anisotropyMap,se=ut&&!!b.clearcoatMap,bt=ut&&!!b.clearcoatNormalMap,Lt=ut&&!!b.clearcoatRoughnessMap,$t=pt&&!!b.iridescenceMap,Kt=pt&&!!b.iridescenceThicknessMap,Ut=Ot&&!!b.sheenColorMap,re=Ot&&!!b.sheenRoughnessMap,Jt=!!b.specularMap,be=!!b.specularColorMap,K=!!b.specularIntensityMap,Ct=wt&&!!b.transmissionMap,ct=wt&&!!b.thicknessMap,_t=!!b.gradientMap,Tt=!!b.alphaMap,Pt=b.alphaTest>0,oe=!!b.alphaHash,De=!!b.extensions,un=Wi;b.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(un=n.toneMapping);let ce={shaderID:D,shaderType:b.type,shaderName:b.name,vertexShader:I,fragmentShader:k,defines:b.defines,customVertexShaderID:q,customFragmentShaderID:W,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:rt,batchingColor:rt&&L._colorsTexture!==null,instancing:it,instancingColor:it&&L.instanceColor!==null,instancingMorph:it&&L.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Q===null?n.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Zi,alphaToCoverage:!!b.alphaToCoverage,map:st,matcap:$,envMap:A,envMapMode:A&&z.mapping,envMapCubeUVHeight:et,aoMap:lt,lightMap:ft,bumpMap:ht,normalMap:yt,displacementMap:m&&xt,emissiveMap:mt,normalMapObjectSpace:yt&&b.normalMapType===Qd,normalMapTangentSpace:yt&&b.normalMapType===su,metalnessMap:P,roughnessMap:S,anisotropy:nt,anisotropyMap:It,clearcoat:ut,clearcoatMap:se,clearcoatNormalMap:bt,clearcoatRoughnessMap:Lt,dispersion:gt,iridescence:pt,iridescenceMap:$t,iridescenceThicknessMap:Kt,sheen:Ot,sheenColorMap:Ut,sheenRoughnessMap:re,specularMap:Jt,specularColorMap:be,specularIntensityMap:K,transmission:wt,transmissionMap:Ct,thicknessMap:ct,gradientMap:_t,opaque:b.transparent===!1&&b.blending===Vi&&b.alphaToCoverage===!1,alphaMap:Tt,alphaTest:Pt,alphaHash:oe,combine:b.combine,mapUv:st&&d(b.map.channel),aoMapUv:lt&&d(b.aoMap.channel),lightMapUv:ft&&d(b.lightMap.channel),bumpMapUv:ht&&d(b.bumpMap.channel),normalMapUv:yt&&d(b.normalMap.channel),displacementMapUv:xt&&d(b.displacementMap.channel),emissiveMapUv:mt&&d(b.emissiveMap.channel),metalnessMapUv:P&&d(b.metalnessMap.channel),roughnessMapUv:S&&d(b.roughnessMap.channel),anisotropyMapUv:It&&d(b.anisotropyMap.channel),clearcoatMapUv:se&&d(b.clearcoatMap.channel),clearcoatNormalMapUv:bt&&d(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Lt&&d(b.clearcoatRoughnessMap.channel),iridescenceMapUv:$t&&d(b.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&d(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&d(b.sheenColorMap.channel),sheenRoughnessMapUv:re&&d(b.sheenRoughnessMap.channel),specularMapUv:Jt&&d(b.specularMap.channel),specularColorMapUv:be&&d(b.specularColorMap.channel),specularIntensityMapUv:K&&d(b.specularIntensityMap.channel),transmissionMapUv:Ct&&d(b.transmissionMap.channel),thicknessMapUv:ct&&d(b.thicknessMap.channel),alphaMapUv:Tt&&d(b.alphaMap.channel),vertexTangents:!!T.attributes.tangent&&(yt||nt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!T.attributes.uv&&(st||Tt),fog:!!O,useFog:b.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:p,skinning:L.isSkinnedMesh===!0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:B,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:un,decodeVideoTexture:st&&b.map.isVideoTexture===!0&&ue.getTransfer(b.map.colorSpace)===we,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ae,flipSided:b.side===Fe,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:De&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&b.extensions.multiDraw===!0||rt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ce.vertexUv1s=c.has(1),ce.vertexUv2s=c.has(2),ce.vertexUv3s=c.has(3),c.clear(),ce}function y(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let V in b.defines)M.push(V),M.push(b.defines[V]);return b.isRawShaderMaterial===!1&&(v(M,b),x(M,b),M.push(n.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function v(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function x(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),b.push(a.mask)}function R(b){let M=_[b.type],V;if(M){let J=Kn[M];V=H0.clone(J.uniforms)}else V=b.uniforms;return V}function w(b,M){let V;for(let J=0,L=h.length;J<L;J++){let O=h[J];if(O.cacheKey===M){V=O,++V.usedTimes;break}}return V===void 0&&(V=new $_(n,M,b,r),h.push(V)),V}function E(b){if(--b.usedTimes===0){let M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function N(b){l.remove(b)}function Z(){l.dispose()}return{getParameters:u,getProgramCacheKey:y,getUniforms:R,acquireProgram:w,releaseProgram:E,releaseShaderCache:N,programs:h,dispose:Z}}function j_(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Q_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Cf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Pf(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f,p,m,g,_,d){let u=n[t];return u===void 0?(u={id:f.id,object:f,geometry:p,material:m,groupOrder:g,renderOrder:f.renderOrder,z:_,group:d},n[t]=u):(u.id=f.id,u.object=f,u.geometry=p,u.material=m,u.groupOrder=g,u.renderOrder=f.renderOrder,u.z=_,u.group=d),t++,u}function a(f,p,m,g,_,d){let u=o(f,p,m,g,_,d);m.transmission>0?i.push(u):m.transparent===!0?s.push(u):e.push(u)}function l(f,p,m,g,_,d){let u=o(f,p,m,g,_,d);m.transmission>0?i.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function c(f,p){e.length>1&&e.sort(f||Q_),i.length>1&&i.sort(p||Cf),s.length>1&&s.sort(p||Cf)}function h(){for(let f=t,p=n.length;f<p;f++){let m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function ty(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Pf,n.set(i,[o])):s>=r.length?(o=new Pf,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function ey(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new Wt};break;case"SpotLight":e={position:new G,direction:new G,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new G,halfWidth:new G,halfHeight:new G};break}return n[t.id]=e,e}}}function ny(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}function sy(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function ry(n){let t=new ey,e=ny(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);let s=new G,r=new de,o=new de;function a(c){let h=0,f=0,p=0;for(let Z=0;Z<9;Z++)i.probe[Z].set(0,0,0);let m=0,g=0,_=0,d=0,u=0,y=0,v=0,x=0,R=0,w=0,E=0;c.sort(sy);for(let Z=0,b=c.length;Z<b;Z++){let M=c[Z],V=M.color,J=M.intensity,L=M.distance,O=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)h+=V.r*J,f+=V.g*J,p+=V.b*J;else if(M.isLightProbe){for(let T=0;T<9;T++)i.probe[T].addScaledVector(M.sh.coefficients[T],J);E++}else if(M.isDirectionalLight){let T=t.get(M);if(T.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){let H=M.shadow,z=e.get(M);z.shadowIntensity=H.intensity,z.shadowBias=H.bias,z.shadowNormalBias=H.normalBias,z.shadowRadius=H.radius,z.shadowMapSize=H.mapSize,i.directionalShadow[m]=z,i.directionalShadowMap[m]=O,i.directionalShadowMatrix[m]=M.shadow.matrix,y++}i.directional[m]=T,m++}else if(M.isSpotLight){let T=t.get(M);T.position.setFromMatrixPosition(M.matrixWorld),T.color.copy(V).multiplyScalar(J),T.distance=L,T.coneCos=Math.cos(M.angle),T.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),T.decay=M.decay,i.spot[_]=T;let H=M.shadow;if(M.map&&(i.spotLightMap[R]=M.map,R++,H.updateMatrices(M),M.castShadow&&w++),i.spotLightMatrix[_]=H.matrix,M.castShadow){let z=e.get(M);z.shadowIntensity=H.intensity,z.shadowBias=H.bias,z.shadowNormalBias=H.normalBias,z.shadowRadius=H.radius,z.shadowMapSize=H.mapSize,i.spotShadow[_]=z,i.spotShadowMap[_]=O,x++}_++}else if(M.isRectAreaLight){let T=t.get(M);T.color.copy(V).multiplyScalar(J),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),i.rectArea[d]=T,d++}else if(M.isPointLight){let T=t.get(M);if(T.color.copy(M.color).multiplyScalar(M.intensity),T.distance=M.distance,T.decay=M.decay,M.castShadow){let H=M.shadow,z=e.get(M);z.shadowIntensity=H.intensity,z.shadowBias=H.bias,z.shadowNormalBias=H.normalBias,z.shadowRadius=H.radius,z.shadowMapSize=H.mapSize,z.shadowCameraNear=H.camera.near,z.shadowCameraFar=H.camera.far,i.pointShadow[g]=z,i.pointShadowMap[g]=O,i.pointShadowMatrix[g]=M.shadow.matrix,v++}i.point[g]=T,g++}else if(M.isHemisphereLight){let T=t.get(M);T.skyColor.copy(M.color).multiplyScalar(J),T.groundColor.copy(M.groundColor).multiplyScalar(J),i.hemi[u]=T,u++}}d>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Et.LTC_FLOAT_1,i.rectAreaLTC2=Et.LTC_FLOAT_2):(i.rectAreaLTC1=Et.LTC_HALF_1,i.rectAreaLTC2=Et.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=p;let N=i.hash;(N.directionalLength!==m||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==d||N.hemiLength!==u||N.numDirectionalShadows!==y||N.numPointShadows!==v||N.numSpotShadows!==x||N.numSpotMaps!==R||N.numLightProbes!==E)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=d,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=x+R-w,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=E,N.directionalLength=m,N.pointLength=g,N.spotLength=_,N.rectAreaLength=d,N.hemiLength=u,N.numDirectionalShadows=y,N.numPointShadows=v,N.numSpotShadows=x,N.numSpotMaps=R,N.numLightProbes=E,i.version=iy++)}function l(c,h){let f=0,p=0,m=0,g=0,_=0,d=h.matrixWorldInverse;for(let u=0,y=c.length;u<y;u++){let v=c[u];if(v.isDirectionalLight){let x=i.directional[f];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(d),f++}else if(v.isSpotLight){let x=i.spot[m];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(d),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(d),m++}else if(v.isRectAreaLight){let x=i.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(d),o.identity(),r.copy(v.matrixWorld),r.premultiply(d),o.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let x=i.point[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(d),p++}else if(v.isHemisphereLight){let x=i.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(d),_++}}}return{setup:a,setupView:l,state:i}}function If(n){let t=new ry(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function oy(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new If(n),t.set(s,[a])):r>=o.length?(a=new If(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}function cy(n,t,e){let i=new kr,s=new dt,r=new dt,o=new _e,a=new Ac({depthPacking:jd}),l=new Rc,c={},h=e.maxTextureSize,f={[vn]:Fe,[Fe]:vn,[ae]:ae},p=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:ay,fragmentShader:ly}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let g=new Ee;g.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Gt(g,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xf;let u=this.type;this.render=function(w,E,N){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||w.length===0)return;let Z=n.getRenderTarget(),b=n.getActiveCubeFace(),M=n.getActiveMipmapLevel(),V=n.state;V.setBlending(Gi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let J=u!==ui&&this.type===ui,L=u===ui&&this.type!==ui;for(let O=0,T=w.length;O<T;O++){let H=w[O],z=H.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let et=z.getFrameExtents();if(s.multiply(et),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/et.x),s.x=r.x*et.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/et.y),s.y=r.y*et.y,z.mapSize.y=r.y)),z.map===null||J===!0||L===!0){let U=this.type!==ui?{minFilter:Cn,magFilter:Cn}:{};z.map!==null&&z.map.dispose(),z.map=new _i(s.x,s.y,U),z.map.texture.name=H.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();let D=z.getViewportCount();for(let U=0;U<D;U++){let Y=z.getViewport(U);o.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),V.viewport(o),z.updateMatrices(H,U),i=z.getFrustum(),x(E,N,z.camera,H,this.type)}z.isPointLightShadow!==!0&&this.type===ui&&y(z,N),z.needsUpdate=!1}u=this.type,d.needsUpdate=!1,n.setRenderTarget(Z,b,M)};function y(w,E){let N=t.update(_);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new _i(s.x,s.y)),p.uniforms.shadow_pass.value=w.map.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(E,null,N,p,_,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(E,null,N,m,_,null)}function v(w,E,N,Z){let b=null,M=N.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(M!==void 0)b=M;else if(b=N.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let V=b.uuid,J=E.uuid,L=c[V];L===void 0&&(L={},c[V]=L);let O=L[J];O===void 0&&(O=b.clone(),L[J]=O,E.addEventListener("dispose",R)),b=O}if(b.visible=E.visible,b.wireframe=E.wireframe,Z===ui?b.side=E.shadowSide!==null?E.shadowSide:E.side:b.side=E.shadowSide!==null?E.shadowSide:f[E.side],b.alphaMap=E.alphaMap,b.alphaTest=E.alphaTest,b.map=E.map,b.clipShadows=E.clipShadows,b.clippingPlanes=E.clippingPlanes,b.clipIntersection=E.clipIntersection,b.displacementMap=E.displacementMap,b.displacementScale=E.displacementScale,b.displacementBias=E.displacementBias,b.wireframeLinewidth=E.wireframeLinewidth,b.linewidth=E.linewidth,N.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let V=n.properties.get(b);V.light=N}return b}function x(w,E,N,Z,b){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===ui)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,w.matrixWorld);let J=t.update(w),L=w.material;if(Array.isArray(L)){let O=J.groups;for(let T=0,H=O.length;T<H;T++){let z=O[T],et=L[z.materialIndex];if(et&&et.visible){let D=v(w,et,Z,b);w.onBeforeShadow(n,w,E,N,J,D,z),n.renderBufferDirect(N,null,J,D,w,z),w.onAfterShadow(n,w,E,N,J,D,z)}}}else if(L.visible){let O=v(w,L,Z,b);w.onBeforeShadow(n,w,E,N,J,O,null),n.renderBufferDirect(N,null,J,O,w,null),w.onAfterShadow(n,w,E,N,J,O,null)}}let V=w.children;for(let J=0,L=V.length;J<L;J++)x(V[J],E,N,Z,b)}function R(w){w.target.removeEventListener("dispose",R);for(let N in c){let Z=c[N],b=w.target.uuid;b in Z&&(Z[b].dispose(),delete Z[b])}}}function fy(n){function t(){let K=!1,Ct=new _e,ct=null,_t=new _e(0,0,0,0);return{setMask:function(Tt){ct!==Tt&&!K&&(n.colorMask(Tt,Tt,Tt,Tt),ct=Tt)},setLocked:function(Tt){K=Tt},setClear:function(Tt,Pt,oe,De,un){un===!0&&(Tt*=De,Pt*=De,oe*=De),Ct.set(Tt,Pt,oe,De),_t.equals(Ct)===!1&&(n.clearColor(Tt,Pt,oe,De),_t.copy(Ct))},reset:function(){K=!1,ct=null,_t.set(-1,0,0,0)}}}function e(){let K=!1,Ct=!1,ct=null,_t=null,Tt=null;return{setReversed:function(Pt){Ct=Pt},setTest:function(Pt){Pt?q(n.DEPTH_TEST):W(n.DEPTH_TEST)},setMask:function(Pt){ct!==Pt&&!K&&(n.depthMask(Pt),ct=Pt)},setFunc:function(Pt){if(Ct&&(Pt=hy[Pt]),_t!==Pt){switch(Pt){case Ll:n.depthFunc(n.NEVER);break;case Dl:n.depthFunc(n.ALWAYS);break;case Ul:n.depthFunc(n.LESS);break;case js:n.depthFunc(n.LEQUAL);break;case Nl:n.depthFunc(n.EQUAL);break;case Ol:n.depthFunc(n.GEQUAL);break;case kl:n.depthFunc(n.GREATER);break;case Fl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_t=Pt}},setLocked:function(Pt){K=Pt},setClear:function(Pt){Tt!==Pt&&(n.clearDepth(Pt),Tt=Pt)},reset:function(){K=!1,ct=null,_t=null,Tt=null}}}function i(){let K=!1,Ct=null,ct=null,_t=null,Tt=null,Pt=null,oe=null,De=null,un=null;return{setTest:function(ce){K||(ce?q(n.STENCIL_TEST):W(n.STENCIL_TEST))},setMask:function(ce){Ct!==ce&&!K&&(n.stencilMask(ce),Ct=ce)},setFunc:function(ce,dn,oi){(ct!==ce||_t!==dn||Tt!==oi)&&(n.stencilFunc(ce,dn,oi),ct=ce,_t=dn,Tt=oi)},setOp:function(ce,dn,oi){(Pt!==ce||oe!==dn||De!==oi)&&(n.stencilOp(ce,dn,oi),Pt=ce,oe=dn,De=oi)},setLocked:function(ce){K=ce},setClear:function(ce){un!==ce&&(n.clearStencil(ce),un=ce)},reset:function(){K=!1,Ct=null,ct=null,_t=null,Tt=null,Pt=null,oe=null,De=null,un=null}}}let s=new t,r=new e,o=new i,a=new WeakMap,l=new WeakMap,c={},h={},f=new WeakMap,p=[],m=null,g=!1,_=null,d=null,u=null,y=null,v=null,x=null,R=null,w=new Wt(0,0,0),E=0,N=!1,Z=null,b=null,M=null,V=null,J=null,L=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,T=0,H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(T=parseFloat(/^WebGL (\d)/.exec(H)[1]),O=T>=1):H.indexOf("OpenGL ES")!==-1&&(T=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),O=T>=2);let z=null,et={},D=n.getParameter(n.SCISSOR_BOX),U=n.getParameter(n.VIEWPORT),Y=new _e().fromArray(D),B=new _e().fromArray(U);function I(K,Ct,ct,_t){let Tt=new Uint8Array(4),Pt=n.createTexture();n.bindTexture(K,Pt),n.texParameteri(K,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(K,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let oe=0;oe<ct;oe++)K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?n.texImage3D(Ct,0,n.RGBA,1,1,_t,0,n.RGBA,n.UNSIGNED_BYTE,Tt):n.texImage2D(Ct+oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Tt);return Pt}let k={};k[n.TEXTURE_2D]=I(n.TEXTURE_2D,n.TEXTURE_2D,1),k[n.TEXTURE_CUBE_MAP]=I(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[n.TEXTURE_2D_ARRAY]=I(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),k[n.TEXTURE_3D]=I(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),q(n.DEPTH_TEST),r.setFunc(js),ft(!1),ht(kh),q(n.CULL_FACE),A(Gi);function q(K){c[K]!==!0&&(n.enable(K),c[K]=!0)}function W(K){c[K]!==!1&&(n.disable(K),c[K]=!1)}function Q(K,Ct){return h[K]!==Ct?(n.bindFramebuffer(K,Ct),h[K]=Ct,K===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Ct),K===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Ct),!0):!1}function it(K,Ct){let ct=p,_t=!1;if(K){ct=f.get(Ct),ct===void 0&&(ct=[],f.set(Ct,ct));let Tt=K.textures;if(ct.length!==Tt.length||ct[0]!==n.COLOR_ATTACHMENT0){for(let Pt=0,oe=Tt.length;Pt<oe;Pt++)ct[Pt]=n.COLOR_ATTACHMENT0+Pt;ct.length=Tt.length,_t=!0}}else ct[0]!==n.BACK&&(ct[0]=n.BACK,_t=!0);_t&&n.drawBuffers(ct)}function rt(K){return m!==K?(n.useProgram(K),m=K,!0):!1}let st={[ls]:n.FUNC_ADD,[Ed]:n.FUNC_SUBTRACT,[Td]:n.FUNC_REVERSE_SUBTRACT};st[Ad]=n.MIN,st[Rd]=n.MAX;let $={[Cd]:n.ZERO,[Pd]:n.ONE,[Id]:n.SRC_COLOR,[Pl]:n.SRC_ALPHA,[kd]:n.SRC_ALPHA_SATURATE,[Nd]:n.DST_COLOR,[Dd]:n.DST_ALPHA,[Ld]:n.ONE_MINUS_SRC_COLOR,[Il]:n.ONE_MINUS_SRC_ALPHA,[Od]:n.ONE_MINUS_DST_COLOR,[Ud]:n.ONE_MINUS_DST_ALPHA,[Fd]:n.CONSTANT_COLOR,[Bd]:n.ONE_MINUS_CONSTANT_COLOR,[zd]:n.CONSTANT_ALPHA,[Hd]:n.ONE_MINUS_CONSTANT_ALPHA};function A(K,Ct,ct,_t,Tt,Pt,oe,De,un,ce){if(K===Gi){g===!0&&(W(n.BLEND),g=!1);return}if(g===!1&&(q(n.BLEND),g=!0),K!==wd){if(K!==_||ce!==N){if((d!==ls||v!==ls)&&(n.blendEquation(n.FUNC_ADD),d=ls,v=ls),ce)switch(K){case Vi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Lr:n.blendFunc(n.ONE,n.ONE);break;case Fh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}else switch(K){case Vi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Lr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Fh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}u=null,y=null,x=null,R=null,w.set(0,0,0),E=0,_=K,N=ce}return}Tt=Tt||Ct,Pt=Pt||ct,oe=oe||_t,(Ct!==d||Tt!==v)&&(n.blendEquationSeparate(st[Ct],st[Tt]),d=Ct,v=Tt),(ct!==u||_t!==y||Pt!==x||oe!==R)&&(n.blendFuncSeparate($[ct],$[_t],$[Pt],$[oe]),u=ct,y=_t,x=Pt,R=oe),(De.equals(w)===!1||un!==E)&&(n.blendColor(De.r,De.g,De.b,un),w.copy(De),E=un),_=K,N=!1}function lt(K,Ct){K.side===ae?W(n.CULL_FACE):q(n.CULL_FACE);let ct=K.side===Fe;Ct&&(ct=!ct),ft(ct),K.blending===Vi&&K.transparent===!1?A(Gi):A(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),r.setFunc(K.depthFunc),r.setTest(K.depthTest),r.setMask(K.depthWrite),s.setMask(K.colorWrite);let _t=K.stencilWrite;o.setTest(_t),_t&&(o.setMask(K.stencilWriteMask),o.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),o.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),xt(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?q(n.SAMPLE_ALPHA_TO_COVERAGE):W(n.SAMPLE_ALPHA_TO_COVERAGE)}function ft(K){Z!==K&&(K?n.frontFace(n.CW):n.frontFace(n.CCW),Z=K)}function ht(K){K!==Md?(q(n.CULL_FACE),K!==b&&(K===kh?n.cullFace(n.BACK):K===Sd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):W(n.CULL_FACE),b=K}function yt(K){K!==M&&(O&&n.lineWidth(K),M=K)}function xt(K,Ct,ct){K?(q(n.POLYGON_OFFSET_FILL),(V!==Ct||J!==ct)&&(n.polygonOffset(Ct,ct),V=Ct,J=ct)):W(n.POLYGON_OFFSET_FILL)}function mt(K){K?q(n.SCISSOR_TEST):W(n.SCISSOR_TEST)}function P(K){K===void 0&&(K=n.TEXTURE0+L-1),z!==K&&(n.activeTexture(K),z=K)}function S(K,Ct,ct){ct===void 0&&(z===null?ct=n.TEXTURE0+L-1:ct=z);let _t=et[ct];_t===void 0&&(_t={type:void 0,texture:void 0},et[ct]=_t),(_t.type!==K||_t.texture!==Ct)&&(z!==ct&&(n.activeTexture(ct),z=ct),n.bindTexture(K,Ct||k[K]),_t.type=K,_t.texture=Ct)}function nt(){let K=et[z];K!==void 0&&K.type!==void 0&&(n.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function ut(){try{n.compressedTexImage2D.apply(n,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function gt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function pt(){try{n.texSubImage2D.apply(n,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ot(){try{n.texSubImage3D.apply(n,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function wt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function It(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function se(){try{n.texStorage2D.apply(n,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function bt(){try{n.texStorage3D.apply(n,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Lt(){try{n.texImage2D.apply(n,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function $t(){try{n.texImage3D.apply(n,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Kt(K){Y.equals(K)===!1&&(n.scissor(K.x,K.y,K.z,K.w),Y.copy(K))}function Ut(K){B.equals(K)===!1&&(n.viewport(K.x,K.y,K.z,K.w),B.copy(K))}function re(K,Ct){let ct=l.get(Ct);ct===void 0&&(ct=new WeakMap,l.set(Ct,ct));let _t=ct.get(K);_t===void 0&&(_t=n.getUniformBlockIndex(Ct,K.name),ct.set(K,_t))}function Jt(K,Ct){let _t=l.get(Ct).get(K);a.get(Ct)!==_t&&(n.uniformBlockBinding(Ct,_t,K.__bindingPointIndex),a.set(Ct,_t))}function be(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},z=null,et={},h={},f=new WeakMap,p=[],m=null,g=!1,_=null,d=null,u=null,y=null,v=null,x=null,R=null,w=new Wt(0,0,0),E=0,N=!1,Z=null,b=null,M=null,V=null,J=null,Y.set(0,0,n.canvas.width,n.canvas.height),B.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:q,disable:W,bindFramebuffer:Q,drawBuffers:it,useProgram:rt,setBlending:A,setMaterial:lt,setFlipSided:ft,setCullFace:ht,setLineWidth:yt,setPolygonOffset:xt,setScissorTest:mt,activeTexture:P,bindTexture:S,unbindTexture:nt,compressedTexImage2D:ut,compressedTexImage3D:gt,texImage2D:Lt,texImage3D:$t,updateUBOMapping:re,uniformBlockBinding:Jt,texStorage2D:se,texStorage3D:bt,texSubImage2D:pt,texSubImage3D:Ot,compressedTexSubImage2D:wt,compressedTexSubImage3D:It,scissor:Kt,viewport:Ut,reset:be}}function Lf(n,t,e,i){let s=uy(i);switch(e){case Jf:return n*t;case Qf:return n*t;case tu:return n*t*2;case eu:return n*t/s.components*s.byteLength;case ih:return n*t/s.components*s.byteLength;case nu:return n*t*2/s.components*s.byteLength;case sh:return n*t*2/s.components*s.byteLength;case jf:return n*t*3/s.components*s.byteLength;case Wn:return n*t*4/s.components*s.byteLength;case rh:return n*t*4/s.components*s.byteLength;case zo:case Ho:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Go:case Vo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Vl:case Xl:return Math.max(n,16)*Math.max(t,8)/4;case Gl:case Wl:return Math.max(n,8)*Math.max(t,8)/2;case Yl:case ql:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Zl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case $l:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Kl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Jl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case jl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ql:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case tc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ec:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case nc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case ic:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case sc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case rc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case oc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ac:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case lc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Wo:case cc:case hc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case iu:case fc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case uc:case dc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function uy(n){switch(n){case mi:case Zf:return{byteLength:1,components:1};case Dr:case $f:case $r:return{byteLength:2,components:1};case eh:case nh:return{byteLength:2,components:4};case us:case th:case di:return{byteLength:4,components:1};case Kf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function dy(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,h=new WeakMap,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,S){return m?new OffscreenCanvas(P,S):Jo("canvas")}function _(P,S,nt){let ut=1,gt=mt(P);if((gt.width>nt||gt.height>nt)&&(ut=nt/Math.max(gt.width,gt.height)),ut<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let pt=Math.floor(ut*gt.width),Ot=Math.floor(ut*gt.height);f===void 0&&(f=g(pt,Ot));let wt=S?g(pt,Ot):f;return wt.width=pt,wt.height=Ot,wt.getContext("2d").drawImage(P,0,0,pt,Ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+gt.width+"x"+gt.height+") to ("+pt+"x"+Ot+")."),wt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+gt.width+"x"+gt.height+")."),P;return P}function d(P){return P.generateMipmaps&&P.minFilter!==Cn&&P.minFilter!==Gn}function u(P){n.generateMipmap(P)}function y(P,S,nt,ut,gt=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let pt=S;if(S===n.RED&&(nt===n.FLOAT&&(pt=n.R32F),nt===n.HALF_FLOAT&&(pt=n.R16F),nt===n.UNSIGNED_BYTE&&(pt=n.R8)),S===n.RED_INTEGER&&(nt===n.UNSIGNED_BYTE&&(pt=n.R8UI),nt===n.UNSIGNED_SHORT&&(pt=n.R16UI),nt===n.UNSIGNED_INT&&(pt=n.R32UI),nt===n.BYTE&&(pt=n.R8I),nt===n.SHORT&&(pt=n.R16I),nt===n.INT&&(pt=n.R32I)),S===n.RG&&(nt===n.FLOAT&&(pt=n.RG32F),nt===n.HALF_FLOAT&&(pt=n.RG16F),nt===n.UNSIGNED_BYTE&&(pt=n.RG8)),S===n.RG_INTEGER&&(nt===n.UNSIGNED_BYTE&&(pt=n.RG8UI),nt===n.UNSIGNED_SHORT&&(pt=n.RG16UI),nt===n.UNSIGNED_INT&&(pt=n.RG32UI),nt===n.BYTE&&(pt=n.RG8I),nt===n.SHORT&&(pt=n.RG16I),nt===n.INT&&(pt=n.RG32I)),S===n.RGB_INTEGER&&(nt===n.UNSIGNED_BYTE&&(pt=n.RGB8UI),nt===n.UNSIGNED_SHORT&&(pt=n.RGB16UI),nt===n.UNSIGNED_INT&&(pt=n.RGB32UI),nt===n.BYTE&&(pt=n.RGB8I),nt===n.SHORT&&(pt=n.RGB16I),nt===n.INT&&(pt=n.RGB32I)),S===n.RGBA_INTEGER&&(nt===n.UNSIGNED_BYTE&&(pt=n.RGBA8UI),nt===n.UNSIGNED_SHORT&&(pt=n.RGBA16UI),nt===n.UNSIGNED_INT&&(pt=n.RGBA32UI),nt===n.BYTE&&(pt=n.RGBA8I),nt===n.SHORT&&(pt=n.RGBA16I),nt===n.INT&&(pt=n.RGBA32I)),S===n.RGB&&nt===n.UNSIGNED_INT_5_9_9_9_REV&&(pt=n.RGB9_E5),S===n.RGBA){let Ot=gt?qo:ue.getTransfer(ut);nt===n.FLOAT&&(pt=n.RGBA32F),nt===n.HALF_FLOAT&&(pt=n.RGBA16F),nt===n.UNSIGNED_BYTE&&(pt=Ot===we?n.SRGB8_ALPHA8:n.RGBA8),nt===n.UNSIGNED_SHORT_4_4_4_4&&(pt=n.RGBA4),nt===n.UNSIGNED_SHORT_5_5_5_1&&(pt=n.RGB5_A1)}return(pt===n.R16F||pt===n.R32F||pt===n.RG16F||pt===n.RG32F||pt===n.RGBA16F||pt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function v(P,S){let nt;return P?S===null||S===us||S===nr?nt=n.DEPTH24_STENCIL8:S===di?nt=n.DEPTH32F_STENCIL8:S===Dr&&(nt=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===us||S===nr?nt=n.DEPTH_COMPONENT24:S===di?nt=n.DEPTH_COMPONENT32F:S===Dr&&(nt=n.DEPTH_COMPONENT16),nt}function x(P,S){return d(P)===!0||P.isFramebufferTexture&&P.minFilter!==Cn&&P.minFilter!==Gn?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function R(P){let S=P.target;S.removeEventListener("dispose",R),E(S),S.isVideoTexture&&h.delete(S)}function w(P){let S=P.target;S.removeEventListener("dispose",w),Z(S)}function E(P){let S=i.get(P);if(S.__webglInit===void 0)return;let nt=P.source,ut=p.get(nt);if(ut){let gt=ut[S.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&N(P),Object.keys(ut).length===0&&p.delete(nt)}i.remove(P)}function N(P){let S=i.get(P);n.deleteTexture(S.__webglTexture);let nt=P.source,ut=p.get(nt);delete ut[S.__cacheKey],o.memory.textures--}function Z(P){let S=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(S.__webglFramebuffer[ut]))for(let gt=0;gt<S.__webglFramebuffer[ut].length;gt++)n.deleteFramebuffer(S.__webglFramebuffer[ut][gt]);else n.deleteFramebuffer(S.__webglFramebuffer[ut]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[ut])}else{if(Array.isArray(S.__webglFramebuffer))for(let ut=0;ut<S.__webglFramebuffer.length;ut++)n.deleteFramebuffer(S.__webglFramebuffer[ut]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ut=0;ut<S.__webglColorRenderbuffer.length;ut++)S.__webglColorRenderbuffer[ut]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[ut]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let nt=P.textures;for(let ut=0,gt=nt.length;ut<gt;ut++){let pt=i.get(nt[ut]);pt.__webglTexture&&(n.deleteTexture(pt.__webglTexture),o.memory.textures--),i.remove(nt[ut])}i.remove(P)}let b=0;function M(){b=0}function V(){let P=b;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),b+=1,P}function J(P){let S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function L(P,S){let nt=i.get(P);if(P.isVideoTexture&&yt(P),P.isRenderTargetTexture===!1&&P.version>0&&nt.__version!==P.version){let ut=P.image;if(ut===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B(nt,P,S);return}}e.bindTexture(n.TEXTURE_2D,nt.__webglTexture,n.TEXTURE0+S)}function O(P,S){let nt=i.get(P);if(P.version>0&&nt.__version!==P.version){B(nt,P,S);return}e.bindTexture(n.TEXTURE_2D_ARRAY,nt.__webglTexture,n.TEXTURE0+S)}function T(P,S){let nt=i.get(P);if(P.version>0&&nt.__version!==P.version){B(nt,P,S);return}e.bindTexture(n.TEXTURE_3D,nt.__webglTexture,n.TEXTURE0+S)}function H(P,S){let nt=i.get(P);if(P.version>0&&nt.__version!==P.version){I(nt,P,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,nt.__webglTexture,n.TEXTURE0+S)}let z={[er]:n.REPEAT,[hs]:n.CLAMP_TO_EDGE,[Hl]:n.MIRRORED_REPEAT},et={[Cn]:n.NEAREST,[Kd]:n.NEAREST_MIPMAP_NEAREST,[fo]:n.NEAREST_MIPMAP_LINEAR,[Gn]:n.LINEAR,[$a]:n.LINEAR_MIPMAP_NEAREST,[fs]:n.LINEAR_MIPMAP_LINEAR},D={[t0]:n.NEVER,[o0]:n.ALWAYS,[e0]:n.LESS,[ru]:n.LEQUAL,[n0]:n.EQUAL,[r0]:n.GEQUAL,[i0]:n.GREATER,[s0]:n.NOTEQUAL};function U(P,S){if(S.type===di&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Gn||S.magFilter===$a||S.magFilter===fo||S.magFilter===fs||S.minFilter===Gn||S.minFilter===$a||S.minFilter===fo||S.minFilter===fs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,z[S.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,z[S.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,z[S.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,et[S.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,et[S.minFilter]),S.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,D[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Cn||S.minFilter!==fo&&S.minFilter!==fs||S.type===di&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let nt=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Y(P,S){let nt=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",R));let ut=S.source,gt=p.get(ut);gt===void 0&&(gt={},p.set(ut,gt));let pt=J(S);if(pt!==P.__cacheKey){gt[pt]===void 0&&(gt[pt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,nt=!0),gt[pt].usedTimes++;let Ot=gt[P.__cacheKey];Ot!==void 0&&(gt[P.__cacheKey].usedTimes--,Ot.usedTimes===0&&N(S)),P.__cacheKey=pt,P.__webglTexture=gt[pt].texture}return nt}function B(P,S,nt){let ut=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ut=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ut=n.TEXTURE_3D);let gt=Y(P,S),pt=S.source;e.bindTexture(ut,P.__webglTexture,n.TEXTURE0+nt);let Ot=i.get(pt);if(pt.version!==Ot.__version||gt===!0){e.activeTexture(n.TEXTURE0+nt);let wt=ue.getPrimaries(ue.workingColorSpace),It=S.colorSpace===zi?null:ue.getPrimaries(S.colorSpace),se=S.colorSpace===zi||wt===It?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let bt=_(S.image,!1,s.maxTextureSize);bt=xt(S,bt);let Lt=r.convert(S.format,S.colorSpace),$t=r.convert(S.type),Kt=y(S.internalFormat,Lt,$t,S.colorSpace,S.isVideoTexture);U(ut,S);let Ut,re=S.mipmaps,Jt=S.isVideoTexture!==!0,be=Ot.__version===void 0||gt===!0,K=pt.dataReady,Ct=x(S,bt);if(S.isDepthTexture)Kt=v(S.format===ir,S.type),be&&(Jt?e.texStorage2D(n.TEXTURE_2D,1,Kt,bt.width,bt.height):e.texImage2D(n.TEXTURE_2D,0,Kt,bt.width,bt.height,0,Lt,$t,null));else if(S.isDataTexture)if(re.length>0){Jt&&be&&e.texStorage2D(n.TEXTURE_2D,Ct,Kt,re[0].width,re[0].height);for(let ct=0,_t=re.length;ct<_t;ct++)Ut=re[ct],Jt?K&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,Ut.width,Ut.height,Lt,$t,Ut.data):e.texImage2D(n.TEXTURE_2D,ct,Kt,Ut.width,Ut.height,0,Lt,$t,Ut.data);S.generateMipmaps=!1}else Jt?(be&&e.texStorage2D(n.TEXTURE_2D,Ct,Kt,bt.width,bt.height),K&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,bt.width,bt.height,Lt,$t,bt.data)):e.texImage2D(n.TEXTURE_2D,0,Kt,bt.width,bt.height,0,Lt,$t,bt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Jt&&be&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,Kt,re[0].width,re[0].height,bt.depth);for(let ct=0,_t=re.length;ct<_t;ct++)if(Ut=re[ct],S.format!==Wn)if(Lt!==null)if(Jt){if(K)if(S.layerUpdates.size>0){let Tt=Lf(Ut.width,Ut.height,S.format,S.type);for(let Pt of S.layerUpdates){let oe=Ut.data.subarray(Pt*Tt/Ut.data.BYTES_PER_ELEMENT,(Pt+1)*Tt/Ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,Pt,Ut.width,Ut.height,1,Lt,oe,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,Ut.width,Ut.height,bt.depth,Lt,Ut.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ct,Kt,Ut.width,Ut.height,bt.depth,0,Ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?K&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,Ut.width,Ut.height,bt.depth,Lt,$t,Ut.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ct,Kt,Ut.width,Ut.height,bt.depth,0,Lt,$t,Ut.data)}else{Jt&&be&&e.texStorage2D(n.TEXTURE_2D,Ct,Kt,re[0].width,re[0].height);for(let ct=0,_t=re.length;ct<_t;ct++)Ut=re[ct],S.format!==Wn?Lt!==null?Jt?K&&e.compressedTexSubImage2D(n.TEXTURE_2D,ct,0,0,Ut.width,Ut.height,Lt,Ut.data):e.compressedTexImage2D(n.TEXTURE_2D,ct,Kt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?K&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,Ut.width,Ut.height,Lt,$t,Ut.data):e.texImage2D(n.TEXTURE_2D,ct,Kt,Ut.width,Ut.height,0,Lt,$t,Ut.data)}else if(S.isDataArrayTexture)if(Jt){if(be&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,Kt,bt.width,bt.height,bt.depth),K)if(S.layerUpdates.size>0){let ct=Lf(bt.width,bt.height,S.format,S.type);for(let _t of S.layerUpdates){let Tt=bt.data.subarray(_t*ct/bt.data.BYTES_PER_ELEMENT,(_t+1)*ct/bt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,_t,bt.width,bt.height,1,Lt,$t,Tt)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Lt,$t,bt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Kt,bt.width,bt.height,bt.depth,0,Lt,$t,bt.data);else if(S.isData3DTexture)Jt?(be&&e.texStorage3D(n.TEXTURE_3D,Ct,Kt,bt.width,bt.height,bt.depth),K&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Lt,$t,bt.data)):e.texImage3D(n.TEXTURE_3D,0,Kt,bt.width,bt.height,bt.depth,0,Lt,$t,bt.data);else if(S.isFramebufferTexture){if(be)if(Jt)e.texStorage2D(n.TEXTURE_2D,Ct,Kt,bt.width,bt.height);else{let ct=bt.width,_t=bt.height;for(let Tt=0;Tt<Ct;Tt++)e.texImage2D(n.TEXTURE_2D,Tt,Kt,ct,_t,0,Lt,$t,null),ct>>=1,_t>>=1}}else if(re.length>0){if(Jt&&be){let ct=mt(re[0]);e.texStorage2D(n.TEXTURE_2D,Ct,Kt,ct.width,ct.height)}for(let ct=0,_t=re.length;ct<_t;ct++)Ut=re[ct],Jt?K&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,Lt,$t,Ut):e.texImage2D(n.TEXTURE_2D,ct,Kt,Lt,$t,Ut);S.generateMipmaps=!1}else if(Jt){if(be){let ct=mt(bt);e.texStorage2D(n.TEXTURE_2D,Ct,Kt,ct.width,ct.height)}K&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Lt,$t,bt)}else e.texImage2D(n.TEXTURE_2D,0,Kt,Lt,$t,bt);d(S)&&u(ut),Ot.__version=pt.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function I(P,S,nt){if(S.image.length!==6)return;let ut=Y(P,S),gt=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+nt);let pt=i.get(gt);if(gt.version!==pt.__version||ut===!0){e.activeTexture(n.TEXTURE0+nt);let Ot=ue.getPrimaries(ue.workingColorSpace),wt=S.colorSpace===zi?null:ue.getPrimaries(S.colorSpace),It=S.colorSpace===zi||Ot===wt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let se=S.isCompressedTexture||S.image[0].isCompressedTexture,bt=S.image[0]&&S.image[0].isDataTexture,Lt=[];for(let _t=0;_t<6;_t++)!se&&!bt?Lt[_t]=_(S.image[_t],!0,s.maxCubemapSize):Lt[_t]=bt?S.image[_t].image:S.image[_t],Lt[_t]=xt(S,Lt[_t]);let $t=Lt[0],Kt=r.convert(S.format,S.colorSpace),Ut=r.convert(S.type),re=y(S.internalFormat,Kt,Ut,S.colorSpace),Jt=S.isVideoTexture!==!0,be=pt.__version===void 0||ut===!0,K=gt.dataReady,Ct=x(S,$t);U(n.TEXTURE_CUBE_MAP,S);let ct;if(se){Jt&&be&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,re,$t.width,$t.height);for(let _t=0;_t<6;_t++){ct=Lt[_t].mipmaps;for(let Tt=0;Tt<ct.length;Tt++){let Pt=ct[Tt];S.format!==Wn?Kt!==null?Jt?K&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Tt,0,0,Pt.width,Pt.height,Kt,Pt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Tt,re,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Jt?K&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Tt,0,0,Pt.width,Pt.height,Kt,Ut,Pt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Tt,re,Pt.width,Pt.height,0,Kt,Ut,Pt.data)}}}else{if(ct=S.mipmaps,Jt&&be){ct.length>0&&Ct++;let _t=mt(Lt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,re,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(bt){Jt?K&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Lt[_t].width,Lt[_t].height,Kt,Ut,Lt[_t].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,re,Lt[_t].width,Lt[_t].height,0,Kt,Ut,Lt[_t].data);for(let Tt=0;Tt<ct.length;Tt++){let oe=ct[Tt].image[_t].image;Jt?K&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Tt+1,0,0,oe.width,oe.height,Kt,Ut,oe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Tt+1,re,oe.width,oe.height,0,Kt,Ut,oe.data)}}else{Jt?K&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Kt,Ut,Lt[_t]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,re,Kt,Ut,Lt[_t]);for(let Tt=0;Tt<ct.length;Tt++){let Pt=ct[Tt];Jt?K&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Tt+1,0,0,Kt,Ut,Pt.image[_t]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Tt+1,re,Kt,Ut,Pt.image[_t])}}}d(S)&&u(n.TEXTURE_CUBE_MAP),pt.__version=gt.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function k(P,S,nt,ut,gt,pt){let Ot=r.convert(nt.format,nt.colorSpace),wt=r.convert(nt.type),It=y(nt.internalFormat,Ot,wt,nt.colorSpace);if(!i.get(S).__hasExternalTextures){let bt=Math.max(1,S.width>>pt),Lt=Math.max(1,S.height>>pt);gt===n.TEXTURE_3D||gt===n.TEXTURE_2D_ARRAY?e.texImage3D(gt,pt,It,bt,Lt,S.depth,0,Ot,wt,null):e.texImage2D(gt,pt,It,bt,Lt,0,Ot,wt,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),ht(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ut,gt,i.get(nt).__webglTexture,0,ft(S)):(gt===n.TEXTURE_2D||gt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ut,gt,i.get(nt).__webglTexture,pt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function q(P,S,nt){if(n.bindRenderbuffer(n.RENDERBUFFER,P),S.depthBuffer){let ut=S.depthTexture,gt=ut&&ut.isDepthTexture?ut.type:null,pt=v(S.stencilBuffer,gt),Ot=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,wt=ft(S);ht(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,wt,pt,S.width,S.height):nt?n.renderbufferStorageMultisample(n.RENDERBUFFER,wt,pt,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,pt,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ot,n.RENDERBUFFER,P)}else{let ut=S.textures;for(let gt=0;gt<ut.length;gt++){let pt=ut[gt],Ot=r.convert(pt.format,pt.colorSpace),wt=r.convert(pt.type),It=y(pt.internalFormat,Ot,wt,pt.colorSpace),se=ft(S);nt&&ht(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,It,S.width,S.height):ht(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,It,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,It,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function W(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),L(S.depthTexture,0);let ut=i.get(S.depthTexture).__webglTexture,gt=ft(S);if(S.depthTexture.format===$s)ht(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ut,0,gt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ut,0);else if(S.depthTexture.format===ir)ht(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ut,0,gt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ut,0);else throw new Error("Unknown depthTexture format")}function Q(P){let S=i.get(P),nt=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){let ut=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ut){let gt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ut.removeEventListener("dispose",gt)};ut.addEventListener("dispose",gt),S.__depthDisposeCallback=gt}S.__boundDepthTexture=ut}if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");W(S.__webglFramebuffer,P)}else if(nt){S.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[ut]),S.__webglDepthbuffer[ut]===void 0)S.__webglDepthbuffer[ut]=n.createRenderbuffer(),q(S.__webglDepthbuffer[ut],P,!1);else{let gt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=S.__webglDepthbuffer[ut];n.bindRenderbuffer(n.RENDERBUFFER,pt),n.framebufferRenderbuffer(n.FRAMEBUFFER,gt,n.RENDERBUFFER,pt)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),q(S.__webglDepthbuffer,P,!1);else{let ut=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,gt=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,gt),n.framebufferRenderbuffer(n.FRAMEBUFFER,ut,n.RENDERBUFFER,gt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function it(P,S,nt){let ut=i.get(P);S!==void 0&&k(ut.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),nt!==void 0&&Q(P)}function rt(P){let S=P.texture,nt=i.get(P),ut=i.get(S);P.addEventListener("dispose",w);let gt=P.textures,pt=P.isWebGLCubeRenderTarget===!0,Ot=gt.length>1;if(Ot||(ut.__webglTexture===void 0&&(ut.__webglTexture=n.createTexture()),ut.__version=S.version,o.memory.textures++),pt){nt.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(S.mipmaps&&S.mipmaps.length>0){nt.__webglFramebuffer[wt]=[];for(let It=0;It<S.mipmaps.length;It++)nt.__webglFramebuffer[wt][It]=n.createFramebuffer()}else nt.__webglFramebuffer[wt]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){nt.__webglFramebuffer=[];for(let wt=0;wt<S.mipmaps.length;wt++)nt.__webglFramebuffer[wt]=n.createFramebuffer()}else nt.__webglFramebuffer=n.createFramebuffer();if(Ot)for(let wt=0,It=gt.length;wt<It;wt++){let se=i.get(gt[wt]);se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&ht(P)===!1){nt.__webglMultisampledFramebuffer=n.createFramebuffer(),nt.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let wt=0;wt<gt.length;wt++){let It=gt[wt];nt.__webglColorRenderbuffer[wt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,nt.__webglColorRenderbuffer[wt]);let se=r.convert(It.format,It.colorSpace),bt=r.convert(It.type),Lt=y(It.internalFormat,se,bt,It.colorSpace,P.isXRRenderTarget===!0),$t=ft(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,$t,Lt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.RENDERBUFFER,nt.__webglColorRenderbuffer[wt])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(nt.__webglDepthRenderbuffer=n.createRenderbuffer(),q(nt.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(pt){e.bindTexture(n.TEXTURE_CUBE_MAP,ut.__webglTexture),U(n.TEXTURE_CUBE_MAP,S);for(let wt=0;wt<6;wt++)if(S.mipmaps&&S.mipmaps.length>0)for(let It=0;It<S.mipmaps.length;It++)k(nt.__webglFramebuffer[wt][It],P,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,It);else k(nt.__webglFramebuffer[wt],P,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);d(S)&&u(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ot){for(let wt=0,It=gt.length;wt<It;wt++){let se=gt[wt],bt=i.get(se);e.bindTexture(n.TEXTURE_2D,bt.__webglTexture),U(n.TEXTURE_2D,se),k(nt.__webglFramebuffer,P,se,n.COLOR_ATTACHMENT0+wt,n.TEXTURE_2D,0),d(se)&&u(n.TEXTURE_2D)}e.unbindTexture()}else{let wt=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(wt=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(wt,ut.__webglTexture),U(wt,S),S.mipmaps&&S.mipmaps.length>0)for(let It=0;It<S.mipmaps.length;It++)k(nt.__webglFramebuffer[It],P,S,n.COLOR_ATTACHMENT0,wt,It);else k(nt.__webglFramebuffer,P,S,n.COLOR_ATTACHMENT0,wt,0);d(S)&&u(wt),e.unbindTexture()}P.depthBuffer&&Q(P)}function st(P){let S=P.textures;for(let nt=0,ut=S.length;nt<ut;nt++){let gt=S[nt];if(d(gt)){let pt=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ot=i.get(gt).__webglTexture;e.bindTexture(pt,Ot),u(pt),e.unbindTexture()}}}let $=[],A=[];function lt(P){if(P.samples>0){if(ht(P)===!1){let S=P.textures,nt=P.width,ut=P.height,gt=n.COLOR_BUFFER_BIT,pt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ot=i.get(P),wt=S.length>1;if(wt)for(let It=0;It<S.length;It++)e.bindFramebuffer(n.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+It,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Ot.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+It,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let It=0;It<S.length;It++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(gt|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(gt|=n.STENCIL_BUFFER_BIT)),wt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ot.__webglColorRenderbuffer[It]);let se=i.get(S[It]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,se,0)}n.blitFramebuffer(0,0,nt,ut,0,0,nt,ut,gt,n.NEAREST),l===!0&&($.length=0,A.length=0,$.push(n.COLOR_ATTACHMENT0+It),P.depthBuffer&&P.resolveDepthBuffer===!1&&($.push(pt),A.push(pt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,A)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),wt)for(let It=0;It<S.length;It++){e.bindFramebuffer(n.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+It,n.RENDERBUFFER,Ot.__webglColorRenderbuffer[It]);let se=i.get(S[It]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Ot.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+It,n.TEXTURE_2D,se,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let S=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function ft(P){return Math.min(s.maxSamples,P.samples)}function ht(P){let S=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function yt(P){let S=o.render.frame;h.get(P)!==S&&(h.set(P,S),P.update())}function xt(P,S){let nt=P.colorSpace,ut=P.format,gt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||nt!==Zi&&nt!==zi&&(ue.getTransfer(nt)===we?(ut!==Wn||gt!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),S}function mt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=M,this.setTexture2D=L,this.setTexture2DArray=O,this.setTexture3D=T,this.setTextureCube=H,this.rebindTextures=it,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=k,this.useMultisampledRTT=ht}function py(n,t){function e(i,s=zi){let r,o=ue.getTransfer(s);if(i===mi)return n.UNSIGNED_BYTE;if(i===eh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===nh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Kf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Zf)return n.BYTE;if(i===$f)return n.SHORT;if(i===Dr)return n.UNSIGNED_SHORT;if(i===th)return n.INT;if(i===us)return n.UNSIGNED_INT;if(i===di)return n.FLOAT;if(i===$r)return n.HALF_FLOAT;if(i===Jf)return n.ALPHA;if(i===jf)return n.RGB;if(i===Wn)return n.RGBA;if(i===Qf)return n.LUMINANCE;if(i===tu)return n.LUMINANCE_ALPHA;if(i===$s)return n.DEPTH_COMPONENT;if(i===ir)return n.DEPTH_STENCIL;if(i===eu)return n.RED;if(i===ih)return n.RED_INTEGER;if(i===nu)return n.RG;if(i===sh)return n.RG_INTEGER;if(i===rh)return n.RGBA_INTEGER;if(i===zo||i===Ho||i===Go||i===Vo)if(o===we)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===zo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===zo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ho)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Go)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Vo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Gl||i===Vl||i===Wl||i===Xl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Gl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yl||i===ql||i===Zl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Yl||i===ql)return o===we?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Zl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===$l||i===Kl||i===Jl||i===jl||i===Ql||i===tc||i===ec||i===nc||i===ic||i===sc||i===rc||i===oc||i===ac||i===lc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===$l)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Jl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ql)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===tc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ec)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ic)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===oc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ac)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Wo||i===cc||i===hc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Wo)return o===we?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===iu||i===fc||i===uc||i===dc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Wo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===fc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===uc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===nr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}function xy(n,t){function e(d,u){d.matrixAutoUpdate===!0&&d.updateMatrix(),u.value.copy(d.matrix)}function i(d,u){u.color.getRGB(d.fogColor.value,cu(n)),u.isFog?(d.fogNear.value=u.near,d.fogFar.value=u.far):u.isFogExp2&&(d.fogDensity.value=u.density)}function s(d,u,y,v,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(d,u):u.isMeshToonMaterial?(r(d,u),f(d,u)):u.isMeshPhongMaterial?(r(d,u),h(d,u)):u.isMeshStandardMaterial?(r(d,u),p(d,u),u.isMeshPhysicalMaterial&&m(d,u,x)):u.isMeshMatcapMaterial?(r(d,u),g(d,u)):u.isMeshDepthMaterial?r(d,u):u.isMeshDistanceMaterial?(r(d,u),_(d,u)):u.isMeshNormalMaterial?r(d,u):u.isLineBasicMaterial?(o(d,u),u.isLineDashedMaterial&&a(d,u)):u.isPointsMaterial?l(d,u,y,v):u.isSpriteMaterial?c(d,u):u.isShadowMaterial?(d.color.value.copy(u.color),d.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(d,u){d.opacity.value=u.opacity,u.color&&d.diffuse.value.copy(u.color),u.emissive&&d.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(d.map.value=u.map,e(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,e(u.alphaMap,d.alphaMapTransform)),u.bumpMap&&(d.bumpMap.value=u.bumpMap,e(u.bumpMap,d.bumpMapTransform),d.bumpScale.value=u.bumpScale,u.side===Fe&&(d.bumpScale.value*=-1)),u.normalMap&&(d.normalMap.value=u.normalMap,e(u.normalMap,d.normalMapTransform),d.normalScale.value.copy(u.normalScale),u.side===Fe&&d.normalScale.value.negate()),u.displacementMap&&(d.displacementMap.value=u.displacementMap,e(u.displacementMap,d.displacementMapTransform),d.displacementScale.value=u.displacementScale,d.displacementBias.value=u.displacementBias),u.emissiveMap&&(d.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,d.emissiveMapTransform)),u.specularMap&&(d.specularMap.value=u.specularMap,e(u.specularMap,d.specularMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest);let y=t.get(u),v=y.envMap,x=y.envMapRotation;v&&(d.envMap.value=v,os.copy(x),os.x*=-1,os.y*=-1,os.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),d.envMapRotation.value.setFromMatrix4(yy.makeRotationFromEuler(os)),d.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=u.reflectivity,d.ior.value=u.ior,d.refractionRatio.value=u.refractionRatio),u.lightMap&&(d.lightMap.value=u.lightMap,d.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,d.lightMapTransform)),u.aoMap&&(d.aoMap.value=u.aoMap,d.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,d.aoMapTransform))}function o(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,u.map&&(d.map.value=u.map,e(u.map,d.mapTransform))}function a(d,u){d.dashSize.value=u.dashSize,d.totalSize.value=u.dashSize+u.gapSize,d.scale.value=u.scale}function l(d,u,y,v){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.size.value=u.size*y,d.scale.value=v*.5,u.map&&(d.map.value=u.map,e(u.map,d.uvTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,e(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function c(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.rotation.value=u.rotation,u.map&&(d.map.value=u.map,e(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,e(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function h(d,u){d.specular.value.copy(u.specular),d.shininess.value=Math.max(u.shininess,1e-4)}function f(d,u){u.gradientMap&&(d.gradientMap.value=u.gradientMap)}function p(d,u){d.metalness.value=u.metalness,u.metalnessMap&&(d.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,d.metalnessMapTransform)),d.roughness.value=u.roughness,u.roughnessMap&&(d.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,d.roughnessMapTransform)),u.envMap&&(d.envMapIntensity.value=u.envMapIntensity)}function m(d,u,y){d.ior.value=u.ior,u.sheen>0&&(d.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),d.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(d.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,d.sheenColorMapTransform)),u.sheenRoughnessMap&&(d.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,d.sheenRoughnessMapTransform))),u.clearcoat>0&&(d.clearcoat.value=u.clearcoat,d.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(d.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,d.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(d.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Fe&&d.clearcoatNormalScale.value.negate())),u.dispersion>0&&(d.dispersion.value=u.dispersion),u.iridescence>0&&(d.iridescence.value=u.iridescence,d.iridescenceIOR.value=u.iridescenceIOR,d.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(d.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,d.iridescenceMapTransform)),u.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),u.transmission>0&&(d.transmission.value=u.transmission,d.transmissionSamplerMap.value=y.texture,d.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(d.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,d.transmissionMapTransform)),d.thickness.value=u.thickness,u.thicknessMap&&(d.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=u.attenuationDistance,d.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(d.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(d.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=u.specularIntensity,d.specularColor.value.copy(u.specularColor),u.specularColorMap&&(d.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,d.specularColorMapTransform)),u.specularIntensityMap&&(d.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,u){u.matcap&&(d.matcap.value=u.matcap)}function _(d,u){let y=t.get(u).light;d.referencePosition.value.setFromMatrixPosition(y.matrixWorld),d.nearDistance.value=y.shadow.camera.near,d.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function vy(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){let x=v.program;i.uniformBlockBinding(y,x)}function c(y,v){let x=s[y.id];x===void 0&&(g(y),x=h(y),s[y.id]=x,y.addEventListener("dispose",d));let R=v.program;i.updateUBOMapping(y,R);let w=t.render.frame;r[y.id]!==w&&(p(y),r[y.id]=w)}function h(y){let v=f();y.__bindingPointIndex=v;let x=n.createBuffer(),R=y.__size,w=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,R,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,x),x}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){let v=s[y.id],x=y.uniforms,R=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let w=0,E=x.length;w<E;w++){let N=Array.isArray(x[w])?x[w]:[x[w]];for(let Z=0,b=N.length;Z<b;Z++){let M=N[Z];if(m(M,w,Z,R)===!0){let V=M.__offset,J=Array.isArray(M.value)?M.value:[M.value],L=0;for(let O=0;O<J.length;O++){let T=J[O],H=_(T);typeof T=="number"||typeof T=="boolean"?(M.__data[0]=T,n.bufferSubData(n.UNIFORM_BUFFER,V+L,M.__data)):T.isMatrix3?(M.__data[0]=T.elements[0],M.__data[1]=T.elements[1],M.__data[2]=T.elements[2],M.__data[3]=0,M.__data[4]=T.elements[3],M.__data[5]=T.elements[4],M.__data[6]=T.elements[5],M.__data[7]=0,M.__data[8]=T.elements[6],M.__data[9]=T.elements[7],M.__data[10]=T.elements[8],M.__data[11]=0):(T.toArray(M.__data,L),L+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,M.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(y,v,x,R){let w=y.value,E=v+"_"+x;if(R[E]===void 0)return typeof w=="number"||typeof w=="boolean"?R[E]=w:R[E]=w.clone(),!0;{let N=R[E];if(typeof w=="number"||typeof w=="boolean"){if(N!==w)return R[E]=w,!0}else if(N.equals(w)===!1)return N.copy(w),!0}return!1}function g(y){let v=y.uniforms,x=0,R=16;for(let E=0,N=v.length;E<N;E++){let Z=Array.isArray(v[E])?v[E]:[v[E]];for(let b=0,M=Z.length;b<M;b++){let V=Z[b],J=Array.isArray(V.value)?V.value:[V.value];for(let L=0,O=J.length;L<O;L++){let T=J[L],H=_(T),z=x%R,et=z%H.boundary,D=z+et;x+=et,D!==0&&R-D<H.storage&&(x+=R-D),V.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=x,x+=H.storage}}}let w=x%R;return w>0&&(x+=R-w),y.__size=x,y.__cache={},this}function _(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function d(y){let v=y.target;v.removeEventListener("dispose",d);let x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function u(){for(let y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}function No(n,t,e,i,s,r){Ys.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Sr.x=r*Ys.x-s*Ys.y,Sr.y=s*Ys.x+r*Ys.y):Sr.copy(Ys),n.copy(t),n.x+=Sr.x,n.y+=Sr.y,n.applyMatrix4(mu)}function ch(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let p=(o-r)/c-(a-r)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+f)+(l-a)/f;p*=h,m*=h,s(o,a,p,m)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}function Nf(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function by(n,t){let e=1-n;return e*e*t}function My(n,t){return 2*(1-n)*n*t}function Sy(n,t){return n*n*t}function Pr(n,t,e,i){return by(n,t)+My(n,e)+Sy(n,i)}function wy(n,t){let e=1-n;return e*e*e*t}function Ey(n,t){let e=1-n;return 3*e*e*n*t}function Ty(n,t){return 3*(1-n)*n*n*t}function Ay(n,t){return n*n*n*t}function Ir(n,t,e,i,s){return wy(n,t)+Ey(n,e)+Ty(n,i)+Ay(n,s)}function gu(n,t,e,i,s){let r,o;if(s===Wy(n,t,e,i)>0)for(r=t;r<e;r+=i)o=Of(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=Of(r,n[r],n[r+1],o);return o&&Aa(o,o.next)&&(Vr(o),o=o.next),o}function ps(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Aa(e,e.next)||Ce(e.prev,e,e.next)===0)){if(Vr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Hr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Fy(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?Py(n,i,s,r):Cy(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),Vr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Iy(ps(n),t,e),Hr(n,t,e,i,s,r,2)):o===2&&Ly(n,t,e,i,s,r):Hr(ps(n),t,e,i,s,r,1);break}}}function Cy(n){let t=n.prev,e=n,i=n.next;if(Ce(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,f=a<l?a<c?a:c:l<c?l:c,p=s>r?s>o?s:o:r>o?r:o,m=a>l?a>c?a:c:l>c?l:c,g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=p&&g.y>=f&&g.y<=m&&Zs(s,a,r,l,o,c,g.x,g.y)&&Ce(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Py(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Ce(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,p=o.y,m=a<l?a<c?a:c:l<c?l:c,g=h<f?h<p?h:p:f<p?f:p,_=a>l?a>c?a:c:l>c?l:c,d=h>f?h>p?h:p:f>p?f:p,u=Bc(m,g,t,e,i),y=Bc(_,d,t,e,i),v=n.prevZ,x=n.nextZ;for(;v&&v.z>=u&&x&&x.z<=y;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=d&&v!==s&&v!==o&&Zs(a,h,l,f,c,p,v.x,v.y)&&Ce(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=m&&x.x<=_&&x.y>=g&&x.y<=d&&x!==s&&x!==o&&Zs(a,h,l,f,c,p,x.x,x.y)&&Ce(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=u;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=d&&v!==s&&v!==o&&Zs(a,h,l,f,c,p,v.x,v.y)&&Ce(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=y;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=d&&x!==s&&x!==o&&Zs(a,h,l,f,c,p,x.x,x.y)&&Ce(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Iy(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!Aa(s,r)&&_u(s,i,i.next,r)&&Gr(s,r)&&Gr(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Vr(i),Vr(i.next),i=n=r),i=i.next}while(i!==n);return ps(i)}function Ly(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Hy(o,a)){let l=yu(o,a);o=ps(o,o.next),l=ps(l,l.next),Hr(o,t,e,i,s,r,0),Hr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Dy(n,t,e,i){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=gu(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(zy(c));for(s.sort(Uy),r=0;r<s.length;r++)e=Ny(s[r],e);return e}function Uy(n,t){return n.x-t.x}function Ny(n,t){let e=Oy(n,t);if(!e)return t;let i=yu(e,n);return ps(i,i.next),ps(e,e.next)}function Oy(n,t){let e=t,i=-1/0,s,r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let p=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=r&&p>i&&(i=p,s=e.x<e.next.x?e:e.next,p===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,f;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Zs(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(f=Math.abs(o-e.y)/(r-e.x),Gr(e,n)&&(f<h||f===h&&(e.x>s.x||e.x===s.x&&ky(s,e)))&&(s=e,h=f)),e=e.next;while(e!==a);return s}function ky(n,t){return Ce(n.prev,n,t.prev)<0&&Ce(t.next,n,n.next)<0}function Fy(n,t,e,i){let s=n;do s.z===0&&(s.z=Bc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,By(s)}function By(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function Bc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function zy(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Zs(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Hy(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Gy(n,t)&&(Gr(n,t)&&Gr(t,n)&&Vy(n,t)&&(Ce(n.prev,n,t.prev)||Ce(n,t.prev,t))||Aa(n,t)&&Ce(n.prev,n,n.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Aa(n,t){return n.x===t.x&&n.y===t.y}function _u(n,t,e,i){let s=Fo(Ce(n,t,e)),r=Fo(Ce(n,t,i)),o=Fo(Ce(e,i,n)),a=Fo(Ce(e,i,t));return!!(s!==r&&o!==a||s===0&&ko(n,e,t)||r===0&&ko(n,i,t)||o===0&&ko(e,n,i)||a===0&&ko(e,t,i))}function ko(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Fo(n){return n>0?1:n<0?-1:0}function Gy(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&_u(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Gr(n,t){return Ce(n.prev,n,n.next)<0?Ce(n,t,n.next)>=0&&Ce(n,n.prev,t)>=0:Ce(n,t,n.prev)<0||Ce(n,n.next,t)<0}function Vy(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function yu(n,t){let e=new zc(n.i,n.x,n.y),i=new zc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Of(n,t,e,i){let s=new zc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Vr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function zc(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Wy(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}function kf(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Ff(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}function Yy(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}function qy(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}function Bo(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Zy(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Gf(){return performance.now()}function Wf(n,t){return n.distance-t.distance}function Qc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Qc(r[o],t,e,!0)}}var ys,xs,Md,kh,Sd,Xf,qr,ui,vn,Fe,ae,Gi,Vi,Lr,Fh,Bh,wd,ls,Ed,Td,Ad,Rd,Cd,Pd,Id,Ld,Pl,Il,Dd,Ud,Nd,Od,kd,Fd,Bd,zd,Hd,Ll,Dl,Ul,js,Nl,Ol,kl,Fl,Yf,Gd,Vd,Wi,Wd,Xd,Yd,qd,Zd,$d,Zr,qf,Qs,tr,Bl,zl,wa,er,hs,Hl,Cn,Kd,fo,Gn,$a,fs,mi,Zf,$f,Dr,th,us,di,$r,eh,nh,nr,Kf,Jf,jf,Wn,Qf,tu,$s,ir,eu,ih,nu,sh,rh,zo,Ho,Go,Vo,Gl,Vl,Wl,Xl,Yl,ql,Zl,$l,Kl,Jl,jl,Ql,tc,ec,nc,ic,sc,rc,oc,ac,lc,Wo,cc,hc,iu,fc,uc,dc,Yo,pc,Ka,zh,Hh,Gh,Jd,jd,su,Qd,zi,Ze,Zi,oh,Ea,qo,we,Zo,$o,Cs,Vh,t0,e0,n0,ru,i0,s0,r0,o0,mc,Wh,pi,Ko,gi,Je,Xh,Ar,Ur,ou,dt,jt,Ja,Yh,qh,Zh,_r,A0,ue,Ps,gc,R0,jo,C0,bn,_e,_c,_i,Qo,yc,Xn,G,tl,$h,ds,ai,Fn,uo,Is,Ls,Ds,Ui,Ni,es,yr,po,mo,ns,P0,xr,nl,Nr,li,il,go,Oi,sl,_o,rl,sr,de,Us,Bn,I0,L0,ki,yo,yn,Kh,Jh,Pn,Or,D0,jh,Ns,ci,xo,vr,U0,N0,Qh,tf,ef,nf,O0,Os,ol,tn,zn,hi,al,fi,ks,Fs,sf,ll,cl,hl,fl,ul,dl,Hi,lu,Fi,vo,Wt,je,k0,yi,jn,Ue,bo,Qe,ta,ea,Xt,F0,Rn,ml,Bs,xn,br,Ve,Ee,rf,is,Mo,of,So,wo,Eo,gl,To,af,Ao,Gt,Me,H0,G0,V0,Qn,na,Bi,lf,cf,We,zs,Hs,xc,ia,vc,_l,W0,X0,Hn,ss,Co,kr,xi,q0,Z0,$0,K0,J0,j0,Q0,tp,ep,np,ip,sp,rp,op,ap,lp,cp,hp,fp,up,dp,pp,mp,gp,_p,yp,xp,vp,bp,Mp,Sp,wp,Ep,Tp,Ap,Rp,Cp,Pp,Ip,Lp,Dp,Up,Np,Op,kp,Fp,Bp,zp,Hp,Gp,Vp,Wp,Xp,Yp,qp,Zp,$p,Kp,Jp,jp,Qp,tm,em,nm,im,sm,rm,om,am,lm,cm,hm,fm,um,dm,pm,mm,gm,_m,ym,xm,vm,bm,Mm,Sm,wm,Em,Tm,Am,Rm,Cm,Pm,Im,Lm,Dm,Um,Nm,Om,km,Fm,Bm,zm,Hm,Gm,Vm,Wm,Xm,Ym,qm,Zm,$m,Km,Jm,jm,Qm,tg,eg,ng,ig,sg,rg,og,ag,lg,cg,hg,fg,ug,dg,pg,mg,gg,_g,yg,xg,vg,bg,Mg,Sg,wg,Eg,te,Et,Kn,Po,rs,Tg,sa,qs,hf,cs,yl,ff,xl,vl,bl,Ml,as,Gs,uf,Yi,ra,fu,gf,uu,du,pu,_f,yf,xf,vf,bf,bc,Mc,Sc,Sl,Js,C_,P_,Lo,B_,z_,G_,K_,Ec,Tc,iy,Ac,Rc,ay,ly,hy,Cc,le,my,Cr,gy,_y,Pc,Ic,os,yy,or,qi,Lc,rn,oa,Fr,Vs,Mr,Ws,Xs,Ys,Sr,mu,Do,wr,Uo,Df,wl,Uf,aa,ar,In,Br,Dc,Oo,El,Tl,Al,ti,la,Uc,ca,Nc,ha,Oc,fa,kc,Fc,zr,Yn,Ln,Dn,ie,an,ua,$e,Ry,Xi,Wr,Xy,da,ms,pa,Mn,Te,Zt,ma,Un,ga,lr,Hc,Gc,Vc,qn,gs,Wc,Xc,Yc,_a,_s,qc,Zc,$y,$c,Xr,ya,Rl,Bf,zf,xa,Hf,Er,Cl,Kc,va,Jc,cr,ba,hh,Ky,fh,Jy,jy,Qy,t1,e1,n1,i1,jc,Ae,$1,Vf,Ma,Yr,Sa,Nn=_n(()=>{ys={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},xs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Md=0,kh=1,Sd=2,Xf=1,qr=2,ui=3,vn=0,Fe=1,ae=2,Gi=0,Vi=1,Lr=2,Fh=3,Bh=4,wd=5,ls=100,Ed=101,Td=102,Ad=103,Rd=104,Cd=200,Pd=201,Id=202,Ld=203,Pl=204,Il=205,Dd=206,Ud=207,Nd=208,Od=209,kd=210,Fd=211,Bd=212,zd=213,Hd=214,Ll=0,Dl=1,Ul=2,js=3,Nl=4,Ol=5,kl=6,Fl=7,Yf=0,Gd=1,Vd=2,Wi=0,Wd=1,Xd=2,Yd=3,qd=4,Zd=5,$d=6,Zr=7,qf=300,Qs=301,tr=302,Bl=303,zl=304,wa=306,er=1e3,hs=1001,Hl=1002,Cn=1003,Kd=1004,fo=1005,Gn=1006,$a=1007,fs=1008,mi=1009,Zf=1010,$f=1011,Dr=1012,th=1013,us=1014,di=1015,$r=1016,eh=1017,nh=1018,nr=1020,Kf=35902,Jf=1021,jf=1022,Wn=1023,Qf=1024,tu=1025,$s=1026,ir=1027,eu=1028,ih=1029,nu=1030,sh=1031,rh=1033,zo=33776,Ho=33777,Go=33778,Vo=33779,Gl=35840,Vl=35841,Wl=35842,Xl=35843,Yl=36196,ql=37492,Zl=37496,$l=37808,Kl=37809,Jl=37810,jl=37811,Ql=37812,tc=37813,ec=37814,nc=37815,ic=37816,sc=37817,rc=37818,oc=37819,ac=37820,lc=37821,Wo=36492,cc=36494,hc=36495,iu=36283,fc=36284,uc=36285,dc=36286,Yo=2300,pc=2301,Ka=2302,zh=2400,Hh=2401,Gh=2402,Jd=3200,jd=3201,su=0,Qd=1,zi="",Ze="srgb",Zi="srgb-linear",oh="display-p3",Ea="display-p3-linear",qo="linear",we="srgb",Zo="rec709",$o="p3",Cs=7680,Vh=519,t0=512,e0=513,n0=514,ru=515,i0=516,s0=517,r0=518,o0=519,mc=35044,Wh="300 es",pi=2e3,Ko=2001,gi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xh=1234567,Ar=Math.PI/180,Ur=180/Math.PI;ou={DEG2RAD:Ar,RAD2DEG:Ur,generateUUID:Jn,clamp:Ne,euclideanModulo:ah,mapLinear:a0,inverseLerp:l0,lerp:Rr,damp:c0,pingpong:h0,smoothstep:f0,smootherstep:u0,randInt:d0,randFloat:p0,randFloatSpread:m0,seededRandom:g0,degToRad:_0,radToDeg:y0,isPowerOfTwo:x0,ceilPowerOfTwo:v0,floorPowerOfTwo:b0,setQuaternionFromProperEuler:M0,normalize:ge,denormalize:Vn},dt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},jt=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],p=i[2],m=i[5],g=i[8],_=s[0],d=s[3],u=s[6],y=s[1],v=s[4],x=s[7],R=s[2],w=s[5],E=s[8];return r[0]=o*_+a*y+l*R,r[3]=o*d+a*v+l*w,r[6]=o*u+a*x+l*E,r[1]=c*_+h*y+f*R,r[4]=c*d+h*v+f*w,r[7]=c*u+h*x+f*E,r[2]=p*_+m*y+g*R,r[5]=p*d+m*v+g*w,r[8]=p*u+m*x+g*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,p=a*l-h*r,m=c*r-o*l,g=e*f+i*p+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=f*_,t[1]=(s*c-h*i)*_,t[2]=(a*i-s*o)*_,t[3]=p*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=m*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ja.makeScale(t,e)),this}rotate(t){return this.premultiply(Ja.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ja.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ja=new jt;Yh={};qh=new jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Zh=new jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),_r={[Zi]:{transfer:qo,primaries:Zo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Ze]:{transfer:we,primaries:Zo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ea]:{transfer:qo,primaries:$o,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Zh),fromReference:n=>n.applyMatrix3(qh)},[oh]:{transfer:we,primaries:$o,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Zh),fromReference:n=>n.applyMatrix3(qh).convertLinearToSRGB()}},A0=new Set([Zi,Ea]),ue={enabled:!0,_workingColorSpace:Zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!A0.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;let i=_r[t].toReference,s=_r[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return _r[n].primaries},getTransfer:function(n){return n===zi?qo:_r[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(_r[t].luminanceCoefficients)}};gc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ps===void 0&&(Ps=Jo("canvas")),Ps.width=t.width,Ps.height=t.height;let i=Ps.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ps}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Jo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ks(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ks(e[i]/255)*255):e[i]=Ks(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},R0=0,jo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=Jn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Qa(s[o].image)):r.push(Qa(s[o]))}else r=Qa(s);i.url=r}return e||(t.images[this.uuid]=i),i}};C0=0,bn=class n extends gi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=hs,s=hs,r=Gn,o=fs,a=Wn,l=mi,c=n.DEFAULT_ANISOTROPY,h=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=Jn(),this.name="",this.source=new jo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case er:t.x=t.x-Math.floor(t.x);break;case hs:t.x=t.x<0?0:1;break;case Hl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case er:t.y=t.y-Math.floor(t.y);break;case hs:t.y=t.y<0?0:1;break;case Hl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=qf;bn.DEFAULT_ANISOTROPY=1;_e=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],p=l[1],m=l[5],g=l[9],_=l[2],d=l[6],u=l[10];if(Math.abs(h-p)<.01&&Math.abs(f-_)<.01&&Math.abs(g-d)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+_)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,x=(m+1)/2,R=(u+1)/2,w=(h+p)/4,E=(f+_)/4,N=(g+d)/4;return v>x&&v>R?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=w/i,r=E/i):x>R?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=w/s,r=N/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=E/r,s=N/r),this.set(i,s,r,e),this}let y=Math.sqrt((d-g)*(d-g)+(f-_)*(f-_)+(p-h)*(p-h));return Math.abs(y)<.001&&(y=1),this.x=(d-g)/y,this.y=(f-_)/y,this.z=(p-h)/y,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_c=class extends gi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new bn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new jo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},_i=class extends _c{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Qo=class extends bn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},yc=class extends bn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Xn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3],p=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=p,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==p||c!==m||h!==g){let d=1-a,u=l*p+c*m+h*g+f*_,y=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){let R=Math.sqrt(v),w=Math.atan2(R,u*y);d=Math.sin(d*w)/R,a=Math.sin(a*w)/R}let x=a*y;if(l=l*d+p*x,c=c*d+m*x,h=h*d+g*x,f=f*d+_*x,d===1-a){let R=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=R,c*=R,h*=R,f*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[o],p=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+h*f+l*m-c*p,t[e+1]=l*g+h*p+c*f-a*m,t[e+2]=c*g+h*m+a*p-l*f,t[e+3]=h*g-a*f-l*p-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),f=a(r/2),p=l(i/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=p*h*f+c*m*g,this._y=c*m*f-p*h*g,this._z=c*h*g+p*m*f,this._w=c*h*f-p*m*g;break;case"YXZ":this._x=p*h*f+c*m*g,this._y=c*m*f-p*h*g,this._z=c*h*g-p*m*f,this._w=c*h*f+p*m*g;break;case"ZXY":this._x=p*h*f-c*m*g,this._y=c*m*f+p*h*g,this._z=c*h*g+p*m*f,this._w=c*h*f-p*m*g;break;case"ZYX":this._x=p*h*f-c*m*g,this._y=c*m*f+p*h*g,this._z=c*h*g-p*m*f,this._w=c*h*f+p*m*g;break;case"YZX":this._x=p*h*f+c*m*g,this._y=c*m*f+p*h*g,this._z=c*h*g-p*m*f,this._w=c*h*f-p*m*g;break;case"XZY":this._x=p*h*f-c*m*g,this._y=c*m*f-p*h*g,this._z=c*h*g+p*m*f,this._w=c*h*f+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],p=i+a+f;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>f){let m=2*Math.sqrt(1+i-a-f);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>f){let m=2*Math.sqrt(1+a-i-f);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+f-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,p=Math.sin(e*h)/c;return this._w=o*f+this._w*p,this._x=i*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($h.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($h.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),f=2*(r*i-o*e);return this.x=e+l*c+o*f-a*h,this.y=i+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return tl.copy(this).projectOnVector(t),this.sub(tl)}reflect(t){return this.sub(tl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},tl=new G,$h=new Xn,ds=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Fn):Fn.fromBufferAttribute(r,o),Fn.applyMatrix4(t.matrixWorld),this.expandByPoint(Fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),uo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),uo.copy(i.boundingBox)),uo.applyMatrix4(t.matrixWorld),this.union(uo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fn),Fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(yr),po.subVectors(this.max,yr),Is.subVectors(t.a,yr),Ls.subVectors(t.b,yr),Ds.subVectors(t.c,yr),Ui.subVectors(Ls,Is),Ni.subVectors(Ds,Ls),es.subVectors(Is,Ds);let e=[0,-Ui.z,Ui.y,0,-Ni.z,Ni.y,0,-es.z,es.y,Ui.z,0,-Ui.x,Ni.z,0,-Ni.x,es.z,0,-es.x,-Ui.y,Ui.x,0,-Ni.y,Ni.x,0,-es.y,es.x,0];return!el(e,Is,Ls,Ds,po)||(e=[1,0,0,0,1,0,0,0,1],!el(e,Is,Ls,Ds,po))?!1:(mo.crossVectors(Ui,Ni),e=[mo.x,mo.y,mo.z],el(e,Is,Ls,Ds,po))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ai=[new G,new G,new G,new G,new G,new G,new G,new G],Fn=new G,uo=new ds,Is=new G,Ls=new G,Ds=new G,Ui=new G,Ni=new G,es=new G,yr=new G,po=new G,mo=new G,ns=new G;P0=new ds,xr=new G,nl=new G,Nr=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):P0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xr.subVectors(t,this.center);let e=xr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(xr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xr.copy(t.center).add(nl)),this.expandByPoint(xr.copy(t.center).sub(nl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},li=new G,il=new G,go=new G,Oi=new G,sl=new G,_o=new G,rl=new G,sr=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(li.copy(this.origin).addScaledVector(this.direction,e),li.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){il.copy(t).add(e).multiplyScalar(.5),go.copy(e).sub(t).normalize(),Oi.copy(this.origin).sub(il);let r=t.distanceTo(e)*.5,o=-this.direction.dot(go),a=Oi.dot(this.direction),l=-Oi.dot(go),c=Oi.lengthSq(),h=Math.abs(1-o*o),f,p,m,g;if(h>0)if(f=o*l-a,p=o*a-l,g=r*h,f>=0)if(p>=-g)if(p<=g){let _=1/h;f*=_,p*=_,m=f*(f+o*p+2*a)+p*(o*f+p+2*l)+c}else p=r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+c;else p=-r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+c;else p<=-g?(f=Math.max(0,-(-o*r+a)),p=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+c):p<=g?(f=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(f=Math.max(0,-(o*r+a)),p=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+c);else p=o>0?-r:r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(il).addScaledVector(go,p),m}intersectSphere(t,e){li.subVectors(t.center,this.origin);let i=li.dot(this.direction),s=li.dot(li)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(i=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(i=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),h>=0?(r=(t.min.y-p.y)*h,o=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,o=(t.min.y-p.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-p.z)*f,l=(t.max.z-p.z)*f):(a=(t.max.z-p.z)*f,l=(t.min.z-p.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,li)!==null}intersectTriangle(t,e,i,s,r){sl.subVectors(e,t),_o.subVectors(i,t),rl.crossVectors(sl,_o);let o=this.direction.dot(rl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,t);let l=a*this.direction.dot(_o.crossVectors(Oi,_o));if(l<0)return null;let c=a*this.direction.dot(sl.cross(Oi));if(c<0||l+c>o)return null;let h=-a*Oi.dot(rl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},de=class n{constructor(t,e,i,s,r,o,a,l,c,h,f,p,m,g,_,d){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,f,p,m,g,_,d)}set(t,e,i,s,r,o,a,l,c,h,f,p,m,g,_,d){let u=this.elements;return u[0]=t,u[4]=e,u[8]=i,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=p,u[3]=m,u[7]=g,u[11]=_,u[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Us.setFromMatrixColumn(t,0).length(),r=1/Us.setFromMatrixColumn(t,1).length(),o=1/Us.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let p=o*h,m=o*f,g=a*h,_=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=m+g*c,e[5]=p-_*c,e[9]=-a*l,e[2]=_-p*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){let p=l*h,m=l*f,g=c*h,_=c*f;e[0]=p+_*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=_+p*a,e[10]=o*l}else if(t.order==="ZXY"){let p=l*h,m=l*f,g=c*h,_=c*f;e[0]=p-_*a,e[4]=-o*f,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=_-p*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let p=o*h,m=o*f,g=a*h,_=a*f;e[0]=l*h,e[4]=g*c-m,e[8]=p*c+_,e[1]=l*f,e[5]=_*c+p,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let p=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-p*f,e[8]=g*f+m,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*f+g,e[10]=p-_*f}else if(t.order==="XZY"){let p=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=p*f+_,e[5]=o*h,e[9]=m*f-g,e[2]=g*f-m,e[6]=a*h,e[10]=_*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(I0,t,L0)}lookAt(t,e,i){let s=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),ki.crossVectors(i,yn),ki.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),ki.crossVectors(i,yn)),ki.normalize(),yo.crossVectors(yn,ki),s[0]=ki.x,s[4]=yo.x,s[8]=yn.x,s[1]=ki.y,s[5]=yo.y,s[9]=yn.y,s[2]=ki.z,s[6]=yo.z,s[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],p=i[9],m=i[13],g=i[2],_=i[6],d=i[10],u=i[14],y=i[3],v=i[7],x=i[11],R=i[15],w=s[0],E=s[4],N=s[8],Z=s[12],b=s[1],M=s[5],V=s[9],J=s[13],L=s[2],O=s[6],T=s[10],H=s[14],z=s[3],et=s[7],D=s[11],U=s[15];return r[0]=o*w+a*b+l*L+c*z,r[4]=o*E+a*M+l*O+c*et,r[8]=o*N+a*V+l*T+c*D,r[12]=o*Z+a*J+l*H+c*U,r[1]=h*w+f*b+p*L+m*z,r[5]=h*E+f*M+p*O+m*et,r[9]=h*N+f*V+p*T+m*D,r[13]=h*Z+f*J+p*H+m*U,r[2]=g*w+_*b+d*L+u*z,r[6]=g*E+_*M+d*O+u*et,r[10]=g*N+_*V+d*T+u*D,r[14]=g*Z+_*J+d*H+u*U,r[3]=y*w+v*b+x*L+R*z,r[7]=y*E+v*M+x*O+R*et,r[11]=y*N+v*V+x*T+R*D,r[15]=y*Z+v*J+x*H+R*U,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],p=t[10],m=t[14],g=t[3],_=t[7],d=t[11],u=t[15];return g*(+r*l*f-s*c*f-r*a*p+i*c*p+s*a*m-i*l*m)+_*(+e*l*m-e*c*p+r*o*p-s*o*m+s*c*h-r*l*h)+d*(+e*c*f-e*a*m-r*o*f+i*o*m+r*a*h-i*c*h)+u*(-s*a*h-e*l*f+e*a*p+s*o*f-i*o*p+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],p=t[10],m=t[11],g=t[12],_=t[13],d=t[14],u=t[15],y=f*d*c-_*p*c+_*l*m-a*d*m-f*l*u+a*p*u,v=g*p*c-h*d*c-g*l*m+o*d*m+h*l*u-o*p*u,x=h*_*c-g*f*c+g*a*m-o*_*m-h*a*u+o*f*u,R=g*f*l-h*_*l-g*a*p+o*_*p+h*a*d-o*f*d,w=e*y+i*v+s*x+r*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/w;return t[0]=y*E,t[1]=(_*p*r-f*d*r-_*s*m+i*d*m+f*s*u-i*p*u)*E,t[2]=(a*d*r-_*l*r+_*s*c-i*d*c-a*s*u+i*l*u)*E,t[3]=(f*l*r-a*p*r-f*s*c+i*p*c+a*s*m-i*l*m)*E,t[4]=v*E,t[5]=(h*d*r-g*p*r+g*s*m-e*d*m-h*s*u+e*p*u)*E,t[6]=(g*l*r-o*d*r-g*s*c+e*d*c+o*s*u-e*l*u)*E,t[7]=(o*p*r-h*l*r+h*s*c-e*p*c-o*s*m+e*l*m)*E,t[8]=x*E,t[9]=(g*f*r-h*_*r-g*i*m+e*_*m+h*i*u-e*f*u)*E,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*u+e*a*u)*E,t[11]=(h*a*r-o*f*r-h*i*c+e*f*c+o*i*m-e*a*m)*E,t[12]=R*E,t[13]=(h*_*s-g*f*s+g*i*p-e*_*p-h*i*d+e*f*d)*E,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*d-e*a*d)*E,t[15]=(o*f*s-h*a*s+h*i*l-e*f*l-o*i*p+e*a*p)*E,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,f=a+a,p=r*c,m=r*h,g=r*f,_=o*h,d=o*f,u=a*f,y=l*c,v=l*h,x=l*f,R=i.x,w=i.y,E=i.z;return s[0]=(1-(_+u))*R,s[1]=(m+x)*R,s[2]=(g-v)*R,s[3]=0,s[4]=(m-x)*w,s[5]=(1-(p+u))*w,s[6]=(d+y)*w,s[7]=0,s[8]=(g+v)*E,s[9]=(d-y)*E,s[10]=(1-(p+_))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Us.set(s[0],s[1],s[2]).length(),o=Us.set(s[4],s[5],s[6]).length(),a=Us.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Bn.copy(this);let c=1/r,h=1/o,f=1/a;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=f,Bn.elements[9]*=f,Bn.elements[10]*=f,e.setFromRotationMatrix(Bn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=pi){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),f=(e+t)/(e-t),p=(i+s)/(i-s),m,g;if(a===pi)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ko)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=pi){let l=this.elements,c=1/(e-t),h=1/(i-s),f=1/(o-r),p=(e+t)*c,m=(i+s)*h,g,_;if(a===pi)g=(o+r)*f,_=-2*f;else if(a===Ko)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Us=new G,Bn=new de,I0=new G(0,0,0),L0=new G(1,1,1),ki=new G,yo=new G,yn=new G,Kh=new de,Jh=new Xn,Pn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],p=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ne(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Kh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jh.setFromEuler(this),this.setFromQuaternion(Jh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pn.DEFAULT_ORDER="XYZ";Or=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},D0=0,jh=new G,Ns=new Xn,ci=new de,xo=new G,vr=new G,U0=new G,N0=new Xn,Qh=new G(1,0,0),tf=new G(0,1,0),ef=new G(0,0,1),nf={type:"added"},O0={type:"removed"},Os={type:"childadded",child:null},ol={type:"childremoved",child:null},tn=class n extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new G,e=new Pn,i=new Xn,s=new G(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new jt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Or,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ns.setFromAxisAngle(t,e),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(t,e){return Ns.setFromAxisAngle(t,e),this.quaternion.premultiply(Ns),this}rotateX(t){return this.rotateOnAxis(Qh,t)}rotateY(t){return this.rotateOnAxis(tf,t)}rotateZ(t){return this.rotateOnAxis(ef,t)}translateOnAxis(t,e){return jh.copy(t).applyQuaternion(this.quaternion),this.position.add(jh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qh,t)}translateY(t){return this.translateOnAxis(tf,t)}translateZ(t){return this.translateOnAxis(ef,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?xo.copy(t):xo.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(vr,xo,this.up):ci.lookAt(xo,vr,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),Ns.setFromRotationMatrix(ci),this.quaternion.premultiply(Ns.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nf),Os.child=t,this.dispatchEvent(Os),Os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(O0),ol.child=t,this.dispatchEvent(ol),ol.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nf),Os.child=t,this.dispatchEvent(Os),Os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,t,U0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,N0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),p=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};tn.DEFAULT_UP=new G(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;zn=new G,hi=new G,al=new G,fi=new G,ks=new G,Fs=new G,sf=new G,ll=new G,cl=new G,hl=new G,fl=new _e,ul=new _e,dl=new _e,Hi=class n{constructor(t=new G,e=new G,i=new G){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),zn.subVectors(t,e),s.cross(zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){zn.subVectors(s,e),hi.subVectors(i,e),al.subVectors(t,e);let o=zn.dot(zn),a=zn.dot(hi),l=zn.dot(al),c=hi.dot(hi),h=hi.dot(al),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let p=1/f,m=(c*l-a*h)*p,g=(o*h-a*l)*p;return r.set(1-m-g,g,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fi.x),l.addScaledVector(o,fi.y),l.addScaledVector(a,fi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return fl.setScalar(0),ul.setScalar(0),dl.setScalar(0),fl.fromBufferAttribute(t,e),ul.fromBufferAttribute(t,i),dl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(fl,r.x),o.addScaledVector(ul,r.y),o.addScaledVector(dl,r.z),o}static isFrontFacing(t,e,i,s){return zn.subVectors(i,e),hi.subVectors(t,e),zn.cross(hi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),zn.cross(hi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;ks.subVectors(s,i),Fs.subVectors(r,i),ll.subVectors(t,i);let l=ks.dot(ll),c=Fs.dot(ll);if(l<=0&&c<=0)return e.copy(i);cl.subVectors(t,s);let h=ks.dot(cl),f=Fs.dot(cl);if(h>=0&&f<=h)return e.copy(s);let p=l*f-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(ks,o);hl.subVectors(t,r);let m=ks.dot(hl),g=Fs.dot(hl);if(g>=0&&m<=g)return e.copy(r);let _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Fs,a);let d=h*g-m*f;if(d<=0&&f-h>=0&&m-g>=0)return sf.subVectors(r,s),a=(f-h)/(f-h+(m-g)),e.copy(s).addScaledVector(sf,a);let u=1/(d+_+p);return o=_*u,a=p*u,e.copy(i).addScaledVector(ks,o).addScaledVector(Fs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},lu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},vo={h:0,s:0,l:0};Wt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ue.workingColorSpace){return this.r=t,this.g=e,this.b=i,ue.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ue.workingColorSpace){if(t=ah(t,1),e=Ne(e,0,1),i=Ne(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=pl(o,r,t+1/3),this.g=pl(o,r,t),this.b=pl(o,r,t-1/3)}return ue.toWorkingColorSpace(this,s),this}setStyle(t,e=Ze){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){let i=lu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ks(t.r),this.g=Ks(t.g),this.b=Ks(t.b),this}copyLinearToSRGB(t){return this.r=ja(t.r),this.g=ja(t.g),this.b=ja(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return ue.fromWorkingColorSpace(je.copy(this),t),Math.round(Ne(je.r*255,0,255))*65536+Math.round(Ne(je.g*255,0,255))*256+Math.round(Ne(je.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.fromWorkingColorSpace(je.copy(this),e);let i=je.r,s=je.g,r=je.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ue.workingColorSpace){return ue.fromWorkingColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=Ze){ue.fromWorkingColorSpace(je.copy(this),t);let e=je.r,i=je.g,s=je.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Fi),this.setHSL(Fi.h+t,Fi.s+e,Fi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Fi),t.getHSL(vo);let i=Rr(Fi.h,vo.h,e),s=Rr(Fi.s,vo.s,e),r=Rr(Fi.l,vo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},je=new Wt;Wt.NAMES=lu;k0=0,yi=class extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=Vi,this.side=vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pl,this.blendDst=Il,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vi&&(i.blending=this.blending),this.side!==vn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Pl&&(i.blendSrc=this.blendSrc),this.blendDst!==Il&&(i.blendDst=this.blendDst),this.blendEquation!==ls&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},jn=class extends yi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Yf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ue=new G,bo=new dt,Qe=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=mc,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)bo.fromBufferAttribute(this,e),bo.applyMatrix3(t),this.setXY(e,bo.x,bo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Vn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ge(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==mc&&(t.usage=this.usage),t}},ta=class extends Qe{constructor(t,e,i){super(new Uint16Array(t),e,i)}},ea=class extends Qe{constructor(t,e,i){super(new Uint32Array(t),e,i)}},Xt=class extends Qe{constructor(t,e,i){super(new Float32Array(t),e,i)}},F0=0,Rn=new de,ml=new tn,Bs=new G,xn=new ds,br=new ds,Ve=new G,Ee=class n extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(au(t)?ea:ta)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,i){return Rn.makeTranslation(t,e,i),this.applyMatrix4(Rn),this}scale(t,e,i){return Rn.makeScale(t,e,i),this.applyMatrix4(Rn),this}lookAt(t){return ml.lookAt(t),ml.updateMatrix(),this.applyMatrix4(ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(t){let e=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Xt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ds);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let i=this.boundingSphere.center;if(xn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];br.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(xn.min,br.min),xn.expandByPoint(Ve),Ve.addVectors(xn.max,br.max),xn.expandByPoint(Ve)):(xn.expandByPoint(br.min),xn.expandByPoint(br.max))}xn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ve));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ve.fromBufferAttribute(a,c),l&&(Bs.fromBufferAttribute(t,c),Ve.add(Bs)),s=Math.max(s,i.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qe(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new G,l[N]=new G;let c=new G,h=new G,f=new G,p=new dt,m=new dt,g=new dt,_=new G,d=new G;function u(N,Z,b){c.fromBufferAttribute(i,N),h.fromBufferAttribute(i,Z),f.fromBufferAttribute(i,b),p.fromBufferAttribute(r,N),m.fromBufferAttribute(r,Z),g.fromBufferAttribute(r,b),h.sub(c),f.sub(c),m.sub(p),g.sub(p);let M=1/(m.x*g.y-g.x*m.y);isFinite(M)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(M),d.copy(f).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(M),a[N].add(_),a[Z].add(_),a[b].add(_),l[N].add(d),l[Z].add(d),l[b].add(d))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let N=0,Z=y.length;N<Z;++N){let b=y[N],M=b.start,V=b.count;for(let J=M,L=M+V;J<L;J+=3)u(t.getX(J+0),t.getX(J+1),t.getX(J+2))}let v=new G,x=new G,R=new G,w=new G;function E(N){R.fromBufferAttribute(s,N),w.copy(R);let Z=a[N];v.copy(Z),v.sub(R.multiplyScalar(R.dot(Z))).normalize(),x.crossVectors(w,Z);let M=x.dot(l[N])<0?-1:1;o.setXYZW(N,v.x,v.y,v.z,M)}for(let N=0,Z=y.length;N<Z;++N){let b=y[N],M=b.start,V=b.count;for(let J=M,L=M+V;J<L;J+=3)E(t.getX(J+0)),E(t.getX(J+1)),E(t.getX(J+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);let s=new G,r=new G,o=new G,a=new G,l=new G,c=new G,h=new G,f=new G;if(t)for(let p=0,m=t.count;p<m;p+=3){let g=t.getX(p+0),_=t.getX(p+1),d=t.getX(p+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,d),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,d),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let p=0,m=e.count;p<m;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,p=new c.constructor(l.length*h),m=0,g=0;for(let _=0,d=l.length;_<d;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let u=0;u<h;u++)p[g++]=c[m++]}return new Qe(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let p=c[h],m=t(p,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,p=c.length;f<p;f++){let m=c[f];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let p=0,m=f.length;p<m;p++)h.push(f[p].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},rf=new de,is=new sr,Mo=new Nr,of=new G,So=new G,wo=new G,Eo=new G,gl=new G,To=new G,af=new G,Ao=new G,Gt=class extends tn{constructor(t=new Ee,e=new jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){To.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(gl.fromBufferAttribute(f,t),o?To.addScaledVector(gl,h):To.addScaledVector(gl.sub(e),h))}e.add(To)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Mo.copy(i.boundingSphere),Mo.applyMatrix4(r),is.copy(t.ray).recast(t.near),!(Mo.containsPoint(is.origin)===!1&&(is.intersectSphere(Mo,of)===null||is.origin.distanceToSquared(of)>(t.far-t.near)**2))&&(rf.copy(r).invert(),is.copy(t.ray).applyMatrix4(rf),!(i.boundingBox!==null&&is.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,is)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){let d=p[g],u=o[d.materialIndex],y=Math.max(d.start,m.start),v=Math.min(a.count,Math.min(d.start+d.count,m.start+m.count));for(let x=y,R=v;x<R;x+=3){let w=a.getX(x),E=a.getX(x+1),N=a.getX(x+2);s=Ro(this,u,t,i,c,h,f,w,E,N),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let d=g,u=_;d<u;d+=3){let y=a.getX(d),v=a.getX(d+1),x=a.getX(d+2);s=Ro(this,o,t,i,c,h,f,y,v,x),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){let d=p[g],u=o[d.materialIndex],y=Math.max(d.start,m.start),v=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let x=y,R=v;x<R;x+=3){let w=x,E=x+1,N=x+2;s=Ro(this,u,t,i,c,h,f,w,E,N),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let d=g,u=_;d<u;d+=3){let y=d,v=d+1,x=d+2;s=Ro(this,o,t,i,c,h,f,y,v,x),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}};Me=class n extends Ee{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],p=0,m=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(f,2));function g(_,d,u,y,v,x,R,w,E,N,Z){let b=x/E,M=R/N,V=x/2,J=R/2,L=w/2,O=E+1,T=N+1,H=0,z=0,et=new G;for(let D=0;D<T;D++){let U=D*M-J;for(let Y=0;Y<O;Y++){let B=Y*b-V;et[_]=B*y,et[d]=U*v,et[u]=L,c.push(et.x,et.y,et.z),et[_]=0,et[d]=0,et[u]=w>0?1:-1,h.push(et.x,et.y,et.z),f.push(Y/E),f.push(1-D/N),H+=1}}for(let D=0;D<N;D++)for(let U=0;U<E;U++){let Y=p+U+O*D,B=p+U+O*(D+1),I=p+(U+1)+O*(D+1),k=p+(U+1)+O*D;l.push(Y,B,k),l.push(B,I,k),z+=6}a.addGroup(m,z,Z),m+=z,p+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};H0={clone:rr,merge:on},G0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,V0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qn=class extends yi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=G0,this.fragmentShader=V0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rr(t.uniforms),this.uniformsGroups=z0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},na=class extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=pi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Bi=new G,lf=new dt,cf=new dt,We=class extends na{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ur*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ar*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ur*2*Math.atan(Math.tan(Ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bi.x,Bi.y).multiplyScalar(-t/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bi.x,Bi.y).multiplyScalar(-t/Bi.z)}getViewSize(t,e){return this.getViewBounds(t,lf,cf),e.subVectors(cf,lf)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ar*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},zs=-90,Hs=1,xc=class extends tn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new We(zs,Hs,t,e);s.layers=this.layers,this.add(s);let r=new We(zs,Hs,t,e);r.layers=this.layers,this.add(r);let o=new We(zs,Hs,t,e);o.layers=this.layers,this.add(o);let a=new We(zs,Hs,t,e);a.layers=this.layers,this.add(a);let l=new We(zs,Hs,t,e);l.layers=this.layers,this.add(l);let c=new We(zs,Hs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===pi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ko)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(f,p,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ia=class extends bn{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Qs,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},vc=class extends _i{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ia(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Gn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Me(5,5,5),r=new Qn({name:"CubemapFromEquirect",uniforms:rr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Fe,blending:Gi});r.uniforms.tEquirect.value=e;let o=new Gt(s,r),a=e.minFilter;return e.minFilter===fs&&(e.minFilter=Gn),new xc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},_l=new G,W0=new G,X0=new jt,Hn=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=_l.subVectors(i,e).cross(W0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(_l),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||X0.getNormalMatrix(t),s=this.coplanarPoint(_l).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ss=new Nr,Co=new G,kr=class{constructor(t=new Hn,e=new Hn,i=new Hn,s=new Hn,r=new Hn,o=new Hn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=pi){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],p=s[7],m=s[8],g=s[9],_=s[10],d=s[11],u=s[12],y=s[13],v=s[14],x=s[15];if(i[0].setComponents(l-r,p-c,d-m,x-u).normalize(),i[1].setComponents(l+r,p+c,d+m,x+u).normalize(),i[2].setComponents(l+o,p+h,d+g,x+y).normalize(),i[3].setComponents(l-o,p-h,d-g,x-y).normalize(),i[4].setComponents(l-a,p-f,d-_,x-v).normalize(),e===pi)i[5].setComponents(l+a,p+f,d+_,x+v).normalize();else if(e===Ko)i[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(t){return ss.center.set(0,0,0),ss.radius=.7071067811865476,ss.applyMatrix4(t.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Co.x=s.normal.x>0?t.max.x:t.min.x,Co.y=s.normal.y>0?t.max.y:t.min.y,Co.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Co)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};xi=class n extends Ee{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,f=t/a,p=e/l,m=[],g=[],_=[],d=[];for(let u=0;u<h;u++){let y=u*p-o;for(let v=0;v<c;v++){let x=v*f-r;g.push(x,-y,0),_.push(0,0,1),d.push(v/a),d.push(1-u/l)}}for(let u=0;u<l;u++)for(let y=0;y<a;y++){let v=y+c*u,x=y+c*(u+1),R=y+1+c*(u+1),w=y+1+c*u;m.push(v,x,w),m.push(x,R,w)}this.setIndex(m),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(_,3)),this.setAttribute("uv",new Xt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},q0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Z0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,K0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,J0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,j0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Q0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ep=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,np=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ip=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,op=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ap=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,gp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_p=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sp="gl_FragColor = linearToOutputTexel( gl_FragColor );",wp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ep=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Tp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ap=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Rp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ip=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Up=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Np=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Op=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Bp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$p=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,em=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,im=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,om=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,am=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,cm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_m=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ym=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Mm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Em=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Am=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Cm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Pm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Im=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Lm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Um=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,km=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ym=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$m=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Qm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,eg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ig=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,og=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ag=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ug=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_g=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Eg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:q0,alphahash_pars_fragment:Z0,alphamap_fragment:$0,alphamap_pars_fragment:K0,alphatest_fragment:J0,alphatest_pars_fragment:j0,aomap_fragment:Q0,aomap_pars_fragment:tp,batching_pars_vertex:ep,batching_vertex:np,begin_vertex:ip,beginnormal_vertex:sp,bsdfs:rp,iridescence_fragment:op,bumpmap_pars_fragment:ap,clipping_planes_fragment:lp,clipping_planes_pars_fragment:cp,clipping_planes_pars_vertex:hp,clipping_planes_vertex:fp,color_fragment:up,color_pars_fragment:dp,color_pars_vertex:pp,color_vertex:mp,common:gp,cube_uv_reflection_fragment:_p,defaultnormal_vertex:yp,displacementmap_pars_vertex:xp,displacementmap_vertex:vp,emissivemap_fragment:bp,emissivemap_pars_fragment:Mp,colorspace_fragment:Sp,colorspace_pars_fragment:wp,envmap_fragment:Ep,envmap_common_pars_fragment:Tp,envmap_pars_fragment:Ap,envmap_pars_vertex:Rp,envmap_physical_pars_fragment:Bp,envmap_vertex:Cp,fog_vertex:Pp,fog_pars_vertex:Ip,fog_fragment:Lp,fog_pars_fragment:Dp,gradientmap_pars_fragment:Up,lightmap_pars_fragment:Np,lights_lambert_fragment:Op,lights_lambert_pars_fragment:kp,lights_pars_begin:Fp,lights_toon_fragment:zp,lights_toon_pars_fragment:Hp,lights_phong_fragment:Gp,lights_phong_pars_fragment:Vp,lights_physical_fragment:Wp,lights_physical_pars_fragment:Xp,lights_fragment_begin:Yp,lights_fragment_maps:qp,lights_fragment_end:Zp,logdepthbuf_fragment:$p,logdepthbuf_pars_fragment:Kp,logdepthbuf_pars_vertex:Jp,logdepthbuf_vertex:jp,map_fragment:Qp,map_pars_fragment:tm,map_particle_fragment:em,map_particle_pars_fragment:nm,metalnessmap_fragment:im,metalnessmap_pars_fragment:sm,morphinstance_vertex:rm,morphcolor_vertex:om,morphnormal_vertex:am,morphtarget_pars_vertex:lm,morphtarget_vertex:cm,normal_fragment_begin:hm,normal_fragment_maps:fm,normal_pars_fragment:um,normal_pars_vertex:dm,normal_vertex:pm,normalmap_pars_fragment:mm,clearcoat_normal_fragment_begin:gm,clearcoat_normal_fragment_maps:_m,clearcoat_pars_fragment:ym,iridescence_pars_fragment:xm,opaque_fragment:vm,packing:bm,premultiplied_alpha_fragment:Mm,project_vertex:Sm,dithering_fragment:wm,dithering_pars_fragment:Em,roughnessmap_fragment:Tm,roughnessmap_pars_fragment:Am,shadowmap_pars_fragment:Rm,shadowmap_pars_vertex:Cm,shadowmap_vertex:Pm,shadowmask_pars_fragment:Im,skinbase_vertex:Lm,skinning_pars_vertex:Dm,skinning_vertex:Um,skinnormal_vertex:Nm,specularmap_fragment:Om,specularmap_pars_fragment:km,tonemapping_fragment:Fm,tonemapping_pars_fragment:Bm,transmission_fragment:zm,transmission_pars_fragment:Hm,uv_pars_fragment:Gm,uv_pars_vertex:Vm,uv_vertex:Wm,worldpos_vertex:Xm,background_vert:Ym,background_frag:qm,backgroundCube_vert:Zm,backgroundCube_frag:$m,cube_vert:Km,cube_frag:Jm,depth_vert:jm,depth_frag:Qm,distanceRGBA_vert:tg,distanceRGBA_frag:eg,equirect_vert:ng,equirect_frag:ig,linedashed_vert:sg,linedashed_frag:rg,meshbasic_vert:og,meshbasic_frag:ag,meshlambert_vert:lg,meshlambert_frag:cg,meshmatcap_vert:hg,meshmatcap_frag:fg,meshnormal_vert:ug,meshnormal_frag:dg,meshphong_vert:pg,meshphong_frag:mg,meshphysical_vert:gg,meshphysical_frag:_g,meshtoon_vert:yg,meshtoon_frag:xg,points_vert:vg,points_frag:bg,shadow_vert:Mg,shadow_frag:Sg,sprite_vert:wg,sprite_frag:Eg},Et={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Kn={basic:{uniforms:on([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:on([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Wt(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:on([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:on([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:on([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new Wt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:on([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:on([Et.points,Et.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:on([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:on([Et.common,Et.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:on([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:on([Et.sprite,Et.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:on([Et.common,Et.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:on([Et.lights,Et.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Kn.physical={uniforms:on([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};Po={r:0,b:0,g:0},rs=new Pn,Tg=new de;sa=class extends na{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},qs=4,hf=[.125,.215,.35,.446,.526,.582],cs=20,yl=new sa,ff=new Wt,xl=null,vl=0,bl=0,Ml=!1,as=(1+Math.sqrt(5))/2,Gs=1/as,uf=[new G(-as,Gs,0),new G(as,Gs,0),new G(-Gs,0,as),new G(Gs,0,as),new G(0,as,-Gs),new G(0,as,Gs),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)],Yi=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){xl=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xl,vl,bl),this._renderer.xr.enabled=Ml,t.scissorTest=!1,Io(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qs||t.mapping===tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xl=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:$r,format:Wn,colorSpace:Zi,depthBuffer:!1},s=df(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=df(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dg(r)),this._blurMaterial=Ug(r,t,e)}return s}_compileMaterial(t){let e=new Gt(this._lodPlanes[0],t);this._renderer.compile(e,yl)}_sceneToCubeUV(t,e,i,s){let a=new We(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(ff),h.toneMapping=Wi,h.autoClear=!1;let m=new jn({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),g=new Gt(new Me,m),_=!1,d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,_=!0):(m.color.copy(ff),_=!0);for(let u=0;u<6;u++){let y=u%3;y===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):y===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));let v=this._cubeSize;Io(s,y*v,u>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=f,t.background=d}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Qs||t.mapping===tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=mf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Gt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Io(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,yl)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=uf[(s-r-1)%uf.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new Gt(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*cs-1),_=r/g,d=isFinite(r)?1+Math.floor(h*_):cs;d>cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${cs}`);let u=[],y=0;for(let E=0;E<cs;++E){let N=E/_,Z=Math.exp(-N*N/2);u.push(Z),E===0?y+=Z:E<d&&(y+=2*Z)}for(let E=0;E<u.length;E++)u[E]=u[E]/y;p.envMap.value=t.texture,p.samples.value=d,p.weights.value=u,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:v}=this;p.dTheta.value=g,p.mipInt.value=v-i;let x=this._sizeLods[s],R=3*x*(s>v-qs?s-v+qs:0),w=4*(this._cubeSize-x);Io(e,R,w,3*x,2*x),l.setRenderTarget(e),l.render(f,yl)}};ra=class extends bn{constructor(t,e,i,s,r,o,a,l,c,h=$s){if(h!==$s&&h!==ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===$s&&(i=us),i===void 0&&h===ir&&(i=nr),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Cn,this.minFilter=l!==void 0?l:Cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},fu=new bn,gf=new ra(1,1),uu=new Qo,du=new yc,pu=new ia,_f=[],yf=[],xf=new Float32Array(16),vf=new Float32Array(9),bf=new Float32Array(4);bc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=a_(e.type)}},Mc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=A_(e.type)}},Sc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Sl=/(\w+)(\])?(\[|\.)?/g;Js=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);R_(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};C_=37297,P_=0;Lo=new G;B_=/^[ \t]*#include +<([\w\d./]+)>/gm;z_=new Map;G_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;K_=0,Ec=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Tc(t),e.set(t,i)),i}},Tc=class{constructor(t){this.id=K_++,this.code=t,this.usedTimes=0}};iy=0;Ac=class extends yi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Rc=class extends yi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},ay=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ly=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;hy={[Ll]:Dl,[Ul]:kl,[Nl]:Fl,[js]:Ol,[Dl]:Ll,[kl]:Ul,[Fl]:Nl,[Ol]:js};Cc=class extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},le=class extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},my={type:"move"},Cr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let d=e.getJointPose(_,i),u=this._getHandJoint(c,_);d!==null&&(u.matrix.fromArray(d.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=d.radius),u.visible=d!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=h.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&p>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(my)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new le;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},gy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_y=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Pc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new bn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Qn({vertexShader:gy,fragmentShader:_y,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Gt(new xi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ic=class extends gi{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,p=null,m=null,g=null,_=new Pc,d=e.getContextAttributes(),u=null,y=null,v=[],x=[],R=new dt,w=null,E=new We;E.layers.enable(1),E.viewport=new _e;let N=new We;N.layers.enable(2),N.viewport=new _e;let Z=[E,N],b=new Cc;b.layers.enable(1),b.layers.enable(2);let M=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let k=v[I];return k===void 0&&(k=new Cr,v[I]=k),k.getTargetRaySpace()},this.getControllerGrip=function(I){let k=v[I];return k===void 0&&(k=new Cr,v[I]=k),k.getGripSpace()},this.getHand=function(I){let k=v[I];return k===void 0&&(k=new Cr,v[I]=k),k.getHandSpace()};function J(I){let k=x.indexOf(I.inputSource);if(k===-1)return;let q=v[k];q!==void 0&&(q.update(I.inputSource,I.frame,c||o),q.dispatchEvent({type:I.type,data:I.inputSource}))}function L(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",O);for(let I=0;I<v.length;I++){let k=x[I];k!==null&&(x[I]=null,v[I].disconnect(k))}M=null,V=null,_.reset(),t.setRenderTarget(u),m=null,p=null,f=null,s=null,y=null,B.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){r=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(I){c=I},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(I){if(s=I,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",L),s.addEventListener("inputsourceschange",O),d.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){let k={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,k),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new _i(m.framebufferWidth,m.framebufferHeight,{format:Wn,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let k=null,q=null,W=null;d.depth&&(W=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,k=d.stencil?ir:$s,q=d.stencil?nr:us);let Q={colorFormat:e.RGBA8,depthFormat:W,scaleFactor:r};f=new XRWebGLBinding(s,e),p=f.createProjectionLayer(Q),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),y=new _i(p.textureWidth,p.textureHeight,{format:Wn,type:mi,depthTexture:new ra(p.textureWidth,p.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),B.setContext(s),B.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function O(I){for(let k=0;k<I.removed.length;k++){let q=I.removed[k],W=x.indexOf(q);W>=0&&(x[W]=null,v[W].disconnect(q))}for(let k=0;k<I.added.length;k++){let q=I.added[k],W=x.indexOf(q);if(W===-1){for(let it=0;it<v.length;it++)if(it>=x.length){x.push(q),W=it;break}else if(x[it]===null){x[it]=q,W=it;break}if(W===-1)break}let Q=v[W];Q&&Q.connect(q)}}let T=new G,H=new G;function z(I,k,q){T.setFromMatrixPosition(k.matrixWorld),H.setFromMatrixPosition(q.matrixWorld);let W=T.distanceTo(H),Q=k.projectionMatrix.elements,it=q.projectionMatrix.elements,rt=Q[14]/(Q[10]-1),st=Q[14]/(Q[10]+1),$=(Q[9]+1)/Q[5],A=(Q[9]-1)/Q[5],lt=(Q[8]-1)/Q[0],ft=(it[8]+1)/it[0],ht=rt*lt,yt=rt*ft,xt=W/(-lt+ft),mt=xt*-lt;if(k.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(mt),I.translateZ(xt),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert(),Q[10]===-1)I.projectionMatrix.copy(k.projectionMatrix),I.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{let P=rt+xt,S=st+xt,nt=ht-mt,ut=yt+(W-mt),gt=$*st/S*P,pt=A*st/S*P;I.projectionMatrix.makePerspective(nt,ut,gt,pt,P,S),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}}function et(I,k){k===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(k.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(s===null)return;let k=I.near,q=I.far;_.texture!==null&&(_.depthNear>0&&(k=_.depthNear),_.depthFar>0&&(q=_.depthFar)),b.near=N.near=E.near=k,b.far=N.far=E.far=q,(M!==b.near||V!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),M=b.near,V=b.far);let W=I.parent,Q=b.cameras;et(b,W);for(let it=0;it<Q.length;it++)et(Q[it],W);Q.length===2?z(b,E,N):b.projectionMatrix.copy(E.projectionMatrix),D(I,b,W)};function D(I,k,q){q===null?I.matrix.copy(k.matrixWorld):(I.matrix.copy(q.matrixWorld),I.matrix.invert(),I.matrix.multiply(k.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(k.projectionMatrix),I.projectionMatrixInverse.copy(k.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=Ur*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(I){l=I,p!==null&&(p.fixedFoveation=I),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=I)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let U=null;function Y(I,k){if(h=k.getViewerPose(c||o),g=k,h!==null){let q=h.views;m!==null&&(t.setRenderTargetFramebuffer(y,m.framebuffer),t.setRenderTarget(y));let W=!1;q.length!==b.cameras.length&&(b.cameras.length=0,W=!0);for(let it=0;it<q.length;it++){let rt=q[it],st=null;if(m!==null)st=m.getViewport(rt);else{let A=f.getViewSubImage(p,rt);st=A.viewport,it===0&&(t.setRenderTargetTextures(y,A.colorTexture,p.ignoreDepthValues?void 0:A.depthStencilTexture),t.setRenderTarget(y))}let $=Z[it];$===void 0&&($=new We,$.layers.enable(it),$.viewport=new _e,Z[it]=$),$.matrix.fromArray(rt.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(rt.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(st.x,st.y,st.width,st.height),it===0&&(b.matrix.copy($.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),W===!0&&b.cameras.push($)}let Q=s.enabledFeatures;if(Q&&Q.includes("depth-sensing")){let it=f.getDepthInformation(q[0]);it&&it.isValid&&it.texture&&_.init(t,it,s.renderState)}}for(let q=0;q<v.length;q++){let W=x[q],Q=v[q];W!==null&&Q!==void 0&&Q.update(W,k,c||o)}U&&U(I,k),k.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:k}),g=null}let B=new hu;B.setAnimationLoop(Y),this.setAnimationLoop=function(I){U=I},this.dispose=function(){}}},os=new Pn,yy=new de;or=class{constructor(t={}){let{canvas:e=S0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let m=new Uint32Array(4),g=new Int32Array(4),_=null,d=null,u=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ze,this.toneMapping=Wi,this.toneMappingExposure=1;let v=this,x=!1,R=0,w=0,E=null,N=-1,Z=null,b=new _e,M=new _e,V=null,J=new Wt(0),L=0,O=e.width,T=e.height,H=1,z=null,et=null,D=new _e(0,0,O,T),U=new _e(0,0,O,T),Y=!1,B=new kr,I=!1,k=!1,q=new de,W=new de,Q=new G,it=new _e,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},st=!1;function $(){return E===null?H:1}let A=i;function lt(C,j){return e.getContext(C,j)}try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r169"),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",Pt,!1),A===null){let j="webgl2";if(A=lt(j,C),A===null)throw lt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ft,ht,yt,xt,mt,P,S,nt,ut,gt,pt,Ot,wt,It,se,bt,Lt,$t,Kt,Ut,re,Jt,be,K;function Ct(){ft=new Og(A),ft.init(),Jt=new py(A,ft),ht=new Pg(A,ft,t,Jt),yt=new fy(A),ht.reverseDepthBuffer&&yt.buffers.depth.setReversed(!0),xt=new Bg(A),mt=new j_,P=new dy(A,ft,yt,mt,ht,Jt,xt),S=new Lg(v),nt=new Ng(v),ut=new Y0(A),be=new Rg(A,ut),gt=new kg(A,ut,xt,be),pt=new Hg(A,gt,ut,xt),Kt=new zg(A,ht,P),bt=new Ig(mt),Ot=new J_(v,S,nt,ft,ht,be,bt),wt=new xy(v,mt),It=new ty,se=new oy(ft),$t=new Ag(v,S,nt,yt,pt,p,l),Lt=new cy(v,pt,ht),K=new vy(A,xt,ht,yt),Ut=new Cg(A,ft,xt),re=new Fg(A,ft,xt),xt.programs=Ot.programs,v.capabilities=ht,v.extensions=ft,v.properties=mt,v.renderLists=It,v.shadowMap=Lt,v.state=yt,v.info=xt}Ct();let ct=new Ic(v,A);this.xr=ct,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let C=ft.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=ft.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(C){C!==void 0&&(H=C,this.setSize(O,T,!1))},this.getSize=function(C){return C.set(O,T)},this.setSize=function(C,j,ot=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,T=j,e.width=Math.floor(C*H),e.height=Math.floor(j*H),ot===!0&&(e.style.width=C+"px",e.style.height=j+"px"),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(O*H,T*H).floor()},this.setDrawingBufferSize=function(C,j,ot){O=C,T=j,H=ot,e.width=Math.floor(C*ot),e.height=Math.floor(j*ot),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(b)},this.getViewport=function(C){return C.copy(D)},this.setViewport=function(C,j,ot,at){C.isVector4?D.set(C.x,C.y,C.z,C.w):D.set(C,j,ot,at),yt.viewport(b.copy(D).multiplyScalar(H).round())},this.getScissor=function(C){return C.copy(U)},this.setScissor=function(C,j,ot,at){C.isVector4?U.set(C.x,C.y,C.z,C.w):U.set(C,j,ot,at),yt.scissor(M.copy(U).multiplyScalar(H).round())},this.getScissorTest=function(){return Y},this.setScissorTest=function(C){yt.setScissorTest(Y=C)},this.setOpaqueSort=function(C){z=C},this.setTransparentSort=function(C){et=C},this.getClearColor=function(C){return C.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor.apply($t,arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha.apply($t,arguments)},this.clear=function(C=!0,j=!0,ot=!0){let at=0;if(C){let tt=!1;if(E!==null){let St=E.texture.format;tt=St===rh||St===sh||St===ih}if(tt){let St=E.texture.type,At=St===mi||St===us||St===Dr||St===nr||St===eh||St===nh,kt=$t.getClearColor(),Ft=$t.getClearAlpha(),Yt=kt.r,qt=kt.g,Bt=kt.b;At?(m[0]=Yt,m[1]=qt,m[2]=Bt,m[3]=Ft,A.clearBufferuiv(A.COLOR,0,m)):(g[0]=Yt,g[1]=qt,g[2]=Bt,g[3]=Ft,A.clearBufferiv(A.COLOR,0,g))}else at|=A.COLOR_BUFFER_BIT}j&&(at|=A.DEPTH_BUFFER_BIT,A.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),ot&&(at|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",Pt,!1),It.dispose(),se.dispose(),mt.dispose(),S.dispose(),nt.dispose(),pt.dispose(),be.dispose(),K.dispose(),Ot.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Ch),ct.removeEventListener("sessionend",Ph),ts.stop()};function _t(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;let C=xt.autoReset,j=Lt.enabled,ot=Lt.autoUpdate,at=Lt.needsUpdate,tt=Lt.type;Ct(),xt.autoReset=C,Lt.enabled=j,Lt.autoUpdate=ot,Lt.needsUpdate=at,Lt.type=tt}function Pt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function oe(C){let j=C.target;j.removeEventListener("dispose",oe),De(j)}function De(C){un(C),mt.remove(C)}function un(C){let j=mt.get(C).programs;j!==void 0&&(j.forEach(function(ot){Ot.releaseProgram(ot)}),C.isShaderMaterial&&Ot.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,ot,at,tt,St){j===null&&(j=rt);let At=tt.isMesh&&tt.matrixWorld.determinant()<0,kt=_d(C,j,ot,at,tt);yt.setMaterial(at,At);let Ft=ot.index,Yt=1;if(at.wireframe===!0){if(Ft=gt.getWireframeAttribute(ot),Ft===void 0)return;Yt=2}let qt=ot.drawRange,Bt=ot.attributes.position,me=qt.start*Yt,Se=(qt.start+qt.count)*Yt;St!==null&&(me=Math.max(me,St.start*Yt),Se=Math.min(Se,(St.start+St.count)*Yt)),Ft!==null?(me=Math.max(me,0),Se=Math.min(Se,Ft.count)):Bt!=null&&(me=Math.max(me,0),Se=Math.min(Se,Bt.count));let Pe=Se-me;if(Pe<0||Pe===1/0)return;be.setup(tt,at,kt,ot,Ft);let mn,he=Ut;if(Ft!==null&&(mn=ut.get(Ft),he=re,he.setIndex(mn)),tt.isMesh)at.wireframe===!0?(yt.setLineWidth(at.wireframeLinewidth*$()),he.setMode(A.LINES)):he.setMode(A.TRIANGLES);else if(tt.isLine){let zt=at.linewidth;zt===void 0&&(zt=1),yt.setLineWidth(zt*$()),tt.isLineSegments?he.setMode(A.LINES):tt.isLineLoop?he.setMode(A.LINE_LOOP):he.setMode(A.LINE_STRIP)}else tt.isPoints?he.setMode(A.POINTS):tt.isSprite&&he.setMode(A.TRIANGLES);if(tt.isBatchedMesh)if(tt._multiDrawInstances!==null)he.renderMultiDrawInstances(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount,tt._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))he.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{let zt=tt._multiDrawStarts,qe=tt._multiDrawCounts,fe=tt._multiDrawCount,kn=Ft?ut.get(Ft).bytesPerElement:1,Rs=mt.get(at).currentProgram.getUniforms();for(let gn=0;gn<fe;gn++)Rs.setValue(A,"_gl_DrawID",gn),he.render(zt[gn]/kn,qe[gn])}else if(tt.isInstancedMesh)he.renderInstances(me,Pe,tt.count);else if(ot.isInstancedBufferGeometry){let zt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,qe=Math.min(ot.instanceCount,zt);he.renderInstances(me,Pe,qe)}else he.render(me,Pe)};function ce(C,j,ot){C.transparent===!0&&C.side===ae&&C.forceSinglePass===!1?(C.side=Fe,C.needsUpdate=!0,ho(C,j,ot),C.side=vn,C.needsUpdate=!0,ho(C,j,ot),C.side=ae):ho(C,j,ot)}this.compile=function(C,j,ot=null){ot===null&&(ot=C),d=se.get(ot),d.init(j),y.push(d),ot.traverseVisible(function(tt){tt.isLight&&tt.layers.test(j.layers)&&(d.pushLight(tt),tt.castShadow&&d.pushShadow(tt))}),C!==ot&&C.traverseVisible(function(tt){tt.isLight&&tt.layers.test(j.layers)&&(d.pushLight(tt),tt.castShadow&&d.pushShadow(tt))}),d.setupLights();let at=new Set;return C.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;let St=tt.material;if(St)if(Array.isArray(St))for(let At=0;At<St.length;At++){let kt=St[At];ce(kt,ot,tt),at.add(kt)}else ce(St,ot,tt),at.add(St)}),y.pop(),d=null,at},this.compileAsync=function(C,j,ot=null){let at=this.compile(C,j,ot);return new Promise(tt=>{function St(){if(at.forEach(function(At){mt.get(At).currentProgram.isReady()&&at.delete(At)}),at.size===0){tt(C);return}setTimeout(St,10)}ft.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let dn=null;function oi(C){dn&&dn(C)}function Ch(){ts.stop()}function Ph(){ts.start()}let ts=new hu;ts.setAnimationLoop(oi),typeof self<"u"&&ts.setContext(self),this.setAnimationLoop=function(C){dn=C,ct.setAnimationLoop(C),C===null?ts.stop():ts.start()},ct.addEventListener("sessionstart",Ch),ct.addEventListener("sessionend",Ph),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(j),j=ct.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,j,E),d=se.get(C,y.length),d.init(j),y.push(d),W.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),B.setFromProjectionMatrix(W),k=this.localClippingEnabled,I=bt.init(this.clippingPlanes,k),_=It.get(C,u.length),_.init(),u.push(_),ct.enabled===!0&&ct.isPresenting===!0){let St=v.xr.getDepthSensingMesh();St!==null&&Xa(St,j,-1/0,v.sortObjects)}Xa(C,j,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(z,et),st=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,st&&$t.addToRenderList(_,C),this.info.render.frame++,I===!0&&bt.beginShadows();let ot=d.state.shadowsArray;Lt.render(ot,C,j),I===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();let at=_.opaque,tt=_.transmissive;if(d.setupLights(),j.isArrayCamera){let St=j.cameras;if(tt.length>0)for(let At=0,kt=St.length;At<kt;At++){let Ft=St[At];Lh(at,tt,C,Ft)}st&&$t.render(C);for(let At=0,kt=St.length;At<kt;At++){let Ft=St[At];Ih(_,C,Ft,Ft.viewport)}}else tt.length>0&&Lh(at,tt,C,j),st&&$t.render(C),Ih(_,C,j);E!==null&&(P.updateMultisampleRenderTarget(E),P.updateRenderTargetMipmap(E)),C.isScene===!0&&C.onAfterRender(v,C,j),be.resetDefaultState(),N=-1,Z=null,y.pop(),y.length>0?(d=y[y.length-1],I===!0&&bt.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function Xa(C,j,ot,at){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)ot=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)d.pushLight(C),C.castShadow&&d.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||B.intersectsSprite(C)){at&&it.setFromMatrixPosition(C.matrixWorld).applyMatrix4(W);let At=pt.update(C),kt=C.material;kt.visible&&_.push(C,At,kt,ot,it.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||B.intersectsObject(C))){let At=pt.update(C),kt=C.material;if(at&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),it.copy(C.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),it.copy(At.boundingSphere.center)),it.applyMatrix4(C.matrixWorld).applyMatrix4(W)),Array.isArray(kt)){let Ft=At.groups;for(let Yt=0,qt=Ft.length;Yt<qt;Yt++){let Bt=Ft[Yt],me=kt[Bt.materialIndex];me&&me.visible&&_.push(C,At,me,ot,it.z,Bt)}}else kt.visible&&_.push(C,At,kt,ot,it.z,null)}}let St=C.children;for(let At=0,kt=St.length;At<kt;At++)Xa(St[At],j,ot,at)}function Ih(C,j,ot,at){let tt=C.opaque,St=C.transmissive,At=C.transparent;d.setupLightsView(ot),I===!0&&bt.setGlobalState(v.clippingPlanes,ot),at&&yt.viewport(b.copy(at)),tt.length>0&&co(tt,j,ot),St.length>0&&co(St,j,ot),At.length>0&&co(At,j,ot),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function Lh(C,j,ot,at){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[at.id]===void 0&&(d.state.transmissionRenderTarget[at.id]=new _i(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?$r:mi,minFilter:fs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace}));let St=d.state.transmissionRenderTarget[at.id],At=at.viewport||b;St.setSize(At.z,At.w);let kt=v.getRenderTarget();v.setRenderTarget(St),v.getClearColor(J),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear(),st&&$t.render(ot);let Ft=v.toneMapping;v.toneMapping=Wi;let Yt=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),d.setupLightsView(at),I===!0&&bt.setGlobalState(v.clippingPlanes,at),co(C,ot,at),P.updateMultisampleRenderTarget(St),P.updateRenderTargetMipmap(St),ft.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Bt=0,me=j.length;Bt<me;Bt++){let Se=j[Bt],Pe=Se.object,mn=Se.geometry,he=Se.material,zt=Se.group;if(he.side===ae&&Pe.layers.test(at.layers)){let qe=he.side;he.side=Fe,he.needsUpdate=!0,Dh(Pe,ot,at,mn,he,zt),he.side=qe,he.needsUpdate=!0,qt=!0}}qt===!0&&(P.updateMultisampleRenderTarget(St),P.updateRenderTargetMipmap(St))}v.setRenderTarget(kt),v.setClearColor(J,L),Yt!==void 0&&(at.viewport=Yt),v.toneMapping=Ft}function co(C,j,ot){let at=j.isScene===!0?j.overrideMaterial:null;for(let tt=0,St=C.length;tt<St;tt++){let At=C[tt],kt=At.object,Ft=At.geometry,Yt=at===null?At.material:at,qt=At.group;kt.layers.test(ot.layers)&&Dh(kt,j,ot,Ft,Yt,qt)}}function Dh(C,j,ot,at,tt,St){C.onBeforeRender(v,j,ot,at,tt,St),C.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),tt.onBeforeRender(v,j,ot,at,C,St),tt.transparent===!0&&tt.side===ae&&tt.forceSinglePass===!1?(tt.side=Fe,tt.needsUpdate=!0,v.renderBufferDirect(ot,j,at,tt,C,St),tt.side=vn,tt.needsUpdate=!0,v.renderBufferDirect(ot,j,at,tt,C,St),tt.side=ae):v.renderBufferDirect(ot,j,at,tt,C,St),C.onAfterRender(v,j,ot,at,tt,St)}function ho(C,j,ot){j.isScene!==!0&&(j=rt);let at=mt.get(C),tt=d.state.lights,St=d.state.shadowsArray,At=tt.state.version,kt=Ot.getParameters(C,tt.state,St,j,ot),Ft=Ot.getProgramCacheKey(kt),Yt=at.programs;at.environment=C.isMeshStandardMaterial?j.environment:null,at.fog=j.fog,at.envMap=(C.isMeshStandardMaterial?nt:S).get(C.envMap||at.environment),at.envMapRotation=at.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,Yt===void 0&&(C.addEventListener("dispose",oe),Yt=new Map,at.programs=Yt);let qt=Yt.get(Ft);if(qt!==void 0){if(at.currentProgram===qt&&at.lightsStateVersion===At)return Nh(C,kt),qt}else kt.uniforms=Ot.getUniforms(C),C.onBeforeCompile(kt,v),qt=Ot.acquireProgram(kt,Ft),Yt.set(Ft,qt),at.uniforms=kt.uniforms;let Bt=at.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Bt.clippingPlanes=bt.uniform),Nh(C,kt),at.needsLights=xd(C),at.lightsStateVersion=At,at.needsLights&&(Bt.ambientLightColor.value=tt.state.ambient,Bt.lightProbe.value=tt.state.probe,Bt.directionalLights.value=tt.state.directional,Bt.directionalLightShadows.value=tt.state.directionalShadow,Bt.spotLights.value=tt.state.spot,Bt.spotLightShadows.value=tt.state.spotShadow,Bt.rectAreaLights.value=tt.state.rectArea,Bt.ltc_1.value=tt.state.rectAreaLTC1,Bt.ltc_2.value=tt.state.rectAreaLTC2,Bt.pointLights.value=tt.state.point,Bt.pointLightShadows.value=tt.state.pointShadow,Bt.hemisphereLights.value=tt.state.hemi,Bt.directionalShadowMap.value=tt.state.directionalShadowMap,Bt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Bt.spotShadowMap.value=tt.state.spotShadowMap,Bt.spotLightMatrix.value=tt.state.spotLightMatrix,Bt.spotLightMap.value=tt.state.spotLightMap,Bt.pointShadowMap.value=tt.state.pointShadowMap,Bt.pointShadowMatrix.value=tt.state.pointShadowMatrix),at.currentProgram=qt,at.uniformsList=null,qt}function Uh(C){if(C.uniformsList===null){let j=C.currentProgram.getUniforms();C.uniformsList=Js.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function Nh(C,j){let ot=mt.get(C);ot.outputColorSpace=j.outputColorSpace,ot.batching=j.batching,ot.batchingColor=j.batchingColor,ot.instancing=j.instancing,ot.instancingColor=j.instancingColor,ot.instancingMorph=j.instancingMorph,ot.skinning=j.skinning,ot.morphTargets=j.morphTargets,ot.morphNormals=j.morphNormals,ot.morphColors=j.morphColors,ot.morphTargetsCount=j.morphTargetsCount,ot.numClippingPlanes=j.numClippingPlanes,ot.numIntersection=j.numClipIntersection,ot.vertexAlphas=j.vertexAlphas,ot.vertexTangents=j.vertexTangents,ot.toneMapping=j.toneMapping}function _d(C,j,ot,at,tt){j.isScene!==!0&&(j=rt),P.resetTextureUnits();let St=j.fog,At=at.isMeshStandardMaterial?j.environment:null,kt=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Zi,Ft=(at.isMeshStandardMaterial?nt:S).get(at.envMap||At),Yt=at.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,qt=!!ot.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Bt=!!ot.morphAttributes.position,me=!!ot.morphAttributes.normal,Se=!!ot.morphAttributes.color,Pe=Wi;at.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Pe=v.toneMapping);let mn=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,he=mn!==void 0?mn.length:0,zt=mt.get(at),qe=d.state.lights;if(I===!0&&(k===!0||C!==Z)){let An=C===Z&&at.id===N;bt.setState(at,C,An)}let fe=!1;at.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==qe.state.version||zt.outputColorSpace!==kt||tt.isBatchedMesh&&zt.batching===!1||!tt.isBatchedMesh&&zt.batching===!0||tt.isBatchedMesh&&zt.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&zt.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&zt.instancing===!1||!tt.isInstancedMesh&&zt.instancing===!0||tt.isSkinnedMesh&&zt.skinning===!1||!tt.isSkinnedMesh&&zt.skinning===!0||tt.isInstancedMesh&&zt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&zt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&zt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&zt.instancingMorph===!1&&tt.morphTexture!==null||zt.envMap!==Ft||at.fog===!0&&zt.fog!==St||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==bt.numPlanes||zt.numIntersection!==bt.numIntersection)||zt.vertexAlphas!==Yt||zt.vertexTangents!==qt||zt.morphTargets!==Bt||zt.morphNormals!==me||zt.morphColors!==Se||zt.toneMapping!==Pe||zt.morphTargetsCount!==he)&&(fe=!0):(fe=!0,zt.__version=at.version);let kn=zt.currentProgram;fe===!0&&(kn=ho(at,j,tt));let Rs=!1,gn=!1,Ya=!1,Le=kn.getUniforms(),Di=zt.uniforms;if(yt.useProgram(kn.program)&&(Rs=!0,gn=!0,Ya=!0),at.id!==N&&(N=at.id,gn=!0),Rs||Z!==C){ht.reverseDepthBuffer?(q.copy(C.projectionMatrix),E0(q),T0(q),Le.setValue(A,"projectionMatrix",q)):Le.setValue(A,"projectionMatrix",C.projectionMatrix),Le.setValue(A,"viewMatrix",C.matrixWorldInverse);let An=Le.map.cameraPosition;An!==void 0&&An.setValue(A,Q.setFromMatrixPosition(C.matrixWorld)),ht.logarithmicDepthBuffer&&Le.setValue(A,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Le.setValue(A,"isOrthographic",C.isOrthographicCamera===!0),Z!==C&&(Z=C,gn=!0,Ya=!0)}if(tt.isSkinnedMesh){Le.setOptional(A,tt,"bindMatrix"),Le.setOptional(A,tt,"bindMatrixInverse");let An=tt.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Le.setValue(A,"boneTexture",An.boneTexture,P))}tt.isBatchedMesh&&(Le.setOptional(A,tt,"batchingTexture"),Le.setValue(A,"batchingTexture",tt._matricesTexture,P),Le.setOptional(A,tt,"batchingIdTexture"),Le.setValue(A,"batchingIdTexture",tt._indirectTexture,P),Le.setOptional(A,tt,"batchingColorTexture"),tt._colorsTexture!==null&&Le.setValue(A,"batchingColorTexture",tt._colorsTexture,P));let qa=ot.morphAttributes;if((qa.position!==void 0||qa.normal!==void 0||qa.color!==void 0)&&Kt.update(tt,ot,kn),(gn||zt.receiveShadow!==tt.receiveShadow)&&(zt.receiveShadow=tt.receiveShadow,Le.setValue(A,"receiveShadow",tt.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(Di.envMap.value=Ft,Di.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&j.environment!==null&&(Di.envMapIntensity.value=j.environmentIntensity),gn&&(Le.setValue(A,"toneMappingExposure",v.toneMappingExposure),zt.needsLights&&yd(Di,Ya),St&&at.fog===!0&&wt.refreshFogUniforms(Di,St),wt.refreshMaterialUniforms(Di,at,H,T,d.state.transmissionRenderTarget[C.id]),Js.upload(A,Uh(zt),Di,P)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(Js.upload(A,Uh(zt),Di,P),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Le.setValue(A,"center",tt.center),Le.setValue(A,"modelViewMatrix",tt.modelViewMatrix),Le.setValue(A,"normalMatrix",tt.normalMatrix),Le.setValue(A,"modelMatrix",tt.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){let An=at.uniformsGroups;for(let Za=0,vd=An.length;Za<vd;Za++){let Oh=An[Za];K.update(Oh,kn),K.bind(Oh,kn)}}return kn}function yd(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function xd(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(C,j,ot){mt.get(C.texture).__webglTexture=j,mt.get(C.depthTexture).__webglTexture=ot;let at=mt.get(C);at.__hasExternalTextures=!0,at.__autoAllocateDepthBuffer=ot===void 0,at.__autoAllocateDepthBuffer||ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),at.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,j){let ot=mt.get(C);ot.__webglFramebuffer=j,ot.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(C,j=0,ot=0){E=C,R=j,w=ot;let at=!0,tt=null,St=!1,At=!1;if(C){let Ft=mt.get(C);if(Ft.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(A.FRAMEBUFFER,null),at=!1;else if(Ft.__webglFramebuffer===void 0)P.setupRenderTarget(C);else if(Ft.__hasExternalTextures)P.rebindTextures(C,mt.get(C.texture).__webglTexture,mt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Bt=C.depthTexture;if(Ft.__boundDepthTexture!==Bt){if(Bt!==null&&mt.has(Bt)&&(C.width!==Bt.image.width||C.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(C)}}let Yt=C.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(At=!0);let qt=mt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(qt[j])?tt=qt[j][ot]:tt=qt[j],St=!0):C.samples>0&&P.useMultisampledRTT(C)===!1?tt=mt.get(C).__webglMultisampledFramebuffer:Array.isArray(qt)?tt=qt[ot]:tt=qt,b.copy(C.viewport),M.copy(C.scissor),V=C.scissorTest}else b.copy(D).multiplyScalar(H).floor(),M.copy(U).multiplyScalar(H).floor(),V=Y;if(yt.bindFramebuffer(A.FRAMEBUFFER,tt)&&at&&yt.drawBuffers(C,tt),yt.viewport(b),yt.scissor(M),yt.setScissorTest(V),St){let Ft=mt.get(C.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ft.__webglTexture,ot)}else if(At){let Ft=mt.get(C.texture),Yt=j||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ft.__webglTexture,ot||0,Yt)}N=-1},this.readRenderTargetPixels=function(C,j,ot,at,tt,St,At){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=mt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&At!==void 0&&(kt=kt[At]),kt){yt.bindFramebuffer(A.FRAMEBUFFER,kt);try{let Ft=C.texture,Yt=Ft.format,qt=Ft.type;if(!ht.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-at&&ot>=0&&ot<=C.height-tt&&A.readPixels(j,ot,at,tt,Jt.convert(Yt),Jt.convert(qt),St)}finally{let Ft=E!==null?mt.get(E).__webglFramebuffer:null;yt.bindFramebuffer(A.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(C,j,ot,at,tt,St,At){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=mt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&At!==void 0&&(kt=kt[At]),kt){let Ft=C.texture,Yt=Ft.format,qt=Ft.type;if(!ht.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=C.width-at&&ot>=0&&ot<=C.height-tt){yt.bindFramebuffer(A.FRAMEBUFFER,kt);let Bt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Bt),A.bufferData(A.PIXEL_PACK_BUFFER,St.byteLength,A.STREAM_READ),A.readPixels(j,ot,at,tt,Jt.convert(Yt),Jt.convert(qt),0);let me=E!==null?mt.get(E).__webglFramebuffer:null;yt.bindFramebuffer(A.FRAMEBUFFER,me);let Se=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await w0(A,Se,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Bt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,St),A.deleteBuffer(Bt),A.deleteSync(Se),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,j=null,ot=0){C.isTexture!==!0&&(Xo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,C=arguments[1]);let at=Math.pow(2,-ot),tt=Math.floor(C.image.width*at),St=Math.floor(C.image.height*at),At=j!==null?j.x:0,kt=j!==null?j.y:0;P.setTexture2D(C,0),A.copyTexSubImage2D(A.TEXTURE_2D,ot,0,0,At,kt,tt,St),yt.unbindTexture()},this.copyTextureToTexture=function(C,j,ot=null,at=null,tt=0){C.isTexture!==!0&&(Xo("WebGLRenderer: copyTextureToTexture function signature has changed."),at=arguments[0]||null,C=arguments[1],j=arguments[2],tt=arguments[3]||0,ot=null);let St,At,kt,Ft,Yt,qt;ot!==null?(St=ot.max.x-ot.min.x,At=ot.max.y-ot.min.y,kt=ot.min.x,Ft=ot.min.y):(St=C.image.width,At=C.image.height,kt=0,Ft=0),at!==null?(Yt=at.x,qt=at.y):(Yt=0,qt=0);let Bt=Jt.convert(j.format),me=Jt.convert(j.type);P.setTexture2D(j,0),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,j.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,j.unpackAlignment);let Se=A.getParameter(A.UNPACK_ROW_LENGTH),Pe=A.getParameter(A.UNPACK_IMAGE_HEIGHT),mn=A.getParameter(A.UNPACK_SKIP_PIXELS),he=A.getParameter(A.UNPACK_SKIP_ROWS),zt=A.getParameter(A.UNPACK_SKIP_IMAGES),qe=C.isCompressedTexture?C.mipmaps[tt]:C.image;A.pixelStorei(A.UNPACK_ROW_LENGTH,qe.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,qe.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,kt),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ft),C.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,tt,Yt,qt,St,At,Bt,me,qe.data):C.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,tt,Yt,qt,qe.width,qe.height,Bt,qe.data):A.texSubImage2D(A.TEXTURE_2D,tt,Yt,qt,St,At,Bt,me,qe),A.pixelStorei(A.UNPACK_ROW_LENGTH,Se),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Pe),A.pixelStorei(A.UNPACK_SKIP_PIXELS,mn),A.pixelStorei(A.UNPACK_SKIP_ROWS,he),A.pixelStorei(A.UNPACK_SKIP_IMAGES,zt),tt===0&&j.generateMipmaps&&A.generateMipmap(A.TEXTURE_2D),yt.unbindTexture()},this.copyTextureToTexture3D=function(C,j,ot=null,at=null,tt=0){C.isTexture!==!0&&(Xo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ot=arguments[0]||null,at=arguments[1]||null,C=arguments[2],j=arguments[3],tt=arguments[4]||0);let St,At,kt,Ft,Yt,qt,Bt,me,Se,Pe=C.isCompressedTexture?C.mipmaps[tt]:C.image;ot!==null?(St=ot.max.x-ot.min.x,At=ot.max.y-ot.min.y,kt=ot.max.z-ot.min.z,Ft=ot.min.x,Yt=ot.min.y,qt=ot.min.z):(St=Pe.width,At=Pe.height,kt=Pe.depth,Ft=0,Yt=0,qt=0),at!==null?(Bt=at.x,me=at.y,Se=at.z):(Bt=0,me=0,Se=0);let mn=Jt.convert(j.format),he=Jt.convert(j.type),zt;if(j.isData3DTexture)P.setTexture3D(j,0),zt=A.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)P.setTexture2DArray(j,0),zt=A.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,j.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,j.unpackAlignment);let qe=A.getParameter(A.UNPACK_ROW_LENGTH),fe=A.getParameter(A.UNPACK_IMAGE_HEIGHT),kn=A.getParameter(A.UNPACK_SKIP_PIXELS),Rs=A.getParameter(A.UNPACK_SKIP_ROWS),gn=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Pe.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Pe.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ft),A.pixelStorei(A.UNPACK_SKIP_ROWS,Yt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,qt),C.isDataTexture||C.isData3DTexture?A.texSubImage3D(zt,tt,Bt,me,Se,St,At,kt,mn,he,Pe.data):j.isCompressedArrayTexture?A.compressedTexSubImage3D(zt,tt,Bt,me,Se,St,At,kt,mn,Pe.data):A.texSubImage3D(zt,tt,Bt,me,Se,St,At,kt,mn,he,Pe),A.pixelStorei(A.UNPACK_ROW_LENGTH,qe),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,fe),A.pixelStorei(A.UNPACK_SKIP_PIXELS,kn),A.pixelStorei(A.UNPACK_SKIP_ROWS,Rs),A.pixelStorei(A.UNPACK_SKIP_IMAGES,gn),tt===0&&j.generateMipmaps&&A.generateMipmap(zt),yt.unbindTexture()},this.initRenderTarget=function(C){mt.get(C).__webglFramebuffer===void 0&&P.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),yt.unbindTexture()},this.resetState=function(){R=0,w=0,E=null,yt.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===oh?"display-p3":"srgb",e.unpackColorSpace=ue.workingColorSpace===Ea?"display-p3":"srgb"}},qi=class extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Lc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=mc,this.updateRanges=[],this.version=0,this.uuid=Jn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},rn=new G,oa=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Vn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ge(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Vn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Vn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Vn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Vn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array),s=ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),i=ge(i,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Fr=class extends yi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Mr=new G,Ws=new G,Xs=new G,Ys=new dt,Sr=new dt,mu=new de,Do=new G,wr=new G,Uo=new G,Df=new dt,wl=new dt,Uf=new dt,aa=class extends tn{constructor(t=new Fr){if(super(),this.isSprite=!0,this.type="Sprite",Vs===void 0){Vs=new Ee;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Lc(e,5);Vs.setIndex([0,1,2,0,2,3]),Vs.setAttribute("position",new oa(i,3,0,!1)),Vs.setAttribute("uv",new oa(i,2,3,!1))}this.geometry=Vs,this.material=t,this.center=new dt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ws.setFromMatrixScale(this.matrixWorld),mu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Xs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ws.multiplyScalar(-Xs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;No(Do.set(-.5,-.5,0),Xs,o,Ws,s,r),No(wr.set(.5,-.5,0),Xs,o,Ws,s,r),No(Uo.set(.5,.5,0),Xs,o,Ws,s,r),Df.set(0,0),wl.set(1,0),Uf.set(1,1);let a=t.ray.intersectTriangle(Do,wr,Uo,!1,Mr);if(a===null&&(No(wr.set(-.5,.5,0),Xs,o,Ws,s,r),wl.set(0,1),a=t.ray.intersectTriangle(Do,Uo,wr,!1,Mr),a===null))return;let l=t.ray.origin.distanceTo(Mr);l<t.near||l>t.far||e.push({distance:l,point:Mr.clone(),uv:Hi.getInterpolation(Mr,Do,wr,Uo,Df,wl,Uf,new dt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};ar=class extends bn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},In=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],p=i[s+1]-h,m=(o-h)/p;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new dt:new G);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new G,s=[],r=[],o=[],a=new G,l=new de;for(let m=0;m<=t;m++){let g=m/t;s[m]=this.getTangentAt(g,new G)}r[0]=new G,o[0]=new G;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),p<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ne(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(Ne(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Br=class extends In{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new dt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),p=l-this.aX,m=c-this.aY;l=p*h-m*f+this.aX,c=p*f+m*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Dc=class extends Br{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};Oo=new G,El=new ch,Tl=new ch,Al=new ch,ti=class extends In{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new G){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Oo.subVectors(s[0],s[1]).add(s[0]),c=Oo);let f=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Oo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Oo),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),m),_=Math.pow(f.distanceToSquared(p),m),d=Math.pow(p.distanceToSquared(h),m);_<1e-4&&(_=1),g<1e-4&&(g=_),d<1e-4&&(d=_),El.initNonuniformCatmullRom(c.x,f.x,p.x,h.x,g,_,d),Tl.initNonuniformCatmullRom(c.y,f.y,p.y,h.y,g,_,d),Al.initNonuniformCatmullRom(c.z,f.z,p.z,h.z,g,_,d)}else this.curveType==="catmullrom"&&(El.initCatmullRom(c.x,f.x,p.x,h.x,this.tension),Tl.initCatmullRom(c.y,f.y,p.y,h.y,this.tension),Al.initCatmullRom(c.z,f.z,p.z,h.z,this.tension));return i.set(El.calc(l),Tl.calc(l),Al.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new G().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};la=class extends In{constructor(t=new dt,e=new dt,i=new dt,s=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new dt){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ir(t,s.x,r.x,o.x,a.x),Ir(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Uc=class extends In{constructor(t=new G,e=new G,i=new G,s=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new G){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ir(t,s.x,r.x,o.x,a.x),Ir(t,s.y,r.y,o.y,a.y),Ir(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ca=class extends In{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Nc=class extends In{constructor(t=new G,e=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new G){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new G){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ha=class extends In{constructor(t=new dt,e=new dt,i=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new dt){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Pr(t,s.x,r.x,o.x),Pr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Oc=class extends In{constructor(t=new G,e=new G,i=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new G){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Pr(t,s.x,r.x,o.x),Pr(t,s.y,r.y,o.y),Pr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fa=class extends In{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(Nf(a,l.x,c.x,h.x,f.x),Nf(a,l.y,c.y,h.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new dt().fromArray(s))}return this}},kc=Object.freeze({__proto__:null,ArcCurve:Dc,CatmullRomCurve3:ti,CubicBezierCurve:la,CubicBezierCurve3:Uc,EllipseCurve:Br,LineCurve:ca,LineCurve3:Nc,QuadraticBezierCurve:ha,QuadraticBezierCurve3:Oc,SplineCurve:fa}),Fc=class extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new kc[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new kc[s.type]().fromJSON(s))}return this}},zr=class extends Fc{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new ca(this.currentPoint.clone(),new dt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new ha(this.currentPoint.clone(),new dt(t,e),new dt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new la(this.currentPoint.clone(),new dt(t,e),new dt(i,s),new dt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new fa(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new Br(t,e,i,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Yn=class n extends Ee{constructor(t=[new dt(0,-.5),new dt(.5,0),new dt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Ne(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,f=new G,p=new dt,m=new G,g=new G,_=new G,d=0,u=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:d=t[y+1].x-t[y].x,u=t[y+1].y-t[y].y,m.x=u*1,m.y=-d,m.z=u*0,_.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:d=t[y+1].x-t[y].x,u=t[y+1].y-t[y].y,m.x=u*1,m.y=-d,m.z=u*0,g.copy(m),m.x+=_.x,m.y+=_.y,m.z+=_.z,m.normalize(),l.push(m.x,m.y,m.z),_.copy(g)}for(let y=0;y<=e;y++){let v=i+y*h*s,x=Math.sin(v),R=Math.cos(v);for(let w=0;w<=t.length-1;w++){f.x=t[w].x*x,f.y=t[w].y,f.z=t[w].x*R,o.push(f.x,f.y,f.z),p.x=y/e,p.y=w/(t.length-1),a.push(p.x,p.y);let E=l[3*w+0]*x,N=l[3*w+1],Z=l[3*w+0]*R;c.push(E,N,Z)}}for(let y=0;y<e;y++)for(let v=0;v<t.length-1;v++){let x=v+y*t.length,R=x,w=x+t.length,E=x+t.length+1,N=x+1;r.push(R,w,N),r.push(E,N,w)}this.setIndex(r),this.setAttribute("position",new Xt(o,3)),this.setAttribute("uv",new Xt(a,2)),this.setAttribute("normal",new Xt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}},Ln=class n extends Yn{constructor(t=1,e=1,i=4,s=8){let r=new zr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new n(t.radius,t.length,t.capSegments,t.radialSegments)}},Dn=class n extends Ee{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new G,h=new dt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,p=3;f<=e;f++,p+=3){let m=i+f/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[p]/t+1)/2,h.y=(o[p+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Xt(o,3)),this.setAttribute("normal",new Xt(a,3)),this.setAttribute("uv",new Xt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ie=class n extends Ee{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],p=[],m=[],g=0,_=[],d=i/2,u=0;y(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Xt(f,3)),this.setAttribute("normal",new Xt(p,3)),this.setAttribute("uv",new Xt(m,2));function y(){let x=new G,R=new G,w=0,E=(e-t)/i;for(let N=0;N<=r;N++){let Z=[],b=N/r,M=b*(e-t)+t;for(let V=0;V<=s;V++){let J=V/s,L=J*l+a,O=Math.sin(L),T=Math.cos(L);R.x=M*O,R.y=-b*i+d,R.z=M*T,f.push(R.x,R.y,R.z),x.set(O,E,T).normalize(),p.push(x.x,x.y,x.z),m.push(J,1-b),Z.push(g++)}_.push(Z)}for(let N=0;N<s;N++)for(let Z=0;Z<r;Z++){let b=_[Z][N],M=_[Z+1][N],V=_[Z+1][N+1],J=_[Z][N+1];t>0&&(h.push(b,M,J),w+=3),e>0&&(h.push(M,V,J),w+=3)}c.addGroup(u,w,0),u+=w}function v(x){let R=g,w=new dt,E=new G,N=0,Z=x===!0?t:e,b=x===!0?1:-1;for(let V=1;V<=s;V++)f.push(0,d*b,0),p.push(0,b,0),m.push(.5,.5),g++;let M=g;for(let V=0;V<=s;V++){let L=V/s*l+a,O=Math.cos(L),T=Math.sin(L);E.x=Z*T,E.y=d*b,E.z=Z*O,f.push(E.x,E.y,E.z),p.push(0,b,0),w.x=O*.5+.5,w.y=T*.5*b+.5,m.push(w.x,w.y),g++}for(let V=0;V<s;V++){let J=R+V,L=M+V;x===!0?h.push(L,L+1,J):h.push(L+1,L,J),N+=3}c.addGroup(u,N,x===!0?1:2),u+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},an=class n extends ie{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ua=class n extends Ee{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new Xt(r,3)),this.setAttribute("normal",new Xt(r.slice(),3)),this.setAttribute("uv",new Xt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let v=new G,x=new G,R=new G;for(let w=0;w<e.length;w+=3)m(e[w+0],v),m(e[w+1],x),m(e[w+2],R),l(v,x,R,y)}function l(y,v,x,R){let w=R+1,E=[];for(let N=0;N<=w;N++){E[N]=[];let Z=y.clone().lerp(x,N/w),b=v.clone().lerp(x,N/w),M=w-N;for(let V=0;V<=M;V++)V===0&&N===w?E[N][V]=Z:E[N][V]=Z.clone().lerp(b,V/M)}for(let N=0;N<w;N++)for(let Z=0;Z<2*(w-N)-1;Z++){let b=Math.floor(Z/2);Z%2===0?(p(E[N][b+1]),p(E[N+1][b]),p(E[N][b])):(p(E[N][b+1]),p(E[N+1][b+1]),p(E[N+1][b]))}}function c(y){let v=new G;for(let x=0;x<r.length;x+=3)v.x=r[x+0],v.y=r[x+1],v.z=r[x+2],v.normalize().multiplyScalar(y),r[x+0]=v.x,r[x+1]=v.y,r[x+2]=v.z}function h(){let y=new G;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];let x=d(y)/2/Math.PI+.5,R=u(y)/Math.PI+.5;o.push(x,1-R)}g(),f()}function f(){for(let y=0;y<o.length;y+=6){let v=o[y+0],x=o[y+2],R=o[y+4],w=Math.max(v,x,R),E=Math.min(v,x,R);w>.9&&E<.1&&(v<.2&&(o[y+0]+=1),x<.2&&(o[y+2]+=1),R<.2&&(o[y+4]+=1))}}function p(y){r.push(y.x,y.y,y.z)}function m(y,v){let x=y*3;v.x=t[x+0],v.y=t[x+1],v.z=t[x+2]}function g(){let y=new G,v=new G,x=new G,R=new G,w=new dt,E=new dt,N=new dt;for(let Z=0,b=0;Z<r.length;Z+=9,b+=6){y.set(r[Z+0],r[Z+1],r[Z+2]),v.set(r[Z+3],r[Z+4],r[Z+5]),x.set(r[Z+6],r[Z+7],r[Z+8]),w.set(o[b+0],o[b+1]),E.set(o[b+2],o[b+3]),N.set(o[b+4],o[b+5]),R.copy(y).add(v).add(x).divideScalar(3);let M=d(R);_(w,b+0,y,M),_(E,b+2,v,M),_(N,b+4,x,M)}}function _(y,v,x,R){R<0&&y.x===1&&(o[v]=y.x-1),x.x===0&&x.z===0&&(o[v]=R/2/Math.PI+.5)}function d(y){return Math.atan2(y.z,-y.x)}function u(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}},$e=class extends zr{constructor(t){super(t),this.uuid=Jn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new zr().fromJSON(s))}return this}},Ry={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=gu(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,f,p,m;if(i&&(r=Dy(n,t,r,e)),n.length>80*e){a=c=n[0],l=h=n[1];for(let g=e;g<s;g+=e)f=n[g],p=n[g+1],f<a&&(a=f),p<l&&(l=p),f>c&&(c=f),p>h&&(h=p);m=Math.max(c-a,h-l),m=m!==0?32767/m:0}return Hr(r,o,e,a,l,m,0),o}};Xi=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];kf(t),Ff(i,t);let o=t.length;e.forEach(kf);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Ff(i,e[l]);let a=Ry.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};Wr=class n extends Ee{constructor(t=new $e([new dt(.5,.5),new dt(-.5,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Xt(s,3)),this.setAttribute("uv",new Xt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,d=e.bevelSegments!==void 0?e.bevelSegments:3,u=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Xy,v,x=!1,R,w,E,N;u&&(v=u.getSpacedPoints(h),x=!0,p=!1,R=u.computeFrenetFrames(h,!1),w=new G,E=new G,N=new G),p||(d=0,m=0,g=0,_=0);let Z=a.extractPoints(c),b=Z.shape,M=Z.holes;if(!Xi.isClockWise(b)){b=b.reverse();for(let $=0,A=M.length;$<A;$++){let lt=M[$];Xi.isClockWise(lt)&&(M[$]=lt.reverse())}}let J=Xi.triangulateShape(b,M),L=b;for(let $=0,A=M.length;$<A;$++){let lt=M[$];b=b.concat(lt)}function O($,A,lt){return A||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(A,lt)}let T=b.length,H=J.length;function z($,A,lt){let ft,ht,yt,xt=$.x-A.x,mt=$.y-A.y,P=lt.x-$.x,S=lt.y-$.y,nt=xt*xt+mt*mt,ut=xt*S-mt*P;if(Math.abs(ut)>Number.EPSILON){let gt=Math.sqrt(nt),pt=Math.sqrt(P*P+S*S),Ot=A.x-mt/gt,wt=A.y+xt/gt,It=lt.x-S/pt,se=lt.y+P/pt,bt=((It-Ot)*S-(se-wt)*P)/(xt*S-mt*P);ft=Ot+xt*bt-$.x,ht=wt+mt*bt-$.y;let Lt=ft*ft+ht*ht;if(Lt<=2)return new dt(ft,ht);yt=Math.sqrt(Lt/2)}else{let gt=!1;xt>Number.EPSILON?P>Number.EPSILON&&(gt=!0):xt<-Number.EPSILON?P<-Number.EPSILON&&(gt=!0):Math.sign(mt)===Math.sign(S)&&(gt=!0),gt?(ft=-mt,ht=xt,yt=Math.sqrt(nt)):(ft=xt,ht=mt,yt=Math.sqrt(nt/2))}return new dt(ft/yt,ht/yt)}let et=[];for(let $=0,A=L.length,lt=A-1,ft=$+1;$<A;$++,lt++,ft++)lt===A&&(lt=0),ft===A&&(ft=0),et[$]=z(L[$],L[lt],L[ft]);let D=[],U,Y=et.concat();for(let $=0,A=M.length;$<A;$++){let lt=M[$];U=[];for(let ft=0,ht=lt.length,yt=ht-1,xt=ft+1;ft<ht;ft++,yt++,xt++)yt===ht&&(yt=0),xt===ht&&(xt=0),U[ft]=z(lt[ft],lt[yt],lt[xt]);D.push(U),Y=Y.concat(U)}for(let $=0;$<d;$++){let A=$/d,lt=m*Math.cos(A*Math.PI/2),ft=g*Math.sin(A*Math.PI/2)+_;for(let ht=0,yt=L.length;ht<yt;ht++){let xt=O(L[ht],et[ht],ft);W(xt.x,xt.y,-lt)}for(let ht=0,yt=M.length;ht<yt;ht++){let xt=M[ht];U=D[ht];for(let mt=0,P=xt.length;mt<P;mt++){let S=O(xt[mt],U[mt],ft);W(S.x,S.y,-lt)}}}let B=g+_;for(let $=0;$<T;$++){let A=p?O(b[$],Y[$],B):b[$];x?(E.copy(R.normals[0]).multiplyScalar(A.x),w.copy(R.binormals[0]).multiplyScalar(A.y),N.copy(v[0]).add(E).add(w),W(N.x,N.y,N.z)):W(A.x,A.y,0)}for(let $=1;$<=h;$++)for(let A=0;A<T;A++){let lt=p?O(b[A],Y[A],B):b[A];x?(E.copy(R.normals[$]).multiplyScalar(lt.x),w.copy(R.binormals[$]).multiplyScalar(lt.y),N.copy(v[$]).add(E).add(w),W(N.x,N.y,N.z)):W(lt.x,lt.y,f/h*$)}for(let $=d-1;$>=0;$--){let A=$/d,lt=m*Math.cos(A*Math.PI/2),ft=g*Math.sin(A*Math.PI/2)+_;for(let ht=0,yt=L.length;ht<yt;ht++){let xt=O(L[ht],et[ht],ft);W(xt.x,xt.y,f+lt)}for(let ht=0,yt=M.length;ht<yt;ht++){let xt=M[ht];U=D[ht];for(let mt=0,P=xt.length;mt<P;mt++){let S=O(xt[mt],U[mt],ft);x?W(S.x,S.y+v[h-1].y,v[h-1].x+lt):W(S.x,S.y,f+lt)}}}I(),k();function I(){let $=s.length/3;if(p){let A=0,lt=T*A;for(let ft=0;ft<H;ft++){let ht=J[ft];Q(ht[2]+lt,ht[1]+lt,ht[0]+lt)}A=h+d*2,lt=T*A;for(let ft=0;ft<H;ft++){let ht=J[ft];Q(ht[0]+lt,ht[1]+lt,ht[2]+lt)}}else{for(let A=0;A<H;A++){let lt=J[A];Q(lt[2],lt[1],lt[0])}for(let A=0;A<H;A++){let lt=J[A];Q(lt[0]+T*h,lt[1]+T*h,lt[2]+T*h)}}i.addGroup($,s.length/3-$,0)}function k(){let $=s.length/3,A=0;q(L,A),A+=L.length;for(let lt=0,ft=M.length;lt<ft;lt++){let ht=M[lt];q(ht,A),A+=ht.length}i.addGroup($,s.length/3-$,1)}function q($,A){let lt=$.length;for(;--lt>=0;){let ft=lt,ht=lt-1;ht<0&&(ht=$.length-1);for(let yt=0,xt=h+d*2;yt<xt;yt++){let mt=T*yt,P=T*(yt+1),S=A+ft+mt,nt=A+ht+mt,ut=A+ht+P,gt=A+ft+P;it(S,nt,ut,gt)}}}function W($,A,lt){l.push($),l.push(A),l.push(lt)}function Q($,A,lt){rt($),rt(A),rt(lt);let ft=s.length/3,ht=y.generateTopUV(i,s,ft-3,ft-2,ft-1);st(ht[0]),st(ht[1]),st(ht[2])}function it($,A,lt,ft){rt($),rt(A),rt(ft),rt(A),rt(lt),rt(ft);let ht=s.length/3,yt=y.generateSideWallUV(i,s,ht-6,ht-3,ht-2,ht-1);st(yt[0]),st(yt[1]),st(yt[3]),st(yt[1]),st(yt[2]),st(yt[3])}function rt($){s.push(l[$*3+0]),s.push(l[$*3+1]),s.push(l[$*3+2])}function st($){r.push($.x),r.push($.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Yy(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new kc[s.type]().fromJSON(s)),new n(i,t.options)}},Xy={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new dt(r,o),new dt(a,l),new dt(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],f=t[i*3+2],p=t[s*3],m=t[s*3+1],g=t[s*3+2],_=t[r*3],d=t[r*3+1],u=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new dt(o,1-l),new dt(c,1-f),new dt(p,1-g),new dt(_,1-u)]:[new dt(a,1-l),new dt(h,1-f),new dt(m,1-g),new dt(d,1-u)]}};da=class n extends ua{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},ms=class n extends ua{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},pa=class n extends Ee{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],f=t,p=(e-t)/s,m=new G,g=new dt;for(let _=0;_<=s;_++){for(let d=0;d<=i;d++){let u=r+d/i*o;m.x=f*Math.cos(u),m.y=f*Math.sin(u),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,h.push(g.x,g.y)}f+=p}for(let _=0;_<s;_++){let d=_*(i+1);for(let u=0;u<i;u++){let y=u+d,v=y,x=y+i+1,R=y+i+2,w=y+1;a.push(v,x,w),a.push(x,R,w)}}this.setIndex(a),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(c,3)),this.setAttribute("uv",new Xt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Mn=class n extends Ee{constructor(t=new $e([new dt(0,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Xt(s,3)),this.setAttribute("normal",new Xt(r,3)),this.setAttribute("uv",new Xt(o,2));function c(h){let f=s.length/3,p=h.extractPoints(e),m=p.shape,g=p.holes;Xi.isClockWise(m)===!1&&(m=m.reverse());for(let d=0,u=g.length;d<u;d++){let y=g[d];Xi.isClockWise(y)===!0&&(g[d]=y.reverse())}let _=Xi.triangulateShape(m,g);for(let d=0,u=g.length;d<u;d++){let y=g[d];m=m.concat(y)}for(let d=0,u=m.length;d<u;d++){let y=m[d];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let d=0,u=_.length;d<u;d++){let y=_[d],v=y[0]+f,x=y[1]+f,R=y[2]+f;i.push(v,x,R),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return qy(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];i.push(o)}return new n(i,t.curveSegments)}};Te=class n extends Ee{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new G,p=new G,m=[],g=[],_=[],d=[];for(let u=0;u<=i;u++){let y=[],v=u/i,x=0;u===0&&o===0?x=.5/e:u===i&&l===Math.PI&&(x=-.5/e);for(let R=0;R<=e;R++){let w=R/e;f.x=-t*Math.cos(s+w*r)*Math.sin(o+v*a),f.y=t*Math.cos(o+v*a),f.z=t*Math.sin(s+w*r)*Math.sin(o+v*a),g.push(f.x,f.y,f.z),p.copy(f).normalize(),_.push(p.x,p.y,p.z),d.push(w+x,1-v),y.push(c++)}h.push(y)}for(let u=0;u<i;u++)for(let y=0;y<e;y++){let v=h[u][y+1],x=h[u][y],R=h[u+1][y],w=h[u+1][y+1];(u!==0||o>0)&&m.push(v,x,w),(u!==i-1||l<Math.PI)&&m.push(x,R,w)}this.setIndex(m),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(_,3)),this.setAttribute("uv",new Xt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Zt=class n extends Ee{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new G,f=new G,p=new G;for(let m=0;m<=i;m++)for(let g=0;g<=s;g++){let _=g/s*r,d=m/i*Math.PI*2;f.x=(t+e*Math.cos(d))*Math.cos(_),f.y=(t+e*Math.cos(d))*Math.sin(_),f.z=e*Math.sin(d),a.push(f.x,f.y,f.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),p.subVectors(f,h).normalize(),l.push(p.x,p.y,p.z),c.push(g/s),c.push(m/i)}for(let m=1;m<=i;m++)for(let g=1;g<=s;g++){let _=(s+1)*m+g-1,d=(s+1)*(m-1)+g-1,u=(s+1)*(m-1)+g,y=(s+1)*m+g;o.push(_,d,y),o.push(d,u,y)}this.setIndex(o),this.setAttribute("position",new Xt(a,3)),this.setAttribute("normal",new Xt(l,3)),this.setAttribute("uv",new Xt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},ma=class extends yi{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Wt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}},Un=class extends yi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=su,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ga=class extends Un{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ne(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Wt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Wt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Wt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};lr=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Hc=class extends lr{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zh,endingEnd:zh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Hh:r=t,a=2*e-i;break;case Gh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Hh:o=t,l=2*i-e;break;case Gh:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,m=this._weightNext,g=(i-e)/(s-e),_=g*g,d=_*g,u=-p*d+2*p*_-p*g,y=(1+p)*d+(-1.5-2*p)*_+(-.5+p)*g+1,v=(-1-m)*d+(1.5+m)*_+.5*g,x=m*d-m*_;for(let R=0;R!==a;++R)r[R]=u*o[h+R]+y*o[c+R]+v*o[l+R]+x*o[f+R];return r}},Gc=class extends lr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),f=1-h;for(let p=0;p!==a;++p)r[p]=o[c+p]*f+o[l+p]*h;return r}},Vc=class extends lr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},qn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Bo(e,this.TimeBufferType),this.values=Bo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Bo(t.times,Array),values:Bo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Vc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Gc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Hc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Yo:e=this.InterpolantFactoryMethodDiscrete;break;case pc:e=this.InterpolantFactoryMethodLinear;break;case Ka:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yo;case this.InterpolantFactoryMethodLinear:return pc;case this.InterpolantFactoryMethodSmooth:return Ka}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Zy(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ka,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let f=a*i,p=f-i,m=f+i;for(let g=0;g!==i;++g){let _=e[f+g];if(_!==e[p+g]||_!==e[m+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*i,p=o*i;for(let m=0;m!==i;++m)e[p+m]=e[f+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=pc;gs=class extends qn{constructor(t,e,i){super(t,e,i)}};gs.prototype.ValueTypeName="bool";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=Yo;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;Wc=class extends qn{};Wc.prototype.ValueTypeName="color";Xc=class extends qn{};Xc.prototype.ValueTypeName="number";Yc=class extends lr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Xn.slerpFlat(r,0,o,c-a,o,c,l);return r}},_a=class extends qn{InterpolantFactoryMethodLinear(t){return new Yc(this.times,this.values,this.getValueSize(),t)}};_a.prototype.ValueTypeName="quaternion";_a.prototype.InterpolantFactoryMethodSmooth=void 0;_s=class extends qn{constructor(t,e,i){super(t,e,i)}};_s.prototype.ValueTypeName="string";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=Yo;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;qc=class extends qn{};qc.prototype.ValueTypeName="vector";Zc=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,p=c.length;f<p;f+=2){let m=c[f],g=c[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},$y=new Zc,$c=class{constructor(t){this.manager=t!==void 0?t:$y,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};$c.DEFAULT_MATERIAL_NAME="__DEFAULT";Xr=class extends tn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ya=class extends Xr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Rl=new de,Bf=new G,zf=new G,xa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kr,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Bf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bf),zf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zf),e.updateMatrixWorld(),Rl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Rl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Hf=new de,Er=new G,Cl=new G,Kc=class extends xa{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new _e(2,1,1,1),new _e(0,1,1,1),new _e(3,1,1,1),new _e(1,1,1,1),new _e(3,0,1,1),new _e(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Er.setFromMatrixPosition(t.matrixWorld),i.position.copy(Er),Cl.copy(i.position),Cl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Cl),i.updateMatrixWorld(),s.makeTranslation(-Er.x,-Er.y,-Er.z),Hf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hf)}},va=class extends Xr{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Kc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Jc=class extends xa{constructor(){super(new sa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cr=class extends Xr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new Jc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},ba=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Gf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Gf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};hh="\\[\\]\\.:\\/",Ky=new RegExp("["+hh+"]","g"),fh="[^"+hh+"]",Jy="[^"+hh.replace("\\.","")+"]",jy=/((?:WC+[\/:])*)/.source.replace("WC",fh),Qy=/(WCOD+)?/.source.replace("WCOD",Jy),t1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fh),e1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fh),n1=new RegExp("^"+jy+Qy+t1+e1+"$"),i1=["material","materials","bones","map"],jc=class{constructor(t,e,i){let s=i||Ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ae=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ky,"")}static parseTrackName(t){let e=n1.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);i1.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=jc;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];$1=new Float32Array(1),Vf=new de,Ma=class{constructor(t,e,i=0,s=1/0){this.ray=new sr(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Or,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Vf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vf),this}intersectObject(t,e=!0,i=[]){return Qc(t,this,i,e),i.sort(Wf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Qc(t[s],this,i,e);return i.sort(Wf),i}};Yr=class{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ne(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Sa=class extends gi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169")});function r1(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function o1(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function a1(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(bu),this.state=ye.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function l1(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ys.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ye.DOLLY;break;case ys.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ye.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ye.ROTATE}break;case ys.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ye.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ye.PAN}break;default:this.state=ye.NONE}this.state!==ye.NONE&&this.dispatchEvent(dh)}function c1(n){switch(this.state){case ye.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ye.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ye.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function h1(n){this.enabled===!1||this.enableZoom===!1||this.state!==ye.NONE||(n.preventDefault(),this.dispatchEvent(dh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(bu))}function f1(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function u1(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case xs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ye.TOUCH_ROTATE;break;case xs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ye.TOUCH_PAN;break;default:this.state=ye.NONE}break;case 2:switch(this.touches.TWO){case xs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ye.TOUCH_DOLLY_PAN;break;case xs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ye.TOUCH_DOLLY_ROTATE;break;default:this.state=ye.NONE}break;default:this.state=ye.NONE}this.state!==ye.NONE&&this.dispatchEvent(dh)}function d1(n){switch(this._trackPointer(n),this.state){case ye.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ye.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ye.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ye.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ye.NONE}}function p1(n){this.enabled!==!1&&n.preventDefault()}function m1(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function g1(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var xu,dh,bu,Ra,vu,s1,He,pn,ye,uh,Ca,Mu=_n(()=>{Nn();xu={type:"change"},dh={type:"start"},bu={type:"end"},Ra=new sr,vu=new Hn,s1=Math.cos(70*ou.DEG2RAD),He=new G,pn=2*Math.PI,ye={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},uh=1e-6,Ca=class extends Sa{constructor(t,e=null){super(t,e),this.state=ye.NONE,this.enabled=!0,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ys.ROTATE,MIDDLE:ys.DOLLY,RIGHT:ys.PAN},this.touches={ONE:xs.ROTATE,TWO:xs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new Xn,this._lastTargetPosition=new G,this._quat=new Xn().setFromUnitVectors(t.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Yr,this._sphericalDelta=new Yr,this._scale=1,this._panOffset=new G,this._rotateStart=new dt,this._rotateEnd=new dt,this._rotateDelta=new dt,this._panStart=new dt,this._panEnd=new dt,this._panDelta=new dt,this._dollyStart=new dt,this._dollyEnd=new dt,this._dollyDelta=new dt,this._dollyDirection=new G,this._mouse=new dt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=o1.bind(this),this._onPointerDown=r1.bind(this),this._onPointerUp=a1.bind(this),this._onContextMenu=p1.bind(this),this._onMouseWheel=h1.bind(this),this._onKeyDown=f1.bind(this),this._onTouchStart=u1.bind(this),this._onTouchMove=d1.bind(this),this._onMouseDown=l1.bind(this),this._onMouseMove=c1.bind(this),this._interceptControlDown=m1.bind(this),this._interceptControlUp=g1.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(xu),this.update(),this.state=ye.NONE}update(t=null){let e=this.object.position;He.copy(e).sub(this.target),He.applyQuaternion(this._quat),this._spherical.setFromVector3(He),this.autoRotate&&this.state===ye.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=pn:i>Math.PI&&(i-=pn),s<-Math.PI?s+=pn:s>Math.PI&&(s-=pn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(He.setFromSpherical(this._spherical),He.applyQuaternion(this._quatInverse),e.copy(this.target).add(He),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=He.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new G(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new G(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=He.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ra.origin.copy(this.object.position),Ra.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ra.direction))<s1?this.object.lookAt(this.target):(vu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ra.intersectPlane(vu,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>uh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>uh||this._lastTargetPosition.distanceToSquared(this.target)>uh?(this.dispatchEvent(xu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?pn/60*this.autoRotateSpeed*t:pn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){He.setFromMatrixColumn(e,0),He.multiplyScalar(-t),this._panOffset.add(He)}_panUp(t,e){this.screenSpacePanning===!0?He.setFromMatrixColumn(e,1):(He.setFromMatrixColumn(e,0),He.crossVectors(this.object.up,He)),He.multiplyScalar(t),this._panOffset.add(He)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;He.copy(s).sub(this.target);let r=He.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new dt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}});function fr(n){let t=new jn;return t.color.setScalar(n),t}var Kr,Su=_n(()=>{Nn();Kr=class extends qi{constructor(){super();let t=new Me;t.deleteAttribute("uv");let e=new Un({side:Fe}),i=new Un,s=new va(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Gt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Gt(t,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new Gt(t,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new Gt(t,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new Gt(t,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new Gt(t,i);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let f=new Gt(t,i);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let p=new Gt(t,fr(50));p.position.set(-16.116,14.37,8.208),p.scale.set(.1,2.428,2.739),this.add(p);let m=new Gt(t,fr(50));m.position.set(-16.109,18.021,-8.207),m.scale.set(.1,2.425,2.751),this.add(m);let g=new Gt(t,fr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let _=new Gt(t,fr(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);let d=new Gt(t,fr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let u=new Gt(t,fr(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}}});function Pa(){let n={};for(let t of vi)for(let e of t.subs)for(let i of e.controls)n[i.k]=i.def;return n.concept="d",n.name="\uC2B9\uD604",n.showAll=!1,n}var Oe,Nt,ee,Ki,Qt,vi,Jr,ph,mh,gh=_n(()=>{Oe={skin:["#ffe6d8","#f9d6c0","#f3c6a5","#e8b18c","#d89a73","#c08360","#a2694a","#84513a","#63392a","#4a2a20"],skinF:["#9cc2ee","#6f8fd6","#c1a6ee","#8a5fc0","#e06a72","#b03a48","#a7afb8","#6e7680","#93c78d","#5f8f5a"],skinC:["#eef3f8","#cfd9e4","#b4c0cc","#2a2f3a"],hair:["#1d1918","#3b2620","#6b4430","#9a6a45","#e3bf78","#f2e8cc","#c4562b","#a3202b","#9a9a9e","#f6f6f6","#ffb3d1","#b8a6ff","#9fdcff","#b8f0c8"],neon:["#ff2fd0","#2ff5ff","#9b5cff","#39ff7a","#ffe23a","#ff7a1f","#ff3355","#3d7bff"],eye:["#3a2418","#6b4426","#2f5f9e","#3f8f6a","#8a8f99","#b02a2a","#f0c040","#8f4fd0","#2fe0ff","#ff3fb0","#111111","#f4f4f4"],lip:["#e86f80","#c94a5a","#f59a96","#b33a4a","#ff8aa8","#c8826e","#9a4a52","#6e2236","#5a2a6a","#222222","#2fe0ff","#ff2fd0"],blush:["#ff8f9e","#ff9a7a","#f06a8a","#e85a5a","#c58cff","#ffb36b"],brow:["#1d1918","#3b2620","#6b4430","#9a6a45","#d8b878","#8a8a8a","#f2f2f2"],shadow:["#d98a9a","#b0705a","#7a4a6a","#3a2a3a","#e8b860","#7fb0e8","#9b5cff","#2ff5ff","#39b06a","#ff7a1f"],cloth:["#ffffff","#f2efe6","#1f1f24","#3d4250","#8c919c","#ff9fbf","#ffd1dc","#c8b6ff","#a8d8ff","#bdf0d0","#fff1a8","#ffb37a","#e05050","#3a6bc8","#2f8f5f","#6b4430","#c9a46a","#6a2a7a"],metal:["#c8ccd4","#8a8f99","#d4af37","#b87333","#3a3d44","#e8e8f0"],mark:["#2a2a2a","#ffffff","#d4af37","#c03030","#3a6bc8","#2ff5ff","#ff2fd0","#39ff7a"]},Nt=(n,t,e,i,s,r=.01)=>({k:n,t:"range",label:t,min:e,max:i,def:s,step:r}),ee=(n,t,e,i="cloth")=>({k:n,t:"color",label:t,def:e,pal:i}),Ki=(n,t,e=!1)=>({k:n,t:"toggle",label:t,def:e}),Qt=(n,t,e,i)=>({k:n,t:"chips",label:t,opts:e,def:i??e[0][0]}),vi=[{id:"face",label:"\uC5BC\uAD74",icon:"\u{1F642}",subs:[{id:"shape",label:"\uC5BC\uAD74\uD615",controls:[Qt("faceShape","\uBAA8\uC591",[["oval","\uACC4\uB780\uD615"],["round","\uB3D9\uADF8\uB780"],["heart","\uD558\uD2B8\uD615"],["square","\uAC01\uC9C4"],["long","\uAE34"],["vline","V\uB77C\uC778"],["chubby","\uD1B5\uD1B5 \uBCFC"]],"oval"),Nt("headSize","\uBA38\uB9AC \uD06C\uAE30",.85,1.2,1),Nt("headWidth","\uC5BC\uAD74 \uD3ED",.85,1.15,1),Nt("jaw","\uD131 \uB108\uBE44",.6,1.2,1),Nt("chin","\uD131 \uAE38\uC774",.85,1.25,1),Nt("cheek","\uBCFC\uC0B4",0,1,.35)]},{id:"skin",label:"\uD53C\uBD80",controls:[ee("skin","\uD53C\uBD80\uC0C9","#f9d6c0","skin"),Nt("skinGloss","\uAD11\uD0DD(\uBB3C\uAD11)",0,1,.3)]},{id:"eyes",label:"\uB208",controls:[Qt("eyeShape","\uB208 \uBAA8\uC591",[["round","\uB3D9\uAE00"],["almond","\uC544\uBAAC\uB4DC"],["big","\uC655\uB208"],["cat","\uACE0\uC591\uC774"],["droopy","\uCC98\uC9C4 \uB208"],["sleepy","\uC878\uB9B0 \uB208"],["smile","\uC6C3\uB294 \uB208 ^^"],["sharp","\uB0A0\uCE74\uB85C\uC6B4"]],"big"),Nt("eyeSize","\uD06C\uAE30",.7,1.4,1),Nt("eyeY","\uC704\uCE58 (\uC704\xB7\uC544\uB798)",-.25,.2,0),Nt("eyeSpacing","\uAC04\uACA9",.8,1.25,1),Nt("eyeTilt","\uAE30\uC6B8\uAE30",-.5,.5,0),Nt("eyeOpen","\uB72C \uC815\uB3C4",.3,1.2,1)]},{id:"iris",label:"\uB208\uB3D9\uC790",controls:[Qt("irisStyle","\uC2A4\uD0C0\uC77C",[["basic","\uAE30\uBCF8"],["sparkle","\uBC18\uC9DD \uBCC4"],["heart","\uD558\uD2B8"],["cat","\uC138\uB85C \uB3D9\uACF5","f"],["ring","\uB9C1"],["mech","\uAE30\uACC4 \uB80C\uC988","c"]],"sparkle"),ee("irisColor","\uB208\uB3D9\uC790 \uC0C9","#6b4426","eye"),Ki("heterochromia","\uC624\uB4DC\uC544\uC774"),ee("irisColor2","\uC624\uB978\uCABD \uB208 \uC0C9 (\uC624\uB4DC\uC544\uC774)","#2f5f9e","eye"),Nt("irisSize","\uB208\uB3D9\uC790 \uD06C\uAE30",.45,.85,.66),ee("sclera","\uD770\uC790 \uC0C9","#ffffff","eye"),Ki("glowEyes","\uBE5B\uB098\uB294 \uB208"),Nt("lookX","\uC2DC\uC120 \uC88C\uC6B0",-1,1,0),Nt("lookY","\uC2DC\uC120 \uC704\uC544\uB798",-1,1,0)]},{id:"lash",label:"\uC18D\uB208\uC379",controls:[Qt("lashStyle","\uC2A4\uD0C0\uC77C",[["none","\uC5C6\uC74C"],["natural","\uC790\uC5F0"],["full","\uD48D\uC131"],["wing","\uB0A0\uAC1C"],["doll","\uC778\uD615"],["bottom","\uC544\uB798\uAE4C\uC9C0"]],"natural"),Nt("lashLen","\uAE38\uC774",.5,1.6,1),Nt("lashThick","\uB450\uAED8",.5,1.6,1),ee("lashColor","\uC0C9","#1d1918","brow")]},{id:"brow",label:"\uB208\uC379",controls:[Qt("browStyle","\uBAA8\uC591",[["straight","\uC77C\uC790"],["arch","\uC544\uCE58"],["angled","\uAC01\uC9C4"],["soft","\uB465\uADFC"],["droop","\uCC98\uC9C4"],["thick","\uC9C4\uD55C"],["thin","\uC587\uC740"],["dot","\uC810 \uB208\uC379"]],"soft"),Nt("browSize","\uB450\uAED8",.5,1.8,1),Nt("browLen","\uAE38\uC774",.6,1.4,1),Nt("browY","\uB192\uC774",-.15,.2,0),Nt("browSpacing","\uAC04\uACA9",.8,1.25,1),Nt("browTilt","\uAE30\uC6B8\uAE30",-.5,.5,0),ee("browColor","\uC0C9","#3b2620","brow")]},{id:"nose",label:"\uCF54",controls:[Qt("noseStyle","\uBAA8\uC591",[["round","\uB3D9\uAE00"],["button","\uBC84\uD2BC"],["high","\uC624\uB611"],["wide","\uB113\uC740"],["dot","\uC810 \uCF54"],["hook","\uB9E4\uBD80\uB9AC"],["snub","\uB4E4\uCC3D"]],"button"),Nt("noseSize","\uD06C\uAE30",.6,1.5,1),Nt("noseY","\uB192\uC774",-.15,.15,0),Nt("noseWidth","\uD3ED",.7,1.4,1),Nt("noseLen","\uB192\uC774(\uB3CC\uCD9C)",.5,1.6,1)]},{id:"mouth",label:"\uC785",controls:[Qt("mouthStyle","\uBAA8\uC591",[["smile","\uBBF8\uC18C"],["full","\uB3C4\uD1B0"],["grin","\uD65C\uC9DD"],["cat","\uACE0\uC591\uC774 \u03C9"],["o","\uC624!"],["flat","\uBB34\uD45C\uC815"],["tongue","\uBA54\uB871"],["smirk","\uC529 \uC6C3\uC74C"]],"smile"),Nt("mouthSize","\uD06C\uAE30",.6,1.5,1),Nt("mouthY","\uB192\uC774",-.15,.15,0),Nt("mouthCurve","\uC785\uAF2C\uB9AC",-1,1,.4),Nt("lipThick","\uC785\uC220 \uB450\uAED8",.4,1.8,1)]},{id:"ears",label:"\uADC0",controls:[Qt("earStyle","\uBAA8\uC591",[["normal","\uAE30\uBCF8"],["small","\uC791\uC740 \uADC0"],["big","\uD070 \uADC0"],["elf","\uC5D8\uD504 \uADC0","f"],["longelf","\uAE34 \uC5D8\uD504 \uADC0","f"],["round","\uB465\uADFC \uADC0"]],"normal"),Nt("earSize","\uD06C\uAE30",.6,1.5,1),Nt("earY","\uB192\uC774",-.15,.15,0),Nt("earAngle","\uBC8C\uC5B4\uC9D0",-.4,.8,.1)]},{id:"blush",label:"\uBCFC\uD130\uCE58",controls:[Qt("blushStyle","\uC2A4\uD0C0\uC77C",[["none","\uC5C6\uC74C"],["round","\uB3D9\uADF8\uB780"],["oval","\uD0C0\uC6D0"],["lines","\uBE57\uAE08 ///"],["heart","\uD558\uD2B8"],["wide","\uCF54 \uAC00\uB85C\uC9C0\uB984"]],"round"),ee("blushColor","\uC0C9","#ff8f9e","blush"),Nt("blushSize","\uD06C\uAE30",.5,1.6,1),Nt("blushY","\uB192\uC774",-.2,.2,0),Nt("blushSpacing","\uAC04\uACA9",.7,1.3,1),Nt("blushAlpha","\uC9C4\uD558\uAE30",.1,1,.5)]},{id:"freckle",label:"\uC8FC\uADFC\uAE68\xB7\uC810",controls:[Nt("freckles","\uC8FC\uADFC\uAE68 \uC591",0,1,0),Nt("freckleSize","\uC8FC\uADFC\uAE68 \uD06C\uAE30",.5,1.6,1),ee("freckleColor","\uC8FC\uADFC\uAE68 \uC0C9","#a0644a","brow"),Qt("mole","\uC810",[["none","\uC5C6\uC74C"],["eyeL","\uC67C\uCABD \uB208\uBC11"],["eyeR","\uC624\uB978\uCABD \uB208\uBC11"],["lip","\uC785\uAC00"],["cheek","\uBCFC"],["many","\uC5EC\uB7EC \uAC1C"]],"none"),Nt("moleSize","\uC810 \uD06C\uAE30",.5,2,1)]}]},{id:"makeup",label:"\uBA54\uC774\uD06C\uC5C5",icon:"\u{1F484}",subs:[{id:"shadow",label:"\uC544\uC774\uC100\uB3C4",controls:[Qt("shadowStyle","\uC2A4\uD0C0\uC77C",[["none","\uC5C6\uC74C"],["soft","\uC740\uC740\uD558\uAC8C"],["smoky","\uC2A4\uBAA8\uD0A4"],["crease","\uCEF7\uD06C\uB9AC\uC988"],["under","\uC560\uAD63\uC0B4"],["glitter","\uAE00\uB9AC\uD130"],["neon","\uB124\uC628 \uADF8\uB798\uD53D","c"]],"none"),ee("shadowColor","\uC0C9","#d98a9a","shadow"),Nt("shadowAlpha","\uC9C4\uD558\uAE30",.1,1,.55)]},{id:"liner",label:"\uC544\uC774\uB77C\uC778",controls:[Qt("linerStyle","\uC2A4\uD0C0\uC77C",[["none","\uC5C6\uC74C"],["thin","\uC587\uAC8C"],["wing","\uB0A0\uAC1C"],["bold","\uAD75\uAC8C"],["puppy","\uAC15\uC544\uC9C0 \uB77C\uC778"]],"none"),ee("linerColor","\uC0C9","#1d1918","brow")]},{id:"lip",label:"\uB9BD",controls:[ee("lipColor","\uB9BD \uC0C9","#e86f80","lip"),Nt("lipAlpha","\uBC1C\uC0C9",.1,1,.6),Nt("lipGloss","\uB9BD\uAE00\uB85C\uC2A4(\uAD11\uD0DD)",0,1,.5),Qt("lipStyle","\uBC14\uB974\uB294 \uBC95",[["full","\uD480\uB9BD"],["gradient","\uADF8\uB77C\uB370\uC774\uC158"],["ombre","\uC624\uBC84\uB9BD"]],"full")]},{id:"marks",label:"\uBB38\uC591\xB7\uD0C0\uD22C",controls:[Qt("markStyle","\uC5BC\uAD74 \uBB38\uC591",[["none","\uC5C6\uC74C"],["star","\uBCC4 \uC2A4\uD2F0\uCEE4","d"],["tears","\uB208\uBB3C \uC810","d"],["rune","\uC774\uB9C8 \uB8EC","f"],["war","\uC804\uC7C1 \uD398\uC778\uD2B8","f"],["vine","\uC5D8\uD504 \uB369\uAD74","f"],["tribal","\uBD80\uC871 \uBB38\uC2E0","f"],["circuit","\uD68C\uB85C \uB77C\uC778","c"],["barcode","\uBC14\uCF54\uB4DC","c"],["glitch","\uAE00\uB9AC\uCE58 \uC904","c"]],"none"),ee("markColor","\uC0C9","#d4af37","mark"),Ki("markGlow","\uBE5B\uB098\uAC8C"),Nt("markAlpha","\uC9C4\uD558\uAE30",.2,1,.85)]}]},{id:"hair",label:"\uD5E4\uC5B4",icon:"\u{1F487}",subs:[{id:"bangs",label:"\uC55E\uBA38\uB9AC",controls:[Qt("bangs","\uC55E\uBA38\uB9AC",[["none","\uC5C6\uC74C(\uC774\uB9C8)"],["blunt","\uC77C\uC790"],["seethrough","\uC2DC\uC2A4\uB8E8"],["micro","\uC9E7\uC740 \uC55E\uBA38\uB9AC"],["center","5:5 \uAC00\uB974\uB9C8"],["side","\uC606 \uAC00\uB974\uB9C8"],["curtain","\uCEE4\uD2BC\uBC45"],["spiky","\uBFB0\uC871 \uC560\uB2C8"],["eyecover","\uD55C\uCABD \uB208 \uAC00\uB9BC"],["pomp","\uD401\uD30C\uB450\uB974"],["sidelock","\uAE34 \uC606\uBA38\uB9AC"],["slick","\uC62C\uBC31"]],"curtain"),Nt("bangLen","\uC55E\uBA38\uB9AC \uAE38\uC774",.6,1.4,1),Nt("hairline","\uD5E4\uC5B4\uB77C\uC778",-.15,.15,0)]},{id:"back",label:"\uB4B7\uBA38\uB9AC",controls:[Qt("backHair","\uC2A4\uD0C0\uC77C",[["short","\uC20F\uCEF7"],["pixie","\uD53D\uC2DC"],["bob","\uB2E8\uBC1C"],["lob","\uC911\uB2E8\uBC1C"],["long","\uAE34 \uC0DD\uBA38\uB9AC"],["wavy","\uC6E8\uC774\uBE0C \uB871"],["hime","\uD788\uBA54\uCEF7"],["wolf","\uC6B8\uD504\uCEF7"],["pony","\uD3EC\uB2C8\uD14C\uC77C"],["highpony","\uD558\uC774\uD3EC\uB2C8"],["sidepony","\uC0AC\uC774\uB4DC \uD3EC\uB2C8"],["twin","\uD2B8\uC708\uD14C\uC77C"],["bun","\uB625\uBA38\uB9AC"],["spacebuns","\uC591\uAC08\uB798 \uBC88"],["halfup","\uD558\uD504\uC5C5"],["braid","\uB54B\uC740 \uBA38\uB9AC"],["twinbraid","\uC591\uAC08\uB798 \uB54B\uAE30"],["curly","\uACF1\uC2AC \uC20F"],["afro","\uC544\uD504\uB85C"],["dread","\uB4DC\uB808\uB4DC"],["mohawk","\uBAA8\uD788\uCE78","c"],["undercut","\uC5B8\uB354\uCEF7","c"],["buzz","\uBC84\uC988\uCEF7"],["bald","\uBBFC\uBA38\uB9AC"]],"bob"),Nt("hairLen","\uAE38\uC774",.6,1.5,1),Nt("hairVolume","\uBCFC\uB968",.8,1.4,1),Nt("hairWave","\uC6E8\uC774\uBE0C",0,1,.15)]},{id:"hcolor",label:"\uC0C9\uC0C1",controls:[ee("hairColor","\uBA38\uB9AC\uC0C9","#3b2620","hair"),Ki("ombre","\uC634\uBE0C\uB808(\uB05D \uC0C9)"),ee("hairColor2","\uB05D \uC0C9","#e3bf78","hair"),Ki("hairGlow","\uB124\uC628 \uBC1C\uAD11"),Nt("hairShine","\uC724\uAE30",0,1,.5)]},{id:"beard",label:"\uC218\uC5FC",controls:[Qt("beard","\uC218\uC5FC",[["none","\uC5C6\uC74C"],["stache","\uCF67\uC218\uC5FC"],["stubble","\uD131\uC218\uC5FC \uC9E7\uAC8C"],["full","\uD48D\uC131\uD55C \uC218\uC5FC"],["dwarf","\uB54B\uC740 \uAE34 \uC218\uC5FC","f"],["goatee","\uC5FC\uC18C \uC218\uC5FC"]],"none"),ee("beardColor","\uC218\uC5FC \uC0C9","#3b2620","hair")]}]},{id:"body",label:"\uBAB8",icon:"\u{1F9CD}",subs:[{id:"build",label:"\uCCB4\uD615",controls:[Qt("bodyPreset","\uD504\uB9AC\uC14B",[["custom","\uC9C1\uC811"],["petite","\uC544\uB2F4"],["slim","\uB298\uC52C"],["basic","\uAE30\uBCF8"],["sturdy","\uD2BC\uD2BC"],["muscle","\uADFC\uC721"],["chubby","\uD1B5\uD1B5"]],"custom"),Nt("height","\uD0A4",.8,1.2,1),Nt("width","\uCCB4\uACA9",.8,1.35,1),Nt("muscle","\uADFC\uC721\xB7\uD1B5\uD1B5",.8,1.4,1)]},{id:"prop",label:"\uBE44\uC728",controls:[Nt("shoulders","\uC5B4\uAE68 \uB108\uBE44",.8,1.3,1),Nt("chest","\uAC00\uC2B4\uB458\uB808",.8,1.3,1),Nt("waist","\uD5C8\uB9AC",.75,1.3,1),Nt("hips","\uACE8\uBC18",.8,1.35,1),Nt("legLen","\uB2E4\uB9AC \uAE38\uC774",.8,1.25,1),Nt("armLen","\uD314 \uAE38\uC774",.85,1.15,1),Nt("neckLen","\uBAA9 \uAE38\uC774",.6,1.5,1)]}]},{id:"cloth",label:"\uC637",icon:"\u{1F455}",subs:[{id:"top",label:"\uC0C1\uC758",controls:[Qt("top","\uC0C1\uC758",[["none","\uC5C6\uC74C(\uC774\uB108)"],["tee","\uBC18\uD314 \uD2F0"],["longtee","\uAE34\uD314 \uD2F0"],["crop","\uD06C\uB86D \uD0D1"],["hoodie","\uD6C4\uB4DC\uD2F0"],["shirt","\uC154\uCE20"],["knit","\uB2C8\uD2B8"],["sleeveless","\uBBFC\uC18C\uB9E4"],["blouse","\uD37C\uD504 \uBE14\uB77C\uC6B0\uC2A4"],["sailor","\uC138\uC77C\uB7EC"],["tunic","\uD29C\uB2C9","f"],["leather","\uAC00\uC8FD \uAC11\uC637","f"],["plate","\uD310\uAE08 \uD749\uAC11","f"],["techtop","\uD14C\uD06C \uC774\uB108","c"],["mesh","\uB124\uC628 \uBA54\uC26C","c"]],"tee"),ee("topColor","\uC0C9","#ffd1dc"),ee("topColor2","\uD3EC\uC778\uD2B8 \uC0C9","#ffffff"),ee("metalColor","\uAC11\uC637 \uAE08\uC18D \uC0C9 (\uD310\uAE08)","#c8ccd4","metal"),Qt("topPattern","\uBB34\uB2AC",[["plain","\uBB34\uC9C0"],["stripe","\uC904\uBB34\uB2AC"],["check","\uCCB4\uD06C"],["dot","\uB3C4\uD2B8"],["heart","\uD558\uD2B8"],["star","\uBCC4"]],"plain")]},{id:"bottom",label:"\uD558\uC758",controls:[Qt("bottom","\uD558\uC758",[["jeans","\uCCAD\uBC14\uC9C0"],["slacks","\uC2AC\uB799\uC2A4"],["shorts","\uBC18\uBC14\uC9C0"],["mini","\uBBF8\uB2C8\uC2A4\uCEE4\uD2B8"],["pleats","\uD50C\uB9AC\uCE20"],["longskirt","\uB871\uC2A4\uCEE4\uD2B8"],["jogger","\uC870\uAC70"],["leggings","\uB808\uAE45\uC2A4"],["leatherpants","\uAC00\uC8FD \uBC14\uC9C0","f"],["greaves","\uD310\uAE08 \uB2E4\uB9AC\uAC11\uC637","f"],["cargo","\uD14C\uD06C \uCE74\uACE0","c"]],"jeans"),ee("bottomColor","\uC0C9","#5b7fb8"),Qt("bottomPattern","\uBB34\uB2AC",[["plain","\uBB34\uC9C0"],["check","\uCCB4\uD06C"],["stripe","\uC904\uBB34\uB2AC"]],"plain")]},{id:"dress",label:"\uC6D0\uD53C\uC2A4\xB7\uB85C\uBE0C",controls:[Qt("dress","\uC6D0\uD53C\uC2A4",[["none","\uC5C6\uC74C"],["aline","A\uB77C\uC778"],["minidress","\uBBF8\uB2C8"],["gown","\uB4DC\uB808\uC2A4"],["overall","\uBA5C\uBE75","d"],["robe","\uB9C8\uBC95\uC0AC \uB85C\uBE0C","f"],["priest","\uC131\uC9C1\uC790 \uB85C\uBE0C","f"],["bodysuit","\uC0AC\uC774\uBC84 \uBC14\uB514\uC218\uD2B8","c"]],"none"),ee("dressColor","\uC0C9","#c8b6ff"),ee("dressColor2","\uD3EC\uC778\uD2B8 \uC0C9","#d4af37")]},{id:"outer",label:"\uC544\uC6B0\uD130",controls:[Qt("outer","\uC544\uC6B0\uD130",[["none","\uC5C6\uC74C"],["cardigan","\uAC00\uB514\uAC74"],["jacket","\uC7AC\uD0B7"],["coat","\uB871\uCF54\uD2B8"],["cloak","\uB9DD\uD1A0","f"],["hoodcloak","\uD6C4\uB4DC \uB9DD\uD1A0","f"],["techjacket","\uD14C\uD06C\uC6E8\uC5B4 \uC7AC\uD0B7","c"],["puffer","\uB124\uC628 \uD328\uB529","c"]],"none"),ee("outerColor","\uC0C9","#3d4250"),ee("outerColor2","\uC548\uAC10\xB7\uD3EC\uC778\uD2B8","#8a2a3a")]},{id:"shoes",label:"\uC2E0\uBC1C",controls:[Qt("shoes","\uC2E0\uBC1C",[["sneakers","\uC6B4\uB3D9\uD654"],["maryjane","\uBA54\uB9AC\uC81C\uC778"],["boots","\uBD80\uCE20"],["longboots","\uB871\uBD80\uCE20"],["sandals","\uC0CC\uB4E4"],["barefoot","\uB9E8\uBC1C"],["leatherboots","\uAC00\uC8FD \uBD80\uCE20","f"],["sabatons","\uD310\uAE08 \uBD80\uCE20","f"],["platform","\uB124\uC628 \uD50C\uB7AB\uD3FC","c"]],"sneakers"),ee("shoeColor","\uC0C9","#ffffff"),ee("shoeColor2","\uBC11\uCC3D\xB7\uD3EC\uC778\uD2B8","#ff9fbf")]},{id:"gloves",label:"\uC7A5\uAC11",controls:[Qt("gloves","\uC7A5\uAC11",[["none","\uC5C6\uC74C"],["gloves","\uC7A5\uAC11"],["fingerless","\uC190\uAC00\uB77D \uC5C6\uB294"],["gauntlet","\uAC74\uD2C0\uB9BF","f"],["neon","\uB124\uC628 \uC7A5\uAC11","c"]],"none"),ee("gloveColor","\uC0C9","#3d4250")]}]},{id:"acc",label:"\uC561\uC138\uC11C\uB9AC",icon:"\u{1F380}",subs:[{id:"head",label:"\uBA38\uB9AC",controls:[Qt("headAcc","\uBA38\uB9AC \uC7A5\uC2DD",[["none","\uC5C6\uC74C"],["ribbon","\uB9AC\uBCF8"],["band","\uBA38\uB9AC\uB760"],["beanie","\uBE44\uB2C8"],["cap","\uBCFC\uCEA1"],["beret","\uBCA0\uB808\uBAA8"],["flower","\uD654\uAD00"],["catears","\uACE0\uC591\uC774 \uADC0"],["bunny","\uD1A0\uB07C \uADC0"],["headphones","\uD5E4\uB4DC\uD3F0"],["witch","\uB9C8\uB140 \uBAA8\uC790","f"],["circlet","\uC11C\uD074\uB9BF","f"],["crown","\uC655\uAD00","f"],["tiara","\uD2F0\uC544\uB77C","f"],["halo","\uB124\uC628 \uD5E4\uC77C\uB85C","c"],["antenna","\uC548\uD14C\uB098","c"]],"none"),ee("headAccColor","\uC0C9","#ff9fbf"),ee("gemColor","\uBCF4\uC11D\xB7\uBC1C\uAD11 \uC0C9","#2ff5ff","neon")]},{id:"faceacc",label:"\uC5BC\uAD74",controls:[Qt("faceAcc","\uC5BC\uAD74 \uC7A5\uC2DD",[["none","\uC5C6\uC74C"],["round","\uB3D9\uADF8\uB780 \uC548\uACBD"],["square","\uC0AC\uAC01 \uC548\uACBD"],["sun","\uC120\uAE00\uB77C\uC2A4"],["heart","\uD558\uD2B8 \uC120\uAE00\uB77C\uC2A4"],["monocle","\uBAA8\uB178\uD074","f"],["visor","\uBC14\uC774\uC800","c"],["goggles","\uB124\uC628 \uACE0\uAE00","c"],["mask","LED \uB9C8\uC2A4\uD06C","c"]],"none"),ee("faceAccColor","\uC0C9","#1f1f24")]},{id:"jewel",label:"\uC7A5\uC2E0\uAD6C",controls:[Qt("earring","\uADC0\uAC78\uC774",[["none","\uC5C6\uC74C"],["pearl","\uC9C4\uC8FC"],["hoop","\uB9C1"],["star","\uBCC4 \uB4DC\uB86D"],["feather","\uAE43\uD138","f"],["neonbar","\uB124\uC628 \uBC14","c"]],"none"),Qt("necklace","\uBAA9",[["none","\uC5C6\uC74C"],["pendant","\uD39C\uB358\uD2B8"],["choker","\uCD08\uCEE4"],["scarf","\uBAA9\uB3C4\uB9AC"],["amulet","\uC544\uBBAC\uB81B","f"],["neonchoker","\uB124\uC628 \uCD08\uCEE4","c"]],"none"),ee("jewelColor","\uC0C9","#d4af37","metal")]},{id:"back",label:"\uB4F1",controls:[Qt("backAcc","\uB4F1 \uC7A5\uC2DD",[["none","\uC5C6\uC74C"],["backpack","\uBC31\uD329"],["angel","\uCC9C\uC0AC \uB0A0\uAC1C"],["fairy","\uC694\uC815 \uB0A0\uAC1C","f"],["devil","\uBC15\uC950 \uB0A0\uAC1C","f"],["quiver","\uD654\uC0B4\uD1B5","f"],["jetpack","\uD640\uB85C \uB0A0\uAC1C","c"]],"none"),ee("backAccColor","\uC0C9","#ffffff")]},{id:"prop",label:"\uC18C\uD488",controls:[Qt("prop","\uC190\uC5D0 \uB4E0 \uAC83",[["none","\uC5C6\uC74C"],["bouquet","\uAF43\uB2E4\uBC1C"],["icecream","\uC544\uC774\uC2A4\uD06C\uB9BC"],["phone","\uD734\uB300\uD3F0"],["balloon","\uD558\uD2B8 \uD48D\uC120"],["staff","\uB9C8\uBC95 \uC9C0\uD321\uC774","f"],["sword","\uC7A5\uAC80","f"],["dagger","\uB2E8\uAC80","f"],["bow","\uD65C","f"],["book","\uB9C8\uBC95\uC11C","f"],["lantern","\uB4F1\uBD88","f"],["holotab","\uD640\uB85C \uD0DC\uBE14\uB9BF","c"],["katana","\uB124\uC628 \uCE74\uD0C0\uB098","c"],["holoorb","\uD640\uB85C \uAD6C\uCCB4","c"]],"none"),Qt("propL","\uC67C\uC190",[["none","\uC5C6\uC74C"],["shield","\uBC29\uD328","f"],["potion","\uBB3C\uC57D","f"],["drink","\uC74C\uB8CC"],["holoorb","\uD640\uB85C \uAD6C\uCCB4","c"]],"none"),ee("propColor","\uC0C9","#c8ccd4","metal"),ee("propGlow","\uBC1C\uAD11 \uC0C9","#2ff5ff","neon")]}]},{id:"fantasy",label:"\uC885\uC871",icon:"\u{1F409}",concept:"f",subs:[{id:"race",label:"\uC885\uC871",controls:[{k:"race",t:"preset",label:"\uC885\uC871 \uD504\uB9AC\uC14B (\uB204\uB974\uBA74 \uD55C \uBC88\uC5D0 \uC801\uC6A9)",opts:[["human","\uC778\uAC04"],["elf","\uC5D8\uD504"],["tiefling","\uD2F0\uD50C\uB9C1"],["dwarf","\uB4DC\uC6CC\uD504"],["halforc","\uD558\uD504\uC624\uD06C"],["dragon","\uC6A9\uD608\uC871"],["halfling","\uD558\uD50C\uB9C1"]],def:"human"}]},{id:"horns",label:"\uBFD4\xB7\uAF2C\uB9AC",controls:[Qt("horns","\uBFD4",[["none","\uC5C6\uC74C"],["up","\uC704\uB85C \uC19F\uC740"],["back","\uB4A4\uB85C \uD71C"],["ram","\uC22B\uC591 \uBFD4"],["small","\uC791\uC740 \uBFD4"],["unicorn","\uC678\uBFD4"]],"none"),Nt("hornSize","\uBFD4 \uD06C\uAE30",.5,1.6,1),ee("hornColor","\uBFD4 \uC0C9","#3a2a3a","metal"),Qt("tail","\uAF2C\uB9AC",[["none","\uC5C6\uC74C"],["devil","\uC545\uB9C8 \uAF2C\uB9AC"],["lizard","\uB3C4\uB9C8\uBC40"],["cat","\uACE0\uC591\uC774"],["fox","\uC5EC\uC6B0"]],"none"),ee("tailColor","\uAF2C\uB9AC \uC0C9","#b03a48","skinF")]},{id:"tusk",label:"\uC5C4\uB2C8\xB7\uBE44\uB298",controls:[Nt("tusks","\uC5C4\uB2C8",0,1,0),Qt("scales","\uBE44\uB298",[["none","\uC5C6\uC74C"],["face","\uC5BC\uAD74 \uAC00\uC7A5\uC790\uB9AC"],["full","\uC804\uC2E0"]],"none"),ee("scaleColor","\uBE44\uB298 \uC0C9","#3f8f6a","skinF")]}]},{id:"cyber",label:"\uC0AC\uC774\uBCF4\uADF8",icon:"\u{1F916}",concept:"c",subs:[{id:"implant",label:"\uC784\uD50C\uB780\uD2B8",controls:[Qt("faceLines","\uC5BC\uAD74 \uB77C\uC778",[["none","\uC5C6\uC74C"],["cheek","\uBCFC \uB77C\uC778"],["jaw","\uD131 \uB77C\uC778"],["full","\uC804\uCCB4 \uD68C\uB85C"]],"none"),Qt("ledEye","LED \uB208",[["none","\uC5C6\uC74C"],["left","\uC67C\uCABD"],["right","\uC624\uB978\uCABD"],["both","\uC591\uCABD"]],"none"),Qt("mechArm","\uAE30\uACC4 \uD314",[["none","\uC5C6\uC74C"],["left","\uC67C\uD314"],["right","\uC624\uB978\uD314"],["both","\uC591\uD314"]],"none"),Ki("earImplant","\uADC0 \uC784\uD50C\uB780\uD2B8"),Ki("neckPort","\uBAA9 \uD3EC\uD2B8")]},{id:"neon",label:"\uB124\uC628 \uC0C9",controls:[ee("cyberColor","\uC784\uD50C\uB780\uD2B8 \uBC1C\uAD11 \uC0C9","#2ff5ff","neon"),ee("cyberMetal","\uAE08\uC18D \uC0C9","#8a8f99","metal")]}]},{id:"pose",label:"\uD3EC\uC988",icon:"\u{1F483}",subs:[{id:"pose",label:"\uD3EC\uC988",controls:[Qt("pose","\uD3EC\uC988",[["idle","\uAE30\uBCF8"],["wave","\uC190 \uD754\uB4E4\uAE30"],["hips","\uD5C8\uB9AC\uC5D0 \uC190"],["peace","\uBE0C\uC774"],["heart","\uBA38\uB9AC \uC704 \uD558\uD2B8"],["shy","\uC218\uC90D\uAC8C"],["jump","\uC810\uD504"],["ready","\uC804\uD22C \uC900\uBE44","f"],["cast","\uB9C8\uBC95 \uC2DC\uC804","f"],["cool","\uCFE8\uD558\uAC8C","c"]],"idle"),Nt("headTilt","\uACE0\uAC1C \uAE30\uC6B8\uAE30",-.4,.4,0),Nt("headTurn","\uACE0\uAC1C \uB3CC\uB9AC\uAE30",-.6,.6,0),Ki("anim","\uC228\uC26C\uAE30\xB7\uAE5C\uBE61\uC784",!0)]},{id:"stage",label:"\uBB34\uB300",controls:[Qt("stage","\uBC30\uACBD",[["auto","\uCEE8\uC149 \uB530\uB77C"],["pastel","\uD30C\uC2A4\uD154"],["white","\uD654\uC774\uD2B8"],["night","\uBC24"],["tavern","\uD0C0\uBC84\uB098","f"],["neon","\uB124\uC628","c"]],"auto")]}]}],Jr={human:{earStyle:"normal",horns:"none",tail:"none",tusks:0,scales:"none",bodyPreset:"custom"},elf:{earStyle:"longelf",horns:"none",tail:"none",tusks:0,scales:"none",height:1.08,width:.9,eyeShape:"almond",earSize:1},tiefling:{earStyle:"elf",horns:"back",tail:"devil",tusks:0,scales:"none",skin:"#c04050",tailColor:"#a83040",hornColor:"#2a2028",irisColor:"#f0c040",glowEyes:!0,sclera:"#111111"},dwarf:{earStyle:"normal",horns:"none",tail:"none",tusks:0,height:.82,width:1.3,muscle:1.25,legLen:.82,beard:"dwarf",shoulders:1.2},halforc:{earStyle:"elf",earSize:.85,horns:"none",tail:"none",tusks:.8,skin:"#8faf7a",height:1.12,width:1.25,muscle:1.35,shoulders:1.25,jaw:1.15,browStyle:"thick"},dragon:{earStyle:"small",horns:"back",tail:"lizard",tusks:0,scales:"full",skin:"#7fa88a",scaleColor:"#2f6f5a",tailColor:"#4f8f6a",hornColor:"#e8dcc0",irisColor:"#f0c040",irisStyle:"cat",glowEyes:!0},halfling:{earStyle:"round",horns:"none",tail:"none",tusks:0,height:.82,width:1,legLen:.85,headSize:1.1,freckles:.6,shoes:"barefoot"}},ph={petite:{height:.88,width:.9,muscle:.9,shoulders:.92,hips:1,legLen:.95,headSize:1.08},slim:{height:1.08,width:.88,muscle:.9,shoulders:.95,waist:.85,legLen:1.12},basic:{height:1,width:1,muscle:1,shoulders:1,chest:1,waist:1,hips:1,legLen:1,armLen:1},sturdy:{height:.92,width:1.22,muscle:1.2,shoulders:1.15,waist:1.2,legLen:.9},muscle:{height:1.08,width:1.15,muscle:1.38,shoulders:1.28,chest:1.2,waist:.95},chubby:{height:.96,width:1.25,muscle:1.15,waist:1.3,hips:1.25,cheek:.8}};mh=[["d","\uC77C\uC0C1"],["f","\uD310\uD0C0\uC9C0"],["c","\uC0AC\uC774\uBC84\uD391\uD06C"]]});var Ia,La,wu=_n(()=>{Nn();Ia=class extends Ee{constructor(t,e,i,s){super();let r=[],o=[],a=[],l=new G,c=new jt().getNormalMatrix(t.matrixWorld),h=new de;h.makeRotationFromEuler(i),h.setPosition(e);let f=new de;f.copy(h).invert(),p(),this.setAttribute("position",new Xt(r,3)),this.setAttribute("normal",new Xt(o,3)),this.setAttribute("uv",new Xt(a,2));function p(){let d=[],u=new G,y=new G,v=t.geometry,x=v.attributes.position,R=v.attributes.normal;if(v.index!==null){let w=v.index;for(let E=0;E<w.count;E++)u.fromBufferAttribute(x,w.getX(E)),y.fromBufferAttribute(R,w.getX(E)),m(d,u,y)}else for(let w=0;w<x.count;w++)u.fromBufferAttribute(x,w),y.fromBufferAttribute(R,w),m(d,u,y);d=g(d,l.set(1,0,0)),d=g(d,l.set(-1,0,0)),d=g(d,l.set(0,1,0)),d=g(d,l.set(0,-1,0)),d=g(d,l.set(0,0,1)),d=g(d,l.set(0,0,-1));for(let w=0;w<d.length;w++){let E=d[w];a.push(.5+E.position.x/s.x,.5+E.position.y/s.y),E.position.applyMatrix4(h),r.push(E.position.x,E.position.y,E.position.z),o.push(E.normal.x,E.normal.y,E.normal.z)}}function m(d,u,y){u.applyMatrix4(t.matrixWorld),u.applyMatrix4(f),y.applyNormalMatrix(c),d.push(new La(u.clone(),y.clone()))}function g(d,u){let y=[],v=.5*Math.abs(s.dot(u));for(let x=0;x<d.length;x+=3){let R=0,w,E,N,Z,b=d[x+0].position.dot(u)-v,M=d[x+1].position.dot(u)-v,V=d[x+2].position.dot(u)-v,J=b>0,L=M>0,O=V>0;switch(R=(J?1:0)+(L?1:0)+(O?1:0),R){case 0:{y.push(d[x]),y.push(d[x+1]),y.push(d[x+2]);break}case 1:{if(J&&(w=d[x+1],E=d[x+2],N=_(d[x],w,u,v),Z=_(d[x],E,u,v)),L){w=d[x],E=d[x+2],N=_(d[x+1],w,u,v),Z=_(d[x+1],E,u,v),y.push(N),y.push(E.clone()),y.push(w.clone()),y.push(E.clone()),y.push(N.clone()),y.push(Z);break}O&&(w=d[x],E=d[x+1],N=_(d[x+2],w,u,v),Z=_(d[x+2],E,u,v)),y.push(w.clone()),y.push(E.clone()),y.push(N),y.push(Z),y.push(N.clone()),y.push(E.clone());break}case 2:{J||(w=d[x].clone(),E=_(w,d[x+1],u,v),N=_(w,d[x+2],u,v),y.push(w),y.push(E),y.push(N)),L||(w=d[x+1].clone(),E=_(w,d[x+2],u,v),N=_(w,d[x],u,v),y.push(w),y.push(E),y.push(N)),O||(w=d[x+2].clone(),E=_(w,d[x],u,v),N=_(w,d[x+1],u,v),y.push(w),y.push(E),y.push(N));break}case 3:break}}return y}function _(d,u,y,v){let x=d.position.dot(y)-v,R=u.position.dot(y)-v,w=x/(x-R);return new La(new G(d.position.x+w*(u.position.x-d.position.x),d.position.y+w*(u.position.y-d.position.y),d.position.z+w*(u.position.z-d.position.z)),new G(d.normal.x+w*(u.normal.x-d.normal.x),d.normal.y+w*(u.normal.y-d.normal.y),d.normal.z+w*(u.normal.z-d.normal.z)))}}},La=class{constructor(t,e){this.position=t,this.normal=e}clone(){return new this.constructor(this.position.clone(),this.normal.clone())}}});function Xe(n){let t=n>>>0||1;return()=>(t^=t<<13,t^=t>>>17,t^=t<<5,(t>>>0)%1e5/1e5)}function Sn(n){return new Wt(n)}function en(n,t,e){return"#"+Sn(n).lerp(Sn(t),e).getHexString()}function xe(n,t){let e=Sn(n),i={};return e.getHSL(i),e.setHSL(i.h,i.s,Re(i.l*t,0,1)),"#"+e.getHexString()}function Vt(n,{segs:t=24,rad:e=8,r:i=.01,rFn:s=null,flat:r=1,outFn:o=null,colors:a=null,closed:l=!1}={}){let c=n.isCurve?n:new ti(n,l,"centripetal"),h=c.computeFrenetFrames(t,l),f=[],p=[],m=[],g=[],_=[],d=a?Sn(a[0]):null,u=a?Sn(a[1]):null,y=new Wt;for(let x=0;x<=t;x++){let R=x/t,w=c.getPointAt(R),E=h.tangents[x],N=h.normals[x].clone(),Z=h.binormals[x].clone();if(o){let M=o(w).clone();M.sub(E.clone().multiplyScalar(M.dot(E))),M.lengthSq()>1e-8&&(M.normalize(),N=M,Z=new G().crossVectors(E,N).normalize())}let b=s?s(R):i;d&&y.copy(d).lerp(u,R);for(let M=0;M<=e;M++){let V=M/e*Math.PI*2,J=Math.cos(V),L=Math.sin(V),O=new G().addScaledVector(N,J*r).addScaledVector(Z,L);f.push(w.x+O.x*b,w.y+O.y*b,w.z+O.z*b);let T=new G().addScaledVector(N,J/Math.max(r,.05)).addScaledVector(Z,L).normalize();p.push(T.x,T.y,T.z),m.push(R,M/e),d&&g.push(y.r,y.g,y.b)}}for(let x=0;x<t;x++)for(let R=0;R<e;R++){let w=x*(e+1)+R,E=(x+1)*(e+1)+R;_.push(w,E,w+1,E,E+1,w+1)}let v=new Ee;return v.setAttribute("position",new Xt(f,3)),v.setAttribute("normal",new Xt(p,3)),v.setAttribute("uv",new Xt(m,2)),d&&v.setAttribute("color",new Xt(g,3)),v.setIndex(_),v}function _1(n){let t=(n||"").trim().slice(-1);if(!t)return!1;let e=t.charCodeAt(0)-44032;return e<0||e>11171?/[13678lmnr0]$/i.test(t):e%28!==0}var X,Re,Rt,Zn,Eu,ur,ei,ni,Ji=_n(()=>{Nn();X=(n=0,t=0,e=0)=>new G(n,t,e),Re=(n,t,e)=>Math.max(t,Math.min(e,n)),Rt=(n,t,e)=>n+(t-n)*e,Zn=n=>n*n*(3-2*n);Eu=(n,t=.15)=>e=>n*(e<.15?Rt(.55,1,e/.15):Rt(1,t,Zn((e-.15)/.85))),ur=(n,t=.25)=>e=>n*Rt(t,1,Math.sin(Math.PI*e)),ei=(n,t=.05)=>e=>n*Rt(1,t,e);ni=(n,t,e)=>n+(_1(n)?t:e)});function dr(n,t){if(vs.has(n))return vs.get(n);let e=t();if(vs.set(n,e),vs.size>80){let i=vs.keys().next().value,s=vs.get(i);vs.delete(i),s.dispose&&s.dispose()}return e}function ji(n,t=n){let e=document.createElement("canvas");return e.width=n,e.height=t,e}function Qi(n,t=!0){let e=new ar(n);return t&&(e.colorSpace=Ze),e.anisotropy=4,e.needsUpdate=!0,e}function y1(n,t){n*=1.25,t=t*1.25+.25;let e=n*n+t*t-1;return e*e*e-n*n*t*t*t<=0}function Au(n,t,e){return dr(`iris|${n}|${t}|${e}`,()=>{let r=ji(128,64),o=r.getContext("2d"),a=o.createImageData(128,64),l=Sn(t),c=l.clone().multiplyScalar(.35),h=l.clone().lerp(new Wt("#ffffff"),.35),f=new Wt(n==="mech"?"#05060a":"#0b0708"),p=new Wt;for(let m=0;m<64;m++)for(let g=0;g<128;g++){let _=m/63,d=g/127*Math.PI*2,u=-Math.cos(d)*_,y=-Math.sin(d)*_;p.copy(l).lerp(c,Math.max(0,y)*.9).lerp(h,Math.max(0,-y-.2)*.8);let v=.5+.5*Math.sin(d*23+_*3);p.multiplyScalar(.9+.12*v),_>.82&&p.lerp(c,(_-.82)/.18*.9);let x=!1;if(n==="heart")x=y1(u/.45,y/.45);else if(n==="cat")x=u*u/(.13*.13)+y*y/(.75*.75)<1;else if(n==="ring")x=_<.3,_>.42&&_<.5&&p.lerp(new Wt("#ffffff"),.55);else if(n==="mech"){x=_<.22;let w=_>.34&&_<.38||_>.6&&_<.63&&Math.sin(d*12)>0||_>.75&&_<.8&&Math.sin(d*30)>.3;p.copy(l).multiplyScalar(.25),w&&p.copy(h),_<.08&&(p.copy(h),x=!1)}else x=_<.42;x&&p.copy(f),n==="sparkle"&&y<-.35&&u>.1&&u<.5&&_<.8&&p.lerp(new Wt("#ffffff"),.25);let R=(m*128+g)*4;a.data[R]=Math.min(255,p.r*255*(1/1)),a.data[R+1]=p.g*255,a.data[R+2]=p.b*255,a.data[R+3]=255}for(let m=0;m<a.data.length;m+=4)for(let g=0;g<3;g++)a.data[m+g]=Math.round(Math.pow(Math.min(1,a.data[m+g]/255),1/2.2)*255);return o.putImageData(a,0,0),Qi(r)})}function Ru(n,t,e,i=[6,3]){return dr(`pat|${n}|${t}|${e}|${i}`,()=>{let r=ji(128),o=r.getContext("2d");if(o.fillStyle=t,o.fillRect(0,0,128,128),o.fillStyle=e,o.strokeStyle=e,n==="stripe")for(let l=0;l<128;l+=32)o.fillRect(0,l,128,14);else if(n==="check"){o.globalAlpha=.5;for(let l=0;l<128;l+=32)o.fillRect(l,0,14,128),o.fillRect(0,l,128,14);o.globalAlpha=1,o.lineWidth=2;for(let l=6;l<128;l+=32)o.beginPath(),o.moveTo(l,0),o.lineTo(l,128),o.stroke()}else if(n==="dot")for(let l=0;l<2;l++)for(let c=0;c<2;c++)o.beginPath(),o.arc(32+c*64+l%2*32-16,32+l*64,11,0,7),o.fill();else if(n==="heart")for(let l=0;l<2;l++)for(let c=0;c<2;c++)bs(o,32+c*64+(l?32:0)-(l?16:0),34+l*64,13);else if(n==="star")for(let l=0;l<2;l++)for(let c=0;c<2;c++)bi(o,32+c*64+(l?16:0),32+l*64,14,6);else if(n==="denim"){let l=Xe(7);for(let c=0;c<900;c++)o.globalAlpha=.08,o.fillStyle=l()>.5?"#ffffff":"#000000",o.fillRect(l()*128,l()*128,3,1)}let a=Qi(r);return a.wrapS=a.wrapT=er,a.repeat.set(i[0],i[1]),a})}function bs(n,t,e,i){n.beginPath(),n.moveTo(t,e+i*.9),n.bezierCurveTo(t-i*1.4,e-i*.1,t-i*.7,e-i*1.2,t,e-i*.4),n.bezierCurveTo(t+i*.7,e-i*1.2,t+i*1.4,e-i*.1,t,e+i*.9),n.fill()}function bi(n,t,e,i,s,r=5,o=-Math.PI/2){n.beginPath();for(let a=0;a<r*2;a++){let l=o+a*Math.PI/r,c=a%2?s:i;n.lineTo(t+Math.cos(l)*c,e+Math.sin(l)*c)}n.closePath(),n.fill()}function Cu(n,t,e=8){return dr(`scale|${n}|${t}|${e}`,()=>{let s=ji(128),r=s.getContext("2d");r.fillStyle=xe(t,.7),r.fillRect(0,0,128,128);let o=16;for(let l=-1;l<128/o*2+1;l++)for(let c=-1;c<128/(o*2)+1;c++){let h=c*o*2+l%2*o,f=l*o*.9,p=r.createRadialGradient(h,f-o*.3,1,h,f,o*1.1);p.addColorStop(0,en(t,"#ffffff",.25)),p.addColorStop(.7,t),p.addColorStop(1,xe(t,.55)),r.fillStyle=p,r.beginPath(),r.arc(h,f,o*1.05,0,Math.PI),r.fill()}let a=Qi(s);return a.wrapS=a.wrapT=er,a.repeat.set(e,e),a})}function Pu(n,t){let i=ji(512),s=i.getContext("2d"),r=ji(512),o=r.getContext("2d");o.fillStyle="#000",o.fillRect(0,0,512,512);let a=g=>(g/1.25*.5+.5)*512,l=g=>(.5-g/1.25*.5)*512,c=g=>g/2.5*512,h=g=>{g(s,!1),g(o,!0)},f=Xe(1234);if(n.scales!=="none"){s.save();let g=n.scaleColor;for(let _=0;_<420;_++){let d=(f()*2-1)*1.15,u=(f()*2-1)*1.1,y=Math.abs(d),v=n.scales==="full"?Math.max(.15,(y-.25)*1.3):Math.max(0,(y-.5)*2.2)+Math.max(0,u-.55)*(y>.3?1.5:0);if(f()>v||Math.abs(u+.05)<.25&&y<.6)continue;s.globalAlpha=Math.min(.85,v);let x=s.createRadialGradient(a(d),l(u)-2,1,a(d),l(u),c(.06));x.addColorStop(0,en(g,"#ffffff",.3)),x.addColorStop(1,xe(g,.6)),s.fillStyle=x,s.beginPath(),s.arc(a(d),l(u),c(.055),0,Math.PI),s.fill()}s.restore()}if(n.blushStyle!=="none"){let g=.5*n.blushSpacing,_=-.3+n.blushY,d=n.blushSize*.19;s.save(),s.globalAlpha=n.blushAlpha;for(let u of[-1,1]){let y=a(u*g),v=l(_);if(n.blushStyle==="round"||n.blushStyle==="oval"){s.save(),s.translate(y,v),n.blushStyle==="oval"&&s.scale(1.5,.8);let x=s.createRadialGradient(0,0,0,0,0,c(d));x.addColorStop(0,n.blushColor),x.addColorStop(1,n.blushColor+"00"),s.fillStyle=x,s.beginPath(),s.arc(0,0,c(d),0,7),s.fill(),s.restore()}else if(n.blushStyle==="lines"){s.strokeStyle=xe(n.blushColor,.85),s.lineWidth=c(.022)*n.blushSize,s.lineCap="round";for(let R=-1;R<=1;R++)s.beginPath(),s.moveTo(y+c(R*.08*n.blushSize)-c(.03),v+c(.05*n.blushSize)),s.lineTo(y+c(R*.08*n.blushSize)+c(.03),v-c(.05*n.blushSize)),s.stroke();let x=s.createRadialGradient(y,v,0,y,v,c(d));x.addColorStop(0,n.blushColor+"99"),x.addColorStop(1,n.blushColor+"00"),s.fillStyle=x,s.beginPath(),s.arc(y,v,c(d),0,7),s.fill()}else n.blushStyle==="heart"&&(s.fillStyle=n.blushColor,bs(s,y,v,c(d*.55)))}if(n.blushStyle==="wide"){s.save(),s.translate(a(0),l(_+.04)),s.scale(3.2,.7);let u=s.createRadialGradient(0,0,0,0,0,c(d));u.addColorStop(0,n.blushColor),u.addColorStop(1,n.blushColor+"00"),s.fillStyle=u,s.beginPath(),s.arc(0,0,c(d),0,7),s.fill(),s.restore()}s.restore()}if(n.freckles>0){let g=Math.round(n.freckles*70);s.fillStyle=n.freckleColor;for(let _=0;_<g;_++){let d=(f()*2-1)*.62,u=-.22-f()*.22+Math.abs(d)*.15;s.globalAlpha=.4+f()*.4,s.beginPath(),s.arc(a(d),l(u),c(.009+f()*.01)*n.freckleSize,0,7),s.fill()}s.globalAlpha=1}let p={eyeL:[[.36,-.28]],eyeR:[[-.36,-.28]],lip:[[.24,-.66]],cheek:[[-.5,-.45]],many:[[.36,-.28],[-.24,-.68],[.55,-.5]]}[n.mole]||[];s.fillStyle="#4a2a20";for(let[g,_]of p)s.beginPath(),s.arc(a(g),l(_+n.eyeY*.6),c(.016)*n.moleSize,0,7),s.fill();if(n.shadowStyle!=="none")for(let g of t.eyes){let _=a(g.x),d=l(g.y),u=c(g.r),y=Math.sign(g.x)||1;s.save(),s.globalAlpha=n.shadowAlpha;let v=(x,R,w,E,N,Z=1)=>{s.save(),s.translate(_+x,d+R),s.scale(w/E,1);let b=s.createRadialGradient(0,0,0,0,0,E);b.addColorStop(0,N),b.addColorStop(1,N+"00"),s.globalAlpha=n.shadowAlpha*Z,s.fillStyle=b,s.beginPath(),s.arc(0,0,E,0,7),s.fill(),s.restore()};if(n.shadowStyle==="soft"&&v(0,-u*.55,u*1.6,u*.9,n.shadowColor),n.shadowStyle==="smoky"&&(v(y*u*.25,-u*.3,u*1.9,u*1.25,n.shadowColor),v(y*u*.4,u*.4,u*1.4,u*.6,xe(n.shadowColor,.7),.7)),n.shadowStyle==="crease"&&(v(0,-u*.4,u*1.4,u*.7,n.shadowColor,.6),s.strokeStyle=xe(n.shadowColor,.6),s.lineWidth=u*.12,s.beginPath(),s.ellipse(_,d-u*.25,u*1.25,u*1.05,0,Math.PI*1.08,Math.PI*1.92),s.stroke()),n.shadowStyle==="under"&&v(0,u*1,u*1.2,u*.35,en(n.shadowColor,"#ffffff",.4)),n.shadowStyle==="glitter"){v(0,-u*.5,u*1.5,u*.9,n.shadowColor,.7),s.fillStyle="#ffffff";for(let x=0;x<28;x++){let R=Math.PI*(1.05+f()*.9),w=u*(.9+f()*.5);s.globalAlpha=.5+f()*.5,s.beginPath(),s.arc(_+Math.cos(R)*w*1.2,d+Math.sin(R)*w*.8,1+f()*2,0,7),s.fill()}v(0,u*1,u*1.1,u*.3,"#ffffff",.5)}n.shadowStyle==="neon"&&h((x,R)=>{x.save(),x.globalAlpha=R?1:n.shadowAlpha,x.fillStyle=n.shadowColor,x.beginPath(),x.moveTo(_-y*u*1,d-u*.4),x.lineTo(_+y*u*1.9,d-u*1.1),x.lineTo(_+y*u*1.2,d-u*.2),x.closePath(),x.fill(),x.restore()}),s.restore()}let m=n.markStyle;if(m!=="none"){let g=(_,d)=>{if(d&&!n.markGlow)return;_.save(),_.globalAlpha=d?1:n.markAlpha,_.strokeStyle=_.fillStyle=n.markColor,_.lineCap="round",_.lineJoin="round";let u=y=>_.lineWidth=c(y);if(m==="star"&&(bi(_,a(.42),l(-.28+n.eyeY),c(.06),c(.026)),bi(_,a(.53),l(-.17+n.eyeY),c(.03),c(.013))),m==="tears")for(let y=0;y<3;y++)_.beginPath(),_.arc(a(-.33-y*.05),l(-.3-y*.07+n.eyeY),c(.016),0,7),_.fill();if(m==="rune"&&(u(.018),_.beginPath(),_.moveTo(a(0),l(.68)),_.lineTo(a(0),l(.4)),_.moveTo(a(-.1),l(.6)),_.lineTo(a(0),l(.52)),_.lineTo(a(.1),l(.6)),_.moveTo(a(-.07),l(.44)),_.lineTo(a(.07),l(.44)),_.stroke(),_.beginPath(),_.arc(a(0),l(.54),c(.17),0,7),_.stroke()),m==="war"){for(let y of[-1,1])for(let v=0;v<2;v++)u(.045),_.beginPath(),_.moveTo(a(y*.28),l(-.25-v*.12)),_.lineTo(a(y*.72),l(-.2-v*.12)),_.stroke();u(.05),_.beginPath(),_.moveTo(a(0),l(-.7)),_.lineTo(a(0),l(-.95)),_.stroke()}if(m==="vine"){u(.014);for(let y of[-1,1]){_.beginPath(),_.moveTo(a(y*.42),l(.38)),_.bezierCurveTo(a(y*.75),l(.25),a(y*.52),l(-.05),a(y*.65),l(-.3)),_.stroke();for(let v=0;v<4;v++){let x=.3-v*.17,R=y*(.6+v%2*.05);_.beginPath(),_.ellipse(a(R),l(x),c(.035),c(.016),y*.6,0,7),_.fill()}}_.beginPath(),_.arc(a(0),l(.5),c(.03),0,7),_.fill()}if(m==="tribal"){u(.03),_.beginPath(),_.moveTo(a(-.18),l(-.85)),_.lineTo(a(-.12),l(-1)),_.moveTo(a(0),l(-.82)),_.lineTo(a(0),l(-1.02)),_.moveTo(a(.18),l(-.85)),_.lineTo(a(.12),l(-1)),_.stroke();for(let y of[-1,1])_.beginPath(),_.moveTo(a(y*.25),l(.48)),_.lineTo(a(y*.45),l(.3)),_.lineTo(a(y*.6),l(.42)),_.stroke()}if(m==="circuit"&&Tu(_,a,l,c,.8),m==="barcode")for(let y=0;y<14;y++){let v=[.006,.012,.018][y%3];_.fillRect(a(-.62+y*.022),l(-.36),c(v),c(.13))}if(m==="glitch")for(let y=0;y<6;y++)_.globalAlpha=(d?1:n.markAlpha)*(.4+y%3*.25),_.fillRect(a(-.7+y*.37%.8),l(.1-y*.09),c(.25+y%2*.3),c(.025));_.restore()};g(s,!1),g(o,!0)}if(n.faceLines!=="none"){let g=(_,d)=>{_.save(),_.lineCap="round";let u=(y,v)=>{if(_.strokeStyle=v,_.lineWidth=c(y),n.faceLines==="cheek"||n.faceLines==="full")for(let x of[-1,1])_.beginPath(),_.moveTo(a(x*.3),l(-.33)),_.lineTo(a(x*.55),l(-.33)),_.lineTo(a(x*.7),l(-.15)),_.stroke();if(n.faceLines==="jaw"||n.faceLines==="full")for(let x of[-1,1])_.beginPath(),_.moveTo(a(x*.15),l(-.92)),_.lineTo(a(x*.45),l(-.75)),_.lineTo(a(x*.66),l(-.45)),_.stroke();n.faceLines==="full"&&(_.beginPath(),_.moveTo(a(0),l(.75)),_.lineTo(a(0),l(.42)),_.lineTo(a(.12),l(.32)),_.stroke(),Tu(_,a,l,c,.55,-1))};d||u(.03,"#2a2d34"),u(.012,n.cyberColor),_.restore()};g(s,!1),g(o,!0)}return{map:Qi(i),glow:Qi(r)}}function Tu(n,t,e,i,s,r=1){n.lineWidth=i(.012);let o=[[.25,-.42],[.45,-.42],[.55,-.32],[.72,-.32]];n.beginPath(),o.forEach(([a,l],c)=>c?n.lineTo(t(r*a),e(l)):n.moveTo(t(r*a),e(l))),n.stroke(),n.beginPath(),n.moveTo(t(r*.45),e(-.42)),n.lineTo(t(r*.52),e(-.55)),n.lineTo(t(r*.68),e(-.55)),n.stroke();for(let[a,l]of[[.25,-.42],[.72,-.32],[.68,-.55]])n.beginPath(),n.arc(t(r*a),e(l),i(.02*s+.008),0,7),n.fill()}function Iu(){return dr("glowsprite",()=>{let n=ji(64),t=n.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.3,"rgba(255,255,255,0.5)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Qi(n)})}function Lu(n){return dr(`holo|${n}`,()=>{let t=ji(128,96),e=t.getContext("2d");e.fillStyle=n+"33",e.fillRect(0,0,128,96),e.strokeStyle=n,e.fillStyle=n,e.lineWidth=2,e.strokeRect(3,3,122,90);for(let i=0;i<5;i++)e.fillRect(10,12+i*12,30+i*37%60,4);e.beginPath(),e.arc(96,56,20,0,7),e.stroke(),e.beginPath(),e.moveTo(96,56),e.lineTo(110,44),e.stroke();for(let i=0;i<6;i++)e.fillRect(12+i*9,84-i*4,6,i*4+2);return Qi(t)})}function Du(n){return dr(`mask|${n}`,()=>{let t=ji(128,64),e=t.getContext("2d");e.fillStyle="#101218",e.fillRect(0,0,128,64),e.fillStyle=n;for(let i=0;i<8;i++)for(let s=0;s<16;s++){let r=Math.abs(i-4-Math.sin(s*.6)*0)<1.2&&s>3&&s<12||i===5&&(s===4||s===11)?1:0;e.globalAlpha=r?1:.12,e.fillRect(s*8+1,i*8+1,6,6)}return Qi(t)})}var vs,jr=_n(()=>{Nn();Ji();vs=new Map});function Nu(n,t,e,i){let s=t.R,r=t.D,o=n.hairVolume,a=n.hairLen,l=Xe(77),c=n.ombre,h=n.hairShine,f=e.phys(c?"#ffffff":n.hairColor,{r:.72-h*.25,sheen:.2+h*.25,sheenColor:en(n.hairColor,"#ffffff",.3),cc:h*.2,ccr:.4});f.vertexColors=c,n.hairGlow&&(f.emissive.set(n.hairColor),f.emissiveIntensity=.55),f.side=ae,f.envMapIntensity=.5;let p=e.std(xe(n.hairColor,.9),{r:.95});p.transparent=!0,p.opacity=.85;let m=Sn(n.hairColor),g=Sn(n.hairColor2),_=D=>{if(!c)return D;let U=D.attributes.position,Y=new Float32Array(U.count*3),B=new Wt;for(let I=0;I<U.count;I++){let k=Zn(Re((.1*s-U.getY(I))/(2.6*s),0,1));B.copy(m).lerp(g,k),Y.set([B.r,B.g,B.b],I*3)}return D.setAttribute("color",new Qe(Y,3)),D},d=(D,U,Y=.06)=>r(Da(D,U)).multiplyScalar(1+Y*o),u=D=>(D.y>0?D.clone():X(D.x,D.y*.3,D.z)).normalize(),y=(D,U,Y={})=>{let B=Vt(D,{segs:Y.segs??Math.min(48,8+D.length*3),rad:Y.rad??8,rFn:Y.rFn??Eu(U*s*o,Y.tip??.15),flat:Y.flat??.42,outFn:Y.round?null:u}),I=new Gt(_(B),f);return i.add(I),I},v=(D,U)=>{let Y=new Gt(_(new Te(U,14,10).translate(D.x,D.y,D.z)),f);return i.add(Y),Y},x=(D,U)=>{let Y=D.y+t.headY,B=Y-t.pelvisY;if(B>t.T*1.02){let Q=Math.hypot(D.x,D.z),it=t.neckR+.02;if(Q<it){let rt=it/Math.max(Q,1e-4);D.x*=rt,D.z*=rt}return D}let I=t.tR(Re(B,-.08,t.T))+.03,k=I*t.depth+.025;B>t.T*.72&&(I=Rt(I,t.shoulderX+t.uArm*1.4,Zn(Re((B-t.T*.72)/(t.T*.12),0,1))));let q=I*(U?.8:.82);D.x=Re(D.x,-q,q);let W=Math.sqrt(Math.max(.05,1-(D.x/I)**2))*k+.008;return U?D.z=Math.max(D.z,W):D.z=Math.min(D.z,-W),D},R=(D,U,Y={})=>{let B=D[D.length-1].clone(),I=X(B.x,0,B.z).normalize(),k=X(-I.z,0,I.x),q=.22*s,W=Math.max(1,Math.ceil((B.y-U)/q)),Q=Y.front??!1;for(let it=1;it<=W;it++){let rt=it/W,st=Rt(B.y,U,rt),$=(Y.flare??.12)*s*Math.sin(rt*Math.PI*.6)*o,A=(Y.wave??n.hairWave)*.09*s*Math.sin(rt*W*.9+(Y.phase??0))*Math.min(1,rt*3),lt=X(B.x+I.x*$+k.x*A,st,B.z+I.z*$+k.z*A);if(Y.curl&&rt>.7){let ft=(rt-.7)/.3;lt.addScaledVector(I,-Y.curl*.16*s*ft*ft),lt.y+=Y.curl*.05*s*ft}D.push(Y.noDrape?lt:x(lt,Q))}return D},w=(D,U,Y,B,I=.06,k=.09,q=7)=>{let W=[];for(let Q=0;Q<=q;Q++){let it=Q/q;W.push(d(Rt(D,Y,it),Rt(U,B,it),Rt(I,k,it)))}return W},E=D=>{let U=D.n;for(let Y=0;Y<U;Y++){let B=(Y+.5)/U,I=Rt(D.a0,D.a1,B)+(l()-.5)*(D.jit??.04),k=typeof D.p1=="function"?D.p1(I):D.p1,q=w(D.p0??.3,I,k,I,D.off0??.05,D.off1??.1),W=typeof D.endY=="function"?D.endY(I,l):D.endY;W!==void 0&&W<q[q.length-1].y&&R(q,W,{front:D.front?D.front(I):!1,curl:D.curl,flare:D.flare,wave:D.wave,phase:Y*1.7}),y(q,D.w??.16,{tip:D.tip,round:D.round,flat:D.flat})}},N=(D,U,Y=.11)=>{let B=new Gt(new Zt(Y*s,.035*s,8,20),e.std(n.headAccColor||"#ff9fbf",{r:.6}));B.position.copy(D),B.quaternion.setFromUnitVectors(X(0,0,1),U.clone().normalize()),i.add(B)},Z=(D,U,Y,B={})=>{let I=B.n??7;for(let k=0;k<I;k++){let q=k/I*Math.PI*2,W=(B.spread??.08)*s,Q=X(Math.cos(q)*W,Math.sin(q)*W*.6,Math.sin(q)*W*.5),it=D.clone().add(Q.clone().multiplyScalar(.3)),rt=D.clone().add(U.clone().multiplyScalar(.3*s)).add(Q),st=[it,rt];R(st,Y,{front:B.front,flare:B.flare??.05,wave:(B.wave??n.hairWave)+.1,phase:k,noDrape:B.noDrape,curl:B.curl}),y(st,B.w??.13,{tip:.08})}},b=(D,U,Y={})=>{let B=[D.clone()];R(B,U,{front:Y.front,flare:.02,wave:0});let I=new ti(B),k=Math.max(4,Math.round(I.getLength()/(.14*s)));for(let W=0;W<=k;W++){let Q=W/k,it=I.getPointAt(Q),rt=I.getTangentAt(Q),st=s*(Y.size??.13)*Rt(1,.6,Q)*o,$=new Te(1,12,10),A=new Gt(_($.scale(st*1.15,st*1,st*.75).rotateZ(W%2?.5:-.5).translate(0,0,0)),f);A.position.copy(it).add(X((W%2?1:-1)*st*.35,0,0)),A.quaternion.setFromUnitVectors(X(0,-1,0),rt),i.add(A)}let q=I.getPointAt(1);N(q,X(0,1,0),.06),y([q,q.clone().add(X(0,-.15*s,0)),q.clone().add(X(.02*s,-.3*s,0))],.08,{tip:.1})},M=n.backHair,V=1.6+n.hairline*-1.2;if(M!=="bald"){let D=M==="buzz"||M==="mohawk",U=new Te(1,48,32,0,Math.PI*2,0,D?V-.05:V);U.rotateY(-Math.PI/2),U.rotateX(-.5);let Y=U.attributes.position,B=X(),I=D?1.012:1.045+.03*(o-1);for(let k=0;k<Y.count;k++){B.fromBufferAttribute(Y,k).normalize();let q=r(B).multiplyScalar(I);Y.setXYZ(k,q.x,q.y,q.z)}U.computeVertexNormals(),M==="undercut"?i.add(new Gt(U.clone(),p)):i.add(new Gt(_(U),D?p:f))}let J=D=>Math.abs(D)<Math.PI/2+.25,L=a;switch(M){case"short":E({n:16,a0:-1.9,a1:1.9,p0:.5,p1:D=>1.55+.35*Math.cos(D),endY:D=>Math.abs(D)<1?-.6*s*L:void 0,w:.17,tip:.3,off0:.05,off1:.08});break;case"pixie":E({n:14,a0:-1.9,a1:1.9,p0:.5,p1:D=>1.5+.3*Math.cos(D),w:.15,tip:.2});for(let D=0;D<14;D++){let U=l()*Math.PI*2,Y=.25+l()*.6,B=d(Y,U,.05),I=d(Y+.35,U+.2,.2+l()*.08);y([B,B.clone().lerp(I,.5).add(X(0,.03*s,0)),I],.11,{tip:.05})}break;case"bob":E({n:34,a0:-2.05,a1:2.05,p0:.3,p1:1.75,endY:-.98*s*L,w:.21,curl:.8,flare:.08,tip:.5});break;case"lob":E({n:34,tip:.35,a0:-2.05,a1:2.05,p0:.3,p1:1.75,endY:-1.95*s*L,w:.19,curl:-.8,flare:.15,front:D=>Math.abs(D)>1.75});break;case"long":case"halfup":case"wavy":if(E({n:36,tip:.3,a0:-2.05,a1:2.05,p0:.3,p1:1.75,endY:D=>(-4.2+(M==="wavy"?.3:0)-Math.cos(D)*.3)*s*L,w:.18,flare:.14,wave:M==="wavy"?.85+n.hairWave:n.hairWave,front:D=>Math.abs(D)>1.8}),M==="halfup"){let D=d(1,0,.12);v(D,.25*s*o),N(D.clone().add(X(0,-.05*s,.08*s)),X(0,.3,-1),.14)}break;case"hime":E({n:28,a0:-1.75,a1:1.75,p0:.3,p1:1.75,endY:-4.3*s*L,w:.19,flare:.08,tip:.85,wave:0});for(let D of[1,-1])for(let U=0;U<4;U++){let Y=D*(1.8+U*.1),B=w(.4,Y,1.7,Y,.06,.1);R(B,-1.05*s,{front:!0,flare:.02,wave:0,noDrape:!0}),y(B,.17,{tip:.9})}break;case"wolf":E({n:22,a0:-2,a1:2,p0:.3,p1:1.6,endY:(D,U)=>(-.8-U()*.5)*s*L,w:.18,tip:.04,flare:.25,curl:-.6}),E({n:16,a0:-1.7,a1:1.7,p0:.6,p1:1.85,endY:(D,U)=>(-1.8-U()*.7)*s*L,w:.13,tip:.03,flare:.1});break;case"pony":case"highpony":case"sidepony":{E({n:18,a0:-2,a1:2,p0:.25,p1:1.55,w:.18,tip:.6});let D=M==="pony"?d(1.3,0,.1):M==="highpony"?d(.55,0,.12):d(1.4,1.55,.1),U=M==="sidepony"?X(1,-.2,.3):M==="highpony"?X(0,.6,-1):X(0,.2,-1);N(D,U,M==="highpony"?.13:.12),Z(D.clone().addScaledVector(U.clone().normalize(),.06*s),U.normalize(),(M==="highpony"?-2.9:-3.1)*s*L,{front:M==="sidepony",spread:.09,w:.14,n:8});break}case"twin":E({n:18,a0:-2,a1:2,p0:.25,p1:1.55,w:.18,tip:.6});for(let D of[1,-1]){let U=d(1,D*1.5,.1),Y=X(D,.4,-.3).normalize();N(U,Y,.11),Z(U.clone().addScaledVector(Y,.05*s),Y,-3.2*s*L,{spread:.08,w:.13,n:7,wave:n.hairWave+.35,flare:.35})}break;case"bun":case"spacebuns":{E({n:18,a0:-2,a1:2,p0:.25,p1:1.6,w:.18,tip:.6});let D=M==="bun"?[[.35,0]]:[[.62,1.05],[.62,-1.05]];for(let[U,Y]of D){let B=d(U,Y,.2),I=(M==="bun"?.36:.27)*s*o;v(B,I);let k=new Gt(_(new Zt(I*.75,I*.32,10,24)),f);k.position.copy(B).addScaledVector(B.clone().normalize(),-I*.35),k.quaternion.setFromUnitVectors(X(0,0,1),B.clone().normalize()),i.add(k);for(let q=0;q<3;q++){let W=B.clone().add(X((l()-.5)*I,I*.3,(l()-.5)*I));y([W,W.clone().add(X(.1*s*(l()-.5),.15*s,0)),W.clone().add(X(.15*s*(l()-.5),.12*s,.05*s))],.04,{tip:.1})}}break}case"braid":E({n:18,a0:-2,a1:2,p0:.25,p1:1.6,w:.18,tip:.6});{let D=d(1.85,0,.1);N(D,X(0,-.4,-1),.1),b(D,-4*s*L)}break;case"twinbraid":E({n:20,a0:-2,a1:2,p0:.25,p1:1.7,w:.18,tip:.6});for(let D of[1,-1]){let U=d(1.85,D*1.75,.1);b(U,-3.4*s*L,{front:!0,size:.12})}break;case"curly":for(let D=0;D<120;D++){let U=l()*Math.PI*2,Y=Math.acos(1-l()*1.25),B=Da(Y,U);B.applyAxisAngle(X(1,0,0),-.45),!(B.y<-.25&&B.z>0)&&(B.z>.45&&B.y<.55||v(r(B.normalize()).multiplyScalar(1.12*o),(.14+l()*.06)*s))}break;case"afro":for(let D=0;D<150;D++){let U=l()*Math.PI*2,Y=Math.acos(1-l()*1.5),B=Da(Y,U);B.applyAxisAngle(X(1,0,0),-.4),!(B.z>.35&&B.y<.5)&&(B.y<-.5||v(r(B.normalize()).multiplyScalar(1.35+.3*o+l()*.1),(.28+l()*.1)*s))}break;case"dread":E({n:34,a0:-2.1,a1:2.1,p0:.35,p1:1.7,endY:(D,U)=>(-2.6-U()*.8)*s*L,w:.055,round:!0,flat:1,tip:.6,wave:.4,front:D=>Math.abs(D)>1.85});break;case"mohawk":for(let D=0;D<11;D++){let U=D/10,Y=Rt(-.9,1.4,U),B=Y<0?Math.PI:0,I=Math.abs(Y),k=d(I,B,.02),q=(.55+.3*Math.sin(U*Math.PI))*s*o,W=k.clone().normalize(),Q=k.clone().addScaledVector(W,q).add(X(0,0,-.15*s));y([k,k.clone().lerp(Q,.5).add(X(0,.02*s,-.05*s)),Q],.2,{tip:.04,flat:.25})}break;case"undercut":for(let D=0;D<16;D++){let U=Rt(Math.PI-.3,.6,D/15),Y=d(.2+.25*(D%3)/2,U+.6,.06),B=d(1.25,-1.5+D/15*.8,.14),I=d(.6,(U-1)*.5,.2);y([Y,I,B,B.clone().add(X(-.05*s,-.35*s,0))],.2,{tip:.1})}break}let O=n.bangs,T=n.bangLen;if(M==="bald"||M==="buzz")return;let H=Math.acos(Re((t.L.eyes[0].y+.32)/1,-1,1)),z=Math.PI,et=(D,U,Y,B,I={})=>{for(let k=0;k<D;k++){let q=D===1?.5:k/(D-1),W=z+Rt(-U,U,q)+(I.jit?(l()-.5)*I.jit:0),Q=typeof Y=="function"?Y(q,W):Y,it=I.sweep?W+I.sweep(q):W,rt=w(I.p0??.35,I.a0fn?I.a0fn(q):W,Q,it,.06,I.offEnd??.12,8);if(I.inward){let st=rt[rt.length-1];rt.push(st.clone().add(X(0,-.04*s,-.03*s)))}y(rt,B,{tip:I.tip??.4,flat:I.flat??.35})}};if(O==="blunt"&&et(13,.95,D=>H-.1*(T-1)-.05+Math.abs(D-.5)*.05,.16,{tip:.9,inward:!0}),O==="micro"&&et(13,.95,H-.3*T+.05,.16,{tip:.9,inward:!0}),O==="seethrough"&&et(11,.85,D=>H+.06*T-.02+D*7%1*.06,.07,{tip:.2,jit:.05}),O==="spiky"&&et(9,.85,D=>H+(.18-Math.abs(D-.5)*.25)*T,.15,{tip:.02,sweep:D=>(D-.5)*.25,offEnd:.14}),O==="center"||O==="curtain"){let D=O==="curtain";for(let U of[1,-1])for(let Y=0;Y<9;Y++){let B=Y/8,I=w(.12,z+U*.03,(D?H+.05:H-.12)+B*(D?.3:.15),z+U*((D?.62:.5)+B*.45),.06,.13,9);if(D&&B>.3){let k=I[I.length-1];I.push(k.clone().add(X(U*.05*s,-.3*s*T,0)))}y(I,.21,{tip:D?.3:.5})}}if(O==="side"||O==="eyecover"){let D=O==="eyecover";for(let U=0;U<11;U++){let Y=U/10,B=z+.55-Y*.1,I=z+.4-Y*(D?1:1.35),k=D?H+(.42-Math.abs(Y-.4)*.3)*T:H-.05+Y*.25*T;y(w(.3,B,k,I,.06,.13,9),.22,{tip:.35})}}if(O==="pomp")for(let D=0;D<7;D++){let U=D/6,Y=z+(U-.5)*1.1,B=d(.9,Y,.04),I=d(.35,Y,.45+.1*Math.sin(U*Math.PI)),k=d(.05,Y*0+0,.15);y([B,B.clone().lerp(I,.5).add(X(0,.12*s,.06*s)),I,k],.2,{tip:.4})}if(O==="sidelock"||O==="curtain"||O==="center")for(let D of[1,-1])for(let U=0;U<(O==="sidelock"?3:2);U++){let Y=z+D*(.95+U*.12),B=w(.6,Y,1.65,Y,.06,.11,6);R(B,(O==="sidelock"?-1.6:-1)*s*(O==="sidelock"?L:1),{front:!0,flare:.04,wave:n.hairWave,noDrape:O!=="sidelock"}),y(B,.14,{tip:.15})}if(O==="slick")for(let D=0;D<9;D++){let U=z+(D/8-.5)*1.6;y(w(1,U,.3,U*.2,.06,.09,6),.1,{tip:.6})}}function Ou(n,t,e,i){if(n.beard==="none")return;let s=t.R,r=t.D,o=e.std(n.beardColor,{r:.9});o.side=ae;let a=t.L.mouth.y,l=t.L.nose.y,c=(f,p)=>{let m=new Ee,g=[],_=[],d=28,u=10,y=Math.acos(Re(a-.1,-1,1));for(let R=0;R<=d;R++)for(let w=0;w<=u;w++){let E=R/d,N=Math.PI+Rt(-1.75,1.75,E),Z=Math.abs(E-.5)*2,b=Rt(y,1.45,Zn(Re((Z-.25)/.6,0,1))),M=Rt(b,2.85,w/u),V=r(Da(M,N)).multiplyScalar(1+f);g.push(V.x,V.y,V.z)}for(let R=0;R<d;R++)for(let w=0;w<u;w++){let E=R*(u+1)+w,N=(R+1)*(u+1)+w;_.push(E,E+1,N,N,E+1,N+1)}m.setAttribute("position",new Xt(g,3)),m.setIndex(_),m.computeVertexNormals();let v=p<1?e.std(n.beardColor,{r:1,transparent:!0,opacity:p}):o;p<1&&(v.side=ae,v.depthWrite=!1);let x=new Gt(m,v);return x.userData.noShadow=p<1,i.add(x),x},h=(f=1)=>{for(let p of[1,-1]){let m=[.02,.12,.22].map((g,_)=>t.surf(p*g*f,(l+a)/2+.02-_*.03*f,.03).p);m.push(t.surf(p*.27*f,a-.02,.03).p),i.add(new Gt(Vt(m,{segs:16,rad:8,rFn:g=>s*.05*f*Rt(1,.3,g),flat:.6,outFn:g=>g.clone().normalize()}),o))}};if(n.beard==="stache"&&h(1),n.beard==="stubble"&&c(.008,.55),n.beard==="goatee"){h(.8);let f=t.surf(0,a-.25,.02),p=new Gt(new Te(1,16,12),o);p.position.copy(f.p),p.scale.set(.15*s,.2*s,.08*s),i.add(p)}if(n.beard==="full"||n.beard==="dwarf"){c(.05,1),h(1.15);let f=t.surf(0,-1,0),p=new Gt(new Te(1,18,14),o);if(p.position.copy(f.p).add(X(0,0,-.05*s)),p.scale.set(.42*s,.32*s,.3*s),i.add(p),n.beard==="dwarf"){let m=new Gt(new Te(1,20,16),o);m.position.copy(f.p).add(X(0,-.45*s,.32*s)),m.scale.set(.5*s,.62*s,.32*s),i.add(m);for(let g of[-1,0,1]){let _=f.p.clone().add(X(g*.24*s,-.85*s,.42*s)),d=_.clone().add(X(g*.06*s,-1.3*s,.32*s)),u=new ti([_,_.clone().lerp(d,.5).add(X(0,0,.12*s)),d]),y=9;for(let R=0;R<=y;R++){let w=R/y,E=u.getPointAt(w),N=s*(g===0?.14:.11)*Rt(1,.6,w),Z=new Gt(new Te(1,10,8),o);Z.position.copy(E).add(X((R%2?1:-1)*N*.3,0,0)),Z.scale.set(N*1.1,N,N*.8),Z.rotation.z=R%2?.5:-.5,i.add(Z)}let v=u.getPointAt(1),x=new Gt(new Zt(.06*s,.025*s,6,14),e.metal("#d4af37"));x.position.copy(v),x.rotation.x=Math.PI/2,i.add(x)}}}}var Da,Uu,ku=_n(()=>{Nn();Ji();Da=(n,t)=>X(Math.sin(n)*Math.sin(t),Math.cos(n),-Math.sin(n)*Math.cos(t)),Uu=["bob","lob","long","wavy","hime","halfup","dread","afro","wolf","twinbraid"]});function Fu(n,t,e,i){let s=t.T,r=t.depth,o=(B,I={})=>{let k=e.phys(B,{r:I.r??.85,sheen:I.sheen??.6,sheenColor:en(B,"#ffffff",.6),side:ae,cc:I.cc??0,m:I.m??0});return I.pattern&&I.pattern!=="plain"&&(k.map=Ru(I.pattern,B,I.c2||"#ffffff",I.rep||[8,4]),k.color.set("#ffffff")),I.transparent&&(k.transparent=!0,k.opacity=I.opacity,k.depthWrite=!1),k},a=B=>e.metal(B,{r:.3}),l=(B,I,k=0)=>(B>=0?t.tR(B):t.hipR+k*-B*0+0)+I+(B<0?k*-B:0),c=(B,I,k,q,W,Q={})=>{let it=Q.n??30,rt=[];for(let A=0;A<=it;A++){let lt=Rt(k,q,A/it);rt.push(new dt(Math.max(.001,I(lt)),lt))}let st=new Yn(rt,Q.segs??40,Q.phiStart??0,Q.phiLen??Math.PI*2);if(Q.pleat){let A=st.attributes.position;for(let lt=0;lt<A.count;lt++){let ft=A.getX(lt),ht=A.getZ(lt),yt=A.getY(lt),xt=Math.atan2(ft,ht),mt=1+Q.pleat*Math.abs((xt*16/Math.PI%2+2)%2-1)*Re((q-yt)/(q-k)*1.5,0,1);A.setX(lt,ft*mt),A.setZ(lt,ht*mt)}st.computeVertexNormals()}let $=F(B,st,W);return $.scale.z=Q.depth??r,$},h=(B,I,k,q,W={})=>c(i.pelvis,Q=>l(Q,k,W.flare??0),B,I,q,W),f=(B,I,k,q,W,Q={})=>c(i.pelvis,it=>it>=0?t.tR(it)+k+(Q.flareTop??0)*Math.max(0,.06-it):t.hipR+k+q*Math.pow(-it,Q.pow??1)+(Q.flareTop??0)*.06,I,B,W,Q),p={upper:B=>[i["sh"+B],t.uArm,t.uArm*.85,t.armU],fore:B=>[i["el"+B],t.fArm,t.fArm*.72,t.armF],thigh:B=>[i["hip"+B],t.thigh,t.shin*1.12,t.legLen*.5],shin:B=>[i["kn"+B],t.shin*1.12,t.shin*.7,t.legLen*.5]},m=B=>n.mechArm==="both"||n.mechArm==="left"&&B==="L"||n.mechArm==="right"&&B==="R",g=(B,I,k,q,W,Q={})=>{for(let it of["L","R"]){if((B==="upper"||B==="fore")&&m(it))continue;let[rt,st,$,A]=p[B](it),lt=Rt(st,$,I)+q,ft=Rt(st,$,k)+q+(Q.flare??0),ht=[],yt=8;for(let xt=0;xt<=yt;xt++){let mt=xt/yt;ht.push(new dt(Rt(ft,lt,mt)+Math.sin(mt*Math.PI)*.03*(st+$)+(Q.bulge??0)*Math.sin(mt*Math.PI),-A*Rt(k,I,mt)))}Q.capTop&&ht.push(new dt(lt*.7,-A*I+lt*.6),new dt(.001,-A*I+lt*.9)),F(rt,new Yn(ht,20),W),Q.joint&&k>.95&&F(p[B==="upper"?"fore":"shin"](it)[0],Dt(ft,16,12),W),Q.cuff&&F(rt,new Zt(ft,Q.cuff,8,20),Q.cuffMat||W,[0,-A*k+Q.cuff,0],[Math.PI/2,0,0])}},_=(B,I)=>{F(i.pelvis,new Ln(.036*Math.sqrt(n.muscle*n.width)+B,t.shoulderX*1.5,6,16),I,[0,s*.885,0],[0,0,Math.PI/2]).scale.set(1,1,.85);for(let q of["L","R"])F(i["sh"+q],Dt(t.uArm*1.3+B,18,14),I,[0,-.005,0])},d=(B,I,k,q,W,Q=r)=>{let it=F(B,new Zt(k,q,8,32),W,[0,I,0],[Math.PI/2,0,0]);return it.scale.y=Q,it},u=(B,I)=>l(B,I)*r,y=(B,I=.004)=>F(i.pelvis,Vt(B,{segs:30,rad:5,r:I}),e.neon),v=(B,I,k=!0)=>{d(i.pelvis,B,t.tR(B)+.02,.012,e.std(I,{r:.5})),k&&F(i.pelvis,new Me(.03,.026,.008),a("#d4af37"),[0,B,u(B,.032)])},x=n.dress,R=x==="none"||x==="overall",w=x==="none";t.longSkirt=w&&n.bottom==="longskirt"||["gown","robe","priest"].includes(x);let E=n.topColor,N=n.topColor2,Z=n.top;if(R){let B=n.topPattern,I=o(E,{pattern:B,c2:N});switch(Z){case"none":{let k=o("#f4f2ee");h(-.03,s*.8,.008,k);for(let q of[1,-1])F(i.pelvis,Vt([X(q*.045,s*.78,u(s*.78,.01)),X(q*.07,s*.97,0),X(q*.045,s*.78,-u(s*.78,.01))],{segs:12,rad:5,r:.004}),k);break}case"tee":case"longtee":case"crop":case"sleeveless":case"hoodie":case"shirt":case"knit":case"blouse":case"sailor":case"techtop":case"tunic":{let k=Z==="knit"||Z==="hoodie"?.02:.012,q=Z==="techtop"?o(E,{r:.45,cc:.4}):I,W=Z==="crop"?s*.55:Z==="tunic"?-.28:Z==="hoodie"||Z==="knit"?-.075:-.055;Z==="tunic"?(h(0,s*1,k,q),f(.02,W,k+.004,.32,q),v(s*.36,"#6b4430"),d(i.pelvis,W+.004,t.hipR+k+.32*-W,.006,e.std(N),r)):h(W,Z==="knit"||Z==="techtop"?s*1.03:s*1,k,q),Z!=="sleeveless"&&_(k*.8,q);let Q={tee:.5,crop:.35,blouse:.3,sailor:.45}[Z];if(Q?g("upper",0,Q,k,q,{flare:Z==="blouse"?.02:.006}):Z!=="sleeveless"&&(g("upper",0,1,k,q,{joint:!0}),g("fore",0,Z==="hoodie"||Z==="knit"?.88:.93,k,q,{cuff:Z==="hoodie"||Z==="knit"?.01:0,cuffMat:q})),Z==="blouse"){for(let it of["L","R"])F(i["sh"+it],Dt(t.uArm*2,18,14),q,[0,-.03,0],null,[1,1.05,.95]);d(i.neck,0,t.neckR+.018,.012,e.std(N,{r:.8}),1),Y(i.pelvis,[0,s*.82,u(s*.82,.02)],.035,e.std(N,{r:.7}))}if(Z==="hoodie"){F(i.neck,new Zt(t.neckR+.04,.035,10,24,Math.PI*1.3),q,[0,0,-.01],[Math.PI/2+.25,0,Math.PI*.85+Math.PI]).scale.set(1.2,1.1,1);for(let rt of[1,-1])F(i.pelvis,Vt([X(rt*.025,s*.96,u(s*.96,.025)),X(rt*.028,s*.8,u(s*.8,.025)),X(rt*.03,s*.68,u(s*.68,.025))],{segs:10,rad:5,r:.0035}),e.std(N));c(i.pelvis,rt=>l(rt,k+.008),0,s*.3,q,{phiStart:-.7,phiLen:1.4,n:8})}if(Z==="shirt"){let it=e.std(N,{r:.7});it.side=ae;for(let rt of[1,-1]){let st=new $e;st.moveTo(0,0),st.lineTo(rt*.05,.005),st.lineTo(rt*.012,-.05),st.closePath(),F(i.pelvis,new Mn(st),it,[rt*.008,s*1,u(s*.98,.016)],[-.5,0,0])}for(let rt=0;rt<5;rt++){let st=s*(.9-rt*.18);F(i.pelvis,Dt(.005,8,6),it,[0,st,u(st,k+.002)])}}if((Z==="knit"||Z==="techtop")&&(F(i.neck,Mi(t.neckR+.012,t.neckR+.016,t.neckLen*.9,!1),q,[0,t.neckLen*.75,0]),Z==="knit"&&d(i.pelvis,W+.008,l(W,k+.004),.01,q)),Z==="sailor"){let it=e.std(N,{r:.7});it.side=ae,c(i.pelvis,rt=>l(rt,k+.006)+(s*1-rt)*.1,s*.72,s*1,it,{phiStart:Math.PI-1.1,phiLen:2.2,n:6});for(let rt of[1,-1])F(i.pelvis,Vt([X(rt*.05,s*1,u(s,k)*.7),X(rt*.02,s*.82,u(s*.82,k+.004)),X(0,s*.74,u(s*.74,k+.004))],{segs:10,rad:5,r:.006,flat:.4}),it);Y(i.pelvis,[0,s*.76,u(s*.76,k+.01)],.035,e.std("#e05050",{r:.7}))}if(Z==="techtop")for(let it of[1,-1]){let rt=[];for(let st=0;st<=8;st++){let $=Rt(W+.01,s*.95,st/8);rt.push(X(it*l($,k+.002)*.98,$,0))}y(rt,.0035)}break}case"leather":{let k=o(E,{r:.55,sheen:.2,cc:.15});h(-.07,s*.98,.02,k),_(.006,e.skin);let q=e.std(xe(E,.6),{r:.5}),W=[];for(let Q=0;Q<=10;Q++){let it=Q/10,rt=Rt(s*.95,s*.15,it),st=Rt(-t.chestR*.8,t.chestR*.8,it),$=Math.sqrt(Math.max(0,1-(st/l(rt,.03))**2))*l(rt,.03)*r;W.push(X(st,rt,$))}F(i.pelvis,Vt(W,{segs:30,rad:6,r:.01,flat:.3}),q),v(s*.2,xe(E,.5)),v(s*.05,xe(E,.45),!1),F(i.shL,new Te(t.uArm*1.8,16,12,0,Math.PI*2,0,Math.PI/2),k,[0,.005,0],null,[1,.8,1]),g("fore",.3,.95,.008,k);break}case"plate":{let k=a(n.metalColor),q=a(N==="#ffffff"?"#d4af37":N);h(-.05,s*1,.03,k),F(i.pelvis,new Me(.012,s*.6,.012),q,[0,s*.6,u(s*.6,.034)]),d(i.neck,0,t.neckR+.02,.016,q,1),d(i.pelvis,-.045,l(-.04,.034),.008,q);for(let W of["L","R"]){let Q=i["sh"+W],it=W==="L"?1:-1;for(let rt=0;rt<3;rt++)F(Q,new Te(t.uArm*(2.1-rt*.25),18,10,0,Math.PI*2,0,Math.PI/2),k,[it*.006,.01-rt*.022,0],[0,0,it*(.25+rt*.12)],[1,.75,1])}g("upper",0,1,.006,o("#8a8f99",{pattern:"check",c2:"#5a5f69",rep:[10,6],r:.6,m:.6}),{joint:!0}),g("fore",0,.9,.006,k,{flare:.012});for(let W=0;W<2;W++)f(-.04-W*.05,-.1-W*.05,.036+W*.006,.25,k,{flareTop:0});break}case"mesh":{h(s*.55,s*.86,.008,o("#1f1f24"));let k=o(E,{pattern:"check",c2:"#000000",rep:[20,10],transparent:!0,opacity:.55});h(-.05,s*1,.014,k),_(.008,k),g("upper",0,1,.01,k),g("fore",0,.9,.01,k);for(let q of[1,-1]){let W=[];for(let Q=0;Q<=10;Q++){let it=Q/10,rt=Rt(s*.98,s*.2,it),st=q*Rt(t.chestR*.85,-t.chestR*.3,it);W.push(X(st,rt,Math.sqrt(Math.max(.02,1-(st/l(rt,.02))**2))*l(rt,.02)*r))}y(W,.004)}break}}}let b=n.bottomColor,M=n.bottom;if(w){let B=o(b,{pattern:M==="jeans"&&n.bottomPattern==="plain"?"denim":n.bottomPattern,c2:xe(b,.7),rep:[6,6]}),I=(k,q)=>h(-.09,s*.38,k,q);switch(M){case"jeans":case"slacks":case"leggings":case"leatherpants":case"jogger":case"cargo":{let k=M==="leggings"?.004:M==="cargo"||M==="jogger"?.02:.01,q=M==="leatherpants"?o(b,{r:.45,cc:.3,sheen:.1}):B;if(I(k,q),g("thigh",0,1,k+.002,q,{joint:!0}),g("shin",0,M==="leggings"?.96:.92,k+.002,q,{flare:M==="slacks"||M==="cargo"?.016:M==="jogger"?-.004:.004,cuff:M==="jogger"?.01:0,cuffMat:q}),M!=="leggings"&&v(s*.36,M==="leatherpants"?"#3a2418":"#3b2a20",M!=="cargo"),M==="cargo")for(let W of["L","R"]){let Q=W==="L"?1:-1;F(i["hip"+W],new Me(.02,.07,.06),q,[Q*(t.thigh+.028),-t.legLen*.22,0]),F(i["hip"+W],new Zt(t.thigh*.95+.026,.004,6,24),e.neon,[0,-t.legLen*.32,0],[Math.PI/2,0,0])}if(M==="leatherpants"){for(let W of["L","R"])F(i["kn"+W],Dt(t.shin*1.12+.016,14,10),o(xe(b,.7),{r:.5}),[0,0,.012],null,[1,1,.9]);F(i.pelvis,new Me(.05,.05,.03),e.std("#5a3a20"),[t.hipR*.8,-0,.05])}break}case"shorts":I(.012,B),g("thigh",0,.42,.016,B,{flare:.012}),v(s*.36,"#3b2a20");break;case"mini":I(.01,B),f(s*.38,-t.legLen*.3,.016,.35,B);break;case"pleats":I(.01,B),f(s*.38,-t.legLen*.4,.016,.3,B,{pleat:.07,segs:64});break;case"longskirt":I(.01,B),f(s*.38,-t.legLen*.92,.016,.2,B,{pow:.9});break;case"greaves":{let k=a(n.metalColor),q=o(xe(b,.6));I(.006,q),g("thigh",0,1,.008,q),g("shin",0,.9,.008,q),g("shin",.08,.92,.018,k,{flare:.006}),g("thigh",.45,.95,.016,k);for(let W of["L","R"])F(i["kn"+W],Dt(t.shin*1.12+.024,14,10),k,[0,0,.012],null,[1,1,1]);f(s*.2,-.13,.03,.3,k),v(s*.22,"#3a2418");break}}}if(x!=="none"){let B=n.dressColor,I=n.dressColor2,k=o(B,{pattern:x==="robe"?"star":"plain",c2:I,rep:[10,8]}),q=-t.pelvisY+.012;switch(x){case"aline":h(s*.36,s*.84,.012,k),f(s*.4,-t.legLen*.48,.016,.34,k);for(let W of[1,-1])F(i.pelvis,Vt([X(W*.05,s*.82,u(s*.82,.012)),X(W*.075,s*.98,0),X(W*.05,s*.82,-u(s*.82,.012))],{segs:12,rad:5,r:.005}),k);d(i.pelvis,s*.4,t.tR(s*.4)+.02,.012,e.std(I,{r:.6})),Y(i.pelvis,[0,s*.4,u(s*.4,.03)],.03,e.std(I));break;case"minidress":h(s*.36,s*1,.012,k),_(.01,k);for(let W of["L","R"])F(i["sh"+W],Dt(t.uArm*1.9,18,14),k,[0,-.03,0]);f(s*.4,-t.legLen*.27,.016,.42,k),d(i.neck,0,t.neckR+.016,.01,e.std(I),1);break;case"gown":h(s*.3,s*.82,.012,k),f(s*.34,q,.016,.42,k,{pow:.75,segs:56,pleat:.03}),d(i.pelvis,s*.34,t.tR(s*.34)+.018,.01,e.metal(I)),d(i.pelvis,s*.82,t.tR(s*.82)+.016,.008,e.metal(I));break;case"overall":{h(-.09,s*.38,.018,k),g("thigh",0,1,.02,k,{joint:!0}),g("shin",0,.9,.02,k,{flare:.01}),c(i.pelvis,W=>l(W,.024),s*.3,s*.72,k,{phiStart:-.75,phiLen:1.5,n:8});for(let W of[1,-1])F(i.pelvis,Vt([X(W*.055,s*.72,u(s*.72,.024)),X(W*.07,s*.95,u(s*.95,.03)*.6),X(W*.075,s*.97,0),X(W*.04,s*.6,-u(s*.6,.026))],{segs:16,rad:5,r:.008,flat:.4}),k),F(i.pelvis,Dt(.009,10,8),e.metal(I),[W*.055,s*.7,u(s*.7,.03)]);break}case"robe":case"priest":{c(i.pelvis,Q=>Q>=0?t.tR(Q)+.024:t.hipR+.024+.2*-Q,q,s*1.02,k,{n:40}),_(.02,k),g("upper",0,1,.022,k,{joint:!0}),g("fore",0,1.15,.026,k,{flare:x==="robe"?.07:.035});let W=e.std(I,{r:.5,m:.3});if(x==="robe"){for(let Q of[1,-1]){let it=[];for(let rt=0;rt<=14;rt++){let st=Rt(s*1,q+.01,rt/14);it.push(X(Q*.02,st,(st>=0?t.tR(st)+.026:t.hipR+.026+.2*-st)*r))}F(i.pelvis,Vt(it,{segs:40,rad:5,r:.006,flat:.4}),W)}F(i.neck,Mi(t.neckR+.03,t.neckR+.02,t.neckLen*1.2,!1,24),k,[0,t.neckLen*.9,0])}else c(i.pelvis,Q=>Q>=0?t.tR(Q)+.03:t.hipR+.03+.2*-Q,-t.legLen*.9,s*.98,e.phys(I,{r:.7,sheen:.5,side:ae}),{phiStart:-.32,phiLen:.64,n:30}),F(i.pelvis,new Dn(.03,24),e.metal("#d4af37"),[0,s*.7,u(s*.7,.034)]);d(i.pelvis,s*.36,t.tR(s*.36)+.03,.01,x==="priest"?e.std("#c9a46a",{r:.9}):W);break}case"bodysuit":{let W=o(B,{r:.3,cc:.8,sheen:.2});h(-.09,s*1.03,.006,W),_(.005,W),g("upper",0,1,.005,W,{joint:!0}),g("fore",0,.95,.005,W),g("thigh",0,1,.005,W,{joint:!0}),g("shin",0,.95,.005,W),F(i.neck,Mi(t.neckR+.006,t.neckR+.008,t.neckLen*.9,!1),W,[0,t.neckLen*.75,0]);for(let Q of[1,-1]){let it=[];for(let st=0;st<=10;st++){let $=Rt(-.06,s*.95,st/10);it.push(X(Q*l($,.008),$,0))}y(it,.0035);let rt=[];for(let st=0;st<=8;st++){let $=Rt(s*.9,s*.1,st/8);rt.push(X(Q*Rt(.04,.01,st/8),$,u($,.008)))}y(rt,.003)}for(let Q of["L","R"]){let it=Q==="L"?1:-1;F(i["hip"+Q],Vt([X(it*t.thigh,0,0),X(it*t.thigh,-t.legLen*.5,0)],{segs:4,rad:5,r:.003}),e.neon),F(i["kn"+Q],Vt([X(it*t.shin*1.1,0,0),X(it*t.shin*.75,-t.legLen*.48,0)],{segs:4,rad:5,r:.003}),e.neon)}break}}}let V=n.outerColor,J=n.outerColor2,L=n.outer;if(L!=="none"){let B=o(V,{r:L==="coat"?.75:.8}),I=e.phys(J,{r:.6,side:Fe}),k={phiStart:.3,phiLen:Math.PI*2-.6},q=(W,Q,it,rt)=>{let st=A=>(A>=0?t.tR(A):t.hipR)+it+(A<0?rt*-A:0);return c(i.pelvis,st,W,Q,B,k)};if(L==="cardigan"||L==="jacket"||L==="coat"||L==="techjacket"){let W=L==="techjacket"?.04:.03,Q=L==="coat"?-t.legLen*.55:L==="techjacket"?-.14:-.1;if(q(Q,s*1,W,L==="coat"?.18:.08),_(W*.9,B),g("upper",0,1,.016,B,{joint:!0}),g("fore",0,.86,.016,B,{flare:L==="techjacket"?.008:.004,cuff:L==="cardigan"?.008:0,cuffMat:B}),L==="jacket"||L==="coat")for(let it of[1,-1]){let rt=new $e;rt.moveTo(0,0),rt.lineTo(it*.045,0),rt.lineTo(it*.012,-s*.4),rt.closePath();let st=F(i.pelvis,new Mn(rt),B,[it*.03,s*.98,u(s*.8,W+.006)],[-.18,it*.35,0]);st.material=B}if((L==="coat"||L==="techjacket")&&F(i.neck,new ie(t.neckR+.04,t.neckR+.05,t.neckLen*1.4,24,1,!0,.5,Math.PI*2-1),B,[0,t.neckLen*.3,0]),L==="techjacket"){for(let it of[1,-1]){let rt=[];for(let st=0;st<=12;st++){let $=Rt(Q+.01,s*.98,st/12),A=($>=0?t.tR($):t.hipR)+W+($<0?.08*-$:0)+.002;rt.push(X(Math.sin(it*.3)*A,$,Math.cos(.3)*A*r))}y(rt,.004)}for(let it of["L","R"])m(it)||F(i["el"+it],new Zt(Rt(t.fArm,t.fArm*.72,.86)+.024,.004,6,24),e.neon,[0,-t.armF*.86,0],[Math.PI/2,0,0]);F(i.pelvis,new Me(t.chestR*2.2,.018,.01),e.std("#1f1f24"),[0,s*.6,u(s*.6,W+.01)],[0,0,.35])}}if(L==="puffer"){for(let W=0;W<6;W++){let Q=Rt(-.04,s*.9,W/5);d(i.pelvis,Q,t.tR(Q)+.035,.034,B)}d(i.pelvis,s*.5,t.tR(s*.5)+.07,.004,e.neon);for(let W of["L","R"]){for(let Q=0;Q<4;Q++)F(i["sh"+W],new Zt(t.uArm+.02,.022,8,20),B,[0,-t.armU*(Q+.5)/4,0],[Math.PI/2,0,0]);for(let Q=0;Q<3;Q++)F(i["el"+W],new Zt(t.fArm+.016,.019,8,20),B,[0,-t.armF*(Q+.5)/3.6,0],[Math.PI/2,0,0]);F(i["sh"+W],Dt(t.uArm*1.3+.03,16,12),B)}F(i.neck,new Zt(t.neckR+.04,.03,8,24),B,[0,.01,0],[Math.PI/2,0,0])}if(L==="cloak"||L==="hoodcloak"){let W=-t.pelvisY+.03,Q=R&&Z==="plate"?2.35:R&&Z==="leather"?1.95:R&&Z==="blouse"||x==="minidress"?2.1:1.5,it=t.shoulderX+t.uArm*Q+.012,rt=$=>{let A=Re((s*1-$)/(s*.16),0,1),lt=Rt(t.neckR*1.8,it,Zn(A))+Math.max(0,s*.82-$)*.1;return $<s*.86&&(lt=Math.max(lt,($>=0?t.tR($):t.hipR)+.05)),lt},st={phiStart:Math.PI-1.5,phiLen:3,depth:.95};c(i.pelvis,rt,W,s*1,e.phys(V,{r:.8,sheen:.6,sheenColor:"#ffffff"}),{...st,n:36}),c(i.pelvis,$=>rt($)-.004,W,s*1,I,{...st,n:36}),F(i.pelvis,new ms(.018),e.glow(n.gemColor,{boost:1.2}),[0,s*.96,u(s*.96,.03)]);{let $=Math.sin(1.5)*rt(s*.93),A=Math.cos(1.5)*rt(s*.93)*.95;F(i.pelvis,Vt([X(-$,s*.93,A),X(-$*.5,s*.95,u(s*.95,.03)*.9),X(0,s*.96,u(s*.96,.03)),X($*.5,s*.95,u(s*.95,.03)*.9),X($,s*.93,A)],{segs:16,rad:5,r:.004}),e.metal("#d4af37"))}if(L==="hoodcloak"){let $=t.R,A=U(),lt=n.hairVolume,ft=new Gt(A,e.phys(V,{r:.8,sheen:.6,side:ae}));ft.scale.set($*1.4*Math.max(1,n.headWidth)*Rt(1,lt,.2),$*1.38*Rt(1,lt,.15),$*1.44*Rt(1,lt,.25)),ft.position.set(0,$*.06,-$*.12),i.headC.add(ft),et(t.hairMeshes||[],ft.position,ft.scale);let ht=new Gt(A,e.phys(xe(J,.5),{r:.9,side:Fe}));ht.scale.copy(ft.scale).multiplyScalar(.985),ht.position.copy(ft.position),i.headC.add(ht)}}}let O=n.shoeColor,T=n.shoeColor2,H=n.shoes;t.soleLift=0;let z=t.footH;for(let B of["L","R"]){let I=i["an"+B],k=i["foot"+B],q=e.phys(O,{r:H==="maryjane"?.25:.6,cc:H==="maryjane"||H==="platform"?.8:.1}),W=e.std(T,{r:.7}),Q=(st=1.15,$=1.1,A=1.12)=>(k.visible=!1,F(I,Dt(1,20,14),q,[0,-z*.5,.035],null,[.037*st,.03*$,.075*A])),it=(st=.016,$=W)=>F(I,new ie(1,1,1,24),$,[0,-z+st/2,.035],null,[.043,st,.088]),rt=(st,$=.008,A=q,lt=.004)=>{let ft=i["kn"+B],ht=t.legLen*.5,yt=Rt(t.shin*1.12,t.shin*.7,st)+$,xt=t.shin*.7+$+lt,mt=[new dt(xt,-ht-.01),new dt(yt,-ht*st)];return F(ft,new Yn(mt,20),A),yt};switch(H){case"sneakers":Q(1.2,1.2,1.15),it(.022);for(let st=0;st<3;st++)F(I,new Me(.03,.003,.006),e.std("#ffffff"),[0,-z*.1-st*.004+.004,.05+st*.016],[-.6,0,0]);F(I,new Zt(t.shin*.7+.008,.007,6,20),q,[0,-.005,0],[Math.PI/2,0,0]);break;case"maryjane":Q(1.1,.95,1.1),it(.012),F(I,new Zt(.036,.004,6,20,Math.PI),q,[0,-z*.35,.045],[0,Math.PI/2,0]),rt(.6,.004,e.std("#ffffff",{r:.9}),0);break;case"boots":Q(1.2,1.15,1.15),it(.02),rt(.42,.01);break;case"longboots":Q(1.15,1.1,1.12),it(.018),rt(.04,.01),F(i["kn"+B],Dt(t.shin*1.12+.011,14,10),q,[0,0,0]);break;case"sandals":it(.014);for(let st=0;st<2;st++)F(I,new Zt(.036,.004,6,20,Math.PI),q,[0,-z*.55,.02+st*.04],[0,Math.PI/2,0],[1,1.05,1]);for(let st=0;st<5;st++)F(I,Dt(.008,8,6),e.skin,[(st-2)*.013,-z*.8,.105-Math.abs(st-2)*.005]);break;case"barefoot":for(let st=0;st<5;st++)F(I,Dt(.008+0*.001,8,6),e.skin,[(st-2)*.013,-z*.8,.104-Math.abs(st-2)*.005]);break;case"leatherboots":{let st=e.phys(O,{r:.55,cc:.2});Q(1.2,1.15,1.15).material=st,it(.02,e.std("#2a1a10"));let $=rt(.25,.012,st,.006);F(i["kn"+B],new Zt($+.004,.012,8,20),e.std(xe(O,.8)),[0,-t.legLen*.5*.25,0],[Math.PI/2,0,0]);for(let A=0;A<2;A++)F(i["kn"+B],new Zt(Rt(t.shin*1.12,t.shin*.7,.55+A*.25)+.016,.004,6,20),e.metal("#c8ccd4"),[0,-t.legLen*.5*(.55+A*.25),0],[Math.PI/2,0,0]);break}case"sabatons":{let st=a(n.metalColor);Q(1.25,1.2,1.18).material=st,it(.016,e.std("#2a2a2a"));for(let $=0;$<3;$++)F(I,new Te(.046,16,8,0,Math.PI*2,0,Math.PI/2),st,[0,-z*.25,.05+$*.022],[.9,0,0],[1,.5,1]);rt(.3,.016,st,.008);break}case"platform":{Q(1.2,1.2,1.15),t.soleLift=.035,F(I,new ie(1,1,1,24),e.std("#1f1f24",{r:.4}),[0,-z-.035/2+.008,.035],null,[.046,.05,.092]),F(I,new ie(1,1,1,24,1,!0),e.glow(T==="#ff9fbf"?n.cyberColor:T),[0,-z-.012,.035],null,[.047,.008,.093]),rt(.45,.012);break}}}if(n.gloves!=="none")for(let B of["L","R"]){let I=i["wr"+B],k=n.gloves==="gauntlet"?a(n.metalColor):e.phys(n.gloveColor,{r:n.gloves==="neon"?.3:.6,cc:n.gloves==="neon"?.6:0});n.gloves!=="fingerless"?F(I,Dt(1,18,14),k,[0,-.04,.004],null,[.033,.048,.02]):F(I,new Te(1,18,14,0,Math.PI*2,Math.PI*.35,Math.PI*.65),k,[0,-.04,.004],[Math.PI,0,0],[.033,.046,.02]),F(I,new Ln(.011,.022,4,8),k,[0,-.028,.02],[.6,0,0]);let q=i["el"+B],W=n.gloves==="gauntlet"?.4:.2;F(q,new Yn([new dt(t.fArm*.72+(n.gloves==="gauntlet"?.02:.006),-t.armF-.005),new dt(Rt(t.fArm,t.fArm*.72,1-W)+(n.gloves==="gauntlet"?.03:.006),-t.armF*(1-W))],20),k),n.gloves==="neon"&&(F(I,new Zt(.03,.003,6,20),e.neon,[0,-.04,0],[Math.PI/2,0,0],[1,.6,1]),F(q,new Zt(t.fArm*.8+.008,.003,6,20),e.neon,[0,-t.armF*.85,0],[Math.PI/2,0,0]))}n.neckPort&&(F(i.neck,new ie(.012,.012,.01,16),e.cyberMetal,[t.neckR*.55,t.neckLen*.5,-t.neckR*.75],[Math.PI/2+.6,0,.6]),F(i.neck,new Zt(.01,.002,6,16),e.neon,[t.neckR*.6,t.neckLen*.5,-t.neckR*.8],[.6,.6,0]));function et(B,I,k){let q=new G,W=new de,Q=.93;for(let it of B){if(!it.isMesh||!it.geometry||!it.geometry.attributes.position)continue;it.updateMatrix(),W.copy(it.matrix).invert();let rt=it.geometry.attributes.position,st=!1;for(let $=0;$<rt.count;$++){q.fromBufferAttribute(rt,$).applyMatrix4(it.matrix);let A=(q.x-I.x)/k.x,lt=(q.y-I.y)/k.y,ft=(q.z-I.z)/k.z,ht=Math.hypot(A,lt,ft);if(ht<=Q)continue;let yt=Math.acos(Re(lt/ht,-1,1));if(D(A/ht,lt/ht,ft/ht,.85))continue;let xt=Zn(Re((2.5-yt)/.35,0,1));if(xt<=0)continue;let mt=Rt(1,Q/ht,xt);q.set(I.x+A*mt*k.x,I.y+lt*mt*k.y,I.z+ft*mt*k.z).applyMatrix4(W),rt.setXYZ($,q.x,q.y,q.z),st=!0}st&&(rt.needsUpdate=!0,it.geometry.computeVertexNormals(),it.geometry.computeBoundingSphere())}}function D(B,I,k,q=1){let it=B*0+I*-.148+k*.989;if(it<=0)return!1;let rt=I*.989-k*-.148,st=Math.atan2(B,it),$=Math.atan2(rt,it);return(st/(.98*q))**2+($/(1.12*q))**2<1}function U(){let W=Math.cos(2.3),Q=(A,lt)=>{let ft=Math.cos(A),ht=Math.sin(A),yt=Math.cos(lt),xt=Math.sin(lt);return[ht*yt,-.148*ft+ht*xt*.989,.989*ft-ht*xt*-.148]},it=[],rt=[],st=[];for(let A=0;A<=72;A++){let lt=A/72*Math.PI*2,ft=1/Math.hypot(Math.cos(lt)/.98,Math.sin(lt)/1.12),ht=ft;for(let yt=ft;yt<=Math.PI&&!(Q(yt,lt)[1]<W);yt+=.01)ht=yt;for(let yt=0;yt<=22;yt++){let xt=Rt(ft,ht,yt/22);it.push(...Q(xt,lt)),rt.push(A/72,yt/22)}}for(let A=0;A<72;A++)for(let lt=0;lt<22;lt++){let ft=A*23+lt,ht=(A+1)*23+lt;st.push(ft,ht,ft+1,ft+1,ht,ht+1)}let $=new Ee;return $.setAttribute("position",new Xt(it,3)),$.setAttribute("uv",new Xt(rt,2)),$.setIndex(st),$.computeVertexNormals(),$}function Y(B,I,k,q){let W=new le;W.position.set(...I),B.add(W);for(let Q of[1,-1]){let it=F(W,new an(k*.6,k*1.1,12),q,[Q*k*.55,0,0],[0,0,Q*Math.PI/2],[1,1,.45])}F(W,Dt(k*.28,10,8),q);for(let Q of[1,-1])F(W,new Me(k*.25,k*1,k*.08),q,[Q*k*.25,-k*.6,0],[0,0,Q*.3]);return W}t.bow=Y}var Bu=_n(()=>{Nn();Ji();Qr();jr()});function zu(n,t,e,i){let s=t.R,r=i.headC,o=n.hairVolume,a=n.backHair!=="bald"&&n.backHair!=="buzz",l=s*(a?1.1+.06*(o-1):1.03),c=t.D(X(0,1,0)).y,h=n.headAccColor,f=n.gemColor,p=e.phys(h,{r:.6,sheen:.4}),m=e.metal(n.jewelColor||"#d4af37",{r:.25}),g=e.phys(f,{r:.05,cc:1,emissive:f,ei:.5}),_=L=>{let O=new $e;return O.moveTo(0,-L),O.bezierCurveTo(-L*1.5,0,-L*.8,L*1.2,0,L*.45),O.bezierCurveTo(L*.8,L*1.2,L*1.5,0,0,-L),O},d=(L,O,T=5)=>{let H=new $e;for(let z=0;z<T*2;z++){let et=Math.PI/2+z*Math.PI/T,D=z%2?O:L;z?H.lineTo(Math.cos(et)*D,Math.sin(et)*D):H.moveTo(Math.cos(et)*D,Math.sin(et)*D)}return H},u=(L,O)=>new Wr(L,{depth:O,bevelEnabled:!0,bevelThickness:O*.4,bevelSize:O*.4,bevelSegments:2,curveSegments:10}).center(),y=(L,O,T,H=-.25)=>{let z=new Te(1,36,18,0,Math.PI*2,0,O);z.rotateX(H);let et=F(r,z,T);return et.scale.set(L*n.headWidth,L,L),et.material.side=ae,et},v=(L,O,T,H=.35*s,z=-.05*s,et=-.2)=>{let D=F(r,new Zt(L,O,8,40,Math.PI),T,[0,H,z],[et,0,0]);return D.scale.x=n.headWidth,D};switch(n.headAcc){case"ribbon":{let L=new le;L.position.set(s*.62,c*.82,s*.1),L.rotation.set(0,.6,-.5),r.add(L),t.bow(L,[0,0,0],s*.4,p);break}case"band":v(l*1,s*.05,p,s*.05,s*.15,-.45);break;case"beanie":y(l*1.04,1.45,e.phys(h,{r:.95,sheen:.8}),-.25),F(r,new Zt(l*1.02,s*.12,10,36),e.phys(xe(h,.9),{r:.95}),[0,Math.cos(1.45)*l*.9+s*.06,-s*.12],[Math.PI/2-.25,0,0]),F(r,Dt(s*.18,14,10),p,[0,l*1.04,-s*.25]);break;case"cap":{y(l*1.03,1.25,p,-.3),F(r,new ie(s*.75,s*.75,s*.04,28,1,!1,-Math.PI/2,Math.PI),e.phys(xe(h,.85),{r:.7}),[0,s*.45,s*.75],[.25,0,0]).scale.set(1.1,1,.8),F(r,Dt(s*.08,10,8),p,[0,l*1.03,-s*.25]);break}case"beret":{let L=F(r,Dt(1,28,14),e.phys(h,{r:.9,sheen:.6}),[s*.15,c*.92,-s*.05],[.15,0,-.35],[l*1.15,s*.32,l*1.1]);F(r,new ie(s*.03,s*.04,s*.12,8),p,[s*.22,c*1.2,-s*.05]);break}case"flower":{let L=["#ff9fbf","#fff1a8","#ffffff","#c8b6ff",h];for(let O=0;O<11;O++){let T=-Math.PI*.95+O/10*Math.PI*1.9,H=X(Math.sin(T)*l*1.02,c*.72+Math.cos(T)*s*.08,-Math.cos(T)*l*.95+s*.05);J(r,H,s*.13,L[O%L.length])}break}case"catears":case"bunny":{for(let L of[1,-1]){let O=new le;O.position.copy(t.D(X(L*.5,.85,.05).normalize()).multiplyScalar(a?1.08:1)),O.rotation.z=-L*(n.headAcc==="bunny"?.15:.35),r.add(O),n.headAcc==="catears"?(F(O,new an(s*.26,s*.45,4),p,[0,s*.18,0],[0,Math.PI/4,0],[1,1,.45]),F(O,new an(s*.16,s*.3,4),e.std("#ffc0d0"),[0,s*.15,s*.05],[0,Math.PI/4,0],[1,1,.3])):(F(O,Dt(1,16,12),p,[0,s*.45,0],[0,0,0],[s*.13,s*.5,s*.07]),F(O,Dt(1,16,12),e.std("#ffc0d0"),[0,s*.45,s*.04],null,[s*.07,s*.38,s*.04]))}v(l,s*.03,p,s*.08,s*.05,-.15);break}case"headphones":{v(l*1.08,s*.05,p,s*0,-s*.02,0);for(let L of[1,-1])F(r,new ie(s*.28,s*.28,s*.18,24),p,[L*l*1.08*n.headWidth,-s*.1,-s*.02],[0,0,Math.PI/2]),F(r,new Zt(s*.2,s*.025,6,24),e.glow(f),[L*(l*1.08*n.headWidth+s*.1),-s*.1,-s*.02],[0,Math.PI/2,0]);break}case"witch":{let L=e.phys(h,{r:.85,sheen:.5});F(r,new ie(l*2,l*2,s*.04,40),L,[0,c*.8,-s*.05],[-.12,0,0]);let O=[X(0,c*.8,-s*.05),X(0,c*.8+s*.8,-s*.25),X(0,c*.8+s*1.4,-s*.6),X(s*.1,c*.8+s*1.6,-s*1)];F(r,Vt(O,{segs:30,rad:24,rFn:T=>l*1.02*Math.pow(1-T,1.1)+.002}),L),F(r,new Zt(l*.98,s*.07,8,32),e.phys(n.dressColor2||f,{r:.5}),[0,c*.8+s*.08,-s*.06],[Math.PI/2-.12,0,0],[1,1,1.6]),F(r,u(d(s*.12,s*.05),s*.03),m,[0,c*.8+s*.1,l*.98]);break}case"circlet":case"crown":case"tiara":{let L=n.headAcc==="circlet"?s*.42:c*.75;if(n.headAcc==="circlet"&&(F(r,new Zt(l*1,s*.025,8,48),m,[0,L,-s*.08],[Math.PI/2+.3,0,0]).scale.set(n.headWidth,1.05,1),F(r,new ms(s*.08),g,[0,L+s*.06,l*.98],null,[1,1.4,.6]),Si(r,f,s*.6,[0,L+s*.06,l*1.02])),n.headAcc==="crown"){let O=F(r,new ie(l*.8,l*.72,s*.22,32,1,!0),m,[0,L,-s*.08],[-.18,0,0]);O.material.side=ae;for(let T=0;T<8;T++){let H=T/8*Math.PI*2,z=X(Math.sin(H)*l*.8,L+s*.18+Math.sin(-.18)*Math.cos(H)*l*.8*0,Math.cos(H)*l*.8-s*.08-Math.sin(.18)*s*.2);F(r,new an(s*.07,s*.2,6),m,[z.x,z.y+Math.cos(H)*l*.15,z.z]),F(r,Dt(s*.04,8,6),g,[z.x,z.y+s*.11+Math.cos(H)*l*.15,z.z])}}if(n.headAcc==="tiara"){let O=F(r,new Zt(l*1,s*.02,6,40,Math.PI),m,[0,L-s*.1,-s*.02],[-.5,0,0]);O.scale.x=n.headWidth;for(let T=0;T<5;T++){let H=Math.PI*(.2+T*.15),z=T===2?.3:T%2?.18:.12;F(r,new an(s*.05,s*z,4),m,[Math.cos(H)*l*n.headWidth,L-s*.04+s*z*.4+Math.sin(H)*s*.45,Math.sin(H)*l*.88-s*.05])}F(r,new ms(s*.06),g,[0,L+s*.38,l*.84])}break}case"halo":{let L=c+s*.4;F(r,new Zt(s*.7,s*.035,10,48),e.glow(f),[0,L,-s*.1],[Math.PI/2+.25,0,0]),F(r,new Zt(s*.7,s*.12,10,48),e.glow(f,{transparent:!0,opacity:.25,add:!0}),[0,L,-s*.1],[Math.PI/2+.25,0,0]);break}case"antenna":for(let L of[1,-1]){let O=X(L*s*1*n.headWidth,s*.05,-s*.05);F(r,new ie(s*.12,s*.12,s*.12,16),e.cyberMetal,[O.x,O.y,O.z],[0,0,Math.PI/2]),F(r,Vt([O,O.clone().add(X(L*s*.15,s*.6,0)),O.clone().add(X(L*s*.25,s*1,-s*.1))],{segs:10,rad:5,r:s*.02}),e.cyberMetal);let T=O.clone().add(X(L*s*.25,s*1,-s*.1));F(r,Dt(s*.07,12,8),e.glow(f),T.toArray()),Si(r,f,s*.5,T.toArray())}break}let x=n.faceAcc;if(x!=="none"){let L=t.L.eyes,O=L[0].y*s,T=Math.abs(L[0].x)*s,H=L[0].r*s,z=t.surf(0,L[0].y+.05).p.z+s*.08,et=e.phys(n.faceAccColor,{r:.35,cc:.6,m:.2}),D=U=>{for(let Y of[1,-1])F(r,Vt([X(Y*(T+U),O,z-s*.02),X(Y*s*1*n.headWidth,O+s*.02,s*.1),X(Y*s*1*n.headWidth,O-s*.05,-s*.35)],{segs:12,rad:5,r:s*.018}),et)};if(x==="round"||x==="square"||x==="sun"||x==="heart"){let U=H*1.35;for(let Y of[1,-1])if(x==="heart"){let B=F(r,new Mn(_(U*.75)),e.phys("#ff4f8f",{r:.1,transparent:!0,opacity:.55}),[Y*T,O,z]);B.material.side=ae,F(r,Vt(_(U*.75).getPoints(30).map(I=>X(I.x+Y*T,I.y+O,z)),{segs:60,rad:5,r:s*.022}),et)}else F(r,new Zt(U,s*.025,8,x==="square"?4:32),et,[Y*T,O,z],[0,0,x==="square"?Math.PI/4:0],x==="square"?[1.25,.95,1]:1),x==="sun"&&F(r,new Dn(U,28),e.phys("#1a1a22",{r:.05,transparent:!0,opacity:.85,cc:1}),[Y*T,O,z]);F(r,Vt([X(-T+H,O+s*.05,z),X(0,O+s*.1,z+s*.02),X(T-H,O+s*.05,z)],{segs:10,rad:5,r:s*.02}),et),D(U)}if(x==="monocle"&&(F(r,new Zt(H*1.4,s*.025,8,32),m,[T,O,z]),F(r,new Dn(H*1.4,24),e.phys("#ffffff",{r:0,transparent:!0,opacity:.2}),[T,O,z]),F(r,Vt([X(T+H*1.2,O-H,z),X(T+s*.4,O-s*.7,z-s*.1),X(T+s*.6,O-s*1.3,-s*.1)],{segs:14,rad:4,r:s*.01}),m)),x==="visor"){let U=F(r,new ie(s*1.12,s*1.12,H*2.4,40,1,!0,-1.25,2.5),e.glow(n.cyberColor,{transparent:!0,opacity:.45,side:ae,boost:1.1}),[0,O,0]);U.scale.set(n.headWidth,1,1),U.userData.noShadow=!0,F(r,new ie(s*1.13,s*1.13,s*.025,40,1,!0,-1.25,2.5),e.glow(n.cyberColor),[0,O+H*1.2,0],null,[n.headWidth,1,1])}if(x==="goggles"){for(let Y of[1,-1])F(r,new ie(H*1.5,H*1.6,s*.18,24,1,!0),et,[Y*T,O,z-s*.06],[Math.PI/2,0,0]),F(r,new Dn(H*1.5,24),e.glow(n.cyberColor,{transparent:!0,opacity:.75}),[Y*T,O,z+s*.03]);let U=F(r,new Zt(s*1.08,s*.05,6,40),et,[0,O,-s*.02],[0,0,0]);U.rotation.x=Math.PI/2,U.scale.set(n.headWidth,1,1)}if(x==="mask"){let U=new Te(1,36,16,Math.PI/2-1.3+Math.PI,2.6,Math.PI*.55,Math.PI*.32),Y=e.std("#ffffff",{r:.4,map:Du(n.cyberColor)});Y.emissive.set("#ffffff"),Y.emissiveMap=Y.map,Y.side=ae;let B=F(r,U,Y,[0,-s*.05,0]);B.scale.set(s*1.08*n.headWidth,s*1.12,s*1.1),B.rotation.y=Math.PI}}if(n.earring!=="none")for(let L of[1,-1]){let O=t.L["ear"+(L>0?"L":"R")],T;O?T=O.g.position.clone().add(X(L*s*.06,-O.ks*.95,s*.02)):T=t.sideSurf(-.42,L,-.05).p.clone().add(X(L*s*.04,0,0));let H=e.metal(n.jewelColor,{r:.2});n.earring==="pearl"&&F(r,Dt(s*.06,14,10),e.phys("#fbf6ee",{r:.15,cc:1,sheen:1,sheenColor:"#ffd8e8"}),T.toArray()),n.earring==="hoop"&&F(r,new Zt(s*.13,s*.015,8,28),H,[T.x,T.y-s*.12,T.z],[0,Math.PI/2,0]),n.earring==="star"&&(F(r,Vt([T,T.clone().add(X(0,-s*.2,0))],{segs:3,rad:4,r:s*.008}),H),F(r,u(d(s*.1,s*.045),s*.03),H,[T.x,T.y-s*.28,T.z],[0,L*Math.PI/2,0])),n.earring==="feather"&&(F(r,Vt([T,T.clone().add(X(0,-s*.12,0))],{segs:3,rad:4,r:s*.008}),H),F(r,Vt([T.clone().add(X(0,-s*.12,0)),T.clone().add(X(L*s*.02,-s*.35,-s*.03)),T.clone().add(X(L*s*.05,-s*.55,-s*.08))],{segs:12,rad:8,rFn:ur(s*.07,.15),flat:.15,outFn:()=>X(L,0,0)}),e.phys(n.jewelColor==="#d4af37"?"#3a6bc8":n.jewelColor,{r:.7,side:ae}))),n.earring==="neonbar"&&(F(r,new Ln(s*.02,s*.3,4,8),e.glow(n.cyberColor),[T.x,T.y-s*.2,T.z]),Si(r,n.cyberColor,s*.6,[T.x,T.y-s*.2,T.z]))}let R=n.necklace,w=t.neckR;if(R!=="none"){let L=e.metal(n.jewelColor,{r:.2});if((R==="choker"||R==="neonchoker")&&(F(i.neck,new Zt(w+.004,.006,8,28),R==="neonchoker"?e.glow(n.cyberColor):e.std("#1f1f24",{r:.5}),[0,t.neckLen*.5,0],[Math.PI/2,0,0]),R==="choker"&&F(i.neck,u(_(.008),.004),L,[0,t.neckLen*.5-.01,w+.01])),R==="pendant"||R==="amulet"){let O=[];for(let z=0;z<=20;z++){let et=z/20*Math.PI*2,D=t.T*.98-(Math.cos(et)+1)*.5*(R==="amulet"?.1:.07),U=t.tR(Math.min(D,t.T*.99))+.016;O.push(X(Math.sin(et)*U*(et>Math.PI*.5&&et<Math.PI*1.5?.8:1),D,Math.cos(et)*U*t.depth))}let T=new le;i.pelvis.add(T),F(T,Vt(O,{segs:60,rad:4,r:.0022,closed:!0}),L);let H=O[0];R==="amulet"?(F(T,new Zt(.02,.004,8,24),L,[H.x,H.y-.02,H.z+.006]),F(T,Dt(.016,16,12),e.phys(n.gemColor,{r:.05,cc:1,emissive:n.gemColor,ei:.6}),[H.x,H.y-.02,H.z+.006],null,[1,1,.5]),Si(T,n.gemColor,.06,[H.x,H.y-.02,H.z+.015])):F(T,u(_(.01),.005),L,[H.x,H.y-.012,H.z+.004])}if(R==="scarf"){let O=e.phys(n.jewelColor==="#d4af37"?"#e05050":n.jewelColor,{r:.95,sheen:.8});F(i.neck,new Zt(w+.025,.026,10,24),O,[0,t.neckLen*.2,0],[Math.PI/2,0,0]),F(i.pelvis,Vt([X(.03,t.T*.98,t.tR(t.T*.95)*t.depth+.03),X(.045,t.T*.8,t.tR(t.T*.8)*t.depth+.035),X(.05,t.T*.6,t.tR(t.T*.6)*t.depth+.04)],{segs:12,rad:8,r:.022,flat:.35,outFn:()=>X(0,0,1)}),O)}}let E=n.backAcc,N=-t.chestR*t.depth-.015;if(E!=="none"){let L=new le;L.position.set(0,0,N),i.chest.add(L);let O=n.backAccColor;if(E==="backpack"){let T=e.phys(O==="#ffffff"?"#ff9fbf":O,{r:.8,sheen:.4});F(L,new Ln(.075,.08,8,16),T,[0,-.1,-.05],null,[1.1,1,.55]),F(L,new Ln(.05,.03,6,12),T,[0,-.15,-.09],null,[1,1,.4]);for(let H of[1,-1])F(i.pelvis,Vt([X(H*.06,t.T*.82,N-.02),X(H*.075,t.T*.97,0),X(H*.07,t.T*.8,t.tR(t.T*.8)*t.depth+.02),X(H*.08,t.T*.45,t.tR(t.T*.45)*t.depth+.016)],{segs:16,rad:5,r:.007,flat:.4}),T)}if(E==="angel"||E==="devil"||E==="fairy"||E==="jetpack")for(let T of[1,-1]){let H=new le;if(H.position.set(T*.04,0,-.02),H.rotation.y=T*.35,L.add(H),E==="angel"){let z=e.phys(O,{r:.7,sheen:1,sheenColor:"#ffffff",side:ae});for(let et=0;et<3;et++){let D=9-et*2;for(let U=0;U<D;U++){let Y=U/(D-1),B=X(T*(.03+Y*.42),.05+Math.sin(Y*Math.PI*.8)*.18-et*.05,-Y*.08),I=(.12+Y*.2)*(1-et*.25);F(H,Dt(1,12,8),z,[B.x,B.y-I*.6,B.z-et*.01],[0,0,T*(.15+Y*.5)],[.03,I,.008])}}}else if(E==="devil"){let z=new $e;[[0,.05],[.18,.28],[.48,.32],[.5,0],[.42,.06],[.36,-.1],[.28,-.02],[.2,-.16],[.12,-.05],[0,-.1]].forEach(([Y,B],I)=>I?z.lineTo(T*Y,B):z.moveTo(T*Y,B)),z.closePath();let D=e.phys(O==="#ffffff"?"#3a1f2a":O,{r:.6,side:ae,sheen:.4});F(H,new Mn(z),D);let U=e.std(xe(O==="#ffffff"?"#3a1f2a":O,.6),{r:.5});F(H,Vt([X(0,.05,.003),X(T*.18,.28,.003),X(T*.48,.32,.003)],{segs:10,rad:6,r:.007}),U);for(let[Y,B]of[[.5,0],[.36,-.1],[.2,-.16]])F(H,Vt([X(T*.18,.28,.003),X(T*Y,B,.003)],{segs:6,rad:5,rFn:ei(.005,.4)}),U)}else{let z=E==="jetpack";for(let[et,D]of[[1,1],[-1,.65]]){let U=new $e;z?(U.moveTo(0,0),U.lineTo(T*.42*D,et*.3*D),U.lineTo(T*.36*D,et*.12*D),U.lineTo(T*.45*D,et*.06*D),U.closePath()):U.absellipse(T*.2*D,et*.13*D,.21*D,.12*D,0,Math.PI*2,!1,et*T*.5);let Y=z?e.glow(n.cyberColor,{transparent:!0,opacity:.55,side:ae,add:!0}):e.phys(O==="#ffffff"?"#c8f0ff":O,{r:.1,transparent:!0,opacity:.45,side:ae,cc:1,emissive:O==="#ffffff"?"#88ccff":O,ei:.2}),B=F(H,new Mn(U,24),Y);B.userData.noShadow=!0,F(H,Vt(U.getPoints(40).map(I=>X(I.x,I.y,.002)),{segs:60,rad:4,r:.002}),z?e.glow(n.cyberColor):e.glow("#ffffff",{boost:1}))}}}if(E==="quiver"){let T=e.phys("#6b4430",{r:.6}),H=new le;H.rotation.z=-.5,H.position.set(.02,-.1,-.03),L.add(H),F(H,new ie(.035,.03,.3,16),T);for(let z=0;z<4;z++)F(H,new ie(.003,.003,.12,6),e.std("#c9a46a"),[(z-1.5)*.012,.2,z%2*.01]),F(H,new an(.012,.04,3),e.std(O==="#ffffff"?"#e05050":O),[(z-1.5)*.012,.25,z%2*.01]);F(i.pelvis,Vt([X(-.09,t.T*.45,N),X(.09,t.T*.97,0),X(.02,t.T*.6,t.tR(t.T*.6)*t.depth+.02),X(-.1,t.T*.35,t.tR(t.T*.35)*t.depth+.015)],{segs:20,rad:5,r:.007,flat:.4}),T)}}let Z=n.propColor,b=n.propGlow,M=L=>{let O=new le;return O.position.set(0,-.045,.012),i["wr"+L].add(O),O},V=(L,O)=>{if(L==="none")return;let T=M(O),H=O==="L"?1:-1,z=e.metal(Z),et=e.phys("#7a5030",{r:.7}),D=e.glow(b);switch(L){case"bouquet":{F(T,new an(.045,.16,16,1,!0),e.phys("#fff4e8",{r:.8,side:ae}),[0,.04,.02],[Math.PI,0,0]);let U=["#ff9fbf","#ffffff","#fff1a8","#e05050","#c8b6ff"];for(let Y=0;Y<7;Y++){let B=Y*2.4,I=Y?.03:0;J(T,X(Math.cos(B)*I,.13+(Y?0:.01),.02+Math.sin(B)*I),.028,U[Y%5])}break}case"icecream":F(T,new an(.025,.08,16),e.phys("#d9a066",{r:.8}),[0,0,.02],[Math.PI,0,0]),F(T,Dt(.03,16,12),e.phys("#ffc0d0",{r:.5,cc:.4}),[0,.05,.02]),F(T,Dt(.027,16,12),e.phys("#fff8e8",{r:.5,cc:.4}),[0,.09,.02]),F(T,Dt(.008,8,6),e.phys("#e02040",{r:.2,cc:1}),[0,.12,.02]);break;case"phone":F(T,new Me(.035,.07,.006),e.phys(Z,{r:.3,m:.5}),[0,0,.025],[-.4,0,0]),F(T,new xi(.031,.064),e.glow(b,{boost:.8}),[0,0,.0285],[-.4,0,0]);break;case"balloon":{let U=X(0,.55,.06);F(T,Vt([X(0,0,0),X(.02,.25,.03),U],{segs:12,rad:3,r:.0012}),e.std("#ffffff")),F(T,u(_(.07),.06),e.phys("#ff4f8f",{r:.15,cc:1}),[U.x,U.y+.08,U.z]);break}case"staff":{F(T,new ie(.009,.011,1.15,10),et,[0,.2,0]);let U=X(0,.8,0);for(let Y=0;Y<4;Y++){let B=Y*Math.PI/2;F(T,Vt([X(0,.76,0),X(Math.cos(B)*.04,.82,Math.sin(B)*.04),X(Math.cos(B)*.02,.88,Math.sin(B)*.02)],{segs:8,rad:5,rFn:ei(.006,.3)}),et)}F(T,Dt(.035,20,14),e.phys(b,{r:.05,cc:1,emissive:b,ei:1.2}),[0,.84,0]),Si(T,b,.3,[0,.84,0]);break}case"sword":case"dagger":{let U=L==="sword"?.62:.24,Y=new le;Y.rotation.x=Math.PI/2-.25,T.add(Y),F(Y,new ie(.011,.011,.09,10),e.phys("#3a2418",{r:.6}),[0,0,0]),F(Y,new Me(L==="sword"?.13:.07,.014,.02),e.metal("#d4af37"),[0,.05,0]),F(Y,Dt(.016,10,8),e.metal("#d4af37"),[0,-.05,0]);let B=new $e;B.moveTo(-.018,0),B.lineTo(.018,0),B.lineTo(.016,U-.06),B.lineTo(0,U),B.lineTo(-.016,U-.06),B.closePath(),F(Y,new Wr(B,{depth:.004,bevelEnabled:!0,bevelThickness:.002,bevelSize:.002,bevelSegments:1}),z,[0,.057,-.002]);break}case"bow":{let U=new le;U.rotation.y=H*Math.PI/2,T.add(U),F(U,new Zt(.42,.008,8,40,Math.PI*.7),et,[-.38,0,0],[0,0,-Math.PI*.35]);let Y=X(-.38+Math.cos(Math.PI*.35)*.42,Math.sin(Math.PI*.35)*.42,0);F(U,Vt([Y,X(Y.x,-Y.y,0)],{segs:2,rad:3,r:.0012}),e.std("#f4f4f4")),F(U,new ie(.012,.012,.08,8),e.phys("#3a2418"),[.04,0,0]);break}case"book":{F(T,new Me(.11,.14,.03),e.phys(Z==="#c8ccd4"?"#6a2a7a":Z,{r:.6}),[H*-.02,0,.04],[0,H*.3,0]),F(T,new Me(.104,.13,.024),e.std("#fff4e0"),[H*-.022,0,.044],[0,H*.3,0]),F(T,u(d(.025,.011),.003),e.glow(b),[H*-.012,0,.072],[0,H*.3,0]);break}case"lantern":{F(T,Vt([X(0,0,0),X(0,-.05,.02),X(0,-.06,.06)],{segs:6,rad:4,r:.003}),e.metal("#3a3d44"));let U=X(0,-.13,.06);F(T,new ie(.03,.035,.08,6,1,!0),e.metal("#3a3d44",{r:.5}),U.toArray()).material.wireframe=!0,F(T,new ie(.026,.03,.07,12),e.glow(b==="#2ff5ff"?"#ffb347":b,{transparent:!0,opacity:.85}),U.toArray()),F(T,new an(.04,.03,6),e.metal("#3a3d44"),[U.x,U.y+.055,U.z]),Si(T,b==="#2ff5ff"?"#ffb347":b,.35,U.toArray());break}case"holotab":{F(T,new Me(.1,.006,.07),e.cyberMetal,[0,0,.05],[0,0,0]);let U=F(T,new xi(.16,.11),e.glow("#ffffff",{map:Lu(b),transparent:!0,side:ae,add:!0,boost:1.2}),[0,.09,.07],[-.3,0,0]);U.userData.noShadow=!0;break}case"katana":{let U=new le;U.rotation.x=Math.PI/2-.3,T.add(U),F(U,new ie(.01,.01,.12,10),e.std("#15151a"),[0,-.01,0]),F(U,new ie(.025,.025,.006,16),e.cyberMetal,[0,.05,0]);let Y=F(U,new Me(.012,.6,.004),e.glow(b,{boost:2}),[0,.35,0]);Y.userData.noShadow=!0,F(U,new Me(.03,.62,.012),e.glow(b,{transparent:!0,opacity:.25,add:!0}),[0,.35,0]);break}case"holoorb":{let U=X(0,.08,.05);F(T,new da(.05,1),e.glow(b,{boost:1.5}),U.toArray()).material.wireframe=!0,F(T,Dt(.032,16,12),e.glow(b,{transparent:!0,opacity:.5,add:!0}),U.toArray()),Si(T,b,.25,U.toArray());break}case"shield":{let U=new le;U.position.set(H*.04,.02,0),U.rotation.y=H*Math.PI/2,T.add(U),F(U,new ie(.15,.15,.02,32),e.phys(Z==="#c8ccd4"?"#3a6bc8":Z,{r:.5,m:.3}),[0,0,0],[Math.PI/2,0,0]),F(U,new Zt(.15,.012,8,40),e.metal("#d4af37"),[0,0,0]),F(U,Dt(.035,16,10),e.metal("#d4af37"),[0,0,.01],null,[1,1,.6]),F(U,u(d(.08,.035),.004),e.metal("#e8e8f0"),[0,0,.013]);break}case"potion":{let U=X(0,.03,.03);F(T,Dt(.035,16,12),e.phys("#ffffff",{r:.02,transparent:!0,opacity:.35,cc:1}),U.toArray()),F(T,Dt(.03,16,12),e.glow(b==="#2ff5ff"?"#ff4fb0":b,{transparent:!0,opacity:.85}),[U.x,U.y-.003,U.z]),F(T,new ie(.01,.012,.04,10),e.phys("#ffffff",{r:.02,transparent:!0,opacity:.4}),[U.x,U.y+.045,U.z]),F(T,new ie(.011,.011,.015,10),e.phys("#8a5a30"),[U.x,U.y+.07,U.z]);break}case"drink":F(T,new ie(.028,.022,.09,16),e.phys("#ffffff",{r:.1,transparent:!0,opacity:.5,cc:1}),[0,.02,.03]),F(T,new ie(.025,.02,.07,16),e.phys("#c8865a",{r:.3}),[0,.01,.03]),F(T,Dt(.025,14,10),e.phys("#ffffff",{r:.7}),[0,.06,.03],null,[1,.4,1]),F(T,new ie(.003,.003,.12,6),e.std("#ff9fbf"),[.008,.08,.03],[0,0,.2]);break}};V(n.prop,"R"),V(n.propL,"L");function J(L,O,T,H){let z=new le;z.position.copy(O),L.add(z);let et=e.phys(H,{r:.6,sheen:.5});for(let D=0;D<5;D++){let U=D/5*Math.PI*2;F(z,Dt(1,10,8),et,[Math.cos(U)*T*.5,Math.sin(U)*T*.5,0],[0,0,U],[T*.5,T*.32,T*.18])}return F(z,Dt(T*.28,10,8),e.phys("#ffd84a",{r:.6}),[0,0,T*.08]),z.lookAt(O.clone().multiplyScalar(2)),z}}var Hu=_n(()=>{Nn();Ji();Qr();jr()});function x1(n){let t=[],e=r=>(t.push(r),r),i={list:t,std:(r,o={})=>e(new Un({color:r,roughness:o.r??.7,metalness:o.m??0,side:o.side??vn,transparent:!!o.transparent,opacity:o.opacity??1,emissive:o.emissive??"#000000",emissiveIntensity:o.ei??1,map:o.map??null,vertexColors:!!o.vc,flatShading:!!o.flat,depthWrite:o.depthWrite??!0})),phys:(r,o={})=>e(new ga({color:r,roughness:o.r??.5,metalness:o.m??0,clearcoat:o.cc??0,clearcoatRoughness:o.ccr??.1,sheen:o.sheen??0,sheenColor:o.sheenColor??"#ffffff",side:o.side??vn,transparent:!!o.transparent,opacity:o.opacity??1,emissive:o.emissive??"#000000",emissiveIntensity:o.ei??1,map:o.map??null,transmission:o.trans??0})),glow:(r,o={})=>{let a=e(new jn({color:r,transparent:!!o.transparent,opacity:o.opacity??1,side:o.side??vn,blending:o.add?Lr:Vi,depthWrite:o.depthWrite??!o.add,map:o.map??null}));return a.color.multiplyScalar(o.boost??1.6),a.toneMapped=!1,a},metal:(r,o={})=>e(new Un({color:r,roughness:o.r??.28,metalness:o.m??.9,side:o.side??vn}))},s=n.scales==="full";return i.skin=i.phys(s?"#ffffff":n.skin,{r:.62-n.skinGloss*.35,sheen:.35,sheenColor:en(n.skin,"#ffd0c0",.5),cc:n.skinGloss*.25,ccr:.4,map:s?Cu(n.skin,en(n.skin,n.scaleColor,.6),10):null}),s&&(i.skin.bumpMap=i.skin.map,i.skin.bumpScale=1.5,i.skin.color.set(en(n.skin,"#ffffff",.35))),i.skinHead=s?i.phys(n.skin,{r:.62-n.skinGloss*.35,sheen:.35,sheenColor:en(n.skin,"#ffd0c0",.5),cc:n.skinGloss*.25}):i.skin,i.skinDark=i.std(xe(n.skin,.8),{r:.7}),i.neon=i.glow(n.cyberColor),i.cyberMetal=i.metal(n.cyberMetal,{r:.35}),i}function F(n,t,e,i,s,r){let o=new Gt(t,e);return i&&o.position.set(i[0],i[1],i[2]),s&&o.rotation.set(s[0],s[1],s[2]),r&&(typeof r=="number"?o.scale.setScalar(r):o.scale.set(r[0],r[1],r[2])),n.add(o),o}function Si(n,t,e,i=[0,0,0]){let s=new Fr({map:Iu(),color:t,blending:Lr,transparent:!0,depthWrite:!1});s.toneMapped=!1;let r=new aa(s);return r.scale.setScalar(e),r.position.set(...i),r.userData.noShadow=!0,n.add(r),r}function Mi(n,t,e,i=!0,s=20){let r=[];if(i)for(let a=0;a<=5;a++){let l=-Math.PI/2+a/5*(Math.PI/2);r.push(new dt(Math.max(1e-4,Math.cos(l)*t),-e+Math.sin(l)*t))}else r.push(new dt(t,-e));let o=6;for(let a=1;a<o;a++){let l=a/o,c=Math.sin(l*Math.PI)*.06*(n+t);r.push(new dt(Rt(t,n,l)+c,-e+e*l))}if(i)for(let a=0;a<=5;a++){let l=a/5*(Math.PI/2);r.push(new dt(Math.max(1e-4,Math.cos(l)*n),Math.sin(l)*n))}else r.push(new dt(n,0));return new Yn(r,s)}function v1(n,t){let e=Gu[n.faceShape]||Gu.oval,i=e.jaw*n.jaw,s=e.chin*n.chin,r=e.cheek+n.cheek*.6;return o=>{let{x:a,y:l,z:c}=o;if(l*=1.04*e.ys,l<0){let f=Re(-l,0,1),p=Rt(1,i,Math.pow(f,1.3));p*=1-e.point*Math.pow(f,3)*.45,e.square>0&&(p=Rt(p,Math.min(1,p*(1+e.square*.3*(1-Math.pow(f,6)))),.8)),a*=p,c*=Rt(1,Math.max(i,.8),f*f*.7),l*=s}else a*=Rt(1,e.fore,l);let h=Math.exp(-Math.pow((o.y+.38)/.24,2))*r*.13;return a*=1+h,c>0&&(c*=1+h*.6),c>0?c*=.94-.05*(1-Math.abs(o.y)):o.y>-.3&&(c*=1.07),a*=n.headWidth,new G(a*t,l*t,c*t)}}function Xu(n){let t=x1(n),e=new le;e.name="character";let i=n.height,s=n.width,r=n.muscle,o={};o.R=.13*n.headSize,o.legLen=.6*i*n.legLen,o.footH=.055,o.T=.4*i,o.neckLen=.055*n.neckLen*i,o.armU=.235*i*n.armLen,o.armF=.205*i*n.armLen,o.hipR=.118*s*n.hips,o.waistR=.098*s*n.waist,o.chestR=.112*s*n.chest*(.9+.1*r),o.shoulderX=.14*s*n.shoulders*(.93+.07*r),o.neckR=.04*Math.sqrt(s*r),o.uArm=.034*Math.sqrt(s)*r,o.fArm=.028*Math.sqrt(s)*r,o.thigh=.056*s*Math.pow(r,.7)*Math.sqrt(n.hips),o.shin=.04*Math.pow(s,.6)*Math.pow(r,.6),o.pelvisY=o.footH+o.legLen,o.depth=Ua,o.headY=o.pelvisY+o.T+o.neckLen+o.R*.92,o.top=o.headY+o.R*1.1;let a=o.T,l=[[.002,-.088],[o.hipR*.72,-.078],[o.hipR*.96,-.04],[o.hipR,0],[o.hipR*.97,.06],[o.waistR,a*.42],[o.chestR*.96,a*.66],[o.chestR,a*.78],[o.chestR*.9,a*.92],[o.neckR*1.9,a*.99],[o.neckR*1.02,a*1.04]],h=new ti(l.map(([T,H])=>X(T,H,0)),!1,"centripetal").getPoints(70);o.profile=h,o.tR=T=>{if(T<=h[0].y)return h[0].x;if(T>=h[h.length-1].y)return h[h.length-1].x;for(let H=1;H<h.length;H++)if(h[H].y>=T){let z=h[H-1],et=h[H];return Rt(z.x,et.x,(T-z.y)/Math.max(1e-6,et.y-z.y))}return h[h.length-1].x};let f={},p=(T,H,z=0,et=0,D=0)=>{let U=new le;return U.name=T,U.position.set(z,et,D),H.add(U),f[T]=U,U},m=p("pelvis",e,0,o.pelvisY,0),g=F(m,new Yn(h.map(T=>new dt(T.x,T.y)),40),t.skin);g.scale.z=Ua,f.torsoMesh=g,F(m,new Ln(.036*Math.sqrt(r*s),o.shoulderX*1.5,6,16),t.skin,[0,a*.885,0],[0,0,Math.PI/2]).scale.set(1,1,.85);let d=p("chest",m,0,a*.885,0),u=p("neck",m,0,a*.98,0);F(u,Mi(o.neckR,o.neckR*1.08,o.neckLen+.04,!1),t.skin,[0,o.neckLen+.015,0]);let y=p("headPivot",u,0,o.neckLen,0),v=p("headC",y,0,o.R*.92,.005);for(let T of[1,-1]){let H=T>0?"L":"R",z=p("sh"+H,m,T*o.shoulderX,a*.87,0);F(z,Dt(o.uArm*1.3,18,14),t.skin,[0,-.005,0]);let et=n.mechArm==="both"||n.mechArm==="left"&&T>0||n.mechArm==="right"&&T<0,D=et?t.cyberMetal:t.skin;f["upper"+H]=F(z,Mi(o.uArm,o.uArm*.85,o.armU),D);let U=p("el"+H,z,0,-o.armU,0);f["fore"+H]=F(U,Mi(o.fArm,o.fArm*.72,o.armF),D);let Y=p("wr"+H,U,0,-o.armF,0),B=F(Y,Dt(1,18,14),D,[0,-.04,.004],null,[.03,.045,.017]);if(F(Y,new Ln(.0095,.022,4,8),D,[0,-.028,.02],[.6,0,0]),f["hand"+H]=B,et){for(let[W,Q,it]of[[z,o.armU,o.uArm],[U,o.armF,o.fArm]]){for(let rt=1;rt<4;rt++)F(W,new Zt(it*(1.02-rt*.04),it*.12,6,20),t.neon,[0,-Q*rt/4,0],[Math.PI/2,0,0]);F(W,new Me(it*.25,Q*.7,it*.25),t.neon,[T*it*.9,-Q*.5,0])}F(U,Dt(o.fArm*1.15,16,12),t.cyberMetal)}let I=p("hip"+H,m,T*o.hipR*.5,-.025,0);f["thigh"+H]=F(I,Mi(o.thigh,o.shin*1.12,o.legLen*.5),t.skin);let k=p("kn"+H,I,0,-o.legLen*.5,0);f["shin"+H]=F(k,Mi(o.shin*1.12,o.shin*.7,o.legLen*.5),t.skin);let q=p("an"+H,k,0,-o.legLen*.5,0);f["foot"+H]=F(q,Dt(1,18,12),t.skin,[0,-o.footH*.55,.035],null,[.037,.03,.075])}let x=o.R,R=v1(n,x);o.D=R;let w=new Te(1,64,48);w.rotateY(-Math.PI/2);{let T=w.attributes.position,H=new G;for(let z=0;z<T.count;z++){H.fromBufferAttribute(T,z).normalize();let et=R(H);T.setXYZ(z,et.x,et.y,et.z)}w.computeVertexNormals()}let E=new Gt(w,t.skinHead);E.updateMatrixWorld(!0);let N=new Ma,Z=(T,H,z=0)=>{N.set(X(T*x,H*x,3*x),X(0,0,-1));let et=N.intersectObject(E,!1)[0];if(!et)return{p:X(T*x,H*x,.2*x),n:X(0,0,1)};let D=et.face.normal.clone();return{p:et.point.clone().addScaledVector(D,z*x),n:D}},b=(T,H,z=-.05)=>{N.set(X(H*3*x,T*x,z*x),X(-H,0,0));let et=N.intersectObject(E,!1)[0];return et?{p:et.point.clone(),n:et.face.normal.clone()}:{p:X(H*x,T*x,z*x),n:X(H,0,0)}};o.surf=Z,o.sideSurf=b,v.add(E),f.headMesh=E,o.hideEars=Uu.includes(n.backHair)&&n.outer!=="hoodcloak";let M=b1(n,o,t,v);o.L=M;let V=Pu(n,M),J=new Un({map:V.map,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,roughness:.6,emissive:"#ffffff",emissiveMap:V.glow,emissiveIntensity:1.4});t.list.push(J);let L=new Gt(new Ia(E,X(0,0,x),new Pn(0,0,0),X(2.5*x,2.5*x,2.2*x)),J);L.userData.noShadow=!0,v.add(L),e.userData.textures=[V.map,V.glow];let O=v.children.length;return Nu(n,o,t,v),o.hairMeshes=v.children.slice(O),Ou(n,o,t,v),S1(n,o,t,v),Fu(n,o,t,f),zu(n,o,t,f),w1(n,o,t,m),e.traverse(T=>{T.isMesh&&!T.userData.noShadow&&(T.castShadow=!0,T.receiveShadow=!0)}),e.userData.mats=t.list,e.userData.dims=o,e.userData.rig=f,{root:e,rig:f,d:o}}function b1(n,t,e,i){let s=t.R,r={eyes:[],lids:[]},o=Vu[n.eyeShape]||Vu.round,a=-.12+n.eyeY,l=.36*n.eyeSpacing*n.headWidth,c=.16*n.eyeSize,h=n.shadowStyle!=="none"&&n.shadowStyle!=="under"?en(n.skin,n.shadowColor,n.shadowAlpha*.75):xe(n.skin,.97),f=e.phys(h,{r:.5,sheen:.3}),p=e.std(n.lashColor,{r:.6}),m=e.std(n.linerColor,{r:.5}),g=e.phys(n.sclera,{r:.15,cc:1,ccr:.05}),_=e.glow("#ffffff",{boost:1.2});for(let V of[1,-1]){let J=t.surf(V*l,a),L=new le,O=J.n.clone().add(X(0,0,1.6)).normalize();L.quaternion.setFromUnitVectors(X(0,0,1),O),L.position.copy(J.p).addScaledVector(J.n,-c*s*.3);let T=new le;T.rotation.z=V*(o.tilt+n.eyeTilt),L.add(T);let H=new le;H.scale.set(c*s*o.sx*V,c*s*o.sy,c*s*.55),T.add(H),i.add(L),r.eyes.push({x:V*l,y:a,r:c*Math.max(o.sx,o.sy),sg:V,group:L});let z=n.ledEye==="both"||n.ledEye==="left"&&V>0||n.ledEye==="right"&&V<0;if(n.eyeShape==="smile"&&!z){let xt=[];for(let mt=0;mt<=10;mt++){let P=-.95+mt*.19;xt.push(X(P,.1+.45*(1-P*P),.95))}if(F(H,Vt(xt,{segs:20,rad:6,rFn:ur(.12,.5)}),p),n.lashStyle!=="none")for(let mt of[.2,.05])F(H,Vt([X(.9-mt,.25+mt,.9),X(1.15,.45+mt*2,.85),X(1.35,.6+mt*2,.7)],{segs:6,rad:5,rFn:ei(.07*n.lashThick)}),p);r.lids.push(null);continue}F(H,Dt(1,32,24),g);let et=new le;et.rotation.y=n.lookX*.42*V,et.rotation.x=-n.lookY*.32,H.add(et),(r.looks||(r.looks=[])).push({g:et,sg:V});let D=z?.62:n.irisSize,U=n.heterochromia&&V<0?n.irisColor2:n.irisColor,Y=z?"mech":n.irisStyle,B=n.glowEyes||z,I=new Te(1.006,40,14,0,Math.PI*2,0,Math.asin(D));I.rotateX(Math.PI/2);let k=Au(Y,z?n.cyberColor:U,B),q=e.phys("#ffffff",{r:.25,cc:1,ccr:.02,map:k});B&&(q.emissive.set("#ffffff"),q.emissiveMap=k,q.emissiveIntensity=1.6),F(et,I,q),B&&Si(et,z?n.cyberColor:U,1.9,[0,0,1.1]);let W=-.28*V,Q=.3,it=(xt,mt,P)=>{let S=Math.sqrt(Math.max(.01,1-xt*xt-mt*mt))+.012;return F(et,Dt(P,12,8),_,[xt*D/.66,mt*D/.66,S],null,[1,1,.3])};if(Y==="sparkle"){let xt=new $e;for(let mt=0;mt<8;mt++){let P=mt*Math.PI/4,S=mt%2?.05:.17;mt?xt.lineTo(Math.cos(P)*S,Math.sin(P)*S):xt.moveTo(S,0)}F(et,new Mn(xt),_,[W*D/.66,Q*D/.66,1.03]),it(.24*V,-.32,.07)}else Y!=="mech"&&(it(W,Q,.15),it(.22*V,-.3,.07));if(z){F(H,new Zt(1.08,.12,8,32),e.cyberMetal,[0,0,.35]);for(let xt=0;xt<3;xt++)F(H,new Me(.5,.06,.06),e.neon,[1.25,.3-xt*.3,.3])}let rt=Re(-.7+(o.h+.7)*n.eyeOpen,-.6,.95),st=Math.acos(rt),$=new le;H.add($),r.lids.push($),$.userData.thU=st,F($,new Te(1.045,36,14,0,Math.PI*2,0,st),f);let A=Math.acos(Re(-o.l,-.95,.99));F(H,new Te(1.035,36,8,0,Math.PI*2,Math.PI-A,A),f);let lt=(xt,mt=1.07,P=.04,S=.96,nt=14)=>{let ut=[];for(let gt=0;gt<=nt;gt++){let pt=Math.PI*Rt(P,S,gt/nt);ut.push(X(Math.sin(xt)*Math.cos(pt)*mt,Math.cos(xt)*mt,Math.sin(xt)*Math.sin(pt)*mt))}return ut},ft=n.lashStyle,ht=n.lashThick,yt=n.lashLen;if(ft!=="none"){let xt={natural:.07,full:.1,wing:.09,doll:.1,bottom:.075}[ft];F($,Vt(lt(st),{segs:28,rad:6,rFn:P=>xt*ht*Rt(1.35,.45,P),flat:.6}),p);let mt={natural:3,full:6,wing:1,doll:9,bottom:3}[ft];for(let P=0;P<mt;P++){let S=Math.PI*(ft==="doll"?Rt(.1,.8,P/(mt-1)):Rt(.05,.3,mt>1?P/(mt-1):0)),nt=X(Math.sin(st)*Math.cos(S)*1.06,Math.cos(st)*1.06,Math.sin(st)*Math.sin(S)*1.06),ut=X(nt.x*1,0,nt.z*.6).normalize(),gt=(ft==="wing"?.65:ft==="doll"?.38:.3)*yt,pt=ft==="doll"?.9:.55,Ot=nt.clone().addScaledVector(ut,gt*.7).add(X(0,gt*pt,0)),wt=nt.clone().lerp(Ot,.5).add(X(0,-gt*.12,0));F($,Vt([nt,wt,Ot],{segs:8,rad:5,rFn:ei(xt*ht*.9,.05)}),p)}if(ft==="doll"||ft==="bottom")for(let P=0;P<4;P++){let S=Math.PI*Rt(.12,.62,P/3),nt=X(Math.sin(A)*Math.cos(S)*1.04,-Math.cos(A)*1.04,Math.sin(A)*Math.sin(S)*1.04),ut=nt.clone().add(X(nt.x*.1,-.22*yt,.05));F(H,Vt([nt,nt.clone().lerp(ut,.5).add(X(.02,0,.03)),ut],{segs:6,rad:4,rFn:ei(.04*ht,.05)}),p)}}if(n.linerStyle!=="none"){let xt={thin:.06,wing:.085,bold:.13,puppy:.09}[n.linerStyle],mt=lt(st,1.065,0,.92),P=mt[0];n.linerStyle==="wing"&&mt.unshift(X(P.x+.38,P.y+.3,P.z-.1)),n.linerStyle==="puppy"&&mt.unshift(X(P.x+.3,P.y-.25,P.z-.1)),F($,Vt(mt.reverse(),{segs:30,rad:6,rFn:S=>xt*Rt(.6,1.3,S),flat:.5}),m)}}let d=e.std(n.browColor,{r:1});d.envMapIntensity=.15;let u={straight:V=>.015*V,arch:V=>.12*Math.sin(Math.PI*V*.85)-.05*V,angled:V=>V<.62?.13*V/.62:.13-(V-.62)*.42,soft:V=>.07*Math.sin(Math.PI*V),droop:V=>.06*Math.sin(Math.PI*V)-.12*V,thick:V=>.06*Math.sin(Math.PI*V),thin:V=>.1*Math.sin(Math.PI*V*.9)-.03*V},y=a+c*1.05+.15+n.browY;for(let V of[1,-1]){let J=l*n.browSpacing,L=.25*n.browLen;if(n.browStyle==="dot"){let et=t.surf(V*(J-.12),y+.02,.01);F(i,Dt(1,14,10),d,et.p.toArray(),null,[s*.07*n.browSize,s*.045*n.browSize,s*.02]).quaternion.setFromUnitVectors(X(0,0,1),et.n);continue}let O=u[n.browStyle]||u.soft,T=[],H=V*n.browTilt;for(let et=0;et<=8;et++){let D=et/8,U=J-L+D*L*2,Y=y+O(D),B=U-J,I=Y-y,k=Math.cos(H),q=Math.sin(H);U=J+B*k-I*q,Y=y+B*q+I*k,T.push(t.surf(V*U,Y,.012).p)}let z=(n.browStyle==="thick"?1.8:n.browStyle==="thin"?.5:1)*n.browSize;F(i,Vt(T,{segs:20,rad:8,rFn:et=>s*.033*z*Rt(1.15,.35,Zn(et))*(et<.08?.7+et*3.7:1),flat:.35,outFn:et=>et.clone().normalize()}),d)}let v=-.42+n.noseY,x=t.surf(0,v),R=new le;R.position.copy(x.p),R.quaternion.setFromUnitVectors(X(0,0,1),x.n.clone().add(X(0,0,1)).normalize()),R.scale.set(s*n.noseSize*n.noseWidth,s*n.noseSize,s*n.noseSize*n.noseLen),i.add(R);let w=e.skinHead,E=e.std(xe(n.skin,.55),{r:.9}),N=n.noseStyle;if(N==="round"){F(R,Dt(1),w,[0,0,0],null,[.095,.075,.07]);for(let V of[1,-1])F(R,Dt(1),w,[V*.075,-.02,-.02],null,[.045,.04,.04])}if(N==="button"&&F(R,Dt(1),w,[0,0,0],null,[.065,.055,.055]),N==="high"){F(R,Dt(1),w,[0,.13,-.015],[-.25,0,0],[.05,.19,.06]),F(R,Dt(1),w,[0,-.01,.02],null,[.06,.055,.06]);for(let V of[1,-1])F(R,Dt(1),w,[V*.055,-.03,-.01],null,[.035,.03,.03])}if(N==="wide"){F(R,Dt(1),w,[0,0,0],null,[.12,.075,.07]);for(let V of[1,-1])F(R,Dt(1),w,[V*.11,-.025,-.02],null,[.06,.05,.045])}if(N==="dot"){F(R,Dt(1),w,[0,0,-.01],null,[.05,.04,.035]);for(let V of[1,-1])F(R,Dt(1,8,6),E,[V*.03,-.03,.015],null,[.012,.008,.01])}if(N==="hook"&&(F(R,Dt(1),w,[0,.14,-.01],[-.3,0,0],[.05,.2,.065]),F(R,Dt(1),w,[0,.12,.035],null,[.04,.05,.04]),F(R,Dt(1),w,[0,-.015,.03],[.3,0,0],[.06,.07,.06])),N==="snub"){F(R,Dt(1),w,[0,.01,.02],[-.4,0,0],[.07,.06,.06]);for(let V of[1,-1])F(R,Dt(1,8,6),E,[V*.028,-.035,.035],null,[.016,.011,.01])}if(N!=="dot"&&N!=="snub")for(let V of[1,-1])F(R,Dt(1,8,6),E,[V*.035,-.045,.005],null,[.014,.008,.01]);r.nose={y:v},M1(n,t,e,i,r);let Z=e.skinHead,b=e.std(xe(n.skin,.85),{r:.6}),M={normal:[1,0],small:[.78,0],big:[1.3,0],elf:[1,.9],longelf:[1.05,2],round:[.95,-.3]}[n.earStyle]||[1,0];for(let V of[1,-1]){if(t.hideEars&&!n.earStyle.includes("elf"))continue;let J=t.sideSurf(-.12+n.earY,V,-.08),L=new le;L.position.copy(J.p).add(X(-V*.03*s,0,0)),L.rotation.y=V*(.15+n.earAngle*.8),i.add(L);let O=s*.2*M[0]*n.earSize,T=new Te(1,20,16),H=T.attributes.position;for(let et=0;et<H.count;et++){let D=H.getX(et)*.32,U=H.getY(et),Y=H.getZ(et)*.62;if(M[1]>0&&U>0){let B=Math.pow(U,2.2)*M[1];U+=B*1.1,Y-=B*.75,Y*=1-Math.min(.85,B*.5),D*=1-Math.min(.6,B*.3)}M[1]<0&&(U*=.85,Y*=1.15),H.setXYZ(et,D*V+V*.25,U,Y)}T.computeVertexNormals(),F(L,T,Z,null,null,O);let z=F(L,T,b,[V*O*.12,-O*.05,O*.06],null,O*.72);n.earImplant&&(F(L,new ie(O*.3,O*.3,O*.25,16),e.cyberMetal,[V*O*.45,-O*.1,-O*.45],[0,0,Math.PI/2]),F(L,new Zt(O*.22,O*.05,6,20),e.neon,[V*O*.6,-O*.1,-O*.45],[0,Math.PI/2,0])),r["ear"+(V>0?"L":"R")]={g:L,ks:O,sg:V}}return r}function M1(n,t,e,i,s){let r=t.R,o=-.64+n.mouthY,a=t.surf(0,o),l=new le;l.position.copy(a.p).addScaledVector(a.n,.002*r),l.quaternion.setFromUnitVectors(X(0,0,1),a.n.clone().add(X(0,0,1.2)).normalize()),l.scale.setScalar(r),i.add(l),s.mouth={y:o,g:l};let c=.2*n.mouthSize,h=n.mouthCurve,f=n.lipThick*(n.lipStyle==="ombre"?1.25:1),p=en(xe(n.skin,.92),n.lipColor,n.lipStyle==="gradient"?n.lipAlpha*.65:n.lipAlpha),m=e.phys(p,{r:.55-n.lipGloss*.45,cc:n.lipGloss,ccr:.04,sheen:.2}),g=e.std(en(n.lipColor,"#3a1418",.65),{r:.6}),_=R=>-.6*R*R,d=(R,w,E=0)=>X(R,w,_(R)+E),u=R=>h*.055*Math.pow(R/c,2)-h*.01,y=n.mouthStyle,v=(R,w,E,N,Z=12)=>{let b=[];for(let M=0;M<=Z;M++){let V=Rt(w,E,M/Z);b.push(d(V,R(V),.004))}return F(l,Vt(b,{segs:24,rad:6,rFn:ur(N,.35),flat:.5}),g)},x=(R,w,E,N,Z=.006,b=.55)=>{let M=[];for(let V=0;V<=12;V++){let J=Rt(w,E,V/12);M.push(d(J,R(J),Z))}return F(l,Vt(M,{segs:24,rad:10,rFn:ur(N,.25),flat:b,outFn:()=>X(0,0,1)}),m)};if(y==="smile"||y==="tongue")v(u,-c,c,.011),x(R=>u(R)-.038*f-.01,-c*.55,c*.55,.026*f),x(R=>u(R)+.018*f,-c*.6,c*.6,.014*f),y==="tongue"&&F(l,Dt(1,16,12),e.phys("#f07a8a",{r:.3,cc:.6}),[.02,-.045,.02],[.3,0,0],[.05,.045,.022]);else if(y==="full")v(R=>u(R)*.6,-c*.9,c*.9,.007),x(R=>u(R)*.6+.022*f+.008*Math.cos(R/c*Math.PI*2.2)*(Math.abs(R)<c*.45?1:0),-c*.92,c*.92,.03*f),x(R=>u(R)*.6-.035*f,-c*.8,c*.8,.038*f);else if(y==="grin"){let R=new $e,w=c*1.05,E=.02+h*.01,N=-.09*n.mouthSize;R.moveTo(-w,E+h*.02),R.quadraticCurveTo(0,E-.015,w,E+h*.02),R.quadraticCurveTo(w*.7,N,0,N),R.quadraticCurveTo(-w*.7,N,-w,E+h*.02);let Z=(O,T)=>{let H=O.attributes.position;for(let z=0;z<H.count;z++)H.setZ(z,_(H.getX(z))+T);return O.computeVertexNormals(),O},b=e.std("#5a1a26",{r:.8});b.polygonOffset=!0,b.polygonOffsetFactor=-2,F(l,Z(new Mn(R,16),.004),b);let M=new $e;M.moveTo(-w*.82,E+h*.015),M.quadraticCurveTo(0,E-.015,w*.82,E+h*.015),M.lineTo(w*.72,E-.03),M.quadraticCurveTo(0,E-.045,-w*.72,E-.03);let V=e.phys("#ffffff",{r:.3,cc:.5});V.polygonOffset=!0,V.polygonOffsetFactor=-3,F(l,Z(new Mn(M,12),.006),V);let J=e.phys("#e86a7c",{r:.4});J.polygonOffset=!0,J.polygonOffsetFactor=-3,F(l,Dt(1,16,10),J,[0,N+.025,0],null,[w*.55,.025,.012]);let L=R.getPoints(30).map(O=>d(O.x,O.y,.008));F(l,Vt(L,{segs:60,rad:6,r:.008*f+.004,closed:!1}),m)}else y==="cat"?(v(R=>-.03*Math.sin(Math.PI*Math.abs(R)/(.6*c))+h*.015+.01,-c*.6,c*.6,.011,20),x(R=>-.035-.015*f,-c*.3,c*.3,.016*f)):y==="o"?(F(l,new Dn(.038*n.mouthSize,20),e.std("#5a1a26"),[0,-.01,.006]),F(l,new Zt(.042*n.mouthSize,.016*f,10,24),m,[0,-.01,.006],null,[1,1.15,.6])):y==="flat"?(v(()=>0,-c*.75,c*.75,.009),x(()=>-.03*f,-c*.45,c*.45,.02*f)):y==="smirk"&&(v(R=>(R>0?.075*h+.02:.01)*Math.pow(R/c,2),-c*.9,c,.011),x(R=>-.034*f+(R>0?.015:0)*(R/c),-c*.5,c*.55,.024*f));if(n.tusks>.02){let R=e.phys("#f4ead2",{r:.35,cc:.4});for(let w of[1,-1]){let E=d(w*c*.62,-.03,0);F(l,Vt([E,E.clone().add(X(w*.01,.06*n.tusks,.025)),E.clone().add(X(w*.03,.12*n.tusks,.02))],{segs:8,rad:8,rFn:ei(.022*(.5+n.tusks*.6),.1)}),R)}}}function S1(n,t,e,i){let s=t.R;if(n.horns!=="none"){let r=e.std(n.hornColor,{r:.45,m:.05}),o=n.hornSize*s,a=(l,c=.04)=>h=>l*Rt(1,c,Math.pow(h,.9))*(1+.07*Math.sin(h*42));if(n.horns==="unicorn"){let l=t.D(X(0,.62,.78).normalize()).multiplyScalar(.98);F(i,Vt([l,l.clone().add(X(0,.6*o,.45*o)),l.clone().add(X(0,1.25*o,.75*o))],{segs:30,rad:10,rFn:a(.14*o,.03)}),r)}else for(let l of[1,-1]){let c=[];if(n.horns==="ram"){let h=t.D(X(l*.62,.62,.2).normalize()),f=h.clone().add(X(l*.12*o,-.25*o,-.25*o));for(let p=0;p<=16;p++){let m=p/16,g=m*Math.PI*1.7-.4,_=.42*o*(1-.45*m);c.push(f.clone().add(X(l*(.25*o*m),Math.cos(g)*_,-Math.sin(g)*_)))}c[0]=h,F(i,Vt(c,{segs:40,rad:10,rFn:a(.16*o,.15)}),r)}else{let h=t.D(X(l*.42,.8,.42).normalize()).multiplyScalar(.97),f=n.horns==="small"?.45:1;n.horns==="up"?c.push(h,h.clone().add(X(l*.12*o,.45*o*f,-.05*o)),h.clone().add(X(l*.18*o,.95*o*f,-.2*o))):n.horns==="back"?c.push(h,h.clone().add(X(l*.08*o,.35*o,-.15*o)),h.clone().add(X(l*.15*o,.45*o,-.6*o)),h.clone().add(X(l*.2*o,.25*o,-1*o))):c.push(h,h.clone().add(X(l*.06*o,.18*o,.02*o)),h.clone().add(X(l*.1*o,.32*o,-.06*o))),F(i,Vt(c,{segs:30,rad:10,rFn:a((n.horns==="small"?.1:.13)*o)}),r)}}}}function w1(n,t,e,i){if(n.tail==="none")return;let s=X(0,-.02,-t.hipR*Ua*.92),r=n.tail==="cat"||n.tail==="fox"?e.std(n.tailColor,{r:.8,vc:n.tail==="fox"}):e.phys(n.tailColor,{r:.45,sheen:.2}),o,a;if(n.tail==="devil"&&(o=[s,X(0,-.1,-.17),X(.06,-.3,-.22),X(.16,-.38,-.14),X(.24,-.3,-.08)],a=ei(.018,.5)),n.tail==="lizard"){let c=-t.pelvisY+.05;o=[s.clone().add(X(0,.02,.03)),X(0,-.18,-.2),X(0,c+.12,-.38),X(.08,c+.03,-.58),X(.22,c+.02,-.7)],a=ei(.075*n.width,.04)}n.tail==="cat"&&(o=[s,X(0,-.06,-.2),X(0,.12,-.3),X(.06,.3,-.26),X(.12,.36,-.16)],a=c=>.022*(c>.92?Rt(1,.4,(c-.92)/.08):1)),n.tail==="fox"&&(o=[s,X(0,-.12,-.2),X(.05,-.15,-.38),X(.15,0,-.45),X(.22,.15,-.38)],a=c=>.02+.07*Math.sin(Math.min(1,c*1.1)*Math.PI*.85));let l=Vt(o,{segs:40,rad:12,rFn:a,colors:n.tail==="fox"?[n.tailColor,"#ffffff"]:null});if(n.tail==="fox"){let c=l.attributes.color,h=Sn(n.tailColor),f=Sn("#ffffff");for(let p=0;p<c.count;p++){let m=Math.floor(p/13)/40,g=h.clone().lerp(f,Zn(Re((m-.75)/.2,0,1)));c.setXYZ(p,g.r,g.g,g.b)}}if(F(i,l,r),n.tail==="devil"){let c=o[o.length-1];F(i,new an(.05,.09,4),r,[c.x+.02,c.y+.02,c.z],[0,0,-.9],[1,1,.3])}}function _h(n,t,e=0,i=0){let{rig:s,d:r}=n,o=(t.pose==="jump"&&r.longSkirt?Wu.jumpLong:Wu[t.pose])||{},a=["shL","shR","elL","elR","wrL","wrR","hipL","hipR","knL","knR","anL","anR","pelvis"];for(let p of a){let m=o[p]||E1[p]||[0,0,0];s[p]&&s[p].rotation.set(m[0],m[1],m[2])}let l=o.head||[0,0,0],c=t.anim?1:0;s.headPivot.rotation.set(l[0]+Math.sin(e*1.3)*.015*c,l[1]+t.headTurn,l[2]+t.headTilt+Math.sin(e*.9)*.02*c);let h=o.lift?o.lift*(.6+.4*Math.abs(Math.sin(e*3)))*(c||1):0;if(s.pelvis.position.y=r.pelvisY+h+Math.sin(e*2)*.002*c,!o.lift){let p=o.knL?o.knL[0]:0,m=o.knR?o.knR[0]:0,g=Math.max(1-Math.cos(p),1-Math.cos(m))*r.legLen*.5;s.pelvis.position.y-=g*.9,s.anL.rotation.x=-p-(o.hipL?o.hipL[0]:0),s.anR.rotation.x=-m-(o.hipR?o.hipR[0]:0)}t.pose==="wave"&&(s.elR.rotation.z=-.7+Math.sin(e*7)*.35*(c||.001));let f=1+Math.sin(e*2)*.012*c;s.torsoMesh.scale.set(f,1,Ua*f),s.shL.position.y=s.shR.position.y=r.T*.87+Math.sin(e*2)*.002*c;for(let p of r.L.lids)p&&(p.rotation.x=i*(Math.PI-p.userData.thU-.5)*.98)}var Ua,Dt,Gu,Vu,Wu,E1,Qr=_n(()=>{Nn();wu();Ji();jr();ku();Bu();Hu();Ua=.74;Dt=(n=1,t=24,e=18)=>new Te(n,t,e);Gu={oval:{jaw:.86,chin:1.05,point:.3,cheek:0,ys:1,square:0,fore:1},round:{jaw:.97,chin:.94,point:0,cheek:.2,ys:.97,square:0,fore:1},heart:{jaw:.74,chin:1.08,point:.6,cheek:.05,ys:1,square:0,fore:1.05},square:{jaw:1,chin:.98,point:0,cheek:0,ys:1,square:.6,fore:1},long:{jaw:.86,chin:1.16,point:.25,cheek:0,ys:1.08,square:0,fore:.97},vline:{jaw:.68,chin:1.13,point:.85,cheek:.05,ys:1,square:0,fore:1.02},chubby:{jaw:1,chin:.93,point:0,cheek:.55,ys:.96,square:0,fore:1}};Vu={round:{sx:1,sy:1,h:.62,l:-.78,tilt:0},big:{sx:1.06,sy:1.14,h:.7,l:-.8,tilt:.04},almond:{sx:1.15,sy:.84,h:.45,l:-.55,tilt:.12},cat:{sx:1.12,sy:.86,h:.42,l:-.6,tilt:.32},droopy:{sx:1.05,sy:.92,h:.5,l:-.7,tilt:-.28},sleepy:{sx:1.05,sy:.95,h:.02,l:-.62,tilt:-.05},sharp:{sx:1.2,sy:.74,h:.28,l:-.42,tilt:.24},smile:{sx:1.05,sy:1,h:.5,l:-.7,tilt:0}};Wu={idle:{},wave:{shR:[0,0,-2.45],elR:[0,0,-.7],shL:[0,0,.12],head:[0,0,.12]},hips:{shL:[.1,0,.75],elL:[0,.2,-1.9],shR:[.1,0,-.75],elR:[0,-.2,1.9],wrL:[0,0,.3],wrR:[0,0,-.3]},peace:{shR:[-.6,0,-.35],elR:[-2,0,.2],wrR:[0,0,0],shL:[.2,0,.65],elL:[0,0,-1.8],head:[0,0,-.14]},heart:{shL:[-.1,0,2.75],elL:[0,0,1.25],shR:[-.1,0,-2.75],elR:[0,0,-1.25]},shy:{shL:[.4,0,.12],elL:[-.25,0,0],shR:[.4,0,-.12],elR:[-.25,0,0],hipL:[-.12,0,.02],knL:[.35,0,0],head:[.12,0,.18]},jump:{root:[0,0,0],lift:.12,hipL:[-.7,0,.1],knL:[1.25,0,0],hipR:[-.2,0,-.1],knR:[.7,0,0],shL:[0,0,2.5],shR:[0,0,-2.5],elL:[0,0,.3],elR:[0,0,-.3]},jumpLong:{lift:.1,hipL:[.06,0,.03],knL:[.42,0,0],hipR:[.02,0,-.03],knR:[.22,0,0],anL:[-.25,0,0],anR:[-.12,0,0],shL:[0,0,2.5],shR:[0,0,-2.5],elL:[0,0,.3],elR:[0,0,-.3]},ready:{pelvis:[0,-.35,0],shR:[-.9,0,-.2],elR:[-.7,0,0],wrR:[.6,0,0],shL:[-.7,0,.35],elL:[-1,0,0],hipL:[-.35,0,.12],knL:[.4,0,0],hipR:[.3,0,-.12],knR:[.15,0,0],head:[0,.3,0]},cast:{shR:[-1.45,0,-.15],elR:[-.15,0,0],wrR:[-1,0,0],shL:[-.8,0,.45],elL:[-1.6,0,0],hipL:[-.15,0,.08],hipR:[.1,0,-.08],head:[0,0,0]},cool:{pelvis:[0,.2,.04],shL:[.1,0,.75],elL:[0,.2,-1.9],wrL:[0,0,.3],shR:[-.3,0,-.5],elR:[-2.4,0,.2],hipL:[0,0,.12],knR:[.3,0,0],hipR:[-.15,0,-.04],head:[0,-.25,-.06]}},E1={shL:[0,0,.13],shR:[0,0,-.13],elL:[-.14,0,0],elR:[-.14,0,0],hipL:[0,0,.03],hipR:[0,0,-.03],wrL:[0,0,0],wrR:[0,0,0]}});function yh(n,t,e,i,s){let r=Array.isArray(s)?s:[s];r=r.map(_=>typeof _=="object"&&_?_.x||0:+_||0);let[o,a,l,c]=r.length===1?[r[0],r[0],r[0],r[0]]:r.length===2?[r[0],r[1],r[0],r[1]]:r.length===3?[r[0],r[1],r[2],r[1]]:r;e<0&&(n+=e,e=-e),i<0&&(t+=i,i=-i);let h=_=>Math.max(0,Math.min(_,e/2,i/2)),f=h(o),p=h(a),m=h(l),g=h(c);return this.moveTo(n+f,t),this.lineTo(n+e-p,t),this.arcTo(n+e,t,n+e,t+p,p),this.lineTo(n+e,t+i-m),this.arcTo(n+e,t+i,n+e-m,t+i,m),this.lineTo(n+g,t+i),this.arcTo(n,t+i,n,t+i-g,g),this.lineTo(n,t+f),this.arcTo(n,t,n+f,t,f),this.closePath(),this}function Ei(n,t,e,i,s,r=1){n.save(),n.globalAlpha=r,n.fillStyle=T1(n,t,e,0,i,[[0,s],[1,"rgba(0,0,0,0)"]]),n.beginPath(),n.arc(t,e,i,0,7),n.fill(),n.restore()}function qu(n,t,e,i){n.beginPath(),n.arc(t,e,i,0,7),n.arc(t+i*.9,e-i*.4,i*.8,0,7),n.arc(t+i*1.8,e,i*.9,0,7),n.arc(t+i*.9,e+i*.2,i*.9,0,7),n.fill()}function wi(n,t,e,i,s,r,o=Ge.sans,a=0){n.save(),n.translate(e,i),n.rotate(a),n.font=`900 ${s}px ${o}`,n.textAlign="center",n.textBaseline="middle",n.shadowColor=r,n.shadowBlur=s*.6,n.fillStyle=r,n.fillText(t,0,0),n.shadowBlur=s*.2,n.fillStyle="#ffffff",n.globalAlpha=.85,n.fillText(t,0,0),n.restore()}function Yu(n,t,e,i,s,r,o){n.save(),n.strokeStyle=r,n.lineWidth=o,n.shadowColor=r,n.shadowBlur=o*4,n.strokeRect(t,e,i,s),n.shadowBlur=0,n.strokeStyle="#ffffffcc",n.lineWidth=o*.35,n.strokeRect(t,e,i,s),n.restore()}function Na(n,t,e,i,s=Ge.sans){n.save(),n.font=`900 ${t*.24}px ${s}`;let r=Math.max(t*.6,n.measureText(e).width+t*.24);n.fillStyle="#ffffff",n.strokeStyle=i,n.lineWidth=t*.05,n.beginPath(),n.roundRect(-r/2,-t*.2,r,t*.4,t*.2),n.fill(),n.stroke(),n.beginPath(),n.moveTo(-t*.05,t*.19),n.lineTo(-t*.15,t*.34),n.lineTo(t*.06,t*.19),n.fill(),n.fillStyle=i,n.textAlign="center",n.textBaseline="middle",n.fillText(e,0,t*.01),n.restore()}var Ge,Ie,T1,to,eo,pe,Oa,no,Zu=_n(()=>{Ji();jr();typeof CanvasRenderingContext2D<"u"&&!CanvasRenderingContext2D.prototype.roundRect&&(CanvasRenderingContext2D.prototype.roundRect=yh);typeof Path2D<"u"&&!Path2D.prototype.roundRect&&(Path2D.prototype.roundRect=yh);typeof OffscreenCanvasRenderingContext2D<"u"&&!OffscreenCanvasRenderingContext2D.prototype.roundRect&&(OffscreenCanvasRenderingContext2D.prototype.roundRect=yh);Ge={sans:'"Apple SD Gothic Neo","Noto Sans KR","Noto Sans CJK KR","NanumGothic","Gothic A1",sans-serif',serif:'"AppleMyungjo","Noto Serif KR","Noto Serif CJK KR","Nanum Myeongjo",serif',hand:'"Gamja Flower","NanumPen","Nanum Pen Script","Apple SD Gothic Neo",cursive',mono:'"Menlo","SFMono-Regular","DejaVu Sans Mono",monospace'},Ie=(n,t,e,i,s,r)=>{let o=n.createLinearGradient(t,e,i,s);return r.forEach(([a,l])=>o.addColorStop(a,l)),o},T1=(n,t,e,i,s,r)=>{let o=n.createRadialGradient(t,e,i,t,e,s);return r.forEach(([a,l])=>o.addColorStop(a,l)),o};to={pastel:{label:"\uD30C\uC2A4\uD154",c:"d",draw(n,t,e){n.fillStyle=Ie(n,0,0,t,e,[[0,"#ffd9ea"],[.5,"#f2e3ff"],[1,"#d9ecff"]]),n.fillRect(0,0,t,e);let i=Xe(3);for(let s=0;s<26;s++)Ei(n,i()*t,i()*e,t*(.04+i()*.12),["#ffffff","#ffc2dc","#d6c8ff"][s%3],.5)}},hearts:{label:"\uD558\uD2B8",c:"d",draw(n,t,e){n.fillStyle=Ie(n,0,0,0,e,[[0,"#ffb3cf"],[1,"#ffe1ec"]]),n.fillRect(0,0,t,e);let i=t/9;for(let s=0;s<e/i+1;s++)for(let r=0;r<10;r++)n.fillStyle=(r+s)%2?"#ffffff88":"#ff7fae55",bs(n,r*i+s%2*i/2,s*i,i*.22)}},sky:{label:"\uD558\uB298",c:"d",draw(n,t,e){n.fillStyle=Ie(n,0,0,0,e,[[0,"#7cc4ff"],[.7,"#cfeaff"],[1,"#fff4e0"]]),n.fillRect(0,0,t,e),n.fillStyle="#ffffffdd";let i=Xe(9);for(let s=0;s<7;s++)qu(n,i()*t-t*.1,i()*e*.7,t*(.04+i()*.05));Ei(n,t*.82,e*.12,t*.25,"#fff6c8",.9)}},check:{label:"\uCCB4\uD06C",c:"d",draw(n,t,e){n.fillStyle="#fff8f0",n.fillRect(0,0,t,e);let i=t/8;n.fillStyle="#ffb3c766";for(let s=0;s<9;s++)n.fillRect(s*i,0,i/2,e);for(let s=0;s<e/i+1;s++)n.fillRect(0,s*i,t,i/2)}},stage:{label:"\uC544\uC774\uB3CC \uBB34\uB300",c:"d",draw(n,t,e){n.fillStyle=Ie(n,0,0,0,e,[[0,"#1a0b33"],[1,"#4a1a6a"]]),n.fillRect(0,0,t,e),n.globalCompositeOperation="lighter";for(let[s,r]of[[.15,"#ff4fd8"],[.5,"#7f9cff"],[.85,"#ffd84a"]])n.fillStyle=Ie(n,t*s,0,t*.5,e,[[0,r+"aa"],[1,r+"00"]]),n.beginPath(),n.moveTo(t*s-t*.03,0),n.lineTo(t*s+t*.03,0),n.lineTo(t*.5+t*.35,e),n.lineTo(t*.5-t*.35,e),n.fill();n.globalCompositeOperation="source-over";let i=Xe(4);for(let s=0;s<60;s++)n.fillStyle="#ffffff",n.globalAlpha=i(),n.beginPath(),n.arc(i()*t,i()*e*.6,i()*3+1,0,7),n.fill();n.globalAlpha=1,n.fillStyle=Ie(n,0,e*.82,0,e,[[0,"#2a1048"],[1,"#12061f"]]),n.fillRect(0,e*.82,t,e*.18)}},night:{label:"\uBCC4\uBC24",c:"d",draw(n,t,e){n.fillStyle=Ie(n,0,0,0,e,[[0,"#0f1638"],[1,"#3b3270"]]),n.fillRect(0,0,t,e);let i=Xe(11);for(let s=0;s<200;s++)n.fillStyle="#fff",n.globalAlpha=.3+i()*.7,n.fillRect(i()*t,i()*e,i()*2.5+.5,i()*2.5+.5);n.globalAlpha=1,Ei(n,t*.78,e*.16,t*.2,"#fff6c8",.6),n.fillStyle="#fff6d8",n.beginPath(),n.arc(t*.78,e*.16,t*.07,0,7),n.fill(),n.fillStyle="#0f1638",n.beginPath(),n.arc(t*.81,e*.145,t*.06,0,7),n.fill()}},flowers:{label:"\uAF43\uBC2D",c:"d",draw(n,t,e){n.fillStyle=Ie(n,0,0,0,e,[[0,"#fffbe8"],[1,"#e6f7e0"]]),n.fillRect(0,0,t,e);let i=Xe(21);for(let s=0;s<90;s++){let r=i()*t,o=i()*e,a=t*(.012+i()*.02),l=["#ff9fbf","#fff1a8","#c8b6ff","#ffffff","#ffb37a"][s%5];n.fillStyle=l;for(let c=0;c<5;c++){let h=c*1.2566;n.beginPath(),n.ellipse(r+Math.cos(h)*a,o+Math.sin(h)*a,a*.8,a*.5,h,0,7),n.fill()}n.fillStyle="#ffd84a",n.beginPath(),n.arc(r,o,a*.5,0,7),n.fill()}}},tavern:{label:"\uD0C0\uBC84\uB098",c:"f",draw(n,t,e){n.fillStyle="#2a170c",n.fillRect(0,0,t,e);for(let s=0;s<9;s++)n.fillStyle=s%2?"#4a2c18":"#553220",n.fillRect(s*t/9,0,t/9-3,e*.75);for(let s=0;s<6;s++)n.fillStyle="#3a2212",n.fillRect(0,s*e*.13,t,6);let i=t*.5;n.fillStyle="#3d3a38",n.fillRect(i-t*.28,e*.32,t*.56,e*.43),n.fillStyle="#1a0d06",n.beginPath(),n.moveTo(i-t*.18,e*.75),n.lineTo(i-t*.18,e*.48),n.quadraticCurveTo(i,e*.36,i+t*.18,e*.48),n.lineTo(i+t*.18,e*.75),n.fill(),n.globalCompositeOperation="lighter",Ei(n,i,e*.68,t*.5,"#ff8a2a",.8);for(let s=0;s<6;s++){n.fillStyle=["#ffcf4a","#ff8a2a","#ff5a1a"][s%3],n.beginPath();let r=i+(s-2.5)*t*.04;n.moveTo(r-t*.03,e*.74),n.quadraticCurveTo(r,e*(.56+s%2*.04),r+t*.03,e*.74),n.fill()}n.globalCompositeOperation="source-over";for(let s of[.12,.88])n.strokeStyle="#1a0d06",n.lineWidth=3,n.beginPath(),n.moveTo(t*s,0),n.lineTo(t*s,e*.14),n.stroke(),Ei(n,t*s,e*.18,t*.18,"#ffb347",.8),n.fillStyle="#ffd98a",n.fillRect(t*s-14,e*.15,28,40),n.strokeStyle="#2a170c",n.strokeRect(t*s-14,e*.15,28,40);n.fillStyle=Ie(n,0,e*.75,0,e,[[0,"#5a3a22"],[1,"#2a170c"]]),n.fillRect(0,e*.75,t,e*.25);for(let[s,r]of[[.1,1],[.86,1.1]]){n.fillStyle="#6b4024",n.beginPath(),n.ellipse(t*s,e*.8,t*.07*r,e*.07*r,0,0,7),n.fill(),n.strokeStyle="#2a170c",n.lineWidth=4;for(let o of[-.6,.6])n.beginPath(),n.ellipse(t*s,e*.8+o*e*.04*r,t*.068*r,e*.012,0,0,7),n.stroke()}n.fillStyle="#8a5a30",n.font=`bold ${t*.035}px ${Ge.serif}`,n.textAlign="center",n.fillText("\uC878\uB9B0 \uC6A9 \uC5EC\uAD00",t*.5,e*.07)}},forest:{label:"\uC232",c:"f",draw(n,t,e){n.fillStyle=Ie(n,0,0,0,e,[[0,"#cfe8c8"],[.5,"#5f8f5a"],[1,"#1f3a24"]]),n.fillRect(0,0,t,e);let i=Xe(5);for(let s=0;s<4;s++){let r=["#9cc496","#6f9a68","#46704a","#264a30"][s];n.fillStyle=r;for(let o=0;o<7;o++){let a=i()*t,l=t*(.05+s*.02),c=e*(.1+i()*.3)-s*30;n.fillRect(a-l*.2,c,l*.4,e);for(let h=0;h<4;h++)n.beginPath(),n.ellipse(a+(i()-.5)*l*2,c+h*l*.8,l*(1.4-h*.1),l*.9,0,0,7),n.fill()}}n.globalCompositeOperation="lighter";for(let s=0;s<5;s++)n.fillStyle=Ie(n,t*(.2+s*.15),0,t*(.1+s*.15),e,[[0,"#fff6c855"],[1,"#fff6c800"]]),n.beginPath(),n.moveTo(t*(.15+s*.15),0),n.lineTo(t*(.22+s*.15),0),n.lineTo(t*(.1+s*.15),e),n.lineTo(t*(0+s*.15),e),n.fill();for(let s=0;s<40;s++)Ei(n,i()*t,e*.3+i()*e*.7,10+i()*14,"#e8ff8a",.9);n.globalCompositeOperation="source-over",n.fillStyle="#1a2e1c",n.fillRect(0,e*.9,t,e*.1)}},castle:{label:"\uC131",c:"f",draw(n,t,e){n.fillStyle=Ie(n,0,0,0,e,[[0,"#2a3a7a"],[.55,"#e89aa8"],[1,"#ffd8a0"]]),n.fillRect(0,0,t,e);let i=Xe(8);for(let o=0;o<80;o++)n.fillStyle="#fff",n.globalAlpha=i()*.8,n.fillRect(i()*t,i()*e*.4,2,2);n.globalAlpha=1,n.fillStyle="#3a2f5a";let s=e*.7,r=(o,a,l,c=!0)=>{n.fillRect(o-a/2,s-l,a,l+e);for(let h=0;h<4;h++)n.fillRect(o-a/2+h*a/3.5,s-l-a*.15,a/7,a*.16);c&&(n.beginPath(),n.moveTo(o-a*.6,s-l),n.lineTo(o,s-l-a*1.3),n.lineTo(o+a*.6,s-l),n.fill())};r(t*.5,t*.16,e*.42),r(t*.28,t*.12,e*.3),r(t*.72,t*.12,e*.3),n.fillRect(t*.18,s-e*.18,t*.64,e),n.fillStyle="#ffd98a";for(let[o,a]of[[.5,.42],[.28,.5],[.72,.5],[.4,.6],[.6,.6]])n.beginPath(),n.ellipse(t*o,e*a,7,12,0,0,7),n.fill();for(let o of[.5,.28,.72]){n.strokeStyle="#3a2f5a",n.lineWidth=3,n.beginPath();let a=o===.5?s-e*.42-t*.21:s-e*.3-t*.156;n.moveTo(t*o,a),n.lineTo(t*o,a-50),n.stroke(),n.fillStyle="#e05050",n.beginPath(),n.moveTo(t*o,a-50),n.lineTo(t*o+34,a-42),n.lineTo(t*o,a-32),n.fill()}n.fillStyle=Ie(n,0,e*.78,0,e,[[0,"#4a6a4a"],[1,"#22342a"]]),n.beginPath(),n.moveTo(0,e*.8),n.quadraticCurveTo(t*.5,e*.74,t,e*.8),n.lineTo(t,e),n.lineTo(0,e),n.fill()}},dungeon:{label:"\uB358\uC804",c:"f",draw(n,t,e){n.fillStyle="#1a1a22",n.fillRect(0,0,t,e);let i=Xe(13),s=t/6,r=e/16;for(let o=0;o<17;o++)for(let a=-1;a<7;a++){let l=40+Math.floor(i()*25);n.fillStyle=`rgb(${l},${l},${l+8})`,n.fillRect(a*s+o%2*s/2+3,o*r+3,s-6,r-6)}n.globalCompositeOperation="lighter";for(let o of[.15,.85])Ei(n,t*o,e*.35,t*.35,"#ff7a1f",.75);n.globalCompositeOperation="source-over";for(let o of[.15,.85])n.fillStyle="#4a3020",n.fillRect(t*o-6,e*.36,12,60),n.fillStyle="#ffb347",n.beginPath(),n.moveTo(t*o-16,e*.36),n.quadraticCurveTo(t*o,e*.27,t*o+16,e*.36),n.fill(),n.fillStyle="#fff1a8",n.beginPath(),n.moveTo(t*o-7,e*.36),n.quadraticCurveTo(t*o,e*.31,t*o+7,e*.36),n.fill();n.strokeStyle="#55555f",n.lineWidth=6;for(let o of[.32,.68]){n.beginPath();for(let a=0;a<9;a++)n.ellipse(t*o,a*26+10,9,14,0,0,7);n.stroke()}n.fillStyle=Ie(n,0,0,0,e,[[0,"#00000066"],[.4,"#00000000"],[1,"#000000aa"]]),n.fillRect(0,0,t,e),n.fillStyle="#2a2a33",n.fillRect(0,e*.85,t,e*.15)}},street:{label:"\uB124\uC628 \uAC70\uB9AC",c:"c",draw(n,t,e){n.fillStyle=Ie(n,0,0,0,e,[[0,"#090418"],[1,"#26093a"]]),n.fillRect(0,0,t,e);let i=Xe(17);for(let s=0;s<12;s++){let r=i()*t,o=t*(.08+i()*.12),a=e*(.05+i()*.35);n.fillStyle=["#140a2a","#1c0f36","#10081f"][s%3],n.fillRect(r,a,o,e);for(let l=a+10;l<e*.8;l+=22)for(let c=r+6;c<r+o-8;c+=16)i()>.55&&(n.fillStyle=["#ffd84a","#2ff5ff","#ff4fd8","#ffffff"][Math.floor(i()*4)],n.globalAlpha=.5,n.fillRect(c,l,8,10));n.globalAlpha=1}wi(n,"\uB77C\uBA58",t*.18,e*.3,t*.07,"#ff4fd8",Ge.sans,0),wi(n,"24\uC2DC",t*.82,e*.22,t*.06,"#2ff5ff"),wi(n,"PC\uBC29",t*.78,e*.45,t*.05,"#ffd84a"),n.fillStyle=Ie(n,0,e*.78,0,e,[[0,"#1a0d2a"],[1,"#05020a"]]),n.fillRect(0,e*.78,t,e*.22),n.globalCompositeOperation="lighter";for(let[s,r]of[[.18,"#ff4fd8"],[.82,"#2ff5ff"],[.78,"#ffd84a"]])n.fillStyle=Ie(n,0,e*.78,0,e,[[0,r+"55"],[1,r+"00"]]),n.fillRect(t*s-t*.08,e*.78,t*.16,e*.22);n.globalCompositeOperation="source-over"}},rooftop:{label:"\uBE57\uC18D \uC625\uC0C1",c:"c",draw(n,t,e){n.fillStyle=Ie(n,0,0,0,e,[[0,"#0b1230"],[.6,"#3a1a5a"],[1,"#100820"]]),n.fillRect(0,0,t,e);let i=Xe(19);for(let s=0;s<26;s++){let r=i()*t,o=t*(.03+i()*.07),a=e*(.3+i()*.3);n.fillStyle="#0a0a1a",n.fillRect(r,a,o,e);for(let l=0;l<8;l++)i()>.4&&(n.fillStyle=["#2ff5ff","#ff4fd8","#9b5cff"][Math.floor(i()*3)],n.globalAlpha=.6,n.fillRect(r+3,a+l*14+6,o-6,3));n.globalAlpha=1}n.fillStyle="#05050d",n.fillRect(0,e*.68,t,e*.32),n.strokeStyle="#2a2a40",n.lineWidth=6,n.beginPath(),n.moveTo(0,e*.66),n.lineTo(t,e*.66),n.stroke();for(let s=0;s<t;s+=t/10)n.beginPath(),n.moveTo(s,e*.66),n.lineTo(s,e*.72),n.stroke();n.strokeStyle="#b8d8ff55",n.lineWidth=1.5;for(let s=0;s<260;s++){let r=i()*t,o=i()*e,a=20+i()*30;n.beginPath(),n.moveTo(r,o),n.lineTo(r-a*.25,o+a),n.stroke()}n.globalCompositeOperation="lighter",Ei(n,t*.5,e*.75,t*.6,"#9b5cff",.3),n.globalCompositeOperation="source-over"}},signs:{label:"\uB124\uC628 \uAC04\uD310",c:"c",draw(n,t,e){n.fillStyle="#0d0a14",n.fillRect(0,0,t,e);for(let i=0;i<e;i+=40)n.fillStyle=i%80?"#15111f":"#120e1b",n.fillRect(0,i,t,38);Yu(n,t*.08,e*.06,t*.4,e*.12,"#ff4fd8",6),wi(n,"\uB178\uB798\uBC29",t*.28,e*.12,t*.07,"#ff4fd8"),Yu(n,t*.55,e*.1,t*.36,e*.1,"#2ff5ff",5),wi(n,"\uC624\uB77D\uC2E4",t*.73,e*.15,t*.06,"#2ff5ff"),wi(n,"\u2665",t*.2,e*.32,t*.12,"#ff3355"),wi(n,"OPEN",t*.78,e*.32,t*.06,"#39ff7a",Ge.mono),wi(n,"\uB5A1\uBCF6\uC774",t*.16,e*.5,t*.05,"#ffd84a",Ge.sans,-Math.PI/2),wi(n,"\uC0AC\uC774\uBC84 \uCE74\uD398",t*.88,e*.55,t*.045,"#9b5cff",Ge.sans,Math.PI/2),n.fillStyle=Ie(n,0,e*.8,0,e,[[0,"#1a1426"],[1,"#05030a"]]),n.fillRect(0,e*.8,t,e*.2)}}},eo={none:{label:"\uC5C6\uC74C",c:"",draw(){}},white:{label:"\uD654\uC774\uD2B8",c:"d",draw(n,t,e){let i=t*.045;n.save(),n.fillStyle="#ffffff",n.beginPath(),n.rect(0,0,t,e),n.roundRect(i,i,t-2*i,e-2*i,t*.04),n.fill("evenodd"),n.restore()}},polaroid:{label:"\uD3F4\uB77C\uB85C\uC774\uB4DC",c:"d",draw(n,t,e){let i=t*.05;n.save(),n.fillStyle="#fffdf8",n.beginPath(),n.rect(0,0,t,e),n.rect(i,i,t-2*i,e-i-e*.15),n.fill("evenodd"),n.restore()}},lace:{label:"\uD558\uD2B8 \uB808\uC774\uC2A4",c:"d",draw(n,t,e){let i=t*.04;n.save(),n.fillStyle="#ffd1e1",n.beginPath(),n.rect(0,0,t,e),n.rect(i,i,t-2*i,e-2*i),n.fill("evenodd"),n.fillStyle="#ffffff";let s=t/20;for(let r=s/2;r<t;r+=s)n.beginPath(),n.arc(r,i,s*.5,0,Math.PI),n.fill(),n.beginPath(),n.arc(r,e-i,s*.5,Math.PI,0),n.fill();for(let r=s/2;r<e;r+=s)n.beginPath(),n.arc(i,r,s*.5,-Math.PI/2,Math.PI/2),n.fill(),n.beginPath(),n.arc(t-i,r,s*.5,Math.PI/2,-Math.PI/2),n.fill();n.fillStyle="#ff7fae";for(let[r,o]of[[i*2,i*2],[t-i*2,i*2],[i*2,e-i*2],[t-i*2,e-i*2]])bs(n,r,o,t*.03);n.restore()}},sparkle:{label:"\uBC18\uC9DD \uACE8\uB4DC",c:"d",draw(n,t,e){let i=t*.035;n.save(),n.strokeStyle=Ie(n,0,0,t,e,[[0,"#f7e08a"],[.5,"#c9a43a"],[1,"#fff3c0"]]),n.lineWidth=t*.012,n.strokeRect(i,i,t-2*i,e-2*i),n.lineWidth=t*.004,n.strokeRect(i*1.7,i*1.7,t-3.4*i,e-3.4*i),n.fillStyle="#ffe58a";for(let[s,r,o]of[[i,i,1],[t-i,i,.8],[i,e-i,.8],[t-i,e-i,1],[t*.5,i,.6]])bi(n,s,r,t*.04*o,t*.012*o,4);n.restore()}},gold:{label:"\uD669\uAE08 \uC7A5\uC2DD",c:"f",draw(n,t,e){let i=t*.05;n.save();let s=Ie(n,0,0,t,e,[[0,"#fff1a8"],[.3,"#c9a43a"],[.6,"#8a6a1a"],[1,"#f7e08a"]]);n.fillStyle="#2a1a0a",n.beginPath(),n.rect(0,0,t,e),n.rect(i,i,t-2*i,e-2*i),n.fill("evenodd"),n.strokeStyle=s,n.lineWidth=t*.01,n.strokeRect(i*.4,i*.4,t-i*.8,e-i*.8),n.strokeRect(i,i,t-2*i,e-2*i),n.lineWidth=t*.003,n.strokeRect(i*.7,i*.7,t-i*1.4,e-i*1.4);for(let[r,o,a,l]of[[i,i,1,1],[t-i,i,-1,1],[i,e-i,1,-1],[t-i,e-i,-1,-1]])n.save(),n.translate(r,o),n.scale(a,l),n.fillStyle=s,n.beginPath(),n.moveTo(0,0),n.bezierCurveTo(t*.12,-t*.01,t*.1,t*.06,t*.04,t*.04),n.bezierCurveTo(t*.06,t*.1,-t*.01,t*.12,0,0),n.fill(),n.fillStyle="#c03040",n.beginPath(),n.arc(t*.035,t*.035,t*.015,0,7),n.fill(),n.restore();n.fillStyle=s,n.beginPath(),n.moveTo(t/2,i*.1),n.lineTo(t/2+t*.06,i*.9),n.lineTo(t/2,i*1.6),n.lineTo(t/2-t*.06,i*.9),n.fill(),n.fillStyle="#3a6bc8",n.beginPath(),n.arc(t/2,i*.9,t*.016,0,7),n.fill(),n.restore()}},parchment:{label:"\uACE0\uC11C \uC591\uD53C\uC9C0",c:"f",draw(n,t,e){n.save();let i=Xe(31),s=t*.06;n.fillStyle="#e8d3a0",n.beginPath(),n.rect(0,0,t,e),n.moveTo(s,s);let r=40;for(let o=0;o<=r;o++)n.lineTo(s+(t-2*s)*o/r,s+(i()-.5)*s*.5);for(let o=0;o<=r;o++)n.lineTo(t-s+(i()-.5)*s*.5,s+(e-2*s)*o/r);for(let o=0;o<=r;o++)n.lineTo(t-s-(t-2*s)*o/r,e-s+(i()-.5)*s*.5);for(let o=0;o<=r;o++)n.lineTo(s+(i()-.5)*s*.5,e-s-(e-2*s)*o/r);n.fill("evenodd"),n.strokeStyle="#6b4024",n.lineWidth=3,n.stroke();for(let o=0;o<300;o++){n.fillStyle="#8a6a3a",n.globalAlpha=.15;let a=i()*4|0,l=i(),c=a===0?l*t:a===1?t-i()*s:a===2?l*t:i()*s,h=a===0?i()*s:a===1?l*e:a===2?e-i()*s:l*e;n.fillRect(c,h,3,3)}n.globalAlpha=1,n.restore()}},runes:{label:"\uB8EC \uD14C\uB450\uB9AC",c:"f",draw(n,t,e){let i=t*.06;n.save(),n.fillStyle="#141020ee",n.beginPath(),n.rect(0,0,t,e),n.rect(i,i,t-2*i,e-2*i),n.fill("evenodd"),n.strokeStyle="#8fd8ff",n.shadowColor="#5fc8ff",n.shadowBlur=14,n.lineWidth=3,n.strokeRect(i-6,i-6,t-2*i+12,e-2*i+12);let s="\u16A0\u16A2\u16A6\u16A8\u16B1\u16B2\u16B7\u16B9\u16BA\u16BE\u16C1\u16C3\u16C7\u16C8\u16C9\u16CA\u16CF\u16D2\u16D6\u16D7\u16DA\u16DC\u16DE\u16DF";n.fillStyle="#bfe8ff",n.font=`${i*.55}px serif`,n.textAlign="center",n.textBaseline="middle";let r=0;for(let o=i;o<t-i;o+=i*.75)n.fillText(s[r++%s.length],o,i/2),n.fillText(s[r++%s.length],o,e-i/2);for(let o=i*1.5;o<e-i;o+=i*.75)n.fillText(s[r++%s.length],i/2,o),n.fillText(s[r++%s.length],t-i/2,o);n.restore()}},neon:{label:"\uB124\uC628 \uB77C\uC778",c:"c",draw(n,t,e){let i=t*.04;n.save(),n.fillStyle="#05020acc",n.beginPath(),n.rect(0,0,t,e),n.roundRect(i,i,t-2*i,e-2*i,t*.05),n.fill("evenodd");for(let[s,r]of[[0,"#ff4fd8"],[i*.45,"#2ff5ff"]])n.strokeStyle=r,n.lineWidth=5,n.shadowColor=r,n.shadowBlur=24,n.beginPath(),n.roundRect(i-s,i-s,t-2*i+2*s,e-2*i+2*s,t*.05+s),n.stroke();n.restore()}},hud:{label:"HUD",c:"c",draw(n,t,e){n.save();let i="#2ff5ff",s=t*.05,r=t*.14;n.strokeStyle=i,n.lineWidth=5,n.shadowColor=i,n.shadowBlur=12;for(let[o,a,l,c]of[[s,s,1,1],[t-s,s,-1,1],[s,e-s,1,-1],[t-s,e-s,-1,-1]])n.beginPath(),n.moveTo(o,a+c*r),n.lineTo(o,a),n.lineTo(o+l*r,a),n.stroke();n.shadowBlur=0,n.fillStyle=i,n.font=`${t*.024}px ${Ge.mono}`,n.fillText("REC \u25CF 00:24:07",s+14,s+r*.6),n.textAlign="right",n.fillText("SYNC 99.7%",t-s-14,s+r*.6),n.fillText("LV.99 \u25B2\u25B2\u25B2",t-s-14,e-s-18),n.globalAlpha=.07;for(let o=0;o<e;o+=6)n.fillRect(0,o,t,2);n.restore()}},holo:{label:"\uD640\uB85C\uADF8\uB7A8",c:"c",draw(n,t,e){let i=t*.05;n.save(),n.fillStyle=Ie(n,0,0,t,e,[[0,"#ff9ff5"],[.25,"#9fd8ff"],[.5,"#c8ffe8"],[.75,"#fff19f"],[1,"#d0a8ff"]]),n.beginPath(),n.rect(0,0,t,e),n.roundRect(i,i,t-2*i,e-2*i,t*.03),n.fill("evenodd");let s=Xe(41);n.globalAlpha=.5;for(let r=0;r<8;r++){n.fillStyle=["#ff4fd8","#2ff5ff","#ffffff"][r%3];let o=s()*e;n.fillRect(s()<.5?0:t-i*1.6,o,i*1.6,4+s()*8)}n.restore()}}},pe=(n,t,e)=>({label:n,c:t,draw:e}),Oa={heart:pe("\uD558\uD2B8","d",(n,t)=>{n.fillStyle="#ff4f8f",bs(n,0,0,t*.42),n.fillStyle="#ffffffaa",n.beginPath(),n.ellipse(-t*.16,-t*.12,t*.08,t*.05,-.6,0,7),n.fill()}),sparkle:pe("\uBC18\uC9DD","d",(n,t)=>{n.fillStyle="#ffe58a",bi(n,0,0,t*.48,t*.1,4),n.fillStyle="#ffffff",bi(n,t*.3,-t*.3,t*.14,t*.035,4)}),star:pe("\uBCC4","d",(n,t)=>{n.fillStyle="#ffd84a",n.strokeStyle="#ffffff",n.lineWidth=t*.06,bi(n,0,0,t*.46,t*.2),n.stroke()}),flower:pe("\uAF43","d",(n,t)=>{n.fillStyle="#ffb3d1";for(let e=0;e<5;e++){let i=e*1.2566;n.beginPath(),n.ellipse(Math.cos(i)*t*.22,Math.sin(i)*t*.22,t*.2,t*.14,i,0,7),n.fill()}n.fillStyle="#ffd84a",n.beginPath(),n.arc(0,0,t*.12,0,7),n.fill()}),ribbon:pe("\uB9AC\uBCF8","d",(n,t)=>{n.fillStyle="#ff7fae";for(let e of[-1,1])n.beginPath(),n.moveTo(0,0),n.quadraticCurveTo(e*t*.5,-t*.4,e*t*.45,0),n.quadraticCurveTo(e*t*.5,t*.35,0,0),n.fill(),n.beginPath(),n.moveTo(0,0),n.lineTo(e*t*.22,t*.45),n.lineTo(e*t*.06,t*.4),n.fill();n.fillStyle="#ff4f8f",n.beginPath(),n.arc(0,0,t*.1,0,7),n.fill()}),cloud:pe("\uAD6C\uB984","d",(n,t)=>{n.fillStyle="#ffffff",n.strokeStyle="#bfe0ff",n.lineWidth=t*.04,qu(n,-t*.3,0,t*.2),n.stroke(),n.fillStyle="#ff9fbf";for(let e of[-1,1])n.beginPath(),n.arc(e*t*.12+t*.05,t*.06,t*.035,0,7),n.fill()}),cherry:pe("\uCCB4\uB9AC","d",(n,t)=>{n.strokeStyle="#3f8f3a",n.lineWidth=t*.04,n.beginPath(),n.moveTo(-t*.18,t*.1),n.quadraticCurveTo(0,-t*.3,t*.1,-t*.4),n.moveTo(t*.2,t*.12),n.quadraticCurveTo(t*.15,-t*.2,t*.1,-t*.4),n.stroke(),n.fillStyle="#e02040";for(let[e,i]of[[-t*.18,t*.2],[t*.2,t*.22]])n.beginPath(),n.arc(e,i,t*.17,0,7),n.fill();n.fillStyle="#ffffff99",n.beginPath(),n.arc(-t*.24,t*.14,t*.04,0,7),n.fill()}),rainbow:pe("\uBB34\uC9C0\uAC1C","d",(n,t)=>{["#ff6b6b","#ffb36b","#ffe66b","#7be08a","#6bb8ff","#b88aff"].forEach((e,i)=>{n.strokeStyle=e,n.lineWidth=t*.06,n.beginPath(),n.arc(0,t*.2,t*(.42-i*.06),Math.PI,0),n.stroke()})}),best:pe("\uCD5C\uACE0!","d",(n,t)=>Na(n,t,"\uCD5C\uACE0!","#ff4f8f")),love:pe("\uC0AC\uB791\uD574","d",(n,t)=>Na(n,t,"\uC0AC\uB791\uD574","#ff7fae")),sword:pe("\uAC80","f",(n,t)=>{n.save(),n.rotate(-.7),n.fillStyle="#dfe6ee",n.beginPath(),n.moveTo(-t*.05,t*.15),n.lineTo(t*.05,t*.15),n.lineTo(t*.05,-t*.35),n.lineTo(0,-t*.48),n.lineTo(-t*.05,-t*.35),n.fill(),n.fillStyle="#d4af37",n.fillRect(-t*.18,t*.13,t*.36,t*.06),n.fillStyle="#6b4024",n.fillRect(-t*.035,t*.19,t*.07,t*.2),n.fillStyle="#d4af37",n.beginPath(),n.arc(0,t*.42,t*.05,0,7),n.fill(),n.restore()}),shield:pe("\uBC29\uD328","f",(n,t)=>{n.fillStyle="#3a6bc8",n.strokeStyle="#d4af37",n.lineWidth=t*.06,n.beginPath(),n.moveTo(-t*.35,-t*.38),n.lineTo(t*.35,-t*.38),n.lineTo(t*.35,0),n.quadraticCurveTo(t*.3,t*.32,0,t*.46),n.quadraticCurveTo(-t*.3,t*.32,-t*.35,0),n.closePath(),n.fill(),n.stroke(),n.fillStyle="#ffffff",bi(n,0,0,t*.16,t*.07)}),potion:pe("\uBB3C\uC57D","f",(n,t)=>{n.fillStyle="#ff4fb0",n.beginPath(),n.arc(0,t*.12,t*.3,0,7),n.fill(),n.fillStyle="#ffffff55",n.beginPath(),n.arc(-t*.1,t*.02,t*.08,0,7),n.fill(),n.fillStyle="#cfe8ff",n.fillRect(-t*.08,-t*.3,t*.16,t*.16),n.fillStyle="#8a5a30",n.fillRect(-t*.1,-t*.4,t*.2,t*.1)}),moon:pe("\uB2EC","f",(n,t)=>{n.fillStyle="#ffe9a8",n.beginPath(),n.arc(0,0,t*.4,0,7),n.fill(),n.globalCompositeOperation="destination-out",n.beginPath(),n.arc(t*.18,-t*.1,t*.34,0,7),n.fill(),n.globalCompositeOperation="source-over"}),scroll:pe("\uB450\uB8E8\uB9C8\uB9AC","f",(n,t)=>{n.fillStyle="#efdcae",n.fillRect(-t*.32,-t*.28,t*.64,t*.56),n.fillStyle="#c9a46a";for(let e of[-t*.3,t*.3])n.beginPath(),n.ellipse(0,e,t*.4,t*.07,0,0,7),n.fill();n.fillStyle="#6b4024";for(let e=0;e<4;e++)n.fillRect(-t*.22,-t*.15+e*t*.1,t*(.44-e%2*.12),t*.025)}),d20:pe("\uC8FC\uC0AC\uC704","f",(n,t)=>{n.fillStyle="#8f4fd0",n.strokeStyle="#ffffff",n.lineWidth=t*.03,n.beginPath();for(let e=0;e<6;e++){let i=Math.PI/6+e*Math.PI/3;n.lineTo(Math.cos(i)*t*.45,Math.sin(i)*t*.45)}n.closePath(),n.fill(),n.stroke(),n.beginPath(),n.moveTo(0,-t*.45),n.lineTo(-t*.26,t*.15),n.lineTo(t*.26,t*.15),n.closePath(),n.stroke(),n.fillStyle="#ffffff",n.font=`900 ${t*.2}px ${Ge.sans}`,n.textAlign="center",n.textBaseline="middle",n.fillText("20",0,-t*.02)}),crown:pe("\uC655\uAD00","f",(n,t)=>{n.fillStyle="#ffd84a",n.strokeStyle="#c9a43a",n.lineWidth=t*.03,n.beginPath(),n.moveTo(-t*.4,t*.25),n.lineTo(-t*.42,-t*.2),n.lineTo(-t*.2,t*.02),n.lineTo(0,-t*.32),n.lineTo(t*.2,t*.02),n.lineTo(t*.42,-t*.2),n.lineTo(t*.4,t*.25),n.closePath(),n.fill(),n.stroke();for(let[e,i]of[[-t*.2,"#e02040"],[0,"#3a6bc8"],[t*.2,"#39b06a"]])n.fillStyle=i,n.beginPath(),n.arc(e,t*.15,t*.05,0,7),n.fill()}),candle:pe("\uCD1B\uBD88","f",(n,t)=>{Ei(n,0,-t*.25,t*.35,"#ffb347",.7),n.fillStyle="#fff4e0",n.fillRect(-t*.1,-t*.12,t*.2,t*.5),n.fillStyle="#ffb347",n.beginPath(),n.moveTo(-t*.06,-t*.15),n.quadraticCurveTo(0,-t*.45,t*.06,-t*.15),n.fill()}),lv99:pe("LV.99","f",(n,t)=>Na(n,t,"LV.99","#c9a43a",Ge.serif)),hero:pe("\uC601\uC6C5","f",(n,t)=>Na(n,t,"\uC601\uC6C5 \uB4F1\uC7A5","#8a5a30",Ge.serif)),bolt:pe("\uBC88\uAC1C","c",(n,t)=>{n.save(),n.shadowColor="#ffe23a",n.shadowBlur=t*.2,n.fillStyle="#ffe23a",n.beginPath(),n.moveTo(t*.08,-t*.48),n.lineTo(-t*.25,t*.05),n.lineTo(-t*.02,t*.05),n.lineTo(-t*.1,t*.48),n.lineTo(t*.26,-t*.08),n.lineTo(t*.02,-t*.08),n.closePath(),n.fill(),n.restore()}),chip:pe("\uCE69","c",(n,t)=>{n.fillStyle="#1f1f24",n.fillRect(-t*.25,-t*.25,t*.5,t*.5),n.strokeStyle="#2ff5ff",n.lineWidth=t*.03,n.strokeRect(-t*.25,-t*.25,t*.5,t*.5);for(let e=-2;e<=2;e++)for(let[i,s]of[[1,0],[-1,0],[0,1],[0,-1]]){n.beginPath();let r=e*t*.09;n.moveTo(i?i*t*.25:r,s?s*t*.25:r),n.lineTo(i?i*t*.4:r,s?s*t*.4:r),n.stroke()}n.fillStyle="#2ff5ff",n.fillRect(-t*.08,-t*.08,t*.16,t*.16)}),robot:pe("\uB85C\uBD07","c",(n,t)=>{n.fillStyle="#c8d0dc",n.beginPath(),n.roundRect(-t*.32,-t*.24,t*.64,t*.5,t*.1),n.fill(),n.fillStyle="#1f1f24",n.beginPath(),n.roundRect(-t*.25,-t*.15,t*.5,t*.25,t*.06),n.fill(),n.fillStyle="#2ff5ff",n.beginPath(),n.arc(-t*.11,-t*.03,t*.05,0,7),n.arc(t*.11,-t*.03,t*.05,0,7),n.fill(),n.strokeStyle="#c8d0dc",n.lineWidth=t*.03,n.beginPath(),n.moveTo(0,-t*.24),n.lineTo(0,-t*.38),n.stroke(),n.fillStyle="#ff4fd8",n.beginPath(),n.arc(0,-t*.4,t*.05,0,7),n.fill()}),cassette:pe("\uCE74\uC138\uD2B8","c",(n,t)=>{n.fillStyle="#9b5cff",n.beginPath(),n.roundRect(-t*.42,-t*.27,t*.84,t*.54,t*.05),n.fill(),n.fillStyle="#fff1a8",n.fillRect(-t*.34,-t*.2,t*.68,t*.14),n.fillStyle="#1f1f24",n.beginPath(),n.roundRect(-t*.26,-t*.02,t*.52,t*.18,t*.09),n.fill(),n.fillStyle="#ffffff",n.beginPath(),n.arc(-t*.15,t*.07,t*.05,0,7),n.arc(t*.15,t*.07,t*.05,0,7),n.fill()}),glitch:pe("\uAE00\uB9AC\uCE58\u2665","c",(n,t)=>{for(let[e,i]of[[-t*.04,"#2ff5ff"],[t*.04,"#ff4fd8"],[0,"#ffffff"]])n.fillStyle=i,n.globalAlpha=i==="#ffffff"?1:.8,bs(n,e,0,t*.38);n.globalAlpha=1,n.fillStyle="#05020a",n.fillRect(-t*.5,-t*.05,t,t*.04),n.fillRect(-t*.5,t*.12,t,t*.025)}),online:pe("ONLINE","c",(n,t)=>{n.save(),n.fillStyle="#05020acc",n.beginPath(),n.roundRect(-t*.48,-t*.16,t*.96,t*.32,t*.16),n.fill(),n.fillStyle="#39ff7a",n.beginPath(),n.arc(-t*.33,0,t*.06,0,7),n.fill(),n.font=`900 ${t*.16}px ${Ge.mono}`,n.textBaseline="middle",n.shadowColor="#39ff7a",n.shadowBlur=8,n.fillText("ONLINE",-t*.22,t*.01),n.restore()}),barcode:pe("\uBC14\uCF54\uB4DC","c",(n,t)=>{n.fillStyle="#ffffff",n.fillRect(-t*.45,-t*.22,t*.9,t*.44),n.fillStyle="#05020a";let e=-t*.4,i=0;for(;e<t*.38;){let s=[1,2,3,1,2][i++%5]*t*.012;n.fillRect(e,-t*.17,s,t*.26),e+=s+t*.014}n.font=`${t*.07}px ${Ge.mono}`,n.textAlign="center",n.fillText("2077-0420",0,t*.17)}),pixel:pe("\uD53D\uC140\uBAAC","c",(n,t)=>{let e=["..X.....X..","...X...X...","..XXXXXXX..",".XX.XXX.XX.","XXXXXXXXXXX","X.XXXXXXX.X","X.X.....X.X","...XX.XX..."],i=t*.08;n.fillStyle="#39ff7a",n.shadowColor="#39ff7a",n.shadowBlur=6,e.forEach((s,r)=>[...s].forEach((o,a)=>{o==="X"&&n.fillRect((a-5.5)*i,(r-4)*i,i,i)})),n.shadowBlur=0}),signal:pe("\uC2E0\uD638","c",(n,t)=>{for(let e=0;e<4;e++)n.fillStyle=e<3?"#2ff5ff":"#2ff5ff44",n.fillRect(-t*.3+e*t*.16,t*.25-(e+1)*t*.12,t*.11,(e+1)*t*.12)}),neonsmile:pe("\uB124\uC628 \uC2A4\uB9C8\uC77C","c",(n,t)=>{n.save(),n.strokeStyle="#ffe23a",n.lineWidth=t*.05,n.shadowColor="#ffe23a",n.shadowBlur=t*.2,n.beginPath(),n.arc(0,0,t*.38,0,7),n.stroke(),n.beginPath(),n.arc(0,t*.02,t*.22,.2,Math.PI-.2),n.stroke(),n.fillStyle="#ffe23a",n.beginPath(),n.arc(-t*.13,-t*.1,t*.045,0,7),n.arc(t*.13,-t*.1,t*.045,0,7),n.fill(),n.restore()})};no={basic:{label:"\uAE30\uBCF8",draw(n,t,e,i,s){n.font=`900 ${e}px ${s}`,n.lineJoin="round",n.lineWidth=e*.18,n.strokeStyle="#ffffff",n.strokeText(t,0,0),n.fillStyle=i,n.fillText(t,0,0)}},dark:{label:"\uC9C4\uD55C \uC678\uACFD",draw(n,t,e,i,s){n.font=`900 ${e}px ${s}`,n.lineJoin="round",n.lineWidth=e*.18,n.strokeStyle="#1a1020",n.strokeText(t,0,0),n.fillStyle=i,n.fillText(t,0,0)}},neon:{label:"\uB124\uC628",draw(n,t,e,i,s){n.font=`900 ${e}px ${s}`,n.shadowColor=i,n.shadowBlur=e*.5,n.fillStyle=i,n.fillText(t,0,0),n.shadowBlur=e*.15,n.fillStyle="#ffffff",n.globalAlpha=.9,n.fillText(t,0,0)}},gold:{label:"\uAE08\uBC15",draw(n,t,e,i,s){n.font=`900 ${e}px ${s}`,n.lineJoin="round",n.lineWidth=e*.16,n.strokeStyle="#3a2410",n.strokeText(t,0,0);let r=n.createLinearGradient(0,-e/2,0,e/2);r.addColorStop(0,"#fff3b0"),r.addColorStop(.5,"#d4a634"),r.addColorStop(1,"#8a6214"),n.fillStyle=r,n.fillText(t,0,0)}},banner:{label:"\uB9AC\uBCF8 \uBC30\uB108",draw(n,t,e,i,s){n.font=`900 ${e}px ${s}`;let r=n.measureText(t).width+e*1.4;n.fillStyle=i,n.beginPath(),n.moveTo(-r/2-e*.5,-e*.55),n.lineTo(r/2+e*.5,-e*.55),n.lineTo(r/2+e*.2,0),n.lineTo(r/2+e*.5,e*.55),n.lineTo(-r/2-e*.5,e*.55),n.lineTo(-r/2-e*.2,0),n.closePath(),n.fill(),n.fillStyle="#ffffff",n.fillText(t,0,e*.04)}}}});function $u(n,t){return{bg:{d:"pastel",f:"tavern",c:"street"}[n],frame:{d:"polaroid",f:"gold",c:"neon"}[n],yaw:18,pitch:4,framing:"full",zoom:1,offY:0,items:[{type:"text",text:t,x:.5,y:n==="d"?.925:.885,scale:1,rot:0,style:{d:"dark",f:"gold",c:"neon"}[n],font:n==="f"?"serif":n==="c"?"mono":"hand",color:{d:"#ff4f8f",f:"#c9a43a",c:"#2ff5ff"}[n],size:110},{type:"sticker",key:{d:"heart",f:"d20",c:"bolt"}[n],x:.83,y:.14,scale:1,rot:.15},{type:"sticker",key:{d:"sparkle",f:"candle",c:"online"}[n],x:.17,y:.22,scale:.8,rot:-.1}],sel:-1,concept:n}}function Qu(n){ii=n;let t=n.getState();try{vt=JSON.parse(localStorage.getItem(Ju)||"null")}catch{vt=null}if(!vt||typeof vt!="object"||vt.concept!==t.concept||!Array.isArray(vt.items))vt=$u(t.concept,t.name||"\uC2B9\uD604");else{let e=(s,r,o,a)=>typeof s=="number"&&isFinite(s)?Math.min(a,Math.max(o,s)):r,i=$u(t.concept,t.name||"\uC2B9\uD604");to[vt.bg]||(vt.bg=i.bg),eo[vt.frame]||(vt.frame=i.frame),ju.some(s=>s[0]===vt.framing)||(vt.framing="full"),vt.yaw=e(vt.yaw,18,-180,180),vt.pitch=e(vt.pitch,4,-20,35),vt.zoom=e(vt.zoom,1,.6,1.6),vt.offY=e(vt.offY,0,-.4,.4),vt.items=vt.items.filter(s=>s&&(s.type==="sticker"?Oa[s.key]:s.type==="text")).map(s=>({...s,x:e(s.x,.5,0,1),y:e(s.y,.5,0,1),scale:e(s.scale,1,.3,3),rot:e(s.rot,0,-7,7),...s.type==="text"?{text:String(s.text??"").slice(0,24),size:e(s.size,100,20,200),style:no[s.style]?s.style:"basic",font:Ge[s.font]?s.font:"sans",color:/^#[0-9a-f]{6}$/i.test(s.color)?s.color:"#ff4f8f"}:{}}))}vt.sel=-1,pr||C1(),pr.classList.add("open"),document.body.classList.add("card-open"),Ti(),requestAnimationFrame(()=>{Fa(),so()})}function ln(){try{localStorage.setItem(Ju,JSON.stringify(vt))}catch{}}function C1(){pr=Ht("div",{id:"card",class:"modal"});let n=Ht("div",{class:"cardPreview"},Ht("div",{class:"cardWrap"},Ht("canvas",{id:"cardCanvas",width:sn,height:hn}),Ht("div",{id:"selBox"}))),t=Ht("div",{class:"cardTop"},Ht("button",{class:"ghost",onclick:P1},"\u2190 \uAFB8\uBBF8\uAE30\uB85C"),Ht("b",{},"\uD3EC\uD1A0\uCE74\uB4DC"),Ht("button",{class:"primary",id:"dlBtn",onclick:L1},"\uC800\uC7A5 PNG")),e=Ht("div",{id:"selBar"}),i=Ht("div",{class:"cardCtl"},Ht("div",{class:"tabs",id:"cardTabs"}),e,Ht("div",{id:"cardBody"}));pr.append(t,Ht("div",{class:"cardMain"},n,i)),document.body.append(pr);let s=Ri("#cardCanvas");window.__dressup.lastCard=()=>s.toDataURL("image/png");let r=new Map,o=null,a=null,l=g=>{let _=s.getBoundingClientRect();return{x:(g.clientX-_.left)/_.width,y:(g.clientY-_.top)/_.height}},c=()=>{let g=s.getBoundingClientRect();return g.height/Math.max(1,g.width)},h=()=>{let[g,_]=[...r.values()],d=c(),u=_.x-g.x,y=(_.y-g.y)*d;return{mx:(g.x+_.x)/2,my:(g.y+_.y)/2,dist:Math.hypot(u,y),ang:Math.atan2(y,u)}},f=()=>{let g=vt.items[vt.sel];if(!g||r.size<2)return;let _=h();a={i:vt.sel,d0:Math.max(.01,_.dist),a0:_.ang,s0:g.scale,r0:g.rot,dx:g.x-_.mx,dy:g.y-_.my},o=null},p=g=>{let _=vt.items[vt.sel];o=_?{i:vt.sel,dx:_.x-g.x,dy:_.y-g.y}:null};s.addEventListener("pointerdown",g=>{let _=l(g);r.set(g.pointerId,_);try{s.setPointerCapture(g.pointerId)}catch{}if(g.preventDefault(),r.size>=2){vt.sel>=0&&f();return}let d=s.getContext("2d"),u=-1;for(let v=vt.items.length-1;v>=0;v--){let x=ed(d,vt.items[v]);if(Math.abs(_.x*sn-vt.items[v].x*sn)<x.w/2+20&&Math.abs(_.y*hn-vt.items[v].y*hn)<x.h/2+20){u=v;break}}let y=u!==vt.sel;vt.sel=u,cn(),y&&Ai(),u>=0?p(_):o=null,y&&(wn==="text"||u>=0)&&Ti()}),s.addEventListener("pointermove",g=>{if(!r.has(g.pointerId))return;let _=l(g);if(r.set(g.pointerId,_),a&&r.size>=2){let u=vt.items[a.i];if(!u)return;let y=h();u.scale=Math.min(3,Math.max(.3,a.s0*y.dist/a.d0)),u.rot=a.r0+(y.ang-a.a0),u.rot=Math.atan2(Math.sin(u.rot),Math.cos(u.rot)),u.x=Math.min(1,Math.max(0,y.mx+a.dx)),u.y=Math.min(1,Math.max(0,y.my+a.dy)),cn(),I1();return}if(!o)return;let d=vt.items[o.i];d&&(d.x=Math.min(1,Math.max(0,_.x+o.dx)),d.y=Math.min(1,Math.max(0,_.y+o.dy)),cn())});let m=g=>{if(!r.has(g.pointerId))return;r.delete(g.pointerId);let _=o||a;if(a&&r.size<2){a=null;let d=[...r.values()][0];d&&vt.sel>=0&&p(d)}r.size===0&&(o=null),_&&!o&&!a&&ln()};s.addEventListener("pointerup",m),s.addEventListener("pointercancel",m);for(let g of["gesturestart","gesturechange"])s.addEventListener(g,_=>_.preventDefault())}function P1(){pr.classList.remove("open"),document.body.classList.remove("card-open")}function Ti(){let n=Ri("#cardTabs");n.innerHTML="";for(let[o,a]of[["char","\uCE90\uB9AD\uD130"],["bg","\uBC30\uACBD"],["frame","\uD504\uB808\uC784"],["sticker","\uC2A4\uD2F0\uCEE4"],["text","\uAE00\uC790"]])n.append(Ht("button",{class:"tab"+(wn===o?" on":""),onclick:()=>{wn=o,Ti()}},a));let t=Ri("#cardBody");t.innerHTML="";let e=ii.getState(),i=e.concept,s=(o,a,l,c)=>{let h=Ht("div",{class:"chips"});for(let[f,p,m]of a)h.append(Ht("button",{class:"chip"+(f===l?" on":"")+(m?" t-"+m:""),onclick:()=>{c(f),Ti()}},p));return Ht("div",{class:"ctl"},Ht("div",{class:"lab"},o),h)},r=(o,a,l,c,h,f,p=!0)=>{let m=Ht("span",{class:"val"},String(h)),g=Ht("input",{type:"range",min:a,max:l,step:c,value:h});return g.addEventListener("input",()=>{m.textContent=g.value,f(parseFloat(g.value),!1)}),g.addEventListener("change",()=>f(parseFloat(g.value),!0)),Ht("div",{class:"ctl"},Ht("div",{class:"lab"},o,m),g)};if(wn==="char"){t.append(r("\uD68C\uC804 \uAC01\uB3C4",-180,180,1,vt.yaw,(a,l)=>{vt.yaw=a,ka(l)})),t.append(r("\uB0B4\uB824\uB2E4\uBCF4\uAE30 / \uC62C\uB824\uB2E4\uBCF4\uAE30",-20,35,1,vt.pitch,(a,l)=>{vt.pitch=a,ka(l)})),t.append(s("\uAD6C\uB3C4",ju,vt.framing,a=>{vt.framing=a,Fa(),so(),ln()})),t.append(r("\uD06C\uAE30(\uC90C)",.6,1.6,.01,vt.zoom,(a,l)=>{vt.zoom=a,ka(l)})),t.append(r("\uC704\uCE58 \uC704\xB7\uC544\uB798",-.4,.4,.01,vt.offY,(a,l)=>{vt.offY=a,ka(l)}));let o=vi.find(a=>a.id==="pose").subs[0].controls[0];t.append(s("\uD3EC\uC988",o.opts.filter(a=>!a[2]||a[2]===i),e.pose,a=>{ii.setState("pose",a),setTimeout(()=>{Fa(),so()},30)}))}if(wn==="bg"||wn==="frame"){let o=wn==="bg"?to:eo,a=[["d","\uC77C\uC0C1"],["f","\uD310\uD0C0\uC9C0"],["c","\uC0AC\uC774\uBC84\uD391\uD06C"]],l=[i,...["d","f","c"].filter(c=>c!==i)];for(let c of l){let h=Object.entries(o).filter(([,p])=>p.c===c||c===i&&p.c==="");if(!h.length)continue;let f=Ht("div",{class:"thumbGrid"});for(let[p,m]of h){let g=Ht("canvas",{width:108,height:162}),_=g.getContext("2d");_.scale(108/sn,162/hn),wn==="bg"||(_.fillStyle="#d8d0e8",_.fillRect(0,0,sn,hn)),m.draw(_,sn,hn),f.append(Ht("button",{class:"thumb"+((wn==="bg"?vt.bg:vt.frame)===p?" on":""),onclick:()=>{wn==="bg"?vt.bg=p:vt.frame=p,so(),ln(),Ti()}},g,Ht("span",{},m.label)))}t.append(Ht("div",{class:"lab grp"},a.find(p=>p[0]===c)[1]),f)}}if(wn==="sticker"){let o=[i,...["d","f","c"].filter(a=>a!==i)];for(let a of o){let l=Ht("div",{class:"stickerGrid"});for(let[c,h]of Object.entries(Oa).filter(([,f])=>f.c===a)){let f=Ht("canvas",{width:96,height:96}),p=f.getContext("2d");p.translate(48,48),h.draw(p,84),l.append(Ht("button",{class:"stk",title:h.label,onclick:()=>{vt.items.push({type:"sticker",key:c,x:.5+(Math.random()-.5)*.3,y:.4+(Math.random()-.5)*.3,scale:1,rot:(Math.random()-.5)*.4}),vt.sel=vt.items.length-1,cn(),Ai(),ln()}},f))}t.append(Ht("div",{class:"lab grp"},{d:"\uC77C\uC0C1",f:"\uD310\uD0C0\uC9C0",c:"\uC0AC\uC774\uBC84\uD391\uD06C"}[a]),l)}t.append(Ht("p",{class:"hint"},"\uC2A4\uD2F0\uCEE4\uB97C \uB204\uB974\uBA74 \uCE74\uB4DC\uC5D0 \uBD99\uC5B4\uC694. \uCE74\uB4DC \uC704\uC5D0\uC11C \uB04C\uC5B4\uC11C \uC62E\uAE30\uACE0, \uC120\uD0DD\uD558\uBA74 \uD06C\uAE30\xB7\uD68C\uC804\uC744 \uBC14\uAFC0 \uC218 \uC788\uC5B4\uC694."))}if(wn==="text"){t.append(Ht("div",{class:"row"},Ht("button",{class:"chip",onclick:()=>{vt.items.push({type:"text",text:ii.getState().name||"\uC2B9\uD604",x:.5,y:.5,scale:1,rot:0,style:"dark",font:"sans",color:"#ff4f8f",size:100}),vt.sel=vt.items.length-1,cn(),Ai(),ln(),Ti()}},"+ \uC774\uB984"),Ht("button",{class:"chip",onclick:()=>{vt.items.push({type:"text",text:{d:"\uC624\uB298\uC758 \uCD5C\uC560",f:"\uC804\uC124\uC758 \uBAA8\uD5D8\uAC00",c:"\uB124\uC628 \uC2DC\uD2F0 No.1"}[i],x:.5,y:.12,scale:1,rot:0,style:"banner",font:"sans",color:{d:"#ff7fae",f:"#8a5a30",c:"#9b5cff"}[i],size:70}),vt.sel=vt.items.length-1,cn(),Ai(),ln(),Ti()}},"+ \uBB38\uAD6C")));let o=vt.items[vt.sel];if(o&&o.type==="text"){let a=Ht("input",{type:"text",value:o.text,maxlength:24,class:"textInp"});a.addEventListener("input",()=>{o.text=a.value,cn(),Ai(),ln()}),t.append(Ht("div",{class:"ctl"},Ht("div",{class:"lab"},"\uAE00\uC790 \uB0B4\uC6A9"),a)),t.append(s("\uC2A4\uD0C0\uC77C",Object.entries(no).map(([c,h])=>[c,h.label]),o.style,c=>{o.style=c,cn(),ln()})),t.append(s("\uAE00\uAF34",A1,o.font,c=>{o.font=c,cn(),Ai(),ln()}));let l=Ht("div",{class:"swatches"});for(let c of R1)l.append(Ht("button",{class:"sw"+(o.color===c?" on":""),style:`--c:${c}`,onclick:()=>{o.color=c,cn(),ln(),Ti()}}));t.append(Ht("div",{class:"ctl"},Ht("div",{class:"lab"},"\uC0C9"),l))}else t.append(Ht("p",{class:"hint"},"\uCE74\uB4DC \uC704\uC758 \uAE00\uC790\uB97C \uB204\uB974\uBA74 \uB0B4\uC6A9\xB7\uC2A4\uD0C0\uC77C\uC744 \uBC14\uAFC0 \uC218 \uC788\uC5B4\uC694."))}Ai()}function Ai(){let n=Ri("#selBar");n.innerHTML="";let t=Ri("#selBox"),e=vt.items[vt.sel];if(!e){n.classList.remove("on"),t.style.display="none";return}n.classList.add("on");let i=(s,r,o,a,l)=>{let c=Ht("input",{type:"range",min:r,max:o,step:a,value:e[l],"data-k":l});return c.addEventListener("input",()=>{e[l]=parseFloat(c.value),cn(),xh()}),c.addEventListener("change",ln),Ht("label",{},Ht("span",{},s),c)};n.append(i("\uD06C\uAE30",.3,3,.01,"scale"),i("\uD68C\uC804",-3.14,3.14,.01,"rot"),Ht("button",{class:"mini",title:"\uB9E8 \uC55E\uC73C\uB85C",onclick:()=>{vt.items.push(vt.items.splice(vt.sel,1)[0]),vt.sel=vt.items.length-1,cn(),ln()}},"\u2B06"),Ht("button",{class:"mini danger",title:"\uC0AD\uC81C",onclick:()=>{vt.items.splice(vt.sel,1),vt.sel=-1,cn(),Ai(),ln(),wn==="text"&&Ti()}},"\uC0AD\uC81C")),xh()}function I1(){let n=vt.items[vt.sel];n&&document.querySelectorAll("#selBar input[data-k]").forEach(t=>{t.value=n[t.dataset.k]})}function xh(){let n=vt.items[vt.sel],t=Ri("#selBox");if(!n){t.style.display="none";return}let e=Ri("#cardCanvas").getContext("2d"),i=ed(e,n);t.style.display="block",t.style.left=n.x*100+"%",t.style.top=n.y*100+"%",t.style.width=i.w/sn*100+"%",t.style.height=i.h/hn*100+"%",t.style.transform=`translate(-50%,-50%) rotate(${n.rot}rad)`}function td(n,t){let e=Ge[t.font]||Ge.sans,i=t.text||" ",s=t.size*t.scale,r=t.style==="banner"?1.6:.4,o=sn*.94;n.save(),n.font=`900 ${s}px ${e}`;let a=(f,p)=>Math.max(...f.map(m=>n.measureText(m).width))*(p/s)+p*r,l=[i];if(a(l,s)>o&&i.length>3){let f=i.length/2,p=-1;for(let m=1;m<i.length-1;m++)i[m]===" "&&(p<0||Math.abs(m-f)<Math.abs(p-f))&&(p=m);l=p>0?[i.slice(0,p),i.slice(p+1)]:[i.slice(0,Math.ceil(f)),i.slice(Math.ceil(f))]}let c=a(l,s);c>o&&(s*=o/c);let h=a(l,s);return n.restore(),{lines:l,size:s,w:h,lh:s*1.25,h:s*1.4+(l.length-1)*s*1.25}}function ed(n,t){if(t.type==="sticker"){let i=230*t.scale;return{w:i,h:i}}let e=td(n,t);return{w:e.w,h:e.h}}function ka(n){clearTimeout(Ku),Ku=setTimeout(()=>{Fa(n?1:.5),so(),n&&ln()},n?0:40)}function Fa(n=1){let t=ii.getChar();if(!t)return;let e=Math.round(900*n),i=Math.round(1350*n);if(!nn){nn=new or({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),nn.outputColorSpace=Ze,nn.toneMapping=Zr,nn.toneMappingExposure=1,nn.shadowMap.enabled=!0,nn.shadowMap.type=qr,nn.setClearColor(0,0),nn.domElement.addEventListener("webglcontextlost",u=>{u.preventDefault();let y=nn;nn=null;try{y.dispose()}catch{}}),Ms=new qi,ii.makeLights(Ms);let d=new Yi(nn);io=new Gt(new xi(6,6),new ma({opacity:.22})),io.rotation.x=-Math.PI/2,io.receiveShadow=!0,Ms.add(io),d.dispose()}nn.setPixelRatio(1),nn.setSize(e,i,!1);let s=t.d,r=s.soleLift||0,o={full:[0,s.top+r+.02],knee:[s.legLen*.45,s.top+r+.02],upper:[s.pelvisY+s.T*.35,s.top+r+.03],face:[s.headY+r-s.R*1.55,s.headY+r+s.R*1.45]}[vt.framing],a=20,l=new We(a,e/i,.05,50),c=(o[1]-o[0])*1.12,h=c/2/Math.tan(a*Math.PI/360)/vt.zoom,f=(o[0]+o[1])/2+vt.offY*c-(vt.framing==="full",0),p=vt.yaw*Math.PI/180,m=vt.pitch*Math.PI/180;l.position.set(Math.sin(p)*Math.cos(m)*h,f+Math.sin(m)*h,Math.cos(p)*Math.cos(m)*h),l.lookAt(0,f,0);let g=t.root.parent;window.__cardRendering=!0,Ms.environment=g?g.environment:null,Ms.environmentIntensity=.4,Ms.add(t.root),ii.applyPose(t,{...ii.getState(),anim:!1},0,0),io.visible=vt.framing!=="face"&&vt.framing!=="upper",nn.render(Ms,l),g&&g.add(t.root),window.__cardRendering=!1,Ss||(Ss=document.createElement("canvas")),Ss.width=e,Ss.height=i;let _=Ss.getContext("2d");_.clearRect(0,0,e,i),_.drawImage(nn.domElement,0,0)}function so(){ws||(ws=document.createElement("canvas"),ws.width=sn,ws.height=hn);let n=ws.getContext("2d");n.save(),n.clearRect(0,0,sn,hn),(to[vt.bg]||to.pastel).draw(n,sn,hn),n.restore(),Ss&&n.drawImage(Ss,0,0,sn,hn),n.save(),(eo[vt.frame]||eo.none).draw(n,sn,hn),n.restore(),cn()}function cn(){let n=Ri("#cardCanvas");if(!n)return;let t=n.getContext("2d");t.clearRect(0,0,sn,hn),ws&&t.drawImage(ws,0,0);for(let e of vt.items){if(t.save(),t.translate(e.x*sn,e.y*hn),t.rotate(e.rot),e.type==="sticker"){let i=Oa[e.key];i&&(t.shadowColor="rgba(0,0,0,0.25)",t.shadowBlur=10,t.shadowOffsetY=4,i.draw(t,230*e.scale))}else{let i=td(t,e),s=no[e.style]||no.basic;i.lines.forEach((r,o)=>{t.save(),t.translate(0,(o-(i.lines.length-1)/2)*i.lh),t.textAlign="center",t.textBaseline="middle",s.draw(t,r,i.size,e.color,Ge[e.font]||Ge.sans),t.restore()})}t.restore()}xh()}function L1(){let n=vt.sel;vt.sel=-1,cn();let t=Ri("#cardCanvas"),e=(ii.getState().name||"\uC2B9\uD604").trim(),i=()=>{vt.sel=n,Ai()},s=(r,o)=>{let a=document.createElement("a");a.href=r,a.download=`\uD3EC\uD1A0\uCE74\uB4DC_${e}.png`,document.body.append(a),a.click(),a.remove();let l=!1,c=()=>{if(o&&!l){l=!0;try{URL.revokeObjectURL(r)}catch{}}},h=Ht("div",{class:"modal open",id:"dlView",onclick:p=>{(p.target.id==="dlView"||p.target.tagName==="BUTTON")&&(h.remove(),c())}},Ht("div",{class:"dlBox"},Ht("img",{src:r,alt:"\uD3EC\uD1A0\uCE74\uB4DC"}),Ht("p",{},'\uC544\uC774\uD3F0\uC740 \uC774\uBBF8\uC9C0\uB97C \uAE38\uAC8C \uB20C\uB7EC "\uC0AC\uC9C4\uC5D0 \uC800\uC7A5"\uC744 \uACE0\uB974\uC138\uC694.'),Ht("button",{class:"primary"},"\uB2EB\uAE30"))),f=document.getElementById("dlView");f&&f.remove(),document.body.append(h),ii.compliment(p=>`${p}\uC758 \uD3EC\uD1A0\uCE74\uB4DC \uC644\uC131! \uC9C0\uAC11\uC5D0 \uB123\uACE0 \uB2E4\uB2C8\uACE0 \uC2F6\uB2E4 \u{1F4B3}\u2728`)};try{t.toBlob(r=>{r?s(URL.createObjectURL(r),!0):s(t.toDataURL("image/png"),!1)},"image/png")}catch{s(t.toDataURL("image/png"),!1)}i(),ln()}var sn,hn,Ju,Ri,Ht,ju,A1,R1,ii,vt,nn,Ms,io,Ss,ws,wn,pr,Ku,nd=_n(()=>{Nn();Zu();Qr();gh();sn=1080,hn=1620,Ju="dressup3d.card.v1",Ri=(n,t=document)=>t.querySelector(n),Ht=(n,t={},...e)=>{let i=document.createElement(n);for(let[s,r]of Object.entries(t))s==="class"?i.className=r:s.startsWith("on")?i.addEventListener(s.slice(2),r):r!=null&&r!==!1&&i.setAttribute(s,r===!0?"":r);for(let s of e.flat())s!=null&&i.append(s.nodeType?s:document.createTextNode(s));return i},ju=[["full","\uC804\uC2E0"],["knee","\uBB34\uB98E \uC704"],["upper","\uC0C1\uBC18\uC2E0"],["face","\uC5BC\uAD74"]],A1=[["sans","\uACE0\uB515"],["serif","\uBA85\uC870"],["hand","\uC190\uAE00\uC528"],["mono","\uCF54\uB4DC"]],R1=["#ffffff","#1a1020","#ff4f8f","#ffd84a","#2ff5ff","#ff4fd8","#39ff7a","#c9a43a","#3a6bc8","#8a5a30"],ii=null,vt=null,nn=null,Ms=null,io=null,Ss=null,ws=null,wn="char",pr=null;Ku=null});var q1=bd(()=>{Nn();Mu();Su();gh();Qr();Ji();nd();var od="dressup3d.state.v1",id="dressup3d.slots.v1",ve=(n,t=document)=>t.querySelector(n),ne=(n,t={},...e)=>{let i=document.createElement(n);for(let[s,r]of Object.entries(t))s==="class"?i.className=r:s.startsWith("on")?i.addEventListener(s.slice(2),r):r!=null&&r!==!1&&i.setAttribute(s,r===!0?"":r);for(let s of e.flat())s!=null&&i.append(s.nodeType?s:document.createTextNode(s));return i},Mt=O1();window.__dressup={get state(){return Mt}};var mr=ve("#stage"),Ye=new or({antialias:!0,alpha:!1,powerPreference:"high-performance"});Ye.setPixelRatio(Math.min(window.devicePixelRatio||1,2));Ye.outputColorSpace=Ze;Ye.toneMapping=Zr;Ye.toneMappingExposure=1;Ye.shadowMap.enabled=!0;Ye.shadowMap.type=qr;mr.prepend(Ye.domElement);var fn=new qi,ad=new Yi(Ye);fn.environment=ad.fromScene(new Kr,.04).texture;fn.environmentIntensity=.4;var $n=new We(30,1,.05,50);$n.position.set(.6,1,3.2);var On=new Ca($n,Ye.domElement);On.enablePan=!1;On.enableDamping=!0;On.dampingFactor=.08;On.minDistance=.45;On.maxDistance=5;On.target.set(0,.7,0);On.maxPolarAngle=Math.PI*.62;function ld(n){let t=new ya("#ffffff","#c9b8c8",1);n.add(t);let e=new cr("#fff4ea",2.6);e.position.set(1.6,3.2,2.4),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),e.shadow.camera.left=-1.2,e.shadow.camera.right=1.2,e.shadow.camera.top=2,e.shadow.camera.bottom=-.5,e.shadow.camera.near=.5,e.shadow.camera.far=8,e.shadow.bias=-4e-4,e.shadow.normalBias=.015,e.shadow.radius=4,n.add(e);let i=new cr("#dfe8ff",.8);i.position.set(-2.5,1.5,1.5),n.add(i);let s=new cr("#ffffff",1.4);return s.position.set(-.5,2.5,-3),n.add(s),{hemi:t,key:e,fill:i,rim:s}}var ro=ld(fn);Ye.domElement.addEventListener("webglcontextlost",n=>{n.preventDefault(),Ga=!0;try{ri("\uD654\uBA74\uC744 \uB2E4\uC2DC \uC900\uBE44\uD558\uACE0 \uC788\uC5B4\uC694\u2026")}catch{}});Ye.domElement.addEventListener("webglcontextrestored",()=>{Ga=!1;try{fn.environment=ad.fromScene(new Kr,.04).texture}catch{}za=!0,lo(),Li=!0,Ha=!0});var Va=new Gt(new Dn(1.4,64),new Un({color:"#ffffff",roughness:.9}));Va.rotation.x=-Math.PI/2;Va.receiveShadow=!0;fn.add(Va);var gr=new Gt(new pa(1.36,1.4,64),new jn({color:"#ffffff"}));gr.rotation.x=-Math.PI/2;gr.position.y=.002;fn.add(gr);var sd={pastel:{bg:["#ffe9f3","#e9e2ff"],floor:"#fff6fa",ring:"#ffc2dc",hemi:"#fff0f6"},white:{bg:["#ffffff","#eef0f4"],floor:"#ffffff",ring:"#d9dde6",hemi:"#ffffff"},night:{bg:["#1b2045","#3a2f6b"],floor:"#2a2d50",ring:"#8f9cff",hemi:"#b8c0ff"},tavern:{bg:["#3a2416","#7a4a26"],floor:"#6b4430",ring:"#ffb347",hemi:"#ffd9a8"},neon:{bg:["#0a0718","#2a0b3a"],floor:"#151225",ring:"#2ff5ff",hemi:"#c8b0ff"}};function Ci(){return Mt.stage!=="auto"?Mt.stage:{d:"pastel",f:"tavern",c:"neon"}[Mt.concept]}function lo(){let n=sd[Ci()]||sd.pastel,t=document.createElement("canvas");t.width=4,t.height=256;let e=t.getContext("2d"),i=e.createLinearGradient(0,0,0,256);i.addColorStop(0,n.bg[1]),i.addColorStop(1,n.bg[0]),e.fillStyle=i,e.fillRect(0,0,4,256);let s=new ar(t);s.colorSpace=Ze,fn.background&&fn.background.dispose&&!za&&fn.background.dispose(),fn.background=s,Va.material.color.set(n.floor),gr.material.color.set(n.ring),gr.material.color.multiplyScalar(Ci()==="neon"?2:1),gr.material.toneMapped=Ci()!=="neon",ro.hemi.color.set(n.hemi);let r=Ci()==="neon"||Ci()==="night";ro.rim.color.set(Ci()==="neon"?"#ff4fd8":Ci()==="tavern"?"#ffb347":"#ffffff"),ro.rim.intensity=r?2.6:1.4,ro.fill.color.set(Ci()==="neon"?"#5fe8ff":"#dfe8ff"),ro.fill.intensity=Ci()==="neon"?1.4:.8,document.body.dataset.concept=Mt.concept}var Ke=null;function D1(n){n&&(fn.remove(n.root),n.root.traverse(t=>{t.geometry&&t.geometry.dispose(),t.isSprite&&t.material.dispose()}),(n.root.userData.mats||[]).forEach(t=>t.dispose()),(n.root.userData.textures||[]).forEach(t=>t.dispose()))}var za=!1,cd=0,Li=!0,oo=null,Ha=!1,Ah=0,Eh=0,Ga=!1;function hd(){let n=performance.now();try{let t=Xu(Mt);za?(Ke&&fn.remove(Ke.root),za=!1):D1(Ke),Ke=t,fn.add(Ke.root),Ke.root.position.y=Ke.d.soleLift||0,oo=null}catch(t){console.error(t),oo=t}Eh=performance.now(),Ah=Eh-n,cd++}var Pi=null;function ao(n,t=!1){if(!Ke)return;let e=Ke.d,i,s;n==="face"?(i=new G(0,e.headY+(e.soleLift||0)+.03,0),s=.95*(e.R/.13)):n==="upper"?(i=new G(0,e.pelvisY+e.T*.8,0),s=1.5):(i=new G(0,e.top*.52,0),s=e.top*1.2/Math.tan($n.fov*Math.PI/360)*.6);let r=$n.position.clone().sub(On.target).normalize();n==="face"&&Math.abs(r.y)>.4&&r.set(r.x,.12,r.z).normalize();let o=i.clone().addScaledVector(r,s);if(t){On.target.copy(i),$n.position.copy(o);return}Pi={t0:performance.now(),dur:550,fromT:On.target.clone(),toT:i,fromP:$n.position.clone(),toP:o},Rh=n,W1()}var Rh="full";function fd(){let n=mr.getBoundingClientRect();Ye.setSize(n.width,n.height,!1),Ye.domElement.style.width=n.width+"px",Ye.domElement.style.height=n.height+"px",$n.aspect=n.width/Math.max(1,n.height),$n.updateProjectionMatrix(),U1(n)}function U1(n){let t=ve(".fab"),e=ve("#cardBtn");if(!t||!e)return;let i=7,s=52,r=e.offsetHeight||44,o=24+r+10,a=Re(Math.floor((n.height-s-o-i*3)/4),30,50);mr.style.setProperty("--fab",a+"px"),mr.classList.toggle("fab-compact",a<44),mr.classList.toggle("fab-tiny",a<36)}new ResizeObserver(fd).observe(mr);var Ba=0,vh=2,rd=new ba;function Th(){let n=Math.min(.05,rd.getDelta()),t=rd.elapsedTime,e=document.body.classList.contains("card-open");if(Li&&!Ga&&(Ha||performance.now()-Eh>=Re(Ah*2,90,450))&&(Li=!1,Ha=!1,hd()),e||Ga||document.hidden){requestAnimationFrame(Th);return}if(Pi){let s=Re((performance.now()-Pi.t0)/Pi.dur,0,1),r=s<.5?2*s*s:1-Math.pow(-2*s+2,2)/2;On.target.lerpVectors(Pi.fromT,Pi.toT,r),$n.position.lerpVectors(Pi.fromP,Pi.toP,r),s>=1&&(Pi=null)}let i=0;if(Mt.anim&&(Ba+=n,Ba>vh)){let s=(Ba-vh)/.16;i=s<1?Math.sin(s*Math.PI):0,s>=1&&(Ba=0,vh=2+Math.random()*3)}Ke&&!window.__cardRendering&&_h(Ke,Mt,Mt.anim?t:0,i),On.update(),Ye.render(fn,$n),requestAnimationFrame(Th)}function N1(){let n=new Map;for(let t of vi)for(let e of t.subs)for(let i of e.controls)n.has(i.k)||n.set(i.k,i);return n}function ud(n){let t=Pa(),e=N1(),i=/^#[0-9a-f]{6}$/i;if(!n||typeof n!="object"||Array.isArray(n))return t;for(let[s,r]of e){if(!(s in n)||r.t==="preset")continue;let o=n[s];if(r.t==="range"){let a=typeof o=="number"?o:typeof o=="string"&&o.trim()!==""?Number(o):NaN;isFinite(a)&&(t[s]=Re(a,r.min,r.max))}else r.t==="chips"?r.opts.some(a=>a[0]===o)&&(t[s]=o):r.t==="color"?typeof o=="string"&&i.test(o)&&(t[s]=o):r.t==="toggle"&&typeof o=="boolean"&&(t[s]=o)}return mh.some(s=>s[0]===n.concept)&&(t.concept=n.concept),typeof n.name=="string"&&n.name.trim()&&(t.name=n.name.trim().slice(0,12)),typeof n.showAll=="boolean"&&(t.showAll=n.showAll),typeof n.race=="string"&&Jr[n.race]&&(t.race=n.race),t}function O1(){try{let n=JSON.parse(localStorage.getItem(od)||"null");if(n)return ud(n)}catch{}return Pa()}var Ts=null;function Wa(){clearTimeout(Ts),Ts=null;try{localStorage.setItem(od,JSON.stringify(Mt))}catch{}}function As(){clearTimeout(Ts),Ts=setTimeout(Wa,300)}document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ts&&Wa()});window.addEventListener("pagehide",()=>{Ts&&Wa()});window.addEventListener("beforeunload",()=>{Ts&&Wa()});var k1=new Set(["pose","anim","headTilt","headTurn","stage","concept","showAll","name"]);function si(n,t,e={}){if(Mt[n]=t,n==="bodyPreset"&&ph[t]&&Object.assign(Mt,ph[t]),(n==="stage"||n==="concept")&&lo(),(n==="lookX"||n==="lookY")&&Ke&&Ke.d.L&&Ke.d.L.looks&&Ke.d.L.looks.length)for(let i of Ke.d.L.looks)i.g.rotation.y=Mt.lookX*.42*i.sg,i.g.rotation.x=-Mt.lookY*.32;else k1.has(n)||(Li=!0,e.final&&(Ha=!0));As(),e.silent||pd(),e.rerender&&Tn()}var bh={any:[n=>`${ni(n,"\uC544","\uC57C")}, \uC624\uB298 \uBE44\uC8FC\uC5BC \uBB34\uC2A8 \uC77C\uC774\uC57C?!`,n=>`${ni(n,"\uC774","\uAC00")} \uC138\uC0C1\uC5D0\uC11C \uC81C\uC77C \uADC0\uC5EC\uC6CC \u{1F496}`,n=>`${ni(n,"\uC740","\uB294")} \uADF8\uB0E5 \uC11C \uC788\uC5B4\uB3C4 \uD654\uBCF4\uB124 \u{1F4F8}`,n=>`\uC774 \uC870\uD569 \uCC9C\uC7AC\uB2E4\u2026 ${n} \uC13C\uC2A4 \uBBF8\uCCE4\uC5B4 \u2728`,n=>`${n} \uB355\uBD84\uC5D0 \uC624\uB298 \uD558\uB8E8\uAC00 \uBC18\uC9DD\uBC18\uC9DD\uD574 \u{1F31F}`,n=>`${ni(n,"\uC544","\uC57C")}, \uAC70\uC6B8 \uBCF4\uBA74 \uAE5C\uC9DD \uB180\uB77C\uACA0\uB2E4! \uB108\uBB34 \uC608\uBED0`,n=>`\uD328\uC158 \uC7A1\uC9C0 \uD45C\uC9C0 \uBAA8\uB378: ${n} \u{1F3C6}`,n=>`${n}\uC758 \uB9E4\uB825 \uC9C0\uC218 \uCE21\uC815 \uBD88\uAC00 \u{1F4AF}`,n=>`\uC640\u2026 ${ni(n,"\uC774","\uAC00")} \uC785\uC73C\uB2C8\uAE4C \uC637\uC774 \uC0B4\uC544\uB098!`],f:[n=>`\uC804\uC124\uC758 \uC601\uC6C5 ${n} \uB4F1\uC7A5! \uD0C0\uBC84\uB098\uAC00 \uC220\uB801\uC5EC\uC694 \u{1F37A}`,n=>`${n}\uC758 \uB9C8\uB825\uC774 \uD758\uB7EC\uB118\uCCD0\uC694 \u{1F52E}`,n=>`\uC6A9\uB3C4 ${n} \uC55E\uC5D0\uC120 \uACE0\uAC1C\uB97C \uC219\uC774\uACA0\uC5B4 \u{1F409}`,n=>`\uC74C\uC720\uC2DC\uC778\uB4E4\uC774 ${n}\uC758 \uB178\uB798\uB97C \uB9CC\uB4E4\uACE0 \uC788\uB300\uC694 \u{1F3B6}`,n=>`\uC655\uAD6D \uCD5C\uACE0\uC758 \uBAA8\uD5D8\uAC00\uB294 \uBC14\uB85C ${n} \u2694\uFE0F`],c:[n=>`${n}, \uB124\uC628\uBCF4\uB2E4 \uB354 \uBE5B\uB098\uB294 \uC911 \u26A1`,n=>`\uC2A4\uD0C0\uC77C \uB370\uC774\uD130 \uBD84\uC11D \uC644\uB8CC: ${n} \uBA4B\uC9D0 100% \u{1F916}`,n=>`\uC774 \uB3C4\uC2DC\uC758 \uC8FC\uC778\uACF5\uC740 ${ni(n,"\uC774","\uAC00")} \uD655\uC2E4\uD574 \u{1F303}`,n=>`${n} \uC5C5\uADF8\uB808\uC774\uB4DC \uC644\uB8CC! \uADC0\uC5EC\uC6C0 \uBAA8\uB4C8 \uACFC\uBD80\uD558 \u{1F4BE}`,n=>`\uD640\uB85C\uADF8\uB7A8\uB3C4 ${n}\uC5D0\uAC8C \uBC18\uD588\uC5B4 \u{1F49C}`],d:[n=>`${n} \uC624\uB298 \uB370\uC774\uD2B8 \uAC00? \uC644\uBCBD\uD574 \u{1F338}`,n=>`${n}\uD45C \uB370\uC77C\uB9AC\uB8E9 \uB108\uBB34 \uC0C1\uD07C\uD574 \u{1F353}`,n=>`${ni(n,"\uC544","\uC57C")}, \uC624\uB298\uB3C4 \uC0AC\uB791\uC2A4\uB7EC\uC6C0 \uB9CC\uB819 \u{1F380}`]},Mh=0,dd=0;function pd(){Mh++;let n=Date.now();Mh>=7&&n-dd>9e3&&(Mh=0,Ii())}function Ii(n){dd=Date.now();let t=(Mt.name||"\uC2B9\uD604").trim()||"\uC2B9\uD604",e=[...bh.any,...bh[Mt.concept]||[],...bh[Mt.concept]||[]],i=(n||e[Math.floor(Math.random()*e.length)])(t),s=ve("#compliment");ve("#compliment .msg").textContent=i,s.classList.remove("show"),s.offsetWidth,s.classList.add("show");let r=ve("#compliment .fx");r.innerHTML="";let o=Mt.concept==="f"?["\u2726","\u2605","\u2756","\u2727"]:Mt.concept==="c"?["\u26A1","\u25C6","\u2726","\u25B2"]:["\u2665","\u2605","\u273F","\u2661"];for(let a=0;a<14;a++){let l=ne("span",{},o[a%o.length]);l.style.setProperty("--x",(Math.random()*2-1)*140+"px"),l.style.setProperty("--y",-(40+Math.random()*110)+"px"),l.style.setProperty("--d",Math.random()*.3+"s"),r.append(l)}clearTimeout(Ii._t),Ii._t=setTimeout(()=>s.classList.remove("show"),2600)}var En=n=>n[Math.floor(Math.random()*n.length)];function Sh(){let n=Mt.concept,t=new Set(["name","concept","showAll","anim","lookX","lookY","stage","race","bodyPreset"]);for(let i of vi){if(i.concept&&i.concept!==n){for(let s of i.subs)for(let r of s.controls)r.t!=="preset"&&(Mt[r.k]=r.def);continue}for(let s of i.subs)for(let r of s.controls)if(!t.has(r.k))if(r.t==="chips"){let o=r.opts.filter(a=>!a[2]||a[2]===n);Mt[r.k]=En(o)[0]}else if(r.t==="range"){let o=["headTilt","headTurn"].includes(r.k)?.3:.5;Mt[r.k]=+Rt(r.min,r.max,.5+(Math.random()-.5)*o).toFixed(2)}else r.t==="color"?Mt[r.k]=En(md(r)):r.t==="toggle"&&(Mt[r.k]=Math.random()<.25)}let e=(i,s)=>{Math.random()>i&&(Mt[s]=vi.flatMap(r=>r.subs).flatMap(r=>r.controls).find(r=>r.k===s).def)};if(e(.35,"dress"),e(.4,"outer"),e(.5,"prop"),e(.3,"propL"),e(.35,"headAcc"),e(.25,"faceAcc"),e(.3,"backAcc"),e(.3,"markStyle"),e(.12,"beard"),e(.4,"gloves"),e(.5,"earring"),e(.5,"necklace"),e(.35,"mole"),e(.5,"shadowStyle"),e(.5,"linerStyle"),Mt.freckles=Math.random()<.3?+(Math.random()*.7).toFixed(2):0,Mt.skin=n==="f"&&Math.random()<.4?En(Oe.skinF):En(Oe.skin),Mt.hairColor=n==="c"&&Math.random()<.65?En(Oe.neon):En(Oe.hair),Mt.hairColor2=En([...Oe.hair,...Oe.neon]),Mt.ombre=Math.random()<(n==="c"?.4:.2),Mt.browColor=Math.random()<.7?En(Oe.brow.slice(0,4)):Mt.hairColor,Mt.beardColor=Mt.hairColor,Mt.sclera="#ffffff",Mt.glowEyes=n!=="d"&&Math.random()<.3,Mt.hairGlow=n==="c"&&Math.random()<.3,Mt.heterochromia=Math.random()<.1,Mt.eyeOpen=+Rt(.85,1.15,Math.random()).toFixed(2),Mt.irisSize=+Rt(.58,.74,Math.random()).toFixed(2),n==="f"){let i=En(Object.keys(Jr));Object.assign(Mt,Jr[i]),Mt.race=i}n==="c"&&(Mt.faceLines=En(["none","cheek","jaw","full"]),Mt.ledEye=Math.random()<.3?En(["left","right"]):"none",Mt.mechArm=Math.random()<.3?En(["left","right"]):"none",Mt.cyberColor=En(Oe.neon)),Mt.bodyPreset="custom",Mt.pose="idle",Mt.headTilt=0,Mt.headTurn=0,Li=!0,As(),Tn(),Ii()}function F1(){let n=Mt.name,t=Mt.concept;Mt=Pa(),Mt.name=n,Mt.concept=t,lo(),Li=!0,As(),Tn(),ri("\uCC98\uC74C \uBAA8\uC2B5\uC73C\uB85C \uB3CC\uC544\uC654\uC5B4\uC694")}var ke="face",Es={};function md(n){let t=Mt.concept;return n.pal==="skin"?[...Oe.skin,...t==="f"||Mt.showAll?Oe.skinF:[],...t==="c"||Mt.showAll?Oe.skinC:[]]:n.pal==="hair"?[...Oe.hair,...Oe.neon]:n.pal==="eye"?Oe.eye:n.pal==="cloth"?[...Oe.cloth,...t==="c"?Oe.neon:[],...t==="f"?Oe.metal:[]]:Oe[n.pal]||Oe.cloth}function B1(n){return n.subs.some(t=>t.controls.some(e=>e.t!=="preset"&&e.def!==void 0&&Mt[e.k]!==e.def))}function z1(){return vi.filter(n=>!n.concept||n.concept===Mt.concept||Mt.showAll||B1(n))}function H1(){let n=ve("#tabs");n.innerHTML="";let t=z1();t.find(e=>e.id===ke)||(ke=t[0].id);for(let e of t)n.append(ne("button",{class:"tab"+(e.id===ke?" on":"")+(e.concept?" special":""),onclick:()=>{ke=e.id,Tn(),G1()}},ne("span",{class:"ti"},e.icon),ne("span",{},e.label)))}function G1(){let n=["face","makeup","hair"],t=Es[ke];n.includes(ke)&&!(ke==="face"&&t==="skin")?ao("face"):(ke==="body"||ke==="cloth"||ke==="pose"||ke==="fantasy"||ke==="acc"||ke==="cyber")&&ao("full")}function Tn(){H1();let n=vi.find(s=>s.id===ke),t=ve("#subtabs");t.innerHTML="",Es[ke]||(Es[ke]=n.subs[0].id);for(let s of n.subs)t.append(ne("button",{class:"sub"+(s.id===Es[ke]?" on":""),onclick:()=>{Es[ke]=s.id,Tn()}},s.label));let e=n.subs.find(s=>s.id===Es[ke]),i=ve("#controls");i.innerHTML="";for(let s of e.controls)i.append(V1(s));ve("#nameBtn .nm").textContent=Mt.name||"\uC2B9\uD604",document.querySelectorAll("#concept button").forEach(s=>s.classList.toggle("on",s.dataset.c===Mt.concept)),ve("#showAll").checked=!!Mt.showAll}function V1(n){let t=ne("div",{class:"ctl ctl-"+n.t});if(n.t==="chips"||n.t==="preset"){t.append(ne("div",{class:"lab"},n.label));let e=ne("div",{class:"chips"});for(let[i,s,r]of n.opts){if(r&&r!==Mt.concept&&!Mt.showAll&&Mt[n.k]!==i&&n.t!=="preset")continue;let o=n.t==="preset"?Mt.race===i:Mt[n.k]===i;e.append(ne("button",{class:"chip"+(o?" on":"")+(r?" t-"+r:""),onclick:a=>{if(n.t==="preset"){Object.assign(Mt,Jr[i]),Mt.race=i,Li=!0,As(),Tn(),ri(`${s} \uC885\uC871 \uD2B9\uC9D5\uC744 \uC785\uD614\uC5B4\uC694`);return}si(n.k,i),e.querySelectorAll(".chip").forEach(l=>l.classList.remove("on")),a.currentTarget.classList.add("on"),n.k==="bodyPreset"&&Tn()}},s))}t.append(e)}else if(n.t==="range"){let e=ne("span",{class:"val"},wh(Mt[n.k],n)),i=ne("input",{type:"range",min:n.min,max:n.max,step:n.step,value:Mt[n.k]});i.addEventListener("input",()=>{let r=parseFloat(i.value);e.textContent=wh(r,n),si(n.k,r,{silent:!0}),["height","width","muscle","shoulders","chest","waist","hips","legLen","armLen","neckLen"].includes(n.k)&&Mt.bodyPreset!=="custom"&&(Mt.bodyPreset="custom")}),i.addEventListener("change",()=>{let r=parseFloat(i.value);si(n.k,r,{silent:!0,final:!0}),pd()});let s=ne("button",{class:"mini",title:"\uAE30\uBCF8\uAC12",onclick:()=>{i.value=n.def,e.textContent=wh(n.def,n),si(n.k,n.def,{silent:!0})}},"\u21BA");t.append(ne("div",{class:"lab"},n.label,e,s),i)}else if(n.t==="color"){t.append(ne("div",{class:"lab"},n.label));let e=ne("div",{class:"swatches"}),i=md(n);for(let r of i)e.append(ne("button",{class:"sw"+(Mt[n.k]===r?" on":""),style:`--c:${r}`,"aria-label":r,onclick:o=>{si(n.k,r),e.querySelectorAll(".sw").forEach(a=>a.classList.remove("on")),o.currentTarget.classList.add("on"),s.value=r}}));let s=ne("input",{type:"color",value:Mt[n.k],class:"picker","aria-label":"\uC9C1\uC811 \uACE0\uB974\uAE30"});s.addEventListener("input",()=>{si(n.k,s.value,{silent:!0}),e.querySelectorAll(".sw").forEach(r=>r.classList.remove("on"))}),e.append(ne("label",{class:"sw custom",title:"\uC9C1\uC811 \uACE0\uB974\uAE30"},s,ne("span",{},"+"))),t.append(e)}else if(n.t==="toggle"){let e=ne("input",{type:"checkbox"});e.checked=!!Mt[n.k],e.addEventListener("change",()=>si(n.k,e.checked)),t.append(ne("label",{class:"switch"},ne("span",{class:"lab"},n.label),e,ne("span",{class:"knob"})))}return t}function wh(n,t){return t.min<0&&t.max<=1?(n>0?"+":"")+Math.round(n*100):Math.round(n*100)+(t.max>1.05||t.min>.3?"%":"")}function ri(n,t){let e=ve("#toast");e.innerHTML="",e.append(ne("span",{},n)),t&&e.append(ne("button",{onclick:()=>{t.fn(),e.classList.remove("show")}},t.label)),e.classList.add("show"),clearTimeout(ri._t),ri._t=setTimeout(()=>e.classList.remove("show"),t?5e3:2200)}function W1(){ve("#focusBtn").textContent=Rh==="face"?"\uC804\uC2E0 \uBCF4\uAE30":"\uC5BC\uAD74 \uBCF4\uAE30"}function X1(){Ye.render(fn,$n);let n=Ye.domElement,t=document.createElement("canvas"),e=120,i=Math.round(120*n.height/n.width);return t.width=e,t.height=i,t.getContext("2d").drawImage(n,0,0,e,i),t.toDataURL("image/jpeg",.7)}function gd(){let n=[];try{n=JSON.parse(localStorage.getItem(id)||"[]")}catch{}Array.isArray(n)||(n=[]);let t=ve("#slots"),e=ve("#slotList");e.innerHTML="";for(let i=0;i<4;i++){let s=n[i]&&typeof n[i]=="object"&&n[i].state?n[i]:null;e.append(ne("div",{class:"slot"},s?ne("img",{src:s.thumb,alt:""}):ne("div",{class:"empty"},"\uBE48 \uCE78"),ne("div",{class:"slotInfo"},ne("b",{},`${i+1}\uBC88 ${s?"\xB7 "+(s.state.name||""):""}`),ne("small",{},s?new Date(s.at).toLocaleString("ko-KR"):"")),ne("div",{class:"slotBtns"},ne("button",{onclick:()=>{if(!(s&&!confirm(`${i+1}\uBC88 \uCE78\uC5D0 \uC800\uC7A5\uB41C \uCF54\uB514\uB97C \uC9C0\uAE08 \uBAA8\uC2B5\uC73C\uB85C \uB36E\uC5B4\uC4F8\uAE4C\uC694?`))){n[i]={state:{...Mt},thumb:X1(),at:Date.now()};try{localStorage.setItem(id,JSON.stringify(n))}catch{ri("\uC800\uC7A5 \uACF5\uAC04\uC774 \uBD80\uC871\uD574\uC694")}gd(),ri(`${i+1}\uBC88 \uCE78\uC5D0 \uC800\uC7A5\uD588\uC5B4\uC694 \u{1F4BE}`),Ii(r=>`${r}\uC758 \uC774 \uBAA8\uC2B5, \uC18C\uC911\uD788 \uC800\uC7A5\uD588\uC5B4\uC694 \u{1F4BE}`)}}},"\uC800\uC7A5"),s?ne("button",{onclick:()=>{Mt=ud(s.state),lo(),Li=!0,As(),Tn(),t.classList.remove("open"),ri("\uBD88\uB7EC\uC654\uC5B4\uC694")}},"\uBD88\uB7EC\uC624\uAE30"):null)))}t.classList.add("open")}function Y1(){for(let t of["gesturestart","gesturechange","gestureend"])document.addEventListener(t,e=>e.preventDefault(),{passive:!1});document.addEventListener("touchmove",t=>{t.touches&&t.touches.length>1&&t.preventDefault()},{passive:!1});let n=ve("#concept");for(let[t,e]of mh)n.append(ne("button",{"data-c":t,onclick:()=>{Mt.concept!==t&&(si("concept",t,{silent:!0}),Tn(),ri(`${e} \uCEE8\uC149\uC73C\uB85C \uBC14\uAFE8\uC5B4\uC694`,{label:"\uCEE8\uC149 \uB79C\uB364 \uCF54\uB514",fn:Sh}))}},e));ve("#showAll").addEventListener("change",t=>{Mt.showAll=t.target.checked,As(),Tn()}),ve("#randBtn").onclick=Sh,ve("#resetBtn").onclick=()=>{confirm("\uCC98\uC74C \uBAA8\uC2B5\uC73C\uB85C \uB418\uB3CC\uB9B4\uAE4C\uC694?")&&F1()},ve("#saveBtn").onclick=gd,ve("#slots .close").onclick=()=>ve("#slots").classList.remove("open"),ve("#compBtn").onclick=()=>Ii(),ve("#focusBtn").onclick=()=>ao(Rh==="face"?"full":"face"),ve("#cardBtn").onclick=()=>Qu({getChar:()=>Ke,getState:()=>Mt,setState:(t,e)=>si(t,e,{silent:!0}),renderer:Ye,makeLights:ld,compliment:Ii,toast:ri,applyPose:_h}),ve("#nameBtn").onclick=()=>{let t=ve("#nameBtn");if(t.querySelector("input"))return;let e=ne("input",{value:Mt.name||"",maxlength:12,"aria-label":"\uC774\uB984"});t.querySelector(".nm").replaceWith(e),e.focus(),e.select();let i=()=>{Mt.name=e.value.trim()||"\uC2B9\uD604",As(),e.replaceWith(ne("span",{class:"nm"},Mt.name)),Ii(s=>`\uBC18\uAC00\uC6CC ${ni(s,"\uC544","\uC57C")}! \uC624\uB298\uB3C4 \uBA4B\uC9C4 \uD558\uB8E8 \u{1F496}`)};e.addEventListener("blur",i),e.addEventListener("keydown",s=>{s.key==="Enter"&&e.blur()})},lo(),Tn(),fd(),hd(),Li=!1,ao("full",!0),requestAnimationFrame(Th),setTimeout(()=>Ii(t=>`\uC548\uB155 ${ni(t,"\uC544","\uC57C")}! \uC624\uB298\uC740 \uC5B4\uB5A4 \uBAA8\uC2B5\uC774 \uB420\uAE4C? \u2728`),600),window.__dressup.ready=!0,window.__dressup.randomize=Sh,window.__dressup.set=(t,e)=>{si(t,e,{silent:!0}),Tn()},window.__dressup.focus=ao,window.__dressup.openCard=()=>ve("#cardBtn").click(),window.__dressup.err=()=>oo&&String(oo.stack||oo),window.__dressup.stats=()=>({builds:cd,lastBuildMs:Math.round(Ah)}),window.__dressup.selectTab=(t,e)=>{ke=t,e&&(Es[t]=e),Tn()}}Y1()});q1();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
