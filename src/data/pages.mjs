export const siteMeta = {
  defaultLocale: 'en',
  locales: {
    en: {
      code: 'en',
      label: 'English',
      pathPrefix: '/en',
      navigation: [
        { href: '/en/', label: 'Home' },
        {
          href: '/en/about/',
          label: 'About',
          children: [
            { href: '/en/about/confession/', label: 'Confession of Faith' },
            { href: '/en/about/logo/', label: 'Our Logo' },
            { href: '/en/about/team/', label: 'Leadership Team' },
            { href: '/en/about/calendar/', label: 'Calendar' }
          ]
        },
        {
          href: '/en/ministries/',
          label: 'Ministries',
          children: [
            { href: '/en/ministries/body/', label: 'Exercise your body' },
            { href: '/en/ministries/godliness/', label: 'Practice godliness' },
            { href: '/en/ministries/love/', label: 'Live out love' }
          ]
        },
        {
          href: '/en/resources/',
          label: 'Resources',
          children: [
            { href: '/en/resources/ot/', label: 'Old Testament Studies' },
            { href: '/en/resources/nt/', label: 'New Testament Studies' },
            { href: '/en/resources/faq/', label: 'Faith Q&A' }
          ]
        },
        {
          href: '/en/events/',
          label: 'Events',
          children: [
            { href: '/en/events/upcoming/', label: 'Upcoming' },
            { href: '/en/events/past/', label: 'Past Highlights' }
          ]
        },
        {
          href: '/en/support/',
          label: 'Support',
          children: [
            { href: '/en/support/contact/', label: 'Contact' },
            { href: '/en/support/donation/', label: 'Donation' }
          ]
        }
      ],
      footer: {
        contact: {
          title: 'Contact',
          items: [
            { label: 'Email', value: 'love@life-runners.org', href: 'mailto:love@life-runners.org' },
            { label: 'WeChat', value: '新生命跑者 New Life Runners' },
            { label: 'Support', value: 'Offering', href: '/en/support/donation/' }
          ]
        },
        address: 'Serving the Bay Area, USA & online discipleship communities in mainland China.',
        social: [
          { label: 'YouTube', href: 'https://www.youtube.com/@BibleRunners', note: 'Includes China-accessible transcripts.' },
          { label: 'Audio recordings', href: '/media/audio/' },
          { label: 'Newsletter', href: '/newsletter/' }
        ],
        legal: '© ' + new Date().getFullYear() + ' Life Runners Fellowship. All rights reserved.'
      }
    },
    zh: {
      code: 'zh',
      label: '简体中文',
      pathPrefix: '/zh',
      navigation: [
        { href: '/zh/', label: '首页' },
        {
          href: '/zh/about/',
          label: '关于我们',
          children: [
            { href: '/zh/about/confession/', label: '信仰告白' },
            { href: '/zh/about/logo/', label: '标志故事' },
            { href: '/zh/about/team/', label: '领袖团队' },
            { href: '/zh/about/calendar/', label: '活动日历' }
          ]
        },
        {
          href: '/zh/ministries/',
          label: '事工介绍',
          children: [
            { href: '/zh/ministries/body/', label: '操练身体' },
            { href: '/zh/ministries/godliness/', label: '操练敬虔' },
            { href: '/zh/ministries/love/', label: '活出爱' }
          ]
        },
        {
          href: '/zh/resources/',
          label: '查经资料',
          children: [
            { href: '/zh/resources/ot/', label: '旧约系列' },
            { href: '/zh/resources/nt/', label: '新约系列' },
            { href: '/zh/resources/faq/', label: '信仰问答' }
          ]
        },
        {
          href: '/zh/events/',
          label: '活动预告·记录',
          children: [
            { href: '/zh/events/upcoming/', label: '即将举行' },
            { href: '/zh/events/past/', label: '往期回顾' }
          ]
        },
        {
          href: '/zh/support/',
          label: '支持与奉献',
          children: [
            { href: '/zh/support/contact/', label: '联系方式' },
            { href: '/zh/support/donation/', label: '奉献须知' }
          ]
        }
      ],
      footer: {
        contact: {
          title: '联系我们',
          items: [
            { label: '邮箱', value: 'love@life-runners.org', href: 'mailto:love@life-runners.org' },
            { label: '微信', value: '新生命跑者 New Life Runners' },
            { label: '支持', value: '奉献', href: '/zh/support/donation/' }
          ]
        },
        address: '服务美国湾区，并连结中国大陆线上门训小组。',
        social: [
          { label: 'YouTube 视频（翻墙）', href: 'https://www.youtube.com/@BibleRunners' },
          { label: '音频镜像（国内可访问）', href: '/media/audio/' },
          { label: '电子通讯', href: '/newsletter/' }
        ],
        legal: '© ' + new Date().getFullYear() + ' 生命跑者团契 版权所有。'
      }
    }
  }
};

const motto = {
  en: 'Exercise your body · Practice godliness · Live out love',
  zh: '操练身体 · 操练敬虔 · 活出爱'
};

const sharedMediaNotice = {
  en: `\n  <div class="notice">\n    <strong>YouTube access issue:</strong> If YouTube is unavailable, use the audio/PDF downloads provided.\n  </div>\n`,
  zh: `\n  <div class=\"notice\">\n    <strong>油管访问困难：</strong> 若无法打开 YouTube，请使用提供的音频或 PDF 下载。\n  </div>\n`
};

const latestHighlights = {
  en: [
    {
      title: 'Newsletter (Dec 25, 2025)',
      summary: 'Life Runners December Newsletter Gives Thanks and Prayer Requests',
      link: '/newsletter/2025-christmas.pdf',
      badge: 'Lastest Newslatter'
    },
    {
      title: 'Prayer Mountain (Dec 15, 2025)',
      summary: 'Life Runners at Fastering Prayer Mountain in Scotts Valley, California',
      link: '/media/galleries/prayer-mountain/index.html',
      badge: 'Recent Event'
    },
    {
      title: 'CIM Marathon (Dec 07, 2025)',
      summary: 'Life Runners Paster joined California International Marathon.',
      link: '/media/galleries/cim-marathon/index.html',
      badge: 'Recent Event'
    },
    {
      title: 'Revelation Study Pack (started Dec 02, 2025)',
      summary: 'Download MP3 scripture reading and PPT slides in PDF format.',
      link: '/media/audio/nt27/nt27.html',
      badge: 'New Study'
    },
  ],
  zh: [
    {
      title: '电子通讯 (2025年年12月25日)',
      summary: '生命跑者｜12月感恩代祷信（2025年圣诞＋2026展望)',
      link: '/newsletter/2025-christmas.pdf',
      badge: '最新通讯'
    },
    {
      title: '祷告山 (2025年12月15日)',
      summary: '生命跑者在北加州禁食祷告山',
      link: '/media/galleries/prayer-mountain/index.html',
      badge: '最新资料'
    },
    {
      title: '加州国际马拉松（2025年12月7日）',
      summary: '生命跑者牧师在加州国际马拉松路跑。',
      link: '/media/galleries/cim-marathon/index.html',
      badge: '最新资料'
    },
    {
      title: '启示录查经包（2025年12月2日起)',
      summary: '下载经文朗读MP3音频与讲义。',
      link: '/media/audio/nt27/nt27.html',
      badge: '查看详情'
    }
  ]
};

const calendarEmbed = {
  en: `<iframe title="Life Runners Google Calendar" src="https://calendar.google.com/calendar/embed?src=lifrunners%40example.com&ctz=America%2FLos_Angeles" style="border:0" width="100%" height="450" loading="lazy"></iframe>`,
  zh: `<iframe title="生命跑者日历" src="https://calendar.google.com/calendar/embed?src=lifrunners%40example.com&ctz=America%2FLos_Angeles" style="border:0" width="100%" height="450" loading="lazy"></iframe>`
};

