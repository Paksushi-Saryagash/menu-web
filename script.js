/* ===== ДАННЫЕ (можно заменить на реальные позже) ===== */
const DATA = {
  sets: [

    {
      name:'Рамадан',
      slug:'ramadan',
      category:'big',
      popular:true,
      img:'images/sets/Set-Ramadan.jpeg',
      price:12500,
      short:'🍣 30 шт суши + 3 шт Пицца, Крылышки + 🎁',
      desc:'🍣 Цезарь — 20 шт\n🍣 Америка — 10 шт\n🍕 Пеперони-1 шт\n🍕 Маргарита-1 шт\n🍕 4 Сезона-1 шт\n🍗 Крылышки-16 шт\n\n🎁 Фри + Кола 2л'
    },

    {
      name:'Ауызашар',
      slug:'auyzashar',
      category:'small',
      popular:true,
      img:'images/sets/Set-AuyzAshar.jpeg',
      price:9990,
      short:'🍣 40 шт суши + 2 шт Пицца, Крылышки + 🎁',
      desc:'🍣 Филадельфия — 10 шт\n🍣 Цезарь — 20 шт\n🍣 Канада — 10 шт\n🍕 Пеперони-1 шт\n🍕 Маргарита-1 шт\n🍗 Крылышки-8 шт\n\n🎁 Фри + Кола 1л'
    },

    {
      name:'Олигарх',
      slug:'oligarh',
      category:'small',
      popular:true,
      img:'images/sets/Set-Oligarh.jpg',
      price:6490,
      short:'🍣 20 шт суши + Пицца, Крылышки',
      desc:'🍣 Филадельфия — 10 шт\n🍣 Цезарь — 10 шт\n🍕 Пеперони-1 шт\n\n🎁 Крылышки'
    },

    {
      name:'Старт',
      slug:'start',
      category:'small',
      popular:false,
      img:'images/sets/Set-Start.jpg',
      price:6990,
      short:'🍣 30 шт суши + Корн-дог, Пицца, Шарики',
      desc:'🍣 Цезарь — 20 шт\n🍣 Америка - 10 шт\n🌭 Корн-дог - 5 шт\n🟡 Шарики - 15 шт\n🍕 Пеперони - 1 шт\n\n🎁 Кола 1л'
    },

    {
      name:'Зал',
      slug:'zal',
      category:'small',
      popular:false,
      img:'images/sets/Set-Zal.jpg',
      price:6990,
      short:'🍣 40 шт суши + Пицца',
      desc:'🍣 Цезарь — 10 шт\n🍣 Америка — 20 шт\n🍣 Красный зверь — 10 шт\n🍕 Пеперони - 1 шт\n\n🎁 Кола 1л'
    },

    {
      name:'Техас',
      slug:'texas',
      category:'small',
      popular:false,
      img:'images/sets/Set-Texas.jpg',
      price:5990,
      short:'🍣 30 шт суши + 🍔Бургер',
      desc:'🍣 Цезарь — 10 шт\n🍣 Цезарь запеченный — 10 шт\n🍣 Америка — 10 шт\n🥤 Кола 1л\n\n🎁 🍔Бургер - 1шт'
    },

    {
      name:'Титаник',
      slug:'texas',
      category:'big',
      popular:true,
      img:'images/sets/Set-Titanik.jpg',
      price:11500,
      short:'🍣 20 шт суши + 🍕2пицца, крылышки, шарики, фри + 🎁',
      desc:'🍣 Цезарь — 10 шт\n🍣 Филадельфия — 10 шт\n\n🍗 Крылышки - 14 шт\n🍟 Фри + шарики\n🥤 Кола 1л\n\n'
    },

    {
      name:'Бинго',
      slug:'bingo',
      category:'big',
      popular:false,
      img:'images/sets/Set-Bingo.jpg',
      price:10990,
      short:'🍣 50 шт суши + 🍕2 шт Пицца',
      desc:'🍣 Филадельфия — 10 шт\n🍣 Калифорния запеченный — 10 шт\n🍣 Цезарь Запеченный — 10 шт\n🍣 Каппа Маки - 10 шт\n🍣 Сяке Маки - 10 шт\n\n🍕 Микс - 1 шт\n🍕 Четыре сыра - 1 шт'
    },

    {
      name:'На двоих',
      slug:'na-dvoikh',
      category:'small',
      popular:false,
      img:'images/sets/Set-NaDvoih.jpg',
      price:5990,
      short:'🍣 20 шт суши, 🍕Пицца + 🍟Фри',
      desc:'🍣 Цезарь — 10 шт\n🍣 Цезарь запеченный — 10 шт\n🍕 Пеперони - 1 шт\n\n🎁 🍟Фри'
    },

    {
      name:'Родной',
      slug:'rodnoy',
      category:'big',
      popular:false,
      img:'images/sets/Set-Rodnoi.jpg',
      price:11990,
      short:'🍣 80 шт суши, 🍕 2 пиццы + 🍟 фри',
      desc:'🍣 Америка — 20 шт\n🍣 Цезарь — 30 шт\n🍣 Запечённый — 10 шт\n🍣 Зелёный зверь — 10 шт\n🍣 Калифорния — 10 шт\n\n🍕 Пепперони\n🍕 Сырная\n\n🍟 Фри\n\n🎁 2.5 л лимонад в подарок 😍😍'
    },

    {
      name:'Антарктида',
      slug:'antarctida',
      category:'big',
      popular:true,
      img:'images/sets/Set-Antarktida.jpg',
      price:9990,
      short:'🍣 20 шт суши + 🍗 14 шт крылышки, 🍟 2 шт фри, 🍕 2 пиццы',
      desc:'🍣 Цезарь — 10 шт\n🍣 Цезарь запечённый — 10 шт\n\n🍗 Крылышки — 14 шт\n\n🍟 Фри — 2 шт\n\n🍕 Пеперони — 2 шт\n\n🎁 Кола — 2 л в подарок 😍'
    },

    {
      name:'Шейх',
      slug:'sheikh',
      category:'big',
      popular:true,
      img:'images/sets/Set-Sheix.jpg',
      price:9990,
      short:'🍣 50 шт суши + 🍗 6 шт нагетсы + 🍟 фри + 🍕 2 пиццы',
      desc:'🍣 Цезарь — 10 шт\n🍣 Цезарь запечённый — 10 шт\n🍣 Аляска — 10 шт\n🍣 Америка — 10 шт\n🍣 Калифорния запечённый — 10 шт\n\n🍗 Нагетсы — 6 шт\n\n🍟 Фри — 1 шт\n\n🍕 Пеперони — 1 шт\n🍕 4 сезона — 1 шт'
    },

    {
      name:'Буря',
      slug:'burya',
      category:'small',
      popular:false,
      img:'images/sets/Set-Bura.jpg',
      price:7490,
      short:'🍣 40 шт суши + 🍕 пеперони + 🥤 кола 1 л',
      desc:'🍣 Филадельфия — 10 шт\n🍣 Цезарь запечённый — 10 шт\n🍣 Капа маки — 10 шт\n🍣 Америка — 10 шт\n\n🍕 Пеперони — 1 шт\n\n🎁 Кола — 1 л'
    },

    {
      name:'Бамбук',
      slug:'bambuk',
      category:'small',
      popular:false,
      img:'images/sets/Set-Bambuk.jpg',
      price:8490,
      short:'🍣 38 шт суши + 🍕 2 пиццы',
      desc:'🍣 Цезарь — 20 шт\n🍣 Америка — 10 шт\n🍘 Саше — 4 шт\n🍣 Гунканы — 4 шт\n\n🍕 Пеперони — 2 шт'
    },

    {
      name:'Паладин',
      slug:'paladin',
      category:'big',
      popular:false,
      img:'images/sets/Set-Paladin.jpg',
      price:11500,
      short:'🍣 80 шт суши + 🍕 2 пиццы',
      desc:'🍣 Цезарь — 40 шт\n🍣 Цезарь запечённый — 20 шт\n🍣 Америка — 20 шт\n\n🍕 Пеперони — 2 шт'
    },

    {
      name:'Париж',
      slug:'paris',
      category:'small',
      popular:true,
      img:'images/sets/Set-Paris.jpg',
      price:7990,
      short:'🍣 30 шт суши + 🍗 8 шт нагетсы + 🍕 пеперони + 🥤 кола 1 л',
      desc:'🍣 Цезарь — 10 шт\n🍣 Цезарь запечённый — 10 шт\n🍣 Америка — 10 шт\n\n🍗 Нагетсы — 8 шт\n\n🍕 Пеперони — 1 шт\n\n🎁 Кола — 1 л'
    },

    {
      name:'Хот',
      slug:'hot',
      category:'small',
      popular:false,
      img:'images/sets/Set-Xot.jpg',
      price:8990,
      short:'🍣 40 шт суши + 🍗 14 шт крылышки + 🍕 грибная',
      desc:'🍣 Цезарь — 10 шт\n🍣 Америка лосось — 10 шт\n🍣 Фирмен ПАК ролл — 10 шт\n🍣 Цезарь запечённый — 10 шт\n\n🍗 Крылышки — 14 шт\n\n🍕 Пицца грибная — 1 шт'
    },

    {
      name:'Нокдаун',
      slug:'knockdown',
      category:'small',
      popular:false,
      img:'images/sets/Set-Nokdaun.jpg',
      price:7490,
      short:'🍣 60 шт суши + 🍕 пеперони',
      desc:'🍣 Цезарь — 20 шт\n🍣 Капа маки — 20 шт\n🍣 Калифорния — 10 шт\n🍣 Салатный ролл — 10 шт\n\n🍕 Пеперони — 1 шт'
    },

    {
      name:'Лондон',
      slug:'london',
      category:'small',
      popular:false,
      img:'images/sets/Set-London.jpg',
      price:7490,
      short:'🍣 20 шт суши + 🍟 фри + 🍗 крылышки + 🥤 кола 1 л',
      desc:'🍣 Цезарь запечённый — 20 шт\n\n🍟 Фри — 2 шт\n\n🍗 Крылышки — 14 шт\n\n🎁 Кола — 1 л'
    },

    {
      name:'Жареный',
      slug:'zharenyy',
      category:'small',
      popular:false,
      img:'images/sets/Set-Jarenni.jpg',
      price:8990,
      short:'🍣 44 шт суши + 🍕 2 пиццы',
      desc:'🍣 Америка — 20 шт\n🍣 Цезарь — 10 шт\n🍣 Цезарь запечённый — 10 шт\n🍘 Саше — 4 шт\n\n🍕 Пеперони — 1 шт\n🍕 Маргарита — 1 шт'
    },

    {
      name:'Токио',
      slug:'tokyo',
      category:'small',
      popular:false,
      img:'images/sets/Set-Tokio.jpg',
      price:5990,
      short:'🍣 10 шт суши + 🍕 4 сезона + 🍟 фри + 🍗 крылышки',
      desc:'🍣 Цезарь запечённый — 10 шт\n\n🍕 4 сезона — 1 шт\n\n🍟 Фри — 1 шт\n\n🍗 Крылышки — 7 шт'
    },

    {
      name:'Сеул',
      slug:'seul',
      category:'small',
      popular:false,
      img:'images/sets/Set-Seul.jpg',
      price:8490,
      short:'🍣 38 шт суши + 🍕 пеперони',
      desc:'🍣 Филадельфия — 10 шт\n🍣 Цезарь — 10 шт\n🍣 Америка — 10 шт\n🍣 Гункан с лососем — 4 шт\n🍘 Саше с курицей — 4 шт\n\n🍕 Пеперони — 1 шт'
    },

    {
      name:'Голд',
      slug:'gold',
      category:'small',
      popular:false,
      img:'images/sets/Set-Gold.jpg',
      price:8490,
      short:'🍣 20 шт суши + 🍘 саше + 🍗 14 шт крылышки + 🟡 шарики + 🌭 корн дог',
      desc:'🍣 Цезарь запечённый — 20 шт\n🍘 Саше — 4 шт\n\n🍗 Крылышки — 14 шт\n\n🟡 Шарики — 1 шт\n🌭 Корн дог — 5 шт'
    },

    {
      name:'Солнечный',
      slug:'solnechniy',
      category:'small',
      popular:false,
      img:'images/sets/Set-Solnechni.jpg',
      price:6990,
      short:'🍣 40 шт суши + 🍕 пеперони',
      desc:'🍣 Цезарь запечённый — 10 шт\n🍣 Калифорния запечённый — 10 шт\n🍣 Капа маки запечённый — 10 шт\n🍣 Америка — 10 шт\n\n🍕 Пеперони — 1 шт'
    },

    {
      name:'Босфор',
      slug:'bosfor',
      category:'small',
      popular:false,
      img:'images/sets/Set-Bosfor.jpg',
      price:7490,
      short:'🍣 40 шт суши + 🍕 4 сезона + 🍟 фри',
      desc:'🍣 Цезарь — 20 шт\n🍣 Америка — 20 шт\n\n🍕 4 сезона — 1 шт\n\n🍟 Фри — 1 шт'
    },

    {
      name:'Алмаарасан',
      slug:'alma-arasan',
      category:'small',
      popular:false,
      img:'images/sets/Set-Almaarasan.jpg',
      price:8990,
      short:'🍣 40 шт суши + 🌭 корн дог + 🍗 нагетсы + 🍕 4 сезона + 🍟 фри',
      desc:'🍣 Цезарь — 20 шт\n🍣 Америка — 20 шт\n\n🌭 Корн дог — 1 шт\n🍗 Нагетсы — 8 шт\n\n🍕 4 сезона — 1 шт\n\n🍟 Фри — 1 шт'
    },

    {
      name:'Дубай',
      slug:'dubai',
      category:'small',
      popular:false,
      img:'images/sets/Set-Dubai.jpg',
      price:7490,
      short:'🍣 20 шт суши + 🍗 нагетсы + 🍟 фри + 🍕 пеперони',
      desc:'🍣 Фирмен ПАК ролл — 10 шт\n🍣 Цезарь запечённый — 10 шт\n\n🍗 Нагетсы — 8 шт\n\n🍟 Фри — 1 шт\n\n🍕 Пеперони — 1 шт'
    },

    {
      name:'Эврика',
      slug:'evrika',
      category:'small',
      popular:false,
      img:'images/sets/Set-Evrika.jpg',
      price:7490,
      short:'🍣 40 шт суши + 🍕 4 сезона + 🎁🥤 кола 1 л',
      desc:'🍣 Цезарь — 10 шт\n🍣 Америка — 10 шт\n🍣 Цезарь запечённый — 10 шт\n🍣 Фирмен ПАК ролл — 10 шт\n\n🍕 4 сезона — 1 шт\n\n🎁🥤 Кола — 1 л (в подарок)'
    },

    {
      name:'Позитив',
      slug:'pozitiv',
      category:'small',
      popular:false,
      img:'images/sets/Set-Pozitiv.jpg',
      price:7490,
      short:'🍣 20 шт суши + 🍟 фри + 🍗 крылышки + 🍕 куриная',
      desc:'🍣 Цезарь — 10 шт\n🍣 Темпура — 10 шт\n\n🍗 Крылышки — 14 шт\n\n🍕 Пицца куриная — 1 шт\n\n🎁 В подарок: 🍟 Фри'
    },
    {
      name:'Пекин',
      slug:'pekin',
      category:'small',
      popular:false,
      img:'images/sets/Set-Pekin.jpg',
      price:8490,
      short:'🍣 40 шт суши + 🍕 2 пиццы + 🎁 фри',
      desc:'🍣 Филадельфия — 10 шт\n🍣 Америка — 10 шт\n🍣 Цезарь запечённый — 10 шт\n🍣 Ролл с огурцами — 10 шт\n\n🍕 4 сезона — 1 шт\n🍕 Пеперони — 1 шт\n\n🎁 В подарок: 🍟 Фри — 1 шт'
    },

    {
      name:'4 You',
      slug:'4you',
      category:'small',
      popular:false,
      img:'images/sets/Set-4You.jpg',
      price:7700,
      short:'🍣 40 шт суши + 🍘 саше + 🍗 нагетсы + 🟡 шарики',
      desc:'🍣 Филадельфия — 10 шт\n🍣 Сырный ролл — 10 шт\n🍣 Цезарь — 10 шт\n🍣 Америка с лососем — 10 шт\n\n🍘 Саше — 4 шт\n\n🍗 Нагетсы — 8 шт\n\n🟡 Шарики — 1 шт'
    },

    {
      name:'Пикник',
      slug:'piknik',
      category:'big',
      popular:false,
      img:'images/sets/Set-Piknik.jpg',
      price:14490,
      short:'100шт суши, в подарок 🎁2пиццы',
      desc:'🍣 Филадельфия классик — 20 шт\n🍣 Америка — 20 шт\n🍣 Зелёный зверь — 10 шт\n🍣 Калифорния — 10 шт\n🍣 Фирменный Пакролл — 10 шт\n🍣 Цезарь темпура — 20 шт\n🍣 Бонито — 10 шт\n\n🍕 Пицца Пеперони\n🍕 Пицца 4 сезона '
    },

    {
      name:'Сочный',
      slug:'sochnyi',
      category:'big',
      popular:true,
      img:'images/sets/Set-Sochni.jpg',
      price:12990,
      short:'🍣 70 шт суши  + 🎁🍕 3 пиццы',
      desc:'🍣 Филадельфия классик — 10 шт\n🍣 Калифорния — 10 шт\n🍣 Гейша — 10 шт\n🍣 Цезарь — 20 шт\n🍣 Америка — 20 шт\n\n🎁 В подарок:\n🍕 Пицца Пеперони\n🍕 Пицца 4 сезона\n🍕 Пицца Маргарита'
    },

    {
      name:'Пинто',
      slug:'pinto',
      category:'small',
      popular:false,
      img:'images/sets/Set-Pinto.jpg',
      price:7490,
      short:'🍣 20 шт суши + 🍟 фри + 🍗 крылышки + 🎁 пицца 4 сезона',
      desc:'🍣 Цезарь — 10 шт\n🍣 Темпура — 10 шт\n\n🍟 Фри\n\n🍗 Крылышки — 14 шт\n\n🎁 В подарок: 🍕 Пицца Четыре сезона'
    },

    {
      name:'Студент',
      slug:'student',
      category:'small',
      popular:false,
      img:'images/sets/Set-Student.jpg',
      price:7490,
      short:'🍣 20 шт суши + 🍗 нагетсы + 🍟 фри + 🧀 сырные палочки + 🍕 маргарита',
      desc:'🍣 Филадельфия — 10 шт\n🍣 Цезарь маки — 10 шт\n\n🍗 Нагетсы — 8 шт\n\n🍟 Фри — 1 шт\n\n🧀 Сырные палочки — 6 шт\n\n🍕 Маргарита — 1 шт'
    },

    {
      name:'Запеченный',
      slug:'zapechennyi',
      category:'small',
      popular:false,
      img:'images/sets/Set-Zapechenni.jpg',
      price:6490,
      short:'🍣 20 шт суши + 🍗 крылышки + 🍕 4 сезона',
      desc:'🍣 Цезарь запечённый — 20 шт\n\n🍗 Крылышки — 7 шт\n\n🍕 4 сезона — 1 шт'
    },

    {
      name:'Томи',
      slug:'tomi',
      category:'small',
      popular:false,
      img:'images/sets/Set-Tomi.jpg',
      price:8490,
      short:'🍣 20 шт суши + 🍗 нагетсы + 🍟 фри + 🧀 палочки + 🍕 маргарита',
      desc:'🍣 Филадельфия — 10 шт\n🍣 Цезарь маки — 10 шт\n\n🍗 Крылышки — 7 шт\n\n🍗 Нагетсы — 8 шт\n\n🍟 Фри — 1 шт\n\n🧀 Сырные палочки — 6 шт\n\n🍕 4 Сезона — 1 шт'
    },

    {
      name:'Коста',
      slug:'kosta',
      category:'small',
      popular:false,
      img:'images/sets/Set-Kosta.jpg',
      price:7490,
      short:'🍣 30 шт суши + 🍗 крылышки + 🍕 4 сезона',
      desc:'🍣 Филадельфия — 10 шт\n🍣 Америка — 10 шт\n🍣 Цезарь запечённый — 10 шт\n\n🍗 Крылышки — 7 шт\n\n🍕 4 сезона — 1 шт'
    },

    {
      name:'Оригами',
      slug:'origami',
      category:'big',
      popular:false,
      img:'images/sets/Set-Origami.jpg',
      price:12500,
      short:'🍣 90 шт суши + 🍗 нагетсы + 🍟 фри + 🍕 пеперони',
      desc:'🍣 Филадельфия — 20 шт\n🍣 Америка — 10 шт\n🍣 Калифорния — 10 шт\n🍣 Бонито — 10 шт\n🍣 Ролл сердечка — 10 шт\n🍣 Инь Янъ — 20 шт\n\n🍕 Пеперони — 1 шт\n\n🍗 Нагетсы — 6 шт\n\n🍟 Фри — 1 шт'
    },

    {
      name:'Медия',
      slug:'media',
      category:'small',
      popular:false,
      img:'images/sets/Set-Meida.jpg',
      price:9490,
      short:'🍣 50 шт суши + 🍗 крылышки + 🍕 куриная + 🥤 кола',
      desc:'🍣 Филадельфия — 10 шт\n🍣 Цезарь с курицей — 20 шт\n🍣 Америкас лососьем — 10 шт\n🍣 Овощ. ролл — 10 шт\n\n🍗 Крылышки — 7 шт\n\n🍕 Пицца куриная — 1 шт\n\n🥤 Кола — 1 л'
    },

    {
      name:'Манго',
      slug:'mango',
      category:'small',
      popular:false,
      img:'images/sets/Set-Mango.jpg',
      price:7990,
      short:'🍣 40 шт суши + 🍕 пеперони + 🥤 кола',
      desc:'🍣 Филадельфия — 10 шт\n🍣 Америка — 10 шт\n🍣 Цезарь — 10 шт\n🍣 Блэк Джек — 10 шт\n\n🍕 Пеперони — 1 шт\n\n🥤 Кола — 1 л'
    },

    {
      name:'Бейкер',
      slug:'baker',
      category:'big',
      popular:false,
      img:'images/sets/Set-Beiker.jpg',
      price:11990,
      short:'🍣 60 шт суши + 🍕 2 пиццы + 🍗 крылышки',
      desc:'🍣 Филадельфия — 20 шт\n🍣 Америка — 20 шт\n🍣 Цезарь — 20 шт\n\n🍕 Пеперони — 2 шт\n\n🍗 Крылышки — 7 шт'
    },

    {
      name:'Панда',
      slug:'panda',
      category:'small',
      popular:false,
      img:'images/sets/Set-Panda.jpg',
      price:7990,
      short:'🍣 40 шт суши + 🍕 пеперони',
      desc:'🍣 Филадельфия — 10 шт\n🍣 Цезарь — 10 шт\n🍣 Калифорния запечённый — 10 шт\n🍣 Темпура — 10 шт\n\n🍕 Пеперони — 1 шт'
    },

    {
      name:'Пусан',
      slug:'pusan',
      category:'small',
      popular:false,
      img:'images/sets/Set-Pusan.jpg',
      price:8990,
      short:'🍣 40 шт суши + 🟡 шарики + 🍕 2 пиццы',
      desc:'🍣 Филадельфия — 10 шт\n🍣 Америка — 10 шт\n🍣 Цезарь запечённый — 10 шт\n🍣 Капа маки — 10 шт\n\n🟡 Шарики — 1 шт\n\n🍕 Пеперони — 2 шт'
    },

    {
      name:'Рио',
      slug:'rio',
      category:'small',
      popular:false,
      img:'images/sets/Set-Rio.jpg',
      price:7990,
      short:'🍣 50 шт суши + 🍕 пеперони',
      desc:'🍣 Филадельфия — 10 шт\n🍣 Америка темпура — 10 шт\n🍣 Цезарь — 10 шт\n🍣 Цезарь запечённый — 10 шт\n🍣 Капа маки — 10 шт\n\n🍣 Америка - 10 шт \n\n🍕 Пеперони — 1 шт'
    },


    {
      name:'Лайнер',
      slug:'layner',
      category:'big',
      popular:false,
      img:'images/sets/Set-Lainer.jpg',
      price:19990,
      short:'🍣 100 шт суши + 🍕 3 пиццы + 🍗 крылышки',
      desc:'🍣 Филадельфия — 10 шт\n🍣 Филадельфия маки — 10 шт\n🍣 Америка — 10 шт\n🍣 Цезарь темп — 20 шт\n🍣 Бонито с краб — 10 шт\n🍣 ПАК ролл — 10 шт\n🍣 Зверь ролл — 10 шт\n🍣 Калифорния с тобик — 10 шт\n🍣 Америка маки — 10 шт\n\n🍕 Пеперони — 2 шт\n🍕 Маргарита — 1 шт\n\n🍗 Крылышки — 30 шт'
    },

    {
      name:'Актив',
      slug:'aktiv',
      category:'small',
      popular:false,
      img:'images/sets/Set-Aktiv.jpg',
      price:9990,
      short:'🍣 60 шт суши + 🍕 пицца + 🍗 нагетсы + 🍟 фри + 🥤 кола',
      desc:'🍣 Филадельфия — 10 шт\n🍣 Америка темп — 10 шт\n🍣 Томато — 10 шт\n🍣 Цезарь запеч — 10 шт\n🍣 Криспи Цезарь — 10 шт\n🍣 Инь Янь — 10 шт\n\n🍕 Маргарита — 1 шт\n\n🍗 Нагетсы — 6 шт\n🍟 Фри — 1 шт\n\n🥤 Кола — 1 л'
    },

    {
      name:'Император',
      slug:'imperator',
      category:'big',
      popular:false,
      img:'images/sets/Set-Imperator.jpg',
      price:10490,
      short:'🍣 50 шт суши + 🍗 крылышки + 🍘 саше + 🍕 4 сезона + 🍟 фри',
      desc:'🍣 Филадельфия — 20 шт\n🍣 Калифорния — 10 шт\n🍣 Америка — 10 шт\n🍣 Ролл Блинчик — 10 шт\n\n🍗 Крылышки — 7 шт\n\n🍘 Саше — 4 шт\n\n🍕 4 сезона — 1 шт\n\n🍟 Фри — 1 шт'
    },

    {
      name:'Че там',
      slug:'chetam',
      category:'small',
      popular:false,
      img:'images/sets/Set-CheTam.jpg',
      price:9490,
      short:'🍣 60 шт суши + 🍕 маргарита + 🍟 фри + 🥤 кола',
      desc:'🍣 Филадельфия — 10 шт\n🍣 Америка темпура — 10 шт\n🍣 Цезарь темп — 10 шт\n🍣 Цезарь запечённый — 10 шт\n🍣 Капа маки — 10 шт\n🍣 Бонито — 10 шт\n\n🍕 Маргарита — 1 шт\n🍟 Фри — 1 шт\n🥤 Кола — 1 л'
    },

    {
      name:'Вавилон',
      slug:'vavilon',
      category:'big',
      popular:false,
      img:'images/sets/Set-Vavilon.jpg',
      price:16490,
      short:'🍣 100 шт суши + 🍕 3 пицца',
      desc:'🍣 Филадельфия — 10 шт\n🍣 Филадельфия маки — 10 шт\n🍣 Америка — 10 шт\n🍣 Цезарь темп — 20 шт\n🍣 Бонито краб — 10 шт\n🍣 ПАК ролл — 10 шт\n🍣 Зверь ролл — 10 шт\n🍣 Калифорния с тобико — 10 шт\n🍣 Америка маки — 10 шт\n\n🍕 Пеперони — 2 шт\n🍕 Маргарита — 1 шт'
    },

    {
      name:'Великолепный',
      slug:'velikolepnyi',
      category:'big',
      popular:false,
      img:'images/sets/Set-Velikolepni.jpg',
      price:15990,
      short:'🍣 100 шт суши + 🍕 3 пицца',
      desc:'🍣 Филадельфия — 20 шт\n🍣 Калифорния — 10 шт\n🍣 Инь Янь — 10 шт\n🍣 Темпура — 30 шт\n🍣 Цезарь запечённый — 10 шт\n\n🍣 Цезарь — 20 шт\n🍕 Пеперони — 1 шт\n🍕 Маргарита — 1 шт\n🍕 4 сезона — 1 шт'
    },

    {
      name:'Космос',
      slug:'kosmos',
      category:'big',
      popular:false,
      img:'images/sets/Set-Kosmos.jpg',
      price:18990,
      short:'🍣 100 шт суши + 🍕 5 Пицца',
      desc:'🍣 Филадельфия — 20 шт\n🍣 Калифорния с тобико — 10 шт\n🍣 Инь Янь — 10 шт\n🍣 Цезарь темп — 30 шт\n🍣 Америка — 30 шт\n\n🍕 4 сезона — 1 шт\n🍕 Маргарита — 1 шт\n🍕 Пеперони — 2 шт\n🍕 Грибная — 1 шт'
    },
    {
      name:'Экономный',
      slug:'ekonomnyi',
      category:'small',
      popular:false,
      img:'images/sets/Set-Economni.jpg',
      price:8990,
      short:'🍣 60 шт суши + 🍕 пеперони',
      desc:'🍣 Филадельфия — 10 шт\n🍣 Калифорния — 10 шт\n🍣 Цезарь — 10 шт\n🍣 Темпура — 10 шт\n🍣 Капа маки — 10 шт\n🍣 Сяке маки — 10 шт\n\n🍕 Пеперони — 1 шт'
    },

    {
      name:'Шарага',
      slug:'sharaga',
      category:'small',
      popular:true,
      img:'images/sets/Set-Sharаga.jpg',
      price:7000,
      short:'🍣 50 шт суши + 🍕 пицца + 🥤 кола',
      desc:'🍣 Цезарь — 20 шт\n🍣 Америка — 10 шт\n🍣 Калифорния — 10 шт\n🍣 Каппа маки — 10 шт\n\n🍕 Пеперони — 1 шт\n\n🥤 Кола — 1л'
    },

    {
      name:'Тик ток',
      slug:'tiktok',
      category:'big',
      popular:false,
      img:'images/sets/Set-TikTok.jpg',
      price:23490,
      short:'🍣 120 шт суши + 🍕 4 пицца + 🍗 нагетсы + 🍟 фри',
      desc:'🍣 Филадельфия — 40 шт\n🍣 Цезарь — 20 шт\n🍣 Америка — 30 шт\n🍣 ПАК ролл — 10 шт\n🍣 Цезарь запеченный — 10 шт\n🍣 Блинчик — 10 шт\n\n🍕 Пеперони — 2 шт\n🍕 4 Сезона — 2 шт\n\n🍗 Нагетсы — 6 шт\n🍟 Фри — 1 шт'
    },

    {
      name:'Саламалейкум',
      slug:'salamaleikum',
      category:'big',
      popular:false,
      img:'images/sets/Set-Salamalekum.jpg',
      price:22500,
      short:'🍣 100 шт суши + 🍔 4 бургер + 🍗 крылышки + 🍕 3 пицца',
      desc:'🍣 Цезарь — 20 шт\n🍣 Филадельфия — 20 шт\n🍣 Америка — 20 шт\n🍣 Овощной — 10 шт\n🍣 Калифорния — 10 шт\n🍣 Цезарь запеченный — 20 шт\n\n🍔 Бургер — 4шт\n\n🍗 крылышки — 16 шт\n\n🍕 Пеперони — 3 шт'
    },

    {
      name:'Санта-Круз',
      slug:'santa',
      category:'small',
      popular:false,
      img:'images/sets/Set-SantaKruz.jpg',
      price:7500,
      short:'🍣 40 шт суши + 🍕 пицца',
      desc:'🍣 Филадельфия — 10 шт\n🍣 Америка — 20 шт\n🍣 Цезарь — 10 шт\n\n🍕 Маргарита — 1 шт'
    },

    {
      name:'Сараагаш',
      slug:'saraagash',
      category:'small',
      popular:false,
      img:'images/sets/Set-Saraagash.jpg',
      price:7300,
      short:'🍣 60 шт суши + 🍕 пицца + 🍗 нагетсы + 🍟 фри + 🥤 кола',
      desc:'🍣 Филадельфия — 10 шт\n🍣 Америка — 10 шт\n🍣 Томато — 10 шт\n🍣 Цезарь — 10 шт\n🍣 Цезарь запеченный — 10 шт\n🍣 Инь-Янь — 10 шт\n\n🍕 Маргарита — 1 шт\n\n🍗 Нагетсы — 6 шт\n🍟 Фри 1\n\n🥤 Кола 1л'
    },

    {
      name:'Сарыагаш',
      slug:'saryagash',
      category:'big',
      popular:false,
      img:'images/sets/Set-Saryagash.jpg',
      price:11000,
      short:'🍣 70 шт суши + 🌭 корн-дог + 🍟 фри + 🍕 2 пиццы + 🟡 шарики + 🥤 кола',
      desc:'🍣 Цезарь — 30 шт\n🍣 Америка — 20 шт\n🍣 Калифорния — 10 шт\n🍣 Капа-маки — 10 шт\n\n🍕 Пеперони — 2 шт\n\n🌭 Корндог — 5 шт\n🍟 1 — Фри\n🟡 1 — Шарики\n\n🥤 Кола 1л'
    },

    {
      name:'Пират',
      slug:'pirat',
      category:'big',
      popular:true,
      img:'images/sets/Set-Pirat.jpg',
      price:28000,
      short:'🍣 200 шт суши + 🍕 4 пиццы',
      desc:'🍣 Филадельфия — 40 шт\n🍣 Америка — 60 шт\n🍣 Цезарь — 60 шт\n🍣 Калифорния — 20 шт\n🍣 Гейша — 20 шт\n\n🍕 4 Сезона — 1 шт\n🍕 Маргарита — 1 шт\n🍕 Пеперони — 2 шт'
    },

    {
      name:'Муфаса',
      slug:'mufasa',
      category:'big',
      popular:true,
      img:'images/sets/Set-Mufasa.jpg',
      price:16000,
      short:'🍣 60 шт суши + 🍕 3 пиццы + 🍔 3 бургер + 🍗 крылышки',
      desc:'🍣 Гейша — 10 шт\n🍣 Филадельфия — 10 шт\n🍣 Америка — 20 шт\n🍣 Цезарь — 20 шт\n\n🍕 Пеперони — 2 шт\n🍕 4 Сезона — 1 шт\n\n🍔 Бургер — 4 шт\n🍗 Крылышки — 8 шт'
    },

    {
      name:'Народный',
      slug:'narodnyi',
      category:'small',
      popular:false,
      img:'images/sets/Set-Narodnyi.jpg',
      price:8500,
      short:'🍣 10 шт суши + 🌯 лаваш + 🍕 пицца + 🍟 фри + 🍔 2 бургер + 🥤 кола',
      desc:'🍣 Цезарь запеченный — 10 шт\n\n🍕 Пеперони — 1 шт\n\n🍟 Фри — 2 шт\n🌯 Лаваш — 1 шт\n🍔 Бургер — 2 шт\n\n🥤 Кола 1л'
    },

    {
      name:'Нью-Йорк',
      slug:'newyork',
      category:'small',
      popular:false,
      img:'images/sets/Set-NewYork.jpg',
      price:5500,
      short:'🍣 40 шт суши + 🍕 пицца',
      desc:'🍣 Цезарь — 20 шт\n🍣 Америка — 10 шт\n🍣 Калифорния — 10 шт\n\n🍕 Маргарита — 1 шт'
    },

    {
      name:'Особое',
      slug:'osoboe',
      category:'small',
      popular:false,
      img:'images/sets/Set-Osoboe.jpg',
      price:7000,
      short:'🍣 20 шт суши + 🌯 лаваш + 🍟 фри + 🍔 бургер + 🥤 кола',
      desc:'🍣 Цезарь — 10 шт\n🍣 Цезарь запеченный — 10 шт\n\n🌯 Лаваш — 1 шт\n🍔 Бургер — 1 шт\n🍟 Фри — 1 шт\n\n🥤 Кола 1д'
    },

    {
      name:'Пак',
      slug:'pak',
      category:'small',
      popular:true,
      img:'images/sets/Set-Pak.jpeg',
      price:7000,
      short:'🍣 50 шт суши + 🍕 пицца + 🥤 кола',
      desc:'🍣 Калифорния — 10 шт\n🍣 Капа-маки — 10 шт\n🍣 Цезарь запеченный — 10 шт\n🍣 Цезарь — 10 шт\n🍣 Америка — 10 шт\n\n🍕 Пеперони — 1 шт\n\n🥤 Кола 1л'
    },

    {
      name:'Любимый',
      slug:'lyubimyi',
      category:'small',
      popular:false,
      img:'images/sets/Set-Lyubimyi.jpg',
      price:9500,
      short:'🍣 20 шт суши + 🍕 3 пиццы + 🍟 фри + 🥤 кола',
      desc:'🍣 Цезарь — 10 шт\n🍣 Цезарь запеченный — 10 шт\n\n🍕 Пеперони — 2 шт\n🍕 Маргарита — 1 шт\n\n🍟 Фри — 1 шт \n\n🥤 Кола 1л'
    },

    {
      name:'Мега',
      slug:'mega',
      category:'big',
      popular:false,
      img:'images/sets/Set-Mega.jpg',
      price:14500,
      short:'🍕 5 пиццы + 🍣 10 шт суши + 🍗 крылышки + 🍟 2 фри + 🎁 2л кола',
      desc:'🍕 Пеперони — 3 шт\n🍕 4 Сезона — 1 шт\n🍕 Сырный — 1 шт\n\n🍣 Цезарь запеченный — 10 шт\n\n🍗 Крылышки — 8 шт\n🍟 Фри — 2 шт\n\n🎁🎁🎁\n🥤 Кола 2л'
    },

    {
      name:'Корпаратив',
      slug:'korporativ',
      category:'big',
      popular:false,
      img:'images/sets/Set-Korporativ.jpg',
      price:24990,
      short:'🍕 3 пиццы + 🌯 2 лаваш + 🍔 бургер + 🍟 фри + 🎁 2л кола',
      desc:'🍕 Пеперони — 2 шт\n🍕 Сырный — 1 шт\n\n🌯 Лаваш — 2 шт\n🍔 Бургер — 1 шт\n🍟 Фри — 1 шт\n\n🎁🎁🎁\n🥤 Кола 2л'
    },

    {
      name:'Катя',
      slug:'katya',
      category:'small',
      popular:false,
      img:'images/sets/Set-Katya.jpg',
      price:7000,
      short:'🍣 50 шт суши + 🍕 пицца',
      desc:'🍣 Цезарь — 20 шт\n🍣 Капа-маки — 20 шт\n🍣 Америка — 10 шт\n\n🍕 Пеперони — 1 шт'
    },

    {
      name:'Зал',
      slug:'zvl',
      category:'small',
      popular:false,
      img:'images/sets/Set-Zal.jpg',
      price:7000,
      short:'🍣 40 шт суши + 🍕 пицца + 🎁 кола',
      desc:'🍣 Цезарь — 20 шт\n🍣 Америка — 10 шт\n🍣 Калифорния — 10 шт\n\n🍕 Пеперони — 1 шт\n\n🎁🎁🎁\n🥤 Кола 1л'
    },

    {
      name:'Комбо 1',
      slug:'kombo1',
      category:'small',
      popular:false,
      img:'images/sets/Set-Kombo1.jpg',
      price:4800,
      short:'🍔 2 бургер + 🍣 10 шт суши + 🍟 фри + 🎁 кола',
      desc:'🍔 Бургер — 2 шт\n\n🍣 Цезарь — 10 шт\n\n🍟 Фри — 1 шт\n\n🎁🎁🎁\n🥤 Кола 1л'
    },

    {
      name:'Комбо 2',
      slug:'kombo2',
      category:'small',
      popular:false,
      img:'images/sets/Set-Kombo2.jpg',
      price:6500,
      short:'🍔 2 бургер + 🌯 лаваш + 🍟 фри + 🍣 10 шт суши + 🎁 fuse-tea',
      desc:'🍔 Бургер — 2 шт\n🌯 Лаваш — 1 шт\n🍟 Фри — 1 шт\n\n🍣 Цезарь — 10 шт\n\n🎁🎁🎁\n🥤 Fuse-tea 1л'
    },

    {
      name:'Комбо 3',
      slug:'kombo3',
      category:'small',
      popular:false,
      img:'images/sets/Set-Kombo3.jpg',
      price:8000,
      short:'🍔 3 бургер + 🌯 2 лаваш + 🍟 фри + 🍣 10 шт суши + 🎁 coca-cola',
      desc:'🍔 Бургер — 3 шт\n🌯 Лаваш — 2 шт\n🍟 Фри — 1 шт\n\n🍣 Цезарь — 10 шт\n\n🎁🎁🎁\n🥤 Coca-cola 1л'
    },

    {
      name:'Комбо 5',
      slug:'kombo5',
      category:'small',
      popular:false,
      img:'images/sets/Set-Kombo5.jpg',
      price:10000,
      short:'🍔 5 бургер + 🍣 20 шт суши + 🍟 2 фри + 🎁 2л coca-cola',
      desc:'🍔 Бургер — 5 шт\n\n🍣 Цезарь — 10 шт\n🍣 Цезарь запеченный — 10 шт\n\n🍟 Фри — 2 шт\n\n🎁🎁🎁\n🥤 Кола 2л  '
    },

    {
      name:'Аригато',
      slug:'arigato',
      category:'small',
      popular:false,
      img:'images/sets/Set-Arigato.jpg',
      price:9500,
      short:'🍣 40 шт суши + 🍕 пицца + 🍟 фри + 🍔 2 бургер',
      desc:'🍣 Филадельфия — 10 шт\n🍣 Америка — 10 шт\n🍣 Цезарь — 10 шт\n🍣 Цезарь запеченный — 10 шт\n\n🍕 Пеперони — 1 шт\n\n🍟 Фри — 1 шт\n🍔 Бургер(куриный) — 2 шт'
    },

    {
      name:'Атом',
      slug:'atom',
      category:'big',
      popular:false,
      img:'images/sets/Set-Atom.jpg',
      price:22290,
      short:'🍣 120 шт суши + 🍕 6 пиццы + 🟡 шарики + 🍗 крылышки',
      desc:'🍣 Филадельфия — 20 шт\n🍣 Цезарь — 20 шт\n🍣 Америка — 30 шт\n🍣 Аляска — 20 шт\n🍣 Калифорния запеченный — 10 шт\n🍣 Зеленый зверь — 20 шт\n\n🍕 Пеперони — 2 шт\n🍕 Маргарита — 2 шт\n🍕 4 Сезона — 2 шт\n\n🟡 Шарики\n🍗 Крылышки — 8 шт'
    },

    {
      name:'Алматы',
      slug:'almaty',
      category:'small',
      popular:false,
      img:'images/sets/Set-Almaty.jpg',
      price:9000,
      short:'🍣 40 шт суши + 🍕 2 пиццы + 🍘 саше',
      desc:'🍣 Цезарь — 20 шт\n🍣 Цезарь запеченный — 10 шт\n🍣 Америка — 10 шт\n\n🍕 Пеперони — 1 шт\n🍕 4 Сезона — 1 шт\n\n🍘 Саше — 4 шт'
    },

    {
      name:'Челлендж',
      slug:'challenge',
      category:'big',
      popular:false,
      img:'images/sets/Set-Chellendge.jpg',
      price:10500,
      short:'🍣 60 шт суши + 🍕 2 пиццы',
      desc:'🍣 Филадельфия — 20 шт\n🍣 Цезарь — 20 шт\n🍣 Америка — 20 шт\n\n🍕 Пеперони — 1 шт\n🍕 4 Сезона — 1 шт'
    },

  ],

  sushi: [
    {name:'Цезарь Classic', price:1890, img:'images/blyudo/Sezar-Cl.jpg'},
    {name:'Цезарь с помидором', price:1890, img:'images/blyudo/Sezar-Pomidor.jpg'},
    {name:'Цезарь запечённый', price:1990, img:'images/blyudo/Sezar-Zap.jpg'},
    {name:'Сяке Темпура', price:2190, img:'images/blyudo/Sake-Tem.jpg'},
    {name:'Филадельфия', price:2190, img:'images/blyudo/Filadelfia.jpg'},
    {name:'Канада', price:2090, img:'images/blyudo/Kanada.jpg'},
    {name:'Унаги Темпура', price:1990, img:'images/blyudo/Unagi-Tem.jpg'},
    {name:'Аляска', price:1890, img:'images/blyudo/Alyaska.jpg'},
    {name:'Калифорния с крабом', price:1890, img:'images/blyudo/Kalifornia.jpg'},
    {name:'Калифорния с ласосьем', price:2090, img:'images/blyudo/Kalifornia.jpg'},
    {name:'Калифорния запечённый', price:1990, img:'images/blyudo/Kalifornia-zap.jpg'},
    {name:'Бонита', price:1790, img:'images/blyudo/Bonita.jpg'},
    {name:'Сингапур', price:2090, img:'images/blyudo/Singapure.jpg'},
    {name:'Капа Маки', price:890, img:'images/blyudo/Kapa-Maki.jpg'},
    {name:'Капа-маки с ласосьем запечённый', price:2190, img:'images/blyudo/Zap-SUgr.jpg'},
    {name:'Дракон (с помидором)', price:1890, img:'images/blyudo/Drakon-Lasos.jpg'},
    {name:'Сяке Запечённый', price:2390, img:'images/blyudo/Sake-Zap.jpg'},
    {name:'Сяше пончик ласось', price:2190, img:'images/blyudo/Cyashe lasos.jpg'},
    {name:'Сяше пончик куриный', price:1990, img:'images/blyudo/Cyashe lasos.jpg'},
    {name:'Гункан', price:1290, img:'images/blyudo/Gunkan.jpg'},
  ],
  pizza: [
    {name:'Маргарита', price:2090, img:'images/blyudo/Pizza-Margarita.jpg'},
    {name:'4 Сезона', price:2390, img:'images/blyudo/Pizza-4Sezon.jpg'},
    {name:'Пепперони', price:2090, img:'images/blyudo/Pizza-Peperoni.jpg'},
    {name:'Сырный', price:1890, img:'images/blyudo/Pizza-Boloneze.jpg'},
    {name:'Куриная', price:2090, img:'images/blyudo/Pizza-Chiken.jpg'},
  ],
  snacks: [
    {name:'Лаваш (Куриный)', price:1150, img:'images/blyudo/Lavash.jpg'},
    {name:'Лаваш (Куриный Сыр)', price:1290, img:'images/blyudo/Lavash-Kurini.jpg'},
    {name:'Лаваш (Говяжий)', price:1290, img:'images/blyudo/Lavash.jpg'},
    {name:'Лаваш (Говяжий Сыр)', price:1390, img:'images/blyudo/Lavash-Goviazhi.jpg'},
    {name:'Бургер (Куриный)', price:1090, img:'images/blyudo/Burger-K.jpg'},
    {name:'ЧизБургер (Куриный)', price:1290, img:'images/blyudo/Burger-K.jpg'},
    {name:'Биг ЧизБургер (Куриный)', price:1590, img:'images/blyudo/Burger-K2x.jpg'},
    {name:'Бургер (Говяжий)', price:1190, img:'images/blyudo/Burger-G.jpg'},
    {name:'ЧизБургер (Говяжий)', price:1390, img:'images/blyudo/Burger-G.jpg'},
    {name:'Биг ЧизБургер (Говяжий)', price:1690, img:'images/blyudo/Burger-G2x.jpg'},
    {name:'Нагетсы 8шт', price:1490, img:'images/blyudo/Nagetsi.jpg'},
    {name:'Кортофельные шарики 16шт', price:700, img:'images/blyudo/K-Shariki.jpg'},
    {name:'Фри', price:700, img:'images/blyudo/Free.jpg'},
    {name:'Куриные крылышки 8шт', price:1490, img:'images/blyudo/Krilishki.jpg'},
    {name:'Куриные крылышки 16шт', price:2790, img:'images/blyudo/Krilishki.jpg'},
    {name:'Куриные крылышки 24шт', price:4280, img:'images/blyudo/Krilishki.jpg'},
    {name:'Куриные крылышки 32шт', price:5580, img:'images/blyudo/Krilishki.jpg'},
    {name:'Корн дог 5шт', price:1290, img:'images/blyudo/Korn-Dog.jpg'},
    {name:'Сырные палочки 6шт', price:1290, img:'images/blyudo/S-Palochki.jpg'}
  ],
  drinks: [
    {name:'Фанта 1л', price:700, img:'images/blyudo/Fanta.png'},
    {name:'Кола 1л', price:700, img:'images/blyudo/Kola.jpg'},
    {name:'Фьюс-ти 1л', price:700, img:'images/blyudo/Fuse.jpg'},
    {name:'Макси чай 1л', price:700, img:'images/blyudo/Maxi.jpg'},
    {name:'Пепси 1л', price:700, img:'images/blyudo/Pepsi.jpg'},
    {name:'Пико сок 1л', price:800, img:'images/blyudo/Piko.png'},
    {name:'Фанта 2л', price:900, img:'images/blyudo/Fanta-2l.jpg'},
    {name:'Кола 2л', price:900, img:'images/blyudo/Kola-2l'},
    {name:'Макси чай 2л', price:900, img:'images/blyudo/Maxi-2l.jpg'},
    {name:'Горилла', price:600, img:'images/blyudo/Gorilla.jpg'},
    {name:'Диззи', price:600, img:'images/blyudo/Dizzy.png'},
    {name:'Чай бокал', price:150, img:'images/blyudo/Tea-Cup.jpg'},
    {name:'Чай чайник', price:300, img:'images/blyudo/Tea.jpg'},
    {name:'Кофе бокал', price:200, img:'images/blyudo/Coffee-Cup.jpg'},
    {name:'Кофе 3в1', price:300, img:'images/blyudo/Coffee-3v1.jpg'},
    {name:'Айран', price:250, img:'images/blyudo/Ayran.jpg'},
    {name:'Нан', price:150, img:'images/blyudo/Nan.jpg'},
    {name:'Чесночный соус', price:150, img:'images/blyudo/Ch-Sous.jpg'},
    {name:'Сырный соус', price:150, img:'images/blyudo/S-Sous.jpg'},
    {name:'Томатный соус', price:150, img:'images/blyudo/T-Sous.jpg'},
    {name:'Халапеньо', price:150, img:'images/blyudo/Halapeno.png'}
  ]
};

