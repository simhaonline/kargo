(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{156:function(t,e,a){"use strict";a.r(e);var s=a(0),o=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[t._v("#")]),t._v(" Getting started")]),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),a("p",[t._v("Even if "),a("strong",[t._v("Kargo")]),t._v(" let you deploy a complete stack of services using a single command, we assume you are enough familiar with the underlying technologies to be able to customize their configurations in order to address your needs.")])]),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[t._v("#")]),t._v(" Prerequisites")]),a("p",[t._v("Installing "),a("strong",[t._v("kargo")]),t._v(" is quite easy. However, you need to have a version of Docker Engine and Docker Compose installed supporting version 3 of compose file.")]),a("p",[t._v("If you already have these, congratulations ! If not, please follow the installation instructions:")]),a("ol",[a("li",[t._v("Docker Engine: https://docs.docker.com/engine/installation/")]),a("li",[t._v("Docker Compose: https://docs.docker.com/compose/install/.")])]),a("h2",{attrs:{id:"install-kargo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-kargo","aria-hidden":"true"}},[t._v("#")]),t._v(" Install kargo")]),a("ol",[a("li",[t._v("Clone the "),a("strong",[t._v("kargo")]),t._v(" repository in the directory of your choice")])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token variable"}},[t._v("$git")]),t._v(" clone https://github.com/kalisio/kargo.git\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("In swarm mode only, install SSHFS on each worker to share the "),a("code",[t._v("configs")]),t._v(" directory")])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" sshfs\n"),a("span",{attrs:{class:"token comment"}},[t._v("# Edit fuse conf to enable the allow_other option")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("nano")]),t._v(" /etc/fuse.conf and uncomment the line\n"),a("span",{attrs:{class:"token comment"}},[t._v("#user_allow_other")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# Mount the remote file system")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /home/ubuntu/kargo/configs\nsshfs ubuntu@"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("swam manager ip"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(":/home/ubuntu/kargo/configs /home/ubuntu/kargo/configs -o IdentityFile"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("/home/ubuntu/.ssh/ssh.pem -o allow_other\n")])])]),a("h2",{attrs:{id:"configure-kargo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-kargo","aria-hidden":"true"}},[t._v("#")]),t._v(" Configure kargo")]),a("ol",[a("li",[a("p",[t._v("Make a copy of our "),a("code",[t._v(".env.sample")]),t._v(" and rename it to "),a("code",[t._v(".env")])])]),a("li",[a("p",[t._v("Update the file with your preferences:")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("#\n# KARGO\n#\n# This is the .env file to set up your kargo environment\n\n# The path to your datasets\nDATA_PATH=/mnt/data\n\n# Postgis configuration\nPOSTGRES_USER=postgres\nPOSTGRES_PASSWORD=postgres\nPGDATA=/mnt/data/postgis\n\n# Docker network to be used\nNETWORK=kargo\n\n# Virtual hosts \n# Uncomment and update the lines below if you use an nginx-proxy based solution in front of kargo\n#GEOSERVER_VHOST=geoserver.your-domain.com\n#MAPPROXY_VHOST=mapproxy.your-domain.com\n#TILESERVERGL_VHOST=tileservergl.your-domain.com\n")])])]),a("h2",{attrs:{id:"deploy-kargo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-kargo","aria-hidden":"true"}},[t._v("#")]),t._v(" Deploy kargo")]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$./deploy-kargo.sh\n")])])]),a("h2",{attrs:{id:"stop-kargo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stop-kargo","aria-hidden":"true"}},[t._v("#")]),t._v(" Stop kargo")]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$./remove-kargo.sh\n")])])]),a("h2",{attrs:{id:"swarm-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#swarm-mode","aria-hidden":"true"}},[t._v("#")]),t._v(" Swarm mode")]),a("p",[t._v("To be able to deploy the services on a Swarm infrastructure, the services should be able to access the required data. Therefore, is it needed to:")]),a("ol",[a("li",[t._v("Mount the data required by the services on the different nodes.")]),a("li",[t._v("Define Swarm placement constraints on the nodes to force the deployment strategy")])]),a("h3",{attrs:{id:"mount-data-on-the-nodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mount-data-on-the-nodes","aria-hidden":"true"}},[t._v("#")]),t._v(" Mount data on the nodes")]),a("h3",{attrs:{id:"define-placement-constraints-on-the-nodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#define-placement-constraints-on-the-nodes","aria-hidden":"true"}},[t._v("#")]),t._v(" Define placement constraints on the nodes")]),a("p",[t._v("Define the placement constraints on the nodes you want to host")]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token variable"}},[t._v("$sudo")]),t._v(" docker node update --label-add postgis"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("true "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("node"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);e.default=o.exports}}]);