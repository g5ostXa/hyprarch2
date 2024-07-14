exports.id=758,exports.ids=[758],exports.modules={3202:(e,t,r)=>{r.r(t),r.d(t,{AzureDevOpsAuthenticationProvider:()=>AzureDevOpsAuthenticationProvider});var i=r(1398),s=r(3166),o=r(1298),n=r(2194);let AzureDevOpsAuthenticationProvider=class AzureDevOpsAuthenticationProvider extends n.RH{get authProviderId(){return o.Q7.AzureDevOps}async createSession(e){let t,r=e?.organization;if(!r){let t=i.window.createInputBox();t.ignoreFocusOut=!0;let s=[];try{r=await new Promise(r=>{s.push(t.onDidHide(()=>r(void 0)),t.onDidChangeValue(()=>t.validationMessage=void 0),t.onDidAccept(()=>{let e=t.value.trim();if(!e){t.validationMessage="An organization is required";return}r(e)})),t.title=`Azure DevOps Authentication${e?.domain?`  \u2022 ${e.domain}`:""}`,t.placeholder="Organization",t.prompt="Enter your Azure DevOps organization",t.show()})}finally{t.dispose(),s.forEach(e=>void e.dispose())}}if(!r)return;let o=i.window.createInputBox();o.ignoreFocusOut=!0;let n=[];try{let s={iconPath:new i.ThemeIcon("link-external"),tooltip:"Open the Azure DevOps Access Tokens Page"};t=await new Promise(t=>{n.push(o.onDidHide(()=>t(void 0)),o.onDidChangeValue(()=>o.validationMessage=void 0),o.onDidAccept(()=>{let e=o.value.trim();if(!e){o.validationMessage="A personal access token is required";return}t(e)}),o.onDidTriggerButton(t=>{t===s&&i.env.openExternal(i.Uri.parse(`https://${e?.domain??"dev.azure.com"}/${r}/_usersSettings/tokens`))})),o.password=!0,o.title=`Azure DevOps Authentication${e?.domain?`  \u2022 ${e.domain}`:""}`,o.placeholder=`Requires ${e?.scopes.join(", ")??"all"} scopes`,o.prompt=`Paste your [Azure DevOps Personal Access Token](https://${e?.domain??"dev.azure.com"}/${r}/_usersSettings/tokens "Get your Azure DevOps Access Token")`,o.buttons=[s],o.show()})}finally{o.dispose(),n.forEach(e=>void e.dispose())}if(t)return{id:this.getSessionId(e),accessToken:(0,s.K3)(`:${t}`),scopes:e?.scopes??[],account:{id:"",label:""}}}}},5317:(e,t,r)=>{r.r(t),r.d(t,{BitbucketAuthenticationProvider:()=>BitbucketAuthenticationProvider});var i=r(1398),s=r(3166),o=r(1298),n=r(2194);let BitbucketAuthenticationProvider=class BitbucketAuthenticationProvider extends n.RH{get authProviderId(){return o.Q7.Bitbucket}async createSession(e){let t,r=e?.username;if(!r){let t={iconPath:new i.ThemeIcon("link-external"),tooltip:"Open the Bitbucket Settings Page"},s=i.window.createInputBox();s.ignoreFocusOut=!0;let o=[];try{r=await new Promise(r=>{o.push(s.onDidHide(()=>r(void 0)),s.onDidChangeValue(()=>s.validationMessage=void 0),s.onDidAccept(()=>{let e=s.value.trim();if(!e){s.validationMessage="A Bitbucket username is required";return}r(e)}),s.onDidTriggerButton(r=>{r===t&&i.env.openExternal(i.Uri.parse(`https://${e?.domain??"bitbucket.org"}/account/settings/`))})),s.title=`Bitbucket Authentication${e?.domain?`  \u2022 ${e.domain}`:""}`,s.placeholder="Username",s.prompt=`Enter your [Bitbucket Username](https://${e?.domain??"bitbucket.org"}/account/settings/ "Get your Bitbucket App Password")`,s.show()})}finally{s.dispose(),o.forEach(e=>void e.dispose())}}if(!r)return;let o=i.window.createInputBox();o.ignoreFocusOut=!0;let n=[];try{let r={iconPath:new i.ThemeIcon("link-external"),tooltip:"Open the Bitbucket App Passwords Page"};t=await new Promise(t=>{n.push(o.onDidHide(()=>t(void 0)),o.onDidChangeValue(()=>o.validationMessage=void 0),o.onDidAccept(()=>{let e=o.value.trim();if(!e){o.validationMessage="An app password is required";return}t(e)}),o.onDidTriggerButton(t=>{t===r&&i.env.openExternal(i.Uri.parse(`https://${e?.domain??"bitbucket.org"}/account/settings/app-passwords/`))})),o.password=!0,o.title=`Bitbucket Authentication${e?.domain?`  \u2022 ${e.domain}`:""}`,o.placeholder=`Requires ${e?.scopes.join(", ")??"all"} scopes`,o.prompt=`Paste your [Bitbucket App Password](https://${e?.domain??"bitbucket.org"}/account/settings/app-passwords/ "Get your Bitbucket App Password")`,o.buttons=[r],o.show()})}finally{o.dispose(),n.forEach(e=>void e.dispose())}if(t)return{id:this.getSessionId(e),accessToken:(0,s.K3)(`${r}:${t}`),scopes:e?.scopes??[],account:{id:"",label:""}}}}},4500:(e,t,r)=>{r.r(t),r.d(t,{CloudIntegrationService:()=>CloudIntegrationService});var i=r(1398),s=r(3916),o=r(8188);let CloudIntegrationService=class CloudIntegrationService{constructor(e,t){this.container=e,this.connection=t}async getConnections(){let e=await this.connection.fetchGkDevApi("v1/provider-tokens",{method:"GET"},{organizationId:!1});if(!e.ok){let t=(await e.json())?.error;null!=t&&s.Vy.error(`Failed to get connected providers from cloud: ${t.message}`);return}return(await e.json())?.data}async getConnectionSession(e,t){let r=!!t,i=o.xq[e];if(null==i){s.Vy.error(`Unsupported cloud integration type: ${e}`);return}let n=t?{method:"POST",body:JSON.stringify({access_token:t})}:{method:"GET"},a=await this.connection.fetchGkDevApi(`v1/provider-tokens/${i}${r?"/refresh":""}`,n,{organizationId:!1});if(!a.ok){let t=(await a.json())?.error;null!=t&&s.Vy.error(`Failed to ${r?"refresh":"get"} ${e} token from cloud: ${t.message}`);return}return(await a.json())?.data}async authorize(e){let t=o.xq[e];if(null==t){s.Vy.error(`Unsupported cloud integration type: ${e}`);return}let r=await i.env.asExternalUri(i.Uri.parse(`${i.env.uriScheme}://${this.container.context.extension.id}/${o.Je}?provider=${e}`)),n=await this.connection.fetchGkDevApi(`v1/provider-tokens/${t}/authorize`,{method:"GET"},{query:`source=gitlens&targetURL=${encodeURIComponent(r.toString(!0))}`,organizationId:!1});if(!n.ok){let t=(await n.json())?.error;null!=t&&s.Vy.error(`Failed to authorize with ${e}: ${t.message}`);return}return(await n.json())?.data}}},3253:(e,t,r)=>{r.r(t),r.d(t,{GitHubAuthenticationProvider:()=>GitHubAuthenticationProvider,GitHubEnterpriseAuthenticationProvider:()=>GitHubEnterpriseAuthenticationProvider});var i=r(1398),s=r(3459),o=r(1298),n=r(2194);let GitHubAuthenticationProvider=class GitHubAuthenticationProvider extends n.DP{get authProviderId(){return o.Q7.GitHub}async getBuiltInExistingSession(e){if(null!=e)return(0,s.Ff)(this.container.integrations.ignoreSSLErrors({id:this.authProviderId,domain:e?.domain}),()=>i.authentication.getSession(this.authProviderId,e.scopes,{silent:!0}))}getCompletionInputTitle(){return"Connect to GitHub"}};let GitHubEnterpriseAuthenticationProvider=class GitHubEnterpriseAuthenticationProvider extends n.RH{get authProviderId(){return o.PY.GitHubEnterprise}async createSession(e){let t;let r=i.window.createInputBox();r.ignoreFocusOut=!0;let s=[];try{let o={iconPath:new i.ThemeIcon("link-external"),tooltip:"Open the GitHub Access Tokens Page"};t=await new Promise(t=>{s.push(r.onDidHide(()=>t(void 0)),r.onDidChangeValue(()=>r.validationMessage=void 0),r.onDidAccept(()=>{let e=r.value.trim();if(!e){r.validationMessage="A personal access token is required";return}t(e)}),r.onDidTriggerButton(t=>{t===o&&i.env.openExternal(i.Uri.parse(`https://${e?.domain??"github.com"}/settings/tokens`))})),r.password=!0,r.title=`GitHub Authentication${e?.domain?`  \u2022 ${e.domain}`:""}`,r.placeholder=`Requires a classic token with ${e?.scopes.join(", ")??"all"} scopes`,r.prompt=`Paste your [GitHub Personal Access Token](https://${e?.domain??"github.com"}/settings/tokens "Get your GitHub Access Token")`,r.buttons=[o],r.show()})}finally{r.dispose(),s.forEach(e=>void e.dispose())}if(t)return{id:this.getSessionId(e),accessToken:t,scopes:e?.scopes??[],account:{id:"",label:""}}}}},45:(e,t,r)=>{r.r(t),r.d(t,{GitLabAuthenticationProvider:()=>GitLabAuthenticationProvider});var i=r(1398),s=r(2194);let GitLabAuthenticationProvider=class GitLabAuthenticationProvider extends s.RH{constructor(e,t){super(e),this.authProviderId=t}async createSession(e){let t;let r=i.window.createInputBox();r.ignoreFocusOut=!0;let s=[];try{let o={iconPath:new i.ThemeIcon("link-external"),tooltip:"Open the GitLab Access Tokens Page"};t=await new Promise(t=>{s.push(r.onDidHide(()=>t(void 0)),r.onDidChangeValue(()=>r.validationMessage=void 0),r.onDidAccept(()=>{let e=r.value.trim();if(!e){r.validationMessage="A personal access token is required";return}t(e)}),r.onDidTriggerButton(t=>{t===o&&i.env.openExternal(i.Uri.parse(`https://${e?.domain??"gitlab.com"}/-/profile/personal_access_tokens`))})),r.password=!0,r.title=`GitLab Authentication${e?.domain?`  \u2022 ${e.domain}`:""}`,r.placeholder=`Requires ${e?.scopes.join(", ")??"all"} scopes`,r.prompt=`Paste your [GitLab Personal Access Token](https://${e?.domain??"gitlab.com"}/-/profile/personal_access_tokens "Get your GitLab Access Token")`,r.buttons=[o],r.show()})}finally{r.dispose(),s.forEach(e=>void e.dispose())}if(t)return{id:this.getSessionId(e),accessToken:t,scopes:e?.scopes??[],account:{id:"",label:""}}}}},5122:(e,t,r)=>{r.r(t),r.d(t,{JiraAuthenticationProvider:()=>JiraAuthenticationProvider});var i=r(1298),s=r(2194);let JiraAuthenticationProvider=class JiraAuthenticationProvider extends s.DP{get authProviderId(){return i.tp.Jira}getCompletionInputTitle(){return"Connect to Jira"}}},65:(e,t,r)=>{r.d(t,{On:()=>IssueIntegration,T5:()=>HostingIntegration});var i=r(1398),s=r(8803),o=r(3536),n=r(4832),a=r(6950),l=r(6707),u=r(3916),c=r(3446),d=r(2194),h=r(1298),p=Object.defineProperty,g=Object.getOwnPropertyDescriptor,m=(e,t,r,i)=>{for(var s,o=i>1?void 0:i?g(t,r):t,n=e.length-1;n>=0;n--)(s=e[n])&&(o=(i?s(t,r,o):s(o))||o);return i&&o&&p(t,r,o),o};let IntegrationBase=class IntegrationBase{constructor(e,t,r){this.container=e,this.authenticationService=t,this.getProvidersApi=r}_onDidChange=new i.EventEmitter;get onDidChange(){return this._onDidChange.event}get authProviderDescriptor(){return{domain:this.domain,scopes:this.authProvider.scopes}}get icon(){return this.id}autolinks(){return[]}get connectedKey(){return`connected:${this.key}`}get maybeConnected(){return void 0===this._session?void 0:null!==this._session}get connectionExpired(){if(this._session?.expiresAt!=null)return new Date(this._session.expiresAt)<new Date}_session;getSession(){return void 0===this._session?this.ensureSession(!1):this._session??void 0}async connect(){try{return!!await this.ensureSession(!0)}catch(e){return!1}}async disconnect(e){if(e?.currentSessionOnly&&null===this._session)return;let t=null!=this._session,r=!e?.currentSessionOnly;if(t&&!e?.currentSessionOnly&&!e?.silent){let e;let t={title:"Disable"},s={title:"Disable & Sign Out"},o={title:"Cancel",isCloseAffordance:!0};if(null==(e=this.authenticationService.supports(this.authProvider.id)?await i.window.showWarningMessage(`Are you sure you want to disable the rich integration with ${this.name}?

Note: signing out clears the saved authentication.`,{modal:!0},t,s,o):await i.window.showWarningMessage(`Are you sure you want to disable the rich integration with ${this.name}?`,{modal:!0},t,o))||e===o)return;r=e===s}if(r){let t=await this.authenticationService.get(this.authProvider.id);e?.cloudSessionOnly&&t instanceof d.DP?t.deleteCloudSession(this.authProviderDescriptor):t.deleteSession(this.authProviderDescriptor)}if(this.resetRequestExceptionCount(),this._session=null,t&&e?.cloudSessionOnly){let e=await this.authenticationService.get(this.authProvider.id);this._session=await e.getSession(this.authProviderDescriptor,{createIfNeeded:!1,forceNewSession:!1})}null==this._session&&(t&&(e?.currentSessionOnly||this.container.storage.storeWorkspace(this.connectedKey,!1),this._onDidChange.fire(),e?.currentSessionOnly||this.container.integrations.disconnected(this,this.key)),await this.providerOnDisconnect?.())}async reauthenticate(){void 0!==this._session&&(this._session=void 0,await this.ensureSession(!0,!0))}refresh(){this.ensureSession(!1)}requestExceptionCount=0;resetRequestExceptionCount(){this.requestExceptionCount=0}handleProviderException(e,t,r){return e instanceof s.AL||(u.Vy.error(e,t),(e instanceof s.v3||e instanceof s.Iz)&&this.trackRequestException()),r}trackRequestException(){this.requestExceptionCount++,this.requestExceptionCount>=5&&null!==this._session&&((0,o.c8)(this.name),this.disconnect({currentSessionOnly:!0}))}async isConnected(){return await this.getSession()!=null}async ensureSession(e,t=!1){let r;if(null!=this._session)return this._session;if(n.H.get("integrations.enabled")){if(e)await this.container.storage.deleteWorkspace(this.connectedKey);else if(!1===this.container.storage.getWorkspace(this.connectedKey))return;try{let i=await this.authenticationService.get(this.authProvider.id);r=await i.getSession(this.authProviderDescriptor,{createIfNeeded:e,forceNewSession:t})}catch(e){if(await this.container.storage.deleteWorkspace(this.connectedKey),e instanceof Error&&e.message.includes("User did not consent"))return;r=null}return void 0!==r||e||await this.container.storage.deleteWorkspace(this.connectedKey),this._session=r??null,this.resetRequestExceptionCount(),null!=r&&(await this.container.storage.storeWorkspace(this.connectedKey,!0),queueMicrotask(()=>{this._onDidChange.fire(),this.container.integrations.connected(this,this.key),this.providerOnConnect?.()})),r??void 0}}getIgnoreSSLErrors(){return this.container.integrations.ignoreSSLErrors(this)}async searchMyIssues(e,t){let r=(0,c.dQ)();if(this.maybeConnected??await this.isConnected())try{let r=await this.searchProviderMyIssues(this._session,null!=e?Array.isArray(e)?e:[e]:void 0,t);return this.resetRequestExceptionCount(),r}catch(e){return this.handleProviderException(e,r,void 0)}}async getIssueOrPullRequest(e,t,r){let i=(0,c.dQ)();if(this.maybeConnected??await this.isConnected())return this.container.cache.getIssueOrPullRequest(t,e,this,()=>({value:(async()=>{try{let r=await this.getProviderIssueOrPullRequest(this._session,e,t);return this.resetRequestExceptionCount(),r}catch(e){return this.handleProviderException(e,i,void 0)}})()}),r)}async getCurrentAccount(e){let t=(0,c.dQ)();if(!(this.maybeConnected??await this.isConnected()))return;let{expiryOverride:r,...i}=e??{};return this.container.cache.getCurrentAccount(this,()=>({value:(async()=>{try{let e=await this.getProviderCurrentAccount?.(this._session,i);return this.resetRequestExceptionCount(),e}catch(e){return this.handleProviderException(e,t,void 0)}})()}),{expiryOverride:r})}async getPullRequest(e,t){let r=(0,c.dQ)();if(this.maybeConnected??await this.isConnected())return this.container.cache.getPullRequest(t,e,this,()=>({value:(async()=>{try{let r=await this.getProviderPullRequest?.(this._session,e,t);return this.resetRequestExceptionCount(),r}catch(e){return this.handleProviderException(e,r,void 0)}})()}))}};m([(0,l.Rm)()],IntegrationBase.prototype,"connect",1),m([(0,a.G)(),(0,l.Rm)()],IntegrationBase.prototype,"disconnect",1),m([(0,l.Rm)()],IntegrationBase.prototype,"reauthenticate",1),m([(0,l.Yz)()],IntegrationBase.prototype,"trackRequestException",1),m([(0,a.G)(),(0,l.Yz)({exit:!0})],IntegrationBase.prototype,"isConnected",1),m([(0,a.G)()],IntegrationBase.prototype,"ensureSession",1),m([(0,l.Yz)()],IntegrationBase.prototype,"searchMyIssues",1),m([(0,l.Yz)()],IntegrationBase.prototype,"getIssueOrPullRequest",1),m([(0,l.Yz)()],IntegrationBase.prototype,"getPullRequest",1);let IssueIntegration=class IssueIntegration extends IntegrationBase{type="issues";async getAccountForResource(e){if(this.maybeConnected??await this.isConnected())try{let t=await this.getProviderAccountForResource(this._session,e);return this.resetRequestExceptionCount(),t}catch(e){return this.handleProviderException(e,void 0,void 0)}}async getResourcesForUser(){if(this.maybeConnected??await this.isConnected())try{let e=await this.getProviderResourcesForUser(this._session);return this.resetRequestExceptionCount(),e}catch(e){return this.handleProviderException(e,void 0,void 0)}}async getProjectsForResources(e){if(this.maybeConnected??await this.isConnected())try{let t=await this.getProviderProjectsForResources(this._session,e);return this.resetRequestExceptionCount(),t}catch(e){return this.handleProviderException(e,void 0,void 0)}}async getProjectsForUser(){let e=await this.getResourcesForUser();if(null!=e)return this.getProjectsForResources(e)}async getIssuesForProject(e,t){if(this.maybeConnected??await this.isConnected())try{let r=await this.getProviderIssuesForProject(this._session,e,t);return this.resetRequestExceptionCount(),r}catch(e){return this.handleProviderException(e,void 0,void 0)}}};m([(0,a.G)(),(0,l.Yz)()],IssueIntegration.prototype,"getAccountForResource",1),m([(0,a.G)(),(0,l.Yz)()],IssueIntegration.prototype,"getResourcesForUser",1),m([(0,l.Yz)()],IssueIntegration.prototype,"getProjectsForResources",1),m([(0,l.Yz)()],IssueIntegration.prototype,"getIssuesForProject",1);let HostingIntegration=class HostingIntegration extends IntegrationBase{type="hosting";async getAccountForEmail(e,t,r){let i=(0,c.dQ)();if(this.maybeConnected??await this.isConnected())try{let i=await this.getProviderAccountForEmail(this._session,e,t,r);return this.resetRequestExceptionCount(),i}catch(e){return this.handleProviderException(e,i,void 0)}}async getAccountForCommit(e,t,r){let i=(0,c.dQ)();if(this.maybeConnected??await this.isConnected())try{let i=await this.getProviderAccountForCommit(this._session,e,t,r);return this.resetRequestExceptionCount(),i}catch(e){return this.handleProviderException(e,i,void 0)}}async getDefaultBranch(e){let t=(0,c.dQ)();if(this.maybeConnected??await this.isConnected())return this.container.cache.getRepositoryDefaultBranch(e,this,()=>({value:(async()=>{try{let t=await this.getProviderDefaultBranch(this._session,e);return this.resetRequestExceptionCount(),t}catch(e){return this.handleProviderException(e,t,void 0)}})()}))}async getRepositoryMetadata(e,t){let r=(0,c.dQ)();if(this.maybeConnected??await this.isConnected())return this.container.cache.getRepositoryMetadata(e,this,()=>({value:(async()=>{try{let r=await this.getProviderRepositoryMetadata(this._session,e,t?.cancellation);return this.resetRequestExceptionCount(),r}catch(e){return this.handleProviderException(e,r,void 0)}})()}),{expiryOverride:t?.expiryOverride})}async mergePullRequest(e,t){let r=(0,c.dQ)();if(!(this.maybeConnected??await this.isConnected()))return!1;try{let r=await this.mergeProviderPullRequest(this._session,e,t);return this.resetRequestExceptionCount(),r}catch(e){return this.handleProviderException(e,r,!1)}}async getPullRequestForBranch(e,t,r){let i=(0,c.dQ)();if(!(this.maybeConnected??await this.isConnected()))return;let{expiryOverride:s,...o}=r??{};return this.container.cache.getPullRequestForBranch(t,e,this,()=>({value:(async()=>{try{let r=await this.getProviderPullRequestForBranch(this._session,e,t,o);return this.resetRequestExceptionCount(),r}catch(e){return this.handleProviderException(e,i,void 0)}})()}),{expiryOverride:s})}async getPullRequestForCommit(e,t,r){let i=(0,c.dQ)();if(this.maybeConnected??await this.isConnected())return this.container.cache.getPullRequestForSha(t,e,this,()=>({value:(async()=>{try{let r=await this.getProviderPullRequestForCommit(this._session,e,t);return this.resetRequestExceptionCount(),r}catch(e){return this.handleProviderException(e,i,void 0)}})()}),r)}async getMyIssuesForRepos(e,t){let r;let i=this.authProvider.id;if(!(this.maybeConnected??await this.isConnected()))return;let s=await this.getProvidersApi();if(i!==h.Q7.GitLab&&(s.isRepoIdsInput(e)||i===h.Q7.AzureDevOps&&!e.every(e=>null!=e.project&&null!=e.namespace))){u.Vy.warn(`Unsupported input for provider ${i}`,"getIssuesForRepos");return}if(i===h.Q7.AzureDevOps){let o=new Set,n=new Set;for(let t of e)o.add(t.namespace),n.add(t.project);if(o.size>1){u.Vy.warn(`Multiple organizations not supported for provider ${i}`,"getIssuesForRepos");return}if(0===o.size){u.Vy.warn(`No organizations found for provider ${i}`,"getIssuesForRepos");return}let a=o.values().next().value;if(t?.filters!=null){let e;if(!s.providerSupportsIssueFilters(i,t.filters)){u.Vy.warn(`Unsupported filters for provider ${i}`,"getIssuesForRepos");return}try{e=await s.getCurrentUserForInstance(i,a)}catch(e){u.Vy.error(e,"getIssuesForRepos");return}if(null==e){u.Vy.warn(`Unable to get current user for ${i}`,"getIssuesForRepos");return}let o=e.name;if(null==o){u.Vy.warn(`Unable to get user property for filter for ${i}`,"getIssuesForRepos");return}r={authorLogin:t.filters.includes(h.mN.Author)?o:void 0,assigneeLogins:t.filters.includes(h.mN.Assignee)?[o]:void 0,mentionLogin:t.filters.includes(h.mN.Mention)?o:void 0}}let l=JSON.parse(t?.cursor??"{}").cursors??[],c=Array.from(n.values()).map(e=>({namespace:a,project:e,cursor:void 0}));l.length>0&&(c=l);try{let e={cursors:[]},t=!1,i=[];return await Promise.all(c.map(async o=>{let n=await s.getIssuesForAzureProject(o.namespace,o.project,{...r,cursor:o.cursor});i.push(...n.values),n.paging?.more&&(t=!0,e.cursors.push({namespace:o.namespace,project:o.project,cursor:n.paging.cursor}))})),{values:i,paging:{more:t,cursor:JSON.stringify(e)}}}catch(e){u.Vy.error(e,"getIssuesForRepos");return}}if(t?.filters!=null){let e;try{e=await s.getCurrentUser(i)}catch(e){u.Vy.error(e,"getIssuesForRepos");return}if(null==e){u.Vy.warn(`Unable to get current user for ${i}`,"getIssuesForRepos");return}let o=e.username;if(null==o){u.Vy.warn(`Unable to get user property for filter for ${i}`,"getIssuesForRepos");return}r={authorLogin:t.filters.includes(h.mN.Author)?o:void 0,assigneeLogins:t.filters.includes(h.mN.Assignee)?[o]:void 0,mentionLogin:t.filters.includes(h.mN.Mention)?o:void 0}}if(s.getProviderIssuesPagingMode(i)===h.W3.Repo&&!s.isRepoIdsInput(e)){let o=JSON.parse(t?.cursor??"{}").cursors??[],n=e.map(e=>({repo:e,cursor:void 0}));o.length>0&&(n=o);try{let e={cursors:[]},o=!1,a=[];return await Promise.all(n.map(async n=>{let l=await s.getIssuesForRepo(i,n.repo,{...r,cursor:n.cursor,baseUrl:t?.customUrl});a.push(...l.values),l.paging?.more&&(o=!0,e.cursors.push({repo:n.repo,cursor:l.paging.cursor}))})),{values:a,paging:{more:o,cursor:JSON.stringify(e)}}}catch(e){u.Vy.error(e,"getIssuesForRepos");return}}try{return await s.getIssuesForRepos(i,e,{...r,cursor:t?.cursor,baseUrl:t?.customUrl})}catch(e){u.Vy.error(e,"getIssuesForRepos");return}}async getMyPullRequestsForRepos(e,t){let r;let i=this.authProvider.id;if(!(this.maybeConnected??await this.isConnected()))return;let s=await this.getProvidersApi();if(i!==h.Q7.GitLab&&(s.isRepoIdsInput(e)||i===h.Q7.AzureDevOps&&!e.every(e=>null!=e.project&&null!=e.namespace))){u.Vy.warn(`Unsupported input for provider ${i}`);return}if(t?.filters!=null){let o,n;if(!s.providerSupportsPullRequestFilters(i,t.filters)){u.Vy.warn(`Unsupported filters for provider ${i}`,"getPullRequestsForRepos");return}if(i===h.Q7.AzureDevOps){let t=new Set;for(let r of e)t.add(r.namespace);if(t.size>1){u.Vy.warn(`Multiple organizations not supported for provider ${i}`,"getPullRequestsForRepos");return}if(0===t.size){u.Vy.warn(`No organizations found for provider ${i}`,"getPullRequestsForRepos");return}let r=t.values().next().value;try{o=await s.getCurrentUserForInstance(i,r)}catch(e){u.Vy.error(e,"getPullRequestsForRepos");return}}else try{o=await s.getCurrentUser(i)}catch(e){u.Vy.error(e,"getPullRequestsForRepos");return}if(null==o){u.Vy.warn(`Unable to get current user for ${i}`,"getPullRequestsForRepos");return}switch(i){case h.Q7.Bitbucket:case h.Q7.AzureDevOps:n=o.id;break;default:n=o.username}if(null==n){u.Vy.warn(`Unable to get user property for filter for ${i}`,"getPullRequestsForRepos");return}r={authorLogin:t.filters.includes(h.XP.Author)?n:void 0,assigneeLogins:t.filters.includes(h.XP.Assignee)?[n]:void 0,reviewRequestedLogin:t.filters.includes(h.XP.ReviewRequested)?n:void 0,mentionLogin:t.filters.includes(h.XP.Mention)?n:void 0}}if(s.getProviderPullRequestsPagingMode(i)===h.W3.Repo&&!s.isRepoIdsInput(e)){let o=JSON.parse(t?.cursor??"{}").cursors??[],n=e.map(e=>({repo:e,cursor:void 0}));o.length>0&&(n=o);try{let e={cursors:[]},o=!1,a=[];return await Promise.all(n.map(async n=>{let l=await s.getPullRequestsForRepo(i,n.repo,{...r,cursor:n.cursor,baseUrl:t?.customUrl});a.push(...l.values),l.paging?.more&&(o=!0,e.cursors.push({repo:n.repo,cursor:l.paging.cursor}))})),{values:a,paging:{more:o,cursor:JSON.stringify(e)}}}catch(e){u.Vy.error(e,"getPullRequestsForRepos");return}}try{return s.getPullRequestsForRepos(i,e,{...r,cursor:t?.cursor,baseUrl:t?.customUrl})}catch(e){u.Vy.error(e,"getPullRequestsForRepos");return}}async searchMyPullRequests(e,t){let r=(0,c.dQ)();if(!(this.maybeConnected??await this.isConnected()))return;let i=Date.now();try{return{value:await this.searchProviderMyPullRequests(this._session,null!=e?Array.isArray(e)?e:[e]:void 0,t),duration:Date.now()-i}}catch(e){return u.Vy.error(e,r),{error:e,duration:Date.now()-i}}}async searchPullRequests(e,t,r){let i=(0,c.dQ)();if(this.maybeConnected??await this.isConnected())try{let i=await this.searchProviderPullRequests?.(this._session,e,null!=t?Array.isArray(t)?t:[t]:void 0,r);return this.resetRequestExceptionCount(),i}catch(e){return this.handleProviderException(e,i,void 0)}}};m([(0,a.G)(),(0,l.Yz)()],HostingIntegration.prototype,"getAccountForEmail",1),m([(0,a.G)(),(0,l.Yz)()],HostingIntegration.prototype,"getAccountForCommit",1),m([(0,l.Yz)()],HostingIntegration.prototype,"getDefaultBranch",1),m([(0,l.Yz)()],HostingIntegration.prototype,"getRepositoryMetadata",1),m([(0,l.Yz)()],HostingIntegration.prototype,"getPullRequestForBranch",1),m([(0,l.Yz)()],HostingIntegration.prototype,"getPullRequestForCommit",1),m([(0,l.Yz)()],HostingIntegration.prototype,"searchMyPullRequests",1),m([(0,l.Yz)()],HostingIntegration.prototype,"searchPullRequests",1)},552:(e,t,r)=>{r.r(t),r.d(t,{AzureDevOpsIntegration:()=>AzureDevOpsIntegration});var i=r(3916),s=r(65),o=r(1298);let n=o.Mt[o.Q7.AzureDevOps],a=Object.freeze({id:n.id,scopes:n.scopes});let AzureDevOpsIntegration=class AzureDevOpsIntegration extends s.T5{authProvider=a;id=o.Q7.AzureDevOps;key=this.id;name="Azure DevOps";get domain(){return n.domain}get apiBaseUrl(){return"https://dev.azure.com"}async getReposForAzureProject(e,t,r){if(this.maybeConnected??await this.isConnected())try{return await (await this.getProvidersApi()).getReposForAzureProject(e,t,{cursor:r?.cursor})}catch(e){i.Vy.error(e,"getReposForAzureProject");return}}async mergeProviderPullRequest(e,t,r){return Promise.resolve(!1)}async getProviderAccountForCommit(e,t,r,i){return Promise.resolve(void 0)}async getProviderAccountForEmail(e,t,r,i){return Promise.resolve(void 0)}async getProviderDefaultBranch(e,t){return Promise.resolve(void 0)}async getProviderIssueOrPullRequest(e,t,r){return Promise.resolve(void 0)}async getProviderPullRequestForBranch(e,t,r,i){return Promise.resolve(void 0)}async getProviderPullRequestForCommit(e,t,r){return Promise.resolve(void 0)}async getProviderRepositoryMetadata(e,t,r){return Promise.resolve(void 0)}async searchProviderMyPullRequests(e,t){return Promise.resolve(void 0)}async searchProviderMyIssues(e,t){return Promise.resolve(void 0)}}},7287:(e,t,r)=>{r.r(t),r.d(t,{BitbucketIntegration:()=>BitbucketIntegration});var i=r(65),s=r(1298);let o=s.Mt[s.Q7.Bitbucket],n=Object.freeze({id:o.id,scopes:o.scopes});let BitbucketIntegration=class BitbucketIntegration extends i.T5{authProvider=n;id=s.Q7.Bitbucket;key=this.id;name="Bitbucket";get domain(){return o.domain}get apiBaseUrl(){return"https://api.bitbucket.org/2.0"}async mergeProviderPullRequest(e,t,r){return Promise.resolve(!1)}async getProviderAccountForCommit(e,t,r,i){return Promise.resolve(void 0)}async getProviderAccountForEmail(e,t,r,i){return Promise.resolve(void 0)}async getProviderDefaultBranch(e,t){return Promise.resolve(void 0)}async getProviderIssueOrPullRequest(e,t,r){return Promise.resolve(void 0)}async getProviderPullRequestForBranch(e,t,r,i){return Promise.resolve(void 0)}async getProviderPullRequestForCommit(e,t,r){return Promise.resolve(void 0)}async getProviderRepositoryMetadata(e,t,r){return Promise.resolve(void 0)}async searchProviderMyPullRequests(e,t){return Promise.resolve(void 0)}async searchProviderMyIssues(e,t){return Promise.resolve(void 0)}}},6315:(e,t,r)=>{r.r(t),r.d(t,{GitHubEnterpriseIntegration:()=>GitHubEnterpriseIntegration,GitHubIntegration:()=>GitHubIntegration});var i=r(1398),s=r(304),o=r(6707),n=r(1014),a=r(65),l=r(1298),u=Object.defineProperty,c=Object.getOwnPropertyDescriptor;let d=l.Mt[l.Q7.GitHub],h=Object.freeze({id:d.id,scopes:d.scopes}),p=l.Mt[l.PY.GitHubEnterprise],g=Object.freeze({id:p.id,scopes:p.scopes});let GitHubIntegrationBase=class GitHubIntegrationBase extends a.T5{async getProviderAccountForCommit({accessToken:e},t,r,i){return(await this.container.github)?.getAccountForCommit(this,e,t.owner,t.name,r,{...i,baseUrl:this.apiBaseUrl})}async getProviderAccountForEmail({accessToken:e},t,r,i){return(await this.container.github)?.getAccountForEmail(this,e,t.owner,t.name,r,{...i,baseUrl:this.apiBaseUrl})}async getProviderDefaultBranch({accessToken:e},t){return(await this.container.github)?.getDefaultBranch(this,e,t.owner,t.name,{baseUrl:this.apiBaseUrl})}async getProviderIssueOrPullRequest({accessToken:e},t,r){return(await this.container.github)?.getIssueOrPullRequest(this,e,t.owner,t.name,Number(r),{baseUrl:this.apiBaseUrl})}async getProviderPullRequest({accessToken:e},t,r){return(await this.container.github)?.getPullRequest(this,e,t.owner,t.name,parseInt(r,10),{baseUrl:this.apiBaseUrl})}async getProviderPullRequestForBranch({accessToken:e},t,i,s){let{include:o,...n}=s??{},a=(await Promise.resolve().then(r.bind(r,1116))).toGitHubPullRequestState;return(await this.container.github)?.getPullRequestForBranch(this,e,t.owner,t.name,i,{...n,include:o?.map(e=>a(e)),baseUrl:this.apiBaseUrl})}async getProviderPullRequestForCommit({accessToken:e},t,r){return(await this.container.github)?.getPullRequestForCommit(this,e,t.owner,t.name,r,{baseUrl:this.apiBaseUrl})}async getProviderRepositoryMetadata({accessToken:e},t,r){return(await this.container.github)?.getRepositoryMetadata(this,e,t.owner,t.name,{baseUrl:this.apiBaseUrl},r)}async searchProviderMyPullRequests({accessToken:e},t,r){return(await this.container.github)?.searchMyPullRequests(this,e,{repos:t?.map(e=>`${e.owner}/${e.name}`),baseUrl:this.apiBaseUrl},r)}async searchProviderMyIssues({accessToken:e},t,r){return(await this.container.github)?.searchMyIssues(this,e,{repos:t?.map(e=>`${e.owner}/${e.name}`),baseUrl:this.apiBaseUrl},r)}async searchProviderPullRequests({accessToken:e},t,r,i){return(await this.container.github)?.searchPullRequests(this,e,{search:t,repos:r?.map(e=>`${e.owner}/${e.name}`),baseUrl:this.apiBaseUrl},i)}async mergeProviderPullRequest({accessToken:e},t,r){let i=t instanceof s.B9?t.nodeId:t.id,o=t instanceof s.B9?t.refs?.head?.sha:t.headRefSha;return null!=i&&null!=o&&((await this.container.github)?.mergePullRequest(this,e,i,o,{mergeMethod:r?.mergeMethod})??!1)}async getProviderCurrentAccount({accessToken:e},t){return(await this.container.github)?.getCurrentAccount(this,e,{...t,baseUrl:this.apiBaseUrl})}};let GitHubIntegration=class GitHubIntegration extends GitHubIntegrationBase{authProvider=h;id=l.Q7.GitHub;key=this.id;name="GitHub";get domain(){return d.domain}get apiBaseUrl(){return"https://api.github.com"}async refresh(){null==await i.authentication.getSession(this.authProvider.id,this.authProvider.scopes)&&this.maybeConnected?this.disconnect():super.refresh()}};let GitHubEnterpriseIntegration=class GitHubEnterpriseIntegration extends GitHubIntegrationBase{constructor(e,t,r,i){super(e,t,r),this._domain=i}authProvider=g;id=l.PY.GitHubEnterprise;key=`${this.id}:${this.domain}`;name="GitHub Enterprise";get domain(){return this._domain}get apiBaseUrl(){return`https://${this._domain}/api/v3`}async connect(){return!!await (0,n.KH)(this.container,`Rich integration with ${this.name} is a Pro feature.`,{source:"integrations",detail:{action:"connect",integration:this.id}})&&super.connect()}};((e,t,r,i)=>{for(var s,o=c(t,r),n=e.length-1;n>=0;n--)(s=e[n])&&(o=s(t,r,o)||o);return i&&o&&u(t,r,o)})([(0,o.Rm)()],GitHubEnterpriseIntegration.prototype,"connect",1)},6088:(e,t,r)=>{function i(){return"object"==typeof navigator&&"userAgent"in navigator?navigator.userAgent:"object"==typeof process&&void 0!==process.version?`Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})`:"<environment undetectable>"}r.r(t),r.d(t,{GitHubApi:()=>GitHubApi});var s=`octokit-endpoint.js/0.0.0-development ${i()}`;function o(e){for(let t in e)void 0===e[t]&&delete e[t];return e}function n(e,t,r){var i;if("string"==typeof t){let[e,i]=t.split(" ");r=Object.assign(i?{method:e,url:i}:{url:e},r)}else r=Object.assign({},t);r.headers=(i=r.headers)?Object.keys(i).reduce((e,t)=>(e[t.toLowerCase()]=i[t],e),{}):{},o(r),o(r.headers);let s=function e(t,r){let i=Object.assign({},t);return Object.keys(r).forEach(s=>{(function(e){if("object"!=typeof e||null===e||"[object Object]"!==Object.prototype.toString.call(e))return!1;let t=Object.getPrototypeOf(e);if(null===t)return!0;let r=Object.prototype.hasOwnProperty.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&Function.prototype.call(r)===Function.prototype.call(e)})(r[s])&&s in t?i[s]=e(t[s],r[s]):Object.assign(i,{[s]:r[s]})}),i}(e||{},r);return"/graphql"===r.url&&(e&&e.mediaType.previews?.length&&(s.mediaType.previews=e.mediaType.previews.filter(e=>!s.mediaType.previews.includes(e)).concat(s.mediaType.previews)),s.mediaType.previews=(s.mediaType.previews||[]).map(e=>e.replace(/-preview/,""))),s}var a=/\{[^}]+\}/g;function l(e){return e.replace(/^\W+|\W+$/g,"").split(/,/)}function u(e,t){let r={__proto__:null};for(let i of Object.keys(e))-1===t.indexOf(i)&&(r[i]=e[i]);return r}function c(e){return e.split(/(%[0-9A-Fa-f]{2})/g).map(function(e){return/%[0-9A-Fa-f]/.test(e)||(e=encodeURI(e).replace(/%5B/g,"[").replace(/%5D/g,"]")),e}).join("")}function d(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function h(e,t,r){return(t="+"===e||"#"===e?c(t):d(t),r)?d(r)+"="+t:t}function p(e){return null!=e}function g(e){return";"===e||"&"===e||"?"===e}function m(e,t){var r=["+","#",".","/",";","?","&"];return"/"===(e=e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g,function(e,i,s){if(!i)return c(s);{let e="",s=[];if(-1!==r.indexOf(i.charAt(0))&&(e=i.charAt(0),i=i.substr(1)),i.split(/,/g).forEach(function(r){var i=/([^:\*]*)(?::(\d+)|(\*))?/.exec(r);s.push(function(e,t,r,i){var s=e[r],o=[];if(p(s)&&""!==s){if("string"==typeof s||"number"==typeof s||"boolean"==typeof s)s=s.toString(),i&&"*"!==i&&(s=s.substring(0,parseInt(i,10))),o.push(h(t,s,g(t)?r:""));else if("*"===i)Array.isArray(s)?s.filter(p).forEach(function(e){o.push(h(t,e,g(t)?r:""))}):Object.keys(s).forEach(function(e){p(s[e])&&o.push(h(t,s[e],e))});else{let e=[];Array.isArray(s)?s.filter(p).forEach(function(r){e.push(h(t,r))}):Object.keys(s).forEach(function(r){p(s[r])&&(e.push(d(r)),e.push(h(t,s[r].toString())))}),g(t)?o.push(d(r)+"="+e.join(",")):0!==e.length&&o.push(e.join(","))}}else";"===t?p(s)&&o.push(d(r)):""===s&&("&"===t||"?"===t)?o.push(d(r)+"="):""===s&&o.push("");return o}(t,e,i[1],i[2]||i[3]))}),!e||"+"===e)return s.join(",");var o=",";return"?"===e?o="&":"#"!==e&&(o=e),(0!==s.length?e:"")+s.join(o)}}))?e:e.replace(/\/$/,"")}function f(e){let t,r=e.method.toUpperCase(),i=(e.url||"/").replace(/:([a-z]\w+)/g,"{$1}"),s=Object.assign({},e.headers),o=u(e,["method","baseUrl","url","headers","request","mediaType"]),n=function(e){let t=e.match(a);return t?t.map(l).reduce((e,t)=>e.concat(t),[]):[]}(i);i=({expand:m.bind(null,i)}).expand(o),/^http/.test(i)||(i=e.baseUrl+i);let c=u(o,Object.keys(e).filter(e=>n.includes(e)).concat("baseUrl"));if(!/application\/octet-stream/i.test(s.accept)&&(e.mediaType.format&&(s.accept=s.accept.split(/,/).map(t=>t.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,`application/vnd$1$2.${e.mediaType.format}`)).join(",")),i.endsWith("/graphql")&&e.mediaType.previews?.length)){let t=s.accept.match(/[\w-]+(?=-preview)/g)||[];s.accept=t.concat(e.mediaType.previews).map(t=>{let r=e.mediaType.format?`.${e.mediaType.format}`:"+json";return`application/vnd.github.${t}-preview${r}`}).join(",")}return["GET","HEAD"].includes(r)?i=function(e,t){let r=/\?/.test(e)?"&":"?",i=Object.keys(t);return 0===i.length?e:e+r+i.map(e=>"q"===e?"q="+t.q.split("+").map(encodeURIComponent).join("+"):`${e}=${encodeURIComponent(t[e])}`).join("&")}(i,c):"data"in c?t=c.data:Object.keys(c).length&&(t=c),s["content-type"]||void 0===t||(s["content-type"]="application/json; charset=utf-8"),["PATCH","PUT"].includes(r)&&void 0===t&&(t=""),Object.assign({method:r,url:i,headers:s},void 0!==t?{body:t}:null,e.request?{request:e.request}:null)}function y(e,t,r){return f(n(e,t,r))}var v=function e(t,r){let i=n(t,r);return Object.assign(y.bind(null,i),{DEFAULTS:i,defaults:e.bind(null,i),merge:n.bind(null,i),parse:f})}(null,{method:"GET",baseUrl:"https://api.github.com",headers:{accept:"application/vnd.github.v3+json","user-agent":s},mediaType:{format:""}});let RequestError=class RequestError extends Error{name;status;request;response;constructor(e,t,r){super(e),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name="HttpError",this.status=t,"response"in r&&(this.response=r.response);let i=Object.assign({},r.request);r.request.headers.authorization&&(i.headers=Object.assign({},r.request.headers,{authorization:r.request.headers.authorization.replace(/ .*$/," [REDACTED]")})),i.url=i.url.replace(/\bclient_secret=\w+/g,"client_secret=[REDACTED]").replace(/\baccess_token=\w+/g,"access_token=[REDACTED]"),this.request=i}};function w(e){let t,r;let i=e.request&&e.request.log?e.request.log:console,s=e.request?.parseSuccessResponseBody!==!1;((function(e){if("object"!=typeof e||null===e||"[object Object]"!==Object.prototype.toString.call(e))return!1;let t=Object.getPrototypeOf(e);if(null===t)return!0;let r=Object.prototype.hasOwnProperty.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&Function.prototype.call(r)===Function.prototype.call(e)})(e.body)||Array.isArray(e.body))&&(e.body=JSON.stringify(e.body));let o={},{fetch:n}=globalThis;if(e.request?.fetch&&(n=e.request.fetch),!n)throw Error("fetch is not set. Please pass a fetch implementation as new Octokit({ request: { fetch }}). Learn more at https://github.com/octokit/octokit.js/#fetch-missing");return n(e.url,{method:e.method,body:e.body,redirect:e.request?.redirect,headers:Object.fromEntries(Object.entries(e.headers).map(([e,t])=>[e,String(t)])),signal:e.request?.signal,...e.body&&{duplex:"half"}}).then(async n=>{for(let e of(r=n.url,t=n.status,n.headers))o[e[0]]=e[1];if("deprecation"in o){let t=o.link&&o.link.match(/<([^>]+)>; rel="deprecation"/),r=t&&t.pop();i.warn(`[@octokit/request] "${e.method} ${e.url}" is deprecated. It is scheduled to be removed on ${o.sunset}${r?`. See ${r}`:""}`)}if(204!==t&&205!==t){if("HEAD"===e.method){if(t<400)return;throw new RequestError(n.statusText,t,{response:{url:r,status:t,headers:o,data:void 0},request:e})}if(304===t)throw new RequestError("Not modified",t,{response:{url:r,status:t,headers:o,data:await b(n)},request:e});if(t>=400){let i;let s=await b(n);throw new RequestError("string"==typeof s?s:(i="documentation_url"in s?` - ${s.documentation_url}`:"","message"in s)?Array.isArray(s.errors)?`${s.message}: ${s.errors.map(JSON.stringify).join(", ")}${i}`:`${s.message}${i}`:`Unknown error: ${JSON.stringify(s)}`,t,{response:{url:r,status:t,headers:o,data:s},request:e})}return s?await b(n):n.body}}).then(e=>({status:t,url:r,headers:o,data:e})).catch(t=>{if(t instanceof RequestError||"AbortError"===t.name)throw t;let r=t.message;throw"TypeError"===t.name&&"cause"in t&&(t.cause instanceof Error?r=t.cause.message:"string"==typeof t.cause&&(r=t.cause)),new RequestError(r,500,{request:e})})}async function b(e){let t=e.headers.get("content-type");return/application\/json/.test(t)?e.json().catch(()=>e.text()).catch(()=>""):!t||/^text\/|charset=utf-8$/.test(t)?e.text():e.arrayBuffer()}var R=function e(t,r){let i=t.defaults(r);return Object.assign(function(t,r){let s=i.merge(t,r);if(!s.request||!s.request.hook)return w(i.parse(s));let o=(e,t)=>w(i.parse(i.merge(e,t)));return Object.assign(o,{endpoint:i,defaults:e.bind(null,i)}),s.request.hook(o,s)},{endpoint:i,defaults:e.bind(null,i)})}(v,{headers:{"user-agent":`octokit-request.js/0.0.0-development ${i()}`}}),P=class extends Error{constructor(e,t,r){super(`Request failed due to following response errors:
`+r.errors.map(e=>` - ${e.message}`).join("\n")),this.request=e,this.headers=t,this.response=r,this.errors=r.errors,this.data=r.data,Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}name="GraphqlResponseError";errors;data},$=["method","baseUrl","url","headers","request","query","mediaType"],C=["query","method","url"],q=/\/api\/v3\/?$/,S=function e(t,r){let i=t.defaults(r);return Object.assign((e,t)=>(function(e,t,r){if(r){if("string"==typeof t&&"query"in r)return Promise.reject(Error('[@octokit/graphql] "query" cannot be used as variable name'));for(let e in r)if(C.includes(e))return Promise.reject(Error(`[@octokit/graphql] "${e}" cannot be used as variable name`))}let i="string"==typeof t?Object.assign({query:t},r):t,s=Object.keys(i).reduce((e,t)=>($.includes(t)?e[t]=i[t]:(e.variables||(e.variables={}),e.variables[t]=i[t]),e),{}),o=i.baseUrl||e.endpoint.DEFAULTS.baseUrl;return q.test(o)&&(s.url=o.replace(q,"/api/graphql")),e(s).then(e=>{if(e.data.errors){let t={};for(let r of Object.keys(e.headers))t[r]=e.headers[r];throw new P(s,t,e.data)}return e.data.data})})(i,e,t),{defaults:e.bind(null,i),endpoint:i.endpoint})}(R,{headers:{"user-agent":`octokit-graphql.js/0.0.0-development ${i()}`},method:"POST",url:"/graphql"}),A=r(1398),G=r(3459),I=r(7372),E=r(8803),U=r(304),D=r(6645),F=r(4862),k=r(3536),x=r(4832),H=r(6707),_=r(4026),B=r(3916),O=r(3446),M=r(937),T=r(3166),j=r(4766),z=r(1116),L=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,N=(e,t,r,i)=>{for(var s,o=i>1?void 0:i?Q(t,r):t,n=e.length-1;n>=0;n--)(s=e[n])&&(o=(i?s(t,r,o):s(o))||o);return i&&o&&L(t,r,o),o};let V=Object.freeze({values:[]}),Y=Object.freeze({ranges:[]}),W=`
closed
closedAt
createdAt
id
number
state
title
updatedAt
url
`,J=`
${W}
author {
	login
	avatarUrl(size: $avatarSize)
	url
}
baseRefName
baseRefOid
headRefName
headRefOid
headRepository {
	name
	owner {
		login
	}
	url
}
isCrossRepository
mergedAt
permalink
repository {
	isFork
	name
	owner {
		login
	}
	url
	viewerPermission
}
`,K=`
${J}
additions
assignees(first: 10) {
	nodes {
		login
		avatarUrl(size: $avatarSize)
		url
	}
}
checksUrl
deletions
isDraft
mergeable
mergedBy {
	login
}
reviewDecision
latestReviews(first: 10) {
	nodes {
		author {
			login
			avatarUrl(size: $avatarSize)
			url
		}
		state
	}
}
reviewRequests(first: 10) {
	nodes {
		asCodeOwner
		id
		requestedReviewer {
			... on User {
				login
				avatarUrl(size: $avatarSize)
				url
			}
		}
	}
}
statusCheckRollup {
	state
}
totalCommentsCount
viewerCanUpdate
`,Z=`
${W}
assignees(first: 100) {
	nodes {
		login
		url
		avatarUrl(size: $avatarSize)
	}
}
author {
	login
	avatarUrl
	url
}
comments {
	totalCount
}
labels(first: 20) {
	nodes {
		color
		name
	}
}
reactions(content: THUMBS_UP) {
	totalCount
}
repository {
	name
	owner {
		login
	}
	viewerPermission
}
`;let GitHubApi=class GitHubApi{_onDidReauthenticate=new A.EventEmitter;get onDidReauthenticate(){return this._onDidReauthenticate.event}_disposable;constructor(e){this._disposable=x.H.onDidChangeAny(e=>{(x.H.changedCore(e,["http.proxy","http.proxyStrictSSL"])||x.H.changed(e,["outputLevel","proxy"]))&&this.resetCaches()})}dispose(){this._disposable.dispose()}resetCaches(){this._proxyAgent=null,this._defaults.clear(),this._enterpriseVersions.clear()}_proxyAgent=null;get proxyAgent(){if(!I.HZ)return null===this._proxyAgent&&(this._proxyAgent=(0,G.cQ)()),this._proxyAgent}async getCurrentAccount(e,t,r){let i=(0,O.dQ)();try{let s=`query getCurrentAccount($avatarSize: Int) {
	viewer {
		name
		email
		login
		avatarUrl(size: $avatarSize)
	}
}`,o=await this.graphql(e,t,s,{...r},i);if(o?.viewer==null)return;return{provider:e,name:o.viewer.name??void 0,email:o.viewer.email??void 0,avatarUrl:!o.viewer.avatarUrl||X(r)?o.viewer.avatarUrl??void 0:o.viewer.email&&r?.baseUrl!=null?await this.createEnterpriseAvatarUrl(e,t,r.baseUrl,o.viewer.email,r.avatarSize):void 0,username:o.viewer.login??void 0}}catch(t){if(t instanceof E.g3)return;throw this.handleException(t,e,i)}}async getAccountForCommit(e,t,r,i,s,o){let n=(0,O.dQ)();try{let a=`query getAccountForCommit(
	$owner: String!
	$repo: String!
	$ref: GitObjectID!
	$avatarSize: Int
) {
	repository(name: $repo, owner: $owner) {
		object(oid: $ref) {
			... on Commit {
				author {
					name
					email
					avatarUrl(size: $avatarSize)
					user {
						login
					}
				}
			}
		}
	}
}`,l=await this.graphql(e,t,a,{...o,owner:r,repo:i,ref:s},n),u=l?.repository?.object?.author;if(null==u)return;return{provider:e,name:u.name??void 0,email:u.email??void 0,avatarUrl:!u.avatarUrl||X(o)?u.avatarUrl??void 0:u.email&&o?.baseUrl!=null?await this.createEnterpriseAvatarUrl(e,t,o.baseUrl,u.email,o.avatarSize):void 0,username:u.user?.login??void 0}}catch(t){if(t instanceof E.g3)return;throw this.handleException(t,e,n)}}async getAccountForEmail(e,t,r,i,s,o){let n=(0,O.dQ)();try{let a=`query getAccountForEmail(
	$emailQuery: String!
	$avatarSize: Int
) {
	search(type: USER, query: $emailQuery, first: 1) {
		nodes {
			... on User {
				name
				email
				avatarUrl(size: $avatarSize)
				login
			}
		}
	}
}`,l=await this.graphql(e,t,a,{...o,owner:r,repo:i,emailQuery:`in:email ${s}`},n),u=l?.search?.nodes?.[0];if(null==u)return;return{provider:e,name:u.name??void 0,email:u.email??void 0,avatarUrl:!u.avatarUrl||X(o)?u.avatarUrl??void 0:u.email&&o?.baseUrl!=null?await this.createEnterpriseAvatarUrl(e,t,o.baseUrl,u.email,o.avatarSize):void 0,username:u.login??void 0}}catch(t){if(t instanceof E.g3)return;throw this.handleException(t,e,n)}}async getDefaultBranch(e,t,r,i,s){let o=(0,O.dQ)();try{let n=`query getDefaultBranch(
	$owner: String!
	$repo: String!
) {
	repository(name: $repo, owner: $owner) {
		defaultBranchRef {
			name
		}
	}
}`,a=await this.graphql(e,t,n,{...s,owner:r,repo:i},o),l=a?.repository?.defaultBranchRef?.name??void 0;if(null==l)return;return{provider:e,name:l}}catch(t){if(t instanceof E.g3)return;throw this.handleException(t,e,o)}}async getIssueOrPullRequest(e,t,r,i,s,o){let n=(0,O.dQ)();try{let a=`query getIssueOrPullRequest(
	$owner: String!
	$repo: String!
	$number: Int!
) {
	repository(name: $repo, owner: $owner) {
		issueOrPullRequest(number: $number) {
			__typename
			... on Issue {
				${W}
			}
			... on PullRequest {
				${W}
			}
		}
	}
}`,l=await this.graphql(e,t,a,{...o,owner:r,repo:i,number:s},n),u=l?.repository?.issueOrPullRequest;if(null==u)return;return{provider:e,type:"PullRequest"===u.__typename?"pullrequest":"issue",id:String(u.number),nodeId:u.id,createdDate:new Date(u.createdAt),updatedDate:new Date(u.updatedAt),title:u.title,closed:u.closed,closedDate:null==u.closedAt?void 0:new Date(u.closedAt),url:u.url,state:(0,z.fromGitHubIssueOrPullRequestState)(u.state)}}catch(t){if(t instanceof E.g3)return;throw this.handleException(t,e,n)}}async getPullRequest(e,t,r,i,s,o){let n=(0,O.dQ)();try{let a=`query getPullRequest(
	$owner: String!
	$repo: String!
	$number: Int!
	$avatarSize: Int
) {
	repository(name: $repo, owner: $owner) {
		pullRequest(number: $number) {
			${K}
		}
	}
}`,l=await this.graphql(e,t,a,{...o,owner:r,repo:i,number:s},n);if(l?.repository?.pullRequest==null)return;return(0,z.fromGitHubPullRequestLite)(l.repository.pullRequest,e)}catch(t){if(t instanceof E.g3)return;throw this.handleException(t,e,n)}}async getPullRequestForBranch(e,t,r,i,s,o){let n=(0,O.dQ)();try{let a=`query getPullRequestForBranch(
	$owner: String!
	$repo: String!
	$branch: String!
	$limit: Int!
	$include: [PullRequestState!]
	$avatarSize: Int
) {
	repository(name: $repo, owner: $owner) {
		ref(qualifiedName: $branch) {
			associatedPullRequests(first: $limit, orderBy: {field: UPDATED_AT, direction: DESC}, states: $include) {
				nodes {
					${J}
				}
			}
		}
	}
}`,l=await this.graphql(e,t,a,{...o,owner:r,repo:i,branch:`refs/heads/${s}`,limit:10},n),u=l?.repository?.ref?.associatedPullRequests?.nodes?.filter(e=>null!=e&&(!e.repository.isFork||e.repository.owner.login===r));if(null==u||0===u.length)return;return u.length>1&&u.sort((e,t)=>(e.repository.owner.login===r?-1:1)-(t.repository.owner.login===r?-1:1)||("OPEN"===e.state?-1:1)-("OPEN"===t.state?-1:1)||new Date(t.updatedAt).getTime()-new Date(e.updatedAt).getTime()),(0,z.fromGitHubPullRequestLite)(u[0],e)}catch(t){if(t instanceof E.g3)return;throw this.handleException(t,e,n)}}async getPullRequestForCommit(e,t,r,i,s,o,n){let a=(0,O.dQ)();try{let l=`query getPullRequestForCommit(
	$owner: String!
	$repo: String!
	$ref: GitObjectID!
	$avatarSize: Int
) {
	repository(name: $repo, owner: $owner) {
		object(oid: $ref) {
			... on Commit {
				associatedPullRequests(first: 2, orderBy: {field: UPDATED_AT, direction: DESC}) {
					nodes {
						${J}
					}
				}
			}
		}
	}
}`,u=await this.graphql(e,t,l,{...o,owner:r,repo:i,ref:s},a,n),c=u?.repository?.object?.associatedPullRequests?.nodes?.filter(e=>null!=e&&(!e.repository.isFork||e.repository.owner.login===r));if(null==c||0===c.length)return;return c.length>1&&c.sort((e,t)=>(e.repository.owner.login===r?-1:1)-(t.repository.owner.login===r?-1:1)||("MERGED"===e.state?-1:1)-("MERGED"===t.state?-1:1)||new Date(t.updatedAt).getTime()-new Date(e.updatedAt).getTime()),(0,z.fromGitHubPullRequestLite)(c[0],e)}catch(t){if(t instanceof E.g3)return;throw this.handleException(t,e,a)}}async getRepositoryMetadata(e,t,r,i,s,o){let n=(0,O.dQ)();try{let a=`query getRepositoryMetadata(
	$owner: String!
	$repo: String!
) {
	repository(name: $repo, owner: $owner) {
		owner {
			login
		}
		name
		parent {
			owner {
				login
			}
			name
		}
	}
}`,l=await this.graphql(e,t,a,{...s,owner:r,repo:i},n,o),u=l?.repository??void 0;if(null==u)return;return{provider:e,owner:u.owner.login,name:u.name,isFork:null!=u.parent,parent:null!=u.parent?{owner:u.parent.owner.login,name:u.parent.name}:void 0}}catch(t){if(t instanceof E.g3)return;throw this.handleException(t,e,n)}}async getBlame(e,t,r,i,s){let o=(0,O.dQ)();try{let n=`query getBlameRanges(
	$owner: String!
	$repo: String!
	$ref: String!
	$path: String!
) {
	viewer { name }
	repository(owner: $owner, name: $repo) {
		object(expression: $ref) {
			...on Commit {
				blame(path: $path) {
					ranges {
						startingLine
						endingLine
						commit {
							oid
							parents(first: 3) { nodes { oid } }
							message
							additions
							changedFiles
							deletions
							author {
								avatarUrl
								date
								email
								name
							}
							committer {
								date
								email
								name
							}
						}
					}
				}
			}
		}
	}
}`,a=await this.graphql(void 0,e,n,{owner:t,repo:r,ref:i,path:s},o);if(null==a)return Y;let l=a.repository?.object?.blame?.ranges;if(null==l||0===l.length)return{ranges:[],viewer:a.viewer?.name};return{ranges:l,viewer:a.viewer?.name}}catch(e){if(e instanceof E.g3)return Y;throw this.handleException(e,void 0,o)}}async getBranches(e,t,r,i){let s=(0,O.dQ)();try{let o=`query getBranches(
	$owner: String!
	$repo: String!
	$branchQuery: String
	$cursor: String
	$limit: Int = 100
) {
	repository(owner: $owner, name: $repo) {
		refs(query: $branchQuery, refPrefix: "refs/heads/", first: $limit, after: $cursor) {
			pageInfo {
				endCursor
				hasNextPage
			}
			nodes {
				name
				target {
					oid
					...on Commit {
						authoredDate
						committedDate
					}
				}
			}
		}
	}
}`,n=await this.graphql(void 0,e,o,{owner:t,repo:r,branchQuery:i?.query,cursor:i?.cursor,limit:Math.min(100,i?.limit??100)},s);if(null==n)return V;let a=n.repository?.refs;if(null==a)return V;return{paging:{cursor:a.pageInfo.endCursor,more:a.pageInfo.hasNextPage},values:a.nodes}}catch(e){if(e instanceof E.g3)return V;throw this.handleException(e,void 0,s)}}async getCommit(e,t,r,i){let s=(0,O.dQ)();try{let o=await this.request(void 0,e,"GET /repos/{owner}/{repo}/commits/{ref}",{owner:t,repo:r,ref:i},s),n=o?.data;if(null==n)return;let{commit:a}=n;return{oid:n.sha,parents:{nodes:n.parents.map(e=>({oid:e.sha}))},message:a.message,additions:n.stats?.additions,changedFiles:n.files?.length,deletions:n.stats?.deletions,author:{avatarUrl:n.author?.avatar_url??void 0,date:a.author?.date??new Date().toString(),email:a.author?.email??void 0,name:a.author?.name??""},committer:{date:a.committer?.date??new Date().toString(),email:a.committer?.email??void 0,name:a.committer?.name??""},files:n.files}}catch(e){if(e instanceof E.g3)return;throw this.handleException(e,void 0,s)}}async getCommitForFile(e,t,r,i,s){if((0,D.HH)(i))return this.getCommit(e,t,r,i);let o=await this.getCommits(e,t,r,i,{limit:1,path:s});if(0!==o.values.length)return{...await this.getCommit(e,t,r,o.values[0].oid)??o.values[0],viewer:o.viewer}}async getCommitBranches(e,t,r,i,s,o){let n=(0,O.dQ)();try{let a=`query getCommitBranches(
	$owner: String!
	$repo: String!
	$since: GitTimestamp!
	$until: GitTimestamp!
) {
	repository(owner: $owner, name: $repo) {
		refs(first: 20, refPrefix: "refs/heads/") {
			nodes {
				name
				target {
					... on Commit {
						history(first: ${"contains"===s?10:1}, since: $since until: $until) {
							nodes { oid }
						}
					}
				}
			}
		}
	}
}`,l=await this.graphql(void 0,e,a,{owner:t,repo:r,since:o?.toISOString(),until:o?.toISOString()},n),u=l?.repository?.refs?.nodes;if(null==u)return[];let c=[];for(let e of u)for(let t of e.target.history.nodes)if(i.includes(t.oid)){c.push(e.name);break}return c}catch(e){if(e instanceof E.g3)return[];throw this.handleException(e,void 0,n)}}async getCommitCount(e,t,r,i){let s=(0,O.dQ)();try{let o=`query getCommitCount(
	$owner: String!
	$repo: String!
	$ref: String!
) {
	repository(owner: $owner, name: $repo) {
		ref(qualifiedName: $ref) {
			target {
				... on Commit {
					history(first: 1) {
						totalCount
					}
				}
			}
		}
	}
}`,n=await this.graphql(void 0,e,o,{owner:t,repo:r,ref:i},s);return n?.repository?.ref?.target.history.totalCount}catch(e){if(e instanceof E.g3)return;throw this.handleException(e,void 0,s)}}async getCommitOnBranch(e,t,r,i,s,o,n){let a=(0,O.dQ)();try{let l=`query getCommitOnBranch(
	$owner: String!
	$repo: String!
	$ref: String!
	$since: GitTimestamp!
	$until: GitTimestamp!
) {
	repository(owner: $owner, name: $repo) {
		ref(qualifiedName: $ref) {
			target {
				... on Commit {
					history(first: ${"contains"===o?100:1}, since: $since until: $until) {
						nodes { oid }
					}
				}
			}
		}
	}
}`,u=await this.graphql(void 0,e,l,{owner:t,repo:r,ref:`refs/heads/${i}`,since:n?.toISOString(),until:n?.toISOString()},a),c=u?.repository?.ref.target.history.nodes;if(null==c)return[];let d=[];for(let e of c)if(s.includes(e.oid)){d.push(i);break}return d}catch(e){if(e instanceof E.g3)return[];throw this.handleException(e,void 0,a)}}async getCommits(e,t,r,i,s){let o=(0,O.dQ)();if(s?.limit===1&&s?.path==null)return this.getCommitsCoreSingle(e,t,r,i);try{let n;let a=`query getCommits(
	$owner: String!
	$repo: String!
	$ref: String!
	$path: String
	$author: CommitAuthor
	$after: String
	$before: String
	$limit: Int = 100
	$since: GitTimestamp
	$until: GitTimestamp
) {
	viewer { name }
	repository(name: $repo, owner: $owner) {
		object(expression: $ref) {
			... on Commit {
				history(first: $limit, author: $author, path: $path, after: $after, before: $before, since: $since, until: $until) {
					pageInfo {
						startCursor
						endCursor
						hasNextPage
						hasPreviousPage
					}
					nodes {
						... on Commit {
							oid
							message
							parents(first: 3) { nodes { oid } }
							additions
							changedFiles
							deletions
							author {
								avatarUrl
								date
								email
								name
							}
							committer {
								 date
								 email
								 name
							 }
						}
					}
				}
			}
		}
	}
}`;if(s?.authors!=null){if(1===s.authors.length){let[e]=s.authors;n={id:e.id,emails:e.email?[e.email]:void 0}}else{let e=s.authors.filter(e=>e.email).map(e=>e.email);n=e.length?{emails:e}:void 0}}let l=await this.graphql(void 0,e,a,{owner:t,repo:r,ref:i,after:s?.after,before:s?.before,path:s?.path,author:n,limit:Math.min(100,s?.limit??100),since:"string"==typeof s?.since?s?.since:s?.since?.toISOString(),until:"string"==typeof s?.until?s?.until:s?.until?.toISOString()},o),u=l?.repository?.object?.history;if(null==u)return V;return{paging:null!=u.pageInfo.endCursor?{cursor:u.pageInfo.endCursor??void 0,more:u.pageInfo.hasNextPage}:void 0,values:u.nodes,viewer:l?.viewer.name}}catch(e){if(e instanceof E.g3)return V;throw this.handleException(e,void 0,o)}}async getCommitsCoreSingle(e,t,r,i){let s=(0,O.dQ)();try{let o=`query getCommit(
	$owner: String!
	$repo: String!
	$ref: String!
) {
	viewer { name }
	repository(name: $repo owner: $owner) {
		object(expression: $ref) {
			...on Commit {
				oid
				parents(first: 3) { nodes { oid } }
				message
				additions
				changedFiles
				deletions
				author {
					avatarUrl
					date
					email
					name
				}
				committer {
					date
					email
					name
				}
			}
		}
	}
}`,n=await this.graphql(void 0,e,o,{owner:t,repo:r,ref:i},s);if(null==n)return V;let a=n.repository?.object;return null!=a?{values:[a],viewer:n.viewer.name}:V}catch(e){if(e instanceof E.g3)return V;throw this.handleException(e,void 0,s)}}async getCommitRefs(e,t,r,i,s){let o=(0,O.dQ)();try{let n=`query getCommitRefs(
	$owner: String!
	$repo: String!
	$ref: String!
	$after: String
	$before: String
	$first: Int
	$last: Int
	$path: String
	$since: GitTimestamp
	$until: GitTimestamp
) {
	repository(name: $repo, owner: $owner) {
		object(expression: $ref) {
			... on Commit {
				history(first: $first, last: $last, path: $path, since: $since, until: $until, after: $after, before: $before) {
					pageInfo { startCursor, endCursor, hasNextPage, hasPreviousPage }
					totalCount
					nodes { oid }
				}
			}
		}
	}
}`,a=await this.graphql(void 0,e,n,{owner:t,repo:r,ref:i,path:s?.path,first:s?.first,last:s?.last,after:s?.after,before:s?.before,since:s?.since,until:s?.until},o),l=a?.repository?.object?.history;if(null==l)return;return{pageInfo:l.pageInfo,totalCount:l.totalCount,values:l.nodes}}catch(e){if(e instanceof E.g3)return;throw this.handleException(e,void 0,o)}}async getCommitTags(e,t,r,i,s){let o=(0,O.dQ)();try{let n=`query getCommitTags(
	$owner: String!
	$repo: String!
	$since: GitTimestamp!
	$until: GitTimestamp!
) {
	repository(owner: $owner, name: $repo) {
		refs(first: 20, refPrefix: "refs/tags/") {
			nodes {
				name
				target {
					... on Commit {
						history(first: 3, since: $since until: $until) {
							nodes { oid }
						}
					}
				}
			}
		}
	}
}`,a=await this.graphql(void 0,e,n,{owner:t,repo:r,since:s.toISOString(),until:s.toISOString()},o),l=a?.repository?.refs?.nodes;if(null==l)return[];let u=[];for(let e of l)for(let t of e.target.history.nodes)if(t.oid===i){u.push(e.name);break}return u}catch(e){if(e instanceof E.g3)return[];throw this.handleException(e,void 0,o)}}async getNextCommitRefs(e,t,r,i,s,o){let n;let a=await this.getCommitDate(e,t,r,o);if(null==a)return[];let l=await this.getCommitRefs(e,t,r,i,{path:s,first:1,since:a});if(null==l)return[];let u=`${l.pageInfo.startCursor.split(" ",1)[0]} ${l.totalCount}`;if([,n]=u.split(" ",2),n=Math.min(parseInt(n,10),5),null==(l=await this.getCommitRefs(e,t,r,i,{path:s,last:n,before:u})))return[];let c=[];for(let{oid:e}of l.values){if(e===o)break;c.push(e)}return c.reverse()}async getCommitDate(e,t,r,i){let s=(0,O.dQ)();try{let o=`query getCommitDate(
	$owner: String!
	$repo: String!
	$sha: GitObjectID!
) {
	repository(name: $repo, owner: $owner) {
		object(oid: $sha) {
			... on Commit { committer { date } }
		}
	}
}`,n=await this.graphql(void 0,e,o,{owner:t,repo:r,sha:i},s);return n?.repository?.object?.committer.date}catch(e){if(e instanceof E.g3)return;throw this.handleException(e,void 0,s)}}async getContributors(e,t,r){let i=(0,O.dQ)();try{let s=await this.request(void 0,e,"GET /repos/{owner}/{repo}/contributors",{owner:t,repo:r,per_page:100},i),o=s?.data;if(null==o)return[];return s.data}catch(e){if(e instanceof E.g3)return[];throw this.handleException(e,void 0,i)}}async getDefaultBranchName(e,t,r){let i=(0,O.dQ)();try{let s=`query getDefaultBranch(
	$owner: String!
	$repo: String!
) {
	repository(owner: $owner, name: $repo) {
		defaultBranchRef {
			name
		}
	}
}`,o=await this.graphql(void 0,e,s,{owner:t,repo:r},i);if(null==o)return;return o.repository?.defaultBranchRef?.name??void 0}catch(e){if(e instanceof E.g3)return;throw this.handleException(e,void 0,i)}}async getCurrentUser(e,t,r){let i=(0,O.dQ)();try{let s=`query getCurrentUser(
	$owner: String!
	$repo: String!
) {
	viewer { name, email, login, id }
	repository(owner: $owner, name: $repo) { viewerPermission }
}`,o=await this.graphql(void 0,e,s,{owner:t,repo:r},i);if(null==o)return;return{name:o.viewer?.name,email:o.viewer?.email,username:o.viewer?.login,id:o.viewer?.id}}catch(e){if(e instanceof E.g3)return;throw this.handleException(e,void 0,i)}}async getRepositoryVisibility(e,t,r){let i=(0,O.dQ)();try{let s=`query getRepositoryVisibility(
	$owner: String!
	$repo: String!
) {
	repository(owner: $owner, name: $repo) {
		visibility
	}
}`,o=await this.graphql(void 0,e,s,{owner:t,repo:r},i);if(o?.repository?.visibility==null)return;return"PUBLIC"===o.repository.visibility?"public":"private"}catch(e){if(e instanceof E.g3)return;throw this.handleException(e,void 0,i)}}async getTags(e,t,r,i){let s=(0,O.dQ)();try{let o=`query getTags(
	$owner: String!
	$repo: String!
	$tagQuery: String
	$cursor: String
	$limit: Int = 100
) {
	repository(owner: $owner, name: $repo) {
		refs(query: $tagQuery, refPrefix: "refs/tags/", first: $limit, after: $cursor, orderBy: { field: TAG_COMMIT_DATE, direction: DESC }) {
			pageInfo {
				endCursor
				hasNextPage
			}
			nodes {
				name
				target {
					oid
					...on Tag {
						message
						tagger { date }
						target {
					...on Commit {
								oid
						authoredDate
						committedDate
						message
					}
						}
					}
				}
			}
		}
	}
}`,n=await this.graphql(void 0,e,o,{owner:t,repo:r,tagQuery:i?.query,cursor:i?.cursor,limit:Math.min(100,i?.limit??100)},s);if(null==n)return V;let a=n.repository?.refs;if(null==a)return V;return{paging:{cursor:a.pageInfo.endCursor,more:a.pageInfo.hasNextPage},values:a.nodes}}catch(e){if(e instanceof E.g3)return V;throw this.handleException(e,void 0,s)}}async resolveReference(e,t,r,i,s){let o=(0,O.dQ)();try{if(!s){let s=`query resolveReference(
	$owner: String!
	$repo: String!
	$ref: String!
) {
	repository(owner: $owner, name: $repo) {
		object(expression: $ref) {
			oid
		}
	}
}`,n=await this.graphql(void 0,e,s,{owner:t,repo:r,ref:i},o);return n?.repository?.object?.oid??void 0}let n=`query resolveReference(
	$owner: String!
	$repo: String!
	$ref: String!
	$path: String!
) {
	repository(owner: $owner, name: $repo) {
		object(expression: $ref) {
			... on Commit {
				history(first: 1, path: $path) {
					nodes { oid }
				}
			}
		}
	}
}`,a=await this.graphql(void 0,e,n,{owner:t,repo:r,ref:i,path:s},o);return a?.repository?.object?.history.nodes?.[0]?.oid??void 0}catch(e){if(e instanceof E.g3)return;throw this.handleException(e,void 0,o)}}async searchCommits(e,t,r){let i,s,o;let n=(0,O.dQ)(),a=Math.min(100,r?.limit??100);r?.cursor!=null?([i,s,o]=r.cursor.split(" ",3),i=parseInt(i,10),s=parseInt(s,10),o=parseInt(o,10)):(i=1,s=a,o=0);try{let a=await this.request(void 0,e,"GET /search/commits",{q:t,sort:r?.sort,order:r?.order,per_page:s,page:i},n),l=a?.data;if(null==l||0===l.items.length)return;let u=l.items.map(e=>({oid:e.sha,parents:{nodes:e.parents.map(e=>({oid:e.sha}))},message:e.commit.message,author:{avatarUrl:e.author?.avatar_url??void 0,date:e.commit.author?.date??e.commit.author?.date??new Date().toString(),email:e.author?.email??e.commit.author?.email??void 0,name:e.author?.name??e.commit.author?.name??""},committer:{date:e.commit.committer?.date??e.committer?.date??new Date().toString(),email:e.committer?.email??e.commit.committer?.email??void 0,name:e.committer?.name??e.commit.committer?.name??""}})),c=o+l.items.length,d=l.incomplete_results||l.total_count>c;return{pageInfo:{startCursor:`${i} ${s} ${o}`,endCursor:d?`${i+1} ${s} ${c}`:void 0,hasPreviousPage:l.total_count>0&&i>1,hasNextPage:d},totalCount:l.total_count,values:u}}catch(e){if(e instanceof E.g3)return;throw this.handleException(e,void 0,n)}}async searchCommitShas(e,t,r){let i,s,o;let n=(0,O.dQ)(),a=Math.min(100,r?.limit??100);r?.cursor!=null?([i,s,o]=r.cursor.split(" ",3),i=parseInt(i,10),s=parseInt(s,10),o=parseInt(o,10)):(i=1,s=a,o=0);try{let a=await this.request(void 0,e,"GET /search/commits",{q:t,sort:r?.sort,order:r?.order,per_page:s,page:i},n),l=a?.data;if(null==l||0===l.items.length)return;let u=o+l.items.length,c=l.incomplete_results||l.total_count>u;return{pageInfo:{startCursor:`${i} ${s} ${o}`,endCursor:c?`${i+1} ${s} ${u}`:void 0,hasPreviousPage:l.total_count>0&&i>1,hasNextPage:c},totalCount:l.total_count,values:l.items.map(e=>({sha:e.sha,authorDate:new Date(e.commit.author.date).getTime(),committerDate:new Date(e.commit.committer?.date??e.commit.author.date).getTime()}))}}catch(e){if(e instanceof E.g3)return;throw this.handleException(e,void 0,n)}}_enterpriseVersions=new Map;async getEnterpriseVersion(e,t,r){let i=this._enterpriseVersions.get(t);if(null!=i)return i;if(null===i)return;let s=(0,O.dQ)();try{let o=await this.request(e,t,"GET /meta",r,s),n=o?.data?.installed_version;i=n?(0,j.sH)(n):null}catch(e){i=null}return this._enterpriseVersions.set(t,i),i??void 0}async graphql(e,t,r,i,s,o){try{let s;if(null!=o){if(o.isCancellationRequested)throw new E.AL;s=new AbortController,o.onCancellationRequested(()=>s.abort()),i={...i,request:{...i?.request,signal:s.signal}}}return await (0,G.Ff)(e?.getIgnoreSSLErrors()??!1,()=>this.getDefaults(t,S)(r,i))}catch(r){if(r instanceof P){switch(r.errors?.[0]?.type){case"NOT_FOUND":throw new E.g3(r);case"FORBIDDEN":throw new E.v3("github",E.R.Forbidden,r);case"RATE_LIMITED":{let e;let i=r.headers?.["x-ratelimit-reset"];throw null!=i&&Number.isNaN(e=parseInt(i,10))&&(e=void 0),new E.qc(r,t,e)}}B.Vy.isDebugging&&A.window.showErrorMessage(`GitHub request failed: ${r.errors?.[0]?.message??r.message}`)}else r instanceof RequestError||"AbortError"===r.name?this.handleRequestError(e,t,r,s):B.Vy.isDebugging&&A.window.showErrorMessage(`GitHub request failed: ${r.message}`);throw r}}async request(e,t,r,i,s,o){try{let s;if(null!=o){if(o.isCancellationRequested)throw new E.AL;s=new AbortController,o.onCancellationRequested(()=>s.abort()),i={...i,request:{...i?.request,signal:s.signal}}}return await (0,G.Ff)(e?.getIgnoreSSLErrors()??!1,()=>this.getDefaults(t,R)(r,i))}catch(r){throw r instanceof RequestError||"AbortError"===r.name?this.handleRequestError(e,t,r,s):B.Vy.isDebugging&&A.window.showErrorMessage(`GitHub request failed: ${r.message}`),r}}_defaults=new Map;getDefaults(e,t){let r=this._defaults.get(t);null==r&&(r=new Map,this._defaults.set(t,r));let i=r.get(e);return null==i&&(i=t.defaults({headers:{authorization:`token ${e}`},request:{agent:this.proxyAgent,fetch:I.HZ?(e,t)=>{if(null!=t.headers){let{"user-agent":e,...r}=t.headers;e&&(t.headers=r)}return(0,G.hd)(e,t)}:G.hd,hook:"debug"===B.Vy.logLevel||B.Vy.isDebugging?async(e,t)=>{let r=(0,M.u)(`[GITHUB] ${t.method} ${t.url}`,{log:!1});try{return await e(t)}finally{let e;try{if("string"==typeof t.query){let r=/(^[^({\n]+)/.exec(t.query);e=` ${r?.[1].trim()??t.query}`}}catch{}r?.stop({message:e})}}:void 0}}),r.set(e,i)),i}handleRequestError(e,t,r,i){if("AbortError"===r.name)throw new E.AL(r);switch(r.status){case 404:case 410:case 422:throw new E.g3(r);case 401:throw new E.v3("github",E.R.Unauthorized,r);case 403:if(r.message.includes("rate limit")){let e;let i=r.response?.headers?.["x-ratelimit-reset"];throw null!=i&&Number.isNaN(e=parseInt(i,10))&&(e=void 0),new E.qc(r,t,e)}throw new E.v3("github",E.R.Forbidden,r);case 500:B.Vy.error(r,i),null!=r.response&&(e?.trackRequestException(),(0,k.wW)(`${e?.name??"GitHub"} failed to respond and might be experiencing issues.${null==e||"github"===e.id?" Please visit the [GitHub status page](https://githubstatus.com) for more information.":""}`));return;case 502:if(B.Vy.error(r,i),r.message.includes("timeout")){e?.trackRequestException(),(0,k.lW)(e?.name??"GitHub");return}break;default:if(r.status>=400&&r.status<500)throw new E.Iz(r)}B.Vy.error(r,i),B.Vy.isDebugging&&A.window.showErrorMessage(`GitHub request failed: ${r.response?.errors?.[0]?.message??r.message}`)}handleException(e,t,r){return B.Vy.error(e,r),e instanceof E.v3&&this.showAuthenticationErrorMessage(e,t),e}async showAuthenticationErrorMessage(e,t){if(e.reason===E.R.Unauthorized||e.reason===E.R.Forbidden){let r="Reauthenticate";await A.window.showErrorMessage(`${e.message}. Would you like to try reauthenticating${e.reason===E.R.Forbidden?" to provide additional access":""}?`,r)===r&&(await t?.reauthenticate(),this.resetCaches(),this._onDidReauthenticate.fire())}else A.window.showErrorMessage(e.message)}async createEnterpriseAvatarUrl(e,t,r,i,s){s=s??16;let o=await this.getEnterpriseVersion(e,t,{baseUrl:r});if((0,j.ib)(o,">= 3.0.0")){let o;let n=(0,F.P)(i);null!=n&&A.Uri.parse(r).authority===n.authority&&(null!=n.userId?o=`${r}/enterprise/avatars/u/${encodeURIComponent(n.userId)}?s=${s}`:null!=n.login&&(o=`${r}/enterprise/avatars/${encodeURIComponent(n.login)}?s=${s}`)),null==o&&(o=`${r}/enterprise/avatars/u/e?email=${encodeURIComponent(i)}&s=${s}`);let a=await (0,G.Ff)(e?.getIgnoreSSLErrors()??!1,()=>(0,G.hd)(o,{method:"GET",headers:{Authorization:`Bearer ${t}`}}));if(a.ok){let e=(0,T.K3)(new Uint8Array(await a.arrayBuffer())),t=a.headers.get("content-type");return`data:${t};base64,${e}`}}return`https://avatars.githubusercontent.com/u/e?email=${encodeURIComponent(i)}&s=${s}`}async searchMyPullRequests(e,t,r,i){let s=(0,O.dQ)();if(x.H.get("launchpad.experimental.queryUseInvolvesFilter"))return this.searchMyInvolvedPullRequests(e,t,r,i);let o=Math.min(100,x.H.get("launchpad.experimental.queryLimit")??100);try{let n=function(t,r){return{pullRequest:(0,z.fromGitHubPullRequest)(t,e),reasons:r?[r]:[]}},a=`query searchMyPullRequests(
	$authored: String!
	$assigned: String!
	$reviewRequested: String!
	$mentioned: String!
	$avatarSize: Int
) {
	authored: search(first: ${o}, query: $authored, type: ISSUE) {
		nodes {
			...on PullRequest {
				${K}
			}
		}
	}
	assigned: search(first: ${o}, query: $assigned, type: ISSUE) {
		nodes {
			...on PullRequest {
				${K}
			}
		}
	}
	reviewRequested: search(first: ${o}, query: $reviewRequested, type: ISSUE) {
		nodes {
			...on PullRequest {
				${K}
			}
		}
	}
	mentioned: search(first: ${o}, query: $mentioned, type: ISSUE) {
		nodes {
			...on PullRequest {
				${K}
			}
		}
	}
}`,l=r?.search?.trim()??"";if(r?.user&&(l+=` user:${r.user}`),r?.repos!=null&&r.repos.length>0){let e="  repo:";l+=`${e}${r.repos.join(e)}`}let u="is:pr is:open archived:false",c=await this.graphql(e,t,a,{authored:`${l} ${u} author:@me`.trim(),assigned:`${l} ${u} assignee:@me`.trim(),reviewRequested:`${l} ${u} review-requested:@me`.trim(),mentioned:`${l} ${u} mentions:@me`.trim(),baseUrl:r?.baseUrl,avatarSize:r?.avatarSize},s,i);if(null==c)return[];return ee([...c.assigned.nodes.map(e=>n(e,"assigned")),...c.reviewRequested.nodes.map(e=>n(e,"review-requested")),...c.mentioned.nodes.map(e=>n(e,"mentioned")),...c.authored.nodes.map(e=>n(e,"authored"))],e=>e.pullRequest.url)}catch(t){throw this.handleException(t,e,s)}}async searchMyInvolvedPullRequests(e,t,r,i){let s=(0,O.dQ)(),o=Math.min(100,x.H.get("launchpad.experimental.queryLimit")??100);try{let n=function(t){let r=[];return t.author.login===h&&r.push("authored"),t.assignees.nodes.some(e=>e.login===h)&&r.push("assigned"),t.reviewRequests.nodes.some(e=>e.requestedReviewer?.login===h)&&r.push("review-requested"),0===r.length&&r.push("mentioned"),{pullRequest:(0,z.fromGitHubPullRequest)(t,e),reasons:r}},a=`query searchMyPullRequests(
	$search: String!
	$avatarSize: Int
) {
	search(first: ${o}, query: $search, type: ISSUE) {
		issueCount
		nodes {
			...on PullRequest {
				${K}
			}
		}
	}
	viewer {
		login
	}
}`,l=r?.search?.trim()??"";r?.user&&(l+=` user:${r.user}`),r?.repos?.length&&(l+=` repo:${r.repos.join(" repo:")}`);let u=x.H.get("launchpad.ignoredRepositories")??[];u.length&&(l+=` -repo:${u.join(" -repo:")}`);let c=x.H.get("launchpad.ignoredOrganizations")??[];c.length&&(l+=` -org:${c.join(" -org:")}`);let d=await this.graphql(e,t,a,{search:`is:open is:pr involves:@me archived:false ${l}`.trim(),baseUrl:r?.baseUrl,avatarSize:r?.avatarSize},s,i);if(null==d)return[];let h=d.viewer.login;return d.search.nodes.map(e=>n(e))}catch(t){throw this.handleException(t,e,s)}}async searchMyIssues(e,t,r,i){let s=(0,O.dQ)(),o=`query searchMyIssues(
				$authored: String!
				$assigned: String!
				$mentioned: String!
				$avatarSize: Int
			) {
				authored: search(first: 100, query: $authored, type: ISSUE) {
					nodes {
						... on Issue {
							${Z}
						}
					}
				}
				assigned: search(first: 100, query: $assigned, type: ISSUE) {
					nodes {
						... on Issue {
							${Z}
						}
					}
				}
				mentioned: search(first: 100, query: $mentioned, type: ISSUE) {
					nodes {
						... on Issue {
							${Z}
						}
					}
				}
			}`,n=r?.search?.trim()??"";if(r?.user&&(n+=` user:${r.user}`),r?.repos!=null&&r.repos.length>0){let e="  repo:";n+=`${e}${r.repos.join(e)}`}let a="type:issue is:open archived:false";try{let l=function(t,r){return{issue:(0,z.fromGitHubIssue)(t,e),reasons:r?[r]:[]}},u=await this.graphql(e,t,o,{authored:`${n} ${a} author:@me`.trim(),assigned:`${n} ${a} assignee:@me`.trim(),mentioned:`${n} ${a} mentions:@me`.trim(),baseUrl:r?.baseUrl,avatarSize:r?.avatarSize},s,i);if(null==u)return[];return ee([...u.assigned.nodes.map(e=>l(e,"assigned")),...u.mentioned.nodes.map(e=>l(e,"mentioned")),...u.authored.nodes.map(e=>l(e,"authored"))],e=>e.issue.url)}catch(t){throw this.handleException(t,e,s)}}async searchPullRequests(e,t,r,i){let s=(0,O.dQ)();try{let o=`query searchPullRequests(
	$searchQuery: String!
	$avatarSize: Int
) {
	search(first: 100, query: $searchQuery, type: ISSUE) {
		nodes {
			...on PullRequest {
				${K}
			}
		}
	}
}`,n=r?.search?.trim()??"";if(r?.user&&(n+=` user:${r.user}`),r?.repos!=null&&r.repos.length>0){let e=" repo:";n+=`${e}${r.repos.join(e)}`}let a=await this.graphql(e,t,o,{searchQuery:`is:pr is:open archived:false ${n.trim()}`,baseUrl:r?.baseUrl,avatarSize:r?.avatarSize},s,i);if(null==a)return[];return a.nodes.map(t=>(0,z.fromGitHubPullRequest)(t,e))}catch(t){throw this.handleException(t,e,s)}}async mergePullRequest(e,t,r,i,s,o){let n;let a=(0,O.dQ)();switch(s?.mergeMethod){case U.e0.Merge:n="MERGE";break;case U.e0.Rebase:n="REBASE";break;case U.e0.Squash:n="SQUASH"}try{let l=`mutation mergePullRequest(
	$id: ID!
	$expectedSourceSha: GitObjectID!
	$mergeMethod: PullRequestMergeMethod
) {
	mergePullRequest(input: { pullRequestId: $id, expectedHeadOid: $expectedSourceSha, mergeMethod: $mergeMethod }) {
		pullRequest {
			id
		}
	}
}`,u=await this.graphql(e,t,l,{id:r,expectedSourceSha:i,mergeMethod:n,baseUrl:s?.baseUrl},a,o);return u?.pullRequest?.id===r}catch(t){throw this.handleException(t,e,a)}}};function X(e){return e?.baseUrl==null||"https://api.github.com"===e.baseUrl}function ee(e,t){return[...(0,_.pD)(e,t,(e,t)=>(0!==t.reasons.length&&e.reasons.push(...t.reasons),e))]}N([(0,H.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"getAccountForCommit",1),N([(0,H.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"getAccountForEmail",1),N([(0,H.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"getDefaultBranch",1),N([(0,H.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"getIssueOrPullRequest",1),N([(0,H.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"getPullRequest",1),N([(0,H.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"getPullRequestForBranch",1),N([(0,H.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"getPullRequestForCommit",1),N([(0,H.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"getRepositoryMetadata",1),N([(0,H.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getBlame",1),N([(0,H.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getBranches",1),N([(0,H.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getCommit",1),N([(0,H.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getCommitForFile",1),N([(0,H.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getCommitBranches",1),N([(0,H.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getCommitCount",1),N([(0,H.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getCommitOnBranch",1),N([(0,H.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getCommits",1),N([(0,H.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getCommitRefs",1),N([(0,H.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getCommitTags",1),N([(0,H.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getNextCommitRefs",1),N([(0,H.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getContributors",1),N([(0,H.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getDefaultBranchName",1),N([(0,H.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getCurrentUser",1),N([(0,H.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getRepositoryVisibility",1),N([(0,H.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getTags",1),N([(0,H.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"resolveReference",1),N([(0,H.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"searchCommits",1),N([(0,H.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"searchCommitShas",1),N([(0,H.Yz)({args:{0:e=>e?.name,1:"<token>"}})],GitHubApi.prototype,"getEnterpriseVersion",1),N([(0,H.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"searchMyPullRequests",1),N([(0,H.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"searchMyInvolvedPullRequests",1),N([(0,H.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"searchMyIssues",1),N([(0,H.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"searchPullRequests",1),N([(0,H.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"mergePullRequest",1)},1011:(e,t,r)=>{r.r(t),r.d(t,{GitHubGitProvider:()=>GitHubGitProvider});var i,s,o=r(1398),n=r(3574),a=r(3807),l=r(6580),u=r(8803),c=r(4703),d=r(1310),h=r(7931),p=r(9102),g=r(5287),m=r(5313),f=r(4693),y=r(5248),v=r(6645),w=r(7788),b=r(9634),R=r(7736),P=r(468),$=r(7205),C=r(968),q=r(3269),S=r(4832),A=r(8973),G=r(6950),I=r(6707),E=r(4026),U=r(3916),D=r(3446),F=r(4911),k=r(3131),x=r(4125),H=r(8489);async function _(e){try{let e=o.extensions.getExtension("ms-vscode.remote-repositories")??o.extensions.getExtension("GitHub.remotehub");if(null==e)throw U.Vy.log("GitHub Repositories extension is not installed or enabled"),new u.dU("GitHub Repositories","GitHub.remotehub");return e.isActive?e.exports:await e.activate()}catch(t){if(U.Vy.error(t,"Unable to get required api from the GitHub Repositories extension"),u.dU,e)return;throw t}}var B=((i=B||{})[i.Branch=0]="Branch",i[i.RemoteBranch=1]="RemoteBranch",i[i.Tag=2]="Tag",i[i.Commit=3]="Commit",i),O=((s=O||{})[s.Branch=0]="Branch",s[s.Tag=1]="Tag",s[s.Commit=2]="Commit",s[s.PullRequest=3]="PullRequest",s[s.Tree=4]="Tree",s),M=r(1116),T=Object.defineProperty,j=Object.getOwnPropertyDescriptor,z=(e,t,r,i)=>{for(var s,o=i>1?void 0:i?j(t,r):t,n=e.length-1;n>=0;n--)(s=e[n])&&(o=(i?s(t,r,o):s(o))||o);return i&&o&&T(t,r,o),o};let L=/"/g,Q=Object.freeze([]),N=Object.freeze({values:[]}),V=Promise.resolve(void 0),Y=["repo","read:user","user:email"],W=/^[^/](?!.*\/\.)(?!.*\.\.)(?!.*\/\/)(?!.*@\{)[^\x00-\x1F\x7F ~^:?*[\\]+[^./]$/;let GitHubGitProvider=class GitHubGitProvider{constructor(e){this.container=e,this._disposables.push(this.container.events.on("git:cache:reset",e=>e.data.repoPath?this.resetCache(e.data.repoPath,...e.data.caches??Q):this.resetCaches(...e.data.caches??Q),o.authentication.onDidChangeSessions(this.onAuthenticationSessionsChanged,this)))}descriptor={id:"github",name:"GitHub",virtual:!0};supportedSchemes=new Set([a.xB.Virtual,a.xB.GitHub,a.xB.PRs]);_onDidChange=new o.EventEmitter;get onDidChange(){return this._onDidChange.event}_onDidChangeRepository=new o.EventEmitter;get onDidChangeRepository(){return this._onDidChangeRepository.event}_onDidCloseRepository=new o.EventEmitter;get onDidCloseRepository(){return this._onDidCloseRepository.event}_onDidOpenRepository=new o.EventEmitter;get onDidOpenRepository(){return this._onDidOpenRepository.event}_branchesCache=new Map;_repoInfoCache=new Map;_tagsCache=new Map;_disposables=[];dispose(){this._disposables.forEach(e=>void e.dispose())}onAuthenticationSessionsChanged(e){"github"===e.provider.id&&(this._sessionPromise=void 0,this.ensureSession(!1,!0))}onRepositoryChanged(e,t){this._branchesCache.delete(e.path),this._tagsCache.delete(e.path),this._repoInfoCache.delete(e.path),this._onDidChangeRepository.fire(t)}async discoverRepositories(e,t){if(!this.supportedSchemes.has(e.scheme))return[];try{let{remotehub:r}=await this.ensureRepositoryContext(e.toString(),!0),i=r.getVirtualWorkspaceUri(e);if(null==i)return[];return this.openRepository(void 0,i,!0,void 0,t?.silent)}catch(t){return t.message.startsWith("No provider registered with")&&(U.Vy.error(t,"No GitHub provider registered with Remote Repositories (yet); queuing pending discovery"),this._pendingDiscovery.add(e),this.ensurePendingRepositoryDiscovery()),[]}}_pendingDiscovery=new Set;_pendingTimer;ensurePendingRepositoryDiscovery(){null==this._pendingTimer&&0!==this._pendingDiscovery.size&&(this._pendingTimer=setTimeout(async()=>{try{let e=await _();for(let t of this._pendingDiscovery){if(null==e.getProvider(t)){this._pendingTimer=void 0,this.ensurePendingRepositoryDiscovery();return}this._pendingDiscovery.delete(t)}this._pendingTimer=void 0,setTimeout(()=>this._onDidChange.fire(),1),0!==this._pendingDiscovery.size&&this.ensurePendingRepositoryDiscovery()}catch{this._pendingTimer=void 0,this.ensurePendingRepositoryDiscovery()}},250))}updateContext(){(0,A.o)("gitlens:hasVirtualFolders",this.container.git.hasOpenRepositories(this.descriptor.id))}openRepository(e,t,r,i,s){return[new b.LN(this.container,this.onRepositoryChanged.bind(this),this.descriptor,e??o.workspace.getWorkspaceFolder(t),t,r,i??!o.window.state.focused,s)]}async supports(e){switch(e){case c.O.Stashes:case c.O.Worktrees:case c.O.StashOnlyStaged:return!1;default:return!0}}async visibility(e){let t=await this.getRemotes(e,{sort:!0});if(0===t.length)return["local",void 0];for await(let e of(0,k.w)(t.map(e=>this.getRemoteVisibility(e))))if("fulfilled"===e.status&&"public"===e.value[0])return["public",(0,w.U6)(e.value[1])];return["private",(0,w.U6)(t)]}async getRemoteVisibility(e){if(e.provider?.id==="github"){let{github:t,metadata:r,session:i}=await this.ensureRepositoryContext(e.repoPath);return[await t.getRepositoryVisibility(i.accessToken,r.repo.owner,r.repo.name)??"private",e]}return["private",e]}async getOpenScmRepositories(){return[]}async getScmRepository(e){}async getOrOpenScmRepository(e){}canHandlePathOrUri(e,t){if(this.supportedSchemes.has(e))return"string"==typeof t?t:t.toString()}getAbsoluteUri(e,t){if("string"==typeof t){if((0,F.bm)(t))t=o.Uri.parse(t,!0);else throw o.window.showErrorMessage(`Unable to get absolute uri between ${"string"==typeof e?e:e.toString(!0)} and ${t}; Base path '${t}' must be a uri`),Error(`Base path '${t}' must be a uri`)}if("string"==typeof e&&!(0,F.bm)(e)){let r=(0,F.Fd)(e);if(!(0,F.oP)(r))return o.Uri.joinPath(t,r)}let r=this.getRelativePath(e,t);return o.Uri.joinPath(t,r)}async getBestRevisionUri(e,t,r){return r?this.createProviderUri(e,r,t):this.createVirtualUri(e,r,t)}getRelativePath(e,t){let r;if("string"==typeof t){if((0,F.bm)(t))t=o.Uri.parse(t,!0);else throw o.window.showErrorMessage(`Unable to get relative path between ${"string"==typeof e?e:e.toString(!0)} and ${t}; Base path '${t}' must be a uri`),Error(`Base path '${t}' must be a uri`)}if("string"==typeof e){if(!(0,F.bm)(e))return e=(0,F.Fd)(e),(r=(0,F.oP)(e)&&e.startsWith(t.path)?e.slice(t.path.length):e).charCodeAt(0)===a.s7.Slash&&(r=r.slice(1)),r;e=o.Uri.parse(e,!0)}return(0,F.Fd)((0,F.V8)(t.path.slice(1),e.path.slice(1)))}getRevisionUri(e,t,r){let i=this.createProviderUri(e,r,t);return r===m.nB?i.with({query:"~"}):i}async getWorkingUri(e,t){return this.createVirtualUri(e,void 0,t.path)}async addRemote(e,t,r,i){}async pruneRemote(e,t){}async removeRemote(e,t){}async applyChangesToWorkingFile(e,t,r){}async branchContainsCommit(e,t,r){return!1}async checkout(e,t,r){}resetCache(e,...t){(0===t.length||t.includes("branches"))&&this._branchesCache.delete(e),(0===t.length||t.includes("tags"))&&this._tagsCache.delete(e),0===t.length&&this._repoInfoCache.delete(e)}resetCaches(...e){(0===e.length||e.includes("branches"))&&this._branchesCache.clear(),(0===e.length||e.includes("tags"))&&this._tagsCache.clear(),0===e.length&&this._repoInfoCache.clear()}async excludeIgnoredUris(e,t){return t}async fetch(e,t){}async pull(e,t){}async push(e,t){}async findRepositoryUri(e,t){let r=(0,D.dQ)();try{return(await this.ensureRemoteHubApi()).getProviderRootUri(e).with({scheme:a.xB.Virtual})}catch(e){u.dU,U.Vy.error(e,r);return}}async getAheadBehindCommitCount(e,t,r){}async getBlame(e,t){let r=(0,D.dQ)();if(t?.isDirty)return;let i="blame";null!=e.sha&&(i+=`:${e.sha}`);let s=await this.container.documentTracker.getOrAdd(e);if(null!=s.state){let e=s.state.getBlame(i);if(null!=e)return U.Vy.debug(r,`Cache hit: '${i}'`),e.item}U.Vy.debug(r,`Cache miss: '${i}'`),null==s.state&&(s.state=new H.V);let o=this.getBlameCore(e,s,i,r);return null!=s.state&&(U.Vy.debug(r,`Cache add: '${i}'`),s.state.setBlame(i,{item:o})),o}async getBlameCore(e,t,r,i){try{let t=await this.ensureRepositoryContext(e.repoPath);if(null==t)return;let{metadata:r,github:i,remotehub:s,session:n}=t,l=s.getVirtualUri(s.getProviderRootUri(e)),u=this.getRelativePath(e,l);if(e.scheme===a.xB.Virtual){let[t,r]=await Promise.allSettled([o.workspace.fs.stat(e),o.workspace.fs.stat(e.with({scheme:a.xB.GitHub}))]);if("fulfilled"!==t.status||"fulfilled"!==r.status||t.value.mtime!==r.value.mtime)return}let c=e.sha&&"HEAD"!==e.sha?e.sha:(await r.getRevision()).revision,d=await i.getBlame(n.accessToken,r.repo.owner,r.repo.name,c,u),h=new Map,p=new Map,m=[];for(let t of d.ranges){let r=t.commit,{viewer:i=n.account.label}=d,s=null!=i&&r.author.name===i?"You":r.author.name,o=null!=i&&r.committer.name===i?"You":r.committer.name,a=h.get(s);null==a&&(a={name:s,lineCount:0},h.set(s,a)),a.lineCount+=t.endingLine-t.startingLine+1;let c=p.get(r.oid);null==c&&(c=new g.Yg(this.container,e.repoPath,r.oid,new g.M7(s,r.author.email,new Date(r.author.date),r.author.avatarUrl),new g.M7(o,r.committer.email,new Date(r.author.date)),r.message.split("\n",1)[0],r.parents.nodes[0]?.oid?[r.parents.nodes[0]?.oid]:[],r.message,new y.lY(l.toString(),u,y.NO.Modified),{changedFiles:r.changedFiles??0,additions:r.additions??0,deletions:r.deletions??0},[]),p.set(r.oid,c));for(let e=t.startingLine;e<=t.endingLine;e++){let t={sha:r.oid,originalLine:e,line:e};c.lines.push(t),m[e-1]=t}}let f=new Map([...h.entries()].sort((e,t)=>t[1].lineCount-e[1].lineCount));return{repoPath:e.repoPath,authors:f,commits:p,lines:m}}catch(e){if(null!=t.state&&!String(e).includes("No provider registered with")){let s=e?.toString()??"";return U.Vy.debug(i,`Cache replace (with empty promise): '${r}'`),t.state.setBlame(r,{item:V,errorMessage:s}),t.setBlameFailure(e),V}return}}async getBlameContents(e,t){}async getBlameForLine(e,t,r,i){let s=(0,D.dQ)();if(!r?.isDirty){if(!i?.forceSingleLine){let r=await this.getBlame(e);if(null==r)return;let i=r.lines[t];if(null==i){if(r.lines.length!==t)return;i=r.lines[t-1]}let s=r.commits.get(i.sha);if(null==s)return;return{author:{...r.authors.get(s.author.name),lineCount:s.lines.length},commit:s,line:i}}try{let r=await this.ensureRepositoryContext(e.repoPath);if(null==r)return;let{metadata:i,github:s,remotehub:o,session:n}=r,a=o.getVirtualUri(o.getProviderRootUri(e)),l=this.getRelativePath(e,a),u=e.sha&&"HEAD"!==e.sha?e.sha:(await i.getRevision()).revision,c=await s.getBlame(n.accessToken,i.repo.owner,i.repo.name,u,l),d=t+1,h=c.ranges.find(e=>e.startingLine===d);if(null==h)return;let p=h.commit,{viewer:m=n.account.label}=c,f=null!=m&&p.author.name===m?"You":p.author.name,v=null!=m&&p.committer.name===m?"You":p.committer.name,w=new g.Yg(this.container,e.repoPath,p.oid,new g.M7(f,p.author.email,new Date(p.author.date),p.author.avatarUrl),new g.M7(v,p.committer.email,new Date(p.author.date)),p.message.split("\n",1)[0],p.parents.nodes[0]?.oid?[p.parents.nodes[0]?.oid]:[],p.message,new y.lY(a.toString(),l,y.NO.Modified),{changedFiles:p.changedFiles??0,additions:p.additions??0,deletions:p.deletions??0},[]);for(let e=h.startingLine;e<=h.endingLine;e++){let t={sha:p.oid,originalLine:e,line:e};w.lines.push(t)}return{author:{name:f,lineCount:h.endingLine-h.startingLine+1},commit:w,line:{sha:p.oid,originalLine:h.startingLine,line:h.startingLine}}}catch(e){U.Vy.error(s,e);return}}}async getBlameForLineContents(e,t,r,i){}async getBlameForRange(e,t){let r=await this.getBlame(e);if(null!=r)return this.getBlameRange(r,e,t)}async getBlameForRangeContents(e,t,r){let i=await this.getBlameContents(e,r);if(null!=i)return this.getBlameRange(i,e,t)}getBlameRange(e,t,r){if(0===e.lines.length||0===r.start.line&&r.end.line===e.lines.length-1)return{allLines:e.lines,...e};let i=e.lines.slice(r.start.line,r.end.line+1),s=new Set(i.map(e=>e.sha)),o=r.start.line+1,n=r.end.line+1,a=new Map,l=new Map;for(let t of e.commits.values()){if(!s.has(t.sha))continue;let e=t.with({lines:t.lines.filter(e=>e.line>=o&&e.line<=n)});l.set(t.sha,e);let r=a.get(e.author.name);null==r&&(r={name:e.author.name,lineCount:0},a.set(r.name,r)),r.lineCount+=e.lines.length}let u=new Map([...a.entries()].sort((e,t)=>t[1].lineCount-e[1].lineCount));return{repoPath:t.repoPath,authors:u,commits:l,lines:i,allLines:e.lines}}async getBranch(e){let{values:[t]}=await this.getBranches(e,{filter:e=>e.current});return t}async getBranches(e,t){if(null==e)return N;let r=(0,D.dQ)(),i=t?.paging?.cursor?void 0:this._branchesCache.get(e);null==i&&(i=(async function(){try{let{metadata:r,github:i,session:s}=await this.ensureRepositoryContext(e),o=await r.getRevision(),n=0===o.type?o.name:void 0,a=[],l=t?.paging?.cursor,u=null==l;for(;;){let t=await i.getBranches(s.accessToken,r.repo.owner,r.repo.name,{cursor:l});for(let r of t.values){let t=new Date("author-date"===S.H.get("advanced.commitOrdering")?r.target.authoredDate:r.target.committedDate),i=r.target.oid;a.push(new p.Zr(this.container,e,r.name,!1,r.name===n,t,i,{name:`origin/${r.name}`,missing:!1}),new p.Zr(this.container,e,`origin/${r.name}`,!0,!1,t,i))}if(!t.paging?.more||!u)return{...t,values:a};l=t.paging.cursor}}catch(t){return U.Vy.error(t,r),this._branchesCache.delete(e),N}}).call(this),t?.paging?.cursor==null&&this._branchesCache.set(e,i));let s=await i;return t?.filter!=null&&(s={...s,values:s.values.filter(t.filter)}),t?.sort!=null&&(0,p.Xn)(s.values,"boolean"==typeof t.sort?void 0:t.sort),s}async getChangedFilesCount(e,t){if(!t)return;let r=await this.getCommit(e,t);if(r?.stats==null)return;let{stats:i}=r,s=(0,g.Zx)(i.changedFiles);return{additions:i.additions,deletions:i.deletions,changedFiles:s}}async getCommit(e,t){if(null==e)return;let r=(0,D.dQ)();try{let{metadata:r,github:i,session:s}=await this.ensureRepositoryContext(e),o=await i.getCommit(s.accessToken,r.repo.owner,r.repo.name,t);if(null==o)return;let{viewer:n=s.account.label}=o,a=null!=n&&o.author.name===n?"You":o.author.name,l=null!=n&&o.committer.name===n?"You":o.committer.name;return new g.Yg(this.container,e,o.oid,new g.M7(a,o.author.email,new Date(o.author.date),o.author.avatarUrl),new g.M7(l,o.committer.email,new Date(o.committer.date)),o.message.split("\n",1)[0],o.parents.nodes.map(e=>e.oid),o.message,o.files?.map(t=>new y.lY(e,t.filename??"",M.fromCommitFileStatus(t.status)??y.NO.Modified,t.previous_filename,void 0,{additions:t.additions??0,deletions:t.deletions??0,changes:t.changes??0}))??[],{changedFiles:o.changedFiles??0,additions:o.additions??0,deletions:o.deletions??0},[])}catch(e){U.Vy.error(e,r);return}}async getCommitBranches(e,t,r,i){if(null==e||i?.commitDate==null)return[];let s=(0,D.dQ)();try{let{metadata:s,github:o,session:n}=await this.ensureRepositoryContext(e);return r?await o.getCommitOnBranch(n.accessToken,s.repo.owner,s.repo.name,r,t,i?.mode??"contains",i?.commitDate):await o.getCommitBranches(n.accessToken,s.repo.owner,s.repo.name,t,i?.mode??"contains",i?.commitDate)}catch(e){return U.Vy.error(e,s),[]}}async getCommitCount(e,t){if(null==e)return;let r=(0,D.dQ)();try{let{metadata:r,github:i,session:s}=await this.ensureRepositoryContext(e);return await i.getCommitCount(s?.accessToken,r.repo.owner,r.repo.name,t)}catch(e){U.Vy.error(e,r);return}}async getCommitForFile(e,t,r){if(null==e)return;let i=(0,D.dQ)();try{let{metadata:i,github:s,remotehub:o,session:n}=await this.ensureRepositoryContext(e),a=this.getRelativePath(t,o.getProviderRootUri(t)),l=r?.ref&&"HEAD"!==r.ref?r.ref:(await i.getRevision()).revision,u=await s.getCommitForFile(n.accessToken,i.repo.owner,i.repo.name,l,a);if(null==u)return;let{viewer:c=n.account.label}=u,d=null!=c&&u.author.name===c?"You":u.author.name,h=null!=c&&u.committer.name===c?"You":u.committer.name,p=u.files?.map(t=>new y.lY(e,t.filename??"",M.fromCommitFileStatus(t.status)??y.NO.Modified,t.previous_filename,void 0,{additions:t.additions??0,deletions:t.deletions??0,changes:t.changes??0})),m=p?.find(e=>e.path===a);return new g.Yg(this.container,e,u.oid,new g.M7(d,u.author.email,new Date(u.author.date),u.author.avatarUrl),new g.M7(h,u.committer.email,new Date(u.committer.date)),u.message.split("\n",1)[0],u.parents.nodes.map(e=>e.oid),u.message,{file:m,files:p},{changedFiles:u.changedFiles??0,additions:u.additions??0,deletions:u.deletions??0},[])}catch(e){U.Vy.error(e,i);return}}async getCommitsForGraph(e,t,r){let i=r?.limit??S.H.get("graph.defaultItemLimit")??5e3,s=S.H.get("graph.commitOrdering",void 0,"date"),o=S.H.get("graph.avatars",void 0,!0),[n,a,l,u,c,d]=await Promise.allSettled([this.getLog(e,{all:!0,ordering:s,limit:i}),this.getBranch(e),this.getBranches(e,{filter:e=>e.remote}),this.getRemotes(e),this.getTags(e),this.getCurrentUser(e)]),h=new Map,p=(0,k.Ro)(a),g=new Map,m=new Map;null!=p&&(g.set(p.name,p),null!=p.sha&&m.set(p.sha,[p.name]));let f=k.Ro(l)?.values;if(null!=f)for(let e of f){if(g.set(e.name,e),null==e.sha)continue;let t=m.get(e.sha);null==t?m.set(e.sha,[e.name]):t.push(e.name)}let y=new Set,v=(0,k.Ro)(u)[0],w=null!=v?new Map([[v.name,v]]):new Map,b=new Map,R=k.Ro(c)?.values;if(null!=R)for(let e of R){if(null==e.sha)continue;let t=b.get(e.sha);null==t?b.set(e.sha,[e.name]):t.push(e.name)}return this.getCommitsForGraphCore(e,t,(0,k.Ro)(n),p,g,m,v,w,b,(0,k.Ro)(d),h,y,{...r,useAvatars:o})}async getCommitsForGraphCore(e,t,r,i,s,o,n,a,u,c,d,h,m){let f,y,b,R,$,C,q,S,A,G;let I={...m?.include,stats:!0},U=new Map;if(null==r)return{repoPath:e,avatars:d,ids:h,includes:I,branches:s,remotes:a,downstreams:U,rows:[]};let D=(r.pagedCommits?.()??r.commits)?.values();if(null==D)return{repoPath:e,avatars:d,ids:h,includes:I,branches:s,remotes:a,downstreams:U,rows:[]};let F=[],k=!1,H=!1,_=i.upstream?.name;for(let r of D){if(h.add(r.sha),k=r.sha===i.sha){if(b={webviewItem:`gitlens:branch${k?"+current":""}${i?.upstream!=null?"+tracking":""}`,webviewItemValue:{type:"branch",ref:(0,v.kA)(i.name,e,{id:i.id,refType:"branch",name:i.name,remote:!1,upstream:i.upstream})}},$=[{id:i.id,name:i.name,isCurrentHead:!0,context:(0,x.C9)(b),upstream:null!=i.upstream?{name:i.upstream.name,id:(0,p.Yk)(e,!0,i.upstream.name)}:void 0}],null!=i.upstream){if(S=(0,p.Yk)(e,!0,i.name),f=((m?.useAvatars?n.provider?.avatarUri:void 0)??w.Wf(this.container,n,t))?.toString(!0),b={webviewItem:"gitlens:branch+remote",webviewItemValue:{type:"branch",ref:(0,v.kA)(i.name,e,{id:S,refType:"branch",name:i.name,remote:!0,upstream:{name:n.name,missing:!1}})}},C=[{id:S,name:i.name,owner:n.name,url:n.url,avatarUrl:f,context:(0,x.C9)(b),current:!0,hostingServiceType:n.provider?.gkProviderId}],null!=_){let e=U.get(_);null==e&&(e=[],U.set(_,e)),e.push(i.name)}}else C=[]}else{$=[],C=[];let i=o.get(r.sha);if(null!=i)for(let r of i)S=(0,p.Yk)(e,!0,r),y=(0,p.km)(r),f=((m?.useAvatars?n.provider?.avatarUri:void 0)??w.Wf(this.container,n,t))?.toString(!0),b={webviewItem:"gitlens:branch+remote",webviewItemValue:{type:"branch",ref:(0,v.kA)(r,e,{id:S,refType:"branch",name:r,remote:!0,upstream:{name:n.name,missing:!1}})}},C.push({id:S,name:y,owner:n.name,url:n.url,avatarUrl:f,context:(0,x.C9)(b),hostingServiceType:n.provider?.gkProviderId})}q=[];let s=u.get(r.sha);if(null!=s)for(let t of s)G=(0,P.gt)(e,t),b={webviewItem:"gitlens:tag",webviewItemValue:{type:"tag",ref:(0,v.kA)(t,e,{id:G,refType:"tag",name:t})}},q.push({id:G,name:t,annotated:!0,context:(0,x.C9)(b)});if(r.author.email&&!d.has(r.author.email)){let e=r.getCachedAvatarUri();null!=e&&d.set(r.author.email,e.toString(!0))}H="You"===r.author.name,R={row:(0,x.C9)({webviewItem:`gitlens:commit${k?"+HEAD":""}+current`,webviewItemValue:{type:"commit",ref:(0,v.kA)(r.sha,e,{refType:"revision",message:r.message})}}),avatar:(0,x.C9)({webviewItem:`gitlens:contributor${H?"+current":""}`,webviewItemValue:{type:"contributor",repoPath:e,name:H&&c?.name!=null?c.name:r.author.name,email:r.author.email,current:H}})},F.push({sha:r.sha,parents:r.parents,author:r.author.name,email:r.author.email??"",date:r.committer.date.getTime(),message:(0,l.E)(r.message&&String(r.message).length?r.message:r.summary),type:r.parents.length>1?"merge-node":"commit-node",heads:$,remotes:C,tags:q,contexts:R}),null!=r.stats&&(null==A&&(A=new Map),A.set(r.sha,{files:(0,g.Zx)(r.stats.changedFiles),additions:r.stats.additions,deletions:r.stats.deletions}))}return m?.ref==="HEAD"?m.ref=E.$1(r.commits.values())?.sha:m?.ref!=null&&(m.ref=void 0),{repoPath:e,avatars:d,ids:h,includes:I,branches:s,remotes:a,downstreams:U,rows:F,id:m?.ref,paging:{limit:r.limit,startingCursor:r.startingCursor,hasMore:r.hasMore},more:async l=>{let p=await r.more?.(l);return this.getCommitsForGraphCore(e,t,p,i,s,o,n,a,u,c,d,h,m)}}}async getCommitTags(e,t,r){if(null==e||r?.commitDate==null)return[];let i=(0,D.dQ)();try{let{metadata:i,github:s,session:o}=await this.ensureRepositoryContext(e);return await s.getCommitTags(o.accessToken,i.repo.owner,i.repo.name,t,r?.commitDate)}catch(e){return U.Vy.error(e,i),[]}}async getContributors(e,t){if(null==e)return[];let r=(0,D.dQ)();try{let{metadata:t,github:r,session:i}=await this.ensureRepositoryContext(e),s=await r.getContributors(i.accessToken,t.repo.owner,t.repo.name),o=await this.getCurrentUser(e),n=[];for(let t of s)"User"===t.type&&n.push(new f.sL(e,t.name,t.email,t.contributions,void 0,(0,$.h)(o,t.name,t.email,t.login),void 0,t.login,t.avatar_url,t.node_id));return n}catch(e){return U.Vy.error(e,r),[]}}async getCurrentUser(e){if(!e)return;let t=(0,D.dQ)(),r=this._repoInfoCache.get(e),i=r?.user;if(null!=i)return i;if(null!==i)try{let{metadata:t,github:s,session:o}=await this.ensureRepositoryContext(e);return i=await s.getCurrentUser(o.accessToken,t.repo.owner,t.repo.name),this._repoInfoCache.set(e,{...r,user:i??null}),i}catch(i){U.Vy.error(i,t),this._repoInfoCache.set(e,{...r,user:null});return}}async getDefaultBranchName(e,t){if(null==e)return;let r=(0,D.dQ)();try{let{metadata:t,github:r,session:i}=await this.ensureRepositoryContext(e);return await r.getDefaultBranchName(i.accessToken,t.repo.owner,t.repo.name)}catch(e){U.Vy.error(e,r);return}}async getDiffForFile(e,t,r){}async getDiffForFileContents(e,t,r){}async getDiffForLine(e,t,r,i){}async getDiffStatus(e,t,r,i){}async getFileStatusForCommit(e,t,r){if(r===m.nB||(0,v._k)(r))return;let i=await this.getCommitForFile(e,t,{ref:r});if(null!=i)return i.findFile(t)}async getLastFetchedTimestamp(e){}async getLog(e,t){if(null==e)return;let r=(0,D.dQ)(),i=this.getPagingLimit(t?.limit);try{let{metadata:r,github:s,session:o}=await this.ensureRepositoryContext(e),n=t?.ref&&"HEAD"!==t.ref?t.ref:(await r.getRevision()).revision,a=await s.getCommits(o.accessToken,r.repo.owner,r.repo.name,n,{all:t?.all,authors:t?.authors,after:t?.cursor,limit:i,since:t?.since?new Date(t.since):void 0}),l=new Map,{viewer:u=o.account.label}=a;for(let t of a.values){let r=null!=u&&t.author.name===u?"You":t.author.name,i=null!=u&&t.committer.name===u?"You":t.committer.name,s=l.get(t.oid);null==s&&(s=new g.Yg(this.container,e,t.oid,new g.M7(r,t.author.email,new Date(t.author.date),t.author.avatarUrl),new g.M7(i,t.committer.email,new Date(t.committer.date)),t.message.split("\n",1)[0],t.parents.nodes.map(e=>e.oid),t.message,t.files?.map(t=>new y.lY(e,t.filename??"",M.fromCommitFileStatus(t.status)??y.NO.Modified,t.previous_filename,void 0,{additions:t.additions??0,deletions:t.deletions??0,changes:t.changes??0})),{changedFiles:t.changedFiles??0,additions:t.additions??0,deletions:t.deletions??0},[]),l.set(t.oid,s))}let c={repoPath:e,commits:l,sha:n,range:void 0,count:l.size,limit:i,hasMore:a.paging?.more??!1,endingCursor:a.paging?.cursor,query:r=>this.getLog(e,{...t,limit:r})};return c.hasMore&&(c.more=this.getLogMoreFn(c,t)),c}catch(e){U.Vy.error(e,r);return}}async getLogRefsOnly(e,t){let r=await this.getLog(e,t);if(null!=r)return new Set([...r.commits.values()].map(e=>e.ref))}getLogMoreFn(e,t){return async r=>{let i=null!=r&&"object"==typeof r?r.until:void 0,s="number"==typeof r?r:void 0;if(i&&(0,E.zN)(e.commits.values(),e=>e.ref===i))return e;s=this.getPagingLimit(s);let o=await this.getLog(e.repoPath,{...t,limit:s,cursor:e.endingCursor});if(null==o)return{...e,hasMore:!1,more:void 0};let n=new Map([...e.commits,...o.commits]),a={repoPath:e.repoPath,commits:n,sha:e.sha,range:void 0,count:n.size,limit:null==i?(e.limit??0)+s:void 0,hasMore:null!=i||o.hasMore,startingCursor:E.HV(e.commits)?.[0],endingCursor:o.endingCursor,pagedCommits:()=>{for(let t of e.commits.keys())o.commits.delete(t);return o.commits},query:e.query};return a.hasMore&&(a.more=this.getLogMoreFn(a,t)),a}}async getLogForFile(e,t,r){if(null==e)return;let i=(0,D.dQ)(),s=this.getRelativePath(t,e);if(null!=e&&e===s)throw Error(`File name cannot match the repository path; path=${s}`);(r={reverse:!1,...r}).renames=!1,r.all=!1;let o="log";null!=r.ref&&(o+=`:${r.ref}`),r.limit=this.getPagingLimit(r?.limit),r.limit&&(o+=`:n${r.limit}`),r.renames&&(o+=":follow"),r.reverse&&(o+=":reverse"),r.since&&(o+=`:since=${r.since}`),r.skip&&(o+=`:skip${r.skip}`),r.cursor&&(o+=`:cursor=${r.cursor}`);let n=await this.container.documentTracker.getOrAdd(h.nk.fromFile(s,e,r.ref));if(!r.force&&null==r.range){if(null!=n.state){let s=n.state.getLog(o);if(null!=s)return U.Vy.debug(i,`Cache hit: '${o}'`),s.item;if(null!=r.ref||null!=r.limit){let s=n.state.getLog(`log${r.renames?":follow":""}${r.reverse?":reverse":""}`);if(null!=s){if(null==r.ref)return U.Vy.debug(i,`Cache hit: ~'${o}'`),s.item;U.Vy.debug(i,`Cache ?: '${o}'`);let n=await s.item;if(null!=n&&!n.hasMore&&n.commits.has(r.ref)){U.Vy.debug(i,`Cache hit: '${o}'`);let s=!0,a=0,l=new Map((0,E.x1)(n.commits.entries(),([e,t])=>{if(s){if(e!==r?.ref)return;s=!1}if(a++,r?.limit==null||!(a>r.limit))return[e,t]})),u={...r};return{...n,limit:r.limit,count:l.size,commits:l,query:r=>this.getLogForFile(e,t,{...u,limit:r})}}}}}U.Vy.debug(i,`Cache miss: '${o}'`),null==n.state&&(n.state=new H.V)}let a=this.getLogForFileCore(e,s,n,o,i,r);return null!=n.state&&null==r.range&&(U.Vy.debug(i,`Cache add: '${o}'`),n.state.setLog(o,{item:a})),a}async getLogForFileCore(e,t,r,i,s,o){if(null==e)return;let n=this.getPagingLimit(o?.limit);try{let r=await this.ensureRepositoryContext(e);if(null==r)return;let{metadata:i,github:s,remotehub:a,session:l}=r,u=this.getAbsoluteUri(t,e),c=this.getRelativePath(u,a.getProviderRootUri(u)),d=o?.ref&&"HEAD"!==o.ref?o.ref:(await i.getRevision()).revision,h=await s.getCommits(l.accessToken,i.repo.owner,i.repo.name,d,{all:o?.all,after:o?.cursor,path:c,limit:n,since:o?.since?new Date(o.since):void 0}),p=new Map,{viewer:m=l.account.label}=h;for(let t of h.values){let r=null!=m&&t.author.name===m?"You":t.author.name,i=null!=m&&t.committer.name===m?"You":t.committer.name,s=p.get(t.oid);if(null==s){let o=t.files?.map(t=>new y.lY(e,t.filename??"",M.fromCommitFileStatus(t.status)??y.NO.Modified,t.previous_filename,void 0,{additions:t.additions??0,deletions:t.deletions??0,changes:t.changes??0})),n=(0,F.Np)(c)?void 0:o?.find(e=>e.path===c)??new y.lY(e,c,y.NO.Modified,void 0,void 0,1===t.changedFiles?{additions:t.additions??0,deletions:t.deletions??0,changes:0}:void 0);s=new g.Yg(this.container,e,t.oid,new g.M7(r,t.author.email,new Date(t.author.date),t.author.avatarUrl),new g.M7(i,t.committer.email,new Date(t.committer.date)),t.message.split("\n",1)[0],t.parents.nodes.map(e=>e.oid),t.message,{file:n,files:o},{changedFiles:t.changedFiles??0,additions:t.additions??0,deletions:t.deletions??0},[]),p.set(t.oid,s)}}let f={repoPath:e,commits:p,sha:d,range:void 0,count:p.size,limit:n,hasMore:h.paging?.more??!1,endingCursor:h.paging?.cursor,query:r=>this.getLogForFile(e,t,{...o,limit:r})};return f.hasMore&&(f.more=this.getLogForFileMoreFn(f,t,o)),f}catch(e){if(null!=r.state&&o?.range==null&&!o?.reverse){let t=e?.toString()??"";return U.Vy.debug(s,`Cache replace (with empty promise): '${i}'`),r.state.setLog(i,{item:V,errorMessage:t}),V}return}}getLogForFileMoreFn(e,t,r){return async i=>{let s=null!=i&&"object"==typeof i?i.until:void 0,o="number"==typeof i?i:void 0;if(s&&(0,E.zN)(e.commits.values(),e=>e.ref===s))return e;o=this.getPagingLimit(o);let n=await this.getLogForFile(e.repoPath,t,{...r,limit:null==s?o:0,cursor:e.endingCursor});if(null==n)return{...e,hasMore:!1,more:void 0};let a=new Map([...e.commits,...n.commits]),l={repoPath:e.repoPath,commits:a,sha:e.sha,range:e.range,count:a.size,limit:null==s?(e.limit??0)+o:void 0,hasMore:null!=s||n.hasMore,endingCursor:n.endingCursor,query:e.query};return l.hasMore&&(l.more=this.getLogForFileMoreFn(l,t,r)),l}}async getMergeBase(e,t,r,i){}async getMergeStatus(e){}async getRebaseStatus(e){}async getNextComparisonUris(e,t,r,i=0){if(!r)return;let s=(0,D.dQ)();try{let s=await this.ensureRepositoryContext(e);if(null==s)return;let{metadata:o,github:n,remotehub:a,session:l}=s,u=this.getRelativePath(t,a.getProviderRootUri(t)),c=(await o.getRevision()).revision;"HEAD"===r&&(r=c);let d=await n.getNextCommitRefs(l.accessToken,o.repo.owner,o.repo.name,c,u,r);return{current:0===i?h.nk.fromFile(u,e,r):new h.nk(await this.getBestRevisionUri(e,u,d[i-1])),next:new h.nk(await this.getBestRevisionUri(e,u,d[i]))}}catch(e){throw U.Vy.error(e,s),e}}async getOldestUnpushedRefForFile(e,t){}async getPreviousComparisonUris(e,t,r,i=0){if(r===m.nB)return;let s=(0,D.dQ)();r===m.SU&&(r=void 0);try{let s=await this.ensureRepositoryContext(e);if(null==s)return;let{metadata:o,github:n,remotehub:a,session:l}=s,u=this.getRelativePath(t,a.getProviderRootUri(t)),c=null!=r?1:0,d=await n.getCommitRefs(l.accessToken,o.repo.owner,o.repo.name,r&&"HEAD"!==r?r:(await o.getRevision()).revision,{path:u,first:c+i+1});if(null==d)return;let p=0===i?h.nk.fromFile(u,e,r):new h.nk(await this.getBestRevisionUri(e,u,d.values[c+i-1]?.oid??m.nB));if(null==p||p.sha===m.nB)return;return{current:p,previous:new h.nk(await this.getBestRevisionUri(e,u,d.values[c+i]?.oid??m.nB))}}catch(e){throw U.Vy.error(e,s),e}}async getPreviousComparisonUrisForLine(e,t,r,i,s=0){if(i===m.nB)return;let o=(0,D.dQ)();try{let o;let n=await this.ensureRepositoryContext(e);if(null==n)return;let{remotehub:a}=n,l=this.getRelativePath(t,a.getProviderRootUri(t)),u=h.nk.fromFile(l,e,i),c=r,d=r,p=r;for(let t=0;t<Math.max(0,s)+2;t++){let t=await this.getBlameForLine(o??u,p,void 0,{forceSingleLine:!0});if(null==t)break;i=t.commit.sha,l=t.commit.file?.path??t.commit.file?.originalPath??l,p=t.line.originalLine-1;let r=h.nk.fromFile(l,e,i);null==o||(u=o,c=d),o=r,d=p}if(null==u)return;return{current:u,previous:o,line:(c??r)+1}}catch(e){throw U.Vy.error(e,o),e}}async getIncomingActivity(e,t){}async getRemotes(e,t){if(null==e)return[];let r=(0,C.P)(S.H.get("remotes",null)),[,i,s]=o.Uri.parse(e,!0).path.split("/",3),n=`https://github.com/${i}/${s}.git`,a="github.com",l=`${i}/${s}`;return[new w.Xd(this.container,e,"origin","https",a,l,(0,C.m)(this.container,r)(n,a,l),[{type:"fetch",url:n},{type:"push",url:n}])]}async getRevisionContent(e,t,r){let i=r?this.createProviderUri(e,r,t):this.createVirtualUri(e,r,t);return o.workspace.fs.readFile(i)}async getStash(e){}async getStatusForFile(e,t){}async getStatusForFiles(e,t){}async getStatusForRepo(e){if(null==e)return;let t=await this.ensureRepositoryContext(e);if(null==t)return;let r=await t.metadata.getRevision();if(null!=r)return new R.ls(e,r.name,r.revision,[],{ahead:0,behind:0},r.type===B.Branch||r.type===B.RemoteBranch?{name:`origin/${r.name}`,missing:!1}:void 0)}async getTags(e,t){if(null==e)return N;let r=(0,D.dQ)(),i=t?.paging?.cursor?void 0:this._tagsCache.get(e);null==i&&(i=(async function(){try{let r,i;let{metadata:s,github:o,session:n}=await this.ensureRepositoryContext(e),a=[],l=t?.paging?.cursor,u=null==l;for(;;){let t=await o.getTags(n.accessToken,s.repo.owner,s.repo.name,{cursor:l});for(let s of t.values)r=s.target.authoredDate??s.target.target?.authoredDate??s.target.tagger?.date,i=s.target.committedDate??s.target.target?.committedDate??s.target.tagger?.date,a.push(new P.rN(e,s.name,s.target.target?.oid??s.target.oid,s.target.message??s.target.target?.message??"",null!=r?new Date(r):void 0,null!=i?new Date(i):void 0));if(!t.paging?.more||!u)return{...t,values:a};l=t.paging.cursor}}catch(t){return U.Vy.error(t,r),this._tagsCache.delete(e),N}}).call(this),t?.paging?.cursor==null&&this._tagsCache.set(e,i));let s=await i;return t?.filter!=null&&(s={...s,values:s.values.filter(t.filter)}),t?.sort!=null&&(0,P.uO)(s.values,"boolean"==typeof t.sort?void 0:t.sort),s}async getTreeEntryForRevision(e,t,r){if(null==e||!t)return;if("HEAD"===r){let t=await this.ensureRepositoryContext(e);if(null==t)return;let i=await t.metadata.getRevision();r=i?.revision}let i=r?this.createProviderUri(e,r,t):this.createVirtualUri(e,r,t),s=await o.workspace.fs.stat(i);if(null!=s)return{ref:r,oid:"",path:this.getRelativePath(i,e),size:s.size,type:(s.type&o.FileType.Directory)===o.FileType.Directory?"tree":"blob"}}async getTreeForRevision(e,t){if(null==e)return[];if("HEAD"===t){let r=await this.ensureRepositoryContext(e);if(null==r)return[];let i=await r.metadata.getRevision();t=i?.revision}let r=t?this.createProviderUri(e,t):this.createVirtualUri(e,t),i=await o.workspace.fs.readDirectory(r);if(null==i)return[];let s=[];for(let[e,n]of i){let i=this.getAbsoluteUri(e,r);s.push({ref:t,oid:"",path:this.getRelativePath(e,i),size:0,type:(n&o.FileType.Directory)===o.FileType.Directory?"tree":"blob"})}return[]}async hasBranchOrTag(e,t){let[{values:r},{values:i}]=await Promise.all([this.getBranches(e,{filter:t?.filter?.branches,sort:!1}),this.getTags(e,{filter:t?.filter?.tags,sort:!1})]);return 0!==r.length||0!==i.length}async hasCommitBeenPushed(e,t){return!0}isTrackable(e){return this.supportedSchemes.has(e.scheme)}async isTracked(e){if(!this.isTrackable(e)||null==this.container.git.getRepository(e))return!1;let t=e.with({scheme:a.xB.GitHub});return null!=await o.workspace.fs.stat(t)}async getDiffTool(e){}async openDiffTool(e,t,r){}async openDirectoryCompare(e,t,r,i){}async resolveReference(e,t,r,i){let s;if(!t||t===m.nB||null==r&&(0,v.HH)(t)||null!=r&&(0,v._k)(t))return t;if(null!=r)s=this.getRelativePath(r,e);else if(!(0,v.a$)(t)||t.endsWith("^3"))return t;let o=await this.ensureRepositoryContext(e);if(null==o)return t;let{metadata:n,github:a,session:l}=o,u=await a.resolveReference(l.accessToken,n.repo.owner,n.repo.name,t,s);return null!=u?u:s?m.nB:t}async richSearchCommits(e,t,r){if(null==e)return;let i=(0,D.dQ)(),s=(0,q.OM)(t),o=s.get("commit:");if(o?.size){let t=await this.getCommit(e,(0,E.$1)(o));if(null==t)return;return{repoPath:e,commits:new Map([[t.sha,t]]),sha:t.sha,range:void 0,count:1,limit:1,hasMore:!1}}let n=await this.getQueryArgsFromSearchQuery(t,s,e);if(0===n.length)return;let a=this.getPagingLimit(r?.limit);try{let{metadata:i,github:s,session:o}=await this.ensureRepositoryContext(e),l=`repo:${i.repo.owner}/${i.repo.name}+${n.join("+").trim()}`,u=await s.searchCommits(o.accessToken,l,{cursor:r?.cursor,limit:a,sort:r?.ordering==="date"?"committer-date":r?.ordering==="author-date"?"author-date":void 0});if(null==u)return;let c=new Map,d=o.account.label;for(let t of u.values){let r=null!=d&&t.author.name===d?"You":t.author.name,i=null!=d&&t.committer.name===d?"You":t.committer.name,s=c.get(t.oid);null==s&&(s=new g.Yg(this.container,e,t.oid,new g.M7(r,t.author.email,new Date(t.author.date),t.author.avatarUrl),new g.M7(i,t.committer.email,new Date(t.committer.date)),t.message.split("\n",1)[0],t.parents.nodes.map(e=>e.oid),t.message,t.files?.map(t=>new y.lY(e,t.filename??"",M.fromCommitFileStatus(t.status)??y.NO.Modified,t.previous_filename,void 0,{additions:t.additions??0,deletions:t.deletions??0,changes:t.changes??0})),{changedFiles:t.changedFiles??0,additions:t.additions??0,deletions:t.deletions??0},[]),c.set(t.oid,s))}let h={repoPath:e,commits:c,sha:void 0,range:void 0,count:c.size,limit:a,hasMore:u.pageInfo?.hasNextPage??!1,endingCursor:u.pageInfo?.endCursor??void 0,query:t=>this.getLog(e,{...r,limit:t})};if(h.hasMore){let e=function(i){return async s=>{s=this.getPagingLimit(s);let o=await this.richSearchCommits(i.repoPath,t,{...r,limit:s,cursor:i.endingCursor});if(null==o)return{...i,hasMore:!1,more:void 0};let n=new Map([...i.commits,...o.commits]),a={repoPath:i.repoPath,commits:n,sha:i.sha,range:void 0,count:n.size,limit:(i.limit??0)+s,hasMore:o.hasMore,endingCursor:o.endingCursor,query:i.query};return a.hasMore&&(a.more=e.call(this,a)),a}};h.more=e.call(this,h)}return h}catch(e){U.Vy.error(e,i)}}async searchCommits(e,t,r){t={matchAll:!1,matchCase:!1,matchRegex:!0,...t};let i=(0,q.b4)(t);try{let o=new Map,n=(0,q.OM)(t),a=n.get("commit:");if(null!=a){let s=await Promise.allSettled((0,E.Tj)(a,t=>this.getCommit(e,t.replace(L,"")))),n=0;for(let e of s){let t=(0,k.Ro)(e);null!=t&&o.set(t.sha,{i:n++,date:Number(r?.ordering==="author-date"?t.author.date:t.committer.date)})}return{repoPath:e,query:t,comparisonKey:i,results:o}}let l=await this.getQueryArgsFromSearchQuery(t,n,e);if(0===l.length)return{repoPath:e,query:t,comparisonKey:i,results:o};let{metadata:u,github:c,session:d}=await this.ensureRepositoryContext(e),h=`repo:${u.repo.owner}/${u.repo.name}+${l.join("+").trim()}`;async function s(n,a){if(r?.cancellation?.isCancellationRequested)return{repoPath:e,query:t,comparisonKey:i,results:o};n=this.getPagingLimit(n??S.H.get("advanced.maxSearchItems"));let l=await c.searchCommitShas(d.accessToken,h,{cursor:a,limit:n,sort:r?.ordering==="date"?"committer-date":r?.ordering==="author-date"?"author-date":void 0});if(null==l||r?.cancellation?.isCancellationRequested)return{repoPath:e,query:t,comparisonKey:i,results:o};for(let e of l.values)o.set(e.sha,{i:o.size,date:Number(r?.ordering==="author-date"?e.authorDate:e.committerDate)});return a=l.pageInfo?.endCursor??void 0,{repoPath:e,query:t,comparisonKey:i,results:o,paging:l.pageInfo?.hasNextPage?{limit:n,hasMore:!0}:void 0,more:async e=>s.call(this,e,a)}}return s.call(this,r?.limit)}catch(e){if(e instanceof d.Do)throw e;throw new d.Do(e)}}async validateBranchOrTagName(e,t){return W.test(e)}async validateReference(e,t){return!0}async stageFile(e,t){}async stageDirectory(e,t){}async unstageFile(e,t){}async unstageDirectory(e,t){}async ensureRepositoryContext(e,t){let r,i,s=o.Uri.parse(e,!0);if(!/^github\+?/.test(s.authority))throw new u.gK(e,u.ax.NotAGitHubRepository);if(!t){let t=this.container.git.getRepository(s);if(null==t)throw new u.gK(e,u.ax.NotAGitHubRepository);s=t.uri}let n=this._remotehub;if(null==n)try{n=await this.ensureRemoteHubApi()}catch(t){throw u.dU,new u.gK(e,u.ax.RemoteHubApiNotFound,t)}let a=await n?.getMetadata(s);if(a?.provider.id!=="github")throw new u.gK(e,u.ax.NotAGitHubRepository);try{[r,i]=await Promise.all([this.ensureGitHub(),this.ensureSession()])}catch(t){if(t instanceof u.v3)throw new u.gK(e,t.reason===u.R.UserDidNotConsent?u.ax.GitHubAuthenticationDenied:u.ax.GitHubAuthenticationNotFound,t);throw new u.gK(e)}if(null==r)throw new u.gK(e);return{github:r,metadata:a,remotehub:n,session:i}}_github;async ensureGitHub(){if(null==this._github){let e=await this.container.github;null!=e&&this._disposables.push(e.onDidReauthenticate(()=>void this.ensureSession(!0))),this._github=e}return this._github}_remotehub;_remotehubPromise;async ensureRemoteHubApi(e){if(null==this._remotehubPromise&&(this._remotehubPromise=_(),this._remotehubPromise.then(e=>this._remotehub=e,()=>this._remotehub=void 0)),!e)return this._remotehubPromise;try{return await this._remotehubPromise}catch{return}}_sessionPromise;async ensureSession(e=!1,t=!1){if(e||null==this._sessionPromise){async function r(){let i=this.container.storage.get(`provider:authentication:skip:${this.descriptor.id}`,!1);try{if(e)return i=!1,this.container.storage.delete(`provider:authentication:skip:${this.descriptor.id}`),await o.authentication.getSession("github",Y,{forceNewSession:!0});if(!i&&!t)return await o.authentication.getSession("github",Y,{createIfNone:!0});let r=await o.authentication.getSession("github",Y,{createIfNone:!1,silent:t});if(null!=r)return r;throw Error("User did not consent")}catch(s){if(s instanceof Error&&s.message.includes("User did not consent")){if(!t&&(await this.container.storage.store(`provider:authentication:skip:${this.descriptor.id}`,!0),!i))return e||queueMicrotask(async()=>{let e="Re-enable";await o.window.showInformationMessage("GitLens has been disabled. Authentication is required for GitLens to work with remote GitHub repositories.",e)===e&&this.ensureSession(!0)}),e=!1,r.call(this);throw new u.v3("github",u.R.UserDidNotConsent)}throw U.Vy.error(s),new u.v3("github",void 0,s)}}this._sessionPromise=r.call(this)}return this._sessionPromise}createVirtualUri(e,t,r){var i;let s;if("string"==typeof t)t&&(s=(0,v.HH)(t)?{v:1,ref:{id:t,type:2}}:{v:1,ref:{id:t,type:4}});else switch(t?.refType){case"revision":case"stash":s={v:1,ref:{id:t.ref,type:2}};break;case"branch":case"tag":s={v:1,ref:{id:t.name,type:4}}}if("string"==typeof e&&(e=o.Uri.parse(e,!0)),r){let t=e.path;t.endsWith("/")&&(t=t.slice(0,-1)),r=this.getRelativePath(r,e),r=`${t}/${r.startsWith("/")?r.slice(0,-1):r}`}return e.with({scheme:a.xB.Virtual,authority:(i=s,`github${null!=i?`+${(0,n.l)(JSON.stringify(i))}`:""}`),path:r??e.path})}createProviderUri(e,t,r){let i=this.createVirtualUri(e,t,r);return null==this._remotehub?i.scheme!==a.xB.Virtual?i:i.with({scheme:a.xB.GitHub}):this._remotehub.getProviderUri(i)}getPagingLimit(e){return 0===(e=Math.min(100,e??S.H.get("advanced.maxListItems")??100))&&(e=100),e}async resolveReferenceCore(e,t,r){if(null==r||"HEAD"===r)return(await t.getRevision()).revision;if((0,v.HH)(r))return r;if((0,v.p8)(r))return;let[i,s]=await Promise.allSettled([this.getBranches(e,{filter:e=>e.name===r}),this.getTags(e,{filter:e=>e.name===r})]);return r=k.Ro(i)?.values[0]?.sha??k.Ro(s)?.values[0]?.sha}async getQueryArgsFromSearchQuery(e,t,r){let i=[];for(let[s,o]of t.entries())switch(s){case"message:":i.push(...(0,E.Tj)(o,e=>e.replace(/ /g,"+")));break;case"author:":{let t;for(let s of(o.has("@me")&&(t=await this.getCurrentUser(r)),o))if(s&&(s=s.replace(L,e.matchRegex?"\\b":""))){if("@me"===s){if(t?.username==null)continue;s=`@${t.username}`}(s=s.replace(/ /g,"+")).startsWith("@")?i.push(`author:${s.slice(1)}`):s.includes("@")?i.push(`author-email:${s}`):i.push(`author-name:${s}`)}}}return i}};z([(0,I.Rm)()],GitHubGitProvider.prototype,"getBestRevisionUri",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"getWorkingUri",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"addRemote",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"pruneRemote",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"removeRemote",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"applyChangesToWorkingFile",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"branchContainsCommit",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"checkout",1),z([(0,I.Rm)({singleLine:!0})],GitHubGitProvider.prototype,"resetCache",1),z([(0,I.Rm)({singleLine:!0})],GitHubGitProvider.prototype,"resetCaches",1),z([(0,I.Rm)({args:{1:e=>e.length}})],GitHubGitProvider.prototype,"excludeIgnoredUris",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"fetch",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"pull",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"push",1),z([(0,G.G)(),(0,I.Yz)()],GitHubGitProvider.prototype,"findRepositoryUri",1),z([(0,I.Rm)({args:{1:e=>e.join(",")}})],GitHubGitProvider.prototype,"getAheadBehindCommitCount",1),z([(0,G.G)((e,t)=>`${e.toString()}|${t?.isDirty}`),(0,I.Rm)({args:{1:e=>e?.isDirty}})],GitHubGitProvider.prototype,"getBlame",1),z([(0,I.Rm)({args:{1:"<contents>"}})],GitHubGitProvider.prototype,"getBlameContents",1),z([(0,G.G)((e,t,r,i)=>`${e.toString()}|${t}|${r?.isDirty}|${i?.forceSingleLine}`),(0,I.Rm)({args:{2:e=>e?.isDirty}})],GitHubGitProvider.prototype,"getBlameForLine",1),z([(0,I.Rm)({args:{2:"<contents>"}})],GitHubGitProvider.prototype,"getBlameForLineContents",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"getBlameForRange",1),z([(0,I.Rm)({args:{2:"<contents>"}})],GitHubGitProvider.prototype,"getBlameForRangeContents",1),z([(0,I.Rm)({args:{0:"<blame>"}})],GitHubGitProvider.prototype,"getBlameRange",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"getBranch",1),z([(0,I.Rm)({args:{1:!1}})],GitHubGitProvider.prototype,"getBranches",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"getChangedFilesCount",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"getCommit",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"getCommitBranches",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"getCommitCount",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"getCommitForFile",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"getCommitsForGraph",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"getCommitTags",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"getContributors",1),z([(0,G.G)(),(0,I.Rm)()],GitHubGitProvider.prototype,"getCurrentUser",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"getDefaultBranchName",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"getDiffForFile",1),z([(0,I.Rm)({args:{1:e=>"<contents>"}})],GitHubGitProvider.prototype,"getDiffForFileContents",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"getDiffForLine",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"getDiffStatus",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"getFileStatusForCommit",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"getLog",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"getLogRefsOnly",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"getLogForFile",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"getMergeBase",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"getMergeStatus",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"getRebaseStatus",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"getNextComparisonUris",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"getOldestUnpushedRefForFile",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"getPreviousComparisonUris",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"getPreviousComparisonUrisForLine",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"getIncomingActivity",1),z([(0,I.Rm)({args:{1:!1}})],GitHubGitProvider.prototype,"getRemotes",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"getRevisionContent",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"getStash",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"getStatusForFile",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"getStatusForFiles",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"getStatusForRepo",1),z([(0,I.Rm)({args:{1:!1}})],GitHubGitProvider.prototype,"getTags",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"getTreeEntryForRevision",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"getTreeForRevision",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"hasBranchOrTag",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"hasCommitBeenPushed",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"getDiffTool",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"openDiffTool",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"openDirectoryCompare",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"resolveReference",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"richSearchCommits",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"searchCommits",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"validateBranchOrTagName",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"validateReference",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"stageFile",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"stageDirectory",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"unstageFile",1),z([(0,I.Rm)()],GitHubGitProvider.prototype,"unstageDirectory",1),z([(0,G.G)()],GitHubGitProvider.prototype,"ensureRepositoryContext",1),z([(0,G.G)()],GitHubGitProvider.prototype,"ensureGitHub",1)},1116:(e,t,r)=>{r.r(t),r.d(t,{fromCommitFileStatus:()=>v,fromGitHubIssue:()=>f,fromGitHubIssueOrPullRequestState:()=>a,fromGitHubPullRequest:()=>m,fromGitHubPullRequestLite:()=>n,fromGitHubPullRequestMergeableState:()=>h,fromGitHubPullRequestReviewDecision:()=>u,fromGitHubPullRequestReviewState:()=>c,fromGitHubPullRequestStatusCheckRollupState:()=>g,toGitHubPullRequestMergeableState:()=>p,toGitHubPullRequestReviewDecision:()=>d,toGitHubPullRequestState:()=>l});var i=r(5248),s=r(8559),o=r(304);function n(e,t){return new o.B9(t,{name:e.author.login,avatarUrl:e.author.avatarUrl,url:e.author.url},String(e.number),e.id,e.title,e.permalink,{owner:e.repository.owner.login,repo:e.repository.name,accessLevel:y(e.repository.viewerPermission)},a(e.state),new Date(e.createdAt),new Date(e.updatedAt),null==e.closedAt?void 0:new Date(e.closedAt),null==e.mergedAt?void 0:new Date(e.mergedAt),void 0,void 0,{head:{exists:null!=e.headRepository,owner:e.headRepository?.owner.login,repo:e.headRepository?.name,sha:e.headRefOid,branch:e.headRefName,url:e.headRepository?.url},base:{exists:null!=e.repository,owner:e.repository?.owner.login,repo:e.repository?.name,sha:e.baseRefOid,branch:e.baseRefName,url:e.repository?.url},isCrossRepository:e.isCrossRepository})}function a(e){return"MERGED"===e?"merged":"CLOSED"===e?"closed":"opened"}function l(e){return"merged"===e?"MERGED":"closed"===e?"CLOSED":"OPEN"}function u(e){switch(e){case"APPROVED":return o.dq.Approved;case"CHANGES_REQUESTED":return o.dq.ChangesRequested;case"REVIEW_REQUIRED":return o.dq.ReviewRequired}}function c(e){switch(e){case"APPROVED":return o.c7.Approved;case"CHANGES_REQUESTED":return o.c7.ChangesRequested;case"COMMENTED":return o.c7.Commented;case"DISMISSED":return o.c7.Dismissed;case"PENDING":return o.c7.Pending}}function d(e){switch(e){case o.dq.Approved:return"APPROVED";case o.dq.ChangesRequested:return"CHANGES_REQUESTED";case o.dq.ReviewRequired:return"REVIEW_REQUIRED"}}function h(e){switch(e){case"MERGEABLE":return o.Q6.Mergeable;case"CONFLICTING":return o.Q6.Conflicting;case"UNKNOWN":return o.Q6.Unknown}}function p(e){switch(e){case o.Q6.Mergeable:return"MERGEABLE";case o.Q6.Conflicting:return"CONFLICTING";case o.Q6.Unknown:return"UNKNOWN"}}function g(e){switch(e){case"SUCCESS":case"EXPECTED":return o.gI.Success;case"FAILURE":case"ERROR":return o.gI.Failed;case"PENDING":return o.gI.Pending;default:return}}function m(e,t){return new o.B9(t,{name:e.author.login,avatarUrl:e.author.avatarUrl,url:e.author.url},String(e.number),e.id,e.title,e.permalink,{owner:e.repository.owner.login,repo:e.repository.name,accessLevel:y(e.repository.viewerPermission)},a(e.state),new Date(e.createdAt),new Date(e.updatedAt),null==e.closedAt?void 0:new Date(e.closedAt),null==e.mergedAt?void 0:new Date(e.mergedAt),h(e.mergeable),e.viewerCanUpdate,{head:{exists:null!=e.headRepository,owner:e.headRepository?.owner.login,repo:e.headRepository?.name,sha:e.headRefOid,branch:e.headRefName,url:e.headRepository?.url},base:{exists:null!=e.repository,owner:e.repository?.owner.login,repo:e.repository?.name,sha:e.baseRefOid,branch:e.baseRefName,url:e.repository?.url},isCrossRepository:e.isCrossRepository},e.isDraft,e.additions,e.deletions,e.totalCommentsCount,0,u(e.reviewDecision),e.reviewRequests.nodes.map(e=>null!=e.requestedReviewer?{isCodeOwner:e.asCodeOwner,reviewer:{name:e.requestedReviewer.login,avatarUrl:e.requestedReviewer.avatarUrl,url:e.requestedReviewer.url},state:o.c7.ReviewRequested}:void 0).filter(e=>!!e),e.latestReviews.nodes.map(e=>({reviewer:{name:e.author.login,avatarUrl:e.author.avatarUrl,url:e.author.url},state:c(e.state)})),e.assignees.nodes.map(e=>({name:e.login,avatarUrl:e.avatarUrl,url:e.url})),g(e.statusCheckRollup?.state))}function f(e,t){return new s.m2({id:t.id,name:t.name,domain:t.domain,icon:t.icon},String(e.number),e.id,e.title,e.url,new Date(e.createdAt),new Date(e.updatedAt),e.closed,a(e.state),{name:e.author.login,avatarUrl:e.author.avatarUrl,url:e.author.url},{owner:e.repository.owner.login,repo:e.repository.name,accessLevel:y(e.repository.viewerPermission)},e.assignees.nodes.map(e=>({name:e.login,avatarUrl:e.avatarUrl,url:e.url})),null==e.closedAt?void 0:new Date(e.closedAt),e.labels?.nodes==null?void 0:e.labels.nodes.map(e=>({color:e.color,name:e.name})),e.comments?.totalCount,e.reactions?.totalCount)}function y(e){switch(e){case"ADMIN":return s.LI.Admin;case"MAINTAIN":return s.LI.Maintain;case"WRITE":return s.LI.Write;case"TRIAGE":return s.LI.Triage;case"READ":return s.LI.Read;default:return s.LI.None}}function v(e){switch(e){case"added":return i.NO.Added;case"changed":case"modified":return i.NO.Modified;case"removed":return i.NO.Deleted;case"renamed":return i.NO.Renamed;case"copied":return i.NO.Copied}}},2035:(e,t,r)=>{r.r(t),r.d(t,{GitLabIntegration:()=>GitLabIntegration,GitLabSelfHostedIntegration:()=>GitLabSelfHostedIntegration});var i=r(6707),s=r(1014),o=r(65),n=r(1298),a=Object.defineProperty,l=Object.getOwnPropertyDescriptor;let u=n.Mt[n.Q7.GitLab],c=Object.freeze({id:u.id,scopes:u.scopes}),d=n.Mt[n.PY.GitLabSelfHosted],h=Object.freeze({id:d.id,scopes:d.scopes});let GitLabIntegrationBase=class GitLabIntegrationBase extends o.T5{async getProviderAccountForCommit({accessToken:e},t,r,i){return(await this.container.gitlab)?.getAccountForCommit(this,e,t.owner,t.name,r,{...i,baseUrl:this.apiBaseUrl})}async getProviderAccountForEmail({accessToken:e},t,r,i){return(await this.container.gitlab)?.getAccountForEmail(this,e,t.owner,t.name,r,{...i,baseUrl:this.apiBaseUrl})}async getProviderDefaultBranch({accessToken:e},t){return(await this.container.gitlab)?.getDefaultBranch(this,e,t.owner,t.name,{baseUrl:this.apiBaseUrl})}async getProviderIssueOrPullRequest({accessToken:e},t,r){return(await this.container.gitlab)?.getIssueOrPullRequest(this,e,t.owner,t.name,Number(r),{baseUrl:this.apiBaseUrl})}async getProviderPullRequestForBranch({accessToken:e},t,i,s){let{include:o,...n}=s??{},a=(await Promise.resolve().then(r.bind(r,372))).toGitLabMergeRequestState;return(await this.container.gitlab)?.getPullRequestForBranch(this,e,t.owner,t.name,i,{...n,include:o?.map(e=>a(e)),baseUrl:this.apiBaseUrl})}async getProviderPullRequestForCommit({accessToken:e},t,r){return(await this.container.gitlab)?.getPullRequestForCommit(this,e,t.owner,t.name,r,{baseUrl:this.apiBaseUrl})}async getProviderRepositoryMetadata({accessToken:e},t,r){return(await this.container.gitlab)?.getRepositoryMetadata(this,e,t.owner,t.name,{baseUrl:this.apiBaseUrl},r)}searchProviderMyPullRequests(e,t){return Promise.resolve(void 0)}searchProviderMyIssues(e,t){return Promise.resolve(void 0)}async mergeProviderPullRequest(e,t,r){return Promise.resolve(!1)}};let GitLabIntegration=class GitLabIntegration extends GitLabIntegrationBase{authProvider=c;id=n.Q7.GitLab;key=this.id;name="GitLab";get domain(){return u.domain}get apiBaseUrl(){return"https://gitlab.com/api"}};let GitLabSelfHostedIntegration=class GitLabSelfHostedIntegration extends GitLabIntegrationBase{constructor(e,t,r,i){super(e,t,r),this._domain=i}authProvider=h;id=n.PY.GitLabSelfHosted;key=`${this.id}:${this.domain}`;name="GitLab Self-Hosted";get domain(){return this._domain}get apiBaseUrl(){return`https://${this._domain}/api`}async connect(){return!!await (0,s.KH)(this.container,`Rich integration with ${this.name} is a Pro feature.`,{source:"integrations",detail:{action:"connect",integration:this.id}})&&super.connect()}};((e,t,r,i)=>{for(var s,o=l(t,r),n=e.length-1;n>=0;n--)(s=e[n])&&(o=s(t,r,o)||o);return i&&o&&a(t,r,o)})([(0,i.Rm)()],GitLabSelfHostedIntegration.prototype,"connect",1)},69:(e,t,r)=>{r.r(t),r.d(t,{GitLabApi:()=>GitLabApi});var i=r(1398),s=r(3459),o=r(7372),n=r(8803),a=r(304),l=r(3536),u=r(4832),c=r(6707),d=r(3916),h=r(3446),p=r(937),g=r(3166),m=r(372),f=Object.defineProperty,y=Object.getOwnPropertyDescriptor,v=(e,t,r,i)=>{for(var s,o=i>1?void 0:i?y(t,r):t,n=e.length-1;n>=0;n--)(s=e[n])&&(o=(i?s(t,r,o):s(o))||o);return i&&o&&f(t,r,o),o};let GitLabApi=class GitLabApi{_disposable;_projectIds=new Map;constructor(e){this._disposable=u.H.onDidChangeAny(e=>{(u.H.changedCore(e,["http.proxy","http.proxyStrictSSL"])||u.H.changed(e,["proxy","remotes"]))&&this.resetCaches()})}dispose(){this._disposable.dispose()}resetCaches(){this._projectIds.clear(),this._proxyAgents.clear()}_proxyAgents=new Map;getProxyAgent(e){if(o.HZ)return;let t=this._proxyAgents.get(e.id);if(void 0===t){let r=e.getIgnoreSSLErrors();t=(0,s.cQ)(!0!==r&&"force"!==r&&void 0),this._proxyAgents.set(e.id,t??null)}return t??void 0}async getAccountForCommit(e,t,r,s,o,a,l){let u=(0,h.dQ)(),c=await this.getProjectId(e,t,r,s,a?.baseUrl,l);if(c)try{let r;let s=await this.request(e,t,a?.baseUrl,`v4/projects/${c}/repository/commits/${o}?stats=false`,{method:"GET"},l,u);for(let i of(await this.findUser(e,t,s.author_name,a)))if(i.name===s.author_name||i.publicEmail&&i.publicEmail===s.author_email){if(r=i,"active"===i.state)break}else((0,g.Q_)(i.name,s.author_name)||i.publicEmail&&(0,g.Q_)(i.publicEmail,s.author_email))&&(r=i);if(null==r)return;return r.avatarUrl&&!/^([a-zA-Z][\w+.-]+):/.test(r.avatarUrl)&&(r.avatarUrl=i.Uri.joinPath(i.Uri.parse(r.webUrl),"..",r.avatarUrl).toString()),{provider:e,name:r.name||void 0,email:s.author_email||void 0,avatarUrl:r.avatarUrl||void 0,username:r.username||void 0}}catch(t){if(t instanceof n.g3)return;throw this.handleException(t,e,u)}}async getAccountForEmail(e,t,r,i,s,o){let a=(0,h.dQ)();try{let[r]=await this.findUser(e,t,s,o);if(null==r)return;return{provider:e,name:r.name||void 0,email:r.publicEmail||void 0,avatarUrl:r.avatarUrl||void 0,username:r.username||void 0}}catch(t){if(t instanceof n.g3)return;throw this.handleException(t,e,a)}}async getDefaultBranch(e,t,r,i,s,o){let a=(0,h.dQ)();try{let n=`query getDefaultBranch(
	$fullPath: ID!
) {
	project(fullPath: $fullPath) {
		repository {
			rootRef
		}
}`,l=await this.graphql(e,t,s?.baseUrl,n,{fullPath:`${r}/${i}`},o,a),u=l?.data?.project?.repository?.rootRef??void 0;if(null==u)return;return{provider:e,name:u}}catch(t){if(t instanceof n.g3)return;throw this.handleException(t,e,a)}}async getIssueOrPullRequest(e,t,r,i,s,o,a){let l=(0,h.dQ)();try{let n=`query getIssueOrMergeRequest(
	$fullPath: ID!
	$iid: String!
) {
	project(fullPath: $fullPath) {
		mergeRequest(iid: $iid) {
			author {
				name
				avatarUrl
				webUrl
			}
			iid
			title
			description
			state
			createdAt
			updatedAt
			mergedAt
			webUrl
		}
		issue(iid: $iid) {
			author {
				name
				avatarUrl
				webUrl
			}
			iid
			title
			description
			state
			createdAt
			updatedAt
			closedAt
			webUrl
		}
	}
}`,u=await this.graphql(e,t,o?.baseUrl,n,{fullPath:`${r}/${i}`,iid:String(s)},a,l);if(u?.data?.project?.issue!=null){let t=u.data.project.issue;return{provider:e,type:"issue",id:t.iid,nodeId:void 0,createdDate:new Date(t.createdAt),updatedDate:new Date(t.updatedAt),title:t.title,closed:"closed"===t.state,closedDate:null==t.closedAt?void 0:new Date(t.closedAt),url:t.webUrl,state:"locked"===t.state?"closed":t.state}}if(u?.data?.project?.mergeRequest!=null){let t=u.data.project.mergeRequest;return{provider:e,type:"pullrequest",id:t.iid,nodeId:void 0,createdDate:new Date(t.createdAt),updatedDate:new Date(t.updatedAt),title:t.title,closed:"closed"===t.state,closedDate:"closed"===t.state?new Date(t.updatedAt):void 0,url:t.webUrl,state:"locked"===t.state?"closed":t.state}}return}catch(t){if(t instanceof n.g3)return;throw this.handleException(t,e,l)}}async getPullRequestForBranch(e,t,r,i,s,o,l){let u=(0,h.dQ)();try{let n;let c=`
			nodes {
				iid
				author {
					name
					avatarUrl
					webUrl
				}
				title
				description
				state
				createdAt
				updatedAt
				mergedAt
				webUrl
			}`,d=`query getMergeRequestForBranch(
	$fullPath: ID!
	$branches: [String!]
) {
	project(fullPath: $fullPath) {
		${o?.include==null?`mergeRequests(sourceBranches: $branches sort: UPDATED_DESC first: 1) {
			${c}
		}`:""}
		${o?.include?.includes("opened")?`opened: mergeRequests(sourceBranches: $branches state: opened sort: UPDATED_DESC first: 1) {
			${c}
		}`:""}
		${o?.include?.includes("merged")?`merged: mergeRequests(sourceBranches: $branches state: merged sort: UPDATED_DESC first: 1) {
			${c}
		}`:""}
		${o?.include?.includes("closed")?`closed: mergeRequests(sourceBranches: $branches state: closed sort: UPDATED_DESC first: 1) {
			${c}
		}`:""}
	}
}`,h=await this.graphql(e,t,o?.baseUrl,d,{fullPath:`${r}/${i}`,branches:[s],state:o?.include},l,u);if(o?.include==null)n=h?.data?.project?.mergeRequests?.nodes?.[0];else for(let e of o.include){let t;"opened"===e?t=h?.data?.project?.opened?.nodes?.[0]:"merged"===e?t=h?.data?.project?.merged?.nodes?.[0]:"closed"===e&&(t=h?.data?.project?.closed?.nodes?.[0]),null!=t&&(null==n||new Date(t.updatedAt)>new Date(n.updatedAt))&&(n=t)}if(null==n)return;return new a.B9(e,{name:n.author?.name??"Unknown",avatarUrl:n.author?.avatarUrl??"",url:n.author?.webUrl??""},String(n.iid),void 0,n.title,n.webUrl,{owner:r,repo:i},(0,m.fromGitLabMergeRequestState)(n.state),new Date(n.createdAt),new Date(n.updatedAt),"closed"!==n.state?void 0:new Date(n.updatedAt),null==n.mergedAt?void 0:new Date(n.mergedAt))}catch(t){if(t instanceof n.g3)return;throw this.handleException(t,e,u)}}async getPullRequestForCommit(e,t,r,i,s,o,a){let l=(0,h.dQ)(),u=await this.getProjectId(e,t,r,i,o?.baseUrl,a);if(u)try{let n=await this.request(e,t,o?.baseUrl,`v4/projects/${u}/repository/commits/${s}/merge_requests`,{method:"GET"},a,l);if(null==n||0===n.length)return;return n.length>1&&n.sort((e,t)=>("opened"===e.state?-1:1)-("opened"===t.state?-1:1)||new Date(t.updated_at).getTime()-new Date(e.updated_at).getTime()),(0,m.fromGitLabMergeRequestREST)(n[0],e,{owner:r,repo:i})}catch(t){if(t instanceof n.g3)return;throw this.handleException(t,e,l)}}async getRepositoryMetadata(e,t,r,i,s,o){let a=(0,h.dQ)(),l=await this.getProjectId(e,t,r,i,s?.baseUrl,o);if(l)try{let r=await this.request(e,t,s?.baseUrl,`v4/projects/${l}`,{method:"GET"},o,a);if(null==r)return;return{provider:e,owner:r.namespace.full_path,name:r.path,isFork:null!=r.forked_from_project,parent:null!=r.forked_from_project?{owner:r.forked_from_project.namespace.full_path,name:r.forked_from_project.path}:void 0}}catch(t){if(t instanceof n.g3)return;throw this.handleException(t,e,a)}}async findUser(e,t,r,i,s){let o=(0,h.dQ)();try{let n=`query findUser(
$search: String!
) {
	users(search: $search) {
		nodes {
			id
			name
			username,
			publicEmail,
			state
			avatarUrl
			webUrl
		}
	}
}`,a=await this.graphql(e,t,i?.baseUrl,n,{search:r},s,o),l=a?.data?.users?.nodes;if(null==l||0===l.length)return[];let u=[];for(let e of l){let t=/gid:\/\/gitlab\/User\/([0-9]+)\b/.exec(e.id);null!=t&&u.push({id:parseInt(t[1],10),name:e.name,username:e.username,publicEmail:e.publicEmail||void 0,state:e.state,avatarUrl:e.avatarUrl,webUrl:e.webUrl})}return u}catch(t){if(t instanceof n.g3)return[];return this.handleException(t,e,o),[]}}getProjectId(e,t,r,i,s,o){let n=`${t}|${r}/${i}`,a=this._projectIds.get(n);return null==a&&(a=this.getProjectIdCore(e,t,r,i,s,o),this._projectIds.set(n,a)),a}async getProjectIdCore(e,t,r,i,s,o){let a=(0,h.dQ)();try{let n=`query getProjectId(
	$fullPath: ID!
) {
	project(fullPath: $fullPath) {
		id
	}
}`,l=await this.graphql(e,t,s,n,{fullPath:`${r}/${i}`},o,a),u=l?.data?.project?.id;if(null==u)return;let c=/gid:\/\/gitlab\/Project\/([0-9]+)\b/.exec(u);if(null==c)return;let d=c[1];return(0,h.TT)(a,` \u2022 projectId=${d}`),d}catch(t){if(t instanceof n.g3)return;this.handleException(t,e,a);return}}async graphql(e,t,r,o,a,l,u){let c;try{let i=(0,p.u)(`[GITLAB] POST ${r}`,{log:!1}),u=this.getProxyAgent(e);try{let i;if(null!=l){if(l.isCancellationRequested)throw new n.AL;i=new AbortController,l.onCancellationRequested(()=>i.abort())}if((c=await (0,s.Ff)(e.getIgnoreSSLErrors(),()=>(0,s.hd)(`${r??"https://gitlab.com/api"}/graphql`,{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},agent:u,signal:i?.signal,body:JSON.stringify({query:o,variables:a})}))).ok){let e=await c.json();if("errors"in e)throw new n.QI("GitLab",c,e.errors);return e}throw new n.QI("GitLab",c)}finally{let e=/(^[^({\n]+)/.exec(o),t=` ${e?.[1].trim()??o}`;i?.stop({message:t})}}catch(r){throw r instanceof n.QI||"AbortError"===r.name?this.handleRequestError(e,t,r,u):d.Vy.isDebugging&&i.window.showErrorMessage(`GitLab request failed: ${r.message}`),r}}async request(e,t,r,o,a,l,u){let c;let h=`${r??"https://gitlab.com/api"}/${o}`;try{let r=(0,p.u)(`[GITLAB] ${a?.method??"GET"} ${h}`,{log:!1}),i=this.getProxyAgent(e);try{let r;if(null!=l){if(l.isCancellationRequested)throw new n.AL;r=new AbortController,l.onCancellationRequested(()=>r.abort())}if((c=await (0,s.Ff)(e.getIgnoreSSLErrors(),()=>(0,s.hd)(h,{headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},agent:i,signal:r?.signal,...a}))).ok)return await c.json();throw new n.QI("GitLab",c)}finally{r?.stop()}}catch(r){throw r instanceof n.QI||"AbortError"===r.name?this.handleRequestError(e,t,r,u):d.Vy.isDebugging&&i.window.showErrorMessage(`GitLab request failed: ${r.message}`),r}}handleRequestError(e,t,r,s){if("AbortError"===r.name||!(r instanceof n.QI))throw new n.AL(r);switch(r.status){case 404:case 410:case 422:throw new n.g3(r);case 401:throw new n.v3("gitlab",n.R.Unauthorized,r);case 403:if(r.message.includes("rate limit exceeded")){let e;let i=r.response?.headers?.get("x-ratelimit-reset");throw null!=i&&Number.isNaN(e=parseInt(i,10))&&(e=void 0),new n.qc(r,t,e)}throw new n.v3("gitlab",n.R.Forbidden,r);case 500:d.Vy.error(r,s),null!=r.response&&(e?.trackRequestException(),(0,l.wW)(`${e?.name??"GitLab"} failed to respond and might be experiencing issues.${null==e||"gitlab"===e.id?" Please visit the [GitLab status page](https://status.gitlab.com) for more information.":""}`));return;case 502:if(d.Vy.error(r,s),r.message.includes("timeout")){e?.trackRequestException(),(0,l.lW)(e?.name??"GitLab");return}break;default:if(r.status>=400&&r.status<500)throw new n.Iz(r)}d.Vy.error(r,s),d.Vy.isDebugging&&i.window.showErrorMessage(`GitLab request failed: ${r.response?.errors?.[0]?.message??r.message}`)}handleException(e,t,r){return d.Vy.error(e,r),e instanceof n.v3&&this.showAuthenticationErrorMessage(e,t),e}async showAuthenticationErrorMessage(e,t){if(e.reason===n.R.Unauthorized||e.reason===n.R.Forbidden){let r="Reauthenticate";await i.window.showErrorMessage(`${e.message}. Would you like to try reauthenticating${e.reason===n.R.Forbidden?" to provide additional access":""}?`,r)===r&&(await t.reauthenticate(),this.resetCaches())}else i.window.showErrorMessage(e.message)}};v([(0,c.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitLabApi.prototype,"getAccountForCommit",1),v([(0,c.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitLabApi.prototype,"getAccountForEmail",1),v([(0,c.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitLabApi.prototype,"getDefaultBranch",1),v([(0,c.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitLabApi.prototype,"getIssueOrPullRequest",1),v([(0,c.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitLabApi.prototype,"getPullRequestForBranch",1),v([(0,c.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitLabApi.prototype,"getPullRequestForCommit",1),v([(0,c.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitLabApi.prototype,"getRepositoryMetadata",1)},372:(e,t,r)=>{r.r(t),r.d(t,{fromGitLabMergeRequestREST:()=>n,fromGitLabMergeRequestState:()=>s,toGitLabMergeRequestState:()=>o});var i=r(304);function s(e){return"locked"===e?"closed":e}function o(e){return e}function n(e,t,r){return new i.B9(t,{name:e.author?.name??"Unknown",avatarUrl:e.author?.avatar_url??"",url:e.author?.web_url??""},String(e.iid),void 0,e.title,e.web_url,r,s(e.state),new Date(e.created_at),new Date(e.updated_at),null==e.closed_at?void 0:new Date(e.closed_at),null==e.merged_at?void 0:new Date(e.merged_at))}},7832:(e,t,r)=>{r.r(t),r.d(t,{JiraIntegration:()=>JiraIntegration});var i=r(4026),s=r(65),o=r(1298);let n=o.Mt[o.tp.Jira],a=Object.freeze({id:n.id,scopes:n.scopes});let JiraIntegration=class JiraIntegration extends s.On{authProvider=a;id=o.tp.Jira;key=this.id;name="Jira";get domain(){return n.domain}get apiBaseUrl(){return"https://api.atlassian.com"}_autolinks;async autolinks(){if(!(this.maybeConnected??await this.isConnected())||null==this._session||null==this._organizations||null==this._projects)return[];this._autolinks||=new Map;let e=this._autolinks.get(this._session.accessToken);if(null!=e)return e;let t=[],r=this._organizations.get(this._session.accessToken);if(null!=r)for(let e of r){let r=this._projects.get(`${this._session.accessToken}:${e.id}`);if(null!=r)for(let i of r){let r=`${i.key}-`;t.push({type:"issue",url:`${e.url}/browse/${r}<num>`,prefix:r,title:`Open Issue ${r}<num> on ${e.name}`,description:`${e.name} Issue ${r}<num>`,descriptor:{...e}})}}return this._autolinks.set(this._session.accessToken,t),t}async getProviderAccountForResource({accessToken:e},t){let r=await this.getProvidersApi(),i=await r.getCurrentUserForResource(this.id,t.id,{accessToken:e});if(null!=i)return(0,o.tf)(i,this)}_organizations;async getProviderResourcesForUser({accessToken:e},t=!1){if(this._organizations||=new Map,null==this._organizations.get(e)||t){let t=await this.getProvidersApi(),r=await t.getJiraResourcesForCurrentUser({accessToken:e});this._organizations.set(e,null!=r?r.map(e=>({...e,key:e.id})):void 0)}return this._organizations.get(e)}_projects;async getProviderProjectsForResources({accessToken:e},t,r=!1){this._projects||=new Map;let i=[];if(r)i=t;else for(let r of t){let t=`${e}:${r.id}`;null==this._projects.get(t)&&i.push(r)}if(i.length>0){let t=await this.getProvidersApi(),r=await t.getJiraProjectsForResources(i.map(e=>e.id),{accessToken:e});for(let t of i){let i=r?.filter(e=>e.resourceId===t.id);null!=i&&this._projects.set(`${e}:${t.id}`,i.map(e=>({...e})))}}return t.reduce((t,r)=>{let i=this._projects.get(`${e}:${r.id}`);return null!=i&&t.push(...i),t},[])}async getProviderIssuesForProject({accessToken:e},t,r){let s;let n=await this.getProvidersApi(),a=async(r,i)=>{let s=await n.getIssuesForProject(this.id,t.name,t.resourceId,{authorLogin:i===o.mN.Author?r:void 0,assigneeLogins:i===o.mN.Assignee?[r]:void 0,mentionLogin:i===o.mN.Mention?r:void 0,accessToken:e});return s?.map(e=>o.oH(e,this,i)).filter(e=>void 0!==e)};if(r?.user!=null&&r.filters.length>0){let e=Promise.allSettled(r.filters.map(e=>a(r.user,e)));s=[...(0,i.Bq)((0,i.x1)(await e,e=>"fulfilled"===e.status&&null!=e.value?e.value:void 0))];let t=new Map;for(let e of s)if(t.has(e.issue.id)){let r=t.get(e.issue.id);r.reasons=[...r.reasons,...e.reasons]}else t.set(e.issue.id,e);return[...t.values()]}return s=await n.getIssuesForProject(this.id,t.name,t.resourceId,{accessToken:e}),s?.map(e=>o.oH(e,this)).filter(e=>void 0!==e)}async searchProviderMyIssues(e,t,r){let i=t??await this.getProviderResourcesForUser(e);if(!i)return;let s=await this.getProvidersApi(),n=[];for(let t of i){let r=(await this.getProviderAccountForResource(e,t))?.username,i=await s.getIssuesForResourceForCurrentUser(this.id,t.id,{accessToken:e.accessToken}),a=i?.map(e=>o.oH(e,this,void 0,r)).filter(e=>null!=e);null!=a&&n.push(...a)}return n}async getProviderIssueOrPullRequest(e,t,r){let i=await this.getProvidersApi(),s=(await this.getProviderAccountForResource(e,t))?.username,n=await i.getIssue(this.id,t.id,r,{accessToken:e.accessToken});return null!=n?o.oH(n,this,void 0,s)?.issue:void 0}async providerOnConnect(){if(this._autolinks=void 0,null==this._session)return;let e=this.container.storage.get(`jira:${this._session.accessToken}:organizations`),t=this.container.storage.get(`jira:${this._session.accessToken}:projects`),r=e?.data?.map(e=>({...e})),i=t?.data?.map(e=>({...e}));for(let s of(null==e&&(r=await this.getProviderResourcesForUser(this._session,!0),await this.container.storage.store(`jira:${this._session.accessToken}:organizations`,{v:1,timestamp:Date.now(),data:r})),this._organizations||=new Map,this._organizations.set(this._session.accessToken,r),null==t&&r?.length&&(i=await this.getProviderProjectsForResources(this._session,r),await this.container.storage.store(`jira:${this._session.accessToken}:projects`,{v:1,timestamp:Date.now(),data:i})),this._projects||=new Map,i??[])){let e=`${this._session.accessToken}:${s.resourceId}`,t=this._projects.get(e);null==t?this._projects.set(e,[s]):t.push(s)}}providerOnDisconnect(){this._organizations=void 0,this._projects=void 0,this._autolinks=void 0}}}};