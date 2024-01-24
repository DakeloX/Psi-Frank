import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Platform } from 'react-native';
import { CheckBox } from 'react-native-elements';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Header from '../components/Header';
import Footer from '../components/Footer';
import RNPickerSelect from 'react-native-picker-select';

const FormView = () => {
  const [date, setDate] = useState(new Date());
  const [gender, setGender] = useState(null);
  const [identidad, setIdentidad] = useState(null);
  const [escolaridad, setEscolaridad] = useState(null);
  const [conciencia, setConciencia] = useState(null);
  const [curso, setCurso] = useState(null);
  const [razonamiento, setRazonamiento] = useState(null);
  const [ritmoLenguaje, setRitmoLenguaje] = useState(null);
  const [juicio, setJuicio] = useState(null);
  const [instrospeccion, setIntrospeccion] = useState(null);
  const [prospeccion, setProspeccion] = useState(null);
  const [civilState, setCivilState] = useState(null);

  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  const [isCheckedAcompañante, setCheckedAcompañante] = useState(false);
  const [parentescoAcompañante, setParentescoAcompañante] = useState('');

  const [isChecked, setChecked] = useState(false);
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);
  const [isChecked4, setChecked4] = useState(false);
  const [isChecked5, setChecked5] = useState(false);
  const [isChecked6, setChecked6] = useState(false);

  const handleCheck5 = () => {
    setChecked5(true);
    setChecked6(false);
  };

  const handleCheck6 = () => {
    setChecked5(false);
    setChecked6(true);
  };

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleDateConfirm = (selectedDate) => {
    hideDatePicker();
    setDate(selectedDate);
  };
  
  const renderDatePicker = () => {
    if (Platform.OS === 'web') {
      return (
        <input
          type="date"
          value={date.toISOString().split('T')[0]}
          onChange={(e) => setDate(new Date(e.target.value))}
        />
      );
    } else {
      return (
        <>
          <TouchableOpacity onPress={showDatePicker}>
            <Text>{date.toDateString()}</Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleDateConfirm}
            onCancel={hideDatePicker}
          />
        </>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Header logo={require('../images/Logo_Lobo.png')} title="Pacientes" />
      <ScrollView contentContainerStyle={styles.formContainer}>
        {/* Información Personal */}
        <View style={styles.formSection}>
          <Text style={styles.sectionTitle}>Información Personal</Text>
          
          <Text style={styles.label}>Nombre:</Text>
          <TextInput style={styles.input} placeholder="Ingrese el nombre" />

          <Text style={styles.label}>Fecha de consulta:</Text>
          <View style={styles.dateInput}>
            {renderDatePicker()} 
          </View>
          
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
                ]}
                style={pickerSelectStyles}
                useNativeAndroidPickerStyle={false} // Esto desactiva el estilo predeterminado en Android
              />
            </View>
            <View style={styles.emptyView}></View>
            <TextInput style={styles.inputIdn} placeholder="Ingresa documento" keyboardType="numeric" />
          </View>
          
          <Text style={styles.label}>Edad:</Text>
          <TextInput style={styles.input} placeholder="Ingresa la edad" keyboardType="numeric" />
          
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
          <TextInput style={styles.input} placeholder="Ingresa la ocupación"/>

          <Text style={styles.label}>Escolaridad:</Text>

          <View style={styles.pickerContainer}>
            <RNPickerSelect
              placeholder={{ label: 'Selecciona el nivel', value: null }}
              onValueChange={(value) => setEscolaridad(value)}
              items={[
                { label: 'No aplica', value: 'No aplica' },
                { label: 'Preescolar', value: 'Preescolar' },
                { label: 'Educación Basica', value: 'EduBasica' },
                { label: 'Educación Media', value: 'EduMedia' },
                { label: 'Educaión superior', value: 'EduSuperior' },
              ]}
              style={pickerSelectStyles}
              useNativeAndroidPickerStyle={false} // Esto desactiva el estilo predeterminado en Android
            />
          </View>
          
          <Text style={styles.label}>Religión:</Text>
          <TextInput style={styles.input} placeholder="Ingresa la religión"/>
          
          <Text style={styles.label}>Con quién vive:</Text>
          <TextInput style={styles.input} placeholder="Con quien vive el paciente"/>
          
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
            />
          </View>
        </View>

        {/* Información de Contacto */}
        <View style={styles.formSection}>
          <Text style={styles.sectionTitleMiddle}>Información de Contacto</Text>
          <Text style={styles.label}>Teléfono:</Text>
          <TextInput style={styles.input} placeholder="Ingresa el teléfono" keyboardType="phone-pad" />
          {/* Otros campos de información de contacto */}
        </View>
                {/* Antecedentes */}
        <View style={styles.formSection}>
          <Text style={styles.sectionTitleMiddle}>Antecedentes</Text>

          <Text style={styles.label}>Patológicos:</Text>
          <TextInput style={styles.input} placeholder=">"/>

          <Text style={styles.label}>Farmacológicos:</Text>
          <TextInput style={styles.input} placeholder=">"/>

          <Text style={styles.label}>Tóxicos:</Text>
          <TextInput style={styles.input} placeholder=">"/>

          <Text style={styles.label}>Quirúrgicos:</Text>
          <TextInput style={styles.input} placeholder=">"/>

          <Text style={styles.label}>Alergias:</Text>
          <TextInput style={styles.input} placeholder=">"/>

          <Text style={styles.label}>Ginecológicos:</Text>
          <TextInput style={styles.input} placeholder=">"/>

          <Text style={styles.label}>Psiquiatricos:</Text>
          <TextInput style={styles.input} placeholder=">"/>

          <Text style={styles.label}>Antecedentes Psiquiatricos de familia:</Text>
          <TextInput style={styles.doubleInput} placeholder=">" multiline={true}/>

          <Text style={styles.label}>Examenes laboratorios:</Text>
          <TextInput style={styles.doubleInput} placeholder=">" multiline={true}/>

          <Text style={styles.label}>MC:</Text>
          <TextInput style={styles.doubleInput} placeholder=">" multiline={true}/>

          <Text style={styles.label}>EA:</Text>
          <TextInput style={styles.doubleInput} placeholder=">" multiline={true}/>
        </View>

        <View style={styles.formSection}>
          <Text style={styles.sectionTitleMiddle}>Examen mental</Text>

          <Text style={styles.label}>Prosopografía: </Text>
          <TextInput style={styles.doubleInput} placeholder=">" multiline={true}/>

          <Text style={styles.label}>Orietación: </Text>
          <View style = {styles.checkBox}>
            <CheckBox
              title='Autopsíquica'
              checked={isChecked1}
              onPress={() => setChecked1(!isChecked1)}
            />
            <CheckBox
              title='Alopsíquica'
              checked={isChecked2}
              onPress={() => setChecked2(!isChecked2)}          
            />
          </View>

          <Text style={styles.label}>Situación de: </Text>
          <View style = {styles.checkBox}>
            <CheckBox
              title='Conciencia'
              checked={isChecked3}
              onPress={() => setChecked3(!isChecked3)}
            />
            <CheckBox
              title='Enfermedad'
              checked={isChecked4}
              onPress={() => setChecked4(!isChecked4)}          
            />
          </View>

          <View style={styles.pickerContainer}>
            <RNPickerSelect
              placeholder={{ label: 'Selecciona nivel de conciencia', value: null }}
              onValueChange={(value) => setConciencia(value)}
              items={[
                { label: 'Alerta', value: 'Alerta' },
                { label: 'Hipolucido', value: 'Hipolucido' },
                { label: 'Somnolencia', value: 'Somnolencia' },
                { label: 'Obnubilado', value: 'Obnubilado' },
                { label: 'Coma', value: 'Coma' },
              ]}
                style={pickerSelectStyles}
                useNativeAndroidPickerStyle={false} // Esto desactiva el estilo predeterminado en Android
            />
          </View>

          <Text style={styles.label}>Atención:</Text>
          <TextInput style={styles.doubleInput} placeholder=">" multiline={true}/>

          <Text style={styles.label}>Sensopercepción:</Text>
          <TextInput style={styles.doubleInput} placeholder=">" multiline={true}/>

          <Text style={styles.highLabel}>Ideación o Pensamiento:</Text>
          <Text style={styles.label}>Curso:</Text>
          <View style={styles.pickerContainer}>
            <RNPickerSelect
              placeholder={{ label: 'Selecciona curso', value: null }}
              onValueChange={(value) => setCurso(value)}
              items={[
                { label: 'Acelerado', value: 'Acelerado' },
                { label: 'Retardado', value: 'Retardado' },
                { label: 'Prolijo', value: 'Prolijo' },
                { label: 'Estereotipado', value: 'Estereotipado' },
                { label: 'ecolalia', value: 'ecolalia' },
                { label: 'interceptado', value: 'interceptado' },
                { label: 'disgregado', value: 'disgregado' },
                { label: 'coherente', value: 'coherente' },
                { label: 'Incoherente', value: 'Incoherente' },
              ]}
              style={pickerSelectStyles}
              useNativeAndroidPickerStyle={false} // Esto desactiva el estilo predeterminado en Android
            />
          </View>

          <TextInput style={styles.doubleInput} placeholder=">" multiline={true}/>
          <Text style={styles.label}>Razonamiento:</Text>
          <View style={styles.pickerContainer}>
            <RNPickerSelect
              placeholder={{ label: 'Selecciona tipo de razonamiento', value: null }}
              onValueChange={(value) => setRazonamiento(value)}
              items={[
                { label: 'Lógico', value: 'Lógico' },
                { label: 'Ilógico', value: 'Ilógico' },
                { label: 'Analógico', value: 'Analógico' },
              ]}
              style={pickerSelectStyles}
              useNativeAndroidPickerStyle={false} // Esto desactiva el estilo predeterminado en Android
            />
          </View>

          <Text style={styles.label}>Memoria:</Text>
          <TextInput style={styles.doubleInput} placeholder=">" multiline={true}/>

          <Text style={styles.highLabel}>Lenguaje:</Text>
          <Text style={styles.label}>Ritmo:</Text>

          <View style={styles.pickerContainer}>
            <RNPickerSelect
              placeholder={{ label: 'Selecciona el ritmo', value: null }}
              onValueChange={(value) => setRitmoLenguaje(value)}
              items={[
                { label: 'Normal', value: 'Normal' },
                { label: 'Acelerado', value: 'Acelerado' },
                { label: 'Retardado', value: 'Retardado' },
              ]}
              style={pickerSelectStyles}
              useNativeAndroidPickerStyle={false} // Esto desactiva el estilo predeterminado en Android
            />
          </View>

          <View style = {styles.checkBox}>
            <CheckBox
              title='Coherente'
              checked={isChecked5}
              onPress={handleCheck5}
            />
            <CheckBox
              title='Incoherente'
              checked={isChecked6}
              onPress={handleCheck6}          
            />
          </View>

          <View style={styles.checkBox}>
            <CheckBox
              title={'Uso de Muletillas'}
              checked={isChecked}
              onPress={() => setChecked(!isChecked)}
            />
          </View>

          <Text style={styles.label}>Estado de ánimo:</Text>
          <TextInput style={styles.doubleInput} placeholder=">" multiline={true}/>

          <Text style={styles.label}>Sueño:</Text>
          <TextInput style={styles.doubleInput} placeholder=">" multiline={true}/>

          <Text style={styles.label}>Orexia:</Text>
          <TextInput style={styles.doubleInput} placeholder=">" multiline={true}/>

          <Text style={styles.label}>Juicio:</Text>

          <View style={styles.pickerContainer}>
            <RNPickerSelect
              placeholder={{ label: 'Selecciona juicio', value: null }}
              onValueChange={(value) => setJuicio(value)}
              items={[
                { label: 'Normal', value: 'Normal' },
                { label: 'Desviado ', value: 'Desviado ' },
                { label: 'Deficiente ', value: 'Deficiente ' },
                { label: 'Debilitado', value: 'Debilitado' },
                { label: 'Suspendido', value: 'Suspendido' },
              ]}
              style={pickerSelectStyles}
              useNativeAndroidPickerStyle={false} // Esto desactiva el estilo predeterminado en Android
            />
          </View>

          <Text style={styles.label}>Conducta:</Text>
          <TextInput style={styles.doubleInput} placeholder=">" multiline={true}/>

          <Text style={styles.label}>Introspección:</Text>

          <View style={styles.pickerContainer}>
            <RNPickerSelect
              placeholder={{ label: 'Selecciona introspección', value: null }}
              onValueChange={(value) => setIntrospeccion(value)}
              items={[
                { label: 'Pobre', value: 'Pobre' },
                { label: 'Nula', value: 'Nula' },
                { label: 'Conservada', value: 'Conservada' },
              ]}
              style={pickerSelectStyles}
              useNativeAndroidPickerStyle={false} // Esto desactiva el estilo predeterminado en Android
            />
          </View>

          <Text style={styles.label}>Prospección:</Text>
          <View style={styles.pickerContainer}>
            <RNPickerSelect
              placeholder={{ label: 'Selecciona prospección', value: null }}
              onValueChange={(value) => setProspeccion(value)}
              items={[
                { label: 'Pobre', value: 'Pobre' },
                { label: 'Nula', value: 'Nula' },
                { label: 'Conservada', value: 'Conservada' },
              ]}
              style={pickerSelectStyles}
              useNativeAndroidPickerStyle={false} // Esto desactiva el estilo predeterminado en Android
            />
          </View>

          <Text style={styles.highLabel}>Análisis:</Text>
          <TextInput style={styles.tripleInput} placeholder=">" multiline={true}/>
        </View>
        {/* Botón de Guardar */}
        <TouchableOpacity style={styles.submitButton}>
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
    marginTop: 7,
  },

  label: {
    color: '#fff',
    fontSize: 18,
    marginTop: 8,
  },

  highLabel: {
    color: '#fff',
    fontSize: 20,
    marginTop: 8,
    fontWeight: 'bold',
  },

  input: {
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginTop: 8,
    marginBottom: 8,
    width: 350,
    maxWidth: 500,
  },

  doubleInput: {
    backgroundColor: '#fff',
    height: 80,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginTop: 8,
    marginBottom: 8,
    width: 350,
    maxWidth: 500,
  },

  tripleInput:{
    backgroundColor: '#fff',
    height: 100,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginTop: 8,
    marginBottom: 8,
    width: 350,
    maxWidth: 500,
  },

  dateInput: {
    backgroundColor: '#fff',
    paddingLeft: 16,
    paddingTop: 8,
    marginTop: 8,
    marginBottom: 8,
    height: 40,
    borderRadius: 8,
    width: 350,
    maxWidth: 500,
  },

  pickerContainer: {
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 8,
    marginTop: 8,
    marginBottom: 8,
    paddingHorizontal: 16,
    paddingTop: 5,
    width: 350,
    maxWidth: 500,
  },

  idnContainer:{
    flexDirection: 'row', // Para que los objetos estén en línea horizontal
    flex: 1, // Para que el contenedor ocupe todo el espacio disponible
  },

  inputIdn:{
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
    flex:0.18,
    marginRight:'10',
    
  },

  emptyView: {
    height: 40,
    flex:0.02,
  },

  submitButton: {
    backgroundColor: '#3498DB',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 64,
  },

  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  checkBox:{
    flexDirection:'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkBoxContainer:{
    backgroundColor: '#fff',
    flex: 0.18,
    alignItems: 'center', // Puedes ajustar según sea necesario
    borderRadius: 8,
    height:40,
    marginTop: 8,
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