(this["webpackJsonpnew-york-open-data-explorer"]=this["webpackJsonpnew-york-open-data-explorer"]||[]).push([[0],{36:function(e,t,a){},46:function(e,t,a){e.exports=a(90)},53:function(e,t,a){},63:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},88:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(37),l=a.n(r),o=(a(51),a(52),a(53),a(6)),i=a(13),s=a(27),u=a(1),m=(a(63),a(40)),d=a(4),f=a(21),E=a.n(f),p=a(3),v=a(22),b=a(16),h=a(12),O=a.n(h),j="https://api.us.socrata.com/api/catalog/v1?domains=data.cityofnewyork.us&search_context=data.cityofnewyork.us";function g(e){var t,a=arguments;return O.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:100,n.abrupt("return",fetch("".concat(j,"&offset=").concat(e*t,"&limit=").concat(t)).then((function(e){return e.json()})));case 2:case"end":return n.stop()}}))}function C(e){return new Set([].concat(Object(d.a)(e.resource.columns_name.map((function(e){return e.toLocaleLowerCase()}))),Object(d.a)(e.resource.columns_field_name.map((function(e){return e.toLocaleLowerCase()})))))}function y(e,t){var a=C(t),n=new Set(Object(d.a)(e).filter((function(e){return a.has(e)})));return Array.from(n)}function N(e,t){return fetch("https://data.cityofnewyork.us/resource/".concat(e.resource.id,".json?$select=distinct ").concat(t.replace(/ /g,"_"))).then((function(e){return e.json()})).then((function(a){return a.errorCode||a.error?(console.warn("Failed to load unique entries for dataset ",e," column ",t),[]):a.map((function(e){return Object.values(e)[0]}))}))}var _=new v.a("SocrataCache");_.version(1).stores({SocrataCache:"id"});var A=Object(n.createContext)(),w={datasets:[],tagList:[],categories:[],departments:[],columns:[],stateLoaded:!1},k=function(e,t){var a=t.type,n=t.payload;switch(a){case"UPDATE_OPEN_DATASET_MANIFEST":return Object(p.a)({},e,{datasets:n});case"UPDATE_TAGS":return Object(p.a)({},e,{tagList:n});case"UPDATE_CATEGORIES":return Object(p.a)({},e,{categories:n});case"UPDATE_COLUMNS":return Object(p.a)({},e,{columns:n});case"UPDATE_DEPARTMENTS":return Object(p.a)({},e,{departments:n});case"HYDRATE_STATE":return Object(p.a)({},e,{},n);case"SET_LOADED":return Object(p.a)({},e,{stateLoaded:!0});default:return e}},T=function(){return Object(n.useContext)(A)};function S(){var e=T();return Object(u.a)(e,1)[0].stateLoaded}function D(e){var t=T(),a=Object(u.a)(t,1)[0].datasets;return Object(n.useMemo)((function(){return e?function(e,t){var a=C(e);return t.map((function(e){return{dataset:e,joinableColumns:y(a,e)}})).filter((function(t){return t.joinableColumns.length>0&&t.dataset.resource.id!==e.resource.id}))}(e,a):[]}),[e,a])}function L(e){var t=T(),a=Object(u.a)(t,1)[0].datasets;return Object(n.useMemo)((function(){return a.filter((function(t){return e.includes(t.resource.id)}))}),[a,e])}var M=Object(n.createContext)(),x={datasets:[],name:null,cacheLoaded:!1},R=new v.a("CollectionCache");R.version(1).stores({CollectionCache:"id"});var P=function(e,t){var a=t.type,n=t.payload;switch(a){case"ADD_TO_COLLECTION":return Object(p.a)({},e,{datasets:[].concat(Object(d.a)(e.datasets),[n])});case"REMOVE_FROM_COLLECTION":return Object(p.a)({},e,{datasets:e.datasets.filter((function(e){return e!==n}))});case"SET_NAME":return Object(p.a)({},e,{name:n});case"CLEAR_COLLECTION":return Object(p.a)({},e,{datasets:[]});case"HYDRATE_STATE":return Object(p.a)({},e,{},n);default:return e}};function U(){var e=Object(n.useContext)(M),t=Object(u.a)(e,2),a=t[0],c=t[1];return[a,{clearCollection:function(){console.log("clearning"),c({type:"CLEAR_COLLECTION"})},addToCollection:function(e){return c({type:"ADD_TO_COLLECTION",payload:e})},removeFromCollection:function(e){return c({type:"REMOVE_FROM_COLLECTION",payload:e})},setName:function(e){return c({type:"SET_NAME",payload:e})}}]}a(69);function I(e,t){if(t){var a=[],n=t.indices.filter((function(e){return e[1]-e[0]>1})),r=e.split("").map((function(e){return{char:e,highlight:!1}}));n.forEach((function(e){for(var t=e[0];t<e[1]+1;t++)r[t].highlight=!0}));var l=!1,o="";return r.forEach((function(e){var t=e.char,n=e.highlight;l?n?o+=t:(l=!1,a.push(c.a.createElement("span",{className:"hilight"},o)),o=t):n?(l=!0,a.push(c.a.createElement("span",null,o)),o=t):o+=t})),a.push(c.a.createElement("span",{className:l?"hilight":""},o)),a}return e}var F=a(10),Y=a(8),V=function(e){var t=e.permalink;return c.a.createElement("a",{className:"external-link",target:"_blank",rel:"noopener noreferrer",href:t},c.a.createElement("button",{type:"button"},"View on Open Data\xa0",c.a.createElement(F.a,{icon:Y.c})))};function q(e){var t,a=e.dataset,n=e.onAddToCollection,r=e.onRemoveFromCollection,l=e.inCollection,i=e.viewInOpenPortal,s=void 0!==i&&i,u=e.similarity,m=e.matches,d=I(a.resource.name,null===m||void 0===m?void 0:m.find((function(e){return"resource.name"===e.key}))),f=I(a.resource.description,null===m||void 0===m?void 0:m.find((function(e){return"resource.description"===e.key})));return c.a.createElement("div",{className:"dataset",key:a.resource.id},c.a.createElement("div",{className:"dataset-title"},c.a.createElement(o.Link,{className:"title",to:"/dataset/".concat(a.resource.id)},c.a.createElement("h2",null,d)),c.a.createElement("p",null,a.resource.attribution)),u&&c.a.createElement("p",null,"Similarity: ",(100*u).toPrecision(2),"%"),n&&c.a.createElement("button",{className:"collection-button",type:"button",onClick:function(){return l?r(a.resource.id):n(a.resource.id)}},l?"Remove from collection":"Add to collection"),s&&c.a.createElement(V,{permalink:a.permalink}),c.a.createElement("div",{className:"dataset-last-update"},c.a.createElement("p",{className:"header"},"Last Updated"),c.a.createElement("p",null,(t=a.resource.updatedAt,new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})))),c.a.createElement("div",{className:"dataset-description"},f),c.a.createElement("div",{className:"dataset-meta"},c.a.createElement("div",{className:"update-frequency"},c.a.createElement("span",null,"Update frequency:"),"weekly"),c.a.createElement("div",{className:"dataset-tags"},c.a.createElement("span",null,"Tags:"),a.classification.domain_tags.join(", "))))}a(70);function B(e){var t=e.options,a=e.selected,r=e.direction,l=e.onSelected,o=e.onDirection,i=Object(n.useState)(!1),s=Object(u.a)(i,2),m=s[0],d=s[1];return c.a.createElement("div",{className:"sort-menu ".concat(m?"expanded":"")},c.a.createElement("div",{className:"wrapper"},c.a.createElement("span",null,"Sort By:"),c.a.createElement("ul",null,c.a.createElement("li",{onClick:function(){return d(!m)}},a),t.filter((function(e){return e!==a})).map((function(e){return c.a.createElement("li",{onClick:function(){l(e),d(!1)},key:e},e," ")}))),c.a.createElement(F.a,{onClick:function(){return o("asc"===r?"desc":"asc")},icon:"asc"===r?Y.e:Y.d})))}a(71),a(36);var G=function(){return c.a.createElement("div",{className:"dataset-loading"},c.a.createElement("div",{className:"dataset-list"},Object(d.a)(Array(4)).map((function(e,t){return c.a.createElement("div",{key:t,className:"dataset"},c.a.createElement("div",{className:"dataset-title animate"}),c.a.createElement("p",{className:"dataset-description animate"}),c.a.createElement("div",{className:"dataset-meta animate"}))}))))},H=a(41),J=a.n(H);function z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,a=Object(n.useMemo)((function(){return Math.ceil(e.length/t)}),[e,t]),r=Object(n.useState)(0),l=Object(u.a)(r,2),o=l[0],i=l[1];Object(n.useEffect)((function(){i(0)}),[a]);var s=c.a.createElement("nav",null,c.a.createElement(J.a,{previousLabel:"previous",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:a,onPageChange:function(e){var t=e.selected;i(t)},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active",previousClassName:"page-item",nextClassName:"page-item",pageClassName:"page-item"})),m=e.slice(o*t,(o+1)*t);return[m,{pageButtons:s}]}a(75);var K=function(){return c.a.createElement("div",{className:""},c.a.createElement("div",{className:"filter-loading-wrapper"},Object(d.a)(Array(10)).map((function(e,t){return c.a.createElement("li",{key:t,className:"multi-buttons"},c.a.createElement("input",{type:"checkbox",disabled:!0,className:"checkbox"}),c.a.createElement("span",{className:"animate item-name"}),c.a.createElement("span",{className:"animate pill"}))}))))};a(76);function W(e){var t=e.items,a=e.selected,r=e.onChange,l=e.title,o=S(),i=Object(n.useState)(""),s=Object(u.a)(i,2),m=s[0],f=s[1],p=Object(n.useMemo)((function(){return t&&Object.keys(t)}),[t]),v=E()({data:p.map((function(e){return{name:e}})),options:{keys:["name"],shouldSort:!1,findAllMatches:!0,caseSensitive:!1}}),b=v.result,h=v.search;Object(n.useEffect)((function(){return h(m)}),[h,m]);var O=z(Object(n.useMemo)((function(){return null===b||void 0===b?void 0:b.map((function(e){return e.name})).sort((function(e,a){return t[e]<t[a]?1:-1}))}),[b,t]),10),j=Object(u.a)(O,2),g=j[0],C=j[1].pageButtons;return c.a.createElement("div",{className:"mutli-selector"},c.a.createElement("h2",null,l),c.a.createElement("div",{className:"search"},c.a.createElement("input",{disabled:!o,placeholder:"filter",value:m,onChange:function(e){return f(e.target.value)}})),c.a.createElement("ul",{className:"multi-list"},o?g.map((function(e){return c.a.createElement("li",{key:e,onClick:function(){return function(e){var t=a.includes(e)?a.filter((function(t){return t!==e})):[].concat(Object(d.a)(a),[e]);r(t)}(e)},className:"multi-buttons ".concat(a&&a.includes(e)?"selected":"")},c.a.createElement("input",{type:"checkbox",checked:a&&a.includes(e),className:"checkbox"}),c.a.createElement("span",{className:"item-name"},e),c.a.createElement("span",{className:"pill"},t[e]))})):c.a.createElement(K,null)),C,a&&a.length>0&&c.a.createElement("button",{type:"button",onClick:function(){r([])}},"clear"))}var $=Object(n.createContext)(),Q={term:"",tags:[],categories:[],departmerts:[],columns:[],sortVariable:"name",sortOrder:"asc"},X=function(e,t){var a=t.type,n=t.payload;switch(a){case"ADD_TAG":return Object(p.a)({},e,{tags:[].concat(Object(d.a)(e.tags),[n])});case"REMOVE_TAG":return Object(p.a)({},e,{tags:e.tags.filter((function(e){return e!==n}))});case"ADD_CATEGORY":return Object(p.a)({},e,{categories:[].concat(Object(d.a)(e.categories),[n])});case"REMOVE_CATEGORY":return Object(p.a)({},e,{category:e.category.filter((function(e){return e!==n}))});case"ADD_COLUMN":return Object(p.a)({},e,{columns:[].concat(Object(d.a)(e.columns),[n])});case"REMOVE_COLUMN":return Object(p.a)({},e,{columns:e.columns.filter((function(e){return e!==n}))});case"ADD_DEPARTMNET":return Object(p.a)({},e,{departments:[].concat(Object(d.a)(e.departments),[n])});case"REMOVE_DEPARTMENT":return Object(p.a)({},e,{departments:e.departments.filter((function(e){return e!==n}))});case"CLEAR":return Q;default:return e}};function Z(){var e=function(){var e=T();return Object(u.a)(e,1)[0].categories}(),t=function(){var e=T();return Object(u.a)(e,1)[0].tagList}(),a=function(){var e=T();return Object(u.a)(e,1)[0].departments}(),r=function(){var e=T();return Object(u.a)(e,1)[0].columns}(),l=S(),o=Object(n.useState)([]),i=Object(u.a)(o,2),s=i[0],f=i[1],p=Object(n.useState)([]),v=Object(u.a)(p,2),b=v[0],h=v[1],O=Object(n.useState)([]),j=Object(u.a)(O,2),g=j[0],C=j[1],y=Object(n.useState)([]),N=Object(u.a)(y,2),_=N[0],A=N[1],w=Object(n.useState)(""),k=Object(u.a)(w,2),D=k[0],L=k[1],M=Object(n.useState)("Name"),x=Object(u.a)(M,2),R=x[0],P=x[1],I=Object(n.useState)("asc"),F=Object(u.a)(I,2),Y=F[0],V=F[1],H=U(),J=Object(u.a)(H,2),K=J[0],Q=J[1],X=Q.addToCollection,Z=Q.removeFromCollection,ee=function(e){var t=e.tags,a=e.term,c=e.categories,r=e.columns,l=e.departments,o=T(),i=Object(u.a)(o,1)[0].datasets,s=E()({data:i,options:{shouldSort:!0,findAllMatches:!0,includeMatches:!0,keys:["resource.name","resource.description"],caseSensitive:!1}}),m=s.result,f=s.search;return Object(n.useEffect)((function(){f(a)}),[f,a]),Object(n.useMemo)((function(){if(m){var e=m[0]&&m[0].item?m.map((function(e){return e.item})):Object(d.a)(m),a=m&&m[0]&&m[0].item?m.map((function(e){return{id:e.item.resource.id,matches:e.matches}})):[];return t&&t.length>0&&(e=e.filter((function(e){return e.itemclassification.domain_tags.filter((function(e){return t.includes(e)})).length>0}))),c&&c.length>0&&(e=e.filter((function(e){return e.classification.categories.filter((function(e){return c.includes(e)})).length>0}))),r&&r.length>0&&(console.log("filtering with columns ",r),e=e.filter((function(e){return e.resource.columns_name&&e.resource.columns_name.filter((function(e){return r.includes(e)})).length>0}))),l&&l.length>0&&(e=e.filter((function(e){var t;return l.includes(null===(t=e.classification.domain_metadata.find((function(e){return"Dataset-Information_Agency"===e.key})))||void 0===t?void 0:t.value)}))),{datasets:e,matches:a.filter((function(t){return e.find((function(e){return e.resource.id===t.id}))}))}}return i}),[m,t,c,r,l,i])}({tags:s,categories:g,columns:b,term:D,departments:_}),te=ee.datasets,ae=ee.matches,ne=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Object(n.useMemo)((function(){return e.sort((function(e,n){var c=null,r=null;switch(t){case"Name":c=e.resource.name,r=n.resource.name;break;case"Created At":c=e.resource.createdAt,r=n.resource.createdAt;break;case"Updated At":c=e.resource.updatedAt,r=n.resource.updatedAt;break;case"Downloads":c=e.resource.download_count,r=n.resource.download_count;break;case"Views":c=e.resource.page_views.page_views_total,r=n.resource.page_views.page_views_total}return(c<r?1:-1)*(a?1:-1)}))}),[e,t,a])}(te,R,"asc"===Y),ce=Object(n.useContext)($),re=Object(u.a)(ce,2),le=(re[0],re[1],z(ne,5)),oe=Object(u.a)(le,2),ie=oe[0],se=oe[1].pageButtons;return c.a.createElement("div",{className:"home-page"},c.a.createElement("div",{className:"filters"},c.a.createElement("div",{className:"categories"},c.a.createElement(W,{items:e,onChange:C,selected:g,title:"Categories"})),c.a.createElement("div",{className:"departments"},c.a.createElement(W,{items:a,selected:_,onChange:A,title:"Departments"})),c.a.createElement("div",{className:"columns"},c.a.createElement(W,{items:r,selected:b,onChange:h,title:"Columns"})),c.a.createElement("div",{className:"tags"},c.a.createElement(W,{items:t,selected:s,onChange:f,title:"Tags"}))),c.a.createElement("div",{className:"datasets"},c.a.createElement("div",{className:"search"},c.a.createElement(m.DebounceInput,{type:"text",onChange:function(e){return L(e.target.value)},value:D,debounceTimeout:300,placeholder:"Search for dataset"})),c.a.createElement("div",{className:"count-and-sort"},c.a.createElement("p",null,c.a.createElement("span",{className:"bold"},te.length)," datasets"),c.a.createElement(B,{options:["Name","Created At","Updated At","Downloads","Views"],onDirection:function(e){return V(e)},selected:R,direction:Y,onSelected:function(e){return P(e)}})),c.a.createElement("ul",{className:"dataset-list"},l?ie.map((function(e){var t,a;return c.a.createElement(q,{key:null===e||void 0===e?void 0:null===(t=e.resource)||void 0===t?void 0:t.id,dataset:e,inCollection:K.datasets.includes(e.resource.id),onAddToCollection:X,onRemoveFromCollection:Z,matches:null===(a=ae.find((function(t){var a;return t.id===(null===e||void 0===e?void 0:null===(a=e.resource)||void 0===a?void 0:a.id)})))||void 0===a?void 0:a.matches})})):c.a.createElement(G,null)),c.a.createElement("div",null,se)))}var ee=a(42),te=a.n(ee),ae=a(43),ne=a.n(ae);function ce(e){var t=e.html,a=e.className,n=ne.a.sanitize(t);return c.a.createElement("div",{className:a,dangerouslySetInnerHTML:{__html:n}})}var re=a(44);a(78);function le(e){var t=e.rightDataset,a=e.joinCol,r=e.parentUniques,l=Object(n.useState)(!0),i=Object(u.a)(l,2),s=i[0],m=i[1],d=function(e,t){var a=Object(n.useState)(null),c=Object(u.a)(a,2),r=c[0],l=c[1];return Object(n.useEffect)((function(){N(e,t).then((function(a){l({dataset:e.resource.id,column:t,distinct:a})}))}),[e,t]),r}(t,a),f=Object(n.useMemo)((function(){return d&&r?r.filter((function(e){return d.distinct.includes(e)})):[]}),[d,r]),E=U(),p=Object(u.a)(E,2),v=p[0],b=p[1],h=b.addToCollection,O=b.removeFromCollection;return c.a.createElement("div",{className:"join-column"},c.a.createElement("div",{className:"join-column-row"},c.a.createElement("span",{onClick:function(){return m(!s)},onKeyDown:function(e){32===e.keycode&&m(!s)},className:"join-column-name",role:"button",tabIndex:"0"},c.a.createElement(F.a,{icon:s?Y.b:Y.a}),c.a.createElement(F.a,{icon:re.a}),t.resource.name),c.a.createElement("span",null,f?"".concat(f.length," matching ids"):"loading"),c.a.createElement("span",null,c.a.createElement(o.Link,{to:"/dataset/".concat(t.resource.id)},"View dataset")),c.a.createElement("button",{type:"button",onClick:function(){return v.datasets.includes(t.resource.id)?O(t.resource.id):h(t.resource.id)}},v.datasets.includes(t.resource.id)?"Remove dataset from collection":"Add dataset to collection")),!s&&d&&c.a.createElement("div",{className:"join-column-unique"},c.a.createElement("h3",null,"COMMON IDS"),c.a.createElement("ul",null,f.slice(0,10).map((function(e){return c.a.createElement("li",{key:e},c.a.createElement("div",{className:"bar"}),c.a.createElement(F.a,{icon:Y.f}),c.a.createElement("span",null,e))}))),c.a.createElement("div",null,"and ",f.length-10," more")))}a(79);function oe(e){var t=e.column,a=e.joins,r=e.dataset,l=Object(n.useState)([]),o=Object(u.a)(l,2),i=o[0],s=o[1],m=Object(n.useState)(!0),d=Object(u.a)(m,2),f=d[0],E=d[1],p=r.resource.columns_datatype[r.resource.columns_name.indexOf(t)],v=z(a,10),b=Object(u.a)(v,2),h=b[0],O=b[1].pageButtons;return Object(n.useEffect)((function(){a.length>0&&N(r,t).then((function(e){s(e)}))}),[t,r,a]),c.a.createElement("div",{className:"column-suggestions ".concat(f?"collapsed":"")},c.a.createElement("div",{className:"table-row",role:"button",onKeydown:function(e){36===e.keyCode&&E(!f)},onClick:function(){return E(!f)},tabIndex:"0"},c.a.createElement("span",{className:"column-collapse"},c.a.createElement(F.a,{icon:f?Y.b:Y.a})," ",t),c.a.createElement("span",null,p),c.a.createElement("span",null,a.length," datasets also have this column")),!f&&h&&c.a.createElement("div",{className:"columns-suggestions-matches"},c.a.createElement("h3",null,"MATCHING DATSETS"),a&&c.a.createElement("ul",null,h.map((function(e){return c.a.createElement("li",{key:e.dataset.resource.id},c.a.createElement(le,{leftDataset:r,rightDataset:e.dataset,joinCol:t,parentUniques:i}))}))),O))}a(80);function ie(e){var t=e.dataset,a=e.joinColumns,r=t.resource.columns_name,l=Object(n.useCallback)((function(e,t){return r?t.filter((function(t){return t.joinableColumns.includes(e.toLowerCase())})):[]}),[r]),o=Object(n.useMemo)((function(){return a?r.sort((function(e,t){return l(e,a).length<l(t,a).length?1:-1})):[]}),[r,a,l]);return c.a.createElement("div",{className:"column-match-table"},c.a.createElement("div",{className:"table-header"},c.a.createElement("ul",{className:"table-row"},c.a.createElement("li",null,"Column name"),c.a.createElement("li",null,"Column type"),c.a.createElement("li",null,"No potential joins"))),o.map((function(e){return c.a.createElement(oe,{dataset:t,column:e,joins:l(e,a)})})))}a(81);var se=function(e){var t=e.currentPage;return c.a.createElement("div",{className:"Breadcrumb"},c.a.createElement(o.Link,{to:"/"},"Home"),c.a.createElement("span",null," / ",t))},ue=(a(82),function(e){return te()(e).format("MMMM DD, YYYY")});function me(e){var t,a,r,l=e.match.params.datasetID,o=function(e){var t=T();return Object(u.a)(t,1)[0].datasets.find((function(t){return t.resource.id===e}))}(l),i=D(o),s=Object(n.useState)("joins"),m=Object(u.a)(s,2),d=m[0],f=m[1],E=null===o||void 0===o?void 0:o.resource,p=null===E||void 0===E?void 0:E.page_views,v=null===o||void 0===o?void 0:o.classification,b=null===v||void 0===v?void 0:v.domain_metadata,h=function(e){var t=Object(n.useState)({}),a=Object(u.a)(t,2),c=a[0],r=a[1],l=T(),o=Object(u.a)(l,1)[0].datasets;return Object(n.useEffect)((function(){fetch("".concat("/NewYorkOpenDataExplorer","/similarity_metrics.json")).then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),console.log("datasets ",o,c),Object(n.useMemo)((function(){return c[e]&&o&&o.length>0?c[e].map((function(e){return{similarity:e.similarity,dataset:o.find((function(t){return t.resource.id===e.dataset}))}})):[]}),[c,e,o])}(l).filter((function(e){return e.dataset.resource.id!==l})).slice(0,10),O=U(),j=Object(u.a)(O,2),g=j[0],C=j[1],y=C.addToCollection,N=C.removeFromCollection,_=null===b||void 0===b?void 0:null===(t=b.find((function(e){var t=e.key,a=e.value;return"Update_Automation"===t&&"No"===a})))||void 0===t?void 0:t.value,A=null===b||void 0===b?void 0:null===(a=b.find((function(e){return"Update_Update-Frequency"===e.key})))||void 0===a?void 0:a.value,w=null===b||void 0===b?void 0:null===(r=b.find((function(e){return"Dataset-Information_Agency"===e.key})))||void 0===r?void 0:r.value;return o?c.a.createElement("div",{className:"dataset-page"},c.a.createElement("div",{className:"dataset-details"},c.a.createElement("section",null,c.a.createElement(se,{currentPage:E.name})),c.a.createElement("section",null,c.a.createElement("h2",null,E.name),c.a.createElement("p",null,w),c.a.createElement(ce,{html:E.description}),c.a.createElement("button",{type:"button",className:"collection-button",onClick:function(){return g.datasets.includes(l)?N(l):y(l)}},g.datasets.includes(l)?"Remove From Collection":"Add to Collection"," ")),c.a.createElement("section",{className:"external-link"},c.a.createElement("p",null,"Powered by"),c.a.createElement("img",{alt:"NYC Open Data",src:"https://opendata.cityofnewyork.us/wp-content/themes/opendata-wp/assets/img/nyc-open-data-logo.svg"}),c.a.createElement(V,{permalink:o.permalink})),c.a.createElement("section",{className:"metadata"},c.a.createElement("h2",null,"Metadata"),c.a.createElement("h3",null,"Update Automation"),c.a.createElement("p",null,_),c.a.createElement("h3",null,"Update Frequency"),c.a.createElement("p",null,A),c.a.createElement("h3",null,"Dataset Owner"),c.a.createElement("p",null,null===o||void 0===o?void 0:o.owner.display_name),w&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,"Agency"),c.a.createElement("p",null,w)),(null===v||void 0===v?void 0:v.domain_category)&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,"Category"),c.a.createElement("p",null,v.domain_category)),c.a.createElement("h3",null,"Updated"),c.a.createElement("p",null,ue(null===E||void 0===E?void 0:E.updatedAt)),c.a.createElement("h3",null,"Metadata Updated at"),c.a.createElement("p",null,ue(null===E||void 0===E?void 0:E.metadata_updated_at)),c.a.createElement("h3",null,"Page Views"),c.a.createElement("p",null,null===p||void 0===p?void 0:p.page_views_total))),c.a.createElement("div",{className:"dataset-recomendataions"},c.a.createElement("h2",null,"Other datasets to consider"),c.a.createElement("div",{className:"tabs"},c.a.createElement("button",{type:"button",className:"joins"===d?"active":"",onClick:function(){return f("joins")}},"Potential Join Columns"),c.a.createElement("button",{type:"button",className:"theme"===d?"active":"",onClick:function(){return f("theme")}},"Thematically Similar")),"joins"===d&&c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Find datasets that share a column with the current dataset. These columns might be interesting datasets to join with the current dataset to add additional details or bring in context"),c.a.createElement(ie,{dataset:o,joinColumns:i})),"theme"===d&&c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Dataset that are thematically similar based on name and description"),h.map((function(e){return c.a.createElement(q,{onAddToCollection:y,onRemoveFromCollection:N,dataset:e.dataset,similarity:e.similarity,inCollection:g.datasets.includes(e.dataset.resource.id)})}))))):c.a.createElement("h1",null,"Loading...")}a(83);function de(){var e=U(),t=Object(u.a)(e,2),a=t[0],n=t[1].clearCollection;return a.datasets&&a.datasets.length>0?c.a.createElement("div",{className:"collection-bar"},c.a.createElement("span",null,a.datasets.length," datasets selected"),c.a.createElement(o.Link,{to:"/collection/new"},c.a.createElement("button",{type:"submit"},"Create Collection")),c.a.createElement("button",{type:"button",onClick:n},"Clear")):null}a(84);var fe=a(92),Ee=a(93),pe=a(94),ve=a(95),be=a(96),he=a(97),Oe=function(e){var t;return O.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!navigator.clipboard){a.next=9;break}return a.prev=1,a.next=4,O.a.awrap(navigator.clipboard.writeText(e));case 4:return a.abrupt("return",!0);case 7:a.prev=7,a.t0=a.catch(1);case 9:if(!document.queryCommandSupported||!document.queryCommandSupported("copy")){a.next=26;break}return(t=document.createElement("textarea")).style.opacity="0",t.textContent=e,t.style.position="fixed",document.body.appendChild(t),t.select(),a.prev=16,a.abrupt("return",document.execCommand("copy"));case 20:return a.prev=20,a.t1=a.catch(16),a.abrupt("return",!1);case 23:return a.prev=23,document.body.removeChild(t),a.finish(23);case 26:return a.abrupt("return",!1);case 27:case"end":return a.stop()}}),null,null,[[1,7],[16,20,23,26]])};function je(e){var t=e.match.params,a=t.name,r=t.datasetIDs,l=window.location.href,o=L(r.split(",")),i=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),c=a[0],r=a[1];return[c,function(){return O.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.awrap(Oe(e));case 2:r(!0);case 3:case"end":return t.stop()}}))}]}(l),s=Object(u.a)(i,2),m=s[0],d=s[1];return c.a.createElement("div",{className:"collections-page"},c.a.createElement("div",{className:"collections-details"},c.a.createElement("section",null,c.a.createElement(se,{currentPage:"Collections"})),c.a.createElement("section",null,c.a.createElement("h2",null,a),c.a.createElement("p",null,o.length," dataset",o.length>1?"s":"")),c.a.createElement("div",null,c.a.createElement("h3",null,"Share this collection:"),c.a.createElement("p",{className:"dataset-url"},l," "),c.a.createElement("button",{type:"button",onClick:d},"Copy link"),c.a.createElement("span",null,m?"Copied!":" "," "),c.a.createElement("p",{className:"share-icons"},c.a.createElement(fe.a,{url:l},c.a.createElement(Ee.a,{size:36}))," ",c.a.createElement(pe.a,{url:l},c.a.createElement(ve.a,{size:36})),c.a.createElement(be.a,{url:l},c.a.createElement(he.a,{size:36}))))),c.a.createElement("div",{className:"collections-content"},o.map((function(e){return c.a.createElement(q,{viewInOpenPortal:!0,key:e.id,dataset:e})}))))}a(88);function ge(){var e=U(),t=Object(u.a)(e,2),a=t[0],n=t[1],r=n.clearCollection,l=n.setName,i=L(a.datasets);return c.a.createElement("div",{className:"create-collection-modal"},c.a.createElement("h3",null,"Create collection with the following datasets"),c.a.createElement("ul",null,i.map((function(e){return c.a.createElement("li",null,e.resource.name)}))),c.a.createElement("input",{type:"text",placeholder:"Name",value:a.name,onChange:function(e){return l(e.target.value)}}),c.a.createElement(o.Link,{to:"/collection/".concat(a.name,"/").concat(a.datasets.join(","))},c.a.createElement("button",{type:"submit",onClick:r},"Create")))}function Ce(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=sessionStorage.redirect;if(delete sessionStorage.redirect,e&&e!==window.location.href){var t=e;t="/".concat(t.split("/").slice(4).join("/")),r(t)}}),[]),a?c.a.createElement(i.c,{to:a}):c.a.createElement(c.a.Fragment,null)}a(89);var ye=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(o.BrowserRouter,{basename:"/NewYorkOpenDataExplorer"},c.a.createElement(s.ModalContainer,null),c.a.createElement("header",null,c.a.createElement(o.Link,{className:"title",to:"/"},c.a.createElement("h1",null,"Data Clinic"))),c.a.createElement("div",{className:"content"},c.a.createElement(Ce,null),c.a.createElement(i.g,null,c.a.createElement(i.d,{path:"/",exact:!0,component:Z}),c.a.createElement(i.d,{path:"/dataset/:datasetID",exact:!0,component:me}),c.a.createElement(i.d,{path:"/collection/:name/:datasetIDs",exact:!0,component:je}),c.a.createElement(s.ModalRoute,{path:"/collection/new",parentPath:"/",component:ge}),c.a.createElement(i.c,{from:"/",to:"/"})),c.a.createElement(de,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement((function(e){var t=e.children,a=Object(n.useReducer)(X,Q),r=Object(u.a)(a,2),l=r[0],o=r[1];return c.a.createElement($.Provider,{value:[l,o]},t)}),null,c.a.createElement((function(e){var t=e.children,a=Object(n.useReducer)(k,w),r=Object(u.a)(a,2),l=r[0],o=r[1];Object(n.useEffect)((function(){_.SocrataCache.get(1).then((function(e){if(e){var t=JSON.parse(e.data);o({type:"HYDRATE_STATE",payload:Object(p.a)({},w,{},t,{cache_loaded:!0})}),o({type:"SET_LOADED"})}else(function(){var e,t,a;return O.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,O.a.awrap(g(0,1));case 2:return e=n.sent,t=e.resultSetSize,a=Math.ceil(t/100),n.abrupt("return",Promise.all(Object(d.a)(Array(a)).map((function(e,t){return g(t).then((function(e){return e.results}))}))).then((function(e){return e.reduce((function(e,t){return[].concat(Object(d.a)(t),Object(d.a)(e))}),[])})));case 6:case"end":return n.stop()}}))})().then((function(e){var t=function(e){var t={};return e.forEach((function(e){e.classification.domain_tags&&e.classification.domain_tags.forEach((function(e){e in t?t[e]+=1:t[e]=1}))})),t}(e),a=function(e){return e.reduce((function(e,t){return[].concat(Object(d.a)(e),Object(d.a)(t.classification.categories?t.classification.categories:[]))}),[]).reduce((function(e,t){return t in e?Object(p.a)({},e,Object(b.a)({},t,e[t]+1)):Object(p.a)({},e,Object(b.a)({},t,1))}),{})}(e),n=function(e){return e.map((function(e){return e.classification.domain_metadata.find((function(e){return"Dataset-Information_Agency"===e.key}))})).filter((function(e){return e})).map((function(e){return e.value})).reduce((function(e,t){return t in e?Object(p.a)({},e,Object(b.a)({},t,e[t]+1)):Object(p.a)({},e,Object(b.a)({},t,1))}),{})}(e),c=function(e){var t={};return e.forEach((function(e){e.resource.columns_name&&e.resource.columns_name.forEach((function(e){e in t?t[e]+=1:t[e]=1}))})),t}(e);o({type:"UPDATE_OPEN_DATASET_MANIFEST",payload:e}),o({type:"UPDATE_TAGS",payload:t}),o({type:"UPDATE_CATEGORIES",payload:a}),o({type:"UPDATE_DEPARTMENTS",payload:n}),o({type:"UPDATE_COLUMNS",payload:c}),o({type:"SET_LOADED"})}))}))}),[]);var i=l.datasets,s=l.tagList,m=l.columns,f=l.categories,E=l.departments,v=l.stateLoaded;return Object(n.useEffect)((function(){v&&(console.log("writing cache"),_.SocrataCache.put({data:JSON.stringify({datasets:i,tagList:s,categories:f,departments:E,columns:m}),id:1}))}),[i,s,f,m,E,v]),c.a.createElement(A.Provider,{value:[l,o]},t)}),null,c.a.createElement((function(e){var t=e.children,a=Object(n.useReducer)(P,x),r=Object(u.a)(a,2),l=r[0],o=r[1],i=l.cacheLoaded,s=l.datasets,m=l.name;return Object(n.useEffect)((function(){R.CollectionCache.get(1).then((function(e){if(e){var t=JSON.parse(e.data);o({type:"HYDRATE_STATE",payload:Object(p.a)({},x,{},t,{cacheLoaded:!0})})}else o({payload:Object(p.a)({},x,{cacheLoaded:!0}),type:"HYDRATE_STATE"})}))}),[]),Object(n.useEffect)((function(){i&&R.CollectionCache.put({data:JSON.stringify({datasets:s,name:m}),id:1})}),[i,s,m]),c.a.createElement(M.Provider,{value:[l,o]},t)}),null,c.a.createElement(ye,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.da0ee390.chunk.js.map