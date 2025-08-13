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

export const priceList = {
    private: [
        { id: 1, courseKey: "privateHour", price: "€ 70,00", notesKey: "" },
        { id: 2, courseKey: "privateHourExtra", price: "€ 15,00", notesKey: "" },
    ],
    groupKids: [
        { id: 1, courseKey: "group5days", price: "€ 220,00", notesKey: "beginnersSpecial" },
    ],
    groupAdults: [
        { id: 1, courseKey: "group5days", price: "€ 250,00", notesKey: "" },
    ],
};
