// DEFINES

const BARAKA = "BARAKA";
const BO_RAI_CHO = "BO' RAI CHO";
const CASSIE_CAGE = "CASSIE CAGE";
const DVORAH = "D'VORAH";
const ERMAC = "ERMAC";
const ERRON_BLACK = "ERRON BLACK";
const FREDDY_KRUEGER = "FREDDY KRUEGER";
const FUJIN = "FUJIN";
const GORO = "GORO";
const JACQUI_BRIGGS = "JACQUI BRIGGS";
const JADE = "JADE";
const JASON_VOORHEES = "JASON VOORHEES";
const JAX_BRIGGS = "JAX BRIGGS";
const JOHNNY_CAGE = "JOHNNY CAGE";
const KABAL = "KABAL";
const KANO = "KANO";
const KENSHI = "KENSHI";
const KINTARO = "KINTARO";
const KITANA = "KITANA";
const KOTAL_KAHN = "KOTAL KAHN";
const KUNG_JIN = "KUNG JIN";
const KUNG_LAO = "KUNG LAO";
const LEATHERFACE = "LEATHERFACE";
const LIN_KUEI = "LIN KUEI";
const LIU_KANG = "LIU KANG";
const MILEENA = "MILEENA";
const MONK = "MONK";
const NIGHTWOLF = "NIGHTWOLF";
const NOOB_SAIBOT = "NOOB SAIBOT";
const ONI = "ONI";
const OSH_TEKK = "OSH-TEKK";
const QUAN_CHI = "QUAN CHI";
const RAIDEN = "RAIDEN";
const RAIN = "RAIN";
const REPTILE = "REPTILE";
const SAURIAN = "SAURIAN";
const SCORPION = "SCORPION";
const SERGEANT = "SERGEANT";
const SHANG_TSUNG = "SHANG TSUNG";
const SHAO_KAHN = "SHAO KAHN";
const SHINNOK = "SHINNOK";
const SHIRAI_RYU = "SHIRAI RYU";
const SINDEL = "SINDEL";
const SKARLET = "SKARLET";
const SMOKE = "SMOKE";
const SONYA_BLADE = "SONYA BLADE";
const SUB_ZERO = "SUB-ZERO";
const TAKEDA = "TAKEDA";
const TANYA = "TANYA";
const TERMINATOR = "TERMINATOR";
const JOKER = "JOKER";
const TREMOR = "TREMOR";
const TRIBORG = "TRIBORG";
const TROOPER = "TROOPER";

const ELDER_GOD = "Elder God";
const MARTIAL_ARTIST = "Martial Artist";
const NETHERREALM = "Netherrealm";
const NOMAD = "Nomad";
const OUTWORLD = "Outworld";
const SPEC_OPS = "Spec Ops";
const MARTIAL_ARTIST_SPEC_OPS = "Martial Artist/Spec Ops";
const MARTIAL_ARTIST_OUTWORLD = "Martial Artist/Outworld";
const MARTIAL_ARTIST_ELDER_GOD = "Martial Artist/Elder God";
const MARTIAL_ARTIST_NETHERREALM = "Martial Artist/ Netherrealm";
const NETHERREALM_OUTWORLD = "Netherrealm/ Outworld";
const NETHERREALM_ELDER_GOD = "Netherrealm/ Elder God";
const ELDER_GOD_SPEC_OPS = "Elder God/Spec Ops";

const R_BRONZE = 1;
const R_SILVER = 2;
const R_GOLD = 3;
const R_DIAMOND = 4;

const NOVAR = "NONE";
const KLASSIC_VAR = "Klassic";
const MK11_VAR = "MK11";
const MK1_VAR = "MK1";
const COS_VAR = "Circle of Shadow";
const NIGHTMARE_VAR = "Nightmare";
const DOTD_VAR = "Day of the Dead";
const LIZARD_VAR = "Lizard";
const KLASSIC_MOVIE_VAR = "Klassic Movie";
const KOMBAT_CUP_VAR = "Kombat Cup";
const BLACK_DRAGON_VAR = "Black Dragon";
const RONIN_VAR = "Ronin";
const ASSASSIN_VAR = "Assassin";
const EDENIAN_BLOOD_VAR = "Edenian Blood";
const STRIKE_FORCE_VAR = "Strike Force";
const KOLD_VAR = "Kold War";
const ONSLAUGHT_VAR = "Onslaught";

class Kharacter {

    constructor(name, variation, rarity, type) {

        this.name = name;
        this.variation = variation;
        this.rarity = rarity;
        this.type = type;

    }

