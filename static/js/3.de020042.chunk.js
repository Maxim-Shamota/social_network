(this.webpackJsonpit_samuray_project1=this.webpackJsonpit_samuray_project1||[]).push([[3],{297:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__1cWOm",status:"ProfileInfo_status__3JzBl"}},298:function(t,e,s){t.exports={myPostsBlock:"MyPosts_myPostsBlock__1tdZV",posts:"MyPosts_posts__21cgG"}},299:function(t,e,s){t.exports={item:"Post_item__3NB6D"}},300:function(t,e,s){"use strict";s.r(e);var o=s(5),c=s(28),i=s(29),n=s(31),a=s(30),r=s(1),u=s.n(r),p=s(297),j=s.n(p),l=s(50),d=s(132),b=s(0),f=function(t){var e=Object(r.useState)(!1),s=Object(d.a)(e,2),o=s[0],c=s[1],i=Object(r.useState)(t.status),n=Object(d.a)(i,2),a=n[0],u=n[1];Object(r.useEffect)((function(){u(t.status)}),[t.status]);return Object(b.jsxs)("div",{className:j.a.status,children:[!o&&Object(b.jsx)("div",{children:Object(b.jsx)("span",{onDoubleClick:function(){c(!0)},children:t.status||"----------"})}),o&&Object(b.jsx)("div",{children:Object(b.jsx)("input",{onChange:function(t){u(t.currentTarget.value)},autoFocus:!0,value:a,onBlur:function(){c(!1),t.updateStatus(a)}})})]})},h=function(t){return t.profile?Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:"https://klopik.com/uploads/posts/2014-01/1390504695_all-sizes-baby-raccoon-flickr-photo-sharing-1.png",alt:"image"})}),Object(b.jsxs)("div",{className:j.a.descriptionBlock,children:[Object(b.jsx)("img",{src:t.profile.photos.large}),Object(b.jsx)(f,{status:t.status,updateStatus:t.updateStatus}),Object(b.jsxs)("p",{children:["My ID - ",t.profile.userId]}),Object(b.jsxs)("p",{children:["My name - ",t.profile.fullName]})]})]}):Object(b.jsx)(l.a,{})},O=s(99),m=s(298),x=s.n(m),_=s(299),g=s.n(_),v=function(t){return Object(b.jsxs)("div",{className:g.a.item,children:[Object(b.jsx)("img",{src:"https://s1.1zoom.ru/big3/604/Raccoons_Closeup_Eyes_Snout_Glance_Whiskers_Nose_565212_2048x2048.jpg",alt:"image"}),t.message,Object(b.jsx)("div",{children:Object(b.jsxs)("span",{children:["like ",t.likeCount]})})]})},P=s(92),k=s(131),y=s(89),S=s(37),B=u.a.memo((function(t){var e=t.posts.map((function(t){return Object(b.jsx)(v,{message:t.message,id:t.id,likeCount:t.likeCount},t.id)}));return Object(b.jsxs)("div",{className:x.a.myPostsBlock,children:[Object(b.jsx)("h3",{children:"My posts"}),Object(b.jsx)(D,{onSubmit:function(e){t.addPost(e.newPostText)}}),Object(b.jsx)("div",{className:x.a.posts,children:e})]})})),N=Object(y.a)(10),D=function(t){return Object(b.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(b.jsx)("div",{children:Object(b.jsx)(P.a,{component:S.b,name:"newPostText",validate:[y.b,N],placeholder:"Post message"})}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{children:"Add post"})})]})};D=Object(k.a)({form:"ProfileAddNewPostForm"})(D);var I=B,w=s(12),C=Object(w.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(O.a)(e))}}}))(I),M=function(t){return Object(b.jsxs)("div",{children:[Object(b.jsx)(h,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(b.jsx)(C,{store:t.store})]})},z=s(11),T=s(100),A=s(9),U=function(t){Object(n.a)(s,t);var e=Object(a.a)(s);function s(){return Object(c.a)(this,s),e.apply(this,arguments)}return Object(i.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userID;t||(t=this.props.authorizedUserID)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return Object(b.jsx)(M,Object(o.a)(Object(o.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(u.a.Component);e.default=Object(A.d)(Object(w.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserID:t.auth.userID,isAuth:t.auth.isAuth}}),{getUserProfile:O.d,getStatus:O.c,updateStatus:O.e}),z.f,T.a)(U)}}]);
//# sourceMappingURL=3.de020042.chunk.js.map