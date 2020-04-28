import { IGameObject } from '../gameobject/IGameObject';
import { RemoveChildrenBetween } from './RemoveChildrenBetween';

export function DestroyChildren (parent: IGameObject, beginIndex: number = 0, endIndex?: number): void
{
    const removed = RemoveChildrenBetween(parent, beginIndex, endIndex);

    removed.forEach(child =>
    {
        child.destroy();
    });
}
