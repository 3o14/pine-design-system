(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/stores/focused-route.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setFocusedRoute",
    ()=>setFocusedRoute,
    "useFocusedRoute",
    ()=>useFocusedRoute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.11_@types+react@19.2.7_react@19.2.3_use-sync-external-store@1.6.0_react@19.2.3_/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
"use no memo";
;
const useFocusedRouteStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])(()=>({
        focused: ""
    }));
const useFocusedRoute = ()=>useFocusedRouteStore({
        "useFocusedRoute.useFocusedRouteStore": (state)=>state.focused
    }["useFocusedRoute.useFocusedRouteStore"]);
const setFocusedRoute = (focused)=>{
    useFocusedRouteStore.setState({
        focused
    });
};
;
}),
"[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/stores/menu.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setMenu",
    ()=>setMenu,
    "useMenu",
    ()=>useMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.11_@types+react@19.2.7_react@19.2.3_use-sync-external-store@1.6.0_react@19.2.3_/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
"use no memo";
;
const useMenuStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])(()=>({
        hasMenu: false
    }));
const useMenu = ()=>useMenuStore({
        "useMenu.useMenuStore": (state)=>state.hasMenu
    }["useMenu.useMenuStore"]);
const setMenu = (fn)=>{
    useMenuStore.setState((state)=>{
        const hasMenu = typeof fn === "function" ? fn(state.hasMenu) : fn;
        document.documentElement.classList.toggle("x:max-md:overflow-hidden", hasMenu);
        return {
            hasMenu
        };
    });
};
;
}),
"[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/stores/active-anchor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setActiveSlug",
    ()=>setActiveSlug,
    "useActiveAnchor",
    ()=>useActiveAnchor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.11_@types+react@19.2.7_react@19.2.3_use-sync-external-store@1.6.0_react@19.2.3_/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
"use no memo";
;
const useActiveAnchorStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$11_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$3_$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])(()=>({
        activeSlug: ""
    }));
const useActiveAnchor = ()=>useActiveAnchorStore({
        "useActiveAnchor.useActiveAnchorStore": (state)=>state.activeSlug
    }["useActiveAnchor.useActiveAnchorStore"]);
const setActiveSlug = (activeSlug)=>{
    useActiveAnchorStore.setState({
        activeSlug
    });
};
;
}),
"[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/stores/config.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConfigProvider",
    ()=>ConfigProvider,
    "useConfig",
    ()=>useConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$1$2e$0$2d$rc$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-compiler-runtime@19.1.0-rc.3_react@19.2.3/node_modules/react-compiler-runtime/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$hooks$2f$use$2d$fs$2d$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra@4.6.1_next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3_797f4d292f15a1c4efb97c3ff30eb7ba/node_modules/nextra/dist/client/hooks/use-fs-route.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$normalize$2d$pages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra@4.6.1_next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3_797f4d292f15a1c4efb97c3ff30eb7ba/node_modules/nextra/dist/client/normalize-pages.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const ConfigContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useConfig() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$1$2e$0$2d$rc$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    const normalizePagesResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ConfigContext);
    if (!normalizePagesResult) {
        throw new Error("Missing ConfigContext.Provider");
    }
    const { activeThemeContext, activeType } = normalizePagesResult;
    const t0 = !activeThemeContext.sidebar || activeType === "page";
    let t1;
    if ($[0] !== normalizePagesResult || $[1] !== t0) {
        t1 = {
            normalizePagesResult,
            hideSidebar: t0
        };
        $[0] = normalizePagesResult;
        $[1] = t0;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
const ConfigProvider = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$1$2e$0$2d$rc$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    const { children, pageMap, navbar, footer } = t0;
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$hooks$2f$use$2d$fs$2d$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFSRoute"])();
    let t1;
    if ($[0] !== pageMap || $[1] !== pathname) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$normalize$2d$pages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizePages"])({
            list: pageMap,
            route: pathname
        });
        $[0] = pageMap;
        $[1] = pathname;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const normalizedPages = t1;
    const { activeThemeContext } = normalizedPages;
    const t2 = activeThemeContext.navbar && navbar;
    const t3 = activeThemeContext.footer && footer;
    let t4;
    if ($[3] !== children || $[4] !== normalizedPages || $[5] !== t2 || $[6] !== t3) {
        t4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(ConfigContext.Provider, {
            value: normalizedPages,
            children: [
                t2,
                children,
                t3
            ]
        });
        $[3] = children;
        $[4] = normalizedPages;
        $[5] = t2;
        $[6] = t3;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    return t4;
};
;
}),
"[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/stores/theme-config.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeConfigProvider",
    ()=>ThemeConfigProvider,
    "useThemeConfig",
    ()=>useThemeConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
const ThemeConfigContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const useThemeConfig = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeConfigContext);
};
const ThemeConfigProvider = (props)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(ThemeConfigContext.Provider, props);
;
}),
"[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/stores/toc.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TOCProvider",
    ()=>TOCProvider,
    "useTOC",
    ()=>useTOC
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use no memo";
"use client";
;
const TOCContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])([]);
const useTOC = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(TOCContext);
const TOCProvider = (props)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(TOCContext.Provider, props);
;
}),
"[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/components/locale-switch.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocaleSwitch",
    ()=>LocaleSwitch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$1$2e$0$2d$rc$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-compiler-runtime@19.1.0-rc.3_react@19.2.3/node_modules/react-compiler-runtime/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$add$2d$base$2d$path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra@4.6.1_next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3_797f4d292f15a1c4efb97c3ff30eb7ba/node_modules/nextra/dist/client/components/select.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ReactComponent__as__GlobeIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra@4.6.1_next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3_797f4d292f15a1c4efb97c3ff30eb7ba/node_modules/nextra/dist/client/icons/globe.js [app-client] (ecmascript) <export ReactComponent as GlobeIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$theme$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/stores/theme-config.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const ONE_YEAR = 365 * 24 * 60 * 60 * 1e3;
