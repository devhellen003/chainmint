"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1711], {
        34959: function(e, t, a) {
            a.r(t);
            var l = a(85893),
                n = a(93849),
                i = a(67294);
            let s = (0, i.forwardRef)((e, t) => {
                let {
                    src: a,
                    keepSrc: s,
                    ...o
                } = e, r = (0, i.useMemo)(() => a && a.startsWith("http") || !a || s ? a : (0, n.vA)(a), [s, a]);
                return (0, l.jsx)("img", {
                    src: r,
                    ...o
                })
            });
            t.default = s
        },
        35294: function(e, t, a) {
            a.r(t);
            var l = a(85893),
                n = a(48582),
                i = a(94184),
                s = a.n(i),
                o = a(34959);
            t.default = e => (0, l.jsxs)("div", {
                className: s()("min-w-[147px] h-22 bg-claim-bt-bg shadow-claim-bt rounded-xl px-12 flex items-center justify-center gap-5 transition-all duration-1000", {
                    "opacity-0 scale-0": !e.show,
                    "opacity-100 scale-100": e.show
                }),
                onClick: e.onClick,
                children: [e.showLogo && (0, l.jsx)(o.default, {
                    className: "w-13 h-auto",
                    src: "/images/nftscan-icon.png",
                    alt: "nftscan logo",
                    keepSrc: !0
                }), (0, l.jsx)(n.Z, {
                    loading: e.loading,
                    className: "text-base text-black",
                    loadinWithChildren: !0,
                    children: e.children
                })]
            })
        },
        57698: function(e, t, a) {
            a.r(t);
            var l = a(85893),
                n = a(67294);
            let i = (e, t) => {
                    e.beginPath();
                    let a = e.createRadialGradient(t.x, t.y, 0, t.x, t.y, 3);
                    a.addColorStop(0, "#ffffff"), a.addColorStop(1, "#ffffff1f"), e.globalAlpha = t.opacity, e.arc(t.x, t.y, t.r, 0, 2 * Math.PI), e.fillStyle = a, e.closePath(), e.fill()
                },
                s = (e, t, a, l) => {
                    for (let n = 0; n < a; n++) {
                        let a = e.height * Math.random(),
                            n = a - e.height * Math.random();
                        "down" === l && (n = a + e.height * Math.random()), t.push({
                            x: e.width * Math.random(),
                            y: a,
                            v: Math.random() + .1,
                            minY: n,
                            r: 6 * Math.random(),
                            opacity: .6 * Math.random()
                        })
                    }
                },
                o = (e, t, a, l) => {
                    if ("up" === l) {
                        if (a.y -= a.v, a.y < a.minY + .2 * a.minY && (a.opacity -= .01), a.y <= a.minY - 2 * a.r) {
                            let n = t.indexOf(a);
                            t.splice(n, 1), s(e, t, 1, l)
                        }
                    } else if (a.y += a.v, a.y > a.minY + .2 * a.minY && (a.opacity -= .01), a.y >= a.minY - 2 * a.r) {
                        let n = t.indexOf(a);
                        t.splice(n, 1), s(e, t, 1, l)
                    }
                };
            t.default = e => {
                let t = (0, n.useRef)(null),
                    a = (0, n.useCallback)((e, a) => {
                        let l = t.current,
                            n = l.getBoundingClientRect();
                        l.width = n.width * window.devicePixelRatio, l.height = n.height * window.devicePixelRatio;
                        let r = () => {
                            let e = l.getBoundingClientRect();
                            l.width = e.width, l.height = e.height
                        };
                        window.addEventListener("resize", r);
                        let c = l.getContext("2d"),
                            d = [],
                            u = null,
                            h = () => {
                                for (let t of (c.clearRect(0, 0, l.width, l.height), d)) i(c, t), o(l, d, t, e);
                                u = requestAnimationFrame(() => {
                                    h()
                                })
                            };
                        return s(l, d, a, e), h(), () => {
                            null !== u && cancelAnimationFrame(u), window.removeEventListener("resize", r)
                        }
                    }, []);
                return (0, n.useEffect)(() => {
                    let t = null;
                    return e.active && setTimeout(() => {
                        t = a(e.direction, e.lightCount)
                    }, 600), () => {
                        t && t()
                    }
                }, [e.lightCount, e.direction, e.active]), (0, l.jsx)("canvas", {
                    className: e.className,
                    ref: t
                })
            }
        },
        61711: function(e, t, a) {
            a.r(t), a.d(t, {
                default: function() {
                    return M
                }
            });
            var l, n, i = a(85893),
                s = a(42742),
                o = a(56733),
                r = a(1656),
                c = a(42054),
                d = a(97867),
                u = a(44538),
                h = a(67294),
                f = a(69077),
                m = a(93849),
                p = a(12619);
            let g = e => {
                    let {
                        chain: t
                    } = (0, f.LN)(), {
                        address: a
                    } = (0, p.t)(), {
                        openConnectModal: l
                    } = (0, u.We)(), {
                        openChainModal: n
                    } = (0, u.iC)(), [i, s] = (0, h.useState)(!0);
                    return (0, h.useEffect)(() => {
                        t && a && s(e === t.id && !(0, m.xb)(a))
                    }, [a, t, e]), {
                        valid: i,
                        check: i => {
                            if (!a && l) {
                                l();
                                return
                            }
                            if (!t || t.id !== e) {
                                n && n();
                                return
                            }
                            i && i()
                        }
                    }
                },
                x = () => {
                    let e = (0, h.useCallback)(e => new Promise(t => {
                        let a = new Image;
                        a.src = e, a.onload = () => {
                            t("1")
                        }, a.onerror = () => {
                            t("1")
                        }
                    }), []);
                    return (0, h.useCallback)(async t => {
                        let a = [];
                        return t.forEach(t => {
                            a.push(e(t))
                        }), await Promise.all(a)
                    }, [])
                };
            var w = a(91132),
                y = a(13989),
                b = a(94184),
                v = a.n(b),
                C = a(40406),
                j = a(83253),
                k = a.n(j),
                N = a(42238),
                S = a.n(N),
                E = a(34959),
                R = a(35294),
                z = a(57698);
            (l = n || (n = {}))[l.init = 0] = "init", l[l.showModal = 1] = "showModal", l[l.showModalContent = 2] = "showModalContent", l[l.showAdditon = 3] = "showAdditon", l[l.showBt = 4] = "showBt";
            var M = e => {
                let t = (0, r.jC)(),
                    a = (0, C.VY)(),
                    {
                        switchNetworkAsync: l
                    } = (0, f.g0)(),
                    {
                        valid: n
                    } = g(o.SP.id),
                    u = x(),
                    [p, b] = (0, h.useState)(0),
                    [j, N] = (0, h.useState)(),
                    [M, Y] = (0, h.useState)(!1),
                    [A, O] = (0, h.useState)(!1),
                    [_, B] = (0, h.useState)(!1),
                    [F, L] = (0, h.useState)(),
                    [T, P] = (0, h.useState)(),
                    [q, I] = (0, h.useState)(""),
                    [G, V] = (0, h.useState)(!1),
                    H = (0, h.useRef)(),
                    {
                        isMobile: W
                    } = (0, c.XA)(),
                    {
                        writeAsync: D
                    } = (0, f.GG)({
                        address: s.m2,
                        abi: s.hh,
                        functionName: "claim"
                    }),
                    {
                        isSuccess: U
                    } = (0, f.BX)({
                        hash: F
                    }),
                    X = (e, t) => {
                        e && setTimeout(() => {
                            B(!0)
                        }, t)
                    },
                    Z = () => {
                        document.documentElement.style.overflow = "hidden", b(1), setTimeout(() => {
                            b(2), j.claimed ? (et(), X(j.claimed, 100)) : P({
                                transform: "rotateY(720deg) scale(1)"
                            }), setTimeout(() => {
                                b(3), setTimeout(() => {
                                    b(4)
                                }, 300)
                            }, 300)
                        }, 200)
                    },
                    J = () => {
                        document.documentElement.style.overflow = "auto", b(0), P({
                            transform: "rotateY(0deg) scale(0)"
                        }), B(!1), j.claimed && ea()
                    },
                    K = async () => {
                        if (j && !A && j.token_id) {
                            O(!0);
                            try {
                                let e = await D({
                                    args: [j.token_id]
                                });
                                L(e.hash)
                            } catch (l) {
                                O(!1);
                                let e = l.message,
                                    t = e;
                                e.includes("incorrect token owner") ? t = "Activation failed, the owner does not match" : e.includes("token has already been claimed") ? t = "You have already activated, no need to activate again" : e.includes("Unable to decode signature") && (t = "Activation failed, token ID does not exist"), a.error(t), $(!0)
                            }
                        }
                    },
                    Q = async () => {
                        l && (Y(!0), l(o.SP.id).finally(() => {
                            Y(!1)
                        }))
                    },
                    {
                        run: $
                    } = (0, d.b)(e => ({
                        url: "/api/tree/green-id",
                        method: "get",
                        params: {
                            isRefresh: e
                        }
                    }), {
                        onSuccess: (e, t) => {
                            N(e), I(e.content_uri);
                            let a = t[0];
                            e.claimed && a && (X(e.claimed, 400), P({
                                transform: "rotateY(540deg) scale(1)"
                            }), w.c.notify(w.d.USER_INFO_REFRESH), w.c.notify(w.d.ENERGY_REFRESH))
                        },
                        onError: () => {
                            O(!1)
                        }
                    }),
                    ee = (0, h.useMemo)(() => {
                        if (!j) return "";
                        let e = Number(j.addition || "0");
                        return e > 0 ? "".concat(Number(j.addition).toFixed(1), "%") : ""
                    }, [j]);
                (0, h.useEffect)(() => {
                    U && setTimeout(() => {
                        $(!0)
                    }, 1e3)
                }, [U]), (0, h.useEffect)(() => {
                    P({
                        transform: "rotateY(0deg) scale(0)"
                    }), $()
                }, []), (0, h.useEffect)(() => {
                    let e = ["/forest/ic-box.png"];
                    for (let t = 0; t < 9; t++) e.push("/forest/light/".concat(t + 1, ".png"));
                    u(e.map(e => (0, m.vA)(e)))
                }, []);
                let et = (0, h.useCallback)(() => {
                        let e = document.querySelector("#green-id-small"),
                            t = document.querySelector("#green-id-card"),
                            a = document.querySelector("#app-root");
                        t && e && a && (H.current = e.cloneNode(!0), e.classList.add("opacity-0"), en({
                            startRect: e.getBoundingClientRect(),
                            targetRect: t.getBoundingClientRect(),
                            cloneElement: H.current,
                            appRoot: a
                        }))
                    }, [G]),
                    ea = (0, h.useCallback)(() => {
                        let e = document.querySelector("#green-id-small"),
                            t = document.querySelector("#green-id-card"),
                            a = document.querySelector("#app-root");
                        t && e && a && H.current && en({
                            startRect: t.getBoundingClientRect(),
                            targetRect: e.getBoundingClientRect(),
                            cloneElement: H.current,
                            appRoot: a,
                            moveEnd: () => {
                                a.removeChild(H.current), e.classList.remove("opacity-0")
                            }
                        })
                    }, [G]),
                    el = (0, h.useCallback)(() => {
                        if ("undefined" == typeof document) return !1;
                        let e = new(S());
                        return !("Safari" === e.getBrowser().name || W && ["Mac OS", "iOS"].includes(e.getOS().name || ""))
                    }, [W]);
                (0, h.useEffect)(() => {
                    V(el())
                }, [el]);
                let en = e => {
                    let {
                        startRect: t,
                        targetRect: a,
                        cloneElement: l,
                        appRoot: n,
                        moveEnd: i
                    } = e;
                    l.classList.remove("translate-x-[-50%]"), l.style = {}, l.style.position = "absolute", l.style.zIndex = 99999, l.style.left = "".concat(t.x, "px"), l.style.top = "".concat(t.y + window.scrollY, "px"), l.style.width = "".concat(t.width, "px"), l.style.height = "".concat(t.height, "px"), n.appendChild(l), setTimeout(() => {
                        if (G) {
                            let e = a.x - t.x,
                                n = a.y - t.y,
                                i = a.width / t.width,
                                s = a.height / t.height;
                            l.style.transformOrigin = "0 0", l.style.transform = "translate(".concat(e, "px, ").concat(n, "px) scale(").concat(i, ", ").concat(s, ")")
                        } else l.style.width = "".concat(a.width, "px"), l.style.height = "".concat(a.height, "px"), l.style.left = "".concat(a.x, "px"), l.style.top = "".concat(a.y, "px")
                    }, 100), setTimeout(() => {
                        i && i()
                    }, 600)
                };
                return ((0, h.useEffect)(() => {
                    let e = w.c.subscribe([{
                        name: w.d.INJECT,
                        callback: e => {
                            j && I("".concat(j.content_uri, "?=").concat(Math.random()))
                        }
                    }]);
                    return () => {
                        e.unsubscribe()
                    }
                }, [j]), j) ? (0, i.jsxs)(i.Fragment, {
                    children: [j.claimed ? (0, i.jsxs)("div", {
                        className: "absolute top-[-282px] lg:top-[-292px] left-4 lg:-left-2 cursor-pointer",
                        onClick: Z,
                        children: [(0, i.jsx)(E.default, {
                            className: "w-auto h-[55px]",
                            src: "/forest/ic-green-id.png",
                            alt: "green id"
                        }), (0, i.jsx)(E.default, {
                            id: "green-id-small",
                            className: v()("w-[31px] h-[40px] absolute left-[50%] translate-x-[-50%] top-[-10px] will-change-transform ease-in-out duration-300", {
                                "transition-transform": G,
                                "transition-size-positon": !G
                            }),
                            src: q,
                            alt: "green id nft"
                        })]
                    }) : (0, i.jsxs)("div", {
                        className: "absolute top-[-152px] right-[22%] lg:top-[-142px] lg:right-[28%] z-[80]",
                        children: [(0, i.jsx)("div", {
                            className: "w-[70%] h-[70%] green-id-box-light-anim absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] z-0"
                        }), (0, i.jsx)(E.default, {
                            className: "w-auto h-[50px] lg:h-[120px] relative z-10 cursor-pointer",
                            src: "/forest/ic-box.png",
                            alt: "green id box",
                            onClick: Z
                        })]
                    }), (0, i.jsx)(k(), {
                        isOpen: p > 0,
                        shouldCloseOnOverlayClick: !0,
                        shouldCloseOnEsc: !0,
                        ariaHideApp: !1,
                        onRequestClose: J,
                        style: {
                            overlay: {
                                zIndex: 99,
                                background: "rgba(0,0,0,0.85)"
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
                        className: "flex items-center justify-center",
                        children: (0, i.jsxs)("div", {
                            className: "flex flex-col items-center justify-center w-[336px] h-[666px] lg:w-[380px] lg:h-[754px] relative",
                            children: [p >= 4 && (0, i.jsx)("div", {
                                className: "text-white w-16 h-16 flex items-center justify-center absolute right-[-12px] top-[60px] lg:right-[-50px] lg:top-[100px] cursor-pointer z-50 rounded-full border border-white",
                                onClick: J,
                                children: (0, i.jsx)(y.sZ, {})
                            }), j.claimed && (0, i.jsxs)("div", {
                                className: v()("w-[336px] lg:w-[380px] absolute left-0 top-0 z-0 transition-all duration-[600ms]", {
                                    "opacity-0 scale-0": !_,
                                    "opacity-100 scale-100": _
                                }),
                                children: [(0, i.jsx)(z.default, {
                                    className: "absolute left-[8.5%] top-0 pointer-events-none w-[83%] h-[150px]",
                                    direction: "up",
                                    lightCount: 50,
                                    active: _
                                }), (0, i.jsx)(E.default, {
                                    className: "w-full h-auto",
                                    src: "/forest/light/".concat(((null == t ? void 0 : t.level) || 0) + 1, ".png"),
                                    alt: "green id box"
                                }), (0, i.jsx)(z.default, {
                                    className: "absolute left-[8.5%] bottom-0 pointer-events-none w-[83%] h-[150px]",
                                    direction: "down",
                                    lightCount: 50,
                                    active: _
                                })]
                            }), (0, i.jsx)("div", {
                                id: "green-id-card",
                                className: "w-[280px] h-[359px] lg:w-[320px] lg:h-[410px]",
                                style: {
                                    perspective: "800px",
                                    perspectiveOrigin: "50% 50%"
                                },
                                children: (0, i.jsxs)("div", {
                                    className: v()("w-full h-full relative transition-all duration-[2000ms] z-10 ease-in-out", {
                                        "!duration-[1200ms]": j.claimed && U
                                    }),
                                    style: {
                                        transformStyle: "preserve-3d",
                                        backfaceVisibility: "hidden",
                                        ...T
                                    },
                                    children: [(0, i.jsx)("div", {
                                        className: v()("w-full h-full absolute left-0 top-0 rounded-[36px] z-0"),
                                        style: {
                                            backfaceVisibility: "hidden",
                                            transform: "rotateY(180deg)"
                                        },
                                        children: j.claimed ? (0, i.jsx)(E.default, {
                                            className: "w-full h-full relative z-10",
                                            src: q,
                                            alt: "green id nft"
                                        }) : (0, i.jsx)(E.default, {
                                            className: "w-full h-full relative z-10",
                                            src: "/nft/unclaimed-back.png",
                                            alt: "green id nft"
                                        })
                                    }), (0, i.jsx)(E.default, {
                                        className: "w-full h-full relative z-10",
                                        src: j.claimed ? q : "/nft/unclaimed.png",
                                        alt: "green id box",
                                        style: {
                                            backfaceVisibility: "hidden"
                                        }
                                    })]
                                })
                            }), (0, i.jsxs)("div", {
                                className: v()("absolute left-[50%] translate-x-[-50%] bottom-[50px] flex flex-col items-center gap-[20px] z-20"),
                                children: [ee && (0, i.jsxs)("span", {
                                    className: v()("text-[20px] leading-[28px] font-medium text-white break-keep whitespace-nowrap transition-all duration-1000", {
                                        "opacity-0 scale-0": p < 3,
                                        "opacity-100 scale-100": p >= 3
                                    }),
                                    children: ["GreenID Boost: ", ee]
                                }), j.claimed ? (0, i.jsx)(R.default, {
                                    loading: !1,
                                    showLogo: !0,
                                    show: p >= 4,
                                    onClick: () => {
                                        window.open("https://mint.nftscan.com/".concat(s.m2, "/").concat(j.token_id))
                                    },
                                    children: "View on NFTScan"
                                }) : (0, i.jsx)(i.Fragment, {
                                    children: n ? (0, i.jsx)(R.default, {
                                        loading: A,
                                        showLogo: !1,
                                        show: p >= 4,
                                        onClick: K,
                                        children: "Activate it"
                                    }) : (0, i.jsx)(R.default, {
                                        loading: M,
                                        showLogo: !1,
                                        show: p >= 4,
                                        onClick: Q,
                                        children: "Activate it"
                                    })
                                })]
                            })]
                        })
                    })]
                }) : (0, i.jsx)(i.Fragment, {})
            }
        }
    }
]);