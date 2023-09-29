// create 3 different arrays filled with things

// rng
function rng(arr) {
  const length = arr.length
  return Math.floor((Math.random() * length))
}


// MEssage components
const poli = ["Orbán Viktor", "Gulyás Gergely", "Lázár János", "Szijjártó Péter", "Kocsis Máté", "Magyarország Kormánya" ];
const enemy = ['Brüsszel', 'az EU', 'Zelenszkij', 'az LMBTQ+ Propaganda', 'Soros', 'Gyurcsány', "a Nyugat", "a dollárbaloldal", "Amerika"];

const message = [
  `"Ne Hagyjuk hogy *VARIABLE* nevessen a végén!"`
  ,
  `"*VARIABLE* elárulja Magyarországot és az európai embereket`, `Karácsony és *VARIABLE* együtt bontanák le a határzárakat"`,
  `"Védjük meg *VARIABLE*tól a gyermekeinket!"`,
  `"*VARIABLE* a felelős, ezt felírtam magamnak."`,
  `"Már *VARIABLE* is azt üzeni Zelenszkijnek, hogy mondjon le, és meneküljön el Ukrajnából."`,
  `"*VARIABLE* belesodorna minket a háborúba!"`,
  `"Önnek is joga van tudni, mire készül *VARIABLE*!"`,
  `"Állítsuk meg *VARIABLE*t!"`,
  `"*VARIABLE* újra támadásba lendül?"`,
  `"Felháborítja önt *VARIABLE*?"`,
  `"Tart attól hogy visszatér a *VARIABLE* korszak?"`,

  `"A Fidesz szerint a *VARIABLE* mélyen átszövi Európát és Magyarországot: sok szervezettel, politikussal rendelkezik a magyar baloldalon és a brüsszeli döntéshozatalban is."`,
  `"Magyarország nem fogja hagyni magát! Nem hagyjuk, hogy *VARIABLE* káoszba sodorja hazánkat, a régiót vagy Európát! Továbbra is nemet mondunk a migrációra, a genderre és a háborúra."`,
  `"Magyarországot *VARIABLE* folyamatosan támadja, és „ki akarják csavarni a kezünkből azokat a szabályozó eszközöket, melyekkel a családokat védjük."`,
  `"idei évnek hatalmas tétje van, ugyanis *VARIABLE*, megerősítve a kormányzó amerikai demokratákkal, Góliátként indít támadást az európai országok többségében a jobboldali média és sokszor pénz nélkül politizáló lelkes nemzeti pártok ellen."`,
  `"A miniszter szerint nem helyes, hogy *VARIABLE* finanszíroz magyar médiumokat. Úgy véli, ez nem segíti az objektív tájékoztatást."`,
  `"nem lesz szükség megszorításokra, de ha *VARIABLE* nem blokkolná a forrásokat, akkor komolyabb kiigazítások nélkül tartható lenne a hiánycél."`,
  `"Uniós ügyekben az egészségügynek járó, az Erasmus programhoz kapcsolódó és a tanárok fizetésemelését biztosító pénzeket vár a kormámy. Ezen utalások elmaradása miatt bírálta a miniszter *VARIABLE*t, amely szerinte közösségi jogalap nélkül húzza az időt."`
  ];


// message randomizer


function randomizer(mes2, mes3) {
  let enemyName = mes3[rng(mes3)];
  let message = mes2[rng(mes2)].replace('*VARIABLE*', `${enemyName}`);
  return message;
}


//  making webpage interactive
// console.log(randomizer(name, message, enemy));
const button = document.getElementById('button');
const quotation = document.querySelector('h2');
const politician = document.querySelector('h3')

button.addEventListener('click', function() {
  quotation.innerText = (randomizer(message, enemy))
  politician.innerText = poli[rng(poli)]

});
