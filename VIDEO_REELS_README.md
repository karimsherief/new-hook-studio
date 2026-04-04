# Video Reels Section Setup

## Overview

The Video Reels section displays your 11 videos in a responsive swiper carousel with reels dimensions (9:16 aspect ratio).

## File Structure

```
public/
├── videos/           # Place your video files here
│   ├── reel-1.mp4
│   ├── reel-2.mp4
│   └── ...
└── images/
    └── thumbnails/   # Place video thumbnail images here
        ├── reel-1.jpg
        ├── reel-2.jpg
        └── ...
```

## Video Specifications

- **Format**: MP4 (recommended for web)
- **Dimensions**: 9:16 aspect ratio (reels format)
- **Resolution**: 1080x1920 or similar vertical format
- **File Size**: Keep under 50MB per video for optimal loading
- **Duration**: 15-60 seconds recommended

## Thumbnail Specifications

- **Format**: JPG or PNG
- **Dimensions**: 1080x1920 (9:16 aspect ratio)
- **File Size**: Under 500KB per thumbnail

## How to Add Your Videos

1. **Upload Videos**: Place your 11 video files in `public/videos/` directory
2. **Upload Thumbnails**: Place corresponding thumbnail images in `public/images/thumbnails/` directory
3. **Update Video Data**: Edit the `videoReels` array in `src/app/[locale]/page.tsx` with your actual video information:

```typescript
const videoReels = [
  {
    id: "1",
    src: "/videos/your-video-1.mp4",
    title: "Your Video Title 1",
    thumbnail: "/images/thumbnails/your-thumbnail-1.jpg",
  },
  // ... add your other 10 videos
];
```

## Features

- **Responsive Design**: Adapts from 1 video on mobile to 4 videos on desktop
- **Auto-play**: Videos play on hover
- **Navigation**: Custom navigation buttons and pagination dots
- **Loop**: Infinite scrolling carousel
- **Touch Support**: Swipe navigation on mobile devices
- **Accessibility**: Keyboard navigation support

## Customization

You can customize the swiper behavior by modifying the Swiper configuration in `VideoReels.tsx`:

- Change autoplay delay
- Adjust breakpoints for different screen sizes
- Modify transition effects
- Update styling to match your brand

## Performance Notes

- Videos use lazy loading and preload="metadata" for optimal performance
- Thumbnails serve as poster images to reduce initial load time
- Consider using a video hosting service (like Vimeo, YouTube, or Cloudinary) for better performance with many videos
