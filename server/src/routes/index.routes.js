import authRouter from "./auth.routes";

const router = function (app) {
    app.use("/auth", authRouter);
};

export default router;
