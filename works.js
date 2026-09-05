const worksData = [
    {"title": "home", "url": "index.html",},
    {"title": "top", "url": "#top",},
    {
        "title": "脳直", "url": "https://scrapbox.io/hic-shi/%E3%80%90%E8%84%B3%E7%9B%B4%E3%80%91", "external": true,
        "children": [
            { "title": "サイドメニュー", "url": "https://scrapbox.io/hic-shi/%E3%80%90%E3%82%B5%E3%82%A4%E3%83%89%E3%83%A1%E3%83%8B%E3%83%A5%E3%83%BC%E3%80%91" }
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
            { "title": "正義"},
            { "title": "アンリアル"},
            { "title": "Error"},
            { "title": "異人"},
            { "title": "信号機と相席純喫茶","external": true,"children":
                [
                    { "title": "漫画", "url": "singouki_comic.html"}
                ]
             },
            { "title": "コスモ ✧ ルール", "url": "https://scrapbox.io/hic-shi/%E3%80%90%E3%82%B3%E3%82%B9%E3%83%A2_%E2%9C%A6_%E3%83%AB%E3%83%BC%E3%83%AB%E3%80%91"}
        ]
    },
    {
        "title": "企画",
        "children": [
            {
                "title": "原案",
                "children": [
                    { "title": "sseg"}
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

function buildTree(items, openTitles = []) {
    const ul = document.createElement('ul');
    ul.className = 'nav-tree';

    items.forEach(item => {
        const li = document.createElement('li');
        const hasChildren = item.children && item.children.length > 0;
        const isOpen = openTitles.includes(item.title);

        if (hasChildren) {
            const details = document.createElement('details');
            if (isOpen) {
                details.open = true;
            }

            const summary = document.createElement('summary');
            summary.className = 'nav-toggle';

            if (item.url) {
                const a = document.createElement('a');
                a.href = item.url;
                a.textContent = item.title;
                if (item.external) {
                    a.target = '_blank';
                    a.rel = 'noopener noreferrer';
                }
                summary.appendChild(a);
            } else {
                const span = document.createElement('span');
                span.className = 'nav-category-title';
                span.textContent = item.title;
                summary.appendChild(span);
            }

            details.appendChild(summary);
            details.appendChild(buildTree(item.children, openTitles));
            li.appendChild(details);
        } else {
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
        }

        ul.appendChild(li);
    });

    return ul;
}

document.addEventListener('DOMContentLoaded', () => {
    const worksContainer = document.getElementById('js-works-container');
    if (worksContainer) {
        const openTitles = ['脳直', 'シーレンス', 'ヴィルグ', 'AGFos'];
        worksContainer.appendChild(buildTree(worksData, openTitles));
    }
});
