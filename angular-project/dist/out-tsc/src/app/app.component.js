import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
let AppComponent = class AppComponent {
    title = 'angular-project';
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        standalone: true,
        imports: [RouterOutlet, ButtonComponent, FooterComponent, HeaderComponent, MainComponent],
        templateUrl: './app.component.html',
        styleUrl: './app.component.css',
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map