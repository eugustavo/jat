'use client'

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const { push } =  useRouter();

  function handleSignUp() {
    push("/dashboard");
  }

  return (
    <div className="flex flex-col justify-center min-h-screen">
      <header className="flex w-full pt-12 px-16 items-center justify-between">
        <h1 className="text-2xl font-bold">
          .jat
        </h1>

        <div className="space-x-8">
          <Link href="" className="text-sm text-blue-500 hover:text-blue-500/90 transition-colors">
            Sign In
          </Link>

          <Button onClick={handleSignUp} size="lg" className="text-white font-normal text-xs">
            Start Free
          </Button>
        </div>
      </header>

      <div className="flex flex-col flex-1 items-center justify-center space-y-16">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-gray-50 text-center text-[88px] font-bold leading-[86px] mb-12">
            Organize and track your
            <br />
            job applications
          </h1>

          <p className="text-muted-foreground">
            Make managing your job applications less stressful with the help of an application that organizes your job applications intelligently
          </p>
        </div>

        <Button size="lg" className="text-white font-normal">
          Sign up for free
        </Button>
      </div>      
    </div>
  )
}
