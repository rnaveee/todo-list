export type Task = {
    name: string;
    dueDate: string;
    checkList: checkListItem[];
};

type checkListItem = {
    action: string;
    completion: boolean;
};