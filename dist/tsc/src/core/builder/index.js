import { inBrowser } from "../../../config/index";
import error from "../util/error";
export default class GRBuilder {
    constructor(selector, component) {
        this.rootElement = null;
        this.selector = selector;
        this.component = component;
        GRBuilder.getMainSelector(this.selector, this.component);
    }
    // Return root selector
    static getMainSelector(selector, component) {
        console.log("getMainSelector", { selector, component });
        if (selector && component && inBrowser) {
            const rootSelector = document.querySelector(selector);
            if (!rootSelector)
                error("Selector not found for some reason" /* SelectorNotFound */);
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
//# sourceMappingURL=index.js.map