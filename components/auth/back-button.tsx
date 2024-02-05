"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BackButtonProps {
  label: string;
  href: string;
}

export const BackButton: React.FC<BackButtonProps> = ({ label, href }) => {
  return <Button className="font-normal w-full" variant="link" size="sm" asChild>
    <Link href={href}>
      {label}
    </Link>
  </Button>;
};
