
export const instructors = [
  {
    id: 1,
    name: 'Marco Bianchi',
    bio: {
      en: 'Federal instructor with a passion for freeriding. Marco will make you discover the most exciting off-piste routes.',
      de: 'Bundeslehrer mit einer Leidenschaft für Freeriden. Marco wird Sie die aufregendsten Off-Piste-Routen entdecken lassen.',
      it: 'Maestro federale con la passione per il freeride. Marco vi farà scoprire i percorsi fuoripista più emozionanti.',
    },
    image: 'https://placehold.co/400x400.png',
    hint: 'man portrait',
  },
  {
    id: 2,
    name: 'Julia Schmidt',
    bio: {
      en: 'Specialized in teaching children, Julia turns every lesson into a fun game on the snow.',
      de: 'Spezialisiert auf den Unterricht von Kindern, verwandelt Julia jede Stunde in ein lustiges Spiel im Schnee.',
      it: 'Specializzata nell\'insegnamento ai bambini, Julia trasforma ogni lezione in un divertente gioco sulla neve.',
    },
    image: 'https://placehold.co/400x400.png',
    hint: 'woman portrait',
  },
  {
    id: 3,
    name: 'Luca Rossi',
    bio: {
      en: 'Expert in carving and racing techniques. With Luca, you will improve your style and speed on the slope.',
      de: 'Experte für Carving- und Renntechniken. Mit Luca verbessern Sie Ihren Stil und Ihre Geschwindigkeit auf der Piste.',
      it: 'Esperto di tecnica carving e da gara. Con Luca migliorerai il tuo stile e la tua velocità in pista.',
    },
    image: 'https://placehold.co/400x400.png',
    hint: 'man smiling',
  },
  {
    id: 4,
    name: 'Anna Esposito',
    bio: {
        en: 'Anna is a patient and encouraging instructor, perfect for beginners and those who are a bit fearful.',
        de: 'Anna ist eine geduldige und ermutigende Lehrerin, perfekt für Anfänger und diejenigen, die ein wenig ängstlich sind.',
        it: 'Anna è un\'istruttrice paziente e incoraggiante, perfetta per i principianti e per chi ha un po\' di timore.',
    },
    image: 'https://placehold.co/400x400.png',
    hint: 'woman nature',
  },
];

export const priceList2025_2026 = {
  groupCourses2Hours: {
    "21.12.25-09.01.26": {
      "1day": 62, "2days": 113, "3days": 150, "4days": 180, "5days": 185, "5daysAdventureDay": 220, "extraDay": 15
    },
    "29.11.25-20.12.25_10.01.26-07.02.26_09.03.26-12.04.26": {
      "1day": 57, "2days": 102, "3days": 140, "4days": 165, "5days": 175, "5daysAdventureDay": 235, "extraDay": 15
    },
    "08.02.26-08.03.26": {
      "1day": 62, "2days": 113, "3days": 150, "4days": 180, "5days": 185, "5daysAdventureDay": 220, "extraDay": 15
    }
  },
  privateLessons: {
    "21.12.25-09.01.26": { "1person": 60, "additionalPerson": 15 },
    "29.11.25-20.12.25_10.01.26-07.02.26_09.03.26-12.04.26": { "1person": 55, "additionalPerson": 15 },
    "08.02.26-08.03.26": { "1person": 60, "additionalPerson": 15 },
    "10:00-13:00": { "price": 70 }
  },
  superCourses: {
    "21.12.25-09.01.26_08.02.26-08.03.26": {
      "3persons": { "5hours": 135, "10hours": 240 },
      "4persons": { "5hours": 125, "10hours": 210 },
      "5persons": { "5hours": 115, "10hours": 195 }
    },
    "29.11.25-20.12.25_10.01.26-07.02.26_09.03.26-12.04.26": {
      "3persons": { "5hours": 125, "10hours": 220 },
      "4persons": { "5hours": 110, "10hours": 195 },
      "5persons": { "5hours": 105, "10hours": 180 }
    }
  },
  weekendCourse: {
    "09.01.26-12.04.26": {
      "3days": { "price": 155, "time": { "friday": "14:00-16:00", "saturday": "10:00-12:00", "sunday": "10:00-12:00" } }
    }
  },
  fullDayWithLunch: {
    "21.12.25-09.01.26_08.02.26-08.03.26": { "5days": 445, "4days": 380, "3days": 310, "2days": 225, "1day": 125 },
    "29.11.25-20.12.25_10.01.26-07.02.26_09.03.26-12.04.26": { "5days": 420, "4days": 365, "3days": 299, "2days": 220, "1day": 115 }
  },
  freeride: {
    "21.12.25-09.01.26_08.02.26-08.03.26": {
      "2persons": { "1day": 170, "2days": 320 }, "3persons": { "1day": 130, "2days": 245 }, "4persons": { "1day": 115, "2days": 210 }
    },
    "29.11.25-20.12.25_10.01.26-07.02.26_09.03.26-12.04.26": {
      "2persons": { "1day": 160, "2days": 295 }, "3persons": { "1day": 125, "2days": 220 }, "4persons": { "1day": 105, "2days": 195 }
    }
  },
  juniorClubHalfDayWithLunch: {
    anyPeriod: { "price": 55, "time": "12:00-15:00" }
  }
};
