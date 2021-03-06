import { IContainer } from '../gameobjects/container/IContainer';

export function SetSkew (skewX: number, skewY: number, ...children: IContainer[]): IContainer[]
{
    children.forEach(child =>
    {
        child.setSkew(skewX, skewY);
    });

    return children;
}
