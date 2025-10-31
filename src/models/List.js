// Template for my todolists
export class Todo {
    text;
    done;
    id;
    constructor(text, done, id){
        this.text = text;
        this.done = done;
        this.id = crypto.randomUUID();
    }
}