(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{176:function(e,t,_){"use strict";_.r(t);var a=_(0),v=Object(a.a)({},function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),_("table",[e._m(2),e._v(" "),_("tbody",[e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),_("tr",[e._m(6),e._v(" "),_("td",[e._v("The authentication password to access the services. It can be encoded in "),_("strong",[e._v("MD5")]),e._v(", "),_("strong",[e._v("SHA1")]),e._v(" and "),_("strong",[e._v("BCrypt")]),e._v(": you can use "),_("a",{attrs:{href:"http://www.htaccesstools.com/htpasswd-generator/",target:"_blank",rel:"noopener noreferrer"}},[e._v("htpasswd"),_("OutboundLink")],1),e._v(" to generate it.")])]),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15)])]),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),_("div",{staticClass:"warning custom-block"},[_("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),_("p",[e._v("The "),_("strong",[e._v("GeoServer")]),e._v(" service is preconfigured to use a local image that must be built using the "),_("router-link",{attrs:{to:"./cli.html#build-service"}},[e._v("build-service.sh")]),e._v(" command.")],1)]),e._v(" "),e._m(24),e._v(" "),e._m(25),e._v(" "),_("div",{staticClass:"warning custom-block"},[_("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),_("p",[e._v("The "),_("strong",[e._v("MapProxy")]),e._v(" service is preconfigured to use a local image that must be built using the "),_("router-link",{attrs:{to:"./cli.html#build-service"}},[e._v("build-service.sh")]),e._v(" command.")],1)]),e._v(" "),e._m(26),e._v(" "),e._m(27),e._v(" "),_("div",{staticClass:"warning custom-block"},[_("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),_("p",[e._v("The "),_("strong",[e._v("MapServer")]),e._v(" service is preconfigured to use a local image that must be built using the "),_("router-link",{attrs:{to:"./cli.html#build-service"}},[e._v("build-service.sh")]),e._v(" command.")],1)]),e._v(" "),e._m(28),e._v(" "),e._m(29),e._v(" "),e._m(30),e._v(" "),e._m(31),e._v(" "),e._m(32),e._v(" "),e._m(33),e._v(" "),e._m(34),e._v(" "),e._m(35),e._v(" "),e._m(36),e._v(" "),e._m(37),e._v(" "),e._m(38),e._v(" "),e._m(39),e._v(" "),e._m(40),e._v(" "),e._m(41),e._v(" "),e._m(42),e._v(" "),e._m(43),e._v(" "),e._m(44),e._v(" "),e._m(45),e._v(" "),e._m(46),e._v(" "),e._m(47)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"environment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#environment","aria-hidden":"true"}},[this._v("#")]),this._v(" Environment")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"kargo-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kargo-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Kargo configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",[this._v("Variable")]),this._v(" "),t("th",[this._v("Description")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("DOMAIN")])]),this._v(" "),t("td",[this._v("The domain where to access the services. It should be similar to "),t("code",[this._v("kalisio.xyz")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("SUBDOMAIN")])]),this._v(" "),t("td",[this._v("The subdomain where to access the service. It should be similar to "),t("code",[this._v("kargo.kalisio.xyz")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("AUTH_USER")])]),this._v(" "),t("td",[this._v("The authentication identity to access the services.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[t("code",[this._v("AUTH_PASSWORD")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("SECRET")])]),this._v(" "),t("td",[this._v("The secret key to generate JWT. It used by the applications "),t("strong",[this._v("KANO")]),this._v(" an "),t("strong",[this._v("WEACAST")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("DB_URL")])]),this._v(" "),t("td",[this._v("The common database URL. Default value is "),t("code",[this._v("DB_URL=mongodb://mongodb:27017/kargo")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("DOCKER_NETWORK")])]),this._v(" "),t("td",[this._v("The docker network. Default value is "),t("code",[this._v("kaabah")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("DOCKER_HOST_IP")])]),this._v(" "),t("td",[this._v("The private IP address of the Swarm manager.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("DOCKER_HOST_PORT")])]),this._v(" "),t("td",[this._v("The port to get connected to the Docker engine. Default value is "),t("code",[this._v("2376")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("DOCKER_CERT_PATH")])]),this._v(" "),t("td",[this._v("The path where to retrieve the certificates to get connected to the Docker engine. Default value is "),t("code",[this._v("/home/ubuntu/.docker")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("S3_ACCESS_KEY")])]),this._v(" "),t("td",[this._v("The key id to access AWS S3 buckets.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("S3_SECRET_ACCESS_KEY")])]),this._v(" "),t("td",[this._v("The secret key to access AWS S3 buckets")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("STACKS")])]),this._v(" "),t("td",[this._v("The list of stacks to be deployed.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("For each stack, there must be such an entry:\n| "),t("code",[this._v("<name of the stack>_STACK")]),this._v(" | The list of service to be deployed for each stack. |")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"services-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#services-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Services configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"k2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#k2","aria-hidden":"true"}},[this._v("#")]),this._v(" K2")])},function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("table",[_("thead",[_("tr",[_("th",[e._v("Variable")]),e._v(" "),_("th",[e._v("Description")])])]),e._v(" "),_("tbody",[_("tr",[_("td",[_("code",[e._v("K2_IMAGE")])]),e._v(" "),_("td",[e._v("The image to be used. Default value is "),_("code",[e._v("kalisio/kano")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("K2_TAG")])]),e._v(" "),_("td",[e._v("The version to be used. Default value is "),_("code",[e._v("latest")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("K2_DATA_PATH")])]),e._v(" "),_("td",[e._v("The path to the data. Default value is "),_("code",[e._v("/mnt/data0/k2_data")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("K2_REPLICAS")])]),e._v(" "),_("td",[e._v("The number of replicas. Default value is "),_("code",[e._v("1")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"kano"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kano","aria-hidden":"true"}},[this._v("#")]),this._v(" Kano")])},function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("table",[_("thead",[_("tr",[_("th",[e._v("Variable")]),e._v(" "),_("th",[e._v("Description")])])]),e._v(" "),_("tbody",[_("tr",[_("td",[_("code",[e._v("KANO_IMAGE")])]),e._v(" "),_("td",[e._v("The image to be used. Default value is "),_("code",[e._v("kalisio/kano")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("KANO_TAG")])]),e._v(" "),_("td",[e._v("The version to be used. Default value is "),_("code",[e._v("latest")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("KANO_APP_SECRET")])]),e._v(" "),_("td",[e._v("The app secret used to authenticate a client. The default value is "),_("code",[e._v("$SECRET")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("KANO_DB_URL")])]),e._v(" "),_("td",[e._v("The database URL where to write the data. Default value is "),_("code",[e._v("$DB_URL")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("KANO_LOG_LEVEL")])]),e._v(" "),_("td",[e._v("The log level of the application. Default value is "),_("code",[e._v("verbose")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("KANO_DEBUG")])]),e._v(" "),_("td",[e._v("Enable the debug mode. Default value is ``")])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("KANO_REPLICAS")])]),e._v(" "),_("td",[e._v("The number of replicas. Default value is "),_("code",[e._v("1")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"geoserver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#geoserver","aria-hidden":"true"}},[this._v("#")]),this._v(" GeoServer")])},function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("table",[_("thead",[_("tr",[_("th",[e._v("Variable")]),e._v(" "),_("th",[e._v("Description")])])]),e._v(" "),_("tbody",[_("tr",[_("td",[_("code",[e._v("GEOSERVER_IMAGE")])]),e._v(" "),_("td",[e._v("The image to be used. Default value is "),_("code",[e._v("localhost:5000/geoserver")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("GEOSERVER_TAG")])]),e._v(" "),_("td",[e._v("The version to be used. Default value is "),_("code",[e._v("2.12.1")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("GEOSERVER_PLUGINS")])]),e._v(" "),_("td",[e._v("The plugins to be included. Default value is "),_("code",[e._v('"css grib netcdf pyramid vectortiles gdal ogr-wfs printing importer control-flow"')])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("GEOSERVER_DATA_PATH")])]),e._v(" "),_("td",[e._v("The path to the data. Default value is "),_("code",[e._v("/mnt/data0/geoserver_data")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("GEOSERVER_REPLICAS")])]),e._v(" "),_("td",[e._v("The number of replicas. Default value is "),_("code",[e._v("1")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"mapproxy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mapproxy","aria-hidden":"true"}},[this._v("#")]),this._v(" MapProxy")])},function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("table",[_("thead",[_("tr",[_("th",[e._v("Variable")]),e._v(" "),_("th",[e._v("Description")])])]),e._v(" "),_("tbody",[_("tr",[_("td",[_("code",[e._v("MAPPROXY_IMAGE")])]),e._v(" "),_("td",[e._v("The image to be used. Default value is "),_("code",[e._v("localhost:5000/mapproxy")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("MAPPROXY_TAG")])]),e._v(" "),_("td",[e._v("The version to be used. Default value is "),_("code",[e._v("2.12.1")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("MAPPROXY_DATA_PATH")])]),e._v(" "),_("td",[e._v("The path to the data. Default value is "),_("code",[e._v("/mnt/data0/mapproxy_data")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("MAPPROXY_CACHE_PATH")])]),e._v(" "),_("td",[e._v("The path to the cache. Default value is "),_("code",[e._v("/mnt/data0/mapproxy_cache")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("MAPPROXY_REPLICAS")])]),e._v(" "),_("td",[e._v("The number of replicas. Default value is "),_("code",[e._v("1")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"mapserver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mapserver","aria-hidden":"true"}},[this._v("#")]),this._v(" MapServer")])},function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("table",[_("thead",[_("tr",[_("th",[e._v("Variable")]),e._v(" "),_("th",[e._v("Description")])])]),e._v(" "),_("tbody",[_("tr",[_("td",[_("code",[e._v("MAPSERVER_IMAGE")])]),e._v(" "),_("td",[e._v("The image to be used. Default value is "),_("code",[e._v("localhost:5000/mapserver")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("MAPSERVER_TAG")])]),e._v(" "),_("td",[e._v("The version to be used. Default value is "),_("code",[e._v("7.2")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("MAPSERVER_DATA_PATH")])]),e._v(" "),_("td",[e._v("The path to the data. Default value is "),_("code",[e._v("/mnt/data0/mapserver_data")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("MAPSERVER_REPLICAS")])]),e._v(" "),_("td",[e._v("The number of replicas. Default value is "),_("code",[e._v("1")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"mongodb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongodb","aria-hidden":"true"}},[this._v("#")]),this._v(" MongoDB")])},function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("table",[_("thead",[_("tr",[_("th",[e._v("Variable")]),e._v(" "),_("th",[e._v("Description")])])]),e._v(" "),_("tbody",[_("tr",[_("td",[_("code",[e._v("MONGO_IMAGE")])]),e._v(" "),_("td",[e._v("The image to be used. Default value is "),_("code",[e._v("mongo")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("MONGO_TAG")])]),e._v(" "),_("td",[e._v("The version to be used. Default value is "),_("code",[e._v("3.6.5")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"openaq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#openaq","aria-hidden":"true"}},[this._v("#")]),this._v(" OpenAQ")])},function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("table",[_("thead",[_("tr",[_("th",[e._v("Variable")]),e._v(" "),_("th",[e._v("Description")])])]),e._v(" "),_("tbody",[_("tr",[_("td",[_("code",[e._v("OPENAQ_IMAGE")])]),e._v(" "),_("td",[e._v("The image to be used. Default value is "),_("code",[e._v("kalisio/k-openaq")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("OPENAQ_TAG")])]),e._v(" "),_("td",[e._v("The version to be used. Default value is "),_("code",[e._v("latest")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("OPENAQ_DB_URL")])]),e._v(" "),_("td",[e._v("The database URL where to write the data. Default value is "),_("code",[e._v("$DB_URL")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"postgis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#postgis","aria-hidden":"true"}},[this._v("#")]),this._v(" PostGis")])},function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("table",[_("thead",[_("tr",[_("th",[e._v("Variable")]),e._v(" "),_("th",[e._v("Description")])])]),e._v(" "),_("tbody",[_("tr",[_("td",[_("code",[e._v("POSTGIS_IMAGE")])]),e._v(" "),_("td",[e._v("The image to be used. Default value is "),_("code",[e._v("mdillon/postgis")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("POSTGIS_TAG")])]),e._v(" "),_("td",[e._v("The version to be used. Default value is "),_("code",[e._v("9.6-alpine")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("POSTGRES_USER")])]),e._v(" "),_("td",[e._v("The POSTGRES user. Default value is "),_("code",[e._v("postgres")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("POSTGRES_PASSWORD")])]),e._v(" "),_("td",[e._v("The POSTGRES user's password. Default value is "),_("code",[e._v("postgres")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"seeder"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#seeder","aria-hidden":"true"}},[this._v("#")]),this._v(" Seeder")])},function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("table",[_("thead",[_("tr",[_("th",[e._v("Variable")]),e._v(" "),_("th",[e._v("Description")])])]),e._v(" "),_("tbody",[_("tr",[_("td",[_("code",[e._v("SEEDER_IMAGE")])]),e._v(" "),_("td",[e._v("The image to be used. Default value is "),_("code",[e._v("kalisio/k-seeder")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("SEEDER_TAG")])]),e._v(" "),_("td",[e._v("The version to be used. Default value is "),_("code",[e._v("latest")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"teleray"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#teleray","aria-hidden":"true"}},[this._v("#")]),this._v(" Teleray")])},function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("table",[_("thead",[_("tr",[_("th",[e._v("Variable")]),e._v(" "),_("th",[e._v("Description")])])]),e._v(" "),_("tbody",[_("tr",[_("td",[_("code",[e._v("TELERAY_IMAGE")])]),e._v(" "),_("td",[e._v("The image to be used. Default value is "),_("code",[e._v("kalisio/k-teleray")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("TELERAY_TAG")])]),e._v(" "),_("td",[e._v("The version to be used. Default value is "),_("code",[e._v("0.1.0")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("TELERAY_S3_BUCKET")])]),e._v(" "),_("td",[e._v("The S3 bucket where to store the data. Default value is "),_("code",[e._v("kargo")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"thredds"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#thredds","aria-hidden":"true"}},[this._v("#")]),this._v(" Thredds")])},function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("table",[_("thead",[_("tr",[_("th",[e._v("Variable")]),e._v(" "),_("th",[e._v("Description")])])]),e._v(" "),_("tbody",[_("tr",[_("td",[_("code",[e._v("THREDDS_IMAGE")])]),e._v(" "),_("td",[e._v("The image to be used. Default value is "),_("code",[e._v("unidata/thredds-docker")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("THREDDS_TAG")])]),e._v(" "),_("td",[e._v("The version to be used. Default value is "),_("code",[e._v("4.6.11")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("THREDDS_DATA_PATH")])]),e._v(" "),_("td",[e._v("The path to the data. Default value is "),_("code",[e._v("/mnt/data0/thredds_data")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("THREDDS_CACHE_PATH")])]),e._v(" "),_("td",[e._v("The path to the mount volume where to cache the data. Default value is "),_("code",[e._v("/mnt/data0/thredds_cache")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("THREDDS_REPLICAS")])]),e._v(" "),_("td",[e._v("The number of replicas. Default value is "),_("code",[e._v("1")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("THREDDS_XMX_SIZE")])]),e._v(" "),_("td",[e._v("JVM Max Heap Size (xmx). Default value is "),_("code",[e._v("4G")]),e._v(".")])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("THREDDS_XMS_SIZE")])]),e._v(" "),_("td",[e._v("JVM Min Heap Size (xms). Default value is "),_("code",[e._v("4G")]),e._v(".")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"tileserver-gl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tileserver-gl","aria-hidden":"true"}},[this._v("#")]),this._v(" TileServer GL")])},function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("table",[_("thead",[_("tr",[_("th",[e._v("Variable")]),e._v(" "),_("th",[e._v("Description")])])]),e._v(" "),_("tbody",[_("tr",[_("td",[_("code",[e._v("TILESERVERGL_IMAGE")])]),e._v(" "),_("td",[e._v("The image to be used. Default value is "),_("code",[e._v("klokantech/tileserver-gl")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("TILESERVERGL_TAG")])]),e._v(" "),_("td",[e._v("The version to be used. Default value is "),_("code",[e._v("v2.3.1")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("TILESERVERGL_DATA_PATH")])]),e._v(" "),_("td",[e._v("The path to the data. Default value is "),_("code",[e._v("/mnt/data0/tileservergl_data")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("TILESERVERGL_REPLICAS")])]),e._v(" "),_("td",[e._v("The number of replicas. Default value is "),_("code",[e._v("1")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"vigicrues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vigicrues","aria-hidden":"true"}},[this._v("#")]),this._v(" Vigicrues")])},function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("table",[_("thead",[_("tr",[_("th",[e._v("Variable")]),e._v(" "),_("th",[e._v("Description")])])]),e._v(" "),_("tbody",[_("tr",[_("td",[_("code",[e._v("VIGICRUES_IMAGE")])]),e._v(" "),_("td",[e._v("The image to be used. Default value is "),_("code",[e._v("kalisio/k-vigicrues")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("VIGICRUES_STATIONS_TAG")])]),e._v(" "),_("td",[e._v("The version of the image to be used for scraping the stations. Default value is "),_("code",[e._v("0.1.0")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("VIGICRUES_SECTIONS_TAG")])]),e._v(" "),_("td",[e._v("The version of the image to be used for scraping the sections. Default value is "),_("code",[e._v("0.1.0")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("VIGICRUES_OBSERVATIONS_TAG")])]),e._v(" "),_("td",[e._v("The version of the image to be used for scraping the observations. Default value is "),_("code",[e._v("0.1.0")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("VIGICRUES_DATA_PATH")])]),e._v(" "),_("td",[e._v("The path to the data. Default value is "),_("code",[e._v("/mnt/data0/vigicrues_data")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("VIGICRUES_DB_URL")])]),e._v(" "),_("td",[e._v("The database URL where to write the data. Default value is "),_("code",[e._v("$DB_URL")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"weacast"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#weacast","aria-hidden":"true"}},[this._v("#")]),this._v(" Weacast")])},function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("table",[_("thead",[_("tr",[_("th",[e._v("Variable")]),e._v(" "),_("th",[e._v("Description")])])]),e._v(" "),_("tbody",[_("tr",[_("td",[_("code",[e._v("WEACAST_IMAGE")])]),e._v(" "),_("td",[e._v("The image to be used. Default value is "),_("code",[e._v("weacast/weacast-dev")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("WEACAST_TAG")])]),e._v(" "),_("td",[e._v("The version to be used. Default value is "),_("code",[e._v("latest")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("WEACAST_APP_SECRET")])]),e._v(" "),_("td",[e._v("The app secret used to authenticate a client. The default value is "),_("code",[e._v("$SECRET")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("WEACAST_DB_URL")])]),e._v(" "),_("td",[e._v("The database URL where to write the data. Default value is "),_("code",[e._v("$DB_URL")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("WEACAST_LOG_LEVEL")])]),e._v(" "),_("td",[e._v("The log level of the application. Default value is "),_("code",[e._v("verbose")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("WEACAST_DEBUG")])]),e._v(" "),_("td",[e._v("Enable the debug mode. Default value is ``")])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("WEACAST_REPLICAS")])]),e._v(" "),_("td",[e._v("The number of replicas. Default value is "),_("code",[e._v("1")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"weacast-loaders"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#weacast-loaders","aria-hidden":"true"}},[this._v("#")]),this._v(" Weacast-loaders")])},function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("table",[_("thead",[_("tr",[_("th",[e._v("Variable")]),e._v(" "),_("th",[e._v("Description")])])]),e._v(" "),_("tbody",[_("tr",[_("td",[_("code",[e._v("WEACAST_MODELS")])]),e._v(" "),_("td",[e._v("The list of models to be downloaded. Default value is "),_("code",[e._v('"arpege-world arpege-europe arome-france gfs-world"')])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("WEACAST_LOADERS_TAG")])]),e._v(" "),_("td",[e._v("A default tag value.  Default value is "),_("code",[e._v("latest")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("WEACAST_LOADERS_DB_URL")])]),e._v(" "),_("td",[e._v("The database URL where to write the data. Default value is "),_("code",[e._v("$DB_URL")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("ARPEGE_WOLRD_LOADER_IMAGE")])]),e._v(" "),_("td",[e._v("The image to be used to scrape Arpege World data. Default value is "),_("code",[e._v("localhost:5000/arpege-world-loader")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("ARPEGE_WORLD_LOADER_TAG")])]),e._v(" "),_("td",[e._v("The tag of the image to be used to scrape Arpege World data. Default value is "),_("code",[e._v("$WEACAST_LOADERS_TAG")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("ARPEGE_EUROPE_LOADER_IMAGE")])]),e._v(" "),_("td",[e._v("The image to be used to scrape Arpege Europe data. Default value is "),_("code",[e._v("localhost:5000/arpege-europe-loader")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("ARPEGE_EUROPE_LOADER_TAG")])]),e._v(" "),_("td",[e._v("The tag of the image to be used to scrape Arpege Europe data. Default value is "),_("code",[e._v("$WEACAST_LOADERS_TAG")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("AROME_FRANCE_LOADER_IMAGE")])]),e._v(" "),_("td",[e._v("The image to be used to scrape Arome France data. Default value is "),_("code",[e._v("localhost:5000/arome-france-loader")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("AROME_FRANCE_LOADER_TAG")])]),e._v(" "),_("td",[e._v("The tag of the image to be used to scrape Arome France World data. Default value is "),_("code",[e._v("$WEACAST_LOADERS_TAG")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("GFS_WORLD_LOADER_IMAGE")])]),e._v(" "),_("td",[e._v("The image to be used to scrape GFS World data. Default value is "),_("code",[e._v("localhost:5000/gfs-world-loader")])])]),e._v(" "),_("tr",[_("td",[_("code",[e._v("GFS_WORLD_LOADER_TAG")])]),e._v(" "),_("td",[e._v("The tag of the image to be used to scrape Arpege World data. Default value is "),_("code",[e._v("$WEACAST_LOADERS_TAG")])])])])])}],!1,null,null,null);v.options.__file="environment.md";t.default=v.exports}}]);