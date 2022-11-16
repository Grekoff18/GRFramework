import { Component, ComponentOptions } from "../../../types/Component";
import GRTree from "../tree";

export default class GRInstance implements Component {
  options: {options: ComponentOptions};

  constructor(options: ComponentOptions) {
    this.options = { options };
    new GRTree(GRTree.treeStore).addNode(this.options);
  }
}
