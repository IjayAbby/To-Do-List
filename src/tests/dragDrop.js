const dragDrop = (item) => {
    e.stopPropagation();
  
    if (dragElement !== item.currentTarget) {
      const previousFirstId = dragElement.dataset.id;
      const previousSecondId = dataset.id;
  
      dragElement.innerHTML = item.innerHTML;
      item.innerHTML = e.dataTransfer.getData('text/html');
  
      dragElement.children[0].dataset.id = previousFirstId;
      dragElement.children[1].dataset.id = previousFirstId;
      item.children[0].dataset.id = previousSecondId;
      item.children[1].dataset.id = previousSecondId;
    }
};

module.exports = dragDrop;