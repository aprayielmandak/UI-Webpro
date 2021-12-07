import React from 'react';
import Content from '../components/Content';
import Navigation from '../components/Navigation';


const Home = () => {
  return(
    <div className="container">
      <Navigation />
      <div class="flex">
      <Content pict={'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/021/0602109_PE680178_S5.jpg'}  />
      <Content pict={'https://matobaldai.lt/out/pictures/master/product/1/gala-sofa-nappa(1).jpg'}/>
      <Content pict={'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/021/0602120_PE680189_S5.jpg'}/>
      </div>
    </div >
  );
}

export default Home;
