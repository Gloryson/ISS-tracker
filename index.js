let ISS = document.querySelector(`.moving__container`);

let timer = setTimeout(function showISS () {
  fetch('https://api.open-notify.org/iss-now.json')
  .then(res => res.json())
  .then(out => {
          let latitude = out.iss_position.latitude;
          let longitude = out.iss_position.longitude;
          ISS.style.transform = `translateX(${50 / (180 / longitude)}%) translateY(${-40 / (90 / latitude)}%)`;
        })
  .catch(err => { throw err });
  timer = setTimeout(showISS, 5000);
}, 1000);
