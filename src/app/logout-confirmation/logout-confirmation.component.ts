import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-logout-confirmation',
  template: `
    <div class="confirmation-popup">
      <p>Are you sure you want to logout?</p>
      <button (click)="confirm()">Yes</button>
      <button (click)="cancel()">No</button>
    </div>
  `,
  styleUrls: ['./logout-confirmation.component.css']
})
export class LogoutConfirmationComponent {
  @Output() confirmed = new EventEmitter<void>();
  @Output() canceled = new EventEmitter<void>();

  confirm() {
    this.confirmed.emit();
  }

  cancel() {
    this.canceled.emit();
  }
}
