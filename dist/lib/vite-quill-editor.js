import { defineComponent, openBlock, createElementBlock } from "vue";
const _hoisted_1 = { class: "quill-editor" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "quillEditor",
  setup(__props, { expose: __expose }) {
    __expose({});
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, " 789 ");
    };
  }
});
_sfc_main.install = (app) => {
  app.component(_sfc_main.__name, _sfc_main);
};
const components = [_sfc_main];
const install = (app) => {
  components.forEach((component) => app.component(component.__name, component));
};
const viteQuillEditor = {
  install
};
export {
  _sfc_main as QuillEditor,
  viteQuillEditor as default
};
