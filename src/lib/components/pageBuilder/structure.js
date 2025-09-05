/*
  FUNCTION
  - MOVE UP AND DOWN
  - Delete actually update array and not just changign the value to '' empty
  - Bold, Italic, Underline, Anchor, TextAlign
  - Visual
  - Move blocks out of nest
  - Copy & paste blocks 
  
  BLOCKS
  DONE === Group / Row, Heading, Paragraph, Seperator, Spacer, Quote
  - Columns
    - Column quantity change
    - Column
  - List
  - Img
  - Button
  - Code (IFRAMES, Google etc).
*/

export const blockTitles = {
  heading: 'Heading',
  group: 'Group',
  columns: 'Columns',
  column: 'Column',
  paragraph: 'Paragraph',
  blockquote: 'Blockquote',
  spacer: 'Spacer',
  seperator: 'Seperator',
  button: 'Button',
  list: 'List',
  listItem: 'List Item'
}

export const blocks = [
  { title: 'Heading', id: 'heading' },
  { title: 'Group', id: 'group' },
  { title: 'Columns', id: 'columns' },
  { title: 'Paragraph', id: 'paragraph' },
  { title: 'Blockquote', id: 'blockquote' },
  { title: 'Spacer', id: 'spacer' },
  { title: 'Seperator', id: 'seperator' },
  { title: 'Button', id: 'button' },
  { title: 'List', id: 'list' }
]

