/*! For license information please see 280.04fb1c62ff7f.js.LICENSE.txt */
(self.webpackChunkimage_host_website = self.webpackChunkimage_host_website || []).push([[280], {
    983: function(e) {
        "use strict";
        const t = /^(?:( )+|\t+)/;
        e.exports = e=>{
            if ("string" != typeof e)
                throw new TypeError("Expected a string");
            let n, r, o = 0;
            const i = new Map;
            for (const a of e.split(/\n/g)) {
                if (!a)
                    continue;
                let e, s, c, l;
                const u = a.match(t);
                if (null === u)
                    o = 0,
                    n = "";
                else {
                    e = u[0].length,
                    s = u[1] ? "s" : "t",
                    s !== n && (o = 0),
                    n = s,
                    c = 0;
                    const t = e - o;
                    o = e,
                    0 === t ? c++ : r = s + String(t > 0 ? t : -t),
                    l = i.get(r),
                    l = void 0 === l ? [1, 0] : [++l[0], l[1] + c],
                    i.set(r, l)
                }
            }
            const a = function(e) {
                let t = 0
                  , n = 0
                  , r = 0;
                for (const [o,[i,a]] of e)
                    (i > n || i === n && a > r) && (n = i,
                    r = a,
                    t = o);
                return t
            }(i);
            let s, c = 0, l = "";
            return 0 !== a && (c = Number(a.slice(1)),
            "s" === a[0] ? (s = "space",
            l = " ".repeat(c)) : (s = "tab",
            l = "\t".repeat(c))),
            {
                amount: c,
                type: s,
                indent: l
            }
        }
    },
    802: function(e) {
        function t(e) {
            return e instanceof Map ? e.clear = e.delete = e.set = function() {
                throw new Error("map is read-only")
            }
            : e instanceof Set && (e.add = e.clear = e.delete = function() {
                throw new Error("set is read-only")
            }
            ),
            Object.freeze(e),
            Object.getOwnPropertyNames(e).forEach((function(n) {
                var r = e[n];
                "object" != typeof r || Object.isFrozen(r) || t(r)
            }
            )),
            e
        }
        var n = t
          , r = t;
        n.default = r;
        class o {
            constructor(e) {
                void 0 === e.data && (e.data = {}),
                this.data = e.data
            }
            ignoreMatch() {
                this.ignore = !0
            }
        }
        function i(e) {
            return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
        }
        function a(e, ...t) {
            const n = Object.create(null);
            for (const t in e)
                n[t] = e[t];
            return t.forEach((function(e) {
                for (const t in e)
                    n[t] = e[t]
            }
            )),
            n
        }
        const s = e=>!!e.kind;
        class c {
            constructor(e, t) {
                this.buffer = "",
                this.classPrefix = t.classPrefix,
                e.walk(this)
            }
            addText(e) {
                this.buffer += i(e)
            }
            openNode(e) {
                if (!s(e))
                    return;
                let t = e.kind;
                e.sublanguage || (t = `${this.classPrefix}${t}`),
                this.span(t)
            }
            closeNode(e) {
                s(e) && (this.buffer += "</span>")
            }
            value() {
                return this.buffer
            }
            span(e) {
                this.buffer += `<span class="${e}">`
            }
        }
        class l {
            constructor() {
                this.rootNode = {
                    children: []
                },
                this.stack = [this.rootNode]
            }
            get top() {
                return this.stack[this.stack.length - 1]
            }
            get root() {
                return this.rootNode
            }
            add(e) {
                this.top.children.push(e)
            }
            openNode(e) {
                const t = {
                    kind: e,
                    children: []
                };
                this.add(t),
                this.stack.push(t)
            }
            closeNode() {
                if (this.stack.length > 1)
                    return this.stack.pop()
            }
            closeAllNodes() {
                for (; this.closeNode(); )
                    ;
            }
            toJSON() {
                return JSON.stringify(this.rootNode, null, 4)
            }
            walk(e) {
                return this.constructor._walk(e, this.rootNode)
            }
            static _walk(e, t) {
                return "string" == typeof t ? e.addText(t) : t.children && (e.openNode(t),
                t.children.forEach((t=>this._walk(e, t))),
                e.closeNode(t)),
                e
            }
            static _collapse(e) {
                "string" != typeof e && e.children && (e.children.every((e=>"string" == typeof e)) ? e.children = [e.children.join("")] : e.children.forEach((e=>{
                    l._collapse(e)
                }
                )))
            }
        }
        class u extends l {
            constructor(e) {
                super(),
                this.options = e
            }
            addKeyword(e, t) {
                "" !== e && (this.openNode(t),
                this.addText(e),
                this.closeNode())
            }
            addText(e) {
                "" !== e && this.add(e)
            }
            addSublanguage(e, t) {
                const n = e.root;
                n.kind = t,
                n.sublanguage = !0,
                this.add(n)
            }
            toHTML() {
                return new c(this,this.options).value()
            }
            finalize() {
                return !0
            }
        }
        function g(e) {
            return e ? "string" == typeof e ? e : e.source : null
        }
        const d = "[a-zA-Z]\\w*"
          , f = "[a-zA-Z_]\\w*"
          , h = "\\b\\d+(\\.\\d+)?"
          , p = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)"
          , b = "\\b(0b[01]+)"
          , m = {
            begin: "\\\\[\\s\\S]",
            relevance: 0
        }
          , y = {
            className: "string",
            begin: "'",
            end: "'",
            illegal: "\\n",
            contains: [m]
        }
          , v = {
            className: "string",
            begin: '"',
            end: '"',
            illegal: "\\n",
            contains: [m]
        }
          , w = {
            begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
        }
          , E = function(e, t, n={}) {
            const r = a({
                className: "comment",
                begin: e,
                end: t,
                contains: []
            }, n);
            return r.contains.push(w),
            r.contains.push({
                className: "doctag",
                begin: "(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",
                relevance: 0
            }),
            r
        }
          , x = E("//", "$")
          , _ = E("/\\*", "\\*/")
          , O = E("#", "$")
          , R = {
            className: "number",
            begin: h,
            relevance: 0
        }
          , N = {
            className: "number",
            begin: p,
            relevance: 0
        }
          , M = {
            className: "number",
            begin: b,
            relevance: 0
        }
          , k = {
            className: "number",
            begin: h + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
            relevance: 0
        }
          , A = {
            begin: /(?=\/[^/\n]*\/)/,
            contains: [{
                className: "regexp",
                begin: /\//,
                end: /\/[gimuy]*/,
                illegal: /\n/,
                contains: [m, {
                    begin: /\[/,
                    end: /\]/,
                    relevance: 0,
                    contains: [m]
                }]
            }]
        }
          , j = {
            className: "title",
            begin: d,
            relevance: 0
        }
          , S = {
            className: "title",
            begin: f,
            relevance: 0
        };
        var P = Object.freeze({
            __proto__: null,
            MATCH_NOTHING_RE: /\b\B/,
            IDENT_RE: d,
            UNDERSCORE_IDENT_RE: f,
            NUMBER_RE: h,
            C_NUMBER_RE: p,
            BINARY_NUMBER_RE: b,
            RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
            SHEBANG: (e={})=>{
                const t = /^#![ ]*\//;
                return e.binary && (e.begin = function(...e) {
                    return e.map((e=>g(e))).join("")
                }(t, /.*\b/, e.binary, /\b.*/)),
                a({
                    className: "meta",
                    begin: t,
                    end: /$/,
                    relevance: 0,
                    "on:begin": (e,t)=>{
                        0 !== e.index && t.ignoreMatch()
                    }
                }, e)
            }
            ,
            BACKSLASH_ESCAPE: m,
            APOS_STRING_MODE: y,
            QUOTE_STRING_MODE: v,
            PHRASAL_WORDS_MODE: w,
            COMMENT: E,
            C_LINE_COMMENT_MODE: x,
            C_BLOCK_COMMENT_MODE: _,
            HASH_COMMENT_MODE: O,
            NUMBER_MODE: R,
            C_NUMBER_MODE: N,
            BINARY_NUMBER_MODE: M,
            CSS_NUMBER_MODE: k,
            REGEXP_MODE: A,
            TITLE_MODE: j,
            UNDERSCORE_TITLE_MODE: S,
            METHOD_GUARD: {
                begin: "\\.\\s*[a-zA-Z_]\\w*",
                relevance: 0
            },
            END_SAME_AS_BEGIN: function(e) {
                return Object.assign(e, {
                    "on:begin": (e,t)=>{
                        t.data._beginMatch = e[1]
                    }
                    ,
                    "on:end": (e,t)=>{
                        t.data._beginMatch !== e[1] && t.ignoreMatch()
                    }
                })
            }
        });
        function L(e, t) {
            "." === e.input[e.index - 1] && t.ignoreMatch()
        }
        function T(e, t) {
            t && e.beginKeywords && (e.begin = "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)",
            e.__beforeBegin = L,
            e.keywords = e.keywords || e.beginKeywords,
            delete e.beginKeywords,
            void 0 === e.relevance && (e.relevance = 0))
        }
        function B(e, t) {
            Array.isArray(e.illegal) && (e.illegal = function(...e) {
                return "(" + e.map((e=>g(e))).join("|") + ")"
            }(...e.illegal))
        }
        function I(e, t) {
            if (e.match) {
                if (e.begin || e.end)
                    throw new Error("begin & end are not supported with match");
                e.begin = e.match,
                delete e.match
            }
        }
        function C(e, t) {
            void 0 === e.relevance && (e.relevance = 1)
        }
        const D = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];
        function H(e, t, n="keyword") {
            const r = {};
            return "string" == typeof e ? o(n, e.split(" ")) : Array.isArray(e) ? o(n, e) : Object.keys(e).forEach((function(n) {
                Object.assign(r, H(e[n], t, n))
            }
            )),
            r;
            function o(e, n) {
                t && (n = n.map((e=>e.toLowerCase()))),
                n.forEach((function(t) {
                    const n = t.split("|");
                    r[n[0]] = [e, $(n[0], n[1])]
                }
                ))
            }
        }
        function $(e, t) {
            return t ? Number(t) : function(e) {
                return D.includes(e.toLowerCase())
            }(e) ? 0 : 1
        }
        function U(e, {plugins: t}) {
            function n(t, n) {
                return new RegExp(g(t),"m" + (e.case_insensitive ? "i" : "") + (n ? "g" : ""))
            }
            class r {
                constructor() {
                    this.matchIndexes = {},
                    this.regexes = [],
                    this.matchAt = 1,
                    this.position = 0
                }
                addRule(e, t) {
                    t.position = this.position++,
                    this.matchIndexes[this.matchAt] = t,
                    this.regexes.push([t, e]),
                    this.matchAt += function(e) {
                        return new RegExp(e.toString() + "|").exec("").length - 1
                    }(e) + 1
                }
                compile() {
                    0 === this.regexes.length && (this.exec = ()=>null);
                    const e = this.regexes.map((e=>e[1]));
                    this.matcherRe = n(function(e, t="|") {
                        const n = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
                        let r = 0
                          , o = "";
                        for (let i = 0; i < e.length; i++) {
                            r += 1;
                            const a = r;
                            let s = g(e[i]);
                            for (i > 0 && (o += t),
                            o += "("; s.length > 0; ) {
                                const e = n.exec(s);
                                if (null == e) {
                                    o += s;
                                    break
                                }
                                o += s.substring(0, e.index),
                                s = s.substring(e.index + e[0].length),
                                "\\" === e[0][0] && e[1] ? o += "\\" + String(Number(e[1]) + a) : (o += e[0],
                                "(" === e[0] && r++)
                            }
                            o += ")"
                        }
                        return o
                    }(e), !0),
                    this.lastIndex = 0
                }
                exec(e) {
                    this.matcherRe.lastIndex = this.lastIndex;
                    const t = this.matcherRe.exec(e);
                    if (!t)
                        return null;
                    const n = t.findIndex(((e,t)=>t > 0 && void 0 !== e))
                      , r = this.matchIndexes[n];
                    return t.splice(0, n),
                    Object.assign(t, r)
                }
            }
            class o {
                constructor() {
                    this.rules = [],
                    this.multiRegexes = [],
                    this.count = 0,
                    this.lastIndex = 0,
                    this.regexIndex = 0
                }
                getMatcher(e) {
                    if (this.multiRegexes[e])
                        return this.multiRegexes[e];
                    const t = new r;
                    return this.rules.slice(e).forEach((([e,n])=>t.addRule(e, n))),
                    t.compile(),
                    this.multiRegexes[e] = t,
                    t
                }
                resumingScanAtSamePosition() {
                    return 0 !== this.regexIndex
                }
                considerAll() {
                    this.regexIndex = 0
                }
                addRule(e, t) {
                    this.rules.push([e, t]),
                    "begin" === t.type && this.count++
                }
                exec(e) {
                    const t = this.getMatcher(this.regexIndex);
                    t.lastIndex = this.lastIndex;
                    let n = t.exec(e);
                    if (this.resumingScanAtSamePosition())
                        if (n && n.index === this.lastIndex)
                            ;
                        else {
                            const t = this.getMatcher(0);
                            t.lastIndex = this.lastIndex + 1,
                            n = t.exec(e)
                        }
                    return n && (this.regexIndex += n.position + 1,
                    this.regexIndex === this.count && this.considerAll()),
                    n
                }
            }
            if (e.compilerExtensions || (e.compilerExtensions = []),
            e.contains && e.contains.includes("self"))
                throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
            return e.classNameAliases = a(e.classNameAliases || {}),
            function t(r, i) {
                const s = r;
                if (r.compiled)
                    return s;
                [I].forEach((e=>e(r, i))),
                e.compilerExtensions.forEach((e=>e(r, i))),
                r.__beforeBegin = null,
                [T, B, C].forEach((e=>e(r, i))),
                r.compiled = !0;
                let c = null;
                if ("object" == typeof r.keywords && (c = r.keywords.$pattern,
                delete r.keywords.$pattern),
                r.keywords && (r.keywords = H(r.keywords, e.case_insensitive)),
                r.lexemes && c)
                    throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");
                return c = c || r.lexemes || /\w+/,
                s.keywordPatternRe = n(c, !0),
                i && (r.begin || (r.begin = /\B|\b/),
                s.beginRe = n(r.begin),
                r.endSameAsBegin && (r.end = r.begin),
                r.end || r.endsWithParent || (r.end = /\B|\b/),
                r.end && (s.endRe = n(r.end)),
                s.terminatorEnd = g(r.end) || "",
                r.endsWithParent && i.terminatorEnd && (s.terminatorEnd += (r.end ? "|" : "") + i.terminatorEnd)),
                r.illegal && (s.illegalRe = n(r.illegal)),
                r.contains || (r.contains = []),
                r.contains = [].concat(...r.contains.map((function(e) {
                    return function(e) {
                        return e.variants && !e.cachedVariants && (e.cachedVariants = e.variants.map((function(t) {
                            return a(e, {
                                variants: null
                            }, t)
                        }
                        ))),
                        e.cachedVariants ? e.cachedVariants : K(e) ? a(e, {
                            starts: e.starts ? a(e.starts) : null
                        }) : Object.isFrozen(e) ? a(e) : e
                    }("self" === e ? r : e)
                }
                ))),
                r.contains.forEach((function(e) {
                    t(e, s)
                }
                )),
                r.starts && t(r.starts, i),
                s.matcher = function(e) {
                    const t = new o;
                    return e.contains.forEach((e=>t.addRule(e.begin, {
                        rule: e,
                        type: "begin"
                    }))),
                    e.terminatorEnd && t.addRule(e.terminatorEnd, {
                        type: "end"
                    }),
                    e.illegal && t.addRule(e.illegal, {
                        type: "illegal"
                    }),
                    t
                }(s),
                s
            }(e)
        }
        function K(e) {
            return !!e && (e.endsWithParent || K(e.starts))
        }
        function z(e) {
            const t = {
                props: ["language", "code", "autodetect"],
                data: function() {
                    return {
                        detectedLanguage: "",
                        unknownLanguage: !1
                    }
                },
                computed: {
                    className() {
                        return this.unknownLanguage ? "" : "hljs " + this.detectedLanguage
                    },
                    highlighted() {
                        if (!this.autoDetect && !e.getLanguage(this.language))
                            return console.warn(`The language "${this.language}" you specified could not be found.`),
                            this.unknownLanguage = !0,
                            i(this.code);
                        let t = {};
                        return this.autoDetect ? (t = e.highlightAuto(this.code),
                        this.detectedLanguage = t.language) : (t = e.highlight(this.language, this.code, this.ignoreIllegals),
                        this.detectedLanguage = this.language),
                        t.value
                    },
                    autoDetect() {
                        return !this.language || (e = this.autodetect,
                        Boolean(e || "" === e));
                        var e
                    },
                    ignoreIllegals: ()=>!0
                },
                render(e) {
                    return e("pre", {}, [e("code", {
                        class: this.className,
                        domProps: {
                            innerHTML: this.highlighted
                        }
                    })])
                }
            };
            return {
                Component: t,
                VuePlugin: {
                    install(e) {
                        e.component("highlightjs", t)
                    }
                }
            }
        }
        const G = {
            "after:highlightBlock": ({block: e, result: t, text: n})=>{
                const r = Z(e);
                if (!r.length)
                    return;
                const o = document.createElement("div");
                o.innerHTML = t.value,
                t.value = function(e, t, n) {
                    let r = 0
                      , o = "";
                    const a = [];
                    function s() {
                        return e.length && t.length ? e[0].offset !== t[0].offset ? e[0].offset < t[0].offset ? e : t : "start" === t[0].event ? e : t : e.length ? e : t
                    }
                    function c(e) {
                        o += "<" + V(e) + [].map.call(e.attributes, (function(e) {
                            return " " + e.nodeName + '="' + i(e.value) + '"'
                        }
                        )).join("") + ">"
                    }
                    function l(e) {
                        o += "</" + V(e) + ">"
                    }
                    function u(e) {
                        ("start" === e.event ? c : l)(e.node)
                    }
                    for (; e.length || t.length; ) {
                        let t = s();
                        if (o += i(n.substring(r, t[0].offset)),
                        r = t[0].offset,
                        t === e) {
                            a.reverse().forEach(l);
                            do {
                                u(t.splice(0, 1)[0]),
                                t = s()
                            } while (t === e && t.length && t[0].offset === r);
                            a.reverse().forEach(c)
                        } else
                            "start" === t[0].event ? a.push(t[0].node) : a.pop(),
                            u(t.splice(0, 1)[0])
                    }
                    return o + i(n.substr(r))
                }(r, Z(o), n)
            }
        };
        function V(e) {
            return e.nodeName.toLowerCase()
        }
        function Z(e) {
            const t = [];
            return function e(n, r) {
                for (let o = n.firstChild; o; o = o.nextSibling)
                    3 === o.nodeType ? r += o.nodeValue.length : 1 === o.nodeType && (t.push({
                        event: "start",
                        offset: r,
                        node: o
                    }),
                    r = e(o, r),
                    V(o).match(/br|hr|img|input/) || t.push({
                        event: "stop",
                        offset: r,
                        node: o
                    }));
                return r
            }(e, 0),
            t
        }
        const q = e=>{
            console.error(e)
        }
          , W = (e,...t)=>{
            console.log(`WARN: ${e}`, ...t)
        }
          , X = (e,t)=>{
            console.log(`Deprecated as of ${e}. ${t}`)
        }
          , F = i
          , J = a
          , Q = Symbol("nomatch");
        var Y = function(e) {
            const t = Object.create(null)
              , r = Object.create(null)
              , i = [];
            let a = !0;
            const s = /(^(<[^>]+>|\t|)+|\n)/gm
              , c = "Could not find the language '{}', did you forget to load/include a language module?"
              , l = {
                disableAutodetect: !0,
                name: "Plain text",
                contains: []
            };
            let g = {
                noHighlightRe: /^(no-?highlight)$/i,
                languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
                classPrefix: "hljs-",
                tabReplace: null,
                useBR: !1,
                languages: null,
                __emitter: u
            };
            function d(e) {
                return g.noHighlightRe.test(e)
            }
            function f(e, t, n, r) {
                const o = {
                    code: t,
                    language: e
                };
                M("before:highlight", o);
                const i = o.result ? o.result : h(o.language, o.code, n, r);
                return i.code = o.code,
                M("after:highlight", i),
                i
            }
            function h(e, n, r, s) {
                const l = n;
                function u(e, t) {
                    const n = E.case_insensitive ? t[0].toLowerCase() : t[0];
                    return Object.prototype.hasOwnProperty.call(e.keywords, n) && e.keywords[n]
                }
                function d() {
                    null != R.subLanguage ? function() {
                        if ("" === k)
                            return;
                        let e = null;
                        if ("string" == typeof R.subLanguage) {
                            if (!t[R.subLanguage])
                                return void M.addText(k);
                            e = h(R.subLanguage, k, !0, N[R.subLanguage]),
                            N[R.subLanguage] = e.top
                        } else
                            e = p(k, R.subLanguage.length ? R.subLanguage : null);
                        R.relevance > 0 && (A += e.relevance),
                        M.addSublanguage(e.emitter, e.language)
                    }() : function() {
                        if (!R.keywords)
                            return void M.addText(k);
                        let e = 0;
                        R.keywordPatternRe.lastIndex = 0;
                        let t = R.keywordPatternRe.exec(k)
                          , n = "";
                        for (; t; ) {
                            n += k.substring(e, t.index);
                            const r = u(R, t);
                            if (r) {
                                const [e,o] = r;
                                M.addText(n),
                                n = "",
                                A += o;
                                const i = E.classNameAliases[e] || e;
                                M.addKeyword(t[0], i)
                            } else
                                n += t[0];
                            e = R.keywordPatternRe.lastIndex,
                            t = R.keywordPatternRe.exec(k)
                        }
                        n += k.substr(e),
                        M.addText(n)
                    }(),
                    k = ""
                }
                function f(e) {
                    return e.className && M.openNode(E.classNameAliases[e.className] || e.className),
                    R = Object.create(e, {
                        parent: {
                            value: R
                        }
                    }),
                    R
                }
                function b(e, t, n) {
                    let r = function(e, t) {
                        const n = e && e.exec(t);
                        return n && 0 === n.index
                    }(e.endRe, n);
                    if (r) {
                        if (e["on:end"]) {
                            const n = new o(e);
                            e["on:end"](t, n),
                            n.ignore && (r = !1)
                        }
                        if (r) {
                            for (; e.endsParent && e.parent; )
                                e = e.parent;
                            return e
                        }
                    }
                    if (e.endsWithParent)
                        return b(e.parent, t, n)
                }
                function m(e) {
                    return 0 === R.matcher.regexIndex ? (k += e[0],
                    1) : (P = !0,
                    0)
                }
                function y(e) {
                    const t = e[0]
                      , n = l.substr(e.index)
                      , r = b(R, e, n);
                    if (!r)
                        return Q;
                    const o = R;
                    o.skip ? k += t : (o.returnEnd || o.excludeEnd || (k += t),
                    d(),
                    o.excludeEnd && (k = t));
                    do {
                        R.className && M.closeNode(),
                        R.skip || R.subLanguage || (A += R.relevance),
                        R = R.parent
                    } while (R !== r.parent);
                    return r.starts && (r.endSameAsBegin && (r.starts.endRe = r.endRe),
                    f(r.starts)),
                    o.returnEnd ? 0 : t.length
                }
                let v = {};
                function w(t, n) {
                    const i = n && n[0];
                    if (k += t,
                    null == i)
                        return d(),
                        0;
                    if ("begin" === v.type && "end" === n.type && v.index === n.index && "" === i) {
                        if (k += l.slice(n.index, n.index + 1),
                        !a) {
                            const t = new Error("0 width match regex");
                            throw t.languageName = e,
                            t.badRule = v.rule,
                            t
                        }
                        return 1
                    }
                    if (v = n,
                    "begin" === n.type)
                        return function(e) {
                            const t = e[0]
                              , n = e.rule
                              , r = new o(n)
                              , i = [n.__beforeBegin, n["on:begin"]];
                            for (const n of i)
                                if (n && (n(e, r),
                                r.ignore))
                                    return m(t);
                            return n && n.endSameAsBegin && (n.endRe = new RegExp(t.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"),"m")),
                            n.skip ? k += t : (n.excludeBegin && (k += t),
                            d(),
                            n.returnBegin || n.excludeBegin || (k = t)),
                            f(n),
                            n.returnBegin ? 0 : t.length
                        }(n);
                    if ("illegal" === n.type && !r) {
                        const e = new Error('Illegal lexeme "' + i + '" for mode "' + (R.className || "<unnamed>") + '"');
                        throw e.mode = R,
                        e
                    }
                    if ("end" === n.type) {
                        const e = y(n);
                        if (e !== Q)
                            return e
                    }
                    if ("illegal" === n.type && "" === i)
                        return 1;
                    if (S > 1e5 && S > 3 * n.index)
                        throw new Error("potential infinite loop, way more iterations than matches");
                    return k += i,
                    i.length
                }
                const E = O(e);
                if (!E)
                    throw q(c.replace("{}", e)),
                    new Error('Unknown language: "' + e + '"');
                const x = U(E, {
                    plugins: i
                });
                let _ = ""
                  , R = s || x;
                const N = {}
                  , M = new g.__emitter(g);
                !function() {
                    const e = [];
                    for (let t = R; t !== E; t = t.parent)
                        t.className && e.unshift(t.className);
                    e.forEach((e=>M.openNode(e)))
                }();
                let k = ""
                  , A = 0
                  , j = 0
                  , S = 0
                  , P = !1;
                try {
                    for (R.matcher.considerAll(); ; ) {
                        S++,
                        P ? P = !1 : R.matcher.considerAll(),
                        R.matcher.lastIndex = j;
                        const e = R.matcher.exec(l);
                        if (!e)
                            break;
                        const t = w(l.substring(j, e.index), e);
                        j = e.index + t
                    }
                    return w(l.substr(j)),
                    M.closeAllNodes(),
                    M.finalize(),
                    _ = M.toHTML(),
                    {
                        relevance: Math.floor(A),
                        value: _,
                        language: e,
                        illegal: !1,
                        emitter: M,
                        top: R
                    }
                } catch (t) {
                    if (t.message && t.message.includes("Illegal"))
                        return {
                            illegal: !0,
                            illegalBy: {
                                msg: t.message,
                                context: l.slice(j - 100, j + 100),
                                mode: t.mode
                            },
                            sofar: _,
                            relevance: 0,
                            value: F(l),
                            emitter: M
                        };
                    if (a)
                        return {
                            illegal: !1,
                            relevance: 0,
                            value: F(l),
                            emitter: M,
                            language: e,
                            top: R,
                            errorRaised: t
                        };
                    throw t
                }
            }
            function p(e, n) {
                n = n || g.languages || Object.keys(t);
                const r = function(e) {
                    const t = {
                        relevance: 0,
                        emitter: new g.__emitter(g),
                        value: F(e),
                        illegal: !1,
                        top: l
                    };
                    return t.emitter.addText(e),
                    t
                }(e)
                  , o = n.filter(O).filter(N).map((t=>h(t, e, !1)));
                o.unshift(r);
                const i = o.sort(((e,t)=>{
                    if (e.relevance !== t.relevance)
                        return t.relevance - e.relevance;
                    if (e.language && t.language) {
                        if (O(e.language).supersetOf === t.language)
                            return 1;
                        if (O(t.language).supersetOf === e.language)
                            return -1
                    }
                    return 0
                }
                ))
                  , [a,s] = i
                  , c = a;
                return c.second_best = s,
                c
            }
            const b = {
                "before:highlightBlock": ({block: e})=>{
                    g.useBR && (e.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ /]*>/g, "\n"))
                }
                ,
                "after:highlightBlock": ({result: e})=>{
                    g.useBR && (e.value = e.value.replace(/\n/g, "<br>"))
                }
            }
              , m = /^(<[^>]+>|\t)+/gm
              , y = {
                "after:highlightBlock": ({result: e})=>{
                    g.tabReplace && (e.value = e.value.replace(m, (e=>e.replace(/\t/g, g.tabReplace))))
                }
            };
            function v(e) {
                let t = null;
                const n = function(e) {
                    let t = e.className + " ";
                    t += e.parentNode ? e.parentNode.className : "";
                    const n = g.languageDetectRe.exec(t);
                    if (n) {
                        const t = O(n[1]);
                        return t || (W(c.replace("{}", n[1])),
                        W("Falling back to no-highlight mode for this block.", e)),
                        t ? n[1] : "no-highlight"
                    }
                    return t.split(/\s+/).find((e=>d(e) || O(e)))
                }(e);
                if (d(n))
                    return;
                M("before:highlightBlock", {
                    block: e,
                    language: n
                }),
                t = e;
                const o = t.textContent
                  , i = n ? f(n, o, !0) : p(o);
                M("after:highlightBlock", {
                    block: e,
                    result: i,
                    text: o
                }),
                e.innerHTML = i.value,
                function(e, t, n) {
                    const o = t ? r[t] : n;
                    e.classList.add("hljs"),
                    o && e.classList.add(o)
                }(e, n, i.language),
                e.result = {
                    language: i.language,
                    re: i.relevance,
                    relavance: i.relevance
                },
                i.second_best && (e.second_best = {
                    language: i.second_best.language,
                    re: i.second_best.relevance,
                    relavance: i.second_best.relevance
                })
            }
            const w = ()=>{
                w.called || (w.called = !0,
                X("10.6.0", "initHighlighting() is deprecated.  Use highlightAll() instead."),
                document.querySelectorAll("pre code").forEach(v))
            }
            ;
            let E = !1
              , x = !1;
            function _() {
                x ? document.querySelectorAll("pre code").forEach(v) : E = !0
            }
            function O(e) {
                return e = (e || "").toLowerCase(),
                t[e] || t[r[e]]
            }
            function R(e, {languageName: t}) {
                "string" == typeof e && (e = [e]),
                e.forEach((e=>{
                    r[e] = t
                }
                ))
            }
            function N(e) {
                const t = O(e);
                return t && !t.disableAutodetect
            }
            function M(e, t) {
                const n = e;
                i.forEach((function(e) {
                    e[n] && e[n](t)
                }
                ))
            }
            "undefined" != typeof window && window.addEventListener && window.addEventListener("DOMContentLoaded", (function() {
                x = !0,
                E && _()
            }
            ), !1),
            Object.assign(e, {
                highlight: f,
                highlightAuto: p,
                highlightAll: _,
                fixMarkup: function(e) {
                    return X("10.2.0", "fixMarkup will be removed entirely in v11.0"),
                    X("10.2.0", "Please see https://github.com/highlightjs/highlight.js/issues/2534"),
                    t = e,
                    g.tabReplace || g.useBR ? t.replace(s, (e=>"\n" === e ? g.useBR ? "<br>" : e : g.tabReplace ? e.replace(/\t/g, g.tabReplace) : e)) : t;
                    var t
                },
                highlightBlock: v,
                configure: function(e) {
                    e.useBR && (X("10.3.0", "'useBR' will be removed entirely in v11.0"),
                    X("10.3.0", "Please see https://github.com/highlightjs/highlight.js/issues/2559")),
                    g = J(g, e)
                },
                initHighlighting: w,
                initHighlightingOnLoad: function() {
                    X("10.6.0", "initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."),
                    E = !0
                },
                registerLanguage: function(n, r) {
                    let o = null;
                    try {
                        o = r(e)
                    } catch (e) {
                        if (q("Language definition for '{}' could not be registered.".replace("{}", n)),
                        !a)
                            throw e;
                        q(e),
                        o = l
                    }
                    o.name || (o.name = n),
                    t[n] = o,
                    o.rawDefinition = r.bind(null, e),
                    o.aliases && R(o.aliases, {
                        languageName: n
                    })
                },
                listLanguages: function() {
                    return Object.keys(t)
                },
                getLanguage: O,
                registerAliases: R,
                requireLanguage: function(e) {
                    X("10.4.0", "requireLanguage will be removed entirely in v11."),
                    X("10.4.0", "Please see https://github.com/highlightjs/highlight.js/pull/2844");
                    const t = O(e);
                    if (t)
                        return t;
                    throw new Error("The '{}' language is required, but not loaded.".replace("{}", e))
                },
                autoDetection: N,
                inherit: J,
                addPlugin: function(e) {
                    i.push(e)
                },
                vuePlugin: z(e).VuePlugin
            }),
            e.debugMode = function() {
                a = !1
            }
            ,
            e.safeMode = function() {
                a = !0
            }
            ,
            e.versionString = "10.6.0";
            for (const e in P)
                "object" == typeof P[e] && n(P[e]);
            return Object.assign(e, P),
            e.addPlugin(b),
            e.addPlugin(G),
            e.addPlugin(y),
            e
        }({});
        e.exports = Y
    },
    26: function(e) {
        e.exports = function(e) {
            const t = {
                literal: "true false null"
            }
              , n = [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
              , r = [e.QUOTE_STRING_MODE, e.C_NUMBER_MODE]
              , o = {
                end: ",",
                endsWithParent: !0,
                excludeEnd: !0,
                contains: r,
                keywords: t
            }
              , i = {
                begin: /\{/,
                end: /\}/,
                contains: [{
                    className: "attr",
                    begin: /"/,
                    end: /"/,
                    contains: [e.BACKSLASH_ESCAPE],
                    illegal: "\\n"
                }, e.inherit(o, {
                    begin: /:/
                })].concat(n),
                illegal: "\\S"
            }
              , a = {
                begin: "\\[",
                end: "\\]",
                contains: [e.inherit(o)],
                illegal: "\\S"
            };
            return r.push(i, a),
            n.forEach((function(e) {
                r.push(e)
            }
            )),
            {
                name: "JSON",
                contains: r,
                keywords: t,
                illegal: "\\S"
            }
        }
    },
    602: function(e) {
        "use strict";
        e.exports = (e,t=1,n)=>{
            if (n = {
                indent: " ",
                includeEmptyLines: !1,
                ...n
            },
            "string" != typeof e)
                throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
            if ("number" != typeof t)
                throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);
            if ("string" != typeof n.indent)
                throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof n.indent}\``);
            if (0 === t)
                return e;
            const r = n.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
            return e.replace(r, n.indent.repeat(t))
        }
    },
    239: function(e) {
        "use strict";
        e.exports = e=>{
            const t = e.match(/^[ \t]*(?=\S)/gm);
            return t ? t.reduce(((e,t)=>Math.min(e, t.length)), 1 / 0) : 0
        }
    },
    931: function(e, t, n) {
        "use strict";
        const r = n(922)
          , o = n(602);
        e.exports = (e,t=0,n)=>o(r(e), t, n)
    },
    922: function(e, t, n) {
        "use strict";
        const r = n(239);
        e.exports = e=>{
            const t = r(e);
            if (0 === t)
                return e;
            const n = new RegExp(`^[ \\t]{${t}}`,"gm");
            return e.replace(n, "")
        }
    },
    167: function(e, t, n) {
        "use strict";
        function r(e, t, n, r) {
            var o, i = arguments.length, a = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, r);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
            return i > 3 && a && Object.defineProperty(t, n, a),
            a
        }
        n.d(t, {
            Z: function() {
                return S
            }
        }),
        Object.create,
        Object.create;
        var o = n(802)
          , i = n.n(o)
          , a = n(144)
          , s = n(983)
          , c = n.n(s)
          , l = n(931)
          , u = n.n(l);
        function g(e) {
            return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function d(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function f() {
            return "undefined" != typeof Reflect && Reflect.defineMetadata && Reflect.getOwnMetadataKeys
        }
        function h(e, t) {
            p(e, t),
            Object.getOwnPropertyNames(t.prototype).forEach((function(n) {
                p(e.prototype, t.prototype, n)
            }
            )),
            Object.getOwnPropertyNames(t).forEach((function(n) {
                p(e, t, n)
            }
            ))
        }
        function p(e, t, n) {
            (n ? Reflect.getOwnMetadataKeys(t, n) : Reflect.getOwnMetadataKeys(t)).forEach((function(r) {
                var o = n ? Reflect.getOwnMetadata(r, t, n) : Reflect.getOwnMetadata(r, t);
                n ? Reflect.defineMetadata(r, o, e, n) : Reflect.defineMetadata(r, o, e)
            }
            ))
        }
        var b = {
            __proto__: []
        }instanceof Array;
        function m(e, t) {
            var n = t.prototype._init;
            t.prototype._init = function() {
                var t = this
                  , n = Object.getOwnPropertyNames(e);
                if (e.$options.props)
                    for (var r in e.$options.props)
                        e.hasOwnProperty(r) || n.push(r);
                n.forEach((function(n) {
                    Object.defineProperty(t, n, {
                        get: function() {
                            return e[n]
                        },
                        set: function(t) {
                            e[n] = t
                        },
                        configurable: !0
                    })
                }
                ))
            }
            ;
            var r = new t;
            t.prototype._init = n;
            var o = {};
            return Object.keys(r).forEach((function(e) {
                void 0 !== r[e] && (o[e] = r[e])
            }
            )),
            o
        }
        var y = ["data", "beforeCreate", "created", "beforeMount", "mounted", "beforeDestroy", "destroyed", "beforeUpdate", "updated", "activated", "deactivated", "render", "errorCaptured", "serverPrefetch"];
        function v(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            t.name = t.name || e._componentTag || e.name;
            var n = e.prototype;
            Object.getOwnPropertyNames(n).forEach((function(e) {
                if ("constructor" !== e)
                    if (y.indexOf(e) > -1)
                        t[e] = n[e];
                    else {
                        var r = Object.getOwnPropertyDescriptor(n, e);
                        void 0 !== r.value ? "function" == typeof r.value ? (t.methods || (t.methods = {}))[e] = r.value : (t.mixins || (t.mixins = [])).push({
                            data: function() {
                                return d({}, e, r.value)
                            }
                        }) : (r.get || r.set) && ((t.computed || (t.computed = {}))[e] = {
                            get: r.get,
                            set: r.set
                        })
                    }
            }
            )),
            (t.mixins || (t.mixins = [])).push({
                data: function() {
                    return m(this, e)
                }
            });
            var r = e.__decorators__;
            r && (r.forEach((function(e) {
                return e(t)
            }
            )),
            delete e.__decorators__);
            var o = Object.getPrototypeOf(e.prototype)
              , i = o instanceof a.Z ? o.constructor : a.Z
              , s = i.extend(t);
            return E(s, e, i),
            f() && h(s, e),
            s
        }
        var w = {
            prototype: !0,
            arguments: !0,
            callee: !0,
            caller: !0
        };
        function E(e, t, n) {
            Object.getOwnPropertyNames(t).forEach((function(r) {
                if (!w[r]) {
                    var o = Object.getOwnPropertyDescriptor(e, r);
                    if (!o || o.configurable) {
                        var i, a, s = Object.getOwnPropertyDescriptor(t, r);
                        if (!b) {
                            if ("cid" === r)
                                return;
                            var c = Object.getOwnPropertyDescriptor(n, r);
                            if (a = g(i = s.value),
                            null != i && ("object" === a || "function" === a) && c && c.value === s.value)
                                return
                        }
                        Object.defineProperty(e, r, s)
                    }
                }
            }
            ))
        }
        function x(e) {
            return "function" == typeof e ? v(e) : function(t) {
                return v(t, e)
            }
        }
        x.registerHooks = function(e) {
            var t;
            y.push.apply(y, function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++)
                        n[t] = e[t];
                    return n
                }
            }(t = e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))
                    return Array.from(e)
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }())
        }
        ;
        var _ = "undefined" != typeof Reflect && void 0 !== Reflect.getMetadata;
        function O(e) {
            return void 0 === e && (e = {}),
            function(t, n) {
                var r;
                !function(e, t, n) {
                    if (_ && !Array.isArray(e) && "function" != typeof e && !e.hasOwnProperty("type") && void 0 === e.type) {
                        var r = Reflect.getMetadata("design:type", t, n);
                        r !== Object && (e.type = r)
                    }
                }(e, t, n),
                (r = function(t, n) {
                    (t.props || (t.props = {}))[n] = e
                }
                ,
                function(e, t, n) {
                    var o = "function" == typeof e ? e : e.constructor;
                    o.__decorators__ || (o.__decorators__ = []),
                    "number" != typeof n && (n = void 0),
                    o.__decorators__.push((function(e) {
                        return r(e, t)
                    }
                    ))
                }
                )(t, n)
            }
        }
        function R(e) {
            return "string" == typeof e ? e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : e
        }
        function N(e) {
            return Array.isArray(e) ? e.map((e=>Array.isArray(e.children) && e.children.length > 0 ? N(e.children) : e.text)).join("") : ""
        }
        const M = {
            display: "inline !important",
            "vertical-align": "middle"
        };
        let k = class extends a.Z {
            get hasCode() {
                return "string" == typeof this.code && this.code.length > 0
            }
            render(e) {
                const {hasCode: t, inline: n, auto: r} = this;
                let o, a = this.lang, s = t ? this.code : N(this.$slots.default);
                n || (s = function(e) {
                    if ("string" == typeof e) {
                        const t = c()(e).indent || "\t";
                        return (e = u()(e, 0, {
                            indent: t
                        })).trim()
                    }
                    return e
                }(s));
                try {
                    r ? ({language: a, value: o} = i().highlightAuto(s)) : o = a ? i().highlight(a, s).value : R(s)
                } catch (e) {
                    o = R(s),
                    console.error(e)
                }
                return e(n ? "span" : "pre", [e("code", {
                    class: ["hljs", ...a ? [a] : []],
                    style: n ? M : {},
                    domProps: {
                        innerHTML: o
                    }
                })])
            }
        }
        ;
        r([O(String)], k.prototype, "lang", void 0),
        r([O({
            type: Boolean,
            default: !1
        })], k.prototype, "inline", void 0),
        r([O(String)], k.prototype, "code", void 0),
        r([O(Boolean)], k.prototype, "auto", void 0),
        k = r([x({
            name: "HighlightCode"
        })], k);
        var A = k;
        const j = (e,t={
            languages: {}
        })=>{
            const {languages: n} = t;
            !function(e) {
                "object" == typeof e && Object.keys(e).forEach((t=>{
                    const n = e[t];
                    i().registerLanguage(t, n)
                }
                ))
            }(n),
            e.component("HighlightCode", A)
        }
        ;
        "undefined" != typeof window && window.Vue && j(window.Vue);
        var S = {
            install: j
        }
    }
}]);
