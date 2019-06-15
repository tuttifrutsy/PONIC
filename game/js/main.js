character = "";
sonics = "";

function characterF(c) {
  if (c == "poni1") {
    character = {
      name: "Rainbow Dash",
      image1: "./assets/images/back-blue.png",
      image2: "./assets/images/front-blue.png",
      image3: "./assets/images/right-blue.png",
      image4: "./assets/images/left-blue.png",
      logo: "./assets/images/ponic-nube-01.png"
    };
    localStorage.setItem("character", JSON.stringify(character));
  } else if (c == "poni2") {
    character = {
      name: "Fluttershy",
      image1: "./assets/images/back-flut.png",
      image2: "./assets/images/front-flut.png",
      image3: "./assets/images/right-flut.png",
      image4: "./assets/images/left-flut.png",
      logo: "./assets/images/ponic-mariposas-01.png"
    };
    localStorage.setItem("character", JSON.stringify(character));
  } else if (c == "poni3") {
    character = {
      name: "Celestia",
      image1: "./assets/images/back-c.png",
      image2: "./assets/images/front-c.png",
      image3: "./assets/images/right-c.png",
      image4: "./assets/images/right-c.png",
      logo: "./assets/images/celestia-cutie-mark-crusaders.png"
    };
    localStorage.setItem("character", JSON.stringify(character));
  } else if (c == "poni4") {
    character = {
      name: "Luna",
      image1: "./assets/images/back-l.png",
      image2: "./assets/images/front-l.png",
      image3: "./assets/images/roght-l.png",
      image4: "./assets/images/left-l.png",
      logo: "./assets/images/princess-luna-cutie-mark-.png"
    };
    localStorage.setItem("character", JSON.stringify(character));
  } else if (c == "poni5") {
    character = {
      name: "Pinkie Pie",
      image1: "./assets/images/back-pink.png",
      image2: "./assets/images/front-pink.png",
      image3: "./assets/images/right-pink.png",
      image4: "./assets/images/left-pink.png",
      logo: "./assets/images/ponic-pie-01.png"
    };
    localStorage.setItem("character", JSON.stringify(character));
  } else if (c == " poni6") {
    character = {
      name: "Apple Jack",
      image1: "./assets/images/back-jack.png",
      image2: "./assets/images/front-jack.png",
      image3: "./assets/images/right-jack.png",
      image4: "./assets/images/left-jack.png",
      logo: "./assets/images/ponic-manzana-01.png"
    };
    localStorage.setItem("character", JSON.stringify(character));
  } else if (c == "poni7") {
    character = {
      name: "Twilight",
      image1: "./assets/images/back-tw.png",
      image2: "./assets/images/front-tw.png",
      image3: "./assets/images/rrigt-tw.png",
      image4: "./assets/images/left-tw.png",
      logo: "./assets/images/ponic-estrella-01.png"
    };
    localStorage.setItem("character", JSON.stringify(character));
  } else if (c == "poni8") {
    character = {
      name: "Rarity",
      image1: "./assets/images/back-r.png",
      image2: "./assets/images/front-r.png",
      image3: "./assets/images/right-r.png",
      image4: "./assets/images/left-r.png",
      logo: "./assets/images/ponic-cristales-01.png"
    };
    localStorage.setItem("character", JSON.stringify(character));
  }
}

function characterSonic(c) {
  if (c == "sonic1") {
    sonics = {
      name: "Sonic",
      image1: "./assets/images/sonic_002.png",
      logo: "./assets/images/sonic-logo-500x375.png"
    };
    localStorage.setItem("sonics", JSON.stringify(sonics));
  } else if (c == "sonic2") {
    sonics = {
      name: "Sonic",
      image1: "./assets/images/sonic_004.png",
      logo: "./assets/images/sonic-logo-500x375.png"
    };
    localStorage.setItem("sonics", JSON.stringify(sonics));
  }
}
