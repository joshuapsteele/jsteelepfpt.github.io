window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/joshuapsteele.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.1"}};
/*! This file is auto-generated */
!function(e,a,t){var n,r,o,i=a.createElement("canvas"),p=i.getContext&&i.getContext("2d");function s(e,t){var a=String.fromCharCode,e=(p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,e),0,0),i.toDataURL());return p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,t),0,0),e===i.toDataURL()}function c(e){var t=a.createElement("script");t.src=e,t.defer=t.type="text/javascript",a.getElementsByTagName("head")[0].appendChild(t)}for(o=Array("flag","emoji"),t.supports={everything:!0,everythingExceptFlag:!0},r=0;r<o.length;r++)t.supports[o[r]]=function(e){if(p&&p.fillText)switch(p.textBaseline="top",p.font="600 32px Arial",e){case"flag":return s([127987,65039,8205,9895,65039],[127987,65039,8203,9895,65039])?!1:!s([55356,56826,55356,56819],[55356,56826,8203,55356,56819])&&!s([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]);case"emoji":return!s([129777,127995,8205,129778,127999],[129777,127995,8203,129778,127999])}return!1}(o[r]),t.supports.everything=t.supports.everything&&t.supports[o[r]],"flag"!==o[r]&&(t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&t.supports[o[r]]);t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&!t.supports.flag,t.DOMReady=!1,t.readyCallback=function(){t.DOMReady=!0},t.supports.everything||(n=function(){t.readyCallback()},a.addEventListener?(a.addEventListener("DOMContentLoaded",n,!1),e.addEventListener("load",n,!1)):(e.attachEvent("onload",n),a.attachEvent("onreadystatechange",function(){"complete"===a.readyState&&t.readyCallback()})),(e=t.source||{}).concatemoji?c(e.concatemoji):e.wpemoji&&e.twemoji&&(c(e.twemoji),c(e.wpemoji)))}(window,document,window._wpemojiSettings);;
document.body.classList.remove("no-js");;
function toggleDarkMode() { // jshint ignore:line
	var toggler = document.getElementById( 'dark-mode-toggler' );

	if ( 'false' === toggler.getAttribute( 'aria-pressed' ) ) {
		toggler.setAttribute( 'aria-pressed', 'true' );
		document.documentElement.classList.add( 'is-dark-theme' );
		document.body.classList.add( 'is-dark-theme' );
		window.localStorage.setItem( 'twentytwentyoneDarkMode', 'yes' );
	} else {
		toggler.setAttribute( 'aria-pressed', 'false' );
		document.documentElement.classList.remove( 'is-dark-theme' );
		document.body.classList.remove( 'is-dark-theme' );
		window.localStorage.setItem( 'twentytwentyoneDarkMode', 'no' );
	}
}

function twentytwentyoneIsDarkMode() {
	var isDarkMode = window.matchMedia( '(prefers-color-scheme: dark)' ).matches;

	if ( 'yes' === window.localStorage.getItem( 'twentytwentyoneDarkMode' ) ) {
		isDarkMode = true;
	} else if ( 'no' === window.localStorage.getItem( 'twentytwentyoneDarkMode' ) ) {
		isDarkMode = false;
	}

	return isDarkMode;
}

function darkModeInitialLoad() {
	var toggler = document.getElementById( 'dark-mode-toggler' ),
		isDarkMode = twentytwentyoneIsDarkMode();

	if ( isDarkMode ) {
		document.documentElement.classList.add( 'is-dark-theme' );
		document.body.classList.add( 'is-dark-theme' );
	} else {
		document.documentElement.classList.remove( 'is-dark-theme' );
		document.body.classList.remove( 'is-dark-theme' );
	}

	if ( toggler && isDarkMode ) {
		toggler.setAttribute( 'aria-pressed', 'true' );
	}
}

function darkModeRepositionTogglerOnScroll() {

	var toggler = document.getElementById( 'dark-mode-toggler' ),
		prevScroll = window.scrollY || document.documentElement.scrollTop,
		currentScroll,

		checkScroll = function() {
			currentScroll = window.scrollY || document.documentElement.scrollTop;
			if (
				currentScroll + ( window.innerHeight * 1.5 ) > document.body.clientHeight ||
				currentScroll < prevScroll
			) {
				toggler.classList.remove( 'hide' );
			} else if ( currentScroll > prevScroll && 250 < currentScroll ) {
				toggler.classList.add( 'hide' );
			}
			prevScroll = currentScroll;
		};

	if ( toggler ) {
		window.addEventListener( 'scroll', checkScroll );
	}
}

darkModeInitialLoad();
darkModeRepositionTogglerOnScroll();;
if ( -1 !== navigator.userAgent.indexOf( 'MSIE' ) || -1 !== navigator.appVersion.indexOf( 'Trident/' ) ) {
		document.body.classList.add( 'is-IE' );
	};
document.addEventListener('DOMContentLoaded',function(){var b=document.querySelectorAll('.show-additional-facepiles'),c=document.querySelectorAll('.mention-list'),a,f,d,g,e;if(b.length===0||c.length===0)return;for(a=0;a<c.length;a++)f=c[a],f.classList.add('initialized');for(a=0;a<b.length;a++)d=b[a],g=d.parentNode.parentNode.querySelector('.hide-additional-facepiles'),d.addEventListener('click',function(){e(this)}),g.addEventListener('click',function(){e(this)});e=function(b){var a=b.parentNode,c=a.classList.contains('is-hidden')?a.parentNode.querySelector('.additional-facepile-button-list-item:not(.is-hidden)'):a.parentNode.querySelector('.additional-facepile-button-list-item.is-hidden');a.classList.toggle('is-hidden'),c.classList.toggle('is-hidden')}});
/**
 * File polyfills.js.
 *
 * Polyfills for IE11.
 */

