"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("0c7eae80-6e12-4f8b-9f42-d997cb9e37b4");
  }, []);

  return null;
};