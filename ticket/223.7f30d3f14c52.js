(self.webpackChunkimage_host_website = self.webpackChunkimage_host_website || []).push([[223], {
    223: function(t, e, s) {
        "use strict";
        s.r(e);
        var a = s(144)
          , i = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return t.error ? s("div", {
                staticClass: "h-full"
            }, [s("p", {
                staticClass: "text-4xl text-red-500"
            }, [t._v(t._s(t.message))])]) : s("div", {
                staticClass: "py-12 h-screen"
            }, [t.state === t.STATES.ASK_FOR_KEY ? s("div", {
                staticClass: "h-full"
            }, [s("p", {
                staticClass: "input-holder"
            }, [s("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.key,
                    expression: "key"
                }],
                staticClass: "input",
                attrs: {
                    placeholder: "API Key"
                },
                domProps: {
                    value: t.key
                },
                on: {
                    keydown: function(e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.updateTicketList(e)
                    },
                    input: function(e) {
                        e.target.composing || (t.key = e.target.value)
                    }
                }
            })])]) : t.state === t.STATES.LIST_DISPLAY ? s("div", [0 === t.tickets.length ? s("div", [s("p", {
                staticClass: "input-holder"
            }, [s("input", {
                staticClass: "button",
                attrs: {
                    type: "button",
                    value: "Create Ticket"
                },
                on: {
                    click: t.createTicket
                }
            })])]) : s("div", t._l(t.tickets, (function(e) {
                return s("p", {
                    staticClass: "text-3xl text-center"
                }, [s("a", {
                    staticClass: "link",
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(s) {
                            return t.updateTicket(e)
                        }
                    }
                }, [t._v(t._s(e))])])
            }
            )), 0)]) : t.state === t.STATES.SHOW_TICKET ? s("div", {
                staticClass: "flex flex-col h-full"
            }, [s("div", {
                staticClass: "flex-grow"
            }, t._l(t.ticketData, (function(e) {
                return s("div", {
                    staticClass: "my-6 mx-24"
                }, [s("p", [s("span", {
                    staticClass: "important-text text-3xl"
                }, [t._v(t._s(e.username))]), t._v(": "), s("span", {
                    staticClass: "text-2xl"
                }, [t._v(t._s(e.message))])])])
            }
            )), 0), t._v(" "), s("p", {
                staticClass: "input-holder flex-grow-0"
            }, [s("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.chatMessage,
                    expression: "chatMessage"
                }],
                staticClass: "input",
                attrs: {
                    placeholder: "Message"
                },
                domProps: {
                    value: t.chatMessage
                },
                on: {
                    keydown: function(e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.handleMessage(e)
                    },
                    input: function(e) {
                        e.target.composing || (t.chatMessage = e.target.value)
                    }
                }
            })]), t._v(" "), s("p", {
                staticClass: "input-holder flex-grow-0"
            }, [s("input", {
                staticClass: "button",
                attrs: {
                    type: "button",
                    value: "Close Ticket"
                },
                on: {
                    click: t.closeTicket
                }
            })]), t._v(" "), s("p")]) : t._e()])
        };
        i._withStripped = !0;
        var n = {
            ASK_FOR_KEY: "askForKey",
            LIST_DISPLAY: "listDisplay",
            SHOW_TICKET: "showTicket"
        }
          , c = {
            name: "App",
            data: function() {
                return {
                    key: localStorage.apiKey || "",
                    tickets: [],
                    ticketData: [],
                    message: {},
                    error: !1,
                    chatMessage: "",
                    ticketID: null,
                    state: n.ASK_FOR_KEY,
                    STATES: n
                }
            },
            methods: {
                updateTicketList: function() {
                    var t = this;
                    this.state = n.LIST_DISPLAY,
                    localStorage.apiKey = this.key,
                    fetch("/api/ticket/list?" + new URLSearchParams({
                        key: this.key
                    })).then((function(t) {
                        return t.json()
                    }
                    )).then((function(e) {
                        e.success ? t.tickets = e.tickets : (t.error = !0,
                        t.message = e.error)
                    }
                    ))
                },
                updateTicket: function(t) {
                    var e = this;
                    this.state = n.SHOW_TICKET,
                    this.ticketID = t,
                    fetch("/api/ticket/history?" + new URLSearchParams({
                        key: t
                    })).then((function(t) {
                        return t.json()
                    }
                    )).then((function(t) {
                        e.ticketData = t.ticket
                    }
                    ))
                },
                handleMessage: function() {
                    var t = this
                      , e = this.chatMessage;
                    e && (this.chatMessage = "",
                    fetch("/api/ticket/message?" + new URLSearchParams({
                        key: this.key,
                        ticket: this.ticketID,
                        message: e
                    })).then((function(t) {
                        return t.json()
                    }
                    )).then((function(e) {
                        t.updateTicket(t.ticketID)
                    }
                    )))
                },
                createTicket: function() {
                    var t = this;
                    fetch("/api/ticket/create?" + new URLSearchParams({
                        key: this.key
                    })).then((function(t) {
                        return t.json()
                    }
                    )).then((function(e) {
                        e.success ? t.updateTicketList() : (t.error = !0,
                        t.message = e.error)
                    }
                    ))
                },
                closeTicket: function() {
                    var t = this;
                    fetch("/api/ticket/close?" + new URLSearchParams({
                        key: this.ticketID
                    })).then((function(t) {
                        return t.json()
                    }
                    )).then((function(e) {
                        t.updateTicketList()
                    }
                    ))
                }
            }
        }
          , r = (0,
        s(900).Z)(c, i, [], !1, null, null, null);
        r.options.__file = "src/ticket/App.vue";
        var o = r.exports;
        new a.Z({
            el: "#vue-root",
            render: function(t) {
                return t(o)
            }
        })
    }
}]);
