import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex justify-center items-center py-5 mt-5">
      <SignIn />
    </div>
  );
}
