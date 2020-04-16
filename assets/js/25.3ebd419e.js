(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{347:function(t,a,r){"use strict";r.r(a);var s=r(3),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"why"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#why"}},[t._v("#")]),t._v(" Why")]),t._v(" "),r("p",[t._v("职责链模式可以将请求的处理者组织成一条链，并让请求沿着链传递，由链上的处理者对请求进行相应的处理，客户端无需关心请求的处理细节及请求的传递，只需将请求发送到链上即可，实现请求发送者和请求处理者解耦。")]),t._v(" "),r("p",[r("strong",[t._v("职责链模式（Chain of Responsibility Pattern）")]),t._v("：避免请求发送者与接收者耦合在一起，让多个对象都有可能接收请求，将这些对象连接成一条链，并且沿着这条链传递请求，直到有对象处理它为止。")]),t._v(" "),r("p",[t._v("系统可以在不影响客户端的情况下动态地重新组织链和分配职责。职责链模式并不创建职责链，它的创建工作必须由系统的其他部分完成，一般在使用职责链的客户端中创建。")]),t._v(" "),r("h2",{attrs:{id:"what"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what"}},[t._v("#")]),t._v(" What")]),t._v(" "),r("h3",{attrs:{id:"uml"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#uml"}},[t._v("#")]),t._v(" UML")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://blogbucket-1252640517.cos.ap-beijing.myqcloud.com/img/responsibility.png",alt:"职责链模式"}})]),t._v(" "),r("p",[r("strong",[t._v("Handler（抽象处理者）")]),t._v("：定义了一个处理请求的接口，一个抽象处理者类型的对象作为对其下家的引用，通过该引用，处理者可以连成一条链。")]),t._v(" "),r("h3",{attrs:{id:"纯粹职责链"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#纯粹职责链"}},[t._v("#")]),t._v(" 纯粹职责链")]),t._v(" "),r("p",[t._v("要求一个具体处理者只能在两个行为中选择一个，要么承担全部责任，要么将责任推给下家，不允许承担部分责任后又将责任推给下家，而且要求一个请求必须被某一个处理者对象接收，不能出现某一个请求未被接收的情况。")]),t._v(" "),r("h3",{attrs:{id:"不纯职责链"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#不纯职责链"}},[t._v("#")]),t._v(" 不纯职责链")]),t._v(" "),r("p",[t._v("允许某个请求被一个具体处理者部分处理后再向下传递，或者一个具体处理者处理完某请求后其后继处理者可以继续处理该请求，而且一个请求可以最终不被任何处理者所接收。")]),t._v(" "),r("h3",{attrs:{id:"示例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),r("blockquote",[r("p",[t._v("Sunny软件公司的OA系统需要提供一个假条审批模块：如果员工请假天数小于3天，主任可以审批该假条；如果员工请假天数大于等于3天，小于10天，经理可以审批；如果员工请假天数大于等于10天，小于30天，总经理可以审批；如果超过30天，总经理也不能审批，提示相应的拒绝信息。试用职责链模式设计该假条审批模块。")])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/ShengM/designmodedemo/tree/master/%E8%81%8C%E8%B4%A3%E9%93%BE%E6%A8%A1%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[t._v("示例链接")]),r("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);