import{r as u,o as _,l as d,w as e,b as s,a as t,e as l,O as f}from"./app.e52dc8ce.js";import{u as h}from"./useNotifications.3456b1a2.js";import{a as v,_ as x}from"./PrimaryButton.d639b606.js";import{_ as U}from"./Input.0bb1841e.js";import{U as k}from"./Services.072a15d5.js";import{H as y}from"./HorizontalGroup.f1537ff9.js";import{_ as V,a as b}from"./ReadDocHelp.2b8d1a0f.js";import"./PageHeader.66b59be4.js";import"./Tab.2dc56699.js";import"./Facebook.38a530f7.js";const g={class:"flex items-center"},$={class:"mr-xs"},N=s("span",null,"Unsplash",-1),S=s("p",null,"With Unsplash you can use external stock photos directly in Mixpost.",-1),w=s("p",null,[s("a",{href:"https://unsplash.com/oauth/applications",class:"link",target:"_blank"},"Create an App on Unsplash"),l(". ")],-1),B=l("API Key"),C={class:"w-full"},O=l("Save"),M={__name:"UnsplashServiceForm",props:{form:{required:!0,type:Object}},setup(o){const c=o,{notify:i}=h(),a=u({}),p=()=>{a.value={},f.put(route("mixpost.services.update",{service:"unsplash"}),c.form,{preserveScroll:!0,onSuccess(){i("success","Unsplash credentials have been saved")},onError:n=>{a.value=n}})};return(n,r)=>(_(),d(x,null,{title:e(()=>[s("div",g,[s("span",$,[t(k,{class:"text-black"})]),N])]),description:e(()=>[S,w,t(V,{href:"https://mixpost.app/docs/1.0.0/unsplash",class:"mt-xs"})]),default:e(()=>[t(y,{class:"mt-lg"},{title:e(()=>[B]),default:e(()=>[s("div",C,[t(U,{modelValue:o.form.client_id,"onUpdate:modelValue":r[0]||(r[0]=m=>o.form.client_id=m),type:"text",autocomplete:"off"},null,8,["modelValue"]),t(b,{message:a.value.client_id},null,8,["message"])])]),_:1}),t(v,{onClick:p,class:"mt-lg"},{default:e(()=>[O]),_:1})]),_:1}))}};export{M as default};