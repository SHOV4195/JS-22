// Напишите скрипт который проверяет возможность отрыть чат с пользователем.
// Для этого пользователь должен быть:
// * - другом
// * - онлайн
// * - без режима не безпокоить

const isOnline = true;
const isFriend = true;
const isDnd = false;

const canOpenChat = isOnline && isFriend && !isDnd;
console.log('Можно открыть чат?', canOpenChat);