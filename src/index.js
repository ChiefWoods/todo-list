import "./styles.css";
import Utility from "./components/Utility.js";
import Nav from "./components/Nav.js";
import Section from "./components/Section.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Storage from "./classes/Storage.js";

Storage.updateDefaultProjects();

const main = document.createElement("main");
const header = Header.createHeader();

main.append(Nav.createNav(header, main), Section.createSection("Today"));

const overlay = Utility.createText("div", ["overlay"]);
overlay.addEventListener("click", Nav.hideNav);

document
  .querySelector("#body")
  .append(header, main, Footer.createFooter(), overlay);

for (const navBtn of document.querySelectorAll(".nav-item.project")) {
  const projectName = navBtn.querySelector(".project-name").textContent;

  if (projectName === "Today") {
    navBtn.classList.add("selected");
    Utility.changeDocumentTitle(projectName);
    break;
  }
}

setInterval(() => {
  const date = new Date();

  if (date.getHours() === 0 && date.getMinutes() === 0) {
    Storage.updateDefaultProjects();
  }
}, 60000);
