const SERVER_API_URL = "http://localhost:5000/api";

const select = (selector) => document.querySelector(selector);

const form = select(".form");
const message = select(".message");

const displayMessage = (text, color) => {
  message.style.visibility = "visible";
  message.style.backgroundColor = color;
  message.innerText = text;
  setTimeout(() => {
    message.style.visibility = "hidden";
  }, 3000);
};

const validateForm = () => {
  const title = select("#title").value.trim();
  const content = select("#content").value.trim();
  const thumbnail = select("#thumbnail").value;
  const category = select("#category").value;
  const expectedImageFiles = ["jpg", "jpeg", "png"];
  if (!title || !content || !thumbnail || category == "0") {
    // show some error
    return displayMessage("fields cannot be empty", "red");
  }
  const extension = thumbnail.split(".").pop();
  if (!expectedImageFiles.includes(extension)) {
    return displayMessage("Image file is not valid", "red");
  }
  return true;
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // validate the form
  const valid = validateForm();

  if (valid) {
    // submit the form
    const formData = new FormData(form);
    await postData(formData);
  }
});

const resetForm = () => {
  select("#title").value = "";
  select("#content").value = "";
  select("#thumbnail").value = "";
  select("#category").value = "";
  select("#featured-content").checked = false;
};

const postData = async (data) => {
  const result = await fetch(`${SERVER_API_URL}/create-news`, {
    method: "POST",
    body: data,
  });
  const response = await result.json();

  if (result.ok) {
    if (response.success) {
      displayMessage(response.message, "green");
      resetForm();
    }
  } else {
    displayMessage(response.message, "red");
  }
};
