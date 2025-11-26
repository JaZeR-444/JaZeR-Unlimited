#!/bin/bash
# Verify GitHub Pages site structure

echo "🔍 Verifying GitHub Pages Site Structure"
echo "========================================"
echo ""

ERRORS=0
WARNINGS=0

# Check for required files
echo "📄 Checking required files..."

if [ -f "index.html" ]; then
    echo "  ✅ index.html exists"
else
    echo "  ❌ index.html is missing"
    ERRORS=$((ERRORS + 1))
fi

if [ -f "404.html" ]; then
    echo "  ✅ 404.html exists"
else
    echo "  ⚠️  404.html is missing (recommended)"
    WARNINGS=$((WARNINGS + 1))
fi

if [ -f "robots.txt" ]; then
    echo "  ✅ robots.txt exists"
else
    echo "  ⚠️  robots.txt is missing (recommended)"
    WARNINGS=$((WARNINGS + 1))
fi

if [ -f "sitemap.xml" ]; then
    echo "  ✅ sitemap.xml exists"
else
    echo "  ⚠️  sitemap.xml is missing (recommended)"
    WARNINGS=$((WARNINGS + 1))
fi

echo ""
echo "📁 Checking asset directories..."

if [ -d "css" ]; then
    echo "  ✅ css/ directory exists"
    CSS_FILES=$(find css -name "*.css" 2>/dev/null | wc -l)
    echo "     Found $CSS_FILES CSS file(s)"
else
    echo "  ⚠️  css/ directory is missing"
    WARNINGS=$((WARNINGS + 1))
fi

if [ -d "js" ]; then
    echo "  ✅ js/ directory exists"
    JS_FILES=$(find js -name "*.js" 2>/dev/null | wc -l)
    echo "     Found $JS_FILES JavaScript file(s)"
else
    echo "  ⚠️  js/ directory is missing"
    WARNINGS=$((WARNINGS + 1))
fi

if [ -d "images" ]; then
    echo "  ✅ images/ directory exists"
    IMG_FILES=$(find images -type f 2>/dev/null | wc -l)
    echo "     Found $IMG_FILES image file(s)"
else
    echo "  ⚠️  images/ directory is missing"
    WARNINGS=$((WARNINGS + 1))
fi

echo ""
echo "🔗 Checking HTML structure..."

if [ -f "index.html" ]; then
    if grep -q "<!DOCTYPE html>" index.html; then
        echo "  ✅ index.html has DOCTYPE declaration"
    else
        echo "  ❌ index.html missing DOCTYPE declaration"
        ERRORS=$((ERRORS + 1))
    fi
    
    if grep -q "<title>" index.html; then
        echo "  ✅ index.html has title tag"
    else
        echo "  ⚠️  index.html missing title tag"
        WARNINGS=$((WARNINGS + 1))
    fi
    
    if grep -q "<meta.*viewport" index.html; then
        echo "  ✅ index.html has viewport meta tag"
    else
        echo "  ⚠️  index.html missing viewport meta tag (mobile responsiveness)"
        WARNINGS=$((WARNINGS + 1))
    fi
fi

echo ""
echo "📊 Summary"
echo "========="
echo "  Errors:   $ERRORS"
echo "  Warnings: $WARNINGS"
echo ""

if [ $ERRORS -eq 0 ]; then
    echo "✅ Site structure is valid for GitHub Pages!"
    if [ $WARNINGS -gt 0 ]; then
        echo "⚠️  Consider addressing the warnings above for best practices."
    fi
    exit 0
else
    echo "❌ Please fix the errors above before deploying."
    exit 1
fi
