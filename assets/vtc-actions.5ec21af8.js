import{u as a,C as u,b as l,O as f,T as d,c as m}from"./index.c5f173c7.js";import{bk as b,bp as y}from"./naive-ui.871da52f.js";function _(i=""){if(!i)return;const{copyToClipboard:o}=m(),n=b(),c=y(),{t}=a();return{copyId:{title:t("text.copy_ids"),icon:u,async:!1,callback:function(e){const s=Array.isArray(e)?e.join(","):e;return o(s),n.success("Choosed numbers: "+s),"Choosed numbers: "+s}},disableOff:{title:t("text.disable_off"),icon:l,async:!0,callback:function(e){e.forEach((s,r)=>{setTimeout(()=>{[2,3].includes(r)?n.error("Failed with: "+s):n.success("Changed successfully: "+s)},500)})}},editInBlankWindow:{title:t("text.edit_in_blank"),icon:f,async:!1,callback:function(e){if(!+e)return;const s=window.location.href+(window.location.href.endsWith("/")?"":"/");return window.open(s+e,"_blank"),!0}},removeItem:{title:t("text.remove_item"),icon:d,async:!0,callback:function(e){!+e||c.warning({title:t("text.remove_item"),content:t("text.are_you_sure"),positiveText:t("text.yes"),negativeText:t("text.cancel"),onPositiveClick:()=>(n.success(t("messages.successfuly_removed")),!0)})}}}[i]||{}}export{_ as u};
