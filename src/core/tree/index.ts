import { Component } from "../../../types/Component";
import error from "../util/error";
import { ErrorMsg } from "../../../enums/error";

export default class GRTree {
  // Virtual tree state
  static treeStore: Array<Component>;

  constructor(prevState: Array<Component> | undefined | []) {
    // Set state value from prev state or set empty array
    if (prevState) {
      GRTree.treeStore = prevState;
    } else {
      GRTree.treeStore = [];
    }
  }

  // Add new node for virtual tree
  addNode(node: Component): void {
    if (node && GRTree.treeStore) {
      GRTree.treeStore.push(node);
    } else {
      error(ErrorMsg.NodeNotFound);
    }
  }
}
