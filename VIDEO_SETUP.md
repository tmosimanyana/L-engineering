# Video Background Setup

## 📹 Adding Your Hero Video

Your website now features a stunning video background! To make it work:

### Step 1: Place Your Video
Copy your `hero.mp4` file to the `client/public/` directory:
```
client/public/hero.mp4
```

### Step 2: Video Requirements
For best performance and user experience:
- **Format**: MP4 (H.264 codec recommended)
- **Resolution**: 1920x1080 (Full HD) or 3840x2160 (4K)
- **File Size**: Keep under 10MB for faster loading
- **Duration**: 10-30 seconds (it will loop automatically)
- **Aspect Ratio**: 16:9 works best

### Step 3: Video Optimization Tips
To compress your video and reduce file size:
```bash
# Using ffmpeg (if you have it installed)
ffmpeg -i hero.mp4 -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 128k hero-optimized.mp4
```

Or use online tools like:
- CloudConvert (https://cloudconvert.com)
- HandBrake (https://handbrake.fr)
- Adobe Media Encoder

## 🎨 Customization

### Update Text and Colors
Edit `client/src/components/VideoHero.tsx` to customize:
- Heading text
- Subheading
- Button labels and actions
- Color gradients
- Overlay opacity

### Change Overlay Effects
The video has multiple overlay layers:
1. Black gradient (for text readability)
2. Animated purple-blue gradient (for visual interest)

Adjust opacity and colors in the VideoHero component.

### Adjust Video Playback
In `VideoHero.tsx`, the video element has these properties:
- `autoPlay`: Starts automatically
- `loop`: Repeats infinitely
- `muted`: No sound (required for autoplay)
- `playsInline`: Mobile-friendly

## 🚀 Features Included

✨ **Smooth Animations**: Framer Motion powers elegant entrance effects
🎬 **Video Fallback**: Displays message if video can't load
📱 **Responsive Design**: Looks great on all screen sizes
♿ **Accessible**: Proper semantic HTML and ARIA labels
⚡ **Optimized Performance**: Video loads efficiently
🎨 **Beautiful Overlays**: Gradient effects for better text contrast

## 📝 Fallback Options

If you don't have a video yet, you can:
1. Use a placeholder video from: https://coverr.co or https://pexels.com/videos
2. Replace with a static image background
3. Use a CSS gradient background

## 🛠️ Development

Run the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

## 🎯 Next Steps

1. Add your hero.mp4 to `client/public/`
2. Customize the text in `VideoHero.tsx`
3. Update the brand name in `App.tsx`
4. Add your logo and favicon
5. Connect the CTA buttons to your routes/actions

Enjoy your stunning video background website! 🌟
