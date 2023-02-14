const testData = [
    { id: 1, name: "HASIB" },
    { id: 2, name: "SAKIB" },
    { id: 3, name: "ASMA" },
    { id: 4, name: "FAHIM" },
    { id: 5, name: "MIRAZ" },
]



module.exports.getTest = (req, res, next) => {
    const { limit, page } = req.query;
    console.log(limit, page)
    res.json(testData.slice(0, limit))
    // res.download(__dirname + "/test.controller.js");
    // console.log(req)
}
module.exports.getTestBYID = (req, res, next) => {
    console.log(req.params)
    const foundName = testData.find(data => data.id === Number(req.params.id))
    res.send(`TEST FOUND NAME= ${foundName.name}`)
    // res.download(__dirname + "/test.controller.js");
    // console.log(req)
}

module.exports.saveTest = (req, res, next) => {
    console.log(req.body)
    const newSaveData = testData.push(req.body)
    res.json(testData);
}

module.exports.updateDataByPatch = (req, res, next) => {
    // const newData = req.body;
    const { id } = req.params;
    const filter = { _id: req.params }
    let newData = testData.find(data => data.id === Number(id))
    newData = req.body
    res.json(newData)
}
module.exports.updateCreateByPut = (req, res, next) => {
    // const newData = req.body;
    const { id } = req.params;
    const filter = { _id: req.params }
    let newData = testData.find(data => data.id === Number(id))
    newData = req.body
    res.json(newData)
}
module.exports.deleteByDelete = (req, res, next) => {
    // const newData = req.body;
    const { id } = req.params;
    // const filter = { _id: req.params }
    let newData = testData.filter(data => data.id !== Number(id))
    // newData = req.body
    res.json(newData)
}
