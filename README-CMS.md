# Netlify CMS Setup Guide

This travel blog is now set up with Netlify CMS for easy content management.

## Setup Instructions

### 1. Deploy to Netlify

1. Push your code to a GitHub repository
2. Connect the repository to Netlify
3. Enable Netlify Identity:
   - Go to Site settings > Identity
   - Click "Enable Identity"
   - Under "Registration preferences", select "Invite only" or "Open"
   - Enable "Git Gateway" (this allows the CMS to commit to your repo)

### 2. Access the CMS

1. Visit `https://your-site.netlify.app/admin/`
2. You'll be prompted to log in with Netlify Identity
3. Once logged in, you can manage destinations and pages

### 3. Managing Destinations

- Click on "Destinations" in the CMS sidebar
- Create new destinations or edit existing ones
- Each destination requires:
  - **ID**: Unique identifier (e.g., "rizal", "intramuros")
  - **Title**: Display name
  - **Region**: Select from dropdown
  - **Region Display Name**: How the region appears on cards
  - **Image**: Upload or use URL
  - **Description**: Short description for cards
  - **Details**: Full markdown content for the modal/page
  - **Published**: Toggle to show/hide

### 4. File Structure

- Destination markdown files are stored in `data/destinations/`
- Each file is named using the destination ID (e.g., `rizal.md`)
- The frontmatter contains metadata, body contains markdown content

### 5. How It Works

1. When you save in the CMS, it commits changes to your Git repository
2. Netlify automatically rebuilds your site
3. The site reads from the markdown files to display destinations

## Local Development

The CMS works best when deployed, but you can test locally:

1. Run `netlify dev` to start the Netlify CLI
2. Access the CMS at `http://localhost:8888/admin/`

## Notes

- Make sure your `netlify.toml` is configured correctly
- The admin folder must be accessible (not blocked by redirects)
- Git Gateway must be enabled for the CMS to commit changes

