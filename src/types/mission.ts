export interface Mission {
    id: string;
    title: string;
    description?: string;
    goal: number;
    progress: number;
    deadline: string;
    responsibleIds: string[];
}