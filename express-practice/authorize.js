const authorize = (req, res, next) => {
    const {user} = req.query
    if(user === 'john') { // u have to set a query parameter in the url as ?user=john
        req.user = {name: 'john', id: 3}
        next() // if we don't call next, the request will be stuck
    } else {
        res.status(401).send('Unauthorized')
    }
    // console.log('Authorize')
    // next()  // if we don't call next, the request will be stuck
}

module.exports = authorize
    