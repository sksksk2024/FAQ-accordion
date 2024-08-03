  document.addEventListener('DOMContentLoaded', (event) => {
   const elements = [
     { open: 'open1', close: 'close1', content: 'content1', header: 'header1' },
     { open: 'open2', close: 'close2', content: 'content2', header: 'header2' },
     { open: 'open3', close: 'close3', content: 'content3', header: 'header3' }
   ];

   elements.forEach(element => {
     const openButton = document.getElementById(element.open);
     const closeButton = document.getElementById(element.close);
     const content = document.getElementById(element.content);
     const header = document.getElementById(element.header);

     const toggleContent = () => {
       const isVisible = !openButton.classList.contains('hide');
       openButton.classList.toggle('hide', isVisible);
       //content.classList.toggle('hide', isVisible); added
       closeButton.classList.toggle('hide', !isVisible);
       content.classList.toggle('hide', !isVisible);
     };

     openButton.addEventListener('click', toggleContent);
     closeButton.addEventListener('click', toggleContent);
     header.addEventListener('click', toggleContent);
   });
 });
