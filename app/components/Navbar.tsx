"use client";

import {
  Bars3Icon,
  MapPinIcon,
  PhoneIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <React.Fragment>
      <header className="">
        {/* top - nav */}
        <div className="w-full p-2  bg-black text-white">
          <div className="container flex justify-end items-center mx-auto">
            <MapPinIcon className="w-6 h-6" />
            <p className="ml-3">44B, Ajaguna Street, Adeba Phase 2.</p>
          </div>
        </div>

        {/* bottom - nav */}
        <div className="flex items-center  p-4 bg-white container mx-auto justify-between">
          {/* logo */}
          <div className="text-xl font-bold ">FABCITY</div>

          {/* right */}
          <div className="flex justify-center items-center">
            {/* schedule a talk */}
            <button className="px-5 py-3 border-2 border-black rounded-full">
              Schedule A Talk
            </button>

            {/* telephone */}
            <PhoneIcon className="w-6 h-6 ml-3" />
            {/* drawer */}
            <button
              type="button"
              className="ml-3"
              data-drawer-target="drawer-navigation"
              data-drawer-show="drawer-navigation"
              aria-controls="drawer-navigation"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon className="h-8 w-8 cursor-pointer transition-all" />
              ) : (
                <Bars3Icon className="h-8 w-8 cursor-pointer transition-all" />
              )}
            </button>
          </div>
        </div>
      </header>

      <nav
        id="drawer-navigation"
        className="transition-all fixed z-10 h-full w-full p-4 overflow-y-auto bg-red"
        style={openNav ? { left: "0" } : { left: "-100%" }}
      ></nav>
    </React.Fragment>
  );
}
