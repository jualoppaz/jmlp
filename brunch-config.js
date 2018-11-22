exports.config = {
    npm: {
        enabled: false
    },
    conventions: {
        ignored: [
            /^app(\/|\\)angular(\/|\\)styles(\/|\\).*_.*\.scss$/,
            /^app(\/|\\)server/
        ]
    },
    fileListInterval: 2000,
    files: {
        javascripts: {
            joinTo: {
                "js/app.js": /^app(\/|\\)angular/,
                "js/vendor.js": /^bower_components/
            },
            order: {
                before: [
                    "bower_components/jquery/dist/jquery.js",
                    "bower_components/angular/angular.js",
                    "bower_components/angular-ui-router/release/angular-ui-router.js",
                    "bower_components/angular-animate/angular-animate.js",
                    "bower_components/angular-touch/angular-touch.js",
                    "bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
                    "app/angular/modules/definitions.js"
                ],
                after: ["app/angular/router/router.js", "app/angular/app.js"]
            }
        },
        stylesheets: {
            order: {
                before: []
            },
            joinTo: {
                "css/app.css": /^app(\/|\\)angular(\/|\\)styles/,
                "css/vendor.css": /^bower_components/
            }
        },
        templates: {
            joinTo: {
                "js/templates.js": /^app(\/|\\)angular(\/|\\)views/
            }
        }
    },
    modules: {
        wrapper: false,
        definition: false
    },
    plugins: {
        jshint: {
            pattern: /^app(\/|\\)angular(\/|\\).*\.js$/,
            options: {
                strict: true,
                bitwise: true,
                curly: true,
                unused: true,
                eqeqeq: true
            },
            warnOnly: true
        },
        digest: {
            alwaysRun: false,
            environments: ["production"]
        },
        afterBrunch: [
            "rm -f public/config/config_*.json",
            '([ -d public/webfonts ] || mkdir "public/webfonts") && cp bower_components/components-font-awesome/webfonts/* public/webfonts',
            '([ -d public/fonts ] || mkdir "public/fonts") && cp bower_components/bootstrap/fonts/* public/fonts'
        ],
        uglify: {
            mangle: false
        },
        browserSync: {
            watch: true,
            port: 3333,
            logLevel: "debug"
        }
    },
    overrides: {
        production: {
            plugins: { off: ["jshint-brunch"] }
        }
    },
    // Configuracion especifica del servidor NodeJS utilizado mediante Brunch
    server: {
        path: "app.js",
        port: 3333,
        base: "/"
    }
};
