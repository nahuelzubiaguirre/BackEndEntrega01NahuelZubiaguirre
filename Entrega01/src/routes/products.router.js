import {Router} from 'express'

const router = Router ()

let products = [] 

router.get('/', (req, res) => {
    res.json(products)
})


router.post ('/', (req, res) => {
    const {id, tittle, description, code, price, status, stock, category, thumbnails} = req.body
    if(!id || !tittle || !description || !code || !price || !status || !stock || !category || !thumbnails){
        return response.status(400).json({error: 'Daros invalidos'})

    }    

    const nuevoProducto = {
        tittle,
        description,
        code,
        price,
        status,
        stock,
        category,
        thumbnails
    }

    products.push(nuevoProducto)
    response.status(201).json(nuevoProducto)
})

router.put ('/', (req, res) => {
    
})

router.delete ('/', (req, res) => {
    
})




export default router;