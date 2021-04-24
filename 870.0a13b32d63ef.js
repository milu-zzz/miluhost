(self.webpackChunkimage_host_website = self.webpackChunkimage_host_website || []).push([[870], {
    601: function(t) {
        function e(t, e, s, a, n, i, r) {
            try {
                var o = t[i](r)
                  , p = o.value
            } catch (t) {
                return void s(t)
            }
            o.done ? e(p) : Promise.resolve(p).then(a, n)
        }
        t.exports = {
            name: "Dashboard",
            data: function() {
                return {
                    apiKey: localStorage.apiKey || "",
                    apiResponse: null
                }
            },
            methods: {
                apiKeyEnter: function() {
                    var t, s = this;
                    return (t = regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    fetch("/api/user-info?key=" + encodeURIComponent(s.apiKey)).then((function(t) {
                                        return t.json()
                                    }
                                    ));
                                case 2:
                                    s.apiResponse = t.sent;
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )),
                    function() {
                        var s = this
                          , a = arguments;
                        return new Promise((function(n, i) {
                            var r = t.apply(s, a);
                            function o(t) {
                                e(r, n, i, o, p, "next", t)
                            }
                            function p(t) {
                                e(r, n, i, o, p, "throw", t)
                            }
                            o(void 0)
                        }
                        ))
                    }
                    )()
                }
            }
        }
    },
    870: function(t, e, s) {
        var a = s(144).Z
          , n = s(668).Z;
        window.onload = function() {
            new a({
                el: "#vue-root",
                render: function(t) {
                    return t(n)
                }
            })
        }
    },
    668: function(t, e, s) {
        "use strict";
        s.d(e, {
            Z: function() {
                return o
            }
        });
        var a = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "flex flex-col items-center m-dyn"
            }, [t._m(0), t._v(" "), t.apiResponse ? s("div", [t.apiResponse.error ? s("div", [s("p", {
                staticClass: "text-red-600 text-5xl"
            }, [t._v(t._s(t.apiResponse.error))])]) : s("div", [s("p", {
                staticClass: "text-2xl"
            }, [s("span", {
                staticClass: "important-text"
            }, [t._v("UID")]), t._v(": " + t._s(t.apiResponse.uid))]), t._v(" "), s("p", {
                staticClass: "text-2xl"
            }, [s("span", {
                staticClass: "important-text"
            }, [t._v("Username")]), t._v(": " + t._s(t.apiResponse.username))]), t._v(" "), s("p", {
                staticClass: "text-2xl"
            }, [s("span", {
                staticClass: "important-text"
            }, [t._v("Total Uploads")]), t._v(": " + t._s(t.apiResponse.uploads))]), t._v(" "), s("p", {
                staticClass: "text-2xl"
            }, [s("span", {
                staticClass: "important-text"
            }, [t._v("Invited By")]), t._v(": " + t._s(t.apiResponse.inviter))]), t._v(" "), s("p", {
                staticClass: "text-2xl"
            }, [s("span", {
                staticClass: "important-text"
            }, [t._v("API Key")]), t._v(": " + t._s(t.apiKey))]), t._v(" "), t.apiResponse.invite ? s("p", {
                staticClass: "text-2xl select-text"
            }, [s("span", {
                staticClass: "important-text"
            }, [t._v("Invites Available")]), t._v(": " + t._s(t.apiResponse.invite))]) : t._e(), t._v(" "), t._m(1)])]) : t._e(), t._v(" "), s("div", [s("p", {
                staticClass: "my-4 input-holder"
            }, [s("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.apiKey,
                    expression: "apiKey"
                }],
                staticClass: "input w-full",
                attrs: {
                    type: "text",
                    placeholder: "API Key"
                },
                domProps: {
                    value: t.apiKey
                },
                on: {
                    keydown: function(e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.apiKeyEnter(e)
                    },
                    input: function(e) {
                        e.target.composing || (t.apiKey = e.target.value)
                    }
                }
            })])])])
        };
        a._withStripped = !0;
        var n = s(601)
          , i = s.n(n)()
          , r = (0,
        s(900).Z)(i, a, [function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("p", {
                staticClass: "text-3xl mb-16"
            }, [t._v("Go back to "), s("a", {
                staticClass: "link",
                attrs: {
                    href: "/",
                    title: "Go back home"
                }
            }, [t._v("the home page")]), t._v(".")])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("p", {
                staticClass: "text-2xl"
            }, [s("a", {
                staticClass: "link",
                attrs: {
                    href: "/ticket"
                }
            }, [t._v("Click to create a ticket")])])
        }
        ], !1, null, "513c75f0", null);
        r.options.__file = "src/dashboard/Dashboard.vue";
        var o = r.exports
    }
}]);
