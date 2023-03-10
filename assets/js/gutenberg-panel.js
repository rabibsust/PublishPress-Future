(()=>{"use strict";var e,t,a,n,i,o,r,s,c,u,p,l,d,f,g,m,y,h,b,x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}e=window.wp,t=window.postExpiratorPanelConfig,a=e.plugins.registerPlugin,n=e.editPost.PluginDocumentSettingPanel,i=e.components,o=i.PanelRow,r=i.DateTimePicker,s=i.CheckboxControl,c=i.SelectControl,u=i.FormTokenField,p=i.Spinner,l=e.element,d=l.Fragment,f=l.Component,g=e.htmlEntities.decodeEntities,m=lodash,y=m.isEmpty,h=m.keys,b=m.compact,a("postexpirator-sidebar",{render:function(a){function i(){v(this,i);var e=E(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments));return e.state={categoriesList:[],catIdVsName:[]},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(i,a),_(i,[{key:"componentWillMount",value:function(){var a=this,n=(this.state.attributes,e.data.select("core/editor").getEditedPostAttribute("meta")),i=e.data.select("core/editor").getCurrentPostType(),o=function(t){return e.data.dispatch("core/editor").editPost({meta:t})},r=!1,s=new Date,c=this.getExpireType(n),u=this.getCategories(n);n["_expiration-date-status"]&&"saved"===n["_expiration-date-status"]&&(r=!0);var p=60*s.getTimezoneOffset(),l=60*t.timezone_offset;n["_expiration-date"]?s.setTime(1e3*(n["_expiration-date"]+p+l)):(u=t.default_categories,t.default_date&&s.setTime(1e3*(parseInt(t.default_date)+p+l)),r=!1);var d=t.defaults.taxonomy||"category";this.setState({enabled:r,date:s,expireAction:c,categories:u,taxonomy:d}),o({"_expiration-date-status":r?"saved":""}),o({"_expiration-date":s.getTime()/1e3}),o({"_expiration-date-type":c}),o({"_expiration-date-categories":u});var f=[],m=[];!d&&"post"===i||"category"===d?e.apiFetch({path:e.url.addQueryArgs("wp/v2/categories",{per_page:-1})}).then((function(e){e.forEach((function(e){f[e.name]=e,m[e.id]=e.name})),a.setState({categoriesList:f,catIdVsName:m,taxonomy:t.strings.category})})):e.apiFetch({path:e.url.addQueryArgs("wp/v2/taxonomies/"+d,{context:"edit"})}).then((function(t){e.apiFetch({path:e.url.addQueryArgs("wp/v2/"+t.rest_base,{context:"edit"})}).then((function(e){e.forEach((function(e){f[g(e.name)]=e,m[e.id]=g(e.name)})),a.setState({categoriesList:f,catIdVsName:m,taxonomy:g(t.name)})}))}))}},{key:"componentDidUpdate",value:function(){var t=this.state,a=t.enabled,n=t.date,i=t.expireAction,o=t.categories,r=t.attribute,s=function(t){return e.data.dispatch("core/editor").editPost({meta:t})},c=e.data.select("core/editor").getEditedPostAttribute("meta");switch(r){case"enabled":s({"_expiration-date-status":a?"saved":""}),c["_expiration-date"]||s({"_expiration-date":this.getDate(n)});break;case"date":"string"==typeof n&&s({"_expiration-date":this.getDate(n)});break;case"action":s({"_expiration-date-type":i}),i.includes("category")||s({"_expiration-date-categories":[]});break;case"category":s({"_expiration-date-categories":o})}}},{key:"render",value:function(){var e=this,a=this.state,i=a.categoriesList,l=a.catIdVsName,f=this.state,g=f.enabled,m=f.date,x=f.expireAction,_=f.categories,v=f.taxonomy,E=_&&b(_.map((function(e){return l[e]||!1})));return"string"==typeof E&&(E=[]),React.createElement(n,{title:t.strings.postExpirator,icon:"calendar",initialOpen:g,className:"post-expirator-panel"},React.createElement(o,null,React.createElement(s,{label:t.strings.enablePostExpiration,checked:g,onChange:function(t){e.setState({enabled:!g,attribute:"enabled"})}})),g&&React.createElement(d,null,React.createElement(o,null,React.createElement(r,{currentDate:m,onChange:function(t){return e.setState({date:t,attribute:"date"})},is12Hour:t.is_12_hours})),React.createElement(c,{label:t.strings.howToExpire,value:x,options:t.actions_options,onChange:function(t){e.setState({expireAction:t,attribute:"action"})}}),x.includes("category")&&(y(h(i))&&React.createElement(d,null,t.strings.loading+" ("+v+")",React.createElement(p,null))||React.createElement(u,{label:t.strings.expirationCategories+" ("+v+")",value:E,suggestions:Object.keys(i),onChange:function(t){e.setState({categories:e.selectCategories(t),attribute:"category"})},maxSuggestions:10}))))}},{key:"getExpireType",value:function(e){var a=e["_expiration-date-type"],n=e["_expiration-date-options"]&&e["_expiration-date-options"].expireType;return a||n||(t&&t.defaults&&t.defaults.expireType?t.defaults.expireType:"draft")}},{key:"arrayIsEmpty",value:function(e){return!e||0===e.length||""===e[0]}},{key:"getCategories",value:function(e){var a=e["_expiration-date-categories"]&&e["_expiration-date-categories"],n=e["_expiration-date-options"]&&e["_expiration-date-options"].category,i=t.defaults.terms?t.defaults.terms.split(","):[];return this.arrayIsEmpty(a)&&this.arrayIsEmpty(n)?i:this.arrayIsEmpty(a)?n&&void 0!==n&&"object"!==(void 0===n?"undefined":x(n))?[n]:i:a}},{key:"selectCategories",value:function(e){var t=this.state,a=t.categoriesList;if(t.catIdVsName,!e.some((function(e){return"string"==typeof e&&!a[e]})))return e.map((function(e){return"string"==typeof e?a[e]:e})).map((function(e){return e.id}))}},{key:"getDate",value:function(e){var a=new Date,n=60*(new Date).getTimezoneOffset(),i=60*t.timezone_offset;return a.setTime(Date.parse(e)),a.setTime(a.getTime()-1e3*(n+i)),a.getTime()/1e3}}]),i}(f)})})();
//# sourceMappingURL=gutenberg-panel.js.map