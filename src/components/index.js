import React, { useContext, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DragItem from "./DragItem";
import { Grid, GridImage, GridItem } from "./Grid";
import GridContext from "./Grid/GridContext";

function ImageContainer() {
  const { items, moveItem, cancelDrop, confirmDrop } = useContext(GridContext);
  const [showConfirm, setShowConfirm] = useState(false);

  const closeConfirmModal = () => setShowConfirm(false);
  const showConfirmModal = () => setShowConfirm(true);

  return (
    <div>
      <section>
        <Grid>
          {items.map((item) => (
            <DragItem
              key={item.id}
              id={item.id}
              onMoveItem={moveItem}
              dropComplete={showConfirmModal}
            >
              <GridItem>
                <GridImage src={item.src}></GridImage>
              </GridItem>
            </DragItem>
          ))}
        </Grid>
      </section>
      <Modal show={showConfirm} onHide={closeConfirmModal} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Please Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to make this change?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => {
              cancelDrop();
              closeConfirmModal();
            }}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              confirmDrop();
              closeConfirmModal();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ImageContainer;
