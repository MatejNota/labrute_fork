
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.7.0
 * Query Engine version: 79fb5193cf0a8fdbef536e4b4a159cad677ab1b9
 */
Prisma.prismaVersion = {
  client: "5.7.0",
  engine: "79fb5193cf0a8fdbef536e4b4a159cad677ab1b9"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  lang: 'lang',
  name: 'name',
  admin: 'admin',
  moderator: 'moderator',
  connexionToken: 'connexionToken',
  bruteLimit: 'bruteLimit',
  gold: 'gold',
  fightSpeed: 'fightSpeed',
  backgroundMusic: 'backgroundMusic'
};

exports.Prisma.BruteBodyScalarFieldEnum = {
  id: 'id',
  bruteId: 'bruteId',
  longHair: 'longHair',
  lowerRightArm: 'lowerRightArm',
  rightHand: 'rightHand',
  upperRightArm: 'upperRightArm',
  rightShoulder: 'rightShoulder',
  rightFoot: 'rightFoot',
  lowerRightLeg: 'lowerRightLeg',
  upperRightLeg: 'upperRightLeg',
  leftFoot: 'leftFoot',
  lowerLeftLeg: 'lowerLeftLeg',
  pelvis: 'pelvis',
  upperLeftLeg: 'upperLeftLeg',
  tummy: 'tummy',
  torso: 'torso',
  head: 'head',
  leftHand: 'leftHand',
  upperLeftArm: 'upperLeftArm',
  lowerLeftArm: 'lowerLeftArm',
  leftShoulder: 'leftShoulder'
};

exports.Prisma.BruteColorsScalarFieldEnum = {
  id: 'id',
  bruteId: 'bruteId',
  skinColor: 'skinColor',
  skinShade: 'skinShade',
  hairColor: 'hairColor',
  hairShade: 'hairShade',
  primaryColor: 'primaryColor',
  primaryShade: 'primaryShade',
  secondaryColor: 'secondaryColor',
  secondaryShade: 'secondaryShade',
  accentColor: 'accentColor',
  accentShade: 'accentShade'
};

exports.Prisma.BruteScalarFieldEnum = {
  id: 'id',
  name: 'name',
  deletedAt: 'deletedAt',
  createdAt: 'createdAt',
  destinyPath: 'destinyPath',
  level: 'level',
  xp: 'xp',
  hp: 'hp',
  enduranceStat: 'enduranceStat',
  enduranceModifier: 'enduranceModifier',
  enduranceValue: 'enduranceValue',
  strengthStat: 'strengthStat',
  strengthModifier: 'strengthModifier',
  strengthValue: 'strengthValue',
  agilityStat: 'agilityStat',
  agilityModifier: 'agilityModifier',
  agilityValue: 'agilityValue',
  speedStat: 'speedStat',
  speedModifier: 'speedModifier',
  speedValue: 'speedValue',
  ranking: 'ranking',
  gender: 'gender',
  userId: 'userId',
  weapons: 'weapons',
  skills: 'skills',
  pets: 'pets',
  masterId: 'masterId',
  pupilsCount: 'pupilsCount',
  clanId: 'clanId',
  registeredForTournament: 'registeredForTournament',
  nextTournamentDate: 'nextTournamentDate',
  currentTournamentDate: 'currentTournamentDate',
  currentTournamentStepWatched: 'currentTournamentStepWatched',
  lastFight: 'lastFight',
  fightsLeft: 'fightsLeft',
  victories: 'victories',
  opponentsGeneratedAt: 'opponentsGeneratedAt',
  canRankUpSince: 'canRankUpSince',
  favorite: 'favorite',
  wantToJoinClanId: 'wantToJoinClanId'
};

exports.Prisma.BruteSpritesheetScalarFieldEnum = {
  id: 'id',
  version: 'version',
  gender: 'gender',
  longHair: 'longHair',
  lowerRightArm: 'lowerRightArm',
  rightHand: 'rightHand',
  upperRightArm: 'upperRightArm',
  rightShoulder: 'rightShoulder',
  rightFoot: 'rightFoot',
  lowerRightLeg: 'lowerRightLeg',
  upperRightLeg: 'upperRightLeg',
  leftFoot: 'leftFoot',
  lowerLeftLeg: 'lowerLeftLeg',
  pelvis: 'pelvis',
  upperLeftLeg: 'upperLeftLeg',
  tummy: 'tummy',
  torso: 'torso',
  head: 'head',
  leftHand: 'leftHand',
  upperLeftArm: 'upperLeftArm',
  lowerLeftArm: 'lowerLeftArm',
  leftShoulder: 'leftShoulder',
  skinColor: 'skinColor',
  skinShade: 'skinShade',
  hairColor: 'hairColor',
  hairShade: 'hairShade',
  primaryColor: 'primaryColor',
  primaryShade: 'primaryShade',
  secondaryColor: 'secondaryColor',
  secondaryShade: 'secondaryShade',
  accentColor: 'accentColor',
  accentShade: 'accentShade',
  image: 'image',
  json: 'json'
};

