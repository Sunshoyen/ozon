const getData = (str) => {

    return fetch(`
    https://testozon-d0a28-default-rtdb.firebaseio.com/goods.json`
    )
        .then((response) => {
            return response.json()
        })

}

export default getData