"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2106], {
        62841: function(t, e, o) {
            var n = this && this.__assign || function() {
                return (n = Object.assign || function(t) {
                    for (var e, o = 1, n = arguments.length; o < n; o++)
                        for (var r in e = arguments[o]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.ArrowContainer = void 0;
            var r = o(85893),
                i = o(67294),
                a = o(9512);
            e.ArrowContainer = function(t) {
                var e = t.childRect,
                    o = t.popoverRect,
                    c = t.position,
                    u = t.arrowColor,
                    l = t.arrowSize,
                    d = t.arrowClassName,
                    s = t.arrowStyle,
                    p = t.className,
                    f = t.children,
                    v = t.style,
                    h = (0, a.useArrowContainer)({
                        childRect: e,
                        popoverRect: o,
                        position: c,
                        arrowColor: u,
                        arrowSize: l
                    }),
                    g = h.arrowContainerStyle,
                    b = h.arrowStyle,
                    R = (0, i.useMemo)(function() {
                        return n(n({}, g), v)
                    }, [g, v]),
                    m = (0, i.useMemo)(function() {
                        return n(n({}, b), s)
                    }, [b, s]);
                return (0, r.jsxs)("div", {
                    className: p,
                    style: R,
                    children: [(0, r.jsx)("div", {
                        style: m,
                        className: d
                    }), f]
                })
            }
        },
        82106: function(t, e, o) {
            var n = this && this.__assign || function() {
                return (n = Object.assign || function(t) {
                    for (var e, o = 1, n = arguments.length; o < n; o++)
                        for (var r in e = arguments[o]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Popover = e.usePopover = e.ArrowContainer = e.useArrowContainer = void 0;
            var r = o(85893),
                i = o(67294),
                a = o(95114),
                c = o(62319),
                u = o(91101);
            Object.defineProperty(e, "usePopover", {
                enumerable: !0,
                get: function() {
                    return u.usePopover
                }
            });
            var l = o(16444),
                d = o(9512);
            Object.defineProperty(e, "useArrowContainer", {
                enumerable: !0,
                get: function() {
                    return d.useArrowContainer
                }
            });
            var s = o(62841);
            Object.defineProperty(e, "ArrowContainer", {
                enumerable: !0,
                get: function() {
                    return s.ArrowContainer
                }
            });
            var p = ["top", "left", "right", "bottom"],
                f = (0, i.forwardRef)(function(t, e) {
                    var o = t.isOpen,
                        n = t.children,
                        d = t.content,
                        s = t.positions,
                        f = void 0 === s ? p : s,
                        v = t.align,
                        h = void 0 === v ? "center" : v,
                        g = t.padding,
                        b = void 0 === g ? 0 : g,
                        R = t.reposition,
                        m = void 0 === R || R,
                        y = t.parentElement,
                        w = void 0 === y ? window.document.body : y,
                        C = t.boundaryElement,
                        P = void 0 === C ? w : C,
                        E = t.containerClassName,
                        _ = t.containerStyle,
                        x = t.transform,
                        M = t.transformMode,
                        O = t.boundaryInset,
                        j = void 0 === O ? 0 : O,
                        N = t.onClickOutside,
                        T = t.clickOutsideCapture,
                        A = void 0 !== T && T,
                        k = (0, l.useMemoizedArray)(Array.isArray(f) ? f : [f]),
                        L = (0, i.useRef)(!1),
                        S = (0, i.useRef)(),
                        B = (0, i.useRef)(m),
                        I = (0, i.useRef)(),
                        Y = (0, i.useState)({
                            align: h,
                            nudgedLeft: 0,
                            nudgedTop: 0,
                            position: k[0],
                            padding: b,
                            childRect: c.EMPTY_RECT,
                            popoverRect: c.EMPTY_RECT,
                            parentRect: c.EMPTY_RECT,
                            boundaryRect: c.EMPTY_RECT,
                            boundaryInset: j,
                            violations: c.EMPTY_RECT,
                            hasViolations: !1
                        }),
                        z = Y[0],
                        F = Y[1],
                        q = (0, i.useCallback)(function(t) {
                            return F(t)
                        }, []),
                        V = (0, u.usePopover)({
                            isOpen: o,
                            childRef: I,
                            containerClassName: E,
                            parentElement: w,
                            boundaryElement: P,
                            transform: x,
                            transformMode: void 0 === M ? "absolute" : M,
                            positions: k,
                            align: h,
                            padding: b,
                            boundaryInset: j,
                            reposition: m,
                            onPositionPopover: q
                        }),
                        D = V.positionPopover,
                        G = V.popoverRef,
                        H = V.scoutRef;
                    (0, i.useLayoutEffect)(function() {
                        var t = !0,
                            e = function() {
                                var n, r;
                                if (o && t) {
                                    var i = null === (n = null == I ? void 0 : I.current) || void 0 === n ? void 0 : n.getBoundingClientRect(),
                                        a = null === (r = null == G ? void 0 : G.current) || void 0 === r ? void 0 : r.getBoundingClientRect();
                                    null == i || null == a || (0, c.rectsAreEqual)(i, z.childRect) && a.width === z.popoverRect.width && a.height === z.popoverRect.height && z.padding === b && z.align === h && k === S.current && m === B.current || D(), k !== S.current && (S.current = k), m !== B.current && (B.current = m), t && window.requestAnimationFrame(e)
                                }
                                L.current = o
                            };
                        return window.requestAnimationFrame(e),
                            function() {
                                t = !1
                            }
                    }, [h, o, b, G, z.align, z.childRect, z.padding, z.popoverRect.height, z.popoverRect.width, D, k, m]), (0, i.useEffect)(function() {
                        var t = G.current;
                        return Object.assign(t.style, _),
                            function() {
                                Object.keys(null != _ ? _ : {}).forEach(function(e) {
                                    return delete t.style[e]
                                })
                            }
                    }, [_, o, G]);
                    var J = (0, i.useCallback)(function(t) {
                            var e, n;
                            !o || (null === (e = G.current) || void 0 === e ? void 0 : e.contains(t.target)) || (null === (n = I.current) || void 0 === n ? void 0 : n.contains(t.target)) || null == N || N(t)
                        }, [o, N, G]),
                        K = (0, i.useCallback)(function() {
                            I.current && window.requestAnimationFrame(function() {
                                return D()
                            })
                        }, [D]);
                    (0, i.useEffect)(function() {
                        var t = w.ownerDocument.body;
                        return t.addEventListener("click", J, A), t.addEventListener("contextmenu", J, A), t.addEventListener("resize", K),
                            function() {
                                t.removeEventListener("click", J, A), t.removeEventListener("contextmenu", J, A), t.removeEventListener("resize", K)
                            }
                    }, [A, J, K, w]);
                    var Q = (0, i.useCallback)(function(t) {
                        I.current = t, null != e && ("object" == typeof e ? e.current = t : "function" == typeof e && e(t))
                    }, [e]);
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, i.cloneElement)(n, {
                            ref: Q
                        }), o ? (0, r.jsx)(a.PopoverPortal, {
                            element: G.current,
                            scoutElement: H.current,
                            container: w,
                            children: "function" == typeof d ? d(z) : d
                        }) : null]
                    })
                });
            e.Popover = (0, i.forwardRef)(function(t, e) {
                return "undefined" == typeof window ? t.children : (0, r.jsx)(f, n({}, t, {
                    ref: e
                }))
            })
        },
        95114: function(t, e, o) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.PopoverPortal = void 0;
            var n = o(67294),
                r = o(73935);
            e.PopoverPortal = function(t) {
                var e = t.container,
                    o = t.element,
                    i = t.scoutElement,
                    a = t.children;
                return (0, n.useLayoutEffect)(function() {
                    return e.appendChild(o), e.appendChild(i),
                        function() {
                            e.removeChild(o), e.removeChild(i)
                        }
                }, [e, o, i]), (0, r.createPortal)(a, o)
            }
        },
        9512: function(t, e, o) {
            var n = this && this.__assign || function() {
                return (n = Object.assign || function(t) {
                    for (var e, o = 1, n = arguments.length; o < n; o++)
                        for (var r in e = arguments[o]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.useArrowContainer = void 0;
            var r = o(67294);
            e.useArrowContainer = function(t) {
                var e = t.childRect,
                    o = t.popoverRect,
                    i = t.position,
                    a = t.arrowSize,
                    c = t.arrowColor;
                return {
                    arrowContainerStyle: (0, r.useMemo)(function() {
                        return {
                            padding: a
                        }
                    }, [a]),
                    arrowStyle: (0, r.useMemo)(function() {
                        return n({
                            position: "absolute"
                        }, function() {
                            var t = 2 * a,
                                n = e.top - o.top + e.height / 2 - t / 2,
                                r = e.left - o.left + e.width / 2 - t / 2,
                                u = o.width - a,
                                l = o.height - a;
                            switch (r = (r = r < a ? a : r) + t > u ? u - t : r, n = Number.isNaN(n = (n = n < a ? a : n) + t > l ? l - t : n) ? 0 : n, r = Number.isNaN(r) ? 0 : r, i) {
                                case "right":
                                    return {
                                        borderTop: "".concat(a, "px solid transparent"),
                                        borderBottom: "".concat(a, "px solid transparent"),
                                        borderRight: "".concat(a, "px solid ").concat(c),
                                        left: 0,
                                        top: n
                                    };
                                case "left":
                                    return {
                                        borderTop: "".concat(a, "px solid transparent"),
                                        borderBottom: "".concat(a, "px solid transparent"),
                                        borderLeft: "".concat(a, "px solid ").concat(c),
                                        right: 0,
                                        top: n
                                    };
                                case "bottom":
                                    return {
                                        borderLeft: "".concat(a, "px solid transparent"),
                                        borderRight: "".concat(a, "px solid transparent"),
                                        borderBottom: "".concat(a, "px solid ").concat(c),
                                        top: 0,
                                        left: r
                                    };
                                case "top":
                                    return {
                                        borderLeft: "".concat(a, "px solid transparent"),
                                        borderRight: "".concat(a, "px solid transparent"),
                                        borderTop: "".concat(a, "px solid ").concat(c),
                                        bottom: 0,
                                        left: r
                                    };
                                default:
                                    return {
                                        display: "hidden"
                                    }
                            }
                        }())
                    }, [c, a, e.height, e.left, e.top, e.width, o.height, o.left, o.top, o.width, i])
                }
            }
        },
        83423: function(t, e, o) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.useElementRef = void 0;
            var n = o(67294),
                r = o(62319);
            e.useElementRef = function(t) {
                var e = t.containerClassName,
                    o = t.containerStyle,
                    i = t.id,
                    a = (0, n.useRef)(),
                    c = (0, n.useMemo)(function() {
                        return (0, r.createContainer)({
                            containerStyle: o,
                            containerClassName: e,
                            id: i
                        })
                    }, [e, o, i]);
                return a.current = c, a
            }
        },
        16444: function(t, e, o) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.useMemoizedArray = void 0;
            var n = o(67294);
            e.useMemoizedArray = function(t) {
                var e = (0, n.useRef)(t);
                return (0, n.useMemo)(function() {
                    if (e.current === t) return e.current;
                    if (e.current.length !== t.length) return e.current = t, t;
                    for (var o = 0; o < t.length; o += 1)
                        if (t[o] !== e.current[o]) return e.current = t, t;
                    return e.current
                }, [t])
            }
        },
        91101: function(t, e, o) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.usePopover = void 0;
            var n = o(67294),
                r = o(62319),
                i = o(83423),
                a = {
                    position: "fixed",
                    overflow: "visible",
                    top: "0px",
                    left: "0px"
                },
                c = {
                    position: "fixed",
                    top: "0px",
                    left: "0px",
                    width: "0px",
                    height: "0px",
                    visibility: "hidden"
                };
            e.usePopover = function(t) {
                var e = t.isOpen,
                    o = t.childRef,
                    u = t.positions,
                    l = t.containerClassName,
                    d = t.parentElement,
                    s = t.transform,
                    p = t.transformMode,
                    f = t.align,
                    v = t.padding,
                    h = t.reposition,
                    g = t.boundaryInset,
                    b = t.boundaryElement,
                    R = t.onPositionPopover,
                    m = (0, i.useElementRef)({
                        id: "react-tiny-popover-scout",
                        containerStyle: c
                    }),
                    y = (0, i.useElementRef)({
                        id: "react-tiny-popover-container",
                        containerClassName: l,
                        containerStyle: a
                    }),
                    w = (0, n.useCallback)(function(t) {
                        var n, i, a = void 0 === t ? {} : t,
                            c = a.positionIndex,
                            l = void 0 === c ? 0 : c,
                            C = a.parentRect,
                            P = void 0 === C ? d.getBoundingClientRect() : C,
                            E = a.childRect,
                            _ = void 0 === E ? null === (n = null == o ? void 0 : o.current) || void 0 === n ? void 0 : n.getBoundingClientRect() : E,
                            x = a.scoutRect,
                            M = void 0 === x ? null === (i = null == m ? void 0 : m.current) || void 0 === i ? void 0 : i.getBoundingClientRect() : x,
                            O = a.popoverRect,
                            j = void 0 === O ? y.current.getBoundingClientRect() : O,
                            N = a.boundaryRect,
                            T = void 0 === N ? b === d ? P : b.getBoundingClientRect() : N;
                        if (_ && P && e) {
                            if (s && "absolute" === p) {
                                var A = "function" == typeof s ? s({
                                        childRect: _,
                                        popoverRect: j,
                                        parentRect: P,
                                        boundaryRect: T,
                                        padding: v,
                                        align: f,
                                        nudgedTop: 0,
                                        nudgedLeft: 0,
                                        boundaryInset: g,
                                        violations: r.EMPTY_RECT,
                                        hasViolations: !1
                                    }) : s,
                                    k = A.top,
                                    L = A.left,
                                    S = Math.round(P.left + L - M.left),
                                    B = Math.round(P.top + k - M.top);
                                y.current.style.transform = "translate(".concat(S, "px, ").concat(B, "px)"), R({
                                    childRect: _,
                                    popoverRect: (0, r.createRect)({
                                        left: S,
                                        top: B,
                                        width: j.width,
                                        height: j.height
                                    }),
                                    parentRect: P,
                                    boundaryRect: T,
                                    padding: v,
                                    align: f,
                                    transform: {
                                        top: k,
                                        left: L
                                    },
                                    nudgedTop: 0,
                                    nudgedLeft: 0,
                                    boundaryInset: g,
                                    violations: r.EMPTY_RECT,
                                    hasViolations: !1
                                });
                                return
                            }
                            var I = l === u.length,
                                Y = I ? u[0] : u[l],
                                z = (0, r.getNewPopoverRect)({
                                    childRect: _,
                                    popoverRect: j,
                                    boundaryRect: T,
                                    position: Y,
                                    align: f,
                                    padding: v,
                                    reposition: h
                                }, g),
                                F = z.rect;
                            if (z.boundaryViolation && h && !I) {
                                w({
                                    positionIndex: l + 1,
                                    childRect: _,
                                    popoverRect: j,
                                    parentRect: P,
                                    boundaryRect: T
                                });
                                return
                            }
                            var q = F.top,
                                V = F.left,
                                D = F.width,
                                G = F.height,
                                H = h && !I,
                                J = (0, r.getNudgedPopoverRect)(F, T, g),
                                K = J.left,
                                Q = J.top,
                                U = q,
                                W = V;
                            H && (U = Q, W = K), U = Math.round(U - M.top), W = Math.round(W - M.left), y.current.style.transform = "translate(".concat(W, "px, ").concat(U, "px)");
                            var X = {
                                    top: T.top + g - U,
                                    left: T.left + g - W,
                                    right: W + D - T.right + g,
                                    bottom: U + G - T.bottom + g
                                },
                                Z = {
                                    childRect: _,
                                    popoverRect: (0, r.createRect)({
                                        left: W,
                                        top: U,
                                        width: D,
                                        height: G
                                    }),
                                    parentRect: P,
                                    boundaryRect: T,
                                    position: Y,
                                    align: f,
                                    padding: v,
                                    nudgedTop: Q - q,
                                    nudgedLeft: K - V,
                                    boundaryInset: g,
                                    violations: {
                                        top: X.top <= 0 ? 0 : X.top,
                                        left: X.left <= 0 ? 0 : X.left,
                                        right: X.right <= 0 ? 0 : X.right,
                                        bottom: X.bottom <= 0 ? 0 : X.bottom
                                    },
                                    hasViolations: X.top > 0 || X.left > 0 || X.right > 0 || X.bottom > 0
                                };
                            if (s) {
                                R(Z);
                                var $ = "function" == typeof s ? s(Z) : s,
                                    tt = $.top,
                                    te = $.left;
                                y.current.style.transform = "translate(".concat(Math.round(W + (null != te ? te : 0)), "px, ").concat(Math.round(U + (null != tt ? tt : 0)), "px)"), Z.nudgedLeft += null != te ? te : 0, Z.nudgedTop += null != tt ? tt : 0, Z.transform = {
                                    top: tt,
                                    left: te
                                }
                            }
                            R(Z)
                        }
                    }, [d, o, m, y, b, e, s, p, u, f, v, h, g, R]);
                return {
                    positionPopover: w,
                    popoverRef: y,
                    scoutRef: m
                }
            }
        },
        62319: function(t, e) {
            var o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, o = 1, n = arguments.length; o < n; o++)
                        for (var r in e = arguments[o]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.getNudgedPopoverRect = e.getNewPopoverRect = e.popoverRectForPosition = e.createContainer = e.rectsAreEqual = e.createRect = e.EMPTY_RECT = void 0, e.EMPTY_RECT = {
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: 0,
                height: 0
            }, e.createRect = function(t) {
                var e = t.top,
                    o = t.left,
                    n = t.width,
                    r = t.height;
                return {
                    top: e,
                    left: o,
                    width: n,
                    height: r,
                    right: o + n,
                    bottom: e + r
                }
            }, e.rectsAreEqual = function(t, e) {
                return t === e || (null == t ? void 0 : t.bottom) === (null == e ? void 0 : e.bottom) && (null == t ? void 0 : t.height) === (null == e ? void 0 : e.height) && (null == t ? void 0 : t.left) === (null == e ? void 0 : e.left) && (null == t ? void 0 : t.right) === (null == e ? void 0 : e.right) && (null == t ? void 0 : t.top) === (null == e ? void 0 : e.top) && (null == t ? void 0 : t.width) === (null == e ? void 0 : e.width)
            }, e.createContainer = function(t) {
                var e = t.containerStyle,
                    o = t.containerClassName,
                    n = t.id,
                    r = window.document.createElement("div");
                return r.id = n, o && (r.className = o), Object.assign(r.style, e), r
            }, e.popoverRectForPosition = function(t, o, n, r, i) {
                var a, c, u = o.left + o.width / 2,
                    l = o.top + o.height / 2,
                    d = n.width,
                    s = n.height;
                switch (t) {
                    case "left":
                        a = l - s / 2, c = o.left - r - d, "start" === i && (a = o.top), "end" === i && (a = o.bottom - s);
                        break;
                    case "bottom":
                        a = o.bottom + r, c = u - d / 2, "start" === i && (c = o.left), "end" === i && (c = o.right - d);
                        break;
                    case "right":
                        a = l - s / 2, c = o.right + r, "start" === i && (a = o.top), "end" === i && (a = o.bottom - s);
                        break;
                    default:
                        a = o.top - s - r, c = u - d / 2, "start" === i && (c = o.left), "end" === i && (c = o.right - d)
                }
                return (0, e.createRect)({
                    left: c,
                    top: a,
                    width: d,
                    height: s
                })
            }, e.getNewPopoverRect = function(t, o) {
                var n = t.position,
                    r = t.align,
                    i = t.childRect,
                    a = t.popoverRect,
                    c = t.boundaryRect,
                    u = t.padding,
                    l = t.reposition,
                    d = (0, e.popoverRectForPosition)(n, i, a, u, r),
                    s = l && ("top" === n && d.top < c.top + o || "left" === n && d.left < c.left + o || "right" === n && d.right > c.right - o || "bottom" === n && d.bottom > c.bottom - o);
                return {
                    rect: d,
                    boundaryViolation: s
                }
            }, e.getNudgedPopoverRect = function(t, n, r) {
                var i = n.top + r,
                    a = n.left + r,
                    c = n.right - r,
                    u = n.bottom - r,
                    l = t.top < i ? i : t.top;
                l = l + t.height > u ? u - t.height : l;
                var d = t.left < a ? a : t.left;
                return d = d + t.width > c ? c - t.width : d, (0, e.createRect)(o(o({}, t), {
                    top: l,
                    left: d
                }))
            }
        }
    }
]);