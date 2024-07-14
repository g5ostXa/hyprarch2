var e={d:(t,o)=>{for(var i in o)e.o(o,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:o[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};void 0!==e&&Object.defineProperty(e,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}});var t={};e.d(t,{i:()=>FocusApp});class IpcCall{constructor(e,t,o=!1,i=!1){this.scope=e,this.reset=o,this.pack=i,this.method=`${e}/${t}`}is(e){return e.method===this.method}}class IpcCommand extends IpcCall{}class IpcNotification extends IpcCall{}const o=new IpcCommand("core","webview/ready"),i=new IpcCommand("core","webview/focus/changed"),n=(new IpcCommand("core","command/execute"),new IpcCommand("core","configuration/update"),new IpcNotification("core","window/focus/didChange"),new IpcCommand("core","webview/focus/didChange"));new IpcNotification("core","configuration/didChange");const r="focus",a=new IpcCommand(r,"pr/openWorktree"),l=new IpcCommand(r,"pr/openBranch"),c=new IpcCommand(r,"pr/switchToBranch"),d=new IpcCommand(r,"pr/snooze"),p=new IpcCommand(r,"pr/pin"),h=new IpcCommand(r,"issue/snooze"),u=new IpcCommand(r,"issue/pin"),g=new IpcNotification(r,"didChange",!0);function f(e,t,o){let i,n,r,a,l;function c(e){const o=e-(n??0);return null==n||o>=t||o<0}function d(){const e=Date.now();if(c(e))p();else{l=setTimeout(d,t-(e-(n??0)))}}function p(){return l=void 0,i?function(){const t=i,o=r;return i=r=void 0,a=e.apply(o,t),a}():(i=void 0,r=void 0,a)}function h(...e){const p=Date.now(),h=c(p);return i=null!=o&&i?o(i,e):e,r=this,n=p,h&&null==l?(l=setTimeout(d,t),a):(null==l&&(l=setTimeout(d,t)),a)}return h.cancel=function(){null!=l&&clearTimeout(l),i=void 0,n=void 0,r=void 0,l=void 0},h.flush=function(){return null==l?a:(clearTimeout(l),p())},h.pending=function(){return null!=l},h}const m=",",b="=",v="{",y="(",w=")",k=/\(([\s\S]*)\)/,_=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,x=/\s?=.*$/;function C(e){const t=.001*performance.now();let o=Math.floor(t),i=Math.floor(t%1*1e9);return void 0!==e&&(o-=e[0],i-=e[1],i<0&&(o--,i+=1e9)),[o,i]}const S=500;function A(){let e=0;return{get current(){return e},next:function(){return 1073741823===e&&(e=0),++e}}}const R=A(),P=new Map;function E(e){P.delete(e)}function T(e,t){if(null!=t)return{scopeId:t.scopeId,prefix:`${t.prefix}${e}`};const o=R.next();return{scopeId:o,prefix:`[${String(o).padStart(5)}] ${e}`}}Error;function D(e){return null!=e&&(e instanceof Promise||"function"==typeof e?.then)}Error;Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze({codeSuggest:"https://gitkraken.com/solutions/code-suggest?utm_source=gitlens-extension&utm_medium=in-app-links",cloudPatches:"https://gitkraken.com/solutions/cloud-patches?utm_source=gitlens-extension&utm_medium=in-app-links",graph:"https://gitkraken.com/solutions/commit-graph?utm_source=gitlens-extension&utm_medium=in-app-links",launchpad:"https://gitkraken.com/solutions/launchpad?utm_source=gitlens-extension&utm_medium=in-app-links",platform:"https://gitkraken.com/devex?utm_source=gitlens-extension&utm_medium=in-app-links",pricing:"https://gitkraken.com/gitlens/pricing?utm_source=gitlens-extension&utm_medium=in-app-links",proFeatures:"https://gitkraken.com/gitlens/pro-features?utm_source=gitlens-extension&utm_medium=in-app-links",security:"https://help.gitkraken.com/gitlens/security?utm_source=gitlens-extension&utm_medium=in-app-links",workspaces:"https://gitkraken.com/solutions/workspaces?utm_source=gitlens-extension&utm_medium=in-app-links",cli:"https://gitkraken.com/cli?utm_source=gitlens-extension&utm_medium=in-app-links",browserExtension:"https://gitkraken.com/browser-extension?utm_source=gitlens-extension&utm_medium=in-app-links",desktop:"https://gitkraken.com/git-client?utm_source=gitlens-extension&utm_medium=in-app-links",releaseNotes:"https://help.gitkraken.com/gitlens/gitlens-release-notes-current/",releaseAnnouncement:"https://www.gitkraken.com/blog/gitkraken-launches-devex-platform-acquires-codesee?utm_source=gitlens-extension&utm_medium=in-app-links"});var O=(e=>(e[e.Hash=35]="Hash",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Backslash=92]="Backslash",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.Z=90]="Z",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.z=122]="z",e))(O||{}),L=(e=>(e.ActionPrefix="gitlens.action.",e.AddAuthors="gitlens.addAuthors",e.BrowseRepoAtRevision="gitlens.browseRepoAtRevision",e.BrowseRepoAtRevisionInNewWindow="gitlens.browseRepoAtRevisionInNewWindow",e.BrowseRepoBeforeRevision="gitlens.browseRepoBeforeRevision",e.BrowseRepoBeforeRevisionInNewWindow="gitlens.browseRepoBeforeRevisionInNewWindow",e.ClearFileAnnotations="gitlens.clearFileAnnotations",e.CloseUnchangedFiles="gitlens.closeUnchangedFiles",e.CompareWith="gitlens.compareWith",e.CompareHeadWith="gitlens.compareHeadWith",e.CompareWorkingWith="gitlens.compareWorkingWith",e.ComputingFileAnnotations="gitlens.computingFileAnnotations",e.ConnectRemoteProvider="gitlens.connectRemoteProvider",e.CopyCurrentBranch="gitlens.copyCurrentBranch",e.CopyDeepLinkToBranch="gitlens.copyDeepLinkToBranch",e.CopyDeepLinkToCommit="gitlens.copyDeepLinkToCommit",e.CopyDeepLinkToComparison="gitlens.copyDeepLinkToComparison",e.CopyDeepLinkToFile="gitlens.copyDeepLinkToFile",e.CopyDeepLinkToFileAtRevision="gitlens.copyDeepLinkToFileAtRevision",e.CopyDeepLinkToLines="gitlens.copyDeepLinkToLines",e.CopyDeepLinkToRepo="gitlens.copyDeepLinkToRepo",e.CopyDeepLinkToTag="gitlens.copyDeepLinkToTag",e.CopyDeepLinkToWorkspace="gitlens.copyDeepLinkToWorkspace",e.CopyMessageToClipboard="gitlens.copyMessageToClipboard",e.CopyRemoteBranchesUrl="gitlens.copyRemoteBranchesUrl",e.CopyRemoteBranchUrl="gitlens.copyRemoteBranchUrl",e.CopyRemoteCommitUrl="gitlens.copyRemoteCommitUrl",e.CopyRemoteComparisonUrl="gitlens.copyRemoteComparisonUrl",e.CopyRemoteFileUrl="gitlens.copyRemoteFileUrlToClipboard",e.CopyRemoteFileUrlWithoutRange="gitlens.copyRemoteFileUrlWithoutRange",e.CopyRemoteFileUrlFrom="gitlens.copyRemoteFileUrlFrom",e.CopyRemotePullRequestUrl="gitlens.copyRemotePullRequestUrl",e.CopyRemoteRepositoryUrl="gitlens.copyRemoteRepositoryUrl",e.CopyShaToClipboard="gitlens.copyShaToClipboard",e.CopyRelativePathToClipboard="gitlens.copyRelativePathToClipboard",e.ApplyPatchFromClipboard="gitlens.applyPatchFromClipboard",e.CopyPatchToClipboard="gitlens.copyPatchToClipboard",e.CopyWorkingChangesToWorktree="gitlens.copyWorkingChangesToWorktree",e.CreatePatch="gitlens.createPatch",e.CreateCloudPatch="gitlens.createCloudPatch",e.CreatePullRequestOnRemote="gitlens.createPullRequestOnRemote",e.DiffDirectory="gitlens.diffDirectory",e.DiffDirectoryWithHead="gitlens.diffDirectoryWithHead",e.DiffFolderWithRevision="gitlens.diffFolderWithRevision",e.DiffFolderWithRevisionFrom="gitlens.diffFolderWithRevisionFrom",e.DiffWith="gitlens.diffWith",e.DiffWithNext="gitlens.diffWithNext",e.DiffWithNextInDiffLeft="gitlens.diffWithNextInDiffLeft",e.DiffWithNextInDiffRight="gitlens.diffWithNextInDiffRight",e.DiffWithPrevious="gitlens.diffWithPrevious",e.DiffWithPreviousInDiffLeft="gitlens.diffWithPreviousInDiffLeft",e.DiffWithPreviousInDiffRight="gitlens.diffWithPreviousInDiffRight",e.DiffLineWithPrevious="gitlens.diffLineWithPrevious",e.DiffWithRevision="gitlens.diffWithRevision",e.DiffWithRevisionFrom="gitlens.diffWithRevisionFrom",e.DiffWithWorking="gitlens.diffWithWorking",e.DiffWithWorkingInDiffLeft="gitlens.diffWithWorkingInDiffLeft",e.DiffWithWorkingInDiffRight="gitlens.diffWithWorkingInDiffRight",e.DiffLineWithWorking="gitlens.diffLineWithWorking",e.DisconnectRemoteProvider="gitlens.disconnectRemoteProvider",e.DisableDebugLogging="gitlens.disableDebugLogging",e.EnableDebugLogging="gitlens.enableDebugLogging",e.DisableRebaseEditor="gitlens.disableRebaseEditor",e.EnableRebaseEditor="gitlens.enableRebaseEditor",e.ExternalDiff="gitlens.externalDiff",e.ExternalDiffAll="gitlens.externalDiffAll",e.FetchRepositories="gitlens.fetchRepositories",e.GenerateCommitMessage="gitlens.generateCommitMessage",e.GetStarted="gitlens.getStarted",e.GKSwitchOrganization="gitlens.gk.switchOrganization",e.InviteToLiveShare="gitlens.inviteToLiveShare",e.OpenBlamePriorToChange="gitlens.openBlamePriorToChange",e.OpenBranchesOnRemote="gitlens.openBranchesOnRemote",e.OpenBranchOnRemote="gitlens.openBranchOnRemote",e.OpenCurrentBranchOnRemote="gitlens.openCurrentBranchOnRemote",e.OpenChangedFiles="gitlens.openChangedFiles",e.OpenCommitOnRemote="gitlens.openCommitOnRemote",e.OpenComparisonOnRemote="gitlens.openComparisonOnRemote",e.OpenFileHistory="gitlens.openFileHistory",e.OpenFileFromRemote="gitlens.openFileFromRemote",e.OpenFileOnRemote="gitlens.openFileOnRemote",e.OpenFileOnRemoteFrom="gitlens.openFileOnRemoteFrom",e.OpenFileAtRevision="gitlens.openFileRevision",e.OpenFileAtRevisionFrom="gitlens.openFileRevisionFrom",e.OpenFolderHistory="gitlens.openFolderHistory",e.OpenOnRemote="gitlens.openOnRemote",e.OpenCloudPatch="gitlens.openCloudPatch",e.OpenPatch="gitlens.openPatch",e.OpenPullRequestOnRemote="gitlens.openPullRequestOnRemote",e.OpenAssociatedPullRequestOnRemote="gitlens.openAssociatedPullRequestOnRemote",e.OpenRepoOnRemote="gitlens.openRepoOnRemote",e.OpenRevisionFile="gitlens.openRevisionFile",e.OpenRevisionFileInDiffLeft="gitlens.openRevisionFileInDiffLeft",e.OpenRevisionFileInDiffRight="gitlens.openRevisionFileInDiffRight",e.OpenWalkthrough="gitlens.openWalkthrough",e.OpenWorkingFile="gitlens.openWorkingFile",e.OpenWorkingFileInDiffLeft="gitlens.openWorkingFileInDiffLeft",e.OpenWorkingFileInDiffRight="gitlens.openWorkingFileInDiffRight",e.PullRepositories="gitlens.pullRepositories",e.PushRepositories="gitlens.pushRepositories",e.GitCommands="gitlens.gitCommands",e.GitCommandsBranch="gitlens.gitCommands.branch",e.GitCommandsBranchCreate="gitlens.gitCommands.branch.create",e.GitCommandsBranchDelete="gitlens.gitCommands.branch.delete",e.GitCommandsBranchPrune="gitlens.gitCommands.branch.prune",e.GitCommandsBranchRename="gitlens.gitCommands.branch.rename",e.GitCommandsCheckout="gitlens.gitCommands.checkout",e.GitCommandsCherryPick="gitlens.gitCommands.cherryPick",e.GitCommandsHistory="gitlens.gitCommands.history",e.GitCommandsMerge="gitlens.gitCommands.merge",e.GitCommandsRebase="gitlens.gitCommands.rebase",e.GitCommandsRemote="gitlens.gitCommands.remote",e.GitCommandsRemoteAdd="gitlens.gitCommands.remote.add",e.GitCommandsRemotePrune="gitlens.gitCommands.remote.prune",e.GitCommandsRemoteRemove="gitlens.gitCommands.remote.remove",e.GitCommandsReset="gitlens.gitCommands.reset",e.GitCommandsRevert="gitlens.gitCommands.revert",e.GitCommandsShow="gitlens.gitCommands.show",e.GitCommandsStash="gitlens.gitCommands.stash",e.GitCommandsStashDrop="gitlens.gitCommands.stash.drop",e.GitCommandsStashList="gitlens.gitCommands.stash.list",e.GitCommandsStashPop="gitlens.gitCommands.stash.pop",e.GitCommandsStashPush="gitlens.gitCommands.stash.push",e.GitCommandsStashRename="gitlens.gitCommands.stash.rename",e.GitCommandsStatus="gitlens.gitCommands.status",e.GitCommandsSwitch="gitlens.gitCommands.switch",e.GitCommandsTag="gitlens.gitCommands.tag",e.GitCommandsTagCreate="gitlens.gitCommands.tag.create",e.GitCommandsTagDelete="gitlens.gitCommands.tag.delete",e.GitCommandsWorktree="gitlens.gitCommands.worktree",e.GitCommandsWorktreeCreate="gitlens.gitCommands.worktree.create",e.GitCommandsWorktreeDelete="gitlens.gitCommands.worktree.delete",e.GitCommandsWorktreeOpen="gitlens.gitCommands.worktree.open",e.OpenOrCreateWorktreeForGHPR="gitlens.ghpr.views.openOrCreateWorktree",e.PlusHide="gitlens.plus.hide",e.PlusLogin="gitlens.plus.login",e.PlusLogout="gitlens.plus.logout",e.PlusManage="gitlens.plus.manage",e.PlusManageCloudIntegrations="gitlens.plus.cloudIntegrations.manage",e.PlusReactivateProTrial="gitlens.plus.reactivateProTrial",e.PlusResendVerification="gitlens.plus.resendVerification",e.PlusRestore="gitlens.plus.restore",e.PlusShowPlans="gitlens.plus.showPlans",e.PlusSignUp="gitlens.plus.signUp",e.PlusStartPreviewTrial="gitlens.plus.startPreviewTrial",e.PlusUpgrade="gitlens.plus.upgrade",e.PlusValidate="gitlens.plus.validate",e.QuickOpenFileHistory="gitlens.quickOpenFileHistory",e.RefreshLaunchpad="gitlens.launchpad.refresh",e.RefreshGraph="gitlens.graph.refresh",e.RefreshHover="gitlens.refreshHover",e.Reset="gitlens.reset",e.ResetAIKey="gitlens.resetAIKey",e.ResetViewsLayout="gitlens.resetViewsLayout",e.RevealCommitInView="gitlens.revealCommitInView",e.ShareAsCloudPatch="gitlens.shareAsCloudPatch",e.SearchCommits="gitlens.showCommitSearch",e.SearchCommitsInView="gitlens.views.searchAndCompare.searchCommits",e.ShowBranchesView="gitlens.showBranchesView",e.ShowCommitDetailsView="gitlens.showCommitDetailsView",e.ShowCommitInView="gitlens.showCommitInView",e.ShowCommitsInView="gitlens.showCommitsInView",e.ShowCommitsView="gitlens.showCommitsView",e.ShowContributorsView="gitlens.showContributorsView",e.ShowDraftsView="gitlens.showDraftsView",e.ShowFileHistoryView="gitlens.showFileHistoryView",e.ShowFocusPage="gitlens.showFocusPage",e.ShowGraph="gitlens.showGraph",e.ShowGraphPage="gitlens.showGraphPage",e.ShowGraphView="gitlens.showGraphView",e.ShowHomeView="gitlens.showHomeView",e.ShowAccountView="gitlens.showAccountView",e.ShowInCommitGraph="gitlens.showInCommitGraph",e.ShowInCommitGraphView="gitlens.showInCommitGraphView",e.ShowInDetailsView="gitlens.showInDetailsView",e.ShowInTimeline="gitlens.showInTimeline",e.ShowLastQuickPick="gitlens.showLastQuickPick",e.ShowLaunchpad="gitlens.showLaunchpad",e.ShowLineCommitInView="gitlens.showLineCommitInView",e.ShowLineHistoryView="gitlens.showLineHistoryView",e.OpenOnlyChangedFiles="gitlens.openOnlyChangedFiles",e.ShowPatchDetailsPage="gitlens.showPatchDetailsPage",e.ShowQuickBranchHistory="gitlens.showQuickBranchHistory",e.ShowQuickCommit="gitlens.showQuickCommitDetails",e.ShowQuickCommitFile="gitlens.showQuickCommitFileDetails",e.ShowQuickCurrentBranchHistory="gitlens.showQuickRepoHistory",e.ShowQuickFileHistory="gitlens.showQuickFileHistory",e.ShowQuickRepoStatus="gitlens.showQuickRepoStatus",e.ShowQuickCommitRevision="gitlens.showQuickRevisionDetails",e.ShowQuickCommitRevisionInDiffLeft="gitlens.showQuickRevisionDetailsInDiffLeft",e.ShowQuickCommitRevisionInDiffRight="gitlens.showQuickRevisionDetailsInDiffRight",e.ShowQuickStashList="gitlens.showQuickStashList",e.ShowRemotesView="gitlens.showRemotesView",e.ShowRepositoriesView="gitlens.showRepositoriesView",e.ShowSearchAndCompareView="gitlens.showSearchAndCompareView",e.ShowSettingsPage="gitlens.showSettingsPage",e.ShowSettingsPageAndJumpToFileAnnotations="gitlens.showSettingsPage!file-annotations",e.ShowSettingsPageAndJumpToBranchesView="gitlens.showSettingsPage!branches-view",e.ShowSettingsPageAndJumpToCommitsView="gitlens.showSettingsPage!commits-view",e.ShowSettingsPageAndJumpToContributorsView="gitlens.showSettingsPage!contributors-view",e.ShowSettingsPageAndJumpToFileHistoryView="gitlens.showSettingsPage!file-history-view",e.ShowSettingsPageAndJumpToLineHistoryView="gitlens.showSettingsPage!line-history-view",e.ShowSettingsPageAndJumpToRemotesView="gitlens.showSettingsPage!remotes-view",e.ShowSettingsPageAndJumpToRepositoriesView="gitlens.showSettingsPage!repositories-view",e.ShowSettingsPageAndJumpToSearchAndCompareView="gitlens.showSettingsPage!search-compare-view",e.ShowSettingsPageAndJumpToStashesView="gitlens.showSettingsPage!stashes-view",e.ShowSettingsPageAndJumpToTagsView="gitlens.showSettingsPage!tags-view",e.ShowSettingsPageAndJumpToWorkTreesView="gitlens.showSettingsPage!worktrees-view",e.ShowSettingsPageAndJumpToViews="gitlens.showSettingsPage!views",e.ShowSettingsPageAndJumpToCommitGraph="gitlens.showSettingsPage!commit-graph",e.ShowSettingsPageAndJumpToAutolinks="gitlens.showSettingsPage!autolinks",e.ShowStashesView="gitlens.showStashesView",e.ShowTagsView="gitlens.showTagsView",e.ShowTimelinePage="gitlens.showTimelinePage",e.ShowTimelineView="gitlens.showTimelineView",e.ShowWelcomePage="gitlens.showWelcomePage",e.ShowWorktreesView="gitlens.showWorktreesView",e.ShowWorkspacesView="gitlens.showWorkspacesView",e.StashApply="gitlens.stashApply",e.StashSave="gitlens.stashSave",e.StashSaveFiles="gitlens.stashSaveFiles",e.SwitchAIModel="gitlens.switchAIModel",e.SwitchMode="gitlens.switchMode",e.ToggleCodeLens="gitlens.toggleCodeLens",e.ToggleFileBlame="gitlens.toggleFileBlame",e.ToggleFileBlameInDiffLeft="gitlens.toggleFileBlameInDiffLeft",e.ToggleFileBlameInDiffRight="gitlens.toggleFileBlameInDiffRight",e.ToggleFileChanges="gitlens.toggleFileChanges",e.ToggleFileChangesOnly="gitlens.toggleFileChangesOnly",e.ToggleFileHeatmap="gitlens.toggleFileHeatmap",e.ToggleFileHeatmapInDiffLeft="gitlens.toggleFileHeatmapInDiffLeft",e.ToggleFileHeatmapInDiffRight="gitlens.toggleFileHeatmapInDiffRight",e.ToggleLaunchpadIndicator="gitlens.launchpad.indicator.toggle",e.ToggleGraph="gitlens.toggleGraph",e.ToggleMaximizedGraph="gitlens.toggleMaximizedGraph",e.ToggleLineBlame="gitlens.toggleLineBlame",e.ToggleReviewMode="gitlens.toggleReviewMode",e.ToggleZenMode="gitlens.toggleZenMode",e.ViewsCopy="gitlens.views.copy",e.ViewsCopyAsMarkdown="gitlens.views.copyAsMarkdown",e.ViewsCopyUrl="gitlens.views.copyUrl",e.ViewsOpenDirectoryDiff="gitlens.views.openDirectoryDiff",e.ViewsOpenDirectoryDiffWithWorking="gitlens.views.openDirectoryDiffWithWorking",e.ViewsOpenUrl="gitlens.views.openUrl",e.Deprecated_DiffHeadWith="gitlens.diffHeadWith",e.Deprecated_DiffWorkingWith="gitlens.diffWorkingWith",e.Deprecated_OpenBranchesInRemote="gitlens.openBranchesInRemote",e.Deprecated_OpenBranchInRemote="gitlens.openBranchInRemote",e.Deprecated_OpenCommitInRemote="gitlens.openCommitInRemote",e.Deprecated_OpenFileInRemote="gitlens.openFileInRemote",e.Deprecated_OpenInRemote="gitlens.openInRemote",e.Deprecated_OpenRepoInRemote="gitlens.openRepoInRemote",e.Deprecated_ShowFileHistoryInView="gitlens.showFileHistoryInView",e))(L||{});const{fromCharCode:M}=String;new TextEncoder;function F(e){const[t,o]=C(e);return 1e3*t+Math.floor(o/1e6)}function z(e,t,o){if(null==o)return`${t} ${e}${1===t?"":"s"}`;const i=1===t?e:o.plural??`${e}s`;return o.only?i:`${0===t?o.zero??t:o.format?.(t)??t}${o.infix??" "}${i}`}const I=Symbol("logInstanceNameFn");function B(e){return function(e,t=!1){let o,i,n,r,a,l=0,c=!1,d=!1,p=!0;null!=e&&({args:o,if:i,enter:n,exit:r,prefix:a,logThreshold:l=0,scoped:c=!0,singleLine:d=!1,timed:p=!0}=e);l>0&&(d=!0,p=!0);p&&(c=!0);const h=N.isDebugging,u=t?N.debug:N.log,g=h?"debug":"info";return(e,t,f)=>{let A,T;if("function"==typeof f.value?(A=f.value,T="value"):"function"==typeof f.get&&(A=f.get,T="get"),null==A||null==T)throw new Error("Not supported");const O=!1!==o?function(e){if("function"!=typeof e)throw new Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e);t=t.replace(_,"")||t,t=t.slice(0,t.indexOf(v));let o=t.indexOf(y),i=t.indexOf(w);o=o>=0?o+1:0,i=i>0?i:t.indexOf(b),t=t.slice(o,i),t=`(${t})`;const n=k.exec(t);return null!=n?n[1].split(m).map((e=>e.trim().replace(x,""))):[]}(A):[];f[T]=function(...e){if(!h&&!N.enabled(g)||null!=i&&!i.apply(this,e))return A.apply(this,e);const f=R.next(),m=null!=this?function(e){let t;if("function"==typeof e){if(null==e.prototype?.constructor)return e.name;t=e.prototype.constructor}else t=e.constructor;let o=t?.name??"";const i=o.indexOf("_");o=-1===i?o:o.substr(i+1),null!=t?.[I]&&(o=t[I](e,o));return o}(this):void 0;let b,v=m?c?`[${f.toString(16).padStart(5)}] ${m}.${t}`:`${m}.${t}`:t;null!=a&&(v=a({id:f,instance:this,instanceName:m??"",name:t,prefix:v},...e)),c&&(b={scopeId:f,prefix:v},function(e,t){P.set(e,t)}(f,b));const y=null!=n?n(...e):"";let w;if(!1===o||0===e.length)w="",d||u.call(N,`${v}${y}`);else{let t;w="";let i,n,r,a=-1;for(r of e){if(i=O[++a],t=o?.[a],null!=t){if("boolean"==typeof t)continue;if(w.length>0&&(w+=", "),"string"==typeof t){w+=t;continue}n=String(t(r))}else w.length>0&&(w+=", "),n=N.toLoggable(r);w+=i?`${i}=${n}`:n}d||u.call(N,w?`${v}${y}(${w})`:`${v}${y}`)}if(d||p||null!=r){const t=p?C():void 0,o=e=>{const o=void 0!==t?` [${F(t)}ms]`:"";d?N.error(e,w?`${v}${y}(${w})`:`${v}${y}`,b?.exitDetails?`failed${b.exitDetails}${o}`:`failed${o}`):N.error(e,v,b?.exitDetails?`failed${b.exitDetails}${o}`:`failed${o}`),c&&E(f)};let i;try{i=A.apply(this,e)}catch(e){throw o(e),e}const n=e=>{let o,i,n,a;if(null!=t?(o=F(t),o>S?(i=N.warn,n=` [*${o}ms] (slow)`):(i=u,n=` [${o}ms]`)):(n="",i=u),null!=r)if("function"==typeof r)try{a=r(e)}catch(e){a=`@log.exit error: ${e}`}else!0===r&&(a=`returned ${N.toLoggable(e)}`);else b?.exitFailed?(a=b.exitFailed,i=N.error):a="completed";d?(0===l||o>l)&&i.call(N,w?`${v}${y}(${w}) ${a}${b?.exitDetails||""}${n}`:`${v}${y} ${a}${b?.exitDetails||""}${n}`):i.call(N,w?`${v}(${w}) ${a}${b?.exitDetails||""}${n}`:`${v} ${a}${b?.exitDetails||""}${n}`),c&&E(f)};return null!=i&&D(i)?i.then(n,o):n(i),i}return A.apply(this,e)}}}(e,!0)}const N=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,o=!1){this.provider=e,this._isDebugging=o,this.logLevel=t}enabled(e){return this.level>=U(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=U(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){if(this.level<4&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!0,t)}`)}error(e,t,...o){if(this.level<1&&!this.isDebugging)return;let i;if(i=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??""}`,null==i){const t=e instanceof Error?e.stack:void 0;if(t){const e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(i=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!1,o)}${null!=e?`\n${String(e)}`:""}`)}log(e,...t){if(this.level<3&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}warn(e,...t){if(this.level<2&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map((e=>this.toLoggable(e,t))).join(", ")}]`;const o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,t)}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";const o=t.map((e=>this.toLoggable(e))).join(", ");return 0!==o.length?` — ${o}`:""}};function U(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}const H={enabled:e=>N.enabled(e)||N.isDebugging,log:(e,t,o,...i)=>{switch(e){case"error":N.error("",t,o,...i);break;case"warn":N.warn(t,o,...i);break;case"info":N.log(t,o,...i);break;default:N.debug(t,o,...i)}}};var W;function j(e){return(e=e.toString().toLowerCase()).includes("ms")?parseFloat(e):e.includes("s")?1e3*parseFloat(e):parseFloat(e)}function q(e,t){return new Promise((o=>{e.addEventListener(t,(function i(n){n.target===e&&(e.removeEventListener(t,i),o())}))}))}(W||(W={})).on=function(e,t,o,i){let n=!1;if("string"==typeof e){const r=function(t){const i=t?.target?.closest(e);null!=i&&o(t,i)};return document.addEventListener(t,r,i??!0),{dispose:()=>{n||(n=!0,document.removeEventListener(t,r,i??!0))}}}const r=function(e){o(e,this)};return e.addEventListener(t,r,i??!1),{dispose:()=>{n||(n=!0,e.removeEventListener(t,r,i??!1))}}},Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");class Stopwatch{constructor(e,t,...o){let i;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:T(e??""),i="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??H,this._time=C(),null!=i){if(!this.logProvider.enabled(this.logLevel))return;o.length?this.logProvider.log(this.logLevel,this.logScope,`${i.message??""}${i.suffix??""}`,...o):this.logProvider.log(this.logLevel,this.logScope,`${i.message??""}${i.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){const[e,t]=C(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=C(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);const[o,i]=C(this._time),n=1e3*o+Math.floor(i/1e6),r=e?.message??"";this.logProvider.log(n>250?"warn":this.logLevel,this.logScope,`${r?`${r} `:""}[${n}ms]${e?.suffix??""}`)}}const G=class _Emitter{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(e,t,o)=>{null==this.listeners&&(this.listeners=new LinkedList);const i=this.listeners.push(null==t?e:[e,t]),n={dispose:()=>{n.dispose=_Emitter._noop,this._disposed||i()}};return Array.isArray(o)&&o.push(n),n}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){const[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};G._noop=function(){};let J=G;const Y={done:!0,value:void 0},K=class _Node{constructor(e){this.element=e,this.next=_Node.Undefined,this.prev=_Node.Undefined}};K.Undefined=new K(void 0);let Z=K;class LinkedList{constructor(){this._first=Z.Undefined,this._last=Z.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===Z.Undefined}clear(){this._first=Z.Undefined,this._last=Z.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){const o=new Z(e);if(this._first===Z.Undefined)this._first=o,this._last=o;else if(t){const e=this._last;this._last=o,o.prev=e,e.next=o}else{const e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let i=!1;return()=>{i||(i=!0,this._remove(o))}}shift(){if(this._first===Z.Undefined)return;const e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===Z.Undefined)return;const e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==Z.Undefined&&e.next!==Z.Undefined){const t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===Z.Undefined&&e.next===Z.Undefined?(this._first=Z.Undefined,this._last=Z.Undefined):e.next===Z.Undefined?(this._last=this._last.prev,this._last.next=Z.Undefined):e.prev===Z.Undefined&&(this._first=this._first.next,this._first.prev=Z.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===Z.Undefined?Y:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){const e=[];for(let t=this._first;t!==Z.Undefined;t=t.next)e.push(t.element);return e}}var X=Object.defineProperty,ee=Object.getOwnPropertyDescriptor,te=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?ee(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&X(t,o,r),r};let oe;function ie(){return oe??=acquireVsCodeApi()}const ne=A();function re(){return`webview:${ne.next()}`}let se=class{constructor(e){this.appName=e,this._onReceiveMessage=new J,this._pendingHandlers=new Map,this._api=ie(),this._disposable=W.on(window,"message",(e=>this.onMessageReceived(e)))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){const t=P.get(R.current),o=e.data;if(o.packed&&o.params instanceof Uint8Array){const i=function(e,t,...o){return(t?.provider??H).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...o):void 0}(T(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});this._textDecoder??=new TextDecoder,o.params=JSON.parse(this._textDecoder.decode(o.params)),i?.stop()}if(null==o.completionId)this._onReceiveMessage.fire(o);else{const e=le(o.method,o.completionId);this._pendingHandlers.get(e)?.(o)}}sendCommand(e,t){const o=re();this.postMessage({id:o,scope:e.scope,method:e.method,params:t})}async sendRequest(e,t){const o=re(),i=new Promise(((t,i)=>{const n=le(e.response.method,o);let r;function a(){clearTimeout(r),r=void 0,this._pendingHandlers.delete(n)}r=setTimeout((()=>{a.call(this),i(new Error(`Timed out waiting for completion of ${n}`))}),6e4),this._pendingHandlers.set(n,(e=>{a.call(this),queueMicrotask((()=>t(e.params)))}))}));return this.postMessage({id:o,scope:e.scope,method:e.method,params:t,completionId:o}),i}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}};var ae;function le(e,t){return`${e}|${t}`}te([B({args:{0:e=>`${e.data.id}, method=${e.data.method}`}})],se.prototype,"onMessageReceived",1),te([B({args:{0:e=>e.method,1:!1}})],se.prototype,"sendCommand",1),te([B({args:{0:e=>e.method,1:!1,2:!1}})],se.prototype,"sendRequest",1),te([B({args:{0:e=>`${e.id}, method=${e.method}`}})],se.prototype,"postMessage",1),se=te([(ae=(e,t)=>`${e.appName}(${t})`,e=>{e[I]=ae})],se);function ce(e,t){const o=Math.pow(10,t);return Math.round(e*o)/o}class RGBA{constructor(e,t,o,i=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,o)),this.a=ce(Math.max(Math.min(1,i),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}}class HSLA{constructor(e,t,o,i){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=ce(Math.max(Math.min(1,t),0),3),this.l=ce(Math.max(Math.min(1,o),0),3),this.a=ce(Math.max(Math.min(1,i),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,i=e.b/255,n=e.a,r=Math.max(t,o,i),a=Math.min(t,o,i);let l=0,c=0;const d=(a+r)/2,p=r-a;if(p>0){switch(c=Math.min(d<=.5?p/(2*d):p/(2-2*d),1),r){case t:l=(o-i)/p+(o<i?6:0);break;case o:l=(i-t)/p+2;break;case i:l=(t-o)/p+4}l*=60,l=Math.round(l)}return new HSLA(l,c,d,n)}static _hue2rgb(e,t,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+6*(t-e)*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}static toRGBA(e){const t=e.h/360,{s:o,l:i,a:n}=e;let r,a,l;if(0===o)r=a=l=i;else{const e=i<.5?i*(1+o):i+o-i*o,n=2*i-e;r=HSLA._hue2rgb(n,e,t+1/3),a=HSLA._hue2rgb(n,e,t),l=HSLA._hue2rgb(n,e,t-1/3)}return new RGBA(Math.round(255*r),Math.round(255*a),Math.round(255*l),n)}}class HSVA{constructor(e,t,o,i){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=ce(Math.max(Math.min(1,t),0),3),this.v=ce(Math.max(Math.min(1,o),0),3),this.a=ce(Math.max(Math.min(1,i),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,i=e.b/255,n=Math.max(t,o,i),r=n-Math.min(t,o,i),a=0===n?0:r/n;let l;return l=0===r?0:n===t?((o-i)/r%6+6)%6:n===o?(i-t)/r+2:(t-o)/r+4,new HSVA(Math.round(60*l),a,n,e.a)}static toRGBA(e){const{h:t,s:o,v:i,a:n}=e,r=i*o,a=r*(1-Math.abs(t/60%2-1)),l=i-r;let[c,d,p]=[0,0,0];return t<60?(c=r,d=a):t<120?(c=a,d=r):t<180?(d=r,p=a):t<240?(d=a,p=r):t<300?(c=a,p=r):t<=360&&(c=r,p=a),c=Math.round(255*(c+l)),d=Math.round(255*(d+l)),p=Math.round(255*(p+l)),new RGBA(c,d,p,n)}}function de(e,t){return t.getPropertyValue(e).trim()}const pe=class _Color{static from(e){return e instanceof _Color?e:be(e)||_Color.red}static fromCssVariable(e,t){return be(de(e,t))||_Color.red}static fromHex(e){return ve(e)||_Color.red}static equals(e,t){return!e&&!t||!(!e||!t)&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(!e)throw new Error("Color needs a value");if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else{if(!(e instanceof HSVA))throw new Error("Invalid color ctor argument");this._hsva=e,this.rgba=HSVA.toRGBA(e)}}equals(e){return null!=e&&(Boolean(e)&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva))}getRelativeLuminance(){return ce(.2126*_Color._relativeLuminanceForComponent(this.rgba.r)+.7152*_Color._relativeLuminanceForComponent(this.rgba.g)+.0722*_Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new he(new RGBA(0,0,0,e.rgba.a));if(1===t)return new he(new RGBA(255,255,255,e.rgba.a));const o=e.getRelativeLuminance();let i=20;const n=(e,o)=>{const r=e.mix(o,.5),a=r.getRelativeLuminance();return Math.abs(t-a)<1e-7||!i--?r:a>t?n(e,r):n(r,o)},r=(o>t?n(he.black,e):n(e,he.white)).rgba;return new he(new RGBA(r.r,r.g,r.b,e.rgba.a))}(this,e)}getContrastRatio(e){const t=this.getRelativeLuminance(),o=e.getRelativeLuminance();return t>o?(t+.05)/(o+.05):(o+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){const{r:t,g:o,b:i,a:n}=this.rgba;return new _Color(new RGBA(t,o,i,n*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new _Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){const t=e.rgba,o=this.rgba.a,i=t.a,n=o+i*(1-o);if(n<1e-6)return _Color.transparent;const r=this.rgba.r*o/n+t.r*i*(1-o)/n,a=this.rgba.g*o/n+t.g*i*(1-o)/n,l=this.rgba.b*o/n+t.b*i*(1-o)/n;return new _Color(new RGBA(r,a,l,n))}mix(e,t){return function(e,t,o){const i=e.rgba,n=t.rgba;return new he(new RGBA(i.r+o*(n.r-i.r),i.g+o*(n.g-i.g),i.b+o*(n.b-i.b),i.a+o*(n.a-i.a)))}(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;const{r:t,g:o,b:i,a:n}=this.rgba;return new _Color(new RGBA(e.rgba.r-n*(e.rgba.r-t),e.rgba.g-n*(e.rgba.g-o),e.rgba.b-n*(e.rgba.b-i),1))}flatten(...e){const t=e.reduceRight(((e,t)=>_Color._flatten(t,e)));return _Color._flatten(this,t)}static _flatten(e,t){const o=1-e.rgba.a;return new _Color(new RGBA(o*t.rgba.r+e.rgba.a*e.rgba.r,o*t.rgba.g+e.rgba.a*e.rgba.g,o*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){if(e.isOpaque())return fe(e);return ue(e)}(this)),this._toString}static getLighterColor(e,t,o){if(e.isLighterThan(t))return e;o=o||.5;const i=e.getRelativeLuminance(),n=t.getRelativeLuminance();return o=o*(n-i)/n,e.lighten(o)}static getDarkerColor(e,t,o){if(e.isDarkerThan(t))return e;o=o||.5;const i=e.getRelativeLuminance();return o=o*(i-t.getRelativeLuminance())/i,e.darken(o)}};pe.white=new pe(new RGBA(255,255,255,1)),pe.black=new pe(new RGBA(0,0,0,1)),pe.red=new pe(new RGBA(255,0,0,1)),pe.blue=new pe(new RGBA(0,0,255,1)),pe.green=new pe(new RGBA(0,255,0,1)),pe.cyan=new pe(new RGBA(0,255,255,1)),pe.lightgrey=new pe(new RGBA(211,211,211,1)),pe.transparent=new pe(new RGBA(0,0,0,0));let he=pe;function ue(e){return`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}function ge(e){const t=e.toString(16);return 2!==t.length?`0${t}`:t}function fe(e){return`#${ge(e.rgba.r)}${ge(e.rgba.g)}${ge(e.rgba.b)}`}const me=/^((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function be(e){if(0===(e=e.trim()).length)return null;if(e.charCodeAt(0)===O.Hash)return ve(e);const t=me.exec(e);if(null==t)return null;const o=t[1];let i;switch(o){case"rgb":case"hsl":i=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),1];break;case"rgba":case"hsla":i=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),parseFloat(t[5])];break;default:return null}switch(o){case"rgb":case"rgba":return new he(new RGBA(i[0],i[1],i[2],i[3]));case"hsl":case"hsla":return new he(new HSLA(i[0],i[1],i[2],i[3]))}return he.red}function ve(e){const t=(e=e.trim()).length;if(0===t)return null;if(e.charCodeAt(0)!==O.Hash)return null;switch(t){case 7:{const t=16*ye(e.charCodeAt(1))+ye(e.charCodeAt(2)),o=16*ye(e.charCodeAt(3))+ye(e.charCodeAt(4)),i=16*ye(e.charCodeAt(5))+ye(e.charCodeAt(6));return new he(new RGBA(t,o,i,1))}case 9:{const t=16*ye(e.charCodeAt(1))+ye(e.charCodeAt(2)),o=16*ye(e.charCodeAt(3))+ye(e.charCodeAt(4)),i=16*ye(e.charCodeAt(5))+ye(e.charCodeAt(6)),n=16*ye(e.charCodeAt(7))+ye(e.charCodeAt(8));return new he(new RGBA(t,o,i,n/255))}case 4:{const t=ye(e.charCodeAt(1)),o=ye(e.charCodeAt(2)),i=ye(e.charCodeAt(3));return new he(new RGBA(16*t+t,16*o+o,16*i+i))}case 5:{const t=ye(e.charCodeAt(1)),o=ye(e.charCodeAt(2)),i=ye(e.charCodeAt(3)),n=ye(e.charCodeAt(4));return new he(new RGBA(16*t+t,16*o+o,16*i+i,(16*n+n)/255))}default:return null}}function ye(e){switch(e){case O.Digit0:return 0;case O.Digit1:return 1;case O.Digit2:return 2;case O.Digit3:return 3;case O.Digit4:return 4;case O.Digit5:return 5;case O.Digit6:return 6;case O.Digit7:return 7;case O.Digit8:return 8;case O.Digit9:return 9;case O.a:case O.A:return 10;case O.b:case O.B:return 11;case O.c:case O.C:return 12;case O.d:case O.D:return 13;case O.e:case O.E:return 14;case O.f:case O.F:return 15}return 0}const we=new J,ke=we.event;function _e(e){const t=document.documentElement,o=window.getComputedStyle(t),i=document.body.classList,n=i.contains("vscode-light")||i.contains("vscode-high-contrast-light"),r=i.contains("vscode-high-contrast")||i.contains("vscode-high-contrast-light"),a=de("--vscode-editor-background",o);let l=de("--vscode-editor-foreground",o);return l||(l=de("--vscode-foreground",o)),{colors:{background:a,foreground:l},computedStyle:o,isLightTheme:n,isHighContrastTheme:r,isInitializing:null==e}}class App{constructor(e){this.appName=e;const t=[],i=_e();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(i),t.push(ke(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",N.configure({name:e,createChannel:function(e){return{name:e,appendLine:function(e){}}}},"off"),this.log(`${e}()`),this._api=ie(),this._hostIpc=new se(this.appName),t.push(this._hostIpc),null!=this.state){const e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){const e=new MutationObserver((e=>{we.fire(_e(e))}));return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame((()=>{this.log(`${e}(): initializing...`);try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(this._hostIpc.onReceiveMessage((e=>{if(!0===n.is(e))window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur"));else this.onMessageReceived(e)}))),this.sendCommand(o,void 0),this.onInitialized?.()}finally{document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}})),t.push(W.on(window,"pagehide",(()=>{t?.forEach((e=>e.dispose())),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=void 0})))}bind(){document.querySelectorAll("a").forEach((e=>{e.href===e.title&&e.removeAttribute("title")})),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);const e=f((e=>{this.sendCommand(i,e)}),150);this.bindDisposables.push(W.on(document,"focusin",(t=>{const o=t.composedPath().some((e=>"INPUT"===e.tagName));!0===this._focused&&this._inputFocused===o||(this._focused=!0,this._inputFocused=o,e({focused:!0,inputFocused:o}))})),W.on(document,"focusout",(()=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))})))}log(e,...t){"string"==typeof e?N.log(e,...t):N.log(e,t.shift(),...t)}getState(){return this._api.getState()}sendCommand(e,t){this._hostIpc.sendCommand(e,t)}sendRequest(e,t){return this._hostIpc.sendRequest(e,t)}setState(e){this._api.setState(e)}}var Ce={408:(e,t)=>{var o=Symbol.for("react.element"),i=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),g=Symbol.iterator,f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,b={};function v(e,t,o){this.props=e,this.context=t,this.refs=b,this.updater=o||f}function y(){}function w(e,t,o){this.props=e,this.context=t,this.refs=b,this.updater=o||f}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var k=w.prototype=new y;k.constructor=w,m(k,v.prototype),k.isPureReactComponent=!0;var _=Array.isArray,x=Object.prototype.hasOwnProperty,C={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function A(e,t,i){var n,r={},a=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(a=""+t.key),t)x.call(t,n)&&!S.hasOwnProperty(n)&&(r[n]=t[n]);var c=arguments.length-2;if(1===c)r.children=i;else if(1<c){for(var d=Array(c),p=0;p<c;p++)d[p]=arguments[p+2];r.children=d}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===r[n]&&(r[n]=c[n]);return{$$typeof:o,type:e,key:a,ref:l,props:r,_owner:C.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,n,r,a){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var c=!1;if(null===e)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case i:c=!0}}if(c)return a=a(c=e),e=""===r?"."+E(c,0):r,_(a)?(n="",null!=e&&(n=e.replace(P,"$&/")+"/"),T(a,t,n,"",(function(e){return e}))):null!=a&&(R(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+e)),t.push(a)),1;if(c=0,r=""===r?".":r+":",_(e))for(var d=0;d<e.length;d++){var p=r+E(l=e[d],d);c+=T(l,t,n,p,a)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=g&&e[g]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),d=0;!(l=e.next()).done;)c+=T(l=l.value,t,n,p=r+E(l,d++),a);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function D(e,t,o){if(null==e)return e;var i=[],n=0;return T(e,i,"","",(function(e){return t.call(o,e,n++)})),i}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var L={current:null},M={transition:null},F={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:M,ReactCurrentOwner:C};t.Children={map:D,forEach:function(e,t,o){D(e,(function(){t.apply(this,arguments)}),o)},count:function(e){var t=0;return D(e,(function(){t++})),t},toArray:function(e){return D(e,(function(e){return e}))||[]},only:function(e){if(!R(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=n,t.Profiler=a,t.PureComponent=w,t.StrictMode=r,t.Suspense=p,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,t.cloneElement=function(e,t,i){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=m({},e.props),r=e.key,a=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,l=C.current),void 0!==t.key&&(r=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(d in t)x.call(t,d)&&!S.hasOwnProperty(d)&&(n[d]=void 0===t[d]&&void 0!==c?c[d]:t[d])}var d=arguments.length-2;if(1===d)n.children=i;else if(1<d){c=Array(d);for(var p=0;p<d;p++)c[p]=arguments[p+2];n.children=c}return{$$typeof:o,type:e.type,key:r,ref:a,props:n,_owner:l}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=A,t.createFactory=function(e){var t=A.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:d,render:e}},t.isValidElement=R,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=M.transition;M.transition={};try{e()}finally{M.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return L.current.useCallback(e,t)},t.useContext=function(e){return L.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return L.current.useDeferredValue(e)},t.useEffect=function(e,t){return L.current.useEffect(e,t)},t.useId=function(){return L.current.useId()},t.useImperativeHandle=function(e,t,o){return L.current.useImperativeHandle(e,t,o)},t.useInsertionEffect=function(e,t){return L.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return L.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return L.current.useMemo(e,t)},t.useReducer=function(e,t,o){return L.current.useReducer(e,t,o)},t.useRef=function(e){return L.current.useRef(e)},t.useState=function(e){return L.current.useState(e)},t.useSyncExternalStore=function(e,t,o){return L.current.useSyncExternalStore(e,t,o)},t.useTransition=function(){return L.current.useTransition()},t.version="18.2.0"},294:(e,t,o)=>{e.exports=o(408)}},Ae={};function Re(e){var t=Ae[e];if(void 0!==t)return t.exports;var o=Ae[e]={exports:{}};return Ce[e](o,o.exports,Re),o.exports}Re.d=(e,t)=>{for(var o in t)Re.o(t,o)&&!Re.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},Re.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var Pe={};(()=>{Re.d(Pe,{Tn:()=>Se,qE:()=>He,HE:()=>Le,Ct:()=>Be,zx:()=>Ge,M1:()=>Je,sX:()=>bo,D0:()=>yo,fs:()=>vo,Tw:()=>Lt,ud:()=>It,wt:()=>Bt,ne:()=>Ut,Ku:()=>jt,FU:()=>Gt,XO:()=>co,Ze:()=>ho,K$:()=>uo,cX:()=>Co,Js:()=>So,J9:()=>Ao,si:()=>ro,sg:()=>Eo,hW:()=>To,II:()=>Ro,v2:()=>Mo,sN:()=>Do,Lb:()=>Ho,J2:()=>xe,$$:()=>po,Vp:()=>Bo,u:()=>$e,fW:()=>Oo,WV:()=>ae,h4:()=>se,kZ:()=>re});const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),i=new WeakMap;class s{constructor(e,t,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const o=this.t;if(t&&void 0===e){const t=void 0!==o&&1===o.length;t&&(e=i.get(o)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&i.set(o,e))}return e}toString(){return this.cssText}}const n=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,o,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1]),e[0]);return new s(i,e,o)},r=(o,i)=>{if(t)o.adoptedStyleSheets=i.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const t of i){const i=document.createElement("style"),n=e.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=t.cssText,o.appendChild(i)}},a=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new s("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:p,getOwnPropertySymbols:h,getPrototypeOf:u}=Object,g=globalThis,f=g.trustedTypes,m=f?f.emptyScript:"",b=g.reactiveElementPolyfillSupport,v=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?m:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},w=(e,t)=>!l(e,t),k={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:w};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=k){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,t);void 0!==i&&c(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){const{get:i,set:n}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){const r=i?.call(this);n.call(this,t),this.requestUpdate(e,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??k}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const e=u(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...p(e),...h(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$ES??=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$ES?.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return r(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$ES?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t){const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(void 0!==i&&!0===o.reflect){const n=(void 0!==o.converter?.toAttribute?o.converter:y).toAttribute(t,o.type);this._$Em=e,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){const o=this.constructor,i=o._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=o.getPropertyOptions(i),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:y;this._$Em=i,this[i]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o,i=!1,n){if(void 0!==e){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??w)(i?n:this[e],t))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$ES?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$ES?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EO(e,this[e]))),this._$ET()}updated(e){}firstUpdated(e){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[v("elementProperties")]=new Map,$[v("finalized")]=new Map,b?.({ReactiveElement:$}),(g.reactiveElementVersions??=[]).push("2.0.0");const _=globalThis,x=_.trustedTypes,C=x?x.createPolicy("lit-html",{createHTML:e=>e}):void 0,S="$lit$",A=`lit$${(Math.random()+"").slice(9)}$`,R="?"+A,P=`<${R}>`,E=document,T=()=>E.createComment(""),D=e=>null===e||"object"!=typeof e&&"function"!=typeof e,O=Array.isArray,L="[ \t\n\f\r]",M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,z=/>/g,I=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,N=/"/g,U=/^(?:script|style|textarea|title)$/i,H=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),W=H(1),j=(H(2),Symbol.for("lit-noChange")),q=Symbol.for("lit-nothing"),G=new WeakMap,J=E.createTreeWalker(E,129);function Y(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(t):t}class Q{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let n=0,r=0;const a=e.length-1,l=this.parts,[c,d]=((e,t)=>{const o=e.length-1,i=[];let n,r=2===t?"<svg>":"",a=M;for(let t=0;t<o;t++){const o=e[t];let l,c,d=-1,p=0;for(;p<o.length&&(a.lastIndex=p,c=a.exec(o),null!==c);)p=a.lastIndex,a===M?"!--"===c[1]?a=F:void 0!==c[1]?a=z:void 0!==c[2]?(U.test(c[2])&&(n=RegExp("</"+c[2],"g")),a=I):void 0!==c[3]&&(a=I):a===I?">"===c[0]?(a=n??M,d=-1):void 0===c[1]?d=-2:(d=a.lastIndex-c[2].length,l=c[1],a=void 0===c[3]?I:'"'===c[3]?N:B):a===N||a===B?a=I:a===F||a===z?a=M:(a=I,n=void 0);const h=a===I&&e[t+1].startsWith("/>")?" ":"";r+=a===M?o+P:d>=0?(i.push(l),o.slice(0,d)+S+o.slice(d)+A+h):o+A+(-2===d?t:h)}return[Y(e,r+(e[o]||"<?>")+(2===t?"</svg>":"")),i]})(e,t);if(this.el=Q.createElement(c,o),J.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=J.nextNode())&&l.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(S)){const t=d[r++],o=i.getAttribute(e).split(A),a=/([.?@])?(.*)/.exec(t);l.push({type:1,index:n,name:a[2],strings:o,ctor:"."===a[1]?it:"?"===a[1]?rt:"@"===a[1]?st:nt}),i.removeAttribute(e)}else e.startsWith(A)&&(l.push({type:6,index:n}),i.removeAttribute(e));if(U.test(i.tagName)){const e=i.textContent.split(A),t=e.length-1;if(t>0){i.textContent=x?x.emptyScript:"";for(let o=0;o<t;o++)i.append(e[o],T()),J.nextNode(),l.push({type:2,index:++n});i.append(e[t],T())}}}else if(8===i.nodeType)if(i.data===R)l.push({type:2,index:n});else{let e=-1;for(;-1!==(e=i.data.indexOf(A,e+1));)l.push({type:7,index:n}),e+=A.length-1}n++}}static createElement(e,t){const o=E.createElement("template");return o.innerHTML=e,o}}function K(e,t,o=e,i){if(t===j)return t;let n=void 0!==i?o._$Co?.[i]:o._$Cl;const r=D(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(e),n._$AT(e,o,i)),void 0!==i?(o._$Co??=[])[i]=n:o._$Cl=n),void 0!==n&&(t=K(e,n._$AS(e,t.values),n,i)),t}class et{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,i=(e?.creationScope??E).importNode(t,!0);J.currentNode=i;let n=J.nextNode(),r=0,a=0,l=o[0];for(;void 0!==l;){if(r===l.index){let t;2===l.type?t=new ot(n,n.nextSibling,this,e):1===l.type?t=new l.ctor(n,l.name,l.strings,this,e):6===l.type&&(t=new at(n,this,e)),this._$AV.push(t),l=o[++a]}r!==l?.index&&(n=J.nextNode(),r++)}return J.currentNode=E,i}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class ot{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,i){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=K(this,e,t),D(e)?e===q||null==e||""===e?(this._$AH!==q&&this._$AR(),this._$AH=q):e!==this._$AH&&e!==j&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>O(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==q&&D(this._$AH)?this._$AA.nextSibling.data=e:this.$(E.createTextNode(e)),this._$AH=e}g(e){const{values:t,_$litType$:o}=e,i="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=Q.createElement(Y(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new et(i,this),o=e.u(this.options);e.p(t),this.$(o),this._$AH=e}}_$AC(e){let t=G.get(e.strings);return void 0===t&&G.set(e.strings,t=new Q(e)),t}T(e){O(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,i=0;for(const n of e)i===t.length?t.push(o=new ot(this.k(T()),this.k(T()),this,this.options)):o=t[i],o._$AI(n),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class nt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,i,n){this.type=1,this._$AH=q,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=q}_$AI(e,t=this,o,i){const n=this.strings;let r=!1;if(void 0===n)e=K(this,e,t,0),r=!D(e)||e!==this._$AH&&e!==j,r&&(this._$AH=e);else{const i=e;let a,l;for(e=n[0],a=0;a<n.length-1;a++)l=K(this,i[o+a],t,a),l===j&&(l=this._$AH[a]),r||=!D(l)||l!==this._$AH[a],l===q?e=q:e!==q&&(e+=(l??"")+n[a+1]),this._$AH[a]=l}r&&!i&&this.j(e)}j(e){e===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class it extends nt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===q?void 0:e}}class rt extends nt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==q)}}class st extends nt{constructor(e,t,o,i,n){super(e,t,o,i,n),this.type=5}_$AI(e,t=this){if((e=K(this,e,t,0)??q)===j)return;const o=this._$AH,i=e===q&&o!==q||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==q&&(o===q||i);i&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class at{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){K(this,e)}}const Z=_.litHtmlPolyfillSupport;Z?.(Q,ot),(_.litHtmlVersions??=[]).push("3.0.0");class ct extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const i=o?.renderBefore??t;let n=i._$litPart$;if(void 0===n){const e=o?.renderBefore??null;i._$litPart$=n=new ot(t.insertBefore(T(),e),e,void 0,o??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return j}}ct._$litElement$=!0,ct.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ct});const X=globalThis.litElementPolyfillSupport;X?.({LitElement:ct}),(globalThis.litElementVersions??=[]).push("4.0.0");const ee={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:w},te=(e=ee,t,o)=>{const{kind:i,metadata:n}=o;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(o.name,e),"accessor"===i){const{name:i}=o;return{set(o){const n=t.get.call(this);t.set.call(this,o),this.requestUpdate(i,n,e)},init(t){return void 0!==t&&this.C(i,void 0,e),t}}}if("setter"===i){const{name:i}=o;return function(o){const n=this[i];t.call(this,o),this.requestUpdate(i,n,e)}}throw Error("Unsupported decorator location: "+i)};function oe(e){return(t,o)=>"object"==typeof o?te(e,t,o):((e,t,o)=>{const i=t.hasOwnProperty(o);return t.constructor.createProperty(o,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}const ie=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function ne(e,t){return(o,i,n)=>{const r=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:a}="object"==typeof i?o:n??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return ie(o,i,{get(){if(t){let t=e.call(this);return void 0===t&&(t=r(this),a.call(this,t)),t}return r(this)}})}return ie(o,i,{get(){return r(this)}})}}class gt extends ct{}const re=n`.sr-only,.sr-only-focusable:not(:active):not(:focus){clip:rect(0 0 0 0);clip-path:inset(50%);width:1px;height:1px;overflow:hidden;position:absolute;white-space:nowrap}`,se=n``,ae=n`:host{box-sizing:border-box}:host *,:host ::after,:host ::before{box-sizing:inherit}[hidden]{display:none!important}`,le=Math.min,ce=Math.max,de=Math.round,pe=(Math.floor,e=>({x:e,y:e})),he={left:"right",right:"left",bottom:"top",top:"bottom"},ue={start:"end",end:"start"};function ge(e,t,o){return ce(e,le(t,o))}function fe(e,t){return"function"==typeof e?e(t):e}function me(e){return e.split("-")[0]}function be(e){return e.split("-")[1]}function ve(e){return"x"===e?"y":"x"}function ye(e){return"y"===e?"height":"width"}function we(e){return["top","bottom"].includes(me(e))?"y":"x"}function ke(e){return ve(we(e))}function _e(e){return e.replace(/start|end/g,(e=>ue[e]))}function Ce(e){return e.replace(/left|right|bottom|top/g,(e=>he[e]))}function Ae(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function Ee(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Te(e,t,o){let{reference:i,floating:n}=e;const r=we(t),a=ke(t),l=ye(a),c=me(t),d="y"===r,p=i.x+i.width/2-n.width/2,h=i.y+i.height/2-n.height/2,u=i[l]/2-n[l]/2;let g;switch(c){case"top":g={x:p,y:i.y-n.height};break;case"bottom":g={x:p,y:i.y+i.height};break;case"right":g={x:i.x+i.width,y:h};break;case"left":g={x:i.x-n.width,y:h};break;default:g={x:i.x,y:i.y}}switch(be(t)){case"start":g[a]-=u*(o&&d?-1:1);break;case"end":g[a]+=u*(o&&d?-1:1)}return g}async function De(e,t){var o;void 0===t&&(t={});const{x:i,y:n,platform:r,rects:a,elements:l,strategy:c}=e,{boundary:d="clippingAncestors",rootBoundary:p="viewport",elementContext:h="floating",altBoundary:u=!1,padding:g=0}=fe(t,e),f=Ae(g),m=l[u?"floating"===h?"reference":"floating":h],b=Ee(await r.getClippingRect({element:null==(o=await(null==r.isElement?void 0:r.isElement(m)))||o?m:m.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(l.floating)),boundary:d,rootBoundary:p,strategy:c})),v="floating"===h?{...a.floating,x:i,y:n}:a.reference,y=await(null==r.getOffsetParent?void 0:r.getOffsetParent(l.floating)),w=await(null==r.isElement?void 0:r.isElement(y))&&await(null==r.getScale?void 0:r.getScale(y))||{x:1,y:1},k=Ee(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:v,offsetParent:y,strategy:c}):v);return{top:(b.top-k.top+f.top)/w.y,bottom:(k.bottom-b.bottom+f.bottom)/w.y,left:(b.left-k.left+f.left)/w.x,right:(k.right-b.right+f.right)/w.x}}const Oe=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var o,i;const{placement:n,middlewareData:r,rects:a,initialPlacement:l,platform:c,elements:d}=t,{mainAxis:p=!0,crossAxis:h=!0,fallbackPlacements:u,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:m=!0,...b}=fe(e,t);if(null!=(o=r.arrow)&&o.alignmentOffset)return{};const v=me(n),y=me(l)===l,w=await(null==c.isRTL?void 0:c.isRTL(d.floating)),k=u||(y||!m?[Ce(l)]:function(e){const t=Ce(e);return[_e(e),t,_e(t)]}(l));u||"none"===f||k.push(...function(e,t,o,i){const n=be(e);let r=function(e,t,o){const i=["left","right"],n=["right","left"],r=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return o?t?n:i:t?i:n;case"left":case"right":return t?r:a;default:return[]}}(me(e),"start"===o,i);return n&&(r=r.map((e=>e+"-"+n)),t&&(r=r.concat(r.map(_e)))),r}(l,m,f,w));const _=[l,...k],x=await De(t,b),C=[];let S=(null==(i=r.flip)?void 0:i.overflows)||[];if(p&&C.push(x[v]),h){const e=function(e,t,o){void 0===o&&(o=!1);const i=be(e),n=ke(e),r=ye(n);let a="x"===n?i===(o?"end":"start")?"right":"left":"start"===i?"bottom":"top";return t.reference[r]>t.floating[r]&&(a=Ce(a)),[a,Ce(a)]}(n,a,w);C.push(x[e[0]],x[e[1]])}if(S=[...S,{placement:n,overflows:C}],!C.every((e=>e<=0))){var A,R;const e=((null==(A=r.flip)?void 0:A.index)||0)+1,t=_[e];if(t)return{data:{index:e,overflows:S},reset:{placement:t}};let o=null==(R=S.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:R.placement;if(!o)switch(g){case"bestFit":{var P;const e=null==(P=S.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:P[0];e&&(o=e);break}case"initialPlacement":o=l}if(n!==o)return{reset:{placement:o}}}return{}}}},Me=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){const{x:o,y:i}=t,n=await async function(e,t){const{placement:o,platform:i,elements:n}=e,r=await(null==i.isRTL?void 0:i.isRTL(n.floating)),a=me(o),l=be(o),c="y"===we(o),d=["left","top"].includes(a)?-1:1,p=r&&c?-1:1,h=fe(t,e);let{mainAxis:u,crossAxis:g,alignmentAxis:f}="number"==typeof h?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...h};return l&&"number"==typeof f&&(g="end"===l?-1*f:f),c?{x:g*p,y:u*d}:{x:u*d,y:g*p}}(t,e);return{x:o+n.x,y:i+n.y,data:n}}}};function Fe(e){return Ne(e)?(e.nodeName||"").toLowerCase():"#document"}function ze(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function Ie(e){var t;return null==(t=(Ne(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function Ne(e){return e instanceof Node||e instanceof ze(e).Node}function Ue(e){return e instanceof Element||e instanceof ze(e).Element}function We(e){return e instanceof HTMLElement||e instanceof ze(e).HTMLElement}function je(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof ze(e).ShadowRoot)}function qe(e){const{overflow:t,overflowX:o,overflowY:i,display:n}=Ze(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+o)&&!["inline","contents"].includes(n)}function Ve(e){return["table","td","th"].includes(Fe(e))}function Qe(e){const t=Ye(),o=Ze(e);return"none"!==o.transform||"none"!==o.perspective||!!o.containerType&&"normal"!==o.containerType||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||["transform","perspective","filter"].some((e=>(o.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(o.contain||"").includes(e)))}function Ye(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Ke(e){return["html","body","#document"].includes(Fe(e))}function Ze(e){return ze(e).getComputedStyle(e)}function Xe(e){return Ue(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function tt(e){if("html"===Fe(e))return e;const t=e.assignedSlot||e.parentNode||je(e)&&e.host||Ie(e);return je(t)?t.host:t}function lt(e){const t=tt(e);return Ke(t)?e.ownerDocument?e.ownerDocument.body:e.body:We(t)&&qe(t)?t:lt(t)}function dt(e,t,o){var i;void 0===t&&(t=[]),void 0===o&&(o=!0);const n=lt(e),r=n===(null==(i=e.ownerDocument)?void 0:i.body),a=ze(n);return r?t.concat(a,a.visualViewport||[],qe(n)?n:[],a.frameElement&&o?dt(a.frameElement):[]):t.concat(n,dt(n,[],o))}function pt(e){const t=Ze(e);let o=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const n=We(e),r=n?e.offsetWidth:o,a=n?e.offsetHeight:i,l=de(o)!==r||de(i)!==a;return l&&(o=r,i=a),{width:o,height:i,$:l}}function ht(e){return Ue(e)?e:e.contextElement}function ut(e){const t=ht(e);if(!We(t))return pe(1);const o=t.getBoundingClientRect(),{width:i,height:n,$:r}=pt(t);let a=(r?de(o.width):o.width)/i,l=(r?de(o.height):o.height)/n;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}const ft=pe(0);function mt(e){const t=ze(e);return Ye()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:ft}function bt(e,t,o,i){void 0===t&&(t=!1),void 0===o&&(o=!1);const n=e.getBoundingClientRect(),r=ht(e);let a=pe(1);t&&(i?Ue(i)&&(a=ut(i)):a=ut(e));const l=function(e,t,o){return void 0===t&&(t=!1),!(!o||t&&o!==ze(e))&&t}(r,o,i)?mt(r):pe(0);let c=(n.left+l.x)/a.x,d=(n.top+l.y)/a.y,p=n.width/a.x,h=n.height/a.y;if(r){const e=ze(r),t=i&&Ue(i)?ze(i):i;let o=e.frameElement;for(;o&&i&&t!==e;){const e=ut(o),t=o.getBoundingClientRect(),i=Ze(o),n=t.left+(o.clientLeft+parseFloat(i.paddingLeft))*e.x,r=t.top+(o.clientTop+parseFloat(i.paddingTop))*e.y;c*=e.x,d*=e.y,p*=e.x,h*=e.y,c+=n,d+=r,o=ze(o).frameElement}}return Ee({width:p,height:h,x:c,y:d})}function vt(e){return bt(Ie(e)).left+Xe(e).scrollLeft}function yt(e,t,o){let i;if("viewport"===t)i=function(e,t){const o=ze(e),i=Ie(e),n=o.visualViewport;let r=i.clientWidth,a=i.clientHeight,l=0,c=0;if(n){r=n.width,a=n.height;const e=Ye();(!e||e&&"fixed"===t)&&(l=n.offsetLeft,c=n.offsetTop)}return{width:r,height:a,x:l,y:c}}(e,o);else if("document"===t)i=function(e){const t=Ie(e),o=Xe(e),i=e.ownerDocument.body,n=ce(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),r=ce(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let a=-o.scrollLeft+vt(e);const l=-o.scrollTop;return"rtl"===Ze(i).direction&&(a+=ce(t.clientWidth,i.clientWidth)-n),{width:n,height:r,x:a,y:l}}(Ie(e));else if(Ue(t))i=function(e,t){const o=bt(e,!0,"fixed"===t),i=o.top+e.clientTop,n=o.left+e.clientLeft,r=We(e)?ut(e):pe(1);return{width:e.clientWidth*r.x,height:e.clientHeight*r.y,x:n*r.x,y:i*r.y}}(t,o);else{const o=mt(e);i={...t,x:t.x-o.x,y:t.y-o.y}}return Ee(i)}function wt(e,t){const o=tt(e);return!(o===t||!Ue(o)||Ke(o))&&("fixed"===Ze(o).position||wt(o,t))}function kt(e,t,o){const i=We(t),n=Ie(t),r="fixed"===o,a=bt(e,!0,r,t);let l={scrollLeft:0,scrollTop:0};const c=pe(0);if(i||!i&&!r)if(("body"!==Fe(t)||qe(n))&&(l=Xe(t)),i){const e=bt(t,!0,r,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else n&&(c.x=vt(n));return{x:a.left+l.scrollLeft-c.x,y:a.top+l.scrollTop-c.y,width:a.width,height:a.height}}function _t(e,t){return We(e)&&"fixed"!==Ze(e).position?t?t(e):e.offsetParent:null}function xt(e,t){const o=ze(e);if(!We(e))return o;let i=_t(e,t);for(;i&&Ve(i)&&"static"===Ze(i).position;)i=_t(i,t);return i&&("html"===Fe(i)||"body"===Fe(i)&&"static"===Ze(i).position&&!Qe(i))?o:i||function(e){let t=tt(e);for(;We(t)&&!Ke(t);){if(Qe(t))return t;t=tt(t)}return null}(e)||o}const $t={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:o,strategy:i}=e;const n=We(o),r=Ie(o);if(o===r)return t;let a={scrollLeft:0,scrollTop:0},l=pe(1);const c=pe(0);if((n||!n&&"fixed"!==i)&&(("body"!==Fe(o)||qe(r))&&(a=Xe(o)),We(o))){const e=bt(o);l=ut(o),c.x=e.x+o.clientLeft,c.y=e.y+o.clientTop}return{width:t.width*l.x,height:t.height*l.y,x:t.x*l.x-a.scrollLeft*l.x+c.x,y:t.y*l.y-a.scrollTop*l.y+c.y}},getDocumentElement:Ie,getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:i,strategy:n}=e;const r=[..."clippingAncestors"===o?function(e,t){const o=t.get(e);if(o)return o;let i=dt(e,[],!1).filter((e=>Ue(e)&&"body"!==Fe(e))),n=null;const r="fixed"===Ze(e).position;let a=r?tt(e):e;for(;Ue(a)&&!Ke(a);){const t=Ze(a),o=Qe(a);o||"fixed"!==t.position||(n=null),(r?!o&&!n:!o&&"static"===t.position&&n&&["absolute","fixed"].includes(n.position)||qe(a)&&!o&&wt(e,a))?i=i.filter((e=>e!==a)):n=t,a=tt(a)}return t.set(e,i),i}(t,this._c):[].concat(o),i],a=r[0],l=r.reduce(((e,o)=>{const i=yt(t,o,n);return e.top=ce(i.top,e.top),e.right=le(i.right,e.right),e.bottom=le(i.bottom,e.bottom),e.left=ce(i.left,e.left),e}),yt(t,a,n));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:xt,getElementRects:async function(e){let{reference:t,floating:o,strategy:i}=e;const n=this.getOffsetParent||xt,r=this.getDimensions;return{reference:kt(t,await n(o),i),floating:{x:0,y:0,...await r(o)}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){return pt(e)},getScale:ut,isElement:Ue,isRTL:function(e){return"rtl"===Ze(e).direction}},Ct=n`:host{display:contents;position:relative}.popover{display:block;left:0;top:0;position:absolute;z-index:var(--gk-popover-z-index,100)}.arrow{background:var(--gk-tooltip-background-color,#000);height:8px;position:absolute;transform:rotate(45deg);width:8px}`;var St=function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};class xe extends gt{constructor(){super(...arguments),this.arrow=!1,this.hover=!1,this.placement="top",this.popoverId=`popover_${Math.random().toString(16).slice(2)}`,this.srVisible=!1,this.open=!1,this.isTrackingOutside=!1}static{this.styles=[ae,re,Ct]}static{this.elementName="gk-popover"}firstUpdated(e){const t=this.triggerSlot.assignedElements()[0];this.triggerEl=t instanceof HTMLSlotElement?t.assignedElements({flatten:!0})[0]:t}async connectedCallback(){super.connectedCallback(),await this.updateComplete,await this.updateToggle(),null==this._toggleHandler&&(this._toggleHandler=this.handleToggle.bind(this)),this.hover?(this.triggerEl?.addEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.addEventListener("mouseout",this._toggleHandler,!1)):this.triggerEl?.addEventListener("focus",this._toggleHandler,!1)}disconnectedCallback(){super.disconnectedCallback(),null!=this._toggleHandler&&(this.triggerEl?.removeEventListener("focus",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseout",this._toggleHandler,!1),this._toggleHandler=void 0),this.disposeTrackOutside()}handleToggle(e){e.composedPath().includes(this.triggerEl)&&(this.open=!this.open,this.updateToggle())}async updateToggle(){this.open?(await this.showPopover(),null!=this.popoverEl&&window.requestAnimationFrame((()=>{this.popoverEl?.focus()}))):this.hidePopover()}handleDocumentEvent(e){!1!==this.open&&(e.composedPath().includes(this)||this.hidePopover())}trackOutside(){this.hover||this.isTrackingOutside||!this.open||(this.isTrackingOutside=!0,null==this._documentEventHandler&&(this._documentEventHandler=this.handleDocumentEvent.bind(this)),document.addEventListener("click",this._documentEventHandler,!1),document.addEventListener("focusin",this._documentEventHandler,!1))}disposeTrackOutside(){this.isTrackingOutside&&(this.isTrackingOutside=!1,null!=this._documentEventHandler&&(document.removeEventListener("click",this._documentEventHandler,!1),window.removeEventListener("focusin",this._documentEventHandler,!1),this._documentEventHandler=void 0))}async updatePositioning(){const e=[Me(6),Oe(),(t={padding:5},void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:i,placement:n}=e,{mainAxis:r=!0,crossAxis:a=!1,limiter:l={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...c}=fe(t,e),d={x:o,y:i},p=await De(e,c),h=we(me(n)),u=ve(h);let g=d[u],f=d[h];if(r){const e="y"===u?"bottom":"right";g=ge(g+p["y"===u?"top":"left"],g,g-p[e])}if(a){const e="y"===h?"bottom":"right";f=ge(f+p["y"===h?"top":"left"],f,f-p[e])}const m=l.fn({...e,[u]:g,[h]:f});return{...m,data:{x:m.x-o,y:m.y-i}}}})];var t;this.arrowEl&&e.push((e=>({name:"arrow",options:e,async fn(t){const{x:o,y:i,placement:n,rects:r,platform:a,elements:l,middlewareData:c}=t,{element:d,padding:p=0}=fe(e,t)||{};if(null==d)return{};const h=Ae(p),u={x:o,y:i},g=ke(n),f=ye(g),m=await a.getDimensions(d),b="y"===g,v=b?"top":"left",y=b?"bottom":"right",w=b?"clientHeight":"clientWidth",k=r.reference[f]+r.reference[g]-u[g]-r.floating[f],_=u[g]-r.reference[g],x=await(null==a.getOffsetParent?void 0:a.getOffsetParent(d));let C=x?x[w]:0;C&&await(null==a.isElement?void 0:a.isElement(x))||(C=l.floating[w]||r.floating[f]);const S=k/2-_/2,A=C/2-m[f]/2-1,R=le(h[v],A),P=le(h[y],A),E=R,T=C-m[f]-P,D=C/2-m[f]/2+S,O=ge(E,D,T),L=!c.arrow&&null!=be(n)&&D!=O&&r.reference[f]/2-(D<E?R:P)-m[f]/2<0,M=L?D<E?D-E:D-T:0;return{[g]:u[g]+M,data:{[g]:O,centerOffset:D-O-M,...L&&{alignmentOffset:M}},reset:L}}}))({element:this.arrowEl})),await((e,t,o)=>{const i=new Map,n={platform:$t,...o},r={...n.platform,_c:i};return(async(e,t,o)=>{const{placement:i="bottom",strategy:n="absolute",middleware:r=[],platform:a}=o,l=r.filter(Boolean),c=await(null==a.isRTL?void 0:a.isRTL(t));let d=await a.getElementRects({reference:e,floating:t,strategy:n}),{x:p,y:h}=Te(d,i,c),u=i,g={},f=0;for(let o=0;o<l.length;o++){const{name:r,fn:m}=l[o],{x:b,y:v,data:y,reset:w}=await m({x:p,y:h,initialPlacement:i,placement:u,strategy:n,middlewareData:g,rects:d,platform:a,elements:{reference:e,floating:t}});p=null!=b?b:p,h=null!=v?v:h,g={...g,[r]:{...g[r],...y}},w&&f<=50&&(f++,"object"==typeof w&&(w.placement&&(u=w.placement),w.rects&&(d=!0===w.rects?await a.getElementRects({reference:e,floating:t,strategy:n}):w.rects),({x:p,y:h}=Te(d,u,c))),o=-1)}return{x:p,y:h,placement:u,strategy:n,middlewareData:g}})(e,t,{...n,platform:r})})(this.triggerEl,this.popoverEl,{middleware:e,placement:this.placement}).then((({x:e,y:t,placement:o,middlewareData:i})=>{if(Object.assign(this.popoverEl.style,{left:`${e}px`,top:`${t}px`}),this.arrowEl){const e=i.arrow?.x,t=i.arrow?.y,n={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];Object.assign(this.arrowEl.style,{left:null!=e?`${e}px`:"",top:null!=t?`${t}px`:"",right:"",bottom:"",[n]:"-4px"})}}))}async showPopover(){this.open=!0,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="true"),this.srVisible?this.popoverEl.classList.remove("sr-only"):this.popoverEl.removeAttribute("hidden"),await this.updatePositioning(),this.trackOutside()}hidePopover(){this.open=!1,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="false"),this.srVisible?this.popoverEl.classList.add("sr-only"):this.popoverEl.setAttribute("hidden","true"),this.disposeTrackOutside()}get arrowMarkup(){return this.arrow?W`<div part="arrow" class="arrow"></div>`:""}render(){return W`<slot name="trigger" aria-describedby="${this.popoverId}"></slot><div class="popover ${this.srVisible&&"sr-only"}" ?hidden="${!this.srVisible}" id="${this.popoverId}" part="popover" role="tooltip"><slot></slot>${this.arrowMarkup}</div>`}}St([oe({type:Boolean})],xe.prototype,"arrow",void 0),St([oe({type:Boolean})],xe.prototype,"hover",void 0),St([oe()],xe.prototype,"placement",void 0),St([oe({attribute:"popover-id"})],xe.prototype,"popoverId",void 0),St([oe({attribute:"sr-visible",type:Boolean})],xe.prototype,"srVisible",void 0),St([ne('slot[name="trigger"]')],xe.prototype,"triggerSlot",void 0),St([ne(".popover")],xe.prototype,"popoverEl",void 0),St([ne(".arrow")],xe.prototype,"arrowEl",void 0),St([oe({state:!0,attribute:!1})],xe.prototype,"open",void 0);const At=n`gk-popover::part(popover){background:var(--gk-tooltip-background-color,#000);border-radius:var(--gk-tooltip-border-radius,0);color:var(--gk-tooltip-font-color,#fff);font-size:var(--gk-tooltip-font-size, 14px);font-weight:var(--gk-tooltip-font-weight,bold);line-height:var(--gk-tooltip-line-height, 14px);max-width:var(--gk-tooltip-max-width,none);padding:var(--gk-tooltip-padding,10px 16px);text-align:var(--gk-tooltip-text-align,left);width:max-content}`;class $e extends gt{constructor(){super(...arguments),this.srVisible=!1}static{this.styles=[ae,re,At]}static{this.elementName="gk-tooltip"}static{this.components=[xe]}render(){return W`<gk-popover arrow hover ?sr-visible="${this.srVisible}" part="base"><slot name="trigger" slot="trigger"></slot><slot></slot></gk-popover>`}}!function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);r>3&&a&&Object.defineProperty(t,o,a)}([oe({attribute:"sr-visible",type:Boolean})],$e.prototype,"srVisible",void 0);const Rt=n`:host{display:inline-block;vertical-align:middle;font-weight:700}.deletions{color:var(--gk-deletions-color,#fe5955);padding-left:4px}.additions{color:var(--gk-additions-color,#74b666);padding-right:4px}`;class Se extends gt{constructor(){super(...arguments),this.tooltipText="Lines Added/Removed",this.tooltipId=`additions-deletions_${Math.random().toString(16).slice(2)}`}static{this.styles=Rt}static{this.elementName="gk-additions-deletions"}static{this.components=[$e]}render(){return W`<gk-tooltip sr-visible tooltip-id="${this.tooltipId}"><span slot="trigger" part="base"><span class="additions">+<slot name="additions"></slot></span>/ <span class="deletions">−<slot name="deletions"></slot></span></span><span>${this.tooltipText}</span></gk-tooltip>`}}!function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);r>3&&a&&Object.defineProperty(t,o,a)}([oe({attribute:"tooltip-text"})],Se.prototype,"tooltipText",void 0);const Pt=new Set(["children","localName","ref","style","className"]),Et=new WeakMap,Tt=(e,t,o,i,n)=>{const r=n?.[t];void 0===r||o===i?(e[t]=o,null==o&&t in HTMLElement.prototype&&e.removeAttribute(t)):((e,t,o)=>{let i=Et.get(e);void 0===i&&Et.set(e,i=new Map);let n=i.get(t);void 0!==o?void 0===n?(i.set(t,n={handleEvent:o}),e.addEventListener(t,n)):n.handleEvent=o:void 0!==n&&(i.delete(t),e.removeEventListener(t,n))})(e,r,o)},Dt=({react:e,tagName:t,elementClass:o,events:i,displayName:n})=>{const r=new Set(Object.keys(i??{})),a=e.forwardRef(((n,a)=>{const l=e.useRef(null),c=e.useRef(null),d={},p={};for(const[e,t]of Object.entries(n))Pt.has(e)?d["className"===e?"class":e]=t:r.has(e)||e in o.prototype?p[e]=t:d[e]=t;return e.useLayoutEffect((()=>{if(null!==c.current){for(const e in p)Tt(c.current,e,n[e],l.current?l.current[e]:void 0,i);l.current=n}})),e.useLayoutEffect((()=>{c.current?.removeAttribute("defer-hydration")}),[]),d.suppressHydrationWarning=!0,e.createElement(t,{...d,ref:e=>{c.current=e,"function"==typeof a?a(e):null!==a&&(a.current=e)}})}));return a.displayName=n??o.name,a};var Ot=Re(294);const Lt=Dt({react:Ot,tagName:Se.elementName,elementClass:Se}),Mt=n`:host{display:inline-block}.avatar{vertical-align:middle;background-color:var(--gk-avatar-background-color,#e0e0e0);width:var(--gk-avatar-size,30px);aspect-ratio:1/1;border-radius:50%;transition:.2s}.avatar.is-offline{border:2px solid var(--gk-avatar-offline-outline-color,#3d424d)}.avatar.is-online{border:2px solid var(--gk-avatar-online-outline-color,#60b864)}.avatar--image{display:inline-block;object-fit:cover;object-position:50% 50%}.avatar--content{display:inline-flex;justify-content:center;align-items:center;font-size:var(--gk-avatar-font-size, 11px);line-height:var(--gk-avatar-size, 30px);text-align:center}.avatar:hover{transform:scale(1.2)}`,Ft=n`:host{display:inline-block}.avatar-group{display:inline-flex;flex-direction:row;justify-content:center;align-items:center}.avatar-group::slotted(:not(:first-child)){margin-left:calc(var(--gk-avatar-size,2.4rem) * -.2)}.avatar-group:focus-within::slotted(*),.avatar-group:hover::slotted(*){opacity:.5}.avatar-group:focus-within::slotted(:focus),.avatar-group:hover::slotted(:hover){opacity:1;z-index:var(--gk-avatar-selected-zindex,1)!important}`;var zt=function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};class He extends gt{static{this.styles=[ae,Mt]}static{this.elementName="gk-avatar"}get indicatorClass(){return this.indicator?`is-${this.indicator}`:""}render(){return this.src?W`<img src="${this.src}" class="avatar avatar--image${this.indicatorClass}" part="base" alt="">`:W`<slot class="avatar avatar--content${this.indicatorClass}" part="base"></slot>`}}zt([oe()],He.prototype,"src",void 0),zt([oe()],He.prototype,"indicator",void 0);class Le extends gt{static{this.elementName="gk-avatar-group"}static{this.styles=[ae,Ft]}render(){return W`<slot class="avatar-group" part="base"></slot>`}}const It=Dt({react:Ot,tagName:He.elementName,elementClass:He}),Bt=Dt({react:Ot,tagName:Le.elementName,elementClass:Le}),Nt=n`.badge{border-radius:var(--gk-badge-border-radius,22px);display:inline-block;font-size:var(--gk-badge-font-size, 12px)}.badge--outline{border-color:var(--gk-badge-outline-color,#ffffff99);border-style:solid;border-width:var(--gk-badge-outline-border-width,1px);color:var(--gk-badge-outline-color,#ffffff99);padding:var(--gk-badge-outline-padding,0 8px)}.badge--filled{background-color:var(--gk-badge-filled-background-color,#2b2f36);color:var(--gk-badge-filled-color,#ffffff99);padding:var(--gk-badge-filled-padding,2px 6px)}`;class Be extends gt{constructor(){super(...arguments),this.variant="outline"}static{this.styles=Nt}static{this.elementName="gk-badge"}render(){return W`<slot class="${`badge badge--${this.variant}`}" part="base"></slot>`}}!function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);r>3&&a&&Object.defineProperty(t,o,a)}([oe()],Be.prototype,"variant",void 0);const Ut=Dt({react:Ot,tagName:Be.elementName,elementClass:Be}),Ht=n`:host{display:inline-block}button{appearance:none;border:none;padding:8px 12px}button:hover{cursor:pointer}button:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.button--ghost{background:0 0;color:var(--gk-button-ghost-color,#fff)}.button--ghost:focus,.button--ghost:hover{text-decoration:underline}.button--ghost:active{color:var(--gk-button-ghost-color-active,#adb8c2)}.button--ghost:disabled,.button--ghost:disabled:active,.button--ghost:disabled:focus,.button--ghost:disabled:hover{color:var(--gk-button-ghost-color-disabled,#ffffff60);cursor:default;text-decoration:none}.button--outline{background:0 0;border-radius:2px;border-style:solid;border-width:var(--gk-button-outline-border-width,1px);color:var(--gk-button-outline-color,#fff)}.button--outline:focus,.button--outline:hover{background-color:#ffffff50}.button--outline:active{background-color:var(--gk-button-outline-color-active,#adb8c2)}.button--outline:disabled,.button--outline:disabled:active,.button--outline:disabled:focus,.button--outline:disabled:hover{background-color:transparent;border-color:var(--gk-button-outline-color-disabled,#ffffff60);color:var(--gk-button-outline-color-disabled,#ffffff60);cursor:default;text-decoration:none}`;var Wt=function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};class Ge extends gt{constructor(){super(...arguments),this.disabled=!1,this.type="button",this.variant="ghost"}static{this.styles=Ht}static{this.elementName="gk-button"}get allClasses(){const e=["button"];return e.push(`button--${this.variant}`),e.join(" ")}_handleClick(e){e.stopPropagation(),this.dispatchEvent(new Event("click"))}render(){return W`<button class="${this.allClasses}" @click="${this._handleClick}" ?disabled="${this.disabled}" part="base" type="${this.type}"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></button>`}}Wt([oe({type:Boolean,reflect:!0})],Ge.prototype,"disabled",void 0),Wt([oe({reflect:!0})],Ge.prototype,"type",void 0),Wt([oe()],Ge.prototype,"variant",void 0);const jt=Dt({react:Ot,tagName:Ge.elementName,elementClass:Ge,events:{onClick:"click"}}),qt=n`:host{display:inline-block}.complexity-indicator{display:inline-flex}.complexity-indicator__box{display:block;height:var(--gk-complexity-indicator-box-size,8px);width:var(--gk-complexity-indicator-box-size,8px)}.complexity-indicator__box:not(:last-of-type){margin-right:var(--gk-complexity-indicator-space-between,2px)}.complexity-indicator--level-1 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-1,#5cb85c)}.complexity-indicator--level-2 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-2,#4d88ff)}.complexity-indicator--level-3 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-3,#de9b43)}.complexity-indicator--level-4 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-4,#d9413d)}`;var Vt=function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};class Je extends gt{constructor(){super(...arguments),this.level=1,this.label="Complexity of pull request"}static{this.styles=[ae,re,qt]}static{this.elementName="gk-complexity-indicator"}render(){const e=[];for(let t=0;t<this.level;t++)e.push(t);return W`<div class="complexity-indicator complexity-indicator--level-${this.level}" part="base"><span class="sr-only">${this.label}</span> ${e.map((()=>W`<span class="complexity-indicator__box"></span>`))}</div>`}}Vt([oe({type:Number})],Je.prototype,"level",void 0),Vt([oe()],Je.prototype,"label",void 0);const Gt=Dt({react:Ot,tagName:Je.elementName,elementClass:Je}),Qt=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,Jt=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,Yt=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let Kt;const Zt=new Map;let Xt,eo,to;new Map;const oo=["th","st","nd","rd"];function io(e){const t=e%100;return`${e}${oo[(t-20)%10]??oo[t]??oo[0]}`}var no=function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};class po extends gt{constructor(){super(...arguments),this.date=new Date,this.format="MMMM Do, YYYY h:mma"}static{this.styles=[ae]}static{this.elementName="gk-date-from"}static{this.components=[$e]}get relativeTime(){return function(e,t){const o=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,t,i,n]of Yt){const r=Math.abs(o);if(r>=t||1e3===t)return null==Kt&&(null!=to?Kt=to.resolvedOptions().locale:null!=eo?Kt=eo.resolvedOptions().locale:(to=new Intl.RelativeTimeFormat(Xt,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),Kt=to.resolvedOptions().locale)),"en"===Kt||Kt?.startsWith("en-")?`${Math.round(r/i)}${n}`:(null==to&&(to=new Intl.RelativeTimeFormat(Xt,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),to.format(Math.round(o/i),e))}return""}(this.date)}get isDate(){return this.date&&!isNaN(this.date.getMilliseconds())}render(){if(this.isDate)return W`<gk-tooltip><time datetime="${this.date}" part="base" slot="trigger">${this.relativeTime}</time><span>${function(e,t,o,i=!0){const n=`${o??""}:${t=t??void 0}`;let r=Zt.get(n);if(null==r){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=Jt.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}const o={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll(Qt))if(null!=t)for(const e in t){const i=t[e];if(null!=i)switch(e){case"year":o.year=4===i.length?"numeric":"2-digit";break;case"month":switch(i.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":o.day="DD"===i?"2-digit":"numeric";break;case"weekday":switch(i.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===i.length?"2-digit":"numeric",o.hour12="hh"===i||"h"===i;break;case"minute":o.minute=2===i.length?"2-digit":"numeric";break;case"second":o.second=2===i.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===i.length?"long":"short"}}return o}(t);let a;a=null==o?Xt:"system"===o?void 0:[o],r=new Intl.DateTimeFormat(a,e),i&&Zt.set(n,r)}if(null==t||Jt.test(t))return r.format(e);function a(e){const t=`${o??""}:time:${e}`;let n=Zt.get(t);if(null==n){const r={localeMatcher:"best fit",timeStyle:e};let a;a=null==o?Xt:"system"===o?void 0:[o],n=new Intl.DateTimeFormat(a,r),i&&Zt.set(t,n)}return n}const l=r.formatToParts(e);return t.replace(Qt,((t,o,i,n,r,c,d,p,h,u,g,f,m,b,v)=>{if(null!=o)return o.substring(1,o.length-1);for(const t in v){const o=v[t];if(null==o)continue;const i=l.find((e=>e.type===t));if("Do"===o&&"day"===i?.type)return io(Number(i.value));if("a"===o&&"dayPeriod"===i?.type){const t=a("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return`${(t??i)?.value??""}`}return i?.value??""}return""}))}(this.date,this.format??"MMMM Do, YYYY h:mma")}</span></gk-tooltip>`}}no([oe({converter:(e=>({toAttribute:t=>t.toLocaleDateString(e),fromAttribute:e=>new Date(e)}))(navigator.language),reflect:!0})],po.prototype,"date",void 0),no([oe()],po.prototype,"format",void 0);const ro=Dt({react:Ot,tagName:po.elementName,elementClass:po}),so=n`.row--heading{text-transform:uppercase;color:var(--gk-text-secondary-color,rgba(255,255,255,.6))}.content::slotted(:not(:first-child)){border-top:1px solid var(--gk-divider-color,rgba(255,255,255,.04))}`,ao=n`:host{display:contents}.row{display:flex;flex-direction:row;padding:var(--gk-focus-row-padding,8px)}.row:not(.row--heading):focus-within,.row:not(.row--heading):hover{background-color:var(--gk-focus-background-color-hover,rgba(255,255,255,.04))}.row:not(.row--heading):focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.row__key{flex:none;display:block;width:var(--gk-focus-row-key-min-width,64px)}@media (max-width:720px){.row__key{width:var(--gk-focus-row-key-min-width-screen-sm,32px)}}.row__content{flex:1;display:block}.row__pin{display:block;min-width:var(--gk-focus-row-pin-min-width,35px)}.row__date{display:block;min-width:var(--gk-focus-row-date-min-width,48px)}@media (max-width:720px){.row--heading .item__date,.row--heading .item__secondary{display:none}}`,lo=n`.item{display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item{flex-direction:column;align-items:stretch}}.item__primary{flex:1;display:flex;flex-direction:row;gap:12px}.item__type{flex:none}@media (max-width:720px){.item__type{order:-1}}.item__content{display:flex;flex-direction:column;gap:6px;min-width:var(--gk-focus-item-content-min-width,92px)}@media (max-width:720px){.item__content{align-items:stretch}}.item__content>p{margin:0}.item__secondary{flex:none;display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item__secondary{flex-wrap:wrap;padding-left:36px}}.item__people{display:block;min-width:var(--gk-focus-item-people-min-width,92px)}@media (max-width:720px){.item__people{min-width:0}}.item__repo{display:block;width:var(--gk-focus-item-repo-min-width,150px)}@media (max-width:720px){.item__repo{width:max-content}}@media (max-width:720px){.item__date{align-self:flex-start;min-width:0}}.item__actions{display:block;min-width:var(--gk-focus-item-actions-min-width,70px)}@media (max-width:720px){.item__actions{width:100%}}`;class yo extends gt{static{this.styles=[ae,lo]}static{this.elementName="gk-focus-item"}render(){return W`<div class="item"><div class="item__primary"><div class="item__content" part="base"><slot></slot></div></div><div class="item__secondary"><slot name="people" class="item__people" part="people"></slot><slot name="repo" class="item__repo" part="repo"></slot><slot name="actions" class="item__actions" part="actions"></slot></div></div>`}}class vo extends gt{static{this.styles=[ae,ao]}static{this.elementName="gk-focus-row"}render(){return W`<div class="row" part="row"><slot name="pin" class="row__pin" part="pin"></slot><div class="row__date" part="date"><slot name="date"></slot></div><div class="row__key" part="key"><slot name="key"></slot></div><slot class="row__content"></slot></div>`}}class bo extends gt{static{this.styles=[ae,ao,lo,so]}static{this.elementName="gk-focus-container"}render(){return W`<div class="row row--heading"><slot name="pin" class="row__pin" part="pin">Pinned</slot><slot name="date" class="row__date" part="date">Updated</slot><slot name="key" class="row__key" part="key">Key</slot><div class="row__content"><div class="item"><div class="item__primary"><slot name="item" class="item__content" part="item">Item</slot></div><div class="item__secondary"><slot name="people" class="item__people" part="people">People</slot><slot name="repo" class="item__repo" part="repo">Repo</slot><slot name="actions" class="item__actions" part="actions">Action</slot></div></div></div></div><slot class="content"></slot>`}}const co=Dt({react:Ot,tagName:yo.elementName,elementClass:yo}),ho=Dt({react:Ot,tagName:vo.elementName,elementClass:vo}),uo=Dt({react:Ot,tagName:bo.elementName,elementClass:bo});class $o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const go=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends $o{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.st?.has(e)&&this.it.add(e);return this.render(t)}const o=e.element.classList;for(const e of this.it)e in t||(o.remove(e),this.it.delete(e));for(const e in t){const i=!!t[e];i===this.it.has(e)||this.st?.has(e)||(i?(o.add(e),this.it.add(e)):(o.remove(e),this.it.delete(e)))}return j}}),fo=e=>e??q,mo=n`:host{display:block}.input-container{background-color:var(--gk-input-background-color,#000);border:1px solid var(--gk-input-border-color,#ffffff14);border-radius:var(--gk-input-border-radius,2px);color:var(--gk-input-color,#ffffff99);cursor:text;display:inline-flex;justify-content:start;padding:var(--gk-input-padding,10px);vertical-align:middle;width:100%}.input{appearance:none;background:inherit;border:none;box-shadow:none;color:inherit;flex:1 1 auto;font:inherit;height:100%;margin:0;outline:0;padding:0}.input-container:focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}`;var wo=function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};class Ro extends gt{static{this.formAssociated=!0}static{this.styles=[ae,re,mo]}static{this.elementName="gk-input"}constructor(){super(),this.disabled=!1,this.labelVisibility="visible",this.required=!1,this.type="text",this.value="";try{this.internals=this.attachInternals()}catch{}}firstUpdated(){this.internals&&this.internals.setFormValue(this.value)}render(){return W`<div class="field"><label class="${go({label:!0,"sr-only":"sr-only"===this.labelVisibility})}" for="input" ?hidden="${"hidden"===this.labelVisibility}" part="field-label"><slot name="label">${this.label}</slot></label><div class="${go({"input-container":!0,"input-container--disabled":this.disabled})}"><slot name="prefix" part="prefix"></slot><input autocomplete="${fo(this.autocomplete)}" autocorrect="${fo(this.autocorrect)}" class="input" ?disabled="${this.disabled}" id="input" name="${fo(this.name)}" part="input" placeholder="${fo(this.placeholder)}" type="${this.type}" @input="${this.onInput}"><slot name="suffix" part="suffix"></slot></div></div>`}onInput(e){this.value=e.target.value,this.internals&&this.internals.setFormValue(this.value)}}wo([oe()],Ro.prototype,"autocomplete",void 0),wo([oe()],Ro.prototype,"autocorrect",void 0),wo([oe({type:Boolean,reflect:!0})],Ro.prototype,"disabled",void 0),wo([oe()],Ro.prototype,"label",void 0),wo([oe({attribute:"label-visibility"})],Ro.prototype,"labelVisibility",void 0),wo([oe()],Ro.prototype,"name",void 0),wo([oe()],Ro.prototype,"placeholder",void 0),wo([oe({type:Boolean,reflect:!0})],Ro.prototype,"required",void 0),wo([oe({reflect:!0})],Ro.prototype,"type",void 0),wo([oe()],Ro.prototype,"value",void 0);const ko=n`:host{display:inline-block}.menu{border:1px solid var(--gk-menu-border-color,#2a2f35);border-radius:4px;background:var(--gk-menu-background-color,#32363f);box-shadow:0 5px 16px 0 rgba(0,0,0,.85);display:inline-block;padding:4px 0}`,_o=n`:host{display:block}.menu-item{font-size:var(--gk-menu-item-font-size, 12px);padding:5px 6px}.menu-item:focus,.menu-item:hover{background-color:var(--gk-menu-item-background-color-hover,#4d88ff1a);cursor:pointer}.menu-item:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.menu-item:active{background-color:var(--gk-menu-item-background-color-active,#4d88ff4d)}.menu-item--disabled,.menu-item--disabled:active,.menu-item--disabled:focus,.menu-item--disabled:hover{background-color:initial;color:var(--gk-menu-item-font-color-disabled,#ffffff60);cursor:default;pointer-events:none}`,xo=n`:host{display:block}.menu-label{cursor:default;display:inline-block;font-size:var(--gk-menu-label-font-size, 12px);font-weight:700;padding:5px 6px}`;class Mo extends gt{constructor(){super(...arguments),this._currentMenuItem=void 0}static{this.styles=[ae,ko]}static{this.elementName="gk-menu"}_handleSlotChange(){const e=this._getAllItems();e.length&&this._setCurrentItem(e[0])}_handleClick(e){e.stopPropagation();const t=e.target.closest("gk-menu-item");if(!t||t.disabled)return;this._currentMenuItem=t;const o=new CustomEvent("select",{detail:{target:t}});this.dispatchEvent(o)}_handleKeyDown(e){if("Enter"===e.key||" "===e.key)return e.preventDefault(),void this._currentMenuItem?.click();if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=this._getAllItems(),o=t.length;let i=this._currentMenuItem?t.indexOf(this._currentMenuItem):0;"ArrowUp"===e.key?i=(i-1+o)%o:"ArrowDown"===e.key?i=(i+1)%o:"Home"===e.key?i=0:"End"===e.key&&(i=o-1),this._setCurrentItem(t[i]),t[i].focus()}}_handleMouseDown(e){const t=e.target;this._isMenuItem(t)&&this._setCurrentItem(t)}_isMenuItem(e){const t=e.getAttribute("role")||"";return"gk-menu-item"===e.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(t)}_setCurrentItem(e){this._currentMenuItem=e,this._setTabIndex()}_getAllItems(){return this.slotChildren.filter((e=>this._isMenuItem(e)))}_setTabIndex(){this._getAllItems().forEach((e=>{e.setAttribute("tabindex",this._currentMenuItem===e?"0":"-1")}))}render(){return W`<slot class="menu" @click="${this._handleClick}" @keydown="${this._handleKeyDown}" @mousedown="${this._handleMouseDown}" @slotchange="${this._handleSlotChange}" part="base" role="menu"></slot>`}}!function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);r>3&&a&&Object.defineProperty(t,o,a)}([function(e){return(t,o)=>{const{slot:i,selector:n}=e??{},r="slot"+(i?`[name=${i}]`:":not([name])");return ie(t,o,{get(){const t=this.renderRoot?.querySelector(r),o=t?.assignedElements(e)??[];return void 0===n?o:o.filter((e=>e.matches(n)))}})}}({flatten:!0})],Mo.prototype,"slotChildren",void 0);class Do extends gt{constructor(){super(...arguments),this.disabled=!1}static{this.styles=[ae,_o]}static{this.elementName="gk-menu-item"}get allClasses(){return this.disabled?"menu-item--disabled":""}render(){return W`<div aria-disabled="${this.disabled}" class="menu-item ${this.allClasses}" part="base" role="menuitem"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></div>`}}!function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);r>3&&a&&Object.defineProperty(t,o,a)}([oe({type:Boolean,reflect:!0})],Do.prototype,"disabled",void 0);class Ho extends gt{static{this.styles=[ae,xo]}static{this.elementName="gk-menu-label"}render(){return W`<slot class="menu-label" part="base"></slot>`}}const Co=Dt({react:Ot,tagName:Mo.elementName,elementClass:Mo,events:{onClick:"select"}}),So=Dt({react:Ot,tagName:Do.elementName,elementClass:Do}),Ao=Dt({react:Ot,tagName:Ho.elementName,elementClass:Ho}),Po=n`:host{display:inline-block}.tag{display:inline-flex;align-items:center;vertical-align:middle;gap:8px;padding:var(--gk-tag-padding,2px 6px);border-radius:var(--gk-tag-radius,4px);background-color:var(--gk-tag-background-color,#33363e);color:var(--gk-tag-color,#85868b);max-width:100%}.tag__prefix,.tag__suffix{flex:none}.tag__label{display:inline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tag--ghost{background-color:transparent}`;class Bo extends gt{static{this.styles=[ae,Po]}static{this.elementName="gk-tag"}render(){return W`<span class="tag ${this.variant?`tag--${this.variant}`:""}" part="base"><slot class="tag__prefix" name="prefix"></slot><slot class="tag__label"></slot><slot class="tag__suffix" name="suffix"></slot></span>`}}!function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);r>3&&a&&Object.defineProperty(t,o,a)}([oe()],Bo.prototype,"variant",void 0);const Eo=Dt({react:Ot,tagName:Bo.elementName,elementClass:Bo}),To=Dt({react:Ot,tagName:$e.elementName,elementClass:$e});function Oo(...e){e.forEach((e=>{e.elementName&&!customElements.get(e.elementName)&&(customElements.define(e.elementName,e),e.components&&e.components.length>0&&Oo(...e.components))}))}})();var Ee=Pe.Tn,Te=Pe.qE,De=Pe.HE,Oe=Pe.Ct,Me=Pe.zx,Fe=Pe.sX,ze=Pe.D0,Ie=Pe.fs,Ne=Pe.II,Ue=Pe.v2,We=Pe.sN,je=Pe.J2,qe=Pe.$$,Ve=Pe.Vp,Qe=Pe.u,Ye=Pe.fW;const Ke=globalThis,Ze=Ke.ShadowRoot&&(void 0===Ke.ShadyCSS||Ke.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Xe=Symbol(),tt=new WeakMap;class css_tag_n{constructor(e,t,o){if(this._$cssResult$=!0,o!==Xe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ze&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=tt.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&tt.set(t,e))}return e}toString(){return this.cssText}}const lt=e=>new css_tag_n("string"==typeof e?e:e+"",void 0,Xe),dt=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,o,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1]),e[0]);return new css_tag_n(o,e,Xe)},pt=Ze?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return lt(t)})(e):e,{is:ht,defineProperty:ut,getOwnPropertyDescriptor:ft,getOwnPropertyNames:mt,getOwnPropertySymbols:bt,getPrototypeOf:vt}=Object,yt=globalThis,wt=yt.trustedTypes,kt=wt?wt.emptyScript:"",_t=yt.reactiveElementPolyfillSupport,xt=(e,t)=>e,$t={toAttribute(e,t){switch(t){case Boolean:e=e?kt:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},Ct=(e,t)=>!ht(e,t),St={attribute:!0,type:String,converter:$t,reflect:!1,hasChanged:Ct};Symbol.metadata??=Symbol("metadata"),yt.litPropertyMetadata??=new WeakMap;class reactive_element_b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=St){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,t);void 0!==i&&ut(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){const{get:i,set:n}=ft(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){const r=i?.call(this);n.call(this,t),this.requestUpdate(e,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??St}static _$Ei(){if(this.hasOwnProperty(xt("elementProperties")))return;const e=vt(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(xt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(xt("properties"))){const e=this.properties,t=[...mt(e),...bt(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(pt(e))}else void 0!==e&&t.push(pt(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(Ze)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const o of t){const t=document.createElement("style"),i=Ke.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=o.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EC(e,t){const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(void 0!==i&&!0===o.reflect){const n=(void 0!==o.converter?.toAttribute?o.converter:$t).toAttribute(t,o.type);this._$Em=e,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){const o=this.constructor,i=o._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=o.getPropertyOptions(i),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:$t;this._$Em=i,this[i]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o){if(void 0!==e){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??Ct)(this[e],t))return;this.P(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}reactive_element_b.elementStyles=[],reactive_element_b.shadowRootOptions={mode:"open"},reactive_element_b[xt("elementProperties")]=new Map,reactive_element_b[xt("finalized")]=new Map,_t?.({ReactiveElement:reactive_element_b}),(yt.reactiveElementVersions??=[]).push("2.0.4");const At=globalThis,Rt=At.trustedTypes,Pt=Rt?Rt.createPolicy("lit-html",{createHTML:e=>e}):void 0,Et="$lit$",Tt=`lit$${Math.random().toFixed(9).slice(2)}$`,Dt="?"+Tt,Ot=`<${Dt}>`,Lt=document,Mt=()=>Lt.createComment(""),Ft=e=>null===e||"object"!=typeof e&&"function"!=typeof e,zt=Array.isArray,It=e=>zt(e)||"function"==typeof e?.[Symbol.iterator],Bt="[ \t\n\f\r]",Nt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ut=/-->/g,Ht=/>/g,Wt=RegExp(`>|${Bt}(?:([^\\s"'>=/]+)(${Bt}*=${Bt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),jt=/'/g,qt=/"/g,Vt=/^(?:script|style|textarea|title)$/i,Gt=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),Qt=Gt(1),Jt=(Gt(2),Symbol.for("lit-noChange")),Yt=Symbol.for("lit-nothing"),Kt=new WeakMap,Zt=Lt.createTreeWalker(Lt,129);function Xt(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Pt?Pt.createHTML(t):t}const eo=(e,t)=>{const o=e.length-1,i=[];let n,r=2===t?"<svg>":"",a=Nt;for(let t=0;t<o;t++){const o=e[t];let l,c,d=-1,p=0;for(;p<o.length&&(a.lastIndex=p,c=a.exec(o),null!==c);)p=a.lastIndex,a===Nt?"!--"===c[1]?a=Ut:void 0!==c[1]?a=Ht:void 0!==c[2]?(Vt.test(c[2])&&(n=RegExp("</"+c[2],"g")),a=Wt):void 0!==c[3]&&(a=Wt):a===Wt?">"===c[0]?(a=n??Nt,d=-1):void 0===c[1]?d=-2:(d=a.lastIndex-c[2].length,l=c[1],a=void 0===c[3]?Wt:'"'===c[3]?qt:jt):a===qt||a===jt?a=Wt:a===Ut||a===Ht?a=Nt:(a=Wt,n=void 0);const h=a===Wt&&e[t+1].startsWith("/>")?" ":"";r+=a===Nt?o+Ot:d>=0?(i.push(l),o.slice(0,d)+Et+o.slice(d)+Tt+h):o+Tt+(-2===d?t:h)}return[Xt(e,r+(e[o]||"<?>")+(2===t?"</svg>":"")),i]};class V{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let n=0,r=0;const a=e.length-1,l=this.parts,[c,d]=eo(e,t);if(this.el=V.createElement(c,o),Zt.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=Zt.nextNode())&&l.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(Et)){const t=d[r++],o=i.getAttribute(e).split(Tt),a=/([.?@])?(.*)/.exec(t);l.push({type:1,index:n,name:a[2],strings:o,ctor:"."===a[1]?lit_html_k:"?"===a[1]?lit_html_H:"@"===a[1]?lit_html_I:lit_html_R}),i.removeAttribute(e)}else e.startsWith(Tt)&&(l.push({type:6,index:n}),i.removeAttribute(e));if(Vt.test(i.tagName)){const e=i.textContent.split(Tt),t=e.length-1;if(t>0){i.textContent=Rt?Rt.emptyScript:"";for(let o=0;o<t;o++)i.append(e[o],Mt()),Zt.nextNode(),l.push({type:2,index:++n});i.append(e[t],Mt())}}}else if(8===i.nodeType)if(i.data===Dt)l.push({type:2,index:n});else{let e=-1;for(;-1!==(e=i.data.indexOf(Tt,e+1));)l.push({type:7,index:n}),e+=Tt.length-1}n++}}static createElement(e,t){const o=Lt.createElement("template");return o.innerHTML=e,o}}function to(e,t,o=e,i){if(t===Jt)return t;let n=void 0!==i?o._$Co?.[i]:o._$Cl;const r=Ft(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(e),n._$AT(e,o,i)),void 0!==i?(o._$Co??=[])[i]=n:o._$Cl=n),void 0!==n&&(t=to(e,n._$AS(e,t.values),n,i)),t}class lit_html_S{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,i=(e?.creationScope??Lt).importNode(t,!0);Zt.currentNode=i;let n=Zt.nextNode(),r=0,a=0,l=o[0];for(;void 0!==l;){if(r===l.index){let t;2===l.type?t=new lit_html_M(n,n.nextSibling,this,e):1===l.type?t=new l.ctor(n,l.name,l.strings,this,e):6===l.type&&(t=new lit_html_L(n,this,e)),this._$AV.push(t),l=o[++a]}r!==l?.index&&(n=Zt.nextNode(),r++)}return Zt.currentNode=Lt,i}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class lit_html_M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,i){this.type=2,this._$AH=Yt,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=to(this,e,t),Ft(e)?e===Yt||null==e||""===e?(this._$AH!==Yt&&this._$AR(),this._$AH=Yt):e!==this._$AH&&e!==Jt&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):It(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==Yt&&Ft(this._$AH)?this._$AA.nextSibling.data=e:this.T(Lt.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,i="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=V.createElement(Xt(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new lit_html_S(i,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=Kt.get(e.strings);return void 0===t&&Kt.set(e.strings,t=new V(e)),t}k(e){zt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,i=0;for(const n of e)i===t.length?t.push(o=new lit_html_M(this.S(Mt()),this.S(Mt()),this,this.options)):o=t[i],o._$AI(n),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class lit_html_R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,i,n){this.type=1,this._$AH=Yt,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Yt}_$AI(e,t=this,o,i){const n=this.strings;let r=!1;if(void 0===n)e=to(this,e,t,0),r=!Ft(e)||e!==this._$AH&&e!==Jt,r&&(this._$AH=e);else{const i=e;let a,l;for(e=n[0],a=0;a<n.length-1;a++)l=to(this,i[o+a],t,a),l===Jt&&(l=this._$AH[a]),r||=!Ft(l)||l!==this._$AH[a],l===Yt?e=Yt:e!==Yt&&(e+=(l??"")+n[a+1]),this._$AH[a]=l}r&&!i&&this.j(e)}j(e){e===Yt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class lit_html_k extends lit_html_R{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Yt?void 0:e}}class lit_html_H extends lit_html_R{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Yt)}}class lit_html_I extends lit_html_R{constructor(e,t,o,i,n){super(e,t,o,i,n),this.type=5}_$AI(e,t=this){if((e=to(this,e,t,0)??Yt)===Jt)return;const o=this._$AH,i=e===Yt&&o!==Yt||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==Yt&&(o===Yt||i);i&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class lit_html_L{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){to(this,e)}}const oo={P:Et,A:Tt,C:Dt,M:1,L:eo,R:lit_html_S,D:It,V:to,I:lit_html_M,H:lit_html_R,N:lit_html_H,U:lit_html_I,B:lit_html_k,F:lit_html_L},io=At.litHtmlPolyfillSupport;io?.(V,lit_html_M),(At.litHtmlVersions??=[]).push("3.1.4");class lit_element_s extends reactive_element_b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const i=o?.renderBefore??t;let n=i._$litPart$;if(void 0===n){const e=o?.renderBefore??null;i._$litPart$=n=new lit_html_M(t.insertBefore(Mt(),e),e,void 0,o??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Jt}}lit_element_s._$litElement$=!0,lit_element_s.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lit_element_s});const no=globalThis.litElementPolyfillSupport;no?.({LitElement:lit_element_s});(globalThis.litElementVersions??=[]).push("4.0.6");const ro=e=>(t,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},so={attribute:!0,type:String,converter:$t,reflect:!1,hasChanged:Ct},ao=(e=so,t,o)=>{const{kind:i,metadata:n}=o;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(o.name,e),"accessor"===i){const{name:i}=o;return{set(o){const n=t.get.call(this);t.set.call(this,o),this.requestUpdate(i,n,e)},init(t){return void 0!==t&&this.P(i,void 0,e),t}}}if("setter"===i){const{name:i}=o;return function(o){const n=this[i];t.call(this,o),this.requestUpdate(i,n,e)}}throw Error("Unsupported decorator location: "+i)};function lo(e){return(t,o)=>"object"==typeof o?ao(e,t,o):((e,t,o)=>{const i=t.hasOwnProperty(o);return t.constructor.createProperty(o,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}function co(e){return lo({...e,state:!0,attribute:!1})}const ho=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function uo(e,t){return(o,i,n)=>{const r=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof i?o:n??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return ho(o,i,{get(){let o=e.call(this);return void 0===o&&(o=r(this),(null!==o||this.hasUpdated)&&t.call(this,o)),o}})}return ho(o,i,{get(){return r(this)}})}}function*go(e,t){if(void 0!==e){let o=0;for(const i of e)yield t(i,o++)}}const fo=1,mo=2,wo=e=>(...t)=>({_$litDirective$:e,values:t});class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const{I:ko}=oo,_o=()=>document.createComment(""),xo=(e,t,o)=>{const i=e._$AA.parentNode,n=void 0===t?e._$AB:t._$AA;if(void 0===o){const t=i.insertBefore(_o(),n),r=i.insertBefore(_o(),n);o=new ko(t,r,e,e.options)}else{const t=o._$AB.nextSibling,r=o._$AM,a=r!==e;if(a){let t;o._$AQ?.(e),o._$AM=e,void 0!==o._$AP&&(t=e._$AU)!==r._$AU&&o._$AP(t)}if(t!==n||a){let e=o._$AA;for(;e!==t;){const t=e.nextSibling;i.insertBefore(e,n),e=t}}}return o},Co=(e,t,o=e)=>(e._$AI(t,o),e),So={},Ao=e=>{e._$AP?.(!1,!0);let t=e._$AA;const o=e._$AB.nextSibling;for(;t!==o;){const e=t.nextSibling;t.remove(),t=e}},Po=(e,t,o)=>{const i=new Map;for(let n=t;n<=o;n++)i.set(e[n],n);return i},Eo=wo(class extends directive_i{constructor(e){if(super(e),e.type!==mo)throw Error("repeat() can only be used in text expressions")}dt(e,t,o){let i;void 0===o?o=t:void 0!==t&&(i=t);const n=[],r=[];let a=0;for(const t of e)n[a]=i?i(t,a):a,r[a]=o(t,a),a++;return{values:r,keys:n}}render(e,t,o){return this.dt(e,t,o).values}update(e,[t,o,i]){const n=(e=>e._$AH)(e),{values:r,keys:a}=this.dt(t,o,i);if(!Array.isArray(n))return this.ut=a,r;const l=this.ut??=[],c=[];let d,p,h=0,u=n.length-1,g=0,f=r.length-1;for(;h<=u&&g<=f;)if(null===n[h])h++;else if(null===n[u])u--;else if(l[h]===a[g])c[g]=Co(n[h],r[g]),h++,g++;else if(l[u]===a[f])c[f]=Co(n[u],r[f]),u--,f--;else if(l[h]===a[f])c[f]=Co(n[h],r[f]),xo(e,c[f+1],n[h]),h++,f--;else if(l[u]===a[g])c[g]=Co(n[u],r[g]),xo(e,n[h],n[u]),u--,g++;else if(void 0===d&&(d=Po(a,g,f),p=Po(l,h,u)),d.has(l[h]))if(d.has(l[u])){const t=p.get(a[g]),o=void 0!==t?n[t]:null;if(null===o){const t=xo(e,n[h]);Co(t,r[g]),c[g]=t}else c[g]=Co(o,r[g]),xo(e,n[h],o),n[t]=null;g++}else Ao(n[u]),u--;else Ao(n[h]),h++;for(;g<=f;){const t=xo(e,c[f+1]);Co(t,r[g]),c[g++]=t}for(;h<=u;){const e=n[h++];null!==e&&Ao(e)}return this.ut=a,((e,t=So)=>{e._$AH=t})(e,c),Jt}});function To(e,t,o){return e?t(e):o?.(e)}const Oo=dt`
	:host {
		--focus-color: var(--vscode-focusBorder);
		--gk-focus-border-color: var(--focus-color);

		--gk-additions-color: var(--vscode-gitDecoration-addedResourceForeground);
		--gk-deletions-color: var(--vscode-gitDecoration-deletedResourceForeground);

		--gk-avatar-background-color: var(--background-10);
		--gk-tag-background-color: var(--background-10);
		--gk-text-secondary-color: var(--color-foreground--85);

		--gk-menu-border-color: var(--vscode-menu-border);
		--gk-menu-background-color: var(--vscode-menu-background);
		--gk-menu-item-background-color-hover: var(--vscode-menu-selectionBackground);
		--gk-menu-item-background-color-active: var(--vscode-menu-background);

		--gk-button-ghost-color: var(--color-foreground);
		--gk-button-ghost-color-active: var(--color-foreground--85);
		--gk-button-ghost-color-disabled: var(--color-foreground--50);
		--gk-button-outline-color: var(--color-foreground);
		--gk-button-outline-color-active: var(--background-10);
		--gk-button-outline-color-disabled: var(--color-foreground--50);

		--gk-tooltip-background-color: var(--popover-bg); // var(--vscode-editorHoverWidget-background);
		--gk-tooltip-font-color: var(--color-foreground); // var(--vscode-editorHoverWidget-foreground);
		--gk-tooltip-font-weight: normal;
		--gk-tooltip-font-size: 1.2rem;
	}
`,Lo=(dt`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus) {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		width: 1px;
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
	}
`,dt`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`),Fo=dt`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`,zo=dt`
	:host {
		box-sizing: border-box;
	}
	:host *,
	:host *::before,
	:host *::after {
		box-sizing: inherit;
	}
	[hidden] {
		display: none !important;
	}
`,Io=dt`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${Lo}
	}
	a:hover {
		text-decoration: underline;
	}
`;dt`
	::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}
	::-webkit-scrollbar-corner {
		background-color: transparent;
	}

	::-webkit-scrollbar-thumb {
		background-color: transparent;
		border-color: inherit;
		border-right-style: inset;
		border-right-width: calc(100vw + 100vh);
		border-radius: unset !important;
	}
	::-webkit-scrollbar-thumb:hover {
		border-color: var(--vscode-scrollbarSlider-hoverBackground);
	}
	::-webkit-scrollbar-thumb:active {
		border-color: var(--vscode-scrollbarSlider-activeBackground);
	}

	.scrollable {
		border-color: transparent;
		transition: border-color 1s linear;
	}

	:host(:hover) .scrollable,
	:host(:focus-within) .scrollable {
		border-color: var(--vscode-scrollbarSlider-background);
		transition: none;
	}
`;var No=Object.defineProperty,Uo=Object.defineProperties,Wo=Object.getOwnPropertyDescriptor,jo=Object.getOwnPropertyDescriptors,qo=Object.getOwnPropertySymbols,Vo=Object.prototype.hasOwnProperty,Go=Object.prototype.propertyIsEnumerable,Qo=(e,t,o)=>t in e?No(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Jo=(e,t)=>{for(var o in t||(t={}))Vo.call(t,o)&&Qo(e,o,t[o]);if(qo)for(var o of qo(t))Go.call(t,o)&&Qo(e,o,t[o]);return e},Yo=(e,t)=>Uo(e,jo(t)),Ko=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?Wo(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&No(t,o,r),r},Zo=new Map,Xo=new WeakMap;function ei(e){return null!=e?e:{keyframes:[],options:{duration:0}}}function ti(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function oi(e,t){Zo.set(e,ei(t))}function ii(e,t,o){const i=Xo.get(e);if(null==i?void 0:i[t])return ti(i[t],o.dir);const n=Zo.get(t);return n?ti(n,o.dir):{keyframes:[],options:{duration:0}}}var ni=dt`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,ri=dt`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`,si=dt`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,ai=class extends lit_element_s{constructor(){super(),Object.entries(this.constructor.dependencies).forEach((([e,t])=>{this.constructor.define(e,t)}))}emit(e,t){const o=new CustomEvent(e,Jo({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(o),o}static define(e,t=this,o={}){const i=customElements.get(e);if(!i)return void customElements.define(e,class extends t{},o);let n=" (unknown version)",r=n;"version"in t&&t.version&&(n=" v"+t.version),"version"in i&&i.version&&(r=" v"+i.version)}};ai.version="2.15.1",ai.dependencies={},Ko([lo()],ai.prototype,"dir",2),Ko([lo()],ai.prototype,"lang",2);const li=Math.min,ci=Math.max,di=Math.round,pi=Math.floor,hi=e=>({x:e,y:e}),ui={left:"right",right:"left",bottom:"top",top:"bottom"},gi={start:"end",end:"start"};function fi(e,t,o){return ci(e,li(t,o))}function mi(e,t){return"function"==typeof e?e(t):e}function bi(e){return e.split("-")[0]}function vi(e){return e.split("-")[1]}function yi(e){return"x"===e?"y":"x"}function wi(e){return"y"===e?"height":"width"}function ki(e){return["top","bottom"].includes(bi(e))?"y":"x"}function _i(e){return yi(ki(e))}function xi(e){return e.replace(/start|end/g,(e=>gi[e]))}function $i(e){return e.replace(/left|right|bottom|top/g,(e=>ui[e]))}function Ci(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function Si(e){const{x:t,y:o,width:i,height:n}=e;return{width:i,height:n,top:o,left:t,right:t+i,bottom:o+n,x:t,y:o}}function Ai(e,t,o){let{reference:i,floating:n}=e;const r=ki(t),a=_i(t),l=wi(a),c=bi(t),d="y"===r,p=i.x+i.width/2-n.width/2,h=i.y+i.height/2-n.height/2,u=i[l]/2-n[l]/2;let g;switch(c){case"top":g={x:p,y:i.y-n.height};break;case"bottom":g={x:p,y:i.y+i.height};break;case"right":g={x:i.x+i.width,y:h};break;case"left":g={x:i.x-n.width,y:h};break;default:g={x:i.x,y:i.y}}switch(vi(t)){case"start":g[a]-=u*(o&&d?-1:1);break;case"end":g[a]+=u*(o&&d?-1:1)}return g}async function Ri(e,t){var o;void 0===t&&(t={});const{x:i,y:n,platform:r,rects:a,elements:l,strategy:c}=e,{boundary:d="clippingAncestors",rootBoundary:p="viewport",elementContext:h="floating",altBoundary:u=!1,padding:g=0}=mi(t,e),f=Ci(g),m=l[u?"floating"===h?"reference":"floating":h],b=Si(await r.getClippingRect({element:null==(o=await(null==r.isElement?void 0:r.isElement(m)))||o?m:m.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(l.floating)),boundary:d,rootBoundary:p,strategy:c})),v="floating"===h?{x:i,y:n,width:a.floating.width,height:a.floating.height}:a.reference,y=await(null==r.getOffsetParent?void 0:r.getOffsetParent(l.floating)),w=await(null==r.isElement?void 0:r.isElement(y))&&await(null==r.getScale?void 0:r.getScale(y))||{x:1,y:1},k=Si(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:v,offsetParent:y,strategy:c}):v);return{top:(b.top-k.top+f.top)/w.y,bottom:(k.bottom-b.bottom+f.bottom)/w.y,left:(b.left-k.left+f.left)/w.x,right:(k.right-b.right+f.right)/w.x}}function Pi(e){return Di(e)?(e.nodeName||"").toLowerCase():"#document"}function Ei(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function Ti(e){var t;return null==(t=(Di(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function Di(e){return e instanceof Node||e instanceof Ei(e).Node}function Oi(e){return e instanceof Element||e instanceof Ei(e).Element}function Li(e){return e instanceof HTMLElement||e instanceof Ei(e).HTMLElement}function Mi(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof Ei(e).ShadowRoot)}function Fi(e){const{overflow:t,overflowX:o,overflowY:i,display:n}=Hi(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+o)&&!["inline","contents"].includes(n)}function zi(e){return["table","td","th"].includes(Pi(e))}function Ii(e){return[":popover-open",":modal"].some((t=>{try{return e.matches(t)}catch(e){return!1}}))}function Bi(e){const t=Ni(),o=Hi(e);return"none"!==o.transform||"none"!==o.perspective||!!o.containerType&&"normal"!==o.containerType||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||["transform","perspective","filter"].some((e=>(o.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(o.contain||"").includes(e)))}function Ni(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Ui(e){return["html","body","#document"].includes(Pi(e))}function Hi(e){return Ei(e).getComputedStyle(e)}function Wi(e){return Oi(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ji(e){if("html"===Pi(e))return e;const t=e.assignedSlot||e.parentNode||Mi(e)&&e.host||Ti(e);return Mi(t)?t.host:t}function qi(e){const t=ji(e);return Ui(t)?e.ownerDocument?e.ownerDocument.body:e.body:Li(t)&&Fi(t)?t:qi(t)}function Vi(e,t,o){var i;void 0===t&&(t=[]),void 0===o&&(o=!0);const n=qi(e),r=n===(null==(i=e.ownerDocument)?void 0:i.body),a=Ei(n);return r?t.concat(a,a.visualViewport||[],Fi(n)?n:[],a.frameElement&&o?Vi(a.frameElement):[]):t.concat(n,Vi(n,[],o))}function Gi(e){const t=Hi(e);let o=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const n=Li(e),r=n?e.offsetWidth:o,a=n?e.offsetHeight:i,l=di(o)!==r||di(i)!==a;return l&&(o=r,i=a),{width:o,height:i,$:l}}function Qi(e){return Oi(e)?e:e.contextElement}function Ji(e){const t=Qi(e);if(!Li(t))return hi(1);const o=t.getBoundingClientRect(),{width:i,height:n,$:r}=Gi(t);let a=(r?di(o.width):o.width)/i,l=(r?di(o.height):o.height)/n;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}const Yi=hi(0);function Ki(e){const t=Ei(e);return Ni()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:Yi}function Zi(e,t,o,i){void 0===t&&(t=!1),void 0===o&&(o=!1);const n=e.getBoundingClientRect(),r=Qi(e);let a=hi(1);t&&(i?Oi(i)&&(a=Ji(i)):a=Ji(e));const l=function(e,t,o){return void 0===t&&(t=!1),!(!o||t&&o!==Ei(e))&&t}(r,o,i)?Ki(r):hi(0);let c=(n.left+l.x)/a.x,d=(n.top+l.y)/a.y,p=n.width/a.x,h=n.height/a.y;if(r){const e=Ei(r),t=i&&Oi(i)?Ei(i):i;let o=e,n=o.frameElement;for(;n&&i&&t!==o;){const e=Ji(n),t=n.getBoundingClientRect(),i=Hi(n),r=t.left+(n.clientLeft+parseFloat(i.paddingLeft))*e.x,a=t.top+(n.clientTop+parseFloat(i.paddingTop))*e.y;c*=e.x,d*=e.y,p*=e.x,h*=e.y,c+=r,d+=a,o=Ei(n),n=o.frameElement}}return Si({width:p,height:h,x:c,y:d})}function Xi(e){return Zi(Ti(e)).left+Wi(e).scrollLeft}function en(e,t,o){let i;if("viewport"===t)i=function(e,t){const o=Ei(e),i=Ti(e),n=o.visualViewport;let r=i.clientWidth,a=i.clientHeight,l=0,c=0;if(n){r=n.width,a=n.height;const e=Ni();(!e||e&&"fixed"===t)&&(l=n.offsetLeft,c=n.offsetTop)}return{width:r,height:a,x:l,y:c}}(e,o);else if("document"===t)i=function(e){const t=Ti(e),o=Wi(e),i=e.ownerDocument.body,n=ci(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),r=ci(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let a=-o.scrollLeft+Xi(e);const l=-o.scrollTop;return"rtl"===Hi(i).direction&&(a+=ci(t.clientWidth,i.clientWidth)-n),{width:n,height:r,x:a,y:l}}(Ti(e));else if(Oi(t))i=function(e,t){const o=Zi(e,!0,"fixed"===t),i=o.top+e.clientTop,n=o.left+e.clientLeft,r=Li(e)?Ji(e):hi(1);return{width:e.clientWidth*r.x,height:e.clientHeight*r.y,x:n*r.x,y:i*r.y}}(t,o);else{const o=Ki(e);i={...t,x:t.x-o.x,y:t.y-o.y}}return Si(i)}function tn(e,t){const o=ji(e);return!(o===t||!Oi(o)||Ui(o))&&("fixed"===Hi(o).position||tn(o,t))}function on(e,t,o){const i=Li(t),n=Ti(t),r="fixed"===o,a=Zi(e,!0,r,t);let l={scrollLeft:0,scrollTop:0};const c=hi(0);if(i||!i&&!r)if(("body"!==Pi(t)||Fi(n))&&(l=Wi(t)),i){const e=Zi(t,!0,r,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else n&&(c.x=Xi(n));return{x:a.left+l.scrollLeft-c.x,y:a.top+l.scrollTop-c.y,width:a.width,height:a.height}}function nn(e){return"static"===Hi(e).position}function rn(e,t){return Li(e)&&"fixed"!==Hi(e).position?t?t(e):e.offsetParent:null}function sn(e,t){const o=Ei(e);if(Ii(e))return o;if(!Li(e)){let t=ji(e);for(;t&&!Ui(t);){if(Oi(t)&&!nn(t))return t;t=ji(t)}return o}let i=rn(e,t);for(;i&&zi(i)&&nn(i);)i=rn(i,t);return i&&Ui(i)&&nn(i)&&!Bi(i)?o:i||function(e){let t=ji(e);for(;Li(t)&&!Ui(t);){if(Ii(t))return null;if(Bi(t))return t;t=ji(t)}return null}(e)||o}const an={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:o,offsetParent:i,strategy:n}=e;const r="fixed"===n,a=Ti(i),l=!!t&&Ii(t.floating);if(i===a||l&&r)return o;let c={scrollLeft:0,scrollTop:0},d=hi(1);const p=hi(0),h=Li(i);if((h||!h&&!r)&&(("body"!==Pi(i)||Fi(a))&&(c=Wi(i)),Li(i))){const e=Zi(i);d=Ji(i),p.x=e.x+i.clientLeft,p.y=e.y+i.clientTop}return{width:o.width*d.x,height:o.height*d.y,x:o.x*d.x-c.scrollLeft*d.x+p.x,y:o.y*d.y-c.scrollTop*d.y+p.y}},getDocumentElement:Ti,getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:i,strategy:n}=e;const r=[..."clippingAncestors"===o?Ii(t)?[]:function(e,t){const o=t.get(e);if(o)return o;let i=Vi(e,[],!1).filter((e=>Oi(e)&&"body"!==Pi(e))),n=null;const r="fixed"===Hi(e).position;let a=r?ji(e):e;for(;Oi(a)&&!Ui(a);){const t=Hi(a),o=Bi(a);o||"fixed"!==t.position||(n=null),(r?!o&&!n:!o&&"static"===t.position&&n&&["absolute","fixed"].includes(n.position)||Fi(a)&&!o&&tn(e,a))?i=i.filter((e=>e!==a)):n=t,a=ji(a)}return t.set(e,i),i}(t,this._c):[].concat(o),i],a=r[0],l=r.reduce(((e,o)=>{const i=en(t,o,n);return e.top=ci(i.top,e.top),e.right=li(i.right,e.right),e.bottom=li(i.bottom,e.bottom),e.left=ci(i.left,e.left),e}),en(t,a,n));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:sn,getElementRects:async function(e){const t=this.getOffsetParent||sn,o=this.getDimensions,i=await o(e.floating);return{reference:on(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:o}=Gi(e);return{width:t,height:o}},getScale:Ji,isElement:Oi,isRTL:function(e){return"rtl"===Hi(e).direction}};function ln(e,t,o,i){void 0===i&&(i={});const{ancestorScroll:n=!0,ancestorResize:r=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:c=!1}=i,d=Qi(e),p=n||r?[...d?Vi(d):[],...Vi(t)]:[];p.forEach((e=>{n&&e.addEventListener("scroll",o,{passive:!0}),r&&e.addEventListener("resize",o)}));const h=d&&l?function(e,t){let o,i=null;const n=Ti(e);function r(){var e;clearTimeout(o),null==(e=i)||e.disconnect(),i=null}return function a(l,c){void 0===l&&(l=!1),void 0===c&&(c=1),r();const{left:d,top:p,width:h,height:u}=e.getBoundingClientRect();if(l||t(),!h||!u)return;const g={rootMargin:-pi(p)+"px "+-pi(n.clientWidth-(d+h))+"px "+-pi(n.clientHeight-(p+u))+"px "+-pi(d)+"px",threshold:ci(0,li(1,c))||1};let f=!0;function m(e){const t=e[0].intersectionRatio;if(t!==c){if(!f)return a();t?a(!1,t):o=setTimeout((()=>{a(!1,1e-7)}),1e3)}f=!1}try{i=new IntersectionObserver(m,{...g,root:n.ownerDocument})}catch(e){i=new IntersectionObserver(m,g)}i.observe(e)}(!0),r}(d,o):null;let u,g=-1,f=null;a&&(f=new ResizeObserver((e=>{let[i]=e;i&&i.target===d&&f&&(f.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame((()=>{var e;null==(e=f)||e.observe(t)}))),o()})),d&&!c&&f.observe(d),f.observe(t));let m=c?Zi(e):null;return c&&function t(){const i=Zi(e);!m||i.x===m.x&&i.y===m.y&&i.width===m.width&&i.height===m.height||o();m=i,u=requestAnimationFrame(t)}(),o(),()=>{var e;p.forEach((e=>{n&&e.removeEventListener("scroll",o),r&&e.removeEventListener("resize",o)})),null==h||h(),null==(e=f)||e.disconnect(),f=null,c&&cancelAnimationFrame(u)}}const cn=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var o,i;const{x:n,y:r,placement:a,middlewareData:l}=t,c=await async function(e,t){const{placement:o,platform:i,elements:n}=e,r=await(null==i.isRTL?void 0:i.isRTL(n.floating)),a=bi(o),l=vi(o),c="y"===ki(o),d=["left","top"].includes(a)?-1:1,p=r&&c?-1:1,h=mi(t,e);let{mainAxis:u,crossAxis:g,alignmentAxis:f}="number"==typeof h?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...h};return l&&"number"==typeof f&&(g="end"===l?-1*f:f),c?{x:g*p,y:u*d}:{x:u*d,y:g*p}}(t,e);return a===(null==(o=l.offset)?void 0:o.placement)&&null!=(i=l.arrow)&&i.alignmentOffset?{}:{x:n+c.x,y:r+c.y,data:{...c,placement:a}}}}},dn=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:o,y:i,placement:n}=t,{mainAxis:r=!0,crossAxis:a=!1,limiter:l={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...c}=mi(e,t),d={x:o,y:i},p=await Ri(t,c),h=ki(bi(n)),u=yi(h);let g=d[u],f=d[h];if(r){const e="y"===u?"bottom":"right";g=fi(g+p["y"===u?"top":"left"],g,g-p[e])}if(a){const e="y"===h?"bottom":"right";f=fi(f+p["y"===h?"top":"left"],f,f-p[e])}const m=l.fn({...t,[u]:g,[h]:f});return{...m,data:{x:m.x-o,y:m.y-i}}}}},pn=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var o,i;const{placement:n,middlewareData:r,rects:a,initialPlacement:l,platform:c,elements:d}=t,{mainAxis:p=!0,crossAxis:h=!0,fallbackPlacements:u,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:m=!0,...b}=mi(e,t);if(null!=(o=r.arrow)&&o.alignmentOffset)return{};const v=bi(n),y=ki(l),w=bi(l)===l,k=await(null==c.isRTL?void 0:c.isRTL(d.floating)),_=u||(w||!m?[$i(l)]:function(e){const t=$i(e);return[xi(e),t,xi(t)]}(l)),x="none"!==f;!u&&x&&_.push(...function(e,t,o,i){const n=vi(e);let r=function(e,t,o){const i=["left","right"],n=["right","left"],r=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return o?t?n:i:t?i:n;case"left":case"right":return t?r:a;default:return[]}}(bi(e),"start"===o,i);return n&&(r=r.map((e=>e+"-"+n)),t&&(r=r.concat(r.map(xi)))),r}(l,m,f,k));const C=[l,..._],S=await Ri(t,b),A=[];let R=(null==(i=r.flip)?void 0:i.overflows)||[];if(p&&A.push(S[v]),h){const e=function(e,t,o){void 0===o&&(o=!1);const i=vi(e),n=_i(e),r=wi(n);let a="x"===n?i===(o?"end":"start")?"right":"left":"start"===i?"bottom":"top";return t.reference[r]>t.floating[r]&&(a=$i(a)),[a,$i(a)]}(n,a,k);A.push(S[e[0]],S[e[1]])}if(R=[...R,{placement:n,overflows:A}],!A.every((e=>e<=0))){var P,E;const e=((null==(P=r.flip)?void 0:P.index)||0)+1,t=C[e];if(t)return{data:{index:e,overflows:R},reset:{placement:t}};let o=null==(E=R.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:E.placement;if(!o)switch(g){case"bestFit":{var T;const e=null==(T=R.filter((e=>{if(x){const t=ki(e.placement);return t===y||"y"===t}return!0})).map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:T[0];e&&(o=e);break}case"initialPlacement":o=l}if(n!==o)return{reset:{placement:o}}}return{}}}},hn=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){const{placement:o,rects:i,platform:n,elements:r}=t,{apply:a=(()=>{}),...l}=mi(e,t),c=await Ri(t,l),d=bi(o),p=vi(o),h="y"===ki(o),{width:u,height:g}=i.floating;let f,m;"top"===d||"bottom"===d?(f=d,m=p===(await(null==n.isRTL?void 0:n.isRTL(r.floating))?"start":"end")?"left":"right"):(m=d,f="end"===p?"top":"bottom");const b=g-c.top-c.bottom,v=u-c.left-c.right,y=li(g-c[f],b),w=li(u-c[m],v),k=!t.middlewareData.shift;let _=y,x=w;if(h?x=p||k?li(w,v):v:_=p||k?li(y,b):b,k&&!p){const e=ci(c.left,0),t=ci(c.right,0),o=ci(c.top,0),i=ci(c.bottom,0);h?x=u-2*(0!==e||0!==t?e+t:ci(c.left,c.right)):_=g-2*(0!==o||0!==i?o+i:ci(c.top,c.bottom))}await a({...t,availableWidth:x,availableHeight:_});const C=await n.getDimensions(r.floating);return u!==C.width||g!==C.height?{reset:{rects:!0}}:{}}}},un=e=>({name:"arrow",options:e,async fn(t){const{x:o,y:i,placement:n,rects:r,platform:a,elements:l,middlewareData:c}=t,{element:d,padding:p=0}=mi(e,t)||{};if(null==d)return{};const h=Ci(p),u={x:o,y:i},g=_i(n),f=wi(g),m=await a.getDimensions(d),b="y"===g,v=b?"top":"left",y=b?"bottom":"right",w=b?"clientHeight":"clientWidth",k=r.reference[f]+r.reference[g]-u[g]-r.floating[f],_=u[g]-r.reference[g],x=await(null==a.getOffsetParent?void 0:a.getOffsetParent(d));let C=x?x[w]:0;C&&await(null==a.isElement?void 0:a.isElement(x))||(C=l.floating[w]||r.floating[f]);const S=k/2-_/2,A=C/2-m[f]/2-1,R=li(h[v],A),P=li(h[y],A),E=R,T=C-m[f]-P,D=C/2-m[f]/2+S,O=fi(E,D,T),L=!c.arrow&&null!=vi(n)&&D!==O&&r.reference[f]/2-(D<E?R:P)-m[f]/2<0,M=L?D<E?D-E:D-T:0;return{[g]:u[g]+M,data:{[g]:O,centerOffset:D-O-M,...L&&{alignmentOffset:M}},reset:L}}}),gn=(e,t,o)=>{const i=new Map,n={platform:an,...o},r={...n.platform,_c:i};return(async(e,t,o)=>{const{placement:i="bottom",strategy:n="absolute",middleware:r=[],platform:a}=o,l=r.filter(Boolean),c=await(null==a.isRTL?void 0:a.isRTL(t));let d=await a.getElementRects({reference:e,floating:t,strategy:n}),{x:p,y:h}=Ai(d,i,c),u=i,g={},f=0;for(let o=0;o<l.length;o++){const{name:r,fn:m}=l[o],{x:b,y:v,data:y,reset:w}=await m({x:p,y:h,initialPlacement:i,placement:u,strategy:n,middlewareData:g,rects:d,platform:a,elements:{reference:e,floating:t}});p=null!=b?b:p,h=null!=v?v:h,g={...g,[r]:{...g[r],...y}},w&&f<=50&&(f++,"object"==typeof w&&(w.placement&&(u=w.placement),w.rects&&(d=!0===w.rects?await a.getElementRects({reference:e,floating:t,strategy:n}):w.rects),({x:p,y:h}=Ai(d,u,c))),o=-1)}return{x:p,y:h,placement:u,strategy:n,middlewareData:g}})(e,t,{...n,platform:r})},fn=wo(class extends directive_i{constructor(e){if(super(e),e.type!==fo||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const o=e.element.classList;for(const e of this.st)e in t||(o.remove(e),this.st.delete(e));for(const e in t){const i=!!t[e];i===this.st.has(e)||this.nt?.has(e)||(i?(o.add(e),this.st.add(e)):(o.remove(e),this.st.delete(e)))}return Jt}});function mn(e){return vn(e)}function bn(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function vn(e){for(let t=e;t;t=bn(t))if(t instanceof Element&&"none"===getComputedStyle(t).display)return null;for(let t=bn(e);t;t=bn(t)){if(!(t instanceof Element))continue;const e=getComputedStyle(t);if("contents"!==e.display){if("static"!==e.position||"none"!==e.filter)return t;if("BODY"===t.tagName)return t}}return null}var yn=class extends ai{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect();let o=0,i=0,n=0,r=0,a=0,l=0,c=0,d=0;this.placement.includes("top")||this.placement.includes("bottom")?e.top<t.top?(o=e.left,i=e.bottom,n=e.right,r=e.bottom,a=t.left,l=t.top,c=t.right,d=t.top):(o=t.left,i=t.bottom,n=t.right,r=t.bottom,a=e.left,l=e.top,c=e.right,d=e.top):e.left<t.left?(o=e.right,i=e.top,n=t.left,r=t.top,a=e.right,l=e.bottom,c=t.left,d=t.bottom):(o=t.right,i=t.top,n=e.left,r=e.top,a=t.right,l=t.bottom,c=e.left,d=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${r}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${d}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||function(e){return null!==e&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e instanceof Element)}(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=ln(this.anchorEl,this.popup,(()=>{this.reposition()})))}async stop(){return new Promise((e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame((()=>e()))):e()}))}reposition(){if(!this.active||!this.anchorEl)return;const e=[cn({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(hn({apply:({rects:e})=>{const t="width"===this.sync||"both"===this.sync,o="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=o?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(pn({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(dn({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(hn({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(un({element:this.arrowEl,padding:this.arrowPadding}));const t="absolute"===this.strategy?e=>an.getOffsetParent(e,mn):an.getOffsetParent;gn(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:Yo(Jo({},an),{getOffsetParent:t})}).then((({x:e,y:t,middlewareData:o,placement:i})=>{const n="rtl"===getComputedStyle(this).direction,r={top:"bottom",right:"left",bottom:"top",left:"right"}[i.split("-")[0]];if(this.setAttribute("data-current-placement",i),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){const e=o.arrow.x,t=o.arrow.y;let i="",a="",l="",c="";if("start"===this.arrowPlacement){const o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";i="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=n?o:"",c=n?"":o}else if("end"===this.arrowPlacement){const o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=n?"":o,c=n?o:"",l="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(c="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",i="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(c="number"==typeof e?`${e}px`:"",i="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:i,right:a,bottom:l,left:c,[r]:"calc(var(--arrow-size-diagonal) * -1)"})}})),requestAnimationFrame((()=>this.updateHoverBridge())),this.emit("sl-reposition")}render(){return Qt`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${fn({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${fn({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?Qt`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};function wn(e,t){return new Promise((o=>{e.addEventListener(t,(function i(n){n.target===e&&(e.removeEventListener(t,i),o())}))}))}function kn(e,t,o){return new Promise((i=>{if((null==o?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const n=e.animate(t,Yo(Jo({},o),{duration:xn()?0:o.duration}));n.addEventListener("cancel",i,{once:!0}),n.addEventListener("finish",i,{once:!0})}))}function _n(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function xn(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function $n(e){return Promise.all(e.getAnimations().map((e=>new Promise((t=>{e.cancel(),requestAnimationFrame(t)})))))}yn.styles=[si,ri],Ko([uo(".popup")],yn.prototype,"popup",2),Ko([uo(".popup__arrow")],yn.prototype,"arrowEl",2),Ko([lo()],yn.prototype,"anchor",2),Ko([lo({type:Boolean,reflect:!0})],yn.prototype,"active",2),Ko([lo({reflect:!0})],yn.prototype,"placement",2),Ko([lo({reflect:!0})],yn.prototype,"strategy",2),Ko([lo({type:Number})],yn.prototype,"distance",2),Ko([lo({type:Number})],yn.prototype,"skidding",2),Ko([lo({type:Boolean})],yn.prototype,"arrow",2),Ko([lo({attribute:"arrow-placement"})],yn.prototype,"arrowPlacement",2),Ko([lo({attribute:"arrow-padding",type:Number})],yn.prototype,"arrowPadding",2),Ko([lo({type:Boolean})],yn.prototype,"flip",2),Ko([lo({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map((e=>e.trim())).filter((e=>""!==e)),toAttribute:e=>e.join(" ")}})],yn.prototype,"flipFallbackPlacements",2),Ko([lo({attribute:"flip-fallback-strategy"})],yn.prototype,"flipFallbackStrategy",2),Ko([lo({type:Object})],yn.prototype,"flipBoundary",2),Ko([lo({attribute:"flip-padding",type:Number})],yn.prototype,"flipPadding",2),Ko([lo({type:Boolean})],yn.prototype,"shift",2),Ko([lo({type:Object})],yn.prototype,"shiftBoundary",2),Ko([lo({attribute:"shift-padding",type:Number})],yn.prototype,"shiftPadding",2),Ko([lo({attribute:"auto-size"})],yn.prototype,"autoSize",2),Ko([lo()],yn.prototype,"sync",2),Ko([lo({type:Object})],yn.prototype,"autoSizeBoundary",2),Ko([lo({attribute:"auto-size-padding",type:Number})],yn.prototype,"autoSizePadding",2),Ko([lo({attribute:"hover-bridge",type:Boolean})],yn.prototype,"hoverBridge",2);const Cn=new Set,Sn=new MutationObserver(Dn),An=new Map;let Rn,Pn=document.documentElement.dir||"ltr",En=document.documentElement.lang||navigator.language;function Tn(...e){e.map((e=>{const t=e.$code.toLowerCase();An.has(t)?An.set(t,Object.assign(Object.assign({},An.get(t)),e)):An.set(t,e),Rn||(Rn=e)})),Dn()}function Dn(){Pn=document.documentElement.dir||"ltr",En=document.documentElement.lang||navigator.language,[...Cn.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}Sn.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Cn.add(this.host)}hostDisconnected(){Cn.delete(this.host)}dir(){return`${this.host.dir||Pn}`.toLowerCase()}lang(){return`${this.host.lang||En}`.toLowerCase()}getTranslationData(e){var t,o;const i=new Intl.Locale(e.replace(/_/g,"-")),n=null==i?void 0:i.language.toLowerCase(),r=null!==(o=null===(t=null==i?void 0:i.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==o?o:"";return{locale:i,language:n,region:r,primary:An.get(`${n}-${r}`),secondary:An.get(n)}}exists(e,t){var o;const{primary:i,secondary:n}=this.getTranslationData(null!==(o=t.lang)&&void 0!==o?o:this.lang());return t=Object.assign({includeFallback:!1},t),!!(i&&i[e]||n&&n[e]||t.includeFallback&&Rn&&Rn[e])}term(e,...t){const{primary:o,secondary:i}=this.getTranslationData(this.lang());let n;if(o&&o[e])n=o[e];else if(i&&i[e])n=i[e];else{if(!Rn||!Rn[e])return String(e);n=Rn[e]}return"function"==typeof n?n(...t):n}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,t)}}var On={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Tn(On);var Ln=On,Mn=class extends LocalizeController{};function Fn(e,t){const o=Jo({waitUntilFirstUpdate:!1},t);return(t,i)=>{const{update:n}=t,r=Array.isArray(e)?e:[e];t.update=function(e){r.forEach((t=>{const n=t;if(e.has(n)){const t=e.get(n),r=this[n];t!==r&&(o.waitUntilFirstUpdate&&!this.hasUpdated||this[i](t,r))}})),n.call(this,e)}}}Tn(Ln);var zn=class extends ai{constructor(){super(),this.localize=new Mn(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=_n(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.show()),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=_n(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.hide()),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await $n(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:t,options:o}=ii(this,"tooltip.show",{dir:this.localize.dir()});await kn(this.popup.popup,t,o),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await $n(this.body);const{keyframes:e,options:o}=ii(this,"tooltip.hide",{dir:this.localize.dir()});await kn(this.popup.popup,e,o),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,wn(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,wn(this,"sl-after-hide")}render(){return Qt`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${fn({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};zn.styles=[si,ni],zn.dependencies={"sl-popup":yn},Ko([uo("slot:not([name])")],zn.prototype,"defaultSlot",2),Ko([uo(".tooltip__body")],zn.prototype,"body",2),Ko([uo("sl-popup")],zn.prototype,"popup",2),Ko([lo()],zn.prototype,"content",2),Ko([lo()],zn.prototype,"placement",2),Ko([lo({type:Boolean,reflect:!0})],zn.prototype,"disabled",2),Ko([lo({type:Number})],zn.prototype,"distance",2),Ko([lo({type:Boolean,reflect:!0})],zn.prototype,"open",2),Ko([lo({type:Number})],zn.prototype,"skidding",2),Ko([lo()],zn.prototype,"trigger",2),Ko([lo({type:Boolean})],zn.prototype,"hoist",2),Ko([Fn("open",{waitUntilFirstUpdate:!0})],zn.prototype,"handleOpenChange",1),Ko([Fn(["content","distance","hoist","placement","skidding"])],zn.prototype,"handleOptionsChange",1),Ko([Fn("disabled")],zn.prototype,"handleDisabledChange",1),oi("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),oi("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});zn.define("sl-tooltip");var In=Object.defineProperty,Bn=Object.getOwnPropertyDescriptor,Nn=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?Bn(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&In(t,o,r),r};oi("tooltip.show",null),oi("tooltip.hide",null);let Un=class extends lit_element_s{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1}firstUpdated(){this.observer=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-current-placement"===t.attributeName){const e=t.target.getAttribute("data-current-placement");e?this.setAttribute("data-current-placement",e):this.removeAttribute("data-current-placement")}}));const e=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;this.observer.observe(e,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect()}render(){return Qt`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled}
			.distance=${this.distance??Yt}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${this.content}</slot>
			</div>
		</sl-tooltip>`}};Un.styles=dt`
		sl-tooltip {
			--max-width: 320px;
			--hide-delay: 0ms;
			--show-delay: 500ms;
		}

		sl-tooltip::part(base__popup) {
			pointer-events: none;
		}

		sl-tooltip::part(body) {
			border: 1px solid var(--gl-tooltip-border-color);
			box-shadow: 0 2px 8px var(--gl-tooltip-shadow);
		}

		sl-tooltip::part(base__arrow) {
			border: 1px solid var(--gl-tooltip-border-color);
			z-index: 1;
		}

		:host([data-current-placement^='top']) sl-tooltip::part(base__arrow) {
			border-top-width: 0;
			border-left-width: 0;
		}

		:host([data-current-placement^='bottom']) sl-tooltip::part(base__arrow) {
			border-bottom-width: 0;
			border-right-width: 0;
		}

		:host([data-current-placement^='left']) sl-tooltip::part(base__arrow) {
			border-bottom-width: 0;
			border-left-width: 0;
		}

		:host([data-current-placement^='right']) sl-tooltip::part(base__arrow) {
			border-top-width: 0;
			border-right-width: 0;
		}
	`,Nn([lo()],Un.prototype,"content",2),Nn([lo({reflect:!0})],Un.prototype,"placement",2),Nn([lo({type:Boolean})],Un.prototype,"disabled",2),Nn([lo({type:Number})],Un.prototype,"distance",2),Nn([lo({type:Boolean})],Un.prototype,"hoist",2),Un=Nn([ro("gl-tooltip")],Un);var Hn=Object.defineProperty,Wn=Object.getOwnPropertyDescriptor,jn=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?Wn(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&Hn(t,o,r),r};let qn=class extends lit_element_s{constructor(){super(...arguments),this.disabled=!1,this.full=!1}get role(){return this.href?"link":"button"}updated(e){super.updated(e),e.has("disabled")&&this.setAttribute("aria-disabled",this.disabled.toString())}render(){return this.tooltip?Qt`<gl-tooltip .content=${this.tooltip}>${this.renderControl()}</gl-tooltip>`:this.querySelectorAll('[slot="tooltip"]').length>0?Qt`<gl-tooltip>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?Qt`<a
				class="control"
				tabindex="${!1===this.disabled?0:-1}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:Qt`<button class="control" ?disabled=${this.disabled}>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};qn.shadowRootOptions={...lit_element_s.shadowRootOptions,delegatesFocus:!0},qn.styles=[zo,dt`
			:host {
				--button-foreground: var(--color-button-foreground);
				--button-background: var(--color-button-background);
				--button-hover-background: var(--vscode-button-hoverBackground);
				--button-padding: 0.4rem;
				--button-gap: 0.6rem;
				--button-compact-padding: 0.4rem;
				--button-tight-padding: 0.4rem 0.8rem;
				--button-line-height: 1.35;
				--button-border: var(--vscode-button-border, transparent);

				display: inline-block;
				border: none;
				font-family: inherit;
				font-size: inherit;
				line-height: var(--button-line-height);
				text-align: center;
				text-decoration: none;
				user-select: none;
				background: var(--button-background);
				color: var(--button-foreground);
				cursor: pointer;
				border: 1px solid var(--button-border);
				border-radius: var(--gk-action-radius, 0.3rem);
			}

			.control {
				display: inline-flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				gap: var(--button-gap);
				padding: var(--button-padding);
				line-height: var(--button-line-height);

				color: inherit;
				text-decoration: none;

				width: max-content;
				height: 100%;
				cursor: pointer;
			}

			button.control {
				appearance: none;
				background: transparent;
				border: none;
			}

			.control:focus {
				outline: none;
			}

			.label {
				display: inline-block;
			}

			:host(:hover) {
				background: var(--button-hover-background);
			}

			:host(:focus-within) {
				${Fo}
			}

			:host([full]),
			:host([full]) .control {
				width: 100%;
			}

			:host([appearance='secondary']) {
				--button-background: var(--vscode-button-secondaryBackground);
				--button-foreground: var(--vscode-button-secondaryForeground);
				--button-hover-background: var(--vscode-button-secondaryHoverBackground);
			}

			:host([appearance='toolbar']) {
				--button-background: transparent;
				--button-foreground: var(--vscode-foreground);
				--button-hover-background: var(--vscode-toolbar-hoverBackground);
				--button-border: transparent;
			}

			:host([appearance='alert']) {
				--button-background: transparent;
				--button-border: var(--color-alert-infoBorder);
				--button-foreground: var(--color-button-foreground);
				--button-hover-background: var(--color-alert-infoBorder);
				--button-line-height: 1.64;
				width: max-content;
			}

			:host-context(.vscode-light):host([appearance='alert']:not(:hover)),
			:host-context(.vscode-high-contrast-light):host([appearance='alert']:not(:hover)) {
				--button-foreground: var(--color-foreground);
			}

			:host([appearance='toolbar'][href]) > a {
				display: flex;
				align-items: center;
			}

			:host([appearance='alert'][href]) > a {
				display: block;
				width: max-content;
			}

			:host([density='compact']) .control {
				padding: var(--button-compact-padding);
			}

			:host([density='tight']) .control {
				padding: var(--button-tight-padding);
			}

			:host([density='tight']) .control ::slotted(code-icon) {
				--code-icon-size: 11px;
				--code-icon-v-align: unset;
			}

			:host([disabled]) {
				opacity: 0.4;
				cursor: not-allowed;
				pointer-events: none;
			}

			gl-tooltip {
				height: 100%;
				display: inline-flex;
				align-items: center;
				justify-content: center;
			}
		`],jn([uo(".control")],qn.prototype,"control",2),jn([lo()],qn.prototype,"appearance",2),jn([lo({type:Boolean,reflect:!0})],qn.prototype,"disabled",2),jn([lo({reflect:!0})],qn.prototype,"density",2),jn([lo({type:Boolean,reflect:!0})],qn.prototype,"full",2),jn([lo()],qn.prototype,"href",2),jn([lo({reflect:!0})],qn.prototype,"role",1),jn([lo()],qn.prototype,"tooltip",2),qn=jn([ro("gl-button")],qn);var Vn=Object.defineProperty,Gn=Object.getOwnPropertyDescriptor,Qn=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?Gn(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&Vn(t,o,r),r};const Jn=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","git-branch":"\\ea68","git-branch-create":"\\ea68","git-branch-delete":"\\ea68","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b","file-text":"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc","debug-breakpoint-unverified":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","debug-stackframe-dot":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4",bracket:"\\eb0f","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11","gl-commit-horizontal":"\\f101","gl-graph":"\\f102","gl-next-commit":"\\f103","gl-prev-commit-menu":"\\f104","gl-prev-commit":"\\f105","gl-compare-ref-working":"\\f106","gl-branches-view":"\\f107","gl-commit-view":"\\f108","gl-commits-view":"\\f109","gl-compare-view":"\\f10a","gl-contributors-view":"\\f10b","gl-history-view":"\\f10c","gl-remotes-view":"\\f10d","gl-repositories-view":"\\f10e","gl-search-view":"\\f10f","gl-stashes-view":"\\f110","gl-tags-view":"\\f111","gl-worktrees-view":"\\f112","gl-gitlens":"\\f113","gl-stash-pop":"\\f114","gl-stash-save":"\\f115","gl-unplug":"\\f116","gl-open-revision":"\\f117","gl-switch":"\\f118","gl-expand":"\\f119","gl-list-auto":"\\f11a","gl-repo-force-push":"\\f11b","gl-pinned-filled":"\\f11c","gl-clock":"\\f11d","gl-provider-azdo":"\\f11e","gl-provider-bitbucket":"\\f11f","gl-provider-gerrit":"\\f120","gl-provider-gitea":"\\f121","gl-provider-github":"\\f122","gl-provider-gitlab":"\\f123","gl-gitlens-inspect":"\\f124","gl-workspaces-view":"\\f125","gl-cloud-patch":"\\f128","gl-cloud-patch-share":"\\f129","gl-inspect":"\\f12a","gl-repository-filled":"\\f12b","gl-code-suggestion":"\\f12d","gl-diff-multiple":"\\f12e","gl-diff-single":"\\f12f","gl-repo-fetch":"\\f130","gl-repo-pull":"\\f131","gl-repo-push":"\\f132","gl-provider-jira":"\\f133"});let Yn=class extends lit_element_s{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};Yn.styles=dt`
		:host {
			--code-icon-size: 16px;
			--code-icon-v-align: text-bottom;

			font: normal normal normal var(--code-icon-size, 16px) / 1 codicon;
			display: inline-block;
			text-decoration: none;
			text-rendering: auto;
			text-align: center;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			user-select: none;
			-webkit-user-select: none;
			-ms-user-select: none;
			color: inherit;
			vertical-align: var(--code-icon-v-align);
			letter-spacing: normal;
		}

		:host([icon^='gl-']) {
			font-family: 'glicons';
		}

		${lt(Object.entries(Jn).map((([e,t])=>`\n\t\t\t\t\t\t:host([icon='${e}'])::before {\n\t\t\t\t\t\t\tcontent: '${t}';\n\t\t\t\t\t\t}\n\t\t\t\t\t`)).join(""))}

		:host([icon='gl-pinned-filled']):before {
			/* TODO: see relative positioning needed in every use-case */
			position: relative;
			left: 1px;
		}

		@keyframes codicon-spin {
			100% {
				transform: rotate(360deg);
			}
		}

		:host([modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;
		}
		:host([icon='loading'][modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;

			/* custom speed & easing for loading icon */
			animation-duration: 1s !important;
			animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67) !important;
		}

		:host([flip='inline']) {
			transform: rotateY(180deg);
		}

		:host([flip='block']) {
			transform: rotateX(180deg);
		}

		:host([rotate='45']) {
			transform: rotateZ(45deg);
		}
	`,Qn([lo()],Yn.prototype,"icon",2),Qn([lo()],Yn.prototype,"modifier",2),Qn([lo({type:Number})],Yn.prototype,"size",2),Qn([lo()],Yn.prototype,"flip",2),Qn([lo()],Yn.prototype,"rotate",2),Yn=Qn([ro("code-icon")],Yn);const Kn=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let Zn;let Xn,er,tr;function or(e,t){const o=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,i,n,r]of Kn){const a=Math.abs(o);if(a>=i||1e3===i){if(t){if(null==Zn&&(null!=tr?Zn=tr.resolvedOptions().locale:null!=er?Zn=er.resolvedOptions().locale:(tr=new Intl.RelativeTimeFormat(Xn,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),Zn=tr.resolvedOptions().locale)),"en"===Zn||Zn?.startsWith("en-")){return`${Math.round(a/n)}${r}`}return null==tr&&(tr=new Intl.RelativeTimeFormat(Xn,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),tr.format(Math.round(o/n),e)}return null==er&&(er=new Intl.RelativeTimeFormat(Xn,{localeMatcher:"best fit",numeric:"auto",style:"long"})),er.format(Math.round(o/n),e)}}return""}var ir=(e=>(e.Free="free",e.FreePlus="free+",e.Pro="pro",e.Teams="teams",e.Enterprise="enterprise",e))(ir||{}),nr=(e=>(e[e.VerificationRequired=-1]="VerificationRequired",e[e.Free=0]="Free",e[e.FreeInPreviewTrial=1]="FreeInPreviewTrial",e[e.FreePreviewTrialExpired=2]="FreePreviewTrialExpired",e[e.FreePlusInTrial=3]="FreePlusInTrial",e[e.FreePlusTrialExpired=4]="FreePlusTrialExpired",e[e.FreePlusTrialReactivationEligible=5]="FreePlusTrialReactivationEligible",e[e.Paid=6]="Paid",e))(nr||{});function rr(e){switch(e){case"free+":return"GitKraken Free";case"pro":return"GitKraken Pro";case"teams":return"GitKraken Teams";case"enterprise":return"GitKraken Enterprise";default:return"GitKraken"}}function sr(e,t){return ar(e.plan.effective.expiresOn,t)}function ar(e,t){return null!=e?function(e,t,o,i){const n=("number"==typeof t?t:t.getTime())-("number"==typeof e?e:e.getTime()),r=i??Math.floor;switch(o){case"days":return r(n/864e5);case"hours":return r(n/36e5);case"minutes":return r(n/6e4);case"seconds":return r(n/1e3);default:return n}}(Date.now(),new Date(e),t,Math.round):void 0}const lr=dt`
	a {
		color: var(--link-foreground);
		text-decoration: var(--link-decoration-default, none);
	}
	a:focus {
		outline-color: var(--focus-border);
	}
	a:hover {
		color: var(--link-foreground-active);
		text-decoration: underline;
	}
`;var cr=Object.defineProperty,dr=Object.getOwnPropertyDescriptor,pr=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?dr(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&cr(t,o,r),r};let hr=class extends lit_element_s{firstUpdated(){"alert"===this.appearance&&queueMicrotask((()=>this.button.focus()))}render(){if(null==this.state)return void(this.hidden=!0);this.hidden=!1;const e="alert"===(this.appearance??"alert")?"alert":Yt;switch(this.state){case nr.VerificationRequired:return Qt`
					<p class="actions">
						<gl-button
							class="inline"
							appearance="${e}"
							href="${ur(L.PlusResendVerification,this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							class="inline"
							appearance="${e}"
							href="${ur(L.PlusValidate,this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</p>
					<p>You must verify your email before you can continue.</p>
				`;case nr.Free:return Qt`
					<gl-button
						appearance="${e}"
						href="${ur(L.PlusStartPreviewTrial,this.source)}"
						>Continue</gl-button
					>
					<p>
						Continuing gives you 3 days to preview
						${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded}  and other `:""}local
						Pro features.<br />
						${"alert"!==e?Qt`<br />`:""} For full access to Pro features
						<a href="${ur(L.PlusSignUp,this.source)}"
							>start your free 7-day Pro trial</a
						>
						or
						<a href="${ur(L.PlusLogin,this.source)}" title="Sign In">sign in</a>.
					</p>
				`;case nr.FreePreviewTrialExpired:return Qt`
					<gl-button
						appearance="${e}"
						href="${ur(L.PlusSignUp,this.source)}"
						>Start Pro Trial</gl-button
					>
					<p>
						Start your free 7-day Pro trial to try
						${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} and other `:""}Pro
						features, or
						<a href="${ur(L.PlusLogin,this.source)}" title="Sign In">sign in</a>.
					</p>
				`;case nr.FreePlusTrialExpired:return Qt` <gl-button
						appearance="${e}"
						href="${ur(L.PlusUpgrade,this.source)}"
						>Upgrade to Pro</gl-button
					>
					<p>
						Your Pro trial has ended. Please upgrade for full access to
						${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} and other `:""}Pro
						features.
					</p>
					<p class="special">Special: <b>50% off first seat of Pro</b> — only $4/month!<br /></p>`;case nr.FreePlusTrialReactivationEligible:return Qt`
					<gl-button
						appearance="${e}"
						href="${ur(L.PlusReactivateProTrial,this.source)}"
						>Continue</gl-button
					>
					<p>
						Reactivate your Pro trial and experience
						${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} and `:""}all the new
						Pro features — free for another 7 days!
					</p>
				`}}};function ur(e,t){return`command:${e}${t?`?${encodeURIComponent(JSON.stringify(t))}`:""}`}hr.styles=[lr,dt`
			:host {
				--gk-action-radius: 0.3rem;
				container-type: inline-size;
			}

			:host([appearance='welcome']) gl-button {
				width: 100%;
				max-width: 300px;
			}

			@container (max-width: 600px) {
				:host([appearance='welcome']) gl-button {
					display: block;
					margin-left: auto;
					margin-right: auto;
				}
			}

			:host([appearance='alert']) gl-button:not(.inline) {
				display: block;
				margin-left: auto;
				margin-right: auto;
			}

			:host-context([appearance='alert']) p:first-child {
				margin-top: 0;
			}

			:host-context([appearance='alert']) p:last-child {
				margin-bottom: 0;
			}

			.actions {
				text-align: center;
			}

			.hint {
				border-bottom: 1px dashed currentColor;
			}

			.special {
				font-size: smaller;
				text-align: center;
			}

			:host([appearance='welcome']) .special {
				opacity: 0.6;
			}
		`],pr([uo("gl-button")],hr.prototype,"button",2),pr([lo({type:String})],hr.prototype,"appearance",2),pr([lo()],hr.prototype,"featureWithArticleIfNeeded",2),pr([lo({type:Object})],hr.prototype,"source",2),pr([lo({attribute:!1,type:Number})],hr.prototype,"state",2),hr=pr([ro("gl-feature-gate-plus-state")],hr);var gr=Object.defineProperty,fr=Object.getOwnPropertyDescriptor,mr=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?fr(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&gr(t,o,r),r};let br=class extends lit_element_s{render(){if(!this.visible||null!=this.state&&(null!=(e=this.state)&&(6===e||1===e||3===e)))return void(this.hidden=!0);var e;const t=this.appearance??"editor"===(document.body.getAttribute("data-placement")??"editor")?"alert":"welcome";return this.hidden=!1,Qt`
			<section>
				<slot></slot>
				<slot name="feature"></slot>
				<gl-feature-gate-plus-state
					appearance=${t}
					.featureWithArticleIfNeeded=${this.featureWithArticleIfNeeded}
					.source=${this.source}
					.state=${this.state}
				></gl-feature-gate-plus-state>
			</section>
		`}};br.styles=dt`
		:host {
			--background: var(--vscode-sideBar-background);
			--foreground: var(--vscode-sideBar-foreground);
			--link-foreground: var(--vscode-textLink-foreground);
			--link-foreground-active: var(--vscode-textLink-activeForeground);

			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			overflow: auto;
			z-index: 100;

			box-sizing: border-box;
		}

		:host-context(body[data-placement='editor']),
		:host([appearance='alert']) {
			--background: transparent;
			--foreground: var(--vscode-editor-foreground);

			backdrop-filter: blur(3px) saturate(0.8);
			padding: 0 2rem;
		}

		::slotted(p) {
			margin: revert !important;
		}

		::slotted(p:first-child) {
			margin-top: 0 !important;
		}

		section {
			--section-foreground: var(--foreground);
			--section-background: var(--background);
			--section-border-color: transparent;

			display: flex;
			flex-direction: column;
			padding: 0 2rem 1.3rem 2rem;
			background: var(--section-background);
			color: var(--section-foreground);
			border: 1px solid var(--section-border-color);

			height: min-content;
		}

		:host-context(body[data-placement='editor']) section,
		:host([appearance='alert']) section {
			--section-foreground: var(--color-alert-foreground);
			--section-background: var(--color-alert-infoBackground);
			--section-border-color: var(--color-alert-infoBorder);

			--link-decoration-default: underline;
			--link-foreground: var(--vscode-foreground);
			--link-foreground-active: var(--vscode-foreground);

			border-radius: 0.3rem;
			max-width: 600px;
			max-height: min-content;
			margin: 0.2rem auto;
			padding: 1.3rem;
		}

		:host-context(body[data-placement='editor']) section ::slotted(gl-button),
		:host([appearance='alert']) section ::slotted(gl-button) {
			display: block;
			margin-left: auto;
			margin-right: auto;
		}
	`,mr([lo({reflect:!0})],br.prototype,"appearance",2),mr([lo()],br.prototype,"featureWithArticleIfNeeded",2),mr([lo({type:Object})],br.prototype,"source",2),mr([lo({attribute:!1,type:Number})],br.prototype,"state",2),mr([lo({type:Boolean})],br.prototype,"visible",2),br=mr([ro("gl-feature-gate")],br);yn.define("sl-popup");const vr=new WeakMap;function yr(e,t){return function(o,i,n){let r=vr.get(o.constructor);null==r&&vr.set(o.constructor,r=[]),r.push({method:n.value,keys:Array.isArray(e)?e:[e],afterFirstUpdate:t?.afterFirstUpdate??!1})}}class GlElement extends lit_element_s{emit(e,t,o){const i=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...o,detail:t});return this.dispatchEvent(i),i}update(e){const t=vr.get(this.constructor);if(null!=t)for(const{keys:o,method:i,afterFirstUpdate:n}of t){if(n&&!this.hasUpdated)continue;const t=o.filter((t=>e.has(t)));t.length&&i.call(this,t)}super.update(e)}}var wr=Object.defineProperty,kr=Object.getOwnPropertyDescriptor,_r=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?kr(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&wr(t,o,r),r};let xr=class extends GlElement{constructor(){super(),this.placement="bottom",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleTriggerBlur=e=>{if(this.open&&this.hasTrigger("focus")){if(e.composedPath().includes(this))return;this.hide()}},this.handleTriggerClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleTriggerFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handlePopupBlur=e=>{e.composedPath().includes(this)||this.hide()},this.handleWebviewBlur=()=>{this.hide()},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);const e=j(getComputedStyle(this).getPropertyValue("--show-delay"));this.hoverTimeout=setTimeout((()=>this.show()),e)}},this.handleMouseOut=e=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);const t=e.composedPath();if(t[t.length-2]===this)return;if(this.hasPopupFocus())return;const o=j(getComputedStyle(this).getPropertyValue("--hide-delay"));this.hoverTimeout=setTimeout((()=>this.hide()),o)}},this.addEventListener("blur",this.handleTriggerBlur,!0),this.addEventListener("focus",this.handleTriggerFocus,!0),this.addEventListener("click",this.handleTriggerClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){this.closeWatcher?.destroy(),document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasPopupFocus(){return this.matches(':has([slot="content"]:focus-within)')}hasTrigger(e){return this.trigger.split(" ").includes(e)}handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("gl-popover-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("focusin",this.handlePopupBlur),window.addEventListener("webview-blur",this.handleWebviewBlur,!1),this.body.hidden=!1,this.popup.active=!0,this.popup.reposition(),this.emit("gl-popover-after-show")}else document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),this.emit("gl-popover-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.popup.active=!1,this.body.hidden=!0,this.emit("gl-popover-after-hide")}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,q(this,"gl-popover-after-show")}async hide(){if(this.open)return this.open=!1,q(this,"gl-popover-after-hide")}render(){return Qt`<sl-popup
			part="base"
			exportparts="
				popup:base__popup,
				arrow:base__arrow
			"
			class="popover"
			.anchor=${this.anchor}
			placement=${this.placement}
			distance=${this.distance}
			skidding=${this.skidding}
			strategy=${this.hoist?"fixed":"absolute"}
			auto-size="horizontal"
			auto-size-padding="3"
			flip-padding="3"
			flip
			shift
			arrow
			hover-bridge
		>
			<div slot="anchor" aria-describedby="popover">
				<slot name="anchor"></slot>
			</div>

			<div
				part="body"
				id="popover"
				class="popover__body"
				role="tooltip"
				aria-live=${this.open?"polite":"off"}
			>
				<slot name="content"></slot>
			</div>
		</sl-popup>`}};xr.shadowRootOptions={...lit_element_s.shadowRootOptions,delegatesFocus:!0},xr.styles=dt`
		:host {
			--hide-delay: 0ms;
			--show-delay: 500ms;

			display: contents;
		}

		.popover {
			--arrow-size: var(--sl-tooltip-arrow-size);
			--arrow-color: var(--sl-tooltip-background-color);
		}

		.popover::part(popup) {
			z-index: var(--sl-z-index-tooltip);
		}

		.popover::part(arrow) {
			border: 1px solid var(--gl-tooltip-border-color);
			z-index: 1;
		}

		.popover[placement^='top']::part(popup) {
			transform-origin: bottom;
		}

		.popover[placement^='bottom']::part(popup) {
			transform-origin: top;
		}

		.popover[placement^='left']::part(popup) {
			transform-origin: right;
		}

		.popover[placement^='right']::part(popup) {
			transform-origin: left;
		}

		.popover[data-current-placement^='top']::part(arrow) {
			border-top-width: 0;
			border-left-width: 0;
		}

		.popover[data-current-placement^='bottom']::part(arrow) {
			border-bottom-width: 0;
			border-right-width: 0;
		}

		.popover[data-current-placement^='left']::part(arrow) {
			border-bottom-width: 0;
			border-left-width: 0;
		}

		.popover[data-current-placement^='right']::part(arrow) {
			border-top-width: 0;
			border-right-width: 0;
		}

		.popover__body {
			display: block;
			width: fit-content;
			border: 1px solid var(--gl-tooltip-border-color);
			border-radius: var(--sl-tooltip-border-radius);
			box-shadow: 0 2px 8px var(--gl-tooltip-shadow);
			background-color: var(--sl-tooltip-background-color);
			font-family: var(--sl-tooltip-font-family);
			font-size: var(--sl-tooltip-font-size);
			font-weight: var(--sl-tooltip-font-weight);
			line-height: var(--sl-tooltip-line-height);
			text-align: start;
			white-space: normal;
			color: var(--sl-tooltip-color);
			padding: var(--sl-tooltip-padding);
			user-select: none;
			-webkit-user-select: none;
			max-width: min(var(--auto-size-available-width), var(--max-width, 70vw));
			/* max-height: var(--auto-size-available-height);
			overflow: auto; */
			pointer-events: all;
		}

		.popover[data-current-placement^='top'] .popover__body,
		.popover[data-current-placement^='bottom'] .popover__body {
			width: max-content;
		}

		/* .popover::part(hover-bridge) {
			background: tomato;
			opacity: 1;
			z-index: 10000000000;
		} */
	`,_r([uo("#popover")],xr.prototype,"body",2),_r([uo("sl-popup")],xr.prototype,"popup",2),_r([lo({reflect:!0})],xr.prototype,"placement",2),_r([lo({type:Object})],xr.prototype,"anchor",2),_r([lo({reflect:!0,type:Boolean})],xr.prototype,"disabled",2),_r([lo({type:Number})],xr.prototype,"distance",2),_r([lo({reflect:!0,type:Boolean})],xr.prototype,"open",2),_r([lo({type:Number})],xr.prototype,"skidding",2),_r([lo()],xr.prototype,"trigger",2),_r([lo({type:Boolean})],xr.prototype,"hoist",2),_r([yr("open",{afterFirstUpdate:!0})],xr.prototype,"handleOpenChange",1),_r([yr(["distance","hoist","placement","skidding"])],xr.prototype,"handleOptionsChange",1),_r([yr("disabled")],xr.prototype,"handleDisabledChange",1),xr=_r([ro("gl-popover")],xr);var $r=Object.defineProperty,Cr=Object.getOwnPropertyDescriptor,Sr=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?Cr(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&$r(t,o,r),r};let Ar=class extends lit_element_s{constructor(){super(...arguments),this.cloud=!1,this.placement="bottom",this.preview=!1}get daysRemaining(){return null==this.subscription?0:sr(this.subscription,"days")??0}get state(){return this.subscription?.state}render(){return Qt`
			<gl-popover placement=${this.placement} hoist>
				<span slot="anchor" class="badge" tabindex="0">${this.renderBadge()}</span>
				<div slot="content" class="badge-popup" tabindex="-1">
					${this.renderPopoverHeader()}${this.renderPopoverContent()}
				</div>
			</gl-popover>
		`}renderBadge(){const e=this.preview?"Preview":"Pro";if(null!=this.subscription){if(this.state===nr.VerificationRequired)return Qt`${e} <code-icon class="badge-icon" icon="warning" size="10"></code-icon>`;if(o=this.subscription,"free"!==(i=o.plan.actual.id)&&"free+"!==i||this.cloud&&null!=this.subscription.account)return Qt`${e} <code-icon class="badge-icon" icon="check" size="10"></code-icon>`;if(null!=(t=this.state)&&(1===t||3===t))return Qt`${e} <code-icon class="badge-icon" icon="clock" size="10"></code-icon>`}var t,o,i;return this.cloud?Qt`${e}<span class="badge-icon">☁️</span>`:e}renderPopoverHeader(){const e=Qt`<span class="popup-title"
			>${this.preview?"Preview feature":"Pro feature"}${this.cloud?" ☁️":""}</span
		>`;return this.state===nr.Paid?Qt`<div class="popup-header">${e}</div>`:this.cloud?this.preview?Qt`<div class="popup-header">
					${e}<span class="popup-subtitle"
						>Requires an account and may require a paid plan in the future</span
					>
				</div>`:Qt`<div class="popup-header">
				${e}<span class="popup-subtitle"> Requires a paid plan</span>
			</div>`:this.preview?Qt`<div class="popup-header">
				${e}<span class="popup-subtitle">May require a paid plan in the future</span>
			</div>`:Qt`<div class="popup-header">
			${e}<span class="popup-subtitle"> Requires a paid plan for use on privately-hosted repos</span>
		</div>`}renderPopoverContent(){if(null==this.subscription)return Yt;let e;switch(this.state){case nr.Paid:e=Qt`<p>
					Your
					<gl-tooltip hoist content="Show Account view">
						<a href="${Rr(L.ShowAccountView,void 0)}"
							>${rr(this.subscription?.plan.actual.id??ir.Pro)}</a
						>
					</gl-tooltip>
					plan provides access to all Pro features.
				</p>`;break;case nr.VerificationRequired:e=Qt`<p>You must verify your email before you can access Pro features.</p>
					<div class="actions">
						<gl-button
							appearance="primary"
							density="tight"
							href="${Rr(L.PlusResendVerification,this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							appearance="secondary"
							density="tight"
							href="${Rr(L.PlusValidate,this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</div>`;break;case nr.FreePlusInTrial:{const t=this.daysRemaining;e=Qt`<p>
						You have
						<strong>${t<1?"<1 day":z("day",t,{infix:" more "})} left</strong>
						in your Pro trial. Once your trial ends, you will only be able to use Pro features on
						publicly-hosted repos.
					</p>
					${this.renderUpgradeActions()}`;break}case nr.FreePlusTrialExpired:e=Qt`<p>
						Your Pro trial as ended. You can now only use Pro features on publicly-hosted repos.
					</p>
					${this.renderUpgradeActions(Qt`<p>Please upgrade for full access to Pro features:</p>`)}`;break;case nr.FreePlusTrialReactivationEligible:e=Qt`<p>
						Reactivate your Pro trial and experience all the new Pro features — free for another 7 days!
					</p>
					<div class="actions center">
						<gl-button
							appearance="primary"
							density="tight"
							href="${Rr(L.PlusReactivateProTrial,this.source)}"
							>Reactivate Pro Trial</gl-button
						>
					</div>`;break;default:if(!this.cloud&&this.state===nr.FreeInPreviewTrial){const t=this.daysRemaining;e=Qt`<p>
							You have
							<strong>${t<1?"<1 day":z("day",t,{infix:" more "})} left</strong>
							to preview
							<gl-tooltip hoist content="Pro features that do not require an account"
								><span class="hint">local</span></gl-tooltip
							>
							Pro features.
						</p>
						${this.renderStartTrialActions()}`;break}e=Qt`<p>
						You only have access to
						<gl-tooltip hoist content="Pro features that do not require an account"
							><span class="hint">local</span></gl-tooltip
						>
						Pro features on publicly-hosted repos.
					</p>
					${this.renderStartTrialActions()}`}return Qt`<div class="popup-content">${e}</div>`}renderStartTrialActions(){return Qt`<div class="actions">
			<p>For access to all Pro features:</p>
			<gl-button
				appearance="primary"
				density="tight"
				href="${Rr(L.PlusSignUp,this.source)}"
				>Start 7-day Pro Trial</gl-button
			>
			&nbsp;or <a href="${Rr(L.PlusLogin,this.source)}" title="Sign In">sign in</a>
		</div>`}renderUpgradeActions(e){return Qt`<div class="actions">
			${e??Yt}
			<gl-button
				appearance="primary"
				density="tight"
				href="${Rr(L.PlusUpgrade,this.source)}"
				>Upgrade to Pro</gl-button
			>
			<p class="special">Special: <b>50% off first seat of Pro</b> — only $4/month!<br /></p>
		</div>`}};function Rr(e,t){return`command:${e}${t?`?${encodeURIComponent(JSON.stringify(t))}`:""}`}Ar.styles=[zo,Io,dt`
			:host {
				/* position: relative; */
				display: inline-block;
				--gl-feature-badge-color: currentColor;
				--gl-feature-badge-border-color: var(--color-foreground--50);
				--max-width: 40rem;
			}

			a {
				color: var(--color-link);
				text-decoration: underline;
			}

			.badge {
				color: var(--gl-feature-badge-color, currentColor);
				cursor: help;
				font-size: var(--gl-feature-badge-font-size, x-small);
				font-variant: all-small-caps;
				font-weight: 600;
				border: 1px solid var(--gl-feature-badge-border-color, var(--color-foreground--50));
				border-radius: 1rem;
				padding: 0 0.8rem 0.1rem 0.8rem;
				white-space: nowrap;
			}

			.badge:focus {
				${lt(Lo)}
			}

			.badge-icon {
				font-weight: 400;
				margin-left: 0.4rem;
				white-space: nowrap;
			}

			.badge-popup {
				display: flex;
				flex-direction: column;
				white-space: normal;
				gap: 0.6rem;
			}

			.popup-header {
				display: flex;
				flex-direction: column;
				margin-bottom: 0.4rem;
			}

			.popup-title {
				font-size: 1.3rem;
				font-weight: 600;
			}

			.popup-subtitle {
				font-size: smaller;
				margin-top: 0.6rem;
			}

			.popup-content {
				display: flex;
				flex-direction: column;
				border-top: 1px solid var(--color-foreground--25);
				padding-top: 0.6rem;
			}

			.popup-content p {
				margin: 0;
			}

			.popup-content .actions {
				margin-top: 0.8rem;
				margin-bottom: 0.6rem;
			}

			.popup-content .actions:first-child {
				margin-bottom: 0.8rem;
			}

			.popup-content .actions :not(:first-child) {
				margin-top: 0.4rem;
			}

			.popup-content .actions gl-button:not(:first-child) {
				margin-top: 0.6rem;
			}

			.popup-content .actions .special {
				font-size: smaller;
				margin-top: 0.8rem;
				opacity: 0.6;
				text-align: center;
			}

			.hint {
				border-bottom: 1px dashed currentColor;
			}
		`],Sr([lo({type:Boolean})],Ar.prototype,"cloud",2),Sr([lo({reflect:!0})],Ar.prototype,"placement",2),Sr([lo({type:Boolean})],Ar.prototype,"preview",2),Sr([lo({type:Object})],Ar.prototype,"source",2),Sr([lo({attribute:!1})],Ar.prototype,"subscription",2),Ar=Sr([ro("gl-feature-badge")],Ar);const Pr=dt`
	.repo-branch {
		display: flex;
		flex-direction: column;
		gap: 0 0.4rem;
	}

	@media (max-width: 720px) {
		.repo-branch {
			flex-direction: row;
			flex-wrap: wrap;
		}
	}

	.repo-branch__tag {
		cursor: pointer;
	}
`,Er=dt`
	:host {
		display: block;
	}

	p {
		margin: 0;
	}

	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
	a:focus {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}

	.actions gk-tooltip {
		display: inline-block;
	}

	.actions a {
		box-sizing: border-box;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 3.2rem;
		height: 3.2rem;
		border-radius: 0.5rem;
		color: inherit;
		padding: 0.2rem;
		vertical-align: text-bottom;
		text-decoration: none;
		cursor: pointer;
	}
	.actions a:hover {
		background-color: var(--vscode-toolbar-hoverBackground);
	}
	.actions a:active {
		background-color: var(--vscode-toolbar-activeBackground);
	}
	.actions a[tabindex='-1'] {
		opacity: 0.5;
		cursor: default;
	}

	.actions a code-icon {
		font-size: 1.6rem;
	}

	.indicator-info {
		color: var(--vscode-problemsInfoIcon-foreground);
	}
	.indicator-warning {
		color: var(--vscode-problemsWarningIcon-foreground);
	}
	.indicator-error {
		color: var(--vscode-problemsErrorIcon-foreground);
	}
	.indicator-neutral {
		color: var(--color-alert-neutralBorder);
	}

	.row-type {
		--gk-badge-outline-padding: 0.3rem 0.8rem;
		--gk-badge-font-size: 1.1rem;
		opacity: 0.4;
		vertical-align: middle;
	}

	.title {
		font-size: 1.4rem;
	}

	.add-delete {
		margin-left: 0.4rem;
		margin-right: 0.2rem;
	}

	.key {
		z-index: 1;
		position: relative;
	}

	.date {
		display: inline-block;
		min-width: 1.6rem;
		line-height: 2.4rem;
	}

	gk-focus-row:not(:hover):not(:focus-within) gl-snooze:not([snoozed]),
	gk-focus-row:not(:hover):not(:focus-within) .pin:not(.is-active) {
		opacity: 0;
	}
`,Tr=dt`
	.icon {
		box-sizing: border-box;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 2.4rem;
		height: 2.4rem;
	}

	.pin {
		color: inherit;
		text-decoration: none;
		cursor: pointer;
		opacity: 0.4;
	}

	.pin:hover {
		opacity: 0.64;
		text-decoration: none;
	}

	.pin:focus {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}

	.pin.is-active {
		opacity: 1;
	}

	.pin-menu {
		width: max-content;
	}

	gk-tooltip gk-menu {
		z-index: 10;
	}
`,Dr=dt`
	.indicator-warning {
		color: var(--vscode-problemsWarningIcon-foreground);
	}
	.indicator-danger {
		color: var(--vscode-problemsErrorIcon-foreground);
	}
`;function Or(e,t=new Date){const o=Math.floor((t.getTime()-e.getTime())/1e3);let i="ok";return Math.floor(o/31536e3)>=1||Math.floor(o/2592e3)>=1||Math.floor(o/604800)>=1?i="danger":Math.floor(o/86400)>=1&&(i="warning"),{label:or(e,!0),tooltip:or(e),status:i}}var Lr=Object.defineProperty,Mr=Object.getOwnPropertyDescriptor,Fr=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?Mr(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&Lr(t,o,r),r};const zr=36e5;let Ir=class extends lit_element_s{constructor(){super(),Ye(Ue,We,je,Qe)}render(){return this.snoozed?Qt`
				<gk-tooltip>
					<a href="#" class="icon pin is-active" slot="trigger" @click=${this.onUnsnoozeClick}
						><code-icon icon="bell"></code-icon
					></a>
					<span>Unsnooze</span>
				</gk-tooltip>
			`:Qt`
			<gk-popover placement="bottom-start">
				<a href="#" class="icon pin" slot="trigger"><code-icon icon="bell-slash"></code-icon></a>
				<gk-menu class="pin-menu" @select=${this.onSelectDuration}>
					<gk-menu-item data-value="unlimited">Snooze</gk-menu-item>
					<gk-menu-item data-value="1hr">Snooze for 1 hour</gk-menu-item>
					<gk-menu-item data-value="4hr">Snooze for 4 hours</gk-menu-item>
					<gk-menu-item data-value="tomorrow-9am">Snooze until tomorrow at 9:00 AM</gk-menu-item>
				</gk-menu>
			</gk-popover>
		`}onSnoozeActionCore(e){this.dispatchEvent(new CustomEvent("gl-snooze-action",{detail:{expiresAt:e,snooze:this.snoozed}}))}onUnsnoozeClick(e){e.preventDefault(),this.onSnoozeActionCore()}onSelectDuration(e){e.preventDefault();const t=e.detail.target.dataset.value;if(!t)return;if("unlimited"===t)return void this.onSnoozeActionCore();const o=new Date;let i=o.getTime();switch(t){case"1hr":i+=zr;break;case"4hr":i+=4*zr;break;case"tomorrow-9am":o.setDate(o.getDate()+1),o.setHours(9,0,0,0),i=o.getTime()}this.onSnoozeActionCore(new Date(i).toISOString())}};Ir.styles=[Oo,Tr],Fr([lo({reflect:!0})],Ir.prototype,"snoozed",2),Ir=Fr([ro("gl-snooze")],Ir);var Br=Object.defineProperty,Nr=Object.getOwnPropertyDescriptor,Ur=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?Nr(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&Br(t,o,r),r};let Hr=class extends lit_element_s{constructor(){super(),this.isCurrentBranch=!1,this.isCurrentWorktree=!1,this.hasWorktree=!1,this.hasLocalBranch=!1,Ye(Ve,Ie,ze,De,Te,qe,Ee,Qe)}get lastUpdatedDate(){return new Date(this.pullRequest.updatedDate)}get assignees(){const e=this.pullRequest?.assignees;if(null==e)return[];const t=this.pullRequest.author;return null!=t?e.filter((e=>e.name!==t.name)):e}get indicator(){return null==this.pullRequest?"":"ChangesRequested"===this.pullRequest.reviewDecision?"changes":"Approved"===this.pullRequest.reviewDecision&&"Mergeable"===this.pullRequest.mergeableState?"ready":"Conflicting"===this.pullRequest.mergeableState?"conflicting":""}get dateStyle(){return`indicator-${Or(this.lastUpdatedDate).status}`}get participants(){const e=[];function t(t,o){const i=e.find((e=>e.member.name===t.name));null!=i?i.roles.push(o):e.push({member:t,roles:[o]})}return null!=this.pullRequest?.author&&t(this.pullRequest.author,"author"),null!=this.pullRequest?.assignees&&this.pullRequest.assignees.forEach((e=>t(e,"assigned"))),null!=this.pullRequest?.reviewRequests&&this.pullRequest.reviewRequests.forEach((e=>t(e.reviewer,"reviewer"))),e}render(){if(this.pullRequest)return Qt`
			<gk-focus-row>
				<span slot="pin">
					<gk-tooltip>
						<a
							href="#"
							class="icon pin ${this.pinned?" is-active":""}"
							slot="trigger"
							@click="${this.onPinClick}"
							><code-icon icon="pinned"></code-icon
						></a>
						<span>${this.pinned?"Unpin":"Pin"}</span>
					</gk-tooltip>
					<gl-snooze .snoozed=${this.snoozed} @gl-snooze-action=${this.onSnoozeAction}></gl-snooze>
				</span>
				<span slot="date">
					<gk-date-from class="date ${this.dateStyle}" date="${this.lastUpdatedDate}"></gk-date-from>
				</span>
				<span slot="key" class="key">
					${To("changes"===this.indicator,(()=>Qt`<gk-tooltip>
								<span class="icon" slot="trigger"
									><code-icon class="indicator-error" icon="request-changes"></code-icon
								></span>
								<span>changes requested</span>
							</gk-tooltip>`))}
					${To("ready"===this.indicator,(()=>Qt`<gk-tooltip>
								<span class="icon" slot="trigger"
									><code-icon class="indicator-info" icon="pass"></code-icon
								></span>
								<span>approved and ready to merge</span>
							</gk-tooltip>`))}
					${To("conflicting"===this.indicator,(()=>Qt`<gk-tooltip>
								<span class="icon" slot="trigger"
									><code-icon class="indicator-error" icon="bracket-error"></code-icon
								></span>
								<span>cannot be merged due to merge conflicts</span>
							</gk-tooltip>`))}
				</span>
				<gk-focus-item>
					<p>
						<span class="title"
							>${this.pullRequest.title}
							<a href="${this.pullRequest.url}">#${this.pullRequest.id}</a></span
						>
						<!-- &nbsp;
						<gk-badge>pending suggestions</gk-badge> -->
					</p>
					<p>
						<gk-badge variant="outline" class="row-type">PR</gk-badge>
						<gk-additions-deletions class="add-delete">
							<span slot="additions">${this.pullRequest.additions}</span>
							<span slot="deletions">${this.pullRequest.deletions}</span>
						</gk-additions-deletions>
						<gk-tooltip>
							<gk-tag variant="ghost" slot="trigger">
								<span slot="prefix"><code-icon icon="comment-discussion"></code-icon></span>
								${this.pullRequest.commentsCount}
							</gk-tag>
							<span>Comments</span>
						</gk-tooltip>
					</p>
					<span slot="people">
						<gk-avatar-group>
							${To(this.participants.length>0,(()=>Qt`
									${Eo(this.participants,(e=>e.member.url),(e=>Qt`<gk-avatar
												src="${e.member.avatarUrl}"
												title="${`${e.member.name?`${e.member.name} `:""}(${e.roles.join(", ")})`}"
											></gk-avatar>`))}
								`))}
						</gk-avatar-group>
					</span>
					<div slot="repo" class="repo-branch">
						<gk-tag class="repo-branch__tag" full @click=${this.onOpenBranchClick}>
							<span slot="prefix"><code-icon icon="source-control"></code-icon></span>
							${!0===this.pullRequest.refs?.isCrossRepository?Qt`${this.pullRequest.refs?.head.owner}:${this.pullRequest.refs?.head.branch}`:this.pullRequest.refs?.head.branch}
						</gk-tag>
						<gk-tag variant="ghost" class="repo-branch__tag" full>
							<span slot="prefix"><code-icon icon="repo"></code-icon></span>
							${this.pullRequest.refs?.base.repo}
						</gk-tag>
					</div>
					<nav slot="actions" class="actions">
						<gk-tooltip>
							<a
								slot="trigger"
								href="#"
								tabindex="${this.isCurrentWorktree||this.isCurrentBranch?-1:Yt}"
								aria-label="${this.isCurrentWorktree?"Already on this worktree":"Open Worktree..."}"
								@click="${this.onOpenWorktreeClick}"
								><code-icon icon="gl-worktrees-view"></code-icon
							></a>
							<span
								>${this.isCurrentWorktree?"Already on this worktree":"Open Worktree..."}</span
							> </gk-tooltip
						><gk-tooltip>
							<a
								slot="trigger"
								href="#"
								tabindex="${this.hasWorktree||this.isCurrentBranch?-1:Yt}"
								aria-label="${this.isCurrentBranch?"Already on this branch":this.hasWorktree?"This branch has a worktree":"Switch to Branch..."}"
								@click="${this.onSwitchBranchClick}"
								><code-icon icon="gl-switch"></code-icon
							></a>
							<span
								>${this.isCurrentBranch?"Already on this branch":this.hasWorktree?"This branch has a worktree":"Switch to Branch..."}</span
							>
						</gk-tooltip>
					</nav>
				</gk-focus-item>
			</gk-focus-row>
		`}onOpenBranchClick(e){this.dispatchEvent(new CustomEvent("open-branch",{detail:this.pullRequest}))}onOpenWorktreeClick(e){if(this.isCurrentWorktree)return e.preventDefault(),void e.stopImmediatePropagation();this.dispatchEvent(new CustomEvent("open-worktree",{detail:this.pullRequest}))}onSwitchBranchClick(e){if(this.isCurrentBranch||this.hasWorktree)return e.preventDefault(),void e.stopImmediatePropagation();this.dispatchEvent(new CustomEvent("switch-branch",{detail:this.pullRequest}))}onSnoozeAction(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("snooze-item",{detail:{item:this.pullRequest,expiresAt:e.detail.expiresAt,snooze:this.snoozed}}))}onPinClick(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("pin-item",{detail:{item:this.pullRequest,pin:this.pinned}}))}};Hr.styles=[Oo,zo,Dr,Pr,Tr,Er,dt``],Ur([lo({type:Number})],Hr.prototype,"rank",2),Ur([lo({type:Object})],Hr.prototype,"pullRequest",2),Ur([lo({type:Boolean})],Hr.prototype,"isCurrentBranch",2),Ur([lo({type:Boolean})],Hr.prototype,"isCurrentWorktree",2),Ur([lo({type:Boolean})],Hr.prototype,"hasWorktree",2),Ur([lo({type:Boolean})],Hr.prototype,"hasLocalBranch",2),Ur([lo()],Hr.prototype,"pinned",2),Ur([lo()],Hr.prototype,"snoozed",2),Hr=Ur([ro("gk-pull-request-row")],Hr);var Wr=Object.defineProperty,jr=Object.getOwnPropertyDescriptor,qr=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?jr(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&Wr(t,o,r),r};let Vr=class extends lit_element_s{constructor(){super(),Ye(Ve,Ie,ze,De,Te,qe,Qe)}get lastUpdatedDate(){return new Date(this.issue.updatedDate)}get dateStyle(){return`indicator-${Or(this.lastUpdatedDate).status}`}get assignees(){const e=this.issue?.assignees;if(null==e)return[];const t=this.issue.author;return null!=t?e.filter((e=>e.avatarUrl!==t.avatarUrl)):e}render(){if(this.issue)return Qt`
			<gk-focus-row>
				<span slot="pin">
					<gk-tooltip>
						<a
							href="#"
							class="icon pin ${this.pinned?" is-active":""}"
							slot="trigger"
							@click="${this.onPinClick}"
							><code-icon icon="pinned"></code-icon
						></a>
						<span>${this.pinned?"Unpin":"Pin"}</span>
					</gk-tooltip>
					<gl-snooze .snoozed=${this.snoozed} @gl-snooze-action=${this.onSnoozeAction}></gl-snooze>
				</span>
				<span slot="date">
					<gk-date-from class="date ${this.dateStyle}" date="${this.lastUpdatedDate}"></gk-date-from>
				</span>
				<span slot="key"></span>
				<gk-focus-item>
					<p>
						<span class="title">${this.issue.title} <a href="${this.issue.url}">#${this.issue.id}</a></span>
						<!-- &nbsp;
						<gk-badge>pending suggestions</gk-badge> -->
					</p>
					<p>
						<gk-badge variant="outline" class="row-type">Issue</gk-badge>
						<gk-tooltip
							><gk-tag variant="ghost" slot="trigger">
								<span slot="prefix"><code-icon icon="comment-discussion"></code-icon></span>
								${this.issue.commentsCount} </gk-tag
							><span>Comments</span></gk-tooltip
						>
						<gk-tooltip
							><gk-tag variant="ghost" slot="trigger">
								<span slot="prefix"><code-icon icon="thumbsup"></code-icon></span>
								${this.issue.thumbsUpCount} </gk-tag
							><span>Thumbs Up</span></gk-tooltip
						>
					</p>
					<span slot="people">
						<gk-avatar-group>
							${To(null!=this.issue.author,(()=>Qt`<gk-avatar
										src="${this.issue.author.avatarUrl}"
										title="${this.issue.author.name} (author)"
									></gk-avatar>`))}
							${To(this.assignees.length>0,(()=>Qt`
									${Eo(this.assignees,(e=>e.url),(e=>Qt`<gk-avatar
												src="${e.avatarUrl}"
												title="${e.name?`${e.name} `:""}(assignee)"
											></gk-avatar>`))}
								`))}
						</gk-avatar-group>
					</span>
					<div slot="repo">
						<gk-tag variant="ghost" full>
							<span slot="prefix"><code-icon icon="repo"></code-icon></span>
							${this.issue.repository?.repo}
						</gk-tag>
					</div>
					<nav slot="actions" class="actions">
						<gk-tooltip>
							<a slot="trigger" href="${this.issue.url}"><code-icon icon="globe"></code-icon></a>
							<span>Open issue on remote</span>
						</gk-tooltip>
					</nav>
				</gk-focus-item>
			</gk-focus-row>
		`}onSnoozeAction(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("snooze-item",{detail:{item:this.issue,expiresAt:e.detail.expiresAt,snooze:this.snoozed}}))}onPinClick(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("pin-item",{detail:{item:this.issue,pin:this.pinned}}))}};Vr.styles=[Oo,zo,Dr,Pr,Tr,Er,dt``],qr([lo({type:Number})],Vr.prototype,"rank",2),qr([lo({type:Object})],Vr.prototype,"issue",2),qr([lo()],Vr.prototype,"pinned",2),qr([lo()],Vr.prototype,"snoozed",2),Vr=qr([ro("gk-issue-row")],Vr);var Gr=Object.defineProperty,Qr=Object.getOwnPropertyDescriptor,Jr=(e,t,o,i)=>{for(var n,r=i>1?void 0:i?Qr(t,o):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(i?n(t,o,r):n(r))||r);return i&&r&&Gr(t,o,r),r};let Yr=class extends lit_element_s{constructor(){super(),this.tabFilters=["prs","issues","snoozed"],this.tabFilterOptions=[{label:"Pull Requests",value:"prs"},{label:"Issues",value:"issues"},{label:"All",value:""},{label:"Snoozed",value:"snoozed"}],this.mineFilters=["authored","assigned","review-requested","mentioned"],this.mineFilterOptions=[{label:"Mine",value:""},{label:"Opened by Me",value:"authored"},{label:"Assigned to Me",value:"assigned"},{label:"Needs my Review",value:"review-requested"},{label:"Mentions Me",value:"mentioned"}],this.selectedTabFilter="prs",Ye(Me,Oe,Ne,Fe,je,Ue,We)}get subscription(){return this.state?.access.subscription?.current}get showSubscriptionGate(){return!1===this.state?.access.allowed}get showFeatureGate(){return!0!==this.state?.access.allowed}get showConnectionGate(){return!0===this.state?.access.allowed&&!this.state?.repos?.some((e=>e.isConnected))}get mineFilterMenuLabel(){return null!=this.selectedMineFilter&&""!==this.selectedMineFilter?this.mineFilterOptions.find((e=>e.value===this.selectedMineFilter))?.label:this.mineFilterOptions[0].label}get items(){if(this.isLoading)return[];const e=[];return this.state?.pullRequests?.forEach((({pullRequest:t,reasons:o,isCurrentBranch:i,isCurrentWorktree:n,hasWorktree:r,hasLocalBranch:a,rank:l,enriched:c})=>{const d=c?.find((e=>"pin"===e.type))?.id,p=c?.find((e=>"snooze"===e.type))?.id;e.push({isPullrequest:!0,state:{pullRequest:t,isCurrentBranch:i,isCurrentWorktree:n,hasWorktree:r,hasLocalBranch:a},rank:l??0,tags:o,isPinned:d,isSnoozed:p})})),this.state?.issues?.forEach((({issue:t,reasons:o,rank:i,enriched:n})=>{const r=n?.find((e=>"pin"===e.type))?.id,a=n?.find((e=>"snooze"===e.type))?.id;e.push({isPullrequest:!1,rank:i??0,state:{issue:t},tags:o,isPinned:r,isSnoozed:a})})),e}get tabFilterOptionsWithCounts(){const e={};return this.tabFilters.forEach((t=>e[t]=0)),this.items.forEach((({isPullrequest:t,isSnoozed:o})=>{const i=o?"snoozed":t?"prs":"issues";null!=e[i]&&e[i]++})),this.tabFilterOptions.map((t=>({...t,count:""===t.value?this.items.length:e[t.value]})))}get filteredItems(){if(0===this.items.length)return this.items;const e=null!=this.searchText&&""!==this.searchText,t=null!=this.selectedMineFilter&&""!==this.selectedMineFilter,o=null!=this.selectedTabFilter&&""!==this.selectedTabFilter;if(!e&&!t&&!o)return this.items.filter((e=>null==e.isSnoozed));const i=this.searchText?.toLowerCase();return this.items.filter((n=>{if(o){if(null!=n.isSnoozed&&"snoozed"!==this.selectedTabFilter||null==n.isSnoozed&&"snoozed"==this.selectedTabFilter||!0===n.isPullrequest&&"issues"===this.selectedTabFilter||!1===n.isPullrequest&&"prs"===this.selectedTabFilter)return!1}else if(null!=n.isSnoozed)return!1;if(t&&!n.tags.includes(this.selectedMineFilter))return!1;if(e){if(n.state.issue&&!n.state.issue.title.toLowerCase().includes(i))return!1;if(n.state.pullRequest&&!n.state.pullRequest.title.toLowerCase().includes(i))return!1}return!0}))}get sortedItems(){return this.filteredItems.sort(((e,t)=>e.isPinned===t.isPinned?0:e.isPinned?-1:1))}get isLoading(){return null==this.state?.pullRequests||null==this.state?.issues}loadingContent(){return Qt`
			<div class="alert">
				<span class="alert__content"><code-icon modifier="spin" icon="loading"></code-icon> Loading</span>
			</div>
		`}focusItemsContent(){return this.isLoading?this.loadingContent():0===this.sortedItems.length?Qt`
				<div class="alert">
					<span class="alert__content">None found</span>
				</div>
			`:Qt`
			${Eo(this.sortedItems,((e,t)=>`item-${t}-${e.isPullrequest?`pr-${e.state.pullRequest.id}`:`issue-${e.state.issue.id}`}`),(({isPullrequest:e,rank:t,state:o,isPinned:i,isSnoozed:n})=>To(e,(()=>Qt`<gk-pull-request-row
								.rank=${t}
								.pullRequest=${o.pullRequest}
								.isCurrentBranch=${o.isCurrentBranch}
								.isCurrentWorktree=${o.isCurrentWorktree}
								.hasWorktree=${o.hasWorktree}
								.hasLocalBranch=${o.hasLocalBranch}
								.pinned=${i}
								.snoozed=${n}
								.enrichedId=${o.enrichedId}
							></gk-pull-request-row>`),(()=>Qt`<gk-issue-row
								.rank=${t}
								.issue=${o.issue}
								.pinned=${i}
								.snoozed=${n}
								.enrichedId=${o.enrichedId}
							></gk-issue-row>`))))}
		`}render(){return null==this.state?this.loadingContent():Qt`
			<div class="app">
				<div class="app__toolbar">
					<span class="preview"> </span>
					<gl-button
						class="feedback"
						appearance="toolbar"
						href="https://github.com/gitkraken/vscode-gitlens/discussions/2535"
						tooltip="Give Us Feedback"
						aria-label="Give Us Feedback"
						><code-icon icon="feedback"></code-icon
					></gl-button>
					<gl-feature-badge
						preview
						featureWithArticleIfNeeded="Launchpad"
						.subscription=${this.subscription}
					></gl-feature-badge>
				</div>

				<div class="app__content">
					<gl-feature-gate
						.state=${this.subscription?.state}
						featureWithArticleIfNeeded="Launchpad"
						.source=${{source:"launchpad",detail:"gate"}}
						.visible=${this.showFeatureGate}
						id="subscription-gate"
						class="scrollable"
						><p slot="feature">
							<a href="https://help.gitkraken.com/gitlens/gitlens-features/#focus-view-%e2%9c%a8"
								>Launchpad</a
							>
							<gl-feature-badge preview .subscription=${this.subscription}></gl-feature-badge>
							&mdash; effortlessly view all of your GitHub pull requests and issues in a unified,
							actionable view.
						</p></gl-feature-gate
					>
					<gl-feature-gate
						id="connection-gate"
						class="scrollable"
						.source=${{source:"launchpad",detail:"gate"}}
						.visible=${this.showConnectionGate}
					>
						<h3>No GitHub remotes are connected</h3>
						<p>
							This enables access to Pull Requests and Issues as well as provide additional information
							inside hovers and the Inspect view, such as auto-linked issues and pull requests and
							avatars.
						</p>
						<gl-button appearance="alert" href="command:gitlens.connectRemoteProvider"
							>Connect to GitHub</gl-button
						>
					</gl-feature-gate>

					<div class="app__focus">
						<header class="app__header">
							<div class="app__header-group">
								<nav class="tab-filter" id="filter-focus-items">
									${go(this.tabFilterOptionsWithCounts,(({label:e,value:t,count:o})=>Qt`
											<button
												class="tab-filter__tab ${(this.selectedTabFilter?t===this.selectedTabFilter:""===t)?"is-active":""}"
												type="button"
												data-tab="${t}"
												@click=${()=>this.selectedTabFilter=t}
											>
												${e} <gk-badge variant="filled">${o}</gk-badge>
											</button>
										`))}
								</nav>
								<gk-popover>
									<gk-button slot="trigger"
										><code-icon icon="list-filter"></code-icon> ${this.mineFilterMenuLabel}
										<code-icon icon="chevron-down"></code-icon
									></gk-button>
									<gk-menu class="mine-menu" @select=${this.onSelectMineFilter}>
										${go(this.mineFilterOptions,(({label:e,value:t},o)=>Qt`
												<gk-menu-item
													data-value="${t}"
													?disabled=${this.selectedMineFilter?t===this.selectedMineFilter:0===o}
													>${e}</gk-menu-item
												>
											`))}
									</gk-menu>
								</gk-popover>
							</div>
							<div class="app__header-group">
								<gk-input
									class="app__search"
									label="Search field"
									label-visibility="sr-only"
									placeholder="Search"
									@input=${f(this.onSearchInput.bind(this),200)}
								>
									<code-icon slot="prefix" icon="search"></code-icon>
								</gk-input>
							</div>
						</header>
						<main class="app__main">
							<gk-focus-container id="list-focus-items">
								<span slot="pin">
									<code-icon icon="pinned"></code-icon>
								</span>
								<span slot="key"><code-icon icon="circle-large-outline"></code-icon></span>
								<span slot="date"><code-icon icon="gl-clock"></code-icon></span>
								<span slot="repo">Repo / Branch</span>
								${this.focusItemsContent()}
							</gk-focus-container>
						</main>
					</div>
				</div>
			</div>
		`}onSearchInput(e){const t=e.target.value;""===t||t.length<3?this.searchText=void 0:this.searchText=t}onSelectMineFilter(e){const t=e.detail?.target;if(null!=t?.dataset?.value){this.selectedMineFilter=t.dataset.value;const e=t.closest("gk-popover");e?.hidePopover()}}createRenderRoot(){return this}};Yr.styles=[Oo],Jr([co()],Yr.prototype,"selectedTabFilter",2),Jr([co()],Yr.prototype,"selectedMineFilter",2),Jr([co()],Yr.prototype,"searchText",2),Jr([lo({type:Object})],Yr.prototype,"state",2),Yr=Jr([ro("gl-focus-app")],Yr);class FocusApp extends App{constructor(){super("FocusApp")}onInitialize(){this.attachState()}onBind(){const e=super.onBind?.()??[];return e.push(W.on("gk-pull-request-row","open-worktree",((e,t)=>this.onOpenWorktree(e,t))),W.on("gk-pull-request-row","open-branch",((e,t)=>this.onOpenBranch(e,t))),W.on("gk-pull-request-row","switch-branch",((e,t)=>this.onSwitchBranch(e,t))),W.on("gk-pull-request-row","snooze-item",((e,t)=>this.onSnoozeItem(e,!1))),W.on("gk-pull-request-row","pin-item",((e,t)=>this.onPinItem(e,!1))),W.on("gk-issue-row","snooze-item",((e,t)=>this.onSnoozeItem(e,!0))),W.on("gk-issue-row","pin-item",((e,t)=>this.onPinItem(e,!0)))),e}get component(){return null==this._component&&(this._component=document.getElementById("app")),this._component}attachState(){this.component.state=this.state}onOpenBranch(e,t){null!=e.detail?.refs?.head&&this.sendCommand(l,{pullRequest:e.detail})}onSwitchBranch(e,t){null!=e.detail?.refs?.head&&this.sendCommand(c,{pullRequest:e.detail})}onOpenWorktree(e,t){null!=e.detail?.refs?.head&&this.sendCommand(a,{pullRequest:e.detail})}onSnoozeItem(e,t){t?this.sendCommand(h,{issue:e.detail.item,expiresAt:e.detail.expiresAt,snooze:e.detail.snooze}):this.sendCommand(d,{pullRequest:e.detail.item,expiresAt:e.detail.expiresAt,snooze:e.detail.snooze})}onPinItem(e,t){t?this.sendCommand(u,{issue:e.detail.item,pin:e.detail.pin}):this.sendCommand(p,{pullRequest:e.detail.item,pin:e.detail.pin})}onMessageReceived(e){if(!0===g.is(e))this.state=e.params.state,this.setState(this.state),this.attachState();else super.onMessageReceived?.(e)}}new FocusApp;var Kr=t.i;export{Kr as FocusApp};