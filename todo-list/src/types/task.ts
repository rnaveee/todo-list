export type Task = {
    name: string;
    dueDate: string;
    priorityLevel: string;
    note: string;
    checkList: checkListItem[];
};

export type checkListItem = {
    action: string;
    completion: boolean;
};