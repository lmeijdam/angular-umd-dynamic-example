import { Route } from '@angular/router';
import { ModuleService } from './../services/module.service';
import { ModuleData } from './../models/module.model';
import { Component, OnInit, Compiler } from '@angular/core';
import { RouterService } from '../services/router.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';


@Component({
    selector: 'portal',
    templateUrl: 'portal.component.html'
})

export class PortalComponent implements OnInit {
    installedModules$: any;
    errorMessage: string;
    errorVisible = false;

    constructor(private routerService: RouterService, private moduleService: ModuleService) {
    }

    ngOnInit() {
        // please note: modules.json will alwasy return registered as false.
        this.installedModules$ = this.moduleService.loadModules().do(res =>
            res.forEach(x => {
                if(x.registered)
                    this.registerRoute(x);
            })
        );
    }

    enableModule(moduleToEnable: ModuleData) {
        // enable or disable module
        if(this.isRegistered(moduleToEnable)) {
            this.routerService.unRegisterRoute(moduleToEnable.path);
        } else {
            this.registerRoute(moduleToEnable);
        }
    }

    isRegistered(moduleData: ModuleData): boolean {
        return this.routerService.routeIsRegistered(moduleData.path);
    }

    private registerRoute(moduleToEnable: ModuleData){
        // load up the umd file and register the route whenever succeeded.
        this.moduleService.loadModule(moduleToEnable).subscribe((exports) => {
           this.routerService.createAndRegisterRoute(moduleToEnable, exports);
        }, () => this.showError(`${moduleToEnable.moduleName} could not be found, did you copy the umd file to ${moduleToEnable.location}?`));
    }

    private showError(message: string) {
        this.errorMessage = message;
        this.errorVisible = true;
    }

    closeError() {
        this.errorVisible = false;
    }
}