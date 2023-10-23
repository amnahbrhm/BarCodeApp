import ItemForm from "../../components/General/ItemForm";
import { Animated } from "react-native";

function NewItemScreen({ navigation }) {
  // const av = new Animated.Value(0);
  // av.addListener(() => {
  //   return;
  // });
  function submit(data) {
    console.log(data);
  }
  function cancel() {
    console.log('cancel');
    navigation.goBack();
  }
  return <ItemForm onCancel={cancel} onSubmit={submit} submitButtonLabel={'حفظ'} />
  
}

export default NewItemScreen;
