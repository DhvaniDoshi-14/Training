import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.scss'
})
export class DatabindingComponent {
  courseName: string = "Angular 18";
  inputType = "checkbox";
  rollNo: number = 123;
  isIndian: boolean = false;

  currentDate: Date = new Date();

  constructor() {

  }

  showMessage(message : string) {
    alert(message);
  }

  changeCourseName() {
   this.courseName = "React JS";
  }

}