export const structure = {
  sizeTypes: [
    'px', '%', 'em', 'rem', 'vh', 'vw'
  ],
  group: [{ 
    value: 'group', 
    name: 'Group', 
    icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" focusable="false"><path d="M18 4h-7c-1.1 0-2 .9-2 2v3H6c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-3h3c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h3V13c0 1.1.9 2 2 2h2.5v3zm0-4.5H11c-.3 0-.5-.2-.5-.5v-2.5H13c.3 0 .5.2.5.5v2.5zm5-.5c0 .3-.2.5-.5.5h-3V11c0-1.1-.9-2-2-2h-2.5V6c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5v7z"></path></svg>' 
  }, { 
    value: 'row', 
    name: 'Row', 
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M4 6.5h5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4V16h5a.5.5 0 0 0 .5-.5v-7A.5.5 0 0 0 9 8H4V6.5Zm16 0h-5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h5V16h-5a.5.5 0 0 1-.5-.5v-7A.5.5 0 0 1 15 8h5V6.5Z"></path></svg>' 
  }],
  listType: [{
    name: 'Unordered List',
    value: 'unordered',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M11.1 15.8H20v-1.5h-8.9v1.5zm0-8.6v1.5H20V7.2h-8.9zM6 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>'
  }, {
    name: 'Ordered List',
    value: 'ordered',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M11.1 15.8H20v-1.5h-8.9v1.5zm0-8.6v1.5H20V7.2h-8.9zM5 6.7V10h1V5.3L3.8 6l.4 1 .8-.3zm-.4 5.7c-.3.1-.5.2-.7.3l.1 1.1c.2-.2.5-.4.8-.5.3-.1.6 0 .7.1.2.3 0 .8-.2 1.1-.5.8-.9 1.6-1.4 2.5h2.7v-1h-1c.3-.6.8-1.4.9-2.1.1-.3 0-.8-.2-1.1-.5-.6-1.3-.5-1.7-.4z"></path></svg>'
  }],
  textAlign: [{
    value: 'left', 
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M13 5.5H4V4h9v1.5Zm7 7H4V11h16v1.5Zm-7 7H4V18h9v1.5Z"></path></svg>'
  }, { 
    value: 'center', 
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M7.5 5.5h9V4h-9v1.5Zm-3.5 7h16V11H4v1.5Zm3.5 7h9V18h-9v1.5Z"></path></svg>'
  }, {
    value: 'right',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M11.111 5.5H20V4h-8.889v1.5ZM4 12.5h16V11H4v1.5Zm7.111 7H20V18h-8.889v1.5Z"></path></svg>'
  }],
  verticalAlign: [{
    value: 'top',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M9 20h6V9H9v11zM4 4v1.5h16V4H4z"></path></svg>'
  }, {
    value: 'middle',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M20 11h-5V4H9v7H4v1.5h5V20h6v-7.5h5z"></path></svg>'
  }, {
    value: 'bottom',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M15 4H9v11h6V4zM4 18.5V20h16v-1.5H4z"></path></svg>'
  }],
  justification: [{
    value: 'left', 
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M9 9v6h11V9H9zM4 20h1.5V4H4v16z"></path></svg>'
  }, { 
    value: 'center', 
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M12.5 15v5H11v-5H4V9h7V4h1.5v5h7v6h-7Z"></path></svg>'
  }, {
    value: 'right',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M4 15h11V9H4v6zM18.5 4v16H20V4h-1.5z"></path></svg>'
  }],
  heading: [{
    id: 'h1', 
    name: 'Heading 1',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M17.6 7c-.6.9-1.5 1.7-2.6 2v1h2v7h2V7h-1.4zM11 11H7V7H5v10h2v-4h4v4h2V7h-2v4z"></path></svg>'
  }, {
    id: 'h2', 
    name: 'Heading 2',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M9 11.1H5v-4H3v10h2v-4h4v4h2v-10H9v4zm8 4c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6v1.5h8v-2H17z"></path></svg>'
  }, {
    id: 'h3',
    name: 'Heading 3',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M9 11H5V7H3v10h2v-4h4v4h2V7H9v4zm11.3 1.7c-.4-.4-1-.7-1.6-.8v-.1c.6-.2 1.1-.5 1.5-.9.3-.4.5-.8.5-1.3 0-.4-.1-.8-.3-1.1-.2-.3-.5-.6-.8-.8-.4-.2-.8-.4-1.2-.5-.6-.1-1.1-.2-1.6-.2-.6 0-1.3.1-1.8.3s-1.1.5-1.6.9l1.2 1.4c.4-.2.7-.4 1.1-.6.3-.2.7-.3 1.1-.3.4 0 .8.1 1.1.3.3.2.4.5.4.8 0 .4-.2.7-.6.9-.7.3-1.5.5-2.2.4v1.6c.5 0 1 0 1.5.1.3.1.7.2 1 .3.2.1.4.2.5.4s.1.4.1.6c0 .3-.2.7-.5.8-.4.2-.9.3-1.4.3s-1-.1-1.4-.3c-.4-.2-.8-.4-1.2-.7L13 15.6c.5.4 1 .8 1.6 1 .7.3 1.5.4 2.3.4.6 0 1.1-.1 1.6-.2.4-.1.9-.2 1.3-.5.4-.2.7-.5.9-.9.2-.4.3-.8.3-1.2 0-.6-.3-1.1-.7-1.5z"></path></svg>'
  }, {
    id: 'h4',
    name: 'Heading 4',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M20 13V7h-3l-4 6v2h5v2h2v-2h1v-2h-1zm-2 0h-2.8L18 9v4zm-9-2H5V7H3v10h2v-4h4v4h2V7H9v4z"></path></svg>'
  }, { 
    id: 'h5',
    name: 'Heading 5',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M9 11H5V7H3v10h2v-4h4v4h2V7H9v4zm11.7 1.2c-.2-.3-.5-.7-.8-.9-.3-.3-.7-.5-1.1-.6-.5-.1-.9-.2-1.4-.2-.2 0-.5.1-.7.1-.2.1-.5.1-.7.2l.1-1.9h4.3V7H14l-.3 5 1 .6.5-.2.4-.1c.1-.1.3-.1.4-.1h.5c.5 0 1 .1 1.4.4.4.2.6.7.6 1.1 0 .4-.2.8-.6 1.1-.4.3-.9.4-1.4.4-.4 0-.9-.1-1.3-.3-.4-.2-.7-.4-1.1-.7 0 0-1.1 1.4-1 1.5.5.4 1 .8 1.6 1 .7.3 1.5.4 2.3.4.5 0 1-.1 1.5-.3s.9-.4 1.3-.7c.4-.3.7-.7.9-1.1s.3-.9.3-1.4-.1-1-.3-1.4z"></path></svg>'
  }, {
    id: 'h6',
    name: 'Heading 6',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M20.7 12.4c-.2-.3-.4-.6-.7-.9s-.6-.5-1-.6c-.4-.2-.8-.2-1.2-.2-.5 0-.9.1-1.3.3s-.8.5-1.2.8c0-.5 0-.9.2-1.4l.6-.9c.2-.2.5-.4.8-.5.6-.2 1.3-.2 1.9 0 .3.1.6.3.8.5 0 0 1.3-1.3 1.3-1.4-.4-.3-.9-.6-1.4-.8-.6-.2-1.3-.3-2-.3-.6 0-1.1.1-1.7.4-.5.2-1 .5-1.4.9-.4.4-.8 1-1 1.6-.3.7-.4 1.5-.4 2.3s.1 1.5.3 2.1c.2.6.6 1.1 1 1.5.4.4.9.7 1.4.9 1 .3 2 .3 3 0 .4-.1.8-.3 1.2-.6.3-.3.6-.6.8-1 .2-.5.3-.9.3-1.4s-.1-.9-.3-1.3zm-2 2.1c-.1.2-.3.4-.4.5-.1.1-.3.2-.5.2-.2.1-.4.1-.6.1-.2.1-.5 0-.7-.1-.2 0-.3-.2-.5-.3-.1-.2-.3-.4-.4-.6-.2-.3-.3-.7-.3-1 .3-.3.6-.5 1-.7.3-.1.7-.2 1-.2.4 0 .8.1 1.1.3.3.3.4.7.4 1.1 0 .2 0 .5-.1.7zM9 11H5V7H3v10h2v-4h4v4h2V7H9v4z"></path></svg>'
  }]
}

