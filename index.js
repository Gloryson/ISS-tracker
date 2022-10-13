let ISS = document.querySelector(`.moving__container`);

let timer = setTimeout(function showISS () {
  fetch('https://api.wheretheiss.at/v1/satellites/25544')
  .then(response => response.json())
  .then(out => {
          let latitude = out.latitude;
          let longitude = out.longitude;
          ISS.style.transform = `translateX(${50 / (180 / longitude)}%) translateY(${-40 / (90 / latitude)}%)`;
        })
  .catch(err => { throw err });
  timer = setTimeout(showISS, 5000);
}, 1000);
