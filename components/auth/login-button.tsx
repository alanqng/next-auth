"use client";

import React from "react";
import {useRouter} from "next/navigation";


interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton: React.FC<LoginButtonProps> = ({
  children,
  mode = "redirect",
  asChild,
}) => {
  const router = useRouter()
  const onClick = () => {
    router.push("/auth/login")
    console.log("On Click");
  };

  if (mode === "modal") {
    //TODO Implement Modal
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
