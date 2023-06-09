import React from 'react';

const Modal = ({ show, setShow, children }: { show: boolean, setShow: Function, children?: React.ReactNode }) => {
  const closeModal = () => {
    setShow(false)
  }
  
  if (show) {
    return (
      <div>
        <div 
          id="overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div 
            id="content"
            style={{
              zIndex: '2',
              width: '50%',
              background: '#fff'
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              padding: '5px',
            }}>
              <button onClick={closeModal}>{"✕"}</button>
            </div>
            {children}
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}      
export default Modal;