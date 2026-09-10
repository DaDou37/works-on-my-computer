# Pre-Deployment Checklist

> **Student template:** build a checklist for this release before deployment. The headings guide your thinking; the checks themselves are yours to write.

## Release identity

- [ ] New version planned: 1.1.0 (currently 1.0.0 in config.js)
- [ ] Release name confirmed: "Confidence Update"

## Target environment

- [ ] Same environment as v1.0.0: GitHub Pages
- [ ] Pages source still set to "GitHub Actions" in Settings

## Access and prerequisites

- [ ] Write access to my fork confirmed
- [ ] `.github/workflows/deploy.yml` still present and working
- [ ] Latest v1.0.0 deployment confirmed successful before starting changes

## Files and configuration

- [ ] `public/config.js` to update: add support contact, release channel, and version "1.1.0"
- [ ] `public/index.html` to update: add "Copy current message" button
- [ ] `public/app.js` to update: copy logic plus visible success/failure feedback

## Security

- [ ] No passwords, API keys or tokens to be added anywhere
- [ ] Support contact value is fictional only

## Deployment readiness

- [ ] All three existing buttons must still work 
- [ ] New copy button tested locally/in preview before committing

## Recovery readiness

- [ ] Last known stable commit noted: 522ac2d (v1.0.0 + added excuse)
- [ ] I know how to revert a commit if the new deployment breaks something

## Post-deployment verification prepared

- [ ] Reload the live site (Ctrl+F5) after deployment
- [ ] Check the copy button works and shows a confirmation message
- [ ] Confirm "1.1.0" is displayed on the page

## Final decision

- Ready to deploy? **Yes**
- If no, what must be resolved first? N/A