    debugLog() {
        console.log(this);
    }
}

// ROSTER DEFINITION

let kharacterList = [

    new Kharacter(BARAKA, "Lizard", R_GOLD, OUTWORLD),
    new Kharacter(BARAKA, "Scourge", R_GOLD, OUTWORLD),
    new Kharacter(BO_RAI_CHO, "Dragon Breath", R_GOLD, MARTIAL_ARTIST),
    new Kharacter(CASSIE_CAGE, NOVAR, R_SILVER, SPEC_OPS),
    new Kharacter(CASSIE_CAGE, "Covert Ops", R_GOLD, SPEC_OPS),
    new Kharacter(CASSIE_CAGE, "Kombat Cup", R_GOLD, SPEC_OPS),
    new Kharacter(CASSIE_CAGE, STRIKE_FORCE_VAR, R_DIAMOND, SPEC_OPS),
    new Kharacter(CASSIE_CAGE, "Undercover", R_GOLD, SPEC_OPS),
    new Kharacter(DVORAH, NOVAR, R_SILVER, OUTWORLD),
    new Kharacter(DVORAH, "Swarm Queen", R_GOLD, OUTWORLD),
    new Kharacter(DVORAH, "Venomous", R_GOLD, OUTWORLD),
    new Kharacter(DVORAH, "Wretch", R_DIAMOND, OUTWORLD),
    new Kharacter(ERMAC, NOVAR, R_SILVER, OUTWORLD),
    new Kharacter(ERMAC, "Klassic", R_GOLD, OUTWORLD),
    new Kharacter(ERMAC, "Master of Souls", R_GOLD, OUTWORLD),
    new Kharacter(ERMAC, "Pharaoh", R_GOLD, OUTWORLD),
    new Kharacter(ERMAC, "Spectral", R_GOLD, OUTWORLD),
    new Kharacter(ERRON_BLACK, "Black Dragon", R_DIAMOND, NOMAD),
    new Kharacter(ERRON_BLACK, "Day of the Dead", R_DIAMOND, OUTWORLD),
    new Kharacter(ERRON_BLACK, "Gunslinger", R_GOLD, OUTWORLD),
    new Kharacter(FREDDY_KRUEGER, NIGHTMARE_VAR, R_DIAMOND, NETHERREALM),
    new Kharacter(FUJIN, MK11_VAR, R_DIAMOND, ELDER_GOD),
    new Kharacter(FUJIN, ONSLAUGHT_VAR, R_GOLD, ELDER_GOD),
    new Kharacter(GORO, KLASSIC_VAR, R_DIAMOND, OUTWORLD),
    new Kharacter(GORO, "Tigrar Fury", R_GOLD, OUTWORLD),
    new Kharacter(JACQUI_BRIGGS, NOVAR, R_SILVER, SPEC_OPS),
    new Kharacter(JACQUI_BRIGGS, "Cybernetic", R_GOLD, SPEC_OPS),
    new Kharacter(JACQUI_BRIGGS, "High Tech", R_GOLD, SPEC_OPS),
    new Kharacter(JACQUI_BRIGGS, "Kosplay", R_GOLD, MARTIAL_ARTIST_SPEC_OPS),
    new Kharacter(JADE, ASSASSIN_VAR, R_DIAMOND, MARTIAL_ARTIST_OUTWORLD),
    new Kharacter(JADE, DOTD_VAR, R_DIAMOND, OUTWORLD),
    new Kharacter(JADE, KLASSIC_VAR, R_GOLD, OUTWORLD),
    new Kharacter(JADE, LIZARD_VAR, R_GOLD, OUTWORLD),
    new Kharacter(JADE, MK11_VAR, R_DIAMOND, NETHERREALM),
    new Kharacter(JASON_VOORHEES, NIGHTMARE_VAR, R_DIAMOND, NETHERREALM),
    new Kharacter(JASON_VOORHEES, "Slasher", R_GOLD, NETHERREALM),
    new Kharacter(JASON_VOORHEES, "Unstoppable", R_GOLD, NETHERREALM),
    new Kharacter(JAX_BRIGGS, NOVAR, R_SILVER, SPEC_OPS),
    new Kharacter(JAX_BRIGGS, COS_VAR, R_DIAMOND, NETHERREALM),
    new Kharacter(JAX_BRIGGS, "Farmer", R_SILVER, SPEC_OPS),
    new Kharacter(JAX_BRIGGS, "Heavy Weapons", R_GOLD, SPEC_OPS),
    new Kharacter(JAX_BRIGGS, KLASSIC_VAR, R_DIAMOND, SPEC_OPS),
    new Kharacter(JOHNNY_CAGE, NOVAR, R_SILVER, SPEC_OPS),
    new Kharacter(JOHNNY_CAGE, "A-List", R_GOLD, SPEC_OPS),
    new Kharacter(JOHNNY_CAGE, KLASSIC_MOVIE_VAR, R_DIAMOND, SPEC_OPS),
    new Kharacter(JOHNNY_CAGE, KOMBAT_CUP_VAR, R_GOLD, SPEC_OPS),
    new Kharacter(JOHNNY_CAGE, "Ninja Mime", R_BRONZE, MARTIAL_ARTIST),
    new Kharacter(JOHNNY_CAGE, STRIKE_FORCE_VAR, R_DIAMOND, SPEC_OPS),
    new Kharacter(JOHNNY_CAGE, "Stunt Double", R_GOLD, SPEC_OPS),
    new Kharacter(KABAL, BLACK_DRAGON_VAR, R_DIAMOND, OUTWORLD),
    new Kharacter(KABAL, MK11_VAR, R_DIAMOND, NETHERREALM),
    new Kharacter(KANO, NOVAR, R_SILVER, OUTWORLD),
    new Kharacter(KANO, BLACK_DRAGON_VAR, R_DIAMOND, OUTWORLD),
    new Kharacter(KANO, "Commando", R_GOLD, OUTWORLD),
    new Kharacter(KANO, KLASSIC_VAR, R_GOLD, OUTWORLD),
    new Kharacter(KENSHI, NOVAR, R_SILVER, MARTIAL_ARTIST_SPEC_OPS),
    new Kharacter(KENSHI, "Balanced", R_GOLD, SPEC_OPS),
    new Kharacter(KENSHI, "Elder God", R_GOLD, MARTIAL_ARTIST_ELDER_GOD),
    new Kharacter(KENSHI, "Possessed", R_GOLD, MARTIAL_ARTIST),
    new Kharacter(KENSHI, RONIN_VAR, R_DIAMOND, MARTIAL_ARTIST),
    new Kharacter(KINTARO, "Shokan Warrior", R_GOLD, OUTWORLD),
    new Kharacter(KITANA, ASSASSIN_VAR, R_DIAMOND, OUTWORLD),
    new Kharacter(KITANA, COS_VAR, R_DIAMOND, NETHERREALM),
    new Kharacter(KITANA, DOTD_VAR, R_DIAMOND, OUTWORLD),
    new Kharacter(KITANA, EDENIAN_BLOOD_VAR, R_GOLD, OUTWORLD),
    new Kharacter(KITANA, KLASSIC_VAR, R_SILVER, OUTWORLD),
    new Kharacter(KITANA, "Mournful", R_GOLD, OUTWORLD),
    new Kharacter(KITANA, RONIN_VAR, R_DIAMOND, MARTIAL_ARTIST_OUTWORLD),
    new Kharacter(KOTAL_KAHN, NOVAR, R_SILVER, OUTWORLD),
    new Kharacter(KOTAL_KAHN, "Blood God", R_GOLD, OUTWORLD),
    new Kharacter(KOTAL_KAHN, "Dark Lord", R_GOLD, OUTWORLD),
    new Kharacter(KOTAL_KAHN, "Sun God", R_GOLD, OUTWORLD),
    new Kharacter(KUNG_JIN, NOVAR, R_SILVER, MARTIAL_ARTIST),
    new Kharacter(KUNG_JIN, "Bojutsu", R_GOLD, MARTIAL_ARTIST),
    new Kharacter(KUNG_JIN, "Marksman", R_GOLD, MARTIAL_ARTIST),
    new Kharacter(KUNG_JIN, "Shaolin", R_GOLD, MARTIAL_ARTIST),
    new Kharacter(KUNG_LAO, COS_VAR, R_DIAMOND, NETHERREALM),
    new Kharacter(KUNG_LAO, "Hat Trick", R_GOLD, MARTIAL_ARTIST),
    new Kharacter(KUNG_LAO, "Shaolin Fist", R_GOLD, MARTIAL_ARTIST),
    new Kharacter(KUNG_LAO, "Shaolin Master", R_GOLD, MARTIAL_ARTIST),
    new Kharacter(LEATHERFACE, NIGHTMARE_VAR, R_DIAMOND, NETHERREALM),
    new Kharacter(LIN_KUEI, NOVAR, R_BRONZE, MARTIAL_ARTIST),
    new Kharacter(LIU_KANG, COS_VAR, R_DIAMOND, MARTIAL_ARTIST_NETHERREALM),
    new Kharacter(LIU_KANG, "Fire God", R_DIAMOND, MARTIAL_ARTIST_ELDER_GOD),
    new Kharacter(LIU_KANG, "Flaming Fists", R_GOLD, MARTIAL_ARTIST),
    new Kharacter(LIU_KANG, KLASSIC_VAR, R_DIAMOND, MARTIAL_ARTIST),
    new Kharacter(LIU_KANG, MK11_VAR, R_DIAMOND, MARTIAL_ARTIST),
    new Kharacter(MILEENA, KLASSIC_VAR, R_GOLD, OUTWORLD),
    new Kharacter(MILEENA, "Piercing", R_GOLD, OUTWORLD),
    new Kharacter(MILEENA, "Ravenous", R_DIAMOND, OUTWORLD),
    new Kharacter(MILEENA, "Vampiress", R_GOLD, NETHERREALM),
    new Kharacter(MONK, NOVAR, R_BRONZE, MARTIAL_ARTIST),
    new Kharacter(NIGHTWOLF, MK11_VAR, R_DIAMOND, ELDER_GOD),
    new Kharacter(NIGHTWOLF, COS_VAR, R_DIAMOND, NETHERREALM_ELDER_GOD),
    new Kharacter(NOOB_SAIBOT, KLASSIC_VAR, R_DIAMOND, MARTIAL_ARTIST_NETHERREALM),
    new Kharacter(NOOB_SAIBOT, LIZARD_VAR, R_GOLD, NETHERREALM_OUTWORLD),
    new Kharacter(NOOB_SAIBOT, MK11_VAR, R_DIAMOND, NETHERREALM),
    new Kharacter(ONI, NOVAR, R_BRONZE, NETHERREALM),
    new Kharacter(OSH_TEKK, NOVAR, R_BRONZE, OUTWORLD),
    new Kharacter(QUAN_CHI, COS_VAR, R_DIAMOND, NETHERREALM),
    new Kharacter(QUAN_CHI, "Warlock", R_GOLD, NETHERREALM),
    new Kharacter(RAIDEN, "Dark", R_GOLD, NETHERREALM_ELDER_GOD),
    new Kharacter(RAIDEN, "Injustice 2", R_DIAMOND, ELDER_GOD),
    new Kharacter(RAIDEN, KLASSIC_MOVIE_VAR, R_DIAMOND, MARTIAL_ARTIST_ELDER_GOD),
    new Kharacter(RAIDEN, KLASSIC_VAR, R_DIAMOND, ELDER_GOD_SPEC_OPS),
    new Kharacter(RAIDEN, MK11_VAR, R_DIAMOND, ELDER_GOD),
    new Kharacter(RAIDEN, "Thunder God", R_GOLD, ELDER_GOD),
    new Kharacter(RAIN, EDENIAN_BLOOD_VAR, R_GOLD, OUTWORLD),
    new Kharacter(RAIN, KLASSIC_VAR, R_DIAMOND, MARTIAL_ARTIST_OUTWORLD),
    new Kharacter(RAIN, MK11_VAR, R_DIAMOND, OUTWORLD),
    new Kharacter(REPTILE, NOVAR, R_SILVER, OUTWORLD),
    new Kharacter(REPTILE, KLASSIC_VAR, R_DIAMOND, OUTWORLD),
    new Kharacter(REPTILE, "Kraken", R_GOLD, OUTWORLD),
    new Kharacter(REPTILE, "Nimble", R_GOLD, OUTWORLD),
    new Kharacter(REPTILE, "Noxious", R_GOLD, OUTWORLD),
    new Kharacter(SAURIAN, NOVAR, R_BRONZE, OUTWORLD),
    new Kharacter(SCORPION, NOVAR, R_SILVER, MARTIAL_ARTIST),
    new Kharacter(SCORPION, "Hanzo Hasashi", R_GOLD, MARTIAL_ARTIST),
    new Kharacter(SCORPION, "Hellspawn", R_DIAMOND, MARTIAL_ARTIST_NETHERREALM),
    new Kharacter(SCORPION, "Inferno", R_GOLD, MARTIAL_ARTIST_NETHERREALM),
    new Kharacter(SCORPION, "Injustice", R_GOLD, MARTIAL_ARTIST),
    new Kharacter(SCORPION, KLASSIC_VAR, R_GOLD, MARTIAL_ARTIST_NETHERREALM),
    new Kharacter(SCORPION, KOLD_VAR, R_DIAMOND, NETHERREALM),
    new Kharacter(SCORPION, MK1_VAR, R_DIAMOND, MARTIAL_ARTIST),
    new Kharacter(SCORPION, MK11_VAR, R_DIAMOND, MARTIAL_ARTIST_NETHERREALM),
    new Kharacter(SCORPION, "Ninjutsu", R_GOLD, MARTIAL_ARTIST),
    new Kharacter(SCORPION, STRIKE_FORCE_VAR, R_DIAMOND, MARTIAL_ARTIST_SPEC_OPS),
    new Kharacter(SERGEANT, NOVAR, R_BRONZE, SPEC_OPS),
    new Kharacter(SHANG_TSUNG, KLASSIC_VAR, R_GOLD, OUTWORLD),
    new Kharacter(SHANG_TSUNG, MK1_VAR, R_DIAMOND, OUTWORLD),
    new Kharacter(SHANG_TSUNG, MK11_VAR, R_DIAMOND, OUTWORLD),
    new Kharacter(SHAO_KAHN, "Konqueror", R_DIAMOND, OUTWORLD),
    new Kharacter(SHINNOK, "Bone Shaper", R_GOLD, NETHERREALM_OUTWORLD),
    new Kharacter(SHINNOK, "Vengeful", R_GOLD, NETHERREALM),
    new Kharacter(SHIRAI_RYU, NOVAR, R_BRONZE, MARTIAL_ARTIST),
    new Kharacter(SINDEL, MK11_VAR, R_DIAMOND, NETHERREALM_OUTWORLD),
    new Kharacter(SINDEL, EDENIAN_BLOOD_VAR, R_GOLD, OUTWORLD),
    new Kharacter(SKARLET, ASSASSIN_VAR, R_DIAMOND, OUTWORLD),
    new Kharacter(SKARLET, KOLD_VAR, R_DIAMOND, OUTWORLD),
    new Kharacter(SKARLET, MK11_VAR, R_DIAMOND, OUTWORLD),
    new Kharacter(SMOKE, KLASSIC_VAR, R_GOLD, MARTIAL_ARTIST),
    new Kharacter(SONYA_BLADE, NOVAR, R_SILVER, SPEC_OPS),
    new Kharacter(SONYA_BLADE, "Demolition", R_GOLD, SPEC_OPS),
    new Kharacter(SONYA_BLADE, KLASSIC_MOVIE_VAR, R_DIAMOND, SPEC_OPS),
    new Kharacter(SONYA_BLADE, KLASSIC_VAR, R_GOLD, SPEC_OPS),
    new Kharacter(SONYA_BLADE, KOLD_VAR, R_DIAMOND, SPEC_OPS),
    new Kharacter(SONYA_BLADE, KOMBAT_CUP_VAR, R_GOLD, SPEC_OPS),
    new Kharacter(SONYA_BLADE, "Tactical", R_GOLD, SPEC_OPS),
    new Kharacter(SUB_ZERO, NOVAR, R_SILVER, MARTIAL_ARTIST),
    new Kharacter(SUB_ZERO, COS_VAR, R_DIAMOND, NETHERREALM),
    new Kharacter(SUB_ZERO, "Cryomancer", R_GOLD, MARTIAL_ARTIST),
    new Kharacter(SUB_ZERO, "Grandmaster", R_GOLD, MARTIAL_ARTIST),
    new Kharacter(SUB_ZERO, KLASSIC_VAR, R_GOLD, MARTIAL_ARTIST),
    new Kharacter(SUB_ZERO, KOLD_VAR, R_DIAMOND, MARTIAL_ARTIST),
    new Kharacter(SUB_ZERO, MK11_VAR, R_DIAMOND, MARTIAL_ARTIST),
    new Kharacter(TAKEDA, RONIN_VAR, R_DIAMOND, SPEC_OPS),
    new Kharacter(TAKEDA, "Shirai Ryu", R_GOLD, MARTIAL_ARTIST_SPEC_OPS),
    new Kharacter(TANYA, "Kobu Jutsu", R_GOLD, MARTIAL_ARTIST_OUTWORLD),
    new Kharacter(TANYA, "Pyromancer", R_GOLD, MARTIAL_ARTIST_OUTWORLD),
    new Kharacter(TANYA, "Treacherous", R_GOLD, MARTIAL_ARTIST_OUTWORLD),
    new Kharacter(TERMINATOR, "Dark Fate", R_DIAMOND, SPEC_OPS),
    new Kharacter(TERMINATOR, "Guardian", R_DIAMOND, SPEC_OPS),
    new Kharacter(JOKER, "Ace of Knaves", R_DIAMOND, NOMAD),
    new Kharacter(TREMOR, "Aftershock", R_GOLD, MARTIAL_ARTIST),
    new Kharacter(TREMOR, BLACK_DRAGON_VAR, R_DIAMOND, MARTIAL_ARTIST),
    new Kharacter(TRIBORG, "Cyrax (LK-4D4)", R_GOLD, MARTIAL_ARTIST),
    new Kharacter(TRIBORG, "Sektor (LK-9T9)", R_GOLD, MARTIAL_ARTIST),
    new Kharacter(TRIBORG, "Smoke (LK-7T2)", R_GOLD, MARTIAL_ARTIST),
    new Kharacter(TRIBORG, "Sub-Zero (LK-520)", R_GOLD, MARTIAL_ARTIST),
    new Kharacter(TROOPER, NOVAR, R_BRONZE, SPEC_OPS)

];

