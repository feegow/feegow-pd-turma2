import PostRepository from './post.repository';
import {Post} from '../../entities/post';
import {Request, Response} from 'express'
import { PostSchema } from '../../schemas/post.schema';
import validateBody from '../../decoratos/validateBody.decorator';
import Authenticated from '../../decoratos/Authentication.decorator';

class PostController{

    async getPostId(req : Request,res: Response){
        const params = req.params;
        res.send(params)
    }
    
    async getPostFilters(req : Request, res: Response){
        const query = req.query;
        const postRepository = new PostRepository(); 
        
        res.send(await postRepository.getPosts(query))
    }
    
    @Authenticated()
    @validateBody(PostSchema)
    async addPost(req : Request, res: Response){
        const postRepository = new PostRepository(); 
        const {body} = req;
    
        console.log('ENTROU NO METODO')
        try{
            const post = new Post(body)
            const postId = postRepository.addPost(post);
    
            res.status(200);    
            res.json({postId: postId });
        }catch(ex : any){
            res.status(500);
            res.json({erro: ex.toString()})
        }
    }
    
    @validateBody(PostSchema)
    updatePost(req : Request, res: Response){
        const query = req.query;
    }
    
    deletePost(req : Request, res: Response){
        const query = req.query;
    }
}


export default PostController