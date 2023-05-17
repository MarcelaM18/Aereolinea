const validateForm = () => {
    const validatefechaInicioResult = validatefechaInicio();
    const validatefechaFinResult = validatefechaFin();
  
    if (validatefechaInicioResult && validatefechaFinResult) {
     
      console.log("Formulario válido");
    }
  };
  
  const validatefechaInicio = () => {
    let fechaInicio = new Date(document.getElementById('fechaInicio').value);
    let fechaFin = new Date(document.getElementById('fechaFin').value);
    let fechaActual = new Date();
    fechaActual.setDate(fechaActual.getDate() - 1);
    
    if (fechaInicio <= fechaActual) {
      texto = '<span style="color: #fff; background-color: green; padding: 3px;border-radius: 3px;">La fecha fechaInicio es menor a la actual</span>';
      document.getElementById('texto').innerHTML = texto;
      return false;

    } else if (fechaInicio  > fechaFin) {
        texto = '<span style="color: #fff; background-color: green; padding: 3px;border-radius: 3px;">La fecha fechaInicio  es mayor a la fecha fechaFin.</span>';
        document.getElementById('texto').innerHTML = texto;
        return false;
    } else {
      document.getElementById('texto').innerHTML = '';
      return true;
    }
  };
  
  const validatefechaFin = () => {
    let fechaFin = new Date(document.getElementById('fechaFin').value);
    let fechaActual = new Date();
    fechaActual.setDate(fechaActual.getDate() - 1);

    if(fechaFin <= fechaActual) {
        texto = '<span style="color: #fff; background-color: green; padding: 3px;border-radius: 3px;">La fecha fechaFin es menor a la actual</span>';
        document.getElementById('texto1').innerHTML = texto;
        return false;
    } else {
      document.getElementById('texto1').innerHTML = '';
      return true;
    }
  };
  
  exports.validateForm = validateForm;