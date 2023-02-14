const usersData = [
    {
        id: 1,
        gender: 'Male',
        name: 'John Doe',
        contact: '+1 123-456-7890',
        address: '123 Main St, Anytown USA',
        photoUrl: 'https://example.com/photos/1.jpg'
    },
    {
        id: 2,
        gender: 'Female',
        name: 'Jane Smith',
        contact: '+44 123-456-7890',
        address: '456 High St, Anytown UK',
        photoUrl: 'https://example.com/photos/2.jpg'
    },
    {
        id: 3,
        gender: 'Male',
        name: 'Alex Lee',
        contact: '+61 123-456-7890',
        address: '789 Low St, Anytown AU',
        photoUrl: 'https://example.com/photos/3.jpg'
    },
    {
        id: 4,
        gender: 'Male',
        name: 'Tom Jones',
        contact: '+1 123-456-7890',
        address: '321 Elm St, Anytown USA',
        photoUrl: 'https://example.com/photos/10.jpg'
    },
    {
        id: 5,
        gender: 'Male',
        name: 'John Doe',
        contact: '+1 123-456-7890',
        address: '123 Main St, Anytown USA',
        photoUrl: 'https://example.com/photos/1.jpg'
    },
    {
        id: 6,
        gender: 'Female',
        name: 'Jane Smith',
        contact: '+44 123-456-7890',
        address: '456 High St, Anytown UK',
        photoUrl: 'https://example.com/photos/2.jpg'
    },
    {
        id: 7,
        gender: 'Female',
        name: 'Alex Lee',
        contact: '+61 123-456-7890',
        address: '789 Low St, Anytown AU',
        photoUrl: 'https://example.com/photos/3.jpg'
    },
    {
        id: 8,
        gender: 'Male',
        name: 'Tom Jones',
        contact: '+1 123-456-7890',
        address: '321 Elm St, Anytown USA',
        photoUrl: 'https://example.com/photos/10.jpg'
    }
];

module.exports.randomUser = (req, res, next) => {
    // let random = Math.floor((Math.random() * 8) + 1)
    function random_item(items) {

        return items[Math.floor(Math.random() * items.length)];

    }
    const randomUser = random_item(usersData)
    console.log(randomUser)
    res.json(randomUser)
}
module.exports.allUser = (req, res, next) => {
    const { limit } = req.query;
    console.log(limit)
    res.json(usersData.slice(0, limit))
    // res.json(usersData)
}
module.exports.saveUser = (req, res, next) => {
    const newUser = req.body;
    if (!newUser.id) { res.json("USER ID IS REQUIRED") }
    else if (!newUser.gender) { res.json("USER gender IS REQUIRED") }
    else if (!newUser.name) { res.json("USER name IS REQUIRED") }
    else if (!newUser.contact) { res.json("USER contact IS REQUIRED") }
    else if (!newUser.address) { res.json("USER address IS REQUIRED") }
    else if (!newUser.photoUrl) { res.json("USER photoUrl IS REQUIRED") }
    else {
        usersData.push(newUser)
        res.json(usersData)
    }
}
module.exports.updateUser = (req, res, next) => {
    const { id } = req.params;
    // usersData.push(newUser) 

    // validate the user ID => It should be more clear 
    const newUserData = usersData.find(user => user.id === Number(id));

    console.log(newUserData)

    if (req.body.id) {
        newUserData.id = id
        newUserData.gender = req.body.gender
        newUserData.name = req.body.name
        newUserData.contact = req.body.contact
        newUserData.address = req.body.address
        newUserData.photoUrl = req.body.photoUrl

        res.send(newUserData)
    } else {

        res.json("ERROR BODY ID NOT FOUND")
    }
}

module.exports.bulkUpdateUsers = (req, res, next) => {
    const { id } = req.params;
    const updates = req.body
    // usersData.push(newUser) 

    // validate the user ID => It should be more clear 
    // const newUserData = usersData.find(user => user.id === Number(id));
    console.log(updates, usersData)
    const updatedData = usersData.map(userData => {
        const update = updates.find(u => Number(u.id) === Number(userData.id));
        if (update) {
            return { ...userData, ...update };
        }
        return userData;
    });
    res.json(updatedData)

}
module.exports.deleteUser = (req, res, next) => {
    const { id } = req.params;
    // usersData.push(newUser) 

    // validate the user ID => It should be more clear 
    const newUserData = usersData.filter(user => user.id !== Number(id));

    console.log(newUserData)

    res.send(newUserData)
}