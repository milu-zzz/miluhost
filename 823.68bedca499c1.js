(self.webpackChunkimage_host_website = self.webpackChunkimage_host_website || []).push([[823], {
    890: function(e) {
        e.exports = {
            name: "Lucid Image Host",
            enableExpire: !1
        }
    },
    823: function(e, t, a) {
        "use strict";
        a.r(t);
        var n = a(167)
          , i = a(26)
          , r = a.n(i)
          , o = a(144).Z
          , s = a(557).Z;
        o.use(n.Z, {
            languages: {
                json: r()
            }
        }),
        window.onload = function() {
            new o({
                el: "#vue-root",
                render: function(e) {
                    return e(s)
                }
            })
        }
    },
    557: function(e, t, a) {
        "use strict";
        a.d(t, {
            Z: function() {
                return x
            }
        });
        var n = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "flex flex-col items-center m-dyn"
            }, [e._m(0), e._v(" "), a("p", {
                staticClass: "my-4 input-holder"
            }, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.apiKey,
                    expression: "apiKey"
                }],
                staticClass: "input w-full",
                class: e.apiKey ? "" : "bad",
                attrs: {
                    type: "text",
                    placeholder: "API Key"
                },
                domProps: {
                    value: e.apiKey
                },
                on: {
                    keydown: function(t) {
                        if (!t.type.indexOf("key") && e._k(t.keyCode, "space", 32, t.key, [" ", "Spacebar"]))
                            return null;
                        t.preventDefault()
                    },
                    input: function(t) {
                        t.target.composing || (e.apiKey = t.target.value)
                    }
                }
            })]), e._v(" "), e.apiKey && e.allDomainsNotClicked && 0 !== e.allDomainsData.length ? a("p", {
                staticClass: "my-4 input-holder"
            }, [a("input", {
                staticClass: "button",
                attrs: {
                    type: "button",
                    value: "Use All Domains"
                },
                on: {
                    click: e.allDomainsClick
                }
            })]) : e._e(), e._v(" "), e._l(e.domains, (function(t, n) {
                return e.apiKey ? a("p", {
                    staticClass: "fill my-4 input-holder"
                }, [a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.value,
                        expression: "domain.value"
                    }],
                    ref: "domains",
                    refInFor: !0,
                    staticClass: "input",
                    class: t.value ? "fill-priority" : "bad fill-priority",
                    attrs: {
                        type: "text",
                        placeholder: "Domain"
                    },
                    domProps: {
                        value: t.value
                    },
                    on: {
                        "&keydown": function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.domainKeypress(t)
                        },
                        keydown: function(t) {
                            if (!t.type.indexOf("key") && e._k(t.keyCode, "space", 32, t.key, [" ", "Spacebar"]))
                                return null;
                            t.preventDefault()
                        },
                        input: function(a) {
                            a.target.composing || e.$set(t, "value", a.target.value)
                        }
                    }
                }), e._v(" "), a("input", {
                    staticClass: "button",
                    attrs: {
                        type: "button",
                        value: "Add"
                    },
                    on: {
                        click: e.addDomainClick
                    }
                }), e._v(" "), t.required ? e._e() : a("input", {
                    staticClass: "button",
                    attrs: {
                        type: "button",
                        value: "Remove",
                        "data-index": n
                    },
                    on: {
                        click: e.removeDomainClick
                    }
                })]) : e._e()
            }
            )), e._v(" "), e.domains[0].value && e.apiKey ? a("p", {
                staticClass: "my-4 input-holder"
            }, [a("label", {
                staticClass: "label"
            }, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.encryption,
                    expression: "encryption"
                }],
                staticClass: "checkbox",
                staticStyle: {
                    "margin-top": "3vh"
                },
                attrs: {
                    type: "checkbox"
                },
                domProps: {
                    checked: Array.isArray(e.encryption) ? e._i(e.encryption, null) > -1 : e.encryption
                },
                on: {
                    change: function(t) {
                        var a = e.encryption
                          , n = t.target
                          , i = !!n.checked;
                        if (Array.isArray(a)) {
                            var r = e._i(a, null);
                            n.checked ? r < 0 && (e.encryption = a.concat([null])) : r > -1 && (e.encryption = a.slice(0, r).concat(a.slice(r + 1)))
                        } else
                            e.encryption = i
                    }
                }
            }), e._v("Encryption (turn this on)\n    ")])]) : e._e(), e._v(" "), e.encryption ? a("p", {
                staticClass: "my-4 input-holder"
            }, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.encKey,
                    expression: "encKey"
                }],
                staticClass: "input",
                attrs: {
                    type: "text",
                    placeholder: "Key / Key Length"
                },
                domProps: {
                    value: e.encKey
                },
                on: {
                    keydown: [e.keyLengthKeypress, function(t) {
                        if (!t.type.indexOf("key") && e._k(t.keyCode, "space", 32, t.key, [" ", "Spacebar"]))
                            return null;
                        t.preventDefault()
                    }
                    ],
                    input: function(t) {
                        t.target.composing || (e.encKey = t.target.value)
                    }
                }
            })]) : e._e(), e._v(" "), e.domains[0].value && e.apiKey ? a("p", {
                staticClass: "my-4 input-holder"
            }, [a("label", {
                staticClass: "label"
            }, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.embed,
                    expression: "embed"
                }],
                staticClass: "checkbox",
                staticStyle: {
                    "margin-top": "3vh"
                },
                attrs: {
                    type: "checkbox"
                },
                domProps: {
                    checked: Array.isArray(e.embed) ? e._i(e.embed, null) > -1 : e.embed
                },
                on: {
                    change: function(t) {
                        var a = e.embed
                          , n = t.target
                          , i = !!n.checked;
                        if (Array.isArray(a)) {
                            var r = e._i(a, null);
                            n.checked ? r < 0 && (e.embed = a.concat([null])) : r > -1 && (e.embed = a.slice(0, r).concat(a.slice(r + 1)))
                        } else
                            e.embed = i
                    }
                }
            }), e._v("Embed\n    ")])]) : e._e(), e._v(" "), e.embed ? a("p", {
                staticClass: "my-4 input-holder"
            }, [a("label", {
                staticClass: "label"
            }, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.embedColor,
                    expression: "embedColor"
                }],
                attrs: {
                    type: "color"
                },
                domProps: {
                    value: e.embedColor
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.embedColor = t.target.value)
                    }
                }
            }), e._v("Embed Color\n    ")])]) : e._e(), e._v(" "), e.embed ? a("p", {
                staticClass: "my-4 input-holder"
            }, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.embedText,
                    expression: "embedText"
                }],
                staticClass: "input",
                attrs: {
                    type: "text",
                    placeholder: "Embed Text"
                },
                domProps: {
                    value: e.embedText
                },
                on: {
                    keydown: e.embedTextKeydown,
                    input: function(t) {
                        t.target.composing || (e.embedText = t.target.value)
                    }
                }
            })]) : e._e(), e._v(" "), e.embed ? a("p", {
                staticClass: "my-4 input-holder"
            }, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.embedDescription,
                    expression: "embedDescription"
                }],
                staticClass: "input",
                attrs: {
                    type: "text",
                    placeholder: "Embed Description"
                },
                domProps: {
                    value: e.embedDescription
                },
                on: {
                    keydown: e.embedTextKeydown,
                    input: function(t) {
                        t.target.composing || (e.embedDescription = t.target.value)
                    }
                }
            })]) : e._e(), e._v(" "), e.embed ? a("p", {
                staticClass: "my-4 input-holder"
            }, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.embedAuthor,
                    expression: "embedAuthor"
                }],
                staticClass: "input",
                attrs: {
                    type: "text",
                    placeholder: "Embed Author"
                },
                domProps: {
                    value: e.embedAuthor
                },
                on: {
                    keydown: e.embedTextKeydown,
                    input: function(t) {
                        t.target.composing || (e.embedAuthor = t.target.value)
                    }
                }
            })]) : e._e(), e._v(" "), e.embed ? a("p", {
                staticClass: "my-4 input-holder"
            }, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.embedHeader,
                    expression: "embedHeader"
                }],
                staticClass: "input",
                attrs: {
                    type: "text",
                    placeholder: "Embed Header"
                },
                domProps: {
                    value: e.embedHeader
                },
                on: {
                    keydown: e.embedTextKeydown,
                    input: function(t) {
                        t.target.composing || (e.embedHeader = t.target.value)
                    }
                }
            })]) : e._e(), e._v(" "), e.embed ? a("p", {
                staticClass: "my-4 input-holder"
            }, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.embedTimezone,
                    expression: "embedTimezone"
                }],
                staticClass: "input",
                attrs: {
                    type: "text",
                    placeholder: "Timezone"
                },
                domProps: {
                    value: e.embedTimezone
                },
                on: {
                    keydown: e.embedTimezoneKeydown,
                    input: function(t) {
                        t.target.composing || (e.embedTimezone = t.target.value)
                    }
                }
            })]) : e._e(), e._v(" "), e.embed ? a("p", {
                staticClass: "my-4 input-holder"
            }, [a("label", {
                staticClass: "label"
            }, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.embedMDY,
                    expression: "embedMDY"
                }],
                staticClass: "checkbox",
                staticStyle: {
                    "margin-top": "3vh"
                },
                attrs: {
                    type: "checkbox"
                },
                domProps: {
                    checked: Array.isArray(e.embedMDY) ? e._i(e.embedMDY, null) > -1 : e.embedMDY
                },
                on: {
                    change: function(t) {
                        var a = e.embedMDY
                          , n = t.target
                          , i = !!n.checked;
                        if (Array.isArray(a)) {
                            var r = e._i(a, null);
                            n.checked ? r < 0 && (e.embedMDY = a.concat([null])) : r > -1 && (e.embedMDY = a.slice(0, r).concat(a.slice(r + 1)))
                        } else
                            e.embedMDY = i
                    }
                }
            }), e._v("M/D/Y Format\n    ")])]) : e._e(), e._v(" "), e.domains[0].value && e.enableExpire && e.apiKey ? a("p", {
                staticClass: "my-4 input-holder"
            }, [a("label", {
                staticClass: "label"
            }, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.expire,
                    expression: "expire"
                }],
                staticClass: "checkbox",
                staticStyle: {
                    "margin-top": "3vh"
                },
                attrs: {
                    type: "checkbox"
                },
                domProps: {
                    checked: Array.isArray(e.expire) ? e._i(e.expire, null) > -1 : e.expire
                },
                on: {
                    change: function(t) {
                        var a = e.expire
                          , n = t.target
                          , i = !!n.checked;
                        if (Array.isArray(a)) {
                            var r = e._i(a, null);
                            n.checked ? r < 0 && (e.expire = a.concat([null])) : r > -1 && (e.expire = a.slice(0, r).concat(a.slice(r + 1)))
                        } else
                            e.expire = i
                    }
                }
            }), e._v("Expire\n    ")])]) : e._e(), e._v(" "), e.expire ? a("p", {
                staticClass: "my-4 input-holder"
            }, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.expireUses,
                    expression: "expireUses"
                }],
                staticClass: "input",
                class: e.expireAfter || e.expireUses ? "" : "bad",
                attrs: {
                    type: "text",
                    placeholder: "Uses before expire"
                },
                domProps: {
                    value: e.expireUses
                },
                on: {
                    keydown: e.expireUsesKeydown,
                    input: function(t) {
                        t.target.composing || (e.expireUses = t.target.value)
                    }
                }
            })]) : e._e(), e._v(" "), e.expire ? a("p", {
                staticClass: "my-4 input-holder"
            }, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.expireAfter,
                    expression: "expireAfter"
                }],
                staticClass: "input",
                class: e.expireAfter || e.expireUses ? "" : "bad",
                attrs: {
                    type: "text",
                    placeholder: "MS before expire"
                },
                domProps: {
                    value: e.expireAfter
                },
                on: {
                    keydown: e.expireAfterKeydown,
                    input: function(t) {
                        t.target.composing || (e.expireAfter = t.target.value)
                    }
                }
            })]) : e._e(), e._v(" "), e.domains[0].value && e.apiKey ? a("p", {
                staticClass: "my-4 input-holder"
            }, [a("label", {
                staticClass: "label"
            }, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.showLink,
                    expression: "showLink"
                }],
                staticClass: "checkbox",
                staticStyle: {
                    "margin-top": "3vh"
                },
                attrs: {
                    type: "checkbox"
                },
                domProps: {
                    checked: Array.isArray(e.showLink) ? e._i(e.showLink, null) > -1 : e.showLink
                },
                on: {
                    change: function(t) {
                        var a = e.showLink
                          , n = t.target
                          , i = !!n.checked;
                        if (Array.isArray(a)) {
                            var r = e._i(a, null);
                            n.checked ? r < 0 && (e.showLink = a.concat([null])) : r > -1 && (e.showLink = a.slice(0, r).concat(a.slice(r + 1)))
                        } else
                            e.showLink = i
                    }
                }
            }), e._v("Show Link on Discord\n    ")])]) : e._e(), e._v(" "), e.showLink ? a("p", {
                staticClass: "my-4 input-holder"
            }, [a("label", {
                staticClass: "label"
            }, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.compatSLoD,
                    expression: "compatSLoD"
                }],
                staticClass: "checkbox",
                staticStyle: {
                    "margin-top": "3vh"
                },
                attrs: {
                    type: "checkbox"
                },
                domProps: {
                    checked: Array.isArray(e.compatSLoD) ? e._i(e.compatSLoD, null) > -1 : e.compatSLoD
                },
                on: {
                    change: function(t) {
                        var a = e.compatSLoD
                          , n = t.target
                          , i = !!n.checked;
                        if (Array.isArray(a)) {
                            var r = e._i(a, null);
                            n.checked ? r < 0 && (e.compatSLoD = a.concat([null])) : r > -1 && (e.compatSLoD = a.slice(0, r).concat(a.slice(r + 1)))
                        } else
                            e.compatSLoD = i
                    }
                }
            }), e._v("Compatibility SLoD\n    ")])]) : e._e(), e._v(" "), e.domains[0].value && e.apiKey && !e.showLink && 0 !== e.allDomainsData.length ? a("p", {
                staticClass: "my-4 input-holder"
            }, [a("label", {
                staticClass: "label"
            }, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.spoilerGlitch,
                    expression: "spoilerGlitch"
                }],
                staticClass: "checkbox",
                staticStyle: {
                    "margin-top": "3vh"
                },
                attrs: {
                    type: "checkbox"
                },
                domProps: {
                    checked: Array.isArray(e.spoilerGlitch) ? e._i(e.spoilerGlitch, null) > -1 : e.spoilerGlitch
                },
                on: {
                    change: function(t) {
                        var a = e.spoilerGlitch
                          , n = t.target
                          , i = !!n.checked;
                        if (Array.isArray(a)) {
                            var r = e._i(a, null);
                            n.checked ? r < 0 && (e.spoilerGlitch = a.concat([null])) : r > -1 && (e.spoilerGlitch = a.slice(0, r).concat(a.slice(r + 1)))
                        } else
                            e.spoilerGlitch = i
                    }
                }
            }), e._v("Spoiler Glitch\n    ")])]) : e._e(), e._v(" "), e.spoilerGlitch ? a("p", {
                staticClass: "my-4 input-holder"
            }, [a("label", {
                staticClass: "label"
            }, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.spoilerShowFilename,
                    expression: "spoilerShowFilename"
                }],
                staticClass: "checkbox",
                staticStyle: {
                    "margin-top": "3vh"
                },
                attrs: {
                    type: "checkbox"
                },
                domProps: {
                    checked: Array.isArray(e.spoilerShowFilename) ? e._i(e.spoilerShowFilename, null) > -1 : e.spoilerShowFilename
                },
                on: {
                    change: function(t) {
                        var a = e.spoilerShowFilename
                          , n = t.target
                          , i = !!n.checked;
                        if (Array.isArray(a)) {
                            var r = e._i(a, null);
                            n.checked ? r < 0 && (e.spoilerShowFilename = a.concat([null])) : r > -1 && (e.spoilerShowFilename = a.slice(0, r).concat(a.slice(r + 1)))
                        } else
                            e.spoilerShowFilename = i
                    }
                }
            }), e._v("Show File Name\n    ")])]) : e._e(), e._v(" "), e.domains[0].value && e.apiKey ? a("p", {
                staticClass: "my-4 input-holder"
            }, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.nameLength,
                    expression: "nameLength"
                }],
                staticClass: "input",
                class: e.nameLengthBad ? "bad" : "",
                attrs: {
                    type: "text",
                    placeholder: "Name Length"
                },
                domProps: {
                    value: e.nameLength
                },
                on: {
                    keydown: [e.nameLengthKeypress, function(t) {
                        if (!t.type.indexOf("key") && e._k(t.keyCode, "space", 32, t.key, [" ", "Spacebar"]))
                            return null;
                        t.preventDefault()
                    }
                    ],
                    input: function(t) {
                        t.target.composing || (e.nameLength = t.target.value)
                    }
                }
            })]) : e._e(), e._v(" "), a("highlight-code", {
                staticClass: "w-full select-text",
                attrs: {
                    lang: "json"
                }
            }, [e._v("\n    " + e._s(e.json) + "\n  ")]), e._v(" "), a("Preview", e._b({
                staticClass: "my-12"
            }, "Preview", e.$data, !1)), e._v(" "), a("p", {
                staticClass: "input-holder my-4"
            }, [a("input", {
                staticClass: "button",
                attrs: {
                    type: "button",
                    value: "Download"
                },
                on: {
                    click: e.downloadClick
                }
            })])], 2)
        };
        n._withStripped = !0;
        var i = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "discord p-6 max-w-full"
            }, [a("div", {
                staticClass: "flex flex-row min-h-48"
            }, [a("div", {
                staticClass: "w-1/12 mx-4"
            }, [a("img", {
                staticClass: "rounded-full",
                attrs: {
                    src: e.avatarURL,
                    alt: "Discord Avatar"
                }
            })]), e._v(" "), a("div", {
                staticClass: "w-10/12"
            }, [a("p", [a("span", {
                staticClass: "text-dapper text-lg mr-3"
            }, [e._v(e._s(e.config.name))]), e._v(" "), a("span", {
                staticClass: "discord-muted text-md"
            }, [e._v("Today at 12:00 AM")])]), e._v(" "), a("div", [e.showLink || e.embed || e.spoilerGlitch ? a("p", [a("a", {
                staticClass: "discord-link",
                attrs: {
                    href: "#",
                    title: "Example Link"
                }
            }, [e._v(e._s(e.normalLink))])]) : e._e(), e._v(" "), e.embed ? a("div", {
                staticClass: "border-l-4 p-2 bg-discord-embed-bg",
                style: {
                    borderColor: e.embedDisplayColor
                }
            }, [e.embedHeader ? a("p", {
                staticClass: "text-md discord-muted"
            }, [e._v(e._s(e.replaceVariables(e.embedHeader)))]) : e._e(), e._v(" "), e.embedAuthor ? a("p", {
                staticClass: "text-lg font-bold"
            }, [e._v(e._s(e.replaceVariables(e.embedAuthor)))]) : e._e(), e._v(" "), a("p", {
                staticClass: "text-xl"
            }, [a("a", {
                staticClass: "discord-link",
                attrs: {
                    href: "#",
                    title: "Example Link"
                }
            }, [e._v(e._s(e.replaceVariables(e.embedText) || e.config.name))])]), e._v(" "), a("p", {
                staticClass: "text-lg"
            }, [e._v(e._s(e.replaceVariables(e.embedDescription || "Uploaded at [UPLOAD_TIME]")))]), e._v(" "), a("div", {
                staticClass: "h-32"
            }, [a("img", {
                attrs: {
                    src: e.faviconURL,
                    alt: "Example Image"
                }
            })])]) : a("div", {
                staticClass: "h-32"
            }, [a("img", {
                attrs: {
                    src: e.faviconURL,
                    alt: "Example Image"
                }
            })])])])])])
        };
        i._withStripped = !0;
        var r = a(330)
          , o = a(780)
          , s = a(890)
          , l = a.n(s);
        function c(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var a = 0, n = new Array(t); a < t; a++)
                n[a] = e[a];
            return n
        }
        var p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
        function m(e) {
            var t, a = "", n = function(e, t) {
                var a;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (a = function(e, t) {
                        if (e) {
                            if ("string" == typeof e)
                                return c(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === a && e.constructor && (a = e.constructor.name),
                            "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? c(e, t) : void 0
                        }
                    }(e)) || t && e && "number" == typeof e.length) {
                        a && (e = a);
                        var n = 0
                          , i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return n >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[n++]
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
                var r, o = !0, s = !1;
                return {
                    s: function() {
                        a = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = a.next();
                        return o = e.done,
                        e
                    },
                    e: function(e) {
                        s = !0,
                        r = e
                    },
                    f: function() {
                        try {
                            o || null == a.return || a.return()
                        } finally {
                            if (s)
                                throw r
                        }
                    }
                }
            }(Array(e));
            try {
                for (n.s(); !(t = n.n()).done; )
                    t.value,
                    a += p[Math.floor(Math.random() * p.length)]
            } catch (e) {
                n.e(e)
            } finally {
                n.f()
            }
            return a
        }
        var d = {
            name: "Preview",
            data: function() {
                return {
                    avatarURL: r,
                    faviconURL: o,
                    config: l()
                }
            },
            props: ["embed", "embedColor", "embedText", "embedMDY", "embedDescription", "embedAuthor", "embedHeader", "showLink", "compatSLoD", "spoilerGlitch", "spoilerShowFilename", "domains", "nameLength", "encryption", "encKey"],
            computed: {
                normalLink: function() {
                    var e = Number.isNaN(parseInt(this.encKey)) ? this.encKey ? 0 : 16 : parseInt(this.encKey)
                      , t = "".concat(this.encryption ? "".concat(m(e) || this.encKey, "/") : "").concat(this.filename, ".png");
                    return this.spoilerGlitch ? "".concat(location.protocol, "//").concat(this.domains[0].value, "/").concat(this.spoilerShowFilename ? t : "") : "".concat(location.protocol, "//").concat(this.domains[0].value, "/").concat(t).concat(this.compatSLoD ? "# " : "")
                },
                filename: function() {
                    return m(+this.nameLength || 14)
                },
                embedDisplayColor: function() {
                    return "#000000" === this.embedColor ? "#202225" : this.embedColor
                },
                embedDate: function() {
                    return this.embedMDY ? "1/13/2000" : "13/1/2000"
                }
            },
            methods: {
                replaceVariables: function(e) {
                    var t = new Map;
                    return t.set("UPLOAD_DATE", this.embedDate),
                    t.set("UPLOAD_EXTENSION", "png"),
                    t.set("UPLOAD_NAME", this.filename),
                    t.set("UPLOAD_SIZE", "133.7 KB"),
                    t.set("UPLOAD_TIME", "12:00 AM"),
                    function(e, t) {
                        return e.replace(/\[([A-Za-z0-9_\-]+)\]/g, (function(e, a) {
                            return t.has(a.toUpperCase()) ? t.get(a.toUpperCase()) : e
                        }
                        ))
                    }(e, t)
                }
            }
        }
          , u = a(900)
          , h = (0,
        u.Z)(d, i, [], !1, null, null, null);
        h.options.__file = "src/config/Preview.vue";
        var v = h.exports;
        function y(e) {
            return function(e) {
                if (Array.isArray(e))
                    return b(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                    return Array.from(e)
            }(e) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return b(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === a && e.constructor && (a = e.constructor.name),
                    "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? b(e, t) : void 0
                }
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function b(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var a = 0, n = new Array(t); a < t; a++)
                n[a] = e[a];
            return n
        }
        var f = a(890)
          , g = {
            name: "App",
            components: {
                Preview: v
            },
            data: function() {
                return {
                    apiKey: "",
                    domains: [{
                        value: location.host,
                        required: !0
                    }],
                    encryption: null,
                    encKey: "",
                    nameLength: "",
                    pendingDomainUpdate: !1,
                    nameLengthBad: !1,
                    embed: !1,
                    embedColor: "#000000",
                    embedText: "",
                    embedDescription: "",
                    embedAuthor: "",
                    embedHeader: "",
                    embedMDY: !1,
                    embedTimezone: "",
                    expire: !1,
                    expireUses: "",
                    expireAfter: "",
                    showLink: !1,
                    compatSLoD: !1,
                    allDomainsNotClicked: !0,
                    enableExpire: f.enableExpire,
                    spoilerGlitch: !1,
                    spoilerShowFilename: !1,
                    allDomainsData: []
                }
            },
            methods: {
                addDomain: function() {
                    this.domains.push({
                        value: "",
                        required: !1
                    }),
                    this.pendingDomainUpdate = !0
                },
                domainKeypress: function(e) {
                    e.currentTarget.value && this.addDomain()
                },
                nameLengthKeypress: function(e) {
                    if (!this.preventLetter(e)) {
                        var t = "Backspace" === e.key ? e.currentTarget.value.slice(0, -1) : e.currentTarget.value + e.key;
                        if (t) {
                            var a = +t;
                            if (a > 24)
                                return e.preventDefault();
                            this.nameLengthBad = a < 6
                        } else
                            this.nameLengthBad = !1
                    }
                },
                keyLengthKeypress: function(e) {
                    if (!["ArrowLeft", "ArrowRight"].includes(e.key)) {
                        var t = "Backspace" === e.key ? e.currentTarget.value.slice(0, -1) : e.currentTarget.value + e.key;
                        t && +t > 1024 && e.preventDefault()
                    }
                },
                preventLetter: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return !!["ArrowLeft", "ArrowRight"].includes(e.key) || !["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Backspace"].concat(y(t)).includes(e.key) && (e.preventDefault(),
                    !0)
                },
                expireUsesKeydown: function(e) {
                    if (!this.preventLetter(e)) {
                        var t = "Backspace" === e.key ? e.currentTarget.value.slice(0, -1) : e.currentTarget.value + e.key;
                        if (t && +t > 10)
                            return e.preventDefault()
                    }
                },
                expireAfterKeydown: function(e) {
                    if (!this.preventLetter(e)) {
                        var t = "Backspace" === e.key ? e.currentTarget.value.slice(0, -1) : e.currentTarget.value + e.key;
                        if (t && +t > 864e5)
                            return e.preventDefault()
                    }
                },
                embedTextKeydown: function(e) {
                    if (!["ArrowLeft", "ArrowRight"].includes(e.key))
                        return ("Backspace" === e.key ? e.currentTarget.value.slice(0, -1) : e.currentTarget.value + e.key).length > 512 ? e.preventDefault() : void 0
                },
                embedTimezoneKeydown: function(e) {
                    if (!this.preventLetter(e, "-")) {
                        var t = "Backspace" === e.key ? e.currentTarget.value.slice(0, -1) : e.currentTarget.value + e.key;
                        if (t && "-" !== t) {
                            var a = parseInt(t);
                            if (!Number.isInteger(a) || a > 23 || a < -23)
                                return e.preventDefault()
                        }
                    }
                },
                allDomainsClick: function() {
                    this.allDomainsNotClicked = !1;
                    var e = this.allDomainsData.map((function(e) {
                        return {
                            required: !1,
                            value: e
                        }
                    }
                    ));
                    e[0] && (e[0].required = !0),
                    this.domains = e
                },
                downloadClick: function() {
                    var e, t, a, n;
                    e = JSON.stringify(this.config),
                    t = "".concat(f.name, ".sxcu"),
                    a = URL.createObjectURL(new Blob([e],{
                        type: "this/is-not-a-valid-mime-type"
                    })),
                    (n = document.createElement("a")).href = a,
                    n.download = t,
                    n.click(),
                    URL.revokeObjectURL(a)
                },
                removeDomainClick: function(e) {
                    this.domains.splice(e.currentTarget.getAttribute("data-index"), 1)
                },
                addDomainClick: function() {
                    this.addDomain()
                }
            },
            computed: {
                config: function() {
                    var e, t = {
                        Version: "13.1.0",
                        DestinationType: "ImageUploader, FileUploader, TextUploader",
                        RequestMethod: "POST",
                        Parameters: {},
                        Headers: {},
                        Body: "Binary",
                        Name: f.name
                    };
                    return this.apiKey && (t.Headers.Authorization = this.apiKey),
                    this.domains.length > 1 ? (e = "$json:random$",
                    t.Parameters.random = this.domains.map((function(e) {
                        return e.value
                    }
                    )).join(",")) : e = this.domains[0].value,
                    e && (t.RequestURL = "".concat(location.protocol, "//").concat(this.spoilerGlitch ? this.allDomainsData[0] : this.domains[0].value, "/upload"),
                    t.DeletionURL = "".concat(location.protocol, "//").concat(this.spoilerGlitch ? this.allDomainsData[0] : e, "/delete/$json:deletionKey$/$json:name$"),
                    t.URL = this.url),
                    this.encryption && (t.Parameters.encryption = "yes",
                    ~~this.encKey ? t.Parameters.keyLength = this.encKey : this.encKey && (t.Parameters.encryptionKey = this.encKey)),
                    this.nameLength && (t.Parameters.nameLength = this.nameLength),
                    this.embed && (t.Parameters.embed = "yes",
                    t.Parameters.embedColor = this.embedColor,
                    this.embedText && (t.Parameters.embedText = this.embedText),
                    this.embedDescription && (t.Parameters.embedDescription = this.embedDescription),
                    this.embedAuthor && (t.Parameters.embedAuthor = this.embedAuthor),
                    this.embedHeader && (t.Parameters.embedHeader = this.embedHeader),
                    this.embedTimezone && (t.Parameters.embedTimezone = this.embedTimezone),
                    this.embedMDY && (t.Parameters.embedMDY = "yes")),
                    this.expire && (t.Parameters.expire = "yes",
                    this.expireAfter && (t.Parameters.expireAfter = this.expireAfter),
                    this.expireUses && (t.Parameters.expireUses = this.expireUses)),
                    t
                },
                json: function() {
                    return JSON.stringify(this.config, null, 2)
                },
                url: function() {
                    var e = this.domains.length > 1 ? "$json:random$" : this.domains[0].value
                      , t = this.spoilerGlitch ? this.allDomainsData[0] : e
                      , a = this.encryption ? "$json:encryptionKey$/$json:name$" : "$json:name$"
                      , n = "".concat(location.protocol, "//").concat(t, "/").concat(a);
                    if (this.showLink)
                        return this.compatSLoD ? "".concat(n, "# ‌") : "‌".concat(n);
                    if (this.spoilerGlitch) {
                        var i = "||​||".repeat(200);
                        return this.spoilerShowFilename ? "<".concat(location.protocol, "//").concat(e, "/").concat(a, "> ").concat(i).concat(n) : "<".concat(location.protocol, "//").concat(e, "/> ").concat(i).concat(n)
                    }
                    return n
                }
            },
            updated: function() {
                this.pendingDomainUpdate && (this.pendingDomainUpdate = !1,
                this.$refs.domains[this.$refs.domains.length - 1].focus())
            },
            created: function() {
                var e = this;
                fetch("/api/domains").then((function(e) {
                    return e.json()
                }
                )).then((function(t) {
                    return e.allDomainsData = t
                }
                ))
            },
            watch: {
                showLink: function(e, t) {
                    e && (this.spoilerGlitch = !1)
                }
            }
        }
          , k = (0,
        u.Z)(g, n, [function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("p", {
                staticClass: "text-3xl mb-16"
            }, [e._v("Go back to "), a("a", {
                staticClass: "link",
                attrs: {
                    href: "/",
                    title: "Go back home"
                }
            }, [e._v("the home page")]), e._v(".")])
        }
        ], !1, null, null, null);
        k.options.__file = "src/config/App.vue";
        var x = k.exports
    },
    330: function(e, t, a) {
        "use strict";
        e.exports = a.p + "avatar.e05224247a64.png"
    },
    780: function(e, t, a) {
        "use strict";
        e.exports = a.p + "favicon.bce4e9b98324.webp"
    }
}]);
