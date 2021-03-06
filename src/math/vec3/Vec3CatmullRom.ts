import { CatmullRom } from '../CatmullRom';
import { IVec3Like } from './IVec3Like';
import { Vec3 } from './Vec3';

// Gets a new Vector3 for float t on the CatmullRom spline defined by the 4 points

export function Vec3CatmullRom (p1: IVec3Like, p2: IVec3Like, p3: IVec3Like, p4: IVec3Like, t: number, out: Vec3 = new Vec3()): Vec3
{
    return out.set(
        CatmullRom(t, p1.x, p2.x, p3.x, p4.x),
        CatmullRom(t, p1.y, p2.y, p3.y, p4.y),
        CatmullRom(t, p1.z, p2.z, p3.z, p4.z)
    );
}
