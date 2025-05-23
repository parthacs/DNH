export interface Task {
    id: string;
    name: string;
    description: string;
    dueDate: Date;
    priority: 'low' | 'medium' | 'high';
    category: string;
    isCompleted: boolean;
    createdAt: Date;
} 