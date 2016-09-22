import React, {PropTypes} from 'react';

const Clip = ({ratio, width, length, preview}) => {

  let preImgs = []; // array to push img for each frame

  let showIndex; // how many imgs should show completely form left to right in the clip component

  // styleObj for clip components
  let styleObj ={
    //wrapper provide bg color, don't know how you guys set box-sizing for global style.
    wrapper:{
      backgroundColor: '#393939',
      // border: '10px solid #393939',
      width: length/ratio + 'px',
      height: width + 'px',
      display:'inline-block'
    },
    clipper:{
      width: length/ratio + 'px',
      height: width + 'px',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    },
    list:{
      height: width + 'px',
      width: width + 'px',
      display: 'inline-block',
      backgroundSize : 'contain'
    }
  };


  let tempStyle = {};

  // push images tags from preview to the preImgs array,
  //give them different style object based on different condition.
  if(preview.length * width > length){
    showIndex = Math.floor(length / width);
    preview.forEach((url,index)=>{
        tempStyle = Object.assign({},styleObj.list);
        tempStyle.backgroundImage = "url('"+url+"')";
        if(index > showIndex -1&& index < preview.length-1){
          tempStyle.display = 'none';
          preImgs.push(
            <div style = {tempStyle} key = {index}>
            </div>
          );
        }else{
          preImgs.push(
            <div style = {tempStyle} key = {index}>
            </div>
          );
        }
    });
  }else{
    preview.forEach((url,index)=>{
      tempStyle = Object.assign({},styleObj.list);
      tempStyle.backgroundImage = "url('"+url+"')";
      preImgs.push(
        <div style = {tempStyle} key = {index}>
        </div>
      );
    });
  };

  return(
    <div style= {styleObj.wrapper}>
      <div style = {styleObj.clipper}>
        {preImgs}
      </div>
    </div>
  );
}

Clip.propTypes = {
  ratio: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  preview: PropTypes.array.isRequired
};

export default Clip;
