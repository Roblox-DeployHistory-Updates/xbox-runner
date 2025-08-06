const fs = require('fs');
const path = require('path');

const artifactsDir = 'artifacts';
const outputFilePath = 'site/public/clients.json';

if (!fs.existsSync(artifactsDir)) {
  console.error(`Artifacts directory "${artifactsDir}" does not exist.`);
  process.exit(1);
}

const files = fs.readdirSync(artifactsDir);
const clients = [];

for (const file of files) {
  if (!file.endsWith('.json')) continue;

  const filePath = path.join(artifactsDir, file);
  const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const versionName = file.replace('.json', '');
  const updatedOn = content.Products[0].LastModifiedDate;

  let appIconUrl = '';
  const images = content.Products[0].LocalizedProperties[0].Images;
  for (const image of images) {
    if (image.ImagePurpose === 'BoxArt') {
      if (image.Uri.startsWith('//')) appIconUrl = `https:${image.Uri}`; else appIconUrl = image.Uri;
      break;
    }
  }

  // Check for .meta file and parse xvcSize and xvcUrl
  let xvcSize = null;
  let xvcUrl = null;
  const metaFilePath = path.join(artifactsDir, `${versionName}.meta`);
  if (fs.existsSync(metaFilePath)) {
    const metaData = JSON.parse(fs.readFileSync(metaFilePath, 'utf8'));
    xvcSize = metaData.size;
    xvcUrl = metaData.url;
  }

  if (appIconUrl) {
    clients.push({ versionName, updatedOn, appIconUrl, xvcSize, xvcUrl });
  } else {
    console.warn(`No BoxArt found in ${file}`);
  }
}

fs.writeFileSync(outputFilePath, JSON.stringify(clients, null, 2));
console.log(`Generated ${outputFilePath} with ${clients.length} entries.`);
