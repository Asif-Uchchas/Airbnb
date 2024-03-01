"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import logo from "/public/logo.png"

const Logo = () => {

    const router = useRouter()
  return (
    <div>
      <Image
              onClick={() => router.push("/")}
              src={logo}
              alt="logo"
              height={100}
              width={100}
              className="hidden md:block cursor-pointer"
          />
    </div>
  );
};

export default Logo;
