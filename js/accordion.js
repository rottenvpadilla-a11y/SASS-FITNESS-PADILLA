// to select all the items
const faqItem = document.querySelectorAll(".contactFaq__item");

faqItem.forEach((item) => {
  // get the clickable question and its corresponding answer
  const question = item.querySelector(".contactFaq__item--question");
  const answer = item.querySelector(".contactFaq__item--answer");

  //   add click event to each question
  question.addEventListener("click", () => {
    // check if the clicked item is already open
    const open = item.classList.contains("active");

    // close all item
    faqItem.forEach((i) => {
      // remove active state
      i.classList.remove("active");
      //   reset max height into 0
      i.querySelector(".contactFaq__item--answer").style.maxHeight = null;
    });

    // if the clicked item was not open, then you need to add an active to manipulate it to css
    if (!open) {
      item.classList.add("active");

      //   we need to set max height dynamically based on its content
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});
