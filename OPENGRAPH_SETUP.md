# Open Graph Images Setup

## 🖼️ **Meta Preview Images for Social Media**

Your website now has dynamic Open Graph images that will display beautifully when shared on social media platforms like Facebook, Twitter, LinkedIn, and WhatsApp!

## ✅ **What's Implemented:**

### **1. Dynamic Open Graph Image Generation**
- **API Route**: `/api/og` - Generates custom images with dynamic titles and descriptions
- **Static Route**: `/api/og-static` - Fallback image for the homepage
- **Page-Specific Images**: Each page has its own custom preview image

### **2. Page-Specific Metadata**
- **Homepage**: General web design services
- **About**: Team and company information
- **Contact**: Contact information and consultation
- **Templates**: Portfolio and template showcase
- **FAQ**: Help and support information
- **Process**: Web design workflow

### **3. Social Media Optimization**
- **Facebook**: Open Graph tags
- **Twitter**: Twitter Card tags
- **LinkedIn**: Professional sharing
- **WhatsApp**: Rich link previews

## 🎨 **Image Features:**

### **Design Elements:**
- ✅ **Brand Colors**: Your gradient theme (purple to blue)
- ✅ **Logo**: LocalGlobalWeb branding
- ✅ **Contact Info**: Phone, location, website
- ✅ **Professional Typography**: Clean, readable text
- ✅ **Background Patterns**: Subtle visual elements

### **Technical Specifications:**
- **Dimensions**: 1200x630px (optimal for social media)
- **Format**: PNG with transparency support
- **Performance**: Edge runtime for fast generation
- **Caching**: Automatic caching by social platforms

## 🔧 **How to Test:**

### **1. Facebook Sharing Debugger**
1. Go to [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
2. Enter your URL: `https://localglobalweb.com`
3. Click "Debug" to see the preview
4. Click "Scrape Again" to refresh cache

### **2. Twitter Card Validator**
1. Go to [Twitter Card Validator](https://cards-dev.twitter.com/validator)
2. Enter your URL: `https://localglobalweb.com`
3. See the preview and card type

### **3. LinkedIn Post Inspector**
1. Go to [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
2. Enter your URL: `https://localglobalweb.com`
3. View the preview

### **4. WhatsApp Preview**
1. Open WhatsApp
2. Share your website link
3. See the rich preview

## 📱 **Test URLs:**

### **Homepage:**
```
https://localglobalweb.com
```

### **About Page:**
```
https://localglobalweb.com/about
```

### **Contact Page:**
```
https://localglobalweb.com/contact
```

### **Templates Page:**
```
https://localglobalweb.com/templates
```

### **FAQ Page:**
```
https://localglobalweb.com/faq
```

### **Process Page:**
```
https://localglobalweb.com/process
```

## 🎯 **Customization Options:**

### **1. Change Colors:**
Update the gradient in `/api/og` and `/api/og-static`:
```css
backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
```

### **2. Update Contact Info:**
Modify the footer section in the image generation:
```javascript
<span>📍 Dublin, Ireland</span>
<span>📞 (089) 2781782</span>
<span>🌐 localglobalweb.com</span>
```

### **3. Add Logo:**
Replace the emoji with your actual logo:
```javascript
// Instead of 🚀 LocalGlobalWeb
// Use your logo image
```

## 🚨 **Troubleshooting:**

### **Images Not Showing:**
1. **Check URL**: Ensure the API routes are accessible
2. **Clear Cache**: Social platforms cache images for 24 hours
3. **Test Direct**: Visit `/api/og-static` directly in browser
4. **Check Console**: Look for any errors in browser console

### **Wrong Image Displaying:**
1. **Force Refresh**: Use social media debuggers to refresh cache
2. **Check Metadata**: Verify Open Graph tags are correct
3. **Test Different Pages**: Each page should show different images

### **Performance Issues:**
1. **Edge Runtime**: Images generate on edge for speed
2. **Caching**: Social platforms cache images automatically
3. **Optimization**: Images are optimized for web delivery

## 📊 **Benefits:**

- ✅ **Professional Appearance**: Beautiful previews on social media
- ✅ **Increased Engagement**: Rich previews attract more clicks
- ✅ **Brand Consistency**: All shares show your branding
- ✅ **SEO Benefits**: Better social media presence
- ✅ **Mobile Friendly**: Optimized for mobile sharing

## 🎉 **Your website now has professional social media previews!**

When anyone shares your website on social media, it will display a beautiful, branded preview image that matches your website design and includes all your contact information.
