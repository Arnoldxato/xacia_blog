import Title from "../Components/Title";
import Content from "../Components/Content";
import { Button } from "@mui/material";

function Home (){

  return (
  <div>
    <Title heading ="MAKERERE BLOG"  />
    <Content Details ="This is a very nice blog from mkr" />
    <br/>

    <Title heading ="UGANDA MARTYRS BLOG"/>
    <Content Details="This is a very nice blog from mkr" />
    <br/>

    <Title heading="Ndejje BLOG"/>
    <Content Details="This is a very nice blog from mkr" />
    <br/>

    <Button variant="contained" disabled = {true}>Contained</Button>
    <Button variant="Text">submit</Button>
    <Button variant="outlined">Remove</Button>

    
    
  </div>
  );
  };
  export default Home;