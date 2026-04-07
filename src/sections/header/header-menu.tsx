"use client";

import { X } from "lucide-react";
import HeaderNav from "./header-nav";
import HeaderActions from "./header-actions";
interface HeaderMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HeaderMenu({ isOpen, onClose }: HeaderMenuProps) {
  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-black">
          <span className="font-semibold text-lg text-gray-900">Menu</span>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        <HeaderNav
          className="flex flex-col items-start p-6 space-y-6"
          
        />
        <HeaderActions className="p-6 border-t border-black" />
      </div>

      {/* Overlay tối */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm lg:hidden z-40"
          onClick={onClose}
        />
      )}
    </>
  );
}
