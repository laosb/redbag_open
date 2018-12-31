wasm_bindgen('./redbag2019_0_bg.wasm').then(() => {
  window.guessGame = {
    answer: wasm_bindgen.answer
  }
});
