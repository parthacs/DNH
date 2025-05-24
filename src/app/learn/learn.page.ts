import { Component } from '@angular/core';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.page.html',
  styleUrls: ['./learn.page.scss'],
  standalone: false,
})
export class LearnPage {
  educationItems = [
    {
      icon: 'home-outline',
      title: 'New Homeowner Tips and Tricks',
      desc: 'Essential advice for those who just purchased their first home',
      tag: 'Beginners',
      tagClass: 'beginners'
    },
    {
      icon: 'home-outline',
      title: 'Tips for Owning an Older Home',
      desc: 'How to maintain and care for the unique characteristics of older homes',
      tag: 'Maintenance',
      tagClass: 'maintenance'
    },
    {
      icon: 'leaf-outline',
      title: 'Seasonal Home Maintenance',
      desc: 'A guide to keeping your home in top condition throughout the year',
      tag: 'Maintenance',
      tagClass: 'maintenance'
    },
    {
      icon: 'document-text-outline',
      title: 'Client Prep Checklist – Get Your Home Ready for Inspection',
      desc: 'How to prepare your home to pass inspection with flying colors',
      tag: 'Inspection',
      tagClass: 'inspection'
    }
  ];
} 