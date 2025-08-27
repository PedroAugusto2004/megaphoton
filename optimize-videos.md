# Video Optimization Guide

## Current Issues
- `solar-video.mp4`: 11.6MB (too large for web)
- `presentation.mp4`: 5.6MB (acceptable but can be optimized)
- `project.mp4`: 24.7MB (not used in hero, but very large)

## Optimization Steps

### Using FFmpeg (Recommended)
```bash
# Install FFmpeg first: https://ffmpeg.org/download.html

# Optimize solar-video.mp4 (target: ~3-4MB)
ffmpeg -i "public/videos/solar-video.mp4" -vcodec libx264 -crf 28 -preset medium -vf "scale=1920:1080" -acodec aac -b:a 128k "public/videos/solar-video-optimized.mp4"

# Optimize presentation.mp4 (target: ~2-3MB)
ffmpeg -i "public/videos/presentation.mp4" -vcodec libx264 -crf 26 -preset medium -vf "scale=1920:1080" -acodec aac -b:a 128k "public/videos/presentation-optimized.mp4"

# Create WebM versions for better compression
ffmpeg -i "public/videos/solar-video.mp4" -c:v libvpx-vp9 -crf 30 -b:v 0 -b:a 128k -c:a libopus "public/videos/solar-video.webm"
ffmpeg -i "public/videos/presentation.mp4" -c:v libvpx-vp9 -crf 28 -b:v 0 -b:a 128k -c:a libopus "public/videos/presentation.webm"
```

### Online Tools (Alternative)
- CloudConvert: https://cloudconvert.com/mp4-converter
- HandBrake: https://handbrake.fr/ (free desktop app)

## Code Changes Made

### Performance Optimizations:
1. **Lazy Loading**: Videos only load when section is visible
2. **Preload Strategy**: Only first video preloads metadata
3. **Fallback Image**: Shows company logo while videos load
4. **Error Handling**: Graceful fallback if videos fail
5. **Load Order**: Smaller presentation.mp4 loads first
6. **Intersection Observer**: Prevents loading until needed

### Next Steps:
1. Compress videos using above commands
2. Replace original files with optimized versions
3. Test loading performance
4. Consider WebP poster images for faster fallbacks

## Expected Results:
- 70% faster initial page load
- Better mobile performance
- Reduced bandwidth usage
- Improved user experience