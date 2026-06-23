const body = document.body;
const header = document.querySelector("[data-header]");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".primary-nav a");
const contactForm = document.querySelector("[data-contact-form]");
const formNote = document.querySelector("[data-form-note]");
const hero = document.querySelector(".hero");
const glitchTitle = document.querySelector("[data-glitch-text]");
const parallaxLayers = document.querySelectorAll("[data-parallax-layer]");
const cursorTrail = document.querySelector("[data-cursor-trail]");
const ambientDust = document.querySelector(".ambient-dust");
const spaceBackdrop = document.querySelector(".space-backdrop");
const youtubeHero = document.querySelector("[data-youtube-hero]");
const heroVideoToggle = document.querySelector("[data-hero-video-toggle]");
const workSlider = document.querySelector("[data-work-slider]");
const vrWorks = document.querySelector("[data-vr-works]");
const gameWorks = document.querySelector("[data-game-works]");
const artWorks = document.querySelector("[data-art-works]");
const fabWorks = document.querySelector("[data-fab-works]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const heroVideos = [
  "5kAKIFp7Pls",
  "h4O1EPm-Yq8",
  "xie_Vx5UAP0",
  "1MHi1zKqquI",
  "XVN6pD5Pjpg",
  "OVUwO9K6_ug",
  "8cME5rdQTs4",
  "kiRTtBmFqPg",
  "0_XSv5EUB0A",
];

const workSliderImages = [
  "assets/work-slider-optimized/0f90d2d2-5e94-44f4-91a4-578ad407b83b.jpg",
  "assets/work-slider-optimized/2b54cf67-7dc5-4c74-bca2-29d0d82c6a12.jpg",
  "assets/work-slider-optimized/31201245-5511-456e-a340-e75553cb9671.jpg",
  "assets/work-slider-optimized/39cd3569-7ad7-42f7-88bc-4d9da86ecf0e.jpg",
  "assets/work-slider-optimized/509023fd-9476-4e56-8563-35d6bcd4c14e.jpg",
  "assets/work-slider-optimized/57ed119f-fe30-41d3-b57d-44ac642eb282.jpg",
  "assets/work-slider-optimized/59ebf49d-3a2a-4172-b734-54414f83b0a5.jpg",
  "assets/work-slider-optimized/63500c35-2550-463d-bd6c-aa57e6eee1cb.jpg",
  "assets/work-slider-optimized/63f64a0a-04c4-4ed2-b0a3-0555c9622e48.jpg",
  "assets/work-slider-optimized/689e57f5-fb1c-42d4-a232-692b0f20c18f.jpg",
  "assets/work-slider-optimized/6bedfc36-df55-4fca-a3ae-53737507d76a.jpg",
  "assets/work-slider-optimized/6fd122c2-9d88-4886-b76e-c6ce5f1faefe.jpg",
  "assets/work-slider-optimized/76680c9b-7ddd-4300-900a-525c69edaea2.jpg",
  "assets/work-slider-optimized/85c2f043-506b-408c-9dd5-ab1c40e34645.jpg",
  "assets/work-slider-optimized/94f7dfa2-a29f-4b95-9dc9-b8eb20845278.jpg",
  "assets/work-slider-optimized/9d87cf8a-68b5-4d36-83e0-24ddcda27197.jpg",
  "assets/work-slider-optimized/a9bb4bfc-42aa-4f36-ba9e-9be101e9076b.jpg",
  "assets/work-slider-optimized/c7696bda-b196-4d4e-9880-3c7ea0e98ca6.jpg",
  "assets/work-slider-optimized/da8844f4-076f-40f7-ba85-249c5339c257.jpg",
  "assets/work-slider-optimized/e560a474-c384-4f81-b81a-453bd3f24e44.jpg",
  "assets/work-slider-optimized/ef941f2f-bba8-425f-9c41-edff57f04ebb.jpg",
  "assets/work-slider-optimized/insankamil.jpg",
];

const vrProjects = [
  {
    title: "AirMed Sim",
    kicker: "Medical VR training",
    videoId: "xie_Vx5UAP0",
    url: "https://youtu.be/xie_Vx5UAP0",
    description:
      "A VR training application developed for healthcare technicians working in helicopter emergency medical environments.",
    tags: ["Medical VR", "Training", "Simulation"],
  },
  {
    title: "JetPack City Action VR",
    kicker: "VR game",
    videoId: "SMOm8louB0U",
    url: "https://youtu.be/SMOm8louB0U",
    description: "A VR game where players fly across the city with a jetpack and deliver cargo to target addresses.",
    tags: ["VR Game", "Flight", "Delivery"],
  },
  {
    title: "Bukan The Chosen One",
    kicker: "Story-driven VR demo",
    videoId: "eLonzpR2F_A",
    url: "https://youtu.be/eLonzpR2F_A",
    description: "A scenario-based VR adventure game demo built around story, exploration and interactive moments.",
    tags: ["VR Adventure", "Story", "Prototype"],
  },
  {
    title: "Sifir Atik VR Game",
    kicker: "Public simulation center",
    videoId: "9Ho_hkZSbZE",
    url: "https://youtu.be/9Ho_hkZSbZE",
    description:
      "A waste collection VR game produced for the Ankara Millet Bahcesi simulation center as part of the Zero Waste project.",
    tags: ["VR Game", "Public Project", "Education"],
  },
];

const gameProjects = [
  {
    title: "Retro Racer",
    kicker: "Steam game",
    videoId: "h4O1EPm-Yq8",
    steamUrl: "https://store.steampowered.com/app/1218230/Rhythmic_Retro_Racer/",
    description: "A neon 80s-inspired racing game with synthwave style, time challenges and free-ride gameplay.",
    tags: ["Racing", "Synthwave", "Steam"],
  },
  {
    title: "Keepers 1477",
    kicker: "Steam game",
    videoId: "gDbSyIQZEhI",
    steamUrl: "https://store.steampowered.com/app/1860010/KEEPERS_1477/",
    description: "A medieval Ottoman themed beat 'em up project with 3D environments and Unreal Engine physics.",
    tags: ["Beat 'em up", "Ottoman", "Unreal Engine"],
  },
  {
    title: "Uruz",
    kicker: "Steam game",
    videoId: "m5GQDoroWQc",
    steamUrl: "https://store.steampowered.com/app/931000/URUZ_Return_of_The_Er_Kishi/",
    description:
      "A fantasy action adventure inspired by Central Asian Turkish mythology, built with hand-drawn pixel art and story-driven exploration.",
    tags: ["Action adventure", "Mythology", "Pixel art"],
  },
  {
    title: "Jet Pack City Action VR",
    kicker: "Steam VR game",
    videoId: "SMOm8louB0U",
    steamUrl: "https://store.steampowered.com/app/1465450/Jetpack_City_Action_VR/",
    description: "A VR flight game where players fly through a realistic city, collect cargo and fight drones.",
    tags: ["VR Game", "Flight", "Steam"],
  },
];

const artProjects = [
  {
    title: "Elciler (Messengers)",
    kicker: "Experimental UE5 music video",
    videoId: "1MHi1zKqquI",
    url: "https://youtu.be/1MHi1zKqquI",
    description:
      "An Unreal Engine 5 short animated music video created for Skahan's dubstep interpretation of an Alevi-Bektashi nefes, using full-body mocap captured from a semah performer.",
    tags: ["Unreal Engine 5", "Mocap", "Music Video"],
  },
  {
    title: "Ahmet Hamdi Tanpinar Poetry Short Film",
    kicker: "Experimental poetry film",
    videoId: "FLXAWtocPrU",
    url: "https://youtu.be/FLXAWtocPrU",
    description:
      "An experimental Unreal Engine 5 short film based on a poem by Ahmet Hamdi Tanpinar, combining facial motion capture and full-body motion capture performance.",
    tags: ["Poetry Film", "Face Mocap", "UE5"],
  },
  {
    title: "Zubeyde Historical Environment: Thessaloniki",
    kicker: "Historical environment study",
    videoId: "OVUwO9K6_ug",
    url: "https://youtu.be/OVUwO9K6_ug",
    description:
      "A real-time historical environment study recreating early 20th-century Thessaloniki for the film Zubeyde, built in Unreal Engine 5.",
    tags: ["Historical", "Environment Art", "UE5"],
  },
  {
    title: "Zubeyde Historical Environment: Istanbul",
    kicker: "Historical environment study",
    videoId: "sQQApR_bZ6E",
    url: "https://youtu.be/sQQApR_bZ6E",
    description:
      "A companion Unreal Engine 5 environment study recreating early 20th-century Istanbul for the film Zubeyde.",
    tags: ["Historical", "Istanbul", "Real-Time"],
  },
  {
    title: "Steppe Patrol",
    kicker: "Real-time music video",
    videoId: "TJ6YYKnVXW0",
    url: "https://youtu.be/TJ6YYKnVXW0",
    description:
      "A real-time Unreal Engine 5 music video produced for Steppe Patrol's single Steppe Patrol.",
    tags: ["Music Video", "Real-Time", "UE5"],
  },
  {
    title: "Ankara Photogrammetry Tour",
    kicker: "Photogrammetry study",
    videoId: "0_XSv5EUB0A",
    url: "https://youtu.be/0_XSv5EUB0A",
    description:
      "A real-time presentation of 3D photogrammetry models captured around Ankara Castle and from artifacts inspired by the Museum of Anatolian Civilizations.",
    tags: ["Photogrammetry", "Ankara", "Real-Time"],
  },
  {
    title: "Bukan Playing VR Instruments",
    kicker: "VR interaction study",
    videoId: "yax6lAPykC4",
    url: "https://youtu.be/yax6lAPykC4",
    description:
      "A demonstration of the VR instrument interaction principles developed for Bukan The Chosen One.",
    tags: ["VR Interaction", "Instruments", "Prototype"],
  },
  {
    title: "Cesium Test Video",
    kicker: "Geospatial simulation test",
    videoId: "Xp3HfDhsNkU",
    url: "https://youtu.be/Xp3HfDhsNkU",
    description:
      "A real-time test of the Cesium geospatial plugin, exploring how satellite imagery and geographic data can be used in simulation environments.",
    tags: ["Cesium", "Geospatial", "Simulation"],
  },
  {
    title: "Unreal Engine 5 Nanite & Lumen Test",
    kicker: "Real-time rendering test",
    videoId: "5kAKIFp7Pls",
    url: "https://youtu.be/5kAKIFp7Pls",
    description:
      "An early Unreal Engine 5 Nanite and Lumen test featuring more than one billion polygons. The video was later selected by Gameranx among notable Unreal Engine showcase videos.",
    tags: ["Nanite", "Lumen", "UE5"],
  },
  {
    title: "Xsens Awinda Live Dance Test",
    kicker: "Live motion capture test",
    videoId: "n6-ZDMCP5A0",
    url: "https://youtu.be/n6-ZDMCP5A0",
    description:
      "A live motion capture test recorded in real time with the Xsens Awinda mocap system.",
    tags: ["Motion Capture", "Xsens", "Live Test"],
  },
];

