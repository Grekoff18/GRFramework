import { inBrowser } from "../../../config/index";
import { Component } from "../../../types/Component";

export const getMainSelector = (
  selector: string,
  component: Component
): HTMLElement | Element | null => {
  if (selector && inBrowser) {
    console.log(component);
    return document.querySelector(selector);
  }
  return null;
};
