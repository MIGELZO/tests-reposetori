async function getCountries() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    showCountriesOnDocument(data);
  }
  
   function showCountriesOnDocument(countries) {
    let tableBody = document.getElementById("tableBody");
    countries.forEach((country) => {
      // country name
      let newTr = document.createElement("tr");
      let nameTd = document.createElement("td");
      nameTd.innerText = country.name.common;
      newTr.appendChild(nameTd);
      tableBody.appendChild(newTr);
      
      // country img
      let imgTd = document.createElement("td");
      let newImg = document.createElement("img");
      newImg.src = country.flags.png;
      imgTd.appendChild(newImg);
      newTr.appendChild(imgTd);
      
      // country location
      let locationTd = document.createElement("td");
      let mapLink = document.createElement("a");
      mapLink.href = country.maps.googleMaps;
      mapLink.setAttribute("target", "_blank");
      mapLink.innerText = `${country.name.common} on map`
      locationTd.appendChild(mapLink);
      newTr.appendChild(locationTd);

      // country Continent
      let continentTd = document.createElement("td");
      continentTd.innerText = country.continents[0];
      newTr.appendChild(continentTd);

      // country Continent
      let currenciesTd = document.createElement("td");
      let currencieShortName = Object.keys(country.currencies)[0]
      let currencieName = country.currencies[currencieShortName].name
      let currencieSymbol = country.currencies[currencieShortName].symbol
      currenciesTd.innerText = `${currencieName} - ${currencieSymbol}`;
      newTr.appendChild(currenciesTd);


    });
  }
  
  getCountries();

//ש.ב
//לחקור את המערך של האובייקטים
//להציג טבלה בעמוד
//טבלה עם נתונים על כל המדינות

//עמודות בטבלה
//שם המדינה, תמונה של הדגל, קישור לגוגל מפות, יבשת, מטבעות
