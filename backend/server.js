import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './db/connection.js'

dotenv.config()

const PORT = process.env.PORT || 5050

connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`.yellow)
})
