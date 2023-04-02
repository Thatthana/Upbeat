import Link from "next/link";
import React, { useState } from "react";

export default function playerPage() {
  return (
    <div className="home">
      <h1>Enter your name.</h1>
      <form>
        <div className="entername">
          <label></label>
          <input type="text" name="name" />
        </div>
        <Link href={"gamePage"}>
          <div className="btn-container">
            <button type="submit" className="btn">
              Enter
            </button>
          </div>
        </Link>
      </form>
    </div>
  );
}
