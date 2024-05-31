(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9249], {
        34700: function(e, t, a) {
            "use strict";
            a.r(t);
            var s = a(85893),
                n = a(1656),
                l = a(93849),
                r = a(61099),
                c = a.n(r),
                i = a(41664),
                d = a.n(i),
                o = a(67294),
                m = a(17071);
            t.default = e => {
                let {
                    data: t,
                    index: a
                } = e, {
                    state: {
                        userInfo: r
                    }
                } = (0, n.Wr)(), i = (0, o.useCallback)((e, t, a, n) => (0, s.jsx)(d(), {
                    className: "w-full flex items-center px-8 py-5 group",
                    href: e === t ? "/mint-forest" : "/mint-forest?id=".concat(a),
                    children: n
                }), []);
                return t && r ? i(r.id, t.id, t.treeId, (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(m.default, {
                        number: a
                    }), (0, s.jsx)(c(), {
                        size: 32,
                        name: t.address,
                        variant: "beam",
                        square: !1,
                        colors: ["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]
                    }), (0, s.jsx)("div", {
                        className: "flex-1 flex flex-col ml-4",
                        children: (0, s.jsx)("span", {
                            className: "text-md text-black font-medium group-hover:text-tree-text",
                            children: (0, l.LH)(t.ens || t.address, 6, 4)
                        })
                    }), (0, s.jsx)("span", {
                        className: "text-[24px] font-medium text-primary font-DINCond",
                        children: (0, l.uf)(t.amount)
                    }), (0, s.jsx)("div", {
                        className: "w-12 h-12 flex items-center justify-center ml-2",
                        children: (0, s.jsx)("img", {
                            src: l.jZ.trees[t.level].url,
                            alt: "tree",
                            className: "w-auto h-full"
                        })
                    })]
                })) : (0, s.jsx)(s.Fragment, {})
            }
        },
        17071: function(e, t, a) {
            "use strict";
            a.r(t);
            var s = a(85893),
                n = a(25675),
                l = a.n(n);
            let r = ["https://static.mintchain.io/forest/ic-rank-1.png", "https://static.mintchain.io/forest/ic-rank-2.png", "https://static.mintchain.io/forest/ic-rank-3.png"];
            t.default = e => e.number <= 3 ? (0, s.jsx)(l(), {
                className: "mr-3",
                src: r[e.number - 1],
                alt: "",
                width: 26,
                height: 26
            }) : (0, s.jsx)("span", {
                className: "text-black font-DINCond text-md min-w-[26px] text-center mr-3",
                children: e.number
            })
        },
        59249: function(e, t, a) {
            "use strict";
            a.r(t);
            var s = a(85893),
                n = a(94184),
                l = a.n(n),
                r = a(67294),
                c = a(95222),
                i = a(48157);
            t.default = e => {
                let [t, a] = (0, r.useState)("leaderboard"), n = e => {
                    a(e)
                };
                return (0, s.jsxs)("div", {
                    className: "w-full lg:min-h-[2927px] bg-white rounded-md mb-10 relative",
                    children: [(0, s.jsx)("div", {
                        className: "w-full h-[400px] bg-leaderboard-bg absolute left-0 top-0 z-0 rounded-t-md"
                    }), (0, s.jsxs)("div", {
                        className: "w-full min-h-[2927px] flex flex-col relative z-10",
                        children: [(0, s.jsxs)("div", {
                            className: "w-full rounded-t-md overflow-hidden h-25 flex items-center relative mb-3 z-10",
                            children: [(0, s.jsx)("span", {
                                className: l()("flex-1 h-full text-center leading-[50px] text-md font-semibold text-black cursor-pointer", {
                                    "bg-[#C8F027] text-[#475414]": "leaderboard" !== t
                                }),
                                onClick: () => n("leaderboard"),
                                children: "Leaderboard"
                            }), (0, s.jsxs)("div", {
                                className: "h-30 w-16 -skew-x-[20deg] flex items-center absolute left-[50%] translate-x-[-50%]",
                                children: [(0, s.jsx)("div", {
                                    className: l()("flex-1 h-full", {
                                        "bg-[#D9FEB5]": "leaderboard" === t,
                                        "bg-[#C8F027]": "leaderboard" !== t
                                    })
                                }), (0, s.jsx)("div", {
                                    className: l()("flex-1 h-full", {
                                        "bg-[#C8F027]": "leaderboard" === t,
                                        "bg-[#D9FEB5]": "leaderboard" !== t
                                    })
                                })]
                            }), (0, s.jsx)("span", {
                                className: l()("flex-1 h-full text-center leading-[50px] text-md font-semibold text-black cursor-pointer", {
                                    "bg-[#C8F027] text-[#475414]": "recentJoin" !== t
                                }),
                                onClick: () => n("recentJoin"),
                                children: "Recent Joins"
                            })]
                        }), "leaderboard" === t && (0, s.jsx)(c.default, {}), "recentJoin" === t && (0, s.jsx)(i.default, {})]
                    })]
                })
            }
        },
        95222: function(e, t, a) {
            "use strict";
            a.r(t);
            var s = a(85893),
                n = a(81921),
                l = a(27334),
                r = a(97867),
                c = a(91132),
                i = a(93849),
                d = a(82501),
                o = a(67294),
                m = a(34700),
                x = a(42054);
            t.default = e => {
                let [t, a] = (0, o.useState)(), [u, f] = (0, o.useState)(), [p, h] = (0, o.useState)(1), b = (0, o.useRef)(!0), {
                    isMobile: g,
                    checkIsMobile: j
                } = (0, x.XA)(), {
                    run: _,
                    status: v
                } = (0, r.b)(e => ({
                    url: "/api/tree/leaderboard",
                    method: "get",
                    params: {
                        page: e
                    }
                }), {
                    onSuccess: (e, t) => {
                        b.current = !(0, i.xb)(e) && e.length >= 20, e = e.map(e => ({ ...e,
                            level: (0, d.J)(e.amount)
                        })), j() ? f(a => 1 == t[0] ? e : [...a || [], ...e]) : f(e)
                    }
                }), {
                    run: N
                } = (0, r.b)(() => ({
                    url: "/api/tree/me-rank",
                    method: "get"
                }), {
                    onSuccess: e => {
                        a({ ...e,
                            level: (0, d.J)(e.amount)
                        })
                    }
                });
                (0, o.useEffect)(() => {
                    N(), _(1)
                }, []), (0, o.useEffect)(() => {
                    g || f([]), _(p)
                }, [p, g]), (0, o.useEffect)(() => {
                    let e = c.c.subscribe([{
                        name: c.d.USER_INFO_REFRESH,
                        callback: () => {
                            if (p > 1) {
                                h(1);
                                return
                            }
                            _(1), N()
                        }
                    }]);
                    return () => {
                        e.unsubscribe()
                    }
                }, []);
                let C = (0, o.useCallback)(e => {
                    b.current && h(e)
                }, []);
                return (0, x.L$)(() => {
                    b.current && g && h(e => e + 1)
                }, window, [p, g]), (0, s.jsxs)(s.Fragment, {
                    children: [t && (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(m.default, {
                            data: t,
                            index: t.rank
                        }), (0, s.jsx)("div", {
                            className: "w-full h-[3px] bg-[#CCEAAE] my-3"
                        })]
                    }), u && u.map((e, t) => (0, s.jsx)(m.default, {
                        data: e,
                        index: e.rank
                    }, t)), (0, s.jsx)(n.Z, {
                        status: v,
                        data: u
                    }), (0, s.jsx)("div", {
                        className: "w-full absolute left-0 -bottom-26 hidden lg:block",
                        children: (0, s.jsx)(l.Z, {
                            pageIndex: p,
                            pageSize: 50,
                            total: 1e3,
                            pageIndexChange: C
                        })
                    })]
                })
            }
        },
        48157: function(e, t, a) {
            "use strict";
            a.r(t);
            var s = a(85893),
                n = a(81921),
                l = a(27334),
                r = a(42054),
                c = a(97867),
                i = a(93849),
                d = a(61099),
                o = a.n(d),
                m = a(30381),
                x = a.n(m),
                u = a(41664),
                f = a.n(u),
                p = a(67294);
            t.default = e => {
                let [t, a] = (0, p.useState)(), [d, m] = (0, p.useState)(1), u = (0, p.useRef)(!0), {
                    isMobile: h,
                    checkIsMobile: b
                } = (0, r.XA)(), {
                    run: g,
                    status: j
                } = (0, c.b)(e => ({
                    url: "/api/tree/recent-join",
                    method: "get",
                    params: {
                        page: e
                    }
                }), {
                    onSuccess: (e, t) => {
                        u.current = !(0, i.xb)(e) && e.length >= 20, b() ? a(a => 1 == t[0] ? e : [...a || [], ...e]) : a(e)
                    }
                });
                (0, p.useEffect)(() => {
                    h || a([]), g(d)
                }, [d, h]);
                let _ = (0, p.useCallback)(e => {
                    u.current && m(e)
                }, []);
                return (0, r.L$)(() => {
                    u.current && h && m(e => e + 1)
                }, window, [d]), (0, s.jsxs)(s.Fragment, {
                    children: [t && t.map((e, t) => (0, s.jsxs)("div", {
                        className: "w-full flex items-center px-8 h-[57.45px]",
                        children: [(0, s.jsx)(o(), {
                            size: 32,
                            name: e.address,
                            variant: "beam",
                            square: !1,
                            colors: ["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]
                        }), (0, s.jsxs)("div", {
                            className: "flex flex-col flex-1 ml-4 mr-8",
                            children: [(0, s.jsx)(f(), {
                                className: "text-sm lg:text-base text-black !font-semibold hover:text-tree-text",
                                href: "/mint-forest?id=".concat(e.treeId),
                                children: (0, i.LH)(e.ens || e.address, 4, 4)
                            }), e.inviteInfo && (0, s.jsxs)("span", {
                                className: "text-sm lg:text-base text-[#49524B]",
                                children: ["Invited by", " ", (0, s.jsx)("span", {
                                    className: "text-black",
                                    children: (0, i.LH)(e.inviteInfo.ens || e.inviteInfo.address, 6, 4)
                                })]
                            })]
                        }), (0, s.jsx)("span", {
                            className: "text-[#49524B] text-sm lg:text-base",
                            children: x()(e.createAt).utc().fromNow()
                        })]
                    }, t)), (0, s.jsx)(n.Z, {
                        status: j,
                        data: t
                    }), (0, s.jsx)("div", {
                        className: "w-full absolute left-0 -bottom-26 hidden lg:block",
                        children: (0, s.jsx)(l.Z, {
                            pageIndex: d,
                            pageSize: 20,
                            total: 200,
                            pageIndexChange: _
                        })
                    })]
                })
            }
        },
        27334: function(e, t, a) {
            "use strict";
            var s = a(85893),
                n = a(13989),
                l = a(41609),
                r = a.n(l),
                c = a(67294),
                i = a(63193),
                d = a.n(i);
            t.Z = e => {
                let [t, a] = (0, c.useState)(e.pageIndex), [l, i] = (0, c.useState)(0), [o, m] = (0, c.useState)([]);
                (0, c.useEffect)(() => {
                    let t = Math.ceil(e.total / e.pageSize);
                    i(t), x(t)
                }, [e.total, e.pageSize]), (0, c.useEffect)(() => {
                    a(e.pageIndex)
                }, [e.pageIndex]), (0, c.useEffect)(() => {
                    l > 0 && (x(l), e.pageIndexChange && e.pageIndexChange(t))
                }, [t]);
                let x = e => {
                        let a = [];
                        if (e <= 5)
                            for (let t = 1; t <= e; t++) a.push(t);
                        else if (t < 3) {
                            for (let e = 1; e <= 4; e++) a.push(e);
                            a.push("next_more"), a.push(e)
                        } else if (t >= 3 && t < e - 3) {
                            a.push(1), a.push("pre_more");
                            for (let e = t - 1; e <= t + 1; e++) a.push(e);
                            a.push("next_more"), a.push(e)
                        } else {
                            a.push(1), a.push("pre_more");
                            for (let t = e - 3; t <= e; t++) a.push(t)
                        }
                        m(a)
                    },
                    u = e => {
                        a(e)
                    },
                    f = e => {
                        a(t => {
                            let a = "next_more" == e ? t + 3 : t - 3;
                            return a > l ? l : a < 0 ? 1 : a
                        })
                    };
                return r()(o) ? (0, s.jsx)(s.Fragment, {}) : (0, s.jsxs)("div", {
                    className: "".concat(d().wrapper, " flex items-center ").concat(e.className || ""),
                    children: [(0, s.jsx)("div", {
                        className: "".concat(d().pre, " ").concat(1 == t && d().disable),
                        onClick: () => {
                            a(e => 0 == e ? e : e - 1)
                        },
                        children: (0, s.jsx)(n.ds, {
                            className: "rotate-[270deg]"
                        })
                    }), o.map((e, a) => "string" == typeof e ? (0, s.jsx)("span", {
                        className: d().pageItem,
                        onClick: () => {
                            f(e)
                        },
                        children: "\xb7\xb7\xb7"
                    }, a) : (0, s.jsx)("span", {
                        className: "".concat(d().pageItem, " ").concat(t == e && d().active),
                        onClick: () => {
                            u(e)
                        },
                        children: e
                    }, a)), (0, s.jsx)("div", {
                        className: "".concat(d().next, " ").concat(t == l && d().disable),
                        onClick: () => {
                            a(e => e >= l ? e : e + 1)
                        },
                        children: (0, s.jsx)(n.ds, {
                            className: "rotate-[-90deg]"
                        })
                    })]
                })
            }
        },
        63193: function(e) {
            e.exports = {
                wrapper: "common-table-pagination_wrapper__c__Ud",
                pageSizeBox: "common-table-pagination_pageSizeBox__wMuta",
                select: "common-table-pagination_select__3F9wk",
                pageItem: "common-table-pagination_pageItem__SV0DW",
                active: "common-table-pagination_active__LwUiC",
                pre: "common-table-pagination_pre__qm_rf",
                next: "common-table-pagination_next__BGZjk",
                disable: "common-table-pagination_disable__mS56_",
                selectContent: "common-table-pagination_selectContent__4Fz1M"
            }
        }
    }
]);