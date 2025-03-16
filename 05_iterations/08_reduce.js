// reduce

const myNums = [1, 2, 3]

const myTotal = myNums.reduce((acc, currVal) => {
    console.log(`acc: ${acc} and currVal: ${currVal}`);
    
    return acc + currVal;
    
}, 0)

console.log(myTotal);





const shoppingCard = [
    {
        itemName: 'js course',
        price: 2999
    },
    {
        itemName: 'py course',
        price: 999
    },
    {
        itemName: 'mobile course',
        price: 5999
    },
    {
        itemName: 'data science course',
        price: 12999
    },
    {
        itemName: 'react course',
        price: 1999
    },
];

const priceToPay = shoppingCard.reduce((acc, item) => (acc + item.price), 0)

console.log(priceToPay);