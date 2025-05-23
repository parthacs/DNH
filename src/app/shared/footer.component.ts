import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddTaskPage } from '../add-task/add-task.page';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: false
})
export class FooterComponent {
  constructor(private modalCtrl: ModalController) {}

  async openAddTaskModal() {
    const modal = await this.modalCtrl.create({
      component: AddTaskPage,
      cssClass: 'add-task-modal-class'
    });
    await modal.present();
  }
} 