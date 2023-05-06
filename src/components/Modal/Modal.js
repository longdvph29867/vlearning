import React, { useState } from 'react'
import { Button, Modal } from 'antd';
import ButtonV2 from '../ButtonV2/ButtonV2';
const ModalOkk = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
      setOpen(true);
      let time = setInterval(() => {
          setOpen(false)
          clearInterval(time);
      }, 3000)
  }
  return (
    <div>
        <Modal 
        open={true}
        footer={null}
        closable={false}
        >
            {props.children}
        </Modal>
    </div>
  );
};
export default ModalOkk;
