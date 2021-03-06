const JSZip = require('jszip');

(async () => {
  const response = await fetch('https://tabris.com/wp-content/uploads/2020/07/zipfile.zip')
  const archive = await response.arrayBuffer();
  const result = await JSZip.loadAsync(archive);
  result.filter((path, entry) => !entry.dir)
    .forEach(async file => {
      const contents = await file.async('text');
      console.log('Path:\n', file.name, '\nContents:\n', contents, '\n')
    });
})().catch(error => console.error(error));
