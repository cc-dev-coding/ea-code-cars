import { Model } from './Model';

export class Make {
    name: String;
    models: Model[];

    constructor(name: String) {
        this.name = name;
        this.models = [];
    }

}