import { Component, ComponentOptions } from "../../../types/Component";
export default class GRInstance implements Component {
    options: {
        options: ComponentOptions;
    };
    constructor(options: ComponentOptions);
}
