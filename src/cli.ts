#!/usr/bin/env node
import { GRInstance, GRTree } from "./main";

new GRInstance({
  propData: {
    parent: "1",
  },
  children: [],
  tag: "p",
});
new GRInstance({
  propData: {
    parent: "2",
  },
  children: [],
  tag: "div",
});

console.log("grtree", GRTree.treeStore);
