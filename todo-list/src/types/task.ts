export type Task = {
    name: string;
    dueDate: string;
    priorityLevel: string;
    notes: string;
    checkList: checkListItem[];
};

export type checkListItem = {
    action: string;
    completion: boolean;
};