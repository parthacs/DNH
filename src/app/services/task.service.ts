import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private readonly STORAGE_KEY = 'tasks';
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  public tasks$ = this.tasksSubject.asObservable();

  constructor() {
    this.loadTasks();
  }

  private loadTasks(): void {
    const tasks = localStorage.getItem(this.STORAGE_KEY);
    if (tasks) {
      const parsedTasks = JSON.parse(tasks).map((task: any) => ({
        ...task,
        dueDate: new Date(task.dueDate),
        createdAt: new Date(task.createdAt)
      }));
      this.tasksSubject.next(parsedTasks);
    }
  }

  private saveTasks(tasks: Task[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(tasks));
    this.tasksSubject.next(tasks);
  }

  addTask(task: Omit<Task, 'id' | 'createdAt'>): void {
    const tasks = this.tasksSubject.value;
    const newTask: Task = {
      ...task,
      id: Date.now().toString(),
      createdAt: new Date(),
      isCompleted: false
    };
    this.saveTasks([...tasks, newTask]);
  }

  updateTask(task: Task): void {
    const tasks = this.tasksSubject.value;
    const index = tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      tasks[index] = task;
      this.saveTasks(tasks);
    }
  }

  deleteTask(taskId: string): void {
    const tasks = this.tasksSubject.value;
    this.saveTasks(tasks.filter(task => task.id !== taskId));
  }

  toggleTaskCompletion(taskId: string): void {
    const tasks = this.tasksSubject.value;
    const task = tasks.find(t => t.id === taskId);
    if (task) {
      task.isCompleted = !task.isCompleted;
      this.saveTasks(tasks);
    }
  }

  getTasksByDate(date: Date): Task[] {
    return this.tasksSubject.value.filter(task => {
      const taskDate = new Date(task.dueDate);
      return taskDate.toDateString() === date.toDateString();
    });
  }

  getTasksByCategory(category: string): Task[] {
    return this.tasksSubject.value.filter(task => task.category === category);
  }

  getTasksByPriority(priority: 'low' | 'medium' | 'high'): Task[] {
    return this.tasksSubject.value.filter(task => task.priority === priority);
  }

  getUpcomingTasks(): Task[] {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return this.tasksSubject.value
      .filter(task => new Date(task.dueDate) > today)
      .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());
  }
} 