import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.page.html',
  styleUrls: ['./edit-task.page.scss'],
  standalone: false,
})
export class EditTaskPage {
  @Input() task: any;
  editTaskForm: FormGroup;
  priorities = ['Low', 'Medium', 'High', 'Urgent'];
  categories = ['Interior', 'Exterior', 'Systems'];

  constructor(private modalCtrl: ModalController, private fb: FormBuilder) {
    this.editTaskForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      dueDate: ['', Validators.required],
      priority: ['Medium', Validators.required],
      category: ['Interior', Validators.required]
    });
  }

  ngOnInit() {
    if (this.task) {
      this.editTaskForm.patchValue(this.task);
    }
  }

  close() {
    this.modalCtrl.dismiss();
  }
  cancel() {
    this.modalCtrl.dismiss();
  }
  saveChanges() {
    if (this.editTaskForm.valid) {
      this.modalCtrl.dismiss(this.editTaskForm.value);
    }
  }

  async openEditTaskModal(task: any) {
    const modal = await this.modalCtrl.create({
      component: EditTaskPage,
      componentProps: { task }
    });
    modal.onDidDismiss().then((result) => {
      if (result.data) {
        // handle updated task here
      }
    });
    await modal.present();
  }
} 