import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { StyleClassModule } from 'primeng/styleclass';

@Component({
    selector: 'top-nav',
    standalone: true,
    imports: [RouterModule, CommonModule, StyleClassModule],
    templateUrl: './top-nav.component.html'
})
export class TopNavComponent {
    
}