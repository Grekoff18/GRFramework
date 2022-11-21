import { Component } from "../../../types/Component";
export default class GRTree {
    static treeStore: Array<Component>;
    constructor(prevState: Array<Component> | undefined | []);
    addNode(node: Component): void;
}
