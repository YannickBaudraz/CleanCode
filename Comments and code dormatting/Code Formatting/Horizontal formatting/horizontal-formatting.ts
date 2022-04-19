const path = require('path');
const fs = require('fs');

class DiskStorage {

  storagePath: any;

  constructore(storageDirectory) {
    this.storagePath = path.join(__dirname, storageDirectory);
    this.setupStorageDirectory();
  }

  setupStorageDirectory() {
    if (!fs.existsSync(this.storagePath)) {
      this.createStorageDirectory();
    } else {
      console.log('Storage directory already exists');
    }
  }

  createStorageDirectory() {
    const storagePath = path.join(__dirname, 'temp', '2020-10', 'images');
    fs.mkdir(storagePath, this.handleOperationCompletion);
  }

  insertFileWithData(fileName, data) {
    if (!fs.existsSync(this.storagePath)) {
      console.log('The storage directory hasn\'t been created yet.');
      return;
    }

    const filePath = path.join(this.storagePath, fileName);
    fs.writeFile(filePath, data, this.handleOperationCompletion);
  }

  handleOperationCompletion(error) {
    if (error) {
      this.handleFileSystemError(error);
    } else {
      console.log('Operation completed.');
    }
  }

  handleFileSystemError(error: any) {
    console.error('Error file system: ', error);
  }
}
