let heading1 = document.getElementById("h1");
let season = document.getElementById("season");
let image = document.getElementById("myImage");

function winter() {
  heading1.innerHTML = "Зима";
  season.innerHTML = "Зима — найхолодніша пора року між осінню та весною. У цей період температура повітря опускається нижче 0 °C, часто випадає сніг.";
  heading1.style.color = "blue";
  season.style.color = "darkblue";
  document.body.style.backgroundColor = "lightblue";
  image.src = "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=500";
}

function spring() {
  heading1.innerHTML = "Весна";
  season.innerHTML = "Весна — пора року між зимою та літом. У цей час природа прокидається, тане сніг, розпускаються перші квіти й з'являється зелень.";
  heading1.style.color = "green";
  season.style.color = "darkgreen";
  document.body.style.backgroundColor = "lightgreen";
  image.src = "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500";
}

function summer() {
  heading1.innerHTML = "Літо";
  season.innerHTML = "Літо — найтепліша пора року між весною та осінню. Це період найдовших днів, найкоротших ночей і найвищих температур. Пора відпусток, канікул, пляжного відпочинку та свіжих фруктів.";
  heading1.style.color = "orange";
  season.style.color = "darkorange";
  document.body.style.backgroundColor = "lightyellow";
  image.src = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500";
}

function autumn() {
  heading1.innerHTML = "Осінь";
  season.innerHTML = "Осінь — пора року між літом та зимою. Дні стають коротшими, листя змінює колір на золотий і червоний та починає опадати.";
  heading1.style.color = "brown";
  season.style.color = "saddlebrown";
  document.body.style.backgroundColor = "wheat";
  image.src = "https://images.unsplash.com/photo-1507181179412-1e89099e8f92?w=500";
}