cc.Class({
  extends: cc.Component,

  properties: {
    selfInfoNode: {
      type: cc.Node,
      default: null
    }
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    const selfPlayerInfo = JSON.parse(cc.sys.localStorage.selfPlayer);
    const selfNameNode = this.selfInfoNode.getChildByName("selfName");
    if(selfPlayerInfo.name) {
     selfNameNode.getComponent(cc.Label).string = selfPlayerInfo.name; 
    }
  },
  
  exitBtnOnClick(evt) {
      window.closeWSConnection();
      window.clearBoundRoomIdInBothVolatileAndPersistentStorage();
      cc.sys.localStorage.removeItem('selfPlayer');
      cc.director.loadScene('login');
  },
});
