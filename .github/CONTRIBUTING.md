## Contributing to **hyprarch2**
This doc shows how to file good issues, propose changes, test safely in a VM, and open crisp PRs.

### Code of Conduct
By participating you agree to the project’s [`Code of Conduct`](/CODE_OF_CONDUCT.md).

### Repo overview
- [**dotfiles/**](/dotfiles) — user config (e.g. `hypr/` with `conf/` including `keybindings.conf`, `monitor.conf`).
- [**src/**](/src) — installer wrapper and scripts.
- [**assets/**](/assets) — images and misc assets used in README/themes.
- [**.version/**](/.version) — versioning.
    
### Ways to contribute
- **Bug reports**: crashes, broken bindings, install failures, theming glitches.
- **Small fixes**: typos, docs, missing deps, minor config tweaks.
- **Features**: new keybinds, wallpapers/theme variants, opt-in modules.
- **Performance/cleanups**: faster startup, fewer external calls, smaller dependency surface.

### Style & conventions
**Commits** — use [Conventional Commits](https://www.conventionalcommits.org/) (enforce manually):
- `feat: add …`
- `fix: correct …`
- `docs: update …`
- `refactor: …`, `perf: …`, `style: …`, `ci: …`, `chore: …`

**Bash**
- `set -Eeuo pipefail` in non-trivial scripts; trap errors.
- Prefer `#!/usr/bin/env bash` and POSIX where reasonable.
- Avoid `sudo` inside scripts when possible; document needed privileges.
    
**Hyprland**
- Keep defaults sensible; no per-host assumptions.
- Gate optional modules with `env` flags or includes.
- Comment non-obvious rules and animations.
    
**Waybar/CSS**
- Scope selectors; avoid hardcoding monitor names/workspaces.    
- Provide light/dark variants where practical.
    
**Go (installer)**
- Use `gofmt`/`go vet`; keep functions small and focused.
- No breaking CLI flag changes without deprecation.
    
### Submitting a pull request
1. **Sync** with upstream `master`:
```bash
git remote add upstream https://github.com/g5ostXa/hyprarch2.git || true
git fetch upstream && git rebase upstream/master
```
    
2. **Self-checklist** (keep PRs focused):
- Describes _what_ and _why_ in the PR body.
-  Works on a fresh Arch VM.
-  No machine-specific values committed.
-  `shfmt` + `shellcheck` (and `stylua`/`prettier` if touched).
-  Screenshots for UI/theme changes.
-  Docs updated if behavior changed.
        
3. **Open PR** against `master` with a clear title using Conventional Commits.
    
4. **Review**: maintainers may request small changes or ask you to split large PRs.
    
### Issues quality
Use the GitHub Issues tab. Include:
- **Environment** (VM vs bare metal, CPU/GPU, display manager if any).
- **Repro steps** (exact commands).
- **Logs**
- **Screenshots** for visual glitches.

### Security & secrets
- Never commit API keys, tokens, or private wallpapers.
- Report security issues privately to the maintainer instead of filing a public issue first.
    
### Licensing
- By contributing, you agree that your changes are licensed under the **GPL-3.0** license of this repository.

### Maintainer
- @g5ostXa (project owner)
