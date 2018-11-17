exports.ABI = [{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"participants","outputs":[{"name":"client","type":"address"},{"name":"email","type":"string"},{"name":"fullname","type":"string"},{"name":"cellnumber","type":"string"},{"name":"password","type":"string"},{"name":"accountType","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"producers","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"orderIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"allProducers","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"allConsumers","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DELIVERY_PERIOD","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"quantitys","outputs":[{"name":"totQty","type":"uint256"},{"name":"avaiQty","type":"uint256"},{"name":"sellPrice","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"allDistributers","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"orders","outputs":[{"name":"index","type":"uint256"},{"name":"created","type":"uint256"},{"name":"producer","type":"address"},{"name":"distributor","type":"address"},{"name":"AssetIndex","type":"uint256"},{"name":"qty","type":"uint256"},{"name":"price","type":"uint256"},{"name":"state","type":"uint8"},{"name":"repState","type":"uint8"},{"name":"delivery","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"consumers","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"distributers","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"assets","outputs":[{"name":"index","type":"uint256"},{"name":"created","type":"uint256"},{"name":"harvestYear","type":"string"},{"name":"commodity","type":"uint8"},{"name":"totalAcer","type":"string"},{"name":"averageYield","type":"string"},{"name":"estimatedBasic","type":"string"},{"name":"cropInsuranceCoverage","type":"string"},{"name":"productCost","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"assetIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":false,"inputs":[{"name":"_email","type":"string"},{"name":"_fullname","type":"string"},{"name":"_cellnumber","type":"string"},{"name":"_password","type":"string"},{"name":"_type","type":"uint8"}],"name":"signup","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_harvestYear","type":"string"},{"name":"_commodity","type":"uint8"},{"name":"_totalAcer","type":"string"},{"name":"_averageYield","type":"string"},{"name":"_estimatedBasic","type":"string"},{"name":"_cropInsuranceCoverage","type":"string"},{"name":"_productCost","type":"string"},{"name":"_qty","type":"uint256"},{"name":"_sellprice","type":"string"}],"name":"PostAssets","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getAllProducers","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getAllDistributors","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getAllConsumers","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"},{"name":"_index","type":"uint256"}],"name":"getQtyData","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getAssetsIndex","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_proAddr","type":"address"},{"name":"_assetIndex","type":"uint256"},{"name":"_qty","type":"uint256"},{"name":"_price","type":"uint256"}],"name":"CreateOrder","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_orderIndex","type":"uint256"},{"name":"_state","type":"uint8"},{"name":"_repState","type":"uint8"},{"name":"_delivery","type":"uint256"}],"name":"UpdateOrder","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_producer","type":"address"},{"name":"_orderIndex","type":"uint256"}],"name":"DistributorPurchase","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_addrDistributor","type":"address"},{"name":"_assetId","type":"uint256"},{"name":"_qty","type":"uint256"}],"name":"ConsumerPurchase","outputs":[],"payable":true,"stateMutability":"payable","type":"function"}];