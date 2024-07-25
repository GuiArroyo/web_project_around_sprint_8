// Seleciona o botão de edição de perfil e o popup de perfil
const editButton = document.querySelector("#edit-button"); // Botão para abrir o popup de edição
const editPopup = document.querySelector("#profile"); // Popup de edição de perfil

// Função para mostrar o popup de edição de perfil
function showPopup() {
  editPopup.classList.add("popup_opened"); // Adiciona a classe para mostrar o popup
}
// Adiciona um evento de clique no botão de edição de perfil para mostrar o popup
editButton.addEventListener("click", showPopup); // Exibe o popup ao clicar no botão

// Seleciona o botão de adicionar cartão e o popup de adicionar cartão
const addButton = document.querySelector("#add-button"); // Botão para abrir o popup de adicionar cartão
const addPopup = document.querySelector("#add-popup"); // Popup de adicionar cartão

// Função para mostrar o popup de adicionar cartão
function showAddPopup() {
  addPopup.classList.add("popup_opened");
}
// Adiciona um evento de clique no botão de adicionar cartão para mostrar o popup
addButton.addEventListener("click", showAddPopup); // Exibe o popup ao clicar no botão

// Seleciona o popup genérico e o botão de fechar do popup
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".popup__button_type_close");

// Função para fechar o popup
function closePopup() {
  popup.classList.remove("popup_opened");
}
// Adiciona um evento de clique no botão de fechar do popup para fechar o popup
closeButton.addEventListener("click", closePopup);

// Array de objetos representando os cartões iniciais com nome e link da imagem
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

// Seleciona o template de cartão e a área onde os cartões serão adicionados
const template = document.querySelector(".elements__template");
const cardArea = document.querySelector(".elements__cards");

// Função para criar um novo cartão
function createCard(name, link) {
  const card = template.cloneNode(true).content.querySelector(".elements__card");
  const cardImage = card.querySelector(".elements__image");
  const cardText = card.querySelector(".elements__text");
  const cardTrashButton = card.querySelector(".elements__button_type_trash");
  const cardLikeButton = card.querySelector(".elements__button_type_like");
  const cardWindow = card.querySelector(".elements__window");
  const buttonCardImage = card.querySelector(".elements__image-button");
  const cardWindowImage = card.querySelector(".elements__window-image");
  const cardWindowName = card.querySelector(".elements__window-name");
  const windowCloseButton = card.querySelector("#window-close-button");

  // Define as propriedades do cartão
  cardImage.src = link;
  cardText.textContent = name;
  cardImage.alt = name;
  cardWindowImage.src = link;
  cardWindowImage.alt = name;
  cardWindowName.textContent = name;

  // Adiciona evento de clique no botão de excluir cartão
  cardTrashButton.addEventListener("click", function () {
    card.remove();
  });

  // Adiciona evento de clique no botão de curtir cartão
  cardLikeButton.addEventListener("click", function () {
    cardLikeButton.classList.add("elements__button_type_like-active");
  });

  // Adiciona evento de clique na imagem do cartão para abrir a janela do cartão
  buttonCardImage.addEventListener("click", function () {
    cardWindow.classList.toggle("elements__window_opened");
  });

  // Adiciona evento de clique no botão de fechar a janela do cartão
  windowCloseButton.addEventListener("click", function () {
    cardWindow.classList.remove("elements__window_opened");
  });

  // Retorna o cartão criado
  return card;
}

// Adiciona os cartões iniciais na área de cartões
initialCards.forEach(function (element) {
  const firstcards = createCard(element.name, element.link);
  cardArea.append(firstcards);
});

// Função para alterar o perfil
function changeProfile(evt) {
  evt.preventDefault();
  const nameInput = document.querySelector(".popup__item_type_name");
  const aboutInput = document.querySelector(".popup__item_type_about");
  const profileName = document.querySelector(".profile__name");
  const profileAbout = document.querySelector(".profile__description");

  // Atualiza o nome e a descrição do perfil
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
}

// Seleciona o botão de enviar do popup de perfil e o formulário do popup
const submitButton = document.querySelector(".popup__button_type_send");
const formElement = document.querySelector(".popup__container");

// Adiciona evento de submissão do formulário de perfil para alterar o perfil
formElement.addEventListener("submit", changeProfile);

// Adiciona evento de clique no botão de enviar do popup de perfil para fechar o popup
submitButton.addEventListener("click", closePopup);

// Seleciona o formulário de adicionar cartão e o botão de adicionar cartão
const cardForm = document.querySelector("#add-form");
const addCardButton = document.querySelector("#add-card-button");

// Adiciona evento de clique no botão de adicionar cartão para mostrar o popup de adicionar cartão
addCardButton.addEventListener("click", function () {
  cardForm.classList.add("popup_opened");
});

// Adiciona evento de submissão no formulário de adicionar cartão
cardForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const placeInput = document.querySelector("#place-input");
  const imageInput = document.querySelector("#link-input");

  // Cria um novo cartão e adiciona no início da área de cartões
  const newCard = createCard(placeInput.value, imageInput.value);
  cardArea.prepend(newCard);
});

// Função para fechar o popup de adicionar cartão
function closeAddPopup() {
  addPopup.classList.remove("popup_opened");
}

// Adiciona evento de clique no botão de adicionar cartão para fechar o popup de adicionar cartão
addCardButton.addEventListener("click", closeAddPopup);

// Seleciona o botão de fechar do popup de adicionar cartão
const closeaddButton = document.querySelector("#close-add-popup");

// Adiciona evento de clique no botão de fechar do popup de adicionar cartão para fechar o popup
closeaddButton.addEventListener("click", closeAddPopup);


