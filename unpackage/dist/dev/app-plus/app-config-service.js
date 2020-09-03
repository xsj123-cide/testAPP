
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index/index","pages/login/ortherLogin/ortherLogin","pages/index/index","pages/login/login","pages/order/order","pages/mine/mine","pages/mine/setting/setting","pages/mine/myInfo/myInfo","pages/mine/myTaocan/myTaocan","pages/pay/successPay/successPay","pages/mine/wode/wode","pages/sjcenter/sjcenter","pages/pay/payDetail/payDetail","pages/minesj/minesj","pages/order/orderDetail/orderDetail","pages/minedp/minedp","pages/mine/huiyuan/huiyuan","pages/msCenter/msCenter","pages/msCenter/msDetail/msDetail","pages/login/regist/regist"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#bfbfbf","selectedColor":"#d81e06","backgroundColor":"#FFFFFF","fontSize":"11px","iconWidth":"18px","spacing":"5px","height":"49px","list":[{"text":"首页","pagePath":"pages/index/index/index","iconPath":"static/icon/index/tabbar/taocan.png","selectedIconPath":"static/icon/index/tabbar/taocan_active.png"},{"text":"商机中心","pagePath":"pages/sjcenter/sjcenter","iconPath":"static/icon/index/tabbar/taocan.png","selectedIconPath":"static/icon/index/tabbar/taocan_active.png"},{"text":"信息","pagePath":"pages/msCenter/msCenter","iconPath":"static/icon/index/tabbar/order.png","selectedIconPath":"static/icon/index/tabbar/order_active.png"},{"text":"我","pagePath":"pages/mine/wode/wode","iconPath":"static/icon/index/tabbar/mine.png","selectedIconPath":"static/icon/index/tabbar/mine_active.png"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"unimoren","compilerVersion":"2.8.8","entryPagePath":"pages/index/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","pullToRefresh":{"support":true,"offset":"23%","style":"circle","color":"#F76454"}}},{"path":"/pages/login/ortherLogin/ortherLogin","meta":{},"window":{"navigationStyle":"custom","pullToRefresh":{"support":true,"offset":"23%","style":"circle","color":"#F76454"}}},{"path":"/pages/index/index","meta":{},"window":{"navigationBarBackgroundColor":"#d81e06","navigationStyle":"custom","pullToRefresh":{"support":true,"offset":"23%","style":"circle","color":"#F76454"}}},{"path":"/pages/login/login","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/order/order","meta":{},"window":{"navigationStyle":"custom","pullToRefresh":{"support":true,"offset":"23%","style":"circle","color":"#F76454"}}},{"path":"/pages/mine/mine","meta":{},"window":{"navigationStyle":"custom","pullToRefresh":{"support":true,"offset":"23%","style":"circle","color":"#F76454"}}},{"path":"/pages/mine/setting/setting","meta":{},"window":{"navigationStyle":"custom","pullToRefresh":{"support":true,"offset":"23%","style":"circle","color":"#F76454"}}},{"path":"/pages/mine/myInfo/myInfo","meta":{},"window":{"navigationStyle":"custom","pullToRefresh":{"support":true,"offset":"23%","style":"circle","color":"#F76454"}}},{"path":"/pages/mine/myTaocan/myTaocan","meta":{},"window":{"navigationStyle":"custom","pullToRefresh":{"support":true,"offset":"23%","style":"circle","color":"#F76454"}}},{"path":"/pages/pay/successPay/successPay","meta":{},"window":{"navigationStyle":"custom","pullToRefresh":{"support":true,"offset":"23%","style":"circle","color":"#F76454"}}},{"path":"/pages/mine/wode/wode","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","pullToRefresh":{"support":true,"offset":"23%","style":"circle","color":"#F76454"}}},{"path":"/pages/sjcenter/sjcenter","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","pullToRefresh":{"support":true,"offset":"23%","style":"circle","color":"#F76454"}}},{"path":"/pages/pay/payDetail/payDetail","meta":{},"window":{"navigationStyle":"custom","pullToRefresh":{"support":true,"offset":"23%","style":"circle","color":"#F76454"}}},{"path":"/pages/minesj/minesj","meta":{},"window":{"navigationStyle":"custom","pullToRefresh":{"support":true,"offset":"23%","style":"circle","color":"#F76454"}}},{"path":"/pages/order/orderDetail/orderDetail","meta":{},"window":{"navigationStyle":"custom","pullToRefresh":{"support":true,"offset":"23%","style":"circle","color":"#F76454"}}},{"path":"/pages/minedp/minedp","meta":{},"window":{"navigationStyle":"custom","pullToRefresh":{"support":true,"offset":"23%","style":"circle","color":"#F76454"}}},{"path":"/pages/mine/huiyuan/huiyuan","meta":{},"window":{"navigationStyle":"custom","pullToRefresh":{"support":true,"offset":"23%","style":"circle","color":"#F76454"}}},{"path":"/pages/msCenter/msCenter","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","pullToRefresh":{"support":true,"offset":"23%","style":"circle","color":"#F76454"}}},{"path":"/pages/msCenter/msDetail/msDetail","meta":{},"window":{"navigationStyle":"custom","pullToRefresh":{"support":true,"offset":"23%","style":"circle","color":"#F76454"}}},{"path":"/pages/login/regist/regist","meta":{},"window":{"navigationStyle":"custom","pullToRefresh":{"support":true,"offset":"23%","style":"circle","color":"#F76454"}}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