const LocaleSwitch = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$1$2e$0$2d$rc$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    const { lite, className } = t0;
    const { i18n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$theme$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeConfig"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    if (!i18n.length) {
        return null;
    }
    let t1;
    if ($[0] !== pathname) {
        t1 = pathname.split("/", 2);
        $[0] = pathname;
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [, locale] = t1;
    let t2;
    if ($[2] !== className) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("x:flex x:items-center x:gap-2", className);
        $[2] = className;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== locale || $[5] !== pathname) {
        t3 = (lang)=>{
            const date = new Date(Date.now() + ONE_YEAR);
            document.cookie = `NEXT_LOCALE=${lang}; expires=${date.toUTCString()}; path=/`;
            location.href = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$add$2d$base$2d$path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addBasePath"])(pathname.replace(`/${locale}`, `/${lang}`));
        };
        $[4] = locale;
        $[5] = pathname;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ReactComponent__as__GlobeIcon$3e$__["GlobeIcon"], {
            height: "12"
        });
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== i18n || $[9] !== lite || $[10] !== locale) {
        t5 = !lite && i18n.find((l)=>locale === l.locale)?.name;
        $[8] = i18n;
        $[9] = lite;
        $[10] = locale;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== t5) {
        t6 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t4,
                t5
            ]
        });
        $[12] = t5;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== i18n) {
        t7 = i18n.map(_temp);
        $[14] = i18n;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== locale || $[17] !== t2 || $[18] !== t3 || $[19] !== t6 || $[20] !== t7) {
        t8 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            title: "Change language",
            className: t2,
            onChange: t3,
            value: locale,
            selectedOption: t6,
            options: t7
        });
        $[16] = locale;
        $[17] = t2;
        $[18] = t3;
        $[19] = t6;
        $[20] = t7;
        $[21] = t8;
    } else {
        t8 = $[21];
    }
    return t8;
};
function _temp(l_0) {
    return {
        id: l_0.locale,
        name: l_0.name
    };
}
;
}),
"[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/components/theme-switch.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeSwitch",
    ()=>ThemeSwitch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$1$2e$0$2d$rc$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-compiler-runtime@19.1.0-rc.3_react@19.2.3/node_modules/react-compiler-runtime/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$themes$40$0$2e$4$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-themes@0.4.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra@4.6.1_next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3_797f4d292f15a1c4efb97c3ff30eb7ba/node_modules/nextra/dist/client/components/select.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$hooks$2f$use$2d$mounted$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra@4.6.1_next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3_797f4d292f15a1c4efb97c3ff30eb7ba/node_modules/nextra/dist/client/hooks/use-mounted.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ReactComponent__as__MoonIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra@4.6.1_next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3_797f4d292f15a1c4efb97c3ff30eb7ba/node_modules/nextra/dist/client/icons/moon.js [app-client] (ecmascript) <export ReactComponent as MoonIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ReactComponent__as__SunIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra@4.6.1_next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3_797f4d292f15a1c4efb97c3ff30eb7ba/node_modules/nextra/dist/client/icons/sun.js [app-client] (ecmascript) <export ReactComponent as SunIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$theme$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/stores/theme-config.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const ThemeSwitch = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$1$2e$0$2d$rc$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    const { lite, className } = t0;
    const { setTheme, resolvedTheme, theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$themes$40$0$2e$4$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const mounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$hooks$2f$use$2d$mounted$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMounted"])();
    const { darkMode, themeSwitch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$theme$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeConfig"])();
    if (!darkMode) {
        return null;
    }
    const IconToUse = mounted && resolvedTheme === "dark" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ReactComponent__as__MoonIcon$3e$__["MoonIcon"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ReactComponent__as__SunIcon$3e$__["SunIcon"];
    const id = mounted ? theme : "light";
    let t1;
    if ($[0] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("x:flex x:items-center x:gap-2", className);
        $[0] = className;
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== themeSwitch.light) {
        t2 = {
            id: "light",
            name: themeSwitch.light
        };
        $[2] = themeSwitch.light;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== themeSwitch.dark) {
        t3 = {
            id: "dark",
            name: themeSwitch.dark
        };
        $[4] = themeSwitch.dark;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== themeSwitch.system) {
        t4 = {
            id: "system",
            name: themeSwitch.system
        };
        $[6] = themeSwitch.system;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== t2 || $[9] !== t3 || $[10] !== t4) {
        t5 = [
            t2,
            t3,
            t4
        ];
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== IconToUse) {
        t6 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(IconToUse, {
            height: "12"
        });
        $[12] = IconToUse;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    const t7 = !lite && themeSwitch[id];
    let t8;
    if ($[14] !== t6 || $[15] !== t7) {
        t8 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t6,
                t7
            ]
        });
        $[14] = t6;
        $[15] = t7;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] !== id || $[18] !== setTheme || $[19] !== t1 || $[20] !== t5 || $[21] !== t8) {
        t9 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            className: t1,
            title: "Change theme",
            options: t5,
            onChange: setTheme,
            value: id,
            selectedOption: t8
        });
        $[17] = id;
        $[18] = setTheme;
        $[19] = t1;
        $[20] = t5;
        $[21] = t8;
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    return t9;
};
;
}),
"[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/components/sidebar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileNav",
    ()=>MobileNav,
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$1$2e$0$2d$rc$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-compiler-runtime@19.1.0-rc.3_react@19.2.3/node_modules/react-compiler-runtime/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$mdx$2d$components$2f$anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra@4.6.1_next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3_797f4d292f15a1c4efb97c3ff30eb7ba/node_modules/nextra/dist/client/mdx-components/anchor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra@4.6.1_next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3_797f4d292f15a1c4efb97c3ff30eb7ba/node_modules/nextra/dist/client/components/button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$collapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra@4.6.1_next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3_797f4d292f15a1c4efb97c3ff30eb7ba/node_modules/nextra/dist/client/components/collapse.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$hooks$2f$use$2d$fs$2d$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra@4.6.1_next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3_797f4d292f15a1c4efb97c3ff30eb7ba/node_modules/nextra/dist/client/hooks/use-fs-route.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$hooks$2f$use$2d$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra@4.6.1_next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3_797f4d292f15a1c4efb97c3ff30eb7ba/node_modules/nextra/dist/client/hooks/use-hash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ReactComponent__as__ArrowRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra@4.6.1_next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3_797f4d292f15a1c4efb97c3ff30eb7ba/node_modules/nextra/dist/client/icons/arrow-right.js [app-client] (ecmascript) <export ReactComponent as ArrowRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$icons$2f$expand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ReactComponent__as__ExpandIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra@4.6.1_next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3_797f4d292f15a1c4efb97c3ff30eb7ba/node_modules/nextra/dist/client/icons/expand.js [app-client] (ecmascript) <export ReactComponent as ExpandIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$scroll$2d$into$2d$view$2d$if$2d$needed$40$3$2e$1$2e$0$2f$node_modules$2f$scroll$2d$into$2d$view$2d$if$2d$needed$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/scroll-into-view-if-needed@3.1.0/node_modules/scroll-into-view-if-needed/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$focused$2d$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/stores/focused-route.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/stores/menu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$active$2d$anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/stores/active-anchor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/stores/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$theme$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/stores/theme-config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$toc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/stores/toc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$components$2f$locale$2d$switch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/components/locale-switch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$components$2f$theme$2d$switch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/components/theme-switch.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
const TreeState = /* @__PURE__ */ Object.create(null);
const classes = {
    link: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("x:flex x:rounded x:px-2 x:py-1.5 x:text-sm x:transition-colors x:[word-break:break-word]", "x:cursor-pointer x:contrast-more:border"),
    inactive: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("x:text-gray-600 x:hover:bg-gray-100 x:hover:text-gray-900", "x:dark:text-neutral-400 x:dark:hover:bg-primary-100/5 x:dark:hover:text-gray-50", "x:contrast-more:text-gray-900 x:contrast-more:dark:text-gray-50", "x:contrast-more:border-transparent x:contrast-more:hover:border-gray-900 x:contrast-more:dark:hover:border-gray-50"),
    active: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("x:bg-primary-100 x:font-semibold x:text-primary-800 x:dark:bg-primary-400/10 x:dark:text-primary-600", "x:contrast-more:border-primary-500!"),
    list: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("x:grid x:gap-1"),
    border: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("x:relative x:before:absolute x:before:inset-y-1", 'x:before:w-px x:before:bg-gray-200 x:before:content-[""] x:dark:before:bg-neutral-800', "x:ps-3 x:before:start-0 x:pt-1 x:ms-3"),
    wrapper: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("x:p-4 x:overflow-y-auto nextra-scrollbar nextra-mask"),
    footer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("nextra-sidebar-footer x:border-t nextra-border x:flex x:items-center x:gap-2 x:py-4 x:mx-4")
};
const Folder = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$1$2e$0$2d$rc$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    const { item: _item, anchors, onFocus, level } = t0;
    const routeOriginal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$hooks$2f$use$2d$fs$2d$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFSRoute"])();
    let t1;
    if ($[0] !== routeOriginal) {
        t1 = routeOriginal.split("#", 1);
        $[0] = routeOriginal;
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const route = t1[0];
    let t2;
    if ($[2] !== _item) {
        t2 = _item.type === "menu" ? getMenuChildren(_item) : _item.children;
        $[2] = _item;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const item = {
        ..._item,
        children: t2
    };
    const hasRoute = !!item.route;
    const active = hasRoute && [
        route,
        route + "/"
    ].includes(item.route + "/");
    const activeRouteInside = active || hasRoute && route.startsWith(item.route + "/");
    const focusedRoute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$focused$2d$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusedRoute"])();
    const focusedRouteInside = focusedRoute.startsWith(item.route + "/");
    const { theme } = item;
    const { defaultMenuCollapseLevel, autoCollapse } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$theme$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeConfig"])().sidebar;
    const open = TreeState[item.route] === void 0 ? active || activeRouteInside || focusedRouteInside || (theme && "collapsed" in theme ? !theme.collapsed : level < defaultMenuCollapseLevel) : TreeState[item.route] || focusedRouteInside;
    const [, rerender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const handleClick2 = (event)=>{
        const el = event.currentTarget;
        const isClickOnIcon = el !== event.target;
        if (isClickOnIcon) {
            event.preventDefault();
        }
        const isOpen = el.parentElement.classList.contains("open");
        TreeState[item.route] = isLink && !isClickOnIcon && !active || !isOpen;
        rerender({});
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Folder.useEffect": ()=>{
            const updateTreeState = function updateTreeState2() {
                if (activeRouteInside || focusedRouteInside) {
                    TreeState[item.route] = true;
                }
            };
            const updateAndPruneTreeState = function updateAndPruneTreeState2() {
                if (activeRouteInside && focusedRouteInside) {
                    TreeState[item.route] = true;
                } else {
                    delete TreeState[item.route];
                }
            };
            if (autoCollapse) {
                updateAndPruneTreeState();
            } else {
                updateTreeState();
            }
        }
    }["Folder.useEffect"], [
        activeRouteInside,
        focusedRouteInside,
        item.route,
        autoCollapse
    ]);
    const isLink = "frontMatter" in item;
    const ComponentToUse = isLink ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$mdx$2d$components$2f$anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Anchor"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"];
    const t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        open,
        active
    });
    const t4 = !isLink && "x:text-start x:w-full";
    const t5 = active ? classes.active : classes.inactive;
    let t6;
    if ($[4] !== t4 || $[5] !== t5) {
        t6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("x:items-center x:justify-between x:gap-2", t4, classes.link, t5);
        $[4] = t4;
        $[5] = t5;
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    const t7 = item.title;
    const T0 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ReactComponent__as__ArrowRightIcon$3e$__["ArrowRightIcon"];
    const t8 = "18";
    const t9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("x:shrink-0", "x:rounded-sm x:p-0.5 x:hover:bg-gray-800/5 x:dark:hover:bg-gray-100/5", "x:motion-reduce:transition-none x:origin-center x:transition-all x:rtl:-rotate-180", open && "x:ltr:rotate-90 x:rtl:-rotate-270");
    let t10;
    if ($[7] !== T0 || $[8] !== t9) {
        t10 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(T0, {
            height: t8,
            className: t9
        });
        $[7] = T0;
        $[8] = t9;
        $[9] = t10;
    } else {
        t10 = $[9];
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("li", {
        className: t3,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(ComponentToUse, {
                ...isLink ? {
                    href: item.route,
                    prefetch: false
                } : {
                    "data-href": item.route
                },
                className: t6,
                onClick: handleClick2,
                onFocus,
                children: [
                    t7,
                    t10
                ]
            }),
            item.children && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$collapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Collapse"], {
                isOpen: open,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Menu, {
                    className: classes.border,
                    directories: item.children,
                    anchors,
                    level
                })
            })
        ]
    });
};
function getMenuChildren(menu) {
    const routes = Object.fromEntries((menu.children || []).map((route)=>[
            route.name,
            route
        ]));
    return Object.entries(menu.items || {}).map(([key, item])=>({
            ...routes[key] || {
                name: key
            },
            ...item
        }));
}
const Separator = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$1$2e$0$2d$rc$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    const { title } = t0;
    const t1 = title ? "x:not-first:mt-5 x:mb-2 x:px-2 x:py-1.5 x:text-sm x:font-semibold x:text-gray-900 x:dark:text-gray-100" : "x:my-4";
    let t2;
    if ($[0] !== t1) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("[word-break:break-word]", t1);
        $[0] = t1;
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] !== title) {
        t3 = title || /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("hr", {
            className: "x:mx-2 x:border-t nextra-border"
        });
        $[2] = title;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== t2 || $[5] !== t3) {
        t4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("li", {
            className: t2,
            children: t3
        });
        $[4] = t2;
        $[5] = t3;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    return t4;
};
const handleClick = ()=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setMenu"])(false);
};
const File = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$1$2e$0$2d$rc$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    const { item, anchors, onFocus } = t0;
    const route = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$hooks$2f$use$2d$fs$2d$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFSRoute"])();
    let t1;
    if ($[0] !== item.route || $[1] !== route) {
        t1 = item.route && [
            route,
            route + "/"
        ].includes(item.route + "/");
        $[0] = item.route;
        $[1] = route;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const active = t1;
    const activeSlug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$active$2d$anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActiveAnchor"])();
    if (item.type === "separator") {
        let t22;
        if ($[3] !== item.title) {
            t22 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Separator, {
                title: item.title
            });
            $[3] = item.title;
            $[4] = t22;
        } else {
            t22 = $[4];
        }
        return t22;
    }
    const href = item.href || item.route;
    let t2;
    if ($[5] !== active) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            active
        });
        $[5] = active;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    const t3 = active ? classes.active : classes.inactive;
    let t4;
    if ($[7] !== t3) {
        t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.link, t3);
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== href || $[10] !== item.title || $[11] !== onFocus || $[12] !== t4) {
        t5 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$mdx$2d$components$2f$anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Anchor"], {
            href,
            className: t4,
            onFocus,
            prefetch: false,
            children: item.title
        });
        $[9] = href;
        $[10] = item.title;
        $[11] = onFocus;
        $[12] = t4;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    let t6;
    if ($[14] !== active || $[15] !== activeSlug || $[16] !== anchors) {
        t6 = active && anchors.length > 0 && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("ul", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.list, classes.border),
            children: anchors.map((t72)=>{
                const { id, value } = t72;
                return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("li", {
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("a", {
                        href: `#${id}`,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.link, 'x:focus-visible:nextra-focus x:flex x:gap-2 x:before:opacity-25 x:before:content-["#"]', id === activeSlug ? classes.active : classes.inactive),
                        onClick: handleClick,
                        children: value
                    })
                }, id);
            })
        });
        $[14] = active;
        $[15] = activeSlug;
        $[16] = anchors;
        $[17] = t6;
    } else {
        t6 = $[17];
    }
    let t7;
    if ($[18] !== t2 || $[19] !== t5 || $[20] !== t6) {
        t7 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("li", {
            className: t2,
            children: [
                t5,
                t6
            ]
        });
        $[18] = t2;
        $[19] = t5;
        $[20] = t6;
        $[21] = t7;
    } else {
        t7 = $[21];
    }
    return t7;
};
const handleFocus = (event)=>{
    const route = event.target.getAttribute("href") || event.target.dataset.href || "";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$focused$2d$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setFocusedRoute"])(route);
};
const Menu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((t0, forwardedRef)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$1$2e$0$2d$rc$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    const { directories, anchors, className, level } = t0;
    let t1;
    if ($[0] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.list, className);
        $[0] = className;
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== anchors || $[3] !== directories || $[4] !== level) {
        let t32;
        if ($[6] !== anchors || $[7] !== level) {
            t32 = (item)=>{
                const ComponentToUse = item.type === "menu" || item.children?.length ? Folder : File;
                return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ComponentToUse, {
                    item,
                    anchors,
                    onFocus: handleFocus,
                    level: level + 1
                }, item.name);
            };
            $[6] = anchors;
            $[7] = level;
            $[8] = t32;
        } else {
            t32 = $[8];
        }
        t2 = directories.map(t32);
        $[2] = anchors;
        $[3] = directories;
        $[4] = level;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[9] !== forwardedRef || $[10] !== t1 || $[11] !== t2) {
        t3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("ul", {
            className: t1,
            ref: forwardedRef,
            children: t2
        });
        $[9] = forwardedRef;
        $[10] = t1;
        $[11] = t2;
        $[12] = t3;
    } else {
        t3 = $[12];
    }
    return t3;
});
Menu.displayName = "Menu";
const MobileNav = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$1$2e$0$2d$rc$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    const { directories } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])().normalizePagesResult;
    const toc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$toc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTOC"])();
    const menu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMenu"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$hooks$2f$use$2d$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHash"])();
    let t0;
    if ($[0] !== hash || $[1] !== pathname) {
        t0 = [
            pathname,
            hash
        ];
        $[0] = hash;
        $[1] = pathname;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(_temp, t0);
    let t1;
    if ($[3] !== toc) {
        t1 = toc.filter(_temp2);
        $[3] = toc;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const anchors = t1;
    const sidebarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t2;
    let t3;
    if ($[5] !== menu) {
        t2 = ()=>{
            const sidebar = sidebarRef.current;
            const activeLink = sidebar.querySelector("li.active");
            if (activeLink && menu) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$scroll$2d$into$2d$view$2d$if$2d$needed$40$3$2e$1$2e$0$2f$node_modules$2f$scroll$2d$into$2d$view$2d$if$2d$needed$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(activeLink, {
                    block: "center",
                    inline: "center",
                    scrollMode: "always",
                    boundary: sidebar.parentNode
                });
            }
        };
        t3 = [
            menu
        ];
        $[5] = menu;
        $[6] = t2;
        $[7] = t3;
    } else {
        t2 = $[6];
        t3 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    const themeConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$theme$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeConfig"])();
    const hasI18n = themeConfig.i18n.length > 0;
    const hasMenu = themeConfig.darkMode || hasI18n;
    const t4 = menu ? "x:[transform:translate3d(0,0,0)]" : "x:[transform:translate3d(0,-100%,0)]";
    let t5;
    if ($[8] !== t4) {
        t5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("nextra-mobile-nav", "x:flex x:flex-col", "x:fixed x:inset-0 x:pt-(--nextra-navbar-height) x:z-20 x:overscroll-contain", "x:[contain:layout_style]", "x:md:hidden", "x:[.nextra-banner:not([class$=hidden])~&]:pt-[calc(var(--nextra-banner-height)+var(--nextra-navbar-height))]", "x:bg-nextra-bg", t4);
        $[8] = t4;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== themeConfig.search) {
        t6 = themeConfig.search && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: "x:px-4 x:pt-4",
            children: themeConfig.search
        });
        $[10] = themeConfig.search;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== anchors || $[13] !== directories) {
        t7 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Menu, {
            ref: sidebarRef,
            className: classes.wrapper,
            directories,
            anchors,
            level: 0
        });
        $[12] = anchors;
        $[13] = directories;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== hasMenu) {
        t8 = hasMenu && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.footer, "x:mt-auto"),
            children: [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$components$2f$theme$2d$switch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeSwitch"], {
                    className: "x:grow"
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$components$2f$locale$2d$switch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocaleSwitch"], {
                    className: "x:grow x:justify-end"
                })
            ]
        });
        $[15] = hasMenu;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] !== t5 || $[18] !== t6 || $[19] !== t7 || $[20] !== t8) {
        t9 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("aside", {
            className: t5,
            children: [
                t6,
                t7,
                t8
            ]
        });
        $[17] = t5;
        $[18] = t6;
        $[19] = t7;
        $[20] = t8;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    return t9;
};
let lastScrollPosition = 0;
const handleScrollEnd = (event)=>{
    lastScrollPosition = event.currentTarget.scrollTop;
};
const Sidebar = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$1$2e$0$2d$rc$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(36);
    const toc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$toc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTOC"])();
    const { normalizePagesResult, hideSidebar } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])();
    const themeConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$theme$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeConfig"])();
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(themeConfig.sidebar.defaultOpen);
    const [showToggleAnimation, setToggleAnimation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const sidebarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sidebarControlsId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const { docsDirectories, activeThemeContext } = normalizePagesResult;
    const includePlaceholder = activeThemeContext.layout === "default";
    let t0;
    let t1;
    if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ()=>{
            if (window.innerWidth < 768) {
                return;
            }
            const sidebar = sidebarRef.current;
            if (lastScrollPosition) {
                sidebar.scrollTop = lastScrollPosition;
                return;
            }
            const activeLink = sidebar.querySelector("li.active");
            if (activeLink) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$scroll$2d$into$2d$view$2d$if$2d$needed$40$3$2e$1$2e$0$2f$node_modules$2f$scroll$2d$into$2d$view$2d$if$2d$needed$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(activeLink, {
                    block: "center",
                    inline: "center",
                    scrollMode: "always",
                    boundary: sidebar.parentNode
                });
            }
        };
        t1 = [];
        $[0] = t0;
        $[1] = t1;
    } else {
        t0 = $[0];
        t1 = $[1];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[2] !== themeConfig.toc.float || $[3] !== toc) {
        t2 = themeConfig.toc.float ? [] : toc.filter(_temp3);
        $[2] = themeConfig.toc.float;
        $[3] = toc;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const anchors = t2;
    const hasI18n = themeConfig.i18n.length > 0;
    const hasMenu = themeConfig.darkMode || hasI18n || themeConfig.sidebar.toggleButton;
    let t3;
    if ($[5] !== hideSidebar || $[6] !== includePlaceholder) {
        t3 = includePlaceholder && hideSidebar && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: "x:max-xl:hidden x:h-0 x:w-64 x:shrink-0"
        });
        $[5] = hideSidebar;
        $[6] = includePlaceholder;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const t4 = isExpanded ? "x:w-64" : "x:w-20";
    const t5 = hideSidebar ? "x:hidden" : "x:sticky";
    let t6;
    if ($[8] !== t4 || $[9] !== t5) {
        t6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("nextra-sidebar x:print:hidden", "x:transition-all x:ease-in-out", "x:max-md:hidden x:flex x:flex-col", "x:h-[calc(100dvh-var(--nextra-navbar-height))]", "x:top-(--nextra-navbar-height) x:shrink-0", t4, t5);
        $[8] = t4;
        $[9] = t5;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    const t7 = !isExpanded && "no-scrollbar";
    let t8;
    if ($[11] !== t7) {
        t8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.wrapper, "x:grow", t7);
        $[11] = t7;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== anchors || $[14] !== docsDirectories || $[15] !== hideSidebar || $[16] !== isExpanded) {
        t9 = (!hideSidebar || !isExpanded) && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$collapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Collapse"], {
            isOpen: isExpanded,
            horizontal: true,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Menu, {
                directories: docsDirectories,
                anchors,
                level: 0
            })
        });
        $[13] = anchors;
        $[14] = docsDirectories;
        $[15] = hideSidebar;
        $[16] = isExpanded;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== t8 || $[19] !== t9) {
        t10 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: t8,
            ref: sidebarRef,
            onScrollEnd: handleScrollEnd,
            children: t9
        });
        $[18] = t8;
        $[19] = t9;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] !== hasI18n || $[22] !== hasMenu || $[23] !== isExpanded || $[24] !== showToggleAnimation || $[25] !== sidebarControlsId || $[26] !== themeConfig.sidebar.toggleButton) {
        t11 = hasMenu && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("x:sticky x:bottom-0 x:bg-nextra-bg", classes.footer, !isExpanded && "x:flex-wrap x:justify-center", showToggleAnimation && [
                "x:*:opacity-0",
                isExpanded ? "x:*:animate-[fade-in_1s_ease_.2s_forwards]" : "x:*:animate-[fade-in2_1s_ease_.2s_forwards]"
            ]),
            children: [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$components$2f$locale$2d$switch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocaleSwitch"], {
                    lite: !isExpanded,
                    className: isExpanded ? "x:grow" : ""
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$components$2f$theme$2d$switch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeSwitch"], {
                    lite: !isExpanded || hasI18n,
                    className: !isExpanded || hasI18n ? "" : "x:grow"
                }),
                themeConfig.sidebar.toggleButton && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    "aria-expanded": isExpanded,
                    "aria-controls": sidebarControlsId,
                    title: isExpanded ? "Collapse sidebar" : "Expand sidebar",
                    className: _temp4,
                    onClick: ()=>{
                        setIsExpanded(_temp5);
                        setToggleAnimation(true);
                    },
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$icons$2f$expand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ReactComponent__as__ExpandIcon$3e$__["ExpandIcon"], {
                        height: "12",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(!isExpanded && "x:*:first:origin-[35%] x:*:first:rotate-180")
                    })
                })
            ]
        });
        $[21] = hasI18n;
        $[22] = hasMenu;
        $[23] = isExpanded;
        $[24] = showToggleAnimation;
        $[25] = sidebarControlsId;
        $[26] = themeConfig.sidebar.toggleButton;
        $[27] = t11;
    } else {
        t11 = $[27];
    }
    let t12;
    if ($[28] !== sidebarControlsId || $[29] !== t10 || $[30] !== t11 || $[31] !== t6) {
        t12 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("aside", {
            id: sidebarControlsId,
            className: t6,
            children: [
                t10,
                t11
            ]
        });
        $[28] = sidebarControlsId;
        $[29] = t10;
        $[30] = t11;
        $[31] = t6;
        $[32] = t12;
    } else {
        t12 = $[32];
    }
    let t13;
    if ($[33] !== t12 || $[34] !== t3) {
        t13 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t3,
                t12
            ]
        });
        $[33] = t12;
        $[34] = t3;
        $[35] = t13;
    } else {
        t13 = $[35];
    }
    return t13;
};
function _temp() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setMenu"])(false);
}
function _temp2(v) {
    return v.depth === 2;
}
function _temp3(v) {
    return v.depth === 2;
}
function _temp4(t0) {
    const { hover } = t0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("x:rounded-md x:p-2", hover ? "x:bg-gray-200 x:text-gray-900 x:dark:bg-primary-100/5 x:dark:text-gray-50" : "x:text-gray-600 x:dark:text-gray-400");
}
function _temp5(prev) {
    return !prev;
}
;
}),
"[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/components/last-updated.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LastUpdated",
    ()=>LastUpdated
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$1$2e$0$2d$rc$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-compiler-runtime@19.1.0-rc.3_react@19.2.3/node_modules/react-compiler-runtime/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$theme$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/stores/theme-config.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const LastUpdated = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$1$2e$0$2d$rc$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    const { date, children: t1, locale: t2 } = t0;
    const children = t1 === void 0 ? "Last updated on" : t1;
    const locale = t2 === void 0 ? "en" : t2;
    const { i18n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$theme$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeConfig"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    if (!date) {
        return null;
    }
    let t3;
    if ($[0] !== i18n.length || $[1] !== locale || $[2] !== pathname) {
        t3 = i18n.length ? pathname.split("/", 2)[1] : locale;
        $[0] = i18n.length;
        $[1] = locale;
        $[2] = pathname;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const dateLocale = t3;
    let t4;
    if ($[4] !== date) {
        t4 = date.toISOString();
        $[4] = date;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== date || $[7] !== dateLocale) {
        t5 = date.toLocaleDateString(dateLocale, {
            day: "numeric",
            month: "long",
            year: "numeric"
        });
        $[6] = date;
        $[7] = dateLocale;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== t4 || $[10] !== t5) {
        t6 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("time", {
            dateTime: t4,
            suppressHydrationWarning: true,
            children: t5
        });
        $[9] = t4;
        $[10] = t5;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== children || $[13] !== t6) {
        t7 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                children,
                " ",
                t6
            ]
        });
        $[12] = children;
        $[13] = t6;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    return t7;
};
;
}),
"[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/mdx-components/heading-anchor.client.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeadingAnchor",
    ()=>HeadingAnchor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$1$2e$0$2d$rc$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-compiler-runtime@19.1.0-rc.3_react@19.2.3/node_modules/react-compiler-runtime/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$active$2d$anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/stores/active-anchor.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const callback = (entries)=>{
    const entry = entries.find((entry2)=>entry2.isIntersecting);
    if (entry) {
        const slug = entry.target.hash.slice(1);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$active$2d$anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setActiveSlug"])(decodeURI(slug));
    }
};
const observer = typeof window === "undefined" ? null : new IntersectionObserver(callback, {
    rootMargin: `-${getComputedStyle(document.body).getPropertyValue("--nextra-navbar-height") || // can be '' on 404 page
    "0%"} 0% -80%`
});
const HeadingAnchor = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$1$2e$0$2d$rc$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    const { id } = t0;
    const anchorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    let t2;
    if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ()=>{
            const el = anchorRef.current;
            observer.observe(el);
            return ()=>{
                observer.unobserve(el);
            };
        };
        t2 = [];
        $[0] = t1;
        $[1] = t2;
    } else {
        t1 = $[0];
        t2 = $[1];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    const t3 = `#${id}`;
    let t4;
    if ($[2] !== t3) {
        t4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("a", {
            href: t3,
            className: "x:focus-visible:nextra-focus subheading-anchor",
            "aria-label": "Permalink for this section",
            ref: anchorRef
        });
        $[2] = t3;
        $[3] = t4;
    } else {
        t4 = $[3];
    }
    return t4;
};
;
}),
"[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/utils/extract-only-strings-from-react-node.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractStringsFromReactNode",
    ()=>extractStringsFromReactNode
]);
function extractStringsFromReactNode(node) {
    if (typeof node === "string") return node;
    if (typeof node === "number") return String(node);
    if (Array.isArray(node)) return node.map((n)=>extractStringsFromReactNode(n)).join("");
    const children = node?.props?.children;
    if (!children) return "";
    return extractStringsFromReactNode(children);
}
;
}),
"[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/components/breadcrumb.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Breadcrumb",
    ()=>Breadcrumb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$1$2e$0$2d$rc$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-compiler-runtime@19.1.0-rc.3_react@19.2.3/node_modules/react-compiler-runtime/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ReactComponent__as__ArrowRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra@4.6.1_next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3_797f4d292f15a1c4efb97c3ff30eb7ba/node_modules/nextra/dist/client/icons/arrow-right.js [app-client] (ecmascript) <export ReactComponent as ArrowRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$utils$2f$extract$2d$only$2d$strings$2d$from$2d$react$2d$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/utils/extract-only-strings-from-react-node.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const Breadcrumb = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$1$2e$0$2d$rc$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    const { activePath } = t0;
    let t1;
    if ($[0] !== activePath) {
        t1 = activePath.map(_temp);
        $[0] = activePath;
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== t1) {
        t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: "nextra-breadcrumb x:mt-1.5 x:flex x:items-center x:gap-1 x:overflow-hidden x:text-sm x:text-gray-600 x:dark:text-gray-400 x:contrast-more:text-current",
            children: t1
        });
        $[2] = t1;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
};
function _temp(item, index, arr) {
    const nextItem = arr[index + 1];
    const href = nextItem ? "frontMatter" in item ? item.route : item.children[0].route === nextItem.route ? "" : item.children[0].route : "";
    const ComponentToUse = href ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] : "span";
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            index > 0 && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ReactComponent__as__ArrowRightIcon$3e$__["ArrowRightIcon"], {
                height: "14",
                className: "x:shrink-0 x:rtl:rotate-180"
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ComponentToUse, {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("x:whitespace-nowrap x:transition-colors", nextItem ? "x:min-w-6 x:overflow-hidden x:text-ellipsis" : "x:font-medium x:text-black x:dark:text-gray-100", href && "x:focus-visible:nextra-focus x:ring-inset x:hover:text-gray-900 x:dark:hover:text-gray-100"),
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$utils$2f$extract$2d$only$2d$strings$2d$from$2d$react$2d$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractStringsFromReactNode"])(item.title),
                ...href && {
                    href,
                    prefetch: false
                },
                children: item.title
            })
        ]
    }, item.route + item.name);
}
;
}),
"[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/components/copy-page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CopyPage",
    ()=>CopyPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$1$2e$0$2d$rc$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-compiler-runtime@19.1.0-rc.3_react@19.2.3/node_modules/react-compiler-runtime/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra@4.6.1_next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3_797f4d292f15a1c4efb97c3ff30eb7ba/node_modules/nextra/dist/client/components/button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra@4.6.1_next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3_797f4d292f15a1c4efb97c3ff30eb7ba/node_modules/nextra/dist/client/components/select.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$hooks$2f$use$2d$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra@4.6.1_next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3_797f4d292f15a1c4efb97c3ff30eb7ba/node_modules/nextra/dist/client/hooks/use-copy.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ReactComponent__as__ArrowRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra@4.6.1_next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3_797f4d292f15a1c4efb97c3ff30eb7ba/node_modules/nextra/dist/client/icons/arrow-right.js [app-client] (ecmascript) <export ReactComponent as ArrowRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$icons$2f$chatgpt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ReactComponent__as__ChatGPTIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra@4.6.1_next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3_797f4d292f15a1c4efb97c3ff30eb7ba/node_modules/nextra/dist/client/icons/chatgpt.js [app-client] (ecmascript) <export ReactComponent as ChatGPTIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$icons$2f$claude$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ReactComponent__as__ClaudeIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra@4.6.1_next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3_797f4d292f15a1c4efb97c3ff30eb7ba/node_modules/nextra/dist/client/icons/claude.js [app-client] (ecmascript) <export ReactComponent as ClaudeIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ReactComponent__as__CopyIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra@4.6.1_next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3_797f4d292f15a1c4efb97c3ff30eb7ba/node_modules/nextra/dist/client/icons/copy.js [app-client] (ecmascript) <export ReactComponent as CopyIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$icons$2f$link$2d$arrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ReactComponent__as__LinkArrowIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra@4.6.1_next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3_797f4d292f15a1c4efb97c3ff30eb7ba/node_modules/nextra/dist/client/icons/link-arrow.js [app-client] (ecmascript) <export ReactComponent as LinkArrowIcon>");
