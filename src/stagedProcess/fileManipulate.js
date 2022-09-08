const fs = require('fs');
const path = require('path');
const routerFile = path.resolve('src', 'stagedProcess', 'orderInStaged.json')    

const fileManipulate = {
    open: () => {
        let content = fs.readFileSync(routerFile, 'utf8');
        const orders = JSON.parse(content);
        return orders;
    },
    
    store: (db) => {
      const content = JSON.stringify(db, null, 4);
      fs.writeFileSync(routerFile, content, 'utf8');
    }
}

module.exports = fileManipulate