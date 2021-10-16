/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-17 00:26:48
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-17 00:37:12
 */

// type Direction = "left" | "Right" | "Top" | "Bottom"

enum Direction {
  LEFT = 100,
  RIGHT,
  TOP,
  BOTTOM,
}

function turnDirection(direction: Direction) {
  console.log(direction);

  switch (direction) {
    case Direction.LEFT:
      console.log('改变角色的方向向左');
      break;
    case Direction.RIGHT:
      console.log('改变角色的方向向右');
      break;
    case Direction.TOP:
      console.log('改变角色的方向向上');
      break;
    case Direction.BOTTOM:
      console.log('改变角色的方向向下');
      break;
    default:
      const foo: never = direction;
      break;
  }
}

turnDirection(Direction.LEFT);
turnDirection(Direction.RIGHT);
turnDirection(Direction.TOP);
turnDirection(Direction.BOTTOM);
