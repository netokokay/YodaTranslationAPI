const axios = require("axios");

async function iniciar() {
  try {
    const url = "https://api.adviceslip.com/advice";
    const resposta = await axios.get(url);
    const conselho = resposta.data.slip.advice;
    console.log(`Conselho sem tradução: ${conselho}`);
    const urlTraducao = `https://api.funtranslations.com/translate/yoda.json?text=${encodeURI(conselho)}`;
    const respostaTrad = await axios.get(urlTraducao);
    const traduzido = respostaTrad.data.contents.translated;
    console.log(`Conselho traduzido pelo Yoda: ${traduzido}`);
  } catch (error) {
    console.log(error)
    console.log("Erro ao buscar informações");
  }
}


iniciar();