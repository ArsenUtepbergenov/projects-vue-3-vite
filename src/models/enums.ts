export const enum Colors {
  light = 'white',
  grey = '#a1a1a1',
  dark = '#442132',
  brown = '#795548',
  green = '#8bc34a',
  sun = '#F28C38',
}

export const enum Config {
  TILES = 'src/assets/tiles.png',
  WORLD = 'src/assets/world.json',
  FONT = '1rem Calibri',
}

export const enum Sides {
  TOP = 'top',
  BOTTOM = 'bottom',
  LEFT = 'left',
  RIGHT = 'right',
}

export const Primitives = ['rect', 'circle'] as const
