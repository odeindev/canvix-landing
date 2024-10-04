// ** Создание карточки для service-cards
const createServiceCard = (item) => {
  const card = document.createElement("div");
  card.classList.add("service-card");

  card.innerHTML = `
    <div class="service-card__image">
      <img src="${item.image_url}" alt="${item.title}" loading="lazy" />
    </div>
    <h3 class="service-card__title">${item.title}</h3>
    <p class="service-card__description">${item.description}</p>
  `;

  return card;
};

// ** Автоматизация карточек для service-cards
const initServiceCards = async () => {
  try {
    const response = await fetch("js/data/service-cards.json");
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();

    const serviceCardsContainer = document.querySelector(".service__cards");
    data.forEach((item) => {
      const card = createServiceCard(item);
      serviceCardsContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching cards data:", error);
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Ошибка загрузки данных. Пожалуйста, попробуйте позже.";
    errorMessage.classList.add("error-message");
    serviceCardsContainer.appendChild(errorMessage);
  }
};

// ** Создание карточки для process-cards
const createProcessCard = (item) => {
  const card = document.createElement("div");
  card.classList.add("demo-card");

  card.innerHTML = `
    <img src="${item.arrow_url}" alt="process-arrow" class="process__arrow" loading="lazy">
    <div class="process__fragment">
      <div class="fragment__id">
        <img src="${item.icon_url}" alt="Process Icon" class="process__icon" loading="lazy">
        <h4 class="process__fragment-title">${item.title}</h4>
      </div>
      <p class="process__fragment-text">${item.description}</p>
    </div>
  `;

  return card;
};

// ** Автоматизация карточек для process-cards
const initProcessCards = async () => {
  try {
    const response = await fetch("js/data/process-cards.json");
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();

    const processCardsContainer = document.querySelector(".process__cards-block");
    data.forEach((item) => {
      const card = createProcessCard(item);
      processCardsContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching process cards data:", error);
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Ошибка загрузки данных. Пожалуйста, попробуйте позже.";
    errorMessage.classList.add("error-message");
    processCardsContainer.appendChild(errorMessage);
  }
};

export { initServiceCards, initProcessCards };