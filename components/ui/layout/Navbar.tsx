"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navLinks } from "@/config/navLinks";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  FiMenu,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

export default function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (label: string) => {
    setOpenMenu((prev) => (prev === label ? null : label));
  };

  const isActive = (href?: string) => {
    if (!href) return false;
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between h-16 px-5 sm:px-6 md:px-10">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-lg md:text-2xl font-bold text-green-800"
        >
          Lokpanta
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium text-lg">
          {navLinks.map((item) => {
            if (item.children) {
              return (
                <li key={item.label}>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        className={`flex items-center gap-1 transition ${
                          item.children.some((child) =>
                            isActive(child.href)
                          )
                            ? "text-green-700 font-semibold"
                            : "hover:text-green-700"
                        }`}
                      >
                        {item.label}
                        <FiChevronDown size={16} />
                      </button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="w-52">
                      {item.children.map((child) => (
                        <DropdownMenuItem key={child.label} asChild>
                          <Link
                            href={child.href!}
                            className={`w-full ${
                              isActive(child.href)
                                ? "text-green-700 font-semibold"
                                : ""
                            }`}
                          >
                            {child.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              );
            }

            return (
              <li key={item.label}>
                <Link
                  href={item.href!}
                  className={`transition ${
                    isActive(item.href)
                      ? "text-green-700 font-semibold"
                      : "hover:text-green-700"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
            Explore
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button>
                <FiMenu size={24} />
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[280px] px-6">
              <div className="flex flex-col gap-6 mt-10">

                {navLinks.map((item) => (
                  <div key={item.label}>
                    
                    {/* Parent */}
                    {item.children ? (
                      <button
                        onClick={() => toggleMenu(item.label)}
                        className="flex items-center justify-between w-full font-semibold text-gray-800 py-1"
                      >
                        <span>{item.label}</span>
                        {openMenu === item.label ? (
                          <FiChevronUp />
                        ) : (
                          <FiChevronDown />
                        )}
                      </button>
                    ) : (
                      <Link
                        href={item.href!}
                        className={`block py-1 font-semibold ${
                          isActive(item.href)
                            ? "text-green-700"
                            : "text-gray-800 hover:text-green-700"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}

                    {/* Children (Animated) */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openMenu === item.label
                          ? "max-h-96 opacity-100 mt-3"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {item.children && (
                        <div className="ml-4 flex flex-col gap-3">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href!}
                              className={`${
                                isActive(child.href)
                                  ? "text-green-700 font-semibold"
                                  : "text-gray-600 hover:text-green-700"
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/* CTA */}
                <Button className="mt-6 bg-yellow-500 text-white">
                  Explore Lokpanta
                </Button>

              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </nav>
  );
}