wasm_bindgen('./hello_bg.wasm').then(() => {
  window.guessGame = {
    answer: wasm_bindgen.answer
  }
});
