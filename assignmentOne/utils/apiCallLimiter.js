const { rateLimit } = require("express-rate-limit")

module.exports.limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 2, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message:
        'Too many accounts created from this IP, please try again after 15 minutes',
})

// Apply the rate limiting middleware to all requests
// app.use(limiter)