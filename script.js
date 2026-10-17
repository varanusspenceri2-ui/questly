console.log("Questly загружен!");

console.log("Сайт готов к приёму бронирований!");

const bookButton = document.querySelector(".book-btn");

const questNames = {
    priviazi: "На привязи",
    vzaperti: "Взаперти",
    dno: "На дне",
    izvne: "Извне"
}

bookButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    console.log("Кнопка нажата!");

    const name = document.querySelector("#name").value;
    const phone = document.querySelector("#phone").value;
    const quest = document.querySelector("#quest").value;
    const date = document.querySelector("#date").value;
    const people = document.querySelector("#people").value;

    console.log("Имя:", name);
    console.log("Телефон:", phone);
    console.log("Квест:", quest);
    console.log("Дата:", date);
    console.log("Человек:", people);

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const chosenDate = new Date(date);

    if (chosenDate < today) {
        alert("Дата не может быть в прошлом!");
        return;
    }
    alert(`Спасибо, ${name}! Ты забронировал квест "${questNames[quest]}" на ${date} для ${people} человек`);
});