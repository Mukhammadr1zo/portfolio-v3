if(!self.define){let e,n={};const s=(s,i)=>(s=new URL(s+".js",i).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(n[a])return;let o={};const t=e=>s(e,a),r={module:{uri:a},exports:o,require:t};n[a]=Promise.all(i.map((e=>r[e]||t(e)))).then((e=>(c(...e),o)))}}define(["./workbox-22294e6b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/7S8kHHcynlB8tMFnSwMAf/_buildManifest.js",revision:"7S8kHHcynlB8tMFnSwMAf"},{url:"/_next/static/7S8kHHcynlB8tMFnSwMAf/_ssgManifest.js",revision:"7S8kHHcynlB8tMFnSwMAf"},{url:"/_next/static/chunks/0d7f7666391f7da9b146d7d69f58a72d9a6bb47b.c7edd7021135b1282abc.js",revision:"7S8kHHcynlB8tMFnSwMAf"},{url:"/_next/static/chunks/219f048fcad9255f5509e115b64bd63440b69573.453612ca3996c7ea0025.js",revision:"7S8kHHcynlB8tMFnSwMAf"},{url:"/_next/static/chunks/38da7bfe.eee19a7e6498702ef0ba.js",revision:"7S8kHHcynlB8tMFnSwMAf"},{url:"/_next/static/chunks/9d38e5a1d78a580cb06936126f9a3de00447372c.4cfe0af90ba875bcd3cc.js",revision:"7S8kHHcynlB8tMFnSwMAf"},{url:"/_next/static/chunks/commons.4895ed124377ab372fb2.js",revision:"7S8kHHcynlB8tMFnSwMAf"},{url:"/_next/static/chunks/d04e97c2229c963cf342f21082e8b5cedd064ecb.ce744f65b1afda462673.js",revision:"7S8kHHcynlB8tMFnSwMAf"},{url:"/_next/static/chunks/framework.01aa409d3653a907d417.js",revision:"7S8kHHcynlB8tMFnSwMAf"},{url:"/_next/static/chunks/main-4a0c54b171bcab3ce744.js",revision:"7S8kHHcynlB8tMFnSwMAf"},{url:"/_next/static/chunks/pages/_app-f9d4df505b79460003f3.js",revision:"7S8kHHcynlB8tMFnSwMAf"},{url:"/_next/static/chunks/pages/_error-006c8220f3b61c485671.js",revision:"7S8kHHcynlB8tMFnSwMAf"},{url:"/_next/static/chunks/pages/about-b044610bfb1099d3b74e.js",revision:"7S8kHHcynlB8tMFnSwMAf"},{url:"/_next/static/chunks/pages/articles-e1f1782a8890f4eb69a4.js",revision:"7S8kHHcynlB8tMFnSwMAf"},{url:"/_next/static/chunks/pages/contact-ca489f0f9babf82e2cbd.js",revision:"7S8kHHcynlB8tMFnSwMAf"},{url:"/_next/static/chunks/pages/index-e2a513068b4bf7467fd9.js",revision:"7S8kHHcynlB8tMFnSwMAf"},{url:"/_next/static/chunks/pages/lens-d7dde001bc14ec92ddd5.js",revision:"7S8kHHcynlB8tMFnSwMAf"},{url:"/_next/static/chunks/pages/projects-e51ad5a011c4f786db6e.js",revision:"7S8kHHcynlB8tMFnSwMAf"},{url:"/_next/static/chunks/pages/resume-9a15b5c0d64b5e0477c5.js",revision:"7S8kHHcynlB8tMFnSwMAf"},{url:"/_next/static/chunks/polyfills-6ddf6a2eefee382a8f3e.js",revision:"7S8kHHcynlB8tMFnSwMAf"},{url:"/_next/static/chunks/webpack-57651bcf5292fdb0f072.js",revision:"7S8kHHcynlB8tMFnSwMAf"},{url:"/_redirects",revision:"4d672ffc0b94c44e813222a298fe597b"},{url:"/css/base.css",revision:"a15c2ac3234aa8f6064ef9c1f7383c37"},{url:"/css/normalize.css",revision:"83dfa4b53957ddb51bd11084e290fc98"},{url:"/cursor.png",revision:"557559392458e9363895f6a8e12d7913"},{url:"/favicon.svg",revision:"cbff044262a11815b80e214ff0f5503e"},{url:"/fonts/NeurialGrotesk-Bold.otf",revision:"3bab5dc3f48892ba1c67afc4e2b6e8ad"},{url:"/fonts/NeurialGrotesk-Extrabold.otf",revision:"fb4d0ab59826d28cc4f00fabe737a2a3"},{url:"/fonts/NeurialGrotesk-Medium.otf",revision:"416223b099b615cfe8727d64ccf56ae2"},{url:"/fonts/NeurialGrotesk-Regular.otf",revision:"2307761bcc0c9168b60bd39011965452"},{url:"/icon.png",revision:"4c12a8d9aa21de6733282a1995606503"},{url:"/icons/16.png",revision:"783d0aa49395d0afefe6c1c9f52c2e59"},{url:"/icons/256.png",revision:"018c7c5dfa62ae78b390c29b15cfcdf1"},{url:"/icons/512.png",revision:"533d654a6dcd43851ebdb73321e1e2a5"},{url:"/icons/android-icon-144x144.png",revision:"c54ba85974d159ffdebfae531e16bb33"},{url:"/icons/android-icon-192x192.png",revision:"4071d08b60a42415a1af624bcdbeeb01"},{url:"/icons/android-icon-36x36.png",revision:"82f5f9e518a6284f065c921b5000cfb3"},{url:"/icons/android-icon-48x48.png",revision:"96040ea15f598f7901250dbf49a2f976"},{url:"/icons/android-icon-72x72.png",revision:"278513eb638109ad30eadb3d168fc3f3"},{url:"/icons/android-icon-96x96.png",revision:"fd902ae7ddf8f836bfb175223a1b2e86"},{url:"/icons/apple-icon-114x114.png",revision:"566287a7a74ad48c5431433c5a590cd1"},{url:"/icons/apple-icon-120x120.png",revision:"63a03dca5480fe4e85b2379a837ccd64"},{url:"/icons/apple-icon-144x144.png",revision:"c54ba85974d159ffdebfae531e16bb33"},{url:"/icons/apple-icon-152x152.png",revision:"dcb0e25ace03dd9bcdbf90790d8e889b"},{url:"/icons/apple-icon-180x180.png",revision:"846e489c0b52364bd232f00dc9b14d3d"},{url:"/icons/apple-icon-57x57.png",revision:"3f54cd6f1901ba3dbe717ed90a3a0d22"},{url:"/icons/apple-icon-60x60.png",revision:"8ab63b2055e3408d78e719528fdea991"},{url:"/icons/apple-icon-72x72.png",revision:"278513eb638109ad30eadb3d168fc3f3"},{url:"/icons/apple-icon-76x76.png",revision:"822c3b94bdedab28069d5047d0b096d6"},{url:"/icons/apple-icon-precomposed.png",revision:"e29d39dffb02bb31a40207b35aa03c92"},{url:"/icons/apple-icon.png",revision:"e29d39dffb02bb31a40207b35aa03c92"},{url:"/icons/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/icons/favicon-16x16.png",revision:"dbca69e28422b6c4ee7494ee7d7437fb"},{url:"/icons/favicon-32x32.png",revision:"4a27942c6ea671ce96b010449fc04b3a"},{url:"/icons/favicon-96x96.png",revision:"fd902ae7ddf8f836bfb175223a1b2e86"},{url:"/icons/favicon.ico",revision:"4c221b238e2564fea2aba092beea7efd"},{url:"/icons/ms-icon-144x144.png",revision:"c54ba85974d159ffdebfae531e16bb33"},{url:"/icons/ms-icon-150x150.png",revision:"7e775d017d917a86533e778a5899d651"},{url:"/icons/ms-icon-310x310.png",revision:"ab4ab92df223f9b781391b99e8008bea"},{url:"/icons/ms-icon-70x70.png",revision:"da1989aabb1cd475a121c6d938f816eb"},{url:"/img/CW..svg",revision:"8d04c7909765130ce7c13d40854ec548"},{url:"/manifest.json",revision:"44e60d85e247ff959ea70d36f970f352"},{url:"/wcursor.png",revision:"fcfdf3445d926013aaa325e98c4785e2"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:s,state:i})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const n=e.pathname;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));