import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'home',
    templateUrl: 'home.html'
})
export class HomePage implements OnInit {

    public helloText : string;
    private count : number = 0;

    public onTap() {
        this.helloText = 'Hello Nativescript!: '+(++this.count);
    }

    ngOnInit() {
        console.log("Initlaizing Home Page..");
    }
}
