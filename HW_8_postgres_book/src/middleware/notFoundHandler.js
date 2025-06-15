// ошибка если маршрут не найден адрес

const notFoundHandler = (req, res) => {
    res.status(404).json({
        message: `Маршрут "${req.url}" не найден, нет такого адреса`,
    });
};
export default notFoundHandler;