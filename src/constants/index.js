export const BLOCK_EMPTY = { id: 0, type: 'empty' };

// Straightaways
export const BLOCK_UP_DOWN = { id: 1, type: 'up-down' };
export const BLOCK_UP_DOWN_LEFT = { id: 2, type: 'up-down', barriers: ['left'] };
export const BLOCK_UP_DOWN_RIGHT = { id: 3, type: 'up-down', barriers: ['right'] };
export const BLOCK_UP_DOWN_LEFT_RIGHT = { id: 4, type: 'up-down', barriers: ['left', 'right'] };
export const BLOCK_LEFT_RIGHT = { id: 5, type: 'left-right' };
export const BLOCK_LEFT_RIGHT_TOP = { id: 6, type: 'left-right', barriers: ['top'] };
export const BLOCK_LEFT_RIGHT_BOTTOM = { id: 7, type: 'left-right', barriers: ['bottom'] };
export const BLOCK_LEFT_RIGHT_TOP_BOTTOM = {
  id: 8,
  type: 'left-right',
  barriers: ['top', 'bottom'],
};

// Curves
export const BLOCK_LEFT_UP = { id: 9, type: 'left-up' };
export const BLOCK_LEFT_DOWN = { id: 10, type: 'left-down' };
export const BLOCK_RIGHT_UP = { id: 11, type: 'right-up' };
export const BLOCK_RIGHT_DOWN = { id: 12, type: 'right-down' };

// Features
export const BLOCK_JUMP = { id: 13, type: 'jump' };
export const BLOCK_TABLE_TOP = { id: 14, type: 'table-top' };
export const BLOCK_LANDING = { id: 15, type: 'landing' };
export const BLOCK_WHOOPS = { id: 16, type: 'whoops' };

// Bridges
export const BLOCK_BRIDGE_UP_DOWN = { id: 17, type: 'bridge-up-down' };
export const BLOCK_BRIDGE_LEFT_RIGHT = { id: 18, type: 'bridge-left-right' };

// Empty / placeholders
export const BLOCK_STRIPES = { id: 19, type: 'stripes' };
export const BLOCK_SPACE = { id: 20, type: 'space' };

// Utility objects
export const TYPES_WITH_BARRIERS = [BLOCK_UP_DOWN.type, BLOCK_LEFT_RIGHT.type, BLOCK_SPACE.type];
