import {Component} from '@angular/core';

@Component({
  selector: 'app-workflows',
  templateUrl: './workflows.component.html',
  styleUrls: ['./workflows.component.css']
})
export class WorkflowsComponent {
  // Map technology names to external SVG URLs
  techIcons: { [key: string]: string } = {
    'Openrouter': 'https://registry.npmmirror.com/@lobehub/icons-static-png/1.46.0/files/light/openrouter.png',
    'Google Docs': 'https://www.pngfind.com/pngs/m/304-3045968_google-docs-for-business-google-docs-logo-png.png',
    'Hacker News': 'https://avatars.githubusercontent.com/u/4703068?s=200&v=4',
    'Gmail': 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/gmail.svg',
    'Kokoro': 'https://raw.githubusercontent.com/remsky/Kokoro-FastAPI/refs/heads/master/githubbanner.png',
    'Together AI': 'https://registry.npmmirror.com/@lobehub/icons-static-png/1.46.0/files/light/together-color.png',
    'Youtube': 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/youtube.svg',
    'Google Sheets': 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/googlesheets.svg',
    'FFmpeg': 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/ffmpeg.svg',
    'yt-dlp': 'https://avatars.githubusercontent.com/u/79589310?s=48&v=4',
  };

  projects = [
    {
      name: 'Horror Story Video Generator',
      technologies: ['Openrouter', 'Kokoro', 'Together AI', 'Youtube', 'FFmpeg', 'yt-dlp'],
      description: 'A workflow generates a 3-minute horror story transcript using AI via OpenRouter, converts it to audio narration with Kokoro Fast API TTS, creates an image based on the story with Together AI, downloads background music from YouTube, and combines these elements into a video.',
      github: 'https://github.com/hhnguyen-20/n8n-workflows/tree/main/horror_story_video_generator',
      image: 'assets/images/workflows/horror-story-video-generator.png',
      isExpanded: false
    },
    {
      name: 'Short Generator',
      technologies: ['Google Sheets', 'Youtube', 'Openrouter', 'FFmpeg', 'yt-dlp'],
      description: 'A workflow automates the creation and posting of motivational quote and meme shorts on YouTube, using AI via OpenRouter to generate content, Google Sheets for managing video and music data, and YouTube for downloading footage and uploading finished videos, with posts scheduled at specific times and comments added.',
      github: 'https://github.com/hhnguyen-20/n8n-workflows/tree/main/short_generator',
      image: 'assets/images/workflows/short-generator.png',
      isExpanded: false
    },
    {
      name: 'Hacker News Summary Emailer',
      technologies: ['Hacker News', 'Openrouter', 'Gmail'],
      description: 'A workflow fetches the top 10 articles from Hacker News, randomly selects one, summarizes it using AI through OpenRouter, and sends the summary along with the article link via Gmail.',
      github: 'https://github.com/hhnguyen-20/n8n-workflows/tree/main/hacker_news_summary_emailer',
      image: 'assets/images/workflows/hacker-news-summary-emailer.png',
      isExpanded: false
    },
    {
      name: 'Meeting Transcript Summarizer',
      technologies: ['Openrouter', 'Google Docs'],
      description: 'A workflow triggers on a form submission, summarizes a provided meeting transcript using AI via OpenRouter, and appends the summary to a Google Doc for storage and reference.',
      github: 'https://github.com/hhnguyen-20/n8n-workflows/tree/main/meeting_transcript_summarizer',
      image: 'assets/images/workflows/meeting-transcript-summarizer.png',
      isExpanded: false
    },
  ];

  constructor() {
  }

  /**
   * Toggles the `isExpanded` state of a project to show or hide its full description.
   * @param project The project whose description state is to be toggled.
   */
  toggleDescription(project: any): void {
    project.isExpanded = !project.isExpanded;
  }
}
