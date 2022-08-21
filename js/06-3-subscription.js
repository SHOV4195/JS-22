// Напиши скрипт проверки подписки пользователя при доступе к контенту
// Есть три типа подписки: free, pro and vip.
// Получить доступ могут только пользователи pro and vip

const subscription = 'pro';
const canAccessContent = subscription === 'pro' || subscription === 'vip';
console.log('Есть доступ к контенту?', canAccessContent);