(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@clr/angular')) :
    typeof define === 'function' && define.amd ? define('moduleb', ['exports', '@angular/core', '@angular/router', '@clr/angular'], factory) :
    (factory((global.moduleb = {}),global.ng.core,global.ng.router,null));
}(this, (function (exports,core,router,angular) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ModulebService = (function () {
        function ModulebService() {
        }
        return ModulebService;
    }());
    ModulebService.decorators = [
        { type: core.Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    ModulebService.ctorParameters = function () { return []; };
    /** @nocollapse */ ModulebService.ngInjectableDef = core.defineInjectable({ factory: function ModulebService_Factory() { return new ModulebService(); }, token: ModulebService, providedIn: "root" });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ModulebComponent = (function () {
        function ModulebComponent() {
        }
        /**
         * @return {?}
         */
        ModulebComponent.prototype.ngOnInit = function () {
        };
        return ModulebComponent;
    }());
    ModulebComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'lib-moduleb',
                    template: "\n  <clr-tabs>\n    <clr-tab>\n        <button clrTabLink id=\"link1\">Tab1</button>\n        <clr-tab-content id=\"content1\" *clrIfActive>\n        <div class=\"row\">\n    <div class=\"col-lg-5 col-md-8 col-sm-12 col-xs-12\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                Header\n            </div>\n            <div class=\"card-block\">\n                <div class=\"card-title\">\n                    Block\n                </div>\n                <div class=\"card-text\">\n                    ...\n                </div>\n            </div>\n            <div class=\"card-footer\">\n                <button class=\"btn btn-sm btn-link\">Footer Action 1</button>\n                <button class=\"btn btn-sm btn-link\">Footer Action 2</button>\n            </div>\n        </div>\n    </div>\n</div>\n        </clr-tab-content>\n    </clr-tab>\n    <clr-tab>\n        <button clrTabLink>Tab2</button>\n        <clr-tab-content *clrIfActive=\"true\">\n        <table class=\"table\">\n    <thead>\n        <tr>\n            <th class=\"left\">Wizard</th>\n            <th>Allegiance</th>\n            <th>Triwizard Champion?</th>\n            <th>Can Cast Fireball</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td class=\"left\">Harry</td>\n            <td>Gryffindor</td>\n            <td>Yes</td>\n            <td>No</td>\n        </tr>\n        <tr>\n            <td class=\"left\">Gandalf</td>\n            <td>Hobbits</td>\n            <td>Maybe?</td>\n            <td>I don&apos;t think so...</td>\n        </tr>\n        <tr>\n            <td class=\"left\">Obi-Wan Kenobi</td>\n            <td>Republic/Rebellion</td>\n            <td>No</td>\n            <td>No</td>\n        </tr>\n        <tr>\n            <td class=\"left\">Merlin</td>\n            <td>King Arthur</td>\n            <td>Probably invented the tournament</td>\n            <td>Solid maybe</td>\n        </tr>\n    </tbody>\n</table>\n        </clr-tab-content>\n    </clr-tab>\n</clr-tabs>\n  ",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    ModulebComponent.ctorParameters = function () { return []; };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ModulebModule = (function () {
        function ModulebModule() {
        }
        return ModulebModule;
    }());
    ModulebModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        angular.ClarityModule,
                        router.RouterModule.forChild([
                            {
                                path: '', pathMatch: 'full', component: ModulebComponent
                            }
                        ])
                    ],
                    declarations: [ModulebComponent],
                    exports: [ModulebComponent],
                    schemas: [
                        core.CUSTOM_ELEMENTS_SCHEMA
                    ]
                },] },
    ];

    exports.ModulebService = ModulebService;
    exports.ModulebComponent = ModulebComponent;
    exports.ModulebModule = ModulebModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=moduleb.umd.js.map
