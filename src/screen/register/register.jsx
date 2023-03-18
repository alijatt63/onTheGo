
import { TouchableOpacity, TextInput, View,Image} from "react-native";
import * as EmailValidator from "email-validator";
import { useEffect,useState } from "react";
import { auth ,db} from "../../services/fireBaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Styles } from "./register_Style";
import { Button } from "../../component/button";
import { colors } from "../../theme/designSystem";
import Spinner from "react-native-loading-spinner-overlay";
import { setDoc, doc, collection } from "firebase/firestore";
import { CustomCamera } from "../../component/customCamera";

function Register({navigation}){

const [isValid,setIsValid]=useState(false);
const [lastName,setLastName]=useState("");
const [firstName,setFirstName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [confirmPassword,setConfirmPassword]=useState("");
const [loading, setLoading] = useState(false);
const [isCameraOpen, setIsCameraOpen] = useState(false);



const onPressSubmit=()=>{
    if(firstName===""){
        alert("please enter First Name");
    return
    }
     if(lastName===""){
        alert("please enter Last Name");
    return
    }
    if(email===""){
        alert("please enter Email");
        return
        }
        if(EmailValidator.validate(email)===false){
            alert("please enter Correct Email");
        return
        }
        if(password===""){
            alert("please enter Password");
        return
        }
        if(confirmPassword===""){
            alert("please Re Confirm your Password");
        return
        }
        if(password !==confirmPassword){
            alert("Your Password dosen't Match");
        return
        }
      
       

        setLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((authResponse) => {

        const user = authResponse.user

        // print authResponse to study and get UID out of it
        console.log(user.uid)


        setDoc(doc(db, 'users', user.uid), { email, firstName, lastName }).then(dbResponse => {
          setLoading(false);
          alert('user is registerd');
        }).catch(dbError => {
          setLoading(false);
          alert(dbError.message);
        })


      })
      .catch((authError) => {
        setLoading(false);
        alert(authError.message);
      });

};

const onPickImagePress = () => {
    // invert the state of camera opernet
    setIsCameraOpen(true)
  }





useEffect(()=>{


    checkValidForm()}, [email,firstName,lastName,password,confirmPassword])

const checkValidForm=()=>{


}




return(


<View style={Styles.container}>

<View style={Styles.formCon}>
<TouchableOpacity style={Styles.pickImageCon}
          onPress={onPickImagePress}
        >
          <Image style={Styles.profieImage} source={require('../../../assets/icon.png')} />
        </TouchableOpacity>
<TextInput style={Styles.inputCon} onChangeText={setFirstName} placeholder="First Name" placeholderTextColor={colors.secondary} />
<TextInput style={Styles.inputCon} onChangeText={setLastName} placeholder="Last Name" placeholderTextColor={colors.secondary} />
<TextInput style={Styles.inputCon} onChangeText={setEmail} placeholder="Email" placeholderTextColor={colors.secondary} />
<TextInput style={Styles.inputCon} onChangeText={setPassword} placeholder="Enter Password"  placeholderTextColor={colors.secondary} secureTextEntry/>
<TextInput style={Styles.inputCon} onChangeText={setConfirmPassword} placeholder="Confirm Your Password" placeholderTextColor={colors.secondary} secureTextEntry/>
</View>

<View style={{flexDirection:"row",alignSelf:"center"}}>
<Button outline title={"Let's Register"} onPress={onPressSubmit} />
        </View>




<View style={Styles.bottomCon}>


<Spinner visible={loading} textContent={"Please Wait"} />


</View>

{
        isCameraOpen === true &&
        <CustomCamera />
      }

</View>



)



}

export {Register};


