/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @internal
 */
export declare class Component {
  // constructor(options?: any);
  // static cid: number;
  options: Record<string, any>;
}

export interface ComponentOptions {
  propData?: Record<string, any>;
  listeners?: Record<string, Function | Function[]>;
  children?: Array<Component>;
  tag?: string;
}
