# Sentinel Range Works Website

Static, deployable Sentinel Range Works website rebuilt from the uploaded Aimgun/Elementor visual direction and customized to SRW branding and confirmed business content.

## Pages

- `index.html` — Home
- `training.html` — Training and Florida Firearms Safety Course
- `about.html` — SRW approach
- `faq.html` — Student/license FAQs
- `contact.html` — Training inquiry form
- `404.html` — Custom 404 page

## Brand

- Business: **Sentinel Range Works**
- Tagline: **Training • Range • Defense**
- Primary brand red: `#ab0036`
- Logo: `assets/img/srw-logo.png`

## Before launch

Only business details that were not confirmed have been intentionally left unfilled. Update `assets/js/config.js`:

```js
window.SRW_CONFIG = {
  contactEmail: "YOUR-BUSINESS-EMAIL",
  phoneDisplay: "",
  phoneHref: "",
  serviceArea: "Florida",
  bookingUrl: ""
};
```

Also replace `YOUR-DOMAIN-HERE` in `sitemap.xml` once the Hostinger domain is connected.

## Hostinger deployment

This is a no-build static website. Connect the GitHub repository to Hostinger and deploy the repository root to the website's public directory. `index.html` is the entry point.

No Node.js build, WordPress installation, database, or package install is required for this version.

## Contact form behavior

The contact form is intentionally privacy-simple. It does not submit data to a third party. Once `contactEmail` is configured, clicking **Prepare Inquiry** opens the visitor's default email client with the form information pre-filled.

## Florida licensing disclaimer

Sentinel Range Works provides firearms training only and does not issue licenses. Final approval is determined by the Florida Department of Agriculture and Consumer Services.

## Original template

The uploaded source was an Elementor template kit. Its JSON files are not directly deployable from GitHub to Hostinger. A customized Elementor-source copy is included under `elementor-kit/` for reference or a future WordPress build, while the deployable site lives at the repository root.
