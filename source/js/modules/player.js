export default () => {
  const playButtonSelector = '.btn-play';
  const playButtonHiddenClass = 'btn-play--hidden';
  const playerSelector = '.video-iframe';
  const playerHiddenClass = 'video-iframe--hidden';

  const playButton = window.document.querySelector(playButtonSelector);
  const player = window.document.querySelector(playerSelector);

  if (playButton && player) {
    playButton.addEventListener('click', () => {
      playButton.classList.add(playButtonHiddenClass);
      player.classList.remove(playerHiddenClass);
    });
  }
};
