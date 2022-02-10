import * as yup from 'yup';

export const PostSchema = yup.object().shape({
    Title: yup.string()
                .max(20, "Tamanho do titulo maior que 20 caracteres")
                .required("Titulo obrigatorio"),
    Conteudo: yup.string()
                .max(200, "Tamanho maior que 200")
                .required("Conteudo Obrigatorio")
})