import { VercelRequest, VercelResponse } from '@vercel/node';
import gplay from 'google-play-scraper';

export default async (_req: VercelRequest, res: VercelResponse) => {
  const appId = String(_req.query.appId);
  
  console.log(`Querying appId: ${appId}`);

  const data = await gplay.app({ appId });

  res.status(200)
  .setHeader("Cache-Control", "max-age=3600, public")
  .setHeader("Content-Type", "image/svg+xml; charset=utf-8")
  .send(`
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="400" height="160" viewBox="0 0 400 160" fill="none">
    <style>
      .header {
        font: 300 20px 'Roboto Light', Arial, Sans-Serif;
        fill: #333;
      }

      .sub-header {
        font: 300 13px 'Roboto Light', Arial, Sans-Serif;
        fill: #333;
      }

      .description {
        font: 400 13px 'Roboto', Arial, Sans-Serif;
        fill: #333
      }
    </style>

	  <rect x="0.5" y="0.5" rx="4.5" height="99%" stroke="#e4e2e2" width="399" fill="#fffefe" stroke-opacity="1" />

    <g transform="translate(25, 35)">
      <g transform="translate(0, 0)">
        <image href="${data.icon}" width="16" height="16" x="0" y="-15" />
      </g>
      <g transform="translate(25, 0)">
        <text x="0" y="0" class="header">${data.title}</text>
        <text x="0" y="18" class="sub-header">${data.developer}</text>
      </g>
    </g>

    <g transform="translate(0, 65)">
      <foreignObject x="50" y="0" width="325" height="60">
        <div xmlns="http://www.w3.org/1999/xhtml">
          <text class="description">${data.summary}</text>
        </div>
      </foreignObject>

      <g transform="translate(0, 60)">
        <g transform="translate(50, 0)">
          <use xlink:href="#${mapScoreToId(data.score)}" />
        </g>
      </g>
    </g>

    <symbol id="stars-full-star">
      <path d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218" />
    </symbol>

    <symbol id="stars-half-star">
      <path d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792" fill="#e9ba26" />
    </symbol>

    <symbol id="stars-all-star">
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-full-star" transform="translate(21)" />
      <use xlink:href="#stars-full-star" transform="translate(42)" />
      <use xlink:href="#stars-full-star" transform="translate(63)" />
      <use xlink:href="#stars-full-star" transform="translate(84)" />
    </symbol>

    <symbol id="stars-0-0-star">
      <use xlink:href="#stars-all-star" fill="#9b9b9b" />
    </symbol>

    <symbol id="stars-0-5-star">
      <use xlink:href="#stars-0-0-star" />
      <use xlink:href="#stars-half-star" />
    </symbol>

    <symbol id="stars-1-0-star">
      <use xlink:href="#stars-0-0-star" />
      <use xlink:href="#stars-full-star" fill="#e9ba26" />
    </symbol>

    <symbol id="stars-1-5-star">
      <use xlink:href="#stars-1-0-star" />
      <use xlink:href="#stars-half-star" transform="translate(21)" />
    </symbol>

    <symbol id="stars-2-0-star">
      <use xlink:href="#stars-1-0-star" />
      <use xlink:href="#stars-full-star" fill="#e9ba26" transform="translate(21)" />
    </symbol>

    <symbol id="stars-2-5-star">
      <use xlink:href="#stars-2-0-star" />
      <use xlink:href="#stars-half-star" transform="translate(42)" />
    </symbol>

    <symbol id="stars-3-0-star">
      <use xlink:href="#stars-2-0-star" />
      <use xlink:href="#stars-full-star" fill="#e9ba26" transform="translate(42)" />
    </symbol>

    <symbol id="stars-3-5-star">
      <use xlink:href="#stars-3-0-star" />
      <use xlink:href="#stars-half-star" transform="translate(63)" />
    </symbol>

    <symbol id="stars-4-0-star">
      <use xlink:href="#stars-3-0-star" />
      <use xlink:href="#stars-full-star" fill="#e9ba26" transform="translate(63)" />
    </symbol>

    <symbol id="stars-4-5-star">
      <use xlink:href="#stars-4-0-star" />
      <use xlink:href="#stars-half-star" transform="translate(84)" />
    </symbol>

    <symbol id="stars-5-0-star">
      <use xlink:href="#stars-all-star" fill="#e9ba26" />
    </symbol>
  </svg>
  `);
};

function mapScoreToId(score: number): string {
  const roundedNearestScore = Math.ceil(score * 2) / 2;

  switch(roundedNearestScore) {
    case 0: return 'stars-0-0-star';
    case 0.5: return 'stars-0-5-star';
    case 1: return 'stars-1-0-star';
    case 1.5: return 'stars-1-5-star';
    case 2: return 'stars-2-0-star';
    case 2.5: return 'stars-2-5-star';
    case 3: return 'stars-3-0-star';
    case 3.5: return 'stars-3-5-star';
    case 4: return 'stars-4-0-star';
    case 4.5: return 'stars-4-5-star';
    case 5: return 'stars-5-0-star';
    default: return 'stars-0-0-star';
  }
}
