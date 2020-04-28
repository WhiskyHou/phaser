import { GetChildIndex } from './GetChildIndex';
import { IGameObject } from '../gameobject/IGameObject';

export function MoveChildUp (parent: IGameObject, child: IGameObject): IGameObject
{
    const parentChildren = parent.children;

    const currentIndex = GetChildIndex(parent, child);

    if (currentIndex !== -1 && currentIndex > 0)
    {
        //  The child above the one given to this function
        const child2 = parentChildren[currentIndex + 1];
        const index2 = parentChildren.indexOf(child2);

        parentChildren[currentIndex] = child2;
        parentChildren[index2] = child;

        child.dirty.setRender();
        child2.dirty.setRender();
    }

    return child;
}
