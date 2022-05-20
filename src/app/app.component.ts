import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  inputValue: string = '';

  display(str: string) {
    this.inputValue += str;
  }

  clear() {
    this.inputValue = '';
  }

  backspace() {
    this.inputValue = this.inputValue.slice(0, -1);
  }

  calculate() {
    this.inputValue = eval(this.inputValue);
  }
}
