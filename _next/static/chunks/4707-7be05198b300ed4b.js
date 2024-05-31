(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4707], {
        66678: function(t, e, a) {
            var l = a(85990);
            t.exports = function(t) {
                return l(t, 4)
            }
        },
        27849: function(t, e, a) {
            "use strict";
            a.r(e);
            var l = a(85893),
                n = a(39311),
                s = a(97867),
                c = a(91132),
                r = a(13989),
                o = a(94184),
                i = a.n(o),
                u = a(30381),
                d = a.n(u),
                f = a(67294),
                h = a(40406),
                m = a(51498),
                x = a(1656);
            e.default = t => {
                let {
                    itemData: e
                } = t, [a, o] = (0, f.useState)("initial"), [u, p] = (0, f.useState)(), y = (0, m.useTreeToast)(), b = (0, h.VY)(), {
                    state: {
                        userInfo: g
                    }
                } = (0, x.Wr)();
                (0, f.useEffect)(() => {
                    if (!e || !e.data) return;
                    o("initial");
                    let t = null;
                    ("daily" === e.data.type || "48h" === e.data.type) && (t = d()().utc().endOf("day")), "24h" === e.data.type && (t = d()().utc().add(1, "day").endOf("day")), t && p([new Date().getTime(), Number(t.format("x"))])
                }, [e]);
                let v = t => {
                        let {
                            signin: e
                        } = t || {
                            signin: 0
                        };
                        0 != e && (e + 1) % 7 == 0 && c.c.notify(c.d.ADD_MYSTERY_BOX)
                    },
                    {
                        run: w
                    } = (0, s.b)((t, e) => ({
                        url: "/api/tree/claim",
                        method: "post",
                        data: t
                    }), {
                        debounceInterval: 600,
                        onSuccess: (t, e) => {
                            "daily" === e[0].type && v(e[1]), y({
                                type: "collect",
                                amount: t
                            }), c.c.notify(c.d.USER_INFO_REFRESH), c.c.notify(c.d.CLAIM_COMPLETE, e[0].id)
                        },
                        onError: t => {
                            b.error(t.msg), o("initial")
                        }
                    }),
                    j = () => {
                        let t = document.querySelector("#app-root"),
                            a = document.querySelector("#inject-root"),
                            l = document.querySelector("#bubble-root-".concat(e.data.id));
                        if (!l || !t || !a) return;
                        o("scale");
                        let n = l.getBoundingClientRect(),
                            s = a.getBoundingClientRect(),
                            c = l.cloneNode(!0);
                        c.classList.remove("bubble-wave"), c.classList.add("transition-all"), c.classList.add("duration-700"), c.style.left = "".concat(n.x, "px"), c.style.top = "".concat(n.y + window.scrollY, "px"), c.style.width = "".concat(n.width, "px"), c.style.height = "".concat(n.height, "px"), c.style.zIndex = 9999, t.appendChild(c), setTimeout(() => {
                            c.style.left = "".concat(s.x + s.width / 2 - n.width / 2, "px"), c.style.top = "".concat(s.y + window.scrollY + s.height / 2 - n.height / 2, "px")
                        }, 100), setTimeout(() => {
                            c.style.transform = "scale(0.2)"
                        }, 300), setTimeout(() => {
                            c.style.transform = "scale(0)", t.removeChild(c), o("done")
                        }, 750)
                    };
                return e && e.data && "initial" === a ? (0, l.jsxs)("div", {
                    id: "bubble-root-".concat(e.data.id),
                    className: i()("absolute flex items-center justify-center cursor-pointer max-h-[68px] max-w-[68px] z-[9999] select-none bubble-wave scale-100 translate-y-[-3px]", {
                        "text-tree-text": !e.data.freeze && "daily" !== e.data.type,
                        "text-[#BD751F]": !e.data.freeze && "daily" === e.data.type,
                        "text-[#AC9F8F]": e.data.freeze
                    }),
                    style: e.style,
                    onClick: () => {
                        e.data.freeze || (j(), w(e.data, g))
                    },
                    children: ["daily" !== e.data.type && (0, l.jsx)(r.sU, {
                        className: "w-full h-full absolute left-0 top-0 z-10"
                    }), "daily" === e.data.type && !e.data.freeze && (0, l.jsx)(r.Tz, {
                        className: "w-full h-full absolute left-0 top-0 z-10"
                    }), "daily" === e.data.type && e.data.freeze && (0, l.jsx)(r.Y3, {
                        className: "w-full h-full absolute left-0 top-0 z-10"
                    }), (0, l.jsx)("img", {
                        className: "w-full h-full absolute left-0 top-0 z-20",
                        src: "https://static.mintchain.io/forest/ic-bubble-light.png",
                        alt: ""
                    }), (0, l.jsx)("span", {
                        className: i()("font-DINCond font-medium relative z-30", {
                            "text-[22px] lg:text-[28px]": String(e.data.amount).length <= 5,
                            "text-[14px] lg:text-[20px]": String(e.data.amount).length > 5
                        }),
                        children: e.data.amount
                    }), u && (0, l.jsx)("span", {
                        className: "text-sm lg:text-base font-semibold absolute -bottom-8 lg:-bottom-12 translate-x-[-50%] left-[50%]",
                        children: (0, l.jsx)(n.Z, {
                            type: "short",
                            start: u[0],
                            end: u[1],
                            duration: 1e3
                        })
                    })]
                }) : (0, l.jsx)(l.Fragment, {})
            }
        },
        48964: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return d
                }
            });
            var l = a(85893),
                n = a(67294),
                s = t => {
                    let [e, a] = (0, n.useState)();
                    return (0, n.useEffect)(() => {
                        void 0 !== t.movePercent && void 0 !== t.moveDirection && 0 != t.moveDistance && a({
                            transform: "translate(".concat(t.moveDistance * t.movePercent * ("left" === t.moveDirection ? -1 : 1), "px,0px)")
                        })
                    }, [t.moveDistance, t.movePercent, t.moveDirection]), (0, n.useMemo)(() => (0, n.cloneElement)(t.children, {
                        style: { ...t.children.props.style || {},
                            ...e
                        }
                    }), [e, t.children])
                },
                c = a(1656),
                r = a(42054),
                o = a(93849),
                i = a(94184),
                u = a.n(i),
                d = t => {
                    let {
                        state: {
                            clientWidth: e,
                            clientHeight: a,
                            moveDirection: n,
                            movePercent: i
                        }
                    } = (0, c.Wr)(), d = (0, r.hz)(o.i0, e);
                    return e && a ? (0, l.jsxs)("div", {
                        className: "w-full h-full relative overflow-hidden",
                        children: [(0, l.jsx)("div", {
                            className: "absolute left-[50%] translate-x-[-50%] overflow-hidden",
                            style: {
                                height: "".concat(a - 100, "px"),
                                width: "".concat(e, "px")
                            },
                            children: d.map((t, a) => (0, l.jsx)(s, {
                                moveDistance: t.moveDistance,
                                moveDirection: n,
                                movePercent: i,
                                children: t.url.includes("cloud") ? (0, l.jsxs)("div", {
                                    className: u()("w-[200%] relative cloud-move select-none", {
                                        "cloud-move-140": t.url.includes("cloud2"),
                                        "cloud-move-160": t.url.includes("cloud3")
                                    }),
                                    children: [(0, l.jsx)("img", {
                                        src: t.url,
                                        alt: "",
                                        className: u()("absolute h-auto"),
                                        style: {
                                            left: t.left ? t.left - e : "unset",
                                            right: t.right ? t.right - e : "unset",
                                            top: t.top,
                                            width: t.width
                                        }
                                    }), (0, l.jsx)("img", {
                                        src: t.url,
                                        alt: "",
                                        className: u()("absolute h-auto"),
                                        style: {
                                            left: t.left ? t.left : "unset",
                                            right: t.right ? t.right : "unset",
                                            top: t.top,
                                            width: t.width
                                        }
                                    })]
                                }) : (0, l.jsx)("img", {
                                    src: t.url,
                                    alt: "",
                                    className: u()("absolute h-auto select-none"),
                                    style: {
                                        left: t.left ? t.left : "unset",
                                        right: t.right ? t.right : "unset",
                                        top: t.top,
                                        width: t.width
                                    }
                                })
                            }, a))
                        }), (0, l.jsx)("div", {
                            className: "w-[125%] h-50 blur-md bg-[#23a850] absolute bottom-20 left-[50%] translate-x-[-50%]"
                        })]
                    }) : (0, l.jsx)(l.Fragment, {})
                }
        },
        94707: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return w
                }
            });
            var l = a(85893),
                n = a(67294),
                s = t => {
                    let e = (0, n.useRef)(),
                        a = (0, n.useRef)(),
                        l = l => {
                            if (!t.onMove || !a.current) return;
                            let n = {
                                x: l.clientX,
                                y: l.clientY
                            };
                            e.current || (e.current = n);
                            let s = n.x < e.current.x ? "left" : "right",
                                c = n.x - e.current.x;
                            t.onMove(s, Math.abs(c) / a.current.clientWidth)
                        },
                        s = () => {
                            t.onMove && a.current && (e.current = void 0, t.onMove("left", 0))
                        };
                    return (0, n.useMemo)(() => (0, n.cloneElement)(t.children, {
                        onMouseMove: l,
                        onMouseLeave: s,
                        ref: a
                    }), [t.children])
                },
                c = a(1656),
                r = a(42054),
                o = a(97867),
                i = a(91132),
                u = a(93849),
                d = a(94184),
                f = a.n(d),
                h = a(66678),
                m = a.n(h),
                x = a(23279),
                p = a.n(x),
                y = a(27849),
                b = a(91446),
                g = a(28241),
                v = a(48964),
                w = t => {
                    let {
                        state: {
                            clientWidth: e,
                            clientHeight: a,
                            token: d
                        },
                        dispatch: h
                    } = (0, c.Wr)(), [x, w] = (0, n.useState)([]), [j, E] = (0, n.useState)(""), [N, D] = (0, n.useState)("energy"), [M, S] = (0, n.useState)(), _ = (0, r.zq)(), z = (0, r.hz)(u.jZ, _(u.jZ.width)), C = (0, c.jC)(), R = (0, c.AG)(), k = (0, n.useRef)(), T = (0, n.useRef)([]), O = (0, n.useMemo)(() => C ? C.level : -1, [C]), A = (0, n.useMemo)(() => O < 0 ? null : z.trees[O], [z, O]), {
                        run: F
                    } = (0, o.b)(() => ({
                        url: "/api/tree/energy-list",
                        method: "get"
                    }), {
                        onSuccess: t => {
                            S(t.map(t => ({ ...t,
                                id: "".concat(t.amount, "_").concat(t.includes.join("_"))
                            })))
                        }
                    });
                    (0, n.useEffect)(() => {
                        d && F()
                    }, [d]), (0, n.useEffect)(() => {
                        T.current = []
                    }, [z]);
                    let I = (0, n.useCallback)(p()((t, e, a) => {
                        let l = [],
                            n = m()(t),
                            s = [];
                        T.current.forEach((t, e) => {
                            let a = n.findIndex(e => {
                                    let a = "".concat(e.amount, "_");
                                    return t.id == e.id || t.id.startsWith(a)
                                }),
                                c = n[a];
                            c && (l.push(t.id), n.splice(a, 1), s.push({
                                style: {
                                    left: "".concat(t.x, "px"),
                                    bottom: "".concat(t.y, "px"),
                                    width: "".concat(t.w, "px"),
                                    height: "".concat(t.w, "px"),
                                    animationDelay: "".concat(100 * Math.floor(10 * Math.random() * t.index), "ms")
                                },
                                data: c
                            }))
                        }), T.current = T.current.filter(t => l.includes(t.id));
                        let c = (0, u.wn)(e, n.length, a, T.current).map((t, e) => (s.push({
                            style: {
                                left: "".concat(t.x, "px"),
                                bottom: "".concat(t.y, "px"),
                                width: "".concat(t.w, "px"),
                                height: "".concat(t.w, "px"),
                                animationDelay: "".concat(100 * Math.floor(10 * Math.random() * (e + 1)), "ms")
                            },
                            data: n[e]
                        }), { ...t,
                            id: n[e].id
                        }));
                        T.current = T.current.concat(c), w(s)
                    }, 500), []);
                    return ((0, n.useEffect)(() => {
                        M && !(O < 0) && I(M, z, O)
                    }, [M, O, z, I]), (0, n.useEffect)(() => {
                        let t = i.c.subscribe([{
                            name: i.d.ADD_MYSTERY_BOX,
                            callback: () => {
                                E("fly"), D("energy")
                            }
                        }, {
                            name: i.d.ADD_MINTID_BOX,
                            callback: () => {
                                E("fly"), D("stake")
                            }
                        }, {
                            name: i.d.REMOVE_BOX,
                            callback: () => {
                                E("")
                            }
                        }, {
                            name: i.d.INJECT,
                            callback: t => {
                                k.current && k.current.show(t)
                            }
                        }, {
                            name: i.d.ENERGY_REFRESH,
                            callback: () => {
                                F()
                            }
                        }, {
                            name: i.d.CLAIM_COMPLETE,
                            callback: t => {
                                T.current = T.current.filter(e => e.id != t), w(e => {
                                    let a = e.filter(e => e.data.id != t);
                                    return ((0, u.xb)(a) || 1 === a.length && a[0].data.freeze) && F(), a
                                })
                            }
                        }]);
                        return () => {
                            t.unsubscribe()
                        }
                    }, []), e) ? (0, l.jsx)(s, {
                        onMove: (t, e) => {
                            h && h({
                                type: "SAVE",
                                payload: {
                                    moveDirection: t,
                                    movePercent: e
                                }
                            })
                        },
                        children: (0, l.jsxs)("div", {
                            className: "relative w-full overflow-x-hidden",
                            style: {
                                height: "".concat(a, "px")
                            },
                            children: [(0, l.jsx)(v.default, {}), (0, l.jsxs)("div", {
                                className: "absolute left-[50%] translate-x-[-50%] flex flex-row justify-end bg-[rgba(0,0,0,0)]",
                                style: {
                                    width: "".concat(z.width, "px"),
                                    height: "".concat(z.height, "px"),
                                    top: "".concat(z.top, "px")
                                },
                                children: [A && (0, l.jsx)(l.Fragment, {
                                    children: (0, l.jsx)(g.default, {
                                        onRef: k,
                                        id: "tree-pic",
                                        className: f()("!absolute w-[80%] h-full bottom-0 left-[50%] translate-x-[-50%]"),
                                        lv: O
                                    })
                                }), !R && x.map((t, e) => (0, l.jsx)(y.default, {
                                    itemData: t
                                }, t.data.id))]
                            }), (0, l.jsx)(b.default, {
                                className: f()("!absolute left-[80%] top-[-10%] w-30 lg:w-50 h-fit z-[99]"),
                                type: N,
                                status: j ? "fly" : "",
                                onClick: () => {
                                    i.c.notify(i.d.OPEN_BACKPACK), E("")
                                }
                            })]
                        })
                    }) : (0, l.jsx)(l.Fragment, {})
                }
        }
    }
]);