import uuidv4 from 'uuid/v4';

export const generateId = ()=>uuidv4();

export const generateTimeStamp = ()=>Date.now();

export const createDeck = (title)=>({
  id: generateId(),
  title,
  count: 0
});


export const createCard = (deckId, question, answer)=>({
  id: generateId(),
  deckId,
  question,
  answer
});


export const createNotification = ()=>({
  title: 'UdaciCards Reminder',
  body: "👋 don't forget to study today!",
  ios: {
    sound: true,
  },
  android: {
    sound: true,
    priority: 'high',
    sticky: false,
    vibrate: true,
  }
});
