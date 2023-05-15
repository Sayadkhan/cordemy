import Link from "next/link";
import React from "react";
import Button from "./Button";

const Navbar = () => {
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
          <Button
            href="/login"
            className="hover:text-white
          transition-colors"
            placeholder="sign in"
            color="secondary"
            size="default"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
