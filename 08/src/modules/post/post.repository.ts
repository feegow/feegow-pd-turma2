import fs from 'fs'
import path from 'path'
import { Post } from '../../entities/post';

const pathData = path.join('.','data');

class PostRepository {
    

    constructor(){
        try{
            if(!fs.existsSync(pathData)){
                fs.mkdirSync(pathData,777);
            }
        }
        catch(ex){
            console.log('')
        }
    }

    addPost(post: Post){
        fs.writeFileSync(path.join(pathData,post.Id.toString()), JSON.stringify(post));
        return post.Id;
    }

    async getPosts({search} : any){
        const files = fs.readdirSync(pathData);

        return Promise.all(files.map((file) => new Promise((resolve: (value: Post) => void, reject: (value: Post) => void) => {

            const data = fs.readFileSync(path.join(pathData,file)).toString();
            const json = JSON.parse(data);

            if(json.title.indexOf(search) > -1 || json.content.indexOf(search) > -1){
                resolve({File: file, Title: json.title} as Post)
            }
            else{
                resolve({File: file} as Post)
            }
        })))
        .then(result => {
            return result.filter(item => item.Title)
        });
    }

}


export default PostRepository