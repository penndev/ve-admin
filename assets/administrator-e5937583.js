import{s as g}from"./request-bca34174.js";import{g as H}from"./rolepermission-68cf2839.js";import{r as y,f as i,o as v,c as C,g as l,w as o,j as m,a as x,h,q as S,t as R,F as A,v as J,s as K,E as _}from"./index-a0b64621.js";const O=s=>g({url:"/system/admin",method:"get",params:s}),W=s=>g({url:"/system/admin",method:"post",data:s}),X=s=>g({url:"/system/admin",method:"put",data:s}),Y=s=>g({url:"/system/admin",method:"delete",params:s}),Z=x("br",null,null,-1),ee={class:"dialog-footer"},oe={__name:"administrator",setup(s){const u=y({total:0,query:{limit:20,page:1,order:null,email:null},data:[]}),q=()=>{u.value.query.email=null,d()},U=n=>{u.value.query.page=n,d()},B=n=>{u.value.query.limit=n,d()},D=({column:n,prop:a,order:c})=>{let r="";c==="descending"?r="-":c==="ascending"&&(r="+"),u.value.query.order=r+a,d()},d=()=>{O(u.value.query).then(n=>{u.value.data=n.data,u.value.total=n.total})},V=y(null),e=y({visible:!1,title:"dialog",form:{},formRule:{email:[{required:!0,message:"邮箱",trigger:"blur"},{min:5,message:"用户名最少为5个字符",trigger:"blur"}],adminRoleId:[{required:!0,message:"角色",trigger:"blur"}]},formAction:"add",roleSelect:{value:null,loading:!1,options:[]}}),I=()=>{e.value.title="创建数据",e.value.visible=!0,e.value.formAction="add",e.value.form={}},z=n=>{n.adminRoleId<1||(e.value.title="创建数据",e.value.visible=!0,e.value.formAction="edit",e.value.form=n)},E=n=>{K.confirm("请仔细确认是否删除?","警告",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"}).then(()=>{Y({id:n}).then(a=>{_.warning(a),d()})})},N=()=>{V.value.validate(n=>{n?e.value.formAction==="add"?W(e.value.form).then(a=>{e.value.visible=!1,_.info(a),d()}):e.value.formAction==="edit"?(X(e.value.form).then(a=>{e.value.visible=!1,_.info(a),d()}),e.value.visible=!1):_.info("提交错误"):_.error("请输入正确的数据！")})},T=async n=>{const a=await H({page:1,limit:20,name:n});e.value.roleSelect.options=a.data},F=async n=>{e.value.form.adminRoleId=n.id,e.value.form.AdminRole=n};return d(),(n,a)=>{const c=i("el-input"),r=i("el-form-item"),p=i("el-button"),k=i("el-form"),f=i("el-table-column"),w=i("el-switch"),L=i("el-table"),$=i("el-pagination"),M=i("el-main"),P=i("el-link"),j=i("el-option"),Q=i("el-select"),G=i("el-dialog");return v(),C(A,null,[l(k,{inline:!0},{default:o(()=>[l(r,{label:"管理员"},{default:o(()=>[l(c,{modelValue:u.value.query.email,"onUpdate:modelValue":a[0]||(a[0]=t=>u.value.query.email=t),placeholder:"管理员邮箱",clearable:""},null,8,["modelValue"])]),_:1}),l(r,null,{default:o(()=>[l(p,{type:"primary",icon:"search",onClick:d},{default:o(()=>[m(" 查询 ")]),_:1}),l(p,{type:"info",icon:"Refresh",onClick:q},{default:o(()=>[m(" 重置 ")]),_:1})]),_:1})]),_:1}),l(M,{class:"ea-table"},{default:o(()=>[l(p,{type:"primary",icon:"Plus",onClick:I},{default:o(()=>[m(" 新增 ")]),_:1}),l(L,{data:u.value.data,style:{width:"100%"},onSortChange:D},{default:o(()=>[l(f,{prop:"id",label:"ID",width:"80",sortable:"custom"}),l(f,{prop:"email",label:"邮箱","min-width":"240"}),l(f,{prop:"nickname",label:"名称","min-width":"160"}),l(f,{prop:"AdminRole.name",label:"权限","min-width":"160"}),l(f,{prop:"status",label:"状态","min-width":"120"},{default:o(t=>[l(w,{modelValue:t.row.status,"onUpdate:modelValue":b=>t.row.status=b,"active-value":1,"inactive-value":0,size:"large","inline-prompt":"","active-text":"启用","inactive-text":"禁用",disabled:!0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(f,{prop:"createdAt",label:"创建日期",width:"200"}),l(f,{fixed:"right",label:"操作",width:"120"},{default:o(t=>[l(p,{link:"",type:"primary",onClick:b=>z(t.row)},{default:o(()=>[m(" 编辑 ")]),_:2},1032,["onClick"]),l(p,{link:"",type:"danger",onClick:b=>E(t.row.id)},{default:o(()=>[m(" 删除 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),Z,l($,{background:"",layout:"total, sizes, prev, pager, next",total:u.value.total,"default-page-size":u.value.query.limit,onCurrentChange:U,onSizeChange:B},null,8,["total","default-page-size"])]),_:1}),l(G,{modelValue:e.value.visible,"onUpdate:modelValue":a[7]||(a[7]=t=>e.value.visible=t),title:e.value.title,"close-on-click-modal":!1,"destroy-on-close":"","close-on-press-escape":"",center:""},{footer:o(()=>[x("span",ee,[l(p,{onClick:a[6]||(a[6]=t=>e.value.visible=!1)},{default:o(()=>[m("取消")]),_:1}),l(p,{type:"primary",onClick:N},{default:o(()=>[m("确定")]),_:1})])]),default:o(()=>[l(k,{ref_key:"dialogRef",ref:V,model:e.value.form,rules:e.value.formRule},{default:o(()=>[l(r,{label:"邮箱",prop:"email"},{default:o(()=>[l(c,{modelValue:e.value.form.email,"onUpdate:modelValue":a[1]||(a[1]=t=>e.value.form.email=t)},null,8,["modelValue"])]),_:1}),e.value.formAction=="add"?(v(),h(r,{key:0,label:"密码",prop:"passwd"},{default:o(()=>[l(c,{modelValue:e.value.form.passwd,"onUpdate:modelValue":a[2]||(a[2]=t=>e.value.form.passwd=t)},null,8,["modelValue"])]),_:1})):S("",!0),l(r,{label:"昵称",prop:"nickname"},{default:o(()=>[l(c,{modelValue:e.value.form.nickname,"onUpdate:modelValue":a[3]||(a[3]=t=>e.value.form.nickname=t)},null,8,["modelValue"])]),_:1}),l(r,{label:"权限",prop:"adminRoleId"},{default:o(()=>[e.value.form.AdminRole?(v(),h(P,{key:0,type:"primary"},{default:o(()=>[m(R(e.value.form.AdminRole.name)+" ["+R(e.value.form.adminRoleId)+"] | ",1)]),_:1})):S("",!0),m("   "),l(Q,{modelValue:e.value.roleSelect.value,"onUpdate:modelValue":a[4]||(a[4]=t=>e.value.roleSelect.value=t),filterable:"",remote:"","remote-show-suffix":"",placeholder:"输入权限名称来搜索权限列表","remote-method":T,loading:e.value.roleSelect.loading,onChange:F},{default:o(()=>[(v(!0),C(A,null,J(e.value.roleSelect.options,t=>(v(),h(j,{key:t.id,label:t.name,value:t},null,8,["label","value"]))),128))]),_:1},8,["modelValue","loading"])]),_:1}),l(r,{label:"状态",prop:"status"},{default:o(()=>[l(w,{modelValue:e.value.form.status,"onUpdate:modelValue":a[5]||(a[5]=t=>e.value.form.status=t),"active-value":1,"inactive-value":0,"active-text":"启用账号","inactive-text":"禁用账号"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])],64)}}};export{oe as default};