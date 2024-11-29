import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ITodo } from "@/interfaces";
import { Badge } from "@/components/ui/badge";
import TodosTableActions from "./TodosTableActions";

const TodosTable = ({ todos }: { todos: ITodo[] }) => {
  return (
    <>
      <Table className="rounded-md">
        <TableCaption>A list of your recent tasks.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right py-4">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todos.length === 0
            ? null
            : todos.map((todo) => (
                <TableRow key={todo.id}>
                  <TableCell>
                    {todo.title}
                    {/* <p className="text-sm text-muted-foreground">{todo.body}</p> */}
                  </TableCell>
                  <TableCell>
                    {todo.completed ? (
                      <Badge>Completed</Badge>
                    ) : (
                      <Badge variant={"secondary"}>Uncompleted</Badge>
                    )}
                  </TableCell>
                  <TableCell className="py-3 flex items-center justify-end gap-2">
                    <TodosTableActions todo={todo} />
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell className="text-right py-4">
              {!todos.length ? "You don't have any tasks yet!" : todos.length}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
};

export default TodosTable;
