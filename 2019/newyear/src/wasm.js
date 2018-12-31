(function() {
  var wasm;
  const __exports = {};


  let cachedTextDecoder = new TextDecoder('utf-8');

  let cachegetUint8Memory = null;
  function getUint8Memory() {
      if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) {
          cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
      }
      return cachegetUint8Memory;
  }

  function getStringFromWasm(ptr, len) {
      return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
  }

  __exports.__wbg_alert_2921cf061c9a31e4 = function(arg0, arg1) {
      let varg0 = getStringFromWasm(arg0, arg1);
      alert(varg0);
  };
  /**
  * @param {number} arg0
  * @returns {void}
  */
  __exports.answer = function(arg0) {
      return wasm.answer(arg0);
  };

  function init(path_or_module) {
      let instantiation;
      const imports = { './regbag2019_0.wasm': __exports };
      if (path_or_module instanceof WebAssembly.Module) {
          instantiation = WebAssembly.instantiate(path_or_module, imports)
          .then(instance => {
          return { instance, module: path_or_module }
      });
  } else {
      const data = fetch(path_or_module);
      if (typeof WebAssembly.instantiateStreaming === 'function') {
          instantiation = WebAssembly.instantiateStreaming(data, imports);
      } else {
          instantiation = data
          .then(response => response.arrayBuffer())
          .then(buffer => WebAssembly.instantiate(buffer, imports));
      }
  }
  return instantiation.then(({instance}) => {
      wasm = init.wasm = instance.exports;

  });
};
self.wasm_bindgen = Object.assign(init, __exports);
})();
