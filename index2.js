const locations = ["United States", "India", "France", "Germany", "Australia", "Japan"];
let index = 0;

function changeLocation() {
  document.getElementById('location').textContent = locations[index];
  index = (index + 1) % locations.length;
}

setInterval(changeLocation, 900); 
