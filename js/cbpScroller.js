/**
 * cbpScroller.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
(function(e){var b=e.document.documentElement;function a(){var i=b.clientHeight,j=e.innerHeight;if(i<j){return j}else{return i}}function g(){return e.pageYOffset||b.scrollTop}function f(j){var i=0,k=0;do{if(!isNaN(j.offsetTop)){i+=j.offsetTop}if(!isNaN(j.offsetLeft)){k+=j.offsetLeft}}while(j=j.offsetParent);return{top:i,left:k}}function c(o,n){var m=o.offsetHeight,l=g(),j=l+a(),i=f(o).top,k=i+m,n=n||0;return(i+m*n)<=j&&(k)>=l}function h(j,i){for(var k in i){if(i.hasOwnProperty(k)){j[k]=i[k]}}return j}function d(j,i){this.el=j;this.options=h(this.defaults,i);this._init()}d.prototype={defaults:{viewportFactor:0.2},_init:function(){if(Modernizr.touch){return}this.sections=Array.prototype.slice.call(this.el.querySelectorAll(".cbp-so-section"));this.didScroll=false;var i=this;this.sections.forEach(function(m,l){if(!c(m)){classie.add(m,"cbp-so-init")}});var k=function(){if(!i.didScroll){i.didScroll=true;setTimeout(function(){i._scrollPage()},60)}},j=function(){function l(){i._scrollPage();i.resizeTimeout=null}if(i.resizeTimeout){clearTimeout(i.resizeTimeout)}i.resizeTimeout=setTimeout(l,200)};e.addEventListener("scroll",k,false);e.addEventListener("resize",j,false)},_scrollPage:function(){var i=this;this.sections.forEach(function(k,j){if(c(k,i.options.viewportFactor)){classie.add(k,"cbp-so-animate")}else{classie.add(k,"cbp-so-init");classie.remove(k,"cbp-so-animate")}});this.didScroll=false}};e.cbpScroller=d})(window);