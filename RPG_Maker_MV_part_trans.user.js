// ==UserScript==
// @name           RPG Maker MV part trans
// @namespace      http://userscripts.org/users/23652
// @description    Replaces Japanese text for RPG Maker MV json files
// @include        file://localhost/*/*.json
// @grant          none
// @copyright      JoeSimmons
// @version        1.0.1
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
// Character names for Actors file
        '"リリス"' : '"Lilith"',
        //'"jp.name"' : '"tl.name"',
        '"サトゥン"' : '"Satyun"',
        '"ウゴブ"' : '"Ugobu"',
        '"サゴブ"' : '"Sagobu"',
// Character names for Map files
        '<リリス>' : '<Lilith>',
        //'<jp.name>' : '<tl.name>',
        '<サトゥン>' : '<Satyun>',
        '<ウゴブ>' : '<Ugobu>',
        '<サゴブ>' : '<Sagobu>',
// Translations for System file
// armorTypes
        //'' : '',
// elements
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
        '"戦技"Skills
        '"パッシヴスキル"' : '"Passive skill"',
        '"バトルスキル"' : '"Battle skill"',
        '"マジックスキル"' : '"Magic skill"',
// terms : basic
        '"レベル"' : '"Level"',
        '"経験値"' : '"Experience"',
// commands
        '"戦う"' : '"Fight"',
        '"逃げる"' : '"Escape"',
        '"攻撃"' : '"Attack"',
        '"防御"' : '"Defend"',
        '"アイテム"' : '"Items"',
        '"スキル"' : '"Skills"',
        '"装備"' : '"Equipment"',
        '"ステータス"' : '"Status"',
        '"並び替え"' : '"Sort"',
        '"セーブ"' : '"Save"',
        '"ゲーム終了"' : '"Quit Game"',
        '"オプション"' : '"Option"',
        '"武器"' : '"Weapon"',
        '"防具"' : '"Armor"',
        '"大事なもの"' : '"Key Items"',
        '"最強装備"' : '"Optimum"',
        '"全て外す"' : '"Remove All"',
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
        '"魔法防御"' : '"Magic Defense"',
        '"敏捷性"' : '"Agility"',
        '"運"' : '"Luck"',
        '"命中率"' : '"Accuracy"',
        '"回避率"' : '"Evasion"',
        '"魔力"' : '"Magic Attack"',
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
        '"現在の%1"' : '"Total %1"',
// expNext
        '"次の%1まで"' : '"Next %1"',
// Save/Load Screen
// saveMessage
        '"どのファイルにセーブしますか？"' : '"Save to which file?"',
// loadMessage
        '"どのファイルをロードしますか？"' : '"Load which file?"',
// file
        '"ファイル"' : '"File"',
// Display when there are multiple members
// partyName
        '"%1たち"' : '"%1s's Party"',
// Basic Battle Messages
// emerge
        '"%1が出現！"' : '"%1s emerged!"',
// preemptive
        '"%1は先手を取った！"' : '"%1s got the upper hand!"',
// surprise
        '"%1は不意をつかれた！"' : '"%1s was surprised!"',
// escapeStart
        '"%1は逃げ出した！"' : '"%1s has started to escape!"',
// escapeFailure
        '"しかし逃げることはできなかった！"' : '"However, it was unable to escape!"',
// Battle Ending Messages
// victory
        '"%1の勝利！"' : '"%1s was victorious!"',
// defeat
        '"%1は戦いに敗れた。"' : '"%1s was defeated."',
// obtainExp
        '"%1 の%2を獲得！"' : '"%1s %2 were received!"',
// obtainGold
        '"お金を %1\\G 手に入れた！"' : '"%1s\\G were obtained!"',
// obtainItem
        '"%1を手に入れた！"' : '"%1s was found!"',
// levelUp
        '"%1は%2 %3 に上がった！"' : '"%1s is now %2s %3s!"',
// obtainSkill
        '"%1を覚えた！"' : '"%1s was learned!"',
// Item Use
// useItem
        '"%1は%2を使った！"' : '"%1s uses %2s!"',
// Critical Hit
// criticalToActor
        '"痛恨の一撃！！"' : '"A painful blow!!"',
// criticalToEnemy
        '"会心の一撃！！"' : '"An excellent hit!!"',
// Results for Actions on Actors
// actorDamage
        '"%1は %2 のダメージを受けた！"' : '"%1s took %2s damage!"',
// actorRecovery
        '"%1の%2が %3 回復した！"' : '"%1s recovered %2s %3s"',
// actorGain
        '"%1の%2が %3 増えた！"' : '"%1s gained %2s %3s!"',
// actorLoss
        '"%1の%2が %3 減った！"' : '"%1s lost %2s %3s!"',
// actorDrain
        '"%1は%2を %3 奪われた！"' : '"%1s drained %2s %3s!"',
// actorNoDamage
        '"%1はダメージを受けていない！"' : '"%1s took no damage!"',
// actorNoHit
        '"ミス！　%1はダメージを受けていない！"' : '"Miss! %1s took no damage!"',
// Results for Actions on Enemy
// enemyDamage
        '"%1に %2 のダメージを与えた！"' : '"%1s took %2s damage!"',
// enemyRecovery
        '"%1の%2が %3 回復した！"' : '"%1s recovered %2s %3s!"',
// enemyGain
        '"%1の%2が %3 増えた！"' : '"%1s gained %2s %3s!"',
// enemyLoss
        '"%1の%2が %3 減った！"' : '"%1s lost %2s %3s!"',
// enemyDrain
        '"%1の%2を %3 奪った！"' : '"%1s drained %2s %3s!"',
// enemyNoDamage
        '"%1にダメージを与えられない！"' : '"%1s took no damage!"',
// enemyNoHit
        '"ミス！　%1にダメージを与えられない！"' : '"Miss! %1s took no damage!"',
// Evasion/Reflection
// evasion
        '"%1は攻撃をかわした！"' : '"%1s dodged the attack!"',
// magicEvasion
        '"%1は魔法を打ち消した！"' : '"%1s canceled the magic!"',
// magicReflection
        '"%1は魔法を跳ね返した！"' : '"%1s reflected the magic!"',
// counterAttack
        '"%1の反撃！"' : '"%1s countered!"',
// substitute
        '"%1が%2をかばった！"' : '"%1s protected against %2s damage!"',
// Status Increase/Decrease
// buffAdd
        '"%1の%2が上がった！"' : '"%1s's %2s increased!"',
// debuffAdd
        '"%1の%2が下がった！"' : '"%1s's %2s decreased!"',
// buffRemove
        '"%1の%2が元に戻った！"' : '"%1s's %2s decreased!"',
// Skill and Item Failure
// actionFailure
"%1には効かなかった！"%1 failed to act!
// Other
// alwaysDash
        '"常時ダッシュ"' : '"Always Run"',
// commandRemember
        '"コマンド記憶"' : '"Remember Choice"',
// variables
        //'' : '',
// weaponTypes
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
