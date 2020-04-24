import React, { Component, createContext } from "react";
import pictures from "./../../data/samplePictures";

function move(array, oldIndex, newIndex) {
  if (newIndex >= array.length) {
    newIndex = array.length - 1;
  }
  array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);
  return array;
}

function moveElement(array, index, offset) {
  const newIndex = index + offset;

  return move(array, index, newIndex);
}

const GridContext = createContext({ items: [] });

export class GridProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: pictures,
      oldItems: Object.assign([], pictures),
      moveItem: this.moveItem,
      setItems: this.setItems,
      cancelDrop: this.cancelDrop,
      confirmDrop: this.confirmDrop,
    };
  }

  render() {
    return (
      <GridContext.Provider value={this.state}>
        {this.props.children}
      </GridContext.Provider>
    );
  }

  setItems = (items) => this.setState({ items });

  moveItem = (sourceId, destinationId) => {
    const { items } = this.state;

    const sourceIndex = items.findIndex((item) => item.id === sourceId);
    const destinationIndex = items.findIndex(
      (item) => item.id === destinationId
    );

    if (sourceId === -1 || destinationId === -1) {
      return;
    }

    const offset = destinationIndex - sourceIndex;

    this.setState((state) => ({
      items: moveElement(state.items, sourceIndex, offset),
    }));
  };

  cancelDrop = () => {
    this.setState((state) => ({
      items: Object.assign([], state.oldItems),
    }));
  };

  confirmDrop = () => {
    this.setState((state) => ({
      oldItems: Object.assign([], state.items),
    }));
  };
}

export default GridContext;
