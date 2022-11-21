import GRTree from "../tree";
export default class GRInstance {
    constructor(options) {
        this.options = { options };
        new GRTree(GRTree.treeStore).addNode(this.options);
    }
}
//# sourceMappingURL=index.js.map