"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("8b7a697f-c951-401e-b33b-c1765fc632b3");
  }, []);

  return null;
};
