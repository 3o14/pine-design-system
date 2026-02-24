(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/dist/pine-design-system.es.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>rg,
    "Button",
    ()=>Aa,
    "Checkbox",
    ()=>og,
    "CrayonThemeFilters",
    ()=>cu,
    "Dialog",
    ()=>ig,
    "Dropdown",
    ()=>sg,
    "Switch",
    ()=>ag,
    "Tab",
    ()=>cg,
    "Text",
    ()=>Ba,
    "TextField",
    ()=>lg,
    "ThemeProvider",
    ()=>ng,
    "useTheme",
    ()=>Jt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature(), _s10 = __turbopack_context__.k.signature(), _s11 = __turbopack_context__.k.signature(), _s12 = __turbopack_context__.k.signature(), _s13 = __turbopack_context__.k.signature(), _s14 = __turbopack_context__.k.signature(), _s15 = __turbopack_context__.k.signature(), _s16 = __turbopack_context__.k.signature(), _s17 = __turbopack_context__.k.signature(), _s18 = __turbopack_context__.k.signature(), _s19 = __turbopack_context__.k.signature(), _s20 = __turbopack_context__.k.signature(), _s21 = __turbopack_context__.k.signature(), _s22 = __turbopack_context__.k.signature(), _s23 = __turbopack_context__.k.signature(), _s24 = __turbopack_context__.k.signature(), _s25 = __turbopack_context__.k.signature(), _s26 = __turbopack_context__.k.signature(), _s27 = __turbopack_context__.k.signature(), _s28 = __turbopack_context__.k.signature(), _s29 = __turbopack_context__.k.signature(), _s30 = __turbopack_context__.k.signature(), _s31 = __turbopack_context__.k.signature(), _s32 = __turbopack_context__.k.signature(), _s33 = __turbopack_context__.k.signature(), _s34 = __turbopack_context__.k.signature(), _s35 = __turbopack_context__.k.signature(), _s36 = __turbopack_context__.k.signature(), _s37 = __turbopack_context__.k.signature(), _s38 = __turbopack_context__.k.signature(), _s39 = __turbopack_context__.k.signature(), _s40 = __turbopack_context__.k.signature(), _s41 = __turbopack_context__.k.signature(), _s42 = __turbopack_context__.k.signature(), _s43 = __turbopack_context__.k.signature(), _s44 = __turbopack_context__.k.signature(), _s45 = __turbopack_context__.k.signature(), _s46 = __turbopack_context__.k.signature(), _s47 = __turbopack_context__.k.signature(), _s48 = __turbopack_context__.k.signature(), _s49 = __turbopack_context__.k.signature(), _s50 = __turbopack_context__.k.signature(), _s51 = __turbopack_context__.k.signature(), _s52 = __turbopack_context__.k.signature(), _s53 = __turbopack_context__.k.signature(), _s54 = __turbopack_context__.k.signature(), _s55 = __turbopack_context__.k.signature(), _s56 = __turbopack_context__.k.signature(), _s57 = __turbopack_context__.k.signature(), _s58 = __turbopack_context__.k.signature(), _s59 = __turbopack_context__.k.signature(), _s60 = __turbopack_context__.k.signature(), _s61 = __turbopack_context__.k.signature(), _s62 = __turbopack_context__.k.signature(), _s63 = __turbopack_context__.k.signature(), _s64 = __turbopack_context__.k.signature(), _s65 = __turbopack_context__.k.signature(), _s66 = __turbopack_context__.k.signature(), _s67 = __turbopack_context__.k.signature(), _s68 = __turbopack_context__.k.signature(), _s69 = __turbopack_context__.k.signature(), _s70 = __turbopack_context__.k.signature(), _s71 = __turbopack_context__.k.signature(), _s72 = __turbopack_context__.k.signature(), _s73 = __turbopack_context__.k.signature(), _s74 = __turbopack_context__.k.signature(), _s75 = __turbopack_context__.k.signature(), _s76 = __turbopack_context__.k.signature(), _s77 = __turbopack_context__.k.signature(), _s78 = __turbopack_context__.k.signature(), _s79 = __turbopack_context__.k.signature(), _s80 = __turbopack_context__.k.signature(), _s81 = __turbopack_context__.k.signature(), _s82 = __turbopack_context__.k.signature(), _s83 = __turbopack_context__.k.signature(), _s84 = __turbopack_context__.k.signature(), _s85 = __turbopack_context__.k.signature(), _s86 = __turbopack_context__.k.signature(), _s87 = __turbopack_context__.k.signature(), _s88 = __turbopack_context__.k.signature(), _s89 = __turbopack_context__.k.signature();
var Nl = Object.defineProperty;
var ns = (e)=>{
    throw TypeError(e);
};
var Al = (e, t, n)=>t in e ? Nl(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n;
_c1 = Al;
var me = (e, t, n)=>Al(e, typeof t != "symbol" ? t + "" : t, n), wo = (e, t, n)=>t.has(e) || ns("Cannot " + n);
var E = (e, t, n)=>(wo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Te = (e, t, n)=>t.has(e) ? ns("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), de = (e, t, n, r)=>(wo(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), oe = (e, t, n)=>(wo(e, t, "access private method"), n);
var Rr = (e, t, n, r)=>({
        set _ (o){
            de(e, t, o, n);
        },
        get _ () {
            return E(e, t, r);
        }
    });
_c2 = Rr;
;
;
;
;
function ma(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object") if (Array.isArray(e)) {
        var o1 = e.length;
        for(t = 0; t < o1; t++)e[t] && (n = ma(e[t])) && (r && (r += " "), r += n);
    } else for(n in e)e[n] && (r && (r += " "), r += n);
    return r;
}
function st() {
    for(var e, t, n = 0, r = "", o1 = arguments.length; n < o1; n++)(e = arguments[n]) && (t = ma(e)) && (r && (r += " "), r += t);
    return r;
}
function Vl(e, t) {
    if (typeof e != "object" || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t);
        if (typeof r != "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(e);
}
_c3 = Vl;
function Ll(e) {
    var t = Vl(e, "string");
    return typeof t == "symbol" ? t : String(t);
}
_c4 = Ll;
function Fl(e, t, n) {
    return t = Ll(t), t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
_c5 = Fl;
function os(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(o1) {
            return Object.getOwnPropertyDescriptor(e, o1).enumerable;
        })), n.push.apply(n, r);
    }
    return n;
}
function is(e) {
    for(var t = 1; t < arguments.length; t++){
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? os(Object(n), !0).forEach(function(r) {
            Fl(e, r, n[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : os(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
    }
    return e;
}
function ss(e, t) {
    var n = {};
    for(var r in e)n[r] = t(e[r], r);
    return n;
}
var zl = (e, t, n)=>{
    for (var r of Object.keys(e)){
        var o1;
        if (e[r] !== ((o1 = t[r]) !== null && o1 !== void 0 ? o1 : n[r])) return !1;
    }
    return !0;
}, tt = (e)=>{
    var t = (n)=>{
        var r = e.defaultClassName, o1 = is(is({}, e.defaultVariants), n);
        for(var i in o1){
            var s, a = (s = o1[i]) !== null && s !== void 0 ? s : e.defaultVariants[i];
            if (a != null) {
                var c = a;
                typeof c == "boolean" && (c = c === !0 ? "true" : "false");
                var l = // @ts-expect-error
                e.variantClassNames[i][c];
                l && (r += " " + l);
            }
        }
        for (var [u, f] of e.compoundVariants)zl(u, o1, e.defaultVariants) && (r += " " + f);
        return r;
    };
    return t.variants = ()=>Object.keys(e.variantClassNames), t.classNames = {
        get base () {
            return e.defaultClassName.split(" ")[0];
        },
        get variants () {
            return ss(e.variantClassNames, (n)=>ss(n, (r)=>r.split(" ")[0]));
        }
    }, t;
}, jl = tt({
    defaultClassName: "_14w8zyq1 _14w8zyq0",
    variantClassNames: {
        size: {
            small: "_14w8zyq2",
            medium: "_14w8zyq3",
            large: "_14w8zyq4",
            xlarge: "_14w8zyq5"
        },
        variant: {
            solid: "_14w8zyq6",
            outline: "_14w8zyq7",
            subtle: "_14w8zyq8",
            weak: "_14w8zyq9"
        },
        intent: {
            primary: "_14w8zyqa",
            secondary: "_14w8zyqb",
            success: "_14w8zyqc",
            warning: "_14w8zyqd",
            danger: "_14w8zyqe",
            neutral: "_14w8zyqf"
        },
        rounded: {
            small: "_14w8zyqg",
            medium: "_14w8zyqh",
            large: "_14w8zyqi"
        }
    },
    defaultVariants: {
        size: "medium",
        variant: "solid",
        intent: "primary",
        rounded: "medium"
    },
    compoundVariants: [
        [
            {
                variant: "solid",
                intent: "primary"
            },
            "_14w8zyqj"
        ],
        [
            {
                variant: "solid",
                intent: "secondary"
            },
            "_14w8zyqk"
        ],
        [
            {
                variant: "solid",
                intent: "success"
            },
            "_14w8zyql"
        ],
        [
            {
                variant: "solid",
                intent: "warning"
            },
            "_14w8zyqm"
        ],
        [
            {
                variant: "solid",
                intent: "danger"
            },
            "_14w8zyqn"
        ],
        [
            {
                variant: "solid",
                intent: "neutral"
            },
            "_14w8zyqo"
        ],
        [
            {
                variant: "outline",
                intent: "primary"
            },
            "_14w8zyqp"
        ],
        [
            {
                variant: "outline",
                intent: "secondary"
            },
            "_14w8zyqq"
        ],
        [
            {
                variant: "outline",
                intent: "success"
            },
            "_14w8zyqr"
        ],
        [
            {
                variant: "outline",
                intent: "warning"
            },
            "_14w8zyqs"
        ],
        [
            {
                variant: "outline",
                intent: "danger"
            },
            "_14w8zyqt"
        ],
        [
            {
                variant: "outline",
                intent: "neutral"
            },
            "_14w8zyqu"
        ],
        [
            {
                variant: "subtle",
                intent: "primary"
            },
            "_14w8zyqv"
        ],
        [
            {
                variant: "subtle",
                intent: "secondary"
            },
            "_14w8zyqw"
        ],
        [
            {
                variant: "subtle",
                intent: "success"
            },
            "_14w8zyqx"
        ],
        [
            {
                variant: "subtle",
                intent: "warning"
            },
            "_14w8zyqy"
        ],
        [
            {
                variant: "subtle",
                intent: "danger"
            },
            "_14w8zyqz"
        ],
        [
            {
                variant: "subtle",
                intent: "neutral"
            },
            "_14w8zyq10"
        ],
        [
            {
                variant: "weak",
                intent: "primary"
            },
            "_14w8zyq11"
        ],
        [
            {
                variant: "weak",
                intent: "secondary"
            },
            "_14w8zyq12"
        ],
        [
            {
                variant: "weak",
                intent: "success"
            },
            "_14w8zyq13"
        ],
        [
            {
                variant: "weak",
                intent: "warning"
            },
            "_14w8zyq14"
        ],
        [
            {
                variant: "weak",
                intent: "danger"
            },
            "_14w8zyq15"
        ],
        [
            {
                variant: "weak",
                intent: "neutral"
            },
            "_14w8zyq16"
        ],
        [
            {
                variant: "outline"
            },
            "_14w8zyq17"
        ],
        [
            {
                variant: "subtle"
            },
            "_14w8zyq18"
        ]
    ]
}), Bl = "_14w8zyq19", ql = "_14w8zyq1a", as = "_97wpzp0", cs = "_97wpzp1", ls = "_6648a00", us = "_6648a01", fs = "_1w4bub20", ds = "_1w4bub21";
const Nn = {
    surface: "--pie-primary-surface",
    surfaceHover: "--pie-primary-surface-hover",
    surfaceActive: "--pie-primary-surface-active",
    text: "--pie-primary-text",
    border: "--pie-primary-border",
    weak: "--pie-primary-weak"
}, mt = (e, t = 25)=>`color-mix(in srgb, ${e} ${t}%, white)`;
function ga(e) {
    return e.length === 4 ? `#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}` : e;
}
function pi(e) {
    const n = ga(e).replace("#", "");
    return {
        r: parseInt(n.substring(0, 2), 16),
        g: parseInt(n.substring(2, 4), 16),
        b: parseInt(n.substring(4, 6), 16)
    };
}
function Hl(e) {
    const { r: t, g: n, b: r } = pi(e);
    return 0.299 * t + 0.587 * n + 0.114 * r;
}
_c6 = Hl;
function ba(e, t, n) {
    const r = (o1)=>Math.max(0, Math.min(255, Math.round(o1)));
    return `#${r(e).toString(16).padStart(2, "0")}${r(t).toString(16).padStart(2, "0")}${r(n).toString(16).padStart(2, "0")}`;
}
function hs(e, t) {
    const { r: n, g: r, b: o1 } = pi(e), i = 1 - t / 100;
    return ba(n * i, r * i, o1 * i);
}
function ps(e, t) {
    const { r: n, g: r, b: o1 } = pi(e), i = t / 100;
    return ba(n + (255 - n) * i, r + (255 - r) * i, o1 + (255 - o1) * i);
}
function Wl(e, t = !1) {
    if (!/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(e)) throw new Error(`Invalid hex color format: ${e}. Expected format: #RRGGBB or #RGB`);
    const n = ga(e), r = t ? 10 : -10, o1 = t ? 20 : -20, i = t ? ps(n, Math.abs(r)) : hs(n, Math.abs(r)), s = t ? ps(n, Math.abs(o1)) : hs(n, Math.abs(o1)), l = Hl(n) > 128 ? "#0f172a" : "#ffffff", u = i, f = mt(n, 25);
    return {
        surface: n,
        surfaceHover: i,
        surfaceActive: s,
        text: l,
        border: u,
        weak: f
    };
}
_c7 = Wl;
function Lo(e, t = document.documentElement) {
    t.style.setProperty(Nn.surface, e.surface), t.style.setProperty(Nn.surfaceHover, e.surfaceHover), t.style.setProperty(Nn.surfaceActive, e.surfaceActive), t.style.setProperty(Nn.text, e.text), t.style.setProperty(Nn.border, e.border), t.style.setProperty(Nn.weak, e.weak);
}
_c8 = Lo;
function $l(e, t, n = document.documentElement) {
    const r = Wl(e, t);
    Lo(r, n);
}
var ya = !1, Ul = (e)=>{
    ya || Kl(e);
}, Kl = (e)=>{
    if (!e) throw new Error('No adapter provided when calling "setAdapter"');
    ya = !0;
};
function ms(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(o1) {
            return Object.getOwnPropertyDescriptor(e, o1).enumerable;
        })), n.push.apply(n, r);
    }
    return n;
}
function gs(e) {
    for(var t = 1; t < arguments.length; t++){
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? ms(Object(n), !0).forEach(function(r) {
            Gl(e, r, n[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ms(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
    }
    return e;
}
function Gl(e, t, n) {
    return t = Yl(t), t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
_c9 = Gl;
function Yl(e) {
    var t = Xl(e, "string");
    return typeof t == "symbol" ? t : String(t);
}
_c10 = Yl;
function Xl(e, t) {
    if (typeof e != "object" || e === null) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t);
        if (typeof r != "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(e);
}
_c11 = Xl;
va({});
function va(e) {
    return t.withOptions = (n)=>va(gs(gs({}, e), n)), t;
    //TURBOPACK unreachable
    ;
    function t(n, ...r) {
        const o1 = typeof n == "string" ? [
            n
        ] : n.raw, { alignValues: i = !1, escapeSpecialCharacters: s = Array.isArray(n), trimWhitespace: a = !0 } = e;
        let c = "";
        for(let f = 0; f < o1.length; f++){
            let h = o1[f];
            if (s && (h = h.replace(/\\\n[ \t]*/g, "").replace(/\\`/g, "`").replace(/\\\$/g, "$").replace(/\\\{/g, "{")), c += h, f < r.length) {
                const b = i ? Zl(r[f], c) : r[f];
                c += b;
            }
        }
        const l = c.split(`
`);
        let u = null;
        for (const f of l){
            const h = f.match(/^(\s+)\S+/);
            if (h) {
                const b = h[1].length;
                u ? u = Math.min(u, b) : u = b;
            }
        }
        if (u !== null) {
            const f = u;
            c = l.map((h)=>h[0] === " " || h[0] === "	" ? h.slice(f) : h).join(`
`);
        }
        return a && (c = c.trim()), s && (c = c.replace(/\\n/g, `
`)), typeof Bun < "u" && (c = c.replace(// Matches e.g. \\u{1f60a} or \\u5F1F
        /\\u(?:\{([\da-fA-F]{1,6})\}|([\da-fA-F]{4}))/g, (f, h, b)=>{
            var g;
            const m = (g = h ?? b) !== null && g !== void 0 ? g : "";
            return String.fromCodePoint(parseInt(m, 16));
        })), c;
    }
}
function Zl(e, t) {
    if (typeof e != "string" || !e.includes(`
`)) return e;
    const r = t.slice(t.lastIndexOf(`
`) + 1).match(/^(\s+)/);
    if (r) {
        const o1 = r[1];
        return e.replace(/\n/g, `
${o1}`);
    }
    return e;
}
_c12 = Zl;
var Jl = {
    ":-moz-any-link": !0,
    ":-moz-full-screen": !0,
    ":-moz-placeholder": !0,
    ":-moz-read-only": !0,
    ":-moz-read-write": !0,
    ":-ms-fullscreen": !0,
    ":-ms-input-placeholder": !0,
    ":-webkit-any-link": !0,
    ":-webkit-full-screen": !0,
    "::-moz-color-swatch": !0,
    "::-moz-list-bullet": !0,
    "::-moz-list-number": !0,
    "::-moz-page-sequence": !0,
    "::-moz-page": !0,
    "::-moz-placeholder": !0,
    "::-moz-progress-bar": !0,
    "::-moz-range-progress": !0,
    "::-moz-range-thumb": !0,
    "::-moz-range-track": !0,
    "::-moz-scrolled-page-sequence": !0,
    "::-moz-selection": !0,
    "::-ms-backdrop": !0,
    "::-ms-browse": !0,
    "::-ms-check": !0,
    "::-ms-clear": !0,
    "::-ms-fill-lower": !0,
    "::-ms-fill-upper": !0,
    "::-ms-fill": !0,
    "::-ms-reveal": !0,
    "::-ms-thumb": !0,
    "::-ms-ticks-after": !0,
    "::-ms-ticks-before": !0,
    "::-ms-tooltip": !0,
    "::-ms-track": !0,
    "::-ms-value": !0,
    "::-webkit-backdrop": !0,
    "::-webkit-calendar-picker-indicator": !0,
    "::-webkit-inner-spin-button": !0,
    "::-webkit-input-placeholder": !0,
    "::-webkit-meter-bar": !0,
    "::-webkit-meter-even-less-good-value": !0,
    "::-webkit-meter-inner-element": !0,
    "::-webkit-meter-optimum-value": !0,
    "::-webkit-meter-suboptimum-value": !0,
    "::-webkit-outer-spin-button": !0,
    "::-webkit-progress-bar": !0,
    "::-webkit-progress-inner-element": !0,
    "::-webkit-progress-inner-value": !0,
    "::-webkit-progress-value": !0,
    "::-webkit-resizer": !0,
    "::-webkit-scrollbar-button": !0,
    "::-webkit-scrollbar-corner": !0,
    "::-webkit-scrollbar-thumb": !0,
    "::-webkit-scrollbar-track-piece": !0,
    "::-webkit-scrollbar-track": !0,
    "::-webkit-scrollbar": !0,
    "::-webkit-search-cancel-button": !0,
    "::-webkit-search-results-button": !0,
    "::-webkit-slider-runnable-track": !0,
    "::-webkit-slider-thumb": !0,
    "::after": !0,
    "::backdrop": !0,
    "::before": !0,
    "::cue": !0,
    "::file-selector-button": !0,
    "::first-letter": !0,
    "::first-line": !0,
    "::grammar-error": !0,
    "::marker": !0,
    "::placeholder": !0,
    "::selection": !0,
    "::spelling-error": !0,
    "::target-text": !0,
    "::view-transition-group": !0,
    "::view-transition-image-pair": !0,
    "::view-transition-new": !0,
    "::view-transition-old": !0,
    "::view-transition": !0,
    ":active": !0,
    ":after": !0,
    ":any-link": !0,
    ":before": !0,
    ":blank": !0,
    ":checked": !0,
    ":default": !0,
    ":defined": !0,
    ":disabled": !0,
    ":empty": !0,
    ":enabled": !0,
    ":first-child": !0,
    ":first-letter": !0,
    ":first-line": !0,
    ":first-of-type": !0,
    ":first": !0,
    ":focus-visible": !0,
    ":focus-within": !0,
    ":focus": !0,
    ":fullscreen": !0,
    ":hover": !0,
    ":in-range": !0,
    ":indeterminate": !0,
    ":invalid": !0,
    ":last-child": !0,
    ":last-of-type": !0,
    ":left": !0,
    ":link": !0,
    ":only-child": !0,
    ":only-of-type": !0,
    ":optional": !0,
    ":out-of-range": !0,
    ":placeholder-shown": !0,
    ":read-only": !0,
    ":read-write": !0,
    ":required": !0,
    ":right": !0,
    ":root": !0,
    ":scope": !0,
    ":target": !0,
    ":valid": !0,
    ":visited": !0
}, Ql = Object.keys(Jl);
[
    ...Ql
];
const An = typeof performance == "object" && performance && typeof performance.now == "function" ? performance : Date, wa = /* @__PURE__ */ new Set(), Fo = typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] == "object" && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] : {}, Ea = (e, t, n, r)=>{
    typeof Fo.emitWarning == "function" ? Fo.emitWarning(e, t, n, r) : console.error(`[${n}] ${t}: ${e}`);
};
let Wr = globalThis.AbortController, bs = globalThis.AbortSignal;
var da;
if (typeof Wr > "u") {
    bs = class {
        constructor(){
            me(this, "onabort");
            me(this, "_onabort", []);
            me(this, "reason");
            me(this, "aborted", !1);
        }
        addEventListener(r, o1) {
            this._onabort.push(o1);
        }
    }, Wr = class {
        constructor(){
            me(this, "signal", new bs());
            t();
        }
        abort(r) {
            var o1, i;
            if (!this.signal.aborted) {
                this.signal.reason = r, this.signal.aborted = !0;
                for (const s of this.signal._onabort)s(r);
                (i = (o1 = this.signal).onabort) == null || i.call(o1, r);
            }
        }
    };
    let e = ((da = Fo.env) == null ? void 0 : da.LRU_CACHE_IGNORE_AC_WARNING) !== "1";
    const t = ()=>{
        e && (e = !1, Ea("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", t));
    };
}
const eu = (e)=>!wa.has(e), rn = (e)=>e && e === Math.floor(e) && e > 0 && isFinite(e), Sa = (e)=>rn(e) ? e <= Math.pow(2, 8) ? Uint8Array : e <= Math.pow(2, 16) ? Uint16Array : e <= Math.pow(2, 32) ? Uint32Array : e <= Number.MAX_SAFE_INTEGER ? Vr : null : null;
class Vr extends Array {
    constructor(t){
        super(t), this.fill(0);
    }
}
var qn;
const vn = class vn {
    constructor(t, n){
        me(this, "heap");
        me(this, "length");
        if (!E(vn, qn)) throw new TypeError("instantiate Stack using Stack.create(n)");
        this.heap = new n(t), this.length = 0;
    }
    static create(t) {
        const n = Sa(t);
        if (!n) return [];
        de(vn, qn, !0);
        const r = new vn(t, n);
        return de(vn, qn, !1), r;
    }
    push(t) {
        this.heap[this.length++] = t;
    }
    pop() {
        return this.heap[--this.length];
    }
};
qn = new WeakMap(), Te(vn, qn, !1);
let zo = vn;
var ha, pa, Tt, ft, It, kt, Hn, Wn, We, _t, qe, Me, be, rt, dt, Qe, Ge, Nt, Ye, At, Pt, ht, Mt, cn, ot, G, Bo, Sn, $t, hr, pt, Ra, Rn, $n, pr, on, sn, qo, Lr, Fr, Pe, Ho, nr, an, Wo;
const Ji = class Ji {
    constructor(t){
        Te(this, G);
        // options that cannot be changed without disaster
        Te(this, Tt);
        Te(this, ft);
        Te(this, It);
        Te(this, kt);
        Te(this, Hn);
        Te(this, Wn);
        /**
     * {@link LRUCache.OptionsBase.ttl}
     */ me(this, "ttl");
        /**
     * {@link LRUCache.OptionsBase.ttlResolution}
     */ me(this, "ttlResolution");
        /**
     * {@link LRUCache.OptionsBase.ttlAutopurge}
     */ me(this, "ttlAutopurge");
        /**
     * {@link LRUCache.OptionsBase.updateAgeOnGet}
     */ me(this, "updateAgeOnGet");
        /**
     * {@link LRUCache.OptionsBase.updateAgeOnHas}
     */ me(this, "updateAgeOnHas");
        /**
     * {@link LRUCache.OptionsBase.allowStale}
     */ me(this, "allowStale");
        /**
     * {@link LRUCache.OptionsBase.noDisposeOnSet}
     */ me(this, "noDisposeOnSet");
        /**
     * {@link LRUCache.OptionsBase.noUpdateTTL}
     */ me(this, "noUpdateTTL");
        /**
     * {@link LRUCache.OptionsBase.maxEntrySize}
     */ me(this, "maxEntrySize");
        /**
     * {@link LRUCache.OptionsBase.sizeCalculation}
     */ me(this, "sizeCalculation");
        /**
     * {@link LRUCache.OptionsBase.noDeleteOnFetchRejection}
     */ me(this, "noDeleteOnFetchRejection");
        /**
     * {@link LRUCache.OptionsBase.noDeleteOnStaleGet}
     */ me(this, "noDeleteOnStaleGet");
        /**
     * {@link LRUCache.OptionsBase.allowStaleOnFetchAbort}
     */ me(this, "allowStaleOnFetchAbort");
        /**
     * {@link LRUCache.OptionsBase.allowStaleOnFetchRejection}
     */ me(this, "allowStaleOnFetchRejection");
        /**
     * {@link LRUCache.OptionsBase.ignoreFetchAbort}
     */ me(this, "ignoreFetchAbort");
        // computed properties
        Te(this, We);
        Te(this, _t);
        Te(this, qe);
        Te(this, Me);
        Te(this, be);
        Te(this, rt);
        Te(this, dt);
        Te(this, Qe);
        Te(this, Ge);
        Te(this, Nt);
        Te(this, Ye);
        Te(this, At);
        Te(this, Pt);
        Te(this, ht);
        Te(this, Mt);
        Te(this, cn);
        Te(this, ot);
        // conditionally set private methods related to TTL
        Te(this, Sn, ()=>{});
        Te(this, $t, ()=>{});
        Te(this, hr, ()=>{});
        /* c8 ignore stop */ Te(this, pt, ()=>!1);
        Te(this, Rn, (t)=>{});
        Te(this, $n, (t, n, r)=>{});
        Te(this, pr, (t, n, r, o1)=>{
            if (r || o1) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
            return 0;
        });
        /**
     * A String value that is used in the creation of the default string
     * description of an object. Called by the built-in method
     * `Object.prototype.toString`.
     */ me(this, ha, "LRUCache");
        const { max: n = 0, ttl: r, ttlResolution: o1 = 1, ttlAutopurge: i, updateAgeOnGet: s, updateAgeOnHas: a, allowStale: c, dispose: l, disposeAfter: u, noDisposeOnSet: f, noUpdateTTL: h, maxSize: b = 0, maxEntrySize: g = 0, sizeCalculation: m, fetchMethod: w, memoMethod: p, noDeleteOnFetchRejection: y, noDeleteOnStaleGet: v, allowStaleOnFetchRejection: S, allowStaleOnFetchAbort: R, ignoreFetchAbort: C } = t;
        if (n !== 0 && !rn(n)) throw new TypeError("max option must be a nonnegative integer");
        const x = n ? Sa(n) : Array;
        if (!x) throw new Error("invalid max value: " + n);
        if (de(this, Tt, n), de(this, ft, b), this.maxEntrySize = g || E(this, ft), this.sizeCalculation = m, this.sizeCalculation) {
            if (!E(this, ft) && !this.maxEntrySize) throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
            if (typeof this.sizeCalculation != "function") throw new TypeError("sizeCalculation set to non-function");
        }
        if (p !== void 0 && typeof p != "function") throw new TypeError("memoMethod must be a function if defined");
        if (de(this, Wn, p), w !== void 0 && typeof w != "function") throw new TypeError("fetchMethod must be a function if specified");
        if (de(this, Hn, w), de(this, cn, !!w), de(this, qe, /* @__PURE__ */ new Map()), de(this, Me, new Array(n).fill(void 0)), de(this, be, new Array(n).fill(void 0)), de(this, rt, new x(n)), de(this, dt, new x(n)), de(this, Qe, 0), de(this, Ge, 0), de(this, Nt, zo.create(n)), de(this, We, 0), de(this, _t, 0), typeof l == "function" && de(this, It, l), typeof u == "function" ? (de(this, kt, u), de(this, Ye, [])) : (de(this, kt, void 0), de(this, Ye, void 0)), de(this, Mt, !!E(this, It)), de(this, ot, !!E(this, kt)), this.noDisposeOnSet = !!f, this.noUpdateTTL = !!h, this.noDeleteOnFetchRejection = !!y, this.allowStaleOnFetchRejection = !!S, this.allowStaleOnFetchAbort = !!R, this.ignoreFetchAbort = !!C, this.maxEntrySize !== 0) {
            if (E(this, ft) !== 0 && !rn(E(this, ft))) throw new TypeError("maxSize must be a positive integer if specified");
            if (!rn(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
            oe(this, G, Ra).call(this);
        }
        if (this.allowStale = !!c, this.noDeleteOnStaleGet = !!v, this.updateAgeOnGet = !!s, this.updateAgeOnHas = !!a, this.ttlResolution = rn(o1) || o1 === 0 ? o1 : 1, this.ttlAutopurge = !!i, this.ttl = r || 0, this.ttl) {
            if (!rn(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
            oe(this, G, Bo).call(this);
        }
        if (E(this, Tt) === 0 && this.ttl === 0 && E(this, ft) === 0) throw new TypeError("At least one of max, maxSize, or ttl is required");
        if (!this.ttlAutopurge && !E(this, Tt) && !E(this, ft)) {
            const O = "LRU_CACHE_UNBOUNDED";
            eu(O) && (wa.add(O), Ea("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", O, Ji));
        }
    }
    /**
   * Do not call this method unless you need to inspect the
   * inner workings of the cache.  If anything returned by this
   * object is modified in any way, strange breakage may occur.
   *
   * These fields are private for a reason!
   *
   * @internal
   */ static unsafeExposeInternals(t) {
        return {
            // properties
            starts: E(t, Pt),
            ttls: E(t, ht),
            sizes: E(t, At),
            keyMap: E(t, qe),
            keyList: E(t, Me),
            valList: E(t, be),
            next: E(t, rt),
            prev: E(t, dt),
            get head () {
                return E(t, Qe);
            },
            get tail () {
                return E(t, Ge);
            },
            free: E(t, Nt),
            // methods
            isBackgroundFetch: (n)=>{
                var r;
                return oe(r = t, G, Pe).call(r, n);
            },
            backgroundFetch: (n, r, o1, i)=>{
                var s;
                return oe(s = t, G, Fr).call(s, n, r, o1, i);
            },
            moveToTail: (n)=>{
                var r;
                return oe(r = t, G, nr).call(r, n);
            },
            indexes: (n)=>{
                var r;
                return oe(r = t, G, on).call(r, n);
            },
            rindexes: (n)=>{
                var r;
                return oe(r = t, G, sn).call(r, n);
            },
            isStale: (n)=>{
                var r;
                return E(r = t, pt).call(r, n);
            }
        };
    }
    // Protected read-only members
    /**
   * {@link LRUCache.OptionsBase.max} (read-only)
   */ get max() {
        return E(this, Tt);
    }
    /**
   * {@link LRUCache.OptionsBase.maxSize} (read-only)
   */ get maxSize() {
        return E(this, ft);
    }
    /**
   * The total computed size of items in the cache (read-only)
   */ get calculatedSize() {
        return E(this, _t);
    }
    /**
   * The number of items stored in the cache (read-only)
   */ get size() {
        return E(this, We);
    }
    /**
   * {@link LRUCache.OptionsBase.fetchMethod} (read-only)
   */ get fetchMethod() {
        return E(this, Hn);
    }
    get memoMethod() {
        return E(this, Wn);
    }
    /**
   * {@link LRUCache.OptionsBase.dispose} (read-only)
   */ get dispose() {
        return E(this, It);
    }
    /**
   * {@link LRUCache.OptionsBase.disposeAfter} (read-only)
   */ get disposeAfter() {
        return E(this, kt);
    }
    /**
   * Return the number of ms left in the item's TTL. If item is not in cache,
   * returns `0`. Returns `Infinity` if item is in cache without a defined TTL.
   */ getRemainingTTL(t) {
        return E(this, qe).has(t) ? 1 / 0 : 0;
    }
    /**
   * Return a generator yielding `[key, value]` pairs,
   * in order from most recently used to least recently used.
   */ *entries() {
        for (const t of oe(this, G, on).call(this))E(this, be)[t] !== void 0 && E(this, Me)[t] !== void 0 && !oe(this, G, Pe).call(this, E(this, be)[t]) && (yield [
            E(this, Me)[t],
            E(this, be)[t]
        ]);
    }
    /**
   * Inverse order version of {@link LRUCache.entries}
   *
   * Return a generator yielding `[key, value]` pairs,
   * in order from least recently used to most recently used.
   */ *rentries() {
        for (const t of oe(this, G, sn).call(this))E(this, be)[t] !== void 0 && E(this, Me)[t] !== void 0 && !oe(this, G, Pe).call(this, E(this, be)[t]) && (yield [
            E(this, Me)[t],
            E(this, be)[t]
        ]);
    }
    /**
   * Return a generator yielding the keys in the cache,
   * in order from most recently used to least recently used.
   */ *keys() {
        for (const t of oe(this, G, on).call(this)){
            const n = E(this, Me)[t];
            n !== void 0 && !oe(this, G, Pe).call(this, E(this, be)[t]) && (yield n);
        }
    }
    /**
   * Inverse order version of {@link LRUCache.keys}
   *
   * Return a generator yielding the keys in the cache,
   * in order from least recently used to most recently used.
   */ *rkeys() {
        for (const t of oe(this, G, sn).call(this)){
            const n = E(this, Me)[t];
            n !== void 0 && !oe(this, G, Pe).call(this, E(this, be)[t]) && (yield n);
        }
    }
    /**
   * Return a generator yielding the values in the cache,
   * in order from most recently used to least recently used.
   */ *values() {
        for (const t of oe(this, G, on).call(this))E(this, be)[t] !== void 0 && !oe(this, G, Pe).call(this, E(this, be)[t]) && (yield E(this, be)[t]);
    }
    /**
   * Inverse order version of {@link LRUCache.values}
   *
   * Return a generator yielding the values in the cache,
   * in order from least recently used to most recently used.
   */ *rvalues() {
        for (const t of oe(this, G, sn).call(this))E(this, be)[t] !== void 0 && !oe(this, G, Pe).call(this, E(this, be)[t]) && (yield E(this, be)[t]);
    }
    /**
   * Iterating over the cache itself yields the same results as
   * {@link LRUCache.entries}
   */ [(pa = Symbol.iterator, ha = Symbol.toStringTag, pa)]() {
        return this.entries();
    }
    /**
   * Find a value for which the supplied fn method returns a truthy value,
   * similar to `Array.find()`. fn is called as `fn(value, key, cache)`.
   */ find(t, n = {}) {
        for (const r of oe(this, G, on).call(this)){
            const o1 = E(this, be)[r], i = oe(this, G, Pe).call(this, o1) ? o1.__staleWhileFetching : o1;
            if (i !== void 0 && t(i, E(this, Me)[r], this)) return this.get(E(this, Me)[r], n);
        }
    }
    /**
   * Call the supplied function on each item in the cache, in order from most
   * recently used to least recently used.
   *
   * `fn` is called as `fn(value, key, cache)`.
   *
   * If `thisp` is provided, function will be called in the `this`-context of
   * the provided object, or the cache if no `thisp` object is provided.
   *
   * Does not update age or recenty of use, or iterate over stale values.
   */ forEach(t, n = this) {
        for (const r of oe(this, G, on).call(this)){
            const o1 = E(this, be)[r], i = oe(this, G, Pe).call(this, o1) ? o1.__staleWhileFetching : o1;
            i !== void 0 && t.call(n, i, E(this, Me)[r], this);
        }
    }
    /**
   * The same as {@link LRUCache.forEach} but items are iterated over in
   * reverse order.  (ie, less recently used items are iterated over first.)
   */ rforEach(t, n = this) {
        for (const r of oe(this, G, sn).call(this)){
            const o1 = E(this, be)[r], i = oe(this, G, Pe).call(this, o1) ? o1.__staleWhileFetching : o1;
            i !== void 0 && t.call(n, i, E(this, Me)[r], this);
        }
    }
    /**
   * Delete any stale entries. Returns true if anything was removed,
   * false otherwise.
   */ purgeStale() {
        let t = !1;
        for (const n of oe(this, G, sn).call(this, {
            allowStale: !0
        }))E(this, pt).call(this, n) && (oe(this, G, an).call(this, E(this, Me)[n], "expire"), t = !0);
        return t;
    }
    /**
   * Get the extended info about a given entry, to get its value, size, and
   * TTL info simultaneously. Returns `undefined` if the key is not present.
   *
   * Unlike {@link LRUCache#dump}, which is designed to be portable and survive
   * serialization, the `start` value is always the current timestamp, and the
   * `ttl` is a calculated remaining time to live (negative if expired).
   *
   * Always returns stale values, if their info is found in the cache, so be
   * sure to check for expirations (ie, a negative {@link LRUCache.Entry#ttl})
   * if relevant.
   */ info(t) {
        const n = E(this, qe).get(t);
        if (n === void 0) return;
        const r = E(this, be)[n], o1 = oe(this, G, Pe).call(this, r) ? r.__staleWhileFetching : r;
        if (o1 === void 0) return;
        const i = {
            value: o1
        };
        if (E(this, ht) && E(this, Pt)) {
            const s = E(this, ht)[n], a = E(this, Pt)[n];
            if (s && a) {
                const c = s - (An.now() - a);
                i.ttl = c, i.start = Date.now();
            }
        }
        return E(this, At) && (i.size = E(this, At)[n]), i;
    }
    /**
   * Return an array of [key, {@link LRUCache.Entry}] tuples which can be
   * passed to {@link LRLUCache#load}.
   *
   * The `start` fields are calculated relative to a portable `Date.now()`
   * timestamp, even if `performance.now()` is available.
   *
   * Stale entries are always included in the `dump`, even if
   * {@link LRUCache.OptionsBase.allowStale} is false.
   *
   * Note: this returns an actual array, not a generator, so it can be more
   * easily passed around.
   */ dump() {
        const t = [];
        for (const n of oe(this, G, on).call(this, {
            allowStale: !0
        })){
            const r = E(this, Me)[n], o1 = E(this, be)[n], i = oe(this, G, Pe).call(this, o1) ? o1.__staleWhileFetching : o1;
            if (i === void 0 || r === void 0) continue;
            const s = {
                value: i
            };
            if (E(this, ht) && E(this, Pt)) {
                s.ttl = E(this, ht)[n];
                const a = An.now() - E(this, Pt)[n];
                s.start = Math.floor(Date.now() - a);
            }
            E(this, At) && (s.size = E(this, At)[n]), t.unshift([
                r,
                s
            ]);
        }
        return t;
    }
    /**
   * Reset the cache and load in the items in entries in the order listed.
   *
   * The shape of the resulting cache may be different if the same options are
   * not used in both caches.
   *
   * The `start` fields are assumed to be calculated relative to a portable
   * `Date.now()` timestamp, even if `performance.now()` is available.
   */ load(t) {
        this.clear();
        for (const [n, r] of t){
            if (r.start) {
                const o1 = Date.now() - r.start;
                r.start = An.now() - o1;
            }
            this.set(n, r.value, r);
        }
    }
    /**
   * Add a value to the cache.
   *
   * Note: if `undefined` is specified as a value, this is an alias for
   * {@link LRUCache#delete}
   *
   * Fields on the {@link LRUCache.SetOptions} options param will override
   * their corresponding values in the constructor options for the scope
   * of this single `set()` operation.
   *
   * If `start` is provided, then that will set the effective start
   * time for the TTL calculation. Note that this must be a previous
   * value of `performance.now()` if supported, or a previous value of
   * `Date.now()` if not.
   *
   * Options object may also include `size`, which will prevent
   * calling the `sizeCalculation` function and just use the specified
   * number if it is a positive integer, and `noDisposeOnSet` which
   * will prevent calling a `dispose` function in the case of
   * overwrites.
   *
   * If the `size` (or return value of `sizeCalculation`) for a given
   * entry is greater than `maxEntrySize`, then the item will not be
   * added to the cache.
   *
   * Will update the recency of the entry.
   *
   * If the value is `undefined`, then this is an alias for
   * `cache.delete(key)`. `undefined` is never stored in the cache.
   */ set(t, n, r = {}) {
        var h, b, g, m, w;
        if (n === void 0) return this.delete(t), this;
        const { ttl: o1 = this.ttl, start: i, noDisposeOnSet: s = this.noDisposeOnSet, sizeCalculation: a = this.sizeCalculation, status: c } = r;
        let { noUpdateTTL: l = this.noUpdateTTL } = r;
        const u = E(this, pr).call(this, t, n, r.size || 0, a);
        if (this.maxEntrySize && u > this.maxEntrySize) return c && (c.set = "miss", c.maxEntrySizeExceeded = !0), oe(this, G, an).call(this, t, "set"), this;
        let f = E(this, We) === 0 ? void 0 : E(this, qe).get(t);
        if (f === void 0) f = E(this, We) === 0 ? E(this, Ge) : E(this, Nt).length !== 0 ? E(this, Nt).pop() : E(this, We) === E(this, Tt) ? oe(this, G, Lr).call(this, !1) : E(this, We), E(this, Me)[f] = t, E(this, be)[f] = n, E(this, qe).set(t, f), E(this, rt)[E(this, Ge)] = f, E(this, dt)[f] = E(this, Ge), de(this, Ge, f), Rr(this, We)._++, E(this, $n).call(this, f, u, c), c && (c.set = "add"), l = !1;
        else {
            oe(this, G, nr).call(this, f);
            const p = E(this, be)[f];
            if (n !== p) {
                if (E(this, cn) && oe(this, G, Pe).call(this, p)) {
                    p.__abortController.abort(new Error("replaced"));
                    const { __staleWhileFetching: y } = p;
                    y !== void 0 && !s && (E(this, Mt) && ((h = E(this, It)) == null || h.call(this, y, t, "set")), E(this, ot) && ((b = E(this, Ye)) == null || b.push([
                        y,
                        t,
                        "set"
                    ])));
                } else s || (E(this, Mt) && ((g = E(this, It)) == null || g.call(this, p, t, "set")), E(this, ot) && ((m = E(this, Ye)) == null || m.push([
                    p,
                    t,
                    "set"
                ])));
                if (E(this, Rn).call(this, f), E(this, $n).call(this, f, u, c), E(this, be)[f] = n, c) {
                    c.set = "replace";
                    const y = p && oe(this, G, Pe).call(this, p) ? p.__staleWhileFetching : p;
                    y !== void 0 && (c.oldValue = y);
                }
            } else c && (c.set = "update");
        }
        if (o1 !== 0 && !E(this, ht) && oe(this, G, Bo).call(this), E(this, ht) && (l || E(this, hr).call(this, f, o1, i), c && E(this, $t).call(this, c, f)), !s && E(this, ot) && E(this, Ye)) {
            const p = E(this, Ye);
            let y;
            for(; y = p == null ? void 0 : p.shift();)(w = E(this, kt)) == null || w.call(this, ...y);
        }
        return this;
    }
    /**
   * Evict the least recently used item, returning its value or
   * `undefined` if cache is empty.
   */ pop() {
        var t;
        try {
            for(; E(this, We);){
                const n = E(this, be)[E(this, Qe)];
                if (oe(this, G, Lr).call(this, !0), oe(this, G, Pe).call(this, n)) {
                    if (n.__staleWhileFetching) return n.__staleWhileFetching;
                } else if (n !== void 0) return n;
            }
        } finally{
            if (E(this, ot) && E(this, Ye)) {
                const n = E(this, Ye);
                let r;
                for(; r = n == null ? void 0 : n.shift();)(t = E(this, kt)) == null || t.call(this, ...r);
            }
        }
    }
    /**
   * Check if a key is in the cache, without updating the recency of use.
   * Will return false if the item is stale, even though it is technically
   * in the cache.
   *
   * Check if a key is in the cache, without updating the recency of
   * use. Age is updated if {@link LRUCache.OptionsBase.updateAgeOnHas} is set
   * to `true` in either the options or the constructor.
   *
   * Will return `false` if the item is stale, even though it is technically in
   * the cache. The difference can be determined (if it matters) by using a
   * `status` argument, and inspecting the `has` field.
   *
   * Will not update item age unless
   * {@link LRUCache.OptionsBase.updateAgeOnHas} is set.
   */ has(t, n = {}) {
        const { updateAgeOnHas: r = this.updateAgeOnHas, status: o1 } = n, i = E(this, qe).get(t);
        if (i !== void 0) {
            const s = E(this, be)[i];
            if (oe(this, G, Pe).call(this, s) && s.__staleWhileFetching === void 0) return !1;
            if (E(this, pt).call(this, i)) o1 && (o1.has = "stale", E(this, $t).call(this, o1, i));
            else return r && E(this, Sn).call(this, i), o1 && (o1.has = "hit", E(this, $t).call(this, o1, i)), !0;
        } else o1 && (o1.has = "miss");
        return !1;
    }
    /**
   * Like {@link LRUCache#get} but doesn't update recency or delete stale
   * items.
   *
   * Returns `undefined` if the item is stale, unless
   * {@link LRUCache.OptionsBase.allowStale} is set.
   */ peek(t, n = {}) {
        const { allowStale: r = this.allowStale } = n, o1 = E(this, qe).get(t);
        if (o1 === void 0 || !r && E(this, pt).call(this, o1)) return;
        const i = E(this, be)[o1];
        return oe(this, G, Pe).call(this, i) ? i.__staleWhileFetching : i;
    }
    async fetch(t, n = {}) {
        const { // get options
        allowStale: r = this.allowStale, updateAgeOnGet: o1 = this.updateAgeOnGet, noDeleteOnStaleGet: i = this.noDeleteOnStaleGet, // set options
        ttl: s = this.ttl, noDisposeOnSet: a = this.noDisposeOnSet, size: c = 0, sizeCalculation: l = this.sizeCalculation, noUpdateTTL: u = this.noUpdateTTL, // fetch exclusive options
        noDeleteOnFetchRejection: f = this.noDeleteOnFetchRejection, allowStaleOnFetchRejection: h = this.allowStaleOnFetchRejection, ignoreFetchAbort: b = this.ignoreFetchAbort, allowStaleOnFetchAbort: g = this.allowStaleOnFetchAbort, context: m, forceRefresh: w = !1, status: p, signal: y } = n;
        if (!E(this, cn)) return p && (p.fetch = "get"), this.get(t, {
            allowStale: r,
            updateAgeOnGet: o1,
            noDeleteOnStaleGet: i,
            status: p
        });
        const v = {
            allowStale: r,
            updateAgeOnGet: o1,
            noDeleteOnStaleGet: i,
            ttl: s,
            noDisposeOnSet: a,
            size: c,
            sizeCalculation: l,
            noUpdateTTL: u,
            noDeleteOnFetchRejection: f,
            allowStaleOnFetchRejection: h,
            allowStaleOnFetchAbort: g,
            ignoreFetchAbort: b,
            status: p,
            signal: y
        };
        let S = E(this, qe).get(t);
        if (S === void 0) {
            p && (p.fetch = "miss");
            const R = oe(this, G, Fr).call(this, t, S, v, m);
            return R.__returned = R;
        } else {
            const R = E(this, be)[S];
            if (oe(this, G, Pe).call(this, R)) {
                const M = r && R.__staleWhileFetching !== void 0;
                return p && (p.fetch = "inflight", M && (p.returnedStale = !0)), M ? R.__staleWhileFetching : R.__returned = R;
            }
            const C = E(this, pt).call(this, S);
            if (!w && !C) return p && (p.fetch = "hit"), oe(this, G, nr).call(this, S), o1 && E(this, Sn).call(this, S), p && E(this, $t).call(this, p, S), R;
            const x = oe(this, G, Fr).call(this, t, S, v, m), N = x.__staleWhileFetching !== void 0 && r;
            return p && (p.fetch = C ? "stale" : "refresh", N && C && (p.returnedStale = !0)), N ? x.__staleWhileFetching : x.__returned = x;
        }
    }
    async forceFetch(t, n = {}) {
        const r = await this.fetch(t, n);
        if (r === void 0) throw new Error("fetch() returned undefined");
        return r;
    }
    memo(t, n = {}) {
        const r = E(this, Wn);
        if (!r) throw new Error("no memoMethod provided to constructor");
        const { context: o1, forceRefresh: i, ...s } = n, a = this.get(t, s);
        if (!i && a !== void 0) return a;
        const c = r(t, a, {
            options: s,
            context: o1
        });
        return this.set(t, c, s), c;
    }
    /**
   * Return a value from the cache. Will update the recency of the cache
   * entry found.
   *
   * If the key is not found, get() will return `undefined`.
   */ get(t, n = {}) {
        const { allowStale: r = this.allowStale, updateAgeOnGet: o1 = this.updateAgeOnGet, noDeleteOnStaleGet: i = this.noDeleteOnStaleGet, status: s } = n, a = E(this, qe).get(t);
        if (a !== void 0) {
            const c = E(this, be)[a], l = oe(this, G, Pe).call(this, c);
            return s && E(this, $t).call(this, s, a), E(this, pt).call(this, a) ? (s && (s.get = "stale"), l ? (s && r && c.__staleWhileFetching !== void 0 && (s.returnedStale = !0), r ? c.__staleWhileFetching : void 0) : (i || oe(this, G, an).call(this, t, "expire"), s && r && (s.returnedStale = !0), r ? c : void 0)) : (s && (s.get = "hit"), l ? c.__staleWhileFetching : (oe(this, G, nr).call(this, a), o1 && E(this, Sn).call(this, a), c));
        } else s && (s.get = "miss");
    }
    /**
   * Deletes a key out of the cache.
   *
   * Returns true if the key was deleted, false otherwise.
   */ delete(t) {
        return oe(this, G, an).call(this, t, "delete");
    }
    /**
   * Clear the cache entirely, throwing away all values.
   */ clear() {
        return oe(this, G, Wo).call(this, "delete");
    }
};
Tt = new WeakMap(), ft = new WeakMap(), It = new WeakMap(), kt = new WeakMap(), Hn = new WeakMap(), Wn = new WeakMap(), We = new WeakMap(), _t = new WeakMap(), qe = new WeakMap(), Me = new WeakMap(), be = new WeakMap(), rt = new WeakMap(), dt = new WeakMap(), Qe = new WeakMap(), Ge = new WeakMap(), Nt = new WeakMap(), Ye = new WeakMap(), At = new WeakMap(), Pt = new WeakMap(), ht = new WeakMap(), Mt = new WeakMap(), cn = new WeakMap(), ot = new WeakMap(), G = new WeakSet(), Bo = function() {
    const t = new Vr(E(this, Tt)), n = new Vr(E(this, Tt));
    de(this, ht, t), de(this, Pt, n), de(this, hr, (i, s, a = An.now())=>{
        if (n[i] = s !== 0 ? a : 0, t[i] = s, s !== 0 && this.ttlAutopurge) {
            const c = setTimeout(()=>{
                E(this, pt).call(this, i) && oe(this, G, an).call(this, E(this, Me)[i], "expire");
            }, s + 1);
            c.unref && c.unref();
        }
    }), de(this, Sn, (i)=>{
        n[i] = t[i] !== 0 ? An.now() : 0;
    }), de(this, $t, (i, s)=>{
        if (t[s]) {
            const a = t[s], c = n[s];
            if (!a || !c) return;
            i.ttl = a, i.start = c, i.now = r || o1();
            const l = i.now - c;
            i.remainingTTL = a - l;
        }
    });
    let r = 0;
    const o1 = ()=>{
        const i = An.now();
        if (this.ttlResolution > 0) {
            r = i;
            const s = setTimeout(()=>r = 0, this.ttlResolution);
            s.unref && s.unref();
        }
        return i;
    };
    this.getRemainingTTL = (i)=>{
        const s = E(this, qe).get(i);
        if (s === void 0) return 0;
        const a = t[s], c = n[s];
        if (!a || !c) return 1 / 0;
        const l = (r || o1()) - c;
        return a - l;
    }, de(this, pt, (i)=>{
        const s = n[i], a = t[i];
        return !!a && !!s && (r || o1()) - s > a;
    });
}, Sn = new WeakMap(), $t = new WeakMap(), hr = new WeakMap(), pt = new WeakMap(), Ra = function() {
    const t = new Vr(E(this, Tt));
    de(this, _t, 0), de(this, At, t), de(this, Rn, (n)=>{
        de(this, _t, E(this, _t) - t[n]), t[n] = 0;
    }), de(this, pr, (n, r, o1, i)=>{
        if (oe(this, G, Pe).call(this, r)) return 0;
        if (!rn(o1)) if (i) {
            if (typeof i != "function") throw new TypeError("sizeCalculation must be a function");
            if (o1 = i(r, n), !rn(o1)) throw new TypeError("sizeCalculation return invalid (expect positive integer)");
        } else throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
        return o1;
    }), de(this, $n, (n, r, o1)=>{
        if (t[n] = r, E(this, ft)) {
            const i = E(this, ft) - t[n];
            for(; E(this, _t) > i;)oe(this, G, Lr).call(this, !0);
        }
        de(this, _t, E(this, _t) + t[n]), o1 && (o1.entrySize = r, o1.totalCalculatedSize = E(this, _t));
    });
}, Rn = new WeakMap(), $n = new WeakMap(), pr = new WeakMap(), on = function*({ allowStale: t = this.allowStale } = {}) {
    if (E(this, We)) for(let n = E(this, Ge); !(!oe(this, G, qo).call(this, n) || ((t || !E(this, pt).call(this, n)) && (yield n), n === E(this, Qe)));)n = E(this, dt)[n];
}, sn = function*({ allowStale: t = this.allowStale } = {}) {
    if (E(this, We)) for(let n = E(this, Qe); !(!oe(this, G, qo).call(this, n) || ((t || !E(this, pt).call(this, n)) && (yield n), n === E(this, Ge)));)n = E(this, rt)[n];
}, qo = function(t) {
    return t !== void 0 && E(this, qe).get(E(this, Me)[t]) === t;
}, Lr = function(t) {
    var i, s;
    const n = E(this, Qe), r = E(this, Me)[n], o1 = E(this, be)[n];
    return E(this, cn) && oe(this, G, Pe).call(this, o1) ? o1.__abortController.abort(new Error("evicted")) : (E(this, Mt) || E(this, ot)) && (E(this, Mt) && ((i = E(this, It)) == null || i.call(this, o1, r, "evict")), E(this, ot) && ((s = E(this, Ye)) == null || s.push([
        o1,
        r,
        "evict"
    ]))), E(this, Rn).call(this, n), t && (E(this, Me)[n] = void 0, E(this, be)[n] = void 0, E(this, Nt).push(n)), E(this, We) === 1 ? (de(this, Qe, de(this, Ge, 0)), E(this, Nt).length = 0) : de(this, Qe, E(this, rt)[n]), E(this, qe).delete(r), Rr(this, We)._--, n;
}, Fr = function(t, n, r, o1) {
    const i = n === void 0 ? void 0 : E(this, be)[n];
    if (oe(this, G, Pe).call(this, i)) return i;
    const s = new Wr(), { signal: a } = r;
    a == null || a.addEventListener("abort", ()=>s.abort(a.reason), {
        signal: s.signal
    });
    const c = {
        signal: s.signal,
        options: r,
        context: o1
    }, l = (m, w = !1)=>{
        const { aborted: p } = s.signal, y = r.ignoreFetchAbort && m !== void 0;
        if (r.status && (p && !w ? (r.status.fetchAborted = !0, r.status.fetchError = s.signal.reason, y && (r.status.fetchAbortIgnored = !0)) : r.status.fetchResolved = !0), p && !y && !w) return f(s.signal.reason);
        const v = b;
        return E(this, be)[n] === b && (m === void 0 ? v.__staleWhileFetching ? E(this, be)[n] = v.__staleWhileFetching : oe(this, G, an).call(this, t, "fetch") : (r.status && (r.status.fetchUpdated = !0), this.set(t, m, c.options))), m;
    }, u = (m)=>(r.status && (r.status.fetchRejected = !0, r.status.fetchError = m), f(m)), f = (m)=>{
        const { aborted: w } = s.signal, p = w && r.allowStaleOnFetchAbort, y = p || r.allowStaleOnFetchRejection, v = y || r.noDeleteOnFetchRejection, S = b;
        if (E(this, be)[n] === b && (!v || S.__staleWhileFetching === void 0 ? oe(this, G, an).call(this, t, "fetch") : p || (E(this, be)[n] = S.__staleWhileFetching)), y) return r.status && S.__staleWhileFetching !== void 0 && (r.status.returnedStale = !0), S.__staleWhileFetching;
        if (S.__returned === S) throw m;
    }, h = (m, w)=>{
        var y;
        const p = (y = E(this, Hn)) == null ? void 0 : y.call(this, t, i, c);
        p && p instanceof Promise && p.then((v)=>m(v === void 0 ? void 0 : v), w), s.signal.addEventListener("abort", ()=>{
            (!r.ignoreFetchAbort || r.allowStaleOnFetchAbort) && (m(void 0), r.allowStaleOnFetchAbort && (m = (v)=>l(v, !0)));
        });
    };
    r.status && (r.status.fetchDispatched = !0);
    const b = new Promise(h).then(l, u), g = Object.assign(b, {
        __abortController: s,
        __staleWhileFetching: i,
        __returned: void 0
    });
    return n === void 0 ? (this.set(t, g, {
        ...c.options,
        status: void 0
    }), n = E(this, qe).get(t)) : E(this, be)[n] = g, g;
}, Pe = function(t) {
    if (!E(this, cn)) return !1;
    const n = t;
    return !!n && n instanceof Promise && n.hasOwnProperty("__staleWhileFetching") && n.__abortController instanceof Wr;
}, Ho = function(t, n) {
    E(this, dt)[n] = t, E(this, rt)[t] = n;
}, nr = function(t) {
    t !== E(this, Ge) && (t === E(this, Qe) ? de(this, Qe, E(this, rt)[t]) : oe(this, G, Ho).call(this, E(this, dt)[t], E(this, rt)[t]), oe(this, G, Ho).call(this, E(this, Ge), t), de(this, Ge, t));
}, an = function(t, n) {
    var o1, i, s, a;
    let r = !1;
    if (E(this, We) !== 0) {
        const c = E(this, qe).get(t);
        if (c !== void 0) if (r = !0, E(this, We) === 1) oe(this, G, Wo).call(this, n);
        else {
            E(this, Rn).call(this, c);
            const l = E(this, be)[c];
            if (oe(this, G, Pe).call(this, l) ? l.__abortController.abort(new Error("deleted")) : (E(this, Mt) || E(this, ot)) && (E(this, Mt) && ((o1 = E(this, It)) == null || o1.call(this, l, t, n)), E(this, ot) && ((i = E(this, Ye)) == null || i.push([
                l,
                t,
                n
            ]))), E(this, qe).delete(t), E(this, Me)[c] = void 0, E(this, be)[c] = void 0, c === E(this, Ge)) de(this, Ge, E(this, dt)[c]);
            else if (c === E(this, Qe)) de(this, Qe, E(this, rt)[c]);
            else {
                const u = E(this, dt)[c];
                E(this, rt)[u] = E(this, rt)[c];
                const f = E(this, rt)[c];
                E(this, dt)[f] = E(this, dt)[c];
            }
            Rr(this, We)._--, E(this, Nt).push(c);
        }
    }
    if (E(this, ot) && (s = E(this, Ye)) != null && s.length) {
        const c = E(this, Ye);
        let l;
        for(; l = c == null ? void 0 : c.shift();)(a = E(this, kt)) == null || a.call(this, ...l);
    }
    return r;
}, Wo = function(t) {
    var n, r, o1;
    for (const i of oe(this, G, sn).call(this, {
        allowStale: !0
    })){
        const s = E(this, be)[i];
        if (oe(this, G, Pe).call(this, s)) s.__abortController.abort(new Error("deleted"));
        else {
            const a = E(this, Me)[i];
            E(this, Mt) && ((n = E(this, It)) == null || n.call(this, s, a, t)), E(this, ot) && ((r = E(this, Ye)) == null || r.push([
                s,
                a,
                t
            ]));
        }
    }
    if (E(this, qe).clear(), E(this, be).fill(void 0), E(this, Me).fill(void 0), E(this, ht) && E(this, Pt) && (E(this, ht).fill(0), E(this, Pt).fill(0)), E(this, At) && E(this, At).fill(0), de(this, Qe, 0), de(this, Ge, 0), E(this, Nt).length = 0, de(this, _t, 0), de(this, We, 0), E(this, ot) && E(this, Ye)) {
        const i = E(this, Ye);
        let s;
        for(; s = i == null ? void 0 : i.shift();)(o1 = E(this, kt)) == null || o1.call(this, ...s);
    }
};
let jo = Ji;
var tu = {};
Ul(tu);
var ys = (e, t)=>{
    for(var n = t - 1; n >= 0;){
        if (e[n] === "/") return n;
        n--;
    }
    return -1;
}, nu = (e)=>{
    var t, n = e.lastIndexOf(".css");
    if (n === -1) return "";
    var r = ys(e, n);
    if (t = e.slice(r + 1, n), r === -1) return t;
    var o1 = ys(e, r - 1), i = e.slice(o1 + 1, r), s = t !== "index" ? t : i;
    return s;
}, ru = ()=>{
    var e = new jo({
        max: 500
    });
    return (t)=>{
        var n = e.get(t);
        if (n) return n;
        var r = nu(t);
        return e.set(t, r), r;
    };
};
ru();
const ou = {
    primary: {
        surface: "#8b5cf6",
        surfaceHover: "#7c3aed",
        surfaceActive: "#6d28d9",
        text: "#ffffff",
        border: "#7c3aed",
        weak: mt("#8b5cf6", 25)
    },
    secondary: {
        surface: "#475569",
        surfaceHover: "#334155",
        surfaceActive: "#1f2937",
        text: "#ffffff",
        border: "#334155",
        weak: mt("#475569", 25)
    },
    success: {
        surface: "#16a34a",
        surfaceHover: "#15803d",
        surfaceActive: "#166534",
        text: "#ffffff",
        border: "#15803d",
        weak: mt("#16a34a", 25)
    },
    warning: {
        surface: "#facc15",
        surfaceHover: "#eab308",
        surfaceActive: "#ca8a04",
        text: "#0f172a",
        border: "#eab308",
        weak: mt("#facc15", 25)
    },
    danger: {
        surface: "#ef4444",
        surfaceHover: "#dc2626",
        surfaceActive: "#b91c1c",
        text: "#ffffff",
        border: "#dc2626",
        weak: mt("#ef4444", 25)
    },
    neutral: {
        surface: "#e2e8f0",
        surfaceHover: "#cbd5f5",
        surfaceActive: "#94a3b8",
        text: "#0f172a",
        border: "#cbd5f5",
        weak: mt("#e2e8f0", 25)
    }
}, iu = {
    primary: {
        surface: "#a78bfa",
        surfaceHover: "#8b5cf6",
        surfaceActive: "#7c3aed",
        text: "#0b1120",
        border: "#8b5cf6",
        weak: mt("#a78bfa", 25)
    },
    secondary: {
        surface: "#64748b",
        surfaceHover: "#475569",
        surfaceActive: "#334155",
        text: "#0b1120",
        border: "#475569",
        weak: mt("#64748b", 25)
    },
    success: {
        surface: "#22c55e",
        surfaceHover: "#16a34a",
        surfaceActive: "#15803d",
        text: "#0b1120",
        border: "#16a34a",
        weak: mt("#22c55e", 25)
    },
    warning: {
        surface: "#fde047",
        surfaceHover: "#facc15",
        surfaceActive: "#eab308",
        text: "#0b1120",
        border: "#facc15",
        weak: mt("#fde047", 25)
    },
    danger: {
        surface: "#f87171",
        surfaceHover: "#ef4444",
        surfaceActive: "#dc2626",
        text: "#0b1120",
        border: "#ef4444",
        weak: mt("#f87171", 25)
    },
    neutral: {
        surface: "#1e293b",
        surfaceHover: "#334155",
        surfaceActive: "#475569",
        text: "#e2e8f0",
        border: "#334155",
        weak: mt("#1e293b", 25)
    }
}, su = {
    background: "#ffffff",
    backgroundElevated: "#f8fafc",
    outline: "#cbd5f5",
    text: "#0f172a",
    textMuted: "#475569",
    divider: "rgba(15, 23, 42, 0.08)"
}, au = {
    background: "#0b1120",
    backgroundElevated: "#111827",
    outline: "#1e293b",
    text: "#e2e8f0",
    textMuted: "#94a3b8",
    divider: "rgba(148, 163, 184, 0.24)"
}, $o = {
    palette: ou,
    surface: su
}, Uo = {
    palette: iu,
    surface: au
}, Eo = (e)=>e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, "-").toLowerCase(), vs = (e)=>{
    const t = {};
    return Object.entries(e.palette).forEach(([n, r])=>{
        Object.entries(r).forEach(([o1, i])=>{
            const s = `--pie-color-${Eo(n)}-${Eo(o1)}`;
            t[s] = i;
        });
    }), Object.entries(e.surface).forEach(([n, r])=>{
        const o1 = `--pie-surface-${Eo(n)}`;
        t[o1] = r;
    }), t;
};
vs($o), vs(Uo);
var Zt = "_97wpzp0";
const xa = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(void 0), cu = ()=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("svg", {
        className: "crayon-filter",
        style: {
            position: "absolute",
            width: 0,
            height: 0,
            pointerEvents: "none"
        },
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("defs", {
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("filter", {
                id: "crayon-bumpy",
                x: "-10%",
                y: "-10%",
                width: "120%",
                height: "120%",
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("feTurbulence", {
                        type: "fractalNoise",
                        baseFrequency: "0.08",
                        numOctaves: "3",
                        seed: "2",
                        result: "noise"
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("feDisplacementMap", {
                        in: "SourceGraphic",
                        in2: "noise",
                        scale: "2.5",
                        xChannelSelector: "R",
                        yChannelSelector: "G",
                        result: "displacement"
                    })
                ]
            })
        })
    }), lu = ()=>("TURBOPACK compile-time value", "object") > "u" ? "light" : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light", ng = ({ children: e, defaultTheme: t, theme: n, onThemeChange: r, syncWithSystem: o1 = !0, design: i, defaultDesign: s = "basic", onDesignChange: a, primaryColor: c, className: l, style: u })=>{
    const f = ()=>t || (o1 ? lu() : "light"), [h, b] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(f), [g, m] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(s), w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        n !== void 0 && b(n);
    }, [
        n
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!o1 || n !== void 0 || ("TURBOPACK compile-time value", "object") > "u") return;
        const x = window.matchMedia("(prefers-color-scheme: dark)"), O = (N)=>{
            const M = N.matches ? "dark" : "light";
            b(M), r == null || r(M);
        };
        return O(x), x.addEventListener("change", O), ()=>{
            x.removeEventListener("change", O);
        };
    }, [
        o1,
        n,
        r
    ]);
    const p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>n ?? h, [
        n,
        h
    ]), y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>i ?? g, [
        i,
        g
    ]), v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>y === "game" ? p === "dark" ? us : ls : y === "crayon" ? p === "dark" ? ds : fs : p === "dark" ? cs : as, [
        y,
        p
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!w.current) return;
        const x = w.current, O = p === "dark";
        if (c) try {
            $l(c, O, x);
        } catch (N) {
            console.warn("Failed to generate color scale from primaryColor:", N);
            const M = O ? Uo.palette.primary : $o.palette.primary;
            Lo(M, x);
        }
        else {
            const N = O ? Uo.palette.primary : $o.palette.primary;
            Lo(N, x);
        }
    }, [
        c,
        p
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (typeof document > "u") return;
        const x = document.documentElement;
        x.classList.remove(as, cs, ls, us, fs, ds), x.classList.add(v);
    }, [
        p,
        y,
        v
    ]);
    const S = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((x)=>{
        n || b(x), r == null || r(x);
    }, [
        n,
        r
    ]), R = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((x)=>{
        i || m(x), a == null || a(x);
    }, [
        i,
        a
    ]), C = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            theme: p,
            setTheme: S,
            design: y,
            setDesign: R,
            themeClass: v
        }), [
        p,
        y,
        v,
        S,
        R
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(xa.Provider, {
        value: C,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            ref: w,
            className: st(v, l),
            style: u,
            children: [
                y === "crayon" && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(cu, {}),
                e
            ]
        })
    });
}, Jt = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(xa), rg = ({ size: e = "medium", variant: t = "solid", intent: n = "primary", rounded: r = "medium", showDot: o1 = !1, children: i, className: s, ...a })=>{
    const c = Jt(), l = (c == null ? void 0 : c.themeClass) ?? Zt;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("span", {
        className: st(l, jl({
            size: e,
            variant: t,
            intent: n,
            rounded: r
        }), s),
        ...a,
        children: [
            o1 && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: ql
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: Bl,
                children: i
            })
        ]
    });
};
function ro() {
    return ("TURBOPACK compile-time value", "object") < "u";
}
function mn(e) {
    return mi(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ue(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
_c13 = Ue;
function Ht(e) {
    var t;
    return (t = (mi(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
_c14 = Ht;
function mi(e) {
    return ro() ? e instanceof Node || e instanceof Ue(e).Node : !1;
}
function Ae(e) {
    return ro() ? e instanceof Element || e instanceof Ue(e).Element : !1;
}
_c15 = Ae;
function Be(e) {
    return ro() ? e instanceof HTMLElement || e instanceof Ue(e).HTMLElement : !1;
}
_c16 = Be;
function Ko(e) {
    return !ro() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ue(e).ShadowRoot;
}
_c17 = Ko;
const uu = /* @__PURE__ */ new Set([
    "inline",
    "contents"
]);
function On(e) {
    const { overflow: t, overflowX: n, overflowY: r, display: o1 } = wt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !uu.has(o1);
}
_c18 = On;
const fu = /* @__PURE__ */ new Set([
    "table",
    "td",
    "th"
]);
function du(e) {
    return fu.has(mn(e));
}
const hu = [
    ":popover-open",
    ":modal"
];
function oo(e) {
    return hu.some((t)=>{
        try {
            return e.matches(t);
        } catch  {
            return !1;
        }
    });
}
const pu = [
    "transform",
    "translate",
    "scale",
    "rotate",
    "perspective"
], mu = [
    "transform",
    "translate",
    "scale",
    "rotate",
    "perspective",
    "filter"
], gu = [
    "paint",
    "layout",
    "strict",
    "content"
];
function gi(e) {
    const t = io(), n = Ae(e) ? wt(e) : e;
    return pu.some((r)=>n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || mu.some((r)=>(n.willChange || "").includes(r)) || gu.some((r)=>(n.contain || "").includes(r));
}
function bu(e) {
    let t = Gt(e);
    for(; Be(t) && !Kt(t);){
        if (gi(t)) return t;
        if (oo(t)) return null;
        t = Gt(t);
    }
    return null;
}
function io() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const yu = /* @__PURE__ */ new Set([
    "html",
    "body",
    "#document"
]);
function Kt(e) {
    return yu.has(mn(e));
}
_c19 = Kt;
function wt(e) {
    return Ue(e).getComputedStyle(e);
}
function so(e) {
    return Ae(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    };
}
function Gt(e) {
    if (mn(e) === "html") return e;
    const t = // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ko(e) && e.host || // Fallback.
    Ht(e);
    return Ko(t) ? t.host : t;
}
_c20 = Gt;
function Ca(e) {
    const t = Gt(e);
    return Kt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Be(t) && On(t) ? t : Ca(t);
}
_c21 = Ca;
function un(e, t, n) {
    var r;
    t === void 0 && (t = []), n === void 0 && (n = !0);
    const o1 = Ca(e), i = o1 === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Ue(o1);
    if (i) {
        const a = Go(s);
        return t.concat(s, s.visualViewport || [], On(o1) ? o1 : [], a && n ? un(a) : []);
    }
    return t.concat(o1, un(o1, [], n));
}
function Go(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
_c22 = Go;
const ws = {};
function St(e, t) {
    _s();
    const n = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(ws);
    return n.current === ws && (n.current = e(t)), n;
}
_s(St, "zLodmzTkBzGGs+Thy61tCVkFegI=");
_c23 = St;
const So = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[`useInsertionEffect${Math.random().toFixed(1)}`.slice(0, -3)], vu = // React 17 doesn't have useInsertionEffect.
So && // Preact replaces useInsertionEffect with useLayoutEffect and fires too late.
So !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useLayoutEffect ? So : (e)=>e();
function ie(e) {
    const t = St(wu).current;
    return t.next = e, vu(t.effect), t.trampoline;
}
function wu() {
    const e = {
        next: void 0,
        callback: Eu,
        trampoline: (...t)=>{
            var n;
            return (n = e.callback) == null ? void 0 : n.call(e, ...t);
        },
        effect: ()=>{
            e.callback = e.next;
        }
    };
    return e;
}
function Eu() {
    if ("TURBOPACK compile-time truthy", 1) throw new Error("Base UI: Cannot call an event handler while rendering.");
}
_c24 = Eu;
let Yo;
("TURBOPACK compile-time value", "development") !== "production" && (Yo = /* @__PURE__ */ new Set());
function Es(...e) {
    if ("TURBOPACK compile-time truthy", 1) {
        const t = e.join(" ");
        Yo.has(t) || (Yo.add(t), console.error(`Base UI: ${t}`));
    }
}
_c25 = Es;
const Su = ()=>{}, ne = typeof document < "u" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useLayoutEffect : Su;
function Xo(e, t) {
    if (e && !t) return e;
    if (!e && t) return t;
    if (e || t) return {
        ...e,
        ...t
    };
}
_c26 = Xo;
const ir = {};
function Yt(e, t, n, r, o1) {
    let i = {
        ...Zo(e, ir)
    };
    return t && (i = rr(i, t)), n && (i = rr(i, n)), r && (i = rr(i, r)), o1 && (i = rr(i, o1)), i;
}
_c27 = Yt;
function Ru(e) {
    if (e.length === 0) return ir;
    if (e.length === 1) return Zo(e[0], ir);
    let t = {
        ...Zo(e[0], ir)
    };
    for(let n = 1; n < e.length; n += 1)t = rr(t, e[n]);
    return t;
}
_c28 = Ru;
function rr(e, t) {
    return Oa(t) ? t(e) : xu(e, t);
}
function xu(e, t) {
    if (!t) return e;
    for(const n in t){
        const r = t[n];
        switch(n){
            case "style":
                {
                    e[n] = Xo(e.style, r);
                    break;
                }
            case "className":
                {
                    e[n] = Ta(e.className, r);
                    break;
                }
            default:
                Cu(n, r) ? e[n] = Ou(e[n], r) : e[n] = r;
        }
    }
    return e;
}
function Cu(e, t) {
    const n = e.charCodeAt(0), r = e.charCodeAt(1), o1 = e.charCodeAt(2);
    return n === 111 && r === 110 && o1 >= 65 && o1 <= 90 && (typeof t == "function" || typeof t > "u");
}
_c29 = Cu;
function Oa(e) {
    return typeof e == "function";
}
_c30 = Oa;
function Zo(e, t) {
    return Oa(e) ? e(t) : e ?? ir;
}
_c31 = Zo;
function Ou(e, t) {
    return t ? e ? (n)=>{
        if (Tu(n)) {
            const o1 = n;
            Jo(o1);
            const i = t(o1);
            return o1.baseUIHandlerPrevented || e == null || e(o1), i;
        }
        const r = t(n);
        return e == null || e(n), r;
    } : t : e;
}
_c32 = Ou;
function Jo(e) {
    return e.preventBaseUIHandler = ()=>{
        e.baseUIHandlerPrevented = !0;
    }, e;
}
_c33 = Jo;
function Ta(e, t) {
    return t ? e ? t + " " + e : t : e;
}
_c34 = Ta;
function Tu(e) {
    return e != null && typeof e == "object" && "nativeEvent" in e;
}
_c35 = Tu;
function Xe(e, ...t) {
    const n = new URL(`https://base-ui.com/production-error/${e}`);
    return t.forEach((r)=>n.searchParams.append("args[]", r)), `Base UI error #${e}; visit ${n} for the full message.`;
}
_c36 = Xe;
const bi = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(void 0);
("TURBOPACK compile-time value", "development") !== "production" && (bi.displayName = "CompositeRootContext");
function Ia(e = !1) {
    _s1();
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(bi);
    if (t === void 0 && !e) throw new Error(("TURBOPACK compile-time truthy", 1) ? "Base UI: CompositeRootContext is missing. Composite parts must be placed within <Composite.Root>." : "TURBOPACK unreachable");
    return t;
}
_s1(Ia, "HJ1wmQfhQB2DF5cup/6Wxn+TXqs=");
_c37 = Ia;
function Iu(e) {
    _s2();
    const { focusableWhenDisabled: t, disabled: n, composite: r = !1, tabIndex: o1 = 0, isNativeButton: i } = e, s = r && t !== !1, a = r && t === !1;
    return {
        props: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
            "Iu.useMemo": ()=>{
                const l = {
                    // allow Tabbing away from focusableWhenDisabled elements
                    onKeyDown (u) {
                        n && t && u.key !== "Tab" && u.preventDefault();
                    }
                };
                return r || (l.tabIndex = o1, !i && n && (l.tabIndex = t ? o1 : -1)), (i && (t || s) || !i && n) && (l["aria-disabled"] = n), i && (!t || a) && (l.disabled = n), l;
            }
        }["Iu.useMemo"], [
            r,
            n,
            t,
            s,
            a,
            i,
            o1
        ])
    };
}
_s2(Iu, "nwk+m61qLgjDVUp4IGV/072DDN4=");
_c38 = Iu;
function Tn(e = {}) {
    _s3();
    const { disabled: t = !1, focusableWhenDisabled: n, tabIndex: r = 0, native: o1 = !0 } = e, i = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null), s = Ia(!0) !== void 0, a = ie(()=>{
        const h = i.current;
        return !!((h == null ? void 0 : h.tagName) === "A" && h != null && h.href);
    }), { props: c } = Iu({
        focusableWhenDisabled: n,
        disabled: t,
        composite: s,
        tabIndex: r,
        isNativeButton: o1
    });
    ("TURBOPACK compile-time value", "development") !== "production" && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "Tn.useEffect": ()=>{
            if (!i.current) return;
            const h = i.current.tagName === "BUTTON";
            o1 ? h || Es("A component that acts as a button was not rendered as a native <button>, which does not match the default. Ensure that the element passed to the `render` prop of the component is a real <button>, or set the `nativeButton` prop on the component to `false`.") : h && Es("A component that acts as a button was rendered as a native <button>, which does not match the default. Ensure that the element passed to the `render` prop of the component is not a real <button>, or set the `nativeButton` prop on the component to `true`.");
        }
    }["Tn.useEffect"], [
        o1
    ]);
    const l = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "Tn.useCallback[l]": ()=>{
            const h = i.current;
            ku(h) && s && t && c.disabled === void 0 && h.disabled && (h.disabled = !1);
        }
    }["Tn.useCallback[l]"], [
        t,
        c.disabled,
        s
    ]);
    ne(l, [
        l
    ]);
    const u = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "Tn.useCallback[u]": (h = {})=>{
            const { onClick: b, onMouseDown: g, onKeyUp: m, onKeyDown: w, onPointerDown: p, ...y } = h;
            return Yt({
                type: o1 ? "button" : void 0,
                onClick (S) {
                    if (t) {
                        S.preventDefault();
                        return;
                    }
                    b == null || b(S);
                },
                onMouseDown (S) {
                    t || g == null || g(S);
                },
                onKeyDown (S) {
                    if (t || (Jo(S), w == null || w(S)), S.baseUIHandlerPrevented) return;
                    const R = S.target === S.currentTarget && !o1 && !a() && !t, C = S.key === "Enter", x = S.key === " ";
                    R && ((x || C) && S.preventDefault(), C && (b == null || b(S)));
                },
                onKeyUp (S) {
                    t || (Jo(S), m == null || m(S)), !S.baseUIHandlerPrevented && S.target === S.currentTarget && !o1 && !t && S.key === " " && (b == null || b(S));
                },
                onPointerDown (S) {
                    if (t) {
                        S.preventDefault();
                        return;
                    }
                    p == null || p(S);
                }
            }, o1 ? void 0 : {
                role: "button"
            }, c, y);
        }
    }["Tn.useCallback[u]"], [
        t,
        c,
        o1,
        a
    ]), f = ie((h)=>{
        i.current = h, l();
    });
    return {
        getButtonProps: u,
        buttonRef: f
    };
}
_s3(Tn, "oYEZe9fh254DBud0ofljWjsJT70=");
_c39 = Tn;
function ku(e) {
    return Be(e) && e.tagName === "BUTTON";
}
function Bt(e, t, n, r) {
    const o1 = St(ka).current;
    return Nu(o1, e, t, n, r) && _a(o1, [
        e,
        t,
        n,
        r
    ]), o1.callback;
}
_c40 = Bt;
function _u(e) {
    const t = St(ka).current;
    return Au(t, e) && _a(t, e), t.callback;
}
function ka() {
    return {
        callback: null,
        cleanup: null,
        refs: []
    };
}
function Nu(e, t, n, r, o1) {
    return e.refs[0] !== t || e.refs[1] !== n || e.refs[2] !== r || e.refs[3] !== o1;
}
_c41 = Nu;
function Au(e, t) {
    return e.refs.length !== t.length || e.refs.some((n, r)=>n !== t[r]);
}
_c42 = Au;
function _a(e, t) {
    if (e.refs = t, t.every((n)=>n == null)) {
        e.callback = null;
        return;
    }
    e.callback = (n)=>{
        if (e.cleanup && (e.cleanup(), e.cleanup = null), n != null) {
            const r = Array(t.length).fill(null);
            for(let o1 = 0; o1 < t.length; o1 += 1){
                const i = t[o1];
                if (i != null) switch(typeof i){
                    case "function":
                        {
                            const s = i(n);
                            typeof s == "function" && (r[o1] = s);
                            break;
                        }
                    case "object":
                        {
                            i.current = n;
                            break;
                        }
                }
            }
            e.cleanup = ()=>{
                for(let o1 = 0; o1 < t.length; o1 += 1){
                    const i = t[o1];
                    if (i != null) switch(typeof i){
                        case "function":
                            {
                                const s = r[o1];
                                typeof s == "function" ? s() : i(null);
                                break;
                            }
                        case "object":
                            {
                                i.current = null;
                                break;
                            }
                    }
                }
            };
        }
    };
}
const Pu = parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.version, 10);
function yi(e) {
    return Pu >= e;
}
function Ss(e) {
    if (!/* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(e)) return null;
    const t = e, n = t.props;
    return (yi(19) ? n == null ? void 0 : n.ref : t.ref) ?? null;
}
_c43 = Ss;
function Mu(e, t) {
    const n = {};
    for(const r in e){
        const o1 = e[r];
        if (t != null && t.hasOwnProperty(r)) {
            const i = t[r](o1);
            i != null && Object.assign(n, i);
            continue;
        }
        o1 === !0 ? n[`data-${r.toLowerCase()}`] = "" : o1 && (n[`data-${r.toLowerCase()}`] = o1.toString());
    }
    return n;
}
_c44 = Mu;
function Du(e, t) {
    return typeof e == "function" ? e(t) : e;
}
_c45 = Du;
function Vu(e, t) {
    return typeof e == "function" ? e(t) : e;
}
_c46 = Vu;
function lt() {}
const Un = Object.freeze([]), $e = Object.freeze({}), Lu = {
    style: {
        transition: "none"
    }
}, Fu = "data-base-ui-click-trigger", zu = {
    fallbackAxisSide: "none"
}, ju = {
    clipPath: "inset(50%)",
    position: "fixed",
    top: 0,
    left: 0
};
function Ne(e, t, n = {}) {
    const r = t.render, o1 = Bu(t, n);
    if (n.enabled === !1) return null;
    const i = n.state ?? $e;
    return qu(e, r, o1, i);
}
_c47 = Ne;
function Bu(e, t = {}) {
    const { className: n, style: r, render: o1 } = e, { state: i = $e, ref: s, props: a, stateAttributesMapping: c, enabled: l = !0 } = t, u = l ? Du(n, i) : void 0, f = l ? Vu(r, i) : void 0, h = l ? Mu(i, c) : $e, b = l ? Xo(h, Array.isArray(a) ? Ru(a) : a) ?? $e : $e;
    return typeof document < "u" && (l ? Array.isArray(s) ? b.ref = _u([
        b.ref,
        Ss(o1),
        ...s
    ]) : b.ref = Bt(b.ref, Ss(o1), s) : Bt(null, null)), l ? (u !== void 0 && (b.className = Ta(b.className, u)), f !== void 0 && (b.style = Xo(b.style, f)), b) : $e;
}
_c48 = Bu;
function qu(e, t, n, r) {
    if (t) {
        if (typeof t == "function") return t(n, r);
        const o1 = Yt(n, t.props);
        return o1.ref = n.ref, /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.cloneElement(t, o1);
    }
    if (e && typeof e == "string") return Hu(e, n);
    throw new Error(("TURBOPACK compile-time truthy", 1) ? "Base UI: Render element or function are not defined." : "TURBOPACK unreachable");
}
function Hu(e, t) {
    return e === "button" ? /* @__PURE__ */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("button", {
        type: "button",
        ...t,
        key: t.key
    }) : e === "img" ? /* @__PURE__ */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("img", {
        alt: "",
        ...t,
        key: t.key
    }) : /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(e, t);
}
_c49 = Hu;
const Na = /* @__PURE__ */ /*#__PURE__*/ _s4(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c50 = _s4(function(t, n) {
    _s4();
    const { render: r, className: o1, disabled: i = !1, focusableWhenDisabled: s = !1, nativeButton: a = !0, ...c } = t, l = !!i, { getButtonProps: u, buttonRef: f } = Tn({
        disabled: l,
        focusableWhenDisabled: s,
        native: a
    }), h = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Na.useMemo[h]": ()=>({
                disabled: l
            })
    }["Na.useMemo[h]"], [
        l
    ]);
    return Ne("button", t, {
        state: h,
        ref: [
            n,
            f
        ],
        props: [
            c,
            u
        ]
    });
}, "/s6LuBbpPTJ4sgJZQFDStxzeWoU=")), "/s6LuBbpPTJ4sgJZQFDStxzeWoU=");
_c51 = Na;
("TURBOPACK compile-time value", "development") !== "production" && (Na.displayName = "Button");
var Wu = tt({
    defaultClassName: "_1cfrth41 _1cfrth40",
    variantClassNames: {
        size: {
            small: "_1cfrth42",
            medium: "_1cfrth43",
            large: "_1cfrth44",
            xlarge: "_1cfrth45"
        },
        variant: {
            solid: "_1cfrth46",
            outline: "_1cfrth47",
            ghost: "_1cfrth48",
            weak: "_1cfrth49"
        },
        intent: {
            primary: "_1cfrth4a",
            secondary: "_1cfrth4b",
            success: "_1cfrth4c",
            warning: "_1cfrth4d",
            danger: "_1cfrth4e",
            neutral: "_1cfrth4f"
        },
        rounded: {
            small: "_1cfrth4g",
            medium: "_1cfrth4h",
            large: "_1cfrth4i"
        }
    },
    defaultVariants: {
        size: "medium",
        variant: "solid",
        intent: "primary",
        rounded: "medium"
    },
    compoundVariants: [
        [
            {
                variant: "solid",
                intent: "primary"
            },
            "_1cfrth4j"
        ],
        [
            {
                variant: "solid",
                intent: "secondary"
            },
            "_1cfrth4k"
        ],
        [
            {
                variant: "solid",
                intent: "success"
            },
            "_1cfrth4l"
        ],
        [
            {
                variant: "solid",
                intent: "warning"
            },
            "_1cfrth4m"
        ],
        [
            {
                variant: "solid",
                intent: "danger"
            },
            "_1cfrth4n"
        ],
        [
            {
                variant: "solid",
                intent: "neutral"
            },
            "_1cfrth4o"
        ],
        [
            {
                variant: "outline",
                intent: "primary"
            },
            "_1cfrth4p"
        ],
        [
            {
                variant: "outline",
                intent: "secondary"
            },
            "_1cfrth4q"
        ],
        [
            {
                variant: "outline",
                intent: "success"
            },
            "_1cfrth4r"
        ],
        [
            {
                variant: "outline",
                intent: "warning"
            },
            "_1cfrth4s"
        ],
        [
            {
                variant: "outline",
                intent: "danger"
            },
            "_1cfrth4t"
        ],
        [
            {
                variant: "outline",
                intent: "neutral"
            },
            "_1cfrth4u"
        ],
        [
            {
                variant: "ghost",
                intent: "primary"
            },
            "_1cfrth4v"
        ],
        [
            {
                variant: "ghost",
                intent: "secondary"
            },
            "_1cfrth4w"
        ],
        [
            {
                variant: "ghost",
                intent: "success"
            },
            "_1cfrth4x"
        ],
        [
            {
                variant: "ghost",
                intent: "warning"
            },
            "_1cfrth4y"
        ],
        [
            {
                variant: "ghost",
                intent: "danger"
            },
            "_1cfrth4z"
        ],
        [
            {
                variant: "ghost",
                intent: "neutral"
            },
            "_1cfrth410"
        ],
        [
            {
                variant: "weak",
                intent: "primary"
            },
            "_1cfrth411"
        ],
        [
            {
                variant: "weak",
                intent: "secondary"
            },
            "_1cfrth412"
        ],
        [
            {
                variant: "weak",
                intent: "success"
            },
            "_1cfrth413"
        ],
        [
            {
                variant: "weak",
                intent: "warning"
            },
            "_1cfrth414"
        ],
        [
            {
                variant: "weak",
                intent: "danger"
            },
            "_1cfrth415"
        ],
        [
            {
                variant: "weak",
                intent: "neutral"
            },
            "_1cfrth416"
        ],
        [
            {
                variant: "outline"
            },
            "_1cfrth417"
        ],
        [
            {
                variant: "ghost"
            },
            "_1cfrth418"
        ]
    ]
}), $u = "_1cfrth419", Uu = "_1cfrth41a";
const Aa = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(_c52 = ({ variant: e = "solid", size: t = "medium", intent: n = "primary", rounded: r = "medium", fullWidth: o1 = !1, disabled: i = !1, children: s, className: a, ...c }, l)=>{
    const u = Jt(), f = (u == null ? void 0 : u.themeClass) ?? Zt;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Na, {
        ref: l,
        className: st(f, Wu({
            variant: e,
            intent: n,
            size: t,
            rounded: r
        }), o1 && $u, a),
        disabled: i,
        ...c,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
            className: Uu,
            children: s
        })
    });
});
_c53 = Aa;
Aa.displayName = "Button";
function Kn({ controlled: e, default: t, name: n, state: r = "value" }) {
    _s5();
    const { current: o1 } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(e !== void 0), [i, s] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(t), a = o1 ? e : i;
    if ("TURBOPACK compile-time truthy", 1) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
            "Kn.useEffect": ()=>{
                o1 !== (e !== void 0) && console.error([
                    `Base UI: A component is changing the ${o1 ? "" : "un"}controlled ${r} state of ${n} to be ${o1 ? "un" : ""}controlled.`,
                    "Elements should not switch from uncontrolled to controlled (or vice versa).",
                    `Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`,
                    "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.",
                    "More info: https://fb.me/react-controlled-components"
                ].join(`
`));
            }
        }["Kn.useEffect"], [
            r,
            n,
            e
        ]);
        const { current: l } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(t);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
            "Kn.useEffect": ()=>{
                !o1 && JSON.stringify(l) !== JSON.stringify(t) && console.error([
                    `Base UI: A component is changing the default ${r} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`
                ].join(`
`));
            }
        }["Kn.useEffect"], [
            JSON.stringify(t)
        ]);
    }
    const c = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "Kn.useCallback[c]": (l)=>{
            o1 || s(l);
        }
    }["Kn.useCallback[c]"], []);
    return [
        a,
        c
    ];
}
_s5(Kn, "phLm7/gXGGEeISmQdnxI5lg1EQ4=");
_c54 = Kn;
const gr = {
    clip: "rect(0 0 0 0)",
    overflow: "hidden",
    whiteSpace: "nowrap",
    position: "fixed",
    top: 0,
    left: 0,
    border: 0,
    padding: 0,
    width: 1,
    height: 1,
    margin: -1
};
let Rs = /* @__PURE__ */ function(e) {
    return e.checked = "data-checked", e.unchecked = "data-unchecked", e.disabled = "data-disabled", e.readonly = "data-readonly", e.required = "data-required", e.valid = "data-valid", e.invalid = "data-invalid", e.touched = "data-touched", e.dirty = "data-dirty", e.filled = "data-filled", e.focused = "data-focused", e;
}({}), xs = /* @__PURE__ */ function(e) {
    return e.disabled = "data-disabled", e.valid = "data-valid", e.invalid = "data-invalid", e.touched = "data-touched", e.dirty = "data-dirty", e.filled = "data-filled", e.focused = "data-focused", e;
}({});
const ao = {
    badInput: !1,
    customError: !1,
    patternMismatch: !1,
    rangeOverflow: !1,
    rangeUnderflow: !1,
    stepMismatch: !1,
    tooLong: !1,
    tooShort: !1,
    typeMismatch: !1,
    valid: null,
    valueMissing: !1
}, Qt = {
    valid (e) {
        return e === null ? null : e ? {
            [xs.valid]: ""
        } : {
            [xs.invalid]: ""
        };
    }
};
function Pa(e) {
    _s6();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Pa.useMemo": ()=>({
                checked (t) {
                    return e.indeterminate ? {} : t ? {
                        [Rs.checked]: ""
                    } : {
                        [Rs.unchecked]: ""
                    };
                },
                ...Qt
            })
    }["Pa.useMemo"], [
        e.indeterminate
    ]);
}
_s6(Pa, "nwk+m61qLgjDVUp4IGV/072DDN4=");
_c55 = Pa;
const Ku = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
};
let Cs = 0;
function Gu(e, t = "mui") {
    _s7();
    const [n, r] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(e), o1 = e || n;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "Gu.useEffect": ()=>{
            n == null && (Cs += 1, r(`${t}-${Cs}`));
        }
    }["Gu.useEffect"], [
        n,
        t
    ]), o1;
}
_s7(Gu, "paSPJah3zJW873J8WrUDf+Q7oao=");
_c56 = Gu;
const Os = Ku.useId;
function br(e, t) {
    if (Os !== void 0) {
        const n = Os();
        return e ?? (t ? `${t}-${n}` : n);
    }
    return Gu(e, t);
}
function Rt(e) {
    return br(e, "base-ui");
}
_c57 = Rt;
const vi = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext({
    invalid: void 0,
    name: void 0,
    validityData: {
        state: ao,
        errors: [],
        error: "",
        value: "",
        initialValue: null
    },
    setValidityData: lt,
    disabled: void 0,
    touched: !1,
    setTouched: lt,
    dirty: !1,
    setDirty: lt,
    filled: !1,
    setFilled: lt,
    focused: !1,
    setFocused: lt,
    validate: ()=>null,
    validationMode: "onSubmit",
    validationDebounceTime: 0,
    shouldValidateOnChange: ()=>!1,
    state: {
        disabled: !1,
        valid: null,
        touched: !1,
        dirty: !1,
        filled: !1,
        focused: !1
    },
    markedDirtyRef: {
        current: !1
    },
    validation: {
        getValidationProps: (e = $e)=>e,
        getInputValidationProps: (e = $e)=>e,
        inputRef: {
            current: null
        },
        commit: async ()=>{}
    }
});
("TURBOPACK compile-time value", "development") !== "production" && (vi.displayName = "FieldRootContext");
function Dt(e = !0) {
    _s8();
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(vi);
    if (t.setValidityData === lt && !e) throw new Error(("TURBOPACK compile-time truthy", 1) ? "Base UI: FieldRootContext is missing. Field parts must be placed within <Field.Root>." : "TURBOPACK unreachable");
    return t;
}
_s8(Dt, "HJ1wmQfhQB2DF5cup/6Wxn+TXqs=");
_c58 = Dt;
const Ma = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext({
    disabled: !1
});
("TURBOPACK compile-time value", "development") !== "production" && (Ma.displayName = "FieldItemContext");
function Yu() {
    _s9();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(Ma);
}
_s9(Yu, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
_c59 = Yu;
function Qo(e, t) {
    return {
        ...e,
        state: {
            ...e.state,
            valid: !t && e.state.valid
        }
    };
}
_c60 = Qo;
const Da = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext({
    formRef: {
        current: {
            fields: /* @__PURE__ */ new Map()
        }
    },
    errors: {},
    clearErrors: lt,
    validationMode: "onSubmit",
    submitAttemptedRef: {
        current: !1
    }
});
("TURBOPACK compile-time value", "development") !== "production" && (Da.displayName = "FormContext");
function In() {
    _s10();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(Da);
}
_s10(In, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
_c61 = In;
function co(e) {
    const { enabled: t = !0, value: n, id: r, name: o1, controlRef: i, commit: s } = e, { formRef: a } = In(), { invalid: c, markedDirtyRef: l, validityData: u, setValidityData: f } = Dt(), h = ie(e.getValue);
    ne(()=>{
        if (!t) return;
        let b = n;
        b === void 0 && (b = h()), u.initialValue === null && b !== null && f((g)=>({
                ...g,
                initialValue: b
            }));
    }, [
        t,
        f,
        n,
        u.initialValue,
        h
    ]), ne(()=>{
        !t || !r || a.current.fields.set(r, {
            getValue: h,
            name: o1,
            controlRef: i,
            validityData: Qo(u, c),
            validate () {
                let b = n;
                b === void 0 && (b = h()), l.current = !0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"](()=>s(b));
            }
        });
    }, [
        s,
        i,
        t,
        a,
        h,
        r,
        c,
        l,
        o1,
        u,
        n
    ]), ne(()=>{
        const b = a.current.fields;
        return ()=>{
            r && b.delete(r);
        };
    }, [
        a,
        r
    ]);
}
const wi = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext({
    controlId: void 0,
    setControlId: lt,
    labelId: void 0,
    setLabelId: lt,
    messageIds: [],
    setMessageIds: lt,
    getDescriptionProps: (e)=>e
});
("TURBOPACK compile-time value", "development") !== "production" && (wi.displayName = "LabelableContext");
function Vt() {
    _s11();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(wi);
}
_s11(Vt, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
_c62 = Vt;
const Va = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(void 0);
("TURBOPACK compile-time value", "development") !== "production" && (Va.displayName = "CheckboxGroupContext");
function Xu(e = !0) {
    _s12();
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(Va);
    if (t === void 0 && !e) throw new Error(("TURBOPACK compile-time truthy", 1) ? "Base UI: CheckboxGroupContext is missing. CheckboxGroup parts must be placed within <CheckboxGroup>." : "TURBOPACK unreachable");
    return t;
}
_s12(Xu, "HJ1wmQfhQB2DF5cup/6Wxn+TXqs=");
_c63 = Xu;
const Ei = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(void 0);
("TURBOPACK compile-time value", "development") !== "production" && (Ei.displayName = "CheckboxRootContext");
function Zu() {
    _s13();
    const e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(Ei);
    if (e === void 0) throw new Error(("TURBOPACK compile-time truthy", 1) ? "Base UI: CheckboxRootContext is missing. Checkbox parts must be placed within <Checkbox.Root>." : "TURBOPACK unreachable");
    return e;
}
_s13(Zu, "KtrK5+WEuqFyc+Nd5vj572lGrLM=");
_c64 = Zu;
const pn = "none", sr = "trigger-press", Ju = "trigger-hover", La = "outside-press", Ro = "item-press", Qu = "close-press", lo = "focus-out", ef = "escape-key", xo = "list-navigation", tf = "cancel-open", nf = "imperative-action", rf = "window-resize";
function ke(e, t, n, r) {
    let o1 = !1, i = !1;
    const s = r ?? $e;
    return {
        reason: e,
        event: t ?? new Event("base-ui"),
        cancel () {
            o1 = !0;
        },
        allowPropagation () {
            i = !0;
        },
        get isCanceled () {
            return o1;
        },
        get isPropagationAllowed () {
            return i;
        },
        trigger: n,
        ...s
    };
}
function Si(e, t) {
    _s14();
    const n = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(e), r = ie(t);
    ne(()=>{
        n.current !== e && r(n.current);
    }, [
        e,
        r
    ]), ne(()=>{
        n.current = e;
    }, [
        e
    ]);
}
_s14(Si, "RkKLHuudhjwt2kU1dn9CE94ZCcw=");
_c65 = Si;
const of = "data-parent", Fa = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_s15(function(t, n) {
    _s15();
    const { checked: r, className: o1, defaultChecked: i = !1, disabled: s = !1, id: a, indeterminate: c = !1, inputRef: l, name: u, onCheckedChange: f, parent: h = !1, readOnly: b = !1, render: g, required: m = !1, uncheckedValue: w, value: p, nativeButton: y = !1, ...v } = t, { clearErrors: S } = In(), { disabled: R, name: C, setDirty: x, setFilled: O, setFocused: N, setTouched: M, state: D, validationMode: B, validityData: j, shouldValidateOnChange: P, validation: T } = Dt(), A = Yu(), { labelId: _, controlId: I, setControlId: k, getDescriptionProps: z } = Vt(), $ = Xu(), ae = $ == null ? void 0 : $.parent, ee = ae && $.allValues, ge = R || A.disabled || ($ == null ? void 0 : $.disabled) || s, fe = C ?? u, U = p ?? fe, Z = Rt(), K = Rt();
    let he = I;
    ee ? he = h ? K : `${ae.id}-${U}` : a && (he = a);
    let pe = {};
    ee && (h ? pe = $.parent.getParentProps() : U && (pe = $.parent.getChildProps(U)));
    const V = ie(f), { checked: J = r, indeterminate: Y = c, onCheckedChange: Re, ...ce } = pe, F = $ == null ? void 0 : $.value, Q = $ == null ? void 0 : $.setValue, se = $ == null ? void 0 : $.defaultValue, re = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null), { getButtonProps: ue, buttonRef: q } = Tn({
        disabled: ge,
        native: y
    }), X = ($ == null ? void 0 : $.validation) ?? T, [L, te] = Kn({
        controlled: U && F && !h ? F.includes(U) : J,
        default: U && se && !h ? se.includes(U) : i,
        name: "Checkbox",
        state: "checked"
    });
    ne(()=>{
        if (k !== lt) return k(he), ()=>{
            k(void 0);
        };
    }, [
        he,
        $,
        k,
        h
    ]), co({
        enabled: !$,
        id: Z,
        commit: X.commit,
        value: L,
        controlRef: re,
        name: fe,
        getValue: ()=>L
    });
    const H = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null), Se = Bt(l, H, X.inputRef);
    ne(()=>{
        H.current && (H.current.indeterminate = Y, L && O(!0));
    }, [
        L,
        Y,
        O
    ]), Si(L, ()=>{
        $ && !h || (S(fe), O(L), x(L !== j.initialValue), P() ? X.commit(L) : X.commit(L, !0));
    });
    const xe = Yt({
        checked: L,
        disabled: ge,
        // parent checkboxes unset `name` to be excluded from form submission
        name: h ? void 0 : fe,
        // Set `id` to stop Chrome warning about an unassociated input
        id: he ?? void 0,
        required: m,
        ref: Se,
        style: gr,
        tabIndex: -1,
        type: "checkbox",
        "aria-hidden": !0,
        onChange (Ie) {
            if (Ie.nativeEvent.defaultPrevented) return;
            const je = Ie.target.checked, ut = ke(pn, Ie.nativeEvent);
            if (Re == null || Re(je, ut), V(je, ut), !ut.isCanceled && (te(je), U && F && Q && !h)) {
                const Wt = je ? [
                    ...F,
                    U
                ] : F.filter((tn)=>tn !== U);
                Q(Wt, ut);
            }
        },
        onFocus () {
            var Ie;
            (Ie = re.current) == null || Ie.focus();
        }
    }, // React <19 sets an empty value if `undefined` is passed explicitly
    // To avoid this, we only set the value if it's defined
    p !== void 0 ? {
        value: ($ ? L && p : p) || ""
    } : $e, z, $ ? X.getValidationProps : X.getInputValidationProps), we = ee ? !!J : L, Ce = ee && Y || c;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "Fa.useEffect": ()=>{
            ae && U && ae.disabledStatesRef.current.set(U, ge);
        }
    }["Fa.useEffect"], [
        ae,
        ge,
        U
    ]);
    const Oe = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Fa.useMemo[Oe]": ()=>({
                ...D,
                checked: we,
                disabled: ge,
                readOnly: b,
                required: m,
                indeterminate: Ce
            })
    }["Fa.useMemo[Oe]"], [
        D,
        we,
        ge,
        b,
        m,
        Ce
    ]), Ve = Pa(Oe), ze = Ne("span", t, {
        state: Oe,
        ref: [
            q,
            re,
            n,
            $ == null ? void 0 : $.registerControlRef
        ],
        props: [
            {
                id: Z,
                role: "checkbox",
                "aria-checked": Y ? "mixed" : L,
                "aria-readonly": b || void 0,
                "aria-required": m || void 0,
                "aria-labelledby": _,
                [of]: h ? "" : void 0,
                onFocus () {
                    N(!0);
                },
                onBlur () {
                    const Ie = H.current;
                    Ie && (M(!0), N(!1), B === "onBlur" && X.commit($ ? F : Ie.checked));
                },
                onClick (Ie) {
                    var je;
                    b || ge || (Ie.preventDefault(), (je = H.current) == null || je.click());
                }
            },
            z,
            X.getValidationProps,
            v,
            ce,
            ue
        ],
        stateAttributesMapping: Ve
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Ei.Provider, {
        value: Oe,
        children: [
            ze,
            !L && !$ && fe && !h && w !== void 0 && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("input", {
                type: "hidden",
                name: fe,
                value: w
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("input", {
                ...xe
            })
        ]
    });
}, "5pp4iYnc7/jg1NnisxIaMT5KPGw="));
("TURBOPACK compile-time value", "development") !== "production" && (Fa.displayName = "CheckboxRoot");
function Je(e) {
    const t = St(sf, e).current;
    return t.next = e, ne(t.effect), t;
}
_c66 = Je;
function sf(e) {
    const t = {
        current: e,
        next: e,
        effect: ()=>{
            t.current = t.next;
        }
    };
    return t;
}
const af = [];
function za(e) {
    _s16();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect(e, af);
}
_s16(za, "OD7bBpZva5O2jO+Puf00hKivP7c=");
const Cr = null;
let Ts = globalThis.requestAnimationFrame;
class cf {
    constructor(){
        /* This implementation uses an array as a backing data-structure for frame callbacks.
     * It allows `O(1)` callback cancelling by inserting a `null` in the array, though it
     * never calls the native `cancelAnimationFrame` if there are no frames left. This can
     * be much more efficient if there is a call pattern that alterns as
     * "request-cancel-request-cancel-…".
     * But in the case of "request-request-…-cancel-cancel-…", it leaves the final animation
     * frame to run anyway. We turn that frame into a `O(1)` no-op via `callbacksCount`. */ me(this, "callbacks", []);
        me(this, "callbacksCount", 0);
        me(this, "nextId", 1);
        me(this, "startId", 1);
        me(this, "isScheduled", !1);
        me(this, "tick", (t)=>{
            var o1;
            this.isScheduled = !1;
            const n = this.callbacks, r = this.callbacksCount;
            if (this.callbacks = [], this.callbacksCount = 0, this.startId = this.nextId, r > 0) for(let i = 0; i < n.length; i += 1)(o1 = n[i]) == null || o1.call(n, t);
        });
    }
    request(t) {
        const n = this.nextId;
        this.nextId += 1, this.callbacks.push(t), this.callbacksCount += 1;
        const r = ("TURBOPACK compile-time value", "development") === "test" && Ts !== requestAnimationFrame && (Ts = requestAnimationFrame, !0);
        return (!this.isScheduled || r) && (requestAnimationFrame(this.tick), this.isScheduled = !0), n;
    }
    cancel(t) {
        const n = t - this.startId;
        n < 0 || n >= this.callbacks.length || (this.callbacks[n] = null, this.callbacksCount -= 1);
    }
}
const Or = new cf();
class zt {
    constructor(){
        me(this, "currentId", Cr);
        me(this, "cancel", ()=>{
            this.currentId !== Cr && (Or.cancel(this.currentId), this.currentId = Cr);
        });
        me(this, "disposeEffect", ()=>this.cancel);
    }
    static create() {
        return new zt();
    }
    static request(t) {
        return Or.request(t);
    }
    static cancel(t) {
        return Or.cancel(t);
    }
    /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */ request(t) {
        this.cancel(), this.currentId = Or.request(()=>{
            this.currentId = Cr, t();
        });
    }
}
function uo() {
    const e = St(zt.create).current;
    return za(e.disposeEffect), e;
}
function yn(e) {
    return e == null ? e : "current" in e ? e.current : e;
}
function lf(e, t = !1, n = !0) {
    const r = uo();
    return ie((o1, i = null)=>{
        r.cancel();
        const s = yn(e);
        s != null && (typeof s.getAnimations != "function" || globalThis.BASE_UI_ANIMATIONS_DISABLED ? o1() : r.request(()=>{
            function a() {
                s && Promise.all(s.getAnimations().map((c)=>c.finished)).then(()=>{
                    i != null && i.aborted || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"](o1);
                }).catch(()=>{
                    if (n) {
                        if (i != null && i.aborted) return;
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"](o1);
                    } else s.getAnimations().length > 0 && s.getAnimations().some((c)=>c.pending || c.playState !== "finished") && a();
                });
            }
            t ? r.request(a) : a();
        }));
    });
}
function yr(e) {
    _s17();
    const { enabled: t = !0, open: n, ref: r, onComplete: o1 } = e, i = Je(n), s = ie(o1), a = lf(r, n);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "yr.useEffect": ()=>{
            t && a({
                "yr.useEffect": ()=>{
                    n === i.current && s();
                }
            }["yr.useEffect"]);
        }
    }["yr.useEffect"], [
        t,
        n,
        s,
        a,
        i
    ]);
}
_s17(yr, "OD7bBpZva5O2jO+Puf00hKivP7c=");
function Ri(e, t = !1, n = !1) {
    _s18();
    const [r, o1] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(e && t ? "idle" : void 0), [i, s] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(e);
    return e && !i && (s(!0), o1("starting")), !e && i && r !== "ending" && !n && o1("ending"), !e && !i && r === "ending" && o1(void 0), ne(()=>{
        if (!e && i && r !== "ending" && n) {
            const a = zt.request(()=>{
                o1("ending");
            });
            return ()=>{
                zt.cancel(a);
            };
        }
    }, [
        e,
        i,
        r,
        n
    ]), ne(()=>{
        if (!e || t) return;
        const a = zt.request(()=>{
            o1(void 0);
        });
        return ()=>{
            zt.cancel(a);
        };
    }, [
        t,
        e
    ]), ne(()=>{
        if (!e || !t) return;
        e && i && r !== "idle" && o1("starting");
        const a = zt.request(()=>{
            o1("idle");
        });
        return ()=>{
            zt.cancel(a);
        };
    }, [
        t,
        e,
        i,
        o1,
        r
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Ri.useMemo": ()=>({
                mounted: i,
                setMounted: s,
                transitionStatus: r
            })
    }["Ri.useMemo"], [
        i,
        r
    ]);
}
_s18(Ri, "s2BLBYcrmZ6Fi9O9zxHnuPlSa1Q=");
_c67 = Ri;
let $r = /* @__PURE__ */ function(e) {
    return e.startingStyle = "data-starting-style", e.endingStyle = "data-ending-style", e;
}({});
const uf = {
    [$r.startingStyle]: ""
}, ff = {
    [$r.endingStyle]: ""
}, fo = {
    transitionStatus (e) {
        return e === "starting" ? uf : e === "ending" ? ff : null;
    }
}, ja = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_s19(function(t, n) {
    _s19();
    const { render: r, className: o1, keepMounted: i = !1, ...s } = t, a = Zu(), c = a.checked || a.indeterminate, { transitionStatus: l, setMounted: u } = Ri(c), f = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null), h = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "ja.useMemo[h]": ()=>({
                ...a,
                transitionStatus: l
            })
    }["ja.useMemo[h]"], [
        a,
        l
    ]);
    yr({
        open: c,
        ref: f,
        onComplete () {
            c || u(!1);
        }
    });
    const b = Pa(a), g = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "ja.useMemo[g]": ()=>({
                ...b,
                ...fo,
                ...Qt
            })
    }["ja.useMemo[g]"], [
        b
    ]), m = i || c, w = Ne("span", t, {
        enabled: m,
        ref: [
            n,
            f
        ],
        state: h,
        stateAttributesMapping: g,
        props: s
    });
    return m ? w : null;
}, "eoyDUbh6tYQxYGT2tkEmLQpsOxY="));
("TURBOPACK compile-time value", "development") !== "production" && (ja.displayName = "CheckboxIndicator");
var df = "_1h81a661", hf = "_1h81a662", pf = tt({
    defaultClassName: "_1h81a664 _1h81a663",
    variantClassNames: {
        size: {
            small: "_1h81a665",
            medium: "_1h81a666",
            large: "_1h81a667",
            xlarge: "_1h81a668"
        },
        intent: {
            primary: "_1h81a669",
            secondary: "_1h81a66a",
            success: "_1h81a66b",
            warning: "_1h81a66c",
            danger: "_1h81a66d",
            neutral: "_1h81a66e"
        }
    },
    defaultVariants: {
        size: "medium",
        intent: "primary"
    },
    compoundVariants: [
        [
            {
                intent: "primary"
            },
            "_1h81a66f"
        ],
        [
            {
                intent: "secondary"
            },
            "_1h81a66g"
        ],
        [
            {
                intent: "success"
            },
            "_1h81a66h"
        ],
        [
            {
                intent: "warning"
            },
            "_1h81a66i"
        ],
        [
            {
                intent: "danger"
            },
            "_1h81a66j"
        ],
        [
            {
                intent: "neutral"
            },
            "_1h81a66k"
        ]
    ]
}), mf = "_1h81a66l", gf = "_1h81a66m", bf = "m7w02b0", yf = {
    xsmall: "m7w02b1",
    small: "m7w02b2",
    medium: "m7w02b3",
    large: "m7w02b4",
    xlarge: "m7w02b5",
    "display-small": "m7w02b6",
    "display-medium": "m7w02b7",
    "display-large": "m7w02b8"
}, vf = {
    regular: "m7w02b9",
    medium: "m7w02ba",
    semibold: "m7w02bb",
    bold: "m7w02bc"
}, wf = {
    primary: "m7w02bd",
    secondary: "m7w02be",
    success: "m7w02bf",
    warning: "m7w02bg",
    danger: "m7w02bh",
    neutral: "m7w02bi",
    inherit: "m7w02bj"
}, Ef = {
    left: "m7w02bk",
    center: "m7w02bl",
    right: "m7w02bm"
}, Sf = "m7w02bn";
const Ba = ({ as: e = "p", size: t = "medium", weight: n = "regular", intent: r = "inherit", align: o1 = "left", truncate: i = !1, children: s, className: a, ...c })=>{
    const l = Jt(), u = (l == null ? void 0 : l.themeClass) ?? Zt;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(e, {
        className: st(u, bf, yf[t], vf[n], wf[r], Ef[o1], i && Sf, a),
        ...c,
        children: s
    });
}, og = ({ size: e = "medium", intent: t = "primary", label: n, checked: r, defaultChecked: o1, disabled: i = !1, onCheckedChange: s, className: a, name: c, required: l, readOnly: u })=>{
    const f = Jt(), h = (f == null ? void 0 : f.themeClass) ?? Zt;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("label", {
        className: st(h, df, a),
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Fa, {
                checked: r,
                defaultChecked: o1,
                disabled: i,
                onCheckedChange: s,
                name: c,
                required: l,
                readOnly: u,
                className: st(hf, pf({
                    size: e,
                    intent: t
                })),
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ja, {
                    className: mf,
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("svg", {
                        className: gf,
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
                            d: "M13.3334 4L6.00002 11.3333L2.66669 8",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                })
            }),
            n && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Ba, {
                as: "span",
                size: e,
                intent: "inherit",
                children: n
            })
        ]
    });
}, xi = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(void 0);
("TURBOPACK compile-time value", "development") !== "production" && (xi.displayName = "DialogRootContext");
function kn(e) {
    _s20();
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(xi);
    if (e === !1 && t === void 0) throw new Error(("TURBOPACK compile-time truthy", 1) ? "Base UI: DialogRootContext is missing. Dialog parts must be placed within <Dialog.Root>." : "TURBOPACK unreachable");
    return t;
}
_s20(kn, "HJ1wmQfhQB2DF5cup/6Wxn+TXqs=");
let wn = function(e) {
    return e.open = "data-open", e.closed = "data-closed", e[e.startingStyle = $r.startingStyle] = "startingStyle", e[e.endingStyle = $r.endingStyle] = "endingStyle", e.anchorHidden = "data-anchor-hidden", e;
}({}), ei = /* @__PURE__ */ function(e) {
    return e.popupOpen = "data-popup-open", e.pressed = "data-pressed", e;
}({});
const Rf = {
    [ei.popupOpen]: ""
}, xf = {
    [ei.popupOpen]: "",
    [ei.pressed]: ""
}, Cf = {
    [wn.open]: ""
}, Of = {
    [wn.closed]: ""
}, Tf = {
    [wn.anchorHidden]: ""
}, If = {
    open (e) {
        return e ? Rf : null;
    }
}, kf = {
    open (e) {
        return e ? xf : null;
    }
}, ho = {
    open (e) {
        return e ? Cf : Of;
    },
    anchorHidden (e) {
        return e ? Tf : null;
    }
}, _f = {
    ...ho,
    ...fo
}, qa = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_s21(function(t, n) {
    _s21();
    const { render: r, className: o1, forceRender: i = !1, ...s } = t, { store: a } = kn(), c = a.useState("open"), l = a.useState("nested"), u = a.useState("mounted"), f = a.useState("transitionStatus"), h = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "qa.useMemo[h]": ()=>({
                open: c,
                transitionStatus: f
            })
    }["qa.useMemo[h]"], [
        c,
        f
    ]);
    return Ne("div", t, {
        state: h,
        ref: [
            a.context.backdropRef,
            n
        ],
        stateAttributesMapping: _f,
        props: [
            {
                role: "presentation",
                hidden: !u,
                style: {
                    userSelect: "none",
                    WebkitUserSelect: "none"
                }
            },
            s
        ],
        enabled: i || !l
    });
}, "Qnic7R25zvGc+0r5XPQMwm4akWc="));
("TURBOPACK compile-time value", "development") !== "production" && (qa.displayName = "DialogBackdrop");
const Ha = /* @__PURE__ */ /*#__PURE__*/ _s22(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c68 = _s22(function(t, n) {
    _s22();
    const { render: r, className: o1, disabled: i = !1, nativeButton: s = !0, ...a } = t, { store: c } = kn(), l = c.useState("open");
    function u(g) {
        l && c.setOpen(!1, ke(Qu, g.nativeEvent));
    }
    const { getButtonProps: f, buttonRef: h } = Tn({
        disabled: i,
        native: s
    }), b = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Ha.useMemo[b]": ()=>({
                disabled: i
            })
    }["Ha.useMemo[b]"], [
        i
    ]);
    return Ne("button", t, {
        state: b,
        ref: [
            n,
            h
        ],
        props: [
            {
                onClick: u
            },
            a,
            f
        ]
    });
}, "ia3emviCExbLK4lEQIsQyfYMsfY=")), "ia3emviCExbLK4lEQIsQyfYMsfY=");
_c69 = Ha;
("TURBOPACK compile-time value", "development") !== "production" && (Ha.displayName = "DialogClose");
const Wa = /* @__PURE__ */ /*#__PURE__*/ _s23(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c70 = _s23(function(t, n) {
    _s23();
    const { render: r, className: o1, id: i, ...s } = t, { store: a } = kn(), c = Rt(i);
    return a.useSyncedValueWithCleanup("descriptionElementId", c), Ne("p", t, {
        ref: n,
        props: [
            {
                id: c
            },
            s
        ]
    });
}, "7vbDcxjRShQ0mL2xpT48Kml7GzU=", true)), "7vbDcxjRShQ0mL2xpT48Kml7GzU=", true);
_c71 = Wa;
("TURBOPACK compile-time value", "development") !== "production" && (Wa.displayName = "DialogDescription");
const er = 0;
class Gn {
    constructor(){
        me(this, "currentId", er);
        me(this, "clear", ()=>{
            this.currentId !== er && (clearTimeout(this.currentId), this.currentId = er);
        });
        me(this, "disposeEffect", ()=>this.clear);
    }
    static create() {
        return new Gn();
    }
    /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */ start(t, n) {
        this.clear(), this.currentId = setTimeout(()=>{
            this.currentId = er, n();
        }, t);
    }
    isStarted() {
        return this.currentId !== er;
    }
}
function yt() {
    const e = St(Gn.create).current;
    return za(e.disposeEffect), e;
}
const Jn = typeof navigator < "u", Co = Mf(), $a = Vf(), Ua = Df(), Ka = typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter:none"), Nf = // iPads can claim to be MacIntel
Co.platform === "MacIntel" && Co.maxTouchPoints > 1 ? !0 : /iP(hone|ad|od)|iOS/.test(Co.platform), Af = Jn && /apple/i.test(navigator.vendor), ti = Jn && /android/i.test($a) || /android/i.test(Ua);
Jn && $a.toLowerCase().startsWith("mac") && navigator.maxTouchPoints;
const Pf = Ua.includes("jsdom/");
function Mf() {
    if (!Jn) return {
        platform: "",
        maxTouchPoints: -1
    };
    const e = navigator.userAgentData;
    return e != null && e.platform ? {
        platform: e.platform,
        maxTouchPoints: navigator.maxTouchPoints
    } : {
        platform: navigator.platform ?? "",
        maxTouchPoints: navigator.maxTouchPoints ?? -1
    };
}
_c72 = Mf;
function Df() {
    if (!Jn) return "";
    const e = navigator.userAgentData;
    return e && Array.isArray(e.brands) ? e.brands.map(({ brand: t, version: n })=>`${t}/${n}`).join(" ") : navigator.userAgent;
}
_c73 = Df;
function Vf() {
    if (!Jn) return "";
    const e = navigator.userAgentData;
    return e != null && e.platform ? e.platform : navigator.platform ?? "";
}
_c74 = Vf;
const ni = "data-base-ui-focusable", Ga = "active", Ya = "selected", Lf = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])", fn = "ArrowLeft", dn = "ArrowRight", Ci = "ArrowUp", vr = "ArrowDown";
function Ut(e) {
    var n;
    let t = e.activeElement;
    for(; ((n = t == null ? void 0 : t.shadowRoot) == null ? void 0 : n.activeElement) != null;)t = t.shadowRoot.activeElement;
    return t;
}
_c75 = Ut;
function De(e, t) {
    var r;
    if (!e || !t) return !1;
    const n = (r = t.getRootNode) == null ? void 0 : r.call(t);
    if (e.contains(t)) return !0;
    if (n && Ko(n)) {
        let o1 = t;
        for(; o1;){
            if (e === o1) return !0;
            o1 = o1.parentNode || o1.host;
        }
    }
    return !1;
}
_c76 = De;
function gt(e) {
    return "composedPath" in e ? e.composedPath()[0] : e.target;
}
function Ot(e, t) {
    if (t == null) return !1;
    if ("composedPath" in e) return e.composedPath().includes(t);
    const n = e;
    return n.target != null && t.contains(n.target);
}
_c77 = Ot;
function Ff(e) {
    return e.matches("html,body");
}
_c78 = Ff;
function it(e) {
    return (e == null ? void 0 : e.ownerDocument) || document;
}
function Xa(e) {
    return Be(e) && e.matches(Lf);
}
_c79 = Xa;
function ri(e) {
    return e ? e.getAttribute("role") === "combobox" && Xa(e) : !1;
}
function lr(e) {
    return e ? e.hasAttribute(ni) ? e : e.querySelector(`[${ni}]`) || e : null;
}
function Dn(e, t, n = !0) {
    return e.filter((o1)=>{
        var i;
        return o1.parentId === t && (!n || ((i = o1.context) == null ? void 0 : i.open));
    }).flatMap((o1)=>[
            o1,
            ...Dn(e, o1.id, n)
        ]);
}
_c80 = Dn;
function Is(e, t) {
    var o1;
    let n = [], r = (o1 = e.find((i)=>i.id === t)) == null ? void 0 : o1.parentId;
    for(; r;){
        const i = e.find((s)=>s.id === r);
        r = i == null ? void 0 : i.parentId, i && (n = n.concat(i));
    }
    return n;
}
_c81 = Is;
function et(e) {
    e.preventDefault(), e.stopPropagation();
}
function zf(e) {
    return "nativeEvent" in e;
}
function Za(e) {
    return e.mozInputSource === 0 && e.isTrusted ? !0 : ti && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
_c82 = Za;
function Ja(e) {
    return Pf ? !1 : !ti && e.width === 0 && e.height === 0 || ti && e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse" || // iOS VoiceOver returns 0.333• for width/height.
    e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "touch";
}
_c83 = Ja;
function ks(e, t) {
    return [
        "mouse",
        "pen"
    ].includes(e);
}
function Qa(e) {
    const t = e.type;
    return t === "click" || t === "mousedown" || t === "keydown" || t === "keyup";
}
_c84 = Qa;
const jf = [
    "top",
    "right",
    "bottom",
    "left"
], Yn = Math.min, bt = Math.max, Ur = Math.round, Mn = Math.floor, jt = (e)=>({
        x: e,
        y: e
    }), Bf = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}, qf = {
    start: "end",
    end: "start"
};
function oi(e, t, n) {
    return bt(e, Yn(t, n));
}
function Xt(e, t) {
    return typeof e == "function" ? e(t) : e;
}
_c85 = Xt;
function vt(e) {
    return e.split("-")[0];
}
function gn(e) {
    return e.split("-")[1];
}
function Oi(e) {
    return e === "x" ? "y" : "x";
}
_c86 = Oi;
function Ti(e) {
    return e === "y" ? "height" : "width";
}
_c87 = Ti;
const Hf = /* @__PURE__ */ new Set([
    "top",
    "bottom"
]);
function Et(e) {
    return Hf.has(vt(e)) ? "y" : "x";
}
_c88 = Et;
function Ii(e) {
    return Oi(Et(e));
}
_c89 = Ii;
function Wf(e, t, n) {
    n === void 0 && (n = !1);
    const r = gn(e), o1 = Ii(e), i = Ti(o1);
    let s = o1 === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (s = Kr(s)), [
        s,
        Kr(s)
    ];
}
_c90 = Wf;
function $f(e) {
    const t = Kr(e);
    return [
        ii(e),
        t,
        ii(t)
    ];
}
function ii(e) {
    return e.replace(/start|end/g, (t)=>qf[t]);
}
const _s90 = [
    "left",
    "right"
], Ns = [
    "right",
    "left"
], Uf = [
    "top",
    "bottom"
], Kf = [
    "bottom",
    "top"
];
function Gf(e, t, n) {
    switch(e){
        case "top":
        case "bottom":
            return n ? t ? Ns : _s90 : t ? _s90 : Ns;
        case "left":
        case "right":
            return t ? Uf : Kf;
        default:
            return [];
    }
}
_c91 = Gf;
function Yf(e, t, n, r) {
    const o1 = gn(e);
    let i = Gf(vt(e), n === "start", r);
    return o1 && (i = i.map((s)=>s + "-" + o1), t && (i = i.concat(i.map(ii)))), i;
}
_c92 = Yf;
function Kr(e) {
    return e.replace(/left|right|bottom|top/g, (t)=>Bf[t]);
}
_c93 = Kr;
function Xf(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    };
}
_c94 = Xf;
function ec(e) {
    return typeof e != "number" ? Xf(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    };
}
function Gr(e) {
    const { x: t, y: n, width: r, height: o1 } = e;
    return {
        width: r,
        height: o1,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o1,
        x: t,
        y: n
    };
}
_c95 = Gr;
function Tr(e, t, n) {
    return Math.floor(e / t) !== n;
}
_c96 = Tr;
function Vn(e, t) {
    return t < 0 || t >= e.current.length;
}
_c97 = Vn;
function zr(e, t) {
    return Ze(e, {
        disabledIndices: t
    });
}
function si(e, t) {
    return Ze(e, {
        decrement: !0,
        startingIndex: e.current.length,
        disabledIndices: t
    });
}
function Ze(e, { startingIndex: t = -1, decrement: n = !1, disabledIndices: r, amount: o1 = 1 } = {}) {
    let i = t;
    do i += n ? -o1 : o1;
    while (i >= 0 && i <= e.current.length - 1 && hn(e, i, r))
    return i;
}
_c98 = Ze;
function tc(e, { event: t, orientation: n, loopFocus: r, rtl: o1, cols: i, disabledIndices: s, minIndex: a, maxIndex: c, prevIndex: l, stopEvent: u = !1 }) {
    let f = l;
    const h = [], b = {};
    let g = !1;
    {
        let p = null, y = -1;
        e.current.forEach((v, S)=>{
            if (v == null) return;
            const R = v.closest('[role="row"]');
            R && (g = !0), (R !== p || y === -1) && (p = R, y += 1, h[y] = []), h[y].push(S), b[S] = y;
        });
    }
    const m = g && h.length > 0 && h.some((p)=>p.length !== i);
    function w(p) {
        if (!m || l === -1) return;
        const y = b[l];
        if (y == null) return;
        const v = h[y].indexOf(l);
        let S = p === "up" ? y - 1 : y + 1;
        r && (S < 0 ? S = h.length - 1 : S >= h.length && (S = 0));
        const R = /* @__PURE__ */ new Set();
        for(; S >= 0 && S < h.length && !R.has(S);){
            R.add(S);
            const C = h[S];
            if (C.length === 0) {
                S = p === "up" ? S - 1 : S + 1;
                continue;
            }
            const x = Math.min(v, C.length - 1);
            for(let O = x; O >= 0; O -= 1){
                const N = C[O];
                if (!hn(e, N, s)) return N;
            }
            S = p === "up" ? S - 1 : S + 1, r && (S < 0 ? S = h.length - 1 : S >= h.length && (S = 0));
        }
    }
    if (t.key === Ci) {
        const p = w("up");
        if (p !== void 0) u && et(t), f = p;
        else {
            if (u && et(t), l === -1) f = c;
            else if (f = Ze(e, {
                startingIndex: f,
                amount: i,
                decrement: !0,
                disabledIndices: s
            }), r && (l - i < a || f < 0)) {
                const y = l % i, v = c % i, S = c - (v - y);
                v === y ? f = c : f = v > y ? S : S - i;
            }
            Vn(e, f) && (f = l);
        }
    }
    if (t.key === vr) {
        const p = w("down");
        p !== void 0 ? (u && et(t), f = p) : (u && et(t), l === -1 ? f = a : (f = Ze(e, {
            startingIndex: l,
            amount: i,
            disabledIndices: s
        }), r && l + i > c && (f = Ze(e, {
            startingIndex: l % i - i,
            amount: i,
            disabledIndices: s
        }))), Vn(e, f) && (f = l));
    }
    if (n === "both") {
        const p = Mn(l / i);
        t.key === (o1 ? fn : dn) && (u && et(t), l % i !== i - 1 ? (f = Ze(e, {
            startingIndex: l,
            disabledIndices: s
        }), r && Tr(f, i, p) && (f = Ze(e, {
            startingIndex: l - l % i - 1,
            disabledIndices: s
        }))) : r && (f = Ze(e, {
            startingIndex: l - l % i - 1,
            disabledIndices: s
        })), Tr(f, i, p) && (f = l)), t.key === (o1 ? dn : fn) && (u && et(t), l % i !== 0 ? (f = Ze(e, {
            startingIndex: l,
            decrement: !0,
            disabledIndices: s
        }), r && Tr(f, i, p) && (f = Ze(e, {
            startingIndex: l + (i - l % i),
            decrement: !0,
            disabledIndices: s
        }))) : r && (f = Ze(e, {
            startingIndex: l + (i - l % i),
            decrement: !0,
            disabledIndices: s
        })), Tr(f, i, p) && (f = l));
        const y = Mn(c / i) === p;
        Vn(e, f) && (r && y ? f = t.key === (o1 ? dn : fn) ? c : Ze(e, {
            startingIndex: l - l % i - 1,
            disabledIndices: s
        }) : f = l);
    }
    return f;
}
function nc(e, t, n) {
    const r = [];
    let o1 = 0;
    return e.forEach(({ width: i, height: s }, a)=>{
        if (i > t && ("TURBOPACK compile-time value", "development") !== "production") throw new Error(("TURBOPACK compile-time truthy", 1) ? `[Floating UI]: Invalid grid - item width at index ${a} is greater than grid columns` : "TURBOPACK unreachable");
        let c = !1;
        for(n && (o1 = 0); !c;){
            const l = [];
            for(let u = 0; u < i; u += 1)for(let f = 0; f < s; f += 1)l.push(o1 + u + f * t);
            o1 % t + i <= t && l.every((u)=>r[u] == null) ? (l.forEach((u)=>{
                r[u] = a;
            }), c = !0) : o1 += 1;
        }
    }), [
        ...r
    ];
}
function rc(e, t, n, r, o1) {
    if (e === -1) return -1;
    const i = n.indexOf(e), s = t[e];
    switch(o1){
        case "tl":
            return i;
        case "tr":
            return s ? i + s.width - 1 : i;
        case "bl":
            return s ? i + (s.height - 1) * r : i;
        case "br":
            return n.lastIndexOf(e);
        default:
            return -1;
    }
}
function oc(e, t) {
    return t.flatMap((n, r)=>e.includes(n) ? [
            r
        ] : []);
}
function hn(e, t, n) {
    if (typeof n == "function") return n(t);
    if (n) return n.includes(t);
    const r = e.current[t];
    return r ? r.hasAttribute("disabled") || r.getAttribute("aria-disabled") === "true" : !1;
}
/*!
* tabbable 6.4.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/ var Zf = [
    "input:not([inert]):not([inert] *)",
    "select:not([inert]):not([inert] *)",
    "textarea:not([inert]):not([inert] *)",
    "a[href]:not([inert]):not([inert] *)",
    "button:not([inert]):not([inert] *)",
    "[tabindex]:not(slot):not([inert]):not([inert] *)",
    "audio[controls]:not([inert]):not([inert] *)",
    "video[controls]:not([inert]):not([inert] *)",
    '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)',
    "details>summary:first-of-type:not([inert]):not([inert] *)",
    "details:not([inert]):not([inert] *)"
], Yr = /* @__PURE__ */ Zf.join(","), ic = typeof Element > "u", Xn = ic ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Xr = !ic && Element.prototype.getRootNode ? function(e) {
    var t;
    return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
    return e == null ? void 0 : e.ownerDocument;
}, Zr = function(t, n) {
    var r;
    n === void 0 && (n = !0);
    var o1 = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "inert"), i = o1 === "" || o1 === "true", s = i || n && t && // closest does not exist on shadow roots, so we fall back to a manual
    // lookup upward, in case it is not defined.
    (typeof t.closest == "function" ? t.closest("[inert]") : Zr(t.parentNode));
    return s;
}, Jf = function(t) {
    var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
    return r === "" || r === "true";
}, sc = function(t, n, r) {
    if (Zr(t)) return [];
    var o1 = Array.prototype.slice.apply(t.querySelectorAll(Yr));
    return n && Xn.call(t, Yr) && o1.unshift(t), o1 = o1.filter(r), o1;
}, Jr = function(t, n, r) {
    for(var o1 = [], i = Array.from(t); i.length;){
        var s = i.shift();
        if (!Zr(s, !1)) if (s.tagName === "SLOT") {
            var a = s.assignedElements(), c = a.length ? a : s.children, l = Jr(c, !0, r);
            r.flatten ? o1.push.apply(o1, l) : o1.push({
                scopeParent: s,
                candidates: l
            });
        } else {
            var u = Xn.call(s, Yr);
            u && r.filter(s) && (n || !t.includes(s)) && o1.push(s);
            var f = s.shadowRoot || // check for an undisclosed shadow
            typeof r.getShadowRoot == "function" && r.getShadowRoot(s), h = !Zr(f, !1) && (!r.shadowRootFilter || r.shadowRootFilter(s));
            if (f && h) {
                var b = Jr(f === !0 ? s.children : f.children, !0, r);
                r.flatten ? o1.push.apply(o1, b) : o1.push({
                    scopeParent: s,
                    candidates: b
                });
            } else i.unshift.apply(i, s.children);
        }
    }
    return o1;
}, ac = function(t) {
    return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, cc = function(t) {
    if (!t) throw new Error("No node provided");
    return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || Jf(t)) && !ac(t) ? 0 : t.tabIndex;
}, Qf = function(t, n) {
    var r = cc(t);
    return r < 0 && n && !ac(t) ? 0 : r;
}, ed = function(t, n) {
    return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, lc = function(t) {
    return t.tagName === "INPUT";
}, td = function(t) {
    return lc(t) && t.type === "hidden";
}, nd = function(t) {
    var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) {
        return r.tagName === "SUMMARY";
    });
    return n;
}, rd = function(t, n) {
    for(var r = 0; r < t.length; r++)if (t[r].checked && t[r].form === n) return t[r];
}, od = function(t) {
    if (!t.name) return !0;
    var n = t.form || Xr(t), r = function(a) {
        return n.querySelectorAll('input[type="radio"][name="' + a + '"]');
    }, o1;
    if (("TURBOPACK compile-time value", "object") < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function") o1 = r(window.CSS.escape(t.name));
    else try {
        o1 = r(t.name);
    } catch (s) {
        return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", s.message), !1;
    }
    var i = rd(o1, t.form);
    return !i || i === t;
}, id = function(t) {
    return lc(t) && t.type === "radio";
}, sd = function(t) {
    return id(t) && !od(t);
}, ad = function(t) {
    var n, r = t && Xr(t), o1 = (n = r) === null || n === void 0 ? void 0 : n.host, i = !1;
    if (r && r !== t) {
        var s, a, c;
        for(i = !!((s = o1) !== null && s !== void 0 && (a = s.ownerDocument) !== null && a !== void 0 && a.contains(o1) || t != null && (c = t.ownerDocument) !== null && c !== void 0 && c.contains(t)); !i && o1;){
            var l, u, f;
            r = Xr(o1), o1 = (l = r) === null || l === void 0 ? void 0 : l.host, i = !!((u = o1) !== null && u !== void 0 && (f = u.ownerDocument) !== null && f !== void 0 && f.contains(o1));
        }
    }
    return i;
}, As = function(t) {
    var n = t.getBoundingClientRect(), r = n.width, o1 = n.height;
    return r === 0 && o1 === 0;
}, cd = function(t, n) {
    var r = n.displayCheck, o1 = n.getShadowRoot;
    if (r === "full-native" && "checkVisibility" in t) {
        var i = t.checkVisibility({
            // Checking opacity might be desirable for some use cases, but natively,
            // opacity zero elements _are_ focusable and tabbable.
            checkOpacity: !1,
            opacityProperty: !1,
            contentVisibilityAuto: !0,
            visibilityProperty: !0,
            // This is an alias for `visibilityProperty`. Contemporary browsers
            // support both. However, this alias has wider browser support (Chrome
            // >= 105 and Firefox >= 106, vs. Chrome >= 121 and Firefox >= 122), so
            // we include it anyway.
            checkVisibilityCSS: !0
        });
        return !i;
    }
    if (getComputedStyle(t).visibility === "hidden") return !0;
    var s = Xn.call(t, "details>summary:first-of-type"), a = s ? t.parentElement : t;
    if (Xn.call(a, "details:not([open]) *")) return !0;
    if (!r || r === "full" || // full-native can run this branch when it falls through in case
    // Element#checkVisibility is unsupported
    r === "full-native" || r === "legacy-full") {
        if (typeof o1 == "function") {
            for(var c = t; t;){
                var l = t.parentElement, u = Xr(t);
                if (l && !l.shadowRoot && o1(l) === !0) return As(t);
                t.assignedSlot ? t = t.assignedSlot : !l && u !== t.ownerDocument ? t = u.host : t = l;
            }
            t = c;
        }
        if (ad(t)) return !t.getClientRects().length;
        if (r !== "legacy-full") return !0;
    } else if (r === "non-zero-area") return As(t);
    return !1;
}, ld = function(t) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName)) for(var n = t.parentElement; n;){
        if (n.tagName === "FIELDSET" && n.disabled) {
            for(var r = 0; r < n.children.length; r++){
                var o1 = n.children.item(r);
                if (o1.tagName === "LEGEND") return Xn.call(n, "fieldset[disabled] *") ? !0 : !o1.contains(t);
            }
            return !0;
        }
        n = n.parentElement;
    }
    return !1;
}, ai = function(t, n) {
    return !(n.disabled || td(n) || cd(n, t) || // For a details element with a summary, the summary element gets the focus
    nd(n) || ld(n));
}, ci = function(t, n) {
    return !(sd(n) || cc(n) < 0 || !ai(t, n));
}, ud = function(t) {
    var n = parseInt(t.getAttribute("tabindex"), 10);
    return !!(isNaN(n) || n >= 0);
}, uc = function(t) {
    var n = [], r = [];
    return t.forEach(function(o1, i) {
        var s = !!o1.scopeParent, a = s ? o1.scopeParent : o1, c = Qf(a, s), l = s ? uc(o1.candidates) : a;
        c === 0 ? s ? n.push.apply(n, l) : n.push(a) : r.push({
            documentOrder: i,
            tabIndex: c,
            item: o1,
            isScope: s,
            content: l
        });
    }), r.sort(ed).reduce(function(o1, i) {
        return i.isScope ? o1.push.apply(o1, i.content) : o1.push(i.content), o1;
    }, []).concat(n);
}, po = function(t, n) {
    n = n || {};
    var r;
    return n.getShadowRoot ? r = Jr([
        t
    ], n.includeContainer, {
        filter: ci.bind(null, n),
        flatten: !1,
        getShadowRoot: n.getShadowRoot,
        shadowRootFilter: ud
    }) : r = sc(t, n.includeContainer, ci.bind(null, n)), uc(r);
}, fd = function(t, n) {
    n = n || {};
    var r;
    return n.getShadowRoot ? r = Jr([
        t
    ], n.includeContainer, {
        filter: ai.bind(null, n),
        flatten: !0,
        getShadowRoot: n.getShadowRoot
    }) : r = sc(t, n.includeContainer, ai.bind(null, n)), r;
}, fc = function(t, n) {
    if (n = n || {}, !t) throw new Error("No node provided");
    return Xn.call(t, Yr) === !1 ? !1 : ci(n, t);
};
const wr = ()=>({
        getShadowRoot: !0,
        displayCheck: // JSDOM does not support the `tabbable` library. To solve this we can
        // check if `ResizeObserver` is a real function (not polyfilled), which
        // determines if the current environment is JSDOM-like.
        typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
    });
function dc(e, t) {
    const n = po(e, wr()), r = n.length;
    if (r === 0) return;
    const o1 = Ut(it(e)), i = n.indexOf(o1), s = i === -1 ? t === 1 ? 0 : r - 1 : i + t;
    return n[s];
}
function hc(e) {
    return dc(it(e).body, 1) || e;
}
function pc(e) {
    return dc(it(e).body, -1) || e;
}
function ar(e, t) {
    const n = t || e.currentTarget, r = e.relatedTarget;
    return !r || !De(n, r);
}
function dd(e) {
    po(e, wr()).forEach((n)=>{
        n.dataset.tabindex = n.getAttribute("tabindex") || "", n.setAttribute("tabindex", "-1");
    });
}
function Ps(e) {
    e.querySelectorAll("[data-tabindex]").forEach((n)=>{
        const r = n.dataset.tabindex;
        delete n.dataset.tabindex, r ? n.setAttribute("tabindex", r) : n.removeAttribute("tabindex");
    });
}
_c99 = Ps;
function hd() {
    const e = /* @__PURE__ */ new Map();
    return {
        emit (t, n) {
            var r;
            (r = e.get(t)) == null || r.forEach((o1)=>o1(n));
        },
        on (t, n) {
            e.has(t) || e.set(t, /* @__PURE__ */ new Set()), e.get(t).add(n);
        },
        off (t, n) {
            var r;
            (r = e.get(t)) == null || r.delete(n);
        }
    };
}
const mc = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(null);
("TURBOPACK compile-time value", "development") !== "production" && (mc.displayName = "FloatingNodeContext");
const gc = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(null);
("TURBOPACK compile-time value", "development") !== "production" && (gc.displayName = "FloatingTreeContext");
const mo = ()=>{
    _s24();
    var e;
    return ((e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(mc)) == null ? void 0 : e.id) || null;
}, go = (e)=>{
    _s25();
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(gc);
    return e ?? t;
};
_s24(mo, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
_s25(go, "HJ1wmQfhQB2DF5cup/6Wxn+TXqs=");
function Qr(e) {
    return `data-base-ui-${e}`;
}
_c100 = Qr;
function qt(e) {
    return (e == null ? void 0 : e.ownerDocument) || document;
}
const ur = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_s26(function(t, n) {
    _s26();
    const [r, o1] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState();
    return ne(()=>{
        Af && o1("button");
    }, []), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
        ...t,
        ref: n,
        style: gr,
        "aria-hidden": r ? void 0 : !0,
        ...{
            tabIndex: 0,
            // Role is only for VoiceOver
            role: r
        },
        "data-base-ui-focus-guard": ""
    });
}, "g264nRhXa/nCN1ODAukpLGnASUg="));
("TURBOPACK compile-time value", "development") !== "production" && (ur.displayName = "FocusGuard");
let Ms = 0;
function jr(e, t = {}) {
    const { preventScroll: n = !1, cancelPrevious: r = !0, sync: o1 = !1 } = t;
    r && cancelAnimationFrame(Ms);
    const i = ()=>e == null ? void 0 : e.focus({
            preventScroll: n
        });
    o1 ? i() : Ms = requestAnimationFrame(i);
}
const Ln = {
    inert: /* @__PURE__ */ new WeakMap(),
    "aria-hidden": /* @__PURE__ */ new WeakMap(),
    none: /* @__PURE__ */ new WeakMap()
};
function Ds(e) {
    return e === "inert" ? Ln.inert : e === "aria-hidden" ? Ln["aria-hidden"] : Ln.none;
}
_c101 = Ds;
let Ir = /* @__PURE__ */ new WeakSet(), kr = {}, Oo = 0;
const bc = (e)=>e && (e.host || bc(e.parentNode)), pd = (e, t)=>t.map((n)=>{
        if (e.contains(n)) return n;
        const r = bc(n);
        return e.contains(r) ? r : null;
    }).filter((n)=>n != null);
function md(e, t, n, r) {
    const o1 = "data-base-ui-inert", i = r ? "inert" : n ? "aria-hidden" : null, s = pd(t, e), a = /* @__PURE__ */ new Set(), c = new Set(s), l = [];
    kr[o1] || (kr[o1] = /* @__PURE__ */ new WeakMap());
    const u = kr[o1];
    s.forEach(f), h(t), a.clear();
    function f(b) {
        !b || a.has(b) || (a.add(b), b.parentNode && f(b.parentNode));
    }
    function h(b) {
        !b || c.has(b) || [].forEach.call(b.children, (g)=>{
            if (mn(g) !== "script") if (a.has(g)) h(g);
            else {
                const m = i ? g.getAttribute(i) : null, w = m !== null && m !== "false", p = Ds(i), y = (p.get(g) || 0) + 1, v = (u.get(g) || 0) + 1;
                p.set(g, y), u.set(g, v), l.push(g), y === 1 && w && Ir.add(g), v === 1 && g.setAttribute(o1, ""), !w && i && g.setAttribute(i, i === "inert" ? "" : "true");
            }
        });
    }
    return Oo += 1, ()=>{
        l.forEach((b)=>{
            const g = Ds(i), w = (g.get(b) || 0) - 1, p = (u.get(b) || 0) - 1;
            g.set(b, w), u.set(b, p), w || (!Ir.has(b) && i && b.removeAttribute(i), Ir.delete(b)), p || b.removeAttribute(o1);
        }), Oo -= 1, Oo || (Ln.inert = /* @__PURE__ */ new WeakMap(), Ln["aria-hidden"] = /* @__PURE__ */ new WeakMap(), Ln.none = /* @__PURE__ */ new WeakMap(), Ir = /* @__PURE__ */ new WeakSet(), kr = {});
    };
}
function gd(e, t = !1, n = !1) {
    const r = it(e[0]).body;
    return md(e.concat(Array.from(r.querySelectorAll("[aria-live]"))), r, t, n);
}
const ki = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(null);
("TURBOPACK compile-time value", "development") !== "production" && (ki.displayName = "PortalContext");
const yc = ()=>{
    _s27();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(ki);
}, bd = Qr("portal");
_s27(yc, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
function yd(e = {}) {
    _s28();
    const { ref: t, container: n, componentProps: r = $e, elementProps: o1, elementState: i } = e, s = br(), a = yc(), c = a == null ? void 0 : a.portalNode, [l, u] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(null), [f, h] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(null), b = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null);
    ne(()=>{
        if (n === null) {
            b.current && (b.current = null, h(null), u(null));
            return;
        }
        if (s == null) return;
        const w = (n && (mi(n) ? n : n.current)) ?? c ?? document.body;
        if (w == null) {
            b.current && (b.current = null, h(null), u(null));
            return;
        }
        b.current !== w && (b.current = w, h(null), u(w));
    }, [
        n,
        c,
        s
    ]);
    const g = Ne("div", r, {
        ref: [
            t,
            h
        ],
        state: i,
        props: [
            {
                id: s,
                [bd]: ""
            },
            o1
        ]
    });
    return {
        portalNode: f,
        portalSubtree: l && g ? /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"](g, l) : null
    };
}
_s28(yd, "5i9cXWy+OSVy/3EVAexDKoeM8HM=");
const _i = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_s29(function(t, n) {
    _s29();
    const { children: r, container: o1, className: i, render: s, renderGuards: a, ...c } = t, { portalNode: l, portalSubtree: u } = yd({
        container: o1,
        ref: n,
        componentProps: t,
        elementProps: c
    }), f = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null), h = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null), b = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null), g = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null), [m, w] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(null), p = m == null ? void 0 : m.modal, y = m == null ? void 0 : m.open, v = typeof a == "boolean" ? a : !!m && !m.modal && m.open && !!l;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "_i.useEffect": ()=>{
            if (!l || p) return;
            function R(C) {
                l && ar(C) && (C.type === "focusin" ? Ps : dd)(l);
            }
            return l.addEventListener("focusin", R, !0), l.addEventListener("focusout", R, !0), ({
                "_i.useEffect": ()=>{
                    l.removeEventListener("focusin", R, !0), l.removeEventListener("focusout", R, !0);
                }
            })["_i.useEffect"];
        }
    }["_i.useEffect"], [
        l,
        p
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "_i.useEffect": ()=>{
            !l || y || Ps(l);
        }
    }["_i.useEffect"], [
        y,
        l
    ]);
    const S = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "_i.useMemo[S]": ()=>({
                beforeOutsideRef: f,
                afterOutsideRef: h,
                beforeInsideRef: b,
                afterInsideRef: g,
                portalNode: l,
                setFocusManagerState: w
            })
    }["_i.useMemo[S]"], [
        l
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Fragment, {
        children: [
            u,
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(ki.Provider, {
                value: S,
                children: [
                    v && l && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ur, {
                        "data-type": "outside",
                        ref: f,
                        onFocus: (R)=>{
                            var C;
                            if (ar(R, l)) (C = b.current) == null || C.focus();
                            else {
                                const x = m ? m.domReference : null, O = pc(x);
                                O == null || O.focus();
                            }
                        }
                    }),
                    v && l && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                        "aria-owns": l.id,
                        style: ju
                    }),
                    l && /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"](r, l),
                    v && l && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ur, {
                        "data-type": "outside",
                        ref: h,
                        onFocus: (R)=>{
                            var C;
                            if (ar(R, l)) (C = g.current) == null || C.focus();
                            else {
                                const x = m ? m.domReference : null, O = hc(x);
                                O == null || O.focus(), m != null && m.closeOnFocusOut && (m == null || m.onOpenChange(!1, ke(lo, R.nativeEvent)));
                            }
                        }
                    })
                ]
            })
        ]
    });
}, "sjvRMmA06UkMkvK/wO+/+N+v81A="));
("TURBOPACK compile-time value", "development") !== "production" && (_i.displayName = "FloatingPortal");
function vd(e, t) {
    const n = Ue(e.target);
    return e instanceof n.KeyboardEvent ? "keyboard" : e instanceof n.FocusEvent ? t || "keyboard" : "pointerType" in e ? e.pointerType || "keyboard" : "touches" in e ? "touch" : e instanceof n.MouseEvent ? t || (e.detail === 0 ? "keyboard" : "mouse") : "";
}
const Vs = 20;
let ln = [];
function Ni() {
    ln = ln.filter((e)=>e.isConnected);
}
_c102 = Ni;
function wd(e) {
    Ni(), e && mn(e) !== "body" && (ln.push(e), ln.length > Vs && (ln = ln.slice(-Vs)));
}
function To() {
    return Ni(), ln[ln.length - 1];
}
_c103 = To;
function Ed(e) {
    if (!e) return null;
    const t = wr();
    return fc(e, t) ? e : po(e, t)[0] || e;
}
_c104 = Ed;
function Sd(e) {
    return !e || !e.isConnected ? !1 : typeof e.checkVisibility == "function" ? e.checkVisibility() : wt(e).display !== "none";
}
_c105 = Sd;
function Ls(e, t) {
    var s;
    if (!t.current.includes("floating") && !((s = e.getAttribute("role")) != null && s.includes("dialog"))) return;
    const n = wr(), o1 = fd(e, n).filter((a)=>{
        const c = a.getAttribute("data-tabindex") || "";
        return fc(a, n) || a.hasAttribute("data-tabindex") && !c.startsWith("-");
    }), i = e.getAttribute("tabindex");
    t.current.includes("floating") || o1.length === 0 ? i !== "0" && e.setAttribute("tabindex", "0") : (i !== "-1" || e.hasAttribute("data-tabindex") && e.getAttribute("data-tabindex") !== "-1") && (e.setAttribute("tabindex", "-1"), e.setAttribute("data-tabindex", "-1"));
}
_c106 = Ls;
function vc(e) {
    _s30();
    const { context: t, children: n, disabled: r = !1, order: o1 = [
        "content"
    ], initialFocus: i = !0, returnFocus: s = !0, restoreFocus: a = !1, modal: c = !0, closeOnFocusOut: l = !0, openInteractionType: u = "", getInsideElements: f = ()=>[], nextFocusableElement: h, previousFocusableElement: b, beforeContentFocusGuardRef: g, externalTree: m } = e, w = "rootStore" in t ? t.rootStore : t, p = w.useState("open"), y = w.useState("domReferenceElement"), v = w.useState("floatingElement"), { events: S, dataRef: R } = w.context, C = ie(()=>{
        var F;
        return (F = R.current.floatingContext) == null ? void 0 : F.nodeId;
    }), x = ie(f), O = i === !1, N = ri(y) && O, M = Je(o1), D = Je(i), B = Je(s), j = Je(u), P = go(m), T = yc(), A = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null), _ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null), I = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(!1), k = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(!1), z = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(!1), $ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(-1), ae = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(""), ee = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(""), ge = yt(), fe = yt(), U = uo(), Z = T != null, K = lr(v), he = ie((F = K)=>F ? po(F, wr()) : []), pe = ie((F)=>{
        const Q = he(F);
        return M.current.map(()=>Q).filter(Boolean).flat();
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "vc.useEffect": ()=>{
            if (r || !c) return;
            function F(se) {
                se.key === "Tab" && De(K, Ut(it(K))) && he().length === 0 && !N && et(se);
            }
            const Q = it(K);
            return Q.addEventListener("keydown", F), ({
                "vc.useEffect": ()=>{
                    Q.removeEventListener("keydown", F);
                }
            })["vc.useEffect"];
        }
    }["vc.useEffect"], [
        r,
        y,
        K,
        c,
        M,
        N,
        he,
        pe
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "vc.useEffect": ()=>{
            if (r || !v) return;
            function F(Q) {
                const se = gt(Q), ue = he().indexOf(se);
                ue !== -1 && ($.current = ue);
            }
            return v.addEventListener("focusin", F), ({
                "vc.useEffect": ()=>{
                    v.removeEventListener("focusin", F);
                }
            })["vc.useEffect"];
        }
    }["vc.useEffect"], [
        r,
        v,
        he
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "vc.useEffect": ()=>{
            if (r || !p) return;
            const F = it(K);
            function Q() {
                z.current = !1;
            }
            function se(ue) {
                const q = gt(ue), X = De(v, q) || De(y, q) || De(T == null ? void 0 : T.portalNode, q);
                z.current = !X, ee.current = ue.pointerType || "keyboard";
            }
            function re() {
                ee.current = "keyboard";
            }
            return F.addEventListener("pointerdown", se, !0), F.addEventListener("pointerup", Q, !0), F.addEventListener("pointercancel", Q, !0), F.addEventListener("keydown", re, !0), ({
                "vc.useEffect": ()=>{
                    F.removeEventListener("pointerdown", se, !0), F.removeEventListener("pointerup", Q, !0), F.removeEventListener("pointercancel", Q, !0), F.removeEventListener("keydown", re, !0);
                }
            })["vc.useEffect"];
        }
    }["vc.useEffect"], [
        r,
        v,
        y,
        K,
        p,
        T
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "vc.useEffect": ()=>{
            if (r || !l) return;
            function F() {
                k.current = !0, fe.start(0, {
                    "vc.useEffect.F": ()=>{
                        k.current = !1;
                    }
                }["vc.useEffect.F"]);
            }
            function Q(q) {
                const X = q.relatedTarget, L = q.currentTarget, te = gt(q);
                queueMicrotask({
                    "vc.useEffect.Q": ()=>{
                        const H = C(), Se = w.context.triggerElements, xe = !(De(y, X) || De(v, X) || De(X, v) || De(T == null ? void 0 : T.portalNode, X) || X != null && Se.hasElement(X) || Se.hasMatchingElement({
                            "vc.useEffect.Q": (we)=>De(we, X)
                        }["vc.useEffect.Q"]) || X != null && X.hasAttribute(Qr("focus-guard")) || P && (Dn(P.nodesRef.current, H).find({
                            "vc.useEffect.Q": (we)=>{
                                var Ce, Oe;
                                return De((Ce = we.context) == null ? void 0 : Ce.elements.floating, X) || De((Oe = we.context) == null ? void 0 : Oe.elements.domReference, X);
                            }
                        }["vc.useEffect.Q"]) || Is(P.nodesRef.current, H).find({
                            "vc.useEffect.Q": (we)=>{
                                var Ce, Oe, Ve;
                                return [
                                    (Ce = we.context) == null ? void 0 : Ce.elements.floating,
                                    lr((Oe = we.context) == null ? void 0 : Oe.elements.floating)
                                ].includes(X) || ((Ve = we.context) == null ? void 0 : Ve.elements.domReference) === X;
                            }
                        }["vc.useEffect.Q"])));
                        if (L === y && K && Ls(K, M), a && L !== y && !Sd(te) && Ut(it(K)) === it(K).body) {
                            if (Be(K) && (K.focus(), a === "popup")) {
                                U.request({
                                    "vc.useEffect.Q": ()=>{
                                        K.focus();
                                    }
                                }["vc.useEffect.Q"]);
                                return;
                            }
                            const we = $.current, Ce = he(), Oe = Ce[we] || Ce[Ce.length - 1] || K;
                            Be(Oe) && Oe.focus();
                        }
                        if (R.current.insideReactTree) {
                            R.current.insideReactTree = !1;
                            return;
                        }
                        (N || !c) && X && xe && !k.current && // Fix React 18 Strict Mode returnFocus due to double rendering.
                        // For an "untrapped" typeable combobox (input role=combobox with
                        // initialFocus=false), re-opening the popup and tabbing out should still close it even
                        // when the previously focused element (e.g. the next tabbable outside the popup) is
                        // focused again. Otherwise, the popup remains open on the second Tab sequence:
                        // click input -> Tab (closes) -> click input -> Tab.
                        // Allow closing when `isUntrappedTypeableCombobox` regardless of the previously focused element.
                        (N || X !== To()) && (I.current = !0, w.setOpen(!1, ke(lo, q)));
                    }
                }["vc.useEffect.Q"]);
            }
            function se() {
                z.current || (R.current.insideReactTree = !0, ge.start(0, {
                    "vc.useEffect.se": ()=>{
                        R.current.insideReactTree = !1;
                    }
                }["vc.useEffect.se"]));
            }
            const re = Be(y) ? y : null, ue = [];
            if (!(!v && !re)) return re && (re.addEventListener("focusout", Q), re.addEventListener("pointerdown", F), ue.push({
                "vc.useEffect": ()=>{
                    re.removeEventListener("focusout", Q), re.removeEventListener("pointerdown", F);
                }
            }["vc.useEffect"])), v && (v.addEventListener("focusout", Q), T && (v.addEventListener("focusout", se, !0), ue.push({
                "vc.useEffect": ()=>{
                    v.removeEventListener("focusout", se, !0);
                }
            }["vc.useEffect"])), ue.push({
                "vc.useEffect": ()=>{
                    v.removeEventListener("focusout", Q);
                }
            }["vc.useEffect"])), ({
                "vc.useEffect": ()=>{
                    ue.forEach({
                        "vc.useEffect": (q)=>{
                            q();
                        }
                    }["vc.useEffect"]);
                }
            })["vc.useEffect"];
        }
    }["vc.useEffect"], [
        r,
        y,
        v,
        K,
        c,
        P,
        T,
        w,
        l,
        a,
        he,
        N,
        C,
        M,
        R,
        ge,
        fe,
        U
    ]);
    const V = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null), J = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null), Y = Bt(V, g, T == null ? void 0 : T.beforeInsideRef), Re = Bt(J, T == null ? void 0 : T.afterInsideRef);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "vc.useEffect": ()=>{
            var q, X, L;
            if (r || !v || !p) return;
            const F = Array.from(((q = T == null ? void 0 : T.portalNode) == null ? void 0 : q.querySelectorAll(`[${Qr("portal")}]`)) || []), se = (L = (X = (P ? Is(P.nodesRef.current, C()) : []).find({
                "vc.useEffect": (te)=>{
                    var H;
                    return ri(((H = te.context) == null ? void 0 : H.elements.domReference) || null);
                }
            }["vc.useEffect"])) == null ? void 0 : X.context) == null ? void 0 : L.elements.domReference, re = [
                v,
                se,
                ...F,
                ...x(),
                A.current,
                _.current,
                V.current,
                J.current,
                T == null ? void 0 : T.beforeOutsideRef.current,
                T == null ? void 0 : T.afterOutsideRef.current,
                yn(b),
                yn(h),
                N ? y : null
            ].filter({
                "vc.useEffect.re": (te)=>te != null
            }["vc.useEffect.re"]), ue = gd(re, c || N);
            return ({
                "vc.useEffect": ()=>{
                    ue();
                }
            })["vc.useEffect"];
        }
    }["vc.useEffect"], [
        p,
        r,
        y,
        v,
        c,
        M,
        T,
        N,
        P,
        C,
        x,
        h,
        b
    ]), ne(()=>{
        if (!p || r || !Be(K)) return;
        const F = it(K), Q = Ut(F);
        queueMicrotask(()=>{
            const se = pe(K), re = D.current, ue = typeof re == "function" ? re(j.current || "") : re;
            if (ue === void 0 || ue === !1) return;
            let q;
            ue === !0 || ue === null ? q = se[0] || K : q = yn(ue), q = q || se[0] || K, !De(K, Q) && jr(q, {
                preventScroll: q === K
            });
        });
    }, [
        r,
        p,
        K,
        O,
        pe,
        D,
        j
    ]), ne(()=>{
        if (r || !K) return;
        const F = it(K), Q = Ut(F);
        wd(Q);
        function se(q) {
            if (q.open || (ae.current = vd(q.nativeEvent, ee.current)), q.reason === Ju && q.nativeEvent.type === "mouseleave" && (I.current = !0), q.reason === La) if (q.nested) I.current = !1;
            else if (Za(q.nativeEvent) || Ja(q.nativeEvent)) I.current = !1;
            else {
                let X = !1;
                document.createElement("div").focus({
                    get preventScroll () {
                        return X = !0, !1;
                    }
                }), X ? I.current = !1 : I.current = !0;
            }
        }
        S.on("openchange", se);
        const re = F.createElement("span");
        re.setAttribute("tabindex", "-1"), re.setAttribute("aria-hidden", "true"), Object.assign(re.style, gr), Z && y && y.insertAdjacentElement("afterend", re);
        function ue() {
            const q = B.current;
            let X = typeof q == "function" ? q(ae.current) : q;
            if (X === void 0 || X === !1) return null;
            if (X === null && (X = !0), typeof X == "boolean") {
                const te = y || To();
                return te && te.isConnected ? te : re;
            }
            const L = y || To() || re;
            return yn(X) || L;
        }
        return ()=>{
            S.off("openchange", se);
            const q = Ut(F), X = De(v, q) || P && Dn(P.nodesRef.current, C(), !1).some((te)=>{
                var H;
                return De((H = te.context) == null ? void 0 : H.elements.floating, q);
            }), L = ue();
            queueMicrotask(()=>{
                const te = Ed(L), H = typeof B.current != "boolean";
                // eslint-disable-next-line react-hooks/exhaustive-deps
                B.current && !I.current && Be(te) && // If the focus moved somewhere else after mount, avoid returning focus
                // since it likely entered a different element which should be
                // respected: https://github.com/floating-ui/floating-ui/issues/2607
                (!(!H && te !== q && q !== F.body) || X) && te.focus({
                    preventScroll: !0
                }), re.remove();
            });
        };
    }, [
        r,
        v,
        K,
        B,
        R,
        S,
        P,
        Z,
        y,
        C
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "vc.useEffect": ()=>{
            queueMicrotask({
                "vc.useEffect": ()=>{
                    I.current = !1;
                }
            }["vc.useEffect"]);
        }
    }["vc.useEffect"], [
        r
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "vc.useEffect": ()=>{
            if (r || !p) return;
            function F(se) {
                const re = gt(se);
                re != null && re.closest(`[${Fu}]`) && (k.current = !0);
            }
            const Q = it(K);
            return Q.addEventListener("pointerdown", F, !0), ({
                "vc.useEffect": ()=>{
                    Q.removeEventListener("pointerdown", F, !0);
                }
            })["vc.useEffect"];
        }
    }["vc.useEffect"], [
        r,
        p,
        K
    ]), ne(()=>{
        if (!r && T) return T.setFocusManagerState({
            modal: c,
            closeOnFocusOut: l,
            open: p,
            onOpenChange: w.setOpen,
            domReference: y
        }), ()=>{
            T.setFocusManagerState(null);
        };
    }, [
        r,
        T,
        c,
        p,
        w,
        l,
        y
    ]), ne(()=>{
        if (!(r || !K)) return Ls(K, M), ()=>{
            queueMicrotask(Ni);
        };
    }, [
        r,
        K,
        M
    ]);
    const ce = !r && (c ? !N : !0) && (Z || c);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Fragment, {
        children: [
            ce && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ur, {
                "data-type": "inside",
                ref: Y,
                onFocus: (F)=>{
                    var Q;
                    if (c) {
                        const se = pe();
                        jr(se[se.length - 1]);
                    } else if (T != null && T.portalNode) if (I.current = !1, ar(F, T.portalNode)) {
                        const se = hc(y);
                        se == null || se.focus();
                    } else (Q = yn(b ?? T.beforeOutsideRef)) == null || Q.focus();
                }
            }),
            n,
            ce && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ur, {
                "data-type": "inside",
                ref: Re,
                onFocus: (F)=>{
                    var Q;
                    if (c) jr(pe()[0]);
                    else if (T != null && T.portalNode) if (l && (I.current = !0), ar(F, T.portalNode)) {
                        const se = pc(y);
                        se == null || se.focus();
                    } else (Q = yn(h ?? T.afterOutsideRef)) == null || Q.focus();
                }
            })
        ]
    });
}
_s30(vc, "GemI/HSKiHJiddOKH6RkuQu5ChE=");
function Rd(e, t = {}) {
    _s31();
    const n = "rootStore" in e ? e.rootStore : e, r = n.context.dataRef, { enabled: o1 = !0, event: i = "click", toggle: s = !0, ignoreMouse: a = !1, stickIfOpen: c = !0, touchOpenDelay: l = 0 } = t, u = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(void 0), f = uo(), h = yt(), b = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Rd.useMemo[b]": ()=>({
                onPointerDown (g) {
                    u.current = g.pointerType;
                },
                onMouseDown (g) {
                    const m = u.current, w = g.nativeEvent, p = n.select("open");
                    if (g.button !== 0 || i === "click" || ks(m) && a) return;
                    const y = r.current.openEvent, v = y == null ? void 0 : y.type, S = n.select("domReferenceElement") !== g.currentTarget, R = p && S || !(p && s && (!(y && c) || v === "click" || v === "mousedown"));
                    if (Xa(w.target)) {
                        const x = ke(sr, w, w.target);
                        R && m === "touch" && l > 0 ? h.start(l, {
                            "Rd.useMemo[b]": ()=>{
                                n.setOpen(!0, x);
                            }
                        }["Rd.useMemo[b]"]) : n.setOpen(R, x);
                        return;
                    }
                    const C = g.currentTarget;
                    f.request({
                        "Rd.useMemo[b]": ()=>{
                            const x = ke(sr, w, C);
                            R && m === "touch" && l > 0 ? h.start(l, {
                                "Rd.useMemo[b]": ()=>{
                                    n.setOpen(!0, x);
                                }
                            }["Rd.useMemo[b]"]) : n.setOpen(R, x);
                        }
                    }["Rd.useMemo[b]"]);
                },
                onClick (g) {
                    if (i === "mousedown-only") return;
                    const m = u.current;
                    if (i === "mousedown" && m) {
                        u.current = void 0;
                        return;
                    }
                    if (ks(m) && a) return;
                    const w = n.select("open"), p = r.current.openEvent, y = n.select("domReferenceElement") !== g.currentTarget, v = w && y || !(w && s && (!(p && c) || Qa(p))), S = ke(sr, g.nativeEvent, g.currentTarget);
                    v && m === "touch" && l > 0 ? h.start(l, {
                        "Rd.useMemo[b]": ()=>{
                            n.setOpen(!0, S);
                        }
                    }["Rd.useMemo[b]"]) : n.setOpen(v, S);
                },
                onKeyDown () {
                    u.current = void 0;
                }
            })
    }["Rd.useMemo[b]"], [
        r,
        i,
        a,
        n,
        c,
        s,
        f,
        h,
        l
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Rd.useMemo": ()=>o1 ? {
                reference: b
            } : $e
    }["Rd.useMemo"], [
        o1,
        b
    ]);
}
_s31(Rd, "c9TPUYnyaBBIAB9z7fI+ygq/t6U=");
_c107 = Rd;
function Fs(e, t, n) {
    let { reference: r, floating: o1 } = e;
    const i = Et(t), s = Ii(t), a = Ti(s), c = vt(t), l = i === "y", u = r.x + r.width / 2 - o1.width / 2, f = r.y + r.height / 2 - o1.height / 2, h = r[a] / 2 - o1[a] / 2;
    let b;
    switch(c){
        case "top":
            b = {
                x: u,
                y: r.y - o1.height
            };
            break;
        case "bottom":
            b = {
                x: u,
                y: r.y + r.height
            };
            break;
        case "right":
            b = {
                x: r.x + r.width,
                y: f
            };
            break;
        case "left":
            b = {
                x: r.x - o1.width,
                y: f
            };
            break;
        default:
            b = {
                x: r.x,
                y: r.y
            };
    }
    switch(gn(t)){
        case "start":
            b[s] -= h * (n && l ? -1 : 1);
            break;
        case "end":
            b[s] += h * (n && l ? -1 : 1);
            break;
    }
    return b;
}
_c108 = Fs;
const xd = async (e, t, n)=>{
    const { placement: r = "bottom", strategy: o1 = "absolute", middleware: i = [], platform: s } = n, a = i.filter(Boolean), c = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let l = await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o1
    }), { x: u, y: f } = Fs(l, r, c), h = r, b = {}, g = 0;
    for(let m = 0; m < a.length; m++){
        const { name: w, fn: p } = a[m], { x: y, y: v, data: S, reset: R } = await p({
            x: u,
            y: f,
            initialPlacement: r,
            placement: h,
            strategy: o1,
            middlewareData: b,
            rects: l,
            platform: s,
            elements: {
                reference: e,
                floating: t
            }
        });
        u = y ?? u, f = v ?? f, b = {
            ...b,
            [w]: {
                ...b[w],
                ...S
            }
        }, R && g <= 50 && (g++, typeof R == "object" && (R.placement && (h = R.placement), R.rects && (l = R.rects === !0 ? await s.getElementRects({
            reference: e,
            floating: t,
            strategy: o1
        }) : R.rects), { x: u, y: f } = Fs(l, h, c)), m = -1);
    }
    return {
        x: u,
        y: f,
        placement: h,
        strategy: o1,
        middlewareData: b
    };
};
async function fr(e, t) {
    var n;
    t === void 0 && (t = {});
    const { x: r, y: o1, platform: i, rects: s, elements: a, strategy: c } = e, { boundary: l = "clippingAncestors", rootBoundary: u = "viewport", elementContext: f = "floating", altBoundary: h = !1, padding: b = 0 } = Xt(t, e), g = ec(b), w = a[h ? f === "floating" ? "reference" : "floating" : f], p = Gr(await i.getClippingRect({
        element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
        boundary: l,
        rootBoundary: u,
        strategy: c
    })), y = f === "floating" ? {
        x: r,
        y: o1,
        width: s.floating.width,
        height: s.floating.height
    } : s.reference, v = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), S = await (i.isElement == null ? void 0 : i.isElement(v)) ? await (i.getScale == null ? void 0 : i.getScale(v)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }, R = Gr(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: a,
        rect: y,
        offsetParent: v,
        strategy: c
    }) : y);
    return {
        top: (p.top - R.top + g.top) / S.y,
        bottom: (R.bottom - p.bottom + g.bottom) / S.y,
        left: (p.left - R.left + g.left) / S.x,
        right: (R.right - p.right + g.right) / S.x
    };
}
const Cd = function(e) {
    return e === void 0 && (e = {}), {
        name: "flip",
        options: e,
        async fn (t) {
            var n, r;
            const { placement: o1, middlewareData: i, rects: s, initialPlacement: a, platform: c, elements: l } = t, { mainAxis: u = !0, crossAxis: f = !0, fallbackPlacements: h, fallbackStrategy: b = "bestFit", fallbackAxisSideDirection: g = "none", flipAlignment: m = !0, ...w } = Xt(e, t);
            if ((n = i.arrow) != null && n.alignmentOffset) return {};
            const p = vt(o1), y = Et(a), v = vt(a) === a, S = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), R = h || (v || !m ? [
                Kr(a)
            ] : $f(a)), C = g !== "none";
            !h && C && R.push(...Yf(a, m, g, S));
            const x = [
                a,
                ...R
            ], O = await fr(t, w), N = [];
            let M = ((r = i.flip) == null ? void 0 : r.overflows) || [];
            if (u && N.push(O[p]), f) {
                const P = Wf(o1, s, S);
                N.push(O[P[0]], O[P[1]]);
            }
            if (M = [
                ...M,
                {
                    placement: o1,
                    overflows: N
                }
            ], !N.every((P)=>P <= 0)) {
                var D, B;
                const P = (((D = i.flip) == null ? void 0 : D.index) || 0) + 1, T = x[P];
                if (T && (!(f === "alignment" ? y !== Et(T) : !1) || // We leave the current main axis only if every placement on that axis
                // overflows the main axis.
                M.every((I)=>Et(I.placement) === y ? I.overflows[0] > 0 : !0))) return {
                    data: {
                        index: P,
                        overflows: M
                    },
                    reset: {
                        placement: T
                    }
                };
                let A = (B = M.filter((_)=>_.overflows[0] <= 0).sort((_, I)=>_.overflows[1] - I.overflows[1])[0]) == null ? void 0 : B.placement;
                if (!A) switch(b){
                    case "bestFit":
                        {
                            var j;
                            const _ = (j = M.filter((I)=>{
                                if (C) {
                                    const k = Et(I.placement);
                                    return k === y || // Create a bias to the `y` side axis due to horizontal
                                    // reading directions favoring greater width.
                                    k === "y";
                                }
                                return !0;
                            }).map((I)=>[
                                    I.placement,
                                    I.overflows.filter((k)=>k > 0).reduce((k, z)=>k + z, 0)
                                ]).sort((I, k)=>I[1] - k[1])[0]) == null ? void 0 : j[0];
                            _ && (A = _);
                            break;
                        }
                    case "initialPlacement":
                        A = a;
                        break;
                }
                if (o1 !== A) return {
                    reset: {
                        placement: A
                    }
                };
            }
            return {};
        }
    };
};
_c109 = Cd;
function zs(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    };
}
function js(e) {
    return jf.some((t)=>e[t] >= 0);
}
const Od = function(e) {
    return e === void 0 && (e = {}), {
        name: "hide",
        options: e,
        async fn (t) {
            const { rects: n } = t, { strategy: r = "referenceHidden", ...o1 } = Xt(e, t);
            switch(r){
                case "referenceHidden":
                    {
                        const i = await fr(t, {
                            ...o1,
                            elementContext: "reference"
                        }), s = zs(i, n.reference);
                        return {
                            data: {
                                referenceHiddenOffsets: s,
                                referenceHidden: js(s)
                            }
                        };
                    }
                case "escaped":
                    {
                        const i = await fr(t, {
                            ...o1,
                            altBoundary: !0
                        }), s = zs(i, n.floating);
                        return {
                            data: {
                                escapedOffsets: s,
                                escaped: js(s)
                            }
                        };
                    }
                default:
                    return {};
            }
        }
    };
}, wc = /* @__PURE__ */ new Set([
    "left",
    "top"
]);
async function Td(e, t) {
    const { placement: n, platform: r, elements: o1 } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o1.floating)), s = vt(n), a = gn(n), c = Et(n) === "y", l = wc.has(s) ? -1 : 1, u = i && c ? -1 : 1, f = Xt(t, e);
    let { mainAxis: h, crossAxis: b, alignmentAxis: g } = typeof f == "number" ? {
        mainAxis: f,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis
    };
    return a && typeof g == "number" && (b = a === "end" ? g * -1 : g), c ? {
        x: b * u,
        y: h * l
    } : {
        x: h * l,
        y: b * u
    };
}
_c110 = Td;
const Id = function(e) {
    return e === void 0 && (e = 0), {
        name: "offset",
        options: e,
        async fn (t) {
            var n, r;
            const { x: o1, y: i, placement: s, middlewareData: a } = t, c = await Td(t, e);
            return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
                x: o1 + c.x,
                y: i + c.y,
                data: {
                    ...c,
                    placement: s
                }
            };
        }
    };
}, kd = function(e) {
    return e === void 0 && (e = {}), {
        name: "shift",
        options: e,
        async fn (t) {
            const { x: n, y: r, placement: o1 } = t, { mainAxis: i = !0, crossAxis: s = !1, limiter: a = {
                fn: (w)=>{
                    let { x: p, y } = w;
                    return {
                        x: p,
                        y
                    };
                }
            }, ...c } = Xt(e, t), l = {
                x: n,
                y: r
            }, u = await fr(t, c), f = Et(vt(o1)), h = Oi(f);
            let b = l[h], g = l[f];
            if (i) {
                const w = h === "y" ? "top" : "left", p = h === "y" ? "bottom" : "right", y = b + u[w], v = b - u[p];
                b = oi(y, b, v);
            }
            if (s) {
                const w = f === "y" ? "top" : "left", p = f === "y" ? "bottom" : "right", y = g + u[w], v = g - u[p];
                g = oi(y, g, v);
            }
            const m = a.fn({
                ...t,
                [h]: b,
                [f]: g
            });
            return {
                ...m,
                data: {
                    x: m.x - n,
                    y: m.y - r,
                    enabled: {
                        [h]: i,
                        [f]: s
                    }
                }
            };
        }
    };
}, _d = function(e) {
    return e === void 0 && (e = {}), {
        options: e,
        fn (t) {
            const { x: n, y: r, placement: o1, rects: i, middlewareData: s } = t, { offset: a = 0, mainAxis: c = !0, crossAxis: l = !0 } = Xt(e, t), u = {
                x: n,
                y: r
            }, f = Et(o1), h = Oi(f);
            let b = u[h], g = u[f];
            const m = Xt(a, t), w = typeof m == "number" ? {
                mainAxis: m,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...m
            };
            if (c) {
                const v = h === "y" ? "height" : "width", S = i.reference[h] - i.floating[v] + w.mainAxis, R = i.reference[h] + i.reference[v] - w.mainAxis;
                b < S ? b = S : b > R && (b = R);
            }
            if (l) {
                var p, y;
                const v = h === "y" ? "width" : "height", S = wc.has(vt(o1)), R = i.reference[f] - i.floating[v] + (S && ((p = s.offset) == null ? void 0 : p[f]) || 0) + (S ? 0 : w.crossAxis), C = i.reference[f] + i.reference[v] + (S ? 0 : ((y = s.offset) == null ? void 0 : y[f]) || 0) - (S ? w.crossAxis : 0);
                g < R ? g = R : g > C && (g = C);
            }
            return {
                [h]: b,
                [f]: g
            };
        }
    };
}, Nd = function(e) {
    return e === void 0 && (e = {}), {
        name: "size",
        options: e,
        async fn (t) {
            var n, r;
            const { placement: o1, rects: i, platform: s, elements: a } = t, { apply: c = ()=>{}, ...l } = Xt(e, t), u = await fr(t, l), f = vt(o1), h = gn(o1), b = Et(o1) === "y", { width: g, height: m } = i.floating;
            let w, p;
            f === "top" || f === "bottom" ? (w = f, p = h === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (p = f, w = h === "end" ? "top" : "bottom");
            const y = m - u.top - u.bottom, v = g - u.left - u.right, S = Yn(m - u[w], y), R = Yn(g - u[p], v), C = !t.middlewareData.shift;
            let x = S, O = R;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (O = v), (r = t.middlewareData.shift) != null && r.enabled.y && (x = y), C && !h) {
                const M = bt(u.left, 0), D = bt(u.right, 0), B = bt(u.top, 0), j = bt(u.bottom, 0);
                b ? O = g - 2 * (M !== 0 || D !== 0 ? M + D : bt(u.left, u.right)) : x = m - 2 * (B !== 0 || j !== 0 ? B + j : bt(u.top, u.bottom));
            }
            await c({
                ...t,
                availableWidth: O,
                availableHeight: x
            });
            const N = await s.getDimensions(a.floating);
            return g !== N.width || m !== N.height ? {
                reset: {
                    rects: !0
                }
            } : {};
        }
    };
};
function Ec(e) {
    const t = wt(e);
    let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
    const o1 = Be(e), i = o1 ? e.offsetWidth : n, s = o1 ? e.offsetHeight : r, a = Ur(n) !== i || Ur(r) !== s;
    return a && (n = i, r = s), {
        width: n,
        height: r,
        $: a
    };
}
_c111 = Ec;
function Ai(e) {
    return Ae(e) ? e : e.contextElement;
}
_c112 = Ai;
function Fn(e) {
    const t = Ai(e);
    if (!Be(t)) return jt(1);
    const n = t.getBoundingClientRect(), { width: r, height: o1, $: i } = Ec(t);
    let s = (i ? Ur(n.width) : n.width) / r, a = (i ? Ur(n.height) : n.height) / o1;
    return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
        x: s,
        y: a
    };
}
_c113 = Fn;
const Ad = /* @__PURE__ */ jt(0);
function Sc(e) {
    const t = Ue(e);
    return !io() || !t.visualViewport ? Ad : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    };
}
_c114 = Sc;
function Pd(e, t, n) {
    return t === void 0 && (t = !1), !n || t && n !== Ue(e) ? !1 : t;
}
_c115 = Pd;
function Cn(e, t, n, r) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const o1 = e.getBoundingClientRect(), i = Ai(e);
    let s = jt(1);
    t && (r ? Ae(r) && (s = Fn(r)) : s = Fn(e));
    const a = Pd(i, n, r) ? Sc(i) : jt(0);
    let c = (o1.left + a.x) / s.x, l = (o1.top + a.y) / s.y, u = o1.width / s.x, f = o1.height / s.y;
    if (i) {
        const h = Ue(i), b = r && Ae(r) ? Ue(r) : r;
        let g = h, m = Go(g);
        for(; m && r && b !== g;){
            const w = Fn(m), p = m.getBoundingClientRect(), y = wt(m), v = p.left + (m.clientLeft + parseFloat(y.paddingLeft)) * w.x, S = p.top + (m.clientTop + parseFloat(y.paddingTop)) * w.y;
            c *= w.x, l *= w.y, u *= w.x, f *= w.y, c += v, l += S, g = Ue(m), m = Go(g);
        }
    }
    return Gr({
        width: u,
        height: f,
        x: c,
        y: l
    });
}
_c116 = Cn;
function bo(e, t) {
    const n = so(e).scrollLeft;
    return t ? t.left + n : Cn(Ht(e)).left + n;
}
function Rc(e, t) {
    const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - bo(e, n), o1 = n.top + t.scrollTop;
    return {
        x: r,
        y: o1
    };
}
_c117 = Rc;
function Md(e) {
    let { elements: t, rect: n, offsetParent: r, strategy: o1 } = e;
    const i = o1 === "fixed", s = Ht(r), a = t ? oo(t.floating) : !1;
    if (r === s || a && i) return n;
    let c = {
        scrollLeft: 0,
        scrollTop: 0
    }, l = jt(1);
    const u = jt(0), f = Be(r);
    if ((f || !f && !i) && ((mn(r) !== "body" || On(s)) && (c = so(r)), Be(r))) {
        const b = Cn(r);
        l = Fn(r), u.x = b.x + r.clientLeft, u.y = b.y + r.clientTop;
    }
    const h = s && !f && !i ? Rc(s, c) : jt(0);
    return {
        width: n.width * l.x,
        height: n.height * l.y,
        x: n.x * l.x - c.scrollLeft * l.x + u.x + h.x,
        y: n.y * l.y - c.scrollTop * l.y + u.y + h.y
    };
}
_c118 = Md;
function Dd(e) {
    return Array.from(e.getClientRects());
}
_c119 = Dd;
function Vd(e) {
    const t = Ht(e), n = so(e), r = e.ownerDocument.body, o1 = bt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = bt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let s = -n.scrollLeft + bo(e);
    const a = -n.scrollTop;
    return wt(r).direction === "rtl" && (s += bt(t.clientWidth, r.clientWidth) - o1), {
        width: o1,
        height: i,
        x: s,
        y: a
    };
}
_c120 = Vd;
const Bs = 25;
function Ld(e, t) {
    const n = Ue(e), r = Ht(e), o1 = n.visualViewport;
    let i = r.clientWidth, s = r.clientHeight, a = 0, c = 0;
    if (o1) {
        i = o1.width, s = o1.height;
        const u = io();
        (!u || u && t === "fixed") && (a = o1.offsetLeft, c = o1.offsetTop);
    }
    const l = bo(r);
    if (l <= 0) {
        const u = r.ownerDocument, f = u.body, h = getComputedStyle(f), b = u.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, g = Math.abs(r.clientWidth - f.clientWidth - b);
        g <= Bs && (i -= g);
    } else l <= Bs && (i += l);
    return {
        width: i,
        height: s,
        x: a,
        y: c
    };
}
_c121 = Ld;
const Fd = /* @__PURE__ */ new Set([
    "absolute",
    "fixed"
]);
function zd(e, t) {
    const n = Cn(e, !0, t === "fixed"), r = n.top + e.clientTop, o1 = n.left + e.clientLeft, i = Be(e) ? Fn(e) : jt(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, c = o1 * i.x, l = r * i.y;
    return {
        width: s,
        height: a,
        x: c,
        y: l
    };
}
function qs(e, t, n) {
    let r;
    if (t === "viewport") r = Ld(e, n);
    else if (t === "document") r = Vd(Ht(e));
    else if (Ae(t)) r = zd(t, n);
    else {
        const o1 = Sc(e);
        r = {
            x: t.x - o1.x,
            y: t.y - o1.y,
            width: t.width,
            height: t.height
        };
    }
    return Gr(r);
}
function xc(e, t) {
    const n = Gt(e);
    return n === t || !Ae(n) || Kt(n) ? !1 : wt(n).position === "fixed" || xc(n, t);
}
function jd(e, t) {
    const n = t.get(e);
    if (n) return n;
    let r = un(e, [], !1).filter((a)=>Ae(a) && mn(a) !== "body"), o1 = null;
    const i = wt(e).position === "fixed";
    let s = i ? Gt(e) : e;
    for(; Ae(s) && !Kt(s);){
        const a = wt(s), c = gi(s);
        !c && a.position === "fixed" && (o1 = null), (i ? !c && !o1 : !c && a.position === "static" && !!o1 && Fd.has(o1.position) || On(s) && !c && xc(e, s)) ? r = r.filter((u)=>u !== s) : o1 = a, s = Gt(s);
    }
    return t.set(e, r), r;
}
function Bd(e) {
    let { element: t, boundary: n, rootBoundary: r, strategy: o1 } = e;
    const s = [
        ...n === "clippingAncestors" ? oo(t) ? [] : jd(t, this._c) : [].concat(n),
        r
    ], a = s[0], c = s.reduce((l, u)=>{
        const f = qs(t, u, o1);
        return l.top = bt(f.top, l.top), l.right = Yn(f.right, l.right), l.bottom = Yn(f.bottom, l.bottom), l.left = bt(f.left, l.left), l;
    }, qs(t, a, o1));
    return {
        width: c.right - c.left,
        height: c.bottom - c.top,
        x: c.left,
        y: c.top
    };
}
_c122 = Bd;
function qd(e) {
    const { width: t, height: n } = Ec(e);
    return {
        width: t,
        height: n
    };
}
function Hd(e, t, n) {
    const r = Be(t), o1 = Ht(t), i = n === "fixed", s = Cn(e, !0, i, t);
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const c = jt(0);
    function l() {
        c.x = bo(o1);
    }
    if (r || !r && !i) if ((mn(t) !== "body" || On(o1)) && (a = so(t)), r) {
        const b = Cn(t, !0, i, t);
        c.x = b.x + t.clientLeft, c.y = b.y + t.clientTop;
    } else o1 && l();
    i && !r && o1 && l();
    const u = o1 && !r && !i ? Rc(o1, a) : jt(0), f = s.left + a.scrollLeft - c.x - u.x, h = s.top + a.scrollTop - c.y - u.y;
    return {
        x: f,
        y: h,
        width: s.width,
        height: s.height
    };
}
_c123 = Hd;
function Io(e) {
    return wt(e).position === "static";
}
_c124 = Io;
function Hs(e, t) {
    if (!Be(e) || wt(e).position === "fixed") return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return Ht(e) === n && (n = n.ownerDocument.body), n;
}
_c125 = Hs;
function Cc(e, t) {
    const n = Ue(e);
    if (oo(e)) return n;
    if (!Be(e)) {
        let o1 = Gt(e);
        for(; o1 && !Kt(o1);){
            if (Ae(o1) && !Io(o1)) return o1;
            o1 = Gt(o1);
        }
        return n;
    }
    let r = Hs(e, t);
    for(; r && du(r) && Io(r);)r = Hs(r, t);
    return r && Kt(r) && Io(r) && !gi(r) ? n : r || bu(e) || n;
}
_c126 = Cc;
const Wd = async function(e) {
    const t = this.getOffsetParent || Cc, n = this.getDimensions, r = await n(e.floating);
    return {
        reference: Hd(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    };
};
_c127 = Wd;
function $d(e) {
    return wt(e).direction === "rtl";
}
const Ud = {
    convertOffsetParentRelativeRectToViewportRelativeRect: Md,
    getDocumentElement: Ht,
    getClippingRect: Bd,
    getOffsetParent: Cc,
    getElementRects: Wd,
    getClientRects: Dd,
    getDimensions: qd,
    getScale: Fn,
    isElement: Ae,
    isRTL: $d
};
function Oc(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
_c128 = Oc;
function Kd(e, t) {
    let n = null, r;
    const o1 = Ht(e);
    function i() {
        var a;
        clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
    }
    function s(a, c) {
        a === void 0 && (a = !1), c === void 0 && (c = 1), i();
        const l = e.getBoundingClientRect(), { left: u, top: f, width: h, height: b } = l;
        if (a || t(), !h || !b) return;
        const g = Mn(f), m = Mn(o1.clientWidth - (u + h)), w = Mn(o1.clientHeight - (f + b)), p = Mn(u), v = {
            rootMargin: -g + "px " + -m + "px " + -w + "px " + -p + "px",
            threshold: bt(0, Yn(1, c)) || 1
        };
        let S = !0;
        function R(C) {
            const x = C[0].intersectionRatio;
            if (x !== c) {
                if (!S) return s();
                x ? s(!1, x) : r = setTimeout(()=>{
                    s(!1, 1e-7);
                }, 1e3);
            }
            x === 1 && !Oc(l, e.getBoundingClientRect()) && s(), S = !1;
        }
        try {
            n = new IntersectionObserver(R, {
                ...v,
                // Handle <iframe>s
                root: o1.ownerDocument
            });
        } catch  {
            n = new IntersectionObserver(R, v);
        }
        n.observe(e);
    }
    return s(!0), i;
}
_c129 = Kd;
function Ws(e, t, n, r) {
    r === void 0 && (r = {});
    const { ancestorScroll: o1 = !0, ancestorResize: i = !0, elementResize: s = typeof ResizeObserver == "function", layoutShift: a = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = Ai(e), u = o1 || i ? [
        ...l ? un(l) : [],
        ...un(t)
    ] : [];
    u.forEach((p)=>{
        o1 && p.addEventListener("scroll", n, {
            passive: !0
        }), i && p.addEventListener("resize", n);
    });
    const f = l && a ? Kd(l, n) : null;
    let h = -1, b = null;
    s && (b = new ResizeObserver((p)=>{
        let [y] = p;
        y && y.target === l && b && (b.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(()=>{
            var v;
            (v = b) == null || v.observe(t);
        })), n();
    }), l && !c && b.observe(l), b.observe(t));
    let g, m = c ? Cn(e) : null;
    c && w();
    function w() {
        const p = Cn(e);
        m && !Oc(m, p) && n(), m = p, g = requestAnimationFrame(w);
    }
    return n(), ()=>{
        var p;
        u.forEach((y)=>{
            o1 && y.removeEventListener("scroll", n), i && y.removeEventListener("resize", n);
        }), f == null || f(), (p = b) == null || p.disconnect(), b = null, c && cancelAnimationFrame(g);
    };
}
_c130 = Ws;
const Gd = Id, Yd = kd, Xd = Cd, Zd = Nd, Jd = Od, Qd = _d, eh = (e, t, n)=>{
    const r = /* @__PURE__ */ new Map(), o1 = {
        platform: Ud,
        ...n
    }, i = {
        ...o1.platform,
        _c: r
    };
    return xd(e, t, {
        ...o1,
        platform: i
    });
};
var th = typeof document < "u", nh = function() {}, Br = th ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : nh;
function eo(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let n, r, o1;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for(r = n; r-- !== 0;)if (!eo(e[r], t[r])) return !1;
            return !0;
        }
        if (o1 = Object.keys(e), n = o1.length, n !== Object.keys(t).length) return !1;
        for(r = n; r-- !== 0;)if (!({}).hasOwnProperty.call(t, o1[r])) return !1;
        for(r = n; r-- !== 0;){
            const i = o1[r];
            if (!(i === "_owner" && e.$$typeof) && !eo(e[i], t[i])) return !1;
        }
        return !0;
    }
    return e !== e && t !== t;
}
function Tc(e) {
    return ("TURBOPACK compile-time value", "object") > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
_c131 = Tc;
function $s(e, t) {
    const n = Tc(e);
    return Math.round(t * n) / n;
}
function ko(e) {
    _s32();
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(e);
    return Br(()=>{
        t.current = e;
    }), t;
}
_s32(ko, "MWmK3j+AMI0jPG0LB/YHWPrh2Ng=");
function rh(e) {
    _s33();
    e === void 0 && (e = {});
    const { placement: t = "bottom", strategy: n = "absolute", middleware: r = [], platform: o1, elements: { reference: i, floating: s } = {}, transform: a = !0, whileElementsMounted: c, open: l } = e, [u, f] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    }), [h, b] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(r);
    eo(h, r) || b(r);
    const [g, m] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(null), [w, p] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(null), y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "rh.useCallback[y]": (I)=>{
            I !== C.current && (C.current = I, m(I));
        }
    }["rh.useCallback[y]"], []), v = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "rh.useCallback[v]": (I)=>{
            I !== x.current && (x.current = I, p(I));
        }
    }["rh.useCallback[v]"], []), S = i || g, R = s || w, C = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null), x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null), O = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(u), N = c != null, M = ko(c), D = ko(o1), B = ko(l), j = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "rh.useCallback[j]": ()=>{
            if (!C.current || !x.current) return;
            const I = {
                placement: t,
                strategy: n,
                middleware: h
            };
            D.current && (I.platform = D.current), eh(C.current, x.current, I).then({
                "rh.useCallback[j]": (k)=>{
                    const z = {
                        ...k,
                        // The floating element's position may be recomputed while it's closed
                        // but still mounted (such as when transitioning out). To ensure
                        // `isPositioned` will be `false` initially on the next open, avoid
                        // setting it to `true` when `open === false` (must be specified).
                        isPositioned: B.current !== !1
                    };
                    P.current && !eo(O.current, z) && (O.current = z, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"]({
                        "rh.useCallback[j]": ()=>{
                            f(z);
                        }
                    }["rh.useCallback[j]"]));
                }
            }["rh.useCallback[j]"]);
        }
    }["rh.useCallback[j]"], [
        h,
        t,
        n,
        D,
        B
    ]);
    Br(()=>{
        l === !1 && O.current.isPositioned && (O.current.isPositioned = !1, f((I)=>({
                ...I,
                isPositioned: !1
            })));
    }, [
        l
    ]);
    const P = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(!1);
    Br(()=>(P.current = !0, ()=>{
            P.current = !1;
        }), []), Br(()=>{
        if (S && (C.current = S), R && (x.current = R), S && R) {
            if (M.current) return M.current(S, R, j);
            j();
        }
    }, [
        S,
        R,
        j,
        M,
        N
    ]);
    const T = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "rh.useMemo[T]": ()=>({
                reference: C,
                floating: x,
                setReference: y,
                setFloating: v
            })
    }["rh.useMemo[T]"], [
        y,
        v
    ]), A = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "rh.useMemo[A]": ()=>({
                reference: S,
                floating: R
            })
    }["rh.useMemo[A]"], [
        S,
        R
    ]), _ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "rh.useMemo[_]": ()=>{
            const I = {
                position: n,
                left: 0,
                top: 0
            };
            if (!A.floating) return I;
            const k = $s(A.floating, u.x), z = $s(A.floating, u.y);
            return a ? {
                ...I,
                transform: "translate(" + k + "px, " + z + "px)",
                ...Tc(A.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: n,
                left: k,
                top: z
            };
        }
    }["rh.useMemo[_]"], [
        n,
        a,
        A.floating,
        u.x,
        u.y
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "rh.useMemo": ()=>({
                ...u,
                update: j,
                refs: T,
                elements: A,
                floatingStyles: _
            })
    }["rh.useMemo"], [
        u,
        j,
        T,
        A,
        _
    ]);
}
_s33(rh, "keFH0NHWDG/l4q7uoX530qWQvak=");
const oh = (e, t)=>({
        ...Gd(e),
        options: [
            e,
            t
        ]
    }), ih = (e, t)=>({
        ...Yd(e),
        options: [
            e,
            t
        ]
    }), sh = (e, t)=>({
        ...Qd(e),
        options: [
            e,
            t
        ]
    }), ah = (e, t)=>({
        ...Xd(e),
        options: [
            e,
            t
        ]
    }), ch = (e, t)=>({
        ...Zd(e),
        options: [
            e,
            t
        ]
    }), lh = (e, t)=>({
        ...Jd(e),
        options: [
            e,
            t
        ]
    }), uh = {
    intentional: "onClick",
    sloppy: "onPointerDown"
};
function fh(e) {
    return {
        escapeKey: typeof e == "boolean" ? e : (e == null ? void 0 : e.escapeKey) ?? !1,
        outsidePress: typeof e == "boolean" ? e : (e == null ? void 0 : e.outsidePress) ?? !0
    };
}
function Ic(e, t = {}) {
    _s34();
    const n = "rootStore" in e ? e.rootStore : e, r = n.useState("open"), o1 = n.useState("floatingElement"), i = n.useState("referenceElement"), s = n.useState("domReferenceElement"), { onOpenChange: a, dataRef: c } = n.context, { enabled: l = !0, escapeKey: u = !0, outsidePress: f = !0, outsidePressEvent: h = "sloppy", referencePress: b = !1, referencePressEvent: g = "sloppy", ancestorScroll: m = !1, bubbles: w, externalTree: p } = t, y = go(p), v = ie(typeof f == "function" ? f : ()=>!1), S = typeof f == "function" ? v : f, R = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(!1), { escapeKey: C, outsidePress: x } = fh(w), O = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null), N = yt(), M = yt(), D = ie(()=>{
        M.clear(), c.current.insideReactTree = !1;
    }), B = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(!1), j = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(""), P = ie((V)=>{
        j.current = V.pointerType;
    }), T = ie(()=>{
        const V = j.current, J = V === "pen" || !V ? "mouse" : V, Y = typeof h == "function" ? h() : h;
        return typeof Y == "string" ? Y : Y[J];
    }), A = ie((V)=>{
        var F;
        if (!r || !l || !u || V.key !== "Escape" || B.current) return;
        const J = (F = c.current.floatingContext) == null ? void 0 : F.nodeId, Y = y ? Dn(y.nodesRef.current, J) : [];
        if (!C && Y.length > 0) {
            let Q = !0;
            if (Y.forEach((se)=>{
                var re;
                (re = se.context) != null && re.open && !se.context.dataRef.current.__escapeKeyBubbles && (Q = !1);
            }), !Q) return;
        }
        const Re = zf(V) ? V.nativeEvent : V, ce = ke(ef, Re);
        n.setOpen(!1, ce), !C && !ce.isPropagationAllowed && V.stopPropagation();
    }), _ = ie((V)=>{
        const J = T();
        return J === "intentional" && V.type !== "click" || J === "sloppy" && V.type === "click";
    }), I = ie(()=>{
        c.current.insideReactTree = !0, M.start(0, D);
    }), k = ie((V, J = !1)=>{
        var q;
        if (_(V)) {
            D();
            return;
        }
        if (c.current.insideReactTree) {
            D();
            return;
        }
        if (T() === "intentional" && J || typeof S == "function" && !S(V)) return;
        const Y = gt(V), Re = `[${Qr("inert")}]`, ce = it(n.select("floatingElement")).querySelectorAll(Re), F = n.context.triggerElements;
        if (Y && (F.hasElement(Y) || F.hasMatchingElement((X)=>De(X, Y)))) return;
        let Q = Ae(Y) ? Y : null;
        for(; Q && !Kt(Q);){
            const X = Gt(Q);
            if (Kt(X) || !Ae(X)) break;
            Q = X;
        }
        if (ce.length && Ae(Y) && !Ff(Y) && // Clicked on a direct ancestor (e.g. FloatingOverlay).
        !De(Y, n.select("floatingElement")) && // If the target root element contains none of the markers, then the
        // element was injected after the floating element rendered.
        Array.from(ce).every((X)=>!De(Q, X))) return;
        if (Be(Y) && !("touches" in V)) {
            const X = Kt(Y), L = wt(Y), te = /auto|scroll/, H = X || te.test(L.overflowX), Se = X || te.test(L.overflowY), xe = H && Y.clientWidth > 0 && Y.scrollWidth > Y.clientWidth, we = Se && Y.clientHeight > 0 && Y.scrollHeight > Y.clientHeight, Ce = L.direction === "rtl", Oe = we && (Ce ? V.offsetX <= Y.offsetWidth - Y.clientWidth : V.offsetX > Y.clientWidth), Ve = xe && V.offsetY > Y.clientHeight;
            if (Oe || Ve) return;
        }
        const se = (q = c.current.floatingContext) == null ? void 0 : q.nodeId, re = y && Dn(y.nodesRef.current, se).some((X)=>{
            var L;
            return Ot(V, (L = X.context) == null ? void 0 : L.elements.floating);
        });
        if (Ot(V, n.select("floatingElement")) || Ot(V, n.select("domReferenceElement")) || re) return;
        const ue = y ? Dn(y.nodesRef.current, se) : [];
        if (ue.length > 0) {
            let X = !0;
            if (ue.forEach((L)=>{
                var te;
                (te = L.context) != null && te.open && !L.context.dataRef.current.__outsidePressBubbles && (X = !1);
            }), !X) return;
        }
        n.setOpen(!1, ke(La, V)), D();
    }), z = ie((V)=>{
        T() !== "sloppy" || V.pointerType === "touch" || !n.select("open") || !l || Ot(V, n.select("floatingElement")) || Ot(V, n.select("domReferenceElement")) || k(V);
    }), $ = ie((V)=>{
        if (T() !== "sloppy" || !n.select("open") || !l || Ot(V, n.select("floatingElement")) || Ot(V, n.select("domReferenceElement"))) return;
        const J = V.touches[0];
        J && (O.current = {
            startTime: Date.now(),
            startX: J.clientX,
            startY: J.clientY,
            dismissOnTouchEnd: !1,
            dismissOnMouseDown: !0
        }, N.start(1e3, ()=>{
            O.current && (O.current.dismissOnTouchEnd = !1, O.current.dismissOnMouseDown = !1);
        }));
    }), ae = ie((V)=>{
        const J = gt(V);
        function Y() {
            $(V), J == null || J.removeEventListener(V.type, Y);
        }
        J == null || J.addEventListener(V.type, Y);
    }), ee = ie((V)=>{
        const J = R.current;
        if (R.current = !1, N.clear(), V.type === "mousedown" && O.current && !O.current.dismissOnMouseDown) return;
        const Y = gt(V);
        function Re() {
            V.type === "pointerdown" ? z(V) : k(V, J), Y == null || Y.removeEventListener(V.type, Re);
        }
        Y == null || Y.addEventListener(V.type, Re);
    }), ge = ie((V)=>{
        if (T() !== "sloppy" || !O.current || Ot(V, n.select("floatingElement")) || Ot(V, n.select("domReferenceElement"))) return;
        const J = V.touches[0];
        if (!J) return;
        const Y = Math.abs(J.clientX - O.current.startX), Re = Math.abs(J.clientY - O.current.startY), ce = Math.sqrt(Y * Y + Re * Re);
        ce > 5 && (O.current.dismissOnTouchEnd = !0), ce > 10 && (k(V), N.clear(), O.current = null);
    }), fe = ie((V)=>{
        const J = gt(V);
        function Y() {
            ge(V), J == null || J.removeEventListener(V.type, Y);
        }
        J == null || J.addEventListener(V.type, Y);
    }), U = ie((V)=>{
        T() !== "sloppy" || !O.current || Ot(V, n.select("floatingElement")) || Ot(V, n.select("domReferenceElement")) || (O.current.dismissOnTouchEnd && k(V), N.clear(), O.current = null);
    }), Z = ie((V)=>{
        const J = gt(V);
        function Y() {
            U(V), J == null || J.removeEventListener(V.type, Y);
        }
        J == null || J.addEventListener(V.type, Y);
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "Ic.useEffect": ()=>{
            if (!r || !l) return;
            c.current.__escapeKeyBubbles = C, c.current.__outsidePressBubbles = x;
            const V = new Gn();
            function J(Q) {
                n.setOpen(!1, ke(pn, Q));
            }
            function Y() {
                V.clear(), B.current = !0;
            }
            function Re() {
                V.start(// 0ms or 1ms don't work in Safari. 5ms appears to consistently work.
                // Only apply to WebKit for the test to remain 0ms.
                io() ? 5 : 0, {
                    "Ic.useEffect.Re": ()=>{
                        B.current = !1;
                    }
                }["Ic.useEffect.Re"]);
            }
            const ce = it(o1);
            ce.addEventListener("pointerdown", P, !0), u && (ce.addEventListener("keydown", A), ce.addEventListener("compositionstart", Y), ce.addEventListener("compositionend", Re)), S && (ce.addEventListener("click", ee, !0), ce.addEventListener("pointerdown", ee, !0), ce.addEventListener("touchstart", ae, !0), ce.addEventListener("touchmove", fe, !0), ce.addEventListener("touchend", Z, !0), ce.addEventListener("mousedown", ee, !0));
            let F = [];
            return m && (Ae(s) && (F = un(s)), Ae(o1) && (F = F.concat(un(o1))), !Ae(i) && i && i.contextElement && (F = F.concat(un(i.contextElement)))), F = F.filter({
                "Ic.useEffect": (Q)=>{
                    var se;
                    return Q !== ((se = ce.defaultView) == null ? void 0 : se.visualViewport);
                }
            }["Ic.useEffect"]), F.forEach({
                "Ic.useEffect": (Q)=>{
                    Q.addEventListener("scroll", J, {
                        passive: !0
                    });
                }
            }["Ic.useEffect"]), ({
                "Ic.useEffect": ()=>{
                    ce.removeEventListener("pointerdown", P, !0), u && (ce.removeEventListener("keydown", A), ce.removeEventListener("compositionstart", Y), ce.removeEventListener("compositionend", Re)), S && (ce.removeEventListener("click", ee, !0), ce.removeEventListener("pointerdown", ee, !0), ce.removeEventListener("touchstart", ae, !0), ce.removeEventListener("touchmove", fe, !0), ce.removeEventListener("touchend", Z, !0), ce.removeEventListener("mousedown", ee, !0)), F.forEach({
                        "Ic.useEffect": (Q)=>{
                            Q.removeEventListener("scroll", J);
                        }
                    }["Ic.useEffect"]), V.clear();
                }
            })["Ic.useEffect"];
        }
    }["Ic.useEffect"], [
        c,
        o1,
        i,
        s,
        u,
        S,
        r,
        a,
        m,
        l,
        C,
        x,
        A,
        k,
        ee,
        z,
        ae,
        fe,
        Z,
        P,
        n
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect(D, [
        S,
        D
    ]);
    const K = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Ic.useMemo[K]": ()=>({
                onKeyDown: A,
                ...b && {
                    [uh[g]]: ({
                        "Ic.useMemo[K]": (V)=>{
                            n.setOpen(!1, ke(sr, V.nativeEvent));
                        }
                    })["Ic.useMemo[K]"],
                    ...g !== "intentional" && {
                        onClick (V) {
                            n.setOpen(!1, ke(sr, V.nativeEvent));
                        }
                    }
                }
            })
    }["Ic.useMemo[K]"], [
        A,
        n,
        b,
        g
    ]), he = ie((V)=>{
        const J = gt(V.nativeEvent);
        !De(n.select("floatingElement"), J) || V.button !== 0 || (R.current = !0);
    }), pe = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Ic.useMemo[pe]": ()=>({
                onKeyDown: A,
                // `onMouseDown` may be blocked if `event.preventDefault()` is called in
                // `onPointerDown`, such as with <NumberField.ScrubArea>.
                // See https://github.com/mui/base-ui/pull/3379
                onPointerDown: he,
                onMouseDown: he,
                onMouseUp: he,
                onClickCapture: I,
                onMouseDownCapture: I,
                onPointerDownCapture: I,
                onMouseUpCapture: I,
                onTouchEndCapture: I,
                onTouchMoveCapture: I
            })
    }["Ic.useMemo[pe]"], [
        A,
        he,
        I
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Ic.useMemo": ()=>l ? {
                reference: K,
                floating: pe,
                trigger: K
            } : {}
    }["Ic.useMemo"], [
        l,
        K,
        pe
    ]);
}
_s34(Ic, "6Pc2sMpLevTfBi7pKUWZ6WxJ9yU=");
_c132 = Ic;
var dh = (e, t, n)=>{
    if (t.length === 1 && t[0] === n) {
        let r = !1;
        try {
            const o1 = {};
            e(o1) === o1 && (r = !0);
        } catch  {}
        if (r) {
            let o1;
            try {
                throw new Error();
            } catch (i) {
                ({ stack: o1 } = i);
            }
            console.warn(`The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`, {
                stack: o1
            });
        }
    }
}, hh = (e, t, n)=>{
    const { memoize: r, memoizeOptions: o1 } = t, { inputSelectorResults: i, inputSelectorResultsCopy: s } = e, a = r(()=>({}), ...o1);
    if (!(a.apply(null, i) === a.apply(null, s))) {
        let l;
        try {
            throw new Error();
        } catch (u) {
            ({ stack: l } = u);
        }
        console.warn(`An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``, {
            arguments: n,
            firstInputs: i,
            secondInputs: s,
            stack: l
        });
    }
}, ph = {
    inputStabilityCheck: "once",
    identityFunctionCheck: "once"
}, to = /* @__PURE__ */ Symbol("NOT_FOUND");
function mh(e, t = `expected a function, instead received ${typeof e}`) {
    if (typeof e != "function") throw new TypeError(t);
}
function gh(e, t = `expected an object, instead received ${typeof e}`) {
    if (typeof e != "object") throw new TypeError(t);
}
function bh(e, t = "expected all items to be functions, instead received the following types: ") {
    if (!e.every((n)=>typeof n == "function")) {
        const n = e.map((r)=>typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r).join(", ");
        throw new TypeError(`${t}[${n}]`);
    }
}
var Us = (e)=>Array.isArray(e) ? e : [
        e
    ];
_c133 = Us;
function yh(e) {
    const t = Array.isArray(e[0]) ? e[0] : e;
    return bh(t, "createSelector expects all input-selectors to be functions, but received the following types: "), t;
}
function Ks(e, t) {
    const n = [], { length: r } = e;
    for(let o1 = 0; o1 < r; o1++)n.push(e[o1].apply(null, t));
    return n;
}
_c134 = Ks;
var vh = (e, t)=>{
    const { identityFunctionCheck: n, inputStabilityCheck: r } = {
        ...ph,
        ...t
    };
    return {
        identityFunctionCheck: {
            shouldRun: n === "always" || n === "once" && e,
            run: dh
        },
        inputStabilityCheck: {
            shouldRun: r === "always" || r === "once" && e,
            run: hh
        }
    };
};
function wh(e) {
    let t;
    return {
        get (n) {
            return t && e(t.key, n) ? t.value : to;
        },
        put (n, r) {
            t = {
                key: n,
                value: r
            };
        },
        getEntries () {
            return t ? [
                t
            ] : [];
        },
        clear () {
            t = void 0;
        }
    };
}
function Eh(e, t) {
    let n = [];
    function r(a) {
        const c = n.findIndex((l)=>t(a, l.key));
        if (c > -1) {
            const l = n[c];
            return c > 0 && (n.splice(c, 1), n.unshift(l)), l.value;
        }
        return to;
    }
    function o1(a, c) {
        r(a) === to && (n.unshift({
            key: a,
            value: c
        }), n.length > e && n.pop());
    }
    function i() {
        return n;
    }
    function s() {
        n = [];
    }
    return {
        get: r,
        put: o1,
        getEntries: i,
        clear: s
    };
}
_c135 = Eh;
var Sh = (e, t)=>e === t;
_c136 = Sh;
function Rh(e) {
    return function(n, r) {
        if (n === null || r === null || n.length !== r.length) return !1;
        const { length: o1 } = n;
        for(let i = 0; i < o1; i++)if (!e(n[i], r[i])) return !1;
        return !0;
    };
}
_c137 = Rh;
function xh(e, t) {
    const n = typeof t == "object" ? t : {
        equalityCheck: t
    }, { equalityCheck: r = Sh, maxSize: o1 = 1, resultEqualityCheck: i } = n, s = Rh(r);
    let a = 0;
    const c = o1 <= 1 ? wh(s) : Eh(o1, s);
    function l() {
        let u = c.get(arguments);
        if (u === to) {
            if (u = e.apply(null, arguments), a++, i) {
                const h = c.getEntries().find((b)=>i(b.value, u));
                h && (u = h.value, a !== 0 && a--);
            }
            c.put(arguments, u);
        }
        return u;
    }
    return l.clearCache = ()=>{
        c.clear(), l.resetResultsCount();
    }, l.resultsCount = ()=>a, l.resetResultsCount = ()=>{
        a = 0;
    }, l;
}
var Ch = class {
    constructor(e){
        this.value = e;
    }
    deref() {
        return this.value;
    }
}, Oh = typeof WeakRef < "u" ? WeakRef : Ch, Th = 0, Gs = 1;
function _r() {
    return {
        s: Th,
        v: void 0,
        o: null,
        p: null
    };
}
function kc(e, t = {}) {
    let n = _r();
    const { resultEqualityCheck: r } = t;
    let o1, i = 0;
    function s() {
        var f;
        let a = n;
        const { length: c } = arguments;
        for(let h = 0, b = c; h < b; h++){
            const g = arguments[h];
            if (typeof g == "function" || typeof g == "object" && g !== null) {
                let m = a.o;
                m === null && (a.o = m = /* @__PURE__ */ new WeakMap());
                const w = m.get(g);
                w === void 0 ? (a = _r(), m.set(g, a)) : a = w;
            } else {
                let m = a.p;
                m === null && (a.p = m = /* @__PURE__ */ new Map());
                const w = m.get(g);
                w === void 0 ? (a = _r(), m.set(g, a)) : a = w;
            }
        }
        const l = a;
        let u;
        if (a.s === Gs) u = a.v;
        else if (u = e.apply(null, arguments), i++, r) {
            const h = ((f = o1 == null ? void 0 : o1.deref) == null ? void 0 : f.call(o1)) ?? o1;
            h != null && r(h, u) && (u = h, i !== 0 && i--), o1 = typeof u == "object" && u !== null || typeof u == "function" ? new Oh(u) : u;
        }
        return l.s = Gs, l.v = u, u;
    }
    return s.clearCache = ()=>{
        n = _r(), s.resetResultsCount();
    }, s.resultsCount = ()=>i, s.resetResultsCount = ()=>{
        i = 0;
    }, s;
}
function _c(e, ...t) {
    const n = typeof e == "function" ? {
        memoize: e,
        memoizeOptions: t
    } : e, r = (...o1)=>{
        let i = 0, s = 0, a, c = {}, l = o1.pop();
        typeof l == "object" && (c = l, l = o1.pop()), mh(l, `createSelector expects an output function after the inputs, but received: [${typeof l}]`);
        const u = {
            ...n,
            ...c
        }, { memoize: f, memoizeOptions: h = [], argsMemoize: b = kc, argsMemoizeOptions: g = [], devModeChecks: m = {} } = u, w = Us(h), p = Us(g), y = yh(o1), v = f(function() {
            return i++, l.apply(null, arguments);
        }, ...w);
        let S = !0;
        const R = b(function() {
            s++;
            const x = Ks(y, arguments);
            if (a = v.apply(null, x), ("TURBOPACK compile-time value", "development") !== "production") {
                const { identityFunctionCheck: O, inputStabilityCheck: N } = vh(S, m);
                if (O.shouldRun && O.run(l, x, a), N.shouldRun) {
                    const M = Ks(y, arguments);
                    N.run({
                        inputSelectorResults: x,
                        inputSelectorResultsCopy: M
                    }, {
                        memoize: f,
                        memoizeOptions: w
                    }, arguments);
                }
                S && (S = !1);
            }
            return a;
        }, ...p);
        return Object.assign(R, {
            resultFunc: l,
            memoizedResultFunc: v,
            dependencies: y,
            dependencyRecomputations: ()=>s,
            resetDependencyRecomputations: ()=>{
                s = 0;
            },
            lastResult: ()=>a,
            recomputations: ()=>i,
            resetRecomputations: ()=>{
                i = 0;
            },
            memoize: f,
            argsMemoize: b
        });
    };
    return Object.assign(r, {
        withTypes: ()=>r
    }), r;
}
var Ih = /* @__PURE__ */ _c(kc), kh = Object.assign((e, t = Ih)=>{
    gh(e, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);
    const n = Object.keys(e), r = n.map((i)=>e[i]);
    return t(r, (...i)=>i.reduce((s, a, c)=>(s[n[c]] = a, s), {}));
}, {
    withTypes: ()=>kh
});
_c({
    memoize: xh,
    memoizeOptions: {
        maxSize: 1,
        equalityCheck: Object.is
    }
});
const le = (e, t, n, r, o1, i, ...s)=>{
    if (s.length > 0) throw new Error(("TURBOPACK compile-time truthy", 1) ? "Unsupported number of selectors" : "TURBOPACK unreachable");
    let a;
    if (e) a = e;
    else throw new Error("Missing arguments");
    return a;
};
var li = {
    exports: {}
}, _o = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ys;
function _h() {
    if (Ys) return _o;
    Ys = 1;
    var e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    function t(f, h) {
        return f === h && (f !== 0 || 1 / f === 1 / h) || f !== f && h !== h;
    }
    var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, o1 = e.useEffect, i = e.useLayoutEffect, s = e.useDebugValue;
    function a(f, h) {
        var b = h(), g = r({
            inst: {
                value: b,
                getSnapshot: h
            }
        }), m = g[0].inst, w = g[1];
        return i(function() {
            m.value = b, m.getSnapshot = h, c(m) && w({
                inst: m
            });
        }, [
            f,
            b,
            h
        ]), o1(function() {
            return c(m) && w({
                inst: m
            }), f(function() {
                c(m) && w({
                    inst: m
                });
            });
        }, [
            f
        ]), s(b), b;
    }
    function c(f) {
        var h = f.getSnapshot;
        f = f.value;
        try {
            var b = h();
            return !n(f, b);
        } catch  {
            return !0;
        }
    }
    function l(f, h) {
        return h();
    }
    var u = ("TURBOPACK compile-time value", "object") > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : a;
    return _o.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u, _o;
}
var No = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xs;
function Nh() {
    return Xs || (Xs = 1, ("TURBOPACK compile-time value", "development") !== "production" && function() {
        function e(b, g) {
            return b === g && (b !== 0 || 1 / b === 1 / g) || b !== b && g !== g;
        }
        function t(b, g) {
            u || o1.startTransition === void 0 || (u = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
            var m = g();
            if (!f) {
                var w = g();
                i(m, w) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), f = !0);
            }
            w = s({
                inst: {
                    value: m,
                    getSnapshot: g
                }
            });
            var p = w[0].inst, y = w[1];
            return c(function() {
                p.value = m, p.getSnapshot = g, n(p) && y({
                    inst: p
                });
            }, [
                b,
                m,
                g
            ]), a(function() {
                return n(p) && y({
                    inst: p
                }), b(function() {
                    n(p) && y({
                        inst: p
                    });
                });
            }, [
                b
            ]), l(m), m;
        }
        function n(b) {
            var g = b.getSnapshot;
            b = b.value;
            try {
                var m = g();
                return !i(b, m);
            } catch  {
                return !0;
            }
        }
        function r(b, g) {
            return g();
        }
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
        var o1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], i = typeof Object.is == "function" ? Object.is : e, s = o1.useState, a = o1.useEffect, c = o1.useLayoutEffect, l = o1.useDebugValue, u = !1, f = !1, h = ("TURBOPACK compile-time value", "object") > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? r : t;
        No.useSyncExternalStore = o1.useSyncExternalStore !== void 0 ? o1.useSyncExternalStore : h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }()), No;
}
_c138 = Nh;
("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : li.exports = Nh();
var Pi = li.exports, ui = {
    exports: {}
}, Ao = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zs;
function Ah() {
    if (Zs) return Ao;
    Zs = 1;
    var e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], t = Pi;
    function n(l, u) {
        return l === u && (l !== 0 || 1 / l === 1 / u) || l !== l && u !== u;
    }
    var r = typeof Object.is == "function" ? Object.is : n, o1 = t.useSyncExternalStore, i = e.useRef, s = e.useEffect, a = e.useMemo, c = e.useDebugValue;
    return Ao.useSyncExternalStoreWithSelector = function(l, u, f, h, b) {
        var g = i(null);
        if (g.current === null) {
            var m = {
                hasValue: !1,
                value: null
            };
            g.current = m;
        } else m = g.current;
        g = a(function() {
            function p(C) {
                if (!y) {
                    if (y = !0, v = C, C = h(C), b !== void 0 && m.hasValue) {
                        var x = m.value;
                        if (b(x, C)) return S = x;
                    }
                    return S = C;
                }
                if (x = S, r(v, C)) return x;
                var O = h(C);
                return b !== void 0 && b(x, O) ? (v = C, x) : (v = C, S = O);
            }
            var y = !1, v, S, R = f === void 0 ? null : f;
            return [
                function() {
                    return p(u());
                },
                R === null ? void 0 : function() {
                    return p(R());
                }
            ];
        }, [
            u,
            f,
            h,
            b
        ]);
        var w = o1(l, g[0], g[1]);
        return s(function() {
            m.hasValue = !0, m.value = w;
        }, [
            w
        ]), c(w), w;
    }, Ao;
}
_c139 = Ah;
var Po = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Js;
function Ph() {
    return Js || (Js = 1, ("TURBOPACK compile-time value", "development") !== "production" && function() {
        function e(l, u) {
            return l === u && (l !== 0 || 1 / l === 1 / u) || l !== l && u !== u;
        }
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
        var t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], n = Pi, r = typeof Object.is == "function" ? Object.is : e, o1 = n.useSyncExternalStore, i = t.useRef, s = t.useEffect, a = t.useMemo, c = t.useDebugValue;
        Po.useSyncExternalStoreWithSelector = function(l, u, f, h, b) {
            var g = i(null);
            if (g.current === null) {
                var m = {
                    hasValue: !1,
                    value: null
                };
                g.current = m;
            } else m = g.current;
            g = a(function() {
                function p(C) {
                    if (!y) {
                        if (y = !0, v = C, C = h(C), b !== void 0 && m.hasValue) {
                            var x = m.value;
                            if (b(x, C)) return S = x;
                        }
                        return S = C;
                    }
                    if (x = S, r(v, C)) return x;
                    var O = h(C);
                    return b !== void 0 && b(x, O) ? (v = C, x) : (v = C, S = O);
                }
                var y = !1, v, S, R = f === void 0 ? null : f;
                return [
                    function() {
                        return p(u());
                    },
                    R === null ? void 0 : function() {
                        return p(R());
                    }
                ];
            }, [
                u,
                f,
                h,
                b
            ]);
            var w = o1(l, g[0], g[1]);
            return s(function() {
                m.hasValue = !0, m.value = w;
            }, [
                w
            ]), c(w), w;
        }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }()), Po;
}
_c140 = Ph;
("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ui.exports = Ph();
var Mh = ui.exports;
const Dh = yi(19), Vh = Dh ? Lh : Fh;
function ve(e, t, n, r, o1) {
    return Vh(e, t, n, r, o1);
}
function Lh(e, t, n, r, o1) {
    _s35();
    const i = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "Lh.useCallback[i]": ()=>t(e.getSnapshot(), n, r, o1)
    }["Lh.useCallback[i]"], [
        e,
        t,
        n,
        r,
        o1
    ]);
    return Pi.useSyncExternalStore(e.subscribe, i, i);
}
_s35(Lh, "4XA+iaAnjC/zRZUSreu32LLGXTA=", false, function() {
    return [
        Pi.useSyncExternalStore
    ];
});
_c141 = Lh;
function Fh(e, t, n, r, o1) {
    _s36();
    return Mh.useSyncExternalStoreWithSelector(e.subscribe, e.getSnapshot, e.getSnapshot, {
        "Fh.useSyncExternalStoreWithSelector": (i)=>t(i, n, r, o1)
    }["Fh.useSyncExternalStoreWithSelector"]);
}
_s36(Fh, "B+Aoh5GYdro626SmEkKwUx058gA=", false, function() {
    return [
        Mh.useSyncExternalStoreWithSelector
    ];
});
_c142 = Fh;
class zn {
    /**
   * The current state of the store.
   * This property is updated immediately when the state changes as a result of calling {@link setState}, {@link update}, or {@link set}.
   * To subscribe to state changes, use the {@link useState} method. The value returned by {@link useState} is updated after the component renders (similarly to React's useState).
   * The values can be used directly (to avoid subscribing to the store) in effects or event handlers.
   *
   * Do not modify properties in state directly. Instead, use the provided methods to ensure proper state management and listener notification.
   */ // Internal state to handle recursive `setState()` calls
    constructor(t){
        /**
     * Registers a listener that will be called whenever the store's state changes.
     *
     * @param fn The listener function to be called on state changes.
     * @returns A function to unsubscribe the listener.
     */ me(this, "subscribe", (t)=>(this.listeners.add(t), ()=>{
                this.listeners.delete(t);
            }));
        /**
     * Returns the current state of the store.
     */ me(this, "getSnapshot", ()=>this.state);
        this.state = t, this.listeners = /* @__PURE__ */ new Set(), this.updateTick = 0;
    }
    /**
   * Updates the entire store's state and notifies all registered listeners.
   *
   * @param newState The new state to set for the store.
   */ setState(t) {
        if (this.state === t) return;
        this.state = t, this.updateTick += 1;
        const n = this.updateTick;
        for (const r of this.listeners){
            if (n !== this.updateTick) return;
            r(t);
        }
    }
    /**
   * Merges the provided changes into the current state and notifies listeners if there are changes.
   *
   * @param changes An object containing the changes to apply to the current state.
   */ update(t) {
        for(const n in t)if (!Object.is(this.state[n], t[n])) {
            zn.prototype.setState.call(this, {
                ...this.state,
                ...t
            });
            return;
        }
    }
    /**
   * Sets a specific key in the store's state to a new value and notifies listeners if the value has changed.
   *
   * @param key The key in the store's state to update.
   * @param value The new value to set for the specified key.
   */ set(t, n) {
        Object.is(this.state[t], n) || zn.prototype.setState.call(this, {
            ...this.state,
            [t]: n
        });
    }
    /**
   * Gives the state a new reference and updates all registered listeners.
   */ notifyAll() {
        const t = {
            ...this.state
        };
        zn.prototype.setState.call(this, t);
    }
}
class Nc extends zn {
    /**
   * Creates a new ReactStore instance.
   *
   * @param state Initial state of the store.
   * @param context Non-reactive context values.
   * @param selectors Optional selectors for use with `useState`.
   */ constructor(n, r = {}, o1){
        var _s = __turbopack_context__.k.signature();
        super(n);
        /**
     * Non-reactive values such as refs, callbacks, etc.
     */ /**
     * Keeps track of which properties are controlled.
     */ me(this, "controlledValues", /* @__PURE__ */ new Map());
        /** Gets the current value from the store using a selector with the provided key.
     *
     * @param key Key of the selector to use.
     */ me(this, "select", (n, r, o1, i)=>{
            const s = this.selectors[n];
            return s(this.state, r, o1, i);
        });
        /**
     * Returns a value from the store's state using a selector function.
     * Used to subscribe to specific parts of the state.
     * This methods causes a rerender whenever the selected state changes.
     *
     * @param key Key of the selector to use.
     */ me(this, "useState", _s((n, r, o1, i)=>{
            _s();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useDebugValue(n);
            const s = this.selectors[n];
            return ve(this, s, r, o1, i);
        }, "GhvPrRYADeIBc0kER6M56ZZ9cIU="));
        this.context = r, this.selectors = o1;
    }
    /**
   * Synchronizes a single external value into the store.
   *
   * Note that the while the value in `state` is updated immediately, the value returned
   * by `useState` is updated before the next render (similarly to React's `useState`).
   */ useSyncedValue(n, r) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useDebugValue(n), ne(()=>{
            this.state[n] !== r && this.set(n, r);
        }, [
            n,
            r
        ]);
    }
    /**
   * Synchronizes a single external value into the store and
   * cleans it up (sets to `undefined`) on unmount.
   *
   * Note that the while the value in `state` is updated immediately, the value returned
   * by `useState` is updated before the next render (similarly to React's `useState`).
   */ useSyncedValueWithCleanup(n, r) {
        ne(()=>(this.state[n] !== r && this.set(n, r), ()=>{
                this.set(n, void 0);
            }), [
            n,
            r
        ]);
    }
    /**
   * Synchronizes multiple external values into the store.
   *
   * Note that the while the values in `state` are updated immediately, the values returned
   * by `useState` are updated before the next render (similarly to React's `useState`).
   */ useSyncedValues(n) {
        if ("TURBOPACK compile-time truthy", 1) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useDebugValue(n, (s)=>Object.keys(s));
            const o1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(Object.keys(n)).current, i = Object.keys(n);
            (o1.length !== i.length || o1.some((s, a)=>s !== i[a])) && console.error("ReactStore.useSyncedValues expects the same prop keys on every render. Keys should be stable.");
        }
        const r = Object.values(n);
        ne(()=>{
            this.update(n);
        }, r);
    }
    /**
   * Registers a controllable prop pair (`controlled`, `defaultValue`) for a specific key.
   * - If `controlled` is non-undefined, the key is marked as controlled and the store's
   *   state at `key` is updated to match `controlled`. Local writes to that key are ignored.
   * - If `controlled` is undefined, the key is marked as uncontrolled. The store's state
   *   is initialized to `defaultValue` on first render and can be updated with local writes.
   */ useControlledProp(n, r, o1) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useDebugValue(n);
        const i = r !== void 0;
        if ("TURBOPACK compile-time truthy", 1) {
            const s = this.controlledValues.get(n);
            s !== void 0 && s !== i && console.error(`A component is changing the ${i ? "" : "un"}controlled state of ${n.toString()} to be ${i ? "un" : ""}controlled. Elements should not switch from uncontrolled to controlled (or vice versa).`);
        }
        this.controlledValues.has(n) || (this.controlledValues.set(n, i), !i && !Object.is(this.state[n], o1) && super.setState({
            ...this.state,
            [n]: o1
        })), ne(()=>{
            i && !Object.is(this.state[n], r) && super.setState({
                ...this.state,
                [n]: r
            });
        }, [
            n,
            r,
            o1,
            i
        ]);
    }
    /**
   * Sets a specific key in the store's state to a new value and notifies listeners if the value has changed.
   * If the key is controlled (registered via {@link useControlledProp} with a non-undefined value),
   * the update is ignored and no listeners are notified.
   *
   * @param key The state key to update.
   * @param value The new value to set for the specified key.
   */ set(n, r) {
        this.controlledValues.get(n) !== !0 && super.set(n, r);
    }
    /**
   * Merges the provided changes into the current state and notifies listeners if there are changes.
   * Controlled keys are filtered out and not updated.
   *
   * @param values An object containing the changes to apply to the current state.
   */ update(n) {
        const r = {
            ...n
        };
        for(const o1 in r)if (Object.hasOwn(r, o1) && this.controlledValues.get(o1) === !0) {
            delete r[o1];
            continue;
        }
        super.update(r);
    }
    /**
   * Updates the entire store's state and notifies all registered listeners.
   * Controlled keys are left unchanged; only uncontrolled keys from `newState` are applied.
   *
   * @param newState The new state to set for the store.
   */ setState(n) {
        const r = {
            ...n
        };
        for(const o1 in r)if (Object.hasOwn(r, o1) && this.controlledValues.get(o1) === !0) {
            delete r[o1];
            continue;
        }
        super.setState({
            ...this.state,
            ...r
        });
    }
    /**
   * Wraps a function with `useStableCallback` to ensure it has a stable reference
   * and assigns it to the context.
   *
   * @param key Key of the event callback. Must be a function in the context.
   * @param fn Function to assign.
   */ useContextCallback(n, r) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useDebugValue(n);
        const o1 = ie(r ?? lt);
        this.context[n] = o1;
    }
    /**
   * Returns a stable setter function for a specific key in the store's state.
   * It's commonly used to pass as a ref callback to React elements.
   *
   * @param key Key of the state to set.
   */ useStateSetter(n) {
        const r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(void 0);
        return r.current === void 0 && (r.current = (o1)=>{
            this.set(n, o1);
        }), r.current;
    }
    /**
   * Observes changes derived from the store's selectors and calls the listener when the selected value changes.
   *
   * @param key Key of the selector to observe.
   * @param listener Listener function called when the selector result changes.
   */ observe(n, r) {
        let o1;
        typeof n == "function" ? o1 = n : o1 = this.selectors[n];
        let i = o1(this.state);
        return r(i, i, this), this.subscribe((s)=>{
            const a = o1(s);
            if (!Object.is(i, a)) {
                const c = i;
                i = a, r(a, c, this);
            }
        });
    }
}
const zh = {
    open: le((e)=>e.open),
    domReferenceElement: le((e)=>e.domReferenceElement),
    referenceElement: le((e)=>e.positionReference ?? e.referenceElement),
    floatingElement: le((e)=>e.floatingElement),
    floatingId: le((e)=>e.floatingId)
};
class Mi extends Nc {
    constructor(n){
        const { nested: r, noEmit: o1, onOpenChange: i, triggerElements: s, ...a } = n;
        super({
            ...a,
            positionReference: a.referenceElement,
            domReferenceElement: a.referenceElement
        }, {
            onOpenChange: i,
            dataRef: {
                current: {}
            },
            events: hd(),
            nested: r,
            noEmit: o1,
            triggerElements: s
        }, zh);
        /**
     * Emits the `openchange` event through the internal event emitter and calls the `onOpenChange` handler with the provided arguments.
     *
     * @param newOpen The new open state.
     * @param eventDetails Details about the event that triggered the open state change.
     */ me(this, "setOpen", (n, r)=>{
            var o1, i;
            if ((!n || !this.state.open || // Prevent a pending hover-open from overwriting a click-open event, while allowing
            // click events to upgrade a hover-open.
            Qa(r.event)) && (this.context.dataRef.current.openEvent = n ? r.event : void 0), !this.context.noEmit) {
                const s = {
                    open: n,
                    reason: r.reason,
                    nativeEvent: r.event,
                    nested: this.context.nested,
                    triggerElement: r.trigger
                };
                this.context.events.emit("openchange", s);
            }
            (i = (o1 = this.context).onOpenChange) == null || i.call(o1, n, r);
        });
    }
}
function jh(e) {
    _s37();
    const t = e.useState("open");
    ne(()=>{
        if (t && !e.select("activeTriggerId") && e.context.triggerElements.size === 1) {
            const n = e.context.triggerElements.entries().next();
            if (!n.done) {
                const [r, o1] = n.value;
                e.update({
                    activeTriggerId: r,
                    activeTriggerElement: o1
                });
            }
        }
    }, [
        t,
        e
    ]);
}
_s37(jh, "B2iAciFvQqZY+7VIHPBnn9DPivw=");
function Bh(e, t, n) {
    _s38();
    const { mounted: r, setMounted: o1, transitionStatus: i } = Ri(e);
    t.useSyncedValues({
        mounted: r,
        transitionStatus: i
    });
    const s = ie(()=>{
        var c, l;
        o1(!1), t.update({
            activeTriggerId: null,
            activeTriggerElement: null,
            mounted: !1
        }), n == null || n(), (l = (c = t.context).onOpenChangeComplete) == null || l.call(c, !1);
    }), a = t.useState("preventUnmountingOnClose");
    return yr({
        enabled: !a,
        open: e,
        ref: t.context.popupRef,
        onComplete () {
            e || s();
        }
    }), {
        forceUnmount: s,
        transitionStatus: i
    };
}
_s38(Bh, "48CDsaFjRAXR+2J4AAsp/s2RbYo=", true);
_c143 = Bh;
class Di {
    constructor(){
        this.elements = /* @__PURE__ */ new Set(), this.idMap = /* @__PURE__ */ new Map();
    }
    /**
   * Adds a trigger element with the given ID.
   *
   * Note: The provided element is assumed to not be registered under multiple IDs.
   */ add(t, n) {
        const r = this.idMap.get(t);
        if (r !== n && (r !== void 0 && this.elements.delete(r), this.elements.add(n), this.idMap.set(t, n), ("TURBOPACK compile-time value", "development") !== "production" && this.elements.size !== this.idMap.size)) throw new Error(("TURBOPACK compile-time truthy", 1) ? "Base UI: A trigger element cannot be registered under multiple IDs in PopupTriggerMap." : "TURBOPACK unreachable");
    }
    /**
   * Removes the trigger element with the given ID.
   */ delete(t) {
        const n = this.idMap.get(t);
        n && (this.elements.delete(n), this.idMap.delete(t));
    }
    /**
   * Whether the given element is registered as a trigger.
   */ hasElement(t) {
        return this.elements.has(t);
    }
    /**
   * Whether there is a registered trigger element matching the given predicate.
   */ hasMatchingElement(t) {
        for (const n of this.elements)if (t(n)) return !0;
        return !1;
    }
    getById(t) {
        return this.idMap.get(t);
    }
    entries() {
        return this.idMap.entries();
    }
    get size() {
        return this.idMap.size;
    }
}
function qh() {
    return new Mi({
        open: !1,
        floatingElement: null,
        referenceElement: null,
        triggerElements: new Di(),
        floatingId: "",
        nested: !1,
        noEmit: !1,
        onOpenChange: void 0
    });
}
function Hh() {
    return {
        open: !1,
        mounted: !1,
        transitionStatus: "idle",
        floatingRootContext: qh(),
        preventUnmountingOnClose: !1,
        payload: void 0,
        activeTriggerId: null,
        activeTriggerElement: null,
        popupElement: null,
        positionerElement: null,
        activeTriggerProps: $e,
        inactiveTriggerProps: $e,
        popupProps: $e
    };
}
_c144 = Hh;
const Wh = {
    open: le((e)=>e.open),
    mounted: le((e)=>e.mounted),
    transitionStatus: le((e)=>e.transitionStatus),
    floatingRootContext: le((e)=>e.floatingRootContext),
    preventUnmountingOnClose: le((e)=>e.preventUnmountingOnClose),
    payload: le((e)=>e.payload),
    activeTriggerId: le((e)=>e.activeTriggerId),
    activeTriggerElement: le((e)=>e.mounted ? e.activeTriggerElement : null),
    /**
   * Whether the trigger with the given ID was used to open the popup.
   */ isTriggerActive: le((e, t)=>t !== void 0 && e.activeTriggerId === t),
    /**
   * Whether the popup is open and was activated by a trigger with the given ID.
   */ isOpenedByTrigger: le((e, t)=>t !== void 0 && e.activeTriggerId === t && e.open),
    /**
   * Whether the popup is mounted and was activated by a trigger with the given ID.
   */ isMountedByTrigger: le((e, t)=>t !== void 0 && e.activeTriggerId === t && e.mounted),
    triggerProps: le((e, t)=>t ? e.activeTriggerProps : e.inactiveTriggerProps),
    popupProps: le((e)=>e.popupProps),
    popupElement: le((e)=>e.popupElement),
    positionerElement: le((e)=>e.positionerElement)
};
function Ac(e) {
    const { open: t = !1, onOpenChange: n, elements: r = {} } = e, o1 = br(), i = mo() != null;
    if ("TURBOPACK compile-time truthy", 1) {
        const a = r.reference;
        a && !Ae(a) && console.error("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `context.setPositionReference()`", "instead.");
    }
    const s = St(()=>new Mi({
            open: t,
            onOpenChange: n,
            referenceElement: r.reference ?? null,
            floatingElement: r.floating ?? null,
            triggerElements: r.triggers ?? new Di(),
            floatingId: o1,
            nested: i,
            noEmit: e.noEmit || !1
        })).current;
    return ne(()=>{
        const a = {
            open: t,
            floatingId: o1
        };
        r.reference !== void 0 && (a.referenceElement = r.reference, a.domReferenceElement = Ae(r.reference) ? r.reference : null), r.floating !== void 0 && (a.floatingElement = r.floating), s.update(a);
    }, [
        t,
        o1,
        r.reference,
        r.floating,
        s
    ]), s.context.onOpenChange = n, s.context.nested = i, s.context.noEmit = e.noEmit || !1, s;
}
_c145 = Ac;
function $h(e = {}) {
    _s39();
    const { nodeId: t, externalTree: n } = e, r = Ac(e), o1 = e.rootContext || r, i = {
        reference: o1.useState("referenceElement"),
        floating: o1.useState("floatingElement"),
        domReference: o1.useState("domReferenceElement")
    }, [s, a] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(null), c = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null), l = go(n);
    ne(()=>{
        i.domReference && (c.current = i.domReference);
    }, [
        i.domReference
    ]);
    const u = rh({
        ...e,
        elements: {
            ...i,
            ...s && {
                reference: s
            }
        }
    }), f = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "$h.useCallback[f]": (x)=>{
            const O = Ae(x) ? {
                getBoundingClientRect: ({
                    "$h.useCallback[f]": ()=>x.getBoundingClientRect()
                })["$h.useCallback[f]"],
                getClientRects: ({
                    "$h.useCallback[f]": ()=>x.getClientRects()
                })["$h.useCallback[f]"],
                contextElement: x
            } : x;
            a(O), u.refs.setReference(O);
        }
    }["$h.useCallback[f]"], [
        u.refs
    ]), [h, b] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(null), [g, m] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(null);
    o1.useSyncedValue("referenceElement", h), o1.useSyncedValue("domReferenceElement", Ae(h) ? h : null), o1.useSyncedValue("floatingElement", g);
    const w = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "$h.useCallback[w]": (x)=>{
            (Ae(x) || x === null) && (c.current = x, b(x)), (Ae(u.refs.reference.current) || u.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
            // `null` to support `positionReference` + an unstable `reference`
            // callback ref.
            x !== null && !Ae(x)) && u.refs.setReference(x);
        }
    }["$h.useCallback[w]"], [
        u.refs,
        b
    ]), p = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "$h.useCallback[p]": (x)=>{
            m(x), u.refs.setFloating(x);
        }
    }["$h.useCallback[p]"], [
        u.refs
    ]), y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "$h.useMemo[y]": ()=>({
                ...u.refs,
                setReference: w,
                setFloating: p,
                setPositionReference: f,
                domReference: c
            })
    }["$h.useMemo[y]"], [
        u.refs,
        w,
        p,
        f
    ]), v = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "$h.useMemo[v]": ()=>({
                ...u.elements,
                domReference: i.domReference
            })
    }["$h.useMemo[v]"], [
        u.elements,
        i.domReference
    ]), S = o1.useState("open"), R = o1.useState("floatingId"), C = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "$h.useMemo[C]": ()=>({
                ...u,
                dataRef: o1.context.dataRef,
                open: S,
                onOpenChange: o1.setOpen,
                events: o1.context.events,
                floatingId: R,
                refs: y,
                elements: v,
                nodeId: t,
                rootStore: o1
            })
    }["$h.useMemo[C]"], [
        u,
        y,
        v,
        t,
        o1,
        S,
        R
    ]);
    return ne(()=>{
        o1.context.dataRef.current.floatingContext = C;
        const x = l == null ? void 0 : l.nodesRef.current.find((O)=>O.id === t);
        x && (x.context = C);
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "$h.useMemo": ()=>({
                ...u,
                context: C,
                refs: y,
                elements: v,
                rootStore: o1
            })
    }["$h.useMemo"], [
        u,
        y,
        v,
        C,
        o1
    ]);
}
_s39($h, "vCq1+Ya2qO+2ZThDyBfiJ+2oU+o=", true);
function Uh(e) {
    _s40();
    const { popupStore: t, noEmit: n = !1, treatPopupAsFloatingElement: r = !1, onOpenChange: o1 } = e, i = br(), s = mo() != null, a = t.useState("open"), c = t.useState("activeTriggerElement"), l = t.useState(r ? "popupElement" : "positionerElement"), u = t.context.triggerElements, f = St(()=>new Mi({
            open: a,
            referenceElement: c,
            floatingElement: l,
            triggerElements: u,
            onOpenChange: o1,
            floatingId: i,
            nested: s,
            noEmit: n
        })).current;
    return ne(()=>{
        const h = {
            open: a,
            floatingId: i,
            referenceElement: c,
            floatingElement: l
        };
        Ae(c) && (h.domReferenceElement = c), f.update(h);
    }, [
        a,
        i,
        c,
        l,
        f
    ]), f.context.onOpenChange = o1, f.context.nested = s, f.context.noEmit = n, f;
}
_s40(Uh, "swZ+lbPSN/aLKn8tMIeNJZhy/lI=");
_c146 = Uh;
function Pc(e = []) {
    _s41();
    const t = e.map((l)=>l == null ? void 0 : l.reference), n = e.map((l)=>l == null ? void 0 : l.floating), r = e.map((l)=>l == null ? void 0 : l.item), o1 = e.map((l)=>l == null ? void 0 : l.trigger), i = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "Pc.useCallback[i]": (l)=>Nr(l, e, "reference")
    }["Pc.useCallback[i]"], // eslint-disable-next-line react-hooks/exhaustive-deps
    t), s = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "Pc.useCallback[s]": (l)=>Nr(l, e, "floating")
    }["Pc.useCallback[s]"], // eslint-disable-next-line react-hooks/exhaustive-deps
    n), a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "Pc.useCallback[a]": (l)=>Nr(l, e, "item")
    }["Pc.useCallback[a]"], // eslint-disable-next-line react-hooks/exhaustive-deps
    r), c = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "Pc.useCallback[c]": (l)=>Nr(l, e, "trigger")
    }["Pc.useCallback[c]"], // eslint-disable-next-line react-hooks/exhaustive-deps
    o1);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Pc.useMemo": ()=>({
                getReferenceProps: i,
                getFloatingProps: s,
                getItemProps: a,
                getTriggerProps: c
            })
    }["Pc.useMemo"], [
        i,
        s,
        a,
        c
    ]);
}
_s41(Pc, "kR+siHNyomWnTEfDMVhKJX0HLs4=");
_c147 = Pc;
function Nr(e, t, n) {
    var s;
    const r = /* @__PURE__ */ new Map(), o1 = n === "item", i = {};
    n === "floating" && (i.tabIndex = -1, i[ni] = "");
    for(const a in e)o1 && e && (a === Ga || a === Ya) || (i[a] = e[a]);
    for(let a = 0; a < t.length; a += 1){
        let c;
        const l = (s = t[a]) == null ? void 0 : s[n];
        typeof l == "function" ? c = e ? l(e) : null : c = l, c && Qs(i, c, o1, r);
    }
    return Qs(i, e, o1, r), i;
}
_c148 = Nr;
function Qs(e, t, n, r) {
    var o1;
    for(const i in t){
        const s = t[i];
        n && (i === Ga || i === Ya) || (i.startsWith("on") ? (r.has(i) || r.set(i, []), typeof s == "function" && ((o1 = r.get(i)) == null || o1.push(s), e[i] = (...a)=>{
            var c;
            return (c = r.get(i)) == null ? void 0 : c.map((l)=>l(...a)).find((l)=>l !== void 0);
        })) : e[i] = s);
    }
}
_c149 = Qs;
const Kh = "Escape";
function yo(e, t, n) {
    switch(e){
        case "vertical":
            return t;
        case "horizontal":
            return n;
        default:
            return t || n;
    }
}
function Ar(e, t) {
    return yo(t, e === Ci || e === vr, e === fn || e === dn);
}
_c150 = Ar;
function Mo(e, t, n) {
    return yo(t, e === vr, n ? e === fn : e === dn) || e === "Enter" || e === " " || e === "";
}
_c151 = Mo;
function Gh(e, t, n) {
    return yo(t, n ? e === fn : e === dn, e === vr);
}
_c152 = Gh;
function Yh(e, t, n, r) {
    const o1 = n ? e === dn : e === fn, i = e === Ci;
    return t === "both" || t === "horizontal" && r && r > 1 ? e === Kh : yo(t, o1, i);
}
_c153 = Yh;
function Xh(e, t) {
    _s42();
    const n = "rootStore" in e ? e.rootStore : e, r = n.useState("open"), o1 = n.useState("floatingElement"), i = n.useState("domReferenceElement"), s = n.context.dataRef, { listRef: a, activeIndex: c, onNavigate: l = ()=>{}, enabled: u = !0, selectedIndex: f = null, allowEscape: h = !1, loopFocus: b = !1, nested: g = !1, rtl: m = !1, virtual: w = !1, focusItemOnOpen: p = "auto", focusItemOnHover: y = !0, openOnArrowKeyDown: v = !0, disabledIndices: S = void 0, orientation: R = "vertical", parentOrientation: C, cols: x = 1, scrollItemIntoView: O = !0, itemSizes: N, dense: M = !1, id: D, resetOnPointerLeave: B = !0, externalTree: j } = t;
    ("TURBOPACK compile-time value", "development") !== "production" && (h && (b || console.warn("`useListNavigation` looping must be enabled to allow escaping."), w || console.warn("`useListNavigation` must be virtual to allow escaping.")), R === "vertical" && x > 1 && console.warn("In grid list navigation mode (`cols` > 1), the `orientation` should", 'be either "horizontal" or "both".'));
    const P = lr(o1), T = Je(P), A = mo(), _ = go(j);
    ne(()=>{
        s.current.orientation = R;
    }, [
        s,
        R
    ]);
    const I = ri(i), k = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(p), z = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(f ?? -1), $ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null), ae = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(!0), ee = ie((L)=>{
        l(z.current === -1 ? null : z.current, L);
    }), ge = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(ee), fe = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(!!o1), U = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(r), Z = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(!1), K = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(!1), he = Je(S), pe = Je(r), V = Je(O), J = Je(f), Y = Je(B), Re = ie(()=>{
        function L(xe) {
            w ? _ == null || _.events.emit("virtualfocus", xe) : jr(xe, {
                sync: Z.current,
                preventScroll: !0
            });
        }
        const te = a.current[z.current], H = K.current;
        te && L(te), (Z.current ? (xe)=>xe() : requestAnimationFrame)(()=>{
            var Oe;
            const xe = a.current[z.current] || te;
            if (!xe) return;
            te || L(xe);
            const we = V.current;
            we && // eslint-disable-next-line @typescript-eslint/no-use-before-define
            F && (H || !ae.current) && ((Oe = xe.scrollIntoView) == null || Oe.call(xe, typeof we == "boolean" ? {
                block: "nearest",
                inline: "nearest"
            } : we));
        });
    });
    ne(()=>{
        u && (r && o1 ? (z.current = f ?? -1, k.current && f != null && (K.current = !0, ee())) : fe.current && (z.current = -1, ge.current()));
    }, [
        u,
        r,
        o1,
        f,
        ee
    ]), ne(()=>{
        if (u) {
            if (!r) {
                Z.current = !1;
                return;
            }
            if (o1) if (c == null) {
                if (Z.current = !1, J.current != null) return;
                if (fe.current && (z.current = -1, Re()), (!U.current || !fe.current) && k.current && ($.current != null || k.current === !0 && $.current == null)) {
                    let L = 0;
                    const te = ()=>{
                        a.current[0] == null ? (L < 2 && (L ? requestAnimationFrame : queueMicrotask)(te), L += 1) : (z.current = $.current == null || Mo($.current, R, m) || g ? zr(a) : si(a), $.current = null, ee());
                    };
                    te();
                }
            } else Vn(a, c) || (z.current = c, Re(), K.current = !1);
        }
    }, [
        u,
        r,
        o1,
        c,
        J,
        g,
        a,
        R,
        m,
        ee,
        Re,
        he
    ]), ne(()=>{
        var xe, we;
        if (!u || o1 || !_ || w || !fe.current) return;
        const L = _.nodesRef.current, te = (we = (xe = L.find((Ce)=>Ce.id === A)) == null ? void 0 : xe.context) == null ? void 0 : we.elements.floating, H = Ut(it(o1)), Se = L.some((Ce)=>Ce.context && De(Ce.context.elements.floating, H));
        te && !Se && ae.current && te.focus({
            preventScroll: !0
        });
    }, [
        u,
        o1,
        _,
        A,
        w
    ]), ne(()=>{
        ge.current = ee, U.current = r, fe.current = !!o1;
    }), ne(()=>{
        r || ($.current = null, k.current = p);
    }, [
        r,
        p
    ]);
    const ce = c != null, F = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Xh.useMemo[F]": ()=>{
            function L(H) {
                if (!pe.current) return;
                const Se = a.current.indexOf(H.currentTarget);
                Se !== -1 && z.current !== Se && (z.current = Se, ee(H));
            }
            return {
                onFocus (H) {
                    Z.current = !0, L(H);
                },
                onClick: ({
                    "Xh.useMemo[F]": ({ currentTarget: H })=>H.focus({
                            preventScroll: !0
                        })
                })["Xh.useMemo[F]"],
                // Safari
                onMouseMove (H) {
                    Z.current = !0, K.current = !1, y && L(H);
                },
                onPointerLeave (H) {
                    var xe;
                    if (!pe.current || !ae.current || H.pointerType === "touch") return;
                    Z.current = !0;
                    const Se = H.relatedTarget;
                    !y || a.current.includes(Se) || Y.current && (z.current = -1, ee(H), w || (xe = T.current) == null || xe.focus({
                        preventScroll: !0
                    }));
                }
            };
        }
    }["Xh.useMemo[F]"], [
        pe,
        T,
        y,
        a,
        ee,
        Y,
        w
    ]), Q = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "Xh.useCallback[Q]": ()=>{
            var L, te, H;
            return C ?? ((H = (te = (L = _ == null ? void 0 : _.nodesRef.current.find({
                "Xh.useCallback[Q]": (Se)=>Se.id === A
            }["Xh.useCallback[Q]"])) == null ? void 0 : L.context) == null ? void 0 : te.dataRef) == null ? void 0 : H.current.orientation);
        }
    }["Xh.useCallback[Q]"], [
        A,
        _,
        C
    ]), se = ie((L)=>{
        if (ae.current = !1, Z.current = !0, L.which === 229 || !pe.current && L.currentTarget === T.current) return;
        if (g && Yh(L.key, R, m, x)) {
            Ar(L.key, Q()) || et(L), n.setOpen(!1, ke(xo, L.nativeEvent)), Be(i) && (w ? _ == null || _.events.emit("virtualfocus", i) : i.focus());
            return;
        }
        const te = z.current, H = zr(a, S), Se = si(a, S);
        if (I || (L.key === "Home" && (et(L), z.current = H, ee(L)), L.key === "End" && (et(L), z.current = Se, ee(L))), x > 1) {
            const xe = N || Array.from({
                length: a.current.length
            }, ()=>({
                    width: 1,
                    height: 1
                })), we = nc(xe, x, M), Ce = we.findIndex((ze)=>ze != null && !hn(a, ze, S)), Oe = we.reduce((ze, Ie, je)=>Ie != null && !hn(a, Ie, S) ? je : ze, -1), Ve = we[tc({
                current: we.map((ze)=>ze != null ? a.current[ze] : null)
            }, {
                event: L,
                orientation: R,
                loopFocus: b,
                rtl: m,
                cols: x,
                // treat undefined (empty grid spaces) as disabled indices so we
                // don't end up in them
                disabledIndices: oc([
                    ...(typeof S != "function" ? S : null) || a.current.map((ze, Ie)=>hn(a, Ie, S) ? Ie : void 0),
                    void 0
                ], we),
                minIndex: Ce,
                maxIndex: Oe,
                prevIndex: rc(z.current > Se ? H : z.current, xe, we, x, // use a corner matching the edge closest to the direction
                // we're moving in so we don't end up in the same item. Prefer
                // top/left over bottom/right.
                // eslint-disable-next-line no-nested-ternary
                L.key === vr ? "bl" : L.key === (m ? fn : dn) ? "tr" : "tl"),
                stopEvent: !0
            })];
            if (Ve != null && (z.current = Ve, ee(L)), R === "both") return;
        }
        if (Ar(L.key, R)) {
            if (et(L), r && !w && Ut(L.currentTarget.ownerDocument) === L.currentTarget) {
                z.current = Mo(L.key, R, m) ? H : Se, ee(L);
                return;
            }
            Mo(L.key, R, m) ? b ? te >= Se ? h && te !== a.current.length ? z.current = -1 : (Z.current = !1, z.current = H) : z.current = Ze(a, {
                startingIndex: te,
                disabledIndices: S
            }) : z.current = Math.min(Se, Ze(a, {
                startingIndex: te,
                disabledIndices: S
            })) : b ? te <= H ? h && te !== -1 ? z.current = a.current.length : (Z.current = !1, z.current = Se) : z.current = Ze(a, {
                startingIndex: te,
                decrement: !0,
                disabledIndices: S
            }) : z.current = Math.max(H, Ze(a, {
                startingIndex: te,
                decrement: !0,
                disabledIndices: S
            })), Vn(a, z.current) && (z.current = -1), ee(L);
        }
    }), re = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Xh.useMemo[re]": ()=>w && r && ce && {
                "aria-activedescendant": `${D}-${c}`
            }
    }["Xh.useMemo[re]"], [
        w,
        r,
        ce,
        D,
        c
    ]), ue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Xh.useMemo[ue]": ()=>({
                "aria-orientation": R === "both" ? void 0 : R,
                ...I ? {} : re,
                onKeyDown (L) {
                    if (L.key === "Tab" && L.shiftKey && r && !w) {
                        const te = gt(L.nativeEvent);
                        if (te && !De(T.current, te)) return;
                        et(L), n.setOpen(!1, ke(lo, L.nativeEvent)), Be(i) && i.focus();
                        return;
                    }
                    se(L);
                },
                onPointerMove () {
                    ae.current = !0;
                }
            })
    }["Xh.useMemo[ue]"], [
        re,
        se,
        T,
        R,
        I,
        n,
        r,
        w,
        i
    ]), q = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Xh.useMemo[q]": ()=>{
            function L(H) {
                p === "auto" && Za(H.nativeEvent) && (k.current = !w);
            }
            function te(H) {
                k.current = p, p === "auto" && Ja(H.nativeEvent) && (k.current = !0);
            }
            return {
                onKeyDown (H) {
                    const Se = n.select("open");
                    ae.current = !1;
                    const xe = H.key.startsWith("Arrow"), we = Gh(H.key, Q(), m), Ce = Ar(H.key, R), Oe = (g ? we : Ce) || H.key === "Enter" || H.key.trim() === "";
                    if (w && Se) return se(H);
                    if (!(!Se && !v && xe)) {
                        if (Oe) {
                            const Ve = Ar(H.key, Q());
                            $.current = g && Ve ? null : H.key;
                        }
                        if (g) {
                            we && (et(H), Se ? (z.current = zr(a, he.current), ee(H)) : n.setOpen(!0, ke(xo, H.nativeEvent, H.currentTarget)));
                            return;
                        }
                        Ce && (J.current != null && (z.current = J.current), et(H), !Se && v ? n.setOpen(!0, ke(xo, H.nativeEvent, H.currentTarget)) : se(H), Se && ee(H));
                    }
                },
                onFocus (H) {
                    n.select("open") && !w && (z.current = -1, ee(H));
                },
                onPointerDown: te,
                onPointerEnter: te,
                onMouseDown: L,
                onClick: L
            };
        }
    }["Xh.useMemo[q]"], [
        se,
        he,
        p,
        a,
        g,
        ee,
        n,
        v,
        R,
        Q,
        m,
        J,
        w
    ]), X = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Xh.useMemo[X]": ()=>({
                ...re,
                ...q
            })
    }["Xh.useMemo[X]"], [
        re,
        q
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Xh.useMemo": ()=>u ? {
                reference: X,
                floating: ue,
                item: F,
                trigger: q
            } : {}
    }["Xh.useMemo"], [
        u,
        X,
        ue,
        q,
        F
    ]);
}
_s42(Xh, "Bf4wQXeMOyYyhpIfXuwVj7/d8Gs=");
_c154 = Xh;
const Zh = /* @__PURE__ */ new Map([
    [
        "select",
        "listbox"
    ],
    [
        "combobox",
        "listbox"
    ],
    [
        "label",
        !1
    ]
]);
function Jh(e, t = {}) {
    _s43();
    const n = "rootStore" in e ? e.rootStore : e, r = n.useState("open"), o1 = n.useState("floatingId"), i = n.useState("domReferenceElement"), s = n.useState("floatingElement"), { enabled: a = !0, role: c = "dialog" } = t, l = br(), u = (i == null ? void 0 : i.id) || l, f = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Jh.useMemo[f]": ()=>{
            var v;
            return ((v = lr(s)) == null ? void 0 : v.id) || o1;
        }
    }["Jh.useMemo[f]"], [
        s,
        o1
    ]), h = Zh.get(c) ?? c, g = mo() != null, m = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Jh.useMemo[m]": ()=>h === "tooltip" || c === "label" ? $e : {
                "aria-haspopup": h === "alertdialog" ? "dialog" : h,
                "aria-expanded": "false",
                ...h === "listbox" && {
                    role: "combobox"
                },
                ...h === "menu" && g && {
                    role: "menuitem"
                },
                ...c === "select" && {
                    "aria-autocomplete": "none"
                },
                ...c === "combobox" && {
                    "aria-autocomplete": "list"
                }
            }
    }["Jh.useMemo[m]"], [
        h,
        g,
        c
    ]), w = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Jh.useMemo[w]": ()=>h === "tooltip" || c === "label" ? {
                [`aria-${c === "label" ? "labelledby" : "describedby"}`]: r ? f : void 0
            } : {
                ...m,
                "aria-expanded": r ? "true" : "false",
                "aria-controls": r ? f : void 0,
                ...h === "menu" && {
                    id: u
                }
            }
    }["Jh.useMemo[w]"], [
        h,
        f,
        r,
        u,
        c,
        m
    ]), p = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Jh.useMemo[p]": ()=>{
            const v = {
                id: f,
                ...h && {
                    role: h
                }
            };
            return h === "tooltip" || c === "label" ? v : {
                ...v,
                ...h === "menu" && {
                    "aria-labelledby": u
                }
            };
        }
    }["Jh.useMemo[p]"], [
        h,
        f,
        u,
        c
    ]), y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "Jh.useCallback[y]": ({ active: v, selected: S })=>{
            const R = {
                role: "option",
                ...v && {
                    id: `${f}-fui-option`
                }
            };
            switch(c){
                case "select":
                case "combobox":
                    return {
                        ...R,
                        "aria-selected": S
                    };
            }
            return {};
        }
    }["Jh.useCallback[y]"], [
        f,
        c
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Jh.useMemo": ()=>a ? {
                reference: w,
                floating: p,
                item: y,
                trigger: m
            } : {}
    }["Jh.useMemo"], [
        a,
        w,
        p,
        m,
        y
    ]);
}
_s43(Jh, "h+OxW3A3mm9KeABgyUrVptLQ9mg=");
_c155 = Jh;
function Qh(e, t) {
    _s44();
    const n = "rootStore" in e ? e.rootStore : e, r = n.useState("open"), o1 = n.context.dataRef, { listRef: i, activeIndex: s, onMatch: a, onTypingChange: c, enabled: l = !0, findMatch: u = null, resetMs: f = 750, ignoreKeys: h = Un, selectedIndex: b = null } = t, g = yt(), m = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(""), w = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(b ?? s ?? -1), p = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null);
    ne(()=>{
        r && (g.clear(), p.current = null, m.current = "");
    }, [
        r,
        g
    ]), ne(()=>{
        r && m.current === "" && (w.current = b ?? s ?? -1);
    }, [
        r,
        b,
        s
    ]);
    const y = ie((C)=>{
        C ? o1.current.typing || (o1.current.typing = C, c == null || c(C)) : o1.current.typing && (o1.current.typing = C, c == null || c(C));
    }), v = ie((C)=>{
        function x(B, j, P) {
            const T = u ? u(j, P) : j.find((A)=>(A == null ? void 0 : A.toLocaleLowerCase().indexOf(P.toLocaleLowerCase())) === 0);
            return T ? B.indexOf(T) : -1;
        }
        const O = i.current;
        if (m.current.length > 0 && m.current[0] !== " " && (x(O, O, m.current) === -1 ? y(!1) : C.key === " " && et(C)), O == null || h.includes(C.key) || // Character key.
        C.key.length !== 1 || // Modifier key.
        C.ctrlKey || C.metaKey || C.altKey) return;
        r && C.key !== " " && (et(C), y(!0)), O.every((B)=>{
            var j, P;
            return B ? ((j = B[0]) == null ? void 0 : j.toLocaleLowerCase()) !== ((P = B[1]) == null ? void 0 : P.toLocaleLowerCase()) : !0;
        }) && m.current === C.key && (m.current = "", w.current = p.current), m.current += C.key, g.start(f, ()=>{
            m.current = "", w.current = p.current, y(!1);
        });
        const M = w.current, D = x(O, [
            ...O.slice((M || 0) + 1),
            ...O.slice(0, (M || 0) + 1)
        ], m.current);
        D !== -1 ? (a == null || a(D), p.current = D) : C.key !== " " && (m.current = "", y(!1));
    }), S = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Qh.useMemo[S]": ()=>({
                onKeyDown: v
            })
    }["Qh.useMemo[S]"], [
        v
    ]), R = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Qh.useMemo[R]": ()=>({
                onKeyDown: v,
                onKeyUp (C) {
                    C.key === " " && y(!1);
                }
            })
    }["Qh.useMemo[R]"], [
        v,
        y
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Qh.useMemo": ()=>l ? {
                reference: S,
                floating: R
            } : {}
    }["Qh.useMemo"], [
        l,
        S,
        R
    ]);
}
_s44(Qh, "dzQDD0L7v85jTWT8SR1K2R22rrE=");
_c156 = Qh;
let ep = /* @__PURE__ */ function(e) {
    return e.nestedDialogs = "--nested-dialogs", e;
}({}), tp = function(e) {
    return e[e.open = wn.open] = "open", e[e.closed = wn.closed] = "closed", e[e.startingStyle = wn.startingStyle] = "startingStyle", e[e.endingStyle = wn.endingStyle] = "endingStyle", e.nested = "data-nested", e.nestedDialogOpen = "data-nested-dialog-open", e;
}({});
const Vi = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(void 0);
("TURBOPACK compile-time value", "development") !== "production" && (Vi.displayName = "DialogPortalContext");
function np() {
    _s45();
    const e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(Vi);
    if (e === void 0) throw new Error(("TURBOPACK compile-time truthy", 1) ? "Base UI: <Dialog.Portal> is missing." : "TURBOPACK unreachable");
    return e;
}
_s45(np, "KtrK5+WEuqFyc+Nd5vj572lGrLM=");
const jn = "ArrowUp", En = "ArrowDown", dr = "ArrowLeft", Bn = "ArrowRight", Er = "Home", Sr = "End", Mc = /* @__PURE__ */ new Set([
    dr,
    Bn
]), rp = /* @__PURE__ */ new Set([
    dr,
    Bn,
    Er,
    Sr
]), Dc = /* @__PURE__ */ new Set([
    jn,
    En
]), op = /* @__PURE__ */ new Set([
    jn,
    En,
    Er,
    Sr
]), Vc = /* @__PURE__ */ new Set([
    ...Mc,
    ...Dc
]), ip = /* @__PURE__ */ new Set([
    ...Vc,
    Er,
    Sr
]), Lc = /* @__PURE__ */ new Set([
    jn,
    En,
    dr,
    Bn,
    Er,
    Sr
]), sp = "Shift", ap = "Control", cp = "Alt", lp = "Meta", up = /* @__PURE__ */ new Set([
    sp,
    ap,
    cp,
    lp
]);
function fp(e) {
    return Be(e) && e.tagName === "INPUT";
}
function ea(e) {
    return !!(fp(e) && e.selectionStart != null || Be(e) && e.tagName === "TEXTAREA");
}
function ta(e, t, n, r) {
    if (!e || !t || !t.scrollTo) return;
    let o1 = e.scrollLeft, i = e.scrollTop;
    const s = e.clientWidth < e.scrollWidth, a = e.clientHeight < e.scrollHeight;
    if (s && r !== "vertical") {
        const c = na(e, t, "left"), l = Pr(e), u = Pr(t);
        n === "ltr" && (c + t.offsetWidth + u.scrollMarginRight > e.scrollLeft + e.clientWidth - l.scrollPaddingRight ? o1 = c + t.offsetWidth + u.scrollMarginRight - e.clientWidth + l.scrollPaddingRight : c - u.scrollMarginLeft < e.scrollLeft + l.scrollPaddingLeft && (o1 = c - u.scrollMarginLeft - l.scrollPaddingLeft)), n === "rtl" && (c - u.scrollMarginRight < e.scrollLeft + l.scrollPaddingLeft ? o1 = c - u.scrollMarginLeft - l.scrollPaddingLeft : c + t.offsetWidth + u.scrollMarginRight > e.scrollLeft + e.clientWidth - l.scrollPaddingRight && (o1 = c + t.offsetWidth + u.scrollMarginRight - e.clientWidth + l.scrollPaddingRight));
    }
    if (a && r !== "horizontal") {
        const c = na(e, t, "top"), l = Pr(e), u = Pr(t);
        c - u.scrollMarginTop < e.scrollTop + l.scrollPaddingTop ? i = c - u.scrollMarginTop - l.scrollPaddingTop : c + t.offsetHeight + u.scrollMarginBottom > e.scrollTop + e.clientHeight - l.scrollPaddingBottom && (i = c + t.offsetHeight + u.scrollMarginBottom - e.clientHeight + l.scrollPaddingBottom);
    }
    e.scrollTo({
        left: o1,
        top: i,
        behavior: "auto"
    });
}
function na(e, t, n) {
    const r = n === "left" ? "offsetLeft" : "offsetTop";
    let o1 = 0;
    for(; t.offsetParent && (o1 += t[r], t.offsetParent !== e);)t = t.offsetParent;
    return o1;
}
function Pr(e) {
    const t = getComputedStyle(e);
    return {
        scrollMarginTop: parseFloat(t.scrollMarginTop) || 0,
        scrollMarginRight: parseFloat(t.scrollMarginRight) || 0,
        scrollMarginBottom: parseFloat(t.scrollMarginBottom) || 0,
        scrollMarginLeft: parseFloat(t.scrollMarginLeft) || 0,
        scrollPaddingTop: parseFloat(t.scrollPaddingTop) || 0,
        scrollPaddingRight: parseFloat(t.scrollPaddingRight) || 0,
        scrollPaddingBottom: parseFloat(t.scrollPaddingBottom) || 0,
        scrollPaddingLeft: parseFloat(t.scrollPaddingLeft) || 0
    };
}
_c157 = Pr;
const dp = {
    ...ho,
    ...fo,
    nestedDialogOpen (e) {
        return e ? {
            [tp.nestedDialogOpen]: ""
        } : null;
    }
}, Fc = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_s46(function(t, n) {
    _s46();
    const { className: r, finalFocus: o1, initialFocus: i, render: s, ...a } = t, { store: c } = kn(), l = c.useState("descriptionElementId"), u = c.useState("disablePointerDismissal"), f = c.useState("floatingRootContext"), h = c.useState("popupProps"), b = c.useState("modal"), g = c.useState("mounted"), m = c.useState("nested"), w = c.useState("nestedOpenDialogCount"), p = c.useState("open"), y = c.useState("openMethod"), v = c.useState("titleElementId"), S = c.useState("transitionStatus"), R = c.useState("role");
    np(), yr({
        open: p,
        ref: c.context.popupRef,
        onComplete () {
            var D, B;
            p && ((B = (D = c.context).onOpenChangeComplete) == null || B.call(D, !0));
        }
    });
    function C(D) {
        return D === "touch" ? c.context.popupRef.current : !0;
    }
    const x = i === void 0 ? C : i, O = w > 0, N = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Fc.useMemo[N]": ()=>({
                open: p,
                nested: m,
                transitionStatus: S,
                nestedDialogOpen: O
            })
    }["Fc.useMemo[N]"], [
        p,
        m,
        S,
        O
    ]), M = Ne("div", t, {
        state: N,
        props: [
            h,
            {
                "aria-labelledby": v ?? void 0,
                "aria-describedby": l ?? void 0,
                role: R,
                tabIndex: -1,
                hidden: !g,
                onKeyDown (D) {
                    Lc.has(D.key) && D.stopPropagation();
                },
                style: {
                    [ep.nestedDialogs]: w
                }
            },
            a
        ],
        ref: [
            n,
            c.context.popupRef,
            c.useStateSetter("popupElement")
        ],
        stateAttributesMapping: dp
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(vc, {
        context: f,
        openInteractionType: y,
        disabled: !g,
        closeOnFocusOut: !u,
        initialFocus: x,
        returnFocus: o1,
        modal: b !== !1,
        restoreFocus: "popup",
        children: M
    });
}, "3LO2bdTqrbCyIGp3PjDTDXazH1E=", true));
("TURBOPACK compile-time value", "development") !== "production" && (Fc.displayName = "DialogPopup");
function zc(e) {
    return yi(19) ? e : e ? "true" : void 0;
}
const Li = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c158 = function(t, n) {
    const { cutout: r, ...o1 } = t;
    let i;
    if (r) {
        const s = r == null ? void 0 : r.getBoundingClientRect();
        i = `polygon(
      0% 0%,
      100% 0%,
      100% 100%,
      0% 100%,
      0% 0%,
      ${s.left}px ${s.top}px,
      ${s.left}px ${s.bottom}px,
      ${s.right}px ${s.bottom}px,
      ${s.right}px ${s.top}px,
      ${s.left}px ${s.top}px
    )`;
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        ref: n,
        role: "presentation",
        "data-base-ui-inert": "",
        ...o1,
        style: {
            position: "fixed",
            inset: 0,
            userSelect: "none",
            WebkitUserSelect: "none",
            clipPath: i
        }
    });
});
_c159 = Li;
("TURBOPACK compile-time value", "development") !== "production" && (Li.displayName = "InternalBackdrop");
const jc = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_s47(function(t, n) {
    _s47();
    const { keepMounted: r = !1, ...o1 } = t, { store: i } = kn(), s = i.useState("mounted"), a = i.useState("modal");
    return s || r ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Vi.Provider, {
        value: r,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(_i, {
            ref: n,
            ...o1,
            children: [
                s && a === !0 && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Li, {
                    ref: i.context.internalBackdropRef,
                    inert: zc(!open)
                }),
                t.children
            ]
        })
    }) : null;
}, "M1YFd/Gt+WFmi3/fRfq9RnMQEQU="));
("TURBOPACK compile-time value", "development") !== "production" && (jc.displayName = "DialogPortal");
let ra = {}, oa = {}, ia = "";
function hp(e) {
    if (typeof document > "u") return !1;
    const t = qt(e);
    return Ue(t).innerWidth - t.documentElement.clientWidth > 0;
}
function pp(e) {
    const t = qt(e), n = t.documentElement, r = t.body, o1 = On(n) ? n : r, i = o1.style.overflow;
    return o1.style.overflow = "hidden", ()=>{
        o1.style.overflow = i;
    };
}
function mp(e) {
    var h, b;
    const t = qt(e), n = t.documentElement, r = t.body, o1 = Ue(n);
    let i = 0, s = 0;
    const a = zt.create(), c = typeof CSS < "u" && ((h = CSS.supports) == null ? void 0 : h.call(CSS, "scrollbar-gutter", "stable"));
    if (Ka && (((b = o1.visualViewport) == null ? void 0 : b.scale) ?? 1) !== 1) return ()=>{};
    function l() {
        const g = o1.getComputedStyle(n), m = o1.getComputedStyle(r), y = (g.scrollbarGutter || "").includes("both-edges") ? "stable both-edges" : "stable";
        i = n.scrollTop, s = n.scrollLeft, ra = {
            scrollbarGutter: n.style.scrollbarGutter,
            overflowY: n.style.overflowY,
            overflowX: n.style.overflowX
        }, ia = n.style.scrollBehavior, oa = {
            position: r.style.position,
            height: r.style.height,
            width: r.style.width,
            boxSizing: r.style.boxSizing,
            overflowY: r.style.overflowY,
            overflowX: r.style.overflowX,
            scrollBehavior: r.style.scrollBehavior
        };
        const v = n.scrollHeight > n.clientHeight, S = n.scrollWidth > n.clientWidth, R = g.overflowY === "scroll" || m.overflowY === "scroll", C = g.overflowX === "scroll" || m.overflowX === "scroll", x = Math.max(0, o1.innerWidth - n.clientWidth), O = Math.max(0, o1.innerHeight - n.clientHeight), N = parseFloat(m.marginTop) + parseFloat(m.marginBottom), M = parseFloat(m.marginLeft) + parseFloat(m.marginRight), D = On(n) ? n : r;
        if (c) {
            n.style.scrollbarGutter = y, D.style.overflowY = "hidden", D.style.overflowX = "hidden";
            return;
        }
        Object.assign(n.style, {
            scrollbarGutter: y,
            overflowY: "hidden",
            overflowX: "hidden"
        }), (v || R) && (n.style.overflowY = "scroll"), (S || C) && (n.style.overflowX = "scroll"), Object.assign(r.style, {
            position: "relative",
            height: N || O ? `calc(100dvh - ${N + O}px)` : "100dvh",
            width: M || x ? `calc(100vw - ${M + x}px)` : "100vw",
            boxSizing: "border-box",
            overflow: "hidden",
            scrollBehavior: "unset"
        }), r.scrollTop = i, r.scrollLeft = s, n.setAttribute("data-base-ui-scroll-locked", ""), n.style.scrollBehavior = "unset";
    }
    function u() {
        Object.assign(n.style, ra), Object.assign(r.style, oa), c || (n.scrollTop = i, n.scrollLeft = s, n.removeAttribute("data-base-ui-scroll-locked"), n.style.scrollBehavior = ia);
    }
    function f() {
        u(), a.request(l);
    }
    return l(), o1.addEventListener("resize", f), ()=>{
        a.cancel(), u(), typeof o1.removeEventListener == "function" && o1.removeEventListener("resize", f);
    };
}
class gp {
    constructor(){
        me(this, "lockCount", 0);
        me(this, "restore", null);
        me(this, "timeoutLock", Gn.create());
        me(this, "timeoutUnlock", Gn.create());
        me(this, "release", ()=>{
            this.lockCount -= 1, this.lockCount === 0 && this.restore && this.timeoutUnlock.start(0, this.unlock);
        });
        me(this, "unlock", ()=>{
            var t;
            this.lockCount === 0 && this.restore && ((t = this.restore) == null || t.call(this), this.restore = null);
        });
    }
    acquire(t) {
        return this.lockCount += 1, this.lockCount === 1 && this.restore === null && this.timeoutLock.start(0, ()=>this.lock(t)), this.release;
    }
    lock(t) {
        if (this.lockCount === 0 || this.restore !== null) return;
        const r = qt(t).documentElement, o1 = Ue(r).getComputedStyle(r).overflowY;
        if (o1 === "hidden" || o1 === "clip") {
            this.restore = lt;
            return;
        }
        const i = Nf || !hp(t);
        this.restore = i ? pp(t) : mp(t);
    }
}
const bp = new gp();
function Bc(e = !0, t = null) {
    ne(()=>{
        if (e) return bp.acquire(t);
    }, [
        e,
        t
    ]);
}
_c160 = Bc;
function yp(e) {
    _s48();
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(""), n = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "yp.useCallback[n]": (o1)=>{
            o1.defaultPrevented || (t.current = o1.pointerType, e(o1, o1.pointerType));
        }
    }["yp.useCallback[n]"], [
        e
    ]);
    return {
        onClick: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
            "yp.useCallback": (o1)=>{
                if (o1.detail === 0) {
                    e(o1, "keyboard");
                    return;
                }
                "pointerType" in o1 && e(o1, o1.pointerType), e(o1, t.current), t.current = "";
            }
        }["yp.useCallback"], [
            e
        ]),
        onPointerDown: n
    };
}
_s48(yp, "eZw/f7UfrVy2a+4ZkCE8sRQhxKc=");
function qc(e) {
    _s49();
    const [t, n] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(null), r = ie((a, c)=>{
        e || n(c);
    }), o1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "qc.useCallback[o]": ()=>{
            n(null);
        }
    }["qc.useCallback[o]"], []), { onClick: i, onPointerDown: s } = yp(r);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "qc.useMemo": ()=>({
                openMethod: t,
                reset: o1,
                triggerProps: {
                    onClick: i,
                    onPointerDown: s
                }
            })
    }["qc.useMemo"], [
        t,
        o1,
        i,
        s
    ]);
}
_s49(qc, "x5k497hMfAUuDdfDCsAdgn86C9A=");
function vp(e) {
    _s50();
    const { store: t, parentContext: n, actionsRef: r } = e, o1 = t.useState("open"), i = t.useState("disablePointerDismissal"), s = t.useState("modal"), a = t.useState("popupElement"), { openMethod: c, triggerProps: l, reset: u } = qc(o1);
    jh(t);
    const { forceUnmount: f } = Bh(o1, t, ()=>{
        u();
    }), h = ie((M)=>{
        const D = ke(M);
        return D.preventUnmountOnClose = ()=>{
            t.set("preventUnmountingOnClose", !0);
        }, D;
    }), b = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "vp.useCallback[b]": ()=>{
            t.setOpen(!1, h(nf));
        }
    }["vp.useCallback[b]"], [
        t,
        h
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useImperativeHandle(r, {
        "vp.useImperativeHandle": ()=>({
                unmount: f,
                close: b
            })
    }["vp.useImperativeHandle"], [
        f,
        b
    ]);
    const g = Uh({
        popupStore: t,
        onOpenChange: t.setOpen,
        treatPopupAsFloatingElement: !0,
        noEmit: !0
    }), [m, w] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(0), p = m === 0, y = Jh(g), v = Ic(g, {
        outsidePressEvent () {
            return t.context.internalBackdropRef.current || t.context.backdropRef.current ? "intentional" : {
                mouse: s === "trap-focus" ? "sloppy" : "intentional",
                touch: "sloppy"
            };
        },
        outsidePress (M) {
            if ("button" in M && M.button !== 0 || "touches" in M && M.touches.length !== 1) return !1;
            const D = gt(M);
            if (p && !i) {
                const B = D;
                return s && (t.context.internalBackdropRef.current || t.context.backdropRef.current) ? t.context.internalBackdropRef.current === B || t.context.backdropRef.current === B || De(B, a) && !(B != null && B.hasAttribute("data-base-ui-portal")) : !0;
            }
            return !1;
        },
        escapeKey: p
    });
    Bc(o1 && s === !0, a);
    const { getReferenceProps: S, getFloatingProps: R, getTriggerProps: C } = Pc([
        y,
        v
    ]);
    t.useContextCallback("onNestedDialogOpen", {
        "vp.useContextCallback": (M)=>{
            w(M + 1);
        }
    }["vp.useContextCallback"]), t.useContextCallback("onNestedDialogClose", {
        "vp.useContextCallback": ()=>{
            w(0);
        }
    }["vp.useContextCallback"]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "vp.useEffect": ()=>(n != null && n.onNestedDialogOpen && o1 && n.onNestedDialogOpen(m), n != null && n.onNestedDialogClose && !o1 && n.onNestedDialogClose(), ({
                "vp.useEffect": ()=>{
                    n != null && n.onNestedDialogClose && o1 && n.onNestedDialogClose();
                }
            })["vp.useEffect"])
    }["vp.useEffect"], [
        o1,
        n,
        m
    ]);
    const x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "vp.useMemo[x]": ()=>S(l)
    }["vp.useMemo[x]"], [
        S,
        l
    ]), O = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "vp.useMemo[O]": ()=>C(l)
    }["vp.useMemo[O]"], [
        C,
        l
    ]), N = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "vp.useMemo[N]": ()=>R()
    }["vp.useMemo[N]"], [
        R
    ]);
    t.useSyncedValues({
        openMethod: c,
        activeTriggerProps: x,
        inactiveTriggerProps: O,
        popupProps: N,
        floatingRootContext: g,
        nestedOpenDialogCount: m
    });
}
_s50(vp, "hlPwXVKL2ZQOyYs3gpbzno6yMDM=", true);
const wp = {
    ...Wh,
    modal: le((e)=>e.modal),
    nested: le((e)=>e.nested),
    nestedOpenDialogCount: le((e)=>e.nestedOpenDialogCount),
    disablePointerDismissal: le((e)=>e.disablePointerDismissal),
    openMethod: le((e)=>e.openMethod),
    descriptionElementId: le((e)=>e.descriptionElementId),
    titleElementId: le((e)=>e.titleElementId),
    viewportElement: le((e)=>e.viewportElement),
    role: le((e)=>e.role)
};
class Ep extends Nc {
    constructor(n){
        super(Sp(n), {
            popupRef: /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createRef(),
            backdropRef: /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createRef(),
            internalBackdropRef: /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createRef(),
            triggerElements: new Di(),
            onOpenChange: void 0,
            onOpenChangeComplete: void 0
        }, wp);
        me(this, "setOpen", (n, r)=>{
            var a, c, l, u;
            if (r.preventUnmountOnClose = ()=>{
                this.set("preventUnmountingOnClose", !0);
            }, !n && r.trigger == null && this.state.activeTriggerId != null && (r.trigger = this.state.activeTriggerElement ?? void 0), (c = (a = this.context).onOpenChange) == null || c.call(a, n, r), r.isCanceled) return;
            const o1 = {
                open: n,
                nativeEvent: r.event,
                reason: r.reason,
                nested: this.state.nested
            };
            (l = this.state.floatingRootContext.context.events) == null || l.emit("openchange", o1);
            const i = {
                open: n
            }, s = ((u = r.trigger) == null ? void 0 : u.id) ?? null;
            (s || n) && (i.activeTriggerId = s, i.activeTriggerElement = r.trigger ?? null), this.update(i);
        });
    }
}
function Sp(e = {}) {
    return {
        ...Hh(),
        modal: !0,
        disablePointerDismissal: !1,
        popupElement: null,
        viewportElement: null,
        descriptionElementId: void 0,
        titleElementId: void 0,
        openMethod: null,
        nested: !1,
        nestedOpenDialogCount: 0,
        role: "dialog",
        ...e
    };
}
_c161 = Sp;
function Rp(e) {
    _s51();
    const { children: t, open: n, defaultOpen: r = !1, onOpenChange: o1, onOpenChangeComplete: i, disablePointerDismissal: s = !1, modal: a = !0, actionsRef: c, handle: l, triggerId: u, defaultTriggerId: f = null } = e, h = kn(!0), b = !!h, g = St(()=>(l == null ? void 0 : l.store) ?? new Ep({
            open: n ?? r,
            activeTriggerId: u !== void 0 ? u : f,
            modal: a,
            disablePointerDismissal: s,
            nested: b
        })).current;
    g.useControlledProp("open", n, r), g.useControlledProp("activeTriggerId", u, f), g.useSyncedValues({
        disablePointerDismissal: s,
        nested: b,
        modal: a
    }), g.useContextCallback("onOpenChange", o1), g.useContextCallback("onOpenChangeComplete", i);
    const m = g.useState("payload");
    vp({
        store: g,
        actionsRef: c,
        parentContext: h == null ? void 0 : h.store.context
    });
    const w = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Rp.useMemo[w]": ()=>({
                store: g
            })
    }["Rp.useMemo[w]"], [
        g
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(xi.Provider, {
        value: w,
        children: typeof t == "function" ? t({
            payload: m
        }) : t
    });
}
_s51(Rp, "oLAXUQsMJ4zeb+8y83a6Bch3Oc8=", true);
_c162 = Rp;
const Hc = /* @__PURE__ */ /*#__PURE__*/ _s52(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c163 = _s52(function(t, n) {
    _s52();
    const { render: r, className: o1, id: i, ...s } = t, { store: a } = kn(), c = Rt(i);
    return a.useSyncedValueWithCleanup("titleElementId", c), Ne("h2", t, {
        ref: n,
        props: [
            {
                id: c
            },
            s
        ]
    });
}, "7vbDcxjRShQ0mL2xpT48Kml7GzU=", true)), "7vbDcxjRShQ0mL2xpT48Kml7GzU=", true);
_c164 = Hc;
("TURBOPACK compile-time value", "development") !== "production" && (Hc.displayName = "DialogTitle");
var xp = "bmnuu84", Cp = "bmnuu85", Op = {
    small: "bmnuu86",
    medium: "bmnuu87",
    large: "bmnuu88",
    xlarge: "bmnuu89",
    full: "bmnuu8a"
}, Tp = {
    small: "bmnuu8b",
    medium: "bmnuu8c",
    large: "bmnuu8d"
}, Ip = "bmnuu8e", kp = "bmnuu8f", _p = "bmnuu8g", Np = "bmnuu8h", Ap = "bmnuu8i", Pp = "bmnuu8j";
const ig = ({ open: e, onOpenChange: t, onClose: n, size: r = "medium", rounded: o1 = "medium", title: i, description: s, children: a, actions: c, footer: l, showCloseButton: u = !0, closeOnOverlayClick: f = !0, closeOnEscape: h = !0, className: b })=>{
    const g = Jt(), m = (g == null ? void 0 : g.themeClass) ?? Zt;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Rp, {
        open: e,
        onOpenChange: (p)=>{
            t == null || t(p), p || n == null || n();
        },
        disablePointerDismissal: !f,
        modal: h,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(jc, {
            children: [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(qa, {
                    className: xp
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Fc, {
                    className: st(m, Cp, Op[r], Tp[o1], b),
                    children: [
                        (i || u) && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                            className: Ip,
                            children: [
                                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                    style: {
                                        flex: 1
                                    },
                                    children: [
                                        i && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Hc, {
                                            className: kp,
                                            children: i
                                        }),
                                        s && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Wa, {
                                            className: Pp,
                                            children: s
                                        })
                                    ]
                                }),
                                u && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Ha, {
                                    className: _p,
                                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("svg", {
                                        width: "20",
                                        height: "20",
                                        viewBox: "0 0 20 20",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        "aria-hidden": "true",
                                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
                                            d: "M15 5L5 15M5 5L15 15",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })
                                    })
                                })
                            ]
                        }),
                        /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                            className: Np,
                            children: a
                        }),
                        (c || l) && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                            className: Ap,
                            children: c ? c.map((p, y)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Aa, {
                                    variant: p.variant ?? "solid",
                                    intent: p.intent ?? "primary",
                                    onClick: p.onClick,
                                    disabled: p.disabled,
                                    children: p.label
                                }, y)) : l
                        })
                    ]
                })
            ]
        })
    });
};
function Mp(e) {
    _s53();
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(!0);
    t.current && (t.current = !1, e());
}
_s53(Mp, "MWmK3j+AMI0jPG0LB/YHWPrh2Ng=");
_c165 = Mp;
const Fi = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(null);
("TURBOPACK compile-time value", "development") !== "production" && (Fi.displayName = "SelectRootContext");
const zi = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(null);
("TURBOPACK compile-time value", "development") !== "production" && (zi.displayName = "SelectFloatingContext");
function en() {
    _s54();
    const e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(Fi);
    if (e === null) throw new Error(("TURBOPACK compile-time truthy", 1) ? "Base UI: SelectRootContext is missing. Select parts must be placed within <Select.Root>." : "TURBOPACK unreachable");
    return e;
}
_s54(en, "KtrK5+WEuqFyc+Nd5vj572lGrLM=");
function Wc() {
    _s55();
    const e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(zi);
    if (e === null) throw new Error(("TURBOPACK compile-time truthy", 1) ? "Base UI: SelectFloatingContext is missing. Select parts must be placed within <Select.Root>." : "TURBOPACK unreachable");
    return e;
}
_s55(Wc, "KtrK5+WEuqFyc+Nd5vj572lGrLM=");
_c166 = Wc;
function ji(e = {}) {
    const { id: t, implicit: n = !1, controlRef: r } = e, { controlId: o1, setControlId: i } = Vt(), s = Rt(t);
    return ne(()=>{
        if (!(!n && !t || i === lt)) {
            if (n) {
                const a = r == null ? void 0 : r.current;
                Ae(a) && a.closest("label") != null ? i(t ?? null) : i(o1 ?? s);
            } else t && i(t);
            return ()=>{
                t && i(void 0);
            };
        }
    }, [
        t,
        r,
        o1,
        i,
        n,
        s
    ]), o1 ?? s;
}
const Dp = (e, t)=>Object.is(e, t);
_c167 = Dp;
function Zn(e, t, n) {
    return e == null || t == null ? Object.is(e, t) : n(e, t);
}
_c168 = Zn;
function Do(e, t, n) {
    return !e || e.length === 0 ? !1 : e.some((r)=>r === void 0 ? !1 : Zn(r, t, n));
}
_c169 = Do;
function fi(e, t, n) {
    return !e || e.length === 0 ? -1 : e.findIndex((r)=>r === void 0 ? !1 : Zn(r, t, n));
}
function Vp(e, t, n) {
    return e.filter((r)=>!Zn(r, t, n));
}
_c170 = Vp;
function di(e) {
    if (e == null) return "";
    if (typeof e == "string") return e;
    try {
        return JSON.stringify(e);
    } catch  {
        return String(e);
    }
}
function Lp(e) {
    return e != null && e.length > 0 && typeof e[0] == "object" && e[0] != null && "items" in e[0];
}
_c171 = Lp;
function or(e, t) {
    if (t && e != null) return t(e) ?? "";
    if (e && typeof e == "object") {
        if ("label" in e && e.label != null) return String(e.label);
        if ("value" in e) return String(e.value);
    }
    return di(e);
}
function Pn(e, t) {
    return t && e != null ? t(e) ?? "" : e && typeof e == "object" && "value" in e && "label" in e ? di(e.value) : di(e);
}
_c172 = Pn;
function Fp(e, t, n) {
    if (n && e != null) return n(e);
    if (e && typeof e == "object" && "label" in e && e.label != null) return e.label;
    if (t && !Array.isArray(t)) return t[e] ?? or(e, n);
    if (Array.isArray(t)) {
        const r = Lp(t) ? t.flatMap((o1)=>o1.items) : t;
        if (e == null) {
            const o1 = r.find((i)=>i.value == null);
            return o1 && o1.label != null ? o1.label : or(e, n);
        }
        if (typeof e != "object") {
            const o1 = r.find((i)=>i && i.value === e);
            return o1 && o1.label != null ? o1.label : or(e, n);
        }
        if ("value" in e) {
            const o1 = r.find((i)=>i && i.value === e.value);
            if (o1 && o1.label != null) return o1.label;
        }
    }
    return or(e, n);
}
_c173 = Fp;
function zp(e, t) {
    return !Array.isArray(e) || e.length === 0 ? "" : e.map((n)=>or(n, t)).join(", ");
}
const ye = {
    id: le((e)=>e.id),
    modal: le((e)=>e.modal),
    multiple: le((e)=>e.multiple),
    items: le((e)=>e.items),
    itemToStringLabel: le((e)=>e.itemToStringLabel),
    itemToStringValue: le((e)=>e.itemToStringValue),
    isItemEqualToValue: le((e)=>e.isItemEqualToValue),
    value: le((e)=>e.value),
    open: le((e)=>e.open),
    mounted: le((e)=>e.mounted),
    forceMount: le((e)=>e.forceMount),
    transitionStatus: le((e)=>e.transitionStatus),
    openMethod: le((e)=>e.openMethod),
    activeIndex: le((e)=>e.activeIndex),
    selectedIndex: le((e)=>e.selectedIndex),
    isActive: le((e, t)=>e.activeIndex === t),
    isSelected: le((e, t, n)=>{
        const r = e.isItemEqualToValue, o1 = e.value;
        return e.multiple ? Array.isArray(o1) && o1.some((i)=>Zn(i, n, r)) : e.selectedIndex === t && e.selectedIndex !== null ? !0 : Zn(o1, n, r);
    }),
    isSelectedByFocus: le((e, t)=>e.selectedIndex === t),
    popupProps: le((e)=>e.popupProps),
    triggerProps: le((e)=>e.triggerProps),
    triggerElement: le((e)=>e.triggerElement),
    positionerElement: le((e)=>e.positionerElement),
    listElement: le((e)=>e.listElement),
    scrollUpArrowVisible: le((e)=>e.scrollUpArrowVisible),
    scrollDownArrowVisible: le((e)=>e.scrollDownArrowVisible),
    hasScrollArrows: le((e)=>e.hasScrollArrows),
    serializedValue: le((e)=>{
        const { multiple: t, value: n, itemToStringValue: r } = e;
        return t && Array.isArray(n) && n.length === 0 ? "" : Pn(n, r);
    })
};
function jp(e) {
    _s56();
    const { id: t, value: n, defaultValue: r = null, onValueChange: o1, open: i, defaultOpen: s = !1, onOpenChange: a, name: c, disabled: l = !1, readOnly: u = !1, required: f = !1, modal: h = !0, actionsRef: b, inputRef: g, onOpenChangeComplete: m, items: w, multiple: p = !1, itemToStringLabel: y, itemToStringValue: v, isItemEqualToValue: S = Dp, highlightItemOnHover: R = !0, children: C } = e, { clearErrors: x } = In(), { setDirty: O, shouldValidateOnChange: N, validityData: M, setFilled: D, name: B, disabled: j, validation: P } = Dt(), { controlId: T } = Vt(), A = ji({
        id: t
    }), _ = j || l, I = B ?? c, [k, z] = Kn({
        controlled: n,
        default: p ? r ?? Un : r,
        name: "Select",
        state: "value"
    }), [$, ae] = Kn({
        controlled: i,
        default: s,
        name: "Select",
        state: "open"
    }), ee = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef([]), ge = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef([]), fe = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null), U = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null), Z = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(0), K = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null), he = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef([]), pe = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(!1), V = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(!1), J = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null), Y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef({
        allowSelectedMouseUp: !1,
        allowUnselectedMouseUp: !1
    }), Re = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(!1), { mounted: ce, setMounted: F, transitionStatus: Q } = Ri($), { openMethod: se, triggerProps: re, reset: ue } = qc($), q = St(()=>new zn({
            id: A,
            modal: h,
            multiple: p,
            itemToStringLabel: y,
            itemToStringValue: v,
            isItemEqualToValue: S,
            value: k,
            open: $,
            mounted: ce,
            transitionStatus: Q,
            items: w,
            forceMount: !1,
            openMethod: null,
            activeIndex: null,
            selectedIndex: null,
            popupProps: {},
            triggerProps: {},
            triggerElement: null,
            positionerElement: null,
            listElement: null,
            scrollUpArrowVisible: !1,
            scrollDownArrowVisible: !1,
            hasScrollArrows: !1
        })).current, X = ve(q, ye.activeIndex), L = ve(q, ye.selectedIndex), te = ve(q, ye.triggerElement), H = ve(q, ye.positionerElement), Se = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "jp.useMemo[Se]": ()=>p && Array.isArray(k) && k.length === 0 ? "" : Pn(k, v)
    }["jp.useMemo[Se]"], [
        p,
        k,
        v
    ]), xe = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "jp.useMemo[xe]": ()=>p && Array.isArray(k) ? k.map({
                "jp.useMemo[xe]": (Ee)=>Pn(Ee, v)
            }["jp.useMemo[xe]"]) : Pn(k, v)
    }["jp.useMemo[xe]"], [
        p,
        k,
        v
    ]), we = Je(q.state.triggerElement);
    co({
        id: A,
        commit: P.commit,
        value: k,
        controlRef: we,
        name: I,
        getValue: ()=>xe
    });
    const Ce = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(k);
    ne(()=>{
        k !== Ce.current && q.set("forceMount", !0);
    }, [
        q,
        k
    ]), ne(()=>{
        D(k !== null);
    }, [
        k,
        D
    ]), ne(function() {
        if ($) return;
        const He = he.current;
        if (p) {
            const Ft = Array.isArray(k) ? k : [];
            if (Ft.length === 0) {
                q.set("selectedIndex", null);
                return;
            }
            const Ct = Ft[Ft.length - 1], nn = fi(He, Ct, S);
            q.set("selectedIndex", nn === -1 ? null : nn);
            return;
        }
        const ct = fi(He, k, S);
        q.set("selectedIndex", ct === -1 ? null : ct);
    }, [
        p,
        $,
        k,
        he,
        S,
        q
    ]), Si(k, ()=>{
        x(I), O(k !== M.initialValue), N() ? P.commit(k) : P.commit(k, !0);
    });
    const Oe = ie((Ee, He)=>{
        if (a == null || a(Ee, He), !He.isCanceled && (ae(Ee), !Ee && q.state.activeIndex !== null)) {
            const ct = ee.current[q.state.activeIndex];
            queueMicrotask(()=>{
                ct == null || ct.setAttribute("tabindex", "-1");
            });
        }
    }), Ve = ie(()=>{
        F(!1), q.set("activeIndex", null), ue(), m == null || m(!1);
    });
    yr({
        enabled: !b,
        open: $,
        ref: fe,
        onComplete () {
            $ || Ve();
        }
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useImperativeHandle(b, {
        "jp.useImperativeHandle": ()=>({
                unmount: Ve
            })
    }["jp.useImperativeHandle"], [
        Ve
    ]);
    const ze = ie((Ee, He)=>{
        o1 == null || o1(Ee, He), !He.isCanceled && z(Ee);
    }), Ie = ie(()=>{
        const Ee = q.state.listElement || fe.current;
        if (!Ee) return;
        const He = Ee.scrollTop, ct = Ee.scrollTop + Ee.clientHeight, Ft = He > 1, Ct = ct < Ee.scrollHeight - 1;
        q.state.scrollUpArrowVisible !== Ft && q.set("scrollUpArrowVisible", Ft), q.state.scrollDownArrowVisible !== Ct && q.set("scrollDownArrowVisible", Ct);
    }), je = Ac({
        open: $,
        onOpenChange: Oe,
        elements: {
            reference: te,
            floating: H
        }
    }), ut = Rd(je, {
        enabled: !u && !_,
        event: "mousedown"
    }), Wt = Ic(je, {
        bubbles: !1
    }), tn = Xh(je, {
        enabled: !u && !_,
        listRef: ee,
        activeIndex: X,
        selectedIndex: L,
        disabledIndices: Un,
        onNavigate (Ee) {
            Ee === null && !$ || q.set("activeIndex", Ee);
        },
        // Implement our own listeners since `onPointerLeave` on each option fires while scrolling with
        // the `alignItemWithTrigger=true`, causing a performance issue on Chrome.
        focusItemOnHover: !1
    }), _n = Qh(je, {
        enabled: !u && !_ && ($ || !p),
        listRef: ge,
        activeIndex: X,
        selectedIndex: L,
        onMatch (Ee) {
            $ ? q.set("activeIndex", Ee) : ze(he.current[Ee], ke("none"));
        },
        onTypingChange (Ee) {
            pe.current = Ee;
        }
    }), { getReferenceProps: _e, getFloatingProps: Le, getItemProps: nt } = Pc([
        ut,
        Wt,
        tn,
        _n
    ]), Ke = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "jp.useMemo[Ke]": ()=>Yt(_e(), re)
    }["jp.useMemo[Ke]"], [
        _e,
        re
    ]);
    Mp(()=>{
        q.update({
            popupProps: Le(),
            triggerProps: Ke
        });
    }), ne(()=>{
        q.update({
            id: A,
            modal: h,
            multiple: p,
            value: k,
            open: $,
            mounted: ce,
            transitionStatus: Q,
            popupProps: Le(),
            triggerProps: Ke,
            items: w,
            itemToStringLabel: y,
            itemToStringValue: v,
            isItemEqualToValue: S,
            openMethod: se
        });
    }, [
        q,
        A,
        h,
        p,
        k,
        $,
        ce,
        Q,
        Le,
        Ke,
        w,
        y,
        v,
        S,
        se
    ]);
    const xt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "jp.useMemo[xt]": ()=>({
                store: q,
                name: I,
                required: f,
                disabled: _,
                readOnly: u,
                multiple: p,
                itemToStringLabel: y,
                itemToStringValue: v,
                highlightItemOnHover: R,
                setValue: ze,
                setOpen: Oe,
                listRef: ee,
                popupRef: fe,
                scrollHandlerRef: U,
                handleScrollArrowVisibility: Ie,
                scrollArrowsMountedCountRef: Z,
                getItemProps: nt,
                events: je.context.events,
                valueRef: K,
                valuesRef: he,
                labelsRef: ge,
                typingRef: pe,
                selectionRef: Y,
                selectedItemTextRef: J,
                validation: P,
                onOpenChangeComplete: m,
                keyboardActiveRef: V,
                alignItemWithTriggerActiveRef: Re,
                initialValueRef: Ce
            })
    }["jp.useMemo[xt]"], [
        q,
        I,
        f,
        _,
        u,
        p,
        y,
        v,
        R,
        ze,
        Oe,
        nt,
        je.context.events,
        P,
        m,
        Ie
    ]), at = Bt(g, P.inputRef), Lt = p && Array.isArray(k) && k.length > 0, bn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "jp.useMemo[bn]": ()=>!p || !Array.isArray(k) || !I ? null : k.map({
                "jp.useMemo[bn]": (Ee)=>{
                    const He = Pn(Ee, v);
                    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("input", {
                        type: "hidden",
                        name: I,
                        value: He
                    }, He);
                }
            }["jp.useMemo[bn]"])
    }["jp.useMemo[bn]"], [
        p,
        k,
        I,
        v
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Fi.Provider, {
        value: xt,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(zi.Provider, {
            value: je,
            children: [
                C,
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("input", {
                    ...P.getInputValidationProps({
                        onFocus () {
                            var Ee;
                            (Ee = q.state.triggerElement) == null || Ee.focus();
                        },
                        // Handle browser autofill.
                        onChange (Ee) {
                            if (Ee.nativeEvent.defaultPrevented) return;
                            const He = Ee.target.value, ct = ke(pn, Ee.nativeEvent);
                            function Ft() {
                                if (p) return;
                                const Ct = he.current.find((nn)=>Pn(nn, v).toLowerCase() === He.toLowerCase());
                                Ct != null && (O(Ct !== M.initialValue), ze(Ct, ct), N() && P.commit(Ct));
                            }
                            q.set("forceMount", !0), queueMicrotask(Ft);
                        }
                    }),
                    id: t || T || void 0,
                    name: p ? void 0 : I,
                    value: Se,
                    disabled: _,
                    required: f && !Lt,
                    readOnly: u,
                    ref: at,
                    style: gr,
                    tabIndex: -1,
                    "aria-hidden": !0
                }),
                bn
            ]
        })
    });
}
_s56(jp, "MgKxJbBOdq/FMT/gmPKwS6ejuY4=");
function Bp(e) {
    const t = e.getBoundingClientRect();
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const n = window.getComputedStyle(e, "::before"), r = window.getComputedStyle(e, "::after");
    if (!(n.content !== "none" || r.content !== "none")) return t;
    const i = parseFloat(n.width) || 0, s = parseFloat(n.height) || 0, a = parseFloat(r.width) || 0, c = parseFloat(r.height) || 0, l = Math.max(t.width, i, a), u = Math.max(t.height, s, c), f = l - t.width, h = u - t.height;
    return {
        left: t.left - f / 2,
        right: t.right + f / 2,
        top: t.top - h / 2,
        bottom: t.bottom + h / 2
    };
}
_c174 = Bp;
const Mr = 2, qp = {
    ...kf,
    ...Qt,
    value: ()=>null
}, $c = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_s57(function(t, n) {
    _s57();
    const { render: r, className: o1, disabled: i = !1, nativeButton: s = !0, ...a } = t, { setTouched: c, setFocused: l, validationMode: u, state: f, disabled: h } = Dt(), { labelId: b } = Vt(), { store: g, setOpen: m, selectionRef: w, validation: p, readOnly: y, alignItemWithTriggerActiveRef: v, disabled: S, keyboardActiveRef: R } = en(), C = h || S || i, x = ve(g, ye.open), O = ve(g, ye.value), N = ve(g, ye.triggerProps), M = ve(g, ye.positionerElement), D = ve(g, ye.listElement), B = ve(g, ye.serializedValue), j = Je(M), P = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null), T = yt(), A = yt(), { getButtonProps: _, buttonRef: I } = Tn({
        disabled: C,
        native: s
    }), k = ie((U)=>{
        g.set("triggerElement", U);
    }), z = Bt(n, P, I, k), $ = yt(), ae = yt();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "$c.useEffect": ()=>{
            if (x) return ae.start(200, {
                "$c.useEffect": ()=>{
                    w.current.allowUnselectedMouseUp = !0, $.start(200, {
                        "$c.useEffect": ()=>{
                            w.current.allowSelectedMouseUp = !0;
                        }
                    }["$c.useEffect"]);
                }
            }["$c.useEffect"]), ({
                "$c.useEffect": ()=>{
                    $.clear(), ae.clear();
                }
            })["$c.useEffect"];
            w.current = {
                allowSelectedMouseUp: !1,
                allowUnselectedMouseUp: !1
            }, A.clear();
        }
    }["$c.useEffect"], [
        x,
        w,
        A,
        $,
        ae
    ]);
    const ee = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "$c.useMemo[ee]": ()=>{
            var U;
            return (D == null ? void 0 : D.id) ?? ((U = lr(M)) == null ? void 0 : U.id);
        }
    }["$c.useMemo[ee]"], [
        D,
        M
    ]), ge = Yt(N, {
        role: "combobox",
        "aria-expanded": x ? "true" : "false",
        "aria-haspopup": "listbox",
        "aria-controls": x ? ee : void 0,
        "aria-labelledby": b,
        "aria-readonly": y || void 0,
        tabIndex: C ? -1 : 0,
        ref: z,
        onFocus (U) {
            l(!0), x && v.current && m(!1, ke(lo, U.nativeEvent)), T.start(0, ()=>{
                g.set("forceMount", !0);
            });
        },
        onBlur () {
            c(!0), l(!1), u === "onBlur" && p.commit(O);
        },
        onPointerMove () {
            R.current = !1;
        },
        onKeyDown () {
            R.current = !0;
        },
        onMouseDown (U) {
            if (x) return;
            const Z = qt(U.currentTarget);
            function K(he) {
                if (!P.current) return;
                const pe = he.target;
                if (De(P.current, pe) || De(j.current, pe) || pe === P.current) return;
                const V = Bp(P.current);
                he.clientX >= V.left - Mr && he.clientX <= V.right + Mr && he.clientY >= V.top - Mr && he.clientY <= V.bottom + Mr || m(!1, ke(tf, he));
            }
            A.start(0, ()=>{
                Z.addEventListener("mouseup", K, {
                    once: !0
                });
            });
        }
    }, p.getValidationProps, a, _);
    ge.role = "combobox";
    const fe = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "$c.useMemo[fe]": ()=>({
                ...f,
                open: x,
                disabled: C,
                value: O,
                readOnly: y,
                placeholder: !B
            })
    }["$c.useMemo[fe]"], [
        f,
        x,
        C,
        O,
        y,
        B
    ]);
    return Ne("button", t, {
        ref: [
            n,
            P
        ],
        state: fe,
        stateAttributesMapping: qp,
        props: ge
    });
}, "Og5zF5vTABZKAbp99C710k5yYms="));
("TURBOPACK compile-time value", "development") !== "production" && ($c.displayName = "SelectTrigger");
const Hp = {
    value: ()=>null
}, Uc = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_s58(function(t, n) {
    _s58();
    const { className: r, render: o1, children: i, ...s } = t, { store: a, valueRef: c } = en(), l = ve(a, ye.value), u = ve(a, ye.items), f = ve(a, ye.itemToStringLabel), h = ve(a, ye.serializedValue), b = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Uc.useMemo[b]": ()=>({
                value: l,
                placeholder: !h
            })
    }["Uc.useMemo[b]"], [
        l,
        h
    ]), g = typeof i == "function" ? i(l) : i ?? (Array.isArray(l) ? zp(l, f) : Fp(l, u, f));
    return Ne("span", t, {
        state: b,
        ref: [
            n,
            c
        ],
        props: [
            {
                children: g
            },
            s
        ],
        stateAttributesMapping: Hp
    });
}, "2ylckyL/CReFMu9xDo6lpE1hXF8="));
("TURBOPACK compile-time value", "development") !== "production" && (Uc.displayName = "SelectValue");
const Kc = /* @__PURE__ */ /*#__PURE__*/ _s59(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c175 = _s59(function(t, n) {
    _s59();
    const { className: r, render: o1, ...i } = t, { store: s } = en(), a = ve(s, ye.open), c = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Kc.useMemo[c]": ()=>({
                open: a
            })
    }["Kc.useMemo[c]"], [
        a
    ]);
    return Ne("span", t, {
        state: c,
        ref: n,
        props: [
            {
                "aria-hidden": !0,
                children: "▼"
            },
            i
        ],
        stateAttributesMapping: If
    });
}, "WDBrxFMsP6Z4SGKQpWI0axi9vKA=")), "WDBrxFMsP6Z4SGKQpWI0axi9vKA=");
_c176 = Kc;
("TURBOPACK compile-time value", "development") !== "production" && (Kc.displayName = "SelectIcon");
const Gc = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(void 0);
("TURBOPACK compile-time value", "development") !== "production" && (Gc.displayName = "SelectPortalContext");
const Yc = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c177 = function(t, n) {
    const { store: r } = en(), o1 = ve(r, ye.mounted), i = ve(r, ye.forceMount);
    return o1 || i ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Gc.Provider, {
        value: !0,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(_i, {
            ref: n,
            ...t
        })
    }) : null;
});
_c178 = Yc;
("TURBOPACK compile-time value", "development") !== "production" && (Yc.displayName = "SelectPortal");
const Bi = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext({
    register: ()=>{},
    unregister: ()=>{},
    subscribeMapChange: ()=>()=>{},
    elementsRef: {
        current: []
    },
    nextIndexRef: {
        current: 0
    }
});
("TURBOPACK compile-time value", "development") !== "production" && (Bi.displayName = "CompositeListContext");
function Wp() {
    _s60();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(Bi);
}
_s60(Wp, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
_c179 = Wp;
function qi(e) {
    _s61();
    const { children: t, elementsRef: n, labelsRef: r, onMapChange: o1 } = e, i = ie(o1), s = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(0), a = St(Up).current, c = St($p).current, [l, u] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(0), f = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(l), h = ie((p, y)=>{
        c.set(p, y ?? null), f.current += 1, u(f.current);
    }), b = ie((p)=>{
        c.delete(p), f.current += 1, u(f.current);
    }), g = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "qi.useMemo[g]": ()=>{
            const p = /* @__PURE__ */ new Map();
            return Array.from(c.keys()).filter({
                "qi.useMemo[g]": (v)=>v.isConnected
            }["qi.useMemo[g]"]).sort(Kp).forEach({
                "qi.useMemo[g]": (v, S)=>{
                    const R = c.get(v) ?? {};
                    p.set(v, {
                        ...R,
                        index: S
                    });
                }
            }["qi.useMemo[g]"]), p;
        }
    }["qi.useMemo[g]"], [
        c,
        l
    ]);
    ne(()=>{
        if (typeof MutationObserver != "function" || g.size === 0) return;
        const p = new MutationObserver((y)=>{
            const v = /* @__PURE__ */ new Set(), S = (R)=>v.has(R) ? v.delete(R) : v.add(R);
            y.forEach((R)=>{
                R.removedNodes.forEach(S), R.addedNodes.forEach(S);
            }), v.size === 0 && (f.current += 1, u(f.current));
        });
        return g.forEach((y, v)=>{
            v.parentElement && p.observe(v.parentElement, {
                childList: !0
            });
        }), ()=>{
            p.disconnect();
        };
    }, [
        g
    ]), ne(()=>{
        f.current === l && (n.current.length !== g.size && (n.current.length = g.size), r && r.current.length !== g.size && (r.current.length = g.size), s.current = g.size), i(g);
    }, [
        i,
        g,
        n,
        r,
        l
    ]), ne(()=>()=>{
            n.current = [];
        }, [
        n
    ]), ne(()=>()=>{
            r && (r.current = []);
        }, [
        r
    ]);
    const m = ie((p)=>(a.add(p), ()=>{
            a.delete(p);
        }));
    ne(()=>{
        a.forEach((p)=>p(g));
    }, [
        a,
        g
    ]);
    const w = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "qi.useMemo[w]": ()=>({
                register: h,
                unregister: b,
                subscribeMapChange: m,
                elementsRef: n,
                labelsRef: r,
                nextIndexRef: s
            })
    }["qi.useMemo[w]"], [
        h,
        b,
        m,
        n,
        r,
        s
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Bi.Provider, {
        value: w,
        children: t
    });
}
_s61(qi, "xDiux6y3sn891/J+shFNEh1nIEw=");
function $p() {
    return /* @__PURE__ */ new Map();
}
function Up() {
    return /* @__PURE__ */ new Set();
}
_c180 = Up;
function Kp(e, t) {
    const n = e.compareDocumentPosition(t);
    return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0;
}
_c181 = Kp;
const Xc = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(void 0);
("TURBOPACK compile-time value", "development") !== "production" && (Xc.displayName = "DirectionContext");
function Hi() {
    _s62();
    const e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(Xc);
    return (e == null ? void 0 : e.direction) ?? "ltr";
}
_s62(Hi, "KtrK5+WEuqFyc+Nd5vj572lGrLM=");
_c182 = Hi;
const Gp = (e)=>({
        name: "arrow",
        options: e,
        async fn (t) {
            var k, z;
            const { x: n, y: r, placement: o1, rects: i, platform: s, elements: a, middlewareData: c } = t, { element: l, padding: u = 0, offsetParent: f = "real" } = Xt(e, t) || {};
            if (l == null) return {};
            const h = ec(u), b = {
                x: n,
                y: r
            }, g = Ii(o1), m = Ti(g), w = await s.getDimensions(l), p = g === "y", y = p ? "top" : "left", v = p ? "bottom" : "right", S = p ? "clientHeight" : "clientWidth", R = i.reference[m] + i.reference[g] - b[g] - i.floating[m], C = b[g] - i.reference[g], x = f === "real" ? await ((k = s.getOffsetParent) == null ? void 0 : k.call(s, l)) : a.floating;
            let O = a.floating[S] || i.floating[m];
            (!O || !await ((z = s.isElement) == null ? void 0 : z.call(s, x))) && (O = a.floating[S] || i.floating[m]);
            const N = R / 2 - C / 2, M = O / 2 - w[m] / 2 - 1, D = Math.min(h[y], M), B = Math.min(h[v], M), j = D, P = O - w[m] - B, T = O / 2 - w[m] / 2 + N, A = oi(j, T, P), _ = !c.arrow && gn(o1) != null && T !== A && i.reference[m] / 2 - (T < j ? D : B) - w[m] / 2 < 0, I = _ ? T < j ? T - j : T - P : 0;
            return {
                [g]: b[g] + I,
                data: {
                    [g]: A,
                    centerOffset: T - A - I,
                    ..._ && {
                        alignmentOffset: I
                    }
                },
                reset: _
            };
        }
    }), Yp = (e, t)=>({
        ...Gp(e),
        options: [
            e,
            t
        ]
    }), Xp = {
    name: "hide",
    async fn (e) {
        var a;
        const { width: t, height: n, x: r, y: o1 } = e.rects.reference, i = t === 0 && n === 0 && r === 0 && o1 === 0;
        return {
            data: {
                referenceHidden: ((a = (await lh().fn(e)).data) == null ? void 0 : a.referenceHidden) || i
            }
        };
    }
}, Zp = {
    sideX: "left",
    sideY: "top"
};
function Zc(e, t, n) {
    const r = e === "inline-start" || e === "inline-end";
    return ({
        top: "top",
        right: r ? n ? "inline-start" : "inline-end" : "right",
        bottom: "bottom",
        left: r ? n ? "inline-end" : "inline-start" : "left"
    })[t];
}
_c183 = Zc;
function sa(e, t, n) {
    const { rects: r, placement: o1 } = e;
    return {
        side: Zc(t, vt(o1), n),
        align: gn(o1) || "center",
        anchor: {
            width: r.reference.width,
            height: r.reference.height
        },
        positioner: {
            width: r.floating.width,
            height: r.floating.height
        }
    };
}
function Jp(e) {
    _s63();
    var tn, _n;
    const { // Public parameters
    anchor: t, positionMethod: n = "absolute", side: r = "bottom", sideOffset: o1 = 0, align: i = "center", alignOffset: s = 0, collisionBoundary: a, collisionPadding: c = 5, sticky: l = !1, arrowPadding: u = 5, disableAnchorTracking: f = !1, // Private parameters
    keepMounted: h = !1, floatingRootContext: b, mounted: g, collisionAvoidance: m, shiftCrossAxis: w = !1, nodeId: p, adaptiveOrigin: y, lazyFlip: v = !1, externalTree: S } = e, [R, C] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(null);
    !g && R !== null && C(null);
    const x = m.side || "flip", O = m.align || "flip", N = m.fallbackAxisSide || "end", M = typeof t == "function" ? t : void 0, D = ie(M), B = M ? D : t, j = Je(t), T = Hi() === "rtl", A = R || ({
        top: "top",
        right: "right",
        bottom: "bottom",
        left: "left",
        "inline-end": T ? "left" : "right",
        "inline-start": T ? "right" : "left"
    })[r], _ = i === "center" ? A : `${A}-${i}`;
    let I = c;
    const k = 1, z = r === "bottom" ? k : 0, $ = r === "top" ? k : 0, ae = r === "right" ? k : 0, ee = r === "left" ? k : 0;
    typeof I == "number" ? I = {
        top: I + z,
        right: I + ee,
        bottom: I + $,
        left: I + ae
    } : I && (I = {
        top: (I.top || 0) + z,
        right: (I.right || 0) + ee,
        bottom: (I.bottom || 0) + $,
        left: (I.left || 0) + ae
    });
    const ge = {
        boundary: a === "clipping-ancestors" ? "clippingAncestors" : a,
        padding: I
    }, fe = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null), U = Je(o1), Z = Je(s), pe = [
        oh((_e)=>{
            const Le = sa(_e, r, T), nt = typeof U.current == "function" ? U.current(Le) : U.current, Ke = typeof Z.current == "function" ? Z.current(Le) : Z.current;
            return {
                mainAxis: nt,
                crossAxis: Ke,
                alignmentAxis: Ke
            };
        }, [
            typeof o1 != "function" ? o1 : 0,
            typeof s != "function" ? s : 0,
            T,
            r
        ])
    ], V = O === "none" && x !== "shift", J = !V && (l || w || x === "shift"), Y = x === "none" ? null : ah({
        ...ge,
        // Ensure the popup flips if it's been limited by its --available-height and it resizes.
        // Since the size() padding is smaller than the flip() padding, flip() will take precedence.
        padding: {
            top: I.top + k,
            right: I.right + k,
            bottom: I.bottom + k,
            left: I.left + k
        },
        mainAxis: !w && x === "flip",
        crossAxis: O === "flip" ? "alignment" : !1,
        fallbackAxisSideDirection: N
    }), Re = V ? null : ih((_e)=>{
        const Le = qt(_e.elements.floating).documentElement;
        return {
            ...ge,
            // Use the Layout Viewport to avoid shifting around when pinch-zooming
            // for context menus.
            rootBoundary: w ? {
                x: 0,
                y: 0,
                width: Le.clientWidth,
                height: Le.clientHeight
            } : void 0,
            mainAxis: O !== "none",
            crossAxis: J,
            limiter: l || w ? void 0 : sh((nt)=>{
                if (!fe.current) return {};
                const { width: Ke, height: xt } = fe.current.getBoundingClientRect(), at = Et(vt(nt.placement)), Lt = at === "y" ? Ke : xt, bn = at === "y" ? I.left + I.right : I.top + I.bottom;
                return {
                    offset: Lt / 2 + bn / 2
                };
            })
        };
    }, [
        ge,
        l,
        w,
        I,
        O
    ]);
    x === "shift" || O === "shift" || i === "center" ? pe.push(Re, Y) : pe.push(Y, Re), pe.push(ch({
        ...ge,
        apply ({ elements: { floating: _e }, rects: { reference: Le }, availableWidth: nt, availableHeight: Ke }) {
            Object.entries({
                "--available-width": `${nt}px`,
                "--available-height": `${Ke}px`,
                "--anchor-width": `${Le.width}px`,
                "--anchor-height": `${Le.height}px`
            }).forEach(([xt, at])=>{
                _e.style.setProperty(xt, at);
            });
        }
    }), Yp(()=>({
            // `transform-origin` calculations rely on an element existing. If the arrow hasn't been set,
            // we'll create a fake element.
            element: fe.current || document.createElement("div"),
            padding: u,
            offsetParent: "floating"
        }), [
        u
    ]), {
        name: "transformOrigin",
        fn (_e) {
            var Qi, es, ts;
            const { elements: Le, middlewareData: nt, placement: Ke, rects: xt, y: at } = _e, Lt = vt(Ke), bn = Et(Lt), Ee = fe.current, He = ((Qi = nt.arrow) == null ? void 0 : Qi.x) || 0, ct = ((es = nt.arrow) == null ? void 0 : es.y) || 0, Ft = (Ee == null ? void 0 : Ee.clientWidth) || 0, Ct = (Ee == null ? void 0 : Ee.clientHeight) || 0, nn = He + Ft / 2, vo = ct + Ct / 2, Ol = Math.abs(((ts = nt.shift) == null ? void 0 : ts.y) || 0), Tl = xt.reference.height / 2, Qn = typeof o1 == "function" ? o1(sa(_e, r, T)) : o1, Il = Ol > Qn, kl = {
                top: `${nn}px calc(100% + ${Qn}px)`,
                bottom: `${nn}px ${-Qn}px`,
                left: `calc(100% + ${Qn}px) ${vo}px`,
                right: `${-Qn}px ${vo}px`
            }[Lt], _l = `${nn}px ${xt.reference.y + Tl - at}px`;
            return Le.floating.style.setProperty("--transform-origin", J && bn === "y" && Il ? _l : kl), {};
        }
    }, Xp, y), ne(()=>{
        !g && b && b.update({
            referenceElement: null,
            floatingElement: null,
            domReferenceElement: null
        });
    }, [
        g,
        b
    ]);
    const ce = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Jp.useMemo[ce]": ()=>({
                elementResize: !f && typeof ResizeObserver < "u",
                layoutShift: !f && typeof IntersectionObserver < "u"
            })
    }["Jp.useMemo[ce]"], [
        f
    ]), { refs: F, elements: Q, x: se, y: re, middlewareData: ue, update: q, placement: X, context: L, isPositioned: te, floatingStyles: H } = $h({
        rootContext: b,
        placement: _,
        middleware: pe,
        strategy: n,
        whileElementsMounted: h ? void 0 : (..._e)=>Ws(..._e, ce),
        nodeId: p,
        externalTree: S
    }), { sideX: Se, sideY: xe } = ue.adaptiveOrigin || Zp, we = te ? n : "fixed", Ce = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Jp.useMemo[Ce]": ()=>y ? {
                position: we,
                [Se]: se,
                [xe]: re
            } : {
                position: we,
                ...H
            }
    }["Jp.useMemo[Ce]"], [
        y,
        we,
        Se,
        se,
        xe,
        re,
        H
    ]), Oe = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null);
    ne(()=>{
        if (!g) return;
        const _e = j.current, Le = typeof _e == "function" ? _e() : _e, Ke = (aa(Le) ? Le.current : Le) || null || null;
        Ke !== Oe.current && (F.setPositionReference(Ke), Oe.current = Ke);
    }, [
        g,
        F,
        B,
        j
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "Jp.useEffect": ()=>{
            if (!g) return;
            const _e = j.current;
            typeof _e != "function" && aa(_e) && _e.current !== Oe.current && (F.setPositionReference(_e.current), Oe.current = _e.current);
        }
    }["Jp.useEffect"], [
        g,
        F,
        B,
        j
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "Jp.useEffect": ()=>{
            if (h && g && Q.domReference && Q.floating) return Ws(Q.domReference, Q.floating, q, ce);
        }
    }["Jp.useEffect"], [
        h,
        g,
        Q,
        q,
        ce
    ]);
    const Ve = vt(X), ze = Zc(r, Ve, T), Ie = gn(X) || "center", je = !!((tn = ue.hide) != null && tn.referenceHidden);
    ne(()=>{
        v && g && te && C(Ve);
    }, [
        v,
        g,
        te,
        Ve
    ]);
    const ut = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Jp.useMemo[ut]": ()=>{
            var _e, Le;
            return {
                position: "absolute",
                top: (_e = ue.arrow) == null ? void 0 : _e.y,
                left: (Le = ue.arrow) == null ? void 0 : Le.x
            };
        }
    }["Jp.useMemo[ut]"], [
        ue.arrow
    ]), Wt = ((_n = ue.arrow) == null ? void 0 : _n.centerOffset) !== 0;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Jp.useMemo": ()=>({
                positionerStyles: Ce,
                arrowStyles: ut,
                arrowRef: fe,
                arrowUncentered: Wt,
                side: ze,
                align: Ie,
                physicalSide: Ve,
                anchorHidden: je,
                refs: F,
                context: L,
                isPositioned: te,
                update: q
            })
    }["Jp.useMemo"], [
        Ce,
        ut,
        fe,
        Wt,
        ze,
        Ie,
        Ve,
        je,
        F,
        L,
        te,
        q
    ]);
}
_s63(Jp, "8bshK0xfKKJoEfwRUTMXW3fMT2U=");
_c184 = Jp;
function aa(e) {
    return e != null && "current" in e;
}
const Wi = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(void 0);
("TURBOPACK compile-time value", "development") !== "production" && (Wi.displayName = "SelectPositionerContext");
function Jc() {
    _s64();
    const e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(Wi);
    if (!e) throw new Error(("TURBOPACK compile-time truthy", 1) ? "Base UI: SelectPositionerContext is missing. SelectPositioner parts must be placed within <Select.Positioner>." : "TURBOPACK unreachable");
    return e;
}
_s64(Jc, "KtrK5+WEuqFyc+Nd5vj572lGrLM=");
_c185 = Jc;
function no(e, t) {
    e && Object.assign(e.style, t);
}
const Qc = {
    position: "relative",
    maxHeight: "100%",
    overflowX: "hidden",
    overflowY: "auto"
}, Qp = {
    position: "fixed"
}, el = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_s65(function(t, n) {
    _s65();
    const { anchor: r, positionMethod: o1 = "absolute", className: i, render: s, side: a = "bottom", align: c = "center", sideOffset: l = 0, alignOffset: u = 0, collisionBoundary: f = "clipping-ancestors", collisionPadding: h, arrowPadding: b = 5, sticky: g = !1, disableAnchorTracking: m, alignItemWithTrigger: w = !0, collisionAvoidance: p = zu, ...y } = t, { store: v, listRef: S, labelsRef: R, alignItemWithTriggerActiveRef: C, selectedItemTextRef: x, valuesRef: O, initialValueRef: N, popupRef: M, setValue: D } = en(), B = Wc(), j = ve(v, ye.open), P = ve(v, ye.mounted), T = ve(v, ye.modal), A = ve(v, ye.value), _ = ve(v, ye.openMethod), I = ve(v, ye.positionerElement), k = ve(v, ye.triggerElement), z = ve(v, ye.isItemEqualToValue), $ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null), ae = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null), [ee, ge] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(w), fe = P && ee && _ !== "touch";
    !P && ee !== w && ge(w), ne(()=>{
        P || (ye.scrollUpArrowVisible(v.state) && v.set("scrollUpArrowVisible", !1), ye.scrollDownArrowVisible(v.state) && v.set("scrollDownArrowVisible", !1));
    }, [
        v,
        P
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useImperativeHandle(C, {
        "el.useImperativeHandle": ()=>fe
    }["el.useImperativeHandle"]), Bc((fe || T) && j && _ !== "touch", k);
    const U = Jp({
        anchor: r,
        floatingRootContext: B,
        positionMethod: o1,
        mounted: P,
        side: a,
        sideOffset: l,
        align: c,
        alignOffset: u,
        arrowPadding: b,
        collisionBoundary: f,
        collisionPadding: h,
        sticky: g,
        disableAnchorTracking: m ?? fe,
        collisionAvoidance: p,
        keepMounted: !0
    }), Z = fe ? "none" : U.side, K = fe ? Qp : U.positionerStyles, he = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "el.useMemo[he]": ()=>{
            const F = {};
            return j || (F.pointerEvents = "none"), {
                role: "presentation",
                hidden: !P,
                style: {
                    ...K,
                    ...F
                }
            };
        }
    }["el.useMemo[he]"], [
        j,
        P,
        K
    ]), pe = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "el.useMemo[pe]": ()=>({
                open: j,
                side: Z,
                align: U.align,
                anchorHidden: U.anchorHidden
            })
    }["el.useMemo[pe]"], [
        j,
        Z,
        U.align,
        U.anchorHidden
    ]), V = ie((F)=>{
        v.set("positionerElement", F);
    }), J = Ne("div", t, {
        ref: [
            n,
            V
        ],
        state: pe,
        stateAttributesMapping: ho,
        props: [
            he,
            y
        ]
    }), Y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(0), Re = ie((F)=>{
        if (F.size === 0 && Y.current === 0 || O.current.length === 0) return;
        const Q = Y.current;
        if (Y.current = F.size, F.size === Q) return;
        const se = ke(pn);
        if (Q !== 0 && !v.state.multiple && A !== null && fi(O.current, A, z) === -1) {
            const ue = N.current, X = ue != null && Do(O.current, ue, z) ? ue : null;
            D(X, se), X === null && (v.set("selectedIndex", null), x.current = null);
        }
        if (Q !== 0 && v.state.multiple && Array.isArray(A)) {
            const re = A.filter((ue)=>Do(O.current, ue, z));
            (re.length !== A.length || re.some((ue)=>!Do(A, ue, z))) && (D(re, se), re.length === 0 && (v.set("selectedIndex", null), x.current = null));
        }
        if (j && fe) {
            v.update({
                scrollUpArrowVisible: !1,
                scrollDownArrowVisible: !1
            });
            const re = {
                height: ""
            };
            no(I, re), no(M.current, re);
        }
    }), ce = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "el.useMemo[ce]": ()=>({
                ...U,
                side: Z,
                alignItemWithTriggerActive: fe,
                setControlledAlignItemWithTrigger: ge,
                scrollUpArrowRef: $,
                scrollDownArrowRef: ae
            })
    }["el.useMemo[ce]"], [
        U,
        Z,
        fe,
        ge
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(qi, {
        elementsRef: S,
        labelsRef: R,
        onMapChange: Re,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Wi.Provider, {
            value: ce,
            children: [
                P && T && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Li, {
                    inert: zc(!j),
                    cutout: k
                }),
                J
            ]
        })
    });
}, "Heh8gxkuOS0j9N30ojsIO4W2A+w="));
("TURBOPACK compile-time value", "development") !== "production" && (el.displayName = "SelectPositioner");
function tl(e) {
    const t = e.currentTarget.getBoundingClientRect();
    return t.top + 1 <= e.clientY && e.clientY <= t.bottom - 1 && t.left + 1 <= e.clientX && e.clientX <= t.right - 1;
}
const Dr = "base-ui-disable-scrollbar", hi = {
    className: Dr,
    element: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("style", {
        href: Dr,
        precedence: "base-ui:low",
        children: `.${Dr}{scrollbar-width:none}.${Dr}::-webkit-scrollbar{display:none}`
    })
}, nl = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(void 0);
("TURBOPACK compile-time value", "development") !== "production" && (nl.displayName = "ToolbarRootContext");
function em(e) {
    _s66();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(nl);
}
_s66(em, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
function tm(e) {
    return e === "starting" ? Lu : $e;
}
const nm = {
    ...ho,
    ...fo
}, rl = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_s67(function(t, n) {
    _s67();
    const { render: r, className: o1, ...i } = t, { store: s, popupRef: a, onOpenChangeComplete: c, setOpen: l, valueRef: u, selectedItemTextRef: f, keyboardActiveRef: h, multiple: b, handleScrollArrowVisibility: g, scrollHandlerRef: m } = en(), { side: w, align: p, alignItemWithTriggerActive: y, setControlledAlignItemWithTrigger: v, scrollDownArrowRef: S, scrollUpArrowRef: R } = Jc(), C = em() != null, x = Wc(), O = yt(), N = ve(s, ye.id), M = ve(s, ye.open), D = ve(s, ye.mounted), B = ve(s, ye.popupProps), j = ve(s, ye.transitionStatus), P = ve(s, ye.triggerElement), T = ve(s, ye.positionerElement), A = ve(s, ye.listElement), _ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(0), I = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(!1), k = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(0), z = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(!1), $ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef({}), ae = uo(), ee = ie((Z)=>{
        if (!T || !a.current || !z.current) return;
        if (I.current || !y) {
            g();
            return;
        }
        const K = T.style.top === "0px", he = T.style.bottom === "0px", pe = T.getBoundingClientRect().height, V = qt(T), J = getComputedStyle(T), Y = parseFloat(J.marginTop), Re = parseFloat(J.marginBottom), ce = V.documentElement.clientHeight - Y - Re, F = Z.scrollTop, Q = Z.scrollHeight, se = Z.clientHeight, re = Q - se;
        let ue = null, q = null, X = !1;
        if (K) {
            const L = re - F, te = pe + L, H = Math.min(te, ce);
            ue = H, H !== ce ? q = re : X = !0;
        } else if (he) {
            const L = F - 0, te = pe + L, H = Math.min(te, ce), Se = te - ce;
            ue = H, H !== ce ? q = 0 : (X = !0, F < re && (q = F - (L - Se)));
        }
        ue != null && (T.style.height = `${ue}px`), q != null && (Z.scrollTop = q), X && (I.current = !0), g();
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useImperativeHandle(m, {
        "rl.useImperativeHandle": ()=>ee
    }["rl.useImperativeHandle"], [
        ee
    ]), yr({
        open: M,
        ref: a,
        onComplete () {
            M && (c == null || c(!0));
        }
    });
    const ge = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "rl.useMemo[ge]": ()=>({
                open: M,
                transitionStatus: j,
                side: w,
                align: p
            })
    }["rl.useMemo[ge]"], [
        M,
        j,
        w,
        p
    ]);
    ne(()=>{
        !T || !a.current || Object.keys($.current).length || ($.current = {
            top: T.style.top || "0",
            left: T.style.left || "0",
            right: T.style.right,
            height: T.style.height,
            bottom: T.style.bottom,
            minHeight: T.style.minHeight,
            maxHeight: T.style.maxHeight,
            marginTop: T.style.marginTop,
            marginBottom: T.style.marginBottom
        });
    }, [
        a,
        T
    ]), ne(()=>{
        D || y || (z.current = !1, I.current = !1, _.current = 0, k.current = 0, no(T, $.current));
    }, [
        D,
        y,
        T,
        a
    ]), ne(()=>{
        const Z = a.current;
        if (!(!D || !P || !T || !Z)) {
            if (!y) {
                z.current = !0, ae.request(g);
                return;
            }
            queueMicrotask(()=>{
                var xt;
                const K = getComputedStyle(T), he = getComputedStyle(Z), pe = qt(P), V = Ue(T), J = P.getBoundingClientRect(), Y = T.getBoundingClientRect(), Re = J.left, ce = J.height, F = A || Z, Q = F.scrollHeight, se = parseFloat(he.borderBottomWidth), re = parseFloat(K.marginTop) || 10, ue = parseFloat(K.marginBottom) || 10, q = parseFloat(K.minHeight) || 100, X = 5, L = 5, te = 20, H = pe.documentElement.clientHeight - re - ue, Se = pe.documentElement.clientWidth, xe = H - J.bottom + ce, we = f.current, Ce = u.current;
                let Oe = 0, Ve = 0;
                if (we && Ce) {
                    const at = Ce.getBoundingClientRect(), Lt = we.getBoundingClientRect(), bn = at.left - Re, Ee = Lt.left - Y.left, He = at.top - J.top + at.height / 2, ct = Lt.top - Y.top + Lt.height / 2;
                    Oe = bn - Ee, Ve = ct - He;
                }
                const ze = xe + Ve + ue + se;
                let Ie = Math.min(H, ze);
                const je = H - re - ue, ut = ze - Ie, Wt = Math.max(X, Re + Oe), tn = Se - L, _n = Math.max(0, Wt + Y.width - tn);
                T.style.left = `${Wt - _n}px`, T.style.height = `${Ie}px`, T.style.maxHeight = "auto", T.style.marginTop = `${re}px`, T.style.marginBottom = `${ue}px`, Z.style.height = "100%";
                const _e = F.scrollHeight - F.clientHeight, Le = ut >= _e;
                Le && (Ie = Math.min(H, Y.height) - (ut - _e));
                const nt = J.top < te || J.bottom > H - te || Ie < Math.min(Q, q), Ke = (((xt = V.visualViewport) == null ? void 0 : xt.scale) ?? 1) !== 1 && Ka;
                if (nt || Ke) {
                    z.current = !0, no(T, $.current), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"](()=>v(!1));
                    return;
                }
                if (Le) {
                    const at = Math.max(0, H - ze);
                    T.style.top = Y.height >= je ? "0" : `${at}px`, T.style.height = `${Ie}px`, F.scrollTop = F.scrollHeight - F.clientHeight, _.current = Math.max(q, Ie);
                } else T.style.bottom = "0", _.current = Math.max(q, Ie), F.scrollTop = ut;
                _.current === H && (I.current = !0), g(), setTimeout(()=>{
                    z.current = !0;
                });
            });
        }
    }, [
        s,
        D,
        T,
        P,
        u,
        f,
        a,
        g,
        y,
        v,
        ae,
        S,
        R,
        A
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "rl.useEffect": ()=>{
            if (!y || !T || !D) return;
            const Z = Ue(T);
            function K(he) {
                l(!1, ke(rf, he));
            }
            return Z.addEventListener("resize", K), ({
                "rl.useEffect": ()=>{
                    Z.removeEventListener("resize", K);
                }
            })["rl.useEffect"];
        }
    }["rl.useEffect"], [
        l,
        y,
        T,
        D
    ]);
    const fe = {
        ...A ? {
            role: "presentation",
            "aria-orientation": void 0
        } : {
            role: "listbox",
            "aria-multiselectable": b || void 0,
            id: `${N}-list`
        },
        onKeyDown (Z) {
            h.current = !0, C && Lc.has(Z.key) && Z.stopPropagation();
        },
        onMouseMove () {
            h.current = !1;
        },
        onPointerLeave (Z) {
            if (tl(Z) || Z.pointerType === "touch") return;
            const K = Z.currentTarget;
            O.start(0, ()=>{
                s.set("activeIndex", null), K.focus({
                    preventScroll: !0
                });
            });
        },
        onScroll (Z) {
            var K;
            A || (K = m.current) == null || K.call(m, Z.currentTarget);
        },
        ...y && {
            style: A ? {
                height: "100%"
            } : Qc
        }
    }, U = Ne("div", t, {
        ref: [
            n,
            a
        ],
        state: ge,
        stateAttributesMapping: nm,
        props: [
            B,
            fe,
            tm(j),
            {
                className: !A && y ? hi.className : void 0
            },
            i
        ]
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Fragment, {
        children: [
            hi.element,
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(vc, {
                context: x,
                modal: !1,
                disabled: !D,
                restoreFocus: !0,
                children: U
            })
        ]
    });
}, "qrpBXu4PYoXhjLKieggRwb9bmOA="));
("TURBOPACK compile-time value", "development") !== "production" && (rl.displayName = "SelectPopup");
const ol = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function(t, n) {
    const { className: r, render: o1, ...i } = t, { store: s, scrollHandlerRef: a } = en(), { alignItemWithTriggerActive: c } = Jc(), l = ve(s, ye.hasScrollArrows), u = ve(s, ye.openMethod), f = ve(s, ye.multiple), b = {
        id: `${ve(s, ye.id)}-list`,
        role: "listbox",
        "aria-multiselectable": f || void 0,
        onScroll (m) {
            var w;
            (w = a.current) == null || w.call(a, m.currentTarget);
        },
        ...c && {
            style: Qc
        },
        className: l && u !== "touch" ? hi.className : void 0
    }, g = ie((m)=>{
        s.set("listElement", m);
    });
    return Ne("div", t, {
        ref: [
            n,
            g
        ],
        props: [
            b,
            i
        ]
    });
});
("TURBOPACK compile-time value", "development") !== "production" && (ol.displayName = "SelectList");
let il = /* @__PURE__ */ function(e) {
    return e[e.None = 0] = "None", e[e.GuessFromOrder = 1] = "GuessFromOrder", e;
}({});
function $i(e = {}) {
    _s68();
    const { label: t, metadata: n, textRef: r, indexGuessBehavior: o1, index: i } = e, { register: s, unregister: a, subscribeMapChange: c, elementsRef: l, labelsRef: u, nextIndexRef: f } = Wp(), h = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(-1), [b, g] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(i ?? (o1 === il.GuessFromOrder ? ({
        "$i.useState": ()=>{
            if (h.current === -1) {
                const p = f.current;
                f.current += 1, h.current = p;
            }
            return h.current;
        }
    })["$i.useState"] : -1)), m = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null), w = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "$i.useCallback[w]": (p)=>{
            var y;
            if (m.current = p, b !== -1 && p !== null && (l.current[b] = p, u)) {
                const v = t !== void 0;
                u.current[b] = v ? t : ((y = r == null ? void 0 : r.current) == null ? void 0 : y.textContent) ?? p.textContent;
            }
        }
    }["$i.useCallback[w]"], [
        b,
        l,
        u,
        t,
        r
    ]);
    return ne(()=>{
        if (i != null) return;
        const p = m.current;
        if (p) return s(p, n), ()=>{
            a(p);
        };
    }, [
        i,
        s,
        a,
        n
    ]), ne(()=>{
        if (i == null) return c((p)=>{
            var v;
            const y = m.current ? (v = p.get(m.current)) == null ? void 0 : v.index : null;
            y != null && g(y);
        });
    }, [
        i,
        c,
        g
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "$i.useMemo": ()=>({
                ref: w,
                index: b
            })
    }["$i.useMemo"], [
        b,
        w
    ]);
}
_s68($i, "jpy7O/4hD8ecWWaBnUghBU21wB8=");
const Ui = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(void 0);
("TURBOPACK compile-time value", "development") !== "production" && (Ui.displayName = "SelectItemContext");
function rm() {
    _s69();
    const e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(Ui);
    if (!e) throw new Error(("TURBOPACK compile-time truthy", 1) ? "Base UI: SelectItemContext is missing. SelectItem parts must be placed within <Select.Item>." : "TURBOPACK unreachable");
    return e;
}
_s69(rm, "KtrK5+WEuqFyc+Nd5vj572lGrLM=");
const sl = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.memo(/* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_s70(function(t, n) {
    _s70();
    const { render: r, className: o1, value: i = null, label: s, disabled: a = !1, nativeButton: c = !1, ...l } = t, u = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null), f = $i({
        label: s,
        textRef: u,
        indexGuessBehavior: il.GuessFromOrder
    }), { store: h, getItemProps: b, setOpen: g, setValue: m, selectionRef: w, typingRef: p, valuesRef: y, keyboardActiveRef: v, multiple: S, highlightItemOnHover: R } = en(), C = yt(), x = ve(h, ye.isActive, f.index), O = ve(h, ye.isSelected, f.index, i), N = ve(h, ye.isSelectedByFocus, f.index), M = ve(h, ye.isItemEqualToValue), D = f.index, B = D !== -1, j = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null), P = Je(D);
    ne(()=>{
        if (!B) return;
        const U = y.current;
        return U[D] = i, ()=>{
            delete U[D];
        };
    }, [
        B,
        D,
        i,
        y
    ]), ne(()=>{
        if (!B) return;
        const U = h.state.value;
        let Z = U;
        S && Array.isArray(U) && U.length > 0 && (Z = U[U.length - 1]), Z !== void 0 && Zn(Z, i, M) && h.set("selectedIndex", D);
    }, [
        B,
        D,
        S,
        M,
        h,
        i
    ]);
    const T = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "sl.useMemo[T]": ()=>({
                disabled: a,
                selected: O,
                highlighted: x
            })
    }["sl.useMemo[T]"], [
        a,
        O,
        x
    ]), A = b({
        active: x,
        selected: O
    });
    A.onFocus = void 0, A.id = void 0;
    const _ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null), I = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef("mouse"), k = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(!1), { getButtonProps: z, buttonRef: $ } = Tn({
        disabled: a,
        focusableWhenDisabled: !0,
        native: c
    });
    function ae(U) {
        const Z = h.state.value;
        if (S) {
            const K = Array.isArray(Z) ? Z : [], he = O ? Vp(K, i, M) : [
                ...K,
                i
            ];
            m(he, ke(Ro, U));
        } else m(i, ke(Ro, U)), g(!1, ke(Ro, U));
    }
    const ee = {
        role: "option",
        "aria-selected": O,
        "aria-disabled": a || void 0,
        tabIndex: x ? 0 : -1,
        onFocus () {
            h.set("activeIndex", D);
        },
        onMouseEnter () {
            !v.current && h.state.selectedIndex === null && h.set("activeIndex", D);
        },
        onMouseMove () {
            R && h.set("activeIndex", D);
        },
        onMouseLeave (U) {
            !R || v.current || tl(U) || C.start(0, ()=>{
                h.state.activeIndex === D && h.set("activeIndex", null);
            });
        },
        onTouchStart () {
            w.current = {
                allowSelectedMouseUp: !1,
                allowUnselectedMouseUp: !1
            };
        },
        onKeyDown (U) {
            _.current = U.key, h.set("activeIndex", D);
        },
        onClick (U) {
            k.current = !1, !(U.type === "keydown" && _.current === null) && (a || _.current === " " && p.current || I.current !== "touch" && !x || (_.current = null, ae(U.nativeEvent)));
        },
        onPointerEnter (U) {
            I.current = U.pointerType;
        },
        onPointerDown (U) {
            I.current = U.pointerType, k.current = !0;
        },
        onMouseUp (U) {
            if (a) return;
            if (k.current) {
                k.current = !1;
                return;
            }
            const Z = !w.current.allowSelectedMouseUp && O, K = !w.current.allowUnselectedMouseUp && !O;
            Z || K || I.current !== "touch" && !x || ae(U.nativeEvent);
        }
    }, ge = Ne("div", t, {
        ref: [
            $,
            n,
            f.ref,
            j
        ],
        state: T,
        props: [
            A,
            ee,
            l,
            z
        ]
    }), fe = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "sl.useMemo[fe]": ()=>({
                selected: O,
                indexRef: P,
                textRef: u,
                selectedByFocus: N,
                hasRegistered: B
            })
    }["sl.useMemo[fe]"], [
        O,
        P,
        u,
        N,
        B
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Ui.Provider, {
        value: fe,
        children: ge
    });
}, "lmyUl8l/8tb9wm1k7xATdNB1gm8=")));
("TURBOPACK compile-time value", "development") !== "production" && (sl.displayName = "SelectItem");
const al = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.memo(/* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_s71(function(t, n) {
    _s71();
    const { indexRef: r, textRef: o1, selectedByFocus: i, hasRegistered: s } = rm(), { selectedItemTextRef: a } = en(), { className: c, render: l, ...u } = t, f = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "al.useCallback[f]": (b)=>{
            if (!b || !s) return;
            const g = a.current === null || !a.current.isConnected;
            (i || g && r.current === 0) && (a.current = b);
        }
    }["al.useCallback[f]"], [
        a,
        r,
        i,
        s
    ]);
    return Ne("div", t, {
        ref: [
            f,
            n,
            o1
        ],
        props: u
    });
}, "MDoT3jTWoqZd6k9TEdHS++Uov3o=")));
("TURBOPACK compile-time value", "development") !== "production" && (al.displayName = "SelectItemText");
var om = "_1uk16pt2", im = tt({
    defaultClassName: "_1uk16pt4 _1uk16pt3",
    variantClassNames: {
        size: {
            small: "_1uk16pt5",
            medium: "_1uk16pt6",
            large: "_1uk16pt7"
        },
        rounded: {
            small: "_1uk16pt8",
            medium: "_1uk16pt9",
            large: "_1uk16pta"
        },
        intent: {
            primary: "_1uk16ptb",
            secondary: "_1uk16ptc",
            success: "_1uk16ptd",
            warning: "_1uk16pte",
            danger: "_1uk16ptf",
            neutral: "_1uk16ptg"
        }
    },
    defaultVariants: {
        size: "medium",
        rounded: "medium",
        intent: "primary"
    },
    compoundVariants: [
        [
            {
                intent: "primary"
            },
            "_1uk16pth"
        ],
        [
            {
                intent: "secondary"
            },
            "_1uk16pti"
        ],
        [
            {
                intent: "success"
            },
            "_1uk16ptj"
        ],
        [
            {
                intent: "warning"
            },
            "_1uk16ptk"
        ],
        [
            {
                intent: "danger"
            },
            "_1uk16ptl"
        ],
        [
            {
                intent: "neutral"
            },
            "_1uk16ptm"
        ]
    ]
}), ca = "_1uk16ptn", sm = "_1uk16pto", am = "_1uk16ptp", cm = tt({
    defaultClassName: "_1uk16ptr _1uk16ptq",
    variantClassNames: {
        intent: {
            primary: "_1uk16pts",
            secondary: "_1uk16ptt",
            success: "_1uk16ptu",
            warning: "_1uk16ptv",
            danger: "_1uk16ptw",
            neutral: "_1uk16ptx"
        }
    },
    defaultVariants: {
        intent: "primary"
    },
    compoundVariants: [
        [
            {
                intent: "primary"
            },
            "_1uk16pty"
        ],
        [
            {
                intent: "secondary"
            },
            "_1uk16ptz"
        ],
        [
            {
                intent: "success"
            },
            "_1uk16pt10"
        ],
        [
            {
                intent: "warning"
            },
            "_1uk16pt11"
        ],
        [
            {
                intent: "danger"
            },
            "_1uk16pt12"
        ],
        [
            {
                intent: "neutral"
            },
            "_1uk16pt13"
        ]
    ]
}), lm = tt({
    defaultClassName: "_1uk16pt15 _1uk16pt14",
    variantClassNames: {
        intent: {
            primary: "_1uk16pt16",
            secondary: "_1uk16pt17",
            success: "_1uk16pt18",
            warning: "_1uk16pt19",
            danger: "_1uk16pt1a",
            neutral: "_1uk16pt1b"
        }
    },
    defaultVariants: {
        intent: "primary"
    },
    compoundVariants: [
        [
            {
                intent: "primary"
            },
            "_1uk16pt1c"
        ],
        [
            {
                intent: "secondary"
            },
            "_1uk16pt1d"
        ],
        [
            {
                intent: "success"
            },
            "_1uk16pt1e"
        ],
        [
            {
                intent: "warning"
            },
            "_1uk16pt1f"
        ],
        [
            {
                intent: "danger"
            },
            "_1uk16pt1g"
        ],
        [
            {
                intent: "neutral"
            },
            "_1uk16pt1h"
        ]
    ]
});
const sg = ({ options: e, value: t, defaultValue: n, onValueChange: r, placeholder: o1 = "Select an option", size: i = "medium", rounded: s = "medium", intent: a = "primary", fullWidth: c = !1, disabled: l = !1, className: u, name: f, required: h })=>{
    const b = Jt(), g = (b == null ? void 0 : b.themeClass) ?? Zt;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(jp, {
        value: t,
        defaultValue: n,
        onValueChange: (m)=>r == null ? void 0 : r(m),
        disabled: l,
        name: f,
        required: h,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            className: st(g, om, c && ca, u),
            children: [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])($c, {
                    className: st(im({
                        size: i,
                        rounded: s,
                        intent: a
                    }), c && ca),
                    children: [
                        /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Uc, {
                            className: sm,
                            children: (m)=>{
                                const w = e.find((p)=>p.value === m);
                                return (w == null ? void 0 : w.label) || o1;
                            }
                        }),
                        /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Kc, {
                            className: am,
                            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 16 16",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
                                    d: "M4 6L8 10L12 6",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })
                            })
                        })
                    ]
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Yc, {
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(el, {
                        sideOffset: 4,
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(rl, {
                            className: cm({
                                intent: a
                            }),
                            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ol, {
                                children: e.map((m)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(sl, {
                                        value: m.value,
                                        disabled: m.disabled,
                                        className: lm({
                                            intent: a
                                        }),
                                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(al, {
                                            children: m.label
                                        })
                                    }, m.value))
                            })
                        })
                    })
                })
            ]
        })
    });
}, Ki = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(void 0);
("TURBOPACK compile-time value", "development") !== "production" && (Ki.displayName = "SwitchRootContext");
function um() {
    _s72();
    const e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(Ki);
    if (e === void 0) throw new Error(("TURBOPACK compile-time truthy", 1) ? "Base UI: SwitchRootContext is missing. Switch parts must be placed within <Switch.Root>." : "TURBOPACK unreachable");
    return e;
}
_s72(um, "KtrK5+WEuqFyc+Nd5vj572lGrLM=");
let la = /* @__PURE__ */ function(e) {
    return e.checked = "data-checked", e.unchecked = "data-unchecked", e.disabled = "data-disabled", e.readonly = "data-readonly", e.required = "data-required", e.valid = "data-valid", e.invalid = "data-invalid", e.touched = "data-touched", e.dirty = "data-dirty", e.filled = "data-filled", e.focused = "data-focused", e;
}({});
const cl = {
    ...Qt,
    checked (e) {
        return e ? {
            [la.checked]: ""
        } : {
            [la.unchecked]: ""
        };
    }
}, ll = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_s73(function(t, n) {
    _s73();
    const { checked: r, className: o1, defaultChecked: i, id: s, inputRef: a, name: c, nativeButton: l = !1, onCheckedChange: u, readOnly: f = !1, required: h = !1, disabled: b = !1, render: g, uncheckedValue: m, ...w } = t, { clearErrors: p } = In(), { state: y, setTouched: v, setDirty: S, validityData: R, setFilled: C, setFocused: x, shouldValidateOnChange: O, validationMode: N, disabled: M, name: D, validation: B } = Dt(), { labelId: j } = Vt(), P = M || b, T = D ?? c, A = ie(u), _ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null), I = Bt(_, a, B.inputRef), k = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null), z = Rt(), $ = ji({
        id: s,
        implicit: !1,
        controlRef: k
    }), [ae, ee] = Kn({
        controlled: r,
        default: !!i,
        name: "Switch",
        state: "checked"
    });
    co({
        id: z,
        commit: B.commit,
        value: ae,
        controlRef: k,
        name: T,
        getValue: ()=>ae
    }), ne(()=>{
        _.current && C(_.current.checked);
    }, [
        _,
        C
    ]), Si(ae, ()=>{
        p(T), S(ae !== R.initialValue), C(ae), O() ? B.commit(ae) : B.commit(ae, !0);
    });
    const { getButtonProps: ge, buttonRef: fe } = Tn({
        disabled: P,
        native: l
    }), U = {
        id: z,
        role: "switch",
        "aria-checked": ae,
        "aria-readonly": f || void 0,
        "aria-labelledby": j,
        onFocus () {
            P || x(!0);
        },
        onBlur () {
            const pe = _.current;
            !pe || P || (v(!0), x(!1), N === "onBlur" && B.commit(pe.checked));
        },
        onClick (pe) {
            var V;
            f || P || (pe.preventDefault(), (V = _ == null ? void 0 : _.current) == null || V.click());
        }
    }, Z = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "ll.useMemo[Z]": ()=>Yt({
                checked: ae,
                disabled: P,
                id: $,
                name: T,
                required: h,
                style: gr,
                tabIndex: -1,
                type: "checkbox",
                "aria-hidden": !0,
                ref: I,
                onChange (pe) {
                    if (pe.nativeEvent.defaultPrevented) return;
                    const V = pe.target.checked, J = ke(pn, pe.nativeEvent);
                    A == null || A(V, J), !J.isCanceled && ee(V);
                },
                onFocus () {
                    var pe;
                    (pe = k.current) == null || pe.focus();
                }
            }, B.getInputValidationProps)
    }["ll.useMemo[Z]"], [
        ae,
        P,
        I,
        $,
        T,
        A,
        h,
        ee,
        B
    ]), K = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "ll.useMemo[K]": ()=>({
                ...y,
                checked: ae,
                disabled: P,
                readOnly: f,
                required: h
            })
    }["ll.useMemo[K]"], [
        y,
        ae,
        P,
        f,
        h
    ]), he = Ne("span", t, {
        state: K,
        ref: [
            n,
            k,
            fe
        ],
        props: [
            U,
            B.getValidationProps,
            w,
            ge
        ],
        stateAttributesMapping: cl
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Ki.Provider, {
        value: K,
        children: [
            he,
            !ae && T && m !== void 0 && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("input", {
                type: "hidden",
                name: T,
                value: m
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("input", {
                ...Z
            })
        ]
    });
}, "9oG0Iu1L8gW/dHn6HNmB0pzttL4="));
("TURBOPACK compile-time value", "development") !== "production" && (ll.displayName = "SwitchRoot");
const ul = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function(t, n) {
    const { render: r, className: o1, ...i } = t, { state: s } = Dt(), a = um(), c = {
        ...s,
        ...a
    };
    return Ne("span", t, {
        state: c,
        ref: n,
        stateAttributesMapping: cl,
        props: i
    });
});
("TURBOPACK compile-time value", "development") !== "production" && (ul.displayName = "SwitchThumb");
var fm = "jcoz9z0", dm = "jcoz9z1", hm = tt({
    defaultClassName: "jcoz9z3 jcoz9z2",
    variantClassNames: {
        size: {
            small: "jcoz9z4",
            medium: "jcoz9z5",
            large: "jcoz9z6",
            xlarge: "jcoz9z7"
        },
        intent: {
            primary: "jcoz9z8",
            secondary: "jcoz9z9",
            success: "jcoz9za",
            warning: "jcoz9zb",
            danger: "jcoz9zc",
            neutral: "jcoz9zd"
        }
    },
    defaultVariants: {
        size: "medium",
        intent: "primary"
    },
    compoundVariants: []
}), pm = tt({
    defaultClassName: "jcoz9zf jcoz9ze",
    variantClassNames: {
        size: {
            small: "jcoz9zg",
            medium: "jcoz9zh",
            large: "jcoz9zi",
            xlarge: "jcoz9zj"
        }
    },
    defaultVariants: {
        size: "medium"
    },
    compoundVariants: []
});
const ag = ({ size: e = "medium", intent: t = "primary", label: n, checked: r, defaultChecked: o1, disabled: i = !1, onCheckedChange: s, className: a, name: c, required: l, readOnly: u })=>{
    const f = Jt(), h = (f == null ? void 0 : f.themeClass) ?? Zt;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("label", {
        className: st(h, fm, a),
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ll, {
                checked: r,
                defaultChecked: o1,
                disabled: i,
                onCheckedChange: s,
                name: c,
                required: l,
                readOnly: u,
                className: dm,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                    className: st(hm({
                        size: e,
                        intent: t
                    })),
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ul, {
                        className: pm({
                            size: e
                        })
                    })
                })
            }),
            n && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Ba, {
                as: "span",
                size: e,
                intent: "inherit",
                children: n
            })
        ]
    });
}, Gi = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(void 0);
("TURBOPACK compile-time value", "development") !== "production" && (Gi.displayName = "TabsRootContext");
function Yi() {
    _s74();
    const e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(Gi);
    if (e === void 0) throw new Error(("TURBOPACK compile-time truthy", 1) ? "Base UI: TabsRootContext is missing. Tabs parts must be placed within <Tabs.Root>." : "TURBOPACK unreachable");
    return e;
}
_s74(Yi, "KtrK5+WEuqFyc+Nd5vj572lGrLM=");
_c186 = Yi;
let mm = /* @__PURE__ */ function(e) {
    return e.activationDirection = "data-activation-direction", e.orientation = "data-orientation", e;
}({});
const Xi = {
    tabActivationDirection: (e)=>({
            [mm.activationDirection]: e
        })
}, fl = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_s75(function(t, n) {
    _s75();
    const { className: r, defaultValue: o1 = 0, onValueChange: i, orientation: s = "horizontal", render: a, value: c, ...l } = t, u = Hi(), f = Object.hasOwn(t, "defaultValue"), h = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef([]), [b, g] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState({
        "fl.useState": ()=>/* @__PURE__ */ new Map()
    }["fl.useState"]), [m, w] = Kn({
        controlled: c,
        default: o1,
        name: "Tabs",
        state: "value"
    }), p = c !== void 0, [y, v] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState({
        "fl.useState": ()=>/* @__PURE__ */ new Map()
    }["fl.useState"]), [S, R] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState("none"), C = ie((_, I)=>{
        i == null || i(_, I), !I.isCanceled && (w(_), R(I.activationDirection));
    }), x = ie((_, I)=>{
        g((k)=>{
            if (k.get(_) === I) return k;
            const z = new Map(k);
            return z.set(_, I), z;
        });
    }), O = ie((_, I)=>{
        g((k)=>{
            if (!k.has(_) || k.get(_) !== I) return k;
            const z = new Map(k);
            return z.delete(_), z;
        });
    }), N = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "fl.useCallback[N]": (_)=>b.get(_)
    }["fl.useCallback[N]"], [
        b
    ]), M = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "fl.useCallback[M]": (_)=>{
            for (const I of y.values())if (_ === (I == null ? void 0 : I.value)) return I == null ? void 0 : I.id;
        }
    }["fl.useCallback[M]"], [
        y
    ]), D = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "fl.useCallback[D]": (_)=>{
            if (_ === void 0) return null;
            for (const [I, k] of y.entries())if (k != null && _ === (k.value ?? k.index)) return I;
            return null;
        }
    }["fl.useCallback[D]"], [
        y
    ]), B = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "fl.useMemo[B]": ()=>({
                direction: u,
                getTabElementBySelectedValue: D,
                getTabIdByPanelValue: M,
                getTabPanelIdByValue: N,
                onValueChange: C,
                orientation: s,
                registerMountedTabPanel: x,
                setTabMap: v,
                unregisterMountedTabPanel: O,
                tabActivationDirection: S,
                value: m
            })
    }["fl.useMemo[B]"], [
        u,
        D,
        M,
        N,
        C,
        s,
        x,
        v,
        O,
        S,
        m
    ]), j = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "fl.useMemo[j]": ()=>{
            for (const _ of y.values())if (_ != null && _.value === m) return _;
        }
    }["fl.useMemo[j]"], [
        y,
        m
    ]), P = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "fl.useMemo[P]": ()=>{
            for (const _ of y.values())if (_ != null && !_.disabled) return _.value;
        }
    }["fl.useMemo[P]"], [
        y
    ]);
    ne(()=>{
        if (p || y.size === 0) return;
        const _ = j == null ? void 0 : j.disabled, I = j == null && m !== null;
        if (f && _ && m === o1 || !_ && !I) return;
        const z = P ?? null;
        m !== z && (w(z), R("none"));
    }, [
        o1,
        P,
        f,
        p,
        j,
        R,
        w,
        y,
        m
    ]);
    const A = Ne("div", t, {
        state: {
            orientation: s,
            tabActivationDirection: S
        },
        ref: n,
        props: l,
        stateAttributesMapping: Xi
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Gi.Provider, {
        value: B,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(qi, {
            elementsRef: h,
            children: A
        })
    });
}, "eUIxAPEEhi/DC/+57Qr+qCYAzho="));
("TURBOPACK compile-time value", "development") !== "production" && (fl.displayName = "TabsRoot");
const dl = "data-composite-item-active";
function gm(e = {}) {
    _s76();
    const { highlightItemOnHover: t, highlightedIndex: n, onHighlightedIndexChange: r } = Ia(), { ref: o1, index: i } = $i(e), s = n === i, a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null), c = Bt(o1, a);
    return {
        compositeProps: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
            "gm.useMemo": ()=>({
                    tabIndex: s ? 0 : -1,
                    onFocus () {
                        r(i);
                    },
                    onMouseMove () {
                        const u = a.current;
                        if (!t || !u) return;
                        const f = u.hasAttribute("disabled") || u.ariaDisabled === "true";
                        !s && !f && u.focus();
                    }
                })
        }["gm.useMemo"], [
            s,
            r,
            i,
            t
        ]),
        compositeRef: c,
        index: i
    };
}
_s76(gm, "QO2JyZaF0h3WO5UajdVGKcg4RgI=");
const Zi = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(void 0);
("TURBOPACK compile-time value", "development") !== "production" && (Zi.displayName = "TabsListContext");
function bm() {
    _s77();
    const e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(Zi);
    if (e === void 0) throw new Error(("TURBOPACK compile-time truthy", 1) ? "Base UI: TabsListContext is missing. TabsList parts must be placed within <Tabs.List>." : "TURBOPACK unreachable");
    return e;
}
_s77(bm, "KtrK5+WEuqFyc+Nd5vj572lGrLM=");
const hl = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_s78(function(t, n) {
    _s78();
    const { className: r, disabled: o1 = !1, render: i, value: s, id: a, nativeButton: c = !0, ...l } = t, { value: u, getTabPanelIdByValue: f, orientation: h } = Yi(), { activateOnFocus: b, highlightedTabIndex: g, onTabActivation: m, setHighlightedTabIndex: w, tabsListElement: p } = bm(), y = Rt(a), v = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "hl.useMemo[v]": ()=>({
                disabled: o1,
                id: y,
                value: s
            })
    }["hl.useMemo[v]"], [
        o1,
        y,
        s
    ]), { compositeProps: S, compositeRef: R, index: C } = gm({
        metadata: v
    }), x = s === u, O = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(!1);
    ne(()=>{
        if (O.current) {
            O.current = !1;
            return;
        }
        if (!(x && C > -1 && g !== C)) return;
        const k = p;
        if (k != null) {
            const z = Ut(qt(k));
            if (z && De(k, z)) return;
        }
        o1 || w(C);
    }, [
        x,
        C,
        g,
        w,
        o1,
        p
    ]);
    const { getButtonProps: N, buttonRef: M } = Tn({
        disabled: o1,
        native: c,
        focusableWhenDisabled: !0
    }), D = f(s), B = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(!1), j = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(!1);
    function P(k) {
        x || o1 || m(s, ke(pn, k.nativeEvent, void 0, {
            activationDirection: "none"
        }));
    }
    function T(k) {
        x || (C > -1 && !o1 && w(C), !o1 && b && (!B.current || // keyboard or touch focus
        B.current && j.current) && m(s, ke(pn, k.nativeEvent, void 0, {
            activationDirection: "none"
        })));
    }
    function A(k) {
        if (x || o1) return;
        B.current = !0;
        function z() {
            B.current = !1, j.current = !1;
        }
        (!k.button || k.button === 0) && (j.current = !0, qt(k.currentTarget).addEventListener("pointerup", z, {
            once: !0
        }));
    }
    const _ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "hl.useMemo[_]": ()=>({
                disabled: o1,
                active: x,
                orientation: h
            })
    }["hl.useMemo[_]"], [
        o1,
        x,
        h
    ]);
    return Ne("button", t, {
        state: _,
        ref: [
            n,
            M,
            R
        ],
        props: [
            S,
            {
                role: "tab",
                "aria-controls": D,
                "aria-selected": x,
                id: y,
                onClick: P,
                onFocus: T,
                onPointerDown: A,
                [dl]: x ? "" : void 0,
                onKeyDownCapture () {
                    O.current = !0;
                }
            },
            l,
            N
        ]
    });
}, "BUHFhQpVm1JkN4Ug3is5lfn65h4="));
("TURBOPACK compile-time value", "development") !== "production" && (hl.displayName = "TabsTab");
let ym = /* @__PURE__ */ function(e) {
    return e.index = "data-index", e.activationDirection = "data-activation-direction", e.orientation = "data-orientation", e.hidden = "data-hidden", e;
}({});
const pl = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_s79(function(t, n) {
    _s79();
    const { className: r, value: o1, render: i, keepMounted: s = !1, ...a } = t, { value: c, getTabIdByPanelValue: l, orientation: u, tabActivationDirection: f, registerMountedTabPanel: h, unregisterMountedTabPanel: b } = Yi(), g = Rt(), m = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "pl.useMemo[m]": ()=>({
                id: g,
                value: o1
            })
    }["pl.useMemo[m]"], [
        g,
        o1
    ]), { ref: w, index: p } = $i({
        metadata: m
    }), y = o1 !== c, v = l(o1), S = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "pl.useMemo[S]": ()=>({
                hidden: y,
                orientation: u,
                tabActivationDirection: f
            })
    }["pl.useMemo[S]"], [
        y,
        u,
        f
    ]), R = Ne("div", t, {
        state: S,
        ref: [
            n,
            w
        ],
        props: [
            {
                "aria-labelledby": v,
                hidden: y,
                id: g ?? void 0,
                role: "tabpanel",
                tabIndex: y ? -1 : 0,
                [ym.index]: p
            },
            a
        ],
        stateAttributesMapping: Xi
    });
    return ne(()=>{
        if (!(y && !s) && g != null) return h(o1, g), ()=>{
            b(o1, g);
        };
    }, [
        y,
        s,
        o1,
        g,
        h,
        b
    ]), !y || s ? R : null;
}, "un+PRDJs+nET/nwCpVJKKEtnXug="));
("TURBOPACK compile-time value", "development") !== "production" && (pl.displayName = "TabsPanel");
function vm(e) {
    return e == null || e.hasAttribute("disabled") || e.getAttribute("aria-disabled") === "true";
}
const wm = [];
function Em(e) {
    _s80();
    const { itemSizes: t, cols: n = 1, loopFocus: r = !0, dense: o1 = !1, orientation: i = "both", direction: s, highlightedIndex: a, onHighlightedIndexChange: c, rootRef: l, enableHomeAndEndKeys: u = !1, stopEventPropagation: f = !1, disabledIndices: h, modifierKeys: b = wm } = e, [g, m] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(0), w = n > 1, p = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null), y = Bt(p, l), v = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef([]), S = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(!1), R = a ?? g, C = ie((N, M = !1)=>{
        if ((c ?? m)(N), M) {
            const D = v.current[N];
            ta(p.current, D, s, i);
        }
    }), x = ie((N)=>{
        if (N.size === 0 || S.current) return;
        S.current = !0;
        const M = Array.from(N.keys()), D = M.find((j)=>j == null ? void 0 : j.hasAttribute(dl)) ?? null, B = D ? M.indexOf(D) : -1;
        B !== -1 && C(B), ta(p.current, D, s, i);
    }), O = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Em.useMemo[O]": ()=>({
                "aria-orientation": i === "both" ? void 0 : i,
                ref: y,
                onFocus (N) {
                    !p.current || !ea(N.target) || N.target.setSelectionRange(0, N.target.value.length ?? 0);
                },
                onKeyDown (N) {
                    const M = u ? ip : Vc;
                    if (!M.has(N.key) || Sm(N, b) || !p.current) return;
                    const B = s === "rtl", j = B ? dr : Bn, P = {
                        horizontal: j,
                        vertical: En,
                        both: j
                    }[i], T = B ? Bn : dr, A = {
                        horizontal: T,
                        vertical: jn,
                        both: T
                    }[i];
                    if (ea(N.target) && !vm(N.target)) {
                        const ee = N.target.selectionStart, ge = N.target.selectionEnd, fe = N.target.value ?? "";
                        if (ee == null || N.shiftKey || ee !== ge || N.key !== A && ee < fe.length || N.key !== P && ee > 0) return;
                    }
                    let _ = R;
                    const I = zr(v, h), k = si(v, h);
                    if (w) {
                        const ee = t || Array.from({
                            length: v.current.length
                        }, {
                            "Em.useMemo[O]": ()=>({
                                    width: 1,
                                    height: 1
                                })
                        }["Em.useMemo[O]"]), ge = nc(ee, n, o1), fe = ge.findIndex({
                            "Em.useMemo[O].fe": (Z)=>Z != null && !hn(v, Z, h)
                        }["Em.useMemo[O].fe"]), U = ge.reduce({
                            "Em.useMemo[O].U": (Z, K, he)=>K != null && !hn(v, K, h) ? he : Z
                        }["Em.useMemo[O].U"], -1);
                        _ = ge[tc({
                            current: ge.map({
                                "Em.useMemo[O]": (Z)=>Z ? v.current[Z] : null
                            }["Em.useMemo[O]"])
                        }, {
                            event: N,
                            orientation: i,
                            loopFocus: r,
                            cols: n,
                            // treat undefined (empty grid spaces) as disabled indices so we
                            // don't end up in them
                            disabledIndices: oc([
                                ...h || v.current.map({
                                    "Em.useMemo[O]": (Z, K)=>hn(v, K) ? K : void 0
                                }["Em.useMemo[O]"]),
                                void 0
                            ], ge),
                            minIndex: fe,
                            maxIndex: U,
                            prevIndex: rc(R > k ? I : R, ee, ge, n, // use a corner matching the edge closest to the direction we're
                            // moving in so we don't end up in the same item. Prefer
                            // top/left over bottom/right.
                            // eslint-disable-next-line no-nested-ternary
                            N.key === En ? "bl" : N.key === Bn ? "tr" : "tl"),
                            rtl: B
                        })];
                    }
                    const z = {
                        horizontal: [
                            j
                        ],
                        vertical: [
                            En
                        ],
                        both: [
                            j,
                            En
                        ]
                    }[i], $ = {
                        horizontal: [
                            T
                        ],
                        vertical: [
                            jn
                        ],
                        both: [
                            T,
                            jn
                        ]
                    }[i], ae = w ? M : ({
                        horizontal: u ? rp : Mc,
                        vertical: u ? op : Dc,
                        both: M
                    })[i];
                    u && (N.key === Er ? _ = I : N.key === Sr && (_ = k)), _ === R && (z.includes(N.key) || $.includes(N.key)) && (r && _ === k && z.includes(N.key) ? _ = I : r && _ === I && $.includes(N.key) ? _ = k : _ = Ze(v, {
                        startingIndex: _,
                        decrement: $.includes(N.key),
                        disabledIndices: h
                    })), _ !== R && !Vn(v, _) && (f && N.stopPropagation(), ae.has(N.key) && N.preventDefault(), C(_, !0), queueMicrotask({
                        "Em.useMemo[O]": ()=>{
                            var ee;
                            (ee = v.current[_]) == null || ee.focus();
                        }
                    }["Em.useMemo[O]"]));
                }
            })
    }["Em.useMemo[O]"], [
        n,
        o1,
        s,
        h,
        v,
        u,
        R,
        w,
        t,
        r,
        y,
        b,
        C,
        i,
        f
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Em.useMemo": ()=>({
                props: O,
                highlightedIndex: R,
                onHighlightedIndexChange: C,
                elementsRef: v,
                disabledIndices: h,
                onMapChange: x,
                relayKeyboardEvent: O.onKeyDown
            })
    }["Em.useMemo"], [
        O,
        R,
        C,
        v,
        h,
        x
    ]);
}
_s80(Em, "iHNO/PUgVzMWLiO5j3zMfHsIPFw=");
_c187 = Em;
function Sm(e, t) {
    for (const n of up.values())if (!t.includes(n) && e.getModifierState(n)) return !0;
    return !1;
}
_c188 = Sm;
function Rm(e) {
    _s81();
    const { render: t, className: n, refs: r = Un, props: o1 = Un, state: i = $e, stateAttributesMapping: s, highlightedIndex: a, onHighlightedIndexChange: c, orientation: l, dense: u, itemSizes: f, loopFocus: h, cols: b, enableHomeAndEndKeys: g, onMapChange: m, stopEventPropagation: w = !0, rootRef: p, disabledIndices: y, modifierKeys: v, highlightItemOnHover: S = !1, tag: R = "div", ...C } = e, x = Hi(), { props: O, highlightedIndex: N, onHighlightedIndexChange: M, elementsRef: D, onMapChange: B, relayKeyboardEvent: j } = Em({
        itemSizes: f,
        cols: b,
        loopFocus: h,
        dense: u,
        orientation: l,
        highlightedIndex: a,
        onHighlightedIndexChange: c,
        rootRef: p,
        stopEventPropagation: w,
        enableHomeAndEndKeys: g,
        direction: x,
        disabledIndices: y,
        modifierKeys: v
    }), P = Ne(R, e, {
        state: i,
        ref: r,
        props: [
            O,
            ...o1,
            C
        ],
        stateAttributesMapping: s
    }), T = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Rm.useMemo[T]": ()=>({
                highlightedIndex: N,
                onHighlightedIndexChange: M,
                highlightItemOnHover: S,
                relayKeyboardEvent: j
            })
    }["Rm.useMemo[T]"], [
        N,
        M,
        S,
        j
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(bi.Provider, {
        value: T,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(qi, {
            elementsRef: D,
            onMapChange: (A)=>{
                m == null || m(A), B(A);
            },
            children: P
        })
    });
}
_s81(Rm, "8hRoB1DCC4pw5kcXPIYqa5IoheI=");
_c189 = Rm;
const ml = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_s82(function(t, n) {
    _s82();
    const { activateOnFocus: r = !1, className: o1, loopFocus: i = !0, render: s, ...a } = t, { getTabElementBySelectedValue: c, onValueChange: l, orientation: u, value: f, setTabMap: h, tabActivationDirection: b } = Yi(), [g, m] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(0), [w, p] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(null), y = xm(f, // the old value
    u, w, c), v = ie((x, O)=>{
        if (x !== f) {
            const N = y(x);
            O.activationDirection = N, l(x, O);
        }
    }), S = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "ml.useMemo[S]": ()=>({
                orientation: u,
                tabActivationDirection: b
            })
    }["ml.useMemo[S]"], [
        u,
        b
    ]), R = {
        "aria-orientation": u === "vertical" ? "vertical" : void 0,
        role: "tablist"
    }, C = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "ml.useMemo[C]": ()=>({
                activateOnFocus: r,
                highlightedTabIndex: g,
                onTabActivation: v,
                setHighlightedTabIndex: m,
                tabsListElement: w,
                value: f
            })
    }["ml.useMemo[C]"], [
        r,
        g,
        v,
        m,
        w,
        f
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Zi.Provider, {
        value: C,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Rm, {
            render: s,
            className: o1,
            state: S,
            refs: [
                n,
                p
            ],
            props: [
                R,
                a
            ],
            stateAttributesMapping: Xi,
            highlightedIndex: g,
            enableHomeAndEndKeys: !0,
            loopFocus: i,
            orientation: u,
            onHighlightedIndexChange: m,
            onMapChange: h,
            disabledIndices: Un
        })
    });
}, "u2RRE0xfitz8MfKMG4flFvhvNfw="));
("TURBOPACK compile-time value", "development") !== "production" && (ml.displayName = "TabsList");
function ua(e, t) {
    const { left: n, top: r } = e.getBoundingClientRect(), { left: o1, top: i } = t.getBoundingClientRect(), s = n - o1, a = r - i;
    return {
        left: s,
        top: a
    };
}
function xm(e, t, n, r) {
    _s83();
    const [o1, i] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(null);
    return ne(()=>{
        if (e == null || n == null) {
            i(null);
            return;
        }
        const s = r(e);
        if (s == null) {
            i(null);
            return;
        }
        const { left: a, top: c } = ua(s, n);
        i(t === "horizontal" ? a : c);
    }, [
        t,
        r,
        n,
        e
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "xm.useCallback": (s)=>{
            if (s === e) return "none";
            if (s == null) return i(null), "none";
            if (s != null && n != null) {
                const a = r(s);
                if (a != null) {
                    const { left: c, top: l } = ua(a, n);
                    if (o1 == null) return i(t === "horizontal" ? c : l), "none";
                    if (t === "horizontal") {
                        if (c < o1) return i(c), "left";
                        if (c > o1) return i(c), "right";
                    } else {
                        if (l < o1) return i(l), "up";
                        if (l > o1) return i(l), "down";
                    }
                }
            }
            return "none";
        }
    }["xm.useCallback"], [
        r,
        t,
        o1,
        n,
        e
    ]);
}
_s83(xm, "uUF7mH+qhw2x5IEtk5sLrw7HpNM=");
var Cm = "_1hgnikh0", Om = "_1hgnikh1", Tm = tt({
    defaultClassName: "_1hgnikh2",
    variantClassNames: {
        orientation: {
            horizontal: "_1hgnikh3",
            vertical: "_1hgnikh4"
        }
    },
    defaultVariants: {
        orientation: "horizontal"
    },
    compoundVariants: []
}), Im = tt({
    defaultClassName: "_1hgnikh5",
    variantClassNames: {
        intent: {
            primary: "_1hgnikh6",
            secondary: "_1hgnikh7",
            success: "_1hgnikh8",
            warning: "_1hgnikh9",
            danger: "_1hgnikha",
            neutral: "_1hgnikhb"
        },
        orientation: {
            horizontal: "_1hgnikhc",
            vertical: "_1hgnikhd"
        }
    },
    defaultVariants: {
        intent: "primary",
        orientation: "horizontal"
    },
    compoundVariants: [
        [
            {
                intent: "primary"
            },
            "_1hgnikhe"
        ],
        [
            {
                intent: "secondary"
            },
            "_1hgnikhf"
        ],
        [
            {
                intent: "success"
            },
            "_1hgnikhg"
        ],
        [
            {
                intent: "warning"
            },
            "_1hgnikhh"
        ],
        [
            {
                intent: "danger"
            },
            "_1hgnikhi"
        ],
        [
            {
                intent: "neutral"
            },
            "_1hgnikhj"
        ]
    ]
}), km = tt({
    defaultClassName: "_1hgnikhk",
    variantClassNames: {
        intent: {
            primary: "_1hgnikhl",
            secondary: "_1hgnikhm",
            success: "_1hgnikhn",
            warning: "_1hgnikho",
            danger: "_1hgnikhp",
            neutral: "_1hgnikhq"
        }
    },
    defaultVariants: {
        intent: "primary"
    },
    compoundVariants: []
}), _m = tt({
    defaultClassName: "_1hgnikhr",
    variantClassNames: {
        intent: {
            primary: "_1hgnikhs",
            secondary: "_1hgnikht",
            success: "_1hgnikhu",
            warning: "_1hgnikhv",
            danger: "_1hgnikhw",
            neutral: "_1hgnikhx"
        },
        orientation: {
            horizontal: "_1hgnikhy",
            vertical: "_1hgnikhz"
        }
    },
    defaultVariants: {
        intent: "primary",
        orientation: "horizontal"
    },
    compoundVariants: []
}), Nm = "_1hgnikh10";
function Am(e, t) {
    const [n, r] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t), o1 = e ?? n, i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((s, a)=>{
        e === void 0 && r(s), a == null || a(s);
    }, [
        e
    ]);
    return {
        currentValue: o1,
        handleValueChange: i
    };
}
_c190 = Am;
function Pm(e, t, n) {
    return n === "horizontal" ? {
        left: `${t.left - e.left}px`,
        width: `${t.width}px`,
        height: "2px"
    } : {
        top: `${t.top - e.top}px`,
        height: `${t.height}px`,
        width: "2px"
    };
}
_c191 = Pm;
function Mm(e, t, n) {
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), o1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(/* @__PURE__ */ new Map()), [i, s] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({}), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((c)=>{
        if (!r.current || !c) {
            s({});
            return;
        }
        const l = o1.current.get(c);
        if (!l) {
            s({});
            return;
        }
        const u = r.current.getBoundingClientRect(), f = l.getBoundingClientRect(), h = Pm(u, f, t);
        s(h);
    }, [
        t
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const c = requestAnimationFrame(()=>{
            a(e);
        });
        return ()=>{
            cancelAnimationFrame(c);
        };
    }, [
        e,
        a,
        n
    ]), {
        tabListRef: r,
        tabRefs: o1,
        indicatorStyle: i
    };
}
_c192 = Mm;
const cg = ({ tabs: e, value: t, defaultValue: n, onChange: r, intent: o1 = "primary", orientation: i = "horizontal", className: s })=>{
    var w;
    const a = Jt(), c = (a == null ? void 0 : a.themeClass) ?? Zt, l = t ?? n ?? ((w = e[0]) == null ? void 0 : w.value) ?? null, { currentValue: u, handleValueChange: f } = Am(t, l), { tabListRef: h, tabRefs: b, indicatorStyle: g } = Mm(u, i, e), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((p)=>{
        f(p, r);
    }, [
        f,
        r
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(fl, {
        value: t,
        defaultValue: n,
        onValueChange: m,
        orientation: i,
        className: st(c, Cm, s),
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                ref: h,
                className: Om,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(ml, {
                    className: Tm({
                        orientation: i
                    }),
                    children: [
                        e.map((p)=>{
                            const y = u === p.value;
                            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(hl, {
                                ref: (v)=>{
                                    v && v instanceof HTMLButtonElement ? b.current.set(p.value, v) : b.current.delete(p.value);
                                },
                                value: p.value,
                                disabled: p.disabled,
                                className: st(Im({
                                    intent: o1,
                                    orientation: i
                                }), y && km({
                                    intent: o1
                                })),
                                children: p.label
                            }, p.value);
                        }),
                        /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                            className: _m({
                                intent: o1,
                                orientation: i
                            }),
                            style: g
                        })
                    ]
                })
            }),
            e.map((p)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(pl, {
                    value: p.value,
                    className: Nm,
                    children: p.content
                }, p.value))
        ]
    });
}, gl = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext({
    legendId: void 0,
    setLegendId: ()=>{},
    disabled: void 0
});
("TURBOPACK compile-time value", "development") !== "production" && (gl.displayName = "FieldsetRootContext");
function Dm(e = !1) {
    _s84();
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(gl);
    if (!t && !e) throw new Error(("TURBOPACK compile-time truthy", 1) ? "Base UI: FieldsetRootContext is missing. Fieldset parts must be placed within <Fieldset.Root>." : "TURBOPACK unreachable");
    return t;
}
_s84(Dm, "HJ1wmQfhQB2DF5cup/6Wxn+TXqs=");
_c193 = Dm;
const bl = function(t) {
    _s85();
    const n = Rt(), [r, o1] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(t.initialControlId === void 0 ? n : t.initialControlId), [i, s] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(void 0), [a, c] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState([]), { messageIds: l } = Vt(), u = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "bl.useCallback[u]": (h)=>Yt({
                "aria-describedby": l.concat(a).join(" ") || void 0
            }, h)
    }["bl.useCallback[u]"], [
        l,
        a
    ]), f = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "bl.useMemo[f]": ()=>({
                controlId: r,
                setControlId: o1,
                labelId: i,
                setLabelId: s,
                messageIds: a,
                setMessageIds: c,
                getDescriptionProps: u
            })
    }["bl.useMemo[f]"], [
        r,
        o1,
        i,
        s,
        a,
        c,
        u
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(wi.Provider, {
        value: f,
        children: t.children
    });
};
_s85(bl, "p/MdWh5wXeWovIgkglwjmzUw2SE=");
("TURBOPACK compile-time value", "development") !== "production" && (bl.displayName = "LabelableProvider");
const qr = Object.keys(ao);
function Vm(e) {
    if (!e || e.valid || !e.valueMissing) return !1;
    let t = !1;
    for (const n of qr)n !== "valid" && (n === "valueMissing" && (t = e[n]), e[n] && (t = !1));
    return t;
}
_c194 = Vm;
function Lm(e) {
    _s86();
    const { formRef: t, clearErrors: n } = In(), { setValidityData: r, validate: o1, validityData: i, validationDebounceTime: s, invalid: a, markedDirtyRef: c, state: l, name: u, shouldValidateOnChange: f } = e, { controlId: h, getDescriptionProps: b } = Vt(), g = yt(), m = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null), w = ie(async (v, S = !1)=>{
        const R = m.current;
        if (!R) return;
        if (S) {
            if (l.valid !== !1) return;
            const j = R.validity;
            if (!j.valueMissing) {
                const T = {
                    value: v,
                    state: {
                        ...ao,
                        valid: !0
                    },
                    error: "",
                    errors: [],
                    initialValue: i.initialValue
                };
                if (R.setCustomValidity(""), h) {
                    const A = t.current.fields.get(h);
                    A && t.current.fields.set(h, {
                        ...A,
                        ...Qo(T, !1)
                    });
                }
                r(T);
                return;
            }
            const P = qr.reduce((T, A)=>(T[A] = j[A], T), {});
            if (!P.valid && !Vm(P)) return;
        }
        function C(j) {
            const P = qr.reduce((A, _)=>(A[_] = j.validity[_], A), {});
            let T = !1;
            for (const A of qr)if (A !== "valid") {
                if (A === "valueMissing" && P[A]) T = !0;
                else if (P[A]) return P;
            }
            return T && !c.current && (P.valid = !0, P.valueMissing = !1), P;
        }
        g.clear();
        let x = null, O = [];
        const N = C(R);
        let M;
        const D = f();
        if (R.validationMessage && !D) M = R.validationMessage, O = [
            R.validationMessage
        ];
        else {
            const j = Array.from(t.current.fields.values()).reduce((T, A)=>(A.name && (T[A.name] = A.getValue()), T), {}), P = o1(v, j);
            typeof P == "object" && P !== null && "then" in P ? x = await P : x = P, x !== null ? (N.valid = !1, N.customError = !0, Array.isArray(x) ? (O = x, R.setCustomValidity(x.join(`
`))) : x && (O = [
                x
            ], R.setCustomValidity(x))) : D && (R.setCustomValidity(""), N.customError = !1, R.validationMessage ? (M = R.validationMessage, O = [
                R.validationMessage
            ]) : R.validity.valid && !N.valid && (N.valid = !0));
        }
        const B = {
            value: v,
            state: N,
            error: M ?? (Array.isArray(x) ? x[0] : x ?? ""),
            errors: O,
            initialValue: i.initialValue
        };
        if (h) {
            const j = t.current.fields.get(h);
            j && t.current.fields.set(h, {
                ...j,
                ...Qo(B, a)
            });
        }
        r(B);
    }), p = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "Lm.useCallback[p]": (v = {})=>Yt(b, l.valid === !1 ? {
                "aria-invalid": !0
            } : $e, v)
    }["Lm.useCallback[p]"], [
        b,
        l.valid
    ]), y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "Lm.useCallback[y]": (v = {})=>Yt({
                onChange (S) {
                    if (S.nativeEvent.defaultPrevented) return;
                    if (n(u), !f()) {
                        w(S.currentTarget.value, !0);
                        return;
                    }
                    if (a) return;
                    const R = S.currentTarget;
                    if (R.value === "") {
                        w(R.value);
                        return;
                    }
                    g.clear(), s ? g.start(s, {
                        "Lm.useCallback[y]": ()=>{
                            w(R.value);
                        }
                    }["Lm.useCallback[y]"]) : w(R.value);
                }
            }, p(v))
    }["Lm.useCallback[y]"], [
        p,
        n,
        u,
        g,
        w,
        a,
        s,
        f
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Lm.useMemo": ()=>({
                getValidationProps: p,
                getInputValidationProps: y,
                inputRef: m,
                commit: w
            })
    }["Lm.useMemo"], [
        p,
        y,
        w
    ]);
}
_s86(Lm, "NviwYqIZbRwY2g348tlKSVGpSwY=");
_c195 = Lm;
const yl = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_s87(function(t, n) {
    _s87();
    const { errors: r, validationMode: o1, submitAttemptedRef: i } = In(), { render: s, className: a, validate: c, validationDebounceTime: l = 0, validationMode: u = o1, name: f, disabled: h = !1, invalid: b, dirty: g, touched: m, ...w } = t, { disabled: p } = Dm(), y = ie(c || (()=>null)), v = p || h, [S, R] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(!1), [C, x] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(!1), [O, N] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(!1), [M, D] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(!1), B = g ?? C, j = m ?? S, P = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(!1), T = ie((U)=>{
        g === void 0 && (U && (P.current = !0), x(U));
    }), A = ie((U)=>{
        m === void 0 && R(U);
    }), _ = ie(()=>u === "onChange" || u === "onSubmit" && i.current), I = !!(b || f && ({}).hasOwnProperty.call(r, f) && r[f] !== void 0), [k, z] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState({
        state: ao,
        error: "",
        errors: [],
        value: null,
        initialValue: null
    }), $ = !I && k.state.valid, ae = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "yl.useMemo[ae]": ()=>({
                disabled: v,
                touched: j,
                dirty: B,
                valid: $,
                filled: O,
                focused: M
            })
    }["yl.useMemo[ae]"], [
        v,
        j,
        B,
        $,
        O,
        M
    ]), ee = Lm({
        setValidityData: z,
        validate: y,
        validityData: k,
        validationDebounceTime: l,
        invalid: I,
        markedDirtyRef: P,
        state: ae,
        name: f,
        shouldValidateOnChange: _
    }), ge = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "yl.useMemo[ge]": ()=>({
                invalid: I,
                name: f,
                validityData: k,
                setValidityData: z,
                disabled: v,
                touched: j,
                setTouched: A,
                dirty: B,
                setDirty: T,
                filled: O,
                setFilled: N,
                focused: M,
                setFocused: D,
                validate: y,
                validationMode: u,
                validationDebounceTime: l,
                shouldValidateOnChange: _,
                state: ae,
                markedDirtyRef: P,
                validation: ee
            })
    }["yl.useMemo[ge]"], [
        I,
        f,
        k,
        v,
        j,
        A,
        B,
        T,
        O,
        N,
        M,
        D,
        y,
        u,
        l,
        _,
        ae,
        ee
    ]), fe = Ne("div", t, {
        ref: n,
        state: ae,
        props: w,
        stateAttributesMapping: Qt
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(vi.Provider, {
        value: ge,
        children: fe
    });
}, "E9CPlXl3nmBG1xREixuVBPknxtM="));
("TURBOPACK compile-time value", "development") !== "production" && (yl.displayName = "FieldRootInner");
const vl = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function(t, n) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(bl, {
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(yl, {
            ...t,
            ref: n
        })
    });
});
("TURBOPACK compile-time value", "development") !== "production" && (vl.displayName = "FieldRoot");
const wl = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_s88(function(t, n) {
    _s88();
    const { render: r, className: o1, id: i, ...s } = t, a = Dt(!1), { controlId: c, setLabelId: l, labelId: u } = Vt(), f = Rt(i), h = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null);
    return ne(()=>(f && l(f), ()=>{
            l(void 0);
        }), [
        f,
        l
    ]), Ne("label", t, {
        ref: [
            n,
            h
        ],
        state: a.state,
        props: [
            {
                id: u,
                htmlFor: c ?? void 0,
                onMouseDown (g) {
                    const m = gt(g.nativeEvent);
                    m != null && m.closest("button,input,select,textarea") || !g.defaultPrevented && g.detail > 1 && g.preventDefault();
                }
            },
            s
        ],
        stateAttributesMapping: Qt
    });
}, "OGGrOxdV9N7/48vqyCAo1Y2IcCM="));
("TURBOPACK compile-time value", "development") !== "production" && (wl.displayName = "FieldLabel");
const El = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c196 = function(t, n) {
    const { render: r, id: o1, className: i, match: s, ...a } = t, c = Rt(o1), { validityData: l, state: u, name: f } = Dt(!1), { setMessageIds: h } = Vt(), { errors: b } = In(), g = f ? b[f] : null;
    let m = !1;
    g || s === !0 ? m = !0 : s ? m = !!l.state[s] : m = l.state.valid === !1, ne(()=>{
        if (!(!m || !c)) return h((p)=>p.concat(c)), ()=>{
            h((p)=>p.filter((y)=>y !== c));
        };
    }, [
        m,
        c,
        h
    ]);
    const w = Ne("div", t, {
        ref: n,
        state: u,
        props: [
            {
                id: c,
                children: g || (l.errors.length > 1 ? /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("ul", {}, l.errors.map((p)=>/* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("li", {
                        key: p
                    }, p))) : l.error)
            },
            a
        ],
        stateAttributesMapping: Qt
    });
    return m ? w : null;
});
_c197 = El;
("TURBOPACK compile-time value", "development") !== "production" && (El.displayName = "FieldError");
const Sl = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c198 = function(t, n) {
    const { render: r, id: o1, className: i, ...s } = t, a = Rt(o1), c = Dt(!1), { setMessageIds: l } = Vt();
    return ne(()=>{
        if (a) return l((f)=>f.concat(a)), ()=>{
            l((f)=>f.filter((h)=>h !== a));
        };
    }, [
        a,
        l
    ]), Ne("p", t, {
        ref: n,
        state: c.state,
        props: [
            {
                id: a
            },
            s
        ],
        stateAttributesMapping: Qt
    });
});
_c199 = Sl;
("TURBOPACK compile-time value", "development") !== "production" && (Sl.displayName = "FieldDescription");
const Rl = /* @__PURE__ */ /*#__PURE__*/ _s89(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c200 = _s89(function(t, n) {
    _s89();
    const { render: r, className: o1, id: i, name: s, value: a, disabled: c = !1, onValueChange: l, defaultValue: u, ...f } = t, { state: h, name: b, disabled: g } = Dt(), m = g || c, w = b ?? s, p = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Rl.useMemo[p]": ()=>({
                ...h,
                disabled: m
            })
    }["Rl.useMemo[p]"], [
        h,
        m
    ]), { setTouched: y, setDirty: v, validityData: S, setFocused: R, setFilled: C, validationMode: x, validation: O } = Dt(), { labelId: N } = Vt(), M = ji({
        id: i
    });
    ne(()=>{
        var _;
        const A = a != null;
        (_ = O.inputRef.current) != null && _.value || A && a !== "" ? C(!0) : A && a === "" && C(!1);
    }, [
        O.inputRef,
        C,
        a
    ]);
    const [D, B] = Kn({
        controlled: a,
        default: u,
        name: "FieldControl",
        state: "value"
    }), j = a !== void 0, P = ie((A, _)=>{
        l == null || l(A, _), !_.isCanceled && B(A);
    });
    return co({
        id: M,
        name: w,
        commit: O.commit,
        value: D,
        getValue: ()=>{
            var A;
            return (A = O.inputRef.current) == null ? void 0 : A.value;
        },
        controlRef: O.inputRef
    }), Ne("input", t, {
        ref: n,
        state: p,
        props: [
            {
                id: M,
                disabled: m,
                name: w,
                ref: O.inputRef,
                "aria-labelledby": N,
                ...j ? {
                    value: D
                } : {
                    defaultValue: u
                },
                onChange (A) {
                    const _ = A.currentTarget.value;
                    P(_, ke(pn, A.nativeEvent)), v(_ !== S.initialValue), C(_ !== "");
                },
                onFocus () {
                    R(!0);
                },
                onBlur (A) {
                    y(!0), R(!1), x === "onBlur" && O.commit(A.currentTarget.value);
                },
                onKeyDown (A) {
                    A.currentTarget.tagName === "INPUT" && A.key === "Enter" && (y(!0), O.commit(A.currentTarget.value));
                }
            },
            O.getInputValidationProps(),
            f
        ],
        stateAttributesMapping: Qt
    });
}, "Qyk5Hq+qSsQiCVpu3NClUVG81C8=")), "Qyk5Hq+qSsQiCVpu3NClUVG81C8=");
_c201 = Rl;
("TURBOPACK compile-time value", "development") !== "production" && (Rl.displayName = "FieldControl");
const xl = /* @__PURE__ */ /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function(t, n) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Rl, {
        ref: n,
        ...t
    });
});
("TURBOPACK compile-time value", "development") !== "production" && (xl.displayName = "Input");
var Fm = tt({
    defaultClassName: "dqunyj0",
    variantClassNames: {
        size: {
            small: "dqunyj1",
            medium: "dqunyj2",
            large: "dqunyj3",
            xlarge: "dqunyj4"
        }
    },
    defaultVariants: {
        size: "medium"
    },
    compoundVariants: []
}), zm = tt({
    defaultClassName: "dqunyj5",
    variantClassNames: {
        size: {
            small: "dqunyj6",
            medium: "dqunyj7",
            large: "dqunyj8",
            xlarge: "dqunyj9"
        },
        status: {
            default: "dqunyja",
            error: "dqunyjb",
            success: "dqunyjc"
        }
    },
    defaultVariants: {
        size: "medium",
        status: "default"
    },
    compoundVariants: []
}), jm = "dqunyjd", Bm = {
    default: "dqunyje",
    fullWidth: "dqunyjf"
}, qm = tt({
    defaultClassName: "dqunyjh dqunyjg",
    variantClassNames: {
        variant: {
            outline: "dqunyji",
            filled: "dqunyjj"
        },
        status: {
            default: "dqunyjk",
            error: "dqunyjl",
            success: "dqunyjm"
        },
        rounded: {
            small: "dqunyjn",
            medium: "dqunyjo",
            large: "dqunyjp"
        }
    },
    defaultVariants: {
        variant: "outline",
        status: "default",
        rounded: "medium"
    },
    compoundVariants: [
        [
            {
                variant: "outline",
                status: "default"
            },
            "dqunyjq"
        ],
        [
            {
                variant: "outline",
                status: "error"
            },
            "dqunyjr"
        ],
        [
            {
                variant: "outline",
                status: "success"
            },
            "dqunyjs"
        ],
        [
            {
                variant: "outline",
                rounded: "small"
            },
            "dqunyjt"
        ],
        [
            {
                variant: "outline",
                rounded: "medium"
            },
            "dqunyju"
        ],
        [
            {
                variant: "outline",
                rounded: "large"
            },
            "dqunyjv"
        ],
        [
            {
                variant: "filled",
                rounded: "small"
            },
            "dqunyjw"
        ],
        [
            {
                variant: "filled",
                rounded: "medium"
            },
            "dqunyjx"
        ],
        [
            {
                variant: "filled",
                rounded: "large"
            },
            "dqunyjy"
        ]
    ]
}), Hm = "dqunyjz", Wm = tt({
    defaultClassName: "dqunyj10 dqunyjz",
    variantClassNames: {
        size: {
            small: "dqunyj11",
            medium: "dqunyj12",
            large: "dqunyj13",
            xlarge: "dqunyj14"
        },
        rounded: {
            small: "dqunyj15",
            medium: "dqunyj16",
            large: "dqunyj17"
        },
        variant: {
            outline: "dqunyj18",
            filled: "dqunyj19"
        },
        status: {
            default: "dqunyj1a",
            error: "dqunyj1b",
            success: "dqunyj1c"
        }
    },
    defaultVariants: {
        size: "medium",
        rounded: "medium",
        variant: "outline",
        status: "default"
    },
    compoundVariants: [
        [
            {
                variant: "outline",
                status: "default"
            },
            "dqunyj1d"
        ],
        [
            {
                variant: "outline",
                status: "error"
            },
            "dqunyj1e"
        ],
        [
            {
                variant: "outline",
                status: "success"
            },
            "dqunyj1f"
        ],
        [
            {
                variant: "filled",
                status: "default"
            },
            "dqunyj1g"
        ],
        [
            {
                variant: "filled",
                status: "error"
            },
            "dqunyj1h"
        ],
        [
            {
                variant: "filled",
                status: "success"
            },
            "dqunyj1i"
        ],
        [
            {
                variant: "outline",
                rounded: "small"
            },
            "dqunyj1j"
        ],
        [
            {
                variant: "outline",
                rounded: "medium"
            },
            "dqunyj1k"
        ],
        [
            {
                variant: "outline",
                rounded: "large"
            },
            "dqunyj1l"
        ],
        [
            {
                variant: "filled",
                rounded: "small"
            },
            "dqunyj1m"
        ],
        [
            {
                variant: "filled",
                rounded: "medium"
            },
            "dqunyj1n"
        ],
        [
            {
                variant: "filled",
                rounded: "large"
            },
            "dqunyj1o"
        ]
    ]
}), Cl = "dqunyj1p";
const $m = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    container: jm,
    containerVariants: Bm,
    helperText: zm,
    input: Wm,
    inputBase: Hm,
    inputWrapper: qm,
    label: Fm,
    textarea: Cl
}, Symbol.toStringTag, {
    value: "Module"
})), { container: Um, containerVariants: Km, input: Gm, label: Ym, helperText: fa, inputWrapper: Xm } = $m, lg = ({ size: e = "medium", rounded: t = "medium", variant: n = "outline", status: r = "default", label: o1, helperText: i, fullWidth: s = !1, disabled: a = !1, multiline: c = !1, rows: l = 3, className: u, name: f, required: h, validate: b, ...g })=>{
    const m = Jt(), w = (m == null ? void 0 : m.themeClass) ?? Zt, p = st(Gm({
        size: e,
        rounded: t,
        variant: n,
        status: r
    }), c && Cl);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(vl, {
        className: st(w, Um, Km[s ? "fullWidth" : "default"], u),
        name: f,
        disabled: a,
        validate: b,
        children: [
            o1 && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(wl, {
                className: Ym({
                    size: e
                }),
                children: [
                    o1,
                    h && " *"
                ]
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: Xm({
                    variant: n,
                    status: r,
                    rounded: t
                }),
                children: c ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("textarea", {
                    className: p,
                    required: h,
                    disabled: a,
                    rows: l,
                    ...g
                }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(xl, {
                    className: p,
                    required: h,
                    ...g
                })
            }),
            i && r !== "error" && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Sl, {
                className: fa({
                    size: e,
                    status: r
                }),
                children: i
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(El, {
                className: fa({
                    size: e,
                    status: "error"
                })
            })
        ]
    });
};
;
var _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25, _c26, _c27, _c28, _c29, _c30, _c31, _c32, _c33, _c34, _c35, _c36, _c37, _c38, _c39, _c40, _c41, _c42, _c43, _c44, _c45, _c46, _c47, _c48, _c49, _c50, _c51, _c52, _c53, _c54, _c55, _c56, _c57, _c58, _c59, _c60, _c61, _c62, _c63, _c64, _c65, _c66, _c67, _c68, _c69, _c70, _c71, _c72, _c73, _c74, _c75, _c76, _c77, _c78, _c79, _c80, _c81, _c82, _c83, _c84, _c85, _c86, _c87, _c88, _c89, _c90, _c91, _c92, _c93, _c94, _c95, _c96, _c97, _c98, _c99, _c100, _c101, _c102, _c103, _c104, _c105, _c106, _c107, _c108, _c109, _c110, _c111, _c112, _c113, _c114, _c115, _c116, _c117, _c118, _c119, _c120, _c121, _c122, _c123, _c124, _c125, _c126, _c127, _c128, _c129, _c130, _c131, _c132, _c133, _c134, _c135, _c136, _c137, _c138, _c139, _c140, _c141, _c142, _c143, _c144, _c145, _c146, _c147, _c148, _c149, _c150, _c151, _c152, _c153, _c154, _c155, _c156, _c157, _c158, _c159, _c160, _c161, _c162, _c163, _c164, _c165, _c166, _c167, _c168, _c169, _c170, _c171, _c172, _c173, _c174, _c175, _c176, _c177, _c178, _c179, _c180, _c181, _c182, _c183, _c184, _c185, _c186, _c187, _c188, _c189, _c190, _c191, _c192, _c193, _c194, _c195, _c196, _c197, _c198, _c199, _c200, _c201;
__turbopack_context__.k.register(_c1, "Al");
__turbopack_context__.k.register(_c2, "Rr");
__turbopack_context__.k.register(_c3, "Vl");
__turbopack_context__.k.register(_c4, "Ll");
__turbopack_context__.k.register(_c5, "Fl");
__turbopack_context__.k.register(_c6, "Hl");
__turbopack_context__.k.register(_c7, "Wl");
__turbopack_context__.k.register(_c8, "Lo");
__turbopack_context__.k.register(_c9, "Gl");
__turbopack_context__.k.register(_c10, "Yl");
__turbopack_context__.k.register(_c11, "Xl");
__turbopack_context__.k.register(_c12, "Zl");
__turbopack_context__.k.register(_c13, "Ue");
__turbopack_context__.k.register(_c14, "Ht");
__turbopack_context__.k.register(_c15, "Ae");
__turbopack_context__.k.register(_c16, "Be");
__turbopack_context__.k.register(_c17, "Ko");
__turbopack_context__.k.register(_c18, "On");
__turbopack_context__.k.register(_c19, "Kt");
__turbopack_context__.k.register(_c20, "Gt");
__turbopack_context__.k.register(_c21, "Ca");
__turbopack_context__.k.register(_c22, "Go");
__turbopack_context__.k.register(_c23, "St");
__turbopack_context__.k.register(_c24, "Eu");
__turbopack_context__.k.register(_c25, "Es");
__turbopack_context__.k.register(_c26, "Xo");
__turbopack_context__.k.register(_c27, "Yt");
__turbopack_context__.k.register(_c28, "Ru");
__turbopack_context__.k.register(_c29, "Cu");
__turbopack_context__.k.register(_c30, "Oa");
__turbopack_context__.k.register(_c31, "Zo");
__turbopack_context__.k.register(_c32, "Ou");
__turbopack_context__.k.register(_c33, "Jo");
__turbopack_context__.k.register(_c34, "Ta");
__turbopack_context__.k.register(_c35, "Tu");
__turbopack_context__.k.register(_c36, "Xe");
__turbopack_context__.k.register(_c37, "Ia");
__turbopack_context__.k.register(_c38, "Iu");
__turbopack_context__.k.register(_c39, "Tn");
__turbopack_context__.k.register(_c40, "Bt");
__turbopack_context__.k.register(_c41, "Nu");
__turbopack_context__.k.register(_c42, "Au");
__turbopack_context__.k.register(_c43, "Ss");
__turbopack_context__.k.register(_c44, "Mu");
__turbopack_context__.k.register(_c45, "Du");
__turbopack_context__.k.register(_c46, "Vu");
__turbopack_context__.k.register(_c47, "Ne");
__turbopack_context__.k.register(_c48, "Bu");
__turbopack_context__.k.register(_c49, "Hu");
__turbopack_context__.k.register(_c50, "Na$d.forwardRef");
__turbopack_context__.k.register(_c51, "Na");
__turbopack_context__.k.register(_c52, "Aa$mr.forwardRef");
__turbopack_context__.k.register(_c53, "Aa");
__turbopack_context__.k.register(_c54, "Kn");
__turbopack_context__.k.register(_c55, "Pa");
__turbopack_context__.k.register(_c56, "Gu");
__turbopack_context__.k.register(_c57, "Rt");
__turbopack_context__.k.register(_c58, "Dt");
__turbopack_context__.k.register(_c59, "Yu");
__turbopack_context__.k.register(_c60, "Qo");
__turbopack_context__.k.register(_c61, "In");
__turbopack_context__.k.register(_c62, "Vt");
__turbopack_context__.k.register(_c63, "Xu");
__turbopack_context__.k.register(_c64, "Zu");
__turbopack_context__.k.register(_c65, "Si");
__turbopack_context__.k.register(_c66, "Je");
__turbopack_context__.k.register(_c67, "Ri");
__turbopack_context__.k.register(_c68, "Ha$d.forwardRef");
__turbopack_context__.k.register(_c69, "Ha");
__turbopack_context__.k.register(_c70, "Wa$d.forwardRef");
__turbopack_context__.k.register(_c71, "Wa");
__turbopack_context__.k.register(_c72, "Mf");
__turbopack_context__.k.register(_c73, "Df");
__turbopack_context__.k.register(_c74, "Vf");
__turbopack_context__.k.register(_c75, "Ut");
__turbopack_context__.k.register(_c76, "De");
__turbopack_context__.k.register(_c77, "Ot");
__turbopack_context__.k.register(_c78, "Ff");
__turbopack_context__.k.register(_c79, "Xa");
__turbopack_context__.k.register(_c80, "Dn");
__turbopack_context__.k.register(_c81, "Is");
__turbopack_context__.k.register(_c82, "Za");
__turbopack_context__.k.register(_c83, "Ja");
__turbopack_context__.k.register(_c84, "Qa");
__turbopack_context__.k.register(_c85, "Xt");
__turbopack_context__.k.register(_c86, "Oi");
__turbopack_context__.k.register(_c87, "Ti");
__turbopack_context__.k.register(_c88, "Et");
__turbopack_context__.k.register(_c89, "Ii");
__turbopack_context__.k.register(_c90, "Wf");
__turbopack_context__.k.register(_c91, "Gf");
__turbopack_context__.k.register(_c92, "Yf");
__turbopack_context__.k.register(_c93, "Kr");
__turbopack_context__.k.register(_c94, "Xf");
__turbopack_context__.k.register(_c95, "Gr");
__turbopack_context__.k.register(_c96, "Tr");
__turbopack_context__.k.register(_c97, "Vn");
__turbopack_context__.k.register(_c98, "Ze");
__turbopack_context__.k.register(_c99, "Ps");
__turbopack_context__.k.register(_c100, "Qr");
__turbopack_context__.k.register(_c101, "Ds");
__turbopack_context__.k.register(_c102, "Ni");
__turbopack_context__.k.register(_c103, "To");
__turbopack_context__.k.register(_c104, "Ed");
__turbopack_context__.k.register(_c105, "Sd");
__turbopack_context__.k.register(_c106, "Ls");
__turbopack_context__.k.register(_c107, "Rd");
__turbopack_context__.k.register(_c108, "Fs");
__turbopack_context__.k.register(_c109, "Cd");
__turbopack_context__.k.register(_c110, "Td");
__turbopack_context__.k.register(_c111, "Ec");
__turbopack_context__.k.register(_c112, "Ai");
__turbopack_context__.k.register(_c113, "Fn");
__turbopack_context__.k.register(_c114, "Sc");
__turbopack_context__.k.register(_c115, "Pd");
__turbopack_context__.k.register(_c116, "Cn");
__turbopack_context__.k.register(_c117, "Rc");
__turbopack_context__.k.register(_c118, "Md");
__turbopack_context__.k.register(_c119, "Dd");
__turbopack_context__.k.register(_c120, "Vd");
__turbopack_context__.k.register(_c121, "Ld");
__turbopack_context__.k.register(_c122, "Bd");
__turbopack_context__.k.register(_c123, "Hd");
__turbopack_context__.k.register(_c124, "Io");
__turbopack_context__.k.register(_c125, "Hs");
__turbopack_context__.k.register(_c126, "Cc");
__turbopack_context__.k.register(_c127, "Wd");
__turbopack_context__.k.register(_c128, "Oc");
__turbopack_context__.k.register(_c129, "Kd");
__turbopack_context__.k.register(_c130, "Ws");
__turbopack_context__.k.register(_c131, "Tc");
__turbopack_context__.k.register(_c132, "Ic");
__turbopack_context__.k.register(_c133, "Us");
__turbopack_context__.k.register(_c134, "Ks");
__turbopack_context__.k.register(_c135, "Eh");
__turbopack_context__.k.register(_c136, "Sh");
__turbopack_context__.k.register(_c137, "Rh");
__turbopack_context__.k.register(_c138, "Nh");
__turbopack_context__.k.register(_c139, "Ah");
__turbopack_context__.k.register(_c140, "Ph");
__turbopack_context__.k.register(_c141, "Lh");
__turbopack_context__.k.register(_c142, "Fh");
__turbopack_context__.k.register(_c143, "Bh");
__turbopack_context__.k.register(_c144, "Hh");
__turbopack_context__.k.register(_c145, "Ac");
__turbopack_context__.k.register(_c146, "Uh");
__turbopack_context__.k.register(_c147, "Pc");
__turbopack_context__.k.register(_c148, "Nr");
__turbopack_context__.k.register(_c149, "Qs");
__turbopack_context__.k.register(_c150, "Ar");
__turbopack_context__.k.register(_c151, "Mo");
__turbopack_context__.k.register(_c152, "Gh");
__turbopack_context__.k.register(_c153, "Yh");
__turbopack_context__.k.register(_c154, "Xh");
__turbopack_context__.k.register(_c155, "Jh");
__turbopack_context__.k.register(_c156, "Qh");
__turbopack_context__.k.register(_c157, "Pr");
__turbopack_context__.k.register(_c158, "Li$d.forwardRef");
__turbopack_context__.k.register(_c159, "Li");
__turbopack_context__.k.register(_c160, "Bc");
__turbopack_context__.k.register(_c161, "Sp");
__turbopack_context__.k.register(_c162, "Rp");
__turbopack_context__.k.register(_c163, "Hc$d.forwardRef");
__turbopack_context__.k.register(_c164, "Hc");
__turbopack_context__.k.register(_c165, "Mp");
__turbopack_context__.k.register(_c166, "Wc");
__turbopack_context__.k.register(_c167, "Dp");
__turbopack_context__.k.register(_c168, "Zn");
__turbopack_context__.k.register(_c169, "Do");
__turbopack_context__.k.register(_c170, "Vp");
__turbopack_context__.k.register(_c171, "Lp");
__turbopack_context__.k.register(_c172, "Pn");
__turbopack_context__.k.register(_c173, "Fp");
__turbopack_context__.k.register(_c174, "Bp");
__turbopack_context__.k.register(_c175, "Kc$d.forwardRef");
__turbopack_context__.k.register(_c176, "Kc");
__turbopack_context__.k.register(_c177, "Yc$d.forwardRef");
__turbopack_context__.k.register(_c178, "Yc");
__turbopack_context__.k.register(_c179, "Wp");
__turbopack_context__.k.register(_c180, "Up");
__turbopack_context__.k.register(_c181, "Kp");
__turbopack_context__.k.register(_c182, "Hi");
__turbopack_context__.k.register(_c183, "Zc");
__turbopack_context__.k.register(_c184, "Jp");
__turbopack_context__.k.register(_c185, "Jc");
__turbopack_context__.k.register(_c186, "Yi");
__turbopack_context__.k.register(_c187, "Em");
__turbopack_context__.k.register(_c188, "Sm");
__turbopack_context__.k.register(_c189, "Rm");
__turbopack_context__.k.register(_c190, "Am");
__turbopack_context__.k.register(_c191, "Pm");
__turbopack_context__.k.register(_c192, "Mm");
__turbopack_context__.k.register(_c193, "Dm");
__turbopack_context__.k.register(_c194, "Vm");
__turbopack_context__.k.register(_c195, "Lm");
__turbopack_context__.k.register(_c196, "El$d.forwardRef");
__turbopack_context__.k.register(_c197, "El");
__turbopack_context__.k.register(_c198, "Sl$d.forwardRef");
__turbopack_context__.k.register(_c199, "Sl");
__turbopack_context__.k.register(_c200, "Rl$d.forwardRef");
__turbopack_context__.k.register(_c201, "Rl");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/docs/components/ComponentPreview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComponentPreview",
    ()=>ComponentPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dist$2f$pine$2d$design$2d$system$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dist/pine-design-system.es.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ComponentPreview({ children, defaultDesign = "basic", defaultTheme = "light" }) {
    _s();
    const [design, setDesign] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultDesign);
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultTheme);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "not-prose my-6 rounded-lg border border-gray-200 dark:border-gray-800 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex flex-wrap items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium text-gray-600 dark:text-gray-400",
                        children: "Design:"
                    }, void 0, false, {
                        fileName: "[project]/docs/components/ComponentPreview.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    [
                        "basic",
                        "game",
                        "crayon"
                    ].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setDesign(d),
                            className: "rounded px-3 py-1 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 " + (design === d ? "bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"),
                            children: d
                        }, d, false, {
                            fileName: "[project]/docs/components/ComponentPreview.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-2 text-sm font-medium text-gray-600 dark:text-gray-400",
                        children: "Mode:"
                    }, void 0, false, {
                        fileName: "[project]/docs/components/ComponentPreview.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    [
                        "light",
                        "dark"
                    ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setTheme(t),
                            className: "rounded px-3 py-1 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 " + (theme === t ? "bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"),
                            children: t
                        }, t, false, {
                            fileName: "[project]/docs/components/ComponentPreview.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/docs/components/ComponentPreview.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dist$2f$pine$2d$design$2d$system$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
                design: design,
                theme: theme,
                syncWithSystem: false,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-h-[80px] rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4 flex flex-wrap items-center gap-3",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/docs/components/ComponentPreview.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/docs/components/ComponentPreview.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/docs/components/ComponentPreview.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(ComponentPreview, "JEg8+UbsuzsG03d/kMnD4801AFc=");
_c = ComponentPreview;
var _c;
__turbopack_context__.k.register(_c, "ComponentPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/docs/components/Demos.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BadgeDemo",
    ()=>BadgeDemo,
    "ButtonDemo",
    ()=>ButtonDemo,
    "CheckboxDemo",
    ()=>CheckboxDemo,
    "DropdownDemo",
    ()=>DropdownDemo,
    "IntroDemo",
    ()=>IntroDemo,
    "SwitchDemo",
    ()=>SwitchDemo,
    "TabDemo",
    ()=>TabDemo,
    "TextDemo",
    ()=>TextDemo,
    "TextFieldDemo",
    ()=>TextFieldDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dist$2f$pine$2d$design$2d$system$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dist/pine-design-system.es.js [app-client] (ecmascript)");
"use client";
;
;
function IntroDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dist$2f$pine$2d$design$2d$system$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "solid",
                intent: "primary",
                children: "Primary"
            }, void 0, false, {
                fileName: "[project]/docs/components/Demos.tsx",
                lineNumber: 17,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dist$2f$pine$2d$design$2d$system$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                intent: "secondary",
                children: "Secondary"
            }, void 0, false, {
                fileName: "[project]/docs/components/Demos.tsx",
                lineNumber: 20,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dist$2f$pine$2d$design$2d$system$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                intent: "success",
                children: "Success"
            }, void 0, false, {
                fileName: "[project]/docs/components/Demos.tsx",
                lineNumber: 23,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true);
}
_c = IntroDemo;
function ButtonDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dist$2f$pine$2d$design$2d$system$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "solid",
                intent: "primary",
                children: "Solid Primary"
            }, void 0, false, {
                fileName: "[project]/docs/components/Demos.tsx",
                lineNumber: 31,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dist$2f$pine$2d$design$2d$system$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                intent: "secondary",
                children: "Outline"
            }, void 0, false, {
                fileName: "[project]/docs/components/Demos.tsx",
                lineNumber: 34,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dist$2f$pine$2d$design$2d$system$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "ghost",
                intent: "neutral",
                children: "Ghost"
            }, void 0, false, {
                fileName: "[project]/docs/components/Demos.tsx",
                lineNumber: 37,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dist$2f$pine$2d$design$2d$system$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "weak",
                intent: "success",
                children: "Weak"
            }, void 0, false, {
                fileName: "[project]/docs/components/Demos.tsx",
                lineNumber: 40,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true);
}
_c1 = ButtonDemo;
function BadgeDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dist$2f$pine$2d$design$2d$system$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                intent: "primary",
                children: "Primary"
            }, void 0, false, {
                fileName: "[project]/docs/components/Demos.tsx",
                lineNumber: 50,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dist$2f$pine$2d$design$2d$system$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                intent: "success",
                variant: "outline",
                children: "Success"
            }, void 0, false, {
                fileName: "[project]/docs/components/Demos.tsx",
                lineNumber: 51,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dist$2f$pine$2d$design$2d$system$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                intent: "warning",
                showDot: true,
                children: "Warning"
            }, void 0, false, {
                fileName: "[project]/docs/components/Demos.tsx",
                lineNumber: 54,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dist$2f$pine$2d$design$2d$system$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                intent: "danger",
                variant: "subtle",
                children: "Danger"
            }, void 0, false, {
                fileName: "[project]/docs/components/Demos.tsx",
                lineNumber: 57,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true);
}
_c2 = BadgeDemo;
function CheckboxDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dist$2f$pine$2d$design$2d$system$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                defaultChecked: true
            }, void 0, false, {
                fileName: "[project]/docs/components/Demos.tsx",
                lineNumber: 67,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dist$2f$pine$2d$design$2d$system$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                label: "Label"
            }, void 0, false, {
                fileName: "[project]/docs/components/Demos.tsx",
                lineNumber: 68,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dist$2f$pine$2d$design$2d$system$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                label: "Disabled",
                disabled: true
            }, void 0, false, {
                fileName: "[project]/docs/components/Demos.tsx",
                lineNumber: 69,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true);
}
_c3 = CheckboxDemo;
function DropdownDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dist$2f$pine$2d$design$2d$system$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dropdown"], {
        options: [
            {
                value: "a",
                label: "Option A"
            },
            {
                value: "b",
                label: "Option B"
            },
            {
                value: "c",
                label: "Option C"
            }
        ],
        placeholder: "Select..."
    }, void 0, false, {
        fileName: "[project]/docs/components/Demos.tsx",
        lineNumber: 76,
        columnNumber: 3
    }, this);
}
_c4 = DropdownDemo;
function SwitchDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dist$2f$pine$2d$design$2d$system$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                defaultChecked: true
            }, void 0, false, {
                fileName: "[project]/docs/components/Demos.tsx",
                lineNumber: 90,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dist$2f$pine$2d$design$2d$system$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                label: "Label"
            }, void 0, false, {
                fileName: "[project]/docs/components/Demos.tsx",
                lineNumber: 91,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dist$2f$pine$2d$design$2d$system$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                intent: "success",
                defaultChecked: true
            }, void 0, false, {
                fileName: "[project]/docs/components/Demos.tsx",
                lineNumber: 92,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true);
}
_c5 = SwitchDemo;
function TabDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dist$2f$pine$2d$design$2d$system$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tab"], {
        tabs: [
            {
                value: "one",
                label: "One",
                content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Content for tab One."
                }, void 0, false, {
                    fileName: "[project]/docs/components/Demos.tsx",
                    lineNumber: 101,
                    columnNumber: 44
                }, void 0)
            },
            {
                value: "two",
                label: "Two",
                content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Content for tab Two."
                }, void 0, false, {
                    fileName: "[project]/docs/components/Demos.tsx",
                    lineNumber: 102,
                    columnNumber: 44
                }, void 0)
            },
            {
                value: "three",
                label: "Three",
                content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Content for tab Three."
                }, void 0, false, {
                    fileName: "[project]/docs/components/Demos.tsx",
                    lineNumber: 106,
                    columnNumber: 15
                }, void 0)
            }
        ]
    }, void 0, false, {
        fileName: "[project]/docs/components/Demos.tsx",
        lineNumber: 99,
        columnNumber: 3
    }, this);
}
_c6 = TabDemo;
function TextDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dist$2f$pine$2d$design$2d$system$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                as: "p",
                size: "medium",
                children: "Medium body"
            }, void 0, false, {
                fileName: "[project]/docs/components/Demos.tsx",
                lineNumber: 116,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dist$2f$pine$2d$design$2d$system$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                as: "p",
                size: "large",
                weight: "bold",
                children: "Large bold"
            }, void 0, false, {
                fileName: "[project]/docs/components/Demos.tsx",
                lineNumber: 119,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dist$2f$pine$2d$design$2d$system$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                as: "span",
                intent: "primary",
                children: "Primary intent"
            }, void 0, false, {
                fileName: "[project]/docs/components/Demos.tsx",
                lineNumber: 122,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true);
}
_c7 = TextDemo;
function TextFieldDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dist$2f$pine$2d$design$2d$system$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
                label: "Label",
                placeholder: "Placeholder"
            }, void 0, false, {
                fileName: "[project]/docs/components/Demos.tsx",
                lineNumber: 132,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dist$2f$pine$2d$design$2d$system$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
                label: "With helper",
                helperText: "Helper text below."
            }, void 0, false, {
                fileName: "[project]/docs/components/Demos.tsx",
                lineNumber: 133,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dist$2f$pine$2d$design$2d$system$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
                label: "Error",
                status: "error",
                helperText: "Error message."
            }, void 0, false, {
                fileName: "[project]/docs/components/Demos.tsx",
                lineNumber: 134,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true);
}
_c8 = TextFieldDemo;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "IntroDemo");
__turbopack_context__.k.register(_c1, "ButtonDemo");
__turbopack_context__.k.register(_c2, "BadgeDemo");
__turbopack_context__.k.register(_c3, "CheckboxDemo");
__turbopack_context__.k.register(_c4, "DropdownDemo");
__turbopack_context__.k.register(_c5, "SwitchDemo");
__turbopack_context__.k.register(_c6, "TabDemo");
__turbopack_context__.k.register(_c7, "TextDemo");
__turbopack_context__.k.register(_c8, "TextFieldDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_60c1f155._.js.map