const fabProjects = [
  {
    title: "Modular Orient Cyberpunk Scifi City",
    kicker: "Fab asset pack",
    videoId: "XVN6pD5Pjpg",
    fabUrl: "https://www.fab.com/listings/2cc2a51a-022b-458e-8b8e-138c13714cbb",
    description:
      "A modular sci-fi city pack blending Eastern architectural grandeur with cyberpunk neon, golden domes, minaret-inspired towers and futuristic urban atmosphere.",
    tags: ["Cyberpunk", "Modular City", "Unreal Engine"],
  },
  {
    title: "Retro Scifi Temple Architecture Kit",
    kicker: "Fab asset pack",
    videoId: "ZQV-7bR_vnk",
    fabUrl: "https://www.fab.com/listings/a81c7df9-a73e-48ca-9103-0ef363fd10d8",
    description:
      "A retro-asiatic futuristic monument and temple architecture kit with huge stone walls, gates, spires, chambers, towers and modular structural pieces.",
    tags: ["Temple Kit", "Retro Sci-Fi", "Modular"],
  },
  {
    title: "Ottoman Middle East Oriental Historical House Pack",
    kicker: "Fab asset pack",
    videoId: "-vqTBRXPInM",
    fabUrl: "https://www.fab.com/listings/62071deb-21f6-4068-aeac-467d205a9c14",
    description:
      "A game-ready historical Ottoman house pack with interiors, kitchen props, furniture, rugs, pillows, background mosque elements and minarets.",
    tags: ["Ottoman", "Historical", "Interiors"],
  },
  {
    title: "Istanbul Oriental Train Station",
    kicker: "Fab asset pack",
    videoId: "kYoJZsoM2qQ",
    fabUrl: "https://www.fab.com/listings/e7cc19d6-af1e-47d2-93ae-3cb352ce94ff",
    description:
      "A detailed model inspired by Istanbul Sirkeci Train Station, the historic eastern terminus of the Orient Express, textured with Substance Painter.",
    tags: ["Istanbul", "Train Station", "Historical"],
  },
  {
    title: "Game Ready Modular Monumental Mosque",
    kicker: "Fab asset pack",
    videoId: "g-0mfF02-8o",
    fabUrl: "https://www.fab.com/listings/58ccdbed-7d61-4ee3-961b-8ca7f596602f",
    description:
      "A detailed game-ready monumental mosque kit with interiors, more than 100 unique pieces, Substance Painter textures and adjustable roof color parameters.",
    tags: ["Mosque", "Modular", "Interior"],
  },
  {
    title: "Retro Sci-Fi Futuristic City Pack",
    kicker: "Fab asset pack",
    videoId: "aONkQgA4EAk",
    fabUrl: "https://www.fab.com/listings/3e16f670-e489-489d-8020-6f73b6575878",
    description:
      "A futuristic sci-fi environment pack mixing 1970s retro sci-fi visual language with cyberpunk energy and avant-garde tower forms.",
    tags: ["Sci-Fi City", "Retro Futurism", "Environment"],
  },
  {
    title: "Medieval Turco Mongol Yurt Pack",
    kicker: "Fab asset pack",
    videoId: "AZMOx52n2Is",
    fabUrl: "https://www.fab.com/listings/b643139b-e89e-4ddf-8470-2486cc353843",
    description:
      "A Central Asian Turco-Mongolian yurt environment pack with the pieces needed to build historical nomadic scenes.",
    tags: ["Yurt", "Central Asia", "Historical"],
  },
  {
    title: "Istanbul Slum Street Houses with Props",
    kicker: "Fab asset pack",
    videoId: "4C3Q_ChXRLw",
    fabUrl: "https://www.fab.com/listings/7948a3cf-63f7-4e42-aced-81d5ddb2db6d",
    description:
      "A realistic modular Istanbul slum street pack with Ottoman houses, shops, walls, street elements, props, decals and detailed PBR textures.",
    tags: ["Istanbul", "Street Pack", "Props"],
  },
  {
    title: "The Sci Fi Reactor",
    kicker: "Fab asset pack",
    videoId: "rsaj8nhO8AM",
    fabUrl: "https://www.fab.com/listings/d05d3981-2d20-4723-b1f2-d4645049ffed",
    description:
      "A modular futuristic sci-fi reactor building with corridor tools, floor patterns, wall tiles, catwalks, stairs, sections and 99 meshes.",
    tags: ["Sci-Fi Reactor", "Corridors", "Modular"],
  },
];

const languageMeta = {
  tr: { htmlLang: "tr", dir: "ltr" },
  en: { htmlLang: "en-GB", dir: "ltr" },
  ar: { htmlLang: "ar-SA", dir: "rtl" },
  zh: { htmlLang: "zh-CN", dir: "ltr" },
  ru: { htmlLang: "ru", dir: "ltr" },
};

const uiText = {
  en: {
    navServices: "Services",
    navGames: "Games",
    navAssets: "Game Assets",
    navReferences: "References",
    navOtherWorks: "Other Works",
    navContact: "Contact",
    heroEyebrow: "Independent studio in Ankara",
    heroTitle: "B2B solutions, VR training and real-time simulation software.",
    heroCopy: "Serious games, medical VR, simulations, 3D assets and real-time interactive software for institutions and technology partners.",
    exploreWork: "Explore work",
    startProject: "Start a project",
    assetFrames: "Selected game asset frames from Fab marketplace packs",
    introSummary: "The art of making games: we build virtual experiences where craft, technology and applied software meet. Founded in 2019, Berzah Games brings together multidisciplinary artists, developers and technical creators.",
    introEyebrow: "The art of making games",
    introTitle: "We build virtual experiences where craft, technology and applied software meet.",
    introCopy: "Founded in 2019, Berzah Games brings together multidisciplinary artists, developers and technical creators. The studio works across original IP, B2B simulation projects, VR training software and visual production for real-time engines.",
    servicesEyebrow: "Services",
    servicesTitle: "B2B solutions for serious games, VR, simulations and real-time training software.",
    service1Title: "B2B Solutions & Serious Games",
    service1Copy: "Training-focused games, serious game systems, prototypes and interactive solutions for companies and institutions.",
    service2Title: "Medical VR Solutions",
    service2Copy: "VR-based medical training, visualization and procedure-oriented interactive learning experiences.",
    service3Title: "Educational Simulations",
    service3Copy: "Scenario-based training simulations, learning modules and guided interactive education software.",
    service4Title: "Military Simulations",
    service4Copy: "Real-time simulation interfaces, mission scenarios and technical training environments.",
    service5Title: "Training Software",
    service5Copy: "Desktop, VR and real-time training software built for repeatable practice and measurable workflows.",
    service6Title: "3D Asset Production",
    service6Copy: "Game-ready environments, modular asset packs, props, vehicles and Unreal Engine production support.",
    vrEyebrow: "VR & Simulation works",
    vrTitle: "Immersive VR projects for training, games and public-facing experiences.",
    fabEyebrow: "Fab Marketplace Assets",
    fabTitle: "Game-ready asset packs, modular environments and real-time production resources published on Fab.",
    gamesEyebrow: "Games",
    gamesTitle: "Original games built around speed, mythology, action and VR movement.",
    artEyebrow: "Experimental & Artistic Works",
    artTitle: "Films, music videos, mocap experiments and real-time visual studies.",
    studioEyebrow: "Studio",
    studioTitle: "Small, flexible and built around craft.",
    studioCopy: "Berzah Games was founded by Ali Can Meydan, a multidisciplinary artist, 3D artist, technical director, illustrator, animator and game developer. The studio collaborates with professionals from different creative and technical fields depending on each B2B, game, VR or simulation project.",
    capEngine: "Engine",
    capEngineCopy: "Unreal Engine production",
    capVisuals: "Visuals",
    capVisualsCopy: "Art direction, 3D assets, animation and modelling",
    capProjects: "Projects",
    capProjectsCopy: "Original IP, B2B software and commissioned simulation work",
    contactEyebrow: "Contact",
    contactTitle: "Tell us about the world you want to build.",
    contactCopy: "For B2B solutions, medical VR, training software, 3D assets or simulation projects, send a short brief and the studio will get back to you.",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send message",
    formNote: "Opens your email app with the message prepared.",
    watchYoutube: "Watch on YouTube",
    steamStore: "Steam store",
    viewFab: "View on Fab",
    footerSlogan: "Berzah Games. The art of making games.",
    referencesEyebrow: "References",
    referencesTitle: "Trusted by public institutions and technology companies.",
    referencesCopy: "Selected organizations connected to Berzah Games projects, collaborations and production work.",
    publicInstitution: "Public institution",
    techDefense: "Technology and defense systems",
    municipality: "Municipality",
    ecommerce: "E-commerce platform",
    broadcaster: "Public broadcaster",
    technopark: "Technology development zone",
    scienceInstitution: "Science and technology institution",
    bigg: "Individual Young Enterprise programme",
    officialLogo: "Official logo PDF",
  },
};

uiText.tr = {
  navServices: "Hizmetler", navGames: "Oyunlar", navAssets: "Oyun Assetleri", navReferences: "Referanslar", navOtherWorks: "Diğer İşler", navContact: "İletişim",
  heroEyebrow: "Ankara merkezli bağımsız stüdyo", heroTitle: "B2B çözümler, VR eğitim ve gerçek zamanlı simülasyon yazılımları.", heroCopy: "Kurumlar ve teknoloji ortakları için ciddi oyunlar, medikal VR, simülasyonlar, 3D assetler ve gerçek zamanlı interaktif yazılımlar.", exploreWork: "İşleri incele", startProject: "Proje başlat",
  assetFrames: "Fab pazar yeri paketlerinden seçilmiş oyun asset kareleri", introSummary: "Oyun yapma sanatı: zanaat, teknoloji ve uygulamalı yazılımın buluştuğu sanal deneyimler üretiyoruz. 2019'da kurulan Berzah Games; multidisipliner sanatçıları, geliştiricileri ve teknik üreticileri bir araya getirir.", introEyebrow: "Oyun yapma sanatı", introTitle: "Zanaat, teknoloji ve uygulamalı yazılımın buluştuğu sanal deneyimler üretiyoruz.", introCopy: "2019'da kurulan Berzah Games; multidisipliner sanatçıları, geliştiricileri ve teknik üreticileri bir araya getirir. Stüdyo; özgün IP, B2B simülasyon projeleri, VR eğitim yazılımları ve gerçek zamanlı motorlar için görsel üretim alanlarında çalışır.",
  servicesEyebrow: "Hizmetler", servicesTitle: "Ciddi oyun, VR, simülasyon ve gerçek zamanlı eğitim yazılımları için B2B çözümler.", service1Title: "B2B Çözümler ve Ciddi Oyunlar", service1Copy: "Şirketler ve kurumlar için eğitim odaklı oyunlar, ciddi oyun sistemleri, prototipler ve interaktif çözümler.", service2Title: "Medikal VR Çözümleri", service2Copy: "Medikal eğitim, görselleştirme ve prosedür odaklı interaktif öğrenme için VR deneyimleri.", service3Title: "Eğitim Simülasyonları", service3Copy: "Senaryo tabanlı eğitim simülasyonları, öğrenme modülleri ve yönlendirmeli interaktif eğitim yazılımları.", service4Title: "Askeri Simülasyonlar", service4Copy: "Gerçek zamanlı simülasyon arayüzleri, görev senaryoları ve teknik eğitim ortamları.", service5Title: "Eğitim Yazılımları", service5Copy: "Tekrarlanabilir pratik ve ölçülebilir iş akışları için masaüstü, VR ve gerçek zamanlı eğitim yazılımları.", service6Title: "3D Asset Üretimi", service6Copy: "Oyun uyumlu ortamlar, modüler asset paketleri, objeler, araçlar ve Unreal Engine üretim desteği.",
  vrEyebrow: "VR ve Simülasyon İşleri", vrTitle: "Eğitim, oyun ve kamusal deneyimler için immersif VR projeleri.", fabEyebrow: "Fab Marketplace Assetleri", fabTitle: "Fab üzerinde yayınlanan oyun uyumlu asset paketleri, modüler ortamlar ve gerçek zamanlı üretim kaynakları.", gamesEyebrow: "Oyunlar", gamesTitle: "Hız, mitoloji, aksiyon ve VR hareket mekaniği etrafında geliştirilen özgün oyunlar.", artEyebrow: "Deneysel ve Sanatsal İşler", artTitle: "Filmler, müzik videoları, mocap deneyleri ve gerçek zamanlı görsel çalışmalar.",
  studioEyebrow: "Stüdyo", studioTitle: "Küçük, esnek ve zanaat etrafında kurulu.", studioCopy: "Berzah Games; multidisipliner sanatçı, 3D artist, teknik yönetmen, illüstratör, animatör ve oyun geliştirici Ali Can Meydan tarafından kuruldu. Stüdyo, her B2B, oyun, VR veya simülasyon projesinin ihtiyacına göre farklı yaratıcı ve teknik alanlardan profesyonellerle çalışır.", capEngine: "Motor", capEngineCopy: "Unreal Engine üretimi", capVisuals: "Görsel üretim", capVisualsCopy: "Sanat yönetimi, 3D asset, animasyon ve modelleme", capProjects: "Projeler", capProjectsCopy: "Özgün IP, B2B yazılım ve sipariş simülasyon işleri",
  contactEyebrow: "İletişim", contactTitle: "İnşa etmek istediğiniz dünyayı anlatın.", contactCopy: "B2B çözümler, medikal VR, eğitim yazılımı, 3D asset veya simülasyon projeleri için kısa bir brief gönderin; stüdyo size dönüş yapsın.", name: "İsim", email: "E-posta", message: "Mesaj", send: "Mesaj gönder", formNote: "Mesaj hazırlanmış şekilde e-posta uygulamanızı açar.", watchYoutube: "YouTube'da izle", steamStore: "Steam mağazası", viewFab: "Fab'da görüntüle", footerSlogan: "Berzah Games. Oyun yapma sanatı.",
  referencesEyebrow: "Referanslar", referencesTitle: "Kamu kurumları ve teknoloji şirketleri tarafından güvenilen işler.", referencesCopy: "Berzah Games projeleri, iş birlikleri ve üretim süreçleriyle bağlantılı seçilmiş kurumlar.", publicInstitution: "Kamu kurumu", techDefense: "Teknoloji ve savunma sistemleri", municipality: "Belediye", ecommerce: "E-ticaret platformu", broadcaster: "Kamu yayıncısı", technopark: "Teknoloji geliştirme bölgesi", scienceInstitution: "Bilim ve teknoloji kurumu", bigg: "Bireysel Genç Girişim programı", officialLogo: "Resmi logo PDF",
};

