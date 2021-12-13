enum TEntidade{
    Pagina,
    Post
}

class PersisteceFile {
    protected GravarDados(obj:any): boolean{
        const dados = JSON.stringify(obj);
        //GRAVA NO ARQUIVO
        return this.EscreverNoArquivo(dados);
    }

    private EscreverNoArquivo(dados: string) : boolean{
        return true;
    }

    protected ObterDados(entidade: TEntidade) : Array<any>{
        if(entidade == TEntidade.Pagina)
        {
            return [{id:0, nomePagina: "Page1"}]
        }

        if(entidade == TEntidade.Post)
        {
            return [{id: 0, nomePost: "teste node"},{id: 1, nomePost: "teste node 2"},{id: 2, nomePost: "teste node 3"}];
        }

        return [];
    }
}

class PostPersistence extends PersisteceFile{
    public GravarPost(post:any): boolean{
        return this.GravarDados(post)
    }

    get Post() : Array<any>{
        const posts = this.ObterDados(TEntidade.Post)
        return posts;
    }

}

class PagePersistence extends PersisteceFile{
    public GravarPagina(pagina:any) : boolean{
        return this.GravarDados(pagina);
    }
}

class PostNegocio{
    private persistence : PostPersistence;

    constructor(private nome: string, private  texto:string,private  data:Date){
        this.persistence = new PostPersistence();
    }

    public BuscarPost(id: number) : any{
        const post = this.persistence.Post;

        return post.filter(p => p.id == id);
    }

    public BuscarPart1Post(id: number) : any{
        const posts = this.persistence.Post;
        const post = posts.filter(p => p.id == id);

        const texto = post[0].nomePost;

        return texto.split(" ")[0];
    }


    public GravarPost(){
        return this.persistence.GravarPost({});// .GravarPost({ nome: this.nome, texto: this.texto })
    }
}

enum TCarro{
    Ford,
    Fiat, 
    Honda
}

class Fabrica{
    protected constructor(private tipo: TCarro){
    }

    static Criar(tipo: TCarro){
        throw "Não implementado"

    }
}

class FabricaCarro extends Fabrica{
    public  NomeFabrica : string = "";

    static Criar(tipo: TCarro){
        super.Criar(tipo)

        const fab = new FabricaCarro(tipo);

        if(tipo == TCarro.Fiat)
        return new Fiat();

        if(tipo == TCarro.Ford)

        return new Ford();
    }
}


class Fiat{
    constructor(){

    }
}


class Ford{
    constructor(){

    }
}

class StringFormat {

    static FormataCPF(value: string) :string{
        return value;
    }
}

StringFormat.FormataCPF("")


const carroFord = FabricaCarro.Criar(TCarro.Fiat);

console.log(carroFord)
const post = new PostNegocio("Post1", "Texto", new Date());

console.log(post.BuscarPost(1));
console.log(post.BuscarPart1Post(1));
