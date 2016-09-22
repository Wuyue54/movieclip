import React from 'react';
import Preview from './Preview';

class Clip extends React.Component{
  constructor(props){
    super(props);
    this.downR = this.downR.bind(this);
    this.downL = this.downL.bind(this);
    this.dragR = this.dragR.bind(this);
    this.dragL = this.dragL.bind(this);
    this.upR = this.upR.bind(this);
    this.upL = this.upL.bind(this);
    this.state = {
       preArray : ['src/imgs/1.jpg','src/imgs/2.jpeg','src/imgs/3.jpeg','src/imgs/4.jpg'],
       ratio : 1,
       width : 120,
       length : 420,
       upR : 0,
       upL : 0,
       initX : null
    }
  }

  downR(e){
    e.stopPropagation();
    this.setState({
      upR : 1,
      initX : e.pageX
    })
  }

  downL(e){
    e.stopPropagation();
    this.setState({
      upL : 1,
      initX : e.pageX
    })
  }

  upR(e){
    e.stopPropagation();
    console.log('upR');
    this.setState({
      upR : 0
    })
  }

  upL(e){
    console.log('upL');
    e.stopPropagation();
    this.setState({
      upL : 0
    })
  }

  dragR(e){
    e.stopPropagation();
    console.log('dragR...');
    let tempDis = 0;
    let currX = e.pageX;
    let tempWidth;
    console.log(this.state.upR);
    if(this.state.upR == 0){
      return;
    }else{
      tempDis = e.pageX - this.state.initX;
      tempWidth = this.state.length - tempDis;
      console.log()
      this.setState({
        length: tempWidth
      });
    }
    console.log(this.state.length);
  }

  dragL(e){
    e.stopPropagation();
    console.log('dragLLLL...');
    let tempDis = 0;
    let currX = e.pageX;
    let tempWidth ;
    let marginL ;
    if(this.state.upL == 0){
      return;
    }else{
      tempDis = e.pageX - this.state.initX;
      tempWidth = this.state.length - tempDis;
      this.setState({
        length: tempWidth
      })
      this.refs.ClipWrapper.marginLeft = tempDis;
    }
  }

  render(){

    let styleObj = {
      wrapper:{
          backgroundColor: '#393939',
          width: this.state.length/this.state.ratio + 20 + 'px',
          height: this.state.width +'px',
      },
      bar:{
          backgroundColor: '#fea129',
          display: 'inline-block',
          width: '10px',
          height: this.state.width +'px',
          clear: 'both'
      }
    }

    return(
      <div style = {styleObj.wrapper} ref = 'ClipWrapper' >
        <div  onMouseDown = {this.downL} onMouseOver = {this.dragL} onMouseUp = {this.upL} style ={styleObj.bar} ref = 'leftBar'></div>
        <Preview
							width = {this.state.width}
							length = {this.state.length}
							ratio = {this.state.ratio}
							preview = {this.state.preArray}
				/>
      <div onMouseDown = {this.downR} onMouseOver = {this.dragR} onMouseUp = {this.upR} style ={styleObj.bar} ref ='rightBar'></div>
      </div>
    );
  }
}

export default Clip;
