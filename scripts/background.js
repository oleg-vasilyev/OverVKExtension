const hideAllFriendsScript = `
  const embeddedCode = "(()=>{const adder=(user,list,add,st)=>{const o=user;o[6]=parseInt(o[6]);add?(o[6]&1<<list||(o[6]+=1<<list)):(o[6]&1<<list&&(o[6]-=1<<list));setTimeout(()=>{ajax.post('al_friends.php',{act:'save_cats',uid:user[0],cats:o[6],hash:cur.userHash},{onDone:function(){const el=document.querySelector('.left_label.inl_bl');el.innerHTML=el.innerHTML>=1?(el.innerHTML-0)+1:1}})},st||0)}; const itr=(list,add)=>{const fn=(start)=>{for(let i=start||0,len=cur.friendsList.all.length;i<len;i++){adder(cur.friendsList.all[i],list,add,i*50)}};fn();};itr(30,!0)})()";
  const script = document.createElement('script');
  const code = document.createTextNode('(function() {' + embeddedCode + '})();');
  script.appendChild(code);
  (document.body || document.head).appendChild(script);
`;

const addTimerWithSignatureScript = `
  document.body.querySelector("#post_field").dispatchEvent(new KeyboardEvent('keydown', {keyCode: 0x20})); 
  document
      .querySelector('div.post_settings')
      .innerHTML += '<div class="eltt post_settings_tooltip eltt_arrow_size_normal eltt_align_center eltt_top" id="" style="display: none; left: -72.3812px; top: -73px;"><div class="eltt_arrow_back _eltt_arrow_back" style="margin-left: 71px;"><div class="eltt_arrow"></div></div><div class="eltt_content _eltt_content"><div class="checkbox" id="mute_notifications" onclick="checkbox(this)" role="checkbox" aria-checked="false" tabindex="0">Disable notifications</div><div class="checkbox on" id="signed" onclick="checkbox(this); Wall.postChanged(true);" role="checkbox" aria-checked="true" tabindex="0">Add signature</div></div></div>';
  document.body.querySelector("a.ms_item.ms_item_postpone._type_postpone").click();
  document.body.querySelector(".post_settings").style = 'display: none';
`;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ HIDE_ALL_FRIENDS: hideAllFriendsScript });
  chrome.storage.sync.set({ ADD_TIMER_WITH_SIGNATURE: addTimerWithSignatureScript });
});

