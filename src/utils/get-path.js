import path from 'path';
import { fileURLToPath } from 'url';

export default (metaURL, filePath) => path.resolve(path.dirname(fileURLToPath(metaURL)), `../../${filePath}`);
