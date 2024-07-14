var e={d:(t,i)=>{for(var o in i)e.o(i,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:i[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};void 0!==e&&Object.defineProperty(e,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}});var t={};e.d(t,{b:()=>HomeApp});class IpcCall{constructor(e,t,i=!1,o=!1){this.scope=e,this.reset=i,this.pack=o,this.method=`${e}/${t}`}is(e){return e.method===this.method}}class IpcCommand extends IpcCall{}class IpcNotification extends IpcCall{}const i=new IpcCommand("core","webview/ready"),o=new IpcCommand("core","webview/focus/changed"),s=new IpcCommand("core","command/execute"),r=(new IpcCommand("core","configuration/update"),new IpcNotification("core","window/focus/didChange"),new IpcCommand("core","webview/focus/didChange"));new IpcNotification("core","configuration/didChange");const a="home",l=new IpcCommand(a,"section/collapse"),c=new IpcNotification(a,"repositories/didChange"),h=new IpcNotification(a,"subscription/didChange"),p=new IpcNotification(a,"org/settings/didChange");function d(e,t,i){let o,s,r,a,l;function c(e){const i=e-(s??0);return null==s||i>=t||i<0}function h(){const e=Date.now();if(c(e))p();else{l=setTimeout(h,t-(e-(s??0)))}}function p(){return l=void 0,o?function(){const t=o,i=r;return o=r=void 0,a=e.apply(i,t),a}():(o=void 0,r=void 0,a)}function d(...e){const p=Date.now(),d=c(p);return o=null!=i&&o?i(o,e):e,r=this,s=p,d&&null==l?(l=setTimeout(h,t),a):(null==l&&(l=setTimeout(h,t)),a)}return d.cancel=function(){null!=l&&clearTimeout(l),o=void 0,s=void 0,r=void 0,l=void 0},d.flush=function(){return null==l?a:(clearTimeout(l),p())},d.pending=function(){return null!=l},d}const u=",",g="=",f="{",m="(",v=")",y=/\(([\s\S]*)\)/,w=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,C=/\s?=.*$/;function x(e){const t=.001*performance.now();let i=Math.floor(t),o=Math.floor(t%1*1e9);return void 0!==e&&(i-=e[0],o-=e[1],o<0&&(i--,o+=1e9)),[i,o]}const _=500;function $(){let e=0;return{get current(){return e},next:function(){return 1073741823===e&&(e=0),++e}}}const S=$(),P=new Map;function A(e){P.delete(e)}function D(e,t){if(null!=t)return{scopeId:t.scopeId,prefix:`${t.prefix}${e}`};const i=S.next();return{scopeId:i,prefix:`[${String(i).padStart(5)}] ${e}`}}Error;function T(e){return null!=e&&(e instanceof Promise||"function"==typeof e?.then)}Error;Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze({codeSuggest:"https://gitkraken.com/solutions/code-suggest?utm_source=gitlens-extension&utm_medium=in-app-links",cloudPatches:"https://gitkraken.com/solutions/cloud-patches?utm_source=gitlens-extension&utm_medium=in-app-links",graph:"https://gitkraken.com/solutions/commit-graph?utm_source=gitlens-extension&utm_medium=in-app-links",launchpad:"https://gitkraken.com/solutions/launchpad?utm_source=gitlens-extension&utm_medium=in-app-links",platform:"https://gitkraken.com/devex?utm_source=gitlens-extension&utm_medium=in-app-links",pricing:"https://gitkraken.com/gitlens/pricing?utm_source=gitlens-extension&utm_medium=in-app-links",proFeatures:"https://gitkraken.com/gitlens/pro-features?utm_source=gitlens-extension&utm_medium=in-app-links",security:"https://help.gitkraken.com/gitlens/security?utm_source=gitlens-extension&utm_medium=in-app-links",workspaces:"https://gitkraken.com/solutions/workspaces?utm_source=gitlens-extension&utm_medium=in-app-links",cli:"https://gitkraken.com/cli?utm_source=gitlens-extension&utm_medium=in-app-links",browserExtension:"https://gitkraken.com/browser-extension?utm_source=gitlens-extension&utm_medium=in-app-links",desktop:"https://gitkraken.com/git-client?utm_source=gitlens-extension&utm_medium=in-app-links",releaseNotes:"https://help.gitkraken.com/gitlens/gitlens-release-notes-current/",releaseAnnouncement:"https://www.gitkraken.com/blog/gitkraken-launches-devex-platform-acquires-codesee?utm_source=gitlens-extension&utm_medium=in-app-links"});var E=(e=>(e[e.Hash=35]="Hash",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Backslash=92]="Backslash",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.Z=90]="Z",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.z=122]="z",e))(E||{}),O=(e=>(e.ActionPrefix="gitlens.action.",e.AddAuthors="gitlens.addAuthors",e.BrowseRepoAtRevision="gitlens.browseRepoAtRevision",e.BrowseRepoAtRevisionInNewWindow="gitlens.browseRepoAtRevisionInNewWindow",e.BrowseRepoBeforeRevision="gitlens.browseRepoBeforeRevision",e.BrowseRepoBeforeRevisionInNewWindow="gitlens.browseRepoBeforeRevisionInNewWindow",e.ClearFileAnnotations="gitlens.clearFileAnnotations",e.CloseUnchangedFiles="gitlens.closeUnchangedFiles",e.CompareWith="gitlens.compareWith",e.CompareHeadWith="gitlens.compareHeadWith",e.CompareWorkingWith="gitlens.compareWorkingWith",e.ComputingFileAnnotations="gitlens.computingFileAnnotations",e.ConnectRemoteProvider="gitlens.connectRemoteProvider",e.CopyCurrentBranch="gitlens.copyCurrentBranch",e.CopyDeepLinkToBranch="gitlens.copyDeepLinkToBranch",e.CopyDeepLinkToCommit="gitlens.copyDeepLinkToCommit",e.CopyDeepLinkToComparison="gitlens.copyDeepLinkToComparison",e.CopyDeepLinkToFile="gitlens.copyDeepLinkToFile",e.CopyDeepLinkToFileAtRevision="gitlens.copyDeepLinkToFileAtRevision",e.CopyDeepLinkToLines="gitlens.copyDeepLinkToLines",e.CopyDeepLinkToRepo="gitlens.copyDeepLinkToRepo",e.CopyDeepLinkToTag="gitlens.copyDeepLinkToTag",e.CopyDeepLinkToWorkspace="gitlens.copyDeepLinkToWorkspace",e.CopyMessageToClipboard="gitlens.copyMessageToClipboard",e.CopyRemoteBranchesUrl="gitlens.copyRemoteBranchesUrl",e.CopyRemoteBranchUrl="gitlens.copyRemoteBranchUrl",e.CopyRemoteCommitUrl="gitlens.copyRemoteCommitUrl",e.CopyRemoteComparisonUrl="gitlens.copyRemoteComparisonUrl",e.CopyRemoteFileUrl="gitlens.copyRemoteFileUrlToClipboard",e.CopyRemoteFileUrlWithoutRange="gitlens.copyRemoteFileUrlWithoutRange",e.CopyRemoteFileUrlFrom="gitlens.copyRemoteFileUrlFrom",e.CopyRemotePullRequestUrl="gitlens.copyRemotePullRequestUrl",e.CopyRemoteRepositoryUrl="gitlens.copyRemoteRepositoryUrl",e.CopyShaToClipboard="gitlens.copyShaToClipboard",e.CopyRelativePathToClipboard="gitlens.copyRelativePathToClipboard",e.ApplyPatchFromClipboard="gitlens.applyPatchFromClipboard",e.CopyPatchToClipboard="gitlens.copyPatchToClipboard",e.CopyWorkingChangesToWorktree="gitlens.copyWorkingChangesToWorktree",e.CreatePatch="gitlens.createPatch",e.CreateCloudPatch="gitlens.createCloudPatch",e.CreatePullRequestOnRemote="gitlens.createPullRequestOnRemote",e.DiffDirectory="gitlens.diffDirectory",e.DiffDirectoryWithHead="gitlens.diffDirectoryWithHead",e.DiffFolderWithRevision="gitlens.diffFolderWithRevision",e.DiffFolderWithRevisionFrom="gitlens.diffFolderWithRevisionFrom",e.DiffWith="gitlens.diffWith",e.DiffWithNext="gitlens.diffWithNext",e.DiffWithNextInDiffLeft="gitlens.diffWithNextInDiffLeft",e.DiffWithNextInDiffRight="gitlens.diffWithNextInDiffRight",e.DiffWithPrevious="gitlens.diffWithPrevious",e.DiffWithPreviousInDiffLeft="gitlens.diffWithPreviousInDiffLeft",e.DiffWithPreviousInDiffRight="gitlens.diffWithPreviousInDiffRight",e.DiffLineWithPrevious="gitlens.diffLineWithPrevious",e.DiffWithRevision="gitlens.diffWithRevision",e.DiffWithRevisionFrom="gitlens.diffWithRevisionFrom",e.DiffWithWorking="gitlens.diffWithWorking",e.DiffWithWorkingInDiffLeft="gitlens.diffWithWorkingInDiffLeft",e.DiffWithWorkingInDiffRight="gitlens.diffWithWorkingInDiffRight",e.DiffLineWithWorking="gitlens.diffLineWithWorking",e.DisconnectRemoteProvider="gitlens.disconnectRemoteProvider",e.DisableDebugLogging="gitlens.disableDebugLogging",e.EnableDebugLogging="gitlens.enableDebugLogging",e.DisableRebaseEditor="gitlens.disableRebaseEditor",e.EnableRebaseEditor="gitlens.enableRebaseEditor",e.ExternalDiff="gitlens.externalDiff",e.ExternalDiffAll="gitlens.externalDiffAll",e.FetchRepositories="gitlens.fetchRepositories",e.GenerateCommitMessage="gitlens.generateCommitMessage",e.GetStarted="gitlens.getStarted",e.GKSwitchOrganization="gitlens.gk.switchOrganization",e.InviteToLiveShare="gitlens.inviteToLiveShare",e.OpenBlamePriorToChange="gitlens.openBlamePriorToChange",e.OpenBranchesOnRemote="gitlens.openBranchesOnRemote",e.OpenBranchOnRemote="gitlens.openBranchOnRemote",e.OpenCurrentBranchOnRemote="gitlens.openCurrentBranchOnRemote",e.OpenChangedFiles="gitlens.openChangedFiles",e.OpenCommitOnRemote="gitlens.openCommitOnRemote",e.OpenComparisonOnRemote="gitlens.openComparisonOnRemote",e.OpenFileHistory="gitlens.openFileHistory",e.OpenFileFromRemote="gitlens.openFileFromRemote",e.OpenFileOnRemote="gitlens.openFileOnRemote",e.OpenFileOnRemoteFrom="gitlens.openFileOnRemoteFrom",e.OpenFileAtRevision="gitlens.openFileRevision",e.OpenFileAtRevisionFrom="gitlens.openFileRevisionFrom",e.OpenFolderHistory="gitlens.openFolderHistory",e.OpenOnRemote="gitlens.openOnRemote",e.OpenCloudPatch="gitlens.openCloudPatch",e.OpenPatch="gitlens.openPatch",e.OpenPullRequestOnRemote="gitlens.openPullRequestOnRemote",e.OpenAssociatedPullRequestOnRemote="gitlens.openAssociatedPullRequestOnRemote",e.OpenRepoOnRemote="gitlens.openRepoOnRemote",e.OpenRevisionFile="gitlens.openRevisionFile",e.OpenRevisionFileInDiffLeft="gitlens.openRevisionFileInDiffLeft",e.OpenRevisionFileInDiffRight="gitlens.openRevisionFileInDiffRight",e.OpenWalkthrough="gitlens.openWalkthrough",e.OpenWorkingFile="gitlens.openWorkingFile",e.OpenWorkingFileInDiffLeft="gitlens.openWorkingFileInDiffLeft",e.OpenWorkingFileInDiffRight="gitlens.openWorkingFileInDiffRight",e.PullRepositories="gitlens.pullRepositories",e.PushRepositories="gitlens.pushRepositories",e.GitCommands="gitlens.gitCommands",e.GitCommandsBranch="gitlens.gitCommands.branch",e.GitCommandsBranchCreate="gitlens.gitCommands.branch.create",e.GitCommandsBranchDelete="gitlens.gitCommands.branch.delete",e.GitCommandsBranchPrune="gitlens.gitCommands.branch.prune",e.GitCommandsBranchRename="gitlens.gitCommands.branch.rename",e.GitCommandsCheckout="gitlens.gitCommands.checkout",e.GitCommandsCherryPick="gitlens.gitCommands.cherryPick",e.GitCommandsHistory="gitlens.gitCommands.history",e.GitCommandsMerge="gitlens.gitCommands.merge",e.GitCommandsRebase="gitlens.gitCommands.rebase",e.GitCommandsRemote="gitlens.gitCommands.remote",e.GitCommandsRemoteAdd="gitlens.gitCommands.remote.add",e.GitCommandsRemotePrune="gitlens.gitCommands.remote.prune",e.GitCommandsRemoteRemove="gitlens.gitCommands.remote.remove",e.GitCommandsReset="gitlens.gitCommands.reset",e.GitCommandsRevert="gitlens.gitCommands.revert",e.GitCommandsShow="gitlens.gitCommands.show",e.GitCommandsStash="gitlens.gitCommands.stash",e.GitCommandsStashDrop="gitlens.gitCommands.stash.drop",e.GitCommandsStashList="gitlens.gitCommands.stash.list",e.GitCommandsStashPop="gitlens.gitCommands.stash.pop",e.GitCommandsStashPush="gitlens.gitCommands.stash.push",e.GitCommandsStashRename="gitlens.gitCommands.stash.rename",e.GitCommandsStatus="gitlens.gitCommands.status",e.GitCommandsSwitch="gitlens.gitCommands.switch",e.GitCommandsTag="gitlens.gitCommands.tag",e.GitCommandsTagCreate="gitlens.gitCommands.tag.create",e.GitCommandsTagDelete="gitlens.gitCommands.tag.delete",e.GitCommandsWorktree="gitlens.gitCommands.worktree",e.GitCommandsWorktreeCreate="gitlens.gitCommands.worktree.create",e.GitCommandsWorktreeDelete="gitlens.gitCommands.worktree.delete",e.GitCommandsWorktreeOpen="gitlens.gitCommands.worktree.open",e.OpenOrCreateWorktreeForGHPR="gitlens.ghpr.views.openOrCreateWorktree",e.PlusHide="gitlens.plus.hide",e.PlusLogin="gitlens.plus.login",e.PlusLogout="gitlens.plus.logout",e.PlusManage="gitlens.plus.manage",e.PlusManageCloudIntegrations="gitlens.plus.cloudIntegrations.manage",e.PlusReactivateProTrial="gitlens.plus.reactivateProTrial",e.PlusResendVerification="gitlens.plus.resendVerification",e.PlusRestore="gitlens.plus.restore",e.PlusShowPlans="gitlens.plus.showPlans",e.PlusSignUp="gitlens.plus.signUp",e.PlusStartPreviewTrial="gitlens.plus.startPreviewTrial",e.PlusUpgrade="gitlens.plus.upgrade",e.PlusValidate="gitlens.plus.validate",e.QuickOpenFileHistory="gitlens.quickOpenFileHistory",e.RefreshLaunchpad="gitlens.launchpad.refresh",e.RefreshGraph="gitlens.graph.refresh",e.RefreshHover="gitlens.refreshHover",e.Reset="gitlens.reset",e.ResetAIKey="gitlens.resetAIKey",e.ResetViewsLayout="gitlens.resetViewsLayout",e.RevealCommitInView="gitlens.revealCommitInView",e.ShareAsCloudPatch="gitlens.shareAsCloudPatch",e.SearchCommits="gitlens.showCommitSearch",e.SearchCommitsInView="gitlens.views.searchAndCompare.searchCommits",e.ShowBranchesView="gitlens.showBranchesView",e.ShowCommitDetailsView="gitlens.showCommitDetailsView",e.ShowCommitInView="gitlens.showCommitInView",e.ShowCommitsInView="gitlens.showCommitsInView",e.ShowCommitsView="gitlens.showCommitsView",e.ShowContributorsView="gitlens.showContributorsView",e.ShowDraftsView="gitlens.showDraftsView",e.ShowFileHistoryView="gitlens.showFileHistoryView",e.ShowFocusPage="gitlens.showFocusPage",e.ShowGraph="gitlens.showGraph",e.ShowGraphPage="gitlens.showGraphPage",e.ShowGraphView="gitlens.showGraphView",e.ShowHomeView="gitlens.showHomeView",e.ShowAccountView="gitlens.showAccountView",e.ShowInCommitGraph="gitlens.showInCommitGraph",e.ShowInCommitGraphView="gitlens.showInCommitGraphView",e.ShowInDetailsView="gitlens.showInDetailsView",e.ShowInTimeline="gitlens.showInTimeline",e.ShowLastQuickPick="gitlens.showLastQuickPick",e.ShowLaunchpad="gitlens.showLaunchpad",e.ShowLineCommitInView="gitlens.showLineCommitInView",e.ShowLineHistoryView="gitlens.showLineHistoryView",e.OpenOnlyChangedFiles="gitlens.openOnlyChangedFiles",e.ShowPatchDetailsPage="gitlens.showPatchDetailsPage",e.ShowQuickBranchHistory="gitlens.showQuickBranchHistory",e.ShowQuickCommit="gitlens.showQuickCommitDetails",e.ShowQuickCommitFile="gitlens.showQuickCommitFileDetails",e.ShowQuickCurrentBranchHistory="gitlens.showQuickRepoHistory",e.ShowQuickFileHistory="gitlens.showQuickFileHistory",e.ShowQuickRepoStatus="gitlens.showQuickRepoStatus",e.ShowQuickCommitRevision="gitlens.showQuickRevisionDetails",e.ShowQuickCommitRevisionInDiffLeft="gitlens.showQuickRevisionDetailsInDiffLeft",e.ShowQuickCommitRevisionInDiffRight="gitlens.showQuickRevisionDetailsInDiffRight",e.ShowQuickStashList="gitlens.showQuickStashList",e.ShowRemotesView="gitlens.showRemotesView",e.ShowRepositoriesView="gitlens.showRepositoriesView",e.ShowSearchAndCompareView="gitlens.showSearchAndCompareView",e.ShowSettingsPage="gitlens.showSettingsPage",e.ShowSettingsPageAndJumpToFileAnnotations="gitlens.showSettingsPage!file-annotations",e.ShowSettingsPageAndJumpToBranchesView="gitlens.showSettingsPage!branches-view",e.ShowSettingsPageAndJumpToCommitsView="gitlens.showSettingsPage!commits-view",e.ShowSettingsPageAndJumpToContributorsView="gitlens.showSettingsPage!contributors-view",e.ShowSettingsPageAndJumpToFileHistoryView="gitlens.showSettingsPage!file-history-view",e.ShowSettingsPageAndJumpToLineHistoryView="gitlens.showSettingsPage!line-history-view",e.ShowSettingsPageAndJumpToRemotesView="gitlens.showSettingsPage!remotes-view",e.ShowSettingsPageAndJumpToRepositoriesView="gitlens.showSettingsPage!repositories-view",e.ShowSettingsPageAndJumpToSearchAndCompareView="gitlens.showSettingsPage!search-compare-view",e.ShowSettingsPageAndJumpToStashesView="gitlens.showSettingsPage!stashes-view",e.ShowSettingsPageAndJumpToTagsView="gitlens.showSettingsPage!tags-view",e.ShowSettingsPageAndJumpToWorkTreesView="gitlens.showSettingsPage!worktrees-view",e.ShowSettingsPageAndJumpToViews="gitlens.showSettingsPage!views",e.ShowSettingsPageAndJumpToCommitGraph="gitlens.showSettingsPage!commit-graph",e.ShowSettingsPageAndJumpToAutolinks="gitlens.showSettingsPage!autolinks",e.ShowStashesView="gitlens.showStashesView",e.ShowTagsView="gitlens.showTagsView",e.ShowTimelinePage="gitlens.showTimelinePage",e.ShowTimelineView="gitlens.showTimelineView",e.ShowWelcomePage="gitlens.showWelcomePage",e.ShowWorktreesView="gitlens.showWorktreesView",e.ShowWorkspacesView="gitlens.showWorkspacesView",e.StashApply="gitlens.stashApply",e.StashSave="gitlens.stashSave",e.StashSaveFiles="gitlens.stashSaveFiles",e.SwitchAIModel="gitlens.switchAIModel",e.SwitchMode="gitlens.switchMode",e.ToggleCodeLens="gitlens.toggleCodeLens",e.ToggleFileBlame="gitlens.toggleFileBlame",e.ToggleFileBlameInDiffLeft="gitlens.toggleFileBlameInDiffLeft",e.ToggleFileBlameInDiffRight="gitlens.toggleFileBlameInDiffRight",e.ToggleFileChanges="gitlens.toggleFileChanges",e.ToggleFileChangesOnly="gitlens.toggleFileChangesOnly",e.ToggleFileHeatmap="gitlens.toggleFileHeatmap",e.ToggleFileHeatmapInDiffLeft="gitlens.toggleFileHeatmapInDiffLeft",e.ToggleFileHeatmapInDiffRight="gitlens.toggleFileHeatmapInDiffRight",e.ToggleLaunchpadIndicator="gitlens.launchpad.indicator.toggle",e.ToggleGraph="gitlens.toggleGraph",e.ToggleMaximizedGraph="gitlens.toggleMaximizedGraph",e.ToggleLineBlame="gitlens.toggleLineBlame",e.ToggleReviewMode="gitlens.toggleReviewMode",e.ToggleZenMode="gitlens.toggleZenMode",e.ViewsCopy="gitlens.views.copy",e.ViewsCopyAsMarkdown="gitlens.views.copyAsMarkdown",e.ViewsCopyUrl="gitlens.views.copyUrl",e.ViewsOpenDirectoryDiff="gitlens.views.openDirectoryDiff",e.ViewsOpenDirectoryDiffWithWorking="gitlens.views.openDirectoryDiffWithWorking",e.ViewsOpenUrl="gitlens.views.openUrl",e.Deprecated_DiffHeadWith="gitlens.diffHeadWith",e.Deprecated_DiffWorkingWith="gitlens.diffWorkingWith",e.Deprecated_OpenBranchesInRemote="gitlens.openBranchesInRemote",e.Deprecated_OpenBranchInRemote="gitlens.openBranchInRemote",e.Deprecated_OpenCommitInRemote="gitlens.openCommitInRemote",e.Deprecated_OpenFileInRemote="gitlens.openFileInRemote",e.Deprecated_OpenInRemote="gitlens.openInRemote",e.Deprecated_OpenRepoInRemote="gitlens.openRepoInRemote",e.Deprecated_ShowFileHistoryInView="gitlens.showFileHistoryInView",e))(O||{});const{fromCharCode:F}=String;new TextEncoder;function B(e){const[t,i]=x(e);return 1e3*t+Math.floor(i/1e6)}function z(e,t,i){if(null==i)return`${t} ${e}${1===t?"":"s"}`;const o=1===t?e:i.plural??`${e}s`;return i.only?o:`${0===t?i.zero??t:i.format?.(t)??t}${i.infix??" "}${o}`}const U=Symbol("logInstanceNameFn");function W(e){return function(e,t=!1){let i,o,s,r,a,l=0,c=!1,h=!1,p=!0;null!=e&&({args:i,if:o,enter:s,exit:r,prefix:a,logThreshold:l=0,scoped:c=!0,singleLine:h=!1,timed:p=!0}=e);l>0&&(h=!0,p=!0);p&&(c=!0);const d=N.isDebugging,$=t?N.debug:N.log,D=d?"debug":"info";return(e,t,E)=>{let O,F;if("function"==typeof E.value?(O=E.value,F="value"):"function"==typeof E.get&&(O=E.get,F="get"),null==O||null==F)throw new Error("Not supported");const z=!1!==i?function(e){if("function"!=typeof e)throw new Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e);t=t.replace(w,"")||t,t=t.slice(0,t.indexOf(f));let i=t.indexOf(m),o=t.indexOf(v);i=i>=0?i+1:0,o=o>0?o:t.indexOf(g),t=t.slice(i,o),t=`(${t})`;const s=y.exec(t);return null!=s?s[1].split(u).map((e=>e.trim().replace(C,""))):[]}(O):[];E[F]=function(...e){if(!d&&!N.enabled(D)||null!=o&&!o.apply(this,e))return O.apply(this,e);const u=S.next(),g=null!=this?function(e){let t;if("function"==typeof e){if(null==e.prototype?.constructor)return e.name;t=e.prototype.constructor}else t=e.constructor;let i=t?.name??"";const o=i.indexOf("_");i=-1===o?i:i.substr(o+1),null!=t?.[U]&&(i=t[U](e,i));return i}(this):void 0;let f,m=g?c?`[${u.toString(16).padStart(5)}] ${g}.${t}`:`${g}.${t}`:t;null!=a&&(m=a({id:u,instance:this,instanceName:g??"",name:t,prefix:m},...e)),c&&(f={scopeId:u,prefix:m},function(e,t){P.set(e,t)}(u,f));const v=null!=s?s(...e):"";let y;if(!1===i||0===e.length)y="",h||$.call(N,`${m}${v}`);else{let t;y="";let o,s,r,a=-1;for(r of e){if(o=z[++a],t=i?.[a],null!=t){if("boolean"==typeof t)continue;if(y.length>0&&(y+=", "),"string"==typeof t){y+=t;continue}s=String(t(r))}else y.length>0&&(y+=", "),s=N.toLoggable(r);y+=o?`${o}=${s}`:s}h||$.call(N,y?`${m}${v}(${y})`:`${m}${v}`)}if(h||p||null!=r){const t=p?x():void 0,i=e=>{const i=void 0!==t?` [${B(t)}ms]`:"";h?N.error(e,y?`${m}${v}(${y})`:`${m}${v}`,f?.exitDetails?`failed${f.exitDetails}${i}`:`failed${i}`):N.error(e,m,f?.exitDetails?`failed${f.exitDetails}${i}`:`failed${i}`),c&&A(u)};let o;try{o=O.apply(this,e)}catch(e){throw i(e),e}const s=e=>{let i,o,s,a;if(null!=t?(i=B(t),i>_?(o=N.warn,s=` [*${i}ms] (slow)`):(o=$,s=` [${i}ms]`)):(s="",o=$),null!=r)if("function"==typeof r)try{a=r(e)}catch(e){a=`@log.exit error: ${e}`}else!0===r&&(a=`returned ${N.toLoggable(e)}`);else f?.exitFailed?(a=f.exitFailed,o=N.error):a="completed";h?(0===l||i>l)&&o.call(N,y?`${m}${v}(${y}) ${a}${f?.exitDetails||""}${s}`:`${m}${v} ${a}${f?.exitDetails||""}${s}`):o.call(N,y?`${m}(${y}) ${a}${f?.exitDetails||""}${s}`:`${m} ${a}${f?.exitDetails||""}${s}`),c&&A(u)};return null!=o&&T(o)?o.then(s,i):s(o),o}return O.apply(this,e)}}}(e,!0)}const N=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,i=!1){this.provider=e,this._isDebugging=i,this.logLevel=t}enabled(e){return this.level>=G(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=G(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){if(this.level<4&&!this.isDebugging)return;let i;"string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!0,t)}`)}error(e,t,...i){if(this.level<1&&!this.isDebugging)return;let o;if(o=null==t||"string"==typeof t?t:`${t.prefix} ${i.shift()??""}`,null==o){const t=e instanceof Error?e.stack:void 0;if(t){const e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(o=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,i)}${null!=e?`\n${String(e)}`:""}`)}log(e,...t){if(this.level<3&&!this.isDebugging)return;let i;"string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!1,t)}`)}warn(e,...t){if(this.level<2&&!this.isDebugging)return;let i;"string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!1,t)}`)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map((e=>this.toLoggable(e,t))).join(", ")}]`;const i=this.provider.toLoggable?.(e);if(null!=i)return i;try{return JSON.stringify(e,t)}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";const i=t.map((e=>this.toLoggable(e))).join(", ");return 0!==i.length?` — ${i}`:""}};function G(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}const j={enabled:e=>N.enabled(e)||N.isDebugging,log:(e,t,i,...o)=>{switch(e){case"error":N.error("",t,i,...o);break;case"warn":N.warn(t,i,...o);break;case"info":N.log(t,i,...o);break;default:N.debug(t,i,...o)}}};var q;function Q(e){return(e=e.toString().toLowerCase()).includes("ms")?parseFloat(e):e.includes("s")?1e3*parseFloat(e):parseFloat(e)}function K(e,t){return new Promise((i=>{e.addEventListener(t,(function o(s){s.target===e&&(e.removeEventListener(t,o),i())}))}))}(q||(q={})).on=function(e,t,i,o){let s=!1;if("string"==typeof e){const r=function(t){const o=t?.target?.closest(e);null!=o&&i(t,o)};return document.addEventListener(t,r,o??!0),{dispose:()=>{s||(s=!0,document.removeEventListener(t,r,o??!0))}}}const r=function(e){i(e,this)};return e.addEventListener(t,r,o??!1),{dispose:()=>{s||(s=!0,e.removeEventListener(t,r,o??!1))}}},Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");class Stopwatch{constructor(e,t,...i){let o;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:D(e??""),o="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??j,this._time=x(),null!=o){if(!this.logProvider.enabled(this.logLevel))return;i.length?this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`,...i):this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){const[e,t]=x(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=x(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);const[i,o]=x(this._time),s=1e3*i+Math.floor(o/1e6),r=e?.message??"";this.logProvider.log(s>250?"warn":this.logLevel,this.logScope,`${r?`${r} `:""}[${s}ms]${e?.suffix??""}`)}}const J=class _Emitter{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(e,t,i)=>{null==this.listeners&&(this.listeners=new LinkedList);const o=this.listeners.push(null==t?e:[e,t]),s={dispose:()=>{s.dispose=_Emitter._noop,this._disposed||o()}};return Array.isArray(i)&&i.push(s),s}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),i=t.next();!i.done;i=t.next())this._deliveryQueue.push([i.value,e]);for(;this._deliveryQueue.size>0;){const[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};J._noop=function(){};let Y=J;const Z={done:!0,value:void 0},X=class _Node{constructor(e){this.element=e,this.next=_Node.Undefined,this.prev=_Node.Undefined}};X.Undefined=new X(void 0);let ee=X;class LinkedList{constructor(){this._first=ee.Undefined,this._last=ee.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===ee.Undefined}clear(){this._first=ee.Undefined,this._last=ee.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){const i=new ee(e);if(this._first===ee.Undefined)this._first=i,this._last=i;else if(t){const e=this._last;this._last=i,i.prev=e,e.next=i}else{const e=this._first;this._first=i,i.next=e,e.prev=i}this._size+=1;let o=!1;return()=>{o||(o=!0,this._remove(i))}}shift(){if(this._first===ee.Undefined)return;const e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===ee.Undefined)return;const e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==ee.Undefined&&e.next!==ee.Undefined){const t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===ee.Undefined&&e.next===ee.Undefined?(this._first=ee.Undefined,this._last=ee.Undefined):e.next===ee.Undefined?(this._last=this._last.prev,this._last.next=ee.Undefined):e.prev===ee.Undefined&&(this._first=this._first.next,this._first.prev=ee.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===ee.Undefined?Z:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){const e=[];for(let t=this._first;t!==ee.Undefined;t=t.next)e.push(t.element);return e}}var te=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,oe=(e,t,i,o)=>{for(var s,r=o>1?void 0:o?ie(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&te(t,i,r),r};let ne;function se(){return ne??=acquireVsCodeApi()}const re=$();function ae(){return`webview:${re.next()}`}let le=class{constructor(e){this.appName=e,this._onReceiveMessage=new Y,this._pendingHandlers=new Map,this._api=se(),this._disposable=q.on(window,"message",(e=>this.onMessageReceived(e)))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){const t=P.get(S.current),i=e.data;if(i.packed&&i.params instanceof Uint8Array){const o=function(e,t,...i){return(t?.provider??j).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...i):void 0}(D(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});this._textDecoder??=new TextDecoder,i.params=JSON.parse(this._textDecoder.decode(i.params)),o?.stop()}if(null==i.completionId)this._onReceiveMessage.fire(i);else{const e=he(i.method,i.completionId);this._pendingHandlers.get(e)?.(i)}}sendCommand(e,t){const i=ae();this.postMessage({id:i,scope:e.scope,method:e.method,params:t})}async sendRequest(e,t){const i=ae(),o=new Promise(((t,o)=>{const s=he(e.response.method,i);let r;function a(){clearTimeout(r),r=void 0,this._pendingHandlers.delete(s)}r=setTimeout((()=>{a.call(this),o(new Error(`Timed out waiting for completion of ${s}`))}),6e4),this._pendingHandlers.set(s,(e=>{a.call(this),queueMicrotask((()=>t(e.params)))}))}));return this.postMessage({id:i,scope:e.scope,method:e.method,params:t,completionId:i}),o}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}};var ce;function he(e,t){return`${e}|${t}`}oe([W({args:{0:e=>`${e.data.id}, method=${e.data.method}`}})],le.prototype,"onMessageReceived",1),oe([W({args:{0:e=>e.method,1:!1}})],le.prototype,"sendCommand",1),oe([W({args:{0:e=>e.method,1:!1,2:!1}})],le.prototype,"sendRequest",1),oe([W({args:{0:e=>`${e.id}, method=${e.method}`}})],le.prototype,"postMessage",1),le=oe([(ce=(e,t)=>`${e.appName}(${t})`,e=>{e[U]=ce})],le);function pe(e,t){const i=Math.pow(10,t);return Math.round(e*i)/i}class RGBA{constructor(e,t,i,o=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,i)),this.a=pe(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}}class HSLA{constructor(e,t,i,o){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=pe(Math.max(Math.min(1,t),0),3),this.l=pe(Math.max(Math.min(1,i),0),3),this.a=pe(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){const t=e.r/255,i=e.g/255,o=e.b/255,s=e.a,r=Math.max(t,i,o),a=Math.min(t,i,o);let l=0,c=0;const h=(a+r)/2,p=r-a;if(p>0){switch(c=Math.min(h<=.5?p/(2*h):p/(2-2*h),1),r){case t:l=(i-o)/p+(i<o?6:0);break;case i:l=(o-t)/p+2;break;case o:l=(t-i)/p+4}l*=60,l=Math.round(l)}return new HSLA(l,c,h,s)}static _hue2rgb(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+6*(t-e)*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e}static toRGBA(e){const t=e.h/360,{s:i,l:o,a:s}=e;let r,a,l;if(0===i)r=a=l=o;else{const e=o<.5?o*(1+i):o+i-o*i,s=2*o-e;r=HSLA._hue2rgb(s,e,t+1/3),a=HSLA._hue2rgb(s,e,t),l=HSLA._hue2rgb(s,e,t-1/3)}return new RGBA(Math.round(255*r),Math.round(255*a),Math.round(255*l),s)}}class HSVA{constructor(e,t,i,o){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=pe(Math.max(Math.min(1,t),0),3),this.v=pe(Math.max(Math.min(1,i),0),3),this.a=pe(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){const t=e.r/255,i=e.g/255,o=e.b/255,s=Math.max(t,i,o),r=s-Math.min(t,i,o),a=0===s?0:r/s;let l;return l=0===r?0:s===t?((i-o)/r%6+6)%6:s===i?(o-t)/r+2:(t-i)/r+4,new HSVA(Math.round(60*l),a,s,e.a)}static toRGBA(e){const{h:t,s:i,v:o,a:s}=e,r=o*i,a=r*(1-Math.abs(t/60%2-1)),l=o-r;let[c,h,p]=[0,0,0];return t<60?(c=r,h=a):t<120?(c=a,h=r):t<180?(h=r,p=a):t<240?(h=a,p=r):t<300?(c=a,p=r):t<=360&&(c=r,p=a),c=Math.round(255*(c+l)),h=Math.round(255*(h+l)),p=Math.round(255*(p+l)),new RGBA(c,h,p,s)}}function de(e,t){return t.getPropertyValue(e).trim()}const ue=class _Color{static from(e){return e instanceof _Color?e:ye(e)||_Color.red}static fromCssVariable(e,t){return ye(de(e,t))||_Color.red}static fromHex(e){return we(e)||_Color.red}static equals(e,t){return!e&&!t||!(!e||!t)&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(!e)throw new Error("Color needs a value");if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else{if(!(e instanceof HSVA))throw new Error("Invalid color ctor argument");this._hsva=e,this.rgba=HSVA.toRGBA(e)}}equals(e){return null!=e&&(Boolean(e)&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva))}getRelativeLuminance(){return pe(.2126*_Color._relativeLuminanceForComponent(this.rgba.r)+.7152*_Color._relativeLuminanceForComponent(this.rgba.g)+.0722*_Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new ge(new RGBA(0,0,0,e.rgba.a));if(1===t)return new ge(new RGBA(255,255,255,e.rgba.a));const i=e.getRelativeLuminance();let o=20;const s=(e,i)=>{const r=e.mix(i,.5),a=r.getRelativeLuminance();return Math.abs(t-a)<1e-7||!o--?r:a>t?s(e,r):s(r,i)},r=(i>t?s(ge.black,e):s(e,ge.white)).rgba;return new ge(new RGBA(r.r,r.g,r.b,e.rgba.a))}(this,e)}getContrastRatio(e){const t=this.getRelativeLuminance(),i=e.getRelativeLuminance();return t>i?(t+.05)/(i+.05):(i+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){const{r:t,g:i,b:o,a:s}=this.rgba;return new _Color(new RGBA(t,i,o,s*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new _Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){const t=e.rgba,i=this.rgba.a,o=t.a,s=i+o*(1-i);if(s<1e-6)return _Color.transparent;const r=this.rgba.r*i/s+t.r*o*(1-i)/s,a=this.rgba.g*i/s+t.g*o*(1-i)/s,l=this.rgba.b*i/s+t.b*o*(1-i)/s;return new _Color(new RGBA(r,a,l,s))}mix(e,t){return function(e,t,i){const o=e.rgba,s=t.rgba;return new ge(new RGBA(o.r+i*(s.r-o.r),o.g+i*(s.g-o.g),o.b+i*(s.b-o.b),o.a+i*(s.a-o.a)))}(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;const{r:t,g:i,b:o,a:s}=this.rgba;return new _Color(new RGBA(e.rgba.r-s*(e.rgba.r-t),e.rgba.g-s*(e.rgba.g-i),e.rgba.b-s*(e.rgba.b-o),1))}flatten(...e){const t=e.reduceRight(((e,t)=>_Color._flatten(t,e)));return _Color._flatten(this,t)}static _flatten(e,t){const i=1-e.rgba.a;return new _Color(new RGBA(i*t.rgba.r+e.rgba.a*e.rgba.r,i*t.rgba.g+e.rgba.a*e.rgba.g,i*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){if(e.isOpaque())return be(e);return fe(e)}(this)),this._toString}static getLighterColor(e,t,i){if(e.isLighterThan(t))return e;i=i||.5;const o=e.getRelativeLuminance(),s=t.getRelativeLuminance();return i=i*(s-o)/s,e.lighten(i)}static getDarkerColor(e,t,i){if(e.isDarkerThan(t))return e;i=i||.5;const o=e.getRelativeLuminance();return i=i*(o-t.getRelativeLuminance())/o,e.darken(i)}};ue.white=new ue(new RGBA(255,255,255,1)),ue.black=new ue(new RGBA(0,0,0,1)),ue.red=new ue(new RGBA(255,0,0,1)),ue.blue=new ue(new RGBA(0,0,255,1)),ue.green=new ue(new RGBA(0,255,0,1)),ue.cyan=new ue(new RGBA(0,255,255,1)),ue.lightgrey=new ue(new RGBA(211,211,211,1)),ue.transparent=new ue(new RGBA(0,0,0,0));let ge=ue;function fe(e){return`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}function me(e){const t=e.toString(16);return 2!==t.length?`0${t}`:t}function be(e){return`#${me(e.rgba.r)}${me(e.rgba.g)}${me(e.rgba.b)}`}const ve=/^((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function ye(e){if(0===(e=e.trim()).length)return null;if(e.charCodeAt(0)===E.Hash)return we(e);const t=ve.exec(e);if(null==t)return null;const i=t[1];let o;switch(i){case"rgb":case"hsl":o=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),1];break;case"rgba":case"hsla":o=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),parseFloat(t[5])];break;default:return null}switch(i){case"rgb":case"rgba":return new ge(new RGBA(o[0],o[1],o[2],o[3]));case"hsl":case"hsla":return new ge(new HSLA(o[0],o[1],o[2],o[3]))}return ge.red}function we(e){const t=(e=e.trim()).length;if(0===t)return null;if(e.charCodeAt(0)!==E.Hash)return null;switch(t){case 7:{const t=16*Ce(e.charCodeAt(1))+Ce(e.charCodeAt(2)),i=16*Ce(e.charCodeAt(3))+Ce(e.charCodeAt(4)),o=16*Ce(e.charCodeAt(5))+Ce(e.charCodeAt(6));return new ge(new RGBA(t,i,o,1))}case 9:{const t=16*Ce(e.charCodeAt(1))+Ce(e.charCodeAt(2)),i=16*Ce(e.charCodeAt(3))+Ce(e.charCodeAt(4)),o=16*Ce(e.charCodeAt(5))+Ce(e.charCodeAt(6)),s=16*Ce(e.charCodeAt(7))+Ce(e.charCodeAt(8));return new ge(new RGBA(t,i,o,s/255))}case 4:{const t=Ce(e.charCodeAt(1)),i=Ce(e.charCodeAt(2)),o=Ce(e.charCodeAt(3));return new ge(new RGBA(16*t+t,16*i+i,16*o+o))}case 5:{const t=Ce(e.charCodeAt(1)),i=Ce(e.charCodeAt(2)),o=Ce(e.charCodeAt(3)),s=Ce(e.charCodeAt(4));return new ge(new RGBA(16*t+t,16*i+i,16*o+o,(16*s+s)/255))}default:return null}}function Ce(e){switch(e){case E.Digit0:return 0;case E.Digit1:return 1;case E.Digit2:return 2;case E.Digit3:return 3;case E.Digit4:return 4;case E.Digit5:return 5;case E.Digit6:return 6;case E.Digit7:return 7;case E.Digit8:return 8;case E.Digit9:return 9;case E.a:case E.A:return 10;case E.b:case E.B:return 11;case E.c:case E.C:return 12;case E.d:case E.D:return 13;case E.e:case E.E:return 14;case E.f:case E.F:return 15}return 0}const ke=new Y,xe=ke.event;function _e(e){const t=document.documentElement,i=window.getComputedStyle(t),o=document.body.classList,s=o.contains("vscode-light")||o.contains("vscode-high-contrast-light"),r=o.contains("vscode-high-contrast")||o.contains("vscode-high-contrast-light"),a=de("--vscode-editor-background",i);let l=de("--vscode-editor-foreground",i);return l||(l=de("--vscode-foreground",i)),{colors:{background:a,foreground:l},computedStyle:i,isLightTheme:s,isHighContrastTheme:r,isInitializing:null==e}}class App{constructor(e){this.appName=e;const t=[],o=_e();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(o),t.push(xe(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",N.configure({name:e,createChannel:function(e){return{name:e,appendLine:function(e){}}}},"off"),this.log(`${e}()`),this._api=se(),this._hostIpc=new le(this.appName),t.push(this._hostIpc),null!=this.state){const e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){const e=new MutationObserver((e=>{ke.fire(_e(e))}));return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame((()=>{this.log(`${e}(): initializing...`);try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(this._hostIpc.onReceiveMessage((e=>{if(!0===r.is(e))window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur"));else this.onMessageReceived(e)}))),this.sendCommand(i,void 0),this.onInitialized?.()}finally{document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}})),t.push(q.on(window,"pagehide",(()=>{t?.forEach((e=>e.dispose())),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=void 0})))}bind(){document.querySelectorAll("a").forEach((e=>{e.href===e.title&&e.removeAttribute("title")})),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);const e=d((e=>{this.sendCommand(o,e)}),150);this.bindDisposables.push(q.on(document,"focusin",(t=>{const i=t.composedPath().some((e=>"INPUT"===e.tagName));!0===this._focused&&this._inputFocused===i||(this._focused=!0,this._inputFocused=i,e({focused:!0,inputFocused:i}))})),q.on(document,"focusout",(()=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))})))}log(e,...t){"string"==typeof e?N.log(e,...t):N.log(e,t.shift(),...t)}getState(){return this._api.getState()}sendCommand(e,t){this._hostIpc.sendCommand(e,t)}sendRequest(e,t){return this._hostIpc.sendRequest(e,t)}setState(e){this._api.setState(e)}}const $e=globalThis,Se=$e.ShadowRoot&&(void 0===$e.ShadyCSS||$e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Re=Symbol(),Pe=new WeakMap;class n{constructor(e,t,i){if(this._$cssResult$=!0,i!==Re)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Se&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=Pe.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Pe.set(t,e))}return e}toString(){return this.cssText}}const Ae=e=>new n("string"==typeof e?e:e+"",void 0,Re),De=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1]),e[0]);return new n(i,e,Re)},Te=Se?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Ae(t)})(e):e,{is:Le,defineProperty:Ee,getOwnPropertyDescriptor:Oe,getOwnPropertyNames:Fe,getOwnPropertySymbols:Be,getPrototypeOf:Me}=Object,ze=globalThis,Ie=ze.trustedTypes,Ue=Ie?Ie.emptyScript:"",We=ze.reactiveElementPolyfillSupport,He=(e,t)=>e,Ve={toAttribute(e,t){switch(t){case Boolean:e=e?Ue:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},Ne=(e,t)=>!Le(e,t),Ge={attribute:!0,type:String,converter:Ve,reflect:!1,hasChanged:Ne};Symbol.metadata??=Symbol("metadata"),ze.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ge){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&Ee(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:s}=Oe(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return o?.call(this)},set(t){const r=o?.call(this);s.call(this,t),this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ge}static _$Ei(){if(this.hasOwnProperty(He("elementProperties")))return;const e=Me(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(He("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(He("properties"))){const e=this.properties,t=[...Fe(e),...Be(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(Te(e))}else void 0!==e&&t.push(Te(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(Se)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const i of t){const t=document.createElement("style"),o=$e.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=i.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:Ve).toAttribute(t,i.type);this._$Em=e,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){const i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=i.getPropertyOptions(o),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:Ve;this._$Em=o,this[o]=s.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??Ne)(this[e],t))return;this.P(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e)!0!==i.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],i)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[He("elementProperties")]=new Map,b[He("finalized")]=new Map,We?.({ReactiveElement:b}),(ze.reactiveElementVersions??=[]).push("2.0.4");const je=globalThis,qe=je.trustedTypes,Qe=qe?qe.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ke="$lit$",Je=`lit$${Math.random().toFixed(9).slice(2)}$`,Ye="?"+Je,Ze=`<${Ye}>`,Xe=document,et=()=>Xe.createComment(""),tt=e=>null===e||"object"!=typeof e&&"function"!=typeof e,it=Array.isArray,ot=e=>it(e)||"function"==typeof e?.[Symbol.iterator],nt="[ \t\n\f\r]",st=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,rt=/-->/g,at=/>/g,lt=RegExp(`>|${nt}(?:([^\\s"'>=/]+)(${nt}*=${nt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),ct=/'/g,ht=/"/g,pt=/^(?:script|style|textarea|title)$/i,dt=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),ut=dt(1),gt=(dt(2),Symbol.for("lit-noChange")),ft=Symbol.for("lit-nothing"),mt=new WeakMap,bt=Xe.createTreeWalker(Xe,129);function vt(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Qe?Qe.createHTML(t):t}const yt=(e,t)=>{const i=e.length-1,o=[];let s,r=2===t?"<svg>":"",a=st;for(let t=0;t<i;t++){const i=e[t];let l,c,h=-1,p=0;for(;p<i.length&&(a.lastIndex=p,c=a.exec(i),null!==c);)p=a.lastIndex,a===st?"!--"===c[1]?a=rt:void 0!==c[1]?a=at:void 0!==c[2]?(pt.test(c[2])&&(s=RegExp("</"+c[2],"g")),a=lt):void 0!==c[3]&&(a=lt):a===lt?">"===c[0]?(a=s??st,h=-1):void 0===c[1]?h=-2:(h=a.lastIndex-c[2].length,l=c[1],a=void 0===c[3]?lt:'"'===c[3]?ht:ct):a===ht||a===ct?a=lt:a===rt||a===at?a=st:(a=lt,s=void 0);const d=a===lt&&e[t+1].startsWith("/>")?" ":"";r+=a===st?i+Ze:h>=0?(o.push(l),i.slice(0,h)+Ke+i.slice(h)+Je+d):i+Je+(-2===h?t:d)}return[vt(e,r+(e[i]||"<?>")+(2===t?"</svg>":"")),o]};class V{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let s=0,r=0;const a=e.length-1,l=this.parts,[c,h]=yt(e,t);if(this.el=V.createElement(c,i),bt.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=bt.nextNode())&&l.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(Ke)){const t=h[r++],i=o.getAttribute(e).split(Je),a=/([.?@])?(.*)/.exec(t);l.push({type:1,index:s,name:a[2],strings:i,ctor:"."===a[1]?k:"?"===a[1]?H:"@"===a[1]?I:R}),o.removeAttribute(e)}else e.startsWith(Je)&&(l.push({type:6,index:s}),o.removeAttribute(e));if(pt.test(o.tagName)){const e=o.textContent.split(Je),t=e.length-1;if(t>0){o.textContent=qe?qe.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],et()),bt.nextNode(),l.push({type:2,index:++s});o.append(e[t],et())}}}else if(8===o.nodeType)if(o.data===Ye)l.push({type:2,index:s});else{let e=-1;for(;-1!==(e=o.data.indexOf(Je,e+1));)l.push({type:7,index:s}),e+=Je.length-1}s++}}static createElement(e,t){const i=Xe.createElement("template");return i.innerHTML=e,i}}function wt(e,t,i=e,o){if(t===gt)return t;let s=void 0!==o?i._$Co?.[o]:i._$Cl;const r=tt(t)?void 0:t._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),void 0===r?s=void 0:(s=new r(e),s._$AT(e,i,o)),void 0!==o?(i._$Co??=[])[o]=s:i._$Cl=s),void 0!==s&&(t=wt(e,s._$AS(e,t.values),s,o)),t}class lit_html_S{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??Xe).importNode(t,!0);bt.currentNode=o;let s=bt.nextNode(),r=0,a=0,l=i[0];for(;void 0!==l;){if(r===l.index){let t;2===l.type?t=new M(s,s.nextSibling,this,e):1===l.type?t=new l.ctor(s,l.name,l.strings,this,e):6===l.type&&(t=new L(s,this,e)),this._$AV.push(t),l=i[++a]}r!==l?.index&&(s=bt.nextNode(),r++)}return bt.currentNode=Xe,o}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=ft,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=wt(this,e,t),tt(e)?e===ft||null==e||""===e?(this._$AH!==ft&&this._$AR(),this._$AH=ft):e!==this._$AH&&e!==gt&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):ot(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==ft&&tt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Xe.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=V.createElement(vt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new lit_html_S(o,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=mt.get(e.strings);return void 0===t&&mt.set(e.strings,t=new V(e)),t}k(e){it(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const s of e)o===t.length?t.push(i=new M(this.S(et()),this.S(et()),this,this.options)):i=t[o],i._$AI(s),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,s){this.type=1,this._$AH=ft,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=ft}_$AI(e,t=this,i,o){const s=this.strings;let r=!1;if(void 0===s)e=wt(this,e,t,0),r=!tt(e)||e!==this._$AH&&e!==gt,r&&(this._$AH=e);else{const o=e;let a,l;for(e=s[0],a=0;a<s.length-1;a++)l=wt(this,o[i+a],t,a),l===gt&&(l=this._$AH[a]),r||=!tt(l)||l!==this._$AH[a],l===ft?e=ft:e!==ft&&(e+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!o&&this.j(e)}j(e){e===ft?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class k extends R{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ft?void 0:e}}class H extends R{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ft)}}class I extends R{constructor(e,t,i,o,s){super(e,t,i,o,s),this.type=5}_$AI(e,t=this){if((e=wt(this,e,t,0)??ft)===gt)return;const i=this._$AH,o=e===ft&&i!==ft||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==ft&&(i===ft||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class L{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){wt(this,e)}}const Ct=je.litHtmlPolyfillSupport;Ct?.(V,M),(je.litHtmlVersions??=[]).push("3.1.4");class lit_element_s extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const o=i?.renderBefore??t;let s=o._$litPart$;if(void 0===s){const e=i?.renderBefore??null;o._$litPart$=s=new M(t.insertBefore(et(),e),e,void 0,i??{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return gt}}lit_element_s._$litElement$=!0,lit_element_s.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lit_element_s});const kt=globalThis.litElementPolyfillSupport;kt?.({LitElement:lit_element_s});(globalThis.litElementVersions??=[]).push("4.0.6");const xt=e=>(t,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},_t={attribute:!0,type:String,converter:Ve,reflect:!1,hasChanged:Ne},$t=(e=_t,t,i)=>{const{kind:o,metadata:s}=i;let r=globalThis.litPropertyMetadata.get(s);if(void 0===r&&globalThis.litPropertyMetadata.set(s,r=new Map),r.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const s=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,s,e)},init(t){return void 0!==t&&this.P(o,void 0,e),t}}}if("setter"===o){const{name:o}=i;return function(i){const s=this[o];t.call(this,i),this.requestUpdate(o,s,e)}}throw Error("Unsupported decorator location: "+o)};function St(e){return(t,i)=>"object"==typeof i?$t(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,o?{...e,wrapped:!0}:e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}const Rt=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i);function Pt(e,t){return(i,o,s)=>{const r=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof o?i:s??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Rt(i,o,{get(){let i=e.call(this);return void 0===i&&(i=r(this),(null!==i||this.hasUpdated)&&t.call(this,i)),i}})}return Rt(i,o,{get(){return r(this)}})}}De`
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
`;const At=De`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,Dt=De`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`,Tt=De`
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
`,Lt=De`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${At}
	}
	a:hover {
		text-decoration: underline;
	}
`;De`
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
`;var Et=Object.defineProperty,Ot=Object.defineProperties,Ft=Object.getOwnPropertyDescriptor,Bt=Object.getOwnPropertyDescriptors,Mt=Object.getOwnPropertySymbols,zt=Object.prototype.hasOwnProperty,It=Object.prototype.propertyIsEnumerable,Ut=(e,t,i)=>t in e?Et(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,Wt=(e,t)=>{for(var i in t||(t={}))zt.call(t,i)&&Ut(e,i,t[i]);if(Mt)for(var i of Mt(t))It.call(t,i)&&Ut(e,i,t[i]);return e},Ht=(e,t)=>Ot(e,Bt(t)),Vt=(e,t,i,o)=>{for(var s,r=o>1?void 0:o?Ft(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&Et(t,i,r),r},Nt=new Map,Gt=new WeakMap;function jt(e){return null!=e?e:{keyframes:[],options:{duration:0}}}function qt(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function Qt(e,t){Nt.set(e,jt(t))}function Kt(e,t,i){const o=Gt.get(e);if(null==o?void 0:o[t])return qt(o[t],i.dir);const s=Nt.get(t);return s?qt(s,i.dir):{keyframes:[],options:{duration:0}}}var Jt=De`
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
`,Yt=De`
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
`,Zt=De`
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
`,Xt=class extends lit_element_s{constructor(){super(),Object.entries(this.constructor.dependencies).forEach((([e,t])=>{this.constructor.define(e,t)}))}emit(e,t){const i=new CustomEvent(e,Wt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(i),i}static define(e,t=this,i={}){const o=customElements.get(e);if(!o)return void customElements.define(e,class extends t{},i);let s=" (unknown version)",r=s;"version"in t&&t.version&&(s=" v"+t.version),"version"in o&&o.version&&(r=" v"+o.version)}};Xt.version="2.15.1",Xt.dependencies={},Vt([St()],Xt.prototype,"dir",2),Vt([St()],Xt.prototype,"lang",2);const ei=Math.min,ti=Math.max,ii=Math.round,oi=Math.floor,ni=e=>({x:e,y:e}),si={left:"right",right:"left",bottom:"top",top:"bottom"},ri={start:"end",end:"start"};function ai(e,t,i){return ti(e,ei(t,i))}function li(e,t){return"function"==typeof e?e(t):e}function ci(e){return e.split("-")[0]}function hi(e){return e.split("-")[1]}function pi(e){return"x"===e?"y":"x"}function di(e){return"y"===e?"height":"width"}function ui(e){return["top","bottom"].includes(ci(e))?"y":"x"}function gi(e){return pi(ui(e))}function fi(e){return e.replace(/start|end/g,(e=>ri[e]))}function mi(e){return e.replace(/left|right|bottom|top/g,(e=>si[e]))}function bi(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function vi(e){const{x:t,y:i,width:o,height:s}=e;return{width:o,height:s,top:i,left:t,right:t+o,bottom:i+s,x:t,y:i}}function yi(e,t,i){let{reference:o,floating:s}=e;const r=ui(t),a=gi(t),l=di(a),c=ci(t),h="y"===r,p=o.x+o.width/2-s.width/2,d=o.y+o.height/2-s.height/2,u=o[l]/2-s[l]/2;let g;switch(c){case"top":g={x:p,y:o.y-s.height};break;case"bottom":g={x:p,y:o.y+o.height};break;case"right":g={x:o.x+o.width,y:d};break;case"left":g={x:o.x-s.width,y:d};break;default:g={x:o.x,y:o.y}}switch(hi(t)){case"start":g[a]-=u*(i&&h?-1:1);break;case"end":g[a]+=u*(i&&h?-1:1)}return g}async function wi(e,t){var i;void 0===t&&(t={});const{x:o,y:s,platform:r,rects:a,elements:l,strategy:c}=e,{boundary:h="clippingAncestors",rootBoundary:p="viewport",elementContext:d="floating",altBoundary:u=!1,padding:g=0}=li(t,e),f=bi(g),m=l[u?"floating"===d?"reference":"floating":d],v=vi(await r.getClippingRect({element:null==(i=await(null==r.isElement?void 0:r.isElement(m)))||i?m:m.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(l.floating)),boundary:h,rootBoundary:p,strategy:c})),y="floating"===d?{x:o,y:s,width:a.floating.width,height:a.floating.height}:a.reference,w=await(null==r.getOffsetParent?void 0:r.getOffsetParent(l.floating)),C=await(null==r.isElement?void 0:r.isElement(w))&&await(null==r.getScale?void 0:r.getScale(w))||{x:1,y:1},x=vi(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:y,offsetParent:w,strategy:c}):y);return{top:(v.top-x.top+f.top)/C.y,bottom:(x.bottom-v.bottom+f.bottom)/C.y,left:(v.left-x.left+f.left)/C.x,right:(x.right-v.right+f.right)/C.x}}function Ci(e){return _i(e)?(e.nodeName||"").toLowerCase():"#document"}function ki(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function xi(e){var t;return null==(t=(_i(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function _i(e){return e instanceof Node||e instanceof ki(e).Node}function $i(e){return e instanceof Element||e instanceof ki(e).Element}function Si(e){return e instanceof HTMLElement||e instanceof ki(e).HTMLElement}function Ri(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof ki(e).ShadowRoot)}function Pi(e){const{overflow:t,overflowX:i,overflowY:o,display:s}=Oi(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+i)&&!["inline","contents"].includes(s)}function Ai(e){return["table","td","th"].includes(Ci(e))}function Di(e){return[":popover-open",":modal"].some((t=>{try{return e.matches(t)}catch(e){return!1}}))}function Ti(e){const t=Li(),i=Oi(e);return"none"!==i.transform||"none"!==i.perspective||!!i.containerType&&"normal"!==i.containerType||!t&&!!i.backdropFilter&&"none"!==i.backdropFilter||!t&&!!i.filter&&"none"!==i.filter||["transform","perspective","filter"].some((e=>(i.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(i.contain||"").includes(e)))}function Li(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Ei(e){return["html","body","#document"].includes(Ci(e))}function Oi(e){return ki(e).getComputedStyle(e)}function Fi(e){return $i(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Bi(e){if("html"===Ci(e))return e;const t=e.assignedSlot||e.parentNode||Ri(e)&&e.host||xi(e);return Ri(t)?t.host:t}function Mi(e){const t=Bi(e);return Ei(t)?e.ownerDocument?e.ownerDocument.body:e.body:Si(t)&&Pi(t)?t:Mi(t)}function zi(e,t,i){var o;void 0===t&&(t=[]),void 0===i&&(i=!0);const s=Mi(e),r=s===(null==(o=e.ownerDocument)?void 0:o.body),a=ki(s);return r?t.concat(a,a.visualViewport||[],Pi(s)?s:[],a.frameElement&&i?zi(a.frameElement):[]):t.concat(s,zi(s,[],i))}function Ii(e){const t=Oi(e);let i=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const s=Si(e),r=s?e.offsetWidth:i,a=s?e.offsetHeight:o,l=ii(i)!==r||ii(o)!==a;return l&&(i=r,o=a),{width:i,height:o,$:l}}function Ui(e){return $i(e)?e:e.contextElement}function Wi(e){const t=Ui(e);if(!Si(t))return ni(1);const i=t.getBoundingClientRect(),{width:o,height:s,$:r}=Ii(t);let a=(r?ii(i.width):i.width)/o,l=(r?ii(i.height):i.height)/s;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}const Hi=ni(0);function Vi(e){const t=ki(e);return Li()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:Hi}function Ni(e,t,i,o){void 0===t&&(t=!1),void 0===i&&(i=!1);const s=e.getBoundingClientRect(),r=Ui(e);let a=ni(1);t&&(o?$i(o)&&(a=Wi(o)):a=Wi(e));const l=function(e,t,i){return void 0===t&&(t=!1),!(!i||t&&i!==ki(e))&&t}(r,i,o)?Vi(r):ni(0);let c=(s.left+l.x)/a.x,h=(s.top+l.y)/a.y,p=s.width/a.x,d=s.height/a.y;if(r){const e=ki(r),t=o&&$i(o)?ki(o):o;let i=e,s=i.frameElement;for(;s&&o&&t!==i;){const e=Wi(s),t=s.getBoundingClientRect(),o=Oi(s),r=t.left+(s.clientLeft+parseFloat(o.paddingLeft))*e.x,a=t.top+(s.clientTop+parseFloat(o.paddingTop))*e.y;c*=e.x,h*=e.y,p*=e.x,d*=e.y,c+=r,h+=a,i=ki(s),s=i.frameElement}}return vi({width:p,height:d,x:c,y:h})}function Gi(e){return Ni(xi(e)).left+Fi(e).scrollLeft}function ji(e,t,i){let o;if("viewport"===t)o=function(e,t){const i=ki(e),o=xi(e),s=i.visualViewport;let r=o.clientWidth,a=o.clientHeight,l=0,c=0;if(s){r=s.width,a=s.height;const e=Li();(!e||e&&"fixed"===t)&&(l=s.offsetLeft,c=s.offsetTop)}return{width:r,height:a,x:l,y:c}}(e,i);else if("document"===t)o=function(e){const t=xi(e),i=Fi(e),o=e.ownerDocument.body,s=ti(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),r=ti(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let a=-i.scrollLeft+Gi(e);const l=-i.scrollTop;return"rtl"===Oi(o).direction&&(a+=ti(t.clientWidth,o.clientWidth)-s),{width:s,height:r,x:a,y:l}}(xi(e));else if($i(t))o=function(e,t){const i=Ni(e,!0,"fixed"===t),o=i.top+e.clientTop,s=i.left+e.clientLeft,r=Si(e)?Wi(e):ni(1);return{width:e.clientWidth*r.x,height:e.clientHeight*r.y,x:s*r.x,y:o*r.y}}(t,i);else{const i=Vi(e);o={...t,x:t.x-i.x,y:t.y-i.y}}return vi(o)}function qi(e,t){const i=Bi(e);return!(i===t||!$i(i)||Ei(i))&&("fixed"===Oi(i).position||qi(i,t))}function Qi(e,t,i){const o=Si(t),s=xi(t),r="fixed"===i,a=Ni(e,!0,r,t);let l={scrollLeft:0,scrollTop:0};const c=ni(0);if(o||!o&&!r)if(("body"!==Ci(t)||Pi(s))&&(l=Fi(t)),o){const e=Ni(t,!0,r,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else s&&(c.x=Gi(s));return{x:a.left+l.scrollLeft-c.x,y:a.top+l.scrollTop-c.y,width:a.width,height:a.height}}function Ki(e){return"static"===Oi(e).position}function Ji(e,t){return Si(e)&&"fixed"!==Oi(e).position?t?t(e):e.offsetParent:null}function Yi(e,t){const i=ki(e);if(Di(e))return i;if(!Si(e)){let t=Bi(e);for(;t&&!Ei(t);){if($i(t)&&!Ki(t))return t;t=Bi(t)}return i}let o=Ji(e,t);for(;o&&Ai(o)&&Ki(o);)o=Ji(o,t);return o&&Ei(o)&&Ki(o)&&!Ti(o)?i:o||function(e){let t=Bi(e);for(;Si(t)&&!Ei(t);){if(Di(t))return null;if(Ti(t))return t;t=Bi(t)}return null}(e)||i}const Zi={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:i,offsetParent:o,strategy:s}=e;const r="fixed"===s,a=xi(o),l=!!t&&Di(t.floating);if(o===a||l&&r)return i;let c={scrollLeft:0,scrollTop:0},h=ni(1);const p=ni(0),d=Si(o);if((d||!d&&!r)&&(("body"!==Ci(o)||Pi(a))&&(c=Fi(o)),Si(o))){const e=Ni(o);h=Wi(o),p.x=e.x+o.clientLeft,p.y=e.y+o.clientTop}return{width:i.width*h.x,height:i.height*h.y,x:i.x*h.x-c.scrollLeft*h.x+p.x,y:i.y*h.y-c.scrollTop*h.y+p.y}},getDocumentElement:xi,getClippingRect:function(e){let{element:t,boundary:i,rootBoundary:o,strategy:s}=e;const r=[..."clippingAncestors"===i?Di(t)?[]:function(e,t){const i=t.get(e);if(i)return i;let o=zi(e,[],!1).filter((e=>$i(e)&&"body"!==Ci(e))),s=null;const r="fixed"===Oi(e).position;let a=r?Bi(e):e;for(;$i(a)&&!Ei(a);){const t=Oi(a),i=Ti(a);i||"fixed"!==t.position||(s=null),(r?!i&&!s:!i&&"static"===t.position&&s&&["absolute","fixed"].includes(s.position)||Pi(a)&&!i&&qi(e,a))?o=o.filter((e=>e!==a)):s=t,a=Bi(a)}return t.set(e,o),o}(t,this._c):[].concat(i),o],a=r[0],l=r.reduce(((e,i)=>{const o=ji(t,i,s);return e.top=ti(o.top,e.top),e.right=ei(o.right,e.right),e.bottom=ei(o.bottom,e.bottom),e.left=ti(o.left,e.left),e}),ji(t,a,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:Yi,getElementRects:async function(e){const t=this.getOffsetParent||Yi,i=this.getDimensions,o=await i(e.floating);return{reference:Qi(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:i}=Ii(e);return{width:t,height:i}},getScale:Wi,isElement:$i,isRTL:function(e){return"rtl"===Oi(e).direction}};function Xi(e,t,i,o){void 0===o&&(o={});const{ancestorScroll:s=!0,ancestorResize:r=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:c=!1}=o,h=Ui(e),p=s||r?[...h?zi(h):[],...zi(t)]:[];p.forEach((e=>{s&&e.addEventListener("scroll",i,{passive:!0}),r&&e.addEventListener("resize",i)}));const d=h&&l?function(e,t){let i,o=null;const s=xi(e);function r(){var e;clearTimeout(i),null==(e=o)||e.disconnect(),o=null}return function a(l,c){void 0===l&&(l=!1),void 0===c&&(c=1),r();const{left:h,top:p,width:d,height:u}=e.getBoundingClientRect();if(l||t(),!d||!u)return;const g={rootMargin:-oi(p)+"px "+-oi(s.clientWidth-(h+d))+"px "+-oi(s.clientHeight-(p+u))+"px "+-oi(h)+"px",threshold:ti(0,ei(1,c))||1};let f=!0;function m(e){const t=e[0].intersectionRatio;if(t!==c){if(!f)return a();t?a(!1,t):i=setTimeout((()=>{a(!1,1e-7)}),1e3)}f=!1}try{o=new IntersectionObserver(m,{...g,root:s.ownerDocument})}catch(e){o=new IntersectionObserver(m,g)}o.observe(e)}(!0),r}(h,i):null;let u,g=-1,f=null;a&&(f=new ResizeObserver((e=>{let[o]=e;o&&o.target===h&&f&&(f.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame((()=>{var e;null==(e=f)||e.observe(t)}))),i()})),h&&!c&&f.observe(h),f.observe(t));let m=c?Ni(e):null;return c&&function t(){const o=Ni(e);!m||o.x===m.x&&o.y===m.y&&o.width===m.width&&o.height===m.height||i();m=o,u=requestAnimationFrame(t)}(),i(),()=>{var e;p.forEach((e=>{s&&e.removeEventListener("scroll",i),r&&e.removeEventListener("resize",i)})),null==d||d(),null==(e=f)||e.disconnect(),f=null,c&&cancelAnimationFrame(u)}}const eo=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var i,o;const{x:s,y:r,placement:a,middlewareData:l}=t,c=await async function(e,t){const{placement:i,platform:o,elements:s}=e,r=await(null==o.isRTL?void 0:o.isRTL(s.floating)),a=ci(i),l=hi(i),c="y"===ui(i),h=["left","top"].includes(a)?-1:1,p=r&&c?-1:1,d=li(t,e);let{mainAxis:u,crossAxis:g,alignmentAxis:f}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return l&&"number"==typeof f&&(g="end"===l?-1*f:f),c?{x:g*p,y:u*h}:{x:u*h,y:g*p}}(t,e);return a===(null==(i=l.offset)?void 0:i.placement)&&null!=(o=l.arrow)&&o.alignmentOffset?{}:{x:s+c.x,y:r+c.y,data:{...c,placement:a}}}}},to=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:i,y:o,placement:s}=t,{mainAxis:r=!0,crossAxis:a=!1,limiter:l={fn:e=>{let{x:t,y:i}=e;return{x:t,y:i}}},...c}=li(e,t),h={x:i,y:o},p=await wi(t,c),d=ui(ci(s)),u=pi(d);let g=h[u],f=h[d];if(r){const e="y"===u?"bottom":"right";g=ai(g+p["y"===u?"top":"left"],g,g-p[e])}if(a){const e="y"===d?"bottom":"right";f=ai(f+p["y"===d?"top":"left"],f,f-p[e])}const m=l.fn({...t,[u]:g,[d]:f});return{...m,data:{x:m.x-i,y:m.y-o}}}}},io=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var i,o;const{placement:s,middlewareData:r,rects:a,initialPlacement:l,platform:c,elements:h}=t,{mainAxis:p=!0,crossAxis:d=!0,fallbackPlacements:u,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:m=!0,...v}=li(e,t);if(null!=(i=r.arrow)&&i.alignmentOffset)return{};const y=ci(s),w=ui(l),C=ci(l)===l,x=await(null==c.isRTL?void 0:c.isRTL(h.floating)),_=u||(C||!m?[mi(l)]:function(e){const t=mi(e);return[fi(e),t,fi(t)]}(l)),$="none"!==f;!u&&$&&_.push(...function(e,t,i,o){const s=hi(e);let r=function(e,t,i){const o=["left","right"],s=["right","left"],r=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return i?t?s:o:t?o:s;case"left":case"right":return t?r:a;default:return[]}}(ci(e),"start"===i,o);return s&&(r=r.map((e=>e+"-"+s)),t&&(r=r.concat(r.map(fi)))),r}(l,m,f,x));const S=[l,..._],P=await wi(t,v),A=[];let D=(null==(o=r.flip)?void 0:o.overflows)||[];if(p&&A.push(P[y]),d){const e=function(e,t,i){void 0===i&&(i=!1);const o=hi(e),s=gi(e),r=di(s);let a="x"===s?o===(i?"end":"start")?"right":"left":"start"===o?"bottom":"top";return t.reference[r]>t.floating[r]&&(a=mi(a)),[a,mi(a)]}(s,a,x);A.push(P[e[0]],P[e[1]])}if(D=[...D,{placement:s,overflows:A}],!A.every((e=>e<=0))){var T,E;const e=((null==(T=r.flip)?void 0:T.index)||0)+1,t=S[e];if(t)return{data:{index:e,overflows:D},reset:{placement:t}};let i=null==(E=D.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:E.placement;if(!i)switch(g){case"bestFit":{var O;const e=null==(O=D.filter((e=>{if($){const t=ui(e.placement);return t===w||"y"===t}return!0})).map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:O[0];e&&(i=e);break}case"initialPlacement":i=l}if(s!==i)return{reset:{placement:i}}}return{}}}},oo=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){const{placement:i,rects:o,platform:s,elements:r}=t,{apply:a=(()=>{}),...l}=li(e,t),c=await wi(t,l),h=ci(i),p=hi(i),d="y"===ui(i),{width:u,height:g}=o.floating;let f,m;"top"===h||"bottom"===h?(f=h,m=p===(await(null==s.isRTL?void 0:s.isRTL(r.floating))?"start":"end")?"left":"right"):(m=h,f="end"===p?"top":"bottom");const v=g-c.top-c.bottom,y=u-c.left-c.right,w=ei(g-c[f],v),C=ei(u-c[m],y),x=!t.middlewareData.shift;let _=w,$=C;if(d?$=p||x?ei(C,y):y:_=p||x?ei(w,v):v,x&&!p){const e=ti(c.left,0),t=ti(c.right,0),i=ti(c.top,0),o=ti(c.bottom,0);d?$=u-2*(0!==e||0!==t?e+t:ti(c.left,c.right)):_=g-2*(0!==i||0!==o?i+o:ti(c.top,c.bottom))}await a({...t,availableWidth:$,availableHeight:_});const S=await s.getDimensions(r.floating);return u!==S.width||g!==S.height?{reset:{rects:!0}}:{}}}},no=e=>({name:"arrow",options:e,async fn(t){const{x:i,y:o,placement:s,rects:r,platform:a,elements:l,middlewareData:c}=t,{element:h,padding:p=0}=li(e,t)||{};if(null==h)return{};const d=bi(p),u={x:i,y:o},g=gi(s),f=di(g),m=await a.getDimensions(h),v="y"===g,y=v?"top":"left",w=v?"bottom":"right",C=v?"clientHeight":"clientWidth",x=r.reference[f]+r.reference[g]-u[g]-r.floating[f],_=u[g]-r.reference[g],$=await(null==a.getOffsetParent?void 0:a.getOffsetParent(h));let S=$?$[C]:0;S&&await(null==a.isElement?void 0:a.isElement($))||(S=l.floating[C]||r.floating[f]);const P=x/2-_/2,A=S/2-m[f]/2-1,D=ei(d[y],A),T=ei(d[w],A),E=D,O=S-m[f]-T,F=S/2-m[f]/2+P,B=ai(E,F,O),z=!c.arrow&&null!=hi(s)&&F!==B&&r.reference[f]/2-(F<E?D:T)-m[f]/2<0,U=z?F<E?F-E:F-O:0;return{[g]:u[g]+U,data:{[g]:B,centerOffset:F-B-U,...z&&{alignmentOffset:U}},reset:z}}}),so=(e,t,i)=>{const o=new Map,s={platform:Zi,...i},r={...s.platform,_c:o};return(async(e,t,i)=>{const{placement:o="bottom",strategy:s="absolute",middleware:r=[],platform:a}=i,l=r.filter(Boolean),c=await(null==a.isRTL?void 0:a.isRTL(t));let h=await a.getElementRects({reference:e,floating:t,strategy:s}),{x:p,y:d}=yi(h,o,c),u=o,g={},f=0;for(let i=0;i<l.length;i++){const{name:r,fn:m}=l[i],{x:v,y,data:w,reset:C}=await m({x:p,y:d,initialPlacement:o,placement:u,strategy:s,middlewareData:g,rects:h,platform:a,elements:{reference:e,floating:t}});p=null!=v?v:p,d=null!=y?y:d,g={...g,[r]:{...g[r],...w}},C&&f<=50&&(f++,"object"==typeof C&&(C.placement&&(u=C.placement),C.rects&&(h=!0===C.rects?await a.getElementRects({reference:e,floating:t,strategy:s}):C.rects),({x:p,y:d}=yi(h,u,c))),i=-1)}return{x:p,y:d,placement:u,strategy:s,middlewareData:g}})(e,t,{...s,platform:r})},ro=1;class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const ao=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends directive_i{constructor(e){if(super(e),e.type!==ro||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const i=e.element.classList;for(const e of this.st)e in t||(i.remove(e),this.st.delete(e));for(const e in t){const o=!!t[e];o===this.st.has(e)||this.nt?.has(e)||(o?(i.add(e),this.st.add(e)):(i.remove(e),this.st.delete(e)))}return gt}});function lo(e){return ho(e)}function co(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function ho(e){for(let t=e;t;t=co(t))if(t instanceof Element&&"none"===getComputedStyle(t).display)return null;for(let t=co(e);t;t=co(t)){if(!(t instanceof Element))continue;const e=getComputedStyle(t);if("contents"!==e.display){if("static"!==e.position||"none"!==e.filter)return t;if("BODY"===t.tagName)return t}}return null}var po=class extends Xt{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect();let i=0,o=0,s=0,r=0,a=0,l=0,c=0,h=0;this.placement.includes("top")||this.placement.includes("bottom")?e.top<t.top?(i=e.left,o=e.bottom,s=e.right,r=e.bottom,a=t.left,l=t.top,c=t.right,h=t.top):(i=t.left,o=t.bottom,s=t.right,r=t.bottom,a=e.left,l=e.top,c=e.right,h=e.top):e.left<t.left?(i=e.right,o=e.top,s=t.left,r=t.top,a=e.right,l=e.bottom,c=t.left,h=t.bottom):(i=t.right,o=t.top,s=e.left,r=e.top,a=t.right,l=t.bottom,c=e.left,h=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${o}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${r}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||function(e){return null!==e&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e instanceof Element)}(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=Xi(this.anchorEl,this.popup,(()=>{this.reposition()})))}async stop(){return new Promise((e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame((()=>e()))):e()}))}reposition(){if(!this.active||!this.anchorEl)return;const e=[eo({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(oo({apply:({rects:e})=>{const t="width"===this.sync||"both"===this.sync,i="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=i?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(io({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(to({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(oo({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(no({element:this.arrowEl,padding:this.arrowPadding}));const t="absolute"===this.strategy?e=>Zi.getOffsetParent(e,lo):Zi.getOffsetParent;so(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:Ht(Wt({},Zi),{getOffsetParent:t})}).then((({x:e,y:t,middlewareData:i,placement:o})=>{const s="rtl"===getComputedStyle(this).direction,r={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){const e=i.arrow.x,t=i.arrow.y;let o="",a="",l="",c="";if("start"===this.arrowPlacement){const i="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=s?i:"",c=s?"":i}else if("end"===this.arrowPlacement){const i="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=s?"":i,c=s?i:"",l="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(c="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",o="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(c="number"==typeof e?`${e}px`:"",o="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:o,right:a,bottom:l,left:c,[r]:"calc(var(--arrow-size-diagonal) * -1)"})}})),requestAnimationFrame((()=>this.updateHoverBridge())),this.emit("sl-reposition")}render(){return ut`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${ao({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${ao({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?ut`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};function uo(e,t){return new Promise((i=>{e.addEventListener(t,(function o(s){s.target===e&&(e.removeEventListener(t,o),i())}))}))}function go(e,t,i){return new Promise((o=>{if((null==i?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const s=e.animate(t,Ht(Wt({},i),{duration:mo()?0:i.duration}));s.addEventListener("cancel",o,{once:!0}),s.addEventListener("finish",o,{once:!0})}))}function fo(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function mo(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function bo(e){return Promise.all(e.getAnimations().map((e=>new Promise((t=>{e.cancel(),requestAnimationFrame(t)})))))}po.styles=[Zt,Yt],Vt([Pt(".popup")],po.prototype,"popup",2),Vt([Pt(".popup__arrow")],po.prototype,"arrowEl",2),Vt([St()],po.prototype,"anchor",2),Vt([St({type:Boolean,reflect:!0})],po.prototype,"active",2),Vt([St({reflect:!0})],po.prototype,"placement",2),Vt([St({reflect:!0})],po.prototype,"strategy",2),Vt([St({type:Number})],po.prototype,"distance",2),Vt([St({type:Number})],po.prototype,"skidding",2),Vt([St({type:Boolean})],po.prototype,"arrow",2),Vt([St({attribute:"arrow-placement"})],po.prototype,"arrowPlacement",2),Vt([St({attribute:"arrow-padding",type:Number})],po.prototype,"arrowPadding",2),Vt([St({type:Boolean})],po.prototype,"flip",2),Vt([St({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map((e=>e.trim())).filter((e=>""!==e)),toAttribute:e=>e.join(" ")}})],po.prototype,"flipFallbackPlacements",2),Vt([St({attribute:"flip-fallback-strategy"})],po.prototype,"flipFallbackStrategy",2),Vt([St({type:Object})],po.prototype,"flipBoundary",2),Vt([St({attribute:"flip-padding",type:Number})],po.prototype,"flipPadding",2),Vt([St({type:Boolean})],po.prototype,"shift",2),Vt([St({type:Object})],po.prototype,"shiftBoundary",2),Vt([St({attribute:"shift-padding",type:Number})],po.prototype,"shiftPadding",2),Vt([St({attribute:"auto-size"})],po.prototype,"autoSize",2),Vt([St()],po.prototype,"sync",2),Vt([St({type:Object})],po.prototype,"autoSizeBoundary",2),Vt([St({attribute:"auto-size-padding",type:Number})],po.prototype,"autoSizePadding",2),Vt([St({attribute:"hover-bridge",type:Boolean})],po.prototype,"hoverBridge",2);const vo=new Set,yo=new MutationObserver($o),wo=new Map;let Co,ko=document.documentElement.dir||"ltr",xo=document.documentElement.lang||navigator.language;function _o(...e){e.map((e=>{const t=e.$code.toLowerCase();wo.has(t)?wo.set(t,Object.assign(Object.assign({},wo.get(t)),e)):wo.set(t,e),Co||(Co=e)})),$o()}function $o(){ko=document.documentElement.dir||"ltr",xo=document.documentElement.lang||navigator.language,[...vo.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}yo.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){vo.add(this.host)}hostDisconnected(){vo.delete(this.host)}dir(){return`${this.host.dir||ko}`.toLowerCase()}lang(){return`${this.host.lang||xo}`.toLowerCase()}getTranslationData(e){var t,i;const o=new Intl.Locale(e.replace(/_/g,"-")),s=null==o?void 0:o.language.toLowerCase(),r=null!==(i=null===(t=null==o?void 0:o.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==i?i:"";return{locale:o,language:s,region:r,primary:wo.get(`${s}-${r}`),secondary:wo.get(s)}}exists(e,t){var i;const{primary:o,secondary:s}=this.getTranslationData(null!==(i=t.lang)&&void 0!==i?i:this.lang());return t=Object.assign({includeFallback:!1},t),!!(o&&o[e]||s&&s[e]||t.includeFallback&&Co&&Co[e])}term(e,...t){const{primary:i,secondary:o}=this.getTranslationData(this.lang());let s;if(i&&i[e])s=i[e];else if(o&&o[e])s=o[e];else{if(!Co||!Co[e])return String(e);s=Co[e]}return"function"==typeof s?s(...t):s}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,t)}}var So={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};_o(So);var Ro=So,Po=class extends LocalizeController{};function Ao(e,t){const i=Wt({waitUntilFirstUpdate:!1},t);return(t,o)=>{const{update:s}=t,r=Array.isArray(e)?e:[e];t.update=function(e){r.forEach((t=>{const s=t;if(e.has(s)){const t=e.get(s),r=this[s];t!==r&&(i.waitUntilFirstUpdate&&!this.hasUpdated||this[o](t,r))}})),s.call(this,e)}}}_o(Ro);var Do=class extends Xt{constructor(){super(),this.localize=new Po(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=fo(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.show()),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=fo(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.hide()),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await bo(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:t,options:i}=Kt(this,"tooltip.show",{dir:this.localize.dir()});await go(this.popup.popup,t,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await bo(this.body);const{keyframes:e,options:i}=Kt(this,"tooltip.hide",{dir:this.localize.dir()});await go(this.popup.popup,e,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,uo(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,uo(this,"sl-after-hide")}render(){return ut`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${ao({tooltip:!0,"tooltip--open":this.open})}
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
    `}};Do.styles=[Zt,Jt],Do.dependencies={"sl-popup":po},Vt([Pt("slot:not([name])")],Do.prototype,"defaultSlot",2),Vt([Pt(".tooltip__body")],Do.prototype,"body",2),Vt([Pt("sl-popup")],Do.prototype,"popup",2),Vt([St()],Do.prototype,"content",2),Vt([St()],Do.prototype,"placement",2),Vt([St({type:Boolean,reflect:!0})],Do.prototype,"disabled",2),Vt([St({type:Number})],Do.prototype,"distance",2),Vt([St({type:Boolean,reflect:!0})],Do.prototype,"open",2),Vt([St({type:Number})],Do.prototype,"skidding",2),Vt([St()],Do.prototype,"trigger",2),Vt([St({type:Boolean})],Do.prototype,"hoist",2),Vt([Ao("open",{waitUntilFirstUpdate:!0})],Do.prototype,"handleOpenChange",1),Vt([Ao(["content","distance","hoist","placement","skidding"])],Do.prototype,"handleOptionsChange",1),Vt([Ao("disabled")],Do.prototype,"handleDisabledChange",1),Qt("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),Qt("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});Do.define("sl-tooltip");var To=Object.defineProperty,Lo=Object.getOwnPropertyDescriptor,Eo=(e,t,i,o)=>{for(var s,r=o>1?void 0:o?Lo(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&To(t,i,r),r};Qt("tooltip.show",null),Qt("tooltip.hide",null);let Oo=class extends lit_element_s{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1}firstUpdated(){this.observer=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-current-placement"===t.attributeName){const e=t.target.getAttribute("data-current-placement");e?this.setAttribute("data-current-placement",e):this.removeAttribute("data-current-placement")}}));const e=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;this.observer.observe(e,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect()}render(){return ut`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled}
			.distance=${this.distance??ft}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${this.content}</slot>
			</div>
		</sl-tooltip>`}};Oo.styles=De`
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
	`,Eo([St()],Oo.prototype,"content",2),Eo([St({reflect:!0})],Oo.prototype,"placement",2),Eo([St({type:Boolean})],Oo.prototype,"disabled",2),Eo([St({type:Number})],Oo.prototype,"distance",2),Eo([St({type:Boolean})],Oo.prototype,"hoist",2),Oo=Eo([xt("gl-tooltip")],Oo);var Fo=Object.defineProperty,Bo=Object.getOwnPropertyDescriptor,Mo=(e,t,i,o)=>{for(var s,r=o>1?void 0:o?Bo(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&Fo(t,i,r),r};let zo=class extends lit_element_s{constructor(){super(...arguments),this.disabled=!1,this.full=!1}get role(){return this.href?"link":"button"}updated(e){super.updated(e),e.has("disabled")&&this.setAttribute("aria-disabled",this.disabled.toString())}render(){return this.tooltip?ut`<gl-tooltip .content=${this.tooltip}>${this.renderControl()}</gl-tooltip>`:this.querySelectorAll('[slot="tooltip"]').length>0?ut`<gl-tooltip>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?ut`<a
				class="control"
				tabindex="${!1===this.disabled?0:-1}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:ut`<button class="control" ?disabled=${this.disabled}>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};zo.shadowRootOptions={...lit_element_s.shadowRootOptions,delegatesFocus:!0},zo.styles=[Tt,De`
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
				${Dt}
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
		`],Mo([Pt(".control")],zo.prototype,"control",2),Mo([St()],zo.prototype,"appearance",2),Mo([St({type:Boolean,reflect:!0})],zo.prototype,"disabled",2),Mo([St({reflect:!0})],zo.prototype,"density",2),Mo([St({type:Boolean,reflect:!0})],zo.prototype,"full",2),Mo([St()],zo.prototype,"href",2),Mo([St({reflect:!0})],zo.prototype,"role",1),Mo([St()],zo.prototype,"tooltip",2),zo=Mo([xt("gl-button")],zo);var Io=Object.defineProperty,Uo=Object.getOwnPropertyDescriptor,Wo=(e,t,i,o)=>{for(var s,r=o>1?void 0:o?Uo(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&Io(t,i,r),r};const Ho=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","git-branch":"\\ea68","git-branch-create":"\\ea68","git-branch-delete":"\\ea68","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b","file-text":"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc","debug-breakpoint-unverified":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","debug-stackframe-dot":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4",bracket:"\\eb0f","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11","gl-commit-horizontal":"\\f101","gl-graph":"\\f102","gl-next-commit":"\\f103","gl-prev-commit-menu":"\\f104","gl-prev-commit":"\\f105","gl-compare-ref-working":"\\f106","gl-branches-view":"\\f107","gl-commit-view":"\\f108","gl-commits-view":"\\f109","gl-compare-view":"\\f10a","gl-contributors-view":"\\f10b","gl-history-view":"\\f10c","gl-remotes-view":"\\f10d","gl-repositories-view":"\\f10e","gl-search-view":"\\f10f","gl-stashes-view":"\\f110","gl-tags-view":"\\f111","gl-worktrees-view":"\\f112","gl-gitlens":"\\f113","gl-stash-pop":"\\f114","gl-stash-save":"\\f115","gl-unplug":"\\f116","gl-open-revision":"\\f117","gl-switch":"\\f118","gl-expand":"\\f119","gl-list-auto":"\\f11a","gl-repo-force-push":"\\f11b","gl-pinned-filled":"\\f11c","gl-clock":"\\f11d","gl-provider-azdo":"\\f11e","gl-provider-bitbucket":"\\f11f","gl-provider-gerrit":"\\f120","gl-provider-gitea":"\\f121","gl-provider-github":"\\f122","gl-provider-gitlab":"\\f123","gl-gitlens-inspect":"\\f124","gl-workspaces-view":"\\f125","gl-cloud-patch":"\\f128","gl-cloud-patch-share":"\\f129","gl-inspect":"\\f12a","gl-repository-filled":"\\f12b","gl-code-suggestion":"\\f12d","gl-diff-multiple":"\\f12e","gl-diff-single":"\\f12f","gl-repo-fetch":"\\f130","gl-repo-pull":"\\f131","gl-repo-push":"\\f132","gl-provider-jira":"\\f133"});let Vo=class extends lit_element_s{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};Vo.styles=De`
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

		${Ae(Object.entries(Ho).map((([e,t])=>`\n\t\t\t\t\t\t:host([icon='${e}'])::before {\n\t\t\t\t\t\t\tcontent: '${t}';\n\t\t\t\t\t\t}\n\t\t\t\t\t`)).join(""))}

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
	`,Wo([St()],Vo.prototype,"icon",2),Wo([St()],Vo.prototype,"modifier",2),Wo([St({type:Number})],Vo.prototype,"size",2),Wo([St()],Vo.prototype,"flip",2),Wo([St()],Vo.prototype,"rotate",2),Vo=Wo([xt("code-icon")],Vo);var No=(e=>(e.Free="free",e.FreePlus="free+",e.Pro="pro",e.Teams="teams",e.Enterprise="enterprise",e))(No||{}),Go=(e=>(e[e.VerificationRequired=-1]="VerificationRequired",e[e.Free=0]="Free",e[e.FreeInPreviewTrial=1]="FreeInPreviewTrial",e[e.FreePreviewTrialExpired=2]="FreePreviewTrialExpired",e[e.FreePlusInTrial=3]="FreePlusInTrial",e[e.FreePlusTrialExpired=4]="FreePlusTrialExpired",e[e.FreePlusTrialReactivationEligible=5]="FreePlusTrialReactivationEligible",e[e.Paid=6]="Paid",e))(Go||{});function jo(e){switch(e){case"free+":return"GitKraken Free";case"pro":return"GitKraken Pro";case"teams":return"GitKraken Teams";case"enterprise":return"GitKraken Enterprise";default:return"GitKraken"}}function qo(e,t){return Qo(e.plan.effective.expiresOn,t)}function Qo(e,t){return null!=e?function(e,t,i,o){const s=("number"==typeof t?t:t.getTime())-("number"==typeof e?e:e.getTime()),r=o??Math.floor;switch(i){case"days":return r(s/864e5);case"hours":return r(s/36e5);case"minutes":return r(s/6e4);case"seconds":return r(s/1e3);default:return s}}(Date.now(),new Date(e),t,Math.round):void 0}po.define("sl-popup");const Ko=new WeakMap;function Jo(e,t){return function(i,o,s){let r=Ko.get(i.constructor);null==r&&Ko.set(i.constructor,r=[]),r.push({method:s.value,keys:Array.isArray(e)?e:[e],afterFirstUpdate:t?.afterFirstUpdate??!1})}}class GlElement extends lit_element_s{emit(e,t,i){const o=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...i,detail:t});return this.dispatchEvent(o),o}update(e){const t=Ko.get(this.constructor);if(null!=t)for(const{keys:i,method:o,afterFirstUpdate:s}of t){if(s&&!this.hasUpdated)continue;const t=i.filter((t=>e.has(t)));t.length&&o.call(this,t)}super.update(e)}}var Yo=Object.defineProperty,Zo=Object.getOwnPropertyDescriptor,Xo=(e,t,i,o)=>{for(var s,r=o>1?void 0:o?Zo(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&Yo(t,i,r),r};let en=class extends GlElement{constructor(){super(),this.placement="bottom",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleTriggerBlur=e=>{if(this.open&&this.hasTrigger("focus")){if(e.composedPath().includes(this))return;this.hide()}},this.handleTriggerClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleTriggerFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handlePopupBlur=e=>{e.composedPath().includes(this)||this.hide()},this.handleWebviewBlur=()=>{this.hide()},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);const e=Q(getComputedStyle(this).getPropertyValue("--show-delay"));this.hoverTimeout=setTimeout((()=>this.show()),e)}},this.handleMouseOut=e=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);const t=e.composedPath();if(t[t.length-2]===this)return;if(this.hasPopupFocus())return;const i=Q(getComputedStyle(this).getPropertyValue("--hide-delay"));this.hoverTimeout=setTimeout((()=>this.hide()),i)}},this.addEventListener("blur",this.handleTriggerBlur,!0),this.addEventListener("focus",this.handleTriggerFocus,!0),this.addEventListener("click",this.handleTriggerClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){this.closeWatcher?.destroy(),document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasPopupFocus(){return this.matches(':has([slot="content"]:focus-within)')}hasTrigger(e){return this.trigger.split(" ").includes(e)}handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("gl-popover-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("focusin",this.handlePopupBlur),window.addEventListener("webview-blur",this.handleWebviewBlur,!1),this.body.hidden=!1,this.popup.active=!0,this.popup.reposition(),this.emit("gl-popover-after-show")}else document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),this.emit("gl-popover-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.popup.active=!1,this.body.hidden=!0,this.emit("gl-popover-after-hide")}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,K(this,"gl-popover-after-show")}async hide(){if(this.open)return this.open=!1,K(this,"gl-popover-after-hide")}render(){return ut`<sl-popup
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
		</sl-popup>`}};en.shadowRootOptions={...lit_element_s.shadowRootOptions,delegatesFocus:!0},en.styles=De`
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
	`,Xo([Pt("#popover")],en.prototype,"body",2),Xo([Pt("sl-popup")],en.prototype,"popup",2),Xo([St({reflect:!0})],en.prototype,"placement",2),Xo([St({type:Object})],en.prototype,"anchor",2),Xo([St({reflect:!0,type:Boolean})],en.prototype,"disabled",2),Xo([St({type:Number})],en.prototype,"distance",2),Xo([St({reflect:!0,type:Boolean})],en.prototype,"open",2),Xo([St({type:Number})],en.prototype,"skidding",2),Xo([St()],en.prototype,"trigger",2),Xo([St({type:Boolean})],en.prototype,"hoist",2),Xo([Jo("open",{afterFirstUpdate:!0})],en.prototype,"handleOpenChange",1),Xo([Jo(["distance","hoist","placement","skidding"])],en.prototype,"handleOptionsChange",1),Xo([Jo("disabled")],en.prototype,"handleDisabledChange",1),en=Xo([xt("gl-popover")],en);var tn=Object.defineProperty,on=Object.getOwnPropertyDescriptor,nn=(e,t,i,o)=>{for(var s,r=o>1?void 0:o?on(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&tn(t,i,r),r};let sn=class extends lit_element_s{constructor(){super(...arguments),this.cloud=!1,this.placement="bottom",this.preview=!1}get daysRemaining(){return null==this.subscription?0:qo(this.subscription,"days")??0}get state(){return this.subscription?.state}render(){return ut`
			<gl-popover placement=${this.placement} hoist>
				<span slot="anchor" class="badge" tabindex="0">${this.renderBadge()}</span>
				<div slot="content" class="badge-popup" tabindex="-1">
					${this.renderPopoverHeader()}${this.renderPopoverContent()}
				</div>
			</gl-popover>
		`}renderBadge(){const e=this.preview?"Preview":"Pro";if(null!=this.subscription){if(this.state===Go.VerificationRequired)return ut`${e} <code-icon class="badge-icon" icon="warning" size="10"></code-icon>`;if(i=this.subscription,"free"!==(o=i.plan.actual.id)&&"free+"!==o||this.cloud&&null!=this.subscription.account)return ut`${e} <code-icon class="badge-icon" icon="check" size="10"></code-icon>`;if(null!=(t=this.state)&&(1===t||3===t))return ut`${e} <code-icon class="badge-icon" icon="clock" size="10"></code-icon>`}var t,i,o;return this.cloud?ut`${e}<span class="badge-icon">☁️</span>`:e}renderPopoverHeader(){const e=ut`<span class="popup-title"
			>${this.preview?"Preview feature":"Pro feature"}${this.cloud?" ☁️":""}</span
		>`;return this.state===Go.Paid?ut`<div class="popup-header">${e}</div>`:this.cloud?this.preview?ut`<div class="popup-header">
					${e}<span class="popup-subtitle"
						>Requires an account and may require a paid plan in the future</span
					>
				</div>`:ut`<div class="popup-header">
				${e}<span class="popup-subtitle"> Requires a paid plan</span>
			</div>`:this.preview?ut`<div class="popup-header">
				${e}<span class="popup-subtitle">May require a paid plan in the future</span>
			</div>`:ut`<div class="popup-header">
			${e}<span class="popup-subtitle"> Requires a paid plan for use on privately-hosted repos</span>
		</div>`}renderPopoverContent(){if(null==this.subscription)return ft;let e;switch(this.state){case Go.Paid:e=ut`<p>
					Your
					<gl-tooltip hoist content="Show Account view">
						<a href="${rn(O.ShowAccountView,void 0)}"
							>${jo(this.subscription?.plan.actual.id??No.Pro)}</a
						>
					</gl-tooltip>
					plan provides access to all Pro features.
				</p>`;break;case Go.VerificationRequired:e=ut`<p>You must verify your email before you can access Pro features.</p>
					<div class="actions">
						<gl-button
							appearance="primary"
							density="tight"
							href="${rn(O.PlusResendVerification,this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							appearance="secondary"
							density="tight"
							href="${rn(O.PlusValidate,this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</div>`;break;case Go.FreePlusInTrial:{const t=this.daysRemaining;e=ut`<p>
						You have
						<strong>${t<1?"<1 day":z("day",t,{infix:" more "})} left</strong>
						in your Pro trial. Once your trial ends, you will only be able to use Pro features on
						publicly-hosted repos.
					</p>
					${this.renderUpgradeActions()}`;break}case Go.FreePlusTrialExpired:e=ut`<p>
						Your Pro trial as ended. You can now only use Pro features on publicly-hosted repos.
					</p>
					${this.renderUpgradeActions(ut`<p>Please upgrade for full access to Pro features:</p>`)}`;break;case Go.FreePlusTrialReactivationEligible:e=ut`<p>
						Reactivate your Pro trial and experience all the new Pro features — free for another 7 days!
					</p>
					<div class="actions center">
						<gl-button
							appearance="primary"
							density="tight"
							href="${rn(O.PlusReactivateProTrial,this.source)}"
							>Reactivate Pro Trial</gl-button
						>
					</div>`;break;default:if(!this.cloud&&this.state===Go.FreeInPreviewTrial){const t=this.daysRemaining;e=ut`<p>
							You have
							<strong>${t<1?"<1 day":z("day",t,{infix:" more "})} left</strong>
							to preview
							<gl-tooltip hoist content="Pro features that do not require an account"
								><span class="hint">local</span></gl-tooltip
							>
							Pro features.
						</p>
						${this.renderStartTrialActions()}`;break}e=ut`<p>
						You only have access to
						<gl-tooltip hoist content="Pro features that do not require an account"
							><span class="hint">local</span></gl-tooltip
						>
						Pro features on publicly-hosted repos.
					</p>
					${this.renderStartTrialActions()}`}return ut`<div class="popup-content">${e}</div>`}renderStartTrialActions(){return ut`<div class="actions">
			<p>For access to all Pro features:</p>
			<gl-button
				appearance="primary"
				density="tight"
				href="${rn(O.PlusSignUp,this.source)}"
				>Start 7-day Pro Trial</gl-button
			>
			&nbsp;or <a href="${rn(O.PlusLogin,this.source)}" title="Sign In">sign in</a>
		</div>`}renderUpgradeActions(e){return ut`<div class="actions">
			${e??ft}
			<gl-button
				appearance="primary"
				density="tight"
				href="${rn(O.PlusUpgrade,this.source)}"
				>Upgrade to Pro</gl-button
			>
			<p class="special">Special: <b>50% off first seat of Pro</b> — only $4/month!<br /></p>
		</div>`}};function rn(e,t){return`command:${e}${t?`?${encodeURIComponent(JSON.stringify(t))}`:""}`}sn.styles=[Tt,Lt,De`
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
				${Ae(At)}
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
		`],nn([St({type:Boolean})],sn.prototype,"cloud",2),nn([St({reflect:!0})],sn.prototype,"placement",2),nn([St({type:Boolean})],sn.prototype,"preview",2),nn([St({type:Object})],sn.prototype,"source",2),nn([St({attribute:!1})],sn.prototype,"subscription",2),sn=nn([xt("gl-feature-badge")],sn);class HomeApp extends App{constructor(){super("HomeApp")}get blockRepoFeatures(){const{repositories:{openCount:e,hasUnsafe:t,trusted:i}}=this.state;return!i||0===e||t}onInitialize(){this.state=this.getState()??this.state,this.updateState()}onBind(){const e=super.onBind?.()??[];return e.push(q.on("[data-action]","click",((e,t)=>this.onDataActionClicked(e,t))),q.on('[data-requires="repo"]',"click",((e,t)=>this.onRepoFeatureClicked(e,t))),q.on("[data-section-toggle]","click",((e,t)=>this.onSectionToggleClicked(e,t)))),e}onMessageReceived(e){switch(!0){case c.is(e):this.state.repositories=e.params,this.state.timestamp=Date.now(),this.setState(this.state),this.updateNoRepo();break;case h.is(e):this.state.promoStates=e.params.promoStates,this.state.subscription=e.params.subscription,this.setState(this.state),this.updatePromos(),this.updateSourceAndSubscription();break;case p.is(e):this.state.orgSettings=e.params.orgSettings,this.setState(this.state),this.updateOrgSettings();break;default:super.onMessageReceived?.(e)}}onRepoFeatureClicked(e,t){return!this.blockRepoFeatures||(e.preventDefault(),e.stopPropagation(),!1)}onDataActionClicked(e,t){const i=t.dataset.action;this.onActionClickedCore(i)}onActionClickedCore(e){e?.startsWith("command:")&&this.sendCommand(s,{command:e.slice(8)})}onSectionToggleClicked(e,t){this.state.walkthroughCollapsed=!this.state.walkthroughCollapsed,this.setState(this.state),this.updateCollapsedSections(this.state.walkthroughCollapsed),this.sendCommand(l,{section:"walkthrough",collapsed:this.state.walkthroughCollapsed})}updateNoRepo(){const{repositories:{openCount:e,hasUnsafe:t,trusted:i}}=this.state,o=document.getElementById("header");if(!i)return o.hidden=!1,an("untrusted-alert",!0),an("no-repo-alert",!1),void an("unsafe-repo-alert",!1);an("untrusted-alert",!1);const s=0===e;an("no-repo-alert",s&&!t),an("unsafe-repo-alert",t),o.hidden=!s&&!t}updatePromos(){const{promoStates:{hs2023:e,pro50:t}}=this.state;an("promo-hs2023",e),an("promo-pro50",t)}updateOrgSettings(){const{orgSettings:{drafts:e}}=this.state;for(const t of document.querySelectorAll('[data-org-requires="drafts"]'))an(t,e)}updateSourceAndSubscription(){const{subscription:e}=this.state,t=document.querySelectorAll("gl-feature-badge");for(const i of t)i.source={source:"home",detail:"badge"},i.subscription=e}updateCollapsedSections(e=this.state.walkthroughCollapsed){document.getElementById("section-walkthrough").classList.toggle("is-collapsed",e)}updateState(){this.updateNoRepo(),this.updatePromos(),this.updateSourceAndSubscription(),this.updateOrgSettings(),this.updateCollapsedSections()}}function an(e,t){let i;i="string"==typeof e?document.getElementById(e):e,null!=i&&(t?(i.removeAttribute("aria-hidden"),i.removeAttribute("hidden")):(i.setAttribute("aria-hidden",""),i?.setAttribute("hidden","")))}new HomeApp;var ln=t.b;export{ln as HomeApp};