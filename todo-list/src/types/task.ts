export type Task = {
    name: string;
    dueDate: string;
    checkList: checkListItem[];
};

export type checkListItem = {
    action: string;
    completion: boolean;
};