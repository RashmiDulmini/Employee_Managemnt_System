import express from 'express'

const router = express.Router()

router.post('/adminlogin',(req, res) => {
    console.log("Server is running")
})

export {router as adminRouter}