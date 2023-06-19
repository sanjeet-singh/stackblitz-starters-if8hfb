import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function ToastComponent() {
  const [position, setPosition] = useState('top-end');

  return (
    <>
    

      <div
        aria-live="polite"
        aria-atomic="true"
        className="bg-light position-relative"
      
      >
        <ToastContainer
          className="p-3 "
          position={position}
          style={{ zIndex: 1 }}
        >
          <Toast bg={"success"}>
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Success</strong>
              <small>few seconds ago</small>
            </Toast.Header>
            <Toast.Body className='success'>Successfull Submit.</Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    </>
  );
}

export default ToastComponent;