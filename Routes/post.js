const express = require('express')
const router= express.Router()

//
const {create, list, read, update,remove} = require( '../Controllers/post');

//Routing

router.post('/post', create);
router.get('/myposts', list);
router.get('/post/:slug', read);
router.put('/update/:slug', update);
router.delete('/delete/:slug', remove);


module.exports=router;