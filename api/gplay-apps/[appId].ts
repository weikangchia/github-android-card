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

      .icon {
        fill: #333
      }
    </style>

	  <rect x="0.5" y="0.5" rx="4.5" height="99%" stroke="#e4e2e2" width="399" fill="#fffefe" stroke-opacity="1" />

    <g transform="translate(25, 35)">
      <g transform="translate(0, 0)">
        <svg class="icon" x="0" y="-15" viewBox="0 0 16 16" width="16" height="16" xmlns="http://www.w3.org/2000/svg" version="1.1" xml:space="preserve">
          <g>
            <path d="m2.44799,5.21124c-0.2639,0 -0.48781,0.09203 -0.67187,0.27609c-0.18406,0.18406 -0.27611,0.40492 -0.27611,0.66271l0,3.95796c0,0.26424 0.09203,0.48795 0.27611,0.67204c0.18406,0.18406 0.40797,0.27611 0.67187,0.27611c0.26371,0 0.48626,-0.09203 0.66747,-0.27611c0.18085,-0.18406 0.27152,-0.40781 0.27152,-0.67204l0,-3.95796c0,-0.25781 -0.09203,-0.47865 -0.27611,-0.66271c-0.18409,-0.18406 -0.40509,-0.27609 -0.66287,-0.27609l0,0l-0.00001,0z" id="svg_3" />
            <path d="m10.0695,1.65819l0.65354,-1.2056c0.0429,-0.07982 0.02764,-0.14102 -0.04592,-0.18406c-0.07984,-0.03711 -0.14119,-0.01831 -0.18406,0.05508l-0.66268,1.21524c-0.58311,-0.25781 -1.19984,-0.38695 -1.8502,-0.38695c-0.65049,0 -1.26728,0.12917 -1.85017,0.38695l-0.66271,-1.21524c-0.04306,-0.07339 -0.10441,-0.09203 -0.18406,-0.05508c-0.07372,0.04323 -0.08898,0.10424 -0.04592,0.18406l0.65357,1.2056c-0.66271,0.33796 -1.19051,0.80863 -1.58322,1.41304c-0.39271,0.60474 -0.58915,1.26559 -0.58915,1.98371l8.51406,0c0,-0.71796 -0.19647,-1.37883 -0.58915,-1.98371c-0.39274,-0.60441 -0.91749,-1.07508 -1.57394,-1.41304l0.00001,0zm-3.77846,1.75357c-0.07068,0.07084 -0.15509,0.1061 -0.25321,0.1061c-0.09832,0 -0.18101,-0.03526 -0.24848,-0.1061c-0.06747,-0.07051 -0.10119,-0.15459 -0.10119,-0.25304c0,-0.09812 0.03373,-0.18237 0.10119,-0.25304c0.06747,-0.07051 0.15035,-0.10577 0.24848,-0.10577s0.18253,0.03526 0.25321,0.10577c0.07051,0.07084 0.10593,0.15493 0.10593,0.25304c-0.00019,0.09829 -0.03559,0.18253 -0.10593,0.25304zm3.87963,0c-0.0676,0.07084 -0.15049,0.1061 -0.24845,0.1061c-0.09834,0 -0.18273,-0.03526 -0.25327,-0.1061c-0.07065,-0.07051 -0.10591,-0.15459 -0.10591,-0.25304c0,-0.09812 0.03526,-0.18237 0.10591,-0.25304c0.07054,-0.07051 0.15493,-0.10577 0.25327,-0.10577c0.09812,0 0.18082,0.03526 0.24845,0.10577c0.06752,0.07084 0.10119,0.15493 0.10119,0.25304c0,0.09829 -0.0337,0.18253 -0.10119,0.25304z" id="svg_4" />
            <path d="m3.75509,11.51629c0,0.28254 0.09812,0.52171 0.2944,0.71798c0.19644,0.19627 0.43561,0.2944 0.71796,0.2944l0.68118,0l0.00934,2.08967c0,0.26387 0.09203,0.48795 0.27609,0.67204s0.40509,0.27611 0.66271,0.27611c0.26374,0 0.48779,-0.09203 0.67187,-0.27611s0.27611,-0.40813 0.27611,-0.67204l0,-2.08948l1.27019,0l0,2.08948c0,0.26387 0.092,0.48795 0.27609,0.67204s0.40794,0.27611 0.67187,0.27611c0.26374,0 0.48779,-0.09203 0.67187,-0.27611s0.27609,-0.40813 0.27609,-0.67204l0,-2.08948l0.69037,0c0.27609,0 0.51218,-0.09815 0.70882,-0.29442c0.19624,-0.19627 0.29442,-0.43544 0.29442,-0.71796l0,-6.13052l-8.44936,0l0,6.13032l-0.00001,0l-0.00001,0.00001z" id="svg_5" />
            <path d="m13.51203,5.21124c-0.25781,0 -0.47865,0.09067 -0.66273,0.27152c-0.18406,0.18118 -0.27609,0.40373 -0.27609,0.66727l0,3.95796c0,0.26424 0.092,0.48795 0.27609,0.67204s0.40509,0.27611 0.66273,0.27611c0.26374,0 0.48779,-0.09203 0.67187,-0.27611s0.27609,-0.40781 0.27609,-0.67204l0,-3.95796c0,-0.26357 -0.092,-0.48609 -0.27609,-0.66727c-0.18409,-0.18085 -0.40813,-0.27152 -0.67187,-0.27152z" id="svg_6" />
          </g>
        </svg>
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
