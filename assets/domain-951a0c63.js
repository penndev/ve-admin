import{c as J,e as h}from"./wafcdn-66a25f1f.js";import{r as g,f as n,o as _,c as v,g as e,w as a,j as d,t as w,a as D,F as b,v as U,E as y,x as O}from"./index-f333b6ed.js";import"./request-3892fec0.js";const j=D("br",null,null,-1),H={class:"dialog-footer"},Q={__name:"domain",setup(z){const c=g({data:[]}),S=()=>{J().then(u=>{c.value.data=u instanceof Array?u:[]})},C=g(null),l=g({visible:!1,title:"dialog",form:{},formTmp:{},formRule:{},formAction:"add"}),A=()=>{l.value.title="绑定新域名",l.value.visible=!0,l.value.formAction="add",l.value.form={},l.value.formTmp={domain:"",port:null,ssl:{port:null,crt:"",key:""},backend:{url:"",host:"",req_header:[],resp_header:[]},cache:{dir:"",rule:[]}}},N=u=>{l.value.title="修改 "+u.domain+" 的配置",l.value.visible=!0,l.value.formAction="edit",l.value.form=u,l.value.formTmp=JSON.parse(JSON.stringify(u)),l.value.formTmp.ssl.crt=atob(u.ssl.crt),l.value.formTmp.ssl.key=atob(u.ssl.key)},B=()=>{C.value.validate(u=>{if(u)if(l.value.formAction==="add")l.value.formTmp.ssl.crt=btoa(l.value.formTmp.ssl.crt),l.value.formTmp.ssl.key=btoa(l.value.formTmp.ssl.key),c.value.data.push(l.value.formTmp),h(c.value.data).then(t=>{l.value.visible=!1,y.info("新增完成")});else if(l.value.formAction==="edit"){l.value.formTmp.ssl.crt=btoa(l.value.formTmp.ssl.crt),l.value.formTmp.ssl.key=btoa(l.value.formTmp.ssl.key);for(const t in l.value.formTmp)l.value.form[t]=l.value.formTmp[t];h(c.value.data).then(t=>{l.value.visible=!1,y.info("修改完成")})}else y.error("提交错误");else y.error("请输入正确的数据！")})},E=u=>{O.confirm(`请仔细确认是否删除数据[${u}]?`,"警告",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"}).then(()=>{c.value.data.splice(u,1),h(c.value.data).then(t=>{l.value.visible=!1,y.info("删除完成")})})};return S(),(u,t)=>{const p=n("el-button"),V=n("el-table-column"),x=n("el-text"),$=n("el-link"),M=n("el-table"),R=n("el-main"),s=n("el-input"),i=n("el-form-item"),T=n("el-input-number"),k=n("el-tab-pane"),r=n("el-col"),q=n("el-row"),L=n("el-tabs"),P=n("el-form"),F=n("el-dialog");return _(),v(b,null,[e(R,{class:"ea-table"},{default:a(()=>[e(p,{type:"primary",icon:"Plus",onClick:A},{default:a(()=>[d(" 新增 ")]),_:1}),e(M,{data:c.value.data},{default:a(()=>[e(V,{label:"域名",prop:"domain",align:"center"}),e(V,{label:"端口(http)",prop:"port",align:"center"}),e(V,{label:"端口(https)",prop:"ssl.port",align:"center"}),e(V,{label:"源站",align:"center",width:"300"},{default:a(o=>[e(x,{type:"info"},{default:a(()=>[d(" 回源地址: ")]),_:1}),d(),e($,{type:"primary"},{default:a(()=>[d(w(o.row.backend.url),1)]),_:2},1024),d(),j,e(x,{type:"info"},{default:a(()=>[d(" 回源域名: ")]),_:1}),d(),e($,{type:"warning"},{default:a(()=>[d(w(o.row.backend.host),1)]),_:2},1024)]),_:1}),e(V,{label:"缓存目录",prop:"cache.dir",align:"center"}),e(V,{fixed:"right",label:"操作",width:"105"},{default:a(o=>[e(p,{link:"",type:"primary",onClick:f=>N(o.row)},{default:a(()=>[d(" 编辑 ")]),_:2},1032,["onClick"]),e(p,{link:"",type:"danger",onClick:f=>E(o.$index)},{default:a(()=>[d(" 删除 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1}),e(F,{modelValue:l.value.visible,"onUpdate:modelValue":t[12]||(t[12]=o=>l.value.visible=o),title:l.value.title,"close-on-click-modal":!1,"destroy-on-close":"","close-on-press-escape":"",center:""},{footer:a(()=>[D("span",H,[e(p,{onClick:t[11]||(t[11]=o=>l.value.visible=!1)},{default:a(()=>[d("取消")]),_:1}),e(p,{type:"primary",onClick:B},{default:a(()=>[d("确定")]),_:1})])]),default:a(()=>[e(P,{ref_key:"dialogRef",ref:C,"label-position":"left",model:l.value.formTmp,rules:l.value.formRule},{default:a(()=>[e(L,{type:"border-card"},{default:a(()=>[e(k,{label:"域名设置"},{default:a(()=>[e(i,{label:"域名",prop:"domain"},{default:a(()=>[e(s,{modelValue:l.value.formTmp.domain,"onUpdate:modelValue":t[0]||(t[0]=o=>l.value.formTmp.domain=o)},null,8,["modelValue"])]),_:1}),e(i,{label:"端口",prop:"port"},{default:a(()=>[e(T,{modelValue:l.value.formTmp.port,"onUpdate:modelValue":t[1]||(t[1]=o=>l.value.formTmp.port=o)},null,8,["modelValue"])]),_:1})]),_:1}),e(k,{label:"回源管理"},{default:a(()=>[e(i,{label:"回源URL",prop:"backend.url"},{default:a(()=>[e(s,{modelValue:l.value.formTmp.backend.url,"onUpdate:modelValue":t[2]||(t[2]=o=>l.value.formTmp.backend.url=o)},null,8,["modelValue"])]),_:1}),e(i,{label:"回源Host",prop:"backend.host"},{default:a(()=>[e(s,{modelValue:l.value.formTmp.backend.host,"onUpdate:modelValue":t[3]||(t[3]=o=>l.value.formTmp.backend.host=o)},null,8,["modelValue"])]),_:1}),e(i,{label:"回源请求头"},{default:a(()=>[(_(!0),v(b,null,U(l.value.formTmp.backend.req_header,(o,f)=>(_(),v(b,{key:f},[e(r,{span:11},{default:a(()=>[e(s,{modelValue:o.name,"onUpdate:modelValue":m=>o.name=m,placeholder:"名"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(r,{span:2,style:{"text-align":"center"}},{default:a(()=>[e(p,{icon:"Minus",circle:"",onClick:m=>l.value.formTmp.backend.req_header.splice(f,1)},null,8,["onClick"])]),_:2},1024),e(r,{span:11},{default:a(()=>[e(s,{modelValue:o.value,"onUpdate:modelValue":m=>o.value=m,placeholder:"值"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(r,{span:24,style:{height:"5px"}})],64))),128)),e(p,{type:"primary",icon:"Plus",circle:"",onClick:t[4]||(t[4]=o=>l.value.formTmp.backend.req_header.push({name:"Name",value:"Value"}))})]),_:1}),e(i,{label:"回源返回头"},{default:a(()=>[(_(!0),v(b,null,U(l.value.formTmp.backend.resp_header,(o,f)=>(_(),v(b,{key:f},[e(r,{span:11},{default:a(()=>[e(s,{modelValue:o.name,"onUpdate:modelValue":m=>o.name=m,placeholder:"名"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(r,{span:2,style:{"text-align":"center"}},{default:a(()=>[e(p,{icon:"Minus",circle:"",onClick:m=>l.value.formTmp.backend.resp_header.splice(f,1)},null,8,["onClick"])]),_:2},1024),e(r,{span:11},{default:a(()=>[e(s,{modelValue:o.value,"onUpdate:modelValue":m=>o.value=m,placeholder:"值"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(r,{span:24,style:{height:"5px"}})],64))),128)),e(p,{type:"primary",icon:"Plus",circle:"",onClick:t[5]||(t[5]=o=>l.value.formTmp.backend.resp_header.push({name:"Name",value:"Value"}))})]),_:1})]),_:1}),e(k,{label:"SSL"},{default:a(()=>[e(i,{label:"SSL端口",prop:"ssl.port"},{default:a(()=>[e(T,{modelValue:l.value.formTmp.ssl.port,"onUpdate:modelValue":t[6]||(t[6]=o=>l.value.formTmp.ssl.port=o)},null,8,["modelValue"])]),_:1}),e(q,null,{default:a(()=>[e(r,{span:11},{default:a(()=>[e(i,{label:"证书",prop:"ssl.crt"},{default:a(()=>[e(s,{modelValue:l.value.formTmp.ssl.crt,"onUpdate:modelValue":t[7]||(t[7]=o=>l.value.formTmp.ssl.crt=o),rows:"15",type:"textarea",placeholder:"crt证书文件"},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:11},{default:a(()=>[e(i,{label:"密钥",prop:"ssl"},{default:a(()=>[e(s,{modelValue:l.value.formTmp.ssl.key,"onUpdate:modelValue":t[8]||(t[8]=o=>l.value.formTmp.ssl.key=o),placeholder:"key私钥文件",rows:"15",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(k,{label:"缓存配置"},{default:a(()=>[e(i,{label:"缓存路径",prop:"cache.dir"},{default:a(()=>[e(s,{modelValue:l.value.formTmp.cache.dir,"onUpdate:modelValue":t[9]||(t[9]=o=>l.value.formTmp.cache.dir=o)},null,8,["modelValue"])]),_:1}),e(i,{label:"缓存规则"},{default:a(()=>[(_(!0),v(b,null,U(l.value.formTmp.cache.rule,(o,f)=>(_(),v(b,{key:f},[e(r,{span:11},{default:a(()=>[e(s,{modelValue:o.path,"onUpdate:modelValue":m=>o.path=m,placeholder:"名"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(r,{span:2,style:{"text-align":"center"}},{default:a(()=>[e(p,{icon:"Minus",circle:"",onClick:m=>l.value.formTmp.cache.rule.splice(f,1)},null,8,["onClick"])]),_:2},1024),e(r,{span:11},{default:a(()=>[e(T,{modelValue:o.time,"onUpdate:modelValue":m=>o.time=m,placeholder:"值(分钟)"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(r,{span:24,style:{height:"5px"}})],64))),128)),e(p,{type:"primary",icon:"Plus",circle:"",onClick:t[10]||(t[10]=o=>l.value.formTmp.cache.rule.push({path:"/example",time:1440}))})]),_:1})]),_:1}),e(k,{label:"安全配置"},{default:a(()=>[d(" 暂未开启 ")]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])],64)}}};export{Q as default};
