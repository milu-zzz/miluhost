!function() {
    var e, t, n, r, o = {
        653: function(e, t, n) {
            "use strict";
            function r(e, t) {
                var n;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = function(e, t) {
                        if (e) {
                            if ("string" == typeof e)
                                return o(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name),
                            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
                        }
                    }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0
                          , i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, u = !0, c = !1;
                return {
                    s: function() {
                        n = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = n.next();
                        return u = e.done,
                        e
                    },
                    e: function(e) {
                        c = !0,
                        a = e
                    },
                    f: function() {
                        try {
                            u || null == n.return || n.return()
                        } finally {
                            if (c)
                                throw a
                        }
                    }
                }
            }
            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            function i(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a)
                      , c = u.value
                } catch (e) {
                    return void n(e)
                }
                u.done ? t(c) : Promise.resolve(c).then(r, o)
            }
            function a(e) {
                return function() {
                    var t = this
                      , n = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(t, n);
                        function u(e) {
                            i(a, r, o, u, c, "next", e)
                        }
                        function c(e) {
                            i(a, r, o, u, c, "throw", e)
                        }
                        u(void 0)
                    }
                    ))
                }
            }
            n(666),
            n(54),
            n(388);
            var u = location.pathname.endsWith("/") ? location.pathname.slice(0, -1) : location.pathname;
            if ("/domains" === u) {
                var c = fetch("/api/domains").then((function(e) {
                    return e.json()
                }
                ));
                window.onload = a(regeneratorRuntime.mark((function e() {
                    var t, n, o, i, a, u;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = document.getElementById("domain-container"),
                                e.t0 = r,
                                e.next = 4,
                                c;
                            case 4:
                                e.t1 = e.sent,
                                n = (0,
                                e.t0)(e.t1);
                                try {
                                    for (n.s(); !(o = n.n()).done; )
                                        i = o.value,
                                        (a = document.createElement("a")).href = "https://".concat(i, "/"),
                                        a.innerText = i,
                                        a.className = "link",
                                        a.title = "DIH domain ".concat(i),
                                        (u = document.createElement("p")).appendChild(a),
                                        u.className = "text-3xl break-words",
                                        t.appendChild(u)
                                } catch (e) {
                                    n.e(e)
                                } finally {
                                    n.f()
                                }
                            case 7:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))
            }
            if ("" === u && fetch("/api/files").then((function(e) {
                return e.json()
            }
            )).then((function(e) {
                return document.getElementById("Files").innerText = e.count
            }
            )),
            "/login" === u && (document.getElementById("key-input") || document.addEventListener("DOMContentLoaded", (function() {
                localStorage.apiKey && (document.getElementById("key-input").value = localStorage.apiKey)
            }
            )),
            document.getElementById("key-input").addEventListener("keydown", (function(e) {
                "Enter" !== (e.key || e.code) && 13 !== (e.keyCode || e.which) || (location.href = "/login/" + e.currentTarget.value.split("/").join(""))
            }
            ))),
            "/subdomain/ui" === u && (document.getElementById("subdomain-key-input") || document.addEventListener("DOMContentLoaded", (function() {
                localStorage.apiKey && (document.getElementById("subdomain-key-input").value = localStorage.apiKey)
            }
            )),
            document.getElementById("subdomain-add-button").addEventListener("click", (function() {
                var e = document.getElementById("subdomain-key-input").value;
                localStorage.key = e,
                location.href = "/subdomain/add?" + new URLSearchParams({
                    subdomain: document.getElementById("subdomain-input").value,
                    key: e
                })
            }
            ))),
            "/subdomain/end" === u) {
                var l = new URLSearchParams(location.search)
                  , d = document.getElementById("text")
                  , s = "true" === l.get("success");
                d.classList.add(s ? "success" : "failure"),
                d.innerText = s ? "Subdomain addition successful. The changes might take a while to update." : l.get("error")
            }
            if ("/config" === u && Promise.all([n.e(125), n.e(280), n.e(823)]).then(n.bind(n, 823)),
            "" === u) {
                var f = "Lucid Image Hosting"
                  , m = 0
                  , p = !0;
                setInterval((function() {
                    (m += p ? 1 : -1) === f.length - 1 ? p = !1 : 0 === m && (p = !0),
                    document.querySelector("title").innerText = f.slice(0, m + 1)
                }
                ), 500)
            }
            if ("/domains" === u) {
                var h = "Domains"
                  , y = 0
                  , g = !0;
                setInterval((function() {
                    (y += g ? 1 : -1) === h.length - 1 ? g = !1 : 0 === y && (g = !0),
                    document.querySelector("title").innerText = h.slice(0, y + 1)
                }
                ), 500)
            }
            if ("/config" === u) {
                var v = "Config Creator"
                  , b = 0
                  , w = !0;
                setInterval((function() {
                    (b += w ? 1 : -1) === v.length - 1 ? w = !1 : 0 === b && (w = !0),
                    document.querySelector("title").innerText = v.slice(0, b + 1)
                }
                ), 500)
            }
            "/dashboard" === u && Promise.all([n.e(125), n.e(870)]).then(n.t.bind(n, 870, 23)),
            "/redeem" === u && document.getElementById("redeem-button").addEventListener("click", (function() {
                fetch("/api/redeem-invite?" + new URLSearchParams({
                    invite: document.getElementById("invite-code-input").value,
                    username: document.getElementById("username-input").value
                })).then((function(e) {
                    return e.json()
                }
                )).then((function(e) {
                    var t = document.getElementById("message");
                    t.style.display = "block",
                    e.success ? (t.style.color = "#0F0",
                    t.innerText = "API Key: ".concat(e.key)) : (t.style.color = "#F00",
                    t.innerText = "Error: ".concat(e.error))
                }
                ))
            }
            )),
            "/ticket" === u && Promise.all([n.e(125), n.e(223)]).then(n.bind(n, 223)),
            "/admin" === u && n.e(393).then(n.t.bind(n, 393, 23))
        },
        700: function(e, t, n) {
            "use strict";
            n.r(t)
        },
        54: function(e, t, n) {
            var r = n(700);
            "string" == typeof r && (r = [[e.id, r, ""]]),
            r.locals && (e.exports = r.locals),
            (0,
            n(346).Z)("6f9eb46a", r, !1, {})
        }
    }, i = {};
    function a(e) {
        if (i[e])
            return i[e].exports;
        var t = i[e] = {
            id: e,
            exports: {}
        };
        return o[e](t, t.exports, a),
        t.exports
    }
    a.m = o,
    a.x = function() {}
    ,
    a.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return a.d(t, {
            a: t
        }),
        t
    }
    ,
    t = Object.getPrototypeOf ? function(e) {
        return Object.getPrototypeOf(e)
    }
    : function(e) {
        return e.__proto__
    }
    ,
    a.t = function(n, r) {
        if (1 & r && (n = this(n)),
        8 & r)
            return n;
        if ("object" == typeof n && n) {
            if (4 & r && n.__esModule)
                return n;
            if (16 & r && "function" == typeof n.then)
                return n
        }
        var o = Object.create(null);
        a.r(o);
        var i = {};
        e = e || [null, t({}), t([]), t(t)];
        for (var u = 2 & r && n; "object" == typeof u && !~e.indexOf(u); u = t(u))
            Object.getOwnPropertyNames(u).forEach((function(e) {
                i[e] = function() {
                    return n[e]
                }
            }
            ));
        return i.default = function() {
            return n
        }
        ,
        a.d(o, i),
        o
    }
    ,
    a.d = function(e, t) {
        for (var n in t)
            a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    }
    ,
    a.f = {},
    a.e = function(e) {
        return Promise.all(Object.keys(a.f).reduce((function(t, n) {
            return a.f[n](e, t),
            t
        }
        ), []))
    }
    ,
    a.u = function(e) {
        return e + "." + {
            125: "a34fa62b2d50",
            223: "7f30d3f14c52",
            280: "04fb1c62ff7f",
            393: "7731fa21c72b",
            823: "68bedca499c1",
            870: "0a13b32d63ef"
        }[e] + ".js"
    }
    ,
    a.miniCssF = function(e) {}
    ,
    a.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    a.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n = {},
    r = "image-host-website:",
    a.l = function(e, t, o, i) {
        if (n[e])
            n[e].push(t);
        else {
            var u, c;
            if (void 0 !== o)
                for (var l = document.getElementsByTagName("script"), d = 0; d < l.length; d++) {
                    var s = l[d];
                    if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == r + o) {
                        u = s;
                        break
                    }
                }
            u || (c = !0,
            (u = document.createElement("script")).charset = "utf-8",
            u.timeout = 120,
            a.nc && u.setAttribute("nonce", a.nc),
            u.setAttribute("data-webpack", r + o),
            u.src = e),
            n[e] = [t];
            var f = function(t, r) {
                u.onerror = u.onload = null,
                clearTimeout(m);
                var o = n[e];
                if (delete n[e],
                u.parentNode && u.parentNode.removeChild(u),
                o && o.forEach((function(e) {
                    return e(r)
                }
                )),
                t)
                    return t(r)
            }
              , m = setTimeout(f.bind(null, void 0, {
                type: "timeout",
                target: u
            }), 12e4);
            u.onerror = f.bind(null, u.onerror),
            u.onload = f.bind(null, u.onload),
            c && document.head.appendChild(u)
        }
    }
    ,
    a.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    function() {
        var e;
        a.g.importScripts && (e = a.g.location + "");
        var t = a.g.document;
        if (!e && t && (t.currentScript && (e = t.currentScript.src),
        !e)) {
            var n = t.getElementsByTagName("script");
            n.length && (e = n[n.length - 1].src)
        }
        if (!e)
            throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"),
        a.p = e
    }(),
    function() {
        var e = {
            179: 0
        }
          , t = [[653, 217]];
        a.f.j = function(t, n) {
            var r = a.o(e, t) ? e[t] : void 0;
            if (0 !== r)
                if (r)
                    n.push(r[2]);
                else {
                    var o = new Promise((function(n, o) {
                        r = e[t] = [n, o]
                    }
                    ));
                    n.push(r[2] = o);
                    var i = a.p + a.u(t)
                      , u = new Error;
                    a.l(i, (function(n) {
                        if (a.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0),
                        r)) {
                            var o = n && ("load" === n.type ? "missing" : n.type)
                              , i = n && n.target && n.target.src;
                            u.message = "Loading chunk " + t + " failed.\n(" + o + ": " + i + ")",
                            u.name = "ChunkLoadError",
                            u.type = o,
                            u.request = i,
                            r[1](u)
                        }
                    }
                    ), "chunk-" + t, t)
                }
        }
        ;
        var n = function() {}
          , r = function(r, o) {
            for (var i, u, c = o[0], l = o[1], d = o[2], s = o[3], f = 0, m = []; f < c.length; f++)
                u = c[f],
                a.o(e, u) && e[u] && m.push(e[u][0]),
                e[u] = 0;
            for (i in l)
                a.o(l, i) && (a.m[i] = l[i]);
            for (d && d(a),
            r && r(o); m.length; )
                m.shift()();
            return s && t.push.apply(t, s),
            n()
        }
          , o = self.webpackChunkimage_host_website = self.webpackChunkimage_host_website || [];
        function i() {
            for (var n, r = 0; r < t.length; r++) {
                for (var o = t[r], i = !0, u = 1; u < o.length; u++) {
                    var c = o[u];
                    0 !== e[c] && (i = !1)
                }
                i && (t.splice(r--, 1),
                n = a(a.s = o[0]))
            }
            return 0 === t.length && (a.x(),
            a.x = function() {}
            ),
            n
        }
        o.forEach(r.bind(null, 0)),
        o.push = r.bind(null, o.push.bind(o));
        var u = a.x;
        a.x = function() {
            return a.x = u || function() {}
            ,
            (n = i)()
        }
    }(),
    a.x()
}();
