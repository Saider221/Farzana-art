const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
  await prisma.painting.createMany({
    data: [
        {
            id: 1,
            title: "Мактуб",
            description: "Авторская картина «Мактуб», размер 80×80, материалы: текстурная паста, золотая поталь, акрил и позолоченные украшения. Картина создана на основе древней арабской сказки Маджнун ва Лейла.",
            imageUrl: "https://90f1661d-2ff4-4f29-b07c-0e47453ca691.selstorage.ru/site933898/6a14f597-5277-4cad-a71c-ad4f4a526e30/6a14f597-5277-4cad-a71c-ad4f4a526e30-9940521.jpeg",
            instagramLink: "https://instagram.com/your_artist_profile",
            price: 15000,
          },
          {
            id: 2,
            title: "Цветок пустыни",
            description: "Картина 50×40, акрил. Картина написана по мотивам персидской сказки о любви «Габбех». История о том, как девушка мечтает сбежать вместе с возлюбленным и скрыться в бесконечной пустыне - это вечно перерождающийся из поколения в поколение аксиома Ближнего Востока.",
            imageUrl: "https://90f1661d-2ff4-4f29-b07c-0e47453ca691.selstorage.ru/site933898/81cd4e94-4999-4293-85b4-06963f42c388/81cd4e94-4999-4293-85b4-06963f42c388-10631988.jpeg",
            instagramLink: "https://instagram.com/your_artist_profile",
            price: 7000
          },
          {
            id: 3,
            title: "Расплавленное солнце",
            description: "Размер 100х90, материалы: текстурная паста, акрил, золотая поталь, выполнена в технике состаривания. Картина из далеких песчаных барханов. Где снежные барханы мерцают. Где злой султан вечно правит...",
            imageUrl: "https://90f1661d-2ff4-4f29-b07c-0e47453ca691.selstorage.ru/site933898/91786e0a-9e4a-437c-a0f7-e6a3d21c4c9c/91786e0a-9e4a-437c-a0f7-e6a3d21c4c9c-9940519.jpeg",
            instagramLink: "https://instagram.com/your_artist_profile",
            price: 10000
          },
          {
            id: 4,
            title: "Юдифь",
            description: "Картина 100х90, текстурная паста, золотая поталь, акрил, позолоченные бусы. Картина выполнена в технике \"скульптурная живопись\". Сюжет картины - картина австрийского художника Густава Климта на известный библейский сюжет. В картине Юдифь несет в себе идею всепоглощающей, обволакивающей власти женского очарования и тайны женского начала. Отличный подарок для восхитительных женщин и мужчин, которые понимают женскую природу",
            imageUrl: "https://90f1661d-2ff4-4f29-b07c-0e47453ca691.selstorage.ru/site933898/058ddbb6-b446-43d1-af66-0cd62f3e8edc/058ddbb6-b446-43d1-af66-0cd62f3e8edc-9940529.jpeg",
            instagramLink: "https://instagram.com/your_artist_profile",
            price: 20000
          },
          {
            id: 5,
            title: "Габбех",
            description: "Картина 100х80, текстурная паста, золотая поталь, акрил, позолоченные бусы. Картина выполнена в технике скульптурная живопись. Мотив картины это любовь как жертвенный алтарь, где сгорают души и сердца вечных возлюбленных...",
            imageUrl: "https://90f1661d-2ff4-4f29-b07c-0e47453ca691.selstorage.ru/site933898/7d7b5279-dcdb-44c5-b8b3-949922c88998/7d7b5279-dcdb-44c5-b8b3-949922c88998-10038546.jpeg",
            instagramLink: "https://instagram.com/your_artist_profile",
            price: 10000
          },
          {
            id: 6,
            title: "Рассвет",
            description: "Картина 30х30, масло, текстурная паста. Картина представляет с собой фантазию, которая излучает невинность и красоту. Картина чуждая, но соблазнительна...",
            imageUrl: "https://90f1661d-2ff4-4f29-b07c-0e47453ca691.selstorage.ru/site933898/ba8454d7-f341-4296-a15b-9c10103cce61/ba8454d7-f341-4296-a15b-9c10103cce61-9940518.jpeg",
            instagramLink: "https://instagram.com/your_artist_profile",
            price: 3500
          },
          {
            id: 7,
            title: "Звездная ночь",
            description: "Картина 30×40, копия картины Ван Гога. Картина написана в психическому бреду художника, тем более очаровательна и интересна. На полотне ночь окутала воображаемый город, деревья символизируют печаль, смерть. Кипарис на переднем плане - символ вечной жизни...",
            imageUrl: "https://90f1661d-2ff4-4f29-b07c-0e47453ca691.selstorage.ru/site933898/1adf49b2-692d-4718-bf20-97f507022b4c/1adf49b2-692d-4718-bf20-97f507022b4c-9940559.jpeg",
            instagramLink: "https://instagram.com/your_artist_profile",
            price: 6000
          },
          {
            id: 8,
            title: "Молитва",
            description: "Картина 50х40, текстурная паста, золотая поталь, акрил. Картина написана по мотивам суфийской мудрости «Некоторые мысли - те же молитвы. Есть мгновения, когда душа независимо от положения тела стоит на коленях».",
            imageUrl: "https://90f1661d-2ff4-4f29-b07c-0e47453ca691.selstorage.ru/site933898/0c0762f0-04cb-45ce-ab4f-ac9275f9efb5/0c0762f0-04cb-45ce-ab4f-ac9275f9efb5-9940514.jpeg",
            instagramLink: "https://instagram.com/your_artist_profile",
            price: 6000
          },
          {
            id: 9,
            title: "Посланник",
            description: "Картина 50х40, выполнена в смешанной технике, акрил, текстурная паста, золотая поталь, дополнительные элементы. Картина создано по строчкам ...у лисиц есть норы, и у птиц небесных-гнезда, а Сыну Человеческому негде и голову приклонить... ",
            imageUrl: "https://90f1661d-2ff4-4f29-b07c-0e47453ca691.selstorage.ru/site933898/0a5fedda-2f6b-4339-b784-97a6501402ba/0a5fedda-2f6b-4339-b784-97a6501402ba-9940524.jpeg",
            instagramLink: "https://instagram.com/your_artist_profile",
            price: 6000
          },
          {
            id: 10,
            title: "Пустыня",
            description: "Картина 50×40, текстурная паста, золотая поталь, акрил. Картина написанная по мотивам сказки «Сын Адама»... Как же жалок сын Адама, которому поднять камень легче, чем простить...",
            imageUrl: "https://90f1661d-2ff4-4f29-b07c-0e47453ca691.selstorage.ru/site933898/5568391b-e957-4610-ad71-8ac87206a5f8/5568391b-e957-4610-ad71-8ac87206a5f8-9940523.jpeg",
            instagramLink: "https://instagram.com/your_artist_profile",
            price: 5000
          },
          {
            id: 11,
            title: "Девушка в огне",
            description: "Картина 50х40, текстурная паста, золотая поталь, акрил. На картина изображена воинственная, смелая женщина и при этом обворожительная на вид. В этой картине мы видим настоящую страсть, блаженство, упоение",
            imageUrl: "https://90f1661d-2ff4-4f29-b07c-0e47453ca691.selstorage.ru/site933898/75c9b6c5-e1bc-40d8-b95e-81418951876b/75c9b6c5-e1bc-40d8-b95e-81418951876b-9940526.jpeg",
            instagramLink: "https://instagram.com/your_artist_profile",
            price: 3000
          },
          {
            id: 12,
            title: "Интерьерные картины",
            description: "Картины размером 30×30, текстурная паста, золотая поталь",
            imageUrl: "https://90f1661d-2ff4-4f29-b07c-0e47453ca691.selstorage.ru/site933898/ebc70d03-7e8f-46f8-8799-e69e26dd691d/ebc70d03-7e8f-46f8-8799-e69e26dd691d-9940560.jpeg",
            instagramLink: "https://instagram.com/your_artist_profile",
            price: 5000
          }
    ]
  });
  console.log('Data seeded');
}

seed().finally(() => prisma.$disconnect()); 