import Link from "next/link";
import React, { useState } from "react";

export default function playerPage() {
  return (
    <div className="home">
      <h1>Enter your name.</h1>
      <form>
        <div>
          <label></label>
          <input type="text" name="name" />
        </div>
        <Link href={"gamePage"}>
          <button type="submit">Enter</button>
        </Link>
      </form>
    </div>
  );
}
