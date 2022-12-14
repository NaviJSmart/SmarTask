import React, { useEffect } from "react";

export function useOutsideModal(ref: any, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>) {
    useEffect(() => {
      function handleClickOutside(event: Event) {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsOpen(false)
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }