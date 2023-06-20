const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');
const item1El = document.querySelector('#item1');
    const sostojki1El = document.querySelector('.sostojki1');
    const cena1El = document.querySelector('.cena1');

    const Picaitem1El = document.querySelector('#Picaitem1')
    const Picasostojki1El = document.querySelector('#Picasostojki1')
    const Picacena1El = document.querySelector('#Picacena1')
    
    const Picaitem2El = document.querySelector('.Picaitem2')
    const Picasostojki2El = document.querySelector('.Picasostojki2')
    const Picacena2El = document.querySelector('.Picacena2')

  link.forEach(el => {
    el.addEventListener('click', () => {
      langEl.querySelector('.active').classList.remove('active');
      el.classList.add('active');

      const attr = el.getAttribute('language');

              Picaitem1El.textContent = data[attr].Picaitem1;
              Picasostojki1El.textContent = data[attr].Picasostojki1;
              Picacena1El.textContent = data[attr].Picacena1;
    });
  });
  
  var data = {
      "ENG": 
      {
        //bezalkoholni
           "Bezalkoholniitem1": "Coca Cola (0.25 l.) ",
           "Bezalkoholnisostojki1": "",
           "Bezalkoholnicena1": "70 ден.",

           "Bezalkoholniitem2": "Fanta (0.25 l.)",
           "Bezalkoholnisostojki2": "",
           "Bezalkoholnicena2": "70 ден.",

          "Bezalkoholniitem3": "Sprite (0.25 l.)",
           "Bezalkoholnisostojki3": "",
           "Bezalkoholnicena3": "70 ден.",

          "Bezalkoholniitem4": "Schweppes (0.25 l.)",
           "Bezalkoholnisostojki4": "",
           "Bezalkoholnicena4": "70 ден..",

          "Bezalkoholniitem5": "Tonic (0.25 l.)",
           "Bezalkoholnisostojki5": "",
           "Bezalkoholnicena5": "70 ден.",

          "Bezalkoholniitem6": "Pepsi (0.25 l.) ",
           "Bezalkoholnisostojki6": "",
           "Bezalkoholnicena6": "70 ден.",

          "Bezalkoholniitem7": "Gazosa (0.25 l.)",
           "Bezalkoholnisostojki7": "",
           "Bezalkoholnicena7": "70 mkd.",

          "Bezalkoholniitem8": "Bravo (Juice)",
           "Bezalkoholnisostojki8": "(0.25 l.)",
           "Bezalkoholnicena8": "70 mkd.",

          "Bezalkoholniitem9": "Bravo (Iced tea)",
           "Bezalkoholnisostojki9": "(0.33 l.)",
           "Bezalkoholnicena9": "70 mkd.",

          "Bezalkoholniitem10": "Rosa (Water)",
           "Bezalkoholnisostojki10": "(0.25 l.)",
           "Bezalkoholnicena10": "50 mkd.",

          "Bezalkoholniitem11": "Visiana (Water)",
           "Bezalkoholnisostojki11": "(0.7 l.)",
           "Bezalkoholnicena11": "70 mkd.",

          "Bezalkoholniitem12": "Visiana (Sparkling water)",
           "Bezalkoholnisostojki12": "(0.7 l.)",
           "Bezalkoholnicena12": "70 mkd.",

          "Bezalkoholniitem13": "Pelisterka (Carbonated)",
           "Bezalkoholnisostojki13": "(0.25 l.)",
           "Bezalkoholnicena13": "50 mkd.",

          "Bezalkoholniitem14": "Pelisterka (Carbonated)",
           "Bezalkoholnisostojki14": "(1 l.)",
           "Bezalkoholnicena14": "80 mkd.",

          //bovin

          "bovinitem1": "Alexander",
           "bovinsostojki1": "",
           "bovincena1": "1000 mkd.",

          "bovinitem2": "Merlot",
           "bovinsostojki2": "",
           "bovincena2": "1000 mkd.",

          "bovinitem3": "Cabernet Sauvignon",
           "bovinsostojki3": "",
           "bovincena3": "1000 mkd.",

          "bovinitem4": "Muscat Temjanika",
           "bovinsostojki4": "",
           "bovincena4": "1000 mkd.",



          //deserti

          "desertiitem1": "Pancake with cream and banana",
           "desertisostojki1": "",
           "deserticena1": "60 mkd.",

          "desertiitem2": "Pancake with cream and plasma cookie",
           "desertisostojki2": "",
           "deserticena2": "60 mkd.",

          "desertiitem3": "Pancake with honey and walnuts",
           "desertisostojki3": "",
           "deserticena3": "60 mkd.",

          "desertiitem4": "Sweet desert with wild figs",
           "desertisostojki4": "",
           "deserticena4": "60 mkd.",

          "desertiitem5": "Waffles with cream and banana",
           "desertisostojki5": "",
           "deserticena5": "120 mkd.",


          //dodatoci

          "dodatociitem1": "French fries (Small)",
           "dodatocisostojki1": "",
           "dodatocicena1": "80 mkd.",

          "dodatociitem2": "French fries (Large)",
           "dodatocisostojki2": "",
           "dodatocicena2": "100 mkd.",

          "dodatociitem3": "Fries (Baked)",
           "dodatocisostojki3": "",
           "dodatocicena3": "150 mkd.",

          "dodatociitem4": "Nafora bread",
           "dodatocisostojki4": "",
           "dodatocicena4": "80 mkd.",

          "dodatociitem5": "Side dish",
           "dodatocisostojki5": "(rice, baked beans, puree)",
           "dodatocicena5": "40 mkd.",


          //dorucek

          "dorucekitem1": "Omelet with cheese",
           "doruceksostojki1": "",
           "dorucekcena1": "120 mkd.",

          "dorucekitem2": "Omelet with white cheese",
           "doruceksostojki2": "",
           "dorucekcena2": "120 mkd.",

          "dorucekitem3": "Omelet with bacon",
           "doruceksostojki3": "",
           "dorucekcena3": "130 mkd.",

          "dorucekitem4": "Mixed omelet",
           "doruceksostojki4": "",
           "dorucekcena4": "140 mkd.",

          "dorucekitem5": "Kaygana omelet",
           "doruceksostojki5": "",
           "dorucekcena5": "90 mkd.",

          "dorucekitem6": "Boiled egg",
           "doruceksostojki6": "",
           "dorucekcena6": "30 mkd.",

          "dorucekitem7": "Eye shaped egg",
           "doruceksostojki7": "",
           "dorucekcena7": "30 mkd.",


          //drum

          "drumitem1": "Merlot (0.7 l.)",
           "drumsostojki1": "",
           "drumcena1": "450 mkd.",

          "drumitem2": "Vranec (0.7 l.)",
           "drumsostojki2": "",
           "drumcena2": "450 mkd.",

          "drumitem3": "Cabernet Sauvignon (0.7 l.)",
           "drumsostojki3": "",
           "drumcena3": "450 mkd.",

          "drumitem4": "Sauvignon Blanco (0.2 l.)",
           "drumsostojki4": "",
           "drumcena4": "450 mkd.",

          "drumitem5": "Smederevka",
           "drumsostojki5": "",
           "drumcena5": "270 mkd.",


          //gotveni

          "gotveniitem1": "Veal stew",
           "gotvenisostojki1": "",
           "gotvenicena1": "140 mkd.",

          "gotveniitem2": "Chicken stew ",
           "gotvenisostojki2": "",
           "gotvenicena2": "140 mkd.",

          "gotveniitem3": "Goulash",
           "gotvenisostojki3": "",
           "gotvenicena3": "180 mkd.",

          "gotveniitem4": "Village meat (1 kg.)",
           "gotvenisostojki4": "",
           "gotvenicena4": "900 mkd.",

          "gotveniitem5": "Ribs in the oven (1 kg.)",
           "gotvenisostojki5": "",
           "gotvenicena5": "800 mkd.",


          //pivo

          "pivoitem1": "Skopsko (0.5 l.)",
           "pivosostojki1": "",
           "pivocena1": "90 mkd.",

          "pivoitem2": "Skopsko (0.33 l.)",
           "pivosostojki2": "",
           "pivocena2": "90 mkd.",

          "pivoitem3": "Zlaten dab (0.5 l.)",
           "pivosostojki3": "",
           "pivocena3": "90 mkd.",

          "pivoitem4": "Zlaten dab (Tocheno)",
           "pivosostojki4": "(0.33 l.)",
           "pivocena4": "70 mkd.",

          "pivoitem5": "Tuborg (0.33 l.)",
           "pivosostojki5": "",
           "pivocena5": "100 mkd.",

          "pivoitem6": "Tuborg (0.4 l.)",
           "pivosostojki6": "",
           "pivocena6": "90 mkd.",

          "pivoitem7": "Yelen (0.33 l.)",
           "pivosostojki7": "",
           "pivocena7": "90 mkd.",

          "pivoitem8": "Yelen (0.5 l.) ",
           "pivosostojki8": "",
           "pivocena8": "90 mkd.",

          "pivoitem9": "Heiniken (0.33 l.)",
           "pivosostojki9": "",
           "pivocena9": "120 mkd.",

          "pivoitem10": "Heiniken (0.4 l.)",
           "pivosostojki10": "",
           "pivocena10": "100 mkd.",

          "pivoitem11": "",
           "pivosostojki11": "",
           "pivocena11": "",


          //predjadenje

          "predjadenjeitem1": "Baked cheese (100 gr.)",
           "predjadenjesostojki1": "",
           "predjadenjecena1": "100 mkd.",

          "predjadenjeitem2": "Baked zdenka",
           "predjadenjesostojki2": "",
           "predjadenjecena2": "30 mkd.",

          "predjadenjeitem3": "Fried mushrooms (200 gr.)",
           "predjadenjesostojki3": "",
           "predjadenjecena3": "150 mkd.",

          "predjadenjeitem4": "Piroshka",
           "predjadenjesostojki4": "",
           "predjadenjecena4": "60 mkd.",

          "predjadenjeitem5": "Fried zucchini",
           "predjadenjesostojki5": "",
           "predjadenjecena5": "120 mkd.",

          "predjadenjeitem6": "Fried stuffed pepper (1 pc.)",
           "predjadenjesostojki6": "",
           "predjadenjecena6": "70 mkd.",

          "predjadenjeitem7": "Fried board (Small)",
           "predjadenjesostojki7": "",
           "predjadenjecena7": "350 mkd.",

          "predjadenjeitem8": "Fried board (Large)",
           "predjadenjesostojki8": "",
           "predjadenjecena8": "700 mkd.",

          "predjadenjeitem9": "Galia cold board",
           "predjadenjesostojki9": "(sheep's cheese, parmesan, whipped cheese, prosciutto, smoked bacon, tea, kulen)",
           "predjadenjecena9": "700 mkd.",

          "predjadenjeitem10": "Ordever",
           "predjadenjesostojki10": "",
           "predjadenjecena10": "150 mkd.",


          //riba

          "ribaitem1": "Trout (1 kg.)",
           "ribasostojki1": "",
           "ribacena1": "800 mkd.",

          "ribaitem2": "Salmon (1 kg.)",
           "ribasostojki2": "",
           "ribacena2": "800 mkd.",

          "ribaitem3": "Hake (1 kg.)",
           "ribasostojki3": "",
           "ribacena3": "400 mkd.",


          //salati

          "salatiitem1": "Shopska",
           "salatisostojki1": "",
           "salaticena1": "140 mkd.",

          "salatiitem2": "Greece",
           "salatisostojki2": "",
           "salaticena2": "140 mkd.",

          "salatiitem3": "Vlashka",
           "salatisostojki3": "",
           "salaticena3": "160 mkd.",

          "salatiitem4": "Tarator",
           "salatisostojki4": "",
           "salaticena4": "140 mkd.",

          "salatiitem5": "Green salad",
           "salatisostojki5": "",
           "salaticena5": "100 mkd.",

          "salatiitem6": "Cabbage",
           "salatisostojki6": "",
           "salaticena6": "80 mkd.",

          "salatiitem7": "Lettuce",
           "salatisostojki7": "",
           "salaticena7": "80 mkd.",

          "salatiitem8": "Cucumber",
           "salatisostojki8": "",
           "salaticena8": "80 mkd.",

          "salatiitem9": "Tomato",
           "salatisostojki9": "",
           "salaticena9": "80 mkd.",

          "salatiitem10": "Ovcharska",
           "salatisostojki10": "",
           "salaticena10": "160 mkd.",

          "salatiitem11": "Mimosa",
           "salatisostojki11": "",
           "salaticena11": "100 mkd.",

          "salatiitem12": "Tuna salad ",
           "salatisostojki12": "",
           "salaticena12": "100 mkd.",

          "salatiitem13": "Potato salad",
           "salatisostojki13": "",
           "salaticena13": "100 mkd.",

          "salatiitem14": "Caesar",
           "salatisostojki14": "",
           "salaticena14": "220 mkd.",

          //skara

          "skaraitem1": "Galija burger (280 gr.)",
           "skarasostojki1": "(minced meat, cheese, bacon, kaymak)",
           "skaracena1": "220 mkd.",

          "skaraitem2": "Vinichanka (280 gr.)",
           "skarasostojki2": "(minced meat, cheese, chopped meat, mushrooms)",
           "skaracena2": "200 mkd.",

          "skaraitem3": "Greek burger",
           "skarasostojki3": "(minced meat, cheese)",
           "skaracena3": "190 mkd.",

          "skaraitem4": "Lovechka (280 gr.)",
           "skarasostojki4": "(minced meat, cheese, cheese)",
           "skaracena4": "200 mkd.",

          "skaraitem5": "Lovechka spicy (280 g)",
           "skarasostojki5": "(minced meat, cheese)",
           "skaracena5": "200 mkd.",

          "skaraitem6": "Burger (200 gr.)",
           "skarasostojki6": "",
           "skaracena6": "140 mkd.",

          "skaraitem7": "Kebap (25 gr.)",
           "skarasostojki7": "",
           "skaracena7": "15 mkd.",

          "skaraitem8": "Veshalica (200 gr.)",
           "skarasostojki8": "",
           "skaracena8": "160 mkd.",

          "skaraitem9": "Diplomatic veshalica",
           "skarasostojki9": "",
           "skaracena9": "200 mkd.",

          "skaraitem10": "Chicken tenderloin",
           "skarasostojki10": "",
           "skaracena10": "180 mkd.",

          "skaraitem11": "Kremenadla",
           "skarasostojki11": "",
           "skaracena11": "160 mkd.",

          "skaraitem12": "Raznic",
           "skarasostojki12": "",
           "skaracena12": "160 mkd.",

          "skaraitem13": "Paflak (1 kg.)",
           "skarasostojki13": "",
           "skaracena13": "700 mkd.",

          "skaraitem14": "Neck (1 kg.)",
           "skarasostojki14": "",
           "skaracena14": "700 mkd.",

          "skaraitem15": "Biftek (1 kg.)",
           "skarasostojki15": "",
           "skaracena15": "900 mkd.",

          "skaraitem16": "Homemade sausage (Thin)",
           "skarasostojki16": "",
           "skaracena16": "80 mkd.",

          "skaraitem17": "Homemade sausage (Thick) ",
           "skarasostojki17": "",
           "skaracena17": "100 mkd.",

          "skaraitem18": "King's meat",
           "skarasostojki18": "",
           "skaracena18": "280 mkd.",

          "skaraitem19": "Steak",
           "skarasostojki19": "",
           "skaracena19": "150 mkd.",

          "skaraitem20": "Diplomatic steak ",
           "skarasostojki20": "",
           "skaracena20": "180 mkd.",

          "skaraitem21": "Chicken leg without bone",
           "skarasostojki21": "",
           "skaracena21": "150 mkd.",


          //tikves

          "tikvesitem1": "Alexandria White (0.7 l.) ",
           "tikvessostojki1": "",
           "tikvescena1": "500 mkd.",

          "tikvesitem2": "Alexandria Red (0.7 l.)",
           "tikvessostojki2": "",
           "tikvescena2": "500 mkd.",

          "tikvesitem3": "Alexandria Rose (0.7 l.)",
           "tikvessostojki3": "",
           "tikvescena3": "500 mkd.",

          "tikvesitem4": "T'ga za jug (0.7 l.)",
           "tikvessostojki4": "",
           "tikvescena4": "500 mkd.",

          "tikvesitem5": "Traminets (0.7 l.)",
           "tikvessostojki5": "",
           "tikvescena5": "500 mkd.",

          "tikvesitem6": "Temjanika (0.7 l.)",
           "tikvessostojki6": "",
           "tikvescena6": "500 mkd.",


          //vino

          "vinoitem1": "Smederevka (1 liter)",
           "vinosostojki1": "",
           "vinocena1": "280 mkd.",

          "vinoitem2": "Kavadarka (1 liter)",
           "vinosostojki2": "",
           "vinocena2": "280 mkd.",

          "vinoitem3": "Rosé (1 l.)",
           "vinosostojki3": "",
           "vinocena3": "280 mkd.",

          "vinoitem4": "Vitach (1 l.)",
           "vinosostojki4": "",
           "vinocena4": "280 mkd.",

          "vinoitem5": "Vranec (1 liter)",
           "vinosostojki5": "",
           "vinocena5": "280 mkd.",

          "vinoitem6": "Smederevka (0.5 l.)",
           "vinosostojki6": "",
           "vinocena6": "150 mkd.",

          "vinoitem7": "Kavadarka (0.5 l.)",
           "vinosostojki7": "",
           "vinocena7": "150 mkd.",

          "vinoitem8": "Rosé (0.5 l.)",
           "vinosostojki8": "",
           "vinocena8": "150 mkd.",

          "vinoitem9": "Vitach (0.5 l.)",
           "vinosostojki9": "",
           "vinocena9": "150 mkd.",

          "vinoitem10": "Vranec (0.5 l.)",
           "vinosostojki10": "",
           "vinocena10": "150 mkd.",

          "vinoitem11": "Alexandria White (0.2 l.)",
           "vinosostojki11": "",
           "vinocena11": "150 mkd.",

          "vinoitem12": "Alexandria Red (0.2 l.)",
           "vinosostojki12": "",
           "vinocena12": "150 mkd.",
          
          "vinoitem13": "Alexandria Rose (0.2 l.)",
           "vinosostojki13": "",
           "vinocena13": "150 mkd.",
          
          "vinoitem14": "T'ga za jug (0.2 l.)",
           "vinosostojki14": "",
           "vinocena14": "150 mkd.",
          
          "vinoitem15": "Traminets (0.2 l.)",
           "vinosostojki15": "",
           "vinocena15": "150 mkd.",
          
          "vinoitem16": "Temjanika (0.2 l.)",
           "vinosostojki16": "",
           "vinocena16": "150 mkd.",
          
          "vinoitem17": "Tikvesh Special Selection",
           "vinosostojki17": "",
           "vinocena17": "800 mkd.",
          
          "vinoitem18": "Tikvesh Kuve",
           "vinosostojki18": "",
           "vinocena18": "800 mkd.",
          
          //zestoko

          "zestokoitem1": "Yellow rakija (50 ml.)",
           "zestokosostojki1": "",
           "zestokocena1": "70 mkd.",

          "zestokoitem2": "White rakija (50 ml.)",
           "zestokosostojki2": "",
           "zestokocena2": "70 mkd.",

          "zestokoitem3": "St. Tryfun rakija (50 ml.)",
           "zestokosostojki3": "",
           "zestokocena3": "100 mkd.",

          "zestokoitem4": "Cognac (50 ml.)",
           "zestokosostojki4": "",
           "zestokocena4": "70 mkd.",

          "zestokoitem5": "Vodka Vigor (50 ml.)",
           "zestokosostojki5": "",
           "zestokocena5": "70 mkd.",

          "zestokoitem6": "Smirnoff vodka (50 ml.)",
           "zestokosostojki6": "",
           "zestokocena6": "100 mkd.",

          "zestokoitem7": "Vodka Finland (50 ml.)",
           "zestokosostojki7": "",
           "zestokocena7": "100 mkd.",

          "zestokoitem8": "Ouzo Tsantali (50 ml.)",
           "zestokosostojki8": "",
           "zestokocena8": "60 mkd.",

          "zestokoitem9": "Ouzo Plomari (50 ml.)",
           "zestokosostojki9": "",
           "zestokocena9": "80 mkd.",

          "zestokoitem10": "Gin (50 ml.)",
           "zestokosostojki10": "",
           "zestokocena10": "70 mkd.",

          "zestokoitem11": "Martini (50 ml.)",
           "zestokosostojki11": "",
           "zestokocena11": "80 mkd.",

          "zestokoitem12": "Stock (50 ml.)",
           "zestokosostojki12": "",
           "zestokocena12": "80 mkd.",

          "zestokoitem13": "Ballantine's (50 ml.)",
           "zestokosostojki13": "",
           "zestokocena13": "150 mkd.",

          "zestokoitem14": "Jamieson (50 ml.)",
           "zestokosostojki14": "",
           "zestokocena14": "150 mkd.",

          "zestokoitem15": "Jack Daniels (50 ml.)",
           "zestokosostojki15": "",
           "zestokocena15": "180 mkd.",

          "zestokoitem16": "Johnnie Walker (50 ml.)",
           "zestokosostojki16": "",
           "zestokocena16": "150 mkd.",

          "zestokoitem17": "Rum (50 ml.)",
           "zestokosostojki17": "",
           "zestokocena17": "320 den./340 den.",

          "zestokoitem18": "Jägermeister (50 ml.)",
           "zestokosostojki18": "",
           "zestokocena18": "120 mkd.",

          "zestokoitem19": "Mastic (50 ml.)",
           "zestokosostojki19": "",
           "zestokocena19": "70 mkd.",

      }
          "MKD":
      {
        //bezalkoholni
          
           "Bezalkoholniitem1": "Кока кола (0,25 л.)",
           "Bezalkoholnisostojki1": "",
           "Bezalkoholnicena1": "70 ден.",

           "Bezalkoholniitem2": "Фанта (0,25 л.)",
           "Bezalkoholnisostojki2": "",
           "Bezalkoholnicena2": "70 ден.",

          "Bezalkoholniitem3": "Спрајт (0,25 л.)",
           "Bezalkoholnisostojki3": "",
           "Bezalkoholnicena3": "70 ден.",

          "Bezalkoholniitem4": "Швепс (0,25 л.)",
           "Bezalkoholnisostojki4": "",
           "Bezalkoholnicena4": "70 ден..",

          "Bezalkoholniitem5": "Тоник (0,25 л.)",
           "Bezalkoholnisostojki5": "",
           "Bezalkoholnicena5": "70 ден.",

          "Bezalkoholniitem6": "Пепси (0,25 л.)",
           "Bezalkoholnisostojki6": "",
           "Bezalkoholnicena6": "70 ден.",

          "Bezalkoholniitem7": "Газоза (0,25 л.)",
           "Bezalkoholnisostojki7": "",
           "Bezalkoholnicena7": "70 ден.",

          "Bezalkoholniitem8": "Браво (Негазиран)",
           "Bezalkoholnisostojki8": "(0,25 л.)",
           "Bezalkoholnicena8": "70 ден.",

          "Bezalkoholniitem9": "Браво (Леден чај)",
           "Bezalkoholnisostojki9": "(0,33 л.)",
           "Bezalkoholnicena9": "70 ден",

          "Bezalkoholniitem10": "Роса (Негазирана вода)",
           "Bezalkoholnisostojki10": "(0,25 л.)",
           "Bezalkoholnicena10": "50 ден.",

          "Bezalkoholniitem11": "Визиана (Негазирана вода)",
           "Bezalkoholnisostojki11": "(0,7 л.)",
           "Bezalkoholnicena11": "70 ден.",

          "Bezalkoholniitem12": "Визиана (Газирана вода)",
           "Bezalkoholnisostojki12": "(0,7 л.)",
           "Bezalkoholnicena12": "70 ден.",

          "Bezalkoholniitem13": "Пелистерка (Газирана)",
           "Bezalkoholnisostojki13": "(0,25 л.)",
           "Bezalkoholnicena13": "50 ден.",

          "Bezalkoholniitem14": "Пелистерка (Газирана)",
           "Bezalkoholnisostojki14": "(1 л.)",
           "Bezalkoholnicena14": "80 ден.",

          //bovin

          "bovinitem1": "Александар",
           "bovinsostojki1": "",
           "bovincena1": "1000 ден.",

          "bovinitem2": "Мерлот",
           "bovinsostojki2": "",
           "bovincena2": "1000 ден.",

          "bovinitem3": "Каберне Совињон ",
           "bovinsostojki3": "",
           "bovincena3": "1000 ден.",

          "bovinitem4": "Мускат Темјаника",
           "bovinsostojki4": "",
           "bovincena4": "1000 ден.",



          //deserti

          "desertiitem1": "Палачинка со крем и банана",
           "desertisostojki1": "",
           "deserticena1": "60 ден.",

          "desertiitem2": "Палачинка со крем и плазма ",
           "desertisostojki2": "",
           "deserticena2": "60 ден.",

          "desertiitem3": "Палачинка со мед и ореви",
           "desertisostojki3": "",
           "deserticena3": "60 ден.",

          "desertiitem4": "Слатко од диви смокви",
           "desertisostojki4": "",
           "deserticena4": "60 ден.",

          "desertiitem5": "Вафли со крем и банана",
           "desertisostojki5": "",
           "deserticena5": "120 ден.",


          //dodatoci

          "dodatociitem1": "Помфрит (Мал)",
           "dodatocisostojki1": "",
           "dodatocicena1": "80 ден.",

          "dodatociitem2": "Помфрит (Голем)",
           "dodatocisostojki2": "",
           "dodatocicena2": "100 ден.",

          "dodatociitem3": "Помфрит (Пекарски)",
           "dodatocisostojki3": "",
           "dodatocicena3": "150 ден.",

          "dodatociitem4": "Нафора",
           "dodatocisostojki4": "",
           "dodatocicena4": "80 ден.",

          "dodatociitem5": "Гарнир",
           "dodatocisostojki5": "(ориз, тавче гравче, пире)",
           "dodatocicena5": "40 ден.",


          //dorucek

          "dorucekitem1": "Омлет со кашкавал",
           "doruceksostojki1": "",
           "dorucekcena1": "120 ден.",

          "dorucekitem2": "Омлет со сирење",
           "doruceksostojki2": "",
           "dorucekcena2": "120 ден.",

          "dorucekitem3": "Омлет со сланина",
           "doruceksostojki3": "",
           "dorucekcena3": "130 ден.",

          "dorucekitem4": "Мешан омлет",
           "doruceksostojki4": "",
           "dorucekcena4": "140 ден.",

          "dorucekitem5": "Кајгана",
           "doruceksostojki5": "",
           "dorucekcena5": "90 ден.",

          "dorucekitem6": "Варено јајце",
           "doruceksostojki6": "",
           "dorucekcena6": "30 ден.",

          "dorucekitem7": "Јајце на око",
           "doruceksostojki7": "",
           "dorucekcena7": "30ден.",


          //drum

          "drumitem1": "Мерлот (0,7 л.)",
           "drumsostojki1": "",
           "drumcena1": "450 ден.",

          "drumitem2": "Вранец (0,7 л.)",
           "drumsostojki2": "",
           "drumcena2": "450 ден.",

          "drumitem3": "Каберне Совињон (0,7 л.)",
           "drumsostojki3": "",
           "drumcena3": "450 ден.",

          "drumitem4": "Совињон Бланко (0,2 л.)",
           "drumsostojki4": "",
           "drumcena4": "450 ден.",

          "drumitem5": "Смедеревка",
           "drumsostojki5": "",
           "drumcena5": "270 ден.",


          //gotveni

          "gotveniitem1": "Телешка чорба",
           "gotvenisostojki1": "",
           "gotvenicena1": "140 ден.",

          "gotveniitem2": "Пилешка чорба",
           "gotvenisostojki2": "",
           "gotvenicena2": "140 ден.",

          "gotveniitem3": "Гулаш",
           "gotvenisostojki3": "",
           "gotvenicena3": "180 ден.",

          "gotveniitem4": "Селско месо (1 кг.)",
           "gotvenisostojki4": "",
           "gotvenicena4": "900 ден.",

          "gotveniitem5": "Ребро во фурна (1 кг.)",
           "gotvenisostojki5": "",
           "gotvenicena5": "800 ден.",


          //pivo

          "pivoitem1": "Скопско (0,5 л.)",
           "pivosostojki1": "",
           "pivocena1": "90 ден.",

          "pivoitem2": "Скопско (0,33 л.)",
           "pivosostojki2": "",
           "pivocena2": "90 ден.",

          "pivoitem3": "Златен даб (0,5 л.)",
           "pivosostojki3": "",
           "pivocena3": "90 ден.",

          "pivoitem4": "Златен даб (Точено)",
           "pivosostojki4": "(0,33 л.)",
           "pivocena4": "70 ден.",

          "pivoitem5": "Туборг (0,33 л.)",
           "pivosostojki5": "",
           "pivocena5": "100 ден.",

          "pivoitem6": "Туборг (0,4 л.)",
           "pivosostojki6": "",
           "pivocena6": "90 ден.",

          "pivoitem7": "Јелен (0,33 л.)",
           "pivosostojki7": "",
           "pivocena7": "90 ден.",

          "pivoitem8": "Јелен (0,5 л.)",
           "pivosostojki8": "",
           "pivocena8": "90 ден.",

          "pivoitem9": "Хаиникен (0,33 л.)",
           "pivosostojki9": "",
           "pivocena9": "120 ден.",

          "pivoitem10": "Хаиникен (0,4 л.)",
           "pivosostojki10": "",
           "pivocena10": "100 ден.",

          "pivoitem11": "",
           "pivosostojki11": "",
           "pivocena11": "",


          //predjadenje

          "predjadenjeitem1": "Похован кашкавал (100 гр.)",
           "predjadenjesostojki1": "",
           "predjadenjecena1": "100 ден.",

          "predjadenjeitem2": "Похована зденка",
           "predjadenjesostojki2": "",
           "predjadenjecena2": "30 ден.",

          "predjadenjeitem3": "Похована печурки (200 гр.)",
           "predjadenjesostojki3": "",
           "predjadenjecena3": "150 ден.",

          "predjadenjeitem4": "Пирошка",
           "predjadenjesostojki4": "",
           "predjadenjecena4": "60 ден.",

          "predjadenjeitem5": "Поховани тиквички",
           "predjadenjesostojki5": "",
           "predjadenjecena5": "120 ден.",

          "predjadenjeitem6": "Похована полнета пиперка (1 бр.)",
           "predjadenjesostojki6": "",
           "predjadenjecena6": "70 ден.",

          "predjadenjeitem7": "Похована даска (Мала)",
           "predjadenjesostojki7": "",
           "predjadenjecena7": "350 ден.",

          "predjadenjeitem8": "Похована даска (Голема)",
           "predjadenjesostojki8": "",
           "predjadenjecena8": "700 ден.",

          "predjadenjeitem9": "Ладна даска Галија",
           "predjadenjesostojki9": "(овчи кашкавал, пармезан, биено сирење, пршут, пушена сланина, чајна, кулен)",
           "predjadenjecena9": "700 ден.",

          "predjadenjeitem10": "Ордевер",
           "predjadenjesostojki10": "",
           "predjadenjecena10": "150 ден.",


          //riba

          "ribaitem1": "Пастрамка (1 кг.)",
           "ribasostojki1": "",
           "ribacena1": "800 ден.",

          "ribaitem2": "Лосос ( 1 кг.)",
           "ribasostojki2": "",
           "ribacena2": "800 ден.",

          "ribaitem3": "Ослич (1 кг.)",
           "ribasostojki3": "",
           "ribacena3": "400 ден.",


          //salati

          "salatiitem1": "Шопска",
           "salatisostojki1": "",
           "salaticena1": "140 ден.",

          "salatiitem2": "Грчка",
           "salatisostojki2": "",
           "salaticena2": "140 ден.",

          "salatiitem3": "Влашка",
           "salatisostojki3": "",
           "salaticena3": "160 ден.",

          "salatiitem4": "Таратор",
           "salatisostojki4": "",
           "salaticena4": "140 ден.",

          "salatiitem5": "Зелена салата",
           "salatisostojki5": "",
           "salaticena5": "100 ден.",

          "salatiitem6": "Зелка",
           "salatisostojki6": "",
           "salaticena6": "80 ден.",

          "salatiitem7": "Марула",
           "salatisostojki7": "",
           "salaticena7": "80 ден.",

          "salatiitem8": "Краставица",
           "salatisostojki8": "",
           "salaticena8": "80 ден.",

          "salatiitem9": "Патлиџан",
           "salatisostojki9": "",
           "salaticena9": "80 ден.",

          "salatiitem10": "Овчарска",
           "salatisostojki10": "",
           "salaticena10": "160 ден.",

          "salatiitem11": "Мимоза",
           "salatisostojki11": "",
           "salaticena11": "100 ден.",

          "salatiitem12": "Туна салата",
           "salatisostojki12": "",
           "salaticena12": "100 ден.",

          "salatiitem13": "Компир салата",
           "salatisostojki13": "",
           "salaticena13": "100 ден.",

          "salatiitem14": "Цезар",
           "salatisostojki14": "",
           "salaticena14": "220 ден.",

          //skara

          "skaraitem1": "Плескавица Галија (280 гр.)",
           "skarasostojki1": "(мелено месо, кашкавал, сланина, кајмак)",
           "skaracena1": "220 ден.",

          "skaraitem2": "Виничанка (280 гр.)",
           "skarasostojki2": "(мелено месо, кашкавал, сецкано месо, печурки)",
           "skaracena2": "200 ден.",

          "skaraitem3": "Грчка плескавица",
           "skarasostojki3": "(мелено месо, кашкавал)",
           "skaracena3": "190 ден.",

          "skaraitem4": "Ловечка (280 гр.)",
           "skarasostojki4": "(мелено месо, кашкавал, сирење)",
           "skaracena4": "200 ден.",

          "skaraitem5": "Ловечка лута (280 гр.)",
           "skarasostojki5": "(мелено месо, кашкавал)",
           "skaracena5": "200 ден.",

          "skaraitem6": "Плескавица (200 гр.)",
           "skarasostojki6": "",
           "skaracena6": "140 ден.",

          "skaraitem7": "Ќебап (25 гр.)",
           "skarasostojki7": "",
           "skaracena7": "15 ден.",

          "skaraitem8": "Вешалица (200 гр.) ",
           "skarasostojki8": "",
           "skaracena8": "160 ден.",

          "skaraitem9": "Дипломатска вешалица",
           "skarasostojki9": "",
           "skaracena9": "200 ден.",

          "skaraitem10": "Увијач пилешки",
           "skarasostojki10": "",
           "skaracena10": "180 ден.",

          "skaraitem11": "Кременадла",
           "skarasostojki11": "",
           "skaracena11": "160 ден.",

          "skaraitem12": "Ражниќ",
           "skarasostojki12": "",
           "skaracena12": "160 ден.",

          "skaraitem13": "Пафлак (1 кг.)",
           "skarasostojki13": "",
           "skaracena13": "700 ден.",

          "skaraitem14": "Врат (1 кг.)",
           "skarasostojki14": "",
           "skaracena14": "700 ден.",

          "skaraitem15": "Бифтек (1 кг.)",
           "skarasostojki15": "",
           "skaracena15": "900 ден.",

          "skaraitem16": "Домашен кобас (Тенок)",
           "skarasostojki16": "",
           "skaracena16": "80 ден.",

          "skaraitem17": "Домашен колвас (Дебел)",
           "skarasostojki17": "",
           "skaracena17": "100 ден.",

          "skaraitem18": "Царско месо",
           "skarasostojki18": "",
           "skaracena18": "280 ден.",

          "skaraitem19": "Стек",
           "skarasostojki19": "",
           "skaracena19": "150 ден.",

          "skaraitem20": "Дипломатски стек",
           "skarasostojki20": "",
           "skaracena20": "180 ден.",

          "skaraitem21": "Копан без коска",
           "skarasostojki21": "",
           "skaracena21": "150 ден.",


          //tikves

          "tikvesitem1": "Александрија Бела (0,7 л.)",
           "tikvessostojki1": "",
           "tikvescena1": "500 ден.",

          "tikvesitem2": "Александрија Црвена (0,7 л.)",
           "tikvessostojki2": "",
           "tikvescena2": "500 ден.",

          "tikvesitem3": "Александрија Розе (0,7 л.)",
           "tikvessostojki3": "",
           "tikvescena3": "500 ден.",

          "tikvesitem4": "Т'га за југ (0,7 л.)",
           "tikvessostojki4": "",
           "tikvescena4": "500 ден.",

          "tikvesitem5": "Траминец (0,7 л.)",
           "tikvessostojki5": "",
           "tikvescena5": "500 ден.",

          "tikvesitem6": "Темјаника (0,7 л.)",
           "tikvessostojki6": "",
           "tikvescena6": "500 ден.",


          //vino

          "vinoitem1": "Смедеревка (1 л.)",
           "vinosostojki1": "",
           "vinocena1": "280 ден.",

          "vinoitem2": "Кавадарка (1 л.)",
           "vinosostojki2": "",
           "vinocena2": "280 ден.",

          "vinoitem3": "Розе (1 л.) ",
           "vinosostojki3": "",
           "vinocena3": "280 ден.",

          "vinoitem4": "Витач (1 л.)",
           "vinosostojki4": "",
           "vinocena4": "280 ден.",

          "vinoitem5": "Вранец (1 л.)",
           "vinosostojki5": "",
           "vinocena5": "280 ден.",

          "vinoitem6": "Смедеревка (0,5 л.)",
           "vinosostojki6": "",
           "vinocena6": "150 ден.",

          "vinoitem7": "Кавадарка (0,5 л.)",
           "vinosostojki7": "",
           "vinocena7": "150 ден.",

          "vinoitem8": "Розе (0,5 л.)",
           "vinosostojki8": "",
           "vinocena8": "150 ден.",

          "vinoitem9": "Витач (0,5 л.)",
           "vinosostojki9": "",
           "vinocena9": "150 ден.",

          "vinoitem10": "Вранец (0,5 л.)",
           "vinosostojki10": "",
           "vinocena10": "150 ден.",

          "vinoitem11": "Александрија Бела (0,2 л.)",
           "vinosostojki11": "",
           "vinocena11": "150 ден.",

          "vinoitem12": "Александрија Црвена (0,2 л.) ",
           "vinosostojki12": "",
           "vinocena12": "150 ден.",
          
          "vinoitem13": "Александрија Розе (0,2 л.)",
           "vinosostojki13": "",
           "vinocena13": "150 ден.",
          
          "vinoitem14": "Т'га за југ (0,2 л.)",
           "vinosostojki14": "",
           "vinocena14": "150 ден.",
          
          "vinoitem15": "Траминец (0,2 л.)",
           "vinosostojki15": "",
           "vinocena15": "150 ден.",
          
          "vinoitem16": "Темјаника (0,2 л.)",
           "vinosostojki16": "",
           "vinocena16": "150 ден.",
          
          "vinoitem17": "Тиквеш Спешл Селекшн",
           "vinosostojki17": "",
           "vinocena17": "800 ден.",
          
          "vinoitem18": "Тиквеш Куве",
           "vinosostojki18": "",
           "vinocena18": "800 ден.",
          
          //zestoko

          "zestokoitem1": "Жолта (50 мл.)",
           "zestokosostojki1": "",
           "zestokocena1": "70 ден.",

          "zestokoitem2": "Бела (50 мл.)",
           "zestokosostojki2": "",
           "zestokocena2": "70 ден.",

          "zestokoitem3": "Св.Трифун (50 мл.)",
           "zestokosostojki3": "",
           "zestokocena3": "100 ден.",

          "zestokoitem4": "Коњак (50 мл.)",
           "zestokosostojki4": "",
           "zestokocena4": "70 ден.",

          "zestokoitem5": "Водка Вигор (50 мл.)",
           "zestokosostojki5": "",
           "zestokocena5": "70 ден.",

          "zestokoitem6": "Водка Смирноф (50 мл.)",
           "zestokosostojki6": "",
           "zestokocena6": "100 ден.",

          "zestokoitem7": "Вотка Финландија (50 мл.)",
           "zestokosostojki7": "",
           "zestokocena7": "100 ден.",

          "zestokoitem8": "Узо Тсантали (50 мл.)",
           "zestokosostojki8": "",
           "zestokocena8": "60 ден.",

          "zestokoitem9": "Узо Пломари (50 мл.)",
           "zestokosostojki9": "",
           "zestokocena9": "80 ден.",

          "zestokoitem10": "Џин (50 мл.)",
           "zestokosostojki10": "",
           "zestokocena10": "70 ден.",

          "zestokoitem11": "Мартини (50 мл.)",
           "zestokosostojki11": "",
           "zestokocena11": "80 ден.",

          "zestokoitem12": "Шток (50 мл.)",
           "zestokosostojki12": "",
           "zestokocena12": "80 ден.",

          "zestokoitem13": "Балантајн (50 мл.)",
           "zestokosostojki13": "",
           "zestokocena13": "150 ден.",

          "zestokoitem14": "Џејмисон (50 мл.)",
           "zestokosostojki14": "",
           "zestokocena14": "150 ден.",

          "zestokoitem15": "Џек Даниелс (50 мл.)",
           "zestokosostojki15": "",
           "zestokocena15": "180 ден.",

          "zestokoitem16": "Џони Вокер (50 мл.)",
           "zestokosostojki16": "",
           "zestokocena16": "150 ден.",

          "zestokoitem17": "Рум (50 мл.)",
           "zestokosostojki17": "",
           "zestokocena17": "70 ден.",

          "zestokoitem18": "Јегермаистер (50 мл.)",
           "zestokosostojki18": "",
           "zestokocena18": "120 ден.",

          "zestokoitem19": "Мастика (50 мл.)",
           "zestokosostojki19": "",
           "zestokocena19": "70 ден.",

      }

