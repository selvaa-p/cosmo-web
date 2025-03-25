// src/app/utils/smoothScroll.js
export const smoothScroll = (targetId, offset = 70) => {
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: "smooth",
      });
    }
  };
  