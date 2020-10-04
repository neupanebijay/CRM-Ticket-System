import React from "react";

export const Footer = () => {
  return (
    <div className="text-center copy-right py-3">
      &copy;<span>{new Date().getFullYear()} </span> All right Reserved-Bijay
      and The Company
    </div>
  );
};
