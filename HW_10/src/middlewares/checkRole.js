export const checkRole = (requiredRole) => {
    return (req, res, next) => {
        const userRole = req.user?.role;

        if (!userRole) {
            return res.status(403).json({ message: "Нет роли пользователя" });
        }

        if (userRole !== requiredRole) {
            return res.status(403).json({ message: "Доступ запрещён" });
        }

        next();
    };
};
