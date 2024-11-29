import { getUserTodoListAction } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";
import TodoTable from "@/components/TodosTable";
import { auth } from "@clerk/nextjs/server";

const Home = async () => {
  const { userId } = await auth();

  const todos = await getUserTodoListAction(userId);
  return (
    <div className="container min-h-screen py-20 space-y-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-right my-5">
          <AddTodoForm userId={userId} />
        </div>
        <div className="">
          <TodoTable todos={todos} />
        </div>
      </div>
    </div>
  );
};

export default Home;