uiText.ar = {
  navServices: "الخدمات", navGames: "الألعاب", navAssets: "أصول الألعاب", navReferences: "المراجع", navOtherWorks: "أعمال أخرى", navContact: "تواصل",
  heroEyebrow: "استوديو مستقل في أنقرة", heroTitle: "حلول B2B وتدريب VR وبرمجيات محاكاة فورية.", heroCopy: "ألعاب جادة وحلول VR طبية ومحاكاة وأصول ثلاثية الأبعاد وبرمجيات تفاعلية فورية للمؤسسات وشركاء التكنولوجيا.", exploreWork: "استعرض الأعمال", startProject: "ابدأ مشروعاً",
  assetFrames: "لقطات مختارة من حزم أصول الألعاب على Fab", introSummary: "فن صناعة الألعاب: نبني تجارب افتراضية تجمع بين الحرفة والتكنولوجيا والبرمجيات التطبيقية. منذ 2019 يجمع Berzah Games فنانين ومطورين ومنتجين تقنيين متعددي التخصصات.", introEyebrow: "فن صناعة الألعاب", introTitle: "نبني تجارب افتراضية تجمع بين الحرفة والتكنولوجيا والبرمجيات التطبيقية.", introCopy: "منذ 2019 يجمع Berzah Games فنانين ومطورين ومنتجين تقنيين متعددي التخصصات، ويعمل على الملكيات الأصلية ومشاريع المحاكاة B2B وتدريب VR والإنتاج البصري لمحركات الوقت الحقيقي.",
  servicesEyebrow: "الخدمات", servicesTitle: "حلول B2B للألعاب الجادة وVR والمحاكاة وبرمجيات التدريب الفورية.", service1Title: "حلول B2B وألعاب جادة", service1Copy: "ألعاب تدريبية وأنظمة ألعاب جادة ونماذج أولية وحلول تفاعلية للشركات والمؤسسات.", service2Title: "حلول VR طبية", service2Copy: "تجارب VR للتدريب الطبي والتصور والتعلم التفاعلي الإجرائي.", service3Title: "محاكاة تعليمية", service3Copy: "محاكاة تدريب مبنية على السيناريوهات ووحدات تعلم وبرمجيات تعليمية تفاعلية.", service4Title: "محاكاة عسكرية", service4Copy: "واجهات محاكاة فورية وسيناريوهات مهام وبيئات تدريب تقنية.", service5Title: "برمجيات تدريب", service5Copy: "برمجيات تدريب مكتبية وVR وفورية للممارسة القابلة للتكرار وسير العمل القابل للقياس.", service6Title: "إنتاج أصول 3D", service6Copy: "بيئات جاهزة للألعاب وحزم أصول معيارية وعناصر ومركبات ودعم إنتاج Unreal Engine.",
  vrEyebrow: "أعمال VR والمحاكاة", vrTitle: "مشاريع VR غامرة للتدريب والألعاب والتجارب العامة.", fabEyebrow: "أصول Fab Marketplace", fabTitle: "حزم أصول جاهزة للألعاب وبيئات معيارية وموارد إنتاج فورية منشورة على Fab.", gamesEyebrow: "الألعاب", gamesTitle: "ألعاب أصلية مبنية حول السرعة والأسطورة والحركة وتجربة VR.", artEyebrow: "أعمال تجريبية وفنية", artTitle: "أفلام وفيديوهات موسيقية وتجارب mocap ودراسات بصرية فورية.",
  studioEyebrow: "الاستوديو", studioTitle: "صغير ومرن ومبني حول الحرفة.", studioCopy: "تأسس Berzah Games على يد علي جان ميدان، فنان متعدد التخصصات وفنان ثلاثي الأبعاد ومدير تقني ورسام ومحرك ومطور ألعاب. يتعاون الاستوديو مع محترفين إبداعيين وتقنيين وفق احتياجات كل مشروع.", capEngine: "المحرك", capEngineCopy: "إنتاج Unreal Engine", capVisuals: "المرئيات", capVisualsCopy: "إدارة فنية وأصول 3D وتحريك ونمذجة", capProjects: "المشاريع", capProjectsCopy: "IP أصلية وبرمجيات B2B وأعمال محاكاة commissioned",
  contactEyebrow: "تواصل", contactTitle: "حدثنا عن العالم الذي تريد بناءه.", contactCopy: "لمشاريع حلول B2B أو VR طبي أو تدريب أو أصول 3D أو محاكاة، أرسل موجزاً قصيراً وسنعود إليك.", name: "الاسم", email: "البريد الإلكتروني", message: "الرسالة", send: "إرسال الرسالة", formNote: "يفتح تطبيق البريد مع الرسالة جاهزة.", watchYoutube: "شاهد على YouTube", steamStore: "متجر Steam", viewFab: "عرض على Fab", footerSlogan: "Berzah Games. فن صناعة الألعاب.",
  referencesEyebrow: "المراجع", referencesTitle: "موثوق به من مؤسسات عامة وشركات تقنية.", referencesCopy: "جهات مختارة مرتبطة بمشاريع Berzah Games وتعاوناته وأعماله الإنتاجية.", publicInstitution: "مؤسسة عامة", techDefense: "أنظمة تقنية ودفاعية", municipality: "بلدية", ecommerce: "منصة تجارة إلكترونية", broadcaster: "هيئة بث عامة", technopark: "منطقة تطوير تكنولوجي", scienceInstitution: "مؤسسة علمية وتكنولوجية", bigg: "برنامج ريادة الأعمال للشباب", officialLogo: "ملف الشعار الرسمي PDF",
};

uiText.zh = {
  navServices: "服务", navGames: "游戏", navAssets: "游戏资产", navReferences: "客户", navOtherWorks: "其他作品", navContact: "联系",
  heroEyebrow: "位于安卡拉的独立工作室", heroTitle: "B2B 解决方案、VR 培训与实时仿真软件。", heroCopy: "为机构和技术伙伴制作严肃游戏、医疗 VR、仿真、3D 资产与实时交互软件。", exploreWork: "查看作品", startProject: "启动项目",
  assetFrames: "Fab 市场游戏资产包精选画面", introSummary: "游戏制作的艺术：我们打造融合工艺、技术与应用软件的虚拟体验。Berzah Games 成立于 2019 年，汇集跨领域艺术家、开发者和技术创作者。", introEyebrow: "游戏制作的艺术", introTitle: "我们打造融合工艺、技术与应用软件的虚拟体验。", introCopy: "Berzah Games 成立于 2019 年，汇集跨领域艺术家、开发者和技术创作者，业务涵盖原创 IP、B2B 仿真、VR 培训软件以及实时引擎视觉制作。",
  servicesEyebrow: "服务", servicesTitle: "面向严肃游戏、VR、仿真和实时培训软件的 B2B 解决方案。", service1Title: "B2B 解决方案与严肃游戏", service1Copy: "为企业和机构制作培训导向游戏、严肃游戏系统、原型和互动解决方案。", service2Title: "医疗 VR 解决方案", service2Copy: "用于医疗培训、可视化和流程学习的 VR 互动体验。", service3Title: "教育仿真", service3Copy: "基于场景的培训仿真、学习模块和引导式互动教育软件。", service4Title: "军事仿真", service4Copy: "实时仿真界面、任务场景和技术训练环境。", service5Title: "培训软件", service5Copy: "用于可重复练习和可衡量流程的桌面、VR 与实时培训软件。", service6Title: "3D 资产制作", service6Copy: "游戏就绪环境、模块化资产包、道具、车辆和 Unreal Engine 制作支持。",
  vrEyebrow: "VR 与仿真作品", vrTitle: "用于培训、游戏和公共体验的沉浸式 VR 项目。", fabEyebrow: "Fab 市场资产", fabTitle: "发布在 Fab 上的游戏就绪资产包、模块化环境和实时制作资源。", gamesEyebrow: "游戏", gamesTitle: "围绕速度、神话、动作和 VR 移动打造的原创游戏。", artEyebrow: "实验与艺术作品", artTitle: "影片、音乐视频、动作捕捉实验和实时视觉研究。",
  studioEyebrow: "工作室", studioTitle: "小而灵活，围绕创作工艺而建。", studioCopy: "Berzah Games 由 Ali Can Meydan 创立，他是跨领域艺术家、3D 艺术家、技术总监、插画师、动画师和游戏开发者。工作室会根据每个 B2B、游戏、VR 或仿真项目与不同创意和技术专业人士合作。", capEngine: "引擎", capEngineCopy: "Unreal Engine 制作", capVisuals: "视觉", capVisualsCopy: "艺术指导、3D 资产、动画和建模", capProjects: "项目", capProjectsCopy: "原创 IP、B2B 软件和委托仿真项目",
  contactEyebrow: "联系", contactTitle: "告诉我们你想构建的世界。", contactCopy: "如需 B2B 解决方案、医疗 VR、培训软件、3D 资产或仿真项目，请发送简短需求，我们会回复你。", name: "姓名", email: "邮箱", message: "留言", send: "发送留言", formNote: "将打开邮件应用并填好内容。", watchYoutube: "在 YouTube 观看", steamStore: "Steam 商店", viewFab: "在 Fab 查看", footerSlogan: "Berzah Games. 游戏制作的艺术。",
  referencesEyebrow: "客户与参考", referencesTitle: "受到公共机构和技术公司的信任。", referencesCopy: "与 Berzah Games 项目、合作和制作工作相关的精选机构。", publicInstitution: "公共机构", techDefense: "技术与防务系统", municipality: "市政机构", ecommerce: "电商平台", broadcaster: "公共广播机构", technopark: "技术开发区", scienceInstitution: "科学与技术机构", bigg: "青年创业项目", officialLogo: "官方标志 PDF",
};

