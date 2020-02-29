(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{233:function(e,s,a){"use strict";a.r(s);var t=a(19),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"packaging-images"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#packaging-images"}},[e._v("#")]),e._v(" Packaging images")]),e._v(" "),a("p",[e._v("It may be useful to package images of certain services (be.g. built services) to store a version or to deliver to a client who cannot access the registers.\nTo do this, you can use the "),a("RouterLink",{attrs:{to:"/reference/cli.html#image-save"}},[e._v("image save")]),e._v(" command:")],1),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$./kargo image save vigicrues\n$./kargo image save tileservergl\n$./kargo image save mongodb\n$./kargo image save redis\n$./kargo image save thredds\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$ls")]),e._v(" -al archives\ntotal "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1369520")]),e._v("\ndrwxrwxr-x  "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" ubuntu ubuntu      "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4096")]),e._v(" Feb "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("29")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v(":22 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\ndrwxrwxr-x "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("14")]),e._v(" ubuntu ubuntu      "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4096")]),e._v(" Feb "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("28")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("21")]),e._v(":25 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("\n-rw-rw-r--  "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" ubuntu ubuntu         "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" Feb "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("28")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("19")]),e._v(":09 .gitkeep\n-rw-rw-r--  "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" ubuntu ubuntu "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("130735307")]),e._v(" Feb "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("28")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("21")]),e._v(":36 kalisio.k-vigicrues_1.0.0.tar.gz\n-rw-rw-r--  "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" ubuntu ubuntu "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("468515606")]),e._v(" Feb "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("28")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("21")]),e._v(":28 klokantech.tileserver-gl_v2.4.0.tar.gz\n-rw-rw-r--  "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" ubuntu ubuntu "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("128983975")]),e._v(" Feb "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("28")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("21")]),e._v(":26 mongo_3.6.5.tar.gz\n-rw-rw-r--  "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" ubuntu ubuntu  "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("34773857")]),e._v(" Feb "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("28")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("21")]),e._v(":26 redis_5.tar.gz\n-rw-rw-r--  "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" ubuntu ubuntu "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("508610419")]),e._v(" Feb "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("28")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("21")]),e._v(":32 unidata.thredds-docker_4.6.11.tar.gz\n")])])]),a("p",[e._v("Or better, you can write your own script to packages the required services and use the command "),a("RouterLink",{attrs:{to:"/reference/cli.html#exec"}},[e._v("exec")]),e._v(" to launch the process. The following scripts iterates through the services and generate an archive. Once finished it copies the archives to an ObjectStorage using "),a("a",{attrs:{href:"https://rclone.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("rclone"),a("OutboundLink")],1),e._v(".")],1),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[e._v("#!/bin/bash")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# DELIERY is defined in your .env file")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# DELIVERY="vigicrues tileservergl mongodb redis thredds"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[e._v("SERVICE")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$DELIVERY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" packaging "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$SERVICE")]),e._v("\n  ./kargo image save "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$SERVICE")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("done")]),e._v("\nrclone copy archives s3:bucket/path --include *.gz\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);