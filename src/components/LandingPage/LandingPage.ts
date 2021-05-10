import { AppContext } from '../../context/AppContext';
import { useContext } from 'react';
import { useHistory } from "react-router-dom";

const LandingPage = () => {
  const { isAuth } = useContext(AppContext);
  let history = useHistory();
  if(isAuth) {
    history.push("/dashboard")
  } else {
    history.push("/login")
  }
  return null;
}

export default LandingPage
