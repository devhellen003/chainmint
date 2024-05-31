(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3184], {
        50361: function(e, t, s) {
            var a = s(85990);
            e.exports = function(e) {
                return a(e, 5)
            }
        },
        34442: function(e, t, s) {
            "use strict";
            s.r(t);
            var a = s(85893),
                n = s(67294),
                l = s(91338),
                i = s(22225),
                r = s(97867),
                c = s(42742),
                o = s(91132);
            t.default = e => {
                let [t, s] = (0, n.useState)([]), [d, x] = (0, n.useState)(!1), u = () => {
                    x(!1)
                }, {
                    run: m,
                    status: p
                } = (0, r.b)(() => ({
                    url: "/api/tree/asset",
                    method: "get"
                }), {
                    onSuccess: e => {
                        s(e)
                    }
                });
                return (0, n.useEffect)(() => {
                    m()
                }, []), (0, n.useEffect)(() => {
                    let e = o.c.subscribe([{
                        name: o.d.OPEN_BACKPACK,
                        callback: () => {
                            x(!0)
                        }
                    }, {
                        name: o.d.USER_INFO_REFRESH,
                        callback: () => {
                            m()
                        }
                    }]);
                    return () => {
                        e.unsubscribe()
                    }
                }, []), (0, a.jsx)(i.default, {
                    title: "Backpack",
                    show: d,
                    onClose: u,
                    overlay: (0, a.jsx)(l.default, {
                        onClose: u
                    }),
                    children: (0, a.jsxs)("div", {
                        onClick: () => {
                            x(!0), o.c.notify(o.d.REMOVE_BOX)
                        },
                        className: "w-[60px] h-auto cursor-pointer relative",
                        children: [(0, a.jsx)("img", {
                            className: "w-full h-auto",
                            src: "https://static.mintchain.io/forest/ic-backpack.png",
                            alt: "invite"
                        }), t && t.length > 0 && p === c.t1.Success && (0, a.jsx)("span", {
                            className: "min-w-[22px] h-[22px] leading-[22px] rounded-[22px] absolute left-1 -top-2 bg-[#F00] text-base font-semibold text-center px-2 text-white",
                            children: t.length
                        })]
                    })
                })
            }
        },
        91322: function(e, t, s) {
            "use strict";
            s.r(t);
            var a = s(85893),
                n = s(81921),
                l = s(42742),
                i = s(1656),
                r = s(13989),
                c = s(93849),
                o = s(94184),
                d = s.n(o),
                x = s(67294),
                u = s(91446);
            t.default = e => {
                let {
                    state: {
                        userInfo: t
                    }
                } = (0, i.Wr)(), s = (0, x.useMemo)(() => {
                    if (!t) return "";
                    let e = Number(t.addition || "0");
                    return e > 0 ? "".concat(Number(t.addition).toFixed(1), "%") : ""
                }, [t]);
                return t ? (0, a.jsxs)("div", {
                    className: "w-full flex flex-col",
                    children: [(0, a.jsxs)("div", {
                        className: "mb-8 flex items-center justify-between",
                        children: [(0, a.jsx)("span", {
                            className: "hidden lg:block text-base font-semibold text-black",
                            children: "Check In"
                        }), s && (0, a.jsxs)("span", {
                            className: "text-base text-tree-text font-medium",
                            children: ["GreenID Boost: ", s]
                        })]
                    }), (0, a.jsx)("div", {
                        className: "w-full lg:w-[292px] flex flex-wrap gap-x-[3.33%] gap-y-8",
                        children: t.signs ? (0, a.jsx)(a.Fragment, {
                            children: t.signs.map((e, s) => (0, a.jsxs)("div", {
                                className: d()("flex flex-col items-center flex-1 min-w-[22.5%]", {
                                    "min-w-[48.33%]": "box" === e.type
                                }),
                                children: ["box" === e.type ? (0, a.jsx)("div", {
                                    className: d()("flex items-center justify-center h-[65px] w-full rounded-lg py-3 mb-4", {
                                        "bg-[#DDFFE0]": s + 1 <= t.signin,
                                        "bg-[#F1FEF2]": s + 1 > t.signin
                                    }),
                                    children: (0, a.jsx)(u.default, {
                                        type: "energy",
                                        className: d()("w-25 h-fit ml-4", {
                                            "opacity-40": s + 1 > t.signin
                                        }),
                                        status: "normal"
                                    })
                                }) : (0, a.jsxs)("div", {
                                    className: d()("flex flex-col items-center justify-center h-[65px] w-full rounded-lg py-3 mb-4", {
                                        "bg-[#DDFFE0]": s + 1 <= t.signin,
                                        "bg-[#F1FEF2]": s + 1 > t.signin
                                    }),
                                    children: [(0, a.jsxs)("div", {
                                        className: d()("w-15 h-15 relative text-[#1B831F]", {
                                            "opacity-40": s + 1 > t.signin
                                        }),
                                        children: [(0, a.jsx)(r.sU, {
                                            className: "w-full h-full absolute left-0 top-0"
                                        }), (0, a.jsx)("img", {
                                            src: "https://static.mintchain.io/forest/ic-bubble-light.png",
                                            alt: "",
                                            className: "w-full h-full absolute left-0 top-0"
                                        }), (0, a.jsx)(r._D, {
                                            className: "w-5 h-5 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
                                        })]
                                    }), (0, a.jsxs)("span", {
                                        className: d()("text-md font-medium font-DINCond text-tree-text", {
                                            "text-[#7FD99D]": s + 1 > t.signin
                                        }),
                                        children: ["+", (0, c.uf)(e.amount)]
                                    })]
                                }), (0, a.jsxs)("span", {
                                    className: d()("text-sm font-semibold text-tree-text", {
                                        "text-[#B8CCBB]": s + 1 > t.signin
                                    }),
                                    children: [s + 1, " ", s > 0 ? "days" : "day"]
                                })]
                            }, s))
                        }) : (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)(n.Z, {
                                status: l.t1.NoData
                            })
                        })
                    })]
                }) : (0, a.jsx)(a.Fragment, {})
            }
        },
        73983: function(e, t, s) {
            "use strict";
            s.r(t);
            var a = s(85893),
                n = s(81921),
                l = s(42742),
                i = s(1656),
                r = s(42054),
                c = s(97867),
                o = s(13989),
                d = s(93849),
                x = s(30381),
                u = s.n(x),
                m = s(67294),
                p = s(40406),
                f = s(16248);
            t.default = e => {
                let [t, s] = (0, m.useState)([]), x = (0, m.useRef)(!0), [h, g] = (0, m.useState)(1), b = (0, m.useRef)(null), {
                    state: {
                        userInfo: j
                    }
                } = (0, i.Wr)(), w = (0, p.VY)(), {
                    run: N,
                    status: v
                } = (0, c.b)(e => ({
                    url: "/api/tree/invitation-history",
                    method: "get",
                    params: {
                        page: e
                    }
                }), {
                    onSuccess: (e, t) => {
                        x.current = !(0, d.xb)(e) && e.length >= 20, s(s => 1 == t[0] ? e : [...s, ...e])
                    },
                    onError: () => {}
                });
                (0, m.useEffect)(() => {
                    N(h)
                }, [h]);
                let {
                    copy: k
                } = (0, f.useClipboard)({
                    onSuccess: () => {
                        w.info("Copied!")
                    }
                });
                return ((0, r.L$)(() => {
                    x.current && g(e => e + 1)
                }, b.current, [h]), j) ? (0, a.jsx)("div", {
                    className: "w-full lg:w-[400px] flex flex-col gap-8",
                    children: j.code ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)("div", {
                            className: "flex flex-col bg-white rounded-lg p-8",
                            children: [(0, a.jsx)("span", {
                                className: "text-black text-md mb-2",
                                children: "Your Invitation Code"
                            }), (0, a.jsxs)("span", {
                                className: "text-[#7F8D81] text-sm leading-[20px]",
                                children: ["You can obtain", (0, a.jsxs)("span", {
                                    className: "text-black font-bold px-2",
                                    children: [j.invitePercent, "%"]
                                }), "of the ME collected by the users you've invited!"]
                            }), (0, a.jsx)("span", {
                                className: "text-tree-text text-lg font-semibold my-6",
                                children: j.code
                            }), (0, a.jsxs)("div", {
                                className: "flex items-center gap-8",
                                children: [(0, a.jsxs)("div", {
                                    className: "flex items-center gap-2 cursor-pointer",
                                    onClick: () => k("".concat(l.Ov, "?inviteCode=").concat(j.code)),
                                    children: [(0, a.jsx)("div", {
                                        className: "h-12 w-12 rounded-full bg-[#C0FDD4] text-tree-text flex items-center justify-center",
                                        children: (0, a.jsx)(o.n3, {
                                            className: "w-6 h-6"
                                        })
                                    }), (0, a.jsx)("span", {
                                        className: "text-[#49524B] text-sm font-medium",
                                        children: "Copy Link"
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "flex items-center gap-2 cursor-pointer",
                                    onClick: () => {
                                        if (!j) return;
                                        let e = encodeURIComponent("Invitation code: [".concat(j.code, "] for #MintForest\uD83C\uDF33\uD83C\uDF33\uD83C\uDF33 \n\n@Mint_Blockchain is the L2 for #NFT industry. Nurture your MintTree and redeem $MINT rewards \uD83D\uDE80 \n\nClaim your MintTree seed now: [").concat(l.Ov, "?inviteCode=").concat(j.code, "] \n\n#MintBlockchain #L2forNFT"));
                                        window.open("https://twitter.com/intent/tweet/?text=".concat(e))
                                    },
                                    children: [(0, a.jsx)("div", {
                                        className: "h-12 w-12 rounded-full bg-black flex items-center justify-center",
                                        children: (0, a.jsx)(o.Ji, {
                                            className: "w-6 h-6"
                                        })
                                    }), (0, a.jsx)("span", {
                                        className: "text-[#49524B] text-sm font-medium",
                                        children: "Share Twitter"
                                    })]
                                })]
                            })]
                        }), (0, a.jsxs)("div", {
                            ref: b,
                            className: "flex flex-col bg-white rounded-lg p-8 max-h-[40vh] lg:max-h-[300px] overflow-y-auto",
                            children: [(0, a.jsx)("span", {
                                className: "text-black text-md mb-2",
                                children: "Invitation Record"
                            }), t.map((e, t) => (0, a.jsxs)("div", {
                                className: "flex items-center justify-between mt-8",
                                children: [(0, a.jsx)("span", {
                                    className: "text-sm font-medium text-[#49524B]",
                                    children: e.ens ? e.ens : (0, d.LH)(e.address, 6, 4)
                                }), (0, a.jsx)("span", {
                                    className: "text-sm font-medium text-[#7F8D81]",
                                    children: u()(e.createAt).format("YYYY/MM/DD HH:mm")
                                })]
                            }, t)), (0, a.jsx)(n.Z, {
                                status: v,
                                data: t
                            })]
                        })]
                    }) : (0, a.jsxs)("div", {
                        className: "flex flex-col bg-white rounded-lg p-8",
                        children: [(0, a.jsx)("span", {
                            className: "text-black text-md mb-2",
                            children: "Your Invitation Code"
                        }), (0, a.jsxs)("span", {
                            className: "text-[#7F8D81] text-sm leading-[20px]",
                            children: ["1. Sign in for ", (0, a.jsx)("span", {
                                className: "text-black font-bold px-2",
                                children: "14"
                            }), " ", "consecutive days to automatically receive an invitation code."]
                        }), (0, a.jsxs)("span", {
                            className: "text-[#7F8D81] text-sm leading-[20px]",
                            children: ["2. Or complete tasks and automatically obtain an invitation code after accumulating", " ", (0, a.jsx)("span", {
                                className: "text-black font-bold px-2",
                                children: "20,000"
                            }), " ME."]
                        })]
                    })
                }) : (0, a.jsx)(a.Fragment, {})
            }
        },
        72971: function(e, t, s) {
            "use strict";
            s.r(t);
            var a = s(85893),
                n = s(81921),
                l = s(42742),
                i = s(1656),
                r = s(42054),
                c = s(97867),
                o = s(91132),
                d = s(93849),
                x = s(53480),
                u = s(94184),
                m = s.n(u),
                p = s(50361),
                f = s.n(p),
                h = s(25675),
                g = s.n(h),
                b = s(67294),
                j = s(40406),
                w = s(51498),
                N = s(48582);
            t.default = () => {
                let [e, t] = (0, b.useState)([]), {
                    state: {
                        isDiscord: s,
                        userInfo: u
                    }
                } = (0, b.useContext)(i.kw), p = (0, j.VY)(), [h, v] = (0, b.useState)({}), [k, y] = (0, b.useState)(!1), C = (0, w.useTreeToast)(), {
                    address: F
                } = (0, r.te)(), [E, D] = (0, b.useState)(""), S = e => JSON.parse((0, x.$o)(l.XY, e, "{}")), I = e => {
                    v(t => {
                        let s = f()(t);
                        s[e] = "verify";
                        let a = S(F || "");
                        return a[e] = "verify", (0, x.qQ)(l.XY, F, JSON.stringify(a)), s
                    })
                }, {
                    run: _,
                    status: M
                } = (0, c.b)(e => ({
                    url: "/api/tree/task-list",
                    method: "get",
                    params: {
                        address: e
                    }
                }), {
                    onSuccess: (e, s) => {
                        let a = {},
                            n = S(s[0]);
                        t(e.map(e => {
                            let t = l.qd[e.id];
                            return e.claimed ? a[e.id] = "claimed" : n[e.id] ? a[e.id] = "verify" : a[e.id] = "pending", v(a), t ? { ...e,
                                ...t
                            } : e
                        }))
                    }
                }), {
                    run: R
                } = (0, c.b)((e, t) => ({
                    url: "/api/tree/task-submit",
                    method: "post",
                    data: {
                        id: e,
                        twitterurl: t
                    }
                }), {
                    onSuccess: e => {
                        o.c.notify(o.d.USER_INFO_REFRESH), v(t => {
                            let s = f()(t);
                            return s[e.taskId] = "claimed", s
                        }), y(!1), D(""), C({
                            type: "task",
                            amount: e.amount
                        })
                    },
                    onError(e) {
                        p.error(e.msg), y(!1), D("")
                    }
                }), {
                    run: B
                } = (0, c.b)(() => ({
                    url: "/api/discord/check-follow",
                    method: "post"
                }), {
                    onSuccess: e => {
                        o.c.notify(o.d.USER_INFO_REFRESH), v(t => {
                            let s = f()(t);
                            return s[e.taskId] = "claimed", s
                        }), y(!1), C({
                            type: "task",
                            amount: e.amount
                        })
                    },
                    onError(e) {
                        p.error(e.msg), y(!1)
                    }
                });
                (0, b.useEffect)(() => {
                    F && _(F)
                }, [F]);
                let O = (0, b.useMemo)(() => e.filter(e => "claimed" !== h[e.id]), [e, h]),
                    T = e => {
                        e.url && window.open(e.url())
                    },
                    Y = (e, s) => {
                        t(t => {
                            let a = t.map(t => ({ ...t,
                                twitterUrl: e.id === t.id ? s : t.twitterUrl
                            }));
                            return a
                        })
                    };
                return (0, a.jsxs)("div", {
                    className: "w-full lg:w-[568px] flex flex-col bg-white rounded-lg p-8 gap-8 max-h-[450px] overflow-y-auto scroll-bar",
                    children: [O.map((e, t) => (0, a.jsxs)("div", {
                        className: "flex items-center",
                        children: [(0, a.jsx)("div", {
                            className: "w-16 h-16 rounded-full bg-tree-text",
                            children: (0, a.jsx)(g(), {
                                src: e.icon || "/images/mint-icon.png",
                                alt: "icon",
                                width: 32,
                                height: 32
                            })
                        }), (0, a.jsxs)("div", {
                            className: m()("flex flex-col flex-1 ml-4 mr-8", {
                                "cursor-pointer group": e.url
                            }),
                            onClick: () => T(e),
                            children: [(0, a.jsx)("span", {
                                className: "text-base font-medium text-black line-clamp-1 break-all group-hover:text-tree-text",
                                children: e.name
                            }), (0, a.jsxs)("span", {
                                className: "text-md font-medium font-DINCond text-tree-text",
                                children: [(0, d.uf)(e.amount), " ME"]
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "flex flex-col items-end gap-2 lg:items-center lg:flex-row lg:gap-4",
                            children: [e.twitter_verify && (0, a.jsx)("input", {
                                className: "w-[30vw] lg:w-[160px] px-6 leading-[24px] text-sm text-g-6 bg-white rounded-[20px] border border-solid border-[#e4e4e4] focus:border-line",
                                type: "text",
                                placeholder: "Input the tweet url",
                                onChange: t => {
                                    Y(e, t.currentTarget.value)
                                }
                            }), "pending" == h[e.id] && (0, a.jsx)("span", {
                                className: "h-[24px] w-[69px] text-center cursor-pointer leading-[24px] rounded-[20px] text-sm text-white bg-tree-text hover:bg-[#09A63D] px-6",
                                onClick: t => {
                                    t.stopPropagation(),
                                        function(e) {
                                            if ("discord-follow" === e.spec && !s) {
                                                location.href = "https://discord.com/oauth2/authorize?client_id=1214172619339735071&response_type=code&redirect_uri=".concat(encodeURIComponent(l.Ov), "&scope=identify+guilds+guilds.members.read");
                                                return
                                            }
                                            if (["stake", "twitter-follow", "twitter-post"].includes(e.spec) && !(null == u ? void 0 : u.twitter)) {
                                                location.href = "/api/twitter/oauth";
                                                return
                                            }
                                            e.url && (window.open(e.url()), I(e.id))
                                        }(e)
                                },
                                children: "Go"
                            }), "verify" === h[e.id] && (0, a.jsx)(N.Z, {
                                className: "h-[24px] w-[69px] text-center cursor-pointer leading-[24px] rounded-[20px] text-sm text-white bg-verify-button px-6",
                                loading: E === e.id,
                                onClick: t => {
                                    t.stopPropagation(), k || (y(!0), D(e.id), "twitter-post" === e.spec || "stake" === e.spec ? R(e.id, e.twitterUrl) : "twitter-follow" === e.spec || "bridge" === e.spec ? R(e.id) : "discord-follow" === e.spec && B())
                                },
                                children: "Verify"
                            })]
                        })]
                    }, e.id)), (0, a.jsx)(n.Z, {
                        status: M === l.t1.Success ? O.length > 0 ? l.t1.Success : l.t1.NoData : M,
                        data: O
                    })]
                })
            }
        },
        51498: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useTreeToast: function() {
                    return o
                }
            });
            var a = s(85893),
                n = s(93849),
                l = s(67294),
                i = s(40406);
            let r = {
                    collect: "Collected ME",
                    task: "Completed task",
                    box: "Opened a Mystery ME Box"
                },
                c = e => (0, a.jsxs)("div", {
                    className: "w-fit flex items-center justify-between shadow-tree-box h-20 lg:h-30 px-8 gap-32 bg-gradient-to-b from-[#C3EEE9] to-[#FEFADE] rounded-lg -mt-18",
                    children: [e.title && (0, a.jsx)("span", {
                        className: "text-base text-black whitespace-nowrap",
                        children: e.title
                    }), e.type && (0, a.jsx)("span", {
                        className: "text-base text-black whitespace-nowrap",
                        children: r[e.type]
                    }), (0, a.jsx)("span", {
                        className: "text-[20px] leading-[28px] lg:text-[24px] lg:leading-[32px] text-tree-text font-DINCond",
                        children: (0, n.uf)(e.amount)
                    })]
                });
            t.default = c;
            let o = () => {
                let e = (0, i.VY)();
                return (0, l.useCallback)(t => {
                    e.show((0, a.jsx)(c, { ...t
                    }))
                }, [e])
            }
        },
        63184: function(e, t, s) {
            "use strict";
            s.r(t);
            var a = s(85893),
                n = s(1656),
                l = s(67294),
                i = s(34442),
                r = s(91322),
                c = s(73983),
                o = s(72971),
                d = s(22225);
            t.default = e => {
                let t = (0, n.AG)(),
                    [s, x] = (0, l.useState)(!1),
                    [u, m] = (0, l.useState)(!1),
                    [p, f] = (0, l.useState)(!1);
                return t ? (0, a.jsx)(a.Fragment, {}) : (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("div", {
                        className: "absolute right-4 lg:right-0 top-[-340px] z-50 flex flex-col gap-4 lg:items-end lg:flex-row lg:top-[-80px]",
                        children: [(0, a.jsx)(d.default, {
                            title: "Task",
                            show: p,
                            onClose: () => f(!1),
                            overlay: (0, a.jsx)(o.default, {}),
                            children: (0, a.jsx)("img", {
                                className: "w-[60px] h-auto cursor-pointer",
                                src: "https://static.mintchain.io/forest/ic-task.png",
                                alt: "task",
                                onClick: () => f(!0)
                            })
                        }), (0, a.jsx)(d.default, {
                            title: "Invitation",
                            show: s,
                            onClose: () => x(!1),
                            overlay: (0, a.jsx)(c.default, {}),
                            children: (0, a.jsx)("img", {
                                className: "w-[60px] h-auto cursor-pointer",
                                src: "https://static.mintchain.io/forest/ic-invite.png",
                                alt: "invite",
                                onClick: () => x(!0)
                            })
                        }), (0, a.jsx)(i.default, {}), (0, a.jsx)(d.default, {
                            title: "Check In",
                            show: u,
                            onClose: () => m(!1),
                            overlay: (0, a.jsx)(r.default, {}),
                            children: (0, a.jsx)("img", {
                                className: "w-[60px] h-auto cursor-pointer",
                                src: "https://static.mintchain.io/forest/ic-check.png",
                                alt: "check",
                                onClick: () => m(!0)
                            })
                        })]
                    })
                })
            }
        }
    }
]);