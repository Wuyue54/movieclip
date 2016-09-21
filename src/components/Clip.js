import React, {PropTypes} from 'react';

const Clip = ({ratio, width, length, preview}) => {

  let preImgs = []; // array to push <list><img /><list> for each frame

  let showIndex; //get how many imgs should show completely form left to right in the clip component

  // styleObj for clip components
  let styleObj ={
    clipper:{
      position: 'relative',
      padding: '10px',
      backgroundColor: '#000',
      width: length/ratio + 'px',
      height: width + 'px',
      zIndex: '-2',
    },
    list:{
      height: width + 'px',
      width: 'auto',
      display: 'inline-block',
      listStyle: 'none',
      zIndex: '0',
    },
    img:{
      width: (width / ratio) + 'px', // I manually set images' width equals their height, I don't know how you guys set the images width/height ratio.
      height: (width) + 'px'
    }
  };

  // modify last frame images, I didn't chop it but lowest it z-index so the image before it could cover it
  let lastStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    height: width,
    width: 'auto',
    display: 'inline-block',
    listStyle: 'none',
    zIndex: '-1'
  }

  // hide the frames in the middle
  let hideStyle = {
    display:'none'
  }

  // push images tags from preview to the preImgs array, give them different style object based on different condition.
  if(preview.length * width > length){

    showIndex = Math.floor(length / width);

    preview.forEach((url,index)=>{
      if(index != preview.length - 1){
        if(index > showIndex -1){
          preImgs.push(
            <li style = {hideStyle} key = {index}>
              <img style ={styleObj.img} src= {url}/>
            </li>
          );
        }else{
          preImgs.push(
            <li style = {styleObj.list} key = {index}>
              <img style ={styleObj.img} src= {url}/>
            </li>
          );
        }
      }else{
        preImgs.push(
          <li style = {lastStyle} key = {index}>
            <img style ={styleObj.img} src= {url}/>
          </li>
        );
      }
    });
  }else{
    preview.forEach((url,index)=>{
      preImgs.push(
        <li style = {styleObj.list} key = {index}>
          <img style ={styleObj.img} src= {url}/>
        </li>
      );
    });
  };

  return(
      <ul style = {styleObj.clipper}>
        {preImgs}
      </ul>
  );
}

Clip.propTypes = {
  ratio: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  preview: PropTypes.array.isRequired
};

export default Clip;
