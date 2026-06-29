import type { Activity } from "./activity";

export interface Saturday {
    id: string;
    date: string;
    theme: string;
    activities: Activity[];
}