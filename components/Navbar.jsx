import Link from "next/link";
import React from "react";
import Button from "./Button";
import { useSession } from "next-auth/react";
import { data } from "autoprefixer";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <div className="h-20 bg-black text-gray-400 flex items-center">
      <div className="wrapper flex justify-between">
        <Link href="/" className="text-white font-semibold">
          Cordemy
        </Link>
        <div className="flex gap-5">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/courses" className="hover:text-white transition-colors">
            Courses
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>

        <div>
          {!session ? (
            <Button
              href="/users/login"
              className="hover:text-white transition-colors"
              placeholder="sign in"
              color="secondary"
              size="default"
            />
          ) : (
            <Button
              href="/users/profile"
              placeholder="profile"
              color="secondary"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
