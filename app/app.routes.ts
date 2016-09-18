import {RouterConfig} from "@angular/router";
import {nsProvideRouter} from "nativescript-angular/router"
import {HomePage} from "./home.component";

export const routes: RouterConfig = [
    { path: '', component: HomePage }
];

export const APP_ROUTER_PROVIDERS = [
    nsProvideRouter(routes, {})
];