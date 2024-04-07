import { format } from "date-fns";

export default (() => {
  /**
   * Create a text element with the specified element type, class names, and content.
   * @param {string} ele - The type of element to create.
   * @param {string[]} className - The class names to add to the element.
   * @param {string} [content=""] - The content to add to the element.
   * @returns {HTMLElement} The text element.
   */
  const createText = (ele, className, content = "") => {
    const text = document.createElement(ele);
    text.classList.add(...className.filter((name) => name !== ""));
    text.innerHTML = content;

    return text;
  };

  /**
   * Create an image element with the specified source, class names, and alt text.
   * @param {string} src - The source of the image.
   * @param {string[]} className - The class names to add to the image.
   * @param {string} [alt=""] - The alt text of the image.
   * @param {string} [id=""] - The id of the image.
   * @returns {HTMLImageElement} The image element.
   */
  const createImg = (src, className, alt = "", id = "") => {
    const img = document.createElement("img");
    img.src = src;
    img.classList.add(...className);
    img.alt = alt;
    img.id = id;

    return img;
  };

  /**
   * Create a form control element with the specified type, name, value, and required attribute.
   * @param {string} type - The type of form control to create.
   * @param {string} name - The name of the form control.
   * @param {string} [value=""] - The value of the form control.
   * @param {boolean} [required=false] - The required attribute of the form control.
   * @returns {HTMLInputElement|HTMLTextAreaElement} The form control element.
   */
  const createFormControl = (type, name, value = "", required = false) => {
    const control =
      type !== "textarea"
        ? document.createElement("input")
        : document.createElement("textarea");

    if (type !== "textarea") {
      control.type = type;
    }

    control.name = name;
    control.value = value;
    control.required = required;

    return control;
  };

  /**
   * Change the document title to the project name followed by " - Todo List".
   */
  const changeDocumentTitle = (name = null) => {
    document.title = `${name ? `${name} - ` : ""}Todo List`;
  };

  /**
   * Format the date to "dd/MM/yyyy".
   * @param {string} date - The date to format.
   * @returns {string} The formatted date.
   */
  const formatDate = (date) => {
    return date ? format(new Date(date), "dd/MM/yyyy") : "-";
  };

  return {
    createText,
    createImg,
    createFormControl,
    changeDocumentTitle,
    formatDate,
  };
})();
