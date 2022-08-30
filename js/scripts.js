function newItem() {
  //javascript
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  // console.log(text);
  if (inputValue === '') {
    alert('You must write something!');
  } else {
    $('#list').append(li);
  }

  //2. Crossing out an item from the list of items:
  function crossOut() {
    console.log('Toggling Class');
    li.toggleClass('strike');
  }
  li.on('dblclick', crossOut);

  //3(i). Adding the delete button "X":
  let crossOutButton = $('<button>\u2716</button>').attr('type', 'button');
  li.append(crossOutButton);
  crossOutButton.on('click', deleteListItem);
  //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
  function deleteListItem() {
    console.log('\'Deleting\' item');
    li.addClass('delete');
  }
  // 4. Reordering the items:
  $('#list').sortable();
}
