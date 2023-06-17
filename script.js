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
      "english": 
      {
        //bezalkoholni
           "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",


          //bovin

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",



          //deserti

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",


          //dodatoci

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",


          //dorucek

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",


          //drum

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",


          //gotveni

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",


          //pivo

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",


          //predjadenje

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",


          //riba

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",


          //salati

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          //skara

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",


          //tikves

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",


          //vino

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",


          //zestoko

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

      }
          "MKD":
{
     //bezalkoholni
           "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",


          //bovin

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",



          //deserti

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",


          //dodatoci

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",


          //dorucek

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",


          //drum

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",


          //gotveni

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",


          //pivo

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",


          //predjadenje

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",


          //riba

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",


          //salati

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          //skara

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",


          //tikves

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",


          //vino

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",


          //zestoko

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",

          "Picaitem1": "Quatro formaggi pizza",
           "Picasostojki1": "(Ketchup, 4 kinds of cheese)",
           "Picacena1": "320 den./340 den.",
    }

