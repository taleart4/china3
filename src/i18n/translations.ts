export type Lang = 'en' | 'es' | 'zh';

export const langNames: Record<Lang, string> = {
  en: 'EN',
  es: 'ES',
  zh: '中文',
};

export type Translation = {
  nav: {
    services: string;
    tracks: string;
    process: string;
    about: string;
    contact: string;
    getInTouch: string;
  };
  hero: {
    badge: string;
    titlePre: string;
    titleHighlight: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stat1Label: string;
    stat2Label: string;
    stat3Label: string;
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    card4Title: string;
    card4Desc: string;
    card5Title: string;
    card5Desc: string;
    card6Title: string;
    card6Desc: string;
  };
  tracks: {
    eyebrow: string;
    title: string;
    subtitle: string;
    shenzhenTitle: string;
    shenzhenSub: string;
    shenzhenDesc: string;
    shenzhenF1: string;
    shenzhenF2: string;
    shenzhenF3: string;
    shenzhenF4: string;
    shenzhenBestFor: string;
    ningboTitle: string;
    ningboSub: string;
    ningboDesc: string;
    ningboF1: string;
    ningboF2: string;
    ningboF3: string;
    ningboF4: string;
    ningboBestFor: string;
    bestForLabel: string;
  };
  process: {
    eyebrow: string;
    title: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    pill1Title: string;
    pill1Sub: string;
    pill2Title: string;
    pill2Sub: string;
    pill3Title: string;
    pill3Sub: string;
  };
  about: {
    eyebrow: string;
    title: string;
    para1: string;
    para2: string;
    coverageTitle: string;
    city1: string;
    city2: string;
    city3: string;
    city4: string;
    coverageNote: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    emailLabel: string;
    phoneLabel: string;
    basedInLabel: string;
    linkedinLabel: string;
    trilingualTitle: string;
    trilingualDesc: string;
    formTitle: string;
    formRequired: string;
    fullName: string;
    fullNamePlaceholder: string;
    emailField: string;
    emailPlaceholder: string;
    companyField: string;
    companyPlaceholder: string;
    serviceField: string;
    shenzhenLabel: string;
    shenzhenSubLabel: string;
    ningboLabel: string;
    ningboSubLabel: string;
    messageField: string;
    messagePlaceholder: string;
    sendButton: string;
    sending: string;
    successTitle: string;
    successDesc: string;
    sendAnother: string;
    errorOccurred: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
};

export const translations: Record<Lang, Translation> = {
  en: {
    nav: {
      services: 'Services',
      tracks: 'Tracks',
      process: 'Process',
      about: 'About',
      contact: 'Contact',
      getInTouch: 'Get in touch',
    },
    hero: {
      badge: 'Mexico City · Bilingual EN / ES / 中文支持',
      titlePre: 'Your local bridge for',
      titleHighlight: 'business in Mexico',
      description:
        'I help Chinese companies and Mexican businesses connect, negotiate, and close deals — with on-the-ground liaison, cultural translation, and commercial coordination across CDMX, Toluca, Querétaro, and Puebla.',
      ctaPrimary: 'Start a conversation',
      ctaSecondary: 'Explore services',
      stat1Label: 'Languages supported',
      stat2Label: 'Industrial regions covered',
      stat3Label: 'On-the-ground in Mexico',
    },
    services: {
      eyebrow: 'What I do',
      title: 'Services built for cross-border business',
      subtitle:
        'Flexible, on-demand support — by the hour, day, or project. No retainers, no overhead.',
      card1Title: 'Cultural & Linguistic Translation',
      card1Desc:
        'English–Spanish interpretation in live negotiations, plus written follow-up in native Mexican Spanish after meetings end.',
      card2Title: 'B2B Meeting Liaison',
      card2Desc:
        'Accompany delegations in meetings with suppliers, lawyers, real estate agents, and government authorities across central Mexico.',
      card3Title: 'Practical Coordination',
      card3Desc:
        'Transportation, meeting room booking, document preparation, and quality assurance of presentations and agreements.',
      card4Title: 'Sourcing & Supplier Support',
      card4Desc:
        'Help Mexican SMEs communicate with factories in Zhejiang and Ningbo — obtain quotes, check specs, and coordinate with a local customs agent.',
      card5Title: 'Localization & Adaptation',
      card5Desc:
        'Adapt product descriptions, packaging text, user manuals, and customer service templates into native Mexican Spanish for direct-to-market brands.',
      card6Title: 'Document & Agreement QA',
      card6Desc:
        'Review contracts, presentations, and proposals to ensure correct Mexican Spanish phrasing and cultural appropriateness.',
    },
    tracks: {
      eyebrow: 'Two service tracks',
      title: 'Tailored to where your business comes from',
      subtitle:
        'Different regions of China have different needs in Mexico. I offer two specialized tracks.',
      shenzhenTitle: 'Shenzhen Track',
      shenzhenSub: 'Technology · EV / Industry · Business Delegations',
      shenzhenDesc:
        'For engineers, project managers, salespeople, and investors coming to Mexico for short, intensive stays. Often English-speaking but rarely Spanish, and unfamiliar with Mexican business culture.',
      shenzhenF1: 'Accompany delegations in meetings across CDMX, Toluca, Querétaro, and Puebla',
      shenzhenF2: 'Live English–Spanish translation in negotiations',
      shenzhenF3: 'Email follow-up after the delegation returns home',
      shenzhenF4: 'Transportation, meeting rooms, document prep, and presentation QA',
      shenzhenBestFor: 'EV, solar, electronics, and telecom companies exploring the Mexican market.',
      ningboTitle: 'Ningbo Track',
      ningboSub: 'Retail · E-commerce · Supplier Contact',
      ningboDesc:
        'For goods that need to move fast — electronic components, special tools, packaging, textiles, and niche e-commerce products. Mexican buyers need help navigating international suppliers; Chinese exporters need someone who understands Mexico.',
      ningboF1: 'Sourcing support: communicate with Zhejiang factories, get quotes, check specs',
      ningboF2: 'Coordinate with a local customs agent (agente aduanal or comercializadora)',
      ningboF3: 'Localize product descriptions, packaging, manuals, and CS templates',
      ningboF4: 'Service-only model — no inventory, no import permits to manage',
      ningboBestFor:
        'Mercado Libre / Amazon sellers and Chinese exporters entering the Mexican market.',
      bestForLabel: 'Best for:',
    },
    process: {
      eyebrow: 'How it works',
      title: 'Three steps to get started',
      step1Title: 'Define your profile',
      step1Desc:
        'We identify which track fits — B2B liaison for delegations or commercial coordination for goods and e-commerce — and align on scope.',
      step2Title: 'Coordinate logistics',
      step2Desc:
        'I handle the on-the-ground details: meetings, transportation, documents, and supplier communication — all coordinated from Mexico City.',
      step3Title: 'Execute & follow up',
      step3Desc:
        'I accompany you through negotiations, translate outcomes, and manage post-meeting follow-up so nothing falls through the cracks.',
      pill1Title: 'RESICO registered',
      pill1Sub: 'Valid CFDI facturas issued',
      pill2Title: 'Bilingual operations',
      pill2Sub: 'English · Spanish · 中文',
      pill3Title: 'Partner network',
      pill3Sub: 'Customs · Legal · Transport',
    },
    about: {
      eyebrow: 'About',
      title: 'A local consultant, not a distant firm',
      para1:
        "Chinese and international companies often prefer a flexible consultant on an hourly or daily basis over expensive consulting firms when exploring the market. That's exactly what I offer — direct, personal, on-the-ground support in Mexico.",
      para2:
        "Based in Mexico City, I operate under the RESICO tax regime with SAT, so I can issue valid facturas (CFDI) to Mexican companies and receive payments from abroad at a low tax rate. I've built a small, trusted partner network — a customs agent, a business lawyer, and a transport provider — so I can offer a total package without fixed costs.",
      coverageTitle: 'Coverage area',
      city1: 'Mexico City (CDMX)',
      city2: 'Toluca',
      city3: 'Querétaro',
      city4: 'Puebla',
      coverageNote:
        'Available for short-term travel to industrial zones across central Mexico.',
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's talk about your Mexico project",
      description:
        "Whether you're planning a delegation visit, exploring suppliers, or localizing products for the Mexican market — send a message and you'll hear back within 24 hours.",
      emailLabel: 'Email',
      phoneLabel: 'Phone / WhatsApp',
      basedInLabel: 'Based in',
      linkedinLabel: 'LinkedIn',
      trilingualTitle: 'Trilingual support:',
      trilingualDesc:
        'Communication available in English, Spanish, and with Chinese-language assistance for initial contact.',
      formTitle: 'Send a message',
      formRequired: 'Fields marked with * are required.',
      fullName: 'Full name',
      fullNamePlaceholder: 'Your name',
      emailField: 'Email',
      emailPlaceholder: 'you@company.com',
      companyField: 'Company (optional)',
      companyPlaceholder: 'Company name',
      serviceField: 'Which service do you need?',
      shenzhenLabel: 'B2B Liaison & Business Fixer',
      shenzhenSubLabel: 'Shenzhen track — delegations & meetings',
      ningboLabel: 'Commercial Coordinator',
      ningboSubLabel: 'Ningbo track — sourcing & localization',
      messageField: 'How can I help?',
      messagePlaceholder:
        'Tell me about your project, timeline, and what you need support with in Mexico.',
      sendButton: 'Send message',
      sending: 'Sending...',
      successTitle: 'Message sent',
      successDesc: "Thank you for reaching out. You'll receive a reply within 24 hours.",
      sendAnother: 'Send another message',
      errorOccurred: 'Something went wrong sending your message. Please try again or email directly.',
    },
    footer: {
      tagline: 'Bilingual B2B liaison & commercial coordination · Mexico City',
      rights: 'All rights reserved.',
    },
  },
  es: {
    nav: {
      services: 'Servicios',
      tracks: 'Rutas',
      process: 'Proceso',
      about: 'Acerca de',
      contact: 'Contacto',
      getInTouch: 'Contáctame',
    },
    hero: {
      badge: 'Ciudad de México · Bilingüe EN / ES / 中文支持',
      titlePre: 'Tu puente local para',
      titleHighlight: 'hacer negocios en México',
      description:
        'Ayudo a empresas chinas y negocios mexicanos a conectarse, negociar y cerrar acuerdos — con enlace presencial, traducción cultural y coordinación comercial en CDMX, Toluca, Querétaro y Puebla.',
      ctaPrimary: 'Iniciar conversación',
      ctaSecondary: 'Ver servicios',
      stat1Label: 'Idiomas atendidos',
      stat2Label: 'Regiones industriales',
      stat3Label: 'Presencial en México',
    },
    services: {
      eyebrow: 'Lo que hago',
      title: 'Servicios para negocios transfronterizos',
      subtitle:
        'Apoyo flexible bajo demanda — por hora, día o proyecto. Sin retainer, sin costos fijos.',
      card1Title: 'Traducción Cultural y Lingüística',
      card1Desc:
        'Interpretación inglés–español en negociaciones en vivo, además de seguimiento por escrito en español mexicano nativo después de las reuniones.',
      card2Title: 'Enlace B2B en Reuniones',
      card2Desc:
        'Acompaño delegaciones en reuniones con proveedores, abogados, agentes inmobiliarios y autoridades gubernamentales en el centro de México.',
      card3Title: 'Coordinación Práctica',
      card3Desc:
        'Transporte, reservas de salas de junta, preparación de documentos y control de calidad de presentaciones y acuerdos.',
      card4Title: 'Proveeduría y Apoyo a Suministros',
      card4Desc:
        'Ayudo a pymes mexicanas a comunicarse con fábricas en Zhejiang y Ningbo — cotizaciones, especificaciones y coordinación con agente aduanal local.',
      card5Title: 'Localización y Adaptación',
      card5Desc:
        'Adapto descripciones de productos, textos de empaque, manuales y plantillas de atención al cliente al español mexicano nativo para marcas que venden directo al mercado.',
      card6Title: 'Revisión de Documentos y Acuerdos',
      card6Desc:
        'Reviso contratos, presentaciones y propuestas para asegurar redacción correcta en español mexicano y adecuación cultural.',
    },
    tracks: {
      eyebrow: 'Dos rutas de servicio',
      title: 'Adaptadas al origen de tu negocio',
      subtitle:
        'Diferentes regiones de China tienen distintas necesidades en México. Ofrezco dos rutas especializadas.',
      shenzhenTitle: 'Ruta Shenzhen',
      shenzhenSub: 'Tecnología · EV / Industria · Delegaciones',
      shenzhenDesc:
        'Para ingenieros, gerentes de proyecto, vendedores e inversionistas que vienen a México por estancias cortas e intensas. Suelen hablar inglés pero rara vez español, y no conocen la cultura de negocios mexicana.',
      shenzhenF1: 'Acompañamiento en reuniones en CDMX, Toluca, Querétaro y Puebla',
      shenzhenF2: 'Traducción inglés–español en vivo durante negociaciones',
      shenzhenF3: 'Seguimiento por correo después del regreso de la delegación',
      shenzhenF4: 'Transporte, salas de junta, documentos y revisión de presentaciones',
      shenzhenBestFor:
        'Empresas de EV, solar, electrónica y telecomunicaciones que exploran el mercado mexicano.',
      ningboTitle: 'Ruta Ningbo',
      ningboSub: 'Retail · E-commerce · Contacto con Proveedores',
      ningboDesc:
        'Para mercancía de movimiento rápido — componentes electrónicos, herramientas especiales, empaques, textiles y productos de nicho para e-commerce. Los compradores mexicanos necesitan ayuda con proveedores internacionales; los exportadores chinos necesitan alguien que entienda México.',
      ningboF1: 'Proveeduría: comunicación con fábricas en Zhejiang, cotizaciones, especificaciones',
      ningboF2: 'Coordinación con agente aduanal o comercializadora local',
      ningboF3: 'Localización de descripciones, empaques, manuales y plantillas de atención',
      ningboF4: 'Modelo de solo servicio — sin inventario, sin permisos de importación',
      ningboBestFor:
        'Vendedores de Mercado Libre / Amazon y exportadores chinos que entran al mercado mexicano.',
      bestForLabel: 'Ideal para:',
    },
    process: {
      eyebrow: 'Cómo funciona',
      title: 'Tres pasos para empezar',
      step1Title: 'Define tu perfil',
      step1Desc:
        'Identificamos qué ruta se ajusta — enlace B2B para delegaciones o coordinación comercial para bienes y e-commerce — y alineamos el alcance.',
      step2Title: 'Coordinamos la logística',
      step2Desc:
        'Gestiono los detalles en el terreno: reuniones, transporte, documentos y comunicación con proveedores — todo coordinado desde Ciudad de México.',
      step3Title: 'Ejecutamos y damos seguimiento',
      step3Desc:
        'Te acompaño en las negociaciones, traduzco los resultados y gestiono el seguimiento posterior para que nada se quede pendiente.',
      pill1Title: 'Registrado bajo RESICO',
      pill1Sub: 'Emisión de facturas CFDI válidas',
      pill2Title: 'Operación bilingüe',
      pill2Sub: 'English · Spanish · 中文',
      pill3Title: 'Red de aliados',
      pill3Sub: 'Aduana · Legal · Transporte',
    },
    about: {
      eyebrow: 'Acerca de',
      title: 'Un consultor local, no una firma lejana',
      para1:
        'Las empresas chinas e internacionales suelen preferir un consultor flexible por hora o día en lugar de firmas costosas al explorar el mercado. Eso es justo lo que ofrezco — apoyo directo, personal y presencial en México.',
      para2:
        'Basado en Ciudad de México, opero bajo el régimen RESICO del SAT, por lo que puedo emitir facturas (CFDI) válidas a empresas mexicanas y recibir pagos del extranjero con una tasa impositiva baja. He construido una pequeña red de aliados de confianza — un agente aduanal, un abogado mercantil y un proveedor de transporte — para ofrecer un paquete total sin costos fijos.',
      coverageTitle: 'Zona de cobertura',
      city1: 'Ciudad de México (CDMX)',
      city2: 'Toluca',
      city3: 'Querétaro',
      city4: 'Puebla',
      coverageNote:
        'Disponible para viajes cortos a zonas industriales del centro de México.',
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Hablemos de tu proyecto en México',
      description:
        'Ya sea que planees una visita de delegación, explores proveedores o localices productos para el mercado mexicano — envía un mensaje y recibirás respuesta en 24 horas.',
      emailLabel: 'Correo',
      phoneLabel: 'Teléfono / WhatsApp',
      basedInLabel: 'Base',
      linkedinLabel: 'LinkedIn',
      trilingualTitle: 'Apoyo trilingüe:',
      trilingualDesc:
        'Comunicación disponible en inglés, español y con asistencia en chino para el contacto inicial.',
      formTitle: 'Envía un mensaje',
      formRequired: 'Los campos marcados con * son obligatorios.',
      fullName: 'Nombre completo',
      fullNamePlaceholder: 'Tu nombre',
      emailField: 'Correo',
      emailPlaceholder: 'tu@empresa.com',
      companyField: 'Empresa (opcional)',
      companyPlaceholder: 'Nombre de la empresa',
      serviceField: '¿Qué servicio necesitas?',
      shenzhenLabel: 'Enlace B2B & Business Fixer',
      shenzhenSubLabel: 'Ruta Shenzhen — delegaciones y reuniones',
      ningboLabel: 'Coordinador Comercial',
      ningboSubLabel: 'Ruta Ningbo — proveeduría y localización',
      messageField: '¿Cómo puedo ayudar?',
      messagePlaceholder:
        'Cuéntame sobre tu proyecto, tiempos y qué apoyo necesitas en México.',
      sendButton: 'Enviar mensaje',
      sending: 'Enviando...',
      successTitle: 'Mensaje enviado',
      successDesc: 'Gracias por contactarme. Recibirás una respuesta en 24 horas.',
      sendAnother: 'Enviar otro mensaje',
      errorOccurred:
        'Ocurrió un error al enviar el mensaje. Intenta de nuevo o escribe directamente.',
    },
    footer: {
      tagline: 'Enlace B2B bilingüe y coordinación comercial · Ciudad de México',
      rights: 'Todos los derechos reservados.',
    },
  },
  zh: {
    nav: {
      services: '服务',
      tracks: '服务路线',
      process: '流程',
      about: '关于',
      contact: '联系',
      getInTouch: '联系我们',
    },
    hero: {
      badge: '墨西哥城 · 双语支持 EN / ES / 中文',
      titlePre: '您在墨西哥的',
      titleHighlight: '本地商业桥梁',
      description:
        '我帮助中国企业和墨西哥商家建立联系、进行谈判并达成交易 — 提供在地联络、文化翻译和商务协调服务，覆盖墨西哥城、托卢卡、克雷塔罗和普埃布拉。',
      ctaPrimary: '开始对话',
      ctaSecondary: '了解服务',
      stat1Label: '支持语言',
      stat2Label: '覆盖工业区',
      stat3Label: '墨西哥在地服务',
    },
    services: {
      eyebrow: '我的服务',
      title: '为跨境业务打造的服务',
      subtitle: '灵活、按需支持 — 按小时、按天或按项目。无需长期合约，无额外开支。',
      card1Title: '文化与语言翻译',
      card1Desc:
        '在实时谈判中提供英西口译，并在会议结束后以地道的墨西哥西班牙语进行书面跟进。',
      card2Title: 'B2B 会议联络',
      card2Desc:
        '陪同代表团与供应商、律师、房地产经纪人和政府机构在墨西哥中部进行会议。',
      card3Title: '实务协调',
      card3Desc:
        '交通安排、会议室预订、文件准备以及演示文稿和协议的质量把关。',
      card4Title: '采购与供应商支持',
      card4Desc:
        '帮助墨西哥中小企业与浙江和宁波的工厂沟通 — 获取报价、核实规格，并与本地报关行协调。',
      card5Title: '本地化与适配',
      card5Desc:
        '将产品描述、包装文字、用户手册和客服模板适配为地道的墨西哥西班牙语，面向直营品牌。',
      card6Title: '文件与协议审核',
      card6Desc:
        '审核合同、演示文稿和提案，确保墨西哥西班牙语用词准确且符合当地文化。',
    },
    tracks: {
      eyebrow: '两条服务路线',
      title: '根据您的业务来源量身定制',
      subtitle: '中国不同地区在墨西哥有不同需求。我提供两条专业路线。',
      shenzhenTitle: '深圳路线',
      shenzhenSub: '科技 · 电动汽车/工业 · 商务代表团',
      shenzhenDesc:
        '面向来墨西哥短期密集出差的工程师、项目经理、销售人员和投资者。他们通常会说英语但很少说西班牙语，且不熟悉墨西哥商业文化。',
      shenzhenF1: '陪同代表团在墨西哥城、托卢卡、克雷塔罗和普埃布拉参加会议',
      shenzhenF2: '谈判中提供实时英西翻译',
      shenzhenF3: '代表团回国后通过邮件跟进',
      shenzhenF4: '交通、会议室、文件准备和演示文稿把关',
      shenzhenBestFor: '探索墨西哥市场的电动汽车、太阳能、电子和电信企业。',
      ningboTitle: '宁波路线',
      ningboSub: '零售 · 电商 · 供应商对接',
      ningboDesc:
        '面向需要快速交付的商品 — 电子元件、专用工具、包装材料、纺织品和电商小众产品。墨西哥买家需要帮助对接国际供应商；中国出口商需要了解墨西哥市场的人。',
      ningboF1: '采购支持：与浙江工厂沟通、获取报价、核实规格',
      ningboF2: '与本地报关行或贸易公司协调',
      ningboF3: '本地化产品描述、包装、手册和客服模板',
      ningboF4: '纯服务模式 — 无库存、无需管理进口许可证',
      ningboBestFor: '美客多/亚马逊卖家及进入墨西哥市场的中国出口商。',
      bestForLabel: '最适合：',
    },
    process: {
      eyebrow: '工作流程',
      title: '三步即可开始',
      step1Title: '确定您的需求',
      step1Desc:
        '我们确认哪条路线更适合 — 代表团的B2B联络还是商品和电商的商务协调 — 并对齐服务范围。',
      step2Title: '协调物流',
      step2Desc:
        '我负责在地细节：会议、交通、文件和供应商沟通 — 全部从墨西哥城协调。',
      step3Title: '执行与跟进',
      step3Desc:
        '我陪同您参与谈判，翻译结果，并管理会后跟进，确保没有遗漏。',
      pill1Title: 'RESICO 注册',
      pill1Sub: '可开具有效 CFDI 发票',
      pill2Title: '多语言运营',
      pill2Sub: 'English · Spanish · 中文',
      pill3Title: '合作伙伴网络',
      pill3Sub: '报关 · 法务 · 交通',
    },
    about: {
      eyebrow: '关于',
      title: '本地顾问，而非远方的公司',
      para1:
        '中国和国际企业在探索市场时，通常更倾向于按小时或按天聘请灵活的顾问，而非昂贵的咨询公司。这正是我提供的 — 直接、个人化、在墨西哥的在地支持。',
      para2:
        '我位于墨西哥城，在SAT下以RESICO税务制度运营，因此可以向墨西哥企业开具有效发票（CFDI），并以低税率接收来自海外的付款。我建立了一个小型可信赖的合作网络 — 报关行、商务律师和交通供应商 — 让我能以零固定成本提供全套服务。',
      coverageTitle: '服务覆盖区域',
      city1: '墨西哥城 (CDMX)',
      city2: '托卢卡',
      city3: '克雷塔罗',
      city4: '普埃布拉',
      coverageNote: '可短期前往墨西哥中部各工业区。',
    },
    contact: {
      eyebrow: '联系',
      title: '让我们谈谈您的墨西哥项目',
      description:
        '无论您是计划代表团访问、寻找供应商，还是为墨西哥市场做产品本地化 — 发个消息，您将在24小时内收到回复。',
      emailLabel: '邮箱',
      phoneLabel: '电话 / WhatsApp',
      basedInLabel: '所在地',
      linkedinLabel: '领英',
      trilingualTitle: '三语支持：',
      trilingualDesc: '可用英语、西班牙语沟通，初次联系可提供中文协助。',
      formTitle: '发送消息',
      formRequired: '标有 * 的字段为必填项。',
      fullName: '姓名',
      fullNamePlaceholder: '您的姓名',
      emailField: '邮箱',
      emailPlaceholder: 'you@company.com',
      companyField: '公司（选填）',
      companyPlaceholder: '公司名称',
      serviceField: '您需要哪项服务？',
      shenzhenLabel: 'B2B联络与商务助理',
      shenzhenSubLabel: '深圳路线 — 代表团与会议',
      ningboLabel: '商务协调员',
      ningboSubLabel: '宁波路线 — 采购与本地化',
      messageField: '我能如何帮助您？',
      messagePlaceholder: '请告诉我您的项目、时间安排以及在墨西哥需要什么支持。',
      sendButton: '发送消息',
      sending: '发送中...',
      successTitle: '消息已发送',
      successDesc: '感谢您的联系。您将在24小时内收到回复。',
      sendAnother: '再发一条消息',
      errorOccurred: '发送消息时出错。请重试或直接发送邮件。',
    },
    footer: {
      tagline: '双语B2B联络与商务协调 · 墨西哥城',
      rights: '版权所有。',
    },
  },
};
