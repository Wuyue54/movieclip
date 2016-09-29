import React from 'react';
import Preview from './Preview';

class Clip extends React.Component{
  constructor(props){
    super(props);
    this.drag = this.drag.bind(this);
    // this.drop = this.drop.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
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

  drag(e){
    e.stopPropagation();
    e.preventDefault();
    let dis;
    let newWidth;
    if(e.target.className === 'rightBar'){
      if(e.clientX <= this.refs.ClipWrapper.offsetLeft+50){
        return ;
      }

      dis = e.clientX - e.target.offsetLeft;
      newWidth =  this.state.length + dis;

      this.setState({
        length: newWidth
      });
    }
    if(e.target.className === 'leftBar'){

      if(e.clientX >= this.refs.ClipWrapper.offsetLeft + this.state.length -50){
        return ;
      }
      dis = e.clientX - e.target.offsetLeft;
      newWidth =  this.state.length - dis;
      let marginLeft = Number(this.refs.ClipWrapper.style.marginLeft.replace(/px/g, ' '))+ dis;
      this.refs.ClipWrapper.style.marginLeft = marginLeft + 'px';
      this.setState({
        length: newWidth
      });
    }
  }
  onDragOver(e) {
     e.preventDefault();
     e.stopPropagation();
     return false;
  }

  // drop(e){
  //    console.log(this.state);
  // }

  render(){
    let styleObj = {
      wrapper:{
          backgroundColor: '#393939',
          width: this.state.length/this.state.ratio + 20 + 'px',
          height: this.state.width +'px',
      },
      bar:{
          // backgroundColor: '#fea129',
          display: 'inline-block',
          width: '10px',
          height: this.state.width +'px',
          clear: 'both',
          cursor: 'ew-resize'
      }
    }

    return(
      <div style = {styleObj.wrapper} ref = 'ClipWrapper' >
        <div
             draggable='true'
             onDrag = {this.drag}
             onDragOver = {this.onDragOver}
             style ={styleObj.bar}
             className = 'leftBar'>
        </div>
        <Preview
							width = {this.state.width}
							length = {this.state.length}
							ratio = {this.state.ratio}
							preview = {this.state.preArray}
				/>
      <div
           draggable='true'
           onDrag={this.drag}
           onDragOver = {this.onDragOver}
           style ={styleObj.bar}
           className = 'rightBar'>
      </div>
      </div>
    );
  }
}

export default Clip;
