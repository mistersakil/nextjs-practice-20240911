import React from "react";
import AdminHeader from "@/components/admin/AdminHeader";

export default ({ children }) => {
  return (
    <>
      <AdminHeader />
      {children}
    </>
  );
};
