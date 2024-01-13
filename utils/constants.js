const allowedUrl = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

const errorMessages = {
  image: 'Некорректный формат ссылки на картинку',
  trailerLink: 'Некорректный формат ссылки на трейлер',
  thumbnail: 'Некорректный формат ссылки на постер',
  createMovie: 'Некорректные данные при создании фильма',
  movieNotFound: 'Фильм не найден',
  removeMovie: 'Попытка удалить фильм другого пользователя',
  userNotFound: 'Пользователь не найден',
  createUser: 'Пользователь уже существует',
  incorrectReqData: 'Переданы некорректные данные',
  incorrectData: 'Неправильные почта или пароль',
  incorrectEmail: 'Некорректный формат почты',
  incorrectPath: 'Неправильный путь',
  auth: 'Необходима авторизация',
  crash: 'Сервер сейчас упадёт',
};

module.exports = { allowedUrl, errorMessages };
