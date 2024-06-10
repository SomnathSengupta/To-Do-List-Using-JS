let add = document.querySelector(".add");
let msg = document.querySelector("#msg");
let div = document.querySelector(".task");

add.addEventListener("click", () => {
    let br = document.createElement("br");
    div.append(br);

    let task = document.createElement("buttton");
    task.classList.add("addedTask");
    task.innerText = msg.value;
    div.append(task);
    msg.value = "";

    let remove =  document.createElement("buttton");
    remove.classList.add("remove");
    remove.innerText = "Remove";
    remove.addEventListener("click", () => {
        remove.remove();
        task.remove();
        br.remove();
    })
    div.append(remove);

    count++;
    
})