
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/Digital-Task/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Program%20Files/Git/Digital-Task/home",
    "route": "/Program%20Files/Git/Digital-Task"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-22BTNVP4.js"
    ],
    "route": "/Program%20Files/Git/Digital-Task/home"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6621, hash: 'b54643011725599e488d9a643b0e09c50b9a4a54c76f12b4634096d392b997d0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2095, hash: '221cafd33cf5b3b4641562885640c6a47704cc4f266967f10c436659268f8b22', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-EMAIEGWJ.css': {size: 306720, hash: 'pIRYveQNUiY', text: () => import('./assets-chunks/styles-EMAIEGWJ_css.mjs').then(m => m.default)}
  },
};
