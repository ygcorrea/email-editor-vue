<template>
  <div class="main">
    <div class="content">
      <div class="container-from-to">
        <div class="content-from-to">
          <div class="data-container">
            <span>De: </span>
            <span>Para: </span>
            <span>C/C: </span>
            <span>C/CO: </span>
            <span>Assunto: </span>
          </div>
          <div class="data-container">
            <input v-model="de" />
            <input v-model="para" />
            <input v-model="cc" />
            <input v-model="cco" />
            <input v-model="assunto" />
          </div>
          <button>Enviar</button>
        </div>
        <div style="margin-left: 28px; margin-bottom: 10px">
          <span style="margin-right: 10px">Template de e-mail:</span>
          <select @change="checkTemplateType" v-model="selected">
            <option disabled value="">Escolha um template</option>
            <option>Template 1</option>
            <option>Template 2</option>
          </select>
        </div>
      </div>
      <quill-editor :options="quillOptions" v-model="contentHtml">
      </quill-editor>
    </div>
    <div style="margin-top: 50px">
      <h1>Preview:</h1>
      <div>
        {{ contentHtml }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Editor",
  data() {
    return {
      selected: "",
      de: "",
      para: "",
      cc: "",
      cco: "",
      assunto: "",
      contentHtml: "",
      quillOptions: {
        placeholder: "Insira o texto aqui",
        toolbar: {},
      },
    };
  },
  methods: {
    checkTemplateType() {
      if (this.selected == "Template 1") {
        this.contentHtml = "o template 1 foi escolhido";
      } else if (this.selected == "Template 2")
        return "o template 2 foi escolhido";
    },
  },
};
</script>
<style scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
}
.content {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.data-container {
  display: flex;
  flex-direction: column;
}
.data-container span {
  height: 25px;
  margin-left: 30px;
  margin-top: 0.6px;
}
.content-from-to {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 20px;
  gap: 40px;
}
.container-from-to {
  display: flex;
  background: rgb(207, 207, 207);
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  flex-direction: column;
}
input {
  width: 900px;
  margin: 2.2px;
}
button {
  width: 50px;
}
</style>

