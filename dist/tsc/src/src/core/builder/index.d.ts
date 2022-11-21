import { Component } from "../../../types/Component";
import { Builder } from "../../../types/Builder";
export default class GRBuilder implements Builder {
    rootElement?: HTMLElement | Element | null | undefined;
    selector?: string | null;
    component?: Component | null;
    constructor(selector: string, component: Component);
    static getMainSelector(selector: string, component: Component): HTMLElement | Element | null;
}
