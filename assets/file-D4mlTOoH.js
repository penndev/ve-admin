import{f as ee,a as le,l as ae,d as te,u as oe,b as ne,c as re}from"./video-CcRzQUhc.js";import{f as u,o as F,c as U,g as e,w as l,j as i,C as ie,F as z,a as g,D as se,M as ue,_ as de,r as w,t as v,v as E,z as ce,A as fe,E as k,G as me,x as pe,h as _e,p as ve,k as ge}from"./index-BQq0jiqr.js";import{p as be}from"./Video-CTVGcSjQ.js";const ye=g("div",{class:"el-upload__tip"}," 仅允许上传视频媒体文件 ",-1),he=g("br",null,null,-1),we={__name:"upload",setup(C){const s=async d=>{d.onProgress({percent:0});const b=await ue(d.file,_=>{const r=parseInt(_*100);d.onProgress({percent:100-r})}),c=await ee({name:d.file.name,md5:b,size:d.file.size});if(typeof c.partCount!="number"||typeof c.partSize!="number")throw new Error("服务器返回错误数据");const f=Math.floor(d.file.size/c.partSize);for(let _=c.partCount;_<=f;_+=1){const r=_*c.partSize,N=r+c.partSize,x=d.file.slice(r,N),V=new FormData;V.append("currentPart",_),V.append("uploadID",b),V.append("uploadData",x),await le(V),d.onProgress({percent:parseInt(_/f*100)})}},M=async d=>{var b;try{await s(d)}catch(c){throw console.error(c),se({title:d.file.name,message:((b=c.response)==null?void 0:b.data)??c.message,type:"error",duration:0}),c}};return(d,b)=>{const c=u("el-button"),f=u("el-upload");return F(),U(z,null,[e(f,ie({class:"upload-demo","http-request":M,limit:100,multiple:!0,accept:"video/*"},d.$attrs),{tip:l(()=>[ye]),default:l(()=>[e(c,{type:"primary",icon:"Upload"},{default:l(()=>[i(" 点击上传 ")]),_:1})]),_:1},16),he],64)}}},ke=C=>(ve("data-v-5f19b3e8"),C=C(),ge(),C),Ve=ke(()=>g("br",null,null,-1)),Ce={class:"dialog-footer"},Se={class:"dialog-footer"},De={class:"dialog-footer"},qe={__name:"file",setup(C){const s=w({total:0,data:[],query:{limit:20,page:1,order:null,fileName:null,fileMd5:null},querySelect:{status:{"-2":"视频损坏","-1":"文件损坏",0:"上传中",1:"文件正常"}}}),M=o=>{s.value.query.fileName=null,s.value.query.fileMd5=null,s.value.query.order=null,f()},d=o=>{s.value.query.page=o,f()},b=o=>{s.value.query.limit=o,f()},c=({column:o,prop:t,order:y})=>{let p="";y==="descending"?p="-":y==="ascending"&&(p="+"),s.value.query.order=p+t,f()},f=()=>{ae(s.value.query).then(o=>{s.value.data=o.data,s.value.total=o.total})},_=w(null),r=w({visible:!1,title:"dialog",form:{},formRule:{fileName:[{required:!0,message:"文件名称",trigger:"blur"},{min:5,message:"文件名最少为5个字符",trigger:"blur"}]},formAction:"edit"}),N=o=>{r.value.title="创建数据",r.value.visible=!0,r.value.formAction="edit",r.value.form=o},x=o=>{fe.confirm("请仔细确认是否删除 "+o.fileName+" ?","警告",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"}).then(()=>{te({id:o.id}).then(t=>{k.warning(t),f()})})},V=()=>{_.value.validate(o=>{o?r.value.formAction==="edit"?(oe(r.value.form).then(t=>{r.value.visible=!1,k.info(t)}),r.value.visible=!1):k.info("提交错误"):k.error("请输入正确的数据！")})},D=w(!1),$=w({}),R=o=>{$.value={autoplay:!0,controls:!0,sources:[o],html5:{vhs:{cacheEncryptionKeys:!0}}},D.value=!0},B=o=>{open(o,"_bank")},A=()=>{k.success("上传成功！"),f()},n=w({visible:!1,title:"",form:{},formRule:{id:[{required:!0,message:"选择文件",trigger:"blur"}],transcodeId:[{required:!0,message:"选择编码器",trigger:"blur"}]},transcodeSelect:null}),G=async()=>{if(!n.value.transcodeSelect){const o=await ne({page:1,limit:999});n.value.transcodeSelect=o.data}},L=o=>{n.value.title=o.fileName,n.value.visible=!0,n.value.form=o},T=w(null),j=()=>{T.value.validate(o=>{o?(re({fileId:n.value.form.id,transcodeId:n.value.form.transcodeId,command:n.value.form.command}).then(t=>{k.success(t.message),n.value.visible=!1}),n.value.visible=!1):k.error("请输入正确的数据！")})};return f(),G(),(o,t)=>{const y=u("el-input"),p=u("el-form-item"),m=u("el-button"),I=u("el-form"),h=u("el-table-column"),H=u("el-tooltip"),J=u("el-link"),S=u("el-tag"),K=u("el-popover"),O=u("el-table"),Q=u("el-pagination"),W=u("el-main"),P=u("el-dialog"),X=u("el-input-number"),Y=u("el-option"),Z=u("el-select");return F(),U(z,null,[g("div",null,[e(I,{inline:!0},{default:l(()=>[e(p,{label:"名称"},{default:l(()=>[e(y,{modelValue:s.value.query.fileName,"onUpdate:modelValue":t[0]||(t[0]=a=>s.value.query.fileName=a),placeholder:"名称",clearable:""},null,8,["modelValue"])]),_:1}),e(p,{label:"校验码"},{default:l(()=>[e(y,{modelValue:s.value.query.fileMd5,"onUpdate:modelValue":t[1]||(t[1]=a=>s.value.query.fileMd5=a),placeholder:"MD5",clearable:""},null,8,["modelValue"])]),_:1}),e(p,null,{default:l(()=>[e(m,{type:"primary",icon:"search",onClick:f},{default:l(()=>[i(" 查询 ")]),_:1}),e(m,{type:"info",icon:"Refresh",onClick:M},{default:l(()=>[i(" 重置 ")]),_:1})]),_:1})]),_:1})]),e(W,{class:"ea-table"},{default:l(()=>[e(we,{"on-success":A}),e(O,{data:s.value.data,onSortChange:c},{default:l(()=>[e(h,{fixed:"",prop:"id",label:"ID",width:"80",sortable:"custom",align:"center"}),e(h,{prop:"fileName",label:"文件名","min-width":"160",align:"center"}),e(h,{prop:"fileMd5",label:"文件MD5","min-width":"110",align:"center"},{default:l(a=>[e(H,{class:"box-item",effect:"dark",content:a.row.fileMd5,placement:"top-end"},{default:l(()=>[g("span",null,v(a.row.fileMd5.substring(0,12))+"...",1)]),_:2},1032,["content"])]),_:1}),e(h,{prop:"status",label:"状态",align:"center"},{default:l(a=>[e(J,{type:a.row.status>0?"success":"danger"},{default:l(()=>[i(v(s.value.querySelect.status[a.row.status]),1)]),_:2},1032,["type"])]),_:1}),e(h,{label:"视频信息","min-width":"180",align:"center"},{default:l(a=>[e(S,{class:"ea-tag",type:"success"},{default:l(()=>[i(" 时长 "+v(E(me)(a.row.videoDuration)),1)]),_:2},1024),e(S,{class:"ea-tag",type:"info"},{default:l(()=>[i(" 帧率 "+v(a.row.videoFps),1)]),_:2},1024),e(S,{class:"ea-tag"},{default:l(()=>[i(" 分辨率 "+v(a.row.videoWidth)+"×"+v(a.row.videoHeight),1)]),_:2},1024),e(S,{class:"ea-tag",type:"info"},{default:l(()=>[i(" 码率 "+v(a.row.videoBitrate),1)]),_:2},1024),e(S,{class:"ea-tag",type:"success"},{default:l(()=>[i(" 大小 "+v(E(pe)(a.row.fileSize)),1)]),_:2},1024)]),_:1}),e(h,{prop:"createdAt",label:"创建日期","min-width":"170",align:"center"}),e(h,{fixed:"right",label:"操作",width:"200"},{default:l(a=>[e(K,{placement:"top-start",title:"Play",width:220,trigger:"hover"},{reference:l(()=>[e(m,{link:"",type:"info"},{default:l(()=>[i(" 预览 ")]),_:1})]),default:l(()=>[e(m,{onClick:q=>R(a.row.FilePath)},{default:l(()=>[i(" VideoJS ")]),_:2},1032,["onClick"]),e(m,{onClick:q=>B(a.row.FilePath)},{default:l(()=>[i(" Download ")]),_:2},1032,["onClick"])]),_:2},1024),e(m,{link:"",type:"warning",onClick:q=>L(a.row)},{default:l(()=>[i(" 转码 ")]),_:2},1032,["onClick"]),e(m,{link:"",type:"primary",onClick:q=>N(a.row)},{default:l(()=>[i(" 编辑 ")]),_:2},1032,["onClick"]),e(m,{link:"",type:"danger",onClick:q=>x(a.row)},{default:l(()=>[i(" 删除 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),Ve,e(Q,{background:"",layout:"total, sizes, prev, pager, next",total:s.value.total,"page-size":s.value.query.limit,onCurrentChange:d,onSizeChange:b},null,8,["total","page-size"])]),_:1}),e(P,{modelValue:r.value.visible,"onUpdate:modelValue":t[4]||(t[4]=a=>r.value.visible=a),title:r.value.title,"close-on-click-modal":!1,"destroy-on-close":"","close-on-press-escape":"",center:""},{footer:l(()=>[g("span",Ce,[e(m,{onClick:t[3]||(t[3]=a=>r.value.visible=!1)},{default:l(()=>[i("取消")]),_:1}),e(m,{type:"primary",onClick:V},{default:l(()=>[i("确定")]),_:1})])]),default:l(()=>[e(I,{ref_key:"dialogRef",ref:_,"label-width":"80px",model:r.value.form,rules:r.value.formRule},{default:l(()=>[e(p,{label:"名称",prop:"fileName"},{default:l(()=>[e(y,{modelValue:r.value.form.fileName,"onUpdate:modelValue":t[2]||(t[2]=a=>r.value.form.fileName=a)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"]),e(P,{modelValue:D.value,"onUpdate:modelValue":t[6]||(t[6]=a=>D.value=a),title:"播放",width:"40%","destroy-on-close":"",center:""},{footer:l(()=>[g("span",Se,[e(m,{type:"primary",onClick:t[5]||(t[5]=a=>D.value=!1)},{default:l(()=>[i(" 关闭 ")]),_:1})])]),default:l(()=>[e(be,{options:$.value},null,8,["options"])]),_:1},8,["modelValue"]),e(P,{modelValue:n.value.visible,"onUpdate:modelValue":t[11]||(t[11]=a=>n.value.visible=a),title:n.value.title,"destroy-on-close":"",center:""},{footer:l(()=>[g("span",De,[e(m,{type:"info",onClick:t[10]||(t[10]=a=>n.value.visible=!1)},{default:l(()=>[i("关闭 ")]),_:1}),e(m,{type:"primary",onClick:j},{default:l(()=>[i("确定")]),_:1})])]),default:l(()=>[e(I,{ref_key:"dialogTranscodeRef",ref:T,model:n.value.form,rules:n.value.formRule},{default:l(()=>[e(p,{label:"源文件",prop:"id"},{default:l(()=>[e(X,{modelValue:n.value.form.id,"onUpdate:modelValue":t[7]||(t[7]=a=>n.value.form.id=a),disabled:"",style:{display:"none"}},null,8,["modelValue"]),g("span",null,v(n.value.form.fileName),1)]),_:1}),e(p,{label:"编码器",prop:"transcodeId"},{default:l(()=>[e(Z,{modelValue:n.value.form.transcodeId,"onUpdate:modelValue":t[8]||(t[8]=a=>n.value.form.transcodeId=a),filterable:"",placeholder:"输入编码器名称"},{default:l(()=>[(F(!0),U(z,null,ce(n.value.transcodeSelect,a=>(F(),_e(Y,{key:a.id,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(p,{label:"FFMPEG参数",prop:"command"},{default:l(()=>[e(y,{modelValue:n.value.form.command,"onUpdate:modelValue":t[9]||(t[9]=a=>n.value.form.command=a),rows:"3",type:"textarea",placeholder:"FFMPEG自定义的参数 按行分割"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])],64)}}},xe=de(qe,[["__scopeId","data-v-5f19b3e8"]]);export{xe as default};