/*!
 * pagepiling.js 1.5.3
 *
 * https://github.com/alvarotrigo/pagePiling.js
 * @license MIT licensed
 *
 * Copyright (C) 2016 alvarotrigo.com - A project by Alvaro Trigo
 */
!function(n,e,t,o){"use strict";n.fn.pagepiling=function(i){function a(n){n.addClass("pp-table").wrapInner('<div class="pp-tableCell" style="height:100%" />')}function s(e){var t=n(".pp-section.active").index(".pp-section"),o=e.index(".pp-section");return t>o?"up":"down"}function c(e,t){var o={destination:e,animated:t,activeSection:n(".pp-section.active"),anchorLink:e.data("anchor"),sectionIndex:e.index(".pp-section"),toMove:e,yMovement:s(e),leavingSection:n(".pp-section.active").index(".pp-section")+1};if(!o.activeSection.is(e)){"undefined"==typeof o.animated&&(o.animated=!0),"undefined"!=typeof o.anchorLink&&v(o.anchorLink,o.sectionIndex),o.destination.addClass("active").siblings().removeClass("active"),o.sectionsToMove=p(o),"down"===o.yMovement?(o.translate3d=U(),o.scrolling="-100%",G.css3||o.sectionsToMove.each(function(e){e!=o.activeSection.index(".pp-section")&&n(this).css(u(o.scrolling))}),o.animateSection=o.activeSection):(o.translate3d="translate3d(0px, 0px, 0px)",o.scrolling="0",o.animateSection=e),n.isFunction(G.onLeave)&&G.onLeave.call(this,o.leavingSection,o.sectionIndex+1,o.yMovement),r(o),A(o.anchorLink),z(o.anchorLink,o.sectionIndex),W=o.anchorLink;var i=(new Date).getTime();F=i}}function r(e){G.css3?(w(e.animateSection,e.translate3d,e.animated),e.sectionsToMove.each(function(){w(n(this),e.translate3d,e.animated)}),setTimeout(function(){l(e)},G.scrollingSpeed)):(e.scrollOptions=u(e.scrolling),e.animated?e.animateSection.animate(e.scrollOptions,G.scrollingSpeed,G.easing,function(){d(e),l(e)}):(e.animateSection.css(u(e.scrolling)),setTimeout(function(){d(e),l(e)},400)))}function l(e){n.isFunction(G.afterLoad)&&G.afterLoad.call(this,e.anchorLink,e.sectionIndex+1)}function p(e){var t;return t="down"===e.yMovement?n(".pp-section").map(function(t){if(t<e.destination.index(".pp-section"))return n(this)}):n(".pp-section").map(function(t){if(t>e.destination.index(".pp-section"))return n(this)})}function d(e){"up"===e.yMovement&&e.sectionsToMove.each(function(t){n(this).css(u(e.scrolling))})}function u(n){return"vertical"===G.direction?{top:n}:{left:n}}function v(n,e){G.anchors.length?(location.hash=n,f(location.hash)):f(String(e))}function f(e){e=e.replace("#",""),n("body")[0].className=n("body")[0].className.replace(/\b\s?pp-viewing-[^\s]+\b/g,""),n("body").addClass("pp-viewing-"+e)}function h(){var o=t.location.hash.replace("#",""),i=o,a=n(e).find('.pp-section[data-anchor="'+i+'"]');a.length>0&&c(a,G.animateAnchor)}function m(){var n=(new Date).getTime();return n-F<V+G.scrollingSpeed}function g(){var o=t.location.hash.replace("#","").split("/"),i=o[0];if(i.length&&i&&i!==W){var a;a=isNaN(i)?n(e).find('[data-anchor="'+i+'"]'):n(".pp-section").eq(i-1),c(a)}}function S(n){return{"-webkit-transform":n,"-moz-transform":n,"-ms-transform":n,transform:n}}function w(n,e,t){n.toggleClass("pp-easing",t),n.css(S(e))}function y(e){if(!m()){e=t.event||e;var o=Math.max(-1,Math.min(1,e.wheelDelta||-e.deltaY||-e.detail)),i=n(".pp-section.active"),a=T(i);return o<0?x("down",a):x("up",a),!1}}function x(n,e){var t,o;if("down"==n?(t="bottom",o=X.moveSectionDown):(t="top",o=X.moveSectionUp),e.length>0){if(!b(t,e))return!0;o()}else o()}function b(n,e){return"top"===n?!e.scrollTop():"bottom"===n?e.scrollTop()+1+e.innerHeight()>=e[0].scrollHeight:void 0}function T(n){return n.filter(".pp-scrollable")}function C(){B.get(0).addEventListener?(B.get(0).removeEventListener("mousewheel",y,!1),B.get(0).removeEventListener("wheel",y,!1)):B.get(0).detachEvent("onmousewheel",y)}function M(){B.get(0).addEventListener?(B.get(0).addEventListener("mousewheel",y,!1),B.get(0).addEventListener("wheel",y,!1)):B.get(0).attachEvent("onmousewheel",y)}function k(){if(Q){var n=L();B.off("touchstart "+n.down).on("touchstart "+n.down,P),B.off("touchmove "+n.move).on("touchmove "+n.move,N)}}function E(){if(Q){var n=L();B.off("touchstart "+n.down),B.off("touchmove "+n.move)}}function L(){var n;return n=t.PointerEvent?{down:"pointerdown",move:"pointermove",up:"pointerup"}:{down:"MSPointerDown",move:"MSPointerMove",up:"MSPointerUp"}}function D(n){var e=new Array;return e.y="undefined"!=typeof n.pageY&&(n.pageY||n.pageX)?n.pageY:n.touches[0].pageY,e.x="undefined"!=typeof n.pageX&&(n.pageY||n.pageX)?n.pageX:n.touches[0].pageX,e}function I(n){return"undefined"==typeof n.pointerType||"mouse"!=n.pointerType}function P(n){var e=n.originalEvent;if(I(e)){var t=D(e);R=t.y,j=t.x}}function N(e){var t=e.originalEvent;if(!Y(e.target)&&I(t)){var o=n(".pp-section.active"),i=T(o);if(i.length||e.preventDefault(),!m()){var a=D(t);H=a.y,K=a.x,"horizontal"===G.direction&&Math.abs(j-K)>Math.abs(R-H)?Math.abs(j-K)>B.width()/100*G.touchSensitivity&&(j>K?x("down",i):K>j&&x("up",i)):Math.abs(R-H)>B.height()/100*G.touchSensitivity&&(R>H?x("down",i):H>R&&x("up",i))}}}function Y(e,t){t=t||0;var o=n(e).parent();return!!(t<G.normalScrollElementTouchThreshold&&o.is(G.normalScrollElements))||t!=G.normalScrollElementTouchThreshold&&Y(o,++t)}function q(){n("body").append('<div id="pp-nav"><ul></ul></div>');var e=n("#pp-nav");e.css("color",G.navigation.textColor),e.addClass(G.navigation.position);for(var t=0;t<n(".pp-section").length;t++){var o="";if(G.anchors.length&&(o=G.anchors[t]),"undefined"!==G.navigation.tooltips){var i=G.navigation.tooltips[t];"undefined"==typeof i&&(i="")}e.find("ul").append('<li data-tooltip="'+i+'"><a href="#'+o+'"><span></span></a></li>')}e.find("span").css("border-color",G.navigation.bulletsColor)}function z(e,t){G.navigation&&(n("#pp-nav").find(".active").removeClass("active"),e?n("#pp-nav").find('a[href="#'+e+'"]').addClass("active"):n("#pp-nav").find("li").eq(t).find("a").addClass("active"))}function A(e){G.menu&&(n(G.menu).find(".active").removeClass("active"),n(G.menu).find('[data-menuanchor="'+e+'"]').addClass("active"))}function O(){var n,i=e.createElement("p"),a={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};e.body.insertBefore(i,null);for(var s in a)i.style[s]!==o&&(i.style[s]="translate3d(1px,1px,1px)",n=t.getComputedStyle(i).getPropertyValue(a[s]));return e.body.removeChild(i),n!==o&&n.length>0&&"none"!==n}function U(){return"vertical"!==G.direction?"translate3d(-100%, 0px, 0px)":"translate3d(0px, -100%, 0px)"}var W,X=n.fn.pagepiling,B=n(this),F=0,Q="ontouchstart"in t||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,R=0,j=0,H=0,K=0,V=600,G=n.extend(!0,{direction:"vertical",menu:null,verticalCentered:!0,sectionsColor:[],anchors:[],scrollingSpeed:700,easing:"easeInQuart",loopBottom:!1,loopTop:!1,css3:!0,navigation:{textColor:"#000",bulletsColor:"#000",position:"right",tooltips:[]},normalScrollElements:null,normalScrollElementTouchThreshold:5,touchSensitivity:5,keyboardScrolling:!0,sectionSelector:".section",animateAnchor:!1,afterLoad:null,onLeave:null,afterRender:null},i);n.extend(n.easing,{easeInQuart:function(n,e,t,o,i){return o*(e/=i)*e*e*e+t}}),X.setScrollingSpeed=function(n){G.scrollingSpeed=n},X.setMouseWheelScrolling=function(n){n?M():C()},X.setAllowScrolling=function(n){n?(X.setMouseWheelScrolling(!0),k()):(X.setMouseWheelScrolling(!1),E())},X.setKeyboardScrolling=function(n){G.keyboardScrolling=n},X.moveSectionUp=function(){var e=n(".pp-section.active").prev(".pp-section");!e.length&&G.loopTop&&(e=n(".pp-section").last()),e.length&&c(e)},X.moveSectionDown=function(){var e=n(".pp-section.active").next(".pp-section");!e.length&&G.loopBottom&&(e=n(".pp-section").first()),e.length&&c(e)},X.moveTo=function(t){var o="";o=isNaN(t)?n(e).find('[data-anchor="'+t+'"]'):n(".pp-section").eq(t-1),o.length>0&&c(o)},n(G.sectionSelector).each(function(){n(this).addClass("pp-section")}),G.css3&&(G.css3=O()),n(B).css({overflow:"hidden","-ms-touch-action":"none","touch-action":"none"}),X.setAllowScrolling(!0),n.isEmptyObject(G.navigation)||q();var J=n(".pp-section").length;n(".pp-section").each(function(e){n(this).data("data-index",e),n(this).css("z-index",J),e||0!==n(".pp-section.active").length||n(this).addClass("active"),"undefined"!=typeof G.anchors[e]&&n(this).attr("data-anchor",G.anchors[e]),"undefined"!=typeof G.sectionsColor[e]&&n(this).css("background-color",G.sectionsColor[e]),G.verticalCentered&&!n(this).hasClass("pp-scrollable")&&a(n(this)),J-=1}).promise().done(function(){G.navigation&&(n("#pp-nav").css("margin-top","-"+n("#pp-nav").height()/2+"px"),n("#pp-nav").find("li").eq(n(".pp-section.active").index(".pp-section")).find("a").addClass("active")),n(t).on("load",function(){h()}),n.isFunction(G.afterRender)&&G.afterRender.call(this)}),n(t).on("hashchange",g),n(e).keydown(function(e){if(G.keyboardScrolling&&!m())switch(e.which){case 38:case 33:X.moveSectionUp();break;case 40:case 34:X.moveSectionDown();break;case 36:X.moveTo(1);break;case 35:X.moveTo(n(".pp-section").length);break;case 37:X.moveSectionUp();break;case 39:X.moveSectionDown();break;default:return}}),G.normalScrollElements&&(n(e).on("mouseenter",G.normalScrollElements,function(){X.setMouseWheelScrolling(!1)}),n(e).on("mouseleave",G.normalScrollElements,function(){X.setMouseWheelScrolling(!0)})),n(e).on("click touchstart","#pp-nav a",function(e){e.preventDefault();var t=n(this).parent().index();c(n(".pp-section").eq(t))}),n(e).on({mouseenter:function(){var e=n(this).data("tooltip");n('<div class="pp-tooltip '+G.navigation.position+'">'+e+"</div>").hide().appendTo(n(this)).fadeIn(200)},mouseleave:function(){n(this).find(".pp-tooltip").fadeOut(200,function(){n(this).remove()})}},"#pp-nav li")}}(jQuery,document,window);
//# sourceMappingURL=jquery.pagepiling.min.js.map
