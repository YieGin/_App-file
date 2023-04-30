import Link from "next/link";
import React from "react";

function Sidebar() {
  return (
    <>
      <div className="text-black bg-white w-[20%] h-[100vh]">
        <p>Side bar</p>
        <Link href="/Aboutme">
          <p>About me</p>
        </Link>
      </div>
    </>
  );
}

export default Sidebar;
