import { Show } from './Show';

export class Model {
    name: String;
    shows: Show[];

    constructor(name: String) {
        this.name = name;
        this.shows = [];
    }

}