;
;
;
;
;
;
const Item = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$1$2e$0$2d$rc$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    const { icon: Icon, title, description, isExternal } = t0;
    let t1;
    if ($[0] !== Icon) {
        t1 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Icon, {
            width: "16"
        });
        $[0] = Icon;
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== isExternal) {
        t2 = isExternal && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$icons$2f$link$2d$arrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ReactComponent__as__LinkArrowIcon$3e$__["LinkArrowIcon"], {
            height: "1em"
        });
        $[2] = isExternal;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== t2 || $[5] !== title) {
        t3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("span", {
            className: "x:font-medium x:flex x:gap-1",
            children: [
                title,
                t2
            ]
        });
        $[4] = t2;
        $[5] = title;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== description) {
        t4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
            className: "x:text-xs",
            children: description
        });
        $[7] = description;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== t3 || $[10] !== t4) {
        t5 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            className: "x:flex x:flex-col",
            children: [
                t3,
                t4
            ]
        });
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== t1 || $[13] !== t5) {
        t6 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            className: "x:flex x:gap-3 x:items-center",
            children: [
                t1,
                t5
            ]
        });
        $[12] = t1;
        $[13] = t5;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    return t6;
};
const CopyPage = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$1$2e$0$2d$rc$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    const { sourceCode } = t0;
    const { copy, isCopied } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$hooks$2f$use$2d$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCopy"])();
    let t1;
    if ($[0] !== copy || $[1] !== sourceCode) {
        t1 = function handleCopy2() {
            copy(sourceCode);
        };
        $[0] = copy;
        $[1] = sourceCode;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handleCopy = t1;
    let t2;
    if ($[3] !== isCopied) {
        t2 = (t32)=>{
            const { hover } = t32;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("x:ps-2 x:pe-1 x:flex x:gap-2 x:text-sm x:font-medium x:items-center", isCopied && "x:opacity-70", hover && "x:bg-gray-200 x:text-gray-900 x:dark:bg-primary-100/5 x:dark:text-gray-50");
        };
        $[3] = isCopied;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ReactComponent__as__CopyIcon$3e$__["CopyIcon"], {
            width: "16"
        });
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const t4 = isCopied ? "Copied" : "Copy page";
    let t5;
    if ($[6] !== handleCopy || $[7] !== t2 || $[8] !== t4) {
        t5 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            className: t2,
            onClick: handleCopy,
            children: [
                t3,
                t4
            ]
        });
        $[6] = handleCopy;
        $[7] = t2;
        $[8] = t4;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            to: "bottom end",
            gap: 10
        };
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = {
            id: "copy",
            name: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Item, {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ReactComponent__as__CopyIcon$3e$__["CopyIcon"],
                title: "Copy page",
                description: "Copy page as Markdown for LLMs"
            })
        };
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            id: "chatgpt",
            name: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Item, {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$icons$2f$chatgpt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ReactComponent__as__ChatGPTIcon$3e$__["ChatGPTIcon"],
                title: "Open in ChatGPT",
                description: "Ask questions about this page",
                isExternal: true
            })
        };
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = [
            t7,
            t8,
            {
                id: "claude",
                name: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Item, {
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$icons$2f$claude$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ReactComponent__as__ClaudeIcon$3e$__["ClaudeIcon"],
                    title: "Open in Claude",
                    description: "Ask questions about this page",
                    isExternal: true
                })
            }
        ];
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ReactComponent__as__ArrowRightIcon$3e$__["ArrowRightIcon"], {
            width: "12",
            className: "x:rotate-90"
        });
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] !== handleCopy) {
        t11 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            anchor: t6,
            className: "x:rounded-none",
            options: t9,
            value: "",
            selectedOption: t10,
            onChange: (value)=>{
                if (value === "copy") {
                    handleCopy();
                    return;
                }
                const url = value === "chatgpt" ? "chatgpt.com/?hints=search&prompt" : "claude.ai/new?q";
                const query = `Read from ${location.href} so I can ask questions about it.`;
                window.open(`https://${url}=${encodeURIComponent(query)}`, "_blank");
            }
        });
        $[15] = handleCopy;
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    if ($[17] !== t11 || $[18] !== t5) {
        t12 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            className: "x:border x:inline-flex x:rounded-md x:items-stretch nextra-border x:float-end x:overflow-hidden",
            children: [
                t5,
                t11
            ]
        });
        $[17] = t11;
        $[18] = t5;
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    return t12;
};
;
}),
"[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/components/pagination.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Pagination",
    ()=>Pagination
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$1$2e$0$2d$rc$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-compiler-runtime@19.1.0-rc.3_react@19.2.3/node_modules/react-compiler-runtime/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ReactComponent__as__ArrowRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra@4.6.1_next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3_797f4d292f15a1c4efb97c3ff30eb7ba/node_modules/nextra/dist/client/icons/arrow-right.js [app-client] (ecmascript) <export ReactComponent as ArrowRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/stores/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$theme$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/stores/theme-config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$utils$2f$extract$2d$only$2d$strings$2d$from$2d$react$2d$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/utils/extract-only-strings-from-react-node.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const classes = {
    link: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("x:focus-visible:nextra-focus x:text-gray-600 x:dark:text-gray-400", "x:hover:text-gray-800 x:dark:hover:text-gray-200", "x:contrast-more:text-gray-700 x:contrast-more:dark:text-gray-100", "x:flex x:max-w-[50%] x:items-center x:gap-1 x:py-4 x:text-base x:font-medium x:transition-colors x:[word-break:break-word] x:md:text-lg"),
    icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("x:inline x:shrink-0")
};
const Pagination = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$1$2e$0$2d$rc$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    const { flatDocsDirectories, activeIndex } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])().normalizePagesResult;
    const { navigation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$theme$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeConfig"])();
    let prev = navigation.prev && flatDocsDirectories[activeIndex - 1];
    let next = navigation.next && flatDocsDirectories[activeIndex + 1];
    if (prev && !prev.isUnderCurrentDocsTree) {
        prev = false;
    }
    if (next && !next.isUnderCurrentDocsTree) {
        next = false;
    }
    if (!prev && !next) {
        return null;
    }
    let t0;
    if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("x:mb-8 x:flex x:items-center x:border-t x:pt-8 nextra-border", "x:print:hidden");
        $[0] = t0;
    } else {
        t0 = $[0];
    }
    let t1;
    if ($[1] !== prev) {
        t1 = prev && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: prev.route,
            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$utils$2f$extract$2d$only$2d$strings$2d$from$2d$react$2d$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractStringsFromReactNode"])(prev.title),
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.link, "x:pe-4"),
            prefetch: false,
            children: [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ReactComponent__as__ArrowRightIcon$3e$__["ArrowRightIcon"], {
                    height: "20",
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.icon, "x:ltr:rotate-180")
                }),
                prev.title
            ]
        });
        $[1] = prev;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== next) {
        t2 = next && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: next.route,
            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$utils$2f$extract$2d$only$2d$strings$2d$from$2d$react$2d$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractStringsFromReactNode"])(next.title),
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.link, "x:ps-4 x:ms-auto x:text-end"),
            prefetch: false,
            children: [
                next.title,
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ReactComponent__as__ArrowRightIcon$3e$__["ArrowRightIcon"], {
                    height: "20",
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.icon, "x:rtl:rotate-180")
                })
            ]
        });
        $[3] = next;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1 || $[6] !== t2) {
        t3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            className: t0,
            children: [
                t1,
                t2
            ]
        });
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    return t3;
};
;
}),
"[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/utils/git-url-parse.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "gitUrlParse",
    ()=>gitUrlParse
]);
"use no memo";
function gitUrlParse(url) {
    const { href, origin, pathname } = new URL(url);
    const [, owner, name] = pathname.split("/", 3);
    return {
        href,
        origin,
        owner,
        name
    };
}
;
}),
"[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/utils/get-git-issue-url.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getGitIssueUrl",
    ()=>getGitIssueUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$utils$2f$git$2d$url$2d$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/utils/git-url-parse.js [app-client] (ecmascript)");
