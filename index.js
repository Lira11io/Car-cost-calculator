//Определяем переменные
const myForm = document.forms.myForm;
const carConditions = myForm.carCondition;
//const owners = myForm.owner;
const formOwner = document.querySelector(".form__owner");

//вешаем обработчик событий на форму
myForm.addEventListener("change", () => {
  //определяем переменные с состоянием авто
  let newCarCondition = carConditions[0];
  let usedCarCondition = carConditions[1];
  //если выбрано состояние "Новый"
  if (newCarCondition.checked === true) {
    formOwner.style.display = "none"; //то блок с выбором количества владельцев скрыт
  }
  //если выбрано состояние "Подержанный"
  if (usedCarCondition.checked === true) {
    formOwner.style.display = "flex"; //то блок с выбором количества владельцев отображается
  }
});

//console.log(owners);
/* Вот так у меня с радиокнопками топливо
const fuels = document.querySelectorAll('input[name="fuel"]'); //нашла радиокнопки
for (const fuel of fuels) {
    if (fuel.checked) {
      fuelAvto.innerHTML += `${fuel.value}`;
      break;
    }
  }  */ //нашла радиокнопку, которая checked и вывела в блок для расчета цены авто
