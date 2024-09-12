const logger = (req, res, next) => {  // next is a callback that we have to run to move to the next middleware
    const method = req.method
    const url = req.url
    const time = new Date().getUTCDate()
    console.log(method, url, time)
    next()
}

module.exports = logger