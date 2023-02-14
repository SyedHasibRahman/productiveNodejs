
let count = 0;
const viewCount = (req, res, next) => {
    count++;
    console.log(count)
    // res.send(`ViewCount=${count}`)
    next();
}

module.exports = viewCount;