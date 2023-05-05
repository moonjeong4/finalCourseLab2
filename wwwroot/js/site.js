window.onload = async () => {
  console.log("moon");
  // http://localhost:5234/api/TodoItems/xml

  const response = await fetch("http://localhost:5234/api/TodoItems/xml");
  const data = await response.text();

  let parser = new DOMParser();
  let xmlDoc = parser.parseFromString(data, "text/xml");
  let tasks = xmlDoc.getElementsByTagName("Task");
  for (const el of tasks) {
    console.log(el.textContent);
  }
};
