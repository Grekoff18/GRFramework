import { Component } from "../../../types/Component";
import { Builder } from "../../../types/Builder";
import { inBrowser } from "../../../config/index";
import error from "../util/error";
import { ErrorMsg } from "../../../enums/error";
export default class GRBuilder implements Builder {
  rootElement?: HTMLElement | Element | null | undefined = null;
  selector?: string | null;
  component?: Component | null;

  constructor(selector: string, component: Component) {
    this.selector = selector;
    this.component = component;
    GRBuilder.getMainSelector(this.selector, this.component);
  }

  // Return root selector
  static getMainSelector(
    selector: string,
    component: Component
  ): HTMLElement | Element | null {
    console.log("getMainSelector", { selector, component });
    if (selector && component && inBrowser) {
      const rootSelector = document.querySelector(selector);
      if (!rootSelector) error(ErrorMsg.SelectorNotFound);
      return rootSelector;
    }
    // TODO: Uncomment it when publish package
    // else {
    //   error(ErrorMsg.CallSelectorOutsideBrowser)
    //   return null;
    // }
    return null;
  }
}
