import React from 'react';
import {inject, observer} from 'mobx-react';

import Modal from 'components/Modal';

import TagPhotoDisplay from 'components/TagPhotoDisplay';

class PhotoCollection extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isModalOpen: false }
  }
  render() {
    const {isModalOpen} = this.state;
    const {photos, setCurrentPhoto} = this.props.store;
    // console.log('props in photocollection', this.props.store.photos)
    return (
      <div>
        <h2>Photo Collection</h2>
        <div>
          {photos.map(photo => {
            const {photo_id, url} = photo
            return <img 
              key={photo_id}
              onClick={() => {
                setCurrentPhoto(photo);
                this.openModal();
              }}
              src={url} alt='' 
              style={{width:'150px'}} 
            />
          })}
        </div>
        { 
          isModalOpen &&
          <Modal 
            isOpen={isModalOpen} 
            onClose={this.closeModal}
          >
            <h1>Modal title</h1>
            <p>hello</p>
            <TagPhotoDisplay />
            <p><button onClick={this.closeModal}>Close</button></p>
          </Modal>
        }
      </div>
    )
  }

  openModal = () => {
    this.setState({ isModalOpen: true })
  }

  closeModal = () => {
    this.setState({ isModalOpen: false })
  }
};

export default inject('store')(observer(PhotoCollection));