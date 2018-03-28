import { action, /*observable,*/ extendObservable } from 'mobx';

const UserAccount = (superclass) => class extends superclass {
  constructor(args) {
    super(args);
    const props = {
      user: {},
      imageUrl: '',
      boxes: [],
      loadUser: () => {

      },
      removeUser: () => {

      },
      handleImageSubmit: (imageUrl) => {
        this.imageUrl = imageUrl;
        fetch(`${this.url}/imageurl`, {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            input: imageUrl
          })
        })
        .then(response => response.json())
        .then(response => {
          console.log('response', response);
          //TEMP
            this.boxes = this.calculateFaceLocations(response);
          //TEMP
        })
      }
    };
    const decorators = {
      // user: observable,
      loadUser: action,
      removeUser: action,
      handleImageSubmit: action,
    };
    extendObservable(this, props, decorators);
  };
  calculateFaceLocations = (data) => {
    console.log('data', data);
    // const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const clarifaiFaces = data.outputs[0].data.regions; //[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);

    return clarifaiFaces.map( clarifaiFace => {
      const {left_col, top_row, right_col, bottom_row} = clarifaiFace.region_info.bounding_box;
      return {
        leftCol: left_col * width,
        topRow: top_row * height,
        rightCol: width - (right_col * width),
        bottomRow: height - (bottom_row * height)
      };
    });
  }
};

export default UserAccount;