const WA_NUMBER = "77057210505"; // +7 778 874 5750
function kzt(n){ return new Intl.NumberFormat('ru-RU').format(n) + " ₸"; }

/* ===== Рендер карточек ===== */
function makeCard(item, kind){
  const card = document.createElement('div');
  card.className = 'card';

  // PHOTO
  const img = document.createElement('img');
  img.className = 'img';
  img.src = item.img;
  card.appendChild(img);

  img.onclick = e => {
    e.stopPropagation();
    openFullscreen(item.img);
  };

  // CONTENT BLOCK
  const content = document.createElement('div');
  content.className = 'card-content';

  // PRICE
  const price = document.createElement('div');
  price.className = 'card-price';
  price.textContent = kzt(item.price);
  content.appendChild(price);

  // TITLE
  const title = document.createElement('div');
  title.className = 'card-title';
  title.textContent = item.name;
  content.appendChild(title);

  // DESC
  if(item.short){
    const desc = document.createElement('div');
    desc.className = 'card-desc';
    desc.textContent = item.short;
    content.appendChild(desc);
  }

  // BUTTON
  const btn = document.createElement('button');
  btn.className = 'card-btn';
  btn.textContent = "Заказать";

  btn.onclick = e => {
    e.stopPropagation();
    const text = `Здравствуйте, я хочу заказать "${item.name}"`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`);
  };

  content.appendChild(btn);

  card.appendChild(content);

  // OPEN MODAL
  card.onclick = () => openModal(item, kind === 'sets');

  return card;
}



function renderList(key, rootId, items){
  const root = document.getElementById(rootId);
  root.innerHTML = '';
  items.forEach(item => root.appendChild(makeCard(item, key)));
}

function renderAll(){
  renderList('sets','sets-list', getFilteredSets());
  renderList('sushi','sushi-list', DATA.sushi);
  renderList('pizza','pizza-list', DATA.pizza);
  renderList('snacks','snacks-list', DATA.snacks);
  renderList('drinks','drinks-list', DATA.drinks);
}

/* ===== Поиск и фильтры сетов ===== */
const activeTags = new Set();
const searchInput = document.getElementById('set-search');
const clearBtn = document.getElementById('search-clear');
const chipsRoot = document.getElementById('chips');

chipsRoot.addEventListener('click', (e) => {
  if(!e.target.classList.contains('chip')) return;

  const tag = e.target.dataset.tag;

  // ====== ALL (ВСЕ) ======
  if(tag === 'all'){
    activeTags.clear();
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    e.target.classList.add('active');
    renderAll();
    return;
  }

  // ====== Обычные фильтры ======
  // (популярные, большие, малые)
  if(activeTags.has(tag)){
    activeTags.delete(tag);
    e.target.classList.remove('active');
  }else{
    activeTags.add(tag);
    e.target.classList.add('active');
  }

  renderAll();
});


searchInput.addEventListener('input', () => renderAll());
clearBtn.addEventListener('click', () => { searchInput.value=''; renderAll(); });

function getFilteredSets(){
  const q = (searchInput.value || '').trim().toLowerCase();

  return DATA.sets.filter(item => {
    const text = (item.name + ' ' + (item.short || '') + ' ' + (item.desc || '')).toLowerCase();
    const matchQ = q === '' || text.includes(q);

    // тег фильтрлері
    if (activeTags.has('popular') && !item.popular) return false;
    if (activeTags.has('big') && item.category !== 'big') return false;
    if (activeTags.has('small') && item.category !== 'small') return false;

    return matchQ;
  });
}


/* ===== Модальное окно ===== */
const modal = document.getElementById('modal');
const mImg = document.getElementById('m-img');
const mTitle = document.getElementById('m-title');
const mDesc = document.getElementById('m-desc');
const mOrder = document.getElementById('m-order');
const mClose = document.getElementById('modal-close');

function openModal(item, isSet){
  mImg.src = item.img || 'images/placeholder.jpg';
  mTitle.textContent = item.name;
  mDesc.textContent = item.desc || '';
  mOrder.onclick = () => {
    const text = isSet
      ? `Здравствуйте, я хочу заказать сет "${item.name.replace(/^Сет\s+/,'')}"`
      : `Здравствуйте, хочу заказать "${item.name}"`;
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };
  modal.classList.add('show');
  modal.setAttribute('aria-hidden','false');
}

function closeModal(){
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden','true');
}

mClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e)=>{ if(e.target === modal) closeModal(); });
document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeModal(); });

/* ===== Старт ===== */
/* ===== Старт ===== */
renderAll();

/* ============================
   FULLSCREEN VIEW LOGIC
============================ */

function openFullscreen(src){
  const fsView  = document.getElementById('fs-view');
  const fsClose = document.getElementById('fs-close');
  const fsBack  = document.querySelector('#fs-view .fs-back');
  const fsContent = document.querySelector('#fs-view .fs-content');

  // очистим контент
  fsContent.innerHTML = '';

  // Если видео
  if (src.endsWith('.mp4')) {
    const v = document.createElement('video');
    v.src = src;
    v.controls = true;
    v.autoplay = true;
    v.playsInline = true;
    v.style.maxWidth = "95vw";
    v.style.maxHeight = "95vh";
    fsContent.appendChild(v);
  } 
  // Если картинка
  else {
    const img = document.createElement('img');
    img.src = src;
    img.style.maxWidth = "95vw";
    img.style.maxHeight = "95vh";
    img.style.borderRadius = "12px";
    fsContent.appendChild(img);
  }

  fsView.classList.add('show');

  const close = () => fsView.classList.remove('show');

  fsClose.onclick = close;
  fsBack.onclick = close;
}

// ===== Mobile category drawer (hamburger) =====
(function(){
  const toggle = document.getElementById('cat-toggle');
  const drawer = document.getElementById('cat-drawer');
  const backdrop = document.getElementById('cat-backdrop');
  if(!toggle || !drawer || !backdrop) return;

  const open = () => {
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden','false');
    toggle.setAttribute('aria-expanded','true');
  };
  const close = () => {
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden','true');
    toggle.setAttribute('aria-expanded','false');
  };

  toggle.addEventListener('click', (e)=>{
    e.preventDefault();
    drawer.classList.contains('open') ? close() : open();
  });
  backdrop.addEventListener('click', close);

  // Close when a category is selected
  drawer.querySelectorAll('a').forEach(a=>a.addEventListener('click', close));

  // ESC to close
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') close(); });
})();
