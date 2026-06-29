export interface Member {
    id: string;
    name: string;
    avatar?: string;
    role: "líder" | "membro";
}