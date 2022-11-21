import error from "../util/error";
export default class GRTree {
    constructor(prevState) {
        // Set state value from prev state or set empty array
        if (prevState) {
            GRTree.treeStore = prevState;
        }
        else {
            GRTree.treeStore = [];
        }
    }
    // Add new node for virtual tree
    addNode(node) {
        if (node && GRTree.treeStore) {
            GRTree.treeStore.push(node);
        }
        else {
            error("Node is not provided" /* NodeNotFound */);
        }
    }
}
//# sourceMappingURL=index.js.map