"use client";

import Link from "next/link";
import { useState } from "react";
import { MenuIcon, XIcon, HomeIcon, UserIcon, ViewGridIcon, CollectionIcon } from "@heroicons/react/outline";

export default function Navbar({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-purple-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold">
            MyApp
          </Link>

          {/* Hamburger Icon for mobile */}
          <div className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </div>

          {/* Links for larger screens */}
          <div className="hidden md:flex space-x-6">
            <NavLink href="/admin/dashboard" icon={<HomeIcon className="h-5 w-5" />} label="Dashboard" />
            <NavLink href="/admin/users" icon={<UserIcon className="h-5 w-5" />} label="Users" />
            <NavLink href="/admin/categories" icon={<CollectionIcon className="h-5 w-5" />} label="Categories" />
            <NavLink href="/admin/subcategories" icon={<ViewGridIcon className="h-5 w-5" />} label="SubCategories" />
            <NavLink href="/admin/events" icon={<CollectionIcon className="h-5 w-5" />} label="Events" />
          </div>
        </div>

        {/* Dropdown Menu for mobile */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2">
            <NavLink href="/admin/dashboard" icon={<HomeIcon className="h-5 w-5" />} label="Dashboard" />
            <NavLink href="/admin/users" icon={<UserIcon className="h-5 w-5" />} label="Users" />
            <NavLink href="/admin/categories" icon={<CollectionIcon className="h-5 w-5" />} label="Categories" />
            <NavLink href="/admin/subcategories" icon={<ViewGridIcon className="h-5 w-5" />} label="SubCategories" />
            <NavLink href="/admin/events" icon={<CollectionIcon className="h-5 w-5" />} label="Events" />
          </div>
        )}
      </nav>

      <main>{children}</main>
    </>
  );
}

function NavLink({ href, icon, label }) {
  return (
    <Link href={href} className="flex items-center space-x-2 hover:bg-purple-600 p-2 rounded-md">
      {icon}
      <span>{label}</span>
    </Link>
  );
}
