(()=>{"use strict";var e,t,n,a={694:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ButtonsPanel=function(e){return React.createElement("div",null,e.children)}},561:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});t.CheckboxControl=function(e){var t,n=wp.element,a=n.Fragment,r=n.useState,o=wp.components.CheckboxControl,i=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{!a&&l.return&&l.return()}finally{if(r)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}(r(e.checked||!1),2),l=i[0],c=i[1];return t=e.unescapedDescription?React.createElement("p",{className:"description",dangerouslySetInnerHTML:{__html:e.description}}):React.createElement("p",{className:"description"},e.description),React.createElement(a,null,React.createElement(o,{label:e.label,name:e.name,id:e.name,className:e.className,checked:l||!1,onChange:function(t){c(t),e.onChange&&e.onChange(t)}}),t)}},409:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.FutureActionPanel=void 0;var a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{!a&&l.return&&l.return()}finally{if(r)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n(37),i=n(28),l=wp.components,c=l.PanelRow,u=l.DateTimePicker,s=l.CheckboxControl,m=l.SelectControl,d=l.FormTokenField,p=l.Spinner,f=l.BaseControl,y=(l.Container,wp.element),g=y.Fragment,b=y.useEffect,v=(y.useState,wp.htmlEntities.decodeEntities),h=wp.url.addQueryArgs,E=wp.data,_=E.useSelect,T=E.useDispatch,S=wp.apiFetch;t.FutureActionPanel=function(e){var t=_((function(t){return t(e.storeName).getAction()}),[]),n=_((function(t){return t(e.storeName).getDate()}),[]),l=_((function(t){return t(e.storeName).getEnabled()}),[]),y=_((function(t){return t(e.storeName).getTerms()}),[]),E=_((function(t){return t(e.storeName).getTaxonomy()}),[]),x=_((function(t){return t(e.storeName).getTaxonomyName()}),[]),N=_((function(t){return t(e.storeName).getTermsListByName()}),[]),R=_((function(t){return t(e.storeName).getTermsListById()}),[]),C=_((function(t){return t(e.storeName).getIsFetchingTerms()}),[]),P=_((function(t){return t(e.storeName).getCalendarIsVisible()}),[]),A=T(e.storeName),w=A.setAction,O=A.setDate,k=A.setEnabled,I=A.setTerms,F=A.setTaxonomy,j=A.setTermsListByName,B=A.setTermsListById,D=A.setTaxonomyName,L=A.setIsFetchingTerms,M=A.setCalendarIsVisible,V=function(e){N[e]={id:e,count:0,description:"",link:"",name:e,slug:e,taxonomy:E},R[e]=e,j(N),B(R),I([].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(y),[e]))},H=function(t,n){"function"==typeof e.onChangeData&&e.onChangeData(t,n)},W=function(t){k(t),t&&(w(e.action),O(e.date),I(e.terms),F(e.taxonomy),U()),H("enabled",t)},U=function(){var t={},n={};L(!0),!E&&"post"===e.postType||"category"===E?S({path:h("wp/v2/categories",{per_page:-1})}).then((function(a){a.forEach((function(e){t[e.name]=e,n[e.id]=e.name})),j(t),B(n),D(e.strings.category),L(!1)})):S({path:h("publishpress-future/v1/taxonomies/"+e.postType)}).then((function(e){parseInt(e.count)>0&&S({path:h("wp/v2/taxonomies/"+E,{context:"edit",per_page:-1})}).then((function(e){S({path:h("wp/v2/"+e.rest_base,{context:"edit",per_page:-1})}).then((function(a){a.forEach((function(e){t[v(e.name)]=e,n[e.id]=v(e.name)})),j(t),B(n),D(v(e.name)),L(!1)}))}))}))},Y=function(){return localStorage.getItem("FUTURE_ACTION_CALENDAR_IS_VISIBLE_"+e.context)};b((function(){e.autoEnableAndHideCheckbox?k(!0):k(e.enabled),w(e.action),O(e.date),I(e.terms),F(e.taxonomy),null===Y()?M(e.calendarIsVisible):M("1"===Y()),e.enabled&&(e.isCleanNewPost&&W(!0),U())}),[]),b((function(){var t;t=P,localStorage.setItem("FUTURE_ACTION_CALENDAR_IS_VISIBLE_"+e.context,t?"1":"0")}),[P]);var Q=[];y&&y.length>0&&R&&(Q=(0,o.compact)(function(e){return"object"!==(void 0===e?"undefined":r(e))||null===e?{}:e.map((function(e){return R[e]}))}(y)),"string"==typeof Q&&(Q=[]));var z=[];"object"===(void 0===N?"undefined":r(N))&&null!==N&&(z=Object.keys(N));var G=P?"future-action-panel":"future-action-panel hidden-calendar",X=P?"future-action-panel-content":"future-action-panel-content hidden-calendar",q=P?"future-action-date-panel":"future-action-date-panel hidden-calendar",J=function(e,t,n){var r=e.split("{"),o=[];o.push(r.shift());var i=!0,l=!1,c=void 0;try{for(var u,s=r[Symbol.iterator]();!(i=(u=s.next()).done);i=!0){var m=u.value.split("}"),d=a(m,2),p=d[0],f=d[1];o.push(React.createElement("a",{href:t,target:"_blank",key:t},p)),o.push(f)}}catch(e){l=!0,c=e}finally{try{!i&&s.return&&s.return()}finally{if(l)throw c}}return o}(e.strings.timezoneSettingsHelp,"/wp-admin/options-general.php#timezone_string");return React.createElement("div",{className:G},e.autoEnableAndHideCheckbox&&React.createElement("input",{type:"hidden",name:"future_action_enabled",value:1}),!e.autoEnableAndHideCheckbox&&React.createElement(c,null,React.createElement(s,{label:e.strings.enablePostExpiration,checked:l||!1,onChange:W})),l&&React.createElement(g,null,React.createElement(c,{className:X+" future-action-full-width"},React.createElement(m,{label:e.strings.action,value:t,options:e.actionsSelectOptions,onChange:function(e){w(e),H("action",e)}})),String(t).includes("category")&&(C&&React.createElement(c,null,React.createElement(f,{label:x},e.strings.loading+" ("+x+")",React.createElement(p,null)))||!E&&React.createElement(c,null,React.createElement(f,{label:x},React.createElement("i",{className:"dashicons dashicons-warning"})," ",e.strings.noTaxonomyFound))||0===z.length&&React.createElement(c,null,React.createElement(f,{label:x},React.createElement("i",{className:"dashicons dashicons-warning"})," ",e.strings.noTermsFound))||React.createElement(c,{className:"future-action-full-width"},React.createElement(f,null,React.createElement(d,{label:x,value:Q,suggestions:z,onChange:function(e){e=function(e){return"object"!==(void 0===e?"undefined":r(e))||null===e?{}:e.map((function(e){return N[e]?N[e].id:(V(e),e)}))}(e),I(e),H("terms",e)},maxSuggestions:10})))),React.createElement(c,{className:q},React.createElement(i.ToggleArrowButton,{className:"future-action-calendar-toggle",isExpanded:P,iconExpanded:"arrow-up-alt2",iconCollapsed:"calendar",titleExpanded:e.strings.hideCalendar,titleCollapsed:e.strings.showCalendar,onClick:function(){return M(!P)}}),React.createElement(u,{currentDate:n,onChange:function(e){O(e),H("date",e)},__nextRemoveHelpButton:!0,is12Hour:e.is12hours,startOfWeek:e.startOfWeek})),React.createElement(c,null,React.createElement("div",{className:"future-action-help-text"},React.createElement("hr",null),React.createElement("span",{className:"dashicons dashicons-info"})," ",J,"."))))}},738:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.FutureActionPanelBlockEditor=void 0;var a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{!a&&l.return&&l.return()}finally{if(r)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=n(352);t.FutureActionPanelBlockEditor=function(e){var t=wp.editPost.PluginDocumentSettingPanel,n=wp.data,o=n.useDispatch,i=n.select,l=o("core/editor").editPost,c=i("core/editor").getEditedPostAttribute("publishpress_future_action");return React.createElement(t,{name:"publishpress-future-action-panel",title:e.strings.panelTitle,icon:"calendar",initialOpen:e.postTypeDefaultConfig.autoEnable,className:"post-expirator-panel"},React.createElement("div",{id:"publishpress-future-block-editor"},React.createElement(r.FutureActionPanel,{context:"block-editor",postType:e.postType,isCleanNewPost:e.isCleanNewPost,actionsSelectOptions:e.actionsSelectOptions,enabled:c.enabled,calendarIsVisible:!0,action:c.action,date:c.date,terms:c.terms,taxonomy:c.taxonomy,taxonomyName:e.taxonomyName,onChangeData:function(t,n){var r=i(e.storeName),o={enabled:r.getEnabled()};o.enabled&&(o.action=r.getAction(),o.date=r.getDate(),o.terms=r.getTerms(),o.taxonomy=r.getTaxonomy()),function(e){var t={publishpress_future_action:{}},n=!0,r=!1,o=void 0;try{for(var i,c=Object.entries(e)[Symbol.iterator]();!(n=(i=c.next()).done);n=!0){var u=i.value,s=a(u,2),m=s[0],d=s[1];t.publishpress_future_action[m]=d}}catch(e){r=!0,o=e}finally{try{!n&&c.return&&c.return()}finally{if(r)throw o}}l(t)}(o)},is12hours:e.is12hours,startOfWeek:e.startOfWeek,storeName:e.storeName,strings:e.strings})))}},27:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.FutureActionPanelBulkEdit=void 0;var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=n(352),o=n(37);t.FutureActionPanelBulkEdit=function(e){var t=wp.data,n=t.useSelect,i=t.useDispatch,l=t.select,c=n((function(t){return t(e.storeName).getDate()}),[]),u=n((function(t){return t(e.storeName).getEnabled()}),[]),s=n((function(t){return t(e.storeName).getAction()}),[]),m=n((function(t){return t(e.storeName).getTerms()}),[]),d=n((function(t){return t(e.storeName).getTaxonomy()}),[]),p=n((function(t){return t(e.storeName).getChangeAction()}),[]),f=i(e.storeName).setChangeAction,y=m;"object"===(void 0===m?"undefined":a(m))&&(y=m.join(","));var g=[{value:"no-change",label:e.strings.noChange},{value:"change-add",label:e.strings.changeAdd},{value:"add-only",label:e.strings.addOnly},{value:"change-only",label:e.strings.changeOnly},{value:"remove-only",label:e.strings.removeOnly}];return React.createElement("div",{className:"post-expirator-panel"},React.createElement(r.SelectControl,{label:e.strings.futureActionUpdate,name:"future_action_bulk_change_action",value:p,options:g,onChange:function(e){f(e)}}),["change-add","add-only","change-only"].includes(p)&&React.createElement(r.FutureActionPanel,{context:"bulk-edit",autoEnableAndHideCheckbox:!0,postType:e.postType,isCleanNewPost:e.isNewPost,actionsSelectOptions:e.actionsSelectOptions,enabled:!0,calendarIsVisible:!1,action:s,date:c,terms:m,taxonomy:d,taxonomyName:e.taxonomyName,onChangeData:function(t,n){(0,o.getElementByName)("future_action_bulk_enabled").value=l(e.storeName).getEnabled()?1:0,(0,o.getElementByName)("future_action_bulk_action").value=l(e.storeName).getAction(),(0,o.getElementByName)("future_action_bulk_date").value=l(e.storeName).getDate(),(0,o.getElementByName)("future_action_bulk_terms").value=l(e.storeName).getTerms().join(","),(0,o.getElementByName)("future_action_bulk_taxonomy").value=l(e.storeName).getTaxonomy()},is12hours:e.is12hours,startOfWeek:e.startOfWeek,storeName:e.storeName,strings:e.strings}),React.createElement("input",{type:"hidden",name:"future_action_bulk_enabled",value:u?1:0}),React.createElement("input",{type:"hidden",name:"future_action_bulk_action",value:s}),React.createElement("input",{type:"hidden",name:"future_action_bulk_date",value:c}),React.createElement("input",{type:"hidden",name:"future_action_bulk_terms",value:y}),React.createElement("input",{type:"hidden",name:"future_action_bulk_taxonomy",value:d}),React.createElement("input",{type:"hidden",name:"future_action_bulk_view",value:"bulk-edit"}),React.createElement("input",{type:"hidden",name:"_future_action_nonce",value:e.nonce}))}},21:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.FutureActionPanelClassicEditor=void 0;var a=n(352);t.FutureActionPanelClassicEditor=function(e){var t=wp.data.select,n=((new Date).getTimezoneOffset(),function(e){return document.getElementsByName(e)[0]}),r={enabled:"1"===n("future_action_enabled").value,action:n("future_action_action").value,date:n("future_action_date").value,terms:n("future_action_terms").value.split(",").map((function(e){return parseInt(e)})),taxonomy:n("future_action_taxonomy").value};return React.createElement("div",{className:"post-expirator-panel"},React.createElement(a.FutureActionPanel,{context:"classic-editor",postType:e.postType,isCleanNewPost:e.isNewPost,actionsSelectOptions:e.actionsSelectOptions,enabled:r.enabled,calendarIsVisible:!0,action:r.action,date:r.date,terms:r.terms,taxonomy:r.taxonomy,taxonomyName:e.taxonomyName,onChangeData:function(a,r){var o=t(e.storeName);n("future_action_enabled").value=o.getEnabled()?1:0,n("future_action_action").value=o.getAction(),n("future_action_date").value=o.getDate(),n("future_action_terms").value=o.getTerms().join(","),n("future_action_taxonomy").value=o.getTaxonomy()},is12hours:e.is12hours,startOfWeek:e.startOfWeek,storeName:e.storeName,strings:e.strings}))}},990:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.FutureActionPanelQuickEdit=void 0;var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=n(352);t.FutureActionPanelQuickEdit=function(e){var t=wp.data.useSelect,n=t((function(t){return t(e.storeName).getDate()}),[]),o=t((function(t){return t(e.storeName).getEnabled()}),[]),i=t((function(t){return t(e.storeName).getAction()}),[]),l=t((function(t){return t(e.storeName).getTerms()}),[]),c=t((function(t){return t(e.storeName).getTaxonomy()}),[]),u=l;return"object"===(void 0===l?"undefined":a(l))&&(u=l.join(",")),React.createElement("div",{className:"post-expirator-panel"},React.createElement(r.FutureActionPanel,{context:"quick-edit",postType:e.postType,isCleanNewPost:e.isNewPost,actionsSelectOptions:e.actionsSelectOptions,enabled:o,calendarIsVisible:!1,action:i,date:n,terms:l,taxonomy:c,taxonomyName:e.taxonomyName,onChangeData:function(e,t){},is12hours:e.is12hours,startOfWeek:e.startOfWeek,storeName:e.storeName,strings:e.strings}),React.createElement("input",{type:"hidden",name:"future_action_enabled",value:o?1:0}),React.createElement("input",{type:"hidden",name:"future_action_action",value:i}),React.createElement("input",{type:"hidden",name:"future_action_date",value:n}),React.createElement("input",{type:"hidden",name:"future_action_terms",value:u}),React.createElement("input",{type:"hidden",name:"future_action_taxonomy",value:c}),React.createElement("input",{type:"hidden",name:"future_action_view",value:"quick-edit"}),React.createElement("input",{type:"hidden",name:"_future_action_nonce",value:e.nonce}))}},549:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.NonceControl=function(e){var t=wp.element.Fragment;return e.name||(e.name="_wpnonce"),e.referrer||(e.referrer=!0),React.createElement(t,null,React.createElement("input",{type:"hidden",name:e.name,id:e.name,value:e.nonce}),e.referrer&&React.createElement("input",{type:"hidden",name:"_wp_http_referer",value:e.referrer}))}},406:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PostTypeSettingsPanel=void 0;var a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{!a&&l.return&&l.return()}finally{if(r)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=n(352);t.PostTypeSettingsPanel=function(e){var t=wp.element,n=t.useState,o=t.useEffect,i=wp.url.addQueryArgs,l=wp.hooks.applyFilters,c=wp.apiFetch,u=n(e.settings.taxonomy),s=a(u,2),m=s[0],d=s[1],p=n([]),f=a(p,2),y=f[0],g=f[1],b=n(!1),v=a(b,2),h=v[0],E=v[1],_=n([]),T=a(_,2),S=T[0],x=T[1],N=n(e.settings.howToExpire),R=a(N,2),C=R[0],P=R[1],A=n(e.settings.active),w=a(A,2),O=w[0],k=w[1],I=n(e.settings.defaultExpireOffset),F=a(I,2),j=F[0],B=F[1],D=n(e.settings.emailNotification),L=a(D,2),M=L[0],V=L[1],H=n(e.settings.autoEnabled),W=a(H,2),U=W[0],Y=W[1];o((function(){var t=function(t){var n=[],a=null,r=void 0;t.forEach((function(t){r={value:t.id,label:t.name},n.push(r),m===e.settings.taxonomy&&e.settings.terms.includes(t.id)&&(null===a&&(a=[]),a.push(r.label))})),g(n),E(!1),x(a)};if(!m&&"post"===e.postType||"category"===m)E(!0),c({path:i("wp/v2/categories",{per_page:-1})}).then(t);else{if(!m||!e.taxonomiesList)return;E(!0),c({path:i("wp/v2/taxonomies/"+m)}).then((function(e){c({path:i("wp/v2/"+e.rest_base)}).then(t)})).catch((function(e){console.debug("Taxonomy terms error",e),E(!1)}))}}),[m]);var Q=y.map((function(e){return e.label})),z=[React.createElement(r.SettingRow,{label:e.text.fieldActive,key:"expirationdate_activemeta-"+e.postType},React.createElement(r.CheckboxControl,{name:"expirationdate_activemeta-"+e.postType,checked:O||!1,label:e.text.fieldActiveLabel,onChange:function(e){k(e)}}))];return O&&(z.push(React.createElement(r.SettingRow,{label:e.text.fieldAutoEnable,key:"expirationdate_autoenable-"+e.postType},React.createElement(r.CheckboxControl,{name:"expirationdate_autoenable-"+e.postType,checked:U||!1,label:e.text.fieldAutoEnableLabel,onChange:function(e){Y(e)}}))),z.push(React.createElement(r.SettingRow,{label:e.text.fieldTaxonomy,key:"expirationdate_taxonomy-"+e.postType},React.createElement(r.SelectControl,{name:"expirationdate_taxonomy-"+e.postType,options:e.taxonomiesList,selected:m,noItemFoundMessage:e.text.noItemsfound,data:e.postType,onChange:function(e){d(e)}}))),0===e.taxonomiesList.length&&(e.expireTypeList[e.postType]=e.expireTypeList[e.postType].filter((function(e){return-1===["category","category-add","category-remove"].indexOf(e.value)}))),z.push(React.createElement(r.SettingRow,{label:e.text.fieldHowToExpire,key:"expirationdate_expiretype-"+e.postType},React.createElement(r.SelectControl,{name:"expirationdate_expiretype-"+e.postType,className:"pe-howtoexpire",options:e.expireTypeList[e.postType],description:e.text.fieldHowToExpireDescription,selected:C,onChange:function(e){P(e)}}),e.taxonomiesList.length>0&&["category","category-add","category-remove"].indexOf(C)>-1&&React.createElement(r.TokensControl,{label:e.text.fieldTerm,name:"expirationdate_terms-"+e.postType,options:Q,value:S,isLoading:h,onChange:function(e){x(e)},description:e.text.fieldTermDescription}))),z.push(React.createElement(r.SettingRow,{label:e.text.fieldDefaultDateTimeOffset,key:"expired-custom-date-"+e.postType},React.createElement(r.TextControl,{name:"expired-custom-date-"+e.postType,value:j,placeholder:e.settings.globalDefaultExpireOffset,description:e.text.fieldDefaultDateTimeOffsetDescription,unescapedDescription:!0,onChange:function(e){B(e)}}))),z.push(React.createElement(r.SettingRow,{label:e.text.fieldWhoToNotify,key:"expirationdate_emailnotification-"+e.postType},React.createElement(r.TextControl,{name:"expirationdate_emailnotification-"+e.postType,className:"large-text",value:M,description:e.text.fieldWhoToNotifyDescription,onChange:function(e){V(e)}})))),z=l("expirationdate_settings_posttype",z,e,O,n),React.createElement(r.SettingsFieldset,{legend:e.legend},React.createElement(r.SettingsTable,{bodyChildren:z}))}},438:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PostTypesSettingsPanels=void 0;var a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{!a&&l.return&&l.return()}finally{if(r)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=n(352);t.PostTypesSettingsPanels=function(e){var t=[],n=!0,o=!1,i=void 0;try{for(var l,c=Object.entries(e.settings)[Symbol.iterator]();!(n=(l=c.next()).done);n=!0){var u=l.value,s=a(u,2),m=s[0],d=s[1];t.push(React.createElement(r.PostTypeSettingsPanel,{legend:d.label,text:e.text,postType:m,settings:d,expireTypeList:e.expireTypeList,taxonomiesList:e.taxonomiesList[m],key:m+"-panel"}))}}catch(e){o=!0,i=e}finally{try{!n&&c.return&&c.return()}finally{if(o)throw i}}return t}},182:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SelectControl=function(e){var t=wp.element.Fragment,n=wp.components.SelectControl;return React.createElement(t,null,0===e.options.length&&React.createElement("div",null,e.noItemFoundMessage),e.options.length>0&&React.createElement(n,{label:e.label,name:e.name,id:e.name,className:e.className,value:e.selected,onChange:function(t){e.onChange(t)},"data-data":e.data,options:e.options}),e.children,React.createElement("p",{className:"description"},e.description))}},97:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SettingRow=function(e){return wp.element.Fragment,React.createElement("tr",{valign:"top"},React.createElement("th",{scope:"row"},React.createElement("label",{htmlFor:""},e.label)),React.createElement("td",null,e.children))}},248:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SettingsFieldset=function(e){return React.createElement("fieldset",null,React.createElement("legend",null,e.legend),e.children)}},65:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SettingsForm=function(e){return React.createElement("form",{method:"post"},e.children)}},56:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SettingsSection=function(e){var t=wp.element.Fragment;return React.createElement(t,null,React.createElement("h2",null,e.title),React.createElement("p",null,e.description),e.children)}},54:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SettingsTable=function(e){return React.createElement("table",{className:"form-table"},React.createElement("tbody",null,e.bodyChildren))}},998:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SubmitButton=function(e){return React.createElement("input",{type:"submit",name:e.name,value:e.text,className:"button-primary"})}},236:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TextControl=function(e){var t,n=wp.element.Fragment,a=wp.components.TextControl;return t=e.unescapedDescription?React.createElement("p",{className:"description",dangerouslySetInnerHTML:{__html:e.description}}):React.createElement("p",{className:"description"},e.description),React.createElement(n,null,React.createElement(a,{type:"text",label:e.label,name:e.name,id:e.name,className:e.className,value:e.value,placeholder:e.placeholder,onChange:function(t){e.onChange&&e.onChange(t)}}),t)}},28:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ToggleArrowButton=function(e){var t=wp.components.Button,n=e.iconExpanded?e.iconExpanded:"arrow-up-alt2",a=e.iconCollapsed?e.iconCollapsed:"arrow-down-alt2",r=e.isExpanded?n:a,o=e.isExpanded?e.titleExpanded:e.titleCollapsed;return React.createElement(t,{isSmall:!0,title:o,icon:r,onClick:function(){e.onClick&&e.onClick()},className:e.className})}},303:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.TokensControl=function(e){var t=wp.element,a=t.Fragment,r=t.useState,o=t.useEffect,i=wp.components.FormTokenField,l=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{!a&&l.return&&l.return()}finally{if(r)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}(r(""),2),c=l[0],u=l[1];o((function(){e.value&&u(e.value.join(","))}),[e.value]);var s=void 0;e.description&&(s=e.unescapedDescription?React.createElement("p",{className:"description",dangerouslySetInnerHTML:{__html:e.description}}):React.createElement("p",{className:"description"},e.description));var m=e.value?e.value:[];return React.createElement(a,null,React.createElement(i,{label:e.label,value:m,suggestions:e.options,onChange:function(t){e.onChange&&e.onChange(t),"object"===(void 0===t?"undefined":n(t))?u(t.join(",")):u("")},maxSuggestions:10,className:"publishpres-future-token-field"}),React.createElement("input",{type:"hidden",name:e.name,value:c}),s)}},366:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TrueFalseControl=function(e){var t=wp.element.Fragment,n=function(t){e.onChange&&e.onChange(t.target.value===e.trueValue&&jQuery(t.target).is(":checked"))};return React.createElement(t,null,React.createElement("input",{type:"radio",name:e.name,id:e.name+"-true",value:e.trueValue,defaultChecked:e.selected,onChange:n}),React.createElement("label",{htmlFor:e.name+"-true"},e.trueLabel),"  ",React.createElement("input",{type:"radio",name:e.name,defaultChecked:!e.selected,id:e.name+"-false",value:e.falseValue,onChange:n}),React.createElement("label",{htmlFor:e.name+"-false"},e.falseLabel),React.createElement("p",{className:"description"},e.description))}},352:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var a=n(694);Object.defineProperty(t,"ButtonsPanel",{enumerable:!0,get:function(){return a.ButtonsPanel}});var r=n(409);Object.defineProperty(t,"FutureActionPanel",{enumerable:!0,get:function(){return r.FutureActionPanel}});var o=n(738);Object.defineProperty(t,"FutureActionPanelBlockEditor",{enumerable:!0,get:function(){return o.FutureActionPanelBlockEditor}});var i=n(21);Object.defineProperty(t,"FutureActionPanelClassicEditor",{enumerable:!0,get:function(){return i.FutureActionPanelClassicEditor}});var l=n(990);Object.defineProperty(t,"FutureActionPanelQuickEdit",{enumerable:!0,get:function(){return l.FutureActionPanelQuickEdit}});var c=n(27);Object.defineProperty(t,"FutureActionPanelBulkEdit",{enumerable:!0,get:function(){return c.FutureActionPanelBulkEdit}});var u=n(406);Object.defineProperty(t,"PostTypeSettingsPanel",{enumerable:!0,get:function(){return u.PostTypeSettingsPanel}});var s=n(438);Object.defineProperty(t,"PostTypesSettingsPanels",{enumerable:!0,get:function(){return s.PostTypesSettingsPanels}});var m=n(97);Object.defineProperty(t,"SettingRow",{enumerable:!0,get:function(){return m.SettingRow}});var d=n(248);Object.defineProperty(t,"SettingsFieldset",{enumerable:!0,get:function(){return d.SettingsFieldset}});var p=n(65);Object.defineProperty(t,"SettingsForm",{enumerable:!0,get:function(){return p.SettingsForm}});var f=n(56);Object.defineProperty(t,"SettingsSection",{enumerable:!0,get:function(){return f.SettingsSection}});var y=n(54);Object.defineProperty(t,"SettingsTable",{enumerable:!0,get:function(){return y.SettingsTable}});var g=n(998);Object.defineProperty(t,"SubmitButton",{enumerable:!0,get:function(){return g.SubmitButton}});var b=n(561);Object.defineProperty(t,"CheckboxControl",{enumerable:!0,get:function(){return b.CheckboxControl}});var v=n(182);Object.defineProperty(t,"SelectControl",{enumerable:!0,get:function(){return v.SelectControl}});var h=n(236);Object.defineProperty(t,"TextControl",{enumerable:!0,get:function(){return h.TextControl}});var E=n(303);Object.defineProperty(t,"TokensControl",{enumerable:!0,get:function(){return E.TokensControl}});var _=n(549);Object.defineProperty(t,"NonceControl",{enumerable:!0,get:function(){return _.NonceControl}});var T=n(366);Object.defineProperty(t,"TrueFalseControl",{enumerable:!0,get:function(){return T.TrueFalseControl}})},91:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createStore=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=n(500);t.createStore=function(e){var t=wp.data,n=t.register,o=t.createReduxStore;e.defaultState.terms&&"string"==typeof e.defaultState.terms&&(e.defaultState.terms=e.defaultState.terms.split(",").map((function(e){return parseInt(e)})));var i={action:e.defaultState.action,date:e.defaultState.date?e.defaultState.date:(0,r.getCurrentTimeAsTimestamp)(),enabled:e.defaultState.autoEnable,terms:e.defaultState.terms?e.defaultState.terms:[],taxonomy:e.defaultState.taxonomy?e.defaultState.taxonomy:null,termsListByName:null,termsListById:null,taxonomyName:null,isFetchingTerms:!1,changeAction:"no-change",calendarIsVisible:!0},l=o(e.name,{reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments[1];switch(t.type){case"SET_ACTION":return a({},e,{action:t.action});case"SET_DATE":return a({},e,{date:t.date});case"SET_ENABLED":return a({},e,{enabled:t.enabled});case"SET_TERMS":return a({},e,{terms:t.terms});case"SET_TAXONOMY":return a({},e,{taxonomy:t.taxonomy});case"SET_TERMS_LIST_BY_NAME":return a({},e,{termsListByName:t.termsListByName});case"SET_TERMS_LIST_BY_ID":return a({},e,{termsListById:t.termsListById});case"SET_TAXONOMY_NAME":return a({},e,{taxonomyName:t.taxonomyName});case"SET_CHANGE_ACTION":return a({},e,{changeAction:t.changeAction});case"SET_CALENDAR_IS_VISIBLE":return a({},e,{calendarIsVisible:t.calendarIsVisible})}return e},actions:{setAction:function(e){return{type:"SET_ACTION",action:e}},setDate:function(e){return{type:"SET_DATE",date:e}},setEnabled:function(e){return{type:"SET_ENABLED",enabled:e}},setTerms:function(e){return{type:"SET_TERMS",terms:e}},setTaxonomy:function(e){return{type:"SET_TAXONOMY",taxonomy:e}},setTermsListByName:function(e){return{type:"SET_TERMS_LIST_BY_NAME",termsListByName:e}},setTermsListById:function(e){return{type:"SET_TERMS_LIST_BY_ID",termsListById:e}},setTaxonomyName:function(e){return{type:"SET_TAXONOMY_NAME",taxonomyName:e}},setIsFetchingTerms:function(e){return{type:"SET_IS_FETCHING_TERMS",isFetchingTerms:e}},setChangeAction:function(e){return{type:"SET_CHANGE_ACTION",changeAction:e}},setCalendarIsVisible:function(e){return{type:"SET_CALENDAR_IS_VISIBLE",calendarIsVisible:e}}},selectors:{getAction:function(e){return e.action},getDate:function(e){return e.date},getEnabled:function(e){return e.enabled},getTerms:function(e){return e.terms},getTaxonomy:function(e){return e.taxonomy},getTermsListByName:function(e){return e.termsListByName},getTermsListById:function(e){return e.termsListById},getTaxonomyName:function(e){return e.taxonomyName},getIsFetchingTerms:function(e){return e.isFetchingTerms},getChangeAction:function(e){return e.changeAction},getCalendarIsVisible:function(e){return e.calendarIsVisible}}});return n(l),l}},500:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=t.getCurrentTimeInSeconds=function(){return o((new Date).getTime())},a=(t.getCurrentTimeAsTimestamp=function(){return a(n())},t.formatUnixTimeToTimestamp=function(e){var t=new Date(i(e));return t.getFullYear()+"-"+("0"+(t.getMonth()+1)).slice(-2)+"-"+("0"+t.getDate()).slice(-2)+" "+("0"+t.getHours()).slice(-2)+":"+("0"+t.getMinutes()).slice(-2)+":"+("0"+t.getSeconds()).slice(-2)}),r=(t.formatTimestampToUnixTime=function(e){var t=new Date(e);return o(t.getTime())},t.timeIsInSeconds=function(e){return 10===parseInt(e).toString().length}),o=t.normalizeUnixTimeToSeconds=function(e){return e=parseInt(e),r()?e:e/1e3},i=t.normalizeUnixTimeToMilliseconds=function(e){return e=parseInt(e),r()?1e3*e:e}},37:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=(t.compact=function(e){return e?(Array.isArray(e)||"object"!==(void 0===e?"undefined":n(e))||(e=Object.values(e)),e.filter((function(e){return null!=e&&""!==e}))):[]},t.debugLogFactory=function(e){return function(t){for(var n=arguments.length,a=Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];var o;console&&e.isDebugEnabled&&(o=console).debug.apply(o,["[Future]",t].concat(a))}},t.isGutenbergEnabled=function(){return document.body.classList.contains("block-editor-page")},t.getElementByName=function(e){return document.getElementsByName(e)[0]},t.getFieldByName=function(e,t){return document.querySelector("#the-list tr#post-"+t+" .column-expirationdate input#future_action_"+e+"-"+t)});t.getFieldValueByName=function(e,t){var n=a(e,t);return n?n.value:null},t.getFieldValueByNameAsArrayOfInt=function(e,t){var n=a(e,t);return n&&n.value?("number"==typeof n.value&&(n.value=n.value.toString()),n.value.split(",").map((function(e){return parseInt(e)}))):[]},t.getFieldValueByNameAsBool=function(e,t){var n=a(e,t);return!!n&&("1"===n.value||"true"===n.value)}}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var n=r[e]={exports:{}};return a[e](n,n.exports,o),n.exports}e=o(352),t=o(91),n=o(37),function(a,r){if(!(0,n.isGutenbergEnabled)()){var o="publishpress-future/future-action",i=a.element.createRoot;(0,a.data.select)(o)||(0,t.createStore)({name:o,defaultState:{autoEnable:r.postTypeDefaultConfig.autoEnable,action:r.postTypeDefaultConfig.expireType,date:r.defaultDate,taxonomy:r.postTypeDefaultConfig.taxonomy,terms:r.postTypeDefaultConfig.terms}}),i(document.getElementById("publishpress-future-classic-editor")).render(React.createElement(e.FutureActionPanelClassicEditor,{storeName:o,postType:r.postType,isNewPost:r.isNewPost,actionsSelectOptions:r.actionsSelectOptions,is12hours:r.is12hours,startOfWeek:r.startOfWeek,strings:r.strings,taxonomyName:r.taxonomyName}))}}(window.wp,window.publishpressFutureClassicMetabox)})();
//# sourceMappingURL=classic-editor.js.map