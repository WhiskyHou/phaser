/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
/**
 * Check to see if the Ellipse contains the given x / y coordinates.
 *
 * @function Phaser.Geom.Ellipse.Contains
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Ellipse} ellipse - The Ellipse to check.
 * @param {number} x - The x coordinate to check within the ellipse.
 * @param {number} y - The y coordinate to check within the ellipse.
 *
 * @return {boolean} True if the coordinates are within the ellipse, otherwise false.
 */
export default function Contains(ellipse, x, y) {
    if (ellipse.width <= 0 || ellipse.height <= 0) {
        return false;
    }
    //  Normalize the coords to an ellipse with center 0,0 and a radius of 0.5
    let normx = ((x - ellipse.x) / ellipse.width);
    let normy = ((y - ellipse.y) / ellipse.height);
    normx *= normx;
    normy *= normy;
    return (normx + normy < 0.25);
}
//# sourceMappingURL=Contains.js.map