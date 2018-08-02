(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('moduled', ['exports', '@angular/core', '@angular/router'], factory) :
    (factory((global.moduled = {}),global.ng.core,global.ng.router));
}(this, (function (exports,core,router) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ModuledService = (function () {
        function ModuledService() {
        }
        return ModuledService;
    }());
    ModuledService.decorators = [
        { type: core.Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    ModuledService.ctorParameters = function () { return []; };
    /** @nocollapse */ ModuledService.ngInjectableDef = core.defineInjectable({ factory: function ModuledService_Factory() { return new ModuledService(); }, token: ModuledService, providedIn: "root" });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ModuledComponent = (function () {
        /**
         * @param {?} router
         * @param {?} injector
         */
        function ModuledComponent(router$$1, injector) {
            this.router = router$$1;
            this.injector = injector;
        }
        /**
         * @return {?}
         */
        ModuledComponent.prototype.ngOnInit = function () {
            console.log(this.injector);
        };
        /**
         * @param {?} path
         * @return {?}
         */
        ModuledComponent.prototype.navigate = function (path) {
            this.router.navigate(["moduled/" + path]);
        };
        return ModuledComponent;
    }());
    ModuledComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'lib-moduled',
                    template: "\n    <div class=\"btn-group btn-primary\">\n      <button class=\"btn\" (click)=\"navigate('a')\">Component A</button>\n      <button class=\"btn\" (click)=\"navigate('b')\">Component B</button>\n      <button class=\"btn\" (click)=\"navigate('c')\">Component C</button>\n  </div>\n  <div>\n    <router-outlet></router-outlet>\n  </div>\n  ",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    ModuledComponent.ctorParameters = function () {
        return [
            { type: router.Router, },
            { type: core.Injector, },
        ];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ComponentaComponent = (function () {
        function ComponentaComponent() {
        }
        /**
         * @return {?}
         */
        ComponentaComponent.prototype.ngOnInit = function () {
        };
        return ComponentaComponent;
    }());
    ComponentaComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'lib-componenta',
                    template: "<span class=\"label label-info\">Info</span>\n<span class=\"label label-success\">Success</span>\n<span class=\"label label-warning\">Warning</span>\n<span class=\"label label-danger\">Error</span>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    ComponentaComponent.ctorParameters = function () { return []; };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ComponentbComponent = (function () {
        function ComponentbComponent() {
        }
        /**
         * @return {?}
         */
        ComponentbComponent.prototype.ngOnInit = function () {
        };
        return ComponentbComponent;
    }());
    ComponentbComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'lib-componentb',
                    template: "<span class=\"spinner\">\n    Loading...\n</span>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    ComponentbComponent.ctorParameters = function () { return []; };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ComponentcComponent = (function () {
        function ComponentcComponent() {
        }
        /**
         * @return {?}
         */
        ComponentcComponent.prototype.ngOnInit = function () {
        };
        return ComponentcComponent;
    }());
    ComponentcComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'lib-componentc',
                    template: "<input type=\"date\" clrDate>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    ComponentcComponent.ctorParameters = function () { return []; };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ModuledModule = (function () {
        function ModuledModule() {
        }
        return ModuledModule;
    }());
    ModuledModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        router.RouterModule.forChild([
                            {
                                path: '', component: ModuledComponent, children: [
                                    {
                                        path: '', redirectTo: 'a'
                                    },
                                    {
                                        path: 'a', component: ComponentaComponent
                                    },
                                    {
                                        path: 'b', component: ComponentbComponent
                                    },
                                    {
                                        path: 'c', component: ComponentcComponent
                                    }
                                ]
                            }
                        ])
                    ],
                    declarations: [ModuledComponent, ComponentaComponent, ComponentbComponent, ComponentcComponent],
                    exports: [ModuledComponent]
                },] },
    ];

    exports.ModuledService = ModuledService;
    exports.ModuledComponent = ModuledComponent;
    exports.ModuledModule = ModuledModule;
    exports.ɵa = ComponentaComponent;
    exports.ɵb = ComponentbComponent;
    exports.ɵc = ComponentcComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=moduled.umd.js.map
