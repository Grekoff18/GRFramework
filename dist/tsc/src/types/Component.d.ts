/**
 * @internal
 */
export declare class Component {
    options: Record<string, any>;
}
export interface ComponentOptions {
    propData?: Record<string, any>;
    listeners?: Record<string, Function | Function[]>;
    children?: Array<Component>;
    tag?: string;
}
