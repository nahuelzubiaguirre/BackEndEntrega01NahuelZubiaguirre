import express from 'express' 
import productsRouter from './routes/products.router.js'
import cartsRouter from './routes/carts.router.js'

const app = express()

const server = app.listen(8080, () => {
    console.log("El servidor se encuentra escuchando")
})

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use ('/api/products', productsRouter)
app.use ('/api/carts', cartsRouter)

  
