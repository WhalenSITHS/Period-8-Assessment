const pokemons = [
  {
    id: 344,
    name: {
      english: "Claydol",
      japanese: "ネンドール",
      chinese: "念力土偶",
      french: "Kaorine",
    },
    type: ["Ground", "Psychic"],
    base: {
      HP: 60,
      Attack: 70,
      Defense: 105,
      "Sp. Attack": 70,
      "Sp. Defense": 120,
      Speed: 75,
    },
  },
  {
    id: 345,
    name: {
      english: "Lileep",
      japanese: "リリーラ",
      chinese: "触手百合",
      french: "Lilia",
    },
    type: ["Rock", "Grass"],
    base: {
      HP: 66,
      Attack: 41,
      Defense: 77,
      "Sp. Attack": 61,
      "Sp. Defense": 87,
      Speed: 23,
    },
  },
  {
    id: 346,
    name: {
      english: "Cradily",
      japanese: "ユレイドル",
      chinese: "摇篮百合",
      french: "Vacilys",
    },
    type: ["Rock", "Grass"],
    base: {
      HP: 86,
      Attack: 81,
      Defense: 97,
      "Sp. Attack": 81,
      "Sp. Defense": 107,
      Speed: 43,
    },
  },
  {
    id: 347,
    name: {
      english: "Anorith",
      japanese: "アノプス",
      chinese: "太古羽虫",
      french: "Anorith",
    },
    type: ["Rock", "Bug"],
    base: {
      HP: 45,
      Attack: 95,
      Defense: 50,
      "Sp. Attack": 40,
      "Sp. Defense": 50,
      Speed: 75,
    },
  },
  {
    id: 348,
    name: {
      english: "Armaldo",
      japanese: "アーマルド",
      chinese: "太古盔甲",
      french: "Armaldo",
    },
    type: ["Rock", "Bug"],
    base: {
      HP: 75,
      Attack: 125,
      Defense: 100,
      "Sp. Attack": 70,
      "Sp. Defense": 80,
      Speed: 45,
    },
  },
  {
    id: 349,
    name: {
      english: "Feebas",
      japanese: "ヒンバス",
      chinese: "丑丑鱼",
      french: "Barpau",
    },
    type: ["Water"],
    base: {
      HP: 20,
      Attack: 15,
      Defense: 20,
      "Sp. Attack": 10,
      "Sp. Defense": 55,
      Speed: 80,
    },
  },
  {
    id: 350,
    name: {
      english: "Milotic",
      japanese: "ミロカロス",
      chinese: "美纳斯",
      french: "Milobellus",
    },
    type: ["Water"],
    base: {
      HP: 95,
      Attack: 60,
      Defense: 79,
      "Sp. Attack": 100,
      "Sp. Defense": 125,
      Speed: 81,
    },
  },
  {
    id: 351,
    name: {
      english: "Castform",
      japanese: "ポワルン",
      chinese: "飘浮泡泡",
      french: "Morphéo",
    },
    type: ["Normal"],
    base: {
      HP: 70,
      Attack: 70,
      Defense: 70,
      "Sp. Attack": 70,
      "Sp. Defense": 70,
      Speed: 70,
    },
  },
  {
    id: 352,
    name: {
      english: "Kecleon",
      japanese: "カクレオン",
      chinese: "变隐龙",
      french: "Kecleon",
    },
    type: ["Normal"],
    base: {
      HP: 60,
      Attack: 90,
      Defense: 70,
      "Sp. Attack": 60,
      "Sp. Defense": 120,
      Speed: 40,
    },
  },
  {
    id: 353,
    name: {
      english: "Shuppet",
      japanese: "カゲボウズ",
      chinese: "怨影娃娃",
      french: "Polichombr",
    },
    type: ["Ghost"],
    base: {
      HP: 44,
      Attack: 75,
      Defense: 35,
      "Sp. Attack": 63,
      "Sp. Defense": 33,
      Speed: 45,
    },
  },
  {
    id: 354,
    name: {
      english: "Banette",
      japanese: "ジュペッタ",
      chinese: "诅咒娃娃",
      french: "Branette",
    },
    type: ["Ghost"],
    base: {
      HP: 64,
      Attack: 115,
      Defense: 65,
      "Sp. Attack": 83,
      "Sp. Defense": 63,
      Speed: 65,
    },
  },
  {
    id: 355,
    name: {
      english: "Duskull",
      japanese: "ヨマワル",
      chinese: "夜巡灵",
      french: "Skelénox",
    },
    type: ["Ghost"],
    base: {
      HP: 20,
      Attack: 40,
      Defense: 90,
      "Sp. Attack": 30,
      "Sp. Defense": 90,
      Speed: 25,
    },
  },
  {
    id: 356,
    name: {
      english: "Dusclops",
      japanese: "サマヨール",
      chinese: "彷徨夜灵",
      french: "Téraclope",
    },
    type: ["Ghost"],
    base: {
      HP: 40,
      Attack: 70,
      Defense: 130,
      "Sp. Attack": 60,
      "Sp. Defense": 130,
      Speed: 25,
    },
  },
  {
    id: 357,
    name: {
      english: "Tropius",
      japanese: "トロピウス",
      chinese: "热带龙",
      french: "Tropius",
    },
    type: ["Grass", "Flying"],
    base: {
      HP: 99,
      Attack: 68,
      Defense: 83,
      "Sp. Attack": 72,
      "Sp. Defense": 87,
      Speed: 51,
    },
  },
  {
    id: 358,
    name: {
      english: "Chimecho",
      japanese: "チリーン",
      chinese: "风铃铃",
      french: "Éoko",
    },
    type: ["Psychic"],
    base: {
      HP: 75,
      Attack: 50,
      Defense: 80,
      "Sp. Attack": 95,
      "Sp. Defense": 90,
      Speed: 65,
    },
  },
  {
    id: 359,
    name: {
      english: "Absol",
      japanese: "アブソル",
      chinese: "阿勃梭鲁",
      french: "Absol",
    },
    type: ["Dark"],
    base: {
      HP: 65,
      Attack: 130,
      Defense: 60,
      "Sp. Attack": 75,
      "Sp. Defense": 60,
      Speed: 75,
    },
  },
  {
    id: 360,
    name: {
      english: "Wynaut",
      japanese: "ソーナノ",
      chinese: "小果然",
      french: "Okéoké",
    },
    type: ["Psychic"],
    base: {
      HP: 95,
      Attack: 23,
      Defense: 48,
      "Sp. Attack": 23,
      "Sp. Defense": 48,
      Speed: 23,
    },
  },
  {
    id: 361,
    name: {
      english: "Snorunt",
      japanese: "ユキワラシ",
      chinese: "雪童子",
      french: "Stalgamin",
    },
    type: ["Ice"],
    base: {
      HP: 50,
      Attack: 50,
      Defense: 50,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      Speed: 50,
    },
  },
];

// 1)While chaining array methods, print the name of each pokemon with a base HP stat 75 or higher

// 2) While Chaining Array methods print the name of each pokemon who's type includes Rock
