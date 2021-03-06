import { Quaternion } from './Quaternion';

export function AddScalar (a: Quaternion, scalar: number, out: Quaternion = new Quaternion()): Quaternion
{
    return out.set(
        a.x + scalar,
        a.y + scalar,
        a.z + scalar,
        a.w + scalar
    );
}
