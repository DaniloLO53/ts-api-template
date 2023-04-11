import { Router } from "express";
import { createUserSchema } from "@/schemas/users.schemas";
import { validateBody } from "@/middlewares/validateSchema.middleware";
import { users } from "@/controllers/users.controllers";

const userRouter = Router();

userRouter.post("/", validateBody(createUserSchema), users);

export { userRouter };
