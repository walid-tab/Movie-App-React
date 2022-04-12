import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function AddMovie({addmv}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [rate, setRate] = useState(0);



   
console.log(title)
  return (
    <div >
        
        <>
      <Button className="bttn" variant="primary" onClick={handleShow}>
        Add new movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <label>Title</label>
        <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        <label >Description</label>
        <input type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
        <label>PosterUrl</label>
        <input type="text" value={url} onChange={(e)=>{setUrl(e.target.value)}}/>
        <label>Rating</label>
        <input type="number" value={rate} onChange={(e)=>{setRate(e.target.value)}}/>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={()=>{addmv({id:Math.random(),title,description,url,rate});handleClose()}} >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>


    </div>
  )
}

export default AddMovie