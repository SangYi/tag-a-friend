import React from 'react';
import Modal from 'components/Modal';

class PhotoCollection extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isModalOpen: false }
  }
  render() {
    const {isModalOpen} = this.state;
    return (
      <div>
        <h2>Photo Collection</h2>
        <button onClick={() => this.openModal()}>Open modal</button>
        { 
          isModalOpen &&
          <Modal 
            isOpen={isModalOpen} 
            onClose={this.closeModal}
          >
            <h1>Modal title</h1>
            <p>hello</p>
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

export default PhotoCollection;