export const blockIcons = {
  heading: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M6 5V18.5911L12 13.8473L18 18.5911V5H6Z"></path></svg>',
  group: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" focusable="false"><path d="M18 4h-7c-1.1 0-2 .9-2 2v3H6c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-3h3c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h3V13c0 1.1.9 2 2 2h2.5v3zm0-4.5H11c-.3 0-.5-.2-.5-.5v-2.5H13c.3 0 .5.2.5.5v2.5zm5-.5c0 .3-.2.5-.5.5h-3V11c0-1.1-.9-2-2-2h-2.5V6c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5v7z"></path></svg>',
  paragraph: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="m9.99609 14v-.2251l.00391.0001v6.225h1.5v-14.5h2.5v14.5h1.5v-14.5h3v-1.5h-8.50391c-2.76142 0-5 2.23858-5 5 0 2.7614 2.23858 5 5 5z"></path></svg>',
  blockquote: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" focusable="false"><path d="M13 6v6h5.2v4c0 .8-.2 1.4-.5 1.7-.6.6-1.6.6-2.5.5h-.3v1.5h.5c1 0 2.3-.1 3.3-1 .6-.6 1-1.6 1-2.8V6H13zm-9 6h5.2v4c0 .8-.2 1.4-.5 1.7-.6.6-1.6.6-2.5.5h-.3v1.5h.5c1 0 2.3-.1 3.3-1 .6-.6 1-1.6 1-2.8V6H4v6z"></path></svg>',
  spacer: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" focusable="false"><path d="M7 18h4.5v1.5h-7v-7H6V17L17 6h-4.5V4.5h7v7H18V7L7 18Z"></path></svg>',
  seperator: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" focusable="false"><path d="M4.5 12.5v4H3V7h1.5v3.987h15V7H21v9.5h-1.5v-4h-15Z"></path></svg>',
  columns: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 7.5h-5v10h5v-10Zm1.5 0v10H19a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5h-2.5ZM6 7.5h2.5v10H6a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5ZM6 6h13a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"></path></svg>',
  column: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" context="list-view" aria-hidden="true" focusable="false"><path d="M19 6H6c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM6 17.5c-.3 0-.5-.2-.5-.5V8c0-.3.2-.5.5-.5h3v10H6zm13.5-.5c0 .3-.2.5-.5.5h-3v-10h3c.3 0 .5.2.5.5v9z"></path></svg>',
  button: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" focusable="false"><path d="M8 12.5h8V11H8v1.5Z M19 6.5H5a2 2 0 0 0-2 2V15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a2 2 0 0 0-2-2ZM5 8h14a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V8.5A.5.5 0 0 1 5 8Z"></path></svg>',
  list: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" context="list-view" aria-hidden="true" focusable="false"><path d="M4 4v1.5h16V4H4zm8 8.5h8V11h-8v1.5zM4 20h16v-1.5H4V20zm4-8c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"></path></svg>',
  listItem: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" context="list-view" aria-hidden="true" focusable="false"><path d="M12 11v1.5h8V11h-8zm-6-1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>'
}

