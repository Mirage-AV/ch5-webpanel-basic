/*global document, CrComLib, appModule, serviceModule, sourceModule, lightingModule */
var translateModule = (function () {
    'use strict';
    /**
     * All public and local(prefix '_') properties
     */
    var langData = [];
    var crComLibTranslator = CrComLib.translationFactory.translator;
    var currentLng = document.getElementById('currentLng');
    var defaultLng = 'en';
    var navItemsSize = 0;
    var languageTimer;

    /**
     * This is public method to fetch language data(JSON).
     * @param {string} lng is language code string like en, fr etc...
     */
    function getLanguage(lng) {
        if (!langData[lng]) {
            serviceModule.loadJSON('./assets/data/translation/' + lng + '.json', function (response) {
                langData[lng] = {
                    translation: JSON.parse(response)
                };
                setLanguage(lng);
            });
        } else {
            setLanguage(lng);
        }
    }

    function setLanguage(lng) {
        // update selected language
        crComLibTranslator.changeLanguage(lng);
        // slider bottom thumb object
        let swiperObj = langData[lng].translation.swiperSlides;

        // Trigger only once
        if (swiperObj.length !== navItemsSize) {
            navItemsSize = swiperObj.length;
            appModule.triggerviewOnInit(swiperObj.length);
            appModule.navItemSize = swiperObj.length;
        }

        // Changing the button name
        swiperObj.forEach(function (swiper, idx) {
            CrComLib.publishEvent('s', 'nav_label_' + (idx), swiper.thumbTitle);
        });
    }

    /**
     * This is private method to init ch5 i18next translate library
     */
    function initCh5LibTranslate() {
        CrComLib.registerTranslationInterface(crComLibTranslator, '-+', '+-');
        crComLibTranslator.init({
            fallbackLng: 'en',
            language: currentLng,
            debug: true,
            resources: langData
        });
    }

    /**
     * This is public method, it invokes on language change click in UI
     * @param {string} lng is language code string like en, fr etc...
     * @param {object} self is current elememt
     */
    function changeLang(lng, self) {
        // add active class
        let langNav = document.getElementById('changeLang');
        let current = langNav.getElementsByClassName('active');
        if (current.length > 0) {
            current[0].className = current[0].className.replace(' active', '');
        }
        self.className += ' active';
        currentLng.innerText = lng;

        clearTimeout(languageTimer);
        languageTimer = setTimeout(function () {
            if (lng !== defaultLng) {
                defaultLng = lng;
                // invoke on language click
                getLanguage(lng);
            }
        }, 500);

    }

    /**
     * All public or private methods which need to call on init
     */
    initCh5LibTranslate();

    /**
     * All public method and properties exporting here
     */
    return {
        getLanguage: getLanguage,
        changeLang: changeLang,
        currentLng: currentLng,
        defaultLng: defaultLng
    };
}());