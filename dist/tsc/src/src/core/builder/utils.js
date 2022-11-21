import { inBrowser } from "../../../config/index";
export const getMainSelector = (selector, component) => {
    if (selector && inBrowser) {
        console.log(component);
        return document.querySelector(selector);
    }
    return null;
};
//# sourceMappingURL=utils.js.map