export const pages = [
  {
    lang: 'en',
    path: 'en/index.html',
    url: '/en/',
    title: 'Life Runners Fellowship',
    description: 'Bilingual discipleship community that integrates faith, athletics, and missional living.',
    altLang: '/zh/',
    hero: {
      eyebrow: 'Life Runners Fellowship',
      title: 'Exercise your body, Practice godliness, Live out love.',
      subtitle: 'We unite life runners, families, and disciple-makers across the United States and China to exercise our bodies, practice godliness, and live out love in every community.',
      cta: { label: 'Make a donation', href: '/en/support/donation/' }
    },
    sections: [
      {
        title: 'Our Focus',
        content: `
          <p>Life Runners Fellowship is a bilingual 501(c)(3) non-profit. We cultivate holistic discipleship through endurance sports, Bible-centered teaching, and compassionate service. Our gatherings take place in-person across the San Francisco Bay Area and online cohorts designed for friends in mainland China.</p>
          <p class="badge">${motto.en}</p>
        `
      },
      {
        title: 'Latest Highlights',
        content: `
          <div class="cards">
            ${latestHighlights.en
              .map(
                (item) => `
                  <article class="card">
                    <span class="badge">${item.badge}</span>
                    <h3>${item.title}</h3>
                    <p>${item.summary}</p>
                    <a class="button" href="${item.link}">Read more</a>
                  </article>
                `
              )
              .join('')}
          </div>
        `
      },
      {
        title: 'Featured Ministries',

        content: `
          <div class="cards">
            <article class="card">
              <h3>Exercise Your Body - Promote Health</h3>
              <p>Weekly running and conditioning sessions guided by certified coaches. Every workout closes with Scripture reflection and peer prayer.</p>
              <a class="button" href="/en/ministries/body/">View details</a>
            </article>
            <article class="card">
              <h3>Practice Godliness - Discipleship Training</h3>
              <p>Ten-week cohorts that blend Bible study, accountability, and wellness rhythms. English and Mandarin groups available.</p>
              <a class="button" href="/en/ministries/godliness/">Explore cohorts</a>
            </article>
            <article class="card">
              <h3>Live Out Love - Caring in Action</h3>
              <p>Community service projects, hospital visits, and fundraising races that demonstrate Christ-like love in action.</p>
              <a class="button" href="/en/ministries/love/">See impact</a>
            </article>
            <article class="card">
              <h3>Foundamental Truth - Faith & Science</h3>
              <p>Dr. Zhang and Pastor Zhu share the origin of the universe and life, and its relationship with faith.</p>
              <a class="button" href="/media/audio/sci/sci.html">See details</a>
            </article>
          </div>
        `
      },
      {
        title: 'Media Channels',
        content: `
          <div class="media-grid">
            <div class="card">
              <h3>YouTube Teaching</h3>
              <p>Livestream devotionals, testimony films, and Mandarin/English sermons.</p>
              <a class="button" href="https://www.youtube.com/@BibleRunners" target="_blank" rel="noopener">Watch on YouTube</a>
              ${sharedMediaNotice.en}
            </div>
            <div class="card">
              <h3>Audio Archive</h3>
              <p>MP3 reflections or Spotify mirror with downloadable transcripts for listeners in restricted regions.</p>
              <a class="button" href="/media/audio/">Download audio & PDFs</a>
            </div>
            <div class="card">
              <h3>Resource Library</h3>
              <p>Printable study guides, prayer cards, and devotionals to equip churches and sports ministries.</p>
              <a class="button" href="/en/resources/">Browse resources</a>
            </div>
          </div>
        `
      }
    ]
  },
  {
    lang: 'zh',
    path: 'zh/index.html',
    url: '/zh/',
    title: '生命跑者团契',
    description: '双语门训社群，结合信仰、运动与差传，服事美国与中国的肢体。',
    altLang: '/en/',
    hero: {
      eyebrow: '生命跑者团契',
      title: '操练身体，操练敬虔，活出爱。',
      subtitle: '我们连结美国与中国的生命跑者、家庭与门训同工，一同操练身体、操练敬虔、活出爱。',
      cta: { label: '支持奉献', href: '/zh/support/donation/' }
    },
    sections: [
      {
        title: '异象使命',
        content: `
          <p>生命跑者团契是一家经美国注册的 501(c)(3) 非营利机构，以双语（英文/简体中文）服事。我们通过耐力运动、以圣经为中心的教导，以及充满怜悯的行动来培养全人的门徒。聚会涵盖湾区实体小组与面向中国的线上同行。</p>
          <p class="badge">${motto.zh}</p>
        `
      },
      {
        title: '最新动态',
        content: `
          <div class="cards">
            ${latestHighlights.zh
              .map(
                (item) => `
                  <article class="card">
                    <span class="badge">${item.badge}</span>
                    <h3>${item.title}</h3>
                    <p>${item.summary}</p>
                    <a class="button" href="${item.link}">查看详情</a>
                  </article>
                `
              )
              .join('')}
          </div>
        `
      },
      {
        title: '核心事工',
        content: `
          <div class="cards">
            <article class="card">
              <h3>操练身体 - 促进健康</h3>
              <p>教练带领的跑步与体能训练，每次训练都以经文分享与彼此代祷作为结束。</p>
              <a class="button" href="/zh/ministries/body/">了解详情</a>
            </article>
            <article class="card">
              <h3>操练敬虔 - 门徒训练</h3>
              <p>门训课程，结合查经、属灵操练与健康节奏，提供英文/普通话小组。</p>
              <a class="button" href="/zh/ministries/godliness/">参加门训</a>
            </article>
            <article class="card">
              <h3>活出爱 - 关怀行动</h3>
              <p>社区关怀、肢体探访与慈善路跑，用具体行动分享基督的爱。</p>
              <a class="button" href="/zh/ministries/love/">见证故事</a>
            </article>
            <article class="card">
              <h3>基要真理 - 信仰与科学</h3>
              <p>张博士和朱牧师探讨宇宙和生命的起源，并科学与信仰之间的关系。 </p>
              <a class="button" href="/media/audio/sci/sci.html">更多资料</a>
            </article>
          </div>
        `
      },
      {
        title: '媒体渠道',
        content: `
          <div class="media-grid">
            <div class="card">
              <h3>YouTube 教学</h3>
              <p>中英文灵修直播、见证短片与讲道。</p>
              <a class="button" href="https://www.youtube.com/@BibleRunners" target="_blank" rel="noopener">前往 YouTube</a>
              ${sharedMediaNotice.zh}
            </div>
            <div class="card">
              <h3>音频存档</h3>
              <p>MP3 灵修与 Spotify 镜像，并附带国内可下载的逐字稿。</p>
              <a class="button" href="/media/audio/">下载音频与文字</a>
            </div>
            <div class="card">
              <h3>资源库</h3>
              <p>查经讲义、祷告卡与灵修手册，帮助教会与运动事工装备门徒。</p>
              <a class="button" href="/zh/resources/">浏览资源</a>
            </div>
          </div>
        `
      }
    ]
  },
  {
    lang: 'en',
    path: 'en/about/index.html',
    url: '/en/about/',
    title: 'About Life Runners Fellowship',
    description: 'Learn our story, vision, and the heartbeat behind Life Runners Fellowship.',
    altLang: '/zh/about/',
    hero: {
      eyebrow: 'About Us',
      title: 'A family on mission between the U.S. and China.',
      subtitle: 'Life Runners Fellowship began with a handful of marathoners praying for revival among athletes. Today we equip churches, campuses, and families with bilingual discipleship resources.',
      cta: { label: 'Meet the leadership team', href: '/en/about/team/' }
    },
    breadcrumbs: [
      { href: '/en/', label: 'Home' }
    ],
    sections: [
      {
        title: 'Vision & Values',
        content: `
          <p>We believe discipleship flourishes when mind, body, and spirit move together. Our community commits to:</p>
          <ul>
            <li>Living out the gospel through hospitality, generosity, and justice.</li>
            <li>Rooting every gathering in Scripture, prayer, and accountable friendships.</li>
            <li>Building bridges between believers in the United States and mainland China.</li>
            <li>Creating accessible media and training pathways for local churches.</li>
          </ul>
        `
      },
      {
        title: 'Ministry Rhythm',
        content: `
          <div class="timeline">
            <div class="timeline-item">
              <h3>Quarterly</h3>
              <p>Regional worship nights, citywide service projects, and cross-border forums.</p>
            </div>
            <div class="timeline-item">
              <h3>Monthly</h3>
              <p>Hybrid training intensives for coaches and small-group leaders; family discipleship labs.</p>
            </div>
            <div class="timeline-item">
              <h3>Weekly</h3>
              <p>Training crews, online Bible cohorts, and prayer runs connecting time zones.</p>
            </div>
          </div>
        `
      },
      {
        title: 'Accountability & Covering',
        content: `
          <p>Life Runners Fellowship submits to a cross-cultural advisory board composed of pastors, nonprofit executives, and veteran missionaries. Financial stewardship is reviewed quarterly and reported annually.</p>
          <p class="notice">We are incorporated in California and maintain compliance with IRS 501(c)(3) reporting requirements.</p>
        `
      }
    ]
  },
  {
    lang: 'zh',
    path: 'zh/about/index.html',
    url: '/zh/about/',
    title: '关于生命跑者团契',
    description: '认识生命跑者团契的起源、异象与价值观。',
    altLang: '/en/about/',
    hero: {
      eyebrow: '关于我们',
      title: '在美国与中国之间同行的宣教家庭。',
      subtitle: '生命跑者团契起初是一群马拉松跑者为运动员复兴祷告，如今装备教会、校园与家庭，在双语环境中建立门徒。',
      cta: { label: '认识领袖团队', href: '/zh/about/team/' }
    },
    breadcrumbs: [
      { href: '/zh/', label: '首页' }
    ],
    sections: [
      {
        title: '异象与价值',
        content: `
          <p>我们相信，当心志、身体与灵命一同奔跑，门训就会茁壮。我们承诺：</p>
          <ul>
            <li>以接待、慷慨与公义活出福音。</li>
            <li>每一次聚集都扎根于圣经、祷告与彼此监督。</li>
            <li>搭起美国与中国大陆信徒之间的桥梁。</li>
            <li>为地方教会提供易于使用的媒体与培训路径。</li>
          </ul>
        `
      },
      {
        title: '事工节奏',
        content: `
          <div class="timeline">
            <div class="timeline-item">
              <h3>每季度</h3>
              <p>区域敬拜之夜、全城服事行动、跨国线上论坛。</p>
            </div>
            <div class="timeline-item">
              <h3>每月</h3>
              <p>教练与小组长混合式培训营、家庭门训工作坊。</p>
            </div>
            <div class="timeline-item">
              <h3>每周</h3>
              <p>体能训练队、线上查经同伴、连结时区的祷告跑。</p>
            </div>
          </div>
        `
      },
      {
        title: '监督与遮盖',
        content: `
          <p>生命跑者团契接受跨文化顾问团队的监督，成员包含牧者、非营利机构负责人与资深宣教士。财务管家每季审核，并在年度报告中公开。</p>
          <p class="notice">我们已在加州注册，并遵守美国国税局 501(c)(3) 申报要求。</p>
        `
      }
    ]
  },
  {
    lang: 'en',
    path: 'en/about/confession/index.html',
    url: '/en/about/confession/',
    title: 'Confession of Faith',
    description: 'Our theological convictions rooted in Scripture.',
    altLang: '/zh/about/confession/',
    hero: {
      eyebrow: 'Confession of Faith',
      title: 'Anchored in historic orthodoxy, expressed in contemporary mission.',
      subtitle: 'These statements guide our teaching, counseling, partnerships, and accountability processes.'
    },
    breadcrumbs: [
      { href: '/en/', label: 'Home' },
      { href: '/en/about/', label: 'About' }
    ],
    sections: [
      {
        title: 'Core Beliefs',
        content: `
          <ol>
            <li><strong>Triune God:</strong> We worship one God—Father, Son, Spirit—revealed in the Scriptures.</li>
            <li><strong>Authority of Scripture:</strong> The Bible is inspired, trustworthy, and authoritative for faith and practice.</li>
            <li><strong>Salvation by grace:</strong> We are saved by grace through faith in Jesus Christ, evidenced by a transformed life.</li>
            <li><strong>Church & Mission:</strong> The global Church is called to embody Christ’s kingdom in every nation, making disciples of all peoples.</li>
            <li><strong>Human dignity:</strong> Every person bears God’s image; therefore we uphold life, justice, and mercy.</li>
          </ol>
        `
      },
      {
        title: 'Practice Commitments',
        content: `
          <ul>
            <li>We teach and facilitate spiritual disciplines that foster intimacy with Christ.</li>
            <li>We practice reconciliation, anti-corruption measures, and transparent stewardship.</li>
            <li>We partner with local churches, never replacing them.</li>
            <li>We pursue unity amidst cultural differences with humility and bilingual hospitality.</li>
          </ul>
        `
      }
    ]
  },
  {
    lang: 'zh',
    path: 'zh/about/confession/index.html',
    url: '/zh/about/confession/',
    title: '信仰告白',
    description: '扎根圣经的信仰宣言。',
    altLang: '/en/about/confession/',
    hero: {
      eyebrow: '信仰告白',
      title: '持守历史正统，在当代使命中活出真理。',
      subtitle: '以下宣言是我们在教导、辅导、合作与监督中的准绳。'
    },
    breadcrumbs: [
      { href: '/zh/', label: '首页' },
      { href: '/zh/about/', label: '关于我们' }
    ],
    sections: [
      {
        title: '核心信条',
        content: `
          <ol>
            <li><strong>三一真神：</strong> 我们敬拜独一真神——圣父、圣子、圣灵，祂在圣经中启示自己。</li>
            <li><strong>圣经权威：</strong> 圣经是神所默示、可信且具有最高权威，引导我们的信仰与生活。</li>
            <li><strong>因信称义：</strong> 人惟有借着相信耶稣基督、领受恩典而得救，并在更新的生命中显明信心。</li>
            <li><strong>教会与使命：</strong> 普世教会蒙召在各国各族活出基督的国度，培育万民作主门徒。</li>
            <li><strong>人受造尊贵：</strong> 人人都是按神的形象所造，因此我们维护生命、公义与怜悯。</li>
          </ol>
        `
      },
      {
        title: '实践承诺',
        content: `
          <ul>
            <li>我们教导并操练属灵操练，帮助肢体亲近基督。</li>
            <li>我们实行和好、反腐败与透明管理。</li>
            <li>我们与地方教会配搭，而非取代。</li>
            <li>我们以谦卑与双语接待追求文化之间的合一。</li>
          </ul>
        `
      }
    ]
  },
  {
    lang: 'en',
    path: 'en/about/logo/index.html',
    url: '/en/about/logo/',
    title: 'Our Logo',
    description: 'The meaning behind the Life Runners emblem.',
    altLang: '/zh/about/logo/',
    hero: {
      eyebrow: 'Visual Identity',
      title: 'Every stroke tells our story.',
      subtitle: 'From the running path to the cross, our emblem reflects the journey of discipleship.'
    },
    breadcrumbs: [
      { href: '/en/', label: 'Home' },
      { href: '/en/about/', label: 'About' }
    ],
    sections: [
      {
        title: 'Symbol Breakdown',
        content: `
          <div class="cards">
            <article class="card">
              <h3>The Path</h3>
              <p>The sweeping track represents endurance disciplines that shape our character.</p>
            </article>
            <article class="card">
              <h3>The Cross</h3>
              <p>The cross anchors our identity in Christ’s sacrificial love and resurrection power.</p>
            </article>
            <article class="card">
              <h3>The River</h3>
              <p>The flowing line nods to the Bay and the living water of the Spirit that refreshes believers.</p>
            </article>
            <article class="card">
              <h3>The Characters</h3>
              <p>“爱 Love” in simplified Chinese reminds us that every language and culture is welcome at the starting line.</p>
            </article>
          </div>
        `
      },
      {
        title: 'Usage Guidelines',
        content: `
          <table class="table">
            <caption>Logo variations</caption>
            <thead>
              <tr><th>Version</th><th>Use case</th><th>Download</th></tr>
            </thead>
            <tbody>
              <tr><td>Primary full-color</td><td>Digital & print up to poster size</td><td><a href="/media/brand/liferunners-logo-full.zip">ZIP</a></td></tr>
              <tr><td>Mono dark</td><td>Embroidery, etched medals</td><td><a href="/media/brand/liferunners-logo-mono-dark.svg">SVG</a></td></tr>
              <tr><td>Mono light</td><td>Dark backgrounds, apparel</td><td><a href="/media/brand/liferunners-logo-mono-light.svg">SVG</a></td></tr>
            </tbody>
          </table>
        `
      }
    ]
  },
  {
    lang: 'zh',
    path: 'zh/about/logo/index.html',
    url: '/zh/about/logo/',
    title: '标志故事',
    description: '生命跑者标志所承载的意义。',
    altLang: '/en/about/logo/',
    hero: {
      eyebrow: '视觉识别',
      title: '每一道线条都述说故事。',
      subtitle: '从跑道到十字架，标志呈现门徒旅程。'
    },
    breadcrumbs: [
      { href: '/zh/', label: '首页' },
      { href: '/zh/about/', label: '关于我们' }
    ],
    sections: [
      {
        title: '元素解析',
        content: `
          <div class="cards">
            <article class="card">
              <h3>赛道</h3>
              <p>弧形跑道象征操练与毅力，提醒我们在主里坚持。</p>
            </article>
            <article class="card">
              <h3>十字架</h3>
              <p>十字架扎根于基督舍己的爱与复活的大能。</p>
            </article>
            <article class="card">
              <h3>河流</h3>
              <p>流动线条呼应湾区与圣灵活水，滋润所有信徒。</p>
            </article>
            <article class="card">
              <h3>“爱”字</h3>
              <p>简体“爱”字提醒我们欢迎每一种语言与文化一同起跑。</p>
            </article>
          </div>
        `
      },
      {
        title: '使用指引',
        content: `
          <table class="table">
            <caption>标志版本</caption>
            <thead>
              <tr><th>版本</th><th>适用场景</th><th>下载</th></tr>
            </thead>
            <tbody>
              <tr><td>主色版</td><td>海报、网页</td><td><a href="/media/brand/liferunners-logo-full.zip">ZIP</a></td></tr>
              <tr><td>深色单色</td><td>绣章、奖牌</td><td><a href="/media/brand/liferunners-logo-mono-dark.svg">SVG</a></td></tr>
              <tr><td>浅色单色</td><td>深底色服饰</td><td><a href="/media/brand/liferunners-logo-mono-light.svg">SVG</a></td></tr>
            </tbody>
          </table>
        `
      }
    ]
  },
  {
    lang: 'en',
    path: 'en/about/team/index.html',
    url: '/en/about/team/',
    title: 'Leadership Team',
    description: 'Meet the servant leaders who steward Life Runners Fellowship.',
    altLang: '/zh/about/team/',
    hero: {
      eyebrow: 'Leadership',
      title: 'A cross-cultural team running together.',
      subtitle: 'Our board and staff serve bi-vocationally across ministry, business, and athletics.'
    },
    breadcrumbs: [
      { href: '/en/', label: 'Home' },
      { href: '/en/about/', label: 'About' }
    ],
    sections: [
      {
        title: 'Board of Directors',
        content: `
          <div class="cards">
            <article class="card">
              <h3>Pastor Jianzhong Zhu, Co-Founder and Chairman</h3>
              <p>Senior Pastor, responsible for overall teaching and strategy.</p>
            </article>
            <article class="card">
              <h3>Qilan Zeng, Secretary</h3>
              <p>Assists in day-to-day affairs and is responsible for the maintenance of overall organizational records.</p>
            </article>
            <article class="card">
              <h3>Shulin Cui, Board Member</h3>
              <p>Finance Consultant ensuring compliance, audits, and transparent reporting.</p>
            </article>
            <article class="card">
              <h3>Mei Mei, Board Member</h3>
              <p>Public Relation Specialist.</p>
            </article>            
            <article class="card">
              <h3>Yanling Zhang, Board Member</h3>
              <p>Assist in finance and growth of the organization.</p>
            </article>
            <article class="card">
              <h3>Jia-bing Cheng, Board Member</h3>
              <p>Technical Team Lead.</p>
            </article>
          </div>
        `
      },
      {
        title: 'Core Volunteers',
        content: `
          <div class="cards">
            <article class="card">
              <h3>Coworkers</h3>
              <p>Over 10 volunteers steward online Bible study, prayer, hospitality, tech support, and mentoring.</p>
            </article>
          </div>
        `
      }
    ]
  },
  {
    lang: 'zh',
    path: 'zh/about/team/index.html',
    url: '/zh/about/team/',
    title: '领袖团队',
    description: '认识生命跑者团契的同工与顾问。',
    altLang: '/en/about/team/',
    hero: {
      eyebrow: '团队',
      title: '跨文化团队并肩奔跑。',
      subtitle: '董事与同工多元职业背景，联合服事。'
    },
    breadcrumbs: [
      { href: '/zh/', label: '首页' },
      { href: '/zh/about/', label: '关于我们' }
    ],
    sections: [
      {
        title: '董事会',
        content: `
          <div class="cards">
            <article class="card">
              <h3>朱建忠牧师，联合创办人及主席</h3>
              <p>组织牧师，负责整体教导与策略。</p>
            </article>
            <article class="card">
              <h3>曾其兰，主任秘书</h3>
              <p>协助主席处理日常事务，并负责整体组织记录的维护。</p>
            </article>
            <article class="card">
              <h3>崔树林，董事会成员</h3>
              <p>非营利财务顾问，负责法规、稽核与透明汇报。</p>
            </article>
            <article class="card">
              <h3>梅枚，董事会成员</h3>
              <p>公共关系专员。</p>
            </article>
            <article class="card">
              <h3>张艳玲，董事会成员</h3>
              <p>协助组织的财务与成长。</p>
            </article>
            <article class="card">
              <h3>程嘉彬，董事会成员</h3>
              <p>技术团队负责人。</p>
            </article>
          </div>
        `
      },
      {
        title: '核心同工',
        content: `
          <div class="cards">
            
            <article class="card">
              <h3>同工团队</h3>
              <p>超过 10 位志愿者分工承担圣经学习、祷告、关怀接待、技术支援，和属灵导师。</p>
            </article>
          </div>
        `
      }
    ]
  },
  {
    lang: 'en',
    path: 'en/about/calendar/index.html',
    url: '/en/about/calendar/',
    title: 'Event Calendar',
    description: 'Stay in sync with Life Runners gatherings across regions.',
    altLang: '/zh/about/calendar/',
    hero: {
      eyebrow: 'Calendar',
      title: 'One rhythm across time zones.',
      subtitle: 'Use the calendar and quick links below to join events from anywhere.'
    },
    breadcrumbs: [
      { href: '/en/', label: 'Home' },
      { href: '/en/about/', label: 'About' }
    ],
    sections: [
      {
        title: 'Monthly Overview',
        content: calendarEmbed.en
      },
      {
        title: 'Quick Links',
        content: `
          <ul>
            <li><a href="/en/events/upcoming/">Upcoming event briefings</a></li>
            <li><a href="https://calendar.google.com/calendar/ical/lifrunners%40example.com/public/basic.ics" target="_blank" rel="noopener">Subscribe to iCal feed</a></li>
            <li><a href="/en/support/contact/#volunteer">Volunteer rotation sign-up</a></li>
          </ul>
          <p class="notice">Events with livestreams always include downloadable discussion guides and China-accessible audio mirrors.</p>
        `
      }
    ]
  },
  {
    lang: 'zh',
    path: 'zh/about/calendar/index.html',
    url: '/zh/about/calendar/',
    title: '活动日历',
    description: '同步掌握生命跑者在各地的聚会。',
    altLang: '/en/about/calendar/',
    hero: {
      eyebrow: '活动日历',
      title: '跨时区的同心节奏。',
      subtitle: '利用下列日历与连结，不论身在何处都能参与。'
    },
    breadcrumbs: [
      { href: '/zh/', label: '首页' },
      { href: '/zh/about/', label: '关于我们' }
    ],
    sections: [
      {
        title: '月度总览',
        content: calendarEmbed.zh
      },
      {
        title: '快速连结',
        content: `
          <ul>
            <li><a href="/zh/events/upcoming/">近期活动预告</a></li>
            <li><a href="https://calendar.google.com/calendar/ical/lifrunners%40example.com/public/basic.ics" target="_blank" rel="noopener">订阅 iCal 行事历</a></li>
            <li><a href="/zh/support/contact/#volunteer">加入服事轮值</a></li>
          </ul>
          <p class="notice">凡有直播的活动都会提供讨论指引与中国可访问的音频镜像。</p>
        `
      }
    ]
  },
  {
    lang: 'en',
    path: 'en/ministries/index.html',
    url: '/en/ministries/',
    title: 'Ministries',
    description: 'Explore discipleship pathways that blend athletics, Scripture, and service.',
    altLang: '/zh/ministries/',
    hero: {
      eyebrow: 'Ministries',
      title: 'Holistic discipleship pathways.',
      subtitle: 'Three ministry lanes keep us aligned with the motto: exercise your body, practice godliness, live out love.'
    },
    breadcrumbs: [
      { href: '/en/', label: 'Home' }
    ],
    sections: [
      {
        title: 'Ministry Lanes',
        content: `
          <div class="cards">
            <article class="card">
              <h3>Exercise your body</h3>
              <p>Training crews, wellness seminars, and coaching certifications.</p>
              <a class="button" href="/en/ministries/body/">See programs</a>
            </article>
            <article class="card">
              <h3>Practice godliness</h3>
              <p>Bible cohorts, prayer labs, and spiritual direction for athletes.</p>
              <a class="button" href="/en/ministries/godliness/">Start cohort</a>
            </article>
            <article class="card">
              <h3>Live out love</h3>
              <p>Mercy runs, relief response, and advocacy initiatives with partner NGOs.</p>
              <a class="button" href="/en/ministries/love/">Join impact</a>
            </article>
          </div>
        `
      },
    ]
  },
  {
    lang: 'zh',
    path: 'zh/ministries/index.html',
    url: '/zh/ministries/',
    title: '事工介绍',
    description: '探索结合运动、圣经与服事的门训路径。',
    altLang: '/en/ministries/',
    hero: {
      eyebrow: '事工',
      title: '全人门训的三条跑道。',
      subtitle: '三大方向呼应口号：操练身体、操练敬虔、活出爱。'
    },
    breadcrumbs: [
      { href: '/zh/', label: '首页' }
    ],
    sections: [
      {
        title: '三大方向',
        content: `
          <div class="cards">
            <article class="card">
              <h3>操练身体</h3>
              <p>训练队、健康讲座与教练认证。</p>
              <a class="button" href="/zh/ministries/body/">认识方案</a>
            </article>
            <article class="card">
              <h3>操练敬虔</h3>
              <p>查经同行、祷告工坊与运动员心灵陪伴。</p>
              <a class="button" href="/zh/ministries/godliness/">加入小组</a>
            </article>
            <article class="card">
              <h3>活出爱</h3>
              <p>爱心路跑、救灾动员与与 NGO 合作倡议。</p>
              <a class="button" href="/zh/ministries/love/">参与影响</a>
            </article>
          </div>
        `
      },
    ]
  },
  {
    lang: 'en',
    path: 'en/ministries/body/index.html',
    url: '/en/ministries/body/',
    title: 'Exercise your body',
    description: 'Training crews and wellness practices that nurture endurance and faith.',
    altLang: '/zh/ministries/body/',
    hero: {
      eyebrow: 'Ministry Focus',
      title: 'Bodies strengthened for kingdom mission.',
      subtitle: 'From 5K starters to ultra runners, we coach every athlete toward health, rest, and witness.'
    },
    breadcrumbs: [
      { href: '/en/', label: 'Home' },
      { href: '/en/ministries/', label: 'Ministries' }
    ],
    sections: [
      {
        title: 'Programs',
        content: `
          <ul>
            <li><strong>Training Crews:</strong> 6-week cycles with strength, mobility, and scripture reflections.</li>
            <li><strong>Wellness Intensives:</strong> Nutrition, recovery, and injury-prevention clinics with bilingual guides.</li>
            <li><strong>Coach Residency:</strong> Mentorship for emerging coaches including safeguarding and discipleship frameworks.</li>
          </ul>
        `
      },
      {
        title: 'Resources',
        content: `
          <div class="cards">
            <article class="card">
              <h3>Weekly Training Plan</h3>
              <p>Download PDF and Mandarin audio walkthrough.</p>
              <a class="button" href="/media/resources/training-plan.pdf">Download PDF</a>
              <a class="button" href="/media/audio/training-plan-mandarin.mp3">听取中文音频</a>
            </article>
            <article class="card">
              <h3>Stretch & Scripture</h3>
              <p>Spotify playlist and domestic mirror for guided stretching prayers.</p>
              <a class="button" href="https://open.spotify.com/playlist/stretch-scripture" target="_blank" rel="noopener">Spotify</a>
              <a class="button" href="/media/audio/stretch-scripture.zip">China mirror</a>
            </article>
          </div>
        `
      }
    ]
  },
  {
    lang: 'zh',
    path: 'zh/ministries/body/index.html',
    url: '/zh/ministries/body/',
    title: '操练身体',
    description: '训练队与健康操练，使体力与信仰同得建造。',
    altLang: '/en/ministries/body/',
    hero: {
      eyebrow: '事工焦点',
      title: '为国度使命而强壮的身体。',
      subtitle: '从 5 公里入门到超马跑者，我们陪伴每一位运动员在健康、休息与见证上成长。'
    },
    breadcrumbs: [
      { href: '/zh/', label: '首页' },
      { href: '/zh/ministries/', label: '事工介绍' }
    ],
    sections: [
      {
        title: '项目内容',
        content: `
          <ul>
            <li><strong>训练队：</strong> 六周循环课程，结合力量、灵活与经文反思。</li>
            <li><strong>健康工作坊：</strong> 双语营养、恢复与防护课程。</li>
            <li><strong>教练培育：</strong> 透过导师陪伴建立教练团队，并涵盖防护与门训架构。</li>
          </ul>
        `
      },
      {
        title: '资源下载',
        content: `
          <div class="cards">
            <article class="card">
              <h3>每周训练表</h3>
              <p>提供 PDF 与普通话音频讲解。</p>
              <a class="button" href="/media/resources/training-plan.pdf">下载 PDF</a>
              <a class="button" href="/media/audio/training-plan-mandarin.mp3">收听音频</a>
            </article>
            <article class="card">
              <h3>伸展与经文</h3>
              <p>Spotify 播放清单及国内镜像，带领祷告伸展。</p>
              <a class="button" href="https://open.spotify.com/playlist/stretch-scripture" target="_blank" rel="noopener">Spotify</a>
              <a class="button" href="/media/audio/stretch-scripture.zip">国内镜像</a>
            </article>
          </div>
        `
      }
    ]
  },
  {
    lang: 'en',
    path: 'en/ministries/godliness/index.html',
    url: '/en/ministries/godliness/',
    title: 'Practice godliness',
    description: 'Spiritual formation for athletes and families.',
    altLang: '/zh/ministries/godliness/',
    hero: {
      eyebrow: 'Ministry Focus',
      title: 'Training the soul for endurance.',
      subtitle: 'We cultivate spiritual disciplines, community rhythms, and pastoral care for athletes and families.'
    },
    breadcrumbs: [
      { href: '/en/', label: 'Home' },
      { href: '/en/ministries/', label: 'Ministries' }
    ],
    sections: [
      {
        title: 'Cohorts & Labs',
        content: `
          <ul>
            <li><strong>Bible Cohorts:</strong> 8-week journeys through Romans, Hebrews, and Gospel of Mark with bilingual guides.</li>
            <li><strong>Prayer Labs:</strong> Breath prayer, lectio divina, and lament liturgies contextualized for athletes.</li>
            <li><strong>Spiritual Direction:</strong> Monthly sessions with trained directors for athletes processing transition or trauma.</li>
          </ul>
        `
      },
      {
        title: 'Downloadables',
        content: `
          <div class="cards">
            <article class="card">
              <h3>Rule of Life Template</h3>
              <p>Editable PDF + Mandarin doc for families crafting daily rhythms.</p>
              <a class="button" href="/media/resources/rule-of-life.pdf">PDF</a>
              <a class="button" href="/media/resources/rule-of-life-cn.docx">DOCX</a>
            </article>
            <article class="card">
              <h3>Breath Prayer Audio</h3>
              <p>5-minute bilingual guidance with transcript.</p>
              <a class="button" href="/media/audio/breath-prayer.mp3">MP3</a>
              <a class="button" href="/media/transcripts/breath-prayer.pdf">Transcript</a>
            </article>
          </div>
        `
      }
    ]
  },
  {
    lang: 'zh',
    path: 'zh/ministries/godliness/index.html',
    url: '/zh/ministries/godliness/',
    title: '操练敬虔',
    description: '为运动员与家庭预备的属灵塑造。',
    altLang: '/en/ministries/godliness/',
    hero: {
      eyebrow: '事工焦点',
      title: '灵里持久的训练。',
      subtitle: '我们栽培属灵操练、群体节奏与牧养关怀。'
    },
    breadcrumbs: [
      { href: '/zh/', label: '首页' },
      { href: '/zh/ministries/', label: '事工介绍' }
    ],
    sections: [
      {
        title: '门训课程',
        content: `
          <ul>
            <li><strong>查经同行：</strong> 八周课程，研读罗马书、希伯来书与马可福音，附双语教材。</li>
            <li><strong>祷告工坊：</strong> 呼吸祷告、灵修读经、哀恸礼文，贴近运动员处境。</li>
            <li><strong>属灵陪伴：</strong> 每月与受训属灵导师对谈，陪伴运动员面对转换与创伤。</li>
          </ul>
        `
      },
      {
        title: '下载资源',
        content: `
          <div class="cards">
            <article class="card">
              <h3>生活规则模版</h3>
              <p>可编辑 PDF 与中文 DOC，帮助家庭规划每日节奏。</p>
              <a class="button" href="/media/resources/rule-of-life.pdf">PDF</a>
              <a class="button" href="/media/resources/rule-of-life-cn.docx">DOC</a>
            </article>
            <article class="card">
              <h3>呼吸祷告音频</h3>
              <p>5 分钟双语引导，附逐字稿。</p>
              <a class="button" href="/media/audio/breath-prayer.mp3">MP3</a>
              <a class="button" href="/media/transcripts/breath-prayer.pdf">逐字稿</a>
            </article>
          </div>
        `
      }
    ]
  },
  {
    lang: 'en',
    path: 'en/ministries/love/index.html',
    url: '/en/ministries/love/',
    title: 'Live out love',
    description: 'Mercy and justice initiatives fueled by the gospel.',
    altLang: '/zh/ministries/love/',
    hero: {
      eyebrow: 'Ministry Focus',
      title: 'Faith expressed through action.',
      subtitle: 'We mobilize runners and families to serve cities, support missionaries, and advocate for the vulnerable.'
    },
    breadcrumbs: [
      { href: '/en/', label: 'Home' },
      { href: '/en/ministries/', label: 'Ministries' }
    ],
    sections: [
      {
        title: 'Initiatives',
        content: `
          <ul>
            <li><strong>Mercy Runs:</strong> Partner with shelters and crisis pregnancy centers to raise relief funds.</li>
            <li><strong>Care Teams:</strong> Visit hospitals, deliver meals, and provide counseling support for injured athletes.</li>
            <li><strong>Advocacy:</strong> Collaborate with NGOs to champion anti-trafficking and youth wellness programs.</li>
          </ul>
        `
      },
      {
        title: 'Impact Stories',
        content: `
          <div class="cards">
            <article class="card">
              <h3>Mercy Run Manila</h3>
              <p>Raised $18,000 for typhoon recovery with bilingual devotion kits.</p>
              <a class="button" href="/en/events/past/#mercy-run-manila">Read recap</a>
            </article>
            <article class="card">
              <h3>Bridge Builders</h3>
              <p>Monthly service with Chinatown churches delivering meals to seniors.</p>
              <a class="button" href="/en/events/past/#bridge-builders">See photos</a>
            </article>
          </div>
        `
      }
    ]
  },
  {
    lang: 'zh',
    path: 'zh/ministries/love/index.html',
    url: '/zh/ministries/love/',
    title: '活出爱',
    description: '以福音为动力的爱心与公义行动。',
    altLang: '/en/ministries/love/',
    hero: {
      eyebrow: '事工焦点',
      title: '用行动见证信仰。',
      subtitle: '我们动员跑者与家庭服事城市、支持宣教士、为弱势群体发声。'
    },
    breadcrumbs: [
      { href: '/zh/', label: '首页' },
      { href: '/zh/ministries/', label: '事工介绍' }
    ],
    sections: [
      {
        title: '主要行动',
        content: `
          <ul>
            <li><strong>爱心路跑：</strong> 与庇护所、生命关怀中心合作，透过路跑筹募经费。</li>
            <li><strong>关怀小组：</strong> 探访医院、送餐、为受伤运动员提供辅导支持。</li>
            <li><strong>倡导事工：</strong> 与 NGO 合作，关注反人口贩运与青少年身心健康。</li>
          </ul>
        `
      },
      {
        title: '见证故事',
        content: `
          <div class="cards">
            <article class="card">
              <h3>爱心路跑</h3>
              <p>为台风灾后重建筹得 18,000 美元，并提供双语灵修包。</p>
              <a class="button" href="/zh/events/past/#mercy-run-manila">活动回顾</a>
            </article>
            <article class="card">
              <h3>桥梁建造者</h3>
              <p>与华埠教会每月联动，为长者送上热餐。</p>
              <a class="button" href="/zh/events/past/#bridge-builders">照片花絮</a>
            </article>
          </div>
        `
      }
    ]
  },
  {
    lang: 'en',
    path: 'en/resources/index.html',
    url: '/en/resources/',
    title: 'Resources',
    description: 'Bible study materials, devotionals, and FAQs updated regularly.',
    altLang: '/zh/resources/',
    hero: {
      eyebrow: 'Resource Hub',
      title: 'Fuel your discipleship journey.',
      subtitle: 'Bible study packs, devotionals, and Q&A designed for athletes, families, and small groups.'
    },
    breadcrumbs: [
      { href: '/en/', label: 'Home' }
    ],
    sections: [
      {
        title: 'Collections',
        content: `
          <div class="cards">
            <article class="card">
              <h3>Old Testament</h3>
              <p>Book-by-book studies with timelines and application prompts.</p>
              <a class="button" href="/en/resources/ot/">Explore OT</a>
            </article>
            <article class="card">
              <h3>New Testament</h3>
              <p>Gospels, Acts, and epistles with bilingual leader notes.</p>
              <a class="button" href="/en/resources/nt/">Explore NT</a>
            </article>
            <article class="card">
              <h3>Faith Q&A</h3>
              <p>Common discipleship questions answered in English and Chinese.</p>
              <a class="button" href="/en/resources/faq/">View Q&A</a>
            </article>
          </div>
        `
      },
    ]
  },
  {
    lang: 'zh',
    path: 'zh/resources/index.html',
    url: '/zh/resources/',
    title: '查经资料',
    description: '定期更新的圣经查经、灵修与常见问题解答。',
    altLang: '/en/resources/',
    hero: {
      eyebrow: '资源中心',
      title: '为门徒旅程加油。',
      subtitle: '按卷查经包、灵修素材与信仰问答，适合运动员、家庭与小组使用。'
    },
    breadcrumbs: [
      { href: '/zh/', label: '首页' }
    ],
    sections: [
      {
        title: '资源分类',
        content: `
          <div class="cards">
            <article class="card">
              <h3>旧约</h3>
              <p>按卷查经，附时间轴与应用问题。</p>
              <a class="button" href="/zh/resources/ot/">进入旧约</a>
            </article>
            <article class="card">
              <h3>新约</h3>
              <p>福音书、使徒行传与书信，含双语带领笔记。</p>
              <a class="button" href="/zh/resources/nt/">进入新约</a>
            </article>
            <article class="card">
              <h3>信仰问答</h3>
              <p>常见门训问题的中英解答。</p>
              <a class="button" href="/zh/resources/faq/">查看问答</a>
            </article>
          </div>
        `
      },
    ]
  },
  {
    lang: 'en',
    path: 'en/resources/ot/index.html',
    url: '/en/resources/ot/',
    title: 'Old Testament Studies',
    description: 'Book-by-book studies with printable guides and media.',
    altLang: '/zh/resources/ot/',
    hero: {
      eyebrow: 'Resources',
      title: 'Old Testament library.',
      subtitle: 'Organized by book with downloadable PDFs, audio, and teaching slides.'
    },
    breadcrumbs: [
      { href: '/en/', label: 'Home' },
      { href: '/en/resources/', label: 'Resources' }
    ],
    sections: [
      {
        title: 'Study Catalog',
        content: `
          <table class="table">
            <thead>
              <tr><th>Book</th><th>Session Focus</th><th>Resources</th><th>Updated</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Genesis 12-25</td>
                <td>Journey of Abraham: covenant, hospitality, and mission.</td>
                <td>
                  <a href="/media/resources/genesis12-25-guide.pdf">PDF</a> ·
                  <a href="/media/audio/genesis12-25.mp3">MP3</a> ·
                  <a href="/media/resources/genesis12-25-slides.pptx">Slides</a>
                </td>
                <td>Aug 2025</td>
              </tr>
              <tr>
                <td>Exodus 13-20</td>
                <td>Freedom practices: Sabbath, justice, and covenant community.</td>
                <td>
                  <a href="/media/resources/exodus13-20-guide.pdf">PDF</a> ·
                  <a href="/media/audio/exodus13-20.mp3">MP3</a>
                </td>
                <td>Jun 2025</td>
              </tr>
              <tr>
                <td>Psalms of Ascent</td>
                <td>Prayer liturgy for traveling worshippers.</td>
                <td>
                  <a href="/media/resources/psalms-ascent.pdf">PDF</a> ·
                  <a href="/media/audio/psalms-ascent.mp3">MP3</a> ·
                  <a href="/media/transcripts/psalms-ascent.txt">Transcript</a>
                </td>
                <td>Sep 2025</td>
              </tr>
            </tbody>
          </table>
        `
      }
    ]
  },
  {
    lang: 'zh',
    path: 'zh/resources/ot/index.html',
    url: '/zh/resources/ot/',
    title: '旧约查经',
    description: '按卷整理的旧约查经教材与媒体。',
    altLang: '/en/resources/ot/',
    hero: {
      eyebrow: '资源',
      title: '旧约资料库。',
      subtitle: '依书卷分类，附 PDF、音频与教学简报。'
    },
    breadcrumbs: [
      { href: '/zh/', label: '首页' },
      { href: '/zh/resources/', label: '查经资料' }
    ],
    sections: [
      {
        title: '教材目录',
        content: `
          <table class="table">
            <thead>
              <tr><th>书卷</th><th>主题</th><th>资源</th><th>更新日期</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>创世记 12-25 章</td>
                <td>亚伯拉罕旅程：盟约、接待与使命。</td>
                <td>
                  <a href="/media/resources/genesis12-25-guide.pdf">PDF</a> ·
                  <a href="/media/audio/genesis12-25.mp3">音频</a> ·
                  <a href="/media/resources/genesis12-25-slides.pptx">简报</a>
                </td>
                <td>2025-08</td>
              </tr>
              <tr>
                <td>出埃及记 13-20 章</td>
                <td>自由实践：安息日、公义与盟约群体。</td>
                <td>
                  <a href="/media/resources/exodus13-20-guide.pdf">PDF</a> ·
                  <a href="/media/audio/exodus13-20.mp3">音频</a>
                </td>
                <td>2025-06</td>
              </tr>
              <tr>
                <td>上行之诗</td>
                <td>旅途敬拜者的祷告礼仪。</td>
                <td>
                  <a href="/media/resources/psalms-ascent.pdf">PDF</a> ·
                  <a href="/media/audio/psalms-ascent.mp3">音频</a> ·
                  <a href="/media/transcripts/psalms-ascent.txt">文字稿</a>
                </td>
                <td>2025-09</td>
              </tr>
            </tbody>
          </table>
        `
      }
    ]
  },
  {
    lang: 'en',
    path: 'en/resources/nt/index.html',
    url: '/en/resources/nt/',
    title: 'New Testament Studies',
    description: 'Gospel-centered studies with leader notes and bilingual media.',
    altLang: '/zh/resources/nt/',
    hero: {
      eyebrow: 'Resources',
      title: 'New Testament study tracks.',
      subtitle: 'Designed for weekly cohorts and personal devotion alike.'
    },
    breadcrumbs: [
      { href: '/en/', label: 'Home' },
      { href: '/en/resources/', label: 'Resources' }
    ],
    sections: [
      {
        title: 'Study Packs',
        content: `
          <div class="section">
            <h3 id="revelation-">Revelation — </h3>
            <p>Five times a week studying the book of Revelation.</p>
            <ul>
              <li><a href="/media/audio/nt27/nt27.html">Scripture reading audio and video links</a></li>
            </ul>
            ${sharedMediaNotice.en}
          </div>
          <div class="section">
            <h3 id="peter-john-jude">1st&2nd Peter, 1st/2nd/3td John, Jude — </h3>
            <p>Five times a week studying the letters written by Peter, John and Jode.</p>
            <ul>
              <li><a href="/media/audio/nt21/nt21.html">Scripture reading audio and video links</a></li>
            </ul>
            ${sharedMediaNotice.en}
          </div>
          <div class="section">
            <h3 id="hebrew-james">Hebrew and James — Faith and Action</h3>
            <p>Five times a week studying the books of Hebrew and James.</p>
            <ul>
              <li><a href="/media/audio/nt19/nt19.html">Scripture reading audio and video links</a></li>
            </ul>
            ${sharedMediaNotice.en}
          </div>
        `
      }
    ]
  },
  {
    lang: 'zh',
    path: 'zh/resources/nt/index.html',
    url: '/zh/resources/nt/',
    title: '新约查经',
    description: '以福音为中心的查经教材，附带领笔记与双语媒体。',
    altLang: '/en/resources/nt/',
    hero: {
      eyebrow: '资源',
      title: '新约查经包。',
      subtitle: '适合每周小组与个人灵修。'
    },
    breadcrumbs: [
      { href: '/zh/', label: '首页' },
      { href: '/zh/resources/', label: '查经资料' }
    ],
    sections: [
      {
        title: '教材内容',
        content: `
          <div class="section">
            <h3 id="revelation-">启示录 — </h3>
            <p>每周五天灵修与讨论</p>
            <ul>
              <li><a href="/media/audio/nt27/nt27.html">经文朗读与视频</a></li>
            </ul>
            ${sharedMediaNotice.zh}
          </div>
          <div class="section">
            <h3 id="peter-john-jude">彼得前后书，约翰一二三书，犹大书 — </h3>
            <p>每周五天灵修与讨论</p>
            <ul>
              <li><a href="/media/audio/nt21/nt21.html">经文朗读与视频</a></li>
            </ul>
            ${sharedMediaNotice.zh}
          </div>
          <div class="section">
            <h3 id="hebrew-james">希伯来书, 雅各书 — 信心与行为</h3>
            <p>每周五天灵修与讨论</p>
            <ul>
              <li><a href="/media/audio/nt19/nt19.html">经文朗读与视频</a></li>
            </ul>
            ${sharedMediaNotice.zh}
          </div>
        `
      }
    ]
  },
  {
    lang: 'en',
    path: 'en/resources/faq/index.html',
    url: '/en/resources/faq/',
    title: 'Faith Q&A',
    description: 'Answers to discipleship questions gathered from our community.',
    altLang: '/zh/resources/faq/',
    hero: {
      eyebrow: 'Resources',
      title: 'Frequently asked questions.',
      subtitle: 'Bilingual responses to theological and practical questions from athletes and families.'
    },
    breadcrumbs: [
      { href: '/en/', label: 'Home' },
      { href: '/en/resources/', label: 'Resources' }
    ],
    sections: [
      {
        title: 'Latest Questions',
        content: `
          <div class="section">
            <h3>How do we respond when competitions happen on Sundays?</h3>
            <p>We encourage families to discern with church leadership, consider Saturday worship services, and host team communion gatherings on race weekends.</p>
            <p><strong>Scripture:</strong> Hebrews 10:24-25, Romans 14:5-9.</p>
          </div>
          <div class="section">
            <h3>What media platforms work best inside mainland China?</h3>
            <p>We mirror essential audio files on this site and recommend using WeChat Channels or Bilibili for short-form video. All external links open in new tabs with fallback downloads.</p>
          </div>
          <div class="section">
            <h3>How can we disciple youth athletes facing burnout?</h3>
            <p>Invite them into rhythms of rest, Sabbath practices, and mentoring circles that prioritize identity in Christ over performance. See <a href="/en/ministries/godliness/">Practice godliness</a> resources.</p>
          </div>
        `
      }
    ]
  },
  {
    lang: 'zh',
    path: 'zh/resources/faq/index.html',
    url: '/zh/resources/faq/',
    title: '信仰问答',
    description: '回应社群常见的门训问题。',
    altLang: '/en/resources/faq/',
    hero: {
      eyebrow: '资源',
      title: '常见问题。',
      subtitle: '以中英双语回答运动员与家庭的神学与实践提问。'
    },
    breadcrumbs: [
      { href: '/zh/', label: '首页' },
      { href: '/zh/resources/', label: '查经资料' }
    ],
    sections: [
      {
        title: '最新提问',
        content: `
          <div class="section">
            <h3>比赛若安排在主日该如何处理？</h3>
            <p>鼓励家庭与教会牧者一同辨明，可参加周六礼拜或在赛事周末举行团队圣餐聚会。</p>
            <p><strong>经文：</strong> 希伯来书 10:24-25，罗马书 14:5-9。</p>
          </div>
          <div class="section">
            <h3>在中国大陆适合使用哪些媒体平台？</h3>
            <p>关键音频已在本站镜像，并建议使用视频号或 B 站作为短影音管道。所有外部连结都会在新分页开启，并提供备用下载。</p>
          </div>
          <div class="section">
            <h3>如何陪伴面对倦怠的青少年运动员？</h3>
            <p>带领他们建立安息节奏、学习属灵操练，并透过导师小组确认身分根源于基督而非成绩。参考<a href="/zh/ministries/godliness/">操练敬虔</a>资源。</p>
          </div>
        `
      }
    ]
  },
  {
    lang: 'en',
    path: 'en/events/index.html',
    url: '/en/events/',
    title: 'Events',
    description: 'Gatherings, prayer runs, trainings, and mission trips.',
    altLang: '/zh/events/',
    hero: {
      eyebrow: 'Events',
      title: 'Gather, run, and serve with us.',
      subtitle: 'Hybrid events connect the Bay Area and mainland China every season.'
    },
    breadcrumbs: [
      { href: '/en/', label: 'Home' }
    ],
    sections: [
      {
        title: 'Event Tracks',
        content: `
          <div class="cards">
            <article class="card">
              <h3>Prayer Runs</h3>
              <p>Sunrise runs with Scripture reflections and bilingual worship.</p>
              <a class="button" href="/en/events/upcoming/#advent-prayer-run">Next prayer run</a>
            </article>
            <article class="card">
              <h3>Training Intensives</h3>
              <p>Weekend intensives for coaches, small-group leaders, and volunteers.</p>
              <a class="button" href="/en/events/upcoming/#coach-intensive">See schedule</a>
            </article>
            <article class="card">
              <h3>Mercy Missions</h3>
              <p>Service trips and partnership events across Asia and North America.</p>
              <a class="button" href="/en/events/past/#mercy-run-manila">Past impact</a>
            </article>
          </div>
        `
      }
    ]
  },
  {
    lang: 'zh',
    path: 'zh/events/index.html',
    url: '/zh/events/',
    title: '活动预告·记录',
    description: '祷告跑、训练营、宣教行程与线上聚会。',
    altLang: '/en/events/',
    hero: {
      eyebrow: '活动',
      title: '一同聚集、奔跑、服事。',
      subtitle: '每个季度透过线上线下连结湾区与中国。'
    },
    breadcrumbs: [
      { href: '/zh/', label: '首页' }
    ],
    sections: [
      {
        title: '活动类型',
        content: `
          <div class="cards">
            <article class="card">
              <h3>祷告跑</h3>
              <p>清晨经文祷告与中英敬拜。</p>
              <a class="button" href="/zh/events/upcoming/#advent-prayer-run">下一次活动</a>
            </article>
            <article class="card">
              <h3>装备训练</h3>
              <p>教练与同工周末密集训练。</p>
              <a class="button" href="/zh/events/upcoming/#coach-intensive">查看时间</a>
            </article>
            <article class="card">
              <h3>怜悯宣教</h3>
              <p>跨国服事与合作项目。</p>
              <a class="button" href="/zh/events/past/#mercy-run-manila">成果见证</a>
            </article>
          </div>
        `
      }
    ]
  },
  {
    lang: 'en',
    path: 'en/events/upcoming/index.html',
    url: '/en/events/upcoming/',
    title: 'Upcoming Events',
    description: 'Join upcoming prayer runs, trainings, and online cohorts.',
    altLang: '/zh/events/upcoming/',
    hero: {
      eyebrow: 'Events',
      title: 'What’s ahead this season.',
      subtitle: 'Events planned for the coming months.'
    },
    breadcrumbs: [
      { href: '/en/', label: 'Home' },
      { href: '/en/events/', label: 'Events' }
    ],
    sections: [
      {
        title: 'Event Timeline',
        content: `
            </div>
            <div class="timeline-item" id="science-and-faith">
              <h3>Started on Nov 14, 2025 ongoing weekly · Science and Faith ·
		<a href="/media/audio/sci/sci.html" target="_blank">Past Recordings</a>
              </h3>
              <p>Online (Zoom ) | Time: Thursday 6:30-7:30 PM Pacific Time / Friday 10:30-11:30 AM Beijing</p>
              <p>Online (Rerun) | Time: Friday 6:30-7:30 AM Pacific Time / Friday 10:30-11:30 PM Beijing</p>
              <p>Two-day online sessions for understanding the relationship between science and faith.</p>
            </div>
          </div>
        `
      }
    ]
  },
  {
    lang: 'zh',
    path: 'zh/events/upcoming/index.html',
    url: '/zh/events/upcoming/',
    title: '即将举行',
    description: '未来几个月的活动预告。',
    altLang: '/en/events/upcoming/',
    hero: {
      eyebrow: '活动',
      title: '本季重点活动。',
      subtitle: '未来几个月的活动预告。'
    },
    breadcrumbs: [
      { href: '/zh/', label: '首页' },
      { href: '/zh/events/', label: '活动预告·记录' }
    ],
    sections: [
      {
        title: '时间轴',
        content: `
          <div class="timeline">
            <div class="timeline-item" id="science-and-faith">
              <h3>2025年 11月14日 开始，每周一讲，正在进行中 · 科学与信仰课程 ·
		<a href="/media/audio/sci/sci.html" target="_blank">录影存档</a>
              </h3>
              <p> 线上（Zoom）| 时间: 太平洋时间周四下午 6:30-7:30 / 北京时间周五上午 10:30-11:30。 </p>
              <p> 线上（重播_）| 时间: 太平洋时间周五下午 6:30-7:30 / 北京时间周五下午 10:30-11:30。 </p>
              <p> 双向交流的线上课程，探讨科学与信仰之间的关系。 </p>
            </div>
          </div>
        `
      }
    ]
  },
  {
    lang: 'en',
    path: 'en/events/past/index.html',
    url: '/en/events/past/',
    title: 'Past Events',
    description: 'Stories, recaps, and media from previous gatherings.',
    altLang: '/zh/events/past/',
    hero: {
      eyebrow: 'Events',
      title: 'Celebrate what God has done.',
      subtitle: 'Browse recaps with photo galleries, videos, and China-accessible downloads.'
    },
    breadcrumbs: [
      { href: '/en/', label: 'Home' },
      { href: '/en/events/', label: 'Events' }
    ],
    sections: [
      {
        title: 'Highlights',
        content: `
          <div class="cards">
            <article class="card" id="thanksgiving-day">
              <h3>Thanksgiving Day in SF</h3>
              <p>Life Runners serving the homeless community.</p>
              <ul>
                <li><a href="/media/galleries/thanksgiving-day/index.html" target="_blank">Photo gallery</a></li>
              </ul>
            </article>
            <article class="card" id="morning-run-lake-e">
              <h3>Morning Run at Lake Elizabeth</h3>
              <p>Life Runners from the U.S. SF Bay Area running at Lake Elizabeth on Thursday morning.</p>
              <ul>
                <li><a href="/media/galleries/morning-run-lake-e/index.html" target="_blank">Photo gallery</a></li>
                <li><a href="/media/galleries/morning-run-lake-e/morning-run-lake-e.mp4" target="_blank">Video download</a></li>
                <li><a href="/media/galleries/morning-run-lake-e/morning-run-lake-e.pdf" target="_blank">PDF report </a></li>
              </ul>
            </article>
            <article class="card" id="morning-hike-vargas">
              <h3>Morning Hike Vargas Plateau</h3>
              <p>Life Runners hiked East Bay Vargas Plateau on a Thursday morning.</p>
              <ul>
                <li><a href="/media/galleries/morning-hike-vargas/index.html" target="_blank">Photo gallery</a></li>
              </ul>
            </article>
            <article class="card" id="monthly-potluck">
              <h3>Monthly Potluck</h3>
              <p>Monthly meal sharing at Life Runners' Home.</p>
              <ul>
                <li><a href="/media/galleries/monthly-potluck/index.html" target="_blank">Photo gallery</a></li>
              </ul>
            </article>
          </div>
        `
      }
    ]
  },
  {
    lang: 'zh',
    path: 'zh/events/past/index.html',
    url: '/zh/events/past/',
    title: '往期回顾',
    description: '回顾过往聚会的见证、照片与影音。',
    altLang: '/en/events/past/',
    hero: {
      eyebrow: '活动',
      title: '数算神的恩典。',
      subtitle: '查看活动回顾、相册与中国可访问的下载。'
    },
    breadcrumbs: [
      { href: '/zh/', label: '首页' },
      { href: '/zh/events/', label: '活动预告·记录' }
    ],
    sections: [
      {
        title: '亮点回顾',
        content: `
          <div class="cards">
            <article class="card" id="thanksgiving-day">
              <h3>感恩节-旧金山</h3>
              <p> 生命跑者 关心街友</p>
              <ul>
                <li><a href="/media/galleries/thanksgiving-day/index.html" target="_blank">照片库</a></li>
              </ul>
            </article>
            <article class="card" id="morning-run-lake-e">
              <h3>伊丽莎白湖晨跑</h3>
              <p>来自美国旧金山湾区的生命跑者们周四早上在伊丽莎白湖跑步.</p>
              <ul>
                <li><a href="/media/galleries/morning-run-lake-e/index.html" target="_blank">照片库</a></li>
                <li><a href="/media/galleries/morning-run-lake-e/morning-run-lake-e.mp4" target="_blank">视频下载</a></li>
                <li><a href="/media/galleries/morning-run-lake-e/morning-run-lake-e.pdf" target="_blank">生命故事PDF</a></li>
              </ul>
            </article>
            <article class="card" id="morning-hike-vargas">
              <h3>瓦尔加斯高原晨间徒步</h3>
              <p>生命跑者成员早晨徒步游览了东湾瓦尔加斯高原。</p>
              <ul>
                <li><a href="/media/galleries/morning-hike-vargas/index.html" target="_blank">照片库</a></li>
              </ul>
            </article>
            <article class="card" id="monthly-potluck">
              <h3>每月聚餐</h3>
              <p>生命跑者每月一次的聚餐。</p>
              <ul>
                <li><a href="/media/galleries/monthly-potluck/index.html" target="_blank">照片库</a></li>
              </ul>
            </article>
          </div>
        `
      }
    ]
  },
  {
    lang: 'en',
    path: 'en/support/index.html',
    url: '/en/support/',
    title: 'Support & Donation',
    description: 'Ways to serve, partner, and give to Life Runners Fellowship.',
    altLang: '/zh/support/',
    hero: {
      eyebrow: 'Support',
      title: 'Run alongside the mission.',
      subtitle: 'Volunteer, pray, or invest financially so more athletes encounter the gospel.'
    },
    breadcrumbs: [
      { href: '/en/', label: 'Home' }
    ],
    sections: [
      {
        title: 'Ways to Support',
        content: `
          <div class="cards">
            <article class="card">
              <h3>Volunteer</h3>
              <p>Serve as crew leaders, translators, hospitality teams, or media support.</p>
              <a class="button" href="/en/support/contact/#volunteer">Sign up</a>
            </article>
            <article class="card">
              <h3>Pray</h3>
              <p>Join monthly prayer calls across U.S. and China time zones.</p>
              <a class="button" href="https://lifrunners.org/prayer" target="_blank" rel="noopener">Prayer calendar</a>
            </article>
            <article class="card">
              <h3>Give</h3>
              <p>Fuel training, resources, and mercy initiatives through one-time or recurring gifts.</p>
              <a class="button" href="/en/support/donation/">Donation info</a>
            </article>
          </div>
        `
      }
    ]
  },
  {
    lang: 'zh',
    path: 'zh/support/index.html',
    url: '/zh/support/',
    title: '支持与奉献',
    description: '与生命跑者团契同奔天路的方式。',
    altLang: '/en/support/',
    hero: {
      eyebrow: '支持',
      title: '与你一同奔跑。',
      subtitle: '透过服事、祷告与奉献，使更多运动员遇见福音。'
    },
    breadcrumbs: [
      { href: '/zh/', label: '首页' }
    ],
    sections: [
      {
        title: '参与方式',
        content: `
          <div class="cards">
            <article class="card">
              <h3>加入服事</h3>
              <p>担任带队、翻译、接待或媒体同工。</p>
              <a class="button" href="/zh/support/contact/#volunteer">报名服事</a>
            </article>
            <article class="card">
              <h3>祷告伙伴</h3>
              <p>加入每月跨国祷告会。</p>
              <a class="button" href="https://lifrunners.org/prayer" target="_blank" rel="noopener">祷告行事历</a>
            </article>
            <article class="card">
              <h3>奉献支持</h3>
              <p>以一次性或定期奉献支持训练、资源与怜悯事工。</p>
              <a class="button" href="/zh/support/donation/">奉献资讯</a>
            </article>
          </div>
        `
      }
    ]
  },
  {
    lang: 'en',
    path: 'en/support/contact/index.html',
    url: '/en/support/contact/',
    title: 'Contact',
    description: 'Connect with Life Runners Fellowship for partnerships, volunteering, or prayer requests.',
    altLang: '/zh/support/contact/',
    hero: {
      eyebrow: 'Support',
      title: 'Let’s connect.',
      subtitle: 'Reach our team via email, WeChat, or secure form. Response time is typically 2-3 business days.'
    },
    breadcrumbs: [
      { href: '/en/', label: 'Home' },
      { href: '/en/support/', label: 'Support' }
    ],
    sections: [
      {
        title: 'Contact Channels',
        content: `
          <div class="cards">
            <article class="card">
              <h3>Email</h3>
              <p>love@life-runners.org</p>
            </article>
            <article class="card">
              <h3>WeChat Group</h3>
              <p>生命跑者 Life Runners</p>
            </article>
            <article class="card">
              <h3>Mailing Address</h3>
              <p>Life Runners Fellowship</p>
              <p>430 Monmouth Dr. Milpitas, CA 95035</p>
            </article>
          </div>
        `
      }
    ]
  },
  {
    lang: 'zh',
    path: 'zh/support/contact/index.html',
    url: '/zh/support/contact/',
    title: '联系方式',
    description: '洽询合作、服事报名或代祷事项。',
    altLang: '/en/support/contact/',
    hero: {
      eyebrow: '支持',
      title: '欢迎与我们联络。',
      subtitle: '透过电子邮件、微信或安全表单，我们会在 2-3 个工作天内回复。'
    },
    breadcrumbs: [
      { href: '/zh/', label: '首页' },
      { href: '/zh/support/', label: '支持与奉献' }
    ],
    sections: [
      {
        title: '联络方式',
        content: `
          <div class="cards">
            <article class="card">
              <h3>电子邮箱</h3>
              <p>love@life-runners.org</p>
            </article>
            <article class="card">
              <h3>微信</h3>
              <p>群组：生命跑者 Life Runners</p>
            </article>
            <article class="card">
              <h3>邮寄地址</h3>
              <p>Life Runners Fellowship</p>
              <p>430 Monmouth Dr. Milpitas, CA 95035</p>
            </article>
          </div>
        `
      }
    ]
  },
  {
    lang: 'en',
    path: 'en/support/donation/index.html',
    url: '/en/support/donation/',
    title: 'Donation Info',
    description: 'Give securely to Life Runners Fellowship through multiple channels.',
    altLang: '/zh/support/donation/',
    hero: {
      eyebrow: 'Support',
      title: 'Fuel the mission financially.',
      subtitle: 'Every gift advances discipleship training, media production, and mercy initiatives.'
    },
    breadcrumbs: [
      { href: '/en/', label: 'Home' },
      { href: '/en/support/', label: 'Support' }
    ],
    sections: [
      {
        title: 'Give Online',
        content: `
          <p>Use the following methods for one-time or recurring donations. Acknowledges are sent immediately and annual statements are mailed each January.</p>
        `
      },
      {
        title: 'Bank Transfer & Checks',
        content: `
          <table class="table">
            <thead><tr><th>Method</th><th>Details</th></tr></thead>
            <tbody>
              <tr><td>ACH / Wire (USD)</td><td>Bank of America · Routing 1x1x00xxx · Account (Contact Us) · Memo: Life Runners Fellowship</td></tr>
              <tr><td>Check</td><td>Payable to Life Runners Fellowship · Mail to 430 Monmouth Dr. Milpitas, CA 95035</td></tr>
              <tr><td>Zelle (USD)</td><td>Account: love@life-runners.org</td></tr>
            </tbody>
          </table>
        `
      },
      {
        title: 'Accountability',
        content: `
          <p>We are a registered 501(c)(3) organization. Annual financial reports and board meeting summaries are available upon request. Contact us for documentation.</p>
          <p class="notice">International donors may request additional compliance letters for mainland China or Hong Kong transfers.</p>
        `
      }
    ]
  },
  {
    lang: 'zh',
    path: 'zh/support/donation/index.html',
    url: '/zh/support/donation/',
    title: '奉献须知',
    description: '透过多种方式支持生命跑者团契。',
    altLang: '/en/support/donation/',
    hero: {
      eyebrow: '支持',
      title: '以财务支持推进使命。',
      subtitle: '每一笔奉献都投入门训训练、媒体制作与怜悯事工。'
    },
    breadcrumbs: [
      { href: '/zh/', label: '首页' },
      { href: '/zh/support/', label: '支持与奉献' }
    ],
    sections: [
      {
        title: '线上奉献',
        content: `
          <p>请使用以下方式进行一次性或定期捐赠。系统会立即寄送收据，并在翌年一月寄出年度奉献证明。</p>
        `
      },
      {
        title: '银行转账与支票',
        content: `
          <table class="table">
            <thead><tr><th>方式</th><th>资讯</th></tr></thead>
            <tbody>
              <tr><td>美国银行转账</td><td>Bank of America · Routing 1x1x00xxx · Account (联系我们) · 备注写 Life Runners Fellowship</td></tr>
              <tr><td>支票</td><td>抬头：Life Runners Fellowship · 寄至 430 Monmouth Dr. Milpitas, CA 95035</td></tr>
              <tr><td>Zelle(美刀)</td><td>帐号：love@life-runners.org</td></tr>
            </tbody>
          </table>
        `
      },
      {
        title: '透明与监督',
        content: `
          <p>我们为美国 501(c)(3) 组织。年度财务报告与董事会摘要可索取，欢迎联络我们。</p>
          <p class="notice">海外奉献者可申请中国大陆或香港所需的合规文件。</p>
        `
      }
    ]
  },
];
