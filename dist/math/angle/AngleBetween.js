/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
export function AngleBetween(x1, y1, x2, y2) {
  return Math.atan2(y2 - y1, x2 - x1);
}
