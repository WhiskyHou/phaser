import { IGameObject } from '../gameobject/IGameObject';

export function RotateChildrenLeft (parent: IGameObject, total: number = 1): IGameObject
{
    const parentChildren = parent.children;

    let child = null;

    for (let i: number = 0; i < total; i++)
    {
        child = parentChildren.shift();

        parentChildren.push(child);

        child.dirty.setRender();
    }

    return child;
}
