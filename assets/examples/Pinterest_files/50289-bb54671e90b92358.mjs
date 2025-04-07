"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[50289,69358],{203445:(e,t,n)=>{var a;n.r(t),n.d(t,{default:()=>l});let r={fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useFragmentWithoutSuspenseDONOTUSENoOpQuery",selections:a=[{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"__id",storageKey:null}]}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"useFragmentWithoutSuspenseDONOTUSENoOpQuery",selections:a},params:{cacheID:"9d9a0b4361770e7457fb22c606b3e5f1",id:null,metadata:{},name:"useFragmentWithoutSuspenseDONOTUSENoOpQuery",operationKind:"query",text:null}};r.hash="de96be885f09f9032378528575433b38";let l=r;!function(e){if("query"===e.params.operationKind){if(window.__pwsCacheRelayConcreteRequest)window.__pwsCacheRelayConcreteRequest(e);else{let t=[e.params.name,e.params.id].join(":");window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__=window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__||{},window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__[t]=e}}}(r.default||r)},49276:(e,t,n)=>{n.d(t,{Z:()=>a});function a(e,t){throw Error(t??`Unexpected value: ${JSON.stringify(e)}`)}},988774:(e,t,n)=>{n.d(t,{Z:()=>x,G:()=>M});var a=n(441143),r=n.n(a),l=n(244311);let i={vDASHHEVCSLCONTROL:"V_DASH_HEVC_SL_CONTROL",vHLSHEVC2SEC:"V_HLS_HEVC_2_SEC",vHLSHEVCSLCONTROL:"V_HLS_HEVC_SL_CONTROL",vHLSSINGLEFILECMAFEXP:"V_HLS_SINGLE_FILE_CMAF_EXP",vHLSSINGLEFILECONTROL:"V_HLS_SINGLE_FILE_CONTROL",vHLSSINGLEFILETSEXP:"V_HLS_SINGLE_FILE_TS_EXP",vHLSSLCONTROL:"V_HLS_SL_CONTROL",vHLSV3:"V_HLSV3",vHLSV3EXP:"V_HLSV3_EXP",vHLSV3MOBILE:"V_HLSV3_MOBILE",vHLSV3WEB:"V_HLSV3_WEB",vHLSV4:"V_HLSV4",vLOWBITRATEEXPHLSHEVCCONTROL:"V_LOW_BITRATE_EXP_HLS_HEVC_CONTROL",vLOWBITRATEEXPHLSHEVCLOB:"V_LOW_BITRATE_EXP_HLS_HEVC_LOB",vLOWBITRATEEXPHLSHEVCLQS:"V_LOW_BITRATE_EXP_HLS_HEVC_LQS"},o=/(\d\d0P)(\d\d0K)/,u=/QVBR(8|10)/,c=/(EXP\d?|ADSHQ|AVC|DASH|MANI|HIGHQUAL|HEVC|HLS|H265|H264|720P?|MP4|ENABLED|CONTROL|PROD|T\d|Q?VBR\d*|AUTOABR|MEDIACONVERT|QUALITY|REARRANGED|REMHIGHRES|VISIONULAR|480$|640$|V2$|\dSEC$|\d\d0P\d\d0K$)/g,s=/^v/,d=e=>i[e]??e.replace(c,"_$1").replace(o,"$1_$2").replace(u,"QVBR_$1").replace("ADSHQ","ADS_HQ").replace("HIGHQUAL","HIGH_QUAL").replace("REMHIGHRES","REM_HIGH_RES").replace(s,"V"),p=/[A-Z]/g,f=e=>e.replace(p,e=>`_${e.toLowerCase()}`),g=/^_/,y=e=>e.replace(g,""),m=e=>y(f(e)),h=["actionOptions","feedbackText","selectedItem","savedInfo","undoCallbackProps"],S=["boardId","localPinId","showFeedback","showFeedbackOverlay","sectionId","subTitle","viewType","viewParameter"],L=(e,t)=>{if(S.includes(e))return e;switch(e){case"entityId":return"id";case"__id":return r()(t.node_id,"node_id is missing. Please only select the __id field on objects which have an id field."),"node_id";default:return m(e)}},_=e=>"StoryPinPage"===e||"StoryPinImageBlock"===e,k=(e,t,n)=>{if(_(n)){if("images"===e)return"image";if("imagesAdjusted"===e)return"image_adjusted"}if("PinTagChipImagesPerSpec"===n&&"image"===e)return"images";if("VideoDetail"===t)return d(e);if(h.includes(e))return e;switch(e){case"reactionCountsData":return"reaction_counts";case"videoData":return"video";case"formattedCloseupDescription":return"formatted_description";case"annotationsWithLinksArray":return"annotations_with_links";default:return m(e)}},E=(e,t)=>{switch(e){case"reactionType":return"string"==typeof t?Number(t):t;case"campaignId":case"pinPromotionId":return"number"==typeof t?String(t):t;default:return t}},I=(e,t,n)=>"Video"===t&&"duration"===e?n?.duration!=null?n.duration:Object.values(n?.video_list||{}).find(e=>e?.duration!=null)?.duration:"__typename"===e?t:E(e,n?.[L(e,n)]),C=({untypedInput:e,concreteType:t})=>{if(!e)return null;switch(r()("object"==typeof e,"legacy data must be an object"),t){case"AnnotationsWithLinks":return Object.entries(e).map(([e,t])=>({name:t.name,url:t.url}));case"ReactionCountModel":return Object.entries(e).map(([e,t])=>({reaction_type:e,reaction_count:t}));case"PinThroughProperties":case"ThroughProperties":case"TrackingParamsMap":return Object.entries(e).map(([e,t])=>({key:e,data:t}));default:if(Array.isArray(e))return e;return Object.entries(e).map(([e,t])=>({key:e,value:t}))}},A=({args:e,name:t})=>{let n=e.find(e=>e.name===t);return n&&"string"==typeof n.value?n.value:null},b=(e,t,n)=>{let{args:a,name:l,plural:i}=n;if("PinTagChipImagesPerSpec"===t&&"image"===l)return e?.images?.["750x"];let o=e?.[k(l,n.concreteType,t)];if(!o)return o;let u=A({args:a??[],name:"spec"});if(u){if(r()("object"==typeof o,"value must be an object"),_(t)){let{dominant_color:e,images:t}=o;if(!t)return t;r()("object"==typeof t,"images must be an object");let n=t["orig"===u?"originals":u];return n&&e?{...n,dominant_color:e}:n}return i&&Array.isArray(o)?o.map(e=>e[u]).filter(e=>null!=e):o[u]}return o},R={HeadingBlock:"StoryPinHeadingBlock",IngredientBlock:"StoryPinIngredientBlock",InstantContentURLNavigateAction:"InstantContentActionUrlNavigate",InstantContentHeaderBlock:"InstantContentHeader",InstantContentParagraphBlock:"InstantContentParagraph",InstantContentTextBlock:"InstantContentText",InstantContentHeadingBlock:"InstantContentHeading",InstantContentImageBlock:"InstantContentImage",InstantContentVideoBlock:"InstantContentVideo",InstantContentTableBlock:"InstantContentTable",InstantContentGroupBlock:"InstantContentGroup",InstantContentOrderedListBlock:"InstantContentOrderedList",InstantContentUnorderedListBlock:"InstantContentUnorderedList",InstantContentSectionBlock:"InstantContentSection",InstantContentSeparatorBlock:"InstantContentSeparator",InstantContentUserBlock:"InstantContentUser",InstantContentWebBlock:"InstantContentWeb",InstantContentPromotedWebBlock:"InstantContentPromotedWeb",LinkBlock:"StoryPinLinkBlock",ParagraphBlock:"StoryPinParagraphBlock",SupplyBlock:"StoryPinSupplyBlock",TextBlock:"StoryPinTextBlock",DescriptionString:"FormattedDescriptionParagraphComponent",DescriptionHeader:"FormattedDescriptionHeaderComponent",DescriptionPoints:"FormattedDescriptionPointsComponent",DescriptionStringBold:"FormattedDescriptionBoldComponent",DescriptionTable:"FormattedDescriptionTableComponent",DescriptionSpecs:"FormattedDescriptionSpecsComponent",RichPinProductMetadata:"RichProductMetadata",ConversationMessage:"Message"},P={tempmessage:"message"},D=["article","board","pin","story"],O=e=>"schema"in e&&"string"==typeof e.schema&&D.includes(e.schema),T=(e,t)=>(R[e]??e).toLowerCase()===(P[t]??t),w={0:"StoryPinParagraphBlock",1:"StoryPinHeadingBlock",2:"StoryPinImageBlock",3:"StoryPinVideoBlock",4:"StoryPinLinkBlock",5:"StoryPinIngredientBlock",6:"StoryPinSupplyBlock",7:"StoryPinListBlock",8:"StoryPinKeyValueBlock",9:"StoryPinTextBlock",11:"StoryPinMusicBlock",12:"StoryPinMentionStickerBlock",13:"StoryPinProductStickerBlock",14:"StoryPinStaticStickerBlock",15:"StoryPinAnimatedStickerBlock",16:"StoryPinCommentReplyBlock",17:"StoryPinVirtualTryOnMakeupStickerBlock",18:"StoryPinAdBlock",19:"StoryPinGenericInteractiveStickerBlock"},H=/_/g,B=e=>"schema"in e&&"string"==typeof e.schema?e.schema.toLowerCase():"string"==typeof e.type?e.type.replace(H,"").toLowerCase():"number"==typeof e.block_type?w[e.block_type].toLowerCase():void 0;var v=n(773876),F=n(378019),V=n(532321),N=n(357021),U=n(415787);let M=Symbol("inlineFragmentSpread"),$=({conditionContext:e,fragmentName:t,mutableOutput:n,parentType:a,selections:l,legacyData:i,paginationInfo:o,refetchInfo:u,getDataFromRedux:c})=>{l.forEach(l=>{switch(l.kind){case"ScalarField":{let{alias:e,name:t}=l;n[e??t]=I(t,a,i);break}case"LinkedField":{let{alias:s,name:d,concreteType:p,plural:f,selections:g}=l,y=s??d,m=b(i,a,l);if(null==m){n[y]=m;return}if(f){let a=C({untypedInput:m,concreteType:p}),l=n[y];r()(!l||Array.isArray(l),"plural data must be an array"),n[y]=a?.filter(Boolean).map((n,a)=>{let r=l?.[a]??{};return $({conditionContext:e,fragmentName:t,mutableOutput:r,parentType:p,selections:g,legacyData:n,refetchInfo:u,paginationInfo:o,getDataFromRedux:c}),r})}else{r()("object"==typeof m,`Value for ${d} must be an object${p?` with type ${p}`:""}, but a ${typeof m} is given`);let a=n[y]??{};n[y]=a,$({conditionContext:e,fragmentName:t,mutableOutput:a,parentType:p,selections:g,legacyData:m,refetchInfo:u,paginationInfo:o,getDataFromRedux:c})}break}case"InlineFragment":{let{abstractKey:a,type:s,selections:d}=l;if(r()(null!=s&&null===a,"We only support using inline fragment to refine to concrete types for now. Contact @jackhsu or @robertbalicki"),null==i)break;let p=i;O(p)&&(p=c(p.id,p.schema)??i);let f=B(p);null!=f&&T(s,f)&&$({conditionContext:e,fragmentName:t,mutableOutput:n,parentType:s,selections:d,legacyData:p,paginationInfo:o,refetchInfo:u,getDataFromRedux:c});break}case"Condition":{let{condition:r,selections:s}=l,d=!0;"isAuth"===r?d=e.isAuth===l.passingValue:"isDesktop"===r&&(d=e.isDesktop===l.passingValue),d&&$({conditionContext:e,fragmentName:t,mutableOutput:n,parentType:a,selections:s,legacyData:i,paginationInfo:o,refetchInfo:u,getDataFromRedux:c});break}case"FragmentSpread":(0,F.I9)(n,{kind:"LegacyData",singularLegacyData:i,refetchInfo:u,paginationInfo:o});break;case"ClientExtension":$({conditionContext:e,fragmentName:t,mutableOutput:n,parentType:a,selections:l.selections,legacyData:i,paginationInfo:o,refetchInfo:u,getDataFromRedux:c});break;case"InlineDataFragmentSpread":{let t={},{selections:r,name:s}=l;$({conditionContext:e,fragmentName:s,mutableOutput:t,parentType:a,selections:r,legacyData:i,paginationInfo:o,refetchInfo:u,getDataFromRedux:c}),n[M]||(n[M]={}),n[M][s]=t;break}case"Defer":case"Stream":case"ActorChange":case"FlightField":case"ModuleImport":case"RelayResolver":case"RequiredField":throw Error(`The selection type '${l.kind}' is not supported yet. Contact @jackhsu or @robertbalicki`);default:throw Error(`Unexpected selection type '${l.kind}'`)}})},W=new Set;function x({conditionContext:e,fragment:t,legacyData:n,paginationInfo:a,refetchInfo:i,stableReferencesExperimentStatus:o,getDataFromRedux:u}){let c;let s=(0,l.getFragment)(t);try{c=function({conditionContext:e,fragment:t,legacyData:n,paginationInfo:a,refetchInfo:l,getDataFromRedux:i}){if(null==t.abstractKey){let e=null!=n?B(n):null;null!=e&&r()(T(t.type,e),`fragment data type '${t.type}' does not match legacy data type '${e}'. See http://pinch.pinadmin.com/fragment-data-type-does-not-match-legacy-data-type.`)}let o={};return $({conditionContext:e,fragmentName:t.name,mutableOutput:o,parentType:t.type,selections:t.selections,legacyData:n,paginationInfo:a,refetchInfo:l,getDataFromRedux:i}),o}({conditionContext:e,fragment:s,legacyData:n,paginationInfo:a,refetchInfo:i,getDataFromRedux:u})}catch(t){throw W.has(s.name)||(W.add(s.name),(0,U.nP)("autoLegacyAdapter.erroredReadResults",{sampleRate:1,tags:{fragmentName:s.name,rootId:n.id,rootType:n.type,url:window.location.href,isAuth:e.isAuth}})),t}let d=n.id;if(!o?.shouldCalculateStableReferences||!d)return c;let[p,f]=(0,V.lg)(()=>{let e=(0,N._0)(s,n.id);return(0,v.Z)({cacheKey:e,data:c})});return((0,U.LY)("autoLegacyAdapter.stableReferences.duration",f,{sampleRate:.1,tags:{fragmentName:s.name}}),o?.shouldUseStableReferences)?p:c}},286102:(e,t,n)=>{n.d(t,{Z:()=>function e(t,n,i=null){let o={};return!function t(n,i,o,u){let c=function(e,t=null){let[n,a]=e.reduce((e,t)=>("InlineFragment"===t.kind?e[0].push(t):e[1].push(t),e),[[],[]]);if(1===n.length){let[e,r]=l(a);if(0===r.length){let[a,r]=l(n[0].selections),i=[...e,...a];return 0===i.length?{kind:"Uncategorized"}:{kind:"InlineFragmentWithTypename",typenameAliases:i,selections:r,concreteType:n[0].type,remainingPathCount:t}}}else if(1===e.length&&e[0]?.kind==="Condition"){let n=e[0];if(!n||"Condition"!==n.kind)throw Error("Error on @skip/@include directive");return{kind:"OnlyConditionWrapper",selections:n.selections,remainingPathCount:t}}else if(1===e.length&&"LinkedField"===e[0].kind){let n=e[0],a=n.concreteType??null;if(n.plural&&1!==t)return{kind:"Uncategorized"};if(null==a)return{kind:"OnlyLinkedFieldAndTypename",selections:n.selections,name:n.name,concreteTypeAndAliases:null,remainingPathCount:null==t?null:t-1};let[r,i]=l(n.selections);if(1===t){let e=n.alias??n.name,{pageInfoSelection:t,edgeSelection:a}=function(e){if(0===e.length||e.length>2||e.some(e=>"LinkedField"!==e.kind))throw Error("Unexpected selections");let t=e.reduce((e,t)=>{if("pageInfo"===t.name){if(null!==e.pageInfoSelection)throw Error("Expected only one pageInfo selection");e.pageInfoSelection=t}else{if(null!==e.edgeSelection)throw Error("Expected only one edge selection");e.edgeSelection=t}return e},{pageInfoSelection:null,edgeSelection:null});if(t.edgeSelection&&!t.edgeSelection.selections.find(e=>"node"===e.name))throw Error("Expected to find a node field inside of edges");return{pageInfoSelection:t.pageInfoSelection,edgeSelection:t.edgeSelection}}(i);if(null===a)throw Error("No edges found in connection field");let l=a.alias??a.name,{concreteType:o}=n;if(null==o&&r.length>0)throw Error("No concrete type found in connection field, so we cannot have __typename");let u=null!=o?{concreteType:o,typenameAliases:r}:null;return{kind:"ConnectionFieldAndTypename",selections:a.selections.filter(e=>!("ScalarField"===e.kind&&"cursor"===e.name)),pageInfoSelection:t,nameOrAliasOfEdgesField:l,nameOrAliasOfConnectionField:e,concreteTypeAndAliases:u}}return{kind:"OnlyLinkedFieldAndTypename",selections:i,name:n.name,concreteTypeAndAliases:{concreteType:a,typenameAliases:r},remainingPathCount:null==t?null:t-1}}else if(e.length>0&&e.every(e=>"FragmentSpread"===e.kind))return{kind:"OnlyFragmentSpread"};return{kind:"Uncategorized"}}(n,u);switch(c.kind){case"OnlyConditionWrapper":{let{selections:e,remainingPathCount:n}=c;t(e,i,o,n);break}case"InlineFragmentWithTypename":{let{concreteType:e,typenameAliases:n,selections:a,remainingPathCount:r}=c;n.forEach(t=>i[t]=e),t(a,i,o,r);break}case"OnlyFragmentSpread":(0,r.I9)(i,o);break;case"OnlyLinkedFieldAndTypename":{let{name:e,selections:n,concreteTypeAndAliases:a,remainingPathCount:r}=c,l={};if(i[e]=l,a&&a.typenameAliases.length>0){let{concreteType:e,typenameAliases:t}=a;for(let n of t)l[n]=e}t(n,l,o,r);break}case"ConnectionFieldAndTypename":{let{nameOrAliasOfEdgesField:t,nameOrAliasOfConnectionField:n,pageInfoSelection:a,selections:r,concreteTypeAndAliases:l}=c;if("PaginationLegacyData"!==o.kind)throw Error("Error, expected a PaginationLegacyData kind for this query");let u={[t]:o.paginationLegacyData.map(t=>e(r,{kind:"LegacyData",refetchInfo:o.refetchInfo,paginationInfo:o.paginationInfo,singularLegacyData:t}))};if(a&&o.paginationInfo&&(u[a.alias??a.name]=null),null!=l){let{concreteType:e,typenameAliases:t}=l;for(let n of t)u[n]=e}i[n]=u;break}case"Uncategorized":throw Error("The query passed to useLazyLoadQueryOrLegacy contained unsupported/uncategorized elements. Please simplify the query.");default:(0,a.Z)(c,"Unexpected category")}}(t,o,n,i),o}});var a=n(49276),r=n(378019);function l(e){return e.reduce((e,t)=>("ScalarField"===t.kind&&"__typename"===t.name?e[0].push(t.alias??t.name):e[1].push(t),e),[[],[]])}},529521:(e,t,n)=>{n.d(t,{g:()=>r,o:()=>l});var a=n(378019);function r(e){if(Array.isArray(e)){let t=e[0];if(null==t)return{kind:"PluralLegacy",data:[],paginationInfo:null,refetchInfo:null};if(null!=t.__fragments)return{kind:"GraphQL",data:e};let n=(0,a.G5)(t);if(null!=n)return{kind:"PluralLegacy",data:e.map(e=>(e=>{let t=(0,a.Be)(e);if("LegacyData"===t.kind)return t.singularLegacyData;throw Error("Unexpected plural object")})(e)),paginationInfo:n.paginationInfo,refetchInfo:n.refetchInfo};throw Error("Expected either __fragments or [legacyDataSymbol]")}let t=(0,a.G5)(e);if(null!=t&&"LegacyData"===t.kind){let{singularLegacyData:e,refetchInfo:n,paginationInfo:a}=t;return{kind:"SingularLegacy",data:e,refetchInfo:n,paginationInfo:a}}if(e.__fragments)return{kind:"GraphQL",data:e};if("graphqlRef"===e.type)return{kind:"GraphQL",data:e.data};if("deprecated"===e.type){let{data:t}=e;return Array.isArray(t)?{kind:"PluralLegacy",data:t,refetchInfo:null,paginationInfo:null}:{kind:"SingularLegacy",data:t,refetchInfo:null,paginationInfo:null}}if(null!=t&&"PaginationLegacyData"===t.kind){let{paginationLegacyData:e,refetchInfo:n,paginationInfo:a}=t;return{kind:"PaginationLegacyData",paginationLegacyData:e,refetchInfo:n,paginationInfo:a}}throw Error("Invalid value")}function l(e){return r(e).kind}},773876:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(378019);let r="undefined"!=typeof WeakSet,l="undefined"!=typeof WeakMap,i=function e(t,n){if(t===n||"object"!=typeof t||t instanceof Set||t instanceof Map||r&&t instanceof WeakSet||l&&t instanceof WeakMap||!t||"object"!=typeof n||n instanceof Set||n instanceof Map||r&&n instanceof WeakSet||l&&n instanceof WeakMap||!n)return n;let i=!1,o=Array.isArray(t)?t:null,u=Array.isArray(n)?n:null;if(o&&u)i=u.reduce((t,n,a)=>{let r=e(o[a],n);return r!==u[a]&&(u[a]=r),t&&r===o[a]},!0)&&o.length===u.length;else if(!o&&!u){let r=(0,a.G5)(n);if(r&&(0,a.I9)(t,r),t===n)i=!0;else{let a=Object.keys(t),r=Object.keys(n);i=r.reduce((a,r)=>{let l=e(t[r],n[r]);return l!==n[r]&&(n[r]=l),a&&l===t[r]},!0)&&a.length===r.length}}return i?t:n};var o=n(357021);function u({cacheKey:e,data:t}){let n=(0,o.aL)(e),a=t;if(null!=n){let r=i(n.data,t);r!==n.data&&(0,o.ax)(e,{count:n.count,data:r}),a=r}else(0,o.ax)(e,{count:0,data:t});return(0,o.U5)(e),setTimeout(()=>(0,o.H8)(e),3e4),a}},378019:(e,t,n)=>{n.d(t,{Be:()=>l,G5:()=>r,I9:()=>i});let a=Symbol("legacyData");function r(e){return e[a]}function l(e){return e[a]}function i(e,t){return e[a]=t,e}},532321:(e,t,n)=>{n.d(t,{tx:()=>A,lg:()=>_,dX:()=>R,pm:()=>b,aR:()=>P,HF:()=>I,sr:()=>C,O7:()=>S});var a=n(545007),r=n(422578),l=n(988774);function i(e){return null==e?"null or undefined":Array.isArray(e)?"Array":typeof e}function o(e,t,n){return"Manual"===t?{path:e,message:`Value found only in legacy adapter, where it had type ${i(n)}. (Or it was null in the auto-legacy adapter.)`,kind:"MissingInLegacy"}:{path:e,message:`Value found only in auto-legacy adapter, where it had type ${i(n)}. (Or it was null in the legacy adapter.)`,kind:"MissingInAutoLegacy"}}function u(e,t,n){let a=i(t),r=i(n);return{path:e,message:`Found item of type ${a} in the legacy adapter result, and an item of type ${r} in the auto-legacy result.`,kind:"Type"}}var c=n(378019),s=n(732339),d=n(297728),p=n(730212),f=n(410150),g=n(66560),y=n(415787);let m={},h=new Set,S=()=>{let{isAuthenticated:e}=(0,p.B)();return{isAuth:!!e,isDesktop:(0,f.HG)()}};function L(){return"undefined"!=typeof performance?performance.now():Date.now()}function _(e){let t=L();return[e(),L()-t]}let k=new Map;function E(e,t,n,a){let r=k.get(a);if(r){if(!r.has(t)){let[a,l]=_(e);return r.add(t),(0,y.LY)(t,l,{sampleRate:n.isParallel?1:.1,tags:n}),a}}else{let[r,l]=_(e);return k.set(a,new Set([t])),(0,y.LY)(t,l,{sampleRate:n.isParallel?1:.1,tags:n}),r}return e()}function I(e,t,n){let r;switch(n.type){case"article":r=e=>{let t=(0,a.v9)(({articles:t})=>t[e]);return t?n.useLegacyAdapter(t):null};break;case"story":r=e=>{let t=(0,a.v9)(({stories:t})=>t[e]);return t?n.useLegacyAdapter(t):null};break;default:r=e=>{let t=(0,g.S6)()(e);return t?n.useLegacyAdapter(t):null}}return function(e,t,{useGraphQLAdapter:n,useLegacyAdapter:a,renderStrategy__DO_NOT_USE:r}){if("deprecated"===t.type)return{data:a(t.data),childDataKey__DEPRECATED:t};let l=(0,s.h)(e,t.data,r??null);return{data:n(l),childDataKey__DEPRECATED:{type:"graphqlRef",data:l}}}(e,t,{useGraphQLAdapter:n.useGraphQLAdapter,useLegacyAdapter:r,renderStrategy__DO_NOT_USE:n.renderStrategy__DO_NOT_USE??null})}function C(e,t,n){let a=function(e,t){let{checkExperiment:n}=(0,d.F)(),{isAuthenticated:a}=(0,p.B)(),{group:r,anyEnabled:s}=n(a?"web_graphql_auto_legacy_adapters_auth":"web_graphql_auto_legacy_adapters_unauth"),f=S();return r.includes("parallel")?n=>{let a=E(()=>(0,c.I9)(t(n),{kind:"LegacyData",singularLegacyData:n,refetchInfo:null,paginationInfo:null}),"autoLegacyAdapter.legacyTiming",{isParallel:!0,fragmentName:e.name},e.name);return"object"==typeof window&&function(e,t,n,a){let r;try{r=E(()=>(0,l.Z)({conditionContext:t,fragment:e,legacyData:n,refetchInfo:null,paginationInfo:null,getDataFromRedux:()=>null}),"autoLegacyAdapter.autoLegacyTiming",{fragmentName:e.name,isParallel:!0},e.name)}catch{return}try{var c;let t=(c=r,function e(t,n,a){let r=[],l=Object.keys(n),c=Object.keys(a);for(let c of l){let l=n[c],s=a[c];r.push(...function t(n,a,r){return null!=a&&null==r?[o(n,"Manual",a)]:a===r||null==a&&null==r?[]:Array.isArray(a)?Array.isArray(r)?function(e,n,a){if(n.length!==a.length)return[{path:e,message:`legacyResult is an array of length ${n.length}; autoLegacyResult is an array of length ${a.length}`,kind:"Length"}];let r=[];for(let l=0;l<n.length;l+=1){let i=n[l],o=a[l];r.push(...t(`${e}[]`,i,o))}return r}(n,a,r):[u(n,a,r)]:"object"==typeof a?"object"==typeof r&&null!==r&&null!==a?e(n,a,r):[u(n,a,r)]:[typeof a!=typeof r?u(n,a,r):{path:n,message:`Found items of type ${i(a)}, but their values did not match.`,kind:"Value"}]}(`${t}.${c}`,l,s))}for(let e of c){let l=n[e],i=a[e];null!=i&&null==l&&r.push(o(`${t}.${e}`,"Auto",i))}return r}("",a,c));if(t.length>0){window.SHOULD_LOG_ADAPTER_DIFFERENCES&&console.warn({differences:t,fragment:e.name}),m[e.name]=m[e.name]??new Set;let n=m[e.name];for(let a of t)n.has(a.path)||(n.add(a.path),(0,y.nP)("autoLegacyAdapter.inconsistentReadResults",{sampleRate:1,tags:{fragmentName:e.name,path:a.path,kind:a.kind}}))}}catch(t){h.has(e.name)||(h.add(e.name),window.SHOULD_LOG_ADAPTER_DIFFERENCES&&console.warn(`comparing results threw for fragment ${e.name}`),(0,y.nP)("autoLegacyAdapter.erroredCompareResults",{sampleRate:1,tags:{fragmentName:e.name}}))}}(e,f,n,a),a}:s?t=>E(()=>(0,l.Z)({conditionContext:f,fragment:e,legacyData:t,refetchInfo:null,paginationInfo:null,getDataFromRedux:()=>null}),"autoLegacyAdapter.autoLegacyTiming",{fragmentName:e.name,isParallel:!1},e.name):n=>E(()=>(0,c.I9)(t(n),{kind:"LegacyData",singularLegacyData:n,refetchInfo:null,paginationInfo:null}),"autoLegacyAdapter.legacyTiming",{fragmentName:e.name,isParallel:!1},e.name)}(e,n.useLegacyAdapter);return I(e,t,{...n,useGraphQLAdapter:e=>e,useLegacyAdapter:a})}let A={" $fragmentSpreads":void 0," $fragmentType":void 0};function b(e){let{isAuthParam:t,isDesktop:n,authDesktopQuery:a,authMobileQuery:r,unauthDesktopQuery:l,unauthMobileQuery:i}=e;return t?n?a:r:n?l:i}function R(e){let{isAuthParam:t,isDesktop:n,authDesktopFragment:a,authMobileFragment:r,unauthDesktopFragment:l,unauthMobileFragment:i}=e;return t?n?a:r:n?l:i}function P(e){let{query:t,paginationFragment:n,variables:a}=e,l=(0,r.useLazyLoadQuery)(t,a);return(0,r.usePaginationFragment)(n,l)}},357021:(e,t,n)=>{n.d(t,{H8:()=>c,Ly:()=>o,U5:()=>u,_0:()=>p,aL:()=>s,ax:()=>d,w3:()=>f});var a=n(297728),r=n(730212),l=n(415787);let i=new Map;function o(e){let t=(0,a.F)(),{isAuthenticated:n}=(0,r.B)();if(!e)return{shouldCalculateStableReferences:!1,shouldUseStableReferences:!1};switch(t.checkExperiment(n?"auth_web_gql_ala_cache":"unauth_web_gql_ala_cache").group){case"control":default:return{shouldCalculateStableReferences:!1,shouldUseStableReferences:!1};case"enabled":return{shouldCalculateStableReferences:!0,shouldUseStableReferences:!0};case"enabled_only_calculation":return{shouldCalculateStableReferences:!0,shouldUseStableReferences:!1}}}function u(e){let t=i.get(e);t&&i.set(e,{count:t.count+1,data:t.data})}function c(e){let t=i.get(e);if(!t){let t=e.split("/")[0];throw(0,l.nP)("autoLegacyAdapter.stableReferences.cacheItemMissing",{sampleRate:1,tags:{fragmentName:t}}),Error(`Item with key ${e} not found in cache`)}if(1===t.count){i.delete(e);return}i.set(e,{count:t.count-1,data:t.data})}function s(e){return i.get(e)}function d(e,t){i.set(e,t)}function p(e,t){return`${e.name}/${t}`}function f(e,t,n){return t?{key:p(e,t),data:n}:null}},384609:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(422578),r=n(244311),l=n(49276),i=n(667294),o=n(529521),u=n(988774),c=n(286102),s=n(773876),d=n(532321),p=n(357021),f=n(415787);let g=function(e,t,n,a,l){let o=(0,p.Ly)(n),g=(0,d.O7)(),y=(0,i.useMemo)(()=>{if(t?.kind==="SingularLegacy"&&a(t)){let{data:n,refetchInfo:a,paginationInfo:r}=t,i=(0,u.Z)({conditionContext:g,fragment:e,legacyData:n,paginationInfo:r,refetchInfo:a,stableReferencesExperimentStatus:o,getDataFromRedux:l});return{itemsToRetain:[{legacyData:n,graphQLShapedData:i}],autoLegacyAdapterData:[i]}}if(t?.kind==="PluralLegacy"){let{data:n,refetchInfo:a,paginationInfo:r}=t,i=[],c=[];return n.forEach(t=>{let n=(0,u.Z)({conditionContext:g,fragment:e,legacyData:t,paginationInfo:r,refetchInfo:a,stableReferencesExperimentStatus:o,getDataFromRedux:l});i?.push(n),c?.push({legacyData:t,graphQLShapedData:n})}),{itemsToRetain:c,autoLegacyAdapterData:i}}if(t?.kind==="PaginationLegacyData"){let n=e?.metadata?.connection?.[0]?.path?.length??null,a=(0,c.Z)(e.selections,t,n),l=a;if("Query"===e.type){let t=(0,p._0)(e,r.ROOT_ID);l=(0,s.Z)({cacheKey:t,data:a})}return{itemsToRetain:[{graphQLShapedData:l,legacyData:{id:"Query"===e.type?r.ROOT_ID:null}}],autoLegacyAdapterData:[a]}}return null},[t?.kind==="PaginationLegacyData"?t.paginationLegacyData:t?.data]);return!function({items:e,shouldCalculateStableReferences:t}){(0,i.useEffect)(()=>{if(e&&t)return e.forEach(e=>{let{key:t,data:n}=e;if(!(0,p.aL)(t)){let e=t.split("/")[0];(0,f.nP)("autoLegacyAdapter.stableReferences.useRetainWhileMounted.cacheItemMissing",{sampleRate:1,tags:{fragmentName:e}}),(0,p.ax)(t,{count:0,data:n})}(0,p.U5)(t)}),()=>{e.forEach(({key:e})=>(0,p.H8)(e))}},[e?.map(({key:e})=>e).join(","),t])}({items:y?.itemsToRetain?.map(t=>{let{legacyData:n,graphQLShapedData:a}=t,l=n&&"id"in n&&"string"==typeof n.id?n.id:null;return p.w3(e,"Query"===e.type?r.ROOT_ID:l,a)}).filter(e=>null!=e),shouldCalculateStableReferences:o.shouldCalculateStableReferences}),y?.autoLegacyAdapterData};var y=n(545007);let m=function(e,t){let n=function(e,t){let{getDataFromRedux:n}=function(){let e=(0,i.useContext)(y.ET),t=e?.store?.getState();return{getDataFromRedux:(e,n)=>"pin"===n?t?.pins?.[e]:"story"===n?t?.stories?.[e]:"board"===n?t?.boards?.[e]:"article"===n?t?.articles?.[e]:null}}(),a=t?(0,o.g)(t):null,l=a?.kind!=="GraphQL",u=(0,r.getFragment)(e);if(!l)return{dataKey:a,isUsingALA:l,actualFragment:u,autoLegacyAdapterData:null};let c=g(u,a,l,()=>!0,n);return null===t||null==a?null:{dataKey:a,isUsingALA:l,actualFragment:u,autoLegacyAdapterData:c}}(e,t);if(!function(e,t){let n=(0,i.useRef)(null);if(null!=e){if(null==n.current)n.current=e;else if(n.current!==e)throw Error(`${t()}: reference type mismatch: expected ${n.current}, but received ${e}.`)}}(n?.dataKey.kind,()=>(0,r.getFragment)(e).name),null==n)return null;let{dataKey:u,actualFragment:c,autoLegacyAdapterData:s}=n;switch(u.kind){case"SingularLegacy":return s?.[0];case"PluralLegacy":return s;case"GraphQL":return(0,a.useFragment)(e,u.data);case"PaginationLegacyData":if(Array.isArray(t))throw Error("Unexpected Plural fragment");if(null!=(c?.metadata?.connection?.[0]?.path?.length??null))throw Error("Unexpected fragment containing a @connection directive. You should read this fragment with usePaginationFragmentOrLegacy instead.");return s?.[0];default:return(0,l.Z)(u,"Unexpected case")}}},732339:(e,t,n)=>{n.d(t,{P:()=>d,h:()=>p});var a,r=n(667294),l=n(422578),i=n(244311),o=n(529521),u=n(384609);function c(e,t,r){return r.lookup({kind:"SingularReaderSelector",dataID:t.__id,isWithinUnmatchedTypeRefinement:!1,node:(0,i.getFragment)(e),owner:{identifier:Math.random()+"",node:(0,i.getRequest)(void 0!==a?a:a=n(203445)),variables:t.__fragmentOwner.variables,cacheConfig:null},variables:t.__fragmentOwner.variables})}function s(e,t,n){switch(n??"SuspendOnMissingData"){case"SuspendOnMissingData":default:return(0,l.useFragment)(e,t);case"RenderWithMissingData":{let n=(0,l.useRelayEnvironment)();if(null==t)return null;return c(e,t,n).data}case"RenderWithMissingDataAndSubscribe":return function(e,t){let n=t?.__fragmentOwner.identifier,a=(0,l.useRelayEnvironment)(),[i,o]=(0,r.useState)(()=>({fragmentRefIdentifier:n,snapshot:null!=t?c(e,t,a):null}));return i.fragmentRefIdentifier!==n&&o({fragmentRefIdentifier:n,snapshot:null!=t?c(e,t,a):null}),(0,r.useEffect)(()=>{if(null!=i.snapshot){let e=a.subscribe(i.snapshot,e=>{o({fragmentRefIdentifier:n,snapshot:e})});return()=>e.dispose()}},[n]),i.snapshot?.data??null}(e,t)}}let d=function(e,t,n){if(null==t)return null;let a=(0,o.g)(t);return"GraphQL"===a.kind?s(e,a.data,n):(0,u.Z)(e,t)},p=s}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/50289-bb54671e90b92358.mjs.map