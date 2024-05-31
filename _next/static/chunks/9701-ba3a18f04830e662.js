"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9701], {
        8273: function(t, e, n) {
            n.r(e), n.d(e, {
                CountUp: function() {
                    return a
                }
            });
            var r = function() {
                    return (r = Object.assign || function(t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                            for (var a in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
                        return t
                    }).apply(this, arguments)
                },
                a = function() {
                    function t(t, e, n) {
                        var a = this;
                        this.endVal = e, this.options = n, this.version = "2.8.0", this.defaults = {
                            startVal: 0,
                            decimalPlaces: 0,
                            duration: 2,
                            useEasing: !0,
                            useGrouping: !0,
                            useIndianSeparators: !1,
                            smartEasingThreshold: 999,
                            smartEasingAmount: 333,
                            separator: ",",
                            decimal: ".",
                            prefix: "",
                            suffix: "",
                            enableScrollSpy: !1,
                            scrollSpyDelay: 200,
                            scrollSpyOnce: !1
                        }, this.finalEndVal = null, this.useEasing = !0, this.countDown = !1, this.error = "", this.startVal = 0, this.paused = !0, this.once = !1, this.count = function(t) {
                            a.startTime || (a.startTime = t);
                            var e = t - a.startTime;
                            a.remaining = a.duration - e, a.useEasing ? a.countDown ? a.frameVal = a.startVal - a.easingFn(e, 0, a.startVal - a.endVal, a.duration) : a.frameVal = a.easingFn(e, a.startVal, a.endVal - a.startVal, a.duration) : a.frameVal = a.startVal + (a.endVal - a.startVal) * (e / a.duration);
                            var n = a.countDown ? a.frameVal < a.endVal : a.frameVal > a.endVal;
                            a.frameVal = n ? a.endVal : a.frameVal, a.frameVal = Number(a.frameVal.toFixed(a.options.decimalPlaces)), a.printValue(a.frameVal), e < a.duration ? a.rAF = requestAnimationFrame(a.count) : null !== a.finalEndVal ? a.update(a.finalEndVal) : a.options.onCompleteCallback && a.options.onCompleteCallback()
                        }, this.formatNumber = function(t) {
                            var e, n, r, s = (Math.abs(t).toFixed(a.options.decimalPlaces) + "").split(".");
                            if (e = s[0], n = s.length > 1 ? a.options.decimal + s[1] : "", a.options.useGrouping) {
                                r = "";
                                for (var i = 3, l = 0, o = 0, u = e.length; o < u; ++o) a.options.useIndianSeparators && 4 === o && (i = 2, l = 1), 0 !== o && l % i == 0 && (r = a.options.separator + r), l++, r = e[u - o - 1] + r;
                                e = r
                            }
                            return a.options.numerals && a.options.numerals.length && (e = e.replace(/[0-9]/g, function(t) {
                                return a.options.numerals[+t]
                            }), n = n.replace(/[0-9]/g, function(t) {
                                return a.options.numerals[+t]
                            })), (t < 0 ? "-" : "") + a.options.prefix + e + n + a.options.suffix
                        }, this.easeOutExpo = function(t, e, n, r) {
                            return n * (1 - Math.pow(2, -10 * t / r)) * 1024 / 1023 + e
                        }, this.options = r(r({}, this.defaults), n), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(e), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, "" === this.options.separator && (this.options.useGrouping = !1), this.el = "string" == typeof t ? document.getElementById(t) : t, this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", "undefined" != typeof window && this.options.enableScrollSpy && (this.error ? console.error(this.error, t) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push(function() {
                            return a.handleScroll(a)
                        }), window.onscroll = function() {
                            window.onScrollFns.forEach(function(t) {
                                return t()
                            })
                        }, this.handleScroll(this)))
                    }
                    return t.prototype.handleScroll = function(t) {
                        if (t && window && !t.once) {
                            var e = window.innerHeight + window.scrollY,
                                n = t.el.getBoundingClientRect(),
                                r = n.top + window.pageYOffset,
                                a = n.top + n.height + window.pageYOffset;
                            a < e && a > window.scrollY && t.paused ? (t.paused = !1, setTimeout(function() {
                                return t.start()
                            }, t.options.scrollSpyDelay), t.options.scrollSpyOnce && (t.once = !0)) : (window.scrollY > a || r > e) && !t.paused && t.reset()
                        }
                    }, t.prototype.determineDirectionAndSmartEasing = function() {
                        var t = this.finalEndVal ? this.finalEndVal : this.endVal;
                        if (this.countDown = this.startVal > t, Math.abs(t - this.startVal) > this.options.smartEasingThreshold && this.options.useEasing) {
                            this.finalEndVal = t;
                            var e = this.countDown ? 1 : -1;
                            this.endVal = t + e * this.options.smartEasingAmount, this.duration = this.duration / 2
                        } else this.endVal = t, this.finalEndVal = null;
                        null !== this.finalEndVal ? this.useEasing = !1 : this.useEasing = this.options.useEasing
                    }, t.prototype.start = function(t) {
                        this.error || (this.options.onStartCallback && this.options.onStartCallback(), t && (this.options.onCompleteCallback = t), this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = !1, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal))
                    }, t.prototype.pauseResume = function() {
                        this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused
                    }, t.prototype.reset = function() {
                        cancelAnimationFrame(this.rAF), this.paused = !0, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal)
                    }, t.prototype.update = function(t) {
                        cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(t), this.endVal !== this.frameVal && (this.startVal = this.frameVal, null == this.finalEndVal && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count))
                    }, t.prototype.printValue = function(t) {
                        var e;
                        if (this.el) {
                            var n = this.formattingFn(t);
                            (null === (e = this.options.plugin) || void 0 === e ? void 0 : e.render) ? this.options.plugin.render(this.el, n): "INPUT" === this.el.tagName ? this.el.value = n : "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = n : this.el.innerHTML = n
                        }
                    }, t.prototype.ensureNumber = function(t) {
                        return "number" == typeof t && !isNaN(t)
                    }, t.prototype.validateValue = function(t) {
                        var e = Number(t);
                        return this.ensureNumber(e) ? e : (this.error = "[CountUp] invalid start or end value: ".concat(t), null)
                    }, t.prototype.resetDuration = function() {
                        this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration
                    }, t
                }()
        },
        88881: function(t, e, n) {
            n.r(e);
            var r = n(85893),
                a = n(42054),
                s = n(94184),
                i = n.n(s),
                l = n(67294);
            e.default = t => {
                let {
                    isMobile: e
                } = (0, a.XA)();
                return (0, l.useEffect)(() => {
                    let n = document.querySelector("#kettle-pic"),
                        r = document.querySelector("#tree-pic"),
                        a = document.querySelector("#app-root");
                    if ("initial" === t.status || !r || !n || !a) return;
                    let s = n.getBoundingClientRect(),
                        i = r.getBoundingClientRect(),
                        l = n.cloneNode(!0);
                    l.classList.remove("opacity-0"), l.style.position = "absolute", l.style.left = "".concat(s.x, "px"), l.style.top = "".concat(s.y + window.scrollY, "px"), l.style.width = "".concat(s.width, "px"), l.style.height = "".concat(s.height, "px"), l.style.zIndex = 9999, a.appendChild(l), setTimeout(() => {
                        let t = e ? 2 : 4;
                        l.style.width = "".concat(s.width * t, "px"), l.style.height = "".concat(s.height * t, "px"), l.style.left = "".concat(i.x - 1.5 * s.width, "px"), l.style.top = "".concat(i.y + window.scrollY + i.height - s.height * t * 2, "px"), l.style.transform = "rotate(58deg)"
                    }, 100), setTimeout(() => {
                        l.style.overflow = "hidden", l.style.left = "".concat(s.x, "px"), l.style.top = "".concat(s.y + window.scrollY, "px"), l.style.width = "".concat(s.width, "px"), l.style.height = "".concat(s.height, "px"), l.style.transform = "rotate(0deg)", setTimeout(() => {
                            a.removeChild(l), t.onFinish && t.onFinish()
                        }, 700)
                    }, 3e3)
                }, [t.onFinish, t.status, e]), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("img", {
                        className: i()("w-20 h-auto", {
                            "opacity-0": "initial" !== t.status
                        }),
                        src: "https://static.mintchain.io/forest/ic-kettle.png",
                        alt: "kettle",
                        style: {
                            transform: "rotateY(180deg)"
                        }
                    }), (0, r.jsxs)("div", {
                        id: "kettle-pic",
                        className: i()("absolute w-20 h-14 transition-all duration-700 opacity-0"),
                        children: [(0, r.jsx)("img", {
                            className: i()("w-full h-full"),
                            src: "https://static.mintchain.io/forest/ic-kettle.png",
                            alt: "kettle",
                            style: {
                                transform: "rotateY(180deg)"
                            }
                        }), (0, r.jsx)("img", {
                            className: i()("w-20 h-auto absolute right-[-6px] top-0 -rotate-[42deg] scale-0 opacity-0 water-opacity-anim"),
                            src: "https://static.mintchain.io/forest/ic-water.png",
                            alt: "water"
                        }), (0, r.jsx)("img", {
                            className: i()("w-20 h-auto absolute right-[-6px] top-0 -rotate-[42deg] scale-0 opacity-0 water-opacity-anim"),
                            src: "https://static.mintchain.io/forest/ic-water.png",
                            alt: "water",
                            style: {
                                animationDelay: "1300ms"
                            }
                        })]
                    })]
                })
            }
        },
        22578: function(t, e, n) {
            n.r(e);
            var r = n(85893),
                a = n(48582),
                s = n(1656),
                i = n(97867),
                l = n(91132),
                o = n(93849),
                u = n(94184),
                c = n.n(u),
                d = n(23279),
                p = n.n(d),
                f = n(12608),
                h = n(67294),
                m = n(40406),
                x = n(28241);
            e.default = t => {
                let {
                    state: {
                        userInfo: e
                    }
                } = (0, s.Wr)(), [n, u] = (0, h.useState)([0, 0, 0, 0, 0]), [d, g] = (0, h.useState)(0), [y, b] = (0, h.useState)(0), v = (0, m.VY)(), w = (0, h.useRef)(null), j = (0, s.jC)(), E = t => {
                    b(t), u(e => e.map((n, r) => t / 100 >= r / (e.length - 1) ? 1 : 0))
                }, N = (0, h.useCallback)(t => {
                    if (!e || !w.current) return;
                    let n = Math.floor(e.availableEnergy * (t / 100));
                    g(n), w.current.value = n + "", E(t)
                }, [e]), {
                    run: V,
                    loading: S
                } = (0, i.b)((t, e) => ({
                    url: "/api/tree/inject",
                    method: "post",
                    data: {
                        energy: t,
                        address: e
                    }
                }), {
                    debounceInterval: 300,
                    onSuccess: (t, e) => {
                        l.c.notify(l.d.USER_INFO_REFRESH), l.c.notify(l.d.INJECT, e[0])
                    }
                }), C = (0, h.useCallback)(p()(t => {
                    if (!e || !w.current) return;
                    let n = (t.target.value || "").replace(/\D/g, "");
                    n > e.availableEnergy && (n = e.availableEnergy), w.current.value = n, g(n), E(Math.round(n / e.availableEnergy * 100))
                }, 300), [e]), F = t => {
                    if (!e || !w.current) return;
                    let r = Math.round(t / (n.length - 1) * e.availableEnergy);
                    w.current.value = r + "", g(r), E(Math.round(t / (n.length - 1) * 100))
                };
                return j && e ? (0, r.jsxs)("div", {
                    className: "w-full lg:w-[280px] flex flex-col bg-white rounded-lg px-8 pt-2 pb-8",
                    children: [(0, r.jsxs)("div", {
                        className: "flex items-baseline gap-2",
                        children: [(0, r.jsx)("span", {
                            className: "text-tree-text font-DINCond text-[24px]",
                            children: (0, o.uf)(e.availableEnergy)
                        }), (0, r.jsx)("span", {
                            className: "text-md text-black font-normal lg:text-base",
                            children: "ME Pool"
                        })]
                    }), (0, r.jsx)("span", {
                        className: "text-md text-black font-normal lg:text-base",
                        children: "ME available for injecting"
                    }), (0, r.jsx)("div", {
                        className: "w-full mt-10 mb-5 h-[250px] lg:h-[140px] relative",
                        children: (0, r.jsx)("div", {
                            className: "w-full h-[280px] lg:h-[225px] absolute left-0 bottom-0 flex items-center justify-center",
                            children: (0, r.jsx)(x.default, {
                                className: "w-[55%] h-full",
                                lv: j.level
                            })
                        })
                    }), (0, r.jsxs)("span", {
                        className: "text-[28px] lg:text-[20px] font-medium font-DINCond mt-6 mb-6 text-tree-text",
                        children: [(0, o.uf)(d), " ME"]
                    }), (0, r.jsxs)("div", {
                        className: "w-[calc(100%-14px)] relative left-[7px]",
                        children: [(0, r.jsx)(f.Z, {
                            value: y,
                            onChange: N
                        }), (0, r.jsx)("div", {
                            className: "w-[calc(100%+14px)] absolute left-[-7px] top-0 flex items-center justify-between",
                            children: n.map((t, e) => (0, r.jsx)("div", {
                                className: c()("w-7 h-7 rounded-full cursor-pointer", {
                                    "bg-tree-text": 1 == t,
                                    "bg-white border-[#A6F2B4] border-[2px]": 0 == t
                                }),
                                onClick: () => F(e)
                            }, e))
                        })]
                    }), (0, r.jsx)("div", {
                        className: "w-full h-[36px] border-[1px] rounded-md mt-8 flex items-center justify-center",
                        children: (0, r.jsx)("input", {
                            ref: w,
                            type: "text",
                            placeholder: "Enter ME amount to inject",
                            className: "h-[34px] w-full px-6 leading-[34px] text-base text-black font-semibold placeholder:text-sm placeholder:text-[#B8CCBB]",
                            onChange: C
                        })
                    }), (0, r.jsx)(a.Z, {
                        className: c()("h-[40px] lg:h-[32px] w-full rounded-[30px] bg-tree-text hover:bg-[#09A63D] mt-10 flex items-center justify-center gap-2", {
                            "!bg-disabled !cursor-not-allowed": d <= 0
                        }),
                        onClick: () => {
                            if (e && j) {
                                if (d <= 0) {
                                    v.show("Please select the value to be injected");
                                    return
                                }
                                t.onClose && t.onClose(), V(d, j.address)
                            }
                        },
                        loading: S,
                        disable: d <= 0,
                        children: (0, r.jsx)("span", {
                            className: "text-md lg:text-sm text-white text-center",
                            children: "Inject ME"
                        })
                    })]
                }) : (0, r.jsx)(r.Fragment, {})
            }
        },
        28241: function(t, e, n) {
            n.r(e);
            var r = n(85893),
                a = n(42054),
                s = n(93849),
                i = n(94184),
                l = n.n(i),
                o = n(67294);
            e.default = t => {
                let e = (0, a.zq)(),
                    n = (0, a.hz)(s.jZ, e(s.jZ.width)),
                    [i, u] = (0, o.useState)();
                (0, o.useEffect)(() => {
                    u(null), setTimeout(() => {
                        u(t.lv < 0 ? null : n.trees[t.lv])
                    }, 100)
                }, [t.lv, n]);
                let [c, d] = (0, o.useState)(!1), [p, f] = (0, o.useState)(0), h = () => {
                    c || (d(!0), setTimeout(() => {
                        d(!1)
                    }, 700), setTimeout(() => {
                        f(0)
                    }, 1500))
                };
                return ((0, o.useImperativeHandle)(t.onRef, () => ({
                    show: t => {
                        f(t), h()
                    }
                })), i) ? (0, r.jsxs)("div", {
                    id: t.id,
                    style: t.style,
                    className: l()("relative cursor-pointer flex flex-col items-center justify-end ".concat(t.className)),
                    onClick: h,
                    children: [(0, r.jsx)("img", {
                        src: "https://static.mintchain.io/forest/tree/pic-tree-pit.png",
                        alt: "tree",
                        className: "w-[100%] h-auto absolute bottom-0 left-[50%] translate-x-[-50%] z-0"
                    }), (0, r.jsx)("img", {
                        src: i.url,
                        alt: "tree",
                        className: l()("h-auto z-10 relative bottom-[-3%]", {
                            "tree-flip": c
                        }),
                        style: {
                            width: "".concat(i.w),
                            left: i.left ? i.left : "unset"
                        }
                    }), (0, r.jsx)("img", {
                        src: "https://static.mintchain.io/forest/tree/pic-mound.png",
                        alt: "tree",
                        className: "w-[90%] h-auto relative bottom-[6%] left-[-6%] z-20"
                    }), p > 0 && (0, r.jsxs)("span", {
                        className: l()("energy-add-anim text-[24px] font-DINCond font-medium opacity-100 absolute drop-shadow-lg bottom-[30%] z-50 text-tree-text left-[50%] translate-x-[-50%] transition-all duration-1000"),
                        children: ["+", (0, s.uf)(p), " ME"]
                    })]
                }) : (0, r.jsx)(r.Fragment, {})
            }
        },
        39701: function(t, e, n) {
            n.r(e), n.d(e, {
                default: function() {
                    return x
                }
            });
            var r = n(85893),
                a = n(67294),
                s = n(17857),
                i = n(93849),
                l = t => {
                    let {
                        number: e,
                        ...n
                    } = t, l = (0, a.useRef)(null), o = (0, a.useRef)(0), {
                        update: u
                    } = (0, s.$i)({
                        ref: l,
                        start: o.current,
                        end: e,
                        startOnMount: !0,
                        duration: .6,
                        formattingFn: i.uf
                    });
                    return (0, a.useEffect)(() => {
                        o.current = e, u(o.current)
                    }, [e]), (0, r.jsx)("span", { ...n,
                        ref: l
                    })
                },
                o = n(1656),
                u = n(94184),
                c = n.n(u),
                d = n(88881),
                p = n(22578),
                f = n(22225),
                h = n(82323),
                m = n(40034),
                x = t => {
                    let {
                        state: {
                            userInfo: e
                        }
                    } = (0, o.Wr)(), n = (0, o.AG)(), s = (0, o.jC)(), [u, x] = (0, a.useState)(""), [g, y] = (0, a.useState)("initial"), b = (0, a.useCallback)(() => {
                        y("initial")
                    }, []), v = (0, a.useCallback)(() => {
                        x(""), setTimeout(() => {
                            y("doing")
                        }, 0)
                    }, []);
                    return e ? (0, r.jsxs)("div", {
                        className: c()("w-fit absolute left-6 right-6 top-[-216px] lg:top-[-232px] lg:left-0 lg:right-0 z-40 flex flex-col items-start gap-7", {
                            "!top-[-156px] lg:!top-[-172px]": n && "nft" !== e.type
                        }),
                        children: [(0, r.jsx)(m.default, {}), (!n || "nft" === e.type) && (0, r.jsx)(f.default, {
                            title: "Inject Now",
                            show: "inject" === u,
                            onClose: () => {
                                x("")
                            },
                            overlay: (0, r.jsx)(p.default, {
                                onClose: v
                            }),
                            children: (0, r.jsxs)("div", {
                                className: c()("h-24 flex items-center shadow-tree-box relative cursor-pointer min-w-[150px] pl-30 pr-10 rounded-[24px] bg-total-energy-bg"),
                                onClick: () => {
                                    x("inject")
                                },
                                id: "inject-root",
                                children: [(0, r.jsx)("div", {
                                    className: "h-26 w-26 rounded-full flex justify-center items-center bg-white shadow-tree-box absolute left-0 -top-1",
                                    children: (0, r.jsx)(d.default, {
                                        status: g,
                                        onFinish: b
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [(0, r.jsxs)("span", {
                                        className: "text-tree-text text-[20px] leading-[28px] font-DINCond font-medium select-none",
                                        children: [(0, r.jsx)(l, {
                                            number: e.availableEnergy
                                        }), " ME"]
                                    }), (0, r.jsx)("span", {
                                        className: "text-sm text-black font-medium select-none",
                                        children: "ME Pool"
                                    })]
                                })]
                            })
                        }), s && (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsxs)("div", {
                                className: "h-15 py-2 pl-5 pr-6 bg-energy-lv-bg rounded-[15px] shadow-tree-box flex flex-row items-center gap-2 select-none",
                                children: [(0, r.jsx)("div", {
                                    className: "h-15 w-15 rounded-full overflow-hidden flex items-center justify-center",
                                    children: (0, r.jsx)("img", {
                                        src: i.jZ.trees[s.level].url,
                                        alt: "tree",
                                        className: "w-auto h-[80%]"
                                    })
                                }), (0, r.jsx)("span", {
                                    className: "text-sm text-black font-medium",
                                    children: "Level:"
                                }), (0, r.jsx)("span", {
                                    className: "text-sm text-primary font-medium",
                                    children: s.level + 1
                                }), (0, r.jsx)("span", {
                                    className: "text-sm text-black font-medium ml-4",
                                    children: "Tree ID:"
                                }), (0, r.jsxs)("span", {
                                    className: "text-sm text-primary font-medium",
                                    children: ["#", s.treeId]
                                })]
                            })
                        }), (0, r.jsx)(h.default, {})]
                    }) : (0, r.jsx)(r.Fragment, {})
                }
        },
        82323: function(t, e, n) {
            n.r(e);
            var r = n(85893),
                a = n(1656),
                s = n(93849),
                i = n(94184),
                l = n.n(i),
                o = n(11163),
                u = n(67294);
            e.default = t => {
                let [e, n] = (0, u.useState)(-1), i = (0, a.jC)(), {
                    query: {
                        id: c
                    }
                } = (0, o.useRouter)();
                return ((0, u.useEffect)(() => {
                    n(-1)
                }, [c]), (0, u.useEffect)(() => {
                    i && n(i.currentLvEnergy / i.nextLvEnergy * 100)
                }, [i]), i) ? (0, r.jsxs)("div", {
                    className: "w-[calc(100vw-24px)] lg:w-[430px] flex flex-col relative gap-2",
                    children: [(0, r.jsx)("div", {
                        className: "w-full h-10 rounded-[10px] bg-[#B27B58] border border-[#C19C62] p-[3px] overflow-hidden",
                        style: {
                            boxShadow: "0px 4px 16px 0px #00841B, 0px 0px 15.9px 0px #000 inset"
                        },
                        children: (0, r.jsx)("div", {
                            className: "w-full h-full relative rounded-[18px] overflow-hidden",
                            children: (0, r.jsx)("div", {
                                className: l()("w-full h-full relative rounded-[18px] bg-no-repeat", {
                                    "transition-all duration-1000": e >= 0
                                }),
                                style: {
                                    right: "".concat(100 - e, "%"),
                                    background: "url(https://static.mintchain.io/forest/pic-active-progress.svg)",
                                    backgroundSize: "100% auto"
                                }
                            })
                        })
                    }), s.jZ.trees[i.level + 1] && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", {
                            className: "h-16 w-16 rounded-full bg-lv-progress-next-bg absolute right-0 -top-3 border-[2px] border-[#B27B58] overflow-hidden flex items-center justify-center",
                            children: (0, r.jsx)("img", {
                                src: s.jZ.trees[i.level + 1].url,
                                alt: "tree",
                                className: "w-auto h-[80%]"
                            })
                        }), (0, r.jsxs)("span", {
                            className: "text-black text-sm font-medium mt-1 select-none",
                            children: ["Need", " ", (0, s.uf)(i.nextLvEnergy - i.usedEnergy), " ME to upgrade to Level ", i.level + 2]
                        })]
                    })]
                }) : (0, r.jsx)(r.Fragment, {})
            }
        },
        48582: function(t, e, n) {
            var r = n(85893),
                a = n(94184),
                s = n.n(a),
                i = n(41082);
            e.Z = t => (0, r.jsxs)("div", {
                onClick: e => {
                    t.loading || t.disable || !t.onClick || t.onClick(e)
                },
                className: s()("".concat(t.className, " flex items-center justify-center break-keep whitespace-nowrap"), {
                    "cursor-pointer": !t.loading,
                    "cursor-not-allowed": t.loading
                }),
                children: [!t.loading || t.loadinWithChildren ? t.children : (0, r.jsx)(r.Fragment, {}), t.loading && (0, r.jsx)(i.Z, {
                    className: s()("!m-[unset] !w-8", {
                        "!ml-2": t.loadinWithChildren
                    }),
                    color: "#FFF"
                })]
            })
        },
        17857: function(t, e, n) {
            var r = n(67294),
                a = n(8273);

            function s(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function i(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? s(Object(n), !0).forEach(function(e) {
                        var r, a;
                        r = e, a = n[e], (r = function(t) {
                            var e = function(t, e) {
                                if ("object" != typeof t || null === t) return t;
                                var n = t[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var r = n.call(t, e || "default");
                                    if ("object" != typeof r) return r;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === e ? String : Number)(t)
                            }(t, "string");
                            return "symbol" == typeof e ? e : String(e)
                        }(r)) in t ? Object.defineProperty(t, r, {
                            value: a,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[r] = a
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    })
                }
                return t
            }

            function l(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var o = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? r.useLayoutEffect : r.useEffect;

            function u(t) {
                var e = r.useRef(t);
                return o(function() {
                    e.current = t
                }), r.useCallback(function() {
                    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return e.current.apply(void 0, n)
                }, [])
            }
            var c = function(t, e) {
                    var n = e.decimal,
                        r = e.decimals,
                        s = e.duration,
                        i = e.easingFn,
                        l = e.end,
                        o = e.formattingFn,
                        u = e.numerals,
                        c = e.prefix,
                        d = e.separator,
                        p = e.start,
                        f = e.suffix,
                        h = e.useEasing,
                        m = e.useGrouping,
                        x = e.useIndianSeparators,
                        g = e.enableScrollSpy,
                        y = e.scrollSpyDelay,
                        b = e.scrollSpyOnce,
                        v = e.plugin;
                    return new a.CountUp(t, l, {
                        startVal: p,
                        duration: s,
                        decimal: n,
                        decimalPlaces: r,
                        easingFn: i,
                        formattingFn: o,
                        numerals: u,
                        separator: d,
                        prefix: c,
                        suffix: f,
                        plugin: v,
                        useEasing: h,
                        useIndianSeparators: x,
                        useGrouping: m,
                        enableScrollSpy: g,
                        scrollSpyDelay: y,
                        scrollSpyOnce: b
                    })
                },
                d = ["ref", "startOnMount", "enableReinitialize", "delay", "onEnd", "onStart", "onPauseResume", "onReset", "onUpdate"],
                p = {
                    decimal: ".",
                    separator: ",",
                    delay: null,
                    prefix: "",
                    suffix: "",
                    duration: 2,
                    start: 0,
                    decimals: 0,
                    startOnMount: !0,
                    enableReinitialize: !0,
                    useEasing: !0,
                    useGrouping: !0,
                    useIndianSeparators: !1
                };
            e.$i = function(t) {
                var e = Object.fromEntries(Object.entries(t).filter(function(t) {
                        return void 0 !== (function(t) {
                            if (Array.isArray(t)) return t
                        }(t) || function(t, e) {
                            var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                            if (null != n) {
                                var r, a, s, i, l = [],
                                    o = !0,
                                    u = !1;
                                try {
                                    if (s = (n = n.call(t)).next, 0 === e) {
                                        if (Object(n) !== n) return;
                                        o = !1
                                    } else
                                        for (; !(o = (r = s.call(n)).done) && (l.push(r.value), l.length !== e); o = !0);
                                } catch (t) {
                                    u = !0, a = t
                                } finally {
                                    try {
                                        if (!o && null != n.return && (i = n.return(), Object(i) !== i)) return
                                    } finally {
                                        if (u) throw a
                                    }
                                }
                                return l
                            }
                        }(t, 2) || function(t, e) {
                            if (t) {
                                if ("string" == typeof t) return l(t, e);
                                var n = Object.prototype.toString.call(t).slice(8, -1);
                                if ("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n) return Array.from(t);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(t, e)
                            }
                        }(t, 2) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }())[1]
                    })),
                    n = r.useMemo(function() {
                        return i(i({}, p), e)
                    }, [t]),
                    a = n.ref,
                    s = n.startOnMount,
                    o = n.enableReinitialize,
                    f = n.delay,
                    h = n.onEnd,
                    m = n.onStart,
                    x = n.onPauseResume,
                    g = n.onReset,
                    y = n.onUpdate,
                    b = function(t, e) {
                        if (null == t) return {};
                        var n, r, a = function(t, e) {
                            if (null == t) return {};
                            var n, r, a = {},
                                s = Object.keys(t);
                            for (r = 0; r < s.length; r++) n = s[r], e.indexOf(n) >= 0 || (a[n] = t[n]);
                            return a
                        }(t, e);
                        if (Object.getOwnPropertySymbols) {
                            var s = Object.getOwnPropertySymbols(t);
                            for (r = 0; r < s.length; r++) n = s[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
                        }
                        return a
                    }(n, d),
                    v = r.useRef(),
                    w = r.useRef(),
                    j = r.useRef(!1),
                    E = u(function() {
                        return c("string" == typeof a ? a : a.current, b)
                    }),
                    N = u(function(t) {
                        var e = v.current;
                        if (e && !t) return e;
                        var n = E();
                        return v.current = n, n
                    }),
                    V = u(function() {
                        var t = function() {
                            return N(!0).start(function() {
                                null == h || h({
                                    pauseResume: S,
                                    reset: C,
                                    start: O,
                                    update: F
                                })
                            })
                        };
                        f && f > 0 ? w.current = setTimeout(t, 1e3 * f) : t(), null == m || m({
                            pauseResume: S,
                            reset: C,
                            update: F
                        })
                    }),
                    S = u(function() {
                        N().pauseResume(), null == x || x({
                            reset: C,
                            start: O,
                            update: F
                        })
                    }),
                    C = u(function() {
                        N().el && (w.current && clearTimeout(w.current), N().reset(), null == g || g({
                            pauseResume: S,
                            start: O,
                            update: F
                        }))
                    }),
                    F = u(function(t) {
                        N().update(t), null == y || y({
                            pauseResume: S,
                            reset: C,
                            start: O
                        })
                    }),
                    O = u(function() {
                        C(), V()
                    }),
                    k = u(function(t) {
                        s && (t && C(), V())
                    });
                return r.useEffect(function() {
                    j.current ? o && k(!0) : (j.current = !0, k())
                }, [o, j, k, f, t.start, t.suffix, t.prefix, t.duration, t.separator, t.decimals, t.decimal, t.formattingFn]), r.useEffect(function() {
                    return function() {
                        C()
                    }
                }, [C]), {
                    start: O,
                    pauseResume: S,
                    reset: C,
                    update: F,
                    getCountUp: N
                }
            }
        }
    }
]);