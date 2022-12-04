import { PETS_TOTAL_ODDS } from './brute/pets.js';
import { SKILLS_TOTAL_ODDS } from './brute/skills.js';
import { WEAPONS_TOTAL_ODDS } from './brute/weapons.js';
import { Animation } from './types.js';

export const FIGHTS_PER_DAY = 6;

export const ARENA_OPPONENTS_COUNT = 6;
export const ARENA_OPPONENTS_MAX_GAP = 2;

export const BRUTE_STARTING_POINTS = 11;
export const PERKS_TOTAL_ODDS = WEAPONS_TOTAL_ODDS + PETS_TOTAL_ODDS + SKILLS_TOTAL_ODDS;

export const SHIELD_BLOCK_ODDS = 0.45;
export const BARE_HANDS_TEMPO = 1.2;

export const ANIMATION_ANCHORS: Record<Animation, [number, number]> = {
  'arrive-end': [0.5, 0.5],
  'arrive-start': [0.5, 0.5],
  attack: [0.5, 0.5],
  block: [0.5, 0.5],
  death: [0.5, 0.5],
  drink: [0.5, 0.5],
  eat: [0.5, 0.5],
  equip: [0.5, 0.5],
  evade: [0.5, 0.5],
  grab: [0.5, 0.5],
  grabbed: [0.5, 0.5],
  hit: [0.5, 0.5],
  'hit-0': [0.5, 0.5],
  'hit-1': [0.5, 0.5],
  'hit-2': [0.5, 0.5],
  'hit-3': [0.5, 0.5],
  iddle: [0.4946, 0.7951],
  launch: [0.5, 0.5],
  'monk-loop': [0.5, 0.5],
  'monk-start': [0.5, 0.5],
  'prepare-throw': [0.5, 0.5],
  run: [0.5292, 0.8688],
  slash: [0.5, 0.5],
  stolen: [0.5, 0.5],
  steal: [0.5, 0.5],
  strengthen: [0.5, 0.5],
  throw: [0.5, 0.5],
  train: [0.5, 0.5],
  'trapped-loop': [0.5, 0.5],
  'trapped-start': [0.5, 0.5],
  trash: [0.5, 0.5],
  win: [0.5, 0.5],
  fist: [0.5, 0.5],
  estoc: [0.5, 0.5],
  whip: [0.5, 0.5],
};