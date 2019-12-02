(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{171:function(t,e,s){t.exports=s.p+"assets/img/kargo-gateway.293e1ae6.svg"},175:function(t,e,s){"use strict";s.r(e);var a=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"advanced-usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#advanced-usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Advanced usage")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"using-the-api-gateway"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-the-api-gateway","aria-hidden":"true"}},[this._v("#")]),this._v(" Using the API Gateway")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"defining-the-gateway"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#defining-the-gateway","aria-hidden":"true"}},[this._v("#")]),this._v(" Defining the gateway")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("create a "),e("code",[this._v("gateway.config.yml")]),this._v(" file in the "),e("code",[this._v("configs\\express-gateway")]),this._v(" directory of your workspace")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(171),alt:"kargo-gateway"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("http:\n  port: 8080\nadmin:\n  port: 9876\n  host: localhost\napiEndpoints:\n  admin:\n    host: 'express-gateway'\n  wms:\n    host: '*'\n    paths: '/wms*'\n    scopes: [\"wms\"]\n  wmts:\n    host: '*'\n    paths: '/wmts/*'\n    scopes: [\"wmts\"] \n  k2:\n    host: '*'\n    paths: '/k2/*'\n    scopes: [\"k2\"]\n\nserviceEndpoints:\n  admin: \n    url: 'http://localhost:9876'\n  wms:\n    url: 'http://mapproxy:8080'\n  wmts:\n    url: 'http://mapproxy:8080/wmts'      \n  k2:\n    url: 'http://k2:8080' \n\npolicies:\n  - cors\n  - proxy\n\npipelines:\n  admin:\n    apiEndpoints:\n      - admin\n    policies:\n      - proxy:\n          - action:\n              serviceEndpoint: admin\n              changeOrigin: true\n              stripPath: true\n  wms:\n    apiEndpoints:\n      - wms\n    policies:            \n      - cors:\n      - proxy:\n          - action:\n              serviceEndpoint: wms \n              changeOrigin: true\n              stripPath: true       \n  wmts:\n    apiEndpoints:\n      - wmts\n    policies:           \n      - cors:\n      - proxy:\n          - action:\n              serviceEndpoint: wmts \n              changeOrigin: true\n              stripPath: true                            \n\n  k2:\n    apiEndpoints:\n      - k2\n    policies:              \n      - cors:\n      - proxy:\n          - action:\n              serviceEndpoint: k2\n              changeOrigin: true\n              stripPath: true\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"defining-the-consumers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#defining-the-consumers","aria-hidden":"true"}},[this._v("#")]),this._v(" Defining the consumers")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("create a "),e("code",[this._v("consumers.config.json")]),this._v(" file in the "),e("code",[this._v("configs\\express-gateway")]),this._v(" directory of your workspace")]),this._v(" "),e("li",[this._v("edit the file and define your consumers using the following formalism:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scopes"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wms"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wmts"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"k2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ..... "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"users"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"customer1"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"app1"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jwt"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"keyId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ID"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"keySecret"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SECRET"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scopes"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wms"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wmts"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  // give avec acces to the endpoint that need the one of these scopes\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"app2"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"auth-key"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"keyId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ID"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"keySecret"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SECRET"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scopes"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wmts"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"k2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  // give avec acces to the endpoint that need the one of these scopes\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"customer2"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      ...\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"running-the-gateway"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#running-the-gateway","aria-hidden":"true"}},[this._v("#")]),this._v(" Running the gateway")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("define a stack with the "),e("code",[this._v("express-gateway")]),this._v(" service")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# do not forget to declare the stack in STACKS")]),this._v("\nAPI_STACK"),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[this._v('"express-gateway"')]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"2"}},[e("li",[this._v("configure "),e("strong",[this._v("Kargo")]),this._v(":")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$./kargo configure kargo\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"3"}},[e("li",[this._v("build the "),e("strong",[this._v("express gateway")]),this._v(" docker image:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$./kargo build express-gateway\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"4"}},[e("li",[this._v("deploy the stack")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$./kargo deploy api\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"5"}},[e("li",[this._v("populate the consumers once the service is started:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$docker")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),t._v(" -ti "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("express-gateway-container-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" sh\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" /var/lib/eg\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" node populate.js\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("exit")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"extending-the-services"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#extending-the-services","aria-hidden":"true"}},[this._v("#")]),this._v(" Extending the services")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Kargo")]),this._v(" allows you to extend the default services settings for a given cluster. You can either overwrite the default settings files of a service or extend the way the service will be deployed (specify the healthcheck, add some constraints...)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("For this you must create a directory structure in your workspace similar to that of "),e("strong",[this._v("Kargo")]),this._v(" where you will put your stuff.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("For instance, if we have 2 services, "),e("code",[this._v("service-1")]),this._v(" and "),e("code",[this._v("service-2")]),this._v(", and we want to:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("overwrite the configuration of "),e("code",[this._v("service-1")]),this._v(" as well as extend the its deployment method.")]),this._v(" "),e("li",[this._v("overwrite the configuration of "),e("code",[this._v("service-2")]),this._v(" only.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("workspace"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_ deploy\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("service-1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("label"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(".yml   the yml extension you want to apply when deployin the service-1\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_ configs\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("service-1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("         the settings files of the service-1 you need to overwrite \n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("service-2"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("         the settings files of the service-2 you need to overwrite \n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("When extending the deployment method of a service, you must tell "),s("strong",[t._v("Kargo")]),t._v(" which file to add when deploying the service.\nFor each service, you need to declare a variable in the "),s("code",[t._v(".env")]),t._v(" file which tell the name of the "),s("code",[t._v("yml")]),t._v(" file to take into account. In the previous example, the entry in the "),s("code",[t._v(".env")]),t._v(" file should look like:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("SERVICE-1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("_EXTENSION"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("service-1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("label"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])}],n=s(0),r=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("As a reminder, an API gateway allows you to map endpoints to a set of services or applications using url rules. Moreover it is possible to protect those endpoints using various authorization strategies ("),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Key_authentication",target:"_blank",rel:"noopener noreferrer"}},[t._v("Key authentication"),s("OutboundLink")],1),t._v(", "),s("a",{attrs:{href:"https://jwt.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON Web Tokens"),s("OutboundLink")],1),t._v(", "),s("a",{attrs:{href:"https://oauth.net/2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("OAuth"),s("OutboundLink")],1),t._v("...) and defining quotas and rate limiting. To enable such a features "),s("strong",[t._v("Kargo")]),t._v(" relies on "),s("a",{attrs:{href:"https://www.express-gateway.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("express gateway"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("We recommend that you read the "),s("a",{attrs:{href:"https://www.express-gateway.io/docs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("documentation"),s("OutboundLink")],1),t._v(" before implementing your gateway.")])]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[s("strong",[t._v("express gateway")]),t._v(" relies on "),s("a",{attrs:{href:"https://redis.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redis"),s("OutboundLink")],1),t._v(" to store the consumers data. In order to check your configuration, "),s("a",{attrs:{href:"https://joeferner.github.io/redis-commander/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redis Commander"),s("OutboundLink")],1),t._v(" is a convenient solution to explore the "),s("strong",[t._v("Redis")]),t._v(" data store. These 2 applications are easily deployable with "),s("strong",[t._v("Kargo")])])]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("To define you gateway, you simply need to:")]),t._v(" "),s("ol",[t._m(3),t._v(" "),s("li",[t._v("edit the file and define your gateway. Check the documentation "),s("a",{attrs:{href:"https://www.express-gateway.io/docs/configuration/gateway.config.yml/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("Here is an example of gateway implementing the mapping illustrated by the following schema:")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),s("p",[t._v("Once the gateway is implemented and started, it is necessary to define the consumers.")]),t._v(" "),t._m(7),t._v(" "),t._m(8),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Refer to the "),s("a",{attrs:{href:"https://www.express-gateway.io/docs/consumer-management/",target:"_blank",rel:"noopener noreferrer"}},[t._v("consumer-management"),s("OutboundLink")],1),t._v(" section to learn mode about "),s("code",[t._v("keyId")]),t._v(" and "),s("code",[t._v("keySecret")]),t._v(".")])]),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("You must simply execute the following procedure:")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://jwt.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JWT.io"),s("OutboundLink")],1),t._v(" provides a simple interface to generate the tokens to consume the API.")])]),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),s("p",[t._v("Then, the directory structure will look like:")]),t._v(" "),t._m(25),t._m(26),t._v(" "),t._m(27),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Before deploying, do not forget to make the "),s("strong",[t._v("merged configuration")]),t._v(" using the "),s("router-link",{attrs:{to:"./../reference/cli.html#configure"}},[t._v("configure")]),t._v(" command.")],1)])])},a,!1,null,null,null);r.options.__file="advanced-usage.md";e.default=r.exports}}]);