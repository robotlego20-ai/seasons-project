let heading1 = document.getElementById("heading1");
let season = document.getElementById("season");
let image = document.getElementById("image");

function winter() {
  heading1.innerHTML = "Зима";
  season.innerHTML = "Зима — найхолодніша пора року, час снігу та новорічних свят.";
  heading1.style.color = "blue";
  season.style.color = "darkblue";
  document.body.style.backgroundColor = "lightblue";
  image.src = "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=500";
}

function spring() {
  heading1.innerHTML = "Весна";
  season.innerHTML = "Весна — пора року, коли природа оживає, розквітають квіти та зеленіють дерева.";
  heading1.style.color = "green";
  season.style.color = "darkgreen";
  document.body.style.backgroundColor = "lightgreen";
  image.src = "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500";
}

function summer() {
  heading1.innerHTML = "Літо";
  season.innerHTML = "Літо — найтепліша пора року між весною та осінню. Пора відпусток, канікул та сонячних днів.";
  heading1.style.color = "darkorange";
  season.style.color = "chocolate";
  document.body.style.backgroundColor = "lightyellow";
  image.src = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500";
}

function autumn() {
  heading1.innerHTML = "Осінь";
  season.innerHTML = "Осінь — пора року між літом та зимою. Дні стають коротшими, листя змінює колір на золотий і червоний та починає опадати.";
  heading1.style.color = "darkred";
  season.style.color = "saddlebrown";
  document.body.style.backgroundColor = "wheat";
  image.src = "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?w=800";
}