// FUNCTIONS

function getKharacterRarity(rarityID) {

    const rarityStr = ["Bronze", "Silver", "Gold", "Diamond"];

    return rarityStr[rarityID - 1];
}

function getKharacterHTML(kharacter) {

    let kharacterHTML = `
    <div class="mkm-character">

            <div class="field-container">
                <span class="name"> ${kharacter.name} </span>
            </div>
            <div class="field-container">

                <span class="variation">
                    ${kharacter.variation}
                </span>

            </div>
            <div class="field-container">
                <span class="rarity ${getKharacterRarity(kharacter.rarity)}">${getKharacterRarity(kharacter.rarity)}</span>
            </div>
            <div class="field-container">
                <span class="type">${kharacter.type}</span>
            </div>

        </div>
        `;

    return kharacterHTML;

}

function clearList() {
    document.getElementById("mkm-list").innerHTML = "";
}

function appendList(index) {

    let list = document.getElementById("mkm-list");
    list.innerHTML += getKharacterHTML(kharacterList[index]);

}

function setKharacterCount(count) {

    let kharCountElem = document.getElementById("kharacter-count");

    if (kharCountElem == null) {

        let listContainer = document.getElementById("mkm-list");
        let kharCountHTML = '<span id="kharacter-count"></span>';

        listContainer.innerHTML = kharCountHTML.concat(listContainer.innerHTML);

        kharCountElem = document.getElementById("kharacter-count");
    }

    kharCountElem.textContent = `Kharacter Count : ${count}`;

}

