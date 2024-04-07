import Utility from "./Utility.js";
import logo from "../icons/clipboard-check-outline.svg";
import menu from "../icons/menu-white.svg";

export default (() => {
  /**
   * Creates the header element.
   *
   * @returns {HTMLElement} The header element.
   */
  const createHeader = () => {
    const header = document.createElement("header");

    const menuBtn = Utility.createText("button", ["menu-btn", "action-btn"]);
    menuBtn.append(Utility.createImg(menu, ["action-icon"], "Sidebar"));

    menuBtn.addEventListener("click", () => {
      document.querySelector("nav").classList.add("active");
    });

    const div = Utility.createText("div", ["container-header"]);

    div.append(
      Utility.createImg(logo, ["logo"], "Todo List"),
      Utility.createText("h1", ["title"], "Todo List"),
    );

    header.append(menuBtn, div);

    return header;
  };

  return { createHeader };
})();
