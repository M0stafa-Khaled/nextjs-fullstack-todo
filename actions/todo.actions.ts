"use server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const getUserTodoListAction = async (userId: string | null) =>
  await prisma.todo.findMany({
    where: {
      user_id: userId as string,
    },
    orderBy: { createdAt: "desc" },
  });

export const createTodoAction = async ({
  title,
  body,
  completed,
  userId,
}: {
  title: string;
  body: string | undefined;
  completed: boolean;
  userId: string | null;
}) => {
  await prisma.todo.create({
    data: {
      title,
      body,
      completed,
      user_id: userId as string,
      createdAt: new Date(),
    },
  });
  revalidatePath("/"); // Revalidate the page - Update cached data
};

export const updateTodoListAction = async ({
  todoId,
  title,
  body,
  completed,
}: {
  todoId: string;
  title: string;
  body: string | undefined;
  completed: boolean | undefined;
}) => {
  await prisma.todo.update({
    where: {
      id: todoId,
    },
    data: {
      title,
      body,
      completed,
    },
  });
  revalidatePath("/");
};

export const deleteTodoListAction = async (todoId: string) => {
  await prisma.todo.delete({ where: { id: todoId } });
  revalidatePath("/");
};
