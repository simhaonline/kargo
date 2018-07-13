(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{153:function(e,t,r){e.exports=r.p+"assets/img/kargo-swarm.a7faee5b.svg"},154:function(e,t,r){e.exports=r.p+"assets/img/kargo-normal.1bee1e59.svg"},155:function(e,t,r){"use strict";r.r(t);var s=[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"how-does-it-work"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-does-it-work","aria-hidden":"true"}},[this._v("#")]),this._v(" How does it work ?")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"main-concepts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#main-concepts","aria-hidden":"true"}},[this._v("#")]),this._v(" Main concepts")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("kargo")]),this._v(" consists in a Docker based solution which allows you to set up and deploy the following geospatial web apps.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("a base compose file to be used when running Docker in a normal mode: "),t("code",[this._v("<service>.yml")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("the "),t("strong",[this._v("settings of the services")]),this._v(" to deploy. Note that, these settings are provided as an example and they should be overridden to match your implementation.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("the "),t("strong",[this._v("helper scripts")]),this._v(" to deploy and remove the services.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"global-overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#global-overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Global overview")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Designed to work either on normal mode or swarm mode of Docker, "),t("strong",[this._v("Kargo")]),this._v(" should be flexible enough to be used in different type of infrastructures. It is up to you to define your architecture and to adjust the settings.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"normal-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#normal-mode","aria-hidden":"true"}},[this._v("#")]),this._v(" Normal mode")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:r(154),alt:"kargo-normal"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"swarm-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#swarm-mode","aria-hidden":"true"}},[this._v("#")]),this._v(" Swarm mode")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:r(153),alt:"kargo-swarm"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"what-is-inside"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-is-inside","aria-hidden":"true"}},[this._v("#")]),this._v(" What is inside ?")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Kargo")]),this._v(" comes with the following apps and services:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),t("p",[this._v("Even if "),t("strong",[this._v("Kargo")]),this._v(" let you deploy a complete stack of services using a single command, we assume you are enough familiar with the underlying applications to be able to customize their configurations in order to address your needs.")])])}],o=r(0),i=Object(o.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._m(1),e._m(2),r("p",[e._v("It comes with:")]),r("ul",[r("li",[e._v("the "),r("strong",[e._v("Docker compose files")]),e._v(" to use to deploy the services. For each service, "),r("strong",[e._v("Kargo")]),e._v(" define:\n"),r("ol",[e._m(3),r("li",[e._v("a swarm compose file to be used when running Docker in a swarm mode: "),r("code",[e._v("<service.swarm.yml")]),e._v(". This file extends the base configuration. Read "),r("a",{attrs:{href:"https://docs.docker.com/compose/extends/",target:"_blank",rel:"noopener noreferrer"}},[e._v("this article"),r("OutboundLink")],1),e._v(" to get more information on extending services in compose.")])])]),e._m(4),e._m(5)]),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),r("p",[r("strong",[e._v("Kargo")]),e._v(" has been mainly designed to be easily deployable on "),r("a",{attrs:{href:"https://kalisio.github.io/kaabah/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kaabah"),r("OutboundLink")],1),e._v(" based infrastructures. You should take a look at "),r("strong",[e._v("Kaabah")]),e._v(" if you need to setup an infrastructure.")])]),e._m(6),e._m(7),r("p",[e._v("In the following, we present 2 approaches according to whether the infrastructure is in normal mode or swarm mode.")]),e._m(8),e._m(9),e._m(10),e._m(11),e._m(12),e._m(13),r("ol",[r("li",[r("a",{attrs:{href:"http://postgis.net/",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("PostGis")]),r("OutboundLink")],1),e._v(": https://hub.docker.com/r/mdillon/postgis/")]),r("li",[r("a",{attrs:{href:"http://geoserver.org/",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("GeoServer")]),r("OutboundLink")],1),e._v(": "),r("strong",[e._v("Kargo")]),e._v(" provides its own Dockerfile to build GeoServer")]),r("li",[r("a",{attrs:{href:"https://mapproxy.org/",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("MapProxy")]),r("OutboundLink")],1),e._v(": https://hub.docker.com/r/yagajs/mapproxy/")]),r("li",[r("a",{attrs:{href:"http://tileserver.org/",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("TileServer-GL")]),r("OutboundLink")],1),e._v(": https://hub.docker.com/r/klokantech/tileserver-gl/")])]),e._m(14)])},s,!1,null,null,null);t.default=i.exports}}]);