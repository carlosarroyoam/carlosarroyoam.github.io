(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{220:function(e,t,M){var map={"./desktop.svg":221,"./mobile.svg":222,"./server.svg":223};function y(e){var t=N(e);return M(t)}function N(e){if(!M.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}y.keys=function(){return Object.keys(map)},y.resolve=N,e.exports=y,y.id=220},221:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMy4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDU3NiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU3NiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01MjgsMEg0OEMyMS41LDAsMCwyMS41LDAsNDh2MzIwYzAsMjYuNSwyMS41LDQ4LDQ4LDQ4aDE5MmwtMTYsNDhoLTcyYy0xMy4zLDAtMjQsMTAuNy0yNCwyNHMxMC43LDI0LDI0LDI0DQoJaDI3MmMxMy4zLDAsMjQtMTAuNywyNC0yNHMtMTAuNy0yNC0yNC0yNGgtNzJsLTE2LTQ4aDE5MmMyNi41LDAsNDgtMjEuNSw0OC00OFY0OEM1NzYsMjEuNSw1NTQuNSwwLDUyOCwweiBNNTEyLDM1Mkg2NFY2NGg0NDhWMzUyeg0KCSIvPg0KPC9zdmc+DQo="},222:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMy4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDMyMCA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyMCA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNzIsMEg0OEMyMS41LDAsMCwyMS41LDAsNDh2NDE2YzAsMjYuNSwyMS41LDQ4LDQ4LDQ4aDIyNGMyNi41LDAsNDgtMjEuNSw0OC00OFY0OEMzMjAsMjEuNSwyOTguNSwwLDI3Miwweg0KCSBNMTYwLDQ4MGMtMTcuNywwLTMyLTE0LjMtMzItMzJzMTQuMy0zMiwzMi0zMnMzMiwxNC4zLDMyLDMyUzE3Ny43LDQ4MCwxNjAsNDgweiIvPg0KPC9zdmc+DQo="},223:function(e,t,M){e.exports=M.p+"img/server.f43fdfe.svg"},240:function(e,t,M){"use strict";M.r(t);var y={name:"TechnologiesCard",props:{development_area:{type:Object,required:!0}}},N=M(4),component=Object(N.a)(y,(function(){var e=this,t=e.$createElement,y=e._self._c||t;return y("div",{staticClass:"overflow-hidden rounded shadow hover:shadow-lg bg-surface-secondary"},[y("div",{staticClass:"flex flex-row items-center p-4 bg-primary"},[y("img",{staticClass:"inline-block w-8 h-8",attrs:{src:M(220)("./"+e.development_area.icon),alt:e.development_area.icon_alt}}),e._v(" "),y("h4",{staticClass:"inline-block ml-4 text-base font-semibold tracking-wide text-gray-100 uppercase"},[e._v("\n\t\t\t"+e._s(e.development_area.title)+"\n\t\t")])]),e._v(" "),y("ul",{staticClass:"px-6 py-4"},e._l(e.development_area.technologies,(function(t){return y("li",{key:t},[e._v("\n\t\t\t"+e._s(t)+"\n\t\t")])})),0)])}),[],!1,null,null,null);t.default=component.exports}}]);
//# sourceMappingURL=453785f.js.map