uiText.ru = {
  navServices: "Услуги", navGames: "Игры", navAssets: "Игровые ассеты", navReferences: "Референсы", navOtherWorks: "Другие работы", navContact: "Контакты",
  heroEyebrow: "Независимая студия в Анкаре", heroTitle: "B2B-решения, VR-обучение и ПО для симуляций в реальном времени.", heroCopy: "Serious games, медицинский VR, симуляции, 3D-ассеты и интерактивное ПО для организаций и технологических партнеров.", exploreWork: "Смотреть работы", startProject: "Начать проект",
  assetFrames: "Избранные кадры игровых ассетов из пакетов Fab", introSummary: "Искусство создания игр: мы создаем виртуальные впечатления на стыке ремесла, технологий и прикладного ПО. Berzah Games основана в 2019 году и объединяет мультидисциплинарных художников, разработчиков и технических авторов.", introEyebrow: "Искусство создания игр", introTitle: "Мы создаем виртуальные впечатления на стыке ремесла, технологий и прикладного ПО.", introCopy: "Berzah Games основана в 2019 году и объединяет мультидисциплинарных художников, разработчиков и технических авторов. Студия работает с оригинальными IP, B2B-симуляциями, VR-обучением и визуальным производством для real-time движков.",
  servicesEyebrow: "Услуги", servicesTitle: "B2B-решения для serious games, VR, симуляций и real-time обучающего ПО.", service1Title: "B2B-решения и serious games", service1Copy: "Обучающие игры, serious game системы, прототипы и интерактивные решения для компаний и организаций.", service2Title: "Медицинские VR-решения", service2Copy: "VR-опыт для медицинского обучения, визуализации и процедурного интерактивного обучения.", service3Title: "Образовательные симуляции", service3Copy: "Сценарные обучающие симуляции, учебные модули и интерактивное ПО.", service4Title: "Военные симуляции", service4Copy: "Real-time интерфейсы симуляции, миссионные сценарии и технические обучающие среды.", service5Title: "Обучающее ПО", service5Copy: "Десктопное, VR и real-time ПО для повторяемой практики и измеримых процессов.", service6Title: "Производство 3D-ассетов", service6Copy: "Игровые окружения, модульные ассет-паки, пропсы, транспорт и поддержка Unreal Engine.",
  vrEyebrow: "VR и симуляции", vrTitle: "Иммерсивные VR-проекты для обучения, игр и публичных пространств.", fabEyebrow: "Ассеты Fab Marketplace", fabTitle: "Game-ready ассет-паки, модульные окружения и real-time ресурсы, опубликованные на Fab.", gamesEyebrow: "Игры", gamesTitle: "Оригинальные игры о скорости, мифологии, экшене и движении в VR.", artEyebrow: "Экспериментальные и художественные работы", artTitle: "Фильмы, музыкальные видео, mocap-эксперименты и real-time визуальные исследования.",
  studioEyebrow: "Студия", studioTitle: "Небольшая, гибкая и построенная вокруг мастерства.", studioCopy: "Berzah Games основана Али Джаном Мейданом, мультидисциплинарным художником, 3D-художником, техническим директором, иллюстратором, аниматором и разработчиком игр. Студия сотрудничает с креативными и техническими специалистами под задачи каждого проекта.", capEngine: "Движок", capEngineCopy: "Производство на Unreal Engine", capVisuals: "Визуал", capVisualsCopy: "Арт-дирекшн, 3D-ассеты, анимация и моделирование", capProjects: "Проекты", capProjectsCopy: "Оригинальные IP, B2B-ПО и заказные симуляции",
  contactEyebrow: "Контакты", contactTitle: "Расскажите о мире, который хотите построить.", contactCopy: "Для B2B-игр, медицинского VR, обучающего ПО, 3D-ассетов или симуляций отправьте короткий бриф, и студия свяжется с вами.", name: "Имя", email: "Email", message: "Сообщение", send: "Отправить", formNote: "Откроет почтовое приложение с подготовленным письмом.", watchYoutube: "Смотреть на YouTube", steamStore: "Магазин Steam", viewFab: "Смотреть на Fab", footerSlogan: "Berzah Games. Искусство создания игр.",
  referencesEyebrow: "Референсы", referencesTitle: "Нам доверяют государственные учреждения и технологические компании.", referencesCopy: "Избранные организации, связанные с проектами, сотрудничеством и производством Berzah Games.", publicInstitution: "Государственное учреждение", techDefense: "Технологии и оборонные системы", municipality: "Муниципалитет", ecommerce: "E-commerce платформа", broadcaster: "Общественный вещатель", technopark: "Технопарк", scienceInstitution: "Научно-технологическая организация", bigg: "Программа для молодых предпринимателей", officialLogo: "Официальный PDF логотипа",
};

const getSavedLanguage = () => {
  const saved = window.localStorage.getItem("berzah-language");
  return languageMeta[saved] ? saved : "en";
};

let currentLanguage = getSavedLanguage();

const t = (key) => uiText[currentLanguage]?.[key] || uiText.en[key] || key;

const setText = (selector, value) => {
  const element = document.querySelector(selector);

  if (element) {
    element.textContent = value;
  }
};

const setLabelText = (selector, value) => {
  const label = document.querySelector(selector);

  if (label?.firstChild) {
    label.firstChild.textContent = `${value}\n              `;
  }
};

const renderGlitchTitle = (text) => {
  if (!glitchTitle) {
    return;
  }

  let charIndex = 0;
  const words = text.split(" ");

  glitchTitle.setAttribute("aria-label", text);
  glitchTitle.textContent = "";

  words.forEach((word, wordIndex) => {
    const wordWrap = document.createElement("span");
    wordWrap.className = "glitch-word";
    wordWrap.setAttribute("aria-hidden", "true");

    [...word].forEach((char) => {
      const charWrap = document.createElement("span");
      charWrap.className = "glitch-char";
      charWrap.textContent = char;
      charWrap.style.setProperty("--char-delay", `${120 + charIndex * 34}ms`);
      wordWrap.appendChild(charWrap);
      charIndex += 1;
    });

    glitchTitle.appendChild(wordWrap);

    if (wordIndex < words.length - 1) {
      const space = document.createElement("span");
      space.className = "glitch-space";
      space.setAttribute("aria-hidden", "true");
      space.textContent = " ";
      glitchTitle.appendChild(space);
    }
  });
};

