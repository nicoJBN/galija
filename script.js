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
           "bezalkoholniitem1": "Coca Cola (0.25 l.) ",
           "bezalkoholnisostojki1": "",
           "bezalkoholnicena1": "70 ден.",

           "bezalkoholniitem2": "Fanta (0.25 l.)",
           "bezalkoholnisostojki2": "",
           "bezalkoholnicena2": "70 ден.",

          "bezalkoholniitem3": "Sprite (0.25 l.)",
           "bezalkoholnisostojki3": "",
           "bezalkoholnicena3": "70 ден.",

          "bezalkoholniitem4": "Schweppes (0.25 l.)",
           "bezalkoholnisostojki4": "",
           "bezalkoholnicena4": "70 ден..",

          "bezalkoholniitem5": "Tonic (0.25 l.)",
           "bezalkoholnisostojki5": "",
           "bezalkoholnicena5": "70 ден.",

          "bezalkoholniitem6": "Pepsi (0.25 l.) ",
           "bezalkoholnisostojki6": "",
           "bezalkoholnicena6": "70 ден.",

          "bezalkoholniitem7": "Gazosa (0.25 l.)",
           "bezalkoholnisostojki7": "",
           "bezalkoholnicena7": "70 mkd.",

          "bezalkoholniitem8": "Bravo (Juice)",
           "bezalkoholnisostojki8": "(0.25 l.)",
           "bezalkoholnicena8": "70 mkd.",

          "bezalkoholniitem9": "Bravo (Iced tea)",
           "bezalkoholnisostojki9": "(0.33 l.)",
           "bezalkoholnicena9": "70 mkd.",

          "bezalkoholniitem10": "Rosa (Water)",
           "bezalkoholnisostojki10": "(0.25 l.)",
           "bezalkoholnicena10": "50 mkd.",

          "bezalkoholniitem11": "Visiana (Water)",
           "bezalkoholnisostojki11": "(0.7 l.)",
           "bezalkoholnicena11": "70 mkd.",

          "bezalkoholniitem12": "Visiana (Sparkling water)",
           "bezalkoholnisostojki12": "(0.7 l.)",
           "bezalkoholnicena12": "70 mkd.",

          "bezalkoholniitem13": "Pelisterka (Carbonated)",
           "bezalkoholnisostojki13": "(0.25 l.)",
           "bezalkoholnicena13": "50 mkd.",

          "bezalkoholniitem14": "Pelisterka (Carbonated)",
           "bezalkoholnisostojki14": "(1 l.)",
           "bezalkoholnicena14": "80 mkd.",

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
           "bezalkoholniitem1": "Coca Cola (0.25 l.) ",
           "bezalkoholnisostojki1": "",
           "bezalkoholnicena1": "70 ден.",

           "bezalkoholniitem2": "Fanta (0.25 l.)",
           "bezalkoholnisostojki2": "",
           "bezalkoholnicena2": "70 ден.",

          "bezalkoholniitem3": "Sprite (0.25 l.)",
           "bezalkoholnisostojki3": "",
           "bezalkoholnicena3": "70 ден.",

          "bezalkoholniitem4": "Schweppes (0.25 l.)",
           "bezalkoholnisostojki4": "",
           "bezalkoholnicena4": "70 ден..",

          "bezalkoholniitem5": "Tonic (0.25 l.)",
           "bezalkoholnisostojki5": "",
           "bezalkoholnicena5": "70 ден.",

          "bezalkoholniitem6": "Pepsi (0.25 l.) ",
           "bezalkoholnisostojki6": "",
           "bezalkoholnicena6": "70 ден.",

          "bezalkoholniitem7": "Gazosa (0.25 l.)",
           "bezalkoholnisostojki7": "",
           "bezalkoholnicena7": "70 mkd.",

          "bezalkoholniitem8": "Bravo (Juice)",
           "bezalkoholnisostojki8": "(0.25 l.)",
           "bezalkoholnicena8": "70 mkd.",

          "bezalkoholniitem9": "Bravo (Iced tea)",
           "bezalkoholnisostojki9": "(0.33 l.)",
           "bezalkoholnicena9": "70 mkd.",

          "bezalkoholniitem10": "Rosa (Water)",
           "bezalkoholnisostojki10": "(0.25 l.)",
           "bezalkoholnicena10": "50 mkd.",

          "bezalkoholniitem11": "Visiana (Water)",
           "bezalkoholnisostojki11": "(0.7 l.)",
           "bezalkoholnicena11": "70 mkd.",

          "bezalkoholniitem12": "Visiana (Sparkling water)",
           "bezalkoholnisostojki12": "(0.7 l.)",
           "bezalkoholnicena12": "70 mkd.",

          "bezalkoholniitem13": "Pelisterka (Carbonated)",
           "bezalkoholnisostojki13": "(0.25 l.)",
           "bezalkoholnicena13": "50 mkd.",

          "bezalkoholniitem14": "Pelisterka (Carbonated)",
           "bezalkoholnisostojki14": "(1 l.)",
           "bezalkoholnicena14": "80 mkd.",

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