function resetList() {

    clearList();

    setKharacterCount(kharacterList.length);

    for (let i = 0; i < kharacterList.length; i++) {
        appendList(i);
    }

}

function resetFilters() {

    let nameElem = document.getElementById("filter-name");
    let rarityElem = document.getElementById("filter-rarity");
    let variationElem = document.getElementById("filter-variation");
    let typeElem = document.getElementById("filter-type");

    nameElem.value = "";
    rarityElem.value = "Off";
    variationElem.value = "Off";
    typeElem.value = "Off";

    resetList();

}

function applyFilters() {

    let nameElem = document.getElementById("filter-name");
    let rarityElem = document.getElementById("filter-rarity");
    let variationElem = document.getElementById("filter-variation");
    let typeElem = document.getElementById("filter-type");

    nameElem.value.trim();
    nameElem.value = nameElem.value.toUpperCase();

    let filterName = (nameElem.value.length > 0);
    let filterRarity = !(rarityElem.value === "Off");
    let filterVariation = !(variationElem.value === "Off");
    let filterType = !(typeElem.value === "Off");

    clearList();

    let kharCount = 0;

    for (let i = 0; i < kharacterList.length; i++) {

        let kharName = "" + kharacterList[i].name;
        let kharRarity = "" + kharacterList[i].rarity;
        let kharVariation = "" + kharacterList[i].variation;
        let kharType = "" + kharacterList[i].type;

        if ((!filterName || kharName.includes(nameElem.value)) && (!filterRarity || kharRarity == rarityElem.value) && (!filterVariation || kharVariation == variationElem.value) && (!filterType || kharType == typeElem.value)) {

            appendList(i);
            kharCount += 1;

        }
    }

    setKharacterCount(kharCount);

}

// SCRIPT START

resetList();

document.getElementById("filter-name").addEventListener("input", applyFilters);
