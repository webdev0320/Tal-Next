(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/legacy-templates/HomeOld.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
// Reusable Star SVG
const StarIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 1000 1000",
        xmlns: "http://www.w3.org/2000/svg",
        className: "w-5 h-5 inline-block mx-0.5 fill-current text-yellow-500",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"
        }, void 0, false, {
            fileName: "[project]/src/legacy-templates/HomeOld.jsx",
            lineNumber: 6,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
        lineNumber: 5,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = StarIcon;
// Reusable Checkmark SVG (for 'Who Do WE Help' section)
const CheckmarkIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 512 512",
        xmlns: "http://www.w3.org/2000/svg",
        className: "w-4 h-4 inline-block mr-2 fill-current text-green-500",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"
        }, void 0, false, {
            fileName: "[project]/src/legacy-templates/HomeOld.jsx",
            lineNumber: 13,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
        lineNumber: 12,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = CheckmarkIcon;
// Reusable Accordion SVG icons (for FAQs)
const ChevronDownIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 320 512",
        xmlns: "http://www.w3.org/2000/svg",
        className: "w-4 h-4 inline-block mr-2 fill-current",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
        }, void 0, false, {
            fileName: "[project]/src/legacy-templates/HomeOld.jsx",
            lineNumber: 20,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
        lineNumber: 19,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = ChevronDownIcon;
const ChevronUpIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 320 512",
        xmlns: "http://www.w3.org/2000/svg",
        className: "w-4 h-4 inline-block mr-2 fill-current",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"
        }, void 0, false, {
            fileName: "[project]/src/legacy-templates/HomeOld.jsx",
            lineNumber: 26,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
        lineNumber: 25,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = ChevronUpIcon;
const ServiceItem = ({ title, description, icon: IconComponent, href })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-6",
        children: [
            href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: href,
                className: "block text-blue-600 hover:underline",
                "aria-label": title,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center",
                    children: [
                        IconComponent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {}, void 0, false, {
                            fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                            lineNumber: 35,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-semibold mb-2",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center",
                children: [
                    IconComponent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {}, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 41,
                        columnNumber: 27
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold mb-2",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-700",
                children: description
            }, void 0, false, {
                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                lineNumber: 45,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
        lineNumber: 31,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = ServiceItem;
const ContactItem = ({ icon: IconComponent, title, value, href })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2 mb-4",
        children: [
            IconComponent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {}, void 0, false, {
                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                lineNumber: 51,
                columnNumber: 27
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-semibold",
                children: href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: href,
                    className: "text-blue-600 hover:underline",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                    lineNumber: 54,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)) : title
            }, void 0, false, {
                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                lineNumber: 52,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-700",
                children: href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: href,
                    className: "text-blue-600 hover:underline",
                    children: value
                }, void 0, false, {
                    fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                    lineNumber: 60,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)) : value
            }, void 0, false, {
                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                lineNumber: 58,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
        lineNumber: 50,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c5 = ContactItem;
// Main Component
const HomeOld = ()=>{
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('QUICKBOOKS');
    const [activeFaq, setActiveFaq] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const starIcons = Array.from({
        length: 10
    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StarIcon, {}, i, false, {
            fileName: "[project]/src/legacy-templates/HomeOld.jsx",
            lineNumber: 73,
            columnNumber: 62
        }, ("TURBOPACK compile-time value", void 0)));
    const serviceData = [
        {
            title: "Self Assessment Tax Accountant",
            description: "Login made easy. Get help with registering and filing your self-assessment tax return accurately and on time.",
            href: "/accounts/hmrc-self-assessment-tax-returns-accountant"
        },
        {
            title: "Payroll Services",
            description: "Stress-free online payroll outsourcing services for small and medium businesses. Accurate and Compliant.",
            href: "/accounts/payrol-services-for-small-and-medium-business"
        },
        {
            title: "Income Tax Accountant",
            description: "Expert personal income tax accountant services. Top professionals ensuring accurate tax filing and maximum saving.",
            href: "/taxation/personal-income-tax-professionals-and-chartered-accountants"
        },
        {
            title: "Inheritance Tax Planning",
            description: "Expert inheritance tax advice near you to protect your wealth. Personalised estate planning tips for your family’s future.",
            href: "/taxation/inheritance-tax-planning-advisors"
        },
        {
            title: "Worldwide Disclosure Facility",
            description: "Expert HMRC tax accountant advice to help you safely disclose offshore income in the UK and avoid penalties.",
            href: "/worldwide-disclosure-facility",
            icon: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    "aria-hidden": "true",
                    viewBox: "0 0 448 512",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "w-6 h-6 mr-2 fill-current",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M128 148v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12zm140 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-128 96h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm128 0h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-76 84v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm76 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm180 124v36H0v-36c0-6.6 5.4-12 12-12h19.5V24c0-13.3 10.7-24 24-24h337c13.3 0 24 10.7 24 24v440H436c6.6 0 12 5.4 12 12zM79.5 463H192v-67c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v67h112.5V49L80 48l-.5 415z"
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
        },
        {
            title: "Let Property Campaign",
            description: "Clear and trusted tax advice to help you disclose your rental income to HMRC, handle submissions and stay penalty-free",
            icon: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    "aria-hidden": "true",
                    viewBox: "0 0 576 512",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "w-6 h-6 mr-2 fill-current",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M288 115L69.47 307.71c-1.62 1.46-3.69 2.14-5.47 3.35V496a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V311.1c-1.7-1.16-3.72-1.82-5.26-3.2zm96 261a8 8 0 0 1-8 8h-56v56a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8v-56h-56a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8h56v-56a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v56h56a8 8 0 0 1 8 8zm186.69-139.72l-255.94-226a39.85 39.85 0 0 0-53.45 0l-256 226a16 16 0 0 0-1.21 22.6L25.5 282.7a16 16 0 0 0 22.6 1.21L277.42 81.63a16 16 0 0 1 21.17 0L527.91 283.9a16 16 0 0 0 22.6-1.21l21.4-23.82a16 16 0 0 0-1.22-22.59z"
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
        },
        {
            title: "Non- UK Resident Taxation",
            description: "Advice by expert taxation accountants, guiding Non-UK resients for compliance and helping them in UK tax rules.",
            icon: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    "aria-hidden": "true",
                    viewBox: "0 0 640 512",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "w-6 h-6 mr-2 fill-current",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z"
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
        },
        {
            title: "film-tax-relief",
            description: "Empowering creativity, boosting growth, ensuring your production qualifies and helping you claim UK film tax credits.",
            href: "/film-tax-relief"
        },
        {
            title: "Cryptocurrency",
            description: "Trusted accountants helping you report transactions, calculate tax on crypto gains while staying in line with Crypto tax rules.",
            href: "http://cryptocurrency",
            icon: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    "aria-hidden": "true",
                    viewBox: "0 0 512 512",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "w-6 h-6 mr-2 fill-current",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z"
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
        },
        {
            title: "Capital Gain Tax",
            description: "Get expert capital gains tax advice from trusted and specialist accountants for minimising liabilities and letting relief.",
            href: "/taxation/capital-gains-tax-accountant"
        },
        {
            title: "SEIS/EIS Tax Relief",
            description: "Save money, claim tax relief, and grow your investments with SEIS tax relief advice and support by expert EIS accountants.",
            href: "/taxation/seed-enterprise-investment-scheme-tax-relief"
        },
        {
            title: "Estate Tax Planning",
            description: "Structure your wealth the best, reduce liabilities, and secure your family's financial future with our expert estate tax accountants.",
            href: "http://ht/taxation/estate-and-property-tax-planning-accountants"
        }
    ];
    const clientLogos = Array.from({
        length: 16
    }).map((_, i)=>({
            src: `/wp-content/uploads/2024/11/${i + 1}.png`,
            alt: `Client ${i + 1}`
        }));
    const achievementImages = [
        {
            src: "/wp-content/uploads/2025/04/Team-2-1.jpg",
            alt: "Team 2"
        },
        {
            src: "/wp-content/uploads/2025/04/Team-3-1.jpg",
            alt: "Team 3"
        },
        {
            src: "/wp-content/uploads/2025/03/cosmetologist-1-2.jpg",
            alt: "Cosmetologist"
        },
        {
            src: "/wp-content/uploads/2025/03/gallery-36.png",
            alt: "Gallery 36"
        },
        {
            src: "/wp-content/uploads/2025/03/gallery-35.png",
            alt: "Gallery 35"
        },
        {
            src: "/wp-content/uploads/2025/03/gallery-34.png",
            alt: "Gallery 34"
        },
        {
            src: "/wp-content/uploads/2025/03/WhatsApp-Image-2025-02-28-at-14.29.50_7903bb51-1152x1536.jpg",
            alt: "WhatsApp Image 1"
        },
        {
            src: "/wp-content/uploads/2025/03/WhatsApp-Image-2025-02-28-at-14.31.06_6acc2339-1536x1152.jpg",
            alt: "WhatsApp Image 2"
        },
        {
            src: "/wp-content/uploads/2025/04/Post-4.jpg",
            alt: "Post 4"
        },
        {
            src: "/wp-content/uploads/2025/03/Team-2-1.jpg",
            alt: "Team 2"
        }
    ];
    const industriesWeHelp = [
        {
            title: "IT Professional",
            href: "/industries/it-professionals/"
        },
        {
            title: "Construction",
            href: "/industries/construction/"
        },
        {
            title: "Hospitality",
            href: "/industries/hospitality/"
        },
        {
            title: "Auto Mobile",
            href: "/industries/automobile/"
        },
        {
            title: "Non-UK-Resident",
            href: "/industries/non-uk-resident-taxation/"
        },
        {
            title: "Real Estate",
            href: "/industries/real-estate/"
        },
        {
            title: "Restaurants",
            href: "/industries/restaurants/"
        },
        {
            title: "Ecommerce",
            href: "/industries/ecommerce/"
        },
        {
            title: "Health Care",
            href: "/industries/healthcare-professionals/"
        },
        {
            title: "Charity",
            href: "/industries/charity/"
        },
        {
            title: "Wholesale & Retailers",
            href: "/industries/wholesellers-retailers/"
        },
        {
            title: "Expatriates",
            href: "/industries/expatriates/"
        },
        {
            title: "Leisure Industry",
            href: "/industries/leisure-industry/"
        },
        {
            title: "Logistics",
            href: "/industries/logistics/"
        }
    ];
    const softwareTabs = [
        {
            name: "QUICKBOOKS",
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold mb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "QUICKBOOKS"
                        }, void 0, false, {
                            fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                            lineNumber: 156,
                            columnNumber: 50
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 156,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-4",
                        children: [
                            "Taxaccolega sees QuickBooks not only as a tool but as a One Stop Solution for organizing the finances of your company. One can envision smoothly managing payroll, automatically handling VAT returns, and easily tracking costs, all simultaneously. QuickBooks makes your accounting work easier whether you are a freelancer or an expanding SME, so you can focus on growing your company. Taxaccolega being QuickBooks certified accountants customizes the software for you, therefore guaranteeing your tax filing, financial reports always on target, and providing current insights. Let us demonstrate to you how QuickBooks might revolutionize your company's workflow. ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/quickbooks/",
                                className: "text-blue-600 hover:underline",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Read More"
                                }, void 0, false, {
                                    fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                    lineNumber: 157,
                                    columnNumber: 762
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 157,
                                columnNumber: 697
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 157,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
        },
        {
            name: "SAGE",
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold mb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "SAGE"
                        }, void 0, false, {
                            fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                            lineNumber: 163,
                            columnNumber: 50
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 163,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-4",
                        children: "Your Finances with Advanced Software Solutions"
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-4",
                        children: "As a leading Chartered Accounting firm in London, we specialise in Xero Accounting software. We provide comprehensive accounting and tax advisory services for startups, small businesses, and eCommerce vendors. As Xero Platinum Partners, we simplify financial processes, offer expert migration assistance, and recommend third-party Xero apps. Enhance your business with our personalised support and cutting-edge solutions today!"
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
        },
        {
            name: "BTC SOFTWARE",
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold mb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "BTC SOFTWARE"
                        }, void 0, false, {
                            fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                            lineNumber: 171,
                            columnNumber: 50
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 171,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-4",
                        children: "BTC, an Ideal accounting software for companies searching for a complete tax and accounting solution in Croydon and London. At Taxaccolega, our BTC Software accountants make it easy for businesses to negotiate capital allowances, company tax returns, and tax compliance chores. Our BTC Software professionals guarantee compliance with HMRC regardless of handling regular accounting tasks or automating tax return."
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-4",
                        children: [
                            "Streamlining your tax returns for dependable and efficient financial management, BTC Software integrates effortlessly with HMRC. We help to optimize your tax savings and make certain seamless operation by means of Custom BTC Software Help that our team offers. Trust and try the top-rated chartered accountant at Taxaccolega to assist you to maximize the use of BTC Software for effective and secure financial management and you will not be let down. ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/btc-softwares/",
                                className: "text-blue-600 hover:underline",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Read More"
                                }, void 0, false, {
                                    fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                    lineNumber: 173,
                                    columnNumber: 550
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 173,
                                columnNumber: 482
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
        },
        {
            name: "VT SOFTWARE",
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold mb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "VT SOFTWARE"
                        }, void 0, false, {
                            fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                            lineNumber: 179,
                            columnNumber: 50
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 179,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-4",
                        children: "Running a small business in London or Croydon entails managing several balls simultaneously. VT Software takes your place as your unobtrusive assistant in budgeting, tax returns, and financial reports running. It is the tool that runs in the background keeping everything in order when your business is on the front or in center. VT Software enables you to manage the basics with least effort and utmost effectiveness, whether you run a startup or work as a freelancer."
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 180,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-4",
                        children: [
                            "Taxaccolega accountants save your time even more than you probably want to save. This is why we walk you through the easy installation of VT Software so you can start running soon. Having access to live financial information, you can surely handle VAT returns and keep up with your tax duties. We will show you how VT Software may be the unobtrusive, behind-the-scenes solution that helps your company run smoothly and stress-free. ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/vt-softwares/",
                                className: "text-blue-600 hover:underline",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Read More"
                                }, void 0, false, {
                                    fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                    lineNumber: 181,
                                    columnNumber: 530
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 181,
                                columnNumber: 463
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 181,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
        },
        {
            name: "TAXCALC",
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold mb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "TAXCALC"
                        }, void 0, false, {
                            fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                            lineNumber: 187,
                            columnNumber: 50
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 187,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-4",
                        children: "Running a small business in London or Croydon entails managing several balls simultaneously. VT Software takes your place as your unobtrusive assistant in budgeting, tax returns, and financial reports running. It is the tool that runs in the background keeping everything in order when your business is on the front or in center. VT Software enables you to manage the basics with least effort and utmost effectiveness, whether you run a startup or work as a freelancer."
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 188,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-4",
                        children: [
                            "Taxaccolega accountants save your time even more than you probably want to save. This is why we walk you through the easy installation of VT Software so you can start running soon. Having access to live financial information, you can surely handle VAT returns and keep up with your tax duties. We will show you how VT Software may be the unobtrusive, behind-the-scenes solution that helps your company run smoothly and stress-free. ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/vt-softwares/",
                                className: "text-blue-600 hover:underline",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Read More"
                                }, void 0, false, {
                                    fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                    lineNumber: 189,
                                    columnNumber: 530
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 189,
                                columnNumber: 463
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 189,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
        },
        {
            name: "FREEAGENT",
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold mb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "FREEAGENT"
                        }, void 0, false, {
                            fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                            lineNumber: 195,
                            columnNumber: 50
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 195,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-4",
                        children: "We are accredited accountants serving small businesses and contractors throughout the UK. Our core belief is in enhancing your business’s financial transparency, achieved through award-winning cloud accounting software, Free Agent. As accredited Free Agent accountants for 2022, we offer seamless services to both existing Free Agent users and newcomers. We efficiently synchronise all your financial transactions onto our platform and provide complimentary training to ensure proficiency with Free Agent accounting software. Switching to our services is hassle-free, with a streamlined process that assures a swift and straightforward transfer of your financial data, eliminating data loss risks. From day one, we are well-prepared to manage your financial records, making it easy for us to collaborate and address any accounting challenges."
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 196,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        width: "800",
                        height: "534",
                        src: "/wp-content/uploads/2024/07/Free-agent.jpg",
                        alt: "Free agent software",
                        srcSet: "/wp-content/uploads/2024/07/Free-agent.jpg 1024w, /wp-content/uploads/2024/07/Free-agent-600x400.jpg 600w, /wp-content/uploads/2024/07/Free-agent-300x200.jpg 300w, /wp-content/uploads/2024/07/Free-agent-768x512.jpg 768w",
                        sizes: "(max-width: 800px) 100vw, 800px",
                        className: "my-4 rounded-lg shadow-md"
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
        },
        {
            name: "XERO",
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold mb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "XERO"
                        }, void 0, false, {
                            fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                            lineNumber: 207,
                            columnNumber: 50
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 207,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-4",
                        children: "Imagine having the power to control and steer your finances, not just manage them. Xero serves as a financial control center, not just accounting software for companies in London and Croydon. Xero offers you a coherent, up-to-date picture of the financial condition of your company regardless of whether you're reconciling your bank accounts, monitoring cash flow, or getting ready for VAT returns. Perfect for companies that rely on efficiency and invention, it integrates effortlessly with third-party applications. "
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 208,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-4",
                        children: [
                            "Taxaccolega changes the way you use Xero; we don't just get you started with it. With our expertise in Xero software, we assist you go deep into the program, revealing sophisticated capabilities such project tracking, multi-currency support, and automatic invoicing. Taxaccolega lets Xero be more than just a tool; it is your growth partner who gives you active information from your numbers and enables you to make better business decisions more quickly. ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/xero/",
                                className: "text-blue-600 hover:underline",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Read More"
                                }, void 0, false, {
                                    fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                    lineNumber: 209,
                                    columnNumber: 551
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 209,
                                columnNumber: 492
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 209,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
        }
    ];
    const faqs = [
        {
            question: "What is the process for non-domiciled tax filings?",
            answer: "Non-domiciled individuals first report UK income and can choose to pay tax on foreign income only when the income is brought in to the UK. From April 2025 new rules will apply. so it’s worth checking your tax status, as new arrivals qualify for 100% tax relief on foreign income and gains during their first 4 years in the UK."
        },
        {
            question: "What should I do if I’ve missed a tax deadline?",
            answer: "Act quickly file or pay as immediately to avoid penalties and interest. Then contact HMRC or your tax consultant to discuss late filing or paying."
        },
        {
            question: "What’s the difference between tax avoidance and tax evasion?",
            answer: "Tax avoidance occurs within legal confines to reduce taxation whereas tax evasion is illegal and involves deliberately hiding income or falsifying information. We guide to help you to stay in compliance and legality."
        },
        {
            question: "How can I reduce my tax bill legally?",
            answer: "You can reduce tax by using allowances, structuring income efficiently, claiming expenses, and timing income or asset sales smartly. We provide personalised tax planning to help you do this legally."
        },
        {
            question: "What should I do if I disagree with a tax bill or HMRC assessment?",
            answer: "You have the right to appeal or request a review. Start by contacting HMRC or your tax adviser quickly. We can help with appeals, negotiations, and representing you if needed."
        },
        {
            question: "How can I protect my business from future tax audits or disputes?",
            answer: "Maintain accurate records, stay compliant with reporting rules, and check your tax strategy regularly. We offer audit protection, risk evaluation, and ongoing support to keep you prepared."
        },
        {
            question: "How do I ensure compliance with the IR35 rules?",
            answer: "IR35 applies if you’re hired through a limited company but are actually an employee. Regular checking of your contracts and your employment status is important. We can examine your arrangements and advise you on compliance."
        }
    ];
    const toggleFaq = (index)=>{
        setActiveFaq(activeFaq === index ? null : index);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto px-4 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-4 text-sm text-gray-500",
                children: "[Breadcrumb Placeholder]"
            }, void 0, false, {
                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                lineNumber: 253,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "my-8 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        width: "512",
                        height: "512",
                        src: "/wp-content/uploads/2025/03/google-logo.png",
                        alt: "Google logo",
                        srcSet: "/wp-content/uploads/2025/03/google-logo.png 512w, /wp-content/uploads/2025/03/google-logo-300x300.png 300w, /wp-content/uploads/2025/03/google-logo-100x100.png 100w, /wp-content/uploads/2025/03/google-logo-150x150.png 150w",
                        sizes: "(max-width: 512px) 100vw, 512px",
                        className: "mx-auto mb-4 w-32 h-32 object-contain"
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 257,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold mb-2",
                        children: "Google"
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 266,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center mb-2",
                        children: starIcons
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 267,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg font-bold",
                        children: "5.0"
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 270,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: "Based on 187 Reviews"
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 271,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                lineNumber: 256,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "my-8 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold mb-2",
                        children: "Trustpilot"
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center mb-2",
                        children: starIcons
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg font-bold",
                        children: "4.9"
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 281,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: "Based on 80 Reviews"
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                lineNumber: 275,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "my-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-gray-500 mb-2",
                        children: "Services"
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 287,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl font-extrabold mb-8",
                        children: "Why Choose Us"
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 288,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold mb-6",
                        children: "Our Expertise"
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 289,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-semibold mb-8",
                        children: "We are the largest online firm of accountants in London, United Kingdom."
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 290,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                        children: serviceData.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ServiceItem, {
                                ...service
                            }, index, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 294,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                lineNumber: 286,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "my-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl font-extrabold mb-8",
                        children: "Our Clients and Collaborative Partners"
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 301,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4",
                        children: clientLogos.map((logo, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                className: "flex justify-center items-center p-2 border rounded-md shadow-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: logo.src,
                                    alt: logo.alt,
                                    className: "max-w-full h-auto object-contain max-h-24"
                                }, void 0, false, {
                                    fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                    lineNumber: 305,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, index, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 304,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 302,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                lineNumber: 300,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "my-12 bg-gray-50 p-8 rounded-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl font-semibold text-center mb-4",
                        children: "Your Tax, Our Expertise"
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 313,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl font-extrabold text-center mb-6",
                        children: [
                            "The promptest response is ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-orange-600",
                                children: "Guaranteed."
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 314,
                                columnNumber: 92
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 314,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-700 text-center max-w-2xl mx-auto mb-8",
                        children: "We understand that tax matters often take place at the last minute near the deadline dates. Taxaccolega can still accommodate you even at short notice. Nevertheless, this haste, our top-rated tax experts can still outdo and save handsome sums of money for you."
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 315,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold text-center mb-6",
                        children: "Get in Touch"
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 318,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-700 text-center max-w-2xl mx-auto mb-6",
                        children: "Tax returns, financial strategies, bookkeeping… this all can seem quite intimidating, but we assure you that you don't have to navigate it alone. We commit to giving you peace of mind by bringing clarity to complexity."
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 319,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-700 text-center max-w-2xl mx-auto mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "What’s next?"
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 323,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            " Get in touch for a free, no-obligation consultation – no pressure, just real, actionable guidance and let us take the tax stress off your shoulders."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 322,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "flex flex-col md:flex-row justify-center gap-4 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "tel:02083929375",
                                    className: "text-blue-600 hover:underline block text-center",
                                    children: "020 8392 9375"
                                }, void 0, false, {
                                    fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                    lineNumber: 327,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 326,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "mailto:info@taxaccolega.co.uk",
                                    className: "text-blue-600 hover:underline block text-center",
                                    children: "info@taxaccolega.co.uk"
                                }, void 0, false, {
                                    fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                    lineNumber: 330,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 329,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://wa.me/07471170484",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-blue-600 hover:underline block text-center",
                                    children: "074 7117 0484"
                                }, void 0, false, {
                                    fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                    lineNumber: 333,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 332,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 325,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            role: "button",
                            className: "inline-block bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors",
                            href: "#",
                            children: "Get In Touch"
                        }, void 0, false, {
                            fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                            lineNumber: 337,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 336,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://www.google.com/search?q=taxaccolega+google+reviews&sca_esv=297d5f19dea10a07&sca_upv=1&sxsrf=ADLYWIJ23bi6HGNvbxp15gnfhlga0Kxqeg%3A1720107419671&source=hp&ei=m8GGZvarJpaH7NYP1v-p2AE&iflsig=AL9hbdgAAAAAZobPq_DmNkAfESl5SRggHQUhI1c0qF5J&ved=0ahUKEwi25eO9242HAxWWA9sEHdZ_ChsQ4dUDCBU&uact=5&oq=taxaccolega+google+reviews&gs_lp=Egdnd3Mtd2l6Ihp0YXhhY2NvbGVnYSBnb29nbGUgcmV2aWV3czIFECEYoAFIySBQAFjgHnAAeACQAQCYAY8CoAH-K6oBBDItMjW4AQPIAQD4AQGYAhmgAs8swgIQEC4YgAQYxwEYJxiKBRivAcICBBAjGCfCAgoQIxiABBgnGIoFwgIREC4YgAQYkQIY0QMYxwEYigXCAgsQABiABBiRAhiKBcICCxAAGIAEGLEDGIMBwgIFEAAYgATCAg4QABiABBixAxiDARiKBcICCBAAGIAEGLEDwgIFEC4YgATCAgcQABiABBgKwgILEC4YgAQYxwEYrwHCAggQABiABBiiBMICChAuGNEDGMcBGB7CAgQQABgewgIHECEYoAEYCpgDAJIHBDItMjWgB5-3AQ&sclient=gws-wiz#lrd=0x48760640814ce7b7:0x4899b8fae2b5b21a,1,,,,",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                width: "489",
                                height: "75",
                                src: "/wp-content/uploads/2024/07/google-1.png",
                                alt: "Google reviews",
                                srcSet: "/wp-content/uploads/2024/07/google-1.png 489w, /wp-content/uploads/2024/07/google-1-300x46.png 300w",
                                sizes: "(max-width: 489px) 100vw, 489px",
                                className: "mx-auto"
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 343,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                            lineNumber: 342,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 341,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                lineNumber: 312,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "my-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-5xl font-extrabold mb-4",
                                children: "Top Rated Chartered Accountants in London - Local Tax & Accounting Firm"
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 351,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-bold mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Discover Simple and Effective Accounting Solutions with Taxaccolega."
                                }, void 0, false, {
                                    fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                    lineNumber: 352,
                                    columnNumber: 51
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 352,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700 mb-6",
                                children: "Taxaccolega wasn’t built to be just another accountancy firm. Since we don't just do the numbers, so it grew from a simple belief: real support goes beyond spreadsheets. It means promptly answering the call when a client’s unsure. It means patiently explaining things without using jargons. And it means celebrating growth, not just tracking it."
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 353,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/about-us/",
                                className: "inline-block bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors",
                                children: "About-Us"
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 356,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 350,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            width: "2301",
                            height: "2540",
                            src: "/wp-content/uploads/2025/04/Tal-About-us-Section-Image-07.png",
                            alt: "About Us Section Image",
                            srcSet: "/wp-content/uploads/2025/04/Tal-About-us-Section-Image-07.png 2301w, /wp-content/uploads/2025/04/Tal-About-us-Section-Image-07-600x662.png 600w, /wp-content/uploads/2025/04/Tal-About-us-Section-Image-07-272x300.png 272w, /wp-content/uploads/2025/04/Tal-About-us-Section-Image-07-928x1024.png 928w, /wp-content/uploads/2025/04/Tal-About-us-Section-Image-07-768x848.png 768w, /wp-content/uploads/2025/04/Tal-About-us-Section-Image-07-1391x1536.png 1391w, /wp-content/uploads/2025/04/Tal-About-us-Section-Image-07-1855x2048.png 1855w",
                            sizes: "(max-width: 2301px) 100vw, 2301px",
                            className: "rounded-lg shadow-md"
                        }, void 0, false, {
                            fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                            lineNumber: 361,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 360,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2 mt-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-700",
                            children: "Chartered Accountants are financial professionals with specialised knowledge and expertise in tax laws, accounting, and financial management. They’re an essential resource for anyone seeking to optimise their tax efficiency and financial performance. Below, we’ll explore the different types of individuals and businesses who can benefit from chartered accountant services:"
                        }, void 0, false, {
                            fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                            lineNumber: 372,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 371,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                lineNumber: 349,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "my-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            width: "800",
                            height: "800",
                            src: "/wp-content/uploads/2025/04/TAL-Website-1.jpg",
                            alt: "Taxaccolega Website Illustration",
                            srcSet: "/wp-content/uploads/2025/04/TAL-Website-1.jpg 1008w, /wp-content/uploads/2025/04/TAL-Website-1-300x300.jpg 300w, /wp-content/uploads/2025/04/TAL-Website-1-100x100.jpg 100w, /wp-content/uploads/2025/04/TAL-Website-1-600x600.jpg 600w, /wp-content/uploads/2025/04/TAL-Website-1-150x150.jpg 150w, /wp-content/uploads/2025/04/TAL-Website-1-768x768.jpg 768w",
                            sizes: "(max-width: 800px) 100vw, 800px",
                            className: "rounded-lg shadow-md"
                        }, void 0, false, {
                            fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                            lineNumber: 381,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 380,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-semibold text-blue-600 mb-2",
                                children: "Our Achievements"
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 392,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-extrabold mb-4",
                                children: "Taxaccolega — Award-Winning. Accredited. Trusted."
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 393,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700 mb-6",
                                children: "From prestigious ACCA and ICAEW certifications and accreditations to honours from mayors, media, business networks, and industry leaders, Taxaccolega is more than just an accountancy firm. Being the top-rated, we are a symbol of trust, professional excellence and community-driven impact. Our accreditations, recognitions, and awards have backend stories of commitment. They reflect years of dedication to our clients, the people we proudly serve, and our craft. Whether you're a budding startup, a growing business, managing wealth, or an opportunistic like a seasoned investor, you're in safe and certified hands backed by top-rated chartered accountants and a team that will always go the extra mile for you."
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 394,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/awards-accolades-accreditations/",
                                className: "inline-block bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors",
                                children: "Achievements"
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 397,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 391,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2 mt-8 grid grid-cols-2 md:grid-cols-5 gap-4",
                        children: achievementImages.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                className: "flex justify-center items-center p-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: image.src,
                                    alt: image.alt,
                                    className: "max-w-full h-auto object-contain rounded-md shadow-sm"
                                }, void 0, false, {
                                    fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                    lineNumber: 404,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, index, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 403,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 401,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                lineNumber: 379,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "my-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl font-extrabold mb-6",
                        children: "The UK's Largest Online Accountants"
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 412,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-700 mb-4",
                        children: "Taxaccolega isn’t your average accounting firm. We’re a team of passionate online accountants dedicated to empowering businesses in the UK with the tools and support they need to thrive."
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 413,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-700 mb-4",
                        children: "We are the largest online accounting company in the United Kingdom, leveraging technology to provide a seamless and efficient experience for our clients."
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 416,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-700 mb-4",
                        children: "But size doesn’t mean impersonal service. At Taxaccolega, you’ll get a dedicated accountant who understands your unique business needs."
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 419,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-700 mb-6",
                        children: [
                            "To learn more about how we can help you grow your business, ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/contact-us/",
                                    className: "text-blue-600 hover:underline",
                                    children: "contact us today"
                                }, void 0, false, {
                                    fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                    lineNumber: 423,
                                    columnNumber: 79
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 423,
                                columnNumber: 71
                            }, ("TURBOPACK compile-time value", void 0)),
                            ":"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 422,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row gap-4 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://www.trustpilot.com/review/taxaccolega.co.uk",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    width: "800",
                                    height: "123",
                                    src: "/wp-content/uploads/2024/07/Trustpilot-1024x157.png",
                                    alt: "Trustpilot reviews",
                                    srcSet: "/wp-content/uploads/2024/07/Trustpilot-1024x157.png 1024w, /wp-content/uploads/2024/07/Trustpilot-600x92.png 600w, /wp-content/uploads/2024/07/Trustpilot-300x46.png 300w, /wp-content/uploads/2024/07/Trustpilot-768x118.png 768w, /wp-content/uploads/2024/07/Trustpilot-1536x236.png 1536w, /wp-content/uploads/2024/07/Trustpilot-2048x314.png 2048w",
                                    sizes: "(max-width: 800px) 100vw, 800px",
                                    className: "rounded-lg shadow-md"
                                }, void 0, false, {
                                    fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                    lineNumber: 427,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 426,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://www.google.com/search?q=taxaccolega+google+reviews&sca_esv=297d5f19dea10a07&sca_upv=1&sxsrf=ADLYWIJ23bi6HGNvbxp15gnfhlga0Kxqeg%3A1720107419671&source=hp&ei=m8GGZvarJpaH7NYP1v-p2AE&iflsig=AL9hbdgAAAAAZobPq_DmNkAfESl5SRggHQUhI1c0qF5J&ved=0ahUKEwi25eO9242HAxWWA9sEHdZ_ChsQ4dUDCBU&uact=5&oq=taxaccolega+google+reviews&gs_lp=Egdnd3Mtd2l6Ihp0YXhhY2NvbGVnYSBnb29nbGUgcmV2aWV3czIFECEYoAFIySBQAFjgHnAAeACQAQCYAY8CoAH-K6oBBDItMjW4AQPIAQD4AQGYAhmgAs8swgIQEC4YgAQYxwEYJxiKBRivAcICBBAjGCfCAgoQIxiABBgnGIoFwgIREC4YgAQYkQIY0QMYxwEYigXCAgsQABiABBiRAhiKBcICCxAAGIAEGLEDGIMBwgIFEAAYgATCAg4QABiABBixAxiDARiKBcICCBAAGIAEGLEDwgIFEC4YgATCAgcQABiABBgKwgILEC4YgAQYxwEYrwHCAggQABiABBiiBMICChAuGNEDGMcBGB7CAgQQABgewgIHECEYoAEYCpgDAJIHBDItMjWgB5-3AQ&sclient=gws-wiz#mpd=~13810665085480211432/customers/reviews",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    width: "800",
                                    height: "123",
                                    src: "/wp-content/uploads/2024/07/Googleeeeeeeeeeee-1024x157.png",
                                    alt: "Google reviews",
                                    srcSet: "/wp-content/uploads/2024/07/Googleeeeeeeeeeee-1024x157.png 1024w, /wp-content/uploads/2024/07/Googleeeeeeeeeeee-600x92.png 600w, /wp-content/uploads/2024/07/Googleeeeeeeeeeee-300x46.png 300w, /wp-content/uploads/2024/07/Googleeeeeeeeeeee-768x118.png 768w, /wp-content/uploads/2024/07/Googleeeeeeeeeeee-1536x236.png 1536w, /wp-content/uploads/2024/07/Googleeeeeeeeeeee-2048x314.png 2048w",
                                    sizes: "(max-width: 800px) 100vw, 800px",
                                    className: "rounded-lg shadow-md"
                                }, void 0, false, {
                                    fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                    lineNumber: 430,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 429,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 425,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        width: "800",
                        height: "560",
                        src: "/wp-content/uploads/2024/07/about-us-with-pic.png",
                        alt: "About us with picture",
                        srcSet: "/wp-content/uploads/2024/07/about-us-with-pic.png 1000w, /wp-content/uploads/2024/07/about-us-with-pic-600x420.png 600w, /wp-content/uploads/2024/07/about-us-with-pic-300x210.png 300w, /wp-content/uploads/2024/07/about-us-with-pic-768x538.png 768w",
                        sizes: "(max-width: 800px) 100vw, 800px",
                        className: "mt-8 rounded-lg shadow-md"
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 433,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                lineNumber: 411,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "my-12 bg-white p-8 rounded-lg shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl font-extrabold mb-8 text-center",
                        children: "Get in Touch"
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 446,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactItem, {
                                icon: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        "aria-hidden": "true",
                                        viewBox: "0 0 512 512",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "w-6 h-6 text-blue-600 fill-current",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                            lineNumber: 451,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                        lineNumber: 450,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                title: "Phone Number",
                                value: "020 8127 0728",
                                href: "tel:02081270728"
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 448,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactItem, {
                                icon: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        "aria-hidden": "true",
                                        viewBox: "0 0 448 512",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "w-6 h-6 text-green-500 fill-current",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                            lineNumber: 461,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                        lineNumber: 460,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                title: "Whatsapp",
                                value: "074 7117 0484",
                                href: "https://wa.me/07471170484"
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 458,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactItem, {
                                icon: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        "aria-hidden": "true",
                                        viewBox: "0 0 512 512",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "w-6 h-6 text-red-600 fill-current",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                            lineNumber: 471,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                        lineNumber: 470,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                title: "Email",
                                value: "info@taxaccolega.co.uk",
                                href: "mailto:info@taxaccolega.co.uk"
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 468,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactItem, {
                                icon: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        "aria-hidden": "true",
                                        viewBox: "0 0 384 512",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "w-6 h-6 text-gray-700 fill-current",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                            lineNumber: 481,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                        lineNumber: 480,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                title: "Address",
                                value: "187a London Road, Croydon, Surrey, CR0 2RJ"
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 478,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 447,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "my-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            loading: "lazy",
                            src: "https://maps.google.com/maps?q=187a%20London%20Road%2C%20Croydon%2C%20Surrey%2C%20CR0%202RJ&t=m&z=11&output=embed&iwloc=near",
                            title: "187a London Road, Croydon, Surrey, CR0 2RJ",
                            "aria-label": "187a London Road, Croydon, Surrey, CR0 2RJ",
                            className: "w-full h-80 rounded-lg shadow-inner"
                        }, void 0, false, {
                            fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                            lineNumber: 490,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 489,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold mb-6 text-center",
                        children: "Send Us a Message"
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 499,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        method: "post",
                        name: "New Form",
                        className: "max-w-xl mx-auto space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "hidden",
                                name: "post_id",
                                value: "12"
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 501,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "hidden",
                                name: "form_id",
                                value: "9633850"
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 502,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "hidden",
                                name: "referer_title",
                                value: ""
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 503,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "form-field-name",
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Name"
                                    }, void 0, false, {
                                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                        lineNumber: 505,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "form_fields[name]",
                                        id: "form-field-name",
                                        placeholder: "Name",
                                        className: "w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                        lineNumber: 506,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 504,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "form-field-email",
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Email"
                                    }, void 0, false, {
                                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                        lineNumber: 509,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        name: "form_fields[email]",
                                        id: "form-field-email",
                                        placeholder: "Email",
                                        required: true,
                                        "aria-required": "true",
                                        className: "w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                        lineNumber: 510,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 508,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "form-field-message",
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Message"
                                    }, void 0, false, {
                                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                        lineNumber: 513,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        name: "form_fields[message]",
                                        id: "form-field-message",
                                        rows: "7",
                                        placeholder: "Message",
                                        className: "w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                        lineNumber: 514,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 512,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors",
                                children: "Send"
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 516,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 500,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                lineNumber: 445,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "my-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl font-extrabold mb-8 text-center",
                        children: "Who Do WE Help"
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 524,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        width: "300",
                        height: "267",
                        src: "/wp-content/uploads/2025/04/Tal-About-us-Section-Image-05-300x267.png",
                        alt: "Illustration of professionals",
                        srcSet: "/wp-content/uploads/2025/04/Tal-About-us-Section-Image-05-300x267.png 300w, /wp-content/uploads/2025/04/Tal-About-us-Section-Image-05-600x534.png 600w, /wp-content/uploads/2025/04/Tal-About-us-Section-Image-05-1024x912.png 1024w, /wp-content/uploads/2025/04/Tal-About-us-Section-Image-05-768x684.png 768w, /wp-content/uploads/2025/04/Tal-About-us-Section-Image-05-1536x1368.png 1536w, /wp-content/uploads/2025/04/Tal-About-us-Section-Image-05-2048x1824.png 2048w",
                        sizes: "(max-width: 300px) 100vw, 300px",
                        className: "mx-auto my-8 rounded-lg shadow-md"
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 525,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8",
                        children: industriesWeHelp.map((industry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: industry.href,
                                className: "flex items-center p-4 border rounded-md shadow-sm hover:shadow-md transition-shadow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckmarkIcon, {}, void 0, false, {
                                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                        lineNumber: 538,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-blue-600 hover:underline",
                                        children: industry.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                        lineNumber: 539,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, index, true, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 537,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 535,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-700 mb-4",
                        children: "If your current accountant / accounting firm is unable to compile your accounts and figures or not being up to the mark that you expect, it may be time for a change. Though changing accountants might be intimidating, we follow the correct procedures and make it simple, stress-free, and profitable for your company."
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 544,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-700 mb-4",
                        children: "Top-rated Chartered Accountants at Taxaccolega, with professional accounting experience serving UK clients since 2011, make the entire transition process of changing an accountant easy for you. Whether you are upset due to poor communication, no tax-saving ideas, or hidden costs, our accounting is transparent, proactive, and client-centered."
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 547,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-700 mb-6",
                        children: "Don’t settle for mediocre service. Switch today! Get in touch for a smooth, stress-free transition."
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 550,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/switch-accountant/",
                        className: "inline-block bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors",
                        children: "Switch Account"
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 553,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                lineNumber: 523,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "my-12 text-center bg-blue-600 text-white p-8 rounded-lg shadow-xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-5xl font-extrabold mb-2",
                                    children: "1+"
                                }, void 0, false, {
                                    fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                    lineNumber: 562,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl font-semibold",
                                    children: "Project Completed"
                                }, void 0, false, {
                                    fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                    lineNumber: 563,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                            lineNumber: 561,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-5xl font-extrabold mb-2",
                                    children: "1+"
                                }, void 0, false, {
                                    fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                    lineNumber: 566,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl font-semibold",
                                    children: "Client Satisfication"
                                }, void 0, false, {
                                    fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                    lineNumber: 567,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                            lineNumber: 565,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-5xl font-extrabold mb-2",
                                    children: "1+"
                                }, void 0, false, {
                                    fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                    lineNumber: 570,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl font-semibold",
                                    children: "Business Consultant"
                                }, void 0, false, {
                                    fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                    lineNumber: 571,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                            lineNumber: 569,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-5xl font-extrabold mb-2",
                                    children: "1+"
                                }, void 0, false, {
                                    fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                    lineNumber: 574,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl font-semibold",
                                    children: "Awards"
                                }, void 0, false, {
                                    fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                    lineNumber: 575,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                            lineNumber: 573,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                    lineNumber: 560,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                lineNumber: 559,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "my-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-extrabold mb-4",
                                children: "Speak To the UK's"
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 583,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-extrabold text-orange-600 mb-6",
                                children: "Top Rated Chartered Accountant Today"
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 584,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-bold mb-4",
                                children: "Are you looking for a local accountant you can trust?"
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 585,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700 mb-4",
                                children: "Our expert tax consultants, tax specialists, and chartered accountants at Taxaccolega are top-rated in the UK. Whether you need online accountant services or prefer a face-to-face meeting with an accountant in London, consider us always at your doorstep."
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 586,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700 mb-4",
                                children: "Book a call or video meeting with one of our experienced and specialist UK accountants today. Whether you’re looking for an online accountant in Croydon or a chartered accountant in London, UK, get to know how our personalized solutions can take your business off,"
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 589,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700 mb-6",
                                children: "Let’s talk - schedule your free consultation now!"
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 592,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/schedule-a-phone-call-or-video-meeting/",
                                className: "inline-block bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors",
                                children: "Book a call & Meeting"
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 595,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 582,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            width: "2500",
                            height: "2227",
                            src: "/wp-content/uploads/2025/04/Tal-About-us-Section-Image-03.png",
                            alt: "Taxaccolega About Us Section",
                            srcSet: "/wp-content/uploads/2025/04/Tal-About-us-Section-Image-03.png 2500w, /wp-content/uploads/2025/04/Tal-About-us-Section-Image-03-600x534.png 600w, /wp-content/uploads/2025/04/Tal-About-us-Section-Image-03-300x267.png 300w, /wp-content/uploads/2025/04/Tal-About-us-Section-Image-03-1024x912.png 1024w, /wp-content/uploads/2025/04/Tal-About-us-Section-Image-03-768x684.png 768w, /wp-content/uploads/2025/04/Tal-About-us-Section-Image-03-1536x1368.png 1536w, /wp-content/uploads/2025/04/Tal-About-us-Section-Image-03-2048x1824.png 2048w",
                            sizes: "(max-width: 2500px) 100vw, 2500px",
                            className: "rounded-lg shadow-md"
                        }, void 0, false, {
                            fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                            lineNumber: 600,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 599,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                lineNumber: 581,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "my-12 text-center bg-white p-8 rounded-lg shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl font-extrabold mb-4",
                        children: "Our Recent Google Reviews"
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 614,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                        className: "mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            width: "300",
                            height: "46",
                            src: "/wp-content/uploads/2024/07/Googleeeeeeeeeeee-300x46.png",
                            alt: "Google logo",
                            className: "mx-auto"
                        }, void 0, false, {
                            fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                            lineNumber: 616,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 615,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold mb-4",
                        children: "5.0 | 187 reviews"
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 618,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-gray-600",
                        children: "[Trustindex Google Reviews Widget Placeholder]"
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 619,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                lineNumber: 613,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "my-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl font-extrabold mb-8 text-center",
                        children: "SOFTWARES"
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 624,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap justify-center gap-2 mb-8",
                        children: softwareTabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `py-2 px-4 rounded-md text-sm font-medium ${activeTab === tab.name ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-colors`,
                                onClick: ()=>setActiveTab(tab.name),
                                "aria-selected": activeTab === tab.name,
                                role: "tab",
                                children: tab.name
                            }, tab.name, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 627,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 625,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-50 p-6 rounded-lg shadow-inner",
                        children: softwareTabs.find((tab)=>tab.name === activeTab)?.content
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 642,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                lineNumber: 623,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "my-12 bg-blue-100 p-8 rounded-lg text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl font-extrabold mb-6",
                        children: "Get in touch with the Taxaccolega Chartered Accountants team"
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 649,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-700 mb-4 max-w-2xl mx-auto",
                        children: "Managing your finances is now easier. With years of expertise in accountancy and finance, Taxaccolega Chartered Accountants are here to eliminate the complexities of running your business. This ensures you can focus on your core activities worry-free. Your peace of mind is our priority, and our seasoned team of contractor accountants is ready to assist you with any accounting concerns."
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 650,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-700 mb-6 max-w-2xl mx-auto",
                        children: "You can stay on top of relevant industry news by checking out our blog page, where we discuss topical subjects to further help you answer any questions you may have regarding your accounts. If you wish to calculate your take-home pay, we provide a contractor tax calculator that will easily and quickly give you accurate results. To learn more about how we can help you grow your business, contact us today:"
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 653,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/contact-us/",
                        className: "inline-block bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors",
                        children: "Contact Us Today"
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 656,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                lineNumber: 648,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "my-12 bg-white p-8 rounded-lg shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl font-extrabold mb-6 text-center",
                        children: "Refer and Earn with Taxaccolega"
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 663,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-700 mb-4 max-w-2xl mx-auto",
                        children: "Know someone who could benefit from expert accounting services or is probably unhappy or apprehensive with his/her current accountant? You can refer them to Taxaccolega and earn quite a handsome sum of money out of that payment! Whether you're a client, visitor, or a friend, our Refer and Earn programme is your nice chance to make some extra money reliably."
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 664,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                        className: "list-decimal list-inside text-gray-700 mb-6 max-w-2xl mx-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "It’s easy! Just refer a new client to us, and once they sign up, you’ll receive a handsome percentage as a thank you for your referral. No limits, no complicated rules — just a straightforward way to earn for helping others. Start earning today by referring your friends, family, or colleagues to Taxaccolega. We’re here to take care of the numbers while you enjoy the rewards. "
                        }, void 0, false, {
                            fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                            lineNumber: 668,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 667,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/refer-and-earn",
                            className: "inline-block bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors",
                            children: "Refer & Earn"
                        }, void 0, false, {
                            fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                            lineNumber: 671,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 670,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                lineNumber: 662,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "my-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl font-extrabold mb-8 text-center",
                        children: "FAQs"
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 679,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 max-w-3xl mx-auto",
                        children: faqs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-gray-200 rounded-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "flex justify-between items-center w-full p-4 text-left font-semibold text-lg bg-gray-50 hover:bg-gray-100 focus:outline-none rounded-t-md",
                                        onClick: ()=>toggleFaq(index),
                                        "aria-expanded": activeFaq === index,
                                        "aria-controls": `faq-content-${index}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                activeFaq === index ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronUpIcon, {}, void 0, false, {
                                                    fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                                    lineNumber: 690,
                                                    columnNumber: 42
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronDownIcon, {}, void 0, false, {
                                                    fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                                    lineNumber: 690,
                                                    columnNumber: 62
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: faq.question
                                                }, void 0, false, {
                                                    fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                                    lineNumber: 691,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                            lineNumber: 689,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                        lineNumber: 683,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    activeFaq === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        id: `faq-content-${index}`,
                                        className: "p-4 text-gray-700 bg-white rounded-b-md",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: faq.answer
                                        }, void 0, false, {
                                            fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                            lineNumber: 696,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                        lineNumber: 695,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, index, true, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 682,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 680,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                lineNumber: 678,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "my-12 p-8 bg-gray-800 text-white rounded-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold mb-6 text-center",
                        children: "Contact - Us"
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 706,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-semibold mb-2",
                                        children: "Address"
                                    }, void 0, false, {
                                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                        lineNumber: 709,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "187a London Road, Croydon, Surrey, CR0 2RJ"
                                    }, void 0, false, {
                                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                        lineNumber: 710,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 708,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-semibold mb-2",
                                        children: "Email"
                                    }, void 0, false, {
                                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                        lineNumber: 713,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "mailto:info@taxaccolega.co.uk",
                                            className: "text-blue-300 hover:underline",
                                            children: "info@taxaccolega.co.uk"
                                        }, void 0, false, {
                                            fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                            lineNumber: 714,
                                            columnNumber: 20
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                        lineNumber: 714,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 712,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-semibold mb-2",
                                        children: "Phone No"
                                    }, void 0, false, {
                                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                        lineNumber: 717,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "tel:02081270728",
                                            className: "text-blue-300 hover:underline",
                                            children: "020 8127 0728"
                                        }, void 0, false, {
                                            fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                            lineNumber: 718,
                                            columnNumber: 20
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                        lineNumber: 718,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://wa.me/447471170484",
                                            className: "text-blue-300 hover:underline",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: "074 7117 0484"
                                        }, void 0, false, {
                                            fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                            lineNumber: 719,
                                            columnNumber: 20
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                        lineNumber: 719,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 716,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-semibold mb-2",
                                        children: "Opening Hours"
                                    }, void 0, false, {
                                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                        lineNumber: 722,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Monday - Friday"
                                    }, void 0, false, {
                                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                        lineNumber: 723,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "9:00 am - 5:00 pm"
                                    }, void 0, false, {
                                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                        lineNumber: 724,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 721,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 707,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center gap-6 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://www.facebook.com/Taxaccolega",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "flex items-center text-blue-300 hover:text-blue-400 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 512 512",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "w-6 h-6 mr-2 fill-current",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                            lineNumber: 730,
                                            columnNumber: 117
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                        lineNumber: 730,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Facebook"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 729,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://twitter.com/Taxaccolega",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "flex items-center text-blue-300 hover:text-blue-400 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 512 512",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "w-6 h-6 mr-2 fill-current",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                            lineNumber: 734,
                                            columnNumber: 117
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                        lineNumber: 734,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Twitter"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 733,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://plus.google.com/u/0/100672948850520944033",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "flex items-center text-blue-300 hover:text-blue-400 transition-colors",
                                children: "Jki-google-plus-g"
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 738,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 728,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold mb-6 text-center",
                        children: "Send Us a Message"
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 744,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        method: "post",
                        name: "New Form Footer",
                        className: "max-w-xl mx-auto space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "hidden",
                                name: "post_id",
                                value: "12"
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 746,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "hidden",
                                name: "form_id",
                                value: "977bb50"
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 747,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "hidden",
                                name: "referer_title",
                                value: ""
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 748,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "form-field-name-footer",
                                        className: "block text-sm font-medium text-gray-200 mb-1",
                                        children: "Name"
                                    }, void 0, false, {
                                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                        lineNumber: 750,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "form_fields[name]",
                                        id: "form-field-name-footer",
                                        placeholder: "Name",
                                        className: "w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                        lineNumber: 751,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 749,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "form-field-email-footer",
                                        className: "block text-sm font-medium text-gray-200 mb-1",
                                        children: "Email"
                                    }, void 0, false, {
                                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                        lineNumber: 754,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        name: "form_fields[email]",
                                        id: "form-field-email-footer",
                                        placeholder: "Email",
                                        required: true,
                                        "aria-required": "true",
                                        className: "w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                        lineNumber: 755,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 753,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "form-field-message-footer",
                                        className: "block text-sm font-medium text-gray-200 mb-1",
                                        children: "Message"
                                    }, void 0, false, {
                                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                        lineNumber: 758,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        name: "form_fields[message]",
                                        id: "form-field-message-footer",
                                        rows: "7",
                                        placeholder: "Message",
                                        className: "w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                        lineNumber: 759,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 757,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors",
                                children: "Send"
                            }, void 0, false, {
                                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                                lineNumber: 761,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                        lineNumber: 745,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/legacy-templates/HomeOld.jsx",
                lineNumber: 705,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/legacy-templates/HomeOld.jsx",
        lineNumber: 251,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(HomeOld, "x0wMDt3tTd+u3QyS72V0oTpeyJw=");
_c6 = HomeOld;
const __TURBOPACK__default__export__ = HomeOld;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "StarIcon");
__turbopack_context__.k.register(_c1, "CheckmarkIcon");
__turbopack_context__.k.register(_c2, "ChevronDownIcon");
__turbopack_context__.k.register(_c3, "ChevronUpIcon");
__turbopack_context__.k.register(_c4, "ServiceItem");
__turbopack_context__.k.register(_c5, "ContactItem");
__turbopack_context__.k.register(_c6, "HomeOld");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/Home.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$legacy$2d$templates$2f$HomeOld$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/legacy-templates/HomeOld.jsx [app-client] (ecmascript)");
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$legacy$2d$templates$2f$HomeOld$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/react-pages/Home.jsx",
        lineNumber: 5,
        columnNumber: 10
    }, this);
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/AboutUs.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutUs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
function AboutUs() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center max-w-3xl mx-auto mb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-extrabold sm:text-5xl tracking-tight mb-4 text-[#1d3c45]",
                        children: "About Our Team"
                    }, void 0, false, {
                        fileName: "[project]/src/react-pages/AboutUs.jsx",
                        lineNumber: 7,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-gray-600",
                        children: "Professional, reliable, and proactively supporting London and UK-wide businesses with custom chartered accounting solutions."
                    }, void 0, false, {
                        fileName: "[project]/src/react-pages/AboutUs.jsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/react-pages/AboutUs.jsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold mb-4 text-[#1d3c45]",
                                children: "Our Mission"
                            }, void 0, false, {
                                fileName: "[project]/src/react-pages/AboutUs.jsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mb-4 leading-relaxed",
                                children: "At Taxaccolega, we strive to take the stress, confusion, and complexity out of tax compliance. Our seasoned chartered accountants and registered tax advisors work side-by-side with limited company owners, contractors, landlords, and sole traders."
                            }, void 0, false, {
                                fileName: "[project]/src/react-pages/AboutUs.jsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 leading-relaxed",
                                children: "We do more than count numbers. We identify tax-saving opportunities, manage deadlines, and establish robust financial setups to let you focus on what you do best."
                            }, void 0, false, {
                                fileName: "[project]/src/react-pages/AboutUs.jsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/react-pages/AboutUs.jsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "https://placehold.co/800x600?text=Taxaccolega+Professionals",
                            alt: "Taxaccolega Team",
                            className: "rounded-2xl shadow-md border border-gray-100"
                        }, void 0, false, {
                            fileName: "[project]/src/react-pages/AboutUs.jsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/react-pages/AboutUs.jsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/react-pages/AboutUs.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-[#1d3c45] mb-2",
                        children: "Our Accreditations"
                    }, void 0, false, {
                        fileName: "[project]/src/react-pages/AboutUs.jsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500 max-w-2xl mx-auto mb-4",
                        children: "Licensed under statutory regulations, registered with supervisory bodies, and maintaining top marks for compliance and audit-ready execution."
                    }, void 0, false, {
                        fileName: "[project]/src/react-pages/AboutUs.jsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-semibold text-orange-600 uppercase tracking-wider",
                        children: "ICAEW & CTA Partners"
                    }, void 0, false, {
                        fileName: "[project]/src/react-pages/AboutUs.jsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/react-pages/AboutUs.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/react-pages/AboutUs.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = AboutUs;
var _c;
__turbopack_context__.k.register(_c, "AboutUs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/legacy-templates/BlogOld.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
// BlogPostCard component to render individual blog entries
const BlogPostCard = ({ post })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "mb-8 p-4 border border-gray-200 rounded-lg shadow-sm bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: post.postLink,
                className: "block mb-4 overflow-hidden rounded-md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: post.imageUrl,
                    alt: post.imageAlt || post.title,
                    width: post.imageWidth,
                    height: post.imageHeight,
                    // Note: srcset and sizes attributes are not directly used here
                    // as `src` is sufficient for this representation,
                    // but they would be included in a more advanced image component.
                    className: "w-full h-auto object-cover transition-transform duration-300 hover:scale-105",
                    loading: "lazy"
                }, void 0, false, {
                    fileName: "[project]/src/legacy-templates/BlogOld.jsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/legacy-templates/BlogOld.jsx",
                lineNumber: 7,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl font-semibold mb-2 leading-tight",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: post.postLink,
                    className: "text-blue-700 hover:text-blue-900 hover:underline transition-colors",
                    children: post.title
                }, void 0, false, {
                    fileName: "[project]/src/legacy-templates/BlogOld.jsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/legacy-templates/BlogOld.jsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-700 text-base",
                children: post.excerpt
            }, void 0, false, {
                fileName: "[project]/src/legacy-templates/BlogOld.jsx",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/legacy-templates/BlogOld.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = BlogPostCard;
const BlogOld = ()=>{
    // Extracted blog post data from the raw WordPress HTML content
    // In a real application, this data would typically come from an API call or props.
    const blogPosts = [
        {
            id: 'post-4836',
            postLink: '/chancellor-makes-full-expensing-permanent-in-autumn-statement-9-11/',
            imageUrl: '/wp-content/uploads/2024/01/skynews-jeremy-hunt-autumn-statement_6368432.jpg',
            imageAlt: '',
            imageWidth: 768,
            imageHeight: 432,
            title: 'Work from Home Expenses and What can be claimed?',
            excerpt: 'Work from Home Expenses and What can be claimed? Working from home has become a new normal after the outbreak...'
        },
        {
            id: 'post-4837',
            postLink: '/chancellor-makes-full-expensing-permanent-in-autumn-statement-9-10/',
            imageUrl: '/wp-content/uploads/2024/01/skynews-jeremy-hunt-autumn-statement_6368432.jpg',
            imageAlt: '',
            imageWidth: 768,
            imageHeight: 432,
            title: 'Will I have to pay taxes on my State Pension?',
            excerpt: 'Will I have to pay taxes on my State Pension? What is a State Pension?State Pension is a weekly income...'
        },
        {
            id: 'post-4835',
            postLink: '/chancellor-makes-full-expensing-permanent-in-autumn-statement-9-9/',
            imageUrl: '/wp-content/uploads/2024/01/skynews-jeremy-hunt-autumn-statement_6368432.jpg',
            imageAlt: '',
            imageWidth: 768,
            imageHeight: 432,
            title: 'When will I have to pay Capital Gains Tax on Crypto Assets?',
            excerpt: 'When will I have to pay Capital Gains Tax on Crypto Assets? What are Crypto Assets?Crypto assets also known as...'
        },
        {
            id: 'post-4838',
            postLink: '/chancellor-makes-full-expensing-permanent-in-autumn-statement-9-8/',
            imageUrl: '/wp-content/uploads/2024/01/skynews-jeremy-hunt-autumn-statement_6368432.jpg',
            imageAlt: '',
            imageWidth: 768,
            imageHeight: 432,
            title: 'What do I need to do if I want to close my Limited Company?',
            excerpt: 'What do I need to do if I want to close my Limited Company? If you are thinking of closing...'
        },
        {
            id: 'post-4839',
            postLink: '/chancellor-makes-full-expensing-permanent-in-autumn-statement-9-7/',
            imageUrl: '/wp-content/uploads/2024/01/skynews-jeremy-hunt-autumn-statement_6368432.jpg',
            imageAlt: '',
            imageWidth: 768,
            imageHeight: 432,
            title: 'What are the tax implications if I put my money in a trust?',
            excerpt: 'What are the tax implications if I put my money in a trust? You will be putting money in a...'
        },
        {
            id: 'post-4841',
            postLink: '/chancellor-makes-full-expensing-permanent-in-autumn-statement-9-5/',
            imageUrl: '/wp-content/uploads/2024/01/skynews-jeremy-hunt-autumn-statement_6368432.jpg',
            imageAlt: '',
            imageWidth: 768,
            imageHeight: 432,
            title: 'VAT Deferral Payments',
            excerpt: 'VAT Deferral Payments All the businesses who had their VAT payments deferred till 30 June 2020 need to take action...'
        },
        {
            id: 'post-4842',
            postLink: '/chancellor-makes-full-expensing-permanent-in-autumn-statement-9-4/',
            imageUrl: '/wp-content/uploads/2024/01/skynews-jeremy-hunt-autumn-statement_6368432.jpg',
            imageAlt: '',
            imageWidth: 768,
            imageHeight: 432,
            title: 'I have an Online Store &#8211; What are the VAT implications?',
            excerpt: 'I have an Online Store &#8211; What are the VAT implications? If you are thinking of starting a business online...'
        },
        {
            id: 'post-4843',
            postLink: '/chancellor-makes-full-expensing-permanent-in-autumn-statement-9-3/',
            imageUrl: '/wp-content/uploads/2024/01/skynews-jeremy-hunt-autumn-statement_6368432.jpg',
            imageAlt: '',
            imageWidth: 768,
            imageHeight: 432,
            title: 'I have income from abroad do i report it to HMRC?',
            excerpt: 'I have income from abroad do i report it to HMRC? In the time of pandemic as the economic uncertainty...'
        },
        {
            id: 'post-4834',
            postLink: '/chancellor-makes-full-expensing-permanent-in-autumn-statement-9-2/',
            imageUrl: '/wp-content/uploads/2024/01/skynews-jeremy-hunt-autumn-statement_6368432.jpg',
            imageAlt: '',
            imageWidth: 768,
            imageHeight: 432,
            title: 'Trading loss &#8211; should I de register as being self-employed?',
            excerpt: 'Trading loss &#8211; should I de register as being self-employed? In the past year the performance of many businesses has...'
        },
        {
            id: 'post-4840',
            postLink: '/chancellor-makes-full-expensing-permanent-in-autumn-statement-9-6/',
            imageUrl: '/wp-content/uploads/2024/01/skynews-jeremy-hunt-autumn-statement_6368432.jpg',
            imageAlt: '',
            imageWidth: 768,
            imageHeight: 432,
            title: 'What are dividends and what taxes do I pay on them?',
            excerpt: 'What are dividends and what taxes do I pay on them? If you are running a limited company or about...'
        },
        {
            id: 'post-4700',
            postLink: '/change-in-the-income-tax-additional-rate-threshold-and-how-can-i-reduce-my-taxes-25/',
            imageUrl: '/wp-content/uploads/2024/01/l_969072_122642_updates.webp',
            imageAlt: '',
            imageWidth: 700,
            imageHeight: 390,
            title: 'The Inheritance tax planning and Covid-19',
            excerpt: 'The Inheritance tax planning and Covid-19 After World War two the inheritance tax raised to 80 pc. The current crisis...'
        },
        {
            id: 'post-4702',
            postLink: '/change-in-the-income-tax-additional-rate-threshold-and-how-can-i-reduce-my-taxes-24/',
            imageUrl: '/wp-content/uploads/2024/01/l_969072_122642_updates.webp',
            imageAlt: '',
            imageWidth: 700,
            imageHeight: 390,
            title: 'Starting an Online Business and Covid-19',
            excerpt: 'Starting an Online Business and Covid-19 The Digital Software Companies for video conferencing predicted a boom in the industry. But...'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto p-4 sm:p-6 lg:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl sm:text-5xl font-extrabold text-gray-900 mb-10 text-center",
                children: "Blogs"
            }, void 0, false, {
                fileName: "[project]/src/legacy-templates/BlogOld.jsx",
                lineNumber: 159,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: blogPosts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BlogPostCard, {
                        post: post
                    }, post.id, false, {
                        fileName: "[project]/src/legacy-templates/BlogOld.jsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/legacy-templates/BlogOld.jsx",
                lineNumber: 162,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mt-12 p-4 border-t border-gray-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50   cursor-not-allowed opacity-70",
                        title: "Previous",
                        "aria-disabled": "true",
                        children: "Previous"
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/BlogOld.jsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50   cursor-not-allowed opacity-70",
                        title: "Next",
                        "aria-disabled": "true",
                        children: "Next"
                    }, void 0, false, {
                        fileName: "[project]/src/legacy-templates/BlogOld.jsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/legacy-templates/BlogOld.jsx",
                lineNumber: 169,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/legacy-templates/BlogOld.jsx",
        lineNumber: 157,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = BlogOld;
const __TURBOPACK__default__export__ = BlogOld;
var _c, _c1;
__turbopack_context__.k.register(_c, "BlogPostCard");
__turbopack_context__.k.register(_c1, "BlogOld");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/Blog.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Blog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$legacy$2d$templates$2f$BlogOld$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/legacy-templates/BlogOld.jsx [app-client] (ecmascript)");
;
;
;
function Blog() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$legacy$2d$templates$2f$BlogOld$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/react-pages/Blog.jsx",
        lineNumber: 5,
        columnNumber: 10
    }, this);
}
_c = Blog;
var _c;
__turbopack_context__.k.register(_c, "Blog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/ContactUs.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactUs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function ContactUs() {
    _s();
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = (e)=>{
        e.preventDefault();
        setSubmitted(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center max-w-3xl mx-auto mb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-extrabold sm:text-5xl tracking-tight mb-4 text-[#1d3c45]",
                        children: "Contact Us"
                    }, void 0, false, {
                        fileName: "[project]/src/react-pages/ContactUs.jsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-gray-600",
                        children: "Have a question or want to get a custom quote? Fill out the form or speak directly with our team."
                    }, void 0, false, {
                        fileName: "[project]/src/react-pages/ContactUs.jsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/react-pages/ContactUs.jsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-[#1d3c45] mb-4",
                                        children: "Get In Touch"
                                    }, void 0, false, {
                                        fileName: "[project]/src/react-pages/ContactUs.jsx",
                                        lineNumber: 26,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 mb-6 leading-relaxed",
                                        children: "We look forward to handling your small business accounting, personal tax, payroll, or corporate returns. Our team is available online, via phone, or at our office."
                                    }, void 0, false, {
                                        fileName: "[project]/src/react-pages/ContactUs.jsx",
                                        lineNumber: 27,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/react-pages/ContactUs.jsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "p-3 bg-orange-50 text-[#d2601a] rounded-xl font-bold",
                                                children: "📞"
                                            }, void 0, false, {
                                                fileName: "[project]/src/react-pages/ContactUs.jsx",
                                                lineNumber: 34,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        className: "text-sm font-semibold text-gray-500",
                                                        children: "Phone"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/react-pages/ContactUs.jsx",
                                                        lineNumber: 36,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        className: "text-lg font-bold text-[#1d3c45]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "tel:02081270728",
                                                            className: "hover:underline",
                                                            children: "020 8127 0728"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/react-pages/ContactUs.jsx",
                                                            lineNumber: 37,
                                                            columnNumber: 66
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/react-pages/ContactUs.jsx",
                                                        lineNumber: 37,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/react-pages/ContactUs.jsx",
                                                lineNumber: 35,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/react-pages/ContactUs.jsx",
                                        lineNumber: 33,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "p-3 bg-orange-50 text-[#d2601a] rounded-xl font-bold",
                                                children: "💬"
                                            }, void 0, false, {
                                                fileName: "[project]/src/react-pages/ContactUs.jsx",
                                                lineNumber: 42,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        className: "text-sm font-semibold text-gray-500",
                                                        children: "WhatsApp"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/react-pages/ContactUs.jsx",
                                                        lineNumber: 44,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        className: "text-lg font-bold text-[#1d3c45]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "https://wa.me/447471170484",
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "hover:underline",
                                                            children: "074 7117 0484"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/react-pages/ContactUs.jsx",
                                                            lineNumber: 45,
                                                            columnNumber: 66
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/react-pages/ContactUs.jsx",
                                                        lineNumber: 45,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/react-pages/ContactUs.jsx",
                                                lineNumber: 43,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/react-pages/ContactUs.jsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "p-3 bg-orange-50 text-[#d2601a] rounded-xl font-bold",
                                                children: "📍"
                                            }, void 0, false, {
                                                fileName: "[project]/src/react-pages/ContactUs.jsx",
                                                lineNumber: 50,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        className: "text-sm font-semibold text-gray-500",
                                                        children: "Office Address"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/react-pages/ContactUs.jsx",
                                                        lineNumber: 52,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        className: "text-gray-700 font-medium",
                                                        children: "187a London Road, Croydon, Surrey, CR0 2RJ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/react-pages/ContactUs.jsx",
                                                        lineNumber: 53,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/react-pages/ContactUs.jsx",
                                                lineNumber: 51,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/react-pages/ContactUs.jsx",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/react-pages/ContactUs.jsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/react-pages/ContactUs.jsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm",
                        children: submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-4xl",
                                    children: "🎉"
                                }, void 0, false, {
                                    fileName: "[project]/src/react-pages/ContactUs.jsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-[#1d3c45] mt-4 mb-2",
                                    children: "Message Sent Successfully!"
                                }, void 0, false, {
                                    fileName: "[project]/src/react-pages/ContactUs.jsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 text-sm",
                                    children: "Thank you for contacting Taxaccolega. One of our chartered accountants will get back to you shortly."
                                }, void 0, false, {
                                    fileName: "[project]/src/react-pages/ContactUs.jsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/react-pages/ContactUs.jsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Your Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/react-pages/ContactUs.jsx",
                                            lineNumber: 70,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            required: true,
                                            type: "text",
                                            className: "w-full p-3 border border-gray-200 rounded-xl bg-white",
                                            placeholder: "Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/react-pages/ContactUs.jsx",
                                            lineNumber: 71,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/react-pages/ContactUs.jsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Your Email"
                                        }, void 0, false, {
                                            fileName: "[project]/src/react-pages/ContactUs.jsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            required: true,
                                            type: "email",
                                            className: "w-full p-3 border border-gray-200 rounded-xl bg-white",
                                            placeholder: "Email"
                                        }, void 0, false, {
                                            fileName: "[project]/src/react-pages/ContactUs.jsx",
                                            lineNumber: 75,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/react-pages/ContactUs.jsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Your Phone"
                                        }, void 0, false, {
                                            fileName: "[project]/src/react-pages/ContactUs.jsx",
                                            lineNumber: 78,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            required: true,
                                            type: "tel",
                                            className: "w-full p-3 border border-gray-200 rounded-xl bg-white",
                                            placeholder: "Phone Number"
                                        }, void 0, false, {
                                            fileName: "[project]/src/react-pages/ContactUs.jsx",
                                            lineNumber: 79,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/react-pages/ContactUs.jsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Your Message"
                                        }, void 0, false, {
                                            fileName: "[project]/src/react-pages/ContactUs.jsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            required: true,
                                            rows: 4,
                                            className: "w-full p-3 border border-gray-200 rounded-xl bg-white",
                                            placeholder: "How can we help you?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/react-pages/ContactUs.jsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/react-pages/ContactUs.jsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "w-full py-3 text-white font-semibold rounded-xl transition-all",
                                    style: {
                                        backgroundColor: '#d2601a'
                                    },
                                    children: "Send Message"
                                }, void 0, false, {
                                    fileName: "[project]/src/react-pages/ContactUs.jsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/react-pages/ContactUs.jsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/react-pages/ContactUs.jsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/react-pages/ContactUs.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/react-pages/ContactUs.jsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(ContactUs, "S6ipnhtDax9I0+B/fnlVz3+f6e8=");
_c = ContactUs;
var _c;
__turbopack_context__.k.register(_c, "ContactUs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ServiceRenderer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServiceRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
function ServiceRenderer({ title, subtitle, bullets = [], children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-gradient-to-br from-slate-50 to-[#1d3c45]/5 py-16 border-b border-gray-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-600 rounded-full bg-orange-50 mb-4",
                            children: "Taxaccolega Chartered Accountants"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServiceRenderer.jsx",
                            lineNumber: 9,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl sm:text-5xl font-extrabold text-[#1d3c45] tracking-tight mb-4",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServiceRenderer.jsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-gray-600 max-w-3xl leading-relaxed",
                            children: subtitle || 'Expert corporate compliance, tax filing, and strategy tailored for modern UK businesses.'
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServiceRenderer.jsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ServiceRenderer.jsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ServiceRenderer.jsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-2 space-y-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-gray-700 leading-relaxed text-lg space-y-6",
                                    children: children || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Completing your ",
                                            title,
                                            " requirements on time is critical to safeguarding performance and compliance. Our seasoned chartered advisers manage all filings with HMRC and Companies House seamlessly, optimizing for structural tax reliefs."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ServiceRenderer.jsx",
                                        lineNumber: 28,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServiceRenderer.jsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this),
                                bullets.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6 pt-6 border-t border-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold text-[#1d3c45]",
                                            children: "Key Features & Support"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ServiceRenderer.jsx",
                                            lineNumber: 36,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                            children: bullets.map((el, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-3 bg-slate-50 p-4 rounded-xl border border-gray-100 items-start",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#d2601a] font-bold",
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ServiceRenderer.jsx",
                                                            lineNumber: 40,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-semibold text-gray-700",
                                                            children: el
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ServiceRenderer.jsx",
                                                            lineNumber: 41,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/src/components/ServiceRenderer.jsx",
                                                    lineNumber: 39,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ServiceRenderer.jsx",
                                            lineNumber: 37,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ServiceRenderer.jsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ServiceRenderer.jsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold text-[#1d3c45] mb-4",
                                            children: "Standard Service"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ServiceRenderer.jsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500 mb-6",
                                            children: "Receive round-the-clock advisory, continuous digital record checks, and timely compliance declarations under statutory requirements."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ServiceRenderer.jsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "/contact-us",
                                                className: "block text-center w-full py-3 text-white text-sm font-semibold rounded-xl",
                                                style: {
                                                    backgroundColor: '#d2601a'
                                                },
                                                children: "Get Free Quote"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ServiceRenderer.jsx",
                                                lineNumber: 57,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ServiceRenderer.jsx",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ServiceRenderer.jsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#1d3c45] text-white p-6 rounded-2xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold mb-2",
                                            children: "Speak to Advisor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ServiceRenderer.jsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-300 text-xs mb-4",
                                            children: [
                                                "Discuss ",
                                                title,
                                                " requirements directly with our senior accountancy team."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ServiceRenderer.jsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-semibold",
                                            children: "📞 020 8127 0728"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ServiceRenderer.jsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ServiceRenderer.jsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ServiceRenderer.jsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ServiceRenderer.jsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ServiceRenderer.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ServiceRenderer.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = ServiceRenderer;
var _c;
__turbopack_context__.k.register(_c, "ServiceRenderer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/SwitchAccountant.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SwitchAccountant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServiceRenderer.jsx [app-client] (ecmascript)");
;
;
;
function SwitchAccountant() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Switch Accountant",
        subtitle: "Changing your accountant is simple, effortless, and has no disruption to your UK filing schedules.",
        bullets: [
            "We notify your previous accountant and coordinate transfer",
            "Retrieve historical accounts records and general ledger logs",
            "Set up seamlessly under statutory agent authorities",
            "No gaps, no penalty exposure throughout transition"
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Many corporate directors and property business owners stay with underperforming accounting firms simply because of the perceived pain of switching. In reality, modern UK statutory protocols make transitioning your professional records simple. At Taxaccolega, we handle all correspondence for you."
        }, void 0, false, {
            fileName: "[project]/src/react-pages/SwitchAccountant.jsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/react-pages/SwitchAccountant.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = SwitchAccountant;
var _c;
__turbopack_context__.k.register(_c, "SwitchAccountant");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/ReferAndEarn.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReferAndEarn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServiceRenderer.jsx [app-client] (ecmascript)");
;
;
;
function ReferAndEarn() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Refer and Earn",
        subtitle: "Recommend Taxaccolega to partners or business associates and earn handsome financial referrals.",
        bullets: [
            "No complex program rules, just straightforward payouts",
            "Introduce unlimited new clients and corporate accounts",
            "High percentage payouts once referees confirm signed models",
            "Dedicated tracking and reporting of your referral earnings"
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Know someone who is not satisfied with their current accountant, or is launching a brand-new UK business? Taxaccolega's Refer and Earn program welcomes visitors, customers, and business professionals. We take the utmost care of your friends' finances while rewarding you generously."
        }, void 0, false, {
            fileName: "[project]/src/react-pages/ReferAndEarn.jsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/react-pages/ReferAndEarn.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = ReferAndEarn;
var _c;
__turbopack_context__.k.register(_c, "ReferAndEarn");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/Awards.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Awards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServiceRenderer.jsx [app-client] (ecmascript)");
;
;
;
function Awards() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Accreditations & Awards",
        subtitle: "Industry recognition and stringent compliance standards approved across Surrey, London, and the wider UK.",
        bullets: [
            "Accredited under modern chartered practices guidance",
            "Supervisory authorization with strict statutory bodies",
            "Top-level digital reporting and secure cloud architectures",
            "Over 187 verified five-star Google customer reviews"
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Trust and accountability are everything when reporting corporate portfolios or private wealth. Taxaccolega maintains complete transparency, licensed operations, and rigorous audit trails that ensure you remain clean, compliant, and optimized under statutory tests."
        }, void 0, false, {
            fileName: "[project]/src/react-pages/Awards.jsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/react-pages/Awards.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = Awards;
var _c;
__turbopack_context__.k.register(_c, "Awards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/ScheduleCall.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScheduleCall
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function ScheduleCall() {
    _s();
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleBook = (e)=>{
        e.preventDefault();
        setSuccess(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto px-4 py-16 sm:px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center max-w-2xl mx-auto mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-extrabold text-[#1d3c45] mb-4",
                        children: "Schedule a Consultation"
                    }, void 0, false, {
                        fileName: "[project]/src/react-pages/ScheduleCall.jsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: "Book a 1-on-1 diagnostic call with a senior Chartered Accountant to review your limited company structure, taxation liabilities, or self assessment logs."
                    }, void 0, false, {
                        fileName: "[project]/src/react-pages/ScheduleCall.jsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/react-pages/ScheduleCall.jsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border border-gray-100 p-8 sm:p-12 rounded-3xl shadow-sm max-w-xl mx-auto",
                children: success ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-4xl",
                            children: "🗓️"
                        }, void 0, false, {
                            fileName: "[project]/src/react-pages/ScheduleCall.jsx",
                            lineNumber: 23,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-[#1d3c45] mt-4 mb-2",
                            children: "Meeting Requested"
                        }, void 0, false, {
                            fileName: "[project]/src/react-pages/ScheduleCall.jsx",
                            lineNumber: 24,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-500",
                            children: "We will verify our availability and email you an official calendar invitation within 4 business hours."
                        }, void 0, false, {
                            fileName: "[project]/src/react-pages/ScheduleCall.jsx",
                            lineNumber: 25,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/react-pages/ScheduleCall.jsx",
                    lineNumber: 22,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleBook,
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-gray-700 mb-1",
                                    children: "Select Service Topic"
                                }, void 0, false, {
                                    fileName: "[project]/src/react-pages/ScheduleCall.jsx",
                                    lineNumber: 30,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: "w-full p-3 border border-gray-200 rounded-xl bg-white",
                                    required: true,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "-- Choose a Topic --"
                                        }, void 0, false, {
                                            fileName: "[project]/src/react-pages/ScheduleCall.jsx",
                                            lineNumber: 32,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "limited",
                                            children: "Ltd Company Setup & Corporate Return"
                                        }, void 0, false, {
                                            fileName: "[project]/src/react-pages/ScheduleCall.jsx",
                                            lineNumber: 33,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "tax",
                                            children: "Personal Tax & Property Disclosures"
                                        }, void 0, false, {
                                            fileName: "[project]/src/react-pages/ScheduleCall.jsx",
                                            lineNumber: 34,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "vat",
                                            children: "VAT & MTD Bookkeeping Setup"
                                        }, void 0, false, {
                                            fileName: "[project]/src/react-pages/ScheduleCall.jsx",
                                            lineNumber: 35,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "payroll",
                                            children: "Payroll Outplacement"
                                        }, void 0, false, {
                                            fileName: "[project]/src/react-pages/ScheduleCall.jsx",
                                            lineNumber: 36,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/react-pages/ScheduleCall.jsx",
                                    lineNumber: 31,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/react-pages/ScheduleCall.jsx",
                            lineNumber: 29,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700 mb-1",
                                            children: "Preferred Date"
                                        }, void 0, false, {
                                            fileName: "[project]/src/react-pages/ScheduleCall.jsx",
                                            lineNumber: 42,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            required: true,
                                            type: "date",
                                            className: "w-full p-3 border border-gray-200 rounded-xl bg-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/react-pages/ScheduleCall.jsx",
                                            lineNumber: 43,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/react-pages/ScheduleCall.jsx",
                                    lineNumber: 41,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700 mb-1",
                                            children: "Preferred Time Block"
                                        }, void 0, false, {
                                            fileName: "[project]/src/react-pages/ScheduleCall.jsx",
                                            lineNumber: 46,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "w-full p-3 border border-gray-200 rounded-xl bg-white",
                                            required: true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "morning",
                                                    children: "Morning (9:00 am - 12:00 pm)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/react-pages/ScheduleCall.jsx",
                                                    lineNumber: 48,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "afternoon",
                                                    children: "Afternoon (12:00 pm - 4:00 pm)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/react-pages/ScheduleCall.jsx",
                                                    lineNumber: 49,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "late",
                                                    children: "Late PM (4:00 pm - 5:00 pm)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/react-pages/ScheduleCall.jsx",
                                                    lineNumber: 50,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/react-pages/ScheduleCall.jsx",
                                            lineNumber: 47,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/react-pages/ScheduleCall.jsx",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/react-pages/ScheduleCall.jsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700 mb-1",
                                            children: "Full Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/react-pages/ScheduleCall.jsx",
                                            lineNumber: 57,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            required: true,
                                            type: "text",
                                            className: "w-full p-3 border border-gray-200 rounded-xl bg-white",
                                            placeholder: "Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/react-pages/ScheduleCall.jsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/react-pages/ScheduleCall.jsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700 mb-1",
                                            children: "Contact Phone"
                                        }, void 0, false, {
                                            fileName: "[project]/src/react-pages/ScheduleCall.jsx",
                                            lineNumber: 61,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            required: true,
                                            type: "tel",
                                            className: "w-full p-3 border border-gray-200 rounded-xl bg-white",
                                            placeholder: "Phone Number"
                                        }, void 0, false, {
                                            fileName: "[project]/src/react-pages/ScheduleCall.jsx",
                                            lineNumber: 62,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/react-pages/ScheduleCall.jsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/react-pages/ScheduleCall.jsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "w-full py-3 text-white font-bold rounded-xl",
                            style: {
                                backgroundColor: '#d2601a'
                            },
                            children: "Confirm Meeting Request"
                        }, void 0, false, {
                            fileName: "[project]/src/react-pages/ScheduleCall.jsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/react-pages/ScheduleCall.jsx",
                    lineNumber: 28,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/react-pages/ScheduleCall.jsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/react-pages/ScheduleCall.jsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(ScheduleCall, "2ev0mvhfKtKU+/wFmg1ua/kU1bg=");
_c = ScheduleCall;
var _c;
__turbopack_context__.k.register(_c, "ScheduleCall");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/Taxation.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Taxation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServiceRenderer.jsx [app-client] (ecmascript)");
;
;
;
function Taxation() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Taxation Advisory",
        subtitle: "Comprehensive personal, property, and corporate tax structuring to keep you optimized and compliant.",
        bullets: [
            "Worldwide Disclosure Facility voluntary compliance support",
            "Let Property Campaign for residential landlords",
            "VAT return assistance and Making Tax Digital (MTD) migration",
            "Inheritance Tax planning and wealth preservation audits"
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "The UK tax system is under constant transformation. From cryptocurrency calculations to changes in capital gains and corporate allowances, staying compliant is about being proactive. Taxaccolega ensures you or your business navigate these statutory changes with professional composure."
        }, void 0, false, {
            fileName: "[project]/src/react-pages/Taxation.jsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/react-pages/Taxation.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = Taxation;
var _c;
__turbopack_context__.k.register(_c, "Taxation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/Accounts.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Accounts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServiceRenderer.jsx [app-client] (ecmascript)");
;
;
;
function Accounts() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Corporate & Small Business Accounts",
        subtitle: "Complete management of annual files, statutory statements, bookkeeper workflows, and balance sheets.",
        bullets: [
            "Annual accounts preparation under modern FRS regulations",
            "HMRC Corporation Tax (CT600) digital filings",
            "Real-time tracking of capital allowances and write-offs",
            "Regular statutory feedback and performance analytics"
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Accurately prepared general ledgers provide a detailed window into your business trajectory. Taxaccolega manages your bookkeeping, statutory reviews, and yearly accounts files, guaranteeing complete accuracy and peace of mind."
        }, void 0, false, {
            fileName: "[project]/src/react-pages/Accounts.jsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/react-pages/Accounts.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = Accounts;
var _c;
__turbopack_context__.k.register(_c, "Accounts");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/Legal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Legal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServiceRenderer.jsx [app-client] (ecmascript)");
;
;
;
function Legal() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Company Secretarial & Corporate Legal Services",
        subtitle: "Ensuring corporate structures remain fully compliant with statutory Companies House registries.",
        bullets: [
            "Company formations and dynamic registered office addresses",
            "Statutory book maintenance and share transfers",
            "Preparation of directors' employment contracts",
            "Timely submission of annual Confirmation Statements"
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Running a business involves strict administrative regulations. Fulfilling company secretarial services, recording board transfers, and updating statutory registers requires complete attention to detail. At Taxaccolega, we shield you from legal oversight."
        }, void 0, false, {
            fileName: "[project]/src/react-pages/Legal.jsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/react-pages/Legal.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = Legal;
var _c;
__turbopack_context__.k.register(_c, "Legal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/CompanyFormation.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CompanyFormation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServiceRenderer.jsx [app-client] (ecmascript)");
;
;
;
function CompanyFormation() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Company Formation",
        subtitle: "Establish your private limited company (Ltd) or partnership within 24 hours.",
        bullets: [
            "Name availability screening and Companies House registration",
            "Preparation of Articles of Association and Memorandum",
            "Registered office setup and share structure assignment",
            "Fast-track corporate banking introductions and guidance"
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Starting a brand new venture is an exciting step. Making sure your company is legal, registered under appropriate commercial structures, and fully compliant is part of our business. Taxaccolega provides complete formation packages for UK entrepreneurs."
        }, void 0, false, {
            fileName: "[project]/src/react-pages/CompanyFormation.jsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/react-pages/CompanyFormation.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = CompanyFormation;
var _c;
__turbopack_context__.k.register(_c, "CompanyFormation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/RegisteredAddress.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RegisteredAddress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServiceRenderer.jsx [app-client] (ecmascript)");
;
;
;
function RegisteredAddress() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Registered Address Services",
        subtitle: "Protect your private workspace with a professional, prestigious London-based registered office address.",
        bullets: [
            "Prestige Central London mailing address for public registers",
            "Secure handling and forwarding of statutory HMRC mail",
            "Prevention of unsolicited marketing letters to your residence",
            "Compliant registered registry lists for Companies House filings"
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Under UK law, all companies must provide a public registered office address. Using your home address compromises privacy and leads to unsolicited visitors and mailing logs. Our office services provide secure forwarding, keeping your data confidential."
        }, void 0, false, {
            fileName: "[project]/src/react-pages/RegisteredAddress.jsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/react-pages/RegisteredAddress.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = RegisteredAddress;
var _c;
__turbopack_context__.k.register(_c, "RegisteredAddress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/CompanySecretarial.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CompanySecretarial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServiceRenderer.jsx [app-client] (ecmascript)");
;
;
;
function CompanySecretarial() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Company Secretarial",
        subtitle: "Complete maintenance of statutory corporate registers, minutes, and confirmation statements.",
        bullets: [
            "Filing annual Confirmation Statements (CS01)",
            "Maintaining director, secretary, and PSC register logs",
            "Drafting board meeting minutes and corporate resolutions",
            "Updating registries following structural changes"
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Accurate administrative maintenance is mandated for restricted limited models in the UK. Neglecting database updates can prompt heavy fines or corporate dissolution registry checks. Taxaccolega provides ongoing administrative peace of mind."
        }, void 0, false, {
            fileName: "[project]/src/react-pages/CompanySecretarial.jsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/react-pages/CompanySecretarial.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = CompanySecretarial;
var _c;
__turbopack_context__.k.register(_c, "CompanySecretarial");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/EmploymentAgreement.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EmploymentAgreement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServiceRenderer.jsx [app-client] (ecmascript)");
;
;
;
function EmploymentAgreement() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Employment Agreements",
        subtitle: "Excellence in drafting key director employment protocols and customized contracts.",
        bullets: [
            "Compliant director service contracts under UK labor law",
            "Salary, bonus, and options allocation structures details",
            "Statutory terms, garden leave, and notice layouts",
            "Minimising litigation risk via solid contractual documentation"
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Having structured contracts between a business and its senior executives is vital to corporate security. Our legal accountants help draft clear agreements ensuring both personal and corporate goals remain harmoniously secured."
        }, void 0, false, {
            fileName: "[project]/src/react-pages/EmploymentAgreement.jsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/react-pages/EmploymentAgreement.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = EmploymentAgreement;
var _c;
__turbopack_context__.k.register(_c, "EmploymentAgreement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/ShareTransfer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShareTransfer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServiceRenderer.jsx [app-client] (ecmascript)");
;
;
;
function ShareTransfer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Share Transfers & Restructuring",
        subtitle: "Exquisite guidance on changing shareholder allocations, stock gifting, and restructuring.",
        bullets: [
            "Preparation of J30 stock transfer forms",
            "Submission of updated PSC registers to Companies House",
            "Calculating double transfer tax or stamp duty exemptions",
            "Re-issuing share certificates and updating company book files"
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Bringing in new partners or reorganizing family holdings calls for proper equity movements. Failing to log stock allocations properly can invalidate key corporate votes. Taxaccolega ensures every transaction is correctly executed."
        }, void 0, false, {
            fileName: "[project]/src/react-pages/ShareTransfer.jsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/react-pages/ShareTransfer.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = ShareTransfer;
var _c;
__turbopack_context__.k.register(_c, "ShareTransfer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/Software.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Software
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServiceRenderer.jsx [app-client] (ecmascript)");
;
;
;
function Software() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Accounting Software & Integration",
        subtitle: "Complete configuration and mentoring on Making Tax Digital (MTD) compliant software.",
        bullets: [
            "Certified Xero and QuickBooks setup and synchronization",
            "Automated bank feed links to minimize manual entry errors",
            "Real-time payroll or pension software outplacement links",
            "Expert customer support and bespoke training modules"
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Digital software transforms how fast small business owners can see their cash flow performance. Taxaccolega ensures you are utilizing optimized tools such as Xero or FreeAgent properly, keeping your transaction ledger up-to-date."
        }, void 0, false, {
            fileName: "[project]/src/react-pages/Software.jsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/react-pages/Software.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = Software;
var _c;
__turbopack_context__.k.register(_c, "Software");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/Banks.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Banks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServiceRenderer.jsx [app-client] (ecmascript)");
;
;
;
function Banks() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Corporate Banking & Connections",
        subtitle: "Bespoke setups linking your general ledgers with modern, high-tier fintech bank feeds.",
        bullets: [
            "Guided setup of direct bank digital feeds",
            "Assistance with digital business account applications",
            "Daily reconciliation of bank transactions with invoices",
            "Proactive cash buffer planning and audit review assistance"
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Connecting your business bank accounts to real-time general ledger software accelerates your reporting processes. We support connections to major institutions, including Tide, Mettle, Wise, HSBC, and Barclays."
        }, void 0, false, {
            fileName: "[project]/src/react-pages/Banks.jsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/react-pages/Banks.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = Banks;
var _c;
__turbopack_context__.k.register(_c, "Banks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/BookkeepingServices.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookkeepingServices
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServiceRenderer.jsx [app-client] (ecmascript)");
;
;
;
function BookkeepingServices() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Bookkeeping Services",
        subtitle: "Accurate digital recording of receipts, expenses, sales, and banking reconciliations.",
        bullets: [
            "Continuous recording of all taxable transactions",
            "Expense classification matching strict HMRC rules",
            "VAT-ready ledger logs to support quick submissions",
            "Elimination of shoebox receipt filing headaches"
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Accurate bookkeeping is the foundation of precise statutory accountancy. Taxaccolega provides ongoing cloud bookkeeping, assuring every invoice is matched and categorised, saving you critical time during annual filings."
        }, void 0, false, {
            fileName: "[project]/src/react-pages/BookkeepingServices.jsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/react-pages/BookkeepingServices.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = BookkeepingServices;
var _c;
__turbopack_context__.k.register(_c, "BookkeepingServices");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/PayrollServices.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PayrollServices
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServiceRenderer.jsx [app-client] (ecmascript)");
;
;
;
function PayrollServices() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Payroll Services",
        subtitle: "Complete outplacement of custom director and staff payslips, RTI filings, and P60s.",
        bullets: [
            "Weekly or monthly PAYE payslip calculations",
            "Direct submissions to HMRC (Real Time Information - RTI)",
            "Assistance with new employee onboarding and student loan deductions",
            "P60 and P45 preparation and digital outplacement distributions"
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Administering a payroll scheme is a time-sensitive task. From calculating statutory sick pay to submitting mandatory payroll reports on time, Taxaccolega streamlines your operations, ensuring your team is paid correctly."
        }, void 0, false, {
            fileName: "[project]/src/react-pages/PayrollServices.jsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/react-pages/PayrollServices.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = PayrollServices;
var _c;
__turbopack_context__.k.register(_c, "PayrollServices");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/SelfAssessment.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SelfAssessment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServiceRenderer.jsx [app-client] (ecmascript)");
;
;
;
function SelfAssessment() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "HMRC Self Assessment",
        subtitle: "Complete declaration of personal, rental, and overseas investment earnings before January 31st.",
        bullets: [
            "Deduction checks to legally lower tax liabilities",
            "Clear computation of taxes owed plus Payments on Account",
            "Direct dynamic API filings to HMRC portals",
            "Stress-free defense against late filing HMRC penalties"
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Personal tax returns can quickly become complex due to dividend payments, property rental income, or overseas assets. Taxaccolega prepares and files your Self Assessment return with absolute precision, ensuring you remain compliant."
        }, void 0, false, {
            fileName: "[project]/src/react-pages/SelfAssessment.jsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/react-pages/SelfAssessment.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = SelfAssessment;
var _c;
__turbopack_context__.k.register(_c, "SelfAssessment");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/Pensions.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Pensions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServiceRenderer.jsx [app-client] (ecmascript)");
;
;
;
function Pensions() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Auto Enrolment Pensions",
        subtitle: "Ensuring limited companies fulfill their statutory workplace Nest or Smart Pension requirements.",
        bullets: [
            "Fulfilling statutory declaration of compliance duties",
            "Setting up and calculating percentage employee contributions",
            "Direct API dashboard uploads to NEST or alternative providers",
            "Opt-out processing and audit-ready records preservation"
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Under UK statutory regulations, employers must establish, check, and maintain automatic pension enrolment for eligible workers. Taxaccolega manages this entire workflow alongside standard payroll distributions to guarantee total compliance."
        }, void 0, false, {
            fileName: "[project]/src/react-pages/Pensions.jsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/react-pages/Pensions.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = Pensions;
var _c;
__turbopack_context__.k.register(_c, "Pensions");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/FinancialForecasting.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FinancialForecasting
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServiceRenderer.jsx [app-client] (ecmascript)");
;
;
;
function FinancialForecasting() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Financial Forecasting",
        subtitle: "Data-driven projections of company assets, profits, and commercial outcomes.",
        bullets: [
            "Custom cash-runway analysis and credit planning",
            "Plausible high/low revenue scenario mapping models",
            "Forecasting reports suitable for SBA or local bank applications",
            "Performance optimization workshops with a senior consultant"
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Building a viable path forward requires looking ahead. We construct clean and structured projection dashboards that reflect historical metrics alongside future business plans."
        }, void 0, false, {
            fileName: "[project]/src/react-pages/FinancialForecasting.jsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/react-pages/FinancialForecasting.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = FinancialForecasting;
var _c;
__turbopack_context__.k.register(_c, "FinancialForecasting");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/IndustryPage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IndustryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-4ZMWKKQ3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServiceRenderer.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const SPECIAL_WORDS = {
    'it': 'IT',
    'saas': 'SaaS'
};
function humanize(segment) {
    if (!segment) return 'Industry Support';
    return segment.split('-').map((word)=>{
        const lower = word.toLowerCase();
        if (SPECIAL_WORDS[lower]) return SPECIAL_WORDS[lower];
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}
function IndustryPage({ slug: propSlug }) {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const slug = propSlug || params.slug || 'business';
    const displayTitle = `${humanize(slug)} Sector Accounting`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: displayTitle,
        subtitle: `Specialised chartered accountancy and regulatory compliance for the ${humanize(slug)} industry.`,
        bullets: [
            `Industry-specific expense claims compliance audits`,
            "Custom VAT scheme optimization and margin tracking",
            "Statutory accounting reporting matching industry benchmarks",
            "Expert consultations on structural tax deductions"
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                "Every business sector has unique operational models, VAT regulations, or capital expenditure requirements. We understand the specific demands of the ",
                humanize(slug),
                " industry, giving you a custom financial configuration suited to your growth."
            ]
        }, void 0, true, {
            fileName: "[project]/src/react-pages/IndustryPage.jsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/react-pages/IndustryPage.jsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(IndustryPage, "+jVsTcECDRo3yq2d7EQxlN9Ixog=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = IndustryPage;
var _c;
__turbopack_context__.k.register(_c, "IndustryPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/PackagePage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PackagePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-4ZMWKKQ3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServiceRenderer.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function humanize(segment) {
    if (!segment) return 'Accounting Package';
    return segment.split('-').map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
function PackagePage() {
    _s();
    const { slug } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const packageTitle = `${humanize(slug)} Pricing Plan`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: packageTitle,
        subtitle: `Comprehensive, high-tier fixed fee accounting package for ${humanize(slug)} operations.`,
        bullets: [
            "Annual accounts filing and corporate tax returns (CT600)",
            "Making Tax Digital (MTD) compliant cloud software access",
            "Unlimited professional helpdesk support from chartered advisors",
            "Strict regulatory and Companies House secretarial coverage"
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                "Investing in robust software, diligent reviews, and expert advisory protects your margins from compliance penalties. Our ",
                humanize(slug),
                " fixed-fee packages are built to scale alongside your transactions, giving you predictable financial planning."
            ]
        }, void 0, true, {
            fileName: "[project]/src/react-pages/PackagePage.jsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/react-pages/PackagePage.jsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(PackagePage, "DpOdpe+T7d3Ytb7f6neHj0L13w0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = PackagePage;
var _c;
__turbopack_context__.k.register(_c, "PackagePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/legacy-templates/taxationConfig.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "taxationConfig",
    ()=>taxationConfig
]);
// Import the new taxation assets as placeholder URLs to prevent missing asset build errors
const cryptoImg = 'https://placehold.co/800x600?text=Cryptocurrency+Taxation';
const filmImg = 'https://placehold.co/800x600?text=Film+Tax+Relief';
const letPropertyImg = 'https://placehold.co/800x600?text=Let+Property+Campaign';
const personalIncomeImg = 'https://placehold.co/800x600?text=Personal+Income+Tax';
const worldwideImg = 'https://placehold.co/800x600?text=Worldwide+Disclosure+Facility';
// New imports
const companyTaxReturnImg = 'https://placehold.co/800x600?text=Company+Tax+Return';
const vatAccountantsImg = 'https://placehold.co/800x600?text=VAT+Accountants';
const inheritanceTaxImg = 'https://placehold.co/800x600?text=Inheritance+Tax+Planning';
const taxInvestigationImg = 'https://placehold.co/800x600?text=Tax+Investigation';
const capitalGainsTaxImg = 'https://placehold.co/800x600?text=Capital+Gains+Tax';
const estatePropertyTaxImg = 'https://placehold.co/800x600?text=Estate+Tax+Planning';
const taxAdvisorsImg = 'https://placehold.co/800x600?text=Tax+Advisors';
const nonUkResidentTaxationImg = 'https://placehold.co/800x600?text=Non-UK+Resident+Taxation';
const emiSeisPlaceholderImg = 'https://placehold.co/800x600?text=EMI+and+SEIS+Taxation';
const taxationConfig = {
    'worldwide-disclosure-facility': {
        title: `Worldwide Disclosure Facility`,
        subtitle: `Confidential HMRC Offshore Income Disclosures`,
        img: worldwideImg,
        heroIntro: `Tax problems connected to offshore income usually do not begin with concealment. They begin with assumption. Someone moves abroad but continues receiving UK rental income, or a foreign bank account earns interest quietly for years. The individual assumes the UK position is covered or that HMRC cannot trace it.`,
        heroDetails: `That assumption is outdated. International data-sharing agreements (Common Reporting Standard) now automatically share bank and financial details with HMRC. Once HMRC becomes aware first, the process is far more aggressive, expensive, and difficult to control. The Worldwide Disclosure Facility (WDF) exists to let taxpayers voluntarily correct offshore tax irregularities before HMRC escalates. At Taxaccolega, we support property owners, non-UK residents, and investors in bringing their offshore affairs under control.`,
        sections: [
            {
                type: `difficult`,
                title: `HMRC Worldwide Disclosure Facility - What It Covers`,
                subtitle: `An HMRC disclosure route designed to report unpaid UK tax on offshore matters.`,
                content: `The WDF process is not limited to intentional tax evasion. A significant number of disclosures involve residency misunderstandings, accounting gaps, or unstructured foreign asset income.`,
                bullets: [
                    `Overseas rental property income and foreign real estate disposals`,
                    `Interest earned on foreign bank accounts and offshore savings`,
                    `Dividends and capital gains from international investment portfolios`,
                    `Non-UK employment or consultancy income`,
                    `Undeclared inheritance-related overseas assets and trusts`,
                    `Cryptocurrency activity processed through overseas or international exchanges`,
                    `Failing to meet UK statutory tests for non-UK residency classification`
                ],
                footer: `The behaviour classification (careless, deliberate, or unprompted) directly affects Worldwide Disclosure Facility penalties. Strategy is critical: a poorly structured disclosure can increase penalty exposure unnecessarily.`
            },
            {
                type: `table`,
                title: `Stages of the Worldwide Disclosure Facility Process`,
                subtitle: `Understanding the step-by-step disclosure path`,
                headers: [
                    `WDF Stage`,
                    `What Happens`,
                    `Why It Matters`
                ],
                rows: [
                    [
                        `Taxpayer Registration`,
                        `Formally register for the Worldwide Disclosure Facility`,
                        `Starts the official disclosure process and sets the timeline`
                    ],
                    [
                        `Disclosure Preparation`,
                        `Review and reconstruct historic offshore tax positions`,
                        `Identifies and documents all reporting gaps and details`
                    ],
                    [
                        `Calculation Stage`,
                        `Assess unpaid tax, interest, and specific behavioural penalties`,
                        `Determines and shapes the final financial outcome`
                    ],
                    [
                        `Disclosure Submission`,
                        `Formally present the completed WDF pack to HMRC`,
                        `Submits the formal case and supporting evidence`
                    ],
                    [
                        `HMRC Review & Approval`,
                        `HMRC evaluates the quality and completeness of disclosure`,
                        `Can trigger further questions or result in formal closure`
                    ]
                ]
            },
            {
                type: `table`,
                title: `Common Worldwide Disclosure Facility Risks`,
                subtitle: `Pitfalls that can compromise a voluntary disclosure`,
                headers: [
                    `Offshore Reporting Issue`,
                    `Why It Happens`,
                    `Potential Consequence`
                ],
                rows: [
                    [
                        `Residency Misunderstanding`,
                        `Taxpayer assumed foreign taxes paid removed UK tax filing duties`,
                        `HMRC enquiry, interest charges, and double taxation exposure`
                    ],
                    [
                        `Offshore Accounts Undeclared`,
                        `Historic banking assumptions and offshore property holdings`,
                        `Severe penalties and risk of audit expansion to UK affairs`
                    ],
                    [
                        `Incomplete Disclosure`,
                        `Misunderstanding Worldwide Disclosure Facility scope or omitting assets`,
                        `Rejected WDF disclosure and formal tax fraud investigation`
                    ],
                    [
                        `Informal Corrections Attempted`,
                        `Trying to explain the issue over the phone without preparation`,
                        `Credibility concerns, higher penalty rates, and audits`
                    ]
                ]
            }
        ],
        faqs: [
            {
                q: `What is the Worldwide Disclosure Facility (WDF)?`,
                a: `The WDF is an HMRC disclosure route designed to let UK tax residents disclose undeclared offshore income, gains, or assets to HMRC, and settle their tax liabilities under voluntary disclosure terms.`
            },
            {
                q: `How many years back can HMRC review under the WDF?`,
                a: `HMRC can review up to 4 years for innocent errors, up to 6 years for careless mistakes, and up to 20 years for deliberate tax omissions or non-compliance.`
            },
            {
                q: `What are Worldwide Disclosure Facility penalties?`,
                a: `WDF penalties depend on behavior (careless vs. deliberate) and whether the disclosure is prompted or unprompted. They range from 30% up to 200% of the unpaid tax, though voluntary disclosure yields the lowest rate.`
            },
            {
                q: `Does HMRC already receive offshore financial information?`,
                a: `Yes. Under the Common Reporting Standard (CRS) and FATCA agreements, over 100 countries automatically share financial account information with HMRC annually.`
            },
            {
                q: `Can cryptocurrency be disclosed through the WDF?`,
                a: `Yes. If your crypto activity is connected to overseas exchanges or international wallets, it falls under offshore matters and can be disclosed through the Worldwide Disclosure Facility.`
            },
            {
                q: `What happens if HMRC contacts me before I disclose?`,
                a: `If HMRC contacts you first, any subsequent disclosure is treated as "prompted," which leads to significantly higher penalties, a greater likelihood of a full tax audit, and potentially public naming.`
            }
        ]
    },
    'cryptocurrency': {
        title: `Cryptocurrency Taxation`,
        subtitle: `Confidently navigate cryptocurrency with Taxaccolega’s expertise`,
        img: cryptoImg,
        heroIntro: `Crypto investors seldom realise the tax problem when the profit happens. They usually realise it later, sometimes months or even years later, after moving funds between wallets or converting one token into another without cashing out a single pound.`,
        heroDetails: `Throughout that entire period, cryptocurrency activity rarely feels connected to normal taxation. However, HMRC does not see crypto as detached. In many situations, UK tax obligations begin long before money is ever withdrawn into a bank account. At Taxaccolega, we help individuals and businesses across London and the UK understand how crypto tax actually works in practice — not just theoretically, but in relation to real transaction histories, fragmented records, and HMRC reporting.`,
        sections: [
            {
                type: `difficult`,
                title: `Why Crypto Becomes Difficult to Report`,
                subtitle: `The technical side of cryptocurrency often moves faster than the reporting side.`,
                content: `People focus on markets, pricing, timing, and volatility rather than transaction reconstruction or future tax reporting. By the time gains become significant or HMRC letters arrive, the transaction trail is rarely simple.`,
                bullets: [
                    `Moved assets across multiple exchanges and offshore platforms`,
                    `Transferred tokens between personal or decentralised wallets`,
                    `Used decentralised finance (DeFi) platforms and liquidity pools`,
                    `Received staking rewards, mining income, or airdrops`,
                    `Swapped or traded tokens without converting to GBP`,
                    `Lost access to historic exchange transaction data or account keys`,
                    `Mixed personal investment and business trading activity together`
                ],
                footer: `The result is that cryptocurrency taxes stop being about "one gain" and become a reconstruction exercise. This is where generic crypto calculators and software tools start falling short: they process raw data but cannot always apply HMRC's specific rules to unusual patterns or incomplete records.`
            },
            {
                type: `cards`,
                title: `How HMRC Views Cryptocurrency and Taxes`,
                intro: `One of the biggest misunderstandings surrounding tax on cryptocurrency UK issues is the belief that tax only applies when profits are cashed out into pounds.`,
                cards: [
                    {
                        title: `Disposals & Capital Gains`,
                        text: `A disposal occurs through selling, swapping one token for another, gifting, or spending assets. This creates a Capital Gains Tax (CGT) liability without ever cashing out to a bank account.`
                    },
                    {
                        title: `Staking & Staking Income`,
                        text: `Staking rewards, mining, and token receipts are typically classified as Income Tax events upon receipt, and are subject to Capital Gains Tax when subsequently disposed of.`
                    },
                    {
                        title: `Corporation Tax on Crypto`,
                        text: `If a company holds cryptocurrency as treasury assets or uses it for business transactions, it is subject to corporation tax, custom statutory accounting, and strict valuation rules.`
                    }
                ]
            },
            {
                type: `table`,
                title: `Common Areas Where Cryptocurrency Reporting Fails`,
                subtitle: `Understanding potential pitfalls in crypto calculations`,
                headers: [
                    'Issue',
                    'Why It Happens',
                    'Result'
                ],
                rows: [
                    [
                        'Wallet transfers treated as disposals',
                        'Transaction history misunderstood by automated tools',
                        'Gains are overstated and double taxed'
                    ],
                    [
                        'Crypto-to-crypto swaps ignored',
                        'No fiat/GBP withdrawal occurred, leading to false security',
                        'Taxable disposals are omitted entirely'
                    ],
                    [
                        'Historic exchange data missing',
                        'Exchange platforms changed, closed down, or restricted API access',
                        'Extreme difficulty in reconstructing acquisition costs'
                    ],
                    [
                        'Staking income excluded',
                        'Taxpayers treated rewards as unrealised growth',
                        'Under-reported income subject to penalties'
                    ],
                    [
                        'Overseas exchange activity ignored',
                        'Assumption that offshore exchanges escape HMRC visibility',
                        'High risk of HMRC tax enquiries'
                    ]
                ]
            }
        ],
        faqs: [
            {
                q: `Do you have to pay tax on cryptocurrency in the UK?`,
                a: `Yes. HMRC does not treat cryptocurrency as currency or money, but as assets. Depending on your activity (trading, mining, swapping, staking), you may be liable for Capital Gains Tax, Income Tax, or Corporation Tax.`
            },
            {
                q: `Is cryptocurrency taxed even if I did not withdraw money?`,
                a: `Yes. Swapping one cryptocurrency for another (e.g. Bitcoin to Ethereum) or using crypto to purchase goods is treated as a disposal for Capital Gains Tax. You do not need to convert to GBP for a tax liability to arise.`
            },
            {
                q: `How is cryptocurrency taxed in the UK?`,
                a: `If you hold cryptocurrency as a personal investment, you will pay Capital Gains Tax on any gains above your annual tax-free allowance when you dispose of it. If you are treated as a professional trader, or receive crypto as payment, mining, or staking, it is subject to Income Tax.`
            },
            {
                q: `Can HMRC track cryptocurrency transactions?`,
                a: `Yes. HMRC works closely with major crypto exchanges (including Coinbase, Binance, and others) and receives transaction reports containing UK user details. They also use sophisticated blockchain analytics software to trace wallet transactions.`
            },
            {
                q: `Do staking rewards create tax liabilities?`,
                a: `Yes. Staking rewards are generally treated as miscellaneous income at the point of receipt, valued at the fair market value in GBP. When you eventually sell or swap those rewards, they are also subject to Capital Gains Tax.`
            },
            {
                q: `What happens if previous cryptocurrency gains were not reported?`,
                a: `You should make a voluntary disclosure to HMRC as soon as possible. Making an unprompted disclosure significantly reduces penalties and interest charges. Our accountants can help you prepare and submit a Worldwide Disclosure Facility (WDF) filing.`
            }
        ]
    },
    'film-tax-relief': {
        title: `Film Tax Relief`,
        subtitle: `Empowering Creativity, Fueling Growth`,
        img: filmImg,
        heroIntro: `We specialise in offering comprehensive support for Film Tax Relief (FTR), tailored for filmmakers and production companies throughout the UK. Our team of industry experts is dedicated to navigating the complexities of FTR to maximise your financial benefits and contribute to the growth of the British film sector.`,
        heroDetails: `We begin with thorough consultations to assess your project's eligibility for FTR, strategising the most effective approach to optimise your claim and maximise financial returns. Our team manages the meticulous preparation and timely submission of your FTR application to HMRC, ensuring all required documentation is meticulously compiled and submitted in compliance with regulatory standards. Throughout the production process, we provide continuous support to ensure adherence to FTR regulations, including monitoring expenditures, verifying compliance with qualifying conditions, and maintaining essential records crucial for successful claims.`,
        sections: [
            {
                type: `cards`,
                title: `The Benefits Of Hiring An FTR Accountant`,
                intro: `Navigating HMRC's creative industry tax credits requires structured accounting and careful execution.`,
                cards: [
                    {
                        title: `Eligibility Assessment`,
                        text: `We conduct a thorough assessment of your film project under HMRC guidelines, evaluating key criteria such as cultural significance, British certification, and core expenditure thresholds.`
                    },
                    {
                        title: `Optimisation Strategy`,
                        text: `Based on the eligibility assessment, we develop a tailored strategy to optimise your FTR claim, maximising the financial benefits while maintaining strict compliance with all regulatory requirements.`
                    },
                    {
                        title: `Application Management`,
                        text: `Our team manages the entire process of your FTR application to HMRC, compiling all necessary documentation, ensuring absolute accuracy, and adhering to strict deadlines to facilitate a smooth and timely approval.`
                    },
                    {
                        title: `Expenditure Monitoring`,
                        text: `Throughout the production phase, we provide diligent monitoring of expenditures and activities to verify ongoing compliance, maintaining essential records and documentation to fully substantiate your claim.`
                    }
                ]
            }
        ],
        faqs: [
            {
                q: `What is Film Tax Relief (FTR) in the UK?`,
                a: `Film Tax Relief is a UK government tax incentive that allows qualifying film production companies to claim a cash rebate or a reduction in corporation tax based on their core production expenditure.`
            },
            {
                q: `What qualifies a film as a "British Film" for FTR?`,
                a: `A film must either pass the BFI Cultural Test (scoring a minimum number of points for cultural content, contribution, hubs, and practitioners) or be certified as an official co-production under a UK bilateral treaty.`
            },
            {
                q: `What counts as "Core Expenditure" for Film Tax Relief?`,
                a: `Core expenditure includes production costs incurred during pre-production, principal photography, and post-production. It explicitly excludes development costs, distribution, marketing, and financing costs.`
            },
            {
                q: `How much cash rebate can a film production company claim?`,
                a: `Under the current Audio-Visual Expenditure Credit (AVEC), film production companies can claim an effective credit rate of up to 34% (or 39% for children's television/animation) on qualifying core expenditure.`
            },
            {
                q: `Can a company claim FTR if it makes a loss?`,
                a: `Yes. If the film production company is loss-making, it can surrender the qualifying loss to HMRC in exchange for a cash payout (surrendered tax credit).`
            }
        ]
    },
    'let-property-campaign': {
        title: `Let Property Campaign`,
        subtitle: `Declare Undisclosed Property Income Confidently`,
        img: letPropertyImg,
        heroIntro: `Most landlords do not deliberately decide to ignore tax. What usually happens is slower than that. A property gets rented temporarily after a move. Mortgage interest rules change. Records become inconsistent. A return is submitted once, then missed later. Expenses are estimated instead of tracked.`,
        heroDetails: `Throughout that time, the landlord often still believes the situation is manageable. Then the HMRC letter arrives — not aggressive, not accusatory, but enough to make the situation suddenly feel real. At Taxaccolega, we help landlords across London and the UK deal with HMRC Let Property Campaign disclosures properly, especially where undeclared rental income, historic reporting gaps, overseas ownership, capital gains exposure, or incomplete records have already built up over several years.`,
        sections: [
            {
                type: `difficult`,
                title: `HMRC Let Property Campaign - What It Actually Is`,
                subtitle: `An opportunity to correct historic rental tax errors before HMRC discovers them.`,
                content: `The Let Property Campaign is a dedicated HMRC disclosure facility designed for landlords who need to correct previously undeclared or incorrectly reported rental income. In practice, the campaign applies to far more situations than most landlords initially realise.`,
                bullets: [
                    'Landlords who never declared rental income at all',
                    'Landlords who declared parts of their rental income incorrectly',
                    'Property owners who missed tax filings entirely for several years',
                    'Misunderstanding allowable mortgage interest relief and expenses',
                    'Failing to report overseas rental property income in the UK',
                    'Incorrectly splitting property income between spouses or family members'
                ],
                footer: `The issue is not always deliberate concealment. Very often, the reporting structure simply became inconsistent over time. That is why HMRC Let Property Campaign disclosures frequently overlap with self assessment corrections, income tax liabilities, capital gains tax exposure, non-UK resident taxation, bookkeeping failures, and historic record reconstruction.`
            },
            {
                type: `cards`,
                title: `Property Income & HMRC Compliance`,
                intro: `Property income rarely stays simple, and delaying disclosure quietly increases risk over time.`,
                cards: [
                    {
                        title: `Property Income Growth`,
                        text: `At the beginning, owning one property feels straightforward. But once multiple units, overseas portfolios, or company structures are introduced, calculations become complex.`
                    },
                    {
                        title: `HMRC Enforcement`,
                        text: `HMRC uses massive digital databases (such as land registry and letting agent records) to match property owners against reported self-assessment income.`
                    },
                    {
                        title: `Strategic Disclosure`,
                        text: `Making a voluntary disclosure allows you to control the narrative, benefit from significantly lower penalties, and set up manageable payment arrangements.`
                    }
                ]
            },
            {
                type: `table`,
                title: `Common Let Property Campaign Risks`,
                subtitle: `Key pitfalls that trigger HMRC enforcement and audits`,
                headers: [
                    "Offshore Reporting Issue",
                    "Why It Happens",
                    "Potential Consequence"
                ],
                rows: [
                    [
                        "Assumed taxed abroad already",
                        "Residency and double taxation treaties misunderstood",
                        "HMRC enquiry, interest charges, and double taxation"
                    ],
                    [
                        "Offshore accounts undeclared",
                        "Historic banking assumptions and offshore property holdings",
                        "Severe penalties and risk of audit expansion"
                    ],
                    [
                        "Incomplete disclosure",
                        "Misunderstanding Let Property Campaign scope",
                        "Rejected disclosure and formal HMRC tax investigation"
                    ],
                    [
                        "Informal corrections attempted",
                        "Trying to explain the issue over the phone without preparation",
                        "Credibility concerns, higher penalty rates, and audits"
                    ]
                ]
            }
        ],
        faqs: [
            {
                q: `What is the HMRC Let Property Campaign?`,
                a: `The Let Property Campaign is an ongoing disclosure opportunity offered by HMRC. It allows residential landlords with undisclosed rental income to voluntarily bring their tax affairs up to date under highly favorable penalty terms.`
            },
            {
                q: `Who can use the Let Property Campaign?`,
                a: `It is open to individual residential landlords letting out properties in the UK or abroad. This includes single-property landlords, multi-property portfolios, student lets, holiday lets, and those letting out inherited property.`
            },
            {
                q: `How many years back does HMRC look for property disclosures?`,
                a: `Depending on the behaviour (careless, deliberate, or reasonable excuse), HMRC can go back up to 20 years to calculate tax liabilities, interest, and penalties.`
            },
            {
                q: `What are the penalties under the Let Property Campaign?`,
                a: `If you make a voluntary, unprompted disclosure, penalties are usually significantly lower than if HMRC finds out first. Penalties can range from 0% to 20% of the unpaid tax, depending on whether it was a careless error or a reasonable excuse.`
            },
            {
                q: `What happens if I receive an HMRC letter before making a voluntary disclosure?`,
                a: `Once HMRC contacts you, any disclosure you make is classed as "prompted," which carries higher penalty rates. However, it is still critical to respond professionally and make a structured disclosure to avoid formal audits or prosecution.`
            }
        ]
    },
    'personal-income-tax': {
        title: `Personal Income Tax`,
        subtitle: `Expert Personal Income Tax Accountants`,
        img: personalIncomeImg,
        heroIntro: `Income tax problems usually begin long before the tax return is filed. Very few people wake up one morning and realise their tax position has become complicated. It happens gradually: a director starts taking dividends alongside salary, a rental property starts generating profit, or freelance work slowly grows into a regular business.`,
        heroDetails: `Nothing feels especially serious while each part is happening individually. The problem appears later when all of it has to be brought together. That is the point where people notice that income tax is not simply about earnings; it is about how different sources interact, allowances, and structures. Taxaccolega supports individuals, company directors, landlords, and business owners across London and the UK with comprehensive personal income tax returns, structuring, and strategic tax planning.`,
        sections: [
            {
                type: `difficult`,
                title: `Income Tax for Complex and Multi-Source Income`,
                subtitle: `PAYE employment is straightforward, but multi-source income requires professional care.`,
                content: `When income starts arriving from several directions, the UK tax position changes completely. Different types of income follow entirely different rules and interact with tax bands, allowances, and reporting obligations.`,
                bullets: [
                    `Directors taking a combination of salary, dividends, and loans`,
                    `Self-employed sole traders and freelancers navigating allowable business expenses`,
                    `Landlords managing rental portfolios and interest deductions`,
                    `Individuals receiving investment dividends and capital gains`,
                    `Consultants and professionals with dual employment or side businesses`,
                    `High earners losing their personal allowance over the £100,000 threshold`,
                    `Expatriates and non-UK residents with overseas income and international assets`
                ],
                footer: `A personal income tax accountant does not simply calculate tax after the year ends. The real value comes from identifying how your income flows, where tax inefficiencies exist, and establishing a structured, compliant personal tax plan.`
            },
            {
                type: `cards`,
                title: `Who We Assist with Personal Income Tax`,
                intro: `We provide specialized support tailored to your unique financial situation.`,
                cards: [
                    {
                        title: `Company Directors`,
                        text: `Optimising the balance between salary, dividends, and director loans to ensure maximum tax efficiency and fully compliant withdrawals.`
                    },
                    {
                        title: `High Earners & Professionals`,
                        text: `Helping individuals with income over £100k navigate the tapering of the personal allowance, pension contributions, and annual tax-free allowances.`
                    },
                    {
                        title: `Sole Traders & Freelancers`,
                        text: `Preparing annual Self Assessment returns, calculating allowable business expenses, and managing Payment on Account obligations.`
                    }
                ]
            }
        ],
        faqs: [
            {
                q: `Who needs to file a UK Self Assessment tax return?`,
                a: `You must file a tax return if you are self-employed with earnings over £1,000, a director of a limited company, have rental income, have income over £100,000, or have undisclosed foreign income.`
            },
            {
                q: `How are dividends taxed in the UK?`,
                a: `Dividends have their own tax-free allowance (£500 for the 24/25 tax year). Above this allowance, they are taxed at dividend tax rates (8.75% for basic rate, 33.75% for higher rate, and 39.35% for additional rate taxpayers).`
            },
            {
                q: `What is the Personal Savings Allowance?`,
                a: `The Personal Savings Allowance allows basic rate taxpayers to earn up to £1,000 in savings interest tax-free. Higher rate taxpayers have an allowance of £500, while additional rate taxpayers have no allowance.`
            },
            {
                q: `Can I claim expenses if I work from home as a sole trader?`,
                a: `Yes. You can either claim a proportion of your actual home utility bills based on the hours worked or use HMRC's simplified flat-rate expenses for working from home.`
            },
            {
                q: `What happens if I miss the Self Assessment filing deadline?`,
                a: `Missing the January 31st online deadline results in an immediate £100 penalty. After 3 months, daily penalties of £10 are charged. Interest also accrues on any unpaid tax liabilities from the due date.`
            }
        ]
    },
    'company-tax-return-accountants': {
        title: `Company Tax Return Accountants`,
        subtitle: `Your Trusted Partner for Expert Corporation Tax Compliance and Optimisation`,
        img: companyTaxReturnImg,
        heroIntro: `Navigating corporation tax can be complex, especially with evolving regulations. Our specialist Corporation Tax Accountants ensure your business remains compliant and tax-efficient.`,
        heroDetails: `We offer comprehensive services for limited companies, from accurate tax calculations to preparing and filing CT600 forms. Our proactive approach minimizes your tax burden legally, ensuring adherence to all HMRC regulations and maximizing available reliefs.`,
        sections: [
            {
                type: `difficult`,
                title: `Challenges in Corporation Tax`,
                subtitle: `Corporation tax legislation is complex, requiring expert knowledge to avoid penalties and maximise savings.`,
                content: `Many businesses encounter difficulties with corporation tax, particularly in areas such as allowable expenses, capital allowances, and tax planning strategies. Mistakes can lead to significant penalties and missed opportunities for tax savings.`,
                bullets: [
                    `Understanding allowable expenses and capital allowances`,
                    `Accurate calculation of taxable profits and liabilities`,
                    `Timely submission of CT600 forms and supporting documents`,
                    `Navigating group relief and transfer pricing rules`,
                    `Maximising research and development (R&D) tax credits`,
                    `Dealing with HMRC enquiries and investigations`
                ],
                footer: `Proactive corporation tax planning is essential to ensure compliance and optimise your company's financial position, turning potential liabilities into strategic advantages.`
            },
            {
                type: `cards`,
                title: `Our Corporation Tax Services`,
                intro: `We offer a full spectrum of corporation tax services tailored to meet the needs of your business, ensuring efficiency and compliance.`,
                cards: [
                    {
                        title: `Corporation Tax Planning`,
                        text: `Developing bespoke strategies to legally reduce your company's corporation tax liability and improve cash flow.`
                    },
                    {
                        title: `CT600 Preparation & Filing`,
                        text: `Accurate preparation and timely submission of your company tax returns to HMRC, ensuring compliance.`
                    },
                    {
                        title: `Tax Enquiries & Disputes`,
                        text: `Expert representation and support during HMRC enquiries, investigations, and tax disputes.`
                    }
                ]
            }
        ],
        faqs: [
            {
                q: `What is Corporation Tax?`,
                a: `Corporation Tax is a tax paid by UK limited companies on their taxable profits, which include trading profits, investment profits, and chargeable gains.`
            },
            {
                q: `When is Corporation Tax due?`,
                a: `Corporation Tax is due nine months and one day after the end of your company's accounting period. The company tax return (CT600) filing deadline is 12 months after the end of the accounting period.`
            },
            {
                q: `What are capital allowances?`,
                a: `Capital allowances allow businesses to deduct the cost of certain capital expenditures from their profits before tax, effectively reducing their corporation tax liability.`
            },
            {
                q: `Can I claim R&D tax credits?`,
                a: `If your company is undertaking qualifying research and development activities, you may be eligible to claim generous R&D tax credits, significantly reducing your tax bill or providing a cash payment.`
            },
            {
                q: `What happens if I file my CT600 late?`,
                a: `HMRC imposes automatic penalties for late filing of your CT600, even if there is no Corporation Tax to pay. Interest will also be charged on any overdue tax.`
            }
        ]
    },
    'vat-accountants': {
        title: `VAT Accountants UK`,
        subtitle: `Your Expert Partner for Seamless VAT Returns and Compliance`,
        img: vatAccountantsImg,
        heroIntro: `Navigating Value Added Tax (VAT) can be a complex and time-consuming task for businesses. Our dedicated VAT accountants ensure your business remains fully compliant with HMRC regulations, helping you avoid penalties and streamline your financial operations.`,
        heroDetails: `From initial VAT registration and choosing the most suitable scheme to accurate preparation and timely submission of your VAT returns, we handle all aspects of your VAT obligations. We provide expert advice on complex VAT issues, optimize your processes, and identify potential savings, allowing you to focus on your core business activities.`,
        sections: [
            {
                type: `difficult`,
                title: `Common VAT Challenges`,
                subtitle: `VAT rules are intricate and constantly evolving, demanding meticulous attention to detail.`,
                content: `Many businesses, especially those with diverse operations or international dealings, find VAT compliance particularly challenging. Misinterpretations or errors can lead to significant financial repercussions and disputes with HMRC.`,
                bullets: [
                    `Understanding VAT registration thresholds and obligations`,
                    `Applying correct VAT rates to a variety of goods and services`,
                    `Managing international VAT implications (imports, exports, reverse charge)`,
                    `Navigating industry-specific VAT schemes and partial exemption rules`,
                    `Accurate record-keeping and digital submission requirements`,
                    `Dealing with VAT inspections and HMRC enquiries`
                ],
                footer: `Given the potential for substantial penalties for non-compliance, entrusting your VAT affairs to expert accountants is not just a convenience, but a strategic business decision to safeguard your finances.`
            },
            {
                type: `cards`,
                title: `Our Comprehensive VAT Services`,
                intro: `We offer a full suite of VAT accounting services designed to simplify your compliance and optimize your financial position.`,
                cards: [
                    {
                        title: `VAT Registration & De-registration`,
                        text: `Assisting with initial registration, advising on voluntary registration, and handling de-registration processes.`
                    },
                    {
                        title: `VAT Return Preparation & Submission`,
                        text: `Accurate and timely compilation and digital submission of your periodic VAT returns to HMRC.`
                    },
                    {
                        title: `VAT Planning & Advisory`,
                        text: `Expert guidance on complex VAT issues, scheme optimization, and strategic tax planning to minimize liabilities.`
                    }
                ]
            }
        ],
        faqs: [
            {
                q: `Who needs to register for VAT in the UK?`,
                a: `You must register for VAT if your VAT taxable turnover exceeds the current registration threshold (currently £90,000) within a 12-month period, or if you expect to exceed it in the next 30 days.`
            },
            {
                q: `What is 'Making Tax Digital for VAT'?`,
                a: `Making Tax Digital (MTD) for VAT requires most VAT-registered businesses to keep digital records and submit their VAT returns using MTD-compatible software.`
            },
            {
                q: `Can I reclaim VAT on all business expenses?`,
                a: `Generally, you can reclaim VAT on most goods and services purchased for business use, provided you have valid VAT invoices. However, there are exceptions, such as certain business entertainment expenses and cars.`
            },
            {
                q: `What are the different VAT schemes available?`,
                a: `HMRC offers various VAT schemes, including the Standard Accounting Scheme, Cash Accounting Scheme, Flat Rate Scheme, and Annual Accounting Scheme, each suited to different business types and sizes.`
            },
            {
                q: `What happens if I submit my VAT return late?`,
                a: `Late submission of VAT returns can result in penalties from HMRC. The penalty system is points-based, with charges increasing for repeated late submissions. Interest may also be charged on overdue payments.`
            }
        ]
    },
    'inheritance-tax-planning': {
        title: `Inheritance Tax Planning`,
        subtitle: `Preserving Your Wealth for Future Generations`,
        img: inheritanceTaxImg,
        heroIntro: `Inheritance Tax (IHT) can significantly erode the value of the estate you pass on to your loved ones. Effective and timely planning is crucial to minimise this burden and ensure your legacy is preserved according to your wishes.`,
        heroDetails: `Our specialist Inheritance Tax advisors provide comprehensive and tailored planning advice. We guide you through the complexities of IHT rules, helping you understand available reliefs, exemptions, and strategies such as trusts and lifetime giving, to legally reduce your IHT liability. Our goal is to ensure that your beneficiaries receive the maximum possible inheritance.`,
        sections: [
            {
                type: `difficult`,
                title: `Challenges in Inheritance Tax Planning`,
                subtitle: `IHT rules are intricate and often misunderstood, leading to unexpected tax liabilities.`,
                content: `Many individuals are unaware of the various ways their estate could be subject to IHT, or they miss opportunities to plan effectively. This can result in a significant portion of their wealth being paid in tax rather than benefiting their family.`,
                bullets: [
                    `Understanding the Nil-Rate Band and Residence Nil-Rate Band`,
                    `Effective use of gifts and exemptions (e.g., annual exemption, normal expenditure out of income)`,
                    `The complexities of different types of trusts (e.g., discretionary, bare, interest in possession)`,
                    `Planning for business property relief (BPR) and agricultural property relief (APR)`,
                    `Addressing overseas assets, domicile status, and international implications`,
                    `Reviewing wills and ensuring they align with IHT planning objectives`
                ],
                footer: `Proactive and expert Inheritance Tax planning is not merely about tax avoidance; it's about responsible wealth management and ensuring your intentions for your estate are realised, protecting your family's future.`
            },
            {
                type: `cards`,
                title: `Our Comprehensive IHT Planning Services`,
                intro: `We offer a holistic approach to Inheritance Tax planning, providing peace of mind and financial security for your family.`,
                cards: [
                    {
                        title: `Estate Review & Valuation`,
                        text: `A thorough analysis of your assets, liabilities, and current will to assess potential IHT exposure.`
                    },
                    {
                        title: `Tax-Efficient Gifting Strategies`,
                        text: `Advising on making lifetime gifts, utilising exemptions, and navigating the 7-year rule to reduce your estate for IHT.`
                    },
                    {
                        title: `Trust Creation & Management`,
                        text: `Guidance on establishing suitable trusts (e.g., bare, discretionary) to protect assets and control their distribution.`
                    }
                ]
            }
        ],
        faqs: [
            {
                q: `What is Inheritance Tax (IHT)?`,
                a: `Inheritance Tax is a tax on the value of a person's estate (their property, money, and possessions) when they die. It can also be charged on certain gifts made during their lifetime.`
            },
            {
                q: `What is the IHT Nil-Rate Band?`,
                a: `The Nil-Rate Band (NRB) is the threshold up to which an estate pays no IHT. For the 2024/25 tax year, this is £325,000. Any unused NRB can often be transferred to a surviving spouse or civil partner.`
            },
            {
                q: `What is the Residence Nil-Rate Band (RNRB)?`,
                a: `The Residence Nil-Rate Band is an additional IHT allowance available when a main residence is passed to direct descendants (children, grandchildren, etc.). For 2024/25, this is £175,000 per individual.`
            },
            {
                q: `How do gifts affect Inheritance Tax?`,
                a: `Gifts made more than 7 years before death are generally exempt from IHT. Gifts made within 7 years may be subject to IHT, with the tax reducing on a sliding scale (taper relief) after 3 years.`
            },
            {
                q: `Can I use a trust to reduce IHT?`,
                a: `Yes, trusts can be an effective tool for IHT planning, allowing you to legally remove assets from your estate while retaining some control or specifying how they are to be used. The rules surrounding trusts are complex, and professional advice is essential.`
            }
        ]
    },
    'tax-investigation-insurance': {
        title: `Tax Investigation Insurance UK`,
        subtitle: `Protecting You from Unforeseen HMRC Inquiry Costs`,
        img: taxInvestigationImg,
        heroTitle: `An HMRC enquiry doesn’t ask whether you’re ready for it`,
        heroIntro: `Most people assume a tax investigation starts because something has gone wrong. In many cases, that isn’t how it begins.`,
        heroDetails: `Most people assume a tax investigation starts because something has gone wrong.

In many cases, that isn’t how it begins.

HMRC enquiries are often triggered by patterns, inconsistencies, or routine checks across sectors. A return can be selected even when everything appears correct on the surface. Once that process starts, the focus shifts quickly from “what was submitted” to “how it can be evidenced.”

That shift is where the real pressure sits.

Because at that point, the question is no longer about filing — it’s about whether every figure can be supported, explained, and defended.

This is where tax investigation insurance and specialist support become relevant. Not as a precaution in theory, but as a practical way to manage what happens once an enquiry is already in motion.`,
        sections: [
            {
                type: `text-image`,
                title: `Tax Investigation Insurance UK – What It Covers in Practice`,
                content: `Tax investigation insurance is designed to cover the professional costs involved in handling an HMRC enquiry.

It does not remove the investigation.

It ensures that:

●  you are represented throughout the process
●  responses are handled professionally
●  the cost of dealing with the enquiry does not escalate unpredictably

Whether you are dealing with a personal tax investigation, a business enquiry, or want to put protection in place in advance, the objective remains:

to manage the process properly without financial strain influencing decisions.`,
                img: taxInvestigationImg
            },
            {
                type: `text-split`,
                title: ``,
                subtitle: ``,
                leftContent: `Not all investigations follow the same route
HMRC enquiries vary in scope and depth. Some focus on specific areas, while others involve a full review of financial activity.`,
                rightContent: `Evidence matters more than explanation
During an enquiry, what matters is not what you intended — but what can be demonstrated.`
            },
            {
                type: `text-split`,
                title: `How HMRC Tax Investigations Actually Work`,
                subtitle: `Not all investigations follow the same route`,
                leftContent: `HMRC enquiries vary in scope and depth. Some focus on specific areas, while others involve a full review of financial activity.

Evidence matters more than explanation
During an enquiry, what matters is not what you intended — but what can be demonstrated.

Common types include:
● aspect enquiries (focused on one area)
● full enquiries (covering the entire return)
● compliance checks across multiple years`,
                rightContent: `Each requires a different level of response and preparation.

This includes:
● supporting records
● transaction history
● consistency across submissions

Where records are incomplete or inconsistent, the enquiry tends to expand rather than narrow.

This is why structured records maintained through bookkeeping services for small businesses often determine how smoothly an enquiry progresses.`
            },
            {
                type: `table`,
                title: `The 5 Stages of a Tax Investigation`,
                subtitle: `Each stage requires controlled handling. Delays or unclear responses can extend the process significantly.`,
                headers: [
                    `Stage`,
                    `What Happens`,
                    `Where Pressure Builds`
                ],
                rows: [
                    [
                        `Initial Contact`,
                        `HMRC opens enquiry`,
                        `Uncertainty about scope`
                    ],
                    [
                        `Information Request`,
                        `Documents requested`,
                        `Availability of records`
                    ],
                    [
                        `Review & Analysis`,
                        `HMRC examines data`,
                        `Inconsistencies identified`
                    ],
                    [
                        `Clarification`,
                        `Questions raised`,
                        `Responses must be precise`
                    ],
                    [
                        `Outcome`,
                        `Adjustments or closure`,
                        `Financial implications`
                    ]
                ]
            },
            {
                type: `text-image`,
                title: `Where Tax Investigations Become Difficult`,
                content: `Investigations tend to become more complex when multiple areas overlap.

For example:

● income reported through self assessment tax return services does not align with underlying records

● company figures differ from those used in corporation tax services

● VAT submissions show patterns that conflict with reported income via VAT return accountants

Individually, these may seem minor. During an enquiry, they are reviewed together. A common example is where turnover figures reported through VAT returns differ slightly from income reflected within company accounts, creating questions that expand beyond the original enquiry scope.`,
                img: taxInvestigationImg
            },
            {
                type: `text-image`,
                title: `Why Most Tax Investigations Escalate Instead of Resolve`,
                content: `The turning point in an investigation is rarely the initial enquiry.

It is how the response is handled.

Common patterns include:

● incomplete information provided early

● inconsistent figures across documents

● assumptions made instead of verified responses

These do not immediately lead to penalties.

They lead to further questions.

And each additional question widens the scope of the enquiry.

Where responses are delayed or records are assembled reactively, the investigation often becomes harder to contain as the process continues. What could have remained focused becomes extended, not because of the original issue, but because the responses introduce uncertainty.

This is why handling an investigation is not just about answering questions — it is about controlling how the enquiry develops.`,
                img: taxInvestigationImg
            },
            {
                type: `text-image`,
                title: `Tax Investigation and Personal Income`,
                content: `Personal tax investigations often involve multiple income sources.

This may include:

● employment income

● dividends

● rental income

● foreign income

Where these have not been aligned properly, the enquiry tends to expand across all areas.

This is where coordination with income tax services UK becomes critical, ensuring that responses reflect the full position rather than isolated figures.`,
                img: taxInvestigationImg
            },
            {
                type: `text-image`,
                title: `Business Tax Investigations and Company Records`,
                content: `For businesses, investigations often extend beyond a single return.

HMRC may review:

● company accounts

● expense treatment

● director transactions

● payroll records

Where these are not aligned, the enquiry can move across multiple reporting areas.

This includes interaction with payroll services UK and financial outputs that feed into statutory reporting.`,
                img: taxInvestigationImg
            },
            {
                type: `text-split`,
                title: `Tax Investigation Insurance – Where It Makes a Difference`,
                subtitle: `The cost of handling an investigation is often underestimated.`,
                leftContent: `It is not a single interaction.

It involves:

● ongoing correspondence
● detailed review of records
● preparation of structured responses`,
                rightContent: `Tax investigation insurance ensures that:

● professional time is covered
● responses are handled thoroughly
● decisions are not influenced by cost constraints

Without cover, individuals and businesses may limit the level of support they engage — which can affect the outcome.`
            },
            {
                type: `text-image`,
                title: `What Our Tax Investigation Services Actually Change`,
                content: `Most providers will:

● respond to HMRC

● provide general support

● assist with documentation

That is expected.

What changes the outcome is how the investigation is managed from the start. This is not simply about responding to HMRC — it is about managing how the enquiry evolves from the moment it begins.

Our approach focuses on:
● controlling the scope of the enquiry early
● ensuring consistency across all responses
● aligning records before they are presented

This results in:
● more focused enquiries
● fewer unnecessary extensions
● clearer resolution pathways

The difference is not in responding — it is in how the enquiry is handled strategically.`,
                img: taxInvestigationImg
            },
            {
                type: `text-split`,
                title: `When You Should Speak to a Tax Investigation Specialist`,
                subtitle: `Most people seek support after:`,
                leftContent: `Most people seek support after:

● receiving an HMRC letter
● attempting an initial response
● realising the scope is wider than expected

At that point, the process has already started.`,
                rightContent: `You should seek specialist support when:

● an enquiry is opened
● information is requested
● there is uncertainty about how to respond

Because early responses shape how the investigation develops. Later responses only react to it.`
            },
            {
                type: `text-image`,
                title: `Tax Investigation and Long-Term Risk`,
                content: `Investigations do not exist in isolation.

They often highlight:

● weaknesses in record keeping

● inconsistencies in reporting

● structural issues across tax areas

This is why they often lead to broader reviews involving tax advisory services UK, ensuring that similar issues do not arise again.`,
                img: taxInvestigationImg
            },
            {
                type: `text-image-reversed`,
                title: `Speak to Tax Investigation Specialists in London UK`,
                content: `If you are under HMRC enquiry, the process is already underway.

What matters now is how it is handled.

Whether you need:

● tax investigation insurance

● professional representation

● structured response support

delaying action does not pause the enquiry — it allows it to develop without control.`,
                img: taxInvestigationImg
            }
        ],
        faqs: [
            {
                q: `What does Tax Investigation Insurance cover?`,
                a: `Our Tax Investigation Insurance covers the professional fees charged by your accountant or tax advisor for handling a wide range of HMRC inquiries and investigations, including income tax, corporation tax, VAT, PAYE, and IR35 status disputes.`
            },
            {
                q: `Who needs this type of insurance?`,
                a: `Anyone who submits a tax return, whether individuals, sole traders, partnerships, limited companies, or landlords, can benefit. All tax-paying entities are potentially subject to HMRC investigation.`
            },
            {
                q: `Does the insurance cover penalties or unpaid tax?`,
                a: `No, the insurance exclusively covers the professional fees incurred for defending you during an investigation. It does not cover any tax liabilities, interest, or penalties that HMRC may levy as a result of the investigation findings.`
            },
            {
                q: `How common are HMRC tax investigations?`,
                a: `HMRC conducts hundreds of thousands of inquiries each year. While full-scale investigations are less frequent, many businesses and individuals face aspect inquiries, compliance checks, or random audits.`
            },
            {
                q: `Can I get this insurance if I'm already under investigation?`,
                a: `Typically, tax investigation insurance cannot be purchased once an investigation has already been initiated. It is designed to cover future, unforeseen inquiries, making proactive purchase essential.`
            }
        ]
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TaxationRenderer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TaxationRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$legacy$2d$templates$2f$taxationConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/legacy-templates/taxationConfig.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function TaxationRenderer({ configKey }) {
    _s();
    const data = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$legacy$2d$templates$2f$taxationConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["taxationConfig"][configKey];
    const [activeFaq, setActiveFaq] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    if (!data) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto px-4 py-24 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold text-[#1d3c45] mb-4",
                    children: "Service Details Not Found"
                }, void 0, false, {
                    fileName: "[project]/src/components/TaxationRenderer.jsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500",
                    children: "The requested service structure is currently being updated by our chartered accountants."
                }, void 0, false, {
                    fileName: "[project]/src/components/TaxationRenderer.jsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TaxationRenderer.jsx",
            lineNumber: 12,
            columnNumber: 7
        }, this);
    }
    const toggleFaq = (index)=>{
        setActiveFaq(activeFaq === index ? null : index);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50/30 border-b border-gray-100 py-16 sm:py-24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-7 space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-600 rounded-full bg-orange-50",
                                        children: "UK Tax & Advisory"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TaxationRenderer.jsx",
                                        lineNumber: 30,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl sm:text-5xl font-extrabold text-[#1d3c45] tracking-tight leading-tight",
                                        children: data.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TaxationRenderer.jsx",
                                        lineNumber: 33,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl font-medium text-orange-600",
                                        children: data.subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TaxationRenderer.jsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg text-gray-600 leading-relaxed",
                                        children: data.heroIntro
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TaxationRenderer.jsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-2 text-gray-600 leading-relaxed border-t border-gray-200",
                                        children: data.heroDetails
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TaxationRenderer.jsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TaxationRenderer.jsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-5 relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "aspect-[4/3] w-full relative rounded-2xl overflow-hidden border border-gray-100 shadow-md",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: data.img || 'https://placehold.co/800x600?text=Taxaccolega+Tax+Advisory',
                                        alt: data.title,
                                        className: "object-cover w-full h-full",
                                        referrerPolicy: "no-referrer"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TaxationRenderer.jsx",
                                        lineNumber: 49,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TaxationRenderer.jsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/TaxationRenderer.jsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TaxationRenderer.jsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/TaxationRenderer.jsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/TaxationRenderer.jsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            data.sections && data.sections.map((section, idx)=>{
                if (section.type === 'difficult') {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-3xl mb-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl font-extrabold text-[#1d3c45] mb-2",
                                        children: section.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TaxationRenderer.jsx",
                                        lineNumber: 67,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg font-medium text-orange-600 mb-4",
                                        children: section.subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TaxationRenderer.jsx",
                                        lineNumber: 68,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 leading-relaxed",
                                        children: section.content
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TaxationRenderer.jsx",
                                        lineNumber: 69,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TaxationRenderer.jsx",
                                lineNumber: 66,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",
                                children: section.bullets && section.bullets.map((bullet, bidx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100 items-start",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "p-1 bg-orange-100 text-[#d2601a] rounded-full text-xs font-bold font-mono",
                                                children: "✓"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TaxationRenderer.jsx",
                                                lineNumber: 75,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-700 text-sm font-medium leading-relaxed",
                                                children: bullet
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TaxationRenderer.jsx",
                                                lineNumber: 76,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, bidx, true, {
                                        fileName: "[project]/src/components/TaxationRenderer.jsx",
                                        lineNumber: 74,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/TaxationRenderer.jsx",
                                lineNumber: 72,
                                columnNumber: 15
                            }, this),
                            section.footer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-orange-50/50 rounded-xl border border-orange-100/50 text-xs font-medium text-orange-800 leading-relaxed",
                                children: section.footer
                            }, void 0, false, {
                                fileName: "[project]/src/components/TaxationRenderer.jsx",
                                lineNumber: 82,
                                columnNumber: 17
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/src/components/TaxationRenderer.jsx",
                        lineNumber: 65,
                        columnNumber: 13
                    }, this);
                }
                if (section.type === 'cards') {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-16 bg-gray-50 border-b border-gray-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-3xl mb-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-3xl font-extrabold text-[#1d3c45] mb-4",
                                            children: section.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TaxationRenderer.jsx",
                                            lineNumber: 95,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 leading-relaxed",
                                            children: section.intro
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TaxationRenderer.jsx",
                                            lineNumber: 96,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/TaxationRenderer.jsx",
                                    lineNumber: 94,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                                    children: section.cards && section.cards.map((card, cidx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-xl font-bold text-[#d2601a]",
                                                    children: cidx + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TaxationRenderer.jsx",
                                                    lineNumber: 102,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-[#1d3c45]",
                                                    children: card.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TaxationRenderer.jsx",
                                                    lineNumber: 105,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 text-sm leading-relaxed",
                                                    children: card.text
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TaxationRenderer.jsx",
                                                    lineNumber: 106,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, cidx, true, {
                                            fileName: "[project]/src/components/TaxationRenderer.jsx",
                                            lineNumber: 101,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TaxationRenderer.jsx",
                                    lineNumber: 99,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TaxationRenderer.jsx",
                            lineNumber: 93,
                            columnNumber: 15
                        }, this)
                    }, idx, false, {
                        fileName: "[project]/src/components/TaxationRenderer.jsx",
                        lineNumber: 92,
                        columnNumber: 13
                    }, this);
                }
                if (section.type === 'table') {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-3xl mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl font-extrabold text-[#1d3c45] mb-2",
                                        children: section.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TaxationRenderer.jsx",
                                        lineNumber: 119,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500 text-sm",
                                        children: section.subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TaxationRenderer.jsx",
                                        lineNumber: 120,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TaxationRenderer.jsx",
                                lineNumber: 118,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto rounded-xl border border-gray-100 shadow-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "min-w-full divide-y divide-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            className: "bg-[#1d3c45] text-white",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: section.headers && section.headers.map((h, hidx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider",
                                                        children: h
                                                    }, hidx, false, {
                                                        fileName: "[project]/src/components/TaxationRenderer.jsx",
                                                        lineNumber: 128,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TaxationRenderer.jsx",
                                                lineNumber: 126,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TaxationRenderer.jsx",
                                            lineNumber: 125,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            className: "bg-white divide-y divide-gray-100 text-gray-700 text-sm",
                                            children: section.rows && section.rows.map((row, rowIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "hover:bg-slate-50",
                                                    children: row.map((cell, cellIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4 whitespace-normal align-top leading-relaxed",
                                                            children: cell
                                                        }, cellIdx, false, {
                                                            fileName: "[project]/src/components/TaxationRenderer.jsx",
                                                            lineNumber: 138,
                                                            columnNumber: 27
                                                        }, this))
                                                }, rowIdx, false, {
                                                    fileName: "[project]/src/components/TaxationRenderer.jsx",
                                                    lineNumber: 136,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TaxationRenderer.jsx",
                                            lineNumber: 134,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/TaxationRenderer.jsx",
                                    lineNumber: 124,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/TaxationRenderer.jsx",
                                lineNumber: 123,
                                columnNumber: 15
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/src/components/TaxationRenderer.jsx",
                        lineNumber: 117,
                        columnNumber: 13
                    }, this);
                }
                return null;
            }),
            data.faqs && data.faqs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-extrabold text-center text-[#1d3c45] mb-12",
                        children: "Frequently Asked Questions"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TaxationRenderer.jsx",
                        lineNumber: 157,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: data.faqs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-gray-100 rounded-2xl overflow-hidden shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "flex justify-between items-center w-full px-6 py-5 text-left font-bold text-lg bg-gray-50 hover:bg-gray-100/80 transition-colors",
                                        onClick: ()=>toggleFaq(index),
                                        "aria-expanded": activeFaq === index,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#1d3c45] pr-4",
                                                children: faq.q
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TaxationRenderer.jsx",
                                                lineNumber: 166,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-orange-600 font-extrabold shrink-0",
                                                children: activeFaq === index ? '−' : '+'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TaxationRenderer.jsx",
                                                lineNumber: 167,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TaxationRenderer.jsx",
                                        lineNumber: 161,
                                        columnNumber: 17
                                    }, this),
                                    activeFaq === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-6 py-5 text-gray-600 bg-white leading-relaxed text-sm border-t border-gray-50",
                                        children: faq.a
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TaxationRenderer.jsx",
                                        lineNumber: 172,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/src/components/TaxationRenderer.jsx",
                                lineNumber: 160,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/TaxationRenderer.jsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TaxationRenderer.jsx",
                lineNumber: 156,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-5xl mx-auto px-4 py-8 mb-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-r from-[#1d3c45] to-[#254d58] text-white p-8 sm:p-12 rounded-3xl relative overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl sm:text-4xl font-extrabold tracking-tight",
                                children: "Need expert tax support?"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TaxationRenderer.jsx",
                                lineNumber: 186,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-gray-300 max-w-2xl leading-relaxed",
                                children: "Don’t let tax deadlines and complicated calculations cloud your peace of mind. Partner with our designated tax advisors and Chartered Accountants."
                            }, void 0, false, {
                                fileName: "[project]/src/components/TaxationRenderer.jsx",
                                lineNumber: 187,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-4 pt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/contact-us",
                                        className: "px-8 py-3 bg-white text-[#1d3c45] font-bold rounded-full transition-all hover:bg-orange-50",
                                        children: "Book free Consultancy"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TaxationRenderer.jsx",
                                        lineNumber: 191,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "tel:02081270728",
                                        className: "px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full transition-all hover:bg-white/10",
                                        children: "Call 020 8127 0728"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TaxationRenderer.jsx",
                                        lineNumber: 194,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TaxationRenderer.jsx",
                                lineNumber: 190,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TaxationRenderer.jsx",
                        lineNumber: 185,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/TaxationRenderer.jsx",
                    lineNumber: 184,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/TaxationRenderer.jsx",
                lineNumber: 183,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TaxationRenderer.jsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(TaxationRenderer, "vv9/XomSRVGXhCxJqoCn9Ngsi1k=");
_c = TaxationRenderer;
var _c;
__turbopack_context__.k.register(_c, "TaxationRenderer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/TaxationSubPage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TaxationSubPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-4ZMWKKQ3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TaxationRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TaxationRenderer.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServiceRenderer.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function TaxationSubPage() {
    _s();
    const { slug } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    // If we have config defined in taxationConfig, use the rich TaxationRenderer
    const validKeys = [
        'worldwide-disclosure-facility',
        'cryptocurrency',
        'film-tax-relief',
        'let-property-campaign',
        'personal-income-tax',
        'company-tax-return-accountants',
        'vat-accountants',
        'inheritance-tax-planning',
        'tax-investigation-insurance'
    ];
    if (validKeys.includes(slug)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TaxationRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            configKey: slug
        }, void 0, false, {
            fileName: "[project]/src/react-pages/TaxationSubPage.jsx",
            lineNumber: 23,
            columnNumber: 12
        }, this);
    }
    // Fallback to high-quality service card matching the title
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: `Taxation Assistance - ${slug}`,
        subtitle: "Exquisite advice from top-tier London chartered tax and accounting advisory.",
        bullets: [
            "Regulatory reporting matching modern statutory rules",
            "Checking structural reliefs and claims thresholds",
            "Direct connection to HMRC filing gateways",
            "Robust defense against audit or tax review inquiries"
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "The UK taxation matrix is strict and ever-changing. We support individuals, corporate groups, and trusts in making sure all liabilities are resolved."
        }, void 0, false, {
            fileName: "[project]/src/react-pages/TaxationSubPage.jsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/react-pages/TaxationSubPage.jsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(TaxationSubPage, "DpOdpe+T7d3Ytb7f6neHj0L13w0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = TaxationSubPage;
var _c;
__turbopack_context__.k.register(_c, "TaxationSubPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/AnnualAccounts.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnnualAccounts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServiceRenderer.jsx [app-client] (ecmascript)");
;
;
;
function AnnualAccounts() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Annual Accounts Preparation",
        subtitle: "Filing compliant year-end corporate records with Companies House and HMRC on time.",
        bullets: [
            "Fulfilling full disclosures under FRS 102 & FRS 105",
            "Reconciling balance sheets, assets, bank balances, and P&L logs",
            "Minimising corporate tax exposure legally",
            "Submission of iXBRL tagged reports to HMRC gateways"
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Your annual accounts are vital to showing the solvency of your limited company. Completing your records with accuracy and submitting them on time prevents Companies House late penalties. Taxaccolega takes complete charge of your year-end files."
        }, void 0, false, {
            fileName: "[project]/src/react-pages/AnnualAccounts.jsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/react-pages/AnnualAccounts.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = AnnualAccounts;
var _c;
__turbopack_context__.k.register(_c, "AnnualAccounts");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/StatutoryAccounts.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatutoryAccounts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServiceRenderer.jsx [app-client] (ecmascript)");
;
;
;
function StatutoryAccounts() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Statutory Accounts",
        subtitle: "Ensuring corporate year-end files strictly match Companies House statutory frameworks.",
        bullets: [
            "Filing compliant abbreviated balance sheets",
            "Expert reconciliation of general ledgers",
            "Submissions to HM Revenue and Customs and Companies House",
            "Ongoing support and audit defense"
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Statutory accounting requires strict adherence to corporate law and disclosure requirements. Taxaccolega ensures your reports are correct, complete, and filed on time."
        }, void 0, false, {
            fileName: "[project]/src/react-pages/StatutoryAccounts.jsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/react-pages/StatutoryAccounts.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = StatutoryAccounts;
var _c;
__turbopack_context__.k.register(_c, "StatutoryAccounts");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/ManagementAccounts.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ManagementAccounts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServiceRenderer.jsx [app-client] (ecmascript)");
;
;
;
function ManagementAccounts() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Management Accounts",
        subtitle: "Periodic (monthly or quarterly) financial reports to steer your business with absolute clarity.",
        bullets: [
            "Real-time Profit & Loss statement breakdowns",
            "Aging accounts receivable and payable reports",
            "Key performance indicator (KPI) tracking metrics",
            "Strategic consulting based on actual performance logs"
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Waiting until the year ends to review your financial records is risky. Periodic management accounts provide real-time indicators regarding cash buffers, performance margins, and tax liabilities, helping you make informed decisions."
        }, void 0, false, {
            fileName: "[project]/src/react-pages/ManagementAccounts.jsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/react-pages/ManagementAccounts.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = ManagementAccounts;
var _c;
__turbopack_context__.k.register(_c, "ManagementAccounts");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/CashFlowForecasting.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CashFlowForecasting
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServiceRenderer.jsx [app-client] (ecmascript)");
;
;
;
function CashFlowForecasting() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Cash Flow Forecasting",
        subtitle: "Ensuring your business maintains robust liquidity and optimal runways for strategic maneuvers.",
        bullets: [
            "Historical transaction run-rate assessments",
            "Predicting seasonal trends and accounts receivable cycles",
            "Assisting with buffer levels planning for corporate security",
            "Structured reports for banks and financial institutions"
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Cash is the lifeblood of business survival. Proactively forecasting expected collections and upcoming tax payments prevents liquidity shortfalls."
        }, void 0, false, {
            fileName: "[project]/src/react-pages/CashFlowForecasting.jsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/react-pages/CashFlowForecasting.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = CashFlowForecasting;
var _c;
__turbopack_context__.k.register(_c, "CashFlowForecasting");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/SoleTraderPackage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SoleTraderPackage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServiceRenderer.jsx [app-client] (ecmascript)");
;
;
;
function SoleTraderPackage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Sole Trader Package",
        subtitle: "Complete accounting compliance and annual self assessment planning for self-employed professionals.",
        bullets: [
            "Annual Self Assessment (SA100) preparation and direct HMRC filing",
            "Unlimited professional tax advisory and support",
            "Expense claim optimization matching strict HMRC criteria",
            "Continuous support for Making Tax Digital (MTD) migration"
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Running as a sole trader is simple, but staying audit-compliant calls for properly documented ledgers. We calculate your self assessment, payments on account, and allowable expenses seamlessly."
        }, void 0, false, {
            fileName: "[project]/src/react-pages/SoleTraderPackage.jsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/react-pages/SoleTraderPackage.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = SoleTraderPackage;
var _c;
__turbopack_context__.k.register(_c, "SoleTraderPackage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/LtdCompanyPackage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LtdCompanyPackage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServiceRenderer.jsx [app-client] (ecmascript)");
;
;
;
function LtdCompanyPackage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Limited Company Package",
        subtitle: "Complete accounting compliance covering annual reports, CT600s, bookkeeping, and advisory.",
        bullets: [
            "Filing annual statutory accounts with Companies House",
            "Preparing and submitting HMRC Corporation Tax returns",
            "Managing director salary setup and dividend tax plans",
            "Unlimited email and phone advice with our chartered accountants"
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Stay legally compliant under all UK corporate requirements. Our packages include cloud software synchronization, quarterly reviews, and complete year-end statutory reports."
        }, void 0, false, {
            fileName: "[project]/src/react-pages/LtdCompanyPackage.jsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/react-pages/LtdCompanyPackage.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = LtdCompanyPackage;
var _c;
__turbopack_context__.k.register(_c, "LtdCompanyPackage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/ContractorLtdPackage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContractorLtdPackage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServiceRenderer.jsx [app-client] (ecmascript)");
;
;
;
function ContractorLtdPackage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Contractor accounting plan",
        subtitle: "Specifically designed for UK independent contractors, featuring IR35 status checks and fast payroll.",
        bullets: [
            "Fulfilling all annual company and personal tax filings",
            "Expert IR35 review and contract compliance audits",
            "Efficient monthly director salary and dividend distributions",
            "Integration with standard Xero and FreeAgent accounts"
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Contractor accounting has unique demands, particularly concerning IR35 regulations and business structure optimization. We ensure you manage your contractor limited company efficiently."
        }, void 0, false, {
            fileName: "[project]/src/react-pages/ContractorLtdPackage.jsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/react-pages/ContractorLtdPackage.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = ContractorLtdPackage;
var _c;
__turbopack_context__.k.register(_c, "ContractorLtdPackage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/LandlordsPackage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LandlordsPackage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServiceRenderer.jsx [app-client] (ecmascript)");
;
;
;
function LandlordsPackage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Landlord Accounting Package",
        subtitle: "Comprehensive property income tracking for single residential units and multi-property landlord portfolios.",
        bullets: [
            "Filing property rental income under SA105 forms",
            "Assisting with HMRC Let Property Campaign voluntary disclosures",
            "Optimising mortgage interest relief restrictions and allowable deductions",
            "Strategic advice on buying properties via SPVs"
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Property taxation has seen significant regulatory alterations. Keeping record tracking consistent across portfolios helps you stay optimized. We manage your property income tax returns perfectly."
        }, void 0, false, {
            fileName: "[project]/src/react-pages/LandlordsPackage.jsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/react-pages/LandlordsPackage.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = LandlordsPackage;
var _c;
__turbopack_context__.k.register(_c, "LandlordsPackage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/SpvsLtdPackage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SpvsLtdPackage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServiceRenderer.jsx [app-client] (ecmascript)");
;
;
;
function SpvsLtdPackage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "SPV Limited Company Package",
        subtitle: "Specialized property holding accounting for limited companies (SPVs) designed to tax-efficiently purchase real estate.",
        bullets: [
            "Annual statutory filings and corporation tax returns",
            "Assisting with mortgage interest deduction optimization",
            "Recording capital gains and property acquisition costs",
            "Dividends matching and corporate group relief assistance"
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Building a property portfolio inside an SPV Limited company is highly tax-efficient compared to private ownership. Taxaccolega provides complete compliance support for your property portfolio."
        }, void 0, false, {
            fileName: "[project]/src/react-pages/SpvsLtdPackage.jsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/react-pages/SpvsLtdPackage.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = SpvsLtdPackage;
var _c;
__turbopack_context__.k.register(_c, "SpvsLtdPackage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/CharitiesPackage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CharitiesPackage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServiceRenderer.jsx [app-client] (ecmascript)");
;
;
;
function CharitiesPackage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Charity & Trust Package",
        subtitle: "Complete accounting support matching Charities Commission regulations and SORP standards.",
        bullets: [
            "Filing independent examiner reports and statutory accounts",
            "Assisting with Gift Aid claims and tax recovery submissions",
            "Reconciling restricted and unrestricted charity funds",
            "Verification reviews matching strict financial guidelines"
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Charities have rigorous public disclosure requirements. Our services ensure your trustees remain fully compliant with Charity Commission mandates while maximizing Gift Aid allocations."
        }, void 0, false, {
            fileName: "[project]/src/react-pages/CharitiesPackage.jsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/react-pages/CharitiesPackage.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = CharitiesPackage;
var _c;
__turbopack_context__.k.register(_c, "CharitiesPackage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/ReferAFriend.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReferAFriend
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$ReferAndEarn$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/ReferAndEarn.jsx [app-client] (ecmascript)");
;
;
;
function ReferAFriend() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$ReferAndEarn$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/react-pages/ReferAFriend.jsx",
        lineNumber: 5,
        columnNumber: 10
    }, this);
}
_c = ReferAFriend;
var _c;
__turbopack_context__.k.register(_c, "ReferAFriend");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/PrivacyPolicy.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PrivacyPolicy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
function PrivacyPolicy() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto px-4 py-16 sm:px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-extrabold text-[#1d3c45] mb-6 tracking-tight",
                children: "Privacy Policy"
            }, void 0, false, {
                fileName: "[project]/src/react-pages/PrivacyPolicy.jsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-500 text-sm mb-8",
                children: "Effective Date: June 22, 2026"
            }, void 0, false, {
                fileName: "[project]/src/react-pages/PrivacyPolicy.jsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6 text-gray-700 leading-relaxed text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-[#1d3c45]",
                                children: "1. Introduction"
                            }, void 0, false, {
                                fileName: "[project]/src/react-pages/PrivacyPolicy.jsx",
                                lineNumber: 11,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Taxaccolega Chartered Accountants (“we”, “us”, or “our”) is committed to protecting and respecting your privacy in compliance with UK GDPR and the Data Protection Act 2018. This Privacy Policy details how we collect, process, and protect your personal information when you use our website or register as a client."
                            }, void 0, false, {
                                fileName: "[project]/src/react-pages/PrivacyPolicy.jsx",
                                lineNumber: 12,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/react-pages/PrivacyPolicy.jsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-[#1d3c45]",
                                children: "2. Personal Data We Collect"
                            }, void 0, false, {
                                fileName: "[project]/src/react-pages/PrivacyPolicy.jsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "We may collect and process the following information:"
                            }, void 0, false, {
                                fileName: "[project]/src/react-pages/PrivacyPolicy.jsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Contact details: Name, email address, mailing address, phone number."
                                    }, void 0, false, {
                                        fileName: "[project]/src/react-pages/PrivacyPolicy.jsx",
                                        lineNumber: 21,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Statutory details: National Insurance number, date of birth, Companies House directors codes."
                                    }, void 0, false, {
                                        fileName: "[project]/src/react-pages/PrivacyPolicy.jsx",
                                        lineNumber: 22,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Financial info: Tax summaries, details of business profit and expenses."
                                    }, void 0, false, {
                                        fileName: "[project]/src/react-pages/PrivacyPolicy.jsx",
                                        lineNumber: 23,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Verification uploads: Passport copies, utility bills, other identification files."
                                    }, void 0, false, {
                                        fileName: "[project]/src/react-pages/PrivacyPolicy.jsx",
                                        lineNumber: 24,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/react-pages/PrivacyPolicy.jsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/react-pages/PrivacyPolicy.jsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-[#1d3c45]",
                                children: "3. How We Use Your Data"
                            }, void 0, false, {
                                fileName: "[project]/src/react-pages/PrivacyPolicy.jsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "We use your personal data to:"
                            }, void 0, false, {
                                fileName: "[project]/src/react-pages/PrivacyPolicy.jsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-5 space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Verify identity under statutory anti-money laundering (AML) laws."
                                    }, void 0, false, {
                                        fileName: "[project]/src/react-pages/PrivacyPolicy.jsx",
                                        lineNumber: 32,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Prepare and file tax returns and annual accounts under your direct instructions."
                                    }, void 0, false, {
                                        fileName: "[project]/src/react-pages/PrivacyPolicy.jsx",
                                        lineNumber: 33,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Respond to your enquiries and provide tailored tax advisory letters."
                                    }, void 0, false, {
                                        fileName: "[project]/src/react-pages/PrivacyPolicy.jsx",
                                        lineNumber: 34,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/react-pages/PrivacyPolicy.jsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/react-pages/PrivacyPolicy.jsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-[#1d3c45]",
                                children: "4. Retention of Information"
                            }, void 0, false, {
                                fileName: "[project]/src/react-pages/PrivacyPolicy.jsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "We retain personal information for only as long as is necessary to satisfy legal, reporting, or auditing requirements. Standard customer records are stored securely for up to 6 years following file completion in compliance with UK professional regulations."
                            }, void 0, false, {
                                fileName: "[project]/src/react-pages/PrivacyPolicy.jsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/react-pages/PrivacyPolicy.jsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-[#1d3c45]",
                                children: "5. Your Rights"
                            }, void 0, false, {
                                fileName: "[project]/src/react-pages/PrivacyPolicy.jsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Under UK GDPR, you have the right to request access to, correction of, or deletion of your personal data. You also have the right to restrict processing or withdraw consent at any time."
                            }, void 0, false, {
                                fileName: "[project]/src/react-pages/PrivacyPolicy.jsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/react-pages/PrivacyPolicy.jsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "pt-4 border-t border-gray-100 text-[#d2601a] font-bold",
                        children: "If you have any questions, contact our GDPR Officer at info@taxaccolega.co.uk."
                    }, void 0, false, {
                        fileName: "[project]/src/react-pages/PrivacyPolicy.jsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/react-pages/PrivacyPolicy.jsx",
                lineNumber: 9,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/react-pages/PrivacyPolicy.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = PrivacyPolicy;
var _c;
__turbopack_context__.k.register(_c, "PrivacyPolicy");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/CompanyTaxReturn.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CompanyTaxReturn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TaxationRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TaxationRenderer.jsx [app-client] (ecmascript)");
;
;
;
function CompanyTaxReturn() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TaxationRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        configKey: "company-tax-return-accountants"
    }, void 0, false, {
        fileName: "[project]/src/react-pages/CompanyTaxReturn.jsx",
        lineNumber: 5,
        columnNumber: 10
    }, this);
}
_c = CompanyTaxReturn;
var _c;
__turbopack_context__.k.register(_c, "CompanyTaxReturn");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/VatAccountants.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VatAccountants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TaxationRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TaxationRenderer.jsx [app-client] (ecmascript)");
;
;
;
function VatAccountants() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TaxationRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        configKey: "vat-accountants"
    }, void 0, false, {
        fileName: "[project]/src/react-pages/VatAccountants.jsx",
        lineNumber: 5,
        columnNumber: 10
    }, this);
}
_c = VatAccountants;
var _c;
__turbopack_context__.k.register(_c, "VatAccountants");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/InheritanceTaxPlanning.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InheritanceTaxPlanning
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TaxationRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TaxationRenderer.jsx [app-client] (ecmascript)");
;
;
;
function InheritanceTaxPlanning() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TaxationRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        configKey: "inheritance-tax-planning"
    }, void 0, false, {
        fileName: "[project]/src/react-pages/InheritanceTaxPlanning.jsx",
        lineNumber: 5,
        columnNumber: 10
    }, this);
}
_c = InheritanceTaxPlanning;
var _c;
__turbopack_context__.k.register(_c, "InheritanceTaxPlanning");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/EmiSchemes.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EmiSchemesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServiceRenderer.jsx [app-client] (ecmascript)");
;
;
;
function EmiSchemesPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Enterprise Management Incentives (EMI) Schemes",
        subtitle: "Exquisite advice on HMRC-approved share option plans designed to retain and reward small business employees.",
        bullets: [
            "HMRC valuation requests and option scheme drafting",
            "Significant capital gains and corporation tax reliefs guidance",
            "Custom vesting schedules matching performance thresholds",
            "Submission of annual share schemes reports to HMRC"
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "The Enterprise Management Incentive (EMI) scheme is a highly tax-efficient share option program backed by the UK government. It allows small businesses to award options to key staff, keeping them motivated without heavy income tax burdens."
        }, void 0, false, {
            fileName: "[project]/src/react-pages/EmiSchemes.jsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/react-pages/EmiSchemes.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = EmiSchemesPage;
var _c;
__turbopack_context__.k.register(_c, "EmiSchemesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/LetPropertyCampaign.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LetPropertyCampaign
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TaxationRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TaxationRenderer.jsx [app-client] (ecmascript)");
;
;
;
function LetPropertyCampaign() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TaxationRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        configKey: "let-property-campaign"
    }, void 0, false, {
        fileName: "[project]/src/react-pages/LetPropertyCampaign.jsx",
        lineNumber: 5,
        columnNumber: 10
    }, this);
}
_c = LetPropertyCampaign;
var _c;
__turbopack_context__.k.register(_c, "LetPropertyCampaign");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/WorldwideDisclosureFacility.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WorldwideDisclosureFacility
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TaxationRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TaxationRenderer.jsx [app-client] (ecmascript)");
;
;
;
function WorldwideDisclosureFacility() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TaxationRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        configKey: "worldwide-disclosure-facility"
    }, void 0, false, {
        fileName: "[project]/src/react-pages/WorldwideDisclosureFacility.jsx",
        lineNumber: 5,
        columnNumber: 10
    }, this);
}
_c = WorldwideDisclosureFacility;
var _c;
__turbopack_context__.k.register(_c, "WorldwideDisclosureFacility");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/CryptocurrencyTax.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CryptocurrencyTax
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TaxationRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TaxationRenderer.jsx [app-client] (ecmascript)");
;
;
;
function CryptocurrencyTax() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TaxationRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        configKey: "cryptocurrency"
    }, void 0, false, {
        fileName: "[project]/src/react-pages/CryptocurrencyTax.jsx",
        lineNumber: 5,
        columnNumber: 10
    }, this);
}
_c = CryptocurrencyTax;
var _c;
__turbopack_context__.k.register(_c, "CryptocurrencyTax");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/PersonalIncomeTax.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PersonalIncomeTax
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TaxationRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TaxationRenderer.jsx [app-client] (ecmascript)");
;
;
;
function PersonalIncomeTax() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TaxationRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        configKey: "personal-income-tax"
    }, void 0, false, {
        fileName: "[project]/src/react-pages/PersonalIncomeTax.jsx",
        lineNumber: 5,
        columnNumber: 10
    }, this);
}
_c = PersonalIncomeTax;
var _c;
__turbopack_context__.k.register(_c, "PersonalIncomeTax");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/ConsolidatedAccounts.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConsolidatedAccounts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServiceRenderer.jsx [app-client] (ecmascript)");
;
;
;
function ConsolidatedAccounts() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Consolidated Accounts",
        subtitle: "Structured group accounting combining subsidiary and holding company ledgers.",
        bullets: [
            "Fulfilling group disclosures and corporate parent filings",
            "Inter-company transaction exclusions and balancing",
            "Consolidated balance sheets and dynamic P&L ledgers",
            "Clear compliance reporting suited for medium-sized business groups"
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Managing complex holding structures requires combining several general ledgers under group thresholds. Taxaccolega ensures all statutory group filings are reconciled correctly."
        }, void 0, false, {
            fileName: "[project]/src/react-pages/ConsolidatedAccounts.jsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/react-pages/ConsolidatedAccounts.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = ConsolidatedAccounts;
var _c;
__turbopack_context__.k.register(_c, "ConsolidatedAccounts");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/SingleBlog.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SingleBlog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-4ZMWKKQ3.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function SingleBlog() {
    _s();
    const { slug } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const [post, setPost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SingleBlog.useEffect": ()=>{
            fetch('/blogs.json').then({
                "SingleBlog.useEffect": (res)=>res.json()
            }["SingleBlog.useEffect"]).then({
                "SingleBlog.useEffect": (data)=>{
                    if (data && data.posts) {
                        const found = data.posts.find({
                            "SingleBlog.useEffect.found": (p)=>p.slug === slug
                        }["SingleBlog.useEffect.found"]);
                        setPost(found);
                    }
                    setLoading(false);
                }
            }["SingleBlog.useEffect"]).catch({
                "SingleBlog.useEffect": (err)=>{
                    console.error('Failed to load blog:', err);
                    setLoading(false);
                }
            }["SingleBlog.useEffect"]);
        }
    }["SingleBlog.useEffect"], [
        slug
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto px-4 py-24 text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-500",
                children: "Loading blog post..."
            }, void 0, false, {
                fileName: "[project]/src/react-pages/SingleBlog.jsx",
                lineNumber: 28,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/react-pages/SingleBlog.jsx",
            lineNumber: 27,
            columnNumber: 7
        }, this);
    }
    if (!post) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto px-4 py-24 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold text-[#1d3c45] mb-4",
                    children: "Blog Post Not Found"
                }, void 0, false, {
                    fileName: "[project]/src/react-pages/SingleBlog.jsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 mb-8",
                    children: "The requested blog post could not be located."
                }, void 0, false, {
                    fileName: "[project]/src/react-pages/SingleBlog.jsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/blog",
                    className: "px-6 py-3 text-white rounded-full bg-orange-600 font-semibold",
                    style: {
                        backgroundColor: '#d2601a'
                    },
                    children: "Back to Blog"
                }, void 0, false, {
                    fileName: "[project]/src/react-pages/SingleBlog.jsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/react-pages/SingleBlog.jsx",
            lineNumber: 35,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "max-w-4xl mx-auto px-4 py-16 sm:px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/blog",
                    className: "text-sm font-semibold text-orange-600 hover:underline",
                    children: "← Back to all blogs"
                }, void 0, false, {
                    fileName: "[project]/src/react-pages/SingleBlog.jsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/react-pages/SingleBlog.jsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "mb-10 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-extrabold text-[#1d3c45] tracking-tight mb-4",
                        children: post.title
                    }, void 0, false, {
                        fileName: "[project]/src/react-pages/SingleBlog.jsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-500",
                        children: [
                            "Published on ",
                            post.date,
                            " by ",
                            post.author || 'Taxaccolega Staff'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/react-pages/SingleBlog.jsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/react-pages/SingleBlog.jsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "prose max-w-none text-gray-700 leading-relaxed space-y-4",
                style: {
                    color: '#333'
                },
                dangerouslySetInnerHTML: {
                    __html: post.content
                }
            }, void 0, false, {
                fileName: "[project]/src/react-pages/SingleBlog.jsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/react-pages/SingleBlog.jsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(SingleBlog, "Ef/NT/wPgZ7cV/MSacCb8u83VwQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = SingleBlog;
var _c;
__turbopack_context__.k.register(_c, "SingleBlog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/countries.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Shared country data used by IDVerificationModal
const countries = [
    {
        code: "GB",
        name: "United Kingdom"
    },
    {
        code: "AF",
        name: "Afghanistan"
    },
    {
        code: "AL",
        name: "Albania"
    },
    {
        code: "DZ",
        name: "Algeria"
    },
    {
        code: "AD",
        name: "Andorra"
    },
    {
        code: "AO",
        name: "Angola"
    },
    {
        code: "AG",
        name: "Antigua and Barbuda"
    },
    {
        code: "AR",
        name: "Argentina"
    },
    {
        code: "AM",
        name: "Armenia"
    },
    {
        code: "AU",
        name: "Australia"
    },
    {
        code: "AT",
        name: "Austria"
    },
    {
        code: "AZ",
        name: "Azerbaijan"
    },
    {
        code: "BS",
        name: "Bahamas"
    },
    {
        code: "BH",
        name: "Bahrain"
    },
    {
        code: "BD",
        name: "Bangladesh"
    },
    {
        code: "BB",
        name: "Barbados"
    },
    {
        code: "BY",
        name: "Belarus"
    },
    {
        code: "BE",
        name: "Belgium"
    },
    {
        code: "BZ",
        name: "Belize"
    },
    {
        code: "BJ",
        name: "Benin"
    },
    {
        code: "BT",
        name: "Bhutan"
    },
    {
        code: "BO",
        name: "Bolivia"
    },
    {
        code: "BA",
        name: "Bosnia and Herzegovina"
    },
    {
        code: "BW",
        name: "Botswana"
    },
    {
        code: "BR",
        name: "Brazil"
    },
    {
        code: "BN",
        name: "Brunei"
    },
    {
        code: "BG",
        name: "Bulgaria"
    },
    {
        code: "BF",
        name: "Burkina Faso"
    },
    {
        code: "BI",
        name: "Burundi"
    },
    {
        code: "KH",
        name: "Cambodia"
    },
    {
        code: "CM",
        name: "Cameroon"
    },
    {
        code: "CA",
        name: "Canada"
    },
    {
        code: "CV",
        name: "Cape Verde"
    },
    {
        code: "CF",
        name: "Central African Republic"
    },
    {
        code: "TD",
        name: "Chad"
    },
    {
        code: "CL",
        name: "Chile"
    },
    {
        code: "CN",
        name: "China"
    },
    {
        code: "CO",
        name: "Colombia"
    },
    {
        code: "KM",
        name: "Comoros"
    },
    {
        code: "CG",
        name: "Congo"
    },
    {
        code: "CD",
        name: "Congo (Democratic Republic)"
    },
    {
        code: "CR",
        name: "Costa Rica"
    },
    {
        code: "HR",
        name: "Croatia"
    },
    {
        code: "CU",
        name: "Cuba"
    },
    {
        code: "CY",
        name: "Cyprus"
    },
    {
        code: "CZ",
        name: "Czech Republic"
    },
    {
        code: "DK",
        name: "Denmark"
    },
    {
        code: "DJ",
        name: "Djibouti"
    },
    {
        code: "DM",
        name: "Dominica"
    },
    {
        code: "DO",
        name: "Dominican Republic"
    },
    {
        code: "EC",
        name: "Ecuador"
    },
    {
        code: "EG",
        name: "Egypt"
    },
    {
        code: "SV",
        name: "El Salvador"
    },
    {
        code: "GQ",
        name: "Equatorial Guinea"
    },
    {
        code: "ER",
        name: "Eritrea"
    },
    {
        code: "EE",
        name: "Estonia"
    },
    {
        code: "SZ",
        name: "Eswatini"
    },
    {
        code: "ET",
        name: "Ethiopia"
    },
    {
        code: "FJ",
        name: "Fiji"
    },
    {
        code: "FI",
        name: "Finland"
    },
    {
        code: "FR",
        name: "France"
    },
    {
        code: "GA",
        name: "Gabon"
    },
    {
        code: "GM",
        name: "Gambia"
    },
    {
        code: "GE",
        name: "Georgia"
    },
    {
        code: "DE",
        name: "Germany"
    },
    {
        code: "GH",
        name: "Ghana"
    },
    {
        code: "GR",
        name: "Greece"
    },
    {
        code: "GD",
        name: "Grenada"
    },
    {
        code: "GT",
        name: "Guatemala"
    },
    {
        code: "GN",
        name: "Guinea"
    },
    {
        code: "GW",
        name: "Guinea-Bissau"
    },
    {
        code: "GY",
        name: "Guyana"
    },
    {
        code: "HT",
        name: "Haiti"
    },
    {
        code: "HN",
        name: "Honduras"
    },
    {
        code: "HU",
        name: "Hungary"
    },
    {
        code: "IS",
        name: "Iceland"
    },
    {
        code: "IN",
        name: "India"
    },
    {
        code: "ID",
        name: "Indonesia"
    },
    {
        code: "IR",
        name: "Iran"
    },
    {
        code: "IQ",
        name: "Iraq"
    },
    {
        code: "IE",
        name: "Ireland"
    },
    {
        code: "IL",
        name: "Israel"
    },
    {
        code: "IT",
        name: "Italy"
    },
    {
        code: "CI",
        name: "Ivory Coast"
    },
    {
        code: "JM",
        name: "Jamaica"
    },
    {
        code: "JP",
        name: "Japan"
    },
    {
        code: "JO",
        name: "Jordan"
    },
    {
        code: "KZ",
        name: "Kazakhstan"
    },
    {
        code: "KE",
        name: "Kenya"
    },
    {
        code: "KI",
        name: "Kiribati"
    },
    {
        code: "KW",
        name: "Kuwait"
    },
    {
        code: "KG",
        name: "Kyrgyzstan"
    },
    {
        code: "LA",
        name: "Laos"
    },
    {
        code: "LV",
        name: "Latvia"
    },
    {
        code: "LB",
        name: "Lebanon"
    },
    {
        code: "LS",
        name: "Lesotho"
    },
    {
        code: "LR",
        name: "Liberia"
    },
    {
        code: "LY",
        name: "Libya"
    },
    {
        code: "LI",
        name: "Liechtenstein"
    },
    {
        code: "LT",
        name: "Lithuania"
    },
    {
        code: "LU",
        name: "Luxembourg"
    },
    {
        code: "MG",
        name: "Madagascar"
    },
    {
        code: "MW",
        name: "Malawi"
    },
    {
        code: "MY",
        name: "Malaysia"
    },
    {
        code: "MV",
        name: "Maldives"
    },
    {
        code: "ML",
        name: "Mali"
    },
    {
        code: "MT",
        name: "Malta"
    },
    {
        code: "MH",
        name: "Marshall Islands"
    },
    {
        code: "MR",
        name: "Mauritania"
    },
    {
        code: "MU",
        name: "Mauritius"
    },
    {
        code: "MX",
        name: "Mexico"
    },
    {
        code: "FM",
        name: "Micronesia"
    },
    {
        code: "MD",
        name: "Moldova"
    },
    {
        code: "MC",
        name: "Monaco"
    },
    {
        code: "MN",
        name: "Mongolia"
    },
    {
        code: "ME",
        name: "Montenegro"
    },
    {
        code: "MA",
        name: "Morocco"
    },
    {
        code: "MZ",
        name: "Mozambique"
    },
    {
        code: "MM",
        name: "Myanmar"
    },
    {
        code: "NA",
        name: "Namibia"
    },
    {
        code: "NR",
        name: "Nauru"
    },
    {
        code: "NP",
        name: "Nepal"
    },
    {
        code: "NL",
        name: "Netherlands"
    },
    {
        code: "NZ",
        name: "New Zealand"
    },
    {
        code: "NI",
        name: "Nicaragua"
    },
    {
        code: "NE",
        name: "Niger"
    },
    {
        code: "NG",
        name: "Nigeria"
    },
    {
        code: "NO",
        name: "Norway"
    },
    {
        code: "OM",
        name: "Oman"
    },
    {
        code: "PK",
        name: "Pakistan"
    },
    {
        code: "PA",
        name: "Panama"
    },
    {
        code: "PG",
        name: "Papua New Guinea"
    },
    {
        code: "PY",
        name: "Paraguay"
    },
    {
        code: "PE",
        name: "Peru"
    },
    {
        code: "PH",
        name: "Philippines"
    },
    {
        code: "PL",
        name: "Poland"
    },
    {
        code: "PT",
        name: "Portugal"
    },
    {
        code: "QA",
        name: "Qatar"
    },
    {
        code: "RO",
        name: "Romania"
    },
    {
        code: "RU",
        name: "Russia"
    },
    {
        code: "RW",
        name: "Rwanda"
    },
    {
        code: "KN",
        name: "Saint Kitts and Nevis"
    },
    {
        code: "LC",
        name: "Saint Lucia"
    },
    {
        code: "VC",
        name: "Saint Vincent and the Grenadines"
    },
    {
        code: "WS",
        name: "Samoa"
    },
    {
        code: "SM",
        name: "San Marino"
    },
    {
        code: "ST",
        name: "Sao Tome and Principe"
    },
    {
        code: "SA",
        name: "Saudi Arabia"
    },
    {
        code: "SN",
        name: "Senegal"
    },
    {
        code: "RS",
        name: "Serbia"
    },
    {
        code: "SC",
        name: "Seychelles"
    },
    {
        code: "SL",
        name: "Sierra Leone"
    },
    {
        code: "SG",
        name: "Singapore"
    },
    {
        code: "SK",
        name: "Slovakia"
    },
    {
        code: "SI",
        name: "Slovenia"
    },
    {
        code: "SB",
        name: "Solomon Islands"
    },
    {
        code: "SO",
        name: "Somalia"
    },
    {
        code: "ZA",
        name: "South Africa"
    },
    {
        code: "KR",
        name: "South Korea"
    },
    {
        code: "ES",
        name: "Spain"
    },
    {
        code: "LK",
        name: "Sri Lanka"
    },
    {
        code: "SD",
        name: "Sudan"
    },
    {
        code: "SR",
        name: "Suriname"
    },
    {
        code: "SE",
        name: "Sweden"
    },
    {
        code: "CH",
        name: "Switzerland"
    },
    {
        code: "SY",
        name: "Syria"
    },
    {
        code: "TW",
        name: "Taiwan"
    },
    {
        code: "TJ",
        name: "Tajikistan"
    },
    {
        code: "TZ",
        name: "Tanzania"
    },
    {
        code: "TH",
        name: "Thailand"
    },
    {
        code: "TG",
        name: "Togo"
    },
    {
        code: "TO",
        name: "Tonga"
    },
    {
        code: "TT",
        name: "Trinidad and Tobago"
    },
    {
        code: "TN",
        name: "Tunisia"
    },
    {
        code: "TR",
        name: "Turkey"
    },
    {
        code: "TM",
        name: "Turkmenistan"
    },
    {
        code: "TV",
        name: "Tuvalu"
    },
    {
        code: "UG",
        name: "Uganda"
    },
    {
        code: "UA",
        name: "Ukraine"
    },
    {
        code: "AE",
        name: "United Arab Emirates"
    },
    {
        code: "US",
        name: "United States"
    },
    {
        code: "UY",
        name: "Uruguay"
    },
    {
        code: "UZ",
        name: "Uzbekistan"
    },
    {
        code: "VU",
        name: "Vanuatu"
    },
    {
        code: "VE",
        name: "Venezuela"
    },
    {
        code: "VN",
        name: "Vietnam"
    },
    {
        code: "YE",
        name: "Yemen"
    },
    {
        code: "ZM",
        name: "Zambia"
    },
    {
        code: "ZW",
        name: "Zimbabwe"
    }
];
const __TURBOPACK__default__export__ = countries;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/IDVerificationModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IDVerificationModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$countries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/countries.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const TOTAL_STEPS = 7; // 0-6
/* ── Reusable country <option> list ── */ function CountryOptions({ defaultCode = "GB" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "",
                children: "Select Country"
            }, void 0, false, {
                fileName: "[project]/src/components/IDVerificationModal.jsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$countries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: c.code,
                    "data-countryname": c.name,
                    children: c.name
                }, c.code, false, {
                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true);
}
_c = CountryOptions;
/* ── Price helper ── */ function getPricing(overseas) {
    if (overseas) return {
        base: 45,
        vat: 9,
        total: 54,
        regular: 94.99
    };
    return {
        base: 35,
        vat: 7,
        total: 42,
        regular: 49.99
    };
}
function IDVerificationModal() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [termsVisible, setTermsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showStripe, setShowStripe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPaypal, setShowPaypal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Form data
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        fornames: "",
        lastName: "",
        dob: "",
        nationality: "GB",
        placeOfBirth: "",
        currentAddress: "",
        moveInDate: "",
        previousAddress: "",
        email: "",
        phone: "",
        isDirector: false,
        isPSC: false,
        overseasSelect: "",
        agree: false,
        billingName: "",
        billingAddress: "",
        billingCity: "",
        billingPostcode: "",
        billingCountry: "GB"
    });
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        idDocument: null,
        addressDocument: null,
        overseasDoc: null
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const boxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollTop = ()=>boxRef.current?.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    const set = (key, val)=>{
        setForm((p)=>({
                ...p,
                [key]: val
            }));
        setErrors((p)=>({
                ...p,
                [key]: false
            }));
    };
    const setFile = (key, fileList)=>{
        setFiles((p)=>({
                ...p,
                [key]: fileList?.[0] || null
            }));
        setErrors((p)=>({
                ...p,
                [key]: false
            }));
    };
    const isOverseas = form.overseasSelect === "yes";
    const pricing = getPricing(isOverseas);
    const progress = (step + 1) / TOTAL_STEPS * 100;
    /* ── Validation ── */ const validateStep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "IDVerificationModal.useCallback[validateStep]": ()=>{
            const e = {};
            if (step === 0) {
                if (!form.fornames.trim()) e.fornames = true;
                if (!form.lastName.trim()) e.lastName = true;
                if (!form.dob) e.dob = true;
                if (!form.nationality) e.nationality = true;
                if (!form.placeOfBirth.trim()) e.placeOfBirth = true;
            }
            if (step === 1) {
                if (!form.currentAddress.trim()) e.currentAddress = true;
                if (!form.moveInDate) e.moveInDate = true;
                if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = true;
                if (!form.phone.trim() || !/^\d{7,15}$/.test(form.phone)) e.phone = true;
            }
            if (step === 2) {
                if (!form.isDirector && !form.isPSC) {
                    e.isDirector = true;
                    e.isPSC = true;
                }
            }
            if (step === 3) {
                if (!files.idDocument) e.idDocument = true;
                if (!files.addressDocument) e.addressDocument = true;
                if (!form.overseasSelect) e.overseasSelect = true;
            }
            if (step === 4) {
                if (!files.overseasDoc) e.overseasDoc = true;
            }
            if (step === 5) {
                if (!form.agree) e.agree = true;
            }
            setErrors(e);
            return Object.keys(e).length === 0;
        }
    }["IDVerificationModal.useCallback[validateStep]"], [
        step,
        form,
        files
    ]);
    /* ── Navigation ── */ const goNext = ()=>{
        if (!validateStep()) return;
        // Skip overseas step if not overseas
        if (step === 3 && !isOverseas) {
            setStep(5);
            scrollTop();
            return;
        }
        if (step < TOTAL_STEPS - 1) {
            setStep(step + 1);
            scrollTop();
        }
    };
    const goPrev = ()=>{
        if (step === 5 && form.overseasSelect !== "yes") {
            setStep(3);
            scrollTop();
            return;
        }
        if (step > 0) {
            setStep(step - 1);
            scrollTop();
        }
    };
    const openModal = ()=>{
        setOpen(true);
        setStep(0);
        document.body.style.overflow = "hidden";
    };
    const closeModal = ()=>{
        setOpen(false);
        document.body.style.overflow = "";
    };
    /* ── Input helper ── */ const inputClass = (key)=>`idv-input${errors[key] ? " error" : ""}`;
    const selectClass = (key)=>`idv-select${errors[key] ? " error" : ""}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "idv-trigger",
                onClick: openModal,
                id: "idv-open-btn",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "3",
                                y: "4",
                                width: "18",
                                height: "16",
                                rx: "2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/IDVerificationModal.jsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "9",
                                cy: "10",
                                r: "2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/IDVerificationModal.jsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M15 8h2M15 12h2M7 16h10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/IDVerificationModal.jsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/IDVerificationModal.jsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    "ID Verification"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/IDVerificationModal.jsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "idv-overlay",
                onClick: (e)=>e.target === e.currentTarget && closeModal(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "idv-box",
                    ref: boxRef,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "idv-close",
                            onClick: closeModal,
                            "aria-label": "Close",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                            lineNumber: 136,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "ID Verification Form For Companies House"
                        }, void 0, false, {
                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "idv-progress-track",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "idv-progress-fill",
                                style: {
                                    width: `${progress}%`
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/IDVerificationModal.jsx",
                                lineNumber: 141,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                            lineNumber: 140,
                            columnNumber: 13
                        }, this),
                        step === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "idv-step",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: 14,
                                        color: "#4b5563",
                                        marginBottom: 12,
                                        lineHeight: 1.6
                                    },
                                    children: "From 18 November 2025, UK law requires all company Directors and PSCs to verify their identity with Companies House."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                    lineNumber: 147,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "idv-intro-list",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Companies House will issue a personal code to PSCs."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 151,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Taxaccolega (ACSP) can help collect data and assist."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 152,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Please answer the questions and upload documents."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 153,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                    lineNumber: 150,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "step-icon",
                                            children: "1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 155,
                                            columnNumber: 21
                                        }, this),
                                        " Personal Details"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                    lineNumber: 155,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "idv-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "idv-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "idv-label",
                                                    children: [
                                                        "Forenames ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "idv-required",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                            lineNumber: 158,
                                                            columnNumber: 60
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 158,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: inputClass("fornames"),
                                                    value: form.fornames,
                                                    onChange: (e)=>set("fornames", e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 159,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 157,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "idv-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "idv-label",
                                                    children: [
                                                        "Last Name ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "idv-required",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                            lineNumber: 162,
                                                            columnNumber: 60
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 162,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: inputClass("lastName"),
                                                    value: form.lastName,
                                                    onChange: (e)=>set("lastName", e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 163,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 161,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "idv-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "idv-label",
                                                    children: [
                                                        "Date of Birth ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "idv-required",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                            lineNumber: 166,
                                                            columnNumber: 64
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 166,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    className: inputClass("dob"),
                                                    value: form.dob,
                                                    onChange: (e)=>set("dob", e.target.value),
                                                    max: new Date().toISOString().split("T")[0]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 167,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 165,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                    lineNumber: 156,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "idv-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "idv-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "idv-label",
                                                    children: [
                                                        "Nationality ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "idv-required",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                            lineNumber: 172,
                                                            columnNumber: 62
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 172,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    className: selectClass("nationality"),
                                                    value: form.nationality,
                                                    onChange: (e)=>set("nationality", e.target.value),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CountryOptions, {}, void 0, false, {
                                                        fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                        lineNumber: 174,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 173,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 171,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "idv-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "idv-label",
                                                    children: [
                                                        "Place of Birth ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "idv-required",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                            lineNumber: 178,
                                                            columnNumber: 65
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 178,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: inputClass("placeOfBirth"),
                                                    value: form.placeOfBirth,
                                                    onChange: (e)=>set("placeOfBirth", e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 179,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 177,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                    lineNumber: 170,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "idv-actions",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "idv-btn idv-btn-primary",
                                        onClick: goNext,
                                        children: "Next →"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/IDVerificationModal.jsx",
                                        lineNumber: 183,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                    lineNumber: 182,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, "step0", true, {
                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                            lineNumber: 146,
                            columnNumber: 15
                        }, this),
                        step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "idv-step",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "step-icon",
                                            children: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 191,
                                            columnNumber: 21
                                        }, this),
                                        " Contact Details"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                    lineNumber: 191,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "idv-row",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "idv-col",
                                        style: {
                                            flex: "1 1 100%"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "idv-label",
                                                children: [
                                                    "Current Address ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "idv-required",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                        lineNumber: 194,
                                                        columnNumber: 66
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                lineNumber: 194,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: inputClass("currentAddress"),
                                                value: form.currentAddress,
                                                onChange: (e)=>set("currentAddress", e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                lineNumber: 195,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/IDVerificationModal.jsx",
                                        lineNumber: 193,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                    lineNumber: 192,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "idv-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "idv-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "idv-label",
                                                    children: [
                                                        "Date you moved in ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "idv-required",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                            lineNumber: 200,
                                                            columnNumber: 68
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 200,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    className: inputClass("moveInDate"),
                                                    value: form.moveInDate,
                                                    onChange: (e)=>set("moveInDate", e.target.value),
                                                    max: new Date().toISOString().split("T")[0]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 201,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 199,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "idv-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "idv-label",
                                                    children: "Previous Address(es) in last 12 months"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 204,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "idv-input",
                                                    value: form.previousAddress,
                                                    onChange: (e)=>set("previousAddress", e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 205,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 203,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                    lineNumber: 198,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "idv-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "idv-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "idv-label",
                                                    children: [
                                                        "Email ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "idv-required",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                            lineNumber: 210,
                                                            columnNumber: 56
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 210,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    className: inputClass("email"),
                                                    value: form.email,
                                                    onChange: (e)=>set("email", e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 211,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 209,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "idv-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "idv-label",
                                                    children: [
                                                        "Phone ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "idv-required",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                            lineNumber: 214,
                                                            columnNumber: 56
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 214,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: inputClass("phone"),
                                                    value: form.phone,
                                                    onChange: (e)=>set("phone", e.target.value),
                                                    placeholder: "e.g. 07911123456"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 215,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 213,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                    lineNumber: 208,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "idv-actions",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "idv-btn idv-btn-secondary",
                                            onClick: goPrev,
                                            children: "← Back"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 219,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "idv-btn idv-btn-primary",
                                            onClick: goNext,
                                            children: "Next →"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 220,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                    lineNumber: 218,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, "step1", true, {
                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                            lineNumber: 190,
                            columnNumber: 15
                        }, this),
                        step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "idv-step",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "step-icon",
                                            children: "3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 228,
                                            columnNumber: 21
                                        }, this),
                                        " Role in the Company"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                    lineNumber: 228,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: `idv-checkbox-label${errors.isDirector ? " error" : ""}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: form.isDirector,
                                            onChange: (e)=>set("isDirector", e.target.checked)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 230,
                                            columnNumber: 19
                                        }, this),
                                        "I am a Director"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                    lineNumber: 229,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: `idv-checkbox-label${errors.isPSC ? " error" : ""}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: form.isPSC,
                                            onChange: (e)=>set("isPSC", e.target.checked)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 234,
                                            columnNumber: 19
                                        }, this),
                                        "I am a Person with Significant Control (PSC)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                    lineNumber: 233,
                                    columnNumber: 17
                                }, this),
                                (errors.isDirector || errors.isPSC) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: "#ef4444",
                                        fontSize: 13,
                                        marginTop: 4
                                    },
                                    children: "Please select at least one role."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                    lineNumber: 238,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "idv-actions",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "idv-btn idv-btn-secondary",
                                            onClick: goPrev,
                                            children: "← Back"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 241,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "idv-btn idv-btn-primary",
                                            onClick: goNext,
                                            children: "Next →"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 242,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                    lineNumber: 240,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, "step2", true, {
                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                            lineNumber: 227,
                            columnNumber: 15
                        }, this),
                        step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "idv-step",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "step-icon",
                                            children: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 250,
                                            columnNumber: 21
                                        }, this),
                                        " Identity Documents"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                    lineNumber: 250,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "idv-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "idv-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "idv-label",
                                                    children: [
                                                        "ID Document ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "idv-required",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                            lineNumber: 253,
                                                            columnNumber: 62
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 253,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    className: inputClass("idDocument"),
                                                    accept: ".pdf,.doc,.docx,.jpg,.jpeg,.png",
                                                    onChange: (e)=>setFile("idDocument", e.target.files)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 254,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 252,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "idv-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "idv-label",
                                                    children: [
                                                        "Address Document ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "idv-required",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                            lineNumber: 257,
                                                            columnNumber: 67
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 257,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    className: inputClass("addressDocument"),
                                                    accept: ".pdf,.doc,.docx,.jpg,.jpeg,.png",
                                                    onChange: (e)=>setFile("addressDocument", e.target.files)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 258,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 256,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                    lineNumber: 251,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "idv-row",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "idv-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "idv-label",
                                                children: [
                                                    "Are you an Overseas Director and PSC? ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "idv-required",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                        lineNumber: 263,
                                                        columnNumber: 88
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                lineNumber: 263,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: selectClass("overseasSelect"),
                                                value: form.overseasSelect,
                                                onChange: (e)=>set("overseasSelect", e.target.value),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "-- Select --"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                        lineNumber: 265,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "yes",
                                                        children: "Yes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                        lineNumber: 266,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "no",
                                                        children: "No"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                        lineNumber: 267,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                lineNumber: 264,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/IDVerificationModal.jsx",
                                        lineNumber: 262,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                    lineNumber: 261,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "idv-actions",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "idv-btn idv-btn-secondary",
                                            onClick: goPrev,
                                            children: "← Back"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 272,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "idv-btn idv-btn-primary",
                                            onClick: goNext,
                                            children: "Next →"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 273,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                    lineNumber: 271,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, "step3", true, {
                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                            lineNumber: 249,
                            columnNumber: 15
                        }, this),
                        step === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "idv-step",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "step-icon",
                                            children: "5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 281,
                                            columnNumber: 21
                                        }, this),
                                        " Additional (Overseas)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                    lineNumber: 281,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "idv-label",
                                    children: [
                                        "Overseas Supporting Docs ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "idv-required",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 282,
                                            columnNumber: 71
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                    lineNumber: 282,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "file",
                                    className: inputClass("overseasDoc"),
                                    accept: ".pdf,.doc,.docx,.jpg,.jpeg,.png",
                                    onChange: (e)=>setFile("overseasDoc", e.target.files)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                    lineNumber: 283,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "idv-note",
                                    children: "An additional fee of £10 + VAT will apply for overseas verification."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                    lineNumber: 284,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "idv-actions",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "idv-btn idv-btn-secondary",
                                            onClick: goPrev,
                                            children: "← Back"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 286,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "idv-btn idv-btn-primary",
                                            onClick: goNext,
                                            children: "Next →"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 287,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                    lineNumber: 285,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, "step4", true, {
                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                            lineNumber: 280,
                            columnNumber: 15
                        }, this),
                        step === 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "idv-step",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "step-icon",
                                            children: isOverseas ? "6" : "5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 295,
                                            columnNumber: 21
                                        }, this),
                                        " Privacy & Consent"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                    lineNumber: 295,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: 14,
                                        color: "#374151",
                                        lineHeight: 1.6,
                                        marginBottom: 12
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "You are declaring that all documents and information provided by you are true and correct."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 297,
                                            columnNumber: 19
                                        }, this),
                                        " You consent to the use and storage of your personal data and for Taxaccolega Chartered Accountants to act as Authorised Corporate Service Provider (ACSP) on your behalf."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                    lineNumber: 296,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "idv-checkbox-label",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: form.agree,
                                            onChange: (e)=>set("agree", e.target.checked)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 300,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "I agree to Terms ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "idv-required",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 302,
                                                    columnNumber: 38
                                                }, this),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "idv-terms-toggle",
                                                    onClick: ()=>setTermsVisible(!termsVisible),
                                                    children: "(see T&Cs)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 304,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 301,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                    lineNumber: 299,
                                    columnNumber: 17
                                }, this),
                                errors.agree && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: "#ef4444",
                                        fontSize: 13
                                    },
                                    children: "You must agree to the terms before continuing."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                    lineNumber: 309,
                                    columnNumber: 34
                                }, this),
                                termsVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "idv-terms-box",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "1. Purpose of this Agreement"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 313,
                                                    columnNumber: 24
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 313,
                                                    columnNumber: 69
                                                }, this),
                                                "1.1 These Terms apply to the collection and processing of personal data and identity documents required under the Economic Crime and Corporate Transparency Act 2023.",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 314,
                                                    columnNumber: 188
                                                }, this),
                                                "1.2 By submitting your details, you authorise Taxaccolega Chartered Accountants (ACSP) to process your information for identity verification with Companies House."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 313,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "2. Client Responsibilities"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 316,
                                                    columnNumber: 24
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 316,
                                                    columnNumber: 67
                                                }, this),
                                                "2.1 You confirm that all information and documents you provide are true, accurate, complete, and current.",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 317,
                                                    columnNumber: 128
                                                }, this),
                                                "2.2 You accept full responsibility for any false or misleading information supplied.",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 318,
                                                    columnNumber: 107
                                                }, this),
                                                "2.3 You must notify us promptly of any changes affecting the verification process."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 316,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "3. Our Role & Limitation"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 320,
                                                    columnNumber: 24
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 320,
                                                    columnNumber: 69
                                                }, this),
                                                "3.1 We act solely as an intermediary in submitting your information to Companies House.",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 321,
                                                    columnNumber: 110
                                                }, this),
                                                "3.2 We do not guarantee the acceptance, speed, or outcome of any identity verification.",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 322,
                                                    columnNumber: 110
                                                }, this),
                                                "3.3 We shall not be liable for any loss arising from inaccurate information, Companies House delays, or rejection of verification."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 320,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "4. Data Protection"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 324,
                                                    columnNumber: 24
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 324,
                                                    columnNumber: 59
                                                }, this),
                                                "4.1 We process your data in accordance with UK GDPR and Data Protection Act 2018.",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 325,
                                                    columnNumber: 104
                                                }, this),
                                                "4.2 Your data is used solely for identity verification and related compliance.",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 326,
                                                    columnNumber: 101
                                                }, this),
                                                "4.3 We retain your information only as long as required by law."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 324,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "5. Client Consent"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 328,
                                                    columnNumber: 24
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 328,
                                                    columnNumber: 58
                                                }, this),
                                                "By ticking the consent box, you confirm you have read, understood, and agreed to these Terms & Conditions."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 328,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "6. Governing Law"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 330,
                                                    columnNumber: 24
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 330,
                                                    columnNumber: 57
                                                }, this),
                                                "These Terms are governed by the laws of England and Wales."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 330,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                    lineNumber: 312,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "idv-actions",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "idv-btn idv-btn-secondary",
                                            onClick: goPrev,
                                            children: "← Back"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 336,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "idv-btn idv-btn-primary",
                                            onClick: goNext,
                                            children: "Next →"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 337,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                    lineNumber: 335,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, "step5", true, {
                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                            lineNumber: 294,
                            columnNumber: 15
                        }, this),
                        step === 6 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "idv-step",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "step-icon",
                                            children: isOverseas ? "7" : "6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 345,
                                            columnNumber: 21
                                        }, this),
                                        " Checkout"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                    lineNumber: 345,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "idv-price-box",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "idv-price-regular",
                                            children: [
                                                "Regular Price: £",
                                                pricing.regular.toFixed(2),
                                                " + VAT"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 348,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "idv-price-sale",
                                            children: [
                                                "£",
                                                pricing.base.toFixed(2),
                                                " + VAT"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 349,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "idv-price-details",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "Net Amount: £",
                                                        pricing.base.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 351,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "VAT @ 20%: £",
                                                        pricing.vat.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 352,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "total",
                                                    children: [
                                                        "Total: £",
                                                        pricing.total.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 353,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 350,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                    lineNumber: 347,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "idv-actions",
                                    style: {
                                        justifyContent: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "idv-btn idv-btn-secondary",
                                            onClick: goPrev,
                                            children: "← Back"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 358,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "idv-btn idv-btn-pay",
                                            onClick: ()=>{
                                                setShowStripe(true);
                                                setShowPaypal(false);
                                            },
                                            children: "💳 Pay Via Stripe"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 359,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "idv-btn idv-btn-pay",
                                            onClick: ()=>{
                                                setShowPaypal(true);
                                                setShowStripe(false);
                                            },
                                            children: "🅿 Pay Via PayPal"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 362,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                    lineNumber: 357,
                                    columnNumber: 17
                                }, this),
                                showStripe && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "idv-stripe-form",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            children: "Secure Payment"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 370,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "idv-row",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "idv-col",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "idv-label",
                                                        children: "Full Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                        lineNumber: 373,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "idv-input",
                                                        value: form.billingName,
                                                        onChange: (e)=>set("billingName", e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                        lineNumber: 374,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                lineNumber: 372,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 371,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "idv-row",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "idv-col",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "idv-label",
                                                        children: "Address"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                        lineNumber: 379,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "idv-input",
                                                        value: form.billingAddress,
                                                        onChange: (e)=>set("billingAddress", e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                        lineNumber: 380,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                lineNumber: 378,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 377,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "idv-row",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "idv-col",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "idv-label",
                                                            children: "City"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                            lineNumber: 385,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            className: "idv-input",
                                                            value: form.billingCity,
                                                            onChange: (e)=>set("billingCity", e.target.value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                            lineNumber: 386,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 384,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "idv-col",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "idv-label",
                                                            children: "Postcode"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                            lineNumber: 389,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            className: "idv-input",
                                                            value: form.billingPostcode,
                                                            onChange: (e)=>set("billingPostcode", e.target.value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                            lineNumber: 390,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                    lineNumber: 388,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 383,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "idv-row",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "idv-col",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "idv-label",
                                                        children: "Country"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                        lineNumber: 395,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "idv-select",
                                                        value: form.billingCountry,
                                                        onChange: (e)=>set("billingCountry", e.target.value),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CountryOptions, {}, void 0, false, {
                                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                            lineNumber: 397,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                        lineNumber: 396,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                lineNumber: 394,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 393,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "idv-label",
                                            children: "Card Details"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 401,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            id: "idv-card-element",
                                            style: {
                                                padding: 12,
                                                border: "1.5px solid #d1d5db",
                                                borderRadius: 8,
                                                background: "#fff",
                                                marginBottom: 16
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: "#9ca3af",
                                                    fontSize: 13
                                                },
                                                children: "Stripe card element will mount here"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                lineNumber: 403,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 402,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            id: "idv-card-errors",
                                            role: "alert"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 405,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "idv-btn idv-btn-primary",
                                            style: {
                                                width: "100%"
                                            },
                                            children: [
                                                "Pay £",
                                                pricing.total.toFixed(2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 406,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                    lineNumber: 369,
                                    columnNumber: 19
                                }, this),
                                showPaypal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "idv-stripe-form",
                                    style: {
                                        textAlign: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            children: "PayPal Checkout"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 415,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            id: "idv-paypal-button-container",
                                            style: {
                                                minHeight: 50
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: "#9ca3af",
                                                    fontSize: 13,
                                                    padding: 16
                                                },
                                                children: "PayPal button will render here"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/IDVerificationModal.jsx",
                                                lineNumber: 417,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                                            lineNumber: 416,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                                    lineNumber: 414,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, "step6", true, {
                            fileName: "[project]/src/components/IDVerificationModal.jsx",
                            lineNumber: 344,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/IDVerificationModal.jsx",
                    lineNumber: 135,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/IDVerificationModal.jsx",
                lineNumber: 134,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(IDVerificationModal, "dxO2jWsGcqsg+QHnG1R2QydaUHY=");
_c1 = IDVerificationModal;
var _c, _c1;
__turbopack_context__.k.register(_c, "CountryOptions");
__turbopack_context__.k.register(_c1, "IDVerificationModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Layout/MainLayout.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MainLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$IDVerificationModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/IDVerificationModal.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function MainLayout({ children }) {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col bg-white font-sans text-gray-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "border-b border-gray-100 sticky top-0 bg-white z-50 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between h-16 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/",
                                        className: "flex items-center gap-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl font-extrabold tracking-tight",
                                            style: {
                                                color: '#1d3c45'
                                            },
                                            children: [
                                                "Taxac",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: '#d2601a'
                                                    },
                                                    children: "colega"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                                    lineNumber: 19,
                                                    columnNumber: 24
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                            lineNumber: 18,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                        lineNumber: 17,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                    lineNumber: 16,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden md:flex items-center space-x-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/",
                                            className: "text-gray-600 hover:text-orange-600 font-medium transition-colors",
                                            children: "Home"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                            lineNumber: 26,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/about-us",
                                            className: "text-gray-600 hover:text-orange-600 font-medium transition-colors",
                                            children: "About Us"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                            lineNumber: 27,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/blog",
                                            className: "text-gray-600 hover:text-orange-600 font-medium transition-colors",
                                            children: "Blog"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                            lineNumber: 28,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/contact-us",
                                            className: "text-gray-600 hover:text-orange-600 font-medium transition-colors",
                                            children: "Contact"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                            lineNumber: 29,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/switch-accountant",
                                            className: "text-gray-600 hover:text-orange-600 font-medium transition-colors",
                                            children: "Switch Accountant"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                            lineNumber: 30,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/refer-and-earn",
                                            className: "text-gray-600 hover:text-orange-600 font-medium transition-colors",
                                            children: "Refer & Earn"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                            lineNumber: 31,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/contact-us",
                                            className: "px-4 py-2 text-white font-semibold rounded-full transition-all hover:opacity-90",
                                            style: {
                                                backgroundColor: '#d2601a'
                                            },
                                            children: "Get a Quote"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                            lineNumber: 32,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:hidden flex items-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsOpen(!isOpen),
                                        className: "text-gray-600 hover:text-orange-600 focus:outline-none",
                                        "aria-label": "Toggle Menu",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "h-6 w-6",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M6 18L18 6M6 6l12 12"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                                lineNumber: 46,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M4 6h16M4 12h16M4 18h16"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                                lineNumber: 48,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                            lineNumber: 44,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Layout/MainLayout.jsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Layout/MainLayout.jsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-4 space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/",
                                className: "block text-gray-700 hover:text-orange-600 font-medium py-1",
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/about-us",
                                className: "block text-gray-700 hover:text-orange-600 font-medium py-1",
                                children: "About Us"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/blog",
                                className: "block text-gray-700 hover:text-orange-600 font-medium py-1",
                                children: "Blog"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/contact-us",
                                className: "block text-gray-700 hover:text-orange-600 font-medium py-1",
                                children: "Contact"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/switch-accountant",
                                className: "block text-gray-700 hover:text-orange-600 font-medium py-1",
                                children: "Switch Accountant"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/refer-and-earn",
                                className: "block text-gray-700 hover:text-orange-600 font-medium py-1",
                                children: "Refer & Earn"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-2 border-t border-gray-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/contact-us",
                                    className: "block text-center w-full py-2 text-white font-semibold rounded-full",
                                    style: {
                                        backgroundColor: '#d2601a'
                                    },
                                    children: "Get a Quote"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Layout/MainLayout.jsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Layout/MainLayout.jsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-grow",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/Layout/MainLayout.jsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "border-t border-gray-100 bg-gray-50 py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-4 gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xl font-bold tracking-tight",
                                            style: {
                                                color: '#1d3c45'
                                            },
                                            children: [
                                                "Taxac",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: '#d2601a'
                                                    },
                                                    children: "colega"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                                    lineNumber: 85,
                                                    columnNumber: 22
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500",
                                            children: "Chartered Accountants and Registered Tax Advisors. Delivering peace of mind and tailored financial services across London and the UK."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-semibold tracking-wider uppercase mb-4",
                                            style: {
                                                color: '#1d3c45'
                                            },
                                            children: "Core Services"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2 text-sm text-gray-600",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "/accounts/hmrc-self-assessment-tax-returns-accountant",
                                                        className: "hover:text-orange-600 transition-colors",
                                                        children: "Self Assessment"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                                        lineNumber: 94,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                                    lineNumber: 94,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "/accounts/payroll-services",
                                                        className: "hover:text-orange-600 transition-colors",
                                                        children: "Payroll Outsourcing"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                                        lineNumber: 95,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                                    lineNumber: 95,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "/taxation/company-tax-return-accountants",
                                                        className: "hover:text-orange-600 transition-colors",
                                                        children: "Corporation Tax"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                                        lineNumber: 96,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                                    lineNumber: 96,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "/taxation/vat-accountants",
                                                        className: "hover:text-orange-600 transition-colors",
                                                        children: "VAT Returns"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                                        lineNumber: 97,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                                    lineNumber: 97,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-semibold tracking-wider uppercase mb-4",
                                            style: {
                                                color: '#1d3c45'
                                            },
                                            children: "Quick Links"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2 text-sm text-gray-600",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "/about-us",
                                                        className: "hover:text-orange-600 transition-colors",
                                                        children: "About Our Team"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                                        lineNumber: 103,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                                    lineNumber: 103,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "/blog",
                                                        className: "hover:text-orange-600 transition-colors",
                                                        children: "Blogs & News"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                                        lineNumber: 104,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                                    lineNumber: 104,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "/privacy-policy",
                                                        className: "hover:text-orange-600 transition-colors",
                                                        children: "Privacy Policy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                                        lineNumber: 105,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                                    lineNumber: 105,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "/refer-and-earn",
                                                        className: "hover:text-orange-600 transition-colors",
                                                        children: "Refer and Earn"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                                        lineNumber: 106,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                                    lineNumber: 106,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-semibold tracking-wider uppercase mb-4",
                                            style: {
                                                color: '#1d3c45'
                                            },
                                            children: "Contact Details"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                            lineNumber: 110,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Phone:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                                    lineNumber: 112,
                                                    columnNumber: 17
                                                }, this),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "tel:02081270728",
                                                    className: "hover:text-orange-600 transition-colors",
                                                    children: "020 8127 0728"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                                    lineNumber: 112,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Address:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                                    lineNumber: 115,
                                                    columnNumber: 17
                                                }, this),
                                                " London, United Kingdom"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Layout/MainLayout.jsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t border-gray-200 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500",
                                    children: [
                                        "© ",
                                        new Date().getFullYear(),
                                        " Taxaccolega. All rights reserved. Registered in England & Wales."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex space-x-4 mt-4 sm:mt-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-500",
                                        children: "Professional Excellence"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Layout/MainLayout.jsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Layout/MainLayout.jsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Layout/MainLayout.jsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Layout/MainLayout.jsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$IDVerificationModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/Layout/MainLayout.jsx",
                lineNumber: 131,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Layout/MainLayout.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(MainLayout, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = MainLayout;
var _c;
__turbopack_context__.k.register(_c, "MainLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/react-pages/DynamicWpPage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DynamicWpPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-4ZMWKKQ3.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const SPECIAL_WORDS = {
    'ir35': 'IR35',
    'vat': 'VAT',
    'ltd': 'Ltd',
    'spvs': 'SPVs',
    'emi': 'EMI',
    'hmrc': 'HMRC',
    'saas': 'SaaS'
};
function humanize(segment) {
    return segment.split('-').map((word)=>{
        const lower = word.toLowerCase();
        if (SPECIAL_WORDS[lower]) {
            return SPECIAL_WORDS[lower];
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}
function DynamicWpPage() {
    _s();
    const location = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocation"])();
    const path = location.pathname;
    const segments = path.split('/').filter(Boolean);
    const lastSegment = segments[segments.length - 1] || 'Services';
    const humanTitle = humanize(lastSegment);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 text-sm text-gray-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/",
                        className: "hover:text-orange-600",
                        children: "Home"
                    }, void 0, false, {
                        fileName: "[project]/src/react-pages/DynamicWpPage.jsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    " > ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-900",
                        children: humanTitle
                    }, void 0, false, {
                        fileName: "[project]/src/react-pages/DynamicWpPage.jsx",
                        lineNumber: 39,
                        columnNumber: 69
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/react-pages/DynamicWpPage.jsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2 space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold uppercase tracking-wider text-orange-600",
                                        children: "Taxaccolega Advisory"
                                    }, void 0, false, {
                                        fileName: "[project]/src/react-pages/DynamicWpPage.jsx",
                                        lineNumber: 46,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl font-extrabold text-[#1d3c45] mt-2 mb-6 tracking-tight leading-tight",
                                        children: humanTitle
                                    }, void 0, false, {
                                        fileName: "[project]/src/react-pages/DynamicWpPage.jsx",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg text-gray-600 leading-relaxed font-normal mb-6",
                                        children: "Empowering your financial journey with reliable corporate and personal tax solutions. Our specialized chartered accountants ensure seamless compliance with HMRC guidelines."
                                    }, void 0, false, {
                                        fileName: "[project]/src/react-pages/DynamicWpPage.jsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/react-pages/DynamicWpPage.jsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-gray-100 pt-8 space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-[#1d3c45]",
                                        children: "How We Assist"
                                    }, void 0, false, {
                                        fileName: "[project]/src/react-pages/DynamicWpPage.jsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 leading-relaxed",
                                        children: "Managing complex regulations requires rigorous organization. At Taxaccolega, we perform dynamic risk assessments, prepare all filings with absolute precision, and actively monitor expenditure thresholds."
                                    }, void 0, false, {
                                        fileName: "[project]/src/react-pages/DynamicWpPage.jsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "list-disc pl-5 space-y-2 text-gray-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Meticulous documentation and records keeping."
                                            }, void 0, false, {
                                                fileName: "[project]/src/react-pages/DynamicWpPage.jsx",
                                                lineNumber: 61,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Year-round deadline tracking to avoid penalties."
                                            }, void 0, false, {
                                                fileName: "[project]/src/react-pages/DynamicWpPage.jsx",
                                                lineNumber: 62,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Tailored tax-planning and structural optimization strategies."
                                            }, void 0, false, {
                                                fileName: "[project]/src/react-pages/DynamicWpPage.jsx",
                                                lineNumber: 63,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/react-pages/DynamicWpPage.jsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/react-pages/DynamicWpPage.jsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-orange-50/50 p-6 rounded-2xl border border-orange-100/50 flex flex-col md:flex-row items-center justify-between gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-bold text-[#1d3c45]",
                                                children: "Professional Consultation"
                                            }, void 0, false, {
                                                fileName: "[project]/src/react-pages/DynamicWpPage.jsx",
                                                lineNumber: 69,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500",
                                                children: [
                                                    "Discuss ",
                                                    humanTitle,
                                                    " requirements with a senior certified advisor."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/react-pages/DynamicWpPage.jsx",
                                                lineNumber: 70,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/react-pages/DynamicWpPage.jsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/contact-us",
                                        className: "px-6 py-3 text-white font-bold rounded-xl whitespace-nowrap text-sm",
                                        style: {
                                            backgroundColor: '#d2601a'
                                        },
                                        children: "Speak to our Team"
                                    }, void 0, false, {
                                        fileName: "[project]/src/react-pages/DynamicWpPage.jsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/react-pages/DynamicWpPage.jsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/react-pages/DynamicWpPage.jsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white border border-gray-100 rounded-2xl p-6 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-[#1d3c45] mb-4",
                                        children: "Why Choose Us?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/react-pages/DynamicWpPage.jsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3 text-sm text-gray-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-green-500",
                                                        children: "✔"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/react-pages/DynamicWpPage.jsx",
                                                        lineNumber: 85,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Highly Rated Chartered Accountants"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/react-pages/DynamicWpPage.jsx",
                                                        lineNumber: 86,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/react-pages/DynamicWpPage.jsx",
                                                lineNumber: 84,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-green-500",
                                                        children: "✔"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/react-pages/DynamicWpPage.jsx",
                                                        lineNumber: 89,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Proactive, Eye-Safe Digital Record-keeping"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/react-pages/DynamicWpPage.jsx",
                                                        lineNumber: 90,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/react-pages/DynamicWpPage.jsx",
                                                lineNumber: 88,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-green-500",
                                                        children: "✔"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/react-pages/DynamicWpPage.jsx",
                                                        lineNumber: 93,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Compliant with modern UK HMRC guidelines"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/react-pages/DynamicWpPage.jsx",
                                                        lineNumber: 94,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/react-pages/DynamicWpPage.jsx",
                                                lineNumber: 92,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/react-pages/DynamicWpPage.jsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/react-pages/DynamicWpPage.jsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#1d3c45] text-white rounded-2xl p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold mb-3",
                                        children: "Instant Help"
                                    }, void 0, false, {
                                        fileName: "[project]/src/react-pages/DynamicWpPage.jsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-300 text-sm mb-4 leading-relaxed",
                                        children: "Speak directly with an onboarding expert to receive immediate assistance."
                                    }, void 0, false, {
                                        fileName: "[project]/src/react-pages/DynamicWpPage.jsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2 text-sm font-semibold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "📞 Phone: 020 8127 0728"
                                            }, void 0, false, {
                                                fileName: "[project]/src/react-pages/DynamicWpPage.jsx",
                                                lineNumber: 106,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "💬 WhatsApp: 074 7117 0484"
                                            }, void 0, false, {
                                                fileName: "[project]/src/react-pages/DynamicWpPage.jsx",
                                                lineNumber: 107,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/react-pages/DynamicWpPage.jsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/react-pages/DynamicWpPage.jsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/react-pages/DynamicWpPage.jsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/react-pages/DynamicWpPage.jsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/react-pages/DynamicWpPage.jsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(DynamicWpPage, "pkHmaVRPskBaU4tMJuJJpV42k1I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocation"]
    ];
});
_c = DynamicWpPage;
var _c;
__turbopack_context__.k.register(_c, "DynamicWpPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/App.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-4ZMWKKQ3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$Home$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/Home.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$AboutUs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/AboutUs.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$Blog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/Blog.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$ContactUs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/ContactUs.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$SwitchAccountant$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/SwitchAccountant.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$ReferAndEarn$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/ReferAndEarn.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$Awards$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/Awards.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$ScheduleCall$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/ScheduleCall.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$Taxation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/Taxation.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$Accounts$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/Accounts.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$Legal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/Legal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$CompanyFormation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/CompanyFormation.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$RegisteredAddress$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/RegisteredAddress.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$CompanySecretarial$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/CompanySecretarial.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$EmploymentAgreement$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/EmploymentAgreement.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$ShareTransfer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/ShareTransfer.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$Software$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/Software.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$Banks$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/Banks.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$BookkeepingServices$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/BookkeepingServices.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$PayrollServices$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/PayrollServices.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$SelfAssessment$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/SelfAssessment.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$Pensions$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/Pensions.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$FinancialForecasting$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/FinancialForecasting.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$IndustryPage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/IndustryPage.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$PackagePage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/PackagePage.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$TaxationSubPage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/TaxationSubPage.jsx [app-client] (ecmascript)");
// New Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$AnnualAccounts$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/AnnualAccounts.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$StatutoryAccounts$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/StatutoryAccounts.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$ManagementAccounts$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/ManagementAccounts.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$CashFlowForecasting$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/CashFlowForecasting.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$SoleTraderPackage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/SoleTraderPackage.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$LtdCompanyPackage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/LtdCompanyPackage.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$ContractorLtdPackage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/ContractorLtdPackage.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$LandlordsPackage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/LandlordsPackage.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$SpvsLtdPackage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/SpvsLtdPackage.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$CharitiesPackage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/CharitiesPackage.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$ReferAFriend$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/ReferAFriend.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$PrivacyPolicy$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/PrivacyPolicy.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$CompanyTaxReturn$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/CompanyTaxReturn.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$VatAccountants$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/VatAccountants.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$InheritanceTaxPlanning$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/InheritanceTaxPlanning.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$EmiSchemes$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/EmiSchemes.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$LetPropertyCampaign$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/LetPropertyCampaign.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$WorldwideDisclosureFacility$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/WorldwideDisclosureFacility.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$CryptocurrencyTax$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/CryptocurrencyTax.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$PersonalIncomeTax$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/PersonalIncomeTax.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$ConsolidatedAccounts$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/ConsolidatedAccounts.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$SingleBlog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/SingleBlog.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Layout/MainLayout.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$DynamicWpPage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/react-pages/DynamicWpPage.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$IDVerificationModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/IDVerificationModal.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
;
;
;
;
;
;
const SPECIAL_WORDS = {
    'ir35': 'IR35',
    'vat': 'VAT',
    'ltd': 'Ltd',
    'spvs': 'SPVs',
    'emi': 'EMI',
    'hmrc': 'HMRC',
    'saas': 'SaaS'
};
function humanize(segment) {
    return segment.split('-').map((word)=>{
        const lower = word.toLowerCase();
        if (SPECIAL_WORDS[lower]) {
            return SPECIAL_WORDS[lower];
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}
function TitleUpdater() {
    _s();
    const location = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocation"])();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "TitleUpdater.useEffect": ()=>{
            const path = location.pathname;
            let title = 'Taxaccolega';
            if (path && path !== '/') {
                const segments = path.split('/').filter(Boolean);
                if (segments.length > 0) {
                    const lastSegment = segments[segments.length - 1];
                    const formattedSegment = humanize(lastSegment);
                    title = `${formattedSegment} | Taxaccolega`;
                }
            } else {
                title = 'Taxaccolega | Chartered Accountants & Tax Advisors';
            }
            document.title = title;
        }
    }["TitleUpdater.useEffect"], [
        location
    ]);
    return null;
}
_s(TitleUpdater, "BXcZrDMM76mmm4zA8/QV5UbMNXE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocation"]
    ];
});
_c = TitleUpdater;
function App() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrowserRouter"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TitleUpdater, {}, void 0, false, {
                fileName: "[project]/src/App.jsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Routes"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$Home$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 110,
                                columnNumber: 46
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 110,
                            columnNumber: 34
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/about-us",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$AboutUs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 111,
                                columnNumber: 54
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 111,
                            columnNumber: 42
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/blog",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$Blog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 112,
                                columnNumber: 50
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 112,
                            columnNumber: 38
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/blog/:slug",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$SingleBlog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 113,
                                columnNumber: 56
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 113,
                            columnNumber: 44
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/contact-us",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$ContactUs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 114,
                                columnNumber: 56
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 114,
                            columnNumber: 44
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/switch-accountant",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$SwitchAccountant$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 115,
                                columnNumber: 63
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 115,
                            columnNumber: 51
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/refer-and-earn",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$ReferAndEarn$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 116,
                                columnNumber: 60
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 116,
                            columnNumber: 48
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/awards-accolades-accreditations",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$Awards$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 117,
                                columnNumber: 77
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 117,
                            columnNumber: 65
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/schedule-a-phone-call-or-video-meeting",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$ScheduleCall$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 118,
                                columnNumber: 84
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 118,
                            columnNumber: 72
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/taxation",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$Taxation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 119,
                                columnNumber: 54
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 119,
                            columnNumber: 42
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/accounts",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$Accounts$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 120,
                                columnNumber: 54
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 120,
                            columnNumber: 42
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/accounts/bookkeeping-services/",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$BookkeepingServices$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 121,
                                columnNumber: 76
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 121,
                            columnNumber: 64
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/accounts/payroll-services",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$PayrollServices$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 122,
                                columnNumber: 71
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 122,
                            columnNumber: 59
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/accounts/hmrc-self-assessment-tax-returns-accountant",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$SelfAssessment$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 123,
                                columnNumber: 98
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 123,
                            columnNumber: 86
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/accounts/auto-enrolment-pension-contributions/",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$Pensions$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 124,
                                columnNumber: 92
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 124,
                            columnNumber: 80
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/accounts/financial-forecasting/",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$FinancialForecasting$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 125,
                                columnNumber: 77
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 125,
                            columnNumber: 65
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/company-formation",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$CompanyFormation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 126,
                                columnNumber: 63
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 126,
                            columnNumber: 51
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/registered-address",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$RegisteredAddress$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 127,
                                columnNumber: 64
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 127,
                            columnNumber: 52
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/company-secretarial",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$CompanySecretarial$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 128,
                                columnNumber: 65
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 128,
                            columnNumber: 53
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/employment-agreement",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$EmploymentAgreement$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 129,
                                columnNumber: 66
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 129,
                            columnNumber: 54
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/share-transfer",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$ShareTransfer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 130,
                                columnNumber: 60
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 130,
                            columnNumber: 48
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/legal",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$Legal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 131,
                                columnNumber: 51
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 131,
                            columnNumber: 39
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/software",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$Software$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 132,
                                columnNumber: 54
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 132,
                            columnNumber: 42
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/banks",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$Banks$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 133,
                                columnNumber: 51
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 133,
                            columnNumber: 39
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/taxation/company-tax-return-accountants",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$CompanyTaxReturn$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 134,
                                columnNumber: 85
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 134,
                            columnNumber: 73
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/taxation/vat-accountants",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$VatAccountants$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 135,
                                columnNumber: 70
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 135,
                            columnNumber: 58
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/taxation/inheritance-tax-planning",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$InheritanceTaxPlanning$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 136,
                                columnNumber: 79
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 136,
                            columnNumber: 67
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/taxation/emi-schemes",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$EmiSchemes$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 137,
                                columnNumber: 66
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 137,
                            columnNumber: 54
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/taxation/let-property-campaign",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$LetPropertyCampaign$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 138,
                                columnNumber: 76
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 138,
                            columnNumber: 64
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/taxation/worldwide-disclosure-facility",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$WorldwideDisclosureFacility$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 139,
                                columnNumber: 84
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 139,
                            columnNumber: 72
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/taxation/cryptocurrency",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$CryptocurrencyTax$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 140,
                                columnNumber: 69
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 140,
                            columnNumber: 57
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/taxation/personal-income-tax-professionals-and-chartered-accountants",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$PersonalIncomeTax$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 141,
                                columnNumber: 114
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 141,
                            columnNumber: 102
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/accounts/annual-accounts",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$AnnualAccounts$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 145,
                                columnNumber: 70
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 145,
                            columnNumber: 58
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/accounts/statutory-accounts",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$StatutoryAccounts$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 146,
                                columnNumber: 73
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 146,
                            columnNumber: 61
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/accounts/management-accounts",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$ManagementAccounts$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 147,
                                columnNumber: 74
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 147,
                            columnNumber: 62
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/accounts/consolidated-accounts",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$ConsolidatedAccounts$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 148,
                                columnNumber: 76
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 148,
                            columnNumber: 64
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/accounts/cash-flow-forecasting",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$CashFlowForecasting$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 149,
                                columnNumber: 76
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 149,
                            columnNumber: 64
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/packages/sole-trader",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$SoleTraderPackage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 152,
                                columnNumber: 66
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 152,
                            columnNumber: 54
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/packages/sole-trader-pricing",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$SoleTraderPackage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 153,
                                columnNumber: 74
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 153,
                            columnNumber: 62
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/packages/ltd-company",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$LtdCompanyPackage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 154,
                                columnNumber: 66
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 154,
                            columnNumber: 54
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/packages/ltd-company-pricing",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$LtdCompanyPackage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 155,
                                columnNumber: 74
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 155,
                            columnNumber: 62
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/packages/contractor-ltd",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$ContractorLtdPackage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 156,
                                columnNumber: 69
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 156,
                            columnNumber: 57
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/packages/contractor-ltd-pricing",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$ContractorLtdPackage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 157,
                                columnNumber: 77
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 157,
                            columnNumber: 65
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/packages/landlords",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$LandlordsPackage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 158,
                                columnNumber: 64
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 158,
                            columnNumber: 52
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/packages/landlords-3",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$LandlordsPackage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 159,
                                columnNumber: 66
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 159,
                            columnNumber: 54
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/packages/spvs-ltd",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$SpvsLtdPackage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 160,
                                columnNumber: 63
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 160,
                            columnNumber: 51
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/packages/spvs-ltd-pricing",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$SpvsLtdPackage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 161,
                                columnNumber: 71
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 161,
                            columnNumber: 59
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/packages/charities",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$CharitiesPackage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 162,
                                columnNumber: 64
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 162,
                            columnNumber: 52
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/packages/charities-pricing",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$CharitiesPackage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 163,
                                columnNumber: 72
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 163,
                            columnNumber: 60
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/refer-a-friend",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$ReferAFriend$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 166,
                                columnNumber: 60
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 166,
                            columnNumber: 48
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/privacy-policy",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$PrivacyPolicy$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 167,
                                columnNumber: 60
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 167,
                            columnNumber: 48
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/industries/:slug",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$IndustryPage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 170,
                                columnNumber: 62
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 170,
                            columnNumber: 50
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/charities",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$IndustryPage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                slug: "charities"
                            }, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 171,
                                columnNumber: 55
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 171,
                            columnNumber: 43
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/packages/:slug",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$PackagePage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 174,
                                columnNumber: 60
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 174,
                            columnNumber: 48
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "/taxation/:slug",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$TaxationSubPage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 177,
                                columnNumber: 60
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 177,
                            columnNumber: 48
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$4ZMWKKQ3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                        path: "*",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$MainLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$react$2d$pages$2f$DynamicWpPage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/App.jsx",
                                lineNumber: 180,
                                columnNumber: 46
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/App.jsx",
                            lineNumber: 180,
                            columnNumber: 34
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/App.jsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/App.jsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$IDVerificationModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/App.jsx",
                lineNumber: 182,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/App.jsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_c1 = App;
const __TURBOPACK__default__export__ = App;
var _c, _c1;
__turbopack_context__.k.register(_c, "TitleUpdater");
__turbopack_context__.k.register(_c1, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/App.jsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/App.jsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_1h_he-e._.js.map