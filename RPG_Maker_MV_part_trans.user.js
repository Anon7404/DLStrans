// ==UserScript==
// @name           RPG Maker MV part trans
// @namespace      http://userscripts.org/users/23652
// @description    Replaces Japanese text for RPG Maker MV json files
// @include        file://localhost/*/*.json
// @grant          none
// @copyright      JoeSimmons
// @version        1.0.4
// @project page   https://github.com/Anon7404/DLStrans/tree/MV-partial-translation
// @downloadURL    https://raw.github.com/Anon7404/DLStrans/MV-partial-translation/RPG_Maker_MV_part_trans.user.js
// @updateURL      https://raw.github.com/Anon7404/DLStrans/MV-partial-translation/RPG_Maker_MV_part_trans.user.js
// ==/UserScript==
(function () {
    'use strict';


    /*
        NOTE: 
            You can use \\* to match actual asterisks instead of using it as a wildcard!
            The examples below show a wildcard in use and a regular asterisk replacement.
    */

    var words = {
    ///////////////////////////////////////////////////////


        // Syntax: 'Search word' : 'Replace word',
// Automatic line separator, remove /* and */ for it to work
    /*
        '"\,"' : '",\n"',
        '}\,{' : '},\n{',
        '"]\,"' : '"],\n"',
        '\,"description"\:"' : '\,\n"description"\:"',
        '\,"name"\:"' : '\,\n"name"\:"',
        '\,"message1"\:"' : '\,\n"message1"\:"',
        //'' : '',
    */
// Character names for Actors file
// maps partially contain matches with this too,
// so better to comment entries here before continuing with maps 
        '"リリス"' : '"Lilith"',
        //'"jp.name"' : '"tl.name"',
// Character names for Map files
        '<リリス>' : '<Lilith>',
        //'<jp.name>' : '<tl.name>',
// Translations for System file
// armorTypes
        '"一般防具"' : '"General Armor"',
        '"魔法防具"' : '"Magic Armor"',
        '"軽装防具"' : '"Light Armor"',
        '"重装防具"' : '"Heavy Armor"',
        '"小型盾"' : '"Small Shield"',
        '"大型盾"' : '"Large Shield"',
        '"アクセサリ"' : '"Accessory"',
        //'' : '',
// elements
        '"物理"' : '"Physical"',
        '"炎"' : '"Fire"',
        '"氷"' : '"Ice"',
        '"雷"' : '"Thunder"',
        '"水"' : '"Water"',
        '"土"' : '"Earth"',
        '"風"' : '"Wind"',
        '"光"' : '"Light"',
        '"闇"' : '"Darkness"',
        //'' : '',
// equipTypes
        '"武器"' : '"Weapon"',
        '"盾"' : '"Shield"',
        '"頭"' : '"Head"',
        '"身体"' : '"Body"',
        '"装飾品"' : '"Accessory"',
// gameTitle
        //'' : '',
// skillTypes
        '"魔法"' : '"Magic"',
        '"戦技"' : '"Skills"',
        '"パッシヴスキル"' : '"Passive skill"',
        '"バトルスキル"' : '"Battle skill"',
        '"マジックスキル"' : '"Magic skill"',
// terms : basic
        '"レベル"' : '"Level"',
        '"ＨＰ"' : '"HP"',
        '"ＭＰ"' : '"MP"',
        '"ＴＰ"' : '"TP"',
        '"経験値"' : '"Experience"',
// commands
        '"戦う"' : '"Fight"',
        '"逃げる"' : '"Escape"',
        '"攻撃"' : '"Attack"',
        '"防御"' : '"Guard"',
        '"アイテム"' : '"Item"',
        '"スキル"' : '"Skill"',
        '"装備"' : '"Equip"',
        '"ステータス"' : '"Status"',
        '"並び替え"' : '"Formation"',
        '"セーブ"' : '"Save"',
        '"ゲーム終了"' : '"Quit Game"',
        '"オプション"' : '"Option"',
        '"防具"' : '"Armor"',
        '"大事なもの"' : '"Key Items"',
        '"最強装備"' : '"Optimize"',
        '"全て外す"' : '"Clear"',
        '"ニューゲーム"' : '"New Game"',
        '"コンティニュー"' : '"Continue"',
        '"タイトルへ"' : '"Title"',
        '"やめる"' : '"Cancel"',
        '"購入する"' : '"Buy"',
        '"売却する"' : '"Sell"',
// params
        '"最大ＨＰ"' : '"Max HP"',
        '"最大ＭＰ"' : '"Max MP"',
        '"攻撃力"' : '"Attack"',
        '"防御力"' : '"Defense"',
        '"魔法力"' : '"Magic"',
        '"魔法防御"' : '"M.Defense"',
        '"敏捷性"' : '"Agility"',
        '"運"' : '"Luck"',
        '"命中率"' : '"Hit"',
        '"回避率"' : '"Evasion"',
        '"魔力"' : '"M.Attack"',
        '"すばやさ"' : '"Speed"',
// messages
// Volume Options
   // meVolume
        '"ME 音量"' : '"ME Volume"',
   // seVolume
        '"SE 音量"' : '"SE Volume"',
   // bgmVolume
        '"BGM 音量"' : '"BGM Volume"',
   // bgsVolume
        '"BGS 音量"' : '"BGS Volume"',
// Shop Screen
   // possession
        '"持っている数"' : '"Possession"',
// Status Screen
   // expTotal
        '"現在の%1"' : '"Current %1"',
   // expNext
        '"次の%1まで"' : '"To next %1"',
// Save/Load Screen
   // saveMessage
        '"どのファイルにセーブしますか？"' : '"Save to which file?"',
   // loadMessage
        '"どのファイルをロードしますか？"' : '"Load which file?"',
   // file
        '"ファイル"' : '"File"',
// Display when there are multiple members
   // partyName
        '"%1たち"' : '"%1\'s Party"',
// Basic Battle Messages
   // emerge
        '"%1が出現！"' : '"%1 emerged!"',
   // preemptive
        '"%1は先手を取った！"' : '"%1 got the upper hand!"',
   // surprise
        '"%1は不意をつかれた！"' : '"%1 was surprised!"',
   // escapeStart
        '"%1は逃げ出した！"' : '"%1 has started to escape!"',
   // escapeFailure
        '"しかし逃げることはできなかった！"' : '"However, it was unable to escape!"',
// Battle Ending Messages
   // victory
        '"%1の勝利！"' : '"%1 was victorious!"',
   // defeat
        '"%1は戦いに敗れた。"' : '"%1 was defeated."',
   // obtainExp
        '"%1 の%2を獲得！"' : '"%1 %2 were received!"',
   // obtainGold
        '"お金を %1\\\\G 手に入れた！"' : '"%1\\\\G were obtained!"',
   // obtainItem
        '"%1を手に入れた！"' : '"%1 was found!"',
   // levelUp
        '"%1は%2 %3 に上がった！"' : '"%1 is now %2 %3!"',
   // obtainSkill
        '"%1を覚えた！"' : '"%1 was learned!"',
// Item Use
   // useItem
        '"%1は%2を使った！"' : '"%1 uses %2!"',
// Critical Hit
   // criticalToActor
        '"痛恨の一撃！！"' : '"A painful blow!!"',
   // criticalToEnemy
        '"会心の一撃！！"' : '"An excellent hit!!"',
// Results for Actions on Actors
   // actorDamage
        '"%1は %2 のダメージを受けた！"' : '"%1 took %2 damage!"',
   // actorRecovery
        '"%1の%2が %3 回復した！"' : '"%1 recovered %2 %3"',
   // actorGain
        '"%1の%2が %3 増えた！"' : '"%1 gained %2 %3!"',
   // actorLoss
        '"%1の%2が %3 減った！"' : '"%1 lost %2 %3!"',
   // actorDrain
        '"%1は%2を %3 奪われた！"' : '"%1 was drained of %2 %3!"',
   // actorNoDamage
        '"%1はダメージを受けていない！"' : '"%1 took no damage!"',
   // actorNoHit
        '"ミス！　%1はダメージを受けていない！"' : '"Miss! %1 took no damage!"',
// Results for Actions on Enemy
   // enemyDamage
        '"%1に %2 のダメージを与えた！"' : '"%1 took %2 damage!"',
   // enemyDrain
        '"%1の%2を %3 奪った！"' : '"%1 was drained of %2 %3!"',
   // enemyNoDamage
        '"%1にダメージを与えられない！"' : '"%1 took no damage!"',
   // enemyNoHit
        '"ミス！　%1にダメージを与えられない！"' : '"Miss! %1 took no damage!"',
// Evasion/Reflection
   // evasion
        '"%1は攻撃をかわした！"' : '"%1 evaded the attack!"',
   // magicEvasion
        '"%1は魔法を打ち消した！"' : '"%1 nullified the magic!"',
   // magicReflection
        '"%1は魔法を跳ね返した！"' : '"%1 reflected the magic!"',
   // counterAttack
        '"%1の反撃！"' : '"%1 counterattacked!"',
   // substitute
        '"%1が%2をかばった！"' : '"%1 protected %2!"',
// Status Increase/Decrease
   // buffAdd
        '"%1の%2が上がった！"' : '"%1\'s %2 went up!"',
   // debuffAdd
        '"%1の%2が下がった！"' : '"%1\'s %2 went down!"',
   // buffRemove
        '"%1の%2が元に戻った！"' : '"%1\'s %2 returned to normal!"',
// Skill and Item Failure
   // actionFailure
        '"%1には効かなかった！"' : '"There was no effect on %1!"',
// Other
   // alwaysDash
        '"常時ダッシュ"' : '"Always Dash"',
   // commandRemember
        '"コマンド記憶"' : '"Command Remember"',
// variables
        //'' : '',
// weaponTypes
        '"短剣"' : '"Dagger"',
        '"剣"' : '"Sword"',
        '"フレイル"' : '"Flail"',
        '"斧"' : '"Axe"',
        '"ムチ"' : '"Whip"',
        '"杖"' : '"Cane"',
        '"弓"' : '"Bow"',
        '"クロスボウ"' : '"Crossbow"',
        '"銃"' : '"Gun"',
        '"爪"' : '"Claw"',
        '"グローブ"' : '"Glove"',
        '"槍"' : '"Spear"',
        //'' : '',
// Translations for Classes file
        '"name"\:"魔術師"' : '"name"\:"Mage"',
        '"name"\:"僧侶"' : '"name"\:"Priest"',
        //'' : '',
// Translations for Skills file
        '"の攻撃！"' : '" attacks!"',
        '"note"\:"スキル１番は［攻撃］コマンドを\\n選択したときに使用されます。"' : '"note"\:"Skill 1 will be used when you select\\nthe Attack command."',
        '"は身を守っている。"' : '" guards."',
        '"note"\:"スキル２番は［防御］コマンドを\\n選択したときに使用されます。"' : '"note"\:"Skill 2 will be used when you select\\nthe Guard command."',
        '"の連続攻撃！"' : '" attacks!"',
        '"連続攻撃"' : '"Dual Attack"',
        '"２回攻撃"' : '"Double Attack"',
        '"３回攻撃"' : '"Triple Attack"',
        '"は逃げてしまった。"' : '" flees."',
        '"は様子を見ている。"' : '" waits."',
        '"様子を見る"' : '"Wait"',
        '"は%1を唱えた！"' : '" casts %1!"',
        '"ヒール"' : '"Heal"',
        '"ファイア"' : '"Fire"',
        '"スリープ"' : '"Sleep"',
        '"トランス"' : '"Trans"',
        '"コンセントレイト"' : '"Concentrate"',
        //'' : '',
// Translations for States file
        '"は倒れた！"' : '" has fallen!"',
        '"を倒した！"' : '" is slain!"',
        '"は立ち上がった！"' : '" revives!"',
        '"戦闘不能"' : '"Knockout"',
        '"ステート１番はＨＰが０になったときに\\n自動的に付加されます。"' : '"State 1 will be automatically added when\\nHP reaches 0."',
        '"不死身"' : '"Immortal"',
        '"は毒にかかった！"' : '" is poisoned!"',
        '"に毒をかけた！"' : '" is poisoned!"',
        '"の毒が消えた！"' : '" is no longer poisoned!"',
        '"毒"' : '"Poison"',
        '"は暗闇に閉ざされた！"' : '" is blinded!"',
        '"を暗闇に閉ざした！"' : '" is blinded!"',
        '"の暗闇が消えた！"' : '" is no longer blinded!"',
        '"暗闇"' : '"Blind"',
        '"は沈黙した！"' : '" is silenced!"',
        '"を沈黙させた！"' : '" is silenced!"',
        '"の沈黙が解けた！"' : '" is no longer silenced!"',
        '"沈黙"' : '"Silence"',
        '"は激昂した！"' : '" is enraged!"',
        '"を激昂させた！"' : '" is enraged!"',
        '"は我に返った！"' : '" has come to senses!"',
        '"激昂"' : '"Rage"',
        '"は混乱した！"' : '" is confused!"',
        '"を混乱させた！"' : '" is confused!"',
        '"混乱"' : '"Confusion"',
        '"は魅了された！"' : '" is fascinated!"',
        '"を魅了した！"' : '" is fascinated!"',
        '"魅了"' : '"Fascination"',
        '"は眠った！"' : '" falls asleep!"',
        '"を眠らせた！"' : '" is asleep!"',
        '"は眠っている。"' : '" is still sleeping..."',
        '"は目を覚ました！"' : '" wakes up!"',
        '"睡眠"' : '"Sleep"',
        '"は麻痺して動けなくなった！"' : '" can\'t move!"',
        '"を麻痺で動けなくさせた！"' : '" can\'t move!"',
        '"は痺れていて動けない。"' : '" is still paralyzed!"',
        '"は麻痺から回復した！"' : '" can move again!"',
        '"麻痺"' : '"Paralysis"',
        //'' : '',
// Translations for Weapons file
        '"ショートソード"' : '"Short Sword"',
        '"レイピア"' : '"Rapier"',
        '"ブロードソード"' : '"Broad sword"',
        '"フランベルジュ"' : '"Flamberge"',
        '"クレイモア"' : '"Claymore"',
        '"エストック"' : '"Estoc"',
        //'"アロンダイト"' : '',
        '"クラウソラス"' : '"Cutlass"',
        '"グラディウス"' : '"Gladius"',
        '"ファルシオン"' : '"Falchion"',
        '"オブシダンソード"' : '"Obsidian Sword"',
        //'"ブレイブソード"' : '',
        '"ロングソード"' : '"Long Sword"',
        '"バトルアックス"' : '"Battle Axe"',
        '"樫の杖"' : '"Wood Staff"',
        '"硬い樫の木で作られた杖。"' : '"A simple cane made from oak."',
        //'' : '',
// Translations for Troops file
        '"name"\:"こうもり' : '"name"\:"Bat',
        '"name"\:"スライム' : '"name"\:"Slime',
        '"name"\:"オーク' : '"name"\:"Orc',
        '"name"\:"ミノタウロス' : '"name"\:"Minotaur',
        '"name"\:"エキドナ' : '"name"\:"Echidna',
        '"name"\:"ハーピー' : '"name"\:"Harpy',
        //'' : '',
// Translations for Items file
        '"ポーション"' : '"Potion"',
        '"マナポーション"' : '"Mana Potion',
        '"ハイポーション"' : '"Hi-Potion',
        '"ハイマナポーション"' : '"Hi-Mana Potion',
        '"エクスポーション"' : '"X-Potion',
        '"エクスマナポーション"' : '"X-Mana Potion',
        '"エリクサー"' : '"Elixir',
        '"瞬間裁縫セット"' : '"Sewing Kit"',
        '"破れた衣服をすぐに元通りにできる"' : '"Repairs Torn Clothes."',
        '"完全回復薬　HPとMPともに全回復"' : '"Complete Recovery Item\/Always Useable Can be used in combat, Fully recovers HP.',
// Translations for Enemies file
        //'' : '',
// Translations for Armors file
        //'' : '',
        //'' : '',
        //'' : '',
        //'' : '',
        //'' : '',
        //'' : '',
        //'' : '',
        //'' : '',
      
    ///////////////////////////////////////////////////////
    '':''};











    //////////////////////////////////////////////////////////////////////////////
    // This is where the real code is
    // Don't edit below this
    //////////////////////////////////////////////////////////////////////////////

    var regexs = [], replacements = [],
        tagsWhitelist = ['INPUT', 'TEXTAREA'],
        rIsRegexp = /^\/(.+)\/([gim]+)?$/,
        word, text, texts, i, userRegexp;

    // prepareRegex by JoeSimmons
    // used to take a string and ready it for use in new RegExp()
    function prepareRegex(string) {
        return string.replace(/([\[\]\^\&\$\.\(\)\?\/\\\+\{\}\|])/g, '\\$1');
    }

    // function to decide whether a parent tag will have its text replaced or not
    function isTagOk(tag) {
        return tagsWhitelist.indexOf(tag) === -1;
    }

    delete words['']; // so the user can add each entry ending with a comma,
                      // I put an extra empty key/value pair in the object.
                      // so we need to remove it before continuing

    // convert the 'words' JSON object to an Array
    for (word in words) {
        if ( typeof word === 'string' && words.hasOwnProperty(word) ) {
            userRegexp = word.match(rIsRegexp);

            // add the search/needle/query
            if (userRegexp) {
                regexs.push(
                    new RegExp(userRegexp[1], 'g')
                );
            } else {
                regexs.push(
                    new RegExp(prepareRegex(word).replace(/\\?\*/g, function (fullMatch) {
                        return fullMatch === '\\*' ? '*' : '[^ ]*';
                    }), 'g')
                );
            }

            // add the replacement
            replacements.push( words[word] );
        }
    }

    // do the replacement
    texts = document.evaluate('//body//text()[ normalize-space(.) != "" ]', document, null, 6, null);
    for (i = 0; text = texts.snapshotItem(i); i += 1) {
        if ( isTagOk(text.parentNode.tagName) ) {
            regexs.forEach(function (value, index) {
                text.data = text.data.replace( value, replacements[index] );
            });
        }
    }

}());
