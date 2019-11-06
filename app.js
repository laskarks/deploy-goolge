const NODE_ENV = process.env.NODE_ENV
if (NODE_ENV === 'development') {
  require('dotenv').config()
}

const express = require('express');
const app = express()
const cors = require('cors')

const PORT = process.env.PORT || 3000


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
let data = [
    {
        name: 'Nuki',
        clan: 'Humble-Fox'
    },
    {
        name: 'Farras',
        clan: 'Uchi nyampur'
    },
    {
        name: 'Tigor',
        clan: 'Fox'
    }
]

app.get('/clans', function (req,res) {
    res.send(data)
})

app.listen(PORT, () => {
    console.log(`Server Started on ${PORT}`)
})