exports.Prisma.FightScalarFieldEnum = {
  id: 'id',
  date: 'date',
  brute1Id: 'brute1Id',
  brute2Id: 'brute2Id',
  winner: 'winner',
  loser: 'loser',
  steps: 'steps',
  fighters: 'fighters'
};

exports.Prisma.LogScalarFieldEnum = {
  id: 'id',
  date: 'date',
  currentBruteId: 'currentBruteId',
  type: 'type',
  level: 'level',
  brute: 'brute',
  fightId: 'fightId',
  xp: 'xp'
};

exports.Prisma.DestinyChoiceScalarFieldEnum = {
  id: 'id',
  bruteId: 'bruteId',
  path: 'path',
  type: 'type',
  skill: 'skill',
  weapon: 'weapon',
  pet: 'pet',
  stat1: 'stat1',
  stat1Value: 'stat1Value',
  stat2: 'stat2',
  stat2Value: 'stat2Value'
};

exports.Prisma.TournamentScalarFieldEnum = {
  id: 'id',
  date: 'date',
  type: 'type',
  rounds: 'rounds'
};

exports.Prisma.TournamentStepScalarFieldEnum = {
  id: 'id',
  tournamentId: 'tournamentId',
  step: 'step',
  fightId: 'fightId',
  xpDistributed: 'xpDistributed'
};

exports.Prisma.TournamentEarningScalarFieldEnum = {
  id: 'id',
  date: 'date',
  bruteId: 'bruteId',
  points: 'points',
  achievement: 'achievement',
  achievementCount: 'achievementCount'
};

exports.Prisma.AchievementScalarFieldEnum = {
  id: 'id',
  name: 'name',
  count: 'count',
  bruteId: 'bruteId',
  userId: 'userId'
};

exports.Prisma.TitleScalarFieldEnum = {
  id: 'id',
  name: 'name',
  count: 'count'
};

exports.Prisma.BruteReportScalarFieldEnum = {
  id: 'id',
  bruteId: 'bruteId',
  reason: 'reason',
  count: 'count',
  date: 'date',
  status: 'status'
};

exports.Prisma.ServerStateScalarFieldEnum = {
  id: 'id',
  ready: 'ready',
  globalTournamentValid: 'globalTournamentValid'
};

exports.Prisma.BannedWordScalarFieldEnum = {
  id: 'id',
  word: 'word'
};

exports.Prisma.WorkerJobScalarFieldEnum = {
  id: 'id',
  worker: 'worker',
  payload: 'payload'
};

exports.Prisma.ClanScalarFieldEnum = {
  id: 'id',
  name: 'name',
  limit: 'limit',
  points: 'points',
  boss: 'boss',
  damageOnBoss: 'damageOnBoss',
  masterId: 'masterId'
};

