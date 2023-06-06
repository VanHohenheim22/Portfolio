const countWords = () => {
  const words = codigo.replace(/[^\w\s]/g, "").split(/\s+/);
  const recounter = new Map();

  words.forEach((word) => {
    const contador = recounter.get(word) || 0;
    recuento.set(palabra, contador + 1);
  });


  return recounter;
};


let oración = "Hola, muy buenas gente divina de mi corazao, espero se encuentren muy bien el día de hoy, buenas"



const words = text.replace(/[^\w\s]/g, "").split(/\s+/);
  const recounter = new Map();

  words.forEach((word) => {
    const contador = recounter.get(word) || 0;
    recounter.set(word, contador + 1);
  });


  return recounter;