const express = require('express')
const app = express()
const data = require('./data')


// app.get('/', (req, res) => {
//     res.json(data.products)
// })

// app.get('/people', (req, res) => {
//     res.json(data.people)
// })

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req, res) => {
    const newProducts = data.products.map((product) => { // we are using map because we want to return a new array
        const { id, name, image } = product // we are using destructuring to get the values of id, name and image
        return { id, name, image }
    })
    res.json(newProducts)
})

app.get('/api/products/:productID', (req, res) => { // setting a path variable
    // this is how we set a dynamic route 
    const { productID } = req.params
    const singleProduct = data.products.find((product) => product.id === Number(productID))
    if (!singleProduct) {
        return res.status(404).send('Product does not exist')
    }
    res.json(singleProduct)
})

app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query // setting query parameters
    let sortedProducts = [...data.products] //spread operator is used to copy the products array
    if (search) { //this will search the products by name, ie. if we set search=albany
        // then all the products starting with albany will be displayed
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit) { //this will limit the number of products, ie. if we set limit=3 then only 3 products will be displayed
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
        // res.status(200).send('No products matched your search')
        return res.status(200).json({ success: true, data: [] })
    }
    res.status(200).json(sortedProducts)
})

// we can use both query parameters and path variables in a single route
// for example




app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})


/*Path variables and query parameters are both used to pass information in API requests,
 but they serve different purposes and are used in different ways:

Path Variables
Location: Embedded directly in the URL path.
Purpose: Identify specific resources.
Example: /users/{id} where {id} is a path variable representing a specific user ID.
Usage: Typically used to specify which resource you want to access or manipulate.
Encoding: Not URL encoded.


Query Parameters
Location: Appended to the URL after a question mark (?).
Purpose: Provide additional information to filter, sort, or paginate the resources.
Example: /users?sort=name&limit=10 where sort and limit are query parameters.
Usage: Used to refine the results returned by the API.
Encoding: URL encoded.

In summary, path variables are used to specify the resource you are interacting with,
 while query parameters are used to modify or filter the data returned by the API */