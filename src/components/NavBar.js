import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkElements = links.map(link => {
    let linkTo = '#' + link;
    return <a key={link} href={linkTo}>{link}</a>
  });
  return <nav>{linkElements}</nav>;
}

export default NavBar;
