(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4593], {
        69877: function(e) {
            var t = Math.floor,
                l = Math.random;
            e.exports = function(e, r) {
                return e + t(l() * (r - e + 1))
            }
        },
        83608: function(e, t, l) {
            var r = l(69877),
                n = l(16612),
                o = l(18601),
                a = parseFloat,
                s = Math.min,
                i = Math.random;
            e.exports = function(e, t, l) {
                if (l && "boolean" != typeof l && n(e, t, l) && (t = l = void 0), void 0 === l && ("boolean" == typeof t ? (l = t, t = void 0) : "boolean" == typeof e && (l = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = o(e), void 0 === t ? (t = e, e = 0) : t = o(t)), e > t) {
                    var c = e;
                    e = t, t = c
                }
                if (l || e % 1 || t % 1) {
                    var d = i();
                    return s(e + d * (t - e + a("1e-" + ((d + "").length - 1))), t)
                }
                return r(e, t)
            }
        },
        77692: function(e, t, l) {
            "use strict";
            l.r(t);
            var r = l(85893),
                n = l(42742),
                o = l(97867),
                a = l(13989),
                s = l(94184),
                i = l.n(s),
                c = l(11163),
                d = l(67294),
                u = l(83253),
                x = l.n(u);
            t.default = e => {
                let t = (0, d.useRef)(null),
                    [l, s] = (0, d.useState)(""),
                    [u, g] = (0, d.useState)(!1),
                    [p, m] = (0, d.useState)(!1),
                    f = (0, c.useRouter)(),
                    {
                        loading: b,
                        run: h
                    } = (0, o.b)(t => ({
                        url: "/api/tree/invitation",
                        method: "get",
                        params: {
                            code: t,
                            jwtToken: e.userInfo.token
                        },
                        ignoreAuth: !0
                    }), {
                        onSuccess: t => {
                            e.onEnter(t)
                        },
                        onError(e) {
                            m(e.msg)
                        }
                    }),
                    v = e => {
                        s(e.slice(0, 8)), m(!1)
                    };
                return (0, d.useEffect)(() => {
                    setTimeout(() => {
                        let e = f.query.inviteCode;
                        e || (e = localStorage.getItem(n.sv) || ""), e && "string" == typeof e && v(e)
                    }, 100)
                }, [f.query]), (0, r.jsx)(x(), {
                    isOpen: e.open,
                    style: {
                        overlay: {
                            background: "rgba(0, 0, 0, 0.50)",
                            zIndex: "999"
                        },
                        content: {
                            top: "50%",
                            left: "50%",
                            right: "auto",
                            bottom: "auto",
                            marginRight: "-50%",
                            border: "none",
                            padding: 0,
                            background: "none",
                            transform: "translate(-50%, -50%)",
                            width: "100%"
                        }
                    },
                    children: (0, r.jsxs)("div", {
                        className: "w-full mx-auto max-w-[94%] lg:max-w-[740px] p-12 rounded-2xl bg-[#F8FFFA] relative",
                        children: [(0, r.jsx)("div", {
                            className: "text-black w-24 h-24 flex items-center justify-center absolute right-0 top-0 cursor-pointer",
                            onClick: e.onCloseClick,
                            children: (0, r.jsx)(a.sZ, {})
                        }), (0, r.jsx)("h1", {
                            className: "mt-8 lg:mt-16 text-[22px] lg:text-xl text-black font-semibold text-center",
                            children: "Your Invitation Code"
                        }), (0, r.jsx)("div", {
                            className: "w-full mt-14 lg:mt-28 flex justify-center",
                            children: (0, r.jsxs)("div", {
                                className: "w-full lg:w-[60%] relative flex gap-6 lg:gap-16",
                                ref: t,
                                children: [(0, r.jsx)("div", {
                                    className: i()("w-full px-6 h-28 bg-[#EAF8EC] rounded border border-[#D7E0D8]", {
                                        "!border-primary": u
                                    }),
                                    children: (0, r.jsx)("input", {
                                        type: "text",
                                        className: i()("w-full h-28 leading-[56px] text-lg font-medium text-[#009A33]", {
                                            "!border-primary": u
                                        }),
                                        maxLength: 8,
                                        value: l,
                                        onInput: e => {
                                            let t = e.currentTarget.value;
                                            v(t)
                                        },
                                        onFocus: () => {
                                            g(!0)
                                        },
                                        onBlur: () => {
                                            g(!1)
                                        }
                                    })
                                }), (0, r.jsx)("p", {
                                    className: i()("absolute -bottom-14 left-0 text-left text-base text-[#FF2424] font-medium", {
                                        "opacity-0": !p
                                    }),
                                    children: p
                                })]
                            })
                        }), (0, r.jsx)("div", {
                            className: "mt-18 lg:mt-32 text-center",
                            children: (0, r.jsx)("button", {
                                type: "button",
                                className: i()("px-16 text-[20px] py-5 lg:px-32 lg:text-[24px] hover:bg-primary font-normal leading-none text-[#0C190F] rounded-lg", "".concat(b ? "bg-primary cursor-not-allowed" : "bg-[#0CDC50]")),
                                onClick: () => {
                                    !b && l.length <= 8 && h(l)
                                },
                                children: "Join Now"
                            })
                        })]
                    })
                })
            }
        },
        4593: function(e, t, l) {
            "use strict";
            l.r(t);
            var r = l(85893),
                n = l(42742),
                o = l(1656),
                a = l(42054),
                s = l(97867),
                i = l(91132),
                c = l(13989),
                d = l(93849),
                u = l(53480),
                x = l(44538),
                g = l(94184),
                p = l.n(g),
                m = l(83608),
                f = l.n(m),
                b = l(11163),
                h = l(67294),
                v = l(40406),
                k = l(69077),
                y = l(77692),
                w = l(75895);
            t.default = e => {
                let t = (0, v.VY)(),
                    l = (0, b.useRouter)(),
                    {
                        openConnectModal: g
                    } = (0, x.We)(),
                    {
                        isConnected: m,
                        address: j
                    } = (0, a.te)(),
                    {
                        dispatch: N
                    } = (0, h.useContext)(o.kw),
                    {
                        signMessageAsync: C
                    } = (0, k.QW)(),
                    [E, S] = (0, h.useState)(),
                    [A, F] = (0, h.useState)(!1),
                    [T, I] = (0, h.useState)(""),
                    [B, _] = (0, h.useState)(""),
                    [O, q] = (0, h.useState)("");

                function R(e, t) {
                    S(e), (0, u.qQ)(n.OA, t, JSON.stringify(e))
                }(0, w.n)(e => {
                    localStorage.removeItem(n.OA + "_" + e)
                }, []);
                let {
                    loading: M,
                    status: W,
                    run: D
                } = (0, s.b)((e, t, l, r) => ({
                    url: "/api/twitter/verify",
                    method: "post",
                    params: {
                        code: l,
                        jwtToken: r,
                        address: e
                    },
                    ignoreAuth: !0
                }), {
                    debounceInterval: 600,
                    onSuccess: (e, t) => {
                        l.replace("/mint-forest"), R({ ...t[1],
                            twitter: e
                        }, t[0])
                    },
                    onError(e) {
                        l.replace("/mint-forest"), _(e.msg)
                    }
                }), {
                    loading: L,
                    run: V
                } = (0, s.b)((e, t, l) => ({
                    url: "/api/wallet/verify",
                    method: "post",
                    data: {
                        jwtToken: l
                    },
                    ignoreAuth: !0
                }), {
                    onSuccess: (e, t) => {
                        R({ ...t[0],
                            wallet: e.data
                        }, t[1])
                    },
                    onError(e) {
                        q(e.msg)
                    }
                }), {
                    loading: Y,
                    run: H
                } = (0, s.b)((e, t, l) => ({
                    url: "/api/tree/login",
                    method: "post",
                    data: {
                        address: e,
                        signature: t,
                        message: l
                    },
                    ignoreAuth: !0
                }), {
                    onSuccess: (e, t) => {
                        var r, o, a, s, c;
                        (null == e ? void 0 : null === (r = e.user) || void 0 === r ? void 0 : r.type) === "nft" || (null == e ? void 0 : null === (o = e.user) || void 0 === o ? void 0 : o.status) === "verified" ? (N && N({
                            type: "SAVE",
                            payload: {
                                token: e.access_token
                            }
                        }), i.c.setToken(e.access_token, t[0]), i.c.notify(i.d.RETRY_WHITH_TOKEN), l.replace("/mint-forest"), localStorage.removeItem(n.sv)) : R({
                            twitter: null == e ? void 0 : null === (a = e.user) || void 0 === a ? void 0 : a.twitter,
                            code: null == e ? void 0 : null === (s = e.user) || void 0 === s ? void 0 : s.code,
                            wallet: (null == e ? void 0 : null === (c = e.user) || void 0 === c ? void 0 : c.status) === "wallet",
                            token: e.access_token
                        }, t[0])
                    },
                    onError: e => {
                        I(e.msg)
                    }
                });
                (0, h.useEffect)(() => {
                    let {
                        inviteCode: e
                    } = l.query;
                    e && "string" == typeof e && localStorage.setItem(n.sv, e)
                }, [l.query]), (0, h.useEffect)(() => {
                    E && E.token && l.query.code && l.query.state === n.DQ && j && !W && D(j, E, l.query.code, E.token)
                }, [E, l.query, j, W]), (0, h.useEffect)(() => {
                    if (!j) return;
                    let e = (0, u.$o)(n.OA, j);
                    if (e) {
                        let t = JSON.parse(e);
                        t.token && S(t)
                    } else S(void 0), I(""), q(""), _("")
                }, [j]), (0, h.useEffect)(() => {
                    m || (S(void 0), I(""), q(""), _(""), (0, u.ZL)(n.OA, j))
                }, [m, j]);
                let J = async () => {
                        if (!Y && (!m && g && await g(), j)) {
                            let e = "You are participating in the Mint Forest event: \n ".concat(j, "\n\nNonce: ").concat(f()(1e6, 9999999));
                            await C({
                                message: e
                            }).then(t => {
                                I(""), H(j, t, e)
                            }).catch(e => {
                                t.error(e.message)
                            })
                        }
                    },
                    Q = e => {
                        let {
                            step: t,
                            title: l,
                            btText: n,
                            isChecked: o,
                            errorMsg: a,
                            border: s,
                            callBack: i
                        } = e;
                        return (0, r.jsxs)("div", {
                            className: "flex items-center justify-between relative py-16",
                            children: [(0, r.jsxs)("div", {
                                className: "flex items-center gap-6",
                                children: [(0, r.jsx)("span", {
                                    className: "w-12 h-12 text-base leading-[24px] lg:w-20 lg:h-20 lg:text-[24px] lg:leading-[40px] bg-tree-text text-center text-white rounded-full",
                                    children: t
                                }), (0, r.jsx)("span", {
                                    className: "text-black text-md lg:text-[20px]",
                                    children: l
                                })]
                            }), (0, r.jsx)("div", {
                                className: "",
                                children: o ? (0, r.jsx)(c.Fj, {
                                    className: "w-12 h-12 lg:w-20 lg:h-20"
                                }) : (0, r.jsx)("button", {
                                    className: p()("w-[86px] py-2 lg:px-0 lg:w-[132px] lg:py-4 text-center text-md rounded-lg", {
                                        "!bg-[#A5E9AA] cursor-not-allowed": Y || 2 === t && L || 3 === t && M,
                                        "bg-verify-button": m,
                                        "bg-tree-text": !m
                                    }),
                                    onClick: i,
                                    children: n
                                })
                            }), s && (0, r.jsx)("span", {
                                className: "absolute bottom-0 left-0 h-[1px] w-full",
                                style: {
                                    background: "linear-gradient(90deg, rgba(207, 229, 210, 0.00) 0.8%, #CFE5D2 51.39%, rgba(207, 229, 210, 0.00) 100%)"
                                }
                            }), a && (0, r.jsx)("span", {
                                className: "text-[#FF4545] text-sm absolute bottom-5 left-0 w-full text-right",
                                children: a
                            })]
                        })
                    };
                return (0, r.jsx)("div", {
                    className: "absolute inset-0 bg-[rgba(255,255,255,0.24)] backdrop-blur-xl z-10 min-h-screen",
                    children: (0, r.jsx)("div", {
                        className: "mt-[30%] w-[92%] p-6 lg:mt-[150px] lg:w-[814px] lg:p-16 mx-auto rounded-2xl",
                        style: {
                            background: "linear-gradient(180deg,#C3EEE9 0%,#FEFADF 100%)"
                        },
                        children: E ? (0, r.jsxs)("div", {
                            className: "p-6 lg:px-32 lg:py-16 bg-white rounded-2xl",
                            children: [(0, r.jsx)("h1", {
                                className: "text-[18px] pb-6 lg:text-[24px] lg:pb-16 text-black font-medium border-b text-center border-[#B8CCBB]",
                                children: "Eligibility Verification"
                            }), Q({
                                step: 1,
                                title: "Wallet Login",
                                btText: "",
                                isChecked: !0,
                                border: !0
                            }), Q({
                                step: 2,
                                title: "Check Wallet",
                                btText: "Check",
                                isChecked: E.wallet,
                                border: !0,
                                errorMsg: O,
                                callBack: () => {
                                    L || (q(""), V(E, j, E.token))
                                }
                            }), Q({
                                step: 3,
                                title: "Verify Twitter",
                                btText: "Connect",
                                isChecked: !(0, d.xb)(E.twitter),
                                border: !0,
                                errorMsg: B,
                                callBack: () => {
                                    M || (location.href = "/api/twitter/oauth")
                                }
                            }), Q({
                                step: 4,
                                title: "Enter the invitation code",
                                btText: "Bind",
                                isChecked: !(0, d.xb)(E.code),
                                border: !1,
                                callBack: () => {
                                    F(!0)
                                }
                            }), (0, r.jsx)(y.default, {
                                open: A,
                                userInfo: E,
                                onCloseClick: () => {
                                    F(!1)
                                },
                                onEnter: () => {
                                    E && (N && N({
                                        type: "SAVE",
                                        payload: {
                                            token: E.token
                                        }
                                    }), i.c.setToken(E.token, j), i.c.notify(i.d.RETRY_WHITH_TOKEN), (0, u.ZL)(n.OA, j), localStorage.removeItem(n.sv), l.replace("/mint-forest"))
                                }
                            })]
                        }) : (0, r.jsxs)("div", {
                            className: "p-6 lg:px-32 lg:py-16 bg-white rounded-2xl",
                            children: [(0, r.jsx)("h1", {
                                className: "text-[18px] pb-6 lg:text-[24px] lg:pb-16 text-black font-medium border-b text-center border-[#B8CCBB]",
                                children: "Connect Wallet"
                            }), Q({
                                step: 1,
                                title: "Wallet Login",
                                btText: (m ? "Login" : "Connect") + (Y ? "..." : ""),
                                isChecked: !1,
                                border: !1,
                                errorMsg: T,
                                callBack: J
                            })]
                        })
                    })
                })
            }
        },
        75895: function(e, t, l) {
            "use strict";
            l.d(t, {
                n: function() {
                    return o
                }
            });
            var r = l(67294),
                n = l(42054);
            let o = (e, t) => {
                let l = (0, r.useRef)(""),
                    {
                        address: o
                    } = (0, n.te)();
                (0, r.useEffect)(() => {
                    l.current && o && l.current !== o && e(l.current), o && (l.current = o)
                }, [o, e, ...t])
            }
        }
    }
]);