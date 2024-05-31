(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [229], {
        77183: function(e, t, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/home", function() {
                return a(15506)
            }])
        },
        15506: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(85893),
                s = a(37004),
                i = a(58799),
                l = a(70488),
                r = a(28416),
                o = a(30355),
                c = a(79231),
                m = a(94184),
                d = a.n(m),
                x = a(93503);
            t.default = () => (0, n.jsx)("main", {
                className: "bg-bg-main",
                children: (0, n.jsxs)("div", {
                    className: "w-full max-w-[1320px] px-10 mx-auto pb-[128px]",
                    children: [(0, n.jsx)("section", {
                        className: d()("pt-40", "mobile:pt-20"),
                        children: (0, n.jsxs)("div", {
                            className: d()("h-[640px] pt-[176px] bg-[url(/images/bg-1.png)] bg-contain", "mobile:h-auto mobile:pt-10 mobile:bg-none"),
                            children: [(0, n.jsx)("p", {
                                className: d()("text-3xl text-g-1", "mobile:text-2xl"),
                                children: "Welcome to Mint"
                            }), (0, n.jsxs)("p", {
                                className: d()("text-3xl text-primary", "mobile:text-2xl"),
                                children: ["Mint is the", (0, n.jsx)("br", {}), "L2 blockchain", (0, n.jsx)("br", {}), "for NFT Industry"]
                            })]
                        })
                    }), (0, n.jsx)(x.default, {}), (0, n.jsx)(s.default, {}), (0, n.jsx)(i.default, {}), (0, n.jsx)(l.default, {}), (0, n.jsx)(r.default, {}), (0, n.jsx)(o.default, {}), (0, n.jsx)(c.default, {})]
                })
            })
        },
        70488: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(85893),
                s = a(13989),
                i = a(67294),
                l = a(25675),
                r = a.n(l),
                o = a(93849),
                c = a(46066),
                m = a(57138),
                d = a(94184),
                x = a.n(d);
            t.default = () => {
                let e = (0, i.useMemo)(() => (0, o.jQ)([{
                        name: "AIGC",
                        desc: "The combination of NFT and AIGC will release great value for content creation, empowering it with the features of free circulation, trading, and payment.",
                        icon: "aigc-icon.png"
                    }, {
                        name: "RWA",
                        desc: "Brings various kinds of real world assets into NFTs and allows them to circulate and trade freely on chain.",
                        icon: "rwa-icon.png"
                    }, {
                        name: "GAME",
                        desc: "NFT is the underlying elemental asset of blockchain games, creating a more open and fair atmosphere for blockchain games.",
                        icon: "game-icon.png"
                    }, {
                        name: "PASS",
                        desc: "NFT PASS will bring about a crypto revolution to the traditional membership system, intelligentize passes more privacy-protecting and restriction-free.",
                        icon: "pass-icon.png"
                    }, {
                        name: "SOCIAL",
                        desc: "NFT is the basic essential asset of the SocialFi project, promoting smooth communication and identity recognition among people.",
                        icon: "social-icon.png"
                    }, {
                        name: "PFP",
                        desc: "PFP NFT once led the bull market of NFT. In the future, there will still be a number of creators publishing PFP NFT projects to deliver social information.",
                        icon: "pfp-icon.png"
                    }, {
                        name: "DID",
                        desc: "NFT will become the underlying asset of decentralized identity system and on-chain reputation system, a number of IDs like .eth.bnb will appear.",
                        icon: "did-icon.png"
                    }, {
                        name: "POAP",
                        desc: "POAP NFT is mainly adopted to commemorate and prove user's participation in events or honor of a kind.",
                        icon: "poap-icon.png"
                    }, {
                        name: "MUSIC",
                        desc: "NFT will play a significant role in the music field, improving music copyright protection.",
                        icon: "music-icon.png"
                    }, {
                        name: "SPORT",
                        desc: "NFT will exert a positive influence in the field of sports, promoting the development of the sports industry with innovations in NFT standards.",
                        icon: "sport-icon.png"
                    }, {
                        name: "IP BRAND",
                        desc: "The combination of traditional IP and cultural brands with NFT will release huge commercial value.",
                        icon: "ip-icon.png"
                    }, {
                        name: "EVERYTHING",
                        desc: "NFT is a highly scalable crypto asset vehicle that can theoretically package any assets, information and data we want to encapsulate.",
                        icon: "everything-icon.png"
                    }], 4), []),
                    [t, a] = (0, i.useState)(0),
                    l = e.map((e, t) => (0, n.jsx)("div", {
                        children: (0, n.jsx)("div", {
                            className: "flex flex-wrap",
                            children: e.map(e => (0, n.jsxs)("div", {
                                className: x()("flex last:mb-0 mb-32 w-1/2 gap-16 pr-16", "mobile:w-full mobile:gap-8 mobile:pr-0"),
                                children: [(0, n.jsx)("div", {
                                    className: x()("w-[160px] h-[160px] flex-shrink-0", "mobile:w-50 mobile:h-50"),
                                    children: (0, n.jsx)(r(), {
                                        className: "w-full h-full",
                                        src: "/images/".concat(e.icon),
                                        alt: "".concat(e.name, " icon"),
                                        width: 160,
                                        height: 160
                                    })
                                }), (0, n.jsxs)("div", {
                                    className: "",
                                    children: [(0, n.jsx)("h5", {
                                        className: x()("text-lg text-g-1 mb-16", "mobile:mb-4"),
                                        children: e.name
                                    }), (0, n.jsx)("p", {
                                        className: "text-base text-g-6",
                                        children: e.desc
                                    })]
                                })]
                            }, e.name))
                        })
                    }, t)),
                    d = (0, i.useRef)(null);
                return (0, n.jsxs)(m.Z, {
                    className: "relative",
                    text: ["Application", "Scenarios"],
                    children: [(0, n.jsx)(c.Z, {
                        ref: d,
                        dots: !0,
                        infinite: !1,
                        speed: 500,
                        arrows: !1,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        afterChange: e => {
                            a(e)
                        },
                        children: l
                    }), (0, n.jsxs)("div", {
                        className: x()("flex justify-end gap-16", "mobile:mt-24"),
                        children: [(0, n.jsx)("div", {
                            className: "w-24 h-24 rounded-full transition-all ".concat(0 === t ? "text-g-6 cursor-not-allowed" : "text-g-1 cursor-pointer hover:bg-g-1 hover:text-g-6"),
                            onClick: () => {
                                var e;
                                null === (e = d.current) || void 0 === e || e.slickPrev()
                            },
                            children: (0, n.jsx)(s.HD, {
                                className: ""
                            })
                        }), (0, n.jsx)("div", {
                            className: "w-24 h-24 rounded-full transition-all ".concat(2 === t ? "text-g-6 cursor-not-allowed" : "text-g-1 cursor-pointer hover:bg-g-1 hover:text-g-6"),
                            onClick: () => {
                                var e;
                                null === (e = d.current) || void 0 === e || e.slickNext()
                            },
                            children: (0, n.jsx)(s.Sr, {
                                className: ""
                            })
                        })]
                    })]
                })
            }
        },
        28416: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(85893),
                s = a(67294),
                i = a(25675),
                l = a.n(i),
                r = a(57138),
                o = a(94184),
                c = a.n(o);
            t.default = () => {
                let e = (0, s.useMemo)(() => [{
                    name: "MintCore Team",
                    desc: "Focus on constructing Mint blockchain network and core components, including open source code for blockchain, NIP functions, MRC library, cross chain bridge, sorter, and other core functions.",
                    logo: "mint-brand.png"
                }, {
                    name: "NFTScan Labs",
                    desc: "Establish Mint blockchain infrastructure, including block explorers, NFT explorer, and developer documentation systems.",
                    logo: "nftscan-brand.png"
                }], []);
                return (0, n.jsx)(r.Z, {
                    className: "",
                    text: ["Developer", "Team"],
                    children: (0, n.jsx)("div", {
                        className: "py-20 ",
                        children: e.map(e => (0, n.jsx)("div", {
                            className: "bg-primary first:mb-8",
                            children: (0, n.jsxs)("div", {
                                className: c()("flex gap-16 bg-g-10 p-16 rounded-tr-[64px]", "mobile:block mobile:text-center"),
                                children: [(0, n.jsx)(l(), {
                                    className: c()("shrink-0 w-[128px] h-[128px]", "mobile:mx-auto mobile:mb-12"),
                                    src: "/images/" + e.logo,
                                    alt: e.name + " brand",
                                    width: 128,
                                    height: 128
                                }), (0, n.jsxs)("div", {
                                    className: "flex-1",
                                    children: [(0, n.jsx)("h3", {
                                        className: "text-lg mb-16",
                                        children: e.name
                                    }), (0, n.jsx)("p", {
                                        className: "text-base",
                                        children: e.desc
                                    })]
                                })]
                            })
                        }, e.name))
                    })
                })
            }
        },
        58799: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(85893),
                s = a(57138),
                i = a(13989),
                l = a(94184),
                r = a.n(l),
                o = a(67294);
            t.default = () => {
                let e = (0, o.useMemo)(() => [{
                    name: "Lower Gas Fee",
                    logo: (0, n.jsx)(i.VS, {
                        className: "w-16 h-16"
                    })
                }, {
                    name: "Plentiful NFT Standards & NIPs",
                    logo: (0, n.jsx)(i.t_, {
                        className: "w-16 h-16"
                    })
                }, {
                    name: "Complete NFT Infrastructure",
                    logo: (0, n.jsx)(i.kv, {
                        className: "w-16 h-16"
                    })
                }, {
                    name: "Revenue Sharing with Developers",
                    logo: (0, n.jsx)(i.Cr, {
                        className: "w-16 h-16"
                    })
                }], []);
                return (0, n.jsx)(s.Z, {
                    className: "flex",
                    text: ["Forefront NFT", "Features"],
                    children: (0, n.jsx)("div", {
                        className: r()("py-20 flex gap-1", "mobile:flex-wrap"),
                        children: e.map(e => (0, n.jsxs)("div", {
                            className: "p-16 flex-1 bg-g-10",
                            children: [(0, n.jsx)("div", {
                                className: "mr-8 mb-32",
                                children: e.logo
                            }), (0, n.jsx)("p", {
                                className: "text-base text-g-1",
                                dangerouslySetInnerHTML: {
                                    __html: e.name
                                }
                            })]
                        }, e.name))
                    })
                })
            }
        },
        79231: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(85893),
                s = a(13989),
                i = a(67294),
                l = a(42742),
                r = a(57138),
                o = a(94184),
                c = a.n(o);
            t.default = () => {
                let e = (0, i.useMemo)(() => [{
                    icon: (0, n.jsx)(s.vh, {
                        className: "w-24 h-24"
                    }),
                    url: l.GT.Forum
                }, {
                    icon: (0, n.jsx)(s.qp, {
                        className: "w-24 h-24"
                    }),
                    url: l.GT.Discord
                }, {
                    icon: (0, n.jsx)(s.SV, {
                        className: "w-24 h-24"
                    }),
                    url: l.GT.Telegram
                }, {
                    icon: (0, n.jsx)(s.Ji, {
                        className: "w-24 h-24"
                    }),
                    url: l.GT.Twitter
                }, {
                    icon: (0, n.jsx)(s.tu, {
                        className: "w-24 h-24"
                    }),
                    url: l.GT.GitHub
                }, {
                    icon: (0, n.jsx)(s.SF, {
                        className: "w-24 h-24"
                    }),
                    url: l.GT.Mirror
                }], []);
                return (0, n.jsx)(r.Z, {
                    className: "relative",
                    text: ["Follow", "Mint"],
                    children: (0, n.jsx)("div", {
                        className: c()("flex items-center justify-end gap-40", "mobile:gap-2 mobile:!justify-start mobile:flex-wrap", "laptop:justify-between"),
                        children: e.map(e => (0, n.jsx)("a", {
                            className: "block border border-g-1 p-8 cursor-pointer text-g-1 bg-bg-main transition-all hover:bg-g-1 hover:text-g-10",
                            href: e.url,
                            target: "_blank",
                            children: e.icon
                        }, e.url))
                    })
                })
            }
        },
        37004: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(85893),
                s = a(13989),
                i = a(67294),
                l = a(25675),
                r = a.n(l),
                o = a(57138),
                c = a(94184),
                m = a.n(c);
            t.default = () => {
                let e = (0, i.useMemo)(() => [{
                    name: "Bitcoin",
                    time: "January 3, 2009",
                    label: "BTC",
                    logo: (0, n.jsx)(s.l_, {
                        className: "w-36 h-36"
                    })
                }, {
                    name: "Ethereum",
                    time: "July 30, 2015",
                    label: "Altcoins",
                    logo: (0, n.jsx)(s.AT, {
                        className: "w-36 h-36"
                    })
                }, {
                    name: "Mint",
                    time: "December 5, 2023",
                    label: "NFTs",
                    logo: (0, n.jsx)("div", {
                        className: "p-10 bg-g-10",
                        children: (0, n.jsx)(s.nl, {
                            className: "w-16 h-16"
                        })
                    })
                }], []);
                return (0, n.jsxs)(o.Z, {
                    className: "flex",
                    text: ["New Era", "for NFTs"],
                    children: [(0, n.jsx)("div", {
                        className: "flex-1",
                        children: e.map(e => (0, n.jsxs)("div", {
                            className: "mb-32 flex items-center last:mb-0",
                            children: [(0, n.jsx)("div", {
                                className: "mr-8",
                                children: e.logo
                            }), (0, n.jsxs)("div", {
                                className: "",
                                children: [(0, n.jsx)("h5", {
                                    className: "text-lg text-primary",
                                    children: e.name
                                }), (0, n.jsx)("p", {
                                    className: "text-base text-g-6",
                                    children: e.time
                                })]
                            }), (0, n.jsx)("div", {
                                className: "flex-1 self-start text-right",
                                children: (0, n.jsx)("div", {
                                    className: "inline-block w-44 text-center text-base text-g-10 bg-primary",
                                    children: e.label
                                })
                            })]
                        }, e.name))
                    }), (0, n.jsx)(r(), {
                        className: m()("w-[480px] h-[384px]", "mobile:hidden", "laptop:object-contain laptop:w-[360px]"),
                        src: "/images/bg-future.png",
                        width: 480,
                        height: 384,
                        alt: "Mint chain future background"
                    })]
                })
            }
        },
        93503: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(85893),
                s = a(67294),
                i = a(25675),
                l = a.n(i);
            let r = [{
                background: "linear-gradient(90deg, #FBFC04 0%, #41FFF9 100%)",
                text: "Minting",
                textCursorColor: "#41FFF9"
            }, {
                background: "linear-gradient(90deg, #4AFFEE 0%, #FF7089 100%)",
                text: "Trading",
                textCursorColor: "#FF7089"
            }, {
                background: "linear-gradient(90deg, #FF7089 2.54%, #FFE24A 100%)",
                text: "Indexing",
                textCursorColor: "#FFE24A"
            }];
            t.default = () => {
                let [e, t] = (0, s.useState)(0), [a, i] = (0, s.useState)(), o = (0, s.useCallback)((e, a) => {
                    a <= e.length ? (i(e.slice(0, a)), setTimeout(() => {
                        o(e, a + 1)
                    }, 200)) : setTimeout(() => {
                        t(e => (e + 1) % r.length)
                    }, 2e3)
                }, [e]);
                return (0, s.useEffect)(() => {
                    o(r[e].text, 1)
                }, [e, o]), (0, n.jsxs)("div", {
                    className: "pt-[176px] pb-[140px]",
                    children: [(0, n.jsx)("div", {
                        className: "h-[200px]",
                        style: {
                            "--gradientColor": r[e].background
                        },
                        children: (0, n.jsx)("span", {
                            className: "text-[180px] font-bold leading-[200px] mb-16 text-cursor-blink mobile:text-[56px]",
                            style: {
                                background: "var(--gradientColor)",
                                backgroundClip: "text",
                                "-webkit-text-fill-color": "transparent",
                                "--text-cursor-color": r[e].textCursorColor
                            },
                            children: a
                        })
                    }), (0, n.jsx)("p", {
                        className: "mb-16 text-[40px] font-semibold text-white mobile:text-[24px] mobile:mb-8",
                        children: "NFT Assets on Mint Blockchain"
                    }), (0, n.jsxs)("div", {
                        className: "flex items-center mobile:block",
                        children: [(0, n.jsx)("p", {
                            className: "text-[20px] text-white mr-6 mobile:mb-4",
                            children: "Powered by"
                        }), (0, n.jsxs)("div", {
                            className: "flex items-center gap-8 mobile:gap-2",
                            children: [(0, n.jsx)(l(), {
                                className: "w-16 h-16",
                                src: "/images/op-icon.png",
                                alt: "Optimism Logo",
                                width: 32,
                                height: 32
                            }), (0, n.jsx)("div", {
                                className: "border-r-[1px] border-r-[#979797] h-[25px]"
                            }), (0, n.jsx)(l(), {
                                className: "w-16 h-16",
                                src: "/images/nftscan-icon.png",
                                alt: "NFTScan Logo",
                                width: 32,
                                height: 32
                            })]
                        })]
                    })]
                })
            }
        },
        30355: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(85893),
                s = a(67294),
                i = a(94184),
                l = a.n(i),
                r = a(57138);
            t.default = () => {
                let e = (0, s.useMemo)(() => [{
                        name: "Start Mint Blockchain",
                        time: "Q4 2023",
                        text: ["NFTScan Labs and MintCore jointly launched the Mint Blockchain, L2 for NFT industry", "Launch and operate internal testnet"]
                    }, {
                        name: "Mint Blockchain Testnet",
                        time: "Q1 2024",
                        text: ["Mint issue MintPass in Q1 for early-stage Mint Blockchain advocates, everyone is welcome to mint a MintPass", "Building a strong infrastructure for Mint Testnet, including RPC nodes, bridges, explorer, wallet, and toolings that facilitate developers to build on Mint", "Mint launches Mint Forest, the “green and environmentally friendly” themed Web3 on-chain social product"]
                    }, {
                        name: "Mint Blockchain Mainnet and Superchain",
                        time: "Q2 2024",
                        text: ["Mint Blockchain integrate into superchain, becoming a big part of the NFT ecosystem within the Superchain", "The official launch of Mint blockchain mainnet, starts a new era of a blockchain that solely focuses on NFT industry", "NIP (NFT Improvement Proposal) is an innovative NFT asset protocol on Mint blockchain. Developers can freely initiate the creation of NFT standards and propose NFT proposals on the Mint blockchain"]
                    }, {
                        name: "Mint Mainnet Ecosystem",
                        time: "Q3 2024",
                        text: ["<b>Launch Mainnet Campaign</b><br />Join us as Mint expands its ecosystem and bolsters its infrastructure. Mint Mainnet campaign designed for users will be held", "<b>NIP Library Launch</b><br />NIP (NFT Improvement Proposal) is the NFT standard on the Mint Blockchain. NIP library aims to provide a diverse range of NFT asset issuance templates and standards"]
                    }, {
                        name: "Decentralized Sequencer LST Mining",
                        time: "Q2 2025",
                        text: ["Users holding $MINT can participate in Decentralized Sequencer LST Mining through MintPool to earn transaction fee revenue from the sequencer and $MINT rewards"]
                    }, {
                        name: "Decentralized Storage and Indexing",
                        time: "Q4 2025",
                        text: ["The MintCore team will develop a volatile storage solution specifically for NFT metadata, allowing NFT asset data to be stored securely and permanently", "The MintCore team will release a decentralized indexer for NFT asset data, allowing developers to easily obtain NFT data on chain"]
                    }], []),
                    [t, a] = (0, s.useState)(e[2].name);
                return (0, n.jsx)(r.Z, {
                    className: "",
                    text: ["Mint", "Roadmap"],
                    children: (0, n.jsx)("div", {
                        className: l()("flex h-[320px]", "mobile:block mobile:h-auto"),
                        children: e.map((e, s) => (0, n.jsxs)("article", {
                            className: l()("relative p-8 h-full box-border bg-g-10 cursor-pointer overflow-hidden transition-all ".concat(e.name === t ? "w-[474px]" : "w-49"), {
                                "bg-primary": 2 === s
                            }, {
                                "border-l border-l-line": s > 0
                            }, "mobile:w-full"),
                            onClick: () => {
                                a(e.name)
                            },
                            children: [(0, n.jsxs)("div", {
                                className: l()("w-[440px] transition-opacity overflow-hidden ".concat(t === e.name ? "opacity-100" : "opacity-0"), "mobile:opacity-100 mobile:w-full", "laptop:w-full"),
                                children: [(0, n.jsxs)("div", {
                                    className: l()("flex "),
                                    children: [(0, n.jsx)("div", {
                                        className: "flex items-center justify-center w-6 h-24 mr-4",
                                        children: (0, n.jsx)("div", {
                                            className: l()("w-6 h-6 rounded-full  ".concat(1 === s ? "bg-g-10" : "bg-g-6"))
                                        })
                                    }), (0, n.jsx)("h2", {
                                        className: l()("shrink-0 text-md font-bold pt-[13px] text-g-1 flex-1", {
                                            "text-g-10": 2 === s
                                        }),
                                        children: e.name
                                    })]
                                }), (0, n.jsx)("div", {
                                    children: e.text.map((e, t) => (0, n.jsxs)("div", {
                                        className: "flex",
                                        children: [(0, n.jsx)("div", {
                                            className: l()("w-6 text-center text-base mr-4 shrink-0", {
                                                "text-g-10": 2 === s
                                            }),
                                            children: "-"
                                        }), (0, n.jsx)("p", {
                                            className: l()("text-base", {
                                                "text-g-10": 2 === s
                                            }),
                                            dangerouslySetInnerHTML: {
                                                __html: e
                                            }
                                        })]
                                    }, t))
                                })]
                            }), (0, n.jsx)("p", {
                                className: l()("absolute bottom-8 left-8 text-base text-g-1", {
                                    "text-g-10": 2 === s
                                }, "mobile:static mobile:mt-8 mobile:text-right"),
                                children: e.time
                            })]
                        }, e.name))
                    })
                })
            }
        },
        57138: function(e, t, a) {
            "use strict";
            var n = a(85893),
                s = a(94184),
                i = a.n(s);
            t.Z = e => (0, n.jsxs)("section", {
                className: i()("mt-[128px] py-32", "mobile:mt-0"),
                children: [(0, n.jsxs)("div", {
                    className: "flex items-center mb-32",
                    children: [(0, n.jsxs)("div", {
                        className: "w-[320px] flex items-center",
                        children: [(0, n.jsx)("h3", {
                            className: "text-lg font-semibold text-g-1 mr-8",
                            children: e.text[0]
                        }), (0, n.jsx)("span", {
                            className: "text-lg text-g-1",
                            children: e.text[1]
                        })]
                    }), (0, n.jsx)("div", {
                        className: "border-t border-line flex-1"
                    })]
                }), (0, n.jsx)("div", {
                    className: i()(e.className + " pl-[320px]", "mobile:pl-0", "laptop:pl-0"),
                    children: e.children
                })]
            })
        }
    },
    function(e) {
        e.O(0, [5675, 6066, 9774, 2888, 179], function() {
            return e(e.s = 77183)
        }), _N_E = e.O()
    }
]);