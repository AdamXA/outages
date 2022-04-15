import path from 'path';
import { fileURLToPath } from 'url';
import metaUrl from './meta-url.js';

export default (filePath) => path.resolve(path.dirname(fileURLToPath(metaUrl())), `../../${filePath}`);