export const optionsPreset = [
  [
    { 
      title: 'Group or Row', 
      id: 'groupRow', 
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M4 6.5h5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4V16h5a.5.5 0 0 0 .5-.5v-7A.5.5 0 0 0 9 8H4V6.5Zm16 0h-5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h5V16h-5a.5.5 0 0 1-.5-.5v-7A.5.5 0 0 1 15 8h5V6.5Z"></path></svg>'
    }, { 
      title: 'Column Count', 
      id: 'columnCount', 
      icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 7.5h-5v10h5v-10Zm1.5 0v10H19a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5h-2.5ZM6 7.5h2.5v10H6a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5ZM6 6h13a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"></path></svg>'
    }, {
      title: 'Content Width', 
      id: 'content-width', 
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M19 5.5H5V4h14v1.5ZM19 20H5v-1.5h14V20ZM5 9h14v6H5V9Z"></path></svg>'
    }, {
      title: 'Wide Width',
      id: 'wide-width',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M16 5.5H8V4h8v1.5ZM16 20H8v-1.5h8V20ZM5 9h14v6H5V9Z"></path></svg>'
    }, {
      title: 'Vertical Align',
      id: 'verticalAlign',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M20 11h-5V4H9v7H4v1.5h5V20h6v-7.5h5z"></path></svg>'
    }, {
      title: 'Justify',
      id: 'justify',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M12.5 15v5H11v-5H4V9h7V4h1.5v5h7v6h-7Z"></path></svg>'
    }, {
      title: 'Text Align',
      id: 'textAlign',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M13 5.5H4V4h9v1.5Zm7 7H4V11h16v1.5Zm-7 7H4V18h9v1.5Z"></path></svg>'
    }, {
      title: 'Heading',
      id: 'heading',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M17.6 7c-.6.9-1.5 1.7-2.6 2v1h2v7h2V7h-1.4zM11 11H7V7H5v10h2v-4h4v4h2V7h-2v4z"></path></svg>'
    }, {
      title: 'Height',
      id: 'height',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2.2l2.5 2.5h2.2L12 0 7.3 4.7h2.2zm0 19.6l-2.5-2.5H7.3L12 24l4.7-4.7h-2.2zm-1-10.4h2v2h-2zm0-3h2v2h-2zm0-3h2v2h-2zm0 9h2v2h-2zm0 3h2v2h-2z"/></svg>'
    }, {
      title: 'List Type',
      id: 'listType',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M11.1 15.8H20v-1.5h-8.9v1.5zm0-8.6v1.5H20V7.2h-8.9zM6 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>'
    }
  ],
  [
    {
      title: 'Padding',
      id: 'padding',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="spacing-sizes-control__icon" aria-hidden="true" focusable="false"><path d="m7.5 6h9v-1.5h-9zm0 13.5h9v-1.5h-9zm-3-3h1.5v-9h-1.5zm13.5-9v9h1.5v-9z" style="opacity: 0.25;"></path><path d="m7.5 6h9v-1.5h-9z"></path><path d="m7.5 19.5h9v-1.5h-9z"></path></svg>'
    }, {
      title: 'Margin',
      id: 'margin',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="spacing-sizes-control__icon" aria-hidden="true" focusable="false"><path d="m7.5 6h9v-1.5h-9zm0 13.5h9v-1.5h-9zm-3-3h1.5v-9h-1.5zm13.5-9v9h1.5v-9z" style="opacity: 0.25;"></path><path d="m4.5 7.5v9h1.5v-9z"></path><path d="m18 7.5v9h1.5v-9z"></path></svg>'
    }, {
      title: 'Border',
      id: 'border',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M5 11.25h14v1.5H5z"></path></svg>'
    }, {
      title: 'Border Radius',
      id: 'borderRadius',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24,24h-1.9C22.1,11.8,12.2,1.9,0,1.9V0C13.2,0,24,10.8,24,24z"/></svg>'
    }, {
      title: 'Min Width',
      id: 'minWidth',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M17.5 9V6a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v3H8V6a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v3h1.5Zm0 6.5V18a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-2.5H8V18a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-2.5h1.5ZM4 13h16v-1.5H4V13Z"></path></svg>'
    }, {
      title: 'Min Height',
      id: 'min-height',
      icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" focusable="false"><path d="M18 8H6c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm.5 6c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v4zM4 4v1.5h16V4H4zm0 16h16v-1.5H4V20z"></path></svg>'
    }, {
      title: 'Block Spacing',
      id: 'blockSpacing',
      icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" focusable="false"><path d="M6 5.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM4 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm11-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM13 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2V6zm5 8.5h-3a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zM15 13a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2v-3a2 2 0 00-2-2h-3zm-9 1.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zM4 15a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>'
    }, {
      title: 'Background',
      id: 'background',
      icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" focusable="false"><path d="M17.2 10.9c-.5-1-1.2-2.1-2.1-3.2-.6-.9-1.3-1.7-2.1-2.6L12 4l-1 1.1c-.6.9-1.3 1.7-2 2.6-.8 1.2-1.5 2.3-2 3.2-.6 1.2-1 2.2-1 3 0 3.4 2.7 6.1 6.1 6.1s6.1-2.7 6.1-6.1c0-.8-.3-1.8-1-3zm-5.1 7.6c-2.5 0-4.6-2.1-4.6-4.6 0-.3.1-1 .8-2.3.5-.9 1.1-1.9 2-3.1.7-.9 1.3-1.7 1.8-2.3.7.8 1.3 1.6 1.8 2.3.8 1.1 1.5 2.2 2 3.1.7 1.3.8 2 .8 2.3 0 2.5-2.1 4.6-4.6 4.6z"></path></svg>'
    }, {
      title: 'Classes',
      id: 'classes',
      icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" focusable="false"><path d="M20.8 10.7l-4.3-4.3-1.1 1.1 4.3 4.3c.1.1.1.3 0 .4l-4.3 4.3 1.1 1.1 4.3-4.3c.7-.8.7-1.9 0-2.6zM4.2 11.8l4.3-4.3-1-1-4.3 4.3c-.7.7-.7 1.8 0 2.5l4.3 4.3 1.1-1.1-4.3-4.3c-.2-.1-.2-.3-.1-.4z"></path></svg>'
    }
  ]
]

