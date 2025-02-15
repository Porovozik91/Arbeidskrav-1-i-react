import BackendBakgrunn from "../assets/potet-figurer-master/Backend_bakgrunn.png";
import CybersikkerhetBakgrunn from "../assets/potet-figurer-master/Cybersikkerhet_bakgrunn.png";
import DigitalMarkedsforerBakgrunn from "../assets/potet-figurer-master/Digital markedsforer_bakgrunn.png";
import ForretningsutviklerBakgrunn from "../assets/potet-figurer-master/Forretningsutvikler_bakgrunn.png";
import FrontendBakgrunn from "../assets/potet-figurer-master/Frontend_bakgrunn.png";
import ProsjektlederBakgrunn from "../assets/potet-figurer-master/Prosjektleder_bakgrunn.png";
import SalgslederBakgrunn from "../assets/potet-figurer-master/Salgsleder_bakgrunn.png";
import SEOBakgrunn from "../assets/potet-figurer-master/SEO_bakgrunn.png";
import SystemadminBakgrunn from "../assets/potet-figurer-master/Systemadmin_bakgrunn.png";
import WebdesignerBakgrunn from "../assets/potet-figurer-master/Webdesigner_bakgrunn.png";

import Image1 from "../assets/skal ikke klikkes/5a211083a457b2.0830323715121163556732.png";
import Image2 from "../assets/skal ikke klikkes/kisspng-french-fries-potato-vegetable-eggplant-cooking-potato-5a940e0fb59414.1739070415196523677438.png";
import Image3 from "../assets/skal ikke klikkes/kisspng-sweet-potato-yam-food-sweet-potato-slice-5a71d695c04629.6297882515174099417876.png";

// for å skrive logikken på hva som gir og tar poeng
export const plusScoreFigures = [
  BackendBakgrunn,
  CybersikkerhetBakgrunn,
  DigitalMarkedsforerBakgrunn,
  ForretningsutviklerBakgrunn,
  FrontendBakgrunn,
  ProsjektlederBakgrunn,
  SalgslederBakgrunn,
  SEOBakgrunn,
  SystemadminBakgrunn,
  WebdesignerBakgrunn
];

export const minusScoreFigures = [
  Image1,
  Image2,
  Image3
];

// For å holde styr på den siste minusfiguren som ble vist
let lastFigureWasMinus = false;

// Generer et tilfeldig figur fra alle importerte figurer
export const getRandomFigure = () => {
  let newFigure;
  const isMinus = Math.random() < 0.15; //sjansen for å spawne retter etter forige

  if (lastFigureWasMinus && isMinus) {
    // Hvis siste figuren var minusScore, den nye også er minusScore
    newFigure = minusScoreFigures[Math.floor(Math.random() * minusScoreFigures.length)];
  } else {
    // Ellers, velg en tilfeldig figur fra plusScore eller minusScore
    newFigure = isMinus 
      ? minusScoreFigures[Math.floor(Math.random() * minusScoreFigures.length)]
      : plusScoreFigures[Math.floor(Math.random() * plusScoreFigures.length)];
  }

  // Oppdater den siste figuren
  lastFigureWasMinus = isMinus;

  return newFigure;
};