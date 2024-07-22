export interface ITodo {
        id?: string;
        titel: string;
        body: string | null;
        completed: boolean;
        createdAt?: Date;
}