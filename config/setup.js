const db = require('./db')

const createPet = `
    CREATE TABLE pets (
        id      INTEGER PRIMARY KEY,
        name    TEXT NOT NULL,
        status  TEXT NOT NULL
    )
`

db.serialize (() => {
    db.run(createPet, (err) => {
        if (!err) {
            console.log('Table created')
        } else {
            console.log(err)
        }
    })
})
