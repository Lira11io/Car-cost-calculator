//Получаем элементы формы
const myForm = document.forms.myForm;
const brandSelect = document.querySelector('select[name="brand"]');
const modelSelect = document.querySelector('select[name="model"]');
const fuelRadios = document.querySelectorAll('input[name="fuel"]');
const capacityInput = document.querySelector('input[name="capacity"]');
const carConditionRadios = document.querySelectorAll(
  'input[name="carCondition"]'
);
const ownerRadios = document.querySelectorAll('input[name="owner"]');
const methodRadios = document.querySelectorAll('input[name="method"]');
const totalCost = document.querySelector(".container__total-cost"); //блок для вывода итоговой цены
const button = document.querySelector(".form__button_btn"); //нашли кнопку "Рассчитать"

const carConditions = myForm.carCondition; //нашли блок с состоянием авто
const formOwner = document.querySelector(".form__owner"); //нашли блок с количеством владельцев

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

//вешаем обработчик событий на кнопку
button.addEventListener("click", (evt) => {
  evt.preventDefault();
  calculateCost();
});

//функция для рассчета итоговой стоимости
function calculateCost() {
  //определяем коэффициенты для разных моделей кузова
  let modelCoef = {
    Седан: 1.1,
    Хэтчбек: 1.2,
    Универсал: 1.3,
    Лифтбэк: 1.4,
    Купе: 1.5,
    Кабриолет: 1.9,
    Родстер: 1.3,
    Стретч: 1.5,
    Тарга: 1.2,
    Внедорожник: 1.5,
    Кроссовер: 1.3,
    Пикап: 1.1,
    Фургон: 1.3,
    Минивэн: 1.4,
  };
  //определяем коэффициенты для разных видов топлива
  let fuelCoef = {
    petrol: 1.1,
    diesel: 1.2,
    gas: 1.2,
    electricity: 1.3,
  };
  //определяем коэффициенты для состояния авто
  let conditionCoef = {
    new: 1.1,
    used: 0.8,
  };
  //определяем коэффициенты в зависимости от количества владельцев
  let ownerCoef = {
    one: 1.2,
    two: 1.1,
    three: 0.9,
  };
  //определяем коэффициенты в зависимости от способа оплаты
  let paymentMethodCoef = {
    card: 0.9,
    cash: 1,
    account: 1.1,
  };

  // получаем выбранные значения из формы
  const brand = brandSelect.value;
  const model = modelSelect.value;
  const fuel = document.querySelector('input[name="fuel"]:checked').value;
  const capacity = Number(capacityInput.value); //преобразуем полученную строку в число
  const condition = document.querySelector(
    'input[name="carCondition"]:checked'
  ).value;
  const owner = document.querySelector('input[name="owner"]:checked').value;
  const method = document.querySelector('input[name="method"]:checked').value;

  // вычисляем итоговую стоимость с учетом выбранных параметров
  let finalCost =
    brand *
    modelCoef[model] *
    fuelCoef[fuel] *
    capacity *
    conditionCoef[condition] *
    ownerCoef[owner] *
    paymentMethodCoef[method];

  // выводим итоговую стоимость на странице
  totalCost.innerHTML = `<p class="container__total-cost_text">Итоговая стоимость: ${finalCost} руб.</p>`;
}
