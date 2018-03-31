import { action, /*observable,*/ extendObservable } from 'mobx';

const UserAccount = (superclass) => class extends superclass {
  constructor(args) {
    super(args);
    const props = {
      user: {},
      imageUrl: '',
      boxes: [],
      photo: {},
      loadUser: (data) => {
        this.user = data;
      },
      removeUser: () => {
        this.user = {};
      },
      handleImageSubmit: (inputs) => {
        const { imageUrl, user_id } = inputs;
        this.imageUrl = imageUrl;
        fetch(`${this.url}/imageurl`, {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            imageUrl,
            user_id,
          })
        })
        .then(response => response.json())
        .then(response => {
          console.log('response', response);
          //TEMP
            this.boxes = this.calculateFaceLocations(response);
          //TEMP

          // if(response) {
          //   const calculatedFaces = this.calculateFaceLocations(response);
          //   fetch(`${this.url}/photos`, {
          //     method: 'post',
          //     headers: {'Content-Type': 'application/json'},
          //     body: JSON.stringify({
          //       imageUrl,
          //       faces: calculatedFaces
          //     }) 
          //   })
          //   .then(response => response.json())
          //   .then(photoObj => {
          //     this.photo = photoObj;
          //   })
          //   .catch(err => console.log('error', err))
          // }
        })
        .catch(err => console.log('error', err))
      } //End of handleImageSubmit
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
    const clarifaiFaces = data.outputs[0].data.regions;

    return clarifaiFaces.map( clarifaiFace => {
      const {left_col, top_row, right_col, bottom_row} = clarifaiFace.region_info.bounding_box;
      return {
        left: +(left_col * 100).toFixed(1),
        top: +(top_row * 100).toFixed(1),
        right: +( right_col * 100).toFixed(1),
        bottom: +( bottom_row * 100).toFixed(1),
      };
    });
  }
};

export default UserAccount;