import { Auth } from "aws-amplify";
import { useAppContext } from "../libs/contextLib";
const { userHasAuthenticated } = useAppContext();
async function handleSubmit(event) {
  event.preventDefault();

  try {
    await Auth.signIn(email, password);
    userHasAuthenticated(true);
  } catch (e) {
    alert(e.message);
  }
}