(this.webpackJsonpit_samuray_project1=this.webpackJsonpit_samuray_project1||[]).push([[3],{297:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__1cWOm",mainPhoto:"ProfileInfo_mainPhoto__1aLeo",mainAvatarWrapper:"ProfileInfo_mainAvatarWrapper__KKsb0",mainAvatar:"ProfileInfo_mainAvatar__33bKD",status:"ProfileInfo_status__3JzBl"}},298:function(t,e,s){t.exports={myPostsBlock:"MyPosts_myPostsBlock__1tdZV",posts:"MyPosts_posts__21cgG"}},299:function(t,e,s){t.exports={item:"Post_item__3NB6D"}},300:function(t,e,s){"use strict";s.r(e);var a=s(3),i=s(28),o=s(29),r=s(31),n=s(30),c=s(1),u=s.n(c),p=s(297),l=s.n(p),j=s(132),d=s(130),h=s(0),f=function(t){var e=Object(c.useState)(!1),s=Object(d.a)(e,2),a=s[0],i=s[1],o=Object(c.useState)(t.status),r=Object(d.a)(o,2),n=r[0],u=r[1];Object(c.useEffect)((function(){u(t.status)}),[t.status]);return Object(h.jsxs)("div",{className:l.a.status,children:[!a&&Object(h.jsx)("div",{children:Object(h.jsx)("span",{onDoubleClick:function(){i(!0)},children:t.status||"----------"})}),a&&Object(h.jsx)("div",{children:Object(h.jsx)("input",{onChange:function(t){u(t.currentTarget.value)},autoFocus:!0,value:n,onBlur:function(){i(!1),t.updateStatus(n)}})})]})},b=s.p+"static/media/tenor.35e35f4d.gif",m=s.p+"static/media/enotic.9b74c879.png",O=function(t){var e=t.profile,s=t.status,a=t.updateStatus,i=t.isOwner,o=t.savePhoto;if(!e)return Object(h.jsx)(j.a,{});return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:m,alt:"image"})}),Object(h.jsxs)("div",{className:l.a.descriptionBlock,children:[Object(h.jsx)("div",{className:l.a.mainAvatarWrapper,children:Object(h.jsx)("img",{src:e.photos.large||b,className:l.a.mainAvatar})}),i&&Object(h.jsx)("input",{type:"file",onChange:function(t){t.target.files.length&&o(t.target.files[0])}}),Object(h.jsx)(f,{status:s,updateStatus:a,className:l.a.status}),Object(h.jsxs)("p",{children:["My ID - ",e.userId]}),Object(h.jsxs)("p",{children:["My name - ",e.fullName]})]})]})},x=s(98),v=s(298),P=s.n(v),_=s(299),g=s.n(_),k=function(t){return Object(h.jsxs)("div",{className:g.a.item,children:[Object(h.jsx)("img",{src:"https://s1.1zoom.ru/big3/604/Raccoons_Closeup_Eyes_Snout_Glance_Whiskers_Nose_565212_2048x2048.jpg",alt:"image"}),t.message,Object(h.jsx)("div",{children:Object(h.jsxs)("span",{children:["like ",t.likeCount]})})]})},y=s(91),S=s(129),I=s(88),D=s(37),N=u.a.memo((function(t){var e=t.posts.map((function(t){return Object(h.jsx)(k,{message:t.message,id:t.id,likeCount:t.likeCount},t.id)}));return Object(h.jsxs)("div",{className:P.a.myPostsBlock,children:[Object(h.jsx)("h3",{children:"My posts"}),Object(h.jsx)(A,{onSubmit:function(e){t.addPost(e.newPostText)}}),Object(h.jsx)("div",{className:P.a.posts,children:e})]})})),w=Object(I.a)(10),A=function(t){return Object(h.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(h.jsx)("div",{children:Object(h.jsx)(y.a,{component:D.b,name:"newPostText",validate:[I.b,w],placeholder:"Post message"})}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{children:"Add post"})})]})};A=Object(S.a)({form:"ProfileAddNewPostForm"})(A);var B=N,C=s(12),M=Object(C.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(x.a)(e))}}}))(B),T=function(t){return Object(h.jsxs)("div",{children:[Object(h.jsx)(O,{profile:t.profile,status:t.status,updateStatus:t.updateStatus,savePhoto:t.savePhoto,isOwner:t.isOwner}),Object(h.jsx)(M,{store:t.store})]})},U=s(11),W=s(9),z=function(t){Object(r.a)(s,t);var e=Object(n.a)(s);function s(){return Object(i.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"refreshProfile",value:function(){var t=this.props.match.params.userID;t||(t=this.props.authorizedUserID)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e,s){this.props.match.params.userID!=t.match.params.userID&&this.refreshProfile()}},{key:"render",value:function(){return Object(h.jsx)(T,Object(a.a)(Object(a.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),s}(u.a.Component);e.default=Object(W.d)(Object(C.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserID:t.auth.userID,isAuth:t.auth.isAuth}}),{getUserProfile:x.d,getStatus:x.c,updateStatus:x.f,savePhoto:x.e}),U.f)(z)}}]);
//# sourceMappingURL=3.21c2f251.chunk.js.map