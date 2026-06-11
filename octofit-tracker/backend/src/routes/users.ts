import { Router } from 'express'
import User from '../models/User'

const router = Router()

router.get('/', async (_req, res) => {
  const users = await User.find().limit(20)
  res.json(users)
})

router.post('/', async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save()
    res.status(201).json(user)
  } catch (err) {
    res.status(400).json({ error: err instanceof Error ? err.message : 'Invalid' })
  }
})

export default router
