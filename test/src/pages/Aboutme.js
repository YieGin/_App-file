import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React from "react";

function Aboutme() {
  return <div className="bg-blue-600 w-[80%]">Aboutme</div>;
}

export default Aboutme;

Aboutme.getLayout = function PageLayout(page) {
  return (
    <>
      <div className="flex">
        <Sidebar />
        {page}
      </div>
      <Footer />
    </>
  );
};
