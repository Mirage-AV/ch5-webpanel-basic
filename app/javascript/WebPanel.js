    //let WebXPanel = import ("../libraries/webxpanel/dist/index.js");
   //import * as WebXPanel from "../libraries/webxpanel/dist/index.js";
    const configuration = {
        host: '192.168.1.203', // defaults to window.location.host
        ipId: '0x81', // string representing a hex value. Might contain "0x" or not. Defaults to "0x03"
        port: '49200',
        tokenurl: 'https://192.168.1.203/cws/websocket/getWebSocketToken'
    };
    
    console.log(`Here WebXPanel version:${WebXPanel.getVersion()}`);
    //console.log(`WebXPanel build date:${WebXPanel.getBuildDate()}`);
    /*
    WebXPanel.default.addEventListener(WebXPanel.WebXPanelEvents.CONNECT_CIP, ({detail}) => {
        const
        {url, ipId, roomId} = detail;
        console.log(`Connected to ${url},${parseInt(ipId,16)},${roomId}`);
     });
     */
    if (WebXPanel.isActive) {
        WebXPanel.default.initialize(configuration);
    }