module.exports = function(config) {

    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath : '',

        // How long will Karma wait for a message from a browser before disconnecting from it (in ms).
        browserNoActivityTimeout: 2000000,

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['openui5', 'qunit'],

        // list of files / patterns to load in the browser
        files: [],

        // list of files to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},

        // In case an absolute URL is used at some point of the code, a proxy configuration is required.
        proxies: {},

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress','junit'],

        // the default configuration
        junitReporter: {
            outputDir: 'reports', // results will be saved as $outputDir/$browserName.xml
            outputFile: 'junit-opa5.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile
            suite: '', // suite will become the package name attribute in xml testsuite element
            useBrowserName: false, // add browser name to report and classes names
            nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
            classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element
            properties: {} // key value pair of properties to add to the <properties> section of the report
        },

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS_custom'],

        // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
        phantomjsLauncher: {
          exitOnResourceError: false
        },

        // you can define custom flags
        customLaunchers: {
            PhantomJS_custom: {
                base: 'PhantomJS',
                options: {
                    viewportSize: {
                        width: 1440,
                        height: 900
                    },
                    customHeaders: {
                        DNT: "1"
                    },
                    windowName: 'my-window',
                    settings: {
                        webSecurityEnabled: false,
                        userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.87 Safari/537.36"
                    },
                },
                flags: ['--load-images=true', '--debug=false', '--disk-cache=false'],
                debug: false
            }
        },

        openui5: {
            path: 'https://sapui5.hana.ondemand.com/1.44.16/resources/sap-ui-core.js',
            useMockServer: false
        },

        // How the client should execute the test, like run in an iframe, capture the console and so on.
        client: {
            captureConsole: true,
            clearContext: true,
            useIframe: false,
            qunit: {
                showUI: false,
                testTimeout: 15000,
                autostart: false,
                autoload: false
            },
            openui5: {
                config: {
                    theme: 'sap_belize',
                    libs: 'sap.m',
                    compatVersion: 'edge',
                    frameOptions: 'deny',
                    preload: 'async',
                    animation: 'false',
                    debug: 'false',
                    resourceroots: {
                        "test": "/test/",
                        "your.app": "/"
                    },
                    'xx-debugModuleLoading': 'true',
                    'xx-showLoadErrors': 'true',
                    'xx-supportedLanguages': ['en']
                }
            }
        },

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_ERROR,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    });
};