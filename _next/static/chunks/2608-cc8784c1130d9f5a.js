"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2608], {
        12608: function(e, t, n) {
            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function a(e, t, n) {
                var a;
                return a = function(e, t) {
                    if ("object" != r(e) || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var a = n.call(e, t || "default");
                        if ("object" != r(a)) return a;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(t, "string"), (t = "symbol" == r(a) ? a : String(a)) in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach(function(t) {
                        a(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function i(e, t) {
                if (e) {
                    if ("string" == typeof e) return l(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                }
            }

            function c(e) {
                return function(e) {
                    if (Array.isArray(e)) return l(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || i(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function s(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, o, u, l = [],
                            i = !0,
                            c = !1;
                        try {
                            if (o = (n = n.call(e)).next, 0 === t) {
                                if (Object(n) !== n) return;
                                i = !1
                            } else
                                for (; !(i = (r = o.call(n)).done) && (l.push(r.value), l.length !== t); i = !0);
                        } catch (e) {
                            c = !0, a = e
                        } finally {
                            try {
                                if (!i && null != n.return && (u = n.return(), Object(u) !== u)) return
                            } finally {
                                if (c) throw a
                            }
                        }
                        return l
                    }
                }(e, t) || i(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            n.d(t, {
                Z: function() {
                    return X
                }
            });
            var f = n(94184),
                d = n.n(f),
                v = n(67294);

            function m(e) {
                var t = v.useRef();
                return t.current = e, v.useCallback(function() {
                    for (var e, n = arguments.length, r = Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                    return null === (e = t.current) || void 0 === e ? void 0 : e.call.apply(e, [t].concat(r))
                }, [])
            }
            var b = "undefined" != typeof window && window.document && window.document.createElement ? v.useLayoutEffect : v.useEffect,
                h = function(e, t) {
                    var n = v.useRef(!0);
                    b(function() {
                        return e(n.current)
                    }, t), b(function() {
                        return n.current = !1,
                            function() {
                                n.current = !0
                            }
                    }, [])
                },
                y = function(e, t) {
                    h(function(t) {
                        if (!t) return e()
                    }, t)
                };

            function p(e) {
                var t = v.useRef(!1),
                    n = s(v.useState(e), 2),
                    r = n[0],
                    a = n[1];
                return v.useEffect(function() {
                    return t.current = !1,
                        function() {
                            t.current = !0
                        }
                }, []), [r, function(e, n) {
                    n && t.current || a(e)
                }]
            }

            function g(e) {
                return void 0 !== e
            }
            var E = {},
                x = [];

            function C(e, t) {}

            function k(e, t) {}

            function O(e, t, n) {
                t || E[n] || (e(!1, n), E[n] = !0)
            }

            function S(e, t) {
                O(C, e, t)
            }
            S.preMessage = function(e) {
                x.push(e)
            }, S.resetWarned = function() {
                E = {}
            }, S.noteOnce = function(e, t) {
                O(k, e, t)
            };
            var M = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        a = new Set;
                    return function e(t, o) {
                        var u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                            l = a.has(t);
                        if (S(!l, "Warning: There may be circular references"), l) return !1;
                        if (t === o) return !0;
                        if (n && u > 1) return !1;
                        a.add(t);
                        var i = u + 1;
                        if (Array.isArray(t)) {
                            if (!Array.isArray(o) || t.length !== o.length) return !1;
                            for (var c = 0; c < t.length; c++)
                                if (!e(t[c], o[c], i)) return !1;
                            return !0
                        }
                        if (t && o && "object" === r(t) && "object" === r(o)) {
                            var s = Object.keys(t);
                            return s.length === Object.keys(o).length && s.every(function(n) {
                                return e(t[n], o[n], i)
                            })
                        }
                        return !1
                    }(e, t)
                },
                w = v.createContext({
                    min: 0,
                    max: 0,
                    direction: "ltr",
                    step: 1,
                    includedStart: 0,
                    includedEnd: 0,
                    tabIndex: 0,
                    keyboard: !0,
                    styles: {},
                    classNames: {}
                });

            function j() {
                return (j = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function P(e, t) {
                if (null == e) return {};
                var n, r, a = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var N = {
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                END: 35,
                HOME: 36,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40
            };

            function A(e, t, n, r) {
                var a = (t - n) / (r - n),
                    o = {};
                switch (e) {
                    case "rtl":
                        o.right = "".concat(100 * a, "%"), o.transform = "translateX(50%)";
                        break;
                    case "btt":
                        o.bottom = "".concat(100 * a, "%"), o.transform = "translateY(50%)";
                        break;
                    case "ttb":
                        o.top = "".concat(100 * a, "%"), o.transform = "translateY(-50%)";
                        break;
                    default:
                        o.left = "".concat(100 * a, "%"), o.transform = "translateX(-50%)"
                }
                return o
            }

            function F(e, t) {
                return Array.isArray(e) ? e[t] : e
            }
            var D = ["prefixCls", "value", "valueIndex", "onStartMove", "style", "render", "dragging", "onOffsetChange", "onChangeComplete"],
                I = v.forwardRef(function(e, t) {
                    var n, r, o = e.prefixCls,
                        l = e.value,
                        i = e.valueIndex,
                        c = e.onStartMove,
                        s = e.style,
                        f = e.render,
                        m = e.dragging,
                        b = e.onOffsetChange,
                        h = e.onChangeComplete,
                        y = P(e, D),
                        p = v.useContext(w),
                        g = p.min,
                        E = p.max,
                        x = p.direction,
                        C = p.disabled,
                        k = p.keyboard,
                        O = p.range,
                        S = p.tabIndex,
                        M = p.ariaLabelForHandle,
                        I = p.ariaLabelledByForHandle,
                        L = p.ariaValueTextFormatterForHandle,
                        R = p.styles,
                        H = p.classNames,
                        T = "".concat(o, "-handle"),
                        _ = function(e) {
                            C || c(e, i)
                        },
                        G = A(x, l, g, E),
                        B = v.createElement("div", j({
                            ref: t,
                            className: d()(T, (a(n = {}, "".concat(T, "-").concat(i + 1), O), a(n, "".concat(T, "-dragging"), m), n), H.handle),
                            style: u(u(u({}, G), s), R.handle),
                            onMouseDown: _,
                            onTouchStart: _,
                            onKeyDown: function(e) {
                                if (!C && k) {
                                    var t = null;
                                    switch (e.which || e.keyCode) {
                                        case N.LEFT:
                                            t = "ltr" === x || "btt" === x ? -1 : 1;
                                            break;
                                        case N.RIGHT:
                                            t = "ltr" === x || "btt" === x ? 1 : -1;
                                            break;
                                        case N.UP:
                                            t = "ttb" !== x ? 1 : -1;
                                            break;
                                        case N.DOWN:
                                            t = "ttb" !== x ? -1 : 1;
                                            break;
                                        case N.HOME:
                                            t = "min";
                                            break;
                                        case N.END:
                                            t = "max";
                                            break;
                                        case N.PAGE_UP:
                                            t = 2;
                                            break;
                                        case N.PAGE_DOWN:
                                            t = -2
                                    }
                                    null !== t && (e.preventDefault(), b(t, i))
                                }
                            },
                            onKeyUp: function(e) {
                                switch (e.which || e.keyCode) {
                                    case N.LEFT:
                                    case N.RIGHT:
                                    case N.UP:
                                    case N.DOWN:
                                    case N.HOME:
                                    case N.END:
                                    case N.PAGE_UP:
                                    case N.PAGE_DOWN:
                                        null == h || h()
                                }
                            },
                            tabIndex: C ? null : F(S, i),
                            role: "slider",
                            "aria-valuemin": g,
                            "aria-valuemax": E,
                            "aria-valuenow": l,
                            "aria-disabled": C,
                            "aria-label": F(M, i),
                            "aria-labelledby": F(I, i),
                            "aria-valuetext": null === (r = F(L, i)) || void 0 === r ? void 0 : r(l),
                            "aria-orientation": "ltr" === x || "rtl" === x ? "horizontal" : "vertical"
                        }, y));
                    return f && (B = f(B, {
                        index: i,
                        prefixCls: o,
                        value: l,
                        dragging: m
                    })), B
                }),
                L = ["prefixCls", "style", "onStartMove", "onOffsetChange", "values", "handleRender", "draggingIndex"],
                R = v.forwardRef(function(e, t) {
                    var n = e.prefixCls,
                        r = e.style,
                        a = e.onStartMove,
                        o = e.onOffsetChange,
                        u = e.values,
                        l = e.handleRender,
                        i = e.draggingIndex,
                        c = P(e, L),
                        s = v.useRef({});
                    return v.useImperativeHandle(t, function() {
                        return {
                            focus: function(e) {
                                var t;
                                null === (t = s.current[e]) || void 0 === t || t.focus()
                            }
                        }
                    }), v.createElement(v.Fragment, null, u.map(function(e, t) {
                        return v.createElement(I, j({
                            ref: function(e) {
                                e ? s.current[t] = e : delete s.current[t]
                            },
                            dragging: i === t,
                            prefixCls: n,
                            style: F(r, t),
                            key: t,
                            value: e,
                            valueIndex: t,
                            onStartMove: a,
                            onOffsetChange: o,
                            render: l
                        }, c))
                    }))
                });

            function H(e) {
                var t = "touches" in e ? e.touches[0] : e;
                return {
                    pageX: t.pageX,
                    pageY: t.pageY
                }
            }

            function T(e) {
                var t = e.prefixCls,
                    n = e.style,
                    r = e.children,
                    o = e.value,
                    l = e.onClick,
                    i = v.useContext(w),
                    c = i.min,
                    s = i.max,
                    f = i.direction,
                    m = i.includedStart,
                    b = i.includedEnd,
                    h = i.included,
                    y = "".concat(t, "-text"),
                    p = A(f, o, c, s);
                return v.createElement("span", {
                    className: d()(y, a({}, "".concat(y, "-active"), h && m <= o && o <= b)),
                    style: u(u({}, p), n),
                    onMouseDown: function(e) {
                        e.stopPropagation()
                    },
                    onClick: function() {
                        l(o)
                    }
                }, r)
            }

            function _(e) {
                var t = e.prefixCls,
                    n = e.marks,
                    r = e.onClick,
                    a = "".concat(t, "-mark");
                return n.length ? v.createElement("div", {
                    className: a
                }, n.map(function(e) {
                    var t = e.value,
                        n = e.style,
                        o = e.label;
                    return v.createElement(T, {
                        key: t,
                        prefixCls: a,
                        style: n,
                        value: t,
                        onClick: r
                    }, o)
                })) : null
            }

            function G(e) {
                var t = e.prefixCls,
                    n = e.value,
                    r = e.style,
                    o = e.activeStyle,
                    l = v.useContext(w),
                    i = l.min,
                    c = l.max,
                    s = l.direction,
                    f = l.included,
                    m = l.includedStart,
                    b = l.includedEnd,
                    h = "".concat(t, "-dot"),
                    y = f && m <= n && n <= b,
                    p = u(u({}, A(s, n, i, c)), "function" == typeof r ? r(n) : r);
                return y && (p = u(u({}, p), "function" == typeof o ? o(n) : o)), v.createElement("span", {
                    className: d()(h, a({}, "".concat(h, "-active"), y)),
                    style: p
                })
            }

            function B(e) {
                var t = e.prefixCls,
                    n = e.marks,
                    r = e.dots,
                    a = e.style,
                    o = e.activeStyle,
                    u = v.useContext(w),
                    l = u.min,
                    i = u.max,
                    c = u.step,
                    s = v.useMemo(function() {
                        var e = new Set;
                        if (n.forEach(function(t) {
                                e.add(t.value)
                            }), r && null !== c)
                            for (var t = l; t <= i;) e.add(t), t += c;
                        return Array.from(e)
                    }, [l, i, c, r, n]);
                return v.createElement("div", {
                    className: "".concat(t, "-step")
                }, s.map(function(e) {
                    return v.createElement(G, {
                        prefixCls: t,
                        key: e,
                        value: e,
                        style: a,
                        activeStyle: o
                    })
                }))
            }

            function U(e) {
                var t, n = e.prefixCls,
                    r = e.style,
                    o = e.start,
                    l = e.end,
                    i = e.index,
                    c = e.onStartMove,
                    s = e.replaceCls,
                    f = v.useContext(w),
                    m = f.direction,
                    b = f.min,
                    h = f.max,
                    y = f.disabled,
                    p = f.range,
                    g = f.classNames,
                    E = "".concat(n, "-track"),
                    x = (o - b) / (h - b),
                    C = (l - b) / (h - b),
                    k = function(e) {
                        !y && c && c(e, -1)
                    },
                    O = {};
                switch (m) {
                    case "rtl":
                        O.right = "".concat(100 * x, "%"), O.width = "".concat(100 * C - 100 * x, "%");
                        break;
                    case "btt":
                        O.bottom = "".concat(100 * x, "%"), O.height = "".concat(100 * C - 100 * x, "%");
                        break;
                    case "ttb":
                        O.top = "".concat(100 * x, "%"), O.height = "".concat(100 * C - 100 * x, "%");
                        break;
                    default:
                        O.left = "".concat(100 * x, "%"), O.width = "".concat(100 * C - 100 * x, "%")
                }
                var S = s || d()(E, (a(t = {}, "".concat(E, "-").concat(i + 1), null !== i && p), a(t, "".concat(n, "-track-draggable"), c), t), g.track);
                return v.createElement("div", {
                    className: S,
                    style: u(u({}, O), r),
                    onMouseDown: k,
                    onTouchStart: k
                })
            }

            function W(e) {
                var t = e.prefixCls,
                    n = e.style,
                    r = e.values,
                    a = e.startPoint,
                    o = e.onStartMove,
                    l = v.useContext(w),
                    i = l.included,
                    c = l.range,
                    s = l.min,
                    f = l.styles,
                    m = l.classNames,
                    b = v.useMemo(function() {
                        if (!c) {
                            if (0 === r.length) return [];
                            var e = null != a ? a : s,
                                t = r[0];
                            return [{
                                start: Math.min(e, t),
                                end: Math.max(e, t)
                            }]
                        }
                        for (var n = [], o = 0; o < r.length - 1; o += 1) n.push({
                            start: r[o],
                            end: r[o + 1]
                        });
                        return n
                    }, [r, c, a, s]),
                    h = null;
                return (m.tracks || f.tracks) && (h = v.createElement(U, {
                    index: null,
                    prefixCls: t,
                    start: b[0].start,
                    end: b[b.length - 1].end,
                    replaceCls: d()(m.tracks, "".concat(t, "-tracks")),
                    style: f.tracks
                })), i ? v.createElement(v.Fragment, null, h, b.map(function(e, r) {
                    var a = e.start,
                        l = e.end;
                    return v.createElement(U, {
                        index: r,
                        prefixCls: t,
                        style: u(u({}, F(n, r)), f.track),
                        start: a,
                        end: l,
                        key: r,
                        onStartMove: o
                    })
                })) : null
            }
            var X = v.forwardRef(function(e, t) {
                var n, o, l, i, f, b, h, E, x, C, k, O, j, P, N, A, F, D, I, L, T, G, U, X, Y, V, z, K, Z, $, q, J, Q, ee, et, en, er, ea, eo, eu = e.prefixCls,
                    el = void 0 === eu ? "rc-slider" : eu,
                    ei = e.className,
                    ec = e.style,
                    es = e.classNames,
                    ef = e.styles,
                    ed = e.disabled,
                    ev = void 0 !== ed && ed,
                    em = e.keyboard,
                    eb = void 0 === em || em,
                    eh = e.autoFocus,
                    ey = e.onFocus,
                    ep = e.onBlur,
                    eg = e.min,
                    eE = void 0 === eg ? 0 : eg,
                    ex = e.max,
                    eC = void 0 === ex ? 100 : ex,
                    ek = e.step,
                    eO = void 0 === ek ? 1 : ek,
                    eS = e.value,
                    eM = e.defaultValue,
                    ew = e.range,
                    ej = e.count,
                    eP = e.onChange,
                    eN = e.onBeforeChange,
                    eA = e.onAfterChange,
                    eF = e.onChangeComplete,
                    eD = e.allowCross,
                    eI = e.pushable,
                    eL = void 0 !== eI && eI,
                    eR = e.draggableTrack,
                    eH = e.reverse,
                    eT = e.vertical,
                    e_ = e.included,
                    eG = void 0 === e_ || e_,
                    eB = e.startPoint,
                    eU = e.trackStyle,
                    eW = e.handleStyle,
                    eX = e.railStyle,
                    eY = e.dotStyle,
                    eV = e.activeDotStyle,
                    ez = e.marks,
                    eK = e.dots,
                    eZ = e.handleRender,
                    e$ = e.tabIndex,
                    eq = void 0 === e$ ? 0 : e$,
                    eJ = e.ariaLabelForHandle,
                    eQ = e.ariaLabelledByForHandle,
                    e0 = e.ariaValueTextFormatterForHandle,
                    e1 = v.useRef(),
                    e2 = v.useRef(),
                    e3 = v.useMemo(function() {
                        return eT ? eH ? "ttb" : "btt" : eH ? "rtl" : "ltr"
                    }, [eH, eT]),
                    e4 = v.useMemo(function() {
                        return isFinite(eE) ? eE : 0
                    }, [eE]),
                    e8 = v.useMemo(function() {
                        return isFinite(eC) ? eC : 100
                    }, [eC]),
                    e5 = v.useMemo(function() {
                        return null !== eO && eO <= 0 ? 1 : eO
                    }, [eO]),
                    e6 = v.useMemo(function() {
                        return "boolean" == typeof eL ? !!eL && e5 : eL >= 0 && eL
                    }, [eL, e5]),
                    e9 = v.useMemo(function() {
                        return Object.keys(ez || {}).map(function(e) {
                            var t = ez[e],
                                n = {
                                    value: Number(e)
                                };
                            return t && "object" === r(t) && !v.isValidElement(t) && ("label" in t || "style" in t) ? (n.style = t.style, n.label = t.label) : n.label = t, n
                        }).filter(function(e) {
                            var t = e.label;
                            return t || "number" == typeof t
                        }).sort(function(e, t) {
                            return e.value - t.value
                        })
                    }, [ez]),
                    e7 = s((n = void 0 === eD || eD, o = v.useCallback(function(e) {
                        return isFinite(e), Math.max(e4, Math.min(e8, e))
                    }, [e4, e8]), l = v.useCallback(function(e) {
                        if (null !== e5) {
                            var t = e4 + Math.round((o(e) - e4) / e5) * e5,
                                n = function(e) {
                                    return (String(e).split(".")[1] || "").length
                                },
                                r = Math.max(n(e5), n(e8), n(e4)),
                                a = Number(t.toFixed(r));
                            return e4 <= a && a <= e8 ? a : null
                        }
                        return null
                    }, [e5, e4, e8, o]), i = v.useCallback(function(e) {
                        var t = o(e),
                            n = e9.map(function(e) {
                                return e.value
                            });
                        null !== e5 && n.push(l(e)), n.push(e4, e8);
                        var r = n[0],
                            a = e8 - e4;
                        return n.forEach(function(e) {
                            var n = Math.abs(t - e);
                            n <= a && (r = e, a = n)
                        }), r
                    }, [e4, e8, e9, e5, o, l]), f = function e(t, n, r) {
                        var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "unit";
                        if ("number" == typeof n) {
                            var o, u = t[r],
                                i = u + n,
                                s = [];
                            e9.forEach(function(e) {
                                s.push(e.value)
                            }), s.push(e4, e8), s.push(l(u));
                            var f = n > 0 ? 1 : -1;
                            "unit" === a ? s.push(l(u + f * e5)) : s.push(l(i)), s = s.filter(function(e) {
                                return null !== e
                            }).filter(function(e) {
                                return n < 0 ? e <= u : e >= u
                            }), "unit" === a && (s = s.filter(function(e) {
                                return e !== u
                            }));
                            var d = "unit" === a ? u : i,
                                v = Math.abs((o = s[0]) - d);
                            if (s.forEach(function(e) {
                                    var t = Math.abs(e - d);
                                    t < v && (o = e, v = t)
                                }), void 0 === o) return n < 0 ? e4 : e8;
                            if ("dist" === a) return o;
                            if (Math.abs(n) > 1) {
                                var m = c(t);
                                return m[r] = o, e(m, n - f, r, a)
                            }
                            return o
                        }
                        return "min" === n ? e4 : "max" === n ? e8 : void 0
                    }, b = function(e, t, n) {
                        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "unit",
                            a = e[n],
                            o = f(e, t, n, r);
                        return {
                            value: o,
                            changed: o !== a
                        }
                    }, h = function(e) {
                        return null === e6 && 0 === e || "number" == typeof e6 && e < e6
                    }, [i, function(e, t, r) {
                        var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "unit",
                            o = e.map(i),
                            u = o[r],
                            l = f(o, t, r, a);
                        if (o[r] = l, !1 === n) {
                            var c = e6 || 0;
                            r > 0 && o[r - 1] !== u && (o[r] = Math.max(o[r], o[r - 1] + c)), r < o.length - 1 && o[r + 1] !== u && (o[r] = Math.min(o[r], o[r + 1] - c))
                        } else if ("number" == typeof e6 || null === e6) {
                            for (var s = r + 1; s < o.length; s += 1)
                                for (var d = !0; h(o[s] - o[s - 1]) && d;) {
                                    var v = b(o, 1, s);
                                    o[s] = v.value, d = v.changed
                                }
                            for (var m = r; m > 0; m -= 1)
                                for (var y = !0; h(o[m] - o[m - 1]) && y;) {
                                    var p = b(o, -1, m - 1);
                                    o[m - 1] = p.value, y = p.changed
                                }
                            for (var g = o.length - 1; g > 0; g -= 1)
                                for (var E = !0; h(o[g] - o[g - 1]) && E;) {
                                    var x = b(o, -1, g - 1);
                                    o[g - 1] = x.value, E = x.changed
                                }
                            for (var C = 0; C < o.length - 1; C += 1)
                                for (var k = !0; h(o[C + 1] - o[C]) && k;) {
                                    var O = b(o, 1, C + 1);
                                    o[C + 1] = O.value, k = O.changed
                                }
                        }
                        return {
                            value: o[r],
                            values: o
                        }
                    }]), 2),
                    te = e7[0],
                    tt = e7[1],
                    tn = (x = (E = {
                        value: eS
                    }).defaultValue, C = E.value, k = E.onChange, O = E.postState, P = (j = s(p(function() {
                        return g(C) ? C : g(x) ? "function" == typeof x ? x() : x : "function" == typeof eM ? eM() : eM
                    }), 2))[0], N = j[1], A = void 0 !== C ? C : P, F = O ? O(A) : A, D = m(k), L = (I = s(p([A]), 2))[0], T = I[1], y(function() {
                        var e = L[0];
                        P !== e && D(P, e)
                    }, [L]), y(function() {
                        g(C) || N(C)
                    }, [C]), [F, m(function(e, t) {
                        N(e, t), T([A], t)
                    })]),
                    tr = s(tn, 2),
                    ta = tr[0],
                    to = tr[1],
                    tu = v.useMemo(function() {
                        var e = null == ta ? [] : Array.isArray(ta) ? ta : [ta],
                            t = s(e, 1)[0],
                            n = void 0 === t ? e4 : t,
                            r = null === ta ? [] : [n];
                        if (ew) {
                            if (r = c(e), ej || void 0 === ta) {
                                var a, o = ej >= 0 ? ej + 1 : 2;
                                for (r = r.slice(0, o); r.length < o;) r.push(null !== (a = r[r.length - 1]) && void 0 !== a ? a : e4)
                            }
                            r.sort(function(e, t) {
                                return e - t
                            })
                        }
                        return r.forEach(function(e, t) {
                            r[t] = te(e)
                        }), r
                    }, [ta, ew, e4, ej, te]),
                    tl = v.useRef(tu);
                tl.current = tu;
                var ti = function(e) {
                        return ew ? e : e[0]
                    },
                    tc = function(e) {
                        var t = c(e).sort(function(e, t) {
                            return e - t
                        });
                        eP && !M(t, tl.current, !0) && eP(ti(t)), to(t)
                    },
                    ts = function() {
                        null == eA || eA(ti(tl.current)), S(!eA, "[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."), null == eF || eF(ti(tl.current))
                    },
                    tf = (U = (G = s(v.useState(null), 2))[0], X = G[1], V = (Y = s(v.useState(-1), 2))[0], z = Y[1], Z = (K = s(v.useState(tu), 2))[0], $ = K[1], J = (q = s(v.useState(tu), 2))[0], Q = q[1], ee = v.useRef(null), et = v.useRef(null), v.useEffect(function() {
                        -1 === V && $(tu)
                    }, [tu, V]), v.useEffect(function() {
                        return function() {
                            document.removeEventListener("mousemove", ee.current), document.removeEventListener("mouseup", et.current), document.removeEventListener("touchmove", ee.current), document.removeEventListener("touchend", et.current)
                        }
                    }, []), en = function(e, t) {
                        Z.some(function(t, n) {
                            return t !== e[n]
                        }) && (void 0 !== t && X(t), $(e), tc(e))
                    }, er = function(e, t) {
                        if (-1 === e) {
                            var n = J[0],
                                r = J[J.length - 1],
                                a = t * (e8 - e4);
                            a = Math.min(a = Math.max(a, e4 - n), e8 - r), a = te(n + a) - n, en(J.map(function(e) {
                                return e + a
                            }))
                        } else {
                            var o = c(Z);
                            o[e] = J[e];
                            var u = tt(o, (e8 - e4) * t, e, "dist");
                            en(u.values, u.value)
                        }
                    }, (ea = v.useRef(er)).current = er, [V, U, v.useMemo(function() {
                        var e = c(tu).sort(function(e, t) {
                                return e - t
                            }),
                            t = c(Z).sort(function(e, t) {
                                return e - t
                            });
                        return e.every(function(e, n) {
                            return e === t[n]
                        }) ? Z : tu
                    }, [tu, Z]), function(e, t, n) {
                        e.stopPropagation();
                        var r = n || tu,
                            a = r[t];
                        z(t), X(a), Q(r);
                        var o = H(e),
                            u = o.pageX,
                            l = o.pageY,
                            i = function(e) {
                                e.preventDefault();
                                var n, r = H(e),
                                    a = r.pageX,
                                    o = r.pageY,
                                    i = a - u,
                                    c = o - l,
                                    s = e2.current.getBoundingClientRect(),
                                    f = s.width,
                                    d = s.height;
                                switch (e3) {
                                    case "btt":
                                        n = -c / d;
                                        break;
                                    case "ttb":
                                        n = c / d;
                                        break;
                                    case "rtl":
                                        n = -i / f;
                                        break;
                                    default:
                                        n = i / f
                                }
                                ea.current(t, n)
                            },
                            c = function e(t) {
                                t.preventDefault(), document.removeEventListener("mouseup", e), document.removeEventListener("mousemove", i), document.removeEventListener("touchend", e), document.removeEventListener("touchmove", i), ee.current = null, et.current = null, z(-1), ts()
                            };
                        document.addEventListener("mouseup", c), document.addEventListener("mousemove", i), document.addEventListener("touchend", c), document.addEventListener("touchmove", i), ee.current = i, et.current = c
                    }]),
                    td = s(tf, 4),
                    tv = td[0],
                    tm = td[1],
                    tb = td[2],
                    th = td[3],
                    ty = function(e, t) {
                        if (!ev) {
                            var n = 0,
                                r = e8 - e4;
                            tu.forEach(function(t, a) {
                                var o = Math.abs(e - t);
                                o <= r && (r = o, n = a)
                            });
                            var a = c(tu);
                            a[n] = e, ew && !tu.length && void 0 === ej && a.push(e), null == eN || eN(ti(a)), tc(a), t && th(t, n, a)
                        }
                    },
                    tp = s(v.useState(null), 2),
                    tg = tp[0],
                    tE = tp[1];
                v.useEffect(function() {
                    if (null !== tg) {
                        var e = tu.indexOf(tg);
                        e >= 0 && e1.current.focus(e)
                    }
                    tE(null)
                }, [tg]);
                var tx = v.useMemo(function() {
                        return (!eR || null !== e5) && eR
                    }, [eR, e5]),
                    tC = function(e, t) {
                        th(e, t), null == eN || eN(ti(tl.current))
                    },
                    tk = -1 !== tv;
                v.useEffect(function() {
                    if (!tk) {
                        var e = tu.lastIndexOf(tm);
                        e1.current.focus(e)
                    }
                }, [tk]);
                var tO = v.useMemo(function() {
                        return c(tb).sort(function(e, t) {
                            return e - t
                        })
                    }, [tb]),
                    tS = s(v.useMemo(function() {
                        return ew ? [tO[0], tO[tO.length - 1]] : [e4, tO[0]]
                    }, [tO, ew, e4]), 2),
                    tM = tS[0],
                    tw = tS[1];
                v.useImperativeHandle(t, function() {
                    return {
                        focus: function() {
                            e1.current.focus(0)
                        },
                        blur: function() {
                            var e = document.activeElement;
                            e2.current.contains(e) && (null == e || e.blur())
                        }
                    }
                }), v.useEffect(function() {
                    eh && e1.current.focus(0)
                }, []);
                var tj = v.useMemo(function() {
                    return {
                        min: e4,
                        max: e8,
                        direction: e3,
                        disabled: ev,
                        keyboard: eb,
                        step: e5,
                        included: eG,
                        includedStart: tM,
                        includedEnd: tw,
                        range: ew,
                        tabIndex: eq,
                        ariaLabelForHandle: eJ,
                        ariaLabelledByForHandle: eQ,
                        ariaValueTextFormatterForHandle: e0,
                        styles: ef || {},
                        classNames: es || {}
                    }
                }, [e4, e8, e3, ev, eb, e5, eG, tM, tw, ew, eq, eJ, eQ, e0, ef, es]);
                return v.createElement(w.Provider, {
                    value: tj
                }, v.createElement("div", {
                    ref: e2,
                    className: d()(el, ei, (a(eo = {}, "".concat(el, "-disabled"), ev), a(eo, "".concat(el, "-vertical"), eT), a(eo, "".concat(el, "-horizontal"), !eT), a(eo, "".concat(el, "-with-marks"), e9.length), eo)),
                    style: ec,
                    onMouseDown: function(e) {
                        e.preventDefault();
                        var t, n = e2.current.getBoundingClientRect(),
                            r = n.width,
                            a = n.height,
                            o = n.left,
                            u = n.top,
                            l = n.bottom,
                            i = n.right,
                            c = e.clientX,
                            s = e.clientY;
                        switch (e3) {
                            case "btt":
                                t = (l - s) / a;
                                break;
                            case "ttb":
                                t = (s - u) / a;
                                break;
                            case "rtl":
                                t = (i - c) / r;
                                break;
                            default:
                                t = (c - o) / r
                        }
                        ty(te(e4 + t * (e8 - e4)), e)
                    }
                }, v.createElement("div", {
                    className: d()("".concat(el, "-rail"), null == es ? void 0 : es.rail),
                    style: u(u({}, eX), null == ef ? void 0 : ef.rail)
                }), v.createElement(W, {
                    prefixCls: el,
                    style: eU,
                    values: tO,
                    startPoint: eB,
                    onStartMove: tx ? tC : null
                }), v.createElement(B, {
                    prefixCls: el,
                    marks: e9,
                    dots: eK,
                    style: eY,
                    activeStyle: eV
                }), v.createElement(R, {
                    ref: e1,
                    prefixCls: el,
                    style: eW,
                    values: tb,
                    draggingIndex: tv,
                    onStartMove: tC,
                    onOffsetChange: function(e, t) {
                        if (!ev) {
                            var n = tt(tu, e, t);
                            null == eN || eN(ti(tu)), tc(n.values), tE(n.value)
                        }
                    },
                    onFocus: ey,
                    onBlur: ep,
                    handleRender: eZ,
                    onChangeComplete: ts
                }), v.createElement(_, {
                    prefixCls: el,
                    marks: e9,
                    onClick: ty
                })))
            })
        }
    }
]);