export class ObjectManipulator<T> {

    constructor(protected obj: T) {}

    public set<K extends string | number | symbol, V>(key: K, value: V): ObjectManipulator<T & Record<K, V>> {
        return new ObjectManipulator<T & Record<K, V>>({ ...this.obj, [key]: value } as T & Record<K, V>);
    }

    public get<K extends keyof T>(key: K): T[K] {
        return this.obj[key];
    }

    public delete<K extends keyof T>(key: K): ObjectManipulator<Omit<T, K>> {
        const newObj = { ...this.obj };
        delete newObj[key];
        return new ObjectManipulator<Omit<T, K>>(newObj);
    }

    public getObject(): T {
        return this.obj;
    }
}