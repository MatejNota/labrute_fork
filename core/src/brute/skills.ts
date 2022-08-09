import { SkillName } from '../types.js';

export type SkillType = 'passive' | 'booster' | 'super' | 'talent';

export interface Skill {
  name: SkillName;
  icon: string;
  odds: number;
  type: SkillType;
  toss?: number;
  uses?: number;
}
const skills: Skill[] = [
  {
    name: 'herculeanStrength',
    icon: '1',
    odds: 60,
    type: 'booster',
  },
  {
    name: 'felineAgility',
    icon: '2',
    odds: 60,
    type: 'booster',
  },
  {
    name: 'lightningBolt',
    icon: '3',
    odds: 60,
    type: 'booster',
  },
  {
    name: 'vitality',
    icon: '4',
    odds: 60,
    type: 'booster',
  },
  {
    name: 'immortality',
    icon: '5',
    odds: 1,
    type: 'booster',
  },
  {
    name: 'weaponsMaster',
    icon: '6',
    odds: 10,
    type: 'passive',
  },
  {
    name: 'martialArts',
    icon: '7',
    odds: 10,
    type: 'passive',
  },
  {
    name: 'sixthSense',
    icon: '8',
    odds: 20,
    type: 'passive',
  },
  {
    name: 'hostility',
    icon: '9',
    odds: 4,
    type: 'passive',
  },
  {
    name: 'fistsOfFury',
    icon: '10',
    odds: 10,
    type: 'passive',
  },
  {
    name: 'shield',
    icon: '11',
    odds: 20,
    type: 'passive',
  },
  {
    name: 'armor',
    icon: '12',
    odds: 4,
    type: 'passive',
  },
  {
    name: 'toughenedSkin',
    icon: '13',
    odds: 30,
    type: 'passive',
  },
  {
    name: 'untouchable',
    icon: '14',
    odds: 1,
    type: 'passive',
  },
  {
    name: 'sabotage',
    icon: '15',
    odds: 3,
    type: 'passive',
  },
  {
    name: 'shock',
    icon: '16',
    odds: 10,
    type: 'passive',
  },
  {
    name: 'bodybuilder',
    icon: '17',
    odds: 5,
    type: 'passive',
  },
  {
    name: 'relentless',
    icon: '18',
    odds: 1,
    type: 'passive',
  },
  {
    name: 'survival',
    icon: '19',
    odds: 4,
    type: 'passive',
  },
  {
    name: 'leadSkeleton',
    icon: '20',
    odds: 4,
    type: 'passive',
  },
  {
    name: 'balletShoes',
    icon: '21',
    odds: 4,
    type: 'passive',
  },
  {
    name: 'determination',
    icon: '22',
    odds: 4,
    type: 'passive',
  },
  {
    name: 'firstStrike',
    icon: '23',
    odds: 8,
    type: 'passive',
  },
  {
    name: 'resistant',
    icon: '24',
    odds: 3,
    type: 'passive',
  },
  {
    name: 'reconnaissance',
    icon: '25',
    odds: 1,
    type: 'booster',
  },
  {
    name: 'counterAttack',
    icon: '26',
    odds: 10,
    type: 'passive',
  },
  {
    name: 'ironHead',
    icon: '27',
    odds: 4,
    type: 'passive',
  },
  {
    name: 'thief',
    icon: '28',
    odds: 10,
    type: 'super',
    toss: 8,
    uses: 2,
  },
  {
    name: 'fierceBrute',
    icon: '29',
    odds: 20,
    type: 'super',
    toss: 5,
    uses: 1,
  },
  {
    name: 'tragicPotion',
    icon: '30',
    odds: 8,
    type: 'super',
    toss: 5,
    uses: 1,
  },
  {
    name: 'net',
    icon: '31',
    odds: 16,
    type: 'super',
    toss: 5,
    uses: 1,
  },
  {
    name: 'bomb',
    icon: '32',
    odds: 6,
    type: 'super',
    toss: 2,
    uses: 2,
  },
  {
    name: 'hammer',
    icon: '33',
    odds: 1,
    type: 'super',
    toss: 2,
    uses: 1,
  },
  {
    name: 'cryOfTheDamned',
    icon: '34',
    odds: 4,
    type: 'super',
    toss: 8,
    uses: 2,
  },
  {
    name: 'hypnosis',
    icon: '35',
    odds: 2,
    type: 'super',
    toss: 3,
    uses: 1,
  },
  {
    name: 'flashFlood',
    icon: '36',
    odds: 2,
    type: 'super',
    toss: 2,
    uses: 1,
  },
  {
    name: 'tamer',
    icon: '37',
    odds: 4,
    type: 'super',
    toss: 20,
    uses: 4,
  },
  {
    name: 'regeneration',
    icon: '38',
    odds: 3,
    type: 'talent',
  },
  {
    name: 'chef',
    icon: '39',
    odds: 1,
    type: 'talent',
  },
  {
    name: 'spy',
    icon: '40',
    odds: 3,
    type: 'talent',
  },
  {
    name: 'saboteur',
    icon: '41',
    odds: 3,
    type: 'talent',
  },
  {
    name: 'backup',
    icon: '42',
    odds: 5,
    type: 'talent',
  },
  {
    name: 'hideaway',
    icon: '66',
    odds: 5,
    type: 'talent',
  },
  {
    name: 'monk',
    icon: '67',
    odds: 5,
    type: 'talent',
  },
];

export const SKILLS_TOTAL_ODDS = skills.reduce((acc, skill) => acc + skill.odds, 0);

export default skills;
