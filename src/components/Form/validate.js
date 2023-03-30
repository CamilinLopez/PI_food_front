const val = "nada";

function validateDatos(receta) {
    let errors = {};
    if (!receta.title) errors.title = "Se requiere un nombre";
    else if (((receta.title || '').match(/\b\w+\b/g)?.length || 0) >= 10) errors.title = "Demaciado largo";

    if (!receta.image) errors.image = "Se requiere un link";
    else if (!receta.image.includes(".jpg")) errors.image = "No contiene .jpg";

    if (!receta.healthScore) errors.healthScore = "Se requiere un puntaje";
    else if (!(receta.healthScore > 0 && receta.healthScore <= 100)) errors.healthScore = "Deve ser > 0 y < 100"

    if (!receta.summary) errors.summary = "Se requiere un resumen";
    else if (((receta.summary || '').match(/\b\w+\b/g)?.length || 0) >= 60) errors.summary = "Demaciado largo";

    return errors;
}

function validatePasos(paso) {
    let errors = {};
    if (!paso.step) errors.step = "Se requiere un nombre";
    else if (((paso.step || '').match(/\b\w+\b/g)?.length || 0) >= 10) errors.step = "Demaciado largo";

    return errors;
}


function validateDiet(diet) {
    let errors = {}

    if(!diet.name) errors.name = "Se requiere un nombre";
    else if(((diet.name || '').match(/\b\w+\b/g)?.length || 0) >= 4) errors.name = "Demaciado largo";
    return errors;
}

function validateIngredient(ingredient) {
    let errors = {}
    if(!ingredient.name) errors.name = "Se requiere un nombre";
    else if(((ingredient.name || '').match(/\b\w+\b/g)?.length || 0) >= 4) errors.name = "Demaciado largo";

    return errors;
}

function validateEquipement(equipment) {
    let errors = {}
    if(!equipment.name) errors.name = "Se requiere un nombre";
    else if(((equipment.name || '').match(/\b\w+\b/g)?.length || 0) >= 4) errors.name = "Demaciado largo";

    return errors;
}


export { validateDatos, validatePasos, validateDiet, validateIngredient,validateEquipement, val }