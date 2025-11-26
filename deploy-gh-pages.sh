#!/bin/bash
# Script to create and deploy the gh-pages branch for GitHub Pages

set -e  # Exit on error

echo "🚀 GitHub Pages Deployment Script"
echo "=================================="
echo ""

# Check if we're in a git repository
if [ ! -d .git ]; then
    echo "❌ Error: Not in a git repository"
    exit 1
fi

# Save current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "📍 Current branch: $CURRENT_BRANCH"

# Check if gh-pages branch already exists
if git show-ref --verify --quiet refs/heads/gh-pages; then
    echo "⚠️  gh-pages branch already exists locally"
    read -p "Do you want to delete and recreate it? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git branch -D gh-pages
        echo "✅ Deleted existing gh-pages branch"
    else
        echo "❌ Aborted"
        exit 1
    fi
fi

# Create gh-pages branch from current commit
echo "📝 Creating gh-pages branch from current commit..."
git checkout -b gh-pages

echo "✅ gh-pages branch created successfully!"
echo ""
echo "📤 Next steps:"
echo "1. Push the branch to GitHub:"
echo "   git push -u origin gh-pages"
echo ""
echo "2. Configure GitHub Pages in repository settings:"
echo "   - Go to: https://github.com/JaZeR-444/JaZeR-Unlimited/settings/pages"
echo "   - Source: Deploy from a branch"
echo "   - Branch: gh-pages / (root)"
echo "   - Click Save"
echo ""
echo "3. Your site will be available at:"
echo "   https://jazer-444.github.io/JaZeR-Unlimited/"
echo ""
echo "For more details, see GITHUB_PAGES_DEPLOYMENT.md"

# Return to original branch option
read -p "Return to branch '$CURRENT_BRANCH'? (Y/n): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Nn]$ ]]; then
    git checkout "$CURRENT_BRANCH"
    echo "✅ Returned to $CURRENT_BRANCH"
fi
