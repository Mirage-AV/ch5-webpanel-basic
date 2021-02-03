    const configuration = {
        //host: '192.168.1.203', // defaults to window.location.host
        ipId: '0x81', // string representing a hex value. Might contain "0x" or not. Defaults to "0x03"
        //port: '49200' //no longer required, use this if you have a different websocket port set on the processor
    };
    
    //check if running as a web panel before initializing the connection
    if (WebXPanel.isActive) {
        WebXPanel.default.initialize(configuration);
    }