(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'https://unpkg.com/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the scripts folder
            scripts: '../scripts',

            // angular bundles
            '@angular/core': 'npm:@angular/core@2.0.0-rc.6/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common@2.0.0-rc.6/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler@2.0.0-rc.6/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser@2.0.0-rc.6/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@2.0.0-rc.6/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http@2.0.0-rc.6/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router@2.0.0-rc.6/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms@2.0.0-rc.6/bundles/forms.umd.js',

            // angular testing umd bundles
            '@angular/core/testing': 'npm:@angular/core@2.0.0-rc.6/bundles/core-testing.umd.js',
            '@angular/common/testing': 'npm:@angular/common@2.0.0-rc.6/bundles/common-testing.umd.js',
            '@angular/compiler/testing': 'npm:@angular/compiler@2.0.0-rc.6/bundles/compiler-testing.umd.js',
            '@angular/platform-browser/testing': 'npm:@angular/platform-browser@2.0.0-rc.6/bundles/platform-browser-testing.umd.js',
            '@angular/platform-browser-dynamic/testing': 'npm:@angular/platform-browser-dynamic@2.0.0-rc.6/bundles/platform-browser-dynamic-testing.umd.js',
            '@angular/http/testing': 'npm:@angular/http/bundles@2.0.0-rc.6/http-testing.umd.js',
            '@angular/router/testing': 'npm:@angular/router/bundles@2.0.0-rc.6/router-testing.umd.js',
            '@angular/forms/testing': 'npm:@angular/forms/bundles@2.0.0-rc.6/forms-testing.umd.js',

            // other libraries
            'rxjs': 'npm:rxjs',
            'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
            'ts': 'npm:plugin-typescript@4.0.10/lib/plugin.js',
            'typescript': 'npm:typescript@1.9.0-dev.20160409/lib/typescript.js',

        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            scripts: {
                boot: './boot.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'angular2-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            }
        }
    });
})(this);