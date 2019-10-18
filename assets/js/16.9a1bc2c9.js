(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{181:function(t,s,e){"use strict";e.r(s);var a=e(0),r=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("The "),e("a",{attrs:{href:"https://github.com/kalisio/kargo-toolbox",target:"_blank",rel:"noopener noreferrer"}},[t._v("kargo-toolbox"),e("OutboundLink")],1),t._v(" is a docker image shipping a set of tools to help processing geospatial data. Precisely it comes with:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.gdal.org/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("GDAL"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.imagemagick.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ImageMagick"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/icetan/sqlitepipe",target:"_blank",rel:"noopener noreferrer"}},[t._v("sqlitepipe"),e("OutboundLink")],1)])]),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("Simply run the following command on a given worker node:")]),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),e("p",[t._v("If you need to use the AWS CLI, you may need to share your credentials:")]),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),e("p",[t._v("The "),e("strong",[t._v("kargo-toolbox")]),t._v(" project comes with the "),e("a",{attrs:{href:"https://github.com/icetan/sqlitepipe",target:"_blank",rel:"noopener noreferrer"}},[t._v("sqlitepipe"),e("OutboundLink")],1),t._v(" utility that can be used for this purpose. The following example shows how to use "),e("strong",[t._v("sqlitepipe")]),t._v(" and "),e("a",{attrs:{href:"https://www.imagemagick.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ImageMagick"),e("OutboundLink")],1),t._v(" to make white pixels transparent on all of the tiles stored within the MBTiles file.")]),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),t._m(15),t._v(" "),t._m(16),e("p",[t._v("In addition you will probably need to provide some parameters, such as "),e("code",[t._v("wcs_extent")]),t._v(" and "),e("code",[t._v("wcs_resolution")]),t._v(". You can get them by building a "),e("a",{attrs:{href:"https://gdal.org/drivers/raster/vrt.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("VRT"),e("OutboundLink")],1),t._v(":")]),t._v(" "),t._m(17)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"using-the-kargo-toolbox"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-the-kargo-toolbox","aria-hidden":"true"}},[this._v("#")]),this._v(" Using the Kargo toolbox")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"basic-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Basic usage")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[this._v("$docker")]),this._v(" run  -v /path/to/your/data:/data -t -i kalisio/kargo-toolbox:latest /bin/bash\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[this._v("$cd")]),this._v(" /data\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[this._v("$gdalinfo")]),this._v(" path/to/my/dataset\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("If you need to access another container you will need to run the GDAL container within the same network. For instance, the following command will allow you to link the GDAL container to an existing "),s("code",[this._v("Postgis")]),this._v(" container in the network "),s("code",[this._v("kargo")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[this._v("$docker")]),this._v(" run --network"),s("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v("kargo  -v /mnt/data:/data -t -i kalisio/kargo-toolbox:latest /bin/bash\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[this._v("$docker")]),this._v(" run  -v /path/to/your/data:/data /home/ubuntu/.aws:/root/.aws -t -i kalisio/kargo-toolbox:latest /bin/bash\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"use-cases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-cases","aria-hidden":"true"}},[this._v("#")]),this._v(" Use cases")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"how-to-post-process-an-mbtiles-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-post-process-an-mbtiles-file","aria-hidden":"true"}},[this._v("#")]),this._v(" How to post process an MBTiles file ?")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$sqlite3")]),t._v(" my-mbtiles.mbtiles\nsqlite"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("UPDATE tiles SET tile_data"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("pipe"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tile_data, "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/usr/bin/convert'")]),t._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-transparent'")]),t._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'white'")]),t._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'png:-'")]),t._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'png:-'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsqlite"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("VACUUM tiles"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsqlite"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(".quit\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("According the size of the MBTiles to process you may encounter some memory errors and have such an output: "),e("code",[t._v("Error: database or disk is full")]),t._v("\nYou should tell "),e("strong",[t._v("sqlite")]),t._v(" to use a free disk space to work with the temp files:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("sqlite"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" pragma temp_store "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsqlite"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" pragma temp_store_directory "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/directory/with/lots/of/space'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"how-to-create-a-tile-index-from-an-s3-mosaic"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-create-a-tile-index-from-an-s3-mosaic","aria-hidden":"true"}},[this._v("#")]),this._v(" How to create a tile index from an S3 mosaic ?")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("list the tiles in a file while prefixing the tile path with the driver "),s("code",[this._v("viss3")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$aws")]),t._v(" s3 "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" s3://"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("bucket"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("path"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/ "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{print "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$4")]),t._v("}'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'s/^/\\/vsis3\\/<bucket>\\/<path>\\//'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" tiles.txt\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"2"}},[s("li",[this._v("Create the tile index")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[this._v("$gdaltindex")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[this._v("<")]),this._v("mosaic"),s("span",{pre:!0,attrs:{class:"token operator"}},[this._v(">")]),this._v(".shp --optfile tiles.txt\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("If you want to serve the mosaic using "),s("strong",[this._v("MapServer")]),this._v(", it is recommended to apply the "),s("code",[this._v("shptree")]),this._v(" command in order\nto optimize the index:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[this._v("$shptree")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[this._v("<")]),this._v("mosaic"),s("span",{pre:!0,attrs:{class:"token operator"}},[this._v(">")]),this._v(".shp\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$gdalbuildvrt")]),t._v(" -input_file_list tiles.txt "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("mosaic"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(".vrt\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$gdalinfo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("mosaic"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(".vrt\n")])])])}],!1,null,null,null);r.options.__file="using-kargo-toolbox.md";s.default=r.exports}}]);