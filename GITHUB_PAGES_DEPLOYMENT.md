# GitHub Pages Deployment Guide

This guide will help you deploy the JaZeR website to GitHub Pages.

## Current Status

✅ The repository contains a complete static website with all necessary files:
- `index.html` - Main website page
- `404.html` - Custom error page
- `css/style.css` - Styling
- `js/script.js` - JavaScript functionality
- `images/` - Logo and brand assets
- `robots/robots.txt` - Search engine instructions
- `sitemap/sitemap.xml` - Site structure

## Deployment Steps

### Option 1: Deploy from gh-pages Branch (Recommended)

1. **Create the gh-pages branch:**
   ```bash
   git checkout -b gh-pages
   git push -u origin gh-pages
   ```

2. **Enable GitHub Pages in Repository Settings:**
   - Go to your repository on GitHub: https://github.com/JaZeR-444/JaZeR-Unlimited
   - Click on "Settings" tab
   - Scroll down to "Pages" section (left sidebar under "Code and automation")
   - Under "Source", select "Deploy from a branch"
   - Under "Branch", select `gh-pages` and `/` (root) directory
   - Click "Save"

3. **Wait for deployment:**
   - GitHub Actions will automatically build and deploy your site
   - This usually takes 1-2 minutes
   - You'll see a green checkmark when deployment is successful

4. **Access your site:**
   - Your site will be available at: `https://jazer-444.github.io/JaZeR-Unlimited/`
   - Or if you have a custom domain configured: `https://jazeratx.com/`

### Option 2: Deploy from Main Branch

If you prefer to deploy directly from your main/master branch:

1. **Enable GitHub Pages in Repository Settings:**
   - Go to Settings → Pages
   - Under "Source", select "Deploy from a branch"
   - Under "Branch", select your main branch (e.g., `main` or `master`) and `/` (root)
   - Click "Save"

### Option 3: Use GitHub Actions (Most Flexible)

For more control, you can use GitHub Actions workflow:

1. **Create `.github/workflows/pages.yml`:**
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: ["main"]
     workflow_dispatch:

   permissions:
     contents: read
     pages: write
     id-token: write

   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - name: Setup Pages
           uses: actions/configure-pages@v4
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: '.'
         - name: Deploy to GitHub Pages
           uses: actions/deploy-pages@v4
   ```

2. **Enable GitHub Pages:**
   - Go to Settings → Pages
   - Under "Source", select "GitHub Actions"

## Custom Domain Setup (Optional)

If you want to use your custom domain `jazeratx.com`:

1. **Add CNAME record in your DNS settings:**
   - Point your domain to: `jazer-444.github.io`

2. **Configure in GitHub:**
   - Go to Settings → Pages
   - Enter your custom domain in "Custom domain" field
   - Check "Enforce HTTPS" (recommended)

3. **Create CNAME file:**
   ```bash
   echo "jazeratx.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

## Verification

After deployment, verify:
- ✅ Site loads at the GitHub Pages URL
- ✅ All images display correctly
- ✅ CSS styling is applied
- ✅ JavaScript functionality works
- ✅ Navigation between pages works
- ✅ 404 page displays for invalid URLs

## Troubleshooting

### Site not loading?
- Wait 2-3 minutes after first deployment
- Check GitHub Actions tab for build errors
- Ensure branch and directory are correctly selected

### Images or styles not loading?
- Verify paths are relative (not absolute)
- Check that files are committed to the branch
- Clear browser cache and reload

### 404 errors?
- Ensure `index.html` is in the root directory
- Check that the branch selection is correct

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [GitHub Actions for Pages](https://github.com/actions/deploy-pages)

## Next Steps

After successful deployment:
1. Test all functionality on the live site
2. Set up custom domain if desired
3. Configure SSL/HTTPS (automatic with GitHub Pages)
4. Submit sitemap to search engines
5. Monitor site analytics and performance
