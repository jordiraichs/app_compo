import {View, Text } from 'react-native';

import Estils from '../estils/Estils';

// **** Component Funcions ****
// pas de parametres entre funcions

const funcio1 = () => {
    return "Funció 1";
}

const funcio2 = (par1,par2) => {
    return 'Colors a escollir: ' + par1 + ' , ' + par2;
}

const Funcions = () =>{
    
    const nom = "Pàgina Principal";
    const colors = ['groc','verd'];

    return ( 
            <View>
                <Text style={Estils.text1}> {nom} </Text>
                <Text> {funcio1()} </Text>
                <Text> {funcio2(colors[0],colors[1])} </Text>
            </View>
    );
}

// **** Component secundari ****
// props (per defecte): Propietats, pas de paràmetres entre components

const Exprops = (props) => {
    return (
        <View>
          <Text>Hola, em dic  {props.nom} i cognom {props.cognom} i tinc {props.anys} anys !</Text>
        </View>
      );
}


// **** Component principal ****

const Fun_props =(props)=> {
    
    return(
        <View>
            <Text> Estic estudiant {props.llenguatge} a l'assignatura de {props.assignatura} </Text>
            <Funcions />
            <Exprops nom="Pep" cognom="Gonzalex" anys="5000" />
        </View>
    );

}

export default Fun_props;