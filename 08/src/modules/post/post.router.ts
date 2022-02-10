import {Router} from 'express'
import PostController from './post.controller'
const ApiRouters = Router();
const ViewRouters = Router();
import {ShowView} from '../../views/_viewManager'

/**
 * Rotas de API
 */

const postController = new PostController();

ApiRouters.post('/', postController.addPost);

ApiRouters.get('/', postController.getPostFilters)

ApiRouters.delete('/:id', postController.deletePost)

ApiRouters.get('/:id', postController.getPostId)


/**
 * Rotas de View
 */


ViewRouters.get('/', (_,res) => {
    res.render('pages/post',{data: {}})
    // res.send(ShowView('post.create'))
});

ViewRouters.post('/', (req,res) => {
    let result = {}
    try{
        Object.assign(result, req.body);
        result = {...result, id: postController.addPost(req, res)}

        res.status(200);
    }catch(ex){
        console.error(ex)
        res.status(500);
    }
    
    res.render('pages/post',{data: result})
    //res.send(ShowView('post.create'))
});

export {
    ApiRouters,
    ViewRouters
};