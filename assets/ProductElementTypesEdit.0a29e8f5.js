import{j as S,i as g,r as j,d as h,w as P,k as d,l as i,D as _,e as u,q as c,t as r,v as k,x as N,u as l,F as B,G as D,m as v,N as w,P as I,h as $}from"./naive-ui.871da52f.js";import{a as q,u as M,H}from"./index.c5f173c7.js";function G(t={},e=""){return!t.appSettings||!t.appSettings.staticsFileUrl?[]:t.Statics?e?t.Statics[e]:t.Statics:t.$api?t.$api.get(t.appSettings.staticsFileUrl,{baseURL:window.location.origin}).then(a=>(t.Statics=a,e?t.Statics[e]:t.Statics)):fetch(t.appSettings.staticsFileUrl).then(a=>{if(!a.ok)throw new Error("HTTP error "+a.status);return a.json()}).then(a=>(t.Statics=a,e?t.Statics[e]:t.Statics)).catch(function(a){throw new Error("HTTP error "+a)})}const V={class:"action cols"},W={class:"column col-6"},L={class:"form__buttons"},O={class:"column col-6 align-right"},Y={class:"form__buttons"},R={class:"cols"},z=S({props:{structure:null,storeModuleName:null,id:null},setup(t){const e=t,a=q(),{t:p}=M();G(g("global"));const m=j("primary"),n=h({get(){return e.storeModuleName&&a.state[e.storeModuleName].currentElement?a.state[e.storeModuleName].currentElement:{}},set(o){m.value="warning"}}),x=h(()=>e.structure||Object.keys(n.value).map(o=>({key:o,label:p("label."+o),disabled:o==="id"}))||[]);h(()=>a.state[e.storeModuleName].options),e.storeModuleName&&e.id&&y(),P(()=>e.id,o=>y(o));function y(o=e.id){typeof a!==void 0&&a.dispatch(e.storeModuleName+"/getInfo",{queryParameters:{id:o}})}function C(){a.dispatch(e.storeModuleName+"/update",{queryParameters:n.value})}return(o,K)=>{const b=d("cp-button"),E=d("cp-icon"),F=d("cp-form-item"),T=d("cp-form");return i(),_("div",null,[u(T,{onSubmit:I(C,["prevent"])},{default:c(()=>[r("div",V,[r("div",W,[r("div",L,[u(b,{"attr-type":"submit",type:m.value},{default:c(()=>[k(N(l(p)("text.save")),1)]),_:1},8,["type"])])]),r("div",O,[r("div",Y,[u(b,null,{icon:c(()=>[u(E,{color:"#000"},{default:c(()=>[u(l(H))]),_:1})]),default:c(()=>[k(" "+N(l(p)("text.help")),1)]),_:1})])])]),r("div",R,[(i(!0),_(B,null,D(l(x),(s,U)=>(i(),_("div",{class:"column col-12 col-xs-6 col-md-4",key:U},[s.withoutItemCover?(i(),v(w(s.render?s.render:"cp-input"),{key:0,value:l(n)[s.key],"onUpdate:value":f=>l(n)[s.key]=f,disabled:s.disabled},null,8,["value","onUpdate:value","disabled"])):(i(),v(F,{key:1,label:s.label,path:s.key},{default:c(()=>[(i(),v(w(s.render?s.render:"cp-input"),{value:l(n)[s.key],"onUpdate:value":f=>l(n)[s.key]=f,disabled:s.disabled},null,8,["value","onUpdate:value","disabled"]))]),_:2},1032,["label","path"]))]))),128))])]),_:1},8,["onSubmit"])])}}}),A=r("h1",null,"Product element type - Edit",-1),J=r("hr",null,null,-1),Z=S({props:{elementId:null},setup(t){const{t:e}=M(),a=[{key:"name",label:"Name",placeholder:"Enter name",validation:{required:!0,message:e("text.please_input_email"),trigger:"blur"}},{key:"note",label:"Note",validation:null},{key:"file_type_id",label:"File type",validation:null,render:$(d("cp-select"),{placeholder:"",filterable:!0,options:[{label:"Drive My Car",value:"1"},{label:"Norwegian Wood",value:"2"},{label:"You Won't See",value:3},{label:"Nowhere Man",value:5},{label:"Think For Yourself",value:6},{label:"The Word",value:7}]})},{key:"spec_group_id",label:"Group",validation:null}];return(p,m)=>{const n=z;return i(),_("div",null,[A,J,u(n,{storeModuleName:"productElementTypes",structure:a,id:t.elementId},null,8,["id"])])}}});export{Z as _};
