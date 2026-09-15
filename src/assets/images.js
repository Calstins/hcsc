// All photography is sourced from Pexels (free to use, no attribution legally
// required). Photographer credit is kept here as a courtesy.
// Pattern: https://images.pexels.com/photos/{id}/pexels-photo-{id}.jpeg

const pexels = (id, w = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const IMAGES = {
  // Warm, environmental portrait used across hero moments.
  heroDoctor: pexels(18788957, 1800), // Carmel Nsenga
  // Clean studio portrait, used for the About page intro.
  aboutDoctor: pexels(19596247, 1600), // Martins John
  // Consultation / diagnostic scene for the Services intro.
  consultation: pexels(7088535, 1600), // MART PRODUCTION

  // Clinical team, used across the About "meet the team" strip and cards.
  team: [
    { src: pexels(37454252, 900), alt: "Consultant smiling in clinic attire with a stethoscope" },
    { src: pexels(19218034, 900), alt: "Specialist in a lab coat holding a stethoscope" },
    { src: pexels(20020599, 900), alt: "Doctor in scrubs, arms crossed, ready for consultation" },
    { src: pexels(9048351, 900), alt: "Healthcare professional in a teal scrub suit" },
  ],

  // Facility gallery — reception and waiting areas.
  facility: [
    { src: pexels(33812025, 1400), alt: "Warm, modern clinic reception with wood-panel accents" },
    { src: pexels(8459996, 1400), alt: "Bright, minimal patient waiting room" },
    { src: pexels(5019706, 1200), alt: "Consultant in a white coat reviewing a patient file" },
    { src: pexels(34417761, 1200), alt: "Confident specialist ready for the day's appointments" },
  ],

  // Secondary portraits used on Services and Contact pages.
  servicesSide: pexels(19963164, 1400), // Tessy Agbonome
  contactSide: pexels(38740056, 1400), // Abdulkadir Muhammad Sani
};
