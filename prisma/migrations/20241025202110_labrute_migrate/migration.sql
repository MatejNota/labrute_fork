-- CreateEnum
CREATE TYPE "Lang" AS ENUM ('en', 'fr', 'de', 'es', 'ru', 'pt');

-- CreateEnum
CREATE TYPE "DestinyChoiceSide" AS ENUM ('0', '1');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female');

-- CreateEnum
CREATE TYPE "WeaponName" AS ENUM ('fan', 'keyboard', 'knife', 'leek', 'mug', 'sai', 'racquet', 'axe', 'bumps', 'flail', 'fryingPan', 'hatchet', 'mammothBone', 'morningStar', 'trombone', 'baton', 'halbard', 'lance', 'trident', 'whip', 'noodleBowl', 'piopio', 'shuriken', 'broadsword', 'scimitar', 'sword');

-- CreateEnum
CREATE TYPE "SkillName" AS ENUM ('herculeanStrength', 'felineAgility', 'lightningBolt', 'vitality', 'immortality', 'reconnaissance', 'weaponsMaster', 'martialArts', 'sixthSense', 'hostility', 'fistsOfFury', 'shield', 'armor', 'toughenedSkin', 'untouchable', 'sabotage', 'shock', 'bodybuilder', 'relentless', 'survival', 'leadSkeleton', 'balletShoes', 'determination', 'firstStrike', 'resistant', 'counterAttack', 'ironHead', 'thief', 'fierceBrute', 'tragicPotion', 'net', 'bomb', 'hammer', 'cryOfTheDamned', 'hypnosis', 'flashFlood', 'tamer', 'regeneration', 'chef', 'spy', 'saboteur', 'backup', 'hideaway', 'monk', 'vampirism', 'chaining', 'haste', 'treat', 'repulse');

-- CreateEnum
CREATE TYPE "PetName" AS ENUM ('dog1', 'dog2', 'dog3', 'panther', 'bear');

-- CreateEnum
CREATE TYPE "FighterType" AS ENUM ('brute', 'pet');

-- CreateEnum
CREATE TYPE "FightModifier" AS ENUM ('noThrows', 'focusOpponent', 'alwaysUseSupers', 'drawEveryWeapon', 'doubleAgility', 'randomSkill', 'randomWeapon', 'bareHandsFirstHit', 'startWithWeapon');

-- CreateEnum
CREATE TYPE "LogType" AS ENUM ('win', 'lose', 'child', 'childup', 'up', 'lvl', 'tournament', 'tournamentXp', 'bossDefeat');

-- CreateEnum
CREATE TYPE "DestinyChoiceType" AS ENUM ('skill', 'weapon', 'pet', 'stats');

-- CreateEnum
CREATE TYPE "BruteStat" AS ENUM ('endurance', 'strength', 'agility', 'speed');

-- CreateEnum
CREATE TYPE "TournamentType" AS ENUM ('DAILY', 'GLOBAL', 'CUSTOM', 'BATTLE_ROYALE');

-- CreateEnum
CREATE TYPE "AchievementName" AS ENUM ('wins', 'defeats', 'flawless', 'winWith1HP', 'steal2Weapons', 'singleHitWin', 'combo3', 'combo4', 'combo5', 'counter5', 'evade10', 'block25', 'counter4b2b', 'reversal4b2b', 'block4b2b', 'evade4b2b', 'throw10b2b', 'disarm4', 'disarm8', 'damage50once', 'damage100once', 'hit20times', 'use10skills', 'kill3pets', 'maxDamage', 'hpHealed', 'saboteur', 'dog', 'panther', 'bear', 'panther_bear', 'felAg_fistsOfF', 'felAg_fistsOfF_untouch_relentless', 'vita_armor_toughened', 'herculStr_hammer_fierceBrute', 'shock', 'balletShoes_survival', 'cryOfTheDamned_hypnosis', 'shield_counterAttack', 'reconnaissance_monk', 'immortality', 'doubleBoost', 'tripleBoost', 'quadrupleBoost', 'regeneration_potion', 'bear_tamer', 'tripleDogs', 'fiveWeapons', 'tenWeapons', 'fifteenWeapons', 'twentyWeapons', 'twentyThreeWeapons', 'monk_sixthSense_whip', 'weaponsMaster_sharp_bodybuilder_heavy', 'hostility_counterWeapon', 'flashFlood_twelveWeapons', 'lightningBolt_firstStrike', 'herculeanStrength', 'felineAgility', 'lightningBolt', 'vitality', 'potion_chef', 'tamer_net', 'untouchable_balletShoes', 'survival_resistant', 'hideaway_spy', 'weaponsFast3', 'weaponsSharp3', 'weaponsHeavy3', 'weaponsLong3', 'weaponsThrown3', 'weaponsBlunt3', 'thor', 'deflector', 'allFastWeapons', 'allSharpWeapons', 'allHeavyWeapons', 'allLongWeapons', 'allThrownWeapons', 'allBluntWeapons', 'agility50', 'agility100', 'speed50', 'speed100', 'strength50', 'strength100', 'hp300', 'hp600', 'maxLevel', 'allAchievements', 'winTournamentAs20', 'winTournamentAs15', 'looseAgainst2', 'looseAgainst3', 'looseAgainst4', 'winAgainst2', 'winAgainst3', 'winAgainst4', 'winAsLower', 'win', 'battleRoyaleWin', 'rankUp10', 'rankUp9', 'rankUp8', 'rankUp7', 'rankUp6', 'rankUp5', 'rankUp4', 'rankUp3', 'rankUp2', 'rankUp1', 'rankUp0', 'sacrifice', 'beta', 'bug');

