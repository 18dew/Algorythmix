var fs = require("fs");
var web3 = require('web3');
var jsonfile = require('jsonfile')
var hp = "http://"+process.argv[3]+":"+process.argv[4];
var file = process.argv[5];
web3.setProvider(new web3.providers.HttpProvider(hp));
var data = fs.readFileSync(process.argv[2],'utf8')
var compiled = web3.eth.compile.solidity(data);
//var code = compiled.
web3.eth.defaultAccount = web3.eth.coinbase;

jsonfile.writeFile(file,compiled,{spaces:2 },function (err	) {
	console.error(err)
})
console.log	(compiled.test.info.abiDefinition);
//process.exit(1);


