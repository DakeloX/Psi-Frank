import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CheckBox } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import guardarDatos from '../components/guardarDatos';
import CamposDinamicos from '../components/CamposDinamicos';
import SelectFecha from '../components/SelectFecha';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Tabla from '../components/Tabla';

  

const FormView = () => {
  const [fechaNacimiento, setFechaNacimiento] = useState(null);
  const [gender, setGender] = useState(null);
  const [identidad, setIdentidad] = useState(null);
  const [civilState, setCivilState] = useState(null);
<<<<<<< HEAD
  const [nombre, setNombre] = useState('');
=======
  const navigation = useNavigation();
>>>>>>> 2dcaa1ae2a1bcd73b3945cc72d76fda041b47bfe

  const nombreRef = useRef();
  const idnRef = useRef();
  const ocupacionRef = useRef();
  const escolaridadRef = useRef();
  const religionRef = useRef();
  const viveconRef = useRef();
  const telefonoRef = useRef();
  const patologicosRef = useRef();
  const farmacologicosRef = useRef();
  const toxicosRef = useRef();
  const quirurgicosRef = useRef();
  const alergiasRef = useRef();
  const ginecologicosRef = useRef();
  const psiquiatricosRef = useRef();
  const antfamiliaRef = useRef();
  const laboratoriosRef = useRef();
  const consultaRef = useRef();
  const enfactualRef = useRef();
  const analisisRef = useRef();

  const [isCheckedAcompañante, setCheckedAcompañante] = useState(false);
  const [parentescoAcompañante, setParentescoAcompañante] = useState('');

  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);
  const [isChecked4, setChecked4] = useState(false);
  const [isChecked5, setChecked5] = useState(false);
  const [isChecked6, setChecked6] = useState(false);
  const [isChecked7, setChecked7] = useState(false);
  const [isChecked8, setChecked8] = useState(false);
  const [isCheckedPatologia, setCheckedPatologia] = useState(false);
  const [isCheckedFarmaco, setCheckedFarmaco] = useState(false);
  const [isCheckedQuirur, setCheckedQuirur] = useState(false);
  const [isCheckedToxicos, setCheckedToxicos] = useState(false);
  const [isCheckedAlergias, setCheckedAlergias] = useState(false);
  const [isCheckedGinec, setCheckedGinec] = useState(false);
  const [isCheckedGinecAp, setCheckedGinecAp] = useState(false);
  const [isCheckedPsiq, setCheckedPsiq] = useState(false);
  const [isCheckedPsiqFamilia, setCheckedPsiqFamilia] = useState(false);

  const handleCheckGinecAp = () => {
    setCheckedGinecAp((prev) => !prev);
    setCheckedGinec(false);
  };

  const handleCheckGinec = () => {
    setCheckedGinec((prev) => !prev);
    setCheckedGinecAp(false);
  };

  const handleCampoSubmit = (nextFieldRef) => {
    return () => {
      // Puedes realizar acciones adicionales si es necesario

      if (nextFieldRef) {
        nextFieldRef.current.focus(); // Mover el foco al siguiente campo
      } else {
        // Si no hay siguiente campo, puedes manejar el evento final aquí
      }
    };
  };

  const handleCheck1 = () => {
    setChecked1(true);
    setChecked2(false);
  };

  const handleCheck2 = () => {
    setChecked2(true);
    setChecked1(false);
  };

  const handleCheck3 = () => {
    setChecked3(true);
    setChecked4(false);
  };

  const handleCheck4 = () => {
    setChecked4(true);
    setChecked3(false);
  };

  const handleCheck5 = () => {
    setChecked5(true);
    setChecked6(false);
  };

  const handleCheck6 = () => {
    setChecked6(true);
    setChecked5(false);
  };

  const handleCheck7 = () => {
    setChecked7(true);
    setChecked8(false);
  };

  const handleCheck8 = () => {
    setChecked8(true);
    setChecked7(false);
  };

  const [tableContainerHeight, setTableContainerHeight] = useState(300); // Altura inicial del contenedor externo

  const handleTableHeightChange = (height) => {
    // Actualiza la altura del contenedor externo según la altura de la tabla
    setTableContainerHeight(height);
  };

  // Función para guardar datos en Firebase
  const handleGuardarDatos = () => {
    // Verificar si el valor del nombre es válido antes de continuar
    if (!nombre) {
      console.error("Error: El nombre no puede estar vacío.");
      return;
    }

    // Crear el objeto con los datos del formulario
    const datosFormulario = {
      nombre: nombre,
      // Puedes agregar más campos según sea necesario
    };

    // Log para verificar los datos antes de guardarlos
    console.log("Datos a guardar:", datosFormulario);

    // Llamar a la función para guardar datos en Firebase
    guardarDatos(datosFormulario);
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} logo={require('../images/Logo_Lobo.png')} title="Psi-Frank" />
      <ScrollView contentContainerStyle={styles.formContainer}>
        {/* Información Personal */}
        <View style={styles.formSection}>
          <Text style={styles.sectionTitle}>Información Personal</Text>

          <Text style={styles.label}>Nombre:</Text>
          <TextInput 
            style={styles.input} 
            ref={nombreRef} 
            placeholder="Ingrese el nombre"
            onChangeText={(text) => setNombre(text)}
          />

          <Text style={styles.label}>Documento de identidad:</Text>
          <View style={styles.idnContainer}>
            <View style={styles.pickerContainerIdn}>
              <RNPickerSelect
                placeholder={{ label: '>', value: null }}
                onValueChange={(value) => setIdentidad(value)}
                items={[
                  { label: 'C.C', value: 'CC' },
                  { label: 'T.I', value: 'TI' },
                  { label: 'P.A', value: 'PA' },
                  { label: 'Otro', value: 'Otro' },
                ]}
                style={pickerSelectStyles}
                useNativeAndroidPickerStyle={false}
              />
            </View>
            <View style={styles.emptyView}></View>
            <TextInput style={styles.inputIdn} ref={idnRef} placeholder="Ingresa documento" keyboardType="numeric" />
          </View>

          <Text style={styles.label}>Fecha de nacimiento:</Text>
          <SelectFecha
            selectedDate={fechaNacimiento}
            onDateChange={setFechaNacimiento}
          />

          <Text style={styles.label}>Estado civil:</Text>
          <View style={styles.pickerContainer}>
            <RNPickerSelect
              placeholder={{ label: 'Selecciona estado civil', value: null }}
              onValueChange={(value) => setCivilState(value)}
              items={[
                { label: 'Soltero/a', value: 'Soltero/a' },
                { label: 'Casado/a', value: 'Casado/a' },
                { label: 'Unión Libre', value: 'Unión Libre' },
                { label: 'Divorciado/a', value: 'Divorciado/a' },
                { label: 'Viudo/a', value: 'Viudo/a' },
                { label: 'Separado/a', value: 'Separado/a' },
                { label: 'Comprometido/a', value: 'Comprometido/a' },
                { label: 'Conviviente', value: 'Conviviente' },
                { label: 'No especificado', value: 'No especificado' },
              ]}
              style={pickerSelectStyles}
              useNativeAndroidPickerStyle={false} // Esto desactiva el estilo predeterminado en Android
            />
          </View>

          <Text style={styles.label}>Sexo:</Text>
          <View style={styles.pickerContainer}>
            <RNPickerSelect
              placeholder={{ label: 'Selecciona el sexo', value: null }}
              onValueChange={(value) => setGender(value)}
              items={[
                { label: 'Femenino', value: 'Femenino' },
                { label: 'Masculino', value: 'Masculino' },
                { label: 'Otro', value: 'Otro' },
              ]}
              style={pickerSelectStyles}
              useNativeAndroidPickerStyle={false} // Esto desactiva el estilo predeterminado en Android
            />
          </View>

          <Text style={styles.label}>Ocupación:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingresa la ocupación"
            onSubmitEditing={handleCampoSubmit(escolaridadRef)}
            returnKeyType='next'
            blurOnSubmit={false}
          />

          <Text style={styles.label}>Escolaridad:</Text>
          <TextInput
            style={styles.input}
            ref={escolaridadRef}
            placeholder="Ingresa la escolaridad"
            onSubmitEditing={handleCampoSubmit(religionRef)}
            returnKeyType='next'
            blurOnSubmit={false}
          />

          <Text style={styles.label}>Religión:</Text>
          <TextInput
            style={styles.input}
            ref={religionRef}
            placeholder="Ingresa la religión"
            onSubmitEditing={handleCampoSubmit(viveconRef)}
            returnKeyType='next'
            blurOnSubmit={false}
          />

          <Text style={styles.label}>Con quién vive:</Text>
          <TextInput
            style={styles.input}
            ref={viveconRef}
            placeholder="Con quien vive el paciente"
          />

          <Text style={styles.label}>Acompañante:</Text>
          <View style={styles.idnContainer}>
            <View style={styles.checkBoxContainer}>
              <CheckBox
                checked={isCheckedAcompañante}
                onPress={() => setCheckedAcompañante(!isCheckedAcompañante)}
                containerStyle={{ width: 40, height: 80, marginTop: -1.3, }}
              />
            </View>
            <View style={styles.emptyView}></View>
            <TextInput
              style={styles.inputIdn}
              placeholder="Parentesco del acompañante"
              editable={isCheckedAcompañante}  // Aquí se condiciona la propiedad editable
              value={parentescoAcompañante}
              onChangeText={(text) => setParentescoAcompañante(text)}
              onSubmitEditing={handleCampoSubmit(telefonoRef)}
              returnKeyType='next'
              blurOnSubmit={false}
            />
          </View>
        </View>

        {/* Información de Contacto */}
        <View style={styles.formSection}>
          <Text style={styles.sectionTitleMiddle}>Información de Contacto</Text>
          <Text style={styles.label}>Teléfono:</Text>
          <TextInput
            style={styles.input}
            ref={telefonoRef}
            placeholder="Ingresa el teléfono"
            keyboardType="phone-pad"
            onSubmitEditing={handleCampoSubmit(patologicosRef)}
            returnKeyType='next'
            blurOnSubmit={false}
          />
          {/* Otros campos de información de contacto */}
        </View>
        {/* Antecedentes */}
        <View style={styles.formSection}>
          <Text style={styles.sectionTitleMiddle}>Antecedentes</Text>
          <View style={styles.checkBoxAntecedetes}>
            <Text style={styles.labelAntecedentes}>Patológicos:</Text>
            <View style={styles.checkBoxSpace}>
              <CheckBox
                title='Niega'
                checked={isCheckedPatologia}
                onPress={() => setCheckedPatologia(!isCheckedPatologia)}
                containerStyle={{
                  //marginRight: -320,
                  borderRadius: 8,
                  height: 45,
                }}
              />
            </View>
          </View>

          <TextInput style={styles.input}
            ref={patologicosRef}
            placeholder="Ingrese Patológias"
            editable={!isCheckedPatologia}
            onSubmitEditing={handleCampoSubmit(farmacologicosRef)}
            returnKeyType='next'
            blurOnSubmit={false}
          />
          <View style={styles.checkBoxAntecedetes}>
            <Text style={styles.labelAntecedentes}>Farmacológicos:</Text>
            <View style={styles.checkBoxSpace}>
              <CheckBox
                title='Niega'
                checked={isCheckedFarmaco}
                onPress={() => setCheckedFarmaco(!isCheckedFarmaco)}
                containerStyle={{
                  //marginRight: -320,
                  borderRadius: 8,
                  height: 45,
                }}
              />
            </View>
          </View>

          <TextInput style={styles.input}
            ref={farmacologicosRef}
            placeholder="Ingrese Farmacos"
            editable={!isCheckedFarmaco}
            onSubmitEditing={handleCampoSubmit(toxicosRef)}
            returnKeyType='next'
            blurOnSubmit={false}
          />
          <View style={styles.checkBoxAntecedetes}>
            <Text style={styles.labelAntecedentes}>Tóxicos:</Text>
            <View style={styles.checkBoxSpace}>
              <CheckBox
                title='Niega'
                checked={isCheckedToxicos}
                onPress={() => setCheckedToxicos(!isCheckedToxicos)}
                containerStyle={{
                  //marginRight: -320,
                  borderRadius: 8,
                  height: 45,
                }}
              />
            </View>
          </View>

          <TextInput style={styles.input}
            ref={toxicosRef}
            placeholder="Ingrese Tóxicos"
            editable={!isCheckedToxicos}
            onSubmitEditing={handleCampoSubmit(quirurgicosRef)}
            returnKeyType='next'
            blurOnSubmit={false}
          />
          <View style={styles.checkBoxAntecedetes}>
            <Text style={styles.labelAntecedentes}>Quirúrgicos:</Text>
            <View style={styles.checkBoxSpace}>
              <CheckBox
                title='Niega'
                checked={isCheckedQuirur}
                onPress={() => setCheckedQuirur(!isCheckedQuirur)}
                containerStyle={{
                  //marginRight: -320,
                  borderRadius: 8,
                  height: 45,
                }}
              />
            </View>
          </View>

          <TextInput style={styles.input}
            ref={quirurgicosRef}
            placeholder="Ingrese Cirugías"
            editable={!isCheckedQuirur}
            onSubmitEditing={handleCampoSubmit(alergiasRef)}
            returnKeyType='next'
            blurOnSubmit={false}
          />
          <View style={styles.checkBoxAntecedetes}>
            <Text style={styles.labelAntecedentes}>Alergias:</Text>
            <View style={styles.checkBoxSpace}>
              <CheckBox
                title='Niega'
                checked={isCheckedAlergias}
                onPress={() => setCheckedAlergias(!isCheckedAlergias)}
                containerStyle={{
                  //marginRight: -320,
                  borderRadius: 8,
                  height: 45,
                }}
              />
            </View>
          </View>

          <TextInput style={styles.input}
            ref={alergiasRef}
            placeholder="Ingrese Alergias"
            editable={!isCheckedAlergias}
            onSubmitEditing={handleCampoSubmit(ginecologicosRef)}
            returnKeyType='next'
            blurOnSubmit={false}
          />
          <View style={styles.checkBoxAntecedetes}>
            <Text style={styles.labelAntecedentes}>Ginecológicos:</Text>
            <View style={styles.checkBoxSpace}>
              <CheckBox
                title='No aplica'
                checked={isCheckedGinecAp}
                onPress={handleCheckGinecAp}
                containerStyle={{
                  //marginRight: -320,
                  borderRadius: 8,
                  height: 45,
                }}
              />
              <CheckBox
                title='Niega'
                checked={isCheckedGinec}
                onPress={handleCheckGinec}
                containerStyle={{
                  //marginRight: -320,
                  borderRadius: 8,
                  height: 45,
                }}
              />
            </View>
          </View>

          <TextInput style={styles.input}
            ref={ginecologicosRef}
            placeholder="Ingrese antecedences ginecológicos"
            editable={!isCheckedGinec && !isCheckedGinecAp} // No editable si alguno de los dos está seleccionado
            onSubmitEditing={handleCampoSubmit(psiquiatricosRef)}
            returnKeyType='next'
            blurOnSubmit={false}
          />
          <View style={styles.checkBoxAntecedetes}>
            <Text style={styles.labelAntecedentes}>Psiquiatricos:</Text>
            <View style={styles.checkBoxSpace}>
              <CheckBox
                title='Niega'
                checked={isCheckedPsiq}
                onPress={() => setCheckedPsiq(!isCheckedPsiq)}
                containerStyle={{
                  //marginRight: -320,
                  borderRadius: 8,
                  height: 45,
                }}
              />
            </View>
          </View>

          <TextInput style={styles.input}
            ref={psiquiatricosRef}
            placeholder="Ingrese antecedentes psiquiatricos"
            editable={!isCheckedPsiq}
            onSubmitEditing={handleCampoSubmit(antfamiliaRef)}
            returnKeyType='next'
            blurOnSubmit={false}
          />
          <View style={styles.checkBoxAntecedetes}>
            <Text style={[styles.labelAntecedentes, { marginBottom: 6 }]}>Antecedentes {'\n'}Familiares:</Text>
            <View style={[styles.checkBoxSpace, { marginTop: 6 }]}>
              <CheckBox
                title='Niega'
                checked={isCheckedPsiqFamilia}
                onPress={() => setCheckedPsiqFamilia(!isCheckedPsiqFamilia)}
                containerStyle={{
                  //marginRight: -320,
                  borderRadius: 8,
                  height: 45,
                }}
              />
            </View>
          </View>

          <TextInput style={styles.doubleInput}
            ref={antfamiliaRef}
            placeholder="Ingrese antecedentes Familiares"
            editable={!isCheckedPsiqFamilia}
            multiline={true}
            onSubmitEditing={() => {
              antfamiliaRef.current.blur();
              // Handle the transition to the next field
              laboratoriosRef.current.focus(); // Adjust this based on your needs
            }}
            returnKeyType='next'
            blurOnSubmit={true}
          />

          <Text style={styles.label}>Exámenes Laboratorios:</Text>
          <TextInput
            style={styles.doubleInput}
            ref={laboratoriosRef}
            placeholder="Ingrese exámenes de laboratorio"
            multiline={true}
            onSubmitEditing={() => {
              laboratoriosRef.current.blur();
              // Handle the transition to the next field
              consultaRef.current.focus(); // Adjust this based on your needs
            }}
            returnKeyType='next'
            blurOnSubmit={true}
          />

          <Text style={styles.label}>Motivo Consulta:</Text>
          <TextInput
            style={styles.doubleInput}
            ref={consultaRef}
            placeholder="Ingresar motivo de consulta"
            multiline={true}
            onSubmitEditing={() => {
              consultaRef.current.blur();
              // Handle the transition to the next field
              enfactualRef.current.focus(); // Adjust this based on your needs
            }}
            returnKeyType='next'
            blurOnSubmit={true}
          />

          <Text style={styles.label}>Enfermedad Actual:</Text>
          <TextInput
            style={styles.tripleInput}
            ref={enfactualRef}
            placeholder="Ingrese enfermedad actual"
            multiline={true}
            onSubmitEditing={() => {
              enfactualRef.current.blur();
            }}
            returnKeyType='next'
            blurOnSubmit={true}
          />
        </View>

        <View style={[styles.formSection, { marginBottom: 0 }, { width: 360 }]}>

          <Text style={[styles.labelTop, { marginTop: -8 }]}>Orientación:</Text>

          <View style={styles.numberList}>
            <Text style={styles.label2}>Autopsíquica: </Text>
            <View style={styles.checkBox}>
              <CheckBox
                title='Si'
                checked={isChecked1}
                onPress={handleCheck1}
              />
              <CheckBox
                title='No'
                checked={isChecked2}
                onPress={handleCheck2}
              />
            </View>
          </View>

          <View style={styles.numberList}>
            <Text style={styles.label2}>Alopsíquica: </Text>
            <View style={styles.checkBox}>
              <CheckBox
                title='Si'
                checked={isChecked3}
                onPress={handleCheck3}
              />
              <CheckBox
                title='No'
                checked={isChecked4}
                onPress={handleCheck4}
              />
            </View>
          </View>

          <Text style={styles.labelTop}>Conciencia:</Text>
          <View style={styles.numberList}>
            <Text style={styles.label2}>De Situación: </Text>
            <View style={styles.checkBox}>
              <CheckBox
                title='Si'
                checked={isChecked5}
                onPress={handleCheck5}
              />
              <CheckBox
                title='No'
                checked={isChecked6}
                onPress={handleCheck6}
              />
            </View>
          </View>

          <View style={styles.numberList}>
            <Text style={styles.label2}>De Enfermedad: </Text>
            <View style={styles.checkBox}>
              <CheckBox
                title='Si'
                checked={isChecked7}
                onPress={handleCheck7}
              />
              <CheckBox
                title='No'
                checked={isChecked8}
                onPress={handleCheck8}
              />
            </View>
          </View>

          <Text style={[styles.highLabel, { marginTop: 12 }]}>Examen Mental:</Text>
          <Text style={styles.examenLabel}>Prosopografía, Atención,
            Sensopercepción, Ideación, Pensamiento, Curso, Afectividad,
            Razonamiento, Memoria, Lenguaje, Ánimo, Sueño, Orexia,
            Juicio, Conducta, Introspección, Prospección</Text>
          <TextInput
            style={styles.doubleInputEA}
            placeholder="Ingrese el examen mental"
            multiline={true}
            onSubmitEditing={() => {
              current.blur();
              analisisRef.current.focus();
            }}
            returnKeyType='next'
            blurOnSubmit={true}
          />

          <Text style={styles.highLabel}>Análisis:</Text>
          <TextInput
            style={styles.tripleInput}
            ref={analisisRef}
            placeholder="Ingrese análisis"
            multiline={true}
            onSubmitEditing={() => {
              current.blur();
              analisisRef.current.focus();
            }}
            returnKeyType='next'
            blurOnSubmit={true}
          />

          <Text style={styles.highLabelB}>Impresión Diagnostica:</Text>
          <View style={{ width: 360 }}>
            <CamposDinamicos />
          </View>

          <Text style={styles.label}>Plan de Manejo:</Text>
          <TextInput
            style={styles.tripleInput}
            placeholder="Ingrese plan de manejo"
            multiline={true}
          />
        </View>

        <View style={styles.tableContainer}>
          <Text style={[styles.highLabel, { marginBottom: 8 }]}>Tratamiento:</Text>
          <Tabla onTableHeightChange={handleTableHeightChange} />
        </View>

        <View style={styles.formSection}>
          <Text style={styles.label}>Recomendaciones:</Text>
          <TextInput
            style={styles.tripleInput}
            placeholder="Ingrese recomendaciones"
            multiline={true}
          />
        </View>
        {/* Botón de Guardar */}
        <TouchableOpacity style={styles.submitButton} onPress={handleGuardarDatos}>
          <Text style={styles.submitButtonText}>Guardar</Text>
        </TouchableOpacity>
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181C42',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '100%',

  },

  formContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',

  },

  formSection: {
    marginBottom: 16,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
  },

  sectionTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 16,
  },

  sectionTitleMiddle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 6,
  },

  label: {
    color: '#fff',
    fontSize: 18,
    marginTop: 8,
  },

  label2: {
    color: '#fff',
    fontSize: 18,
    marginTop: 8,
    alignSelf: 'center',
  },

  labelTop: {
    color: '#fff',
    fontSize: 20,
    marginTop: 8,
    marginBottom: 8,
    alignSelf: 'center',
  },

  examenLabel: {
    color: '#fff',
    fontSize: 14,
    marginTop: 8,
    marginBottom: 4,
    width: 360,
    borderColor: '#fff',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 5,
  },

  highLabel: {
    color: '#fff',
    fontSize: 20,
    marginTop: 8,
    fontWeight: 'bold',
  },

  highLabelB: {
    color: '#fff',
    fontSize: 20,
    marginTop: 8,
    marginBottom: 8,
  },

  input: {
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginTop: 8,
    marginBottom: 8,
    width: 360,
    //maxWidth: 500,
  },

  inputB: {
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginTop: 8,
    marginBottom: 8,
    width: 326,
    //maxWidth: 500,
  },

  prefix: {
    color: '#fff',
    fontSize: 20,
    marginTop: 10,
    marginRight: 5, // Puedes ajustar el espaciado según tus necesidades
  },

  numberList: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  doubleInput: {
    backgroundColor: '#fff',
    height: 80,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginTop: 8,
    marginBottom: 8,
    width: 360,
    //maxWidth: 500,
  },

  doubleInputEA: {
    backgroundColor: '#fff',
    height: 180,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginTop: 8,
    marginBottom: 8,
    width: 360,
    //maxWidth: 500,
  },

  tripleInput: {
    backgroundColor: '#fff',
    height: 120,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginTop: 8,
    marginBottom: 8,
    width: 360,
    //maxWidth: 500,
  },

  pickerContainer: {
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 8,
    marginTop: 8,
    marginBottom: 8,
    paddingHorizontal: 16,
    paddingTop: 5,
    width: 360,
    //maxWidth: 500,
  },

  idnContainer: {
    flexDirection: 'row', // Para que los objetos estén en línea horizontal
    flex: 1, // Para que el contenedor ocupe todo el espacio disponible
  },

  inputIdn: {
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginTop: 8,
    marginBottom: 8,
    flex: 0.80,
  },

  pickerContainerIdn: {
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 8,
    marginTop: 8,
    marginBottom: 8,
    paddingHorizontal: 16,
    paddingTop: 7,
    flex: 0.18,
    marginRight: '10',
  },

  emptyView: {
    height: 40,
    flex: 0.02,
  },

  submitButton: {
    backgroundColor: '#3498DB',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 64,
    marginTop: 0,
  },

  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  checkBox: {
    flexDirection: 'row',
    width: 100,
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },

  checkBoxSpace: {
    flexDirection: 'column',
    //width: '100%',
    //alignSelf: 'center',
    justifyContent: 'flex-start',
    flex: 0.43,
  },
  checkBoxContainer: {
    backgroundColor: '#fff',
    flex: 0.18,
    alignItems: 'center', // Puedes ajustar según sea necesario
    borderRadius: 8,
    height: 40,
    marginTop: 8,
  },
  checkBoxAntecedetes: {
    flexDirection: 'row',
    width: 360,
  },
  labelAntecedentes: {
    color: '#fff',
    fontSize: 18,
    marginTop: 8,
    flex: 0.5,
  },
  tableContainer: {
    width: 360,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    color: 'black', // Color del texto
  },
  inputAndroid: {
    color: 'black', // Color del texto
  },
});

export default FormView;