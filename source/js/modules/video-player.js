const play = () => {
  if (document.querySelector('[data-id="video"]')) {
    const video = document.querySelector('[data-id="video"]');
    const videoBtnPlay = document.querySelector('.video__btn');
    video.addEventListener('click', () => {
      if (video.hasAttribute('data-state')) {
        return;
      }

      video.dataset.state = 'ready';
      const src = video.dataset.src;
      video.insertAdjacentHTML(
        'beforeend',
        `<iframe src="${src
        }" title="Бесплатные интерактивные онлайн-курсы." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
      );

      video.classList.toggle('video__bg-hide');
      videoBtnPlay.classList.toggle('video__btn--hide');
    });
  }
};

export { play };
