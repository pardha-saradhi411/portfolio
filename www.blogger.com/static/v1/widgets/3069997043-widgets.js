(function() {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var aa = "&action=",
        ba = ".wikipedia.org",
        ca = "CSSStyleDeclaration",
        da = "Clobbering detected",
        ea = "Edge",
        fa = "Element",
        ha = "GET",
        ia = "Node",
        ja = "SCRIPT",
        ka = "SPAN",
        la = "STYLE",
        ma = "SW_READER_LIST_",
        na = "SW_READER_LIST_CLOSED_",
        oa = "Share this post",
        pa = "Symbol.iterator",
        qa = "_blank",
        ra = "about:invalid#zClosurez",
        sa = "about:invalid#zSoyz",
        ta = "attributes",
        ua = "block",
        va = "click",
        wa = "collapsed",
        xa = "collapsible",
        ya = "comment-editor",
        za = "commentId",
        Aa = "complete",
        Ba = "contact-form-email",
        Ca = "contact-form-email-message",
        Da = "contact-form-error-message",
        Ea = "contact-form-error-message-with-border",
        Fa = "contact-form-name",
        Ga = "contact-form-submit",
        Ha = "contact-form-success-message",
        Ia = "contact-form-success-message-with-border",
        Ja = "data-height",
        Ka = "data-sanitizer-",
        La = "data-viewurl",
        Ma = "displayModeFull",
        Na = "displayModeLayout",
        Oa = "displayModeNone",
        l = "div",
        Pa = "dropdown-toggle",
        Qa = "error",
        Ra = "expanded",
        Sa = "followers-grid",
        m = "function",
        Ta = "getAttribute",
        Ua = "getElementsByTagName",
        Va = "getPropertyValue",
        Wa = "hasAttribute",
        Xa = "hidden",
        Ya = "https:",
        Za = "layout-widget-description",
        $a = "layout-widget-title",
        ab = "max-height: 0;",
        bb = "msMatchesSelector",
        cb = "namespaceURI",
        db = "nonce",
        p = "none",
        q = "number",
        r = "object",
        eb = "prerender",
        fb = "ready",
        gb = "removeAttribute",
        hb = "rotate(-45deg)",
        ib = "setAttribute",
        jb = "status-message",
        kb = "status-message-inner",
        u = "string",
        lb = "style",
        mb = "success",
        nb = "text/javascript",
        ob = "thread-collapsed",
        pb = "thread-expanded",
        qb = "title",
        rb = "toggle",
        sb = "visible",
        tb = "wikipedia-search-input",
        ub = "wikipedia-search-more",
        vb = "wikipedia-search-results",
        wb = "wikipedia-search-results-header",
        w;

    function xb(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var yb = typeof Object.defineProperties == m ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function zb(a) {
        a = [r == typeof globalThis && globalThis, a, r == typeof window && window, r == typeof self && self, r == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var Ab = zb(this);

    function x(a, b) {
        if (b) a: {
            var c = Ab;a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                if (!(e in c)) break a;
                c = c[e]
            }
            a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && yb(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }
    x("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, g) {
            this.C = f;
            yb(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.C
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0;
        return b
    });
    x(pa, function(a) {
        if (a) return a;
        a = Symbol(pa);
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = Ab[b[c]];
            typeof d === m && typeof d.prototype[a] != m && yb(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return Bb(xb(this))
                }
            })
        }
        return a
    });

    function Bb(a) {
        a = {
            next: a
        };
        a[Symbol.iterator] = function() {
            return this
        };
        return a
    }

    function Cb(a) {
        return a.raw = a
    }

    function y(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        if (b) return b.call(a);
        if (typeof a.length == q) return {
            next: xb(a)
        };
        throw Error(String(a) + " is not an iterable or ArrayLike");
    }
    var Db = typeof Object.create == m ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        Eb;
    if (typeof Object.setPrototypeOf == m) Eb = Object.setPrototypeOf;
    else {
        var Fb;
        a: {
            var Gb = {
                    a: !0
                },
                Hb = {};
            try {
                Hb.__proto__ = Gb;
                Fb = Hb.a;
                break a
            } catch (a) {}
            Fb = !1
        }
        Eb = Fb ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var Ib = Eb;

    function z(a, b) {
        a.prototype = Db(b.prototype);
        a.prototype.constructor = a;
        if (Ib) Ib(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.O = b.prototype
    }

    function Jb() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    }

    function Kb(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    x("WeakMap", function(a) {
        function b(k) {
            this.ga = (h += Math.random() + 1).toString();
            if (k) {
                k = y(k);
                for (var n; !(n = k.next()).done;) n = n.value, this.set(n[0], n[1])
            }
        }

        function c() {}

        function d(k) {
            var n = typeof k;
            return n === r && null !== k || n === m
        }

        function e(k) {
            if (!Kb(k, g)) {
                var n = new c;
                yb(k, g, {
                    value: n
                })
            }
        }

        function f(k) {
            var n = Object[k];
            n && (Object[k] = function(t) {
                if (t instanceof c) return t;
                Object.isExtensible(t) && e(t);
                return n(t)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var k = Object.seal({}),
                        n = Object.seal({}),
                        t = new a([
                            [k,
                                2
                            ],
                            [n, 3]
                        ]);
                    if (2 != t.get(k) || 3 != t.get(n)) return !1;
                    t.delete(k);
                    t.set(n, 4);
                    return !t.has(k) && 4 == t.get(n)
                } catch (v) {
                    return !1
                }
            }()) return a;
        var g = "$jscomp_hidden_" + Math.random();
        f("freeze");
        f("preventExtensions");
        f("seal");
        var h = 0;
        b.prototype.set = function(k, n) {
            if (!d(k)) throw Error("Invalid WeakMap key");
            e(k);
            if (!Kb(k, g)) throw Error("WeakMap key fail: " + k);
            k[g][this.ga] = n;
            return this
        };
        b.prototype.get = function(k) {
            return d(k) && Kb(k, g) ? k[g][this.ga] : void 0
        };
        b.prototype.has = function(k) {
            return d(k) && Kb(k, g) && Kb(k[g],
                this.ga)
        };
        b.prototype.delete = function(k) {
            return d(k) && Kb(k, g) && Kb(k[g], this.ga) ? delete k[g][this.ga] : !1
        };
        return b
    });
    x("Map", function(a) {
        function b() {
            var h = {};
            return h.qa = h.next = h.head = h
        }

        function c(h, k) {
            var n = h[1];
            return Bb(function() {
                if (n) {
                    for (; n.head != h[1];) n = n.qa;
                    for (; n.next != n.head;) return n = n.next, {
                        done: !1,
                        value: k(n)
                    };
                    n = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }

        function d(h, k) {
            var n = k && typeof k;
            n == r || n == m ? f.has(k) ? n = f.get(k) : (n = "" + ++g, f.set(k, n)) : n = "p_" + k;
            var t = h[0][n];
            if (t && Kb(h[0], n))
                for (h = 0; h < t.length; h++) {
                    var v = t[h];
                    if (k !== k && v.key !== v.key || k === v.key) return {
                        id: n,
                        list: t,
                        index: h,
                        aa: v
                    }
                }
            return {
                id: n,
                list: t,
                index: -1,
                aa: void 0
            }
        }

        function e(h) {
            this[0] = {};
            this[1] = b();
            this.size = 0;
            if (h) {
                h = y(h);
                for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
            }
        }
        if (function() {
                if (!a || typeof a != m || !a.prototype.entries || typeof Object.seal != m) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(y([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var n = k.entries(),
                        t = n.next();
                    if (t.done || t.value[0] != h || "s" != t.value[1]) return !1;
                    t = n.next();
                    return t.done || 4 != t.value[0].x || "t" != t.value[1] || !n.next().done ?
                        !1 : !0
                } catch (v) {
                    return !1
                }
            }()) return a;
        var f = new WeakMap;
        e.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var n = d(this, h);
            n.list || (n.list = this[0][n.id] = []);
            n.aa ? n.aa.value = k : (n.aa = {
                next: this[1],
                qa: this[1].qa,
                head: this[1],
                key: h,
                value: k
            }, n.list.push(n.aa), this[1].qa.next = n.aa, this[1].qa = n.aa, this.size++);
            return this
        };
        e.prototype.delete = function(h) {
            h = d(this, h);
            return h.aa && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this[0][h.id], h.aa.qa.next = h.aa.next, h.aa.next.qa = h.aa.qa, h.aa.head = null, this.size--, !0) : !1
        };
        e.prototype.clear = function() {
            this[0] = {};
            this[1] = this[1].qa = b();
            this.size = 0
        };
        e.prototype.has = function(h) {
            return !!d(this, h).aa
        };
        e.prototype.get = function(h) {
            return (h = d(this, h).aa) && h.value
        };
        e.prototype.entries = function() {
            return c(this, function(h) {
                return [h.key, h.value]
            })
        };
        e.prototype.keys = function() {
            return c(this, function(h) {
                return h.key
            })
        };
        e.prototype.values = function() {
            return c(this, function(h) {
                return h.value
            })
        };
        e.prototype.forEach = function(h, k) {
            for (var n = this.entries(), t; !(t = n.next()).done;) t =
                t.value, h.call(k, t[1], t[0], this)
        };
        e.prototype[Symbol.iterator] = e.prototype.entries;
        var g = 0;
        return e
    });
    var Lb = typeof Object.assign == m ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Kb(d, e) && (a[e] = d[e])
        }
        return a
    };
    x("Object.assign", function(a) {
        return a || Lb
    });
    x("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    });

    function Mb(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    }
    x("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Mb(this, b, "endsWith");
            b += "";
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    });
    x("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Mb(this, b, "startsWith");
            b += "";
            var e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    });
    x("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return typeof b !== q ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    });

    function Nb(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[Symbol.iterator] = function() {
            return e
        };
        return e
    }
    x("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Nb(this, function(b) {
                return b
            })
        }
    });
    x("Set", function(a) {
        function b(c) {
            this.C = new Map;
            if (c) {
                c = y(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.C.size
        }
        if (function() {
                if (!a || typeof a != m || !a.prototype.entries || typeof Object.seal != m) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(y([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ?
                        !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.C.set(c, c);
            this.size = this.C.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.C.delete(c);
            this.size = this.C.size;
            return c
        };
        b.prototype.clear = function() {
            this.C.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.C.has(c)
        };
        b.prototype.entries = function() {
            return this.C.entries()
        };
        b.prototype.values = function() {
            return this.C.values()
        };
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] =
            b.prototype.values;
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.C.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    });
    x("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Nb(this, function(b, c) {
                return c
            })
        }
    });
    x("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(h) {
                return h
            };
            var e = [],
                f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
            if (typeof f == m) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    });
    x("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b;
            var c = Math.floor(Math.abs(b));
            return 0 > b ? -c : c
        }
    });
    x("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) Kb(b, d) && c.push(b[d]);
            return c
        }
    });
    x("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    x("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    x("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== Mb(this, b, "includes").indexOf(b, c || 0)
        }
    });
    x("Number.MAX_SAFE_INTEGER", function() {
        return 9007199254740991
    });
    x("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return Number.isFinite(b) ? b === Math.floor(b) : !1
        }
    });
    x("Number.isSafeInteger", function(a) {
        return a ? a : function(b) {
            return Number.isInteger(b) && Math.abs(b) <= Number.MAX_SAFE_INTEGER
        }
    });
    window.jstiming && window.jstiming.load.tick("widgetJsStart");

    function Ob() {
        window.jstiming.load.tick("ol")
    }

    function Pb(a, b) {
        a.addEventListener ? a.addEventListener("load", b, !1) : a.attachEvent("onload", b)
    }

    function Qb(a, b) {
        return a.className && -1 != a.className.indexOf(b) ? a : a.parentNode ? Qb(a.parentNode, b) : null
    }

    function Rb() {
        window.jstiming.load.tick("prt");
        window.tickAboveFold && window.tickAboveFold(this)
    }
    window.BLOG_attachCsiOnload = function(a, b) {
        if (window.jstiming) {
            window.jstiming.load.tick("widgetJsEnd");
            window.jstiming.load.tick("prt");
            window.jstiming.load.name = a + "blogspot";
            a = document.getElementsByTagName("img");
            for (var c = 0; c < a.length; c++) a[c].complete ? null != Qb(a[c], "post") && Rb.apply(a[c]) : null != Qb(a[c], "post") && Pb(a[c], Rb);
            Pb(window, Ob);
            a = function() {
                for (var d = {}, e = window.blogger_blog_id, f = ["google_blogger_adsense_experiment_id", "blogger_csi_e", "blogger_templates_experiment_id", "blogger_active_experiments"],
                        g = [], h = f.length, k = 0; k < h; k++) {
                    var n = f[k];
                    n in window && g.push(window[n])
                }
                e && (d.blogId = e);
                0 < g.length && (d.e = g.join(","));
                e = (document.location.protocol == Ya ? Ya : "http:") + "//csi.gstatic.com/csi";
                window.jstiming.report(window.jstiming.load, d, b || e)
            };
            window.addEventListener ? window.addEventListener("beforeunload", a, !1) : window.attachEvent("onbeforeunload", a)
        }
    };
    var Sb = Sb || {},
        A = this || self;

    function Tb(a, b) {
        a: {
            var c = ["CLOSURE_FLAGS"];
            for (var d = A, e = 0; e < c.length; e++)
                if (d = d[c[e]], null == d) {
                    c = null;
                    break a
                }
            c = d
        }
        a = c && c[a];
        return null != a ? a : b
    }

    function Ub(a) {
        a.Ca = void 0;
        a.Za = function() {
            return a.Ca ? a.Ca : a.Ca = new a
        }
    }

    function Vb(a) {
        var b = typeof a;
        return b != r ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }

    function Wb(a) {
        var b = Vb(a);
        return "array" == b || b == r && typeof a.length == q
    }

    function Xb(a) {
        var b = typeof a;
        return b == r && null != a || b == m
    }
    var Yb = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Zb = 0;

    function $b(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ac(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function B(a, b, c) {
        B = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? $b : ac;
        return B.apply(null, arguments)
    }

    function bc(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function D(a, b) {
        a = a.split(".");
        var c = A;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function F(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.O = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.de = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }

    function cc(a) {
        return a
    };

    function dc(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, dc);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b)
    }
    F(dc, Error);
    dc.prototype.name = "CustomError";
    var ec;

    function fc(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        dc.call(this, c + a[d])
    }
    F(fc, dc);
    fc.prototype.name = "AssertionError";
    var gc = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if (typeof a === u) return typeof b !== u || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        hc = Array.prototype.forEach ? function(a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = typeof a === u ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        ic = Array.prototype.map ? function(a, b) {
            return Array.prototype.map.call(a, b, void 0)
        } :
        function(a, b) {
            for (var c = a.length, d = Array(c), e = typeof a === u ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d
        },
        jc = Array.prototype.some ? function(a, b) {
            return Array.prototype.some.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = typeof a === u ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        };

    function kc(a, b) {
        return 0 <= gc(a, b)
    }

    function lc(a) {
        if (!Array.isArray(a))
            for (var b = a.length - 1; 0 <= b; b--) delete a[b];
        a.length = 0
    }

    function mc(a, b) {
        b = gc(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function nc(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function oc(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function pc(a) {
        if (!arguments.length) return [];
        for (var b = [], c = arguments[0].length, d = 1; d < arguments.length; d++) arguments[d].length < c && (c = arguments[d].length);
        for (d = 0; d < c; d++) {
            for (var e = [], f = 0; f < arguments.length; f++) e.push(arguments[f][d]);
            b.push(e)
        }
        return b
    }

    function qc(a, b) {
        return nc.apply([], ic(a, b))
    };

    function rc(a) {
        a = a.className;
        return typeof a === u && a.match(/\S+/g) || []
    }

    function sc(a, b) {
        var c = rc(a);
        tc(c, Array.prototype.slice.call(arguments, 1));
        a.className = c.join(" ")
    }

    function uc(a, b) {
        var c = rc(a);
        c = vc(c, Array.prototype.slice.call(arguments, 1));
        a.className = c.join(" ")
    }

    function tc(a, b) {
        for (var c = 0; c < b.length; c++) kc(a, b[c]) || a.push(b[c])
    }

    function vc(a, b) {
        return a.filter(function(c) {
            return !kc(b, c)
        })
    }

    function wc(a, b, c) {
        for (var d = rc(a), e = !1, f = 0; f < d.length; f++) d[f] == b && (d.splice(f--, 1), e = !0);
        e && (d.push(c), a.className = d.join(" "))
    }

    function xc(a, b) {
        return kc(rc(a), b)
    };
    var yc = Tb(610401301, !1),
        zc = Tb(572417392, !0);

    function Ac(a, b) {
        return 0 == a.lastIndexOf(b, 0)
    }
    var G = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        Bc = /&/g,
        Cc = /</g,
        Dc = />/g,
        Ec = /"/g,
        Fc = /'/g,
        Gc = /\x00/g,
        Hc = /[\x00&<>"']/;

    function Ic() {
        var a = A.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var Jc, Kc = A.navigator;
    Jc = Kc ? Kc.userAgentData || null : null;

    function Lc(a) {
        return yc ? Jc ? Jc.brands.some(function(b) {
            return (b = b.brand) && -1 != b.indexOf(a)
        }) : !1 : !1
    }

    function H(a) {
        return -1 != Ic().indexOf(a)
    };

    function Mc() {
        return yc ? !!Jc && 0 < Jc.brands.length : !1
    }

    function Nc() {
        return Mc() ? !1 : H("Opera")
    }

    function Oc() {
        return Mc() ? !1 : H("Trident") || H("MSIE")
    }

    function Pc() {
        return H("Safari") && !(Qc() || (Mc() ? 0 : H("Coast")) || Nc() || (Mc() ? 0 : H(ea)) || (Mc() ? Lc("Microsoft Edge") : H("Edg/")) || (Mc() ? Lc("Opera") : H("OPR")) || H("Firefox") || H("FxiOS") || H("Silk") || H("Android"))
    }

    function Qc() {
        return Mc() ? Lc("Chromium") : (H("Chrome") || H("CriOS")) && !(Mc() ? 0 : H(ea)) || H("Silk")
    }

    function Rc() {
        return H("Android") && !(Qc() || H("Firefox") || H("FxiOS") || Nc() || H("Silk"))
    }

    function Sc() {
        var a = Ic();
        if (Oc()) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                        if (a && a[1]) switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                        } else b = "7.0";
                        else b = c[1];
                a = b
            }
        } else a = "";
        return a
    }

    function Tc() {
        if (Mc()) {
            var a = Jc.brands.find(function(b) {
                return "Internet Explorer" === b.brand
            });
            if (!a || !a.version) return NaN;
            a = a.version.split(".")
        } else {
            a = Sc();
            if ("" === a) return NaN;
            a = a.split(".")
        }
        return 0 === a.length ? NaN : Number(a[0])
    };

    function Uc(a) {
        Uc[" "](a);
        return a
    }
    Uc[" "] = function() {};
    var Vc = Nc(),
        Wc = Oc(),
        Xc = H(ea),
        Yc = H("Gecko") && !(-1 != Ic().toLowerCase().indexOf("webkit") && !H(ea)) && !(H("Trident") || H("MSIE")) && !H(ea),
        Zc = -1 != Ic().toLowerCase().indexOf("webkit") && !H(ea);

    function $c() {
        var a = A.document;
        return a ? a.documentMode : void 0
    }
    var ad;
    a: {
        var bd = "",
            cd = function() {
                var a = Ic();
                if (Yc) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Xc) return /Edge\/([\d\.]+)/.exec(a);
                if (Wc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Zc) return /WebKit\/(\S+)/.exec(a);
                if (Vc) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();cd && (bd = cd ? cd[1] : "");
        if (Wc) {
            var dd = $c();
            if (null != dd && dd > parseFloat(bd)) {
                ad = String(dd);
                break a
            }
        }
        ad = bd
    }
    var ed = ad,
        fd;
    if (A.document && Wc) {
        var gd = $c();
        fd = gd ? gd : parseInt(ed, 10) || void 0
    } else fd = void 0;
    var hd = fd;
    try {
        (new self.OffscreenCanvas(0, 0)).getContext("2d")
    } catch (a) {}
    var id = Wc || Zc;

    function jd(a) {
        return function() {
            return a
        }
    }

    function kd() {
        return null
    }

    function ld() {}

    function md(a) {
        return a
    };

    function nd(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    }

    function od(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }

    function pd(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    }

    function qd(a, b) {
        for (var c in a)
            if (a[c] == b) return !0;
        return !1
    }

    function rd(a) {
        for (var b in a) return !1;
        return !0
    }

    function sd(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    }
    var td = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function ud(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < td.length; f++) c = td[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var vd;

    function wd() {
        if (void 0 === vd) {
            var a = null,
                b = A.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: cc,
                        createScript: cc,
                        createScriptURL: cc
                    })
                } catch (c) {
                    A.console && A.console.error(c.message)
                }
                vd = a
            } else vd = a
        }
        return vd
    };

    function xd(a, b) {
        this.C = a === yd && b || "";
        this.D = zd
    }
    xd.prototype.va = !0;
    xd.prototype.na = function() {
        return this.C
    };
    xd.prototype.toString = function() {
        return this.C
    };
    var zd = {},
        yd = {};
    var Ad = {};

    function Bd(a) {
        this.C = a
    }
    Bd.prototype.toString = function() {
        return this.C.toString()
    };

    function Cd(a) {
        this.C = a
    }
    Cd.prototype.toString = function() {
        return this.C + ""
    };
    Cd.prototype.va = !0;
    Cd.prototype.na = function() {
        return this.C.toString()
    };

    function Dd(a) {
        return a instanceof Cd && a.constructor === Cd ? a.C : "type_error:TrustedResourceUrl"
    }
    var Ed = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        Fd = {};

    function Gd(a) {
        var b = wd();
        a = b ? b.createScriptURL(a) : a;
        return new Cd(a, Fd)
    }

    function Hd(a, b, c) {
        if (null == c) return b;
        if (typeof c === u) return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    };

    function I(a) {
        this.C = a
    }
    I.prototype.toString = function() {
        return this.C.toString()
    };
    I.prototype.va = !0;
    I.prototype.na = function() {
        return this.C.toString()
    };

    function Id(a) {
        return a instanceof I && a.constructor === I ? a.C : "type_error:SafeUrl"
    }
    var Jd = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
        Kd = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function Ld(a) {
        a instanceof I || (a = typeof a == r && a.va ? a.na() : String(a), Kd.test(a) ? a = new I(a, Md) : (a = String(a).replace(/(%0A|%0D)/g, ""), a = a.match(Jd) ? new I(a, Md) : null));
        return a || Nd
    }
    var Md = {},
        Nd = new I(ra, Md);
    var Pd = {};

    function Qd(a) {
        this.C = a;
        this.va = !0
    }
    Qd.prototype.na = function() {
        return this.C
    };
    Qd.prototype.toString = function() {
        return this.C.toString()
    };

    function Rd(a) {
        return a instanceof Qd && a.constructor === Qd ? a.C : "type_error:SafeStyle"
    }
    var Sd = new Qd("", Pd);

    function Td(a) {
        if (a instanceof I) return 'url("' + Id(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof xd) a = a instanceof xd && a.constructor === xd && a.D === zd ? a.C : "type_error:Const";
        else {
            a = String(a);
            var b = a.replace(Ud, "$1").replace(Ud, "$1").replace(Vd, "url");
            if (Wd.test(b)) {
                if (b = !Xd.test(a)) {
                    for (var c = b = !0, d = 0; d < a.length; d++) {
                        var e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c && Yd(a)
                }
                a = b ? Zd(a) : "zClosurez"
            } else a = "zClosurez"
        }
        if (/[{;}]/.test(a)) throw new fc("Value does not allow [{;}], got: %s.", [a]);
        return a
    }

    function Yd(a) {
        for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            if ("]" == e) {
                if (b) return !1;
                b = !0
            } else if ("[" == e) {
                if (!b) return !1;
                b = !1
            } else if (!b && !c.test(e)) return !1
        }
        return b
    }
    var Wd = RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
        Vd = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"),
        Ud = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g"),
        Xd = /\/\*/;

    function Zd(a) {
        return a.replace(Vd, function(b, c, d, e) {
            var f = "";
            d = d.replace(/^(['"])(.*)\1$/, function(g, h, k) {
                f = h;
                return k
            });
            b = Ld(d).na();
            return c + f + b + f + e
        })
    };
    var $d = {};

    function ae(a) {
        this.C = a;
        this.va = !0
    }
    ae.prototype.toString = function() {
        return this.C.toString()
    };

    function be(a) {
        function b(d) {
            Array.isArray(d) ? d.forEach(b) : c += ce(d)
        }
        var c = "";
        Array.prototype.forEach.call(arguments, b);
        return new ae(c, $d)
    }
    ae.prototype.na = function() {
        return this.C
    };

    function ce(a) {
        return a instanceof ae && a.constructor === ae ? a.C : "type_error:SafeStyleSheet"
    }
    var de = new ae("", $d);
    var ee = {};

    function fe(a) {
        this.C = a;
        this.va = !0
    }
    fe.prototype.na = function() {
        return this.C.toString()
    };
    fe.prototype.toString = function() {
        return this.C.toString()
    };

    function ge(a) {
        return a instanceof fe && a.constructor === fe ? a.C : "type_error:SafeHtml"
    }

    function he(a) {
        a instanceof fe || (a = typeof a == r && a.va ? a.na() : String(a), Hc.test(a) && (-1 != a.indexOf("&") && (a = a.replace(Bc, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(Cc, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(Dc, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(Ec, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(Fc, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(Gc, "&#0;"))), a = ie(a));
        return a
    }

    function je(a) {
        function b(e) {
            Array.isArray(e) ? e.forEach(b) : (e = he(e), d.push(ge(e).toString()))
        }
        var c = he(ke),
            d = [];
        a.forEach(b);
        return ie(d.join(ge(c).toString()))
    }

    function le(a) {
        return je(Array.prototype.slice.call(arguments))
    }

    function ie(a) {
        var b = wd();
        a = b ? b.createHTML(a) : a;
        return new fe(a, ee)
    }
    var ke = new fe(A.trustedTypes && A.trustedTypes.emptyHTML || "", ee),
        me = ie("<br>");
    var ne = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }(function() {
        var a = document.createElement(l),
            b = document.createElement(l);
        b.appendChild(document.createElement(l));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = ge(ke);
        return !b.parentElement
    });

    function oe(a, b) {
        if (ne())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = ge(b)
    }

    function pe(a, b) {
        a: {
            var c = (a.ownerDocument && a.ownerDocument.defaultView || A).document;
            if (c.querySelector && (c = c.querySelector("script[nonce]")) && (c = c.nonce || c.getAttribute(db)) && qe.test(c)) break a;c = ""
        }
        c && a.setAttribute(db, c);a.src = Dd(b)
    }
    var qe = /^[\w+/_-]+[=]{0,2}$/;

    function re(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    re.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    re.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    re.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };

    function se(a, b) {
        this.width = a;
        this.height = b
    }
    w = se.prototype;
    w.aspectRatio = function() {
        return this.width / this.height
    };
    w.ka = function() {
        return !(this.width * this.height)
    };
    w.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    w.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    w.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var te = String.prototype.repeat ? function(a, b) {
        return a.repeat(b)
    } : function(a, b) {
        return Array(b + 1).join(a)
    };

    function ue(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function ve(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };

    function J(a) {
        return we(document, a)
    }

    function we(a, b) {
        return typeof b === u ? a.getElementById(b) : b
    }

    function xe(a, b) {
        var c = b || document;
        return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : ye(document, "*", a, b)
    }

    function K(a, b) {
        var c = b || document;
        if (c.getElementsByClassName) a = c.getElementsByClassName(a)[0];
        else {
            c = document;
            var d = b || c;
            a = d.querySelectorAll && d.querySelector && a ? d.querySelector(a ? "." + a : "") : ye(c, "*", a, b)[0] || null
        }
        return a || null
    }

    function ye(a, b, c, d) {
        a = d || a;
        b = b && "*" != b ? String(b).toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                d = {};
                for (var e = 0, f = 0, g; g = a[f]; f++) b == g.nodeName && (d[e++] = g);
                d.length = e;
                return d
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            d = {};
            for (f = e = 0; g = a[f]; f++) b = g.className, typeof b.split == m && kc(b.split(/\s+/), c) && (d[e++] = g);
            d.length = e;
            return d
        }
        return a
    }

    function ze(a, b) {
        nd(b, function(c, d) {
            c && typeof c == r && c.va && (c = c.na());
            d == lb ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Ae.hasOwnProperty(d) ? a.setAttribute(Ae[d], c) : Ac(d, "aria-") || Ac(d, "data-") ? a.setAttribute(d, c) : a[d] = c
        })
    }
    var Ae = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: db,
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function Be(a, b, c) {
        return Ce(document, arguments)
    }

    function Ce(a, b) {
        var c = b[1],
            d = De(a, String(b[0]));
        c && (typeof c === u ? d.className = c : Array.isArray(c) ? d.className = c.join(" ") : ze(d, c));
        2 < b.length && Ee(a, d, b, 2);
        return d
    }

    function Ee(a, b, c, d) {
        function e(h) {
            h && b.appendChild(typeof h === u ? a.createTextNode(h) : h)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            if (!Wb(f) || Xb(f) && 0 < f.nodeType) e(f);
            else {
                a: {
                    if (f && typeof f.length == q) {
                        if (Xb(f)) {
                            var g = typeof f.item == m || typeof f.item == u;
                            break a
                        }
                        if (typeof f === m) {
                            g = typeof f.item == m;
                            break a
                        }
                    }
                    g = !1
                }
                hc(g ? oc(f) : f, e)
            }
        }
    }

    function De(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function Fe(a) {
        for (var b; b = a.firstChild;) a.removeChild(b)
    }

    function Ge(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    }

    function He(a) {
        var b;
        if (id && (b = a.parentElement)) return b;
        b = a.parentNode;
        return Xb(b) && 1 == b.nodeType ? b : null
    }

    function Ie(a, b) {
        if ("textContent" in a) a.textContent = b;
        else if (3 == a.nodeType) a.data = String(b);
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
            a.firstChild.data = String(b)
        } else Fe(a), a.appendChild((9 == a.nodeType ? a : a.ownerDocument || a.document).createTextNode(String(b)))
    }
    var Je = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        Ke = {
            IMG: " ",
            BR: "\n"
        };

    function Le(a, b, c) {
        if (!(a.nodeName in Je))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in Ke) b.push(Ke[a.nodeName]);
        else
            for (a = a.firstChild; a;) Le(a, b, c), a = a.nextSibling
    }

    function Me(a, b, c) {
        if (!b && !c) return null;
        var d = b ? String(b).toUpperCase() : null;
        return Ne(a, function(e) {
            return (!d || e.nodeName == d) && (!c || typeof e.className === u && kc(e.className.split(/\s+/), c))
        })
    }

    function Ne(a, b) {
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function Oe(a) {
        this.D = a || A.document || document
    }
    Oe.prototype.Ya = function() {
        return we(this.D)
    };
    Oe.prototype.C = function(a, b, c) {
        return Ce(this.D, arguments)
    };

    function Pe(a, b) {
        return De(a.D, b)
    }
    Oe.prototype.appendChild = function(a, b) {
        a.appendChild(b)
    };
    Oe.prototype.append = function(a, b) {
        Ee(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments, 1)
    };

    function Qe() {
        this.M = this.M;
        this.ha = this.ha
    }
    Qe.prototype.M = !1;
    Qe.prototype.isDisposed = function() {
        return this.M
    };
    Qe.prototype.Ba = function() {
        this.M || (this.M = !0, this.W())
    };
    Qe.prototype.W = function() {
        if (this.ha)
            for (; this.ha.length;) this.ha.shift()()
    };

    function Re(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.Na = !1
    }
    Re.prototype.stopPropagation = function() {
        this.Na = !0
    };
    Re.prototype.preventDefault = function() {
        this.defaultPrevented = !0
    };
    var Se = function() {
        if (!A.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
        try {
            var c = function() {};
            A.addEventListener("test", c, b);
            A.removeEventListener("test", c, b)
        } catch (d) {}
        return a
    }();

    function Te(a, b) {
        Re.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.key = "";
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.timeStamp = 0;
        this.C = null;
        a && this.init(a, b)
    }
    F(Te, Re);
    var Ue = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    Te.prototype.init = function(a, b) {
        var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        if (b = a.relatedTarget) {
            if (Yc) {
                a: {
                    try {
                        Uc(b.nodeName);
                        var e = !0;
                        break a
                    } catch (f) {}
                    e = !1
                }
                e || (b = null)
            }
        } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY =
            d.screenY || 0) : (this.offsetX = Zc || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = Zc || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId =
            a.pointerId || 0;
        this.pointerType = typeof a.pointerType === u ? a.pointerType : Ue[a.pointerType] || "";
        this.state = a.state;
        this.timeStamp = a.timeStamp;
        this.C = a;
        a.defaultPrevented && Te.O.preventDefault.call(this)
    };
    Te.prototype.stopPropagation = function() {
        Te.O.stopPropagation.call(this);
        this.C.stopPropagation ? this.C.stopPropagation() : this.C.cancelBubble = !0
    };
    Te.prototype.preventDefault = function() {
        Te.O.preventDefault.call(this);
        var a = this.C;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    };
    var Ve = "closure_listenable_" + (1E6 * Math.random() | 0);

    function We(a) {
        return !(!a || !a[Ve])
    };
    var Xe = 0;

    function Ye(a, b, c, d, e) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.cb = e;
        this.key = ++Xe;
        this.Oa = this.Wa = !1
    }

    function Ze(a) {
        a.Oa = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.cb = null
    };

    function $e(a) {
        this.src = a;
        this.C = {};
        this.D = 0
    }
    $e.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.C[f];
        a || (a = this.C[f] = [], this.D++);
        var g = af(a, b, d, e); - 1 < g ? (b = a[g], c || (b.Wa = !1)) : (b = new Ye(b, this.src, f, !!d, e), b.Wa = c, a.push(b));
        return b
    };

    function bf(a, b) {
        var c = b.type;
        if (!(c in a.C)) return !1;
        var d = mc(a.C[c], b);
        d && (Ze(b), 0 == a.C[c].length && (delete a.C[c], a.D--));
        return d
    }

    function cf(a) {
        var b = 0,
            c;
        for (c in a.C) {
            for (var d = a.C[c], e = 0; e < d.length; e++) ++b, Ze(d[e]);
            delete a.C[c];
            a.D--
        }
    }

    function df(a, b, c, d, e) {
        a = a.C[b.toString()];
        b = -1;
        a && (b = af(a, c, d, e));
        return -1 < b ? a[b] : null
    }

    function af(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.Oa && f.listener == b && f.capture == !!c && f.cb == d) return e
        }
        return -1
    };
    var ef = "closure_lm_" + (1E6 * Math.random() | 0),
        ff = {},
        gf = 0;

    function hf(a, b, c, d, e) {
        if (d && d.once) return jf(a, b, c, d, e);
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++) hf(a, b[f], c, d, e);
            return null
        }
        c = kf(c);
        return We(a) ? a.fa.add(String(b), c, !1, Xb(d) ? !!d.capture : !!d, e) : lf(a, b, c, !1, d, e)
    }

    function lf(a, b, c, d, e, f) {
        if (!b) throw Error("Invalid event type");
        var g = Xb(e) ? !!e.capture : !!e,
            h = mf(a);
        h || (a[ef] = h = new $e(a));
        c = h.add(b, c, d, g, f);
        if (c.proxy) return c;
        d = nf();
        c.proxy = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) Se || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent) a.attachEvent( of (b.toString()), d);
        else if (a.addListener && a.removeListener) a.addListener(d);
        else throw Error("addEventListener and attachEvent are unavailable.");
        gf++;
        return c
    }

    function nf() {
        function a(c) {
            return b.call(a.src, a.listener, c)
        }
        var b = pf;
        return a
    }

    function jf(a, b, c, d, e) {
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++) jf(a, b[f], c, d, e);
            return null
        }
        c = kf(c);
        return We(a) ? a.fa.add(String(b), c, !0, Xb(d) ? !!d.capture : !!d, e) : lf(a, b, c, !0, d, e)
    }

    function qf(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) qf(a, b[f], c, d, e);
        else d = Xb(d) ? !!d.capture : !!d, c = kf(c), We(a) ? (a = a.fa, b = String(b).toString(), b in a.C && (f = a.C[b], c = af(f, c, d, e), -1 < c && (Ze(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.C[b], a.D--)))) : a && (a = mf(a)) && (c = df(a, b, c, d, e)) && rf(c)
    }

    function rf(a) {
        if (typeof a === q || !a || a.Oa) return !1;
        var b = a.src;
        if (We(b)) return bf(b.fa, a);
        var c = a.type,
            d = a.proxy;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent( of (c), d) : b.addListener && b.removeListener && b.removeListener(d);
        gf--;
        (c = mf(b)) ? (bf(c, a), 0 == c.D && (c.src = null, b[ef] = null)) : Ze(a);
        return !0
    }

    function sf(a) {
        if (a)
            if (We(a)) a.fa && cf(a.fa);
            else if (a = mf(a)) {
            var b = 0,
                c;
            for (c in a.C)
                for (var d = a.C[c].concat(), e = 0; e < d.length; ++e) rf(d[e]) && ++b
        }
    }

    function of (a) {
        return a in ff ? ff[a] : ff[a] = "on" + a
    }

    function pf(a, b) {
        if (a.Oa) a = !0;
        else {
            b = new Te(b, this);
            var c = a.listener,
                d = a.cb || a.src;
            a.Wa && rf(a);
            a = c.call(d, b)
        }
        return a
    }

    function mf(a) {
        a = a[ef];
        return a instanceof $e ? a : null
    }
    var tf = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function kf(a) {
        if (typeof a === m) return a;
        a[tf] || (a[tf] = function(b) {
            return a.handleEvent(b)
        });
        return a[tf]
    };

    function uf(a) {
        Qe.call(this);
        this.D = a;
        this.C = {}
    }
    F(uf, Qe);
    var vf = [];

    function wf(a, b, c, d) {
        Array.isArray(c) || (c && (vf[0] = c.toString()), c = vf);
        for (var e = 0; e < c.length; e++) {
            var f = hf(b, c[e], d || a.handleEvent, !1, a.D || a);
            if (!f) break;
            a.C[f.key] = f
        }
    }

    function xf(a, b, c, d, e, f) {
        if (Array.isArray(c))
            for (var g = 0; g < c.length; g++) xf(a, b, c[g], d, e, f);
        else d = d || a.handleEvent, e = Xb(e) ? !!e.capture : !!e, f = f || a.D || a, d = kf(d), e = !!e, c = We(b) ? df(b.fa, String(c), d, e, f) : b ? (b = mf(b)) ? df(b, c, d, e, f) : null : null, c && (rf(c), delete a.C[c.key])
    }

    function yf(a) {
        nd(a.C, function(b, c) {
            this.C.hasOwnProperty(c) && rf(b)
        }, a);
        a.C = {}
    }
    uf.prototype.W = function() {
        uf.O.W.call(this);
        yf(this)
    };
    uf.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };

    function zf() {
        Qe.call(this);
        this.fa = new $e(this);
        this.jd = this;
        this.xb = null
    }
    F(zf, Qe);
    zf.prototype[Ve] = !0;
    zf.prototype.addEventListener = function(a, b, c, d) {
        hf(this, a, b, c, d)
    };
    zf.prototype.removeEventListener = function(a, b, c, d) {
        qf(this, a, b, c, d)
    };

    function Af(a, b) {
        var c = a.xb;
        if (c) {
            var d = [];
            for (var e = 1; c; c = c.xb) d.push(c), ++e
        }
        a = a.jd;
        c = b.type || b;
        typeof b === u ? b = new Re(b, a) : b instanceof Re ? b.target = b.target || a : (e = b, b = new Re(c, a), ud(b, e));
        e = !0;
        if (d)
            for (var f = d.length - 1; !b.Na && 0 <= f; f--) {
                var g = b.currentTarget = d[f];
                e = Bf(g, c, !0, b) && e
            }
        b.Na || (g = b.currentTarget = a, e = Bf(g, c, !0, b) && e, b.Na || (e = Bf(g, c, !1, b) && e));
        if (d)
            for (f = 0; !b.Na && f < d.length; f++) g = b.currentTarget = d[f], e = Bf(g, c, !1, b) && e
    }
    zf.prototype.W = function() {
        zf.O.W.call(this);
        this.fa && cf(this.fa);
        this.xb = null
    };

    function Bf(a, b, c, d) {
        b = a.fa.C[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.Oa && g.capture == c) {
                var h = g.listener,
                    k = g.cb || g.src;
                g.Wa && bf(a.fa, g);
                e = !1 !== h.call(k, d) && e
            }
        }
        return e && !d.defaultPrevented
    };

    function Cf(a, b) {
        this.F = a;
        this.G = b;
        this.D = 0;
        this.C = null
    }
    Cf.prototype.get = function() {
        if (0 < this.D) {
            this.D--;
            var a = this.C;
            this.C = a.next;
            a.next = null
        } else a = this.F();
        return a
    };

    function Df(a, b) {
        a.G(b);
        100 > a.D && (a.D++, b.next = a.C, a.C = b)
    };
    var Ef;

    function Ff() {
        var a = A.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !H("Presto") && (a = function() {
            var e = De(document, "IFRAME");
            e.style.display = p;
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.close();
            var g = "callImmediate" + Math.random(),
                h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = B(function(k) {
                if (("*" == h || k.origin == h) && k.data == g) this.port1.onmessage()
            }, this);
            f.addEventListener("message",
                e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    f.postMessage(g, h)
                }
            }
        });
        if ("undefined" !== typeof a && !Oc()) {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() {
                if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.Wb;
                    c.Wb = null;
                    e()
                }
            };
            return function(e) {
                d.next = {
                    Wb: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return function(e) {
            A.setTimeout(e, 0)
        }
    };

    function Gf(a) {
        A.setTimeout(function() {
            throw a;
        }, 0)
    };

    function If() {
        this.D = this.C = null
    }
    If.prototype.add = function(a, b) {
        var c = Jf.get();
        c.set(a, b);
        this.D ? this.D.next = c : this.C = c;
        this.D = c
    };

    function Kf() {
        var a = Lf,
            b = null;
        a.C && (b = a.C, a.C = a.C.next, a.C || (a.D = null), b.next = null);
        return b
    }
    var Jf = new Cf(function() {
        return new Mf
    }, function(a) {
        return a.reset()
    });

    function Mf() {
        this.next = this.scope = this.C = null
    }
    Mf.prototype.set = function(a, b) {
        this.C = a;
        this.scope = b;
        this.next = null
    };
    Mf.prototype.reset = function() {
        this.next = this.scope = this.C = null
    };
    var Nf, Of = !1,
        Lf = new If;

    function Pf(a, b) {
        Nf || Qf();
        Of || (Nf(), Of = !0);
        Lf.add(a, b)
    }

    function Qf() {
        if (A.Promise && A.Promise.resolve) {
            var a = A.Promise.resolve(void 0);
            Nf = function() {
                a.then(Rf)
            }
        } else Nf = function() {
            var b = Rf;
            typeof A.setImmediate !== m || A.Window && A.Window.prototype && (Mc() || !H(ea)) && A.Window.prototype.setImmediate == A.setImmediate ? (Ef || (Ef = Ff()), Ef(b)) : A.setImmediate(b)
        }
    }

    function Rf() {
        for (var a; a = Kf();) {
            try {
                a.C.call(a.scope)
            } catch (b) {
                Gf(b)
            }
            Df(Jf, a)
        }
        Of = !1
    };

    function Sf(a) {
        if (!a) return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };

    function Tf(a) {
        this.C = 0;
        this.M = void 0;
        this.G = this.D = this.F = null;
        this.J = this.K = !1;
        if (a != ld) try {
            var b = this;
            a.call(void 0, function(c) {
                Uf(b, 2, c)
            }, function(c) {
                Uf(b, 3, c)
            })
        } catch (c) {
            Uf(this, 3, c)
        }
    }

    function Vf() {
        this.next = this.F = this.D = this.G = this.C = null;
        this.J = !1
    }
    Vf.prototype.reset = function() {
        this.F = this.D = this.G = this.C = null;
        this.J = !1
    };
    var Wf = new Cf(function() {
        return new Vf
    }, function(a) {
        a.reset()
    });

    function Xf(a, b, c) {
        var d = Wf.get();
        d.G = a;
        d.D = b;
        d.F = c;
        return d
    }

    function Yf() {
        var a, b, c = new Tf(function(d, e) {
            a = d;
            b = e
        });
        return new Zf(c, a, b)
    }
    Tf.prototype.then = function(a, b, c) {
        return $f(this, typeof a === m ? a : null, typeof b === m ? b : null, c)
    };
    Tf.prototype.$goog_Thenable = !0;
    Tf.prototype.cancel = function(a) {
        if (0 == this.C) {
            var b = new ag(a);
            Pf(function() {
                bg(this, b)
            }, this)
        }
    };

    function bg(a, b) {
        if (0 == a.C)
            if (a.F) {
                var c = a.F;
                if (c.D) {
                    for (var d = 0, e = null, f = null, g = c.D; g && (g.J || (d++, g.C == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                    e && (0 == c.C && 1 == d ? bg(c, b) : (f ? (d = f, d.next == c.G && (c.G = d), d.next = d.next.next) : cg(c), dg(c, e, 3, b)))
                }
                a.F = null
            } else Uf(a, 3, b)
    }

    function eg(a, b) {
        a.D || 2 != a.C && 3 != a.C || fg(a);
        a.G ? a.G.next = b : a.D = b;
        a.G = b
    }

    function $f(a, b, c, d) {
        var e = Xf(null, null, null);
        e.C = new Tf(function(f, g) {
            e.G = b ? function(h) {
                try {
                    var k = b.call(d, h);
                    f(k)
                } catch (n) {
                    g(n)
                }
            } : f;
            e.D = c ? function(h) {
                try {
                    var k = c.call(d, h);
                    void 0 === k && h instanceof ag ? g(h) : f(k)
                } catch (n) {
                    g(n)
                }
            } : g
        });
        e.C.F = a;
        eg(a, e);
        return e.C
    }
    Tf.prototype.R = function(a) {
        this.C = 0;
        Uf(this, 2, a)
    };
    Tf.prototype.T = function(a) {
        this.C = 0;
        Uf(this, 3, a)
    };

    function Uf(a, b, c) {
        if (0 == a.C) {
            a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
            a.C = 1;
            a: {
                var d = c,
                    e = a.R,
                    f = a.T;
                if (d instanceof Tf) {
                    eg(d, Xf(e || ld, f || null, a));
                    var g = !0
                } else if (Sf(d)) d.then(e, f, a),
                g = !0;
                else {
                    if (Xb(d)) try {
                        var h = d.then;
                        if (typeof h === m) {
                            gg(d, h, e, f, a);
                            g = !0;
                            break a
                        }
                    } catch (k) {
                        f.call(a, k);
                        g = !0;
                        break a
                    }
                    g = !1
                }
            }
            g || (a.M = c, a.C = b, a.F = null, fg(a), 3 != b || c instanceof ag || hg(a, c))
        }
    }

    function gg(a, b, c, d, e) {
        function f(k) {
            h || (h = !0, d.call(e, k))
        }

        function g(k) {
            h || (h = !0, c.call(e, k))
        }
        var h = !1;
        try {
            b.call(a, g, f)
        } catch (k) {
            f(k)
        }
    }

    function fg(a) {
        a.K || (a.K = !0, Pf(a.L, a))
    }

    function cg(a) {
        var b = null;
        a.D && (b = a.D, a.D = b.next, b.next = null);
        a.D || (a.G = null);
        return b
    }
    Tf.prototype.L = function() {
        for (var a; a = cg(this);) dg(this, a, this.C, this.M);
        this.K = !1
    };

    function dg(a, b, c, d) {
        if (3 == c && b.D && !b.J)
            for (; a && a.J; a = a.F) a.J = !1;
        if (b.C) b.C.F = null, ig(b, c, d);
        else try {
            b.J ? b.G.call(b.F) : ig(b, c, d)
        } catch (e) {
            jg.call(null, e)
        }
        Df(Wf, b)
    }

    function ig(a, b, c) {
        2 == b ? a.G.call(a.F, c) : a.D && a.D.call(a.F, c)
    }

    function hg(a, b) {
        a.J = !0;
        Pf(function() {
            a.J && jg.call(null, b)
        })
    }
    var jg = Gf;

    function ag(a) {
        dc.call(this, a)
    }
    F(ag, dc);
    ag.prototype.name = "cancel";

    function Zf(a, b, c) {
        this.promise = a;
        this.resolve = b;
        this.reject = c
    };

    function kg(a, b) {
        zf.call(this);
        this.D = a || 1;
        this.C = b || A;
        this.F = B(this.Nd, this);
        this.G = Date.now()
    }
    F(kg, zf);
    w = kg.prototype;
    w.Ra = !1;
    w.la = null;
    w.Nd = function() {
        if (this.Ra) {
            var a = Date.now() - this.G;
            0 < a && a < .8 * this.D ? this.la = this.C.setTimeout(this.F, this.D - a) : (this.la && (this.C.clearTimeout(this.la), this.la = null), Af(this, "tick"), this.Ra && (lg(this), this.start()))
        }
    };
    w.start = function() {
        this.Ra = !0;
        this.la || (this.la = this.C.setTimeout(this.F, this.D), this.G = Date.now())
    };

    function lg(a) {
        a.Ra = !1;
        a.la && (a.C.clearTimeout(a.la), a.la = null)
    }
    w.W = function() {
        kg.O.W.call(this);
        lg(this);
        delete this.C
    };

    function mg(a, b, c) {
        if (typeof a === m) c && (a = B(a, c));
        else if (a && typeof a.handleEvent == m) a = B(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : A.setTimeout(a, b || 0)
    };

    function ng(a, b) {
        var c = b.createRange();
        c.selectNode(b.body);
        a = ie(a);
        return c.createContextualFragment(ge(a))
    };

    function og(a) {
        a = a.nodeName;
        return typeof a === u ? a : "FORM"
    }

    function pg(a) {
        a = a.nodeType;
        return 1 === a || typeof a !== q
    };

    function qg(a, b) {
        var c = new Map(rg);
        this.D = new Set(sg);
        this.C = c;
        this.F = a;
        this.G = b
    };

    function tg(a) {
        return {
            valueOf: a
        }.valueOf()
    };
    var sg = ["ARTICLE", "SECTION", "NAV", "ASIDE", "H1", "H2", "H3", "H4", "H5", "H6", "HEADER", "FOOTER", "ADDRESS", "P", "HR", "PRE", "BLOCKQUOTE", "OL", "UL", "LH", "LI", "DL", "DT", "DD", "FIGURE", "FIGCAPTION", "MAIN", "DIV", "EM", "STRONG", "SMALL", "S", "CITE", "Q", "DFN", "ABBR", "RUBY", "RB", "RT", "RTC", "RP", "DATA", "TIME", "CODE", "VAR", "SAMP", "KBD", "SUB", "SUP", "I", "B", "U", "MARK", "BDI", "BDO", ka, "BR", "WBR", "INS", "DEL", "PICTURE", "PARAM", "TRACK", "MAP", "TABLE", "CAPTION", "COLGROUP", "COL", "TBODY", "THEAD", "TFOOT", "TR", "TD", "TH", "SELECT", "DATALIST",
            "OPTGROUP", "OPTION", "OUTPUT", "PROGRESS", "METER", "FIELDSET", "LEGEND", "DETAILS", "SUMMARY", "MENU", "DIALOG", "SLOT", "CANVAS", "FONT", "CENTER", "ACRONYM", "BASEFONT", "BIG", "DIR", "HGROUP", "STRIKE", "TT"
        ],
        rg = [
            ["A", new Map([
                ["href", {
                    Y: 2
                }]
            ])],
            ["AREA", new Map([
                ["href", {
                    Y: 2
                }]
            ])],
            ["LINK", new Map([
                ["href", {
                    Y: 2,
                    conditions: new Map([
                        ["rel", new Set(["alternate", "author", "bookmark", "canonical", "cite", "help", "icon", "license", "next", "prefetch", "dns-prefetch", eb, "preconnect", "preload", "prev", "search", "subresource"])]
                    ])
                }]
            ])],
            ["SOURCE", new Map([
                ["src", {
                    Y: 1
                }]
            ])],
            ["IMG", new Map([
                ["src", {
                    Y: 1
                }]
            ])],
            ["VIDEO", new Map([
                ["src", {
                    Y: 1
                }]
            ])],
            ["AUDIO", new Map([
                ["src", {
                    Y: 1
                }]
            ])]
        ],
        ug = [qb, "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-current", "aria-disabled", "aria-dropeffect", "aria-expanded", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-label", "aria-level", "aria-live", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-selected",
            "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "alt", "align", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "autoplay", "bgcolor", "border", "cellpadding", "cellspacing", "checked", "color", "cols", "colspan", "controls", "datetime", "disabled", "download", "draggable", "enctype", "face", "formenctype", "frameborder", "height", "hreflang", Xa, "ismap", "label", "lang", "loop", "max", "maxlength", "media", "minlength", "min", "multiple", "muted", db, "open", "placeholder", "preload",
            "rel", "required", "reversed", "role", "rows", "rowspan", "selected", "shape", "size", "sizes", "slot", "span", "spellcheck", "start", "step", "summary", "translate", "type", "valign", "value", "width", "wrap", "itemscope", "itemtype", "itemid", "itemprop", "itemref"
        ],
        vg = [
            ["dir", {
                Y: 3,
                conditions: tg(function() {
                    return new Map([
                        ["dir", new Set(["auto", "ltr", "rtl"])]
                    ])
                })
            }],
            ["async", {
                Y: 3,
                conditions: tg(function() {
                    return new Map([
                        ["async", new Set(["async"])]
                    ])
                })
            }],
            ["cite", {
                Y: 2
            }],
            ["loading", {
                Y: 3,
                conditions: tg(function() {
                    return new Map([
                        ["loading",
                            new Set(["eager", "lazy"])
                        ]
                    ])
                })
            }],
            ["poster", {
                Y: 2
            }],
            ["target", {
                Y: 3,
                conditions: tg(function() {
                    return new Map([
                        ["target", new Set(["_self", qa])]
                    ])
                })
            }]
        ],
        wg = new qg(new Set(ug), new Map(vg)),
        xg = new qg(new Set(tg(function() {
            return ug.concat(["class", "id"])
        })), new Map(tg(function() {
            return vg.concat([
                [lb, {
                    Y: 4
                }]
            ])
        })));

    function yg(a) {
        this.Ia = a
    }

    function zg(a) {
        return new yg(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    }
    var Ag = [zg("data"), zg("http"), zg("https"), zg("mailto"), zg("ftp"), new yg(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })];

    function Bg(a) {
        var b = void 0 === b ? Ag : b;
        a: if (b = void 0 === b ? Ag : b, !(a instanceof I)) {
            for (var c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d instanceof yg && d.Ia(a)) {
                    a = new I(a, Md);
                    break a
                }
            }
            a = void 0
        }
        return a || Nd
    }
    var Cg = tg(function() {
        return typeof URL === m
    });

    function Dg(a) {
        if (!Cg) {
            a: {
                var b = document.createElement("a");
                try {
                    b.href = a
                } catch (c) {
                    a = void 0;
                    break a
                }
                a = b.protocol;a = ":" === a || "" === a ? Ya : a
            }
            return a
        }
        try {
            b = new URL(a)
        } catch (c) {
            return Ya
        }
        return b.protocol
    }
    var Eg = ["data:", "http:", Ya, "mailto:", "ftp:"];

    function Fg(a) {
        this.D = a;
        this.changes = []
    }

    function Gg(a) {
        var b = Hg;
        b.changes = [];
        a = b.C(a);
        if (0 !== b.changes.length) throw Error("");
        return a
    }
    Fg.prototype.C = function(a) {
        var b = document.implementation.createHTMLDocument(""),
            c = b.body;
        c.appendChild(Ig(this, a, b));
        a = (new XMLSerializer).serializeToString(c);
        a = a.slice(a.indexOf(">") + 1, a.lastIndexOf("</"));
        return ie(a)
    };

    function Ig(a, b, c) {
        b = ng(b, c);
        b = document.createTreeWalker(b, 5, function(h) {
            return Jg(a, h)
        }, !1);
        for (var d = b.nextNode(), e = c.createDocumentFragment(), f = e; null !== d;) {
            var g = void 0;
            if (3 === d.nodeType) g = document.createTextNode(d.data);
            else if (pg(d)) g = Kg(a, d, c);
            else throw Error("");
            f.appendChild(g);
            if (d = b.firstChild()) f = g;
            else
                for (; !(d = b.nextSibling()) && (d = b.parentNode());) f = f.parentNode
        }
        return e
    }

    function Kg(a, b, c) {
        var d = og(b);
        c = c.createElement(d);
        b = b.attributes;
        for (var e = y(b), f = e.next(); !f.done; f = e.next()) {
            var g = f.value;
            f = g.name;
            g = g.value;
            var h = a.D;
            var k = h.C.get(d);
            h = (null == k ? 0 : k.has(f)) ? k.get(f) : h.F.has(f) ? {
                Y: 1
            } : (h = h.G.get(f)) ? h : {
                Y: 0
            };
            a: {
                if (k = h.conditions) {
                    k = y(k);
                    for (var n = k.next(); !n.done; n = k.next()) {
                        var t = y(n.value);
                        n = t.next().value;
                        t = t.next().value;
                        var v = void 0;
                        if ((n = null == (v = b.getNamedItem(n)) ? void 0 : v.value) && !t.has(n)) {
                            k = !1;
                            break a
                        }
                    }
                }
                k = !0
            }
            if (k) switch (h.Y) {
                case 1:
                    Lg(c, f, g);
                    break;
                case 2:
                    h =
                        Dg(g);
                    h = void 0 !== h && -1 !== Eg.indexOf(h.toLowerCase()) ? g : ra;
                    h !== g && Mg(a);
                    Lg(c, f, h);
                    break;
                case 3:
                    Lg(c, f, g.toLowerCase());
                    break;
                case 4:
                    Lg(c, f, g);
                    break;
                case 0:
                    Mg(a)
            } else Mg(a)
        }
        return c
    }

    function Jg(a, b) {
        if (3 === b.nodeType) return 1;
        if (!pg(b)) return 2;
        b = og(b);
        if (null === b) return Mg(a), 2;
        var c = a.D;
        if ("FORM" !== b && (c.D.has(b) || c.C.has(b))) return 1;
        Mg(a);
        return 2
    }

    function Mg(a) {
        0 === a.changes.length && a.changes.push("")
    }

    function Lg(a, b, c) {
        a.setAttribute(b, c)
    }
    var Hg = tg(function() {
            return new Fg(wg)
        }),
        Ng = tg(function() {
            return new Fg(xg)
        });

    function Og(a) {
        var b = void 0 === b ? {} : b;
        if (a instanceof fe) return a;
        a = Pg(String(a));
        b.ge && (a = a.replace(/(^|[\r\n\t ]) /g, "$1&#160;"));
        b.fe && (a = a.replace(/(\r\n|\n|\r)/g, "<br>"));
        b.he && (a = a.replace(/(\t+)/g, '<span style="white-space:pre">$1</span>'));
        return ie(a)
    }

    function Qg(a) {
        var b, c, d = null == (c = (b = window.document).querySelector) ? void 0 : c.call(b, "script[nonce]");
        b = {
            nonce: d ? d.nonce || d.getAttribute(db) || "" : ""
        };
        b = void 0 === b ? {} : b;
        a = (a instanceof Bd && a.constructor === Bd ? a.C : "type_error:SafeScript").toString();
        c = "<script";
        b.id && (c += ' id="' + Pg(b.id) + '"');
        b.nonce && (c += ' nonce="' + Pg(b.nonce) + '"');
        b.type && (c += ' type="' + Pg(b.type) + '"');
        b.defer && (c += " defer");
        return ie(c + (">" + a + "\x3c/script>"))
    }

    function Pg(a) {
        return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    }

    function Rg(a) {
        var b = Og("");
        return ie(a.map(function(c) {
            return ge(Og(c))
        }).join(ge(b).toString()))
    }
    var Sg = /^[a-z][a-z\d-]*$/i,
        Tg = ["APPLET", "BASE", "EMBED", "IFRAME", "LINK", "MATH", "META", "OBJECT", ja, la, "SVG", "TEMPLATE"],
        Ug = "AREA BR COL COMMAND HR IMG INPUT KEYGEN PARAM SOURCE TRACK WBR".split(" "),
        Vg = ["action", "formaction", "href"];

    function Wg(a) {
        var b = {};
        if (!Sg.test("body")) throw Error("");
        if (-1 !== Tg.indexOf("BODY")) throw Error("");
        var c = "<body";
        b && (c += Xg(b));
        Array.isArray(a) || (a = void 0 === a ? [] : [a]); - 1 !== Ug.indexOf("BODY") ? c += ">" : (a = Rg(a.map(function(d) {
            return d instanceof fe ? d : Og(String(d))
        })), c += ">" + a.toString() + "</body>");
        return ie(c)
    }

    function Xg(a) {
        for (var b = "", c = Object.keys(a), d = 0; d < c.length; d++) {
            var e = c[d],
                f = a[e];
            if (!Sg.test(e)) throw Error("");
            if (void 0 !== f && null !== f) {
                if (/^on/i.test(e)) throw Error(""); - 1 !== Vg.indexOf(e.toLowerCase()) && (f instanceof I ? f = f.toString() : (f = String(f), f = "javascript:" !== Dg(f) ? f : void 0, f = f || ra));
                e = e + '="' + Og(String(f)) + '"';
                b += " " + e
            }
        }
        return b
    };

    function Yg() {
        this.J = {};
        this.C = {};
        this.F = {};
        this.G = null;
        this.D = []
    }
    Ub(Yg);

    function Zg(a) {
        var b = Yg.Za(),
            c = b.J,
            d = b.C;
        d.lightbox ? a(d.lightbox[1]) : c.lightbox ? c.lightbox.push([1, a]) : (c.lightbox = [
            [1, a]
        ], typeof b.G === u ? $g(b, "lightbox") : b.D.push("lightbox"))
    }

    function ah() {
        return function() {
            var a = arguments;
            Zg(function(b) {
                b.apply(null, a)
            })
        }
    }
    Yg.prototype.K = function(a, b) {
        return a + "_" + b + ".js"
    };

    function bh(a) {
        eval(a)
    }
    Yg.prototype.init = function(a, b) {
        D("__gjsload__", bh);
        this.G = a.replace(/\.js$/, "");
        b && (this.K = b);
        this.D.forEach(function(c) {
            $g(this, c)
        }, this);
        lc(this.D)
    };

    function $g(a, b) {
        mg(function() {
            if (!this.C[b]) {
                var c = this.K(this.G, b),
                    d = qd(this.F, c);
                this.F[b] = c;
                d || (d = Be(ja, {
                    type: nb
                }), c = Gd(null === c ? "null" : void 0 === c ? "undefined" : c), pe(d, c), document.body.appendChild(d))
            }
        }, 0, a)
    };

    function ch(a) {
        try {
            return A.JSON.parse(a)
        } catch (b) {}
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
            return eval("(" + a + ")")
        } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    };

    function dh() {}
    dh.prototype.C = null;

    function eh(a) {
        var b;
        (b = a.C) || (b = {}, fh(a) && (b[0] = !0, b[1] = !0), b = a.C = b);
        return b
    };
    var gh;

    function hh() {}
    F(hh, dh);

    function ih(a) {
        return (a = fh(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    }

    function fh(a) {
        if (!a.D && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d), a.D = d
                } catch (e) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.D
    }
    gh = new hh;
    var jh = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function kh(a, b) {
        if (a) {
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].indexOf("="),
                    e = null;
                if (0 <= d) {
                    var f = a[c].substring(0, d);
                    e = a[c].substring(d + 1)
                } else f = a[c];
                b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
            }
        }
    };

    function lh(a) {
        zf.call(this);
        this.headers = new Map;
        this.da = a || null;
        this.F = !1;
        this.Z = this.C = null;
        this.Ha = "";
        this.J = 0;
        this.G = this.Ga = this.T = this.ta = !1;
        this.R = 0;
        this.X = null;
        this.L = "";
        this.yb = this.K = !1
    }
    F(lh, zf);
    var mh = /^https?$/i,
        nh = ["POST", "PUT"],
        oh = [];

    function ph(a, b, c, d) {
        var e = new lh;
        oh.push(e);
        b && e.fa.add(Aa, b, !1, void 0, void 0);
        e.fa.add(fb, e.ld, !0, void 0, void 0);
        qh(e, a, c, d)
    }
    w = lh.prototype;
    w.ld = function() {
        this.Ba();
        mc(oh, this)
    };
    w.hc = function() {
        return this.L
    };
    w.jc = function() {
        return this.K
    };

    function qh(a, b, c, d, e) {
        if (a.C) throw Error("[goog.net.XhrIo] Object is active with another request=" + a.Ha + "; newUri=" + b);
        c = c ? c.toUpperCase() : ha;
        a.Ha = b;
        a.J = 0;
        a.ta = !1;
        a.F = !0;
        a.C = a.da ? ih(a.da) : ih(gh);
        a.Z = a.da ? eh(a.da) : eh(gh);
        a.C.onreadystatechange = B(a.lc, a);
        try {
            a.Ga = !0, a.C.open(c, String(b), !0), a.Ga = !1
        } catch (h) {
            rh(a);
            return
        }
        b = d || "";
        d = new Map(a.headers);
        if (e)
            if (Object.getPrototypeOf(e) === Object.prototype)
                for (var f in e) d.set(f, e[f]);
            else if (typeof e.keys === m && typeof e.get === m) {
            f = y(e.keys());
            for (var g = f.next(); !g.done; g =
                f.next()) g = g.value, d.set(g, e.get(g))
        } else throw Error("Unknown input type for opt_headers: " + String(e));
        e = Array.from(d.keys()).find(function(h) {
            return "content-type" == h.toLowerCase()
        });
        f = A.FormData && b instanceof A.FormData;
        !kc(nh, c) || e || f || d.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        c = y(d);
        for (e = c.next(); !e.done; e = c.next()) d = y(e.value), e = d.next().value, d = d.next().value, a.C.setRequestHeader(e, d);
        a.L && (a.C.responseType = a.L);
        "withCredentials" in a.C && a.C.withCredentials !== a.K &&
            (a.C.withCredentials = a.K);
        try {
            sh(a), 0 < a.R && (a.yb = th(a.C), a.yb ? (a.C.timeout = a.R, a.C.ontimeout = B(a.za, a)) : a.X = mg(a.za, a.R, a)), a.T = !0, a.C.send(b), a.T = !1
        } catch (h) {
            rh(a)
        }
    }

    function th(a) {
        return Wc && typeof a.timeout === q && void 0 !== a.ontimeout
    }
    w.za = function() {
        "undefined" != typeof Sb && this.C && (this.J = 8, Af(this, "timeout"), this.abort(8))
    };

    function rh(a) {
        a.F = !1;
        a.C && (a.G = !0, a.C.abort(), a.G = !1);
        a.J = 5;
        uh(a);
        vh(a)
    }

    function uh(a) {
        a.ta || (a.ta = !0, Af(a, Aa), Af(a, Qa))
    }
    w.abort = function(a) {
        this.C && this.F && (this.F = !1, this.G = !0, this.C.abort(), this.G = !1, this.J = a || 7, Af(this, Aa), Af(this, "abort"), vh(this))
    };
    w.W = function() {
        this.C && (this.F && (this.F = !1, this.G = !0, this.C.abort(), this.G = !1), vh(this, !0));
        lh.O.W.call(this)
    };
    w.lc = function() {
        this.isDisposed() || (this.Ga || this.T || this.G ? wh(this) : this.Cd())
    };
    w.Cd = function() {
        wh(this)
    };

    function wh(a) {
        if (a.F && "undefined" != typeof Sb && (!a.Z[1] || 4 != (a.C ? a.C.readyState : 0) || 2 != xh(a)))
            if (a.T && 4 == (a.C ? a.C.readyState : 0)) mg(a.lc, 0, a);
            else if (Af(a, "readystatechange"), 4 == (a.C ? a.C.readyState : 0)) {
            a.F = !1;
            try {
                yh(a) ? (Af(a, Aa), Af(a, mb)) : (a.J = 6, uh(a))
            } finally {
                vh(a)
            }
        }
    }

    function vh(a, b) {
        if (a.C) {
            sh(a);
            var c = a.C,
                d = a.Z[0] ? function() {} : null;
            a.C = null;
            a.Z = null;
            b || Af(a, fb);
            try {
                c.onreadystatechange = d
            } catch (e) {}
        }
    }

    function sh(a) {
        a.C && a.yb && (a.C.ontimeout = null);
        a.X && (A.clearTimeout(a.X), a.X = null)
    }
    w.isActive = function() {
        return !!this.C
    };

    function yh(a) {
        var b = xh(a);
        a: switch (b) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                var c = !0;
                break a;
            default:
                c = !1
        }
        if (!c) {
            if (b = 0 === b) a = String(a.Ha).match(jh)[1] || null, !a && A.self && A.self.location && (a = A.self.location.protocol.slice(0, -1)), b = !mh.test(a ? a.toLowerCase() : "");
            c = b
        }
        return c
    }

    function xh(a) {
        try {
            return 2 < (a.C ? a.C.readyState : 0) ? a.C.status : -1
        } catch (b) {
            return -1
        }
    }

    function zh(a) {
        try {
            return a.C ? a.C.responseText : ""
        } catch (b) {
            return ""
        }
    };

    function Ah(a, b) {
        this.C = a[A.Symbol.iterator]();
        this.D = b
    }
    Ah.prototype[Symbol.iterator] = function() {
        return this
    };
    Ah.prototype.next = function() {
        var a = this.C.next();
        return {
            value: a.done ? void 0 : this.D.call(void 0, a.value),
            done: a.done
        }
    };

    function Bh(a, b) {
        return new Ah(a, b)
    };

    function Ch() {}
    Ch.prototype.next = function() {
        return Dh
    };
    var Dh = {
        done: !0,
        value: void 0
    };
    Ch.prototype.ua = function() {
        return this
    };

    function Eh(a) {
        if (a instanceof Fh || a instanceof Gh || a instanceof Hh) return a;
        if (typeof a.next == m) return new Fh(function() {
            return a
        });
        if (typeof a[Symbol.iterator] == m) return new Fh(function() {
            return a[Symbol.iterator]()
        });
        if (typeof a.ua == m) return new Fh(function() {
            return a.ua()
        });
        throw Error("Not an iterator or iterable.");
    }

    function Fh(a) {
        this.C = a
    }
    Fh.prototype.ua = function() {
        return new Gh(this.C())
    };
    Fh.prototype[Symbol.iterator] = function() {
        return new Hh(this.C())
    };
    Fh.prototype.D = function() {
        return new Hh(this.C())
    };

    function Gh(a) {
        this.C = a
    }
    z(Gh, Ch);
    Gh.prototype.next = function() {
        return this.C.next()
    };
    Gh.prototype[Symbol.iterator] = function() {
        return new Hh(this.C)
    };
    Gh.prototype.D = function() {
        return new Hh(this.C)
    };

    function Hh(a) {
        Fh.call(this, function() {
            return a
        });
        this.F = a
    }
    z(Hh, Fh);
    Hh.prototype.next = function() {
        return this.F.next()
    };

    function Ih() {
        this.D = [];
        this.C = []
    }

    function Jh(a) {
        0 === a.D.length && (a.D = a.C, a.D.reverse(), a.C = []);
        return a.D.pop()
    }
    Ih.prototype.V = function() {
        return this.D.length + this.C.length
    };
    Ih.prototype.ka = function() {
        return 0 === this.D.length && 0 === this.C.length
    };
    Ih.prototype.clear = function() {
        this.D = [];
        this.C = []
    };
    Ih.prototype.ca = function() {
        for (var a = [], b = this.D.length - 1; 0 <= b; --b) a.push(this.D[b]);
        var c = this.C.length;
        for (b = 0; b < c; ++b) a.push(this.C[b]);
        return a
    };

    function Kh(a, b) {
        this.D = {};
        this.C = [];
        this.F = this.size = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof Kh)
                for (c = a.ma(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    }
    w = Kh.prototype;
    w.V = function() {
        return this.size
    };
    w.ca = function() {
        Lh(this);
        for (var a = [], b = 0; b < this.C.length; b++) a.push(this.D[this.C[b]]);
        return a
    };
    w.ma = function() {
        Lh(this);
        return this.C.concat()
    };
    w.has = function(a) {
        return Mh(this.D, a)
    };
    w.ka = function() {
        return 0 == this.size
    };
    w.clear = function() {
        this.D = {};
        this.F = this.size = this.C.length = 0
    };
    w.delete = function(a) {
        return Mh(this.D, a) ? (delete this.D[a], --this.size, this.F++, this.C.length > 2 * this.size && Lh(this), !0) : !1
    };

    function Lh(a) {
        if (a.size != a.C.length) {
            for (var b = 0, c = 0; b < a.C.length;) {
                var d = a.C[b];
                Mh(a.D, d) && (a.C[c++] = d);
                b++
            }
            a.C.length = c
        }
        if (a.size != a.C.length) {
            var e = {};
            for (c = b = 0; b < a.C.length;) d = a.C[b], Mh(e, d) || (a.C[c++] = d, e[d] = 1), b++;
            a.C.length = c
        }
    }
    w.get = function(a, b) {
        return Mh(this.D, a) ? this.D[a] : b
    };
    w.set = function(a, b) {
        Mh(this.D, a) || (this.size += 1, this.C.push(a), this.F++);
        this.D[a] = b
    };
    w.forEach = function(a, b) {
        for (var c = this.ma(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    w.keys = function() {
        return Eh(this.ua(!0)).D()
    };
    w.values = function() {
        return Eh(this.ua(!1)).D()
    };
    w.entries = function() {
        var a = this;
        return Bh(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    };
    w.ua = function(a) {
        Lh(this);
        var b = 0,
            c = this.F,
            d = this,
            e = new Ch;
        e.next = function() {
            if (c != d.F) throw Error("The map has changed since the iterator was created");
            if (b >= d.C.length) return Dh;
            var f = d.C[b++];
            return {
                value: a ? f : d.D[f],
                done: !1
            }
        };
        return e
    };

    function Mh(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };

    function Nh(a) {
        if (a.ca && typeof a.ca == m) return a.ca();
        if ("undefined" !== typeof Map && a instanceof Map || "undefined" !== typeof Set && a instanceof Set) return Array.from(a.values());
        if (typeof a === u) return a.split("");
        if (Wb(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        return od(a)
    }

    function Oh(a) {
        if (a.ma && typeof a.ma == m) return a.ma();
        if (!a.ca || typeof a.ca != m) {
            if ("undefined" !== typeof Map && a instanceof Map) return Array.from(a.keys());
            if (!("undefined" !== typeof Set && a instanceof Set)) {
                if (Wb(a) || typeof a === u) {
                    var b = [];
                    a = a.length;
                    for (var c = 0; c < a; c++) b.push(c);
                    return b
                }
                return pd(a)
            }
        }
    }

    function Ph(a, b, c) {
        if (a.forEach && typeof a.forEach == m) a.forEach(b, c);
        else if (Wb(a) || typeof a === u) Array.prototype.forEach.call(a, b, c);
        else
            for (var d = Oh(a), e = Nh(a), f = e.length, g = 0; g < f; g++) b.call(c, e[g], d && d[g], a)
    };

    function Qh() {
        this.C = new Kh;
        this.size = 0
    }

    function Rh(a) {
        var b = typeof a;
        return b == r && a || b == m ? "o" + (Object.prototype.hasOwnProperty.call(a, Yb) && a[Yb] || (a[Yb] = ++Zb)) : b.slice(0, 1) + a
    }
    w = Qh.prototype;
    w.V = function() {
        return this.C.size
    };
    w.add = function(a) {
        this.C.set(Rh(a), a);
        this.size = this.C.size
    };
    w.delete = function(a) {
        var b = this.C;
        a = Rh(a);
        b = b.delete(a);
        this.size = this.C.size;
        return b
    };
    w.clear = function() {
        this.C.clear();
        this.size = 0
    };
    w.ka = function() {
        return 0 === this.C.size
    };
    w.has = function(a) {
        var b = this.C;
        a = Rh(a);
        return b.has(a)
    };
    w.ca = function() {
        return this.C.ca()
    };
    w.values = function() {
        return this.C.values()
    };
    w.ua = function() {
        return this.C.ua(!1)
    };
    Qh.prototype[Symbol.iterator] = function() {
        return this.values()
    };

    function Sh(a, b) {
        Qe.call(this);
        this.L = a || 0;
        this.F = b || 10;
        if (this.L > this.F) throw Error("[goog.structs.Pool] Min can not be greater than max");
        this.C = new Ih;
        this.D = new Qh;
        this.delay = 0;
        this.J = null;
        this.Ua()
    }
    F(Sh, Qe);
    w = Sh.prototype;
    w.ab = function() {
        var a = Date.now();
        if (!(null != this.J && a - this.J < this.delay)) {
            for (var b; 0 < this.C.V() && (b = Jh(this.C), !this.Eb(b));) this.Ua();
            !b && this.V() < this.F && (b = this.Bb());
            b && (this.J = a, this.D.add(b));
            return b
        }
    };
    w.Ka = function(a) {
        this.D.delete(a);
        this.Eb(a) && this.V() < this.F ? this.C.C.push(a) : Th(a)
    };
    w.Ua = function() {
        for (var a = this.C; this.V() < this.L;) {
            var b = a,
                c = this.Bb();
            b.C.push(c)
        }
        for (; this.V() > this.F && 0 < this.C.V();) Th(Jh(a))
    };
    w.Bb = function() {
        return {}
    };

    function Th(a) {
        if (typeof a.Ba == m) a.Ba();
        else
            for (var b in a) a[b] = null
    }
    w.Eb = function(a) {
        return typeof a.kd == m ? a.kd() : !0
    };
    w.V = function() {
        return this.C.V() + this.D.V()
    };
    w.ka = function() {
        return this.C.ka() && this.D.ka()
    };
    w.W = function() {
        Sh.O.W.call(this);
        if (0 < this.D.V()) throw Error("[goog.structs.Pool] Objects not released");
        delete this.D;
        for (var a = this.C; !a.ka();) Th(Jh(a));
        delete this.C
    };

    function Uh(a, b) {
        this.C = a;
        this.D = b
    };

    function Vh(a) {
        this.C = [];
        if (a) a: {
            if (a instanceof Vh) {
                var b = a.ma();
                a = a.ca();
                if (0 >= this.V()) {
                    for (var c = this.C, d = 0; d < b.length; d++) c.push(new Uh(b[d], a[d]));
                    break a
                }
            } else b = pd(a),
            a = od(a);
            for (c = 0; c < b.length; c++) this.insert(b[c], a[c])
        }
    }
    w = Vh.prototype;
    w.insert = function(a, b) {
        var c = this.C;
        c.push(new Uh(a, b));
        a = c.length - 1;
        b = this.C;
        for (c = b[a]; 0 < a;) {
            var d = a - 1 >> 1;
            if (b[d].C > c.C) b[a] = b[d], a = d;
            else break
        }
        b[a] = c
    };
    w.ca = function() {
        for (var a = this.C, b = [], c = a.length, d = 0; d < c; d++) b.push(a[d].D);
        return b
    };
    w.ma = function() {
        for (var a = this.C, b = [], c = a.length, d = 0; d < c; d++) b.push(a[d].C);
        return b
    };
    w.V = function() {
        return this.C.length
    };
    w.ka = function() {
        return 0 === this.C.length
    };
    w.clear = function() {
        this.C.length = 0
    };

    function Wh() {
        Vh.apply(this, arguments)
    }
    z(Wh, Vh);

    function Xh(a, b) {
        this.K = void 0;
        this.G = new Wh;
        Sh.call(this, a, b)
    }
    F(Xh, Sh);
    w = Xh.prototype;
    w.ab = function(a, b) {
        if (!a) return (a = Xh.O.ab.call(this)) && this.delay && (this.K = A.setTimeout(B(this.bb, this), this.delay)), a;
        this.G.insert(void 0 !== b ? b : 100, a);
        this.bb()
    };
    w.bb = function() {
        for (var a = this.G; 0 < a.V();) {
            var b = this.ab();
            if (b) {
                var c = a,
                    d = c.C,
                    e = d.length;
                var f = d[0];
                if (0 >= e) f = void 0;
                else {
                    if (1 == e) d.length = 0;
                    else {
                        d[0] = d.pop();
                        d = 0;
                        c = c.C;
                        e = c.length;
                        for (var g = c[d]; d < e >> 1;) {
                            var h = 2 * d + 1,
                                k = 2 * d + 2;
                            h = k < e && c[k].C < c[h].C ? k : h;
                            if (c[h].C > g.C) break;
                            c[d] = c[h];
                            d = h
                        }
                        c[d] = g
                    }
                    f = f.D
                }
                f.apply(this, [b])
            } else break
        }
    };
    w.Ka = function(a) {
        Xh.O.Ka.call(this, a);
        this.bb()
    };
    w.Ua = function() {
        Xh.O.Ua.call(this);
        this.bb()
    };
    w.W = function() {
        Xh.O.W.call(this);
        A.clearTimeout(this.K);
        this.G.clear();
        this.G = null
    };

    function Yh(a, b, c, d) {
        this.R = a;
        this.T = !!d;
        Xh.call(this, b, c)
    }
    F(Yh, Xh);
    Yh.prototype.Bb = function() {
        var a = new lh,
            b = this.R;
        b && b.forEach(function(c, d) {
            a.headers.set(d, c)
        });
        this.T && (a.K = !0);
        return a
    };
    Yh.prototype.Eb = function(a) {
        return !a.isDisposed() && !a.isActive()
    };

    function Zh(a, b, c, d, e, f) {
        zf.call(this);
        this.G = void 0 !== a ? a : 1;
        this.J = void 0 !== e ? Math.max(0, e) : 0;
        this.K = !!f;
        this.D = new Yh(b, c, d, f);
        this.C = new Kh;
        this.F = new uf(this)
    }
    F(Zh, zf);
    var $h = [fb, Aa, mb, Qa, "abort", "timeout"];

    function ai(a, b, c, d, e, f) {
        if (a.C.get(b)) throw Error("[goog.net.XhrManager] ID in use");
        c = new bi(c, B(a.R, a, b), d, e, f, a.G, a.K);
        a.C.set(b, c);
        b = B(a.L, a, b);
        a.D.ab(b, null)
    }
    Zh.prototype.abort = function(a, b) {
        var c = this.C.get(a);
        if (c) {
            var d = c.gb;
            c.Sb = !0;
            b && (d && (xf(this.F, d, $h, c.Ib), jf(d, fb, function() {
                var e = this.D;
                e.D.delete(d) && e.Ka(d)
            }, !1, this)), this.C.delete(a));
            d && d.abort()
        }
    };
    Zh.prototype.L = function(a, b) {
        var c = this.C.get(a);
        c && !c.gb ? (wf(this.F, b, $h, c.Ib), b.R = Math.max(0, this.J), b.L = c.hc(), b.K = c.jc(), c.gb = b, Af(this, new ci(fb, this, a, b)), di(this, a, b), c.Sb && b.abort()) : (a = this.D, a.D.delete(b) && a.Ka(b))
    };
    Zh.prototype.R = function(a, b) {
        var c = b.target;
        switch (b.type) {
            case fb:
                di(this, a, c);
                break;
            case Aa:
                a: {
                    var d = this.C.get(a);
                    if (7 == c.J || yh(c) || d.Va > d.lb)
                        if (Af(this, new ci(Aa, this, a, c)), d && (d.Yb = !0, d.Xb)) {
                            a = d.Xb.call(c, b);
                            break a
                        }
                    a = null
                }
                return a;
            case mb:
                Af(this, new ci(mb, this, a, c));
                break;
            case "timeout":
            case Qa:
                b = this.C.get(a);
                b.Va > b.lb && Af(this, new ci(Qa, this, a, c));
                break;
            case "abort":
                Af(this, new ci("abort", this, a, c))
        }
        return null
    };

    function di(a, b, c) {
        var d = a.C.get(b);
        !d || d.Yb || d.Va > d.lb ? (d && (xf(a.F, c, $h, d.Ib), a.C.delete(b)), a = a.D, a.D.delete(c) && a.Ka(c)) : (d.Va++, qh(c, d.getUrl(), d.Ad, d.Db(), d.Ec))
    }
    Zh.prototype.W = function() {
        Zh.O.W.call(this);
        this.D.Ba();
        this.D = null;
        this.F.Ba();
        this.F = null;
        this.C.clear();
        this.C = null
    };

    function ci(a, b, c, d) {
        Re.call(this, a, b);
        this.id = c;
        this.gb = d
    }
    F(ci, Re);

    function bi(a, b, c, d, e, f, g) {
        this.C = a;
        this.Ad = c || ha;
        this.F = d;
        this.Ec = null;
        this.lb = void 0 !== f ? f : 1;
        this.Va = 0;
        this.Sb = this.Yb = !1;
        this.Ib = b;
        this.Xb = e;
        this.D = !!g;
        this.gb = null
    }
    bi.prototype.getUrl = function() {
        return this.C
    };
    bi.prototype.Db = function() {
        return this.F
    };
    bi.prototype.jc = function() {
        return this.D
    };
    bi.prototype.hc = function() {
        return ""
    };

    function ei(a, b) {
        if (1 === a.nodeType) {
            var c = a.tagName;
            if (c === ja || c === la) throw Error("");
        }
        a.innerHTML = ge(b)
    };

    function fi(a, b, c, d, e) {
        this.D = a;
        this.G = b;
        this.C = c || null;
        this.data = d || null;
        if (e) {
            if (this.F = e, "displayModeSnippet" != e && e != Ma && e != Na && e != Oa) throw "bad display mode: " + e;
        } else this.F = Oa;
        this.K = !1
    }
    fi.prototype.J = function() {
        return this.D
    };

    function gi(a) {
        this.G = !0;
        this.N = a;
        this.C = null
    }

    function L(a, b) {
        return document.getElementById(a.N.D + "_" + b)
    }

    function hi(a, b) {
        a = L(a, b);
        if (!a) throw "did not find element for id " + b;
        return a
    }
    gi.prototype.F = function() {
        return this.N.data
    };
    gi.prototype.D = function() {
        var a = {};
        a.type = this.C.F();
        a.instanceId = this.N.D;
        a.sectionId = this.N.G;
        a.actionUrl = M.Vb;
        a.quickEditUrl = M.ec + "&widgetType=" + this.C.F() + "&widgetId=" + this.N.D + "&sectionId=" + this.N.G + aa + M.yc;
        return a
    };
    gi.prototype.Fa = function(a, b, c, d) {
        b = b || {};
        window.__wavt && (b.xssi_token = window.__wavt);
        M.Fa(a, b, this.N.D, this.C.F(), c, d)
    };

    function ii(a) {
        var b = -1;
        try {
            b = a.status
        } catch (c) {}
        return b
    }

    function M() {}
    M.Dc = function(a, b) {
        M.Da = {};
        M.ec = a;
        M.Vb = b;
        M.La = {};
        M.hb = new Zh;
        M.kc = 0;
        M.Fb = 0;
        hf(M.hb, fb, function() {
            M.Fb++
        });
        hf(M.hb, Aa, function() {
            M.Fb--
        })
    };
    M.Uc = function(a, b) {
        M.oc = a;
        M.mc = b
    };
    M.cd = function() {
        var a = M.xc();
        document.body.appendChild(a)
    };
    M.Wc = function(a) {
        M.cd();
        if (window.parent == window) {
            var b = "Preview";
            a && (b = a);
            a = M.wc(b);
            document.body.appendChild(a[0]);
            document.body.appendChild(a[1])
        }
    };
    M.yc = "editWidget";
    M.Vc = function(a) {
        M.Od = a
    };
    M.Lb = function() {
        return M.Od
    };
    M.Tc = function(a) {
        M.La = a
    };
    M.Ac = function() {
        var a = {},
            b;
        for (b in M.La) {
            var c = M.La[b];
            a[c.name] = c.data
        }
        c = {};
        for (b in M.Da) c[b] = M.Da[b].H.N.data;
        a.widgets = c;
        return a
    };
    M.Rb = function(a, b) {
        var c = new gi(b);
        a = new window[a](c);
        c.C = a;
        M.Da[b.D] = a;
        M.Kb(a);
        return a
    };
    M.Oc = function(a, b) {
        a = M.Rb(a, b);
        a.H.N.K = !0;
        return a
    };
    M.Kb = function(a) {
        var b = a.H;
        b.N.F != Oa && (b.N.F == Ma && a.ia(), a.H.G = !1)
    };
    M.kb = function(a) {
        return M.Da ? M.Da[a] : null
    };
    M.Mc = function(a, b, c, d, e) {
        var f = "";
        d && (f = "&widgetId=" + d);
        a = M.ec + aa + a + "&sectionId=" + b + "&widgetType=" + c + f;
        if (window.name == e) return window.location.replace(a), window.focus(), window;
        e = window.open(a, e, "width=570,height=600,left=75,top=20,resizable=yes,scrollbars=yes");
        e.focus();
        return e
    };
    M.Lc = function(a) {
        var b = a.getAttribute("id"),
            c = a.parentNode.getAttribute("id");
        a = a.getAttribute("widgetType");
        M.mc && M.mc(c, a, b);
        return !1
    };
    M.Nc = function(a) {
        a = a.parentNode.getAttribute("id");
        M.oc && M.oc(a);
        return !1
    };
    M.Fa = function(a, b, c, d, e, f) {
        M.Rc(a, b, c, d, e, f)
    };
    M.Rc = function(a, b, c, d, e, f) {
        function g() {
            n(this.C) && window.eval(zh(this))
        }
        var h = M.Vb;
        a = ["action=" + encodeURIComponent(a), "widgetId=" + encodeURIComponent(c), "widgetType=" + encodeURIComponent(d), "responseType=js"];
        for (var k in b)
            if (typeof b[k] == r)
                for (c = b[k], d = 0; d < c.length; ++d) a.push(encodeURIComponent(k) + "=" + encodeURIComponent(c[d]));
            else a.push(encodeURIComponent(k) + "=" + encodeURIComponent(b[k]));
        var n = e || ji();
        f == ha ? (h = 0 <= h.indexOf("?") ? h + "&" : h + "?", ai(M.hb, "" + M.kc++, h + a.join("&"), ha, void 0, g)) : ai(M.hb,
            "" + M.kc++, h, "POST", a.join("&"), g)
    };
    M.ib = function(a, b) {
        0 == M.Fb ? a.setTimeout(function() {
            a.close()
        }, b) : a.setTimeout(function() {
            M.ib(a, b)
        }, 200)
    };
    M.Gc = function(a, b) {
        a && (M.ib(a, 100), M.dd(a, b))
    };
    M.dd = function(a, b) {
        if (a) {
            var c = a.document.getElementById(kb);
            c && (c = c.innerHTML);
            c && a && a.opener.parent && a.opener.parent.editor && a.opener.parent.editor.SetSaveMessage(c, b)
        }
    };
    M.ja = function(a, b, c) {
        a = M.Da[a];
        null != c.errors ? (b = window, M.wb(b, c.errors), M.Mb(c, b)) : a.ja(b, c)
    };
    M.Mb = function(a, b) {
        a = a["error-details"];
        for (var c in a) {
            var d = a[c];
            var e = c;
            var f = b.document;
            f || (f = document);
            if (e = f.getElementById("errormessage_" + e)) ei(e, Ng.C(d)), e.className = "errorbox-bad errormsg"
        }
    };

    function ki(a, b) {
        M.wb(a.J, b[jb]);
        M.zc(a.N.D, function(c) {
            window.opener._WidgetManager._OnWidgetConfigured(c, b)
        })
    }
    M.Jc = function(a, b) {
        window.parent && window.parent.editor && b ? M.Qb(a, b) : window.location.replace(window.location.href)
    };
    M.Qb = function(a, b) {
        var c = M.kb(a);
        c.H.N.data = b.data;
        a = document.getElementById(a);
        Fe(a);
        li(a, c)
    };
    M.Cc = function(a, b, c) {
        null != c.errors && (M.wb(window, c.errors), M.Mb(c, window))
    };
    M.Kc = function(a) {
        var b = M.kb(a);
        b && (b.H.N.F == Na ? top.editor.HandleDeleteWidget(b.H.N.C) : (b = b.H.N.C, b.parentNode.removeChild(b)), delete M.Da[a])
    };
    M.zc = function(a, b) {
        if (M.Nb(window)) {
            var c = window.opener;
            b || (b = c._WidgetManager._OnWidgetConfigured);
            b(a);
            c._WidgetManager ? c._WidgetManager._KillPopupDelay(window, a) : M.ib(window, 100)
        } else a = M.Lb() + "?widgetId=" + a, a += "&func=" + encodeURIComponent("_OnWidgetConfigured"), window.location.replace(a)
    };
    M.Nb = function(a) {
        var b = !1;
        try {
            if (a.opener) {
                var c = "X" + a.opener.document.domain;
                c && "X" != c && (b = !0)
            }
        } catch (d) {}
        return b
    };
    M.Sc = "status-msg-yellow-on-white";
    M.wb = function(a, b) {
        a || (a = self);
        var c = a.document.getElementById(kb);
        c && (c.textContent = b);
        (a = a.document.getElementById(jb)) && sc(a, M.Sc)
    };
    M.Qa = function(a, b) {
        if (xc(a, b)) return a;
        if (a)
            for (var c = a.childNodes.length, d = 0; d < c; d++) {
                var e = M.Qa(a.childNodes.item(d), b);
                if (e) return e
            }
        return null
    };
    M.xc = function() {
        var a = window.document.createElement(l);
        a.className = "blogger-clickTrap singleton-element";
        a.style.position = "fixed";
        a.style.top = "0";
        a.style.left = "0";
        a.style.width = "100%";
        a.style.height = "100%";
        a.style.zIndex = "1000";
        a.style.cursor = "default";
        a.onclick = M.ub;
        a.onmousedown = M.ub;
        a.onmouseup = M.ub;
        a.style.background = "white";
        a.style.filter = "alpha(opacity=1)";
        a.style.opacity = ".01";
        a.textContent = "\u00a0";
        return a
    };
    M.wc = function(a) {
        var b = window.document,
            c = M.Jb(b, a);
        a = M.Jb(b, a);
        c.style.backgroundColor = "#000";
        c.style.border = "1px solid #aaa";
        c.style.opacity = ".5";
        a.style.border = "1px solid transparent";
        c.style.zIndex = 1200;
        a.style.zIndex = 1200;
        return [c, a]
    };
    M.Jb = function(a, b) {
        a = a.createElement(l);
        a.style.position = "absolute";
        a.style.top = "75px";
        a.style.left = "-225px";
        a.style.width = "600px";
        a.style.height = "28px";
        a.style.margin = "0";
        a.style.padding = "10px";
        a.style.fontSize = "24px";
        a.style.textAlign = "center";
        a.style.color = "#fff";
        a.style.fontFamily = '"trebuchet ms",verdana,arial,sans-serif';
        a.style.MozTransform = hb;
        a.style.MozTransformOrigin = "50% 0";
        a.style.WebkitTransform = hb;
        a.style.WebkitTransformOrigin = "50% 0";
        a.textContent = b;
        a.className = "singleton-element";
        return a
    };
    M.ub = function(a) {
        a || (a = window.event);
        a && (a.cancelBubble = !0, a.stopPropagation && a.stopPropagation());
        return !1
    };

    function mi() {
        this.C = [];
        for (var a = 0; a < M.La.length; ++a) this.C[this.C.length] = M.La[a]
    }

    function ni(a, b) {
        null == b && (b = "");
        for (var c = a.C.length - 1; 0 <= c; --c)
            if (a.C[c].name == b) return a.C[c].data;
        return null
    }

    function oi(a, b) {
        var c = ni(a, b);
        if (null !== c) return c;
        var d = b.split(".");
        if (1 == d.length) return c = ni(a, ""), c[b];
        c = ni(a, d[0]);
        b = 0;
        c ? b = 1 : c = ni(a, "");
        for (a = b; a < d.length; a++) {
            if (null == c) return null;
            c = c[d[a]]
        }
        return c
    }

    function N(a, b) {
        this.T = a;
        this.H = b
    }
    N.prototype.F = function() {
        return this.T
    };
    N.prototype.M = function() {
        return this.H
    };
    N.prototype.ja = function(a, b) {
        "configure" == a && ki(this.H, b)
    };
    N.prototype.ia = function() {};
    D("_WidgetManager", M);
    M._SetOpenWidgetDialogs = M.Uc;
    M._Init = M.Dc;
    M._SetWidgetRefreshUrl = M.Vc;
    M._GetWidgetRefreshUrl = M.Lb;
    M._DisplayWidget = M.Kb;
    M._GetWidget = M.kb;
    M._HandleControllerResult = M.ja;
    M._HandlePageActionResult = M.Cc;
    M._IsOpenerReachable = M.Nb;
    M._SetDataContext = M.Tc;
    M._SetupPreview = M.Wc;
    M._RegisterWidget = M.Rb;
    M._RegisterNewWidget = M.Oc;
    M._PopupPaneFromParams = M.Mc;
    M._PopupConfig = M.Lc;
    M._PopupToolbox = M.Nc;
    M._KillPopupDelay = M.Gc;
    M._OnWidgetConfigured = M.Jc;
    M._OnWidgetConfiguredWithData = M.Qb;
    M._OnWidgetDeleted = M.Kc;
    D("_WidgetInfo", fi);
    fi.prototype._getInstanceId = fi.prototype.J;
    N.prototype._GetHelper = N.prototype.M;
    gi.prototype._GetData = gi.prototype.F;
    gi.prototype._GenerateWidgetMetadata = gi.prototype.D;
    M._GetAllData = M.Ac;
    D("widget_module_provide", function(a, b, c) {
        var d = Yg.Za(),
            e = d.C,
            f = d.J;
        e[a] || (e[a] = {});
        if (c) e[a][b] = c;
        else if (f[a]) {
            for (b = 0; b < f[a].length; ++b)(0, f[a][b][1])(e[a][f[a][b][0]]);
            delete f[a];
            delete d.F[a]
        }
    });

    function pi(a) {
        N.call(this, "AdSense", a);
        this.H = a
    }
    z(pi, N);
    D("_AdSenseView", pi);

    function qi(a) {
        N.call(this, "BlogArchive", a);
        this.C = a.N
    }
    F(qi, N);
    var ri = "&#9658;&nbsp;";
    w = qi.prototype;
    w.ja = function(a, b) {
        if ("configure" == a) ki(this.H, b);
        else if ("getTitles" == a) {
            a: {
                a = b.path;
                var c = this.C.C.getElementsByTagName("A");
                for (e in c) {
                    var d = c[e];
                    if (d.href == a) {
                        var e = Me(d, "li", "archivedate");
                        break a
                    }
                }
                e = void 0
            }
            a = K("posts", e);
            (c = Me(e, l, xa)) && ze(c, {
                style: "",
                "data-height": ""
            });Fe(a);
            for (c = 0; c < b.posts.length; c++) {
                d = b.posts[c];
                var f = document.createElement("li");
                ei(f, Ng.C("<a href=" + d.url + ">" + d.title + "</a>"));
                a.appendChild(f)
            }
            si(this, e);ti(this, e)
        }
        else qi.O.ja.call(this, a, b)
    };
    w.ia = function() {
        if (L(this.H, "ArchiveList")) {
            var a = ye(document, "a", rb, this.C.C);
            1 > a.length && (a = ye(document, "li", rb, this.C.C));
            if (0 < a.length && a[0].currentStyle) var b = a[0].parentNode.currentStyle.color;
            for (var c = 0; c < a.length; c++) {
                var d = a[c];
                0 < ye(document, l, xa, d).length ? (d.onclick = this.Xc.bind(this), si(this, d)) : d.onclick = this.Yc.bind(this);
                b && (d.style.color = b)
            }
            if (a = L(this.H, "ArchiveMenu")) {
                for (b = 1; b < a.options.length; b++)
                    if (c = a.options[b].value, c == window.location.href || null != window.location.href.match(c)) {
                        a.selectedIndex =
                            b;
                        break
                    }
                a.onchange = this.Bc.bind(this)
            } else
                for (a = ye(document, l, Pa, this.C.C), b = 0; b < a.length; b++) c = a[b], c.addEventListener(va, this.bd.bind(this), !1), c.addEventListener(va, this.Qc.bind(this), !1);
            "rtl" == this.H.N.data.languageDirection && (ri = "&#9668;&nbsp;")
        }
    };
    w.Bc = function() {
        var a = L(this.H, "ArchiveMenu");
        a && "" != a.value && (window.location.href = a.value)
    };
    w.Yc = function(a) {
        a = a || window.event;
        var b = a.currentTarget || a.srcElement;
        b && !xc(b, rb) && (b = b.parentNode);
        a = M.Qa(b, "zippy");
        b = b.parentNode;
        if (xc(b, Ra)) return wc(b, Ra, wa), ei(a, Gg(ri)), uc(a, "toggle-open"), !1;
        wc(b, wa, Ra);
        ei(a, Gg("&#9660;&nbsp;"));
        sc(a, "toggle-open");
        ui(this, b);
        return !1
    };
    w.bd = function(a) {
        a = a || window.event;
        a = a.currentTarget || a.srcElement;
        (a = xc(a, Pa) ? a : Me(a, l, Pa)) && (a = K("menu", a)) && (xc(a, "open") ? uc(a, "open") : sc(a, "open"))
    };
    w.Qc = function(a) {
        a = a || window.event;
        var b = a.currentTarget || a.srcElement;
        if (b = xc(b, "ripple") ? b : Me(b, l, "ripple")) {
            var c = K("splash", b);
            if (!c) {
                c = document.createElement("span");
                sc(c, "splash");
                var d = document.createElement(l);
                sc(d, "splash-wrapper");
                d.appendChild(c);
                b.insertBefore(d, b.firstChild)
            }
            uc(c, "animate");
            d = b.offsetWidth;
            var e = getComputedStyle(b);
            d += parseInt(e.marginLeft) + parseInt(e.marginRight);
            d = Math.max(d, vi(b));
            ze(c, {
                style: "height: " + d + "px; width: " + d + "px; left: " + (a.pageX - b.offsetLeft - d / 2) + "px; top: " +
                    (a.pageY - b.offsetTop - d / 2) + "px;"
            });
            sc(c, "animate")
        }
    };
    w.Xc = function(a) {
        a = a || window.event;
        if (!a.currentTarget || a.currentTarget == a.srcElement || "A" != a.srcElement.tagName) {
            var b = a.currentTarget || a.srcElement;
            b && !xc(b, rb) && (b = b.parentNode);
            a.stopPropagation();
            a = xc(b, "archivedate") ? b : b.parentNode;
            xc(a, Ra) ? (wi(this, a), wc(a, Ra, wa)) : (ui(this, a), ti(this, a), wc(a, wa, Ra))
        }
    };

    function ui(a, b) {
        var c = b.getElementsByTagName("UL");
        0 < c.length && !xc(c[0], "posts") ? c = !1 : (c = M.Qa(b, "post-count"), c = parseInt(c.innerHTML.match(/\d+/), 10), c = b.getElementsByTagName("LI").length < c);
        if (c) {
            var d = K(xa, b);
            c = K("posts", b);
            c || (c = document.createElement("UL"), d ? d.appendChild(c) : b.appendChild(c), sc(c, "posts"));
            d && ze(d, {
                style: "",
                "data-height": ""
            });
            (d = Me(b, l, xa)) && ze(d, {
                style: "",
                "data-height": ""
            });
            d = document.createElement("LI");
            ei(d, Hg.C(a.H.N.data.loadingMessage || "Loading..."));
            c.appendChild(d);
            a.H.Fa("getTitles", {
                path: M.Qa(b, "post-count-link").href
            }, null, ha)
        }
    }

    function ti(a, b) {
        var c = K(xa, b);
        c.getAttribute(Ja) || si(a, b);
        var d = (a = c.getAttribute(Ja) || vi(c)) ? a + "px" : p;
        window.setTimeout(function() {
            ze(c, {
                style: "max-height: " + d + ";"
            })
        }, 10)
    }

    function wi(a, b) {
        var c = K(xa, b);
        c.getAttribute(Ja) || si(a, b);
        window.setTimeout(function() {
            ze(c, {
                style: ab
            })
        }, 10)
    }

    function si(a, b) {
        var c = K(xa, b);
        ze(c, {
            style: "max-height: none;"
        });
        for (var d = 0, e = ye(document, l, xa, c), f = 0; f < e.length; f++) {
            var g = e[f],
                h = Me(g, "li", rb);
            if (xc(h, wa)) {
                var k = g.getAttribute(Ja);
                k || (si(a, h), k = g.getAttribute(Ja));
                d += parseInt(k)
            }
        }
        a = d + vi(c);
        c.setAttribute(Ja, a);
        c.setAttribute(lb, "max-height: " + a + "px;");
        xc(b, wa) && c.setAttribute(lb, ab)
    }

    function vi(a) {
        var b = a.offsetHeight;
        a = getComputedStyle(a);
        return b += parseInt(a.marginTop) + parseInt(a.marginBottom)
    }
    D("_BlogArchiveView", qi);

    function ji() {
        return function(a) {
            return 500 <= ii(a) ? (a.responseText.length ? document.body.innerHTML = a.responseText : window.alert(LayoutsMessages.SERVER_ERROR), !1) : !0
        }
    };

    function li(a, b) {
        var c = M,
            d = a.ownerDocument;
        b = b._GetHelper();
        var e = b._GetData(),
            f = c._GetAllData();
        a = xi(d, a, l, "widget-wrap1");
        a = xi(d, a, l, "widget-wrap2");
        a = xi(d, a, l, "widget-wrap3");
        var g = xi(d, a, l, "widget-content");
        if (a = e.version && 1 < e.version) g.className += " visibility", xi(d, g, l, "layout-widget-state " + (e.isVisible ? sb : "not-visible")).setAttribute(qb, e.visibilityTooltipMessage);
        var h = xi(d, g, l, "layout-title");
        if (e[$a]) {
            var k = xi(d, g, l, Za);
            k.appendChild(d.createTextNode(e[$a]));
            k.setAttribute(qb, e[Za])
        }
        h.appendChild(d.createTextNode(e["layout-title"]));
        e = xi(d, g, "a", "editlink");
        var n = b._GenerateWidgetMetadata();
        e.target = "chooseWidget";
        e.onclick = function() {
            return c._PopupConfig(d.getElementById(n.instanceId))
        };
        a && (e.className += " icon");
        e.appendChild(d.createTextNode(f.messages.edit || "Edit"))
    }

    function xi(a, b, c, d) {
        a = a.createElement(c);
        a.className = d;
        b.appendChild(a);
        return a
    };

    function yi(a) {
        N.call(this, yi.ea, a)
    }
    F(yi, N);
    yi.ea = "Attribution";
    D("_AttributionView", yi);
    Rc();
    Qc();
    Pc();
    var zi = {},
        Ai = null;
    var Bi = "undefined" !== typeof Uint8Array,
        Ci = !Wc && typeof btoa === m;

    function Di() {
        return typeof BigInt === m
    }
    var Ei = !zc,
        Fi = !zc;
    var P = 0,
        Gi = 0;

    function Hi(a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        b && (c = y(Ii(c, a)), b = c.next().value, a = c.next().value, c = b);
        P = c >>> 0;
        Gi = a >>> 0
    }

    function Ji(a, b) {
        b >>>= 0;
        a >>>= 0;
        if (2097151 >= b) var c = "" + (4294967296 * b + a);
        else Di() ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215, b = b >> 16 & 65535, a = (a & 16777215) + 6777216 * c + 6710656 * b, c += 8147497 * b, b *= 2, 1E7 <= a && (c += Math.floor(a / 1E7), a %= 1E7), 1E7 <= c && (b += Math.floor(c / 1E7), c %= 1E7), c = b + Ki(c) + Ki(a));
        return c
    }

    function Ki(a) {
        a = String(a);
        return "0000000".slice(a.length) + a
    }

    function Li() {
        var a = P,
            b = Gi;
        b & 2147483648 ? Di() ? a = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : (b = y(Ii(a, b)), a = b.next().value, b = b.next().value, a = "-" + Ji(a, b)) : a = Ji(a, b);
        return a
    }

    function Mi(a) {
        if (16 > a.length) Hi(Number(a));
        else if (Di()) a = BigInt(a), P = Number(a & BigInt(4294967295)) >>> 0, Gi = Number(a >> BigInt(32) & BigInt(4294967295));
        else {
            var b = +("-" === a[0]);
            Gi = P = 0;
            for (var c = a.length, d = 0 + b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) d = Number(a.slice(d, e)), Gi *= 1E6, P = 1E6 * P + d, 4294967296 <= P && (Gi += Math.trunc(P / 4294967296), Gi >>>= 0, P >>>= 0);
            b && (b = y(Ii(P, Gi)), a = b.next().value, b = b.next().value, P = a, Gi = b)
        }
    }

    function Ii(a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    };
    var Ni;
    Ni = typeof Symbol === m && "symbol" === typeof Symbol() ? Symbol() : void 0;
    var Oi = Math.max,
        Pi = Oi.apply,
        Qi = Object.values({
            Xd: 1,
            Vd: 2,
            Ud: 4,
            ae: 8,
            Zd: 16,
            Yd: 32,
            Pd: 64,
            ce: 128,
            Td: 256,
            Sd: 512,
            Wd: 1024,
            Qd: 2048,
            be: 4096,
            Rd: 8192
        }),
        Ri;
    if (Qi instanceof Array) Ri = Qi;
    else {
        for (var Si = y(Qi), Ti, Ui = []; !(Ti = Si.next()).done;) Ui.push(Ti.value);
        Ri = Ui
    }
    Pi.call(Oi, Math, Ri);
    var Vi = Ni ? function(a, b) {
        a[Ni] |= b
    } : function(a, b) {
        void 0 !== a.xa ? a.xa |= b : Object.defineProperties(a, {
            xa: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    };

    function Wi(a) {
        var b = Xi(a);
        1 !== (b & 1) && (Object.isFrozen(a) && (a = Array.prototype.slice.call(a)), Yi(a, b | 1))
    }
    var Xi = Ni ? function(a) {
            return a[Ni] | 0
        } : function(a) {
            return a.xa | 0
        },
        Zi = Ni ? function(a) {
            return a[Ni]
        } : function(a) {
            return a.xa
        },
        Yi = Ni ? function(a, b) {
            a[Ni] = b
        } : function(a, b) {
            void 0 !== a.xa ? a.xa = b : Object.defineProperties(a, {
                xa: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            })
        };

    function $i() {
        var a = [];
        Vi(a, 1);
        return a
    }

    function aj(a) {
        a = a >> 14 & 1023;
        return 0 === a ? 536870912 : a
    };
    var bj = {},
        cj = {};

    function dj(a) {
        return !(!a || typeof a !== r || a.ee !== cj)
    }

    function ej(a) {
        return null !== a && typeof a === r && !Array.isArray(a) && a.constructor === Object
    }
    var fj = !zc;

    function gj(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        var d = Xi(a);
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
        Yi(a, d | 1);
        return !0
    }
    var hj, ij = [];
    Yi(ij, 55);
    hj = Object.freeze(ij);
    Object.freeze(new function() {});
    Object.freeze(new function() {});

    function jj(a) {
        a = Error(a);
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = "warning";
        return a
    };
    var kj = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function lj(a) {
        var b = typeof a;
        return b === q ? Number.isFinite(a) : b !== u ? !1 : kj.test(a)
    }

    function mj(a) {
        if (null == a) return a;
        if (typeof a === u) {
            if (!a) return;
            a = +a
        }
        if (typeof a === q) return Number.isFinite(a) ? a | 0 : void 0
    }

    function nj(a) {
        return "-" === a[0] ? !1 : 20 > a.length ? !0 : 20 === a.length && 184467 > Number(a.substring(0, 6))
    }

    function oj(a) {
        return "-" === a[0] ? 20 > a.length ? !0 : 20 === a.length && -922337 < Number(a.substring(0, 7)) : 19 > a.length ? !0 : 19 === a.length && 922337 > Number(a.substring(0, 6))
    }

    function pj(a) {
        if (0 > a) {
            Hi(a);
            var b = Ji(P, Gi);
            a = Number(b);
            return Number.isSafeInteger(a) ? a : b
        }
        if (nj(String(a))) return a;
        Hi(a);
        return 4294967296 * Gi + (P >>> 0)
    }

    function qj(a) {
        lj(a);
        a = Math.trunc(a);
        if (!Number.isSafeInteger(a)) {
            Hi(a);
            var b = P,
                c = Gi;
            if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, 0 == b && (c = c + 1 >>> 0);
            b = 4294967296 * c + (b >>> 0);
            a = a ? -b : b
        }
        return a
    }

    function rj(a) {
        lj(a);
        a = Math.trunc(a);
        return 0 <= a && Number.isSafeInteger(a) ? a : pj(a)
    }

    function sj(a) {
        lj(a);
        var b = Math.trunc(Number(a));
        if (Number.isSafeInteger(b)) return String(b);
        b = a.indexOf("."); - 1 !== b && (a = a.substring(0, b));
        oj(a) || (Mi(a), a = Li());
        return a
    }

    function tj(a) {
        lj(a);
        var b = Math.trunc(Number(a));
        if (Number.isSafeInteger(b) && 0 <= b) return String(b);
        b = a.indexOf("."); - 1 !== b && (a = a.substring(0, b));
        nj(a) || (Mi(a), a = Ji(P, Gi));
        return a
    }

    function uj(a) {
        var b = !!b;
        if (!lj(a)) throw jj("uint64");
        typeof a === u ? a = tj(a) : b ? (lj(a), a = Math.trunc(a), 0 <= a && Number.isSafeInteger(a) ? a = String(a) : (b = String(a), nj(b) ? a = b : (Hi(a), a = Ji(P, Gi)))) : a = rj(a);
        return a
    };
    var vj;

    function wj(a, b, c) {
        null == a && (a = vj);
        vj = void 0;
        if (null == a) {
            var d = 96;
            c ? (a = [c], d |= 512) : a = [];
            b && (d = d & -16760833 | (b & 1023) << 14)
        } else {
            if (!Array.isArray(a)) throw Error();
            d = Xi(a);
            if (d & 64) return a;
            d |= 64;
            if (c && (d |= 512, c !== a[0])) throw Error();
            a: {
                c = a;
                var e = c.length;
                if (e) {
                    var f = e - 1;
                    if (ej(c[f])) {
                        d |= 256;
                        b = f - (+!!(d & 512) - 1);
                        if (1024 <= b) throw Error();
                        d = d & -16760833 | (b & 1023) << 14;
                        break a
                    }
                }
                if (b) {
                    b = Math.max(b, e - (+!!(d & 512) - 1));
                    if (1024 < b) throw Error();
                    d = d & -16760833 | (b & 1023) << 14
                }
            }
        }
        Yi(a, d);
        return a
    };

    function xj(a) {
        switch (typeof a) {
            case q:
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case r:
                if (a) {
                    if (Array.isArray(a)) return fj || !gj(a, void 0, 9999) ? a : void 0;
                    if (Bi && null != a && a instanceof Uint8Array) {
                        if (Ci) {
                            for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                            b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                            a = btoa(b)
                        } else {
                            void 0 === b && (b = 0);
                            if (!Ai) {
                                Ai = {};
                                c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
                                d = ["+/=",
                                    "+/", "-_=", "-_.", "-_"
                                ];
                                for (var e = 0; 5 > e; e++) {
                                    var f = c.concat(d[e].split(""));
                                    zi[e] = f;
                                    for (var g = 0; g < f.length; g++) {
                                        var h = f[g];
                                        void 0 === Ai[h] && (Ai[h] = g)
                                    }
                                }
                            }
                            b = zi[b];
                            c = Array(Math.floor(a.length / 3));
                            d = b[64] || "";
                            for (e = f = 0; f < a.length - 2; f += 3) {
                                var k = a[f],
                                    n = a[f + 1];
                                h = a[f + 2];
                                g = b[k >> 2];
                                k = b[(k & 3) << 4 | n >> 4];
                                n = b[(n & 15) << 2 | h >> 6];
                                h = b[h & 63];
                                c[e++] = "" + g + k + n + h
                            }
                            g = 0;
                            h = d;
                            switch (a.length - f) {
                                case 2:
                                    g = a[f + 1], h = b[(g & 15) << 2] || d;
                                case 1:
                                    a = a[f], c[e] = "" + b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + d
                            }
                            a = c.join("")
                        }
                        return a
                    }
                }
        }
        return a
    };

    function yj(a, b, c, d, e, f) {
        if (null != a) {
            if (Array.isArray(a)) a = e && 0 == a.length && Xi(a) & 1 ? void 0 : f && Xi(a) & 2 ? a : zj(a, b, c, void 0 !== d, e, f);
            else if (ej(a)) {
                var g = {},
                    h;
                for (h in a) g[h] = yj(a[h], b, c, d, e, f);
                a = g
            } else a = b(a, d);
            return a
        }
    }

    function zj(a, b, c, d, e, f) {
        var g = d || c ? Xi(a) : 0;
        d = d ? !!(g & 32) : void 0;
        a = Array.prototype.slice.call(a);
        for (var h = 0; h < a.length; h++) a[h] = yj(a[h], b, c, d, e, f);
        c && c(g, a);
        return a
    }

    function Aj(a) {
        return a.yd === bj ? a.toJSON() : xj(a)
    };

    function Bj(a, b) {
        a = a.oa;
        return Cj(a, Zi(a), b)
    }

    function Cj(a, b, c) {
        if (-1 === c) return null;
        if (c >= aj(b)) {
            if (b & 256) return a[a.length - 1][c]
        } else if (b = c + (+!!(b & 512) - 1), b < a.length) return a[b]
    }

    function Dj(a, b, c) {
        var d = a.oa,
            e = Zi(d);
        if (e & 2) throw Error();
        Ej(d, e, b, c);
        return a
    }

    function Ej(a, b, c, d) {
        var e = aj(b);
        if (c >= e) {
            var f = b;
            if (b & 256) var g = a[a.length - 1];
            else {
                if (null == d) return;
                g = a[e + (+!!(b & 512) - 1)] = {};
                f |= 256
            }
            g[c] = d;
            c < e && (a[c + (+!!(b & 512) - 1)] = void 0);
            f !== b && Yi(a, f)
        } else a[c + (+!!(b & 512) - 1)] = d, b & 256 && (a = a[a.length - 1], c in a && delete a[c])
    }

    function Fj(a, b) {
        a = a.oa;
        var c = Zi(a),
            d = Cj(a, c, b);
        var e = null == d || typeof d === q ? d : "NaN" === d || "Infinity" === d || "-Infinity" === d ? Number(d) : void 0;
        null != e && e !== d && Ej(a, c, b, e);
        return e
    }

    function Q(a, b) {
        a = Bj(a, b);
        return null == a || "boolean" === typeof a ? a : typeof a === q ? !!a : void 0
    }

    function R(a, b) {
        return mj(Bj(a, b))
    }

    function Gj(a, b) {
        a = Bj(a, b);
        var c;
        null == a ? c = a : lj(a) ? typeof a === q ? c = qj(a) : c = sj(a) : c = void 0;
        return c
    }

    function Hj(a, b) {
        a = Bj(a, b);
        var c;
        null == a ? c = a : lj(a) ? typeof a === q ? c = rj(a) : c = tj(a) : c = void 0;
        return c
    }

    function Ij(a, b) {
        a = Bj(a, b);
        return null == a || typeof a === u ? a : void 0
    }

    function S(a, b) {
        a = Q(a, b);
        return null != a ? a : !1
    }

    function T(a, b, c) {
        if (null != c && "boolean" !== typeof c) throw Error("Expected boolean but got " + Vb(c) + ": " + c);
        Dj(a, b, c)
    }

    function U(a, b, c) {
        if (null != c) {
            if (typeof c !== q) throw jj("int32");
            if (!Number.isFinite(c)) throw jj("int32");
            c |= 0
        }
        Dj(a, b, c)
    }

    function Jj(a, b, c) {
        if (null != c) {
            var d = !!d;
            if (!lj(c)) throw jj("int64");
            typeof c === u ? c = sj(c) : d ? (lj(c), c = Math.trunc(c), Number.isSafeInteger(c) ? c = String(c) : (d = String(c), oj(d) ? c = d : (Hi(c), c = Li()))) : c = qj(c)
        }
        Dj(a, b, c)
    }

    function Kj(a, b, c) {
        if (null != c && typeof c !== q) throw Error("Value of float/double field must be a number, found " + typeof c + ": " + c);
        Dj(a, b, c)
    }

    function Lj(a, b, c) {
        if (null != c && typeof c !== u) throw Error();
        return Dj(a, b, c)
    };

    function Mj(a, b, c) {
        this.oa = wj(a, b, c)
    }
    Mj.prototype.toJSON = function() {
        var a = zj(this.oa, Aj, void 0, void 0, !1, !1);
        return Nj(this, a, !0)
    };
    Mj.prototype.yd = bj;
    Mj.prototype.toString = function() {
        return Nj(this, this.oa, !1).toString()
    };

    function Nj(a, b, c) {
        var d = a.constructor.ie,
            e = Zi(c ? a.oa : b),
            f = aj(e),
            g = !1;
        if (d && fj) {
            if (!c) {
                b = Array.prototype.slice.call(b);
                var h;
                if (b.length && ej(h = b[b.length - 1]))
                    for (g = 0; g < d.length; g++)
                        if (d[g] >= f) {
                            Object.assign(b[b.length - 1] = {}, h);
                            break
                        }
                g = !0
            }
            f = b;
            c = !c;
            h = Zi(a.oa);
            a = aj(h);
            h = +!!(h & 512) - 1;
            for (var k, n, t = 0; t < d.length; t++)
                if (n = d[t], n < a) {
                    n += h;
                    var v = f[n];
                    null == v ? f[n] = c ? hj : $i() : c && v !== hj && Wi(v)
                } else k || (v = void 0, f.length && ej(v = f[f.length - 1]) ? k = v : f.push(k = {})), v = k[n], null == k[n] ? k[n] = c ? hj : $i() : c && v !== hj && Wi(v)
        }
        k =
            b.length;
        if (!k) return b;
        var E;
        if (ej(f = b[k - 1])) {
            a: {
                var C = f;c = {};a = !1;
                for (var O in C) {
                    h = C[O];
                    if (Array.isArray(h)) {
                        t = h;
                        if (!Fi && gj(h, d, +O) || !Ei && dj(h) && 0 === h.size) h = null;
                        h != t && (a = !0)
                    }
                    null != h ? c[O] = h : a = !0
                }
                if (a) {
                    for (var Od in c) {
                        C = c;
                        break a
                    }
                    C = null
                }
            }
            C != f && (E = !0);k--
        }
        for (e = +!!(e & 512) - 1; 0 < k; k--) {
            O = k - 1;
            f = b[O];
            if (!(null == f || !Fi && gj(f, d, O - e) || !Ei && dj(f) && 0 === f.size)) break;
            var pn = !0
        }
        if (!E && !pn) return b;
        var Hf;
        g ? Hf = b : Hf = Array.prototype.slice.call(b, 0, k);
        b = Hf;
        g && (b.length = k);
        C && b.push(C);
        return b
    };
    /*
     SPDX-License-Identifier: Apache-2.0 */
    var Oj = Object.prototype.hasOwnProperty;

    function Pj() {}
    Pj.prototype = Object.create(null);

    function Qj(a, b, c) {
        a = a.style;
        if (typeof c === u) a.cssText = c;
        else {
            a.cssText = "";
            for (var d in c)
                if (Oj.call(c, d)) {
                    b = a;
                    var e = d,
                        f = c[d];
                    0 <= e.indexOf("-") ? b.setProperty(e, f) : b[e] = f
                }
        }
    }

    function Rj(a, b, c) {
        var d = typeof c;
        d === r || d === m ? a[b] = c : null == c ? a.removeAttribute(b) : (d = 0 === b.lastIndexOf("xml:", 0) ? "http://www.w3.org/XML/1998/namespace" : 0 === b.lastIndexOf("xlink:", 0) ? "http://www.w3.org/1999/xlink" : null) ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)
    }

    function Sj() {
        var a = new Pj;
        a.__default = Rj;
        a.style = Qj;
        return a
    }
    Sj();
    var Tj = Sj();

    function Uj(a, b) {
        this.F = this.L = this.G = "";
        this.M = null;
        this.K = this.D = "";
        this.J = !1;
        var c;
        a instanceof Uj ? (this.J = void 0 !== b ? b : a.J, Vj(this, a.G), this.L = a.L, this.F = a.F, Wj(this, a.M), Xj(this, a.D), Yj(this, Zj(a.C)), this.K = a.K) : a && (c = String(a).match(jh)) ? (this.J = !!b, Vj(this, c[1] || "", !0), this.L = ak(c[2] || ""), this.F = ak(c[3] || "", !0), Wj(this, c[4]), Xj(this, c[5] || "", !0), Yj(this, c[6] || "", !0), this.K = ak(c[7] || "")) : (this.J = !!b, this.C = new bk(null, this.J))
    }
    Uj.prototype.toString = function() {
        var a = [],
            b = this.G;
        b && a.push(ck(b, dk, !0), ":");
        var c = this.F;
        if (c || "file" == b) a.push("//"), (b = this.L) && a.push(ck(b, dk, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.M, null != c && a.push(":", String(c));
        if (c = this.D) this.F && "/" != c.charAt(0) && a.push("/"), a.push(ck(c, "/" == c.charAt(0) ? ek : fk, !0));
        (c = this.C.toString()) && a.push("?", c);
        (c = this.K) && a.push("#", ck(c, gk));
        return a.join("")
    };
    Uj.prototype.resolve = function(a) {
        var b = new Uj(this),
            c = !!a.G;
        c ? Vj(b, a.G) : c = !!a.L;
        c ? b.L = a.L : c = !!a.F;
        c ? b.F = a.F : c = null != a.M;
        var d = a.D;
        if (c) Wj(b, a.M);
        else if (c = !!a.D) {
            if ("/" != d.charAt(0))
                if (this.F && !this.D) d = "/" + d;
                else {
                    var e = b.D.lastIndexOf("/"); - 1 != e && (d = b.D.slice(0, e + 1) + d)
                }
            e = d;
            if (".." == e || "." == e) d = "";
            else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
                d = Ac(e, "/");
                e = e.split("/");
                for (var f = [], g = 0; g < e.length;) {
                    var h = e[g++];
                    "." == h ? d && g == e.length && f.push("") : ".." == h ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(),
                        d && g == e.length && f.push("")) : (f.push(h), d = !0)
                }
                d = f.join("/")
            } else d = e
        }
        c ? Xj(b, d) : c = "" !== a.C.toString();
        c ? Yj(b, Zj(a.C)) : c = !!a.K;
        c && (b.K = a.K);
        return b
    };

    function Vj(a, b, c) {
        a.G = c ? ak(b, !0) : b;
        a.G && (a.G = a.G.replace(/:$/, ""))
    }

    function Wj(a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
            a.M = b
        } else a.M = null
    }

    function Xj(a, b, c) {
        a.D = c ? ak(b, !0) : b;
        return a
    }

    function Yj(a, b, c) {
        b instanceof bk ? (a.C = b, hk(a.C, a.J)) : (c || (b = ck(b, ik)), a.C = new bk(b, a.J))
    }

    function jk(a, b, c) {
        a.C.set(b, c);
        return a
    }

    function kk(a, b) {
        return a instanceof Uj ? new Uj(a) : new Uj(a, b)
    }

    function ak(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }

    function ck(a, b, c) {
        return typeof a === u ? (a = encodeURI(a).replace(b, lk), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
    }

    function lk(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }
    var dk = /[#\/\?@]/g,
        fk = /[#\?:]/g,
        ek = /[#\?]/g,
        ik = /[#\?@]/g,
        gk = /#/g;

    function bk(a, b) {
        this.D = this.C = null;
        this.F = a || null;
        this.G = !!b
    }

    function mk(a) {
        a.C || (a.C = new Map, a.D = 0, a.F && kh(a.F, function(b, c) {
            a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
        }))
    }

    function nk(a) {
        var b = Oh(a);
        if ("undefined" == typeof b) throw Error("Keys are undefined");
        var c = new bk(null);
        a = Nh(a);
        for (var d = 0; d < b.length; d++) {
            var e = b[d],
                f = a[d];
            Array.isArray(f) ? ok(c, e, f) : c.add(e, f)
        }
        return c
    }
    w = bk.prototype;
    w.V = function() {
        mk(this);
        return this.D
    };
    w.add = function(a, b) {
        mk(this);
        this.F = null;
        a = pk(this, a);
        var c = this.C.get(a);
        c || this.C.set(a, c = []);
        c.push(b);
        this.D = this.D + 1;
        return this
    };

    function qk(a, b) {
        mk(a);
        b = pk(a, b);
        a.C.has(b) && (a.F = null, a.D = a.D - a.C.get(b).length, a.C.delete(b))
    }
    w.clear = function() {
        this.C = this.F = null;
        this.D = 0
    };
    w.ka = function() {
        mk(this);
        return 0 == this.D
    };

    function rk(a, b) {
        mk(a);
        b = pk(a, b);
        return a.C.has(b)
    }
    w.forEach = function(a, b) {
        mk(this);
        this.C.forEach(function(c, d) {
            c.forEach(function(e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    };
    w.ma = function() {
        mk(this);
        for (var a = Array.from(this.C.values()), b = Array.from(this.C.keys()), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    w.ca = function(a) {
        mk(this);
        var b = [];
        if (typeof a === u) rk(this, a) && (b = b.concat(this.C.get(pk(this, a))));
        else {
            a = Array.from(this.C.values());
            for (var c = 0; c < a.length; c++) b = b.concat(a[c])
        }
        return b
    };
    w.set = function(a, b) {
        mk(this);
        this.F = null;
        a = pk(this, a);
        rk(this, a) && (this.D = this.D - this.C.get(a).length);
        this.C.set(a, [b]);
        this.D = this.D + 1;
        return this
    };
    w.get = function(a, b) {
        if (!a) return b;
        a = this.ca(a);
        return 0 < a.length ? String(a[0]) : b
    };

    function ok(a, b, c) {
        qk(a, b);
        0 < c.length && (a.F = null, a.C.set(pk(a, b), oc(c)), a.D = a.D + c.length)
    }
    w.toString = function() {
        if (this.F) return this.F;
        if (!this.C) return "";
        for (var a = [], b = Array.from(this.C.keys()), c = 0; c < b.length; c++) {
            var d = b[c],
                e = encodeURIComponent(String(d));
            d = this.ca(d);
            for (var f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        }
        return this.F = a.join("&")
    };

    function Zj(a) {
        var b = new bk;
        b.F = a.F;
        a.C && (b.C = new Map(a.C), b.D = a.D);
        return b
    }

    function pk(a, b) {
        b = String(b);
        a.G && (b = b.toLowerCase());
        return b
    }

    function hk(a, b) {
        b && !a.G && (mk(a), a.F = null, a.C.forEach(function(c, d) {
            var e = d.toLowerCase();
            d != e && (qk(this, d), ok(this, e, c))
        }, a));
        a.G = b
    }
    w.Fc = function(a) {
        for (var b = 0; b < arguments.length; b++) Ph(arguments[b], function(c, d) {
            this.add(d, c)
        }, this)
    };
    var sk = {},
        tk = {},
        uk = {};

    function vk() {
        throw Error("Do not instantiate directly");
    }
    vk.prototype.Zb = null;
    vk.prototype.Db = function() {
        return this.content
    };
    vk.prototype.toString = function() {
        return this.content
    };
    vk.prototype.rc = function() {
        if (this.ac !== sk) throw Error("Sanitized content was not of kind HTML.");
        return ie(this.toString())
    };

    function wk() {
        vk.call(this)
    }
    F(wk, vk);
    wk.prototype.ac = sk;

    function xk(a, b) {
        return null != a && a.ac === b
    };

    function yk(a) {
        if (null != a) switch (a.Zb) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }

    function zk(a) {
        return xk(a, sk) ? a : a instanceof fe ? Ak(ge(a).toString()) : Ak(String(String(a)).replace(Bk, Ck), yk(a))
    }
    var Ak = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            void 0 !== d && (c.Zb = d);
            return c
        }
    }(wk);

    function Dk(a) {
        if (xk(a, sk)) {
            var b = String;
            a = String(a.Db()).replace(Ek, "").replace(Fk, "&lt;");
            b = b(a).replace(Gk, Ck)
        } else b = String(a).replace(Bk, Ck);
        return b
    }

    function Hk(a) {
        xk(a, tk) || xk(a, uk) ? a = Ik(a) : a instanceof I ? a = Ik(Id(a)) : a instanceof Cd ? a = Ik(Dd(a).toString()) : (a = String(a), a = Jk.test(a) ? a.replace(Kk, Lk) : sa);
        return a
    }
    var Mk = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\v": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

    function Ck(a) {
        return Mk[a]
    }
    var Nk = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\v": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };

    function Lk(a) {
        return Nk[a]
    }
    var Bk = /[\x00\x22\x26\x27\x3c\x3e]/g,
        Gk = /[\x00\x22\x27\x3c\x3e]/g,
        Kk = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        Jk = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i,
        Ok = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+-]+;base64,[a-z0-9+\/]+=*$|^blob:/i;

    function Ik(a) {
        return String(a).replace(Kk, Lk)
    }
    var Ek = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        Fk = /</g;
    /*
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var Pk = {};
    Tj.checked = function(a, b, c) {
        null == c ? (a.removeAttribute("checked"), a.checked = !1) : (a.setAttribute("checked", String(c)), a.checked = !(!1 === c || "false" === c))
    };
    Tj.value = function(a, b, c) {
        null == c ? (a.removeAttribute("value"), a.value = "") : (a.setAttribute("value", String(c)), a.value = String(c))
    };
    Tj.muted = function(a, b, c) {
        null == c ? (a.removeAttribute("muted"), a.muted = !1) : (a.setAttribute("muted", String(c)), a.muted = !0)
    };

    function Qk(a, b) {
        return Rk(b, a.config, a.zd, a.qd, a.depth)
    }

    function Rk(a, b, c, d, e) {
        var f, g = '<li class="comment" id="c' + Dk(d.id) + '"><div class="avatar-image-container"><img src="',
            h = d.authorAvatarSrc;
        xk(h, tk) || xk(h, uk) ? h = Ik(h) : h instanceof I ? h = Ik(Id(h)) : h instanceof Cd ? h = Ik(Dd(h).toString()) : (h = String(h), h = Ok.test(h) ? h.replace(Kk, Lk) : sa);
        g = g + Dk(h) + '" alt=""/></div><div class="comment-block"><div class="comment-header"><cite class="user">' + (d.authorUrl ? '<a href="' + Dk(Hk(d.authorUrl)) + '" rel="nofollow">' + zk(d.author) + "</a>" : zk(d.author)) + '</cite><span class="icon user ' +
            Dk(null != (f = d.extraIconClass) ? f : "") + '"></span><span class="datetime secondary-text"><a rel="nofollow" href="' + Dk(Hk(d.url)) + '">' + zk(d.timestamp) + '</a></span></div><p class="comment-content">' + zk(d.body) + '</p><span class="comment-actions secondary-text">' + (e < b.maxDepth ? '<a class="comment-reply" target="_self" data-comment-id="' + Dk(d.id) + '">' + zk(c.reply) + "</a>" : "") + '<span class="item-control blog-admin ' + Dk(d.adminClass) + '"><a target="_self" href="' + Dk(Hk(d.deleteUrl)) + '">' + zk(c["delete"]) + '</a></span></span></div><div class="comment-replies">';
        var k;
        f = null != (k = d.replies) ? k : [];
        g += '<div id="c' + Dk(d.id) + '-rt" class="comment-thread inline-thread' + (0 == f.length ? " hidden" : "") + '"><span class="thread-toggle thread-expanded"><span class="thread-arrow"></span><span class="thread-count"><a target="_self">' + zk(c.replies) + '</a></span></span><ol id="c' + Dk(d.id) + '-ra" class="thread-chrome thread-expanded"><div>';
        k = f.length;
        for (h = 0; h < k; h++) g += Rk(a, b, c, f[h], e ? e + 1 : 1);
        g += '</div><div id="c' + Dk(d.id) + '-continue" class="continue"><a class="comment-reply" target="_self" data-comment-id="' +
            Dk(d.id) + '">' + zk(c.reply) + '</a></div></ol></div></div><div class="comment-replybox-single" id="c' + Dk(d.id) + '-ce"></div></li>';
        return Ak(g)
    };

    function Sk(a, b, c) {
        if (typeof b === u)(b = Tk(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = Tk(c, d);
                f && (c.style[f] = e)
            }
    }
    var Uk = {};

    function Tk(a, b) {
        var c = Uk[b];
        if (!c) {
            var d = ue(b);
            c = d;
            void 0 === a.style[d] && (d = (Zc ? "Webkit" : Yc ? "Moz" : Wc ? "ms" : null) + ve(d), void 0 !== a.style[d] && (c = d));
            Uk[b] = c
        }
        return c
    };

    function Vk() {}
    Ub(Vk);

    function Wk(a) {
        zf.call(this);
        this.X = a || ec || (ec = new Oe);
        this.ga = null;
        this.wa = !1;
        this.C = null;
        this.D = void 0;
        this.T = this.L = null
    }
    F(Wk, zf);
    Vk.Za();
    w = Wk.prototype;
    w.Ya = function() {
        return this.C
    };

    function Xk(a) {
        a.D || (a.D = new uf(a));
        return a.D
    }
    w.Ob = function() {
        this.C = Pe(this.X, "DIV")
    };
    w.render = function(a) {
        if (this.wa) throw Error("Component already rendered");
        this.C || this.Ob();
        a ? a.insertBefore(this.C, null) : this.X.D.body.appendChild(this.C);
        this.L && !this.L.wa || this.Xa()
    };
    w.Xa = function() {
        this.wa = !0;
        Yk(this, function(a) {
            !a.wa && a.Ya() && a.Xa()
        })
    };

    function Zk(a) {
        Yk(a, function(b) {
            b.wa && Zk(b)
        });
        a.D && yf(a.D);
        a.wa = !1
    }
    w.W = function() {
        this.wa && Zk(this);
        this.D && (this.D.Ba(), delete this.D);
        Yk(this, function(a) {
            a.Ba()
        });
        this.C && Ge(this.C);
        this.L = this.C = this.T = null;
        Wk.O.W.call(this)
    };

    function Yk(a, b) {
        a.T && a.T.forEach(b, void 0)
    };

    function $k(a, b, c, d) {
        Wk.call(this, d);
        this.J = c || window;
        this.Z = a;
        this.da = b;
        this.R = {};
        this.K = this.F = null;
        this.G = {};
        this.G.EMAIL = {
            eb: "Email",
            zb: this.ed
        };
        this.G.FACEBOOK = {
            eb: "Facebook",
            zb: this.fd
        };
        this.G.TWITTER = {
            eb: "Twitter",
            zb: this.hd
        }
    }
    z($k, Wk);
    w = $k.prototype;
    w.Ob = function() {
        var a = this.X,
            b = a.C("DIV", {
                style: "position:absolute;width:100%;left:0;top:0;height:100%;z-index:100;",
                "class": "mobile-share-panel-outer"
            });
        this.F = a.C("DIV", {
            style: "position:absolute;;width:230px;height:200px;",
            "class": "mobile-share-panel-inner"
        });
        b.appendChild(this.F);
        var c = a.C("DIV", {
            "class": "mobile-share-panel-title"
        });
        c.innerText = oa;
        c.textContent = oa;
        this.F.appendChild(c);
        this.K = a.C("A", {
            href: "javascript:void(0)",
            "class": "mobile-share-panel-button-close"
        });
        this.K.textContent = "\u00d7";
        c.appendChild(this.K);
        for (var d in this.G) {
            c = a.C("A", {
                target: qa,
                display: ua,
                "class": "mobile-share-panel-button mobile-share-panel-button-" + d.toLowerCase()
            });
            var e = a.C(ka),
                f = this.G[d];
            e.innerText = f.eb;
            e.textContent = f.eb;
            c.href = f.zb.call(this);
            c.appendChild(e);
            this.F.appendChild(c);
            this.R[d] = c
        }
        this.C = b
    };
    w.Xa = function() {
        Wk.prototype.Xa.call(this);
        for (var a in this.R) {
            var b = this.R[a];
            b && wf(Xk(this), b, va, this.Ab)
        }
        wf(Xk(this), this.K, va, this.Ab);
        a = this.Ya();
        wf(Xk(this), a, va, this.Ab);
        this.Tb();
        wf(Xk(this), this.J, "scroll", this.Tb)
    };
    w.show = function(a) {
        var b = this.Ya();
        b && (b.style.display = a ? "" : p)
    };
    w.Tb = function() {
        var a = this.J.innerHeight,
            b = this.J.innerWidth,
            c = this.J.pageYOffset,
            d = this.J.pageXOffset,
            e = 0;
        200 < a && (e = (a - 200) / 2);
        Sk(this.F, "top", e + c + "px");
        a = 0;
        230 < b && (a = (b - 230) / 2);
        Sk(this.F, "left", a + d + "px")
    };
    w.hd = function() {
        return "https://twitter.com/intent/tweet?text=" + encodeURIComponent(this.Z + ": " + this.da)
    };
    w.fd = function() {
        return "https://m.facebook.com/sharer.php?u=" + encodeURIComponent(this.da) + "&t=" + encodeURIComponent(this.Z)
    };
    w.ed = function() {
        return "mailto:?subject=" + encodeURIComponent(this.Z) + "&body=" + encodeURIComponent(this.da)
    };
    w.Ab = function() {
        this.show(!1)
    };
    var al = RegExp("^((http(s)?):)?\\/\\/((((lh[3-6](-tt|-d[a-g,y,z]|-testonly)?\\.((ggpht)|(googleusercontent)|(google)|(sandbox\\.google)))|(lh7\\-(eu|us)\\.((googleusercontent)|(google)))|((photos|testonly|work)\\.fife\\.usercontent\\.google)|([\\w\\-]+\\.fife\\.usercontent\\.google)|(([1-4]\\.bp\\.blogspot)|(bp[0-3]\\.blogger))|(ccp-lh\\.googleusercontent)|((((cp|ci|gp)[3-6])|(ap[1-2]))\\.(ggpht|googleusercontent))|(gm[1-4]\\.ggpht)|(play-(ti-)?lh\\.googleusercontent)|(gz0\\.googleusercontent)|(((yt[3-4])|(sp[1-3]))\\.(ggpht|googleusercontent)))\\.com)|(dp[3-6]\\.googleusercontent\\.cn)|(lh[3-6]\\.(googleadsserving\\.cn|xn--9kr7l\\.com))|(photos\\-image\\-(dev|qa)(-auth|-cookie)?\\.corp\\.google\\.com)|(photos\\-image\\-dev\\-dl\\-(auth|eu|us)\\.corp\\.google\\.com)|((dev|dev2|dev3|qa|qa2|qa3|qa-red|qa-blue|canary)[-.]lighthouse\\.sandbox\\.google\\.com\\/image)|(image\\-(dev|qa)\\-lighthouse(-auth)?\\.sandbox\\.google\\.com(\\/image)?))\\/",
            "i"),
        bl = /^(https?:)?\/\/sp[1-4]\.((ggpht)|(googleusercontent))\.com\//i,
        cl = /^(https?:)?\/\/(qa(-red|-blue)?|dev2?|image-dev)(-|\.)lighthouse(-auth)?\.sandbox\.google\.com\//i,
        dl = /^(https?:)?\/\/lighthouse-(qa(-red|-blue)?|dev2)\.corp\.google\.com\//i;

    function el(a) {
        return al.test(a) || bl.test(a) || cl.test(a) || dl.test(a)
    };

    function fl(a) {
        this.oa = wj(a)
    }
    z(fl, Mj);
    fl.prototype.getToken = function() {
        return Ij(this, 24)
    };
    fl.prototype.setToken = function(a) {
        return Lj(this, 24, a)
    };

    function gl() {
        this.D = void 0;
        this.C = {}
    }
    w = gl.prototype;
    w.set = function(a, b) {
        hl(this, a, b, !1)
    };
    w.add = function(a, b) {
        hl(this, a, b, !0)
    };

    function hl(a, b, c, d) {
        for (var e = 0; e < b.length; e++) {
            var f = b.charAt(e);
            a.C[f] || (a.C[f] = new gl);
            a = a.C[f]
        }
        if (d && void 0 !== a.D) throw Error('The collection already contains the key "' + b + '"');
        a.D = c
    }

    function il(a, b) {
        for (var c = 0; c < b.length; c++)
            if (a = a.C[b.charAt(c)], !a) return;
        return a
    }
    w.get = function(a) {
        return (a = il(this, a)) ? a.D : void 0
    };
    w.ca = function() {
        var a = [];
        jl(this, a);
        return a
    };

    function jl(a, b) {
        void 0 !== a.D && b.push(a.D);
        for (var c in a.C) jl(a.C[c], b)
    }
    w.ma = function(a) {
        var b = [];
        if (a) {
            for (var c = this, d = 0; d < a.length; d++) {
                var e = a.charAt(d);
                if (!c.C[e]) return [];
                c = c.C[e]
            }
            kl(c, a, b)
        } else kl(this, "", b);
        return b
    };

    function kl(a, b, c) {
        void 0 !== a.D && c.push(b);
        for (var d in a.C) kl(a.C[d], b + d, c)
    }
    w.clear = function() {
        this.C = {};
        this.D = void 0
    };
    w.V = function() {
        var a = this.ca();
        if (a.V && typeof a.V == m) a = a.V();
        else if (Wb(a) || typeof a === u) a = a.length;
        else {
            var b = 0,
                c;
            for (c in a) b++;
            a = b
        }
        return a
    };
    w.ka = function() {
        return void 0 === this.D && rd(this.C)
    };

    function ll() {
        if (!ml) {
            var a = ml = new gl,
                b;
            for (b in nl) a.add(b, nl[b])
        }
    }
    var ml;

    function V(a, b) {
        this.types = a;
        this.C = b
    }
    var nl = {
        a: new V([3, 0], [function(a, b) {
            T(a, 21, b)
        }, function(a, b) {
            U(a, 56, b)
        }]),
        al: new V([3], [function(a, b) {
            T(a, 74, b)
        }]),
        b: new V([3, 0], [function(a, b) {
            T(a, 23, b)
        }, function(a, b) {
            U(a, 38, b)
        }]),
        ba: new V([0], [function(a, b) {
            U(a, 85, b)
        }]),
        bc: new V([0], [function(a, b) {
            U(a, 87, b)
        }]),
        br: new V([0], [function(a, b) {
            U(a, 86, b)
        }]),
        c: new V([3, 0], [function(a, b) {
            T(a, 2, b)
        }, function(a, b) {
            U(a, 39, b)
        }]),
        cc: new V([3], [function(a, b) {
            T(a, 51, b)
        }]),
        ci: new V([3], [function(a, b) {
            T(a, 32, b)
        }]),
        ckm: new V([3], [function(a, b) {
            T(a, 104, b)
        }]),
        cp: new V([0], [function(a, b) {
            U(a, 92, b)
        }]),
        cr: new V([3], [function(a, b) {
            T(a, 108, b)
        }]),
        cv: new V([0], [function(a, b) {
            U(a, 94, b)
        }]),
        d: new V([3], [function(a, b) {
            T(a, 3, b)
        }]),
        dc: new V([5], [function(a, b) {
            Lj(a, 99, b)
        }]),
        df: new V([3], [function(a, b) {
            T(a, 80, b)
        }]),
        dv: new V([3], [function(a, b) {
            T(a, 90, b)
        }]),
        e: new V([0], [function(a, b) {
            U(a, 15, b)
        }]),
        em: new V([0], [function(a, b) {
            U(a, 107, b)
        }]),
        f: new V([4], [function(a, b) {
            Lj(a, 16, b)
        }]),
        fg: new V([3], [function(a, b) {
            T(a, 34, b)
        }]),
        fh: new V([3], [function(a, b) {
            T(a, 30, b)
        }]),
        fm: new V([3], [function(a,
            b) {
            T(a, 84, b)
        }]),
        fo: new V([2], [function(a, b) {
            Kj(a, 79, b)
        }]),
        ft: new V([3], [function(a, b) {
            T(a, 50, b)
        }]),
        fv: new V([3], [function(a, b) {
            T(a, 31, b)
        }]),
        g: new V([3], [function(a, b) {
            T(a, 14, b)
        }]),
        gd: new V([3], [function(a, b) {
            T(a, 83, b)
        }]),
        gm: new V([3], [function(a, b) {
            T(a, 105, b)
        }]),
        h: new V([3, 0], [function(a, b) {
            T(a, 4, b)
        }, function(a, b) {
            U(a, 13, b)
        }]),
        i: new V([3], [function(a, b) {
            T(a, 22, b)
        }]),
        ic: new V([0], [function(a, b) {
            U(a, 71, b)
        }]),
        id: new V([3], [function(a, b) {
            T(a, 70, b)
        }]),
        il: new V([3], [function(a, b) {
            T(a, 96, b)
        }]),
        ip: new V([3], [function(a, b) {
            T(a, 54, b)
        }]),
        iv: new V([0], [function(a, b) {
            Jj(a, 75, b)
        }]),
        j: new V([1], [function(a, b) {
            Dj(a, 29, null == b ? b : uj(b))
        }]),
        k: new V([3, 0], [function(a, b) {
            T(a, 17, b)
        }, function(a, b) {
            U(a, 42, b)
        }]),
        l: new V([0], [function(a, b) {
            U(a, 44, b)
        }]),
        lf: new V([3], [function(a, b) {
            T(a, 65, b)
        }]),
        lo: new V([3], [function(a, b) {
            T(a, 97, b)
        }]),
        m: new V([0], [function(a, b) {
            U(a, 63, b)
        }]),
        md: new V([3], [function(a, b) {
            T(a, 91, b)
        }]),
        mm: new V([4], [function(a, b) {
            Lj(a, 81, b)
        }]),
        mo: new V([3], [function(a, b) {
            T(a, 73, b)
        }]),
        mv: new V([3], [function(a,
            b) {
            T(a, 66, b)
        }]),
        n: new V([3], [function(a, b) {
            T(a, 20, b)
        }]),
        nc: new V([3], [function(a, b) {
            T(a, 55, b)
        }]),
        nd: new V([3], [function(a, b) {
            T(a, 53, b)
        }]),
        ng: new V([3], [function(a, b) {
            T(a, 95, b)
        }]),
        ngm: new V([3], [function(a, b) {
            T(a, 106, b)
        }]),
        no: new V([3], [function(a, b) {
            T(a, 37, b)
        }]),
        ns: new V([3], [function(a, b) {
            T(a, 40, b)
        }]),
        nt0: new V([4], [function(a, b) {
            Lj(a, 36, b)
        }]),
        nu: new V([3], [function(a, b) {
            T(a, 46, b)
        }]),
        nw: new V([3], [function(a, b) {
            T(a, 48, b)
        }]),
        o: new V([1, 3], [function(a, b) {
            Dj(a, 7, null == b ? b : uj(b))
        }, function(a, b) {
            T(a,
                27, b)
        }]),
        p: new V([3, 0], [function(a, b) {
            T(a, 19, b)
        }, function(a, b) {
            U(a, 43, b)
        }]),
        pa: new V([3], [function(a, b) {
            T(a, 61, b)
        }]),
        pc: new V([0], [function(a, b) {
            U(a, 88, b)
        }]),
        pd: new V([3], [function(a, b) {
            T(a, 60, b)
        }]),
        pf: new V([3], [function(a, b) {
            T(a, 67, b)
        }]),
        pg: new V([3], [function(a, b) {
            T(a, 72, b)
        }]),
        pi: new V([2], [function(a, b) {
            Kj(a, 76, b)
        }]),
        pp: new V([3], [function(a, b) {
            T(a, 52, b)
        }]),
        q: new V([4], [function(a, b) {
            Lj(a, 28, b)
        }]),
        r: new V([3, 0], [function(a, b) {
            T(a, 6, b)
        }, function(a, b) {
            U(a, 26, b)
        }]),
        ra: new V([3], [function(a, b) {
            T(a,
                103, b)
        }]),
        rf: new V([3], [function(a, b) {
            T(a, 100, b)
        }]),
        rg: new V([3], [function(a, b) {
            T(a, 59, b)
        }]),
        rh: new V([3], [function(a, b) {
            T(a, 49, b)
        }]),
        rj: new V([3], [function(a, b) {
            T(a, 57, b)
        }]),
        ro: new V([2], [function(a, b) {
            Kj(a, 78, b)
        }]),
        rp: new V([3], [function(a, b) {
            T(a, 58, b)
        }]),
        rw: new V([3], [function(a, b) {
            T(a, 35, b)
        }]),
        rwa: new V([3], [function(a, b) {
            T(a, 64, b)
        }]),
        rwu: new V([3], [function(a, b) {
            T(a, 41, b)
        }]),
        s: new V([3, 0], [function(a, b) {
            T(a, 33, b)
        }, function(a, b) {
            U(a, 1, b)
        }]),
        sc: new V([0], [function(a, b) {
            U(a, 89, b)
        }]),
        sg: new V([3], [function(a, b) {
            T(a, 82, b)
        }]),
        sm: new V([3], [function(a, b) {
            T(a, 93, b)
        }]),
        t: new V([4], [function(a, b) {
            a.setToken(b)
        }]),
        u: new V([3], [function(a, b) {
            T(a, 18, b)
        }]),
        ut: new V([3], [function(a, b) {
            T(a, 45, b)
        }]),
        v: new V([0], [function(a, b) {
            U(a, 62, b)
        }]),
        vb: new V([0], [function(a, b) {
            Jj(a, 68, b)
        }]),
        vf: new V([4], [function(a, b) {
            Lj(a, 102, b)
        }]),
        vl: new V([0], [function(a, b) {
            Jj(a, 69, b)
        }]),
        vm: new V([3], [function(a, b) {
            T(a, 98, b)
        }]),
        w: new V([0], [function(a, b) {
            U(a, 12, b)
        }]),
        x: new V([0], [function(a, b) {
            U(a, 9, b)
        }]),
        y: new V([0], [function(a,
            b) {
            U(a, 10, b)
        }]),
        ya: new V([2], [function(a, b) {
            Kj(a, 77, b)
        }]),
        z: new V([0], [function(a, b) {
            U(a, 11, b)
        }])
    };
    w = ll.prototype;
    w.parse = function(a) {
        var b = new fl,
            c = new fl;
        if ("" == a) a = !0;
        else {
            a = a.split("-");
            for (var d = !0, e = 0; e < a.length; e++) {
                var f = a[e];
                if (0 == f.length) d = !1;
                else {
                    var g = f,
                        h = !1;
                    var k = g;
                    var n = g.substring(0, 1);
                    n != n.toLowerCase() && (h = !0, k = g.substring(0, 1).toLowerCase() + g.substring(1));
                    var t = ml;
                    for (n = 1; n <= k.length; ++n) {
                        var v = t,
                            E = k.substring(0, n);
                        if (0 == E.length ? v.ka() : !il(v, E)) break
                    }
                    k = 1 == n ? null : (k = t.get(k.substring(0, n - 1))) ? {
                        Dd: g.substring(0, n - 1),
                        value: g.substring(n - 1),
                        Md: h,
                        attributes: k
                    } : null;
                    if (k) {
                        g = [];
                        h = [];
                        n = !1;
                        for (t =
                            0; t < k.attributes.types.length; t++) {
                            v = k.attributes.types[t];
                            var C = k.value;
                            E = e;
                            if (k.Md && 1 == v)
                                for (var O = C.length; 12 > O && E < a.length - 1;) C += "-" + a[E + 1], O = C.length, ++E;
                            else if (2 == v)
                                for (; E < a.length - 1 && a[E + 1].match(/^[\d\.]/);) C += "-" + a[E + 1], ++E;
                            O = k.attributes.C[t];
                            C = ol(this, v)(k.Dd, C, b, c, O);
                            if (null === C) {
                                n = !0;
                                e = E;
                                break
                            } else g.push(v), h.push(C)
                        }
                        if (!n)
                            for (k = 0; k < h.length; k++) t = g[k], C = h[k], pl(this, t)(f, C);
                        d = d && n
                    } else d = !1
                }
            }
            a = d
        }
        return new ql(b, c, a)
    };

    function rl(a, b, c, d, e, f) {
        e(c, b);
        a = a.substring(0, 1);
        f = f(a == a.toUpperCase());
        e(d, f)
    }
    w.Gd = function(a, b, c, d, e) {
        if ("" == b) return 0;
        isFinite(b) && (b = String(b));
        b = typeof b === u ? /^\s*-?0x/i.test(b) ? parseInt(b, 16) : parseInt(b, 10) : NaN;
        if (isNaN(b)) return 1;
        rl(a, b, c, d, e, Number);
        return null
    };
    w.wd = function() {};
    w.Fd = function(a, b, c, d, e) {
        if ("" == b) return 0;
        var f = Number(b);
        b = 0 == f && /^[\s\xa0]*$/.test(b) ? NaN : f;
        if (isNaN(b)) return 1;
        rl(a, b, c, d, e, Number);
        return null
    };
    w.vd = function() {};
    w.Ed = function(a, b, c, d, e) {
        if ("" != b) return 2;
        rl(a, !0, c, d, e, Boolean);
        return null
    };
    w.ud = function() {};
    w.Hd = function(a, b, c, d, e) {
        if ("" == b) return 0;
        rl(a, b, c, d, e, function(f) {
            return f ? "1" : ""
        });
        return null
    };
    w.xd = function() {};
    w.Id = function(a, b, c, d, e) {
        if ("" == b) return 0;
        rl(a, b, c, d, e, function(f) {
            return f ? 1 : 0
        });
        return null
    };

    function ol(a, b) {
        switch (b) {
            case 0:
                return B(a.Gd, a);
            case 2:
                return B(a.Fd, a);
            case 3:
                return B(a.Ed, a);
            case 4:
                return B(a.Hd, a);
            case 1:
                return B(a.Id, a);
            default:
                return function() {}
        }
    }

    function pl(a, b) {
        switch (b) {
            case 0:
                return B(a.wd, a);
            case 2:
                return B(a.vd, a);
            case 3:
                return B(a.ud, a);
            case 4:
            case 1:
                return B(a.xd, a);
            default:
                return function() {}
        }
    }

    function ql(a, b, c) {
        this.C = a;
        this.D = b;
        this.F = c
    }
    ql.prototype.Ia = function() {
        return this.F
    };

    function sl(a, b) {
        null != a && this.append.apply(this, arguments)
    }
    w = sl.prototype;
    w.Aa = "";
    w.set = function(a) {
        this.Aa = "" + a
    };
    w.append = function(a, b, c) {
        this.Aa += String(a);
        if (null != b)
            for (var d = 1; d < arguments.length; d++) this.Aa += arguments[d];
        return this
    };
    w.clear = function() {
        this.Aa = ""
    };
    w.toString = function() {
        return this.Aa
    };

    function tl(a) {
        this.G = null;
        this.F = [];
        this.D = null;
        ul(this, a)
    }

    function vl(a) {
        null == a.G && (a.G = new ll);
        return a.G
    }

    function ul(a, b) {
        a.D = b ? typeof b === u ? vl(a).parse(b) : b : vl(a).parse("")
    }

    function wl(a, b) {
        return a == b ? !1 : !0
    }
    w = tl.prototype;
    w.ob = function(a) {
        a = a || void 0;
        var b = this.D.C;
        a != S(b, 2) && T(b, 2, a);
        return this
    };
    w.nb = function(a) {
        a = a || void 0;
        var b = this.D.C;
        a != Q(b, 51) && T(b, 51, a);
        return this
    };
    w.pb = function(a) {
        a = a || void 0;
        var b = this.D.C;
        a != Q(b, 32) && T(b, 32, a);
        return this
    };
    w.Sa = function(a) {
        var b = this.D,
            c = b.C;
        wl(a, R(c, 13), R(b.D, 13)) && U(c, 13, a);
        return this
    };
    w.mb = function(a) {
        a = a || void 0;
        var b = this.D.C;
        a != S(b, 20) && T(b, 20, a);
        return this
    };
    w.rb = function(a) {
        a = a || void 0;
        var b = this.D.C;
        a != S(b, 19) && T(b, 19, a);
        return this
    };
    w.qb = function(a) {
        a = a || void 0;
        var b = this.D.C;
        a != Q(b, 60) && T(b, 60, a);
        return this
    };
    w.tb = function(a) {
        a = a || void 0;
        var b = this.D.C;
        a != S(b, 67) && T(b, 67, a);
        return this
    };
    w.sb = function(a) {
        a = a || void 0;
        var b = this.D.C;
        a != S(b, 52) && T(b, 52, a);
        return this
    };
    w.Ea = function(a) {
        var b = this.D,
            c = b.C;
        wl(a, R(c, 1), R(b.D, 1)) && U(c, 1, a);
        return this
    };
    w.setToken = function(a) {
        a = a || void 0;
        var b = this.D,
            c = b.C;
        wl(a, c.getToken(), b.D.getToken()) && c.setToken(a);
        return this
    };
    w.Ta = function(a) {
        var b = this.D,
            c = b.C;
        wl(a, R(c, 12), R(b.D, 12)) && U(c, 12, a);
        return this
    };

    function xl(a) {
        ul(a, "");
        return a
    }
    w.sa = function() {
        this.F.length = 0;
        var a = this.D,
            b = a.C;
        a = a.D;
        W(this, "s", R(b, 1), R(a, 1));
        W(this, "w", R(b, 12), R(a, 12));
        X(this, "c", S(b, 2), S(a, 2));
        X(this, "d", S(b, 3), S(a, 3));
        W(this, "h", R(b, 13), R(a, 13));
        X(this, "s", Q(b, 33), Q(a, 33));
        X(this, "h", S(b, 4), S(a, 4));
        X(this, "p", S(b, 19), S(a, 19));
        X(this, "pp", S(b, 52), S(a, 52));
        X(this, "pf", S(b, 67), S(a, 67));
        X(this, "n", S(b, 20), S(a, 20));
        W(this, "r", R(b, 26), R(a, 26));
        X(this, "r", S(b, 6), S(a, 6));
        X(this, "o", Q(b, 27), Q(a, 27));
        var c = Hj(b, 7);
        yl(this, "o", c, Hj(a, 7));
        c = Hj(b, 29);
        yl(this, "j",
            c, Hj(a, 29));
        W(this, "x", R(b, 9), R(a, 9));
        W(this, "y", R(b, 10), R(a, 10));
        W(this, "z", R(b, 11), R(a, 11));
        X(this, "g", S(b, 14), S(a, 14));
        W(this, "e", R(b, 15), R(a, 15));
        yl(this, "f", Ij(b, 16), Ij(a, 16));
        X(this, "k", Q(b, 17), Q(a, 17));
        X(this, "u", Q(b, 18), !0);
        X(this, "ut", Q(b, 45), !0);
        X(this, "i", Q(b, 22), !0);
        X(this, "a", Q(b, 21), Q(a, 21));
        X(this, "b", S(b, 23), S(a, 23));
        W(this, "b", R(b, 38), R(a, 38));
        W(this, "c", R(b, 39), R(a, 39), 16, 8);
        yl(this, "q", Ij(b, 28), Ij(a, 28));
        X(this, "fh", Q(b, 30), Q(a, 30));
        X(this, "fv", Q(b, 31), Q(a, 31));
        X(this, "fg", S(b,
            34), S(a, 34));
        X(this, "ci", Q(b, 32), Q(a, 32));
        yl(this, "t", b.getToken(), a.getToken());
        yl(this, "nt0", Ij(b, 36), Ij(a, 36));
        X(this, "rw", S(b, 35), S(a, 35));
        X(this, "rwu", S(b, 41), S(a, 41));
        X(this, "rwa", S(b, 64), S(a, 64));
        X(this, "nw", S(b, 48), S(a, 48));
        X(this, "rh", S(b, 49), S(a, 49));
        X(this, "no", S(b, 37), S(a, 37));
        X(this, "ns", Q(b, 40), Q(a, 40));
        W(this, "k", R(b, 42), R(a, 42));
        W(this, "p", R(b, 43), R(a, 43));
        W(this, "l", R(b, 44), R(a, 44));
        W(this, "v", R(b, 62), R(a, 62));
        X(this, "nu", Q(b, 46), Q(a, 46));
        X(this, "ft", Q(b, 50), Q(a, 50));
        X(this, "cc",
            Q(b, 51), Q(a, 51));
        X(this, "nd", Q(b, 53), Q(a, 53));
        X(this, "ip", Q(b, 54), Q(a, 54));
        X(this, "nc", Q(b, 55), Q(a, 55));
        W(this, "a", R(b, 56), R(a, 56));
        X(this, "rj", Q(b, 57), Q(a, 57));
        X(this, "rp", Q(b, 58), Q(a, 58));
        X(this, "rg", Q(b, 59), Q(a, 59));
        X(this, "pd", Q(b, 60), Q(a, 60));
        X(this, "pa", Q(b, 61), Q(a, 61));
        W(this, "m", R(b, 63), R(a, 63));
        W(this, "vb", Gj(b, 68), Gj(a, 68));
        W(this, "vl", Gj(b, 69), Gj(a, 69));
        X(this, "lf", Q(b, 65), Q(a, 65));
        X(this, "mv", Q(b, 66), Q(a, 66));
        X(this, "id", Q(b, 70), Q(a, 70));
        W(this, "ic", R(b, 71), !0);
        X(this, "pg", S(b, 72), S(a,
            72));
        X(this, "mo", Q(b, 73), Q(a, 73));
        X(this, "al", Q(b, 74), Q(a, 74));
        W(this, "iv", Gj(b, 75), Gj(a, 75));
        W(this, "pi", Fj(b, 76), Fj(a, 76));
        W(this, "ya", Fj(b, 77), Fj(a, 77));
        W(this, "ro", Fj(b, 78), Fj(a, 78));
        W(this, "fo", Fj(b, 79), Fj(a, 79));
        X(this, "df", Q(b, 80), Q(a, 80));
        yl(this, "mm", Ij(b, 81), Ij(a, 81));
        X(this, "sg", Q(b, 82), Q(a, 82));
        X(this, "gd", Q(b, 83), Q(a, 83));
        X(this, "fm", Q(b, 84), Q(a, 84));
        W(this, "ba", R(b, 85), R(a, 85));
        W(this, "br", R(b, 86), R(a, 86));
        W(this, "bc", R(b, 87), R(a, 87), 16, 8);
        W(this, "pc", R(b, 88), R(a, 88), 16, 8);
        W(this, "sc",
            R(b, 89), R(a, 89), 16, 8);
        X(this, "dv", Q(b, 90), Q(a, 90));
        X(this, "md", Q(b, 91), Q(a, 91));
        W(this, "cp", R(b, 92), R(a, 92));
        X(this, "sm", Q(b, 93), Q(a, 93));
        W(this, "cv", R(b, 94), R(a, 94));
        X(this, "ng", Q(b, 95), Q(a, 95));
        X(this, "il", Q(b, 96), Q(a, 96));
        X(this, "lo", Q(b, 97), Q(a, 97));
        X(this, "vm", Q(b, 98), Q(a, 98));
        yl(this, "dc", Ij(b, 99), Ij(a, 99));
        X(this, "rf", Q(b, 100), Q(a, 100));
        yl(this, "vf", Ij(b, 102), Ij(a, 102));
        X(this, "ra", S(b, 103), S(a, 103));
        X(this, "ckm", Q(b, 104), Q(a, 104));
        X(this, "gm", Q(b, 105), Q(a, 105));
        X(this, "ngm", Q(b, 106), Q(a, 106));
        W(this, "em", R(b, 107), R(a, 107));
        X(this, "cr", Q(b, 108), Q(a, 108));
        return this.F.join("-")
    };

    function W(a, b, c, d, e, f) {
        if (null != c) {
            var g = void 0 == e || 10 != e && 16 != e ? 10 : e;
            c = c.toString(g);
            e = new sl;
            e.append(16 == g ? "0x" : "");
            g = e.append;
            void 0 == f ? f = "" : (f -= c.length, f = 0 >= f ? "" : te("0", f));
            g.call(e, f);
            e.append(c);
            zl(a, b, e.toString(), !!d)
        }
    }

    function X(a, b, c, d) {
        c && zl(a, b, "", !!d)
    }

    function yl(a, b, c, d) {
        c && zl(a, b, c, !!d)
    }

    function zl(a, b, c, d) {
        d && (b = b.substring(0, 1).toUpperCase() + b.substring(1));
        a.F.push(b + c)
    };

    function Y(a) {
        tl.call(this, a)
    }
    F(Y, tl);
    w = Y.prototype;
    w.ob = function(a) {
        a && Al(this);
        return Y.O.ob.call(this, a)
    };
    w.Sa = function(a) {
        a = null == a || 0 > a ? void 0 : a;
        null != a && this.Ea();
        return Y.O.Sa.call(this, a)
    };
    w.pb = function(a) {
        a && Al(this);
        return Y.O.pb.call(this, a)
    };
    w.nb = function(a) {
        a && Al(this);
        return Y.O.nb.call(this, a)
    };
    w.Ea = function(a) {
        Xb(a) && (a = Math.max(a.width, a.height));
        a = null == a || 0 > a ? void 0 : a;
        null != a && (this.Ta(), this.Sa());
        return Y.O.Ea.call(this, a)
    };
    w.rb = function(a) {
        a && Al(this);
        return Y.O.rb.call(this, a)
    };
    w.sb = function(a) {
        a && Al(this);
        return Y.O.sb.call(this, a)
    };
    w.tb = function(a) {
        a && Al(this);
        return Y.O.tb.call(this, a)
    };
    w.mb = function(a) {
        a && Al(this);
        return Y.O.mb.call(this, a)
    };
    w.qb = function(a) {
        a && Al(this);
        return Y.O.qb.call(this, a)
    };
    w.Ta = function(a) {
        a = null == a || 0 > a ? void 0 : a;
        null != a && this.Ea();
        return Y.O.Ta.call(this, a)
    };

    function Al(a) {
        a.mb();
        a.nb();
        a.ob();
        a.pb();
        a.qb();
        a.rb();
        a.sb();
        a.tb()
    }
    w.sa = function() {
        var a = this.D.C;
        Q(a, 18) || Q(a, 45) ? R(a, 1) || this.Ea(0) : (a = this.D.C, R(a, 1) || R(a, 12) || R(a, 13) || (this.Ea(), this.Sa(), this.Ta(), Al(this)));
        return Y.O.sa.call(this)
    };
    var Bl = /^[^\/]*\/\//;

    function Cl(a, b) {
        b = void 0 === b ? !1 : b;
        this.G = a;
        this.K = "";
        (a = this.G.match(Bl)) && a[0] ? (this.K = a[0], a = this.K.match(/\w+/) ? this.G : "http://" + this.G.substring(this.K.length)) : a = "http://" + this.G;
        this.D = kk(a, !0);
        this.ha = b;
        this.J = !0;
        this.da = !1
    }

    function Dl(a, b) {
        a.F = a.F ? a.F + ("/" + b) : b
    }

    function El(a) {
        if (void 0 == a.C) {
            var b = a.D.D.substring(1);
            a.F = null;
            if (a.ha) {
                a.C = [];
                if (1 < (b.match(/=/g) || []).length) return a.J = !1, a.C;
                var c = b.indexOf("="); - 1 != c ? (a.C.push(b.substr(0, c)), a.C.push(b.substr(c + 1))) : a.C.push(b);
                return a.C
            }
            a.C = b.split("/");
            b = a.C.length;
            2 < b && "u" == a.C[0] && (Dl(a, a.C[0] + "/" + a.C[1]), a.C.shift(), a.C.shift(), b -= 2);
            if (0 == b || 4 == b || 7 < b) return a.J = !1, a.C;
            if (2 == b) Dl(a, a.C[0]);
            else if ("image" == a.C[0]) Dl(a, a.C[0]);
            else if (7 == b || 3 == b) return a.J = !1, a.C;
            if (3 >= b) {
                a.da = !0;
                3 == b && (Dl(a, a.C[1]),
                    a.C.shift(), --b);
                --b;
                c = a.C[b];
                var d = c.indexOf("="); - 1 != d && (a.C[b] = c.substr(0, d), a.C.push(c.substr(d + 1)))
            }
        }
        return a.C
    }
    Cl.prototype.Ia = function() {
        El(this);
        return this.J
    };

    function Fl(a) {
        El(a);
        return a.da
    }

    function Gl(a) {
        El(a);
        return a.ha
    }

    function Hl(a) {
        El(a);
        void 0 == a.F && (a.F = null);
        return a.F
    }

    function Il(a) {
        switch (El(a).length) {
            case 7:
                return !0;
            case 6:
                return null == Hl(a);
            case 5:
                return !1;
            case 3:
                return !0;
            case 2:
                return null == Hl(a);
            case 1:
                return !1;
            default:
                return !1
        }
    }

    function Jl(a, b) {
        if (Gl(a)) a: {
            switch (b) {
                case 7:
                    b = 0;
                    break;
                case 4:
                    if (!Il(a)) {
                        a = null;
                        break a
                    }
                    b = 1;
                    break;
                default:
                    a = null;
                    break a
            }
            a = El(a)[b]
        }
        else if (Fl(a)) a: {
            var c = null != Hl(a) ? 1 : 0;
            switch (b) {
                case 6:
                    b = 0 + c;
                    break;
                case 4:
                    if (!Il(a)) {
                        a = null;
                        break a
                    }
                    b = 1 + c;
                    break;
                default:
                    a = null;
                    break a
            }
            a = El(a)[b]
        }
        else a: {
            c = null != Hl(a) ? 1 : 0;
            switch (b) {
                case 0:
                    b = 0 + c;
                    break;
                case 1:
                    b = 1 + c;
                    break;
                case 2:
                    b = 2 + c;
                    break;
                case 3:
                    b = 3 + c;
                    break;
                case 4:
                    if (!Il(a)) {
                        a = null;
                        break a
                    }
                    b = 4 + c;
                    break;
                case 5:
                    b = Il(a) ? 1 : 0;
                    b = 4 + c + b;
                    break;
                default:
                    a = null;
                    break a
            }
            a = El(a)[b]
        }
        return a
    }

    function Kl(a) {
        void 0 == a.ta && (a.ta = Jl(a, 4));
        return a.ta
    };

    function Ll() {}
    Ll.prototype.parse = function(a, b) {
        return new Ml(a, void 0 === b ? !1 : b)
    };

    function Ml(a, b) {
        Cl.call(this, a, void 0 === b ? !1 : b)
    }
    z(Ml, Cl);

    function Nl(a, b) {
        b = void 0 === b ? !1 : b;
        this.C = null;
        a instanceof Ml || (void 0 == Ol && (Ol = new Ll), a = Ol.parse(a.toString(), b));
        a = this.C = a;
        void 0 == a.M && ((b = Kl(a)) || (b = ""), a.M = (new ll).parse(b));
        tl.call(this, a.M);
        this.M = this.C.K;
        a = this.C;
        b = a.D.M;
        this.K = a.D.F + (b ? ":" + b : "");
        this.J = this.C.D.C.toString()
    }
    var Ol;
    F(Nl, Y);

    function Pl(a) {
        a.J = "";
        return a
    }
    Nl.prototype.Ia = function() {
        return this.C.Ia()
    };
    Nl.prototype.sa = function() {
        if (!this.C.Ia()) return this.C.G;
        var a = Nl.O.sa.call(this),
            b = [];
        null != Hl(this.C) && b.push(Hl(this.C));
        var c = Gl(this.C);
        if (Fl(this.C)) {
            var d = this.C;
            void 0 == d.X && (d.X = Jl(d, 6));
            b.push(d.X + (a ? "=" + a : ""))
        } else if (c) {
            d = b.push;
            var e = this.C;
            void 0 === e.R && (e.R = Jl(e, 7));
            d.call(b, e.R);
            a && b.push(a)
        } else d = b.push, e = this.C, void 0 == e.Z && (e.Z = Jl(e, 0)), d.call(b, e.Z), d = b.push, e = this.C, void 0 == e.Ga && (e.Ga = Jl(e, 1)), d.call(b, e.Ga), d = b.push, e = this.C, void 0 == e.T && (e.T = Jl(e, 2)), d.call(b, e.T), d = b.push,
            e = this.C, void 0 == e.Ha && (e.Ha = Jl(e, 3)), d.call(b, e.Ha), a && b.push(a), a = b.push, d = this.C, void 0 == d.L && (d.L = Jl(d, 5)), a.call(b, d.L);
        b = kk(this.M + this.K + "/" + (c ? b.join("=") : b.join("/")) + (this.J ? "?" + this.J : "")).toString();
        b.startsWith("%3a//") && (b = b.replace("%3a//", "://"));
        return b
    };
    var Ql = new Ll;
    var Rl = RegExp('^((?:https?:)?//((?:blogger\\.googleusercontent\\.com|blogger-image(?:-(?:dev|staging|autopush|prod))?\\.corp\\.google\\.com))/img/(a))/([^/=? "]+)(?:=([-a-zA-Z0-9_=]+))?(?:\\?[^/ "]*)?$'),
        Sl = RegExp('^((?:https?:)?//((?:blogger\\.googleusercontent\\.com|blogger-image(?:-(?:dev|staging|autopush|prod))?\\.corp\\.google\\.com))/img/(proxy))/([^/=? "]+)(?:=([-a-zA-Z0-9_=]+))?(?:\\?[^/ "]*)?$'),
        Tl = RegExp('^((?:https?:)?//((?:blogger\\.googleusercontent\\.com|blogger-image(?:-(?:dev|staging|autopush|prod))?\\.corp\\.google\\.com)))/img/(b)/[^/? "]*/([^/=? "]+)/(?:([-a-zA-Z0-9_=]+)?/(?:[^/? "]*)?)?(?:\\?[^/ "]*)?$'),
        Ul = {
            uc: 3,
            proxy: 3,
            vc: 3
        },
        Vl = {
            uc: 4,
            proxy: 4,
            vc: 4
        };

    function Wl(a) {
        return Rl.test(a) || Sl.test(a) || Tl.test(a)
    }

    function Xl(a) {
        return "/blogger/image/" + Yl(a, Ul) + "/" + Yl(a, Vl)
    }

    function Yl(a, b) {
        if (Rl.test(a)) {
            var c;
            return null != (c = Rl.exec(a)[b.uc]) ? c : ""
        }
        if (Sl.test(a)) {
            var d;
            return null != (d = Sl.exec(a)[b.proxy]) ? d : ""
        }
        if (Tl.test(a)) {
            var e;
            return null != (e = Tl.exec(a)[b.vc]) ? e : ""
        }
        throw Error("Not a blogger image url: " + a);
    };

    function Zl() {
        var a = $l,
            b = "Ca";
        if (a.Ca && a.hasOwnProperty(b)) return a.Ca;
        var c = new a;
        a.Ca = c;
        a.hasOwnProperty(b);
        return c
    };

    function $l() {
        this.F = null;
        this.C = {};
        this.D = !1
    }
    $l.prototype.init = function(a, b) {
        var c = jd(a);
        Yg.Za().init(a, c);
        this.G = b
    };
    $l.prototype.J = function(a, b, c) {
        c.ctrlKey || c.altKey || c.shiftKey || c.metaKey || (a = this.C[a]) && 0 < a.length && (am(this), ah()(a, b), c.preventDefault())
    };
    $l.prototype.K = function() {
        am(this);
        Zg(function() {})
    };

    function am(a) {
        a.D || (document.body.appendChild(Be("LINK", {
            type: "text/css",
            rel: "stylesheet",
            href: a.G
        })), a.D = !0)
    };

    function bm() {
        this.D = {};
        this.C = 0;
        this.J = [];
        this.F = [];
        var a = this;
        this.K = function() {
            cm(a)
        }
    }
    bm.prototype.init = function() {
        for (var a = this.D, b = ye(document, "img", "delayLoad"), c = 0; c < b.length; c++)
            if (b[c].style.display == p && (b[c].style.display = ""), 5 > c) {
                var d = b[c];
                "" != d.longDesc && (d.src = d.longDesc)
            } else d = b[c].id, "" == d && (d = "av-delay-tempId-" + c), a[d] = {
                fc: b[c],
                key: d
            }, this.C++;
        0 != this.C && (this.L = hf(window, "scroll", this.K), this.M = hf(window, "resize", this.K), dm(this))
    };

    function cm(a) {
        a.G && window.clearTimeout(a.G);
        a.G = window.setTimeout(function() {
            a.G = null;
            dm(a)
        }, 100)
    }

    function dm(a) {
        if (!(0 > a.C))
            if (0 == a.C) rf(a.L), rf(a.M), a.C = -1;
            else {
                var b = !1,
                    c;
                for (c in a.D) {
                    a: {
                        var d = a;
                        var e = a.D[c],
                            f = window.document;f = "CSS1Compat" == f.compatMode ? f.documentElement : f.body;f = (new se(f.clientWidth, f.clientHeight)).height;
                        var g = e.fc;
                        if (1 == g.nodeType) {
                            try {
                                var h = g.getBoundingClientRect()
                            } catch (k) {
                                h = {
                                    left: 0,
                                    top: 0,
                                    right: 0,
                                    bottom: 0
                                }
                            }
                            g = new re(h.left, h.top)
                        } else g = g.changedTouches ? g.changedTouches[0] : g,
                        g = new re(g.clientX, g.clientY);g = g.y;
                        if (0 <= g && g <= f) d.J.push(e);
                        else if (0 < g && g < Math.round(2.25 *
                                f)) d.F.push(e);
                        else if (0 > g && g > Math.round(-1.25 * f)) d.F.push(e);
                        else {
                            d = !1;
                            break a
                        }
                        d = !0
                    }
                    d && (b = !0)
                }
                if (b) {
                    b = a.J.concat(a.F);
                    for (c = 0; c < b.length; c++) h = b[c].fc, "" != h.longDesc && (h.src = h.longDesc), a.C--, delete a.D[b[c].key];
                    a.J = [];
                    a.F = []
                }
            }
    };
    var em = !Wc && !Pc();

    function fm(a) {
        if (/-[a-z]/.test(za)) return null;
        if (em && a.dataset) {
            if (Rc() && !(za in a.dataset)) return null;
            a = a.dataset.commentId;
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + za.replace(/([A-Z])/g, "-$1").toLowerCase())
    };
    var gm = {};

    function hm(a) {
        var b = gm.hasOwnProperty(a) ? gm[a] : null;
        if (b) return b;
        65536 < Object.keys(gm).length && (gm = {});
        var c = [0, 0, 0, 0],
            d = RegExp("\\\\[0-9A-Fa-f]{1,5}\\s", "g");
        b = im(a, RegExp("\\\\[0-9A-Fa-f]{6}\\s?", "g"));
        b = im(b, d);
        b = im(b, /\\./g);
        b = b.replace(RegExp(":not\\(([^\\)]*)\\)", "g"), "     $1 ");
        b = b.replace(RegExp("{[^]*", "gm"), "");
        b = jm(b, c, RegExp("(\\[[^\\]]+\\])", "g"), 2);
        b = jm(b, c, RegExp("(#[^\\#\\s\\+>~\\.\\[:]+)", "g"), 1);
        b = jm(b, c, RegExp("(\\.[^\\s\\+>~\\.\\[:]+)", "g"), 2);
        b = jm(b, c, /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi, 3);
        b = jm(b, c, /(:[\w-]+\([^\)]*\))/gi, 2);
        b = jm(b, c, /(:[^\s\+>~\.\[:]+)/g, 2);
        b = b.replace(/[\*\s\+>~]/g, " ");
        b = b.replace(/[#\.]/g, " ");
        jm(b, c, /([^\s\+>~\.\[:]+)/g, 3);
        b = c;
        return gm[a] = b
    }

    function jm(a, b, c, d) {
        return a.replace(c, function(e) {
            b[d] += 1;
            return Array(e.length + 1).join(" ")
        })
    }

    function im(a, b) {
        return a.replace(b, function(c) {
            return Array(c.length + 1).join("A")
        })
    };
    var km = {
            "* ARIA-CHECKED": !0,
            "* ARIA-COLCOUNT": !0,
            "* ARIA-COLINDEX": !0,
            "* ARIA-CONTROLS": !0,
            "* ARIA-DESCRIBEDBY": !0,
            "* ARIA-DISABLED": !0,
            "* ARIA-EXPANDED": !0,
            "* ARIA-GOOG-EDITABLE": !0,
            "* ARIA-HASPOPUP": !0,
            "* ARIA-HIDDEN": !0,
            "* ARIA-LABEL": !0,
            "* ARIA-LABELLEDBY": !0,
            "* ARIA-MULTILINE": !0,
            "* ARIA-MULTISELECTABLE": !0,
            "* ARIA-ORIENTATION": !0,
            "* ARIA-PLACEHOLDER": !0,
            "* ARIA-READONLY": !0,
            "* ARIA-REQUIRED": !0,
            "* ARIA-ROLEDESCRIPTION": !0,
            "* ARIA-ROWCOUNT": !0,
            "* ARIA-ROWINDEX": !0,
            "* ARIA-SELECTED": !0,
            "* ABBR": !0,
            "* ACCEPT": !0,
            "* ACCESSKEY": !0,
            "* ALIGN": !0,
            "* ALT": !0,
            "* AUTOCOMPLETE": !0,
            "* AXIS": !0,
            "* BGCOLOR": !0,
            "* BORDER": !0,
            "* CELLPADDING": !0,
            "* CELLSPACING": !0,
            "* CHAROFF": !0,
            "* CHAR": !0,
            "* CHECKED": !0,
            "* CLEAR": !0,
            "* COLOR": !0,
            "* COLSPAN": !0,
            "* COLS": !0,
            "* COMPACT": !0,
            "* COORDS": !0,
            "* DATETIME": !0,
            "* DIR": !0,
            "* DISABLED": !0,
            "* ENCTYPE": !0,
            "* FACE": !0,
            "* FRAME": !0,
            "* HEIGHT": !0,
            "* HREFLANG": !0,
            "* HSPACE": !0,
            "* ISMAP": !0,
            "* LABEL": !0,
            "* LANG": !0,
            "* MAX": !0,
            "* MAXLENGTH": !0,
            "* METHOD": !0,
            "* MULTIPLE": !0,
            "* NOHREF": !0,
            "* NOSHADE": !0,
            "* NOWRAP": !0,
            "* OPEN": !0,
            "* READONLY": !0,
            "* REQUIRED": !0,
            "* REL": !0,
            "* REV": !0,
            "* ROLE": !0,
            "* ROWSPAN": !0,
            "* ROWS": !0,
            "* RULES": !0,
            "* SCOPE": !0,
            "* SELECTED": !0,
            "* SHAPE": !0,
            "* SIZE": !0,
            "* SPAN": !0,
            "* START": !0,
            "* SUMMARY": !0,
            "* TABINDEX": !0,
            "* TITLE": !0,
            "* TYPE": !0,
            "* VALIGN": !0,
            "* VALUE": !0,
            "* VSPACE": !0,
            "* WIDTH": !0
        },
        lm = {
            "* USEMAP": !0,
            "* ACTION": !0,
            "* CITE": !0,
            "* HREF": !0,
            "* LONGDESC": !0,
            "* SRC": !0,
            "LINK HREF": !0,
            "* FOR": !0,
            "* HEADERS": !0,
            "* NAME": !0,
            "A TARGET": !0,
            "* CLASS": !0,
            "* ID": !0,
            "* STYLE": !0
        };
    var mm = {
            rgb: !0,
            rgba: !0,
            alpha: !0,
            rect: !0,
            image: !0,
            "linear-gradient": !0,
            "radial-gradient": !0,
            "repeating-linear-gradient": !0,
            "repeating-radial-gradient": !0,
            "cubic-bezier": !0,
            matrix: !0,
            perspective: !0,
            rotate: !0,
            rotate3d: !0,
            rotatex: !0,
            rotatey: !0,
            steps: !0,
            rotatez: !0,
            scale: !0,
            scale3d: !0,
            scalex: !0,
            scaley: !0,
            scalez: !0,
            skew: !0,
            skewx: !0,
            skewy: !0,
            translate: !0,
            translate3d: !0,
            translatex: !0,
            translatey: !0,
            translatez: !0
        },
        nm = /[\n\f\r"'()*<>]/g,
        om = {
            "\n": "%0a",
            "\f": "%0c",
            "\r": "%0d",
            '"': "%22",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "*": "%2a",
            "<": "%3c",
            ">": "%3e"
        };

    function pm(a) {
        return om[a]
    }

    function qm(a, b, c) {
        b = G(b);
        if ("" == b) return null;
        var d = String(b.slice(0, 4)).toLowerCase();
        if (0 == ("url(" < d ? -1 : "url(" == d ? 0 : 1)) {
            if (!b.endsWith(")") || 1 < (b ? b.split("(").length - 1 : 0) || 1 < (b ? b.split(")").length - 1 : 0) || !c) a = null;
            else {
                a: for (b = b.substring(4, b.length - 1), d = 0; 2 > d; d++) {
                    var e = "\"'".charAt(d);
                    if (b.charAt(0) == e && b.charAt(b.length - 1) == e) {
                        b = b.substring(1, b.length - 1);
                        break a
                    }
                }
                a = c ? (a = c(b, a)) && Id(a) != ra ? 'url("' + Id(a).replace(nm, pm) + '")' : null : null
            }
            return a
        }
        if (0 < b.indexOf("(")) {
            if (/"|'/.test(b)) return null;
            for (a =
                /([\-\w]+)\(/g; c = a.exec(b);)
                if (!(c[1].toLowerCase() in mm)) return null
        }
        return b
    };

    function rm(a, b) {
        a = A[a];
        return a && a.prototype ? (b = Object.getOwnPropertyDescriptor(a.prototype, b)) && b.get || null : null
    }

    function sm(a, b) {
        return (a = A[a]) && a.prototype && a.prototype[b] || null
    }
    var tm = rm(fa, ta) || rm(ia, ta),
        um = sm(fa, Wa),
        vm = sm(fa, Ta),
        wm = sm(fa, ib),
        xm = sm(fa, gb);
    rm(fa, "innerHTML") || rm("HTMLElement", "innerHTML");
    var ym = sm(fa, Ua),
        zm = sm(fa, "matches") || sm(fa, bb),
        Am = rm(ia, "nodeName"),
        Bm = rm(ia, "nodeType"),
        Cm = rm(ia, "parentNode");
    rm(ia, "childNodes");
    var Dm = rm("HTMLElement", lb) || rm(fa, lb),
        Em = rm("HTMLStyleElement", "sheet"),
        Fm = sm(ca, Va),
        Gm = sm(ca, "setProperty"),
        Hm = rm(fa, cb) || rm(ia, cb);

    function Im(a, b, c, d) {
        if (a) return a.apply(b);
        a = b[c];
        if (!d(a)) throw Error(da);
        return a
    }

    function Jm(a, b, c, d) {
        if (a) return a.apply(b, d);
        if (Wc && 10 > document.documentMode) {
            if (!b[c].call) throw Error("IE Clobbering detected");
        } else if (typeof b[c] != m) throw Error(da);
        return b[c].apply(b, d)
    }

    function Km(a) {
        return Im(tm, a, ta, function(b) {
            return b instanceof NamedNodeMap
        })
    }

    function Lm(a, b, c) {
        try {
            Jm(wm, a, ib, [b, c])
        } catch (d) {
            if (-1 == d.message.indexOf("A security problem occurred")) throw d;
        }
    }

    function Mm(a) {
        return Im(Dm, a, lb, function(b) {
            return b instanceof CSSStyleDeclaration
        })
    }

    function Nm(a) {
        return Im(Em, a, "sheet", function(b) {
            return b instanceof CSSStyleSheet
        })
    }

    function Om(a) {
        return Im(Am, a, "nodeName", function(b) {
            return typeof b == u
        })
    }

    function Pm(a) {
        return Im(Bm, a, "nodeType", function(b) {
            return typeof b == q
        })
    }

    function Qm(a) {
        return Im(Cm, a, "parentNode", function(b) {
            return !(b && typeof b.name == u && b.name && "parentnode" == b.name.toLowerCase())
        })
    }

    function Rm(a, b) {
        return Jm(Fm, a, a.getPropertyValue ? Va : Ta, [b]) || ""
    }

    function Sm(a, b, c) {
        Jm(Gm, a, a.setProperty ? "setProperty" : ib, [b, c])
    }

    function Tm(a) {
        return Im(Hm, a, cb, function(b) {
            return typeof b == u
        })
    };
    var Um = Wc && 10 > document.documentMode ? null : RegExp("\\s*([^\\s'\",]+[^'\",]*(('([^'\\r\\n\\f\\\\]|\\\\[^])*')|(\"([^\"\\r\\n\\f\\\\]|\\\\[^])*\")|[^'\",])*)", "g"),
        Vm = {
            "-webkit-border-horizontal-spacing": !0,
            "-webkit-border-vertical-spacing": !0
        };

    function Wm(a, b, c) {
        var d = [];
        Xm(oc(a.cssRules)).forEach(function(e) {
            if (b && !/[a-zA-Z][\w-:\.]*/.test(b)) throw Error("Invalid container id");
            if (!(b && Wc && 10 == document.documentMode && /\\['"]/.test(e.selectorText))) {
                var f = b ? e.selectorText.replace(Um, "#" + b + " $1") : e.selectorText,
                    g = d.push;
                e = Ym(e.style, c);
                if (-1 != f.indexOf("<")) throw Error("Selector does not allow '<', got: " + f);
                var h = f.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
                if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=\\^$|]+$/.test(h)) throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=\\^$|] and strings, got: " +
                    f);
                a: {
                    for (var k = {
                            "(": ")",
                            "[": "]"
                        }, n = [], t = 0; t < h.length; t++) {
                        var v = h[t];
                        if (k[v]) n.push(k[v]);
                        else if (qd(k, v) && n.pop() != v) {
                            h = !1;
                            break a
                        }
                    }
                    h = 0 == n.length
                }
                if (!h) throw Error("() and [] in selector must be balanced, got: " + f);
                if (!(e instanceof Qd)) {
                    h = "";
                    for (var E in e)
                        if (Object.prototype.hasOwnProperty.call(e, E)) {
                            if (!/^[-_a-zA-Z0-9]+$/.test(E)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + E);
                            k = e[E];
                            null != k && (k = Array.isArray(k) ? k.map(Td).join(" ") : Td(k), h += E + ":" + k + ";")
                        }
                    e = h ? new Qd(h, Pd) : Sd
                }
                f = f + "{" + Rd(e).replace(/</g,
                    "\\3C ") + "}";
                g.call(d, new ae(f, $d))
            }
        });
        return be(d)
    }

    function Xm(a) {
        return a.filter(function(b) {
            return b instanceof CSSStyleRule || b.type == CSSRule.STYLE_RULE
        })
    }

    function Zm(a, b, c) {
        a = $m("<style>" + a + "</style>");
        return null == a || null == a.sheet ? de : Wm(a.sheet, void 0 != b ? b : null, c)
    }

    function $m(a) {
        a = ie("<html><head></head><body>" + a + "</body></html>");
        return (new DOMParser).parseFromString(ge(a), "text/html").body.children[0]
    }

    function Ym(a, b) {
        if (!a) return Sd;
        var c = document.createElement(l).style;
        an(a).forEach(function(d) {
            var e = Zc && d in Vm ? d : d.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i, "");
            Ac(e, "--") || Ac(e, "var") || (d = Rm(a, d), d = qm(e, d, b), null != d && Sm(c, e, d))
        });
        return new Qd(c.cssText || "", Pd)
    }

    function bn(a) {
        var b = Array.from(Jm(ym, a, Ua, [la])),
            c = qc(b, function(g) {
                return oc(Nm(g).cssRules)
            });
        c = Xm(c);
        for (var d = [], e = 0; e < c.length; e++) d[e] = {
            index: e,
            Gb: c[e]
        };
        d.sort(function(g, h) {
            var k = hm(g.Gb.selectorText),
                n = hm(h.Gb.selectorText);
            a: {
                for (var t = Math.min(k.length, n.length), v = 0; v < t; v++) {
                    var E = k[v],
                        C = n[v];
                    E = E > C ? 1 : E < C ? -1 : 0;
                    if (0 != E) {
                        n = E;
                        break a
                    }
                }
                k = k.length;n = n.length;n = k > n ? 1 : k < n ? -1 : 0
            }
            return n || g.index - h.index
        });
        for (e = 0; e < d.length; e++) c[e] = d[e].Gb;
        c.reverse();
        a = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT,
            null, !1);
        for (var f; f = a.nextNode();) c.forEach(function(g) {
            Jm(zm, f, f.matches ? "matches" : bb, [g.selectorText]) && g.style && cn(f, g.style)
        });
        b.forEach(Ge)
    }

    function cn(a, b) {
        var c = an(a.style);
        an(b).forEach(function(d) {
            if (!(0 <= c.indexOf(d))) {
                var e = Rm(b, d);
                Sm(a.style, d, e)
            }
        })
    }

    function an(a) {
        Wb(a) ? a = oc(a) : (a = pd(a), mc(a, "cssText"));
        return a
    };
    var dn = "undefined" != typeof WeakMap && -1 != WeakMap.toString().indexOf("[native code]"),
        en = 0;

    function fn() {
        this.F = [];
        this.D = [];
        this.C = "data-elementweakmap-index-" + en++
    }
    fn.prototype.set = function(a, b) {
        if (Jm(um, a, Wa, [this.C])) {
            var c = parseInt(Jm(vm, a, Ta, [this.C]) || null, 10);
            this.D[c] = b
        } else c = this.D.push(b) - 1, Lm(a, this.C, c.toString()), this.F.push(a);
        return this
    };
    fn.prototype.get = function(a) {
        if (Jm(um, a, Wa, [this.C])) return a = parseInt(Jm(vm, a, Ta, [this.C]) || null, 10), this.D[a]
    };
    fn.prototype.clear = function() {
        this.F.forEach(function(a) {
            Jm(xm, a, gb, [this.C])
        }, this);
        this.F = [];
        this.D = []
    };
    var gn;
    (gn = !Wc) || (gn = 10 <= Number(hd));
    var hn = gn,
        jn = !Wc || null == document.documentMode;

    function kn() {
        this.F = document.implementation.createHTMLDocument("")
    };
    var ln = {
        APPLET: !0,
        AUDIO: !0,
        BASE: !0,
        BGSOUND: !0,
        EMBED: !0,
        FORM: !0,
        IFRAME: !0,
        ISINDEX: !0,
        KEYGEN: !0,
        LAYER: !0,
        LINK: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        SVG: !0,
        STYLE: !0,
        TEMPLATE: !0,
        VIDEO: !0
    };
    var mn = {
        A: !0,
        ABBR: !0,
        ACRONYM: !0,
        ADDRESS: !0,
        AREA: !0,
        ARTICLE: !0,
        ASIDE: !0,
        B: !0,
        BDI: !0,
        BDO: !0,
        BIG: !0,
        BLOCKQUOTE: !0,
        BR: !0,
        BUTTON: !0,
        CAPTION: !0,
        CENTER: !0,
        CITE: !0,
        CODE: !0,
        COL: !0,
        COLGROUP: !0,
        DATA: !0,
        DATALIST: !0,
        DD: !0,
        DEL: !0,
        DETAILS: !0,
        DFN: !0,
        DIALOG: !0,
        DIR: !0,
        DIV: !0,
        DL: !0,
        DT: !0,
        EM: !0,
        FIELDSET: !0,
        FIGCAPTION: !0,
        FIGURE: !0,
        FONT: !0,
        FOOTER: !0,
        FORM: !0,
        H1: !0,
        H2: !0,
        H3: !0,
        H4: !0,
        H5: !0,
        H6: !0,
        HEADER: !0,
        HGROUP: !0,
        HR: !0,
        I: !0,
        IMG: !0,
        INPUT: !0,
        INS: !0,
        KBD: !0,
        LABEL: !0,
        LEGEND: !0,
        LI: !0,
        MAIN: !0,
        MAP: !0,
        MARK: !0,
        MENU: !0,
        METER: !0,
        NAV: !0,
        NOSCRIPT: !0,
        OL: !0,
        OPTGROUP: !0,
        OPTION: !0,
        OUTPUT: !0,
        P: !0,
        PRE: !0,
        PROGRESS: !0,
        Q: !0,
        S: !0,
        SAMP: !0,
        SECTION: !0,
        SELECT: !0,
        SMALL: !0,
        SOURCE: !0,
        SPAN: !0,
        STRIKE: !0,
        STRONG: !0,
        STYLE: !0,
        SUB: !0,
        SUMMARY: !0,
        SUP: !0,
        TABLE: !0,
        TBODY: !0,
        TD: !0,
        TEXTAREA: !0,
        TFOOT: !0,
        TH: !0,
        THEAD: !0,
        TIME: !0,
        TR: !0,
        TT: !0,
        U: !0,
        UL: !0,
        VAR: !0,
        WBR: !0
    };
    var nn = {
        "ANNOTATION-XML": !0,
        "COLOR-PROFILE": !0,
        "FONT-FACE": !0,
        "FONT-FACE-SRC": !0,
        "FONT-FACE-URI": !0,
        "FONT-FACE-FORMAT": !0,
        "FONT-FACE-NAME": !0,
        "MISSING-GLYPH": !0
    };

    function on(a) {
        this.F = document.implementation.createHTMLDocument("");
        a = a || new qn;
        rn(a);
        this.D = sd(a.C);
        this.M = sd(a.Z);
        this.G = sd(a.G);
        this.T = a.ha;
        a.ta.forEach(function(b) {
            if (!Ac(b, "data-")) throw new fc('Only "data-" attributes allowed, got: %s.', [b]);
            if (Ac(b, Ka)) throw new fc('Attributes with "%s" prefix are not allowed, got: %s.', [Ka, b]);
            this.D["* " + b.toUpperCase()] = sn
        }, this);
        a.da.forEach(function(b) {
            b = b.toUpperCase();
            if (-1 == b.indexOf("-") || nn[b]) throw new fc("Only valid custom element tag names allowed, got: %s.", [b]);
            this.G[b] = !0
        }, this);
        this.R = a.F;
        this.K = a.X;
        this.J = null;
        this.L = a.T
    }
    F(on, kn);

    function tn(a) {
        return function(b, c) {
            return (b = a(G(b), c)) && Id(b) != ra ? Id(b) : null
        }
    }

    function qn() {
        this.C = {};
        hc([km, lm], function(a) {
            pd(a).forEach(function(b) {
                this.C[b] = sn
            }, this)
        }, this);
        this.D = {};
        this.ta = [];
        this.da = [];
        this.Z = sd(ln);
        this.G = sd(mn);
        this.ha = !1;
        this.R = Ld;
        this.L = this.J = this.K = this.F = kd;
        this.X = null;
        this.M = this.T = !1
    }

    function un() {
        var a = new qn;
        a.G = {
            SPAN: !0
        };
        "a b br em i strong".split(" ").forEach(function(b) {
            b = b.toUpperCase();
            if (mn[b]) this.G[b] = !0;
            else throw Error("Only whitelisted tags can be allowed. See goog.html.sanitizer.TagWhitelist.");
        }, a);
        return a
    }

    function vn(a) {
        var b = new qn;
        b.L = wn;
        b.K = md;
        b.J = md;
        b.F = a;
        return b
    }

    function xn(a, b) {
        a.R = b;
        return a
    }

    function yn(a, b) {
        return function(c, d, e, f) {
            c = a(c, d, e, f);
            return null == c ? null : b(c, d, e, f)
        }
    }

    function zn(a, b, c, d) {
        a[c] && !b[c] && (a[c] = yn(a[c], d))
    }

    function rn(a) {
        if (a.M) throw Error("HtmlSanitizer.Builder.build() can only be used once.");
        zn(a.C, a.D, "* USEMAP", An);
        var b = tn(a.R);
        ["* ACTION", "* CITE", "* HREF"].forEach(function(d) {
            zn(this.C, this.D, d, b)
        }, a);
        var c = tn(a.F);
        ["* LONGDESC", "* SRC", "LINK HREF"].forEach(function(d) {
            zn(this.C, this.D, d, c)
        }, a);
        ["* FOR", "* HEADERS", "* NAME"].forEach(function(d) {
            zn(this.C, this.D, d, bc(Bn, this.K))
        }, a);
        zn(a.C, a.D, "A TARGET", bc(Cn, [qa, "_self"]));
        zn(a.C, a.D, "* CLASS", bc(Dn, a.J));
        zn(a.C, a.D, "* ID", bc(En, a.J));
        zn(a.C,
            a.D, "* STYLE", bc(a.L, c));
        a.M = !0
    }

    function Fn(a, b) {
        a || (a = "*");
        return (a + " " + b).toUpperCase()
    }

    function wn(a, b, c, d) {
        if (!d.Cb) return null;
        b = Rd(Ym(d.Cb, function(e, f) {
            c.rd = f;
            e = a(e, c);
            var g;
            null == e ? g = null : g = new I(e, Md);
            return g
        }));
        return "" == b ? null : b
    }

    function sn(a) {
        return G(a)
    }

    function Cn(a, b) {
        b = G(b);
        return kc(a, b.toLowerCase()) ? b : null
    }

    function An(a) {
        return (a = G(a)) && "#" == a.charAt(0) ? a : null
    }

    function Bn(a, b, c) {
        return a(G(b), c)
    }

    function Dn(a, b, c) {
        b = b.split(/(?:\s+)/);
        for (var d = [], e = 0; e < b.length; e++) {
            var f = a(b[e], c);
            f && d.push(f)
        }
        return 0 == d.length ? null : d.join(" ")
    }

    function En(a, b, c) {
        return a(G(b), c)
    }
    on.prototype.C = function(a) {
        var b = !(la in this.M) && la in this.G;
        this.J = "*" == this.K && b ? "sanitizer-" + (Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)) : this.K;
        if (hn) {
            b = a;
            a = this.F.createElement("span");
            if (hn) {
                this.J && "*" == this.K && (a.id = this.J);
                this.L && (b = $m("<div>" + b + "</div>"), bn(b), b = b.innerHTML);
                b = ie(b);
                var c = document.createElement("template");
                if (jn && "content" in c) oe(c, b), c = c.content;
                else {
                    var d = document.implementation.createHTMLDocument("x");
                    c = d.body;
                    oe(d.body, b)
                }
                b = document.createTreeWalker(c, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null, !1);
                for (c = dn ? new WeakMap : new fn; d = b.nextNode();) {
                    c: {
                        var e = d;
                        switch (Pm(e)) {
                            case 3:
                                e = Gn(this, e);
                                break c;
                            case 1:
                                if ("TEMPLATE" == Om(e).toUpperCase()) e = null;
                                else {
                                    var f = Om(e).toUpperCase();
                                    if (f in this.M || "http://www.w3.org/1999/xhtml" != Tm(e)) var g = null;
                                    else this.G[f] ? g = this.F.createElement(f) : (g = this.F.createElement("span"), this.T && Lm(g, "data-sanitizer-original-tag", f.toLowerCase()));
                                    if (g) {
                                        var h = g,
                                            k = Km(e);
                                        if (null != k)
                                            for (var n = 0; f = k[n]; n++)
                                                if (f.specified) {
                                                    var t = e;
                                                    var v = f;
                                                    var E = v.name;
                                                    if (Ac(E, Ka)) v = null;
                                                    else {
                                                        var C = Om(t);
                                                        v = v.value;
                                                        var O = {
                                                                tagName: G(C).toLowerCase(),
                                                                attributeName: G(E).toLowerCase()
                                                            },
                                                            Od = {
                                                                Cb: void 0
                                                            };
                                                        O.attributeName == lb && (Od.Cb = Mm(t));
                                                        t = Fn(C, E);
                                                        t in this.D ? (E = this.D[t], v = E(v, O, Od)) : (E = Fn(null, E), E in this.D ? (E = this.D[E], v = E(v, O, Od)) : v = null)
                                                    }
                                                    null !== v && Lm(h, f.name, v)
                                                }
                                        e = g
                                    } else e = null
                                }
                                break c;
                            default:
                                e = null
                        }
                    }
                    if (e) {
                        if (1 == Pm(e) && c.set(d, e), d = Qm(d), f = !1, d) g = Pm(d), h = Om(d).toLowerCase(), k = Qm(d), 11 !=
                            g || k ? "body" == h && k && (g = Qm(k)) && !Qm(g) && (f = !0) : f = !0, g = null, f || !d ? g = a : 1 == Pm(d) && (g = c.get(d)), g.content && (g = g.content), g.appendChild(e)
                    } else Fe(d)
                }
                c.clear && c.clear()
            }
            0 < Km(a).length && (b = this.F.createElement("span"), b.appendChild(a), a = b);
            a = (new XMLSerializer).serializeToString(a);
            a = a.slice(a.indexOf(">") + 1, a.lastIndexOf("</"))
        } else a = "";
        return ie(a)
    };

    function Gn(a, b) {
        var c = b.data;
        (b = Qm(b)) && Om(b).toLowerCase() == lb && !(la in a.M) && la in a.G && (c = ce(Zm(c, a.J, B(function(d, e) {
            return this.R(d, {
                rd: e
            })
        }, a))));
        return document.createTextNode(c)
    };

    function Hn(a) {
        N.call(this, "Blog", a);
        this.C = a.N;
        this.K = new on(un());
        if (this.C.data) {
            a = new mi;
            this.L = oi(a, "blog.canonicalUrl");
            if (this.C.data.lightboxEnabled) {
                var b = this.C.data.lightboxModuleUrl,
                    c = this.C.data.lightboxCssUrl;
                Zl().init(b, c);
                b = ye(document, "DIV", "post-body", this.C.C);
                for (c = 0; c < b.length; c++) {
                    for (var d = "fakeId" + In++, e = Zl(), f = ye(document, "IMG", void 0, b[c]), g = f.length, h = [], k = 0; k < g; k++) {
                        var n = f[k].src,
                            t = null,
                            v = Me(f[k], "A");
                        if (v) {
                            v = v.href;
                            var E = v;
                            var C = n;
                            if (el(E) && el(C)) {
                                var O = new Ll;
                                E = O.parse(E ?
                                    xl(Pl(new Nl(E, !1))).sa() : "");
                                C = O.parse(C ? xl(Pl(new Nl(C, !1))).sa() : "");
                                C = E.D.D == C.D.D
                            } else C = !1;
                            C || (C = v, O = n, C = Wl(C) && Wl(O) ? Xl(C) === Xl(O) : !1);
                            if (C) {
                                if (v != n && (t = n), n = v, !Wl(n) && (v = Kl(Ql.parse(n, !1)))) v = (new ll).parse(v), v = new Y(v), C = (C = void 0, void 0), O = v.D.C, wl(C, S(O, 4)) && T(O, 4, C), C = (C = void 0, void 0), O = v.D.C, wl(C, S(O, 6)) && T(O, 6, C), v = v.sa(), n = new Nl(n, !1), ul(n, v), n = n.sa()
                            } else if (v != n) continue;
                            h.push({
                                imageUrl: n,
                                thumbnailUrl: t
                            });
                            hf(f[k], va, B(e.J, e, d, h.length - 1))
                        }
                    }
                    0 < h.length && (e.C[d] = h, e.F || (e.F = hf(window,
                        "load", e.K, !1, e)))
                }
            }
            this.C.data.mobile && (this.G = new $k(oi(a, "blog.pageTitle"), this.L));
            this.J = this.D = null
        }
    }
    z(Hn, N);
    w = Hn.prototype;
    w.ja = function(a, b) {
        if ("getComments" == a) {
            if (b.comments && b.messages) {
                a = b.comments;
                for (var c = b.config, d = 0; d < a.length; d++) a: {
                    var e = b,
                        f = a[d];
                    if (!document.getElementById("c" + f.id)) {
                        f.author = this.K.C(f.author);
                        f.body = this.K.C(f.body);
                        var g = 1;
                        if (f.inReplyTo) {
                            var h = document.getElementById("c" + f.inReplyTo);
                            if (h) {
                                var k;
                                g = h;
                                for (k = []; g;) xc(g, "comment") && k.push(g), g = He(g);
                                g = k.length + 1;
                                k.length + 1 > e.config.maxDepth && ((h = Me(h.parentNode, null, "comment")) ? (g--, f.inReplyTo = h.id.slice(1)) : g = 1)
                            }
                        }
                        h = document.getElementById("c" +
                            f.inReplyTo + "-ra");
                        if (!h && (h = document.getElementById("top-ra"), !h)) break a;
                        g = {
                            config: e.config,
                            zd: e.messages,
                            qd: f,
                            depth: g
                        };
                        k = Qk;
                        e = ec || (ec = new Oe);
                        if ((g = k(g || Pk, void 0)) && g.C) e = g.C();
                        else {
                            c: if (Xb(g)) {
                                if (g.rc && (g = g.rc(), g instanceof fe)) break c;
                                g = he("zSoyz")
                            } else g = he(String(g));e = e.D;k = g;g = De(e, "DIV");Wc ? (k = le(me, k), oe(g, k), g.removeChild(g.firstChild)) : oe(g, k);
                            if (1 == g.childNodes.length) e = g.removeChild(g.firstChild);
                            else
                                for (e = e.createDocumentFragment(); g.firstChild;) e.appendChild(g.firstChild)
                        }
                        Jn(this,
                            e);
                        h.appendChild(e);
                        f.inReplyTo && (f = document.getElementById("c" + f.inReplyTo + "-rt")) && uc(f, Xa)
                    }
                }
                a.length < c.commentsPerPage ? (this.D = null, sc(K("loadmore", this.C.C), Xa)) : this.D = a[a.length - 1].timestampAbs + 1
            }
        } else N.prototype.ja.call(this, a, b)
    };
    w.ad = function(a) {
        var b = null,
            c = null;
        a = Me(a.currentTarget, null, "thread-toggle");
        xc(a, pb) ? (b = ob, c = pb) : (b = pb, c = ob);
        hc(xe(c, He(a)), function(d) {
            wc(d, c, b)
        })
    };
    w.Pc = function(a) {
        a = fm(a.currentTarget);
        Kn(this, a || void 0)
    };

    function Kn(a, b) {
        var c = document.getElementById(ya);
        if (c) {
            var d = kk(c.src),
                e = b ? "c" + b : "top",
                f = document.getElementById(e + "-ce");
            f && f !== He(c) && (c.height = "250px", c.style.display = ua, c.src = "", f.appendChild(c), b ? d.C.set("parentID", b) : qk(d.C, "parentID"), c.src = d.toString());
            hc(xe("continue", a.C.C), function(g) {
                uc(g, Xa)
            });
            (a = document.getElementById(e + "-continue")) && sc(a, Xa)
        }
    }
    w.Ic = function() {
        this.J && this.D && this.H.Fa("getComments", {
            postId: this.J,
            publishedMin: this.D
        }, function(a) {
            return 500 > ii(a)
        }, ha)
    };
    w.ia = function() {
        if (this.C.data.mobile) {
            var a = J(ya),
                b = window.location.href.split("#");
            b[b.length - 1] && "comment-form" == b[b.length - 1] ? a && (a.style.display = ua) : a && (a.style.display = p);
            a = L(this.H, "comment-editor-toggle-link");
            null != a && (a.onclick = this.Zc);
            (a = J("mobile-share-button")) && this.G && (a.onclick = B(this.Bd, this))
        }
        this.R = new bm;
        this.R.init();
        Jn(this, this.C.C);
        if (a = K("loadmore", this.C.C)) {
            a.onclick = this.Ic.bind(this);
            if (em && a.dataset) b = a.dataset;
            else {
                b = {};
                for (var c = a.attributes, d = 0; d < c.length; ++d) {
                    var e =
                        c[d];
                    if (Ac(e.name, "data-")) {
                        var f = ue(e.name.slice(5));
                        b[f] = e.value
                    }
                }
            }
            b.publishedMin && b.postId && (this.D = parseInt(b.publishedMin, 10) + 1, this.J = b.postId, uc(a, Xa))
        }
        Kn(this)
    };

    function Jn(a, b) {
        hc(xe("thread-toggle", b), function(c) {
            c.onclick = this.ad.bind(this);
            hc((c || document).getElementsByTagName("A"), function(d) {
                d.href = "javascript:;"
            })
        }, a);
        hc(xe("comment-reply", b), function(c) {
            c.onclick = this.Pc.bind(this);
            c.href = "javascript:;"
        }, a)
    }
    w.Bd = function() {
        this.G.wa ? this.G.show(!0) : this.G.render()
    };
    w.Zc = function() {
        var a = J(ya);
        a && (a.style.display = a.style.display == p ? ua : p);
        return !1
    };
    var In = 0;
    D("_BlogView", Hn);

    function Ln(a) {
        N.call(this, "BlogList", a)
    }
    z(Ln, N);
    w = Ln.prototype;
    w.ia = function() {
        var a = this.H.N.data;
        this.Hb = a.totalItems;
        this.fb = a.numItemsToShow;
        0 != this.fb && this.Hb > this.fb && (hi(this.H, "show-all").onclick = this.tc.bind(this), hi(this.H, "show-n").onclick = this.tc.bind(this));
        hf(window, "load", this.Hc)
    };
    w.tc = function() {
        var a = L(this.H, "blogs");
        if (null != a) {
            a = a.getElementsByTagName("li");
            for (var b = this.fb; b < this.Hb; b++) {
                var c = a[b];
                c.style.display = c.style.display == p ? ua : p
            }
            a = hi(this.H, "show-all");
            a.style.display = a.style.display == p ? "inline" : p;
            a = hi(this.H, "show-n");
            a.style.display = a.style.display == p ? "inline" : p
        }
    };
    w.Hc = function() {
        for (var a = document.images.length, b = 0; b < a; b++) {
            var c = document.images[b],
                d = null;
            if (d = c.getAttribute("data-lateloadsrc")) hf(c, Qa, function() {
                this.style.visibility = Xa
            }), c.src = d
        }
    };
    w.Hb = null;
    w.fb = null;
    D("_BlogListView", Ln);

    function Mn(a) {
        N.call(this, "BlogSearch", a)
    }
    z(Mn, N);
    D("_BlogSearchView", Mn);
    var Nn = RegExp("^[+a-zA-Z0-9_.!#$%&'*\\/=?^`{|}~-]+@([a-zA-Z0-9-]+\\.)+[a-zA-Z0-9]{2,63}$");

    function On(a) {
        N.call(this, "ContactForm", a);
        this.C = a.N;
        this.D = this.C.data
    }
    F(On, N);
    D("_ContactFormView", On);
    On.prototype.ia = function() {
        var a = J(L(this.H, Ga));
        if (a) {
            var b = this;
            a.onclick = function() {
                Pn(b) && Qn(b)
            }
        }
    };

    function Pn(a) {
        J(L(a.H, Da)).className = Da;
        J(L(a.H, Da)).textContent = "";
        J(L(a.H, Ha)).className = Ha;
        J(L(a.H, Ha)).textContent = "";
        var b = De(document, "IMG");
        b.src = "https://resources.blogblog.com/img/widgets/icon_contactform_cross.gif";
        b.className = "contact-form-cross";
        b.onclick = function() {
            J(L(a.H, Da)).className = Da;
            J(L(a.H, Da)).textContent = ""
        };
        var c = G(J(L(a.H, Ba)).value);
        if (!Nn.test(c)) return J(L(a.H, Da)).className = Ea, J(L(a.H, Da)).innerHTML = a.D.contactFormInvalidEmailMsg, J(L(a.H, Da)).appendChild(b), !1;
        c = J(L(a.H,
            Ca)).value;
        return null == c || "" == G(c) ? (J(L(a.H, Da)).className = Ea, J(L(a.H, Da)).innerHTML = a.D.contactFormEmptyMessageMsg, J(L(a.H, Da)).appendChild(b), !1) : !0
    }

    function Qn(a) {
        J(L(a.H, Ga)).className = "contact-form-button contact-form-button-submit disabled";
        J(L(a.H, Ga)).disabled = !0;
        J(L(a.H, Ha)).className = Ia;
        J(L(a.H, Ha)).innerHTML = a.D.contactFormMessageSendingMsg;
        var b = encodeURIComponent(G(J(L(a.H, Fa)).value)),
            c = encodeURIComponent(G(J(L(a.H, Ba)).value)),
            d = encodeURIComponent(G(J(L(a.H, Ca)).value)),
            e = encodeURIComponent(a.D.blogId),
            f = encodeURIComponent(a.D.contactFormToken);
        b = ["name=" + b, "email=" + c, "message=" + d, "blogID=" + e, "token=" + f];
        c = a.D.submitUrl;
        if (window.XDomainRequest &&
            9 >= Tc()) {
            var g = new XDomainRequest;
            g.onload = function() {
                var h = eval("(" + g.responseText + ")");
                h = eval(h.details.emailSentStatus);
                Rn(a, h)
            };
            g.open("post", c, !0);
            g.send(b.join("&"))
        } else ph(c, a.sd.bind(a), "POST", b.join("&"))
    }
    On.prototype.sd = function(a) {
        a = a.target;
        var b = eval("(" + zh(a) + ")");
        b = eval(b.details.emailSentStatus);
        Rn(this, yh(a) && b)
    };

    function Rn(a, b) {
        J(L(a.H, Ha)).className = Ia;
        b ? (J(L(a.H, Fa)).value = "", J(L(a.H, Ba)).value = "", J(L(a.H, Ca)).value = "", J(L(a.H, Ha)).innerHTML = a.D.contactFormMessageSentMsg) : J(L(a.H, Ha)).innerHTML = a.D.contactFormMessageNotSentMsg;
        setTimeout(function() {
            J(L(a.H, Ha)).className = Ha;
            J(L(a.H, Ha)).textContent = "";
            J(L(a.H, Ga)).className = "contact-form-button contact-form-button-submit";
            J(L(a.H, Ga)).removeAttribute("disabled")
        }, 3E3)
    };

    function Sn(a) {
        N.call(this, "Example", a)
    }
    z(Sn, N);
    D("_ExampleView", Sn);

    function Tn(a) {
        N.call(this, "FeaturedPost", a)
    }
    z(Tn, N);
    D("_FeaturedPostView", Tn);

    function Un() {};
    /*

     Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: MIT
    */
    function Vn(a, b) {
        this.J = [];
        this.X = a;
        this.ha = b || null;
        this.G = this.F = !1;
        this.D = void 0;
        this.R = this.Z = this.M = !1;
        this.K = 0;
        this.C = null;
        this.L = 0
    }
    F(Vn, Un);
    Vn.prototype.cancel = function(a) {
        if (this.F) this.D instanceof Vn && this.D.cancel();
        else {
            if (this.C) {
                var b = this.C;
                delete this.C;
                a ? b.cancel(a) : (b.L--, 0 >= b.L && b.cancel())
            }
            this.X ? this.X.call(this.ha, this) : this.R = !0;
            this.F || (a = new Wn(this), Xn(this), Yn(this, !1, a))
        }
    };
    Vn.prototype.T = function(a, b) {
        this.M = !1;
        Yn(this, a, b)
    };

    function Yn(a, b, c) {
        a.F = !0;
        a.D = c;
        a.G = !b;
        Zn(a)
    }

    function Xn(a) {
        if (a.F) {
            if (!a.R) throw new $n(a);
            a.R = !1
        }
    }
    Vn.prototype.callback = function(a) {
        Xn(this);
        Yn(this, !0, a)
    };

    function ao(a, b, c, d) {
        a.J.push([b, c, d]);
        a.F && Zn(a)
    }
    Vn.prototype.then = function(a, b, c) {
        var d, e, f = new Tf(function(g, h) {
            e = g;
            d = h
        });
        ao(this, e, function(g) {
            g instanceof Wn ? f.cancel() : d(g);
            return bo
        }, this);
        return f.then(a, b, c)
    };
    Vn.prototype.$goog_Thenable = !0;

    function co(a) {
        return jc(a.J, function(b) {
            return typeof b[1] === m
        })
    }
    var bo = {};

    function Zn(a) {
        if (a.K && a.F && co(a)) {
            var b = a.K,
                c = eo[b];
            c && (A.clearTimeout(c.ga), delete eo[b]);
            a.K = 0
        }
        a.C && (a.C.L--, delete a.C);
        b = a.D;
        for (var d = c = !1; a.J.length && !a.M;) {
            var e = a.J.shift(),
                f = e[0],
                g = e[1];
            e = e[2];
            if (f = a.G ? g : f) try {
                var h = f.call(e || a.ha, b);
                h === bo && (h = void 0);
                void 0 !== h && (a.G = a.G && (h == b || h instanceof Error), a.D = b = h);
                if (Sf(b) || typeof A.Promise === m && b instanceof A.Promise) d = !0, a.M = !0
            } catch (k) {
                b = k, a.G = !0, co(a) || (c = !0)
            }
        }
        a.D = b;
        d && (h = B(a.T, a, !0), d = B(a.T, a, !1), b instanceof Vn ? (ao(b, h, d), b.Z = !0) : b.then(h,
            d));
        c && (b = new fo(b), eo[b.ga] = b, a.K = b.ga)
    }

    function $n() {
        dc.call(this)
    }
    F($n, dc);
    $n.prototype.message = "Deferred has already fired";
    $n.prototype.name = "AlreadyCalledError";

    function Wn() {
        dc.call(this)
    }
    F(Wn, dc);
    Wn.prototype.message = "Deferred was canceled";
    Wn.prototype.name = "CanceledError";

    function fo(a) {
        this.ga = A.setTimeout(B(this.D, this), 0);
        this.C = a
    }
    fo.prototype.D = function() {
        delete eo[this.ga];
        throw this.C;
    };
    var eo = {};

    function go(a, b) {
        var c = b || {};
        b = c.document || document;
        var d = Dd(a).toString(),
            e = Pe(new Oe(b), ja),
            f = {
                qc: e,
                za: void 0
            },
            g = new Vn(ho, f),
            h = null,
            k = null != c.timeout ? c.timeout : 5E3;
        0 < k && (h = window.setTimeout(function() {
            io(e, !0);
            var n = new jo(1, "Timeout reached for loading script " + d);
            Xn(g);
            Yn(g, !1, n)
        }, k), f.za = h);
        e.onload = e.onreadystatechange = function() {
            e.readyState && "loaded" != e.readyState && e.readyState != Aa || (io(e, c.od || !1, h), g.callback(null))
        };
        e.onerror = function() {
            io(e, !0, h);
            var n = new jo(0, "Error while loading script " +
                d);
            Xn(g);
            Yn(g, !1, n)
        };
        f = c.attributes || {};
        ud(f, {
            type: nb,
            charset: "UTF-8"
        });
        ze(e, f);
        pe(e, a);
        ko(b).appendChild(e);
        return g
    }

    function ko(a) {
        var b = (a || document).getElementsByTagName("HEAD");
        return b && 0 !== b.length ? b[0] : a.documentElement
    }

    function ho() {
        if (this && this.qc) {
            var a = this.qc;
            a && a.tagName == ja && io(a, !0, this.za)
        }
    }

    function io(a, b, c) {
        null != c && A.clearTimeout(c);
        a.onload = function() {};
        a.onerror = function() {};
        a.onreadystatechange = function() {};
        b && window.setTimeout(function() {
            Ge(a)
        }, 0)
    }

    function jo(a, b) {
        var c = "Jsloader error (code #" + a + ")";
        b && (c += ": " + b);
        dc.call(this, c);
        this.code = a
    }
    F(jo, dc);

    function lo() {
        this.C = mo;
        this.za = 5E3
    }
    var no = 0;
    lo.prototype.cancel = function(a) {
        a && (a.td && a.td.cancel(), a.ga && oo(a.ga, !1))
    };

    function po(a) {
        return function() {
            oo(a, !1)
        }
    }

    function qo(a, b) {
        return function(c) {
            oo(a, !0);
            b.apply(void 0, arguments)
        }
    }

    function oo(a, b) {
        a = "_callbacks___" + a;
        if (A[a])
            if (b) try {
                delete A[a]
            } catch (c) {
                A[a] = void 0
            } else A[a] = ld
    };
    var ro = Cb(["//ajax.googleapis.com/ajax/services/feed/load"]);

    function so(a) {
        N.call(this, "Feed", a)
    }
    z(so, N);
    so.prototype.ja = function(a, b) {
        "getFeed" == a ? (this.C.F = b, to(this.C)) : N.prototype.ja.call(this, a, b)
    };
    so.prototype.ia = function() {
        if (this.D = L(this.H, "feedItemListDisplay")) {
            var a = this.H.N.data;
            this.C = new uo(a.feedUrl, this.D, {
                numItemsShow: a.numItemsShow,
                showItemAuthor: a.showItemAuthor,
                showItemDate: a.showItemDate,
                linkTarget: a.openLinksInNewWindow ? qa : "_self",
                useFeedWidgetServ: "true" === a.useFeedWidgetServ
            });
            "true" === a.useFeedWidgetServ ? this.H.Fa("getFeed", null, null, ha) : to(this.C)
        }
    };

    function uo(a, b, c) {
        this.M = a;
        this.D = b;
        this.C = c
    }

    function to(a) {
        if (a.C.useFeedWidgetServ) "ok" == a.F.status ? vo(a, a.F.feed) : wo(a);
        else {
            var b = new lo;
            b.za = -1;
            var c = {
                    q: a.M,
                    num: a.C.numItemsShow,
                    output: "json",
                    v: "1.0"
                },
                d = B(a.G, a);
            a = c ? sd(c) : {};
            c = "_" + (no++).toString(36) + Date.now().toString(36);
            var e = "_callbacks___" + c;
            d && (A[e] = qo(c, d), a.callback = e);
            d = {
                timeout: b.za,
                od: !0
            };
            b = Ed.exec(Dd(b.C).toString());
            e = b[3] || "";
            b = Gd(b[1] + Hd("?", b[2] || "", a) + Hd("#", e));
            b = go(b, d);
            ao(b, null, po(c))
        }
    }
    uo.prototype.G = function(a) {
        200 == a.responseStatus ? vo(this, a.responseData.feed) : wo(this)
    };

    function vo(a, b) {
        Fe(a.D);
        var c = De(document, "ul");
        a.D.appendChild(c);
        for (var d = Math.min(b.entries.length, a.C.numItemsShow), e = 0; e < d; e++) {
            var f = b.entries[e],
                g = De(document, "li");
            c.appendChild(g);
            var h;
            (h = a.C.previewMode) || (h = (new Uj(f.link)).G, h = !("" == h || "http" == h || "https" == h));
            h = h ? Be("A", {
                href: "javascript:void(0);"
            }, f.title) : Be("A", {
                href: f.link
            }, f.title);
            h.target = a.C.linkTarget;
            g.appendChild(Be(ka, {
                "class": "item-title"
            }, h));
            a.C.showItemDate && (h = Be(ka, {
                    "class": "item-date"
                }, "\u00a0-\u00a0" + (new Date(f.publishedDate)).toLocaleDateString()),
                g.appendChild(h));
            a.C.showItemAuthor && (f = Be(ka, {
                "class": "item-author"
            }, "\u00a0-\u00a0" + f.author), g.appendChild(f))
        }
        a.J && a.J(b)
    }

    function wo(a) {
        Fe(a.D);
        a.D.appendChild(Be(ka, null, "Error loading feed."));
        a.K && a.K()
    }
    var mo = function(a) {
        var b = Jb.apply(1, arguments);
        if (0 === b.length) return Gd(a[0]);
        for (var c = a[0], d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return Gd(c)
    }(ro);
    D("_FeedView", so);

    function xo(a) {
        N.call(this, "Followers", a);
        this.C = a.N
    }
    z(xo, N);
    xo.prototype.ja = function(a, b) {
        "getFacepile" == a ? (yo(this, b), zo(this), Ao(this, b)) : N.prototype.ja.call(this, a, b)
    };
    xo.prototype.ia = function() {
        rd(this.C.data) || (zo(this), Ao(this, this.C.data))
    };

    function yo(a, b) {
        a = pc(b.followers, ye(document, "a", "follower-link", K(Sa, a.C.C)));
        for (b = 0; b < a.length; b++) {
            var c = a[b][0],
                d = a[b][1];
            d.setAttribute(La, c.viewUrl);
            d.onclick = function() {
                return !1
            };
            d = K("follower-thumbnail", d);
            d.setAttribute("src", c.thumbnailUrl);
            d.setAttribute(qb, c.displayName)
        }
    }

    function zo(a) {
        var b = K(Sa, a.C.C);
        if (b) {
            b = ye(document, "a", "follower-link", b);
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d.getAttribute(La) && (d.onclick = B(Bo, a, d.getAttribute(La)))
            }
        }
    }

    function Ao(a, b) {
        var c = K("followers-next-link", a.C.C);
        c && (b.nextTimestamp ? (c.style.display = "inline", c = K("next-page-link", c), c.href = "#", c.onclick = function() {
            return !1
        }, sf(c), hf(c, va, B(xo.prototype.D, a, b.nextTimestamp))) : c.style.display = p)
    }
    xo.prototype.D = function(a) {
        this.H.Fa("getFacepile", {
            fcMT: a
        }, null, ha)
    };

    function Bo(a) {
        window.open(a, qa, "height=600, width=640, toolbar=no, menubar=no, scrollbars=yes, resizable=yes, location=no, directories=no, status=no")
    }
    D("_FollowersView", xo);

    function Co(a) {
        N.call(this, Co.ea, a)
    }
    F(Co, N);
    Co.ea = "Header";
    D("_HeaderView", Co);

    function Do(a, b) {
        N.call(this, b, a)
    }
    z(Do, N);

    function Eo(a) {
        N.call(this, "Text", a)
    }
    z(Eo, Do);

    function Fo(a) {
        N.call(this, "HTML", a)
    }
    z(Fo, Do);
    D("_TextView", Eo);
    D("_HTMLView", Fo);

    function Go(a) {
        N.call(this, "Image", a);
        this.C = a.N
    }
    z(Go, N);
    Go.prototype.ia = function() {
        if (1 == this.C.data.resize) {
            var a = L(this.H, "img"),
                b = this.C.C;
            if (a && b) {
                if (document.defaultView) b = parseInt(document.defaultView.getComputedStyle(b, null).width, 10);
                else if (b.currentStyle) a.style.display = p, b = b.offsetWidth, a.style.display = "";
                else return;
                a.width > b && (a.height = Math.round(b / a.width * a.height), a.width = b);
                a.style.visibility = sb
            }
        }
    };
    D("_ImageView", Go);

    function Ho(a) {
        N.call(this, "Label", a)
    }
    z(Ho, N);
    D("_LabelView", Ho);

    function Io(a) {
        N.call(this, Io.ea, a)
    }
    F(Io, N);
    Io.ea = "TextList";
    D("_TextListView", Io);

    function Jo(a) {
        N.call(this, Jo.ea, a)
    }
    F(Jo, N);
    Jo.ea = "LinkList";
    D("_LinkListView", Jo);

    function Ko(a) {
        N.call(this, "BloggerButton", a)
    }
    z(Ko, N);
    D("_BloggerButtonView", Ko);

    function Lo(a) {
        N.call(this, "Navbar", a)
    }
    z(Lo, N);
    D("_NavbarView", Lo);

    function Mo(a) {
        N.call(this, "PageList", a)
    }
    z(Mo, N);
    Mo.prototype.F = function() {
        return "PageList"
    };
    Mo.prototype.ia = function() {
        if (0 != this.H.N.data.mobile) {
            var a = L(this.H, "select");
            a && (a.onchange = function(b) {
                b = b || window.event;
                b = b.target || b.srcElement;
                if (b = b.options[b.selectedIndex].value) window.location = b
            })
        }
    };
    var _PageListView = Mo;
    D("_PageListView", Mo);

    function No(a) {
        N.call(this, "Poll", a);
        this.G = this.D = this.C = null;
        if (a = this.H.N.data) this.C = "poll-widget" + a.pollid, this.D = a.iframeurl, this.G = hf(window, "message", this.J, !1, this), a = document.getElementsByName(this.C)[0], void 0 != a && (a.src.src = Dd(this.D).toString())
    }
    z(No, N);
    No.prototype.J = function(a) {
        var b = document.getElementsByName(this.C)[0];
        void 0 != b && (a = a.C, a.source === b.contentWindow && Ac(this.D, a.origin) && (a = a.data, typeof a !== q || 0 > a || (b.height = a + "px", rf(this.G))))
    };
    D("_PollView", No);

    function Oo(a) {
        N.call(this, "PopularPosts", a)
    }
    z(Oo, N);
    D("_PopularPostsView", Oo);

    function Po(a) {
        N.call(this, "Profile", a);
        this.C = a.N
    }
    z(Po, N);
    Po.prototype.ia = function() {
        this.C && this.C.C && 0 == this.H.N.data.isDisplayable && (this.C.C.style.display = p)
    };
    D("_ProfileView", Po);

    function Qo(a) {
        N.call(this, "RecentPosts", a)
    }
    z(Qo, N);
    D("_RecentPostsView", Qo);

    function Ro(a) {
        N.call(this, "ReportAbuse", a)
    }
    z(Ro, N);
    D("_ReportAbuseView", Ro);

    function So(a) {
        N.call(this, So.ea, a)
    }
    F(So, N);
    So.ea = "Sharing";
    D("_SharingView", So);

    function To(a) {
        N.call(this, "Stats", a)
    }
    z(To, N);
    To.prototype.ia = function() {
        null != L(this.H, "totalCount") && ph(this.H.N.data.statsUrl, B(this.J, this))
    };
    To.prototype.J = function(a) {
        a = a.target;
        if (yh(a)) {
            if (a.C) b: {
                a = a.C.responseText;
                if (A.JSON) try {
                    var b = A.JSON.parse(a);
                    break b
                } catch (h) {}
                b = ch(a)
            }
            else b = void 0;
            a = this.H.N.data;
            var c = L(this.H, "totalCount");
            if (null != c) {
                if (a.showGraphicalCounter) {
                    this.G = b.total;
                    for (var d = "" + b.total, e = 0; e < d.length; e++) c.appendChild(Be(ka, {
                        "class": "digit stage-0"
                    }, Be("STRONG", null, document.createTextNode(String(d.charAt(e)))), Be(ka, {
                        "class": "blind-plate"
                    })));
                    a.showAnimatedCounter && (this.D = new kg(b.nextTickMs), hf(this.D, "tick",
                        B(this.K, this, c)), this.D.start())
                } else {
                    d = b.total;
                    if (isNaN(d) || 0 > d) d = "NaN";
                    else {
                        d = d.toString();
                        e = [];
                        for (var f = d.length, g = 0; g < f; g++) 0 < g && 0 == g % 3 && e.push(","), e.push(d.charAt(f - 1 - g));
                        d = e.reverse().join("")
                    }
                    Ie(c, d)
                }
                a.showSparkline && (a = hi(this.H, "sparklinespan"), c = b.sparklineData, b = b.sparklineOptions, a && c && b ? Uo(a, c, b) : a && a.parentNode.removeChild(a));
                hi(this.H, "content").style.display = ""
            }
        }
    };

    function Uo(a, b, c) {
        google.charts.load("current", {
            packages: ["corechart"]
        });
        google.charts.setOnLoadCallback(function() {
            (new google.visualization.AreaChart(a)).draw(google.visualization.arrayToDataTable(b, !0), Object.assign({
                enableInteractivity: !1,
                chartArea: {
                    top: 0,
                    left: 0,
                    width: 75,
                    height: 30
                },
                hAxis: {
                    textPosition: p,
                    gridlines: {
                        color: "transparent"
                    }
                },
                vAxis: {
                    textPosition: p,
                    gridlines: {
                        color: "transparent"
                    }
                },
                legend: {
                    position: p
                }
            }, c))
        })
    }
    To.prototype.K = function(a) {
        if (Vo(this.G + 1) > Vo(this.G)) sf(this.D), lg(this.D);
        else {
            this.G++;
            for (var b = "" + this.G, c = 0; c < b.length; c++) {
                var d = a.childNodes[c],
                    e = b.charAt(c);
                var f = [];
                Le(d.firstChild, f, !0);
                f = f.join("");
                f = f.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
                f = f.replace(/\u200B/g, "");
                f = f.replace(/ +/g, " ");
                " " != f && (f = f.replace(/^\s*/, ""));
                f != e && (Ie(d.firstChild, e), mg(B(this.C, this, d, 1), 50), mg(B(this.C, this, d, 2), 100), mg(B(this.C, this, d, 3), 150), mg(B(this.C, this, d, 0), 200))
            }
        }
    };

    function Vo(a) {
        return 0 == a ? 1 : Math.floor(Math.log(a) / Math.LN10) + 1
    }
    To.prototype.C = function(a, b) {
        var c = "stage-" + (0 != b ? b - 1 : 3);
        b = "stage-" + b;
        var d = rc(a);
        typeof c === u ? mc(d, c) : Array.isArray(c) && (d = vc(d, c));
        typeof b !== u || kc(d, b) ? Array.isArray(b) && tc(d, b) : d.push(b);
        a.className = d.join(" ")
    };
    D("_StatsView", To);

    function Wo(a) {
        N.call(this, "Subscribe", a)
    }
    z(Wo, N);

    function Xo(a, b) {
        a.style.zIndex = 1 == b ? "20" : ""
    }
    var Yo = null,
        Zo = null;
    D("_SubscribeView", Wo);
    D("_SW_toggleReaderList", function(a, b) {
        var c = document.getElementById(ma + b),
            d = document.getElementById(na + b);
        a || (a = window.event);
        a.cancelBubble = !0;
        a.stopPropagation && a.stopPropagation();
        var e = document.onclick;
        null != Yo && Yo != c && (Xo(Yo.parentNode, !1), Yo.style.display = p, Zo.style.visibility = sb);
        c.style.display == p ? (Xo(c.parentNode, !0), c.style.display = "", Yo = c, Zo = d, d.style.visibility = Xa, document.onclick = function() {
            c.style.display = p;
            Xo(c.parentNode, !1);
            d.style.visibility = sb;
            e && (document.onclick = e)
        }) : (c.style.display =
            p, Xo(c.parentNode, !1), d.style.visibility = sb, e && (document.onclick = e));
        return !1
    });
    D("_SW_hideReaderList", function(a) {
        var b = document.getElementById(ma + a);
        a = document.getElementById(na + a);
        b.style.display = p;
        Xo(b.parentNode, !1);
        a.style.visibility = sb
    });

    function $o(a) {
        N.call(this, $o.ea, a)
    }
    F($o, N);
    $o.ea = "Translate";
    D("_TranslateView", $o);

    function ap(a) {
        this.oa = wj(a)
    }
    z(ap, Mj);
    var bp = function(a) {
        return function(b) {
            b = JSON.parse(b);
            if (!Array.isArray(b)) throw Error("Expected jspb data to be an array, got " + Vb(b) + ": " + b);
            Vi(b, 34);
            return new a(b)
        }
    }(ap);
    var cp;

    function dp() {
        var a = cp || (cp = bp('[null,null,null,null,null,"(function(){\'use strict\';/*\\n\\n Copyright The Closure Library Authors.\\n SPDX-License-Identifier: Apache-2.0\\n*/\\nvar e\\u003dthis||self;function f(a){return a};var h;function k(a){this.g\\u003da}k.prototype.toString\\u003dfunction(){return this.g+\\"\\"};var l\\u003d{};function m(a){if(void 0\\u003d\\u003d\\u003dh){var c\\u003dnull;var b\\u003de.trustedTypes;if(b\\u0026\\u0026b.createPolicy){try{c\\u003db.createPolicy(\\"goog#html\\",{createHTML:f,createScript:f,createScriptURL:f})}catch(d){e.console\\u0026\\u0026e.console.error(d.message)}h\\u003dc}else h\\u003dc}a\\u003d(c\\u003dh)?c.createScriptURL(a):a;return new k(a,l)};/*\\n\\n SPDX-License-Identifier: Apache-2.0\\n*/\\nif(!function(){if(self.origin)return\\"null\\"\\u003d\\u003d\\u003dself.origin;if(\\"\\"!\\u003d\\u003dlocation.host)return!1;try{return window.parent.escape(\\"\\"),!1}catch(a){return!0}}())throw Error(\\"sandboxing error\\");\\nwindow.addEventListener(\\"message\\",function(a){var c\\u003da.ports[0];a\\u003da.data;var b\\u003da.callbackName.split(\\".\\"),d\\u003dwindow;\\"window\\"\\u003d\\u003d\\u003db[0]\\u0026\\u0026b.shift();for(var g\\u003d0;g\\u003cb.length-1;g++)d[b[g]]\\u003d{},d\\u003dd[b[g]];d[b[b.length-1]]\\u003dfunction(n){c.postMessage(JSON.stringify(n))};b\\u003ddocument.createElement(\\"script\\");a\\u003dm(a.url);b.src\\u003da instanceof k\\u0026\\u0026a.constructor\\u003d\\u003d\\u003dk?a.g:\\"type_error:TrustedResourceUrl\\";document.body.appendChild(b)},!0);}).call(this);\\n"]'));
        if (!a) return null;
        a = Ij(a, 6);
        if (null === a || void 0 === a) a = null;
        else {
            var b = wd();
            a = b ? b.createScript(a) : a;
            a = new Bd(a, Ad)
        }
        return a
    };

    function ep(a) {
        this.url = a;
        this.timeout = 5E3;
        this.G = "callback";
        this.C = this.D = null
    }

    function fp(a) {
        var b = {
            callback: "?"
        };
        b = void 0 === b ? {} : b;
        a.C = Yf();
        var c = new Uj(a.url),
            d = new Map;
        d.set("callback", a.G);
        c.C.Fc(nk(b), d);
        gp(a).then(function() {
            hp(a, c.toString())
        }).then(function() {
            return a.C.promise
        }).then(function() {
            ip(a)
        }, function() {
            ip(a)
        });
        0 < a.timeout && (a.F = setTimeout(function() {
            a.C.reject("Timeout!")
        }, a.timeout));
        return a.C.promise
    }

    function hp(a, b) {
        var c = new MessageChannel;
        a.D.contentWindow.postMessage({
            url: b,
            callbackName: a.G
        }, "*", [c.port2]);
        c.port1.onmessage = function(d) {
            var e = {};
            void 0 !== a.F && (clearTimeout(a.F), a.F = void 0);
            void 0 === d.data && a.C.reject("Callback called, but no data received");
            typeof d.data !== u && a.C.reject("Exploitation attempt! Data is not a string!");
            try {
                e = JSON.parse(d.data)
            } catch (f) {
                a.C.reject("Invalid Data received: " + f.message)
            }
            a.C.resolve(e)
        }
    }

    function gp(a) {
        var b = Yf(),
            c = De(document, "IFRAME");
        if (!c.sandbox) throw Error("iframe sandboxes not supported");
        c.sandbox.value = "allow-scripts";
        c.style.display = p;
        a.D = c;
        a = dp();
        a = Rg([ie("<!DOCTYPE html>"), Wg(Qg(a))]);
        c.srcdoc = ge(a);
        a = Gd("data:text/html;charset=UTF-8;base64," + btoa(ge(a).toString()));
        c.src = Dd(a).toString();
        c.addEventListener("load", function() {
            return b.resolve(c)
        }, !1);
        c.addEventListener(Qa, function(d) {
            b.reject(d)
        }, !1);
        document.documentElement.appendChild(c);
        return b.promise
    }

    function ip(a) {
        null !== a.D && (document.documentElement.removeChild(a.D), a.D = null)
    };

    function jp(a) {
        return (new on(xn(vn(function(b) {
            return Bg(b)
        }), function(b) {
            return Bg(b)
        }))).C(a)
    };

    function Z(a) {
        N.call(this, Z.ea, a)
    }
    F(Z, N);
    Z.ea = "Wikipedia";
    D("_WikipediaView", Z);
    Z.Pb = 5;
    Z.Ma = "";
    Z.jb = "en";
    w = Z.prototype;
    w.Pa = !1;
    w.Ja = !1;
    w.ia = function() {
        var a = L(this.H, "wikipedia-search-form");
        if (a) {
            Z.Ma = this.H.N.data.language || "en";
            var b = this;
            hf(a, "submit", function(c) {
                Z.prototype.Ja || (Z.prototype.Ja = !0, kp(b));
                c.preventDefault()
            })
        }
    };

    function kp(a) {
        Fe(J(L(a.H, vb)));
        Fe(J(L(a.H, ub)));
        var b = G(J(L(a.H, tb)).value);
        b ? (b = jk(jk(jk(Xj(new Uj("https://" + (a.Pa && Z.jb || Z.Ma) + ba), "/w/api.php"), "action", "opensearch"), "search", b), "format", "json"), b = new ep(b), L(a.H, wb), L(a.H, vb), fp(b).then(B(a.Kd, a), B(a.Jd, a))) : (J(L(a.H, wb)).style.display = p, hi(a.H, vb).textContent = a.H.N.data.enterTextMsg, Z.prototype.Ja = !1)
    }
    w.Kd = function(a) {
        var b = L(this.H, wb),
            c = L(this.H, vb),
            d = G(J(L(this.H, tb)).value),
            e = [],
            f = a[1];
        a = f.length;
        if (0 == a) J(b).style.display = ua, ei(c, Hg.C(this.H.N.data.noResultsFoundMsg)), Z.prototype.Ja = !1;
        else {
            for (var g = 0; g < a; g++) e.push('<div id="wikipedia-search-result-link"><a target="_blank" href=https://' + ((this.Pa && Z.jb || Z.Ma) + ".wikipedia.org/wiki/" + f[g].replace(/ /g, "_")) + ">" + f[g] + "</a></div>");
            if (a > Z.Pb) {
                for (a = 0; a < Z.Pb; a++) J(c).innerHTML += e[a];
                J(L(this.H, ub)).style.display = ua;
                c = '<a target="_blank" href=' +
                    jk(jk(jk(jk(Xj(new Uj("https://" + (this.Pa && Z.jb || Z.Ma) + ba), "/w/index.php"), qb, "Special:Search"), "profile", "default"), "search", d), "fulltext", "Search") + ">" + this.H.N.data.moreMsg + "</a>";
                ei(J(L(this.H, ub)), jp(c))
            } else
                for (d = 0; d < a; d++) J(c).innerHTML += e[d];
            J(b).style.display = ua;
            this.Pa = Z.prototype.Ja = !1
        }
    };
    w.Jd = function() {
        "en" != Z.Ma ? (this.Pa = !0, kp(this)) : (J(L(this.H, wb)).style.display = p, ei(hi(this.H, vb), Og(this.H.N.data.fetchingErrorMsg)), Z.prototype.Ja = !1)
    };
    if (window.jstiming) {
        window.jstiming.Ub = {};
        window.jstiming.Ld = 1;
        var lp = function(a, b, c) {
                var d = a.t[b],
                    e = a.t.start;
                if (d && (e || c)) return d = a.t[b][0], void 0 != c ? e = c : e = e[0], Math.round(d - e)
            },
            mp = function(a, b, c) {
                var d = "";
                window.jstiming.srt && (d += "&srt=" + window.jstiming.srt, delete window.jstiming.srt);
                window.jstiming.pt && (d += "&tbsrt=" + window.jstiming.pt, delete window.jstiming.pt);
                try {
                    window.external && window.external.tran ? d += "&tran=" + window.external.tran : window.gtbExternal && window.gtbExternal.tran ? d += "&tran=" +
                        window.gtbExternal.tran() : window.chrome && window.chrome.csi && (d += "&tran=" + window.chrome.csi().tran)
                } catch (v) {}
                var e = window.chrome;
                if (e && (e = e.loadTimes) && typeof e === m && (e = e())) {
                    e.wasFetchedViaSpdy && (d += "&p=s");
                    if (e.wasNpnNegotiated) {
                        d += "&npn=1";
                        var f = e.npnNegotiatedProtocol;
                        f && (d += "&npnv=" + (encodeURIComponent || escape)(f))
                    }
                    e.wasAlternateProtocolAvailable && (d += "&apa=1")
                }
                var g = a.t,
                    h = g.start;
                e = [];
                f = [];
                for (var k in g)
                    if ("start" != k && 0 != k.indexOf("_")) {
                        var n = g[k][1];
                        n ? g[n] && f.push(k + "." + lp(a, k, g[n][0])) : h &&
                            e.push(k + "." + lp(a, k))
                    }
                delete g.start;
                if (b)
                    for (var t in b) d += "&" + t + "=" + b[t];
                (b = c) || (b = Ya == document.location.protocol ? "https://csi.gstatic.com/csi" : "http://csi.gstatic.com/csi");
                return [b, "?v=3", "&s=" + (window.jstiming.sn || "blogger") + aa, a.name, f.length ? "&it=" + f.join(",") : "", d, "&rt=", e.join(",")].join("")
            },
            np = function(a, b, c) {
                a = mp(a, b, c);
                if (!a) return "";
                b = new Image;
                var d = window.jstiming.Ld++;
                window.jstiming.Ub[d] = b;
                b.onload = b.onerror = function() {
                    window.jstiming && delete window.jstiming.Ub[d]
                };
                b.src = a;
                b = null;
                return a
            };
        window.jstiming.report = function(a, b, c) {
            var d = document.visibilityState,
                e = "visibilitychange";
            d || (d = document.webkitVisibilityState, e = "webkitvisibilitychange");
            if (d == eb) {
                var f = !1,
                    g = function() {
                        if (!f) {
                            b ? b.prerender = "1" : b = {
                                prerender: "1"
                            };
                            if ((document.visibilityState || document.webkitVisibilityState) == eb) var h = !1;
                            else np(a, b, c), h = !0;
                            h && (f = !0, document.removeEventListener(e, g, !1))
                        }
                    };
                document.addEventListener(e, g, !1);
                return ""
            }
            return np(a, b, c)
        }
    };
}).call(this);