(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{138:function(t,e,r){"use strict";r(14);var n=r(3),l={name:"TheHeader",data:function(){return{isOpen:!1}},methods:{toggleNavbar:function(){this.isOpen=!this.isOpen},closeNavbar:function(){this.isOpen=!1}},computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))}},watch:{$route:function(){this.closeNavbar()}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.isOpen=!1;case 1:case"end":return e.stop()}}),e)})))()}},o=r(4),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("header",{staticClass:"fixed inset-x-0 top-0 z-20 text-gray-400 shadow bg-surface-header"},[r("div",{staticClass:"container flex flex-col py-2 lg:justify-between lg:items-center lg:py-4 lg:flex-row"},[r("div",{staticClass:"flex flex-row items-center justify-between"},[r("nuxt-link",{staticClass:"font-medium tracking-wide text-white uppercase font-display md:text-xl",attrs:{to:t.localePath({name:"about-me"}),tag:"a"}},[t._v("Carlos Alberto Arroyo Martínez")]),t._v(" "),r("button",{staticClass:"text-white lg:hidden",attrs:{type:"button","aria-label":"Toggle navigation bar"},on:{click:function(e){return t.toggleNavbar()}}},[r("svg",{staticClass:"w-8 fill-current md:w-10",class:t.isOpen?"hidden":"block",attrs:{viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),r("path",{attrs:{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}})]),t._v(" "),r("svg",{staticClass:"w-8 fill-current md:w-10",class:t.isOpen?"block":"hidden",attrs:{viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}}),t._v(" "),r("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})])])],1),t._v(" "),r("nav",{staticClass:"lg:block",class:t.isOpen?"block":"hidden",attrs:{id:"mainNavbar"}},[r("ul",{staticClass:"flex flex-col py-4 space-y-4 lg:py-0 lg:flex-row lg:space-x-6 lg:space-y-0"},[r("app-navlink",{attrs:{href:"about-me"}},[t._v("\n\t\t\t\t\t\t"+t._s(t.$t("nav_links.about_me"))+"\n\t\t\t\t\t")]),t._v(" "),r("app-navlink",{attrs:{href:"portfolio"}},[t._v("\n\t\t\t\t\t\t"+t._s(t.$t("nav_links.portfolio"))+"\n\t\t\t\t\t")]),t._v(" "),r("app-navlink",{attrs:{href:"contact-me"}},[t._v("\n\t\t\t\t\t\t"+t._s(t.$t("nav_links.contact_me"))+"\n\t\t\t\t\t")]),t._v(" "),r("app-navlink",{attrs:{href:"blog"}},[t._v("\n\t\t\t\t\t\t"+t._s(t.$t("nav_links.blog"))+"\n\t\t\t\t\t")])],1)])])]),t._v(" "),r("div",{staticClass:"fixed inset-0 z-10 w-screen h-screen",class:t.isOpen?"block":"hidden",on:{click:function(e){return t.closeNavbar()}}})])}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{AppNavlink:r(203).default})},139:function(t,e,r){"use strict";var n={name:"TheFooter"},l=r(4),component=Object(l.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"bg-surface"},[e("div",{staticClass:"container flex flex-col justify-between py-5 md:items-center md:flex-row"},[this._m(0),this._v(" "),e("section",{staticClass:"flex flex-row space-x-20 place-self-center md:space-x-5"},[e("a",{staticClass:"flex flex-col items-center hover:text-primary",attrs:{href:"mailto:carlosarroyoam@gmail.com","aria-label":"Send a email to Carlos Alberto Arroyo Martínez"}},[e("svg",{staticClass:"w-6 h-6 mr-1 fill-current",attrs:{viewBox:"0 0 512 512"}},[e("path",{attrs:{d:"M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"}})])]),this._v(" "),e("a",{staticClass:"flex flex-col items-center hover:text-primary",attrs:{target:"_blank",href:"https://www.linkedin.com/in/carlosarroyoam/",rel:"noreferrer","aria-label":"Carlos Alberto Arroyo Martínez's linkedin profile"}},[e("svg",{staticClass:"w-6 h-6 fill-current",attrs:{viewBox:"0 0 512 512"}},[e("path",{attrs:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"}})])]),this._v(" "),e("a",{staticClass:"flex flex-col items-center hover:text-primary",attrs:{target:"_blank",href:"https://github.com/carlosarroyoam/",rel:"noreferrer","aria-label":"Carlos Alberto Arroyo Martínez's github profile"}},[e("svg",{staticClass:"w-6 h-6 fill-current",attrs:{viewBox:"0 0 512 512"}},[e("path",{attrs:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}})])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("small",{staticClass:"flex flex-col order-last mt-5 md:mt-0 md:order-first"},[e("span",{staticClass:"text-sm font-medium text-gray-900 uppercase font-display"},[this._v("Carlos Alberto Arroyo Martínez")]),this._v(" "),e("span",{staticClass:"text-sm font-normal font-body"},[this._v("Copyright © 2020 Todos los derechos reservados.")])])}],!1,null,null,null);e.a=component.exports},140:function(t,e,r){"use strict";var n={name:"TheMain"},l=r(4),component=Object(l.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("main",{staticClass:"container flex-grow pb-16"},[this._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},141:function(t,e,r){"use strict";var n=r(71).a,l=r(4),component=Object(l.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-col min-h-screen pt-16 antialiased text-gray-700 font-body bg-background md:pt-24 theme-light"},[e("TheHeader"),this._v(" "),e("TheMain",[e("nuxt")],1),this._v(" "),e("TheFooter")],1)}),[],!1,null,null,null);e.a=component.exports},142:function(t,e,r){"use strict";r.r(e);var n={name:"Heading",props:{tag:{type:String,default:"h1",validator:function(t){return-1!==["h1","h2","h3","h4"].indexOf(t)}}}},l=r(4),component=Object(l.a)(n,(function(){var t,e=this.$createElement;return(this._self._c||e)(this.tag,{tag:"component",staticClass:"max-w-4xl font-normal text-gray-900 uppercase font-display",class:(t={},t["text-4xl"]="h1"===this.tag,t["text-2xl"]="h2"===this.tag,t["text-xl"]="h3"===this.tag,t["text-base"]="h4"===this.tag,t)},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},143:function(t,e,r){"use strict";r.r(e);var n={name:"Paragraph"},l=r(4),component=Object(l.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("p",{staticClass:"max-w-3xl text-base font-normal tracking-wide"},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},144:function(t,e,r){"use strict";r.r(e);var n={name:"Button",props:["href","type","isLink","disabled"]},l=r(4),component=Object(l.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("nuxt-link",{staticClass:"inline-flex items-center px-4 py-2 text-sm font-medium tracking-wider text-white uppercase rounded bg-primary",attrs:{to:this.localePath({name:this.href}),tag:"a"}},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},149:function(t,e,r){r(150),t.exports=r(151)},178:function(t,e,r){t.exports=r.p+"img/404.3c5d273.svg"},180:function(t,e,r){},201:function(t,e,r){var map={"./en-US":[147,0],"./en-US.js":[147,0],"./es-MX":[148,1],"./es-MX.js":[148,1]};function n(t){if(!r.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],n=e[0];return r.e(e[1]).then((function(){return r(n)}))}n.keys=function(){return Object.keys(map)},n.id=201,t.exports=n},203:function(t,e,r){"use strict";r.r(e);var n={name:"Navlink",props:["href"]},l=r(4),component=Object(l.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("nuxt-link",{attrs:{to:this.localePath({name:this.href}),tag:"li"}},[e("a",{staticClass:"text-sm font-medium tracking-wide uppercase font-display hover:text-white"},[this._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},32:function(t,e,r){"use strict";var n={layout:"app",props:["error"],head:function(){return{title:this.$t("errors.error")}}},l=r(4),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"flex flex-col items-center"},[n("header",[n("app-heading",{staticClass:"lg:text-center"},[t._v("\n\t\t\t"+t._s(t.$t("errors.not_found_title"))+"\n\t\t")]),t._v(" "),n("img",{staticClass:"w-64 mx-auto my-5 d-block",attrs:{src:r(178),alt:"Page not found image, a ghost being abducted."}}),t._v(" "),n("app-paragraph",{staticClass:"lg:text-center"},[t._v("\n\t\t\t"+t._s(t.$t("errors.not_found_message"))+"\n\t\t")])],1),t._v(" "),n("app-button",{staticClass:"mt-6",attrs:{href:"aboutme"}},[t._v("\n\t\t"+t._s(t.$t("nav_links.go_home"))+"\n\t")])],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{AppHeading:r(142).default,AppParagraph:r(143).default,AppButton:r(144).default})},71:function(t,e,r){"use strict";(function(t){r(31),r(17),r(18),r(8),r(23),r(182);var n=r(33),l=r(10),o=r(138),c=r(139),f=r(140);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a={name:"App",components:{TheHeader:o.a,TheFooter:c.a,TheMain:f.a},head:function(){var e=this.$nuxtI18nSeo();return m({title:t.env.npm_package_name||"",htmlAttrs:m({},e.htmlAttrs),meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"keywords",name:"keywords",content:"carlosarroyoam, Carlos Arroyo, Carlos Alberto Arroyo Martínez, Blog Programacion Queretaro, Desarrollo Web Querétaro, Diseño Web Querétaro, Desarrollo Web Querétaro, Paginas web Querétaro, Ingeniero en Informatica Querétaro, Tutoriales programacion"},{name:"author",content:"Carlos Alberto Arroyo Martínez"},{name:"copyright",content:"Carlos Alberto Arroyo Martínez"},{name:"robots",content:"all"},{name:"theme-color",content:"#384247"},{name:"X-UA-Compatible",content:"ie=edge"}].concat(Object(n.a)(e.meta)),link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],script:[]},e.link)}}}).call(this,r(120))}},[[149,11,3,12]]]);
//# sourceMappingURL=bda4169.js.map