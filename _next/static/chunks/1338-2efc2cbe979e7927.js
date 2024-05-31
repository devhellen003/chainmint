"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1338], {
        39864: function(e, t, s) {
            s.r(t);
            var a = s(85893),
                l = s(81921),
                n = s(97867),
                r = s(13989),
                c = s(93849),
                i = s(94184),
                o = s.n(i),
                u = s(30381),
                x = s.n(u),
                d = s(67294),
                m = s(40406),
                f = s(83253),
                p = s.n(f),
                h = s(91446),
                g = s(91132);
            let b = {
                stake: "Staking Rewards",
                energy: "Check Rewards",
                inviteME: "Mar 14 Box"
            };
            t.default = e => {
                let [t, s] = (0, d.useState)([]), [i, u] = (0, d.useState)(), f = (0, m.VY)(), {
                    run: j
                } = (0, n.b)(e => ({
                    url: "/api/tree/open-box",
                    method: "post",
                    data: {
                        boxId: e
                    }
                }), {
                    onSuccess: e => {
                        let {
                            energy: t,
                            type: s
                        } = e;
                        u({
                            energy: t,
                            type: s
                        }), g.c.notify(g.d.USER_INFO_REFRESH), w()
                    },
                    onError: e => {
                        f.error(e.msg)
                    }
                }), N = e => {
                    j(e.id)
                }, v = () => {
                    u(void 0)
                }, {
                    run: w,
                    status: k
                } = (0, n.b)(() => ({
                    url: "/api/tree/asset",
                    method: "get"
                }), {
                    onSuccess: e => {
                        s(e)
                    }
                });
                return (0, d.useEffect)(() => {
                    w()
                }, []), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: o()("w-full flex flex-col gap-12 px-8 min-h-[68px]", {
                            "max-h-[400px] overflow-y-auto": t && t.length > 9
                        }),
                        children: [t.map((e, t) => (0, a.jsxs)("div", {
                            className: "flex items-center cursor-pointer",
                            onClick: () => {
                                N(e)
                            },
                            children: [(0, a.jsx)(h.default, {
                                type: e.type,
                                className: "w-[36px] h-fit",
                                status: "normal"
                            }), (0, a.jsx)("span", {
                                className: "text-base font-medium text-black flex-1 ml-6 mr-8 line-clamp-1 break-all",
                                children: b[e.type] || e.type || "Check Rewards "
                            }), (0, a.jsx)("span", {
                                className: "text-base font-medium text-black",
                                children: x()(e.createAt).format("YYYY/MM/DD")
                            })]
                        }, t)), (0, a.jsx)(l.Z, {
                            status: k,
                            data: t,
                            msg: "stay tuned"
                        })]
                    }), (0, a.jsx)(p(), {
                        isOpen: !!i,
                        shouldCloseOnOverlayClick: !0,
                        shouldCloseOnEsc: !0,
                        ariaHideApp: !1,
                        onRequestClose: () => {
                            u(void 0)
                        },
                        style: {
                            overlay: {
                                zIndex: 1e5,
                                background: "rgba(0,0,0,0.5)"
                            },
                            content: {
                                padding: 0,
                                background: "none",
                                border: "none",
                                width: "100%",
                                height: "100%",
                                inset: "0",
                                borderRadius: 0
                            }
                        },
                        children: i && (0, a.jsxs)("div", {
                            className: o()("w-[80vw] min-h-[40vh] lg:w-[380px] lg:min-h-[400px] bg-gradient-to-b from-[#C3EEE9] to-[#FEFADE] rounded-xl flex flex-col items-center mx-auto pb-12 mt-[20vh] relative"),
                            children: [(0, a.jsxs)("div", {
                                className: "w-[83.5%] h-fit flex items-center justify-center relative",
                                children: [(0, a.jsx)("img", {
                                    className: "w-[90%] h-auto box-light-roate-anim",
                                    src: "https://static.mintchain.io/forest/pic-box-light.png",
                                    alt: "light"
                                }), (0, a.jsx)(h.default, {
                                    type: i.type,
                                    status: "open",
                                    className: "w-[51.5%] !absolute"
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex items-center gap-4",
                                children: [(0, a.jsxs)("div", {
                                    className: "w-23 h-23 rounded-full relative text-[#1B831F] flex items-center justify-center shadow-lg",
                                    children: [(0, a.jsx)(r.sU, {
                                        className: "w-full h-full absolute left-0 top-0 z-10"
                                    }), (0, a.jsx)("img", {
                                        className: "w-full h-full absolute left-0 top-0 z-20",
                                        src: "https://static.mintchain.io/forest/ic-bubble-light.png",
                                        alt: ""
                                    }), (0, a.jsx)(r._D, {
                                        className: "w-11 h-11 relative z-30"
                                    })]
                                }), (0, a.jsxs)("span", {
                                    className: "text-tree-text font-bold text-[28px]",
                                    children: ["+", (0, c.uf)(i.energy), " ME"]
                                })]
                            }), (0, a.jsx)("span", {
                                className: "w-[200px] h-18 leading-[36px] text-center rounded-lg bg-[#0CDC50] hover:bg-[#09A63D] text-black text-md font-medium mt-10 cursor-pointer",
                                onClick: v,
                                children: "close"
                            }), (0, a.jsx)("div", {
                                className: "text-black w-24 h-24 flex items-center justify-center absolute right-0 top-0 cursor-pointer",
                                onClick: v,
                                children: (0, a.jsx)(r.sZ, {})
                            })]
                        })
                    })]
                })
            }
        },
        47935: function(e, t, s) {
            s.r(t);
            var a = s(85893),
                l = s(81921),
                n = s(39311),
                r = s(94184),
                c = s.n(r),
                i = s(67294),
                o = s(91446);
            t.default = e => {
                let [t, s] = (0, i.useState)([]);
                return (0, i.useEffect)(() => {
                    s(e.list)
                }, [e.list]), (0, a.jsxs)("div", {
                    className: c()("w-full flex flex-col gap-12 px-8 min-h-[68px]", {
                        "max-h-[400px] overflow-y-auto": t && t.length > 9
                    }),
                    children: [t.map((e, t) => (0, a.jsxs)("div", {
                        className: "flex items-center cursor-pointer",
                        children: [(0, a.jsx)(o.default, {
                            type: "stake",
                            className: "w-[36px] h-fit",
                            status: "normal"
                        }), (0, a.jsxs)("div", {
                            className: "flex flex-col flex-1 ml-6 mr-8",
                            children: [(0, a.jsxs)("span", {
                                className: "text-md font-medium text-black line-clamp-1",
                                children: ["#", e.tokenId]
                            }), (0, a.jsx)("span", {
                                className: "text-sm text-[#6A896F] line-clamp-1",
                                children: "MintID"
                            })]
                        }), (0, a.jsx)("span", {
                            className: "text-base font-medium text-black",
                            children: (0, a.jsx)(n.Z, {
                                type: "long",
                                start: e.start,
                                end: e.end,
                                duration: 1e3
                            })
                        })]
                    }, t)), (0, a.jsx)(l.Z, {
                        status: e.status,
                        data: t,
                        msg: "stay tuned"
                    })]
                })
            }
        },
        91446: function(e, t, s) {
            s.r(t);
            var a = s(85893),
                l = s(94184),
                n = s.n(l),
                r = s(67294);
            t.default = e => {
                let [t, s] = (0, r.useState)(""), [l, c] = (0, r.useState)("");
                (0, r.useEffect)(() => {
                    c(e.status), "fly" === e.status && (s("fall"), setTimeout(() => {
                        c("normal"), s("done")
                    }, 5e3))
                }, [e.status]);
                let i = (0, r.useMemo)(() => "stake" !== e.type ? "https://static.mintchain.io/forest/ic-box-open.png" : "https://static.mintchain.io/forest/ic-box-stake-open.png", [e.type]),
                    o = (0, r.useMemo)(() => "stake" !== e.type ? "https://static.mintchain.io/forest/ic-box-close.png" : "https://static.mintchain.io/forest/ic-box-stake-close.png", [e.type]);
                return "" == l ? (0, a.jsx)(a.Fragment, {}) : (0, a.jsxs)("div", {
                    className: n()("relative cursor-pointer ".concat(e.className), {
                        "box-fall-anim": "fall" === t,
                        "!left-[20%] !top-[58%] lg:!left-[28%] lg:!top-[58%]": "done" === t
                    }),
                    style: e.style,
                    onClick: e.onClick,
                    children: ["fly" === l && (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("img", {
                            src: "https://static.mintchain.io/forest/ic-box-parachute.png",
                            className: "w-full h-auto absolute left-[20%] top-[-140%] z-10",
                            alt: ""
                        }), (0, a.jsx)("img", {
                            src: o,
                            className: "w-full h-auto relative z-20",
                            alt: ""
                        })]
                    }), "normal" === l && (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("img", {
                            src: o,
                            className: "w-full h-auto relative z-20",
                            alt: ""
                        }), (0, a.jsx)("div", {
                            className: "w-[130%] h-auto absolute left-[-11%] bottom-[-19%] z-10",
                            children: (0, a.jsx)("img", {
                                src: "https://static.mintchain.io/forest/ic-box-shadow.png",
                                className: "w-full h-auto",
                                alt: ""
                            })
                        })]
                    }), "open" === l && (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)("img", {
                            className: "w-full h-auto",
                            src: i,
                            alt: ""
                        })
                    })]
                })
            }
        },
        91338: function(e, t, s) {
            s.r(t);
            var a = s(85893),
                l = s(94184),
                n = s.n(l),
                r = s(67294),
                c = s(39864),
                i = s(47935),
                o = s(97867),
                u = s(30381),
                x = s.n(u),
                d = s(42742);
            t.default = e => {
                let [t, s] = (0, r.useState)(!1), [l, u] = (0, r.useState)([]), {
                    run: m,
                    status: f
                } = (0, o.b)(() => ({
                    url: "/api/tree/stake-info",
                    method: "get"
                }), {
                    onSuccess: e => {
                        u(e.map(e => ({ ...e,
                            start: x()().format("x"),
                            end: x()(e.expireAt).format("x")
                        })))
                    }
                });
                return (0, r.useEffect)(() => {
                    m()
                }, []), (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("div", {
                        className: "w-full lg:w-[400px] flex flex-col bg-white rounded-lg py-10",
                        children: [(0, a.jsxs)("div", {
                            className: "flex gap-6 items-center h-16 px-8 mb-12",
                            children: [(0, a.jsx)("span", {
                                className: n()("h-full leading-[32px] px-6 rounded-[30px] border text-base cursor-pointer", {
                                    "font-semibold text-black border-[#98B49D] bg-[#F4F9F5]": !t,
                                    "font-medium text-[#49524B] border-[#E6F0E8] bg-[#FFF]": t
                                }),
                                onClick: () => s(!1),
                                children: "All Box"
                            }), (0, a.jsxs)("span", {
                                className: n()("h-full leading-[32px] px-6 rounded-[30px] border text-base cursor-pointer relative", {
                                    "font-semibold text-black border-[#98B49D] bg-[#F4F9F5]": t,
                                    "font-medium text-[#49524B] border-[#E6F0E8] bg-[#FFF]": !t
                                }),
                                onClick: () => s(!0),
                                children: ["Staking Box", l && l.length > 0 && f === d.t1.Success && (0, a.jsx)("span", {
                                    className: "min-w-[22px] h-[22px] leading-[22px] rounded-[22px] absolute -right-5 -top-5 bg-[#F00] text-base font-semibold text-center px-2 text-white",
                                    children: l.length
                                })]
                            })]
                        }), t ? (0, a.jsx)(i.default, {
                            status: f,
                            list: l
                        }) : (0, a.jsx)(c.default, {})]
                    })
                })
            }
        },
        81921: function(e, t, s) {
            var a = s(85893),
                l = s(42742),
                n = s(13989),
                r = s(41082),
                c = s(93849);
            t.Z = e => "loading" === e.status ? (0, a.jsx)("div", {
                className: "w-full p-10 flex flex-col items-center justify-center ".concat(e.className),
                children: (0, a.jsx)(r.Z, {})
            }) : e.status && e.status !== l.t1.Success && (0, c.xb)(e.data) ? (0, a.jsxs)("div", {
                className: "w-full p-11 flex items-center justify-center gap-4 text-[#B9D8BB] ".concat(e.className),
                children: [(0, a.jsx)(n._D, {
                    className: "w-8 h-8"
                }), e.msg ? (0, a.jsx)("span", {
                    className: "text-base font-semibold",
                    children: e.msg
                }) : (0, a.jsx)("span", {
                    className: "text-base font-semibold",
                    children: e.status === l.t1.NoData ? "No results found." : "Failed to fetch data."
                })]
            }) : (0, a.jsx)(a.Fragment, {})
        },
        39311: function(e, t, s) {
            var a = s(85893),
                l = s(93849),
                n = s(67294);
            let r = e => "".concat(e < 10 ? "0" : "").concat(e);
            t.Z = e => {
                let t = (0, n.useRef)(),
                    s = (0, n.useRef)(Date.now()),
                    [c, i] = (0, n.useState)(""),
                    o = (0, n.useRef)(0);
                (0, n.useEffect)(() => {
                    o.current = e.end - e.start, u()
                }, [e.end, e.start]);
                let u = () => {
                        let [t, s, a, n, c] = (0, l.FZ)(o.current);
                        "short" === e.type ? i("".concat(r(s + 24 * t), ":").concat(r(a), ":").concat(r(n))) : i("".concat(r(t), ":").concat(r(s), ":").concat(r(a), ":").concat(r(n)))
                    },
                    x = (0, n.useCallback)(() => {
                        let a = Date.now(),
                            l = a - s.current;
                        l >= e.duration && o.current >= 0 && (s.current = a, o.current = o.current - e.duration, u()), t.current = requestAnimationFrame(x)
                    }, [e.duration]);
                return (0, n.useEffect)(() => (t.current = requestAnimationFrame(x), () => {
                    cancelAnimationFrame(t.current)
                }), [x]), (0, a.jsx)(a.Fragment, {
                    children: c
                })
            }
        },
        97867: function(e, t, s) {
            s.d(t, {
                b: function() {
                    return c
                }
            });
            var a = s(67294),
                l = s(42742),
                n = s(91132),
                r = s(93849);
            let c = (e, t) => {
                let {
                    onSuccess: s,
                    onError: c,
                    debounceInterval: i
                } = t, [o, u] = (0, a.useState)(!1), [x, d] = (0, a.useState)(), m = (0, a.useRef)(null), f = i || 100, p = (0, a.useCallback)(async function() {
                    for (var t = arguments.length, a = Array(t), i = 0; i < t; i++) a[i] = arguments[i];
                    m.current && clearTimeout(m.current), m.current = setTimeout(async () => {
                        u(!0), d("loading");
                        let t = e(...a);
                        n.c.request({ ...t,
                            onSuccess: e => {
                                if ((0, r.xb)(e)) {
                                    d(l.t1.NoData), c && c({
                                        code: l.t1.NoData,
                                        msg: "no data"
                                    }, [...a]);
                                    return
                                }
                                d(l.t1.Success), s && s(e, [...a]), u(!1)
                            },
                            onError: e => {
                                d(e.code), u(!1), c && c(e, [...a])
                            }
                        })
                    }, f)
                }, []);
                return {
                    run: p,
                    loading: o,
                    status: x
                }
            }
        }
    }
]);