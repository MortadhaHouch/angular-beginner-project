import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { BottomNavLinksComponent } from '../bottom-nav-links/bottom-nav-links.component';
let FooterComponent = class FooterComponent {
    footerText = "footer text";
    constructor() {
    }
    ngOnInit() {
    }
};
FooterComponent = __decorate([
    Component({
        selector: 'app-footer',
        standalone: true,
        imports: [BottomNavLinksComponent],
        templateUrl: './footer.component.html',
        styleUrl: './footer.component.css'
    })
], FooterComponent);
export { FooterComponent };
//# sourceMappingURL=footer.component.js.map