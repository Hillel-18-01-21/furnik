$(function () {
  const $input = $("input");
  const $list = $(".list");

  let todoList = [];

  $(".load").on("click", onLoadItem);
  $(".add").on("click", onAddItem);
  $("form").on("submit", (e) => e.preventDefault());
  $list.on("click", onItemCheckout);

  $input.on("keypress", (e) => {
    if (e.which == 13) {
      onAddItem();
    }
  });

  function addItem(value) {
    todoList.push({
      id: todoList.length,
      title: value,
      check: false,
    });
  }

  async function onLoadItem() {
    await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        json.slice(0, 10).forEach((item) => {
          addItem(item.title);
        });
      });
    renderItem();
  }
  // Работает

  // $list.on("click", removeItem);

  // function removeItem(e) {
  //   const index = $(e.target).attr("data-id");
  //   todoList = todoList.filter((e) => e.id != todoList[index].id);

  //   renderItem();
  // }

  function onItemCheckout(e) {
    const index = $(e.target).attr("data-id");
    todoList[index].check = !todoList[index].check;
    renderItem();

    fetch(`https://jsonplaceholder.typicode.com/todos/${index}`, {
      method: "PUT",
      body: JSON.stringify(todoList[index]),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).catch(() => {
      todoList[index].check = !todoList[index].check;
      renderItems();
      alert("Something went wrong");
    });
  }

  function renderItem() {
    $list.empty();

    todoList.map((item) => {
      $list.append(
        $(
          `<li data-id="${item.id}">
          <input type="checkbox" ${item.check ? "checked" : ""} />
          ${item.title} </li>`,
        ),
      );
    });

    $input.val("");
  }

  function onAddItem() {
    addItem($input.val());
    renderItem();
  }
});
