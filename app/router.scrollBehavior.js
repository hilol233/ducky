export default function(to, from, savedPosition) {
  console.log("this is the hash", to.hash);
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
