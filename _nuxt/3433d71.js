(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{234:function(t,e,r){"use strict";r.r(e);var n=r(2),c=(r(19),{name:"Article",layout:"app",components:{Author:function(){return r.e(23).then(r.bind(null,242))}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("es-mx",{year:"numeric",month:"long",day:"numeric"})}},head:function(){return{title:this.article.title,meta:[{hid:"description",name:"description",content:this.article.description},{hid:"keywords",name:"keywords",content:["Blog de desarrollo web","Blog de tecnología","Blog de programación"]}]}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("articles",n.slug).fetch();case 3:return article=e.sent,e.abrupt("return",{article:article});case 5:case"end":return e.stop()}}),e)})))()}}),o=r(4),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",[r("header",[r("h1",{staticClass:"uppercase lg:text-center"},[t._v(t._s(t.article.title))]),t._v(" "),r("p",{staticClass:"md:text-center"},[t._v(t._s(t.article.description))])]),t._v(" "),r("img",{attrs:{src:t.article.img,alt:t.article.alt}}),t._v(" "),r("p",[t._v(t._s(t.formatDate(t.article.updatedAt)))]),t._v(" "),r("nuxt-content",{attrs:{document:t.article}}),t._v(" "),r("Author",{attrs:{author:t.article.author}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);
//# sourceMappingURL=3433d71.js.map