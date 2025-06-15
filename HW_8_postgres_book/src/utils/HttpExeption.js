const defaultStatusMessages = {
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not Found',
    409: 'Conflict такое уже есть в базе данных',
};
const HttpExeption = (status, message = defaultStatusMessages[status]) =>{
    const error = new Error(message);
    error.status = status;
    return error;
}  

export default HttpExeption;
// Это код для создания пользовательских исключений в приложении.
// Он создает объект ошибки с заданным статусом и сообщением.
// он импортируется в другие части приложения, где нужно выбросить ошибку с определенным статусом.
// Например, если нужно выбросить ошибку 409, то можно использовать:
// throw HttpExeption(409, 'Пользователь с таким email уже существует');