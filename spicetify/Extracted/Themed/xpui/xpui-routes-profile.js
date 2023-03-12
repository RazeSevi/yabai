"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[2499],{52171:(e,a,t)=>{t.d(a,{B:()=>w});var i=t(25007),r=t(38205),s=t(45462),o=t(86364),l=t(90538),n=t(20858),d=t(41299),u=t(57559),c=t(43181),m=t(7586),g=t(14643),p=t(59496),h=t(88778),f=t(14368),v=t(7370);const x="z4popIk32AsyDKlV1o1v",b="_xxuonqkZEQ7pCffxlUD";var y=t(4637);const I=(0,p.memo)((function(e){const{src:a,description:t,...i}=e,[r,s]=(0,p.useState)("inherit");return(0,p.useEffect)((()=>{a&&async function(e){const{colorRaw:a}=await(0,v.extractColors)(e),{h:t,s:i,l:r}=a.hsl,o=`hsl(${360*t}, ${100*i}%, ${Math.min(100*r,30)}%)`;s(o)}(a)}),[a]),a?(0,y.jsx)("div",{className:x,style:{backgroundColor:r},"data-testid":"episode-fallback-image-container",children:(0,y.jsx)("div",{className:b,children:(0,y.jsx)(h.D,{as:"p",variant:"canon",children:t})})}):(0,y.jsx)(f.J,{...i,iconSize:64})}));var j=t(21630),k=t(38975);const N="x1FErCk9Xh9VumpOLyfm",_="heeHk6hz8sAXLIU6P6an",P="Hhfi1xnYwoHoMP2rcltS",w=({description:e,isExplicit:a,images:t,name:p,uri:h,durationMilliseconds:f,releaseDate:v,resume_point:x,showImages:b,sharingInfo:w,is19PlusOnly:S,isHero:C,onClick:R,testId:O,index:D,requestId:U,color:E})=>{let A;const T=v?new Date(v):void 0,M=T&&!isNaN(T.getTime())&&!isNaN(f),F=(0,u.X)(b,{desiredSize:48}),L=(0,n.G3)(h,T?.toISOString(),x?.resume_position_ms,x?.fully_played);return A=C?(0,y.jsx)(j.Z,{index:D,onClick:R,headerText:p,featureIdentifier:"episode",uri:h,isPlayable:!1,isDownloadable:!0,hasNewEpisodeIndicator:L,renderCardImage:()=>(0,y.jsx)(g.x,{isHero:!0,images:t,color:E,FallbackComponent:a=>(0,y.jsx)(I,{...a,description:e,src:F&&F.url}),children:F&&(0,y.jsx)(l.E,{loading:"lazy",src:F.url,className:N,radius:4})}),renderSubHeaderContent:()=>(0,y.jsxs)(y.Fragment,{children:[a&&!S&&(0,y.jsx)(s.N,{className:_}),S&&(0,y.jsx)(o.X,{size:16,className:_}),M&&(0,y.jsxs)("span",{className:P,children:[T&&(0,d.rL)(T)," ·"," ",i.ag.get("episode.length",Math.ceil(f/6e4))]}),(0,y.jsx)(k.k,{children:i.ag.get("card.tag.episode")})]}),testId:O,requestId:U}):(0,y.jsx)(m.C,{index:D,onClick:R,headerText:p,featureIdentifier:"episode",uri:h,isPlayable:!1,isDownloadable:!0,hasNewEpisodeIndicator:L,renderCardImage:()=>(0,y.jsx)(g.x,{images:t,color:E,FallbackComponent:a=>(0,y.jsx)(I,{...a,description:e,src:F&&F.url}),children:F&&(0,y.jsx)(l.E,{loading:"lazy",src:F.url,className:N,radius:4,testid:"episode-card-show-image"})}),renderSubHeaderContent:()=>(0,y.jsxs)(y.Fragment,{children:[a&&!S&&(0,y.jsx)(s.N,{className:_}),S&&(0,y.jsx)(o.X,{size:16,className:_}),M&&(0,y.jsxs)("span",{className:P,children:[T&&(0,d.rL)(T)," ·"," ",i.ag.get("episode.length",Math.ceil(f/6e4))]})]}),testId:O,requestId:U}),(0,y.jsx)(r._,{menu:(0,y.jsx)(c.k,{uri:h,sharingInfo:w}),children:A})}},1510:(e,a,t)=>{t.d(a,{P:()=>g});var i=t(59496),r=t(83972),s=t(25007),o=t(38205),l=t(11622),n=t(7586),d=t(14643),u=t(21630),c=t(38975),m=t(4637);const g=i.memo((function(e){const{images:a,name:t,uri:g,onClick:p,isHero:h,testId:f,index:v,requestId:x,color:b}=e;let y;const I=(0,i.useCallback)((()=>(0,m.jsx)(d.x,{isCircular:!0,isHero:h,images:a,color:b,FallbackComponent:e=>(0,m.jsx)(r.a,{iconSize:64,...e})})),[b,a,h]),j=(0,i.useCallback)((()=>h?(0,m.jsx)(c.k,{children:s.ag.get("card.tag.profile")}):s.ag.get("card.tag.profile")),[h]);return y=h?(0,m.jsx)(u.Z,{index:v,onClick:p,headerText:t,featureIdentifier:"profile",uri:g,isPlayable:!1,renderCardImage:I,renderSubHeaderContent:j,testId:f,requestId:x}):(0,m.jsx)(n.C,{index:v,onClick:p,headerText:t,featureIdentifier:"profile",uri:g,isPlayable:!1,renderCardImage:I,renderSubHeaderContent:j,testId:f,requestId:x}),(0,m.jsx)(o._,{menu:(0,m.jsx)(l.I,{uri:g}),children:y})}))},94039:(e,a,t)=>{t.d(a,{T:()=>c});var i=t(72899),r=t(48e3),s=t(24400),o=t(91393),l=t(42424);const n="profile-editImage-imageContainer",d="profile-editImage-editImageButtonContainer";var u=t(4637);const c=function({onClick:e,name:a,images:t,canEdit:c,placeholderType:m,shape:g=o.Kc.SQUARE,dragUri:p=""}){const[h,f]=(0,r.RH)(t),v=(0,s.VO)(h,f)===s.KO.loaded,x=(0,i.O1)([p],a);return(0,u.jsxs)("div",{className:n,"data-testid":`${m}-image`,draggable:!!p,onDragStart:x,children:[(0,u.jsx)(o.Oe,{loading:"eager",name:a,images:t,placeholderType:m,shape:g}),c&&(0,u.jsx)("div",{className:d,children:(0,u.jsx)(l.F,{overlay:v,onClick:e,rounded:g===o.Kc.CIRCLE})})]})}},42388:(e,a,t)=>{t.d(a,{I:()=>s});var i=t(59496),r=t(99059);function s(e,a){const t=(0,r.z)();(0,i.useEffect)((()=>{const i=t.getEvents(),r=e=>a(e);return i.addListener(e,r),()=>{i.removeListener(e,r)}}),[e,t,a])}},18618:(e,a,t)=>{t.r(a),t.d(a,{default:()=>Ba});var i=t(59496),r=t(86695),s=t(59044),o=t(11116),l=t(61509),n=t(20061),d=t(31716),u=t(80891),c=t(3142),m=t(68737),g=t(28921),p=t(52171),h=t(77899),f=t(4637);const v={totalCount:0,nextOffset:0,items:[]};const x=({uri:e})=>{const{data:a}=(0,u.J)(c.n5.getProfile,[{uri:e,playlists:0,artists:0,episodes:0}]),t=function(e){const a=(0,m.zZ)(),[t,r]=(0,i.useState)(v),s=(0,i.useCallback)((async()=>{if(!e)return;const t=await a.getContents(e,{offset:0,limit:50});r(t)}),[e,a]);return(0,i.useEffect)((()=>{s()}),[s]),t}(a?.user_created_show?.uri);return(0,f.jsx)(h.P,{className:"contentSpacing",total:t.items.length,title:g.ag.get("episodes"),showAll:!0,children:t.items.map(((e,a)=>e&&(0,f.jsx)(p.B,{index:a,uri:e.uri,name:e.name,images:e.coverArt,showImages:[],durationMilliseconds:e.duration.milliseconds,releaseDate:e.releaseDate?.isoString,resume_point:null,description:e.description,isExplicit:!1,is19PlusOnly:!1,sharingInfo:e.sharingInfo},e.uri)))})},b=({uri:e})=>(0,f.jsxs)("section",{children:[(0,f.jsx)(d.$,{children:"Podcasts from the user"}),(0,f.jsx)(x,{uri:e})]});var y=t(84875),I=t.n(y),j=t(25007),k=t(1510),N=t(4763);const _="umiKMm5NVr5UeBJCHS6U",P="jzhwZKbfx4vrC_MYd_7c",w="MWWPQQjbjRfoGdPD8D68",S="rMpf7sfaPDcj387_52fA",C="kWCnF32FrVtGHmTy8QeV",R="uJxNEI2k7x8UCDdMKELt",O="wDIZ2yYKjfGI68I4cZ98",D=e=>{const{uri:a}=e,{data:t,loading:i,error:r}=(0,u.J)(c.n5.getFollowers,[a]),s=t?.profiles;return i?(0,f.jsx)(N.h,{hasError:null!==r,errorMessage:j.ag.get("error.not_found.title.page")}):(0,f.jsx)(h.P,{className:I()("contentSpacing",w),title:j.ag.get("followers"),total:s?.length,showAll:!0,children:s?.map(((e,a)=>(0,f.jsx)(k.P,{index:a,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))})},U=e=>{const{uri:a}=e,{data:t,loading:i,error:r}=(0,u.J)(c.n5.getFollowing,[a]),s=t?.profiles;return i?(0,f.jsx)(N.h,{hasError:null!==r,errorMessage:j.ag.get("error.not_found.title.page")}):(0,f.jsx)(h.P,{className:I()("contentSpacing",w),title:j.ag.get("following"),total:s?.length,showAll:!0,children:s?.map(((e,a)=>(0,f.jsx)(k.P,{index:a,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))})};var E=t(77646),A=t(83600),T=t(31896),M=t(43543),F=t(50116),L=t(60926),H=t(73327),W=t(11622),J=t(94039),K=t(91393),B=t(24142),V=t(68415),z=t(21855),Q=t(86950),G=t(88778),q=t(46455),$=t(95214),X=t(87155),Z=t(42662),Y=t(65363),ee=t(44802),ae=t(92645),te=t(48e3),ie=t(24400);const re="F8_EX1AeKxXNSeh1qiHq",se="valcBm4lLe9qFBcg0sFY",oe="tAIzXn8C9KriGwGuBfWg",le="PsrXxenHUFXYM1ub1xWw",ne="U_VWfeeLWnDPhUTxCmrQ",de=function({onClickEdit:e,onClickRemove:a,name:t,images:i}){const[r,s]=(0,te.RH)(i),o=(0,ie.VO)(r,s)===ie.KO.loaded;return(0,f.jsxs)("div",{className:re,children:[(0,f.jsx)(K.Oe,{loading:"eager",name:t,images:i,placeholderType:"user",shape:K.Kc.CIRCLE}),(0,f.jsxs)("div",{className:I()(se,{[le]:o}),children:[(0,f.jsx)("button",{className:oe,"aria-haspopup":"true",onClick:e,type:"button",children:(0,f.jsx)(G.D,{variant:"ballad",children:j.ag.get("user.edit-details.choose-photo")})}),(0,f.jsx)("div",{className:I()(ne,"icon"),children:(0,f.jsx)(ae.y,{iconSize:48,"aria-hidden":!0})}),(0,f.jsx)("button",{className:oe,onClick:a,type:"button",children:(0,f.jsx)(G.D,{variant:"ballad",children:j.ag.get("user.edit-details.remove-photo")})})]})]})};var ue=t(30705),ce=t(68559),me=(t(5630),t(59699),t(91564),t(10817),t(92228));const ge={paths:""},pe={encode(e,a=me.Writer.create()){for(const t of e.paths)a.uint32(10).string(t);return a},decode(e,a){const t=e instanceof Uint8Array?new me.Reader(e):e;let i=void 0===a?t.len:t.pos+a;const r={...ge};for(r.paths=[];t.pos<i;){const e=t.uint32();if(e>>>3==1)r.paths.push(t.string());else t.skipType(7&e)}return r},fromJSON(e){const a={...ge};if(a.paths=[],void 0!==e.paths&&null!==e.paths)for(const t of e.paths)a.paths.push(String(t));return a},fromPartial(e){const a={...ge};if(a.paths=[],void 0!==e.paths&&null!==e.paths)for(const t of e.paths)a.paths.push(t);return a},toJSON(e){const a={};return e.paths?a.paths=e.paths.map((e=>e)):a.paths=[],a}};t(74461);var he=t(29168),fe=t(55872).lW;const ve={value:0},xe={value:!1},be={value:""};const ye={encode:(e,a=me.Writer.create())=>(a.uint32(8).int32(e.value),a),decode(e,a){const t=e instanceof Uint8Array?new me.Reader(e):e;let i=void 0===a?t.len:t.pos+a;const r={...ve};for(;t.pos<i;){const e=t.uint32();if(e>>>3==1)r.value=t.int32();else t.skipType(7&e)}return r},fromJSON(e){const a={...ve};return void 0!==e.value&&null!==e.value?a.value=Number(e.value):a.value=0,a},fromPartial(e){const a={...ve};return void 0!==e.value&&null!==e.value?a.value=e.value:a.value=0,a},toJSON(e){const a={};return void 0!==e.value&&(a.value=e.value),a}},Ie={encode:(e,a=me.Writer.create())=>(a.uint32(8).bool(e.value),a),decode(e,a){const t=e instanceof Uint8Array?new me.Reader(e):e;let i=void 0===a?t.len:t.pos+a;const r={...xe};for(;t.pos<i;){const e=t.uint32();if(e>>>3==1)r.value=t.bool();else t.skipType(7&e)}return r},fromJSON(e){const a={...xe};return void 0!==e.value&&null!==e.value?a.value=Boolean(e.value):a.value=!1,a},fromPartial(e){const a={...xe};return void 0!==e.value&&null!==e.value?a.value=e.value:a.value=!1,a},toJSON(e){const a={};return void 0!==e.value&&(a.value=e.value),a}},je={encode:(e,a=me.Writer.create())=>(a.uint32(10).string(e.value),a),decode(e,a){const t=e instanceof Uint8Array?new me.Reader(e):e;let i=void 0===a?t.len:t.pos+a;const r={...be};for(;t.pos<i;){const e=t.uint32();if(e>>>3==1)r.value=t.string();else t.skipType(7&e)}return r},fromJSON(e){const a={...be};return void 0!==e.value&&null!==e.value?a.value=String(e.value):a.value="",a},fromPartial(e){const a={...be};return void 0!==e.value&&null!==e.value?a.value=e.value:a.value="",a},toJSON(e){const a={};return void 0!==e.value&&(a.value=e.value),a}};me.util.Long!==he&&(me.util.Long=he,(0,me.configure)());const ke=globalThis;ke.atob,ke.btoa;const Ne={maxWidth:0,maxHeight:0,url:""},_e={},Pe={},we={encode:(e,a=me.Writer.create())=>(a.uint32(8).int32(e.maxWidth),a.uint32(16).int32(e.maxHeight),a.uint32(26).string(e.url),a),decode(e,a){const t=e instanceof Uint8Array?new me.Reader(e):e;let i=void 0===a?t.len:t.pos+a;const r={...Ne};for(;t.pos<i;){const e=t.uint32();switch(e>>>3){case 1:r.maxWidth=t.int32();break;case 2:r.maxHeight=t.int32();break;case 3:r.url=t.string();break;default:t.skipType(7&e)}}return r},fromJSON(e){const a={...Ne};return void 0!==e.maxWidth&&null!==e.maxWidth?a.maxWidth=Number(e.maxWidth):a.maxWidth=0,void 0!==e.maxHeight&&null!==e.maxHeight?a.maxHeight=Number(e.maxHeight):a.maxHeight=0,void 0!==e.url&&null!==e.url?a.url=String(e.url):a.url="",a},fromPartial(e){const a={...Ne};return void 0!==e.maxWidth&&null!==e.maxWidth?a.maxWidth=e.maxWidth:a.maxWidth=0,void 0!==e.maxHeight&&null!==e.maxHeight?a.maxHeight=e.maxHeight:a.maxHeight=0,void 0!==e.url&&null!==e.url?a.url=e.url:a.url="",a},toJSON(e){const a={};return void 0!==e.maxWidth&&(a.maxWidth=e.maxWidth),void 0!==e.maxHeight&&(a.maxHeight=e.maxHeight),void 0!==e.url&&(a.url=e.url),a}},Se={encode(e,a=me.Writer.create()){void 0!==e.username&&void 0!==e.username&&je.encode({value:e.username},a.uint32(10).fork()).ldelim(),void 0!==e.name&&void 0!==e.name&&je.encode({value:e.name},a.uint32(18).fork()).ldelim();for(const t of e.images)we.encode(t,a.uint32(26).fork()).ldelim();return void 0!==e.verified&&void 0!==e.verified&&Ie.encode({value:e.verified},a.uint32(34).fork()).ldelim(),void 0!==e.editProfileDisabled&&void 0!==e.editProfileDisabled&&Ie.encode({value:e.editProfileDisabled},a.uint32(42).fork()).ldelim(),void 0!==e.reportAbuseDisabled&&void 0!==e.reportAbuseDisabled&&Ie.encode({value:e.reportAbuseDisabled},a.uint32(50).fork()).ldelim(),void 0!==e.abuseReportedName&&void 0!==e.abuseReportedName&&Ie.encode({value:e.abuseReportedName},a.uint32(58).fork()).ldelim(),void 0!==e.abuseReportedImage&&void 0!==e.abuseReportedImage&&Ie.encode({value:e.abuseReportedImage},a.uint32(66).fork()).ldelim(),void 0!==e.hasSpotifyName&&void 0!==e.hasSpotifyName&&Ie.encode({value:e.hasSpotifyName},a.uint32(74).fork()).ldelim(),void 0!==e.hasSpotifyImage&&void 0!==e.hasSpotifyImage&&Ie.encode({value:e.hasSpotifyImage},a.uint32(82).fork()).ldelim(),void 0!==e.color&&void 0!==e.color&&ye.encode({value:e.color},a.uint32(90).fork()).ldelim(),a},decode(e,a){const t=e instanceof Uint8Array?new me.Reader(e):e;let i=void 0===a?t.len:t.pos+a;const r={..._e};for(r.images=[];t.pos<i;){const e=t.uint32();switch(e>>>3){case 1:r.username=je.decode(t,t.uint32()).value;break;case 2:r.name=je.decode(t,t.uint32()).value;break;case 3:r.images.push(we.decode(t,t.uint32()));break;case 4:r.verified=Ie.decode(t,t.uint32()).value;break;case 5:r.editProfileDisabled=Ie.decode(t,t.uint32()).value;break;case 6:r.reportAbuseDisabled=Ie.decode(t,t.uint32()).value;break;case 7:r.abuseReportedName=Ie.decode(t,t.uint32()).value;break;case 8:r.abuseReportedImage=Ie.decode(t,t.uint32()).value;break;case 9:r.hasSpotifyName=Ie.decode(t,t.uint32()).value;break;case 10:r.hasSpotifyImage=Ie.decode(t,t.uint32()).value;break;case 11:r.color=ye.decode(t,t.uint32()).value;break;default:t.skipType(7&e)}}return r},fromJSON(e){const a={..._e};if(a.images=[],void 0!==e.username&&null!==e.username?a.username=String(e.username):a.username=void 0,void 0!==e.name&&null!==e.name?a.name=String(e.name):a.name=void 0,void 0!==e.images&&null!==e.images)for(const t of e.images)a.images.push(we.fromJSON(t));return void 0!==e.verified&&null!==e.verified?a.verified=Boolean(e.verified):a.verified=void 0,void 0!==e.editProfileDisabled&&null!==e.editProfileDisabled?a.editProfileDisabled=Boolean(e.editProfileDisabled):a.editProfileDisabled=void 0,void 0!==e.reportAbuseDisabled&&null!==e.reportAbuseDisabled?a.reportAbuseDisabled=Boolean(e.reportAbuseDisabled):a.reportAbuseDisabled=void 0,void 0!==e.abuseReportedName&&null!==e.abuseReportedName?a.abuseReportedName=Boolean(e.abuseReportedName):a.abuseReportedName=void 0,void 0!==e.abuseReportedImage&&null!==e.abuseReportedImage?a.abuseReportedImage=Boolean(e.abuseReportedImage):a.abuseReportedImage=void 0,void 0!==e.hasSpotifyName&&null!==e.hasSpotifyName?a.hasSpotifyName=Boolean(e.hasSpotifyName):a.hasSpotifyName=void 0,void 0!==e.hasSpotifyImage&&null!==e.hasSpotifyImage?a.hasSpotifyImage=Boolean(e.hasSpotifyImage):a.hasSpotifyImage=void 0,void 0!==e.color&&null!==e.color?a.color=Number(e.color):a.color=void 0,a},fromPartial(e){const a={..._e};if(a.images=[],void 0!==e.username&&null!==e.username?a.username=e.username:a.username=void 0,void 0!==e.name&&null!==e.name?a.name=e.name:a.name=void 0,void 0!==e.images&&null!==e.images)for(const t of e.images)a.images.push(we.fromPartial(t));return void 0!==e.verified&&null!==e.verified?a.verified=e.verified:a.verified=void 0,void 0!==e.editProfileDisabled&&null!==e.editProfileDisabled?a.editProfileDisabled=e.editProfileDisabled:a.editProfileDisabled=void 0,void 0!==e.reportAbuseDisabled&&null!==e.reportAbuseDisabled?a.reportAbuseDisabled=e.reportAbuseDisabled:a.reportAbuseDisabled=void 0,void 0!==e.abuseReportedName&&null!==e.abuseReportedName?a.abuseReportedName=e.abuseReportedName:a.abuseReportedName=void 0,void 0!==e.abuseReportedImage&&null!==e.abuseReportedImage?a.abuseReportedImage=e.abuseReportedImage:a.abuseReportedImage=void 0,void 0!==e.hasSpotifyName&&null!==e.hasSpotifyName?a.hasSpotifyName=e.hasSpotifyName:a.hasSpotifyName=void 0,void 0!==e.hasSpotifyImage&&null!==e.hasSpotifyImage?a.hasSpotifyImage=e.hasSpotifyImage:a.hasSpotifyImage=void 0,void 0!==e.color&&null!==e.color?a.color=e.color:a.color=void 0,a},toJSON(e){const a={};return void 0!==e.username&&(a.username=e.username),void 0!==e.name&&(a.name=e.name),e.images?a.images=e.images.map((e=>e?we.toJSON(e):void 0)):a.images=[],void 0!==e.verified&&(a.verified=e.verified),void 0!==e.editProfileDisabled&&(a.editProfileDisabled=e.editProfileDisabled),void 0!==e.reportAbuseDisabled&&(a.reportAbuseDisabled=e.reportAbuseDisabled),void 0!==e.abuseReportedName&&(a.abuseReportedName=e.abuseReportedName),void 0!==e.abuseReportedImage&&(a.abuseReportedImage=e.abuseReportedImage),void 0!==e.hasSpotifyName&&(a.hasSpotifyName=e.hasSpotifyName),void 0!==e.hasSpotifyImage&&(a.hasSpotifyImage=e.hasSpotifyImage),void 0!==e.color&&(a.color=e.color),a}},Ce={encode:(e,a=me.Writer.create())=>(void 0!==e.mask&&void 0!==e.mask&&pe.encode(e.mask,a.uint32(10).fork()).ldelim(),void 0!==e.userProfile&&void 0!==e.userProfile&&Se.encode(e.userProfile,a.uint32(18).fork()).ldelim(),a),decode(e,a){const t=e instanceof Uint8Array?new me.Reader(e):e;let i=void 0===a?t.len:t.pos+a;const r={...Pe};for(;t.pos<i;){const e=t.uint32();switch(e>>>3){case 1:r.mask=pe.decode(t,t.uint32());break;case 2:r.userProfile=Se.decode(t,t.uint32());break;default:t.skipType(7&e)}}return r},fromJSON(e){const a={...Pe};return void 0!==e.mask&&null!==e.mask?a.mask=pe.fromJSON(e.mask):a.mask=void 0,void 0!==e.userProfile&&null!==e.userProfile?a.userProfile=Se.fromJSON(e.userProfile):a.userProfile=void 0,a},fromPartial(e){const a={...Pe};return void 0!==e.mask&&null!==e.mask?a.mask=pe.fromPartial(e.mask):a.mask=void 0,void 0!==e.userProfile&&null!==e.userProfile?a.userProfile=Se.fromPartial(e.userProfile):a.userProfile=void 0,a},toJSON(e){const a={};return void 0!==e.mask&&(a.mask=e.mask?pe.toJSON(e.mask):void 0),void 0!==e.userProfile&&(a.userProfile=e.userProfile?Se.toJSON(e.userProfile):void 0),a}},Re=`${ue.XA}/identity`;async function Oe(e,a,{name:t,imageUploadToken:i}){void 0!==t&&await async function(e,a,t){const i=Ce.encode(Ce.fromPartial({mask:{paths:["name"]},userProfile:null!==t?{name:t}:{}}));await e.build().withHost(Re).withMethod("POST").withPath(`/v3/user/username/${encodeURIComponent((0,ce.C)(a))}`).withEndpointIdentifier("/v3/user/username/{username}").withBody(i.finish()).withoutMarket().send()}(e,a,t),void 0!==i&&(null!==i?await async function(e,a,t){await e.build().withHost(Re).withMethod("POST").withPath(`/v3/profile-image/${encodeURIComponent((0,ce.C)(a))}/${t}`).withEndpointIdentifier("/v3/profile-image/{username}/{uploadToken}").withoutMarket().send()}(e,a,i):await async function(e,a){await e.build().withHost(Re).withMethod("DELETE").withPath(`/v3/profile-image/${encodeURIComponent((0,ce.C)(a))}`).withEndpointIdentifier("/v3/profile-image/{username}").withoutMarket().send()}(e,a))}var De=t(69647);const Ue={type:"error",get message(){return j.ag.get("user.edit-details.error.file-size-exceeded",10)}},Ee={type:"error",get message(){return j.ag.get("user.edit-details.error.too-small",300,300)}},Ae={type:"error",get message(){return j.ag.get("user.edit-details.error.missing-name")}},Te={type:"error",get message(){return j.ag.get("user.edit-details.error.failed-to-save")}},Me={type:"error",get message(){return j.ag.get("user.edit-details.error.file-upload-failed")}};function Fe(e){return{type:"setLoading",loading:e}}function Le(e){return{type:"setMessage",message:e}}function He(e,a){switch(a.type){case"setName":return{...e,name:a.name};case"setMessage":return{...e,message:a.message,loading:!1};case"setLoading":return{...e,loading:a.loading,message:null};case"setImageData":return{...e,imageData:a.data,removeImage:!1};case"setImageToken":return{...e,imageToken:a.token,removeImage:!1};case"removeImage":return{...e,imageToken:void 0,imageData:void 0,image:void 0,removeImage:!0};default:return e}}const We="XwNfIrI6_hCa_9_T2cQB",Je="so0bdX3oZH6YW5_nGxIR",Ke="aM3plU4zzDqjWlvUHGYb",Be="zHeo4VUxytwm6Ptr0QyA",Ve="vAeyAmeLkDEDKdL9Hou0",ze="dnmzO6yYKkxUV8jl7O1Z",Qe="oN9QVvJKEtdTH3HGfCu1",Ge="uj7hczcCH1dZpse8Kfmi",qe="wvLAEV5wF5C5ej6rvimT",$e="gAQfzAUp1FuSXODeZJfP",Xe="dMhJaxli87_22jb_3d9x",Ze="MDb7QhAtHeyM4gKj8j8t",Ye="zGbjZMZ1DTx4futEbN9l",ea=i.memo((function({uri:e,name:a,image:t,onClose:r,shouldOpenImagePicker:s}){const[o,l]=(0,Y.Hs)(),[n,d]=function({name:e,image:a}){return(0,i.useReducer)(He,{loading:!1,message:null,name:e,image:a})}({name:a,image:t}),u=(0,i.useMemo)((()=>{const e=n.imageData||n.image;return e?[{url:e,width:300,height:300}]:[]}),[n.image,n.imageData]);(0,i.useEffect)((()=>{s&&l()}),[l,s]);const c=(0,i.useCallback)((e=>{e===Y.Hy.FILE_TOO_BIG?d(Le(Ue)):e===Y.Hy.IMAGE_TOO_SMALL&&d(Le(Ee))}),[d]),m=(0,i.useCallback)((()=>{d({type:"removeImage"})}),[d]),g=(0,i.useCallback)((async a=>{a.preventDefault();if(0!==n.name.trim().length){d(Fe(!0));try{const a=n.removeImage?null:n.imageToken;await async function(e,{name:a,imageUploadToken:t}){await Oe(De.b.getInstance(),e,{name:a,imageUploadToken:t})}(e,{name:n.name,imageUploadToken:a}),r({name:n.name,image:n.imageData||n.image})}catch(e){d(Le(Te))}}else d(Le(Ae))}),[d,r,n.image,n.imageData,n.imageToken,n.name,n.removeImage,e]);return(0,f.jsx)(Z.Z,{isOpen:!0,contentLabel:j.ag.get("user.edit-details.title"),onRequestClose:()=>r(),children:(0,f.jsxs)("div",{className:We,children:[(0,f.jsxs)("div",{className:Ke,children:[(0,f.jsx)(G.D,{as:"h1",variant:"canon",children:j.ag.get("user.edit-details.title")}),(0,f.jsx)("button",{className:Be,onClick:()=>r(),"aria-label":j.ag.get("close"),children:(0,f.jsx)(q.k,{iconSize:16})})]}),n.message&&(0,f.jsx)(ee.X,{isErrorMessage:"error"===n.message.type,message:n.message.message}),(0,f.jsxs)("form",{className:Je,onSubmit:g,children:[(0,f.jsx)(Y.uL,{isOpen:o,minImageWidth:300,minImageHeight:300,maxFileSizeMB:10,onChange:async function(e){if(!e)return;const{imageFile:a,imageDataUrl:t}=e;if(d(Le(null)),d({type:"setImageData",data:t}),a)try{d(Fe(!0));const e=await async function(e){const a=await De.b.getInstance().build().withEndpointIdentifier("image-upload/v4/user-profile").withHost("https://image-upload.spotify.com/v4").withMethod("POST").withPath("/user-profile").withBody(e).withoutGlobalHeaders().withHeaders([{key:"Content-Type",value:"image/jpeg"}]).withoutMarket().send();if(!a.body)throw new Error("No upload token recieved");return a.body.uploadToken}(a);d({type:"setImageToken",token:e}),d(Fe(!1))}catch{d(Le(Me))}},onError:c}),(0,f.jsxs)("div",{className:Ve,children:[(0,f.jsx)(de,{name:a,images:u,onClickEdit:l,onClickRemove:m}),n.loading&&(0,f.jsx)("div",{className:ze,children:(0,f.jsx)($.T,{})})]}),(0,f.jsxs)("div",{className:Ge,children:[(0,f.jsx)("label",{htmlFor:"user-edit-name",className:qe,children:(0,f.jsx)(G.D,{variant:"finaleBold",className:$e,children:j.ag.get("user.edit-details.name-label")})}),(0,f.jsx)("input",{"data-testid":"user-edit-name-input",id:"user-edit-name",type:"text",dir:"auto",className:I()(Qe,Xe),onChange:e=>{d(function(e){return{type:"setName",name:e}}(e.target.value))},placeholder:j.ag.get("user.edit-details.name-placeholder"),maxLength:32,value:n.name})]}),(0,f.jsx)("div",{className:Ze,children:(0,f.jsx)(X.D,{colorSet:"invertedLight",onClick:g,disabled:n.loading,children:j.ag.get("save")})}),(0,f.jsx)(G.D,{as:"p",variant:"finaleBold",className:Ye,children:j.ag.get("image-upload.legal-disclaimer")})]})]})})}));var aa=t(88585),ta=t.n(aa),ia=t(95738),ra=t(57470),sa=t(1323),oa=t(78486),la=t(42388),na=t(18583),da=t(7923);const ua=({className:e,isCurrentUser:a,userId:t,username:r,userDisplayName:s})=>{const{projects:o,fetchProjects:l}=(0,oa.w)(a,r),n=o?.filter((e=>!(0,sa.o)(e))),d=o?.filter((e=>(0,sa.o)(e)&&!e.isPrivate)),u=o?.filter((e=>(0,sa.o)(e)&&e.isPrivate));return(0,i.useEffect)((()=>{const e=setInterval((()=>{const e=o?.filter((e=>e.publishingState===na.H.IN_PROGRESS));e&&e.length>0&&l()}),3e4);return()=>clearInterval(e)}),[l,o]),(0,la.I)(da.O.USER_PROJECTS_UPDATED,(async()=>l())),o?(0,f.jsxs)(f.Fragment,{children:[n.length>0&&(0,f.jsxs)("section",{className:e,children:[(0,f.jsx)(ia.r,{title:j.ag.get("web-player.soundtrap.unpublished-projects.title"),tagline:j.ag.get("web-player.soundtrap.unpublished-projects.tagline"),seeAllUri:ta().profileURI(t,["soundtrap","unpublished"]).toURI(),hasMoreElements:n.length>4}),(0,f.jsx)(ra.M,{data:n,userDisplayName:s,isCurrentUser:a,maxNumberOfTracks:4})]}),u.length>0&&(0,f.jsxs)("section",{className:e,children:[(0,f.jsx)(ia.r,{title:j.ag.get("web-player.soundtrap.private-songs.title"),tagline:j.ag.get("web-player.soundtrap.private-songs.tagline"),seeAllUri:ta().profileURI(t,["soundtrap","private"]).toURI(),hasMoreElements:u.length>4}),(0,f.jsx)(ra.M,{data:u,userDisplayName:s,isCurrentUser:a,maxNumberOfTracks:4})]}),d.length>0&&(0,f.jsxs)("section",{className:e,children:[(0,f.jsx)(ia.r,{title:j.ag.get("web-player.soundtrap.public-songs.title"),tagline:a?j.ag.get("web-player.soundtrap.public-songs.tagline"):null,seeAllUri:ta().profileURI(t,["soundtrap","public"]).toURI(),hasMoreElements:d.length>4}),(0,f.jsx)(ra.M,{data:d,userDisplayName:s,isCurrentUser:a,maxNumberOfTracks:4})]})]}):null};var ca=t(46788),ma=t(68001),ga=t(31340),pa=t(58175),ha=t(85435),fa=t(18060),va=t(38550),xa=t(14352),ba=t(16527),ya=t(38205),Ia=t(77003),ja=t(57559);const ka=({imageUriOrUrl:e="",desiredMosaicSize:a=300}={})=>{if(!e)return"";if(e.startsWith("spotify:")){const[,t,...i]=e.split(":");if("image"===t)return`https://i.scdn.co/image/${i[0]}`;if("mosaic"===t)return`https://mosaic.scdn.co/${a}/${i.join("")}`}return e};var Na=t(45696),_a=t(7184),Pa=t(33428),wa=t(45476),Sa=t(33437),Ca=t(23390),Ra=t(29009),Oa=t(98082),Da=t(92910);const Ua=i.memo((function({tracks:e,hasHeaderRow:a=!1,nrTracksVisible:t,uri:r}){const s=(0,ce.C)(r),l=(0,o.qC)(s,"tracks").toURI(),n=(0,i.useMemo)((()=>t?e.slice(0,t):e),[t,e]),{usePlayContextItem:d}=(0,Oa.n)({uri:l,pages:[{items:e.map((e=>({type:Da.p.TRACK,uri:e.uri,uid:null,provider:null})))}]},{featureIdentifier:"profile",referrerIdentifier:"user_profile"}),u=(0,i.useCallback)(((e,a)=>{const t=(0,ja.X)(e?.album?.images,{desiredSize:40});return(0,f.jsx)(Sa.SS,{index:a,uri:(0,Ca.$)(e),duration_ms:e.duration_ms,name:e.name,artists:e.artists,album:e.album,isPlayable:!0,isExplicit:!!e.explicit,isMOGEFRestricted:!!e.mogef19,imgUrl:t?.url||"",contextUri:l,usePlayContextItem:d},a+e.uri)}),[l,d]),c=(0,i.useMemo)((()=>[wa.QD.INDEX,wa.QD.TITLE,wa.QD.ALBUM,wa.QD.DURATION]),[]),m=(0,i.useCallback)((e=>e.uri),[]);return(0,f.jsx)(Ra.ZP,{value:"user-top-tracks-tracklist",children:(0,f.jsx)(wa.Pv,{ariaLabel:j.ag.get("top_tracks_this_month"),renderRow:u,nrTracks:n.length,tracks:n,resolveUri:m,hasHeaderRow:a,columns:c})})}),((e,a)=>e.tracks===a.tracks)),Ea=i.memo((function({tracks:e,title:a,tagline:t,seeAllUri:r,className:s,uri:o,spec:l}){const n=(0,Ia.$P)(),d=(0,i.useCallback)((()=>{const e=l.titleLinkFactory().hitUiNavigate({destination:r});n.logInteraction(e)}),[n,r,l]),u=(0,i.useCallback)((()=>{const e=l.titleLinkFactory().hitUiNavigate({destination:r});n.logInteraction(e)}),[n,r,l]);if(!e||0===e.length)return null;const c=e.length>4;return(0,f.jsxs)("section",{className:s,children:[(0,f.jsx)(ia.r,{title:a,tagline:t,seeAllUri:r,hasMoreElements:c,onClickTitle:d,onClickSeeAll:u}),(0,f.jsx)(Ia.Nh,{spec:l,children:(0,f.jsx)(Ua,{tracks:e,uri:o,nrTracksVisible:4})})]})}),((e,a)=>e.tracks===a.tracks));function Aa(e,a){switch(a.type){case"OPEN_MODAL":return{isModalOpen:!0,modalVariant:"editProfile",shouldOpenImagePicker:!1};case"OPEN_MODAL_WITH_IMAGEPICKER":return{isModalOpen:!0,modalVariant:"editProfile",shouldOpenImagePicker:!0};case"OPEN_SOUNDTRAP_MODAL":return{isModalOpen:!0,modalVariant:"soundtrap",shouldOpenImagePicker:!1};case"CLOSE_MODAL":return{isModalOpen:!1,modalVariant:null,shouldOpenImagePicker:!1};default:return e}}const Ta=({uri:e})=>{const a=(0,E.v9)(va.Gf),t=(0,E.v9)(va.A$),s=(0,E.I0)(),l=(0,A.W6)(Pa.Nf,{loadingValue:!1}),[n,m]=(0,ha.H)(e),g=(0,i.useMemo)((()=>(0,ja.X)(t)),[t]),[{isModalOpen:h,modalVariant:v,shouldOpenImagePicker:x},b]=function(){const[e,a]=(0,i.useReducer)(Aa,{isModalOpen:!1,modalVariant:null,shouldOpenImagePicker:!1});return[e,a]}(),y=(0,ma.o)(),w=!(0,ga.k)(),{data:C,loading:R}=(0,u.J)(c.n5.getProfile,[{uri:e,playlists:10,artists:10,episodes:10}]),O=C?.public_playlists,D=C?.is_verified,U=C?.is_current_user||!1,G=C?.recently_played_artists,q=C?.user_created_show,$=U?g?.url||"":C?.image_url||"",X=(0,ce.C)(e),Z=(0,E.v9)(fa.C7),Y=(U?a:C?.name)||"",ee=(0,pa.Z)(C?.image_url||null),{userId:ae}=(0,r.UO)(),{spec:te,logger:ie}=(0,Ia.fU)(T.createDesktopProfileEventFactory,{data:{uri:e,identifier:ae}}),re=(0,i.useMemo)((()=>te.sectionTopTracksFactory()),[te]),{data:se,loading:oe}=(0,u.J)(c.n5.getFollowing,[e]),le=se?.profiles,{data:ne,loading:de}=(0,u.J)(c.n5.getFollowers,[e]),ue=ne?.profiles,me=(0,i.useMemo)((()=>(e=>e?c.n5.getUserTopArtists:()=>Promise.resolve({status:200,body:{items:[],offset:0,limit:0,total:0,href:"",next:null,previous:null}}))(U)),[U]),ge=(0,i.useMemo)((()=>(e=>e?c.n5.getUserTopTracks:()=>Promise.resolve({status:200,body:{items:[],offset:0,limit:0,total:0,href:"",next:null,previous:null}}))(U&&!Z)),[U,Z]),{data:pe,loading:he}=(0,u.J)(me,[]),{data:fe,loading:ve}=(0,u.J)(ge,[]),xe=pe?.body,be=fe?.body,ye=(0,A.W6)(Pa.sT,{loadingValue:!1}),{projects:Ie}=(0,oa.w)(U,ae),[je,ke]=(0,i.useState)(null),Ne=(0,r.k6)();(0,i.useEffect)((()=>{if(ye&&Ie&&"soundtrap_publish"===Ne.location.state?.referrer&&Ne.location.state?.newProjectId){const e=Ie?.find((e=>e.soundtrapProjectId===Ne.location.state?.newProjectId));e&&(ke(e),b({type:"OPEN_SOUNDTRAP_MODAL"}))}}),[Ne,ye,b,Ie]);const _e=(0,i.useCallback)((()=>{y({targetUri:e,intent:n?"unfollow":"follow",type:"click"});const a=te.actionBarFactory().followButtonFactory();n?(m(!1),ie.logInteraction(a.hitUnfollow({itemToBeUnfollowed:e}))):(m(!0),ie.logInteraction(a.hitFollow({itemToBeFollowed:e})))}),[n,ie,y,m,te,e]),Pe=(0,i.useCallback)((e=>{b({type:"CLOSE_MODAL"}),e?(s((0,xa.dL)(e.name)),s((0,xa.GR)(e.image?[{url:e.image,height:null,width:null}]:[]))):"soundtrap_publish"===Ne.location.state?.referrer&&Ne.location.state?.newProjectId&&Ne.replace(Ne.location.pathname)}),[s,b,Ne]),we=(0,i.useCallback)((()=>{b({type:"OPEN_MODAL"});const e=te.headerFactory().usernameFactory().hitUiReveal();ie.logInteraction(e)}),[ie,b,te]),Se=(0,i.useCallback)((()=>{b({type:"OPEN_MODAL_WITH_IMAGEPICKER"});const e=te.headerFactory().profileImageFactory().hitUiReveal();ie.logInteraction(e)}),[ie,b,te]),Ce=(0,i.useMemo)((()=>[{url:$}]),[$]),Re=(0,i.useCallback)((()=>{const e=te.headerFactory().usernameFactory().hitUiReveal();ie.logInteraction(e)}),[ie,te]),Oe=(0,i.useCallback)(((e,a)=>{if(!a)return;const t=te.headerFactory().followersLinkFactory().hitUiNavigate({destination:a});ie.logInteraction(t)}),[ie,te]),De=(0,i.useCallback)(((e,a)=>{if(!a)return;const t=te.headerFactory().followersLinkFactory().hitUiNavigate({destination:a});ie.logInteraction(t)}),[ie,te]),Ue=(0,i.useCallback)((()=>{const e=te.actionBarFactory().contextMenuButtonFactory().hitUiReveal();ie.logInteraction(e)}),[ie,te]);if(!C||R||oe||de||ve||he)return(0,f.jsx)(N.h,{hasError:!1,errorMessage:j.ag.get("error.not_found.title.page")});const Ee={total:C.followers_count},Ae=I()("contentSpacing",P);function Te(e){return q&&l?e:e-1}return(0,f.jsxs)("div",{className:_,children:[(0,f.jsx)(d.$,{children:Y}),(0,f.jsxs)(K.gF,{backgroundColor:ee,children:[(0,f.jsx)(V.W,{children:(0,f.jsx)(z.i,{text:Y})}),(0,f.jsx)(ya._,{menu:(0,f.jsx)(W.I,{uri:C.uri}),children:(0,f.jsx)("div",{className:S,children:(0,f.jsx)(J.T,{canEdit:U,name:Y,images:Ce,onClick:Se,placeholderType:"user",shape:K.Kc.CIRCLE})})}),(0,f.jsxs)(K.sP,{children:[(0,f.jsx)(K.dy,{small:!0,uppercase:!0,children:D?(0,f.jsx)(Na.S,{text:j.ag.get("card.tag.profile")}):j.ag.get("card.tag.profile")}),(0,f.jsx)(ya._,{menu:(0,f.jsx)(W.I,{uri:C.uri}),children:(0,f.jsx)(K.xd,{canEdit:U,editTitle:j.ag.get("playlist.edit-details.title"),onClick:we,children:Y})}),(0,f.jsx)(K.QS,{totalFollowers:Ee.total,totalFollowing:le?.length,publicPlaylists:C.total_public_playlists_count,userUri:e,onCreatorClick:Re,onTotalFollowersClick:Oe,onTotalFollowingClick:De})]})]}),(0,f.jsx)(M.o,{backgroundColor:ee,children:(0,f.jsxs)(M.F,{children:[!U&&(0,f.jsx)(B.r,{children:(0,f.jsx)(Q.e,{isFollowing:Boolean(n),onClick:_e,disabled:w})}),(0,f.jsx)(ba.y,{menu:(0,f.jsx)(W.I,{uri:C.uri,onEditProfileCallback:we}),children:(0,f.jsx)(F.z,{label:j.ag.get("more.label.context",Y),onClick:Ue})})]})}),(0,f.jsxs)(Ia.Nh,{spec:te,children:[ye&&(0,f.jsx)(ua,{className:Ae,userId:ae,username:X,userDisplayName:Y,isCurrentUser:U}),q&&l&&(0,f.jsx)(_a.q,{className:Ae,total:q.total_episode_count,title:j.ag.get("episodes"),seeAllUri:(0,o.QK)(X,["episodes"]).toURI(),id:"episodes",index:0,children:q.episodes?.map(((e,a)=>(0,f.jsx)(p.B,{index:a,uri:e.uri,name:e.name,images:e.images,durationMilliseconds:1e3*parseInt(e.duration,10),releaseDate:e.publish_time?.toISOString(),description:`Stream count ${e.stream_count}`,showImages:[],resume_point:null,isExplicit:!1,is19PlusOnly:!1,sharingInfo:null},e.uri)))}),(0,f.jsx)(_a.q,{className:Ae,total:xe?.total||0,title:j.ag.get("top_artists_this_month"),tagline:j.ag.get("only_visible_to_you"),seeAllUri:(0,o.QK)(X,["top","artists"]).toURI(),id:"top-artists",index:Te(1),children:xe?.items.map(((e,a)=>(0,f.jsx)(L.I,{index:a,uri:e.uri,name:e.name,images:e.images},e.uri)))}),(0,f.jsx)(Ea,{className:Ae,title:j.ag.get("top_tracks_this_month"),tagline:j.ag.get("only_visible_to_you"),seeAllUri:(0,o.QK)(X,["top","tracks"]).toURI(),uri:e,tracks:be?.items,spec:re}),(0,f.jsx)(_a.q,{className:Ae,total:C.total_public_playlists_count,title:j.ag.get("public_playlists"),seeAllUri:(0,o.QK)(X,["playlists"]).toURI(),id:"playlists",index:Te(2),children:O?.map(((e,a)=>(0,f.jsx)(H.Z,{index:a,uri:e.uri,name:e.name,images:[{url:ka({imageUriOrUrl:e.image_url}),width:300,height:300}],authorName:e.owner_name,description:e.followers_count?j.ag.get("user.followers",e.followers_count):""},e.uri)))}),G?.length?(0,f.jsx)(_a.q,{className:Ae,total:G?.length,title:j.ag.get("recently_played_artists"),seeAllUri:(0,o.QK)(X,["recently-played-artists"]).toURI(),id:"recently-played-artists",index:Te(3),children:G?.map(((e,a)=>(0,f.jsx)(L.I,{index:a,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))}):null,ue?.length?(0,f.jsx)(_a.q,{className:Ae,title:j.ag.get("followers"),total:ue?.length,seeAllUri:(0,o.QK)(X,["followers"]).toURI(),id:"followers",index:Te(4),children:ue?.map(((e,a)=>(0,f.jsx)(k.P,{index:a,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))}):null,le?.length?(0,f.jsx)(_a.q,{className:Ae,title:j.ag.get("following"),total:le?.length,seeAllUri:(0,o.QK)(X,["following"]).toURI(),id:"following",index:Te(5),children:le?.map(((e,a)=>(0,f.jsx)(k.P,{index:a,uri:e.uri,name:e.name,images:[{url:e.image_url}]},e.uri)))}):null,U&&h&&("editProfile"===v?(0,f.jsx)(ea,{uri:e,name:Y,image:$,onClose:Pe,shouldOpenImagePicker:x}):"soundtrap"===v&&ye&&je?(0,f.jsx)(ca.x,{project:je,userDisplayName:Y,onClose:Pe}):null)]})]})},Ma=e=>{const{uri:a}=e,{data:t,loading:i,error:r}=(0,u.J)(c.n5.getPlaylists,[{uri:a}]),{public_playlists:s,total_public_playlists_count:o=0}=t||{};return i?(0,f.jsx)(N.h,{hasError:null!==r,errorMessage:j.ag.get("error.not_found.title.page")}):(0,f.jsx)(h.P,{className:I()("contentSpacing",w),total:o,title:j.ag.get("public_playlists"),showAll:!0,children:s?.map(((e,a)=>(0,f.jsx)(H.Z,{index:a,uri:e.uri,name:e.name,authorName:e.owner_name,description:e.followers_count?j.ag.get("user.followers",e.followers_count):"",images:[{url:ka({imageUriOrUrl:e.image_url}),width:300,height:300}]},e.uri)))})},Fa=e=>{const{uri:a}=e,{data:t,loading:i,error:r}=(0,u.J)(c.n5.getRecentlyPlayedArtists,[{uri:a,limit:50}]),s=t?.artists;return i?(0,f.jsx)(N.h,{hasError:null!==r,errorMessage:j.ag.get("error.not_found.title.page")}):(0,f.jsx)(h.P,{className:I()("contentSpacing",w),total:s?.length,title:j.ag.get("recently_played_artists"),showAll:!0,children:s?.map(((e,a)=>(0,f.jsx)(L.I,{index:a,name:e.name,uri:e.uri,images:[{url:e.image_url}]},e.uri)))})},La=()=>{const{data:e,loading:a,error:t}=(0,u.J)(c.n5.getUserTopArtists),i=e?.body;return a?(0,f.jsx)(N.h,{hasError:null!==t,errorMessage:j.ag.get("error.not_found.title.page")}):i?(0,f.jsx)(h.P,{className:I()("contentSpacing",w),total:i.items.length,title:j.ag.get("top_artists_this_month"),tagline:j.ag.get("only_visible_to_you"),showAll:!0,children:i.items.map(((e,a)=>(0,f.jsx)(L.I,{index:a,uri:e.uri,name:e.name,images:e.images},e.uri)))}):null},Ha=({uri:e})=>{const{data:a,loading:t,error:i}=(0,u.J)(c.n5.getProfile,[{uri:e}]);return a&&!t&&(a?.is_current_user||!1)?(0,f.jsx)(La,{}):(0,f.jsx)(N.h,{hasError:null!==i,errorMessage:j.ag.get("error.not_found.title.page")})},Wa=({uri:e})=>{const{data:a,loading:t,error:i}=(0,u.J)(c.n5.getUserTopTracks,[{offset:0,limit:50}]),r=a?.body;return t?(0,f.jsx)(N.h,{hasError:null!==i,errorMessage:j.ag.get("error.not_found.title.page")}):r?(0,f.jsxs)("div",{className:I()("contentSpacing",w,C),children:[(0,f.jsxs)("div",{className:R,children:[(0,f.jsx)(G.D,{as:"h1",variant:"canon",className:O,children:j.ag.get("top_tracks_this_month")}),(0,f.jsx)(G.D,{as:"p",variant:"mesto",children:j.ag.get("only_visible_to_you")})]}),(0,f.jsx)(Ua,{tracks:r.items,uri:e,hasHeaderRow:!0})]}):null},Ja=({uri:e})=>{const{data:a,loading:t,error:i}=(0,u.J)(c.n5.getProfile,[{uri:e}]);return a&&!t&&(a?.is_current_user||!1)?(0,f.jsx)(Wa,{uri:e}):(0,f.jsx)(N.h,{hasError:null!==i,errorMessage:j.ag.get("error.not_found.title.page")})},Ka=(0,i.memo)((function(){const{userId:e}=(0,r.UO)(),a=decodeURIComponent(e),t=(0,o.QK)(a).toURI();return(0,f.jsx)("section",{children:(0,f.jsxs)(r.rs,{children:[(0,f.jsx)(l.g,{exact:!0,path:"/user/:userId/playlists",pathV6:"playlists",children:(0,f.jsx)(n.K,{pageId:s.Wg.PROFILE_PLAYLISTS,children:(0,f.jsx)(Ma,{uri:t})})}),(0,f.jsx)(l.g,{exact:!0,path:"/user/:userId/top/tracks",pathV6:"top/tracks",children:(0,f.jsx)(n.K,{pageId:s.Wg.PROFILE_TOP_TRACKS,children:(0,f.jsx)(Ja,{uri:t})})}),(0,f.jsx)(l.g,{exact:!0,path:"/user/:userId/top/artists",pathV6:"top/artists",children:(0,f.jsx)(n.K,{pageId:s.Wg.PROFILE_TOP_ARTISTS,children:(0,f.jsx)(Ha,{uri:t})})}),(0,f.jsx)(l.g,{exact:!0,path:"/user/:userId/recently-played-artists",pathV6:"recently-played-artists",children:(0,f.jsx)(n.K,{pageId:s.Wg.PROFILE_RECENTLY_PLAYED_ARTISTS,children:(0,f.jsx)(Fa,{uri:t})})}),(0,f.jsx)(l.g,{exact:!0,path:"/user/:userId/following",pathV6:"following",children:(0,f.jsx)(n.K,{pageId:s.Wg.PROFILE_FOLLOWING,children:(0,f.jsx)(U,{uri:t})})}),(0,f.jsx)(l.g,{exact:!0,path:"/user/:userId/followers",pathV6:"followers",children:(0,f.jsx)(n.K,{pageId:s.Wg.PROFILE_FOLLOWERS,children:(0,f.jsx)(D,{uri:t})})}),(0,f.jsx)(l.g,{exact:!0,path:"/user/:userId/episodes",pathV6:"episodes",children:(0,f.jsx)(n.K,{pageId:s.Wg.PROFILE_EPISODES,children:(0,f.jsx)(b,{uri:t})})}),(0,f.jsx)(l.g,{exact:!0,path:"/user/:userId",pathV6:"/",children:(0,f.jsx)(n.K,{pageId:s.Wg.PROFILE,children:(0,f.jsx)(Ta,{uri:t})})})]})})})),Ba=Ka},23390:(e,a,t)=>{t.d(a,{$:()=>i});const i=e=>e?.linked_from?.uri||e.uri}}]);
//# sourceMappingURL=xpui-routes-profile.js.map