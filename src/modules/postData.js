const postData = (cart) => {
    return fetch('https://serednitsky-db-default-rtdb.firebaseio.com/order.json', {
        method: 'POST',
        body: JSON.stringify(cart),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(res => res.json())
}

export default postData