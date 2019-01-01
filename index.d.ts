export function bind<T extends Function>(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any>;
export function viewProperty(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any>;
export function inject<T extends Object>(target: Object, propertyKey: string): any;

export class Presenter<T> {
  view: T;
}
export class DIBuilder {
  static types: Object;
  static build(types: Object): void;
}