/**
 * Polyfill for Element.closest() because we need to support IE11.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
 */
if ( ! Element.prototype.matches ) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if ( ! Element.prototype.closest ) {
	Element.prototype.closest = function( s ) {
		var el = this;
		do {
			if ( Element.prototype.matches.call( el, s ) ) {
				return el;
			}
			el = el.parentElement || el.parentNode;
		} while ( el !== null && el.nodeType === 1 );
		return null;
	};
}

/**
 * Polyfill for NodeList.foreach() because we need to support IE11.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
 */
if ( window.NodeList && ! NodeList.prototype.forEach ) {
	NodeList.prototype.forEach = function( callback, thisArg ) {
		var i;
		thisArg = thisArg || window;
		for ( i = 0; i < this.length; i++ ) {
			callback.call( thisArg, this[i], i, this );
		}
	};
}
;
function twentytwentyoneToggleAriaExpanded(a,b){'true'!==a.getAttribute('aria-expanded')?(a.setAttribute('aria-expanded','true'),twentytwentyoneSubmenuPosition(a.parentElement),b&&document.addEventListener('click',twentytwentyoneCollapseMenuOnClickOutside)):(a.setAttribute('aria-expanded','false'),b&&document.removeEventListener('click',twentytwentyoneCollapseMenuOnClickOutside))}function twentytwentyoneCollapseMenuOnClickOutside(a){document.getElementById('site-navigation').contains(a.target)||document.getElementById('site-navigation').querySelectorAll('.sub-menu-toggle').forEach(function(a){a.setAttribute('aria-expanded','false')})}function twentytwentyoneSubmenuPosition(f){var a=f.querySelector('ul.sub-menu'),b,c,d,e;if(!a)return;b=a.getBoundingClientRect(),c=Math.round(b.right),d=Math.round(b.left),e=Math.round(window.innerWidth),c>e?a.classList.add('submenu-reposition-right'):document.body.classList.contains('rtl')&&d<0&&a.classList.add('submenu-reposition-left')}function twentytwentyoneExpandSubMenu(a){a.closest('nav').querySelectorAll('.sub-menu-toggle').forEach(function(b){b!==a&&b.setAttribute('aria-expanded','false')}),twentytwentyoneToggleAriaExpanded(a,!0),a.parentNode.querySelectorAll('ul > li:last-child > a').forEach(function(b){b.addEventListener('blur',function(b){a.parentNode.contains(b.relatedTarget)||a.setAttribute('aria-expanded','false')})})}(function(){var a=function(b){var c=document.body,a=document.getElementById(b+'-mobile-menu'),d=document.getElementById('site-navigation');if(!d)return;a&&(a.onclick=function(){c.classList.toggle(b+'-navigation-open'),c.classList.toggle('lock-scrolling'),twentytwentyoneToggleAriaExpanded(a),a.focus()}),document.addEventListener('keydown',function(d){var l,e,k,g,h,i,f,j,m;if(!c.classList.contains(b+'-navigation-open'))return;l=document.querySelector('.'+b+'-navigation'),k='input, a, button',e=l.querySelectorAll(k),e=Array.prototype.slice.call(e),f=d.keyCode===9,j=d.shiftKey,m=d.keyCode===27,i=document.activeElement,g=e[e.length-1],h=e[0],m&&(d.preventDefault(),c.classList.remove(b+'-navigation-open','lock-scrolling'),twentytwentyoneToggleAriaExpanded(a),a.focus()),!j&&f&&g===i&&(d.preventDefault(),h.focus()),j&&f&&h===i&&(d.preventDefault(),g.focus()),f&&h===g&&d.preventDefault()}),document.addEventListener('click',function(d){d.target.hash&&d.target.hash.includes('#')&&(c.classList.remove(b+'-navigation-open','lock-scrolling'),twentytwentyoneToggleAriaExpanded(a),setTimeout(function(){var a=document.getElementById(d.target.hash.slice(1));a&&a.scrollIntoView()},550))}),d.querySelectorAll('.menu-wrapper > .menu-item-has-children').forEach(function(a){a.addEventListener('mouseenter',function(){this.querySelector('.sub-menu-toggle').setAttribute('aria-expanded','true'),twentytwentyoneSubmenuPosition(a)}),a.addEventListener('mouseleave',function(){this.querySelector('.sub-menu-toggle').setAttribute('aria-expanded','false')})})};window.addEventListener('load',function(){new a('primary')})})();
function twentytwentyoneResponsiveEmbeds(){var a,b;document.querySelectorAll('iframe').forEach(function(c){c.width&&c.height&&(a=parseFloat(c.width)/parseFloat(c.height),b=parseFloat(window.getComputedStyle(c.parentElement,null).width.replace('px','')),c.style.maxWidth='100%',c.style.maxHeight=Math.round(b/a).toString()+'px')})}twentytwentyoneResponsiveEmbeds(),window.onresize=twentytwentyoneResponsiveEmbeds;
/(trident|msie)/i.test(navigator.userAgent)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",(function(){var t,e=location.hash.substring(1);/^[A-z0-9_-]+$/.test(e)&&(t=document.getElementById(e))&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())}),!1);