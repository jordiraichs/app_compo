import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

// **** compo contador ***
// Exemple de variables d'estat i funcions lambda

const Comprovar =(valor)=>{
    if (valor < 10 )return 'Apreta fort';
    else if(valor >= 10 && valor < 20 ) return 'Trencaràs el botó !!';
    else return 'Au!!!! Botó Trencat !!!';
}

const Velocitat =(valor)=>{
    if(valor < 5) return 'Rapid rapid !!!';
    else return 'Poc a Poc';
}

const Avis = (var1) => var1 > 7 ? true : false; 

const suma = (a,b) => a + b;

const Comptador =()=>{
    const [comptar,setComptar] = useState(0);
    
    return(
        <View>
            <Button 
                onPress={()=>{setComptar(comptar + 1)}}
                title={ Comprovar(comptar) + '  ' + comptar }
                disabled={ comptar > 20 ? true : false }
            />
            <Text> Funció {comptar} : {Velocitat(comptar)} </Text>
            <Text> Funció Lambda 1 : {suma(comptar,comptar)} </Text>
            <Text> Funció Lambda 2 : {!Avis(comptar) ? 'Rapid ... ': 'Para ...'} </Text>
            <Text> Funció Lambda 3 : { comptar < 4 ? 'Ves fent': 'Al tanto'} </Text>
        </View>
    );

}


// **** compo principal ****
const Var_estat = () => {
    return(
        <View>
            <Comptador />
        </View>
    );
}

export default Var_estat;