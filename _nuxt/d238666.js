(window.webpackJsonp=window.webpackJsonp||[]).push([[18,3],{401:function(t,e,r){"use strict";r.r(e);r(257);var n={props:["text","buttonText","link"]},c=r(17),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("section",[e("h4",{staticClass:"mb-4 fs-1 fw-light"},[t._v(t._s(t.text))]),t._v(" "),e("a",{staticClass:"btn btn-primary btn-lg",attrs:{href:t.link}},[t._v(t._s(t.buttonText))])])}),[],!1,null,null,null);e.default=component.exports},419:function(t,e,r){"use strict";r.r(e);r(21),r(40);var n=r(13),c=r(6);r(27),r(20),r(44),r(45),r(28),r(10),r(29),r(53);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var v={layout:"article",asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n,c,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,c=t.app,e.next=3,r(c.i18n.locale,"services",n.slug).fetch();case 3:return o=e.sent,e.next=6,r(c.i18n.locale,"works").where({service:o.friendly_name}).fetch();case 6:return l=e.sent,e.abrupt("return",{service:o,works:l});case 8:case"end":return e.stop()}}),e)})))()},components:{PackageCallout:r(401).default},head:function(){var t=[],e={},r={};this.works.length>0&&(this.works.forEach((function(element){t.push("https://sixdegz.mo.cloudinary.net/promoe/assets/images/works/".concat(element.featured_image))})),e.name="og:image",e.hid="og:image",e.content=t[0],r.name="twitter:image",r.hid="twitter:image",r.content=t[0]);var n=this;return{title:n.service.title,meta:[{hid:"description",name:"description",content:n.service.description},{hid:"og:title",name:"og:title",content:n.service.title},{hid:"og:description",name:"og:description",content:n.service.description},{hid:"og:url",name:"og:url",content:"".concat(this.publicPath)},l({},e),{hid:"twitter:title",name:"twitter:title",content:n.service.title},{hid:"twitter:description",name:"twitter:description",content:this.service.description},{hid:"twitter:url",name:"twitter:url",content:"".concat(this.publicPath)},l({},r)]}},jsonld:function(){var t=[];return this.works.length>0&&this.works.forEach((function(element){t.push("https://sixdegz.mo.cloudinary.net/promoe/assets/images/works/".concat(element.featured_image))})),{"@context":"https://schema.org","@type":"Service",serviceType:this.service.title,name:this.service.title,description:this.service.description,image:t}},data:function(){return{publicPath:"https://www.promoe.com.sa"}}},m=r(17),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("article",{staticClass:"pb-5 mb-5"},[e("nav",{attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb"},[e("li",{staticClass:"breadcrumb-item",attrs:{"aria-current":"page"}},[e("a",{attrs:{href:"/"}},[t._v(t._s(t.$t("Home")))])]),t._v(" "),e("li",{staticClass:"breadcrumb-item",attrs:{"aria-current":"page"}},[e("a",{attrs:{href:"/#services"}},[t._v(t._s(t.$t("Services")))])])])]),t._v(" "),e("h1",{staticClass:"pb-3 border-bottom mb-3"},[t._v(t._s(t.service.title))]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[t.service.image?e("img",{attrs:{loading:"lazy",src:"/assets/images/services/".concat(t.service.image),alt:t.service.title}}):t._e(),t._v(" "),e("p",{staticClass:"lead"},[t._v(t._s(t.service.description))]),t._v(" "),e("nuxt-content",{attrs:{document:t.service}})],1),t._v(" "),t.works.length>0||t.service.featured_image?e("div",{staticClass:"col col-xl-4"},[t.service.featured_image?e("div",{staticClass:"mb-5"},[e("img",{staticClass:"contained-image",attrs:{loading:"lazy",src:"/assets/images/services/".concat(t.service.featured_image),alt:t.service.title}})]):t._e()]):t._e()])])])]),t._v(" "),e("SectionsContact",{staticClass:"pt-5 mt-5",attrs:{title:t.$t("readytojoin"),subtitle:t.$t("contactussub")}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionsContact:r(260).default})}}]);