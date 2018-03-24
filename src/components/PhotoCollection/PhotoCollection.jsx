import React from 'react';
import PhotoModal from 'components/PhotoModal';

class PhotoCollection extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isModalOpen: false }
  }
  render() {
    const {isModalOpen} = this.state;
    return (
      <div>
        <button onClick={() => this.openModal()}>Open modal</button>
        { 
          isModalOpen &&
          <PhotoModal isOpen={isModalOpen} onClose={this.closeModal}>
            <h1>Modal title</h1>
            <p>hello</p>
            <p><button onClick={this.closeModal}>Close</button></p>
          </PhotoModal>
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

export default PhotoCollection;