"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [128], {
        10128: function(e, t, s) {
            s.r(t);
            var l = s(85893),
                n = s(13989),
                a = s(94184),
                r = s.n(a),
                i = s(67294),
                o = s(83253),
                d = s.n(o),
                c = s(33333),
                x = s(41072),
                u = s(5310),
                p = s(18651);
            t.default = e => {
                let [t, s] = (0, i.useState)(!1), [a, o] = (0, i.useState)(!1);
                (0, i.useEffect)(() => {
                    document.documentElement.style.overflow = e.show ? "hidden" : "auto", e.show ? (o(e.show), setTimeout(() => {
                        s(e.show)
                    }, 0)) : (s(e.show), setTimeout(() => {
                        o(e.show)
                    }, 350))
                }, [e.show]);
                let h = () => {
                    e.onClose && e.onClose()
                };
                return (0, l.jsxs)(d(), {
                    parentSelector: () => "undefined" == typeof document ? void 0 : document.querySelector("#app-root"),
                    isOpen: a,
                    shouldCloseOnOverlayClick: !0,
                    shouldCloseOnEsc: !0,
                    ariaHideApp: !1,
                    onRequestClose: h,
                    style: {
                        overlay: {
                            zIndex: 100,
                            background: "rgba(0,0,0,0)"
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
                    children: [(0, l.jsx)("div", {
                        onClick: h,
                        className: r()("w-full h-full fixed left-0 top-0 z-0 transition-all duration-300", {
                            "backdrop-blur-xl bg-[rgba(0,0,0,0.5)]": t,
                            "backdrop-blur-none bg-[rgba(0,0,0,0)]": !t
                        })
                    }), (0, l.jsx)("div", {
                        id: "lucky-spin-content",
                        className: "h-full w-full relative z-10 overflow-x-hidden overflow-y-auto scroll-bar-none pt-[20%] lg:pt-0",
                        children: (0, l.jsxs)("div", {
                            className: r()("w-full max-w-[900px] mx-auto flex flex-col lg:gap-8 transition-all duration-300", {
                                "translate-y-0": t,
                                "translate-y-[100%]": !t
                            }),
                            children: [(0, l.jsx)(c.default, {}), (0, l.jsx)("div", {
                                className: "lg:flex-row bg-[#17c349] lg:bg-transparent px-6 lg:px-0 pt-30 pb-8 lg:py-0",
                                children: (0, l.jsx)(p.default, {})
                            }), (0, l.jsxs)("div", {
                                className: "w-full flex gap-8 flex-col-reverse lg:flex-row bg-[#17c349] lg:bg-transparent px-6 lg:px-0 pb-[120px]",
                                children: [(0, l.jsx)(x.default, {}), (0, l.jsx)(u.default, {})]
                            }), (0, l.jsx)("div", {
                                className: "text-black lg:text-white w-24 h-24 lg:w-16 lg:h-16 flex items-center justify-center absolute right-0 top-0 lg:-right-16 lg:top-35 cursor-pointer z-50 rounded-full lg:border lg:border-white",
                                onClick: h,
                                children: (0, l.jsx)(n.sZ, {})
                            })]
                        })
                    })]
                })
            }
        },
        33333: function(e, t, s) {
            s.r(t);
            var l = s(85893),
                n = s(41082),
                a = s(1656),
                r = s(42054),
                i = s(97867),
                o = s(91132),
                d = s(13989),
                c = s(93849),
                x = s(94184),
                u = s.n(x),
                p = s(67294),
                h = s(40406),
                f = s(83253),
                m = s.n(f);
            let g = [2e4, 8e3, 2e3, 500, 100, 50];
            t.default = e => {
                let {
                    state: t,
                    dispatch: s
                } = (0, p.useContext)(a.kw), [x, f] = (0, p.useState)(!1), b = (0, r.zq)(), w = (0, h.VY)(), {
                    state: {
                        userInfo: v
                    }
                } = (0, a.Wr)(), [j, F] = (0, p.useState)(), [y, N] = (0, p.useState)(0), [E, C] = (0, p.useState)(!1), [S, k] = (0, p.useState)(0), M = (0, p.useMemo)(() => t.isShareSpin && !x, [x, t.isShareSpin]), D = (0, p.useMemo)(() => t.isShareSpin ? 6 : 5, [t.isShareSpin]);
                (0, p.useEffect)(() => {
                    setTimeout(() => {
                        let e = "undefined" != typeof document ? document.querySelector("#spin-root") : null,
                            t = e ? e.clientWidth : 0,
                            s = 1.25 * t,
                            l = t < 700 ? b(c.CX.w, s, 552) : c.CX.w,
                            n = t < 700 ? b(c.CX.h, 374 / 552 * s, 374) : c.CX.h;
                        F({
                            w: l,
                            h: n,
                            spinBox: {
                                top: c.CX.spinBox.top * n,
                                left: c.CX.spinBox.left * l,
                                w: c.CX.spinBox.w * l
                            },
                            spin: c.CX.spin * l,
                            pointer: c.CX.pointer * l
                        })
                    }, 0)
                }, [b]);
                let [_, z] = (0, p.useState)({
                    rotate: 0,
                    duration: 0,
                    start: !1
                }), {
                    run: B,
                    loading: I
                } = (0, i.b)(() => ({
                    url: "/api/tree/turntable/open",
                    method: "get"
                }), {
                    debounceInterval: 300,
                    onSuccess: e => {
                        T(e)
                    },
                    onError: e => {
                        w.error(e.msg), C(!1)
                    }
                }), {
                    run: A,
                    loading: R
                } = (0, i.b)(() => ({
                    url: "/api/tree/turntable/count",
                    method: "get"
                }), {
                    onSuccess: e => {
                        N(e.count), f(e.isUsedFree), s && s({
                            type: "SAVE",
                            payload: {
                                isShareSpin: e.shouldFree
                            }
                        })
                    }
                });
                (0, p.useEffect)(() => {
                    A()
                }, []);
                let T = e => {
                        let t = g.findIndex(t => t == e.energy);
                        z(e => ({
                            rotate: e.rotate + 2880 - 60 * (5 - t) - e.rotate % 360,
                            duration: 4e3,
                            start: !0
                        })), setTimeout(() => {
                            z(e => ({ ...e,
                                start: !1
                            })), o.c.notify(o.d.USER_INFO_REFRESH), 0 === e.usedEnergy && f(!0), N(e.count + 1), k(e.energy), C(!1)
                        }, 5e3)
                    },
                    X = () => {
                        k(0)
                    };
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)("div", {
                        id: "spin-root",
                        className: "w-full h-[460px] lg:h-[507px] flex-shrink-0 relative bg-cover !bg-center rounded-t-[26px] lg:rounded-2xl mt-0 lg:mt-[120px] bg-no-repeat bg-[url(https://static.mintchain.io/forest/pic-spin-bg-mobile.png)] lg:bg-[url(https://static.mintchain.io/forest/pic-spin-bg.png)]",
                        children: [(0, l.jsxs)("div", {
                            className: "w-full mt-2 lg:mt-5 flex flex-col items-center",
                            children: [(0, l.jsx)(d.G9, {
                                className: "w-[68%] lg:w-[380px] h-31"
                            }), (0, l.jsxs)("span", {
                                className: "text-[32px] font-extrabold text-white lg:text-tree-text -mt-6",
                                children: [R ? "-" : y, "/", D]
                            })]
                        }), v && (0, l.jsxs)("div", {
                            className: "absolute left-[50%] translate-x-[-50%] lg:translate-x-[unset] -bottom-20 z-20 lg:left-14 lg:bottom-14 flex flex-col items-center lg:items-start",
                            children: [(0, l.jsx)("span", {
                                className: "text-white lg:text-[#0D5D00] text-md",
                                children: "ME Pool"
                            }), (0, l.jsxs)("span", {
                                className: "text-white lg:text-[#0D5D00] text-[32px] leading-[32px] lg:leading-[40px] font-DINCond font-medium lg:font-bold",
                                children: [(0, c.uf)(v.availableEnergy), " ME"]
                            })]
                        }), j && (0, l.jsxs)("div", {
                            className: "absolute left-[50%] translate-x-[-50%] -bottom-2",
                            style: {
                                width: j.w,
                                height: j.h
                            },
                            children: [(0, l.jsx)(d.M5, {
                                className: "w-full h-full"
                            }), (0, l.jsxs)("div", {
                                className: "rounded-full bg-[rgba(0,0,0,0)] absolute flex justify-center items-center",
                                style: {
                                    width: j.spinBox.w,
                                    height: j.spinBox.w,
                                    left: j.spinBox.left,
                                    top: j.spinBox.top
                                },
                                children: [(0, l.jsx)(d.pV, {
                                    className: "absolute left-[50%] translate-x-[-50%] transition-all",
                                    style: {
                                        transitionDuration: "".concat(_.duration, "ms"),
                                        transform: "translateX(-50%) rotate(".concat(_.rotate, "deg)"),
                                        width: j.spin,
                                        height: j.spin
                                    }
                                }), (0, l.jsxs)("div", {
                                    className: u()("relative cursor-pointer select-none transition-all origin-center group", {
                                        "!cursor-not-allowed": R || E || y == D
                                    }),
                                    onClick: () => {
                                        if (!E && !R) {
                                            if (y == D) {
                                                w.show("You can't spin anymore today");
                                                return
                                            }
                                            C(!0), B()
                                        }
                                    },
                                    style: {
                                        width: j.pointer,
                                        height: j.pointer
                                    },
                                    children: [(0, l.jsx)(d.Zs, {
                                        className: "relative z-20 w-full h-full select-none group-active:scale-105 lg:group-hover:scale-105"
                                    }), I ? (0, l.jsx)(n.Z, {
                                        className: "absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] z-[60]"
                                    }) : (0, l.jsx)("span", {
                                        className: u()("absolute left-[50%] translate-x-[-50%] top-[50%] select-none translate-y-[-50%] z-40 font-DINCond text-[#D2872B]", M ? "text-[24px]" : "text-[28px]", {
                                            "!text-[#C7C7C3]": y == D
                                        }),
                                        children: M ? "Free" : 300
                                    })]
                                }), Array(6).fill("0").map((e, t) => (0, l.jsxs)("div", {
                                    className: "w-full h-[7px] absolute px-[1.75%] flex justify-between items-center",
                                    style: {
                                        transform: "rotate(".concat(180 * t / 6, "deg)")
                                    },
                                    children: [(0, l.jsx)("div", {
                                        className: u()("w-[7px] h-full rounded-full", {
                                            "bg-[#FFF50A] drop-shadow-[0px_0px_16.3px_#FFB800]": t % 2 == 0,
                                            "bg-[#FFFFFF] drop-shadow-[0px_0px_16.3px_#FFFFFF]": t % 2 != 0,
                                            "spin-light-anim": _.start
                                        }),
                                        style: {
                                            animationDirection: t % 2 ? "normal" : "reverse"
                                        }
                                    }), (0, l.jsx)("div", {
                                        className: u()("w-[7px] h-full rounded-full", {
                                            "bg-[#FFF50A] drop-shadow-[0px_0px_16.3px_#FFB800]": t % 2 == 0,
                                            "bg-[#FFFFFF] drop-shadow-[0px_0px_16.3px_#FFFFFF]": t % 2 != 0,
                                            "spin-light-anim": _.start
                                        }),
                                        style: {
                                            animationDirection: t % 2 ? "normal" : "reverse"
                                        }
                                    })]
                                }, t))]
                            })]
                        })]
                    }), (0, l.jsx)(m(), {
                        isOpen: S > 0,
                        shouldCloseOnOverlayClick: !0,
                        shouldCloseOnEsc: !0,
                        ariaHideApp: !1,
                        onRequestClose: X,
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
                        children: (0, l.jsxs)("div", {
                            className: u()("w-[80vw] lg:w-[380px] bg-gradient-to-b from-[#C3EEE9] to-[#FEFADE] rounded-xl flex flex-col items-center mx-auto py-16 px-20 mt-[20vh] relative"),
                            children: [(0, l.jsx)("span", {
                                className: "text-[24px] font-bold text-tree-text mb-6",
                                children: "ME Lucky Spin"
                            }), (0, l.jsxs)("span", {
                                className: "text-md text-[#00A637] font-normal mb-30",
                                children: ["Congratulations on winning ", (0, c.uf)(S), " ME"]
                            }), (0, l.jsxs)("div", {
                                className: "flex items-center gap-4",
                                children: [(0, l.jsxs)("div", {
                                    className: "w-23 h-23 rounded-full relative text-[#1B831F] flex items-center justify-center shadow-lg",
                                    children: [(0, l.jsx)(d.sU, {
                                        className: "w-full h-full absolute left-0 top-0 z-10"
                                    }), (0, l.jsx)("img", {
                                        className: "w-full h-full absolute left-0 top-0 z-20",
                                        src: "https://static.mintchain.io/forest/ic-bubble-light.png",
                                        alt: ""
                                    }), (0, l.jsx)(d._D, {
                                        className: "w-11 h-11 relative z-30"
                                    })]
                                }), (0, l.jsxs)("span", {
                                    className: "text-tree-text font-bold text-[28px]",
                                    children: ["+", (0, c.uf)(S), " ME"]
                                })]
                            }), (0, l.jsx)("span", {
                                className: "w-[200px] h-18 leading-[36px] text-center rounded-lg bg-[#0CDC50] hover:bg-[#09A63D] text-black text-md font-medium mt-10 cursor-pointer",
                                onClick: X,
                                children: "close"
                            }), (0, l.jsx)("div", {
                                className: "text-black w-24 h-24 flex items-center justify-center absolute right-0 top-0 cursor-pointer",
                                onClick: X,
                                children: (0, l.jsx)(d.sZ, {})
                            })]
                        })
                    })]
                })
            }
        },
        18651: function(e, t, s) {
            s.r(t), s.d(t, {
                default: function() {
                    return f
                }
            });
            var l = s(85893),
                n = s(48582),
                a = s(1656),
                r = s(97867),
                i = s(94184),
                o = s.n(i),
                d = s(25675),
                c = s.n(d),
                x = s(41664),
                u = s.n(x),
                p = s(67294),
                h = s(40406),
                f = e => {
                    var t, s;
                    let {
                        state: i,
                        dispatch: d
                    } = (0, p.useContext)(a.kw), [x, f] = (0, p.useState)(""), [m, g] = (0, p.useState)("auth"), b = (0, h.VY)();
                    (0, p.useEffect)(() => {
                        if (i.isShareSpin) g("verified");
                        else {
                            var e;
                            (null === (e = i.userInfo) || void 0 === e ? void 0 : e.twitter) ? g("tweet"): g("auth")
                        }
                    }, [null === (t = i.userInfo) || void 0 === t ? void 0 : t.twitter, i.isShareSpin]);
                    let {
                        loading: w,
                        run: v
                    } = (0, r.b)(e => ({
                        url: "/api/tree/turntable/twitter-verify",
                        method: "post",
                        data: {
                            twitterurl: e
                        }
                    }), {
                        debounceInterval: 600,
                        onSuccess: e => {
                            d && d({
                                type: "SAVE",
                                payload: {
                                    isShareSpin: !0
                                }
                            })
                        },
                        onError(e) {
                            b.error(e.msg)
                        }
                    }), j = (0, p.useMemo)(() => {
                        var e, t;
                        let s = (0, l.jsx)(n.Z, {
                            className: "h-[24px] w-[69px] text-center cursor-pointer leading-[24px] rounded-[20px] text-sm text-white bg-tree-text hover:bg-[#09A63D] px-6 select-none",
                            loading: w,
                            onClick: e => {
                                "auth" === m ? location.href = "/api/twitter/oauth" : "tweet" === m && x.startsWith("https://") && !w && v(x)
                            },
                            children: "auth" === m ? "Go" : "Verify"
                        });
                        return (0, l.jsxs)("div", {
                            className: "flex items-center justify-between mobile:block",
                            children: [(0, l.jsxs)("div", {
                                className: "flex items-center gap-4 text-md text-[#1F4E00]",
                                children: ["auth" === m ? (0, l.jsxs)(l.Fragment, {
                                    children: [(0, l.jsx)(c(), {
                                        src: "https://static.mintchain.io/forest/task/ic-twitter.png",
                                        alt: "icon",
                                        width: 24,
                                        height: 24
                                    }), (0, l.jsx)("p", {
                                        children: "Need to authenticate Twitter first"
                                    })]
                                }) : (0, l.jsx)(l.Fragment, {}), "tweet" === m ? (0, l.jsxs)(l.Fragment, {
                                    children: [(0, l.jsx)(c(), {
                                        src: "https://static.mintchain.io/forest/task/ic-twitter.png",
                                        alt: "icon",
                                        width: 24,
                                        height: 24
                                    }), (0, l.jsx)("p", {
                                        children: (0, l.jsx)(u(), {
                                            className: "text-primary underline-offset-4 hover:underline",
                                            href: (t = null === (e = i.userInfo) || void 0 === e ? void 0 : e.code, "https://twitter.com/intent/tweet/?text=" + encodeURIComponent("\uD83C\uDF33 Cultivating @Mint_Blockchain MintTree $MINT in the #MintForest by @Mint_Blockchain, the L2 for the NFT industry!\n\nCollect your ME point here: [https://www.mintchain.io/mint-forest".concat(t ? "?inviteCode=" + t : "", "]\n\n#MintBlockchain #NFT #Layer2 #ME"))),
                                            target: "_blank",
                                            children: "Share Your Mint Forest Journey on X"
                                        })
                                    })]
                                }) : (0, l.jsx)(l.Fragment, {}), "verified" === m ? (0, l.jsx)(l.Fragment, {
                                    children: "\uD83C\uDF89 Congratulations! you have received a chance for a free spin"
                                }) : (0, l.jsx)(l.Fragment, {})]
                            }), "auth" === m ? s : (0, l.jsx)(l.Fragment, {}), "tweet" === m ? (0, l.jsxs)("div", {
                                className: "flex items-center gap-4",
                                children: [(0, l.jsx)("input", {
                                    className: "w-[240px] px-6 leading-[24px] text-sm text-g-6 bg-white rounded-[20px] border border-solid",
                                    type: "text",
                                    placeholder: "Input the tweet url",
                                    onChange: e => {
                                        f(e.currentTarget.value)
                                    }
                                }), s]
                            }) : (0, l.jsx)(l.Fragment, {})]
                        })
                    }, [m, null === (s = i.userInfo) || void 0 === s ? void 0 : s.code, w, x]);
                    return (0, l.jsxs)("div", {
                        className: "flex-1 flex flex-col bg-white rounded-2xl relative overflow-hidden",
                        children: [(0, l.jsx)("div", {
                            className: "w-full h-[400px] bg-leaderboard-bg absolute left-0 top-0 z-0 rounded-t-md"
                        }), (0, l.jsx)("span", {
                            className: "w-full h-21 leading-[42px] px-14 bg-[#BBFF72] text-md text-[#1F4E00] font-semibold relative z-10",
                            children: "Get a Free Spin"
                        }), (0, l.jsx)("div", {
                            className: o()("overflow-hidden px-14 py-8 relative z-1"),
                            children: j
                        })]
                    })
                }
        },
        41072: function(e, t, s) {
            s.r(t);
            var l = s(85893),
                n = s(81921),
                a = s(42054),
                r = s(97867),
                i = s(91132),
                o = s(93849),
                d = s(30381),
                c = s.n(d),
                x = s(67294);
            t.default = e => {
                let [t, s] = (0, x.useState)([]), [d, u] = (0, x.useState)(1), p = (0, x.useRef)(!0), h = (0, x.useRef)(null), {
                    isMobile: f
                } = (0, a.XA)(), {
                    run: m,
                    status: g
                } = (0, r.b)(e => ({
                    url: "/api/tree/turntable/history",
                    method: "get",
                    params: {
                        page: e
                    }
                }), {
                    onSuccess: (e, t) => {
                        p.current = !(0, o.xb)(e) && e.length >= 50, s(s => 1 == t[0] ? e : [...s || [], ...e])
                    },
                    onError: () => {
                        p.current = !1
                    }
                });
                return (0, x.useEffect)(() => {
                    m(d)
                }, [d]), (0, x.useEffect)(() => {
                    let e = i.c.subscribe([{
                        name: i.d.USER_INFO_REFRESH,
                        callback: () => {
                            if (d > 1) {
                                u(1);
                                return
                            }
                            m(1)
                        }
                    }]);
                    return () => {
                        e.unsubscribe()
                    }
                }, []), (0, a.L$)(() => {
                    p.current && u(e => e + 1)
                }, f && "undefined" != typeof document ? document.querySelector("#lucky-spin-content") : h.current, [d, f]), (0, l.jsxs)("div", {
                    className: "flex-[2] flex flex-col bg-white rounded-2xl relative overflow-hidden",
                    children: [(0, l.jsx)("div", {
                        className: "w-full h-[400px] bg-leaderboard-bg absolute left-0 top-0 z-0 rounded-t-md"
                    }), (0, l.jsx)("span", {
                        className: "w-full h-21 leading-[42px] px-14 bg-[#BBFF72] text-md text-[#1F4E00] font-semibold relative z-10 mb-8",
                        children: "History Record"
                    }), (0, l.jsxs)("div", {
                        ref: h,
                        className: "lg:h-[800px] overflow-auto relative z-10 flex flex-col px-14 pb-4 gap-6",
                        children: [t.map((e, t) => (0, l.jsxs)("div", {
                            className: "w-full flex justify-between ",
                            children: [(0, l.jsx)("span", {
                                className: "text-black text-base",
                                children: c()(e.claimAt).format("YYYY-MM-DD HH:mm:ss")
                            }), (0, l.jsxs)("span", {
                                className: "text-tree-text text-[20px] font-DINCond",
                                children: ["+", e.amount, "ME"]
                            })]
                        }, t)), (0, l.jsx)(n.Z, {
                            status: g,
                            data: t
                        })]
                    })]
                })
            }
        },
        5310: function(e, t, s) {
            s.r(t);
            var l = s(85893),
                n = s(94184),
                a = s.n(n),
                r = s(67294);
            let i = ["1. Daily Spins: Users can spin the wheel up to 5 times per day, with no time restrictions.", "2. Cost per Spin: Each spin costs 300 ME.", "3. Winning Prizes: The wheel has 6 different sectors, each offering varying amounts of ME. When the wheel stops on a particular ME value, the user immediately receives that amount of ME added into user's ME Pool.", "Join the excitement of the Mint Forest Lucky Spin and boost your ME earnings today! \uD83C\uDF40"];
            t.default = e => {
                let [t, s] = (0, r.useState)(!1);
                return (0, l.jsxs)("div", {
                    className: "flex-1 flex flex-col bg-white rounded-2xl relative overflow-hidden",
                    children: [(0, l.jsx)("div", {
                        className: "w-full h-[400px] bg-leaderboard-bg absolute left-0 top-0 z-0 rounded-t-md"
                    }), (0, l.jsx)("span", {
                        className: "w-full h-21 leading-[42px] px-14 bg-[#BBFF72] text-md text-[#1F4E00] font-semibold relative z-10",
                        children: "Rules"
                    }), (0, l.jsxs)("div", {
                        className: a()("max-h-[132px] overflow-hidden lg:max-h-[unset] lg:h-[800px] lg:overflow-auto relative z-10 flex flex-col px-14 transition-all pb-[70px] lg:pb-0", {
                            "!max-h-[800px]": t
                        }),
                        children: [(0, l.jsx)("span", {
                            className: "text-[#495E4E] text-base leading-[24px] mb-12 mt-7",
                            children: "Welcome to the Mint Forest Lucky Spin! Are you feeling lucky? Test your fortune and win Mint Energy (ME) rewards with every spin!"
                        }), (0, l.jsx)("span", {
                            className: "text-[#1C3522] text-base leading-[24px] font-bold mb-2",
                            children: "Game Rules:"
                        }), i.map((e, t) => (0, l.jsx)("span", {
                            className: "text-[#495E4E] text-base leading-[24px] mb-8",
                            children: e
                        }, t)), (0, l.jsx)("div", {
                            className: a()("h-[50px] w-full flex items-center justify-center absolute left-0 bottom-0 bg-gradient-to-b from-[#e6fed1] to-[#FFF] transition-all cursor-pointer lg:hidden", {
                                "!from-[#FFF]": t
                            }),
                            onClick: () => s(e => !e),
                            children: (0, l.jsx)("span", {
                                className: "text-[14px] text-[#A6B4A6]",
                                children: t ? "View Less" : "View More"
                            })
                        })]
                    })]
                })
            }
        }
    }
]);