exports.Prisma.ClanThreadScalarFieldEnum = {
  id: 'id',
  clanId: 'clanId',
  creatorId: 'creatorId',
  title: 'title',
  locked: 'locked',
  pinned: 'pinned',
  postCount: 'postCount',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ClanPostScalarFieldEnum = {
  id: 'id',
  threadId: 'threadId',
  authorId: 'authorId',
  date: 'date',
  message: 'message'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Lang = exports.$Enums.Lang = {
  en: 'en',
  fr: 'fr',
  de: 'de',
  es: 'es',
  ru: 'ru'
};

exports.Gender = exports.$Enums.Gender = {
  male: 'male',
  female: 'female'
};

exports.DestinyChoiceSide = exports.$Enums.DestinyChoiceSide = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT'
};

exports.WeaponName = exports.$Enums.WeaponName = {
  fan: 'fan',
  keyboard: 'keyboard',
  knife: 'knife',
  leek: 'leek',
  mug: 'mug',
  sai: 'sai',
  racquet: 'racquet',
  axe: 'axe',
  bumps: 'bumps',
  flail: 'flail',
  fryingPan: 'fryingPan',
  hatchet: 'hatchet',
  mammothBone: 'mammothBone',
  morningStar: 'morningStar',
  trombone: 'trombone',
  baton: 'baton',
  halbard: 'halbard',
  lance: 'lance',
  trident: 'trident',
  whip: 'whip',
  noodleBowl: 'noodleBowl',
  piopio: 'piopio',
  shuriken: 'shuriken',
  broadsword: 'broadsword',
  scimitar: 'scimitar',
  sword: 'sword'
};

exports.SkillName = exports.$Enums.SkillName = {
  herculeanStrength: 'herculeanStrength',
  felineAgility: 'felineAgility',
  lightningBolt: 'lightningBolt',
  vitality: 'vitality',
  immortality: 'immortality',
  reconnaissance: 'reconnaissance',
  weaponsMaster: 'weaponsMaster',
  martialArts: 'martialArts',
  sixthSense: 'sixthSense',
  hostility: 'hostility',
  fistsOfFury: 'fistsOfFury',
  shield: 'shield',
  armor: 'armor',
  toughenedSkin: 'toughenedSkin',
  untouchable: 'untouchable',
  sabotage: 'sabotage',
  shock: 'shock',
  bodybuilder: 'bodybuilder',
  relentless: 'relentless',
  survival: 'survival',
  leadSkeleton: 'leadSkeleton',
  balletShoes: 'balletShoes',
  determination: 'determination',
  firstStrike: 'firstStrike',
  resistant: 'resistant',
  counterAttack: 'counterAttack',
  ironHead: 'ironHead',
  thief: 'thief',
  fierceBrute: 'fierceBrute',
  tragicPotion: 'tragicPotion',
  net: 'net',
  bomb: 'bomb',
  hammer: 'hammer',
  cryOfTheDamned: 'cryOfTheDamned',
  hypnosis: 'hypnosis',
  flashFlood: 'flashFlood',
  tamer: 'tamer',
  regeneration: 'regeneration',
  chef: 'chef',
  spy: 'spy',
  saboteur: 'saboteur',
  backup: 'backup',
  hideaway: 'hideaway',
  monk: 'monk'
};

exports.PetName = exports.$Enums.PetName = {
  dog1: 'dog1',
  dog2: 'dog2',
  dog3: 'dog3',
  panther: 'panther',
  bear: 'bear'
};

exports.LogType = exports.$Enums.LogType = {
  win: 'win',
  lose: 'lose',
  child: 'child',
  childup: 'childup',
  up: 'up',
  lvl: 'lvl',
  survive: 'survive',
  tournament: 'tournament',
  tournamentXp: 'tournamentXp'
};

exports.DestinyChoiceType = exports.$Enums.DestinyChoiceType = {
  skill: 'skill',
  weapon: 'weapon',
  pet: 'pet',
  stats: 'stats'
};

exports.BruteStat = exports.$Enums.BruteStat = {
  endurance: 'endurance',
  strength: 'strength',
  agility: 'agility',
  speed: 'speed'
};

exports.TournamentType = exports.$Enums.TournamentType = {
  DAILY: 'DAILY',
  GLOBAL: 'GLOBAL',
  CUSTOM: 'CUSTOM'
};

exports.AchievementName = exports.$Enums.AchievementName = {
  wins: 'wins',
  defeats: 'defeats',
  flawless: 'flawless',
  winWith1HP: 'winWith1HP',
  steal2Weapons: 'steal2Weapons',
  singleHitWin: 'singleHitWin',
  combo3: 'combo3',
  combo4: 'combo4',
  combo5: 'combo5',
  counter5: 'counter5',
  evade10: 'evade10',
  block25: 'block25',
  counter4b2b: 'counter4b2b',
  reversal4b2b: 'reversal4b2b',
  block4b2b: 'block4b2b',
  evade4b2b: 'evade4b2b',
  throw10b2b: 'throw10b2b',
  disarm4: 'disarm4',
  disarm8: 'disarm8',
  damage50once: 'damage50once',
  damage100once: 'damage100once',
  hit20times: 'hit20times',
  use10skills: 'use10skills',
  kill3pets: 'kill3pets',
  maxDamage: 'maxDamage',
  saboteur: 'saboteur',
  dog: 'dog',
  panther: 'panther',
  bear: 'bear',
  panther_bear: 'panther_bear',
  felAg_fistsOfF: 'felAg_fistsOfF',
  felAg_fistsOfF_untouch_relentless: 'felAg_fistsOfF_untouch_relentless',
  vita_armor_toughened: 'vita_armor_toughened',
  herculStr_hammer_fierceBrute: 'herculStr_hammer_fierceBrute',
  shock: 'shock',
  balletShoes_survival: 'balletShoes_survival',
  cryOfTheDamned_hypnosis: 'cryOfTheDamned_hypnosis',
  shield_counterAttack: 'shield_counterAttack',
  reconnaissance_monk: 'reconnaissance_monk',
  immortality: 'immortality',
  doubleBoost: 'doubleBoost',
  tripleBoost: 'tripleBoost',
  quadrupleBoost: 'quadrupleBoost',
  regeneration_potion: 'regeneration_potion',
  bear_tamer: 'bear_tamer',
  tripleDogs: 'tripleDogs',
  fiveWeapons: 'fiveWeapons',
  tenWeapons: 'tenWeapons',
  fifteenWeapons: 'fifteenWeapons',
  twentyWeapons: 'twentyWeapons',
  twentyThreeWeapons: 'twentyThreeWeapons',
  monk_sixthSense_whip: 'monk_sixthSense_whip',
  weaponsMaster_sharp_bodybuilder_heavy: 'weaponsMaster_sharp_bodybuilder_heavy',
  hostility_counterWeapon: 'hostility_counterWeapon',
  flashFlood_twelveWeapons: 'flashFlood_twelveWeapons',
  lightningBolt_firstStrike: 'lightningBolt_firstStrike',
  herculeanStrength: 'herculeanStrength',
  felineAgility: 'felineAgility',
  lightningBolt: 'lightningBolt',
  vitality: 'vitality',
  potion_chef: 'potion_chef',
  tamer_net: 'tamer_net',
  untouchable_balletShoes: 'untouchable_balletShoes',
  survival_resistant: 'survival_resistant',
  hideaway_spy: 'hideaway_spy',
  weaponsFast3: 'weaponsFast3',
  weaponsSharp3: 'weaponsSharp3',
  weaponsHeavy3: 'weaponsHeavy3',
  weaponsLong3: 'weaponsLong3',
  weaponsThrown3: 'weaponsThrown3',
  weaponsBlunt3: 'weaponsBlunt3',
  thor: 'thor',
  agility50: 'agility50',
  agility100: 'agility100',
  speed50: 'speed50',
  speed100: 'speed100',
  strength50: 'strength50',
  strength100: 'strength100',
  hp300: 'hp300',
  hp600: 'hp600',
  maxLevel: 'maxLevel',
  allAchievements: 'allAchievements',
  winTournamentAs20: 'winTournamentAs20',
  winTournamentAs15: 'winTournamentAs15',
  looseAgainst2: 'looseAgainst2',
  looseAgainst3: 'looseAgainst3',
  looseAgainst4: 'looseAgainst4',
  winAgainst2: 'winAgainst2',
  winAgainst3: 'winAgainst3',
  winAgainst4: 'winAgainst4',
  winAsLower: 'winAsLower',
  win: 'win',
  rankUp10: 'rankUp10',
  rankUp9: 'rankUp9',
  rankUp8: 'rankUp8',
  rankUp7: 'rankUp7',
  rankUp6: 'rankUp6',
  rankUp5: 'rankUp5',
  rankUp4: 'rankUp4',
  rankUp3: 'rankUp3',
  rankUp2: 'rankUp2',
  rankUp1: 'rankUp1',
  rankUp0: 'rankUp0',
  sacrifice: 'sacrifice',
  beta: 'beta',
  bug: 'bug'
};

exports.BruteReportReason = exports.$Enums.BruteReportReason = {
  name: 'name'
};

exports.BruteReportStatus = exports.$Enums.BruteReportStatus = {
  pending: 'pending',
  accepted: 'accepted',
  rejected: 'rejected'
};

exports.BossName = exports.$Enums.BossName = {
  GoldClaw: 'GoldClaw',
  EmberFang: 'EmberFang'
};

exports.Prisma.ModelName = {
  User: 'User',
  BruteBody: 'BruteBody',
  BruteColors: 'BruteColors',
  Brute: 'Brute',
  BruteSpritesheet: 'BruteSpritesheet',
  Fight: 'Fight',
  Log: 'Log',
  DestinyChoice: 'DestinyChoice',
  Tournament: 'Tournament',
  TournamentStep: 'TournamentStep',
  TournamentEarning: 'TournamentEarning',
  Achievement: 'Achievement',
  Title: 'Title',
  BruteReport: 'BruteReport',
  ServerState: 'ServerState',
  BannedWord: 'BannedWord',
  WorkerJob: 'WorkerJob',
  Clan: 'Clan',
  ClanThread: 'ClanThread',
  ClanPost: 'ClanPost'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
