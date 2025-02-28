function conditionalRender() {
  const selected = document.getElementById("codeSelector").value;
  const renderPeople = document.getElementById("renderPeople");
  const renderZoo = document.getElementById("renderZoo");
  const renderProduct = document.getElementById("renderProduct");

  const infoPeople = document.getElementById("infoPeople");
  const infoZoo = document.getElementById("infoZoo");
  const infoProduct = document.getElementById("infoProduct");
  

  infoPeople.style.display = "none";
  infoZoo.style.display = "none";
  infoProduct.style.display = "none";
  renderPeople.style.display = "none";
  renderZoo.style.display = "none";
  renderProduct.style.display = "none";

  switch (selected) {
    case "people":
        infoPeople.style.display = "block";
        renderPeople.style.display = "block"
      console.log("People");
      break;
    case "zoo":
        infoZoo.style.display = "block";
        renderZoo.style.display = "block"
      console.log("Zoo");
      break;
    case "product":
        infoProduct.style.display = "block"
        renderProduct.style.display = "block"
      console.log("product");
      break;
  }
}