-- CreateEnum
CREATE TYPE "BruteReportStatus" AS ENUM ('pending', 'accepted', 'rejected');

-- CreateEnum
CREATE TYPE "BruteReportReason" AS ENUM ('name');

-- CreateEnum
CREATE TYPE "BossName" AS ENUM ('GoldClaw', 'EmberFang');

-- CreateEnum
CREATE TYPE "ClanWarStatus" AS ENUM ('pending', 'ongoing', 'waitingForRewards', 'finished');

-- CreateEnum
CREATE TYPE "ClanWarType" AS ENUM ('friendly', 'official');

-- CreateEnum
CREATE TYPE "InventoryItemType" AS ENUM ('visualReset', 'bossTicket', 'nameChange', 'favoriteFight');

-- CreateEnum
CREATE TYPE "EventType" AS ENUM ('battleRoyale');

-- CreateEnum
CREATE TYPE "EventStatus" AS ENUM ('starting', 'ongoing', 'finished');

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "lang" "Lang" NOT NULL DEFAULT 'en',
    "name" VARCHAR(255) NOT NULL,
    "admin" BOOLEAN NOT NULL DEFAULT false,
    "moderator" BOOLEAN NOT NULL DEFAULT false,
    "connexionToken" UUID NOT NULL,
    "bruteLimit" INTEGER NOT NULL DEFAULT 3,
    "gold" INTEGER NOT NULL DEFAULT 0,
    "fightSpeed" INTEGER NOT NULL DEFAULT 2,
    "backgroundMusic" BOOLEAN NOT NULL DEFAULT true,
    "dinorpgDone" DATE,
    "ips" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "bannedAt" DATE,
    "banReason" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Brute" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" VARCHAR(255) NOT NULL,
    "deletedAt" TIMESTAMPTZ,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "willBeDeletedAt" DATE,
    "deletionReason" TEXT,
    "destinyPath" "DestinyChoiceSide"[] DEFAULT ARRAY[]::"DestinyChoiceSide"[],
    "previousDestinyPath" "DestinyChoiceSide"[] DEFAULT ARRAY[]::"DestinyChoiceSide"[],
    "level" INTEGER NOT NULL DEFAULT 1,
    "xp" INTEGER NOT NULL DEFAULT 0,
    "hp" INTEGER NOT NULL DEFAULT 0,
    "enduranceStat" INTEGER NOT NULL DEFAULT 0,
    "enduranceModifier" DOUBLE PRECISION NOT NULL DEFAULT 1,
    "enduranceValue" INTEGER NOT NULL DEFAULT 0,
    "strengthStat" INTEGER NOT NULL DEFAULT 0,
    "strengthModifier" DOUBLE PRECISION NOT NULL DEFAULT 1,
    "strengthValue" INTEGER NOT NULL DEFAULT 0,
    "agilityStat" INTEGER NOT NULL DEFAULT 0,
    "agilityModifier" DOUBLE PRECISION NOT NULL DEFAULT 1,
    "agilityValue" INTEGER NOT NULL DEFAULT 0,
    "speedStat" INTEGER NOT NULL DEFAULT 0,
    "speedModifier" DOUBLE PRECISION NOT NULL DEFAULT 1,
    "speedValue" INTEGER NOT NULL DEFAULT 0,
    "ranking" INTEGER NOT NULL DEFAULT 11,
    "gender" "Gender" NOT NULL,
    "userId" UUID,
    "body" VARCHAR(11) NOT NULL DEFAULT '00000000000',
    "colors" VARCHAR(32) NOT NULL DEFAULT '00000000000000000000000000000000',
    "weapons" "WeaponName"[] DEFAULT ARRAY[]::"WeaponName"[],
    "skills" "SkillName"[] DEFAULT ARRAY[]::"SkillName"[],
    "pets" "PetName"[] DEFAULT ARRAY[]::"PetName"[],
    "masterId" UUID,
    "pupilsCount" INTEGER NOT NULL DEFAULT 0,
    "clanId" UUID,
    "registeredForTournament" BOOLEAN NOT NULL DEFAULT false,
    "nextTournamentDate" DATE,
    "currentTournamentDate" DATE,
    "currentTournamentStepWatched" INTEGER DEFAULT 0,
    "globalTournamentWatchedDate" DATE,
    "globalTournamentRoundWatched" INTEGER,
    "lastFight" DATE,
    "fightsLeft" INTEGER NOT NULL DEFAULT 6,
    "victories" INTEGER NOT NULL DEFAULT 0,
    "opponentsGeneratedAt" DATE,
    "canRankUpSince" DATE,
    "favorite" BOOLEAN NOT NULL DEFAULT false,
    "wantToJoinClanId" UUID,
    "tournamentWins" INTEGER NOT NULL DEFAULT 0,
    "eventId" UUID,
    "resets" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Brute_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BruteStartingStats" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "endurance" INTEGER NOT NULL DEFAULT 2,
    "strength" INTEGER NOT NULL DEFAULT 3,
    "agility" INTEGER NOT NULL DEFAULT 3,
    "speed" INTEGER NOT NULL DEFAULT 3,
    "bruteId" UUID NOT NULL,

    CONSTRAINT "BruteStartingStats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fight" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "date" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "brute1Id" UUID NOT NULL,
    "brute2Id" UUID,
    "winner" VARCHAR(255) NOT NULL,
    "loser" VARCHAR(255) NOT NULL,
    "steps" TEXT NOT NULL,
    "fighters" TEXT NOT NULL,
    "tournamentId" UUID,
    "tournamentStep" INTEGER NOT NULL DEFAULT 0,
    "modifiers" "FightModifier"[] DEFAULT ARRAY[]::"FightModifier"[],
    "background" VARCHAR(255) NOT NULL DEFAULT '1.jpg',
    "clanWarId" UUID,

    CONSTRAINT "Fight_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Log" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "date" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "currentBruteId" UUID NOT NULL,
    "type" "LogType" NOT NULL,
    "level" INTEGER,
    "brute" VARCHAR(255),
    "fightId" UUID,
    "xp" INTEGER,
    "gold" INTEGER,
    "template" VARCHAR(255),
    "destinyChoiceId" UUID,

    CONSTRAINT "Log_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DestinyChoice" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "bruteId" UUID NOT NULL,
    "path" "DestinyChoiceSide"[],
    "type" "DestinyChoiceType" NOT NULL,
    "skill" "SkillName",
    "weapon" "WeaponName",
    "pet" "PetName",
    "stat1" "BruteStat",
    "stat1Value" INTEGER,
    "stat2" "BruteStat",
    "stat2Value" INTEGER,

    CONSTRAINT "DestinyChoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tournament" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "date" DATE NOT NULL,
    "type" "TournamentType" NOT NULL DEFAULT 'DAILY',
    "rounds" INTEGER NOT NULL,
    "eventId" UUID,

    CONSTRAINT "Tournament_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TournamentAchievement" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "bruteId" UUID NOT NULL,
    "date" DATE NOT NULL,
    "achievement" "AchievementName" NOT NULL,
    "achievementCount" INTEGER NOT NULL,

    CONSTRAINT "TournamentAchievement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TournamentGold" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "date" DATE NOT NULL,
    "userId" UUID NOT NULL,
    "gold" INTEGER NOT NULL,

    CONSTRAINT "TournamentGold_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TournamentXp" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "date" DATE NOT NULL,
    "bruteId" UUID NOT NULL,
    "xp" INTEGER NOT NULL,

    CONSTRAINT "TournamentXp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Achievement" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" "AchievementName" NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0,
    "bruteId" UUID,
    "userId" UUID,

    CONSTRAINT "Achievement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Title" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" "AchievementName" NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "Title_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BruteReport" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "bruteId" UUID NOT NULL,
    "reason" "BruteReportReason" NOT NULL DEFAULT 'name',
    "count" INTEGER NOT NULL DEFAULT 1,
    "date" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "BruteReportStatus" NOT NULL DEFAULT 'pending',

    CONSTRAINT "BruteReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServerState" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "globalTournamentValid" BOOLEAN NOT NULL DEFAULT true,
    "activeModifiers" "FightModifier"[] DEFAULT ARRAY[]::"FightModifier"[],
    "modifiersEndAt" DATE,
    "randomWeapon" INTEGER,
    "randomSkill" INTEGER,
    "nextModifiers" "FightModifier"[] DEFAULT ARRAY[]::"FightModifier"[],

    CONSTRAINT "ServerState_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BannedWord" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "word" VARCHAR(255) NOT NULL,

    CONSTRAINT "BannedWord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BannedIp" (
    "id" VARCHAR(255) NOT NULL,

    CONSTRAINT "BannedIp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Clan" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" VARCHAR(255) NOT NULL,
    "deletedAt" TIMESTAMPTZ,
    "limit" INTEGER NOT NULL DEFAULT 10,
    "points" INTEGER NOT NULL DEFAULT 0,
    "elo" INTEGER NOT NULL DEFAULT 1000,
    "boss" "BossName" NOT NULL DEFAULT 'GoldClaw',
    "damageOnBoss" INTEGER NOT NULL DEFAULT 0,
    "masterId" UUID,
    "participateInClanWar" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Clan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClanThread" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "clanId" UUID NOT NULL,
    "creatorId" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "locked" BOOLEAN NOT NULL DEFAULT false,
    "pinned" BOOLEAN NOT NULL DEFAULT false,
    "postCount" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ClanThread_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClanPost" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "threadId" UUID NOT NULL,
    "authorId" UUID NOT NULL,
    "date" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "message" TEXT NOT NULL,

    CONSTRAINT "ClanPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BossDamage" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "bruteId" UUID NOT NULL,
    "clanId" UUID NOT NULL,
    "damage" INTEGER NOT NULL,

    CONSTRAINT "BossDamage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClanWar" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "duration" INTEGER NOT NULL DEFAULT 7,
    "type" "ClanWarType" NOT NULL DEFAULT 'official',
    "date" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "ClanWarStatus" NOT NULL DEFAULT 'ongoing',
    "attackerId" UUID NOT NULL,
    "attackerEloChange" INTEGER NOT NULL DEFAULT 0,
    "attackerWins" INTEGER NOT NULL DEFAULT 0,
    "defenderId" UUID NOT NULL,
    "defenderEloChange" INTEGER NOT NULL DEFAULT 0,
    "defenderWins" INTEGER NOT NULL DEFAULT 0,
    "winnerId" UUID,

    CONSTRAINT "ClanWar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClanWarFighters" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "clanWarId" UUID NOT NULL,
    "day" INTEGER NOT NULL,

    CONSTRAINT "ClanWarFighters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InventoryItem" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "type" "InventoryItemType" NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 1,
    "bruteId" UUID,
    "userId" UUID,

    CONSTRAINT "InventoryItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Release" (
    "version" VARCHAR(255) NOT NULL,
    "date" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Release_pkey" PRIMARY KEY ("version")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "date" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" "EventType" NOT NULL DEFAULT 'battleRoyale',
    "maxLevel" INTEGER NOT NULL,
    "maxRound" INTEGER NOT NULL DEFAULT 999,
    "status" "EventStatus" NOT NULL DEFAULT 'starting',
    "winnerId" UUID,
    "finishedAt" DATE,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BruteToTournament" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_Opponents" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_BruteToTitle" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_Followers" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_ClanWarAttackerFighters" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_ClanWarDefenderFighters" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_FavoriteFights" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_BruteReportToUser" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Brute_id_key" ON "Brute"("id");

-- CreateIndex
CREATE INDEX "Brute_deletedAt_eventId_ranking_idx" ON "Brute"("deletedAt", "eventId", "ranking");

-- CreateIndex
CREATE UNIQUE INDEX "BruteStartingStats_id_key" ON "BruteStartingStats"("id");

-- CreateIndex
CREATE UNIQUE INDEX "BruteStartingStats_bruteId_key" ON "BruteStartingStats"("bruteId");

-- CreateIndex
CREATE UNIQUE INDEX "Fight_id_key" ON "Fight"("id");

-- CreateIndex
CREATE INDEX "Fight_tournamentId_winner_brute1Id_brute2Id_idx" ON "Fight"("tournamentId", "winner", "brute1Id", "brute2Id");

-- CreateIndex
CREATE INDEX "Fight_date_tournamentId_id_idx" ON "Fight"("date", "tournamentId", "id");

-- CreateIndex
CREATE INDEX "Fight_clanWarId_idx" ON "Fight"("clanWarId");

-- CreateIndex
CREATE UNIQUE INDEX "Log_id_key" ON "Log"("id");

-- CreateIndex
CREATE INDEX "Log_currentBruteId_date_idx" ON "Log"("currentBruteId", "date");

-- CreateIndex
CREATE INDEX "Log_date_idx" ON "Log"("date");

-- CreateIndex
CREATE UNIQUE INDEX "DestinyChoice_id_key" ON "DestinyChoice"("id");

-- CreateIndex
CREATE INDEX "DestinyChoice_bruteId_path_idx" ON "DestinyChoice"("bruteId", "path");

-- CreateIndex
CREATE UNIQUE INDEX "Tournament_id_key" ON "Tournament"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Tournament_eventId_key" ON "Tournament"("eventId");

-- CreateIndex
CREATE INDEX "Tournament_type_date_idx" ON "Tournament"("type", "date");

-- CreateIndex
CREATE UNIQUE INDEX "TournamentAchievement_id_key" ON "TournamentAchievement"("id");

-- CreateIndex
CREATE UNIQUE INDEX "TournamentAchievement_achievement_bruteId_key" ON "TournamentAchievement"("achievement", "bruteId");

-- CreateIndex
CREATE UNIQUE INDEX "TournamentGold_id_key" ON "TournamentGold"("id");

-- CreateIndex
CREATE UNIQUE INDEX "TournamentXp_id_key" ON "TournamentXp"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Achievement_id_key" ON "Achievement"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Achievement_name_bruteId_key" ON "Achievement"("name", "bruteId");

-- CreateIndex
CREATE UNIQUE INDEX "Title_id_key" ON "Title"("id");

-- CreateIndex
CREATE UNIQUE INDEX "BruteReport_id_key" ON "BruteReport"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ServerState_id_key" ON "ServerState"("id");

-- CreateIndex
CREATE UNIQUE INDEX "BannedWord_id_key" ON "BannedWord"("id");

-- CreateIndex
CREATE INDEX "BannedWord_word_idx" ON "BannedWord"("word");

-- CreateIndex
CREATE UNIQUE INDEX "Clan_id_key" ON "Clan"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Clan_masterId_key" ON "Clan"("masterId");

-- CreateIndex
CREATE INDEX "Clan_deletedAt_name_points_idx" ON "Clan"("deletedAt", "name", "points");

-- CreateIndex
CREATE INDEX "Clan_deletedAt_name_elo_idx" ON "Clan"("deletedAt", "name", "elo");

-- CreateIndex
CREATE UNIQUE INDEX "Clan_name_deletedAt_key" ON "Clan"("name", "deletedAt");

-- CreateIndex
CREATE UNIQUE INDEX "ClanThread_id_key" ON "ClanThread"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ClanPost_id_key" ON "ClanPost"("id");

-- CreateIndex
CREATE UNIQUE INDEX "BossDamage_id_key" ON "BossDamage"("id");

-- CreateIndex
CREATE INDEX "BossDamage_clanId_idx" ON "BossDamage"("clanId");

-- CreateIndex
CREATE UNIQUE INDEX "BossDamage_bruteId_clanId_key" ON "BossDamage"("bruteId", "clanId");

-- CreateIndex
CREATE UNIQUE INDEX "ClanWar_id_key" ON "ClanWar"("id");

-- CreateIndex
CREATE INDEX "ClanWar_status_idx" ON "ClanWar"("status");

-- CreateIndex
CREATE UNIQUE INDEX "ClanWarFighters_id_key" ON "ClanWarFighters"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ClanWarFighters_clanWarId_day_key" ON "ClanWarFighters"("clanWarId", "day");

-- CreateIndex
CREATE UNIQUE INDEX "InventoryItem_id_key" ON "InventoryItem"("id");

-- CreateIndex
CREATE INDEX "InventoryItem_bruteId_idx" ON "InventoryItem"("bruteId");

-- CreateIndex
CREATE UNIQUE INDEX "InventoryItem_type_bruteId_key" ON "InventoryItem"("type", "bruteId");

-- CreateIndex
CREATE UNIQUE INDEX "InventoryItem_type_userId_key" ON "InventoryItem"("type", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "Release_version_key" ON "Release"("version");

-- CreateIndex
CREATE INDEX "Release_date_idx" ON "Release"("date");

-- CreateIndex
CREATE UNIQUE INDEX "Event_id_key" ON "Event"("id");

-- CreateIndex
CREATE INDEX "Event_date_type_status_idx" ON "Event"("date", "type", "status");

-- CreateIndex
CREATE UNIQUE INDEX "_BruteToTournament_AB_unique" ON "_BruteToTournament"("A", "B");

-- CreateIndex
CREATE INDEX "_BruteToTournament_B_index" ON "_BruteToTournament"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Opponents_AB_unique" ON "_Opponents"("A", "B");

-- CreateIndex
CREATE INDEX "_Opponents_B_index" ON "_Opponents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BruteToTitle_AB_unique" ON "_BruteToTitle"("A", "B");

-- CreateIndex
CREATE INDEX "_BruteToTitle_B_index" ON "_BruteToTitle"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Followers_AB_unique" ON "_Followers"("A", "B");

-- CreateIndex
CREATE INDEX "_Followers_B_index" ON "_Followers"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ClanWarAttackerFighters_AB_unique" ON "_ClanWarAttackerFighters"("A", "B");

-- CreateIndex
CREATE INDEX "_ClanWarAttackerFighters_B_index" ON "_ClanWarAttackerFighters"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ClanWarDefenderFighters_AB_unique" ON "_ClanWarDefenderFighters"("A", "B");

-- CreateIndex
CREATE INDEX "_ClanWarDefenderFighters_B_index" ON "_ClanWarDefenderFighters"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FavoriteFights_AB_unique" ON "_FavoriteFights"("A", "B");

-- CreateIndex
CREATE INDEX "_FavoriteFights_B_index" ON "_FavoriteFights"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BruteReportToUser_AB_unique" ON "_BruteReportToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_BruteReportToUser_B_index" ON "_BruteReportToUser"("B");

-- AddForeignKey
ALTER TABLE "Brute" ADD CONSTRAINT "Brute_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Brute" ADD CONSTRAINT "Brute_masterId_fkey" FOREIGN KEY ("masterId") REFERENCES "Brute"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Brute" ADD CONSTRAINT "Brute_clanId_fkey" FOREIGN KEY ("clanId") REFERENCES "Clan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Brute" ADD CONSTRAINT "Brute_wantToJoinClanId_fkey" FOREIGN KEY ("wantToJoinClanId") REFERENCES "Clan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Brute" ADD CONSTRAINT "Brute_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BruteStartingStats" ADD CONSTRAINT "BruteStartingStats_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fight" ADD CONSTRAINT "Fight_brute1Id_fkey" FOREIGN KEY ("brute1Id") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fight" ADD CONSTRAINT "Fight_brute2Id_fkey" FOREIGN KEY ("brute2Id") REFERENCES "Brute"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fight" ADD CONSTRAINT "Fight_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fight" ADD CONSTRAINT "Fight_clanWarId_fkey" FOREIGN KEY ("clanWarId") REFERENCES "ClanWar"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Log" ADD CONSTRAINT "Log_currentBruteId_fkey" FOREIGN KEY ("currentBruteId") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Log" ADD CONSTRAINT "Log_fightId_fkey" FOREIGN KEY ("fightId") REFERENCES "Fight"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Log" ADD CONSTRAINT "Log_destinyChoiceId_fkey" FOREIGN KEY ("destinyChoiceId") REFERENCES "DestinyChoice"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DestinyChoice" ADD CONSTRAINT "DestinyChoice_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tournament" ADD CONSTRAINT "Tournament_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TournamentAchievement" ADD CONSTRAINT "TournamentAchievement_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TournamentGold" ADD CONSTRAINT "TournamentGold_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TournamentXp" ADD CONSTRAINT "TournamentXp_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Achievement" ADD CONSTRAINT "Achievement_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Achievement" ADD CONSTRAINT "Achievement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BruteReport" ADD CONSTRAINT "BruteReport_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Clan" ADD CONSTRAINT "Clan_masterId_fkey" FOREIGN KEY ("masterId") REFERENCES "Brute"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClanThread" ADD CONSTRAINT "ClanThread_clanId_fkey" FOREIGN KEY ("clanId") REFERENCES "Clan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClanThread" ADD CONSTRAINT "ClanThread_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClanPost" ADD CONSTRAINT "ClanPost_threadId_fkey" FOREIGN KEY ("threadId") REFERENCES "ClanThread"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClanPost" ADD CONSTRAINT "ClanPost_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BossDamage" ADD CONSTRAINT "BossDamage_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BossDamage" ADD CONSTRAINT "BossDamage_clanId_fkey" FOREIGN KEY ("clanId") REFERENCES "Clan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClanWar" ADD CONSTRAINT "ClanWar_attackerId_fkey" FOREIGN KEY ("attackerId") REFERENCES "Clan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClanWar" ADD CONSTRAINT "ClanWar_defenderId_fkey" FOREIGN KEY ("defenderId") REFERENCES "Clan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClanWar" ADD CONSTRAINT "ClanWar_winnerId_fkey" FOREIGN KEY ("winnerId") REFERENCES "Clan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClanWarFighters" ADD CONSTRAINT "ClanWarFighters_clanWarId_fkey" FOREIGN KEY ("clanWarId") REFERENCES "ClanWar"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryItem" ADD CONSTRAINT "InventoryItem_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryItem" ADD CONSTRAINT "InventoryItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_winnerId_fkey" FOREIGN KEY ("winnerId") REFERENCES "Brute"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BruteToTournament" ADD CONSTRAINT "_BruteToTournament_A_fkey" FOREIGN KEY ("A") REFERENCES "Brute"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BruteToTournament" ADD CONSTRAINT "_BruteToTournament_B_fkey" FOREIGN KEY ("B") REFERENCES "Tournament"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Opponents" ADD CONSTRAINT "_Opponents_A_fkey" FOREIGN KEY ("A") REFERENCES "Brute"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Opponents" ADD CONSTRAINT "_Opponents_B_fkey" FOREIGN KEY ("B") REFERENCES "Brute"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BruteToTitle" ADD CONSTRAINT "_BruteToTitle_A_fkey" FOREIGN KEY ("A") REFERENCES "Brute"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BruteToTitle" ADD CONSTRAINT "_BruteToTitle_B_fkey" FOREIGN KEY ("B") REFERENCES "Title"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Followers" ADD CONSTRAINT "_Followers_A_fkey" FOREIGN KEY ("A") REFERENCES "Brute"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Followers" ADD CONSTRAINT "_Followers_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClanWarAttackerFighters" ADD CONSTRAINT "_ClanWarAttackerFighters_A_fkey" FOREIGN KEY ("A") REFERENCES "Brute"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClanWarAttackerFighters" ADD CONSTRAINT "_ClanWarAttackerFighters_B_fkey" FOREIGN KEY ("B") REFERENCES "ClanWarFighters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClanWarDefenderFighters" ADD CONSTRAINT "_ClanWarDefenderFighters_A_fkey" FOREIGN KEY ("A") REFERENCES "Brute"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClanWarDefenderFighters" ADD CONSTRAINT "_ClanWarDefenderFighters_B_fkey" FOREIGN KEY ("B") REFERENCES "ClanWarFighters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FavoriteFights" ADD CONSTRAINT "_FavoriteFights_A_fkey" FOREIGN KEY ("A") REFERENCES "Fight"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FavoriteFights" ADD CONSTRAINT "_FavoriteFights_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BruteReportToUser" ADD CONSTRAINT "_BruteReportToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "BruteReport"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BruteReportToUser" ADD CONSTRAINT "_BruteReportToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