const applyStaticTranslations = () => {
  const meta = languageMeta[currentLanguage] || languageMeta.en;
  document.documentElement.lang = meta.htmlLang;
  document.documentElement.dir = meta.dir;
  document.body.classList.toggle("is-rtl", meta.dir === "rtl");

  document.querySelectorAll("[data-language-switcher] button").forEach((button) => {
    const isActive = button.dataset.lang === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  const navSelectors = [
    [".primary-nav a:nth-child(1)", "navServices"],
    [".primary-nav a:nth-child(2)", "navGames"],
    [".primary-nav a:nth-child(3)", "navAssets"],
    [".primary-nav a:nth-child(4)", "navReferences"],
    [".primary-nav a:nth-child(5)", "navOtherWorks"],
    [".primary-nav a:nth-child(6)", "navContact"],
  ];

  navSelectors.forEach(([selector, key]) => setText(selector, t(key)));

  if (document.querySelector(".hero")) {
    setText(".hero-intro .eyebrow", t("heroEyebrow"));
    renderGlitchTitle(t("heroTitle"));
    setText(".hero-copy", t("heroCopy"));
    setText(".studio-summary", t("introSummary"));
    setText(".hero-actions .primary", t("exploreWork"));
    setText(".hero-actions .secondary", t("startProject"));
    setText(".work-showcase-heading .eyebrow", t("assetFrames"));
    setText(".services .section-heading .eyebrow", t("servicesEyebrow"));
    setText(".services .section-heading h2", t("servicesTitle"));

    [
      ["service1Title", "service1Copy"],
      ["service2Title", "service2Copy"],
      ["service3Title", "service3Copy"],
      ["service4Title", "service4Copy"],
      ["service5Title", "service5Copy"],
      ["service6Title", "service6Copy"],
    ].forEach(([titleKey, copyKey], index) => {
      setText(`.service-card:nth-child(${index + 1}) h3`, t(titleKey));
      setText(`.service-card:nth-child(${index + 1}) p`, t(copyKey));
    });

    setText(".vr-works .section-heading .eyebrow", t("vrEyebrow"));
    setText(".vr-works .section-heading h2", t("vrTitle"));
    setText(".fab-works .section-heading .eyebrow", t("fabEyebrow"));
    setText(".fab-works .section-heading h2", t("fabTitle"));
    setText(".games-works .section-heading .eyebrow", t("gamesEyebrow"));
    setText(".games-works .section-heading h2", t("gamesTitle"));
    setText(".work .section-heading .eyebrow", t("artEyebrow"));
    setText(".work .section-heading h2", t("artTitle"));
    setText(".studio .eyebrow", t("studioEyebrow"));
    setText(".studio h2", t("studioTitle"));
    setText(".studio-copy p:not(.eyebrow)", t("studioCopy"));
    setText(".capability-list div:nth-child(1) strong", t("capEngine"));
    setText(".capability-list div:nth-child(1) span", t("capEngineCopy"));
    setText(".capability-list div:nth-child(2) strong", t("capVisuals"));
    setText(".capability-list div:nth-child(2) span", t("capVisualsCopy"));
    setText(".capability-list div:nth-child(3) strong", t("capProjects"));
    setText(".capability-list div:nth-child(3) span", t("capProjectsCopy"));
    setText(".contact .eyebrow", t("contactEyebrow"));
    setText(".contact h2", t("contactTitle"));
    setText(".contact .container > div > p:not(.eyebrow)", t("contactCopy"));
    setLabelText(".contact-form label:nth-child(1)", t("name"));
    setLabelText(".contact-form label:nth-child(2)", t("email"));
    setLabelText(".contact-form label:nth-child(3)", t("message"));
    setText(".contact-form button", t("send"));
    setText(".form-note", t("formNote"));
  }

  if (document.querySelector(".page-hero")) {
    setText(".page-hero .eyebrow", t("referencesEyebrow"));
    setText(".page-hero h1", t("referencesTitle"));
    setText(".page-hero p:not(.eyebrow)", t("referencesCopy"));
    const referenceKeys = [
      "publicInstitution",
      "publicInstitution",
      "techDefense",
      "municipality",
      "ecommerce",
      "broadcaster",
      "technopark",
      "scienceInstitution",
      "bigg",
    ];

    referenceKeys.forEach((key, index) => {
      setText(`.reference-card:nth-child(${index + 1}) p`, t(key));
    });

    setText(".reference-card:nth-child(9) a", t("officialLogo"));
  }

  setText(".site-footer p", t("footerSlogan"));
  setText(".site-footer .footer-links a[href='references.html']", t("navReferences"));
  setText(".site-footer .footer-links a[href='index.html#contact']", t("navContact"));
  setText(".site-footer .footer-links a[href='index.html#work']", t("navGames"));
  setText(".site-footer .footer-links a[href='index.html#games']", t("navGames"));
};

const setLanguage = (language) => {
  if (!languageMeta[language]) {
    return;
  }

  currentLanguage = language;
  window.localStorage.setItem("berzah-language", language);
  applyStaticTranslations();
  document.dispatchEvent(new CustomEvent("berzah:languagechange"));
};

const projectText = {
  tr: {
    vr: {
      xie_Vx5UAP0: { kicker: "Medikal VR eğitimi", description: "Helikopter acil sağlık ortamlarında çalışan sağlık teknisyenleri için geliştirilmiş VR eğitim uygulaması.", tags: ["Medikal VR", "Eğitim", "Simülasyon"] },
      SMOm8louB0U: { kicker: "VR oyunu", description: "Oyuncuların jetpack ile şehir üzerinde uçarak kargoları hedef adreslere ulaştırdığı VR oyunu.", tags: ["VR Oyunu", "Uçuş", "Teslimat"] },
      eLonzpR2F_A: { kicker: "Hikayeli VR demo", description: "Hikaye, keşif ve interaktif anlar üzerine kurulu senaryo tabanlı VR macera oyunu demosu.", tags: ["VR Macera", "Hikaye", "Prototip"] },
      "9Ho_hkZSbZE": { title: "Sıfır Atık VR Game", kicker: "Kamusal simülasyon merkezi", description: "Ankara Millet Bahçesi simülasyon merkezi için Sıfır Atık projesi kapsamında üretilmiş çöp toplama VR oyunu.", tags: ["VR Oyunu", "Kamusal Proje", "Eğitim"] },
    },
    games: {
      h4O1EPm_Yq8: {},
      "h4O1EPm-Yq8": { kicker: "Steam oyunu", description: "Synthwave atmosferi, zaman mücadeleleri ve serbest sürüş modu olan neon 80'ler esintili yarış oyunu.", tags: ["Yarış", "Synthwave", "Steam"] },
      gDbSyIQZEhI: { kicker: "Steam oyunu", description: "3D ortamlar ve Unreal Engine fizik sistemiyle geliştirilen Orta Çağ Osmanlı temalı beat 'em up projesi.", tags: ["Beat 'em up", "Osmanlı", "Unreal Engine"] },
      m5GQDoroWQc: { kicker: "Steam oyunu", description: "Orta Asya Türk mitolojisinden ilham alan, el çizimi pixel art ve hikaye odaklı keşif içeren fantastik aksiyon macera.", tags: ["Aksiyon macera", "Mitoloji", "Pixel art"] },
      SMOm8louB0U: { kicker: "Steam VR oyunu", description: "Oyuncuların gerçekçi bir şehirde uçup kargo topladığı ve dronlarla savaştığı VR uçuş oyunu.", tags: ["VR Oyunu", "Uçuş", "Steam"] },
    },
    art: {
      "1MHi1zKqquI": { title: "Elçiler (Messengers)", kicker: "Deneysel UE5 müzik videosu", description: "Skahan'ın Alevi-Bektaşi nefesine dubstep yorumuna eşlik eden; semah dönen bir performansçının full-body mocap kaydıyla Unreal Engine 5 içinde üretilmiş kısa animasyon video.", tags: ["Unreal Engine 5", "Mocap", "Müzik Videosu"] },
      FLXAWtocPrU: { title: "Ahmet Hamdi Tanpınar Şiiri Kısa Film", kicker: "Deneysel şiir filmi", description: "Ahmet Hamdi Tanpınar'ın şiiri temel alınarak face motion capture ve full-body motion capture performansıyla Unreal Engine 5 içinde üretilmiş deneysel kısa film.", tags: ["Şiir Filmi", "Face Mocap", "UE5"] },
      OVUwO9K6_ug: { title: "Zübeyde Tarihsel Ortam: Selanik", description: "Zübeyde filmi için 20. yüzyıl başı Selanik'inin Unreal Engine 5 ile gerçek zamanlı yeniden üretimi.", tags: ["Tarihsel", "Çevre Sanatı", "UE5"] },
      sQQApR_bZ6E: { title: "Zübeyde Tarihsel Ortam: İstanbul", description: "Zübeyde filmi için 20. yüzyıl başı İstanbul'unun Unreal Engine 5 içinde yeniden üretildiği tamamlayıcı ortam çalışması.", tags: ["Tarihsel", "İstanbul", "Gerçek Zamanlı"] },
      TJ6YYKnVXW0: { description: "Steppe Patrol'un Steppe Patrol single'ı için Unreal Engine 5 ile gerçek zamanlı render edilen müzik videosu.", tags: ["Müzik Videosu", "Gerçek Zamanlı", "UE5"] },
      "0_XSv5EUB0A": { title: "Ankara Photogrammetry Tour", kicker: "Fotogrametri çalışması", description: "Ankara Kalesi çevresinde ve Anadolu Medeniyetleri Müzesi'nden ilham alan nesneler üzerinde yapılan fotogrametri modellerinin Unreal Engine 5 içinde gerçek zamanlı sunumu.", tags: ["Fotogrametri", "Ankara", "Gerçek Zamanlı"] },
      yax6lAPykC4: { title: "Bukan VR Enstrümanları", description: "Bukan The Chosen One oyunundaki VR enstrüman etkileşimlerinin çalışma prensiplerini gösteren demo.", tags: ["VR Etkileşim", "Enstrümanlar", "Prototip"] },
      Xp3HfDhsNkU: { description: "Cesium coğrafi plugin'in gerçek zamanlı test edildiği; uydu görüntüleri ve coğrafi verilerin simülasyon ortamlarında kullanımını araştıran çalışma.", tags: ["Cesium", "Coğrafi", "Simülasyon"] },
      "5kAKIFp7Pls": { title: "Unreal Engine 5 Nanite & Lumen Test", description: "Bir milyardan fazla poligon içeren erken dönem Unreal Engine 5 Nanite ve Lumen testi. Video daha sonra Gameranx tarafından dikkat çeken Unreal Engine vitrin videoları arasında seçildi.", tags: ["Nanite", "Lumen", "UE5"] },
      "n6-ZDMCP5A0": { title: "Xsens Awinda Canlı Dans Testi", description: "Xsens Awinda mocap sistemiyle tamamen gerçek zamanlı kaydedilen canlı motion capture testi.", tags: ["Motion Capture", "Xsens", "Canlı Test"] },
    },
  },
};

projectText.ar = {
  vr: {
    xie_Vx5UAP0: { kicker: "تدريب VR طبي", description: "تطبيق تدريب VR لفنيي الرعاية الصحية العاملين في بيئات الإسعاف الجوي بالمروحيات.", tags: ["VR طبي", "تدريب", "محاكاة"] },
    SMOm8louB0U: { kicker: "لعبة VR", description: "لعبة VR يطير فيها اللاعب فوق المدينة باستخدام jetpack ويوصل الطرود إلى العناوين المطلوبة.", tags: ["لعبة VR", "طيران", "توصيل"] },
    eLonzpR2F_A: { kicker: "عرض VR قصصي", description: "عرض لعبة مغامرة VR مبني على القصة والاستكشاف واللحظات التفاعلية.", tags: ["مغامرة VR", "قصة", "نموذج"] },
    "9Ho_hkZSbZE": { description: "لعبة VR لجمع النفايات صممت لمركز محاكاة Ankara Millet Bahcesi ضمن مشروع صفر نفايات.", tags: ["لعبة VR", "مشروع عام", "تعليم"] },
  },
  games: {
    "h4O1EPm-Yq8": { kicker: "لعبة Steam", description: "لعبة سباق بأسلوب synthwave مستوحاة من الثمانينات مع تحديات زمنية وقيادة حرة.", tags: ["سباق", "Synthwave", "Steam"] },
    gDbSyIQZEhI: { kicker: "لعبة Steam", description: "مشروع beat 'em up بطابع عثماني في العصور الوسطى مع بيئات ثلاثية الأبعاد وفيزياء Unreal Engine.", tags: ["قتال", "عثماني", "Unreal Engine"] },
    m5GQDoroWQc: { kicker: "لعبة Steam", description: "مغامرة أكشن خيالية مستوحاة من أساطير الأتراك في آسيا الوسطى مع pixel art مرسوم يدوياً.", tags: ["أكشن", "أساطير", "Pixel art"] },
    SMOm8louB0U: { kicker: "لعبة Steam VR", description: "لعبة طيران VR في مدينة واقعية لجمع الشحنات ومواجهة الطائرات المسيرة.", tags: ["VR", "طيران", "Steam"] },
  },
  art: {
    "1MHi1zKqquI": { kicker: "فيديو موسيقي UE5 تجريبي", description: "فيديو موسيقي قصير في Unreal Engine 5 لتفسير Skahan الدبستب لنَفَس علوي-بكتاشي، باستخدام mocap كامل للجسم من مؤدٍّ يدور سماح.", tags: ["UE5", "Mocap", "فيديو موسيقي"] },
    FLXAWtocPrU: { title: "فيلم قصير لشعر أحمد حمدي تانبينار", description: "فيلم تجريبي في Unreal Engine 5 مبني على قصيدة لأحمد حمدي تانبينار، يجمع بين التقاط حركة الوجه والجسم.", tags: ["فيلم شعري", "Face Mocap", "UE5"] },
    OVUwO9K6_ug: { title: "بيئة زبيدة التاريخية: سالونيك", description: "دراسة بيئية فورية تعيد إنشاء سالونيك في بدايات القرن العشرين لفيلم زبيدة.", tags: ["تاريخي", "بيئة", "UE5"] },
    sQQApR_bZ6E: { title: "بيئة زبيدة التاريخية: إسطنبول", description: "دراسة Unreal Engine 5 تعيد إنشاء إسطنبول في بدايات القرن العشرين لفيلم زبيدة.", tags: ["تاريخي", "إسطنبول", "Real-Time"] },
    TJ6YYKnVXW0: { description: "فيديو موسيقي فوري في Unreal Engine 5 لأغنية Steppe Patrol.", tags: ["فيديو موسيقي", "Real-Time", "UE5"] },
    "0_XSv5EUB0A": { description: "عرض فوري لنماذج photogrammetry من محيط قلعة أنقرة وقطع مستوحاة من متحف حضارات الأناضول.", tags: ["Photogrammetry", "أنقرة", "Real-Time"] },
    yax6lAPykC4: { description: "عرض يشرح مبادئ تفاعل آلات VR في Bukan The Chosen One.", tags: ["تفاعل VR", "آلات", "نموذج"] },
    Xp3HfDhsNkU: { description: "اختبار فوري لإضافة Cesium الجغرافية واستخدام صور الأقمار والبيانات الجغرافية في المحاكاة.", tags: ["Cesium", "جغرافي", "محاكاة"] },
    "5kAKIFp7Pls": { description: "اختبار مبكر لـ Nanite وLumen في Unreal Engine 5 بأكثر من مليار مضلع، اختير لاحقاً ضمن عروض Unreal البارزة في Gameranx.", tags: ["Nanite", "Lumen", "UE5"] },
    "n6-ZDMCP5A0": { description: "اختبار motion capture حي مسجل بالكامل في الوقت الحقيقي بنظام Xsens Awinda.", tags: ["Mocap", "Xsens", "اختبار حي"] },
  },
};

projectText.zh = {
  vr: {
    xie_Vx5UAP0: { kicker: "医疗 VR 培训", description: "为直升机急救环境中的医疗技术人员开发的 VR 培训应用。", tags: ["医疗 VR", "培训", "仿真"] },
    SMOm8louB0U: { kicker: "VR 游戏", description: "玩家使用喷气背包飞越城市并将货物送到目标地址的 VR 游戏。", tags: ["VR 游戏", "飞行", "配送"] },
    eLonzpR2F_A: { kicker: "剧情 VR 演示", description: "围绕剧情、探索和互动时刻构建的 VR 冒险游戏演示。", tags: ["VR 冒险", "剧情", "原型"] },
    "9Ho_hkZSbZE": { description: "为 Ankara Millet Bahcesi 仿真中心零废弃项目制作的垃圾收集 VR 游戏。", tags: ["VR 游戏", "公共项目", "教育"] },
  },
  games: {
    "h4O1EPm-Yq8": { kicker: "Steam 游戏", description: "霓虹 80 年代风格的 synthwave 赛车游戏，包含计时挑战和自由驾驶。", tags: ["赛车", "Synthwave", "Steam"] },
    gDbSyIQZEhI: { kicker: "Steam 游戏", description: "中世纪奥斯曼主题 beat 'em up 项目，包含 3D 环境和 Unreal Engine 物理。", tags: ["动作格斗", "奥斯曼", "Unreal Engine"] },
    m5GQDoroWQc: { kicker: "Steam 游戏", description: "受中亚突厥神话启发的奇幻动作冒险，采用手绘像素美术和剧情探索。", tags: ["动作冒险", "神话", "像素美术"] },
    SMOm8louB0U: { kicker: "Steam VR 游戏", description: "玩家在真实城市中飞行、收集货物并对抗无人机的 VR 飞行游戏。", tags: ["VR 游戏", "飞行", "Steam"] },
  },
  art: {
    "1MHi1zKqquI": { kicker: "实验性 UE5 音乐视频", description: "为 Skahan 的 Alevi-Bektashi nefes dubstep 改编制作的 Unreal Engine 5 短动画音乐视频，使用 semah 舞者全身动作捕捉。", tags: ["UE5", "动作捕捉", "音乐视频"] },
    FLXAWtocPrU: { title: "Ahmet Hamdi Tanpinar 诗歌短片", description: "基于 Ahmet Hamdi Tanpinar 诗作的 Unreal Engine 5 实验短片，结合面部和全身动作捕捉。", tags: ["诗歌电影", "面捕", "UE5"] },
    OVUwO9K6_ug: { title: "Zubeyde 历史环境：塞萨洛尼基", description: "为电影 Zubeyde 在 Unreal Engine 5 中重建 20 世纪初塞萨洛尼基的实时环境研究。", tags: ["历史", "环境艺术", "UE5"] },
    sQQApR_bZ6E: { title: "Zubeyde 历史环境：伊斯坦布尔", description: "为电影 Zubeyde 重建 20 世纪初伊斯坦布尔的 Unreal Engine 5 环境研究。", tags: ["历史", "伊斯坦布尔", "实时"] },
    TJ6YYKnVXW0: { description: "为 Steppe Patrol 单曲制作的 Unreal Engine 5 实时音乐视频。", tags: ["音乐视频", "实时", "UE5"] },
    "0_XSv5EUB0A": { description: "展示安卡拉城堡周边和安纳托利亚文明博物馆相关物件的 photogrammetry 3D 模型实时呈现。", tags: ["Photogrammetry", "安卡拉", "实时"] },
    yax6lAPykC4: { description: "展示 Bukan The Chosen One 中 VR 乐器交互原理的演示。", tags: ["VR 交互", "乐器", "原型"] },
    Xp3HfDhsNkU: { description: "测试 Cesium 地理插件，探索卫星影像和地理数据在仿真中的实时使用。", tags: ["Cesium", "地理空间", "仿真"] },
    "5kAKIFp7Pls": { description: "早期 Unreal Engine 5 Nanite 与 Lumen 测试，包含超过十亿多边形，后来入选 Gameranx 的 Unreal 展示视频。", tags: ["Nanite", "Lumen", "UE5"] },
    "n6-ZDMCP5A0": { description: "使用 Xsens Awinda 系统实时录制的现场动作捕捉测试。", tags: ["动作捕捉", "Xsens", "实时测试"] },
  },
};

projectText.ru = {
  vr: {
    xie_Vx5UAP0: { kicker: "Медицинское VR-обучение", description: "VR-приложение для обучения медицинских техников, работающих в вертолетной экстренной помощи.", tags: ["Медицинский VR", "Обучение", "Симуляция"] },
    SMOm8louB0U: { kicker: "VR-игра", description: "VR-игра, где игрок летит над городом с jetpack и доставляет грузы по адресам.", tags: ["VR-игра", "Полет", "Доставка"] },
    eLonzpR2F_A: { kicker: "Сюжетное VR-демо", description: "Демо VR-приключения, построенное вокруг истории, исследования и интерактивных сцен.", tags: ["VR-приключение", "История", "Прототип"] },
    "9Ho_hkZSbZE": { description: "VR-игра по сбору мусора для симуляционного центра Ankara Millet Bahcesi в рамках проекта Zero Waste.", tags: ["VR-игра", "Публичный проект", "Образование"] },
  },
  games: {
    "h4O1EPm-Yq8": { kicker: "Игра в Steam", description: "Неоновая гоночная игра в стиле 80-х и synthwave с временными испытаниями и свободной ездой.", tags: ["Гонки", "Synthwave", "Steam"] },
    gDbSyIQZEhI: { kicker: "Игра в Steam", description: "Средневековый османский beat 'em up с 3D-окружением и физикой Unreal Engine.", tags: ["Beat 'em up", "Османы", "Unreal Engine"] },
    m5GQDoroWQc: { kicker: "Игра в Steam", description: "Фэнтези action-adventure по мотивам тюркской мифологии Центральной Азии с рисованным pixel art.", tags: ["Action-adventure", "Мифология", "Pixel art"] },
    SMOm8louB0U: { kicker: "Steam VR-игра", description: "VR-игра о полете по реалистичному городу, сборе грузов и боях с дронами.", tags: ["VR-игра", "Полет", "Steam"] },
  },
  art: {
    "1MHi1zKqquI": { kicker: "Экспериментальное UE5 music video", description: "Короткое анимационное видео в Unreal Engine 5 для dubstep-интерпретации Alevi-Bektashi nefes от Skahan с full-body mocap исполнителя semah.", tags: ["UE5", "Mocap", "Music Video"] },
    FLXAWtocPrU: { title: "Короткий фильм по поэзии Ахмета Хамди Танпынара", description: "Экспериментальный фильм в Unreal Engine 5 по стихотворению Ахмета Хамди Танпынара с face и full-body motion capture.", tags: ["Поэтический фильм", "Face Mocap", "UE5"] },
    OVUwO9K6_ug: { title: "Историческая среда Zubeyde: Салоники", description: "Real-time реконструкция Салоник начала XX века для фильма Zubeyde в Unreal Engine 5.", tags: ["История", "Environment Art", "UE5"] },
    sQQApR_bZ6E: { title: "Историческая среда Zubeyde: Стамбул", description: "Реконструкция Стамбула начала XX века для фильма Zubeyde в Unreal Engine 5.", tags: ["История", "Стамбул", "Real-Time"] },
    TJ6YYKnVXW0: { description: "Музыкальное видео для сингла Steppe Patrol, отрендеренное в реальном времени в Unreal Engine 5.", tags: ["Music Video", "Real-Time", "UE5"] },
    "0_XSv5EUB0A": { description: "Real-time презентация photogrammetry-моделей района Ankara Castle и объектов, вдохновленных Museum of Anatolian Civilizations.", tags: ["Photogrammetry", "Анкара", "Real-Time"] },
    yax6lAPykC4: { description: "Демонстрация принципов VR-взаимодействия с инструментами в Bukan The Chosen One.", tags: ["VR-взаимодействие", "Инструменты", "Прототип"] },
    Xp3HfDhsNkU: { description: "Real-time тест геопространственного плагина Cesium для использования спутниковых изображений и геоданных в симуляциях.", tags: ["Cesium", "Геоданные", "Симуляция"] },
    "5kAKIFp7Pls": { description: "Ранний тест Unreal Engine 5 Nanite и Lumen с более чем миллиардом полигонов, позже отмеченный Gameranx среди заметных Unreal-видео.", tags: ["Nanite", "Lumen", "UE5"] },
    "n6-ZDMCP5A0": { description: "Живой motion capture тест, полностью записанный в реальном времени с системой Xsens Awinda.", tags: ["Motion Capture", "Xsens", "Live Test"] },
  },
};

const localizeProject = (project, collection) => {
  const localized = projectText[currentLanguage]?.[collection]?.[project.videoId] || {};
  return { ...project, ...localized, tags: localized.tags || project.tags };
};

const createCarouselArrow = (direction, label, onActivate) => {
  const button = document.createElement("button");
  button.className = `carousel-arrow ${direction}`;
  button.type = "button";
  button.setAttribute("aria-label", label);
  button.addEventListener("click", onActivate);
  return button;
};

const syncHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

navToggle?.addEventListener("click", () => {
  const isOpen = body.classList.toggle("nav-open");
  navToggle?.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    body.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll("[data-language-switcher] button").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

applyStaticTranslations();

if (hero && !reduceMotion) {
  parallaxLayers.forEach((layer) => {
    layer.style.setProperty("--layer-speed", layer.dataset.speed || "1");
  });

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;

  const setTarget = (event) => {
    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    targetX = x * 28;
    targetY = y * 22;
  };

  const resetTarget = () => {
    targetX = 0;
    targetY = Math.min(window.scrollY * -0.035, 0);
  };

  const animateParallax = () => {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;
    hero.style.setProperty("--hero-shift-x", `${currentX.toFixed(2)}px`);
    hero.style.setProperty("--hero-shift-y", `${currentY.toFixed(2)}px`);
    requestAnimationFrame(animateParallax);
  };

  hero.addEventListener("pointermove", setTarget);
  hero.addEventListener("pointerleave", resetTarget);
  window.addEventListener("scroll", resetTarget, { passive: true });
  animateParallax();
}

if (youtubeHero) {
  const slots = Array.from(youtubeHero.querySelectorAll("[data-video-slot]"));
  let lastSelection = [];
  let lastSlotCount = 0;
  let isHeroVideoStopped = false;
  let heroVideoTimer = null;

  const shuffleVideos = () => {
    return [...heroVideos].sort(() => Math.random() - 0.5);
  };

  const getSelection = () => {
    const activeSlots = getActiveSlots();
    const shuffled = shuffleVideos();
    const fresh = shuffled.filter((id) => !lastSelection.includes(id));
    const source = fresh.length >= activeSlots.length ? fresh : shuffled;
    const selection = source.slice(0, activeSlots.length);

    lastSelection = selection;
    return selection;
  };

  const getActiveSlots = () => {
    const slotCount = window.matchMedia("(max-width: 920px)").matches ? 3 : 5;
    return slots.slice(0, slotCount);
  };

  const buildEmbedUrl = (videoId) => {
    const start = Math.floor(Math.random() * 95);
    const params = new URLSearchParams({
      autoplay: "1",
      mute: "1",
      controls: "0",
      loop: "1",
      playlist: videoId,
      playsinline: "1",
      rel: "0",
      modestbranding: "1",
      start: String(start),
      enablejsapi: "0",
    });

    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  };

  const rotateHeroVideos = () => {
    if (isHeroVideoStopped) {
      return;
    }

    const activeSlots = getActiveSlots();

    slots.forEach((slot, index) => {
      if (index >= activeSlots.length) {
        slot.replaceChildren();
      }
    });

    getSelection().forEach((videoId, index) => {
      const slot = activeSlots[index];
      const iframe = document.createElement("iframe");

      iframe.title = `Berzah Games showreel video ${index + 1}`;
      iframe.src = buildEmbedUrl(videoId);
      iframe.allow = "autoplay; encrypted-media; picture-in-picture";
      iframe.loading = "eager";
      iframe.referrerPolicy = "strict-origin-when-cross-origin";

      slot.replaceChildren(iframe);
    });
  };

  const refreshSlotCount = () => {
    if (isHeroVideoStopped) {
      return;
    }

    const nextSlotCount = getActiveSlots().length;

    if (nextSlotCount !== lastSlotCount) {
      lastSlotCount = nextSlotCount;
      rotateHeroVideos();
    }
  };

  const clearHeroVideos = () => {
    slots.forEach((slot) => slot.replaceChildren());
  };

  const startHeroVideoTimer = () => {
    window.clearInterval(heroVideoTimer);
    heroVideoTimer = window.setInterval(rotateHeroVideos, 30000);
  };

  const setHeroVideoStopped = (shouldStop) => {
    isHeroVideoStopped = shouldStop;
    heroVideoToggle?.setAttribute("aria-pressed", String(shouldStop));

    if (shouldStop) {
      window.clearInterval(heroVideoTimer);
      clearHeroVideos();
      if (heroVideoToggle) {
        heroVideoToggle.textContent = "Refresh";
      }
      return;
    }

    if (heroVideoToggle) {
      heroVideoToggle.textContent = "Stop";
    }
    rotateHeroVideos();
    startHeroVideoTimer();
  };

  rotateHeroVideos();
  lastSlotCount = getActiveSlots().length;
  startHeroVideoTimer();
  window.addEventListener("resize", refreshSlotCount);
  heroVideoToggle?.addEventListener("click", () => {
    setHeroVideoStopped(!isHeroVideoStopped);
  });
}

if (workSlider && workSliderImages.length) {
  const track = document.createElement("div");
  track.className = "work-slider-track";

  const addSlides = (setIndex) => {
    workSliderImages.forEach((src, imageIndex) => {
      const slide = document.createElement("figure");
      const image = document.createElement("img");

      slide.className = "work-slide";
      slide.setAttribute("aria-hidden", setIndex === 1 ? "true" : "false");
      image.src = src;
      image.alt = `Berzah Games production frame ${imageIndex + 1}`;
      image.loading = imageIndex < 6 ? "eager" : "lazy";
      image.decoding = "async";

      slide.appendChild(image);
      track.appendChild(slide);
    });
  };

  addSlides(0);
  addSlides(1);
  workSlider.appendChild(track);
}

if (vrWorks && vrProjects.length) {
  const video = vrWorks.querySelector("[data-vr-video]");
  const kicker = vrWorks.querySelector("[data-vr-kicker]");
  const title = vrWorks.querySelector("[data-vr-title]");
  const description = vrWorks.querySelector("[data-vr-description]");
  const tags = vrWorks.querySelector("[data-vr-tags]");
  const link = vrWorks.querySelector("[data-vr-link]");
  const cardRow = vrWorks.querySelector("[data-vr-card-row]");
  const cards = [];
  let activeProjectIndex = 0;
  let isVrPaused = false;

  const getVideoUrl = (videoId) => {
    const params = new URLSearchParams({
      rel: "0",
      modestbranding: "1",
      playsinline: "1",
    });

    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  };

  const getThumbnailUrl = (videoId) => `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  const setActiveProject = (projectIndex) => {
    const project = vrProjects[projectIndex];

    if (!project) {
      return;
    }

    const view = localizeProject(project, "vr");
    activeProjectIndex = projectIndex;

    if (video) {
      video.title = view.title;
      video.src = getVideoUrl(view.videoId);
    }

    if (kicker) {
      kicker.textContent = view.kicker;
    }

    if (title) {
      title.textContent = view.title;
    }

    if (description) {
      description.textContent = view.description;
    }

    if (tags) {
      tags.replaceChildren(
        ...view.tags.map((tag) => {
          const tagElement = document.createElement("span");
          tagElement.textContent = tag;
          return tagElement;
        })
      );
    }

    if (link) {
      link.href = view.url;
      link.textContent = t("watchYoutube");
    }

    cards.forEach((card, index) => {
      const isActive = index === projectIndex;
      card.classList.toggle("is-active", isActive);
      card.setAttribute("aria-pressed", String(isActive));
    });
  };

  vrProjects.forEach((project, index) => {
    const view = localizeProject(project, "vr");
    const card = document.createElement("button");
    const image = document.createElement("img");
    const content = document.createElement("span");
    const label = document.createElement("strong");
    const type = document.createElement("span");

    card.className = "vr-card";
    card.type = "button";
    card.setAttribute("aria-pressed", "false");
    image.src = getThumbnailUrl(view.videoId);
    image.alt = "";
    image.loading = "lazy";
    image.decoding = "async";
    content.className = "vr-card-content";
    label.textContent = view.title;
    type.textContent = view.kicker;

    content.append(label, type);
    card.append(image, content);
    card.title = view.title;
    card.addEventListener("pointerenter", () => setActiveProject(index));
    card.addEventListener("mouseover", () => setActiveProject(index));
    card.addEventListener("focus", () => setActiveProject(index));
    card.addEventListener("click", () => setActiveProject(index));
    cardRow?.appendChild(card);
    cards.push(card);
  });

  cardRow?.prepend(
    createCarouselArrow("prev", "Previous VR project", () =>
      setActiveProject((activeProjectIndex - 1 + vrProjects.length) % vrProjects.length)
    )
  );
  cardRow?.appendChild(
    createCarouselArrow("next", "Next VR project", () =>
      setActiveProject((activeProjectIndex + 1) % vrProjects.length)
    )
  );

  setActiveProject(0);

  document.addEventListener("berzah:languagechange", () => {
    cards.forEach((card, index) => {
      const view = localizeProject(vrProjects[index], "vr");
      card.title = view.title;
      card.querySelector("strong").textContent = view.title;
      card.querySelector(".vr-card-content > span").textContent = view.kicker;
    });
    setActiveProject(activeProjectIndex);
  });

  if (!reduceMotion) {
    vrWorks.addEventListener("pointerenter", () => {
      isVrPaused = true;
    });
    vrWorks.addEventListener("pointerleave", () => {
      isVrPaused = false;
    });

    window.setInterval(() => {
      if (!isVrPaused) {
        setActiveProject((activeProjectIndex + 1) % vrProjects.length);
      }
    }, 14000);
  }
}

if (gameWorks && gameProjects.length) {
  const video = gameWorks.querySelector("[data-game-video]");
  const kicker = gameWorks.querySelector("[data-game-kicker]");
  const title = gameWorks.querySelector("[data-game-title]");
  const description = gameWorks.querySelector("[data-game-description]");
  const tags = gameWorks.querySelector("[data-game-tags]");
  const link = gameWorks.querySelector("[data-game-link]");
  const cardRow = gameWorks.querySelector("[data-game-card-row]");
  const cards = [];
  let activeProjectIndex = 0;
  let isGamePaused = false;

  const getVideoUrl = (videoId) => {
    const params = new URLSearchParams({
      rel: "0",
      modestbranding: "1",
      playsinline: "1",
    });

    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  };

  const getThumbnailUrl = (videoId) => `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  const setActiveProject = (projectIndex) => {
    const project = gameProjects[projectIndex];

    if (!project) {
      return;
    }

    const view = localizeProject(project, "games");
    activeProjectIndex = projectIndex;

    if (video) {
      video.title = view.title;
      video.src = getVideoUrl(view.videoId);
    }

    if (kicker) {
      kicker.textContent = view.kicker;
    }

    if (title) {
      title.textContent = view.title;
    }

    if (description) {
      description.textContent = view.description;
    }

    if (tags) {
      tags.replaceChildren(
        ...view.tags.map((tag) => {
          const tagElement = document.createElement("span");
          tagElement.textContent = tag;
          return tagElement;
        })
      );
    }

    if (link) {
      link.href = view.steamUrl;
      link.textContent = t("steamStore");
    }

    cards.forEach((card, index) => {
      const isActive = index === projectIndex;
      card.classList.toggle("is-active", isActive);
      card.setAttribute("aria-pressed", String(isActive));
    });
  };

  gameProjects.forEach((project, index) => {
    const view = localizeProject(project, "games");
    const card = document.createElement("button");
    const image = document.createElement("img");
    const content = document.createElement("span");
    const label = document.createElement("strong");
    const type = document.createElement("span");

    card.className = "vr-card";
    card.type = "button";
    card.setAttribute("aria-pressed", "false");
    image.src = getThumbnailUrl(view.videoId);
    image.alt = "";
    image.loading = "lazy";
    image.decoding = "async";
    content.className = "vr-card-content";
    label.textContent = view.title;
    type.textContent = view.kicker;

    content.append(label, type);
    card.append(image, content);
    card.title = view.title;
    card.addEventListener("pointerenter", () => setActiveProject(index));
    card.addEventListener("mouseover", () => setActiveProject(index));
    card.addEventListener("focus", () => setActiveProject(index));
    card.addEventListener("click", () => setActiveProject(index));
    cardRow?.appendChild(card);
    cards.push(card);
  });

  cardRow?.prepend(
    createCarouselArrow("prev", "Previous game", () =>
      setActiveProject((activeProjectIndex - 1 + gameProjects.length) % gameProjects.length)
    )
  );
  cardRow?.appendChild(
    createCarouselArrow("next", "Next game", () =>
      setActiveProject((activeProjectIndex + 1) % gameProjects.length)
    )
  );

  setActiveProject(0);

  document.addEventListener("berzah:languagechange", () => {
    cards.forEach((card, index) => {
      const view = localizeProject(gameProjects[index], "games");
      card.title = view.title;
      card.querySelector("strong").textContent = view.title;
      card.querySelector(".vr-card-content > span").textContent = view.kicker;
    });
    setActiveProject(activeProjectIndex);
  });

  if (!reduceMotion) {
    gameWorks.addEventListener("pointerenter", () => {
      isGamePaused = true;
    });
    gameWorks.addEventListener("pointerleave", () => {
      isGamePaused = false;
    });

    window.setInterval(() => {
      if (!isGamePaused) {
        setActiveProject((activeProjectIndex + 1) % gameProjects.length);
      }
    }, 14000);
  }
}

if (artWorks && artProjects.length) {
  const video = artWorks.querySelector("[data-art-video]");
  const kicker = artWorks.querySelector("[data-art-kicker]");
  const title = artWorks.querySelector("[data-art-title]");
  const description = artWorks.querySelector("[data-art-description]");
  const tags = artWorks.querySelector("[data-art-tags]");
  const link = artWorks.querySelector("[data-art-link]");
  const cardRow = artWorks.querySelector("[data-art-card-row]");
  const cards = [];
  let activeProjectIndex = 0;
  let isArtPaused = false;

  const getVideoUrl = (videoId) => {
    const params = new URLSearchParams({
      rel: "0",
      modestbranding: "1",
      playsinline: "1",
    });

    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  };

  const getThumbnailUrl = (videoId) => `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  const setActiveProject = (projectIndex) => {
    const project = artProjects[projectIndex];

    if (!project) {
      return;
    }

    const view = localizeProject(project, "art");
    activeProjectIndex = projectIndex;

    if (video) {
      video.title = view.title;
      video.src = getVideoUrl(view.videoId);
    }

    if (kicker) {
      kicker.textContent = view.kicker;
    }

    if (title) {
      title.textContent = view.title;
    }

    if (description) {
      description.textContent = view.description;
    }

    if (tags) {
      tags.replaceChildren(
        ...view.tags.map((tag) => {
          const tagElement = document.createElement("span");
          tagElement.textContent = tag;
          return tagElement;
        })
      );
    }

    if (link) {
      link.href = view.url;
      link.textContent = t("watchYoutube");
    }

    cards.forEach((card, index) => {
      const isActive = index === projectIndex;
      card.classList.toggle("is-active", isActive);
      card.setAttribute("aria-pressed", String(isActive));
    });
  };

  artProjects.forEach((project, index) => {
    const view = localizeProject(project, "art");
    const card = document.createElement("button");
    const image = document.createElement("img");
    const content = document.createElement("span");
    const label = document.createElement("strong");
    const type = document.createElement("span");

    card.className = "vr-card";
    card.type = "button";
    card.setAttribute("aria-pressed", "false");
    image.src = getThumbnailUrl(view.videoId);
    image.alt = "";
    image.loading = "lazy";
    image.decoding = "async";
    content.className = "vr-card-content";
    label.textContent = view.title;
    type.textContent = view.kicker;

    content.append(label, type);
    card.append(image, content);
    card.title = view.title;
    card.addEventListener("pointerenter", () => setActiveProject(index));
    card.addEventListener("mouseover", () => setActiveProject(index));
    card.addEventListener("focus", () => setActiveProject(index));
    card.addEventListener("click", () => setActiveProject(index));
    cardRow?.appendChild(card);
    cards.push(card);
  });

  cardRow?.prepend(
    createCarouselArrow("prev", "Previous artwork", () =>
      setActiveProject((activeProjectIndex - 1 + artProjects.length) % artProjects.length)
    )
  );
  cardRow?.appendChild(
    createCarouselArrow("next", "Next artwork", () =>
      setActiveProject((activeProjectIndex + 1) % artProjects.length)
    )
  );

  setActiveProject(0);

  document.addEventListener("berzah:languagechange", () => {
    cards.forEach((card, index) => {
      const view = localizeProject(artProjects[index], "art");
      card.title = view.title;
      card.querySelector("strong").textContent = view.title;
      card.querySelector(".vr-card-content > span").textContent = view.kicker;
    });
    setActiveProject(activeProjectIndex);
  });

  if (!reduceMotion) {
    artWorks.addEventListener("pointerenter", () => {
      isArtPaused = true;
    });
    artWorks.addEventListener("pointerleave", () => {
      isArtPaused = false;
    });

    window.setInterval(() => {
      if (!isArtPaused) {
        setActiveProject((activeProjectIndex + 1) % artProjects.length);
      }
    }, 14000);
  }
}

if (fabWorks && fabProjects.length) {
  const video = fabWorks.querySelector("[data-fab-video]");
  const kicker = fabWorks.querySelector("[data-fab-kicker]");
  const title = fabWorks.querySelector("[data-fab-title]");
  const description = fabWorks.querySelector("[data-fab-description]");
  const tags = fabWorks.querySelector("[data-fab-tags]");
  const link = fabWorks.querySelector("[data-fab-link]");
  const cardRow = fabWorks.querySelector("[data-fab-card-row]");
  const cards = [];
  let activeProjectIndex = 0;
  let isFabPaused = false;

  const getVideoUrl = (videoId) => {
    const params = new URLSearchParams({
      rel: "0",
      modestbranding: "1",
      playsinline: "1",
    });

    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  };

  const getThumbnailUrl = (videoId) => `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  const setActiveProject = (projectIndex) => {
    const project = fabProjects[projectIndex];

    if (!project) {
      return;
    }

    activeProjectIndex = projectIndex;

    if (video) {
      video.title = project.title;
      video.src = getVideoUrl(project.videoId);
    }

    if (kicker) {
      kicker.textContent = project.kicker;
    }

    if (title) {
      title.textContent = project.title;
    }

    if (description) {
      description.textContent = project.description;
    }

    if (tags) {
      tags.replaceChildren(
        ...project.tags.map((tag) => {
          const tagElement = document.createElement("span");
          tagElement.textContent = tag;
          return tagElement;
        })
      );
    }

    if (link) {
      link.href = project.fabUrl;
      link.textContent = t("viewFab");
    }

    cards.forEach((card, index) => {
      const isActive = index === projectIndex;
      card.classList.toggle("is-active", isActive);
      card.setAttribute("aria-pressed", String(isActive));
    });
  };

  fabProjects.forEach((project, index) => {
    const card = document.createElement("button");
    const image = document.createElement("img");
    const content = document.createElement("span");
    const label = document.createElement("strong");
    const type = document.createElement("span");

    card.className = "vr-card";
    card.type = "button";
    card.setAttribute("aria-pressed", "false");
    image.src = getThumbnailUrl(project.videoId);
    image.alt = "";
    image.loading = "lazy";
    image.decoding = "async";
    content.className = "vr-card-content";
    label.textContent = project.title;
    type.textContent = project.kicker;

    content.append(label, type);
    card.append(image, content);
    card.title = project.title;
    card.addEventListener("pointerenter", () => setActiveProject(index));
    card.addEventListener("mouseover", () => setActiveProject(index));
    card.addEventListener("focus", () => setActiveProject(index));
    card.addEventListener("click", () => setActiveProject(index));
    cardRow?.appendChild(card);
    cards.push(card);
  });

  cardRow?.prepend(
    createCarouselArrow("prev", "Previous Fab asset", () =>
      setActiveProject((activeProjectIndex - 1 + fabProjects.length) % fabProjects.length)
    )
  );
  cardRow?.appendChild(
    createCarouselArrow("next", "Next Fab asset", () =>
      setActiveProject((activeProjectIndex + 1) % fabProjects.length)
    )
  );

  setActiveProject(0);

  document.addEventListener("berzah:languagechange", () => {
    cards.forEach((card, index) => {
      card.title = fabProjects[index].title;
      card.querySelector("strong").textContent = fabProjects[index].title;
      card.querySelector(".vr-card-content > span").textContent = fabProjects[index].kicker;
    });
    setActiveProject(activeProjectIndex);
  });

  if (!reduceMotion) {
    fabWorks.addEventListener("pointerenter", () => {
      isFabPaused = true;
    });
    fabWorks.addEventListener("pointerleave", () => {
      isFabPaused = false;
    });

    window.setInterval(() => {
      if (!isFabPaused) {
        setActiveProject((activeProjectIndex + 1) % fabProjects.length);
      }
    }, 14000);
  }
}

if (cursorTrail && !reduceMotion) {
  const context = cursorTrail.getContext("2d");
  const points = [];
  const maxPoints = 34;
  let width = 0;
  let height = 0;
  let pixelRatio = 1;
  let lastPointTime = 0;
  let lastPointerInput = 0;
  let idlePhase = 0;

  const resizeTrail = () => {
    pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    cursorTrail.width = Math.floor(width * pixelRatio);
    cursorTrail.height = Math.floor(height * pixelRatio);
    cursorTrail.style.width = `${width}px`;
    cursorTrail.style.height = `${height}px`;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  };

  const addTrailPoint = (event) => {
    const now = performance.now();

    if (now - lastPointTime < 8) {
      return;
    }

    points.push({
      x: event.clientX,
      y: event.clientY,
      age: 0,
    });

    if (points.length > maxPoints) {
      points.shift();
    }

    lastPointTime = now;
    lastPointerInput = now;
  };

  const addIdlePoint = () => {
    const now = performance.now();

    if (now - lastPointerInput < 1600 || width < 1 || height < 1) {
      return;
    }

    idlePhase += 0.026;
    const x = width * (0.5 + Math.cos(idlePhase * 0.72) * 0.22);
    const y = height * (0.48 + Math.sin(idlePhase) * 0.16);

    points.push({ x, y, age: 0.18 });

    if (points.length > maxPoints) {
      points.shift();
    }
  };

  const drawTrail = () => {
    addIdlePoint();
    context.clearRect(0, 0, width, height);

    for (let index = points.length - 1; index >= 0; index -= 1) {
      points[index].age += 0.018;

      if (points[index].age >= 1) {
        points.splice(index, 1);
      }
    }

    if (points.length > 1) {
      for (let index = 1; index < points.length; index += 1) {
        const previous = points[index - 1];
        const current = points[index];
        const life = 1 - current.age;
        const widthFactor = index / points.length;

        context.beginPath();
        context.moveTo(previous.x, previous.y);
        context.lineTo(current.x, current.y);
        context.lineWidth = Math.max(1.1, 8 * widthFactor * life);
        context.strokeStyle = `rgba(57, 198, 192, ${0.52 * life})`;
        context.shadowBlur = 26 * life;
        context.shadowColor = `rgba(242, 59, 125, ${0.58 * life})`;
        context.lineCap = "round";
        context.lineJoin = "round";
        context.stroke();

        context.beginPath();
        context.arc(current.x, current.y, Math.max(1.2, 3.5 * life), 0, Math.PI * 2);
        context.fillStyle = `rgba(255, 255, 255, ${0.24 * life})`;
        context.fill();
      }
    }

    requestAnimationFrame(drawTrail);
  };

  resizeTrail();
  window.addEventListener("resize", resizeTrail);
  window.addEventListener("pointermove", addTrailPoint, { passive: true });
  window.addEventListener("mousemove", addTrailPoint, { passive: true });
  window.addEventListener("pointerleave", () => points.splice(0, points.length));
  drawTrail();
}

if (ambientDust) {
  const renderDust = () => {
    const pageHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      window.innerHeight
    );
    const pageWidth = Math.max(document.documentElement.clientWidth, window.innerWidth);
    const particleCount = Math.min(520, Math.max(180, Math.round((pageHeight * pageWidth) / 26000)));
    const fragment = document.createDocumentFragment();

    ambientDust.textContent = "";
    ambientDust.style.height = `${pageHeight}px`;

    for (let index = 0; index < particleCount; index += 1) {
      const particle = document.createElement("span");
      const size = 0.8 + Math.random() * 2.2;
      const alpha = 0.24 + Math.random() * 0.42;
      const fall = 90 + Math.random() * 260;
      const duration = 18 + Math.random() * 34;
      const delay = Math.random() * -duration;

      particle.className = "dust-particle";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * pageHeight}px`;
      particle.style.setProperty("--dust-size", `${size.toFixed(2)}px`);
      particle.style.setProperty("--dust-alpha", alpha.toFixed(2));
      particle.style.setProperty("--dust-blur", `${(Math.random() * 0.8).toFixed(2)}px`);
      particle.style.setProperty("--dust-fall", `${fall.toFixed(0)}px`);
      particle.style.setProperty("--dust-duration", `${duration.toFixed(2)}s`);
      particle.style.setProperty("--dust-delay", `${delay.toFixed(2)}s`);
      fragment.appendChild(particle);
    }

    ambientDust.appendChild(fragment);
  };

  renderDust();
  window.addEventListener("resize", renderDust);
}

if (spaceBackdrop) {
  const syncSpaceBackdropHeight = () => {
    const pageHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      window.innerHeight
    );

    spaceBackdrop.style.height = `${pageHeight}px`;
  };

  syncSpaceBackdropHeight();
  window.addEventListener("resize", syncSpaceBackdropHeight);
}

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(contactForm);
  const name = data.get("name").trim();
  const email = data.get("email").trim();
  const message = data.get("message").trim();
  const subject = encodeURIComponent(`Project inquiry from ${name}`);
  const bodyText = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

  window.location.href = `mailto:berzahgames@gmail.com?subject=${subject}&body=${bodyText}`;
  if (formNote) {
    formNote.textContent = "Your email app should open with the message prepared.";
  }
});
