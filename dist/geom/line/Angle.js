/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
/**
 * Calculate the angle of the line in radians.
 *
 * @function Phaser.Geom.Line.Angle
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Line} line - The line to calculate the angle of.
 *
 * @return {number} The angle of the line, in radians.
 */
export default function Angle(line) {
    return Math.atan2(line.y2 - line.y1, line.x2 - line.x1);
}
//# sourceMappingURL=Angle.js.map