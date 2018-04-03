import { action, extendObservable } from 'mobx';

const UserAccount = (superclass) => class extends superclass {
  constructor(args) {
    super(args);
    const props = {
      user: {},
      imageUrl: '',
      photos: [],
      selectedPhoto: {
        faces: []
      },
      changeName: false,
      loadUser: (data) => {
        this.user = data;
      },
      removeUser: () => {
        this.user = {};
        this.imageUrl = '';
        this.photos = [];
        this.selectedPhoto = {
          faces: []
        };
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
        .then(faces => {
          this.selectedPhoto = {
            url: this.imageUrl,
            faces,
          }
        })
        .catch(err => console.log('error', err))
      }, //End of handleImageSubmit
      handleNameSubmit: (input) => {
        const {name, face_id} = input;
        fetch(`${this.url}/photos/${face_id}`, {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            name
          })
        })
        .then(response => response.json())
        .then(res => {
          const {faceId, name} = res;
          const faceIndex = this.selectedPhoto.faces.map(face=>face.face_id).indexOf(+faceId)

          this.selectedPhoto.faces[faceIndex].name = name;
        })
        .catch(err => console.log('error', err))
      },
      handleGetPhotos: () => {
        fetch(`${this.url}/photos/${this.user.user_id}`)
        .then(response => response.json())
        .then(photos => {
          this.photos = photos;
        })
      },
      setSelectedPhoto: (photo) => {
        this.selectedPhoto = photo;
      },
      toggleChangeName: () => {
        console.log('fired')
        this.changeName = !this.changeName
        // this.selectedPhoto.faces[index].name = this.selectedPhoto.faces[index].name + '!';
      }      
    };
    const decorators = {
      loadUser: action,
      removeUser: action,
      handleImageSubmit: action,
      handleGetPhotos: action,
      setSelectedPhoto: action,
      toggleChangeName: action,
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