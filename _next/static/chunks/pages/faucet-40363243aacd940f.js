(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5017], {
        69877: function(e) {
            var t = Math.floor,
                s = Math.random;
            e.exports = function(e, a) {
                return e + t(s() * (a - e + 1))
            }
        },
        83608: function(e, t, s) {
            var a = s(69877),
                n = s(16612),
                r = s(18601),
                c = parseFloat,
                l = Math.min,
                i = Math.random;
            e.exports = function(e, t, s) {
                if (s && "boolean" != typeof s && n(e, t, s) && (t = s = void 0), void 0 === s && ("boolean" == typeof t ? (s = t, t = void 0) : "boolean" == typeof e && (s = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = r(e), void 0 === t ? (t = e, e = 0) : t = r(t)), e > t) {
                    var o = e;
                    e = t, t = o
                }
                if (s || e % 1 || t % 1) {
                    var d = i();
                    return l(e + d * (t - e + c("1e-" + ((d + "").length - 1))), t)
                }
                return a(e, t)
            }
        },
        74027: function(e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/faucet", function() {
                return s(10951)
            }])
        },
        10951: function(e, t, s) {
            "use strict";
            s.r(t);
            var a = s(85893),
                n = s(69077),
                r = s(67294),
                c = s(30381),
                l = s.n(c),
                i = s(30738),
                o = s(21039),
                d = s(38953),
                u = s(5121),
                x = s(42742),
                m = s(41082),
                h = s(46410);
            t.default = () => {
                let [e, t] = (0, r.useState)("connect"), {
                    address: s
                } = (0, n.mA)(), [c, p] = (0, r.useState)(!1), [f, b] = (0, r.useState)([]), g = (0, r.useMemo)(() => "connect" === e ? (0, a.jsx)(o.default, {
                    setStep: t
                }) : "request" === e ? (0, a.jsx)(i.default, {
                    setStep: t
                }) : "success" === e ? (0, a.jsx)(h.default, {
                    setStep: t
                }) : void 0, [e]), [j, v] = (0, r.useReducer)(d.dQ, d.Dq);
                return (0, r.useEffect)(() => {
                    s && u.Z.get("/api/faucet/history?address=" + s).then(e => {
                        e.data.code === x.t1.Success && b(e.data.result)
                    })
                }, [s]), (0, r.useEffect)(() => {
                    "success" === e && u.Z.get("/api/faucet/history?address=" + s).then(e => {
                        e.data.code === x.t1.Success && b(e.data.result)
                    })
                }, [e]), (0, r.useEffect)(() => {
                    s !== j.address && t("connect")
                }, [s, j.address]), (0, a.jsx)(d.TY.Provider, {
                    value: {
                        state: j,
                        dispatch: v
                    },
                    children: (0, a.jsxs)("main", {
                        className: "bg-bg-main pt-32 pb-32 min-h-[calc(100vh-97px)] bg-[url(/images/stars-bg.png)] bg-auto bg-no-repeat",
                        children: [(0, a.jsxs)("div", {
                            className: "w-full max-w-[600px] mx-auto px-16 pt-12 pb-16 rounded-lg bg-g-10 mb-14",
                            children: [(0, a.jsx)("h1", {
                                className: "text-lg text-g-1 font-semibold mb-2",
                                children: "Faucet"
                            }), g]
                        }), (0, a.jsxs)("div", {
                            className: "w-full max-w-[600px] mx-auto px-16 pt-12 pb-16 rounded-lg bg-g-10 mb-14",
                            children: [(0, a.jsx)("h1", {
                                className: "text-md text-g-1 font-semibold mb-6",
                                children: "Details"
                            }), (0, a.jsx)("p", {
                                className: "text-base font-medium text-g-6 mb-4",
                                children: "You can request 0.01 Sepolia ETH every 24h with a Mint blockchain test network"
                            }), (0, a.jsx)("p", {
                                className: "text-base font-medium text-g-6",
                                children: "A user's wallet must hold at least 0.001 ETH on Ethereum Mainnet to use the Mint blockchain faucet."
                            })]
                        }), s ? (0, a.jsxs)("div", {
                            className: "w-full max-w-[600px] mx-auto px-16 pt-12 pb-16 rounded-lg bg-g-10",
                            children: [(0, a.jsxs)("div", {
                                className: "flex justify-between text-md font-medium text-g-1 mb-8",
                                children: [(0, a.jsx)("span", {
                                    children: "Your Transactions"
                                }), (0, a.jsx)("span", {
                                    children: "Time"
                                })]
                            }), (0, a.jsx)("div", {
                                children: f.map(e => (0, a.jsxs)("div", {
                                    className: "flex justify-between text-base text-[#BCC4BE] mb-8 last:mb-0",
                                    children: [(0, a.jsx)("a", {
                                        className: "block max-w-[65%] no-wrap hover:text-primary",
                                        href: "".concat(e.chainid ? x.vD.TestnetExplorer : "http://testnet-explorer.mintchain.io", "/tx/") + e.hash,
                                        target: "_blank",
                                        children: e.hash
                                    }), (0, a.jsx)("span", {
                                        children: l().unix(e.date).fromNow()
                                    })]
                                }, e.hash))
                            }), c || 0 !== f.length ? (0, a.jsx)(a.Fragment, {}) : (0, a.jsx)("p", {
                                className: "text-center text-md text-g-6",
                                children: "No Data"
                            }), c ? (0, a.jsx)(m.Z, {}) : (0, a.jsx)(a.Fragment, {})]
                        }) : (0, a.jsx)(a.Fragment, {})]
                    })
                })
            }
        },
        21039: function(e, t, s) {
            "use strict";
            s.r(t);
            var a = s(85893),
                n = s(38953),
                r = s(13989),
                c = s(44538),
                l = s(83608),
                i = s.n(l),
                o = s(30381),
                d = s.n(o),
                u = s(67294),
                x = s(69077);
            t.default = e => {
                let {
                    dispatch: t
                } = (0, u.useContext)(n.TY), {
                    openConnectModal: s
                } = (0, c.We)(), {
                    isConnected: l,
                    address: o
                } = (0, x.mA)(), m = (0, u.useMemo)(() => "You are requesting SepoliaETH on Mint Testnet: \n      ".concat(o, "\n  \nDate: ").concat(d()().format(), "\nNonce: ").concat(i()(1e6, 9999999)), [o]), {
                    data: h,
                    signMessageAsync: p,
                    status: f
                } = (0, x.QW)({
                    message: m
                });
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        className: "mt-40 mb-40",
                        children: (0, a.jsx)(r.mq, {
                            className: "mx-auto w-[188px] h-[48px]"
                        })
                    }), l ? (0, a.jsx)("button", {
                        className: "w-full p-5 text-md text-g-10 rounded bg-primary hover:bg-button-hover transition-all",
                        onClick: async () => {
                            let s = await p();
                            e.setStep("request"), null == t || t({
                                type: "SAVE",
                                payload: {
                                    address: o,
                                    signature: s,
                                    message: m
                                }
                            })
                        },
                        children: "Sign Message"
                    }) : (0, a.jsx)("button", {
                        className: "w-full p-5 text-md text-g-10 rounded bg-primary hover:bg-button-hover transition-all",
                        onClick: () => {
                            s && s()
                        },
                        children: "Connect Wallet"
                    })]
                })
            }
        },
        30738: function(e, t, s) {
            "use strict";
            s.r(t);
            var a = s(85893),
                n = s(41082),
                r = s(42742),
                c = s(56733),
                l = s(38953),
                i = s(13989),
                o = s(5121),
                d = s(94184),
                u = s.n(d),
                x = s(67294),
                m = s(40406),
                h = s(69077);
            t.default = e => {
                let {
                    state: t
                } = (0, x.useContext)(l.TY), {
                    switchNetworkAsync: s
                } = (0, h.g0)(), [d, p] = (0, x.useState)(!1), [f, b] = (0, x.useState)(), g = (0, m.VY)(), j = (0, x.useRef)();
                (0, x.useEffect)(() => {
                    j.current || (j.current = window.grecaptcha.render("example1", {
                        sitekey: "6LfJlmApAAAAAGqXZcP0Aoe2dDGogpR0-KF2V_l5",
                        theme: "dark",
                        callback: e => {
                            b(e)
                        }
                    }), console.log(j.current))
                }, []);
                let v = (0, x.useCallback)(async () => {
                    if (!d) {
                        if (!f) {
                            g.error("Please complete our reCAPTCHA and validations to make this request.");
                            return
                        }
                        p(!0);
                        try {
                            let s = await o.Z.post("/api/faucet/get-eth", {
                                address: t.address,
                                message: t.message,
                                signature: t.signature,
                                token: f
                            });
                            s.data.code === r.t1.Success ? e.setStep("success") : g.error(s.data.result)
                        } catch (e) {}
                        window.grecaptcha.reset(j.current), p(!1)
                    }
                }, [t.address, f]);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        className: "mt-40 mb-40",
                        children: (0, a.jsx)(i.mq, {
                            className: "mx-auto w-[188px] h-[48px]"
                        })
                    }), (0, a.jsx)("div", {
                        id: "example1",
                        className: "mb-6"
                    }), (0, a.jsxs)("button", {
                        className: u()("flex items-center justify-center gap-2 w-full p-5 text-md text-g-10 mb-8 rounded  transition-all", "".concat(d ? "bg-disabled cursor-not-allowed" : "bg-primary hover:bg-button-hover")),
                        onClick: v,
                        children: [d ? (0, a.jsx)(n.Z, {
                            className: "!w-12 !h-12 !min-h-0 !mx-0"
                        }) : (0, a.jsx)(a.Fragment, {}), "Request 0.01 SepoliaETH"]
                    }), (0, a.jsx)("div", {
                        className: "text-center",
                        children: (0, a.jsx)("button", {
                            className: "text-base text-g-1 hover:text-primary",
                            onClick: () => {
                                null == s || s(c.g5.id)
                            },
                            children: "Add Mint Testnet"
                        })
                    })]
                })
            }
        },
        46410: function(e, t, s) {
            "use strict";
            s.r(t);
            var a = s(85893),
                n = s(56733),
                r = s(38953),
                c = s(13989),
                l = s(93849),
                i = s(67294),
                o = s(69077);
            t.default = e => {
                let {
                    state: t
                } = (0, i.useContext)(r.TY), {
                    switchNetworkAsync: s
                } = (0, o.g0)();
                return (0, a.jsxs)("div", {
                    children: [(0, a.jsx)("div", {
                        className: "mt-38 pb-38",
                        children: (0, a.jsx)(c.Lh, {
                            className: "w-[160px] h-[160px] mx-auto"
                        })
                    }), (0, a.jsxs)("div", {
                        className: "flex justify-between px-8 py-4 bg-[#232623] text-base text-[#BCC4BE] mb-4 rounded",
                        children: [(0, a.jsx)("span", {
                            children: "Request to Wallet"
                        }), (0, a.jsx)("span", {
                            children: (0, l.Xj)(t.address, 6)
                        })]
                    }), (0, a.jsx)("div", {
                        className: "px-8 py-4 text-center bg-[#373C37] text-base text-[#BCC4BE] mb-8 rounded",
                        children: "Request Again Tomorrow"
                    }), (0, a.jsx)("div", {
                        className: "text-center",
                        children: (0, a.jsx)("button", {
                            className: "text-base text-g-1 hover:text-primary",
                            onClick: () => {
                                null == s || s(n.g5.id)
                            },
                            children: "Add Mint Testnet"
                        })
                    })]
                })
            }
        },
        38953: function(e, t, s) {
            "use strict";
            s.d(t, {
                Dq: function() {
                    return n
                },
                TY: function() {
                    return c
                },
                dQ: function() {
                    return r
                }
            });
            var a = s(67294);
            let n = {},
                r = (e, t) => "SAVE" === t.type ? { ...e,
                    ...t.payload
                } : e,
                c = (0, a.createContext)({
                    state: n
                })
        }
    },
    function(e) {
        e.O(0, [9774, 2888, 179], function() {
            return e(e.s = 74027)
        }), _N_E = e.O()
    }
]);