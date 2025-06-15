import * as Yup from 'yup';

export const bookAddSchema = Yup.object().shape({
    title: Yup.string()
        .min(1, 'Название книги должно быть от 1 до 255 символов')
        .max(255, 'Название книги должно быть от 1 до 255 символов')
        .required('Название книги обязательно'),
    autor: Yup.string()
        .required('Автор книги обязателен'),
    year: Yup.number()
        .integer('Год должен быть целым числом')
        .required('Год публикации обязателен'),
    genre: Yup.string()
        .required('Жанр книги обязателен'),
    description: Yup.string()
        .nullable(),
});

export const bookUpdateSchema = Yup.object().shape({
    title: Yup.string()
        .min(1, 'Название книги должно быть от 1 до 255 символов')
        .max(255, 'Название книги должно быть от 1 до 255 символов'),
    autor: Yup.string(),
    year: Yup.number()
        .integer('Год должен быть целым числом'),
    genre: Yup.string(),
    description: Yup.string()
        .nullable(),
});