"use no memo";
;
function getGitIssueUrl({ repository = "", title, labels }) {
    const repo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$utils$2f$git$2d$url$2d$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gitUrlParse"])(repository);
    if (repo.origin.includes("gitlab")) {
        return `${repo.origin}/${repo.owner}/${repo.name}/-/issues/new?issue[title]=${encodeURIComponent(title)}${labels ? `&issue[description]=/label${encodeURIComponent(` ~${labels}
`)}` : ""}`;
    }
    if (repo.origin.includes("github")) {
        return `${repo.origin}/${repo.owner}/${repo.name}/issues/new?title=${encodeURIComponent(title)}&labels=${labels || ""}`;
    }
    return "#";
}
;
}),
"[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/components/back-to-top.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BackToTop",
    ()=>BackToTop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$1$2e$0$2d$rc$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-compiler-runtime@19.1.0-rc.3_react@19.2.3/node_modules/react-compiler-runtime/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra@4.6.1_next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3_797f4d292f15a1c4efb97c3ff30eb7ba/node_modules/nextra/dist/client/components/button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ReactComponent__as__ArrowRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra@4.6.1_next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3_797f4d292f15a1c4efb97c3ff30eb7ba/node_modules/nextra/dist/client/icons/arrow-right.js [app-client] (ecmascript) <export ReactComponent as ArrowRightIcon>");
