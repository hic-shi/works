const worksData = [
    {
        "title": "脳直", "url": "nochoku.html", "external": true,
        "children": [
            { "title": "サイドメニュー", "url": "side-menu.html" }
        ]
    },
    {
        "title": "シーレンス",
        "children": [
            {
                "title": "レノレレン",
                "children": [
                    { "title": "さよならアリス"}
                ]
            },
            {
                "title": "ヴィルグ",
                "children": [
                    {
                        "title": "AGFos",
                        "children": [
                            { "title": "アージークリストフの手記", "url": "https://hic-shi.github.io/AGFos/index.html" },
                            { "title": "シーレンス!"}
                        ]
                    },
                    { "title": "メドロノイド"},
                    { "title": "群青色へ"}
                ]
            }
        ]
    },
    {
        "title": "その他",
        "children": [
            { "title": "名声"},
            { "title": "氷結来春光"},
            { "title": "四季折々僕らの色"},
            { "title": "灰退的深涖部"},
            { "title": "姫と君"},
            { "title": "ガーネット"},
            { "title": "いのち"},
            { "title": "アンリアル"},
            { "title": "Error"},
            { "title": "異人"},
            { "title": "信号機と相席純喫茶"},
            { "title": "コスモ ✧ ルール"}
        ]
    },
    {
        "title": "企画",
        "children": [
            {
                "title": "原案",
                "children": [
                    { "title": "sseg", "url": "sseg.html" }
                ]
            },
            {
                "title": "参加",
                "children": [
                    {
                        "title": "product-me※",
                        "url": "https://produteme.blog.jp/",
                        "external": true,
                        "children": [
                            {
                                "title": "夜光館※",
                                "url": "https://yakoukan.mystrikingly.com/",
                                "external": true,
                                "children": [
                                    { "title": "柳生雪弥", "url": "https://x.com/nemi_note/status/1669934281177825280", "external": true },
                                    { "title": "鵜飼鈴音", "url": "https://x.com/nemi_note/status/1670921317569425408", "external": true },
                                    { "title": "ラヴ", "url": "https://x.com/nemi_note/status/1672803349174026241", "external": true },
                                    { "title": "明暦", "url": "https://x.com/nemi_note/status/1683012468996726784", "external": true },
                                    { "title": "妖", "url": "https://x.com/nemi_note/status/1683792334344040448", "external": true },
                                    { "title": "◽︎◽︎◽︎", "url": "https://x.com/nemi_note/status/1730908318112330061", "external": true }
                                ]
                            },
                            {
                                "title": "儚国魔法大戦記※",
                                "url": "https://origamiyuzuki.wixsite.com/kokumaho",
                                "external": true,
                                "children": [
                                    { "title": "tell", "url": "https://x.com/nemi_note/status/1904852886657655257", "external": true }
                                ]
                            }
                        ]
                    },
                    {
                        "title": "誰デザ Remedium",
                        "url": "https://x.com/nemi_note/status/1985365115085197529",
                        "external": true
                    }
                ]
            }
        ]
    }
];

function buildTree(items) {
    const ul = document.createElement('ul');
    ul.className = 'nav-tree';

    items.forEach(item => {
        const li = document.createElement('li');

        if (item.url) {
            const a = document.createElement('a');
            a.href = item.url;
            a.textContent = item.title;
            if (item.external) {
                a.target = '_blank';
                a.rel = 'noopener noreferrer';
            }
            li.appendChild(a);
        } else {
            const span = document.createElement('span');
            span.className = 'nav-category-title';
            span.textContent = item.title;
            li.appendChild(span);
        }

        if (item.children && item.children.length > 0) {
            li.appendChild(buildTree(item.children));
        }

        ul.appendChild(li);
    });

    return ul;
}

document.addEventListener('DOMContentLoaded', () => {
    const worksContainer = document.getElementById('js-works-container');
    if (worksContainer) {
        worksContainer.appendChild(buildTree(worksData));
    }
});
