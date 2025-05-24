import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditTaskPage } from '../edit-task/edit-task.page';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
  standalone: false
})
export class TasksPage {
  tasks = [
    {
      name: 'Test smoke detectors',
      description: 'Press the test button on each detector to ensure it works',
      dueDate: '2025-05-22',
      priority: 'Urgent',
      category: 'Interior'
    },
    {
      name: 'Replace HVAC filter',
      description: 'Replace with a new 16x20x1 filter',
      dueDate: '2025-05-24',
      priority: 'Medium',
      category: 'Systems'
    }
  ];

  constructor(private modalCtrl: ModalController) {}

  async openEditTaskModal(task: any) {
    const modal = await this.modalCtrl.create({
      component: EditTaskPage,
      componentProps: { task },
      cssClass: 'edit-task-modal-class'
    });
    modal.onDidDismiss().then((result) => {
      if (result.data) {
        // handle updated task here
      }
    });
    await modal.present();
  }
} 