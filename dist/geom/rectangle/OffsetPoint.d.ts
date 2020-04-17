/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import IRectangle from './IRectangle';
import IVec2 from '../../math/vec2/IVec2';
/**
 * Nudges (translates) the top-left corner of a Rectangle by the coordinates of a point (translation vector).
 *
 * @function Phaser.Geom.Rectangle.OffsetPoint
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Rectangle} O - [rect,$return]
 *
 * @param {Phaser.Geom.Rectangle} rect - The Rectangle to adjust.
 * @param {(Phaser.Geom.Point|Phaser.Math.Vector2)} point - The point whose coordinates should be used as an offset.
 *
 * @return {Phaser.Geom.Rectangle} The adjusted Rectangle.
 */
export default function OffsetPoint(rect: IRectangle, point: IVec2): IRectangle;
//# sourceMappingURL=OffsetPoint.d.ts.map