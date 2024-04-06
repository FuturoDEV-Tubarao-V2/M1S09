
// fetch("https://dummyjson.com/users")
// .then((resposta) => resposta.json())
// .then((data) => {
//     console.log(data)
// })

async function getUsers() {
    var response = await fetch("https://dummyjson.com/users")
    var data = await response.json()
    
    console.log(data.users[0])
}

// getUsers()

async function createProduct() {
    var product = {
        title: 'Iphone 15',
        price: 15,
    }

    var response = await fetch("https://dummyjson.com/products/add", {
        method: 'POST',
        body: JSON.stringify(product)
    })

    var data = await response.json()

    console.log(data)
}

// createProduct()

async function updateProduct() {
    var productUpdated = {
        title: "iPhone DASDASDAS",
        price: 15
    }

    var response = await fetch("https://dummyjson.com/products/1", {
        method: 'PUT',
        body: JSON.stringify(productUpdated)
    })

    var data = await response.json()

    console.log(data)
}

// updateProduct()

async function deleteProduct() {

    var response = await fetch("https://dummyjson.com/products/1", {
        method: 'DELETE',
    })

    var data = await response.json()

    console.log(data)
}

deleteProduct()