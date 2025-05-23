import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
  standalone: false,
})
export class AddTaskPage {
  task = {
    name: '',
    description: '',
    dueDate: '',
    priority: 'Medium',
    category: 'Interior'
  };
  priorities = ['Low', 'Medium', 'High'];
  categories = ['Interior', 'Exterior', 'Systems'];

  constructor(private modalCtrl: ModalController) {}

  close() {
    this.modalCtrl.dismiss();
  }
  cancel() {
    this.modalCtrl.dismiss();
  }
  addTask() {}
} 