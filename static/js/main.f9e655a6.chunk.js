(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{25:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a(13),s=a.n(c),n=a(2),i=a.n(n),o=a(4),u=a(5),d=(a(25),{fetchDailyForecastData:function(){var e=Object(o.a)(i.a.mark((function e(t){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://dry-shelf-70670.herokuapp.com/api/weather/daily/city/".concat(t),{mode:"cors"});case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),l={fetchHourlyForecastData:function(){var e=Object(o.a)(i.a.mark((function e(t){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://dry-shelf-70670.herokuapp.com/api/weather/hourly/city/".concat(t),{mode:"cors"});case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},h={fetchCitiesData:function(){var e=Object(o.a)(i.a.mark((function e(t){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://dry-shelf-70670.herokuapp.com/api/cities/".concat(t),{method:"GET",mode:"cors"});case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=a.p+"static/media/search.722f5ec8.svg",m=a(0),b=function(e){var t=e.onSearch,a=Object(r.useState)(""),c=Object(u.a)(a,2),s=c[0],n=c[1],i=Object(r.useState)(void 0),o=Object(u.a)(i,2),d=o[0],l=o[1];Object(r.useEffect)((function(){d&&clearTimeout(d),l(setTimeout((function(){s.length>0&&t({text:s})}),1e3))}),[s]);return Object(m.jsx)("header",{className:"header",children:Object(m.jsxs)("nav",{className:"area-topBar",children:[Object(m.jsx)("a",{href:"",className:"logo-text",children:"International Weather"}),Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s?t({text:s}):alert("Please add some text")},className:"searchBar",children:[Object(m.jsx)("input",{type:"text",className:"searchBar__input",placeholder:"Busca Tu Ciudad...",value:s,onChange:function(e){n(e.target.value)}}),Object(m.jsx)("button",{type:"submit",className:"searchBar__button",children:Object(m.jsx)("img",{className:"searchBar__icon",src:j,alt:"search"})})]})]})})},p=function(e){var t=e.name,a=e.onClick,r=e.cityId;return Object(m.jsx)("button",{className:"cities-suggestion__item",onClick:function(e){e.preventDefault(),a({_id:r,name:t})},children:Object(m.jsx)("p",{children:t})})},x=a(44),f=function(e){var t=e.citiesData,a=e.loading,r=e.onSelect,c=function(e){r(e)},s=t.cities.map((function(e){return Object(m.jsx)(p,{name:e.name,cityId:e._id,onClick:c},e._id)}));return Object(m.jsx)("div",{className:"cities-suggestion",children:!0===a?Object(m.jsx)(x.a,{}):s})},O=a.p+"static/media/hiker-man-colour.8e88f095.svg",v=a.p+"static/media/cloud1.3e3d32b0.svg",y=a.p+"static/media/lightning1.6b6e326f.svg",g=a.p+"static/media/moon.5c79f519.svg",_=a.p+"static/media/moonCloud2.ac4e6368.svg",F=a.p+"static/media/rain1.68ee65f9.svg",w=a.p+"static/media/rain2.66d5c6dc.svg",N=a.p+"static/media/snow1.dfe4399f.svg",k=a.p+"static/media/sun.b97e9b81.svg",D=a.p+"static/media/sunCloud1.419f4b2b.svg",C=a.p+"static/media/sunCloud2.562e5e09.svg",W=a.p+"static/media/errorOutline.a85971da.svg",S=function(e){var t;switch(e){case"cloud-1":t=v;break;case"lightning-1":t=y;break;case"moon":t=g;break;case"moon-cloud-1":case"moon-cloud-2":t=_;break;case"rain-1":t=F;break;case"rain-2":t=w;break;case"snow-1":case"snow-2":t=N;break;case"sun":t=k;break;case"sun-cloud-1":t=D;break;case"sun-cloud-2":t=C;break;case"error-outline":default:t=W}return t},T=a(6),B=a.n(T),M=function(e){var t=e.today;return void 0===t.dailyForecast?Object(m.jsx)(r.Fragment,{children:Object(m.jsx)("h1",{children:"No weather Data for today"})}):Object(m.jsxs)(r.Fragment,{children:[Object(m.jsx)("img",{src:S(t.dailyForecast.weatherStatus.icon),alt:"Cloudy",className:"heroWeather__icon"}),Object(m.jsx)("h3",{className:"heroWeather__weatherName text-color black medium",children:t.dailyForecast.weatherStatus.description}),Object(m.jsx)("p",{className:"heroWeather__todayDate text-color light-4",children:Object(m.jsx)(B.a,{format:"dddd DD MMMM",children:t.date})}),Object(m.jsx)("h1",{className:"heroWeather__temperature x-large text-color black",children:t.dailyForecast.temperature.maxTemperature})]})},E=function(e){var t=e.heading,a=e.subheading;return Object(m.jsxs)("div",{className:"separator-heading",children:[Object(m.jsx)("h2",{className:"separator-heading__text heading",children:t}),Object(m.jsx)("h3",{className:"separator-heading__text subheading",children:a})]})},H=function(e){var t=e.loading,a=e.dailyForecastData,c=e.cityName;return Object(m.jsxs)(r.Fragment,{children:[Object(m.jsx)(E,{heading:c}),Object(m.jsx)("div",{className:"area-heroWeather",children:Object(m.jsxs)("div",{className:"heroWeather",children:[Object(m.jsx)("div",{className:"heroWeather ilustration",children:Object(m.jsx)("img",{src:O,alt:"Cloudy",className:"heroWeather__ilustration"})}),Object(m.jsx)("div",{className:"heroWeather info",children:!0===t?Object(m.jsx)(x.a,{}):Object(m.jsx)(M,{today:a.WeeklyForecast[0]})})]})})]})},I=function(e){var t=e.hour,a=e.temperature,r=e.icon;return Object(m.jsxs)("div",{className:"detailedWeatherCard",children:[Object(m.jsx)("p",{className:"detailedWeatherCard__hour",children:Object(m.jsx)(B.a,{format:"HH:mm",children:t})}),Object(m.jsx)("img",{className:"detailedWeatherCard__icon",src:r,alt:"search"}),Object(m.jsx)("p",{className:"detailedWeatherCard__temperature",children:a})]})},V=function(e){var t=e.halfDayForecast.map((function(e){return e.hourlyForecast?Object(m.jsx)(I,{hour:e.hourlyForecast.startDateTime,temperature:e.hourlyForecast.temperature,icon:S(e.hourlyForecast.weatherStatus.icon)},e.hourlyForecast._id):Object(m.jsx)(I,{hour:e.date,temperature:"No weather Data",icon:S("error-outline")},e.date)}));return Object(m.jsx)("div",{className:"detailedWeatherView__row",children:t})},J=function(e){var t=e.loading,a=e.hourlyForecastData;return Object(m.jsxs)(r.Fragment,{children:[Object(m.jsx)(E,{heading:"Today",subheading:"Next 24 hours"}),Object(m.jsx)("div",{className:"area-detailedWeatherView",children:Object(m.jsx)("div",{className:"detailedWeatherView",children:!0===t?Object(m.jsx)(x.a,{}):Object(m.jsx)(V,{halfDayForecast:a.halfDayForecast})})})]})},G=function(e){var t=e.icon,a=e.date,r=e.maxTemperature,c=e.minTemperature;return Object(m.jsxs)("div",{className:"weekForecastCard",children:[Object(m.jsx)("img",{className:"weekForecastCard__icon",src:t,alt:"search"}),Object(m.jsx)("h3",{className:"weekForecastCard__date",children:Object(m.jsx)(B.a,{format:"dddd DD MMMM",children:a})}),Object(m.jsxs)("div",{className:"weekForecastCard-temperature",children:[Object(m.jsx)("p",{className:"weekForecastCard-temperature__min",children:r}),Object(m.jsx)("p",{className:"weekForecastCard-temperature__max",children:c})]})]})},P=function(e){var t=e.weeklyForecast.map((function(e){return e.dailyForecast?Object(m.jsx)(G,{icon:S(e.dailyForecast.weatherStatus.icon),date:e.dailyForecast.date,maxTemperature:e.dailyForecast.temperature.maxTemperature,minTemperature:e.dailyForecast.temperature.minTemperature},e.dailyForecast._id):Object(m.jsx)(G,{icon:S("error-outline"),date:e.date,maxTemperature:"No weather Data",minTemperature:""},e.date)}));return Object(m.jsx)("div",{className:"weekForecast",children:t})},q=function(e){var t=e.loading,a=e.dailyForecastData;return Object(m.jsxs)(r.Fragment,{children:[Object(m.jsx)(E,{heading:"This Week",subheading:"7 days prediction"}),Object(m.jsx)("div",{className:"area-weekForecast",children:!0===t?Object(m.jsx)(x.a,{}):Object(m.jsx)(P,{weeklyForecast:a.WeeklyForecast})})]})},z={cities:[{_id:"6058a533e3a0925130bd12ec",name:"Barcelona",__v:0},{_id:"605ca85ae2df18249c4607dc",name:"Bahamas",__v:0}]};var A=function(){var e=Object(r.useState)(!0),t=Object(u.a)(e,2),a=t[0],c=t[1],s=Object(r.useState)(!0),n=Object(u.a)(s,2),j=n[0],p=n[1],x=Object(r.useState)([]),O=Object(u.a)(x,2),v=O[0],y=O[1],g=Object(r.useState)([]),_=Object(u.a)(g,2),F=_[0],w=_[1],N=Object(r.useState)(z.cities[0]),k=Object(u.a)(N,2),D=k[0],C=k[1],W=Object(r.useState)(!1),S=Object(u.a)(W,2),T=S[0],B=S[1],M=Object(r.useState)(z),E=Object(u.a)(M,2),I=E[0],V=E[1];Object(r.useEffect)((function(){var e=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.fetchDailyForecastData(D._id);case 2:t=e.sent,y(t),c(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.fetchHourlyForecastData(D._id);case 2:t=e.sent,w(t),p(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),t()}),[D]);var G=function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t!==D&&(p(!0),c(!0),C(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(o.a)(i.a.mark((function e(t){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return B(!0),a=t.text,e.next=4,h.fetchCitiesData(a);case 4:r=e.sent,V(r),B(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(r.Fragment,{children:[Object(m.jsx)(b,{onSearch:P}),Object(m.jsx)(f,{citiesData:I,loading:T,onSelect:G}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(H,{cityName:D.name,loading:a,dailyForecastData:v}),Object(m.jsx)(J,{loading:j,hourlyForecastData:F}),Object(m.jsx)(q,{loading:a,dailyForecastData:v})]})]})};s.a.render(Object(m.jsx)(A,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.f9e655a6.chunk.js.map