import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { fetchData } from '../../../utils/fetchData';
let MainComponent = class MainComponent {
    data = null;
    error = null;
    tasks = [];
    users = [];
    photos = [];
    albums = [];
    posts = [];
    addresses = [];
    mainText = "main text";
    constructor() {
    }
    async fetchData() {
        try {
            this.data = await fetchData("https://jsonplaceholder.typicode.com/todos", "GET", null);
            if (Array.isArray(this.data)) {
                this.tasks = this.data;
            }
        }
        catch (error) {
            if (error instanceof Error) {
                this.error = error;
            }
        }
    }
    ngOnInit() {
        this.fetchData();
    }
};
MainComponent = __decorate([
    Component({
        selector: 'app-main',
        standalone: true,
        imports: [ButtonComponent],
        templateUrl: './main.component.html',
        styleUrl: './main.component.css'
    })
], MainComponent);
export { MainComponent };
//# sourceMappingURL=main.component.js.map