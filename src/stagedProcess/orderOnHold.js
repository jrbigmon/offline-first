const fs = require('fs');
const path = require('path');

const routerFile = path.resolve('src', 'stagedProcess', 'orderInStaged.json')    
const open = () => {
    let content = fs.readFileSync(routerFile, 'utf8');
    const orders = JSON.parse(content);
    return orders;
}

const store = (db) => {
  const content = JSON.stringify(db, null, 4);
  fs.writeFileSync(routerFile, content, 'utf8');
}

const orderOnHold = (props) => {
    const { date, geolocation, supervisorId } = props
    
    const newOrder = { 
        date,
        geolocation,
        supervisorId
    }

    const ordersOld = open()

    if(ordersOld.length > 0) {
        ordersOld.push(newOrder)
        store(ordersOld)
    } else {
        store(newOrder)
    }
}

module.exports = orderOnHold
