export default function(to, from, savedPosition) {
  if (to.hash) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          selector: to.hash,
          behavior: "smooth"
        });
      }, 100);
    });
  } else {
    return {
      x: 0,
      y: 0
    };
  }
}
