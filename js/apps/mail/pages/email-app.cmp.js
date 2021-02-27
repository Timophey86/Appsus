export default {
  template: `
    <div class="mail-app-main-container main-container">
      <div class="hamburger" @click="toggleActionBar">☰</div>
    <div class="mail-side-actions" :class="actionBarState">
    <!-- <table class=buttons> -->
    <!-- <tr>
        <td><router-link :to="'/mail-app/compose'"><button>compose</button></router-link> </tr>
      <tr> <td><router-link :to="'/mail-app/inbox'"><button>inbox</button></router-link> </tr> 
       <tr><td><router-link :to="'/mail-app/sent'"><button>sent</button></router-link> </tr> 
</table> -->
                <router-link :to="'/mail-app/compose'"><div class="action-link">Compose</div></router-link> 
                <router-link :to="'/mail-app/inbox'"><div class="action-link">Inbox ({{this.numOfInboxs}})</div></router-link> 
                <router-link :to="'/mail-app/sent'"><div class="action-link">Sent</div></router-link> 
            </div>
     <router-view @updateUnread="updateInbox" />
     </div>
    `,
    data () {
      return {
        numOfInboxs: 0,
        actionBarState: 'close'
      }
    },
    methods: {
      updateInbox(num) {
        this.numOfInboxs = num
      },
      toggleActionBar() {
        console.log(this.actionBarState);
        if (this.actionBarState === 'close') {
          console.log('iwas closed');
        this.actionBarState = 'open'}
        else {
          console.log('iwas opened');
          this.actionBarState = 'close'}
      }
    }
};
