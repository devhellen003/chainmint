(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2020], {
        72934: function(e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/mint-forest", function() {
                return s(1163)
            }])
        },
        14594: function(e, t, s) {
            "use strict";
            s.r(t);
            var l = s(85893),
                r = s(42742),
                a = s(1656),
                n = s(42054),
                i = s(53480),
                o = s(67294),
                c = s(83253),
                u = s.n(c),
                d = s(28241);
            t.default = e => {
                let {
                    address: t
                } = (0, n.te)(), [s, c] = (0, o.useState)(!1), {
                    state: {
                        userInfo: f
                    }
                } = (0, a.Wr)();
                return (0, o.useEffect)(() => {
                    if (!f || !t) return;
                    let e = (0, i.$o)(r.a0, t, "-1");
                    0 == f.level || f.level <= Number(e) || (c(!0), (0, i.qQ)(r.a0, t, f.level + ""))
                }, [f, t]), (0, l.jsx)(u(), {
                    isOpen: s,
                    shouldCloseOnOverlayClick: !0,
                    shouldCloseOnEsc: !0,
                    ariaHideApp: !1,
                    onRequestClose: () => {
                        c(!1)
                    },
                    style: {
                        overlay: {
                            zIndex: 1e5,
                            background: "rgba(0,0,0,0.8)"
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
                    children: (0, l.jsx)("div", {
                        className: "w-full h-full flex flex-col items-center justify-center backdrop-blur-xl",
                        children: f && (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("div", {
                                className: "w-[96vw] h-[82vw] lg:w-[536px] lg:h-[469px] bg-no-repeat relative",
                                style: {
                                    background: "url(https://static.mintchain.io/forest/pic-level-up-bg.png)",
                                    backgroundSize: "100% auto"
                                },
                                children: (0, l.jsx)("div", {
                                    className: "w-[45%] h-[64%] absolute left-[50%] translate-x-[-50%] top-[6%]",
                                    children: (0, l.jsx)(d.default, {
                                        lv: f.level,
                                        className: "w-full h-full"
                                    })
                                })
                            }), (0, l.jsxs)("span", {
                                className: "text-center text-[26px] leading-[34px] lg:text-[36px] lg:leading-[44px] font-bold lv-up-text",
                                children: ["Congratulations! ", (0, l.jsx)("br", {}), "Your MintTree has upgraded to Level ", f.level + 1]
                            }), (0, l.jsx)("div", {
                                className: "rounded-xl border bg-[rgba(255,255,255,0.25)] w-[70%] max-w-[263px] p-3 lg:p-5 mt-19 cursor-pointer",
                                onClick: () => {
                                    c(!1)
                                },
                                children: (0, l.jsx)("span", {
                                    className: "w-full h-[50px] leading-[50px] text-[24px] lg:h-[55px] lg:leading-[55px] lg:text-[28px] text-center inline-block bg-gradient-to-b from-[#FFF] to-[#ADFF00] rounded-lg text-black font-medium",
                                    children: "close"
                                })
                            })]
                        })
                    })
                })
            }
        },
        96983: function(e, t, s) {
            "use strict";
            s.r(t);
            var l = s(85893),
                r = s(67294),
                a = s(80790);
            t.default = e => {
                let [t, s] = (0, r.useState)();
                return (0, r.useEffect)(() => {
                    let e = document.querySelector("#pop-act-root");
                    e && s(e)
                }, []), (0, l.jsx)("div", {
                    id: "pop-act-root",
                    className: "w-full h-[calc(100vh-200px)] overflow-y-auto scroll-bar",
                    children: (0, l.jsx)(a.default, {
                        parent: t,
                        hideTitle: !0,
                        loadMore: !0
                    })
                })
            }
        },
        1163: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return O
                }
            });
            var l = s(85893),
                r = s(41082),
                a = s(42742),
                n = s(1656),
                i = s(42054),
                o = s(97867),
                c = s(75895),
                u = s(67294),
                d = s(97595),
                f = s(72126),
                x = s(93849);
            let p = (e, t, s, l) => {
                let r = (0, u.useRef)(null);
                (0, u.useEffect)(() => {
                    s || e();
                    let t = (0, d.R)(window, "resize"),
                        a = void 0 == l || (0, x.xb)(l) ? 100 : l;
                    return 0 != a && t.pipe((0, f.b)(a)), r.current = t.subscribe(t => {
                        e(t)
                    }), () => {
                        var e;
                        null === (e = r.current) || void 0 === e || e.unsubscribe(), r.current = null
                    }
                }, t || [])
            };
            var m = s(91132),
                h = s(82501),
                g = s(9008),
                b = s.n(g),
                j = s(41664),
                v = s.n(j),
                y = s(11163),
                w = s(40406),
                E = s(14594),
                k = s(90862),
                N = s(80790),
                F = s(39701),
                S = s(59249),
                R = s(4593),
                A = s(10128),
                _ = s(63184),
                C = s(94707),
                T = s(14874),
                q = s(61711),
                O = () => {
                    let {
                        address: e,
                        isDisconnected: t
                    } = (0, i.te)(), s = (0, y.useRouter)(), d = (0, w.VY)(), {
                        isMobile: f
                    } = (0, i.XA)(), {
                        query: {
                            id: g
                        }
                    } = (0, y.useRouter)(), [j, O] = (0, u.useState)(!1), [M, D] = (0, u.useState)(!1), [z, I] = (0, u.useState)(0), [V, Y] = (0, u.useState)(!1), [H, U] = (0, u.useReducer)(n.o0, n.B4);
                    p(() => {
                        let e = document.body.clientWidth > 780 ? document.body.clientWidth : x.Fd.width / 2,
                            t = e * x.Fd.height / x.Fd.width + 100;
                        U({
                            type: "SAVE",
                            payload: {
                                clientWidth: e,
                                clientHeight: t
                            }
                        })
                    }, []);
                    let {
                        run: B
                    } = (0, o.b)(e => ({
                        url: "/api/tree/user-info",
                        method: "get",
                        params: {
                            treeid: e
                        }
                    }), {
                        onSuccess: (e, t) => {
                            D(!1), U && ((0, x.xb)(t) ? U({
                                type: "SAVE",
                                payload: {
                                    userInfo: (0, h.b)(e),
                                    isDiscord: !!e.discord
                                }
                            }) : U({
                                type: "SAVE",
                                payload: {
                                    tempUserInfo: (0, h.b)(e),
                                    isDiscord: !!e.discord
                                }
                            }))
                        },
                        onError: e => {
                            D(!1), d.error(e.msg)
                        }
                    }), L = e => {
                        e ? (B(), setTimeout(() => {
                            B(e)
                        }, 300)) : (B(), U && U({
                            type: "SAVE",
                            payload: {
                                tempUserInfo: void 0
                            }
                        }))
                    };
                    (0, u.useEffect)(() => {
                        H.token && (D(!0), L(g))
                    }, [H.token, g]), (0, u.useEffect)(() => {
                        if (!e) {
                            O(!0);
                            return
                        }
                        let t = m.c.getToken(e);
                        U && U({
                            type: "SAVE",
                            payload: {
                                token: t
                            }
                        }), !t && U && U({
                            type: "SAVE",
                            payload: {
                                userInfo: void 0
                            }
                        }), O(!0)
                    }, [U, e, g]), (0, c.n)(() => {
                        g && s.replace("/mint-forest")
                    }, [g]);
                    let W = () => {
                        U && U({
                            type: "SAVE",
                            payload: {
                                token: void 0,
                                userInfo: void 0
                            }
                        }), m.c.setToken("", e)
                    };
                    (0, u.useEffect)(() => {
                        t && W()
                    }, [t, U]), (0, u.useEffect)(() => {
                        let e = m.c.subscribe([{
                            name: m.d.TOKEN_REFRESH,
                            callback: () => {
                                U && U({
                                    type: "SAVE",
                                    payload: {
                                        token: void 0
                                    }
                                }), m.c.setToken("")
                            }
                        }, {
                            name: m.d.USER_INFO_REFRESH,
                            callback: () => {
                                L(g)
                            }
                        }, {
                            name: m.d.LOG_OUT,
                            callback: () => {
                                W()
                            }
                        }]);
                        return () => {
                            e.unsubscribe()
                        }
                    }, [g, U]), (0, u.useEffect)(() => {
                        H.token && s.query.code && s.query.state !== a.DQ && P(s.query.code)
                    }, [H.token, s.query.code]);
                    let {
                        run: P
                    } = (0, o.b)(e => ({
                        url: "/api/discord/verify",
                        method: "post",
                        data: {
                            code: e
                        }
                    }), {
                        onSuccess: e => {
                            s.replace("/mint-forest"), U && U({
                                type: "SAVE",
                                payload: {
                                    isDiscord: !0
                                }
                            })
                        },
                        onError(e) {
                            e.code === a.t1.Error && (d.error(e.msg), s.replace("/mint-forest"))
                        }
                    }), {
                        run: X
                    } = (0, o.b)(() => ({
                        url: "/api/tree/total-user",
                        method: "get"
                    }), {
                        onSuccess: e => {
                            I(e)
                        }
                    });
                    (0, u.useEffect)(() => {
                        X()
                    }, []);
                    let Z = (0, u.useMemo)(() => H.token ? (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(T.default, {}), (0, l.jsx)(k.default, {}), (0, l.jsx)(v(), {
                            className: "absolute z-50 right-6 lg:right-[calc((100%-1280px)/2)] top-[60px] lg:top-[100px]",
                            target: "_blank",
                            href: a.Z0,
                            children: (0, l.jsx)("img", {
                                className: "w-[60px] h-auto",
                                src: "https://static.mintchain.io/forest/ic-faq.png",
                                alt: "faq"
                            })
                        }), (0, l.jsx)("img", {
                            className: "w-[60px] h-auto absolute z-50 right-6 lg:right-[calc((100%-1280px)/2)] top-[130px] lg:top-[170px] cursor-pointer",
                            src: "https://static.mintchain.io/forest/ic-menu-lucky.png",
                            alt: "lucky",
                            onClick: () => Y(!0)
                        }), (0, l.jsx)(C.default, {}), (0, l.jsxs)("div", {
                            className: "w-full min-h-screen relative -top-[28px] px-6 mx-auto lg:px-0 lg:max-w-[1280px] lg:-top-[188px]",
                            children: [(0, l.jsx)(q.default, {}), (0, l.jsx)(_.default, {}), (0, l.jsx)(F.default, {}), (0, l.jsxs)("div", {
                                className: "flex flex-col-reverse lg:flex-row gap-10",
                                children: [(0, l.jsx)("div", {
                                    className: "w-full flex-[2]",
                                    children: (0, l.jsx)(S.default, {})
                                }), (0, l.jsx)("div", {
                                    className: "w-full flex-[1]",
                                    children: (0, l.jsx)(N.default, {
                                        hideTitle: !1,
                                        loadMore: !f,
                                        parent: window
                                    })
                                })]
                            }), (0, l.jsxs)("span", {
                                className: "w-full text-center text-[#6A896F] text-base inline-block mt-20 lg:mt-50",
                                children: [(0, x.uf)(z), " Players Online"]
                            })]
                        }), (0, l.jsx)(E.default, {}), M && (0, l.jsxs)("div", {
                            className: "w-screen h-screen fixed left-0 top-0 bg-[rgba(6,130,47,0.70)] backdrop-blur-md z-[999] flex flex-col items-center justify-center gap-3",
                            children: [(0, l.jsx)(r.Z, {
                                color: "#FFF",
                                className: "!w-[48px]"
                            }), (0, l.jsx)("span", {
                                className: "text-[24px] font-semibold",
                                children: "Loading..."
                            })]
                        }), (0, l.jsx)(A.default, {
                            show: V,
                            onClose: () => Y(!1)
                        })]
                    }) : (0, l.jsxs)("div", {
                        className: "relative",
                        children: [j && (0, l.jsx)(R.default, {}), (0, l.jsx)(C.default, {})]
                    }), [H.token, j, M, z, V]);
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(b(), {
                            children: (0, l.jsx)("meta", {
                                property: "og:image",
                                content: "https://static.mintchain.io/forest/pic-forest-og-img.png"
                            }, "og:image")
                        }), (0, l.jsx)("div", {
                            className: "w-full bg-[#F5F5F5]",
                            id: "forest-root",
                            children: (0, l.jsx)(n.kw.Provider, {
                                value: {
                                    state: H,
                                    dispatch: U
                                },
                                children: Z
                            })
                        })]
                    })
                }
        },
        90862: function(e, t, s) {
            "use strict";
            s.r(t);
            var l = s(85893),
                r = s(1656),
                a = s(13989),
                n = s(93849),
                i = s(61099),
                o = s.n(i),
                c = s(11163);
            t.default = e => {
                let {
                    state: {
                        userInfo: t,
                        tempUserInfo: s
                    }
                } = (0, r.Wr)(), i = (0, c.useRouter)();
                return t && s && t.id !== s.id ? (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)("div", {
                        className: "absolute z-50 left-6 lg:left-[calc((100%-1280px)/2)] top-[64px] lg:top-[100px] flex items-center shadow-lg bg-white h-24 rounded-3xl px-4 gap-6 cursor-pointer",
                        onClick: () => {
                            i.replace("/mint-forest")
                        },
                        children: [(0, l.jsx)("div", {
                            className: "h-16 w-16 rounded-full bg-[#00B33B] flex items-center justify-center",
                            children: (0, l.jsx)(a.xA, {
                                className: "w-10 h-10 rotate-180"
                            })
                        }), (0, l.jsx)("span", {
                            className: "text-md text-black font-medium hidden lg:block",
                            children: (0, n.LH)(t.ens || t.address, 6, 4)
                        })]
                    }), (0, l.jsxs)("div", {
                        className: "absolute z-50 left-[50%] translate-x-[-50%] top-[60px] lg:top-[96px] flex items-center shadow-lg bg-white rounded-[30px] p-4 gap-4 lg:gap-6",
                        children: [(0, l.jsx)(o(), {
                            size: 40,
                            name: s.address,
                            variant: "beam",
                            square: !1,
                            colors: ["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]
                        }), (0, l.jsx)("span", {
                            className: "text-base text-black break-keep",
                            children: (0, n.LH)(s.ens || s.address, 6, 4)
                        }), (0, l.jsx)("span", {
                            className: "text-tree-text font-DINCond text-[24px] font-medium lg:pl-6",
                            children: (0, n.uf)(s.usedEnergy)
                        })]
                    })]
                }) : (0, l.jsx)(l.Fragment, {})
            }
        },
        80790: function(e, t, s) {
            "use strict";
            s.r(t);
            var l = s(85893),
                r = s(81921),
                a = s(42054),
                n = s(97867),
                i = s(91132),
                o = s(93849),
                c = s(94184),
                u = s.n(c),
                d = s(30381),
                f = s.n(d),
                x = s(11163),
                p = s(67294),
                m = s(89995),
                h = s(96983),
                g = s(22225);
            t.default = e => {
                let [t, s] = (0, p.useState)([]), {
                    checkIsMobile: c
                } = (0, a.XA)(), d = (0, p.useRef)(!0), [b, j] = (0, p.useState)(1), [v, y] = (0, p.useState)(!1), {
                    query: {
                        id: w
                    }
                } = (0, x.useRouter)(), E = (0, p.useRef)(null), {
                    run: k,
                    status: N
                } = (0, n.b)((e, t) => ({
                    url: "/api/tree/activity",
                    method: "get",
                    params: {
                        page: e,
                        treeid: t
                    }
                }), {
                    onSuccess: (t, l) => {
                        if (d.current = !(0, o.xb)(t) && t.length >= 20, (0, o.xb)(t)) return;
                        let r = [];
                        t.forEach(e => {
                            let t = f()(e.claimAt).utc().format("YYYY-MM-DD");
                            r.includes(t) || r.push(t)
                        }), !e.loadMore && c() && (r = [r[0]]);
                        let a = [];
                        r.forEach(e => {
                            let s = t.filter(t => f()(t.claimAt).utc().format("YYYY-MM-DD") === e),
                                l = s.filter(e => "invite" === e.type),
                                r = [];
                            if (!(0, o.xb)(l)) {
                                let e = {
                                    amount: 0,
                                    children: []
                                };
                                l.forEach(t => {
                                    e.amount += t.amount, e.children = e.children.concat(t.children)
                                }), r.push(e)
                            }
                            let n = s.filter(e => "invite" !== e.type).filter(e => ["daily", "task", "box", "inject", "injected", "turntable"].includes(e.type)).map(e => ({ ...e,
                                info: JSON.parse(e.info)
                            }));
                            a.push({
                                date: e,
                                invites: r,
                                others: n
                            })
                        }), s(e => 1 == l[0] ? a : [...e, ...a])
                    }
                });
                (0, p.useEffect)(() => {
                    s([]), j(1)
                }, [w]), (0, p.useEffect)(() => {
                    k(b, w)
                }, [b, w]), (0, p.useEffect)(() => {
                    let e = i.c.subscribe([{
                        name: i.d.USER_INFO_REFRESH,
                        callback: () => {
                            if (b > 1) {
                                j(1);
                                return
                            }
                            k(1, w)
                        }
                    }]);
                    return () => {
                        e.unsubscribe()
                    }
                }, [w, b]);
                let F = (0, p.useCallback)(() => {
                    y(!1)
                }, []);
                return (0, l.jsxs)("div", {
                    ref: E,
                    className: u()("w-full bg-white rounded-md flex flex-col gap-7 pb-7 relative z-20", {
                        "pt-7": e.hideTitle,
                        "h-[2927px] overflow-y-auto": !e.hideTitle && e.loadMore,
                        "max-h-full overflow-y-auto": e.hideTitle && e.loadMore
                    }),
                    children: [!e.hideTitle && (0, l.jsxs)("div", {
                        className: "w-full h-[50px] bg-[#F8F8F8] flex-shrink-0 flex items-center justify-between px-8 rounded-t-md",
                        children: [(0, l.jsx)("span", {
                            className: "text-md text-black font-semibold",
                            children: "Mint Energy Activities"
                        }), (0, l.jsx)(g.default, {
                            title: "Activity",
                            show: v,
                            onClose: F,
                            overlay: (0, l.jsx)(h.default, {}),
                            children: (0, l.jsx)("span", {
                                className: "text-sm text-[#999] lg:hidden cursor-pointer",
                                onClick: () => y(!0),
                                children: "More"
                            })
                        })]
                    }), !(0, o.xb)(t) && t.map((e, t) => (0, l.jsx)(m.default, {
                        item: e
                    }, t)), (0, l.jsx)(r.Z, {
                        status: N,
                        data: t
                    })]
                })
            }
        },
        14874: function(e, t, s) {
            "use strict";
            s.r(t);
            var l = s(85893),
                r = s(41082),
                a = s(42742),
                n = s(97867),
                i = s(91132),
                o = s(11163),
                c = s(67294),
                u = s(40406);
            t.default = e => {
                let t = (0, o.useRouter)(),
                    s = (0, u.VY)();
                (0, c.useEffect)(() => {
                    "mintchain" === t.query.state && f(t.query.code)
                }, [t.query.code, t.query.state]);
                let {
                    loading: d,
                    run: f
                } = (0, n.b)(e => ({
                    url: "/api/tree/twitter-auth",
                    method: "post",
                    params: {
                        code: e
                    }
                }), {
                    debounceInterval: 600,
                    onSuccess: e => {
                        s.show("Twitter binding successful"), i.c.notify(i.d.USER_INFO_REFRESH), t.replace("/mint-forest")
                    },
                    onError(e) {
                        e.code === a.t1.Error && s.error(e.msg), t.replace("/mint-forest")
                    }
                });
                return (0, l.jsx)(l.Fragment, {
                    children: d && (0, l.jsxs)("div", {
                        className: "w-screen h-screen fixed left-0 top-0 bg-[rgba(6,130,47,0.70)] backdrop-blur-md z-[999] flex flex-col items-center justify-center gap-3",
                        children: [(0, l.jsx)(r.Z, {
                            color: "#FFF",
                            className: "!w-[48px]"
                        }), (0, l.jsx)("span", {
                            className: "text-[24px] font-semibold",
                            children: "Twitter is in the process of verification..."
                        })]
                    })
                })
            }
        }
    },
    function(e) {
        e.O(0, [5675, 3253, 2106, 5990, 2608, 9995, 1338, 34, 9701, 128, 3184, 1711, 4593, 4707, 9249, 9774, 2888, 179], function() {
            return e(e.s = 72934)
        }), _N_E = e.O()
    }
]);