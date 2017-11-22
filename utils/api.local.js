import {AsyncStorage} from 'react-native';
import { Notifications, Permissions } from 'expo'

import {createNotification} from './helpers';
import data from './data.development';
import {
  DECK_STORAGE_KEY,
  CARD_STORAGE_KEY,
  QUIZ_REMINDER_KEY
} from './api.constants';


const mergeWithTestData = (results, id) => {
  if (__DEV__) {
    return {
      ...JSON.parse(results),
      ...data[id]
    };
  }
  return results;
};


const loadDecks = ()=>
  AsyncStorage
    .getItem(DECK_STORAGE_KEY)
    .then(results=>mergeWithTestData(results, DECK_STORAGE_KEY));

const addDeck = (deck)=>
  AsyncStorage
    .mergeItem(DECK_STORAGE_KEY, JSON.stringify({
      [deck.id]:deck
    }));

const removeDeck = (deck)=>
  AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(results=>{
      let data = JSON.parse(results);
      data[deck.id] = undefined;
      delete data[deck.id];
      AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data));
    });

const updateDeckCardCount = (id, count) =>
  AsyncStorage
    .mergeItem(DECK_STORAGE_KEY, JSON.stringify({
      [id]:{
        count
      }
    }));

const loadCards = id =>
  AsyncStorage
    .getItem(`${CARD_STORAGE_KEY}:${id}`)
    .then(results=>mergeWithTestData(results, `${CARD_STORAGE_KEY}:${id}`));

const addCard = async (deck, card) =>{
  await updateDeckCardCount(deck.id, deck.count+1);
  console.log('called');
  return AsyncStorage
    .mergeItem(`${CARD_STORAGE_KEY}:${deck.id}`, JSON.stringify({
      [card.id]:card
    }));
};

const clearNotifications = ()=>
  AsyncStorage.removeItem(QUIZ_REMINDER_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync);

const setNotification = ()=>
  AsyncStorage.getItem(QUIZ_REMINDER_KEY)
    .then(JSON.parse)
    .then(data=>{
      if(data === null){
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({status})=>{
            if(status === 'granted'){

              Notifications.cancelAllScheduledNotificationsAsync();

              let reminderTime = new Date();
              reminderTime.setDate(reminderTime.getDate() + 1);
              reminderTime.setHours(20);
              reminderTime.setMinutes(0);

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: reminderTime,
                  repeat: 'day',
                }
              );

              AsyncStorage.setItem(QUIZ_REMINDER_KEY, JSON.stringify(true));

            }
          })
      }
    });

export default {
  loadDecks,
  addDeck,
  removeDeck,
  loadCards,
  addCard,
  clearNotifications,
  setNotification
};
