/*jslint es6 */
/*global document, XMLHttpRequest, CrComLib */
var serviceModule = (function () {
    'use strict';
    /**
     * All public and local(prefix '_') properties
     */
    var ch5Emulator = CrComLib.Ch5Emulator.getInstance();

    /**
     * This is public method so that we can use in other module also
     * @param {string} url pass json file path
     * @param {object} callback method to get the json response
     */
    function loadJSON(url, callback) {
        let xhr = new XMLHttpRequest();
        xhr.overrideMimeType('application/json');
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                callback(xhr.responseText);
            }
        };
        xhr.send(null);
    }

    /**
     * This is public method to init the emulator
     * @param {object} emulator pass your emulator response
     */
    function initEmulator(emulator) {
        CrComLib.Ch5Emulator.clear();
        ch5Emulator = CrComLib.Ch5Emulator.getInstance();
        ch5Emulator.loadScenario(emulator);
        ch5Emulator.run();
    }

    /**
     * All public method and properties exporting here
     */
    return {
        loadJSON: loadJSON,
        initEmulator: initEmulator
    };
}());