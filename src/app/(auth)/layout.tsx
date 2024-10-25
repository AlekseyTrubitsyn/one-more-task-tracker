import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function AuthLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const { userId } = await auth();
  console.log("userId", userId);

  if (userId != null) redirect("/under-construction");

  return (
    <div className="min-h-screen flex flex-col justify-center items-center page-with-header">
      {children}
    </div>
  );
}
