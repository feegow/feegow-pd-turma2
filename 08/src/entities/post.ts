export class Post{
    public Id: number = 0;
    public Title: string = '';
    public Content: string = '';
    public Tags: string = '';
    public File: string = '';

    constructor({Title, Content, Tags} : any)
    {
        Object.assign(this, {Id:new Date().getTime(),  Title, Content, Tags, CreateDate : new Date()})
    }

}

