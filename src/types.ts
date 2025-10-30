export interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    startDate: Date;
    endDate: Date;
    assignedTo: string;
    color: string;
};

export interface TimeSlot {
    start: Date;
    end: Date;
}

export interface User {
    id: number;
    name: string;
    firstName: string;
    email: string;
    department: string;
    role: string;
    tasks: Task[];
}

//Tasks needs also the worker's name!
//PROBLEM: What if multiple tasks having similar deadlines are assigned to one user? This would likely cause visual overlapping on the timeline.