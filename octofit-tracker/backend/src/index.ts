import express from 'express'
import mongoose from 'mongoose'
import userRoutes from './routes/users'

const app = express()
app.use(express.json())

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit'
const PORT = Number(process.env.PORT) || 8000

mongoose.connect(MONGODB_URI)
  .then(()=> console.log('Connected to MongoDB'))
  .catch(err=> console.error('MongoDB connection error', err))

app.get('/health', (_req, res) => res.json({ status: 'ok' }))
app.use('/api/users', userRoutes)

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
