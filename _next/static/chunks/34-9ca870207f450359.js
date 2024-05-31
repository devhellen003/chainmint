"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [34], {
        34278: function(e, t, l) {
            l.r(t);
            var s = l(85893),
                r = l(81921),
                n = l(13989),
                a = l(93849),
                o = l(41664),
                i = l.n(o),
                c = l(67294),
                u = l(60892);
            t.default = e => {
                let [t, l] = (0, c.useState)(), [o, d] = (0, c.useState)(), f = (0, c.useCallback)(e => {
                    l(e)
                }, []), x = (0, c.useCallback)(e => {
                    d(e)
                }, []);
                return (0, c.useEffect)(() => {
                    l(e.userInfo)
                }, [e.userInfo]), (0, c.useEffect)(() => {
                    d(e.status)
                }, [e.status]), (0, s.jsxs)(s.Fragment, {
                    children: ["full" == e.type && (0, s.jsxs)("div", {
                        className: "w-full flex bg-white rounded-lg px-8 text-[#B8CCBB] relative items-center",
                        children: [(0, s.jsx)(n.K1, {
                            className: "absolute left-8 w-9 h-9"
                        }), (0, s.jsx)(u.default, {
                            type: "text",
                            placeholder: "Enter Tree ID",
                            className: "w-full h-[55px] leading-[55px] text-black placeholder:text-[#B8CCBB] text-md font-medium pl-12",
                            onSuccess: f,
                            onStatusChange: x
                        })]
                    }), (0, s.jsx)(r.Z, {
                        status: o,
                        className: "bg-white rounded-lg mt-8 lg:min-w-[270px] shadow-lg"
                    }), t && (0, s.jsxs)(i(), {
                        href: "/mint-forest?id=".concat(t.treeId),
                        className: "w-full flex items-center bg-white rounded-lg p-8 gap-8 text-[#8A8772] mt-8 cursor-pointer shadow-lg lg:min-w-[270px]",
                        onClick: () => {
                            e.onClose && e.onClose()
                        },
                        children: [(0, s.jsx)("img", {
                            src: a.jZ.trees[t.level].url,
                            alt: "",
                            className: "h-22 w-auto"
                        }), (0, s.jsxs)("div", {
                            className: "flex flex-col gap-3 flex-1",
                            children: [(0, s.jsxs)("span", {
                                className: "font-DINCond text-lg font-medium text-tree-text",
                                children: [(0, a.uf)(t.usedEnergy), " ME"]
                            }), (0, s.jsxs)("div", {
                                className: "flex items-center",
                                children: [(0, s.jsx)("span", {
                                    className: "text-base text-[#49524B]",
                                    children: "Level:"
                                }), (0, s.jsx)("span", {
                                    className: "text-base text-tree-text pl-2",
                                    children: t.level + 1
                                }), (0, s.jsx)("span", {
                                    className: "text-base text-[#49524B] ml-4",
                                    children: "Tree ID:"
                                }), (0, s.jsxs)("span", {
                                    className: "text-base text-tree-text pl-2",
                                    children: ["#", t.treeId]
                                })]
                            })]
                        }), (0, s.jsx)(n.ds, {
                            className: "-rotate-90"
                        })]
                    })]
                })
            }
        },
        22225: function(e, t, l) {
            l.r(t);
            var s = l(85893),
                r = l(39002),
                n = l(42054),
                a = l(13989),
                o = l(94184),
                i = l.n(o),
                c = l(67294),
                u = l(73935);
            t.default = e => {
                let [t, l] = (0, c.useState)(!1), [o, d] = (0, c.useState)(!1), [f, x] = (0, c.useState)(), {
                    isMobile: h
                } = (0, n.XA)(), m = (0, c.useRef)(), g = () => {
                    e.onClose && e.onClose()
                };
                (0, c.useEffect)(() => {
                    if (!h && m.current) {
                        e.show ? m.current.show() : m.current.hide();
                        return
                    }
                    document.documentElement.style.overflow = e.show ? "hidden" : "auto", e.show ? (d(!0), setTimeout(() => {
                        l(!0)
                    }, 50)) : (l(!1), setTimeout(() => {
                        d(!1)
                    }, 200))
                }, [h, e.show]);
                let p = (0, c.useMemo)(() => h ? o || t ? (0, s.jsxs)("div", {
                    className: i()("w-full h-screen fixed left-0 bottom-0 z-[100]"),
                    children: [(0, s.jsx)("div", {
                        onClick: g,
                        className: i()("w-full h-full absolute left-0 top-0 cursor-pointer transition-all", {
                            "bg-[rgba(0,0,0,0.5)]": t,
                            "bg-[rgba(0,0,0,0)]": !t
                        })
                    }), (0, s.jsxs)("div", {
                        className: i()("w-full max-h-[90%] min-h-[200px] absolute left-0 bg-gradient-to-b from-[#C2EDE9] to-[#FCF4DA] flex flex-col items-center rounded-t-2xl transition-all", {
                            "-bottom-full": !t,
                            "bottom-0": t
                        }),
                        children: [(0, s.jsx)("div", {
                            className: "w-[192px] h-[68px] flex items-center justify-center absolute left-[50%] translate-x-[-50%] -top-20",
                            style: {
                                background: 'url("https://static.mintchain.io/forest/ic-popup-title-bg.png") no-repeat',
                                backgroundSize: "100% 100%"
                            },
                            children: (0, s.jsx)("span", {
                                className: "text-[#5C3605] text-[20px] font-semibold",
                                children: e.title
                            })
                        }), (0, s.jsx)("div", {
                            className: "text-black w-24 h-24 flex items-center justify-center absolute right-0 top-0 cursor-pointer",
                            onClick: g,
                            children: (0, s.jsx)(a.sZ, {})
                        }), e.overlay && (0, s.jsx)("div", {
                            className: "w-full p-8 mt-[34px]",
                            children: e.overlay
                        })]
                    })]
                }) : (0, s.jsx)(s.Fragment, {}) : (0, s.jsx)("div", {
                    className: i()("bg-gradient-to-b from-[#C2EDE9] to-[#FCF4DA] rounded-2xl shadow-tree-box"),
                    children: (0, s.jsx)("div", {
                        className: "w-full p-8",
                        children: e.overlay
                    })
                }), [t, o, h, e.overlay, e.title]);
                (0, c.useEffect)(() => {
                    let t = e.parentSelector || "#forest-root";
                    x(document.querySelector(t))
                }, [e.parentSelector]);
                let b = (0, c.useCallback)(e => {
                    e || g()
                }, []);
                return (0, s.jsx)(s.Fragment, {
                    children: h ? (0, s.jsxs)(s.Fragment, {
                        children: [e.children, f && (0, u.createPortal)(p, f)]
                    }) : (0, s.jsx)(r.Z, {
                        onRef: m,
                        placement: ["top", "bottom", "right"],
                        content: () => p,
                        onVisibleChange: b,
                        children: e.children
                    })
                })
            }
        },
        60892: function(e, t, l) {
            l.r(t);
            var s = l(85893),
                r = l(97867),
                n = l(82501),
                a = l(23279),
                o = l.n(a),
                i = l(67294);
            t.default = e => {
                let {
                    onSuccess: t,
                    onError: l,
                    onChange: a,
                    onStatusChange: c,
                    ...u
                } = e, d = (0, i.useRef)(null), {
                    run: f,
                    status: x
                } = (0, r.b)(e => ({
                    url: "/api/tree/user-info",
                    method: "get",
                    params: {
                        treeid: e
                    }
                }), {
                    onSuccess: (e, l) => {
                        t((0, n.b)(e))
                    },
                    onError: e => {
                        l && l(e)
                    }
                }), h = (0, i.useCallback)(o()(e => {
                    a && a(e);
                    let t = e.target.value || "";
                    t && f(t)
                }, 600), [a]);
                return (0, i.useEffect)(() => {
                    c && c(x)
                }, [x, c]), (0, i.useEffect)(() => {
                    setTimeout(() => {
                        var e;
                        null === (e = d.current) || void 0 === e || e.focus()
                    }, 100)
                }, []), (0, s.jsx)("input", {
                    ref: d,
                    ...u,
                    onChange: h
                })
            }
        },
        40034: function(e, t, l) {
            l.r(t), l.d(t, {
                default: function() {
                    return g
                }
            });
            var s = l(85893),
                r = l(39002),
                n = l(42742),
                a = l(42054),
                o = l(67294),
                i = l(97595);
            let c = (e, t) => {
                (0, o.useEffect)(() => {
                    let l = (0, i.R)(document, "click").subscribe(l => {
                        if (!t) return;
                        let s = l.path || l.composedPath && l.composedPath(),
                            r = s.find(e => t.find(t => t === e));
                        e(null != r && void 0 != r)
                    });
                    return () => {
                        l.unsubscribe()
                    }
                }, [e, t])
            };
            var u = l(13989),
                d = l(94184),
                f = l.n(d),
                x = l(34278),
                h = l(22225),
                m = l(60892),
                g = e => {
                    let [t, l] = (0, o.useState)(!1), [i, d] = (0, o.useState)(), [g, p] = (0, o.useState)(!1), b = (0, o.useRef)(), [v, j] = (0, o.useState)(), [C, w] = (0, o.useState)(), {
                        isMobile: N
                    } = (0, a.XA)(), k = () => {
                        l(!1)
                    }, y = e => {
                        if (e.preventDefault(), !N) {
                            p(!0);
                            return
                        }
                        l(!0)
                    }, E = (0, o.useCallback)(e => {
                        var t;
                        d(e), null === (t = b.current) || void 0 === t || t.show()
                    }, []), S = (0, o.useCallback)(e => {
                        if (w(e), e && e !== n.t1.Success) {
                            var t;
                            d(void 0), null === (t = b.current) || void 0 === t || t.show()
                        }
                    }, []);
                    c(e => {
                        if (!e) {
                            var t;
                            null === (t = b.current) || void 0 === t || t.hide(), setTimeout(() => {
                                p(!1)
                            }, 300)
                        }
                    }, [v]);
                    let B = (0, o.useCallback)(e => {
                        if (!e.target.value) {
                            var t;
                            null === (t = b.current) || void 0 === t || t.hide()
                        }
                    }, []);
                    return ((0, o.useEffect)(() => {
                        setTimeout(() => {
                            j(document.querySelector("#search-box-root"))
                        }, 0)
                    }, [N]), N) ? (0, s.jsx)(h.default, {
                        title: "Search",
                        show: t,
                        onClose: k,
                        overlay: (0, s.jsx)(x.default, {
                            type: "full",
                            onClose: k
                        }),
                        children: (0, s.jsx)("div", {
                            onClick: y,
                            className: f()("w-20 h-20 rounded-full bg-total-energy-bg shadow-tree-box text-tree-text flex justify-center items-center relative cursor-pointer"),
                            children: (0, s.jsx)(u.K1, {
                                className: "w-9 h-9"
                            })
                        })
                    }) : (0, s.jsx)(r.Z, {
                        onRef: b,
                        placement: ["top"],
                        content: () => (0, s.jsx)(x.default, {
                            type: "result",
                            userInfo: i,
                            status: C
                        }),
                        children: (0, s.jsxs)("div", {
                            id: "search-box-root",
                            onClick: y,
                            className: f()("h-26 border-[2px] border-white bg-total-energy-bg shadow-tree-box flex items-center relative transition-all cursor-pointer", {
                                "w-[230px] px-8 rounded-[28px] text-[#98B49D]": g,
                                "w-26 justify-center rounded-full text-tree-text": !g
                            }),
                            children: [(0, s.jsx)(u.K1, {
                                className: "w-9 h-9 flex-shrink-0"
                            }), g && (0, s.jsx)(m.default, {
                                type: "text",
                                placeholder: "Enter Tree ID",
                                className: "flex-1 h-full leading-28 text-black placeholder:text-[#B8CCBB] text-md font-medium px-4",
                                onChange: B,
                                onSuccess: E,
                                onStatusChange: S
                            })]
                        })
                    })
                }
        },
        39002: function(e, t, l) {
            var s = l(85893),
                r = l(94184),
                n = l.n(r),
                a = l(67294),
                o = l(82106);
            t.Z = e => {
                let [t, l] = (0, a.useState)(!1), [r, i] = (0, a.useState)("init"), c = (0, a.useRef)(), u = (0, a.useRef)(!1);
                (0, a.useImperativeHandle)(e.onRef, () => ({
                    hide: f,
                    show: d
                }));
                let d = () => {
                        l(!0), setTimeout(() => {
                            i("show")
                        }, 50)
                    },
                    f = () => {
                        setTimeout(() => {
                            u.current || (i("hide"), setTimeout(() => {
                                u.current || l(!1)
                            }, 300))
                        }, "click" === e.trigger ? 0 : 200)
                    },
                    x = (0, a.useCallback)(t => {
                        if ("click" === e.trigger) return;
                        let l = {
                                x: t.clientX,
                                y: t.clientY
                            },
                            s = t.target.getBoundingClientRect(),
                            r = "";
                        l.x <= s.left - 5 ? r = "left" : l.x >= s.right + 5 ? r = "right" : l.y <= s.top + 5 ? r = "top" : l.y >= s.bottom - 5 && (r = "bottom"), c.current != r && f()
                    }, [c, e.trigger]),
                    h = (0, a.useMemo)(() => e.trigger ? "click" === e.trigger ? {
                        onClick: () => {
                            d()
                        }
                    } : {
                        onMouseEnter: () => {
                            u.current = !0, d()
                        },
                        onMouseLeave: e => {
                            u.current = !1, x(e)
                        }
                    } : {}, [e.trigger, x]),
                    m = (0, a.useCallback)(() => {
                        "hover" === e.trigger && f()
                    }, [e.trigger]),
                    g = (0, a.useMemo)(() => e.children ? (0, a.cloneElement)(e.children, { ...h
                    }) : (0, s.jsx)(s.Fragment, {}), [e.children, h]);
                return (0, a.useEffect)(() => {
                    e.onVisibleChange && e.onVisibleChange(t)
                }, [t, e.onVisibleChange]), (0, s.jsx)(o.Popover, {
                    isOpen: t,
                    positions: e.placement,
                    padding: 10,
                    reposition: !0,
                    onClickOutside: f,
                    containerClassName: "z-50",
                    align: "center",
                    containerStyle: {
                        zIndex: "98"
                    },
                    content: t => (c.current = t.position, (0, s.jsx)("div", {
                        className: n()("rc-dropdown-animation", {
                            show: "show" === r,
                            hide: "hide" === r
                        }),
                        onMouseLeave: m,
                        children: e.content()
                    })),
                    children: g
                })
            }
        },
        82501: function(e, t, l) {
            l.d(t, {
                J: function() {
                    return r
                },
                b: function() {
                    return n
                }
            });
            let s = [0, 15e3, 5e4, 15e4, 3e5, 5e5, 2e6, 1e7, 5e7];

            function r(e) {
                let t = 1;
                for (let l = 0; l < s.length; l++) {
                    let r = s[l],
                        n = s[l + 1];
                    if (e >= r && (!n || e < n)) {
                        t = l;
                        break
                    }
                }
                return t
            }

            function n(e) {
                let t = r(e.tree),
                    l = t === s.length - 1;
                return { ...e,
                    level: t,
                    availableEnergy: e.energy,
                    usedEnergy: e.tree,
                    currentLvEnergy: l ? s[s.length - 1] : e.tree - s[t],
                    nextLvEnergy: l ? s[s.length - 1] : s[t + 1]
                }
            }
        }
    }
]);