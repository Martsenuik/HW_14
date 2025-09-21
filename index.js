////////////// завдання 1 ///////////////


function delayedPromise(value, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value);
        }, delay);
    });
}


const promises = [
    delayedPromise("Проміс 1", 1500),
    delayedPromise("Проміс 2", 500),
    delayedPromise("Проміс 3", 2000),
    delayedPromise("Проміс 4", 1000),
    delayedPromise("Проміс 5", 800)
];


Promise.all(promises)
    .then((results) => {
       
        console.log("Усі проміси виконано. Результати:");
        results.forEach((result, index) => {
            console.log(`Результат ${index + 1}:`, result);
        });
    })
    .catch((error) => {
        console.error("Один із промісів відхилено:", error);
    });


////////////// завдання 2 ///////////////



function randomDelay(value) {
    const delay = Math.floor(Math.random() * 4000) + 1000; 
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value + ` (затримка: ${delay} мс)`);
        }, delay);
    });
}


const promise = [
    randomDelay("Проміс A"),
    randomDelay("Проміс B"),
    randomDelay("Проміс C"),
    randomDelay("Проміс D"),
    randomDelay("Проміс E")
];


Promise.race(promise)
    .then((fastestResult) => {
        
        console.log("Найшвидший проміс:", fastestResult);
    })
    .catch((error) => {
        console.error("Проміс завершився з помилкою:", error);
    });



