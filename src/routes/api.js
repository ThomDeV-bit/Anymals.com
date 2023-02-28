const userControlers = require('../../app_controlers/userControlers')


const express=require('express')


const router=express.Router()

router.use(express.json())



router.get('/:showAnymal',async(request,response)=>{
    try {
         const cliente = await userControlers.showAnymal()
         response.json(cliente)
        
    } catch (error) {
        console.log(erro)
        return response.json({error:'ERROR CONNECTING DATABASE'})
    } 
})


router.get('/',(request,response)=>{
    response.json({site : 'ANYMALS'})
})


router.post('/:addAnymal',async(request,response)=>{
    try { 
        await userControlers.insertAnymal(request.body)
        return response.json(request.body)
        
    } catch (error) {
        console.log(error)
        return response.json(error)
    }
})


router.put('/updateAnymal/:id',async(request,response)=>{
    try {
        const getByid =  request.params.id;
        await userControlers.updateAnymal(getByid, request.body)
        return response.json(request.body) }

    catch(error){
        console.log(error)
        return response.json(404 + ' NOT FOUND')   
    }
})



router.delete('/deleteAnymal/:id',async(request,response)=>{
    try {
        await userControlers.deleteAnymal(request.params.id)
        response.end()
        
    } catch (error) {
        console.log(error)
        return response.json(404 + ' NOT FOUND ')
    }
   
})
    


module.exports=router;