;
;
;
;
;
const SCROLL_TO_OPTIONS = {
    top: 0,
    behavior: "smooth"
};
const scrollToTop = (event)=>{
    const buttonElement = event.currentTarget;
    const tocElement = buttonElement.parentElement.parentElement;
    window.scrollTo(SCROLL_TO_OPTIONS);
    tocElement.scrollTo(SCROLL_TO_OPTIONS);
    buttonElement.disabled = true;
};
const BackToTop = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$1$2e$0$2d$rc$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    const { children, className, hidden } = t0;
    const t1 = hidden ? "true" : void 0;
    let t2;
    if ($[0] !== className) {
        t2 = (t32)=>{
            const { disabled } = t32;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("x:flex x:items-center x:gap-1.5", "x:whitespace-nowrap", disabled ? "x:opacity-0" : "x:opacity-100", className);
        };
        $[0] = className;
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ReactComponent__as__ArrowRightIcon$3e$__["ArrowRightIcon"], {
            height: "1.1em",
            className: "x:-rotate-90 x:border x:rounded-full x:border-current"
        });
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] !== children || $[4] !== hidden || $[5] !== t1 || $[6] !== t2) {
        t4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            "aria-hidden": t1,
            onClick: scrollToTop,
            disabled: hidden,
            className: t2,
            children: [
                children,
                t3
            ]
        });
        $[3] = children;
        $[4] = hidden;
        $[5] = t1;
        $[6] = t2;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    return t4;
};
;
}),
"[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/components/toc.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TOC",
    ()=>TOC
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$1$2e$0$2d$rc$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-compiler-runtime@19.1.0-rc.3_react@19.2.3/node_modules/react-compiler-runtime/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$mdx$2d$components$2f$anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra@4.6.1_next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3_797f4d292f15a1c4efb97c3ff30eb7ba/node_modules/nextra/dist/client/mdx-components/anchor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$scroll$2d$into$2d$view$2d$if$2d$needed$40$3$2e$1$2e$0$2f$node_modules$2f$scroll$2d$into$2d$view$2d$if$2d$needed$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/scroll-into-view-if-needed@3.1.0/node_modules/scroll-into-view-if-needed/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$active$2d$anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/stores/active-anchor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/stores/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$theme$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/stores/theme-config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$toc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/stores/toc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$utils$2f$get$2d$git$2d$issue$2d$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/utils/get-git-issue-url.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$utils$2f$git$2d$url$2d$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/utils/git-url-parse.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$components$2f$back$2d$to$2d$top$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/components/back-to-top.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
const linkClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("x:text-xs x:font-medium x:transition", "x:text-gray-600 x:dark:text-gray-400", "x:hover:text-gray-800 x:dark:hover:text-gray-200", "x:contrast-more:text-gray-700 x:contrast-more:dark:text-gray-100");
const TOC = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$1$2e$0$2d$rc$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(34);
    const { filePath, pageTitle } = t0;
    const activeSlug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$active$2d$anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActiveAnchor"])();
    const tocRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const themeConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$theme$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeConfig"])();
    const toc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$toc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTOC"])();
    const hasMetaInfo = themeConfig.feedback.content || themeConfig.editLink || themeConfig.toc.extraContent || themeConfig.toc.backToTop;
    const { activeType } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])().normalizePagesResult;
    let t1;
    if ($[0] !== activeType || $[1] !== themeConfig.toc.float || $[2] !== toc) {
        t1 = themeConfig.toc.float || activeType === "page" ? toc : [];
        $[0] = activeType;
        $[1] = themeConfig.toc.float;
        $[2] = toc;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const anchors = t1;
    const hasHeadings = anchors.length > 0;
    let t2;
    if ($[4] !== activeSlug) {
        t2 = (t32)=>{
            const { id } = t32;
            return id === activeSlug;
        };
        $[4] = activeSlug;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const activeIndex = toc.findIndex(t2);
    let t3;
    let t4;
    if ($[6] !== activeSlug) {
        t3 = ()=>{
            if (!activeSlug) {
                return;
            }
            const anchor = tocRef.current?.querySelector(`a[href="#${activeSlug}"]`);
            if (!anchor) {
                return;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$scroll$2d$into$2d$view$2d$if$2d$needed$40$3$2e$1$2e$0$2f$node_modules$2f$scroll$2d$into$2d$view$2d$if$2d$needed$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(anchor, {
                behavior: "smooth",
                block: "center",
                inline: "center",
                scrollMode: "if-needed",
                boundary: tocRef.current
            });
        };
        t4 = [
            activeSlug
        ];
        $[6] = activeSlug;
        $[7] = t3;
        $[8] = t4;
    } else {
        t3 = $[7];
        t4 = $[8];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[9] !== pageTitle || $[10] !== themeConfig.docsRepositoryBase || $[11] !== themeConfig.feedback.labels || $[12] !== themeConfig.feedback.link) {
        t5 = themeConfig.feedback.link ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$utils$2f$get$2d$git$2d$issue$2d$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGitIssueUrl"])({
            labels: themeConfig.feedback.labels,
            repository: themeConfig.docsRepositoryBase,
            title: `Feedback for \u201C${pageTitle}\u201D`
        });
        $[9] = pageTitle;
        $[10] = themeConfig.docsRepositoryBase;
        $[11] = themeConfig.feedback.labels;
        $[12] = themeConfig.feedback.link;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    const feedbackLink = t5;
    let t6;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("x:grid x:grid-rows-[min-content_1fr_min-content]", "x:sticky x:top-(--nextra-navbar-height) x:text-sm", "x:max-h-[calc(100vh-var(--nextra-navbar-height))]");
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== activeSlug || $[16] !== anchors || $[17] !== hasHeadings || $[18] !== themeConfig.toc.title) {
        t7 = hasHeadings && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                    className: "x:pt-6 x:px-4 x:font-semibold x:tracking-tight",
                    children: themeConfig.toc.title
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("ul", {
                    ref: tocRef,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("x:p-4 nextra-scrollbar x:overscroll-y-contain x:overflow-y-auto x:hyphens-auto", "nextra-mask"),
                    children: anchors.map((t82)=>{
                        const { id: id_0, value, depth } = t82;
                        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("li", {
                            className: "x:my-2 x:scroll-my-6 x:scroll-py-6",
                            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("a", {
                                href: `#${id_0}`,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("x:focus-visible:nextra-focus", {
                                    2: "x:font-semibold",
                                    3: "x:ms-3",
                                    4: "x:ms-6",
                                    5: "x:ms-9",
                                    6: "x:ms-12"
                                }[depth], "x:block x:transition-colors x:subpixel-antialiased", id_0 === activeSlug ? "x:text-primary-600 x:contrast-more:text-primary-600!" : "x:text-gray-600 x:hover:text-gray-900 x:dark:text-gray-400 x:dark:hover:text-gray-300", "x:contrast-more:text-gray-900 x:contrast-more:underline x:contrast-more:dark:text-gray-50 x:break-words"),
                                children: value
                            })
                        }, id_0);
                    })
                })
            ]
        });
        $[15] = activeSlug;
        $[16] = anchors;
        $[17] = hasHeadings;
        $[18] = themeConfig.toc.title;
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    let t8;
    if ($[20] !== activeIndex || $[21] !== feedbackLink || $[22] !== filePath || $[23] !== hasHeadings || $[24] !== hasMetaInfo || $[25] !== themeConfig.docsRepositoryBase || $[26] !== themeConfig.editLink || $[27] !== themeConfig.feedback.content || $[28] !== themeConfig.toc.backToTop || $[29] !== themeConfig.toc.extraContent) {
        t8 = hasMetaInfo && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("x:grid x:gap-2 x:py-4 x:mx-4", hasHeadings && "x:border-t nextra-border"),
            children: [
                themeConfig.feedback.content && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$mdx$2d$components$2f$anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Anchor"], {
                    className: linkClassName,
                    href: feedbackLink,
                    children: themeConfig.feedback.content
                }),
                filePath && themeConfig.editLink && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$40$4$2e$6$2e$1_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_797f4d292f15a1c4efb97c3ff30eb7ba$2f$node_modules$2f$nextra$2f$dist$2f$client$2f$mdx$2d$components$2f$anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Anchor"], {
                    className: linkClassName,
                    href: filePath.startsWith("http") ? filePath : `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$utils$2f$git$2d$url$2d$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gitUrlParse"])(themeConfig.docsRepositoryBase).href}/${filePath}`,
                    children: themeConfig.editLink
                }),
                themeConfig.toc.extraContent,
                themeConfig.toc.backToTop && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$components$2f$back$2d$to$2d$top$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BackToTop"], {
                    className: linkClassName,
                    hidden: activeIndex < 2,
                    children: themeConfig.toc.backToTop
                })
            ]
        });
        $[20] = activeIndex;
        $[21] = feedbackLink;
        $[22] = filePath;
        $[23] = hasHeadings;
        $[24] = hasMetaInfo;
        $[25] = themeConfig.docsRepositoryBase;
        $[26] = themeConfig.editLink;
        $[27] = themeConfig.feedback.content;
        $[28] = themeConfig.toc.backToTop;
        $[29] = themeConfig.toc.extraContent;
        $[30] = t8;
    } else {
        t8 = $[30];
    }
    let t9;
    if ($[31] !== t7 || $[32] !== t8) {
        t9 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            className: t6,
            children: [
                t7,
                t8
            ]
        });
        $[31] = t7;
        $[32] = t8;
        $[33] = t9;
    } else {
        t9 = $[33];
    }
    return t9;
};
;
}),
"[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/mdx-components/wrapper.client.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientWrapper",
    ()=>ClientWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$1$2e$0$2d$rc$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-compiler-runtime@19.1.0-rc.3_react@19.2.3/node_modules/react-compiler-runtime/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$components$2f$breadcrumb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/components/breadcrumb.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$components$2f$copy$2d$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/components/copy-page.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$components$2f$pagination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/components/pagination.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$components$2f$toc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/components/toc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/stores/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$theme$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nextra-theme-docs@4.6.1_@types+react@19.2.7_next@16.1.6_@babel+core@7.28.5_react-dom@19_16ac18fa82089d9791f0ad564da94a9f/node_modules/nextra-theme-docs/dist/stores/theme-config.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const ClientWrapper = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$19$2e$1$2e$0$2d$rc$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(31);
    const { children, metadata, bottomContent, sourceCode } = t0;
    const { activeType, activeThemeContext: themeContext, activePath } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])().normalizePagesResult;
    const themeConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$stores$2f$theme$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeConfig"])();
    const date = themeContext.timestamp && metadata.timestamp;
    let t1;
    if ($[0] !== metadata || $[1] !== themeContext.layout || $[2] !== themeContext.toc) {
        t1 = (themeContext.layout === "default" || themeContext.toc) && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("nav", {
            className: "nextra-toc x:order-last x:max-xl:hidden x:w-64 x:shrink-0 x:print:hidden",
            "aria-label": "table of contents",
            children: themeContext.toc && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$components$2f$toc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOC"], {
                filePath: metadata.filePath,
                pageTitle: metadata.title
            })
        });
        $[0] = metadata;
        $[1] = themeContext.layout;
        $[2] = themeContext.toc;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const t2 = themeContext.typesetting === "article" && "nextra-body-typesetting-article";
    let t3;
    if ($[4] !== t2) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("x:w-full x:min-w-0 x:break-words x:min-h-[calc(100vh-var(--nextra-navbar-height))]", "x:text-slate-700 x:dark:text-slate-200 x:pb-8 x:px-4 x:pt-4 x:md:px-12", t2);
        $[4] = t2;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== activePath || $[7] !== activeType || $[8] !== themeContext.breadcrumb) {
        t4 = themeContext.breadcrumb && activeType !== "page" && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$components$2f$breadcrumb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Breadcrumb"], {
            activePath
        });
        $[6] = activePath;
        $[7] = activeType;
        $[8] = themeContext.breadcrumb;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== sourceCode || $[11] !== themeConfig.copyPageButton || $[12] !== themeContext.copyPage) {
        t5 = themeConfig.copyPageButton && themeContext.copyPage && sourceCode && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$components$2f$copy$2d$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CopyPage"], {
            sourceCode
        });
        $[10] = sourceCode;
        $[11] = themeConfig.copyPageButton;
        $[12] = themeContext.copyPage;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    let t6;
    if ($[14] !== date || $[15] !== themeConfig.lastUpdated) {
        t6 = date ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: "x:mt-12 x:mb-8 x:text-xs x:text-gray-600 x:text-end x:dark:text-gray-400",
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(themeConfig.lastUpdated, {
                date: new Date(date)
            })
        }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: "x:mt-16"
        });
        $[14] = date;
        $[15] = themeConfig.lastUpdated;
        $[16] = t6;
    } else {
        t6 = $[16];
    }
    let t7;
    if ($[17] !== activeType || $[18] !== themeContext.pagination) {
        t7 = themeContext.pagination && activeType !== "page" && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nextra$2d$theme$2d$docs$40$4$2e$6$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19_16ac18fa82089d9791f0ad564da94a9f$2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$components$2f$pagination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pagination"], {});
        $[17] = activeType;
        $[18] = themeContext.pagination;
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    let t8;
    if ($[20] !== bottomContent || $[21] !== children || $[22] !== t3 || $[23] !== t4 || $[24] !== t5 || $[25] !== t6 || $[26] !== t7) {
        t8 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("article", {
            className: t3,
            children: [
                t4,
                t5,
                children,
                t6,
                t7,
                bottomContent
            ]
        });
        $[20] = bottomContent;
        $[21] = children;
        $[22] = t3;
        $[23] = t4;
        $[24] = t5;
        $[25] = t6;
        $[26] = t7;
        $[27] = t8;
    } else {
        t8 = $[27];
    }
    let t9;
    if ($[28] !== t1 || $[29] !== t8) {
        t9 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t1,
                t8
            ]
        });
        $[28] = t1;
        $[29] = t8;
        $[30] = t9;
    } else {
        t9 = $[30];
    }
    return t9;
};
;
}),
]);

//# sourceMappingURL=1f2d9_nextra-theme-docs_dist_b49150d6._.js.map