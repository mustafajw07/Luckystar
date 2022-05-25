import { useParams } from "react-router-dom";
import Casa from "./companies/Casa";
import Baba from "../brand/companies/Baba";
import Hepo from "../brand/companies/Hepo"
import Ebco from "../brand/companies/Ebco"
import Everyday from "../brand/companies/Everyday"
import Flora from "../brand/companies/Flora"
import Hafele from "../brand/companies/Hafele"
import Hemco from "../brand/companies/Hemco"
import Hettich from "../brand/companies/Hettich"
import Olive from "../brand/companies/Olive"
import Palldium from "../brand/companies/Palladium"
import Rehau from "../brand/companies/Rehau"
import Wicker from "../brand/companies/Wicker"
import Godrej from "../brand/companies/Godrej"
import Dorset from "../brand/companies/Dorset"
import Europa from "../brand/companies/Europa"


function Main() {
  const {"*" : path} = useParams();
  if(path === "casa") {
  return  ( 
    <Casa />
  )} if(path === "hepo"){
    return(
    <Hepo />
    )
  } if(path === "baba"){
    return (
    <Baba />
    )
  }if(path === "ebco"){
    return (
    <Ebco />
    )
  }if(path === "everyday"){
    return (
    <Everyday />
    )
  }if(path === "flora"){
    return (
    <Flora />
    )
  }if(path === "hafele"){
    return (
    <Hafele />
    )
  }if(path === "hemco"){
    return (
    <Hemco />
    )
  }if(path === "hettich"){
    return (
    <Hettich />
    )
  }if(path === "olive"){
    return (
    <Olive />
    )
  }if(path === "palladium"){
    return (
    <Palldium />
    )
  }if(path === "rehau"){
    return (
    <Rehau />
    )
  }if(path === "wicker"){
    return (
    <Wicker />
    )
  }if(path === "godrej"){
    return (
    <Godrej />
    )
  }if(path === "europa"){
    return (
    <Europa />
    )
  }if(path === "dorset"){
    return (
    <Dorset />
    )
  }
}


export default Main;
