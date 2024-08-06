"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9695],{13350:function(e,t,n){n.d(t,{h:function(){return p},t:function(){return f}});var a,r,s,o=n(2346),i=n(19841),l=n(95182),c=n.n(l),d=n(15478),u=n(13490),m=n(43009),x=n(651);function p(e){let{currentPage:t,onChangeIndex:n,length:a,showInline:r=!1}=e,s=e=>{n(c()(t+e,0,a-1))};return(0,x.jsxs)("div",{className:(0,i.default)("flex items-center justify-center rounded-lg text-token-text-secondary",!r&&m.W.MessageAction),children:[(0,x.jsx)("button",{onClick:()=>s(-1),disabled:0===t,className:"flex h-[30px] w-[30px] items-center justify-center rounded-md hover:bg-token-main-surface-secondary disabled:opacity-50 disabled:hover:bg-transparent",children:(0,x.jsx)(u.DUf,{className:"icon-md-heavy"})}),(0,x.jsx)("div",{className:"px-0.5 text-sm font-semibold tabular-nums",children:"".concat(t+1,"/").concat(a)}),(0,x.jsx)("button",{onClick:()=>s(1),disabled:t===a-1,className:"flex h-[30px] w-[30px] items-center justify-center rounded-md hover:bg-token-main-surface-secondary disabled:opacity-50 disabled:hover:bg-transparent",children:(0,x.jsx)(u.ob9,{className:"icon-md-heavy"})})]})}function f(e){let{currentPage:t,onChangeIndex:n,length:a,className:r}=e,s=e=>{n(c()(t+e,0,a-1))};return 0===a?null:(0,x.jsxs)(h,{className:r,children:[(0,x.jsx)(g,{onClick:()=>s(-1),disabled:0===t,children:(0,x.jsx)(u.DUf,{className:"icon-sm"})}),(0,x.jsx)(j,{children:"".concat(t+1,"/").concat(a)}),(0,x.jsx)(g,{onClick:()=>s(1),disabled:t===a-1,children:(0,x.jsx)(u.ob9,{className:"icon-sm"})})]})}let h=d.Z.div(a||(a=(0,o.Z)(["text-xs inline-flex bg-token-main-surface-secondary h-8 border rounded border-token-border-medium"]))),g=d.Z.button(r||(r=(0,o.Z)(["text-token-text-secondary disabled:text-token-border-medium w-8 flex items-center justify-center hover:bg-token-main-surface-tertiary"]))),j=d.Z.span(s||(s=(0,o.Z)(["text-token-text-tertiary px-2 flex items-center font-mono tracking-widest"])))},15122:function(e,t,n){n.d(t,{m:function(){return o}});var a=n(94273),r=n(92379),s=n(651);function o(e){let{show:t,appear:n,children:o}=e;return(0,s.jsx)(a.u,{as:r.Fragment,enter:"transition ease-out duration-200",enterFrom:"opacity-0 translate-y-1",enterTo:"opacity-100 translate-y-0",leave:"transition ease-in duration-150",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-1",show:t,appear:n,children:o})}},60211:function(e,t,n){n.d(t,{ZP:function(){return E},bq:function(){return L},mJ:function(){return z},p5:function(){return G}});var a=n(98601),r=n(99333),s=n(97537),o=n(2721),i=n(31438),l=n(31498),c=n(56032),d=n(42420),u=n(88667),m=n(19841),x=n(70933),p=n(38482),f=n.n(p),h=n(92379),g=n(62984),j=n(75172),v=n(68306),b=n(68810),k=n(13350),y=n(98095),M=n(59144),w=n(73062),C=n(36792),Z=n(13490),N=n(24434),O=n(24740),S=n(18898),A=n(44087),P=n(651);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach(function(t){(0,a.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let W=f()(()=>n.e(6638).then(n.bind(n,76638)).then(e=>e.DirectorySyncResourceManagedIndication),{loadableGenerated:{webpack:()=>[76638]}}),_=(0,b.Ue)(()=>({confirmModalUserData:null})),T=e=>{_.setState({confirmModalUserData:e})},I=()=>{_.setState({confirmModalUserData:null})};function E(e){var t;let{workspaceId:n,filterInputValue:a}=e,{0:r,1:s}=(0,h.useState)(0),u=(0,l.aF)(),m=null==u?void 0:u.id,x=(0,A.Gk)(n),p=(0,A.bE)(n),f=x||p,j=(0,c.D)({mutationFn:e=>{let{userId:t,workspaceId:n,value:a}=e;return o.Z.updateWorkspaceUserRole(n,t,a).catch(e=>{O.m.danger("Unable to update user (".concat(t,") role: ").concat(e.message))})}}),v=function(e){let t=(0,d.NL)();return(0,c.D)({mutationFn:t=>{let{userId:n}=t;return o.Z.removeWorkspaceUser(e,n).catch(e=>{O.m.danger("Unable to remove user (".concat(n,") from workspace: ").concat(e.message))})},onSuccess:()=>{t.invalidateQueries({queryKey:["workspace",e]})}})}(n),{data:b}=(0,S.Z)(n,r*S.I,a),y=(0,h.useCallback)(e=>{T(e)},[]),M=(0,h.useCallback)(()=>{var e;let t=null===(e=_.getState().confirmModalUserData)||void 0===e?void 0:e.id;void 0!==t&&v.mutate({userId:t}),I()},[v]),w=(0,h.useCallback)((e,t)=>{j.mutate({userId:e,value:t,workspaceId:n})},[j,n]);if(void 0===b)return(0,P.jsx)(L,{});let N=b.items,D=Math.ceil((null!==(t=b.total)&&void 0!==t?t:0)/S.I);return r>=D&&0!==D&&s(Math.max(D-1,0)),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(C.Z.Root,{fixed:!0,size:"normal",children:[(0,P.jsxs)(C.Z.Header,{children:[(0,P.jsx)(C.Z.HeaderCell,{className:"bg-token-main-surface-primary",children:(0,P.jsx)(g.Z,U({},V.name))}),(0,P.jsx)(C.Z.HeaderCell,{className:"bg-token-main-surface-primary",children:(0,P.jsx)(g.Z,U({},V.email))}),(0,P.jsx)(C.Z.HeaderCell,{className:"w-28 bg-token-main-surface-primary",children:(0,P.jsx)("span",{className:x?"pl-3":"",children:(0,P.jsx)(g.Z,U({},V.role))})}),f&&(0,P.jsx)(C.Z.HeaderCell,{className:"w-16 bg-token-main-surface-primary"})]}),(0,P.jsxs)(C.Z.Body,{children:[N.map(e=>(0,P.jsx)(R,{isCurrentUser:void 0!==m&&e.id===m,user:e,currentUserHasAdminRights:f,isCurrentUserOwner:x,onRemoveUserClick:()=>{var t,n;return y({id:e.id,name:null!==(t=e.name)&&void 0!==t?t:"",email:null!==(n=e.email)&&void 0!==n?n:"",created_time:e.created_time})},onUpdateUserRole:w},e.id)),0===N.length&&(0,P.jsx)(C.Z.Row,{children:(0,P.jsx)(C.Z.Cell,{children:(0,P.jsx)("div",{className:"text-token-text-tertiary",children:(0,P.jsx)(g.Z,U({},V.noResults))})})})]})]}),(0,P.jsxs)("div",{className:"relative mb-8 mt-4 min-h-[20px]",children:[x&&(0,P.jsxs)("button",{onClick:()=>i.vm.openModal(i.B.InviteUsersToWorkspace),className:"flex items-center gap-2 text-token-text-secondary hover:text-token-text-primary",children:[(0,P.jsx)(Z.Vz5,{className:"icon-sm"}),(0,P.jsx)(g.Z,U({},V.inviteMemberButton))]}),D>1&&(0,P.jsx)("div",{className:"absolute start-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 justify-center",children:(0,P.jsx)(k.t,{currentPage:r,onChangeIndex:s,length:D})})]}),(0,P.jsx)(F,{onDeleteConfirm:M})]})}function F(e){var t;let{onDeleteConfirm:n}=e,a=(0,j.Z)(),r=_(e=>null!==e.confirmModalUserData),s=_(e=>null===e.confirmModalUserData?{}:{userId:e.confirmModalUserData.id,email:e.confirmModalUserData.email,name:e.confirmModalUserData.name,dateAdded:(0,x.Z)(e.confirmModalUserData.created_time)});return(0,P.jsx)(N.Z,{isOpen:r,title:a.formatMessage(V.removeMemberModalTitle),onClose:()=>I(),type:"success",primaryButton:(0,P.jsx)(M.Z.Button,{title:a.formatMessage(V.removeMemberModalConfirm),color:"danger",onClick:n}),secondaryButton:(0,P.jsx)(M.Z.Button,{title:a.formatMessage(V.removeMemberModalCancel),color:"secondary",onClick:()=>I()}),children:(0,P.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[null!==(t=s.name)&&void 0!==t?t:s.email,(0,P.jsx)("div",{className:"text-token-text-tertiary",children:(0,P.jsx)(g.Z,U(U({},V.dateJoined),{},{values:{dateAdded:a.formatDate(s.dateAdded,{year:"numeric",month:"long",day:"numeric"})}}))})]})})}function R(e){var t;let{user:n,currentUserHasAdminRights:a,isCurrentUserOwner:r,isCurrentUser:s,onRemoveUserClick:o,onUpdateUserRole:i}=e,l=(0,A.Ap)()[n.role],c=null==n.name||""===n.name,{value:d}=(0,u.sB)("3999712942");return(0,P.jsxs)(C.Z.Row,{children:[(0,P.jsx)(C.Z.Cell,{children:(0,P.jsxs)("span",{className:(0,m.default)("flex flex-grow items-center justify-between gap-2",c&&"text-token-text-tertiary"),children:[(0,P.jsx)("span",{children:null!==(t=n.name)&&void 0!==t?t:(0,P.jsx)(g.Z,U({},V.missingName))}),s&&(0,P.jsx)("span",{children:(0,P.jsx)(g.Z,U({},V.youSpecifier))}),d&&n.is_scim_managed&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("span",{className:"flex-grow"}),(0,P.jsx)(W,{})]})]})}),(0,P.jsx)(C.Z.Cell,{children:n.email}),(0,P.jsx)(C.Z.Cell,{children:r?(0,P.jsx)(z,{currentRole:n.role,onUpdateUserRole:e=>{i(n.id,e)},disabled:s}):l}),a&&(0,P.jsx)(C.Z.Cell,{children:(0,P.jsx)(B,{userId:n.id,onRemoveUserClick:o,disabled:s})})]})}function z(e){let{currentRole:t,onUpdateUserRole:n,disabled:a=!1}=e,s=(0,A.Ap)();return(0,P.jsx)(w.g,{disabled:a,defaultValue:t,onValueChange:e=>{n(e)},options:[{label:s[r.r3.STANDARD],value:r.r3.STANDARD},{label:s[r.r3.ADMIN],value:r.r3.ADMIN},{label:s[r.r3.OWNER],value:r.r3.OWNER}]})}function B(e){let{disabled:t,onRemoveUserClick:n,userId:a}=e;return t?null:(0,P.jsxs)(y.Z.Root,{children:[(0,P.jsx)(y.Z.Trigger,{className:"-my-2",children:(0,P.jsx)(Z.nWS,{className:"icon-sm"})}),(0,P.jsx)(y.Z.Portal,{children:(0,P.jsx)(y.Z.Content,{children:(0,P.jsx)(y.Z.Item,{onClick:()=>{n(a)},children:(0,P.jsx)(g.Z,U({},V.removeMemberModalTitle))})})})]})}function G(e){var t;let{data:n}=(0,S.Z)(e);return null!==(t=null==n?void 0:n.total)&&void 0!==t?t:0}function L(){return(0,P.jsx)("div",{className:"flex w-full items-center justify-center",children:(0,P.jsx)(s.Z,{})})}let V=(0,v.vU)({name:{id:"UserManager.name",defaultMessage:"Name"},email:{id:"UserManager.email",defaultMessage:"Email"},role:{id:"UserManager.role",defaultMessage:"Role"},missingName:{id:"UserManager.missingName",defaultMessage:"No name provided"},youSpecifier:{id:"UserManager.youSpecifier",defaultMessage:"(You)"},removeUser:{id:"UserManager.removeUser",defaultMessage:"Remove user from workspace"},removeMemberModalTitle:{id:"UserManager.removeMemberModalTitle",defaultMessage:"Remove member"},removeMemberModalConfirm:{id:"UserManager.removeMemberModalConfirm",defaultMessage:"Delete"},removeMemberModalCancel:{id:"UserManager.removeMemberModalCancel",defaultMessage:"Cancel"},dateJoined:{id:"UserManager.dateJoined",defaultMessage:"Joined workspace on {dateAdded}"},inviteMemberButton:{id:"UserManager.inviteMemberButton",defaultMessage:"Invite member"},noResults:{id:"UserManager.noResults",defaultMessage:"No results"}})},18898:function(e,t,n){n.d(t,{I:function(){return s},Z:function(){return o}});var a=n(2721),r=n(84760);let s=25;function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:s,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0;return(0,r.a)({queryKey:["workspace",e,t,n],queryFn:async()=>await a.Z.getWorkspaceUsers(e,t,o,n),placeholderData:i,enabled:!!e})}},43009:function(e,t,n){n.d(t,{W:function(){return a}});let a={MessageAction:"z-10",ScrollToBottom:"z-10",PromptTextareaHeader:"z-20",TagGpt:"z-20"}},83322:function(e,t,n){n.d(t,{S:function(){return L},W:function(){return z}});var a=n(98601),r=n(60211),s=n(98095),o=n(89692),i=n(50454),l=n(93951),c=n(31438),d=n(31498),u=n(15913),m=n(69769),x=n(42420),p=n(27702),f=n(82821),h=n(66290),g=n(54089),j=n(58695),v=n(99976),b=n(61619),k=n(19841),y=n(18939),M=n.n(y),w=n(92379),C=n(75172),Z=n(62984),N=n(68306),O=n(59725),S=n(15122),A=n(97537),P=n(44087),D=n(30853),U=n(13490),W=n(89857),_=n(90067),T=n(56625),I=n(52503),E=n(651);function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach(function(t){(0,a.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function z(e){let{onClickSettings:t}=e;return(0,E.jsxs)(p.v,{as:"div",className:"group relative",children:[(0,E.jsx)(J,{}),(0,E.jsx)(S.m,{children:(0,E.jsx)(p.v.Items,{className:"popover absolute bottom-full left-0 z-20 mb-1 w-full overflow-hidden rounded-lg border border-token-border-light bg-token-main-surface-primary p-1.5 shadow-lg outline-none",children:(0,E.jsx)(q,{onClickSettings:t})})})]})}function B(){var e;let t=!(null!==(e=(0,l.t)())&&void 0!==e&&e.isEnterprisey()),n=(0,C.Z)(),a=(0,d.aF)(),r=(0,h.Z)();return a?(0,E.jsxs)("div",{className:"flex items-center justify-between gap-2 py-2 pl-5 pr-4",children:[(0,E.jsx)("div",{className:"text-sm text-token-text-secondary",children:null==a?void 0:a.email}),t&&(0,E.jsx)(D.u,{label:n.formatMessage(K.addWorkspaceTooltip),side:"right",children:(0,E.jsx)("button",{onClick:()=>(0,W.MG)(r,"profile menu"),children:(0,E.jsx)(U.Vz5,{className:"icon-sm text-token-text-primary"})})})]}):null}function G(){let e=(0,l.t)();return null==e?(0,E.jsx)(E.Fragment,{children:(0,E.jsx)("div",{className:"w-full px-3 py-2",children:(0,E.jsx)(A.Z,{})})}):(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(B,{}),(0,E.jsx)("div",{className:"flex h-11 w-full items-center justify-start gap-3 px-3 py-1 text-sm",children:(0,E.jsx)(V,{workspace:e,isLoading:!1,currentWorkspaceId:e.id,showCheck:!1})})]})}function L(e){let{menuItemComponent:t}=e,n=(0,f.b)(),a=(0,x.NL)(),{data:r}=(0,l.rk)(),o=(0,l.t)(),{0:i,1:c}=(0,w.useState)(!1),u=(0,d.aF)(),p=(0,C.Z)();if(!o||!r)return null;let h=o.isWorkspaceAccount(),g=r.accountItems.length>1,j=r.accountItems,v=M()([j.find(e=>e.isPersonalAccount()),...j.filter(e=>!e.isPersonalAccount())]);if(v.sort((e,t)=>e.isPersonalAccount()?1:t.isPersonalAccount()?-1:0),!g)return h?(0,E.jsx)(G,{}):(0,E.jsx)(E.Fragment,{children:(0,E.jsx)("div",{className:"ml-3 mr-2 py-2 text-sm text-token-text-secondary",children:null==u?void 0:u.email})});let b=v.map(e=>(0,E.jsx)(t,{disabled:e.isDeactivated(),onClick:()=>{if(e.isDeactivated()||e.id===(null==o?void 0:o.id))return;c(!0);let{willRedirect:t}=(0,l.nq)(a,e.id,n,p);t||(0,m.M)()},className:"radix-disabled:pointer-events-auto radix-disabled:hover:bg-transparent",children:e.isDeactivated()?(0,E.jsx)(H,{workspace:e,isLoading:i}):(0,E.jsx)(V,{workspace:e,isLoading:i,currentWorkspaceId:null==o?void 0:o.id})},e.id));return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(B,{}),(0,E.jsx)(s.Z.Separator,{}),b]})}function V(e){let{workspace:t,isLoading:n,currentWorkspaceId:a,showCheck:r=!0}=e,s=t.canAccessWithCurrentSession,o=!n&&r&&t.id===a;return(0,E.jsxs)("div",{children:[(0,E.jsxs)("div",{className:"flex w-full items-center gap-2.5",children:[(0,E.jsx)("span",{className:"flex h-5 w-5 items-center justify-center",children:(0,E.jsx)(O.zf,{iconSize:"small",workspace:t,className:(0,k.default)({"flex-shrink-0":!0})})}),(0,E.jsx)("div",{className:"line-clamp-1 text-token-text-primary",children:(0,P.CV)((0,C.Z)(),t)}),n&&(0,E.jsx)(A.Z,{}),o&&(0,E.jsx)("span",{className:"text-token-text-primary",children:(0,E.jsx)(U.kvR,{className:"icon-sm"})}),!s&&(0,E.jsx)("span",{className:"text-token-text-primary",children:(0,E.jsx)(U.ETw,{className:"icon-sm"})})]}),!s&&(0,E.jsx)("div",{className:"rowDivClassName",children:(0,E.jsx)("small",{className:"text-token-text-secondary",children:(0,E.jsx)(Z.Z,R({},t.ssoConnectionName?K.authenticateWithSSOToAccessWorkspace:K.authenticateWithoutSSOToAccessWorkspace))})})]})}function H(e){let{workspace:t,isLoading:n}=e,a=(0,C.Z)(),o=t.isOwnerOfAccount(),{0:l,1:d}=(0,w.useState)(!1),u=(0,r.p5)(t.id);return(0,w.useEffect)(()=>{null!=u&&l&&(c.vm.setPurchaseWorkspaceData({minimumSeats:Math.max(u,i.Y6),existingAccount:t}),d(!1))},[u,l,t]),(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(D.u,{className:"flex w-full flex-1 items-center gap-2.5",label:a.formatMessage(K.disabledWorkspaceTooltip),sideOffset:20,side:"right",children:[(0,E.jsx)("span",{className:"flex h-5 w-5 items-center justify-center",children:(0,E.jsx)(U.oVl,{className:"icon-sm flex-shrink-0 opacity-30"})}),(0,E.jsx)("div",{className:"truncate opacity-30",children:(0,P.CV)(a,t)})]}),n&&(0,E.jsx)(A.Z,{}),!n&&(0,E.jsxs)(s.Z.Root,{children:[(0,E.jsx)(g.xz,{className:"rounded text-center hover:bg-token-main-surface-secondary",children:(0,E.jsx)(U.nWS,{className:"icon-sm m-1"})}),(0,E.jsx)(s.Z.Portal,{children:(0,E.jsxs)(s.Z.Content,{children:[o&&(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(s.Z.Item,{onClick:()=>{null==u?d(!0):c.vm.setPurchaseWorkspaceData({minimumSeats:Math.max(u,i.Y6),existingAccount:t})},children:l?(0,E.jsx)(A.Z,{}):(0,E.jsx)(Z.Z,{id:"navigation.reactivateWorkspace",defaultMessage:"Reactivate workspace"})})}),(0,E.jsx)(s.Z.Item,{onClick:()=>{c.vm.setLeaveWorkspaceData(t)},children:(0,E.jsx)(Z.Z,{id:"navigation.leaveWorkspace",defaultMessage:"Leave workspace"})})]})})]})]})}function q(e){let{onClickSettings:t}=e,{data:n}=(0,l.rk)(),a=(0,l.t)(),r=(0,u.w$)(),s=(0,o.f6)(),{openModal:i}=(0,o.Dr)();if(!a||!n)return null;let c=a.isWorkspaceAccount();return(0,E.jsxs)("nav",{children:[(0,E.jsx)(L,{menuItemComponent:_.ZP}),(0,E.jsx)(_.R,{}),c?(0,E.jsx)(I.b,{menuItemComponent:_.ZP,routedMenuItemComponent:_.IS}):(0,E.jsx)(T.W,{menuItemComponent:_.ZP}),!r&&(0,E.jsx)(_.ZP,{href:"https://help.openai.com/en/collections/3742473-chatgpt",target:"_blank",onClick:()=>{v.A.logEvent(b.M.clickFaqLink)},icon:U.Pfi,children:(0,E.jsx)(Z.Z,R({},K.helpAndFaq))}),(0,E.jsx)(_.ZP,{onClick:t,icon:U.SWE,children:(0,E.jsx)(Z.Z,R({},K.settings))}),s&&(0,E.jsx)(Y,{openDownloadModal:i}),(0,E.jsx)(_.R,{}),(0,E.jsx)(_.ZP,{onClick:()=>{v.A.logEvent(b.M.clickLogOut,{eventSource:"mouse"}),(0,j.w7)()},icon:U.iz5,children:(0,E.jsx)(Z.Z,R({},K.logOut))})]})}function J(){return(0,d.aF)()?(0,E.jsx)($,{}):null}function Y(e){let{openDownloadModal:t}=e;return(0,E.jsxs)("span",{children:[(0,E.jsx)(_.R,{}),(0,E.jsx)(_.ZP,{icon:U.gFD,onClick:()=>{v.A.logEvent(b.M.accountMenuClickDownloadApp),t()},children:(0,E.jsx)(Z.Z,R({},K.downloadApp))})]})}function $(){let{data:e}=(0,l.rk)(),t=(0,l.t)(),n=(0,P.$3)(),a=(0,P.cI)();if(!t||!e)return null;let r=t.isWorkspaceAccount(),s=e.accountItems.length>1;return(0,E.jsxs)(p.v.Button,{className:"flex w-full max-w-[100%] items-center gap-2 rounded-lg p-2 text-sm  hover:bg-token-sidebar-surface-secondary group-ui-open:bg-token-sidebar-surface-secondary",children:[(0,E.jsx)("div",{className:"flex-shrink-0",children:(0,E.jsx)(O.zf,{iconSize:"gizmo"})}),(0,E.jsxs)("div",{className:"relative -top-px grow -space-y-px truncate text-start text-token-text-primary",children:[(0,E.jsx)("div",{dir:"auto",children:a}),r||s?(0,E.jsx)("div",{className:"truncate text-xs text-token-text-secondary",dir:"auto",children:n}):null]})]})}let K=(0,N.vU)({helpAndFaq:{id:"navigation.helpAndFaq",defaultMessage:"Help & FAQ"},settings:{id:"navigation.settings",defaultMessage:"Settings"},logOut:{id:"navigation.logOut",defaultMessage:"Log out"},accountSwitcherTitle:{id:"navigation.accountSwitcherTitle",defaultMessage:"Workspaces"},defaultWorkspaceTitle:{id:"useWorkspaces.defaultWorkspaceTitle",defaultMessage:"Untitled Workspace"},addWorkspaceTooltip:{id:"navigation.addWorkspaceTooltip",defaultMessage:"Create a Team workspace"},disabledWorkspaceTooltip:{id:"navigation.disabledWorkspaceTooltip",defaultMessage:"This workspace has been deactivated"},downloadApp:{id:"navigation.downloadMacApp",defaultMessage:"Download the macOS app"},authenticateWithSSOToAccessWorkspace:{id:"CV7pdM",defaultMessage:"Authenticate with SSO to access this workspace"},authenticateWithoutSSOToAccessWorkspace:{id:"zfCWFh",defaultMessage:"Authenticate without SSO to access this workspace"}})},90067:function(e,t,n){n.d(t,{IS:function(){return h},R:function(){return v},Vq:function(){return b},ZB:function(){return g},ZP:function(){return f},zV:function(){return j}});var a,r,s,o,i,l=n(2346),c=n(27702),d=n(19841),u=n(24098),m=n.n(u),x=n(15478),p=n(651);function f(e){let{onClick:t,href:n,target:a,children:r,disabled:s,icon:o}=e;return(0,p.jsx)(c.v.Item,{disabled:s,children:e=>{let{active:i}=e;return(0,p.jsxs)(g,{onClick:t,href:n,target:a,className:(0,d.default)({"bg-token-sidebar-surface-secondary":i,"hover:bg-token-sidebar-surface-secondary":!i&&!s}),children:[o&&(0,p.jsx)(o,{className:"icon-md"}),r]})}})}function h(e){let{href:t,children:n,icon:a}=e;return(0,p.jsx)(c.v.Item,{children:e=>{let{active:r}=e;return(0,p.jsx)(m(),{href:t,children:(0,p.jsxs)(g,{$as:"span",className:(0,d.default)(r?"bg-token-sidebar-surface-secondary":"cursor-pointer"),children:[a&&(0,p.jsx)(a,{className:"icon-md"}),n]})})}})}x.Z.a(a||(a=(0,l.Z)(["p-2 rounded-md hover:bg-black/10 hover:dark:bg-white/10 cursor-pointer"])));let g=x.Z.a(r||(r=(0,l.Z)(["flex gap-2 rounded p-2.5 text-sm cursor-pointer focus:ring-0 hover:bg-token-main-surface-secondary radix-disabled:pointer-events-none radix-disabled:opacity-50 group items-center"]))),j=(0,x.Z)(g)(s||(s=(0,l.Z)(["border dark:border-white/20 min-h-0 hover:bg-gray-500/10 h-10 rounded-lg border-[rgba(0,0,0,0.1)]"]))),v=x.Z.div(o||(o=(0,l.Z)(["h-px bg-token-border-light my-1.5"]))),b=(0,x.Z)(g)(i||(i=(0,l.Z)(["",""])),e=>e.$active?"bg-token-sidebar-surface-secondary":"hover:bg-token-sidebar-surface-secondary")},56625:function(e,t,n){n.d(t,{W:function(){return p}});var a=n(89857),r=n(93951),s=n(31438),o=n(3551),i=n(66290),l=n(99976),c=n(61619),d=n(92379),u=n(62984),m=n(13490),x=n(651);function p(e){let{menuItemComponent:t}=e,n=(0,r.t)(),p=(0,i.Z)(),f=(0,d.useCallback)(()=>{l.A.logEvent(c.M.clickSidebarAccountPortalMenuItem),(0,a.MG)(p,"Sidebar account menu item")},[p]);return(0,x.jsxs)(x.Fragment,{children:[(null==n?void 0:n.hasPaidSubscription())&&(0,x.jsx)(t,{onClick:f,icon:m.wpi,children:(0,x.jsx)(u.Z,{id:"popoverNavigation.myPlan",defaultMessage:"My plan"})}),(null==n?void 0:n.canInteractWithGizmos())&&(0,x.jsx)(t,{onClick:()=>{l.A.logEvent(c.M.accountMenuClickMyGPTs),p((0,o.L7)())},icon:m.jdE,children:(0,x.jsx)(u.Z,{id:"popoverNavigation.myGpts",defaultMessage:"My GPTs"})}),(0,x.jsx)(t,{icon:m.A2w,onClick:()=>{s.vm.openModal(s.B.UserContext),l.A.logEvent(c.M.accountMenuClickCustomizeChatGPT)},children:(0,x.jsx)(u.Z,{id:"popoverNavigation.chatPreferences.1",defaultMessage:"Customize ChatGPT"})})]})}},52503:function(e,t,n){n.d(t,{b:function(){return p}});var a=n(98601),r=n(31438),s=n(3551),o=n(99976),i=n(61619),l=n(62984),c=n(68306),d=n(13490),u=n(651);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach(function(t){(0,a.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function p(e){let{menuItemComponent:t,routedMenuItemComponent:n}=e;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(n,{href:"/admin",icon:d.ZyV,children:(0,u.jsx)(l.Z,x({},f.myWorkspaceSettings))}),(0,u.jsx)(n,{href:(0,s.L7)(),onClick:()=>{o.A.logEvent(i.M.accountMenuClickMyGPTs)},icon:d.jdE,children:(0,u.jsx)(l.Z,x({},f.myGpts))}),(0,u.jsx)(t,{onClick:()=>{r.vm.openModal(r.B.UserContext),o.A.logEvent(i.M.accountMenuClickCustomizeChatGPT)},icon:d.A2w,children:(0,u.jsx)(l.Z,x({},f.chatPreferences))})]})}let f=(0,c.vU)({myWorkspaceSettings:{id:"workspacePopoverNavigation.myWorkspaceSettings",defaultMessage:"Manage workspace"},chatPreferences:{id:"B4s/Jz",defaultMessage:"Customize ChatGPT"},myGpts:{id:"workspacePopoverNavigation.myGpts",defaultMessage:"My GPTs"}})},15972:function(e,t,n){n.d(t,{Xl:function(){return h},yE:function(){return g}});var a=n(82821),r=n(31438),s=n(66290),o=n(99976),i=n(61619),l=n(13249),c=n(88667),d=n(92379),u=n(75172),m=n(62984),x=n(11550),p=n(24434),f=n(651);function h(e){!0===l.m.getItem(l.F.HasSeenNewChatModal)?e("/"):(l.m.setItem(l.F.HasSeenNewChatModal,!0),r.vm.openModal(r.B.NoAuthNewChat))}function g(){return(0,r.EV)(r.B.NoAuthNewChat)?(0,f.jsx)(j,{onClose:()=>{r.vm.closeModal(r.B.NoAuthNewChat)}}):null}function j(e){let{onClose:t}=e,n=(0,u.Z)(),r=(0,a.b)(),l=(0,s.Z)();return(0,d.useEffect)(()=>{c.m9.logEvent("chatgpt_new_chat_modal_shown"),o.A.logEvent(i.M.newChatModalShown)},[]),(0,f.jsxs)(p.Z,{isOpen:!0,title:n.formatMessage({id:"NewChatModal.title",defaultMessage:"New chat?"}),type:"success",onClose:t,children:[(0,f.jsx)("p",{className:"mb-6",children:(0,f.jsx)(m.Z,{id:"gV6y+5",defaultMessage:"Your current chat will no longer be accessible. <signup>Sign up</signup> or <login>log in</login> to save chats.",values:{signup:e=>(0,f.jsx)("a",{href:"#",className:"text-token-text-primary underline",onClick:e=>{e.preventDefault();let t=r({authType:"signup"});c.m9.logEvent("chatgpt_new_chat_modal_sign_up_link_clicked"),o.A.logSignUpButtonClicked({location:"New chat modal",provider:t})},children:e}),login:e=>(0,f.jsx)("a",{href:"#",className:"text-token-text-primary underline",onClick:e=>{e.preventDefault();let t=r({authType:"login"});c.m9.logEvent("chatgpt_new_chat_modal_log_in_link_clicked"),o.A.logLogInButtonClicked({location:"New chat modal",provider:t})},children:e})}})}),(0,f.jsxs)("div",{className:"flex flex-row justify-end space-x-2",children:[(0,f.jsx)(x.z,{onClick:()=>{c.m9.logEvent("chatgpt_new_chat_modal_cancel_button_clicked"),o.A.logEvent(i.M.newChatModalCancelButtonClicked),t()},color:"secondary",children:(0,f.jsx)(m.Z,{id:"NewChatModal.cancel",defaultMessage:"Cancel"})}),(0,f.jsx)(x.z,{onClick:()=>{c.m9.logEvent("chatgpt_new_chat_modal_new_chat_button_clicked"),o.A.logNewChatButtonClicked({location:"New Chat Modal New Chat Button"}),l("/"),t()},children:(0,f.jsx)(m.Z,{id:"NewChatModal.confirm",defaultMessage:"New chat"})})]})]})}},69539:function(e,t,n){n.d(t,{x:function(){return r}});var a=n(45120);function r(){let{layer:e}=(0,a.AH)("3637408529");return e.get("is_login_primary_button",!1)}}}]);
//# sourceMappingURL=9695-ae071aa74ccb966d.js.map