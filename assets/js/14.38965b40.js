(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{350:function(t,r,a){"use strict";a.r(r);var s=a(3),e=Object(s.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"why"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why"}},[t._v("#")]),t._v(" Why")]),t._v(" "),a("p",[t._v("由于某些原因，客户端不想或不能直接访问一个对象，此时可以通过一个称之为“代理”的第三者来间接访问，该方案对应的设计模式即代理模式。")]),t._v(" "),a("p",[a("strong",[t._v("代理模式（Proxy Pattern）")]),t._v("：给某一个对象提供一个代理或占位符，并由代理对象来控制对原对象的访问。")]),t._v(" "),a("h2",{attrs:{id:"what"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what"}},[t._v("#")]),t._v(" What")]),t._v(" "),a("h3",{attrs:{id:"uml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uml"}},[t._v("#")]),t._v(" UML")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://blogbucket-1252640517.cos.ap-beijing.myqcloud.com/img/proxy.png",alt:"代理模式"}})]),t._v(" "),a("h3",{attrs:{id:"角色说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#角色说明"}},[t._v("#")]),t._v(" 角色说明")]),t._v(" "),a("p",[a("strong",[t._v("Proxy（代理主题角色）")]),t._v("：包含对真实主题的引用，通常客户端在调用真实主题操作之前或之后还需要执行其他操作，而不仅仅单纯调用。")]),t._v(" "),a("h3",{attrs:{id:"远程代理（remote-proxy）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远程代理（remote-proxy）"}},[t._v("#")]),t._v(" 远程代理（Remote Proxy）")]),t._v(" "),a("p",[t._v("为一个位于不同地址空间的对象提供一个本地代理对象，这个不同地址空间可以在同一台主机中，也可以在另一台主机中。")]),t._v(" "),a("h3",{attrs:{id:"虚拟代理（virtual-proxy）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#虚拟代理（virtual-proxy）"}},[t._v("#")]),t._v(" 虚拟代理（Virtual Proxy）")]),t._v(" "),a("p",[t._v("如果需要创建一个资源消耗较大的对象，先创建一个消耗相对较小的对象来表示，真实对象在需要时才创建。")]),t._v(" "),a("h3",{attrs:{id:"保护代理（protect-proxy）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#保护代理（protect-proxy）"}},[t._v("#")]),t._v(" 保护代理（Protect Proxy）")]),t._v(" "),a("p",[t._v("控制对一个对象的访问，可以给不同的用户提供不同级别的使用权限。")]),t._v(" "),a("h3",{attrs:{id:"缓冲代理（cache-proxy）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓冲代理（cache-proxy）"}},[t._v("#")]),t._v(" 缓冲代理（Cache Proxy）")]),t._v(" "),a("p",[t._v("为某一个目标操作的结果提供临时存储空间，以便多个客户端可以共享这些结果。")]),t._v(" "),a("h3",{attrs:{id:"智能引用代理（smart-reference-proxy）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#智能引用代理（smart-reference-proxy）"}},[t._v("#")]),t._v(" 智能引用代理（Smart Reference Proxy）")]),t._v(" "),a("p",[t._v("当一个对象被引用时，提供一些额外操作，例如将对象被调用的次数记录下来。")]),t._v(" "),a("h2",{attrs:{id:"limits"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#limits"}},[t._v("#")]),t._v(" Limits")]),t._v(" "),a("ol",[a("li",[t._v("当客户端对象需要访问远程主机中的对象时可以使用远程代理；")]),t._v(" "),a("li",[t._v("当需要用一个消耗资源较少的对象来代表一个消耗资源较多的对象，从而降低系统开销、缩短运行时间时可以使用虚拟代理，例如一个对象需要很长时间完成加载；")]),t._v(" "),a("li",[t._v("当需要为某一个被频繁访问的操作结果提供一个临时存储空间，以供多个客户端共享访问这些结果时可以使用缓冲代理，系统无须每一次访问都重新执行操作；")]),t._v(" "),a("li",[t._v("当需要控制对一个对象的访问，为不同用户提供不同级别的访问权限时可以使用保护代理；")]),t._v(" "),a("li",[t._v("当需要为一个对象的访问提供一些额外的操作时可以使用智能引用代理。")])])])}),[],!1,null,null,null);r.default=e.exports}}]);