export const blockPresets = {
  group: {
    id: '',
    type: 'group',
    settings: {
      groupRow: 'group',
      width: { content: [0, 'px'], wide: [0, '%']},
      justification: 'left',
      background: '',
      padding: [[0, 'vh'], [0, 'px'], [0, 'vh'], [0, 'px']],
      margin: [[0, 'px'], [0, 'px'], [0, 'px'], [0, 'px']],
      minHeight: [0, 'vh'],
      blockSpacing: [0, 'px'],
      border: [['solid', 0, ''], ['solid', 0, ''], ['solid', 0, ''], ['solid', 0, '']],
      classes: ''
    },
    data: []
  },
  columns: {
    id: '',
    type: 'columns',
    settings: {
      columnCount: 1,
      verticalAlign: 'top',
      background: '',
      padding: [[0, 'vh'], [0, 'px'], [0, 'vh'], [0, 'px']],
      margin: [[0, 'px'], [0, 'px'], [0, 'px'], [0, 'px']],
      minHeight: [0, 'vh'],
      blockSpacing: [0, 'px'],
      border: [['solid', 0, ''], ['solid', 0, ''], ['solid', 0, ''], ['solid', 0, '']],
      classes: ''
    },
    data: [{
      id: '',
      type: 'column',
      settings: {
        verticalAlign: 'top',
        background: '',
        padding: [[0, 'vh'], [0, 'px'], [0, 'vh'], [0, 'px']],
        margin: [[0, 'px'], [0, 'px'], [0, 'px'], [0, 'px']],
        minHeight: [0, 'vh'],
        blockSpacing: [0, 'px'],
        border: [['solid', 0, ''], ['solid', 0, ''], ['solid', 0, ''], ['solid', 0, '']],
        classes: ''
      },
      data: []
    }]
  },
  column: {
    id: '',
    type: 'column',
    settings: {
      verticalAlign: 'top',
      background: '',
      padding: [[0, 'vh'], [0, 'px'], [0, 'vh'], [0, 'px']],
      margin: [[0, 'px'], [0, 'px'], [0, 'px'], [0, 'px']],
      minHeight: [0, 'vh'],
      blockSpacing: [0, 'px'],
      border: [['solid', 0, ''], ['solid', 0, ''], ['solid', 0, ''], ['solid', 0, '']],
      classes: ''
    },
    data: []
  },
  heading: {
    id: '',
    type: 'heading',
    settings: {
      heading: 'h1',
      textAlign: 'left',
      background: '',
      padding: [[0, 'px'], [0, 'px'], [0, 'px'], [0, 'px']],
      margin: [[0, 'px'], [0, 'px'], [0, 'px'], [0, 'px']],
      border: [['solid', 0, ''], ['solid', 0, ''], ['solid', 0, ''], ['solid', 0, '']],
      classes: ''
    },
    data: ''
  },
  paragraph: {
    id: '',
    type: 'paragraph',
    settings: {
      textAlign: 'left',
      background: '',
      padding: [[0, 'px'], [0, 'px'], [0, 'px'], [0, 'px']],
      margin: [[0, 'px'], [0, 'px'], [0, 'px'], [0, 'px']],
      border: [['solid', 0, ''], ['solid', 0, ''], ['solid', 0, ''], ['solid', 0, '']],
      classes: ''
    },
    data: ''
  },
  button: {
    id: '',
    type: 'button',
    settings: {
      textAlign: 'left',
      background: '',
      verticalAlign: 'top',
      minWidth: [0, 'vh'],
      padding: [[0, 'px'], [0, 'px'], [0, 'px'], [0, 'px']],
      margin: [[0, 'px'], [0, 'px'], [0, 'px'], [0, 'px']],
      borderRadius: [[6, 'px'], [6, 'px'], [6, 'px'], [6, 'px']],
      border: [['solid', 0, ''], ['solid', 0, ''], ['solid', 0, ''], ['solid', 0, '']],
      classes: ''
    },
    data: ''
  },
  blockquote: {
    id: '',
    type: 'blockquote',
    settings: {
      textAlign: 'left',
      background: '',
      padding: [[0, 'px'], [0, 'px'], [0, 'px'], [0, 'px']],
      margin: [[0, 'px'], [0, 'px'], [0, 'px'], [0, 'px']],
      borderRadius: [[0, 'px'], [0, 'px'], [0, 'px'], [0, 'px']],
      border: [['solid', 0, ''], ['solid', 0, ''], ['solid', 0, ''], ['solid', 0, '']],
      classes: ''
    },
    data: {
      quote: '',
      citation: ''
    }
  },
  spacer: {
    id: '',
    type: 'spacer',
    settings: {
      height: [100, 'px'],
      classes: ''
    },
    data: ''
  },
  seperator: {
    id: '',
    type: 'seperator',
    settings: {
      padding: [[0, 'px'], [0, 'px'], [0, 'px'], [0, 'px']],
      margin: [[0, 'px'], [0, 'px'], [0, 'px'], [0, 'px']],
      classes: ''
    },
    data: ''
  },
  list: {
    id: '',
    type: 'list',
    settings: {
      textAlign: 'left',
      background: '',
      padding: [[0, 'px'], [0, 'px'], [0, 'px'], [0, 'px']],
      margin: [[0, 'px'], [0, 'px'], [0, 'px'], [0, 'px']],
      border: [['solid', 0, ''], ['solid', 0, ''], ['solid', 0, ''], ['solid', 0, '']],
      listType: 'unordered',
      classes: ''
    },
    data: [{
      id: '',
      type: 'listItem',
      settings: {
        textAlign: 'left',
        background: '',
        padding: [[0, 'px'], [0, 'px'], [0, 'px'], [0, 'px']],
        margin: [[0, 'px'], [0, 'px'], [0, 'px'], [0, 'px']],
        border: [['solid', 0, ''], ['solid', 0, ''], ['solid', 0, ''], ['solid', 0, '']],
        classes: ''
      },
      data: ''
    }]
  },
  listItem: {
    id: '',
    type: 'listItem',
    settings: {
      textAlign: 'left',
      background: '',
      padding: [[0, 'px'], [0, 'px'], [0, 'px'], [0, 'px']],
      margin: [[0, 'px'], [0, 'px'], [0, 'px'], [0, 'px']],
      border: [['solid', 0, ''], ['solid', 0, ''], ['solid', 0, ''], ['solid', 0, '']],
      classes: ''
    },
    data: ''
  }

} // blockPresets